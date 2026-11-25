/**
 * Academics - RGPV ME-703(C) VII-semester elective: Systems Engineering.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me703c: AcademicSubject = {
  id: "me-703-c",
  code: "ME-703(C)",
  title: "Systems Engineering",
  semester: "VII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to systems engineering for mechanical engineers: systems thinking and lifecycle models, requirements and architecture, design synthesis and integration, verification and testing, and the management toolkit - TPM, risk, AHP, EVM and life cycle cost - closed with aircraft, spacecraft and automobile case studies.",
  description:
    "Five units walk from what a system is - elements, boundaries, emergence - through INCOSE processes and the V, spiral and incremental lifecycles; into requirements elicitation, functional and non-functional requirements, traceability, architecture and interface control documents; then design synthesis, the SRR/PDR/CDR review ladder and integration strategies; on to verification and validation, the four verification methods, test planning, HALT/HASS and configuration management; and finally the management machinery - technical performance measurement, risk registers, AHP decisions, earned value and life cycle cost. Every section pairs the concept with a redrawable diagram, a table or code sample, and the exam questions RGPV actually asks.",
  accentColor: "#0ea5e9",
  emoji: "SE",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Fundamentals of Systems Engineering",
      summary:
        "The foundation: what a system is, what systems engineering is for, how the INCOSE handbook organises its processes, and how the V, spiral and incremental lifecycles trade rigidity for learning - closing with systems thinking: emergence, complexity and systems of systems.",
      chapter: {
        number: "01",
        title: "Systems, SE and Lifecycles",
        intro:
          "Unit I builds the subject's vocabulary and skeleton: what a system is and where its boundary runs, what systems engineering is and how the INCOSE handbook organises it, how the V-model pairs definition with verification, how spiral and incremental lifecycles trade rigidity for learning, and how systems thinking - emergence, complexity and systems of systems - explains why the discipline exists at all.",
        inOneBreath:
          "A system is an interacting combination of elements producing results unobtainable by the elements alone; the boundary separates designable elements from the environment; emergence - properties of the whole such as ride quality - forces system-level engineering; INCOSE and ISO/IEC 15288 organise the discipline into agreement, project-enabling, technical management and technical processes; the V-model pairs every definition level on the left leg with a verification level on the right; spiral loops anchor every cycle on risk while incremental models deliver capability in builds; and systems of systems - operationally and managerially independent, evolving and emergent - extend the discipline across fleets, grids and infrastructure.",
        sections: [
          {
            number: "1.1",
            title: "What is a system? Definition, boundary and environment",
            body: [
              "A system is an interacting combination of people, products and processes that provides a capability to satisfy a stated need. INCOSE formalises the idea: a system is a construct or collection of different elements that together produce results not obtainable by the elements alone. The elements include hardware, software, firmware, people, information, techniques, facilities and services, and what turns a pile of elements into a system is the set of relationships between them - physical connections, energy flows, data links and control loops - all directed at a purpose. A gearbox on a bench is a component; an engine, gearbox, axles, tyres, driver and road, coupled by torque and closed by feedback, become a powertrain system.",
              "Every analysis of a system begins by drawing its boundary: the line separating what can be designed from the environment, which is everything the system interacts with but does not control. Across that boundary flow inputs - energy, material and information - and outputs, including by-products and waste heat that a responsible design must account for. An open system exchanges energy and matter with its environment; a closed one does not, and truly closed systems are idealisations rarely met in mechanical engineering. Where the boundary is drawn is a decision, not a fact of nature: studying the vehicle, the powertrain or just the combustion event changes what counts as environment, and casual boundary choices ripple outward into wrong requirements and unmanageable interfaces at integration.",
              "Systems are hierarchical: a system decomposes into subsystems, subsystems into assemblies, assemblies into components and components into parts. A passenger car contains powertrain, chassis, body, thermal and electrical subsystems; the chassis contains suspension, steering and braking assemblies; the suspension assembly contains dampers, springs and links. The decisive property of this hierarchy is emergence: the whole exhibits behaviour no element possesses alone. Vehicle ride quality, for example, emerges from suspension kinematics, tyre stiffness, body structure and seat dynamics interacting - no single part is ride quality, and no single part can own it. Because emergent properties live in relationships rather than elements, they must be engineered at system level through requirements, budgets and interfaces: that is precisely the systems engineer's mandate and the reason this subject exists.",
            ],
            bullets: [
              "System: interacting elements - hardware, software, people, processes - that produce results unobtainable by the elements alone.",
              "Boundary: separates designable elements from the environment; inputs and outputs (energy, material, information) cross it.",
              "Open vs closed system: open systems exchange energy and matter with the environment; closed systems are idealisations.",
              "Hierarchy: system -> subsystem -> assembly -> component -> part, each level carrying its own requirements and tests.",
              "Emergence: properties of the whole (ride quality, dispatch reliability) arising from relationships, never from a single element.",
            ],
            table: {
              caption: "Decomposing a passenger car through the system hierarchy.",
              headers: ["Level", "Example", "Defined by", "Typical artefact"],
              rows: [
                ["System", "Passenger car", "Mission and user needs", "System specification"],
                ["Subsystem", "Chassis", "Allocated requirements", "Subsystem specification"],
                ["Assembly", "Suspension", "Interface drawings", "Assembly drawing"],
                ["Component", "Damper", "Make/buy decision", "Component spec"],
                ["Part", "Damper piston", "Material and geometry", "Detailed drawing"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "An open system as an input-transformation-output construct",
              caption:
                "Every system sits inside an environment; control and feedback close the loop - the starting picture for any SE answer.",
              steps: [
                { label: "Inputs", note: "energy, material, information" },
                { label: "System elements", note: "components plus relationships" },
                { label: "Transformation", note: "functions the system performs" },
                { label: "Outputs", note: "useful products, by-products, data" },
                { label: "Feedback and control", note: "sensors, control laws, operators" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 'define a system' question earns full marks with four moves: definition, boundary and environment, hierarchy with a car example, and emergence with ride quality. A bare list of examples earns almost nothing.",
            },
            keyTerms: [
              { term: "System", definition: "An interacting combination of elements viewed as a whole, producing results not obtainable from the elements alone." },
              { term: "Boundary", definition: "The line separating the system from its environment; inputs and outputs cross it." },
              { term: "Emergence", definition: "Properties of the whole that arise from element interactions and belong to no single element." },
            ],
            examQuestions: [
              {
                q: "Define a system. Explain boundary, environment and hierarchy with a mechanical example, and show how emergent properties justify systems engineering.",
                marks: 7,
                outline: [
                  "Give the INCOSE-style definition: interacting elements producing results unobtainable by the elements alone.",
                  "Explain elements and relationships: hardware, software, people, processes joined by physical, energy, data and control links.",
                  "Define boundary and environment; list inputs (energy, material, information) and outputs including by-products.",
                  "Distinguish open and closed systems; note that boundary placement is a decision.",
                  "Present the hierarchy: system -> subsystem -> assembly -> component -> part, using a passenger car.",
                  "Define emergence; give ride quality as suspension-tyre-body interaction owned by no part.",
                  "Conclude: emergent properties must be engineered at system level - the systems engineer's mandate.",
                ],
              },
              {
                q: "Distinguish open and closed systems with one example each.",
                marks: 2,
              },
              {
                q: "List the element types that can constitute a system, with an example of each from an automobile.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Systems engineering as a discipline and the INCOSE handbook",
            body: [
              "Systems engineering is an interdisciplinary approach and a set of processes used to engineer successful systems: it focuses on defining customer needs and required functionality early in the development cycle, documenting requirements, and then proceeding with design synthesis and system validation while considering the complete problem - operations, cost and schedule, performance, training and support, test, manufacturing and disposal. Where a mechanical engineer optimises a component for depth, the systems engineer optimises the whole for balance. The discipline deliberately trades depth for breadth: it owns requirements, interfaces, budgets, integration and verification - the connective tissue of a program - rather than any single design discipline.",
              "The professional home of the discipline is INCOSE, the International Council on Systems Engineering, whose Systems Engineering Handbook codifies practice around ISO/IEC 15288. The standard groups processes into four families. Agreement processes govern acquisition and supply between customer and supplier. Organisational project-enabling processes - life cycle model management, infrastructure, human resources, quality and knowledge management - keep the enterprise itself capable. Technical management processes run the technical effort: project planning and control, risk, configuration, interface and information management, and measurement. The technical processes are the heart of this subject, running from business or mission analysis and stakeholder needs through requirements, architecture and design, into implementation, integration, verification, transition, validation, operation, maintenance and disposal.",
              "The discipline grew from aerospace and defence necessity: the missile and Apollo programs of the 1950s and 1960s discovered that overruns traced not to weak component engineering but to unmanaged interfaces and requirements. Adoption then spread to railways, energy, automotive and medical devices - any industry where integration risk dominates component risk. The evidence has stayed consistent: industry studies attribute the majority of program overruns to requirements defects discovered late, whose correction cost multiplies with every lifecycle stage crossed. For a mechanical engineer, systems engineering is therefore a career multiplier: the engineer who can own the whole - budgets, interfaces, verification - sits at the centre of every program rather than at one workstation on its edge.",
            ],
            bullets: [
              "SE definition: interdisciplinary approach to successful systems - needs first, whole lifecycle, all stakeholder dimensions.",
              "Breadth over depth: SE owns requirements, interfaces, budgets, integration and verification, not one design discipline.",
              "INCOSE handbook + ISO/IEC 15288: four process families - agreement, project-enabling, technical management, technical.",
              "Technical processes trace the V: needs -> requirements -> architecture -> design -> build -> integrate -> verify -> validate -> operate -> retire.",
              "Origin and spread: born of aerospace integration failures; now standard in automotive, rail, energy and medical programs.",
            ],
            table: {
              caption: "The four ISO/IEC 15288 / INCOSE handbook process groups.",
              headers: ["Process group", "Concern", "Representative processes"],
              rows: [
                ["Agreement", "Customer-supplier contracts", "Acquisition; supply"],
                ["Organisational project-enabling", "Capability of the enterprise", "Life cycle model management; quality; knowledge management"],
                ["Technical management", "Running the technical effort", "Project planning and control; risk; configuration; interface management; measurement"],
                ["Technical", "Engineering the system", "Stakeholder needs; requirements; architecture; design; implementation; integration; verification; transition; validation; operation; maintenance; disposal"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where systems engineering sits in a program",
              caption:
                "SE is the translation layer: it turns stakeholder intent into discipline engineering work and rolls results back up.",
              layers: [
                { label: "Stakeholder needs and mission", note: "why the system exists" },
                { label: "Systems engineering", note: "requirements, architecture, integration, verification" },
                { label: "Specialty engineering", note: "reliability, safety, human factors, thermal, mass properties" },
                { label: "Discipline engineering", note: "mechanical, electrical, software, manufacturing" },
                { label: "Realisation", note: "fabrication, assembly, integration, test" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sixteen names, four verbs",
              body: "The handbook's technical-process list sounds daunting but collapses into define (needs, requirements, architecture, design), realise (implement, integrate), prove (verify, transition, validate) and sustain (operate, maintain, dispose). Memorise the four verbs and expand on demand in the exam.",
            },
            keyTerms: [
              { term: "Systems engineering", definition: "Interdisciplinary approach and processes to engineer successful systems across the whole life cycle." },
              { term: "INCOSE", definition: "International Council on Systems Engineering; publishes the SE handbook aligned with ISO/IEC 15288." },
              { term: "Interdisciplinary", definition: "Involving multiple engineering domains coordinated through shared requirements, interfaces and budgets." },
            ],
            examQuestions: [
              {
                q: "Define systems engineering. How does it differ from traditional discipline engineering, and what process groups does the INCOSE handbook recognise?",
                marks: 7,
                outline: [
                  "Define SE: interdisciplinary approach enabling realisation of successful systems, needs defined early.",
                  "Explain the complete-problem scope: operations, cost, schedule, performance, support, test, manufacture, disposal.",
                  "Contrast with discipline engineering: breadth and integration ownership versus component depth.",
                  "State the four process families: agreement, organisational project-enabling, technical management, technical.",
                  "Enumerate representative processes of each family, especially the technical set.",
                  "Give the aerospace origin and one industry consequence of weak SE (requirements defects found late).",
                  "Conclude: SE is connective tissue - it owns interfaces, budgets and verification across disciplines.",
                ],
              },
              {
                q: "What is INCOSE and what does it publish?",
                marks: 2,
              },
              {
                q: "Name any six technical processes of the INCOSE handbook in lifecycle order.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "System life cycles and the V-model",
            body: [
              "A life cycle is the span of a system from the first idea to final disposal, and lifecycle thinking insists that every decision be judged by its consequences across that whole span. The canonical stages are concept, development, production, utilisation, support and retirement. Two facts give lifecycle thinking its force. First, early decisions are the most valuable: by the end of concept and definition a program has spent only a small fraction of its money but has committed the large majority of its life cycle cost. Second, the cost of correcting an error multiplies roughly an order of magnitude at each stage it survives, which is why the V-model exists - to catch defects at the level where they were made.",
              "The V-model arranges decomposition and definition down the left leg and integration and verification up the right. From the top-left: stakeholder needs are captured and validated with users; system requirements are derived and baselined; the architecture decomposes the system and allocates requirements to subsystems; detailed design bottoms out at the vertex, where components are fabricated or coded. The right leg then climbs: unit-level verification, subsystem integration and verification, system verification against system requirements, and finally validation against the stakeholder needs at the top. The model's signature feature is the horizontal pairing: every definition level on the left has a matching verification level on the right, and the plan for that verification is written when the definition is written.",
              "The pairing is what makes the V a discipline rather than a picture: system requirements come with system test plans, subsystem specifications come with rig tests, and component drawings come with acceptance criteria. The model's strengths are traceability, gate structure and clear verification ownership, which is why it dominates safety-critical and regulated domains - aerospace, defence and automotive development processes are all V-shaped - and any program with long-lead hardware. Its weakness is rigidity: it assumes requirements can be frozen early, so it handles volatile needs poorly, and section 1.4's spiral and incremental models answer that gap. A transmission program shows the strengths concretely: gear design at the vertex, rig tests climbing to vehicle-level shift-quality validation.",
            ],
            bullets: [
              "Life cycle stages: concept, development, production, utilisation, support and retirement - judge decisions across all of them.",
              "Left leg: stakeholder needs -> system requirements -> architecture and allocation -> detailed design (decomposition).",
              "Right leg: unit verification -> subsystem verification -> system verification -> validation (integration).",
              "Horizontal pairing: each definition level plans its matching verification level at the moment it is written.",
              "Strengths: traceability and gates; weakness: poor tolerance of changing requirements - hence spiral and incremental variants.",
            ],
            codeExample: {
              language: "text",
              caption: "The V-model's definition-verification pairings - memorise this ladder.",
              code: `LEFT LEG (definition)          RIGHT LEG (verification)

Stakeholder needs              Validation (user accepts)
System requirements            System verification
Subsystem requirements         Subsystem rig tests
Component design               Unit inspection and test

VERTEX: build / fabricate / code`,
            },
            diagram: {
              kind: "flow",
              title: "Walking the V",
              caption:
                "Down the left leg, build at the vertex, up the right leg - each left level pairs with a right level.",
              steps: [
                { label: "Stakeholder needs", note: "validate with users" },
                { label: "System requirements", note: "derive, baseline, plan tests" },
                { label: "Architecture and allocation", note: "subsystem specifications" },
                { label: "Detailed design", note: "vertex - build and code" },
                { label: "Integration and verification", note: "climb: unit -> subsystem -> system" },
                { label: "Validation", note: "prove the right system" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the V with both legs labelled and at least three horizontal pairings marked - the pairing arrows carry the marks. Close with one strength (traceability, gates) and one limitation (poor tolerance of change) for the full seven.",
            },
            keyTerms: [
              { term: "Life cycle", definition: "The stages through which a system passes from concept to retirement and disposal." },
              { term: "V-model", definition: "Lifecycle model pairing each definition level (left leg) with a verification level (right leg)." },
              { term: "Vertex", definition: "The bottom of the V where components are built before integration climbs the right leg." },
            ],
            examQuestions: [
              {
                q: "Explain the V-model of system development with a neat diagram. What pairings does it enforce, and where is it weak?",
                marks: 7,
                outline: [
                  "Draw the V: two legs and a vertex, labelled.",
                  "Walk the left leg: needs, system requirements, architecture and allocation, detailed design.",
                  "Walk the right leg: unit verification, subsystem verification, system verification, validation.",
                  "Explain the horizontal pairing principle and that verification plans are written with the definitions.",
                  "State the strengths: traceability, gates, verification ownership - hence safety-critical and hardware-lead domains.",
                  "State the weakness: frozen requirements assumed; poor under volatile needs.",
                  "Name the alternatives: spiral for risk-driven exploration, incremental for staged capability.",
                ],
              },
              {
                q: "Name the six canonical life cycle stages in order.",
                marks: 2,
              },
              {
                q: "Why does validation sit at the top of the V while verification climbs the right leg?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Spiral, incremental and iterative lifecycles",
            body: [
              "The classical waterfall proceeds through fixed phases - requirements, design, implementation, verification, operation - each completing before the next begins, with documents as the deliverables. Its failure mode is the late discovery of defects: nothing runs until the end, so requirement errors surface when they are most expensive to fix. The spiral model, formulated by Barry Boehm, replaces the straight line with loops. Each loop passes through four quadrants: determine objectives and constraints, identify and resolve risks, develop and verify the incremented product, and plan the next loop. A prototype anchors every loop, and risk resolution - not documentation - is the engine of progress.",
              "Incremental development delivers the system in successive builds, each adding capability and each passing through a mini lifecycle; iterative development refines the same capability in passes. Agile methods are iterative development disciplined by short cadences, born in software but increasingly hybridised into systems with long-lead hardware. Model selection is an engineering decision with explicit criteria: stability of requirements, maturity of technology, hardness of integration risk, regulatory burden and production volume. Stable, safety-critical, hardware-heavy programs favour the V; exploratory, software-centric, fast-moving ones favour loops; most real vehicle programs mix - a V backbone with spiral prototyping for new technology and agile software teams working within it.",
              "Consider an electric-vehicle program. The overall vehicle keeps a V: certification, tooling and supplier contracts demand gates and baselines. The new battery chemistry runs spiral loops: cell samples are tested at each turn and risk retired before the chemistry freezes. Infotainment software ships in incremental releases updated over the air after launch. The systems engineer's job is to choose and defend this tailoring, because each model prices differently: the V buys predictability with rigidity, the spiral buys learning with management overhead, and increments buy early value at the price of architectural discipline. Examiners want the models compared on exactly these axes - driver, deliverable cadence, risk handling and suitable domains.",
            ],
            bullets: [
              "Waterfall: sequential phases, document-driven; defects surface late and cost most to fix.",
              "Spiral (Boehm): loops of objectives -> risk resolution -> develop and verify -> plan next; a prototype every loop; risk-driven.",
              "Incremental: successive builds each adding capability; iterative: repeated refinement of one capability.",
              "Selection criteria: requirements stability, technology maturity, integration risk, regulation, production volume.",
              "Real programs tailor: V backbone + spiral prototypes for new technology + agile software increments.",
            ],
            table: {
              caption: "Choosing a lifecycle model.",
              headers: ["Model", "Driving force", "Best when", "Principal risk"],
              rows: [
                ["Waterfall", "Sequence and documents", "Stable, well-understood scope", "Late defect discovery"],
                ["V-model", "Definition-verification pairing", "Safety-critical, regulated programs", "Rigid under changing needs"],
                ["Spiral", "Risk resolution each loop", "New technology, high uncertainty", "Management overhead; needs risk skill"],
                ["Incremental", "Early delivery of value", "Fieldable partial capability", "Architecture erosion if unplanned"],
                ["Agile / hybrid", "Fast feedback cadence", "Software-rich systems", "Weak gates for hardware long leads"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Plan-driven V versus risk-driven spiral",
              caption:
                "Same engineering content - the difference is what drives each pass through it.",
              left: {
                heading: "V / waterfall (plan-driven)",
                items: [
                  "Requirements frozen early",
                  "Documents are the deliverable",
                  "Verification waits for the end",
                  "Suits stable, safety-critical, hardware-heavy scope",
                  "Buys predictability, loses flexibility",
                ],
              },
              right: {
                heading: "Spiral / incremental (risk-driven)",
                items: [
                  "Risk anchors every loop",
                  "Prototype each cycle",
                  "User feedback every turn",
                  "Suits evolving technology and software-heavy scope",
                  "Buys learning, costs management overhead",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The spiral is not repeated waterfall",
              body: "Never describe the spiral as loops of waterfall - the anchor is risk analysis in every quadrant. Examiners specifically look for the four quadrants: objectives, risk resolution, development and verification, planning of the next loop.",
            },
            keyTerms: [
              { term: "Spiral model", definition: "Risk-driven lifecycle of repeated loops: objectives, risk resolution, development and verification, planning." },
              { term: "Incremental development", definition: "Delivery of capability in successive builds, each a mini lifecycle." },
              { term: "Prototype", definition: "A trial artefact built to retire risk or elicit feedback, not to ship." },
            ],
            examQuestions: [
              {
                q: "Compare waterfall, V, spiral and incremental lifecycle models. What drives each, and when would you select each?",
                marks: 7,
                outline: [
                  "Present waterfall: sequential phases, documents, late defect discovery.",
                  "Present the V-model: definition-verification pairing, gates and baselines.",
                  "Present the spiral: four quadrants per loop, risk as the driver, prototype every cycle.",
                  "Present incremental and iterative: builds of capability, refinement passes, agile as disciplined iteration.",
                  "Compare on driver, deliverable cadence and risk handling - use a comparison table.",
                  "State the selection criteria: requirements stability, technology maturity, regulation, production volume.",
                  "Illustrate tailoring with an EV program: V backbone, spiral battery chemistry, agile infotainment.",
                ],
              },
              {
                q: "What are the four quadrants of a spiral loop?",
                marks: 2,
              },
              {
                q: "Distinguish incremental and iterative development with one example of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Systems thinking: emergence, complexity and systems of systems",
            body: [
              "Reductionism explains a thing by dismantling it into parts; holism insists that some truths live only at the level of the whole. Systems engineering is applied holism, and its central concept is emergence: properties that the system exhibits but no element possesses. Ride quality, vehicle NVH, aircraft dispatch reliability and grid stability are all emergent - they arise from interactions among suspension, tyre and body, or generator and load, and can be tuned only at the system level. Weak emergence is predictable from the parts in principle; strong emergence resists prediction entirely, which is why integration testing exists: you verify emergent behaviour because you cannot fully derive it from any drawing.",
              "Complexity makes emergence the norm rather than the surprise. Structural complexity counts elements and relationships; dynamic complexity adds feedback, delays and non-linearity; socio-technical complexity adds people and organisations. A system of systems, in Mark Maier's canonical criteria, is an assemblage of components that are individually useful systems, possess operational and managerial independence, evolve over time, exhibit emergent behaviour and are often geographically distributed. A single car is a system; the fleet plus charging infrastructure plus grid plus traffic management within which it operates is a system of systems - owned by different parties, run on different budgets, yet coupled through standards into collective behaviour nobody commands.",
              "Systems thinking is the working habit of seeing wholes: mapping interconnections before optimising any part, expecting feedback loops - reinforcing loops amplify, as in the weight spiral where heavier structure needs bigger motors and yet heavier structure; balancing loops regulate, as a thermostat does - respecting delays that separate cause from visible effect, and hunting unintended consequences. For mechanical products the coupling is physical: thermal growth strains mounts, torsional vibration crosses couplings, tolerance stacks cross drawings. The tools of this course - requirements, architecture, interfaces, budgets - are the engineering answer to complexity: they externalise relationships so they can be reviewed, traded and verified rather than discovered at integration.",
            ],
            bullets: [
              "Reductionism versus holism: parts versus whole; systems engineering is applied holism.",
              "Emergence: whole-system properties (ride, NVH, availability) born of interactions, tunable only at system level.",
              "Complexity kinds: structural (elements and links), dynamic (feedback, delay, non-linearity), socio-technical (people, organisations).",
              "SoS criteria (Maier): operational and managerial independence, evolution, emergence, geographic distribution.",
              "Feedback loops: reinforcing (weight spiral) amplify; balancing (thermostat) regulate; delays hide causes from effects.",
            ],
            table: {
              caption: "Systems thinking vocabulary at a glance.",
              headers: ["Concept", "Meaning", "Mechanical example"],
              rows: [
                ["Holism", "Truths of the whole absent from parts", "Vehicle ride quality"],
                ["Emergent behaviour", "System-level behaviour from interactions", "Understeer balance of chassis tuning"],
                ["Reinforcing loop", "Feedback that amplifies change", "Weight spiral in vehicle design"],
                ["Balancing loop", "Feedback that resists change", "Thermostat-regulated cooling"],
                ["System of systems", "Independent systems collaborating", "EV fleet + charging network + grid"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Situating systems by size and coupling",
              caption:
                "Coupling and element count together predict which engineering problems dominate.",
              axes: { x: "coupling: loose -> tight", y: "elements: few -> many" },
              quadrants: [
                { label: "System of systems", note: "many elements, loose coupling - fleet, grid, governed by standards" },
                { label: "Complex system", note: "many elements, tight coupling - aircraft, automobile; emergent behaviour" },
                { label: "Simple assembly", note: "few elements, loose coupling - hand analysis suffices" },
                { label: "Complicated machine", note: "few elements, tight coupling - gearbox, engine; deterministic and analyzable" },
              ],
            },
            callout: {
              type: "tip",
              title: "Naming an emergent property",
              body: "When asked for an emergent property, give one that belongs to no part - ride quality, dispatch reliability - and say in one sentence why it must be engineered at system level. That sentence is the difference between 3 marks and 7.",
            },
            keyTerms: [
              { term: "Emergence", definition: "Properties of a system that arise from interactions and exist in no single element." },
              { term: "System of systems", definition: "An assemblage of independently useful, independently managed systems exhibiting collective emergent behaviour." },
              { term: "Feedback loop", definition: "A causal path whose output returns to its input; reinforcing loops amplify, balancing loops regulate." },
            ],
            examQuestions: [
              {
                q: "Explain emergence, complexity and system-of-systems. Why do emergent properties demand systems engineering rather than component engineering alone?",
                marks: 7,
                outline: [
                  "Contrast reductionism and holism in two lines.",
                  "Define emergence; distinguish weak and strong emergence.",
                  "Give two mechanical emergent examples (ride quality, NVH) and why no part owns them.",
                  "Present the complexity kinds: structural, dynamic, socio-technical.",
                  "List Maier's five system-of-systems criteria with the EV fleet and grid example.",
                  "Argue: emergent behaviour must be engineered through requirements, interfaces, budgets and integration tests.",
                  "Conclude with feedback loops and the weight spiral as a systems-thinking caution.",
                ],
              },
              {
                q: "Define a system of systems and give one example.",
                marks: 2,
              },
              {
                q: "Give two examples of emergent properties in an automobile and explain why neither belongs to any component.",
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
      title: "Requirements and Architecture",
      summary:
        "From intent to obligation: elicitation from every stakeholder, well-formed functional and non-functional requirements, traceability matrices that chain needs to verification, functional and physical architecture views, and interfaces bound by ICDs and mapped on N2 diagrams.",
      chapter: {
        number: "02",
        title: "From Needs to Architecture",
        intro:
          "Unit II turns intent into obligation: eliciting needs from every stakeholder with a technique kit, writing well-formed functional and non-functional requirements, chaining them through traceability matrices, shaping them into functional and physical architectures, and binding every shared boundary with an interface control document mapped on an N2 diagram.",
        inOneBreath:
          "Elicitation is a loop of identifying stakeholders, capturing needs through interviews, workshops, observation, prototypes, use cases and QFD, and baselining the result; well-formed requirements are singular, unambiguous, verifiable shall-statements split into functional (what it does) and non-functional (how well) families; traceability chains every need through requirements, design and verification in a matrix; architecture keeps a functional view (functions and flows) mapped onto a physical view (components and interfaces) judged by modularity, coupling and cohesion; and every interface is a controlled contract in an ICD, mapped system-wide on an N2 diagram.",
        sections: [
          {
            number: "2.1",
            title: "Requirements elicitation and stakeholder analysis",
            body: [
              "A requirement is a statement that translates a stakeholder need into an obligation the system must satisfy, and elicitation is the disciplined act of surfacing those needs. The first commandment is stakeholder analysis: every party with a stake - buyers, operators, maintainers, regulators, manufacturers, insurers, even the public - holds needs the system must respect, and each carries different authority over the program. The product of early elicitation is a concept of operations (ConOps): a narrative of how the system will be used, by whom, in what environment, across its life, from normal operation to maintenance and disposal. Requirements extracted without a ConOps inherit its blind spots.",
              "Elicitation techniques are chosen like tools on a bench. Interviews probe individual stakeholders deeply; workshops force conflicting parties to negotiate face to face; questionnaires scale across large populations; direct observation of users working with the current system exposes the needs they cannot articulate; prototypes and mock-ups elicit reactions that questions cannot; use cases and scenarios organise needs into sequences of interaction; and quality function deployment (QFD), the house of quality, maps the voice of the customer onto engineering characteristics and competitive targets. Each technique has a bias - interviews sample one person, workshops amplify dominant voices - so triangulating two or three techniques is the professional norm.",
              "Consider a delivery-van program. The operator needs range and cargo volume; the driver needs ergonomics and visibility; the fleet manager needs serviceability and uptime; the regulator needs crash and emissions compliance; the manufacturer needs feasible cost and reuse of the existing platform. These needs conflict - bigger battery against payload - and elicitation makes the conflict explicit so it can be negotiated, ranked and documented rather than discovered at launch. Elicitation is therefore not a phase but a loop: every review, prototype and validation event sends the team back to the stakeholders, which is why the elicitation cycle closes with baseline-and-manage rather than with finish.",
            ],
            bullets: [
              "Stakeholder analysis first: buyers, users, operators, maintainers, regulators, manufacturers - each with needs and different authority.",
              "ConOps: the operating narrative (who, what, where, when) from which requirements are extracted.",
              "Technique kit: interviews, workshops, questionnaires, observation, prototypes, use cases, QFD house of quality.",
              "Triangulate techniques - each has a bias; professionals cross-check with at least two sources.",
              "Elicitation is a loop, not a phase: reviews, prototypes and validation events reopen it throughout the program.",
            ],
            table: {
              caption: "Elicitation techniques and their biases.",
              headers: ["Technique", "Best for", "Typical bias or cost"],
              rows: [
                ["Interview", "Depth from key experts", "Sample of one; schedule-bound"],
                ["Workshop", "Cross-party negotiation", "Dominant voices; needs a strong facilitator"],
                ["Questionnaire", "Broad populations", "Shallow answers; low return rates"],
                ["Observation", "Tacit, unarticulated needs", "Time on site; subjects alter behaviour"],
                ["Prototype", "Reaction to the new", "Cost of mock-ups; anchors expectations"],
                ["QFD", "Mapping needs to engineering targets", "Matrix bulk can hide simple needs"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The requirements elicitation loop",
              caption:
                "Each turn ends in a managed baseline - never in a finished list.",
              steps: [
                { label: "Identify stakeholders", note: "all parties with a stake" },
                { label: "Elicit needs", note: "interviews, workshops, observation" },
                { label: "Analyse and resolve conflicts", note: "negotiate, rank, prioritise" },
                { label: "Validate understanding", note: "ConOps, prototypes, use cases" },
                { label: "Baseline and manage", note: "changes only via change control" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "A 7-mark elicitation answer needs the loop drawn, at least four techniques compared with their biases, and one worked conflict - battery versus payload - resolved and ranked. A list of technique names alone is a 2-mark answer.",
            },
            keyTerms: [
              { term: "Stakeholder", definition: "Any individual or organisation with a need, expectation or constraint bearing on the system." },
              { term: "ConOps", definition: "Concept of operations: a narrative of how the system will be operated through its life." },
              { term: "QFD", definition: "Quality function deployment; the house of quality linking the customer's voice to engineering characteristics." },
            ],
            examQuestions: [
              {
                q: "What is requirements elicitation? Explain stakeholder analysis, the ConOps, and any four elicitation techniques with their merits and limits.",
                marks: 7,
                outline: [
                  "Define requirement and elicitation: translating stakeholder needs into system obligations.",
                  "Present the stakeholder classes with one need each (van example).",
                  "Explain the ConOps and why requirements written without it inherit blind spots.",
                  "Describe four techniques - interview, workshop, observation, prototype (or QFD) - with strengths and biases.",
                  "Show one conflict (battery versus payload) made explicit and negotiated by ranking.",
                  "Draw the elicitation loop ending in baseline-and-manage under change control.",
                  "Conclude: elicitation is iterative through the whole program.",
                ],
              },
              {
                q: "What is a ConOps and why is it written before the requirements?",
                marks: 2,
              },
              {
                q: "List any six stakeholders of a delivery van and one need of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Functional and non-functional requirements",
            body: [
              "A well-formed requirement is singular, unambiguous, verifiable, feasible, necessary and traceable, and it is almost always a shall-statement: under stated conditions, the system shall perform a specified action to a measurable threshold. Functional requirements state what the system shall do - the transformations of energy, material and information it performs. 'The braking system shall decelerate the vehicle' is functional. Non-functional requirements state how well it shall do it and under what constraints - performance, mass, reliability, safety, emissions, cost, maintainability, usability: 'from 100 km/h to zero in not more than 36.5 metres, laden, on dry level pavement' is non-functional.",
              "Non-functional requirements deserve careful classification because each family is verified differently. Performance requirements - power, range, efficiency - verify by test. Physical constraints - mass, envelope, centre of mass - verify by inspection and weighing. Environmental requirements - temperature, vibration, ingress protection - verify by environmental qualification. Reliability and maintainability requirements - MTBF, MTTR, B10 life - verify by analysis and demonstration. Safety and regulatory requirements - crash standards, emissions limits - verify by prescribed homologation tests. Logistical requirements - spares provisioning, tooling - verify by demonstration, and human-factors requirements by user trials. The classification is not academic: the verification method chosen, and therefore its cost, follows directly from the family.",
              "The most common failure in both exams and industry is the unverifiable requirement: 'the system shall be user-friendly', 'robust', 'flexible', 'adequate'. No instrument measures friendliness, so no test can close it, so it festers until launch. The cure is quantification anchored in a threshold and stated conditions: replace easy-to-service with 'the brake pads shall be replaceable by one technician with standard tools in not more than 30 minutes'. Every requirement should carry an identifier, a rationale and a verification method hint; it should avoid compound sentences (one requirement, one obligation) and open words like should, may, including but not limited to. Writing requirements this way is a mechanical, learnable discipline - and a heavily marked one.",
            ],
            bullets: [
              "Anatomy: conditions + system + shall + action + object + measurable threshold; one requirement, one obligation.",
              "Functional requirements: what the system does - transformations of energy, material, information.",
              "Non-functional families: performance, physical, environmental, reliability/maintainability, safety/regulatory, logistical, human factors.",
              "Each family maps to a verification method - and therefore to a verification cost.",
              "Ban unverifiable words: user-friendly, robust, flexible, adequate - quantify or delete.",
            ],
            codeExample: {
              language: "text",
              caption: "Rewriting unverifiable requirements into well-formed, testable ones.",
              code: `WEAK                       WELL-FORMED

"The car shall be fast."   The vehicle shall accelerate
                           from 0 to 100 km/h in <= 10.0 s
                           at kerb mass + 200 kg, level dry
                           road, 2 occupants.

"Easy to service."         One technician with standard
                           tools shall replace both front
                           brake pads in <= 30 min.

"Robust electronics."      The ECU shall operate over
                           -40 C to +85 C and 10 Grms
                           random vibration.`,
            },
            diagram: {
              kind: "compare",
              title: "Functional versus non-functional requirements",
              caption:
                "What it does versus how well and under what constraints - both are needed for closed verification.",
              left: {
                heading: "Functional - what it does",
                items: [
                  "Transformations of energy, material, information",
                  "Verb + object: decelerate the vehicle, pump coolant",
                  "Verified mostly by demonstration or test",
                  "Example: the braking system shall decelerate the car",
                  "Missing one = a capability gap",
                ],
              },
              right: {
                heading: "Non-functional - how well",
                items: [
                  "Qualities and constraints with thresholds",
                  "Numbers and conditions: <= 36.5 m, MTBF >= 2000 h",
                  "Verified by analysis, inspection, qualification",
                  "Example: kerb mass <= 1480 kg, drag Cd <= 0.29",
                  "Missing one = an unusable capability",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "The unverifiable-word trap",
              body: "Examiners hand out rewrite-the-requirement questions. Rule of thumb: if you cannot imagine the pass/fail test, it is not a requirement. Practise converting five weak statements into condition + shall + threshold form before the exam.",
            },
            keyTerms: [
              { term: "Functional requirement", definition: "A statement of a transformation the system shall perform on energy, material or information." },
              { term: "Non-functional requirement", definition: "A constraint or quality threshold on how well the system performs its functions." },
              { term: "Verifiability", definition: "The property that a requirement has an observable, measurable pass/fail condition." },
            ],
            examQuestions: [
              {
                q: "What makes a requirement well-formed? Classify functional and non-functional requirements with examples, and rewrite two poorly stated requirements.",
                marks: 7,
                outline: [
                  "List the attributes: singular, unambiguous, verifiable, feasible, necessary, traceable.",
                  "Give the shall-statement anatomy: conditions + actor + action + object + threshold.",
                  "Define functional requirements with two mechanical examples.",
                  "Classify non-functional families with one example each.",
                  "Link each family to its verification method and cost.",
                  "Rewrite 'the car shall be fast' and 'easy to service' with thresholds and conditions.",
                  "Conclude: identification, rationale and verification hint ride with every requirement.",
                ],
              },
              {
                q: "Give one functional and one non-functional requirement for an engine cooling water pump.",
                marks: 2,
              },
              {
                q: "Why must every requirement be verifiable? What should be done with one that is not?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Requirements traceability and the traceability matrix",
            body: [
              "Traceability is the documented linkage that lets you follow any requirement in both directions: upward to the stakeholder need that justifies it, and downward to the design element that implements it and the verification event that proves it. Its value is operational. Coverage analysis asks whether every need has at least one requirement - orphan needs mean missed capability, and orphan requirements with no parent mean gold-plating nobody asked for. Impact analysis asks what breaks when a requirement changes, and the answer must be a query against the record, not an archaeology dig through emails. Certification evidence for regulated industries is, in large part, a traceability argument.",
              "The instrument is the requirements traceability matrix (RTM): rows for requirements, columns for the parent need, the allocated element, the verification method and the verification event - a many-to-many map, because one requirement may be satisfied by several components and one component may serve several requirements. Vertical traceability follows the hierarchy from need to system requirement to subsystem requirement to component requirement; horizontal traceability follows peer links such as requirement to interface, requirement to risk, and requirement to test case. Building the RTM starts at elicitation and is maintained at every baseline; tools like DOORS manage the graph when spreadsheets collapse under change.",
              "Allocation is traceability's engine. As the architecture decomposes, each parent requirement is apportioned to children with explicit budgets whose numbers multiply back to the parent. A worked chain: the need 'range at least 400 km real-world' becomes the system requirement 'usable energy at least 62 kWh at 155 Wh per km', which becomes the subsystem requirement 'pack energy at least 65 kWh including reserve', which becomes the component requirement 'cell capacity 75 Ah, 96 cells in series', verified by event VER-014, a range test at gross vehicle weight. When the regulator tightens the range measurement procedure, the matrix shows exactly which cells, packs and tests move - traceability earning its keep precisely when change arrives.",
            ],
            bullets: [
              "Traceability: bidirectional linkage - need -> requirement -> design -> verification - documented, not remembered.",
              "Coverage: every need has a requirement; every requirement has a parent and a verification - no orphans.",
              "RTM: requirements against parent, allocation, method and event; many-to-many by nature.",
              "Vertical versus horizontal: hierarchy links against peer links (interfaces, risks, test cases).",
              "Allocation carries budgets: parent numbers apportioned so children multiply back to the parent.",
            ],
            table: {
              caption: "A miniature requirements traceability matrix - gaps in any column are review findings.",
              headers: ["ID", "Requirement (abbrev.)", "Parent need", "Allocated to", "Method", "Event"],
              rows: [
                ["SYS-014", "Range >= 400 km (test cycle)", "N-02 Range", "Vehicle system", "Test", "VER-014"],
                ["SUB-071", "Pack energy >= 65 kWh", "SYS-014", "Battery pack", "Test", "VER-031"],
                ["SUB-072", "Drag area Cd.A <= 0.62", "SYS-014", "Body aero", "Analysis", "VER-018"],
                ["CMP-203", "Cell capacity 75 Ah +/- 2%", "SUB-071", "Li-ion cell", "Inspection", "VER-055"],
                ["CMP-204", "Pack mass <= 380 kg", "SYS-002 Mass", "Battery pack", "Inspection", "VER-056"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One traceability chain, end to end",
              caption:
                "Follow any row of the matrix in both directions - this chain is the exam answer.",
              steps: [
                { label: "Stakeholder need", note: "range >= 400 km real-world" },
                { label: "System requirement", note: "usable energy >= 62 kWh at 155 Wh/km" },
                { label: "Subsystem requirement", note: "pack energy 65 kWh incl. reserve" },
                { label: "Component requirement", note: "cell 75 Ah, 96 in series" },
                { label: "Design artefact", note: "thermal and structural design" },
                { label: "Verification", note: "VER-014 range test at GVW" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The traceability-matrix question wants: definition, a sketch with the five column families, and three uses - coverage, impact analysis, certification evidence. One worked chain (the EV range example) converts a 4-mark answer into a 7-mark one.",
            },
            keyTerms: [
              { term: "Traceability", definition: "Documented bidirectional linkage among needs, requirements, design and verification." },
              { term: "Traceability matrix", definition: "Table mapping each requirement to its parent need, allocation and verification evidence." },
              { term: "Allocation", definition: "Apportioning a parent requirement or budget to child elements with numbers that close back to the parent." },
            ],
            examQuestions: [
              {
                q: "Define requirements traceability. Construct and explain a traceability matrix for a small system and state its uses.",
                marks: 7,
                outline: [
                  "Define traceability: bidirectional documented linkage need -> requirement -> design -> verification.",
                  "Explain coverage: orphan needs and orphan requirements as review findings.",
                  "Present the RTM structure: rows requirements; columns parent, allocation, method, event.",
                  "Work one chain: EV range need through energy requirement, cell spec, to VER-014.",
                  "Distinguish vertical and horizontal traceability.",
                  "State the uses: coverage, impact analysis of change, certification evidence.",
                  "Note tooling (DOORS) and maintenance at every baseline.",
                ],
              },
              {
                q: "Distinguish vertical and horizontal traceability.",
                marks: 2,
              },
              {
                q: "What is an orphan requirement and why is it a finding at review?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "System architecture: functional and physical views",
            body: [
              "Architecture is the fundamental organisation of a system, embodied in its elements, their relationships and the principles governing its design and evolution. Systems engineering keeps two coupled views. The functional architecture describes what the system must do, independent of any solution: functions decomposed into sub-functions, connected by flows of energy, material and information, usually drawn as functional flow block diagrams. The physical architecture describes the solution: the components that will exist, their interfaces and their arrangement into subsystems. Synthesis, the subject of Unit III, is the act of mapping the functional architecture onto candidate physical architectures - one function may be split across many components, and one component may serve many functions.",
              "Architecting is driven by evaluation criteria that never appear on a single drawing: modularity (how cleanly can a subsystem be replaced?), coupling and cohesion (few well-defined dependencies between components, strong unity of purpose within them), upgradeability, testability, commonality and manufacturability. Views tame the complexity for different readers: an operational view shows users and missions, a functional view shows flows, a physical view shows hardware, and each view is a viewpoint serving different stakeholders. Model-based systems engineering (MBSE) moves these views from separate documents into one governed system model - SysML being the standard language - so the views stay consistent because they are projections of a single source of truth.",
              "A modern automobile illustrates every principle. Functions cluster into domains - propulsion, chassis, body, thermal and connectivity - and the physical architecture increasingly mirrors them as domain controllers on central computing platforms, replacing dozens of standalone ECUs. Interfaces between domains are deliberately standardised (CAN, LIN, automotive Ethernet) so teams develop in parallel and suppliers can be swapped. Zonal architectures group hardware by physical location to slash wiring mass. Every architectural decision is a trade: centralisation removes controllers but concentrates failure modes; zoning saves harness mass but blurs functional ownership. The architect's deliverable is therefore not a picture but a defended set of such decisions, each traced to a requirement.",
            ],
            bullets: [
              "Architecture: elements + relationships + design principles - the system's fundamental organisation.",
              "Functional view: what it does (FFBDs, energy/material/information flows); physical view: the solution (components, interfaces).",
              "Quality criteria: modularity, low coupling, high cohesion, upgradeability, testability, commonality.",
              "MBSE / SysML: one governed model, many consistent views - replaces document drift.",
              "Automotive trend: domain and zonal controllers; every architectural decision is a trade.",
            ],
            table: {
              caption: "Two views of one system.",
              headers: ["Aspect", "Functional architecture", "Physical architecture"],
              rows: [
                ["Answers", "What must the system do?", "What components will exist?"],
                ["Building block", "Functions and flows", "Components and interfaces"],
                ["Typical drawing", "Functional flow block diagram", "System block diagram / layout"],
                ["Solution-free", "Yes - survives technology change", "No - commits to a solution"],
                ["Verified by", "Functional and timeline analysis", "Design reviews, integration tests"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The physical hierarchy of a vehicle system",
              caption:
                "Requirements cascade down this pyramid; verification evidence climbs back up.",
              tiers: [
                { label: "Vehicle system", note: "mission and system requirements" },
                { label: "Subsystems", note: "powertrain, chassis, body, thermal, electrical" },
                { label: "Assemblies", note: "engine, gearbox, suspension corners" },
                { label: "Components", note: "damper, injector, controller" },
                { label: "Parts", note: "piston, spring, housing" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw both views side by side",
              body: "Mark three function-to-component allocations between the two views - one function split across parts, one part serving several functions. Examiners look for that many-to-many mapping arrow, which is the definition of synthesis.",
            },
            keyTerms: [
              { term: "Functional architecture", definition: "The decomposition of system functions and their energy, material and information flows, solution-free." },
              { term: "Physical architecture", definition: "The arrangement of physical components and interfaces that realises the functional architecture." },
              { term: "MBSE", definition: "Model-based systems engineering: a governed system model (often SysML) as the single source of truth." },
            ],
            examQuestions: [
              {
                q: "Distinguish functional and physical architecture. Explain the qualities of a good architecture and illustrate with an automotive domain architecture.",
                marks: 7,
                outline: [
                  "Define architecture: elements, relationships, governing principles.",
                  "Present the functional view: FFBDs, flows, solution independence.",
                  "Present the physical view: components, interfaces, subsystem arrangement.",
                  "Explain the many-to-many mapping between functions and components (synthesis).",
                  "List quality criteria: modularity, coupling, cohesion, upgradeability, testability, commonality.",
                  "Illustrate with automotive domains and zonal architecture, naming the CAN/Ethernet standardisation.",
                  "Close with the centralisation trade as an example of a defended architectural decision.",
                ],
              },
              {
                q: "What is a functional flow block diagram?",
                marks: 2,
              },
              {
                q: "Name any five architectural quality criteria and state why each matters.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Interface management and interface control documents",
            body: [
              "An interface is the shared boundary across which two elements exchange energy, material, data or forces, and interface engineering is where systems succeed or embarrass themselves: industry post-mortems consistently attribute the largest share of integration failures to interfaces rather than components. Interfaces are classified by what crosses them: mechanical (bolt patterns, clearances, loads, thermal expansion), electrical (voltage levels, current, connectors, grounding), data (protocols, message sets, timing - CAN, LIN, Ethernet), fluid (fuel, coolant and refrigerant couplings with pressure and flow rates), human (controls, displays, reach, visibility) and environmental (heat rejection, vibration emission, EMC).",
              "The contract that governs an interface is the interface control document (ICD): a controlled, versioned specification of everything crossing the boundary - identifier, participating systems, each parameter with value and tolerance, connector and mounting references, and the verification method for each line. Interface ownership is assigned so that every interface has exactly one responsible engineer on each side, and interface working groups meet across the program to keep both parties' documents honest. The N-squared (N2) diagram is the system-level map: elements sit on the diagonal of a grid and each cell is an interface - empty cells are freedoms, filled cells are couplings to manage, and a row or column dense with marks identifies a dominating element worth redesigning.",
              "Consider a battery pack joining a vehicle. The ICD spans mechanical mounting (footprint, four M10 bolts, hole position tolerance band), thermal (coolant inlet 20-40 C at 12 L/min), high-voltage electrical (400 V DC connector, 250 A peak) and data (CAN 2.0A at 500 kbit/s, message 0x1A4). When the pack team revises a connector, the ICD - not an email - propagates the change, and the harness, controller software and test benches update from the same source. Mechanical interface failures obey the same discipline: tolerance stack-ups and thermal-growth mismatches discovered at final assembly are ICD defects that a dimensioned interface drawing would have caught at preliminary design review.",
            ],
            bullets: [
              "Interface: the shared boundary exchanging energy, material, data or force; the classic source of integration failures.",
              "Types: mechanical, electrical, data, fluid, human, environmental - classify every interface at architecture time.",
              "ICD: the versioned contract for one interface - parameters, tolerances, connectors, verification per line.",
              "N2 diagram: elements on the diagonal, interfaces in cells; empty cells are freedoms, dense rows mark dominant elements.",
              "Every interface has one owner per side; working groups and ICD revisions replace email archaeology.",
            ],
            codeExample: {
              language: "text",
              caption: "An ICD excerpt - every crossing parameter, tolerance and its verification.",
              code: `ICD-031 REV B   Battery pack <-> Vehicle chassis interface

ID    Type        Parameter          Value / Tolerance      Verify
M-01  Mechanical  Mounting footprint 4 x M10, posn +/- 0.15 Inspection
T-01  Thermal     Coolant inlet      20-40 C at 12 L/min     Test
E-01  Electrical  HV connector       400 V DC, 250 A max     Test
E-02  Electrical  LV supply          12 V +/- 0.5 V          Test
D-01  Data        CAN 2.0A bus       500 kbit/s, msg 0x1A4   Test
S-01  Safety      HV interlock       Open -> off in <= 10 ms Test`,
            },
            diagram: {
              kind: "matrix",
              title: "Classifying interfaces by ownership and coupling",
              caption:
                "Where an interface sits in this grid decides how much control effort it deserves.",
              axes: { x: "coupling: loose -> tight", y: "ownership: internal -> external" },
              quadrants: [
                { label: "External, loosely coupled", note: "standard charge port, public CAN spec - control via standards" },
                { label: "External, tightly coupled", note: "custom tow hitch, battery swap interface - full ICD + joint tests" },
                { label: "Internal, loosely coupled", note: "domain-bus messages inside one domain - light control" },
                { label: "Internal, tightly coupled", note: "engine-to-gearbox mounts and spline - rigid ICD, joint analysis" },
              ],
            },
            callout: {
              type: "warning",
              title: "Phone-call interfaces",
              body: "An interface change agreed verbally and never written into the ICD is a scheduled integration failure. In any exam answer about interface changes, close with: update the ICD, both sides sign, change control records it.",
            },
            keyTerms: [
              { term: "Interface", definition: "The shared boundary between two system elements across which energy, material, data or forces are exchanged." },
              { term: "ICD", definition: "Interface control document: the controlled specification of every parameter crossing one interface." },
              { term: "N2 diagram", definition: "A grid mapping all element-to-element interfaces; cells show couplings, the diagonal holds elements." },
            ],
            examQuestions: [
              {
                q: "What is interface management? Describe the contents of an ICD and explain the N-squared diagram with an example.",
                marks: 7,
                outline: [
                  "Define interface and state why interfaces dominate integration failures.",
                  "Classify interface types with one example each.",
                  "Present ICD contents using the battery pack example: mechanical, thermal, electrical, data lines with tolerances.",
                  "Assign ownership: one engineer per side; interface working groups.",
                  "Construct the N2 diagram: elements on the diagonal, interfaces in cells, direction arrows.",
                  "Read the diagram: empty cells are freedoms; dense rows mark dominating elements.",
                  "Close with change control: ICD revision propagated before hardware changes.",
                ],
              },
              {
                q: "List any six interface types with one example each.",
                marks: 2,
              },
              {
                q: "What information does a mechanical ICD line carry beyond the nominal dimension?",
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
      title: "Design and Integration",
      summary:
        "Where the system takes shape: design synthesis through morphological analysis and trade studies, the SRR/PDR/CDR review ladder and its baselines, integration strategies with drivers and stubs, the anomaly-fix loop that governs execution, and technical budgets with margins.",
      chapter: {
        number: "03",
        title: "Synthesis, Reviews and Integration",
        intro:
          "Unit III is where the system takes shape: design synthesis generates and trades candidate physical architectures, the SRR/PDR/CDR ladder converts maturity into controlled baselines, integration strategies climb the ladder rung by rung with drivers and stubs, the anomaly loop governs execution, and technical budgets with margins keep the arithmetic of growth honest.",
        inOneBreath:
          "Synthesis turns functions into candidate physical architectures via morphological analysis, screens them with Pugh matrices, scores them with weighted decisions and baselines the winner in a trade study report; SRR, PDR and CDR convert maturity into functional, allocated and product baselines through entry and exit criteria; integration climbs the ladder rung by rung - bottom-up with drivers, top-down with stubs, incrementally by risk - behind a test readiness review; anomalies are logged, root-caused, dispositioned and regression-tested; and budgets with margins - mass, power, thermal, cost - are allocated, tracked and released only with design-authority approval.",
        sections: [
          {
            number: "3.1",
            title: "Design synthesis: from functions to physical solutions",
            body: [
              "Synthesis is the creative half of systems engineering: generating physical architectures that satisfy the functional architecture. The disciplined route runs in five moves: decompose the system into functions and flows; for each function, list alternative physical solutions; combine solutions into complete candidate architectures; evaluate the candidates against criteria drawn from the requirements; and select and baseline one, documenting why. The combinatorial helper is Zwicky's morphological analysis: a matrix whose rows are functions and whose columns are candidate solutions for each function. Any path through the matrix, picking one cell per row, is a candidate architecture - five functions with three options each yield 243 candidates, far too many to build, exactly enough to structure the search.",
              "Evaluation then prunes. A screening pass using a Pugh matrix - compare each candidate against a reference datum, marking better, worse or same on each criterion - removes dominated concepts cheaply. A scoring pass using a weighted decision matrix - weight the criteria by stakeholder priority, score each surviving concept, multiply and sum - ranks the finalists. Criteria must be inherited from requirements - mass, efficiency, cost, manufacturability, risk - or the trade quietly optimises the wrong thing. Sensitivity analysis belongs in every trade study: vary the weights and see whether the winner changes. A result that flips when a weight moves ten percent is a signal the decision needs more information, not more decimal places.",
              "A worked micro-example: the function provide braking torque admits hydraulic, electromechanical and blended regenerative solutions, judged on mass, cost, energy recovery, fade resistance and safety. The morphological combine shows blended braking needs a friction fallback path - a safety criterion - and a battery-state window - an interface criterion - before it can score at all. Set-based design, Toyota's practice, keeps the two best options alive longer with deliberate decision points, trading early commitment for late flexibility; point-based design commits at the first screen. Either way the deliverables are identical: a selected architecture plus a trade study report recording the rejected alternatives and the rationale - the record that protects the decision when memories fade or auditors ask.",
            ],
            bullets: [
              "Synthesis: functions -> candidate physical solutions -> complete architectures -> evaluation -> baselined choice with rationale.",
              "Morphological analysis (Zwicky): functions as rows, solutions as columns; one pick per row = one candidate architecture.",
              "Screen with a Pugh matrix (datum comparisons), then score with a weighted decision matrix.",
              "Criteria come from requirements; sensitivity-test the weights - a flipping winner needs information, not precision.",
              "Deliverables: selected architecture + trade study report recording rejected alternatives and why.",
            ],
            table: {
              caption: "A morphological box for an electric drivetrain - each column pick builds one candidate.",
              headers: ["Function", "Option A", "Option B", "Option C"],
              rows: [
                ["Store energy", "Li-ion pack (chosen)", "Solid-state pack", "Hydrogen fuel cell"],
                ["Convert energy", "PM synchronous motor (chosen)", "Induction motor", "Switched reluctance motor"],
                ["Manage heat", "Liquid cooling (chosen)", "Air cooling", "Refrigerant loop"],
                ["Deliver torque", "Single-speed reducer (chosen)", "2-speed gearbox", "In-wheel motors"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The synthesis pipeline",
              caption:
                "Five stages from functions to a baselined architecture - the trade study report is the audit trail.",
              stages: [
                { label: "Decompose functions", note: "FFBD and flows" },
                { label: "List solution options", note: "per function" },
                { label: "Combine candidates", note: "morphological box" },
                { label: "Evaluate and trade", note: "Pugh screen, weighted score" },
                { label: "Select and baseline", note: "trade study report" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Morphological-analysis questions want the matrix drawn - functions down, options across - two candidate paths traced through it, and one candidate eliminated against a stated criterion. A narrative without the matrix earns half.",
            },
            keyTerms: [
              { term: "Synthesis", definition: "Generating and selecting physical architectures that realise the functional architecture." },
              { term: "Morphological analysis", definition: "Zwicky's matrix of functions against candidate solutions; a path through it is a candidate design." },
              { term: "Trade study", definition: "The documented comparison of alternatives against weighted criteria drawn from requirements." },
            ],
            examQuestions: [
              {
                q: "Explain design synthesis. Describe morphological analysis and a trade study method with a mechanical example.",
                marks: 7,
                outline: [
                  "Define synthesis: mapping functional architecture onto candidate physical architectures.",
                  "Present the five-stage pipeline: decompose, list options, combine, evaluate, baseline.",
                  "Draw a morphological box with four functions and three options each.",
                  "Trace two complete candidates through the box and count the combination space.",
                  "Explain Pugh screening against a datum, then weighted scoring for the finalists.",
                  "Show sensitivity analysis on weights and cite the flip signal.",
                  "Close with deliverables: selected architecture plus trade study report with rationale.",
                ],
              },
              {
                q: "What is a Pugh matrix and what is it used for?",
                marks: 2,
              },
              {
                q: "Trace one complete candidate through a four-function morphological box for an electric drivetrain.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Technical reviews: SRR, PDR and CDR",
            body: [
              "Technical reviews are scheduled gates at which the program pauses, assembles independent reviewers and stakeholders, and answers one question: is the technical state mature enough to baseline and proceed? Their value is exactly the V-model's - catching error at the level where it was made. The canonical ladder on the way to hardware is SRR, the system requirements review, which closes the definition of system requirements and establishes the functional baseline; PDR, the preliminary design review, which accepts the architecture and subsystem allocations with margins intact and establishes the allocated baseline; and CDR, the critical design review, which accepts the released detailed design - drawings, analyses, long-lead orders - as ready for manufacture and establishes the product baseline.",
              "Each review runs on entry and exit criteria. Entry criteria qualify the material: requirements complete, feasible and traceable for SRR; architecture trades closed, allocations flowed to subsystems and margins within policy for PDR; drawings released, tolerance stacks closed, DFMEA and safety analyses complete and verification plans updated for CDR. Exit criteria state the verdict in evidence: success criteria met, action items assigned with owners and dates, and the named baseline set under configuration control. Reviews without written success criteria degrade into ceremonies; the discipline is not the meeting but the criteria, and criteria must be tailored - a student project's CDR is not an aircraft program's.",
              "The failure modes are well catalogued: rubber-stamping under schedule pressure, reviewing after decisions have become irreversible, and review by the reviewed, in which teams grade their own work. The countermeasures are independent reviewers with genuine authority to fail the gate, entry-criteria checklists enforced days before the event, action items tracked to closure, and data packages distributed early enough to be read. A gearbox CDR, for instance, should show released drawings with tolerances, material and heat-treatment specifications, bolt-pattern ICDs with the clutch and mounts, lubrication flow analysis, a DFMEA with the high-risk items mitigated, and a verification matrix updated for every requirement the gearbox owns - the evidence, not the slide deck, is the review.",
            ],
            bullets: [
              "Reviews are gates with entry and exit criteria, not meetings; the criteria are the discipline.",
              "SRR -> functional baseline: requirements complete, feasible, verifiable, traceable.",
              "PDR -> allocated baseline: architecture accepted, allocations and margins sound.",
              "CDR -> product baseline: detailed design released, manufacturing-ready.",
              "Countermeasures to rubber-stamping: independent reviewers, early data packages, action tracking, tailoring.",
            ],
            table: {
              caption: "The review ladder and its baselines.",
              headers: ["Review", "Concludes", "Baseline created", "Signature exit criterion"],
              rows: [
                ["SRR", "Requirements definition", "Functional baseline", "Requirements complete, verifiable, traceable"],
                ["PDR", "Preliminary design", "Allocated baseline", "Trades closed; allocations and margins accepted"],
                ["CDR", "Detailed design", "Product baseline", "Drawings released; tolerance stacks closed"],
                ["TRR", "Test readiness", "None - authorisation to test", "Procedures approved; configuration recorded; calibrations valid"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which baseline does this gate set?",
              caption:
                "Each review converts work into a controlled baseline; skipping the gate forfeits the control.",
              start: "Major technical gate on the schedule",
              branches: [
                { label: "SRR - requirements mature", outcome: "functional baseline: system requirements under configuration control", good: true },
                { label: "PDR - architecture mature", outcome: "allocated baseline: subsystem specifications and budgets controlled", good: true },
                { label: "CDR - design released", outcome: "product baseline: drawings frozen for manufacture", good: true },
                { label: "Waive the gate to save schedule", outcome: "unbaselined work meets integration; change cost multiplies roughly tenfold per stage", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The SRR/PDR/CDR table - what each review concludes, which baseline it creates, one exit criterion each - is a repeat 7-marker. Memorise the three baselines in order: functional, allocated, product.",
            },
            keyTerms: [
              { term: "SRR", definition: "System requirements review; establishes the functional baseline." },
              { term: "PDR", definition: "Preliminary design review; establishes the allocated baseline." },
              { term: "CDR", definition: "Critical design review; establishes the product baseline." },
            ],
            examQuestions: [
              {
                q: "Explain SRR, PDR and CDR: what each concludes, which baseline each sets, and the entry/exit criteria discipline. Why are reviews sometimes ineffective?",
                marks: 7,
                outline: [
                  "State the purpose of reviews as gates: catch error at the level where it was made.",
                  "SRR: concludes requirements definition; sets the functional baseline; cite entry criteria.",
                  "PDR: concludes preliminary design; sets the allocated baseline with margins.",
                  "CDR: concludes detailed design; sets the product baseline ready for manufacture.",
                  "Explain entry and exit criteria with examples, including tailoring.",
                  "Diagnose failure modes: rubber-stamping, post-decision reviews, self-review; give countermeasures.",
                  "Illustrate with a gearbox CDR evidence list.",
                ],
              },
              {
                q: "Which baseline does the CDR establish, and what does it contain?",
                marks: 2,
              },
              {
                q: "State any three exit criteria you would demand at a gearbox CDR.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Integration strategies: bottom-up, top-down and incremental",
            body: [
              "Integration is the deliberate reversal of decomposition: elements are combined into ever larger verified aggregates until the system exists and is demonstrated. Done well, it is a ladder - component to assembly, assembly to subsystem, subsystem to system - with verification performed at every rung so that faults surface where they are cheapest to isolate. The strategy question is the order and grouping of that climb. Big-bang integration assembles everything and tests once; it looks cheapest on the schedule and is the most expensive place on earth to discover an interface error, because any of a thousand connections might be the fault and no level boundary exists to bound the search.",
              "Bottom-up integration starts with real, already-verified components and emulates the not-yet-built upper levels with drivers - test rigs and harnesses that call the lower element exactly as its parent would. Faults are isolated at the lowest level, hardware learning arrives early, but system-level threads and interfaces wait their turn. Top-down integration starts with the system skeleton and emulates missing lower levels with stubs, so user-visible threads and interface definitions are proven first; it suits software-heavy systems and interface risk, but real hardware learning arrives late. Incremental and sandwich strategies mix the two - integrating high-risk interfaces early and climbing from the middle - and parallel lanes integrate independent subsystems concurrently on separate benches to compress the schedule.",
              "Strategy selection is driven by risk, not preference: integrate first whatever is newest, least understood or most interdependent; buy schedule with benches and simulators; and sequence the plan so long-lead test articles arrive into ready facilities. An engine program integrates parts into sub-assemblies, sub-assemblies into a motored core, the core onto the dynamometer for mapping and durability, and the dressed engine into the vehicle - each rung with defined interconnect checks and pass criteria. The integration plan inherits its content directly from the architecture, the ICDs and the verification matrix: what to mate, in what order, checked against what, at which facility.",
            ],
            bullets: [
              "Integration: verified assembly rung by rung - the reverse of decomposition; test at every rung.",
              "Big-bang: one assembly, one test - cheapest-looking, worst fault isolation.",
              "Bottom-up: real components first; drivers emulate the parents; faults isolated low; hardware learning early.",
              "Top-down: skeleton first; stubs emulate the children; interfaces and threads proven early - suits software-heavy risk.",
              "Selection is risk-driven: newest, most coupled interfaces first; benches and parallel lanes buy schedule.",
            ],
            table: {
              caption: "Choosing an integration strategy.",
              headers: ["Strategy", "Order", "Emulation needed", "Strength", "Watch out"],
              rows: [
                ["Big-bang", "Everything, then test", "None", "Minimum bench overhead", "Hopeless fault isolation"],
                ["Bottom-up", "Components upward", "Drivers for parents", "Early hardware learning", "Interfaces proven late"],
                ["Top-down", "System downward", "Stubs for children", "Early thread and interface proof", "Hardware arrives late"],
                ["Incremental", "Risk-ordered builds", "Mixed drivers and stubs", "Early value, parallel lanes", "Needs architecture discipline"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Bottom-up versus top-down integration",
              caption:
                "Both converge on the same verified system; they buy different kinds of early knowledge.",
              left: {
                heading: "Bottom-up",
                items: [
                  "Starts from verified real components",
                  "Drivers and rigs emulate the missing upper level",
                  "Fault isolation easiest at low rungs",
                  "Suits hardware-first programs (engine build)",
                  "System threads and interfaces proven late",
                ],
              },
              right: {
                heading: "Top-down",
                items: [
                  "Starts from the system skeleton",
                  "Stubs emulate the missing lower level",
                  "Interfaces and user threads proven first",
                  "Suits software-heavy, interface-risk programs",
                  "Real hardware learning arrives late",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Stubs and drivers are not interchangeable",
              body: "The classic slip is saying bottom-up needs stubs. Stubs stand in for missing lower levels (top-down); drivers stand in for missing upper levels (bottom-up). Swap them in the exam and the 2-mark question is gone.",
            },
            keyTerms: [
              { term: "Integration", definition: "The verified combination of system elements into progressively larger aggregates." },
              { term: "Driver", definition: "A test harness emulating a missing parent element that calls a lower element during bottom-up integration." },
              { term: "Stub", definition: "A simplified stand-in for a missing lower element used during top-down integration." },
            ],
            examQuestions: [
              {
                q: "Explain integration in the system life cycle. Compare big-bang, bottom-up, top-down and incremental strategies, defining stubs and drivers.",
                marks: 7,
                outline: [
                  "Define integration as the reverse of decomposition: rung-by-rung verified assembly.",
                  "Present big-bang and its fault-isolation cost.",
                  "Present bottom-up with drivers: strengths and weaknesses.",
                  "Present top-down with stubs: strengths and weaknesses.",
                  "Present incremental/sandwich: risk-ordered builds and parallel lanes.",
                  "State risk-driven selection criteria; benches and simulators buy schedule.",
                  "Illustrate with the engine program ladder from parts to vehicle.",
                ],
              },
              {
                q: "Define stub and driver as used in integration testing.",
                marks: 2,
              },
              {
                q: "Why is big-bang integration rarely the right choice despite its apparent economy?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Integration execution: readiness, anomalies and the fix loop",
            body: [
              "Every integration event begins with readiness, formalised in the test readiness review (TRR): test procedures approved, hardware configuration recorded and under configuration control, instrumentation calibrated, facilities and safety cleared, and success criteria defined. The event then proceeds by interconnect verification before function: mechanical mates checked for torque, gap and alignment; electrical continuity and insulation measured; fluid lines leak- and pressure-checked; data buses exercised message by message. Only when the connections are proven does functional testing begin, because hunting a functional fault through unverified connections wastes the bench. As-designed versus as-built is a standing audit: the article on the bench must match the drawings the analysis assumed.",
              "When results deviate from expectation, the deviation becomes an anomaly - logged, not argued away. Each anomaly is classified as workmanship, design, procedure or environment; assigned to a root cause using fishbone diagrams, five-whys or fault trees for the stubborn ones; and dispositioned: use-as-is with rationale, rework, repair or redesign, each with its regression implications. Every fix earns a regression test - re-running enough of the verification to prove the fix harmed nothing. The integrate-verify-fix loop is the program's heartbeat, and its cost curve is the argument for discipline: a defect that escapes one rung surfaces at the next, where the isolation space has multiplied and the fix touches more baselines.",
              "Mechanical integration supplies the cautionary tales: a bracket that resonates at an engine order found only at vehicle level; a tolerance stack that consumed the assembly gap; a harness that fouled a moving suspension because two drawings were dimensioned from different datums. Each was cheap to prevent at the interface - a dimensioned ICD line, a stack-up analysis, a clash check - and expensive at the vehicle. Integration data is itself a deliverable: configuration records, test logs, anomaly reports and dispositions form the evidence chain that certification audits later walk. Recording is not overhead; it is the product the auditor buys.",
            ],
            bullets: [
              "TRR gates each event: procedures approved, configuration recorded, calibrations valid, success criteria set.",
              "Interconnect before function: torque, continuity, leak and bus-message checks precede performance testing.",
              "As-designed versus as-built: the bench article must match the analysed drawings - audit it at every event.",
              "Anomalies are logged, classified, root-caused and dispositioned (use-as-is / rework / redesign) - never waived verbally.",
              "Every fix earns regression testing; escaped defects cost roughly tenfold at each rung they survive.",
            ],
            codeExample: {
              language: "text",
              caption: "An integration anomaly log - the record reviewers and auditors will walk.",
              code: `INTEGRATION ANOMALY LOG - RUNG 3 (powertrain bench)

PR-031  Coolant seep at pump inlet
        Cause:       O-ring groove 0.2 mm out of spec (lot 4)
        Disposition: rework groove per ECN-118; screen remaining lot
        Regression:  VER-021 leak test, 3 cycles - PASS

PR-032  CAN message 0x1A4 missing at cold start
        Cause:       ICD-031 Rev B not reflected in harness build
        Disposition: update harness per ICD Rev B
        Regression:  VER-033 cold-start sweep - scheduled`,
            },
            diagram: {
              kind: "cycle",
              title: "The integrate-verify-fix loop",
              caption:
                "Each turn ends in an updated baseline and evidence - never in a clean pass.",
              steps: [
                { label: "Prepare article and bench", note: "TRR pass" },
                { label: "Verify interconnects", note: "torque, continuity, leak, bus" },
                { label: "Run the verification", note: "against procedure" },
                { label: "Disposition anomalies", note: "log, root-cause, fix" },
                { label: "Regression and re-baseline", note: "evidence archived" },
              ],
            },
            callout: {
              type: "tip",
              title: "Follow one anomaly end to end",
              body: "In any 'what happens when integration fails' answer, follow a single anomaly through log -> root cause -> disposition -> regression -> baseline update. The chain, not the drama, is what carries the marks.",
            },
            keyTerms: [
              { term: "TRR", definition: "Test readiness review: the gate verifying procedures, configuration and calibration before a test event." },
              { term: "Anomaly", definition: "A deviation between expected and observed behaviour, logged and dispositioned through the fix loop." },
              { term: "Regression test", definition: "Re-execution of relevant verification after a fix to prove nothing else broke." },
            ],
            examQuestions: [
              {
                q: "Describe the conduct of a system integration event from readiness review to baseline update, including anomaly handling with a mechanical example.",
                marks: 7,
                outline: [
                  "Open with TRR entry criteria: procedures, configuration, calibration, safety, success criteria.",
                  "Explain interconnect-before-function and what is checked for each interface type.",
                  "State the as-designed versus as-built audit.",
                  "Present the anomaly path: classification, root cause, disposition options.",
                  "Explain regression testing and why every fix earns it.",
                  "Argue the cost curve: defects escaping a rung cost about tenfold at the next.",
                  "Close with the mechanical example (resonant bracket or tolerance stack) and records as evidence.",
                ],
              },
              {
                q: "What is regression testing and why is it mandatory after a fix?",
                marks: 2,
              },
              {
                q: "List any six items a TRR checklist verifies before a test event.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Technical budgets, margins and design authority",
            body: [
              "A technical budget is a quantified resource the system spends as a whole - mass, power, thermal load, drag, volume, cost, even software memory - allocated from the system level down the hierarchy. Allocation is arithmetic with consequences: the vehicle's 1480 kg kerb mass divides among body, chassis, powertrain and battery, and each subsystem defends its number through every design cycle. Budgets make conflicts explicit early: the battery wants mass the structure wants, and the argument happens at PDR with numbers instead of at integration with metal. The systems engineer owns the totals, the allocation rules and the ledger in which every claim is recorded.",
              "Margin is the budget held unallocated at system level for what is not yet known. Young programs carry large margins by policy - a common aerospace practice reserves roughly a fifth of mass at PDR, stepping down as designs mature toward near zero at launch or start of production; exact numbers vary by industry and technology maturity, but the pattern is universal because designs grow. Margin management is a control loop: each design cycle measures the current estimates, compares them with plan, and draws margin only against approved causes - growth, scope change, risk retirement. Margin is not slack; it is quantified risk allowance, and spending it requires the same authority as spending money.",
              "The classic cautionary loop is the aircraft weight spiral: heavier structure demands bigger engines and more fuel, which add structure again, and breaking the spiral costs materials (titanium, composites) or performance (payload, range). The countermeasures are budgetary: mass properties control as a standing function, weight engineers with veto over design releases, and kill-criteria for growth such as payload trades or mission descope. The same discipline governs thermal budgets in a thin power-electronics enclosure and cost budgets in a price-sensitive car. Design authority closes the loop: only the design authority or its delegated change board may move an allocation or release margin, and every move updates the requirements, the TPM charts and the ICDs it touches.",
            ],
            bullets: [
              "Budget: a system-level resource (mass, power, thermal, cost) allocated down the hierarchy and defended each cycle.",
              "Allocation makes conflict explicit early - battery versus structure argued with numbers at PDR.",
              "Margin: unallocated budget reserved for the unknown; large at concept, stepped down toward zero at production.",
              "Margin moves need authority like money does; TPM tracks the burn-down (Unit V).",
              "Weight spiral: mass growth self-reinforces until materials, payload or mission scope give way.",
            ],
            table: {
              caption: "A vehicle mass budget ledger at PDR - current estimates roll up under allocation.",
              headers: ["Element", "Allocation (kg)", "Current estimate (kg)", "Remaining (kg)"],
              rows: [
                ["Battery pack", "380", "366", "+14"],
                ["Electric powertrain", "95", "91", "+4"],
                ["Chassis and suspension", "240", "231", "+9"],
                ["Body, interior, closures", "520", "517", "+3"],
                ["Thermal and electrics", "245", "239", "+6"],
                ["Vehicle total", "1480", "1444", "+36 (2.4%)"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The margin control loop across the program",
              caption:
                "Budgets are set once, defended continuously, and released only with authority.",
              steps: [
                { label: "Set system budget and margin", note: "kerb mass 1480 kg + 9% margin" },
                { label: "Allocate to subsystems", note: "body, chassis, powertrain, battery" },
                { label: "Measure each design cycle", note: "CAD mass roll-ups -> TPM" },
                { label: "Variance beyond trigger", note: "draw margin only with approval" },
                { label: "Release at maturity gates", note: "PDR / CDR step-downs toward zero" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The budgets-and-margins question wants four moves: define both, show a worked allocation table, give the margin step-down over lifecycle stages, and close with the weight-spiral example. Four moves, seven marks.",
            },
            keyTerms: [
              { term: "Technical budget", definition: "A quantified system resource (mass, power, cost) allocated down the architecture and tracked." },
              { term: "Margin", definition: "The unallocated portion of a budget reserved for unknowns; released stepwise as design matures." },
              { term: "Design authority", definition: "The role with sole power to change allocations, release margin and re-baseline the design." },
            ],
            examQuestions: [
              {
                q: "What are technical budgets and margins? Describe mass budget management across a program, including the weight-spiral effect.",
                marks: 7,
                outline: [
                  "Define budget: a system-level resource allocated down the hierarchy.",
                  "Show a worked mass allocation table with current estimates and remaining values.",
                  "Define margin as unallocated budget for the unknown; give the step-down policy over stages.",
                  "Present the control loop: measure each cycle, compare with plan, draw margin only with approval.",
                  "Explain the weight spiral mechanism and its material and payload costs.",
                  "State countermeasures: mass properties control, weight engineer veto, kill-criteria.",
                  "Close with design authority as the sole route to move allocations or release margin.",
                ],
              },
              {
                q: "Distinguish margin and contingency in budget management.",
                marks: 2,
              },
              {
                q: "Why is margin stepped down at successive gates rather than released fully at PDR?",
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
      title: "Verification, Validation and Testing",
      summary:
        "Proving the system: verification against requirements and validation against needs, the four verification methods, the test-planning chain from matrix to procedure to report, HALT and HASS attacking the bathtub curve, and configuration management holding every baseline under change control.",
      chapter: {
        number: "04",
        title: "Proving the System",
        intro:
          "Unit IV proves the system: verification against requirements and validation against needs, the four verification methods chosen by trading fidelity for cost, a test-planning chain that runs from matrix to procedure to report, HALT and HASS attacking the bathtub curve from both ends, and configuration management holding every baseline under change control through the FCA and PCA audits.",
        inOneBreath:
          "Verification asks whether we built the system right; validation asks whether we built the right system; requirements verify by inspection, analysis, demonstration or test, chosen by trading fidelity against cost with critical items anchored by test; test planning chains the verification matrix through plans and procedures to reports, with pass/fail criteria fixed from requirement thresholds before execution; HALT steps stresses to destruct to find limits and weak links while HASS screens 100% of production inside those limits to precipitate infant mortality; and configuration management holds functional, allocated and product baselines under a change control board with effectivity, audited at the end by the FCA and PCA.",
        sections: [
          {
            number: "4.1",
            title: "Verification and validation: two different questions",
            body: [
              "Verification answers the question 'did we build the system right?' - does the product conform to its requirements? Validation answers 'did we build the right system?' - does it satisfy the stakeholder's need in the real operational environment? The distinction is not pedantry: a system can verify perfectly against a defective requirement set and still fail its users, which is why requirement validation - walkthroughs, prototypes and ConOps reviews - happens on the left leg of the V, before the money is spent. Verification climbs the right leg level by level; validation sits at the top of the V, facing the stakeholder with the product in its intended environment.",
              "Both must be planned at definition time - the V-model's pairing made contractual. Verification planning assigns each requirement one of the four methods (section 4.2); validation planning selects operational scenarios, environments and user panels. Independent verification and validation (IV&V) - performed by an organisation separate from the developer - is mandated where the cost of failure is catastrophic: flight software, nuclear controls, medical devices. The economics justify the overhead: the classic 1-10-100 rule says a defect costing one unit to fix at requirements costs ten at design and a hundred or worse in operation, so V&V effort is bought early precisely because it is cheapest there.",
              "An automobile makes both concrete. Verifying that the car meets its 0-100 km/h time, braking distance and emissions limits is conformance to specifications - tests on instrumented tracks and dynamometers with prescribed procedures. Validating that buyers perceive the car as responsive, that the seating position suits the target market and that service intervals match fleet expectations requires user trials, clinics and pilot fleets - evidence no specification can substitute for. Certification (regulatory homologation) is verification against law; acceptance is the customer's verification; neither replaces validation, and conflating them in an exam answer is the most common mark lost in this unit.",
            ],
            bullets: [
              "Verification: conformance to requirements ('built right'); Validation: fitness for need ('right system').",
              "Left-leg validation of requirements (prototypes, walkthroughs) prevents perfectly verifying the wrong specification.",
              "IV&V: independent organisations for catastrophic-failure domains - flight software, nuclear, medical.",
              "1-10-100 rule: defect cost multiplies roughly tenfold per lifecycle stage survived.",
              "Verification by test, analysis, inspection and demonstration; validation by operational trials with users.",
            ],
            table: {
              caption: "The V&V contrast.",
              headers: ["Aspect", "Verification", "Validation"],
              rows: [
                ["Question", "Did we build it right?", "Did we build the right thing?"],
                ["Reference", "Requirements baseline", "Stakeholder need / ConOps"],
                ["Timing", "Every level, up the right leg", "System level, top of the V"],
                ["Typical evidence", "Verification matrix, test reports", "User trials, validation report"],
                ["Owner", "Developer (or IV&V agent)", "User / customer with developer support"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Verification versus validation",
              caption:
                "Two different questions, asked at two different places on the V.",
              left: {
                heading: "Verification - built right?",
                items: [
                  "Conformance to the requirement baseline",
                  "Performed at every level up the right leg",
                  "Methods: inspection, analysis, demonstration, test",
                  "Evidence: verification matrix and reports",
                  "Judged against the specification",
                ],
              },
              right: {
                heading: "Validation - right system?",
                items: [
                  "Fitness for the stakeholder need",
                  "Performed at system level, in the operational environment",
                  "Methods: user trials, pilot fleets, operational scenarios",
                  "Evidence: validation report, user acceptance",
                  "Judged against the need, not the spec",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "One sentence fixes the pair",
              body: "The 0-100 km/h time is verification; whether buyers call the car responsive is validation. Anchor every V&V answer with that single automotive line and the definitions can never blur again.",
            },
            keyTerms: [
              { term: "Verification", definition: "Confirmation by objective evidence that the specified requirements have been fulfilled." },
              { term: "Validation", definition: "Confirmation that the system fulfils the stakeholder need in its operational environment." },
              { term: "IV&V", definition: "Independent verification and validation performed by an organisation separate from the developer." },
            ],
            examQuestions: [
              {
                q: "Distinguish verification and validation. Where does each occur on the V-model, and why is independent V&V used in critical systems?",
                marks: 7,
                outline: [
                  "Define verification: conformance to requirements, built right.",
                  "Define validation: fitness for the operational need, right system.",
                  "Place each on the V: verification climbs the right leg; validation at the top.",
                  "Explain left-leg requirement validation: walkthroughs, prototypes, ConOps reviews.",
                  "Present IV&V: independence rationale and the domains that mandate it.",
                  "Quote the 1-10-100 economics of early defect discovery.",
                  "Illustrate with the automobile: track-test times versus user perception trials.",
                ],
              },
              {
                q: "State the two questions that verification and validation ask.",
                marks: 2,
              },
              {
                q: "Why can a system pass every verification and still fail validation? Give an example.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "The four verification methods: inspection, analysis, demonstration and test",
            body: [
              "Every requirement is verified by one or more of four methods. Inspection is examination of the item or its documentation against the requirement - dimensions on a drawing, nameplates, workmanship, material certificates; it uses eyes and instruments but no operation of the item. Analysis is verification by models and calculations - finite element stress prediction, thermal network analysis, CFD drag estimates, reliability predictions - used where physical testing is impossible, uneconomic or statistically weak. Demonstration is the operation of the item without special instrumentation, observing that a function is achieved: the door latches, the warning lamp illuminates, the spare tyre is retrievable. Test is instrumented operation under controlled conditions, producing quantitative evidence against a threshold - stopping distance, motor torque curve, grams of emission per kilometre.",
              "Method selection is a trade of fidelity against cost and schedule, with a strong bias toward cheap methods early. Mass is verified by weighing (inspection); structural adequacy by finite element analysis, backed by coupon tests; operator sightlines by demonstration with a mock-up; anything with a numeric threshold by test. A single requirement may carry two methods - a bracket's strength by analysis, its natural frequency by shake test - and the verification matrix records the choice and the event at which it closes. Analysis-only paths carry model risk, so criticality decides when analysis must be anchored by physical test, and qualification testing adds environmental stress - vibration, thermal cycling, EMC - to prove margins beyond the operational envelope.",
              "Each method ends in a document: inspection reports with records, analysis reports with model validation statements, demonstration logs, and test reports with data, configuration and deviations. These evidence packages feed the configuration audits at the end of development: the functional configuration audit checks the as-built system against the functional baseline's requirements, and the physical configuration audit checks the as-built hardware against the released drawings. For one mounting bracket, the full spread looks like this: geometry and weld quality by inspection, load margin by analysis, replaceability by demonstration in a service trial, and natural frequency by instrumented shake test. One component, four methods - the matrix makes the choice deliberate and the evidence traceable.",
            ],
            bullets: [
              "Inspection: examine the item or documents - dimensions, markings, workmanship, certificates; no operation.",
              "Analysis: models and calculations - FEA, CFD, thermal, reliability; risk lives in the model, not the metal.",
              "Demonstration: operate and observe the function without instrumentation.",
              "Test: instrumented operation under controlled conditions producing quantitative pass/fail data.",
              "Selection trades fidelity against cost and schedule; critical requirements anchor analysis with physical test.",
            ],
            table: {
              caption: "The four methods compared.",
              headers: ["Method", "What it proves", "Typical requirements", "Relative cost"],
              rows: [
                ["Inspection", "Item and records conform as built", "Mass, dimensions, markings, materials", "Lowest"],
                ["Analysis", "Compliance predicted by models", "Strength, thermal, fatigue, reliability", "Low to moderate"],
                ["Demonstration", "Function achieved, observed", "Usability, access, operator features", "Moderate"],
                ["Test", "Quantitative performance measured", "Performance, emissions, durability, EMC", "Highest"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing among the four verification methods",
              caption:
                "The cheapest method that yields credible evidence wins - criticality decides when test is mandatory.",
              start: "Requirement needs a verification method",
              branches: [
                { label: "Inspection", outcome: "examination of item or records: dimensions, workmanship, certificates", good: true },
                { label: "Analysis", outcome: "FEA / CFD / reliability models predict compliance; anchor critical cases with test", good: true },
                { label: "Demonstration", outcome: "function observed in operation, without instrumentation", good: true },
                { label: "Test", outcome: "instrumented, controlled, quantitative evidence against the threshold", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "This is the most repeated 7-mark question in the unit. Define each method in one line, give a mechanical example for each, and close with the selection trade plus the line 'critical requirements need test to anchor the analysis' - that closing line is the differentiator.",
            },
            keyTerms: [
              { term: "Inspection (verification)", definition: "Verification by examining the item or its documentation, without operation." },
              { term: "Analysis (verification)", definition: "Verification by calculation or simulation models where test is uneconomic or impossible." },
              { term: "Demonstration (verification)", definition: "Verification by observing the operated item achieve its function without instrumentation." },
            ],
            examQuestions: [
              {
                q: "Explain inspection, analysis, demonstration and test as verification methods with examples, and state how a method is selected for a requirement.",
                marks: 7,
                outline: [
                  "Define inspection with a dimension-and-certificate example.",
                  "Define analysis with an FEA and a reliability-prediction example.",
                  "Define demonstration with a service-access example.",
                  "Define test with a stopping-distance example.",
                  "Present the selection trade: fidelity against cost and schedule, cheap methods early.",
                  "Explain multiple methods per requirement and the matrix recording them.",
                  "Close with model risk: critical requirements anchor analysis with physical test; evidence feeds FCA/PCA.",
                ],
              },
              {
                q: "Which verification method would you choose for a mass requirement, and why?",
                marks: 2,
              },
              {
                q: "Show how a mounting bracket can be verified using at least three different methods.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Test planning: from requirements to procedures",
            body: [
              "Testing is the most expensive verification method, so it is engineered like the product. The planning stack descends from the verification matrix: each requirement with method 'test' gets an event; each event gets a test plan - scope, objectives, article configuration, environments, facility, instrumentation, safety, pass/fail criteria and schedule; and each plan gets procedures: numbered steps with prerequisites, data tables, hazard controls and signature blocks. Above the program's own needs sit regulatory protocols, where homologation codes fix speeds, loads and instrument accuracy by law, and above those, for aerospace, the test-as-you-fly conservatism: flight articles exercised in flight-like environments before flight.",
              "Pass/fail criteria are not written by the test team at the test; they are inherited from the requirement's threshold, with tolerance and uncertainty accounted. If the requirement says stopping distance not more than 36.5 m, the procedure defines the surface, the speed window, the brake temperature, the number of valid runs and the treatment of outliers before the first stop is made. Sample size and statistics matter for anything with scatter - fatigue lives and production variability demand replication and stated confidence levels, because a single fatigue coupon proves nothing about a B10 life. Environment definition is equally exact: vibration profiles derived from measured road-load data, thermal cycles counting the damaging extremes, and measurement chains with stated calibration and uncertainty budgets.",
              "Test levels mirror the integration ladder: component and coupon tests feed analysis and material choices; rig tests exercise subsystems against simulated loads; system and vehicle tests close the top-level requirements; and durability fleets accumulate the mileage no rig can. A chassis durability program shows the chain: road-load data acquisition on instrumented mules, damage-equivalent rig profiles, crack inspection at intervals, and correlation back to proving-ground routes. The test readiness review gates each event, and execution ends in the report - configuration as tested, deviations, data, and the verdict against the matrix, which is the traceability chain closing under the word verified.",
            ],
            bullets: [
              "Planning stack: verification matrix -> test plan -> procedures -> reports; regulatory protocols sit above.",
              "Pass/fail criteria come from the requirement's threshold - defined before the first run, never after.",
              "Statistics: scatter (fatigue, production) demands sample sizes and confidence levels; one coupon proves little.",
              "Environments are engineered: measured road-load spectra, damage-equivalent rig profiles, calibrated channels.",
              "Levels mirror integration: coupon -> rig -> system -> fleet; TRR gates entry; the report closes the matrix.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From requirement to closed verification",
              caption:
                "Each stage is a controlled document; the chain closes when the report cites the requirement.",
              stages: [
                { label: "Requirement (method: test)", note: "VER-014, stopping distance" },
                { label: "Matrix entry", note: "event, configuration, criteria" },
                { label: "Test plan", note: "scope, environment, instrumentation" },
                { label: "Procedure", note: "numbered steps, safety, data tables" },
                { label: "Execute at TRR", note: "calibrated channels, recorded configuration" },
                { label: "Report and close", note: "verdict archived to the matrix" },
              ],
            },
            codeExample: {
              language: "text",
              caption: "A procedure page - the level of detail that makes a test defensible.",
              code: `TEST PROCEDURE TP-041 REV C - Brake performance (VER-014)

Prerequisites
  Vehicle configuration CFG-022 recorded
  Tyres 235/55R18 at 2.4 bar +/- 0.05, cold
  Brake pads bedded per TP-040; disc temp 100-150 C
  Ambient 20-30 C, wind <= 5 m/s, dry level surface

Steps
  1. Accelerate to 100 km/h +/- 1 km/h.
  2. Trigger full brake application (pedal force 300 N).
  3. Record stopping distance, mean deceleration, pull.
  4. Repeat 5 valid runs; tabulate all runs (Table 4-2).

Pass criteria
  Mean stopping distance <= 36.5 m
  Lateral pull <= 0.5 m over the stop
  No fade across the 5 runs (each run <= 38.0 m)`,
            },
            callout: {
              type: "warning",
              title: "Criteria before data, always",
              body: "Writing pass criteria after seeing the data is the cardinal sin of testing. State in every exam answer: criteria derive from the requirement threshold before execution, with tolerances and uncertainty budgets declared in the procedure.",
            },
            keyTerms: [
              { term: "Test plan", definition: "The document defining scope, configuration, environment, criteria and schedule for a test event." },
              { term: "Test procedure", definition: "The numbered, signed steps executing a test plan, with prerequisites and data tables." },
              { term: "Pass/fail criteria", definition: "The measurable verdict rules inherited from the requirement's threshold, fixed before execution." },
            ],
            examQuestions: [
              {
                q: "Describe the hierarchy of test planning from the verification matrix down to procedures. How are pass/fail criteria and test environments established? Illustrate with a brake-performance test.",
                marks: 7,
                outline: [
                  "Present the stack: matrix entry -> test plan -> procedure -> report, with the regulatory layer above.",
                  "Explain that criteria come from requirement thresholds before execution, tolerances included.",
                  "Discuss statistics: sample size, confidence, why one fatigue coupon proves nothing.",
                  "Explain environment engineering: road-load data acquisition, damage-equivalent rig profiles.",
                  "Describe instrumentation, calibration and uncertainty budgets.",
                  "Place the TRR as the gate before every event.",
                  "Illustrate with TP-041 brake test: prerequisites, steps, pass criteria.",
                ],
              },
              {
                q: "What is a test readiness review and what does it verify?",
                marks: 2,
              },
              {
                q: "Why does a single fatigue coupon not verify a B10 life requirement?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "HALT and HASS: accelerated stress testing",
            body: [
              "Traditional qualification proves the design survives its specification; it says nothing about where the design actually fails. HALT - highly accelerated life testing - answers that question by stepping stresses far beyond specification to failure, not to prove compliance but to find the design's operating and destruct limits and the weak links that live there. A HALT chamber combines cold step-stress, hot step-stress, rapid thermal transitions of tens of degrees per minute, broadband random vibration to tens of Grms in all axes, and combined temperature-plus-vibration, applied progressively until the sample's fundamental limits are reached; each failure is fixed or its margin recorded, then the stress rises again.",
              "HASS - highly accelerated stress screening - is HALT's production child: a screen applied to 100 percent of units, using stress profiles derived from the HALT limits but kept safely inside the destruct margin, so it precipitates latent manufacturing defects - weak solder joints, contamination, cracked components, the infant-mortality population of the bathtub curve - without consuming meaningful design life. The bathtub curve frames both tools: the hazard rate falls steeply through infant mortality, runs low and flat through useful life, and rises at wear-out. Screens exist to remove the infant-mortality tail before delivery; HALT margins push the wear-out cliff later than any duty cycle will reach.",
              "Accelerated testing works because failure mechanisms obey physics that stress accelerates predictably: Arrhenius kinetics for temperature-driven mechanisms such as chemical degradation and diffusion; Coffin-Manson relations for thermal-cycling fatigue of solder and bonds; inverse power laws for vibration and voltage stress. Acceleration factors convert overstress hours into equivalent field hours, letting a day in a chamber stand for years on the road - for that mechanism only. Mechanisms not accelerated by the chosen stress are simply untested, which is why screens are combined. HALT results are qualitative margin discoveries, not field-life predictions; they complement, and never replace, the statistics of reliability engineering.",
            ],
            bullets: [
              "HALT: step-stress (thermal, vibration, combined) to destruct; finds operating limits, destruct limits and weak links.",
              "HASS: 100% production screen derived from HALT limits - precipitates latent defects without consuming life.",
              "Bathtub curve: screens remove the infant-mortality tail; HALT margins push wear-out beyond every duty cycle.",
              "Acceleration physics: Arrhenius (temperature), Coffin-Manson (thermal cycling), inverse power (voltage, vibration).",
              "Acceleration factors convert chamber hours to field-equivalent hours per mechanism; HALT is margin discovery, not life prediction.",
            ],
            diagram: {
              kind: "flow",
              title: "A HALT profile, stress by stress",
              caption:
                "Each step runs until failure or limit; fixes raise the limit, then stress resumes.",
              steps: [
                { label: "Cold step-stress", note: "e.g. 10 C steps to destruct" },
                { label: "Hot step-stress", note: "to soft and hard destruct limits" },
                { label: "Rapid thermal cycling", note: "transitions of tens of C per minute" },
                { label: "Random vibration", note: "broadband, all axes, tens of Grms" },
                { label: "Combined stress", note: "temperature plus vibration together" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "Arrhenius acceleration factor for a temperature-driven mechanism.",
              code: `import math

# Arrhenius: AF = exp((Ea / k) * (1/T_use - 1/T_stress))
Ea = 0.7          # activation energy, eV (mechanism-specific)
k = 8.617e-5      # Boltzmann constant, eV/K

def acceleration_factor(t_use_c, t_stress_c):
    t_use = t_use_c + 273.15        # Celsius -> Kelvin
    t_stress = t_stress_c + 273.15
    return math.exp((Ea / k) * (1.0 / t_use - 1.0 / t_stress))

af = acceleration_factor(25, 85)
print(f"AF = {af:.1f}")
# AF ~ 96: a 1000 h soak at 85 C equals roughly 96,000 h
# at 25 C for THIS mechanism only. Screens must still
# cover the mechanisms this stress does not accelerate.`,
            },
            callout: {
              type: "tip",
              title: "Two sentences for two marks",
              body: "HALT versus HASS is the unit's favourite short question: HALT is design margin discovery on samples, taken to destruct; HASS is a 100 percent production screen run inside the HALT-derived limits, precipitating infant mortality. Two lines, full marks.",
            },
            keyTerms: [
              { term: "HALT", definition: "Highly accelerated life test: step-stress to destruct on design samples to reveal limits and weak links." },
              { term: "HASS", definition: "Highly accelerated stress screen: a 100% production screen derived from HALT limits." },
              { term: "Bathtub curve", definition: "Hazard-rate curve with infant mortality, flat useful life and wear-out; screens attack the first region." },
            ],
            examQuestions: [
              {
                q: "Explain HALT and HASS. How do they relate to the bathtub curve, and what physics makes accelerated testing meaningful? State their limitations.",
                marks: 7,
                outline: [
                  "Define HALT and its stress profile: cold, hot, rapid transitions, vibration, combined.",
                  "Explain operating and destruct limits and the fix-then-restress rhythm.",
                  "Define HASS: 100% production screen inside the HALT-derived limits.",
                  "Draw the bathtub curve: infant mortality, useful life, wear-out.",
                  "Link screens to infant mortality and HALT margins to wear-out.",
                  "Present the acceleration physics: Arrhenius, Coffin-Manson, inverse power.",
                  "State limitations: mechanism-specific equivalence; HALT is margin discovery, not field-life prediction.",
                ],
              },
              {
                q: "Distinguish HALT and HASS in two sentences.",
                marks: 2,
              },
              {
                q: "Which failure mechanisms does a thermal-cycling screen accelerate, and by what law?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Configuration management: baselines, change control and audits",
            body: [
              "Configuration management (CM) is the discipline that guarantees the program always knows exactly what the system is: which requirements, which design, which hardware. Its unit is the configuration item (CI) - any element placed under formal control, chosen by criticality and interface count, from the whole vehicle down to a controller board. Its backbone is the baseline ladder met at Unit III's reviews: the functional baseline (approved system requirements, set at SRR), the allocated baseline (approved subsystem requirements and allocations, set at PDR) and the product baseline (approved detailed design, drawings and ICDs, set at CDR) - joined later by as-built baselines recording each delivered article's exact configuration.",
              "Change control is CM's active half. Any proposed change becomes a change request or engineering change proposal; it receives an impact analysis spanning requirements, mass, cost, schedule, interfaces, safety and - the one everyone forgets - verification: which tests must rerun. The change control board (CCB), chaired by the design authority with systems engineering, quality and affected stakeholders, classifies and disposes changes: Class I changes, affecting form, fit, function, safety, cost or contract, require customer approval; Class II changes, editorial and drawing tidy-ups, are internal. Approved changes update every affected baseline document and carry effectivity - the serial numbers or dates from which the change applies - so fielded units are never ambiguous.",
              "CM's audit trail closes the loop at the end of development: the functional configuration audit (FCA) verifies that the as-built system's performance evidence satisfies the functional baseline, and the physical configuration audit (PCA) verifies that the as-built hardware matches the product baseline drawings - together establishing that the delivered article is the designed system. CM continues through operations: service bulletins, retrofit kits and spare-part revisions are all CM actions, as an automotive recall demonstrates - identifying affected vehicles by effectivity is pure configuration accounting. Weak CM shows up as integration surprises: a harness built to a superseded ICD, tested against updated software, failing a test that neither document governs.",
            ],
            bullets: [
              "CM: knowing and controlling exactly what the system is - requirements, design, hardware - at all times.",
              "CI: any element under formal control, selected by criticality and interface count.",
              "Baselines: functional (SRR), allocated (PDR), product (CDR), plus as-built records of every article.",
              "Change control: request -> impact analysis -> CCB disposition -> effectivity; Class I needs customer approval.",
              "FCA and PCA audits prove the as-built system equals the designed system; operations CM includes recalls.",
            ],
            table: {
              caption: "Baselines and their change machinery.",
              headers: ["Baseline", "Established at", "Contains", "Changed by"],
              rows: [
                ["Functional", "SRR", "Approved system requirements", "CCB; Class I needs customer approval"],
                ["Allocated", "PDR", "Subsystem requirements and allocations", "CCB with subsystem sign-off"],
                ["Product", "CDR", "Released design, drawings, ICDs", "CCB; effectivity assigned"],
                ["As-built", "Production / delivery", "Records of each article's configuration", "New build records only - no retro-history"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The change control loop",
              caption:
                "A change is a journey through impact analysis to effectivity - shortcuts corrupt baselines.",
              steps: [
                { label: "Change request raised", note: "anyone may raise it" },
                { label: "Impact analysis", note: "mass, cost, schedule, interfaces, verification" },
                { label: "CCB disposition", note: "approve / reject / defer; class assigned" },
                { label: "Implement and update baselines", note: "drawings, ICDs, requirements" },
                { label: "Effectivity and retest", note: "serial / date applicability; regression" },
              ],
            },
            callout: {
              type: "warning",
              title: "The recall is CM made visible",
              body: "Effectivity decides which vehicles receive a recall fix. In every exam answer about approved changes, attach effectivity - serials or dates - because a change without effectivity is unanswerable in the field.",
            },
            keyTerms: [
              { term: "Configuration item", definition: "An element placed under formal configuration control, tracked by identifier and revision." },
              { term: "Baseline", definition: "An approved, formally controlled description of the system at a milestone (functional, allocated, product)." },
              { term: "CCB", definition: "Change control board: the authority that dispositions change requests after impact analysis." },
            ],
            examQuestions: [
              {
                q: "Explain configuration management: configuration items, the baseline ladder, change control and the FCA/PCA audits. Why does weak CM cause integration failures?",
                marks: 7,
                outline: [
                  "Define CM: knowing and controlling what the system is at all times.",
                  "Explain CI selection by criticality and interface count.",
                  "Present the baseline ladder: functional, allocated, product, as-built, with their reviews.",
                  "Walk the change flow: request, impact analysis, CCB, classes, effectivity.",
                  "Explain FCA (performance evidence vs functional baseline) and PCA (hardware vs drawings).",
                  "Give the weak-CM example: harness to a superseded ICD failing an ungoverned test.",
                  "Close with operations CM: service bulletins and recalls by effectivity.",
                ],
              },
              {
                q: "Name the three baselines and the review that sets each.",
                marks: 2,
              },
              {
                q: "What is effectivity in change control, and how does it support a recall campaign?",
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
      title: "Systems Engineering Management",
      summary:
        "Managing the engineering: technical performance measurement, risk management with the 5x5 matrix, AHP decision analysis, earned value management, life cycle cost - and aircraft, spacecraft and automobile case studies that show the same V reweighted.",
      chapter: {
        number: "05",
        title: "Managing the Program",
        intro:
          "Unit V manages the engineering: technical performance measurement tracks the product against plan, the risk process scores and burns down exposure, AHP structures hard choices with pairwise mathematics, earned value integrates scope, schedule and cost into indices and forecasts, and life cycle cost thinking - closed with aircraft, spacecraft and automobile case studies - explains where the leverage lives.",
        inOneBreath:
          "Technical performance measurement tracks a handful of driving parameters against planned profiles with explicit triggers; risks are stated, scored on a 5x5 likelihood-consequence matrix, given owners and responses - avoid, transfer, mitigate, accept - and burned down; AHP derives weights from pairwise comparisons on Saaty's 1-9 scale with a consistency ratio under 0.1; earned value integrates scope, schedule and cost through PV, EV and AC into SPI, CPI and EAC forecasts; life cycle cost is committed early even though it is spent late; and aircraft, spacecraft and automobile programs run the same V with reliability, single-shot assurance and unit cost as their respective centres of gravity.",
        sections: [
          {
            number: "5.1",
            title: "Technical performance measurement (TPM)",
            body: [
              "Technical performance measurement is the program's instrument panel for engineering truth: a small set of quantified parameters, derived from the driving requirements and budgets, tracked against a planned profile at every design cycle. Typical TPMs for a vehicle program are kerb mass, energy consumption per 100 km, 0-100 km/h time, drag coefficient, MTBF targets and range. Each TPM carries a plan value at each milestone, the current measured or predicted value, a tolerance band, and an explicit trigger - the variance at which management must act rather than watch. The dashboard, not the meeting, is the management product.",
              "The loop is classical control applied to engineering. Select the parameters that drive mission success - usually ten or fewer, because a table of fifty lines is a filing system, not an instrument panel. Set the planned profile through the program: allocations and improvement assumptions at each milestone. Measure each cycle honestly - CAD mass roll-ups, dynamometer results, CFD predictions, test data as they arrive - and compute the variance against plan. Inside tolerance: report and continue. Beyond trigger: corrective action with an owner and a date - a lightweighting study, an architecture change, a requirement renegotiation - and the chart records whether the action bent the curve. TPM variances feed the risk register: a persistent adverse trend is a risk maturing in public.",
              "TPM differs from schedule and cost tracking - earned value, section 5.4 - by measuring the product rather than the program: a project can be on schedule and on budget while quietly drifting forty kilograms heavy, and only TPM will say so before launch. Mass is the canonical example: every design cycle rolls up subsystem masses, compares them with the allocation plan, and triggers action when the burn rate of margin exceeds plan. Energy consumption is even more cross-cutting - drag, rolling resistance, motor efficiency, battery round-trip and accessory loads all surface in one number - which makes it the single most informative TPM in an EV program and the first chart on the chief engineer's wall.",
            ],
            bullets: [
              "TPM: a small set of driving parameters (mass, Wh/km, 0-100, drag) tracked against a planned profile.",
              "Each TPM has a plan value, current value, tolerance band and an explicit action trigger.",
              "Loop: select -> plan -> measure each cycle -> variance -> corrective action; trends feed the risk register.",
              "Ten or fewer TPMs - a fifty-line table is a filing system, not an instrument panel.",
              "TPM measures the product; EVM measures the program - both are needed for the truth.",
            ],
            table: {
              caption: "A monthly TPM dashboard for an EV program - status words do the management work.",
              headers: ["TPM", "Plan", "Current", "Variance", "Trigger", "Status"],
              rows: [
                ["Kerb mass (kg)", "1480", "1444", "-36", "+25", "OK"],
                ["Energy use (kWh/100 km)", "15.0", "15.6", "+0.6", "+0.3", "Action"],
                ["0-100 km/h (s)", "9.5", "9.8", "+0.3", "+0.2", "Watch"],
                ["Drag coefficient Cd", "0.27", "0.29", "+0.02", "+0.01", "Action"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The TPM control loop",
              caption:
                "Every design cycle turns this loop once; the chart either bends back toward plan or triggers action.",
              steps: [
                { label: "Select driving parameters", note: "mass, Wh/km, 0-100, drag" },
                { label: "Set planned profile", note: "value at each milestone" },
                { label: "Measure each cycle", note: "CAD, dyno, CFD, test data" },
                { label: "Compute variance", note: "current minus plan vs tolerance" },
                { label: "Beyond trigger -> act", note: "owner, date, recorded on the chart" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "A TPM question is answered with the loop diagram plus a small dashboard table - parameter, plan, current, trigger, status - and the one-line contrast with EVM: TPM measures the product, EVM measures the program. That line completes the seven marks.",
            },
            keyTerms: [
              { term: "TPM", definition: "Technical performance measurement: tracking driving technical parameters against planned profiles." },
              { term: "Variance", definition: "The gap between current and planned TPM values; beyond tolerance it triggers action." },
              { term: "Trigger", definition: "The pre-agreed variance threshold at which corrective action becomes mandatory." },
            ],
            examQuestions: [
              {
                q: "What is technical performance measurement? Describe the TPM process and a TPM dashboard for an EV program, contrasting TPM with earned value management.",
                marks: 7,
                outline: [
                  "Define TPM: quantified driving parameters tracked against planned profiles.",
                  "Explain parameter selection: mission-driving, ten or fewer.",
                  "Present the loop: plan, measure, variance, trigger, corrective action.",
                  "Show a dashboard table: mass, energy, 0-100, drag with plan/current/trigger/status.",
                  "Link persistent adverse trends to the risk register.",
                  "Contrast with EVM: product truth versus program truth.",
                  "Close: on-schedule, on-budget programs can still drift - TPM is the early warning.",
                ],
              },
              {
                q: "Name any five TPMs for a passenger-car program.",
                marks: 2,
              },
              {
                q: "Why must the number of TPMs be small, and how are TPM variances related to risks?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Risk management: identify, analyse, mitigate",
            body: [
              "Risk is the effect of uncertainty on objectives: the chance, multiplied by the consequence, that a program's technical, cost or schedule commitments will not be met. Risk management is the standing process of identifying, analysing, responding to and monitoring these exposures - with opportunities treated as positive risks, because the machinery is the same. Every risk lives in a register: a statement in fixed form (if cause, then event, leading to consequence), likelihood and consequence ratings on scales defined in advance, the resulting score, an owner, the response and its status, and the residual risk remaining after the response.",
              "Identification casts wide: brainstorming, lessons-learned databases, technology readiness assessment, watch lists from prior programs, and the TPM charts, since an adverse trend is a risk maturing. Qualitative analysis scores each risk on a 5x5 likelihood-by-consequence matrix, which sorts the responses: extreme scores demand immediate mitigation and management visibility, while low scores go to the watch list. Quantitative analysis - expected value, Monte Carlo schedule and cost simulation - is reserved for the majors, because those numbers carry weight in board decisions. Responses follow the classic four: avoid (change the design or plan), transfer (insure, subcontract, warranty), mitigate (reduce likelihood or consequence - test early, qualify a second source) or accept (documented, with contingency).",
              "Mitigation is a planned activity with a trigger, not a hope: if cell-supply risk is not retired by the third quarter, qualify supplier B - and the plan has its own schedule, cost and success criterion. Residual risk is what remains after the response, and burn-down charts track aggregate exposure against plan: risks are retired by test, by redesign or by decision, and a program whose exposure curve rises toward launch is signalling. The mechanism list is mechanical: new battery chemistry (schedule), single-source castings (supply), NVH tuning late in the program (integration), thermal runaway propagation (safety). Each carries a designed response - parallel qualification, forging substitution, early mule testing, a propagation test campaign - with an owner accountable for it.",
            ],
            bullets: [
              "Risk = likelihood x consequence on pre-defined scales; the register statement is if-then-leading-to.",
              "Identification sources: brainstorms, lessons learned, technology readiness, TPM trends, watch lists.",
              "5x5 matrix sorts: extreme = mitigate now with visibility; low = watch list; majors get Monte Carlo.",
              "Responses: avoid, transfer, mitigate, accept - acceptance is documented, with contingency.",
              "Mitigations carry triggers and success criteria; burn-down charts expose rising exposure.",
            ],
            table: {
              caption: "A risk register excerpt.",
              headers: ["ID", "Risk (if-then-leading-to)", "L", "C", "Score", "Response"],
              rows: [
                ["R-01", "If cell supply stumbles, then pack build slips, delaying launch", "2", "5", "10", "Mitigate: qualify second source by Q3"],
                ["R-02", "If gear whine persists, then NVH sign-off slips", "3", "3", "9", "Mitigate: early mule tests; two gear profiles"],
                ["R-03", "If thermal propagation occurs, then homologation fails", "1", "5", "5", "Avoid: cell spacing + barriers; test"],
                ["R-04", "If the casting vendor stops supply, then production halts", "2", "4", "8", "Transfer/mitigate: dual-source forging"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The likelihood-consequence quadrant",
              caption:
                "Scores sort risks into response modes - the extreme corner cannot wait.",
              axes: { x: "likelihood: low -> high", y: "consequence: low -> high" },
              quadrants: [
                { label: "Low likelihood, high consequence", note: "contingency plans and insurance - prepare, do not chase" },
                { label: "High likelihood, high consequence", note: "mitigate immediately; management visibility; escalate" },
                { label: "Low likelihood, low consequence", note: "watch list - monitor at each review" },
                { label: "High likelihood, low consequence", note: "routine mitigation inside the work packages" },
              ],
            },
            callout: {
              type: "tip",
              title: "A risk without an owner is a worry",
              body: "Every risk you write - in exams or in industry - needs five fields: statement, likelihood, consequence, response, owner. Adding that closing sentence to an answer is itself worth a mark.",
            },
            keyTerms: [
              { term: "Risk register", definition: "The controlled list of risks with statements, scores, owners, responses and residual values." },
              { term: "Mitigation", definition: "Actions reducing a risk's likelihood or consequence, with triggers and success criteria." },
              { term: "Residual risk", definition: "The exposure remaining after the planned response is complete." },
            ],
            examQuestions: [
              {
                q: "Explain the risk management process with a 5x5 likelihood-consequence matrix and a sample register. Describe the four response strategies.",
                marks: 7,
                outline: [
                  "Define risk: effect of uncertainty on objectives; likelihood x consequence.",
                  "Present the register fields and the if-then-leading-to statement form.",
                  "Explain identification sources, including TPM trends and lessons learned.",
                  "Draw the 5x5 matrix and map scores to response modes.",
                  "Explain the four responses - avoid, transfer, mitigate, accept - with one example each.",
                  "Distinguish initial from residual risk; mention burn-down charts.",
                  "Close with a sample register: battery supply, gear whine, thermal propagation.",
                ],
              },
              {
                q: "State the four classic risk responses with one example each.",
                marks: 2,
              },
              {
                q: "Write two well-formed risk statements for an EV battery program, each with L, C and score.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Decision analysis and the analytic hierarchy process (AHP)",
            body: [
              "Decision analysis gives structure to selection problems that outrun a single number: choosing among concepts, suppliers, materials and architectures. The core steps are common to all methods: define the alternatives; derive the criteria from requirements, never from preference; weight the criteria; score each alternative against each criterion; aggregate, usually by weighted sum; and - the professional step - run sensitivity on the weights and scores before believing the winner. The weighted decision matrix is the workhorse of trade studies (section 3.1); its weakness is that weights are asserted, and asserted weights are argued about in every review until the argument is resolved by seniority rather than evidence.",
              "The analytic hierarchy process (AHP), developed by Thomas Saaty, repairs the weight problem by making it relative. The decision is arranged as a hierarchy: goal at the top, criteria beneath it, alternatives at the base. Criteria are compared pairwise against the goal on Saaty's scale - 1 for equal importance to 9 for extreme importance - and alternatives are compared pairwise within each criterion. From each comparison matrix, priorities (weights) are derived as the principal eigenvector, closely approximated by normalising the geometric means of each row. Consistency is measured: with random-consistency benchmarks, the consistency ratio CR should sit under 0.1; above it, the judgments are contradictory and must be revisited before any ranking is trusted.",
              "A worked micro-example selects a battery pack concept against criteria energy density, cost, cycle life and supply risk. Pairwise judgments on the criteria yield weights of roughly 0.45, 0.25, 0.20 and 0.10; pairwise scoring of three concepts within each criterion, followed by weighted aggregation, delivers a ranking with visible reasoning at every step. AHP's strengths: it mixes quantitative and qualitative criteria, exposes inconsistency instead of hiding it, and produces numbers that auditable decisions can cite. Its weaknesses: judgment scales are subjective, and rank reversal - adding an irrelevant alternative can flip the ordering of the others - is a documented criticism. Sensitivity analysis and honest criteria derivation are the defences.",
            ],
            bullets: [
              "Decision analysis: alternatives + criteria-from-requirements + weights + scores + aggregation + sensitivity.",
              "AHP (Saaty): goal -> criteria -> alternatives hierarchy; pairwise comparisons on a 1-9 scale.",
              "Weights derive from each matrix's principal eigenvector - approximated by normalised row geometric means.",
              "Consistency ratio under 0.1, or the judgments are contradictory; revisit the comparisons.",
              "Known criticism: rank reversal - defend with sensitivity analysis on weights and scores.",
            ],
            diagram: {
              kind: "pyramid",
              title: "An AHP hierarchy",
              caption:
                "Pairwise comparisons happen vertically: criteria against the goal, alternatives within each criterion.",
              tiers: [
                { label: "Goal", note: "select the battery pack concept" },
                { label: "Criteria", note: "energy density, cost, cycle life, supply risk" },
                { label: "Sub-criteria (optional)", note: "e.g. cost split: cells + assembly" },
                { label: "Alternatives", note: "concept A, B, C" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "AHP weights from a pairwise comparison matrix (geometric-mean approximation).",
              code: `import math

# Saaty scale: 1 equal, 3 moderate, 5 strong,
#              7 very strong, 9 extreme
# Rows judged against columns: cost vs mass vs risk
C = [
    [1.0, 3.0, 5.0],   # cost
    [1/3, 1.0, 3.0],   # mass
    [1/5, 1/3, 1.0],   # risk
]

def ahp_weights(matrix):
    n = len(matrix)
    geo = [math.prod(row) ** (1.0 / n) for row in matrix]
    total = sum(geo)
    return [g / total for g in geo]

w = ahp_weights(C)
print("weights:", [round(x, 3) for x in w])
# -> [0.637, 0.258, 0.105]: cost dominates, risk trails
# Check: matrix is reciprocal (a[i][j] * a[j][i] = 1)
# and weights sum to 1; then check CR < 0.1 before use.`,
            },
            callout: {
              type: "tip",
              title: "Three checks before you trust AHP",
              body: "Weights sum to one; the matrix is reciprocal (each pair multiplies to 1); and the consistency ratio is stated and under 0.1. The CR line is what separates a systems engineer from a calculator in an exam answer.",
            },
            keyTerms: [
              { term: "AHP", definition: "Analytic hierarchy process: pairwise-comparison method deriving weights and rankings from a hierarchy." },
              { term: "Pairwise comparison", definition: "Judging each pair of elements once on Saaty's 1-9 relative-importance scale." },
              { term: "Consistency ratio", definition: "AHP's measure of contradictory judgment; values under 0.1 are accepted." },
            ],
            examQuestions: [
              {
                q: "Explain the analytic hierarchy process with its hierarchy structure, pairwise scale, weight derivation and consistency check. Work a three-criteria example and state AHP's limitations.",
                marks: 7,
                outline: [
                  "Set the context: decision analysis for multi-criteria selection.",
                  "Draw the hierarchy: goal, criteria, alternatives.",
                  "Present Saaty's 1-9 scale and the reciprocal matrix property.",
                  "Derive weights: eigenvector, approximated by normalised geometric means; show them summing to 1.",
                  "Score alternatives pairwise per criterion and aggregate.",
                  "State the consistency ratio requirement (CR < 0.1) and what to do when it fails.",
                  "Give limitations: subjective scale, rank reversal; defend with sensitivity analysis.",
                ],
              },
              {
                q: "State the endpoints of Saaty's pairwise comparison scale.",
                marks: 2,
              },
              {
                q: "What is rank reversal in AHP and how is it defended against?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Earned value management: measuring program progress",
            body: [
              "Earned value management (EVM) integrates scope, schedule and cost into one measurement system, answering 'where are we really?' with three numbers at each status date. Planned value (PV) is the budgeted cost of the work scheduled to be complete by now - the time-phased baseline. Earned value (EV) is the budgeted cost of the work actually performed: physical progress converted to money at baseline rates using pre-agreed rules of credit (0/100 - full credit at completion; 50/50 - half at start, half at end; percentage complete for measurable work). Actual cost (AC) is what the performed work really cost. The budget at completion (BAC) is the total baseline.",
              "From these come variances and indices. Schedule variance SV = EV - PV and schedule performance index SPI = EV / PV; cost variance CV = EV - AC and cost performance index CPI = EV / AC; an index of 1.00 is on plan and below 1.00 is adverse. Forecasting follows: the estimate at completion, EAC, assumes current efficiency persists - BAC divided by CPI in its common form - with VAC = BAC - EAC the expected overrun, and TCPI the efficiency needed on remaining work to hit a target. Worked case: with BAC 1000, PV 400, EV 320 and AC 400 at the status date, SPI = 0.80 and CPI = 0.80 - twenty percent late and twenty-five percent over - so EAC = 1250 and VAC = -250.",
              "EVM's foundation is the work breakdown structure: control accounts roll up from work packages, each with a budget, a schedule and a rule of credit, so the indices are meaningful exactly where managers can act. Its power is early warning: index trends cross thresholds quarters before the finish line does, while there is still time to crash, re-plan or descope. Its blind spot is equally important: EVM measures effort and money, not technical adequacy - a team can earn every rupee while drifting toward a design that misses its TPMs. Mature programs run EVM and TPM side by side and treat disagreement between them - on-cost but off-performance, or the reverse - as the most informative management signal they produce.",
            ],
            bullets: [
              "Three quantities at each status date: PV (budgeted work scheduled), EV (budgeted work performed), AC (cost incurred).",
              "Rules of credit convert physical progress to earned value: 0/100, 50/50, percentage complete.",
              "Indices: SPI = EV/PV and CPI = EV/AC (1.00 = on plan, below = adverse); variances SV and CV.",
              "Forecasting: EAC = BAC/CPI, VAC = BAC - EAC, TCPI = efficiency needed on remaining work.",
              "EVM measures the program, not the product - pair it with TPM; disagreement between them is a signal.",
            ],
            diagram: {
              kind: "flow",
              title: "EVM in five moves",
              caption:
                "Baseline, earn, compare, forecast, act - repeat every status period.",
              steps: [
                { label: "WBS and control accounts", note: "work packages with budgets" },
                { label: "Baseline PV and BAC", note: "time-phased plan" },
                { label: "Earn credit and record AC", note: "rules of credit" },
                { label: "Compute SPI, CPI, EAC", note: "indices and forecast" },
                { label: "Act on the trend", note: "crash, re-plan, descope" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "A status-date EVM snapshot with the standard indices.",
              code: `# Earned value snapshot (money units: Rs lakh)

BAC = 1000.0    # budget at completion
PV = 400.0      # planned value to date
EV = 320.0      # earned value to date
AC = 400.0      # actual cost to date

SV = EV - PV                 # schedule variance
SPI = EV / PV                # schedule performance index
CV = EV - AC                 # cost variance
CPI = EV / AC                # cost performance index
EAC = BAC / CPI              # estimate at completion
VAC = BAC - EAC              # variance at completion

print(f"SV = {SV:+.0f}  SPI = {SPI:.2f}")   # behind schedule
print(f"CV = {CV:+.0f}  CPI = {CPI:.2f}")   # over cost
print(f"EAC = {EAC:.0f}  VAC = {VAC:+.0f}")

# SPI = 0.80 -> 20% behind schedule
# CPI = 0.80 -> spending 1.25 for every 1.00 earned
# EAC = 1250 -> forecast overrun of 250`,
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "EVM numericals are near-certain. Memorise the six formulas (SV, SPI, CV, CPI, EAC, VAC), always write the formula before substituting, and check that SPI and CPI signs agree with SV and CV - the cross-check catches transposition slips for free.",
            },
            keyTerms: [
              { term: "Earned value", definition: "The budgeted cost of work actually performed, credited by pre-agreed rules." },
              { term: "SPI / CPI", definition: "Schedule and cost performance indices: EV divided by PV and by AC respectively." },
              { term: "EAC", definition: "Estimate at completion; commonly the budget at completion divided by CPI." },
            ],
            examQuestions: [
              {
                q: "Explain earned value management. Define PV, EV, AC and BAC, derive SPI, CPI and EAC, and evaluate a program with BAC 1000, PV 400, EV 320, AC 400.",
                marks: 7,
                outline: [
                  "State EVM's purpose: integrating scope, schedule and cost.",
                  "Define the four base quantities and the rules of credit.",
                  "Derive SV, CV, SPI and CPI with their interpretations.",
                  "Derive EAC = BAC/CPI and VAC = BAC - EAC; mention TCPI.",
                  "Substitute the numbers: SPI 0.80, CPI 0.80, EAC 1250, VAC -250.",
                  "Interpret: twenty percent late; spending 1.25 per rupee earned; forecast overrun 250.",
                  "Close with the TPM pairing: EVM measures the program, not the product.",
                ],
              },
              {
                q: "Define the rule of credit, with the 0/100 and 50/50 examples.",
                marks: 2,
              },
              {
                q: "A program shows SPI 1.05 and CPI 0.85. Interpret both and state one likely management response.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Life cycle cost and industry case studies",
            body: [
              "Life cycle cost (LCC) is the total cost of a system across its whole existence: research and development, production, operation and support - energy, maintenance, spares, overhaul - and disposal or recycling, all assessed on consistent money assumptions (discounting, escalation). Its governing insight is asymmetric: the design process commits most of LCC early. By the end of concept and preliminary design, with only a small fraction of the budget spent, the large majority of lifetime cost is locked in by the architecture, materials and energy choices - while the biggest cheques are written decades later, during operation. Design-to-cost and supportability engineering exist to attack LCC at the moment of leverage, not at the moment of payment.",
              "Three industries show the discipline at three scales. Commercial aircraft: development and certification run to billions, and operation and support over a twenty-five to thirty year service life dominate LCC through fuel, maintenance and fleet availability - so dispatch reliability and fuel burn per seat-kilometre govern every trade, and development runs rigorous certification gates. Spacecraft: after launch there is no repair, no second chance to fix anything, so reliability is bought with redundancy, environmental margins and test-like-you-fly qualification - thermal vacuum, vibration, EMC - reviews are at their strictest, and LCC concentrates in development and the ground segment. Automobile: development amortised across millions of units makes unit cost king, platform and carry-over strategies spread it, ISO 26262 governs functional safety, and warranty statistics feed validation back into design.",
              "The transferable lesson is that SE process scales and reweights rather than changes. All three industries run the same V - needs, requirements, architecture, reviews, integration, verification - but the weighting differs: aircraft optimise support economics, spacecraft optimise single-shot assurance, automobiles optimise unit cost and launch cadence. LCC thinking also changes individual decisions: paying more in development for a sealed-for-life bearing, condition-based maintenance, or a lighter body that saves fuel on every kilometre of the fleet's life is justified only when the life cycle ledger, not the purchase price, is the judge. That ledger - and the discipline of reading it early - is the subject's final argument.",
            ],
            bullets: [
              "LCC = development + production + operation and support + disposal, on consistent money assumptions.",
              "Design commits most of LCC early while most spending happens late - leverage lives at concept and PDR.",
              "Aircraft: dispatch reliability and fuel burn dominate; 25-30 years of support economics govern trades.",
              "Spacecraft: no repair after launch - redundancy, margins, test-like-you-fly; the strictest gates.",
              "Automobile: unit cost is king via platform commonality; ISO 26262 safety; warranty data closes the loop.",
            ],
            table: {
              caption: "Life cycle cost anatomy (indicative shares; the commitment column is the point).",
              headers: ["Phase", "Indicative share of LCC", "LCC committed by phase end"],
              rows: [
                ["Concept and development", "15-25%", "about 70-80%"],
                ["Production and tooling", "25-35%", "about 95%"],
                ["Operation and support", "40-60%", "100% - locked"],
                ["Disposal and recycling", "1-5%", "100%"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Repairable fleets versus one-shot spacecraft",
              caption:
                "Two LCC philosophies: maintain for decades, or be right the first time.",
              left: {
                heading: "Aircraft / automobile (repairable)",
                items: [
                  "Operated, maintained and upgraded for decades",
                  "Reliability buys availability (dispatch rate, uptime)",
                  "Spares, MRO and training networks carry the cost",
                  "Mid-life upgrades and retrofits are normal",
                  "Warranty and fleet data feed back into design",
                ],
              },
              right: {
                heading: "Spacecraft (one-shot)",
                items: [
                  "No repair after launch - no second chance",
                  "Redundancy and design margins carry the risk",
                  "Qualification: test like you fly, fly as tested",
                  "Reviews and configuration control at their strictest",
                  "LCC concentrates in development and ground segment",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The commitment curve",
              body: "'Define LCC and draw the cost-commitment curve' is standard: axes of lifecycle stage and percent, two curves - cumulative spend low then steep, committed cost high then flat - and one sentence on why leverage sits at concept. The figure alone is half the marks.",
            },
            keyTerms: [
              { term: "Life cycle cost", definition: "The total cost of a system from concept to disposal, on consistent money assumptions." },
              { term: "Cost commitment", definition: "The share of LCC made unavoidable by decisions already taken; it dominates early." },
              { term: "Dispatch reliability", definition: "Aviation availability measure: the probability a scheduled flight departs without technical delay." },
            ],
            examQuestions: [
              {
                q: "Define life cycle cost and explain the cost-commitment phenomenon. Compare systems engineering practice in aircraft, spacecraft and automobile programs.",
                marks: 7,
                outline: [
                  "Define LCC and its four components on consistent money assumptions.",
                  "Draw and explain the commitment-versus-spend curve; state the early leverage.",
                  "Aircraft: dispatch reliability, fuel burn per seat-km, 25-30 year support economics, certification gates.",
                  "Spacecraft: no repair after launch; redundancy, margins, test-like-you-fly; strictest reviews.",
                  "Automobile: unit cost via platform commonality; ISO 26262; warranty feedback.",
                  "Synthesise: same V, reweighted centres of gravity.",
                  "Close with one LCC-justified decision: sealed-for-life bearing or lightweight body.",
                ],
              },
              {
                q: "Name the four life cycle cost components.",
                marks: 2,
              },
              {
                q: "Why do spacecraft programs buy reliability with redundancy where car programs buy it with process?",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV ME-703(C) papers lean on definitions applied to examples: the four verification methods, the V-model, the SRR/PDR/CDR ladder, requirement quality, integration strategies and the management numericals (EVM, AHP, risk scores) form the reliable core. Allocate revision roughly by the weights below and keep one fully worked answer ready for each starred topic.",
      ],
      weightedTopics: [
        { topic: "Verification and validation; the four verification methods", weight: "8-12 marks", note: "Define each method with a mechanical example; add the selection trade and IV&V." },
        { topic: "Requirements: elicitation, functional vs non-functional, well-formed requirements", weight: "8-12 marks", note: "Practise rewriting weak requirements into condition + shall + threshold form." },
        { topic: "V-model and lifecycle models (waterfall, spiral, incremental)", weight: "8-10 marks", note: "Draw the V with pairings; know each model's driver and one suited domain." },
        { topic: "Technical reviews: SRR, PDR, CDR and the baselines", weight: "6-10 marks", note: "Memorise the review-baseline-exit-criteria table; it repeats almost every year." },
        { topic: "EVM numericals: PV, EV, AC, SPI, CPI, EAC", weight: "6-8 marks", note: "Six formulas, one worked program; always write the formula before substituting." },
        { topic: "Traceability matrix and requirement allocation", weight: "6-8 marks", note: "Build one EV range chain end-to-end; quote coverage and orphan-requirement ideas." },
        { topic: "Integration strategies, stubs and drivers", weight: "6-8 marks", note: "Compare bottom-up vs top-down; keep the stub/driver distinction straight." },
        { topic: "Risk management and the 5x5 matrix", weight: "4-8 marks", note: "Write register rows with statement, L, C, response, owner." },
        { topic: "Interfaces, ICDs and N2 diagrams", weight: "4-6 marks", note: "Sketch an ICD excerpt and an N2 grid with one dense row." },
        { topic: "TPM, budgets/margins, HALT/HASS, CM, LCC, AHP", weight: "6-10 marks", note: "Short-note bank: one definition, one example and one diagram each." },
      ],
    },
    {
      id: "six-weeks",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, the schedule covers every section twice - once for understanding, once for active recall - and reserves the final week for full papers and warm-hand numericals.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals", tasks: ["System definition, boundary, hierarchy and emergence with car examples", "INCOSE handbook process groups and the technical-process list", "Draw the V-model with pairings; compare spiral and incremental models"] },
        { week: "Week 2", focus: "Unit II - requirements and architecture", tasks: ["Stakeholder classes, ConOps and six elicitation techniques", "Rewrite ten weak requirements; functional vs non-functional families", "Build a traceability chain; functional vs physical architecture; ICD and N2"] },
        { week: "Week 3", focus: "Unit III - design and integration", tasks: ["Morphological box plus Pugh/weighted matrix on one example", "SRR/PDR/CDR table with baselines and exit criteria", "Integration strategies; TRR and the anomaly-fix loop"] },
        { week: "Week 4", focus: "Unit IV - V&V and testing", tasks: ["Verification vs validation; four methods with examples", "Test planning stack; write one procedure page", "HALT vs HASS with the bathtub curve; CM baselines and the CCB"] },
        { week: "Week 5", focus: "Unit V - management", tasks: ["TPM loop and dashboard table; risk register plus 5x5 matrix", "AHP worked example with weights and consistency ratio", "EVM numericals: three programs solved; LCC commitment curve"] },
        { week: "Week 6", focus: "Full revision", tasks: ["Redraw every diagram from memory in one sitting", "Two full papers under exam timing", "Re-solve EVM and AHP numericals cold; review the slips list"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Redraw the V-model, the elicitation cycle and the change-control loop from memory - three diagrams that answer a third of any paper.",
        "Recite the review table: SRR / PDR / CDR -> functional / allocated / product baseline -> one exit criterion each.",
        "Re-solve one EVM program (the SPI 0.80, CPI 0.80 case) and one AHP weight derivation - numericals reward warm hands.",
        "Rehearse the four verification methods with one mechanical example each, in the order inspection, analysis, demonstration, test.",
        "Skim every section's keyTerms and callouts - definitions and exam tips carry the short questions.",
        "Sleep: a rested 7-mark answer beats a tired perfect one. In the morning, review only the slips list below.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall strategy",
      examTips: [
        "Open every long answer with the one-line definition before any example - definition marks are awarded separately from discussion marks.",
        "Draw first, write second: the V-model, N2 diagram, TPM loop, risk matrix and AHP pyramid are expected as diagrams, not paragraphs.",
        "Use tables for comparisons (V vs spiral, bottom-up vs top-down, verification vs validation) - examiners mark rows, and a table stops you from forgetting a row.",
        "In numericals (EVM, AHP, risk scores), write the formula, then substitute, then state the interpretation - 'CPI 0.80 means 1.25 spent per rupee earned' earns the analysis mark.",
        "Time-box: 2-3 mark questions in five minutes, 7-mark questions in fifteen, and keep ten minutes to check that every attempted part has its definition and its diagram.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Confusing verification (built right, against requirements) with validation (right system, against needs) - anchor with the 0-100 time versus buyers-call-it-responsive line.",
        "Swapping stubs and drivers: stubs stand in for missing lower levels (top-down); drivers emulate missing parents (bottom-up).",
        "Writing unverifiable requirements ('user-friendly', 'robust') in answers - always condition + shall + measurable threshold.",
        "Treating HALT as a field-life prediction - HALT discovers margins and weak links; HASS is the 100% production screen run inside those limits.",
        "Computing SPI as AC/PV or EAC as BAC x CPI - indices divide by the denominator named in their expansion, and EAC = BAC / CPI.",
        "Forgetting effectivity when approving a change, or an owner and trigger when writing a risk - both are what make an answer management rather than description.",
      ],
    },
  ],
};
