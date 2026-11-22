/**
 * Academics - RGPV Cyber Security 7th-semester subject: CY-703(C)
 * Data Engineering.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, one
 * diagram, a table or code sample, a callout, key terms, and examiner-style
 * exam questions (7- or 14-mark, each with a 5-7 point outline).
 */

import type { AcademicSubject } from "./types";

export const cy703c: AcademicSubject = {
  id: "cy-703-c",
  code: "CY-703(C)",
  title: "Data Engineering",
  semester: "VII Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "The data engineering lifecycle as one connected discipline: from definition, evolution and maturity through source systems and the architecture spectrum (warehouse, lake, lakehouse, Lambda, Kappa), into platforms, dimensional modeling and the warehouse build, then ingestion (SFTP, webhooks, scraping), BI with Superset, and the closing operations - ETL and reverse ETL, security, logging and the future of the field.",
  description:
    "Five units walk from what data engineering is - the definition, the evolution from DBA-era ETL to platform engineering, the lifecycle with its undercurrents (security, data management, DataOps), data maturity stages and the data-management skills - through source systems and the architecture spectrum: warehouse versus lake, the lakehouse, the modern data stack, and the Lambda/Kappa choice. Unit III builds the estate: data platforms, stream-to-batch storage, catalogs and sharing, dimensional modeling with facts, dimensions and slowly changing dimensions, table DDL with schema migration, and the warehouse build. Unit IV works the ingestion and consumption edges: batch versus streaming ingestion, SFTP/SCP, webhooks, web scraping, BI with Apache Superset, visualization choices, and the governance quartet - quality, catalogs, lineage. Unit V closes on operations: ETL versus ELT, orchestrated pipelines, reverse ETL, security and privacy, patching and maintenance, logging-monitoring-alerting, and the future of data engineering.",
  accentColor: "#14b8a6",
  emoji: "DE",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Data Engineering",
      summary:
        "Unit I frames the discipline: the definition and evolution of data engineering, the data engineering lifecycle with its generation-to-serving stages, the skills and activities of the engineer, the data maturity model, the distinction between the data lifecycle and the data engineering lifecycle, security as an undercurrent, and the data-management and DataOps foundations the rest of the subject builds on.",
      chapter: {
        number: "01",
        title: "The Discipline and Its Lifecycle",
        intro:
          "Unit I covers the definition and evolution of data engineering, the data engineering lifecycle, the skills and activities of the role, data maturity, data lifecycle versus data engineering lifecycle, security, data management and DataOps - the vocabulary every later unit assumes.",
        inOneBreath:
          "Data engineering is the discipline of designing and operating systems that turn raw data into trustworthy, usable data at scale. The lifecycle runs generation -> ingestion -> storage -> transformation -> serving, with the undercurrents (security, data management, DataOps, architecture, orchestration, software engineering) running beneath every stage. Maturity is a journey from pre-adoption chaos through starting/scaling to leading - buy-then-build moves along it. The data lifecycle is the data's own journey; the engineering lifecycle is the infrastructure that carries it. Security is an undercurrent, not a stage: authentication, encryption, least privilege at every hop. Data management covers quality, lineage, cataloguing, governance; DataOps applies CI/CD thinking to pipelines.",
        sections: [
          {
            number: "1.1",
            title: "What is data engineering? Definition and evolution",
            body: [
              "Data engineering is the design, construction and operation of systems that collect, store, transform and serve data at scale for downstream consumers - analysts, data scientists, applications. The definition's working parts matter: it is a design discipline (architecture precedes code), an operations discipline (pipelines run for years, not demos), and a service discipline (the consumer's trust is the deliverable - a pipeline that is fast but wrong is a failure). The exam's one-line: data engineering turns raw data into trustworthy, usable data - the lifecycle in 1.2 is the how, this section is the what and why.",
              "The evolution arc the syllabus names: the 1980s-90s database era (OLTP systems, the rise of relational databases, the DBA as the data professional), the 2000s warehousing era (Analytics 1.0 - Kimball-style data warehouses, nightly ETL batches, the BI report as the end product), the 2010s big-data era (Analytics 2.0 - Hadoop, Spark, schema-on-read data lakes, data scientists as consumers), and the 2020s platform era (Analytics 3.0 - cloud object storage, decoupled compute, ELT, the modern data stack, data engineering as a distinct discipline with its own lifecycle). The worked contrast: a 2005 warehouse took months to provision (hardware orders, DBA installs), a 2025 warehouse takes minutes (cloud account, warehouse instance) - the provisioning-time collapse is what changed the discipline from project to product.",
              "The disciplinary boundary completes the definition: data engineering is not data science (which consumes and models), not analytics engineering (which shapes the serving layer's models), not software engineering (which builds the applications generating data) - it is the infrastructure discipline between them all, and the syllabus's lifecycle framing (1.2, 1.5) is precisely the mapping of that boundary. The closing sentence: the evolution's constant is the trust problem - every era's failure was delivering data nobody could trust, and every era's advance was an infrastructure answer to it.",
              "Exam framing: 'Define data engineering and describe its evolution' is a 7-mark opener. Give the working definition with its three disciplines, the four-era arc with the provisioning-time contrast, and close with the boundary mapping.",
            ],
            keyTerms: [
              { term: "Data engineering", definition: "Designing and operating systems that turn raw data into trustworthy, usable data at scale." },
              { term: "Analytics 1.0/2.0/3.0", definition: "Warehouse era, big-data era, cloud-platform era - the evolution's three analytics generations." },
              { term: "Schema-on-read", definition: "Structure applied at query time - the data lake's defining property." },
              { term: "Decoupled compute/storage", definition: "The cloud-era separation letting each scale independently." },
            ],
            diagram: {
              kind: "flow",
              title: "The evolution arc: four eras, one trust problem",
              caption: "Each era's failure was untrusted data; each advance was infrastructure for trust.",
              steps: [
                { label: "DB era (1980s-90s)", note: "OLTP, the DBA; data in one system" },
                { label: "Warehouse era (2000s)", note: "nightly ETL, BI reports; months to provision" },
                { label: "Big-data era (2010s)", note: "Hadoop/Spark, lakes, data scientists" },
                { label: "Platform era (2020s)", note: "cloud storage + ELT + modern stack; minutes to provision" },
              ],
            },
            bullets: [
              "Definition: collect, store, transform, serve - design, operations and service discipline in one.",
              "Deliverable is consumer trust: fast-but-wrong is a failure.",
              "Eras: DB -> warehouse (nightly ETL) -> big data (Hadoop, lakes) -> platform (cloud, ELT).",
              "Provisioning collapse: months (2005 warehouse) to minutes (2025 warehouse) - project became product.",
              "Boundary: between data science (consumes), analytics engineering (serves), software engineering (generates).",
              "Constant across eras: the trust problem.",
            ],
            callout: {
              type: "tip",
              title: "Anchor the definition in the consumer",
              body: "The definition sentence examiners reward: 'data engineering builds the infrastructure whose product is trustworthiness for downstream consumers.' Every later lifecycle stage inherits that framing - the pipeline serves the analyst, not the architecture diagram.",
            },
            table: {
              caption: "The four eras compared.",
              headers: ["Era", "Signature technology", "End product", "Provisioning time"],
              rows: [
                ["DB era", "Relational OLTP", "Operational reports", "Months"],
                ["Warehouse era", "Kimball DW, nightly ETL", "BI dashboards", "Months"],
                ["Big-data era", "Hadoop, Spark, lakes", "ML + exploration", "Weeks"],
                ["Platform era", "Cloud storage, ELT, dbt", "Trustworthy data products", "Minutes"],
              ],
            },
            examQuestions: [
              {
                q: "Define data engineering and trace its evolution across the four eras, with the provisioning contrast and the disciplinary boundary against data science and software engineering.",
                marks: 14,
                outline: [
                  "Definition: collect/store/transform/serve for downstream trust",
                  "Three disciplines: design, operations, service",
                  "Era 1-2: OLTP DBA to warehouse nightly ETL - months to provision",
                  "Era 3: Hadoop/Spark, schema-on-read lakes, data scientists",
                  "Era 4: cloud storage, ELT, modern stack - minutes to provision",
                  "Boundary: between science (consumes) and software (generates)",
                  "Constant: the trust problem across eras",
                ],
              },
              {
                q: "Why did the cloud-era provisioning collapse change data engineering from project to product?",
                marks: 7,
                outline: [
                  "Hardware-era pipelines needed months of setup - one-off projects",
                  "Cloud warehouses provision in minutes - iteration becomes cheap",
                  "Pipelines become products: versioned, monitored, owned",
                  "Consumer feedback loops shorten the trust cycle",
                  "Discipline shifts from installation to operation",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The data engineering lifecycle",
            body: [
              "The data engineering lifecycle is the discipline's canonical process: generation (where data is born - OLTP systems, IoT devices, SaaS applications), ingestion (moving it in - batch and streaming), storage (where it rests - object storage, warehouses, lakes), transformation (making it usable - cleaning, conforming, modelling), and serving (delivering value - BI, ML, analytics, reverse-ETL). The lifecycle is a loop, not a line: serving reveals quality problems that re-open transformation, ingestion failures reveal generation issues, and every rotation is an engineering iteration. The syllabus's framing matters: the lifecycle is the data engineer's process map, and every architecture decision (Units II-III) and every tool choice (Units IV-V) hangs on one of its stages.",
              "The undercurrents run beneath every stage - the lifecycle's second-order work: security (authentication, encryption, least privilege at every hop), data management (quality, lineage, cataloguing, governance), DataOps (CI/CD for pipelines, testing, observability), data architecture (the design decisions of Units II-III), orchestration (the scheduler that sequences everything), and software engineering (the code discipline that makes pipelines maintainable). The worked pipeline shows the loop: clickstream events are generated by a web app (generation), landed in a message queue (ingestion), stored in a lake (storage), conformed into a warehouse with dbt transformations (transformation), and served to a BI dashboard and an ML model (serving) - then the dashboard shows a 20% null-rate spike, the transformation tests catch the schema change, and the ingestion retry logic is fixed: one rotation, four stages touched, two undercurrents (DataOps, data management) exercised.",
              "The stage-boundary questions are the exam's favourites because they separate juniors from seniors: where does ingestion end and storage begin (the staging layer's answer: ingestion lands immutable raw; storage organizes), who owns transformation (the ELT answer: the warehouse does, with SQL tooling), and what does serving include (the reverse-ETL answer: back into operational systems). The closing sentence: the lifecycle's value is conversational - it gives the engineer, the analyst and the architect a shared map on which every problem has a stage address.",
              "Exam framing: 'Explain the data engineering lifecycle' is a 7-14 mark staple. Give the five stages with one example each, the six undercurrents with one practice each, work the clickstream rotation, and close with the shared-map sentence.",
            ],
            keyTerms: [
              { term: "Data engineering lifecycle", definition: "Generation -> ingestion -> storage -> transformation -> serving, looping back on failures." },
              { term: "Undercurrents", definition: "Security, data management, DataOps, architecture, orchestration, software engineering - running beneath every stage." },
              { term: "ELT", definition: "Load-then-transform - the warehouse itself performs the transformation." },
              { term: "Reverse ETL", definition: "Serving operational systems from the warehouse - the lifecycle's return leg." },
            ],
            diagram: {
              kind: "cycle",
              title: "The data engineering lifecycle",
              caption: "Five stages, six undercurrents; serving failures loop back to earlier stages.",
              steps: [
                { label: "Generation", note: "OLTP, IoT, SaaS sources" },
                { label: "Ingestion", note: "batch + streaming movement" },
                { label: "Storage", note: "lake, warehouse, object store" },
                { label: "Transformation", note: "clean, conform, model" },
                { label: "Serving", note: "BI, ML, reverse ETL" },
                { label: "Undercurrents", note: "security · management · DataOps · architecture" },
              ],
            },
            bullets: [
              "Stages: generation, ingestion, storage, transformation, serving - loop not line.",
              "Undercurrents: security, data management, DataOps, architecture, orchestration, software engineering.",
              "Worked rotation: clickstream -> queue -> lake -> dbt warehouse -> dashboard/ML; null-spike loop-back.",
              "Stage-boundary questions: ingestion lands immutable raw; storage organizes; warehouse transforms (ELT).",
              "Serving includes reverse ETL - value flows back into operations.",
              "Value: a shared map where every problem has a stage address.",
            ],
            callout: {
              type: "exam",
              title: "Draw the loop, then the undercurrents",
              body: "The 14-mark answer draws the five-stage cycle first and the undercurrent band beneath it second - stage questions without undercurrents read as tool lists. One rotation example (the null-spike loop) converts the diagram into evidence.",
            },
            table: {
              caption: "Stages and their signature questions.",
              headers: ["Stage", "Signature question", "Typical tools"],
              rows: [
                ["Generation", "Where is data born and in what shape?", "OLTP apps, IoT, SaaS"],
                ["Ingestion", "How does it move in, how fast, how reliably?", "Kafka, Fivetran, scripts"],
                ["Storage", "Where does it rest and in what format?", "S3, warehouse, lake"],
                ["Transformation", "Is it clean, conformed, modelled?", "dbt, Spark SQL"],
                ["Serving", "Who consumes it and how?", "BI, ML, reverse ETL"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the data engineering lifecycle: the five stages with examples, the six undercurrents with practices, a worked rotation, and the stage-boundary questions.",
                marks: 14,
                outline: [
                  "Stages: generation, ingestion, storage, transformation, serving",
                  "One example per stage (app, queue, lake, dbt, dashboard)",
                  "Undercurrents: security, management, DataOps, architecture, orchestration, software engineering",
                  "Worked rotation: clickstream null-spike loops back to ingestion",
                  "Boundaries: immutable raw landing; ELT in-warehouse transformation",
                  "Serving includes reverse ETL",
                  "Shared-map closing sentence",
                ],
              },
              {
                q: "Why are the undercurrents described as second-order work rather than pipeline stages?",
                marks: 7,
                outline: [
                  "They apply at every stage simultaneously, not sequentially",
                  "Security spans ingestion through serving - not one hop",
                  "Data management is continuous, not a step",
                  "Treating them as stages leaves gaps between stages",
                  "Hence the band-beneath-the-cycle framing",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Skills and activities of the data engineer",
            body: [
              "The data engineer's skills stack in three layers the syllabus's 'skills and activities' separates. The technical base: SQL fluency (the discipline's lingua franca - window functions, CTEs, incremental logic), one general-purpose language (Python for pipelines, tooling and glue), storage and compute mechanics (partitioning, indexing, file formats - Parquet, ORC), orchestration (Airflow-class scheduling), and the cloud primitives (object storage, IAM, queues). The data layer: data modelling (dimensional and modern-warehouse patterns), pipeline design (batch vs streaming trade-offs), data quality engineering (tests, contracts, observability), and the governance tooling (catalogs, lineage). The soft layer: stakeholder translation (the analyst's question to the pipeline design), cost consciousness (cloud bills are the pipeline's budget), and documentation (the catalog entry is the deliverable, not the code).",
              "The worked activity breakdown shows a real week: 30% transformation development (dbt models, tests), 20% pipeline operations (failures, retries, backfills - the Tuesday-morning incident is data engineering's heartbeat), 15% stakeholder work (requirements, catalog reviews), 15% architecture and design (the new source's ingestion decision), 10% governance (quality dashboards, lineage updates), 10% platform hygiene (cost reviews, access audits). The exam's analysis point: the operations share surprises juniors - pipelines fail on dependency drift, schema changes, volume spikes - and the seniority difference is designing for failure (idempotent tasks, replayable logic, alerts that page with context).",
              "The skill-to-stage mapping ties the section to the lifecycle: generation demands source-system literacy (reading other people's schemas), ingestion demands transport mechanics (Kafka, CDC), storage demands format and cost engineering, transformation demands SQL and modelling, serving demands BI/ML literacy - and every stage demands the undercurrent skills (security reviews, tests, documentation). The closing sentence: the discipline's hiring profile is T-shaped - broad lifecycle literacy, one or two deep specialties - and the exam rewards answers that organize skills by lifecycle stage rather than by job posting.",
              "Exam framing: 'Explain the skills and activities of a data engineer' is a 7-14 mark staple. Give the three skill layers with specifics, the worked weekly-activity percentages, and close with the skill-to-stage mapping sentence.",
            ],
            keyTerms: [
              { term: "CDC", definition: "Change Data Capture - streaming row-level changes from a source database." },
              { term: "Idempotency", definition: "Re-running a task produces the same result - the pipeline's failure-safety property." },
              { term: "Backfill", definition: "Reprocessing historical data after logic or schema changes." },
              { term: "T-shaped profile", definition: "Broad lifecycle literacy with one or two deep specialties." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The data engineer's skill stack",
              caption: "Technical base, data layer, soft layer - each stage of the lifecycle draws on all three.",
              tiers: [
                { label: "Soft layer", note: "stakeholder translation, cost consciousness, documentation" },
                { label: "Data layer", note: "modelling, pipeline design, quality engineering, governance tooling" },
                { label: "Technical base", note: "SQL, Python, storage/compute, orchestration, cloud primitives" },
              ],
            },
            bullets: [
              "Technical base: SQL fluency, Python, storage mechanics (Parquet, partitioning), orchestration, cloud primitives.",
              "Data layer: modelling, batch-vs-streaming design, quality engineering, catalog/lineage tooling.",
              "Soft layer: stakeholder translation, cost consciousness, documentation-as-deliverable.",
              "Worked week: 30% transformations, 20% operations, 15% stakeholders, 15% design, 10% governance, 10% hygiene.",
              "Operations share surprises juniors: design for failure - idempotency, replay, contextual alerts.",
              "Skill-to-stage mapping across the lifecycle with undercurrent skills spanning all stages.",
            ],
            callout: {
              type: "exam",
              title: "The Tuesday-morning incident",
              body: "The activity sentence examiners remember: 'operations - failures, retries and backfills - is data engineering's heartbeat, and seniority is designing for failure.' Quote the worked week's 20% and the T-shaped closing.",
            },
            table: {
              caption: "Skill-to-stage mapping.",
              headers: ["Lifecycle stage", "Dominant skills", "Signature activity"],
              rows: [
                ["Generation", "Source-system literacy", "Reading other teams' schemas"],
                ["Ingestion", "Transport mechanics, CDC", "Kafka topics, Fivetran connectors"],
                ["Storage", "Format + cost engineering", "Partitioning, Parquet compaction"],
                ["Transformation", "SQL, modelling, testing", "dbt models + tests"],
                ["Serving", "BI/ML literacy", "Dashboard + feature pipelines"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the data engineer's skills and activities: the three-layer stack, the worked weekly breakdown, the operations share and failure design, and the skill-to-stage mapping.",
                marks: 14,
                outline: [
                  "Technical base: SQL, Python, storage, orchestration, cloud",
                  "Data layer: modelling, pipeline design, quality, governance",
                  "Soft layer: translation, cost, documentation",
                  "Worked week percentages incl. 20% operations",
                  "Failure design: idempotency, replay, contextual alerts",
                  "Mapping across the five lifecycle stages",
                  "T-shaped closing",
                ],
              },
              {
                q: "Why is idempotency the core property of a production pipeline task?",
                marks: 7,
                outline: [
                  "Tasks fail and re-run - guaranteed in production",
                  "Non-idempotent re-runs duplicate or corrupt data",
                  "Idempotent tasks make retries safe by construction",
                  "Backfills reuse the same property",
                  "Design-for-failure begins here",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Data maturity",
            body: [
              "Data maturity is the measure of how well an organization's data practices serve its goals - and the syllabus's model (Reis & Housley's) runs in stages: stage 0 (pre-adoption - data-illiterate, spreadsheets and hope), stage 1 (starting - the first warehouse, a small team, the quick-win era where every dashboard is magic), stage 2 (scaling - the pain era: tool sprawl, quality debt, the warehouse that everyone uses and nobody trusts), and stage 3 (leading - data as a product: contracts, quality SLOs, self-service, the platform teams build on). The model's first principle: maturity is a journey, not a destination - organizations oscillate, regress on team changes, and the engineer's job is moving the needle without breaking what works.",
              "The worked stage diagnosis shows the skill: an organization with 40 dashboards, 12 ETL tools, no lineage and a 'data team' of three serving 200 users is stage 2-scaling - the diagnosis from symptoms (tool sprawl = ingestion-by-Shiny-Object; no lineage = trust debt; dashboard-to-engineer ratio = serving overload). The stage-appropriate prescription: not stage-3 tooling (a data catalog nobody will fill) but stage-2 discipline (one ingestion tool standard, dbt tests on the 20 critical tables, a lineage pilot on one domain) - the maturity-matched response that examiners reward over tool-shopping answers.",
              "The buy-versus-build dial is maturity's practical expression: stage 1 buys nearly everything (managed warehouses, SaaS ingestion), stage 2 buys platforms and builds glue, stage 3 builds differentiating products and buys commodity plumbing - and the dial's failure modes are building what should be bought (the homegrown scheduler) and buying what should be built (the core domain model as a vendor product). The closing sentence: data maturity is organizational, not technological - the same tool is a force multiplier at stage 3 and a liability at stage 1, and reading the stage correctly is the engineer's first architectural act.",
              "Exam framing: 'Explain data maturity and its stages' is a 7-14 mark staple. Give the four stages with symptoms, work the stage-2 diagnosis with its matched prescription, and close with the buy-build dial and the organizational sentence.",
            ],
            keyTerms: [
              { term: "Data maturity", definition: "How well data practices serve goals - a journey through starting, scaling, leading." },
              { term: "Quick-win era", definition: "Stage 1's magic phase - before quality debt arrives." },
              { term: "Trust debt", definition: "Dashboards nobody believes - the stage-2 symptom." },
              { term: "Buy-build dial", definition: "Maturity decides what to buy (commodity) and build (differentiating)." },
            ],
            diagram: {
              kind: "fork",
              title: "Diagnosing the stage from symptoms",
              caption: "Read the symptoms, match the prescription - tool-shopping at the wrong stage is the failure.",
              start: "What does the estate look like?",
              branches: [
                { label: "Spreadsheets, no warehouse", outcome: "stage 0/1: buy everything, deliver quick wins, standardize one tool", good: true },
                { label: "Tool sprawl + trust debt", outcome: "stage 2: discipline - one ingestion standard, tests on critical tables, lineage pilot", good: true },
                { label: "Contracts + self-service", outcome: "stage 3: build differentiators, buy commodity plumbing", good: true },
                { label: "Stage-3 tooling at stage 1", outcome: "catalog nobody fills - the mismatch failure", good: false },
              ],
            },
            bullets: [
              "Stages: 0 pre-adoption, 1 starting (quick wins), 2 scaling (pain), 3 leading (data as product).",
              "Maturity is a journey - organizations oscillate and regress.",
              "Worked diagnosis: 40 dashboards + 12 tools + no lineage + 3 engineers = stage 2.",
              "Stage-matched prescription: standards and tests, not stage-3 tooling.",
              "Buy-build dial: buy commodity, build differentiators - matched to stage.",
              "Same tool, different verdict per stage: organizational, not technological.",
            ],
            callout: {
              type: "warning",
              title: "Tool-shopping at the wrong stage",
              body: "The diagnosis sentence examiners reward: 'a data catalog at stage 1 is shelfware; dbt tests at stage 2 are the highest-leverage buy.' Maturity mismatch is the most expensive mistake in the discipline - the prescription must match the stage.",
            },
            table: {
              caption: "The maturity stages and their prescriptions.",
              headers: ["Stage", "Symptoms", "Prescription"],
              rows: [
                ["0 Pre-adoption", "Spreadsheets, gut decisions", "First warehouse, one reliable pipeline"],
                ["1 Starting", "Quick wins, small team", "Buy managed tools; standardize one stack"],
                ["2 Scaling", "Tool sprawl, trust debt", "Standards, tests, lineage pilot, cost control"],
                ["3 Leading", "Contracts, self-service", "Data products, SLOs, platform engineering"],
              ],
            },
            examQuestions: [
              {
                q: "Explain data maturity: the four stages with symptoms, the worked stage-2 diagnosis and matched prescription, the buy-build dial, and the organizational closing.",
                marks: 14,
                outline: [
                  "Stages 0-3 with signature symptoms",
                  "Journey framing: oscillation and regression",
                  "Worked diagnosis: 40 dashboards, 12 tools, no lineage",
                  "Matched prescription vs tool-shopping",
                  "Buy-build dial per stage",
                  "Mismatch failure: catalog at stage 1",
                  "Organizational-not-technological closing",
                ],
              },
              {
                q: "Why does the same tool succeed at stage 3 and fail at stage 1?",
                marks: 7,
                outline: [
                  "Stage 1 lacks the practices that feed the tool",
                  "Catalogs need stewards; contracts need producers",
                  "Tooling amplifies maturity, it does not create it",
                  "Stage-1 teams should standardize before diversifying",
                  "Maturity is organizational capital, not licences",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Data lifecycle versus data engineering lifecycle",
            body: [
              "The syllabus pairs two lifecycles that juniors merge, and the distinction is structural: the data lifecycle is the data's own journey from creation to deletion - created by some system, used for purposes, copied to copies, archived, and eventually deleted (or not - the retention-failure reality); the data engineering lifecycle is the infrastructure discipline that carries the data's journey - the five stages and six undercurrents of 1.2. The mapping: every stage of the data's lifecycle rides some stage of the engineering lifecycle - the data's creation is the engineering generation stage, its copies are ingestion and storage, its uses are serving, and its deletion is an engineering duty (retention jobs) that most estates omit.",
              "The worked distinction shows the two clocks: a customer's email address is created at signup (data lifecycle: birth; engineering lifecycle: generation -> ingestion -> storage), used for transactional mail and marketing (data: purpose phases; engineering: serving to two consumers), copied to three systems (data: proliferation - the copies nobody tracks; engineering: pipeline replicas with lineage), and deleted on request (data: the right-to-erasure; engineering: the retention job across the copies - which is where most estates fail: the main warehouse deletes, the backup and the vendor's SaaS copy do not). The exam's analysis: the data lifecycle's deletion step is an engineering-lifecycle obligation spanning every stage that ever touched the datum - which is why erasure is an architecture problem, not a DELETE statement.",
              "The governance consequence closes the section: the data lifecycle is what privacy law regulates (purpose, retention, deletion - Unit IV's concepts in the sibling subject), the engineering lifecycle is what the discipline operates - and the engineer's dual duty is knowing where every copy lives (lineage) and making deletion a designed pipeline rather than an afterthought. The closing sentence: two lifecycles, one discipline - the data's journey is the law's subject, the engineering lifecycle is the instrument that makes the journey governable.",
              "Exam framing: 'Differentiate the data lifecycle from the data engineering lifecycle' is a 7-14 mark staple. Define both, work the email-address two-clock example through its erasure failure, and close with the dual-duty sentence.",
            ],
            keyTerms: [
              { term: "Data lifecycle", definition: "The data's journey: creation -> use -> copies -> archive -> deletion." },
              { term: "Retention job", definition: "The engineered deletion across every copy - erasure as pipeline." },
              { term: "Lineage", definition: "The map of where data came from and where every copy went." },
              { term: "Right to erasure", definition: "The privacy right whose engineering answer is the retention job." },
            ],
            diagram: {
              kind: "compare",
              title: "Two lifecycles, one discipline",
              caption: "The data's journey is the law's subject; the engineering lifecycle is the instrument.",
              left: {
                heading: "Data lifecycle (the data's journey)",
                items: [
                  "Created at signup",
                  "Used for purposes (mail, marketing)",
                  "Copied - proliferation nobody tracks",
                  "Deleted on request - or not",
                ],
              },
              right: {
                heading: "Engineering lifecycle (the carrier)",
                items: [
                  "Generation -> ingestion -> storage",
                  "Transformation -> serving (two consumers)",
                  "Pipeline replicas with lineage",
                  "Retention job across every copy",
                ],
              },
            },
            bullets: [
              "Data lifecycle: creation -> use -> copies -> archive -> deletion - the law's subject.",
              "Engineering lifecycle: the five stages + undercurrents - the operating instrument.",
              "Worked two-clock: email created, used for two purposes, copied to three systems, erasure requested.",
              "Erasure failure: main warehouse deletes; backup and vendor SaaS copy do not.",
              "Deletion is an architecture problem spanning every stage that touched the datum.",
              "Dual duty: lineage (know every copy) + retention jobs (deletion as pipeline).",
            ],
            callout: {
              type: "warning",
              title: "Erasure is an architecture problem",
              body: "The failure case examiners reward: 'the warehouse deleted the row; the backup, the vendor's SaaS and the analytics snapshot did not - the right to erasure fails on the copies nobody mapped.' Lineage plus retention jobs is the engineering answer.",
            },
            table: {
              caption: "The two clocks of one email address.",
              headers: ["Event", "Data lifecycle view", "Engineering lifecycle duty"],
              rows: [
                ["Signup", "Data born", "Generation + ingestion captured it"],
                ["Marketing use", "Purpose phase", "Serving to marketing consumer"],
                ["Three copies", "Proliferation", "Lineage maps every replica"],
                ["Erasure request", "Right exercised", "Retention job across ALL copies"],
              ],
            },
            examQuestions: [
              {
                q: "Differentiate the data lifecycle and the data engineering lifecycle: definitions, the worked two-clock email example with its erasure failure, and the dual-duty closing.",
                marks: 14,
                outline: [
                  "Data lifecycle: the data's journey, the law's subject",
                  "Engineering lifecycle: the carrier with undercurrents",
                  "Worked: email born, used, copied x3, erasure requested",
                  "Failure: warehouse deletes; backup + vendor SaaS do not",
                  "Deletion spans every touching stage",
                  "Dual duty: lineage + retention jobs",
                  "One discipline, two clocks",
                ],
              },
              {
                q: "Why does lineage become a privacy obligation, not just a governance nicety?",
                marks: 7,
                outline: [
                  "Erasure duties apply to every copy of personal data",
                  "You cannot delete what you cannot locate",
                  "Lineage is the copy map",
                  "Regulators increasingly ask for it by name",
                  "Without lineage, erasure is partial and non-compliant",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Security as an undercurrent of the lifecycle",
            body: [
              "Security in the data engineering lifecycle is an undercurrent, not a stage - and the syllabus's placement is the design lesson: every hop of generation-to-serving carries its own security duty. The per-stage duties: generation (least-privilege access to source systems - the extraction account sees one schema, not the database), ingestion (encrypted transport, secret management - credentials in vaults, never in code), storage (encryption at rest, access control per zone - the raw zone is engineer-only, the curated zone analyst-readable), transformation (audit-logged execution, tested access), and serving (row/column-level authorization, masking of PII in non-prod). The worked access model: three-zone storage (raw/curated/consumption) with zone-to-role mapping, column masking on the PII columns in the consumption zone, and service accounts per pipeline with scoped credentials - the undercurrent made architectural.",
              "The worked failure case shows the undercurrent's necessity: a junior's pipeline embeds the production database password in a git-committed config (secret-management failure), the extraction account has full-database read (least-privilege failure), and the raw zone is world-readable in the warehouse (zoning failure) - one leaked repo later, the attacker reads everything. Three undercurrent duties, three failures, one breach; the fix is the trio: vault-managed secrets with rotation, scoped extraction accounts, zone-based access. The exam's sentence: security failures in data engineering are almost always configuration, not cryptography - the vault, the scope and the zone are the discipline.",
              "The privacy tie completes the undercurrent: data engineering security serves the data lifecycle's duties (1.5's erasure and retention), the classification tiers (which columns are PII), and the masking that makes non-production environments safe - the engineer's security work is the privacy programme's implementation arm. The closing sentence: the undercurrent framing exists because security done at one stage is a lock on one door - the lifecycle has six doors, and every one needs its key.",
              "Exam framing: 'Explain security in the data engineering lifecycle' is a 7-14 mark staple. Give the per-stage duties with the three-zone access model, work the three-failure breach case, and close with the privacy-tie and six-doors sentence.",
            ],
            keyTerms: [
              { term: "Zone model", definition: "Raw/curated/consumption storage zones with role-based access." },
              { term: "Secret management", definition: "Vault-managed, rotated credentials - never in code." },
              { term: "Column masking", definition: "PII hidden or tokenized for non-privileged consumers." },
              { term: "Scoped service account", definition: "Per-pipeline credentials seeing only what that pipeline needs." },
            ],
            diagram: {
              kind: "layers",
              title: "The three-zone access model",
              caption: "Each zone narrows access; PII masks only lift in the consumption zone by role.",
              layers: [
                { label: "Consumption zone", note: "analyst-readable; PII masked by role" },
                { label: "Curated zone", note: "modelled, conformed tables; team access" },
                { label: "Raw zone", note: "immutable landed data; engineer-only" },
                { label: "Vault + IAM", note: "secrets and scoping beneath all zones" },
              ],
            },
            bullets: [
              "Per-stage duties: scoped source accounts, encrypted transport + vault secrets, zone access, audited execution, masked serving.",
              "Worked model: three zones with role mapping, column masking in consumption, per-pipeline service accounts.",
              "Failure case: password in git + full-read extraction account + world-readable raw zone = one breach, three failures.",
              "Fix trio: vault with rotation, scoped accounts, zone-based access.",
              "Privacy tie: security implements classification, masking, retention and erasure.",
              "Closing: security at one stage is a lock on one door - six doors, six keys.",
            ],
            callout: {
              type: "exam",
              title: "Configuration, not cryptography",
              body: "The undercurrent sentence: 'data-engineering breaches are configuration failures - the password in git, the unscoped account, the open zone - not broken cryptography.' The three-failure case is the demonstration; the fix trio is the answer.",
            },
            table: {
              caption: "Per-stage security duties.",
              headers: ["Stage", "Duty", "Control"],
              rows: [
                ["Generation", "Scoped source access", "Read-only extraction account, one schema"],
                ["Ingestion", "Transport + secrets", "TLS, vault-managed rotated creds"],
                ["Storage", "Zone access + encryption", "Raw/curated/consumption + at-rest encryption"],
                ["Transformation", "Audited execution", "Job logs, tested access"],
                ["Serving", "Masked delivery", "Row/column policies, PII masking"],
              ],
            },
            examQuestions: [
              {
                q: "Explain security as a lifecycle undercurrent: per-stage duties, the three-zone model, the worked three-failure breach, and the privacy tie.",
                marks: 14,
                outline: [
                  "Duties per stage: scope, vault, zones, audit, masking",
                  "Three-zone access model with role mapping",
                  "Failure case: git password + full-read account + open zone",
                  "Fix trio: vault/rotation, scoped accounts, zones",
                  "Privacy tie: classification, masking, retention, erasure",
                  "Configuration-not-cryptography sentence",
                  "Six doors, six keys closing",
                ],
              },
              {
                q: "Why do per-pipeline service accounts beat a shared admin credential?",
                marks: 7,
                outline: [
                  "Blast radius: one compromised pipeline leaks one scope",
                  "Attribution: logs identify which pipeline acted",
                  "Rotation is independent per pipeline",
                  "Least privilege is enforceable per scope",
                  "Shared credentials make both blast radius and audit impossible",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Data management and DataOps",
            body: [
              "The unit's closing pair names the undercurrents that make pipelines trustworthy and maintainable. Data management is the governance discipline: data quality (the dimensions - accuracy, completeness, timeliness, consistency - measured as tests and SLOs), metadata and catalogs (the searchable inventory of what data exists), lineage (the copy map of 1.5), master data management (the single definition of customer, product - the entity that ten systems each define differently), and the policies that bind them (retention, access, classification). The worked quality system: dbt tests on the 50 critical tables (not-null, uniqueness, freshness, referential integrity), freshness SLOs per table ('orders table within 15 minutes of source commit 99.5% of days'), and the quality dashboard the consumers see - trust as a measured artefact, not a promise.",
              "DataOps applies software-engineering discipline to data pipelines: version control for everything (models, tests, configs), CI/CD for data (tests run on every change; bad merges blocked), environment separation (dev/staging/prod data), automated testing (unit tests on transformation logic, data tests on outputs), observability (pipeline metrics: duration, volume, freshness - the anomaly detection that pages before the analyst notices), and the deployment discipline (small, reversible changes). The worked DataOps incident: a schema change in the source breaks a transformation - the CI suite catches it in staging before deploy (tests fail, merge blocked), the source team is notified with the exact failing test, and production never saw the break - the DataOps difference is the break that did not happen.",
              "The pairing's division of labour is the exam's analysis: data management defines what good data is (quality dimensions, master definitions, governance policies); DataOps builds the machinery that keeps it good (tests in CI, observability, deployment discipline) - one is the constitution, the other the enforcement. The closing sentence: pipelines fail for organisational reasons more than technical ones - the handoffs, the schema drift, the nobody-owns-this-table - and data management plus DataOps is the discipline's answer to the organisation, not just the code.",
              "Exam framing: 'Explain data management and DataOps' is a 7-14 mark closer. Give the management components with the worked quality system (50 tables, freshness SLO), the DataOps practices with the caught-in-staging incident, and close with the constitution-versus-enforcement sentence.",
            ],
            keyTerms: [
              { term: "Data quality dimensions", definition: "Accuracy, completeness, timeliness, consistency - measured, not asserted." },
              { term: "Freshness SLO", definition: "A measured promise: how stale the table may be, what fraction of days." },
              { term: "Master data management", definition: "The single definition of shared entities across systems." },
              { term: "Data observability", definition: "Pipeline metrics (duration, volume, freshness) watched for anomalies." },
            ],
            diagram: {
              kind: "compare",
              title: "Data management vs DataOps",
              caption: "The constitution and the enforcement - one defines good, the other keeps it good.",
              left: {
                heading: "Data management (defines good)",
                items: [
                  "Quality dimensions measured as tests + SLOs",
                  "Catalogs and lineage: what exists, where copies went",
                  "MDM: one definition of customer and product",
                  "Policies: retention, access, classification",
                ],
              },
              right: {
                heading: "DataOps (keeps it good)",
                items: [
                  "Version control + CI/CD for pipelines",
                  "Tests in staging block bad merges",
                  "Observability pages before analysts notice",
                  "Small, reversible deployments",
                ],
              },
            },
            bullets: [
              "Management: quality dimensions, catalogs, lineage, MDM, governance policies.",
              "Worked quality system: dbt tests on 50 critical tables + freshness SLOs + consumer-visible dashboard.",
              "DataOps: version control, CI/CD, environments, automated tests, observability, reversible deploys.",
              "Worked incident: schema break caught in staging - production never saw it.",
              "Division: management is the constitution, DataOps the enforcement.",
              "Closing: pipelines fail organizationally - the pair answers the organisation.",
            ],
            callout: {
              type: "tip",
              title: "Trust is measured, not promised",
              body: "The management sentence examiners want: 'a freshness SLO (orders within 15 minutes, 99.5% of days) converts trust from a promise into a measured artefact.' Pair it with the caught-in-staging incident and DataOps becomes evidence.",
            },
            table: {
              caption: "The quality dimensions and their tests.",
              headers: ["Dimension", "Question", "Test class"],
              rows: [
                ["Accuracy", "Does it reflect reality?", "Reference comparisons, ranges"],
                ["Completeness", "Is anything missing?", "Not-null, row-count deltas"],
                ["Timeliness", "Is it fresh enough?", "Freshness SLOs"],
                ["Consistency", "Do systems agree?", "Referential + cross-system checks"],
                ["Uniqueness", "Any duplicates?", "Uniqueness keys"],
              ],
            },
            examQuestions: [
              {
                q: "Explain data management and DataOps: the management components with the worked quality system, the DataOps practices with the caught-in-staging incident, and the constitution-versus-enforcement closing.",
                marks: 14,
                outline: [
                  "Management: quality, catalogs, lineage, MDM, policies",
                  "Worked quality: 50 tables, freshness SLO, dashboard",
                  "DataOps: VCS, CI/CD, environments, tests, observability",
                  "Incident: schema break blocked in staging",
                  "Division: constitution vs enforcement",
                  "Organizational failure modes the pair answers",
                  "Measured-trust closing",
                ],
              },
              {
                q: "Why do pipelines fail more for organizational than technical reasons?",
                marks: 7,
                outline: [
                  "Schema drift comes from uncoordinated source teams",
                  "Unowned tables rot without stewards",
                  "Handoff gaps lose quality context",
                  "Tests and lineage are organizational contracts",
                  "DataOps/management industrialize those contracts",
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
      title: "Source Systems and Data Architecture",
      summary:
        "Unit II covers source systems and their design considerations, the architecture spectrum - warehouse, lake and lakehouse - the modern data stack, and the Lambda and Kappa patterns for combining complete history with fresh views.",
      chapter: {
        number: "02",
        title: "Sources and the Architecture Spectrum",
        intro:
          "Unit II covers the types of data architecture - warehouse, lake, lakehouse - the modern data stack, Lambda architecture and Kappa architecture, with source systems as the substrate every pattern lands on.",
        inOneBreath:
          "Sources divide OLTP, SaaS, logs, files and third-party - each with a contract (consistency, rate limits, drift, chaos); assess with the scorecard before designing. The architecture spectrum is a schema-timing dial: warehouse (schema-on-write, modelled, 3-5x storage cost), lake (schema-on-read, ~USD 23/TB, swamp risk), lakehouse (table formats adding ACID, time travel, schema enforcement on object storage). The modern data stack buys plumbing (managed connectors, cloud center) and builds logic (dbt, 400 models, 1,200 tests). Lambda splits completeness (batch, 4 h) from freshness (speed, 2-5 s) at the cost of two codebases; Kappa replays one immutable log instead - one codebase, no drift.",
        sections: [
          {
            number: "2.1",
            title: "Source systems: types and design considerations",
            body: [
              "Source systems are where data is born, and the syllabus's 'source systems' topic is the engineer's reading of other people's systems. The types: OLTP databases (the operational heart - orders, users, transactions; row-oriented, write-optimized, normalized), SaaS applications (Salesforce, Zendesk, payment processors - data behind vendor APIs and rate limits), logs and event streams (application logs, clickstream, IoT telemetry - append-only, voluminous, timestamped), files (CSV dumps, SFTP drops, partner feeds - the format chaos class), and third-party datasets (reference data, weather, demographics). Each type carries its own contract: OLTP gives consistency but punishes heavy reads (the extraction job that locks the order table), SaaS gives clean APIs but rate limits and stale snapshots, logs give volume but schema drift, files give everything and guarantee nothing.",
              "The design considerations are the syllabus's checklist for consuming sources: what data is available and at what granularity (row-level events vs aggregates), how fresh the source allows (CDC streams vs nightly dumps), what load the source tolerates (the production DB that crashes under a full-table scan), how the source changes (schema evolution policy, deprecations), and who owns it (the source team's contract - the handoff that Unit 1.7's organizational failures live in). The worked reading of one source: the orders OLTP database - read replica available (load tolerable), CDC-enabled (row-level changes, near-real-time), schema versioned by the platform team (evolution manageable), owner responsive (contract exists) - four green checkboxes; the marketing SaaS - API rate limit 100 calls/minute, no historical backfill, undocumented custom fields - three red flags that shape the ingestion design (daily snapshot, field allow-list, owner conversation).",
              "The evaluation discipline completes the section: source systems are assessed before ingestion is designed - a source-scorecard (availability, freshness, load tolerance, schema stability, ownership) per system, with the red-flag conversation before the pipeline is built rather than after it breaks. The closing sentence: the data engineer's first architectural act is reading the source correctly - every pipeline failure traces to a source property somebody did not check.",
              "Exam framing: 'Explain source systems and their design considerations' is a 7-14 mark opener. Give the five types with their contracts, the five-item checklist, and the two-source worked reading with its green/red flags.",
            ],
            keyTerms: [
              { term: "OLTP", definition: "Online transaction processing - write-optimized operational systems, the dominant source type." },
              { term: "Source contract", definition: "The ownership and change agreement between source team and data team." },
              { term: "Rate limit", definition: "API call ceilings - the SaaS ingestion constraint." },
              { term: "Source scorecard", definition: "Availability, freshness, load, schema stability, ownership - assessed before design." },
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a source's ingestion posture",
              caption: "Plot each source by freshness and trust - the posture follows the quadrant.",
              axes: { x: "Source trust (red flags -> green flags)", y: "Freshness needed (daily -> real-time)" },
              quadrants: [
                { label: "Daily snapshot", note: "trusted-but-slow sources; batch landing" },
                { label: "CDC stream", note: "trusted + real-time: row-level change capture" },
                { label: "Allow-list + field audit", note: "red-flag sources regardless of freshness" },
                { label: "Do not ingest yet", note: "no owner + no backfill - conversation first" },
              ],
            },
            bullets: [
              "Types: OLTP databases, SaaS apps, logs/event streams, files, third-party datasets - each with its own contract.",
              "OLTP gives consistency, punishes heavy reads; SaaS gives APIs with rate limits; logs give volume with drift; files give chaos.",
              "Checklist: granularity, freshness allowed, load tolerance, schema evolution, ownership.",
              "Worked green source: replica + CDC + versioned schema + responsive owner.",
              "Worked red source: 100 calls/min rate limit + no backfill + undocumented fields -> snapshot design.",
              "Discipline: scorecard before pipeline - failures trace to unchecked source properties.",
            ],
            callout: {
              type: "tip",
              title: "Read the source before designing the pipe",
              body: "The section's rule: 'every pipeline failure traces to a source property somebody did not check.' The scorecard conversation happens before the connector is built - the red-flag source gets a design conversation, not an outage.",
            },
            table: {
              caption: "Source types and their contracts.",
              headers: ["Type", "Gives", "Costs"],
              rows: [
                ["OLTP database", "Consistent, granular rows", "Load sensitivity - reads hurt production"],
                ["SaaS application", "Clean APIs, structured objects", "Rate limits, no backfill, opaque fields"],
                ["Logs / events", "Volume, real-time signal", "Schema drift, volume cost"],
                ["Files", "Anything, any format", "No schema guarantees, late arrivals"],
                ["Third-party data", "Reference enrichment", "Licensing, update cadence"],
              ],
            },
            examQuestions: [
              {
                q: "Explain source systems: the five types with their contracts, the design-consideration checklist, and the two-source worked reading.",
                marks: 14,
                outline: [
                  "Types: OLTP, SaaS, logs/events, files, third-party",
                  "Contract per type: consistency vs rate limits vs drift vs chaos",
                  "Checklist: granularity, freshness, load, schema evolution, ownership",
                  "Worked green: replica, CDC, versioned schema, responsive owner",
                  "Worked red: rate limit, no backfill, undocumented fields",
                  "Red flags shape design: snapshot + allow-list + conversation",
                  "Scorecard-before-pipeline closing",
                ],
              },
              {
                q: "Why does a full-table scan on a production OLTP database cause incidents?",
                marks: 7,
                outline: [
                  "OLTP is write-optimized with row-level locks",
                  "Scans contend with transactions and inflate lock times",
                  "Read replicas exist precisely to absorb analytics load",
                  "CDC avoids scanning entirely",
                  "Hence source load tolerance is a design input",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Types of data architecture: warehouse, lake and lakehouse",
            body: [
              "The architecture spectrum is the syllabus's organizing map: the data warehouse (schema-on-write - structured, modelled, query-optimized; the decision-support incumbent since Kimball), the data lake (schema-on-read - raw, cheap object storage holding everything in native formats), and the data lakehouse (the 2020s synthesis - ACID table formats on object storage giving lakes warehouse-grade reliability). The spectrum's driver is the schema-timing trade: warehouses force structure early (clean but rigid, ingestion-costly), lakes defer structure (cheap and flexible, but query-fragile without discipline), lakehouses aim for both (raw-landing with Delta/Iceberg/Hudi table formats adding transactions, time travel and schema enforcement).",
              "The worked spectrum tour with costs: the warehouse path - a retail firm's sales facts modelled in star schema, queries in milliseconds, but every new source needs modelling before load (the 6-week ingestion lead time) and semi-structured data (JSON events) is painful; the lake path - everything lands as Parquet in S3 at ~USD 23/TB/month, exploration is free-form, but 'just query the lake' returns 40-minute scans and no transactions (the data swamp risk); the lakehouse path - the same S3 with Delta tables, ACID upserts for CDC, time travel for audits, Spark/warehouse engines on top - the modern default where both workloads matter. The numbers anchor the trade: warehouse storage at cloud pricing runs 3-5x object storage; lake query performance without tuning runs 10-100x worse than a modelled warehouse.",
              "The selection rule completes the spectrum: choose by workload mix and team discipline - BI-heavy with stable schemas picks the warehouse, ML/exploration-heavy with strong engineering picks the lake, mixed workloads with transactional needs pick the lakehouse; and the honest note: most modern estates are hybrids - lake for landing and ML features, warehouse or lakehouse serving for BI. The closing sentence: the architecture spectrum is a schema-timing dial, and the workload mix sets the dial position.",
              "Exam framing: 'Explain the types of data architecture' is a 7-14 mark staple. Define warehouse/lake/lakehouse with the schema-timing driver, work the cost-performance contrast with numbers, and close with the selection rule.",
            ],
            keyTerms: [
              { term: "Schema-on-write", definition: "Structure enforced at ingestion - the warehouse property." },
              { term: "Schema-on-read", definition: "Structure applied at query time - the lake property." },
              { term: "Table format", definition: "Delta/Iceberg/Hudi - ACID, time travel, schema enforcement on object storage." },
              { term: "Data swamp", definition: "A lake without governance: unfindable, untrusted, unusable." },
            ],
            diagram: {
              kind: "compare",
              title: "Warehouse vs lake on the schema-timing dial",
              caption: "Structure early costs flexibility; structure late costs reliability - the lakehouse aims at both.",
              left: {
                heading: "Data warehouse (schema-on-write)",
                items: [
                  "Modelled before load - 6-week ingestion lead times",
                  "Millisecond BI queries on star schemas",
                  "Storage at 3-5x object-storage price",
                  "Semi-structured data painful",
                ],
              },
              right: {
                heading: "Data lake (schema-on-read)",
                items: [
                  "Everything lands raw - no lead time",
                  "~USD 23/TB/month on object storage",
                  "40-minute scans without tuning",
                  "Swamp risk without governance",
                ],
              },
            },
            bullets: [
              "Spectrum: warehouse (schema-on-write), lake (schema-on-read), lakehouse (table formats on object storage).",
              "Table formats: Delta/Iceberg/Hudi add ACID, time travel, schema enforcement to lakes.",
              "Worked costs: warehouse 3-5x storage price; untuned lake scans 10-100x slower than modelled warehouse.",
              "Lakehouse value: raw landing + ACID upserts + time travel - both workloads served.",
              "Selection: workload mix + team discipline decide the dial.",
              "Modern reality: hybrids - lake for landing/ML, warehouse or lakehouse serving for BI.",
            ],
            callout: {
              type: "exam",
              title: "The schema-timing dial",
              body: "The organizing sentence: 'the architecture spectrum is a schema-timing dial - structure early (warehouse), structure late (lake), structure both (lakehouse).' The 3-5x storage and 10-100x query numbers anchor the trade.",
            },
            table: {
              caption: "The architecture spectrum compared.",
              headers: ["Property", "Warehouse", "Lake", "Lakehouse"],
              rows: [
                ["Schema timing", "On write", "On read", "Enforced at table level"],
                ["Storage cost", "3-5x object storage", "~USD 23/TB/mo", "Object-storage price"],
                ["BI query", "Milliseconds", "Untuned: minutes+", "Tuned: near-warehouse"],
                ["ML/exploration", "Weak", "Strong", "Strong"],
                ["Transactions/ACID", "Yes", "No", "Yes (table formats)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the warehouse, lake and lakehouse architectures: the schema-timing driver, worked cost-performance contrasts, and the selection rule.",
                marks: 14,
                outline: [
                  "Warehouse: schema-on-write, modelled, BI-fast, costly",
                  "Lake: schema-on-read, cheap, flexible, swamp risk",
                  "Lakehouse: table formats add ACID/time travel to object storage",
                  "Numbers: 3-5x storage; 10-100x untuned queries; ~USD 23/TB",
                  "Lakehouse upserts serve CDC workloads",
                  "Selection by workload mix and discipline",
                  "Hybrid estates as the modern reality",
                ],
              },
              {
                q: "What turns a data lake into a data swamp?",
                marks: 7,
                outline: [
                  "No catalog: data unfindable",
                  "No governance: ownership unclear",
                  "No schema discipline: formats drift",
                  "No lifecycle: copies accumulate forever",
                  "Swamps are governance failures, not technology failures",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Data warehouse versus data lake",
            body: [
              "The warehouse-versus-lake comparison is the exam's classic table, and the syllabus wants it with the design philosophy behind each. The warehouse's philosophy: model the business once, query it many times - dimensional schemas (3.5's facts and dimensions), Concurrency-friendly columnar engines, governance built-in (access control, audit). The lake's philosophy: land everything first, decide later - object storage's cheap durability, format freedom (JSON, Parquet, images, logs), and the schema-on-read flexibility that makes exploration and ML possible. The two philosophies answer different questions: the warehouse answers 'what were last quarter's sales by region' in milliseconds; the lake answers 'what patterns hide in five years of raw clickstream' in hours of Spark work.",
              "The worked decision case shows both in one estate: a retailer lands all sources to the lake (POS records, clickstream, weather, supplier feeds - 40 TB growing 2 TB/month), then serves curated marts from a warehouse synced with the lake's cleaned tables; the ML team works directly on the lake's Parquet; the BI team never touches the lake. The costs tally: lake storage ~USD 920/month at 40 TB; warehouse serving ~3 TB modelled at 3-5x price; the split is cheaper than either alone - the hybrid economics that made the lakehouse attractive. The failure modes per side: the warehouse that becomes a dumping ground (semi-structured chaos in modelled tables) and the lake that becomes a swamp (2.2's governance failure).",
              "The comparison table's axes are the exam's marks: schema timing, data types, users, cost, query latency, governance, primary failure mode. The closing sentence: warehouse and lake are complements with different philosophies - model-once-query-many versus land-everything-decide-later - and the modern estate runs both with the lakehouse narrowing the gap.",
              "Exam framing: 'Compare the data warehouse and the data lake' is a 7-mark staple. Give the two philosophies, the worked hybrid case with its cost tally, and the seven-axis table.",
            ],
            keyTerms: [
              { term: "Dimensional schema", definition: "Facts + dimensions modelled for BI queries - the warehouse pattern." },
              { term: "Columnar engine", definition: "Storage/compute reading columns - the warehouse query advantage." },
              { term: "Format freedom", definition: "Any file type lands in the lake - JSON to images." },
              { term: "Hybrid estate", definition: "Lake for landing + warehouse/lakehouse serving - the modern default." },
            ],
            diagram: {
              kind: "compare",
              title: "Two philosophies",
              caption: "Model once, query many - versus land everything, decide later.",
              left: {
                heading: "Warehouse philosophy",
                items: [
                  "Model the business once (star schemas)",
                  "Millisecond BI queries",
                  "Governance and audit built-in",
                  "Failure: becomes a dumping ground",
                ],
              },
              right: {
                heading: "Lake philosophy",
                items: [
                  "Land everything first (40 TB, any format)",
                  "Exploration and ML on raw Parquet",
                  "Cheap durable storage (~USD 920/month)",
                  "Failure: becomes a swamp",
                ],
              },
            },
            bullets: [
              "Warehouse: dimensional modelling, columnar engines, governance - the decision-support incumbent.",
              "Lake: object storage, format freedom, schema-on-read - the ML/exploration substrate.",
              "Worked hybrid: 40 TB lake + 3 TB modelled serving; costs cheaper than either alone.",
              "ML on lake Parquet; BI never touches the lake.",
              "Failure modes: dumping-ground warehouse vs swamp lake.",
              "The lakehouse narrows the gap between the philosophies.",
            ],
            callout: {
              type: "tip",
              title: "Philosophy first, tool second",
              body: "The comparison sentence: 'warehouse and lake differ in philosophy before technology - model-once-query-many versus land-everything-decide-later.' The seven-axis table then falls out of the philosophies rather than being memorized.",
            },
            table: {
              caption: "The seven-axis comparison.",
              headers: ["Axis", "Warehouse", "Lake"],
              rows: [
                ["Schema timing", "On write", "On read"],
                ["Data types", "Structured, modelled", "Any format"],
                ["Primary users", "Analysts, BI", "Engineers, scientists"],
                ["Cost", "3-5x object storage", "~USD 23/TB/month"],
                ["Query latency", "Milliseconds", "Minutes untuned"],
                ["Governance", "Built-in", "Must be added"],
                ["Failure mode", "Dumping ground", "Swamp"],
              ],
            },
            examQuestions: [
              {
                q: "Compare the data warehouse and the data lake: the two philosophies, the worked hybrid estate with cost tally, and the seven-axis table.",
                marks: 14,
                outline: [
                  "Warehouse philosophy: model once, query many",
                  "Lake philosophy: land everything, decide later",
                  "Worked hybrid: 40 TB lake + 3 TB serving + cost split",
                  "ML on lake; BI on warehouse",
                  "Failure modes per side",
                  "Seven axes tabulated",
                  "Lakehouse as the narrowing bridge",
                ],
              },
              {
                q: "Why is object storage the lake's substrate?",
                marks: 7,
                outline: [
                  "Cheap per-TB durability at 11-nines",
                  "Scale to petabytes without pre-provisioning",
                  "Format-agnostic objects suit schema-on-read",
                  "Compute attaches separately (decoupling)",
                  "Table formats add warehouse properties on top",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The data lakehouse",
            body: [
              "The lakehouse is the 2020s synthesis: warehouse-grade reliability on lake-grade economics, delivered by open table formats on object storage. The mechanics: data lands as Parquet in object storage, the table format (Delta Lake, Apache Iceberg, Apache Hudi) maintains a transaction log over the files - giving ACID transactions (concurrent reads/writes without corruption), time travel (query the table as of yesterday's snapshot - the audit and debugging superpower), schema enforcement and evolution (writes rejected on bad schema, migrations versioned), and unified metadata that both Spark-class engines and SQL warehouses can read. The worked mechanics: a CDC feed upserts 2 million row-changes hourly into a Delta orders table - ACID guarantees no reader sees a half-applied batch, time travel lets yesterday's audit re-run against the pre-merge snapshot, and the vacuum job expires old snapshots after 30 days (the retention that keeps storage bounded).",
              "The worked adoption case shows the value: a mid-size fintech replaces its warehouse-plus-lake split with a lakehouse - one copy of data, BI queries through a SQL engine on the Delta tables (2-4 second dashboards), ML features computed on the same tables, CDC upserts replacing the nightly batch, and the audit team using time travel instead of snapshot backups. The numbers: storage drops ~60% (one copy not two), the nightly batch window shrinks from 6 hours to 40 minutes of incremental upserts, and the 'which copy is right' questions disappear - the single-source-of-truth dividend.",
              "The trade-offs keep the section honest: table-format choice is a platform bet (Delta, Iceberg, Hudi differ in tooling ecosystems), small-file problems need compaction jobs (the OPTIMIZE/vacuum cadence), and BI-heavy estates still often outperform on dedicated warehouses - the lakehouse narrows but does not erase the query gap. The closing sentence: the lakehouse's contribution is architectural - it collapses the two-copies pattern into one governed copy, and its table formats are the discipline that keeps schema-on-read honest.",
              "Exam framing: 'Explain the data lakehouse and its table formats' is a 7-14 mark staple. Give the mechanics (transaction log, ACID, time travel, schema enforcement), the worked fintech adoption with numbers, and the honest trade-offs.",
            ],
            keyTerms: [
              { term: "Transaction log", definition: "The table format's commit history - the ACID and time-travel foundation." },
              { term: "Time travel", definition: "Querying a table as of a past snapshot - audit and debugging power." },
              { term: "Vacuum", definition: "Snapshot expiry keeping lakehouse storage bounded." },
              { term: "Compaction", definition: "Small-file merging (OPTIMIZE) restoring query performance." },
            ],
            diagram: {
              kind: "flow",
              title: "One copy, warehouse properties: the lakehouse stack",
              caption: "Object storage + table format + engines - the two-copies pattern collapsed into one.",
              steps: [
                { label: "Object storage", note: "Parquet files, ~USD 23/TB/mo" },
                { label: "Table format", note: "Delta/Iceberg/Hudi transaction log" },
                { label: "ACID + time travel", note: "safe upserts; snapshot queries" },
                { label: "Engines", note: "SQL warehouse + Spark on same tables" },
                { label: "Maintenance", note: "compaction + vacuum cadence" },
              ],
            },
            bullets: [
              "Mechanics: Parquet on object storage + transaction log = ACID, time travel, schema enforcement.",
              "Worked upsert: 2M row-changes hourly; readers never see half-applied batches.",
              "Time travel: audits re-run against pre-merge snapshots; vacuum expires at 30 days.",
              "Worked adoption: storage -60%, batch window 6h -> 40 min, single source of truth.",
              "Formats: Delta, Iceberg, Hudi - a platform bet with ecosystem trade-offs.",
              "Honest gaps: compaction cadence needed; dedicated warehouses still edge BI workloads.",
            ],
            callout: {
              type: "exam",
              title: "One governed copy is the dividend",
              body: "The lakehouse sentence: 'its contribution is collapsing two-copies into one governed copy - storage -60%, batch 6h -> 40 min, and the which-copy-is-right questions disappear.' Time travel as the audit replacement is the second mark.",
            },
            table: {
              caption: "Table formats compared.",
              headers: ["Format", "Origin", "Signature strength"],
              rows: [
                ["Delta Lake", "Databricks", "Tight Spark/warehouse integration"],
                ["Apache Iceberg", "Netflix lineage", "Engine-neutral, hidden partitioning"],
                ["Apache Hudi", "Uber", "Upsert/CDC-first design"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the lakehouse: the table-format mechanics (ACID, time travel, schema enforcement), the worked fintech adoption with numbers, and the honest trade-offs.",
                marks: 14,
                outline: [
                  "Stack: Parquet + transaction log + engines",
                  "ACID upserts: 2M changes hourly, no torn reads",
                  "Time travel for audits; vacuum retention",
                  "Adoption: storage -60%, batch 6h -> 40 min",
                  "Single-source-of-truth dividend",
                  "Format bet: Delta vs Iceberg vs Hudi",
                  "Trade-offs: compaction, BI gap remains",
                ],
              },
              {
                q: "Why do small files hurt lakehouse queries, and what fixes them?",
                marks: 7,
                outline: [
                  "Streaming ingests write many small Parquet files",
                  "Readers pay file-open overhead per file - scans slow",
                  "Compaction (OPTIMIZE) merges files to target sizes",
                  "Vacuum cleans expired snapshots",
                  "Cadence is a maintenance budget, not optional",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The modern data stack",
            body: [
              "The modern data stack (MDS) is the cloud-native, best-of-breed architecture pattern that the platform era standardized: ingestion-as-a-service (Fivetran/Airbyte-class managed connectors), a cloud warehouse or lakehouse as the center (Snowflake, BigQuery, Databricks), transformation-as-code (dbt - SQL models under version control with tests and documentation), orchestration (Airflow/Dagster scheduling the dependencies), and the consumption layer (BI tools, reverse-ETL, feature stores). The pattern's principles: commodity workloads are bought (connectors, warehouses), differentiating work is coded (transformations, models), everything is version-controlled, and the data flows through one governed center rather than point-to-point spaghetti.",
              "The worked MDS estate shows the pattern assembled: SaaS + database sources land via managed connectors into Snowflake (50 sources, zero connector code), dbt models 400 tables with 1,200 tests in git (the transformation layer as reviewed code), Airflow orchestrates the daily dependency graph, Tableau and reverse-ETL serve consumers, and the cost dashboard watches the warehouse bill. The numbers that justify the pattern: connector maintenance - the estate's self-built era burned 30% of team time on broken API connectors; managed ingestion cut that to near-zero, and the team's time moved to transformations (the differentiating layer). The principle sentence: the MDS is a make-or-buy allocation - buy the plumbing, build the business logic.",
              "The critique keeps the section honest: the MDS pattern's costs are vendor coupling (the center's pricing drives the bill - the per-query warehouse that scales both ways), tool sprawl (a new SaaS per layer - the stage-2 tool-sprawl symptom of 1.4), and the modelling gap (buying ingestion and warehousing does not buy the dimensional discipline of Unit III - the stack is plumbing, not thinking). The closing sentence: the modern data stack is the default architecture of the platform era - its value is the buy-build discipline, and its risk is forgetting that plumbing was never the hard part.",
              "Exam framing: 'Explain the modern data stack' is a 7-14 mark staple. Give the five layers with exemplar tools, the worked estate with its 30%-connector-time number, the buy-build principle, and the honest critique.",
            ],
            keyTerms: [
              { term: "Managed connector", definition: "Vendor-maintained ingestion - the bought plumbing of the MDS." },
              { term: "dbt", definition: "Transformation-as-code: SQL models, tests, docs in version control." },
              { term: "Orchestrator", definition: "The dependency scheduler (Airflow/Dagster) sequencing the stack." },
              { term: "Vendor coupling", definition: "The center's pricing model becoming the estate's cost structure." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The modern data stack, layer by layer",
              caption: "Buy the plumbing, build the business logic - one governed center, not spaghetti.",
              stages: [
                { label: "Ingestion", note: "Fivetran/Airbyte - 50 sources, zero connector code" },
                { label: "Center", note: "Snowflake/BigQuery/Databricks" },
                { label: "Transformation", note: "dbt: 400 models, 1,200 tests in git" },
                { label: "Orchestration", note: "Airflow dependency graph" },
                { label: "Serving", note: "BI + reverse ETL + features" },
              ],
            },
            bullets: [
              "Layers: managed ingestion, cloud center, transformation-as-code (dbt), orchestration, consumption.",
              "Principles: buy commodity, code the differentiator, version everything, one governed center.",
              "Worked estate: 50 sources, 400 models, 1,200 tests; connector time 30% -> near-zero.",
              "Team time reallocated to transformations - the differentiating layer.",
              "Critique: vendor coupling, tool sprawl (stage-2 symptom), modelling gap.",
              "Closing: plumbing was never the hard part.",
            ],
            callout: {
              type: "exam",
              title: "Buy the plumbing, build the logic",
              body: "The MDS sentence examiners want: 'the modern data stack is a make-or-buy allocation - managed connectors and warehouses bought, transformations and models built.' The 30%-connector-time number is the evidence that makes it an argument.",
            },
            table: {
              caption: "The MDS layers and exemplars.",
              headers: ["Layer", "Bought tools", "Built work"],
              rows: [
                ["Ingestion", "Fivetran, Airbyte", "Custom connectors for odd sources"],
                ["Storage/compute", "Snowflake, BigQuery", "Zone and cost architecture"],
                ["Transformation", "-", "dbt models, tests, docs"],
                ["Orchestration", "Airflow, Dagster", "Dependency graphs, SLAs"],
                ["Serving", "Tableau, Power BI", "Semantic models, reverse ETL"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the modern data stack: the five layers with tools, the worked estate with connector-time numbers, the buy-build principle, and the critique.",
                marks: 14,
                outline: [
                  "Layers: ingestion, center, transformation, orchestration, serving",
                  "Worked: 50 sources, 400 dbt models, 1,200 tests",
                  "Connector maintenance 30% -> near-zero",
                  "Principle: buy plumbing, build logic",
                  "Version control and one governed center",
                  "Critique: coupling, sprawl, modelling gap",
                  "Closing: plumbing was never the hard part",
                ],
              },
              {
                q: "Why does transformation-as-code (dbt) improve trust over ad-hoc SQL?",
                marks: 7,
                outline: [
                  "Models are version-controlled and reviewed",
                  "Tests run on every change - regressions blocked",
                  "Documentation generates from the code",
                  "Lineage derives from model references",
                  "Ad-hoc SQL leaves none of these traces",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "The Lambda architecture",
            body: [
              "The Lambda architecture (Marz's 2011 pattern) answers one problem: how to serve both complete historical truth and fresh low-latency views from the same data. Its three layers: the batch layer (the full dataset, recomputed views - complete but slow, the master truth), the speed layer (incremental real-time views on the newest data - fast but approximate, compensating for the batch's lag), and the serving layer (merging batch and speed views into the query answer). The worked flow: clickstream lands in the batch layer's immutable store; nightly MapReduce/Spark jobs rebuild the day's aggregates (complete); a Storm/Flink-class speed layer updates the last-hour counters in seconds (fresh); the serving layer answers 'views today' as batch-complete-plus-speed-incremental - fresh within seconds, complete within a day.",
              "The worked numbers show the trade it manages: the batch view recomputes 18 months of history in 4 hours nightly (completeness), the speed layer covers the day's delta in 2-5 seconds (freshness), and a re-merge corrects speed-layer drift when the batch catches up. The Lambda cost is the syllabus's named critique: two codebases for the same logic (batch in Spark, speed in Flink) - duplicated development, doubled testing, and the drift bugs where the two implementations disagree; the pattern is correct but expensive to maintain.",
              "The exam's analysis closes the section: Lambda's two-codebase cost is what Kappa (2.7) eliminates - one stream-processing codebase replaying history as needed - and the honest modern note is that table-format lakehouses with incremental batch (2.4's upserts) have absorbed much of Lambda's use case: fresh-enough views without a separate speed layer. The closing sentence: Lambda's contribution is the completeness-versus-freshness decomposition - name the two requirements separately and every streaming architecture becomes a position on that dial.",
              "Exam framing: 'Explain the Lambda architecture' is a 7-14 mark staple. Give the three layers with the worked numbers, state the two-codebase critique, and close with the decomposition sentence.",
            ],
            keyTerms: [
              { term: "Batch layer", definition: "The complete historical dataset with recomputed master views." },
              { term: "Speed layer", definition: "Incremental real-time views compensating batch lag." },
              { term: "Serving layer", definition: "Merges batch and speed views into query answers." },
              { term: "Two-codebase problem", definition: "Lambda's core cost: same logic implemented twice." },
            ],
            diagram: {
              kind: "fork",
              title: "Lambda's three layers",
              caption: "Complete but slow, fresh but approximate, merged for the answer.",
              start: "Incoming data",
              branches: [
                { label: "Batch layer", outcome: "18 months recomputed in 4 h nightly - complete master views", good: true },
                { label: "Speed layer", outcome: "last-hour counters in 2-5 s - fresh incremental views", good: true },
                { label: "Serving layer", outcome: "batch + speed merged into the query answer", good: true },
                { label: "Drift bug", outcome: "two implementations disagree - re-merge on batch catch-up", good: false },
              ],
            },
            bullets: [
              "Layers: batch (complete, slow), speed (fresh, approximate), serving (merged answer).",
              "Worked numbers: 4 h nightly recompute; 2-5 s speed updates; drift corrected on catch-up.",
              "Value: completeness and freshness named as separate requirements.",
              "Cost: two codebases - duplicated development, doubled testing, drift bugs.",
              "Kappa eliminates the cost with one replayable stream codebase.",
              "Modern note: incremental lakehouse batches absorb much of Lambda's use case.",
            ],
            callout: {
              type: "exam",
              title: "Name the two requirements separately",
              body: "The decomposition sentence: 'Lambda's contribution is separating completeness (batch) from freshness (speed) - every streaming architecture is then a position on that dial.' The two-codebase critique sets up the Kappa comparison.",
            },
            table: {
              caption: "Lambda layers compared.",
              headers: ["Layer", "Property", "Worked metric"],
              rows: [
                ["Batch", "Complete, slow", "18 months in 4 h nightly"],
                ["Speed", "Fresh, approximate", "2-5 s updates on the day's delta"],
                ["Serving", "Merged answer", "Fresh within seconds, complete within a day"],
                ["Correction", "Drift re-merge", "On nightly batch catch-up"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Lambda architecture: the three layers with worked numbers, the two-codebase critique, and the completeness-versus-freshness decomposition.",
                marks: 14,
                outline: [
                  "Batch layer: complete master views, 4 h recompute",
                  "Speed layer: 2-5 s incremental views",
                  "Serving layer: merge semantics",
                  "Drift and re-merge correction",
                  "Critique: two codebases, doubled testing",
                  "Kappa as the single-codebase answer",
                  "Decomposition as the lasting contribution",
                ],
              },
              {
                q: "Why is the batch layer's store kept immutable?",
                marks: 7,
                outline: [
                  "Immutable data makes recompute deterministic",
                  "Views are derived state - rebuildable from truth",
                  "Mutations would break the complete-truth guarantee",
                  "Append-only simplifies backfills and audits",
                  "Time-travel table formats implement the same principle",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "The Kappa architecture",
            body: [
              "The Kappa architecture (Kreps's 2014 answer to Lambda) removes the batch layer: everything is a stream, processed by one codebase, with reprocessing achieved by replaying the log rather than running a separate batch system. The mechanics: events land in an immutable, replayable log (Kafka-class, retention-sized for history), stream processors (Flink/kafka-streams-class) maintain the serving views, and when logic changes the processor is re-run from offset zero against the log - the replay is the batch. The worked flow: the same clickstream of 2.6 lands in Kafka (14-day retention, plus a compacted historical topic for deep history), one Flink job maintains the aggregates, a logic fix triggers a replay of 18 months at 5x throughput - 6 hours to rebuild the same views Lambda's batch layer would rebuild, with one codebase.",
              "The worked comparison with Lambda is the exam's table: codebases (1 vs 2), reprocessing (log replay vs batch job), consistency (one implementation - no drift vs re-merge corrections), operational complexity (one system vs two), and the cost trade (Kafka storage and replay throughput vs Spark cluster economics). The worked numbers: Kappa's 14-day hot log at 40 TB, the compacted history at 200 TB, replay at 5x = 6 h; Lambda's batch cluster plus speed cluster costs roughly 1.6x the Kappa estate in compute but reuses cheaper batch storage. The selection rule: streaming-dominant estates with strong log infrastructure pick Kappa; batch-heavy estates with ML-on-history pick Lambda-or-modern-hybrid; and the honest modern note - lakehouse incremental batches (2.4) give most estates Kappa's simplicity with warehouse economics.",
              "The closing sentence: Kappa's contribution is the one-codebase principle - if the log is the system of record and replay is the batch, the two-layer split disappears - and the exam rewards framing it as the architectural cure for Lambda's named disease.",
              "Exam framing: 'Explain the Kappa architecture and compare it with Lambda' is a 7-14 mark staple. Give the log-replay mechanics with worked numbers, the five-axis comparison, and the selection rule.",
            ],
            keyTerms: [
              { term: "Replayable log", definition: "Kafka-class immutable log - the system of record reprocessing replays." },
              { term: "Log replay", definition: "Re-running the processor from offset zero - Kappa's batch replacement." },
              { term: "Compacted topic", definition: "Log compaction keeping latest state per key for deep history." },
              { term: "One-codebase principle", definition: "Kappa's cure for Lambda's two-implementation drift." },
            ],
            diagram: {
              kind: "flow",
              title: "Kappa: one stream, one codebase",
              caption: "Log as system of record; replay is the batch - the two-layer split disappears.",
              steps: [
                { label: "Immutable log", note: "Kafka: 14-day hot + compacted history" },
                { label: "Stream processor", note: "one Flink job maintains views" },
                { label: "Logic change", note: "replay from offset zero at 5x" },
                { label: "Views rebuilt", note: "18 months in 6 h - same codebase" },
                { label: "Serving", note: "queries hit maintained views" },
              ],
            },
            bullets: [
              "Mechanics: immutable log + one stream processor + replay-on-change.",
              "Worked numbers: 40 TB hot log, 200 TB compacted history, replay 6 h at 5x.",
              "Lambda comparison: 1 vs 2 codebases; replay vs batch; no drift vs re-merge.",
              "Cost trade: Kafka storage/replay vs Spark cluster economics (1.6x compute for Lambda).",
              "Selection: streaming-dominant + log infrastructure -> Kappa; batch-heavy ML -> Lambda/hybrid.",
              "Modern note: lakehouse incremental batches give most estates Kappa simplicity.",
            ],
            callout: {
              type: "exam",
              title: "Replay is the batch",
              body: "The Kappa sentence: 'if the log is the system of record and replay is the batch, Lambda's two-layer split disappears - one codebase, no drift.' The 6-hour replay number makes it concrete against Lambda's 4-hour batch.",
            },
            table: {
              caption: "Kappa vs Lambda - the five-axis table.",
              headers: ["Axis", "Kappa", "Lambda"],
              rows: [
                ["Codebases", "1", "2"],
                ["Reprocessing", "Log replay (6 h at 5x)", "Batch job (4 h nightly)"],
                ["Consistency", "One implementation - no drift", "Re-merge corrections"],
                ["Operational complexity", "One system", "Two systems"],
                ["Best fit", "Streaming-dominant estates", "Batch-heavy, ML-on-history estates"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Kappa architecture and compare it with Lambda: the log-replay mechanics with worked numbers, the five-axis comparison, and the selection rule.",
                marks: 14,
                outline: [
                  "Mechanics: immutable log, one processor, replay-on-change",
                  "Numbers: 40 TB hot log, 200 TB compacted, 6 h replay at 5x",
                  "Axes: codebases, reprocessing, consistency, complexity, fit",
                  "No-drift guarantee vs re-merge corrections",
                  "Cost trade: Kafka vs Spark economics",
                  "Selection rule by workload",
                  "Lakehouse hybrid as the modern middle",
                ],
              },
              {
                q: "Why must the Kappa log be immutable and replayable?",
                marks: 7,
                outline: [
                  "Views are derived state - truth lives in the log",
                  "Replay requires deterministic re-reading from any offset",
                  "Mutations would break reprocessing equivalence",
                  "Retention sizing decides how far back replay reaches",
                  "Hence log compaction for deep history",
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
      title: "Data Platforms, Modeling and the Warehouse",
      summary:
        "Unit III covers data platforms and their planes, stream-to-batch storage, catalogs and sharing, OLTP versus OLAP modeling, dimensional modeling with slowly changing dimensions, table creation and schema migration, and the warehouse build.",
      chapter: {
        number: "03",
        title: "Platforms, Models and the Warehouse Build",
        intro:
          "Unit III covers data platforms, stream-to-batch storage architecture, data catalog and sharing, data modeling (OLTP/OLAP), dimensional modeling (facts, dimensions, SCDs), creating tables with schema migration, and building the data warehouse with the Bus Matrix.",
        inOneBreath:
          "A platform is five planes (storage, compute, movement, governance, operations) with workload isolation over one shared substrate. Stream-to-batch lands through a durable buffer (7-day retention), time-partitioned idempotent Parquet (~128 MB). Catalogs carry technical, business, usage and governance metadata; zero-copy sharing keeps lineage. OLTP normalizes for truth (3NF), OLAP denormalizes for questions (star schemas) - the transformation layer connects them. Dimensional modelling declares the grain first, conforms dimensions, and versions history with SCD Type 2 (Pune-to-Mumbai). Tables are contracts: expand-and-contract migrates without downtime; the Bus Matrix is the one-page warehouse design.",
        sections: [
          {
            number: "3.1",
            title: "Data platforms",
            body: [
              "A data platform is the integrated estate - storage, compute, ingestion, transformation, orchestration, governance - that carries the lifecycle of 1.2, and the syllabus's topic is its anatomy and architecture. The platform's planes: the storage plane (object storage and table formats - the durable substrate), the compute plane (SQL warehouses, Spark engines, streaming engines - the decoupled processing), the movement plane (ingestion connectors, CDC, queues), the governance plane (catalog, lineage, access control, quality), and the operations plane (orchestration, observability, cost management). The worked platform inventory for a mid-size estate: S3 + Delta (storage), Snowflake + Spark (compute), Fivetran + Kafka (movement), Unity-class catalog + dbt tests (governance), Airflow + cost dashboards (operations) - five planes, one estate, each with its own scaling and failure profile.",
              "The worked platform decision shows the anatomy in motion: the estate's bottleneck is the compute plane - BI concurrency spikes at 9 a.m. (200 concurrent dashboards) and nightly Spark jobs compete for the same cluster; the platform answer is workload isolation - separate warehouses for BI (auto-scaling, short-running) and ETL (scheduled, long-running), with the storage plane shared beneath (the decoupling dividend: compute scales per workload, one copy of data). The exam's analysis: platform architecture is workload isolation and plane decoupling - the questions are never 'which tool' but 'which planes share, which isolate'.",
              "The platform's failure modes complete the anatomy: plane coupling (compute and storage scaling together - the legacy warehouse's rigidity), governance-plane absence (the swamp of 2.2), and cost-plane blindness (the unmonitored warehouse bill - the per-query pricing that scales both ways). The closing sentence: the platform is the lifecycle made concrete - five planes, each answering one undercurrent, and the architecture questions are always about isolation, coupling and who pays for what.",
              "Exam framing: 'Explain the architecture of a data platform' is a 7-14 mark staple. Give the five planes with the worked inventory, the workload-isolation decision, and the three failure modes.",
            ],
            keyTerms: [
              { term: "Plane", definition: "A platform's functional layer: storage, compute, movement, governance, operations." },
              { term: "Workload isolation", definition: "Separate compute per workload class so BI and ETL never contend." },
              { term: "Plane decoupling", definition: "Independent scaling of storage and compute - the cloud dividend." },
              { term: "Cost-plane blindness", definition: "Unmonitored platform spend - the per-query pricing trap." },
            ],
            diagram: {
              kind: "layers",
              title: "The five planes of a data platform",
              caption: "Each plane answers one undercurrent; architecture is isolation and decoupling questions.",
              layers: [
                { label: "Operations", note: "orchestration, observability, cost management" },
                { label: "Governance", note: "catalog, lineage, access control, quality" },
                { label: "Compute", note: "SQL warehouse, Spark, streaming - isolated per workload" },
                { label: "Movement", note: "connectors, CDC, queues" },
                { label: "Storage", note: "object storage + table formats - the shared substrate" },
              ],
            },
            bullets: [
              "Planes: storage, compute, movement, governance, operations - one estate, five layers.",
              "Worked inventory: S3+Delta, Snowflake+Spark, Fivetran+Kafka, catalog+dbt, Airflow+cost dashboards.",
              "Worked decision: BI concurrency (200 dashboards) vs nightly ETL -> isolated warehouses over shared storage.",
              "Decoupling dividend: compute scales per workload, one copy of data.",
              "Failure modes: plane coupling, governance absence, cost blindness.",
              "Architecture questions are isolation, coupling and cost - never just tool choice.",
            ],
            callout: {
              type: "tip",
              title: "Isolate workloads, share the substrate",
              body: "The platform sentence: 'the answer is never which tool - it is which planes isolate and which share.' Workload isolation over one shared storage substrate is the pattern every cloud platform implements; name it and the anatomy answer is complete.",
            },
            table: {
              caption: "Planes, undercurrents and failure modes.",
              headers: ["Plane", "Undercurrent answered", "Signature failure"],
              rows: [
                ["Storage", "Durability + cost", "Swamp without governance"],
                ["Compute", "Processing at scale", "Workload contention"],
                ["Movement", "Reliable ingestion", "Silent connector rot"],
                ["Governance", "Management + security", "Unfindable, untrusted data"],
                ["Operations", "Orchestration + observability", "Blind cost growth"],
              ],
            },
            examQuestions: [
              {
                q: "Explain data platform architecture: the five planes with a worked inventory, the workload-isolation decision with numbers, and the three failure modes.",
                marks: 14,
                outline: [
                  "Planes: storage, compute, movement, governance, operations",
                  "Inventory per plane named",
                  "Bottleneck: 200-dashboard concurrency vs nightly ETL",
                  "Isolated warehouses over shared storage",
                  "Decoupling dividend explained",
                  "Failures: coupling, governance absence, cost blindness",
                  "Isolation-coupling-cost framing",
                ],
              },
              {
                q: "Why does decoupled compute/storage beat the legacy coupled warehouse?",
                marks: 7,
                outline: [
                  "Coupled: scaling compute forces scaling storage (and cost)",
                  "Decoupled: each scales independently",
                  "Workload isolation becomes possible",
                  "One copy of data serves many engines",
                  "Elasticity matches spend to actual load",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Stream-to-batch storage architecture",
            body: [
              "The stream-to-batch storage pattern answers how streaming data lands durably before batch processing: events flow from producers through a durable buffer (Kafka-class log or cloud queue), a stream consumer writes them to object storage in batch-friendly formats (Parquet, partitioned by time), and the batch layer picks them up on its schedule. The design decisions: buffering (how long events survive a downstream outage - Kafka retention 7 days), file layout (partitioning scheme - date/hour partitions that batch queries prune), format (row writes batched into columnar files - the small-file problem of 2.4 managed by compaction), and exactly-once semantics (idempotent writes or transactional sinks). The worked flow: clickstream events arrive at 50k/second, land in a Kafka topic (retention 7 days), a consumer writes hourly Parquet partitions to S3 (compaction to ~128 MB files), and the nightly Spark job reads yesterday's partitions - the buffer absorbs the outage, the partitions prune the reads.",
              "The worked failure-and-recovery case shows the pattern's value: the Spark job fails at 02:00 - the Kafka buffer holds the last 7 days of events, the consumer re-writes the failed hour's partition idempotently (same keys, same files), and the backfill replays three days of partitions after a producer outage; no data is lost, no duplicates appear (idempotent writes by event key). The exam's numbers: buffer 7 days, hourly partitions, 128 MB target file size, replay at 5x throughput - the four numbers that make the pattern concrete.",
              "The pattern's variants complete the section: queue-to-warehouse (cloud queues writing directly via auto-ingest), CDC-to-batch (change streams landed as partitions), and the stream-first variant (Flink writing the serving tables directly - the Kappa choice of 2.7). The closing sentence: stream-to-batch storage is the bridge that lets streaming freshness and batch economics coexist - the buffer buys durability, the partitions buy query pruning, and the format buys the batch layer's performance.",
              "Exam framing: 'Explain the stream-to-batch storage architecture' is a 7-14 mark staple. Give the pattern's four design decisions with the worked numbers, the failure-recovery case, and the variants.",
            ],
            keyTerms: [
              { term: "Durable buffer", definition: "Kafka-class log absorbing downstream outages (retention-sized)." },
              { term: "Partition pruning", definition: "Batch reads touching only relevant date/hour partitions." },
              { term: "Idempotent sink", definition: "Re-writes producing identical files - no duplicates on retry." },
              { term: "Compaction", definition: "Small-file merging to target sizes (~128 MB) for scan performance." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Stream to batch: the landing pattern",
              caption: "Buffer buys durability, partitions buy pruning, format buys performance.",
              stages: [
                { label: "Producers", note: "50k events/second from apps + web" },
                { label: "Durable buffer", note: "Kafka topic, 7-day retention" },
                { label: "Consumer-writer", note: "hourly Parquet partitions, idempotent" },
                { label: "Object storage", note: "compacted ~128 MB files" },
                { label: "Batch layer", note: "nightly Spark prunes yesterday's partitions" },
              ],
            },
            bullets: [
              "Design decisions: buffer retention, partition layout, file format, exactly-once semantics.",
              "Worked numbers: 50k/sec, 7-day buffer, hourly partitions, 128 MB files.",
              "Failure case: Spark fails at 02:00 -> idempotent re-write -> backfill replays 3 days; no loss, no duplicates.",
              "Partition pruning: batch reads touch only relevant hours.",
              "Variants: queue-to-warehouse, CDC-to-batch, stream-first (Kappa).",
              "Bridge framing: streaming freshness + batch economics coexisting.",
            ],
            callout: {
              type: "tip",
              title: "The buffer is the outage budget",
              body: "The pattern sentence: 'buffer retention is the outage budget - 7 days means a week of downstream downtime loses nothing.' Pair it with idempotent writes and the recovery story becomes arithmetic instead of hope.",
            },
            table: {
              caption: "Design decisions and defaults.",
              headers: ["Decision", "Worked default", "Why"],
              rows: [
                ["Buffer retention", "7 days", "A week of outage tolerance"],
                ["Partitioning", "date/hour", "Pruning for batch reads"],
                ["File format", "Parquet, ~128 MB", "Columnar scans, fewer file-opens"],
                ["Write semantics", "Idempotent by event key", "Safe retries, no duplicates"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the stream-to-batch storage pattern: the four design decisions with worked numbers, the failure-recovery case, and the variants.",
                marks: 14,
                outline: [
                  "Decisions: buffer, partitions, format, semantics",
                  "Numbers: 50k/sec, 7-day buffer, hourly partitions, 128 MB",
                  "Failure: 02:00 Spark failure -> idempotent re-write -> 3-day backfill",
                  "No loss, no duplicates - the recovery arithmetic",
                  "Variants: queue-to-warehouse, CDC-to-batch, stream-first",
                  "Pruning and compaction roles",
                  "Bridge framing for streaming + batch coexistence",
                ],
              },
              {
                q: "Why partition by time in the landing zone?",
                marks: 7,
                outline: [
                  "Batch jobs almost always read time ranges",
                  "Time partitions let the engine prune irrelevant files",
                  "Compaction runs per partition - bounded jobs",
                  "Retention drops whole partitions cheaply",
                  "Time is the natural axis of both ingestion and analysis",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Data catalog and data sharing",
            body: [
              "The data catalog is the platform's inventory: the searchable, documented map of what data exists, what it means, who owns it, how fresh it is and who may see it. Its anatomy: the technical metadata (schemas, partitions, formats - harvested automatically), the business metadata (definitions, owners, tags, domains - human-curated), the usage metadata (popularity, query patterns - the freshness signal), and the governance bindings (access policies, classification labels, quality scores). The worked catalog entry: the 'dim_customer' table - owner (payments team), domain (customer), definition (one row per customer, SCD Type 2), classification (contains PII columns flagged), freshness SLO (15 minutes), popularity (340 queries/week), quality score (98% tests passing) - eight fields that turn a table into a findable, trustworthy asset.",
              "Data sharing is the catalog's outward face: how data moves to consumers outside the copy-and-email pattern. The sharing mechanisms: warehouse-native sharing (Snowflake Secure Data Sharing - live views without copying; the consumer queries the provider's data in place), the delta-sharing protocol (open format - shared Delta tables readable by any engine), API/data-service sharing (the curated endpoint), and marketplace sharing (the commercial channel). The worked sharing case: a retailer shares its product catalogue table with a logistics partner - secure sharing grants a live view (no copy, no ETL, revocable), usage is billed to the consumer's compute, and the catalog entry records the share as the table's lineage edge - sharing as governed lineage, not as file exports.",
              "The governance tie completes the section: the catalog is where sharing is controlled (which tables may be shared, with whose approval, under what classification), where lineage ends, and where quality scores publish - the inventory that makes the swamp (2.2) impossible. The closing sentence: the catalog is the platform's public interface - findable, owned, classified and shared data is the difference between an estate and a swamp.",
              "Exam framing: 'Explain the data catalog and data sharing' is a 7-14 mark staple. Give the catalog's four metadata classes with the worked entry, the sharing mechanisms with the retailer case, and the governance tie.",
            ],
            keyTerms: [
              { term: "Technical metadata", definition: "Schemas, formats, partitions - harvested automatically." },
              { term: "Business metadata", definition: "Definitions, owners, domains, tags - human-curated." },
              { term: "Zero-copy sharing", definition: "Live views granted without copying - revocable, billed to consumer." },
              { term: "Delta sharing", definition: "The open protocol serving Delta tables to any engine." },
            ],
            diagram: {
              kind: "compare",
              title: "Sharing: copy-and-email vs zero-copy",
              caption: "Copies lose lineage; live shares keep it - revocable and governed.",
              left: {
                heading: "Copy-and-email sharing",
                items: [
                  "Static extract - stale on arrival",
                  "Lineage broken - consumer's copy untracked",
                  "Revocation impossible - the copy is theirs",
                  "Security: whoever holds the file holds the data",
                ],
              },
              right: {
                heading: "Zero-copy (secure) sharing",
                items: [
                  "Live view - always current",
                  "Lineage edge recorded in the catalog",
                  "Revocable instantly",
                  "Consumer compute billed; provider data stays put",
                ],
              },
            },
            bullets: [
              "Catalog classes: technical, business, usage, governance metadata.",
              "Worked entry: owner, domain, definition, classification, SLO, popularity, quality score.",
              "Sharing mechanisms: warehouse-native, delta-sharing protocol, APIs, marketplaces.",
              "Worked case: live catalogue share with logistics partner - no copy, revocable, lineage edge.",
              "Governance tie: sharing approvals, classification gates, quality publication.",
              "Closing: catalog is the platform's public interface.",
            ],
            callout: {
              type: "exam",
              title: "Copies lose lineage; shares keep it",
              body: "The sharing sentence: 'every copied file is an untracked lineage break; every zero-copy share is a governed edge the catalog can revoke.' The retailer-logistics case makes the mechanism concrete.",
            },
            table: {
              caption: "Sharing mechanisms compared.",
              headers: ["Mechanism", "Properties", "Best for"],
              rows: [
                ["Warehouse-native sharing", "Live views, revocable, consumer-billed", "Partner-to-partner governed shares"],
                ["Delta sharing protocol", "Open, engine-neutral", "Cross-platform + external consumers"],
                ["API data service", "Curated endpoints, rate limits", "Application consumption"],
                ["Marketplace listing", "Commercial, licensed", "Monetized datasets"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the data catalog and data sharing: the four metadata classes with a worked entry, the sharing mechanisms with a worked case, and the governance tie.",
                marks: 14,
                outline: [
                  "Metadata classes: technical, business, usage, governance",
                  "Worked entry: eight fields on dim_customer",
                  "Mechanisms: native sharing, delta protocol, API, marketplace",
                  "Retailer case: live view, no copy, revocable",
                  "Copy-and-email failure modes",
                  "Governance: approvals, classification gates, quality publication",
                  "Estate-vs-swamp closing",
                ],
              },
              {
                q: "Why does zero-copy sharing improve both security and freshness?",
                marks: 7,
                outline: [
                  "No duplicate exists to leak or go stale",
                  "Access is a revocable grant, not a file handoff",
                  "Consumers always read current data",
                  "Audit trails attach to the grant",
                  "Storage cost stays with the provider",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Data modeling: OLTP versus OLAP",
            body: [
              "Data modelling is the discipline's structure layer, and its first divide is OLTP versus OLAP: OLTP (online transaction processing) models for writes - normalized schemas (3NF) minimizing redundancy, many small transactions, row-oriented storage; OLAP (online analytical processing) models for reads - denormalized dimensional schemas, few complex queries, columnar storage. The worked contrast: the orders OLTP schema normalizes customer, address, product into referenced tables (an insert touches 3 tables; no update anomalies); the OLAP star schema denormalizes the same entities into a fact table plus conformed dimensions (one wide row per order line; a query reads one table + joins two). The numbers: OLTP inserts at 10k/second with 10-millisecond transactions; OLAP scans billions of rows at columnar speeds answering in 2-4 seconds.",
              "The modelling techniques the syllabus names: normalization (the OLTP discipline - 1NF/2NF/3NF removing update anomalies), denormalization (the OLAP discipline - joins pre-computed into wide tables), and the modern-warehouse middle (one-big-table patterns for ML feature serving, where denormalization goes further). The worked denormalization arithmetic: joining five tables per query costs 4 join operations; pre-joining into a wide fact trades 4x storage for 4x fewer join operations at query time - the trade that columnar compression makes cheap (repeated dimension values compress well).",
              "The selection rule closes the section: model by workload - OLTP schemas serve operations (integrity, write speed), OLAP schemas serve analysis (query speed, history), and the ETL/ELT layer (3.5) converts one into the other. The closing sentence: normalization optimizes for truth, denormalization optimizes for questions - the data platform needs both, connected by the transformation layer.",
              "Exam framing: 'Compare OLTP and OLAP data modeling' is a 7-14 mark staple. Give the two modelling disciplines with the orders-schema contrast, the worked numbers, and the selection rule.",
            ],
            keyTerms: [
              { term: "3NF normalization", definition: "The OLTP discipline removing update anomalies via referenced tables." },
              { term: "Denormalization", definition: "Pre-joining for query speed - the OLAP discipline." },
              { term: "One-big-table", definition: "Maximally denormalized wide tables - the ML feature pattern." },
              { term: "Columnar compression", definition: "Repeated values compress well - making denormalization cheap." },
            ],
            diagram: {
              kind: "compare",
              title: "OLTP vs OLAP modelling",
              caption: "Normalized for truth, denormalized for questions - the transformation layer connects them.",
              left: {
                heading: "OLTP modelling",
                items: [
                  "3NF: customer/address/product referenced",
                  "Inserts touch 3 tables - no anomalies",
                  "10k inserts/second, 10 ms transactions",
                  "Row-oriented storage",
                ],
              },
              right: {
                heading: "OLAP modelling",
                items: [
                  "Star schema: wide fact + conformed dimensions",
                  "One row per order line - pre-joined",
                  "Billions of rows scanned in 2-4 s",
                  "Columnar storage + compression",
                ],
              },
            },
            bullets: [
              "OLTP: normalized (3NF), write-optimized, integrity-first, row-oriented.",
              "OLAP: denormalized dimensional, read-optimized, question-first, columnar.",
              "Worked contrast: orders schema modeled both ways.",
              "Denormalization arithmetic: 4x storage for 4x fewer joins.",
              "Columnar compression makes the storage trade cheap.",
              "Rule: model by workload; transformation connects the two.",
            ],
            callout: {
              type: "exam",
              title: "Truth versus questions",
              body: "The modelling sentence: 'normalization optimizes for truth; denormalization optimizes for questions - the platform needs both, connected by transformation.' The 4x-joins arithmetic is the trade made concrete.",
            },
            table: {
              caption: "OLTP vs OLAP at a glance.",
              headers: ["Axis", "OLTP", "OLAP"],
              rows: [
                ["Schema", "3NF normalized", "Dimensional, denormalized"],
                ["Workload", "Many small writes", "Few large scans"],
                ["Storage", "Row-oriented", "Columnar"],
                ["Integrity", "Constraints enforced", "Conformed in ETL"],
                ["Latency", "10 ms transactions", "2-4 s analytics"],
                ["Failure mode", "Lock contention", "Stale, wrong aggregates"],
              ],
            },
            examQuestions: [
              {
                q: "Compare OLTP and OLAP modelling: the two disciplines with the orders-schema contrast, the denormalization arithmetic, and the selection rule.",
                marks: 14,
                outline: [
                  "OLTP: 3NF, write-first, row storage, integrity",
                  "OLAP: dimensional, read-first, columnar, questions",
                  "Worked orders schema in both forms",
                  "4x storage for 4x fewer joins",
                  "Columnar compression enabling the trade",
                  "Modern middle: one-big-table for features",
                  "Transformation layer connecting both",
                ],
              },
              {
                q: "Why do update anomalies motivate normalization in OLTP but not OLAP?",
                marks: 7,
                outline: [
                  "OLTP writes constantly - anomalies corrupt truth",
                  "3NF localizes each fact to one place",
                  "OLAP is mostly read-only with rebuilt loads",
                  "Denormalization's redundancy is refreshed, not updated in place",
                  "Hence anomaly risk is workload-dependent",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Dimensional modelling: facts, dimensions and SCDs",
            body: [
              "Dimensional modelling (Kimball's discipline) is the warehouse's canonical pattern: facts (the measurable events - one row per transaction line, holding measures and foreign keys) and dimensions (the descriptive context - one row per entity, holding attributes). The worked model: the retail sales fact table (one row per order line: quantity, revenue, discount + keys to date, customer, product, store dimensions) surrounded by four conformed dimensions - conformance meaning the same dimension is shared by every fact, so 'customer' means the same thing in sales and returns. The design verbs: grain declaration (what one fact row represents - the first and most consequential decision), measures (additive, semi-additive, non-additive - the balance fact's semi-additivity trap), and the star-versus-snowflake choice (denormalized dimensions vs normalized - the OLAP read-first answer is star).",
              "Slowly changing dimensions (SCDs) are the syllabus's named technique: Type 0 (never change - immutable facts), Type 1 (overwrite - the old value vanishes; fine for corrections), Type 2 (version history - new row with effective dates; the audit-preserving default), Type 3 (previous-value column - one level of history). The worked SCD case: a customer moves from Pune to Mumbai - Type 1 overwrites (history lost; 'where did our Pune customers go' becomes unanswerable), Type 2 adds a row with valid_from/valid_to and is_current flag (the fact rows before the move join the Pune version, after join Mumbai - history preserved), Type 3 keeps a previous_city column (one change tracked only). The rule: Type 2 for anything the business analyzes by history, Type 1 for pure corrections.",
              "The worked query shows the payoff: 'revenue by region for Q3' reads the fact table joined to date and store dimensions - 3 tables, 2 joins, 2 seconds over 2 billion fact rows (the columnar engine's scan); the same query on the OLTP schema reads 7 normalized tables with 6 joins and misses history (the SCD problem). The closing sentence: dimensional modelling is question-first design - the grain declares what you measure, the dimensions declare how you slice it, and the SCD type declares how much truth you keep.",
              "Exam framing: 'Explain dimensional modelling - facts, dimensions and slowly changing dimensions' is the 14-mark centrepiece of Unit III. Give the fact/dimension anatomy with the retail model, the SCD types with the Pune-Mumbai case, and the worked query.",
            ],
            keyTerms: [
              { term: "Grain", definition: "What one fact row represents - the first design decision." },
              { term: "Conformed dimensions", definition: "Shared dimensions meaning the same thing across facts." },
              { term: "SCD Type 2", definition: "Version history with effective dates and is_current flag." },
              { term: "Semi-additive measure", definition: "Sums across some dimensions only (balances across time is wrong)." },
            ],
            diagram: {
              kind: "flow",
              title: "SCD Type 2: the Pune-to-Mumbai move",
              caption: "Version rows with validity windows - facts before join the old version, after join the new.",
              steps: [
                { label: "Customer row v1", note: "city: Pune, valid_from: 2021, is_current: false" },
                { label: "Move event", note: "address change detected by CDC" },
                { label: "Close v1", note: "valid_to: 2024-06-30" },
                { label: "Open v2", note: "city: Mumbai, valid_from: 2024-07-01, is_current: true" },
                { label: "Fact joins", note: "history stays truthful on both sides" },
              ],
            },
            bullets: [
              "Anatomy: facts (measures + FKs, one row per grain) + dimensions (attributes) + conformance.",
              "Worked model: retail sales fact + date/customer/product/store dimensions.",
              "Grain first: 'one row per order line' - the consequential declaration.",
              "SCD types: 0 immutable, 1 overwrite, 2 version history, 3 previous column - with the Pune-Mumbai case.",
              "Rule: Type 2 for analyzed history, Type 1 for corrections.",
              "Worked query: Q3 revenue by region - 3 tables, 2 joins, 2 s over 2B rows.",
            ],
            callout: {
              type: "exam",
              title: "Grain before anything",
              body: "The modelling sentence: 'declare the grain first - every later decision inherits it.' The SCD Pune-Mumbai case is the section's narrative: Type 1 destroys the question, Type 2 preserves it; examiners mark that contrast heavily.",
            },
            table: {
              caption: "SCD types compared.",
              headers: ["Type", "Mechanism", "History kept", "Use for"],
              rows: [
                ["Type 0", "Never change", "All (immutable)", "Facts, birth dates"],
                ["Type 1", "Overwrite", "None", "Pure corrections"],
                ["Type 2", "Version rows + validity", "Full", "Analyzed attributes"],
                ["Type 3", "Previous-value column", "One step", "Single known change"],
              ],
            },
            examQuestions: [
              {
                q: "Explain dimensional modelling: the fact/dimension anatomy with a worked retail model, the SCD types with the address-change case, and the worked query payoff.",
                marks: 14,
                outline: [
                  "Facts: measures + FKs at declared grain",
                  "Dimensions + conformance across facts",
                  "Grain declaration as first decision",
                  "SCD 0/1/2/3 with Pune-Mumbai worked case",
                  "Type 2 mechanics: valid_from/to, is_current",
                  "Worked query: Q3 by region in 2 s over 2B rows",
                  "Question-first closing",
                ],
              },
              {
                q: "Why is a balance measure semi-additive and what breaks if treated as additive?",
                marks: 7,
                outline: [
                  "Balances sum across accounts/customers (entities)",
                  "They do not sum across time - end-of-period, not total",
                  "Treating as additive multiplies the same balance",
                  "Correct: last value per time bucket",
                  "Grain and measure type drive aggregation rules",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Creating tables and schema migration",
            body: [
              "The table layer is where models become DDL, and the syllabus's pair is table creation and schema migration. Table creation decisions: data types (smallest sufficient - INT vs BIGINT, DECIMAL for money, VARCHAR sized), constraints (primary keys, not-null, foreign keys - in warehouses often declared-as-information since engines are append-only), clustering/partitioning keys (the pruning that 3.2's queries need), and the table-format properties (Delta/Iceberg partition specs). The worked DDL: the fact_sales table - date_key INT not null, customer_sk INT not null (SCD surrogate), revenue DECIMAL(12,2), partitioned by date_key, clustered by store_key - the physical design that makes 3.5's worked query a 2-second scan.",
              "Schema migration is the discipline of changing tables without breaking consumers: versioned migrations (each change a numbered, reviewable script - Flyway-class tools or dbt migrations), backward-compatible evolution (add columns nullable, never rename - expand-and-contract: add new, migrate data, switch consumers, drop old), and environment parity (dev/staging/prod migrated identically - the CI runs migrations against a shadow copy). The worked migration: the orders table gains a 'tax_breakdown' JSON column - the expand phase adds it nullable (old code unaffected), the backfill populates it from source, consumers switch over two sprints, and the contract phase drops the deprecated columns - four steps, zero downtime, every step reversible.",
              "The migration discipline's failure modes are the exam's warning list: destructive-first migrations (DROP before consumers switch - the outage), unversioned changes (the manual prod fix nobody can reproduce), and missing rollback plans (the migration that cannot be undone). The closing sentence: tables are contracts with every consumer - creation declares the contract, migration amends it in writing, and the expand-and-contract pattern is the amendment procedure that never breaks a reader.",
              "Exam framing: 'Explain table creation and schema migration' is a 7-14 mark staple. Give the creation decisions with the worked DDL, the expand-and-contract migration with its four steps, and the failure modes.",
            ],
            keyTerms: [
              { term: "Expand-and-contract", definition: "Add new, migrate, switch, drop old - zero-downtime schema evolution." },
              { term: "Versioned migration", definition: "Numbered, reviewable change scripts applied identically per environment." },
              { term: "Surrogate key", definition: "The warehouse's stable join key (customer_sk) decoupled from business ids." },
              { term: "Environment parity", definition: "Dev/staging/prod migrated identically - CI-verified." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Expand-and-contract in four steps",
              caption: "Add, backfill, switch, drop - reversible at every step, zero downtime.",
              stages: [
                { label: "Expand", note: "add tax_breakdown nullable - old code unaffected" },
                { label: "Backfill", note: "populate from source in batches" },
                { label: "Switch", note: "consumers move over two sprints" },
                { label: "Contract", note: "drop deprecated columns - migration closed" },
              ],
            },
            bullets: [
              "Creation decisions: types (smallest sufficient), constraints, partition/cluster keys, table-format properties.",
              "Worked DDL: fact_sales partitioned by date_key, clustered by store_key.",
              "Migration discipline: versioned scripts, backward-compatible evolution, environment parity.",
              "Worked migration: tax_breakdown column via expand-and-contract - four reversible steps.",
              "Failure modes: destructive-first, unversioned manual fixes, missing rollbacks.",
              "Tables are contracts: creation declares, migration amends in writing.",
            ],
            callout: {
              type: "warning",
              title: "Never DROP before the switch",
              body: "The migration rule: 'destructive-first migrations are outages in waiting - expand-and-contract keeps every step reversible.' The worked tax_breakdown case shows the four steps; the failure modes show what skipping them costs.",
            },
            codeExample: {
              language: "sql",
              caption: "fact_sales.sql - the worked DDL",
              code: `CREATE TABLE fact_sales (
  date_key     INT           NOT NULL,
  customer_sk  INT           NOT NULL,   -- SCD2 surrogate
  store_key    INT           NOT NULL,
  product_key  INT           NOT NULL,
  quantity     INT           NOT NULL,
  revenue      DECIMAL(12,2) NOT NULL
)
PARTITION BY (date_key)
CLUSTER BY (store_key);

-- migration 042: expand phase
ALTER TABLE fact_sales ADD COLUMN tax_breakdown VARIANT;`,
            },
            examQuestions: [
              {
                q: "Explain table creation and schema migration: the creation decisions with worked DDL, the expand-and-contract pattern with its four steps, and the migration failure modes.",
                marks: 14,
                outline: [
                  "Creation: types, constraints, partition/cluster keys",
                  "Worked DDL for fact_sales",
                  "Versioned migrations + environment parity",
                  "Expand-and-contract: add, backfill, switch, drop",
                  "Zero-downtime and reversibility properties",
                  "Failure modes: destructive-first, unversioned, no rollback",
                  "Tables-as-contracts closing",
                ],
              },
              {
                q: "Why do warehouses treat primary keys as informational rather than enforced?",
                marks: 7,
                outline: [
                  "Append-only columnar engines avoid index maintenance",
                  "Uniqueness is tested in pipelines instead (dbt tests)",
                  "Constraint enforcement costs scan performance",
                  "Surrogate keys still guarantee join logic",
                  "The contract moves from engine to tests",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Building the data warehouse",
            body: [
              "Building the warehouse is the unit's synthesis: the Kimball sequence turns sources into a serving estate in four business steps. The sequence: source mapping (which systems feed which subjects - the scorecard of 2.1 applied), the business dimension model (the conformed dimensions and fact grains per business process - 3.5 applied), the physical implementation (tables, partitions, SCDs - 3.6 applied), and the load architecture (staging, merge logic, orchestration, tests). The worked build plan for the retail estate: four business processes (sales, inventory, returns, marketing-response) share four conformed dimensions (date, customer, product, store), the fact tables declare their grains, the staging layer lands raw, the merge logic applies SCD2 upserts, and the test suite gates every load - the warehouse as the Bus Matrix made real.",
              "The worked Bus Matrix shows the design's core artifact: rows are business processes (sales, inventory, returns, marketing), columns are dimensions (date, customer, product, store, promotion); the X-marks show which facts use which dimensions - the matrix that reveals conformance gaps (marketing uses a different customer definition - flagged and conformed before build) and the coverage of the estate. The numbers: four facts, five dimensions, three shared conformed dimensions, 27 tests, 6-week build - the matrix is where the build's scope is negotiated.",
              "The load architecture completes the build: the nightly cycle lands staging (2.2's stream-to-batch), merges facts (idempotent upserts), applies SCD2 changes, runs the test suite (27 tests blocking failures), and publishes freshness SLOs - the 1.7 quality system wired into the build. The closing sentence: the warehouse build is the subject's synthesis - sources scored, dimensions conformed, grains declared, migrations versioned, tests gating - and the Bus Matrix is the one-page design examiners ask for.",
              "Exam framing: 'Explain how a data warehouse is built' is the unit's 14-mark synthesis. Give the Kimball sequence with the worked build plan, the Bus Matrix with its numbers, and the load architecture with tests.",
            ],
            keyTerms: [
              { term: "Bus Matrix", definition: "Business processes x dimensions - the conformance and coverage map." },
              { term: "Business process", definition: "The fact-table unit of design (sales, returns...) - matrix rows." },
              { term: "Load architecture", definition: "Staging -> merge -> SCD -> test -> publish cycle." },
              { term: "Conformance gap", definition: "Two facts using different definitions of the same dimension." },
            ],
            diagram: {
              kind: "matrix",
              title: "The retail Bus Matrix",
              caption: "Processes against dimensions - X-marks reveal conformance and coverage.",
              axes: { x: "Dimensions (date -> promotion)", y: "Business processes (sales -> marketing)" },
              quadrants: [
                { label: "Sales + returns: shared customer/product/store", note: "conformed - build proceeds" },
                { label: "Marketing: different customer definition", note: "conformance gap - flag and conform first" },
                { label: "Inventory: product/date only", note: "narrow fact - valid grain" },
                { label: "Unmapped dimensions", note: "coverage gaps to decide before build" },
              ],
            },
            bullets: [
              "Kimball sequence: source mapping -> dimension model -> physical build -> load architecture.",
              "Worked plan: 4 processes, 5 dimensions, 3 conformed, 27 tests, 6-week build.",
              "Bus Matrix: conformance gaps flagged before build (marketing's customer definition).",
              "Load cycle: staging -> idempotent merge -> SCD2 -> tests -> SLOs.",
              "Tests gate every load - the 1.7 quality system wired in.",
              "Build is the subject's synthesis: sources, dimensions, grains, migrations, tests.",
            ],
            callout: {
              type: "exam",
              title: "Draw the Bus Matrix",
              body: "The synthesis sentence: 'the Bus Matrix is the one-page design - processes by dimensions, conformance gaps flagged before a line of DDL exists.' The marketing-customer gap is the worked story that makes conformance real.",
            },
            table: {
              caption: "The build plan at a glance.",
              headers: ["Step", "Artifact", "Worked numbers"],
              rows: [
                ["Source mapping", "Scorecards per source", "8 sources assessed"],
                ["Dimension model", "Bus Matrix + grains", "4 facts, 5 dimensions"],
                ["Physical build", "DDL + migrations", "Versioned, partitioned"],
                ["Load architecture", "Staging + merges + tests", "27 tests gating"],
                ["Publish", "SLOs + catalog entries", "15-min freshness SLO"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how a data warehouse is built: the Kimball sequence, the worked Bus Matrix with conformance gaps, and the load architecture with tests.",
                marks: 14,
                outline: [
                  "Sequence: sources -> model -> physical -> load",
                  "Worked: 4 processes, 5 dimensions, 3 conformed",
                  "Bus Matrix as one-page design",
                  "Conformance gap: marketing's customer definition",
                  "Load: staging, idempotent merge, SCD2, tests, SLOs",
                  "27 tests gating every load",
                  "Build-as-synthesis closing",
                ],
              },
              {
                q: "Why must conformance gaps be resolved before the build?",
                marks: 7,
                outline: [
                  "Non-conformed dimensions break cross-fact queries",
                  "Two customer definitions make combined reporting wrong",
                  "Fixing after build means reworking facts and ETL",
                  "The matrix exposes gaps cheaply, pre-DDL",
                  "Conformance is the warehouse's promise of one truth",
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
      title: "Ingestion, BI and Governance",
      summary:
        "Unit IV covers data ingestion patterns, SFTP and SCP, webhooks and web interfaces, web scraping, business intelligence with Apache Superset, creating visualizations, and the governance quartet - data quality, catalogs, lineage and governance.",
      chapter: {
        number: "04",
        title: "Moving Data and Serving Truth",
        intro:
          "Unit IV covers data ingestion, SFTP and SCP, webhooks, web scraping, business intelligence tools with Apache Superset, creating visualizations, and the governance stack - data quality, catalogs, lineage and governance policies.",
        inOneBreath:
          "Ingestion matches pattern to source: full loads for small tables, CDC incremental (20 MB vs 9.99 GB), snapshot diffs for APIs, streaming for events - with idempotency, watermarks, drift handling and late data as universal duties. File ingestion is a five-step contract (pull, verify, decompress, validate, land) guarded by manifests; webhooks are hardened receivers (HMAC, dedup, fast ack); scraping is polite, versioned and snapshotted. Superset assembles datasets, charts, dashboards and row-level security; every chart answers one question honestly. The governance quartet - quality, catalog, lineage, governance - ships together and resolves incidents in minutes.",
        sections: [
          {
            number: "4.1",
            title: "Data ingestion patterns: batch and streaming",
            body: [
              "Data ingestion is the lifecycle's movement stage, and its first decision is batch versus streaming: batch ingestion moves data on a schedule (hourly/daily loads - simple, complete, delayed), streaming ingestion moves events continuously (seconds-level freshness - complex, incremental, always-on). The batch patterns: full loads (truncate-and-reload - simple, wasteful for large tables), incremental loads (delta by timestamp/CDC - efficient but needs change detection), and snapshot diffs (compare full extracts - the SaaS-API pattern where history is unavailable). The streaming patterns: log-based CDC (row-level changes from the source's transaction log - Debezium-class), event streaming (application events to Kafka - the clickstream class), and change-data-as-files (micro-batches - the compromise pattern).",
              "The worked ingestion decision shows the pattern selection: the orders table (10 GB, 200k inserts/day) - CDC incremental (a full reload wastes 9.99 GB nightly; CDC moves the 200k changed rows = 20 MB); the marketing SaaS (API, no CDC) - daily snapshot diff (compare against yesterday's extract; move the delta); the clickstream (100k events/second) - Kafka streaming into the 3.2 landing pattern; the reference data (product catalogue, 50k rows) - full load nightly (small enough that simplicity wins). Four sources, four patterns, one rule: match the pattern to change-rate, volume and source capability.",
              "The ingestion discipline's shared duties complete the section regardless of pattern: idempotency (safe retries), watermarking (what has been processed - the high-water mark that makes incremental resumable), schema-drift handling (the source's new column lands as nullable, never breaks the pipe), and late-arriving data (the event timestamped yesterday arriving today - the watermark question). The closing sentence: ingestion is where reliability engineering meets data - the pattern is chosen by the source, but the discipline is universal.",
              "Exam framing: 'Explain data ingestion patterns' is a 7-14 mark staple. Give the batch and streaming patterns with the four-source worked decision, and close with the universal duties.",
            ],
            keyTerms: [
              { term: "Full load", definition: "Truncate-and-reload - simple, complete, wasteful at scale." },
              { term: "Incremental load", definition: "Move only changes (timestamp/CDC delta) - the efficiency pattern." },
              { term: "Watermark", definition: "The processed-so-far marker making incremental loads resumable." },
              { term: "Late-arriving data", definition: "Events arriving after their watermark window - the completeness trap." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the ingestion pattern per source",
              caption: "Change rate, volume and source capability decide - simplicity wins when it can.",
              start: "Source properties assessed",
              branches: [
                { label: "Large table + CDC capable", outcome: "CDC incremental: 200k changed rows = 20 MB moved nightly", good: true },
                { label: "SaaS API, no CDC", outcome: "daily snapshot diff - move the delta between extracts", good: true },
                { label: "100k events/second", outcome: "Kafka streaming into the landing pattern", good: true },
                { label: "Small reference table", outcome: "full nightly load - simplicity wins", good: true },
              ],
            },
            bullets: [
              "Batch patterns: full loads, incremental (timestamp/CDC), snapshot diffs.",
              "Streaming patterns: log-based CDC, event streaming, micro-batch compromise.",
              "Worked decision: orders -> CDC (20 MB vs 9.99 GB), SaaS -> diff, clickstream -> Kafka, catalogue -> full.",
              "Rule: match pattern to change rate, volume, capability.",
              "Universal duties: idempotency, watermarking, drift handling, late data.",
              "Closing: pattern by source, discipline universal.",
            ],
            callout: {
              type: "exam",
              title: "The 20 MB versus 9.99 GB arithmetic",
              body: "The ingestion sentence that earns marks: 'a full nightly reload of a 10 GB table moves 9.99 GB of unchanged rows; CDC moves the 20 MB that changed.' The four-source decision table shows the rule applied four ways.",
            },
            table: {
              caption: "Four sources, four patterns.",
              headers: ["Source", "Pattern", "Why"],
              rows: [
                ["Orders (10 GB, CDC-capable)", "CDC incremental", "20 MB vs 9.99 GB nightly"],
                ["Marketing SaaS API", "Snapshot diff", "No CDC; API extraction only"],
                ["Clickstream 100k/sec", "Kafka streaming", "Continuous volume, seconds freshness"],
                ["Product catalogue 50k rows", "Full load", "Small - simplicity wins"],
              ],
            },
            examQuestions: [
              {
                q: "Explain data ingestion patterns: batch and streaming patterns with mechanisms, the four-source worked decision, and the universal ingestion duties.",
                marks: 14,
                outline: [
                  "Batch: full, incremental, snapshot diff",
                  "Streaming: CDC, event streaming, micro-batch",
                  "Worked: orders CDC arithmetic (20 MB vs 9.99 GB)",
                  "SaaS diff, clickstream Kafka, catalogue full",
                  "Rule: change rate + volume + capability",
                  "Duties: idempotency, watermark, drift, late data",
                  "Universal-discipline closing",
                ],
              },
              {
                q: "How does a watermark make incremental ingestion resumable?",
                marks: 7,
                outline: [
                  "Watermark records the last processed position/timestamp",
                  "On failure, ingestion resumes from the watermark",
                  "No full reprocessing, no gaps",
                  "Late-arriving data defines the watermark lag",
                  "Idempotent writes complete the safety pair",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "SFTP and SCP: file-based ingestion",
            body: [
              "SFTP (SSH File Transfer Protocol) and SCP (Secure Copy Protocol) are the file-transport workhorses of partner and legacy ingestion: the partner drops a nightly CSV/extract over SFTP, the pipeline pulls, validates and lands it. The mechanics: SFTP runs over SSH (port 22) with authentication by key pair (the ingestion public key on the partner's authorized_keys - the credential that never appears in code), SCP is the simple copy (scripted one-shot transfers), and the pipeline pattern is pull-on-schedule with checksum validation (MD5/SHA-256 against the partner's manifest - the corruption check). The worked flow: the payments partner drops payments_20240601.csv.gz (2 GB) + manifest.sha256 at 01:00; the pipeline pulls at 01:15 (key-based auth, resumable transfer), verifies the checksum, decompresses, validates schema and row count (manifest says 8,442,109 rows - found 8,442,109), and lands in staging - the five-step file contract.",
              "The failure modes are the section's craft: partial transfers (the connection drops at 60% - resumable transfers and never trust size alone), silent truncation (the file landed but the row count disagrees - the manifest check catches it), encoding drift (the partner switches to UTF-8 with BOM - the schema validator flags it before landing), and the credential hygiene (keys rotated per contract, no passwords over SFTP, chroot-jailed drop directories). The worked incident: a truncated file (4.2M of 8.4M rows) passes size checks (compressed size plausible) but fails the manifest row-count - the pipeline quarantines it, alerts the partner, and re-pulls; the downstream never sees the half-night.",
              "The alternatives frame completes the section: SFTP/SCP persist because partners have them (the lowest-common-denominator transport), but API-first ingestion is preferred when available (schema in the API, no file format drift) and object-storage drop zones with event notifications replace the polling pattern. The closing sentence: file-based ingestion is the discipline of distrust - checksum, row count, schema, and quarantine before anything lands downstream.",
              "Exam framing: 'Explain SFTP and SCP in data ingestion' is a 7-14 mark staple. Give the mechanics and the five-step file contract, work the truncation incident with the manifest check, and close with the alternatives and distrust discipline.",
            ],
            keyTerms: [
              { term: "SFTP", definition: "SSH-based file transfer - key-authenticated, resumable, the partner transport." },
              { term: "Manifest check", definition: "Row count + checksum validated against the partner's signed manifest." },
              { term: "Quarantine", definition: "Failed files parked for inspection - never landed downstream." },
              { term: "Chroot drop zone", definition: "The jailed SFTP directory limiting partner access to its own path." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The five-step file ingestion contract",
              caption: "Pull, verify, decompress, validate, land - quarantine before step five on any failure.",
              stages: [
                { label: "Partner drops", note: "CSV.gz + manifest.sha256 at 01:00" },
                { label: "Pull (SFTP)", note: "key auth, resumable transfer" },
                { label: "Verify", note: "SHA-256 + row count vs manifest" },
                { label: "Validate", note: "schema, encoding, business rules" },
                { label: "Land", note: "staging; downstream only after all green" },
              ],
            },
            bullets: [
              "Mechanics: SFTP over SSH (port 22, key pairs), SCP one-shot copies, checksum validation.",
              "Worked flow: 2 GB gz + manifest; 8,442,109 rows expected and found.",
              "Failure modes: partial transfers, silent truncation, encoding drift, credential hygiene.",
              "Worked incident: 4.2M/8.4M rows quarantined by row-count check - re-pulled, downstream protected.",
              "Hygiene: rotated keys, no passwords, chroot jails.",
              "Alternatives: API-first, object drop zones with event notifications.",
            ],
            callout: {
              type: "exam",
              title: "Distrust is the discipline",
              body: "The file-ingestion sentence: 'checksum, row count, schema, quarantine - trust nothing until all four agree.' The truncated-file incident shows the manifest check catching what size checks miss.",
            },
            codeExample: {
              language: "bash",
              caption: "ingest.sh - the file contract in commands",
              code: `# pull with key auth, resumable
sftp -i keys/partner.pem partner@files.partner.com <<< \\
  "reget /out/payments_20240601.csv.gz"

# verify integrity against manifest
sha256sum -c manifest.sha256          # checksum gate
zcat payments_20240601.csv.gz | wc -l # 8442109 == manifest row count

# validate schema, then land
python validate.py payments_20240601.csv.gz --schema partner_v3.json
mv payments_20240601.csv.gz staging/  # land only if all green`,
            },
            examQuestions: [
              {
                q: "Explain SFTP/SCP-based ingestion: the mechanics, the five-step file contract, the worked truncation incident, and the alternatives.",
                marks: 14,
                outline: [
                  "SFTP/SCP mechanics: SSH, keys, resumability",
                  "Five steps: pull, verify, decompress, validate, land",
                  "Worked: 8,442,109-row manifest check",
                  "Incident: 4.2M truncated -> quarantine + re-pull",
                  "Failure modes: partial, truncation, encoding, credentials",
                  "Hygiene: rotated keys, chroot jails",
                  "API-first and drop-zone alternatives",
                ],
              },
              {
                q: "Why is a row-count manifest stronger than a file-size check?",
                marks: 7,
                outline: [
                  "Compressed size varies with content - plausibility is weak",
                  "Row count is semantic: exactly what was written",
                  "Truncations that pass size checks fail row counts",
                  "Checksum covers corruption, manifest covers completeness",
                  "Together they gate before landing",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Webhooks and web interfaces",
            body: [
              "Webhooks invert the ingestion direction: instead of polling a source, the source pushes events to your HTTPS endpoint on occurrence - the SaaS-platform integration pattern (payment events, CRM updates, form submissions). The mechanics: you register an HTTPS endpoint with the source, the source POSTs a signed JSON event per occurrence, your receiver validates (the signature check - HMAC with the shared secret in the header), deduplicates (delivery is at-least-once - the event id check), and enqueues for processing. The worked flow: the payment processor POSTs payment.succeeded events to /hooks/payments (HMAC-signed, 3-retry schedule on failure), the receiver validates the signature (reject unsigned - the spoofed-event attack), deduplicates by event id (the retry that already fired), and lands into the queue - three validations, one contract.",
              "The receiver's hardening is the section's craft: signature validation (the HMAC check that defeats forged events), replay protection (timestamps + event ids - the captured event replayed an hour later), idempotent processing (the dedup store), and fast acknowledgment (return 200 quickly, process async - the receiver that times out on slow processing triggers retry storms). The worked incident: a receiver processed synchronously (300 ms average) and a source outage replayed 40,000 queued events at once - the receiver fell behind, timeouts fired, retries amplified; the fix is the async pattern (ack fast, queue deep, process at pipeline pace) plus the replay-absorption arithmetic (40k events at 5k/sec processing = 8 seconds of queue depth).",
              "Web interfaces as ingestion sources complete the section: the admin UI export (the human-in-the-loop SaaS source - downloadable CSVs where no API exists), and the scraping-adjacent forms (4.4's territory). The closing sentence: webhooks are push-based ingestion whose entire discipline is the receiver's paranoia - validate the signature, deduplicate the delivery, acknowledge fast, and the push becomes a contract instead of a flood.",
              "Exam framing: 'Explain webhook-based ingestion and its hardening' is a 7-14 mark staple. Give the mechanics with the three validations, the worked retry-storm incident with its arithmetic, and close with the receiver's paranoia list.",
            ],
            keyTerms: [
              { term: "HMAC signature", definition: "The shared-secret event signature - the forged-event defence." },
              { term: "At-least-once delivery", definition: "Webhook semantics: duplicates possible - dedup by event id." },
              { term: "Async acknowledgment", definition: "Return 200 fast, process from queue - the retry-storm prevention." },
              { term: "Replay protection", definition: "Timestamp + id windows rejecting re-delivered old events." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The hardened webhook receiver",
              caption: "Validate, deduplicate, acknowledge, process - paranoia in four steps.",
              stages: [
                { label: "POST event", note: "source pushes payment.succeeded, HMAC-signed" },
                { label: "Validate", note: "signature + timestamp window - reject unsigned" },
                { label: "Deduplicate", note: "event id store - at-least-once handled" },
                { label: "Acknowledge", note: "200 in <100 ms, event queued" },
                { label: "Process", note: "pipeline pace - retries never storm" },
              ],
            },
            bullets: [
              "Mechanics: registered HTTPS endpoint, signed JSON POSTs, retry schedules.",
              "Three validations: HMAC signature, replay window, event-id dedup.",
              "Worked flow: payment events -> validation -> dedup -> queue.",
              "Incident: synchronous receiver + 40k replayed events -> storm; fix = async + queue depth.",
              "Arithmetic: 40k at 5k/sec = 8 s of queue absorption.",
              "Web UI exports as the human-in-the-loop fallback source.",
            ],
            callout: {
              type: "warning",
              title: "Acknowledge fast or drown in retries",
              body: "The webhook rule: 'the receiver that processes synchronously turns a source outage into a retry storm - acknowledge in milliseconds, process at pipeline pace.' The 40,000-event replay is the incident that teaches it.",
            },
            codeExample: {
              language: "python",
              caption: "receiver.py - the hardened webhook handler",
              code: `import hmac, hashlib, json

def handle(request):
    sig = request.headers.get("X-Signature", "")
    expected = hmac.new(SECRET, request.body, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(sig, expected):
        return 401                      # reject forged events

    event = json.loads(request.body)
    if seen_before(event["id"]):
        return 200                      # dedup: at-least-once delivery

    queue.put(event)                    # async: ack fast
    return 200                          # process at pipeline pace`,
            },
            examQuestions: [
              {
                q: "Explain webhook ingestion: the push mechanics, the three validations, the worked retry-storm incident with arithmetic, and the receiver's paranoia list.",
                marks: 14,
                outline: [
                  "Push mechanics: registered endpoint, signed POSTs, retries",
                  "Validations: HMAC, replay window, event-id dedup",
                  "Async acknowledgment pattern",
                  "Incident: 40k replayed events vs synchronous receiver",
                  "Fix: fast ack + deep queue; 8 s absorption arithmetic",
                  "Web-UI export fallback",
                  "Paranoia-as-contract closing",
                ],
              },
              {
                q: "Why is the HMAC check the webhook's first line of defence?",
                marks: 7,
                outline: [
                  "Endpoints are public - anyone can POST",
                  "The shared-secret signature proves source authenticity",
                  "Forged events would inject false data",
                  "compare_digest avoids timing leaks",
                  "Unsigned requests are rejected before parsing",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Web scraping",
            body: [
              "Web scraping is ingestion from pages built for humans: extracting structured data from HTML where no API exists - competitor prices, public registers, listings. The mechanics: fetch (HTTP requests at polite rates), parse (HTML parsing - BeautifulSoup/lxml selectors), structure (the extraction schema: selector -> field mapping), and paginate (the crawl discipline). The worked scrape: a price-monitoring pipeline fetches 2,000 product pages nightly at 2 requests/second with jitter (the politeness budget), parses price and availability by CSS selector, normalizes currency, and lands with a source-page snapshot for audit - four steps, one schema, one politeness contract.",
              "The discipline and legality are the section's spine: robots.txt respected (the crawl-permission file), terms-of-service reviewed (the legality line - scraping public data is generally lawful; scraping behind logins against ToS is the violation class), rate limits honoured (the politeness budget that keeps you unbanned and uncivil-uncased), and identification (a descriptive user-agent with contact - the courteous scraper). The worked defence against site changes: the extraction schema versioned (selector changes break silently otherwise), the audit snapshot (the saved page proving what was extracted), and the change-detection alert (the site's redesign detected by a 40% null-spike before bad data lands).",
              "The anti-scraping realities complete the section: rate-limiting and CAPTCHAs (the site's defence - back off, do not circumvent), dynamic rendering (JavaScript-heavy pages needing headless browsers - Playwright-class, at 10x the cost), and the honest boundary (the syllabus's cybersecurity lens: scraping is also the attacker's recon technique - the OSINT collection of 1.3/3.4 is scraping with different intent; the same politeness and legality rules bind both). The closing sentence: scraping is the ingestion of last resort - legal, polite, versioned and snapshotted, or not at all.",
              "Exam framing: 'Explain web scraping as a data ingestion technique' is a 7-14 mark staple. Give the four-step mechanics with the politeness budget, the legality discipline, the change-defence case, and the attacker-lens tie.",
            ],
            keyTerms: [
              { term: "Politeness budget", definition: "Rate limits + jitter honouring the site's load tolerance." },
              { term: "robots.txt", definition: "The crawl-permission declaration - respected by legitimate scrapers." },
              { term: "Extraction schema versioning", definition: "Selectors mapped and versioned - silent breakage made loud." },
              { term: "Headless browser", definition: "JavaScript-rendered fetching (Playwright) for dynamic pages." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The scraping pipeline with its contracts",
              caption: "Fetch politely, parse by versioned schema, snapshot for audit, land with alerts.",
              stages: [
                { label: "Fetch", note: "2 req/sec + jitter; robots.txt honoured" },
                { label: "Parse", note: "CSS selectors -> schema v3 mapping" },
                { label: "Normalize", note: "currency, units, availability flags" },
                { label: "Audit", note: "page snapshot saved alongside extracted rows" },
                { label: "Land + alert", note: "40% null-spike = site redesign alarm" },
              ],
            },
            bullets: [
              "Mechanics: fetch -> parse -> structure -> paginate; 2,000 pages nightly at 2 req/sec with jitter.",
              "Legality: robots.txt + ToS review; public data lawful, login-behind scraping is the violation class.",
              "Identification: descriptive user-agent with contact details.",
              "Change defence: versioned selectors, audit snapshots, null-spike alerts.",
              "Anti-scraping: rate limits, CAPTCHAs (back off, do not circumvent), dynamic rendering costs.",
              "Cybersecurity lens: scraping is also the attacker's OSINT technique - same rules bind.",
            ],
            callout: {
              type: "warning",
              title: "The null-spike is your redesign alarm",
              body: "The scraping sentence: 'selector changes break silently - the 40% null-spike alert is the only thing standing between a site redesign and a month of empty prices.' Versioned schemas plus snapshots turn silent breakage into a paged incident.",
            },
            codeExample: {
              language: "python",
              caption: "scrape.py - polite, versioned extraction",
              code: `import requests, time, random
from bs4 import BeautifulSoup

SCHEMA_VERSION = "v3"          # selectors versioned
HEADERS = {"User-Agent": "price-monitor/1.0 (contact@example.com)"}

for url in product_urls:                       # 2000 pages/night
    r = requests.get(url, headers=HEADERS, timeout=10)
    soup = BeautifulSoup(r.text, "lxml")
    row = {
        "url": url,
        "price": parse_price(soup.select_one(".price")),
        "available": soup.select_one(".stock") is not None,
        "snapshot": r.text[:200000],           # audit snapshot
        "schema_version": SCHEMA_VERSION,
    }
    emit(row)
    time.sleep(0.5 + random.random() * 0.5)    # politeness jitter`,
            },
            examQuestions: [
              {
                q: "Explain web scraping: the four-step mechanics with the politeness budget, the legality discipline, the change-defence case, and the attacker-lens tie.",
                marks: 14,
                outline: [
                  "Steps: fetch, parse, structure, paginate",
                  "Politeness: 2 req/sec + jitter, robots.txt, UA with contact",
                  "Legality: public data vs login-behind ToS violations",
                  "Change defence: versioned selectors, snapshots, null-spike alerts",
                  "Anti-scraping: rate limits, CAPTCHAs, dynamic rendering",
                  "Cybersecurity lens: OSINT scraping shares the rules",
                  "Last-resort closing",
                ],
              },
              {
                q: "Why do silent selector changes make scraping pipelines dangerous?",
                marks: 7,
                outline: [
                  "HTML changes do not raise errors - fields simply return null",
                  "Downstream aggregates then average empties",
                  "Versioned schemas make the mapping explicit",
                  "Null-spike monitoring detects breakage same night",
                  "Audit snapshots prove what was actually extracted",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Business intelligence and Apache Superset",
            body: [
              "Business intelligence is the serving layer's human face: dashboards and explorations that turn modelled tables into decisions, and Apache Superset is the open-source BI platform the syllabus names. The mechanics: Superset connects to the warehouse (SQLAlchemy connections to any SQL engine), defines datasets (the modelled tables surfaced to users), builds charts (the visualization layer: line, bar, table, map - each chart a saved query), assembles dashboards (charts + filters + tabs), and serves with row-level security (the RBAC that scopes what each team sees). The worked estate: 30 datasets on the warehouse, 120 charts, 25 dashboards, row-level security by region (the Asia manager sees Asia rows only), and a cache layer answering 200 concurrent morning viewers - the BI plane of 3.1 in product form.",
              "The worked dashboard build shows the craft: the 'orders health' dashboard - a KPI row (today's orders, revenue, failure rate), a time-series (orders by hour - the freshness SLO's public face), a breakdown (failure reasons from the fact table), and a filter chain (region, store) wired to the RLS - four charts, one dataset, row-level security inherited. The governance hook: every chart's SQL is versioned in the dashboard export (Superset's export-as-code), the dataset's quality score displays beside the chart (the 1.7 trust system), and the certification badge (curated vs draft) tells consumers what is trustworthy.",
              "Superset's positioning completes the section: it is open-source with SQL-native depth (the analysts write SQL freely), self-hosted governance (RLS, audit), and the cost profile the modern stack likes (no per-seat licence - the contrast with commercial BI); its trade-offs are the operational burden (you host it) and the polish gap with commercial tools. The closing sentence: BI is the lifecycle's payoff stage - Superset-class tools turn the warehouse's modelled truth into governed, filtered, cached answers that hundreds of users can trust and afford.",
              "Exam framing: 'Explain BI tools and Apache Superset' is a 7-14 mark staple. Give Superset's mechanics (datasets, charts, dashboards, RLS), the worked dashboard build, and the positioning with trade-offs.",
            ],
            keyTerms: [
              { term: "Dataset (Superset)", definition: "A modelled table surfaced for charting - the BI's unit of trust." },
              { term: "Row-level security", definition: "Query-level filters scoping rows per user/role." },
              { term: "Certification badge", definition: "The curated-vs-draft trust marker on datasets." },
              { term: "Export-as-code", definition: "Dashboards versioned as files - BI under change control." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From warehouse to governed dashboard",
              caption: "Datasets, charts, dashboards, RLS, cache - the serving layer assembled.",
              stages: [
                { label: "Warehouse", note: "modelled tables + quality scores" },
                { label: "Datasets", note: "30 surfaced, certification badges" },
                { label: "Charts", note: "120 saved queries, SQL versioned" },
                { label: "Dashboards", note: "25, filters + RLS by region" },
                { label: "Cache + serve", note: "200 concurrent morning viewers" },
              ],
            },
            bullets: [
              "Mechanics: SQLAlchemy connections, datasets, charts, dashboards, RBAC.",
              "Worked estate: 30 datasets, 120 charts, 25 dashboards, regional RLS.",
              "Dashboard build: KPI row, time-series, breakdown, filter chain.",
              "Governance: SQL versioned, quality scores displayed, certification badges.",
              "Positioning: open-source, SQL-native, no per-seat cost; self-hosted burden + polish gap.",
              "BI as the lifecycle's payoff stage.",
            ],
            callout: {
              type: "tip",
              title: "Trust displayed is trust used",
              body: "The BI sentence: 'the quality score and certification badge beside each chart convert the warehouse's tests into consumer trust - BI is where governance becomes visible.' The regional RLS is the security tie.",
            },
            table: {
              caption: "The orders-health dashboard anatomy.",
              headers: ["Component", "Chart type", "Source"],
              rows: [
                ["KPI row", "Big number x3", "Fact table aggregates"],
                ["Orders by hour", "Time-series line", "Fact + date dimension"],
                ["Failure breakdown", "Bar", "Fact + reason dimension"],
                ["Filter chain", "Region, store", "Wired to row-level security"],
              ],
            },
            examQuestions: [
              {
                q: "Explain BI and Apache Superset: the platform mechanics, the worked dashboard build, and the positioning with trade-offs.",
                marks: 14,
                outline: [
                  "Mechanics: connections, datasets, charts, dashboards, RLS",
                  "Worked estate numbers: 30/120/25 + cache",
                  "Dashboard build: KPI, time-series, breakdown, filters",
                  "Governance: versioned SQL, quality scores, badges",
                  "Open-source positioning + cost profile",
                  "Trade-offs: hosting burden, polish gap",
                  "Payoff-stage closing",
                ],
              },
              {
                q: "How does row-level security work in a BI tool?",
                marks: 7,
                outline: [
                  "Queries get injected filters per user/role",
                  "Region manager sees region rows only",
                  "Enforced at query time - not app-side",
                  "Works with caching via user-scoped keys",
                  "Authorization moves into the BI layer consistently",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Creating visualizations",
            body: [
              "Visualization choice is a design discipline, and the syllabus's 'creating visualizations' asks for the chart-to-question mapping. The mapping: time evolution -> line chart (the freshness SLO's face), composition -> stacked bar or treemap (part-to-whole), comparison -> bar chart (categories side by side), distribution -> histogram or box plot (the spread question), relationship -> scatter (two measures correlated), geography -> map (the regional dimension), single KPI -> big number (the attention anchor), and flow -> sankey (stage-to-stage conversion). The worked mapping: the orders-health dashboard of 4.5 uses big numbers for KPIs (attention), a line for hourly orders (time), a bar for failure reasons (comparison), and a map for regional revenue (geography) - four questions, four chart types, no decoration.",
              "The craft rules are the exam's marks: one question per chart (the chart answering two questions answers neither), axes that start where honest (the truncated-axis lie - bar charts from non-zero baselines exaggerate), colour as meaning (red = failure, not decoration), annotations over memory (the deploy marked on the dip - the reader should not need the tribal knowledge), and tables for precision (the chart shows shape, the table shows numbers - the drill-down pair). The worked craft case: the failure-rate chart's spike is annotated with the deploy timestamp ('release 2.14 at 14:02'), the axis starts at zero, and the drill-down table sits beside it - three rules applied to one chart.",
              "The anti-patterns complete the section: pie charts beyond 5 slices (the comparison the eye cannot do), dual axes (the correlation illusion), 3D effects (the distortion), and the dashboard-as-decoration pattern (charts nobody queries - the 1.4 usage metadata pruning them). The closing sentence: visualization is the serving layer's interface design - every chart is a question made visible, and the craft is refusing to show what the question did not ask.",
              "Exam framing: 'Explain visualization choice and craft in BI' is a 7-14 mark staple. Give the chart-to-question mapping with the worked dashboard, the five craft rules with the annotated-spike case, and the anti-patterns.",
            ],
            keyTerms: [
              { term: "Truncated axis", definition: "Non-zero baseline exaggerating differences - the honesty violation." },
              { term: "Annotation", definition: "Context marked on the chart (deploys, incidents) - memory made visible." },
              { term: "Drill-down pair", definition: "Chart for shape + table for precision." },
              { term: "Usage pruning", definition: "Retiring charts nobody queries - dashboard hygiene." },
            ],
            diagram: {
              kind: "matrix",
              title: "The chart-to-question map",
              caption: "Every question type has its chart - decoration is not on the map.",
              axes: { x: "Question shape (single value -> relationship)", y: "Data type (categorical -> spatial)" },
              quadrants: [
                { label: "Line: time evolution", note: "orders by hour; SLO freshness" },
                { label: "Big number: KPI", note: "today's revenue - the attention anchor" },
                { label: "Bar: comparison", note: "failure reasons side by side" },
                { label: "Map: geography", note: "regional revenue distribution" },
              ],
            },
            bullets: [
              "Mapping: line (time), bar (comparison), histogram (distribution), scatter (relationship), map (geography), big number (KPI), sankey (flow).",
              "Worked dashboard: four questions, four chart types, no decoration.",
              "Craft rules: one question per chart, honest axes, colour-as-meaning, annotations, chart+table pairs.",
              "Worked case: spike annotated with release 2.14 at 14:02; zero axis; drill-down table.",
              "Anti-patterns: 5+-slice pies, dual axes, 3D, decoration dashboards.",
              "Closing: refuse to show what the question did not ask.",
            ],
            callout: {
              type: "exam",
              title: "One chart, one question",
              body: "The craft sentence: 'a chart answering two questions answers neither - the mapping is question-first, and annotation is tribal knowledge made visible.' The release-2.14 annotation is the worked demonstration.",
            },
            table: {
              caption: "Chart-to-question mapping.",
              headers: ["Question", "Chart", "Example"],
              rows: [
                ["How does it change over time?", "Line", "Orders by hour"],
                ["How do categories compare?", "Bar", "Failure reasons"],
                ["What is the distribution?", "Histogram / box", "Order values"],
                ["Are two measures related?", "Scatter", "Ad spend vs revenue"],
                ["Where geographically?", "Map", "Regional revenue"],
                ["What is the headline?", "Big number", "Today's revenue"],
              ],
            },
            examQuestions: [
              {
                q: "Explain visualization choice: the chart-to-question mapping, the five craft rules with a worked case, and the anti-patterns.",
                marks: 14,
                outline: [
                  "Mapping across seven chart types with examples",
                  "Worked dashboard: four charts, four questions",
                  "Rules: one question, honest axes, colour meaning, annotations, drill-down pairs",
                  "Case: annotated spike with release timestamp",
                  "Anti-patterns: pies, dual axes, 3D, decoration",
                  "Usage pruning of dead charts",
                  "Question-first closing",
                ],
              },
              {
                q: "Why are dual-axis charts considered a correlation illusion?",
                marks: 7,
                outline: [
                  "Two independent scales create visual coincidence",
                  "Axis ranges chosen to align trends artificially",
                  "Readers infer causation from geometry",
                  "Safer: two aligned small-multiple charts",
                  "Honesty beats visual drama",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Data quality, catalogs, lineage and governance",
            body: [
              "The governance quartet closes Unit IV: quality (the measured trust of 1.7), catalogs (the findable inventory of 3.3), lineage (the copy map of 1.5), and governance (the policies binding them - access, retention, classification). The worked quartet in one incident: an analyst flags the churn dashboard as wrong - the lineage traces the churn metric through three models to a source table, the catalog shows that table's owner and 7-day-old freshness SLO breach, the quality tests reveal the failed uniqueness test (duplicate customer rows from a CDC glitch), and the governance policy routes the fix (the owning team fixes, the downstream consumers are notified, the incident is logged). Four tools, one incident, fifteen minutes to root cause - the quartet working as a system.",
              "The worked governance policies complete the estate: classification (public/internal/confidential/restricted tiers binding access and masking - 1.6's zones), retention (per-class clocks - the 1.5 erasure duty), access (role-based, reviewed quarterly), and the data contracts (producer-to-consumer agreements: schema, SLO, breaking-change notice - the schema-drift answer). The numbers: 4 classification tiers, 12 retention classes, quarterly access reviews, 20 active contracts - the governance stack as countable policy, not a mission statement.",
              "The quartet's division of labour is the exam's analysis: quality answers 'is it right', catalog answers 'what exists', lineage answers 'where did it come from and go', governance answers 'who may, how long, under what rules' - and the incident shows why they ship together (each alone leaves the investigation stuck at its own boundary). The closing sentence: governance is the estate's immune system - the quartet detects, traces, decides and remembers, and without it every data problem is a mystery.",
              "Exam framing: 'Explain data quality, catalogs, lineage and governance together' is the unit's 14-mark synthesis. Give the quartet's roles, work the churn-dashboard incident through all four, and close with the immune-system sentence.",
            ],
            keyTerms: [
              { term: "Data contract", definition: "Producer-consumer agreement: schema, SLO, breaking-change notice." },
              { term: "Classification tiers", definition: "Public/internal/confidential/restricted - access and masking bind to them." },
              { term: "Retention class", definition: "Per-data-class deletion clocks - the erasure implementation." },
              { term: "Governance quartet", definition: "Quality + catalog + lineage + governance as one system." },
            ],
            diagram: {
              kind: "cycle",
              title: "The quartet working one incident",
              caption: "Flag -> trace -> locate -> diagnose -> route - four tools, fifteen minutes.",
              steps: [
                { label: "Flag", note: "analyst: churn dashboard wrong" },
                { label: "Trace (lineage)", note: "metric -> 3 models -> source table" },
                { label: "Locate (catalog)", note: "owner + freshness SLO breach found" },
                { label: "Diagnose (quality)", note: "uniqueness test failed: CDC duplicates" },
                { label: "Route (governance)", note: "owning team fixes; consumers notified" },
              ],
            },
            bullets: [
              "Quartet roles: quality (is it right), catalog (what exists), lineage (where from/to), governance (who/long/rules).",
              "Worked incident: churn metric -> lineage -> catalog owner -> failed uniqueness test -> policy-routed fix.",
              "Fifteen minutes to root cause - the system dividend.",
              "Policies: 4 classification tiers, 12 retention classes, quarterly reviews, 20 contracts.",
              "Data contracts answer schema drift with notice duties.",
              "Immune-system closing: detect, trace, decide, remember.",
            ],
            callout: {
              type: "exam",
              title: "The quartet ships together",
              body: "The synthesis sentence: 'quality alone finds the symptom, lineage alone finds the path, catalog alone finds the owner, governance alone decides - the incident needs all four, which is why they ship as one system.' The churn incident is the walkthrough.",
            },
            table: {
              caption: "The governance stack as countable policy.",
              headers: ["Policy", "Count", "Binds"],
              rows: [
                ["Classification tiers", "4", "Access + masking"],
                ["Retention classes", "12", "Deletion clocks"],
                ["Access reviews", "Quarterly", "Role grants"],
                ["Data contracts", "20 active", "Schema + SLO + notice"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the governance quartet: each member's role, the worked churn-dashboard incident through all four, the policy stack with counts, and the immune-system closing.",
                marks: 14,
                outline: [
                  "Roles: quality, catalog, lineage, governance",
                  "Incident walkthrough: flag -> trace -> locate -> diagnose -> route",
                  "Root cause: CDC duplicates failing uniqueness test",
                  "15-minute resolution as the system dividend",
                  "Policies: tiers, retention, reviews, contracts",
                  "Data contracts vs schema drift",
                  "Immune-system framing",
                ],
              },
              {
                q: "What makes a data contract enforceable rather than aspirational?",
                marks: 7,
                outline: [
                  "CI runs producer tests against the contract",
                  "Breaking changes require notice windows",
                  "Violations page the producer, not the consumer",
                  "Contracts live in the catalog as lineage edges",
                  "Enforcement is machinery, not a signed PDF",
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
      title: "ETL, Reverse ETL and Operations",
      summary:
        "Unit V covers ETL and reverse ETL, security and privacy, patching and updating systems, logging, monitoring and alerting, and the future of data engineering.",
      chapter: {
        number: "05",
        title: "Operations and the Road Ahead",
        intro:
          "Unit V covers ETL, reverse ETL, security, privacy, and the future of data engineering, plus the operational duties - patch and update systems, logging, monitoring and alerting - that keep the estate honest.",
        inOneBreath:
          "ETL transforms outside (control, cluster, USD 12) and ELT transforms inside (leverage, raw audit, USD 18) - the choice is audit, cost and platform, with ELT the SQL default. Orchestration runs the seven-task DAG with idempotent, date-parameterized tasks; reverse ETL syncs deltas (4,200 of 50,000) into operations with read-only targets. Security and privacy are operating metrics (14 grants, 6 erasures); maintenance is a calendar (four-gate upgrades); observability pages symptoms with runbooks and logs everything structured. The future is more automation over the same five stages - tools change, the trust problem does not.",
        sections: [
          {
            number: "5.1",
            title: "ETL versus ELT",
            body: [
              "ETL and ELT are the transformation layer's two philosophies, and the syllabus's pairing is the discipline's central design choice. ETL (extract-transform-load): transform before loading - the transformation runs in a separate compute layer (Spark, custom code) and lands finished tables; the philosophy is control (transform logic in general-purpose code, target tables clean from birth) and the cost is a separate transformation infrastructure. ELT (extract-load-transform): load raw first, transform inside the warehouse with SQL (dbt-class tooling) - the philosophy is leverage (the warehouse's elastic compute does the work, raw data stays auditable in the platform) and the cost is warehouse compute spend.",
              "The worked comparison shows both on the same source: a 40 GB nightly extract - ETL path: Spark job transforms in a cluster (USD 12/job compute), lands 8 conformed tables, warehouse stays lean; ELT path: land raw (40 GB), dbt models transform in-warehouse (USD 18/night compute at scale rates), 8 conformed tables + the raw layer retained for audits. The trade arithmetic: ETL saves warehouse compute (USD 6/night less) but pays a cluster + loses the auditable raw layer; ELT pays compute but keeps raw lineage, enables reprocessing without re-extraction, and concentrates the stack (no Spark cluster to operate). The modern default: cloud warehouses made ELT the default for SQL-expressible transformations, with ETL surviving for transformations that need general-purpose code (ML feature engineering, complex parsing) or external compute economics.",
              "The selection rule completes the section: transformation complexity (SQL-expressible -> ELT; code-required -> ETL), audit needs (raw-retention argues ELT), infrastructure appetite (one-platform ELT vs two-platform ETL), and cost shape (warehouse rates vs cluster rates - the worked USD arithmetic). The closing sentence: ETL and ELT differ on where the transformation happens - the choice is an audit, cost and platform decision, not a fashion.",
              "Exam framing: 'Compare ETL and ELT' is a 7-14 mark staple. Give both philosophies with the worked 40-GB arithmetic, and close with the four-factor selection rule.",
            ],
            keyTerms: [
              { term: "ETL", definition: "Transform before load - separate compute, clean landing." },
              { term: "ELT", definition: "Load raw, transform in-warehouse with SQL - leverage + raw audit." },
              { term: "Raw layer", definition: "The immutable landed source copy - ELT's audit asset." },
              { term: "dbt", definition: "The ELT transformation tool: SQL models, tests, docs in git." },
            ],
            diagram: {
              kind: "compare",
              title: "ETL vs ELT on the same 40 GB extract",
              caption: "Transform outside (control, cluster) or inside (leverage, raw audit) - the arithmetic decides.",
              left: {
                heading: "ETL path",
                items: [
                  "Spark cluster transforms: USD 12/job",
                  "Lands 8 clean tables",
                  "No raw layer retained",
                  "Two platforms to operate",
                ],
              },
              right: {
                heading: "ELT path",
                items: [
                  "Land raw 40 GB, dbt in-warehouse: USD 18/night",
                  "8 tables + auditable raw layer",
                  "Reprocess without re-extraction",
                  "One platform, SQL-only logic",
                ],
              },
            },
            bullets: [
              "ETL: transform-before-load, control philosophy, separate compute, clean targets.",
              "ELT: load-then-transform, leverage philosophy, warehouse compute, raw retention.",
              "Worked arithmetic: USD 12 cluster vs USD 18 warehouse; raw layer + one-platform advantages.",
              "Modern default: ELT for SQL-expressible transformations.",
              "ETL survives: code-required transforms, external compute economics.",
              "Selection: complexity, audit needs, platform appetite, cost shape.",
            ],
            callout: {
              type: "exam",
              title: "The raw layer is ELT's audit asset",
              body: "The ELT sentence: 'loading raw first is not waste - it is the auditable truth that enables reprocessing without re-extraction.' The USD 12-vs-18 arithmetic shows the cost trade; the raw layer shows what the extra USD 6 buys.",
            },
            table: {
              caption: "The ETL/ELT trade table.",
              headers: ["Factor", "ETL", "ELT"],
              rows: [
                ["Transform location", "Separate cluster", "Inside warehouse"],
                ["Worked compute", "USD 12/night", "USD 18/night"],
                ["Raw audit layer", "Absent", "Retained"],
                ["Reprocessing", "Re-extract needed", "Re-run from raw"],
                ["Stack", "Two platforms", "One platform"],
                ["Logic boundary", "Any code", "SQL-expressible"],
              ],
            },
            examQuestions: [
              {
                q: "Compare ETL and ELT: the two philosophies, the worked 40-GB arithmetic, and the four-factor selection rule.",
                marks: 14,
                outline: [
                  "ETL: control, separate compute, clean landing",
                  "ELT: leverage, warehouse compute, raw retention",
                  "Worked: USD 12 vs USD 18/night",
                  "Raw layer as audit + reprocessing asset",
                  "One-platform vs two-platform operation",
                  "Modern default: ELT for SQL work",
                  "ETL surviving for code-required cases",
                ],
              },
              {
                q: "Why does ELT enable reprocessing without re-extraction?",
                marks: 7,
                outline: [
                  "Raw layer keeps the immutable source copy",
                  "Transformation is a pure function over raw",
                  "Logic fixes re-run against stored raw",
                  "No dependency on source availability or history",
                  "Source systems are never re-burdened",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "ETL/ELT pipelines in practice: orchestration",
            body: [
              "Pipelines in practice are orchestrated, tested and observable - the DataOps of 1.7 applied to the daily build. The orchestrator's mechanics: the DAG (directed acyclic graph - tasks with dependencies), the scheduler (time-based and data-based triggers), retries with backoff, backfills (historical re-runs by date), and the task interface (idempotent, parameterized by date). The worked Airflow DAG: extract_orders (01:00, SFTP pull) -> land_raw (checksum + landing) -> staging_models -> dimension_scd2 -> fact_merge -> run_tests (27 tests) -> publish_slo - seven tasks, three dependency branches, retries x3 with 5-minute backoff, parameterized by execution date; the DAG is the pipeline's contract with the calendar.",
              "The worked pipeline incident shows the practice: the extract task fails at 01:20 (partner SFTP down) - retries fail x3, the orchestrator marks the run failed, the alert pages with the task log, and the 02:00 downstream tasks never run (the dependency graph doing its job); at 04:00 the partner recovers, the engineer re-runs the failed task (idempotent - safe), the DAG resumes from the watermark, and the 06:00 SLO is still met. The numbers: 3 retries, 5-minute backoff, 4-hour manual window, SLO met - the failure that did not become an incident.",
              "The pipeline disciplines complete the section: small tasks (one responsibility each - the monolith DAG that fails everything when anything fails), parameterization by date (the same code runs any day - the backfill property), observability (duration, volume, freshness per task - the anomaly detection), and the SLA definition (which tasks must finish by when - the 06:00 publication). The closing sentence: the orchestrator is the pipeline's operating system - the DAG declares the dependencies, the calendar declares the SLA, and idempotent tasks make the whole thing re-runnable by design.",
              "Exam framing: 'Explain ETL/ELT pipeline orchestration in practice' is a 7-14 mark staple. Give the orchestrator mechanics with the worked seven-task DAG, the incident walkthrough with its numbers, and the pipeline disciplines.",
            ],
            keyTerms: [
              { term: "DAG", definition: "The dependency graph of tasks - the pipeline's declared structure." },
              { term: "Backfill", definition: "Historical re-runs parameterized by date - the same code, any day." },
              { term: "Retry with backoff", definition: "x3 attempts, 5-minute spacing - transient failure absorption." },
              { term: "SLA task", definition: "The must-finish-by deadline (06:00 publish) the orchestrator enforces." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The nightly DAG: seven tasks, one SLA",
              caption: "Extract -> land -> staging -> SCD -> merge -> tests -> publish - dependencies do the gating.",
              stages: [
                { label: "extract_orders", note: "01:00 SFTP pull, retries x3" },
                { label: "land_raw", note: "checksum + landing (idempotent)" },
                { label: "staging -> dims", note: "models + SCD2 upserts" },
                { label: "fact_merge", note: "incremental facts" },
                { label: "run_tests -> publish", note: "27 tests gate the 06:00 SLO" },
              ],
            },
            bullets: [
              "Mechanics: DAG, scheduler, retries/backoff, backfills, date-parameterized tasks.",
              "Worked DAG: seven tasks, three branches, 27-test gate, 06:00 SLA.",
              "Incident: SFTP down at 01:20 -> retries -> page -> downstream gated.",
              "Recovery at 04:00: idempotent re-run, watermark resume, SLO met.",
              "Disciplines: small tasks, date parameterization, observability, SLA definition.",
              "Closing: DAG declares dependencies; idempotency makes it re-runnable.",
            ],
            callout: {
              type: "tip",
              title: "The dependency graph is the failure firewall",
              body: "The orchestration sentence: 'downstream tasks that never ran on a failed upstream is the system working - the DAG converts one failure into one page, not seven.' Idempotent tasks are what make the 04:00 re-run safe.",
            },
            table: {
              caption: "Orchestrator features and their roles.",
              headers: ["Feature", "Role", "Worked value"],
              rows: [
                ["DAG dependencies", "Failure gating", "Downstream never runs on failed upstream"],
                ["Retries + backoff", "Transient absorption", "x3, 5-minute spacing"],
                ["Backfill", "History re-runs", "Same code, parameterized by date"],
                ["Observability", "Anomaly detection", "Duration/volume/freshness per task"],
                ["SLA", "Deadline enforcement", "06:00 publication"],
              ],
            },
            examQuestions: [
              {
                q: "Explain pipeline orchestration: the mechanics with the worked seven-task DAG, the incident walkthrough with numbers, and the pipeline disciplines.",
                marks: 14,
                outline: [
                  "DAG + scheduler + retries + backfills explained",
                  "Seven-task nightly DAG with test gate",
                  "Incident: SFTP failure -> gating -> page",
                  "Recovery: idempotent re-run, watermark resume",
                  "SLO met after 4-hour window",
                  "Disciplines: small tasks, parameterization, observability, SLA",
                  "Operating-system framing",
                ],
              },
              {
                q: "Why must every pipeline task be parameterized by execution date?",
                marks: 7,
                outline: [
                  "Same code must produce any day's result",
                  "Backfills re-run history without code changes",
                  "Determinism supports idempotent retries",
                  "Reproducibility supports audits",
                  "Date is the pipeline's unit of work",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Reverse ETL",
            body: [
              "Reverse ETL is the lifecycle's return leg: operational systems consuming warehouse-computed data - the analytics computed centrally flowing back into the tools where work happens. The mechanics: the warehouse's modelled tables are the source, a reverse-ETL tool (Hightouch-class, or custom sync jobs) extracts rows matching a model, transforms them into the target's format, and syncs to the operational system (CRM, marketing platform, support desk) via its API. The worked flow: the warehouse computes customer_health_score (churn model output, refreshed nightly), reverse ETL syncs 50,000 scored customers to the CRM as a custom field (delta sync: only 4,200 scores changed), and the sales team's dashboard and alert rules run on the CRM field - the ML model's output is now an operational artefact.",
              "The worked use cases show the pattern's reach: lead scoring into the CRM (the model follows the seller), churn-risk flags into the support desk (the ticket prioritization), product-usage segments into the marketing platform (the campaign audience), inventory forecasts into the ERP (the reorder point), and personalization attributes into the web app (the CDP-class flow). The numbers: 50k scored customers, 4,200 deltas nightly, 15-minute sync window, zero manual exports - the analytics-to-operations loop closed without a human carrying a CSV.",
              "The disciplines and risks complete the section: sync contracts (which fields, which direction, conflict rules - the operational system's own edits), loop safety (the synced field is read-only in the target - the two-master problem), rate limits and delta syncs (the API budget), and auditability (the sync log tying every operational value to its model run). The closing sentence: reverse ETL collapses the analytics-to-action latency - from days (the analyst's export) to minutes (the sync) - and its discipline is keeping the warehouse the single source while the operations tools stay consumers.",
              "Exam framing: 'Explain reverse ETL' is a 7-14 mark staple. Give the mechanics with the health-score flow and numbers, the use-case map, and the disciplines/risks.",
            ],
            keyTerms: [
              { term: "Reverse ETL", definition: "Syncing warehouse-computed data into operational systems." },
              { term: "Delta sync", definition: "Moving only changed rows - the API-budget discipline." },
              { term: "Two-master problem", definition: "Both systems editing the same field - prevented by read-only sync targets." },
              { term: "Sync contract", definition: "Fields, direction, conflict rules - the operational agreement." },
            ],
            diagram: {
              kind: "flow",
              title: "The reverse-ETL loop: model to CRM",
              caption: "Warehouse computes, sync delivers, operations act - the analytics-to-action latency collapses.",
              steps: [
                { label: "Warehouse model", note: "customer_health_score refreshed nightly" },
                { label: "Extract delta", note: "4,200 of 50,000 scores changed" },
                { label: "Transform", note: "map to CRM field schema" },
                { label: "Sync", note: "API upsert, 15-minute window" },
                { label: "Operate", note: "alerts + dashboards on the CRM field" },
              ],
            },
            bullets: [
              "Mechanics: warehouse source -> reverse-ETL tool -> target API, delta syncs.",
              "Worked flow: 50k scores, 4.2k deltas, 15-minute window, zero exports.",
              "Use cases: lead scoring, churn flags, segments, forecasts, personalization.",
              "Disciplines: sync contracts, read-only targets, rate limits, audit logs.",
              "Risk: two-master edits - resolved by single-source design.",
              "Closing: analytics-to-action latency collapses from days to minutes.",
            ],
            callout: {
              type: "tip",
              title: "The warehouse stays the single source",
              body: "The reverse-ETL sentence: 'operational tools must stay consumers - the synced field is read-only in the target, or the two-master problem corrupts both sides.' The delta-sync arithmetic (4,200 of 50,000) shows the API-budget discipline.",
            },
            table: {
              caption: "Reverse-ETL use cases and targets.",
              headers: ["Use case", "Target", "Operational effect"],
              rows: [
                ["Lead scoring", "CRM", "Sellers prioritize by model"],
                ["Churn risk", "Support desk", "Ticket prioritization"],
                ["Segments", "Marketing platform", "Campaign audiences"],
                ["Forecast", "ERP", "Reorder points"],
                ["Personalization", "Web app / CDP", "Live site attributes"],
              ],
            },
            examQuestions: [
              {
                q: "Explain reverse ETL: the mechanics with the worked health-score flow, the use-case map, and the disciplines and risks.",
                marks: 14,
                outline: [
                  "Mechanics: model -> extract -> transform -> sync",
                  "Worked: 50k scores, 4.2k deltas, 15-min window",
                  "Use cases across five operational targets",
                  "Sync contracts + read-only targets",
                  "Two-master risk resolved by design",
                  "Auditability of every synced value",
                  "Latency-collapse closing",
                ],
              },
              {
                q: "Why must synced fields be read-only in the operational system?",
                marks: 7,
                outline: [
                  "Two writers create conflicting truth",
                  "Warehouse is the model's authority",
                  "Operational edits would be overwritten on next sync",
                  "Read-only keeps provenance clean",
                  "Corrections flow through the warehouse, not the target",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Security and privacy in data engineering",
            body: [
              "Security and privacy complete the undercurrents in the operations unit: the duties of 1.6 applied to the running estate, plus the privacy duties of the data lifecycle. The security operations: access reviews (quarterly - the role grants of 3.7's zones audited), secret rotation (the vault's credentials cycled per policy - the 1.6 fix trio maintained), network posture (private endpoints - the warehouse and storage reachable only inside the VPC), audit trails (every query against PII columns logged and reviewed), and vulnerability management (the platform's patching - 5.5's duty applied to data infrastructure). The worked security quarter: 14 role grants reviewed (2 revoked - departed staff), 60 secrets rotated, zero public endpoints, 340 PII-query logs reviewed (3 flagged and explained), 2 platform patches applied - the undercurrent as a measured programme.",
              "The privacy operations bind the data lifecycle (1.5): classification maintained (the catalog's PII labels current - new columns flagged by the scanner), retention jobs run (the 12 retention classes of 4.7 executing - erasure across all copies), subject-rights fulfilment (the access/erasure requests processed within statutory windows - the lineage making erasure complete), and privacy reviews for new pipelines (the DPIA-lite before a new PII source lands). The worked privacy month: 18 new columns scanned (2 PII flagged and classified), 6 erasure requests fulfilled across 5 systems (lineage-verified), 1 retention job corrected (the backup class was missing its clock), 2 pipeline DPIAs completed - the lifecycle duties as running machinery.",
              "The division of labour is the exam's analysis: security protects the platform (access, secrets, networks, audits), privacy protects the data's journey (classification, retention, rights) - and both are operations (measured quarterly/monthly), not projects. The closing sentence: in data engineering, security and privacy are not features of the platform but metrics of its operation - the quarter's numbers are the audit's evidence.",
              "Exam framing: 'Explain security and privacy operations in data engineering' is a 7-14 mark staple. Give the security operations with the worked quarter, the privacy operations with the worked month, and the division-of-labour closing.",
            ],
            keyTerms: [
              { term: "Access review", definition: "Quarterly audit of role grants - revocations for departed staff." },
              { term: "PII scanner", definition: "Column-level detection flagging new personal data for classification." },
              { term: "Subject-rights fulfilment", definition: "Access/erasure requests processed across all copies via lineage." },
              { term: "DPIA-lite", definition: "The lightweight privacy review gating new PII pipelines." },
            ],
            diagram: {
              kind: "compare",
              title: "Security operations vs privacy operations",
              caption: "Protect the platform, govern the journey - both measured as operations, not projects.",
              left: {
                heading: "Security (protect the platform)",
                items: [
                  "Quarterly access reviews: 14 grants, 2 revoked",
                  "60 secrets rotated",
                  "Zero public endpoints; VPC-only",
                  "340 PII-query logs reviewed",
                ],
              },
              right: {
                heading: "Privacy (govern the journey)",
                items: [
                  "18 columns scanned, 2 PII classified",
                  "6 erasures across 5 systems, lineage-verified",
                  "1 retention job corrected",
                  "2 new-pipeline DPIAs",
                ],
              },
            },
            bullets: [
              "Security ops: access reviews, secret rotation, private endpoints, audit trails, patching.",
              "Worked quarter: 14 grants, 60 secrets, 340 logs, 2 patches.",
              "Privacy ops: classification scanning, retention jobs, subject rights, DPIAs.",
              "Worked month: 18 columns, 6 erasures, 1 correction, 2 DPIAs.",
              "Division: platform-protection vs journey-governance.",
              "Both measured as operations - numbers are audit evidence.",
            ],
            callout: {
              type: "exam",
              title: "Operations, not projects",
              body: "The closing sentence: 'security and privacy in data engineering are operating metrics - the quarter's 14 grants and the month's 6 erasures are what the auditor reads.' Lineage-verified erasure ties 1.5's duty to the running estate.",
            },
            table: {
              caption: "The operations calendar.",
              headers: ["Cadence", "Security duty", "Privacy duty"],
              rows: [
                ["Quarterly", "Access reviews", "Access reviews (shared)"],
                ["Monthly", "PII-query log review", "Rights fulfilment report"],
                ["Continuous", "Secret rotation, patching", "Classification scanning, retention jobs"],
                ["Per-change", "New-endpoint review", "DPIA for new PII pipelines"],
              ],
            },
            examQuestions: [
              {
                q: "Explain security and privacy operations: the security duties with the worked quarter, the privacy duties with the worked month, and the division-of-labour closing.",
                marks: 14,
                outline: [
                  "Security: reviews, rotation, endpoints, audit logs, patching",
                  "Worked quarter numbers quoted",
                  "Privacy: classification, retention, rights, DPIAs",
                  "Worked month numbers quoted",
                  "Lineage-verified erasure tie to 1.5",
                  "Platform vs journey division",
                  "Operations-as-evidence closing",
                ],
              },
              {
                q: "Why do PII-query audit logs matter even with perfect access control?",
                marks: 7,
                outline: [
                  "Authorized access can still misuse data",
                  "Logs answer who saw what, when",
                  "Anomalies (bulk reads) surface insider risk",
                  "Regulators request the trail after incidents",
                  "Access control gates; audit trails prove",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Patching, updating and maintaining systems",
            body: [
              "The estate's maintenance is the syllabus's operational duty: patching (security and stability updates on everything that runs - the warehouse's runtime, the orchestrator, the connectors' runtimes, the OS beneath), updating (version upgrades of the platform components - the dbt 1.x to 1.y migration, the connector major versions), and maintaining (the continuous hygiene - compaction jobs, vacuum, cost cleanup, access pruning). The worked maintenance calendar: weekly (connector-version drift check, cost anomaly review), monthly (dependency updates in staging, compaction cadence on hot tables), quarterly (access reviews of 5.4, platform upgrades with rollback plans), annually (architecture review, contract renewals) - the estate as a tended garden, not a monument.",
              "The worked upgrade case shows the discipline: the warehouse platform announces a breaking change in a SQL function - the impact scan (12 dbt models use it), the staging migration (models updated, 27 tests pass), the canary deployment (one mart migrated, SLOs watched for a week), and the fleet rollout with the rollback plan (the previous image retained) - four gates between announcement and production. The numbers: 12 models impacted, 1-week canary, zero-downtime rollout - the maintenance discipline that turns vendor announcements into scheduled work instead of incidents.",
              "The failure modes are the exam's warning list: unpatched runtimes (the connector's CVE - the estate's forgotten server), upgrade-by-accident (auto-updates landing breaking changes on a Friday - the calendar discipline), and maintenance debt (the compaction skipped for a quarter - the small-file slowdown of 2.4 arriving as a 'mysterious' performance regression). The closing sentence: maintenance is the estate's interest payments - skip them and the principal comes due as an outage, on the worst possible day.",
              "Exam framing: 'Explain patching, updating and maintenance in data engineering' is a 7-14 mark staple. Give the maintenance calendar, the worked upgrade case with its four gates, and the failure modes.",
            ],
            keyTerms: [
              { term: "Maintenance calendar", definition: "Weekly/monthly/quarterly/annual cadences per duty." },
              { term: "Canary deployment", definition: "One workload migrated first, SLOs watched before fleet rollout." },
              { term: "Upgrade-by-accident", definition: "Auto-updates landing breaking changes - the calendar discipline's target." },
              { term: "Maintenance debt", definition: "Skipped hygiene (compaction, pruning) compounding into outages." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The four-gate upgrade path",
              caption: "Impact scan -> staging -> canary -> fleet - every gate reversible, zero surprises.",
              stages: [
                { label: "Impact scan", note: "12 models use the changed function" },
                { label: "Staging migration", note: "models updated; 27 tests pass" },
                { label: "Canary", note: "one mart, SLOs watched for a week" },
                { label: "Fleet rollout", note: "rollback plan retained; zero downtime" },
              ],
            },
            bullets: [
              "Calendar: weekly (drift, cost), monthly (deps, compaction), quarterly (access, upgrades), annual (architecture).",
              "Patch scope: runtimes, orchestrator, connectors, underlying OS.",
              "Worked upgrade: breaking SQL change -> 4 gates -> zero-downtime rollout.",
              "Numbers: 12 impacted models, 1-week canary, rollback retained.",
              "Failure modes: unpatched runtimes, upgrade-by-accident, maintenance debt.",
              "Interest-payment closing: skip hygiene, pay as outage.",
            ],
            callout: {
              type: "exam",
              title: "Announcements are scheduled work",
              body: "The maintenance sentence: 'the four-gate upgrade path turns vendor announcements into scheduled work - 12 impacted models found by scan, not by outage.' The compaction debt example shows what skipping the calendar costs.",
            },
            table: {
              caption: "The maintenance calendar.",
              headers: ["Cadence", "Duties", "Worked items"],
              rows: [
                ["Weekly", "Drift check, cost anomalies", "Connector versions; bill spikes"],
                ["Monthly", "Dependency updates, compaction", "Staging-tested updates; hot-table hygiene"],
                ["Quarterly", "Access reviews, upgrades", "5.4's reviews; 4-gate rollouts"],
                ["Annual", "Architecture + contracts", "Platform strategy; renewals"],
              ],
            },
            examQuestions: [
              {
                q: "Explain patching, updating and maintenance: the calendar, the worked four-gate upgrade with numbers, and the failure modes.",
                marks: 14,
                outline: [
                  "Calendar cadences with duties",
                  "Patch scope: runtimes to OS",
                  "Upgrade: scan -> staging -> canary -> fleet",
                  "Numbers: 12 models, 1-week canary",
                  "Rollback plans retained",
                  "Failure modes: unpatched, auto-upgrade, debt",
                  "Interest-payment closing",
                ],
              },
              {
                q: "Why does a canary deployment suit warehouse upgrades?",
                marks: 7,
                outline: [
                  "Workload isolation (3.1) makes one-mart pilots possible",
                  "SLOs measure the canary against baseline",
                  "Blast radius is one mart, not the estate",
                  "Rollback is a routing switch",
                  "Confidence precedes fleet rollout",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Logging, monitoring and alerting",
            body: [
              "The observability trio is how the running estate stays honest: logging (the what-happened record - task logs, query logs, data volumes), monitoring (the is-it-healthy measurement - the metrics watched continuously), and alerting (the who-gets-told decision - pages with context, not emails into voids). The worked metric stack: pipeline metrics (task duration, rows processed, freshness lag - the per-task telemetry of 5.2), data metrics (null rates, volume deltas, distribution shifts - the quality observability of 1.7), cost metrics (warehouse credits, storage growth - the 3.1 cost plane), and platform metrics (queue depth, API error rates - the movement plane's health). The numbers: 4 metric families, 40 dashboards, 60 alerts, 12 pages/month - an estate that knows itself.",
              "The alerting craft is the section's discipline: alerts page on symptoms consumers feel (the freshness SLO breach - not the task's first retry), carry context (the task, the table, the owner, the runbook link - the 3 a.m. engineer's questions pre-answered), route by ownership (the owning team's channel - the 4.7 governance routing), and are tuned against noise (the alert that fired 30 times last month is deleted or de-sensitized - the signal-to-noise budget). The worked alert review: 60 alerts, 12 pages/month, 10 actionable (2 noise alerts deleted, 1 threshold loosened) - the observability system maintained like any other asset.",
              "The logging discipline completes the trio: structured logs (queryable fields, not prose), retention per class (task logs 30 days, PII-query logs per compliance - the 5.4 tie), and the incident-replay property (the logs plus lineage reconstruct any incident - the 4.7 quartet's memory). The closing sentence: logging remembers, monitoring measures, alerting tells - and the trio's craft is keeping each honest: structured, symptom-driven, and owned.",
              "Exam framing: 'Explain logging, monitoring and alerting for data platforms' is a 7-14 mark staple. Give the four metric families with the worked numbers, the alerting craft with the review case, and the logging discipline.",
            ],
            keyTerms: [
              { term: "Data observability", definition: "Quality metrics (nulls, volumes, freshness) watched continuously." },
              { term: "Symptom-driven alerting", definition: "Page on consumer-felt symptoms, not internal noise." },
              { term: "Runbook link", definition: "The alert's pre-answered questions: task, table, owner, first steps." },
              { term: "Alert review", definition: "Deleting noise, tuning thresholds - observability maintained as an asset." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The observability trio on one incident",
              caption: "Log remembers, monitor measures, alert tells - with context, to the owner.",
              stages: [
                { label: "Log", note: "task logs: structured, 30-day retention" },
                { label: "Monitor", note: "freshness lag metric breaches SLO" },
                { label: "Alert", note: "page with task, table, owner, runbook" },
                { label: "Route", note: "owning team's channel via governance" },
                { label: "Review", note: "noise alerts deleted; thresholds tuned" },
              ],
            },
            bullets: [
              "Metric families: pipeline, data, cost, platform - 40 dashboards, 60 alerts.",
              "Worked alerting: symptom-driven (SLO breach), context-carrying, ownership-routed.",
              "Review case: 60 alerts -> 12 pages -> 10 actionable; 2 deleted, 1 tuned.",
              "Logging: structured fields, per-class retention, incident-replay property.",
              "Noise budget: the 30-fire alert is deleted or de-sensitized.",
              "Closing: remembers, measures, tells - each honest.",
            ],
            callout: {
              type: "tip",
              title: "Page symptoms, log everything",
              body: "The observability sentence: 'pages go to symptoms consumers feel (SLO breaches), logs record everything - the inverse design drowns engineers in internals.' The runbook link is the 3 a.m. difference between incident and archaeology.",
            },
            table: {
              caption: "The metric families and their alerts.",
              headers: ["Family", "Metrics", "Signature alert"],
              rows: [
                ["Pipeline", "Duration, rows, retries", "Task failed after x3"],
                ["Data", "Nulls, volumes, freshness", "Freshness SLO breach"],
                ["Cost", "Credits, storage growth", "Bill spike >30% week-on-week"],
                ["Platform", "Queue depth, API errors", "Connector error-rate rise"],
              ],
            },
            examQuestions: [
              {
                q: "Explain logging, monitoring and alerting: the metric families with numbers, the alerting craft with the review case, and the logging discipline.",
                marks: 14,
                outline: [
                  "Families: pipeline, data, cost, platform",
                  "Numbers: 4 families, 40 dashboards, 60 alerts, 12 pages",
                  "Craft: symptoms, context, ownership routing",
                  "Review: 10 actionable, 2 deleted, 1 tuned",
                  "Structured logs + per-class retention",
                  "Incident-replay property",
                  "Remembers-measures-tells closing",
                ],
              },
              {
                q: "Why should alerting page on SLO breaches rather than task failures?",
                marks: 7,
                outline: [
                  "Retries absorb most transient failures - not consumer-visible",
                  "SLO breach is the consumer's experienced symptom",
                  "Task-failure pages multiply noise",
                  "SLO alerting aggregates signal across failures",
                  "Ownership routing still identifies the task",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "The future of data engineering",
            body: [
              "The subject's closing section looks forward, and the exam expects directions with mechanisms, not predictions. The directions: the platform convergence (the lakehouse absorbing warehouse, streaming and catalog - one platform, fewer seams), the AI-native estate (LLMs writing and reviewing transformations, the text-to-SQL serving layer, ML feature platforms standardizing), data contracts as standard practice (the schema-drift war ending in machine-checked agreements), the real-time default (streaming costs falling toward batch - the Kappa economics of 2.7 improving), and the governance automation (privacy scanning, lineage capture, access reviews machine-run - the 5.4 operations industrialized). The worked trend with numbers: text-to-SQL quality rising (the serving layer's natural-language interface), auto-lineage from query logs (the catalog's manual-curating era ending), and the dbt-class transformation layer becoming the standard interface between ingestion and serving.",
              "The worked future scenario sketches the estate in five years: ingestion largely autonomous (managed connectors + contract-verified sources), transformation AI-assisted (models drafted by LLM, tested by the 27-test suite, reviewed by engineers), serving conversational (the analyst asks, the semantic layer answers with lineage-cited results), governance machine-run (scanning, lineage, retention executing as default infrastructure), and the engineer's role shifted up the stack (architecture, contracts, and the judgement the machines lack - the 1.3 skills pyramid's soft layer becoming the differentiator).",
              "The constants are the exam's closing wisdom: the lifecycle's five stages persist (whatever the tools), the trust problem is permanent (every era's failure), and the disciplines - idempotency, testing, lineage, cost consciousness - are era-independent. The closing sentence: the future of data engineering is more automation over the same lifecycle - the tools change, the five stages and the trust problem do not, and the engineer's leverage moves from writing pipelines to designing the systems that write them.",
              "Exam framing: 'Discuss the future of data engineering' is the subject's 7-14 mark closer. Give the five directions with mechanisms, the worked five-year scenario, and the constants closing.",
            ],
            keyTerms: [
              { term: "Platform convergence", definition: "Lakehouse absorbing warehouse, streaming, catalog - fewer seams." },
              { term: "Text-to-SQL", definition: "Natural-language serving over semantic layers - the conversational BI." },
              { term: "Governance automation", definition: "Machine-run scanning, lineage, retention as default infrastructure." },
              { term: "Role shift", definition: "Engineer leverage moving to architecture, contracts, judgement." },
            ],
            diagram: {
              kind: "flow",
              title: "The five-year estate: same lifecycle, more automation",
              caption: "Autonomous ingestion, AI-assisted transformation, conversational serving, machine-run governance.",
              steps: [
                { label: "Ingestion", note: "managed + contract-verified, autonomous" },
                { label: "Transformation", note: "LLM-drafted, suite-tested, human-reviewed" },
                { label: "Serving", note: "conversational, lineage-cited answers" },
                { label: "Governance", note: "machine-run scanning, lineage, retention" },
                { label: "Engineer", note: "architecture, contracts, judgement" },
              ],
            },
            bullets: [
              "Directions: convergence, AI-native estate, contracts standard, real-time default, governance automation.",
              "Mechanisms per direction, not predictions.",
              "Worked scenario: five-year estate per stage.",
              "Role shift: soft-layer skills become the differentiator (1.3).",
              "Constants: five stages, trust problem, era-independent disciplines.",
              "Closing: leverage moves from writing pipelines to designing writers.",
            ],
            callout: {
              type: "exam",
              title: "Tools change; stages do not",
              body: "The closing sentence: 'the future is more automation over the same five-stage lifecycle - the trust problem is permanent, and the disciplines (idempotency, tests, lineage) are era-independent.' It frames every prediction as a position on a constant.",
            },
            table: {
              caption: "Directions and their mechanisms.",
              headers: ["Direction", "Mechanism", "Current signal"],
              rows: [
                ["Platform convergence", "Lakehouse absorbing layers", "Table formats + catalogs merging"],
                ["AI-native estate", "LLM-assisted models, text-to-SQL", "Quality rising on semantic layers"],
                ["Data contracts", "CI-checked producer agreements", "Contract tooling standardizing"],
                ["Real-time default", "Streaming cost curves falling", "Kappa economics improving"],
                ["Governance automation", "Machine-run scans + lineage", "Auto-lineage from query logs"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the future of data engineering: the five directions with mechanisms, the worked five-year scenario, and the constants closing.",
                marks: 14,
                outline: [
                  "Directions with mechanisms, not predictions",
                  "Convergence: lakehouse absorbing seams",
                  "AI-native: drafting + conversational serving",
                  "Contracts + governance automation",
                  "Real-time economics trending to default",
                  "Five-year scenario per lifecycle stage",
                  "Constants: stages, trust, disciplines",
                ],
              },
              {
                q: "Why does automation shift the engineer's value rather than eliminate the role?",
                marks: 7,
                outline: [
                  "Automation consumes the writing, not the designing",
                  "Contracts and architecture decide what gets automated",
                  "Judgement (trade-offs, costs, risk) stays human",
                  "More pipelines means more pipeline design",
                  "Leverage moves up the 1.3 skill pyramid",
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
      id: "weights",
      heading: "Exam weight map",
      body: [
        "CY-703(C) papers draw their biggest blocks from Unit II's architecture spectrum and Unit III's modelling core - warehouse/lake/lakehouse/Lambda/Kappa questions and the dimensional-modelling centrepiece are near-guaranteed. Unit I's lifecycle and Unit IV's ingestion supply the process questions; Unit V closes with ETL/ELT and operations. The numbers to have automatic: USD 23/TB, the 4x-joins trade, the 7-day buffer, the SCD versioning math, and the ELT cost arithmetic (USD 12 vs 18).",
      ],
      weightedTopics: [
        { topic: "Warehouse vs lake vs lakehouse; Lambda vs Kappa", weight: "12-14 marks", note: "Two comparison tables + the schema-timing dial; quote the cost and latency numbers." },
        { topic: "Dimensional modelling: facts, dimensions, SCDs", weight: "12-14 marks", note: "The retail model + Pune-Mumbai SCD case; grain-first and semi-additive traps." },
        { topic: "The data engineering lifecycle + undercurrents", weight: "8-10 marks", note: "Five stages, six undercurrents, one worked rotation." },
        { topic: "Ingestion: batch vs streaming, SFTP, webhooks, scraping", weight: "10-12 marks", note: "Four-source pattern table; the five-step file contract; webhook hardening." },
        { topic: "ETL vs ELT + orchestration", weight: "8-10 marks", note: "The USD 12-vs-18 arithmetic; the seven-task DAG incident." },
        { topic: "Data modeling: OLTP vs OLAP", weight: "6-8 marks", note: "The 4x-joins denormalization trade; the orders schema in both forms." },
        { topic: "Governance: quality, catalogs, lineage, contracts", weight: "6-8 marks", note: "The quartet incident walkthrough; contract enforceability." },
        { topic: "Maturity, platforms, BI/Superset, reverse ETL, operations", weight: "6-8 marks", note: "Stage diagnosis; five planes; dashboard anatomy; the 4,200-delta sync." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Two hours a day, five days a week: this schedule covers every unit twice - understanding with the worked numbers first, timed revision second - and reserves the final week for full papers and the anchor diagrams.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the discipline", tasks: ["Definition + four-era evolution with provisioning contrast", "Five-stage lifecycle + six undercurrents drawing", "Skills pyramid + worked weekly percentages", "Maturity stages + stage-2 diagnosis exercise"] },
        { week: "Week 2", focus: "Unit II - architecture spectrum", tasks: ["Warehouse/lake/lakehouse table + schema-timing dial", "Table formats: ACID, time travel, vacuum", "Modern data stack layers + buy-build", "Lambda three layers; Kappa replay; five-axis comparison"] },
        { week: "Week 3", focus: "Unit III - platforms and modelling", tasks: ["Five planes + workload isolation case", "Stream-to-batch decisions + recovery arithmetic", "Catalog entry + zero-copy sharing", "OLTP/OLAP + 4x-joins trade"] },
        { week: "Week 4", focus: "Unit III tail + Unit IV start", tasks: ["Retail star model + SCD Pune-Mumbai case", "fact_sales DDL + expand-and-contract", "Kimball sequence + Bus Matrix drawing", "Ingestion patterns: four-source table"] },
        { week: "Week 5", focus: "Unit IV tail + Unit V", tasks: ["SFTP five-step contract + webhook hardening", "Superset mechanics + chart-to-question map", "Governance quartet incident walkthrough", "ETL/ELT arithmetic + DAG incident; reverse ETL numbers"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Security/privacy operations numbers", "Maintenance calendar + four-gate upgrade", "Observability trio + future directions", "Two full mock papers; redraw anchor diagrams daily"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Do not learn anything new; cycle the numbers - USD 23/TB, 3-5x, 10-100x, 4x joins, 7-day buffer, 128 MB, USD 12 vs 18, 50k/4.2k deltas.",
        "Redraw the anchor diagrams from memory: the lifecycle cycle, the schema-timing dial, the star schema, the Bus Matrix, the Lambda fork.",
        "Recite the SCD types (0/1/2/3) with the Pune-Mumbai story once per hour.",
        "Re-read the two comparison tables (warehouse/lake; Kappa/Lambda) - they feed three question types each.",
        "Rehearse the ELT-vs-ETL arithmetic and the raw-layer audit argument.",
        "Skim every 'in one breath' paragraph; they compress each unit into the recall net.",
        "Sleep seven hours; the modelling questions reward a fresh brain more than a fifth pass.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "Open with the one-line definition, then the diagram, then the worked numbers - examiners mark structure top-down.",
        "For comparison questions (warehouse/lake, Kappa/Lambda, ETL/ELT, OLTP/OLAP), draw the table - rows earn faster than prose.",
        "Attach a number to every claim: USD 23/TB, 4x joins, 7 days, 128 MB, 27 tests, 06:00 SLO.",
        "For modelling questions, declare the grain first and justify the SCD type - those two lines are the marks.",
        "For architecture questions, name the trade-off dial (schema timing, completeness vs freshness) before picking a position.",
        "End long answers with the selection rule or failure modes; the closing judgment line is the 14th mark.",
        "Time-box: 7 marks = 12 minutes, 14 marks = 25 minutes including the diagram; leave 5 minutes to add numbers to thin answers.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Calling the lake 'schema-less' - it is schema-on-read; the wording is the mark.",
        "Confusing ETL and ELT order - the transformation location decides the philosophy.",
        "Forgetting the undercurrents in lifecycle answers - stages without the band read as tool lists.",
        "Saying SCD Type 1 'preserves history' - Type 1 overwrites; Type 2 versions with valid dates.",
        "Drawing a snowflake schema when the OLAP answer is star - denormalized dimensions are the read-first choice.",
        "Claiming Kappa has no batch - replay IS the batch; the phrase is the marked correction.",
        "Skipping the politeness/legality line in scraping answers - robots.txt, ToS and the null-spike alert are the marks.",
        "Inventing RGPV year citations - describe mechanism and worked example instead; fabricated citations cost credibility marks.",
      ],
    },
  ],
};
