/**
 * Academics - RGPV AI&DS Semester IV, AD-402 Database Management Systems.
 *
 * Structure mirrors subject-ad-501: 5 units, each with a single chapter of
 * numbered sections. Every section carries body paragraphs, bullets, one
 * DiagramSpec, a callout, key terms, three exam questions, and either a
 * code example or a reference table - enough material for a full 7-mark
 * answer on its own.
 */

import type { AcademicSubject } from "./types";

export const ad402: AcademicSubject = {
  id: "ad-402",
  code: "AD-402",
  title: "Database Management Systems",
  semester: "IV Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "From file systems to B+ trees: the complete exam-grade walkthrough of data models, ER diagrams, the relational model, SQL, normalization, and transactions with concurrency and recovery.",
  description:
    "Five units walk the whole DBMS syllabus: why database systems beat file processing, the three-schema architecture and data models, ER modelling and the relational model with keys, constraints and algebra, SQL from DDL to nested queries and views plus relational calculus, normalization from functional dependencies up to BCNF and decomposition theory, and finally transactions - ACID, serializability, locking, recovery, indexing and hashing. Every section pairs definition with a worked example, a redrawable diagram, and exam-ready questions.",
  accentColor: "#60a5fa",
  emoji: "DB",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Database Systems",
      summary:
        "Why databases exist: the failure modes of file processing, the three-schema architecture and data independence, the classic data models, database languages and users, system architecture, and the schema-instance distinction.",
      chapter: {
        number: "01",
        title: "Database Concepts, Architecture & Data Models",
        intro:
          "Unit I builds the vocabulary for everything that follows. We contrast database systems with file processing, climb the three-schema architecture, survey hierarchical, network, relational and object models, meet the languages, users and components of a DBMS, and pin down the difference between a schema and an instance.",
        inOneBreath:
          "A DBMS is a general-purpose program that stores, queries and protects data; it fixes the redundancy, inconsistency, isolation and security problems of file processing. Programs see data through three levels - external, conceptual, internal - and mappings between them give logical and physical data independence. Data models evolved from hierarchical and network through relational to object-oriented; the relational model won. Users talk to the system through DDL, DML, DCL and TCL; the query processor and storage manager do the work; a schema is the blueprint, an instance is the data in it right now.",
        sections: [
          {
            number: "1.1",
            title: "Introduction: data, information, databases and the DBMS",
            body: [
              "Data is a collection of raw facts - numbers, names, dates - that by themselves carry no meaning; 42, \"Bhopal\", 15-03-2024 are data. Information is data processed and organized so that it becomes meaningful and useful for decisions: \"42 students from Bhopal enrolled on 15-03-2024\" is information. A database is an organized, interrelated collection of data stored together with minimal redundancy, and a DBMS (Database Management System) is the software that lets users define, create, query, update and administer that database while enforcing security and integrity. Classic examples of database applications are banking systems, railway reservation, university records, and online shopping catalogues.",
              "A DBMS provides four broad services. First, data definition: languages to declare what tables, columns and constraints exist. Second, data manipulation: languages to insert, delete, modify and query data, including powerful declarative querying so the user says what is wanted, not how to find it. Third, data protection: security (who may access what), integrity (values must obey rules), and concurrency control when many users act at once. Fourth, persistent storage and recovery: the data outlives the program that created it, and after a crash the system can restore a consistent state.",
              "Consider a concrete micro-example. A college stores 5,000 student records. In a file-processing world the Registrar's office keeps a flat file, the library keeps its own copy, and the examination cell keeps a third; when Meena changes her phone number it is updated in one file but not the other two - redundancy breeds inconsistency. Space is wasted storing the same address three times, writing a program for every new report takes weeks, and one user changing a fee record while another reads it produces garbage. A single database with one STUDENT table, shared by all three offices through the DBMS, removes every one of these problems.",
              "The advantages explain why DBMS technology is universal today: reduced redundancy, controlled inconsistency, data sharing, enforced standards, security and integrity constraints, data independence (programs survive changes to storage details), concurrent access, backup and recovery, and economies of scale in one centralized facility. The price is cost, complexity and a single point of failure - which is why small embedded devices sometimes still use plain files - but for any multi-user, shared, evolving data set the DBMS wins decisively.",
            ],
            bullets: [
              "Data = raw facts; information = processed, meaningful data; a database holds organized interrelated data with minimal redundancy.",
              "A DBMS is software for defining, constructing, manipulating and sharing databases among users and applications.",
              "File processing suffers redundancy, inconsistency, poor sharing, program-data dependence and weak security.",
              "DBMS gives declarative querying: state WHAT data you want, the system decides HOW to get it.",
              "Protection services: authorization, integrity constraints, concurrency control, backup and recovery.",
              "Program-data independence means changing file layout or storage does not force rewriting every program.",
              "Typical applications: banking, reservations, universities, e-commerce, telecom billing, inventory.",
            ],
            keyTerms: [
              { term: "Database", definition: "An organized collection of logically related data with minimal redundancy." },
              { term: "DBMS", definition: "Software that allows users to define, create, query, update and administer databases securely and concurrently." },
              { term: "Metadata", definition: "Data about data - the stored definitions of tables, columns, types and constraints held in the system catalogue." },
              { term: "Program-data independence", definition: "The property that application programs do not depend on how data is physically stored or organized." },
              { term: "Redundancy", definition: "Duplication of the same data in multiple places, the root cause of inconsistency." },
            ],
            table: {
              caption: "File processing system vs DBMS.",
              headers: ["Aspect", "File system", "DBMS"],
              rows: [
                ["Redundancy", "Same data copied in many files", "Controlled by a single shared schema"],
                ["Consistency", "Updates miss copies; files disagree", "Constraints + single copy keep data consistent"],
                ["Data access", "New program written per report", "Declarative SQL queries, no new code"],
                ["Concurrency", "No coordination; updates clash", "Locking/transactions coordinate many users"],
                ["Security", "OS file permissions only", "Fine-grained GRANT/REVOKE per table and column"],
                ["Recovery", "Manual backup restore", "Log-based automatic crash recovery"],
              ],
            },
            callout: {
              type: "tip",
              title: "Answer opener that always scores",
              body: "Begin any 'what is a DBMS' answer with the definition (software to define, construct, manipulate and share databases), then give the four services, then one concrete example such as banking. Definition + services + example is the examiner's checklist.",
            },
            diagram: {
              kind: "compare",
              title: "File system vs DBMS at a glance",
              caption: "Left panel: the traditional approach. Right panel: the database approach it replaced.",
              left: {
                heading: "File processing",
                items: [
                  "Each application owns its own files",
                  "High redundancy, frequent inconsistency",
                  "Every report needs a new program",
                  "No real concurrency control",
                  "Recovery is manual and error-prone",
                ],
              },
              right: {
                heading: "Database system",
                items: [
                  "One shared database, many applications",
                  "Minimal redundancy via normalized design",
                  "Ad-hoc SQL queries in seconds",
                  "Transactions serialize conflicting access",
                  "Log-based automatic recovery",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain the disadvantages of a file processing system and show how a DBMS overcomes each of them. Support your answer with at least five concrete points and one real-world example.",
                marks: 7,
                outline: [
                  "Define data, information, database and DBMS with one-line definitions.",
                  "List file system problems: redundancy, inconsistency, program-data dependence, poor sharing, weak security, no recovery, no concurrency.",
                  "Explain each problem with a mini example (e.g. address updated in one file only).",
                  "Map each problem to the DBMS feature that fixes it.",
                  "Give the four services of a DBMS: definition, manipulation, protection, persistence/recovery.",
                  "Concrete example: banking or university database replacing separate office files.",
                  "Close with one honest limitation (cost, complexity, single point of failure).",
                ],
              },
              {
                q: "Differentiate between data and information with one example of each.",
                marks: 2,
              },
              {
                q: "What is metadata? Where does a DBMS store it and why is it needed?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Three-schema architecture and data independence",
            body: [
              "The ANSI/SPARC three-schema architecture separates a database into three levels of abstraction so that users at each level see only what they need. The internal level (physical schema) describes HOW data is actually stored: files, records, indexes, B+ trees, compression, the works. The conceptual level (logical schema) describes WHAT data is stored and the relationships among it: all tables, columns, constraints, minus any storage detail. The external level (view level) gives each user group a tailored slice: a librarian sees LIBRARY_ISSUE plus student names, a payroll clerk sees salary columns only.",
              "Between the levels sit two mappings. The external/conceptual mapping defines how each view is derived from the conceptual schema; the conceptual/internal mapping defines how conceptual tables and fields are represented in storage. When the storage layout changes - say a B+ tree index is added to ROLL_NO - only the conceptual/internal mapping is edited; every external view and every program above it is untouched. That property is physical data independence. When the conceptual schema changes - a column is split or a table reorganized - only affected external/conceptual mappings change, and most views keep working: logical data independence.",
              "Data independence is the capacity to change the schema at one level without rewriting the schema or programs at the next higher level. It matters economically: a production database serves hundreds of applications; without physical independence, every index tweak would force recompiling and retesting all of them. Logical independence is harder to achieve fully (dropping a column used by a view necessarily breaks that view), which is exactly why the architecture keeps views deliberately thin.",
              "A worked example ties it together. The conceptual schema declares STUDENT(roll_no, name, city). The internal level stores name in a compressed 30-byte field with an index on roll_no. The external level offers VIEW student_public AS SELECT roll_no, name FROM student. Replace the internal structure next quarter with hash storage: the conceptual table still looks identical, the view still works - physical independence in action. Later split city into city and pin_code: define student_public to concatenate them or to keep serving city only, and unaffected applications run on - logical independence at work.",
            ],
            bullets: [
              "Three levels: internal (physical storage), conceptual (community logical view), external (per-user views).",
              "External/conceptual mapping and conceptual/internal mapping connect the levels.",
              "Physical data independence: change storage (indexes, file layout) without touching the conceptual schema.",
              "Logical data independence: change the conceptual schema (add/split tables) with minimal impact on views and programs.",
              "Physical independence is easier to achieve fully; logical independence is only partial.",
              "Benefit: applications survive storage and restructuring changes - the core reason for the architecture.",
              "Exam hook: draw the three stacked boxes with the two labelled arrows between them.",
            ],
            keyTerms: [
              { term: "Internal schema", definition: "The lowest level describing physical storage structures, files, indexes and access paths." },
              { term: "Conceptual schema", definition: "The middle level describing the whole logical structure: entities, attributes, relationships, constraints." },
              { term: "External schema", definition: "A user-specific view hiding details and exposing only relevant parts of the database." },
              { term: "Physical data independence", definition: "Ability to change internal schema without changing conceptual schema or applications." },
              { term: "Logical data independence", definition: "Ability to change conceptual schema without changing external views or applications, except where truly affected." },
            ],
            table: {
              caption: "The three levels and their mappings.",
              headers: ["Level", "What it describes", "Example content"],
              rows: [
                ["External", "One user group's tailored view", "student_public: roll_no + name only"],
                ["Conceptual", "The complete logical schema", "STUDENT, COURSE, ENROLL with constraints"],
                ["Internal", "Physical storage and access paths", "files, B+ tree on roll_no, page layout"],
                ["External/conceptual mapping", "Derives each view from the schema", "SELECT roll_no, name FROM student"],
                ["Conceptual/internal mapping", "Maps tables to stored structures", "which index, compression, field order"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RGPV loves 'explain the three-schema architecture with a neat diagram and define the two kinds of data independence.' Draw three rectangles labelled External, Conceptual, Internal from top to bottom, insert the two mapping arrows, and define both independences - that alone is 6 of the 7 marks.",
            },
            diagram: {
              kind: "layers",
              title: "ANSI/SPARC three-schema architecture",
              caption: "Top to bottom: user views, the community logical schema, and physical storage, joined by two mappings.",
              layers: [
                { label: "External level - views for each user group", note: "external/conceptual mapping below" },
                { label: "Conceptual level - full logical schema", note: "tables, constraints, no storage detail" },
                { label: "Internal level - physical storage", note: "files, indexes, B+ trees, record layout" },
              ],
            },
            examQuestions: [
              {
                q: "Describe the three-schema architecture of a DBMS with a labelled diagram, and explain logical and physical data independence with one example of each.",
                marks: 7,
                outline: [
                  "State the purpose: abstraction layers plus mappings give data independence.",
                  "Internal level: storage structures, indexes, access paths.",
                  "Conceptual level: complete logical design, constraints, relationships.",
                  "External level: individual user views and their subsets.",
                  "Two mappings and their roles between adjacent levels.",
                  "Physical independence example: adding/changing an index leaves conceptual schema untouched.",
                  "Logical independence example: restructuring a table while a view keeps old programs working.",
                ],
              },
              {
                q: "Define data independence. Why is physical data independence easier to achieve than logical data independence?",
                marks: 3,
              },
              {
                q: "Name the two mappings of the three-schema architecture and state what each connects.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Data models: hierarchical, network, relational and object-oriented",
            body: [
              "A data model is a collection of concepts for describing data, relationships, semantics and constraints. The hierarchical model (IMS, 1960s) stores records in tree structures: every child has exactly one parent, navigated by pointers. It is fast for one-way traversals (an organization chart, a bill of materials) but cannot naturally represent a part supplied by two suppliers - you would duplicate the subtree, creating redundancy.",
              "The network model (CODASYL) generalizes the tree to a graph: a record type may have multiple parents through named sets (owner-member links). Many-to-many relationships become representable, but the programmer must still navigate pointer-by-pointer ('walk the sets'), so every query is a navigation program. The relational model (Codd, 1970) removed navigation entirely: data lives in relations (tables), queries are declarative, and the query optimizer chooses the access path. Its mathematical foundation (set theory, relational algebra) makes reasoning about correctness possible - and it won commercially.",
              "The object-oriented model extends the relational idea by storing objects with attributes and methods, supporting inheritance, object identity and complex user-defined types; object-relational DBMSs (PostgreSQL, Oracle) blend both worlds by letting tables contain structured types. Meanwhile the ER model, though technically a conceptual (semantic) model rather than an implementation model, is the standard design tool that feeds the relational schema. Newer families - NoSQL document, key-value, column and graph stores - trade some relational guarantees for horizontal scale, but RGPV's syllabus centres on the relational model with ER as its design front-end.",
              "Choosing among models is a trade-off between structural flexibility and query simplicity. Hierarchical gives rigid trees with fast fixed traversals; network adds graph flexibility but keeps pointer navigation; relational gives maximum declarative power and independence; object-oriented adds rich types but loses some simplicity. In exams, expect either a comparison table or a 'list the models and give one advantage and one limitation of each' question - memorize one sentence per model plus its flagship system (IMS, CODASYL DBTG, Oracle/MySQL, ObjectStore/PostgreSQL).",
            ],
            bullets: [
              "Hierarchical model: tree of records, one parent per child; system example IMS.",
              "Network model: graph with many-to-many links via named sets; CODASYL; navigation still manual.",
              "Relational model: tables + declarative queries + optimizer; Codd 1970; industry standard.",
              "Object-oriented model: objects with methods, inheritance, identity; object-relational hybrids dominate practice.",
              "ER model is a conceptual design model, not an implementation model - it is mapped to relational schemas.",
              "NoSQL families (document, key-value, column, graph) serve big-data scalability outside this syllabus's core.",
            ],
            keyTerms: [
              { term: "Data model", definition: "A set of concepts for describing data structure, relationships, semantics and constraints." },
              { term: "Hierarchical model", definition: "Represents data as a tree where each child record has a single parent." },
              { term: "Network model", definition: "Represents data as a graph allowing a record multiple parents through named owner-member sets." },
              { term: "Relational model", definition: "Represents data as relations (tables) manipulated with declarative, set-at-a-time operations." },
              { term: "Object-oriented model", definition: "Stores objects carrying attributes and methods, supporting inheritance and object identity." },
            ],
            table: {
              caption: "Comparison of the four classical data models.",
              headers: ["Model", "Structure", "Query style", "Strength", "Weakness"],
              rows: [
                ["Hierarchical", "Tree, one parent per child", "Pointer navigation", "Fast fixed traversals", "Poor many-to-many; redundancy"],
                ["Network", "Graph, multiple parents", "Set navigation (CODASYL)", "Handles M:N links", "Programmer navigates manually"],
                ["Relational", "Tables (relations)", "Declarative algebra/SQL", "Simplicity, independence, optimizer", "Join cost for very deep structures"],
                ["Object-oriented", "Objects with methods", "Method calls + queries", "Rich types, inheritance", "Complexity, weaker ad-hoc query culture"],
              ],
            },
            callout: {
              type: "warning",
              title: "Do not blur the categories",
              body: "Students often call the ER model an 'implementation data model'. It is not - hierarchical, network and relational are implementation models; ER is a conceptual/semantic model used for design. State this explicitly; it is a classic half-mark trap.",
            },
            diagram: {
              kind: "matrix",
              title: "Mapping the data models",
              caption: "Horizontal axis: structural complexity. Vertical axis: declarative query power.",
              axes: { x: "Structural complexity (low to high)", y: "Declarative query power (low to high)" },
              quadrants: [
                { label: "Hierarchical - simple trees, navigational", note: "low complexity, low query power" },
                { label: "Relational - flat tables, fully declarative", note: "low structural variety, high query power" },
                { label: "Network - graphs, still navigational", note: "high complexity, low query power" },
                { label: "Object-oriented - rich types, mixed querying", note: "high complexity, medium-high power" },
              ],
            },
            examQuestions: [
              {
                q: "Explain hierarchical, network, relational and object-oriented data models. For each, give its structure, one advantage, one limitation, and an example system.",
                marks: 7,
                outline: [
                  "Define 'data model' before listing the four.",
                  "Hierarchical: tree, single parent, IMS; fast traversal but M:N awkward.",
                  "Network: graph via sets, CODASYL; flexible links but manual navigation.",
                  "Relational: tables + declarative queries; Codd; simplicity and independence; join cost.",
                  "Object-oriented: objects, methods, inheritance; rich semantics; complexity.",
                  "Mention ER as conceptual design model feeding the relational schema.",
                  "Conclude with why relational won commercially (optimizer, math foundation, independence).",
                ],
              },
              {
                q: "Why does the hierarchical model handle many-to-many relationships poorly?",
                marks: 2,
              },
              {
                q: "State the key difference between navigational and declarative data models.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "Database languages: DDL, DML, DCL, TCL and interfaces",
            body: [
              "A DBMS exposes its services through a family of languages. DDL (Data Definition Language) declares structure: CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX - statements whose results are stored as metadata in the system catalogue. DML (Data Manipulation Language) works on the data itself: SELECT, INSERT, UPDATE, DELETE. When DML is declarative and usable by non-programmers (as SQL is) it is also called a query language. DCL (Data Control Language) manages access with GRANT and REVOKE, and TCL (Transaction Control Language) manages units of work with COMMIT, ROLLBACK and SAVEPOINT.",
              "The two DML families differ fundamentally. Procedural (navigational) DML - relational algebra is the textbook example - tells the system the sequence of operations: project this, then join with that. Declarative (non-procedural) DML - SQL, tuple and domain relational calculus - states only the desired result and lets the optimizer find the execution plan. Because users rarely know the data's physical layout, declarative languages dominate; the optimizer's freedom to reorder operations is precisely what makes data independence valuable.",
              "Interfaces connect different user classes to these languages. Menu-based and forms-based interfaces (ATM screens, web forms) hide SQL behind GUIs for casual users; report generators and data-analysis tools serve managers; a command-line SQL prompt or workbench serves application programmers and DBAs; host-language embedding (SQL inside C, Java via JDBC, Python via DB-API) serves programmatic access; and natural-language or speech interfaces form the research frontier. The same underlying DBMS serves all of them through a single query-processing engine.",
              "A full round trip shows the languages cooperating. A designer runs DDL to create STUDENT and MARKS tables with a foreign key; an operator inserts rows with DML inside a transaction (TCL) so a failure rolls back cleanly; a DBA grants the accounts office SELECT-only access with DCL; a user's ad-hoc SELECT is parsed, optimized against the catalogue, and executed. Mentioning this cooperation - one scenario touching DDL, DML, DCL and TCL - turns a plain list into a 7-mark answer.",
            ],
            bullets: [
              "DDL defines or changes structure: CREATE, ALTER, DROP; results stored in the catalogue.",
              "DML manipulates data: SELECT, INSERT, UPDATE, DELETE.",
              "DCL controls authorization: GRANT, REVOKE.",
              "TCL manages transactions: COMMIT, ROLLBACK, SAVEPOINT.",
              "Procedural DML (algebra) specifies HOW; declarative DML (SQL, calculus) specifies WHAT.",
              "Interfaces: menu-based, forms-based, report generators, command SQL, embedded/host-language SQL.",
              "High-level declarative DML is set-at-a-time; low-level procedural DML is record-at-a-time.",
            ],
            keyTerms: [
              { term: "DDL", definition: "Data Definition Language - statements such as CREATE, ALTER and DROP that define database structure and catalogue metadata." },
              { term: "DML", definition: "Data Manipulation Language - statements such as SELECT, INSERT, UPDATE and DELETE that read and change data." },
              { term: "Procedural DML", definition: "A manipulation language where the user specifies the sequence of operations to obtain the result (e.g. relational algebra)." },
              { term: "Declarative DML", definition: "A language where the user specifies only the desired result and the optimizer derives the plan (e.g. SQL)." },
              { term: "Host language embedding", definition: "Calling SQL from a general-purpose language such as C, Java or Python via APIs like JDBC." },
            ],
            table: {
              caption: "The SQL language families and their statements.",
              headers: ["Family", "Purpose", "Representative commands"],
              rows: [
                ["DDL", "Define structure", "CREATE TABLE, ALTER TABLE, DROP TABLE, CREATE INDEX"],
                ["DML", "Read and change data", "SELECT, INSERT, UPDATE, DELETE"],
                ["DCL", "Authorization", "GRANT, REVOKE"],
                ["TCL", "Transaction control", "COMMIT, ROLLBACK, SAVEPOINT"],
              ],
            },
            callout: {
              type: "tip",
              title: "Group the commands, do not list them",
              body: "Examiners award structure marks. Write four sub-headings (DDL, DML, DCL, TCL), put two or three commands under each with a one-line purpose, and add one sentence contrasting procedural and declarative DML. A bare command list scores half as much.",
            },
            diagram: {
              kind: "flow",
              title: "One query's journey through the language stack",
              caption: "The same SQL statement touches every DBMS component - trace it to connect languages with architecture.",
              steps: [
                { label: "User issues SELECT at an interface" },
                { label: "Parsed and checked against catalogue", note: "DDL-defined metadata used here" },
                { label: "Optimizer picks an access plan" },
                { label: "Executor reads/writes via storage manager" },
                { label: "Changes committed atomically", note: "TCL semantics; DCL checked for rights" },
              ],
            },
            examQuestions: [
              {
                q: "Explain DDL, DML, DCL and TCL with two commands each, and distinguish procedural from declarative DML with one example of each.",
                marks: 7,
                outline: [
                  "Define the four language families with headings.",
                  "DDL: CREATE, ALTER, DROP - metadata goes to the catalogue.",
                  "DML: SELECT, INSERT, UPDATE, DELETE - set-at-a-time operations.",
                  "DCL: GRANT, REVOKE - authorization for security.",
                  "TCL: COMMIT, ROLLBACK, SAVEPOINT - atomic units of work.",
                  "Procedural vs declarative: algebra navigates, SQL declares; optimizer role.",
                  "Close with the interfaces through which each family reaches users.",
                ],
              },
              {
                q: "Give two differences between a procedural and a non-procedural DML.",
                marks: 2,
              },
              {
                q: "List any three interfaces through which users may interact with a DBMS.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Database system architecture: query processor, storage manager and DBA",
            body: [
              "Internally a DBMS divides into two broad subsystems. The query processor turns declarative SQL into efficient physical execution. Its DDL interpreter stores definitions in the catalogue; its DML compiler translates queries into an internal form (parse tree, then algebra), the query optimizer rewrites that algebra and selects an access plan using statistics and indexes, and the query evaluation engine runs the plan through the storage manager. The storage manager is the interface between low-level stored data and the queries above: it maintains files, pages, buffer management, indexes, and the authorization and integrity checks attached to each object.",
              "Supporting both are the transaction manager and disk manager. The transaction manager guarantees ACID behaviour: it coordinates locks, timestamps and the write-ahead log so concurrent transactions neither lose updates nor see partial results, and so recovery after failure is possible. The disk (file) manager handles OS-level file space, page allocation and block transfer between disk and the buffer pool. Everything the user sees as one clean SELECT is in fact a relay race across these components.",
              "A worked trace makes the pipeline concrete. The statement SELECT name FROM student WHERE city='Bhopal' arrives; the parser validates it against the catalogue (STUDENT exists, CITY is a column); the optimizer notices an index on CITY and plans an index scan instead of a full table scan over 50,000 rows; the evaluation engine asks the storage manager for the index pages, then the matching data pages, and the buffer manager keeps hot pages in memory; rows stream back to the user. Without the index, the same query reads every page - the optimizer's choice alone can be a 100x speedup.",
              "The human side of the architecture is the DBA (database administrator), who owns the schema, grants authorization, tunes indexes and buffer sizes, monitors performance, and owns backup and recovery policy. Database designers build the initial schema; application programmers write host-language code against it; casual users and parametric users (ATM operators) consume it through interfaces. In an exam, pairing each software component with the human role that drives it shows you understand the architecture as a system, not a diagram to memorize.",
            ],
            bullets: [
              "Query processor: DDL interpreter, DML compiler, query optimizer, evaluation engine.",
              "Storage manager: files, pages, buffers, indexes, authorization and integrity enforcement.",
              "Transaction manager: locking, logging, commit/abort - the ACID machinery.",
              "Disk manager: OS files, page allocation, block I/O between disk and buffer pool.",
              "Catalogue (data dictionary): metadata consulted by parser and optimizer at every step.",
              "Roles: DBA owns schema/security/tuning; designers build schema; programmers embed SQL; casual users query via forms.",
            ],
            keyTerms: [
              { term: "Query processor", definition: "The DBMS subsystem that translates and optimizes declarative queries into executable plans." },
              { term: "Storage manager", definition: "The subsystem providing the interface between stored low-level data and queries: files, pages, indexes, buffers." },
              { term: "Query optimizer", definition: "The component that rewrites query algebra and picks the cheapest access plan using catalogue statistics." },
              { term: "Data dictionary / catalogue", definition: "The database's own metadata store: schemas, types, constraints, authorization and statistics." },
              { term: "DBA", definition: "Database administrator - the person responsible for schema, authorization, tuning, backup and recovery policy." },
            ],
            table: {
              caption: "DBMS components and their jobs.",
              headers: ["Component", "Responsibility"],
              rows: [
                ["DDL interpreter", "Parses CREATE/ALTER, stores definitions in the catalogue"],
                ["DML compiler", "Translates SQL into internal query form"],
                ["Query optimizer", "Chooses the cheapest plan using statistics and indexes"],
                ["Evaluation engine", "Executes the chosen plan operation by operation"],
                ["Storage manager", "Files, pages, buffers, indexes, authorization checks"],
                ["Transaction manager", "Locking, logging, commit/abort - the ACID machinery"],
                ["Disk manager", "OS file space, page allocation, block I/O"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'explain the structure of a DBMS', trace one concrete query through the components instead of only naming boxes. The trace proves comprehension and typically occupies the last two marks of the rubric.",
            },
            diagram: {
              kind: "pipeline",
              title: "Query processing pipeline",
              caption: "Left to right: how one SQL statement becomes page reads.",
              stages: [
                { label: "SQL statement arrives" },
                { label: "Parser + catalogue check", note: "syntax, names, rights" },
                { label: "Optimizer chooses plan", note: "index scan vs table scan" },
                { label: "Evaluation engine executes" },
                { label: "Storage/buffer manager reads pages" },
              ],
            },
            examQuestions: [
              {
                q: "Describe the components of a database system (query processor and storage manager with their sub-components) and trace the processing of one SELECT query through them.",
                marks: 7,
                outline: [
                  "Draw the two-subsystem picture: query processor above storage manager.",
                  "DDL interpreter and catalogue role.",
                  "DML compiler and query optimizer with statistics/indexes.",
                  "Evaluation engine and buffer manager interplay.",
                  "Transaction and disk managers supporting ACID and file I/O.",
                  "Trace SELECT ... WHERE city='Bhopal' end to end.",
                  "Mention DBA and user roles operating this machinery.",
                ],
              },
              {
                q: "What does the query optimizer do and what information does it use?",
                marks: 3,
              },
              {
                q: "State any four responsibilities of a database administrator.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "Schemas, instances and database state",
            body: [
              "A schema is the logical structure of the database - the blueprint of tables, columns, types, keys and constraints - written once (and changed rarely) in DDL. An instance (also called a database state or occurrence) is the actual data stored in that structure at one moment in time. STUDENT(roll_no INT PRIMARY KEY, name VARCHAR(30), city VARCHAR(20)) is the schema; the five thousand rows sitting in it today are the instance. The analogy is a class versus its objects, or a variable's type versus its current value.",
              "The schema-instance distinction maps directly onto the three-schema architecture: the conceptual schema defines structure, while each query against it reads a current instance. Every DML statement changes only the instance - INSERT, UPDATE and DELETE never touch the schema; only DDL does. The DBMS polices every instance change against the schema's constraints: inserting a duplicate roll_no into the instance violates the primary key declared in the schema and is rejected.",
              "A worked sequence shows the boundary precisely. Day 1: schema created, instance empty. Day 2: 5,000 rows inserted - instance grew, schema unchanged. Day 3: a CHECK constraint city IN ('Bhopal','Indore','Jabalpur') is added with ALTER TABLE - the schema changed, so the DBMS validates the existing instance, and any row with city='Dewas' makes the ALTER fail. Day 4: UPDATE student SET city='Indore' WHERE roll_no=101 changes only the instance, and the new value passes the schema's check. Knowing which statements touch schema and which touch instance answers a surprisingly large share of short questions.",
              "Never confuse schema with catalog either: the catalogue (data dictionary) is the database's own database, holding the schema definitions, statistics and authorization metadata that the parser and optimizer consult. The catalogue updates on DDL, is read constantly during query processing, and is itself protected by the DBMS from ordinary user modification.",
            ],
            bullets: [
              "Schema = structural definition (DDL); instance = current contents at a point in time.",
              "Analogy: schema is to instance as type is to value, or class is to objects.",
              "DML changes instances only; DDL changes schemas only.",
              "Constraints declared in the schema are validated against every new instance state.",
              "Database state changes through INSERT, UPDATE, DELETE; schema changes through CREATE, ALTER, DROP.",
              "The catalogue stores schemas plus statistics and is consulted during every query parse.",
            ],
            keyTerms: [
              { term: "Schema", definition: "The overall logical structure of a database, expressed in DDL - the blueprint." },
              { term: "Instance / database state", definition: "The set of data actually stored in the database at a given moment." },
              { term: "Catalogue", definition: "The system database holding metadata: schemas, constraints, statistics, authorizations." },
              { term: "Alter", definition: "DDL command that changes a schema; existing data is validated against the new definition." },
            ],
            table: {
              caption: "Which commands change which.",
              headers: ["Command", "Family", "Changes"],
              rows: [
                ["CREATE TABLE / ALTER TABLE / DROP TABLE", "DDL", "Schema (structure, stored in the catalogue)"],
                ["CREATE VIEW", "DDL", "Schema (adds a virtual table definition)"],
                ["INSERT / UPDATE / DELETE", "DML", "Instance only (rows and values)"],
                ["GRANT / REVOKE", "DCL", "Catalogue metadata (authorizations)"],
                ["COMMIT / ROLLBACK", "TCL", "Instance durability boundary"],
              ],
            },
            callout: {
              type: "warning",
              title: "Common slip",
              body: "Saying 'the database has 5,000 tables' confuses the two: 5,000 is about the instance. The number of tables, their columns and constraints belong to the schema; how many rows each table holds belongs to the instance. Keep the words straight - it is a recurring 1-mark trap.",
            },
            diagram: {
              kind: "compare",
              title: "Schema vs instance",
              caption: "Same database, two different questions: what it looks like, and what it contains now.",
              left: {
                heading: "Schema (the blueprint)",
                items: [
                  "Declared with CREATE/ALTER (DDL)",
                  "Changes rarely, via the designer/DBA",
                  "Tables, columns, types, keys, constraints",
                  "Stored in the catalogue as metadata",
                  "Analogy: a variable's type",
                ],
              },
              right: {
                heading: "Instance (the contents)",
                items: [
                  "Changed constantly by INSERT/UPDATE/DELETE",
                  "Valid snapshot of data at time t",
                  "Actual rows with actual values",
                  "Stored in data files and indexes",
                  "Analogy: the variable's current value",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define schema and instance with an example of each, explain which commands change which, and state where the schema is stored.",
                marks: 7,
                outline: [
                  "Definition of schema: structure in DDL.",
                  "Definition of instance/state: data at time t.",
                  "Concrete example: STUDENT(roll_no, name, city) vs its 5,000 rows.",
                  "DML changes instances; DDL changes schemas - give one command of each.",
                  "ALTER TABLE validating old data against a new CHECK constraint.",
                  "Catalogue/data dictionary as the home of schema metadata.",
                  "Type-vs-value analogy to close.",
                ],
              },
              {
                q: "Does an UPDATE statement change the schema or the instance? Justify in one line.",
                marks: 2,
              },
              {
                q: "What is a database state? What other name is used for it?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.7",
            title: "Advantages of DBMS and application areas",
            body: [
              "The advantages of a DBMS follow directly from its design goals. Reduced redundancy: one shared copy of each fact, with controlled duplication only where replication is deliberate (e.g. denormalized reporting tables). Controlled inconsistency: constraints and a single source of truth stop disagreeing copies. Data sharing and standards: many users and applications see the same data under one naming and format policy. Security and integrity: GRANT/REVOKE authorization plus declarative constraints (PRIMARY KEY, FOREIGN KEY, CHECK) enforce policy inside the engine, not in every program.",
              "Three further advantages are frequently examined. Data independence lets storage and schema evolve without breaking applications, as Section 1.2 showed. Concurrent access: locking and transactions let thousands of users read and write simultaneously without lost updates or phantom reads. Crash recovery: the write-ahead log replays committed work and rolls back uncommitted work after a failure, so the database never stays half-updated. Finally, backup, multi-user tuning and economies of scale consolidate hardware, software and administrative expertise in one place.",
              "Application areas illustrate each advantage concretely. Banking: transactions guarantee an ATM withdrawal and the balance update succeed or fail together (atomicity) and the log survives a crash. Airlines and railways: thousands of agents race for the same seats; locking serializes the conflicting updates. Universities: constraints stop a grade of 250 or a roll_no repeated. E-commerce catalogues: declarative queries answer 'products under Rs 500 sorted by rating' without custom code. Telecom billing, ERP, inventory and library systems repeat the same pattern at scale.",
              "Be honest about costs, because examiners reward balance: DBMS software and hardware are expensive; DBAs are skilled professionals; the single centralized database is a single point of failure without proper replication; and for tiny embedded workloads a flat file is simpler and faster. The mature answer is conditional - the DBMS wins for shared, evolving, multi-user, long-lived data, which is exactly the profile of nearly every serious application.",
            ],
            bullets: [
              "Reduced redundancy and controlled inconsistency through one shared, constrained copy.",
              "Sharing with enforced standards of naming, format and access policy.",
              "Security via GRANT/REVOKE; integrity via PRIMARY KEY, FOREIGN KEY, CHECK, NOT NULL.",
              "Data independence: storage and logical changes survive at the application layer.",
              "Concurrent multi-user access via locking and transaction isolation.",
              "Automatic crash recovery from the write-ahead log; backup and restore facilities.",
              "Applications: banking, reservations, universities, e-commerce, telecom, ERP, libraries.",
              "Costs: licence and hardware expense, DBA expertise, central point of failure.",
            ],
            keyTerms: [
              { term: "Controlled redundancy", definition: "Duplication kept only where deliberately chosen (e.g. replication), never accidental." },
              { term: "Integrity constraints", definition: "Declarative rules (keys, CHECK, NOT NULL, FK) that every instance must satisfy." },
              { term: "Concurrent access", definition: "Many users reading and writing simultaneously under transaction isolation." },
              { term: "Crash recovery", definition: "Restoring a consistent state after failure using the log (REDO committed, UNDO uncommitted work)." },
            ],
            table: {
              caption: "Advantages mapped to application areas.",
              headers: ["Advantage", "Where it earns its keep"],
              rows: [
                ["Atomicity + recovery", "Banking: a failed transfer restores the debit"],
                ["Concurrency control", "Railways: agents race for the same seat safely"],
                ["Integrity constraints", "Universities: no grade of 250, no duplicate roll_no"],
                ["Declarative querying", "E-commerce: filter-and-sort catalogue queries in seconds"],
                ["Security", "Telecom: billing clerks see charges, not customer identities"],
                ["Data independence", "ERP: storage re-tuned without breaking reports"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Explain the advantages of a DBMS' is almost always a 7-marker. Structure it as eight bullet advantages, each with one clause of justification, then one application paragraph (banking works best because it shows atomicity and recovery), then two honest limitations.",
            },
            diagram: {
              kind: "pyramid",
              title: "From raw bytes to decisions: the value ladder of a DBMS",
              caption: "Each tier adds a DBMS capability on top of the one below.",
              tiers: [
                { label: "Decision support - ad-hoc queries and reports", note: "top: managers consume information" },
                { label: "Protected shared data - security + integrity", note: "GRANT/REVOKE, constraints" },
                { label: "Concurrent, recoverable data - transactions", note: "ACID, locking, log" },
                { label: "Organized persistent storage - minimal redundancy", note: "base layer: the schema" },
              ],
            },
            examQuestions: [
              {
                q: "Discuss the advantages of using a DBMS over a file system, and illustrate at least three advantages with a real application area such as banking.",
                marks: 7,
                outline: [
                  "List 6-8 advantages with one-line justifications each.",
                  "Redundancy/inconsistency control via shared constrained schema.",
                  "Security and integrity enforced inside the engine.",
                  "Data independence protecting application code.",
                  "Concurrency and recovery explained via transactions and the log.",
                  "Banking example: atomic withdrawal, serialized seat/branch updates, crash-safe log.",
                  "Balance with two limitations: cost, DBA dependence, single point of failure.",
                ],
              },
              {
                q: "Name any four application areas of databases.",
                marks: 2,
              },
              {
                q: "Why is concurrent access without a DBMS dangerous? Give one scenario.",
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
      title: "ER Modelling and the Relational Model",
      summary:
        "Designing data: entities, attributes and relationships in ER diagrams with cardinalities and weak entities; then the relational model itself - relations, keys of every kind, integrity constraints, and relational algebra from selection through division.",
      chapter: {
        number: "02",
        title: "From ER Diagrams to Relational Tables",
        intro:
          "Unit II first designs the database conceptually with ER diagrams - entities, attributes, relationships, mapping cardinalities, weak entities and specialization - then lands it on the relational model: relations, all five kinds of keys, the four integrity constraints, and relational algebra as the procedural query language.",
        inOneBreath:
          "An ER diagram = entity sets (rectangles), attributes (ellipses), relationships (diamonds) with 1:1, 1:N, M:N mapping cardinalities and total/partial participation; weak entities need owner plus partial key; specialization/generalization and aggregation refine designs. The relational model stores tuples in relations over domains; keys ladder from super to candidate to primary, and foreign keys glue tables. Four constraints - domain, key/entity, referential and domain-level business rules - protect every instance. Relational algebra answers with operators: select rows, project columns, join tables, union/intersect/difference, rename, divide for 'for all', and aggregate.",
        sections: [
          {
            number: "2.1",
            title: "Entities, entity sets and attributes",
            body: [
              "An entity is a real-world object distinguishable from all others - a student, a course, a bank account. An entity set (entity type) is the collection of entities of the same kind, drawn as a rectangle in ER notation: STUDENT contains Meena, Arjun and every other student. Each entity is described by attributes, drawn as ellipses connected to their entity set; for STUDENT these are roll_no, name, dob, city. The attribute values at a given time form one entity's description.",
              "Attributes classify along three axes. By domain value count: simple/atomic attributes (roll_no) are indivisible, while composite attributes split into parts (name = first_name + last_name; address = house + city + pin). By number of values: single-valued attributes hold one value (dob), multivalued attributes hold many (phone numbers, emails) and are drawn as a double ellipse. By derivability: stored vs derived attributes - age is derived from dob and drawn with a dashed ellipse; storing age would invite inconsistency. A key attribute underlines its name and uniquely identifies each entity.",
              "The classification drives design decisions. A multivalued attribute like STUDENT.phone cannot sit inside one table row cleanly - the relational conversion creates a separate table STUDENT_PHONE(roll_no, phone). A composite attribute becomes several simple columns. A derived attribute is usually not stored but computed on demand (age = current_date - dob), or stored with a refresh rule when queries are hot. Every one of these decisions originates in the ER ellipse, which is why examiners ask you to classify attributes before drawing tables.",
              "Worked example: model a driver's licence office. Entities: PERSON (aadhaar as key attribute, name composite, dob simple, age derived, phone multivalued, address composite), LICENCE (licence_no key, category, valid_till). The distinction between entity (an actual person, Meena with aadhaar 1234) and entity set (all licence holders) is the first thing to state; the attribute classification is the second; the conversion consequences (separate table for phone) are the third - three paragraphs that alone satisfy a 7-mark answer.",
            ],
            bullets: [
              "Entity: an independently distinguishable real-world object; entity set: the collection of similar entities.",
              "Simple (atomic) attribute: indivisible, e.g. roll_no; composite: decomposes into parts, e.g. name, address.",
              "Single-valued: one value per entity (dob); multivalued: many values (phones) - drawn with double ellipse.",
              "Derived attribute: computed from others (age from dob) - drawn with dashed ellipse, normally not stored.",
              "Key attribute: uniquely identifies each entity within the set - underlined in ER notation.",
              "Relational conversion: composite becomes columns, multivalued becomes a separate table, derived is computed.",
            ],
            keyTerms: [
              { term: "Entity", definition: "A real-world object with independent existence, described by attribute values." },
              { term: "Entity set", definition: "The set of all entities of the same type, drawn as a rectangle in ER notation." },
              { term: "Composite attribute", definition: "An attribute divisible into smaller meaningful parts, such as address into house, city and pin." },
              { term: "Multivalued attribute", definition: "An attribute holding zero or many values per entity, shown as a double ellipse." },
              { term: "Derived attribute", definition: "An attribute computable from other data, shown with a dashed ellipse (age from date of birth)." },
            ],
            table: {
              caption: "Attribute classification with ER notation.",
              headers: ["Example", "Type", "ER notation"],
              rows: [
                ["roll_no", "Simple, single-valued, key", "Underlined ellipse"],
                ["name", "Composite", "Ellipse with sub-ellipses"],
                ["dob", "Simple, single-valued", "Plain ellipse"],
                ["phone", "Multivalued", "Double ellipse"],
                ["age", "Derived", "Dashed ellipse"],
              ],
            },
            callout: {
              type: "warning",
              title: "Notation marks are free marks",
              body: "Double ellipse = multivalued, dashed ellipse = derived, underlined name = key. Examiners check the shapes even before reading labels. Losing notation marks on an otherwise correct diagram is the most common avoidable penalty in ER questions.",
            },
            diagram: {
              kind: "fork",
              title: "Deciding how to represent an attribute",
              caption: "Follow the attribute type to its relational representation.",
              start: "Classify the attribute",
              branches: [
                { label: "Simple + single-valued", outcome: "Ordinary column in the entity's table", good: true },
                { label: "Composite", outcome: "Split into component columns (name -> first, last)", good: true },
                { label: "Multivalued", outcome: "Separate table keyed by owner key + value", good: true },
                { label: "Derived", outcome: "Do not store; compute on query (age from dob)", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Define entity, entity set and attribute. Classify attributes into simple, composite, single-valued, multivalued, derived and key with one example of each, and state how multivalued attributes are converted into relational tables.",
                marks: 7,
                outline: [
                  "Define entity with a concrete example (a specific student).",
                  "Define entity set and its rectangle notation.",
                  "Attribute classification axes: divisibility, value count, derivability.",
                  "One example each: roll_no, name, dob, phone, age, aadhaar.",
                  "ER notation: double ellipse, dashed ellipse, underlined key.",
                  "Conversion: composite to columns, multivalued to separate table.",
                  "State why storing derived attributes risks inconsistency.",
                ],
              },
              {
                q: "Differentiate between a simple and a composite attribute with examples.",
                marks: 2,
              },
              {
                q: "Why is 'age' normally a derived attribute? What is the notation used for it?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Relationships, mapping cardinalities and participation",
            body: [
              "A relationship is an association among entities - 'Meena ENROLLS_IN DBMS' connects a STUDENT entity to a COURSE entity. A relationship set is the set of similar associations, drawn as a diamond between the participating entity rectangles, with attributes of its own when needed: ENROLLS_IN carries grade and semester, since a grade belongs to the (student, course) pair, not to either entity alone. The degree of a relationship is the number of participating entity sets: binary (two, the common case), ternary (three, e.g. SUPPLIER supplies PART to PROJECT), unary/recursive (an entity related to itself, e.g. EMPLOYEE supervises EMPLOYEE).",
              "Mapping cardinality expresses how many entities on one side may associate with entities on the other. One-to-one (1:1): one department has one HOD and each HOD heads one department. One-to-many (1:N): one department employs many teachers, each teacher in one department. Many-to-many (M:N): students enroll in many courses and courses hold many students - the most common case in practice, and the one that forces a junction table in relational conversion.",
              "Participation says whether every entity must take part: total participation (every STUDENT enrolls in at least one COURSE) is drawn with a double line from entity to diamond; partial participation (some employees manage nothing) uses a single line. Combining the two ideas gives the full specification: 'STUDENT --- total --- ENROLLS_IN --- M --- to --- N --- COURSE'. Total participation on the N side of a 1:N relationship is exactly what later becomes NOT NULL + FOREIGN KEY in the relational schema.",
              "Conversion rules follow mechanically, and examiners ask for them. M:N relationships become their own junction table with foreign keys to both sides plus any relationship attributes (ENROLLS(roll_no, course_id, grade)). 1:N relationships can be folded into the N-side table as a foreign key (TEACHER gains dept_id), avoiding an extra table. 1:1 relationships may put a foreign key on either side, or merge the entities entirely. The rule of thumb: the more cardinality on a side, the more the relationship migrates toward that side.",
            ],
            bullets: [
              "Relationship: association between entities, drawn as a diamond; relationship set collects similar associations.",
              "Relationship attributes belong to the pair, e.g. grade on ENROLLS_IN.",
              "Degree: binary (two entities), ternary (three), unary/recursive (entity to itself).",
              "Mapping cardinalities: 1:1, 1:N, M:N with HOD, department-teacher, student-course examples.",
              "Participation: total (double line, every entity involved) vs partial (single line).",
              "M:N converts to a junction table with two foreign keys; 1:N folds into the N-side table; 1:1 may merge.",
              "Total participation on the many side becomes NOT NULL FOREIGN KEY in SQL.",
            ],
            keyTerms: [
              { term: "Relationship set", definition: "A set of associations among entities, drawn as a diamond in ER diagrams." },
              { term: "Mapping cardinality", definition: "The number of entities on one side that may associate with entities on the other: 1:1, 1:N or M:N." },
              { term: "Total participation", definition: "Every entity of the set participates in at least one relationship, drawn with a double line." },
              { term: "Degree of relationship", definition: "The number of entity sets participating: unary, binary or ternary." },
              { term: "Junction table", definition: "The relational table created for an M:N relationship, holding two foreign keys and relationship attributes." },
            ],
            table: {
              caption: "Mapping cardinality to relational conversion.",
              headers: ["Cardinality", "Example", "Relational conversion"],
              rows: [
                ["1:1", "Department - HOD", "FK on either side, or merge the two tables"],
                ["1:N", "Department - Teacher", "FK dept_id added to the N-side table"],
                ["M:N", "Student - Course", "Junction table ENROLLS(roll_no, course_id, grade)"],
                ["Ternary", "Supplier - Part - Project", "One table with three FKs and quantity attribute"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'draw an ER diagram for X', always label the cardinality (1, N, M) on the diamond arms AND mark participation with double lines where every entity must participate. Unlabelled cardinalities are the number-one reason ER answers lose marks.",
            },
            diagram: {
              kind: "matrix",
              title: "Cardinality x participation grid",
              caption: "The four combinations every ER design must place its relationships in.",
              axes: { x: "Participation (partial to total)", y: "Cardinality (1:1 to M:N)" },
              quadrants: [
                { label: "1:1 with partial participation", note: "some departments have no HOD yet" },
                { label: "1:1 with total participation", note: "every department has exactly one HOD" },
                { label: "M:N with partial participation", note: "some students take no elective course" },
                { label: "M:N with total participation", note: "every student enrolls in at least one course" },
              ],
            },
            examQuestions: [
              {
                q: "Explain relationship sets, mapping cardinalities (1:1, 1:N, M:N) and total versus partial participation with ER notation, and give the relational conversion rule for each cardinality.",
                marks: 7,
                outline: [
                  "Define relationship and relationship set with the diamond notation.",
                  "Relationship attributes with the grade example.",
                  "Three mapping cardinalities, one example each.",
                  "Total vs partial participation and the double-line notation.",
                  "Degree: binary, ternary, unary with a recursive supervision example.",
                  "Conversion rules: junction table for M:N, FK fold for 1:N, merge for 1:1.",
                  "Link total participation to NOT NULL FOREIGN KEY.",
                ],
              },
              {
                q: "How is a many-to-many relationship converted into relational tables?",
                marks: 2,
              },
              {
                q: "What is a recursive relationship? Give one example.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Weak entities, specialization, generalization and aggregation",
            body: [
              "A weak entity cannot be identified by its own attributes alone - it exists only in dependence on an owner entity. PAYMENT is weak: its payment_no repeats across students, so only (owner roll_no + payment_no) identifies a payment. Notation: double rectangle for the weak entity, double diamond for the identifying relationship, and the partial key (discriminator) drawn dashed. Conversion to tables: the weak entity's table receives the owner's primary key as a foreign key and uses (owner_key, partial_key) as its composite primary key.",
              "Specialization and generalization are the top-down and bottom-up views of the same operation. Specialization splits PERSON into STUDENT and FACULTY, each adding its own attributes (branch vs designation); generalization merges common attributes of STUDENT and FACULTY upward into PERSON. Notation is the triangle labelled ISA. Three mapping options exist: (a) one table for the supertype with all attributes plus a type flag; (b) one table per subclass holding the shared key and subclass-specific attributes; (c) one table per entity combining everything with nulls. Option (b) is usually the cleanest; option (c) wastes space with nulls.",
              "Aggregation handles the case where a relationship itself needs to participate in another relationship - ER cannot connect a diamond directly to a diamond, so the lower relationship is boxed and treated as a higher-level abstract entity. Example: EMPLOYEE works-on PROJECT, and MANAGER monitors that (employee, project) pairing; the works-on relationship is aggregated and MONITORS attaches to the box. In relational terms the aggregated relationship's junction table simply becomes the target of another foreign key.",
              "A complete worked mini-design shows all four constructs cooperating. University fee system: STUDENT (strong, roll_no key) owns PAYMENT (weak, partial key payment_no) through the identifying relationship PAYS; PERSON specializes into STUDENT and FACULTY via ISA; the works-on relationship between TEACHER and COURSE (teaches) is aggregated so HOD monitors it. The drawing exercise is exactly what appears in RGPV papers: 'Draw an ER diagram for a university system showing weak entity, specialization and aggregation.'",
            ],
            bullets: [
              "Weak entity: no key of its own; identified by owner key + partial (discriminator) key.",
              "Notation: double rectangle, double identifying diamond, dashed partial key.",
              "Conversion: weak table gets owner PK as FK; composite PK = (owner PK, partial key).",
              "Specialization = top-down split; generalization = bottom-up merge; both use the ISA triangle.",
              "Three supertype/subclass mappings: single table with flag, subclass tables with shared key, or one table with nulls.",
              "Aggregation: box a relationship to let it participate in a higher relationship.",
              "Classic exam composite: university ER with weak entity + specialization + aggregation in one diagram.",
            ],
            keyTerms: [
              { term: "Weak entity", definition: "An entity that cannot be identified without its owner; identified by owner key plus its partial key." },
              { term: "Partial key (discriminator)", definition: "The attribute distinguishing weak entities within one owner - dashed underline in ER notation." },
              { term: "Identifying relationship", definition: "The relationship binding a weak entity to its owner, drawn as a double diamond." },
              { term: "Specialization / generalization", definition: "Subclass/supertype refinement drawn with an ISA triangle; top-down split or bottom-up merge." },
              { term: "Aggregation", definition: "Treating a relationship as a higher-level entity so it can participate in another relationship." },
            ],
            table: {
              caption: "Supertype/subclass mapping options.",
              headers: ["Option", "Structure", "Trade-off"],
              rows: [
                ["Single table + type flag", "PERSON(all attrs, type)", "Simple joins, many nulls, weak constraints"],
                ["Subclass tables", "PERSON(shared key) + STUDENT(key, branch)", "Clean constraints, one extra join"],
                ["One table per entity", "Full duplicate per subclass", "No joins, heavy redundancy, hard updates"],
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the owner key first",
              body: "In weak-entity questions, immediately add the owner's primary key column to the weak entity's table and underline the composite key (owner_key, partial_key). This single step converts half the definition marks into your pocket before you explain anything else.",
            },
            diagram: {
              kind: "flow",
              title: "Building an ER diagram in six steps",
              caption: "The order examiners expect when a design question says 'draw an ER diagram for...'.",
              steps: [
                { label: "Identify entity sets", note: "nouns: STUDENT, COURSE, PAYMENT" },
                { label: "Mark keys and attribute types", note: "underline keys; dashed/double ellipses" },
                { label: "Add relationships as diamonds", note: "name verbs: ENROLLS, PAYS" },
                { label: "Label cardinality + participation", note: "1, N, M and double lines" },
                { label: "Spot weak entities", note: "double rectangle + identifying diamond" },
                { label: "Apply ISA / aggregation if needed", note: "triangles and boxed relationships" },
              ],
            },
            examQuestions: [
              {
                q: "Explain weak entities, specialization/generalization and aggregation with ER notation, and draw an ER diagram of a university system that uses all three constructs.",
                marks: 7,
                outline: [
                  "Weak entity definition with PAYMENT example.",
                  "Notation: double rectangle, double diamond, dashed partial key.",
                  "Specialization vs generalization as two directions of ISA.",
                  "Three mapping options with trade-offs.",
                  "Aggregation definition with the employee-works-on-project-monitor example.",
                  "Composite ER diagram: strong + weak + ISA + aggregation.",
                  "Relational conversion notes for the weak entity.",
                ],
              },
              {
                q: "What is a partial key? How is it shown in an ER diagram?",
                marks: 2,
              },
              {
                q: "Why does ER need aggregation? Explain with one example.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "The relational model: relations, tuples, domains, degree and cardinality",
            body: [
              "The relational model (Codd, 1970) stores all data in relations. Formally, a relation is a subset of the Cartesian product of domains: given domains D1, D2, ..., Dn, a relation R is any set of n-tuples (d1, d2, ..., dn) with di in Di. In practice a relation is a table: the heading is the attribute list (the schema), and the body is the set of rows. A tuple is one row; an attribute is one named column; a domain is the pool of permitted atomic values for an attribute (INT, VARCHAR(30), or a constrained set such as grades A..F).",
              "Degree is the number of attributes; cardinality is the number of tuples. STUDENT(roll_no, name, city) has degree 3 and cardinality equal to however many students exist - degree changes only when the schema changes (DDL), cardinality changes with every INSERT and DELETE (DML). Because a relation is a set, two properties follow: no duplicate tuples, and tuple order is irrelevant. Similarly attribute (column) order is nominally irrelevant because columns are referenced by name, though SQL implementations display them in declared order.",
              "Codd's rule that all attribute values be atomic is the first normal form requirement (Section 4.3): a cell holds exactly one value, never a list. Together with the set semantics this gives the model its mathematical backbone - every operation of relational algebra consumes relations and produces relations (closure), so results can feed further operations without special-casing. That closure property is why views, subqueries and even the results of joins can themselves be queried like tables.",
              "A concrete instance pins the vocabulary. STUDENT with rows (101, 'Meena', 'Bhopal'), (102, 'Arjun', 'Indore') - this two-tuple relation has degree 3, cardinality 2; roll_no draws its values from domain INT, name from VARCHAR(30), city from the set of city names. Compare the tuple order swap (same relation) with a duplicate row (rejected as set violation). Terminology in one line per word - relation, attribute, tuple, domain, degree, cardinality - is the exact skeleton the examiner's answer key uses.",
            ],
            bullets: [
              "Relation = subset of the Cartesian product of domains; informally a table.",
              "Tuple = row; attribute = named column; domain = permitted atomic value set.",
              "Degree = number of attributes; cardinality = number of tuples.",
              "A relation is a set: no duplicate tuples; row and column order are immaterial.",
              "All values are atomic (1NF): one value per cell.",
              "Closure: every algebra operation maps relations to relations, enabling nesting.",
              "DDL changes degree; DML changes cardinality - a clean way to distinguish them.",
            ],
            keyTerms: [
              { term: "Relation", definition: "A set of tuples over specified domains; the relational representation of a table." },
              { term: "Tuple", definition: "A single row of a relation - one ordered list of attribute values." },
              { term: "Domain", definition: "The set of atomic values an attribute may take, e.g. INT or grades A to F." },
              { term: "Degree", definition: "The number of attributes in a relation." },
              { term: "Cardinality", definition: "The number of tuples currently in a relation." },
            ],
            table: {
              caption: "Formal term vs everyday term.",
              headers: ["Formal term", "Informal term", "Example (STUDENT)"],
              rows: [
                ["Relation", "Table", "STUDENT"],
                ["Tuple", "Row / record", "(101, 'Meena', 'Bhopal')"],
                ["Attribute", "Column / field", "city"],
                ["Domain", "Data type / value pool", "VARCHAR(20) city names"],
                ["Degree", "Number of columns", "3"],
                ["Cardinality", "Number of rows", "2 in the sample instance"],
              ],
            },
            callout: {
              type: "warning",
              title: "Degree vs cardinality - swap trap",
              body: "Degree counts COLUMNS, cardinality counts ROWS. It is the single most flipped pair of definitions in DBMS papers. Anchor it: degree is about the schema (D = D for Definition), cardinality is about the data (C is for Contents).",
            },
            diagram: {
              kind: "compare",
              title: "Relation (theory) vs table (practice)",
              caption: "The formal definition and its SQL-era rendering are close but not identical.",
              left: {
                heading: "A relation IS",
                items: [
                  "A set of tuples - no duplicates",
                  "Tuple order irrelevant",
                  "Attribute order nominally irrelevant",
                  "Heading drawn from declared domains",
                  "Closed under algebra operations",
                ],
              },
              right: {
                heading: "A table is NOT quite",
                items: [
                  "May contain duplicate rows unless keyed",
                  "Rows display in retrieval order",
                  "Columns display in declared order",
                  "May hold non-atomic columns unless constrained",
                  "SQL NULLs break pure set theory",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define relation, tuple, attribute, domain, degree and cardinality. State the three set-properties of a relation and justify why attribute order is immaterial.",
                marks: 7,
                outline: [
                  "Formal definition: subset of Cartesian product of domains.",
                  "Each term with its informal synonym and a sample row.",
                  "Degree 3 vs cardinality 2 on a concrete STUDENT instance.",
                  "Set properties: no duplicates, unordered tuples, unordered attributes.",
                  "Atomicity of values (1NF requirement).",
                  "Closure property of relational algebra.",
                  "DDL changes degree, DML changes cardinality.",
                ],
              },
              {
                q: "Define degree and cardinality of a relation with one example.",
                marks: 2,
              },
              {
                q: "Why must every value in a relation be atomic? Which normal form enforces this?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Keys: super, candidate, primary, alternate and foreign",
            body: [
              "A key is a minimal set of attributes that uniquely identifies a tuple. The superkey is any attribute set that uniquely identifies tuples - it may contain unnecessary attributes, so (roll_no, name), (roll_no, city) and (aadhaar) are all superkeys of STUDENT. A candidate key is a minimal superkey - no attribute can be removed without losing uniqueness: {roll_no} and {aadhaar} are candidates, but (roll_no, name) is not because name is removable. Every candidate key is a superkey; the converse is false.",
              "From the candidate keys the designer picks one primary key - the identifier actually used for references, chosen for stability, brevity and never-null semantics (roll_no beats phone, which can change). The remaining candidate keys become alternate keys. Candidate and primary keys must satisfy two properties at all times: uniqueness (no two tuples agree on the key) and irreducibility (no proper subset is itself a superkey). In SQL the primary key is declared with PRIMARY KEY and automatically enforces UNIQUE + NOT NULL.",
              "A foreign key is an attribute in one relation that references the primary (or candidate) key of another relation, creating the linkage the ER diagram's relationships promised: ENROLLS.roll_no references STUDENT.roll_no, and ENROLLS.course_id references COURSE.course_id. The referencing table is the child, the referenced table the parent. Foreign keys are the relational machinery for relationships: every junction table is built from two of them.",
              "Worked example on one table. STUDENT(roll_no, aadhaar, name, phone, city): superkeys include every set containing roll_no or aadhaar; candidate keys = {roll_no}, {aadhaar}; primary key = roll_no (stable, short, internal); alternate key = aadhaar; phone qualifies as neither since two students may share a family phone number. Then across tables, ENROLLS(roll_no, course_id, grade) has composite candidate key (roll_no, course_id) - composite keys arise whenever a junction table is created. Draw the key pyramid in the answer: superkeys at the wide base, candidate keys narrow, primary key at the apex, with foreign keys crossing between tables.",
            ],
            bullets: [
              "Superkey: any set of attributes that uniquely identifies tuples; may be non-minimal.",
              "Candidate key: minimal superkey - uniqueness + irreducibility.",
              "Primary key: the chosen candidate key; must be UNIQUE and NOT NULL.",
              "Alternate key: the candidate keys not chosen as primary.",
              "Foreign key: attribute referencing another relation's key; enforces referential integrity.",
              "Composite key: key of two or more attributes, typical in junction tables.",
              "Choice heuristics for primary key: stable, short, never null, never recycled.",
              "Ladder: superkeys (widest) contain candidate keys contain the primary key.",
            ],
            keyTerms: [
              { term: "Superkey", definition: "Any attribute set whose values uniquely identify tuples in a relation." },
              { term: "Candidate key", definition: "A minimal superkey - removing any attribute destroys uniqueness." },
              { term: "Primary key", definition: "The candidate key chosen to identify tuples; enforced UNIQUE and NOT NULL." },
              { term: "Alternate key", definition: "A candidate key not selected as the primary key." },
              { term: "Foreign key", definition: "Attributes in one relation that reference the key of another, enforcing referential integrity." },
            ],
            table: {
              caption: "Key types on STUDENT(roll_no, aadhaar, name, phone, city).",
              headers: ["Key type", "Instance in STUDENT", "Why"],
              rows: [
                ["Superkey", "(roll_no, name)", "Unique but not minimal"],
                ["Candidate key", "{roll_no}, {aadhaar}", "Minimal unique sets"],
                ["Primary key", "roll_no", "Stable, short, never null"],
                ["Alternate key", "aadhaar", "Candidate not chosen"],
                ["Foreign key", "ENROLLS.roll_no -> STUDENT.roll_no", "Links the tables"],
                ["Composite key", "ENROLLS(roll_no, course_id)", "Junction table key"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Explain all types of keys with examples' is a guaranteed 7-marker. Give the definition of each key, then work ONE table (STUDENT with roll_no and aadhaar) through superkey to foreign key so every definition lands on the same data - examiners reward the consistent worked instance.",
            },
            diagram: {
              kind: "pyramid",
              title: "The key pyramid for STUDENT(roll_no, aadhaar, name, city)",
              caption: "Narrowest on top: the primary key chosen from candidates inside the superkey family.",
              tiers: [
                { label: "Primary key: {roll_no}", note: "the one chosen and enforced" },
                { label: "Candidate keys: {roll_no}, {aadhaar}", note: "minimal superkeys" },
                { label: "Superkeys: any set containing roll_no or aadhaar", note: "unique but possibly bloated" },
                { label: "All attribute subsets", note: "most fail uniqueness" },
              ],
            },
            examQuestions: [
              {
                q: "Define superkey, candidate key, primary key, alternate key and foreign key. For STUDENT(roll_no, aadhaar, name, phone, city) identify all candidate keys and justify the primary key choice.",
                marks: 7,
                outline: [
                  "Superkey definition + one bloated example (roll_no, name).",
                  "Candidate key = minimal superkey; uniqueness + irreducibility.",
                  "Primary key = chosen candidate; UNIQUE + NOT NULL.",
                  "Alternate key = remaining candidates (aadhaar).",
                  "Foreign key with the ENROLLS example linking two tables.",
                  "Apply to STUDENT: candidates {roll_no}, {aadhaar}; phone rejected with reason.",
                  "Justify choice: stable, short, never null; composite key note for junction tables.",
                ],
              },
              {
                q: "Can a table have more than one candidate key? More than one primary key? Justify both.",
                marks: 3,
              },
              {
                q: "What two properties must every candidate key satisfy?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Integrity constraints and referential actions",
            body: [
              "Integrity constraints are rules the DBMS enforces on every instance, so correctness lives in the engine rather than in application code. Domain constraints restrict each attribute to its declared domain: type (INT), range (CHECK (marks BETWEEN 0 AND 100)), and NOT NULL where a value must exist. Key (entity integrity) constraints require every relation to have a primary key that is unique and never NULL - a tuple without a key could not be distinguished or referenced, so NULL is forbidden in primary keys.",
              "Referential integrity governs foreign keys: a value in the referencing (child) column must either match an existing key value in the referenced (parent) column or be NULL. Delete the parent row MEENA while ENROLLS still cites roll_no 101 and the database points at a ghost - referential integrity stops this. SQL offers four responses to a violating insert/update/delete: RESTRICT/NO ACTION (reject the operation - the default), CASCADE (propagate: deleting the student deletes their enrollments), SET NULL (orphan the child by nulling the FK column - requires the FK to be nullable), and SET DEFAULT (point the orphan at a default parent).",
              "A worked example shows the choice as a business decision. DELETE FROM student WHERE roll_no = 101 with ON DELETE CASCADE empties Meena's enrollment history automatically - right for a log archive, wrong for a university transcript where records must survive; there RESTRICT forces an explicit decision, or SET NULL keeps the enrollment rows with a null student reference. Declaring the action in DDL makes the policy executable: FOREIGN KEY (roll_no) REFERENCES student(roll_no) ON DELETE CASCADE ON UPDATE RESTRICT.",
              "Entity integrity, referential integrity and domain constraints together are called the inherent (structural) constraints; business rules declared as CHECK, assertions and triggers form the semantic layer. Order of enforcement matters and is examinable: when inserting into a child table, the parent must exist first (or the FK insert fails); when deleting a parent, the referential action decides the child's fate. State the four constraint families, give one DDL declaration each, and finish with the cascade-vs-restrict dilemma - that sequence is the complete 7-mark shape.",
            ],
            bullets: [
              "Domain constraints: type, CHECK range, NOT NULL on the attribute level.",
              "Entity integrity: primary key unique and never NULL.",
              "Referential integrity: FK values must match a parent key or be NULL.",
              "Four referential actions: RESTRICT/NO ACTION, CASCADE, SET NULL, SET DEFAULT.",
              "Insert order matters: parent row must exist before a child references it.",
              "Constraints are declared once in DDL and enforced on every DML statement.",
              "Semantic constraints: CHECK business rules, assertions, triggers beyond the structural three.",
              "Cascade is right for dependent data (payments), restrict for records of permanent value (transcripts).",
            ],
            keyTerms: [
              { term: "Domain constraint", definition: "Rule restricting an attribute to its declared type, range or value set." },
              { term: "Entity integrity", definition: "Every relation has a primary key; primary key values are unique and never NULL." },
              { term: "Referential integrity", definition: "Every foreign key value must match an existing parent key value or be NULL." },
              { term: "CASCADE", definition: "Referential action that propagates deletes/updates from parent to matching child rows." },
              { term: "RESTRICT / NO ACTION", definition: "Referential action that rejects any operation leaving dangling foreign keys." },
            ],
            table: {
              caption: "Constraint families with DDL examples.",
              headers: ["Constraint", "Rule", "DDL example"],
              rows: [
                ["Domain", "Values fit type/range/set", "CHECK (marks BETWEEN 0 AND 100)"],
                ["Entity integrity (key)", "PK unique and never NULL", "PRIMARY KEY (roll_no)"],
                ["Referential integrity", "FK matches parent key or NULL", "FOREIGN KEY (roll_no) REFERENCES student"],
                ["Semantic (business)", "Application-level rules", "CHECK (credits <= 6), triggers, assertions"],
              ],
            },
            callout: {
              type: "warning",
              title: "The NULL loophole",
              body: "SET NULL only works if the foreign key column is nullable - a composite FK or a NOT NULL FK cannot be nulled, and the DBMS will reject the delete instead. Mentioning this condition in the exam separates a complete answer from a memorized one.",
            },
            diagram: {
              kind: "fork",
              title: "Deleting a parent row: what happens to the children?",
              caption: "The referential action declared on the foreign key decides.",
              start: "DELETE FROM student WHERE roll_no = 101",
              branches: [
                { label: "ON DELETE RESTRICT", outcome: "Operation rejected - enrollments still reference 101", good: true },
                { label: "ON DELETE CASCADE", outcome: "Meena's enrollments deleted automatically", good: true },
                { label: "ON DELETE SET NULL", outcome: "Enrollments kept, roll_no set to NULL", good: true },
                { label: "No action declared", outcome: "Default NO ACTION - same as restrict, error raised", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain domain, entity integrity and referential integrity constraints with one DDL example each, and describe the four referential actions on delete with a worked example.",
                marks: 7,
                outline: [
                  "Define integrity constraints and why they live in the engine.",
                  "Domain: type + CHECK range + NOT NULL example.",
                  "Entity integrity: PK unique, never NULL, with reason.",
                  "Referential integrity: FK matches parent or NULL, with the ghost-row motivation.",
                  "Four actions: RESTRICT, CASCADE, SET NULL, SET DEFAULT.",
                  "DDL snippet: FOREIGN KEY ... ON DELETE CASCADE ON UPDATE RESTRICT.",
                  "Business judgement: cascade for dependent rows, restrict for permanent records.",
                ],
              },
              {
                q: "Why can a primary key value never be NULL?",
                marks: 2,
              },
              {
                q: "Difference between RESTRICT and CASCADE with one example of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.7",
            title: "Relational algebra: selection, projection, joins and set operations",
            body: [
              "Relational algebra is the procedural query language of the relational model: queries are expressions built from operators, each consuming relations and producing a relation (closure). The running example tables: STUDENT(roll_no, name, city, branch), COURSE(course_id, cname, credits), ENROLLS(roll_no, course_id, grade). SELECT sigma selects rows satisfying a predicate: sigma_{city='Bhopal'}(STUDENT) returns only Bhopal students - it filters rows, never changes columns. PROJECT pi keeps chosen columns and removes duplicates, because the result is a set: pi_{name, city}(STUDENT).",
              "Joins combine tuples from two relations on a condition. Theta join R |x|_{theta} S pairs tuples satisfying any condition; EQUIJOIN is the theta join where theta is equality, and it retains both join columns; NATURAL JOIN (|x|) equates all common attribute names and keeps one copy. Worked: STUDENT |x| ENROLLS on roll_no gives each student with their enrollments; a second natural join with COURSE yields the full three-table answer 'names of students who took DBMS'. Cartesian product (cross join) pairs every tuple with every tuple - R x S with |R|=200, |S|=50 produces 10,000 rows, which is why it is almost always followed by a selective condition (join = product + select).",
              "Set operations require union compatibility: both relations need the same number of attributes with matching domains. UNION U keeps tuples in either; INTERSECTION keeps tuples in both; SET DIFFERENCE R - S keeps tuples in R not in S; CARTESIAN PRODUCT needs no compatibility. Worked on branches: students in CSE union students in IT; CSE students difference IT students = pure CSE. The classic exam trick uses difference for negation: 'students who did NOT enroll in any course' = pi_{roll_no}(STUDENT) - pi_{roll_no}(ENROLLS).",
              "Compose operators to answer real questions - closure makes expressions nest. 'Names of Bhopal students enrolled in DBMS' = pi_{name}( sigma_{city='Bhopal'}(STUDENT) |x| ENROLLS |x| sigma_{cname='DBMS'}(COURSE) ). Read it inside-out: filter students by city, join to enrollments, filter courses by name, project the names. In exams, show this evaluation order and annotate each operator; the annotation converts a bare expression into a justified solution and typically carries the last two marks.",
            ],
            bullets: [
              "Relational algebra: procedural, operator-based, closed under composition.",
              "SELECT sigma: row filter on a predicate; PROJECT pi: column chooser, removes duplicates.",
              "Theta join on any condition; EQUIJOIN = equality theta join; NATURAL JOIN equates common names.",
              "Cartesian product pairs everything; join = product + selection condition.",
              "Union, intersection, difference need union compatibility; difference expresses negation.",
              "Negation pattern: 'no enrollment' = project(student keys) - project(enroll keys).",
              "Worked composition: names of Bhopal students in DBMS via nested sigma/pi/join.",
            ],
            keyTerms: [
              { term: "Relational algebra", definition: "The procedural query language built from operators on relations, producing relations." },
              { term: "Selection (sigma)", definition: "Operator returning the tuples of a relation that satisfy a predicate." },
              { term: "Projection (pi)", definition: "Operator returning specified attributes only, with duplicates removed." },
              { term: "Natural join", definition: "Join matching all commonly named attributes and retaining one copy of them." },
              { term: "Union compatibility", definition: "Requirement that both operands have the same number of attributes with corresponding domains." },
            ],
            table: {
              caption: "Core relational algebra operators.",
              headers: ["Operator", "Symbol", "Input", "Result"],
              rows: [
                ["Selection", "sigma_c(R)", "One relation", "Rows satisfying condition c"],
                ["Projection", "pi_A(R)", "One relation", "Columns in A, duplicates removed"],
                ["Natural join", "R |x| S", "Two relations", "Matched tuples on common attributes"],
                ["Union", "R U S", "Compatible relations", "Tuples in either"],
                ["Difference", "R - S", "Compatible relations", "Tuples in R not in S"],
                ["Cartesian product", "R x S", "Any two relations", "All pairings |R| x |S| rows"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Whenever a question says 'in relational algebra', check union compatibility before using U, intersection or minus, and state it in one line - 'both projections are on (roll_no)'. That single sentence is often worth a mark by itself.",
            },
            diagram: {
              kind: "pipeline",
              title: "Evaluating a composed algebra expression",
              caption: "Inside-out evaluation of the Bhopal-DBMS query.",
              stages: [
                { label: "sigma city='Bhopal' (STUDENT)", note: "filter rows" },
                { label: "Join ENROLLS on roll_no", note: "attach enrollments" },
                { label: "Join COURSE on course_id", note: "attach course names" },
                { label: "sigma cname='DBMS'", note: "keep DBMS rows" },
                { label: "pi name", note: "final answer" },
              ],
            },
            examQuestions: [
              {
                q: "Explain selection, projection, natural join and set difference in relational algebra with symbols and examples. Write an expression for 'names of students from Bhopal enrolled in the course DBMS'.",
                marks: 7,
                outline: [
                  "Closure property and procedural nature of algebra.",
                  "Selection sigma with row-filter example.",
                  "Projection pi with duplicate-removal note.",
                  "Natural join vs theta join vs product.",
                  "Set difference with the negation pattern.",
                  "Union compatibility precondition.",
                  "Composed expression with inside-out evaluation annotation.",
                ],
              },
              {
                q: "What is union compatibility? Which operators require it?",
                marks: 2,
              },
              {
                q: "Differentiate between EQUIJOIN and NATURAL JOIN.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.8",
            title: "Extended relational algebra: rename, division, aggregation and outer joins",
            body: [
              "Beyond the five basic operators, the extended algebra adds machinery that SQL exposes as familiar clauses. RENAME rho(R -> S, or rho_{S(A1,...,An)}(R)) gives a relation or its attributes new names - indispensable for self-joins, where EMPLOYEE must join with itself as EMPLOYEE e1 JOIN EMPLOYEE e2 to express 'employee and supervisor'. Assignment arrow lets complex queries be built in named steps, exactly like SQL views and CTEs.",
              "DIVISION R / S answers 'for all': find tuples of R that are related to EVERY tuple of S. Example: R = ENROLLS(roll_no, course_id), S = REQUIRED(course_id); ENROLLS / REQUIRED gives students enrolled in every required course. Mechanically: candidates = pi_{roll_no}(R); subtract those missing some course: candidates - pi_{roll_no}(candidates x S - R). Division rarely appears in SQL directly (it becomes NOT EXISTS double negation) but is a favourite theory question - memorize the two-step construction.",
              "Aggregate operators group tuples and compute summary values: G_{branch, COUNT(roll_no)}(STUDENT) returns one row per branch with its student count - SQL's GROUP BY with COUNT. Extended projection allows arithmetic in the projection list (pi_{name, marks*1.1 as scaled}). Outer joins preserve unmatched tuples with NULL fillers: LEFT OUTER JOIN keeps all of R plus NULLs where S has no match, RIGHT OUTER JOIN keeps all of S, FULL OUTER JOIN keeps both sides. They answer 'show all students, even those with no enrollment' - which an inner join silently drops.",
              "The extended operators complete the algebra-to-SQL dictionary: division maps to NOT EXISTS nesting, aggregation to GROUP BY, outer joins to the OUTER keyword, rename to AS/aliases, and assignment to views. For the exam, present each operator as (definition, symbol, one worked row example, SQL equivalent) - four columns of one sentence each is exactly the density an answer key expects, and the SQL equivalents prove you can bridge theory and practice.",
            ],
            bullets: [
              "RENAME rho: new names for relation or attributes; enables self-joins.",
              "DIVISION R/S: 'tuples related to every tuple of S' - the FOR ALL operator.",
              "Division construction: pi_R(x) minus those failing some S tuple.",
              "Aggregation G: group + compute, basis of GROUP BY/COUNT/AVG/SUM/MIN/MAX.",
              "Extended projection: computed expressions in the projection list.",
              "Outer joins: LEFT/RIGHT/FULL keep unmatched sides padded with NULL.",
              "Inner join drops non-matches; outer joins exist precisely to preserve them.",
            ],
            keyTerms: [
              { term: "Division (R / S)", definition: "Operator returning tuples of R associated with every tuple of S - expresses universal quantification." },
              { term: "Rename (rho)", definition: "Operator assigning a new name to a relation or its attributes, needed for self-joins." },
              { term: "Aggregation (G)", definition: "Operator grouping tuples and applying COUNT, SUM, AVG, MIN, MAX." },
              { term: "Outer join", definition: "Join variant keeping unmatched tuples of one or both operands, padding with NULL." },
              { term: "Extended projection", definition: "Projection allowing arithmetic expressions and renaming in its list." },
            ],
            table: {
              caption: "Extended operators and their SQL equivalents.",
              headers: ["Operator", "Meaning", "SQL equivalent"],
              rows: [
                ["rho S(R)", "Rename relation/attributes", "AS alias"],
                ["R / S", "For-all query", "NOT EXISTS double negation"],
                ["G groups (R)", "Group aggregation", "GROUP BY + COUNT/SUM/AVG"],
                ["R LEFT OUTER JOIN S", "Keep all left tuples", "LEFT JOIN"],
                ["R RIGHT OUTER JOIN S", "Keep all right tuples", "RIGHT JOIN"],
                ["pi f(x) (R)", "Computed columns", "SELECT expression"],
              ],
            },
            callout: {
              type: "tip",
              title: "Division by construction, not memorization",
              body: "Do not memorize the division formula blindly - reconstruct it: take all candidate keys, form their cross product with S, subtract R to find who is missing something, subtract that set from the candidates. Rederiving it under exam pressure is faster and safer than recalling a formula.",
            },
            diagram: {
              kind: "compare",
              title: "Basic operators vs extended operators",
              caption: "What the core five cover, and what the extensions add.",
              left: {
                heading: "Basic (Codd) operations",
                items: [
                  "Selection sigma filters rows",
                  "Projection pi picks columns",
                  "Union, intersection, difference",
                  "Cartesian product",
                  "Joins derived from product + select",
                ],
              },
              right: {
                heading: "Extended operations",
                items: [
                  "Rename rho enables self-join",
                  "Division expresses FOR ALL",
                  "Aggregation G sums groups",
                  "Outer joins preserve unmatched rows",
                  "Extended projection computes values",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain rename, division, aggregation and outer join operations of extended relational algebra with one example each, and give the SQL equivalent of each.",
                marks: 7,
                outline: [
                  "Why extensions exist beyond the basic five.",
                  "Rename rho with the employee-supervisor self-join use.",
                  "Division definition + two-step construction + 'every required course' example.",
                  "Aggregation G mapping to GROUP BY with COUNT example.",
                  "Outer joins: LEFT/RIGHT/FULL with NULL padding, 'all students even unenrolled'.",
                  "SQL equivalents table row by row.",
                  "Contrast inner join behaviour with outer join behaviour.",
                ],
              },
              {
                q: "Write the relational algebra expression for 'students enrolled in ALL courses'.",
                marks: 3,
              },
              {
                q: "When does an outer join return rows that an inner join would drop?",
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
      title: "SQL and Relational Calculus",
      summary:
        "The practical core: DDL and DML in SQL, joins, nested queries, views and authorization, aggregation with GROUP BY and HAVING, and the two declarative calculi - tuple relational calculus and domain relational calculus - plus their equivalence with algebra.",
      chapter: {
        number: "03",
        title: "Writing and Reasoning About Queries",
        intro:
          "Unit III is the highest-weight unit of the paper. It covers SQL end to end - CREATE/ALTER/DROP, INSERT/UPDATE/DELETE, SELECT with joins and nesting, views with GRANT/REVOKE, aggregates with GROUP BY and HAVING - and then the theory beneath SQL: tuple relational calculus, domain relational calculus, and why algebra, calculus and safe queries all describe the same answers.",
        inOneBreath:
          "DDL builds structure (CREATE, ALTER, DROP); DML moves data (INSERT, UPDATE, DELETE) and queries it (SELECT). SELECT evaluates FROM first, then WHERE, GROUP BY, HAVING, SELECT list, ORDER BY. Joins: INNER keeps matches, LEFT/RIGHT/FULL keep unmatched sides, SELF joins a table to itself via aliases. Nested queries: scalar, IN, EXISTS (correlated), ANY/ALL. Views are stored named queries - virtual tables - and DCL (GRANT/REVOKE) controls who may touch what. Aggregates collapse groups; WHERE filters rows before grouping, HAVING filters groups after. Tuple calculus quantifies over TUPLES (S | S in Student and S.city='Bhopal'); domain calculus over VARIABLES for each column; both are declarative, equivalent in power to relational algebra on safe queries.",
        sections: [
          {
            number: "3.1",
            title: "SQL DDL: CREATE, ALTER, DROP and data types",
            body: [
              "SQL is the standard language of relational databases - a de facto standard born at IBM (SEQUEL, 1974), standardized by ANSI/ISO, and implemented everywhere with small dialect differences (MySQL, PostgreSQL, Oracle, SQL Server). Its strength is the combination of DDL for structure, DML for data, DCL for authorization and TCL for transactions in one language, usable both interactively and embedded in host programs. The DDL part defines, changes and removes schema objects: tables, views, indexes, constraints.",
              "CREATE TABLE declares a table with its columns, types and constraints. Constraints attach at column or table level: PRIMARY KEY, FOREIGN KEY ... REFERENCES, UNIQUE, NOT NULL, CHECK (condition), DEFAULT value. The declared constraints are stored in the catalogue and enforced on every later DML statement - this is the engine-level integrity from Section 2.6 made executable. DROP TABLE removes the table and its data permanently; TRUNCATE empties all rows faster but keeps the structure - a favourite 2-mark comparison.",
              "ALTER TABLE changes an existing schema: ADD a column or constraint, DROP a column, MODIFY a column's type or size. Adding a NOT NULL column to a populated table fails unless a DEFAULT is supplied or the table is empty - DDL is validated against existing instances. Typical lifecycle: CREATE student, discover phones must be unique and ALTER to add UNIQUE, then a year later ALTER to widen city VARCHAR(20) to VARCHAR(40) as international students arrive.",
              "Data types matter because wrong types become wrong constraints: INT/BIGINT/DECIMAL(p,s) for exact numbers (money uses DECIMAL, never FLOAT), VARCHAR(n) for variable strings, CHAR(n) for fixed, DATE/TIME/TIMESTAMP for temporal values, and BOOLEAN. A worked CREATE for the course project: student with PRIMARY KEY roll_no, CHECK (city IN (...)), and course with UNIQUE cname - five lines of DDL that demonstrate types, keys, checks and references in one shot, which is precisely what 'write DDL for the following scenario' questions demand.",
            ],
            bullets: [
              "SQL: ANSI/ISO standard language combining DDL, DML, DCL and TCL.",
              "CREATE TABLE declares columns, types and constraints (PK, FK, UNIQUE, NOT NULL, CHECK, DEFAULT).",
              "ALTER TABLE adds/drops/modifies columns and constraints; validated against existing data.",
              "DROP TABLE removes structure + data; TRUNCATE removes data only, faster, no row-level logging.",
              "Exact numeric: DECIMAL(p,s) for money; approximate: FLOAT; strings: VARCHAR(n)/CHAR(n); temporal: DATE/TIMESTAMP.",
              "Constraints live in the catalogue and are enforced on every DML statement.",
              "Column-level vs table-level constraint syntax both exist; table-level needed for composite keys.",
            ],
            keyTerms: [
              { term: "CREATE TABLE", definition: "DDL statement declaring a table's columns, data types and constraints." },
              { term: "ALTER TABLE", definition: "DDL statement changing an existing table: add/drop columns, add constraints, modify types." },
              { term: "DROP vs TRUNCATE", definition: "DROP deletes table structure and data; TRUNCATE deletes all rows but keeps the structure." },
              { term: "CHECK constraint", definition: "Inline business rule on a column or table that every row must satisfy." },
              { term: "VARCHAR(n)", definition: "Variable-length string data type up to n characters; CHAR(n) pads to fixed length." },
            ],
            codeExample: {
              language: "sql",
              caption: "DDL for the running university schema.",
              code:
"CREATE TABLE student (\n" +
"  roll_no   INT          PRIMARY KEY,\n" +
"  name      VARCHAR(30)  NOT NULL,\n" +
"  city      VARCHAR(20)  DEFAULT 'Bhopal',\n" +
"  aadhaar   CHAR(12)     UNIQUE,\n" +
"  dob       DATE,\n" +
"  CHECK (roll_no > 0)\n" +
");\n" +
"CREATE TABLE course (\n" +
"  course_id INT          PRIMARY KEY,\n" +
"  cname     VARCHAR(40)  UNIQUE NOT NULL,\n" +
"  credits   INT          CHECK (credits BETWEEN 1 AND 6)\n" +
");\n" +
"ALTER TABLE student ADD email VARCHAR(50) UNIQUE;",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "DDL questions are graded on constraint coverage, not syntax polish. Every scenario keyword maps to a constraint: 'unique identity' -> PRIMARY KEY, 'must have value' -> NOT NULL, 'between 0 and 100' -> CHECK, 'belongs to registered course' -> FOREIGN KEY, 'default city' -> DEFAULT. Cover all five and the answer is nearly full.",
            },
            diagram: {
              kind: "flow",
              title: "Life cycle of a table through DDL",
              caption: "Structure is born, reshaped and eventually destroyed - all through DDL.",
              steps: [
                { label: "CREATE TABLE defines structure", note: "columns, types, constraints" },
                { label: "ALTER TABLE evolves it", note: "ADD / MODIFY / DROP columns" },
                { label: "Catalogue records every change" },
                { label: "TRUNCATE empties the data", note: "structure intact" },
                { label: "DROP TABLE removes everything", note: "structure + data + indexes" },
              ],
            },
            examQuestions: [
              {
                q: "Write CREATE TABLE statements for a university scenario with appropriate constraints, and explain the difference between DROP and TRUNCATE.",
                marks: 7,
                outline: [
                  "Read the scenario and map keywords to constraints.",
                  "CREATE student: PK, NOT NULL, UNIQUE, DEFAULT, CHECK demonstrated.",
                  "CREATE course: UNIQUE name, CHECK range on credits.",
                  "FK declaration between enrollment and its parents.",
                  "ALTER example: adding a column with a constraint.",
                  "DROP vs TRUNCATE: structure + data vs data only.",
                  "Note on DECIMAL for money and VARCHAR sizing.",
                ],
              },
              {
                q: "Difference between TRUNCATE and DELETE.",
                marks: 2,
              },
              {
                q: "Write a CREATE TABLE line for a marks column that must lie between 0 and 100.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "SQL DML: INSERT, UPDATE, DELETE and the SELECT clause order",
            body: [
              "DML changes and reads data. INSERT adds rows: INSERT INTO student (roll_no, name, city) VALUES (101, 'Meena', 'Bhopal') for one row, multi-row VALUES lists for several, or INSERT INTO ... SELECT to copy from another table. UPDATE modifies matching rows: UPDATE student SET city = 'Indore', hostel = 'B3' WHERE roll_no = 101 - without the WHERE clause every row is updated, the most expensive typo in computing. DELETE removes matching rows: DELETE FROM enroll WHERE roll_no = 101; again WHERE is the safety latch.",
              "SELECT reads data. Its clauses have a fixed logical evaluation order that examiners test directly: FROM builds the working tables, WHERE filters rows, GROUP BY forms groups, HAVING filters groups, the SELECT list computes output columns, DISTINCT removes duplicate output rows, ORDER BY sorts the result. Knowing the order explains apparent paradoxes: you cannot use a column alias in WHERE (it is computed later in SELECT), and aggregates may appear in HAVING but not in WHERE.",
              "Worked example on the running schema. SELECT name, city FROM student WHERE city = 'Bhopal' ORDER BY name returns Bhopal students sorted; SELECT DISTINCT city FROM student collapses repeats. Pattern operators extend WHERE: LIKE 'M%' matches names starting with M (% = any string, _ = one character), BETWEEN 0 AND 100 is the range test, IN ('Bhopal','Indore') is the set membership test, IS NULL is the only correct NULL test (NULL = NULL is never true - unknown semantics), and NOT inverts any predicate.",
              "NULL semantics deserve a dedicated sentence in every answer: any comparison with NULL yields UNKNOWN, not false, and UNKNOWN rows are filtered out by WHERE. Hence the classic trap: UPDATE student SET phone = NULL WHERE phone = 'old' works, but WHERE phone = NULL matches nothing - only IS NULL does. Combine one INSERT, one UPDATE and one SELECT with LIKE and IS NULL in your answer and the DML section is complete.",
            ],
            bullets: [
              "INSERT: single row, multi-row VALUES, or INSERT ... SELECT from another table.",
              "UPDATE/DELETE without WHERE hit every row - always write the predicate first.",
              "Logical evaluation order: FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY.",
              "Aliases are computed in SELECT, so WHERE cannot see them; aggregates belong in HAVING.",
              "LIKE patterns: % any string, _ exactly one character.",
              "BETWEEN, IN, IS NULL, NOT extend WHERE predicates.",
              "Three-valued logic: comparisons with NULL give UNKNOWN and are filtered out.",
              "DISTINCT removes duplicate output rows after projection.",
            ],
            keyTerms: [
              { term: "INSERT", definition: "DML statement adding one or more rows, from VALUES or from a SELECT." },
              { term: "UPDATE ... WHERE", definition: "DML statement modifying columns of rows matching a predicate; without WHERE it hits all rows." },
              { term: "Logical query order", definition: "Evaluation sequence FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY." },
              { term: "LIKE", definition: "Pattern-matching predicate using % (any string) and _ (single character)." },
              { term: "IS NULL", definition: "The only valid test for NULL; equality with NULL is never true under three-valued logic." },
            ],
            codeExample: {
              language: "sql",
              caption: "DML essentials on the university schema.",
              code:
"INSERT INTO student (roll_no, name, city, dob)\n" +
"VALUES (101, 'Meena', 'Bhopal', '2005-03-15');\n" +
"INSERT INTO student (roll_no, name, city)\n" +
"VALUES (102, 'Arjun', 'Indore'), (103, 'Kiran', 'Jabalpur');\n" +
"\n" +
"UPDATE student SET city = 'Indore' WHERE roll_no = 101;\n" +
"\n" +
"SELECT name, city\n" +
"FROM   student\n" +
"WHERE  city IN ('Bhopal', 'Indore')\n" +
"  AND  name LIKE 'M%'\n" +
"  AND  phone IS NULL\n" +
"ORDER BY name;",
            },
            callout: {
              type: "warning",
              title: "The missing WHERE clause",
              body: "UPDATE student SET city = 'Indore'; renames every city in the table, and DELETE FROM student; empties it. In exams and in production, write and check the WHERE clause before the SET or table name - one forgotten predicate destroys a semester's data.",
            },
            diagram: {
              kind: "pipeline",
              title: "How SQL evaluates a SELECT statement",
              caption: "The fixed logical order - the reason WHERE cannot use SELECT aliases.",
              stages: [
                { label: "FROM joins the source tables" },
                { label: "WHERE filters rows" },
                { label: "GROUP BY forms groups" },
                { label: "HAVING filters groups", note: "aggregates allowed here" },
                { label: "SELECT computes output columns", note: "aliases born here" },
                { label: "DISTINCT then ORDER BY", note: "dedupe, then sort" },
              ],
            },
            examQuestions: [
              {
                q: "Explain INSERT, UPDATE and DELETE with syntax and one example each, and describe the logical evaluation order of SELECT clauses with the reason aliases are invisible in WHERE.",
                marks: 7,
                outline: [
                  "INSERT: single, multi-row and INSERT...SELECT forms.",
                  "UPDATE with SET and WHERE; danger of missing WHERE.",
                  "DELETE with WHERE; TRUNCATE comparison one-liner.",
                  "Evaluation order FROM to ORDER BY.",
                  "WHERE vs HAVING placement of aggregates.",
                  "Alias timing explains WHERE restrictions.",
                  "NULL handling with IS NULL and three-valued logic.",
                ],
              },
              {
                q: "What does the LIKE pattern 'M%' match? What matches '_'?",
                marks: 2,
              },
              {
                q: "Why does WHERE city = NULL never match? Write the correct predicate.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Joins in SQL: inner, outer, self and cross joins",
            body: [
              "A join combines rows of two tables on a related condition - SQL's realization of relational algebra's join operator. INNER JOIN (the default) returns only rows with a match on both sides: SELECT s.name, e.grade FROM student s INNER JOIN enroll e ON s.roll_no = e.roll_no returns only students who have actually enrolled; Meena without any enrollment row simply disappears. ON specifies the join condition; NATURAL JOIN is the shorthand that matches all identically named columns automatically.",
              "Outer joins preserve unmatched rows with NULL padding. LEFT OUTER JOIN keeps every left row even without a match: joining student LEFT JOIN enroll shows every student, with NULL grade for the unenrolled - the standard query for 'find students with no enrollment' by adding WHERE e.roll_no IS NULL. RIGHT OUTER JOIN keeps every right row; FULL OUTER JOIN keeps both sides. Worked: with student = {101, 102} and enroll = {101, 105}, inner join yields one row (101), left join yields two (101, 102-NULL), right join two (101, 105-NULL), full join three.",
              "SELF JOIN joins a table with itself under two aliases - the only way to compare rows of the same table. The classic employees-and-managers query: SELECT w.name AS worker, b.name AS boss FROM employee w JOIN employee b ON w.manager_id = b.emp_id; each worker row is matched with the row of their manager. CROSS JOIN is the Cartesian product - every left row paired with every right row (200 x 50 = 10,000 rows) - rarely wanted by itself, but conceptually the raw material every conditional join filters down from.",
              "Join strategy in exams: decide first whether unmatched rows matter. If the question says 'find students who took DBMS' - inner join suffices. If it says 'list all students and, if any, their grades' - left outer join. If it says 'also show courses nobody took' - full outer join. Then pick the tables, write ON with the keys (never a non-key equality unless the design demands it), and annotate the answer with one line stating which rows the join preserves. That annotation is exactly what separates a 7-mark answer from a 5-mark one.",
            ],
            bullets: [
              "INNER JOIN: only matching rows on the ON condition.",
              "NATURAL JOIN: matches all identically named columns; risky if names coincide accidentally.",
              "LEFT/RIGHT/FULL OUTER JOIN: preserve the named side(s), padding with NULL.",
              "Anti-join idiom: LEFT JOIN + WHERE right.key IS NULL finds unmatched left rows.",
              "SELF JOIN with two aliases expresses unary relationships (worker vs boss).",
              "CROSS JOIN = Cartesian product; row count multiplies |R| x |S|.",
              "Join keys should be primary/foreign keys; arbitrary conditions are legal but suspicious.",
              "Decide join type from the question wording: 'who took' vs 'everyone and their grade'.",
            ],
            keyTerms: [
              { term: "INNER JOIN", definition: "Join returning only the row pairs satisfying the ON condition." },
              { term: "LEFT OUTER JOIN", definition: "Join keeping all rows of the left table, NULL-padded where the right table has no match." },
              { term: "SELF JOIN", definition: "A table joined to itself via two aliases, used for unary relationships." },
              { term: "CROSS JOIN", definition: "Cartesian product of the two tables - every row paired with every row." },
              { term: "ON condition", definition: "The predicate pairing rows of the two joined tables, ideally on key columns." },
            ],
            table: {
              caption: "Join types on student {101, 102} and enroll {101, 105}.",
              headers: ["Join type", "Rows returned", "Preserved side"],
              rows: [
                ["INNER JOIN", "101 student + 101 enroll", "neither side"],
                ["LEFT OUTER", "101 + 102 (NULL enroll)", "left: all students"],
                ["RIGHT OUTER", "101 + 105 (NULL student)", "right: all enrollments"],
                ["FULL OUTER", "101 + 102 NULL + 105 NULL", "both sides"],
                ["CROSS JOIN", "2 x 2 = 4 combinations", "none - pure product"],
              ],
            },
            callout: {
              type: "tip",
              title: "The IS NULL anti-join",
              body: "Memorize the two-line pattern: SELECT s.name FROM student s LEFT JOIN enroll e ON s.roll_no = e.roll_no WHERE e.roll_no IS NULL. It is the SQL answer to every 'who did NOT...' question - no NOT IN subquery needed, and it handles NULLs correctly.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing the right join type",
              caption: "Read the question, follow the branch.",
              start: "Must unmatched rows appear in the answer?",
              branches: [
                { label: "No - only pairs", outcome: "INNER JOIN on the key condition", good: true },
                { label: "All rows of table A", outcome: "A LEFT OUTER JOIN B, NULL-padded", good: true },
                { label: "All rows of table B", outcome: "A RIGHT OUTER JOIN B", good: true },
                { label: "All rows of both", outcome: "FULL OUTER JOIN (or LEFT UNION RIGHT)", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Explain inner join, left/right/full outer joins, self join and cross join with SQL syntax and a worked example showing which rows each preserves.",
                marks: 7,
                outline: [
                  "Join = pairing rows on a condition; ON vs NATURAL JOIN.",
                  "INNER JOIN with student-enroll example.",
                  "LEFT OUTER with the unenrolled-student preservation.",
                  "RIGHT and FULL symmetry.",
                  "Anti-join pattern with WHERE ... IS NULL.",
                  "SELF JOIN with worker-boss aliases.",
                  "CROSS JOIN as Cartesian product with row-count arithmetic.",
                ],
              },
              {
                q: "Write the SQL to list employees with their manager's name (self join).",
                marks: 3,
              },
              {
                q: "How many rows does a CROSS JOIN of 200-row and 50-row tables produce?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "Nested queries: scalar subqueries, IN, EXISTS, ANY and ALL",
            body: [
              "A nested (sub)query is a SELECT inside another statement - in the WHERE clause, HAVING, FROM or even the SELECT list. By result shape it may be scalar (one value), a column (IN lists), or a row/table (EXISTS, FROM-derived tables). By dependency it may be uncorrelated (evaluated once, independent of the outer row) or correlated (references outer columns, re-evaluated per row). The distinction matters for both semantics and performance.",
              "The membership family. Scalar: SELECT name FROM student WHERE city = (SELECT city FROM student WHERE roll_no = 101) - works only if the subquery returns one value. IN: WHERE roll_no IN (SELECT roll_no FROM enroll WHERE course_id = 5) selects students who enrolled in course 5; NOT IN excludes them, with one famous trap - NOT IN against a list containing NULL never matches anything, so NOT EXISTS is the safer form. ANY/ALL compare against every element: marks > ALL (subquery) means greater than every returned value; > ANY means greater than at least one.",
              "EXISTS tests for row existence and powers correlation: SELECT s.name FROM student s WHERE EXISTS (SELECT 1 FROM enroll e WHERE e.roll_no = s.roll_no AND e.course_id = 5) finds students enrolled in course 5 - the inner query references the outer alias s, so it is correlated and re-checked per student. NOT EXISTS is the professional negation, and doubling it expresses division/universal quantification: 'students enrolled in EVERY course' = for each student, NOT EXISTS a course with no enrollment row for that student. Subqueries in FROM create derived tables: SELECT branch, avg_marks FROM (SELECT branch, AVG(marks) avg_marks FROM student GROUP BY branch) t WHERE avg_marks > 70.",
              "Worked exam triad. (a) Who scored above every IT student: SELECT name FROM student WHERE marks > ALL (SELECT marks FROM student WHERE branch = 'IT'). (b) Who has no enrollment: NOT EXISTS pattern. (c) Students whose city matches some faculty's city: IN (SELECT city FROM faculty). Present all three shapes - scalar, EXISTS-correlated, ALL - with one-line evaluation notes, and mention that most optimizers flatten uncorrelated subqueries into joins; the semantic reading, however, is always inside-out.",
            ],
            bullets: [
              "Subquery placements: WHERE, HAVING, FROM (derived table), SELECT list.",
              "Scalar subquery must return exactly one value or the statement errors.",
              "IN / NOT IN test membership in a column of the subquery result.",
              "NOT IN with a NULL in the list matches nothing - prefer NOT EXISTS.",
              "EXISTS / NOT EXISTS are correlated and re-evaluated per outer row.",
              "Double NOT EXISTS expresses FOR ALL (relational division in SQL).",
              "ANY / ALL: comparison against at least one / every subquery value.",
              "Derived tables (subquery in FROM) need an alias and enable staged aggregation.",
            ],
            keyTerms: [
              { term: "Subquery", definition: "A SELECT nested inside another SQL statement." },
              { term: "Correlated subquery", definition: "A subquery referencing outer-query columns, re-evaluated once per candidate row." },
              { term: "EXISTS", definition: "Predicate true when the subquery returns at least one row; the standard negation-safe test." },
              { term: "ANY / ALL", definition: "Quantified comparisons: true against at least one / every value of the subquery result." },
              { term: "Derived table", definition: "A subquery in the FROM clause acting as a temporary named table." },
            ],
            codeExample: {
              language: "sql",
              caption: "Three shapes of nested queries.",
              code:
"-- 1. membership: who enrolled in course 5\n" +
"SELECT name FROM student\n" +
"WHERE roll_no IN (SELECT roll_no FROM enroll\n" +
"                  WHERE course_id = 5);\n" +
"\n" +
"-- 2. correlated: who has NO enrollment at all\n" +
"SELECT s.name FROM student s\n" +
"WHERE NOT EXISTS (SELECT 1 FROM enroll e\n" +
"                  WHERE e.roll_no = s.roll_no);\n" +
"\n" +
"-- 3. quantified: above EVERY IT student\n" +
"SELECT name FROM student\n" +
"WHERE marks > ALL (SELECT marks FROM student\n" +
"                   WHERE branch = 'IT');",
            },
            callout: {
              type: "warning",
              title: "NOT IN meets NULL",
              body: "WHERE roll_no NOT IN (SELECT roll_no FROM enroll) silently returns an empty result if the subquery yields one NULL. Use NOT EXISTS for negation. This trap appears in theory papers exactly as often as it bites in production code.",
            },
            diagram: {
              kind: "matrix",
              title: "Subquery shapes and dependencies",
              caption: "Horizontal axis: dependency. Vertical axis: result shape.",
              axes: { x: "Uncorrelated to correlated", y: "Single value to row set" },
              quadrants: [
                { label: "Scalar, uncorrelated", note: "one value, evaluated once" },
                { label: "Scalar, correlated", note: "per-row lookup, e.g. compare with group average" },
                { label: "Set, uncorrelated", note: "IN (SELECT ...)" },
                { label: "Set, correlated", note: "EXISTS referencing outer alias" },
              ],
            },
            examQuestions: [
              {
                q: "Explain nested queries with IN, EXISTS, ANY and ALL operators, distinguish correlated from uncorrelated subqueries, and write SQL for 'students enrolled in every course'.",
                marks: 7,
                outline: [
                  "Subquery definition and placement options.",
                  "Scalar subquery constraint (one value).",
                  "IN and NOT IN with the NULL trap.",
                  "EXISTS correlation and per-row evaluation.",
                  "ANY vs ALL semantics with one comparison each.",
                  "Double NOT EXISTS construction for 'every course'.",
                  "Derived tables in FROM with alias requirement.",
                ],
              },
              {
                q: "When is a subquery called correlated? Give one example predicate.",
                marks: 2,
              },
              {
                q: "Difference between > ANY and > ALL with a two-value example.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Views and security: CREATE VIEW, GRANT and REVOKE",
            body: [
              "A view is a named, stored query presented as a virtual table: it occupies no storage of its own (except materialized views) and computes its rows at access time. CREATE VIEW bhopal_students AS SELECT roll_no, name, phone FROM student WHERE city = 'Bhopal'; afterwards SELECT * FROM bhopal_students works exactly like a table. Views give three benefits: simplicity (hide joins behind friendly names), logical data independence (restructure base tables, redefine the view, old queries keep running - Section 1.2 in action), and security (expose only chosen rows and columns).",
              "Updatability is the subtle part. A view is updatable only if it maps rows one-to-one onto a base table: simple projections and row selections of one table, no aggregates, no GROUP BY, no DISTINCT, no multi-table joins. INSERT into bhopal_students writes through to student. Aggregate views (CREATE VIEW branch_avg AS SELECT branch, AVG(marks) ... ) are read-only - there is no single base row to update. Materialized views, in contrast, physically store their result and refresh periodically, trading storage and staleness for query speed.",
              "DCL turns views into a security architecture. GRANT SELECT ON bhopal_students TO clerk; lets the clerk read exactly the Bhopal slice and nothing else; GRANT SELECT, INSERT ON student TO registrar; widens rights; REVOKE INSERT ON student FROM registrar takes them back. WITH GRANT OPTION allows the grantee to re-grant to others - powerful and auditable. The layered defence: base tables granted to nobody directly, every user works through purpose-built views, and each role sees its minimal slice - this pattern is called granting through views.",
              "Worked security scenario for the exam. University database: students see view my_marks (their own rows); faculty see course-wise marks view without phone numbers; accounts see fee columns only. Three CREATE VIEW statements plus three GRANT statements, and the closing line 'revoking on the base table cuts off every view-based path' - because privileges on views depend on privileges on their underlying tables, revoking base-table rights invalidates downstream grants, a fact examiners like to probe.",
            ],
            bullets: [
              "View = named stored query used as a virtual table; computed at query time.",
              "Benefits: simplification, logical data independence, row/column-level security.",
              "Updatable views: single table, no aggregates, no GROUP BY, no DISTINCT, no joins.",
              "Materialized views store results and must be refreshed; read speed vs staleness.",
              "GRANT privileges (SELECT, INSERT, UPDATE, DELETE) ON object TO user [WITH GRANT OPTION].",
              "REVOKE withdraws privileges; revoking base-table rights breaks dependent view grants.",
              "Grant-through-views: never expose base tables; expose minimal per-role views.",
            ],
            keyTerms: [
              { term: "View", definition: "A named virtual table defined by a stored query; its rows are computed on access." },
              { term: "Updatable view", definition: "A view on a single base table without aggregation or joins, through which DML can pass." },
              { term: "Materialized view", definition: "A view whose result is physically stored and periodically refreshed." },
              { term: "GRANT", definition: "DCL statement giving privileges on an object to a user, optionally WITH GRANT OPTION." },
              { term: "REVOKE", definition: "DCL statement withdrawing previously granted privileges." },
            ],
            codeExample: {
              language: "sql",
              caption: "Views plus authorization in six statements.",
              code:
"CREATE VIEW bhopal_students AS\n" +
"  SELECT roll_no, name, phone FROM student\n" +
"  WHERE city = 'Bhopal';\n" +
"\n" +
"CREATE VIEW branch_avg AS\n" +
"  SELECT branch, AVG(marks) AS avg_marks\n" +
"  FROM student GROUP BY branch;\n" +
"\n" +
"GRANT SELECT ON bhopal_students TO clerk;\n" +
"REVOKE SELECT ON branch_avg FROM clerk;",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Pair the two halves: define a view for each role, then GRANT on the view, not the base table. The sentence 'privileges are checked against the view, which itself needs base-table rights' is the conceptual payoff examiners look for in security questions.",
            },
            diagram: {
              kind: "layers",
              title: "Security through layered views",
              caption: "Each role touches only its own layer; base tables stay sealed.",
              layers: [
                { label: "Role views: clerk_view, faculty_view, accounts_view", note: "row + column slices" },
                { label: "GRANT/REVOKE authorization checks", note: "DCL gate at every access" },
                { label: "Base tables: student, course, enroll", note: "no direct user grants" },
                { label: "Physical storage + indexes", note: "invisible to every role" },
              ],
            },
            examQuestions: [
              {
                q: "What is a view? Explain its advantages, when it is updatable, and demonstrate row/column security using CREATE VIEW with GRANT and REVOKE.",
                marks: 7,
                outline: [
                  "Definition: named stored query, virtual table.",
                  "Three advantages: simplicity, logical independence, security.",
                  "Updatable-view conditions enumerated.",
                  "Materialized view contrast.",
                  "GRANT/REVOKE syntax with one example each.",
                  "Grant-through-views layered pattern.",
                  "Revocation cascade on base-table rights.",
                ],
              },
              {
                q: "Can you INSERT through a view defined with GROUP BY? Why?",
                marks: 2,
              },
              {
                q: "What does WITH GRANT OPTION do and what risk does it carry?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Aggregate functions, GROUP BY, HAVING and ORDER BY",
            body: [
              "Aggregate functions collapse many rows into one summary value: COUNT counts rows (COUNT(*) or COUNT(column) which skips NULLs), SUM and AVG total/average numeric columns (also skipping NULLs), MIN and MAX find extremes. SELECT COUNT(*) FROM student returns the number of students; SELECT AVG(marks) FROM student WHERE branch = 'CSE' returns the CSE average. All aggregates ignore NULL values in their argument - AVG over a column with three NULLs divides by the non-NULL count only, a subtlety examiners probe with 2-mark questions.",
              "GROUP BY partitions rows into groups and aggregates per group: SELECT branch, COUNT(*) AS n, AVG(marks) AS avg_m FROM student GROUP BY branch returns one row per branch. The golden rule: every column in the SELECT list must be either in the GROUP BY list or inside an aggregate - SELECT branch, name, COUNT(*) fails because name is neither grouped nor aggregated. Multiple grouping columns (branch, city) form one group per distinct pair.",
              "WHERE and HAVING split the filtering into two stages because of the evaluation order from Section 3.2: WHERE filters rows before grouping (so aggregates are illegal there), HAVING filters groups after aggregation. 'Branches whose average exceeds 70 with at least 5 students': SELECT branch FROM student GROUP BY branch HAVING AVG(marks) > 70 AND COUNT(*) >= 5. Putting the row-level condition (branch = 'CSE') into HAVING instead of WHERE works on many engines but is semantically wrong and slower - keep each filter in its correct stage.",
              "ORDER BY sorts output: ORDER BY avg_m DESC, branch ASC sorts by average descending, then branch ascending for ties; DESC/ASC flip direction per column; NULLs sort first or last depending on the engine. A complete worked answer for 'top branch by average marks': compute groups, filter with HAVING, order with ORDER BY avg_m DESC and take LIMIT 1 - narrating the three stages (group, filter groups, sort) demonstrates command of the whole clause pipeline.",
            ],
            bullets: [
              "Five aggregates: COUNT, SUM, AVG, MIN, MAX; all skip NULL arguments.",
              "COUNT(*) counts rows; COUNT(col) counts non-NULL values.",
              "GROUP BY forms one output row per group; grouped columns must appear in SELECT.",
              "Every SELECT column must be grouped or aggregated - the golden rule.",
              "WHERE filters rows before grouping; HAVING filters groups after.",
              "Aggregates are illegal in WHERE and required in HAVING conditions.",
              "ORDER BY with DESC/ASC per column; secondary sort keys break ties.",
              "LIMIT/TOP trims output after sorting (engine-dependent spelling).",
            ],
            keyTerms: [
              { term: "Aggregate function", definition: "Function collapsing a set of rows into one value: COUNT, SUM, AVG, MIN, MAX." },
              { term: "GROUP BY", definition: "Clause partitioning rows into groups so aggregates apply per group." },
              { term: "HAVING", definition: "Clause filtering groups after aggregation; may contain aggregate conditions." },
              { term: "ORDER BY", definition: "Clause sorting the final result, per column, ascending or descending." },
              { term: "NULL skipping", definition: "Aggregates ignore NULLs; AVG divides only by non-NULL values." },
            ],
            codeExample: {
              language: "sql",
              caption: "Grouping, filtering groups and sorting in one query.",
              code:
"SELECT   branch,\n" +
"         COUNT(*)    AS n_students,\n" +
"         AVG(marks)  AS avg_marks\n" +
"FROM     student\n" +
"WHERE    city = 'Bhopal'        -- row filter: before grouping\n" +
"GROUP BY branch\n" +
"HAVING   COUNT(*) >= 5          -- group filter: after grouping\n" +
"  AND    AVG(marks) > 70\n" +
"ORDER BY avg_marks DESC, branch ASC;",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For any 'find groups satisfying X' question, say the three stages aloud in the answer: WHERE filters rows, GROUP BY forms groups, HAVING filters groups. Writing WHERE AVG(...) > 70 is the classic error examiners plant - never commit it on paper.",
            },
            diagram: {
              kind: "compare",
              title: "WHERE vs HAVING",
              caption: "Same keyword family, opposite stages of the pipeline.",
              left: {
                heading: "WHERE",
                items: [
                  "Filters individual rows",
                  "Runs before GROUP BY",
                  "No aggregate functions allowed",
                  "Discards rows from grouping entirely",
                  "Example: WHERE city = 'Bhopal'",
                ],
              },
              right: {
                heading: "HAVING",
                items: [
                  "Filters whole groups",
                  "Runs after GROUP BY",
                  "Aggregates required or allowed",
                  "Keeps or drops entire groups",
                  "Example: HAVING AVG(marks) > 70",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain aggregate functions and the GROUP BY/HAVING mechanism. Write a query returning branches with more than five students and average marks above 70, sorted by average descending, and state why the aggregate cannot appear in WHERE.",
                marks: 7,
                outline: [
                  "Five aggregates with NULL-skipping note.",
                  "COUNT(*) vs COUNT(col).",
                  "GROUP BY mechanics and the golden rule for SELECT lists.",
                  "Evaluation order: WHERE before, HAVING after grouping.",
                  "The worked three-stage query.",
                  "Why aggregates are illegal in WHERE.",
                  "ORDER BY direction and tie-breaking.",
                ],
              },
              {
                q: "Difference between WHERE and HAVING in one sentence each.",
                marks: 2,
              },
              {
                q: "What does AVG return for a column containing three NULLs among ten rows?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.7",
            title: "Tuple relational calculus",
            body: [
              "Tuple relational calculus (TRC) is the declarative counterpart of relational algebra: queries are logical formulas over tuple variables, and the answer is the set of tuples making the formula true. A tuple variable t ranges over the tuples of a relation; t.A denotes attribute A of the tuple t. The query shape is { t | P(t) }: 'return tuples t such that predicate P holds'. Example: { s | s in STUDENT and s.city = 'Bhopal' } - all student tuples whose city is Bhopal.",
              "The predicate builds from atomic formulas and connectives. Atomic forms: s in R (membership), s.a op s.b or s.a op constant (comparisons). Connectives: and, or, not, implies. Quantifiers add power: EXISTS s in R (phi) - some tuple of R satisfies phi; FORALL s in R (phi) - every tuple does. Projection is expressed by restricting the displayed tuple: { s.name | exists t in ENROLLS (t.roll_no = s.roll_no and t.course_id = 5) } names of students enrolled in course 5 - the displayed variable carries only the wanted attribute.",
              "Worked example set. (a) Bhopal students: { s | s in STUDENT and s.city = 'Bhopal' }. (b) Students enrolled in DBMS: { s | s in STUDENT and exists e (e in ENROLLS and e.roll_no = s.roll_no and exists c (c in COURSE and c.course_id = e.course_id and c.cname = 'DBMS')) }. (c) Students with no enrollment: { s | s in STUDENT and not exists e (e in ENROLLS and e.roll_no = s.roll_no) }. Note how (c) needs no special anti-join operator - negation is native to logic, which is why calculus expresses division naturally.",
              "Safety and equivalence close the theory. An unsafe formula like { t | not (t in STUDENT) } describes the infinite complement - not a finite relation - so we restrict attention to safe expressions whose answers are guaranteed finite subsets of the domain. Codd's theorem then states: safe TRC and relational algebra are equal in expressive power; every algebra expression has a calculus equivalent and vice versa. TRC is the direct ancestor of SQL's quantified subqueries (EXISTS, NOT EXISTS), which is why Section 3.4's patterns mirror these formulas shape for shape.",
            ],
            bullets: [
              "TRC: declarative formula language over tuple variables; answer = tuples satisfying the predicate.",
              "Query form { t | P(t) }; t.A is attribute access.",
              "Atomic formulas: membership (t in R) and comparisons (t.a op c).",
              "Connectives: AND, OR, NOT, implies.",
              "Quantifiers: EXISTS t in R (phi), FORALL t in R (phi).",
              "Projection by displaying only chosen attributes of the bound variable.",
              "Negation is native: 'no enrollment' is a direct NOT EXISTS formula.",
              "Safety restriction keeps answers finite; safe TRC = relational algebra in power (Codd's theorem).",
            ],
            keyTerms: [
              { term: "Tuple variable", definition: "A variable ranging over the tuples of a relation, e.g. s over STUDENT." },
              { term: "TRC query", definition: "An expression { t | P(t) } returning all tuples satisfying predicate P." },
              { term: "Quantifier", definition: "EXISTS (at least one tuple) or FORALL (every tuple) applied to a formula." },
              { term: "Safe expression", definition: "A calculus formula guaranteed to yield a finite result - required for equivalence with algebra." },
              { term: "Codd's theorem", definition: "Safe tuple relational calculus and relational algebra have equal expressive power." },
            ],
            table: {
              caption: "Relational algebra vs tuple relational calculus.",
              headers: ["Aspect", "Relational algebra", "Tuple relational calculus"],
              rows: [
                ["Style", "Procedural - how to compute", "Declarative - what is true"],
                ["Building block", "Operators on relations", "Formulas over tuple variables"],
                ["Quantifiers", "None (implicit in operators)", "EXISTS, FORALL explicit"],
                ["Negation", "Via difference operator", "Direct NOT in the formula"],
                ["Expressive power", "Equal (on safe queries)", "Equal (on safe queries)"],
              ],
            },
            callout: {
              type: "tip",
              title: "Read it like English",
              body: "Translate every TRC formula aloud: 's is a STUDENT tuple and s.city = Bhopal'. If you can say it as a sentence, you can write it as a formula. The reverse direction - formula to English - is exactly how examiners mark partial answers.",
            },
            diagram: {
              kind: "compare",
              title: "Algebra vs calculus: HOW vs WHAT",
              caption: "Two views of the same answers, guaranteed by Codd's theorem.",
              left: {
                heading: "Relational algebra (HOW)",
                items: [
                  "Procedural operator sequence",
                  "Inside-out evaluation order",
                  "No quantifiers",
                  "Negation via set difference",
                  "Optimizer's low-level currency",
                ],
              },
              right: {
                heading: "Tuple calculus (WHAT)",
                items: [
                  "Declarative logical formula",
                  "No execution order stated",
                  "EXISTS and FORALL explicit",
                  "Negation as plain NOT",
                  "User-level query meaning",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain tuple relational calculus with its atomic formulas, connectives and quantifiers. Write TRC expressions for: Bhopal students, students enrolled in DBMS, and students with no enrollment. State Codd's theorem.",
                marks: 7,
                outline: [
                  "TRC definition and { t | P(t) } shape.",
                  "Atomic formulas and connectives.",
                  "EXISTS and FORALL quantifiers.",
                  "Query (a): simple selection formula.",
                  "Query (b): chained exists through ENROLLS and COURSE.",
                  "Query (c): negated exists for the anti-join.",
                  "Safety restriction and Codd's equivalence theorem.",
                ],
              },
              {
                q: "Write a TRC expression for 'faculty members in the CSE branch'.",
                marks: 2,
              },
              {
                q: "What is an unsafe query? Give one example.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.8",
            title: "Domain relational calculus and the algebra-calculus equivalence",
            body: [
              "Domain relational calculus (DRC) is the sibling of TRC with variables ranging over DOMAINS (column value pools) instead of tuples. A query is { <x1, x2, ..., xn> | P(x1, ..., xn) }: the answer is the set of value-tuples whose variables, when substituted, make P true. Membership atoms bind variables into relations: <name, city> in STUDENT asserts that name and city appear together in some student row; the underscore-free notation <x, y> means 'we accept any pair here'.",
              "Worked examples on the university schema. (a) Bhopal students' names: { <n> | exists r, c (<r, n, c> in STUDENT and c = 'Bhopal') } - the position of n in the STUDENT tuple fixes its meaning. (b) Students enrolled in course 5: { <n> | exists r, e (<r, n> in STUDENT and <r, 5> in ENROLLS) }. (c) Students with no enrollment: { <n> | exists r (<r, n> in STUDENT and not exists e (<r, e> in ENROLLS)) }. The syntax is terser than TRC but position-sensitive: one misplaced variable changes the answer silently, so exams reward writing the full tuple template <r, n, c> every time.",
              "QBE (Query By Example), the visual query system in Access and old IBM products, is DRC drawn as skeleton tables: the user fills example values and prefixes with underscore; the system translates to DRC. In pure theory terms, safe DRC and safe TRC are equally expressive, and Codd's theorem extends the equivalence to all three - relational algebra, TRC and DRC describe the same family of computable answers (the safe relational queries). SQL's SELECT list with its WHERE clause is a direct descendant of the DRC template shape.",
              "The equivalence proof sketch is worth half a page in an answer key: algebra to calculus by structural induction (each operator has a formula translation: selection becomes a conjunct, union a disjunction, difference a negation, join an existential conjunction); calculus to algebra by converting quantifiers into projections and differences (EXISTS becomes a join/projection, FORALL becomes a difference over a product, NOT EXISTS the anti-join). Conclude every theory answer with the sentence: 'On safe queries the three languages are equivalent in expressive power; they differ only in style - procedural, tuple-declarative, domain-declarative.'",
            ],
            bullets: [
              "DRC variables range over domains; answers are value-tuples { <x1,...,xn> | P }.",
              "Membership atoms: <r, n, c> in STUDENT binds variables by position.",
              "Terse but position-sensitive - always write the full tuple template.",
              "Quantifiers exist and forall work as in TRC; negation is native.",
              "QBE is the visual commercial form of DRC.",
              "Safe TRC = safe DRC = relational algebra in expressive power.",
              "Translation sketch: selection to conjunction, union to disjunction, difference to negation, join to existential conjunction.",
              "SQL's WHERE-clause shape descends from DRC templates.",
            ],
            keyTerms: [
              { term: "Domain relational calculus", definition: "Declarative query language whose variables range over attribute domains, producing value-tuples." },
              { term: "Domain variable", definition: "A variable standing for a single column value rather than a whole tuple." },
              { term: "Membership atom", definition: "Formula <x1,...,xn> in R binding variables to positions of relation R's tuples." },
              { term: "QBE", definition: "Query By Example - the visual front-end whose skeletons are DRC queries." },
              { term: "Codd's theorem", definition: "Safe calculus (tuple and domain) and relational algebra are equivalent in expressive power." },
            ],
            table: {
              caption: "The three query languages side by side.",
              headers: ["Language", "Variable ranges over", "Style", "Example fragment"],
              rows: [
                ["Relational algebra", "relations (operators)", "Procedural", "pi_name(sigma_city='Bhopal'(STUDENT))"],
                ["Tuple calculus", "whole tuples", "Declarative", "{ s | s in STUDENT and s.city='Bhopal' }"],
                ["Domain calculus", "single column values", "Declarative", "{ <n> | <r,n,c> in STUDENT and c='Bhopal' }"],
              ],
            },
            callout: {
              type: "warning",
              title: "Position is everything in DRC",
              body: "In DRC the variable's slot decides its meaning: <n, r> in STUDENT claims n is a name only if STUDENT's first column is name. Misplacing one variable inside the template flips the whole answer. Write the template with all columns, then replace the ones you bind.",
            },
            diagram: {
              kind: "matrix",
              title: "The calculus family map",
              caption: "Two calculus dialects distinguished by what the variables range over.",
              axes: { x: "Quantifiers: existential to universal", y: "Variables: tuples to domains" },
              quadrants: [
                { label: "TRC, existential", note: "exists s in R (...) - joins as nested exists" },
                { label: "TRC, universal", note: "forall t (...) - rare, expressed via double negation" },
                { label: "DRC, existential", note: "<r,n,c> in STUDENT binding atoms" },
                { label: "DRC, universal", note: "every-value constraints; QBE hides it visually" },
              ],
            },
            examQuestions: [
              {
                q: "Explain domain relational calculus with examples, compare it with tuple relational calculus, and state the equivalence of algebra, TRC and DRC on safe queries.",
                marks: 7,
                outline: [
                  "DRC definition: domain variables, { <x1..xn> | P }.",
                  "Membership atoms with positional binding.",
                  "Worked query (a): Bhopal names.",
                  "Worked query (b): enrollment join in DRC.",
                  "Worked query (c): negation for no-enrollment.",
                  "TRC vs DRC comparison: tuple vs domain variables.",
                  "Codd's theorem and the safety restriction; QBE mention.",
                ],
              },
              {
                q: "Write a DRC expression for 'cities of students named Meena'.",
                marks: 3,
              },
              {
                q: "What variable does DRC range over that TRC does not?",
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
      title: "Normalization and Decomposition",
      summary:
        "The theory of good design: functional dependencies and Armstrong's axioms, attribute closures and candidate keys, the normal form ladder from 1NF to BCNF and 4NF with multivalued dependencies, and lossless-join, dependency-preserving decomposition.",
      chapter: {
        number: "04",
        title: "From Anomalies to Normal Forms",
        intro:
          "Unit IV answers the design question 'which columns belong together?'. Functional dependencies formalize the answer, Armstrong's axioms derive them, closures find candidate keys, and the normal forms - 1NF, 2NF, 3NF, BCNF, 4NF - remove one pathology at a time. Decomposition theory then guarantees that splitting tables loses neither data nor dependencies.",
        inOneBreath:
          "Anomalies: update, insert, delete - all caused by mixing facts in one table. An FD X -> Y says X's value determines Y's; Armstrong's axioms (reflexivity, augmentation, transitivity) plus union, decomposition and pseudotransitivity derive closures. X+ computes candidate keys: X -> all attributes. 1NF atomic values; 2NF no partial dependency (non-key depending on part of a composite key); 3NF no transitive dependency (X -> A with X not superkey, A non-prime, but A allowed in 3NF if X->A is key-dependent); BCNF every determinant a superkey - strictest, may lose dependencies. MVD -> 4NF. Decomposition must be lossless-join (common attributes include a key of one side) and ideally dependency-preserving.",
        sections: [
          {
            number: "4.1",
            title: "Anomalies and functional dependencies",
            body: [
              "Normalization exists because unnormalized tables suffer three anomalies. Update anomaly: the instructor's phone stored on every course row must be changed in ten places, and missing one makes the table self-contradictory. Insert anomaly: a new instructor with no course cannot be recorded because the course_id is part of the primary key and cannot be NULL. Delete anomaly: deleting the last course row silently destroys the instructor's existence. All three share one cause - multiple independent facts packed into one relation - and normalization removes the cause, not the symptoms.",
              "A functional dependency X -> Y between attribute sets X (determinant) and Y (dependent) holds in relation R when any two tuples agreeing on X must agree on Y: 'roll_no -> name' because a student has exactly one name. Formally, for all tuples t1, t2 of R: if t1[X] = t2[X] then t1[Y] = t2[Y]. FDs are semantic facts about the enterprise, discovered from requirements (roll_no identifies), not from one lucky instance - two rows agreeing proves nothing, but one counterexample disproves.",
              "Trivial and non-trivial FDs: X -> Y is trivial when Y is a subset of X (roll_no, name -> name always holds and adds no information). Full vs partial dependency becomes central in 2NF: in (roll_no, course_id) -> grade, grade depends on the whole key; but course_name depends only on course_id, a partial dependency on part of a composite key - the exact pathology 2NF removes. The decomposition process throughout this unit is: list the FDs, find the keys, spot partial and transitive dependencies, split accordingly.",
              "The canonical example table to memorize: ENROLL_ALL(roll_no, sname, course_id, cname, grade, instructor, inst_phone) with FDs roll_no -> sname, course_id -> cname, course_id -> instructor, instructor -> inst_phone, (roll_no, course_id) -> grade. It exhibits every anomaly and every FD flavour: a composite key with a partial dependency (course_id -> cname), transitive chains (course_id -> instructor -> inst_phone), and a pure key dependency ((roll_no, course_id) -> grade). This one table drives Sections 4.3 through 4.8, so know its FD list cold.",
            ],
            bullets: [
              "Update anomaly: one fact stored many times must change in many rows.",
              "Insert anomaly: cannot add a fact without an unrelated key value.",
              "Delete anomaly: deleting one fact erases another that happened to share the row.",
              "FD X -> Y: equal X-values force equal Y-values; determinant X, dependent Y.",
              "FDs come from requirements, not from inspecting data instances.",
              "Trivial FD: Y subset of X; non-trivial FDs are the ones worth listing.",
              "Full dependency on the whole key vs partial dependency on part of a composite key.",
              "Running example: ENROLL_ALL with roll_no -> sname, course_id -> cname/instructor, instructor -> inst_phone, key -> grade.",
            ],
            keyTerms: [
              { term: "Functional dependency", definition: "X -> Y holds when any two tuples agreeing on X agree on Y." },
              { term: "Determinant", definition: "The left-hand attribute set X of an FD." },
              { term: "Trivial FD", definition: "X -> Y with Y a subset of X; true in every relation." },
              { term: "Partial dependency", definition: "A non-key attribute depending on part of a composite primary key." },
              { term: "Transitive dependency", definition: "Non-key A depending on key K via another non-key X: K -> X -> A." },
            ],
            table: {
              caption: "Anomalies in ENROLL_ALL and their cause.",
              headers: ["Anomaly", "Scenario", "Cause in the table"],
              rows: [
                ["Update", "Instructor changes phone; ten rows to fix", "course_id -> inst_phone via transitives"],
                ["Insert", "New instructor, no course yet - row impossible", "instructor facts ride on course rows"],
                ["Delete", "Last enrollment of a course dropped", "course and instructor facts vanish together"],
                ["Redundancy", "Student name repeated per enrollment", "roll_no -> sname stored per row"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Every normalization answer should open with the three anomalies applied to the given table - one concrete row for each - before any FD notation appears. Examiners award the anomaly marks for examples, not definitions.",
            },
            diagram: {
              kind: "flow",
              title: "How one mixed table produces three anomalies",
              caption: "The same root cause, three symptoms.",
              steps: [
                { label: "Multiple facts per row", note: "student + course + instructor" },
                { label: "Update anomaly", note: "change phone in n rows" },
                { label: "Insert anomaly", note: "no key value to hang a new fact on" },
                { label: "Delete anomaly", note: "one deletion erases two facts" },
                { label: "Fix: split by FDs", note: "one fact set per table" },
              ],
            },
            examQuestions: [
              {
                q: "Define functional dependency. Explain update, insert and delete anomalies with a suitable example table, and identify the FDs that cause them.",
                marks: 7,
                outline: [
                  "FD definition with the determinant/dependent vocabulary.",
                  "Why FDs come from semantics, not sample rows.",
                  "Example table ENROLL_ALL with its FD list.",
                  "Update anomaly: repeated instructor phone.",
                  "Insert anomaly: instructor without course.",
                  "Delete anomaly: losing instructor with the last course.",
                  "Trivial vs non-trivial; full vs partial dependency terms.",
                ],
              },
              {
                q: "State whether (roll_no, name) -> name is trivial. Why?",
                marks: 2,
              },
              {
                q: "Give an example of a transitive dependency in a student-course table.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Armstrong's axioms, attribute closure and finding candidate keys",
            body: [
              "Armstrong's axioms are the sound and complete inference rules for FDs: everything implied by a set F can be derived, and nothing false is derived. Reflexivity: if Y is a subset of X then X -> Y. Augmentation: if X -> Y then XZ -> YZ. Transitivity: if X -> Y and Y -> Z then X -> Z. Three derived rules speed up derivations: Union (X -> Y and X -> Z give X -> YZ), Decomposition (X -> YZ gives X -> Y and X -> Z), and Pseudotransitivity (X -> Y and WY -> Z give XW -> Z). Soundness = only true FDs derived; completeness = every implied FD is derivable.",
              "The attribute closure X+ is the set of attributes functionally determined by X under F. Algorithm: start X+ = X; repeat scanning F; for each FD A -> B with A a subset of the current X+, add B; stop when a full pass adds nothing. Example: R(roll_no, sname, course_id, cname, grade), F = { roll_no -> sname, course_id -> cname, (roll_no, course_id) -> grade }. Compute (roll_no)+: start {roll_no}; roll_no -> sname adds sname; nothing else applies, so (roll_no)+ = {roll_no, sname} - not a key. (roll_no, course_id)+ adds sname, cname, grade = all attributes: the candidate key.",
              "Finding all candidate keys: try single attributes; their closures failing, try pairs, then triples, pruning supersets of already-found keys. In the running example no single attribute's closure covers everything (roll_no misses course facts, course_id misses student facts), so (roll_no, course_id) is the unique candidate key, making sname, cname, grade non-prime attributes and roll_no, course_id prime. Prime attributes = those appearing in some candidate key; the prime/non-prime distinction is exactly what 2NF and 3NF tests hinge on.",
              "A worked derivation earns full marks in exams. Given F = { roll_no -> sname, course_id -> cname, (roll_no, course_id) -> grade }, derive course_id -> instructor is not available in this F, so instead derive (roll_no) -> sname by reflexivity on the closure result, and show that (course_id)+ = {course_id, cname}, proving course_id is not a key. Conclude: candidate key = attribute set whose closure is all of R and whose proper subsets' closures are not. State the two-part test explicitly - completeness (covers R) and minimality (no subset does) - and the answer is airtight.",
            ],
            bullets: [
              "Armstrong's axioms: reflexivity, augmentation, transitivity - sound and complete.",
              "Derived rules: union, decomposition, pseudotransitivity.",
              "Closure algorithm: seed with X, absorb RHS of every applicable FD, iterate to fixpoint.",
              "X is a (candidate) key iff X+ = R and no proper subset of X has closure R.",
              "Prime attributes appear in some candidate key; non-prime ones do not.",
              "Single-attribute closures first, then pairs; prune supersets of found keys.",
              "Worked closures: (roll_no)+ = {roll_no, sname}; (course_id)+ = {course_id, cname}; pair covers all.",
            ],
            keyTerms: [
              { term: "Armstrong's axioms", definition: "Reflexivity, augmentation and transitivity - the sound and complete FD inference rules." },
              { term: "Attribute closure X+", definition: "The set of all attributes determined by X under the given FD set F." },
              { term: "Prime attribute", definition: "An attribute belonging to at least one candidate key." },
              { term: "Candidate key test", definition: "X+ = all of R, and no proper subset of X has closure equal to R." },
              { term: "Pseudotransitivity", definition: "From X -> Y and WY -> Z infer XW -> Z." },
            ],
            table: {
              caption: "Armstrong's axioms and derived rules.",
              headers: ["Rule", "Given", "Conclude"],
              rows: [
                ["Reflexivity", "Y subset of X", "X -> Y"],
                ["Augmentation", "X -> Y", "XZ -> YZ"],
                ["Transitivity", "X -> Y, Y -> Z", "X -> Z"],
                ["Union (derived)", "X -> Y, X -> Z", "X -> YZ"],
                ["Decomposition (derived)", "X -> YZ", "X -> Y and X -> Z"],
                ["Pseudotransitivity (derived)", "X -> Y, WY -> Z", "XW -> Z"],
              ],
            },
            callout: {
              type: "tip",
              title: "Show every closure pass",
              body: "In closure questions, write each iteration as a row: start set, FD applied, new set. Examiners award process marks per pass; a bare final answer gets half. Never skip the check that no proper subset also covers R - minimality is the second half of the key test.",
            },
            diagram: {
              kind: "pipeline",
              title: "Computing (roll_no, course_id)+ step by step",
              caption: "Each stage absorbs the RHS of one applicable FD.",
              stages: [
                { label: "Seed: {roll_no, course_id}" },
                { label: "Apply roll_no -> sname", note: "+ sname" },
                { label: "Apply course_id -> cname", note: "+ cname" },
                { label: "Apply (roll_no, course_id) -> grade", note: "+ grade" },
                { label: "Full pass adds nothing: fixpoint", note: "closure = all attributes - candidate key" },
              ],
            },
            examQuestions: [
              {
                q: "State Armstrong's axioms and the derived rules. Compute the closure of (roll_no, course_id) for the given FD set, determine the candidate key, and distinguish prime from non-prime attributes.",
                marks: 7,
                outline: [
                  "Three axioms stated with one-line meanings.",
                  "Derived rules: union, decomposition, pseudotransitivity.",
                  "Closure algorithm written as repeat-until steps.",
                  "Pass-by-pass computation of (roll_no, course_id)+.",
                  "Closures of single attributes showing they fail.",
                  "Candidate key test: completeness + minimality.",
                  "Prime vs non-prime attribute classification.",
                ],
              },
              {
                q: "Prove or disprove: if X -> Y and X -> Z then X -> YZ.",
                marks: 2,
              },
              {
                q: "Compute X+ for R(A,B,C), F = {A -> B, B -> C}, X = A.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "First and second normal form",
            body: [
              "First normal form (1NF) requires every attribute to hold a single atomic value: no repeating groups, no lists, no nested tables in a cell. A student table with a phone column containing '111, 222' violates 1NF; the fix splits each value into its own row in a separate table STUDENT_PHONE(roll_no, phone). 1NF is the entry ticket to the relational model - Section 2.4's atomicity rule formalized - and modern SQL columns are 1NF by construction, but design mistakes (comma-separated tags, JSON blobs meant for querying) still recreate the disease.",
              "The cost of violating 1NF is concrete: WHERE phone = '111' cannot use an index when values are comma-joined; updating one of three phones inside a cell means string surgery; and the multivalued cell silently encodes an M:N fact between student and phone. The 1NF fix is always the same - move the repeating group to its own table keyed by the owner's key plus the repeated value, which is precisely the multivalued-attribute conversion from Section 2.1.",
              "Second normal form (2NF) applies to tables with composite primary keys: every non-prime attribute must be fully functionally dependent on the WHOLE key, not part of it. In ENROLL_ALL with key (roll_no, course_id): grade depends on both parts - fine; sname depends only on roll_no and cname only on course_id - both partial dependencies, so the table is 1NF but not 2NF. The decomposition removes them: STUDENT(roll_no, sname) and COURSE(course_id, cname) take the partial facts out, leaving ENROLL(roll_no, course_id, grade) clean.",
              "Worked test to run in exams: (1) list the candidate key(s); (2) for each non-prime attribute ask which part of the key determines it; (3) any single-part determinant means a 2NF violation to split off. A table whose key is a single attribute is automatically 2NF - there is no 'part' to depend on, a fact worth stating because it saves work and earns precision marks. The resulting three tables no longer repeat student names per enrollment or course names per student, eliminating two of the anomalies from Section 4.1 at once.",
            ],
            bullets: [
              "1NF: atomic values only - no lists or repeating groups in a cell.",
              "1NF fix: repeating group becomes its own table (owner key + repeated value).",
              "Non-atomic cells defeat indexing, update and querying.",
              "2NF: no non-prime attribute depends on a proper part of a composite candidate key.",
              "Partial dependency test: for each non-prime attribute, find the smallest key part determining it.",
              "Single-attribute key => automatically 2NF.",
              "ENROLL_ALL decomposition: STUDENT(roll_no, sname), COURSE(course_id, cname), ENROLL(roll_no, course_id, grade).",
              "2NF removes redundancy of facts attached to key parts.",
            ],
            keyTerms: [
              { term: "First normal form", definition: "Every attribute contains only atomic, single values - no repeating groups." },
              { term: "Second normal form", definition: "1NF plus: no non-prime attribute partially depends on a composite candidate key." },
              { term: "Repeating group", definition: "Multiple values of one fact packed into a single cell - the 1NF violation." },
              { term: "Full functional dependency", definition: "Y depends on all of X and on no proper subset of X." },
              { term: "Non-prime attribute", definition: "An attribute not contained in any candidate key." },
            ],
            table: {
              caption: "Testing ENROLL_ALL for 2NF violations.",
              headers: ["Non-prime attribute", "Determined by", "Verdict"],
              rows: [
                ["grade", "whole key (roll_no, course_id)", "full dependency - OK"],
                ["sname", "roll_no only", "partial dependency - violates 2NF"],
                ["cname", "course_id only", "partial dependency - violates 2NF"],
                ["instructor", "course_id only", "partial dependency - violates 2NF"],
              ],
            },
            callout: {
              type: "warning",
              title: "2NF needs a composite key",
              body: "Students routinely 'find partial dependencies' in single-key tables - there are none. State the precondition explicitly: 2NF is only meaningful when the candidate key is composite. With one key attribute, declare the table automatically 2NF and move to the 3NF test.",
            },
            diagram: {
              kind: "fork",
              title: "The 2NF decision for each non-prime attribute",
              caption: "Ask: which part of the composite key determines it?",
              start: "Non-prime attribute A in a composite-key table",
              branches: [
                { label: "Depends on whole key", outcome: "Full dependency - stays in the table", good: true },
                { label: "Depends on part of key", outcome: "Partial dependency - split A out with that part", good: true },
                { label: "Key is single attribute", outcome: "2NF automatic - no partial possible", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Define 1NF and 2NF. Given ENROLL_ALL(roll_no, sname, course_id, cname, grade) with key (roll_no, course_id), test it for 2NF and decompose it into 2NF tables.",
                marks: 7,
                outline: [
                  "1NF definition with one violating and one fixed example.",
                  "Why non-atomic cells defeat queries.",
                  "2NF definition restricted to composite keys.",
                  "FD list and identification of partial dependencies.",
                  "Full dependency of grade noted as OK.",
                  "Decomposition into STUDENT, COURSE, ENROLL.",
                  "Note: single-attribute keys are automatically 2NF.",
                ],
              },
              {
                q: "Is a table with a single-attribute primary key ever in violation of 2NF?",
                marks: 2,
              },
              {
                q: "Convert STUDENT(roll_no, name, phones) where phones stores '111, 222' into 1NF.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Third normal form and transitive dependency",
            body: [
              "A relation is in third normal form (3NF) if it is in 2NF and no non-prime attribute is transitively dependent on a candidate key - formally, for every non-trivial FD X -> A, either X is a superkey, or A is a prime attribute. The motivating pathology: in STUDENT_ALL(roll_no, sname, dept_id, dept_name, dept_head), the FDs are roll_no -> dept_id, dept_id -> dept_name, dept_id -> dept_head. dept_name reaches the key only through dept_id - a transitive chain roll_no -> dept_id -> dept_name - so updating a department's name touches every student row of that department: the update anomaly reborn inside a 2NF table.",
              "The 3NF decomposition splits the chain: STUDENT(roll_no, sname, dept_id) keeps the direct facts; DEPARTMENT(dept_id, dept_name, dept_head) owns the department facts, with dept_id as its primary key and STUDENT.dept_id as a foreign key. Now a department name changes in exactly one row, a new department can be inserted before it has students (the insert anomaly dies), and deleting the last student of a department leaves the department record intact (the delete anomaly dies). One split fixes all three anomalies - the recurring payoff of normalization.",
              "The subtle clause 'or A is a prime attribute' is what separates 3NF from BCNF: in 3NF a non-superkey determinant may still determine a prime attribute without violation. The classical textbook example: R(student, subject, teacher) with FDs (student, subject) -> teacher and teacher -> subject where each subject has many teachers and each teacher teaches one subject. teacher -> subject has a non-superkey determinant (teacher) but the dependent subject is prime, so R is 3NF yet not BCNF - a table examiners reuse verbatim.",
              "Procedure for the exam: list FDs; test 2NF first; then for each non-trivial FD X -> A with A non-prime, check whether X is a superkey (compute X+). If not, a transitive dependency exists - split X and its dependents into a new table with X as key, keeping X in the original as a foreign key. Repeat until every determinant of a non-prime attribute is a superkey. State the formal 3NF definition once, verbatim, then apply it - the definition sentence carries the theory mark and the carried-out test carries the application marks.",
            ],
            bullets: [
              "3NF = 2NF + no transitive dependency of a non-prime attribute on a candidate key.",
              "Formal test: for every non-trivial X -> A, X is a superkey or A is prime.",
              "Transitive chain: key -> non-key X -> non-key A.",
              "Decomposition: move X and its dependents to a new table; keep X as FK.",
              "3NF fixes update, insert and delete anomalies at the department level.",
              "Prime-dependent clause: X -> A with A prime does not violate 3NF (but may violate BCNF).",
              "Worked chain: roll_no -> dept_id -> dept_name/head, split into STUDENT + DEPARTMENT.",
              "3NF is the usual commercial design target; BCNF is the stricter ideal.",
            ],
            keyTerms: [
              { term: "Third normal form", definition: "2NF with no transitive dependency of non-prime attributes on candidate keys." },
              { term: "Transitive dependency", definition: "A depends on the key only through another non-prime attribute: K -> X -> A." },
              { term: "Superkey test in 3NF", definition: "Each FD determinant must be a superkey unless the dependent is a prime attribute." },
              { term: "3NF decomposition", definition: "Splitting a transitive chain into two tables joined by a foreign key." },
            ],
            table: {
              caption: "3NF test on STUDENT_ALL(roll_no, sname, dept_id, dept_name, dept_head).",
              headers: ["FD", "Determinant a superkey?", "Dependent prime?", "3NF verdict"],
              rows: [
                ["roll_no -> sname, dept_id", "yes (key)", "-", "OK"],
                ["dept_id -> dept_name", "no", "no (non-prime)", "Violates 3NF - transitive"],
                ["dept_id -> dept_head", "no", "no (non-prime)", "Violates 3NF - transitive"],
                ["Fix", "split DEPARTMENT(dept_id, dept_name, dept_head)", "STUDENT keeps dept_id as FK", "lossless + dependency-preserving"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Always write the formal 3NF definition before testing: 'for every non-trivial FD X -> A, X is a superkey or A is prime.' Then show the X+ computation proving the determinant is not a superkey. Definition + computation is the full-mark structure; skipping the formal clause loses the theory mark.",
            },
            diagram: {
              kind: "layers",
              title: "The normalization ladder",
              caption: "Each rung removes one class of dependency pathology - climb in order.",
              layers: [
                { label: "BCNF - every determinant a superkey", note: "strictest practical target" },
                { label: "3NF - no transitive dependencies", note: "removes key -> X -> A chains" },
                { label: "2NF - no partial dependencies", note: "removes key-part dependencies" },
                { label: "1NF - atomic values", note: "entry requirement" },
              ],
            },
            examQuestions: [
              {
                q: "Define 3NF with the formal condition. Given STUDENT_ALL(roll_no, sname, dept_id, dept_name, dept_head) with the obvious FDs, show it violates 3NF and decompose it losslessly.",
                marks: 7,
                outline: [
                  "Formal 3NF condition quoted verbatim.",
                  "Transitive dependency identified via dept_id.",
                  "X+ computation showing dept_id is not a superkey.",
                  "Update/insert/delete anomalies on department facts.",
                  "Decomposition into STUDENT and DEPARTMENT.",
                  "Foreign key link and lossless-join justification.",
                  "Prime-attribute clause and its BCNF consequence.",
                ],
              },
              {
                q: "State the two conditions allowed by 3NF for a non-trivial FD X -> A.",
                marks: 2,
              },
              {
                q: "Why can a 2NF table still suffer update anomalies? Illustrate with one row change.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Boyce-Codd Normal Form (BCNF)",
            body: [
              "BCNF is 3NF tightened by deleting the prime-attribute escape clause: for every non-trivial FD X -> A, X must be a superkey. Every BCNF relation is in 3NF; the converse fails exactly when a non-superkey determinant determines a prime attribute. The standard counterexample: CLASS(student, subject, teacher) with (student, subject) -> teacher and teacher -> subject. teacher is not a superkey (it does not determine student), yet teacher -> subject is non-trivial - so 3NF holds (subject is prime) but BCNF fails.",
              "The failure has practical teeth. Suppose teacher Sharma teaches DBMS: the fact 'Sharma -> DBMS' repeats on every student row taking him - redundancy; deleting the last student of a teacher erases the teacher-subject fact - delete anomaly; a new teacher cannot be recorded without a student - insert anomaly. BCNF decomposition fixes it by splitting on the offending determinant: T_TEACHER(teacher, subject) with teacher as key, and CLASS(student, subject) with (student, subject) as key. Both tables are now in BCNF; the join teacher-side to student-side via subject reconstructs the original.",
              "BCNF decomposition algorithm: for relation R with violating FD X -> A, split R into R1(X, A) and R2(R - A) - project the FDs onto each fragment and recurse until every fragment satisfies BCNF. The cost: BCNF decomposition is always lossless-join but NOT always dependency-preserving. In the CLASS example, the FD (student, subject) -> teacher cannot be enforced inside any single fragment (student and subject are separated from teacher), so an application-level constraint or trigger must police it - the classic 3NF-vs-BCNF trade-off: 3NF keeps dependencies checkable, BCNF minimizes redundancy.",
              "Choosing between them is a design decision to articulate in exams. Aim for BCNF as the default ideal - minimal redundancy, anomaly-free; accept 3NF when dependency preservation matters more (high-volume constraint checking that must run inside the engine) or when the BCNF decomposition would fragment frequently-joined attributes. State both properties of decomposition - lossless join guaranteed, dependency preservation not guaranteed - with the CLASS example as the evidence, and the answer covers definition, procedure, example and trade-off: the complete 7-mark shape.",
            ],
            bullets: [
              "BCNF: for every non-trivial FD X -> A, X is a superkey - no exceptions.",
              "BCNF implies 3NF; 3NF does not imply BCNF.",
              "Gap case: non-superkey determinant with a PRIME dependent.",
              "Classic counterexample: CLASS(student, subject, teacher), teacher -> subject.",
              "Decomposition rule: split into R1(X, A) and R2(R - A), project FDs, recurse.",
              "BCNF decomposition is always lossless-join, not always dependency-preserving.",
              "3NF keeps all dependencies preservable in many cases where BCNF cannot.",
              "Design stance: BCNF default; fall back to 3NF when constraint enforcement demands it.",
            ],
            keyTerms: [
              { term: "BCNF", definition: "Every non-trivial FD has a superkey as its determinant - the strict common normal form." },
              { term: "Lossless-join decomposition", definition: "Splitting such that the natural join of fragments reproduces exactly the original rows." },
              { term: "Dependency preservation", definition: "Every original FD is enforceable within one decomposed fragment." },
              { term: "BCNF split", definition: "For violating X -> A: fragments R1(X, A) and R2(R - A)." },
              { term: "Prime attribute", definition: "Member of some candidate key - the attribute class that distinguishes 3NF from BCNF behaviour." },
            ],
            table: {
              caption: "3NF vs BCNF.",
              headers: ["Aspect", "3NF", "BCNF"],
              rows: [
                ["Condition", "X superkey OR A prime", "X superkey, always"],
                ["Strictness", "Weaker (allows prime dependents)", "Strongest practical"],
                ["Redundancy", "May remain via prime-dependent FDs", "Minimal"],
                ["Dependency preservation", "Usually achievable", "Not guaranteed"],
                ["Lossless join", "Yes (when decomposed properly)", "Yes, always"],
                ["Commercial usage", "Common target", "Design ideal"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The teacher-subject example answers two questions at once: 'is 3NF always BCNF?' (no - show teacher -> subject) and 'can BCNF decomposition lose dependencies?' (yes - (student, subject) -> teacher becomes unenforceable). Reuse this one table for both proofs and you cover two likely questions with one memorized example.",
            },
            diagram: {
              kind: "compare",
              title: "3NF vs BCNF on the same data",
              caption: "The strictest ladder rung, and what climbing it can cost.",
              left: {
                heading: "Stay at 3NF",
                items: [
                  "teacher -> subject allowed (subject prime)",
                  "Redundancy of teacher-subject pairs",
                  "All FDs enforced inside fragments",
                  "Familiar decomposition, fewer tables",
                  "Right when constraint checking dominates",
                ],
              },
              right: {
                heading: "Decompose to BCNF",
                items: [
                  "teacher -> subject forces a split",
                  "T_TEACHER(teacher, subject) + CLASS(student, subject)",
                  "Redundancy and anomalies removed",
                  "(student, subject) -> teacher may become unenforceable",
                  "Right when minimal redundancy dominates",
                ],
              },
            },
            examQuestions: [
              {
                q: "Define BCNF. Show with the CLASS(student, subject, teacher) example that a relation can be in 3NF but not BCNF, decompose it into BCNF, and state what property may be lost.",
                marks: 7,
                outline: [
                  "BCNF definition; BCNF implies 3NF.",
                  "FDs of CLASS listed.",
                  "Why 3NF holds: subject is prime.",
                  "Why BCNF fails: teacher is not a superkey.",
                  "Anomalies on the unsplit table.",
                  "Decomposition into the two fragments with keys.",
                  "Dependency (student, subject) -> teacher lost - the trade-off named.",
                ],
              },
              {
                q: "Does every BCNF relation satisfy 3NF? Justify in one line.",
                marks: 2,
              },
              {
                q: "State the two properties a good decomposition must have and which one BCNF may sacrifice.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Multivalued dependencies and fourth normal form",
            body: [
              "A multivalued dependency X ->> Y holds when the set of Y-values paired with a given X-value is independent of all other attributes of the relation: fixing X, the valid Y sets do not change when other attributes change. The textbook case: TEACHER_COURSE(teacher, subject, standard) where each teacher teaches several subjects and each subject spans several standards, independently. One row says 'Meena teaches DBMS to standard 9', but Meena also teaches DBMS to 10 and OS to 9 - so the fact must repeat for every (subject, standard) combination: |subjects| x |standards| rows per teacher.",
              "MVDs arise from exactly this pattern: two independent 1:N facts sharing one entity. The formal properties mirror FDs: X ->> Y is trivial if Y is a subset of X or X union Y is everything; complementation gives X ->> Y implies X ->> (R - X - Y); FD implies MVD (X -> Y means X ->> Y), never the reverse. The SD (subject, standard) combinations that must exist are forced by the MVD even when no teaching happens - that is the insert anomaly in MVD form: adding one subject of Meena's forces a row per existing standard.",
              "Fourth normal form (4NF) requires: for every non-trivial MVD X ->> Y, X is a superkey. TEACHER_COURSE violates it (teacher is not a superkey, teacher ->> subject is non-trivial). The decomposition is mechanical - one table per independent fact: TEACHER_SUBJECT(teacher, subject) and TEACHER_STANDARD(teacher, standard). Now Meena gains a subject by one row insert, standards live separately, and the join on teacher reconstructs every legitimate (subject, standard) pairing without forcing phantom combinations.",
              "Exam procedure: (1) spot the two independent multi-valued facts sharing one entity; (2) state the MVDs explicitly (teacher ->> subject, teacher ->> standard); (3) show the forced-combination count (m x n rows) as the redundancy evidence; (4) split into one table per fact; (5) verify each fragment's determinants are superkeys. Close with the position of 4NF on the ladder - it extends BCNF to MVDs, and 5NF (project-join) extends it further to join dependencies, usually mentioned in one closing sentence as beyond the syllabus's core.",
            ],
            bullets: [
              "MVD X ->> Y: Y-values for a given X are independent of the rest of the tuple.",
              "Arises from two independent 1:N facts about one entity.",
              "Trivial MVD: Y subset of X, or X union Y covers R.",
              "Complementation: X ->> Y implies X ->> R - X - Y.",
              "FD implies MVD; MVD does not imply FD.",
              "4NF: every non-trivial MVD X ->> Y has X as a superkey.",
              "Decomposition: one table per independent fact, joined on the shared entity key.",
              "Evidence to show: m x n forced combinations = the redundancy count.",
            ],
            keyTerms: [
              { term: "Multivalued dependency", definition: "X ->> Y: for each X-value, the set of paired Y-values is fixed regardless of other attributes." },
              { term: "Fourth normal form", definition: "BCNF plus: no non-trivial MVD whose determinant is not a superkey." },
              { term: "Complementation rule", definition: "X ->> Y implies X ->> (R - X - Y): the two fact sets are independent." },
              { term: "Trivial MVD", definition: "Y a subset of X, or X and Y together cover all attributes." },
              { term: "Join dependency / 5NF", definition: "The generalization MVDs are a special case of; 5NF is its normal form - mentioned beyond BCNF/4NF." },
            ],
            table: {
              caption: "Why TEACHER_COURSE(teacher, subject, standard) explodes.",
              headers: ["Teacher", "Subjects taught", "Standards", "Rows forced"],
              rows: [
                ["Meena", "DBMS, OS", "9, 10", "2 x 2 = 4 rows"],
                ["Added subject: AI", "", "", "4 + 2 = 6 rows (2 new)"],
                ["Added standard: 11", "", "", "6 + 3 = 9 rows (3 new)"],
                ["4NF split", "TEACHER_SUBJECT", "TEACHER_STANDARD", "2 + 2 rows only"],
              ],
            },
            callout: {
              type: "tip",
              title: "Count the forced rows",
              body: "The fastest way to justify a 4NF answer is arithmetic: '2 subjects x 2 standards = 4 rows for one teacher; adding one subject costs a whole row per existing standard.' The multiplication table is the argument - examiners rarely see it and reward it visibly.",
            },
            diagram: {
              kind: "flow",
              title: "From MVD to 4NF in five moves",
              caption: "The standard exam procedure for fourth normal form.",
              steps: [
                { label: "Spot two independent 1:N facts", note: "subjects and standards per teacher" },
                { label: "State the MVDs", note: "teacher ->> subject, teacher ->> standard" },
                { label: "Show forced combinations", note: "m x n rows per teacher" },
                { label: "Split per fact", note: "TEACHER_SUBJECT, TEACHER_STANDARD" },
                { label: "Verify determinants are superkeys", note: "4NF achieved" },
              ],
            },
            examQuestions: [
              {
                q: "Define multivalued dependency and 4NF. Given TEACHER_COURSE(teacher, subject, standard), explain why it is not in 4NF and decompose it, showing the redundancy you remove.",
                marks: 7,
                outline: [
                  "MVD definition with independence wording.",
                  "Trivial MVD and complementation properties.",
                  "FD vs MVD implication direction.",
                  "The teacher-subject-standard scenario stated.",
                  "Forced-combination count as redundancy evidence.",
                  "4NF definition applied: teacher not a superkey.",
                  "Two-fragment decomposition and verification.",
                ],
              },
              {
                q: "Does every FD imply an MVD? Does every MVD imply an FD?",
                marks: 2,
              },
              {
                q: "State the condition of 4NF in one sentence.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.7",
            title: "Decomposition properties: lossless join and dependency preservation",
            body: [
              "A decomposition of R into R1, R2, ..., Rn must not lose information. It is lossless-join when the natural join of the fragments reproduces exactly the original tuples - no spurious rows, no lost rows. Spurious tuples are the practical disaster: joining fragments on a non-key column fabricates combinations of facts that never existed, silently corrupting every query built above. Test for two fragments R1 and R2: the decomposition is lossless iff R1 intersect R2 -> R1 or R1 intersect R2 -> R2 - the shared attributes must contain a key of at least one fragment.",
              "Worked test on the 3NF split from Section 4.4. R1 = STUDENT(roll_no, sname, dept_id), R2 = DEPARTMENT(dept_id, dept_name, dept_head). Shared attribute: dept_id. Is dept_id -> R1? dept_id is R2's key and R1 contains only roll_no, sname, dept_id, which dept_id does not fully determine. Is dept_id -> R2? Yes - it is R2's entire key. The second condition holds, so the decomposition is lossless. Contrast the bad split: R1(roll_no, sname), R2(sname, dept_id) - shared sname is a key of neither fragment (two students may share a name), so the join produces spurious pairs.",
              "Dependency preservation asks whether every original FD can be checked inside a single fragment after decomposition. Formally, let F1 = FDs of F projectable to R1, F2 to R2; the decomposition preserves dependencies iff the union of the projections is equivalent to F (same closure). Preserve = constraints enforced by local key declarations; lose = the FD spans fragments and needs a join to verify - requiring either a trigger, an assertion, or an application check, each expensive. The CLASS-to-BCNF example from Section 4.5 is the canonical loss case: (student, subject) -> teacher lives in no fragment.",
              "The design triangle to state in exams: a decomposition should be lossless-join (mandatory), dependency-preserving (strongly desired), and in BCNF or 3NF (the normal-form target). The classical theorem closes it: every relation can be decomposed into 3NF that is both lossless-join AND dependency-preserving (the synthesis algorithm using minimal covers and key addition); BCNF can always be made lossless but may have to sacrifice dependency preservation. Draw the two-test checklist - shared attribute -> one fragment's key; projected-FD union equivalent to F - and score every decomposition question systematically.",
            ],
            bullets: [
              "Lossless-join: natural join of fragments = original, exactly - no spurious tuples.",
              "Binary test: R1 and R2 lossless iff (R1 intersect R2) -> R1 or -> R2.",
              "Shared attributes must include a key of at least one fragment.",
              "Spurious tuples arise when fragments join on non-key shared columns.",
              "Dependency preservation: projected FDs' union equivalent to the original F.",
              "Lost dependencies need triggers/assertions - costly enforcement.",
              "3NF synthesis: lossless + dependency-preserving always achievable.",
              "BCNF: lossless always, dependency preservation not guaranteed.",
            ],
            keyTerms: [
              { term: "Lossless-join decomposition", definition: "Fragment join reproduces exactly the original relation - the mandatory decomposition property." },
              { term: "Spurious tuple", definition: "A fabricated join row pairing facts that never coexisted." },
              { term: "Dependency preservation", definition: "Every original FD enforceable within some single fragment." },
              { term: "Binary lossless test", definition: "R1 intersect R2 -> R1 or R1 intersect R2 -> R2." },
              { term: "3NF synthesis algorithm", definition: "Builds a 3NF, lossless, dependency-preserving decomposition from a minimal cover." },
            ],
            table: {
              caption: "Testing the Section 4.4 decomposition for losslessness.",
              headers: ["Check", "Fragments", "Result"],
              rows: [
                ["Shared attributes", "STUDENT vs DEPARTMENT", "{dept_id}"],
                ["dept_id -> R1?", "does not cover roll_no, sname", "fails"],
                ["dept_id -> R2?", "dept_id is R2's key", "holds"],
                ["Verdict", "lossless-join", "one condition suffices"],
                ["Bad split sname-based", "sname is key of neither side", "spurious tuples"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Write the binary lossless test symbolically first - '(R1 n R2) -> R1 or (R1 n R2) -> R2' - then compute the shared attributes and check both directions. Showing the failing direction as well as the passing one demonstrates you know both conditions, not just the lucky one.",
            },
            diagram: {
              kind: "matrix",
              title: "Decomposition quality grid",
              caption: "Horizontal axis: dependency preservation. Vertical axis: losslessness.",
              axes: { x: "Dependencies: lost to preserved", y: "Lossy to lossless" },
              quadrants: [
                { label: "Lossy + deps lost", note: "unacceptable - reject the design" },
                { label: "Lossless + deps lost", note: "typical BCNF split (CLASS example)" },
                { label: "Lossy + deps kept", note: "pointless - fix the split keys" },
                { label: "Lossless + deps kept", note: "the 3NF synthesis target" },
              ],
            },
            examQuestions: [
              {
                q: "Define lossless-join decomposition and dependency preservation. State the binary lossless test and verify it for STUDENT/DEPARTMENT; explain why BCNF decomposition may lose dependencies.",
                marks: 7,
                outline: [
                  "Lossless-join definition; spurious tuple consequence.",
                  "Binary test stated symbolically.",
                  "Shared-attribute computation for the worked split.",
                  "Both directions checked; one suffices.",
                  "Counter-split on sname producing spurious tuples.",
                  "Dependency preservation definition and projection.",
                  "CLASS example as the lost-dependency case; 3NF synthesis theorem.",
                ],
              },
              {
                q: "What is a spurious tuple and why is it dangerous?",
                marks: 2,
              },
              {
                q: "R1(A,B), R2(B,C) with B -> C: is the decomposition lossless? Justify.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.8",
            title: "Normalization case study: one table to a clean schema",
            body: [
              "Assemble the unit into one worked design. Input: SALE_ALL(invoice_no, date, cust_id, cust_name, cust_city, item_id, item_name, price, qty) with FDs invoice_no -> date, cust_id; cust_id -> cust_name, cust_city; item_id -> item_name, price; (invoice_no, item_id) -> qty. Candidate key: (invoice_no, item_id) - its closure covers every attribute, no single attribute's closure does. Non-prime: date, cust_id, cust_name, cust_city, item_name, price, qty.",
              "Stage 1 - 1NF check: every cell atomic, one item per row, so 1NF holds; had the invoice stored 'items: 1, 5, 9' we would split a SALE_ITEM table first. Stage 2 - 2NF test on the composite key: qty depends on both parts (full - stays); date, cust_id depend only on invoice_no (partial - violates); item_name, price depend only on item_id (partial - violates). Stage 3 - 3NF test on the reduced tables: INVOICE(invoice_no, date, cust_id) has the transitive chain invoice_no -> cust_id -> cust_name/cust_city, violating 3NF since cust_id is not a superkey of INVOICE.",
              "Final schema after the 3NF split: CUSTOMER(cust_id PK, cust_name, cust_city), INVOICE(invoice_no PK, date, cust_id FK), ITEM(item_id PK, item_name, price), SALE_ITEM(invoice_no FK, item_id FK, qty, PK = (invoice_no, item_id)). Verify the three properties: lossless-join - each split's shared attribute is a key of one side; dependency-preservation - every original FD lives inside one fragment (cust_id -> cust_name in CUSTOMER, item_id -> price in ITEM, key -> qty in SALE_ITEM); normal form - every fragment's determinants are superkeys, so the schema is in BCNF as well as 3NF.",
              "The anomaly audit proves the value: customer name changes in one row (was: once per invoice); a new item sells before its first sale - insertable into ITEM (was: impossible without an invoice); deleting the last SALE_ITEM row of an invoice keeps the item and customer facts (was: cascading erasure). Redundancy arithmetic seals it: a 100-invoice month with 10 items each stored 100 cust_name copies before, 1 after. This audit paragraph - anomalies fixed + redundancy count - is what turns a mechanical decomposition into a 7-mark design answer.",
            ],
            bullets: [
              "Input table with five FD groups; candidate key (invoice_no, item_id).",
              "1NF holds (atomic cells); confirm before proceeding.",
              "2NF violations: partial dependencies on invoice_no and item_id.",
              "3NF violation: invoice_no -> cust_id -> cust_name/cust_city.",
              "Final four tables: CUSTOMER, INVOICE, ITEM, SALE_ITEM.",
              "Lossless-join verified via key-sharing on each split.",
              "Dependency-preserved: each FD inside one fragment; schema also BCNF.",
              "Anomaly audit + redundancy count closes the case study.",
            ],
            keyTerms: [
              { term: "Case study decomposition", definition: "Applying 1NF-3NF tests in sequence to a real table, ending in a verified schema." },
              { term: "SALE_ITEM pattern", definition: "The junction table between invoice and item carrying the only full-key attribute, qty." },
              { term: "Anomaly audit", definition: "Re-testing update, insert, delete anomalies on the final schema as evidence of improvement." },
              { term: "BCNF verification", definition: "Checking every fragment's determinants are superkeys - the final certification step." },
            ],
            codeExample: {
              language: "sql",
              caption: "The final normalized schema in DDL.",
              code:
"CREATE TABLE customer (\n" +
"  cust_id    INT PRIMARY KEY,\n" +
"  cust_name  VARCHAR(40) NOT NULL,\n" +
"  cust_city  VARCHAR(20)\n" +
");\n" +
"CREATE TABLE invoice (\n" +
"  invoice_no INT PRIMARY KEY,\n" +
"  inv_date   DATE NOT NULL,\n" +
"  cust_id    INT REFERENCES customer(cust_id)\n" +
");\n" +
"CREATE TABLE item (\n" +
"  item_id    INT PRIMARY KEY,\n" +
"  item_name  VARCHAR(40),\n" +
"  price      DECIMAL(10,2) CHECK (price > 0)\n" +
");\n" +
"CREATE TABLE sale_item (\n" +
"  invoice_no INT REFERENCES invoice,\n" +
"  item_id    INT REFERENCES item,\n" +
"  qty        INT CHECK (qty > 0),\n" +
"  PRIMARY KEY (invoice_no, item_id)\n" +
");",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Structure the case study in four labelled stages - FDs and keys, 2NF test, 3NF test, final schema with verification. Examiners award stage marks; an answer that jumps straight to the final four tables typically scores half.",
            },
            diagram: {
              kind: "pipeline",
              title: "SALE_ALL to final schema, stage by stage",
              caption: "The full normalization pipeline applied to one table.",
              stages: [
                { label: "SALE_ALL: 12 attributes, 1 table" },
                { label: "1NF check", note: "atomic cells - passes" },
                { label: "2NF split", note: "remove partials on invoice_no / item_id" },
                { label: "3NF split", note: "break invoice_no -> cust_id -> name chain" },
                { label: "Final: 4 tables, BCNF verified", note: "lossless + dependencies preserved" },
              ],
            },
            examQuestions: [
              {
                q: "Normalize SALE_ALL(invoice_no, date, cust_id, cust_name, cust_city, item_id, item_name, price, qty) with the given FDs through 1NF, 2NF and 3NF, give the final schema, and verify lossless join and dependency preservation.",
                marks: 7,
                outline: [
                  "List FDs and compute the candidate key.",
                  "1NF confirmation (or fix).",
                  "2NF test: identify both partial dependency groups.",
                  "3NF test: transitive chain via cust_id.",
                  "Final four-table schema with keys and FKs.",
                  "Lossless-join verification per split.",
                  "Dependency preservation plus anomaly audit summary.",
                ],
              },
              {
                q: "Why is qty allowed to stay in sale_item while cust_name is not allowed in invoice?",
                marks: 3,
              },
              {
                q: "State the primary key of the junction table sale_item and justify it.",
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
      title: "Transactions, Concurrency, Recovery and Physical Structures",
      summary:
        "The engine room: ACID transactions and their states, serializability with precedence graphs, two-phase locking, deadlocks, timestamp ordering, log-based recovery with checkpoints, and the physical side - B+ tree indexing and hashing.",
      chapter: {
        number: "05",
        title: "Making Data Safe and Fast",
        intro:
          "Unit V covers everything below the query: transactions with their ACID guarantees and state machine, concurrency control from serializability through two-phase locking, deadlock handling and timestamp protocols, log-based crash recovery, and the physical access structures - B+ trees and hashing - that make queries fast.",
        inOneBreath:
          "A transaction is an atomic unit with ACID guarantees: Atomicity via undo, Consistency via constraints, Isolation via concurrency control, Durability via redo logging. States: active, partially committed, committed, failed, aborted. Concurrent schedules cause lost update, dirty read, unrepeatable read, phantom; a schedule is conflict-serializable iff its precedence graph is acyclic. 2PL: acquire in growing phase, release in shrinking phase; strict 2PL holds exclusive locks to commit; may deadlock - handled by prevention (wait-die, wound-wait), detection (wait-for graph) or timeouts. Timestamp ordering orders conflicting operations by transaction age. Recovery: write-ahead log with UNDO/REDO and periodic checkpoints. B+ tree: balanced multilevel index with linked leaf pages, O(log n); hashing maps keys to buckets, fast equality but no range scan.",
        sections: [
          {
            number: "5.1",
            title: "Transactions and the ACID properties",
            body: [
              "A transaction is a logical unit of work: a sequence of operations (read, write, update) executed as one indivisible step - all of it happens or none of it does. The classic example is the funds transfer: debit account A by 500, credit account B by 500. If the system crashes between the two writes, 500 rupees have vanished; the transaction concept exists precisely to prevent that. In SQL the boundaries are BEGIN TRANSACTION, COMMIT (make permanent) and ROLLBACK (undo everything since BEGIN).",
              "ACID names the four guarantees. Atomicity: all-or-nothing - managed by the recovery manager, which keeps undo records so a failure rolls the transaction back to before it began. Consistency: a transaction takes the database from one consistent state to another - enforced by the integrity constraints of Section 2.6 (a debit of more than the balance violates CHECK balance >= 0 and aborts). Isolation: concurrent transactions must not observe each other's intermediate states - delivered by concurrency control (Sections 5.3-5.6). Durability: once COMMIT returns, the change survives any later crash - delivered by the write-ahead log (Section 5.7).",
              "Mapping ACID to mechanisms is the standard exam table. Atomicity -> undo log/rollback; Consistency -> constraints and the programmer's transaction definition; Isolation -> locking/timestamps/serialization; Durability -> redo log, commit protocol, stable storage. Note the division of labour: consistency is partly the user's job (a transfer that debits 500 but credits 400 is a consistent-but-wrong program), which is why the definition says 'from one consistent state to another' - the DBMS preserves what the program preserves.",
              "A worked SQL scenario seals the section. BEGIN; UPDATE account SET balance = balance - 500 WHERE acc_no = 'A'; UPDATE account SET balance = balance + 500 WHERE acc_no = 'B'; COMMIT. If the second UPDATE violates a CHECK (or the machine dies mid-way), ROLLBACK fires and account A is restored automatically - no code, no manual repair. Present the transfer example, the four properties each with its mechanism, and this SQL sketch, and the section carries a full 7-mark answer.",
            ],
            bullets: [
              "Transaction: an indivisible logical unit of work, bounded by BEGIN/COMMIT/ROLLBACK.",
              "Atomicity: all operations happen or none; ensured by the undo log.",
              "Consistency: moves the database from valid state to valid state; enforced by constraints.",
              "Isolation: concurrent executions look sequential; ensured by locking or timestamps.",
              "Durability: committed changes survive crashes; ensured by the write-ahead log.",
              "Transfer example: debit + credit must both succeed or both vanish.",
              "Consistency is shared work: DBMS enforces constraints, the program defines correctness.",
            ],
            keyTerms: [
              { term: "Transaction", definition: "A sequence of database operations forming one indivisible unit of work." },
              { term: "COMMIT", definition: "Operation making a transaction's changes permanent and visible." },
              { term: "ROLLBACK", definition: "Operation undoing all changes a transaction made since it began." },
              { term: "Atomicity", definition: "The all-or-nothing property of a transaction." },
              { term: "Durability", definition: "The guarantee that committed changes survive subsequent failures." },
            ],
            codeExample: {
              language: "sql",
              caption: "The transfer transaction - ACID in five lines.",
              code:
"BEGIN TRANSACTION;\n" +
"\n" +
"UPDATE account SET balance = balance - 500\n" +
"WHERE acc_no = 'A';   -- CHECK (balance >= 0) guards this\n" +
"\n" +
"UPDATE account SET balance = balance + 500\n" +
"WHERE acc_no = 'B';\n" +
"\n" +
"COMMIT;   -- or ROLLBACK on any error: A is restored",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The ACID question is a certainty. Pair each letter with BOTH its meaning and its mechanism (A-undo log, C-constraints, I-locking/timestamps, D-redo log) and illustrate with the transfer. Meaning-only answers stall at 5 marks; mechanisms carry the rest.",
            },
            diagram: {
              kind: "fork",
              title: "How a transaction ends",
              caption: "Two exits, two very different aftermaths.",
              start: "Transaction executing: debit A, credit B",
              branches: [
                { label: "All operations succeed", outcome: "COMMIT - changes permanent, log ensures durability", good: true },
                { label: "Any operation fails or crash", outcome: "ROLLBACK - undo log restores A's balance", good: true },
                { label: "Constraint violation (overdraw)", outcome: "Automatic abort before COMMIT is possible", good: true },
                { label: "Crash after partial commit", outcome: "Recovery manager replays or undoes via log", good: true },
              ],
            },
            examQuestions: [
              {
                q: "Define transaction and explain the four ACID properties with the mechanism that implements each. Illustrate with a bank transfer example.",
                marks: 7,
                outline: [
                  "Transaction definition with BEGIN/COMMIT/ROLLBACK boundaries.",
                  "Transfer scenario stated: debit A, credit B.",
                  "Atomicity + undo log.",
                  "Consistency + constraints, with the shared-responsibility note.",
                  "Isolation + concurrency control pointer.",
                  "Durability + write-ahead log.",
                  "The SQL sketch showing rollback restoring A.",
                ],
              },
              {
                q: "Which ACID property does the write-ahead log implement?",
                marks: 2,
              },
              {
                q: "Explain why a transfer that debits 500 but credits 400 is still 'consistent' - and whose fault that is.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Transaction states and concurrency anomalies",
            body: [
              "A transaction moves through five states. Active: executing its operations. Partially committed: the last statement finished but changes are still in buffers, vulnerable to failure. Committed: durable, all changes permanent. Failed: something went wrong after execution started. Aborted: rolled back; the system may restart it or kill it. The transitions matter for recovery design: from partially committed you can still fail and abort; from committed you can never undo - that boundary is exactly what the commit point means.",
              "Concurrent uncontrolled execution produces four classic anomalies. Lost update: T1 reads balance 1000, T2 reads 1000, T1 writes 1200, T2 writes 1100 - T1's 200 deposit vanishes because T2's write overwrote it (write-write conflict). Dirty read: T2 reads a value T1 wrote but then rolled back - T2 has consumed data that never officially existed (read-write conflict on uncommitted data). Unrepeatable read: T1 reads a value, T2 updates and commits, T1 re-reads and gets a different number. Phantom: T1 counts 10 rows matching a predicate, T2 inserts an 11th, T1's count is wrong - the new row is a 'ghost' that did not exist at first read.",
              "A worked interleaving table makes lost update unmissable. Time 1: T1 reads balance = 1000. Time 2: T2 reads balance = 1000. Time 3: T1 writes 1000 + 200 = 1200. Time 4: T2 writes 1000 + 300 = 1300. Final balance 1300, but the truthful total is 1500: 200 rupees of deposit evaporated. The fix preview: serial execution of T1 and T2 (either order) always yields 1500 - which is exactly why Section 5.3 defines serializability as 'equivalent to some serial order'.",
              "Connect the anomalies to isolation levels, the practical dial: READ UNCOMMITTED permits dirty reads; READ COMMITTED forbids them but allows unrepeatable reads; REPEATABLE READ additionally forbids those but allows phantoms; SERIALIZABLE forbids all four. RGPV questions ask either 'list the anomalies with examples' or 'which anomaly does each isolation level permit?' - learn both directions of the mapping, with the lost-update interleaving table as your centrepiece.",
            ],
            bullets: [
              "Five states: active, partially committed, committed, failed, aborted.",
              "Commit point: after it, changes are durable and cannot be undone.",
              "Lost update: two writes to the same item, last writer erases the first.",
              "Dirty read: reading data later rolled back.",
              "Unrepeatable read: two reads of one item, different values.",
              "Phantom: new matching row appears between two aggregate reads.",
              "All four anomalies vanish in serial schedules - the motivation for serializability.",
              "Isolation levels map to which anomalies remain: UNCOMMITTED, COMMITTED, REPEATABLE, SERIALIZABLE.",
            ],
            keyTerms: [
              { term: "Partially committed state", definition: "Last statement executed but changes not yet durable - failure can still abort." },
              { term: "Lost update", definition: "One transaction's write overwritten by another's stale write." },
              { term: "Dirty read", definition: "Reading a value written by a transaction that later aborts." },
              { term: "Unrepeatable read", definition: "The same item read twice within one transaction yields different values." },
              { term: "Phantom", definition: "A newly inserted row matching an earlier predicate, corrupting repeated aggregate reads." },
            ],
            table: {
              caption: "Lost update interleaving: balance starts at 1000.",
              headers: ["Time", "T1 (deposit 200)", "T2 (deposit 300)", "Balance"],
              rows: [
                ["t1", "read balance = 1000", "", "1000"],
                ["t2", "", "read balance = 1000", "1000"],
                ["t3", "write 1000 + 200", "", "1200"],
                ["t4", "", "write 1000 + 300", "1300"],
                ["truth", "correct final should be", "1000 + 200 + 300", "1500"],
              ],
            },
            callout: {
              type: "warning",
              title: "Dirty read vs unrepeatable read",
              body: "Both involve reading twice, so students merge them. Distinguish cleanly: dirty read = the value you read came from a transaction that ABORTED; unrepeatable read = both values came from COMMITTED transactions, they just differ. The first consumes phantom data; the second only breaks your own consistency.",
            },
            diagram: {
              kind: "cycle",
              title: "The transaction state machine",
              caption: "Life of a transaction from begin to commit or abort.",
              steps: [
                { label: "Active", note: "statements executing" },
                { label: "Partially committed", note: "last statement done, buffers pending" },
                { label: "Committed", note: "durable - no way back" },
                { label: "Failed", note: "error or crash at any pre-commit stage" },
                { label: "Aborted", note: "rolled back; restart or kill" },
              ],
            },
            examQuestions: [
              {
                q: "Draw the transaction state diagram and explain the four concurrency anomalies (lost update, dirty read, unrepeatable read, phantom) with one example each.",
                marks: 7,
                outline: [
                  "Five states with the commit-point boundary.",
                  "Transitions: partial commit may still fail; committed never undoes.",
                  "Lost update with the balance interleaving table.",
                  "Dirty read with aborting T1.",
                  "Unrepeatable read with committed T2 update.",
                  "Phantom with an inserted matching row.",
                  "Isolation levels mapping as the closing line.",
                ],
              },
              {
                q: "Name the five states of a transaction.",
                marks: 2,
              },
              {
                q: "Differentiate dirty read from unrepeatable read with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Serial schedules, conflict serializability and precedence graphs",
            body: [
              "A serial schedule executes transactions one after another with no interleaving - T1 fully, then T2. Serial schedules are always correct (each transaction sees a consistent world) but wasteful: one long query would freeze every other user. The compromise: allow interleaving but only schedules EQUIVALENT to some serial order. Two schedules are equivalent if they have the same effect on every database state; a schedule with such a serial twin is serializable, and concurrency control's entire job is admitting only serializable schedules.",
              "Conflicts define the equivalence test. Two operations conflict when they belong to different transactions, touch the same data item, and at least one is a write. That gives three conflict pairs: read-write, write-read, write-write. Read-read never conflicts. If a non-serial schedule can be transformed into a serial one by swapping adjacent NON-conflicting operations, it is conflict equivalent to that serial order - and hence conflict serializable. View serializability is the weaker (more permissive) cousin, NP-hard to test, mentioned for completeness.",
              "The precedence graph turns this into a mechanical test. For schedule S with transactions T1...Tn: draw node Ti for each; add edge Ti -> Tj whenever an operation of Ti precedes and conflicts with an operation of Tj. S is conflict serializable iff the graph is acyclic, and a topological sort of the nodes gives the equivalent serial order. The test is polynomial, constructive, and the standard exam exercise.",
              "Worked schedule. Operations: R1(A), W2(A), R2(B), W1(B). Conflicts: R1(A) vs W2(A) gives T1 -> T2; R2(B) vs W1(B) gives T2 -> T1. The graph has the cycle T1 -> T2 -> T1: NOT serializable - this schedule can lose updates. Contrast: R1(A), W1(A), R2(A), W2(A) with edges only T1 -> T2: acyclic, serializable, equivalent to T1 then T2. In the exam, draw the graph, list the edges with their conflicting operations as justification, and state the verdict in one line - full marks need the edge citations, not just the picture.",
            ],
            bullets: [
              "Serial schedule: no interleaving; always correct; poor concurrency.",
              "Serializable schedule: equivalent to some serial order - the correctness bar.",
              "Conflict: different transactions + same item + at least one write.",
              "Three conflict pairs: RW, WR, WW; RR never conflicts.",
              "Conflict equivalence: reachable by swapping adjacent non-conflicting ops.",
              "Precedence graph: edge Ti -> Tj for each conflicting precede; test = acyclicity.",
              "Topological sort of an acyclic graph yields the equivalent serial order.",
              "View serializability: broader but NP-hard - usually one mention only.",
            ],
            keyTerms: [
              { term: "Serial schedule", definition: "Schedule where transactions execute one after another without interleaving." },
              { term: "Serializable schedule", definition: "A concurrent schedule equivalent to some serial schedule." },
              { term: "Conflict", definition: "Pair of operations from different transactions on the same item with at least one write." },
              { term: "Precedence graph", definition: "Directed graph of transactions with edges for conflicting precedences; acyclicity proves serializability." },
              { term: "View serializability", definition: "Broader equivalence notion based on matching reads/writes; testing is NP-hard." },
            ],
            table: {
              caption: "Deciding serializability of R1(A), W2(A), R2(B), W1(B).",
              headers: ["Conflicting pair", "Precedes", "Edge"],
              rows: [
                ["R1(A) then W2(A)", "T1 before T2 on A", "T1 -> T2"],
                ["W2(A) then R2(B)", "same transaction - no edge", "-"],
                ["R2(B) then W1(B)", "T2 before T1 on B", "T2 -> T1"],
                ["Graph verdict", "cycle T1 -> T2 -> T1", "NOT conflict serializable"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For every precedence-graph question, cite each edge with its conflicting operations ('T1 -> T2 because R1(A) precedes W2(A)'). Uncited edges cost marks because the examiner cannot verify the construction; citations make the answer self-proving.",
            },
            diagram: {
              kind: "flow",
              title: "Testing a schedule for conflict serializability",
              caption: "The four-step exam procedure.",
              steps: [
                { label: "List operations in order" },
                { label: "Mark conflicting pairs", note: "different T, same item, one write" },
                { label: "Build precedence graph", note: "edge per conflict, earlier -> later" },
                { label: "Check for cycles", note: "acyclic = serializable" },
                { label: "Topological sort for the serial order", note: "only if acyclic" },
              ],
            },
            examQuestions: [
              {
                q: "Define conflict serializability. Explain the conflict conditions and the precedence graph test, and determine whether the schedule R1(A), W2(A), R2(B), W1(B) is serializable.",
                marks: 7,
                outline: [
                  "Serial vs concurrent vs serializable definitions.",
                  "Conflict conditions: different transactions, same item, a write.",
                  "Three conflict pairs; RR excluded.",
                  "Precedence graph construction rules.",
                  "Acyclicity theorem and topological sort.",
                  "Worked schedule: edges T1 -> T2 and T2 -> T1.",
                  "Cycle verdict: not serializable; contrast with a serializable variant.",
                ],
              },
              {
                q: "Do two read operations on the same item conflict? Why not?",
                marks: 2,
              },
              {
                q: "For schedule R1(A), W1(A), R2(A), W2(A), draw the precedence graph and give the equivalent serial order.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Locking protocols: two-phase locking and its variants",
            body: [
              "A lock is permission to use a data item. Shared (S) locks allow reading: many transactions may hold S on the same item simultaneously. Exclusive (X) locks allow writing: exactly one transaction may hold X, and nobody else may hold S. The compatibility matrix is the heart: S-S compatible; S-X and X-X incompatible. Readers block writers, writers block everyone - the fundamental trade-off between safety and throughput.",
              "Two-phase locking (2PL) guarantees conflict serializability with a simple discipline: every transaction acquires all its locks before releasing any. Phase 1 (growing): acquire S or X locks as needed, never release. Phase 2 (shrinking): release locks, never acquire. The lock point - the moment the last lock is acquired - marks the transaction's serialization position. The theorem: every 2PL schedule is conflict serializable; the serial order is the order of lock points.",
              "Worked trace. T1: X-lock A, write A, X-lock B, write B, then release both - growing phase ends at the second X-lock, lock point reached. T2 requesting X(A) after T1's release simply waits. Contrast a violating schedule: T1 writes A, releases A, then asks for B while T2 grabs A - the interleaving can be non-serializable because T1 kept acquiring after releasing. The discipline is what buys the guarantee; the theorem covers no other pattern.",
              "Variants and their costs complete the section. Basic 2PL permits deadlocks (two transactions each hold what the other needs). Conservative (static) 2PL locks ALL needed items at start - deadlock-free but reduces concurrency badly and needs clairvoyance. Strict 2PL holds all X locks until commit/abort - the commercial default (used by most engines' default isolation) because it also prevents reading uncommitted data, killing dirty reads. Rigorous 2PL holds ALL locks (S and X) until commit - the strongest, simplest recovery story. State the theorem, the deadlock caveat, and which variant each engine uses, and the answer is complete.",
            ],
            bullets: [
              "S lock: read permission, multiple holders; X lock: write permission, sole holder.",
              "Compatibility: S-S yes; S-X and X-X no.",
              "2PL: growing phase (acquire only), shrinking phase (release only).",
              "Lock point = last acquisition; 2PL schedules serialize by lock-point order.",
              "2PL guarantees conflict serializability but NOT freedom from deadlock.",
              "Conservative 2PL: pre-lock everything - deadlock-free, low concurrency.",
              "Strict 2PL: X locks held to commit - prevents dirty reads, industry default.",
              "Rigorous 2PL: all locks held to commit - strongest, simplest recovery.",
            ],
            keyTerms: [
              { term: "Shared lock (S)", definition: "Read lock held concurrently by many transactions." },
              { term: "Exclusive lock (X)", definition: "Write lock held by exactly one transaction, excluding all others." },
              { term: "Two-phase locking", definition: "Discipline of acquiring all locks before releasing any; guarantees conflict serializability." },
              { term: "Lock point", definition: "The moment a transaction acquires its final lock; defines its position in the equivalent serial order." },
              { term: "Strict 2PL", definition: "2PL holding exclusive locks until commit or abort; prevents dirty reads." },
            ],
            table: {
              caption: "Lock compatibility matrix.",
              headers: ["Held \\ Requested", "S (shared)", "X (exclusive)"],
              rows: [
                ["S (shared)", "Compatible", "Wait"],
                ["X (exclusive)", "Wait", "Wait"],
              ],
            },
            callout: {
              type: "warning",
              title: "2PL kills dirty reads but not deadlocks",
              body: "Write this pairing on every lock question: 2PL guarantees serializability, strict 2PL adds dirty-read prevention, and NO variant of 2PL prevents deadlock. Claiming '2PL is deadlock-free' is the classic lost mark - only conservative 2PL and timestamp protocols are deadlock-free.",
            },
            diagram: {
              kind: "pipeline",
              title: "Two-phase locking through its phases",
              caption: "Acquire everything, reach the lock point, then release.",
              stages: [
                { label: "Growing: acquire S/X locks", note: "no releases" },
                { label: "Lock point reached", note: "last acquisition - serialization position" },
                { label: "Shrinking: release locks", note: "no acquisitions" },
                { label: "Commit or abort", note: "strict/rigorous: X (or all) locks held until here" },
              ],
            },
            examQuestions: [
              {
                q: "Explain shared and exclusive locks with the compatibility matrix, prove the two-phase locking discipline and its serializability guarantee, and distinguish basic, conservative, strict and rigorous 2PL.",
                marks: 7,
                outline: [
                  "Lock types and the compatibility matrix.",
                  "2PL two phases with the acquire-release rule.",
                  "Lock point and serial order derivation.",
                  "Why violating 2PL can be non-serializable (mini-trace).",
                  "Basic 2PL deadlock caveat.",
                  "Conservative variant trade-off.",
                  "Strict and rigorous variants and their extra guarantees.",
                ],
              },
              {
                q: "Can two transactions hold S locks on the same item? Can one hold S while another holds X?",
                marks: 2,
              },
              {
                q: "Why does strict 2PL prevent dirty reads? Explain in two lines.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Deadlock: prevention, avoidance and detection",
            body: [
              "Deadlock is a cycle of waiting: T1 holds a lock T2 needs while T2 holds a lock T1 needs - neither can proceed, ever. Example: T1 holds X(A) and requests X(B); T2 holds X(B) and requests X(A). Both wait indefinitely unless the system intervenes. Since basic 2PL permits deadlocks (Section 5.4), every locking DBMS needs a policy for them, and exam questions ask you to name and compare the three families: prevention, avoidance/detection, and timeout.",
              "Prevention makes deadlock structurally impossible by ordering access. The resource ordering method: all transactions request locks in the same global order (say A before B) - cycles cannot form. Simpler-to-state variants use timestamps: Wait-Die (non-preemptive) - when old T requests an item held by young T, old waits; when young requests from old, young dies (aborts and restarts later with the SAME timestamp). Wound-Wait (preemptive) - old T wounds the young holder (aborts it) and takes the item; young requesting from old waits. Both schemes let one direction wait only, so cycles cannot close; both use the timestamp trick of never restarting with a fresh timestamp, which prevents starvation.",
              "Detection takes the opposite stance: let deadlocks form, find them, break them. The wait-for graph has a node per transaction and edge Ti -> Tj when Ti waits for a lock Tj holds; a cycle IS a deadlock, checked periodically by the lock manager. Recovery from detection: pick a victim (cheapest to roll back - fewest changes, least CPU), abort and roll it back, break the cycle. Starvation must be watched: the same victim repeatedly chosen needs a penalty counter (age-based victim selection). Detection costs graph maintenance and rollback work but maximizes concurrency - it is what most real engines use.",
              "Timeout is the pragmatic third path: a transaction waiting longer than T seconds is assumed deadlocked and rolled back - crude (false positives on legitimately slow waits), trivially implementable, and common in distributed settings. The exam comparison: prevention (wait-die/wound-wait, no deadlocks ever, aborts of innocent young transactions), detection (max concurrency, wait-for graph cost, victim rollback), timeout (cheap, approximate). One worked wait-die trace - old T1 requests from young T2: T1 waits; young T3 requests from old T1: T3 dies and restarts with original timestamp - demonstrates the protocol and finishes the 7-mark shape.",
            ],
            bullets: [
              "Deadlock = wait cycle: each transaction holds what another needs.",
              "Prevention: resource ordering makes cycles impossible by construction.",
              "Wait-Die: old waits for young, young dies when requesting from old (non-preemptive).",
              "Wound-Wait: old wounds (aborts) young holder, young waits for old (preemptive).",
              "Restart with the ORIGINAL timestamp - prevents starvation in both schemes.",
              "Detection: wait-for graph cycle test, periodic; victim chosen by cost.",
              "Victim rollback + starvation watch (age-based selection).",
              "Timeout: cheap approximate fallback; false positives possible.",
            ],
            keyTerms: [
              { term: "Deadlock", definition: "A cycle of transactions each waiting for a lock the next one holds." },
              { term: "Wait-Die", definition: "Non-preemptive prevention: old waits, young requesting from old aborts." },
              { term: "Wound-Wait", definition: "Preemptive prevention: old aborts the young holder, young waits for old." },
              { term: "Wait-for graph", definition: "Graph of 'waits for' edges; a cycle equals a deadlock." },
              { term: "Victim selection", definition: "Choosing the transaction to roll back when breaking a detected deadlock." },
            ],
            table: {
              caption: "Wait-Die vs Wound-Wait at a glance (T_old requests item held by T_young and vice versa).",
              headers: ["Situation", "Wait-Die", "Wound-Wait"],
              rows: [
                ["Old requests from young", "Old waits", "Old aborts (wounds) the young holder"],
                ["Young requests from old", "Young aborts (dies)", "Young waits"],
                ["Who may preempt", "nobody", "the older transaction"],
                ["Restart timestamp", "original (anti-starvation)", "original (anti-starvation)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Wait-Die vs Wound-Wait flips intuition, so anchor it: in BOTH schemes the OLD transaction never dies. Wait-Die: old waits, young dies. Wound-Wait: old wounds, young waits. Four phrases, memorized cold, answer the entire question.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing a deadlock strategy",
              caption: "Three families, three trade-offs.",
              start: "How should the DBMS handle deadlock?",
              branches: [
                { label: "Prevention (wait-die / wound-wait)", outcome: "No deadlocks ever; young transactions may abort needlessly", good: true },
                { label: "Detection (wait-for graph)", outcome: "Maximum concurrency; graph + victim rollback cost", good: true },
                { label: "Timeout", outcome: "Trivially simple; false aborts of slow-but-alive transactions", good: true },
                { label: "Ignore it", outcome: "System freezes - never acceptable", good: false },
              ],
            },
            examQuestions: [
              {
                q: "Explain deadlock in a locking database. Describe wait-die and wound-wait prevention schemes with a trace each, and compare prevention, detection and timeout strategies.",
                marks: 7,
                outline: [
                  "Deadlock definition with the two-lock cycle example.",
                  "Why basic 2PL permits deadlock.",
                  "Wait-Die rule + worked trace.",
                  "Wound-Wait rule + worked trace.",
                  "Original-timestamp restart and starvation prevention.",
                  "Detection: wait-for graph, victim selection, recovery.",
                  "Timeout as the pragmatic fallback; comparative verdict.",
                ],
              },
              {
                q: "In wait-die, what happens when a YOUNG transaction requests a lock held by an OLD one?",
                marks: 2,
              },
              {
                q: "How is a detected deadlock recovered? Name the steps.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Timestamp ordering protocol",
            body: [
              "The timestamp ordering (TO) protocol achieves serializability without any locks: give each transaction Ti a timestamp TS(Ti) when it starts (a counter value or clock reading), and guarantee that the schedule is equivalent to running transactions in timestamp order. Older transactions have priority; every conflicting access is checked against the timestamps of the transaction that last read or wrote the item.",
              "The rules per data item X, tracking read-ts(X) and write-ts(X): (1) Ti requests read(X): allowed if TS(Ti) >= write-ts(X) - Ti is newer than whoever last wrote, so reading the current value is in-order; set read-ts(X) = max(read-ts(X), TS(Ti)). If TS(Ti) < write-ts(X), Ti is too old to read a value written by a newer transaction: abort and restart with a NEW timestamp. (2) Ti requests write(X): allowed if TS(Ti) >= read-ts(X) and TS(Ti) >= write-ts(X); otherwise abort and restart. The Thomas write rule is the refinement that permits some writes to be IGNORED instead of aborting: if TS(Ti) < write-ts(X), the write is already superseded - drop it and continue.",
              "Worked trace. TS(T1) = 1 (old), TS(T2) = 5 (new). T1 reads A (ok, read-ts(A) = 1), T2 writes A (ok, write-ts(A) = 5), now T1 wants to WRITE A: TS(T1) = 1 < write-ts(A) = 5, so plain TO aborts T1; the Thomas write rule instead ignores T1's obsolete write and lets it commit. The reverse ordering - newer T2 reading a value then older T1 writing - similarly aborts whichever transaction is out of order. Every aborted transaction restarts with a fresh timestamp so it is no longer the oldest and will not loop.",
              "Assessment: deadlock-free by construction (nobody waits - conflicts abort immediately), so no prevention machinery is needed; serializability is guaranteed by the timestamp order itself. The cost is high abort rates under contention (work can be wasted and redone) and no transaction can be sure of committing until it finishes. Comparison sentence for exams: 2PL waits (deadlock risk, no aborts for conflicts), TO aborts (no deadlock, wasted work) - conservative 2PL and TO are the two deadlock-free extremes, with detection-based 2PL the practical middle.",
            ],
            bullets: [
              "Every transaction gets a timestamp TS(Ti) at start; serializability order = timestamp order.",
              "Per-item metadata: read-ts(X), write-ts(X).",
              "Read rule: TS(Ti) >= write-ts(X) else abort-restart.",
              "Write rule: TS(Ti) >= read-ts(X) and >= write-ts(X) else abort-restart.",
              "Thomas write rule: obsolete writes (TS < write-ts) are ignored, not aborted.",
              "Deadlock-free: no waiting; conflicts resolve by aborting the older access.",
              "Aborted transactions restart with a NEW timestamp to avoid loops.",
              "Trade-off: no deadlocks but potentially high abort rates under contention.",
            ],
            keyTerms: [
              { term: "Timestamp TS(Ti)", definition: "A unique, monotonically increasing identifier assigned when a transaction starts." },
              { term: "Timestamp ordering protocol", definition: "Concurrency control that orders conflicting operations by transaction timestamps, aborting violators." },
              { term: "Thomas write rule", definition: "Modification that ignores (rather than aborts) writes already superseded by a newer transaction." },
              { term: "Abort-restart", definition: "Aborting a transaction and rerunning it with a fresh timestamp." },
              { term: "read-ts / write-ts", definition: "Per-item records of the newest transaction timestamps that read/wrote the item." },
            ],
            table: {
              caption: "TO vs 2PL - the two philosophies.",
              headers: ["Aspect", "2PL", "Timestamp ordering"],
              rows: [
                ["Conflict resolution", "Wait for the lock", "Abort and restart"],
                ["Deadlocks", "Possible (basic 2PL)", "Impossible - nobody waits"],
                ["Starvation", "Possible without care", "Avoided by fresh restart timestamps"],
                ["Wasted work", "None (waits preserve work)", "Aborted work redone"],
                ["Serializability proof", "Lock-point order", "Timestamp order"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "State the two rules as inequalities and run one trace - that is the full marks template. The sentence 'TO is deadlock-free because no transaction ever waits; conflicts abort the out-of-order transaction' is the conceptual payoff, and the Thomas write rule is the bonus point most answers forget.",
            },
            diagram: {
              kind: "matrix",
              title: "Timestamp ordering decision grid",
              caption: "For each request, the transaction's age decides its fate.",
              axes: { x: "Transaction older (small TS) to newer (large TS)", y: "Operation: read to write" },
              quadrants: [
                { label: "Old T reads, item written by newer", note: "abort-restart T" },
                { label: "Old T writes, newer wrote/read", note: "abort, or Thomas rule ignores" },
                { label: "New T reads after older write", note: "allowed - in timestamp order" },
                { label: "New T writes after older ops", note: "allowed - update read-ts/write-ts" },
              ],
            },
            examQuestions: [
              {
                q: "Explain the basic timestamp ordering protocol with its read and write rules. Trace a conflicting schedule showing an abort, and describe the Thomas write rule with the deadlock-free property.",
                marks: 7,
                outline: [
                  "Timestamp assignment and the ordering goal.",
                  "read-ts and write-ts bookkeeping.",
                  "Read rule inequality and its meaning.",
                  "Write rule inequality and its meaning.",
                  "Worked trace: old T1 vs new T2 on item A.",
                  "Thomas write rule: ignore superseded writes.",
                  "Deadlock-freedom and restart-with-new-TS policy.",
                ],
              },
              {
                q: "Why is the timestamp ordering protocol deadlock-free?",
                marks: 2,
              },
              {
                q: "TS(T1)=1, TS(T2)=5, write-ts(X)=5: what happens when T1 requests write(X) with and without the Thomas write rule?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.7",
            title: "Log-based recovery and checkpoints",
            body: [
              "Recovery returns the database to a consistent state after a crash, using a log - an append-only sequence of records on stable storage written BEFORE the corresponding data pages (the write-ahead protocol). Log record types: <Ti, start>, <Ti, X, old_value, new_value> (update record), <Ti, commit>, <Ti, abort>, and the periodic <checkpoint>. The old_value supports UNDO (atomicity), the new_value supports REDO (durability) - one record format serves both.",
              "Two modification strategies decide who gets undone and redone. Deferred update: transactions write only to the log/buffers and reach the database at commit - so UNDO is never needed (nothing uncommitted touched disk), only REDO of committed work. Immediate update: changes hit the database before commit - so UNDO of uncommitted (or in-doubt) work is required at recovery, plus REDO of committed work that had not reached disk. The write-ahead rule makes both safe: log records reach stable storage before the data pages they describe.",
              "Recovery after a crash: scan the log backwards from the end to find all transactions with <start> but no <commit> - UNDO them (restore old values, oldest first); then scan forward and REDO all transactions with <commit> - reapply new values. Idempotence matters: recovery may be interrupted and rerun, so both UNDO and REDO must produce the same result when applied twice. A worked classification: T1 committed before crash, T2 uncommitted at crash, T3 committed but pages not yet flushed - T1 needs nothing (already on disk), T2 is undone, T3 is redone.",
              "Checkpoints make the scan affordable: force all log and dirty buffer contents to disk, write <checkpoint L> recording the active transactions, and start a new log segment. At recovery, only transactions in L and afterwards need examining - everything before the checkpoint is already safely on disk. Without checkpoints the log grows forever and recovery time grows with it; with regular checkpoints recovery time is bounded by the checkpoint interval. One line closes the section: 'checkpoint = the boundary that turns an unbounded backward scan into a bounded one.'",
            ],
            bullets: [
              "Log = append-only stable-storage record of every change; written before data (WAL).",
              "Record types: start, update (old, new), commit, abort, checkpoint.",
              "old_value enables UNDO (atomicity); new_value enables REDO (durability).",
              "Deferred update: database touched at commit - REDO only.",
              "Immediate update: database touched early - UNDO + REDO.",
              "Recovery: backward UNDO of uncommitted, forward REDO of committed; both idempotent.",
              "Checkpoint: flush log + buffers, record active transactions, bound the recovery scan.",
              "Worked triage: committed+flushed = nothing, uncommitted = UNDO, committed-unflushed = REDO.",
            ],
            keyTerms: [
              { term: "Write-ahead log (WAL)", definition: "Protocol requiring log records to reach stable storage before the data pages they describe." },
              { term: "UNDO", definition: "Restoring old values to erase the effects of uncommitted transactions." },
              { term: "REDO", definition: "Reapplying new values to ensure committed transactions' effects survive." },
              { term: "Deferred update", definition: "Strategy keeping uncommitted changes out of the database until commit." },
              { term: "Checkpoint", definition: "Periodic flush of log and buffers that bounds how far back recovery must scan." },
            ],
            table: {
              caption: "Recovery triage for three transactions at crash time.",
              headers: ["Transaction", "Log status at crash", "Recovery action"],
              rows: [
                ["T1", "start, update, commit (data flushed)", "nothing"],
                ["T2", "start, update - no commit", "UNDO (restore old values)"],
                ["T3", "start, update, commit - data not flushed", "REDO (reapply new values)"],
                ["T4", "started after checkpoint, active", "UNDO"],
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the timeline: checkpoint mark, then T1, T2, T3 with their commit positions relative to the crash. Classify each transaction with one word (nothing / UNDO / REDO) and justify from the log. The timeline picture plus triage table is the whole answer structure.",
            },
            diagram: {
              kind: "flow",
              title: "Recovery after a crash, step by step",
              caption: "From restart to a consistent database.",
              steps: [
                { label: "Crash occurs", note: "buffers lost, log survives" },
                { label: "Locate last checkpoint", note: "bounded scan start" },
                { label: "Backward scan: UNDO uncommitted", note: "restore old values" },
                { label: "Forward scan: REDO committed", note: "reapply new values" },
                { label: "Database consistent; resume", note: "both passes idempotent" },
              ],
            },
            examQuestions: [
              {
                q: "Explain log-based recovery: record types, the write-ahead rule, deferred vs immediate update, UNDO/REDO recovery, and the role of checkpoints. Classify transactions T1-T3 at crash time.",
                marks: 7,
                outline: [
                  "Log purpose and WAL ordering rule.",
                  "Record formats with old/new values.",
                  "Deferred update = REDO only; why.",
                  "Immediate update = UNDO + REDO; why.",
                  "Recovery algorithm: backward UNDO, forward REDO, idempotence.",
                  "Checkpoint mechanics and bounded scan.",
                  "Triage of the three transactions with reasons.",
                ],
              },
              {
                q: "Why must log records reach disk before the data pages they describe?",
                marks: 2,
              },
              {
                q: "What exactly does a checkpoint flush and record?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.8",
            title: "Indexing: single-level, multi-level and B+ trees",
            body: [
              "An index is an auxiliary structure mapping search-key values to record locations, letting the engine find data in O(log n) page reads instead of scanning n pages. Primary index: built on the ordered file's primary key, one entry per block (sparse). Clustering index: on an ordering non-key field. Secondary index: on any unordered column - dense (one entry per record) and therefore taller but able to answer unique lookups. Index types matter because they decide entry counts and hence height.",
              "Multi-level indexing compresses the height: build a dense inner index, then an index of that index, until one page fits at the root - turning a linear inner scan into tree descent. The refinement every syllabus demands is the B+ tree: a balanced m-way search tree where ALL data pointers sit in the leaf level, internal nodes hold only separators, leaves are linked left-to-right in key order, and every path from root to leaf has exactly the same length.",
              "B+ tree mechanics with order p (maximum children per internal node) and p_leaf (maximum entries per leaf): each internal node holds up to p-1 keys and p children; each leaf holds up to p_leaf - 1 entries; nodes split upward on overflow, merge or redistribute on underflow; occupancy is guaranteed at least half. Search descends from root comparing keys; insert splits the overflowing leaf and pushes the middle key up; delete borrows from a sibling or merges, shrinking the tree if the root empties. Worked numbers: 1 million records, 100 entries per leaf, fanout 100 - roughly 3 levels (100^3 = 1,000,000), so any lookup costs 3-4 page reads against 50,000 for a scan.",
              "Why B+ trees beat plain B-trees and win the commercial world: internal nodes carry no data pointers, so fanout is higher and the tree shallower; the linked leaves make range queries ('all marks between 60 and 80') a linear leaf walk instead of a tree traversal; and the fixed leaf depth gives uniform worst-case latency. The trade-offs to state: every insert/delete may trigger splits/merges (write amplification), and extra storage (typically 10-20 percent). Close with the DDL that creates one - CREATE INDEX idx_city ON student(city) - and the reminder that primary keys usually get their index automatically.",
            ],
            bullets: [
              "Index: auxiliary key-to-location structure replacing full scans with tree descent.",
              "Primary index: sparse, on ordered primary key - one entry per block.",
              "Clustering index: on the ordering non-key column; secondary: dense, on unordered columns.",
              "Multi-level index stacks indexes until one page remains - the B+ tree generalizes this.",
              "B+ tree: all data in linked leaves, internal nodes are pure separators, perfectly balanced.",
              "Order p: p-1 keys / p children internally; overflow splits upward, underflow merges.",
              "Height arithmetic: fanout 100, 1M records = about 3 levels, 3-4 reads per lookup.",
              "Strengths: range scans via linked leaves, uniform latency; costs: split/merge write amplification.",
            ],
            keyTerms: [
              { term: "Index", definition: "Structure mapping key values to record addresses for logarithmic search." },
              { term: "Primary index", definition: "Sparse index on the ordered file's primary key, one entry per block." },
              { term: "Secondary index", definition: "Dense index on a non-ordering column, one entry per record." },
              { term: "B+ tree", definition: "Balanced multi-level index with linked leaf pages holding all data pointers." },
              { term: "Fanout / order p", definition: "Maximum children per internal node; determines index height as log_p(n)." },
            ],
            codeExample: {
              language: "sql",
              caption: "Creating and using indexes.",
              code:
"-- primary key gets an automatic index\n" +
"CREATE TABLE student (\n" +
"  roll_no INT PRIMARY KEY,\n" +
"  name    VARCHAR(30),\n" +
"  city    VARCHAR(20)\n" +
");\n" +
"\n" +
"-- secondary index on the filter column\n" +
"CREATE INDEX idx_city ON student(city);\n" +
"CREATE UNIQUE INDEX idx_aadhaar ON student(aadhaar);\n" +
"\n" +
"-- engine may now use idx_city for:\n" +
"SELECT name FROM student WHERE city = 'Bhopal';",
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When asked to 'explain B+ tree indexing', always include the height arithmetic - fanout 100 and 1 million rows give 3 levels. Numbers convince examiners that you understand WHY the structure is fast, not just what it looks like.",
            },
            diagram: {
              kind: "pyramid",
              title: "A B+ tree index on student.roll_no",
              caption: "Top to bottom: root, internal separators, linked leaves with data pointers.",
              tiers: [
                { label: "Root: keys [500, 1000] -> 3 children", note: "one page, full fanout" },
                { label: "Internal: separators guiding descent", note: "no data pointers - high fanout" },
                { label: "Leaves: (roll_no -> row pointer) entries", note: "linked left to right for range scans" },
                { label: "Data records in heap/ordered file", note: "reached only from the leaf level" },
              ],
            },
            examQuestions: [
              {
                q: "Explain primary, clustering and secondary indexes, the need for multi-level indexing, and the structure and operations (search, insert, delete) of B+ trees with the height calculation for one million records.",
                marks: 7,
                outline: [
                  "Index purpose and the scan-vs-index cost contrast.",
                  "Three index types with entry counts (sparse vs dense).",
                  "Multi-level indexing as stacked indexes.",
                  "B+ tree structure: linked leaves, internal separators, balance.",
                  "Search path and insert split behaviour.",
                  "Delete: borrow or merge.",
                  "Height arithmetic and the range-scan advantage; trade-offs.",
                ],
              },
              {
                q: "Difference between a sparse (primary) and a dense (secondary) index.",
                marks: 2,
              },
              {
                q: "Why do B+ trees support range queries better than plain B-trees?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.9",
            title: "Hashing: static and dynamic, and index-vs-hash comparison",
            body: [
              "Hashing maps a key through a hash function h(k) to a bucket number, storing the record in that bucket's page. Lookup is one hash computation plus one bucket read - O(1) expected, faster than any tree for exact-match queries. Insert lands in the computed bucket; search hashes and scans the bucket; delete removes from it. The design questions are bucket size (pages per bucket) and what to do when buckets overflow.",
              "Static hashing fixes the bucket array size in advance. Overflow handling comes in two families: open addressing - collisions stay within the array via linear probing (next slot) or quadratic probing - and chaining (overflow chaining) - each bucket keeps a linked chain of overflow pages. Problems: the hash must distribute keys uniformly (a bad function clusters records); the fixed table fills up, degrading chains into scans; and NO range queries - 'marks between 60 and 80' has no bucket, since hashing destroys key order.",
              "Dynamic hashing grows the table as data grows. Extendable hashing keeps a directory of 2^d bucket pointers and a global depth d; each bucket has local depth; on overflow the directory doubles (d + 1) and only the split bucket redistributes. Linear hashing instead splits buckets round-robin as load crosses a threshold, avoiding the directory entirely. Both keep lookup at a small constant number of reads as the file grows - the answer to static hashing's degradation.",
              "The exam-closing comparison against B+ trees: hashing wins exact-match lookups (one bucket read) and even inserts; B+ trees win range scans ('BETWEEN', ORDER BY, MIN/MAX via ordered leaves), prefix searches, and provide predictable worst-case height, while hashing's worst case degrades with bad functions and full buckets. Engines therefore use B+ trees for general-purpose indexes and hashing where only point lookups occur (join hash tables, some key-value stores). State both sides with the query shapes - WHERE city = 'X' vs WHERE marks BETWEEN 60 AND 80 - and the verdict writes itself.",
            ],
            bullets: [
              "Hash function h(k) maps keys to buckets; lookup = hash + one bucket read.",
              "Static hashing: fixed bucket array; overflow via chaining or linear/quadratic probing.",
              "Poor hash functions cluster keys and ruin performance.",
              "Static tables degrade as they fill; no range queries ever.",
              "Extendable hashing: directory of 2^d pointers, global/local depth, directory doubling on split.",
              "Linear hashing: threshold-triggered round-robin splits, no directory.",
              "Hash beats trees for point lookups; trees beat hash for ranges and ordered access.",
              "Engine practice: B+ tree default; hash for equality-only workloads.",
            ],
            keyTerms: [
              { term: "Hash function h(k)", definition: "Function mapping a key to a bucket address, ideally uniformly." },
              { term: "Bucket", definition: "A storage unit (one or more pages) holding all records hashing to the same value." },
              { term: "Overflow chaining", definition: "Linking extra pages to a full bucket to absorb collisions." },
              { term: "Extendable hashing", definition: "Dynamic scheme with a doubling directory and per-bucket local depth." },
              { term: "Linear hashing", definition: "Dynamic scheme splitting buckets in sequence as load crosses a threshold - no directory." },
            ],
            table: {
              caption: "B+ tree index vs hash index.",
              headers: ["Aspect", "B+ tree", "Hashing"],
              rows: [
                ["Point lookup", "O(log n) page reads", "O(1) expected - one bucket"],
                ["Range queries (BETWEEN, ORDER BY)", "Excellent - linked ordered leaves", "Unsupported - order destroyed"],
                ["Growth", "Balanced splits keep height low", "Needs dynamic hashing to stay fast"],
                ["Worst case", "Predictable (tree height)", "Degrades with bad hash / full buckets"],
                ["Typical use", "General-purpose indexes", "Equality-only access paths"],
              ],
            },
            callout: {
              type: "warning",
              title: "Hashing cannot do ranges",
              body: "The most common hash-question error is claiming hash indexes support BETWEEN queries. Hashing scrambles key order - adjacent keys land in unrelated buckets - so only exact-match and membership lookups work. Range work belongs to ordered structures like the B+ tree.",
            },
            diagram: {
              kind: "compare",
              title: "Indexing vs hashing: pick by query shape",
              caption: "Equality workloads hash; range and ordered workloads descend trees.",
              left: {
                heading: "B+ tree index",
                items: [
                  "Range scans via linked leaves",
                  "ORDER BY, MIN, MAX for free",
                  "Predictable O(log n) worst case",
                  "Splits and merges on write",
                  "The general-purpose default",
                ],
              },
              right: {
                heading: "Hash index",
                items: [
                  "O(1) expected point lookups",
                  "No range or order support",
                  "Needs dynamic growth to stay fast",
                  "Sensitive to hash function quality",
                  "Best for equality-only keys",
                ],
              },
            },
            examQuestions: [
              {
                q: "Explain static hashing with overflow handling (chaining and probing), describe extendable hashing's directory mechanism, and compare hashing with B+ tree indexing by query type.",
                marks: 7,
                outline: [
                  "Hash function and bucket mechanics.",
                  "Static hashing structure and its degradation.",
                  "Overflow chaining vs linear/quadratic probing.",
                  "Extendable hashing: global/local depth, directory doubling.",
                  "Linear hashing one-liner contrast.",
                  "Point lookup vs range query verdict.",
                  "Engine practice summary sentence.",
                ],
              },
              {
                q: "Why does hashing not support 'marks BETWEEN 60 AND 80'?",
                marks: 2,
              },
              {
                q: "Explain global depth and local depth in extendable hashing with a doubling example.",
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
        "RGPV DBMS papers spread roughly 60-70 percent of marks over Unit III (SQL) and Unit IV (normalization), with Unit V's transactions and indexing taking most of the rest. Unit I and II feed short questions and the design questions that anchor the long ones. Budget revision time in the same ratio.",
      ],
      weightedTopics: [
        { topic: "SQL queries: joins, nested queries, GROUP BY/HAVING", weight: "12-14 marks", note: "Write 10+ queries on one schema before the exam; show evaluation order." },
        { topic: "Normalization: FDs, closures, 1NF-BCNF, decomposition", weight: "12-14 marks", note: "One full case study practice; show every closure pass." },
        { topic: "Transactions, ACID, serializability, 2PL", weight: "8-10 marks", note: "Draw state machine and precedence graphs every time." },
        { topic: "ER modelling: cardinalities, weak entities, ISA", weight: "6-8 marks", note: "One composite university diagram rehearsed with notation." },
        { topic: "Recovery: log, UNDO/REDO, checkpoints", weight: "6-8 marks", note: "Triage table of T1/T2/T3 is the expected answer shape." },
        { topic: "B+ trees and hashing", weight: "5-7 marks", note: "Height arithmetic + index-vs-hash comparison table." },
        { topic: "Three-schema architecture, data independence, keys", weight: "5-7 marks", note: "Guaranteed short + medium questions; fast to score." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week at two hours a day, this schedule covers every unit twice - once for understanding, once for revision - and reserves the final week for full papers and the SQL drill.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I + Unit II concepts", tasks: ["File system vs DBMS, three-schema, data models", "ER diagrams: attributes, cardinalities, weak entities", "Keys ladder and integrity constraints"] },
        { week: "Week 2", focus: "Relational model + algebra", tasks: ["Relational algebra operators with the running schema", "Division, aggregation, outer joins", "Algebra-to-SQL translation drill"] },
        { week: "Week 3", focus: "Unit III - SQL", tasks: ["DDL with all constraint types", "SELECT: joins, nesting, aggregates, views", "10 queries on the university schema, annotated"] },
        { week: "Week 4", focus: "Calculi + Unit IV start", tasks: ["TRC and DRC formulas, Codd's theorem", "FDs, Armstrong's axioms, closures", "Candidate key exercises (5 tables)"] },
        { week: "Week 5", focus: "Normalization + decomposition", tasks: ["1NF-BCNF ladder with the ENROLL_ALL case", "MVD/4NF and lossless-join tests", "One full SALE_ALL case study end to end"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["ACID, serializability, 2PL, deadlock, TO", "Recovery triage + B+ tree/hashing", "Two full papers under exam time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Start every long answer with the definition sentence, then the mechanism, then the worked example - examiners grade in that order.",
        "In SQL answers, state the tables used and the join keys before writing the query; unexplained queries lose half the marks.",
        "In normalization answers, show FD list, key, and every closure pass as separate rows - process marks dominate.",
        "Always draw the requested diagram (state machine, precedence graph, B+ tree) even if the prose covers it - diagram marks are separate.",
        "For ACID, pair every property with its mechanism; for 2PL, mention the deadlock caveat unprompted.",
        "Use one consistent running schema (student/course/enroll) across all query answers - consistency reads as mastery.",
        "Time-box: 2-3 mark questions in 6 minutes, 7-mark questions in 15 minutes; SQL and normalization answers eat time - do them with a plan.",
        "Never invent RGPV year citations - write the question as asked and answer it completely instead.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Swapping degree (columns) and cardinality (rows) - the most flipped pair of definitions.",
        "Using WHERE with an aggregate (WHERE AVG(x) > 70) instead of HAVING.",
        "NOT IN against a subquery containing NULL returns nothing - use NOT EXISTS.",
        "Claiming 2PL is deadlock-free; only conservative 2PL and timestamp ordering are.",
        "Finding 'partial dependencies' in single-key tables - 2NF needs a composite key.",
        "Forgetting the prime-attribute clause when distinguishing 3NF from BCNF.",
        "Claiming hash indexes support range queries - they do not.",
        "Writing a commit mark after a crash as recoverable - committed work is only ever REDOne, never UNDOne.",
        "Drawing ER diagrams without cardinality labels or participation double lines.",
      ],
    },
  ],
};

export default ad402;
