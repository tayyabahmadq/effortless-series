import type { AcademicSubject } from "./types";

export const cy604a: AcademicSubject = {
  id: "cy-604-a",
  code: "CY-604(A)",
  title: "IT Business & Disaster Recovery Planning",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: disasters and the recovery vocabulary, the causes from earthquakes to cyber attacks, emergency management through its four phases, the laws and acts that govern continuity, and the business-continuity machinery of risk analysis, BIA and crisis management.",
  description:
    "Five units walk from disaster recovery and business continuity - terminology, types, principles, issues, best practices and the ISDR - through the nature and causes of disasters (earthquakes, volcanoes, tsunamis, landslides, floods, wildfires, drought, outages, intentional attacks), emergency management's phases and FEMA, the laws and acts from FCPA and GLBA to PIPEDA and the EU directives, ending with business continuity management: BCP objectives, ISO planning steps, risk analysis, business impact analysis and crisis management.",
  accentColor: "#f97316",
  emoji: "DR",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Disaster Recovery and Business Continuity",
      summary:
        "Unit I lays the subject's foundation: what disasters are and the recovery vocabulary (MTD, RTO, RPO), the types of disasters and their consequences, disaster recovery versus business continuity, the principles of planning, the issues planners face, the activities, solutions and best practices that answer them, and the International Strategy for Disaster Reduction.",
      chapter: {
        number: "01",
        title: "Disasters and the Recovery Discipline",
        intro:
          "Unit I covers the introduction to disaster recovery and business continuity, terminologies, disaster types and their consequences, DR versus BC, the principles of disaster recovery and business continuity, issues in disaster recovery and business continuity, addressed activities, solutions and best practices, and the International Strategy for Disaster Reduction (ISDR).",
        inOneBreath:
          "A disaster is any event that interrupts critical functions beyond tolerance; the vocabulary that disciplines the response is MTD (how long you can survive), RTO (how fast you restore) and RPO (how much data you may lose). Disaster recovery restores the technology; business continuity keeps the business running through it - two disciplines, one plan. Planning is principle-driven (life safety first), issue-constrained (cost, scope, drift) and best-practice-tested - with the ISDR giving the international risk-reduction frame.",
        sections: [
          {
            number: "1.1",
            title: "Disasters and the vocabulary of recovery",
            body: [
              "A disaster is any sudden event - natural, technical or human-caused - that disrupts an organization's critical functions beyond what normal operations can tolerate. The defining word is beyond tolerance: a brief network blip is an incident; an hour of datacenter loss is a disaster, because it crosses the maximum tolerable downtime (MTD) - the survival clock every plan is built around. The syllabus's terminologies hang on that clock: RTO (recovery time objective - how fast each system must be restored), RPO (recovery point objective - how much data loss is acceptable, measured backwards from the event), and downtime cost (what each lost hour costs the business).",
              "A worked recovery timeline fixes the vocabulary. A fire at 14:00 takes the primary datacenter: detection and activation by 14:15; incident command assembled by 14:30; failover to the secondary site completes at 18:00 (RTO for the trading system: 4 hours - met); data replicated up to 13:45 is restored, losing 15 minutes of transactions (RPO: 15 minutes - met); the finance system, MTD 72 hours, is rebuilt by Thursday. Each system has its own clock - the plan is a portfolio of tolerances, not one blanket number, and the BIA (Unit V) is what assigns them.",
              "The vocabulary's consequence is the section's design lesson: RTO and RPO are purchased, not wished for. Faster RTO means hot standby sites, replicated data, redundant power - each tier multiplies cost; bigger RPO tolerance means accepting lossy backups instead of continuous replication. The exam's causality sentence: the BIA sets MTD, RTO and RPO per function, and the DR budget buys the architecture that meets them - cheap plans miss their clocks; unmeasured plans do not know they missed.",
              "Exam framing: expect 'define the disaster recovery terminologies' or 'explain MTD, RTO and RPO'. Define each term, run the fire-at-14:00 timeline labelling every clock, and close with the purchasing sentence - tolerance is bought with architecture. Per-function clocks, not one clock - the portfolio framing is the answer's design half. The fire timeline is the worked trace - every clock named and met, minute by minute.",
            ],
            keyTerms: [
              { term: "MTD", definition: "Maximum tolerable downtime - the survival clock per critical function." },
              { term: "RTO", definition: "Recovery time objective - how fast the system must be back." },
              { term: "RPO", definition: "Recovery point objective - acceptable data loss measured backwards from the event." },
              { term: "Downtime cost", definition: "Business loss per hour of outage - the BIA's currency." },
            ],
            table: {
              caption: "The recovery vocabulary card.",
              headers: ["Term", "Question it answers", "Met by"],
              rows: [
                ["MTD", "How long can we survive without it?", "Sets the ceiling the plan must beat"],
                ["RTO", "How fast must it be restored?", "Standby sites, failover, runbooks"],
                ["RPO", "How much data may we lose?", "Replication, backup frequency"],
                ["Downtime cost", "What does an hour cost?", "Prioritizes the recovery order"],
              ],
            },
            bullets: [
              "Disaster = disruption beyond tolerance; tolerance is measured, not assumed.",
              "MTD: the survival clock per function; the plan must beat it.",
              "RTO: restoration speed - bought with hot/warm/cold standby tiers.",
              "RPO: data-loss tolerance - bought with replication vs backup frequency.",
              "Worked timeline: fire at 14:00, failover by 18:00, 15-minute data loss - clocks met.",
              "The BIA assigns each function its own tolerances - a portfolio, not one number.",
            ],
            diagram: {
              kind: "flow",
              title: "The disaster recovery timeline",
              caption: "From strike to restoration - every stage has a clock the plan must beat.",
              steps: [
                { label: "Strike", note: "fire takes the primary datacenter at 14:00" },
                { label: "Detect & declare", note: "by 14:15 - the plan activates" },
                { label: "Command", note: "incident team assembled by 14:30" },
                { label: "Failover", note: "secondary site live by 18:00 - RTO met" },
                { label: "Restore data", note: "replicated to 13:45 - RPO met" },
              ],
            },
            callout: {
              type: "tip",
              title: "Per-function clocks, not one clock",
              body: "The exam's structuring insight: a trading system may need RTO of minutes while payroll tolerates days - the plan is a portfolio of per-function tolerances set by the BIA. Writing that sentence converts a definitions answer into a design answer.",
            },
            examQuestions: [
              {
                q: "Define the disaster recovery terminologies - MTD, RTO, RPO and downtime cost - and work a complete recovery timeline for a datacenter fire showing where each clock is met.",
                marks: 14,
                outline: [
                  "Disaster = disruption beyond tolerable limits",
                  "MTD: per-function survival clock",
                  "RTO: restoration speed - failover architecture buys it",
                  "RPO: data loss tolerance - replication frequency buys it",
                  "Downtime cost: prioritizes recovery order",
                  "Timeline: strike 14:00 -> declared 14:15 -> failover 18:00 -> 15-min data loss",
                  "Portfolio sentence: each function carries its own clocks from the BIA",
                ],
              },
              {
                q: "Why is RPO measured backwards from the disaster rather than forwards?",
                marks: 7,
                outline: [

                  "It measures the age of the last recoverable copy at the moment of loss",

                  "Replication lag equals potential data loss",

                  "Tighter RPO = more continuous replication",

                  "Forwards from the event would measure recovery, not loss",

                  "The clock anchors at the moment capture stopped",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "Types of disasters and their consequences",
            body: [
              "Disaster types divide by cause, and the syllabus's taxonomy has three families. Natural disasters: earthquakes, volcanoes, tsunamis, landslides, floods, wildfires, drought - geography and season govern them; the organization chooses exposure by site. Technical/man-made accidental: power outages, telecommunication outages, hardware failure, software corruption, fires from faults - infrastructure's failure modes, largely internal. Human-intentional: terrorism, sabotage, arson, cyber attacks, theft, vandalism - adversaries choose timing deliberately. The classification matters because each family drives different planning: siting and insurance for natural, redundancy for technical, security and law enforcement coordination for intentional.",
              "The consequences run on four tracks, and the syllabus's 'consequences of disaster' is their ledger. Human: casualties, injuries, displaced staff, trauma. Physical: destroyed or damaged facilities, equipment, inventory - insured losses and replacement lead times. Operational: interrupted processes, lost data, broken supply chains - the DR plan's direct target. Economic and reputational: lost revenue, contractual penalties, regulatory exposure, customer churn - the costs that outlast the event. A worked consequence trace: a flood hits a distribution hub - human (two injuries), physical (warehouse flooded, 40% stock lost), operational (orders halted five days, routing shifted to a second hub), economic (lost sales, penalty clauses, a churn spike the next quarter). Four ledgers, one event.",
              "The planning consequence of the taxonomy: the risk assessment (Unit V) scores each type by probability and impact for the organization's actual geography and business, and the plan's priorities follow the score - not by disaster fame but by consequence weighted by likelihood. The exam's framing sentence: types are the input to risk scoring, and consequences are the scoring currency - both human and economic.",
              "Exam framing: expect 'classify disasters' or 'discuss the consequences of disasters'. Give the three-family taxonomy with examples, the four-track consequence ledger with the flood trace, and close with the scoring sentence - types in, consequences weighted, priorities out. The flood trace walks all four ledgers - human, physical, operational and economic in one event. The scoring sentence closes the loop - types in, consequences weighted, priorities out.",
            ],
            keyTerms: [
              { term: "Natural disaster", definition: "Earthquake, flood, wildfire - cause external to human intent; exposure chosen by siting." },
              { term: "Man-made accidental", definition: "Power/telecom outages, hardware failure - infrastructure failure modes." },
              { term: "Human-intentional", definition: "Terrorism, sabotage, arson, cyber attacks - adversary-chosen timing." },
              { term: "Consequence ledger", definition: "Human, physical, operational and economic tracks of disaster impact." },
            ],
            table: {
              caption: "The three disaster families.",
              headers: ["Family", "Examples", "Planning response"],
              rows: [
                ["Natural", "Earthquake, tsunami, flood, wildfire, drought", "Siting, insurance, drills, warnings"],
                ["Technical / accidental", "Power outage, telecom outage, hardware failure", "Redundancy, UPS/generators, maintenance"],
                ["Human-intentional", "Terrorism, sabotage, arson, cyber attack", "Security, law-enforcement liaison, backup isolation"],
              ],
            },
            bullets: [
              "Three families: natural (sited), accidental (redundant), intentional (secured).",
              "Consequence tracks: human, physical, operational, economic.",
              "Life safety leads every response - the human track is priority one.",
              "Worked flood trace: injuries, 40% stock loss, five-day halt, penalties and churn.",
              "Risk scoring weights each type by probability x impact for the actual site.",
              "Priorities follow the score - not disaster fame.",
            ],
            diagram: {
              kind: "fork",
              title: "The disaster taxonomy",
              caption: "Three families by cause - each drives a different planning response.",
              start: "Disaster",
              branches: [
                { label: "Natural", outcome: "earthquake, flood, wildfire - siting, insurance, drills", good: false },
                { label: "Technical / accidental", outcome: "power and telecom outages, hardware failure - redundancy", good: false },
                { label: "Human-intentional", outcome: "terrorism, sabotage, cyber - security and coordination", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Four ledgers per event",
              body: "The consequence answer's structure: run one event across all four tracks (human, physical, operational, economic) as the worked flood trace does. A taxonomy without consequences is half an answer - the ledgers are what the risk assessment actually scores.",
            },
            examQuestions: [
              {
                q: "Classify disasters into their principal types with examples, discuss the consequences of disaster across human, physical, operational and economic tracks, and work one event through all four tracks.",
                marks: 14,
                outline: [
                  "Natural: earthquakes, volcanoes, tsunamis, floods, wildfires, drought",
                  "Technical/accidental: power and telecom outages, hardware failure",
                  "Human-intentional: terrorism, sabotage, arson, cyber attacks",
                  "Human track: casualties, injuries, trauma - priority one",
                  "Physical track: facilities, equipment, inventory",
                  "Operational + economic: halted processes, lost data, penalties, churn",
                  "Flood trace: two injuries, 40% stock loss, five-day halt, next-quarter churn",
                ],
              },
              {
                q: "Why does the disaster type change the planning response?",
                marks: 7,
                outline: [

                  "Natural: exposure is chosen by siting - insurance and drills dominate",

                  "Technical: redundancy and maintenance are the levers",

                  "Intentional: adversaries adapt - security and coordination dominate",

                  "Adversaries adapt; hazards follow physics - defences differ accordingly",

                  "Probability models differ: actuarial versus adversarial",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Disaster recovery versus business continuity",
            body: [
              "The two disciplines answer different questions, and confusing them is the syllabus's first exam trap. Disaster recovery (DR) restores the technology: data centers, networks, systems and data - its output is the recovery of infrastructure within RTO/RPO targets. Business continuity (BC) keeps the business running: people, processes, suppliers, workarounds and alternate work modes - its output is continued operation of critical functions during and after the disruption. DR is the engineering half; BC is the operational half; a complete plan needs both, in one integrated programme.",
              "A worked contrast fixes the difference on one event. A ransomware attack encrypts the ERP system. DR's job: restore from isolated backups, rebuild servers, verify integrity - the technology clock. BC's job while DR runs: process the week's orders manually, reroute approvals to paper, notify customers, keep payroll running - the business clock. The company survives because BC bridges the gap DR is closing; it fails when either half is missing - restoring servers into a business that has lost its customers, or improvising business manually with no systems to return to.",
              "The integration points complete the section: the BIA (Unit V) serves both (critical functions and their tolerances), the plan document shares one crisis-management command structure, testing exercises both halves (DR failover tests and BC tabletop drills), and ownership sits with one executive sponsor. The exam's framing sentence: DR recovers the technology, BC sustains the business - the plan is integrated so neither half is executing blind.",
              "Exam framing: expect 'differentiate DR and BC'. Give both definitions, run the ransomware contrast with both clocks, list the integration points, and close with the halves sentence. One ransomware fires both clocks - DR restores while BC keeps the business moving. The integration points complete the answer - shared BIA, one command, joint testing.",
            ],
            keyTerms: [
              { term: "Disaster recovery (DR)", definition: "Restoring technology - systems, data, infrastructure - within RTO/RPO." },
              { term: "Business continuity (BC)", definition: "Sustaining critical business functions through the disruption." },
              { term: "Integrated plan", definition: "One programme, one command structure, shared BIA and testing." },
              { term: "Workaround", definition: "A BC manual or alternate process that bridges the DR gap." },
            ],
            table: {
              caption: "DR vs BC - the guaranteed contrast.",
              headers: ["Aspect", "Disaster recovery", "Business continuity"],
              rows: [
                ["Question", "How do we restore the technology?", "How does the business keep running?"],
                ["Objects", "Data centers, networks, systems, data", "People, processes, suppliers, premises"],
                ["Clock", "RTO / RPO per system", "MTD per critical function"],
                ["Techniques", "Failover, replication, backups, rebuilds", "Workarounds, manual modes, alternate sites, remote work"],
                ["Testing", "Failover and restore drills", "Tabletop exercises, walkthroughs"],
              ],
            },
            bullets: [
              "DR = technology recovery; BC = business sustainment - one programme, two halves.",
              "DR's output: infrastructure restored within RTO/RPO.",
              "BC's output: critical functions operating during the outage.",
              "Ransomware trace: DR restores from backups while BC processes orders manually.",
              "Integration: shared BIA, one command structure, joint testing, one sponsor.",
              "Failure mode: either half alone - servers restored into a lost business, or business improvised with nothing to return to.",
            ],
            diagram: {
              kind: "compare",
              title: "DR vs BC on one event",
              caption: "Two clocks run during the same disaster - and both must finish.",
              left: {
                heading: "Disaster recovery (technology)",
                items: [
                  "Restore from isolated backups",
                  "Rebuild servers, verify integrity",
                  "RTO/RPO clocks per system",
                  "Owned by IT operations",
                ],
              },
              right: {
                heading: "Business continuity (business)",
                items: [
                  "Manual order processing and approvals",
                  "Customer and supplier communication",
                  "MTD clocks per function",
                  "Owned by business operations",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "One ransomware, two clocks",
              body: "The single best illustration for the contrast question: ransomware fires both clocks at once - DR restores the ERP while BC keeps orders and payroll moving manually. Answer 'what is the difference?' with this scenario and the distinction demonstrates itself.",
            },
            examQuestions: [
              {
                q: "Differentiate disaster recovery from business continuity with definitions, a worked ransomware contrast running both clocks, and the integration points of a complete plan.",
                marks: 14,
                outline: [
                  "DR: restore technology within RTO/RPO - the engineering half",
                  "BC: sustain critical functions within MTD - the operational half",
                  "Ransomware trace: backups restored while orders process manually",
                  "DR techniques: failover, replication, rebuilds",
                  "BC techniques: workarounds, manual modes, alternate sites",
                  "Integration: shared BIA, one command, joint testing, one sponsor",
                  "Failure modes: either half alone loses the business",
                ],
              },
              {
                q: "Why can a perfect DR plan still fail the business?",
                marks: 7,
                outline: [

                  "Technology restored but processes, people and suppliers unsupported",

                  "Customers churn during the gap if BC never bridged it",

                  "BC and DR must be integrated, not parallel silos",

                  "Manual workarounds need rehearsal, not documentation alone",

                  "Suppliers and regulators run their own clocks during the gap",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "Principles of disaster recovery and business continuity",
            body: [
              "The principles are the plan's constitution - the rules that survive every technology change. Life safety first: no recovery action outranks protecting people; evacuation and accountability precede any failover. Critical functions first: recovery order follows the BIA's ranking, not executive seniority or system age. Redundancy with separation: backups, alternate sites and alternate suppliers must be independent of the primary (a backup in the same building as the primary is a bookmark, not a plan). Testing is the plan: an untested plan is a hypothesis; scheduled tests with recorded findings are the only evidence it works.",
              "The remaining principles complete the constitution. Documentation and simplicity: the plan must be executable by people who did not write it, at 03:00, under stress - checklists and decision trees beat prose. Ownership and sponsorship: a named executive owns the programme; every recovery team has named members and alternates. Continuous maintenance: the plan decays with every org chart change, system change and personnel change - review cycles keep it current. And cost-effectiveness: tolerance is bought (1.1's purchasing sentence) - the plan buys exactly the RTO/RPO the business needs, no more.",
              "A worked principle application shows the constitution biting. A plan lists the CEO as sole incident commander with no alternate; the disaster happens during the CEO's flight - command stalls for hours (ownership violated). The fix is structural: named alternates at every role, an activation procedure that does not depend on any one person, and a test scenario that specifically runs with the primary unavailable. One violated principle, one concrete failure, one structural fix - the pattern the exam wants for 'principles' questions.",
              "Exam framing: expect 'explain the principles of DR and BC'. List the eight principles with one-line rationales, work the sole-commander failure as the applied example, and close with the constitution sentence - principles survive technology changes; plans do not. The CEO-flight failure shows one violated principle producing one concrete structural fix. The constitution sentence closes it - principles survive technology changes; plans do not.",
            ],
            keyTerms: [
              { term: "Life safety first", definition: "No recovery action outranks protecting people." },
              { term: "Separation of backups", definition: "Redundancy independent of the primary site and systems." },
              { term: "Testing is the plan", definition: "Scheduled, recorded tests are the only evidence a plan works." },
              { term: "Named alternates", definition: "Every role has a backup owner - no single point of command." },
            ],
            table: {
              caption: "The principles' constitution.",
              headers: ["Principle", "Rule", "Violated by"],
              rows: [
                ["Life safety first", "People before systems", "Recovery work inside a dangerous site"],
                ["Critical functions first", "BIA order, not seniority", "Restoring the executive floor first"],
                ["Redundancy with separation", "Independent backups and sites", "Backup tapes in the same room"],
                ["Testing is the plan", "Scheduled recorded tests", "A plan untouched since drafting"],
                ["Documentation and simplicity", "Checklists executable under stress", "Prose only the author understands"],
                ["Ownership and alternates", "Named owners and backups", "A sole commander with no alternate"],
              ],
            },
            bullets: [
              "Life safety precedes every recovery action.",
              "Recovery order follows the BIA's critical-function ranking.",
              "Redundancy must be separated - same-room backups are bookmarks.",
              "Untested plans are hypotheses; tests with findings are evidence.",
              "Checklists beat prose: executable at 03:00 by non-authors.",
              "Named ownership with alternates; maintenance cycles against decay.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The priority pyramid of principles",
              caption: "From life safety at the top down to cost-effectiveness at the base - order matters.",
              tiers: [
                { label: "Cost-effectiveness", note: "buy only the tolerance the business needs" },
                { label: "Maintenance and testing", note: "review cycles; scheduled recorded tests" },
                { label: "Critical functions and redundancy", note: "BIA order; separated backups" },
                { label: "Life safety first", note: "people before systems - always" },
              ],
            },
            callout: {
              type: "warning",
              title: "The untested plan is the most expensive document",
              body: "Organizations pay for plans that were never exercised, then discover during real events that contact lists are stale, credentials are unknown and runbooks reference decommissioned systems. The principle sentence: testing is not a step of the plan - testing is the plan. Any 'principles' answer that skips testing is incomplete.",
            },
            examQuestions: [
              {
                q: "Explain the principles of disaster recovery and business continuity, apply them to a sole-commander-with-no-alternate failure, and rank the principles by priority with rationale.",
                marks: 14,
                outline: [
                  "Life safety first - people before systems",
                  "Critical functions first - BIA order, not seniority",
                  "Redundancy with separation - independent backups and sites",
                  "Testing is the plan - scheduled, recorded tests",
                  "Documentation and simplicity - checklists executable at 03:00",
                  "Ownership with named alternates - the CEO-flight failure",
                  "Maintenance and cost-effectiveness - decay and purchasing sentences",
                ],
              },
              {
                q: "Why must backups be separated from the primary site?",
                marks: 7,
                outline: [

                  "Shared fate: fire, flood or attack destroys both together",

                  "Separation extends to infrastructure and network paths",

                  "Air-gapped or offline copies defend against ransomware specifically",

                  "Physical adjacency shares fire, flood and power domains",

                  "Backup credentials must differ from production credentials",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Issues in disaster recovery and business continuity",
            body: [
              "The issues are why plans fail, and the syllabus's list splits into resource, organizational and technical families. Resource issues: budget competition (DR competes with features for the same money - and loses until an event proves the cost), competing priorities, and the skills gap (DR is a specialist discipline few teams staff). Organizational issues: management buy-in (without an executive sponsor, plans decay into shelfware), ownership ambiguity (DR is everyone's job and therefore nobody's), and organizational change (reorgs, acquisitions and staff turnover silently obsolete contact lists and procedures).",
              "Technical issues complete the family: system complexity (virtualization, cloud and distributed architectures multiply the recovery matrix), data volume, testing disruption (realistic tests interfere with production), vendor dependency, and the drift problem - every change to infrastructure that bypasses the plan widens the gap between the documented plan and the real environment. A worked issue trace: a company's RTO of 4 hours was set when systems were three servers; five years later the estate is 200 VMs across two clouds - the plan's failover procedure references systems that no longer exist. Nobody violated the plan; the plan simply aged. The fix is structural: change-control hooks that force plan updates, plus scheduled full-scale tests that would have surfaced the gap.",
              "The risk-matrix view organizes the issues for planning: each issue plots by likelihood (an untested plan fails almost certainly when used) and impact (shelfware fails at the worst moment) - the upper-right quadrant is where most DR failures live. The exam's framing sentence: issues are the failure catalogue, and every fix is structural (sponsorship, change control, scheduled tests) rather than documentary - rewriting the plan never fixes the drift that breaks it.",
              "Exam framing: expect 'discuss the issues in DR and BC'. Give the resource/organizational/technical families with the aging-plan trace, plot the issues on the risk matrix, and close with the structural-fix sentence. The aging-plan trace shows drift's silence - nothing alarms the day the plan becomes fiction. The risk-matrix plot is the visual - untested plans sit in the act-now quadrant.",
            ],
            keyTerms: [
              { term: "Shelfware", definition: "A plan written, filed and never exercised - the dominant failure mode." },
              { term: "Plan drift", definition: "Infrastructure and organizational change outpacing the documented plan." },
              { term: "Change-control hooks", definition: "Requiring plan updates as part of every system change." },
              { term: "Skills gap", definition: "DR expertise is scarce - plans depend on knowledge that leaves." },
            ],
            table: {
              caption: "The issue families and structural fixes.",
              headers: ["Family", "Issues", "Structural fix"],
              rows: [
                ["Resource", "Budget, competing priorities, skills", "BIA-quantified value; cross-training"],
                ["Organizational", "Buy-in, ownership, change", "Executive sponsor; named owners; change hooks"],
                ["Technical", "Complexity, data volume, testing disruption, drift", "Scheduled full-scale tests; automation"],
              ],
            },
            bullets: [
              "Resource: DR loses budget arguments until an event proves the cost.",
              "Organizational: no sponsor means shelfware; reorgs obsolete contacts.",
              "Technical: complexity multiplies the recovery matrix; volume breaks windows.",
              "Worked trace: three-server plan vs 200-VM estate - aged into fiction.",
              "Risk matrix: untested plans plot likelihood-high, impact-high.",
              "Fixes are structural: sponsorship, change hooks, scheduled tests - not rewrites.",
            ],
            diagram: {
              kind: "matrix",
              title: "Where DR plans fail",
              caption: "Plot each issue by likelihood and impact - the upper-right quadrant is the failure zone.",
              axes: { x: "Likelihood (low -> high)", y: "Impact (low -> high)" },
              quadrants: [
                { label: "Watchlist", note: "rare but severe - e.g. cloud provider lock-in" },
                { label: "The failure zone", note: "untested plans, drift, no sponsor - act here" },
                { label: "Accept", note: "minor documentation gaps" },
                { label: "Monitor", note: "skill gaps amid strong testing culture" },
              ],
            },
            callout: {
              type: "warning",
              title: "Plans age silently",
              body: "The drift problem's trap: nothing marks the day the plan became fiction - no alarm fires when a server is decommissioned or a team lead leaves. Structural fixes (change-control hooks, scheduled full-scale tests) create the alarm; document reviews alone do not. This is the issue most worth naming in every 'issues' answer.",
            },
            examQuestions: [
              {
                q: "Discuss the issues in disaster recovery and business continuity across resource, organizational and technical families, work the aging-plan trace, and state the structural fixes with the risk-matrix view.",
                marks: 14,
                outline: [
                  "Resource: budget competition, priorities, skills gap",
                  "Organizational: buy-in, ownership ambiguity, organizational change",
                  "Technical: complexity, data volume, testing disruption, drift",
                  "Aging trace: three-server plan vs 200-VM estate - fiction by age",
                  "Fix: change-control hooks + scheduled full-scale tests",
                  "Risk matrix: untested plans sit likelihood-high, impact-high",
                  "Sentence: fixes are structural, not documentary",
                ],
              },
              {
                q: "Why does DR lose budget arguments more often than it should?",
                marks: 7,
                outline: [

                  "Its benefit is an avoided event - invisible in normal accounting",

                  "The BIA quantifies downtime cost to make the loss visible",

                  "Competing feature spending has immediate, visible returns",

                  "Insurance premiums are the only visible DR spend until an event",

                  "BIA numbers convert hypothetical losses into budget lines",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Addressed activities, solutions and best practices",
            body: [
              "The programme's activities run in a continuous cycle, and the syllabus's 'addressed activities' is that cycle: risk analysis and BIA (what threatens what, and what it costs), strategy and architecture (standby tiers, backup regimes, workarounds), plan development (runbooks, checklists, contacts), implementation (infrastructure, training, documentation), testing and exercise (from tabletop to full failover), and maintenance (reviews, change hooks, lessons). The cycle's engine is the test finding - every exercise produces gaps, every gap feeds the next revision.",
              "The solutions map to the tolerance tiers, and the syllabus's 'solutions' is the tier catalogue: cold sites (empty facility, days to weeks - cheapest), warm sites (equipment staged, hours to days), hot sites (fully running replicas, minutes to hours), cloud DR (replicated VMs, on-demand scale - the modern default), and the data-layer solutions: backups (offline, immutable, 3-2-1 rule - three copies, two media, one offsite), replication (synchronous for near-zero RPO, asynchronous for cost), and high-availability clusters for the tightest RTOs. Each tier prices 1.1's tolerance purchase; the BIA's clocks choose the tier.",
              "The best practices bind it together: executive sponsorship with budget, the BIA before architecture, the 3-2-1-1-0 backup rule's modern form (three copies, two media, one offsite, one immutable/air-gapped, zero errors verified), scheduled testing at every tier, documented runbooks executable by non-authors, and integration with security (DR sites inherit the same access controls - a recovery site is not an exception). A worked tier-selection trace: the BIA sets the trading system RTO at 15 minutes and the RPO at 0 - the only architecture that meets both is synchronous replication to a hot site; payroll (RTO 48h, RPO 24h) is served by nightly backups to a cloud warm tier. One BIA, two tiers, both clocks met at minimal cost.",
              "Exam framing: expect 'describe DR solutions and best practices'. Give the activity cycle, the tier catalogue with the tier-selection trace, and the best-practice list - closing with the BIA-before-architecture sentence. One BIA, two tiers - hot site for trading, cloud warm for payroll, both clocks met. The tier-selection trace is the worked example - clocks choosing architectures at minimal cost.",
            ],
            keyTerms: [
              { term: "Cold / warm / hot site", definition: "Standby tiers from empty facility to running replica - price follows RTO." },
              { term: "3-2-1 rule", definition: "Three copies, two media, one offsite - extended with one immutable, zero errors." },
              { term: "Tabletop exercise", definition: "Walkthrough test of decisions and contacts - the cheapest regular test." },
              { term: "Failover test", definition: "Actual switchover to the standby - the full-scale evidence." },
            ],
            table: {
              caption: "The standby tier catalogue.",
              headers: ["Tier", "What it is", "Typical RTO", "Typical cost"],
              rows: [
                ["Cold site", "Empty powered facility; restore from scratch", "Days to weeks", "Lowest"],
                ["Warm site", "Equipment staged, data restored", "Hours to days", "Medium"],
                ["Hot site", "Running replica, near-live data", "Minutes to hours", "High"],
                ["Cloud DR", "Replicated VMs, on-demand activation", "Minutes to hours", "Pay-per-use"],
                ["HA cluster", "Active-active local redundancy", "Seconds to minutes", "Highest"],
              ],
            },
            bullets: [
              "Activity cycle: risk/BIA -> strategy -> plans -> implement -> test -> maintain.",
              "Tiers: cold, warm, hot, cloud DR, HA - price follows tolerance.",
              "Data solutions: 3-2-1-1-0 backups, synchronous/asynchronous replication.",
              "Worked selection: trading RTO 15 min/RPO 0 -> hot site; payroll -> cloud warm.",
              "Best practices: sponsor, BIA first, scheduled tests, integrated security.",
              "Sentence: no tolerance, no design - the BIA precedes architecture.",
            ],
            diagram: {
              kind: "cycle",
              title: "The DR/BC programme cycle",
              caption: "Test findings drive the next revision - the cycle never closes permanently.",
              steps: [
                { label: "Analyze", note: "risk analysis + BIA set tolerances" },
                { label: "Design", note: "tiers and architecture to meet clocks" },
                { label: "Implement", note: "infrastructure, runbooks, training" },
                { label: "Test", note: "tabletop to full failover - findings recorded" },
                { label: "Maintain", note: "gaps fixed; plan revised; cycle restarts" },
              ],
            },
            callout: {
              type: "tip",
              title: "One BIA, two tiers",
              body: "The tier-selection trace is the section's exam asset: one BIA producing a hot site for the trading system and a cloud warm tier for payroll - both clocks met at minimal total cost. It demonstrates that the tier catalogue is a portfolio decision, not a single purchase.",
            },
            examQuestions: [
              {
                q: "Describe the addressed activities of a DR/BC programme, the standby tier catalogue with a worked tier-selection trace, and the best practices that bind them.",
                marks: 14,
                outline: [
                  "Cycle: risk/BIA -> strategy -> plans -> implement -> test -> maintain",
                  "Tiers: cold, warm, hot, cloud DR, HA clusters with typical RTOs",
                  "Data solutions: 3-2-1-1-0 backups; sync/async replication",
                  "Trace: trading RTO 15 min + RPO 0 -> hot site; payroll -> cloud warm",
                  "Best practices: sponsor, BIA first, scheduled tests, integrated security",
                  "Testing ladder: tabletop quarterly, failover annually",
                  "Sentence: no tolerance, no design",
                ],
              },
              {
                q: "Why is an immutable or air-gapped copy added to the classic 3-2-1 rule?",
                marks: 7,
                outline: [

                  "Ransomware encrypts or deletes connected backups first",

                  "Immutability/offline defeats automated backup destruction",

                  "Verified zero-error restores close the loop",

                  "Attacker dwell time spans backup cycles - connected copies share fate",

                  "WORM policies enforce non-deletion technically",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "The International Strategy for Disaster Reduction (ISDR)",
            body: [
              "The ISDR is the United Nations' international framework (established 1999, succeeding the IDNDR decade) for reducing disaster risk across countries - the recognition that disasters are not fate but the interaction of hazards with unprepared societies, and that prevention outperforms response. Its institutional home evolved into the UN Office for Disaster Risk Reduction (UNDRR), and its policy instruments are the world conferences' frameworks of action (the Yokohama Strategy, the Hyogo Framework 2005-2015, and the Sendai Framework 2015-2030).",
              "The ISDR's strategy has named pillars that the syllabus expects: risk awareness (understanding hazards, vulnerability and exposure - national risk assessments, public education), political commitment (national platforms and legislation assigning responsibilities), application of risk-reduction measures (land-use planning, building codes, early-warning systems), and partnership and coordination (governments, UN agencies, NGOs, private sector, communities - including the private-sector arm that connects to this subject's corporate planning). A worked application connects ISDR to the corporate syllabus: a national early-warning system for cyclones (ISDR pillar) feeds the corporate BC plan's activation triggers - the international strategy is the context in which every organizational plan executes.",
              "The Sendai Framework's four priorities organize the modern answer: understanding disaster risk; strengthening governance; investing in resilience (structural and non-structural measures); and preparedness with build-back-better recovery. Its seven global targets measure mortality, affected people, economic loss and damage to critical infrastructure - the metrics that make risk reduction comparable across nations. The exam's framing sentence: the ISDR moves the unit's corporate lens to the international one - risk reduction as a shared, measured, multi-level strategy in which corporate DR/BC plans are the private-sector layer.",
              "Exam framing: expect 'write on the International Strategy for Disaster Reduction'. Give its origin and instruments (Hyogo, Sendai), the strategy pillars with the cyclone-trigger connection, and the Sendai priorities - closing with the private-sector-layer sentence. The trigger connection closes the answer - national early warning fires the corporate activation procedure. The Sendai priorities are the modern frame - understand, govern, invest, prepare, build back better.",
            ],
            keyTerms: [
              { term: "ISDR", definition: "The UN's International Strategy for Disaster Reduction (1999) - prevention over response." },
              { term: "UNDRR", definition: "The UN Office for Disaster Risk Reduction - ISDR's institutional home." },
              { term: "Sendai Framework", definition: "2015-2030 global framework: four priorities, seven measurable targets." },
              { term: "Hyogo Framework", definition: "2005-2015 action framework - the ISDR's landmark instrument." },
            ],
            table: {
              caption: "The ISDR strategy pillars.",
              headers: ["Pillar", "Content", "Organizational echo"],
              rows: [
                ["Risk awareness", "Hazard, vulnerability, exposure understanding", "Corporate risk analysis and BIA"],
                ["Political commitment", "National platforms, legislation", "Executive sponsorship"],
                ["Application of measures", "Codes, land use, early warning", "Redundant architecture, drills"],
                ["Partnership", "Multi-stakeholder coordination", "Supplier and vendor coordination"],
              ],
            },
            bullets: [
              "ISDR (1999): disasters are hazard x vulnerability - prevention outperforms response.",
              "Instruments: Yokohama Strategy -> Hyogo (2005-15) -> Sendai (2015-30).",
              "Pillars: awareness, commitment, application, partnership.",
              "Sendai priorities: understand risk, govern, invest, prepare with build-back-better.",
              "Seven targets: mortality, affected, economic loss, critical infrastructure damage.",
              "Connection: national early warning feeds corporate activation triggers.",
            ],
            diagram: {
              kind: "layers",
              title: "The risk-reduction stack",
              caption: "International strategy to corporate plan - each layer feeds the one below.",
              layers: [
                { label: "Corporate DR/BC plans", note: "activation triggers, recovery tiers - the private layer" },
                { label: "Community and local preparedness", note: "drills, local response capacity" },
                { label: "National platforms", note: "legislation, early warning, risk assessment" },
                { label: "International framework", note: "ISDR / Sendai - priorities and targets" },
              ],
            },
            callout: {
              type: "tip",
              title: "The trigger connection",
              body: "The sentence that ties the international framework to this corporate syllabus: 'a national cyclone early warning (an ISDR pillar) is exactly what fires the corporate plan's activation procedure - the two layers meet at the trigger.' Use it to close ISDR answers.",
            },
            examQuestions: [
              {
                q: "Write on the International Strategy for Disaster Reduction: origin and instruments (Yokohama, Hyogo, Sendai), the strategy pillars, Sendai's priorities and targets, and the connection to corporate DR/BC planning.",
                marks: 14,
                outline: [
                  "ISDR (1999): prevention over response; UNDRR institutional home",
                  "Yokohama Strategy -> Hyogo Framework 2005-15 -> Sendai 2015-30",
                  "Pillars: risk awareness, political commitment, application, partnership",
                  "Sendai priorities: understand, govern, invest, prepare/build-back-better",
                  "Seven targets: mortality, affected, loss, critical infrastructure",
                  "Connection: national early warning fires corporate activation triggers",
                  "Corporate plans are the private-sector layer of the strategy",
                ],
              },
              {
                q: "What does 'build-back-better' mean in the Sendai recovery context?",
                marks: 7,
                outline: [

                  "Recovery must not rebuild the vulnerability that caused the loss",

                  "Reconstruction applies improved codes, siting and redundancy",

                  "The recovery phase becomes a risk-reduction opportunity",

                  "Rebuilding identically re-arms the same hazard",

                  "Funding windows favour upgraded reconstruction",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Nature and Causes of Disasters",
      summary:
        "Unit II knows the enemy: the nature and categorization of disasters, then each cause in detail - earthquakes with self-protection, volcanoes and tsunamis with protection and forecasting, landslides and floods with effects and prevention, wildfires and drought with safety and mitigation, man-made accidents and the power and telecom outages that cascade, and the categorization of human-intentional disasters.",
      chapter: {
        number: "02",
        title: "The Causes Catalogue",
        intro:
          "Unit II covers the nature and categorization of disasters; natural disasters - earthquakes and protecting yourself during one, volcanoes with protection and forecasting, tsunamis and protecting yourself, landslides with effects and protection, floods with effects and prevention, wildfires with safety measures, drought with consequences and measures to overcome; and man-made disasters - accidents, power and telecommunication outages, and the categorization of human-intentional disasters.",
        inOneBreath:
          "Each cause has its own physics, warning horizon and protection playbook: earthquakes strike without warning (drop, cover, hold), volcanoes and tsunamis give monitored lead time, landslides and floods follow water, wildfires follow fuel and wind, drought follows deficit slowly - and the man-made families (accidents, outages, intentional attacks) are the ones the organization directly engineers against. Categorization drives which lever - siting, monitoring, redundancy or security - each disaster answers to.",
        sections: [
          {
            number: "2.1",
            title: "Nature and categorization of disasters",
            body: [
              "The nature of a disaster is captured by four measurable properties, and the syllabus's 'nature of disasters' is exactly this profile: onset speed (seconds for an earthquake, weeks for a drought), warning horizon (none, minutes, or monitored lead time), geographic scope (point impact, regional, or continental), and duration plus recurrence (single event vs seasonal repetition). The profile decides everything downstream: warning-driven disasters get monitoring and alerting plans; no-warning disasters get drilling and hardened structures; slow-onset disasters get resource banking and rationing plans.",
              "Categorization builds on the profile: natural-geophysical (earthquakes, volcanoes, tsunamis), natural-hydro-meteorological (floods, wildfires, drought, storms), natural-biological (epidemics), man-made accidental (outages, structural failures, transport accidents), and man-made intentional (terrorism, sabotage, arson, cyber attacks). Each category pairs with its dominant lever: geophysical with siting and construction standards; hydro-meteorological with forecasting and water management; accidental with redundancy and maintenance; intentional with security and intelligence.",
              "A worked profile comparison shows the analysis earning its keep. Earthquake: onset seconds, no warning, point-to-regional, single event with aftershocks - levers are building codes and drills. Flood: onset hours-to-days, weather warnings, regional, seasonal recurrence - levers are siting, levees, and seasonal drills. Drought: onset months, progressive signals, continental, multi-year recurrence - levers are water banking and rationing plans. One table, three disasters, three lever sets - and the same exercise applied to the organization's own geography is what the risk assessment (Unit V) does with this catalogue.",
              "Exam framing: expect 'explain the nature and categorization of disasters'. Give the four-property profile, the category-lever pairing table, and the three-disaster profile comparison - closing with the lever sentence: each category answers to a different lever. Profile before plan - onset, warning, scope and duration decide the response's shape. The three-disaster profile comparison is the worked table - earthquake, flood, drought side by side.",
            ],
            keyTerms: [
              { term: "Onset speed", definition: "How fast the disaster develops - seconds (earthquake) to months (drought)." },
              { term: "Warning horizon", definition: "Lead time available for response - none, minutes, or monitored days." },
              { term: "Geophysical hazards", definition: "Earth-driven: earthquakes, volcanoes, tsunamis - siting and construction levers." },
              { term: "Hydro-meteorological hazards", definition: "Water and weather driven: floods, wildfires, drought - forecasting and management levers." },
            ],
            table: {
              caption: "Categories and their dominant levers.",
              headers: ["Category", "Members", "Dominant lever"],
              rows: [
                ["Geophysical", "Earthquake, volcano, tsunami", "Siting, building codes, drills"],
                ["Hydro-meteorological", "Flood, wildfire, drought, storm", "Forecasting, water management"],
                ["Biological", "Epidemics", "Health protocols, continuity staffing"],
                ["Man-made accidental", "Outages, failures, accidents", "Redundancy, maintenance"],
                ["Man-made intentional", "Terrorism, sabotage, cyber", "Security, intelligence, isolation"],
              ],
            },
            bullets: [
              "Four properties profile every disaster: onset, warning, scope, duration/recurrence.",
              "Profile decides the plan: drills for no-warning, alerts for monitored, banking for slow-onset.",
              "Five categories: geophysical, hydro-meteorological, biological, accidental, intentional.",
              "Category pairs with lever: siting, forecasting, redundancy, or security.",
              "Worked comparison: earthquake vs flood vs drought - three profiles, three lever sets.",
              "The risk assessment applies this catalogue to the organization's own geography.",
            ],
            diagram: {
              kind: "compare",
              title: "Natural vs man-made disasters",
              caption: "Where the cause lives decides which lever the organization holds.",
              left: {
                heading: "Natural disasters",
                items: [
                  "Cause external to human intent",
                  "Exposure chosen by siting and design",
                  "Monitoring and warnings where physics allows",
                  "Levers: codes, siting, forecasting, drills",
                ],
              },
              right: {
                heading: "Man-made disasters",
                items: [
                  "Cause in human systems - accidental or intentional",
                  "Exposure is engineered - and reducible",
                  "Accidental: redundancy and maintenance",
                  "Intentional: security, isolation, coordination",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Profile before plan",
              body: "The section's one-line method: 'profile the hazard first (onset, warning, scope, duration) - the plan's shape follows the profile.' A no-warning earthquake plan built on alerting is a category error; the profile is how such mistakes are caught on paper.",
            },
            examQuestions: [
              {
                q: "Explain the nature of disasters via the four-property profile and categorize disasters with their dominant planning levers, illustrated by profile comparisons of earthquake, flood and drought.",
                marks: 14,
                outline: [
                  "Profile: onset speed, warning horizon, scope, duration/recurrence",
                  "Categories: geophysical, hydro-meteorological, biological, accidental, intentional",
                  "Levers per category: siting/codes, forecasting, protocols, redundancy, security",
                  "Earthquake: seconds, no warning - codes and drills",
                  "Flood: hours-days, warned, seasonal - siting and levees",
                  "Drought: months, progressive, multi-year - water banking and rationing",
                  "Risk assessment applies the catalogue to the organization's geography",
                ],
              },
              {
                q: "Why does a slow-onset disaster demand a different plan shape than a sudden one?",
                marks: 7,
                outline: [

                  "Slow onset allows progressive response: banking, rationing, staged withdrawals",

                  "Sudden onset compresses everything into pre-drilled reflexes",

                  "Warning horizon, not severity, decides the response architecture",

                  "Slow hazards allow staged withdrawals and demand tiers",

                  "Sudden hazards invest everything in pre-drilled reflexes",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Earthquakes - effects and protecting yourself",
            body: [
              "An earthquake is the sudden release of accumulated tectonic strain: the rupture radiates seismic waves - P waves (fastest, compressional), S waves (shearing, more destructive), and surface waves (slowest, most damaging to structures). The syllabus's effects list: ground shaking and structural collapse, surface rupture, liquefaction (wet soils losing strength and behaving like fluid), landslides triggered on slopes, and the secondary disasters that follow - fires from broken gas lines, and tsunamis from undersea rupture. Magnitude (energy, logarithmic) and intensity (observed shaking, depends on distance and soil) are the twin measures.",
              "Protecting yourself during an earthquake is drilled reflex, and the syllabus's procedure is the sequence: during the shaking - drop, cover and hold on (under sturdy furniture or against an interior wall, protecting head and neck; never run downstairs or outside during shaking, since falling facades are the leading killer); away from windows, mirrors and tall unsecured furniture. Indoors, stay indoors; outdoors, move clear of buildings, power lines and trees. If driving, pull over away from bridges and overpasses and stay in the vehicle.",
              "The after-sequence completes the playbook, and the organizational drill formalizes it: expect aftershocks (treat each as a fresh event); check people first, then fires and gas (shut off valves if trained); evacuate damaged structures via stairs (never elevators); account for personnel at the assembly point (1.4's life-safety principle in motion); then, and only then, assess the facility for the recovery phase. A worked drill trace: shaking begins at 11:02 - all staff drop-cover-hold for 40 seconds; evacuation via stairs by 11:08; assembly-point headcount complete by 11:15; facility assessment tags the building amber - the recovery plan activates for the amber tier. Life safety's clock finished before the DR clock started - exactly as the principles ordered.",
              "Exam framing: expect 'explain earthquakes and self-protection'. Give the wave types and effects, the drop-cover-hold sequence and its reasons, the after-sequence with the drill trace, and close with the principle sentence - life safety's clock precedes the recovery clock. Drills exist because reflexes must beat instincts - the running-out statistic is the reason. The drill trace is the worked sequence - forty seconds, evacuation, headcount, amber tier.",
            ],
            keyTerms: [
              { term: "P / S waves", definition: "Compressional (fastest) and shearing seismic waves - the shaking's anatomy." },
              { term: "Liquefaction", definition: "Water-saturated soils losing strength under shaking - buildings sink and tilt." },
              { term: "Drop, cover, hold on", definition: "The during-shaking reflex: shelter under cover, protect head and neck." },
              { term: "Aftershock", definition: "Follow-on quakes - treated as fresh events in every after-sequence." },
            ],
            table: {
              caption: "The earthquake playbook.",
              headers: ["Phase", "Actions", "Prohibited"],
              rows: [
                ["During shaking", "Drop, cover, hold on; interior wall if no cover", "Running out, elevators, windows"],
                ["Immediately after", "Expect aftershocks; check people; gas/fire check", "Re-entering damaged structures"],
                ["Evacuation", "Stairs only; clear of facades and lines", "Elevators"],
                ["Accountability", "Assembly point headcount; search missing", "Resuming work before accounting"],
                ["Assessment", "Tag facility; activate DR tier", "Recovery actions before life safety"],
              ],
            },
            bullets: [
              "Waves: P (fast), S (destructive), surface (most damaging to structures).",
              "Effects: shaking, rupture, liquefaction, triggered landslides, secondary fires and tsunamis.",
              "Magnitude = energy (logarithmic); intensity = observed shaking (distance and soil).",
              "Drop-cover-hold: running outside exposes you to falling facades - stay in, get under.",
              "After: aftershocks expected; people first; stairs only; gas checks trained-only.",
              "Drill trace: 40-second hold, evacuation by 11:08, headcount by 11:15, DR at amber.",
            ],
            diagram: {
              kind: "flow",
              title: "The earthquake response sequence",
              caption: "Reflex, evacuation, accountability, assessment - life safety's clock before recovery's.",
              steps: [
                { label: "Shaking starts", note: "drop, cover, hold on - 30-60 seconds" },
                { label: "Shaking stops", note: "expect aftershocks; injuries checked" },
                { label: "Evacuate", note: "stairs only, clear of facades" },
                { label: "Account", note: "assembly-point headcount; search missing" },
                { label: "Assess", note: "tag facility; activate the DR tier" },
              ],
            },
            callout: {
              type: "warning",
              title: "The most dangerous move is running out",
              body: "The counter-intuitive fact the exam loves: most earthquake injuries come from people running outside during shaking - into falling facades, glass and wires. The drilled reflex (drop, cover, hold) is safer than the instinct (run). Quote it as the reason drills exist: reflexes must beat instincts.",
            },
            examQuestions: [
              {
                q: "Explain earthquakes - wave types and effects including secondary disasters - and describe the complete self-protection sequence during and after shaking with a worked drill trace.",
                marks: 14,
                outline: [
                  "P, S and surface waves; magnitude vs intensity",
                  "Effects: shaking, rupture, liquefaction, landslides, fires, tsunamis",
                  "During: drop, cover, hold on - never run out during shaking",
                  "Indoor/outdoor/driving variants",
                  "After: aftershocks, people first, gas/fire checks, stairs only",
                  "Accountability: assembly headcount, search missing",
                  "Trace: 11:02 hold -> 11:08 evacuated -> 11:15 accounted -> amber DR tier",
                ],
              },
              {
                q: "Why is liquefaction so destructive to buildings?",
                marks: 7,
                outline: [

                  "Saturated soils lose shear strength under cyclic shaking",

                  "Foundations lose bearing - structures sink, tilt or settle unevenly",

                  "Mitigation: soil improvement or deep foundations in vulnerable zones",

                  "Cyclic shaking liquefies loose, water-logged sands specifically",

                  "Damage concentrates where fill and riverbanks meet",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "Volcanoes and tsunamis - protection and forecasting",
            body: [
              "Volcanoes give the warning that earthquakes do not - because the precursors are observable. Eruption types: effusive (fluid lava flows - localized destruction) and explosive (ash columns, pyroclastic flows - the deadliest hazard, travelling at hundreds of km/h), plus lahars (volcanic mudflows) and ashfall (the wide-area hazard that collapses roofs, shorts power systems and stalls jet engines). Forecasting rests on monitored precursors: seismicity swarms, ground deformation (inflation before eruption), gas emissions (SO2 flux rising), and thermal changes - observatory networks read these continuously and raise alert levels.",
              "Protection from volcanoes follows the hazard map: exclusion zones around the summit sized by eruption history, evacuation routes drilled before the alert rises, and ashfall countermeasures for the wide ring - roof load clearance, sealed air intakes, respiratory protection, and the aviation coordination that reroutes flights around ash columns. The syllabus's 'estimating earthquakes' companion note appears here too: paleoseismology (trenching fault traces for past-rupture evidence) and historical catalogs estimate recurrence intervals - the long-cycle statistics that site selection uses.",
              "Tsunamis are the earthquake-and-volcano family's oceanic branch, and their protection is built on the warning cascade: generation (undersea rupture or collapse), detection (deep-ocean pressure sensors - DART buoys - plus coastal tide gauges), forecast, and alerting (national warning centres issuing tsunami warnings over broadcast and cell networks). The self-protection sequence the syllabus names: if you feel strong shaking at the coast, do not wait for the siren - move inland and uphill immediately; the natural warning is the first warning. A worked timeline: undersea quake at 09:41 - DART detection confirms by 09:52; coastal sirens at 10:05; the city's horizontal evacuation completes by 10:40 - three waves inland in 45 minutes because the detection cascade ran ahead of the water.",
              "Exam framing: expect 'explain volcano protection and forecasting' or 'tsunami warning and self-protection'. Give the eruption hazards and monitored precursors, the hazard-map protection measures, the tsunami detection cascade, and the natural-warning rule with the timeline trace. The sea withdrawing is the warning - waiting spends the evacuation window. The timeline is the worked cascade - detection ahead of the water, minute by minute.",
            ],
            keyTerms: [
              { term: "Pyroclastic flow", definition: "Superheated ash-and-gas avalanche - the deadliest volcanic hazard." },
              { term: "Lahar", definition: "Volcanic mudflow - follows valleys far beyond the summit." },
              { term: "DART buoy", definition: "Deep-ocean pressure sensor confirming tsunami generation." },
              { term: "Natural warning", definition: "Strong coastal shaking or sea withdrawal - move uphill immediately." },
            ],
            table: {
              caption: "Volcanic hazards and their countermeasures.",
              headers: ["Hazard", "Reach", "Countermeasure"],
              rows: [
                ["Pyroclastic flows", "Kilometres, minutes", "Exclusion zones; pre-emptive evacuation"],
                ["Lahars", "Valleys, tens of km", "Valley evacuation routes; barriers"],
                ["Ashfall", "Hundreds of km", "Roof clearing, air filtration, aviation rerouting"],
                ["Lava flows", "Slow, localized", "Property zoning; access control"],
                ["Gas emissions", "Local downwind", "Respiratory protection; alerts"],
              ],
            },
            bullets: [
              "Eruption types: effusive flows vs explosive columns with pyroclastic flows.",
              "Forecasting precursors: seismic swarms, deformation, gas flux, thermal.",
              "Protection: hazard maps, exclusion zones, drilled evacuation, ashfall measures.",
              "Estimating earthquakes: paleoseismology trenching + historical catalogs.",
              "Tsunami cascade: rupture -> DART confirmation -> sirens -> horizontal evacuation.",
              "Natural warning rule: strong coastal shaking = move uphill now, no siren needed.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The tsunami warning cascade",
              caption: "Detection runs ahead of the water - every stage buys evacuation minutes.",
              stages: [
                { label: "Generation", note: "undersea quake at 09:41" },
                { label: "Detect", note: "DART buoys + tide gauges confirm by 09:52" },
                { label: "Forecast", note: "travel-time and run-up modelling" },
                { label: "Alert", note: "sirens and broadcasts at 10:05" },
                { label: "Evacuate", note: "inland and uphill - complete by 10:40" },
              ],
            },
            callout: {
              type: "warning",
              title: "The sea withdrawing is the warning",
              body: "The tsunami lesson that saves lives: receding water exposes the seabed for hundreds of metres - the trough of the incoming wave. Waiting to see the wave or hear a second siren spends the evacuation window. 'Feel strong shaking at the coast - move uphill immediately' is the drilled rule and the exam's safety line.",
            },
            examQuestions: [
              {
                q: "Explain volcanic eruption hazards, their forecasting precursors and protection measures, and describe the tsunami warning cascade with the natural-warning self-protection rule.",
                marks: 14,
                outline: [
                  "Effusive vs explosive eruptions; pyroclastic flows, lahars, ashfall",
                  "Precursors: seismic swarms, ground deformation, gas flux, thermal",
                  "Protection: hazard maps, exclusion zones, drilled evacuations, ash measures",
                  "Paleoseismology and catalogs estimate earthquake recurrence",
                  "Tsunami cascade: rupture -> DART confirmation -> forecast -> sirens",
                  "Timeline: quake 09:41 -> confirmation 09:52 -> sirens 10:05 -> safe 10:40",
                  "Natural warning: strong coastal shaking = move inland and uphill now",
                ],
              },
              {
                q: "Why does ashfall threaten aviation and power systems far beyond the eruption zone?",
                marks: 7,
                outline: [

                  "Ash melts in jet engines and stalls them; visibility and sensors degrade",

                  "Conductive ash short-circuits insulators and substations",

                  "It travels hundreds of kilometres downwind - wide-area countermeasures",

                  "Fine ash bypasses air filters and cooling systems",

                  "Ash clouds cross jurisdictions - rerouting is international",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "Landslides and floods - effects, protection and prevention",
            body: [
              "Landslides are the downslope failure of soil and rock under gravity, triggered by saturation, slope cuts, earthquakes or volcanic activity. The syllabus's effects: burial of structures and roads, blocked rivers (forming flood-prone temporary dams), severed transport and utilities, and casualties among slope-foot settlements. Protection: hazard zoning by slope and geology, retaining structures and slope drainage (water is the trigger - drainage is the control), reforestation of bare slopes, and the behavioural rule - build away from steep cut slopes and debris fans, and evacuate uphill-lateral when heavy rain follows fire or quake on slopes above.",
              "Floods are water exceeding a channel's capacity: riverine (slow rise over days), flash (sudden, steep-catchment), and urban (drainage overwhelmed). The effects ledger: drowning and injury, structural damage (hydrostatic pressure undermines walls; scour undermines foundations), contamination of water supplies, lost inventory and equipment, and the business interruption that lasts past the water's retreat (drying, mould, electrical inspection). Prevention measures follow the water: upstream retention (dams, recharge basins), channel management (dredging, embankments - with the failure risk that breached embankments discharge catastrophically), urban drainage design for return periods, zoning away from floodplains, and property-level measures (raised equipment plinths, flood doors, sump pumps).",
              "A worked two-hazard trace shows the pair's interaction, which is why the syllabus lists them together: sustained rain saturates a hillside above a river town - the landslide dams the river at 02:00; the temporary dam fails at dawn, releasing a flash flood onto the same town. The combined plan needs both playbooks: slope monitoring and upstream evacuation for the landslide phase, then high-ground routing and utility isolation for the flood phase - one geography, two hazards, one integrated plan. The exam's sentence: landslides and floods are one water cycle viewed from two angles, and the prevention portfolio (drainage, zoning, monitoring, structural measures) serves both.",
              "Exam framing: expect 'explain landslides and floods with protection measures'. Give each hazard's causes and effects, the prevention portfolio per hazard, and the interaction trace - closing with the one-water-cycle sentence. Drainage is the shared control - one water cycle, two hazards, one prevention portfolio. The interaction trace is the pair's reason - a landslide dam failing into the same town's flood.",
            ],
            keyTerms: [
              { term: "Landslide trigger", definition: "Saturation, slope cuts or shaking that sets gravity-driven slope failure moving." },
              { term: "Riverine vs flash flood", definition: "Slow multi-day rise vs sudden steep-catchment surge - different warning horizons." },
              { term: "Scour", definition: "Flow undermining foundations - the structural failure mechanism in floods." },
              { term: "Floodplain zoning", definition: "Keeping development off the floodplain - the cheapest flood prevention." },
            ],
            table: {
              caption: "The two hazards' ledgers.",
              headers: ["Aspect", "Landslide", "Flood"],
              rows: [
                ["Trigger", "Saturation, cuts, shaking", "Rain volume exceeding drainage"],
                ["Speed", "Seconds to minutes", "Hours (riverine) to minutes (flash)"],
                ["Primary effects", "Burial, road severance, dammed rivers", "Drowning, structural damage, contamination"],
                ["Prevention", "Slope drainage, retaining, reforestation, zoning", "Retention, channel works, zoning, plinths"],
                ["Business impact", "Access and utility loss", "Equipment loss, drying and mould delay"],
              ],
            },
            bullets: [
              "Landslides: saturation-driven slope failure; drainage is the primary control.",
              "Effects: burial, blocked rivers forming temporary dams, severed routes.",
              "Floods: riverine, flash and urban types with distinct warning horizons.",
              "Prevention: retention upstream, channel works, zoning, property-level plinths.",
              "Worked interaction: landslide dam fails at dawn - flash flood on the same town.",
              "One water cycle, two hazards - integrated slope-plus-flood planning.",
            ],
            diagram: {
              kind: "compare",
              title: "Landslide vs flood",
              caption: "Same water cycle, two failure modes - the prevention portfolio overlaps.",
              left: {
                heading: "Landslide",
                items: [
                  "Trigger: saturation, slope cuts, shaking",
                  "Speed: seconds to minutes",
                  "Effects: burial, blocked rivers, severed routes",
                  "Levers: slope drainage, retaining walls, reforestation, zoning",
                ],
              },
              right: {
                heading: "Flood",
                items: [
                  "Trigger: rain volume exceeding channel capacity",
                  "Speed: hours (riverine) to minutes (flash)",
                  "Effects: drowning, scour, contamination, business interruption",
                  "Levers: retention, embankments, zoning, raised plinths",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Drainage is the shared control",
              body: "The portfolio insight: slope drainage prevents landslides, urban drainage prevents floods - water management is the common lever across both hazards. When the syllabus lists them together, that shared control is the reason; make the connection explicit.",
            },
            examQuestions: [
              {
                q: "Explain landslides - triggers, effects, protection - and floods - types, effects, prevention measures - with a worked trace of their interaction.",
                marks: 14,
                outline: [
                  "Landslide triggers: saturation, slope cuts, earthquakes",
                  "Landslide effects: burial, blocked rivers, severed transport",
                  "Protection: hazard zoning, slope drainage, retaining structures, reforestation",
                  "Flood types: riverine, flash, urban",
                  "Flood effects: drowning, scour, contamination, business interruption",
                  "Prevention: retention, channel management, zoning, raised plinths",
                  "Interaction: landslide dam fails at dawn - flash flood on the same town",
                ],
              },
              {
                q: "Why can engineered embankments increase flood catastrophe risk?",
                marks: 7,
                outline: [

                  "They constrain water so levels run higher behind the embankment",

                  "A breach discharges the accumulated volume catastrophically",

                  "Combined with development behind them, exposure grows",

                  "Protected zones invite building into the floodplain",

                  "Failure probability rises with age and deferred maintenance",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "Wildfires and drought - safety and mitigation",
            body: [
              "Wildfires burn through the fuel-load triangle - fuel (dry vegetation), weather (heat, wind, low humidity) and ignition - and their modern severity comes from fuel accumulation (fire suppression letting deadfall pile up) and the wildland-urban interface (homes built into fire-prone terrain). The syllabus's safety measures: defensible space around structures (cleared vegetation zones - the ember-resistant moat), fire-resistant construction (roofs, vents, decks), access for apparatus (turnaround and water supply), and the behavioural playbook - evacuate early on warning (fire moves faster than traffic), never re-enter, and heed ember-storm awareness (spotting fires start kilometres ahead of the flame front).",
              "Drought is the slow hazard: a precipitation deficit over seasons that depletes soil moisture, streams, reservoirs and groundwater in sequence. The syllabus's consequences: agricultural loss and food insecurity, water-supply stress and rationing, hydropower reduction, ecosystem damage, and the compounding hazards it arms (dry landscapes feed the next wildfire season). Measures to overcome drought effects, in escalation order: demand management (metering, restrictions, pricing), supply diversification (inter-basin transfers, desalination, reuse), storage banking (aquifer recharge, reservoir management), and agricultural adaptation (drought-resistant crops, drip irrigation, crop-calendar shifts).",
              "A worked mitigation trace shows the slow-hazard playbook's shape. A two-season deficit: year one - metered restrictions and crop-calendar shifts hold losses low; aquifer recharge captures the sporadic rain; year two deepens - rationing tiers escalate, inter-basin transfer activates, and the armed fuel load drives an early wildfire season whose defensible-space programme holds losses to structures-only. The exam's structure: wildfires are fast (evacuation drills, defensible space) while drought is slow (banking, rationing tiers) - and they compound, which is why the syllabus pairs them.",
              "Exam framing: expect 'write on wildfires and drought'. Give the fire triangle and interface problem with the safety measures, the drought consequence ladder and the mitigation tiers, and the compounding trace - closing with the fast-hazard/slow-hazard pairing sentence. Fast hazards drill; slow hazards bank - and drought arms the fire season that follows. The two-season trace shows the escalation - restrictions, then transfers, then the armed fire season held.",
            ],
            keyTerms: [
              { term: "Fire triangle", definition: "Fuel + weather + ignition - remove one leg and the fire cannot run." },
              { term: "Defensible space", definition: "Cleared, ember-resistant zones around structures." },
              { term: "Wildland-urban interface", definition: "Development inside fire-prone terrain - the exposure amplifier." },
              { term: "Aquifer recharge", definition: "Banking water underground in wet periods - the drought store." },
            ],
            table: {
              caption: "Fast hazard vs slow hazard.",
              headers: ["Aspect", "Wildfire", "Drought"],
              rows: [
                ["Onset", "Minutes-hours, wind-driven", "Seasons of deficit"],
                ["Warning", "Fire weather forecasts, spot forecasts", "Rain gauges, reservoir trends"],
                ["Primary measure", "Defensible space, early evacuation", "Demand management, banking"],
                ["Escalation", "Evacuation tiers by fire spread", "Rationing tiers by reservoir level"],
                ["Compounding", "Burned slopes feed landslides", "Dry fuels arm the fire season"],
              ],
            },
            bullets: [
              "Fire triangle: fuel, weather, ignition - suppression attacks all three.",
              "Interface development amplifies exposure; defensible space is the moat.",
              "Safety: early evacuation (fire outruns traffic), never re-enter, ember awareness.",
              "Drought ladder: soil moisture -> streams -> reservoirs -> groundwater.",
              "Mitigation tiers: demand management -> diversification -> storage banking -> agriculture.",
              "Compounding: drought arms fuels; fires denude slopes into landslide season.",
            ],
            diagram: {
              kind: "matrix",
              title: "Hazards by onset and duration",
              caption: "The four hazards of this unit plotted - response architecture follows the quadrant.",
              axes: { x: "Onset (slow -> sudden)", y: "Duration (short -> prolonged)" },
              quadrants: [
                { label: "Drought", note: "slow onset, prolonged - banking and rationing tiers" },
                { label: "Flood / fire seasons", note: "slower onset, prolonged regional impact" },
                { label: "Landslide", note: "sudden, short - slope monitoring and drills" },
                { label: "Earthquake", note: "sudden, short shaking + long recovery - drills and codes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Fast hazards drill, slow hazards bank",
              body: "The pairing sentence that organizes the whole unit: 'fast hazards (earthquake, flash flood, wildfire) are answered by drills and hardened assets; slow hazards (drought) are answered by banking and rationing tiers.' The wildfire-drought pair shows both logics - and their compounding.",
            },
            examQuestions: [
              {
                q: "Explain wildfires - the fire triangle, interface exposure and safety measures - and drought - consequences and the escalation of measures - with a worked compounding trace.",
                marks: 14,
                outline: [
                  "Fire triangle: fuel, weather, ignition",
                  "Interface development amplifies exposure; defensible space as the moat",
                  "Safety: early evacuation, ember-storm awareness, fire-resistant construction",
                  "Drought consequences: agriculture, water supply, hydropower, ecosystem",
                  "Measures ladder: demand management -> diversification -> banking -> adaptation",
                  "Trace: two-season deficit -> rationing tiers -> transfer -> armed fire season held to structures-only",
                  "Pairing: fast hazards drill; slow hazards bank - and they compound",
                ],
              },
              {
                q: "Why does fire suppression increase long-term fire severity?",
                marks: 7,
                outline: [

                  "Suppression preserves fuel accumulation across seasons",

                  "Fires that do start burn hotter and crown further",

                  "Prescribed burning and fuel reduction rebalance the triangle",

                  "Decades of exclusion create continuous fuel ladders",

                  "Low-intensity natural fires are the ecosystem's fuel control",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Man-made disasters - accidents, power and telecommunication outages",
            body: [
              "The accidental family is engineered - which means its disasters follow engineering's failure patterns. Accidents: industrial (fires, chemical releases, structural collapse), transport, and workplace - each with root causes in design, maintenance or procedure. The syllabus's named infrastructure failures are the two outages every organization plans against: power outage (grid failure, transformer loss, substation faults) and telecommunication outage (fiber cuts, exchange failures, satellite or wireless degradation). Their defining feature is the cascade: one element's failure redistributes load until the next element fails.",
              "The outage cascade is the exam's core mechanism. A worked power cascade: a substation transformer fails on a summer evening; its load redistributes to neighbouring feeders running near capacity; protective relays trip two of them; the generation-demand imbalance drops system frequency; under-frequency load shedding disconnects whole districts; the metro stalls, hospitals switch to generators, data centers ride UPS into their generators. Telecommunications cascade similarly: a fiber cut takes a ring's only intact path; traffic concentrates on backup routes; congestion controls shed traffic; dependent services (payment rails, cloud access) fail in sympathy. The organization's counters: dual feeds from independent substations, generators with tested fuel contracts, diverse network paths, and UPS ride-through sized to generator start.",
              "The organizational playbook completes the section: the single-points-of-failure audit (every element whose failure cascades - find it, dual it or accept it knowingly), maintenance windows scheduled against load curves, outage drills that exercise the generator and failover paths (untested generators fail on the first real start - the fuel system is the usual culprit), and outage RTOs per service from the BIA. The exam's framing sentence: man-made accidental disasters are cascades, and the plan's job is to break the chain at every link the BIA says the business cannot afford.",
              "Exam framing: expect 'explain power and telecommunication outages as man-made disasters'. Define the accidental family, run the power-cascade and telecom-cascade traces, give the organizational counters, and close with the breaking-the-chain sentence. The generator that never started is the classic drill finding - fuel systems fail first. The cascade trace is the mechanism - five links from one transformer to citywide shedding.",
            ],
            keyTerms: [
              { term: "Cascade failure", definition: "One element's failure redistributes load until the next fails - the outage mechanism." },
              { term: "Under-frequency load shedding", definition: "Deliberate disconnection protecting the grid as frequency falls." },
              { term: "Route diversity", definition: "Network paths over different physical routes and carriers." },
              { term: "SPOF audit", definition: "Single-points-of-failure review: dual, accept or engineer out each one." },
            ],
            table: {
              caption: "Outage counters per failure point.",
              headers: ["Failure point", "Cascade effect", "Counter"],
              rows: [
                ["Substation transformer", "Feeder overloads; grid trips", "Dual feeds from independent substations"],
                ["Generation-demand gap", "Frequency drop; shedding", "Generators with tested fuel contracts"],
                ["Fiber ring cut", "Backup route congestion", "Diverse physical routes and carriers"],
                ["Exchange failure", "Dependent services fail in sympathy", "Multi-carrier voice; satellite backup"],
                ["UPS exhaustion", "Systems die during generator start", "UPS sized to generator start + load"],
              ],
            },
            bullets: [
              "Accidental family: industrial, transport, workplace - root causes in design and maintenance.",
              "Power cascade: transformer -> redistribution -> trips -> frequency drop -> shedding.",
              "Telecom cascade: fiber cut -> congestion -> dependent-service failures.",
              "Counters: dual feeds, generators with fuel contracts, diverse routes, UPS sizing.",
              "Untested generators fail on first real start - fuel systems are the usual cause.",
              "Sentence: outages are cascades; the plan breaks the chain at every link the BIA names.",
            ],
            diagram: {
              kind: "flow",
              title: "The power outage cascade",
              caption: "Five links from one transformer to citywide shutdown - the plan breaks every affordable link.",
              steps: [
                { label: "Element fails", note: "transformer loss at summer peak" },
                { label: "Redistribution", note: "load shifts to near-capacity feeders" },
                { label: "Protection trips", note: "relays disconnect the overloaded feeders" },
                { label: "Frequency drops", note: "generation-demand imbalance spreads" },
                { label: "Load shedding", note: "districts disconnected; facilities on generators" },
              ],
            },
            callout: {
              type: "warning",
              title: "The generator that never started",
              body: "The most common outage-drill finding: the standby generator starts but fails under load - stale fuel, dead starting batteries, or an untested transfer switch. The plan assumed the generator; the drill exposed the fuel system. 'Tested fuel contracts and load-tested starts' is the counter worth quoting.",
            },
            examQuestions: [
              {
                q: "Explain man-made accidental disasters and the power and telecommunication outage cascades with worked traces, and the organizational counters that break the chain.",
                marks: 14,
                outline: [
                  "Accidental family: industrial, transport, workplace failures",
                  "Power cascade: transformer -> redistribution -> trips -> shedding",
                  "Telecom cascade: fiber cut -> congestion -> dependent failures",
                  "Counters: dual independent feeds; generators with fuel contracts",
                  "Network: diverse physical routes and multi-carrier paths",
                  "UPS ride-through sized to generator start",
                  "SPOF audit + load-tested drills; break the chain per the BIA",
                ],
              },
              {
                q: "Why must UPS ride-through be sized to generator start rather than generator rating?",
                marks: 7,
                outline: [

                  "The gap between mains loss and generator acceptance is the exposure",

                  "Transfer plus warm-up can exceed seconds on cold starts",

                  "UPS bridges that gap; generator capacity covers the sustained load",

                  "Cold starts and failed first attempts extend the gap",

                  "Generator capacity covers sustained load, not the gap",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "Human-intentional disasters - categorization",
            body: [
              "Intentional disasters differ from every other family in one property: an adversary chooses the time, target and method to maximize harm - and adapts when defences harden. The syllabus's categorization divides by actor and motive: terrorism (ideological or political violence against symbols and populations), sabotage (deliberate damage to infrastructure - by outsiders, disgruntled insiders, or in industrial conflict), arson (fire as a deliberate act), theft and vandalism (asset-targeted crime), and cyber attacks (the digital branch - ransomware, DDoS, data destruction). Each category pairs with its defensive discipline: terrorism with physical security and emergency response; sabotage with insider-risk programmes and industrial security; arson with fire forensics and monitoring; theft with access control; cyber with the security programme proper.",
              "A worked categorization trace shows the classes' operational differences. Three events, one warehouse: a fire of suspicious origin (arson - fire forensics and law-enforcement evidence handling replace routine restoration: the scene is evidence until released, which changes the recovery sequence itself); a night intrusion stripping servers (theft - access-control review, insurance claim, forensic imaging); a defaced website and encrypted databases (cyber - isolation before restoration, backup integrity checks, legal notification duties). Same facility, same week - three categories, three different first moves. The categorization is not academic: the first move of the response differs by category, and misclassification (treating arson as accident) destroys evidence and voids claims.",
              "The planning consequence completes the section: intentional disasters enter the risk assessment with probability weighted by profile (visibility, symbolism, adversary presence) and impact weighted by adaptation (defences that worked yesterday attract tomorrow's variant). The controls are layered: deterrence (visibility of security), detection (monitoring, alarms), delay (physical barriers), response (guards, law enforcement liaison), and recovery (forensically aware restoration). The exam's sentence: intentional disasters are planned by an adversary, so the plan must be layered and adaptive - a single control is a single point of defeat.",
              "Exam framing: expect 'categorize human-intentional disasters'. Give the actor-motive classes with their paired disciplines, run the three-event warehouse trace, and close with the layered-defence sentence. Treating arson as accident voids the claim - evidence preservation precedes restoration. The three-event warehouse trace is the worked classification - three first moves, one facility.",
            ],
            keyTerms: [
              { term: "Sabotage", definition: "Deliberate infrastructure damage - outsider, insider or industrial-conflict origin." },
              { term: "Arson", definition: "Deliberate fire - the scene is evidence until forensics release it." },
              { term: "Insider risk", definition: "The authorized-user threat - the hardest category to detect." },
              { term: "Layered defence", definition: "Deter, detect, delay, respond, recover - no single control suffices." },
            ],
            table: {
              caption: "The intentional-disaster categories.",
              headers: ["Category", "Actor and motive", "Paired discipline"],
              rows: [
                ["Terrorism", "Ideological/political violence", "Physical security, emergency response"],
                ["Sabotage", "Outsider, insider, industrial conflict", "Insider risk, industrial security"],
                ["Arson", "Deliberate fire-setting", "Fire forensics, monitoring"],
                ["Theft / vandalism", "Asset-targeted crime", "Access control, inventory"],
                ["Cyber attacks", "Ransomware, DDoS, destruction", "The security programme"],
              ],
            },
            bullets: [
              "Defining property: an adversary chooses time, target, method - and adapts.",
              "Categories: terrorism, sabotage, arson, theft/vandalism, cyber.",
              "Each pairs with a discipline - misclassification destroys evidence and claims.",
              "Warehouse trace: suspicious fire (evidence first), server theft (forensics), cyber (isolate).",
              "Probability weighted by profile; impact weighted by adaptation.",
              "Layered defence: deter, detect, delay, respond, recover - adaptive by design.",
            ],
            diagram: {
              kind: "fork",
              title: "First moves by category",
              caption: "The categorization decides the response's first hour - misclassification is costly.",
              start: "Intentional event detected",
              branches: [
                { label: "Suspicious fire", outcome: "arson protocol - scene preserved as evidence; forensics before restoration", good: false },
                { label: "Intrusion/theft", outcome: "secure and image first - forensics, access review, insurance", good: false },
                { label: "Cyber attack", outcome: "isolate, check backup integrity, legal notification duties", good: false },
                { label: "Physical attack", outcome: "life safety and law-enforcement coordination first", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Treating arson as accident voids the claim",
              body: "The costliest classification error: crews restore and clean a suspicious fire scene before forensics - evidence gone, insurer disputes the claim, investigation stalls. The rule: for any intentional-category event, evidence preservation precedes restoration. It is a DR-plan clause most organizations miss.",
            },
            examQuestions: [
              {
                q: "Categorize human-intentional disasters by actor and motive, pair each with its defensive discipline, and work the three-event warehouse trace showing how first moves differ.",
                marks: 14,
                outline: [
                  "Defining property: adversary chooses timing, target, method - and adapts",
                  "Terrorism: ideological violence - physical security, response",
                  "Sabotage: outsider/insider/conflict - insider-risk programmes",
                  "Arson: deliberate fire - forensics before restoration",
                  "Theft/vandalism: access control; cyber: the security programme",
                  "Warehouse trace: suspicious fire, server theft, cyber - three first moves",
                  "Layered defence: deter, detect, delay, respond, recover",
                ],
              },
              {
                q: "Why does insider risk differ from every external category?",
                marks: 7,
                outline: [

                  "The actor is authorized - perimeter controls see nothing",

                  "Detection needs behaviour monitoring and separation of duties",

                  "Adaptation is internal knowledge of the controls themselves",

                  "Legitimate credentials make every action look normal",

                  "Separation of duties is the structural containment",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Emergency Management",
      summary:
        "Unit III organizes the response: the need for emergency management, the four phases - mitigation and preparedness before the event, response and recovery after it - the effect of disasters on business organizations, emergency management as a business discipline, and FEMA - its mandate and the activities it coordinates through NIMS and the National Response Framework.",
      chapter: {
        number: "03",
        title: "Managing the Emergency",
        intro:
          "Unit III covers the need for emergency management, its phases - mitigation, preparedness, response and recovery - the effect of disasters on business organizations, emergency management for business organizations, and FEMA - the Federal Emergency Management Agency - with its mandate and activities.",
        inOneBreath:
          "Emergency management turns chaos into a managed sequence: mitigation reduces the impact before it happens, preparedness drills the response, response stabilizes life and property, and recovery restores and improves. For businesses it is a survival discipline - unmanaged disasters cost multiples of managed ones - and FEMA demonstrates the national-scale version: mandate, frameworks (NIMS, NRF), grants and coordination from local response upward.",
        sections: [
          {
            number: "3.1",
            title: "The need for emergency management",
            body: [
              "Emergency management (EM) is the discipline that organizes a community's or organization's capabilities before, during and after an emergency - and the need argument is arithmetic plus chaos control. The arithmetic: unmanaged disasters cost multiples of managed ones (duplication of effort, wrong priorities, delayed decisions); the chaos control: without structure, response degrades into improvisation under stress - the exact condition in which people make their worst decisions. EM supplies the pre-decided structure: who commands, who does what, in what order, with what resources.",
              "The need's specific faces, per the syllabus: life protection (the first hour decides survivability), property and environment protection (stabilization before escalation - a fire that becomes a plant fire, a flood that becomes a chemical release), continuity of essential services (hospitals, water, power, communications - managed restoration order), and legal/insurance readiness (documented response satisfies duty-of-care and claims requirements). A worked contrast: two identical plants hit by the same chemical release - Plant A has EM: alarms and shelter-in-place within two minutes, incident command by five, casualties two, regulator notified same day. Plant B improvises: evacuation into the plume, no command, casualties eleven, notification late. Same event, different outcomes - the difference is the plan and its drills.",
              "The business case completes the section: EM investment is small relative to the loss it bounds (plans, drills, alarms cost a fraction of one bad day), insurers and regulators increasingly require documented EM, and reputation survives managed disasters that it does not survive chaotic ones. The exam's sentence: emergency management is cheap relative to chaos - it buys decision speed, which is the scarcest resource in the first hour.",
              "Exam framing: expect 'explain the need for emergency management'. Give the arithmetic and chaos-control argument, the specific faces (life, property, continuity, legal), run the two-plant contrast, and close with the decision-speed sentence. Pre-decided beats smart - nobody thinks as well under stress as the plan thought last month. The two-plant contrast is the worked argument - same release, plan the only difference.",
            ],
            keyTerms: [
              { term: "Emergency management (EM)", definition: "Organizing capabilities before, during and after emergencies - the four-phase discipline." },
              { term: "Incident command", definition: "The pre-decided authority structure directing response." },
              { term: "Shelter-in-place", definition: "The protective action for external hazards (plumes) - versus evacuation." },
              { term: "Decision speed", definition: "The scarcest first-hour resource - EM pre-decides to buy it." },
            ],
            table: {
              caption: "The need's four faces.",
              headers: ["Face", "What it protects", "EM mechanism"],
              rows: [
                ["Life protection", "People in the first hour", "Drilled alarm and protective-action reflexes"],
                ["Property / environment", "Assets and surroundings", "Stabilization procedures, escalation control"],
                ["Essential services", "Hospitals, water, power, comms", "Managed restoration order"],
                ["Legal / insurance", "Duty-of-care and claims standing", "Documented, exercised response"],
              ],
            },
            bullets: [
              "Arithmetic: unmanaged disasters cost multiples of managed ones.",
              "Chaos control: pre-decided structure beats improvisation under stress.",
              "Faces: life, property/environment, essential services, legal readiness.",
              "Two-plant contrast: drilled response (2 casualties) vs improvised (11).",
              "Investment is small against the loss it bounds.",
              "Sentence: EM buys decision speed - the first hour's scarcest resource.",
            ],
            diagram: {
              kind: "compare",
              title: "Same event, managed vs improvised",
              caption: "The chemical-release contrast - the plan and drills are the entire difference.",
              left: {
                heading: "Plant A - with EM",
                items: [
                  "Alarms and shelter-in-place within two minutes",
                  "Incident command by five minutes",
                  "Casualties: two",
                  "Regulator notified same day",
                ],
              },
              right: {
                heading: "Plant B - improvised",
                items: [
                  "Evacuation into the plume",
                  "No command structure; confusion",
                  "Casualties: eleven",
                  "Late notification - legal exposure",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Pre-decided beats smart",
              body: "The need argument's sharpest sentence: 'under stress, nobody thinks as well as the plan thought last month - emergency management is pre-decided decision-making, and that is why it works.' Deploy it in every 'why do we need EM' answer.",
            },
            examQuestions: [
              {
                q: "Explain the need for emergency management through the cost arithmetic, the four protection faces, and a worked managed-versus-improvised contrast on the same chemical release.",
                marks: 14,
                outline: [
                  "Arithmetic: unmanaged costs multiples of managed response",
                  "Chaos control: pre-decided structure vs improvisation under stress",
                  "Life protection: drilled first-hour reflexes decide survivability",
                  "Property/environment: stabilization before escalation",
                  "Essential services: managed restoration order",
                  "Legal/insurance: documented response preserves claims standing",
                  "Two-plant contrast: 2 casualties vs 11 - the plan is the difference",
                ],
              },
              {
                q: "Why is decision speed the scarcest resource in the first hour?",
                marks: 7,
                outline: [

                  "Consequences scale with response latency - minutes change outcomes",

                  "Stress degrades individual decision quality precisely when speed matters",

                  "EM pre-decides roles, orders and thresholds - latency drops",

                  "The first hour fixes casualty and damage curves",

                  "Options expire fastest early - pre-decision preserves them",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "The phases of emergency management - mitigation and preparedness",
            body: [
              "The EM cycle has four phases, and the syllabus's split is the natural one: before the event - mitigation (reducing or eliminating the impact) and preparedness (building the capacity to respond); after the event - response (stabilizing) and recovery (restoring and improving) - sections 3.3. Mitigation is the structural phase: hazard mapping, land-use controls, building codes and retrofits, levees and drainage, fire breaks - changes to the exposure itself. Its economics are the best in the discipline: a rupee of mitigation saves multiples in avoided loss (the multiplicity varies by hazard and study, but the direction never reverses).",
              "Preparedness is the capability phase: plans (EOP - the emergency operations plan, with functional annexes: evacuation, communications, resource management), training and drills (from tabletop to full-scale), resource pre-positioning (supplies, agreements, mutual aid), warning systems and public education. A worked mitigation-preparedness pairing on one hazard: a flood-prone plant - mitigation moves the electrical rooms above the 100-year flood line and builds a levee; preparedness writes the flood annex, pre-positions pumps and sandbags, drills the evacuation route quarterly, and signs the mutual-aid agreement with the neighbouring plant. Mitigation reduced the exposure; preparedness built the response - one hazard, both phases, neither sufficient alone.",
              "The phase boundary is the exam's precision mark: mitigation changes what will happen (the impact itself), preparedness changes what you can do (the response capability). Confusing them (calling drills 'mitigation') is the standard slip. The exam's sentence: mitigation buys a smaller disaster; preparedness buys a faster response - and the BIA's clocks (1.1) measure the second while the insurance premium measures the first.",
              "Exam framing: expect 'explain the phases of emergency management'. Define the four phases, distinguish mitigation from preparedness with the flood-plant pairing, note mitigation's economics, and close with the smaller-disaster/faster-response sentence. The flood-plant pairing settles the boundary - rooms above the line versus pumps and drills. The flood-plant pairing is the worked distinction - one hazard, both phases, neither alone.",
            ],
            keyTerms: [
              { term: "Mitigation", definition: "Reducing the impact itself: codes, retrofits, levees, land use." },
              { term: "Preparedness", definition: "Building response capability: plans, training, drills, pre-positioning." },
              { term: "EOP", definition: "The emergency operations plan with functional annexes." },
              { term: "Mutual aid", definition: "Pre-agreed resource sharing between organizations." },
            ],
            table: {
              caption: "Before-the-event phases contrasted.",
              headers: ["Aspect", "Mitigation", "Preparedness"],
              rows: [
                ["Changes", "The impact itself", "The response capability"],
                ["Instruments", "Codes, retrofits, levees, land use", "Plans, training, drills, resources"],
                ["Measured by", "Avoided loss, insurance differential", "Drill performance, activation time"],
                ["Flood-plant example", "Electrical rooms above flood line; levee", "Flood annex, pumps, quarterly drills"],
                ["Economics", "Best ROI in the discipline", "Cheap relative to chaos"],
              ],
            },
            bullets: [
              "Four phases: mitigation, preparedness, response, recovery.",
              "Mitigation changes exposure: hazard mapping, codes, structural works.",
              "Preparedness builds capability: EOP, annexes, drills, mutual aid.",
              "Flood-plant pairing: rooms above the flood line + pumps and drills.",
              "Mitigation economics: a rupee saved multiples in avoided loss.",
              "Precision: mitigation buys a smaller disaster; preparedness a faster response.",
            ],
            diagram: {
              kind: "layers",
              title: "The preparedness capability stack",
              caption: "Plans, people, resources, warnings - the stack that drills prove.",
              layers: [
                { label: "Warning and public education", note: "alerts, drills, awareness" },
                { label: "Resources and mutual aid", note: "pre-positioned supplies, agreements" },
                { label: "Training and exercises", note: "tabletop to full-scale - the proof layer" },
                { label: "Plans (EOP + annexes)", note: "the documented foundation" },
              ],
            },
            callout: {
              type: "exam",
              title: "Drills are preparedness, not mitigation",
              body: "The slip the examiner sets: calling drills, training or supplies 'mitigation'. Mitigation changes the disaster itself (rooms above the flood line); preparedness changes your ability to respond (pumps and drills). One sentence with the flood-plant pairing settles the distinction for the whole paper.",
            },
            examQuestions: [
              {
                q: "Explain the four phases of emergency management and distinguish mitigation from preparedness with the flood-prone-plant pairing, including the economics of each.",
                marks: 14,
                outline: [
                  "Phases: mitigation, preparedness (before); response, recovery (after)",
                  "Mitigation: hazard mapping, codes, retrofits, levees - changes impact",
                  "Preparedness: EOP, training, drills, pre-positioning, mutual aid",
                  "Flood plant: electrical rooms above flood line + levee (mitigation)",
                  "Same plant: flood annex, pumps, quarterly drills (preparedness)",
                  "Economics: mitigation's avoided-loss multiple; preparedness cheap vs chaos",
                  "Sentence: smaller disaster vs faster response - neither alone suffices",
                ],
              },
              {
                q: "Why is mitigation described as the best investment in emergency management?",
                marks: 7,
                outline: [

                  "Avoided loss recurs every year the hazard threatens",

                  "One retrofit protects every future event",

                  "Response costs recur per event; mitigation pays across all of them",

                  "Insurance discounts partially fund the retrofit",

                  "Land-use decisions lock in or lock out exposure",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Response and recovery - the after-event phases",
            body: [
              "Response is the stabilization phase: protect life (evacuation, rescue, medical), stabilize the incident (isolate, contain, shut down hazards), protect property and environment within safety limits, and establish incident command with communications - the phase whose clock is minutes and hours. Its structure is the incident command system: one commander, functional sections (operations, planning, logistics, finance), span-of-control limits, and unified command when multiple agencies share jurisdiction. The response's end state is defined in advance: the incident is stable, people accounted for, hazards contained, command can hand to recovery.",
              "Recovery is the restoration phase, and the syllabus's structure divides it: short-term recovery (life-sustaining services, debris removal, temporary housing or workspace, insurance activation) and long-term recovery (permanent reconstruction, economic restitution, and - the Sendai echo from 1.7 - build-back-better: reconstruction that reduces the vulnerability that caused the loss). Recovery's clock is weeks to years, and its management differs from response: longer horizons, funding cycles, stakeholder negotiations - and the psychological recovery of staff, which plans routinely omit.",
              "A worked phase handoff fixes the boundary. The warehouse fire: response - evacuation complete, headcount by 11:15, fire contained by 14:00, incident command stands down to a stable state at 16:00. Recovery begins: short-term - salvage, water damage mitigation, temporary warehouse space leased by day 2, insurance claim filed with the documented response as evidence; long-term - rebuilt facility with sprinkler upgrades (build-back-better), revised stock placement, staff counselling sessions scheduled, and the lessons-learned review feeding 1.6's programme cycle. One event, two phases, the handoff at stability - the exam's model boundary.",
              "Exam framing: expect 'explain response and recovery phases'. Give response's objectives and ICS structure, recovery's short/long-term division with build-back-better, run the warehouse handoff trace, and close with the handoff-at-stability boundary. The handoff is at stability, not extinguishment - recovery's clocks start at 16:00 in the trace. The warehouse trace is the handoff - contained at 14:00, stable at 16:00, recovery begins.",
            ],
            keyTerms: [
              { term: "Response", definition: "Stabilization: life, incident, property - the minutes-to-hours phase." },
              { term: "Incident command system (ICS)", definition: "One commander, four functional sections, span-of-control discipline." },
              { term: "Short-term recovery", definition: "Life-sustaining services, salvage, temporary capacity, claims." },
              { term: "Build back better", definition: "Reconstruction that reduces the vulnerability that caused the loss." },
            ],
            table: {
              caption: "Response vs recovery.",
              headers: ["Aspect", "Response", "Recovery"],
              rows: [
                ["Goal", "Stabilize: life, incident, property", "Restore and improve"],
                ["Clock", "Minutes to hours", "Weeks to years"],
                ["Structure", "Incident command (ICS)", "Programme management, funding cycles"],
                ["Warehouse fire", "Evacuate, contain, command to 16:00", "Salvage, lease space, rebuild with sprinklers"],
                ["End state", "Stable incident, people accounted", "Restored operations, better than before"],
              ],
            },
            bullets: [
              "Response: protect life, stabilize the incident, protect property within safety limits.",
              "ICS: one commander, operations/planning/logistics/finance sections.",
              "Recovery short-term: life-sustaining services, salvage, temporary capacity.",
              "Recovery long-term: reconstruction with build-back-better.",
              "Warehouse trace: stability at 16:00 hands to recovery; rebuild adds sprinklers.",
              "Boundary: response ends at stability - the exam's model handoff.",
            ],
            diagram: {
              kind: "flow",
              title: "From response to recovery",
              caption: "The handoff happens at stability - and recovery ends better than the original.",
              steps: [
                { label: "Life safety", note: "evacuate, rescue, account - first priority" },
                { label: "Stabilize", note: "contain the hazard; establish command" },
                { label: "Stability reached", note: "incident stands down - the handoff point" },
                { label: "Short-term recovery", note: "salvage, temporary capacity, claims" },
                { label: "Long-term recovery", note: "rebuild better; lessons feed the cycle" },
              ],
            },
            callout: {
              type: "exam",
              title: "The handoff is at stability, not at the fire's end",
              body: "The boundary precision: response does not end when the flames die - it ends when the incident is stable (hazards contained, people accounted, command sustainable). Work the warehouse trace to 16:00 to show the distinction; recovery's clocks start there.",
            },
            examQuestions: [
              {
                q: "Explain the response phase with its objectives and ICS structure, the recovery phase's short and long-term division with build-back-better, and the handoff boundary using a worked warehouse-fire trace.",
                marks: 14,
                outline: [
                  "Response: life, stabilization, property - minutes-to-hours clock",
                  "ICS: one commander, four sections, span of control",
                  "End state pre-defined: stable, accounted, contained",
                  "Short-term recovery: life-sustaining services, salvage, claims",
                  "Long-term: reconstruction with build-back-better",
                  "Trace: contained 14:00, stable 16:00, leased space day 2, sprinkler rebuild",
                  "Boundary: stability, not extinguishment, hands to recovery",
                ],
              },
              {
                q: "Why does recovery management differ from response management?",
                marks: 7,
                outline: [

                  "Longer horizons need programme management, not command urgency",

                  "Funding cycles, insurance and stakeholder negotiation dominate",

                  "Psychological recovery of staff is a real, planned track",

                  "Command urgency is wrong for multi-year restoration",

                  "Stakeholder accounting replaces incident tempo",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "Effect of disasters on business organizations",
            body: [
              "The syllabus's 'effect of disaster on business organizations' is the corporate consequence ledger (1.2's tracks, now in business variables): people (injury, absenteeism, trauma-driven productivity loss, key-person loss), property (facilities, equipment, inventory - insured and uninsured), operations (interrupted processes, supply-chain breaks, lost data), finance (direct loss, penalties, cash-flow shock, credit impact), market (customer churn, share price, reputation), and compliance (regulatory notification, contractual breach). The planning value of the ledger: each effect names its countermeasure - and the BIA prices them.",
              "A worked four-quadrant organization trace fixes the ledger. A manufacturing firm hit by a plant flood: people - 40 employees displaced, two injured, absenteeism 30% for a month; property - plant floor equipment flooded (insured), finished-goods stock lost; operations - production halted 12 days, single-source supplier also flooded (the hidden compounding), ERP data restored to yesterday; finance - 8 crore direct loss, penalty clauses triggered, cash flow stressed by recovery spend; market - two major customers shift orders for a quarter; compliance - environmental discharge reported (flooded chemical store). Seven effects, one event - and each one appears in the BIA as a measured, prioritized loss.",
              "The asymmetries worth naming: small businesses fail disproportionately after disasters (cash reserves thin, no alternate capacity), supply-chain effects propagate to firms not themselves hit (the supplier's flood is your production halt - the compounding in the trace), and reputation effects lag the event by quarters (the churn shows in the next reporting cycle). The exam's sentence: the effect ledger is the BIA's raw material - every consequence tracked back to a function, every function priced, every price ranked.",
              "Exam framing: expect 'discuss the effects of disasters on business organizations'. Give the six-track ledger, run the plant-flood trace across all tracks, name the three asymmetries, and close with the BIA-raw-material sentence. The supplier's flood is your halt - the supply-chain line is the BIA's most-skipped row. The seven-effect ledger is the worked trace - one flood, every track, one supplier surprise.",
            ],
            keyTerms: [
              { term: "Business consequence ledger", definition: "People, property, operations, finance, market, compliance tracks." },
              { term: "Key-person loss", definition: "Capability lost with specific individuals - succession's DR problem." },
              { term: "Supply-chain propagation", definition: "Your supplier's disaster becomes your production halt." },
              { term: "Reputation lag", definition: "Churn and share effects appear quarters after the event." },
            ],
            table: {
              caption: "The plant-flood ledger.",
              headers: ["Track", "Effect", "Countermeasure"],
              rows: [
                ["People", "Displacement, injuries, 30% absenteeism", "Alternate workspace, EAP, cross-training"],
                ["Property", "Flooded equipment, lost stock", "Insurance, elevation (mitigation)"],
                ["Operations", "12-day halt; supplier also flooded", "Alternate supplier, safety stock"],
                ["Finance", "8 crore loss, penalties, cash stress", "Credit lines, parametric cover"],
                ["Market", "Two customers shift for a quarter", "Recovery SLAs, communication"],
                ["Compliance", "Chemical-store discharge reported", "Storage elevation; response documentation"],
              ],
            },
            bullets: [
              "Six tracks: people, property, operations, finance, market, compliance.",
              "Plant-flood trace: seven effects across all tracks from one event.",
              "Compounding: the supplier's flood is your halt - map the chain.",
              "Asymmetry: small firms fail disproportionately; reserves and capacity are thin.",
              "Reputation lags by quarters - plan the communication, not just the recovery.",
              "Sentence: the ledger is the BIA's raw material - track, price, rank.",
            ],
            diagram: {
              kind: "matrix",
              title: "Effects by quadrant",
              caption: "Immediate vs delayed against internal vs external - all four quadrants need owners.",
              axes: { x: "Internal -> external", y: "Immediate -> delayed" },
              quadrants: [
                { label: "Reputation and churn", note: "external, delayed - lagged by quarters" },
                { label: "Compliance and claims", note: "external, immediate documentation duties" },
                { label: "People and property", note: "internal, immediate - life and assets" },
                { label: "Supply chain and cash flow", note: "internal-external, delayed propagation" },
              ],
            },
            callout: {
              type: "warning",
              title: "The supplier's flood is your halt",
              body: "The trace's hidden line: the firm's own plant recovered in 12 days, but its single-source supplier was also flooded - production stayed down three weeks. Supply-chain mapping is the BIA line most organizations skip; name it in every 'effects on business' answer.",
            },
            examQuestions: [
              {
                q: "Discuss the effects of disasters on business organizations across the six-track ledger, work the plant-flood trace through all tracks, and state the three asymmetries and the BIA connection.",
                marks: 14,
                outline: [
                  "Tracks: people, property, operations, finance, market, compliance",
                  "People: displacement, injuries, absenteeism, key-person loss",
                  "Property: insured and uninsured asset loss",
                  "Operations: halted processes, lost data, supply breaks",
                  "Finance/market/compliance: penalties, churn, notification duties",
                  "Trace: flood - 12-day halt, 8 crore, two customers shift, discharge reported",
                  "Asymmetries: small-firm fragility, supply propagation, reputation lag",
                ],
              },
              {
                q: "Why do small businesses fail disproportionately after disasters?",
                marks: 7,
                outline: [

                  "Thin cash reserves cannot bridge long recovery",

                  "No alternate capacity or documented processes",

                  "Owner-centric operations lose the owner's knowledge to the event",

                  "Credit access tightens exactly when reconstruction needs it",

                  "Single-site operations have no partial-failure mode",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Emergency management for business organizations",
            body: [
              "Business emergency management translates the four phases into the corporate programme, and its structure is the syllabus's ask. The organization chart: an emergency management committee (chaired by a senior executive - 1.4's sponsorship) with functional leads (safety, facilities, IT/DR, HR, communications, security); the emergency operations plan (EOP) with annexes per hazard and function; response teams (first-aid, fire warden, evacuation, incident command) staffed with named members and alternates; and the coordination interfaces (police, fire, hospitals, regulators, insurers, suppliers).",
              "The programme's activities mirror 1.6's cycle in business dress: risk assessment and BIA (Unit V), plan development (EOP, DR plan, BC plan - one integrated document family), training (all-staff awareness + team-specific drills), exercising (tabletop quarterly, functional drills, annual full-scale), communication infrastructure (mass notification, crisis hotline, media protocol), and maintenance (change hooks, annual review). A worked programme trace: a 400-person firm - committee of nine with six functional leads; EOP with seven hazard annexes; four response teams with 32 trained members; quarterly tabletops, annual evacuation drill timed and recorded, annual failover test; mass-notification system reaching 96% of staff within 10 minutes in the last test. Five lines, one programme - and every line is auditable.",
              "The business-specific nuances complete the section: employee communication (the mass-notification path is the plan's most-used component), customer and supplier communication (the market track's countermeasure), security integration (the crisis may be intentional - 2.7's categories), and the legal dimension (duty of care documented by the programme itself). The exam's sentence: business EM is the corporate instance of the four phases - a committee, an EOP, drilled teams and tested notifications, all owned by a named executive.",
              "Exam framing: expect 'explain emergency management for business organizations'. Give the committee/EOP/team structure, run the 400-person programme trace, name the business nuances, and close with the corporate-instance sentence. The notification system is the workhorse - the most-used path must be the most-tested path. The 400-person trace is the worked programme - every line auditable, every test timed.",
            ],
            keyTerms: [
              { term: "EM committee", definition: "The sponsored governing body: functional leads plus alternates." },
              { term: "EOP annexes", definition: "Hazard-specific and function-specific plan extensions." },
              { term: "Mass notification", definition: "The all-staff alerting path - the plan's most-used component." },
              { term: "Named alternates", definition: "Backup owners per role - no single point of command." },
            ],
            table: {
              caption: "The corporate EM programme trace.",
              headers: ["Component", "This firm's answer", "Audit evidence"],
              rows: [
                ["Committee", "9 members, 6 functional leads, chaired by COO", "Charter, minutes"],
                ["EOP", "7 hazard annexes + functional annexes", "Document, version log"],
                ["Teams", "4 teams, 32 trained members + alternates", "Training records"],
                ["Exercises", "Quarterly tabletop, annual drill + failover", "Findings, timings"],
                ["Notification", "96% reach in 10 minutes (last test)", "Test report"],
              ],
            },
            bullets: [
              "Structure: sponsored committee, EOP with annexes, drilled teams, interfaces.",
              "Activities: risk/BIA, plans, training, exercising, communication, maintenance.",
              "Worked trace: 9-member committee, 7 annexes, 4 teams, 96% notification reach.",
              "Nuances: mass notification, customer/supplier comms, security integration, duty of care.",
              "Every line auditable - the programme is evidence, not assertion.",
              "Sentence: business EM is the four phases' corporate instance.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The corporate EM priority pyramid",
              caption: "Business EM's response order - life safety at the top, assets and reputation below.",
              tiers: [
                { label: "Reputation and market", note: "communication and recovery SLAs" },
                { label: "Assets and operations", note: "facilities, IT, supply continuity" },
                { label: "Business continuity", note: "critical functions within MTD" },
                { label: "Life safety", note: "people first - always the apex" },
              ],
            },
            callout: {
              type: "tip",
              title: "The notification system is the workhorse",
              body: "The operational truth: between drills, the EM component firms actually use is mass notification - weather alerts, closures, incidents. That is why the 96%-reach-in-10-minutes test number matters more than any annex: the most-used path must be the most-tested path.",
            },
            examQuestions: [
              {
                q: "Explain emergency management for business organizations - committee, EOP and annexes, response teams - with the 400-person programme trace and the business-specific nuances.",
                marks: 14,
                outline: [
                  "Committee: sponsored, functional leads, named alternates",
                  "EOP: hazard + functional annexes; one integrated document family",
                  "Teams: first-aid, fire, evacuation, incident command - trained and drilled",
                  "Coordination interfaces: police, fire, hospitals, insurers, suppliers",
                  "Trace: 9 members, 7 annexes, 4 teams, 96% notification in 10 minutes",
                  "Nuances: mass notification, market comms, security integration, duty of care",
                  "Sentence: the corporate instance of the four phases - auditable throughout",
                ],
              },
              {
                q: "Why must EM integrate with security rather than sit beside it?",
                marks: 7,
                outline: [

                  "Crises may be intentional (2.7) - response must preserve evidence",

                  "Security controls protect the EM capability itself (notification, comms)",

                  "One command structure avoids conflicting first moves",

                  "Forensic preservation changes the response sequence",

                  "Notification systems are themselves attack targets",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "FEMA - the Federal Emergency Management Agency",
            body: [
              "FEMA is the United States' federal emergency management agency (created 1979, now under the Department of Homeland Security) - the world's most-cited model of national EM organization, and the syllabus's named institution. Its mandate: coordinate the federal government's response to disasters that overwhelm state and local capacity, run the national preparedness and mitigation programmes, administer disaster relief funds and insurance (the National Flood Insurance Program), and operate the national training academy (EMI).",
              "The organization works through a tiered escalation, and the syllabus's 'activities of FEMA' lives in it. The tiered flow: local responders act first; when capacity is exceeded, the state declares and activates its resources; when state capacity is exceeded, the governor requests a presidential disaster declaration; FEMA coordinates the federal response under the National Response Framework (NRF) - organizing federal departments into emergency support functions, managed through the National Incident Management System (NIMS) so every agency speaks the same command language. A worked escalation trace: a hurricane - county response for 24 hours, state declaration and National Guard on day 1, presidential declaration on day 2, FEMA's ESF deployment and Individual Assistance registrations from day 3.",
              "The programmes complete the section: mitigation grants (HMGP - hazard mitigation funding after declarations, and BRIC - pre-disaster building resilient infrastructure), preparedness programmes (community rating, preparedness campaigns, EMI training), flood insurance administration, and the disaster-declaration process itself (preliminary damage assessment -> governor's request -> presidential declaration -> federal assistance categories). The exam's sentence: FEMA is the tiered-escalation model - local first, state second, federal coordinated by NIMS/NRF - with mitigation grants as the financial engine of the before-event phases.",
              "Exam framing: expect 'write on FEMA and its activities'. Give the mandate, the tiered escalation with the hurricane trace, NIMS/NRF and ESFs, and the grant programmes - closing with the tiered-model sentence. Local first is the design principle - federal support arrives to assist, never to replace. The hurricane escalation trace is the worked timeline - local, state, declaration, ESFs.",
            ],
            keyTerms: [
              { term: "FEMA", definition: "US federal emergency management agency (1979, under DHS) - the tiered-escalation model." },
              { term: "NIMS", definition: "National Incident Management System - the common command language for all agencies." },
              { term: "NRF / ESFs", definition: "National Response Framework organizing federal departments into emergency support functions." },
              { term: "Presidential disaster declaration", definition: "The trigger for federal assistance, requested by the governor." },
            ],
            table: {
              caption: "The escalation tiers.",
              headers: ["Tier", "Actor", "Trigger"],
              rows: [
                ["1 - Local", "County/city responders", "First 24-72 hours always local"],
                ["2 - State", "Governor, state agencies, guard", "Local capacity exceeded"],
                ["3 - Federal declaration", "President, on governor's request", "Preliminary damage assessment"],
                ["4 - Federal response", "FEMA + ESF departments", "Declaration activated"],
                ["5 - Recovery programmes", "FEMA grants, insurance", "Post-declaration administration"],
              ],
            },
            bullets: [
              "Mandate: coordinate federal response, preparedness, mitigation grants, flood insurance, training (EMI).",
              "Escalation: local -> state -> presidential declaration -> federal ESF deployment.",
              "NIMS: one command language; NRF: the federal coordination frame.",
              "Hurricane trace: local 24h -> state day 1 -> declaration day 2 -> ESFs day 3.",
              "Grants: HMGP post-declaration; BRIC pre-disaster mitigation.",
              "Sentence: local first, state second, federal coordinated - the tiered model.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The FEMA escalation pipeline",
              caption: "Five stages from county response to federal recovery programmes.",
              stages: [
                { label: "Local response", note: "county/city - the first 24-72 hours" },
                { label: "State activation", note: "governor's declaration; guard deployed" },
                { label: "Damage assessment", note: "preliminary assessment supports the request" },
                { label: "Presidential declaration", note: "federal assistance authorized" },
                { label: "FEMA coordination", note: "ESFs deployed; grants and recovery administered" },
              ],
            },
            callout: {
              type: "tip",
              title: "Local first is the design principle",
              body: "The model's most quotable rule: 'all disasters start and end locally - federal resources arrive to support, never to replace, local authority.' That principle is why NIMS exists: many agencies, one command language, local control retained. Use it in every FEMA answer.",
            },
            examQuestions: [
              {
                q: "Write on FEMA - mandate, the tiered escalation with a hurricane trace, NIMS and the NRF's ESFs, and the grant programmes - closing with the local-first design principle.",
                marks: 14,
                outline: [
                  "FEMA (1979, DHS): federal coordination, preparedness, mitigation, insurance, training",
                  "Tiers: local -> state -> declaration -> federal ESFs -> recovery programmes",
                  "Hurricane trace: 24h local, state day 1, declaration day 2, ESFs day 3",
                  "NIMS: unified command language across agencies",
                  "NRF: federal departments organized as ESFs (transport, mass care, health...)",
                  "Grants: HMGP post-declaration; BRIC pre-disaster; NFIP insurance",
                  "Principle: local first - federal supports, never replaces",
                ],
              },
              {
                q: "What problem does NIMS solve that ad-hoc multi-agency response does not?",
                marks: 7,
                outline: [

                  "Agencies arrive with different vocabularies and command habits",

                  "NIMS standardizes structure, terminology and resource typing",

                  "Result: interoperable command from hour one",

                  "Mutual aid works only with typed, comparable resources",

                  "Unified command needs one grammar to merge authorities",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "Activities of FEMA - programmes in motion",
            body: [
              "The syllabus's 'activities of FEMA' is the agency's programme catalogue, and it reads as the national instance of the four phases. Mitigation activities: hazard mitigation planning support, HMGP and BRIC grant administration, floodplain mapping (the NFIP's risk maps), and public assistance mitigation (funded repairs that also reduce future risk). Preparedness activities: the Emergency Management Institute's training (from community courses to senior official courses), national preparedness campaigns, grant-funded local capability building, and the national exercise programme (NLE - national-level exercises exercising the whole escalation).",
              "Response and recovery activities complete the catalogue: disaster declaration administration (preliminary damage assessment teams, declaration processing), ESF coordination under the NRF (FEMA as the coordinating agency, not the doer - federal departments execute their functions), Individual Assistance (household grants, temporary housing), Public Assistance (reimbursing state/local/tribal governments and eligible non-profits for response and recovery costs), hazard mitigation grant closeout, and the long-term recovery coordination that hands to community rebuild. A worked activity trace follows the escalation from 3.6: after the hurricane's declaration - PA teams register applicants and obligate funds within weeks; IA grants flow to households; HMGP launches with the state's mitigation plan; the next national exercise tests the lessons. One declaration, the whole catalogue in motion.",
              "The lessons for the corporate reader complete the section: the activity catalogue mirrors the corporate programme (1.6's cycle) at national scale - mitigation grants are the national BIA-driven investment, exercises are the national tabletop, PA/IA are the national insurance payout. The exam's sentence: FEMA's activities are the four phases at national scale, funded through grants and coordinated through frameworks - and every corporate programme copies the same cycle.",
              "Exam framing: expect 'list and explain the activities of FEMA'. Give the mitigation/preparedness/response/recovery activity catalogue, work the post-declaration trace, and close with the national-instance sentence. FEMA coordinates, departments execute - the ESF division of labour is the agency's whole design. The post-declaration trace is the activity cascade - PA, IA, HMGP, NLE lessons.",
            ],
            keyTerms: [
              { term: "HMGP", definition: "Hazard Mitigation Grant Program - post-declaration mitigation funding." },
              { term: "BRIC", definition: "Building Resilient Infrastructure and Communities - pre-disaster mitigation grants." },
              { term: "Individual Assistance (IA)", definition: "Household grants and temporary housing for disaster survivors." },
              { term: "Public Assistance (PA)", definition: "Reimbursement of eligible government and non-profit response/recovery costs." },
            ],
            table: {
              caption: "The FEMA activity catalogue by phase.",
              headers: ["Phase", "Activities", "Instrument"],
              rows: [
                ["Mitigation", "Planning support, grants, floodplain maps", "HMGP, BRIC, NFIP maps"],
                ["Preparedness", "Training, campaigns, exercises, capability grants", "EMI, NLE"],
                ["Response", "Declaration admin, ESF coordination", "NRF, PDA teams"],
                ["Recovery", "IA households, PA reimbursement, mitigation closeout", "IA/PA programmes, HMGP"],
              ],
            },
            bullets: [
              "Mitigation: HMGP/BRIC grants, floodplain mapping, mitigation planning support.",
              "Preparedness: EMI training, national exercises, capability grants.",
              "Response: PDA teams, declaration processing, ESF coordination (FEMA coordinates, departments execute).",
              "Recovery: IA for households, PA for governments and non-profits, HMGP closeout.",
              "Trace: declaration -> PA registration -> IA grants -> HMGP launch -> NLE lessons.",
              "Sentence: the four phases at national scale - funded, framed, exercised.",
            ],
            diagram: {
              kind: "cycle",
              title: "FEMA's national programme cycle",
              caption: "The same prepare-test-respond-improve loop the corporate programme runs - at national scale.",
              steps: [
                { label: "Mitigate", note: "BRIC/HMGP investments reduce exposure" },
                { label: "Prepare", note: "EMI training, exercises, capability grants" },
                { label: "Respond", note: "declaration -> ESF coordination" },
                { label: "Recover", note: "IA/PA funds; build back better" },
                { label: "Improve", note: "lessons feed the next national exercise" },
              ],
            },
            callout: {
              type: "tip",
              title: "FEMA coordinates, departments execute",
              body: "The structural insight that separates FEMA answers from confusion: FEMA does not itself fight fires or move supplies - under the NRF, it coordinates the ESFs whose owning departments (transport, health, defence...) execute. Quote that division of labour; it is the agency's whole design.",
            },
            examQuestions: [
              {
                q: "List and explain the activities of FEMA across the four phases, work the post-declaration activity trace, and connect the catalogue to the corporate EM cycle.",
                marks: 14,
                outline: [
                  "Mitigation: HMGP/BRIC grants, floodplain maps, planning support",
                  "Preparedness: EMI training, national exercises, capability grants",
                  "Response: PDA teams, declarations, ESF coordination under NRF",
                  "Recovery: IA household grants, PA reimbursement, mitigation closeout",
                  "Trace: declaration -> PA registration -> IA flow -> HMGP -> NLE lessons",
                  "FEMA coordinates; owning departments execute their ESFs",
                  "Corporate mirror: the same prepare-test-respond-improve cycle at scale",
                ],
              },
              {
                q: "What distinguishes Individual Assistance from Public Assistance?",
                marks: 7,
                outline: [

                  "IA: households and individuals - grants, temporary housing",

                  "PA: state/local governments and eligible non-profits - cost reimbursement",

                  "Different applicants, documentation and payout rules",

                  "IA caps and categories differ from PA schedules",

                  "Documentation duties scale differently for the two programmes",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Laws and Acts",
      summary:
        "Unit IV supplies the legal frame: why law matters in disaster recovery, the applicable acts - the Foreign Corrupt Practices Act, the Gramm-Leach-Bliley Act, the Flood Disaster Protection Act of 1973, the CAN-SPAM Act of 2003 - Canada's PIPEDA on the OECD's foundations, Europe's Data Protection Act 1998 and the personal-data directives (95/46/EC, 2002/58/EC), and the insurance layer with the Financial Groups Directive and the FTR Act of 1988.",
      chapter: {
        number: "04",
        title: "The Legal Frame of Continuity",
        intro:
          "Unit IV covers the introduction to applicable acts in disaster recovery: the Foreign Corrupt Practices Act (FCPA), the Gramm-Leach-Bliley Act, the Flood Disaster Protection Act of 1973, the CAN-SPAM Act of 2003, the Personal Information Protection and Electronic Documents Act (PIPEDA), the laws and acts of Europe - the Data Protection Act 1998, transmission of personal data, Directive 2002/58/EC and Directive 95/46/EC - insurance, the Financial Groups Directive (FGD), the OECD foundations of personal data security law, and the Financial Transactions Reporting (FTR) Act 1988.",
        inOneBreath:
          "Law shapes continuity from four directions: conduct and records (FCPA's books-and-records provisions demand recoverable accounting), sectoral data protection (GLBA in finance, PIPEDA and the EU directives for personal data - the OECD's 1980 guidelines being the common ancestor), hazard-specific mandates (the Flood Disaster Protection Act), and the insurance/financial layer (FGD, FTR). Every DR plan inherits duties: what records must survive, what data may move, what must be reported.",
        sections: [
          {
            number: "4.1",
            title: "Applicable acts in DR - the legal landscape",
            body: [
              "Why does a disaster-recovery syllabus carry a law unit? Because continuity planning inherits legal duties from every direction, and an unprepared plan can violate them at the worst moment. The duties: record preservation (regulators demand recoverable books and records - FCPA's accounting provisions), data protection (personal data must stay protected during disaster - GLBA, PIPEDA, the EU directives), hazard-specific mandates (flood-prone properties face the Flood Disaster Protection Act's requirements), communications law (CAN-SPAM governs the crisis-notification channels marketing teams use), and insurance/financial rules (FGD and FTR shape how financial groups and transactions survive and report).",
              "The landscape organizes as a stack, and each layer names its exam act. International layer: the OECD guidelines (1980) - the ancestor of data-protection law worldwide. National-sectoral layer: GLBA (US financial services), FTR Act 1988 (financial transactions reporting), FCPA (US companies' conduct abroad). National-broad layer: PIPEDA (Canada's private-sector privacy law), the EU Data Protection Act 1998 and its directives. Hazard layer: the Flood Disaster Protection Act 1973. Communications layer: CAN-SPAM 2003. A worked inheritance trace: a bank's DR plan - GLBA demands the customer-data safeguards survive failover; FTR demands transaction records be reconstructable; PIPEDA-style principles govern any data moved to the recovery site; the plan documents all three or the failover itself becomes a compliance incident.",
              "The planning consequence is the section's point: legal review is a DR-plan input, not an afterthought - records, data flows and notifications are legal obligations that must survive the disaster with the systems. The exam's sentence: the plan's legal duties travel with the data - every act in this unit is a requirement the recovery architecture must satisfy at the moment of failover, not after.",
              "Exam framing: expect 'what acts apply in disaster recovery' or 'why law matters in DR'. Give the duty directions, the stack with each layer's act, run the bank's inheritance trace, and close with the duties-travel sentence. Failover is a compliance event - every duty attached to the data activates in the recovery architecture. The bank trace is the worked inheritance - three duties activating at one failover.",
            ],
            keyTerms: [
              { term: "Record preservation", definition: "Regulator-required recoverability of books and records (FCPA accounting provisions)." },
              { term: "Data-protection inheritance", definition: "Privacy duties persist through disaster and recovery moves." },
              { term: "OECD guidelines (1980)", definition: "The common ancestor of national data-protection laws." },
              { term: "Compliance incident", definition: "A disaster response that itself violates law - the unreviewed plan's risk." },
            ],
            table: {
              caption: "The legal stack with its acts.",
              headers: ["Layer", "Act / instrument", "Continuity duty"],
              rows: [
                ["International", "OECD guidelines 1980", "Privacy principles inherited by national law"],
                ["Sectoral (finance)", "GLBA; FTR Act 1988", "Safeguards survive; transaction records reconstructable"],
                ["Conduct", "FCPA 1977", "Books and records recoverable; anti-bribery controls documented"],
                ["Broad privacy", "PIPEDA; EU DPA 1998 + directives", "Personal data protected through recovery moves"],
                ["Hazard-specific", "Flood Disaster Protection Act 1973", "Flood cover conditions for mortgaged properties"],
                ["Communications", "CAN-SPAM 2003", "Crisis notification channels stay lawful"],
              ],
            },
            bullets: [
              "Law reaches DR through five directions: records, data, hazard mandates, communications, insurance/financial.",
              "Stack: OECD ancestor -> sectoral (GLBA, FTR) -> broad privacy (PIPEDA, EU) -> hazard (FDPA) -> comms (CAN-SPAM).",
              "Bank trace: GLBA safeguards, FTR reconstructability, PIPEDA-principled recovery-site moves.",
              "Legal review is a DR-plan input, not an afterthought.",
              "Failover is the moment duties bind - not the post-disaster review.",
              "Sentence: legal duties travel with the data.",
            ],
            diagram: {
              kind: "layers",
              title: "The legal stack over a DR plan",
              caption: "Six layers of duties - the recovery architecture must satisfy all of them at failover.",
              layers: [
                { label: "Communications (CAN-SPAM)", note: "lawful crisis notification" },
                { label: "Hazard mandates (FDPA 1973)", note: "flood cover conditions" },
                { label: "Privacy (PIPEDA, EU directives)", note: "personal data protected through moves" },
                { label: "Sectoral + conduct (GLBA, FTR, FCPA)", note: "safeguards and records survive" },
                { label: "International base (OECD)", note: "the inherited principles" },
              ],
            },
            callout: {
              type: "exam",
              title: "Failover is a compliance event",
              body: "The sentence that ties the unit together: 'disaster recovery is a compliance event - the moment systems fail over, every legal duty attached to that data activates in a foreign architecture.' Review the plan against the stack before the disaster, not after the recovery.",
            },
            examQuestions: [
              {
                q: "Explain why laws apply to disaster recovery, organize the applicable acts as a stack with each layer's duty, and work the bank's failover inheritance trace.",
                marks: 14,
                outline: [
                  "Duties: record preservation, data protection, hazard mandates, communications, insurance",
                  "OECD 1980: the inherited privacy principles",
                  "GLBA: financial safeguards survive failover",
                  "FTR 1988: transaction records reconstructable",
                  "PIPEDA / EU directives: recovery-site data moves stay lawful",
                  "FDPA 1973 + CAN-SPAM: hazard conditions and lawful notifications",
                  "Trace: bank failover activates all three finance-layer duties at once",
                ],
              },
              {
                q: "What makes an unreviewed DR plan a legal liability?",
                marks: 7,
                outline: [

                  "Recovery moves may transfer data unlawfully",

                  "Restored records may fail regulator recoverability tests",

                  "Notifications may breach communications law under crisis pressure",

                  "Failover architecture inherits every duty attached to the data",

                  "Post-event reviews audit the plan's legal mapping",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "The Foreign Corrupt Practices Act (FCPA)",
            body: [
              "The FCPA (US, 1977, amended 1998) has two limbs, and the second is this unit's reason for its presence. The anti-bribery limb: prohibiting corrupt payments to foreign officials to obtain or retain business. The books-and-records limb: requiring issuers to make and keep books, records and accounts that accurately and fairly reflect transactions, plus internal accounting controls sufficient to safeguard assets - records accurate, preserved and auditable. A disaster that destroys records without a documented recovery capability is therefore an FCPA exposure: the Act's assumption is that records survive.",
              "The continuity reading follows directly: the books-and-records provisions are a records-continuity mandate. What they require of the DR plan: accounting systems in the critical-function inventory (the BIA must include them), recoverability within regulator-acceptable windows, audit trails that survive failover (logs, reconciliation data), and change control demonstrating the controls remained sufficient through the recovery. A worked exposure trace: a subsidiary's ERP corrupts in a fire; the subsidiary restores from six-month-old tapes because no DR plan covered it; quarterly filings now rest on reconstructed estimates - the SEC inquiry asks for records the subsidiary cannot produce, and the penalty conversation begins. One uncovered system, a compliance event months later.",
              "The compliance programme completes the section: risk assessment naming FCPA-relevant systems, documented controls (the internal-controls limb), retention schedules aligned to statutory periods, tested recoverability (the books restore and reconcile in drills), and the officer certifications that depend on records being real. The exam's sentence: FCPA converts accounting records from business assets into legal obligations - the DR plan's job is to make the obligation survivable, and drills are the evidence.",
              "Exam framing: expect 'explain the FCPA and its DR relevance'. Give both limbs, derive the records-continuity mandate, run the ERP-fire exposure trace, and close with the obligation-survivability sentence. Reconstruction is not recovery - unproducible records defeat the books-and-records limb regardless of effort. The ERP-fire trace is the exposure - six-month tapes, unproducible records, SEC inquiry.",
            ],
            keyTerms: [
              { term: "FCPA", definition: "US Foreign Corrupt Practices Act (1977): anti-bribery + books-and-records limbs." },
              { term: "Books and records", definition: "Accounts that accurately and fairly reflect transactions - the recoverability mandate." },
              { term: "Internal accounting controls", definition: "Controls sufficient to safeguard assets - documented through recovery." },
              { term: "Records-continuity mandate", definition: "Accounting systems must be in the BIA and their recovery tested." },
            ],
            table: {
              caption: "FCPA limbs and their DR duties.",
              headers: ["Limb", "Requirement", "DR duty"],
              rows: [
                ["Anti-bribery", "No corrupt foreign payments", "Controls documented and auditable through recovery"],
                ["Books and records", "Accurate, fair, preserved accounts", "Accounting systems in BIA; tested restoration"],
                ["Internal controls", "Sufficient asset safeguards", "Control continuity evidenced in failover drills"],
                ["Retention", "Statutory record periods", "Retention-aligned backup schedules"],
              ],
            },
            bullets: [
              "Two limbs: anti-bribery; books-and-records with internal controls.",
              "The records limb assumes survivability - disaster breaks the assumption.",
              "DR duties: accounting in the BIA, regulator-acceptable RPOs, surviving audit trails.",
              "ERP-fire trace: six-month-old tapes -> unproducible records -> SEC inquiry.",
              "Compliance programme: risk assessment, retention alignment, tested drills.",
              "Sentence: records become legal obligations; the plan makes them survivable.",
            ],
            diagram: {
              kind: "flow",
              title: "FCPA-driven records continuity",
              caption: "From statutory duty to tested restoration - each step is audit evidence.",
              steps: [
                { label: "Identify", note: "FCPA-relevant systems into the BIA" },
                { label: "Set windows", note: "regulator-acceptable RPO/RTO for accounting" },
                { label: "Align retention", note: "backup schedules match statutory periods" },
                { label: "Test", note: "drills restore and reconcile the books" },
                { label: "Evidence", note: "documented controls survive any inquiry" },
              ],
            },
            callout: {
              type: "warning",
              title: "Reconstruction is not recovery",
              body: "The exposure trace's lesson: estimating and reconstructing missing records does not satisfy the books-and-records limb - the records must exist, accurate and fairly reflecting transactions. Plans that treat accounting systems as secondary systems create exactly the gap the SEC then finds. Quote the ERP-fire trace to make it concrete.",
            },
            examQuestions: [
              {
                q: "Explain the FCPA's two limbs, derive its records-continuity mandate for DR planning, and work the ERP-fire exposure trace with the compliance programme's countermeasures.",
                marks: 14,
                outline: [
                  "Anti-bribery limb: corrupt foreign payments prohibited",
                  "Books-and-records limb: accurate, fair, preserved accounts",
                  "Internal accounting controls sufficient to safeguard assets",
                  "Mandate: accounting systems in the BIA; regulator-acceptable windows",
                  "Audit trails must survive failover; retention aligned to statute",
                  "Trace: fire -> six-month tapes -> unproducible records -> SEC inquiry",
                  "Countermeasures: risk assessment, tested drills, documented controls",
                ],
              },
              {
                q: "Why do officer certifications raise the stakes of records recoverability?",
                marks: 7,
                outline: [

                  "Executives certify filings based on the records",

                  "Unrecoverable records make certifications indefensible",

                  "Personal and corporate liability attaches to the gap",

                  "Certification implies controls producing records on demand",

                  "Restatement risk converts record gaps into disclosure events",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "The Gramm-Leach-Bliley Act (GLBA)",
            body: [
              "The GLBA (US, 1999) governs financial institutions' handling of nonpublic personal information, and its Safeguards Rule is the continuity-relevant core: institutions must develop, implement and maintain a comprehensive information security programme - administrative, technical and physical safeguards - covering access controls, encryption, incident response and (the continuity clause) changes to systems and disposal of data. The Act's assumption: customer data remains protected even as systems change, move or fail - which makes DR a GLBA instrument, not an exception.",
              "The DR duties derived from the Safeguards Rule: the recovery site inherits the security programme (same access controls, same encryption); backup media are protected data (encrypted, inventoried, access-controlled); the incident-response plan coordinates with DR (a disaster that exposes data is a security incident with notification duties); and vendor oversight extends to DR service providers. A worked safeguard trace: a bank fails over to its warm site - access is re-provisioned from role templates, customer data replicates encrypted end-to-end, backup tapes at the site are in a vault with the same chain-of-custody log, and the DR service provider's contract carries the safeguard audit rights. Failover completes with the safeguard programme intact - GLBA satisfied by design.",
              "The privacy-notice limb completes the Act's picture: institutions must disclose information-sharing practices and honour opt-outs - duties that survive disaster (a crisis press release does not suspend them). The exam's sentence: GLBA makes the security programme travel with the data - the DR plan is where the Safeguards Rule is tested under stress, and unencrypted backups are the classic finding.",
              "Exam framing: expect 'explain GLBA and its DR relevance'. Give the Safeguards Rule's requirements, derive the recovery-site inheritance with the warm-site trace, and close with the programme-travels sentence. Unencrypted backups are the classic GLBA finding - the transport half of DR is where audits bite. The warm-site trace is the worked safeguard - five gates intact through one failover.",
            ],
            keyTerms: [
              { term: "GLBA", definition: "US Gramm-Leach-Bliley Act (1999) - financial privacy and safeguards." },
              { term: "Safeguards Rule", definition: "Mandatory comprehensive information security programme for financial institutions." },
              { term: "Nonpublic personal information", definition: "The customer data the Act protects." },
              { term: "Recovery-site inheritance", definition: "The DR site operates under the same security programme." },
            ],
            table: {
              caption: "Safeguards Rule duties at failover.",
              headers: ["Duty", "In normal operation", "At failover"],
              rows: [
                ["Access control", "Role-based, least privilege", "Re-provisioned from role templates - no widening"],
                ["Encryption", "Data encrypted in transit/at rest", "Replication and backups stay encrypted"],
                ["Backup media", "Protected and inventoried", "Vault + chain-of-custody at the DR site"],
                ["Incident response", "Detect, notify", "Disaster-exposed data = security incident duties"],
                ["Vendor oversight", "Provider safeguards audited", "DR service provider contracts carry audit rights"],
              ],
            },
            bullets: [
              "GLBA (1999): financial privacy notices + the Safeguards Rule's security programme.",
              "The continuity clause: safeguards cover system changes - DR included.",
              "Recovery site inherits the programme: same access, same encryption.",
              "Backup media are protected data - unencrypted tapes are the classic finding.",
              "Warm-site trace: role-template provisioning, encrypted replication, vaulted tapes.",
              "Sentence: the security programme travels with the data - DR tests it under stress.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Safeguards through failover",
              caption: "Five gates keep the security programme intact while systems move.",
              stages: [
                { label: "Provision", note: "role templates re-apply least privilege at DR" },
                { label: "Replicate", note: "data encrypted end-to-end" },
                { label: "Store media", note: "vault + chain of custody for backup tapes" },
                { label: "Coordinate IR", note: "any exposure triggers notification duties" },
                { label: "Audit", note: "provider contract rights exercised post-event" },
              ],
            },
            callout: {
              type: "warning",
              title: "Unencrypted backups are the classic GLBA finding",
              body: "The audit fact: the most common Safeguards Rule failure in DR is the backup media itself - tapes and drives carrying unencrypted customer data, stored in offices or moved by couriers. DR plans fixate on restoring data and forget transporting it. Quote it as the checklist item every financial DR plan needs.",
            },
            examQuestions: [
              {
                q: "Explain the Gramm-Leach-Bliley Act's Safeguards Rule, derive the recovery-site inheritance duties, and work the warm-site failover trace that keeps the programme intact.",
                marks: 14,
                outline: [
                  "GLBA (1999): privacy notices + comprehensive safeguard programme",
                  "Programme covers system changes - DR is inside its scope",
                  "Access: role templates re-applied; no privilege widening at DR",
                  "Encryption end-to-end including replication and backups",
                  "Backup media: vaulted, inventoried, chain-of-custody",
                  "IR coordination: disaster-exposed data = notification duties",
                  "Trace: warm-site failover with all five gates intact",
                ],
              },
              {
                q: "Why does vendor oversight extend to DR service providers?",
                marks: 7,
                outline: [

                  "Customer data leaves institutional custody during failover",

                  "The provider becomes a processor of protected data",

                  "Audit rights and safeguard duties must be contractual",

                  "The provider's staff and site join the safeguard perimeter",

                  "Incident-notification duties must reach through the contract",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "The Flood Disaster Protection Act of 1973 and the CAN-SPAM Act of 2003",
            body: [
              "Two US acts, two different continuity levers - hazard insurance and lawful communication. The Flood Disaster Protection Act (FDPA, 1973): properties in identified flood-hazard zones with federally related loans (mortgages from regulated lenders) must carry flood insurance - the NFIP's mandatory-purchase mechanism, expanded by later amendments (1994's refinements adding greater penalties and coverage requirements). Its continuity consequence is siting economics: flood-zone facilities either carry the mandated insurance (with premium consequences) or the organization pays uninsured losses - the Act turns flood exposure into a booked cost, which is exactly what the BIA needs. The organization's choice ladder: insure, mitigate (elevation, per 3.2), or relocate - and the Act prices the first option.",
              "The CAN-SPAM Act (2003): the US anti-spam statute governing commercial electronic messages - no false or misleading headers, no deceptive subject lines, honour opt-outs (promptly, mechanically), identify advertisements as such, include a physical postal address, and (post-2008 amendment) no junk-mail practices on mobile. Its continuity relevance is operational: crisis communication rides the same email and SMS channels as marketing - and a mass-crisis-notification sent to a marketing list without honouring opt-outs, or through a purchased list, violates CAN-SPAM precisely when the organization is under the most pressure. The plan's countermeasure: separate notification infrastructure (the emergency mass-notification system from 3.5) from marketing channels, with its own lawful basis (operational safety messages, not commercial promotions).",
              "A worked contrast fixes the pairing. The same flood event: the FDPA governs the finance side - the flooded warehouse's mortgage lender requires flood insurance the firm carries; the claim pays; the BIA's uninsured-loss column stays empty. The CAN-SPAM governs the communication side - the crisis-notification goes through the emergency system (transactional safety messages: exempt from marketing rules), while the marketing team's 'we're back' campaign runs through the compliant channel with opt-outs honoured. One event, two acts, two different levers - insurance finance and lawful messaging - both wired into the plan before the event.",
              "Exam framing: expect 'write notes on the Flood Disaster Protection Act and CAN-SPAM'. Give each act's core mechanism, derive its continuity lever, and run the flood-event contrast - closing with the two-levers sentence. Crisis mail is not marketing mail - separate infrastructure keeps the worst hour lawful. The flood-event contrast is the worked pair - one claim paid, one campaign lawful.",
            ],
            keyTerms: [
              { term: "FDPA 1973", definition: "Flood insurance mandatory for flood-zone properties with federally related loans." },
              { term: "NFIP", definition: "The National Flood Insurance Program administering the mandated cover." },
              { term: "CAN-SPAM 2003", definition: "US anti-spam law: truthful headers, opt-outs honoured, identification required." },
              { term: "Transactional message", definition: "Safety/operational notification - distinct legal basis from marketing." },
            ],
            table: {
              caption: "Two acts, two levers.",
              headers: ["Act", "Mechanism", "Continuity lever"],
              rows: [
                ["FDPA 1973", "Mandatory flood insurance in hazard zones", "Exposure becomes a booked, insurable cost"],
                ["FDPA consequence", "Insure / mitigate / relocate ladder", "BIA prices the uninsured column"],
                ["CAN-SPAM 2003", "Truthful, opt-out-honouring commercial mail", "Crisis comms must be lawful and separated"],
                ["CAN-SPAM consequence", "Separate notification infrastructure", "Emergency system != marketing channel"],
              ],
            },
            bullets: [
              "FDPA: flood-zone + federally related loan = mandatory NFIP insurance.",
              "Continuity effect: flood exposure priced - insure, mitigate or relocate.",
              "CAN-SPAM: truthful headers, no deceptive subjects, prompt opt-outs.",
              "Crisis notifications must ride separated, transactional infrastructure.",
              "Flood trace: FDPA pays the claim; CAN-SPAM-governed comms stay lawful.",
              "Sentence: two levers - insurance finance and lawful messaging - both pre-wired.",
            ],
            diagram: {
              kind: "compare",
              title: "One flood, two acts",
              caption: "Finance and communication levers fire in the same event - both must be pre-wired.",
              left: {
                heading: "FDPA - the finance lever",
                items: [
                  "Flood-zone warehouse with a federal-loan mortgage",
                  "Mandatory NFIP cover held - claim pays",
                  "BIA's uninsured column stays empty",
                  "Choice ladder: insure, mitigate, relocate",
                ],
              },
              right: {
                heading: "CAN-SPAM - the comms lever",
                items: [
                  "Crisis notification via the emergency system",
                  "Transactional safety messages - lawful basis distinct",
                  "Marketing 'we're back' campaign: opt-outs honoured",
                  "Never ride the purchased marketing list",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Crisis mail is not marketing mail",
              body: "The legal trap in crisis communications: blasting the disaster notification through the marketing platform to a purchased list can violate CAN-SPAM at the organization's worst moment. The fix is infrastructural, not stylistic - a separate, tested emergency-notification system with its own lawful basis. Name it in every comms-and-law answer.",
            },
            examQuestions: [
              {
                q: "Write notes on the Flood Disaster Protection Act of 1973 and the CAN-SPAM Act of 2003, derive each act's continuity lever, and contrast their operation on one flood event.",
                marks: 14,
                outline: [
                  "FDPA: mandatory flood insurance for hazard-zone, federally-financed properties",
                  "Continuity lever: exposure priced; insure-mitigate-relocate ladder",
                  "CAN-SPAM: truthful headers, prompt opt-outs, identification, postal address",
                  "Continuity lever: crisis comms separated from marketing infrastructure",
                  "Flood trace: NFIP claim pays; emergency-system notification stays lawful",
                  "Marketing follow-up via compliant channel with opt-outs honoured",
                  "Sentence: two levers, one event, both pre-wired",
                ],
              },
              {
                q: "Why does the FDPA make flood exposure a 'booked cost'?",
                marks: 7,
                outline: [

                  "Mandated premiums appear in the books like any operating cost",

                  "Uninsured loss becomes a visible choice, not an accident",

                  "The BIA and the finance function see the same number",

                  "Mandated cover converts hazard uncertainty into a budget line",

                  "Lenders enforce the mandate at origination and review",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "PIPEDA and the OECD foundations of personal data security law",
            body: [
              "PIPEDA - Canada's Personal Information Protection and Electronic Documents Act (2000) - governs how private-sector organizations collect, use and disclose personal information, and its ten fair-information principles are the syllabus's working version of the OECD inheritance. The principles: accountability (a designated officer is responsible), identifying purposes, consent (knowledge and consent for collection, use, disclosure), limiting collection, limiting use/disclosure/retention, accuracy, safeguards (protection appropriate to sensitivity), openness, individual access, and challenging compliance (recourse).",
              "The OECD connection is the section's history: the OECD Guidelines Governing the Protection of Privacy and Transborder Flows of Personal Data (1980) established the original principles - collection limitation, data quality, purpose specification, use limitation, security safeguards, openness, individual participation, accountability - which national laws (PIPEDA included) translated into statutes. The foundation's persistence is the exam's observation: every privacy act in this unit is a variation on the OECD's eight principles, which is why they recur across jurisdictions and why a DR plan built to them survives jurisdiction changes.",
              "The continuity duties follow the safeguards and accountability principles: personal data in backup and DR infrastructure carries protection duties (encryption, access control); disaster communication to affected individuals runs on the access-and-openness principles (breach or exposure notification); retention limits bind backup schedules (keeping deleted users' data in backups violates the limiting principle unless the schedule is defensible); and accountability names who owns data protection through the disaster. A worked DR trace: a firm's CRM fails over to a cloud DR site - data encrypted in transit and at rest, access re-provisioned by role, incident exposure triggers notification, backup retention aligns to the schedule, and the privacy officer signs the continuity addendum (accountability). Five principles, one failover - the OECD inheritance in motion.",
              "Exam framing: expect 'explain PIPEDA's principles' or 'the OECD foundations'. Give the OECD's eight principles, PIPEDA's ten with their continuity duties, run the CRM failover trace, and close with the inheritance sentence. One ancestor, many statutes - OECD-based plans survive jurisdiction changes. The CRM failover trace is the worked principles - five duties exercised in one move.",
            ],
            keyTerms: [
              { term: "PIPEDA", definition: "Canada's Personal Information Protection and Electronic Documents Act (2000)." },
              { term: "OECD Guidelines 1980", definition: "The eight privacy principles underlying national data-protection laws." },
              { term: "Fair-information principles", definition: "Accountability, consent, limiting, accuracy, safeguards, openness, access, recourse." },
              { term: "Designated accountability", definition: "A named officer owns data protection - including through disasters." },
            ],
            table: {
              caption: "Principles and their DR duties.",
              headers: ["Principle", "Statement", "DR duty"],
              rows: [
                ["Safeguards", "Protection fit to sensitivity", "Encrypted backups and DR replication"],
                ["Accountability", "Named responsible officer", "Privacy sign-off on continuity addenda"],
                ["Limiting retention", "Keep only as long as needed", "Backup schedules honour deletion"],
                ["Openness / access", "Transparency; individual access", "Exposure notification to affected individuals"],
                ["Consent", "Knowledge and consent", "Emergency comms on operational, not new, purposes"],
              ],
            },
            bullets: [
              "OECD 1980: eight principles - the ancestor of every privacy act here.",
              "PIPEDA's ten: accountability, purposes, consent, limits, accuracy, safeguards, openness, access, recourse.",
              "DR duties: encrypted recovery infrastructure, role-based access, defensible retention.",
              "CRM trace: encryption, role provisioning, exposure notification, retention, officer sign-off.",
              "Jurisdiction-survival: OECD-based plans port across privacy regimes.",
              "Sentence: privacy duties travel with the data - failover is their test.",
            ],
            diagram: {
              kind: "cycle",
              title: "The data-protection life cycle",
              caption: "OECD principles as a loop - continuity duties attach at every stage.",
              steps: [
                { label: "Collect", note: "consent; purpose specified" },
                { label: "Use / retain", note: "limits; accuracy; defensible schedules" },
                { label: "Safeguard", note: "protection fit to sensitivity - through DR too" },
                { label: "Disclose / notify", note: "openness; access; breach communication" },
                { label: "Account", note: "named officer; recourse; review" },
              ],
            },
            callout: {
              type: "exam",
              title: "One ancestor, many statutes",
              body: "The observation that earns comparative marks: 'PIPEDA, the EU directives and GLBA's privacy side are all translations of the OECD's 1980 eight principles - so a DR plan built to those principles survives jurisdiction changes.' The inheritance is the reason the syllabus lists the OECD under its own heading.",
            },
            examQuestions: [
              {
                q: "Explain the OECD's 1980 privacy guidelines as the foundation of data-protection law, present PIPEDA's fair-information principles with their DR duties, and work the CRM failover trace.",
                marks: 14,
                outline: [
                  "OECD 1980: collection limitation, quality, purpose, use limits, security, openness, participation, accountability",
                  "PIPEDA (2000): ten fair-information principles in statute",
                  "Safeguards: encrypted backups, DR replication, role-based access",
                  "Retention: backup schedules honour deletion duties",
                  "Openness/access: exposure notification to affected individuals",
                  "Accountability: privacy officer signs the continuity addendum",
                  "Trace: five principles exercised in one failover",
                ],
              },
              {
                q: "Why do backup archives raise retention-principle problems?",
                marks: 7,
                outline: [

                  "Deleted users' data persists in historical backups",

                  "Indefinite retention violates limiting principles",

                  "Defensible schedules document purpose-limited archive retention",

                  "Restore granularity decides how far deletion duties reach",

                  "Legal holds override deletion schedules explicitly",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "European law - the Data Protection Act 1998 and the personal-data directives",
            body: [
              "Europe's pre-GDPR framework, as the syllabus lists it: the UK Data Protection Act 1998 (implementing Directive 95/46/EC into UK law) - regulating the processing of personal data via eight enforceable principles (fair and lawful processing; specified purposes; adequacy and relevance; accuracy; retention no longer than necessary; rights-compliant processing; security; no transfer outside the EEA without adequate protection). Directive 95/46/EC: the EU's Data Protection Directive - the harmonizing instrument that made member states' laws share a backbone, with the security principle (Article 17: appropriate technical and organizational measures) and the transfer principle (Article 25: adequacy for cross-border flows).",
              "Directive 2002/58/EC (the ePrivacy directive, amending 95/46 for electronic communications): confidentiality of communications, traffic-data rules, and the breach-notification duties for electronic-communication providers - the ancestor of modern breach notification. The transmission-of-personal-data clause is the continuity-critical one: personal data may leave the EEA only to jurisdictions with adequate protection or under safeguards (contractual clauses, consent, or - historically - the US safe harbor). A DR plan replicating EU customer data to a non-EEA recovery site therefore has a legal design constraint, not just a technical one.",
              "A worked adequacy trace fixes the clause. A UK retailer's DR design: primary data in the UK; candidate DR sites - Dublin (in the EEA: intra-EEA transfer, adequacy satisfied by the single market), a US datacenter (adequacy not automatic - contractual clauses or certified frameworks required), a Mumbai site (same analysis, plus the transfer's necessity documented). The plan chooses Dublin for the tier-1 replication and documents the US analytics copies under contractual clauses. Four sites evaluated, one chosen on law as much as latency - the adequacy principle deciding the architecture. The exam's sentence: in the European frame, the DR map is drawn by adequacy first and distance second.",
              "Exam framing: expect 'write on the Data Protection Act 1998 and the EU directives'. Give the DPA's eight principles, the directives' security and transfer articles, and the adequacy trace choosing among DR sites - closing with the adequacy-first sentence. The fastest site may be the unlawful one - adequacy decides the DR map before distance does. The adequacy trace is the architecture decision - Dublin chosen, US copies under clauses.",
            ],
            keyTerms: [
              { term: "DPA 1998", definition: "UK implementation of Directive 95/46/EC - eight data principles." },
              { term: "Directive 95/46/EC", definition: "The EU Data Protection Directive: harmonized principles, security (Art 17), transfers (Art 25)." },
              { term: "Directive 2002/58/EC", definition: "The ePrivacy directive: communications confidentiality, breach notification duties." },
              { term: "Adequacy", definition: "Cross-border transfers require adequate protection or safeguards." },
            ],
            table: {
              caption: "The DPA 1998's eight principles (continuity reading).",
              headers: ["Principle", "Continuity duty"],
              rows: [
                ["Fair and lawful processing", "Recovery processes stay lawful"],
                ["Specified purposes", "DR copies used for recovery only"],
                ["Adequate, relevant, not excessive", "Replicate what recovery needs - no more"],
                ["Accuracy", "Replication preserves data integrity"],
                ["Retention limits", "DR archives honour schedules"],
                ["Rights-compliant processing", "Subject rights served from recovered systems"],
                ["Security", "DR site under same technical/organizational measures"],
                ["Transfer limits", "Non-EEA DR sites need adequacy or safeguards"],
              ],
            },
            bullets: [
              "DPA 1998: UK law on eight principles implementing Directive 95/46/EC.",
              "Directive 95/46: security (Art 17) and transfer adequacy (Art 25) - the DR-relevant articles.",
              "Directive 2002/58: communications confidentiality; the breach-notification ancestor.",
              "Transfers: EEA-exit requires adequacy or contractual safeguards.",
              "Adequacy trace: Dublin chosen for tier-1 replication; US copies under clauses.",
              "Sentence: the DR map is drawn by adequacy first, distance second.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the DR site under adequacy",
              caption: "The transmission clause decides the architecture - law before latency.",
              start: "Replicating EEA personal data",
              branches: [
                { label: "Intra-EEA site (Dublin)", outcome: "adequacy satisfied by the single market - preferred tier-1", good: true },
                { label: "Non-EEA site with safeguards", outcome: "contractual clauses / certified framework documented - usable with paperwork", good: true },
                { label: "Non-EEA site, no safeguards", outcome: "transfer prohibited - the site is legally unavailable however fast it is", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "The fastest site may be the unlawful one",
              body: "The adequacy trace's lesson: the lowest-latency replication target can be legally unavailable - a non-EEA site without safeguards fails the transfer clause regardless of its RTO. European DR plans are chosen by adequacy first and performance second; name that inversion explicitly.",
            },
            examQuestions: [
              {
                q: "Explain the Data Protection Act 1998's principles with their continuity duties, the security and transfer provisions of Directives 95/46/EC and 2002/58/EC, and the adequacy trace choosing among candidate DR sites.",
                marks: 14,
                outline: [
                  "DPA 1998: eight principles implementing 95/46/EC",
                  "Art 17: appropriate technical and organizational security measures",
                  "Art 25: cross-border transfer requires adequacy or safeguards",
                  "Directive 2002/58: communications confidentiality; breach notification ancestor",
                  "Continuity reading: DR copies purpose-limited, security-equivalent, schedule-honouring",
                  "Adequacy trace: Dublin (EEA) tier-1; US under contractual clauses",
                  "Sentence: adequacy decides the DR map before distance does",
                ],
              },
              {
                q: "How does Directive 2002/58/EC shape modern breach-notification expectations?",
                marks: 7,
                outline: [

                  "Electronic-communication providers must notify personal-data breaches",

                  "The duty normalizes disclosure - the ancestor of today's notification regimes",

                  "Disasters exposing communications data inherit the duty",

                  "Timeliness and content standards began in the telecom sector",

                  "Later regimes generalized the telecom template",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "Insurance, the Financial Groups Directive and the FTR Act of 1988",
            body: [
              "Insurance is the financial lever of continuity - transferring loss the architecture cannot avoid - and the syllabus's trio regulates its institutional and transaction layers. Insurance fundamentals for DR: property/business-interruption cover (the BIA's downtime cost is the sum insured's basis), the insurable-interest and indemnity principles, exclusions (war, gradual damage, undocumented maintenance), and the duty of disclosure - the plan itself is evidence of reasonable care. Business-interruption cover pays the downtime clock: its limit is set in days of lost gross profit, which makes the BIA and the policy the same document in two vocabularies.",
              "The Financial Groups Directive (FGD - the EU's directive on the supplementary supervision of financial entities in a conglomerate): financial conglomerates face consolidated supervision - group-wide risk management, capital adequacy across the mix, and intra-group transaction controls. Its continuity reading: a conglomerate's DR is group-level - one group BCM programme, consolidated reporting, and controls over intra-group dependencies (the group's shared datacenter is a single point of failure for all member entities). The FTR Act 1988: the anti-money-laundering reporting regime - transaction reporting, customer identification, suspicious-transaction reporting, and record-keeping duties (seven-year retention of records). Its continuity reading: transaction-monitoring systems are critical functions (reporting duties do not pause for disasters), and the seven-year record retention sets an archive-recoverability requirement.",
              "A worked three-instrument trace ties the trio. A financial group's disaster: business-interruption cover pays the 20-day trading halt (the BIA's number, verbatim, is the claim basis); the group's FGD-supervised BCM reports the intra-group datacenter failure to the consolidated supervisor with the group-level recovery metrics; the Australian subsidiary's FTR systems restore within their regulated window and the seven-year transaction archive is verified reconstructable. Three instruments - insurance, consolidated supervision, reporting law - each reading the same disaster through its own duty. The exam's sentence: the financial layer regulates who pays, who supervises, and what must be reported - and all three read the BIA.",
              "Exam framing: expect 'write on insurance and the financial acts'. Give insurance's DR fundamentals, the FGD's group-level duties, the FTR's reporting and retention duties, and the three-instrument trace - closing with the who-pays/who-supervises/what-reports sentence. The BIA appears three times - claim basis, supervision metric and restoration window in one number. The three-instrument trace is the worked close - one disaster, three regulatory readers.",
            ],
            keyTerms: [
              { term: "Business-interruption cover", definition: "Pays lost gross profit during downtime - its limit is the BIA in days." },
              { term: "FGD", definition: "EU directive on supplementary supervision of financial conglomerates - group-level risk and controls." },
              { term: "FTR Act 1988", definition: "Australia's financial-transactions reporting law: reporting, KYC, seven-year records." },
              { term: "Duty of disclosure", definition: "The insured must disclose material facts - the DR plan is evidence of care." },
            ],
            table: {
              caption: "The three financial instruments.",
              headers: ["Instrument", "Duty", "DR reading"],
              rows: [
                ["Insurance (BI cover)", "Disclose; indemnify documented loss", "BIA = the claim basis; plan = care evidence"],
                ["FGD", "Group-wide risk management and controls", "One group BCM; intra-group SPOFs regulated"],
                ["FTR 1988", "Report transactions; KYC; retain 7 years", "Monitoring is critical; archive reconstructable"],
              ],
            },
            bullets: [
              "Insurance: BI cover pays the downtime clock - the BIA is the claim basis.",
              "Duty of disclosure: documented plans and maintenance are care evidence.",
              "FGD: conglomerates supervise risk at group level - shared DR is a regulated SPOF.",
              "FTR 1988: transaction reporting and KYC duties do not pause for disasters.",
              "Seven-year retention: the archive's recoverability is a legal requirement.",
              "Trace: BI claim (BIA number), FGD report (group metrics), FTR verification (archive) - one disaster, three duties.",
            ],
            diagram: {
              kind: "compare",
              title: "Who pays, who supervises, what reports",
              caption: "The financial layer reads one disaster through three instruments.",
              left: {
                heading: "Insurance (who pays)",
                items: [
                  "BI cover: lost gross profit for the downtime days",
                  "BIA numbers become claim numbers",
                  "Disclosure duty: the plan proves care",
                  "Exclusions: war, gradual damage, poor maintenance",
                ],
              },
              right: {
                heading: "FGD + FTR (supervision and reporting)",
                items: [
                  "FGD: group BCM, consolidated risk, intra-group controls",
                  "Shared datacenter failure = regulated group SPOF",
                  "FTR: reporting duties survive the disaster",
                  "Seven-year archive reconstructability verified",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The BIA appears three times",
              body: "The trace's punchline: the same BIA downtime number is the insurance claim's basis, the FGD group report's recovery metric, and the FTR system's restoration window justification. One analysis document, three regulatory readers - that is why the financial layer sits in a DR syllabus.",
            },
            examQuestions: [
              {
                q: "Explain insurance fundamentals for DR, the Financial Groups Directive's group-level duties, and the FTR Act's reporting and retention duties - with the three-instrument trace on one financial-group disaster.",
                marks: 14,
                outline: [
                  "BI cover: lost gross profit for downtime - limit set in BIA days",
                  "Principles: insurable interest, indemnity, duty of disclosure",
                  "FGD: conglomerate supervision - group BCM, capital, intra-group controls",
                  "Shared datacenter = regulated group-level SPOF",
                  "FTR 1988: transaction reporting, KYC, seven-year record retention",
                  "Trace: BI claim pays the 20-day halt; FGD report filed; FTR archive verified",
                  "Sentence: who pays, who supervises, what reports - all read the BIA",
                ],
              },
              {
                q: "Why does the FTR Act make transaction-monitoring systems critical functions?",
                marks: 7,
                outline: [

                  "Reporting duties continue through disasters - no statutory pause",

                  "Unreported transactions during outage are compliance breaches",

                  "Hence monitoring and its archive sit high in the BIA ranking",

                  "Regulatory clocks do not stop for outages",

                  "Reconstructed transactions face the same audit tests",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Business Continuity Management",
      summary:
        "Unit V builds the plan: business continuity planning and its objectives, the essential resources, the BCM planning steps in the ISO frame, risk analysis and risk assessment with their basic elements, the business impact analysis and its components, threat analysis - risk analysis - BIA working together, and crisis management with its steps.",
      chapter: {
        number: "05",
        title: "Building the Plan",
        intro:
          "Unit V covers business continuity planning, its objectives and essential resources, BCM planning steps in the International Organization for Standardization frame, risk analysis, risk assessment and the basic elements of risk assessment, business impact analysis and its components, threat analysis with risk analysis and business impact analysis together, and crisis management with its steps.",
        inOneBreath:
          "BCM is the ISO-structured cycle: policy and scope, risk assessment (threats x vulnerabilities x impact), the BIA (MTD, RTO, RPO, dependencies per function), strategy to meet the clocks, plans, and exercised maintenance. Risk analysis measures likelihood; impact analysis measures consequence; the BIA prices both into priorities - and crisis management is the plan's command layer, walking detect, assess, activate, communicate, recover.",
        sections: [
          {
            number: "5.1",
            title: "Business continuity planning and its objectives",
            body: [
              "Business continuity planning (BCP) produces the documented capability to continue critical functions during and after disruption - and its objectives, per the syllabus, are the measurable versions of that promise: protect people (always first), ensure the survivability of critical functions within MTD, minimize financial and reputational loss, satisfy legal and regulatory duties (Unit IV's stack), protect market position and customer confidence, and provide orderly recovery - in priority order, with the BIA supplying the ranking.",
              "The objectives' measurability is what separates BCP from aspiration: each objective carries a metric - critical functions restored within their MTD (the BIA's clock table), recovery spend within budget, regulatory notifications within statutory windows, customer communication within SLA windows. A worked objective-metric trace: a firm's BCP lists five objectives; each gets its test - life safety (evacuation drill: headcount 8 minutes, target 10), critical functions (failover test: ERP up in 3.5 hours, MTD 4), financial (downtime cost per hour vs recovery investment ratio), legal (notification templates pre-approved by counsel), market (customer communication SLA: within 2 hours of declaration). Five objectives, five metrics, five tests - the plan becomes an auditable instrument.",
              "The objectives also set the plan's scope decision: everything or the critical? The BIA's answer - plan to the critical functions and their dependencies, document the manual workarounds for the rest. The exam's sentence: BCP's objectives are measurable promises with named clocks and named tests - an objective without a metric is a hope, and hopes do not fail over.",
              "Exam framing: expect 'explain BCP and its objectives'. Give the objective list in priority order, derive the metric per objective with the five-test trace, and close with the measurable-promises sentence. An objective without a metric is a hope - hopes do not fail over. The five-test trace is the worked objectives - every promise carrying its own evidence.",
            ],
            keyTerms: [
              { term: "BCP", definition: "The documented capability to continue critical functions through disruption." },
              { term: "Survivability objective", definition: "Critical functions continue within their BIA-assigned MTD." },
              { term: "Orderly recovery", definition: "Restoration in BIA priority order - no executive-seniority failures." },
              { term: "Auditable objective", definition: "Every objective carries a metric and a test that evidences it." },
            ],
            table: {
              caption: "Objectives to metrics to tests.",
              headers: ["Objective", "Metric", "Test"],
              rows: [
                ["Protect people", "Headcount time", "Evacuation drill: 8 min vs 10 target"],
                ["Survivability", "RTO vs MTD per function", "Failover test: 3.5h vs 4h MTD"],
                ["Minimize loss", "Downtime cost vs recovery spend", "BIA ratio review"],
                ["Legal duties", "Notification windows", "Pre-approved templates exercised"],
                ["Market confidence", "Communication SLA", "2-hour customer notice exercised"],
              ],
            },
            bullets: [
              "Objectives in order: people, critical functions, loss, legal, market, orderly recovery.",
              "Each objective carries a metric - clocks, ratios, windows.",
              "Worked trace: five objectives, five tests, all evidenced (drill, failover, ratio, templates, SLA).",
              "Scope decision: plan the critical + dependencies; document workarounds for the rest.",
              "Unmeasured objectives are hopes - hopes do not fail over.",
              "The BIA supplies the ranking that orders every objective.",
            ],
            diagram: {
              kind: "flow",
              title: "The BCP development flow",
              caption: "From objectives to tested capability - each stage feeds the next.",
              steps: [
                { label: "Objectives", note: "prioritized, measurable promises" },
                { label: "BIA", note: "critical functions, clocks, dependencies" },
                { label: "Strategy", note: "tiers and resources to meet the clocks" },
                { label: "Plans", note: "EOP, DR, BC - one document family" },
                { label: "Test & maintain", note: "metrics verified; gaps feed revision" },
              ],
            },
            callout: {
              type: "tip",
              title: "An objective without a metric is a hope",
              body: "The section's quotable line: 'BCP objectives are measurable promises - an objective without a metric is a hope, and hopes do not fail over.' Then prove it with the five-test trace; the pairing of promise and evidence is the whole discipline.",
            },
            examQuestions: [
              {
                q: "Explain business continuity planning and its objectives in priority order, derive a metric and test per objective with the five-objective trace, and state the scope decision the BIA forces.",
                marks: 14,
                outline: [
                  "Objectives: people, critical functions, loss, legal, market, orderly recovery",
                  "Measurability: every objective carries a metric",
                  "Life safety: evacuation drill headcount time",
                  "Survivability: RTO vs MTD per function via failover test",
                  "Legal: pre-approved notification templates",
                  "Market: communication SLA within declaration windows",
                  "Scope: critical functions + dependencies; workarounds for the rest",
                ],
              },
              {
                q: "Why must 'orderly recovery' be an explicit objective?",
                marks: 7,
                outline: [

                  "Without it, recovery follows seniority or noise, not priority",

                  "The BIA's ranking defines the order",

                  "Drills verify the order is executable under stress",

                  "Parallel recovery without ranking wastes scarce resources",

                  "The order is the plan's first testable artifact",

                ],              },
            ],
          },
          {
            number: "5.2",
            title: "Essential resources in business continuity planning",
            body: [
              "The plan executes through resources, and the syllabus's list organizes them in four classes. People: the response teams with named members and alternates (3.5's teams), trained staff, and the knowledge capture (runbooks, cross-training) that survives key-person loss. Facilities: alternate work sites (cold/warm/hot per 1.6), evacuation and assembly infrastructure, and the primary site's protective measures. Information and technology: the data (backups, replication), systems (failover targets), communication (mass notification, crisis lines), and the documentation (the plan itself, contact trees, vendor SLAs). Financial: recovery budget, insurance arrangements (4.7's BI cover), and emergency purchasing authority.",
              "The resource plan's design rule: every resource is mapped to a clock - people to the response MTD, facilities to the function RTO, data to the RPO, money to the whole. A worked resource mapping: the BIA says the order-processing function (MTD 8h) needs 12 trained staff at the warm site, the ERP failover (RTO 4h), data replicated to 15 minutes (RPO), and 50 lakh emergency purchasing authority - each number traced to a BIA line and funded in the budget. Four resources, four clocks, one funded plan - and the audit question 'who is missing at 03:00?' answers with names, not departments.",
              "The gaps worth naming: people resources fail silently (untrained alternates, expired contact lists - the drift issue 1.5 named), facility resources fail contractually (warm-site contracts without activation tests), and information resources fail quietly (backups that restore - verified only by test). The exam's sentence: essential resources are the plan's inventory, each priced, each mapped to a clock, each tested - because a resource without a test is a wish.",
              "Exam framing: expect 'describe the essential resources in BCP'. Give the four classes with their clocks, run the order-processing mapping trace, and name the silent-gap resources - closing with the inventory sentence. Who is missing at 03:00 - names and numbers, never departments, answer the resource audit. The order-processing mapping is the worked resources - four classes, four clocks, one budget.",
            ],
            keyTerms: [
              { term: "Resource-to-clock mapping", definition: "Every resource justified by the BIA line it serves." },
              { term: "Knowledge capture", definition: "Runbooks and cross-training that survive key-person loss." },
              { term: "Emergency purchasing authority", definition: "Pre-authorized spending for recovery - no committee at 03:00." },
              { term: "Silent gap", definition: "A resource that fails only when used - untested alternates, unverified backups." },
            ],
            table: {
              caption: "The four resource classes.",
              headers: ["Class", "Members", "Clock it serves"],
              rows: [
                ["People", "Teams, alternates, trained staff, runbooks", "Response MTD"],
                ["Facilities", "Alternate sites, evacuation infrastructure", "Function RTO"],
                ["Information / tech", "Data, systems, comms, documentation", "RPO / RTO"],
                ["Financial", "Budget, insurance, purchasing authority", "The whole plan"],
              ],
            },
            bullets: [
              "People: named members + alternates; knowledge captured in runbooks.",
              "Facilities: alternate sites tiered by the BIA's RTOs.",
              "Information: backups, replication, notification - the data class carries the RPO.",
              "Financial: recovery budget, BI cover, pre-authorized purchasing.",
              "Trace: order processing - 12 staff, 4h ERP, 15-min data, 50 lakh authority.",
              "Silent gaps: untrained alternates, untested site contracts, unverified restores.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The resource priority pyramid",
              caption: "People at the apex - every other resource exists to serve the response they execute.",
              tiers: [
                { label: "Financial resources", note: "budget, insurance, purchasing authority" },
                { label: "Information and technology", note: "data, systems, communications" },
                { label: "Facilities", note: "alternate sites, protective infrastructure" },
                { label: "People", note: "teams, alternates, training - the apex" },
              ],
            },
            callout: {
              type: "exam",
              title: "Who is missing at 03:00?",
              body: "The audit question that tests every resource class at once: 'the disaster starts at 03:00 Sunday - who answers, where do they go, what do they log into, and who can spend?' If any answer is a department name instead of a person or a number, the resource plan has a gap. Use it as the section's closing check.",
            },
            examQuestions: [
              {
                q: "Describe the essential resources of business continuity planning across people, facilities, information and finance - with the resource-to-clock mapping and the order-processing worked trace.",
                marks: 14,
                outline: [
                  "People: teams, named alternates, training, runbooks - serve response MTD",
                  "Facilities: alternate sites tiered by function RTO",
                  "Information: backups and replication serve the RPO; comms serve activation",
                  "Financial: budget, BI insurance, emergency purchasing authority",
                  "Trace: order processing - 12 staff, 4h ERP, 15-min data, 50 lakh authority",
                  "Silent gaps: untrained alternates, unverified backups, untested contracts",
                  "Audit question: who is missing at 03:00 - names, not departments",
                ],
              },
              {
                q: "Why does key-person loss belong in the resource plan?",
                marks: 7,
                outline: [

                  "Runbook knowledge often lives in one head",

                  "Cross-training and documentation make it survivable",

                  "The BIA should name knowledge-critical roles explicitly",

                  "Attrition and disaster remove the same knowledge together",

                  "Documentation converts person-risk into asset-risk",

                ],              },
            ],
          },
          {
            number: "5.3",
            title: "BCM planning steps in the ISO framework",
            body: [
              "The ISO frame (ISO 22301's lineage - the BCM management-system standard, descended from BS 25999) structures BCM as a management system, and the syllabus's 'planning steps in ISO' is its implementation sequence: policy and sponsorship (the management commitment that funds everything); scope definition (which parts of the organization, which activities); business impact analysis and risk assessment (the twin analyses - Unit 5.4-5.5); strategy determination (the response options per function); plan development (documented response and recovery); exercising and testing (the evidence phase); and continual improvement (the Plan-Do-Check-Act cycle closing over findings).",
              "A worked step trace fixes the sequence on one firm. Policy: board-approved BCM policy naming the sponsor and the review cadence. Scope: three business units, their 40 activities, and the shared services. Analyses: risk assessment scores the hazards (Unit II's catalogue); BIA prices the activities (MTD/RTO/RPO per function). Strategy: hot-site replication for the ERP, cloud warm tier for analytics, manual workarounds for the rest. Plans: integrated document family with runbooks. Exercise: tabletop quarterly, failover annually - findings logged. Improvement: PDCA closes - the annual management review updates policy, scope, strategy. Seven steps, one cycle, findings feeding forward.",
              "The management-system framing is the exam's depth mark: BCM under ISO is not a document but a system - policy drives analysis, analysis drives strategy, strategy drives plans, exercises test, findings improve, and the cycle repeats with management review as the closing gear. The sentence: ISO's BCM is Plan-Do-Check-Act wearing continuity clothes - and the audit trail (policy, analyses, plans, test reports, reviews) is what a certification body reads.",
              "Exam framing: expect 'explain the BCM planning steps in ISO'. Give the seven-step sequence, run the firm trace, and close with the PDCA sentence. Strategy never precedes analysis - the ISO sequence exists to prevent clocks being guessed. The firm trace is the seven-step walk - policy to improvement with findings feeding forward.",
            ],
            keyTerms: [
              { term: "ISO 22301", definition: "The BCM management-system standard (from BS 25999) - PDCA-structured." },
              { term: "Scope definition", definition: "Which units, activities and services the BCM system covers." },
              { term: "Twin analyses", definition: "Risk assessment (hazards) + BIA (impact) feeding strategy." },
              { term: "PDCA", definition: "Plan-Do-Check-Act - the management-system cycle closing over findings." },
            ],
            table: {
              caption: "The seven ISO-aligned steps.",
              headers: ["Step", "Output", "Worked answer"],
              rows: [
                ["Policy and sponsorship", "Approved BCM policy", "Board policy; named sponsor; review cadence"],
                ["Scope", "Covered units and activities", "3 units, 40 activities, shared services"],
                ["Risk assessment", "Scored hazards", "Unit II catalogue scored per site"],
                ["BIA", "MTD/RTO/RPO per function", "Priced activity table"],
                ["Strategy", "Response options per function", "Hot-site ERP; cloud warm analytics"],
                ["Plans", "Document family + runbooks", "Integrated with contact trees"],
                ["Exercise + improve", "Findings, PDCA closure", "Quarterly tabletop; annual review"],
              ],
            },
            bullets: [
              "Policy and sponsorship first - the management commitment funds the rest.",
              "Scope: units, activities, shared services - explicitly bounded.",
              "Twin analyses: risk assessment scores hazards; BIA prices impact.",
              "Strategy and plans follow the analyses - never precede them.",
              "Exercising is the evidence phase; improvement closes the loop.",
              "Sentence: ISO's BCM is PDCA in continuity clothes.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The ISO BCM step pipeline",
              caption: "Seven steps from policy to improvement - the audit trail runs along it.",
              stages: [
                { label: "Policy", note: "sponsorship and commitment" },
                { label: "Scope", note: "units and activities bounded" },
                { label: "Analyze", note: "risk assessment + BIA" },
                { label: "Strategize", note: "response options per clock" },
                { label: "Plan", note: "document family and runbooks" },
                { label: "Exercise + improve", note: "findings feed PDCA closure" },
              ],
            },
            callout: {
              type: "exam",
              title: "Strategy never precedes analysis",
              body: "The ordering slip examiners watch for: choosing hot sites and replication before the BIA sets the clocks. The ISO sequence exists precisely to prevent that - policy, scope, analysis, THEN strategy. 'No tolerance, no design' (1.6) reappears here as the pipeline's ordering rule.",
            },
            examQuestions: [
              {
                q: "Explain the BCM planning steps in the ISO framework, work the seven-step trace for one firm, and state the management-system (PDCA) framing with its audit trail.",
                marks: 14,
                outline: [
                  "Policy and sponsorship: board-approved BCM policy, named sponsor",
                  "Scope: units, activities, shared services bounded",
                  "Twin analyses: risk assessment + BIA before any strategy",
                  "Strategy: hot-site ERP, cloud warm analytics - per clock",
                  "Plans: integrated document family with runbooks",
                  "Exercise: quarterly tabletop, annual failover - findings logged",
                  "Improvement: PDCA closes; management review updates policy",
                ],
              },
              {
                q: "What makes BCM a management system rather than a document?",
                marks: 7,
                outline: [

                  "Policy, analyses, plans, tests and reviews form a cycle",

                  "Findings feed forward - the system improves itself",

                  "The audit trail evidences the cycle, not just the paper",

                  "Certification audits the cycle, not the binder",

                  "Improvement closures are dated and owned",

                ],              },
            ],
          },
          {
            number: "5.4",
            title: "Risk analysis and risk assessment",
            body: [
              "The syllabus separates the two terms, and the distinction is the exam's precision mark. Risk analysis is the measurement work: identifying threats, estimating likelihood and impact, producing the risk figures. Risk assessment is the decision work: comparing those figures against criteria (acceptance thresholds, appetite) and deciding - mitigate, transfer, accept or avoid. Analysis produces numbers; assessment makes decisions on them; the assessment's outputs (the treatment plan) drive the strategy step of 5.3.",
              "The basic elements of risk assessment, per the syllabus, are the analysis's components: threat identification (what can happen - Unit II's catalogue), vulnerability assessment (which weaknesses the threat can reach), likelihood estimation (frequency or probability), impact estimation (the consequence in business terms - which the BIA prices in detail), and the risk expression (likelihood x impact, plotted on the risk matrix, ranked). A worked element trace: flood at the riverside warehouse - threat: riverine flood; vulnerability: ground-floor electrical rooms; likelihood: 1-in-25-year event; impact: from the BIA, 12 days of production halt; risk expression: 4% x high impact = high-priority orange zone - assessment decides: mitigate (elevate the rooms, 3.2's pairing) rather than insure alone.",
              "The matrix ties analysis to assessment visually: likelihood on one axis, impact on the other, zones coloured (green accept, yellow monitor, orange mitigate/transfer, red urgent) - and each orange/red cell carries a named treatment owner and date. The exam's sentence: risk analysis measures; risk assessment decides; the matrix is where the two meet and every cell gets an owner. The orange-zone verdict is the decision - mitigate the rooms, transfer the residual, own the date.",
              "Exam framing: expect 'distinguish risk analysis and risk assessment' or 'the basic elements of risk assessment'. Give the measure-vs-decide distinction, the five elements, run the flood trace, and close with the matrix sentence. Impact analysis borrows from risk analysis - one dataset at two resolutions keeps the documents honest. The matrix rule closes the section - every orange and red cell owned and dated.",
            ],
            keyTerms: [
              { term: "Risk analysis", definition: "Measurement: threats, vulnerabilities, likelihood, impact - the numbers." },
              { term: "Risk assessment", definition: "Decision: compare figures to criteria; choose treat/transfer/accept/avoid." },
              { term: "Vulnerability assessment", definition: "Which weaknesses the threat can actually reach." },
              { term: "Risk matrix", definition: "Likelihood x impact zones - every orange/red cell owned and dated." },
            ],
            table: {
              caption: "The five elements on the flood example.",
              headers: ["Element", "This trace's answer"],
              rows: [
                ["Threat identification", "Riverine flood (Unit II catalogue)"],
                ["Vulnerability assessment", "Ground-floor electrical rooms exposed"],
                ["Likelihood estimation", "1-in-25-year event - 4% annual"],
                ["Impact estimation", "12-day production halt (BIA-priced)"],
                ["Risk expression + decision", "High priority; mitigate: elevate rooms"],
              ],
            },
            bullets: [
              "Analysis measures; assessment decides - the syllabus's precision split.",
              "Elements: threats, vulnerabilities, likelihood, impact, expression.",
              "Likelihood: annualized where data exists; scales where it does not.",
              "Impact priced by the BIA - analysis borrows impact analysis's numbers.",
              "Flood trace: 4% x 12-day halt -> orange zone -> elevate the rooms.",
              "Matrix rule: every orange/red cell carries a named owner and date.",
            ],
            diagram: {
              kind: "compare",
              title: "Analysis vs assessment",
              caption: "Numbers versus decisions - and the matrix where they meet.",
              left: {
                heading: "Risk analysis (measure)",
                items: [
                  "Identify threats and vulnerabilities",
                  "Estimate likelihood (4% annual)",
                  "Estimate impact (12-day halt)",
                  "Express: likelihood x impact figures",
                ],
              },
              right: {
                heading: "Risk assessment (decide)",
                items: [
                  "Compare figures to appetite and thresholds",
                  "Choose: mitigate, transfer, accept, avoid",
                  "Assign owners and dates to treatments",
                  "Flood verdict: elevate the electrical rooms",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Impact analysis vs risk analysis - the borrow line",
              body: "The distinction students blur: risk analysis estimates impact at risk level (high/medium/low); impact analysis (the BIA, 5.5) prices it precisely (12 days, 8 crore, MTD 4 hours). The sentence: 'risk analysis borrows its impact figures from the BIA - the two analyses are one dataset seen at two resolutions.'",
            },
            examQuestions: [
              {
                q: "Distinguish risk analysis from risk assessment, present the basic elements of risk assessment with the flood worked trace, and state the risk-matrix rule that ties analysis to decisions.",
                marks: 14,
                outline: [
                  "Analysis = measurement: threats, vulnerabilities, likelihood, impact",
                  "Assessment = decision: against criteria - treat/transfer/accept/avoid",
                  "Elements: threat ID, vulnerability, likelihood, impact, expression",
                  "Flood trace: 4% annual x 12-day halt = high priority",
                  "Decision: mitigate - elevate electrical rooms (mitigation phase, 3.2)",
                  "Matrix zones: green accept, yellow monitor, orange/red treat",
                  "Rule: every orange/red cell owned and dated",
                ],
              },
              {
                q: "When is a qualitative likelihood scale defensible instead of annualized figures?",
                marks: 7,
                outline: [

                  "No incident history or external data for the threat",

                  "Scales (rare/likely/almost-certain) with defined anchors",

                  "Calibrated by expert panels and reviewed against events",

                  "Anchored scales keep judgments comparable across assessors",

                  "Post-event reviews recalibrate the scale definitions",

                ],              },
            ],
          },
          {
            number: "5.5",
            title: "Business impact analysis and its components",
            body: [
              "The BIA is the analysis that prices disruption - the document every other chapter of this subject has quoted. Its method: inventory activities and processes; identify dependencies (people, applications, infrastructure, suppliers - the supply-chain line 3.4 named); determine impact over time (the outage curves: what does 1 hour, 1 day, 1 week of loss cost - financial, operational, reputational, regulatory); and derive the tolerances (MTD per function, RTO, RPO) plus the recovery priorities. The BIA's output is the clock table that strategies and budgets answer to.",
              "The components, per the syllabus: impact categories (financial, operational, legal/regulatory, reputational, contractual - 3.4's ledger priced), the outage-time curves (impact as a function of downtime), MTD derivation (where the curve crosses intolerable), RTO/RPO derivation (what restoration speed and data freshness the function needs), dependencies mapping, and the peak-period note (impact at month-end close or season peak differs from mid-cycle). A worked BIA line fixes the format: function 'order processing' - dependencies: ERP, payment gateway, warehouse system, 12 trained staff; impact curve: 1h = negligible, 8h = penalties trigger, 24h = churn begins; MTD = 24h; RTO = 4h; RPO = 15 min; priority = tier 1. One line, all components - and the strategy (hot-site replication) follows mechanically.",
              "The BIA's political economy is worth naming: it is also the document that makes downtime cost visible to management (1.5's budget issue) - its numbers justify the recovery budget, and its clock table survives leadership changes because it is anchored in business terms, not IT terms. The exam's sentence: the BIA converts disruption into numbers - curves, clocks and priorities - and every plan, tier and budget in this subject is downstream of those numbers.",
              "Exam framing: expect 'explain the BIA and its components'. Give the method and component list, write the order-processing line as the worked example, and close with the converts-to-numbers sentence. Write BIA lines, not BIA essays - one structured row carries more marks than methodology prose. The order-processing line is the template - dependencies, curve, MTD, RTO, RPO, tier.",
            ],
            keyTerms: [
              { term: "Impact curve", definition: "Loss as a function of downtime duration - where penalties and churn begin." },
              { term: "MTD derivation", definition: "Where the curve crosses intolerable - the survival clock." },
              { term: "Dependencies mapping", definition: "Upstream and downstream chain per function." },
              { term: "Peak-period impact", definition: "Month-end or season-peak disruption costs more - noted per function." },
            ],
            table: {
              caption: "The BIA line for order processing.",
              headers: ["Component", "Value"],
              rows: [
                ["Dependencies", "ERP, payment gateway, warehouse system, 12 staff"],
                ["Impact curve", "1h negligible; 8h penalties; 24h churn"],
                ["MTD", "24 hours"],
                ["RTO", "4 hours"],
                ["RPO", "15 minutes"],
                ["Priority", "Tier 1 (drives hot-site strategy)"],
              ],
            },
            bullets: [
              "Method: inventory, dependencies, impact-over-time, derive tolerances, prioritize.",
              "Components: impact categories, outage curves, MTD/RTO/RPO, dependencies, peak notes.",
              "Worked line: order processing - penalties at 8h, MTD 24h, RTO 4h, RPO 15 min.",
              "Strategy follows mechanically: tier-1 clocks demand hot-site replication.",
              "Political economy: BIA numbers justify the budget - visible downtime cost.",
              "Sentence: the BIA converts disruption into curves, clocks and priorities.",
            ],
            diagram: {
              kind: "layers",
              title: "The BIA's component stack",
              caption: "From inventory to clocks - each layer feeds the tolerance table below.",
              layers: [
                { label: "Tolerances and priorities", note: "MTD, RTO, RPO; tier ranking - the output" },
                { label: "Impact curves", note: "loss vs downtime; peak-period notes" },
                { label: "Dependencies mapping", note: "people, apps, infrastructure, suppliers" },
                { label: "Activity inventory", note: "processes and services - the raw list" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write BIA lines, not BIA essays",
              body: "The format discipline: one function per line with its dependencies, curve, MTD, RTO, RPO and tier - the order-processing line is the template. Examiners reward the structured line because it is what real BIAs contain; essays about methodology score less than one good line.",
            },
            examQuestions: [
              {
                q: "Explain the business impact analysis - method, components - and write the worked BIA line for order processing, showing how strategy follows from its clocks.",
                marks: 14,
                outline: [
                  "Method: inventory activities, map dependencies, curve impacts over time",
                  "Impact categories: financial, operational, legal, reputational, contractual",
                  "Derivations: MTD from the curve; RTO/RPO from recovery need",
                  "Dependencies: ERP, gateway, warehouse, 12 staff",
                  "Curve: negligible at 1h; penalties at 8h; churn at 24h",
                  "Line: MTD 24h, RTO 4h, RPO 15 min, tier 1",
                  "Strategy follows: hot-site replication for tier-1 clocks",
                ],
              },
              {
                q: "Why does peak-period impact belong in the BIA?",
                marks: 7,
                outline: [

                  "Month-end or season-peak disruption multiplies loss",

                  "The same outage costs differently by calendar position",

                  "Strategies (capacity, staffing) tune to the peak windows",

                  "Recovery priorities shift during peak windows",

                  "Staffing and capacity plans reference the calendar",

                ],              },
            ],
          },
          {
            number: "5.6",
            title: "Threat analysis, risk analysis and BIA working together",
            body: [
              "The syllabus's closing analysis clause assembles the unit: threat analysis (what can happen - Unit II's causes catalogue, profiled by onset, warning, scope), risk analysis (how likely and how bad - 5.4's elements), and the BIA (what it costs us - 5.5's curves and clocks). The three are one pipeline: threats feed scenarios; scenarios meet vulnerabilities for likelihood; likelihood multiplies against the BIA's impact for risk; and risk ranks against MTD clocks for priority. Every upstream chapter of this subject is one stage of this pipeline.",
              "A worked integrated trace fixes the assembly. Threat: riverine flood (profiled: warned, regional, seasonal). Vulnerability: riverside warehouse, ground-floor electrical rooms. Risk analysis: 4% annual likelihood x high impact = orange. BIA: the warehouse function's curve - 12-day halt, penalties from day 2, MTD 72h, RTO 24h. Assembly: the risk's impact leg is borrowed from the BIA; the BIA's scenario list is fed by the threat analysis; the priority decision (elevate rooms + hot standby for the ERP the warehouse depends on) cites all three documents. One flood, three analyses, one funded decision - the integration is the point.",
              "The integration's discipline notes: consistency (the same impact figures appear in risk analysis and BIA - one dataset, two resolutions, 5.4's borrow line), coverage (every Unit II threat category appears in the threat register; every BIA-critical function has at least one scenario), and traceability (every funded countermeasure cites its analysis line - the audit trail examiners and ISO assessors both follow). The exam's sentence: threat analysis supplies the scenarios, risk analysis prices the probability, the BIA prices the consequence - and priority is where the three multiply.",
              "Exam framing: expect 'how do threat analysis, risk analysis and BIA work together'. Give the pipeline, run the integrated flood trace, and state the discipline notes - closing with the multiply sentence. Priority is the multiplication - threats price probability, the BIA prices consequence, the decision cites both. The flood assembly is the integration trace - three documents, one funded decision.",
            ],
            keyTerms: [
              { term: "Threat register", definition: "Unit II's catalogue profiled per hazard - the pipeline's input." },
              { term: "Scenario assembly", definition: "Threat + vulnerability + function = a scenario the BIA prices." },
              { term: "One dataset, two resolutions", definition: "Risk-level impact figures borrowed from BIA precision." },
              { term: "Traceability", definition: "Every countermeasure cites its analysis line - the audit trail." },
            ],
            table: {
              caption: "The integrated pipeline on one flood.",
              headers: ["Stage", "Document", "Contribution"],
              rows: [
                ["Threat analysis", "Threat register", "Riverine flood: warned, regional, seasonal"],
                ["Vulnerability", "Site assessment", "Ground-floor electrical rooms exposed"],
                ["Risk analysis", "Risk register", "4% x high = orange zone"],
                ["BIA", "Clock table", "12-day halt; MTD 72h; RTO 24h"],
                ["Decision", "Treatment plan", "Elevate rooms + ERP hot standby - all three cited"],
              ],
            },
            bullets: [
              "Pipeline: threats -> scenarios -> likelihood -> risk -> priority.",
              "Threat analysis profiles Unit II's catalogue (onset, warning, scope).",
              "Risk analysis borrows impact from the BIA - one dataset, two resolutions.",
              "BIA prices consequence: curves, clocks, dependencies.",
              "Flood trace: 4% orange risk + 72h MTD -> elevate + hot standby, all cited.",
              "Discipline: consistency, coverage, traceability - the audit trio.",
            ],
            diagram: {
              kind: "flow",
              title: "The three analyses as one pipeline",
              caption: "Threats in, priorities out - every funded decision cites all three documents.",
              steps: [
                { label: "Threat analysis", note: "catalogue profiled per hazard" },
                { label: "Risk analysis", note: "likelihood x impact at risk resolution" },
                { label: "BIA", note: "impact priced: curves, clocks, dependencies" },
                { label: "Assembly", note: "scenarios meet clocks; risk meets appetite" },
                { label: "Priority", note: "funded countermeasures citing all three" },
              ],
            },
            callout: {
              type: "exam",
              title: "Priority is the multiplication",
              body: "The assembly sentence: 'threat analysis supplies the scenarios, risk analysis prices the probability, the BIA prices the consequence - priority is where the three multiply.' The funded flood decision (elevate + hot standby) citing all three documents is the trace that proves it.",
            },
            examQuestions: [
              {
                q: "Explain how threat analysis, risk analysis and the BIA work together as one pipeline, work the integrated flood trace, and state the consistency-coverage-traceability disciplines.",
                marks: 14,
                outline: [
                  "Pipeline: threats -> scenarios -> likelihood -> risk -> priority",
                  "Threat register: Unit II catalogue profiled (onset, warning, scope)",
                  "Risk analysis: 4% x high = orange - impact borrowed from the BIA",
                  "BIA: 12-day halt, penalties from day 2, MTD 72h, RTO 24h",
                  "Decision: elevate electrical rooms + ERP hot standby - all three cited",
                  "Consistency: one dataset at two resolutions",
                  "Traceability: every funded countermeasure cites its analysis line",
                ],
              },
              {
                q: "Why must every BIA-critical function have at least one scenario?",
                marks: 7,
                outline: [

                  "Coverage: a function no threat reaches is either mis-analyzed or mis-ranked",

                  "The threat register and clock table cross-check each other",

                  "Gaps either inflate priorities or hide exposures",

                  "Scenario-less functions are unpriced risks",

                  "Cross-coverage keeps the two documents honest",

                ],              },
            ],
          },
          {
            number: "5.7",
            title: "Crisis management and its steps",
            body: [
              "Crisis management is the command layer above response and recovery - the decisions that frameworks cannot pre-write: declare the crisis, set objectives, communicate with stakeholders, direct the response teams, decide the hard trade-offs (pay the ransom? relocate permanently? disclose publicly?), and steer the recovery. Its steps, per the syllabus, run: signal detection (the trigger event - 1.7's early-warning echo), crisis assessment and declaration (activate the command structure - 3.3's ICS in business dress), stakeholder communication (employees, customers, media, regulators - 3.5's comms infrastructure), response direction (teams execute; command decides), and recovery steering plus learning (the lessons-learned review closing 5.3's PDCA).",
              "A worked crisis-management trace fixes the steps on the firm's flood. Signal: river gauge crosses the action threshold at 23:40. Assessment and declaration: the committee convenes at 23:55 by video - crisis declared at 00:10, objectives set (life safety, protect stock, customer SLA within 2h). Communication: mass notification to all staff by 00:30; customers notified with the SLA message by 01:30; regulator informed of the chemical-store risk the same morning. Response direction: recovery teams execute the BIA's tier order; command decides the trade-off - lease temporary space (yes) versus paying for air-freight replacement stock. Recovery steering and learning: build-back-better rebuild, lessons-learned review within two weeks feeding the ISO cycle. Six steps, one flood, timestamps throughout.",
              "The craft notes complete the section: crisis management is decided under uncertainty with incomplete information (the plan supplies thresholds that convert uncertainty into triggers), communication discipline matters as much as operational response (the market track 3.4 priced churn - communication is its countermeasure), and the crisis leader's hardest skill is deciding slowly-reversible vs irreversible decisions deliberately. The exam's sentence: crisis management is the plan's command layer - pre-decided thresholds, pre-built communication, drilled teams, and a leader deciding the trade-offs the runbooks left open.",
              "Exam framing: expect 'explain crisis management and its steps'. Give the step list, run the flood trace with timestamps, and name the craft notes - closing with the command-layer sentence. Thresholds are pre-decided crisis management - the gauge crossing at 23:40 was written months earlier. The timestamped flood trace is the worked steps - detection through learning, clocked throughout.",
            ],
            keyTerms: [
              { term: "Signal detection", definition: "Threshold crossing that converts uncertainty into a trigger." },
              { term: "Crisis declaration", definition: "The formal activation of command, objectives and communication." },
              { term: "Stakeholder communication", definition: "Staff, customers, media, regulators - SLA-timed and pre-approved." },
              { term: "Lessons-learned review", definition: "The post-crisis learning that closes the PDCA cycle." },
            ],
            table: {
              caption: "The six steps with the flood timestamps.",
              headers: ["Step", "Flood trace", "Time"],
              rows: [
                ["Signal detection", "River gauge crosses action threshold", "23:40"],
                ["Assessment + declaration", "Committee convenes; crisis declared", "00:10"],
                ["Stakeholder communication", "Staff notified; customers within SLA", "00:30 / 01:30"],
                ["Response direction", "Teams execute BIA tier order; trade-offs decided", "Day 1 onward"],
                ["Recovery steering", "Temporary space leased; rebuild better", "Weeks"],
                ["Learning", "Lessons-learned review feeds PDCA", "Within 2 weeks"],
              ],
            },
            bullets: [
              "Crisis management = the command layer above response and recovery.",
              "Steps: signal detection, declaration, communication, direction, steering, learning.",
              "Thresholds convert uncertainty into triggers - pre-decided detection.",
              "Flood trace: gauge 23:40 -> declaration 00:10 -> staff 00:30 -> customers 01:30.",
              "Trade-offs (lease vs air-freight) are the leader's reserved decisions.",
              "Learning closes the cycle - lessons feed the ISO improvement step.",
            ],
            diagram: {
              kind: "cycle",
              title: "The crisis management loop",
              caption: "Detect, declare, communicate, direct, steer, learn - and the loop feeds the next plan.",
              steps: [
                { label: "Detect", note: "threshold crossed - the trigger fires" },
                { label: "Declare", note: "command activated; objectives set" },
                { label: "Communicate", note: "stakeholders within SLA windows" },
                { label: "Direct", note: "teams execute; trade-offs decided" },
                { label: "Steer recovery", note: "restore and build back better" },
                { label: "Learn", note: "lessons-learned closes the PDCA cycle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Thresholds are pre-decided crisis management",
              body: "The trace's best line: the river gauge crossing 23:40 was not a judgement call - the threshold was written in the plan months earlier. 'Crisis management's craft is pre-deciding as much as possible, then commanding the remainder deliberately.' Quote it as the definition's operational core.",
            },
            examQuestions: [
              {
                q: "Explain crisis management and its steps, work the flood trace with timestamps across all six steps, and state the craft notes on thresholds, communication and irreversible decisions.",
                marks: 14,
                outline: [
                  "Command layer above response and recovery - decisions frameworks cannot pre-write",
                  "Signal detection: river gauge crosses threshold at 23:40 - pre-decided",
                  "Declaration: committee at 23:55, crisis declared 00:10, objectives set",
                  "Communication: staff 00:30, customers 01:30 within SLA, regulator same morning",
                  "Direction: teams execute BIA tiers; lease-vs-air-freight decided on margin",
                  "Steering + learning: build-back-better; lessons feed PDCA within 2 weeks",
                  "Craft: pre-decide via thresholds; communicate deliberately; respect irreversible decisions",
                ],
              },
              {
                q: "Why does crisis communication deserve its own step and SLA?",
                marks: 7,
                outline: [

                  "The market track (3.4) priced churn - communication is its countermeasure",

                  "Silence during crisis is read as incompetence",

                  "SLA-timed, pre-approved messages remove improvisation from the worst hour",

                  "First-message windows decide the narrative before speculation does",

                  "Pre-approved templates remove drafting from the worst hour",

                ],              },
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
        { topic: "DR vs BC + terminology (MTD/RTO/RPO)", weight: "about 10-12 marks", note: "The contrast table and the fire-at-14:00 timeline open most papers." },
        { topic: "Business impact analysis + risk assessment", weight: "about 12-14 marks", note: "The BIA line format and the analysis-vs-assessment split - Unit V's core." },
        { topic: "Emergency management phases + FEMA", weight: "about 10-12 marks", note: "Four phases, ICS, the FEMA escalation pipeline." },
        { topic: "BCM planning steps (ISO) + crisis management", weight: "about 8-10 marks", note: "Seven-step pipeline + the six-step crisis loop with timestamps." },
        { topic: "Types and consequences of disasters", weight: "about 8-10 marks", note: "Three families, four consequence tracks, the flood trace." },
        { topic: "Laws and acts (FCPA, GLBA, PIPEDA, EU)", weight: "about 8-10 marks", note: "The legal stack + one worked trace per act." },
        { topic: "Natural disaster playbooks", weight: "about 6-8 marks", note: "Drop-cover-hold, tsunami cascade, fast-vs-slow hazard pairing." },
        { topic: "Solutions, resources and best practices", weight: "about 6-8 marks", note: "Tier catalogue, 3-2-1-1-0, the four resource classes." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every weekend, write one plan document from memory (a BIA line, a timeline, a trace). This subject is document-examined: the marks live in structured lines - clocks, matrices, traces - not in prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["Terminology card + fire timeline", "DR vs BC ransomware contrast", "Principles pyramid + sole-commander case", "Issues families + aging trace", "Activity cycle + tier catalogue + 3-2-1-1-0", "ISDR pillars + Sendai priorities"] },
        { week: "Week 2", focus: "Unit II - causes", tasks: ["Nature profile + category-lever table", "Earthquake playbook + drill trace", "Volcano precursors + tsunami cascade", "Landslide/flood ledgers + interaction", "Wildfire/drought fast-vs-slow pairing", "Outage cascades + counters", "Intentional categories + warehouse trace"] },
        { week: "Week 3", focus: "Unit III - emergency management", tasks: ["Need argument + two-plant contrast", "Mitigation vs preparedness pairing", "Response/recovery + warehouse handoff", "Six-track business ledger + asymmetries", "Corporate EM programme trace", "FEMA mandate + escalation + activities"] },
        { week: "Week 4", focus: "Unit IV - laws", tasks: ["Legal stack + bank inheritance trace", "FCPA limbs + ERP-fire exposure", "GLBA safeguards at failover", "FDPA + CAN-SPAM two-lever contrast", "OECD/PIPEDA principles + CRM trace", "DPA 1998 + directives + adequacy trace", "Insurance/FGD/FTR three-instrument trace"] },
        { week: "Week 5", focus: "Unit V - building the plan", tasks: ["BCP objectives + five-test trace", "Resource classes + 03:00 audit question", "ISO seven steps + PDCA framing", "Risk analysis vs assessment + flood elements", "BIA line format + order-processing example", "Three-analyses pipeline + crisis six steps"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Rewrite the anchor tables from memory", "One BIA line + one timeline + one trace by hand", "Two full past papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is document-examined: answer with structured lines - a BIA row, a timeline, a matrix - not prose paragraphs.",
        "Every trace carries timestamps: the fire timeline, the flood crisis trace, the FEMA escalation - clocks are the discipline's signature.",
        "For terminology questions, define MTD/RTO/RPO per function and close with the purchasing sentence - tolerance is bought with architecture.",
        "For DR vs BC, run one event through both clocks - the ransomware contrast is the model.",
        "For phase questions, keep the boundary sharp: mitigation changes impact, preparedness changes capability, response ends at stability.",
        "For law questions, state the duty first (records, data, transfers), then the act, then one trace - law names duties; traces show them binding.",
        "For BIA questions, write one line in full format (dependencies, curve, MTD, RTO, RPO, tier) - one good line beats methodology essays.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to check that every trace carries its clocks.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rewrite the anchor documents (terminology card, DR-vs-BC table, principles pyramid, four-phase diagram, legal stack, BIA line, crisis six steps) and re-run the fire timeline and flood trace by hand. No new material tonight.",
      ],
      bullets: [
        "Calling DR and BC the same thing - DR restores technology, BC sustains the business.",
        "Calling drills 'mitigation' - drills are preparedness; mitigation changes the impact itself.",
        "Saying response ends when the fire dies - it ends at stability, with people accounted.",
        "Quoting one blanket RTO - the plan is a portfolio of per-function clocks from the BIA.",
        "Confusing risk analysis (measure) with risk assessment (decide).",
        "Forgetting RPO in BIA lines - the data-loss clock is half the tolerance.",
        "Writing BIA essays instead of BIA lines - structure is the mark.",
        "Treating failover as outside the law - GLBA, PIPEDA and FCPA duties bind at failover.",
        "Sending crisis notifications through marketing infrastructure - CAN-SPAM exposure at the worst moment.",
        "Skipping the supply-chain line in the BIA - the supplier's flood is your halt.",
        "Claiming FEMA executes the response - it coordinates; departments execute their ESFs.",
        "Restoring a suspicious fire scene before forensics - evidence and claims both die.",
      ],
    },
  ],
};
