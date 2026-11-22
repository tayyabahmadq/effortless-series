/**
 * Academics - RGPV 5th-semester subject: IT-503(C) Object Oriented Analysis
 * and Design.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and examiner-style
 * exam questions (7 or 14 marks) with answer outlines.
 */

import type { AcademicSubject } from "./types";

export const it503c: AcademicSubject = {
  id: "it-503-c",
  code: "IT-503(C)",
  title: "Object Oriented Analysis and Design",
  semester: "V Semester",
  program: "RGPV · Information Technology",
  tagline:
    "The complete visual guide to IT-503(C): OO foundations and the Unified Process, static class models, dynamic state models, interaction models from use cases to deployment diagrams, and system design with frameworks, patterns and middleware - every syllabus point paired with a UML artefact you can redraw in the exam hall.",
  description:
    "Five units walk from object-oriented concepts, the OO life cycle, the classic OOAD methodologies and UML, through static modeling with class diagrams - links, associations, multiplicity, association classes, generalization, aggregation and packages - into dynamic modeling with state diagrams, events, nested states, signal generalization and concurrency, then interaction modeling with use cases, sequence, activity, communication, component and deployment diagrams, and finally system and class design with implementation modeling, frameworks, design patterns, OO languages, OO databases and CORBA, COM and DCOM. Every section pairs the concept with a worked artefact, a redrawable diagram, and the questions the paper actually asks.",
  accentColor: "#0ea5e9",
  emoji: "OA",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction",
      summary:
        "Unit I frames the whole subject: what object orientation means, the OO software development life cycle, the themes that give OO models their stability, the division of labour between analysis and design, the classic OOAD methodologies that competed to become UML, the Unified Process that organizes them, and the UML goals and model landscape used in every later unit.",
      chapter: {
        number: "01",
        title: "From Objects to the Unified Process",
        intro:
          "Unit I covers object-oriented concepts, the OO software development life cycle, the OO themes and modeling concepts, the role of analysis and design, the overview of OOAD methodologies with the OO-versus-conventional comparison, the Unified Process, and UML - its goals, building blocks and the families of models used through Units II-V.",
        inOneBreath:
          "Object orientation unites data and behavior in objects that model real-world things. The OO life cycle iterates analysis, design and implementation instead of walking a straight waterfall, and analysis versus design is the what-versus-how division of labour. The Unified Process runs inception, elaboration, construction and transition in use-case-driven, architecture-centric iterations. UML supplies the standard vocabulary - class, state, use case, sequence, activity, component and deployment diagrams - that every later unit speaks.",
        sections: [
          {
            number: "1.1",
            title: "Object orientation - objects, classes and the core ideas",
            body: [
              "Object orientation is a way of thinking about software in terms of objects - runtime entities that bundle state (attributes) with behavior (operations) and communicate only by sending messages. An object is an instance of a class, the template that declares the attributes every instance carries and the operations every instance can perform. A banking system is not modeled as a pile of procedures that share a database; it is modeled as Customer, Account and Transaction objects, each responsible for its own data. The exam definition to memorize: an object has identity (it exists as a distinct thing even when its values match another object), state (its current attribute values) and behavior (its operations).",
              "A worked example fixes the vocabulary. Model a college library: the class Book declares attributes isbn, title and status and operations issue(), return() and reserve(); the object carrying isbn = 978-81-203 and status = issued is one instance of it. Encapsulation hides the status field behind the operations, so no outside code can set status directly - the class guards its own invariants. Abstraction keeps only what matters for the problem: a library Book has no weight attribute even though real books have one. And identity is independent of state: two Book objects with identical attribute values are still two distinct objects, which is why cancelling one reservation does not cancel the other.",
              "The exam question is usually 'explain object-oriented concepts with an example' or 'define object and class and state their differences', and it wants the pillars named with one line each. Abstraction: model only relevant features. Encapsulation: hide data behind operations. Modularity: group related classes into modules with clean interfaces. Hierarchy: order classes by generalization (is-a) and aggregation (part-of). Typing, concurrency and persistence complete the longer list and earn the extra mark when the question says 'all the concepts'. Always close with the library or banking example - an answer with no example reads as half-learned.",
            ],
            keyTerms: [
              { term: "Object", definition: "A runtime instance with identity, state (attribute values) and behavior (operations)." },
              { term: "Class", definition: "The template declaring the attributes and operations shared by all its instances." },
              { term: "Encapsulation", definition: "Hiding data behind operations so the class, not the caller, protects its invariants." },
              { term: "Abstraction", definition: "Modeling only the features relevant to the problem and dropping the rest." },
              { term: "Message passing", definition: "Objects cooperate by invoking each other's operations, never by editing each other's data." },
            ],
            callout: {
              type: "exam",
              title: "Identity beats equality",
              body: "When asked to define an object, name identity, state and behavior in that order and add the sentence 'identity is independent of state' - two accounts with equal balances are still two accounts. Examiners reward that line because it separates an OO definition from a database-record definition.",
            },
            bullets: [
              "An object bundles identity, state and behavior; a class is the template declaring both.",
              "Encapsulation hides attributes behind operations - the class protects its own invariants.",
              "Abstraction keeps only problem-relevant features: a library Book has no weight.",
              "Modularity groups related classes; hierarchy orders them by is-a and part-of.",
              "Objects cooperate by message passing: book.issue(), not a raw status write from outside.",
              "Identity is distinct from state: two equal-valued Account objects are still two objects.",
            ],
            table: {
              caption: "Core OO concepts and their one-line contracts.",
              headers: ["Concept", "What it promises", "Library example"],
              rows: [
                ["Abstraction", "keep only relevant features", "Book carries isbn and status, not weight"],
                ["Encapsulation", "data hidden behind operations", "status changes only via issue() and return()"],
                ["Modularity", "related classes form a unit", "Catalogue groups Book, Member, Loan"],
                ["Hierarchy", "is-a and part-of ordering", "ReferenceBook is-a Book; Library has-a Catalogue"],
                ["Typing", "operations enforced on typed objects", "issue() accepts a Member, not a String"],
                ["Persistence", "objects outlive the process", "Loan records survive a server restart"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Structured view vs object-oriented view",
              caption:
                "The same library system, cut two ways: functions visiting shared data, or objects that own their data.",
              left: {
                heading: "Structured (conventional)",
                items: [
                  "Data structures and functions are separate artifacts",
                  "issueBook() reaches into shared records",
                  "A change to the record layout ripples everywhere",
                  "Reuse means copying functions",
                ],
              },
              right: {
                heading: "Object-oriented",
                items: [
                  "Objects unite data and behavior",
                  "Book guards its own status field",
                  "Changes stay inside the changed class",
                  "Reuse means composing and extending classes",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define an object and a class. Explain abstraction, encapsulation, modularity and hierarchy with a library-system example, and state why object identity is independent of object state.",
                marks: 14,
                outline: [
                  "Object = identity + state (attributes) + behavior (operations); class = the template.",
                  "Library worked example: Book with isbn, title, status and issue()/return()/reserve().",
                  "Abstraction: keep only problem-relevant features; a library Book needs no weight.",
                  "Encapsulation: status is private; only the class's operations may change it.",
                  "Modularity and hierarchy: Catalogue groups related classes; ReferenceBook is-a Book.",
                  "Identity vs state: two equal-valued objects are distinct instances; deleting one does not delete the other.",
                ],
              },
              {
                q: "Differentiate the structured (conventional) approach from the object-oriented approach to software development.",
                marks: 7,
                outline: [
                  "Structured: data structures and functions are separate artifacts.",
                  "OO: objects unite data and behavior behind a stable interface.",
                  "Change impact: structured changes ripple through shared data; OO changes stay local.",
                  "Mapping to the problem: OO mirrors real-world entities (Customer, Account).",
                  "Reuse: structured copies functions; OO composes and extends classes.",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The OO software development life cycle",
            body: [
              "The OO software development life cycle organizes a project into requirements, analysis, design, implementation and testing - but it runs them iteratively and incrementally, not as one straight waterfall pass. Each iteration walks the whole cycle on a subset of the use cases: analysis produces a class model of the problem domain, design turns it into a solution model, implementation codes it, and testing feeds corrections into the next iteration. The cycle's slogan is 'grow the software': early iterations build an architectural skeleton, later ones add subsystems until the product is complete.",
              "Trace one iteration on the ATM system. Requirements fix the use cases - withdraw cash, check balance. Analysis identifies Account, Card and Session classes with their associations; the analysis model contains no design detail. Design adds the PIN-verifier subsystem, decides the Session state machine and assigns operations to classes. Implementation codes the classes; testing exercises the withdrawal scenario end to end. The iteration ends with a running partial system, and the next iteration adds the transfer-funds use case. Notice that every artifact survives into the next iteration - the class model grows, it is not rewritten.",
              "Exams ask for the life cycle's stages and, crucially, why it differs from the classical waterfall. The answer has three moves: name the stages in order with one deliverable each; state that iterations and increments replace the single pass; and explain the payoff - risks (performance, technology) are exposed in early, cheap iterations because a running skeleton exists from week one. Draw the cycle with the feedback arrow from testing back to analysis; a life cycle drawn without the loop loses the very mark that distinguishes OO development from waterfall development.",
            ],
            keyTerms: [
              { term: "Iteration", definition: "One pass through requirements, analysis, design, implementation and testing on a subset of use cases." },
              { term: "Increment", definition: "The runnable slice of functionality an iteration adds to the growing system." },
              { term: "Analysis model", definition: "The domain class model - what the system is about, free of design decisions." },
              { term: "Design model", definition: "The solution model - subsystems, operations and control, still implementation-free." },
              { term: "Waterfall", definition: "The one-pass, stage-by-stage life cycle the OO cycle replaces with iteration." },
            ],
            callout: {
              type: "tip",
              title: "Grow, do not rewrite",
              body: "In viva and in long answers, contrast the OO life cycle with waterfall in one line: waterfall freezes each stage, OO grows the same artifacts iteration by iteration. The class model of iteration three contains the class model of iteration one plus new subsystems - that continuity is the cycle's defining property.",
            },
            bullets: [
              "Stages: requirements -> analysis -> design -> implementation -> testing, then loop.",
              "Iterations walk the whole cycle on a subset of use cases; increments add subsystems.",
              "Analysis produces the domain class model - what the system is.",
              "Design produces the solution model - how it works, still free of code decisions.",
              "A running architectural skeleton exists from the first iteration, exposing risk early.",
              "Artifacts survive iterations: the class model grows, it is not rewritten.",
            ],
            table: {
              caption: "Deliverables across the OO life cycle.",
              headers: ["Stage", "Central question", "Typical deliverable"],
              rows: [
                ["Requirements", "what must the system do?", "use case list and scenarios"],
                ["Analysis", "what objects exist in the problem?", "domain class model, use case realizations"],
                ["Design", "how will the solution work?", "design class model, state and sequence diagrams"],
                ["Implementation", "how is it coded?", "classes in the target language"],
                ["Testing", "does it behave as modeled?", "use-case-driven test cases, defect log"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The OO life cycle as an iteration loop",
              caption: "Each turn delivers a running increment; testing feeds the next turn's analysis.",
              steps: [
                { label: "Requirements", note: "fix the use cases" },
                { label: "Analysis", note: "model the problem" },
                { label: "Design", note: "model the solution" },
                { label: "Implement", note: "code the classes" },
                { label: "Test", note: "exercise the increment" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the phases of the object-oriented software development life cycle. How does iteration make it different from the classical waterfall model?",
                marks: 7,
                outline: [
                  "Stages: requirements, analysis, design, implementation, testing.",
                  "Deliverable per stage: use cases, domain class model, design model, code, test results.",
                  "Iterations run the full cycle on a subset of use cases.",
                  "Waterfall passes each stage once; OO revisits stages every iteration.",
                  "Early skeleton exposes risk cheaply; artifacts grow continuously instead of being rewritten.",
                ],
              },
              {
                q: "Describe one complete iteration of OO development for an ATM system, naming the artifact produced at each stage.",
                marks: 7,
                outline: [
                  "Requirements: fix the withdrawal, balance and transfer use cases.",
                  "Analysis: Account, Card and Session classes with their associations.",
                  "Design: PIN-verifier subsystem, Session state machine, operation assignment.",
                  "Implementation: coded classes for the increment.",
                  "Testing: run withdrawal end to end; defects feed the next iteration.",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "OO themes and modeling concepts",
            body: [
              "The classic OO themes explain why object-oriented models stay stable while function-based designs churn. Abstraction: a model keeps the essential features and drops the rest. Encapsulation: data and the operations on it live together, so the separate data-structure and algorithm concerns never arise. Combined data and behavior: no module reaches into another's data. Sharing: inheritance shares structure among classes and polymorphism shares behavior across them. Emphasis on the essence of an object: OO focuses on what an object is rather than on how it is used. Synergy: the themes reinforce each other - encapsulation makes abstraction enforceable, sharing amplifies both. Name the themes and the theme question is half answered.",
              "A model is an abstraction of a system built to answer questions before the system exists. Modeling has two classic purposes: test a design physically or on paper before committing resources, and communicate with customers who cannot read code. UML models come in two complementary kinds. Static (structural) models show what exists - classes, their attributes and their associations - and change only when the problem changes. Dynamic (behavioral) models show what happens over time - states, events and message flows. The two answer different questions: the class model says a Booking can exist; the state model says how a Booking moves from reserved to issued to returned.",
              "The exam pairs the two ideas: 'explain the OO themes' and 'what is modeling and why do we model?'. Structure the answer in two halves. For themes, give the six with one sentence each and a shared running example - the library or the ATM. For modeling, give the definition, the two purposes, and the static-versus-dynamic split with one diagram name for each: class diagram for static, state diagram for dynamic. Close with the sentence examiners look for: 'a model is a simplification built at the right level of abstraction for its audience' - it shows you know models are tools, not pictures.",
            ],
            keyTerms: [
              { term: "Model", definition: "An abstraction of a system built to answer questions before the system exists." },
              { term: "Static model", definition: "Describes structure - classes, associations - that changes only when the problem changes." },
              { term: "Dynamic model", definition: "Describes behavior over time - states, events and message flows." },
              { term: "OO theme", definition: "One of the recurring principles - abstraction, encapsulation, sharing - that make OO designs stable." },
              { term: "Sharing", definition: "Reuse through inheritance (structure) and polymorphism (behavior)." },
            ],
            callout: {
              type: "exam",
              title: "Static vs dynamic is the safe split",
              body: "When a question says 'overview of different models', give the static-versus-dynamic classification and place one diagram in each bucket: class and object diagrams static; state, activity and interaction diagrams dynamic; component and deployment diagrams physical. That three-line classification is the expected skeleton of the answer.",
            },
            bullets: [
              "Six OO themes: abstraction, encapsulation, combined data and behavior, sharing, emphasis on essence, synergy.",
              "Sharing works two ways: inheritance shares structure, polymorphism shares behavior.",
              "A model is an abstraction built to answer questions before the system exists.",
              "Purpose one: test the design before building; purpose two: communicate with non-programmers.",
              "Static models describe structure (class, object diagrams); dynamic models describe behavior (state, activity).",
              "Choose the level of abstraction for the audience - a customer model hides attributes a designer model shows.",
            ],
            table: {
              caption: "The OO themes and the questions they answer.",
              headers: ["Theme", "One-line contract", "ATM example"],
              rows: [
                ["Abstraction", "keep essentials, drop the rest", "Account models balance, not the machine's steel"],
                ["Encapsulation", "data and operations live together", "debit() is the only way balance changes"],
                ["Combined data + behavior", "no module touches another's data", "the receipt printer never edits accounts"],
                ["Sharing", "inheritance and polymorphism", "SavingsAccount and CurrentAccount share Account"],
                ["Emphasis on essence", "what an object is, not how it is used", "Card is a Card whether or not a session uses it"],
                ["Synergy", "the themes reinforce each other", "encapsulation makes abstraction enforceable"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Three levels of abstraction in one project",
              caption: "Each tier answers a different question; a model drawn at the wrong level confuses its audience.",
              tiers: [
                { label: "Analysis model", note: "what the system is - domain classes, no design detail" },
                { label: "Design model", note: "logical how - subsystems, operations, state machines" },
                { label: "Implementation model", note: "physical how - code, schemas, deployments" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the OO themes - abstraction, encapsulation, combined data and behavior, sharing, emphasis on essence and synergy - with one example of each.",
                marks: 7,
                outline: [
                  "Abstraction: model only essentials; Account carries balance, not machine steel.",
                  "Encapsulation: debit() is the sole path to the balance.",
                  "Combined data and behavior: no module edits another's data.",
                  "Sharing: SavingsAccount and CurrentAccount inherit Account; polymorphic withdraw().",
                  "Emphasis on essence and synergy: model the object, not its use; the themes reinforce one another.",
                ],
              },
              {
                q: "What is a model? Explain the purpose of modeling in software development and distinguish static (structural) models from dynamic (behavioral) models with the corresponding UML diagrams.",
                marks: 14,
                outline: [
                  "Definition: a model is an abstraction of a system built to answer questions early.",
                  "Purpose one: test the design physically or on paper before committing resources.",
                  "Purpose two: communicate with customers and teammates who cannot read code.",
                  "Static models: structure - class and object diagrams; they change with the problem.",
                  "Dynamic models: behavior over time - state, activity, sequence diagrams.",
                  "Worked pairing: the class model says Booking exists; the state model says how it moves from reserved to issued to returned.",
                  "Physical models close the set: component and deployment diagrams.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "The role of analysis and design in software development",
            body: [
              "Analysis and design are the two modeling stages between requirements and code, and confusing them is the classic beginner error. Analysis builds a model of the problem domain: it discovers the classes the world already contains - Customer, Account, Loan - and the requirements they must satisfy, phrased in the customer's vocabulary. Analysis deliberately contains no solution decisions: no hash maps, no user-interface widgets, no database tables. The test for a genuine analysis class is simple: would this class exist even if the system were built by a different team with different technology?",
              "Design builds a model of the solution: it takes the analysis classes and decides how the system will realize them - which subsystem owns which class, which operations each class gains, how associations become navigable references, how the state machines drive control. Design is still implementation-free, but it is solution-shaped: it names the PIN-verifier subsystem, allocates Account to the persistence layer, and draws the sequence diagrams that realize each use case. Implementation then translates the design almost mechanically. The cleaner the boundary, the cheaper the change: a requirement change edits the analysis model first and only then ripples into design and code.",
              "The exam question is 'explain the role of analysis and design in software development', and it wants the division of labour in one table: analysis = what, domain vocabulary, customer-oriented, technology-free; design = how, solution vocabulary, developer-oriented, technology-shaped but not technology-committed. Add the deliverables: analysis produces the domain class model and use case realizations; design produces the design class model, state diagrams and sequence diagrams. End with the traceability sentence: every design artifact should point back to an analysis artifact, and every analysis class should appear somewhere in design - gaps in that chain are where projects fail.",
            ],
            keyTerms: [
              { term: "Analysis", definition: "Modeling the problem domain - what the system must do - in the customer's vocabulary." },
              { term: "Design", definition: "Modeling the solution - how the system will do it - shaped by technology but not committed to it." },
              { term: "Domain model", definition: "The analysis class model of the problem's own classes and associations." },
              { term: "Use case realization", definition: "The set of interaction diagrams showing how classes cooperate to deliver one use case." },
              { term: "Traceability", definition: "The chain from requirement to analysis class to design class to code - no gaps." },
            ],
            callout: {
              type: "warning",
              title: "The 'we already know the design' trap",
              body: "Teams that start coding from requirements skip analysis and bury domain decisions in code, where a requirement change costs a rewrite. The cheapest place to fix a mistake is the analysis model, the dearest is production code - that cost gradient is the entire justification for the two modeling stages.",
            },
            bullets: [
              "Analysis = what: model the problem domain in the customer's vocabulary.",
              "Design = how: shape the solution - subsystems, operations, control flow.",
              "Analysis classes are technology-free: Customer exists regardless of Java or C#.",
              "Design classes are solution-shaped: subsystems, visibility, navigable associations.",
              "Deliverables: analysis - domain class model; design - design class model, state and sequence diagrams.",
              "Traceability: every analysis class must surface in design, or a requirement was lost.",
            ],
            table: {
              caption: "Analysis vs design - the division of labour.",
              headers: ["Aspect", "Analysis", "Design"],
              rows: [
                ["Central question", "what must the system do?", "how will it do it?"],
                ["Vocabulary", "the customer's domain", "the developer's solution"],
                ["Class flavour", "Account, Loan, Customer", "AccountDB, PINVerifier, TransactionManager"],
                ["Decisions made", "classes, associations, requirements", "subsystems, operations, control, data storage"],
                ["Artifacts", "domain class model, use case realizations", "design class model, state and sequence diagrams"],
                ["Technology content", "none", "shaped by it, not committed to it"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From requirements to running code",
              caption: "Each arrow adds one layer of commitment; skipping a stage pushes its decisions into code where they cost most.",
              steps: [
                { label: "Requirements", note: "use cases and scenarios" },
                { label: "Analysis", note: "domain class model - what" },
                { label: "Design", note: "solution model - how (logical)" },
                { label: "Implementation", note: "code - how (physical)" },
                { label: "Testing", note: "checked against the use cases" },
              ],
            },
            examQuestions: [
              {
                q: "Distinguish analysis from design in object-oriented software development, listing the deliverables of each.",
                marks: 7,
                outline: [
                  "Analysis asks what; design asks how.",
                  "Analysis vocabulary is the customer's; design vocabulary is the developer's.",
                  "Analysis classes are technology-free (Customer, Loan); design classes are solution-shaped (AccountDB).",
                  "Analysis deliverable: domain class model plus use case realizations.",
                  "Design deliverable: design class model, state diagrams, sequence diagrams.",
                ],
              },
              {
                q: "Why should the analysis model contain no design decisions? Illustrate with an example where mixing them causes rework.",
                marks: 7,
                outline: [
                  "Analysis must survive technology change; design decisions freeze technology.",
                  "Example: putting a database table into the analysis class model.",
                  "A change of DBMS then invalidates the 'analysis' model, not just the design.",
                  "Clean separation lets requirement changes be assessed on the domain model first.",
                  "Traceability chain: requirement -> analysis class -> design class -> code.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "OOAD methodologies and the OO vs conventional approach",
            body: [
              "Before UML unified them, several methodologies competed, and their names still appear in exam questions. Rumbaugh's OMT (Object Modeling Technique) built three models - object, dynamic and functional - and its notation became the backbone of UML. Booch's method emphasized iterative, architecture-first development with a rich class-and-object notation. Jacobson's OOSE (Object-Oriented Software Engineering) introduced use cases as the driving artifact. Wirfs-Brock's responsibility-driven design (RDD) replaced data-centric thinking with class responsibilities captured on CRC cards. Coad and Yourdon offered a lightweight five-activity method, and Shlaer-Mellor pioneered information modeling with lifecycle state machines.",
              "Watch the methodologies converge on one problem: model the library. OMT draws the object model (Book, Member, Loan), the dynamic model (a Loan state machine) and a functional model (data flow of the issue process). Booch iterates on the class diagram of the catalogue subsystem. OOSE starts from the use case 'issue a book' and derives the objects that realize it. RDD hands out index cards - Book: 'knows its status, responds to issue and return' - and rehearses the scenario by moving the cards across a table. Same system, four lenses; UML absorbed the notations and kept the strengths.",
              "The comparison question has a standard shape: 'differentiate the OO approach from the conventional approach'. Answer with five contrasts: conventional development decomposes by function while OO decomposes by objects; data and procedures are separate in conventional code and united in objects; conventional systems map poorly onto the real world while OO models mirror it; change is expensive in function-oriented code because shared data couples modules, and local in OO code because encapsulation contains it; reuse means copying functions conventionally but inheriting and composing classes in OO. Then name the methodologies with one contribution each - that list converts a generic answer into a syllabus answer.",
            ],
            keyTerms: [
              { term: "OMT", definition: "Rumbaugh's Object Modeling Technique - object, dynamic and functional models; the notation seed of UML." },
              { term: "OOSE", definition: "Jacobson's method, which made use cases the driving artifact of analysis and design." },
              { term: "RDD", definition: "Wirfs-Brock's responsibility-driven design - classes defined by responsibilities, rehearsed on CRC cards." },
              { term: "CRC card", definition: "Class-Responsibility-Collaboration index card used to role-play scenarios in design." },
              { term: "Functional decomposition", definition: "The conventional strategy of splitting systems into procedures - the practice OO replaced." },
            ],
            callout: {
              type: "exam",
              title: "The methodologies became UML",
              body: "If the question says 'overview of various OOAD methodologies', close with the convergence sentence: UML merged the best notations - OMT's class diagrams, Booch's iteration discipline, Jacobson's use cases - into one language. That closing line shows why the syllabus lists the methodologies at all.",
            },
            bullets: [
              "OMT (Rumbaugh): object + dynamic + functional models; notation seed of UML.",
              "Booch: iterative, architecture-first development with dense class and object notation.",
              "OOSE (Jacobson): use cases drive analysis, design and testing.",
              "RDD (Wirfs-Brock): responsibilities on CRC cards instead of data-centric design.",
              "Coad/Yourdon and Shlaer-Mellor: lightweight five-activity method; information models with lifecycles.",
              "OO vs conventional: objects vs functions, united vs separate data, reuse by inheritance vs copying.",
            ],
            table: {
              caption: "The classic OOAD methodologies and their signatures.",
              headers: ["Methodology", "Signature idea", "Artifact to remember"],
              rows: [
                ["OMT - Rumbaugh", "three complementary models", "object / dynamic / functional diagrams"],
                ["Booch method", "architecture-centric iteration", "class and object diagrams"],
                ["OOSE - Jacobson", "use cases drive everything", "use case model and realizations"],
                ["RDD - Wirfs-Brock", "responsibility-driven design", "CRC cards"],
                ["Coad/Yourdon", "five analysis-design activities", "class and service charts"],
                ["Shlaer-Mellor", "information model + lifecycles", "entity models with state machines"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Conventional vs object-oriented development",
              caption: "The same ATM requirement, decomposed two ways.",
              left: {
                heading: "Conventional (function-oriented)",
                items: [
                  "Decompose by functions: verify-pin, debit-account, print-slip",
                  "Data lives in shared structures the functions visit",
                  "Real-world mapping is weak - accounts become files",
                  "A schema change ripples through every function",
                ],
              },
              right: {
                heading: "Object-oriented",
                items: [
                  "Decompose by objects: Account, Session, ReceiptPrinter",
                  "Each object owns its data and operations",
                  "Real-world mapping is direct - the model mirrors the bank",
                  "Encapsulation contains change; inheritance reuses it",
                ],
              },
            },
            examQuestions: [
              {
                q: "Write short notes on the major OOAD methodologies: OMT, Booch, OOSE and responsibility-driven design.",
                marks: 7,
                outline: [
                  "OMT: object, dynamic and functional models; Rumbaugh's notation fed UML.",
                  "Booch: iterative, architecture-first development with class and object diagrams.",
                  "OOSE: Jacobson's use cases drive analysis, design and testing.",
                  "RDD: responsibilities and collaborations rehearsed on CRC cards.",
                  "Convergence: UML absorbed the best of each notation and discipline.",
                ],
              },
              {
                q: "Compare the object-oriented approach with the conventional (structured) approach to software development, and explain why OO systems adapt better to change.",
                marks: 14,
                outline: [
                  "Decomposition unit: functions vs objects.",
                  "Data placement: shared structures vs encapsulated attributes.",
                  "Real-world mapping: weak vs direct - the bank model mirrors the bank.",
                  "Change impact: ripple through shared data vs local under encapsulation.",
                  "Reuse: copied functions vs inheritance and composition.",
                  "Worked example: adding a new account type costs new functions everywhere conventionally; one subclass in OO.",
                  "Traceability: OO keeps the requirement-to-object mapping visible.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "The Unified Process of software development",
            body: [
              "The Unified Process (UP) is the use-case-driven, architecture-centric, iterative and incremental process that UML was designed to serve. It divides project time into four phases: inception (scope the product, build the business case), elaboration (attack the risky core - build the architecture through the most critical use cases), construction (flesh out the remaining use cases in successive increments) and transition (beta, deploy, hand over). Each phase contains iterations, and every iteration walks the requirements, analysis, design, implementation and test workflows. A phase ends at a milestone where the project decides to continue, re-plan or stop.",
              "Run the library system through UP. Inception (two weeks): the vision statement names members, catalogue and loans, and the business case estimates cost. Elaboration (six weeks): the loan and reservation use cases are realized in sequence diagrams, the domain class model stabilizes, and a skeleton system runs the riskiest flows end to end - this phase kills the architecture risk. Construction (ten weeks): iterations add the cataloguing, notification and reporting use cases as working increments. Transition (two weeks): beta at one branch, data migration from the old register, training, deployment. At each milestone the risk list, not the calendar, decides what the next iteration attacks.",
              "Exam answers on UP have a two-part skeleton. Part one: the four phases in order with the milestone artifact of each - vision (inception), baseline architecture (elaboration), beta-capable system (construction), released product (transition). Part two: the three adjectives - use-case driven (use cases size and steer the iterations), architecture-centric (an executable skeleton proves the architecture early), iterative and incremental (each iteration delivers a runnable partial system, never a document-only stage). Draw the classic grid - phases across, workflows down, effort shifting from analysis in inception to testing in transition - and the answer is complete.",
            ],
            keyTerms: [
              { term: "Inception", definition: "UP phase that scopes the product and builds the business case; ends with the vision." },
              { term: "Elaboration", definition: "UP phase that retires the architecture risk by building the skeleton through critical use cases." },
              { term: "Construction", definition: "UP phase that builds the remaining use cases as runnable increments." },
              { term: "Transition", definition: "UP phase of beta, migration, training and deployment; ends with the release." },
              { term: "Milestone", definition: "The decision point ending each phase, judged by an artifact, not by the calendar." },
            ],
            callout: {
              type: "tip",
              title: "Elaboration is where projects are won",
              body: "The non-obvious exam point: elaboration is not 'more analysis' - it is the phase that builds the executable skeleton and retires the riskiest architecture decisions while change is still cheap. Cite the architecture-baseline milestone and you distinguish UP from generic iterative development.",
            },
            bullets: [
              "Four phases: inception, elaboration, construction, transition.",
              "Milestone artifacts: vision, architecture baseline, beta release, final release.",
              "Use-case driven: use cases size, plan and validate every iteration.",
              "Architecture-centric: an executable skeleton proves the design before mass construction.",
              "Iterative and incremental: every iteration ends with a running partial system.",
              "Workflows (requirements, analysis, design, implementation, test) run inside every phase.",
            ],
            table: {
              caption: "Unified Process phases and their milestones.",
              headers: ["Phase", "Focus", "Milestone artifact"],
              rows: [
                ["Inception", "scope, business case, key risks", "vision document"],
                ["Elaboration", "attack the risky core, prove the architecture", "architecture baseline + executable skeleton"],
                ["Construction", "build remaining use cases in increments", "beta-capable system"],
                ["Transition", "beta, migration, training, deployment", "released product"],
                ["(every phase)", "iterations run all workflows", "updated models and increments"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The four Unified Process phases",
              caption: "Phases are not waterfall stages - workflows run inside every phase; the emphasis shifts as the project matures.",
              stages: [
                { label: "Inception", note: "vision + business case" },
                { label: "Elaboration", note: "architecture baseline, risk retired" },
                { label: "Construction", note: "incremental builds of use cases" },
                { label: "Transition", note: "beta, deploy, hand over" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the four phases of the Unified Process with the milestone artifact that ends each phase.",
                marks: 7,
                outline: [
                  "Inception: scope and business case; ends with the vision document.",
                  "Elaboration: architecture baseline and executable skeleton retire the core risk.",
                  "Construction: remaining use cases built as increments; beta-capable system.",
                  "Transition: beta testing, migration, deployment; released product.",
                  "Iterations and workflows run inside every phase.",
                ],
              },
              {
                q: "State and explain the three adjectives that define the Unified Process.",
                marks: 7,
                outline: [
                  "Use-case driven: use cases size and steer the iterations.",
                  "Architecture-centric: a skeleton proves the architecture early.",
                  "Iterative: every iteration runs requirements through test.",
                  "Incremental: each iteration adds a runnable slice.",
                  "Contrast: running software, not documents, is the progress measure.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "UML - goals, building blocks and the model landscape",
            body: [
              "UML - the Unified Modeling Language - is the standard visual language for specifying, visualizing and documenting the artifacts of object-oriented systems. Its goals, worth quoting on any definition question: provide a ready-to-use, expressive visual modeling language so users can exchange models unambiguously; provide extensibility mechanisms (stereotypes, tagged values, constraints) so new domains are covered without changing the core; be independent of particular programming languages and development processes; rest on a formal metamodel so tools can share models; and support higher-level concepts such as collaborations, frameworks and patterns.",
              "UML's building blocks are things, relationships and diagrams. Things are structural (class, interface, component, node), behavioral (interaction, state machine) and grouping (package). Relationships tie them: association, generalization, dependency, realization. Diagrams arrange the things: class and object diagrams for static structure; use case, sequence, communication, state and activity diagrams for behavior; component and deployment diagrams for the physical system. Worked example - model a withdrawal: the class diagram says Account and Session exist; the use case diagram says who withdraws; the sequence diagram shows the messages; the state diagram shows a Session's life; the deployment diagram shows where the components run. Five diagrams, one system, one vocabulary.",
              "The exam asks 'what are the goals of UML?' and 'give an overview of the different UML models'. The goals answer needs four or five bullet lines from the list above; the overview answer needs the three-way classification - static (structural), dynamic (behavioral) and physical (architectural) - with at least one diagram name in each. Add the building-block triad (things, relationships, diagrams) and the sentence that closes the unit: UML is a language, not a method - it tells you how to draw, while the Unified Process tells you when.",
            ],
            keyTerms: [
              { term: "UML", definition: "The standard visual language for specifying, visualizing and documenting OO systems." },
              { term: "Stereotype", definition: "An extensibility mechanism («extend»-style label) that adapts UML to new domains without changing the core." },
              { term: "Metamodel", definition: "UML's formal definition of itself - the basis that lets tools exchange models." },
              { term: "Building blocks", definition: "Things, relationships and diagrams - the three kinds of element every UML model is made of." },
              { term: "Structural vs behavioral", definition: "The first classification of UML diagrams: what exists versus what happens." },
            ],
            callout: {
              type: "exam",
              title: "A language, not a method",
              body: "Definition questions end with this sentence: UML standardizes the notation while the process (UP) standardizes the order of work. Examiners include it in the mark scheme because students routinely conflate the language with the process.",
            },
            bullets: [
              "UML is a modeling language, not a process - UP supplies the when, UML the how.",
              "Building blocks: things, relationships, diagrams.",
              "Extensibility: stereotypes, tagged values and constraints adapt UML to new domains.",
              "Static structure: class and object diagrams.",
              "Dynamic behavior: use case, sequence, communication, state and activity diagrams.",
              "Physical architecture: component and deployment diagrams.",
            ],
            table: {
              caption: "The UML diagram landscape used in this subject.",
              headers: ["Diagram", "Kind", "Question it answers", "Unit"],
              rows: [
                ["Class / object", "static", "what classes and objects exist, and how do they relate?", "II"],
                ["State machine", "dynamic", "how does one object's life unfold over events?", "III"],
                ["Use case", "behavioral", "who uses the system, and for what?", "IV"],
                ["Sequence / communication", "interaction", "how do objects exchange messages?", "IV"],
                ["Activity", "behavioral", "how does work flow across actors and objects?", "IV"],
                ["Component / deployment", "architectural", "how is the system organized and deployed?", "IV"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the right UML diagram",
              caption: "One question at a time: what must this diagram capture?",
              start: "What must the diagram capture?",
              branches: [
                { label: "Static structure of classes", outcome: "class diagram (Unit II) - classes, associations, multiplicity", good: true },
                { label: "One object's event-driven life", outcome: "state machine diagram (Unit III) - states, transitions, guards", good: true },
                { label: "Who uses the system; how objects talk", outcome: "use case, sequence and communication diagrams (Unit IV)", good: true },
                { label: "Physical organization", outcome: "component and deployment diagrams (Unit IV)", good: true },
              ],
            },
            examQuestions: [
              {
                q: "What is UML? State the major goals that guided its design.",
                marks: 7,
                outline: [
                  "Definition: standard visual language for specifying, visualizing and documenting OO systems.",
                  "Ready-to-use, expressive notation for unambiguous model exchange.",
                  "Extensibility via stereotypes, tagged values and constraints.",
                  "Independent of programming languages and development processes.",
                  "Formal metamodel basis; supports frameworks, patterns and collaborations.",
                ],
              },
              {
                q: "Give an overview of the building blocks of UML and classify the UML diagrams, naming at least one diagram of each kind with the question it answers.",
                marks: 14,
                outline: [
                  "Building blocks: things (structural, behavioral, grouping), relationships, diagrams.",
                  "Relationships: association, generalization, dependency, realization.",
                  "Static/structural: class and object diagrams - what exists.",
                  "Behavioral: use case, state, activity - what happens.",
                  "Interaction: sequence and communication - message exchange over time.",
                  "Architectural: component and deployment - the physical system.",
                  "Worked withdrawal example: five diagrams describing one use case.",
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
      title: "Static Modeling using Class Diagrams",
      summary:
        "Unit II is the static heart of the subject: objects and classes at the instance and class level, links and associations with multiplicities, ternary and recursive associations, association classes that carry link data, generalization and inheritance including multiple inheritance, aggregation versus composition, abstract classes and packages.",
      chapter: {
        number: "02",
        title: "Classes and Their Relationships",
        intro:
          "Unit II covers object and class concepts, links and associations, multiplicity, ternary and recursive associations, association classes, generalization and inheritance with multiple inheritance, aggregation and composition, abstract classes, and packages.",
        inOneBreath:
          "A link is one connection among objects and an association is the class-level description of a group of such links, with multiplicity read at the far end of each line. Some facts genuinely involve three classes (a ternary diamond) or one class twice (a recursive association with role names), and link-level data becomes an association class on a dashed line. Generalization is is-a with the hollow triangle - including multiple inheritance and its diamond problem - while aggregation and composition are has-a, distinguished by whether parts die with the whole. Abstract classes define protocols without instances; packages group classes and make layering visible.",
        sections: [
          {
            number: "2.1",
            title: "Objects, classes, links and associations",
            body: [
              "A class is a description: it declares the attributes every instance carries and the operations every instance can perform. An object is an instance of a class at runtime, with its own identity and its own attribute values. In the class model of a library, Book is a class; the physical copy with isbn = 978-81-203 and status = issued is an object. The same distinction repeats one level down for relationships: a link is a connection among specific objects (this Member is linked to that Loan), while an association is the class-level description of a group of links with the same structure and semantics - 'Member borrows Book'.",
              "Draw the pair of diagrams the exam expects. Class level: Member -[borrows]-> Book, an association with a name and multiplicities. Instance level (an object diagram): member M-42 linked to loan L-199. Every link is an instance of exactly one association, just as every object is an instance of exactly one class. Associations can connect more than two classes (a ternary diamond) and a class can be associated with itself (Employee supervises Employee). Attributes belong to classes; information that belongs to the relationship itself - the date a Member borrowed a Book - belongs to the association, and section 2.4 shows where to put it.",
              "The exam question is 'distinguish between link and association' or 'explain objects and classes with their relationships'. Structure: define class and object with the identity-state-behavior triple; define association and link and state the instantiation sentence - link : association : : object : class; draw both levels for one example. The mark-stealing line: 'an association without multiplicity is only half a model' - multiplicities are the next section, but naming them here shows the examiner the concepts connect.",
            ],
            keyTerms: [
              { term: "Class", definition: "The description of a set of instances - attributes plus operations." },
              { term: "Object", definition: "A runtime instance of a class with its own identity and state." },
              { term: "Link", definition: "A connection among specific object instances." },
              { term: "Association", definition: "The class-level description of a group of links with common structure and semantics." },
              { term: "Object diagram", definition: "A snapshot of instances and their links at one moment." },
            ],
            callout: {
              type: "warning",
              title: "Do not duplicate relationships",
              body: "Beginners draw both 'Member borrows Book' and 'Book is borrowed by Member' as two associations. One association with a name and multiplicities covers both readings - a second line doubles maintenance and loses the diagram mark.",
            },
            bullets: [
              "Class = description (attributes + operations); object = instance with identity and state.",
              "Link = one connection among specific objects; association = the group's class-level description.",
              "Instance sentence: link : association : : object : class.",
              "Association names read naturally in both directions: Member borrows Book; Book is borrowed by Member.",
              "Associations may be binary, ternary (diamond) or recursive (a class related to itself).",
              "Relationship-level data (borrow date) is not an attribute of either class - it belongs to the association.",
            ],
            table: {
              caption: "Instance level vs class level in one table.",
              headers: ["Concept", "Lives at", "Library example"],
              rows: [
                ["Object", "runtime instance", "the copy with isbn 978-81-203"],
                ["Class", "the template", "Book with isbn, title, status"],
                ["Link", "runtime connection", "member M-42 linked to loan L-199"],
                ["Association", "relationship template", "Member borrows Book, multiplicities at both ends"],
                ["Ternary association", "three classes, one diamond", "Member - Book - ReserveDesk"],
                ["Recursive association", "one class, two roles", "Member refers Member"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Link vs association",
              caption: "The instance picture and the class picture - the same relationship drawn twice.",
              left: {
                heading: "Link (instance level)",
                items: [
                  "A connection among specific objects",
                  "member M-42 is linked to loan L-199",
                  "Drawn in object diagrams",
                  "Exists only while the objects exist",
                ],
              },
              right: {
                heading: "Association (class level)",
                items: [
                  "The description of a group of similar links",
                  "Member borrows Book, with multiplicities",
                  "Drawn in class diagrams",
                  "Exists as long as the design exists",
                ],
              },
            },
            examQuestions: [
              {
                q: "Distinguish between a link and an association with an example, and state the relationship between the object-class pair and the link-association pair.",
                marks: 7,
                outline: [
                  "Class declares attributes and operations; object is an instance with identity and state.",
                  "Association is the class-level template of a relationship; link is one instance of it.",
                  "Sentence: link : association : : object : class.",
                  "Example: Member borrows Book (association); M-42 linked to L-199 (link).",
                  "Associations can be binary, ternary or recursive; links mirror that structure.",
                ],
              },
              {
                q: "Explain the object and class concepts with the identity-state-behavior view, and draw the class and object diagrams for a small library scenario.",
                marks: 7,
                outline: [
                  "Identity: the object exists distinctly even when its values match another's.",
                  "State: current attribute values; behavior: the operations.",
                  "Class diagram: Book and Member classes with the borrows association.",
                  "Object diagram: one Member object linked to one Book object.",
                  "Both levels are needed - the class model describes, the object model demonstrates.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Multiplicity - how many objects participate",
            body: [
              "Multiplicity states how many objects of one class may be linked to one object of the other class across an association. The notation sits at the far end of the association line: 'Company 1 - 1..* Employee' reads 'one Company employs one or more Employees'. The standard notations are exactly 1 (mandatory, single), 0..1 (optional, at most one), 0..* or * (optional, many) and 1..* (mandatory, at least one); arbitrary ranges like 2..6 and sets like 3, 5 are legal. A multiplicity of 1 at both ends means a one-to-one association; 1 against 1..* is one-to-many; * against * is many-to-many.",
              "Model the library and speak every end aloud. Member 1 borrows 0..* Loan - a member may have no loans or many. Loan 1 carries exactly 1 Copy - every loan is for one copy. Member 0..* reserves 0..* Book - many-to-many, which is why the reservation needs an association class in section 2.4. Read the sentence at both ends to check it against the business rule: 'a book is borrowed by at most one active loan' - if the librarian says a copy can sit unloaned, the Loan end must drop to 0..1, and the diagram has just caught a real requirement change.",
              "Exam questions either ask for the multiplicity notations with meanings (a table answer) or hand you a scenario and ask you to place the multiplicities. The procedure that earns marks: write the association name as an English sentence, underline the quantity words ('a member may borrow many books; a book is borrowed by at most one member'), and place each quantity at the opposite end of the line. Then justify one mandatory multiplicity (1..*) with a business reason - 'every loan must be for a real copy' - because unjustified multiplicities read as decoration.",
            ],
            keyTerms: [
              { term: "Multiplicity", definition: "How many objects of one class may be linked to one object of the other across an association." },
              { term: "One-to-many", definition: "1 at one end, 1..* at the other - one Company employs many Employees." },
              { term: "Many-to-many", definition: "* against * - Members reserve many Books; Books reserved by many Members." },
              { term: "Mandatory end", definition: "A multiplicity starting at 1 (1 or 1..*) - the link cannot exist without a partner." },
              { term: "Association end", definition: "One side of an association line, carrying a multiplicity and often a role name." },
            ],
            callout: {
              type: "exam",
              title: "Multiplicity direction is a marks trap",
              body: "The most common diagram error: writing the multiplicity at the near end instead of the far end. 'Company employs employees' puts 1..* on the Employee end of the line - one company, many employees. Practise reading aloud from the diagram until the direction is reflex.",
            },
            bullets: [
              "Multiplicity is written at the far end: Company 1 - 1..* Employee.",
              "Notations: 1, 0..1, 0..* (or *), 1..*, and arbitrary ranges 2..6 or sets 3, 5.",
              "One-to-one: 1 and 1; one-to-many: 1 and 1..*; many-to-many: * and *.",
              "Read the English sentence first, then place quantities at the opposite ends.",
              "Justify mandatory ends (1..*) with a business rule - 'every loan is for a real copy'.",
              "Wrong multiplicity = caught requirement: 'a copy sits unloaned' turns 1 into 0..1.",
            ],
            table: {
              caption: "Multiplicity notations and their readings.",
              headers: ["Notation", "Meaning", "Library reading"],
              rows: [
                ["1", "exactly one", "every Loan is for exactly 1 Copy"],
                ["0..1", "zero or one (optional)", "a Copy sits on 0..1 active Loan"],
                ["0..* / *", "zero or many", "a Member holds 0..* Loans"],
                ["1..*", "one or many (mandatory many)", "a Branch stocks 1..* Copies"],
                ["2..6", "range", "a group booking has 2..6 Members"],
                ["3, 5", "exact set", "a Bundle ships 3 or 5 items"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Placing multiplicities from a sentence",
              caption: "Say it in English, underline the quantities, put each at the opposite end, then test the reverse reading.",
              steps: [
                { label: "Write the sentence", note: "'a member borrows many books; a book is borrowed by at most one member'" },
                { label: "Underline quantities", note: "many, at most one" },
                { label: "Place at opposite ends", note: "Book end gets 0..*, Member end gets 0..1" },
                { label: "Read both directions", note: "check each reading against the business rules" },
                { label: "Justify mandatory ends", note: "1..* needs a stated reason" },
              ],
            },
            examQuestions: [
              {
                q: "What is multiplicity in the class model? Explain the standard multiplicity notations with one example of each.",
                marks: 7,
                outline: [
                  "Definition: how many objects of one class link to one object of the other.",
                  "1 = exactly one; 0..1 = optional single.",
                  "0..* / * = optional many; 1..* = mandatory many.",
                  "Ranges and sets are legal: 2..6, 3 or 5.",
                  "Example: Loan 1 - 0..1 Copy; Member 1 - 0..* Loan.",
                ],
              },
              {
                q: "A college records that every student enrols in three to six courses, and every course has at least one student. Draw the association with correct multiplicities and justify each end.",
                marks: 7,
                outline: [
                  "Association: Student enrols in Course.",
                  "Course end: 3..6 (range multiplicity).",
                  "Student end: 1..* (mandatory many).",
                  "Justification: the college demands a minimum enrolment per course.",
                  "Reverse readings: 'a course has 3..6 students'; 'a student sits in 1..* courses' - both true.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Ternary and recursive associations",
            body: [
              "Associations need not connect exactly two classes. A ternary association connects three classes as one relationship and is drawn as a diamond with one line to each participant; its multiplicity is written on each participant's line and constrains the whole triple, not any pair. A recursive (reflexive) association connects a class to itself - the same class plays two roles at the two ends, so every recursive association needs role names. Both exist because some facts genuinely have three participants, or one participant twice, and flattening them into pairs loses information.",
              "The exam's favourite ternary is Supplier supplies Part for Project: a supplier supplies a given part at a given price for a given project - the price exists only for the (supplier, part, project) triple, so no pair of binary associations can carry it. The classic recursive association is Employee supervises Employee: draw the class once, loop the line back, and name the ends 'supervisor' (1) and 'subordinate' (0..*) - a supervisor manages many subordinates, and every subordinate has exactly one supervisor. Another: Course is prerequisite for Course, many-to-many at both ends. Without role names the loop is unreadable; with them it is precise.",
              "The exam asks 'what is a ternary association?' with a draw-it example, or 'explain recursive associations with role names'. For ternary: define, draw the diamond, place multiplicities per participant, and justify why pairs fail (the price belongs to the triple). For recursive: define, draw the loop, label both roles, and give the multiplicity pair. The advanced mark: state that a ternary with per-triple data takes an association class attached to the diamond - it links this section to section 2.4 and signals a complete understanding.",
            ],
            keyTerms: [
              { term: "Ternary association", definition: "One relationship among three classes, drawn as a diamond with per-participant multiplicities." },
              { term: "Recursive association", definition: "An association from a class to itself, with role names distinguishing the two ends." },
              { term: "Role name", definition: "The label on an association end telling which role objects of that class play." },
              { term: "N-ary association", definition: "The general form - one relationship among any number of classes." },
              { term: "Per-triple constraint", definition: "Ternary multiplicities apply to the whole combination of participants, not to any pair." },
            ],
            callout: {
              type: "warning",
              title: "Never fake a ternary with three binaries",
              body: "Splitting Supplier-Part-Project into three binary associations silently allows a supplier to be linked to a part with no project at all - a fact the business never stated. The diamond exists precisely to forbid such half-facts; inventing pairs to avoid drawing it is a modelling error the examiner checks first.",
            },
            bullets: [
              "Ternary association: one diamond, three classes, one relationship - not three binaries.",
              "Ternary multiplicities constrain the whole triple (Supplier, Part, Project).",
              "Per-triple data (price) proves the ternary is genuine: no pair of binaries can hold it.",
              "Recursive association: one class, two ends, two role names (supervisor / subordinate).",
              "Typical multiplicities on the loop: 1 supervisor to 0..* subordinates.",
              "Course prerequisite Course is the many-to-many reflexive example.",
            ],
            table: {
              caption: "Association shapes beyond the simple binary.",
              headers: ["Shape", "Notation", "Worked example", "Why pairs fail"],
              rows: [
                ["Binary", "line + name", "Member borrows Book", "- (no failure)"],
                ["Ternary", "diamond + 3 lines", "Supplier - Part - Project (price)", "price belongs to the triple"],
                ["Recursive 1-to-many", "loop + role names", "Employee supervises Employee", "same class at both ends"],
                ["Recursive many-to-many", "loop + role names", "Course prerequisite Course", "both ends 0..*"],
                ["Ternary + association class", "diamond + dashed class", "Supply carrying price", "link data lives on the link"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the association's shape",
              caption: "Count the participants before drawing any line.",
              start: "How many classes does the connection involve?",
              branches: [
                { label: "Two classes", outcome: "binary association with name and multiplicities", good: true },
                { label: "Three or more", outcome: "n-ary association drawn as a diamond - one relationship, per-participant multiplicities", good: true },
                { label: "One class at both ends", outcome: "recursive association with role names at each end", good: true },
                { label: "The link itself carries data", outcome: "attach an association class (section 2.4)", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain ternary associations with an example. Why can they not always be replaced by binary associations?",
                marks: 7,
                outline: [
                  "Definition: one relationship among three classes, drawn as a diamond.",
                  "Example: Supplier supplies Part for Project, carrying price.",
                  "Price depends on the triple; binaries would attach it to the wrong pair.",
                  "Binaries permit half-facts - supplier linked to part with no project.",
                  "Multiplicities are written per participant and constrain the whole triple.",
                ],
              },
              {
                q: "What is a recursive association? Draw Employee supervises Employee with role names and multiplicities, and give one more reflexive example.",
                marks: 7,
                outline: [
                  "Definition: an association from a class to itself; role names distinguish the ends.",
                  "Roles: supervisor (1) and subordinate (0..*).",
                  "Reading: one supervisor manages many subordinates; each subordinate has one supervisor.",
                  "Second example: Course is prerequisite for Course, many-to-many at both ends.",
                  "The loop is drawn on a single class rectangle - no duplicate class.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Association classes",
            body: [
              "Some information belongs to a relationship, not to either class: the grade a Student earned in a Course, the salary a Company pays a Person, the date a Member borrowed a Book. Attaching such data to one class is wrong - it depends on the pair of linked objects, and the same object pairs with many partners. UML's answer is the association class: a class attached to the association itself by a dashed line, whose attributes and operations are properties of each link. Each (Student, Course) link carries exactly one Enrolment object holding the grade.",
              "Work the library reservation. Member reserves Book is many-to-many; the link must record reserveDate and queuePosition. Putting reserveDate in Book fails - a book has many reservations with different dates; putting it in Member fails the same way. Create the association class Reservation attached by a dashed line to the association: its attributes are reserveDate and queuePosition, its operation is cancel(). Now each link owns one Reservation object, and queries like 'all reservations made on Monday' become lookups on Reservation alone. The same pattern gives Job between Person and Company (salary, probation) and Enrolment between Student and Course (grade, semester).",
              "The exam question is 'what is an association class and when is it needed?'. The answer skeleton: define it (a class attached to an association by a dashed line, holding link-level data); state the failure test (if the data changes with the partner, it cannot be an attribute of either class); draw the canonical example with the dashed attachment visible. Add the two facts that separate full answers: an association class can itself participate in further associations, and it is read as 'one instance per link instance' - not per class pair, but per link.",
            ],
            keyTerms: [
              { term: "Association class", definition: "A class attached to an association by a dashed line, holding the properties of each link." },
              { term: "Link attribute", definition: "Data that depends on the pair of linked objects, not on either class alone." },
              { term: "Link instance", definition: "One actual connection between objects - each owns one instance of the association class." },
              { term: "Failure test", definition: "If the data changes with the partner, it cannot be an attribute of either class." },
              { term: "Job (canonical example)", definition: "The association class between Person and Company carrying salary and probation." },
            ],
            callout: {
              type: "tip",
              title: "The dashed line is the diagram mark",
              body: "In sketches, students write Reservation above the association and lose the mark because the dashed attachment line is missing. The dashed line is the notation - without it the examiner sees an ordinary class doing nothing.",
            },
            bullets: [
              "Association class: properties of the link, attached by a dashed line.",
              "Failure test: data that changes with the partner cannot live in either class.",
              "Reservation between Member and Book: reserveDate, queuePosition, cancel().",
              "Canonical trio: Job (Person-Company), Enrolment (Student-Course), Reservation (Member-Book).",
              "One association-class instance per link instance - many-to-many yields many.",
              "Association classes may join further associations like any other class.",
            ],
            table: {
              caption: "Where does the link data go?",
              headers: ["Data", "Wrong placement", "Why it fails", "Correct placement"],
              rows: [
                ["Borrow date", "attribute of Book", "a book has many loans, each with a date", "association class Loan"],
                ["Salary", "attribute of Person", "salary depends on the company too", "association class Job"],
                ["Grade", "attribute of Student", "one grade per course, not per person", "association class Enrolment"],
                ["Queue position", "attribute of Member", "position depends on the reserved book", "association class Reservation"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From link data to association class",
              caption: "Four checks turn a modelling smell into the right UML artifact.",
              steps: [
                { label: "Spot the data", note: "reserveDate, salary, grade - it describes the relationship" },
                { label: "Test both classes", note: "attaching to either class breaks with the second partner" },
                { label: "Create the association class", note: "dashed line to the association itself" },
                { label: "Move attributes and operations", note: "reserveDate, queuePosition, cancel()" },
                { label: "Re-read multiplicities", note: "one association-class instance per link" },
              ],
            },
            examQuestions: [
              {
                q: "What is an association class? With the Person-Company example, explain why salary cannot be an attribute of either class.",
                marks: 7,
                outline: [
                  "Definition: a class attached to an association by a dashed line.",
                  "Holds the data and operations of each link instance.",
                  "Salary depends on the (Person, Company) pair, not on either alone.",
                  "A person may work for many companies with different salaries.",
                  "Association class Job carries salary, probation and join date per link.",
                ],
              },
              {
                q: "A university stores the grade a student obtains in each course and the semester of enrolment. Model it with an association class and state how many association-class instances exist for one student taking five courses.",
                marks: 7,
                outline: [
                  "Association: Student enrols in Course.",
                  "Association class Enrolment: grade, semester.",
                  "Dashed line attaches Enrolment to the association.",
                  "One Enrolment per link instance: five courses give five instances.",
                  "Queries on grades now run on Enrolment alone.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Generalization, inheritance and multiple inheritance",
            body: [
              "Generalization extracts the shared structure of several classes into a superclass: the subclass is-a the superclass and inherits all its attributes and operations. It is drawn as a hollow triangle on the superclass end. Inheritance is the mechanism: subclass instances carry superclass attributes and respond to superclass operations without redeclaration. A subclass adds attributes and operations, overrides inherited operations with its own implementation, or both. The substitutability rule makes generalization useful: anywhere the superclass appears in the model, any subclass instance may appear in its place - which is how polymorphism (Unit V) works.",
              "Model a payment module. Payment (abstract superclass) declares amount and the operation authorize(). CreditCardPayment adds cardNumber and overrides authorize() to contact the card gateway; NetBankingPayment adds bankCode and overrides authorize() to redirect; UPIPayment overrides authorize() to push a collect request. The checkout code holds Payment references and calls authorize() without knowing the concrete subclass - a new payment type joins by writing one subclass and touching nothing else. Multiple inheritance lets a class have several superclasses - PremiumCustomer is-a Customer and is-a LoyaltyMember - drawn with two triangles; languages differ in support (C++ yes, Java single class inheritance plus multiple interfaces), and conflicting definitions force the diamond problem into the open.",
              "The exam asks 'explain generalization and inheritance with an example' and 'what is multiple inheritance and what problem does it cause?'. Answer one: define is-a, draw the triangle, list add/override, state substitutability. Answer two: define multiple inheritance, draw the two-triangle diagram, name the diamond problem - a class inheriting the same attribute through two paths - and give the language responses (C++ virtual base classes, Java forbids repeated class inheritance but allows interfaces). Close with the misuse warning: inheritance is for is-a only; has-a is aggregation (next section) - mixing them is the classic design fault.",
            ],
            keyTerms: [
              { term: "Generalization", definition: "Extracting shared structure into a superclass; the subclass is-a the superclass." },
              { term: "Inheritance", definition: "The mechanism by which subclasses carry superclass attributes and operations without redeclaration." },
              { term: "Override", definition: "A subclass replacing an inherited operation with its own implementation." },
              { term: "Multiple inheritance", definition: "One subclass with two or more superclasses, drawn with several triangles." },
              { term: "Diamond problem", definition: "The same ancestor reached by two paths, making inherited members ambiguous." },
            ],
            callout: {
              type: "warning",
              title: "is-a or has-a - decide before drawing",
              body: "The exam's favourite trap: 'Car - Engine' drawn as inheritance. An engine is not a car - the car has an engine, so the diamond belongs on an aggregation, not a triangle. Test each candidate with the sentence 'X is a Y'; only true sentences earn the hollow triangle.",
            },
            bullets: [
              "Generalization: extract shared structure upward; hollow triangle at the superclass end.",
              "Subclasses inherit attributes and operations, then add or override.",
              "Substitutability: any subclass instance may stand in for the superclass - polymorphism's basis.",
              "Payment worked example: authorize() overridden by card, net-banking and UPI subclasses.",
              "Multiple inheritance: two triangles, one subclass - C++ allows it, Java restricts classes to one.",
              "Diamond problem: the same ancestor reached twice; resolved by virtual bases (C++) or interfaces (Java).",
            ],
            codeExample: {
              language: "java",
              caption: "Payment.java - generalization with override",
              code: `abstract class Payment {
    protected double amount;
    abstract void authorize();          // each subclass answers differently
}

class CreditCardPayment extends Payment {
    private String cardNumber;
    void authorize() { /* contact the card gateway */ }
}

class NetBankingPayment extends Payment {
    private String bankCode;
    void authorize() { /* redirect to the bank */ }
}
// checkout code holds Payment references and calls authorize() polymorphically`,
            },
            diagram: {
              kind: "pyramid",
              title: "A generalization hierarchy",
              caption: "The triangle points up; each tier adds or overrides, and any tier's instances substitute for the tier above.",
              tiers: [
                { label: "Payment (abstract superclass)", note: "amount; authorize()" },
                { label: "CreditCardPayment | NetBankingPayment | UPIPayment", note: "each adds data and overrides authorize()" },
                { label: "Concrete instances", note: "one authorize() per subclass, one call site in checkout" },
              ],
            },
            examQuestions: [
              {
                q: "Explain generalization and inheritance with the payment example, and state the substitutability rule.",
                marks: 7,
                outline: [
                  "Generalization extracts shared structure into a superclass; hollow triangle.",
                  "Subclasses inherit attributes and operations; add or override.",
                  "Payment.authorize() is overridden by three subclasses.",
                  "Checkout holds Payment references - no knowledge of concrete classes.",
                  "Substitutability: subclass instances replace superclass instances everywhere.",
                ],
              },
              {
                q: "What is multiple inheritance? Explain with a diagram and example, discuss the diamond problem, and compare how C++ and Java handle it.",
                marks: 14,
                outline: [
                  "Definition: one subclass with two or more superclasses; two triangles.",
                  "Example: PremiumCustomer is-a Customer and is-a LoyaltyMember.",
                  "Benefit: compose orthogonal capabilities without duplication.",
                  "Diamond problem: the same ancestor reached by two paths - ambiguous members.",
                  "C++: virtual base classes keep one shared ancestor copy.",
                  "Java: single class inheritance; multiple interfaces with default methods instead.",
                  "Guideline: prefer composition when is-a is doubtful.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Aggregation and composition",
            body: [
              "Aggregation and composition are whole-part relationships - a has-a association in which one class is the whole and others are its parts. Aggregation (hollow diamond at the whole end) is a weak coupling: the part may be shared by several wholes and survives the whole's destruction - a Professor belongs to a Department but moves to another when it closes. Composition (filled diamond) is strong ownership: the part belongs to exactly one whole, is created and destroyed with it, and is never shared - a Room exists only inside its Building.",
              "Test both on the library. Branch has-a Copy: if the branch closes, copies are transferred to other branches - copies outlive the branch, so hollow diamond, aggregation. Loan has-a ReceiptLine: a receipt line exists only within its loan, is never shared, and dies with it - filled diamond, composition. The decision questions are the exam answer: can the part exist outside the whole? Is the part shared among wholes? Does the whole create and destroy the part? Surviving, shareable parts give aggregation; exclusively owned, co-dying parts give composition; parts that are merely referenced give a plain association.",
              "The exam question is 'differentiate aggregation and composition with examples' or 'explain the UML notation for whole-part relationships'. The full-mark answer draws both diamonds, states the three test questions (existence, sharing, lifetime), and gives one example of each with the reasoning spoken aloud. Add the multiplicities that usually accompany them: composition typically shows 1 whole to 1..* parts created inside it; aggregation shows sharing, so the part end often reads 0..* wholes. Close with the hierarchy sentence: aggregation and composition are associations with semantics added - everything else about them is ordinary association machinery.",
            ],
            keyTerms: [
              { term: "Aggregation", definition: "Weak whole-part coupling - hollow diamond; parts may be shared and outlive the whole." },
              { term: "Composition", definition: "Strong ownership - filled diamond; the part belongs to one whole and dies with it." },
              { term: "Whole-part relationship", definition: "A has-a association in which one class is the whole and others are its parts." },
              { term: "Existence test", definition: "Can the part exist outside the whole? Yes suggests aggregation, no suggests composition." },
              { term: "Lifetime coupling", definition: "In composition the part's lifetime is bound to the whole's; in aggregation it is not." },
            ],
            callout: {
              type: "exam",
              title: "Lifetime is the deciding question",
              body: "When the comparison question comes, answer with the lifetime sentence: 'in aggregation the part outlives the whole; in composition the part's lifetime is bound to the whole's'. Existence, sharing, lifetime - three tests, then the diamonds - is the structure examiners expect.",
            },
            bullets: [
              "Whole-part has-a: hollow diamond = aggregation, filled diamond = composition.",
              "Aggregation: parts shareable, survive the whole (Professor - Department).",
              "Composition: exclusive ownership, part dies with the whole (Room - Building).",
              "Three tests: can the part exist alone? is it shared? who controls its lifetime?",
              "Branch has-a Copy is aggregation (copies transfer on closure); Loan has-a ReceiptLine is composition.",
              "Both are associations with extra semantics - multiplicity and navigation still apply.",
            ],
            codeExample: {
              language: "java",
              caption: "Aggregation and composition in code",
              code: `// Aggregation: the part arrives from outside and may be shared
class Branch {
    private final List<Copy> copies;          // hollow diamond
    Branch(List<Copy> transferredCopies) { this.copies = transferredCopies; }
}

// Composition: the whole creates and owns the part
class Loan {
    private final ReceiptLine line = new ReceiptLine();   // filled diamond
    void close() { line.archive(); }   // the part dies with the whole
}`,
            },
            diagram: {
              kind: "compare",
              title: "Aggregation vs composition",
              caption: "Same diamond idea, opposite lifetimes - the fill of the diamond decides.",
              left: {
                heading: "Aggregation (hollow diamond)",
                items: [
                  "Weak whole-part coupling",
                  "Part may be shared by several wholes",
                  "Part survives the whole's destruction",
                  "Library example: Branch has-a Copy",
                ],
              },
              right: {
                heading: "Composition (filled diamond)",
                items: [
                  "Strong, exclusive ownership",
                  "Part belongs to exactly one whole",
                  "Part is created and destroyed with the whole",
                  "Library example: Loan has-a ReceiptLine",
                ],
              },
            },
            examQuestions: [
              {
                q: "Differentiate aggregation and composition with UML notation and one worked example of each.",
                marks: 7,
                outline: [
                  "Both are has-a whole-part relationships; the diamond sits at the whole end.",
                  "Aggregation: hollow diamond; parts shareable; parts survive the whole.",
                  "Composition: filled diamond; exclusive ownership; part dies with the whole.",
                  "Example: Branch has-a Copy vs Loan has-a ReceiptLine.",
                  "The lifetime test decides which diamond to draw.",
                ],
              },
              {
                q: "For each pair, decide aggregation or composition and justify: (a) University and Department, (b) Order and OrderLine, (c) Playlist and Song.",
                marks: 7,
                outline: [
                  "(a) Aggregation: departments outlive a given university's ownership arrangement.",
                  "(b) Composition: order lines are created with the order and die with it.",
                  "(c) Aggregation: a song outlives any playlist and may appear in many.",
                  "State the three tests per pair: existence, sharing, lifetime.",
                  "Draw the diamonds: hollow for (a) and (c), filled for (b).",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Abstract classes and packages",
            body: [
              "An abstract class is a class that cannot be instantiated: it exists to hold the structure and protocol shared by its subclasses. It is written with the name in italics (or the {abstract} tag) and may contain abstract operations - operations declared but not implemented, which every concrete subclass must realize. Shape declares draw() abstract; Circle and Rectangle implement it. The abstract class defines a contract, the subclasses fill it, and client code programs against the contract. Packages are the other organizing device: a package groups related classes (or nested packages) and is drawn as a folder labelled with the package name.",
              "Design the library in three packages. The domain package holds Member, Book, Copy and Loan - the analysis classes. The persistence package holds the repositories and the mapping code; it depends on domain, never the reverse. The ui package holds the screens and depends on both. Dependencies between packages are dashed arrows, and the package diagram makes the architecture's layering visible at a glance: if ui ever depended directly on persistence's storage tables, the arrow would betray it. Abstract classes appear inside packages exactly like classes - Payment lives in domain, its subclasses may live in different packages, and the contract travels with the package boundary.",
              "Two exam questions come from this section: 'what is an abstract class and why is it needed?' and 'what is a package in UML?'. For the first: define non-instantiable, show the abstract operation, and give the contract benefit - client code depends on Shape, not on circles or rectangles; mention that abstract classes cannot be instantiated but may declare constructors used by their subclasses. For the second: define grouping, draw the folder, show dashed dependency arrows, and state the design value - packages make the architecture inspectable and enforce layering. Combine both in one sentence for the closing mark: packages organize the space; abstract classes organize the contracts.",
            ],
            keyTerms: [
              { term: "Abstract class", definition: "A non-instantiable class holding shared structure and a protocol its subclasses must fulfil." },
              { term: "Abstract operation", definition: "An operation declared but not implemented; every concrete subclass realizes it." },
              { term: "Concrete class", definition: "A class whose every operation is implemented - it can be instantiated." },
              { term: "Package", definition: "A UML grouping of related classes or nested packages, drawn as a folder." },
              { term: "Package dependency", definition: "A dashed arrow between packages; the direction makes the layering visible." },
            ],
            callout: {
              type: "exam",
              title: "Abstract classes have constructors",
              body: "The subtle mark: an abstract class cannot be instantiated but may declare constructors, which only its subclasses' constructors invoke to initialize inherited state. Write that line when the question says 'why is it needed?' - it shows the class is a working base, not an empty shell.",
            },
            bullets: [
              "Abstract class: cannot be instantiated; holds shared structure and a protocol.",
              "Abstract operation: declared, not implemented - concrete subclasses must realize it.",
              "Italic name or {abstract} tag marks it in the diagram.",
              "Client code programs against the abstract contract (Shape), not the concrete subclasses.",
              "Package: folder grouping related classes or nested packages.",
              "Package dependencies are dashed arrows; they make layering visible and enforceable.",
            ],
            codeExample: {
              language: "java",
              caption: "Shape.java - an abstract class inside its package",
              code: `package library.domain;                    // the domain package

public abstract class Shape {              // abstract: no instances
    protected String id;
    public abstract double area();         // abstract operation
    public String describe() { return id + " (" + area() + ")"; }
}

// in the same package:
public class Circle extends Shape {        // concrete realization
    private double radius;
    public double area() { return Math.PI * radius * radius; }
}`,
            },
            diagram: {
              kind: "layers",
              title: "Packages layered as an architecture",
              caption: "Dependencies point downward only; the dashed arrows between packages are the architecture.",
              layers: [
                { label: "library.ui", note: "screens and controllers - depends on both below" },
                { label: "library.service", note: "use case logic: issue, reserve, renew" },
                { label: "library.domain", note: "Member, Book, Loan plus abstract contracts" },
                { label: "library.persistence", note: "repositories - only domain may call these" },
              ],
            },
            examQuestions: [
              {
                q: "What is an abstract class? How does it differ from a concrete class and an interface? Illustrate with Shape and its subclasses.",
                marks: 7,
                outline: [
                  "Abstract class: non-instantiable; may mix implemented and abstract operations.",
                  "Abstract operation forces realization in every concrete subclass.",
                  "Concrete class: instantiable, all operations implemented.",
                  "Interface: pure contract, no state - Java allows many, one superclass.",
                  "Shape declares area() abstract; Circle and Rectangle implement it; clients use Shape.",
                ],
              },
              {
                q: "What is a package in UML? Draw a package diagram for a three-layer library application and explain how dependencies are shown.",
                marks: 7,
                outline: [
                  "Package: grouping of related classes or nested packages, drawn as a folder.",
                  "Dependencies between packages are dashed arrows.",
                  "ui -> service -> domain; persistence below domain.",
                  "Layering rule: arrows point downward only.",
                  "Value: the architecture is visible and layering is enforceable in review.",
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
      title: "Dynamic Modeling using State Diagrams",
      summary:
        "Unit III turns static structure into behavior: events, states, transitions and conditions, the two life-cycle shapes (continuous and one-shot), substates and nested state diagrams that tame state explosion, signal generalization, concurrency with junction and synch states, the mapping between the class and state models, and a complete worked state machine.",
      chapter: {
        number: "03",
        title: "States, Events and Life Cycles",
        intro:
          "Unit III covers events, states, transitions and conditions; the kinds of state diagrams; continuous and one-shot life cycles; substates and nested state diagrams; signal generalization; concurrency with junction and synch states; and the relation between the class and state models - closed with a complete worked state machine for an ATM session.",
        inOneBreath:
          "A state is a condition an object holds over time, an event is a point-in-time stimulus, and a transition fires as event [guard] / action. Objects with continuous life cycles never reach a final state; one-shot objects are created, used and destroyed in one episode. Nesting states into composites tames state explosion, signal generalization lets one handler serve a whole family of events, and concurrent substates coordinate through synch states while alternative paths merge at junction states. The class model says what exists; one state diagram per dynamic class says how its instances behave.",
        sections: [
          {
            number: "3.1",
            title: "Events, states, transitions and conditions",
            body: [
              "A state is a condition an object remains in for some interval of time while it waits for events or performs ongoing activity; it is drawn as a rounded rectangle. An event is a stimulus that occurs at a point in time and can trigger a change of state - a signal (an asynchronous message), a change event ('balance < 0'), a time event (a clock tick or timeout) or a call event (a synchronous operation invocation). A transition is the movement from one state to another in response to an event, drawn as an arrow labelled event [guard] / action.",
              "Work the ATM card reader. States: Idle, ReadingCard, ReadingPIN, Authenticated and Seized (card confiscated). Transitions with full labels: insertCard / read [card valid] moves Idle to ReadingPIN; insertCard [card invalid] / eject keeps Idle in Idle; three wrong PINs fire pinFailed [tries = 3] / confiscate, moving ReadingPIN to Seized; correctPin / display moves ReadingPIN to Authenticated. The label syntax carries three slots - the event names the trigger, the bracketed guard is a Boolean condition that must hold, and the slash action is performed during the transition. Guards decide among alternative transitions triggered by the same event; actions must be quick and atomic.",
              "The exam question is 'explain events, states, transitions and conditions with an example' or 'draw the state diagram of a card reader or ATM'. The answer skeleton: define each term in one line, then draw the diagram with at least one transition showing every slot of the label syntax event [guard] / action, and one transition whose guard chooses between alternatives. State the two properties examiners look for: transitions are instantaneous (actions are atomic), and an event that finds no matching transition is simply ignored - objects are never forced to react.",
            ],
            keyTerms: [
              { term: "State", definition: "A condition an object holds for an interval while waiting or working." },
              { term: "Event", definition: "A point-in-time stimulus - signal, change, time or call - that may trigger a transition." },
              { term: "Transition", definition: "The move from one state to another, labelled event [guard] / action." },
              { term: "Guard condition", definition: "A Boolean that must hold for the transition to fire; it chooses between alternatives." },
              { term: "Action", definition: "The atomic work performed during a transition." },
            ],
            callout: {
              type: "exam",
              title: "Guard vs event - the classic confusion",
              body: "The event decides when a transition may fire; the guard decides whether it fires now. Write the sentence 'the event is the trigger, the guard is the permission' in any transition question - examiners specifically probe the difference with a two-arrow diagram and ask which arrow fires.",
            },
            bullets: [
              "State: a condition held for a duration; event: a stimulus at a point in time.",
              "Event kinds: signal event, change event (a condition becomes true), time event, call event.",
              "Transition label syntax: event [guard] / action.",
              "Guards choose among alternative transitions for the same event; they do not trigger.",
              "Actions are atomic - they run during the transition, not inside the next state.",
              "Unmatched events are ignored: no transition, no reaction, no error.",
            ],
            table: {
              caption: "The four kinds of events.",
              headers: ["Event kind", "Occurs when", "ATM example"],
              rows: [
                ["Signal event", "an asynchronous named signal arrives", "insertCard"],
                ["Change event", "a Boolean condition becomes true", "balance < minBalance"],
                ["Time event", "a clock time or timeout elapses", "after(30 s) ejects the card"],
                ["Call event", "a synchronous operation is invoked", "verify(pin) returns a verdict"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Anatomy of one transition",
              caption: "Four slots in the label; the guard chooses between rivals, the action runs during the move.",
              steps: [
                { label: "Source state", note: "ReadingPIN" },
                { label: "Event", note: "pinEntered - the trigger" },
                { label: "Guard [tries < 3]", note: "must be true to fire" },
                { label: "Action / resetTries", note: "atomic, during the move" },
                { label: "Target state", note: "Authenticated" },
              ],
            },
            examQuestions: [
              {
                q: "Define state, event, transition and guard condition. Draw the state diagram of a card reader showing one transition that uses the full label syntax event [guard] / action.",
                marks: 7,
                outline: [
                  "State: condition held over time; event: point-in-time stimulus.",
                  "Kinds of events: signal, change, time, call.",
                  "Transition label: event [guard] / action - all three slots explained.",
                  "Diagram: Idle -> ReadingCard -> ReadingPIN -> Authenticated, with guards on card validity.",
                  "Properties: atomic actions; unmatched events are ignored.",
                ],
              },
              {
                q: "Explain the dynamic model of an object. With a neat state diagram of an ATM card session, show events, guards, actions and how alternative transitions from the same state are chosen.",
                marks: 14,
                outline: [
                  "The dynamic model describes behavior over time - the states and events of each object.",
                  "States of the session: Idle, ReadingCard, ReadingPIN, Authenticated, Seized.",
                  "insertCard / read moves Idle to ReadingCard.",
                  "Guards choose alternatives: [valid] vs [invalid] on the same insertCard event.",
                  "Time event after(30 s) ejects; pinFailed [tries = 3] / confiscate reaches Seized.",
                  "Actions are atomic; every state must have a reason to exist - merge dead states.",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Continuous and one-shot life-cycle diagrams",
            body: [
              "State diagrams come in two life-cycle shapes, and choosing the right one is the first modelling decision. A continuous life cycle describes an object that exists for the whole program run: its diagram has an initial state but no final state, because the object never dies - a network monitor, a main window, the bank's ledger. A one-shot life cycle describes an object that is created, passes through its states, and is destroyed in a single episode: an ATM session, a phone call, an order. Its diagram starts at an initial pseudostate and ends at a final state (the bull's-eye) - the object simply does not exist after that.",
              "Classify the library's objects. A CatalogueServer runs from system start to shutdown - continuous: its states Idle, Serving and BackingUp loop forever with no final state. A Loan is the opposite - one-shot: created at issue, it walks Issued, Renewed and Overdue, and terminates at Returned, where the object is archived and destroyed; the bull's-eye matters, because after Returned no Loan exists to receive events. An Account is continuous (it survives individual transactions), while a Reservation is one-shot (fulfilled or cancelled). The classification is a design check: a final state in what should be continuous means the object dies wrongly; a missing final state in a one-shot means a leak.",
              "The exam question is 'explain the types of state diagrams' or 'distinguish continuous and one-shot life-cycle diagrams'. Answer: define both, state the notation consequence (the final state appears only in one-shot), give one example of each, and close with the design-check sentence - the presence or absence of the final state is a correctness statement about object lifetime, not decoration. If the question adds 'give an example of each from one system', split a banking system: the ledger is continuous, each transaction one-shot.",
            ],
            keyTerms: [
              { term: "Continuous life cycle", definition: "An object that exists for the whole run; initial state present, final state absent." },
              { term: "One-shot life cycle", definition: "An object created, used and destroyed in one episode; ends at the final bull's-eye." },
              { term: "Final state", definition: "The bull's-eye marking that the object's lifetime is over." },
              { term: "Initial pseudostate", definition: "The filled circle where every state diagram begins." },
              { term: "Lifetime check", definition: "The presence or absence of a final state must match the object's real lifetime." },
            ],
            callout: {
              type: "tip",
              title: "One object, one diagram",
              body: "Each class with rich dynamics gets its own state diagram; two classes never share one. When the exam shows a diagram mixing two objects' states, say so - a state model is per-class, and the correction is itself worth marks.",
            },
            bullets: [
              "Continuous life cycle: object exists for the whole run; no final state.",
              "One-shot life cycle: created, used, destroyed in one episode; ends at the bull's-eye.",
              "Continuous example: CatalogueServer - Idle, Serving, BackingUp loop forever.",
              "One-shot example: Loan - Issued, Renewed, Overdue, Returned (final).",
              "The final state is a lifetime statement, not a drawing convention.",
              "Audit each object: a final state where none belongs is a wrong death; none where one belongs is a leak.",
            ],
            table: {
              caption: "Life-cycle shapes across one system.",
              headers: ["Object", "Life cycle", "Reason", "Final state?"],
              rows: [
                ["CatalogueServer", "continuous", "runs from boot to shutdown", "no"],
                ["Account", "continuous", "survives individual transactions", "no"],
                ["Loan", "one-shot", "created at issue, archived at return", "yes - Returned"],
                ["Reservation", "one-shot", "fulfilled or cancelled", "yes - both exits"],
                ["Session (ATM)", "one-shot", "starts at card insert, ends at eject", "yes - SessionEnded"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Continuous vs one-shot life cycles",
              caption: "The only notational difference is the final state - but it states whether the object can ever die.",
              left: {
                heading: "Continuous life cycle",
                items: [
                  "Object exists for the whole program run",
                  "Initial state present; final state absent",
                  "States loop under external events",
                  "Example: CatalogueServer, Account",
                ],
              },
              right: {
                heading: "One-shot life cycle",
                items: [
                  "Object created, used, destroyed in one episode",
                  "Initial pseudostate and final bull's-eye both present",
                  "Transitions march toward termination",
                  "Example: Loan, ATM Session",
                ],
              },
            },
            examQuestions: [
              {
                q: "Distinguish continuous and one-shot life-cycle state diagrams with one example of each from a single system.",
                marks: 7,
                outline: [
                  "Continuous: exists for the whole run; initial state, no final state.",
                  "One-shot: created and destroyed in one episode; the final bull's-eye is present.",
                  "Example: Account continuous; Loan one-shot in the same library system.",
                  "Loop vs march: continuous states cycle; one-shot transitions converge on termination.",
                  "The final state is a lifetime correctness statement.",
                ],
              },
              {
                q: "Classify the objects of a banking system by life-cycle type and justify each classification.",
                marks: 7,
                outline: [
                  "Ledger / branch server: continuous - runs from boot to shutdown.",
                  "Account: continuous - survives many transactions.",
                  "Transaction: one-shot - created at request, archived at completion.",
                  "Card session: one-shot - insert to eject.",
                  "Rule: does the object have a natural death? Then it is one-shot.",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Substates and nested state diagrams",
            body: [
              "A flat state diagram explodes when a few states share the same reaction to an event: fifteen states all handling 'cancel' means fifteen identical arrows. The cure is nesting - group related states into a composite state (a state with its own sub-diagram) and attach shared transitions once to the boundary. Every substate inherits the composite's transitions: one cancel arrow out of the composite serves all substates inside. Substates may be sequential (one active at a time) or concurrent (several active in parallel - section 3.5). Composite states also carry their own entry, exit and do actions, executed on the boundary crossings.",
              "Nest the order-processing machine. The composite state Processing contains substates Validating, ReservingStock and Billing; the whole composite reacts once to cancel / refund and to printError - three internal states, two external arrows instead of six. Entering Processing runs its entry action allocateTempId; leaving it to Complete runs the exit action commitJournal. A transition may target the composite boundary (the default initial substate is entered) or pierce it to a named substate (enter Processing directly at Billing when the resume event fires). Count the win: the flat version needed three cancel arrows and three error arrows; the nested version needs two arrows total.",
              "The exam question is 'explain nested state diagrams' or 'what are substates and how do they reduce state explosion?'. Skeleton: define composite state and substate; state the inheritance rule - substates inherit all transitions of their enclosing composite; draw the order-processing example with the shared cancel arrow crossing the boundary once; mention entry/exit actions and the two ways to enter (boundary or named substate). The arithmetic earns the final mark: shared behavior drawn once instead of n times turns an n-times-m arrow count into n plus m - that is the entire point of nesting.",
            ],
            keyTerms: [
              { term: "Composite state", definition: "A state that contains its own sub-diagram of substates." },
              { term: "Substate", definition: "A state nested inside a composite; it inherits the composite's transitions." },
              { term: "State explosion", definition: "The flat-diagram blow-up that nesting prevents by sharing transitions." },
              { term: "Entry action", definition: "Work performed on entering a (composite) state." },
              { term: "Exit action", definition: "Work performed on leaving a (composite) state, on every exit path." },
            ],
            callout: {
              type: "warning",
              title: "Do not nest for decoration",
              body: "Nesting costs readability when there is nothing to share: a composite with one inherited transition and two unrelated substates is worse than a flat diagram. Nest exactly when several substates react identically to the same events - the arrow count is the justification.",
            },
            bullets: [
              "Composite state: a state that contains its own sub-diagram of substates.",
              "Substates inherit every transition of the enclosing composite - shared reactions drawn once.",
              "Entry / exit / do actions on the composite run at boundary crossings.",
              "Transitions may target the composite boundary (default substate) or a named substate.",
              "Order example: cancel / refund drawn once serves Validating, ReservingStock and Billing.",
              "Arrow arithmetic: n substates sharing m reactions collapse from n*m arrows to n + m.",
            ],
            table: {
              caption: "Flat vs nested for the order processor.",
              headers: ["Aspect", "Flat diagram", "Nested diagram"],
              rows: [
                ["States drawn", "3 plus repeated reactions", "3 substates inside 1 composite"],
                ["cancel arrows", "3 identical arrows", "1 arrow from the boundary"],
                ["error handling", "repeated per state", "one boundary transition"],
                ["entry/exit actions", "copied into each state", "declared once on the composite"],
                ["resume at Billing", "needs a new path", "transition pierces to the named substate"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Inside the composite state 'Processing'",
              caption: "Index 0 is the outer boundary; the layers beneath are the substates that inherit its transitions.",
              layers: [
                { label: "Processing (composite state)", note: "entry: allocateTempId - exit: commitJournal - reacts once to cancel / refund" },
                { label: "Validating (substate)", note: "check items and address" },
                { label: "ReservingStock (substate)", note: "hold inventory" },
                { label: "Billing (substate)", note: "charge the payment method" },
              ],
            },
            examQuestions: [
              {
                q: "What is a nested state diagram? Explain how substates inherit transitions and how nesting controls state explosion.",
                marks: 7,
                outline: [
                  "Composite state contains substates, drawn as a state with an internal diagram.",
                  "Inheritance rule: substates inherit all transitions of the enclosing composite.",
                  "Shared reactions (cancel / refund) are drawn once at the boundary.",
                  "Entry, exit and do actions are declared on the composite.",
                  "Arrow arithmetic: n*m shared arrows collapse to n + m.",
                ],
              },
              {
                q: "Draw a nested state diagram for order processing and explain the two ways a transition can enter a composite state.",
                marks: 7,
                outline: [
                  "Composite Processing with substates Validating, ReservingStock, Billing.",
                  "Boundary transition cancel / refund serves all substates.",
                  "Entry mode one: target the boundary - the default initial substate runs.",
                  "Entry mode two: pierce to a named substate (resume at Billing).",
                  "Exit action commitJournal runs on every exit path.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Signal generalization",
            body: [
              "Events carried by signals can be organized in an inheritance hierarchy, exactly like classes. A general signal (InputEvent) stands above specialized signals (KeyboardEvent, MouseEvent), which stand above still more specific ones (CtrlC, DoubleClick); the hollow triangle points from the specific to the general. The payoff is polymorphic event handling: a transition that names the general signal fires for every one of its specializations, so one arrow serves the whole family - while a transition naming the specific signal fires only for that signal. Signal generalization is the state-model twin of class generalization, drawn with the same triangle notation.",
              "Model a drawing editor's input. General signal InputEvent; below it KeyboardEvent and MouseEvent; below MouseEvent, Click, DoubleClick and Drag. The canvas state Selected handles InputEvent / deselect - one arrow that fires for every keystroke and click, because any input deselects the shape. The shape itself handles Drag / move - fired only by the drag specialization, never by a stray keystroke. Add a new signal ShiftClick under Click and the Selected handler needs no change: it already covers the family. The diagram records which handlers are family-wide and which are specific - the same information a class hierarchy records for operations.",
              "The exam question is 'what is signal generalization and how is it shown?'. Answer in three moves: define the hierarchy of event signals with the hollow triangle; state the firing rule - transitions naming a general signal fire for all its specializations, and a more specific transition takes precedence when both match; give the drawing-editor example with one family-wide arrow and one specific arrow. The precedence rule is the mark separator: when Selected handles both InputEvent and Click, an actual Click follows the more specific transition - specificity wins, exactly as the nearest overriding method wins in class hierarchies.",
            ],
            keyTerms: [
              { term: "Signal", definition: "A named asynchronous event one object sends to another." },
              { term: "Signal generalization", definition: "Organizing signals in an inheritance hierarchy with the hollow triangle." },
              { term: "Family-wide handler", definition: "A transition naming a general signal, so it fires for every specialization." },
              { term: "Specialization", definition: "A more specific signal below a general one in the hierarchy." },
              { term: "Precedence rule", definition: "When several transitions match, the one with the most specific signal wins." },
            ],
            callout: {
              type: "exam",
              title: "Specificity wins",
              body: "The non-obvious rule that separates full answers: when a state handles both a general and a specialized signal, the specialized transition takes precedence. Quote it in the same breath as 'nearest override wins' - the parallel is the point of the topic.",
            },
            bullets: [
              "Signals form inheritance hierarchies; the hollow triangle points from specific to general.",
              "A transition naming a general signal fires for every specialization of it.",
              "A transition naming a specific signal fires only for that signal.",
              "Precedence: when two transitions match, the more specific signal wins.",
              "Drawing-editor example: Selected handles InputEvent / deselect family-wide; Drag / move specifically.",
              "New signals added under the family need no change to family-wide handlers.",
            ],
            table: {
              caption: "One signal hierarchy and who handles what.",
              headers: ["Signal", "Parent", "Handled by transition on", "Scope"],
              rows: [
                ["InputEvent", "(root)", "Selected -> Idle (deselect)", "whole family"],
                ["KeyboardEvent", "InputEvent", "Editing -> Editing (append)", "keys only"],
                ["MouseEvent", "InputEvent", "Hovering -> Hovering", "pointer only"],
                ["Click", "MouseEvent", "Selected -> Editing", "clicks only"],
                ["DoubleClick", "Click", "Selected -> Properties", "double clicks only"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "A signal generalization hierarchy",
              caption: "The triangle points to the general signal; handlers naming a tier fire for everything beneath it.",
              tiers: [
                { label: "InputEvent (general signal)", note: "handlers here fire for every input" },
                { label: "KeyboardEvent | MouseEvent", note: "handlers fire for their subtree only" },
                { label: "Click | DoubleClick | Drag", note: "most specific - wins when several match" },
              ],
            },
            examQuestions: [
              {
                q: "What is signal generalization? Draw a signal hierarchy for a GUI editor and state which transitions fire for which signals.",
                marks: 7,
                outline: [
                  "Signals organized in an inheritance hierarchy with the hollow triangle.",
                  "InputEvent over KeyboardEvent and MouseEvent; Click and DoubleClick under MouseEvent.",
                  "A transition naming InputEvent fires for the entire family.",
                  "A transition naming Drag fires only for drags.",
                  "Precedence: the most specific matching transition wins.",
                ],
              },
              {
                q: "How does signal generalization support extensibility of a state model? Explain with the case of adding ShiftClick to an existing editor model.",
                marks: 7,
                outline: [
                  "The new signal joins under its most specific parent (under Click).",
                  "Family-wide handlers (InputEvent) already cover it - no edits needed.",
                  "Specific handlers fire only if a new transition is wanted.",
                  "The precedence rule applies if both a parent and the new signal match.",
                  "Contrast: without generalization, every state's transitions would need edits.",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Concurrency, junction states and synch states",
            body: [
              "A state may contain concurrent substates - two or more regions active at once, separated in the diagram by dashed lines. Entering the composite splits control (an and-split); leaving requires all regions to finish (an and-join). Two coordination devices tame the parallelism. A junction state merges alternative transition paths into one: several arrows in, one arrow out, no waiting - it is a merge point, not a state with duration. A synch state synchronizes concurrent flows: drawn as a small circle, it lets one region proceed only when the others have reached the agreed point, optionally annotated with a count of the syncs to expect.",
              "Model document export. The composite Exporting has two concurrent regions: Render (states RenderingPages, RenderingImages) and Package (states Compressing, Encrypting). Rendering cannot finish before Compressing has the final page count, so both regions route into the synch state pageCountReady - drawn as a circle - which releases them to continue in step. Alternative error paths (renderFailed from either region) converge in a junction state Failed, with one arrow leaving to the final state. The diagram states the synchronization contract explicitly: neither region may pass the circle until the other arrives - concurrency without it would race.",
              "The exam question is 'explain concurrency in state diagrams' or 'distinguish junction and synch states'. Skeleton: define concurrent substates and the and-split/and-join; define the junction state as a merge of alternative paths (no waiting, no duration) and the synch state as a barrier that coordinates concurrent regions (waiting, drawn as a small circle); draw the export example showing both. The distinguishing sentence is the mark: a junction combines paths that will never be active at the same time; a synch state aligns flows that are active at the same time - alternatives versus parallelism.",
            ],
            keyTerms: [
              { term: "Concurrent substates", definition: "Regions inside one composite state, all active together, separated by dashed lines." },
              { term: "And-split / and-join", definition: "Control splits on entering the composite and re-merges only when every region finishes." },
              { term: "Junction state", definition: "A merge point for alternative paths - several arrows in, one out, no duration." },
              { term: "Synch state", definition: "A small-circle barrier that aligns concurrent regions before they proceed." },
              { term: "Region", definition: "One parallel branch of a composite state with its own substates." },
            ],
            callout: {
              type: "warning",
              title: "Junction is not a wait",
              body: "Students draw the junction state as if time passed there. It is a merge pseudostate: instantaneous, no actions, no duration. If the diagram needs the flows to wait for each other, that is the synch state's job - confusing the two loses the concurrency marks.",
            },
            bullets: [
              "Concurrent substates: dashed-line regions inside one composite, all active together.",
              "And-split on entry; and-join requires every region before leaving.",
              "Junction state: merges alternative paths - several in, one out, no duration.",
              "Synch state: small-circle barrier aligning concurrent regions before they proceed.",
              "Export example: Render and Package regions meet at pageCountReady; errors merge at Failed.",
              "Rule of thumb: alternatives meet at junctions; parallel flows meet at synch states.",
            ],
            table: {
              caption: "Coordination devices in one table.",
              headers: ["Device", "Purpose", "Waiting?", "Export example"],
              rows: [
                ["Concurrent substates", "parallel regions in one state", "- (they just run)", "Render | Package"],
                ["Junction state", "merge alternative paths", "no", "failed paths merge to Failed"],
                ["Synch state", "align concurrent regions", "yes - barrier", "pageCountReady circle"],
                ["And-join (boundary)", "leave composite when all done", "yes", "both regions finish -> Exported"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "When do parallel flows meet?",
              caption: "Pick the device by what the flows are to each other.",
              start: "Two paths inside one composite state -",
              branches: [
                { label: "They are alternatives (one runs)", outcome: "meet at a junction state - a plain merge, no waiting", good: true },
                { label: "They are concurrent (both run)", outcome: "meet at a synch state - a barrier that waits for both", good: true },
                { label: "Both must finish to leave", outcome: "and-join at the composite boundary", good: true },
                { label: "They race without coordination", outcome: "a modelling bug - the synch state exists to prevent it", good: false },
              ],
            },
            examQuestions: [
              {
                q: "Explain concurrency in state diagrams. Distinguish the junction state from the synch state with an example of each.",
                marks: 7,
                outline: [
                  "Concurrent substates: dashed regions active together; and-split on entry, and-join on exit.",
                  "Junction state: merges alternative paths; instantaneous, no waiting.",
                  "Synch state: barrier circle that aligns concurrent regions.",
                  "Example: export - errors merge at Failed (junction); regions meet at pageCountReady (synch).",
                  "Rule: alternatives meet at junctions; parallel flows meet at synch states.",
                ],
              },
              {
                q: "Draw a state diagram with two concurrent regions for a document export feature, and explain how the and-split, synch state, junction state and and-join coordinate the flows.",
                marks: 14,
                outline: [
                  "Composite Exporting splits into Render and Package regions (and-split).",
                  "Render: RenderingPages -> RenderingImages; Package: Compressing -> Encrypting.",
                  "Synch state pageCountReady: neither region passes until both arrive.",
                  "Junction state Failed: renderFailed or packageFailed merge to one error path.",
                  "And-join: both regions complete -> Exported.",
                  "Why the synch state is needed: the page count must be final before encryption.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Relating the class and state models",
            body: [
              "The class model and the state model describe the same objects from two angles, and the exam wants the mapping stated precisely. The class model says what exists: classes, attributes, associations, operations. The state model says how the instances of one class behave over time: one state diagram per class whose dynamics are non-trivial. Attributes of the class appear as the state variables the guards read; operations of the class appear as the events and actions on the transitions; associations explain where the events come from - the partner objects send the signals. Classes with trivial dynamics (pure data holders) get no state diagram, and that silence is itself a modelling statement.",
              "Derive the Loan state machine from the library class model. The class model gives attributes dueDate, status and renewCount and operations issue(), renew() and returnBook() - each operation becomes an event: issue triggers the move from Reserved to Issued; renew fires in Issued with guard [renewCount < 3]; returnBook moves anything to Returned. The guard reads the attribute the class model declared. Events not in the class model - overdue from the clock - get added as operations on Loan (checkOverdue()), keeping the two models consistent. The review step is deliberate: every transition's event should be an operation somewhere in the class model; if not, either the operation or the transition is missing.",
              "The exam question is 'what is the relation between the class model and the state model?'. Answer with the mapping table - class to state diagram, attribute to state variable, operation to event or action, association to event source - plus the build order: pick the classes with rich dynamics, list their events from the use cases, draft the diagrams, then cross-check every transition against a class operation. The two-model consistency check is the sentence examiners want: 'the state model is the class model seen over time; every event must be realizable as an operation.'",
            ],
            keyTerms: [
              { term: "Class model", definition: "The static description - what classes, attributes, associations and operations exist." },
              { term: "State model", definition: "One state diagram per dynamic class - how its instances behave over time." },
              { term: "State variable", definition: "A class attribute whose values the guards and actions read." },
              { term: "Call event", definition: "A class operation invoked synchronously - the operation becomes the event." },
              { term: "Consistency check", definition: "Every transition event must be realizable as an operation in the class model." },
            ],
            callout: {
              type: "exam",
              title: "The consistency check is the answer",
              body: "When the question asks for the relation between models, the mark-bearing sentence is: 'every event in the state model must correspond to an operation in the class model, and every guard must read an attribute the class model declares.' Say it, then show the Loan mapping - the pair is the expected answer.",
            },
            bullets: [
              "One class model says what exists; one state diagram per class describes its dynamics.",
              "Class attributes appear as the state variables guards and actions read.",
              "Class operations appear as events (calls) or transition actions.",
              "Association partners are the senders of the signal events.",
              "Trivial classes (pure data holders) earn no state diagram.",
              "Consistency rule: every transition event must be realizable as a class operation.",
            ],
            table: {
              caption: "The class model mapped to the state model.",
              headers: ["Class model element", "State model counterpart", "Loan example"],
              rows: [
                ["Class", "one state diagram per dynamic class", "Loan's life cycle"],
                ["Attribute", "state variable read by guards", "renewCount < 3"],
                ["Operation", "call event or transition action", "renew() is the renew event"],
                ["Association", "source of signal events", "Member triggers issue"],
                ["Derived state", "state names", "Overdue = dueDate passed"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Building the state model from the class model",
              caption: "Five steps keep the two models consistent by construction.",
              stages: [
                { label: "Pick dynamic classes", note: "rich behavior; skip pure data holders" },
                { label: "List events", note: "from use cases and class operations" },
                { label: "Draft states and transitions", note: "guards read class attributes" },
                { label: "Cross-check", note: "every event realizable as an operation" },
                { label: "Review with interaction diagrams", note: "sequence flows must traverse the states" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the relation between the class model and the state model, mapping at least four elements of one to the other.",
                marks: 7,
                outline: [
                  "Class model: what exists; state model: how instances behave over time.",
                  "One state diagram per class with rich dynamics.",
                  "Attributes appear as state variables in guards.",
                  "Operations appear as call events or actions; associations supply the senders.",
                  "Consistency: every transition event must be a realizable operation.",
                ],
              },
              {
                q: "Derive the state diagram of Loan from its class model (attributes dueDate, status, renewCount; operations issue, renew, returnBook).",
                marks: 7,
                outline: [
                  "States: Reserved, Issued, Renewed, Overdue, Returned.",
                  "issue() event: Reserved -> Issued.",
                  "renew() with guard [renewCount < 3]: Issued -> Renewed.",
                  "Time event overdue: from Issued or Renewed -> Overdue.",
                  "returnBook(): any state -> Returned (final).",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Worked example - a one-shot life cycle for the ATM session",
            body: [
              "A complete worked machine ties the unit together. The ATM Session is a one-shot object: it is created when a card is inserted and destroyed when the card is ejected. Its states: Idle (the machine, not the session, waits), Authenticating (substates ReadingPIN and Verifying), Selecting (the customer picks a transaction), Processing (dispensing or printing) and SessionEnded (final). Guards encode the business rules: [tries < 3] permits another PIN attempt; [tries = 3] confiscates; [balance >= amount] authorizes withdrawal; the time event after(30 s) returns the card if the customer walks away.",
              "Walk one withdrawal through the labels. insertCard / createSession enters Authenticating at ReadingPIN; pinEntered [tries < 3] [pin correct] / openMenu moves to Selecting; withdrawal selected with guard [balance >= amount] enters Processing, whose do activity dispenseCash must finish before the completion transition fires to Printing. printDone / ejectCard moves to SessionEnded - the bull's-eye - and the session object is destroyed. The nested Authenticating composite reacts once to cancel, and the structure stays readable: one region, sequential substates, no concurrency needed at this level.",
              "This is the exam's favourite long question: 'draw the state diagram of an ATM session and explain'. The full-mark drawing shows: initial pseudostate and final state (it is one-shot - say so); at least one composite state with substates; at least one full-label transition with event, guard and action; at least one time event; and one guard-chosen alternative. Annotate the drawing with one sentence per feature - the annotations, not the boxes, carry the explanation marks. Then answer the obvious follow-up: Session is one-shot while Account is continuous, and both diagrams coexist in the same model.",
            ],
            keyTerms: [
              { term: "Session object", definition: "A one-shot object created per customer visit and destroyed at eject." },
              { term: "Completion transition", definition: "An unlabeled arrow that fires when the state's do activity finishes." },
              { term: "Guard arithmetic", definition: "Counters such as tries drive the business rules through guards." },
              { term: "Time event", definition: "after(30 s) - the deadline that saves the machine from a walked-away customer." },
              { term: "Annotation", definition: "The one-sentence-per-feature explanation that carries the explanation marks." },
            ],
            callout: {
              type: "tip",
              title: "Say 'one-shot' out loud",
              body: "The fastest extra mark in the ATM question: the first sentence of the answer declares 'Session is a one-shot life cycle, so the diagram carries an initial pseudostate and a final state.' Examiners scan for that classification before they look at any box.",
            },
            bullets: [
              "Session is one-shot: created at insertCard, destroyed at eject - final state present.",
              "Composite state Authenticating nests ReadingPIN and Verifying; cancel handled once.",
              "Full label shown: pinEntered [tries < 3] [pin correct] / openMenu.",
              "Time event after(30 s) / ejectCard covers the walked-away customer.",
              "Guard-chosen alternative: [balance >= amount] vs [balance < amount].",
              "One sentence of annotation per diagram feature - the explanation marks live there.",
            ],
            table: {
              caption: "States of the ATM session with their actions.",
              headers: ["State", "Entry / do / exit", "Leaves on"],
              rows: [
                ["Idle (machine)", "do: awaitCard", "insertCard / createSession"],
                ["Authenticating (composite)", "entry: startTimer", "authenticated, or cancel, or tries = 3"],
                ["ReadingPIN (substate)", "do: captureKeystrokes", "pinEntered with guards"],
                ["Selecting", "do: showMenu", "transaction chosen"],
                ["Processing", "do: dispenseCash", "completion -> Printing"],
                ["SessionEnded (final)", "-", "object destroyed"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The ATM session's walk - and back to Idle",
              caption: "The session object dies at SessionEnded, but the machine's cycle returns to Idle for the next customer.",
              steps: [
                { label: "Idle", note: "awaitCard" },
                { label: "Authenticating", note: "entry: startTimer; pin guards" },
                { label: "Selecting", note: "menu choices" },
                { label: "Processing", note: "do: dispenseCash" },
                { label: "Printing", note: "printDone / ejectCard" },
                { label: "SessionEnded -> Idle", note: "final state; the next customer re-enters Idle" },
              ],
            },
            examQuestions: [
              {
                q: "Draw the state diagram of an ATM session, showing a composite state, guards, actions, a time event and the final state. Explain each label you use.",
                marks: 14,
                outline: [
                  "One-shot life cycle: initial pseudostate, final state SessionEnded.",
                  "insertCard / createSession enters the machine.",
                  "Composite Authenticating with substates ReadingPIN and Verifying.",
                  "pinEntered [tries < 3] [pin correct] / openMenu - full label explained.",
                  "pinFailed [tries = 3] / confiscate; after(30 s) / ejectCard time events.",
                  "Guard alternative: [balance >= amount] vs [balance < amount] on withdrawal.",
                  "Completion transition after dispenseCash; the annotations carry the explanation.",
                ],
              },
              {
                q: "Why does the ATM session's state diagram need a final state while the Account's does not?",
                marks: 7,
                outline: [
                  "Session: one-shot - created and destroyed per customer visit.",
                  "Account: continuous - exists across sessions for the whole run.",
                  "The final state marks where the object's lifetime ends.",
                  "After SessionEnded no session object exists to receive events.",
                  "Both life-cycle shapes coexist in one system model.",
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
      title: "Interaction Modeling",
      summary:
        "Unit IV models what happens between objects: use case models with actors and their relationships, validation and verification through use cases, sequence diagrams and the procedural sequence model, activity diagrams with swim lanes and dynamic concurrency, communication diagrams, and the architectural pair - component and deployment diagrams.",
      chapter: {
        number: "04",
        title: "Use Cases to Deployment",
        intro:
          "Unit IV covers use case models - actors, use cases and their relationships - the use of use cases for validation and verification, sequence diagrams and the procedural sequence model, activity models with swim lanes, dynamic concurrency and activity decomposition, communication diagrams, and architectural modeling with component and deployment diagrams.",
        inOneBreath:
          "An actor is a role outside the system and a use case is one complete interaction of value, related to others by «include», «extend» and generalization. Use cases validate the requirements with users and verify the implementation by generating test cases from every scenario path. Sequence diagrams order messages along lifelines while activity diagrams flow work across swim lanes with forks, joins and «multiplicity» concurrency; communication diagrams number the same traffic over an explicit link structure. Component diagrams organize the software around interfaces; deployment diagrams place its artifacts on nodes.",
        sections: [
          {
            number: "4.1",
            title: "The use case model - actors and use cases",
            body: [
              "A use case model is the functional view of a system: it names the actors - roles outside the system that interact with it (a person, another system, a clock) - and the use cases, each a complete interaction that returns an observable result of value to one actor. An actor is a role, not a person: the same clerk may be both Teller and Supervisor. A use case is not a function; it is a whole conversation with a main success scenario plus extensions - the variant paths when validation fails, timeouts strike, or the actor cancels.",
              "Build the ATM's use case diagram. Actors: Customer (primary - initiates), Bank (secondary - the core system the ATM talks to) and MaintenanceStaff (operates, does not transact). Use cases: Withdraw Cash, Check Balance, Transfer Funds and Replenish Cash. Draw stick figures outside, the system boundary rectangle around the use case ovals, and plain associations from each actor to its use cases. Then write the Withdraw Cash use case text: main success scenario (insert card, enter PIN, choose amount, dispense, print receipt) and extensions (invalid PIN three times - confiscate; insufficient balance - offer smaller amounts). The diagram shows scope; the text is the contract.",
              "The exam asks 'what is a use case model? explain actors and use cases with an example' or 'draw the use case diagram for an ATM or library'. The full answer has four moves: define actor (a role outside the boundary, drawn as a stick figure) and distinguish primary from secondary; define use case (a complete interaction of observable value) with the main-success-plus-extensions text structure; draw the system boundary; connect actors with plain associations. The mark-separating sentence: use cases are functional requirements at the right granularity - neither too small (a function) nor too large (the whole system).",
            ],
            keyTerms: [
              { term: "Actor", definition: "A role outside the system boundary - a person, external system or clock." },
              { term: "Primary actor", definition: "The role that initiates the interaction toward a goal." },
              { term: "Use case", definition: "A complete interaction yielding an observable result of value to an actor." },
              { term: "Scenario", definition: "One specific path through a use case - the main success path, or an extension." },
              { term: "System boundary", definition: "The rectangle scoping what the project builds from what it talks to." },
            ],
            callout: {
              type: "tip",
              title: "Actor = role, never a person",
              body: "When the question offers 'clerk Ravi' as an actor, correct it: Ravi plays the roles Teller and Supervisor, and each role is one actor. The role-not-person distinction is the definition mark most students fumble.",
            },
            bullets: [
              "Actor: a role outside the system boundary - human, external system or clock.",
              "Primary actors initiate; secondary actors participate (the Bank in every ATM transaction).",
              "Use case: one complete interaction yielding an observable result of value.",
              "Each use case carries a main success scenario plus extensions for the variant paths.",
              "The system boundary rectangle scopes what is inside the project.",
              "Granularity rule: a use case is a whole conversation, not a function.",
            ],
            table: {
              caption: "Use case vocabulary on the ATM.",
              headers: ["Term", "Definition", "ATM instance"],
              rows: [
                ["Actor", "role outside the boundary", "Customer, Bank, MaintenanceStaff"],
                ["Primary actor", "initiates the interaction", "Customer"],
                ["Secondary actor", "participates but does not initiate", "Bank"],
                ["Use case", "complete interaction of value", "Withdraw Cash"],
                ["Scenario", "one path through a use case", "the successful withdrawal"],
                ["Extension", "variant path", "invalid PIN, insufficient balance"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Building a use case model",
              caption: "Actors first, goals second, text third - the diagram is the last artifact, not the first.",
              steps: [
                { label: "Identify actors", note: "roles outside the boundary" },
                { label: "List actor goals", note: "each goal is a candidate use case" },
                { label: "Write main success scenario", note: "the happy path in steps" },
                { label: "Add extensions", note: "validation failures, timeouts, cancellation" },
                { label: "Draw the diagram", note: "boundary, ovals, associations" },
                { label: "Review with stakeholders", note: "validate scope and vocabulary" },
              ],
            },
            examQuestions: [
              {
                q: "What is a use case model? Define actor and use case, and draw the use case diagram for an ATM system.",
                marks: 7,
                outline: [
                  "Use case model: the functional view - actors and the interactions of value they pursue.",
                  "Actor: a role outside the boundary; primary initiates, secondary participates.",
                  "Use case: complete interaction with a main success scenario and extensions.",
                  "Diagram: Customer, Bank and MaintenanceStaff with their use cases inside the boundary.",
                  "Granularity: whole conversations, not functions.",
                ],
              },
              {
                q: "Write the use case Withdraw Cash with its main success scenario and three extensions.",
                marks: 7,
                outline: [
                  "Actors: Customer (primary), Bank (secondary).",
                  "Main scenario: insert card, PIN, choose amount, dispense, receipt.",
                  "Extension: invalid PIN three times - confiscate card.",
                  "Extension: insufficient balance - offer alternative amounts.",
                  "Extension: customer timeout - return card, end session.",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Use case relationships - include, extend and generalize",
            body: [
              "Use cases relate to each other in three ways. «include» factors mandatory common behavior into a shared use case: Withdraw Cash and Transfer Funds both include Authenticate Customer, and the base use case cannot run without it. «extend» attaches optional or exceptional behavior to a base use case at an extension point: Handle Card Confiscation extends Withdraw Cash only when the guard [tries = 3] holds. Generalization models variants: a specialized use case inherits and may override steps of a parent. The three arrows differ in direction - include points from base to included, extend from extension to base, generalization from child to parent.",
              "Draw the ATM relationships. Withdraw Cash «include» Authenticate Customer and «include» Print Receipt - mandatory in every run, so include is right. Handle Card Confiscation «extend» Withdraw Cash at extension point 'PIN verification failed thrice', guarded by [tries = 3] - optional and rare, so extend is right. Transfer Funds and Withdraw Cash generalize from the abstract parent Transaction, inheriting the authenticate-and-confirm skeleton while overriding the money-movement step. The decision test: must it always happen and is it shared -> include; might it happen, conditionally -> extend; is it a whole variant use case -> generalization; copying steps into two ovals -> a defect.",
              "The exam question is 'explain the relationships among use cases' or 'differentiate include and extend'. The answer skeleton: define each relationship, state the arrow direction and stereotype, give the ATM example, and state the decision test. The two mark-separating details: the extend arrow points from the extension to the base (students reverse it), and the guard on the extend relationship is what makes the behavior conditional. Also state why relationships exist at all - without include, common steps are duplicated across use cases and drift apart; without extend, base use cases bloat with rare paths.",
            ],
            keyTerms: [
              { term: "«include»", definition: "Mandatory shared behavior factored into a base use case; arrow from base to included." },
              { term: "«extend»", definition: "Optional behavior attached at an extension point under a guard; arrow from extension to base." },
              { term: "Extension point", definition: "The named place in the base use case where an extension may plug in." },
              { term: "Use case generalization", definition: "A variant use case inheriting the parent's flow; arrow from child to parent." },
              { term: "Guard on extend", definition: "The condition under which the extension actually runs." },
            ],
            callout: {
              type: "exam",
              title: "The extend arrow points backwards",
              body: "Students draw «extend» from base to extension and lose the mark: the arrow runs from the extension use case to the base, with the guard on the arrow. Include and extend point in opposite directions - memorize the pair as one contrast.",
            },
            bullets: [
              "«include»: mandatory shared behavior; arrow from base to included.",
              "«extend»: optional behavior at a named extension point, with a guard; arrow from extension to base.",
              "Generalization: variant use cases inherit a parent's skeleton; arrow from child to parent.",
              "ATM include set: Authenticate Customer, Print Receipt.",
              "ATM extend set: Handle Card Confiscation guarded by [tries = 3].",
              "Decision test: always + shared -> include; conditional -> extend; whole variant -> generalization.",
            ],
            table: {
              caption: "The three use case relationships.",
              headers: ["Relationship", "Arrow direction", "When it applies", "ATM example"],
              rows: [
                ["«include»", "base -> included", "behavior mandatory in every run", "Withdraw Cash includes Authenticate"],
                ["«extend»", "extension -> base", "behavior optional, guarded, at an extension point", "Handle Card Confiscation extends Withdraw"],
                ["Generalization", "child -> parent", "a whole variant of the parent use case", "Transfer Funds is a Transaction"],
                ["Duplication (defect)", "none", "copied steps across use cases", "two authenticate sections drifting apart"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Where does the shared or rare behavior go?",
              caption: "One decision, four outcomes - three of them legal.",
              start: "Common or exceptional steps threaten two use cases -",
              branches: [
                { label: "Must always run, shared by several", outcome: "factor it out and «include» it", good: true },
                { label: "Runs only under a condition", outcome: "«extend» the base at a named extension point with a guard", good: true },
                { label: "A whole variant flow exists", outcome: "generalize from a parent use case", good: true },
                { label: "Copy-paste the steps", outcome: "duplication - the paths drift apart and maintenance doubles", good: false },
              ],
            },
            examQuestions: [
              {
                q: "Explain «include», «extend» and use case generalization with ATM examples, stating the arrow direction of each.",
                marks: 7,
                outline: [
                  "«include»: mandatory shared behavior; base -> included; Authenticate Customer.",
                  "«extend»: optional guarded behavior; extension -> base; Handle Card Confiscation.",
                  "Generalization: variant inherits the parent flow; child -> parent; Transaction parent.",
                  "The decision test distinguishing the three.",
                  "Why they exist: no duplication, no bloated base use cases.",
                ],
              },
              {
                q: "Differentiate «include» and «extend» relationships. When would you factor Authenticate Customer out of several ATM use cases, and why?",
                marks: 7,
                outline: [
                  "Include: unconditional, every run; extend: conditional, guarded, rare.",
                  "Arrow directions differ - include forward, extend backward.",
                  "Authenticate is mandatory and shared -> «include».",
                  "One definition, many users - changes happen once.",
                  "The extension point and guard are what keep rare paths out of the base text.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Use cases for validation and verification",
            body: [
              "Use cases are not just diagrams - they are the project's requirements contract, and they serve two distinct quality jobs. Validation asks 'are we building the right system?' and uses use cases as walkthrough scripts: customers and analysts step through the main success scenario and each extension in plain language, discovering missing requirements before any code exists. Verification asks 'are we building the system right?' and derives test cases from use cases: every scenario path becomes a test with inputs, expected outputs and preconditions, so the functional test suite is traceable to the requirements the users signed.",
              "Run both on Withdraw Cash. Validation: sit the bank manager with the use case text and walk it - at extension 'insufficient balance' the manager adds a requirement the analysts missed (offer a partial amount, not just rejection); at 'receipt printing' the branch policy requires a duplicate for amounts above a threshold. The use case text absorbs both changes the same day, at text cost. Verification: the tester turns each path into test cases - the main scenario (valid card, correct PIN, sufficient balance - expect dispense and receipt), the invalid-PIN path (three failures - expect confiscation), the timeout path, the insufficient-balance path. Every later code change re-runs the set; failures trace straight back to a named requirement.",
              "The exam question is 'how are use cases used for validation and verification?'. The answer is the two-column contrast: validation - with the customer, on the text, before code, catches missing and wrong requirements; verification - with the tester, on the running system, against code, catches implementation faults; both trace through the same use case. Add the traceability chain - requirement (use case) -> scenario -> test case -> defect - and the closing sentence: a use case that has been neither walked with a user nor turned into tests is decoration, not a requirement.",
            ],
            keyTerms: [
              { term: "Validation", definition: "Checking that the requirements describe the right system - walkthroughs with users." },
              { term: "Verification", definition: "Checking that the implementation matches the requirements - tests derived from scenarios." },
              { term: "Walkthrough", definition: "Stepping through a scenario in plain language with the customer." },
              { term: "Test case", definition: "Inputs, preconditions and expected outputs for one scenario path." },
              { term: "Traceability chain", definition: "Use case -> scenario -> test case -> defect - requirements and tests stay connected." },
            ],
            callout: {
              type: "exam",
              title: "Traceability is the closing mark",
              body: "Whatever else the answer says, end with the chain: use case -> scenario -> test case -> defect. Examiners ask this question precisely to hear that requirements, tests and defects stay connected through the use case.",
            },
            bullets: [
              "Validation: building the right system - walkthroughs of scenarios with real users.",
              "Verification: building the system right - test cases derived from each scenario path.",
              "Every extension is a test case with inputs, preconditions and expected outputs.",
              "Traceability chain: use case -> scenario -> test case -> defect report.",
              "Validation happens before code; verification happens against code.",
              "Both jobs read the same artifact - that is why use cases are the requirements contract.",
            ],
            table: {
              caption: "Validation vs verification through use cases.",
              headers: ["Aspect", "Validation", "Verification"],
              rows: [
                ["Question", "right system?", "system built right?"],
                ["Partner", "customer, domain expert", "tester, QA"],
                ["Artifact used", "use case text and diagrams", "test cases from scenarios"],
                ["Stage", "before and during construction", "after each increment"],
                ["Catches", "missing, wrong, ambiguous requirements", "implementation faults"],
                ["Output", "revised use case text", "pass/fail and defect reports"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Validation vs verification",
              caption: "Same use case, two audiences, two stages - and one traceability chain.",
              left: {
                heading: "Validation - right system?",
                items: [
                  "Walk scenarios with the customer in plain language",
                  "Discovers missing and wrong requirements",
                  "Runs before code exists",
                  "Output: revised use case text",
                ],
              },
              right: {
                heading: "Verification - built right?",
                items: [
                  "Turn each scenario path into a test case",
                  "Discovers implementation faults",
                  "Runs against each increment",
                  "Output: pass/fail, defects traced to use cases",
                ],
              },
            },
            examQuestions: [
              {
                q: "How do use cases support validation of requirements and verification of the implementation? Contrast the two activities.",
                marks: 7,
                outline: [
                  "Validation: walkthrough scenarios with users - right system?",
                  "Verification: derive test cases from each path - built right?",
                  "Stage contrast: before code vs against code.",
                  "ATM example: the manager adds a partial-amount policy; the tester scripts three PIN failures.",
                  "The traceability chain closes the answer.",
                ],
              },
              {
                q: "Derive four test cases from the Withdraw Cash use case, naming the scenario each verifies.",
                marks: 7,
                outline: [
                  "Main success: valid card, correct PIN, sufficient balance - dispense and receipt.",
                  "Invalid PIN thrice - confiscation.",
                  "Insufficient balance - alternative amounts offered.",
                  "Customer timeout - card returned, session ends.",
                  "Each test names its use case extension - traceability stated.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Sequence diagrams and the procedural sequence model",
            body: [
              "A sequence diagram shows one scenario as an exchange of messages among objects arranged along lifelines that run down the page - time flows downward, so order is explicit. Notation: each object gets a lifeline headed by its name (Customer; :ATMUI), activation bars mark the period an object is executing, solid arrows are synchronous messages with dashed return arrows, open arrows are asynchronous messages, and an X marks destruction. It realizes one use case scenario: the object interaction that lies behind the actor's conversation.",
              "Realize the withdrawal's main success scenario. The Customer actor sends withdraw(amount) to :ATMUI; :ATMUI calls validate(card, pin) to :Session (an activation bar opens); :Session sends checkBalance(acct) to :Bank and receives the balance; :ATMUI sends dispense(amount) to :CashDispenser, which returns dispensed; :ATMUI sends print(amount, balance) to :ReceiptPrinter and finally returns to the actor. The procedural sequence model organizes the same exchange as nested procedure calls: each synchronous message opens a nested activation on the callee, calls return in strict stack order, and the whole diagram reads as one call tree - the discipline for method-level design inside one program.",
              "The exam asks 'draw the sequence diagram for use case X' or 'explain sequence diagram notation'. The drawing marks come from five features, each worth a look: lifelines with object names, activation bars, at least one synchronous message with its dashed return, one self-call, and correct top-to-bottom ordering. The explanation marks come from the reading rule - time flows downward, so the diagram states the order, not just the possibility, of messages. For the procedural sequence model, contrast it with concurrent interaction: procedural calls return in stack order, concurrent messages need not - say which your diagram uses.",
            ],
            keyTerms: [
              { term: "Lifeline", definition: "The dashed vertical line under an object's name - the object's existence during the scenario." },
              { term: "Activation bar", definition: "The thin rectangle showing the period an object is executing." },
              { term: "Synchronous message", definition: "A solid-arrow call whose sender waits for the dashed-arrow return." },
              { term: "Procedural sequence model", definition: "Interaction organized as nested procedure calls with returns in stack order." },
              { term: "Scenario realization", definition: "The sequence diagram that shows how objects cooperate to deliver one use case path." },
            ],
            callout: {
              type: "warning",
              title: "Order is the content",
              body: "The commonest sketch error: messages drawn out of chronological order because the boxes were arranged for neatness. A sequence diagram asserts an order - if validate happens after dispense, the diagram lies about the design. Check the top-to-bottom sequence against the use case text before finishing.",
            },
            bullets: [
              "Lifelines run downward; time flows from top to bottom - order is explicit.",
              "Activation bars show when an object is executing.",
              "Synchronous message: solid arrow; its return: dashed arrow.",
              "Asynchronous message: open arrow; destruction: the X.",
              "Withdrawal realization: Customer -> :ATMUI -> :Session -> :Bank, :CashDispenser, :ReceiptPrinter.",
              "Procedural sequence model: nested calls and activations, returns in stack order.",
            ],
            table: {
              caption: "Sequence diagram notation.",
              headers: ["Element", "Notation", "Meaning"],
              rows: [
                ["Lifeline", "dashed vertical line under the object name", "one participant's existence"],
                ["Activation bar", "thin rectangle on the lifeline", "object executing (holds the thread)"],
                ["Synchronous message", "solid arrowhead", "caller waits for completion"],
                ["Return", "dashed arrow", "result handed back"],
                ["Asynchronous message", "open (stick) arrowhead", "fire and continue"],
                ["Creation / destruction", "message to a new lifeline / X", "object born or killed mid-scenario"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The withdrawal scenario as a message chain",
              caption: "One scenario, five hops - each arrow is a synchronous call with its return.",
              steps: [
                { label: "Customer -> :ATMUI", note: "withdraw(amount)" },
                { label: ":ATMUI -> :Session", note: "validate(card, pin)" },
                { label: ":Session -> :Bank", note: "checkBalance(acct) -> balance" },
                { label: ":ATMUI -> :CashDispenser", note: "dispense(amount) -> dispensed" },
                { label: ":ATMUI -> :ReceiptPrinter", note: "print(...) -> done; result returns to Customer" },
              ],
            },
            examQuestions: [
              {
                q: "Draw the sequence diagram for the main success scenario of Withdraw Cash and explain the notation you used.",
                marks: 7,
                outline: [
                  "Lifelines: Customer, :ATMUI, :Session, :Bank, :CashDispenser, :ReceiptPrinter.",
                  "Synchronous calls with dashed returns; activations on the callee.",
                  "Order: validate before dispense before print.",
                  "A self-call or return arrow shown explicitly.",
                  "Reading rule: time flows downward - the diagram asserts the order.",
                ],
              },
              {
                q: "What is the procedural sequence model? How does it differ from a concurrent (non-procedural) interaction?",
                marks: 7,
                outline: [
                  "Procedural model: interactions organized as nested procedure calls.",
                  "Each synchronous call opens a nested activation; returns happen in strict stack order.",
                  "Suits method-level design inside one program.",
                  "Concurrent interaction: messages need not return; activations may overlap freely.",
                  "ATM realization: validate and dispense are nested calls inside the UI's activation.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Activity diagrams - swim lanes and dynamic concurrency",
            body: [
              "An activity diagram models a workflow: rounded-box activities connected by completion transitions - control passes when the activity finishes, with no event needed. Decisions (diamonds with guards) choose among paths; fork and join bars split and re-merge flows; a filled circle starts, a bull's-eye ends. Swim lanes partition the diagram by who performs each activity - actor, class or subsystem - and an activity sitting in a lane names its performer. Dynamic concurrency marks an activity executed once per element of a collection, concurrently (the «multiplicity» mark on the activity), and any activity may be decomposed into its own sub-diagram for readability.",
              "Model order fulfilment in three lanes. Customer lane: Place Order. Warehouse lane: Check Stock, Pick Items, Ship. Billing lane: Process Payment, Issue Invoice. Flow: Place Order forks to Check Stock and Process Payment (they run in parallel); guards on Check Stock route [in stock] to Pick Items and [out of stock] to Notify Customer; the join before Ship waits for both pick and payment; Ship then completes at Notify Customer. Decompose Process Payment into its own sub-diagram (validate card, contact gateway, record) - the parent keeps one box, the detail lives one level down. The «many items» mark on Pick Items makes it pick every line concurrently.",
              "The exam asks 'explain activity diagrams with swim lanes' or 'differentiate activity and sequence diagrams'. The answer skeleton: define the activity model (a workflow with completion transitions, no events); list the constructs - decision, fork/join, start/end, swim lanes; draw the order-fulfilment diagram naming the lane of every activity; mention dynamic concurrency («multiplicity») and decomposition into sub-diagrams. The contrast sentence earns the comparison mark: sequence diagrams show one scenario's object messages in time order; activity diagrams show the whole workflow's branching and parallelism without naming the objects that send messages.",
            ],
            keyTerms: [
              { term: "Activity diagram", definition: "A workflow model - activities joined by completion transitions, with decisions and parallelism." },
              { term: "Swim lane", definition: "A partition naming the actor, class or subsystem that performs the activities inside it." },
              { term: "Fork / join", definition: "Thick bars that split control into parallel flows and re-merge them." },
              { term: "Dynamic concurrency", definition: "The «multiplicity» mark: one activity run per element of a collection, concurrently." },
              { term: "Activity decomposition", definition: "Expanding one activity into its own sub-diagram, one level of detail down." },
            ],
            callout: {
              type: "tip",
              title: "No events inside an activity diagram",
              body: "Sequence diagrams wait for named events; activity diagrams advance on completion alone. If your activity arrows carry event names, you are drawing a state machine - keep the two notations apart and say so in the viva.",
            },
            bullets: [
              "Activity model: workflow of rounded boxes; transitions fire on completion, not events.",
              "Decision diamonds with guards; fork/join bars give parallelism; the bull's-eye ends.",
              "Swim lanes partition by performer - actor, class or subsystem.",
              "Dynamic concurrency: «multiplicity» marks an activity run per element, concurrently.",
              "Decomposition: any activity expands into its own sub-diagram.",
              "Sequence vs activity: one scenario's messages vs the whole workflow's branching.",
            ],
            table: {
              caption: "Activity diagram constructs.",
              headers: ["Construct", "Notation", "Order-fulfilment use"],
              rows: [
                ["Activity", "rounded rectangle in a lane", "Check Stock in the Warehouse lane"],
                ["Decision", "diamond with guards", "[in stock] / [out of stock]"],
                ["Fork / join", "thick bar", "stock check parallel to payment"],
                ["Swim lane", "vertical partition", "Customer | Warehouse | Billing"],
                ["Dynamic concurrency", "«multiplicity» on the activity", "Pick Items for every line at once"],
                ["Decomposition", "sub-diagram behind one activity", "Process Payment's three steps"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Order fulfilment across three swim lanes",
              caption: "Left to right is time; each stage names its lane - fork and join bars make the parallelism explicit.",
              stages: [
                { label: "Place Order", note: "Customer lane" },
                { label: "Check Stock + Process Payment", note: "forked: Warehouse | Billing lanes run in parallel" },
                { label: "Pick Items", note: "Warehouse lane, «many items» dynamic concurrency" },
                { label: "Ship", note: "join waits for pick and payment" },
                { label: "Notify Customer", note: "Customer lane; end" },
              ],
            },
            examQuestions: [
              {
                q: "Draw an activity diagram with swim lanes for order fulfilment, showing a decision, a fork/join and one decomposed activity.",
                marks: 7,
                outline: [
                  "Three lanes: Customer, Warehouse, Billing.",
                  "Fork after Place Order: Check Stock | Process Payment in parallel.",
                  "Decision [in stock] / [out of stock] after Check Stock.",
                  "Join before Ship waits for both branches.",
                  "Process Payment decomposed into validate, gateway, record.",
                ],
              },
              {
                q: "What is dynamic concurrency in an activity model? How is it notated and when is it used?",
                marks: 7,
                outline: [
                  "An activity performed once per element of a collection, concurrently.",
                  "Notation: the «multiplicity» keyword attached to the activity.",
                  "Example: Pick Items runs for every order line at once.",
                  "Contrast: plain iteration runs the activity repeatedly in sequence.",
                  "Use when the elements are independent - no ordering between them.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Communication diagrams",
            body: [
              "A communication diagram (formerly the collaboration diagram) shows the same interaction as a sequence diagram but organized by structure: objects are placed as boxes connected by links, and messages travel along the links with sequence numbers - 1:, 2:, 3: - where decimal numbers (2.1:, 2.2:) show nested calls. Time is implicit in the numbering rather than drawn as a time axis. The diagram answers a different question than its twin: not 'in what order do messages flow?' but 'which objects are linked, and what traffic crosses each link?' - making it the better view for spotting coupling.",
              "Redraw the withdrawal scenario as a communication diagram. Objects: :Customer, :ATMUI, :Session, :Bank, :CashDispenser and :ReceiptPrinter. Links: Customer-ATMUI, ATMUI-Session, Session-Bank, ATMUI-CashDispenser and ATMUI-ReceiptPrinter. Messages with numbers: 1: withdraw(amount) along Customer-ATMUI; 1.1: validate(card, pin) along ATMUI-Session; 1.1.1: checkBalance(acct) along Session-Bank; 2: dispense(amount) along ATMUI-CashDispenser; 3: print(...) along ATMUI-ReceiptPrinter. The decimal numbering encodes the nesting the sequence diagram showed as stacked activations. Re-arranging the boxes does not change the meaning - only the boxes, links and numbers carry meaning; that freedom to lay out for readability is the diagram's main practical advantage.",
              "The exam asks 'differentiate sequence and communication diagrams' or 'convert this sequence diagram to a communication diagram'. The conversion rule is mechanical and earns full marks when stated: lifelines become boxes, message order becomes sequence numbers, activation nesting becomes decimal numbering (1.1 under 1), and each message needs a link between its sender and receiver - add the link if missing. The comparison answer is the matrix: sequence = time explicit, structure implicit; communication = structure explicit, time by numbering; same information, two organizations, chosen by what you need to see.",
            ],
            keyTerms: [
              { term: "Communication diagram", definition: "An interaction view organized by object links, with messages ordered by sequence numbers." },
              { term: "Link", definition: "The drawn connection between two objects over which their messages travel." },
              { term: "Sequence number", definition: "The 1:, 1.1:, 2: label that orders messages and nests calls." },
              { term: "Nested call numbering", definition: "One decimal level per activation depth: 1.1.1 under 1.1 under 1." },
              { term: "Coupling map", definition: "What the link structure reveals - which objects talk to which." },
            ],
            callout: {
              type: "exam",
              title: "The numbering carries the time",
              body: "In communication-diagram questions the marks sit in the numbering: flat numbers for top-level messages, one decimal level per nesting depth. A diagram with unnumbered arrows is not a communication diagram at all - state the rule, then number everything.",
            },
            bullets: [
              "Communication diagram: objects, links, numbered messages - structure first.",
              "Sequence numbers 1:, 2:, 3: order the traffic; decimals 1.1:, 1.2: nest calls.",
              "Every message needs a link between sender and receiver - the links are the coupling map.",
              "Conversion: lifeline -> box, order -> number, activation nesting -> decimal depth.",
              "Layout is free - only boxes, links and numbers carry meaning.",
              "Same scenario as the sequence diagram; pick the view by the question asked.",
            ],
            table: {
              caption: "Sequence vs communication - one interaction, two views.",
              headers: ["Aspect", "Sequence diagram", "Communication diagram"],
              rows: [
                ["Organizing axis", "time (top to bottom)", "structure (links among objects)"],
                ["Message order", "position on the page", "sequence numbers 1:, 1.1:, 2:"],
                ["Nesting of calls", "stacked activation bars", "decimal numbering"],
                ["Shows object links", "implicitly", "explicitly - the coupling map"],
                ["Best for", "reading one scenario's order", "seeing which objects talk to which"],
                ["ATM use", "realize Withdraw Cash step by step", "audit ATMUI's fan-out to its partners"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The interaction views at a glance",
              caption: "Axes: does the view make time explicit? Does it show object links?",
              axes: { x: "Time explicit: no -> yes", y: "Object links shown: no -> yes" },
              quadrants: [
                { label: "Communication diagram", note: "links drawn, time carried by numbering" },
                { label: "Timing view", note: "links and explicit time together" },
                { label: "Activity diagram", note: "control flow only - no links, no message order" },
                { label: "Sequence diagram", note: "time explicit top to bottom; links implied" },
              ],
            },
            examQuestions: [
              {
                q: "Convert the Withdraw Cash sequence diagram into a communication diagram, showing links and full message numbering.",
                marks: 7,
                outline: [
                  "Objects become boxes; messages travel on links.",
                  "1: withdraw(amount), Customer to ATMUI.",
                  "1.1: validate(card, pin); 1.1.1: checkBalance(acct) - decimal nesting.",
                  "2: dispense(amount); 3: print(...).",
                  "Links added wherever a message crosses - the coupling map.",
                ],
              },
              {
                q: "Differentiate sequence and communication diagrams. When is each the better view?",
                marks: 7,
                outline: [
                  "Sequence: time explicit top-to-bottom; communication: time by numbering.",
                  "Sequence: structure implicit; communication: links drawn.",
                  "Both show the same interaction - choose by the question asked.",
                  "Scenario walkthrough -> sequence; coupling audit -> communication.",
                  "Conversion is mechanical: lifeline to box, order to number.",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Architectural modeling - component and deployment diagrams",
            body: [
              "Architectural modeling moves from behavior to the physical system, with two diagrams. A component diagram shows the system as components - replaceable software units (libraries, executables, services) - wired together through interfaces: a provided interface (the lollipop) is what a component offers, a required interface (the socket) is what it consumes, and a dependency arrow shows one component using another. A deployment diagram shows the hardware: nodes (devices or execution environments) holding artifacts (files, executables), connected by communication paths. Component diagrams organize the code; deployment diagrams organize where the code runs.",
              "Model the ATM's architecture. Component diagram: components ATMGUI, SessionManager, BankingAdapter, CashController and ReceiptService; SessionManager provides the interface TransactionHandling (lollipop) and requires AccountAccess from BankingAdapter (socket); CashController requires DispenseProtocol. Deployment diagram: three nodes - ATM Terminal (runs the ATMGUI and CashController artifacts), Branch Server (runs SessionManager and ReceiptService) and Core Bank Host (runs the banking database); communication paths label the protocols (encrypted TCP from terminal to branch server, private link to the host). The two diagrams answer different audits: the component view asks 'what depends on what in the code?', the deployment view asks 'what runs where, and over what network?'",
              "The exam asks 'explain component and deployment diagrams with examples' or 'differentiate component and deployment diagrams'. The skeleton: define each diagram and its element set (components + interfaces + dependencies vs nodes + artifacts + communication paths), draw the ATM pair, and state the division of labour - component = logical packaging of software, deployment = physical placement on hardware, connected by the artifact-deploys-on-node relationship. Name the interface notation (provided lollipop, required socket) explicitly; it is the single most-tested symbol in this section.",
            ],
            keyTerms: [
              { term: "Component", definition: "A replaceable software unit behind a defined interface." },
              { term: "Provided interface", definition: "The lollipop - the services a component offers to others." },
              { term: "Required interface", definition: "The socket - the services a component needs from others." },
              { term: "Node", definition: "A device or execution environment in the deployment diagram." },
              { term: "Artifact", definition: "A physical file or executable that deploys onto a node." },
            ],
            callout: {
              type: "exam",
              title: "The lollipop is the tested symbol",
              body: "Draw the provided interface as a full circle on the component's edge and the required interface as a half-circle socket it plugs into. Many sketches omit both and draw plain arrows - the examiner checks for lollipop and socket before reading anything else.",
            },
            bullets: [
              "Component diagram: components, provided/required interfaces (lollipop/socket), dependencies.",
              "Deployment diagram: nodes, artifacts, communication paths with protocols.",
              "Artifact deploys on node - the bridge between the two diagrams.",
              "ATM components: SessionManager provides TransactionHandling; requires AccountAccess.",
              "ATM nodes: ATM Terminal, Branch Server, Core Bank Host over labelled paths.",
              "Audit questions: component = what depends on what; deployment = what runs where.",
            ],
            table: {
              caption: "Component vs deployment diagram.",
              headers: ["Aspect", "Component diagram", "Deployment diagram"],
              rows: [
                ["Element", "components, interfaces", "nodes, artifacts, communication paths"],
                ["Shows", "logical packaging and dependencies", "physical placement of software"],
                ["Key notation", "provided lollipop, required socket", "3-D box node; artifact rectangle"],
                ["ATM example", "SessionManager requires AccountAccess", "Branch Server runs the SessionManager artifact"],
                ["Question answered", "what does the code depend on?", "what runs where, over what network?"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The ATM deployment, read top down",
              caption: "Each layer is a node; artifacts sit on nodes and talk over the labelled paths.",
              layers: [
                { label: "ATM Terminal node", note: "ATMGUI, CashController artifacts - user-facing" },
                { label: "Branch Server node", note: "SessionManager, ReceiptService artifacts - transaction logic" },
                { label: "Core Bank Host node", note: "banking database and accounts service" },
                { label: "Communication paths", note: "encrypted TCP terminal->server; private link server->host" },
              ],
            },
            examQuestions: [
              {
                q: "Draw a component diagram for the ATM software, showing provided and required interfaces, and explain the notation.",
                marks: 7,
                outline: [
                  "Components: ATMGUI, SessionManager, BankingAdapter, CashController, ReceiptService.",
                  "SessionManager provides TransactionHandling (lollipop).",
                  "SessionManager requires AccountAccess (socket) from BankingAdapter.",
                  "Dependency arrows between the remaining components.",
                  "Interfaces are the contract - components are replaceable behind them.",
                ],
              },
              {
                q: "Differentiate component and deployment diagrams. Show how one artifact of your component design appears in the deployment diagram.",
                marks: 7,
                outline: [
                  "Component diagram: software packaging and interface dependencies.",
                  "Deployment diagram: nodes, artifacts, communication paths.",
                  "Bridge: an artifact deploys on a node.",
                  "ATM: the SessionManager artifact runs on the Branch Server node.",
                  "Protocol labels on the paths (encrypted TCP, private link).",
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
      title: "System Design and Class Design",
      summary:
        "Unit V closes the gap between model and code: system design's global decisions, class design and implementation modeling, implementing structure and functionality from the class model, frameworks and design patterns, a comparison of object-oriented languages, object-oriented databases, OOP style, and the middleware triad CORBA, COM and DCOM.",
      chapter: {
        number: "05",
        title: "From Design to Implementation",
        intro:
          "Unit V covers system design and class design, implementation modeling, implementing structure and implementing functionality, frameworks, design patterns, a comparison of object-oriented languages and their programming style, object-oriented databases, and the distributed middleware CORBA, COM and DCOM.",
        inOneBreath:
          "System design makes the global decisions once - subsystems, concurrency, hardware, data management, control - and class design completes the analysis model into a buildable one with signatures, visibility and navigation. Associations become references and collections maintained at a single entry point; operations become methods that delegate to the classes owning the data. Frameworks invert control and fill hot spots, while patterns package proven solutions by creational, structural and behavioral intent. Languages differ by typing and memory management, OO databases remove the impedance mismatch, and CORBA, COM and DCOM differ mainly in whose standard and which platform.",
        sections: [
          {
            number: "5.1",
            title: "System design - partitioning into subsystems",
            body: [
              "System design is the first stage of design: it makes the global decisions once, so class design can proceed locally. Its classic issues: choose an architecture and partition the system into subsystems (a subsystem is a package of classes with a clean interface); decide concurrency (which threads or processes exist); map subsystems to hardware and processors; choose data management (files, relational DB, OO DB); pick global control (event-driven, or one central coordinator); and handle boundary conditions (start-up, shutdown, failure). Each decision is made once for the system, not per class.",
              "Design the library system's architecture as layers. Presentation subsystem (the ui package): screens and controllers. Service subsystem: the issue, reserve and renew use-case logic. Domain subsystem: Member, Book, Loan - the analysis classes, unchanged. Persistence subsystem: repositories and the mapping to the relational schema. Rules: dependencies point downward only, so domain knows nothing of ui; the concurrency decision runs one thread per terminal session plus a background reservation queue; data management chooses a relational DB behind the persistence layer; control is event-driven from the ui. Each subsystem is built and tested independently - that independence is the payoff of partitioning.",
              "The exam question is 'explain system design and the issues it addresses' or 'what is a subsystem?'. Answer: define subsystem (a group of classes with a well-defined interface, treated as one unit), list the system design issues in order (architecture and partitioning, concurrency, hardware mapping, data management, global control, boundary conditions), and draw the layered library architecture with the downward-only dependency rule. Distinguish layers from partitions - layers order subsystems by abstraction level; partitions slice horizontally at the same level (a Billing subsystem beside a Catalogue subsystem) - that contrast is the mark separator.",
            ],
            keyTerms: [
              { term: "System design", definition: "The stage that makes the architecture-level decisions once for the whole system." },
              { term: "Subsystem", definition: "A group of classes behind one clean interface - the unit of partitioning." },
              { term: "Layer", definition: "Subsystems ordered by abstraction level, dependencies pointing downward." },
              { term: "Partition", definition: "Subsystems sliced side by side at the same abstraction level." },
              { term: "Boundary condition", definition: "Start-up, shutdown and failure behaviour planned at the system level." },
            ],
            callout: {
              type: "tip",
              title: "Layers vs partitions",
              body: "The subtle question 'is a subsystem a layer?' Answer: only if it orders by abstraction - persistence beneath domain beneath ui is layering; putting Billing beside Catalogue at the same level is partitioning. Most real systems use both; saying so is the maturity mark.",
            },
            bullets: [
              "System design makes the global decisions once: architecture, concurrency, storage, control.",
              "Subsystem: a package of classes behind one clean interface - the unit of partitioning.",
              "Classic issues: partitioning, concurrency, hardware mapping, data management, global control, boundary conditions.",
              "Library layers: ui -> service -> domain -> persistence, dependencies downward only.",
              "Layers order by abstraction; partitions slice at the same level (Billing beside Catalogue).",
              "Each subsystem builds and tests independently behind its interface.",
            ],
            table: {
              caption: "System design issues and the library's answers.",
              headers: ["Issue", "Decision", "Library example"],
              rows: [
                ["Partitioning", "subsystems with clean interfaces", "ui / service / domain / persistence"],
                ["Concurrency", "threads per session + background queue", "terminal threads, reservation worker"],
                ["Hardware mapping", "clients and one server host", "terminals to the branch server"],
                ["Data management", "relational DB behind repositories", "persistence maps classes to tables"],
                ["Global control", "event-driven from the ui", "screen events drive the flows"],
                ["Boundary conditions", "start-up, shutdown, failure recovery", "boot loads catalogue; crash re-queues loans"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The library system as layered subsystems",
              caption: "Index 0 is the top layer; every dependency arrow points downward - the architecture in one rule.",
              layers: [
                { label: "Presentation subsystem (ui)", note: "screens, controllers - no business rules" },
                { label: "Service subsystem", note: "use case logic: issue, reserve, renew" },
                { label: "Domain subsystem", note: "Member, Book, Loan - the analysis classes" },
                { label: "Persistence subsystem", note: "repositories, mapping to the relational schema" },
              ],
            },
            examQuestions: [
              {
                q: "What is system design? List the issues it addresses and explain subsystem partitioning with a layered example.",
                marks: 7,
                outline: [
                  "System design: the global decisions made once before class design.",
                  "Issues: partitioning, concurrency, hardware mapping, data management, control, boundaries.",
                  "Subsystem = package of classes behind one interface.",
                  "Library layers: ui, service, domain, persistence - downward dependencies.",
                  "Layers vs partitions distinguished.",
                ],
              },
              {
                q: "For the library system, decide concurrency, data management and global control, justifying each choice.",
                marks: 7,
                outline: [
                  "Concurrency: one thread per terminal session plus a background reservation queue.",
                  "Data management: relational DB behind the persistence subsystem.",
                  "Global control: event-driven from ui events.",
                  "Justification: interactive latency needs threads; reports need SQL; users drive the flows.",
                  "Consequence: domain stays thread-agnostic; persistence serializes access.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Class design and implementation modeling",
            body: [
              "Class design turns the analysis class model into a design class model - complete, consistent and ready to code. Its steps: review the analysis classes for correctness and completeness; complete every attribute and operation with full signatures (types, and visibility + public, - private, # protected); decide association navigation (which end holds the reference); restructure for reuse (pull common structure into abstract superclasses); optimize for efficiency (add derived attributes, caches and redundancy - consciously and with a note); and map the model to the target language's features. Every change is traceable back to an analysis element.",
              "Design the Loan class. Analysis said Loan has issueDate and status - design completes them: issueDate: Date (private), status: LoanState (private), renewCount: int (private). Operations get signatures: renew(): boolean (public, returns false when renewCount reaches 3), calculateFine(): Money (public, derives from dueDate and today - a derived attribute cached daily). The association Loan-Book becomes navigable: Loan holds bookRef: Copy (private) - loans need to find their copy; the reverse is a query, not a stored reference. Commonality with Reservation pulls an abstract superclass CirculationRecord holding memberRef and dates. Each decision carries a one-line justification a reviewer can check.",
              "The exam question is 'what is class design?' or 'how does the design class model differ from the analysis class model?'. The comparison table is the answer's spine: analysis has classes, attributes without types, operations without signatures, non-navigable associations; design adds types, visibility, navigable references, operation signatures, and conscious optimizations. State the two restructuring goals - reuse (abstract classes) and efficiency (caches, redundancy) - and the discipline that keeps design honest: every optimization is annotated with its reason, so the next reader can undo it when the reason dies.",
            ],
            keyTerms: [
              { term: "Class design", definition: "Completing the analysis model into a buildable design class model." },
              { term: "Visibility", definition: "+ public, - private, # protected - applied deliberately to every feature." },
              { term: "Navigability", definition: "Which association ends hold stored references and which are computed." },
              { term: "Derived attribute", definition: "Data computed from other attributes, cached for speed and kept consistent." },
              { term: "Restructuring", definition: "Adding abstract superclasses and delegations for reuse, or caches for speed." },
            ],
            callout: {
              type: "warning",
              title: "Optimization needs a receipt",
              body: "Adding a redundant field speeds a query but risks inconsistency. The design rule: every optimization carries a comment naming the reason and the invalidation path. An unexplained cache is a future bug with no owner - examiners ask for the annotation habit, not the cache.",
            },
            bullets: [
              "Class design completes signatures, visibility and navigation on the analysis model.",
              "Visibility: + public, - private, # protected - applied deliberately, not by default.",
              "Navigation: decide which association ends hold stored references.",
              "Restructure for reuse: pull shared structure into abstract superclasses.",
              "Optimize consciously: derived attributes and caches, each annotated with its reason.",
              "Traceability: every design change points back to an analysis element.",
            ],
            table: {
              caption: "Analysis class model vs design class model.",
              headers: ["Aspect", "Analysis model", "Design model"],
              rows: [
                ["Attributes", "names only", "names + types + visibility"],
                ["Operations", "responsibilities", "full signatures and return types"],
                ["Associations", "semantic links", "navigable references, containers chosen"],
                ["Class structure", "domain classes", "added abstract superclasses, helpers"],
                ["Performance", "not considered", "caches and redundancy, annotated"],
                ["Target language", "none", "mapped to its features"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The class design procedure",
              caption: "Six steps from analysis model to buildable design model - each traceable to the last.",
              steps: [
                { label: "Review analysis classes", note: "completeness and correctness" },
                { label: "Complete signatures", note: "types, visibility (+, -, #)" },
                { label: "Choose navigation", note: "which ends store references" },
                { label: "Restructure for reuse", note: "abstract superclasses, delegations" },
                { label: "Optimize", note: "derived data, caches - annotated" },
                { label: "Map to the language", note: "inheritance, collections, exceptions" },
              ],
            },
            examQuestions: [
              {
                q: "What is class design? Explain how the design class model differs from the analysis class model.",
                marks: 7,
                outline: [
                  "Class design completes the analysis model into a buildable one.",
                  "Attributes gain types and visibility; operations gain signatures.",
                  "Associations become navigable references with chosen containers.",
                  "Restructuring: abstract superclasses for reuse; annotated optimizations for speed.",
                  "Traceability to analysis elements is maintained.",
                ],
              },
              {
                q: "Design the Loan class from its analysis description - complete the attributes, signatures, navigation and one restructuring decision, with justification.",
                marks: 7,
                outline: [
                  "Attributes: issueDate: Date, status: LoanState, renewCount: int - all private.",
                  "Operations: renew(): boolean; calculateFine(): Money.",
                  "Navigation: Loan stores bookRef to Copy; the reverse is a query.",
                  "Restructure: an abstract CirculationRecord pulls memberRef and dates.",
                  "Every decision carries a one-line justification.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Implementing structure and functionality",
            body: [
              "Implementation modeling maps the design class model onto the target language's machinery. Implementing structure: associations become references and collections chosen by multiplicity and navigation - a one-to-one association is an attribute holding a reference; one-to-many becomes a list or set; many-to-many becomes a map, an association object, or a join table; bidirectional associations need paired references kept in step by the classes themselves. Implementing functionality: operations become methods; complex operations are decomposed by delegation - the controller method orchestrates calls to the simpler methods of the classes that own the data.",
              "Implement Member 1 - 0..* Loan bidirectionally. Member holds List<Loan> loans; Loan holds Member borrower. The link is created only inside addLoan(Loan l): the method appends to loans and sets l.borrower = this - one entry point, so the pair can never disagree. removeLoan does the symmetric erase-and-null. For the many-to-many Member reserves Book, introduce the association class Reservation holding memberRef and bookRef - the association object pattern; the 'set of reservations' query navigates through it. Functionally, IssueService.issue(member, book) delegates: it asks Loan to construct itself, Copy to mark issued, and Member.addLoan to link - three calls, no direct field pokes.",
              "The exam question is 'how are associations implemented?' or 'explain implementing structure and functionality'. The answer table is the multiplicity-to-implementation mapping (1-1 -> attribute; 1-* -> collection; *-* -> association object or map; bidirectional -> synchronized pair maintained by one method). For functionality, name the delegation principle - operations belong to the class that owns the data; controllers orchestrate - and show the issue() delegation chain. The mark-bearing warning: never let both ends of a bidirectional association be updated independently; single-point maintenance is the correctness argument.",
            ],
            keyTerms: [
              { term: "Association object", definition: "A real class standing for a many-to-many link, holding one reference to each end." },
              { term: "Container choice", definition: "Attribute, List, Set or Map - picked by multiplicity and navigation." },
              { term: "Link integrity", definition: "Bidirectional references updated at one entry point so both ends always agree." },
              { term: "Delegation", definition: "A controller method orchestrating calls to the classes that own the data." },
              { term: "Implementation modeling", definition: "Mapping the design class model onto the language's references, collections and methods." },
            ],
            callout: {
              type: "exam",
              title: "One entry point per link",
              body: "The correctness sentence examiners listen for: 'a bidirectional association is updated only inside one method, so both ends can never disagree.' Write it above the code example - it converts a code fragment into a design argument.",
            },
            bullets: [
              "1-1 association -> one attribute holding a reference.",
              "1-many -> List or Set on the one-end class.",
              "Many-many -> association object (the association class becomes a real class) or a Map.",
              "Bidirectional links are maintained at one point: addLoan sets both ends.",
              "Functionality: methods on the class owning the data; controllers delegate.",
              "Delegation example: IssueService calls Loan, Copy and Member - no field pokes from outside.",
            ],
            codeExample: {
              language: "java",
              caption: "Loan.java - a bidirectional one-to-many, maintained at one point",
              code: `class Member {
    private final List<Loan> loans = new ArrayList<>();
    void addLoan(Loan l) {            // the ONLY way to create the link
        loans.add(l);
        l.attachBorrower(this);       // other end updated here, not outside
    }
    void removeLoan(Loan l) {
        loans.remove(l);
        l.detachBorrower();
    }
}

class Loan {
    private Member borrower;
    void attachBorrower(Member m) { this.borrower = m; }
    void detachBorrower() { this.borrower = null; }
}`,
            },
            diagram: {
              kind: "pipeline",
              title: "From association to code",
              caption: "Five steps that turn a line on the class diagram into working, consistent code.",
              stages: [
                { label: "Read multiplicity", note: "1, 0..1, 1..*, *" },
                { label: "Decide navigation", note: "which ends need stored references" },
                { label: "Pick the container", note: "attribute, List, Set, Map, association object" },
                { label: "Add link maintenance", note: "one add/remove method per direction pair" },
                { label: "Test both directions", note: "navigate forward and back in unit tests" },
              ],
            },
            examQuestions: [
              {
                q: "Explain how associations of different multiplicities are implemented in an object-oriented language.",
                marks: 7,
                outline: [
                  "1-1: attribute with a reference; both ends set together.",
                  "1-many: a collection on the one-end; add/remove methods guard it.",
                  "Many-many: an association object or a Map.",
                  "Bidirectional: paired references maintained at one entry point.",
                  "Library example: Member-Loan list with attachBorrower.",
                ],
              },
              {
                q: "Explain implementing functionality by delegation with the issue() operation of the library system.",
                marks: 7,
                outline: [
                  "Operations belong to the class owning the data.",
                  "IssueService.issue() orchestrates: construct Loan, mark Copy issued, Member.addLoan.",
                  "No external method touches fields directly.",
                  "Each delegated call is small and testable.",
                  "Contrast: a god-method that pokes fields breaks encapsulation.",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Frameworks",
            body: [
              "A framework is a reusable, semi-complete application skeleton: a set of cooperating classes that provides the generic structure of a family of applications, with well-defined places - hot spots - where the developer plugs in the application-specific behavior. The framework's frozen spots (its architecture, its control flow) never change; the hot spots (subclass hooks, event handlers) are where your code lives. The defining property is inversion of control: your code does not call the framework - the framework calls your code at the hot spots, the Hollywood principle ('don't call us, we'll call you').",
              "Contrast a library with a GUI framework. A collection library: your code calls list.add(x) whenever it pleases - control stays with you; the library is a toolbox. A windowing framework: you write an onClick() handler and register the window; you never write the event loop - the framework's main loop dispatches events and invokes your handler at the hot spot. Application frameworks go further: an MVC web framework owns the request loop, routing and session management (frozen), and leaves you models, views and controllers (hot spots). The library speeds up single tasks; the framework shapes the whole application - which is why frameworks carry architecture, and adopting one is a design decision, not a convenience.",
              "The exam question is 'what is a framework? how does it differ from a library?' plus 'explain hot spots and frozen spots'. Skeleton: define framework (a semi-complete application of cooperating classes), state inversion of control with the Hollywood principle sentence, define hot spots (changeable) versus frozen spots (fixed architecture), and give the GUI or MVC example. Add the cost side for the closing mark: frameworks promise reuse and impose their architecture - adopting one trades flexibility for speed, and the wrong framework is expensive to escape precisely because it holds the control flow.",
            ],
            keyTerms: [
              { term: "Framework", definition: "A semi-complete application skeleton of cooperating classes, waiting for your hot spots." },
              { term: "Hot spot", definition: "The changeable place where application code plugs into the framework." },
              { term: "Frozen spot", definition: "The fixed architecture and control flow every application of the framework shares." },
              { term: "Inversion of control", definition: "The framework calls your code, not the other way round." },
              { term: "Hollywood principle", definition: "'Don't call us, we'll call you' - the slogan of inversion of control." },
            ],
            callout: {
              type: "exam",
              title: "Inversion of control is the answer",
              body: "However the question is phrased, the mark-bearing line is inversion of control: 'in a library your code calls it; in a framework it calls your code.' Attach the Hollywood principle phrase and one hot-spot example, and the definition is complete.",
            },
            bullets: [
              "Framework: semi-complete application skeleton with cooperating classes.",
              "Frozen spots: the architecture and control flow - never modified.",
              "Hot spots: the hooks where application code plugs in (handlers, subclasses).",
              "Inversion of control: the framework calls your code - the Hollywood principle.",
              "Library contrast: your code calls the library; control never leaves your hands.",
              "Cost: adopting a framework adopts its architecture - escape is expensive.",
            ],
            table: {
              caption: "Library vs framework.",
              headers: ["Aspect", "Library / toolkit", "Framework"],
              rows: [
                ["Control flow", "your code owns it", "the framework owns it"],
                ["Call direction", "you call the library", "the framework calls your handlers"],
                ["Completeness", "individual services", "a semi-complete application"],
                ["Customization", "choose what to call", "fill the hot spots"],
                ["Example", "collection classes, math library", "GUI event framework, MVC web framework"],
                ["Cost of adoption", "low - drop in anywhere", "high - its architecture becomes yours"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Library vs framework - who holds the control?",
              caption: "The arrows of control decide the label.",
              left: {
                heading: "Library",
                items: [
                  "Your code calls list.add(x)",
                  "Control stays in your main flow",
                  "Reuse single services",
                  "Nothing shapes your architecture",
                ],
              },
              right: {
                heading: "Framework",
                items: [
                  "The event loop calls your onClick()",
                  "Control is inverted - the Hollywood principle",
                  "Frozen spots: loop, routing, sessions",
                  "Hot spots: your handlers, subclasses",
                ],
              },
            },
            examQuestions: [
              {
                q: "What is a framework? Explain hot spots and frozen spots with a GUI framework example.",
                marks: 7,
                outline: [
                  "Framework: a semi-complete application skeleton of cooperating classes.",
                  "Frozen spots: architecture and control flow, fixed.",
                  "Hot spots: developer-filled hooks - handlers, subclasses.",
                  "GUI example: the framework owns the event loop; the developer writes onClick().",
                  "Inversion of control names the mechanism.",
                ],
              },
              {
                q: "Differentiate a framework from a library, and discuss one advantage and one cost of building on a framework.",
                marks: 7,
                outline: [
                  "Library: called by you; framework: calls you.",
                  "Library = services; framework = a semi-complete application.",
                  "Advantage: reuse of a proven architecture - speed and consistency.",
                  "Cost: the framework's architecture is adopted wholesale; escape is expensive.",
                  "MVC example: routing frozen; models and views are hot spots.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Design patterns",
            body: [
              "A design pattern is a named, proven solution to a recurring design problem in a context - the problem-context-solution triple from Gamma and colleagues' catalogue of 23 patterns. Patterns are described by intent, motivation, structure (a class diagram), participants and consequences. The catalogue sorts patterns by intent: creational patterns control object creation (Singleton, Factory Method, Abstract Factory); structural patterns compose classes and objects (Adapter, Facade, Decorator, Composite); behavioral patterns manage responsibility and communication (Observer, Strategy, Iterator, State). Patterns are vocabulary as much as mechanism - naming one communicates a whole design decision.",
              "Apply two patterns to the library. Observer: the ReservationQueue (subject) notifies MemberAlert (observers) whenever a reserved copy becomes available - attach(), detach(), notify(); members subscribe without the queue knowing their types; a new notifier (email, SMS) joins by implementing the update() interface. Singleton: the CatalogueIndex is created once and shared everywhere - a private constructor, a static getInstance(), lazy creation; every subsystem gets the same index. Strategy: fine calculation swaps between FlatFine and PerDayFine policies without touching Loan. Each pattern solves one force - notification without coupling, exactly-one instance, swappable algorithms - and each is justified by naming its force, not by fashion.",
              "The exam asks 'what is a design pattern?' plus 'explain any two patterns with examples'. Skeleton: define the pattern triple (problem, context, solution) and the three intent categories with two pattern names each; then work two patterns fully - intent, structure sketch, participants, and the library application. The mark-separating sentence: patterns are discovered, not invented - they document proven practice, they are neither classes nor libraries but design knowledge, and over-applying them is a documented anti-pattern. Naming the category (creational, structural, behavioral) of the pattern you chose is checked.",
            ],
            keyTerms: [
              { term: "Design pattern", definition: "A proven solution to a recurring problem in a context - problem, context, solution." },
              { term: "Creational pattern", definition: "Controls object creation - Singleton, Factory Method, Abstract Factory." },
              { term: "Structural pattern", definition: "Composes classes and objects - Adapter, Facade, Decorator, Composite." },
              { term: "Behavioral pattern", definition: "Distributes responsibility and communication - Observer, Strategy, Iterator, State." },
              { term: "Anti-pattern", definition: "The documented result of applying patterns where no force justifies them." },
            ],
            callout: {
              type: "exam",
              title: "Name the category and the force",
              body: "Pattern answers earn their marks by structure: category (creational/structural/behavioral), intent in one line, participants, then the applied example. The sentence 'this pattern resolves the force of notifying many objects without coupling the subject to them' is worth more than the code.",
            },
            bullets: [
              "Pattern = proven solution to a recurring problem in a context - the problem-context-solution triple.",
              "Creational: Singleton, Factory Method, Abstract Factory - control creation.",
              "Structural: Adapter, Facade, Decorator, Composite - compose and wrap.",
              "Behavioral: Observer, Strategy, Iterator, State - distribute responsibility.",
              "Library Observer: ReservationQueue notifies subscribed members on availability.",
              "Library Singleton: CatalogueIndex via private constructor + static getInstance().",
            ],
            codeExample: {
              language: "java",
              caption: "Observer.java - the ReservationQueue notifies its members",
              code: `interface Observer { void update(String isbn); }

class ReservationQueue {                     // the subject
    private final List<Observer> observers = new ArrayList<>();
    void attach(Observer o) { observers.add(o); }
    void detach(Observer o) { observers.remove(o); }
    void copyReturned(String isbn) {         // state change -> notify all
        for (Observer o : observers) o.update(isbn);
    }
}

class MemberAlert implements Observer {      // one concrete observer
    public void update(String isbn) { sendNotification(isbn); }
}`,
            },
            diagram: {
              kind: "fork",
              title: "Which pattern family fits the problem?",
              caption: "Patterns are chosen by the force they resolve - not by fashion.",
              start: "A recurring design problem -",
              branches: [
                { label: "Exactly one instance, or complex creation", outcome: "creational - Singleton, Factory Method", good: true },
                { label: "Incompatible interfaces to bridge, or wrapping", outcome: "structural - Adapter, Facade", good: true },
                { label: "Notify many, or swap algorithms", outcome: "behavioral - Observer, Strategy", good: true },
                { label: "No recurring problem - just preference", outcome: "do not apply a pattern; invented patterns are anti-patterns", good: false },
              ],
            },
            examQuestions: [
              {
                q: "What is a design pattern? Explain the three categories of the pattern catalogue with two patterns in each.",
                marks: 7,
                outline: [
                  "Pattern: proven solution to a recurring problem in a context - the problem-context-solution triple.",
                  "Creational: Singleton, Factory Method - object creation.",
                  "Structural: Adapter, Facade - composition and wrapping.",
                  "Behavioral: Observer, Strategy - responsibility and communication.",
                  "Patterns are vocabulary: naming one communicates the design.",
                ],
              },
              {
                q: "Explain the Observer and Singleton patterns with their structure, participants and a library-system application of each. State one risk of over-applying patterns.",
                marks: 14,
                outline: [
                  "Observer: the subject maintains observers and notifies them on state change - decoupled notification.",
                  "Library application: ReservationQueue notifies MemberAlert observers on copy return.",
                  "Singleton: private constructor, static getInstance(), lazy single instance.",
                  "Library application: the shared CatalogueIndex accessed identically everywhere.",
                  "Participants and a one-line structure sketch for each.",
                  "Risk: over-application - indirection added where no force justifies it.",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Object-oriented languages and their comparison",
            body: [
              "Object-oriented languages differ on the features that decide how designs map to code: typing discipline (static - types checked at compile time: C++, Java; dynamic - checked at runtime: Smalltalk, Python), inheritance support (multiple class inheritance in C++ and Python; single class inheritance plus multiple interfaces in Java; prototype-based delegation in JavaScript), memory management (manual in C++; garbage-collected in Java, C# and Python), and execution model (compiled to native code, to bytecode, or interpreted). Smalltalk is the purest OO language: everything is an object and computation is message passing. C++ adds OO to C with manual control; Java adds safety, portability and GC with one root class Object; Python is dynamic and batteries-included with multiple inheritance.",
              "Place the four languages in the typing-by-memory matrix: C and C++ sit in static typing with manual (or RAII) memory; Java and C# in static typing with garbage collection; Python and Ruby in dynamic typing with garbage collection; JavaScript in dynamic typing with runtime GC. The design consequence of each cell: in C++ you design ownership and lifetimes into the class model; in Java you design interfaces and let the GC handle lifetimes; in Python you design for duck typing - classes need no shared superclass to interchange. The same analysis class model lands in all four, but the design class model differs: visibility, inheritance choices and memory idioms are language-shaped.",
              "The exam question is 'compare any two OO languages' or 'explain the features of OO languages'. Build the comparison on five axes: typing, inheritance, memory management, execution model, and purity of OO (is everything an object?). Then instantiate with two languages in a table - Smalltalk versus C++, or C++ versus Java - and close with the design sentence: the analysis model is language-independent, but class design must respect the target language's inheritance rules, visibility and memory idioms; that is why the comparison matters to OOAD and not merely to programming.",
            ],
            keyTerms: [
              { term: "Static typing", definition: "Types checked at compile time - C++, Java; errors caught early, less runtime freedom." },
              { term: "Dynamic typing", definition: "Types checked at runtime - Smalltalk, Python; protocols matter more than declarations." },
              { term: "Garbage collection", definition: "The runtime reclaiming unreachable objects - Java, C#, Python; lifetimes are not the designer's problem." },
              { term: "Duck typing", definition: "Dynamic-typing style where suitability is the presence of operations, not a declared class." },
              { term: "Prototype delegation", definition: "JavaScript's object model - objects inherit directly from other objects, no classes." },
            ],
            callout: {
              type: "tip",
              title: "Pick the axes, then the languages",
              body: "Language-comparison answers fail by rambling. Fix five axes first (typing, inheritance, memory, execution, purity), fill the table, and only then argue. The examiner grades the axes; the prose merely decorates them.",
            },
            bullets: [
              "Typing: static (C++, Java) vs dynamic (Smalltalk, Python) - compile-time or runtime checks.",
              "Inheritance: C++ and Python allow multiple class inheritance; Java restricts classes, allows interfaces.",
              "Memory: manual (C++) vs garbage-collected (Java, C#, Python).",
              "Execution: native compiled, bytecode, or interpreted.",
              "Purity: Smalltalk makes everything an object; C++ keeps non-OO C inside.",
              "Design impact: the class design model is language-shaped even though analysis is not.",
            ],
            table: {
              caption: "Four OO languages on five axes.",
              headers: ["Language", "Typing", "Inheritance", "Memory", "Execution"],
              rows: [
                ["Smalltalk", "dynamic", "single class + metaclasses", "garbage collected", "image + bytecode VM"],
                ["C++", "static", "multiple inheritance, virtual bases", "manual / RAII", "native compiled"],
                ["Java", "static", "single class, many interfaces", "garbage collected", "bytecode on the JVM"],
                ["Python", "dynamic", "multiple inheritance with MRO", "garbage collected", "interpreted (CPython)"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Languages by typing discipline and memory management",
              caption: "The quadrant shapes the design idioms you inherit with the language.",
              axes: { x: "Typing: loose -> strict", y: "Memory: manual -> automatic" },
              quadrants: [
                { label: "Python, Ruby", note: "dynamic typing, garbage collected - design for duck typing" },
                { label: "Java, C#", note: "static typing, garbage collected - design with interfaces" },
                { label: "JavaScript", note: "loose typing, runtime GC - prototype delegation" },
                { label: "C, C++", note: "static typing, manual memory - design ownership and lifetimes" },
              ],
            },
            examQuestions: [
              {
                q: "Compare C++ and Java as object-oriented languages on typing, inheritance, memory management and execution model.",
                marks: 7,
                outline: [
                  "Typing: both static, but Java forbids unchecked pointer arithmetic.",
                  "Inheritance: C++ allows multiple class inheritance; Java one class plus many interfaces.",
                  "Memory: C++ manual (destructors, RAII); Java garbage collected.",
                  "Execution: native binary vs JVM bytecode - the portability trade.",
                  "Design consequence: ownership design in C++ vs interface design in Java.",
                ],
              },
              {
                q: "What features make Smalltalk the purest object-oriented language? How do dynamic typing and garbage collection shape designs written in it?",
                marks: 7,
                outline: [
                  "Everything is an object - including classes and blocks.",
                  "Computation is message passing to receivers looked up at runtime.",
                  "Dynamic typing: no compile-time type declarations; protocols matter, not classes.",
                  "GC: no ownership design; lifetimes are the runtime's concern.",
                  "Design style: small protocols and heavy reuse of messaging instead of inheritance.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Object-oriented databases and OOP style",
            body: [
              "An object-oriented database (OODB) stores objects as objects: identity, class, attributes and references persist together, following the ODMG standard (object model, OQL query language, language bindings). Its defining benefit is removing the impedance mismatch - the conversion friction between objects in memory and rows in a relational table. Persistence is reachability-based or explicit: objects attached to a persistent root survive the process. Object identity is preserved through OIDs, so references in memory remain references on disk. The relational alternative needs mapping (ORM): every class becomes a table, every reference a foreign key, and every inheritance one of three table layouts.",
              "Store the library in both worlds. OODB: the Loan object with its borrower reference persists as-is; 'find loans of member M-42' is a navigation or an OQL query over Loan where borrower.id = 'M-42'; no joins, no mapping code. Relational: tables MEMBER, BOOK and LOAN with foreign keys; loading one Loan needs a join or three queries; inheritance of CirculationRecord needs the table-per-class or single-table decision; every reference becomes an id that must be marshalled back. The ORM layer that papers over this is real code with real cost - which is precisely the mismatch the OODB removes. The trade: OODBs couple the schema to the classes and have weaker tool ecosystems; relational databases have thirty years of tooling and SQL.",
              "The exam asks 'what is an object-oriented database? how does it differ from a relational database?' and often adds 'what is the impedance mismatch?'. Skeleton: define OODB (objects, OIDs, ODMG/OQL, persistence by reachability), contrast with RDBMS (tables, rows, joins, SQL), explain the mismatch (objects vs rows, references vs foreign keys, inheritance vs flat tables), and give the library example in both worlds. The OOP-style half of the section: program to interfaces, keep fields private, keep methods small and cohesive, prefer composition, and name things in the domain's vocabulary - the idioms that make the design survive contact with a team.",
            ],
            keyTerms: [
              { term: "OODB", definition: "A database that stores objects - identity, class, references - directly (ODMG model, OQL)." },
              { term: "OID", definition: "Object identifier - the persistent identity that survives program runs." },
              { term: "Impedance mismatch", definition: "The conversion friction between objects in memory and rows in tables." },
              { term: "OQL", definition: "The ODMG object query language - queries over objects, not tables." },
              { term: "ORM", definition: "Object-relational mapping - the code layer translating classes to tables and back." },
            ],
            callout: {
              type: "warning",
              title: "Mismatch cost is paid either way",
              body: "There is no free storage: the OODB moves the cost into schema-class coupling and ecosystem risk; the relational path moves it into mapping code and query choreography. Name both costs when asked to compare - a one-sided answer reads as marketing.",
            },
            bullets: [
              "OODB: stores objects with identity, class and references intact (ODMG model, OQL).",
              "Persistence by reachability: objects reachable from a persistent root survive.",
              "Impedance mismatch: objects vs rows, references vs foreign keys, inheritance vs tables.",
              "Relational path: ORM mapping code - class to table, reference to key.",
              "Library contrast: OODB navigates; relational joins or issues three queries.",
              "OOP style: program to interfaces; private fields; small cohesive methods; composition first.",
            ],
            table: {
              caption: "The same Loan in two storage worlds.",
              headers: ["Aspect", "OODB", "RDBMS + ORM"],
              rows: [
                ["Storage unit", "the object itself", "a row in a table"],
                ["Identity", "OID preserved", "primary key + foreign keys"],
                ["Reference to borrower", "direct object reference", "borrower_id column + join"],
                ["Inheritance", "class hierarchy preserved", "table-per-class or single-table mapping"],
                ["Query", "OQL / navigation", "SQL through the ORM layer"],
                ["Mapping code", "none", "the ORM layer itself"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Where does the Loan live?",
              caption: "The mismatch is the mapping work, and the mapping work is the cost.",
              left: {
                heading: "Object-oriented database",
                items: [
                  "Loan persists with its borrower reference intact",
                  "OIDs keep identity across runs",
                  "OQL queries objects directly",
                  "No mapping layer to write or debug",
                ],
              },
              right: {
                heading: "Relational + ORM",
                items: [
                  "Loan becomes a row; borrower becomes a foreign key",
                  "Loading requires joins or multiple queries",
                  "Inheritance needs a table-layout decision",
                  "The ORM layer is real, versioned code",
                ],
              },
            },
            examQuestions: [
              {
                q: "What is an object-oriented database? Explain persistence, object identity and the impedance mismatch.",
                marks: 7,
                outline: [
                  "OODB stores objects - identity, class, references - directly (ODMG, OQL).",
                  "Persistence by reachability from a persistent root.",
                  "OIDs preserve identity across program runs.",
                  "Mismatch: objects vs rows, references vs keys, inheritance vs flat tables.",
                  "Library example: Loan navigates in the OODB; joins in the RDBMS.",
                ],
              },
              {
                q: "Compare OODBMS and RDBMS for storing the library's classes, and state when each is the better choice.",
                marks: 7,
                outline: [
                  "OODB: no mapping, natural navigation, schema follows the classes.",
                  "RDBMS: mature tooling, SQL, ad-hoc reporting, weaker object fit.",
                  "Costs: OODB couples schema to classes; ORM code is real work.",
                  "Choice: deep object navigations and few ad-hoc reports -> OODB; reporting-heavy -> RDBMS.",
                  "Hybrid reality: most projects take RDBMS + ORM and pay the mapping.",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "CORBA, COM and DCOM",
            body: [
              "Distributed object middleware lets an object on one machine invoke an object on another as if it were local - a remote call marshalled over the network. CORBA (Common Object Request Broker Architecture, from the OMG) is the vendor-neutral standard: interfaces are declared in IDL (Interface Definition Language), compiled into stubs on the client side and skeletons on the server side, and connected by an ORB (Object Request Broker) speaking IIOP between machines. COM (Component Object Model, Microsoft) defines binary-standard components with interfaces discovered through IUnknown; DCOM extends COM across machines with the ORPC protocol. All three deliver the same promise - location transparency - with different standards bodies and platforms.",
              "Remote the library. CORBA route: declare interface Library in IDL with operations issue() and returnBook(); the IDL compiler generates stubs and skeletons; the client binds to the ORB, resolves the 'Library' object by name, and calls issue() - the stub marshals parameters over IIOP, the server skeleton unmarshals and invokes the servant; the client code reads like a local call. COM route: the Library component implements ILibrary (derived from IUnknown with QueryInterface, AddRef and Release); the client creates the component and asks for the interface pointer; DCOM makes the identical call cross-machine using the registry's server configuration. The interface is the contract in both - implementation, language and location stay behind it.",
              "The exam question is 'write short notes on CORBA, COM and DCOM' or 'compare CORBA and COM/DCOM'. The comparison table is the answer: origin (OMG standard vs Microsoft proprietary), contract (IDL compiled vs binary interface standard), transport (IIOP vs ORPC), platform (any, language-neutral vs Windows-centric), and discovery (naming service vs registry activation). Draw the four-layer stack once - client, stub/proxy, ORB or COM runtime, skeleton and servant - and annotate it for both worlds. Close with the convergence sentence: both realize remote objects through proxies and skeletons; they differ mainly in whose standard and which platform - which is why modern systems often replaced both with web services.",
            ],
            keyTerms: [
              { term: "CORBA", definition: "The OMG's vendor-neutral distributed-object standard built on IDL and the ORB." },
              { term: "ORB", definition: "Object Request Broker - the bus that locates objects and carries IIOP calls." },
              { term: "IDL", definition: "Interface Definition Language - the contract compiled into stubs and skeletons." },
              { term: "COM / DCOM", definition: "Microsoft's binary component standard, and its cross-machine extension over ORPC." },
              { term: "IIOP", definition: "Internet Inter-ORB Protocol - the wire protocol between CORBA ORBs." },
            ],
            callout: {
              type: "exam",
              title: "IDL is the mark",
              body: "In CORBA questions, the sentence 'the interface is written in IDL and compiled into stubs and skeletons' is checked verbatim in the mark scheme. In COM questions, name IUnknown and its three methods. The middleware names change; the contract-first idea is the answer.",
            },
            bullets: [
              "Distributed objects: remote calls look local - stubs marshal, skeletons unmarshal.",
              "CORBA: OMG standard; IDL contracts; ORB buses; IIOP transport; naming service lookup.",
              "COM: Microsoft binary standard; IUnknown (QueryInterface, AddRef, Release); registry activation.",
              "DCOM: COM across machines over ORPC - the same interface-pointer semantics.",
              "Contract-first: the interface (IDL or COM vtable) is the only thing both sides share.",
              "Convergence: proxies + skeletons in all three; web services later absorbed the idea.",
            ],
            table: {
              caption: "CORBA vs COM/DCOM at a glance.",
              headers: ["Aspect", "CORBA", "COM / DCOM"],
              rows: [
                ["Origin", "OMG multi-vendor standard", "Microsoft proprietary"],
                ["Contract", "IDL compiled to stubs/skeletons", "binary interface standard (vtable)"],
                ["Transport", "IIOP over TCP", "ORPC (DCOM)"],
                ["Platform reach", "any language, any OS", "Windows-centric (COM); networked (DCOM)"],
                ["Lookup", "naming / trader service", "registry + CoCreateInstance"],
                ["Core machinery", "ORB - Object Request Broker", "COM runtime + IUnknown"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "One remote call, four layers",
              caption: "The same stack serves CORBA and COM/DCOM - only the middle bus changes.",
              layers: [
                { label: "Client application", note: "calls issue() on the proxy as if it were local" },
                { label: "Stub / proxy", note: "IDL stub (CORBA) or proxy (COM) - marshals parameters" },
                { label: "ORB / COM runtime", note: "locates the object; IIOP (CORBA) or ORPC (DCOM)" },
                { label: "Skeleton + servant", note: "unmarshals, invokes the real Library object, returns the result" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the CORBA architecture - ORB, IDL, stubs, skeletons and IIOP - with the library system as the remote object.",
                marks: 7,
                outline: [
                  "IDL declares the interface; the compiler generates stub and skeleton.",
                  "The client resolves the object via the naming service and calls through the stub.",
                  "The ORB routes IIOP between machines.",
                  "The skeleton unmarshals and invokes the servant Library object.",
                  "Client code reads like a local call - location transparency.",
                ],
              },
              {
                q: "Write short notes on COM and DCOM. How does DCOM extend COM to distributed use?",
                marks: 7,
                outline: [
                  "COM: binary-standard components; interfaces via IUnknown (QueryInterface, AddRef, Release).",
                  "Activation through the registry; in-process or local-server.",
                  "DCOM: the same model across machines over ORPC.",
                  "Interface-pointer semantics preserved remotely - the client cannot tell.",
                  "Contrast with CORBA: standard vs proprietary; IDL vs binary contract.",
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
        { topic: "Class diagram relationships: association, multiplicity, association class, aggregation/composition, generalization", weight: "approx. 12-15 marks", note: "Every paper asks one 'draw and explain' - rehearse the library model end to end." },
        { topic: "State diagrams: events, transitions, guards, nested states, one-shot vs continuous", weight: "approx. 10-12 marks", note: "The ATM/card-reader machine is the standard vehicle - draw it with full labels." },
        { topic: "Use case diagrams: actors, relationships, include vs extend", weight: "approx. 8-10 marks", note: "Arrow directions decide the marks; the extend guard is the classic probe." },
        { topic: "Sequence and activity diagrams", weight: "approx. 8-10 marks", note: "One realization each: the notation table plus the order/parallelism reading rules." },
        { topic: "UML goals, building blocks, UP phases, OOAD methodologies", weight: "approx. 8-10 marks", note: "The short-note bank: list-plus-one-line-each answers." },
        { topic: "System design, class design, implementing associations", weight: "approx. 6-8 marks", note: "The multiplicity-to-implementation table is the expected core." },
        { topic: "Design patterns and frameworks", weight: "approx. 6-8 marks", note: "Define, categorize, then apply Observer and Singleton to the running example." },
        { topic: "OODB, OO languages, CORBA/COM/DCOM", weight: "approx. 4-6 marks", note: "Comparison tables - cheap marks if memorized." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with the weekend for redrawing diagrams from memory. Every unit ends with one complete UML model you can produce unaided - that is the exam skill.",
      ],
      weeks: [
        {
          week: "Week 1",
          focus: "Unit I - OO foundations and UML",
          tasks: [
            "Write the object/class/link/association definitions and the identity-state-behavior triple from memory.",
            "Reproduce the OO vs conventional comparison and the six OO themes with the library example.",
            "List the UP phases with milestone artifacts and the three defining adjectives.",
            "State UML's goals and classify the diagrams into static, behavioral and architectural.",
          ],
        },
        {
          week: "Week 2",
          focus: "Unit II - the class model",
          tasks: [
            "Draw Member-Book-Loan with multiplicities and read every end aloud.",
            "Work the association class: Reservation between Member and Book with the dashed attachment.",
            "Draw the Payment generalization tree; add the multiple-inheritance and diamond discussion.",
            "Decide aggregation vs composition for five pairs using the lifetime test.",
            "Sketch the package diagram with downward-only dependencies.",
          ],
        },
        {
          week: "Week 3",
          focus: "Unit III - the state model",
          tasks: [
            "Write the transition label syntax and classify the four event kinds.",
            "Draw the ATM card-reader machine with guards and a time event.",
            "Nest the order-processing composite and count the saved arrows.",
            "Build the signal hierarchy for a drawing editor and state the precedence rule.",
            "Map Loan's class model onto its state model with the consistency check.",
          ],
        },
        {
          week: "Week 4",
          focus: "Unit IV - interaction and architecture",
          tasks: [
            "Draw the ATM use case diagram; write Withdraw Cash with three extensions.",
            "Place the «include» and «extend» arrows with directions and the guard.",
            "Realize the withdrawal scenario as a sequence diagram with activations and returns.",
            "Redraw it as a communication diagram with full decimal numbering.",
            "Draw the order-fulfilment activity diagram with swim lanes and fork/join; finish with component and deployment sketches.",
          ],
        },
        {
          week: "Week 5",
          focus: "Unit V - design and implementation",
          tasks: [
            "List the system design issues and draw the layered library architecture.",
            "Complete the Loan design class model: signatures, visibility, navigation, one restructuring.",
            "Implement the bidirectional Member-Loan association at one entry point; write the multiplicity-to-code table.",
            "Contrast library and framework; apply Observer and Singleton to the library with participants.",
            "Fill the language-comparison axes and the CORBA vs COM table; write the OODB vs RDBMS contrast.",
          ],
        },
        {
          week: "Week 6",
          focus: "Integration and timed practice",
          tasks: [
            "Attempt two full papers in three-hour sittings, all units mixed.",
            "Redraw the master diagrams from memory: class model, ATM state machine, use case diagram, sequence + communication pair, layered architecture.",
            "Rewrite the five in-one-breath recaps; patch every gap the same day.",
            "Re-do every question you missed twice; those are the exam-day risks.",
          ],
        },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every concept with its diagram: associations with the library model, state machines with the ATM, interactions with the withdrawal scenario. The diagram is half the marks.",
        "Write transition labels in full syntax - event [guard] / action - and annotate one sentence per feature; the annotations carry the explanation marks.",
        "For include vs extend, state the arrow directions first; the extend guard [tries = 3] is the examiner's favourite probe.",
        "For aggregation vs composition, run the three tests aloud (existence, sharing, lifetime) before drawing the diamonds.",
        "For pattern questions, name the category, the intent, the participants, then the applied example - in that order.",
        "Multiplicity answers justify at least one mandatory end (1..*) with a business rule; unjustified multiplicities read as decoration.",
        "State the life-cycle type before drawing a state machine - 'Session is one-shot, so the final state is present' is a free mark.",
        "Time-box: short notes get five minutes; 7-mark questions get twelve; never spend twenty minutes decorating one 14-mark diagram at the cost of two unanswered questions.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Morning of the exam: redraw the five master artefacts once each on rough paper - the library class model with multiplicities, the ATM state machine with guards, the ATM use case diagram with include/extend arrows, the withdrawal sequence and communication pair, and the layered subsystem diagram. Anything you cannot redraw from memory is tonight's revision target, not tomorrow's reading.",
        "Then read the key-term lists of all five units and the in-one-breath recaps; skim the comparison tables (analysis vs design, aggregation vs composition, sequence vs communication, validation vs verification, CORBA vs COM). Do not open new material today - the paper rewards redrawable models, and models die of fatigue at 3 a.m.",
      ],
      bullets: [
        "Writing the multiplicity at the near end instead of the far end of the association.",
        "Drawing 'Book is borrowed by Member' as a second association - one named association serves both readings.",
        "Attaching link data (salary, grade) to one class instead of an association class on the dashed line.",
        "Using inheritance for has-a pairs (Car-Engine); the triangle is only for is-a sentences that stay true.",
        "Drawing the «extend» arrow from base to extension - it points from the extension to the base, with the guard on the arrow.",
        "Omitting activation bars or return arrows in sequence diagrams - the notation marks live there.",
        "Drawing a final state in a continuous life cycle or none in a one-shot - the final state is a lifetime claim.",
        "Confusing junction states (merge alternatives, no waiting) with synch states (barriers for concurrent regions).",
        "Calling a framework 'a big library' - the difference is inversion of control.",
        "Inventing exam-year citations or guessing past-paper questions; describe the model, never fabricate provenance.",
      ],
    },
  ],
};
