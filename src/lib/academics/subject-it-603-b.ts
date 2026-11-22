import type { AcademicSubject } from "./types";

export const it603b: AcademicSubject = {
  id: "it-603-b",
  code: "IT-603(B)",
  title: "Data Mining",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Five units, one pipeline: build the warehouse, prepare the data, mine what goes together, classify and cluster it, then carry mining to the web, maps and time — responsibly.",
  description:
    "The journey runs from warehouse to web. Unit I builds the data warehouse: its need and basic elements, architecture and data marts, the extract-load process with cleaning and transformation, star, snowflake and galaxy schemas, partitioning strategy, the multidimensional model with OLAP operations, ROLAP and MOLAP servers, and cube computation with query processing and indexing. Unit II prepares the mined data: cleaning missing and noisy values, integration and transformation strategies, reduction, discretization and concept hierarchies, the seven-step knowledge discovery process, and the field's applications and challenges. Unit III mines association rules: support and confidence, Apriori with its candidate tables, misleading strong rules and lift, FP-Growth, multi-level rules, time-series rules and the latest trends. Unit IV classifies and clusters: distance measures, clustering families, K-Means with its iterations, decision trees with pruning, naive Bayes, prediction, classifier accuracy and outlier analysis. Unit V extends the toolkit to the web and its types, text, spatial and temporal mining, then closes with security, privacy and ethics. Every section pairs a worked example with one diagram, a table or code, key terms, a callout and exam questions traced to the June 2025 paper.",
  accentColor: "#8b5cf6",
  emoji: "DM",
  unitCount: 5,
  totalSections: 36,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Data Warehousing",
      summary:
        "Unit I builds the analysis backbone of the subject: why warehouses exist, their architecture and data marts, ETL with cleaning and transformation, star, snowflake and galaxy schemas over fact and dimension tables, partitioning strategy, the multidimensional data model with OLAP operations, ROLAP and MOLAP servers, and implementation concerns — efficient cube computation, OLAP query processing and indexing.",
      chapter: {
        number: "01",
        title: "Building the Warehouse",
        intro:
          "Unit I covers the need for data warehousing and its basic elements, data marts and warehouse architecture, extract-load with clean and transform steps, fact and dimension data with the three schemas, horizontal and vertical partitioning, the multidimensional model and OLAP operations, ROLAP versus MOLAP servers, and warehouse implementation through cube computation, query processing and indexing.",
        inOneBreath:
          "A warehouse is a subject-oriented, integrated, time-variant, non-volatile store for analysis, not transactions; facts carry measures, dimensions carry context; star keeps dimensions denormalized, snowflake normalizes them, galaxy shares them across facts; partition by time (horizontal) or by columns (vertical); OLAP operations roll up, drill down, slice, dice and pivot the data cube, served by ROLAP (relational, scalable) or MOLAP (arrayed, fast).",
        sections: [
          {
            number: "1.1",
            title: "Need for data warehousing and its basic elements",
            body: [
              "A data warehouse is a subject-oriented, integrated, time-variant and non-volatile collection of data in support of management's decision-making process — Inmon's definition, and all four adjectives are examinable. Subject-oriented means data is organized around subjects like sales, customer or product, not around applications. Integrated means sources as different as POS terminals and ERP systems are reconciled into consistent codes, units and formats. Time-variant means every record carries an explicit time dimension — five to ten years of history, not just the current state. Non-volatile means data is loaded and read, never updated in place; corrections happen through new loads, which is what keeps history stable.",
              "The need arises because operational systems and analytical systems want opposite things. An OLTP system optimizes thousands of short insert-update transactions per second, normalizes every table, and keeps almost no history; running a multi-year sales trend query against it would lock tables, degrade order entry, and still miss data scattered across branches. A warehouse copies the data once, reconciles it, keeps it historical, and lets analysts query freely without touching production. The retail chain example is standard: 500 stores each with its own POS schema, its own product codes and its own clock — only a warehouse can answer 'which product line grew fastest in the last four quarters across all regions'.",
              "The basic elements of a warehouse describe the path data travels. Source data feeds the process from operational databases, external files and flat archives. The data staging area is where extraction, cleaning and transformation happen, away from both sources and users. Data storage holds the warehouse itself plus its departmental data marts, organized in facts and dimensions. Information delivery delivers the data to users through query tools, reports, OLAP and dashboards. Metadata — the 'data about data' — documents where every field came from and how it was transformed, and system management glues the whole thing together with scheduling, monitoring and archiving.",
              "The exam angle is definitional and structural at once: a 7-mark answer writes Inmon's definition, expands all four characteristics with one example each, and then lists the six basic elements in travel order. A common trap is describing the warehouse as 'a big database' — the examiner wants the contrast with operational systems (audience, workload, history, volatility), because that contrast is what the whole unit is built on.",
            ],
            bullets: [
              "Inmon's four adjectives: subject-oriented, integrated, time-variant, non-volatile.",
              "OLTP serves clerks with short transactions; the warehouse serves analysts with long scans.",
              "Warehouses keep 5-10 years of history — trends are impossible on live-only data.",
              "Staging area: extraction, cleaning and transformation happen here, never in the target.",
              "Six basic elements: source data, staging, data storage, information delivery, metadata, system management.",
              "Non-volatile: data is loaded and read, not updated in place — history stays stable.",
            ],
            diagram: {
              kind: "compare",
              title: "Operational database vs data warehouse",
              caption:
                "The two systems want opposite things — that conflict is the entire reason a warehouse exists.",
              left: {
                heading: "Operational (OLTP) database",
                items: [
                  "Current data, updated constantly",
                  "Thousands of short read/write transactions",
                  "Normalized tables, application-oriented",
                  "Audience: clerks and order entry",
                ],
              },
              right: {
                heading: "Data warehouse (OLAP)",
                items: [
                  "Historical data, loaded and read only",
                  "Few long analytical queries and aggregations",
                  "Denormalized facts and dimensions, subject-oriented",
                  "Audience: analysts and decision makers",
                ],
              },
            },
            table: {
              caption: "Inmon's four characteristics with concrete examples.",
              headers: ["Characteristic", "Meaning", "Retail example"],
              rows: [
                ["Subject-oriented", "organized around analysis subjects, not applications", "sales, customer, product"],
                ["Integrated", "inconsistent sources reconciled to one scheme", "M/F and male/female merged to one code"],
                ["Time-variant", "explicit history of 5-10 years", "quarterly sales back to 2018"],
                ["Non-volatile", "loaded once, read many, never updated in place", "a wrong value is corrected by a new load"],
              ],
            },
            callout: {
              type: "tip",
              title: "The four words are the answer",
              body: "Whatever the phrasing of the question, the fastest four marks in Unit I are Inmon's adjectives — subject-oriented, integrated, time-variant, non-volatile — each with one line of meaning and one retail example. Write them first, then build the rest of the answer around them.",
            },
            keyTerms: [
              { term: "Data warehouse", definition: "A subject-oriented, integrated, time-variant, non-volatile collection of data supporting management's decision-making." },
              { term: "Subject-oriented", definition: "Data organized around analysis subjects (sales, customer) rather than around applications." },
              { term: "Time-variant", definition: "Every record carries an explicit time span; history is retained, not overwritten." },
              { term: "Metadata", definition: "Data about data — lineage, transformations and definitions that make the warehouse navigable." },
              { term: "Data staging area", definition: "The workspace where extracted data is cleaned, transformed and prepared before loading." },
            ],
            examQuestions: [
              {
                q: "What is a data warehouse? Explain its need, the four defining characteristics, and the basic elements through which data flows from sources to decision makers.",
                marks: 7,
                outline: [
                  "Inmon definition: subject-oriented, integrated, time-variant, non-volatile store for decisions",
                  "Need: OLTP systems cannot support long analytical scans without degrading operations",
                  "Data is scattered across branches with inconsistent codes, units and formats",
                  "History is required for trends; operational systems keep only current state",
                  "Elements: source data -> staging -> storage (warehouse + marts) -> information delivery",
                  "Metadata and system management wrap the pipeline",
                  "Close with the OLTP vs OLAP audience contrast",
                ],
              },
              {
                q: "Explain the role of metadata in a data warehouse and what happens if it is neglected.",
                marks: 7,
                outline: [
                  "Metadata documents source, meaning, transformations and refresh rules of every field",
                  "It is the map analysts and administrators use to find and trust data",
                  "Technical metadata: schemas, load schedules, indices; business metadata: definitions, owner",
                  "Without it, two departments define 'customer' differently and reports disagree",
                  "Lineage questions ('where did this number come from?') become unanswerable",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Data marts and data warehouse architecture",
            body: [
              "A data mart is a subject-scoped subset of the warehouse serving one department — a sales mart, a finance mart, a marketing mart — typically a few gigabytes against a warehouse's terabytes. Two construction philosophies differ on whether marts come first. Inmon's top-down approach builds the enterprise warehouse from all sources first, and dependent data marts are carved from it, guaranteeing consistency at the cost of a long, expensive initial project. Kimball's bottom-up approach builds independent data marts per department first and integrates later via conformed dimensions — faster wins, but risks the 'stovepipe' problem of marts that quietly disagree.",
              "The canonical architecture has three tiers. The bottom tier holds the sources and the ETL machinery: operational databases, external files, gateways, the staging area, and the warehouse's own relational store. The middle tier holds an OLAP server — either a ROLAP server mapping multidimensional operations onto relational tables, or a MOLAP server holding pre-computed array cubes. The top tier is the front end: query and reporting tools, OLAP browsers, dashboards and data mining tools (which is exactly where Unit II onward plugs in). Metadata and system management run vertically across all three tiers, and that cross-cutting position is worth a diagram label.",
              "Choosing dependent versus independent marts is an architecture decision with observable consequences. A bank that builds a dependent loan mart from the central warehouse gets loan figures that reconcile exactly with the finance mart — one version of the truth, but every mart waits for the central build. A startup that builds an independent marketing mart from a spreadsheet extract ships in weeks; two years later marketing says 12,000 customers and finance says 11,400, and nobody can say who is right without a reconciliation project. The exam answer names both philosophies with their sponsor's name (Inmon vs Kimball), their speed-to-value, and their consistency risk.",
              "The architecture question is reliably asked as 'explain the three-tier architecture of a data warehouse with a diagram' — draw the three tiers, label each with its components, run metadata vertically through them, and finish by placing data marts in the storage tier (dependent) or alongside the sources (independent). Ending with one sentence on where mining tools sit in the top tier connects the unit to the rest of the paper.",
            ],
            bullets: [
              "Data mart: department-scoped slice of warehouse data — sales, finance, marketing.",
              "Dependent marts are carved from the enterprise warehouse (Inmon, top-down).",
              "Independent marts are built directly from sources (Kimball, bottom-up) — faster, riskier.",
              "Bottom tier: sources + ETL + warehouse store; middle tier: OLAP servers (ROLAP/MOLAP).",
              "Top tier: query, reporting, OLAP browsing, dashboards and mining tools.",
              "Metadata and system management cut vertically across all three tiers.",
              "Conformed dimensions are Kimball's device for keeping independent marts consistent.",
            ],
            diagram: {
              kind: "layers",
              title: "Three-tier data warehouse architecture",
              caption:
                "Data flows up the tiers; metadata and system management run vertically through all of them.",
              layers: [
                { label: "Top tier — front end", note: "query, reporting, OLAP browsing, dashboards, mining tools" },
                { label: "Middle tier — OLAP server", note: "ROLAP over relational tables or MOLAP over array cubes" },
                { label: "Bottom tier — data and ETL", note: "operational sources, staging area, warehouse and marts" },
                { label: "Cross-cutting", note: "metadata and system management span every tier" },
              ],
            },
            table: {
              caption: "Dependent vs independent data marts.",
              headers: ["Aspect", "Dependent mart", "Independent mart"],
              rows: [
                ["Source of data", "carved from the enterprise warehouse", "loaded directly from operational sources"],
                ["Philosophy", "Inmon, top-down", "Kimball, bottom-up"],
                ["Consistency", "guaranteed — one version of truth", "may disagree across departments"],
                ["Time to first delivery", "slow — warehouse must exist first", "fast — mart ships alone"],
              ],
            },
            callout: {
              type: "tip",
              title: "Attach names to philosophies",
              body: "Inmon = top-down, warehouse first, dependent marts. Kimball = bottom-up, marts first, conformed dimensions. The examiner's answer key almost always expects the two names — writing only 'top-down and bottom-up' loses the attribution marks.",
            },
            keyTerms: [
              { term: "Data mart", definition: "A subject-scoped subset of warehouse data serving one department or business line." },
              { term: "Dependent data mart", definition: "A mart derived from an existing enterprise warehouse, guaranteeing consistency." },
              { term: "Independent data mart", definition: "A mart built directly from sources without a central warehouse — fast but prone to disagreement." },
              { term: "Conformed dimension", definition: "A shared dimension table with identical meaning across marts, Kimball's consistency device." },
              { term: "Three-tier architecture", definition: "Sources/ETL at the bottom, OLAP servers in the middle, front-end tools at the top." },
            ],
            examQuestions: [
              {
                q: "Explain the three-tier architecture of a data warehouse with a diagram. Where do data marts, OLAP servers and mining tools sit, and what runs across all tiers?",
                marks: 7,
                outline: [
                  "Bottom tier: operational sources, gateways, staging area, warehouse and marts",
                  "Middle tier: OLAP server — ROLAP (relational) or MOLAP (array cubes)",
                  "Top tier: query/reporting tools, OLAP browsers, dashboards, mining tools",
                  "Data marts live in the storage tier (dependent) or off sources (independent)",
                  "Metadata and system management cut vertically across all tiers",
                  "Diagram must show data flowing bottom -> top",
                  "Close: mining tools in the top tier consume the middle tier's cubes",
                ],
              },
              {
                q: "Differentiate dependent and independent data marts, naming the construction philosophy behind each.",
                marks: 7,
                outline: [
                  "Dependent: carved from the enterprise warehouse (Inmon top-down)",
                  "Independent: built directly from sources (Kimball bottom-up)",
                  "Dependent guarantees consistency; independent risks stovepipe disagreement",
                  "Independent delivers value faster; dependent has higher upfront cost",
                  "Conformed dimensions mitigate the independent mart's risk",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Extract and load process — clean and transform data",
            body: [
              "ETL is the plumbing that feeds the warehouse: extract data from sources, clean it, transform it to the warehouse's scheme, and load it. Extraction is full (all rows, used for the initial load) or incremental (only changes, detected through timestamps, append-only logs or triggers — the usual refresh mode). Cleaning fixes the defects that make analysis lie: missing values (filled or flagged), inconsistent codes (M/F versus male/female), duplicates, wrong units, and out-of-range values. Transformation reshapes cleaned data to the target: encoding, summarizing, deriving derived attributes, denormalizing into star schemas, and generating surrogate keys.",
              "Loading is more than copying. The initial load sorts the rows, builds the fact and dimension tables, creates indexes and aggregates, and validates referential integrity; refresh loads then append deltas on a schedule — nightly or hourly — while preserving the warehouse's non-volatility. The data staging area exists precisely because none of this fits in one pass: extraction lands raw data there, cleaning and transformation run in staged steps, and only the finished, validated result is pushed into the warehouse. A worked retail example: 500 store systems extract nightly into staging, a cleaning pass maps 14 different product-code schemes to one master list and drops duplicate receipts, a transformation step computes daily sales aggregates, and a load step appends the day's fact rows and refreshes the indexes before 6 a.m.",
              "Cleaning deserves its own checklist because each defect has a standard fix. Missing values: ignore the tuple, fill with a global constant or attribute mean, or fill with the most probable value predicted by a decision tree or regression (Unit II reuses exactly this list). Inconsistent formats: standardize units and codes through a mapping table. Duplicates: detect by key matching and merge. Noise: binning, regression smoothing or clustering (again Unit II territory). Out-of-range values: reject to an error queue rather than silently loading. The exam rewards presenting cleaning as a table of problem-to-fix mappings, not as prose.",
              "The exam angle: 'explain the extract-load process, and how data is cleaned and transformed' is answered as a four-stage pipeline — extract, clean, transform, load — with one concrete example per stage and a closing line on the staging area's role. A frequent slip is describing transformation as part of extraction; the syllabus separates them because they run on different artifacts (raw extracts versus validated staging data).",
            ],
            bullets: [
              "Extraction: full for the initial load, incremental (timestamps/logs/triggers) for refresh.",
              "Cleaning: missing values, inconsistent codes, duplicates, wrong units, out-of-range values.",
              "Transformation: encode, summarize, derive attributes, denormalize, generate surrogate keys.",
              "Load: sort, build facts/dimensions, create indexes and aggregates, validate integrity.",
              "The staging area holds raw extracts until cleaning and transformation finish.",
              "Refresh loads append deltas nightly/hourly while keeping the warehouse non-volatile.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The ETL pipeline",
              caption:
                "Raw extracts pass through cleaning and transformation in the staging area before the warehouse ever sees them.",
              stages: [
                { label: "Extract", note: "full or incremental from sources" },
                { label: "Clean", note: "missing values, codes, duplicates" },
                { label: "Transform", note: "encode, summarize, denormalize" },
                { label: "Load", note: "sort, index, validate, append" },
                { label: "Refresh", note: "nightly deltas on schedule" },
              ],
            },
            table: {
              caption: "Cleaning problems and their standard fixes.",
              headers: ["Problem", "Example", "Standard fix"],
              rows: [
                ["Missing values", "no customer age on 8% of rows", "fill with mean, or predict via decision tree"],
                ["Inconsistent codes", "'M/F' vs 'male/female'", "mapping table to one canonical code"],
                ["Duplicates", "same receipt loaded twice", "key-based detection and merge"],
                ["Wrong units", "grams in one store, kg in another", "standardize to warehouse units in staging"],
              ],
            },
            codeExample: {
              language: "sql",
              caption: "staging.sql — clean and transform in two staged steps",
              code: `-- step 1: clean raw extracts in the staging area
INSERT INTO stg_sales_clean
SELECT s.store_id,
       m.master_product,          -- map 14 code schemes to one
       s.qty,
       s.price * 1.0,             -- standardize to rupees
       s.txn_time
FROM   raw_pos_extract s
JOIN   product_map m ON s.product_code = m.legacy_code
WHERE  s.qty > 0;                  -- reject out-of-range to error queue

-- step 2: transform to the star schema and load the fact table
INSERT INTO fact_sales (product_key, store_key, time_key, units, amount)
SELECT p.product_key, st.store_key, t.time_key,
       SUM(c.qty), SUM(c.qty * c.price)
FROM   stg_sales_clean c
JOIN   dim_product p ON c.master_product = p.product_code
GROUP BY p.product_key, st.store_key, t.time_key;`,
            },
            callout: {
              type: "warning",
              title: "Never clean inside the warehouse",
              body: "Cleaning belongs in the staging area. If fixes are applied directly in the warehouse tables, every refresh re-introduces the dirt and the fix becomes a permanent daily job. Load only validated, transformed data — the warehouse stays non-volatile and trusted.",
            },
            keyTerms: [
              { term: "ETL", definition: "Extract-Clean-Transform-Load — the staged pipeline feeding the warehouse." },
              { term: "Incremental extraction", definition: "Pulling only changed rows using timestamps, logs or triggers — the refresh mode." },
              { term: "Surrogate key", definition: "A warehouse-generated key for dimension rows, independent of source keys." },
              { term: "Refresh", definition: "The scheduled load of deltas after the initial full load." },
            ],
            examQuestions: [
              {
                q: "Explain the extract and load process of a data warehouse. Describe how data is cleaned and transformed before loading, with one example of each fix.",
                marks: 7,
                outline: [
                  "Extract: full for initial load; incremental via timestamps/logs/triggers for refresh",
                  "Clean: missing values -> mean or predicted fill; inconsistent codes -> mapping table",
                  "Clean: duplicates -> key matching; wrong units -> standardization in staging",
                  "Transform: encode, summarize, derive attributes, denormalize to star, surrogate keys",
                  "Load: sort, build facts/dimensions, create indexes and aggregates, validate integrity",
                  "Staging area exists because this cannot fit in one pass",
                  "Refresh appends deltas while preserving non-volatility",
                ],
              },
              {
                q: "Why does a data warehouse need a separate staging area?",
                marks: 7,
                outline: [
                  "Cleaning and transformation need multiple passes and intermediate results",
                  "Running them in the warehouse re-introduces dirt on every refresh",
                  "Running them against sources burdens production systems",
                  "Staging isolates raw extracts until they are validated for load",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Fact and dimension data — star, snowflake and galaxy schemas",
            body: [
              "Multidimensional data is stored as facts and dimensions. A fact table holds the business events: keys pointing to each dimension plus numeric measures — quantity, price, revenue. A dimension table holds the descriptive context of analysis: time (day, month, quarter), item (brand, category), branch, location. The classic worked example: a sales fact with measures quantity and dollars_sold surrounded by four dimensions — time, item, branch and location. Analysts ask questions of measures through dimensions: 'revenue (measure) by month (time) for electronics (item category) in Indore (location)'.",
              "The star schema keeps every dimension denormalized in one wide table around the central fact — few joins, fast queries, some redundancy. The snowflake schema normalizes dimensions into subtables — item splits into item and department, location into city and country — saving space at the cost of extra joins. The galaxy (fact constellation) schema shares dimensions across multiple fact tables, the shape every real warehouse eventually takes: shipping, sales and inventory facts sharing time, item and location dimensions. The schemas trade join cost against storage and modelling flexibility, and the exam expects that trade stated explicitly.",
              "The University example from the June 2025 paper shows the pattern at exam difficulty: a warehouse of student results with four dimensions — student, course, semester and instructor — and two measures, count and avg_grade. At the lowest conceptual level avg_grade stores the actual course grade of a student; at higher levels it stores the average grade, which is exactly the roll-up behaviour a cube gives. Snowflaking it means normalizing each dimension: student -> person, course -> department, instructor -> department, semester -> academic year, with the fact table's keys pointing at the lowest level of each.",
              "The exam angle is drawing and justifying. For 'draw a star schema' or the University snowflake, the answer needs labelled dimension boxes around a labelled fact box, measures named inside the fact, and keys drawn as arrows. Then justify the choice: star for query speed and simplicity, snowflake for storage discipline, galaxy when multiple processes share dimensions. State that every schema here is a different normalization of the same facts and dimensions — that single sentence shows you understand the models rather than memorized the shapes.",
            ],
            bullets: [
              "Fact table: dimension keys + numeric measures (quantity, dollars_sold, avg_grade).",
              "Dimension tables: descriptive context — time, item, branch, location, student, course.",
              "Star: one denormalized dimension table per axis — fastest queries, some redundancy.",
              "Snowflake: dimensions normalized into subtables — less storage, more joins.",
              "Galaxy/fact constellation: multiple fact tables share dimensions — real warehouses.",
              "Measures aggregate by level: avg_grade is a grade at leaf level, an average above.",
            ],
            diagram: {
              kind: "matrix",
              title: "The three schemas on two axes",
              caption:
                "Normalization of dimensions (x) and number of fact tables sharing them (y) generate star, snowflake and galaxy.",
              axes: { x: "Dimension normalization (low -> high)", y: "Fact tables sharing dimensions (one -> many)" },
              quadrants: [
                { label: "Star schema", note: "one fact, denormalized dimensions — the default" },
                { label: "Galaxy / fact constellation", note: "many facts, shared dimensions — real warehouses" },
                { label: "Over-denormalized multi-fact (rare)", note: "usually consolidated into star + shared dims" },
                { label: "Snowflake schema", note: "one fact, normalized dimensions — storage discipline" },
              ],
            },
            table: {
              caption: "The three schemas compared.",
              headers: ["Schema", "Shape", "Joins needed", "Best when"],
              rows: [
                ["Star", "fact + wide denormalized dimensions", "fewest — one join per dimension", "query speed matters most"],
                ["Snowflake", "dimensions normalized into subtables", "more — depth equals normalization", "storage discipline matters"],
                ["Galaxy", "several facts sharing dimensions", "varies; shared dimensions reused", "multiple business processes analysed together"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025",
              body: "The June 2025 paper asked for a snowflake schema of a 'University' warehouse: four dimensions (student, course, semester, instructor), two measures (count, avg_grade), with avg_grade holding the actual grade at the lowest level and averages above. Draw the fact at the centre, snowflake each dimension one level down, and label the measure behaviour at both levels.",
            },
            keyTerms: [
              { term: "Fact table", definition: "Holds business events as dimension keys plus numeric measures." },
              { term: "Dimension table", definition: "Holds descriptive attributes used to slice and aggregate measures." },
              { term: "Star schema", definition: "A fact table surrounded by denormalized dimension tables — the default warehouse shape." },
              { term: "Snowflake schema", definition: "A star whose dimensions are normalized into subtables." },
              { term: "Galaxy schema", definition: "Fact constellation — multiple fact tables sharing dimension tables." },
            ],
            examQuestions: [
              {
                q: "Draw a snowflake schema diagram for a 'University' data warehouse consisting of four dimensions — student, course, semester and instructor — and two measures, count and avg_grade, where avg_grade stores the actual course grade at the lowest conceptual level and the average grade at higher levels.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Fact table EXAM at the centre: four dimension keys + measures count, avg_grade",
                  "STUDENT snowflaked: student -> person (name, dob, type)",
                  "COURSE snowflaked: course -> department (dept_name, hod)",
                  "INSTRUCTOR snowflaked: instructor -> department (shared with course)",
                  "SEMESTER snowflaked: semester -> academic year",
                  "At leaf level avg_grade = actual course grade; above it = average grade (roll-up)",
                  "Label keys as arrows from fact to the lowest level of each dimension",
                ],
              },
              {
                q: "Compare star, snowflake and galaxy schemas — their shapes, join costs, storage behaviour and when each is the right choice.",
                marks: 7,
                outline: [
                  "Star: denormalized dimensions around one fact; fewest joins; fastest queries",
                  "Snowflake: normalized dimension subtables; fewer bytes, more joins",
                  "Galaxy: multiple fact tables sharing dimensions (fact constellation)",
                  "Trade-off stated: query speed vs storage vs modelling flexibility",
                  "Real warehouses end up galaxy-shaped with mostly star-like local structure",
                ],
              },
              {
                q: "Explain fact and dimension data with a worked retail example, naming the measures and three suitable dimensions.",
                marks: 7,
                outline: [
                  "Fact: sales events with measures quantity and dollars_sold",
                  "Dimensions: time, item, branch, location (pick three and give attributes)",
                  "Analyst question pattern: measure by dimension levels",
                  "Measures aggregate: sum for quantity, average for price at higher levels",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Partitioning strategy — horizontal and vertical partitioning",
            body: [
              "Partitioning splits one logical table into several physical pieces, and a warehouse does it for three reasons: manageability (small pieces load, back up, index and archive faster), performance (queries touch only the partitions they need), and scalability (pieces can move to separate disks or servers). Horizontal partitioning splits rows; vertical partitioning splits columns. Both are syllabus-listed strategies and both have a natural worked example in the sales warehouse.",
              "Horizontal partitioning by time is the warehouse default: fact_sales_2023, fact_sales_2024, ... one partition per month or year. The 2025 trend query touches four partitions and ignores the rest; a five-year-old partition can be archived to cheap storage; and a nightly refresh appends to exactly one partition. Partitioning by size (every 10 million rows) or round-robin distribution exists for load balancing but has no semantic meaning for queries — mention them, then say time-based wins because queries carry date predicates. Vertical partitioning splits columns by usage: the fact's keys and hot measures (quantity, revenue) live in one table queried constantly, while a wide descriptive block (long text notes, binary attributes) lives in another consulted rarely — each row keeps a common key so the pieces can be rejoined.",
              "The two strategies are complements, not rivals: a large warehouse routinely partitions sales facts horizontally by month and vertically by measure temperature. The worked decision: a telecom call-detail table of 4 billion rows — horizontal by month first (each month becomes manageable), then vertical (call keys, durations and charges hot; routing metadata cold). Loading one month, archiving one month, and running the monthly revenue report all become single-partition operations.",
              "The exam angle: 'explain horizontal and vertical partitioning with examples and state why a warehouse needs partitioning' — define each, give the time-based horizontal example and the hot/cold-column vertical example, and close with the three benefits. A trap is claiming partitioning is 'for smaller tables only': the examiner wants the semantic reason (queries and maintenance have natural boundaries) rather than a size excuse.",
            ],
            bullets: [
              "Partitioning: manageability, performance, scalability — one line each is a mark.",
              "Horizontal = split rows; the warehouse default is by time (month/year).",
              "Time-based partitions match date predicates, cheap archives, single-partition refreshes.",
              "Size and round-robin horizontal schemes exist but carry no query semantics.",
              "Vertical = split columns by usage: hot keys/measures vs cold descriptive blobs.",
              "Vertical pieces need a common row key to be rejoinable.",
              "Large tables combine both: horizontal by month, vertical by measure temperature.",
            ],
            diagram: {
              kind: "fork",
              title: "How to partition the fact table?",
              caption: "The decision follows the natural boundaries of queries and maintenance.",
              start: "A large warehouse table",
              branches: [
                { label: "Split by time (month/year)", outcome: "horizontal — matches date predicates and archive cycles", good: true },
                { label: "Split columns by usage", outcome: "vertical — hot measures separate from cold descriptive data", good: true },
                { label: "Split by size, round-robin", outcome: "horizontal — balances load but queries scan everything", good: true },
                { label: "No partitioning at all", outcome: "one monolith: slow loads, slow backups, full scans", good: false },
              ],
            },
            table: {
              caption: "Horizontal vs vertical partitioning.",
              headers: ["Aspect", "Horizontal partitioning", "Vertical partitioning"],
              rows: [
                ["Divides", "rows into groups", "columns into groups"],
                ["Natural criterion", "time — month or year", "usage temperature — hot vs cold columns"],
                ["Sales example", "fact_sales_2023, fact_sales_2024", "keys+quantity in one table, notes in another"],
                ["Main benefit", "date-scoped queries, archive, refresh", "smaller hot rows, faster scans of used columns"],
              ],
            },
            callout: {
              type: "tip",
              title: "Time-based horizontal wins the argument",
              body: "When asked to choose, argue semantics: queries and maintenance carry natural time boundaries, so time-based horizontal partitioning aligns physical storage with how data is used. Size- and round-robin schemes balance load but give queries nothing to prune by.",
            },
            keyTerms: [
              { term: "Horizontal partitioning", definition: "Splitting a table's rows into separate physical pieces, typically by time." },
              { term: "Vertical partitioning", definition: "Splitting a table's columns into pieces grouped by usage, rejoined via a row key." },
              { term: "Archive partition", definition: "An old horizontal partition moved to cheap storage without touching hot data." },
              { term: "Partition pruning", definition: "The query engine skipping partitions whose range cannot match the predicate." },
            ],
            examQuestions: [
              {
                q: "Explain horizontal and vertical partitioning strategies for a data warehouse with examples, and justify why partitioning is essential for a multi-terabyte fact table.",
                marks: 7,
                outline: [
                  "Define both: rows split (horizontal), columns split (vertical)",
                  "Horizontal by time: fact_sales_2023, fact_sales_2024 — matches date predicates",
                  "Archiving and refresh become single-partition operations",
                  "Size/round-robin exist but lack query semantics",
                  "Vertical: hot keys+measures vs cold descriptive columns, rejoined by row key",
                  "Benefits: manageability, performance, scalability — one line each",
                  "Combine both for very large tables (telecom call-detail example)",
                ],
              },
              {
                q: "Why is time the natural criterion for horizontal partitioning in a warehouse?",
                marks: 7,
                outline: [
                  "Most warehouse queries filter on date ranges",
                  "Loads are periodic (nightly/monthly) and append at the time edge",
                  "Retention and archiving policies are time-based by law and practice",
                  "Non-volatility means old partitions never change — safe to compress and archive",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Multidimensional data model and OLAP operations",
            body: [
              "The multidimensional data model views data as a cube: dimensions are the axes of analysis (time, item, location) and measures occupy the cells (dollars_sold). Every dimension has a concept hierarchy — day < month < quarter < year for time, city < province < country for location — and the cube can be aggregated along any of them. A worked cube: sales with dimensions time {Q1..Q4}, item {computer, phone}, location {Toronto, Vancouver, Indore} — 4 × 2 × 3 = 24 cells, each holding that quarter's revenue for that item in that city. The physical store behind the model may be relational (ROLAP) or array-based (MOLAP), the next section's question.",
              "OLAP operations are the verbs of the model. Roll-up aggregates by climbing a hierarchy — city to country, or quarter to year — reducing cells and summarizing. Drill-down is the inverse: descending year to quarter to month, or introducing a new dimension. Slice takes one value of one dimension (time = 'Q1'), producing a flat sub-cube of the remaining axes. Dice selects ranges on several dimensions ((Q1, Q2) × (Toronto, Vancouver)). Pivot (rotate) reorients the axes so a different dimension runs down the page — a presentation operation, not a data change. The worked trace: from the sales cube, roll-up from city to country collapses 3 city cells per item-quarter into 1; a slice on Q1 leaves an item × location plane; a dice on (Q1..Q2, Toronto..Vancouver, computer..phone) leaves an 8-cell block.",
              "Each operation maps to SQL-visible behaviour in a ROLAP implementation: roll-up is a GROUP BY at a higher level of the hierarchy, slice is a WHERE clause on one dimension, dice is a compound WHERE, drill-down is GROUP BY at a finer level. The operations compose — analysts chain slice, then roll-up, then pivot to build a report — and the cube cells are recomputed or fetched from pre-computed cuboids depending on what the implementation materialized.",
              "The exam angle: 'explain the OLAP operations with an example' or 'describe the multidimensional data model' — draw the cube, name the hierarchies, then give each operation one sentence plus one concrete result from the same cube. The June 2025 paper bundled this topic with server comparison (Q1b), which is a hint: learn operations and servers as one connected answer.",
            ],
            bullets: [
              "Cube: dimensions as axes, measures in cells — 4 x 2 x 3 = 24 cells in the worked cube.",
              "Concept hierarchy per dimension: day < month < quarter < year; city < province < country.",
              "Roll-up climbs a hierarchy (city -> country); drill-down descends or adds a dimension.",
              "Slice: one dimension fixed (time = Q1). Dice: ranges on several dimensions.",
              "Pivot rotates axes — presentation only, no data change.",
              "In ROLAP terms: roll-up/dice are GROUP BY levels; slice is a WHERE clause.",
            ],
            diagram: {
              kind: "pyramid",
              title: "A time concept hierarchy",
              caption:
                "Roll-up climbs toward the top (year); drill-down descends toward the bottom (day) — every OLAP operation moves on such a hierarchy.",
              tiers: [
                { label: "Year", note: "coarsest aggregation — top of the hierarchy" },
                { label: "Quarter", note: "roll-up target / drill-down source" },
                { label: "Month", note: "the usual reporting grain" },
                { label: "Day", note: "finest grain stored in the cube" },
              ],
            },
            table: {
              caption: "The five OLAP operations on the sales cube.",
              headers: ["Operation", "What it does", "Worked result"],
              rows: [
                ["Roll-up", "aggregate by climbing a hierarchy", "city -> country: 3 city cells collapse to 1"],
                ["Drill-down", "descend a hierarchy or add a dimension", "year -> quarter -> month revenue"],
                ["Slice", "fix one dimension to one value", "time = Q1 -> item x location plane"],
                ["Dice", "select ranges on several dimensions", "(Q1..Q2) x (Toronto, Vancouver) x (computer, phone)"],
                ["Pivot", "rotate the axes", "item runs down the page instead of location"],
              ],
            },
            callout: {
              type: "exam",
              title: "Bundled with servers in Jun 2025",
              body: "June 2025 Q1b asked 'compare ROLAP, MOLAP, OLAP — explain different OLAP operations' in one question. Prepare operations (this section) and servers (next section) as a single connected answer: draw the cube, list the five operations, then the storage comparison.",
            },
            keyTerms: [
              { term: "Data cube", definition: "Multidimensional array of measures indexed by analysis dimensions." },
              { term: "Concept hierarchy", definition: "Lattice of levels per dimension (day < month < quarter < year) enabling roll-up and drill-down." },
              { term: "Slice", definition: "Fixing one dimension to a single value, producing a sub-cube." },
              { term: "Dice", definition: "Selecting sub-ranges on two or more dimensions." },
              { term: "Pivot (rotate)", definition: "Reorienting cube axes for presentation; changes nothing in the data." },
            ],
            examQuestions: [
              {
                q: "Explain the multidimensional data model and the five OLAP operations — roll-up, drill-down, slice, dice and pivot — with concrete results on a small sales cube.",
                marks: 7,
                outline: [
                  "Cube: dimensions time/item/location, measure dollars_sold; 4x2x3 = 24 cells",
                  "Concept hierarchies: day<month<quarter<year; city<province<country",
                  "Roll-up: city -> country collapses cells; drill-down: quarter -> month",
                  "Slice: time = Q1 leaves an item x location plane",
                  "Dice: (Q1..Q2) x (Toronto, Vancouver) x (computer, phone) — 8-cell block",
                  "Pivot rotates axes for display; data unchanged",
                  "Map each to SQL: GROUP BY levels and WHERE clauses",
                ],
              },
              {
                q: "Differentiate roll-up and drill-down with one example each from a sales cube.",
                marks: 7,
                outline: [
                  "Roll-up: aggregate by climbing a hierarchy (city -> country)",
                  "Fewer cells, summarized measures",
                  "Drill-down: descend (year -> quarter) or introduce a new dimension",
                  "More cells, finer detail",
                  "They are inverse operations on the same concept hierarchy",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "OLAP servers — ROLAP, MOLAP and HOLAP",
            body: [
              "An OLAP server implements the multidimensional model over some physical store, and the syllabus names two architectures with a hybrid as the accepted extension. ROLAP stores data and aggregates in relational tables and translates OLAP operations into SQL — unlimited scalability to the largest warehouses, but each query pays join and aggregation cost, so heavily-used aggregations are materialized as summary tables. MOLAP stores cubes as pre-computed multidimensional arrays addressed directly by dimension indices — sub-second query response since aggregation is done at load time — but the array becomes sparse when dimension combinations are rare, and load time and cube size limit scale.",
              "The comparison is a trade of space, speed and scale. ROLAP: storage relational and cheap, query slower (SQL against large tables), scale essentially unbounded, best when data volumes are huge and queries are unpredictable. MOLAP: storage dense arrays (sparse handling needed), query fastest (index arithmetic, no joins), scale limited by array materialization, best when queries are predictable and fast dashboards matter. HOLAP splits the difference: detail rows stay relational while aggregations live in MOLAP cubes — a drill-down from a fast summarized cube reaches the relational detail exactly when needed. The June 2025 paper asked exactly this comparison plus the OLAP operations, which makes it one of the highest-yield questions in Unit I.",
              "A worked sizing example makes the sparse-cube problem concrete: dimensions time (10 years = 3650 days), product (5000), store (200) give 3650 × 5000 × 200 = 3.65 billion cells; if only 2% of combinations ever have sales, 3.57 billion cells are empty, and a dense array wastes ~98% of its space — which is why MOLAP engines compress sparse cubes and why ROLAP's relational storage handles real warehouses more gracefully. This arithmetic, one line long, is what separates a good comparison answer from an excellent one.",
              "The exam angle: 'compare ROLAP, MOLAP, OLAP' is the paper's own loose phrasing for 'compare the OLAP server architectures'. Answer with a three-way (or four-way, adding HOLAP) table — storage, query speed, scalability, sparse-data handling, best use — then one sentence tying to the operations: every OLAP operation of the previous section executes against whichever backend the server chose.",
            ],
            bullets: [
              "ROLAP: relational storage, SQL translation, unbounded scale, slower aggregation.",
              "MOLAP: pre-computed arrays, sub-second queries, limited scale, sparse-cube problem.",
              "HOLAP: relational detail + MOLAP aggregations — speed where it counts, depth when drilled.",
              "Sparse cube arithmetic: 3650 x 5000 x 200 = 3.65B cells, 98% empty in the example.",
              "Materialized summary tables are ROLAP's answer to repeated aggregations.",
              "Every OLAP operation runs on whichever backend the server implements.",
            ],
            diagram: {
              kind: "compare",
              title: "ROLAP vs MOLAP",
              caption:
                "Scale against speed — and HOLAP keeps both by splitting detail from aggregation.",
              left: {
                heading: "ROLAP server",
                items: [
                  "Data and aggregates in relational tables",
                  "OLAP operations translated to SQL",
                  "Scales to the largest warehouses",
                  "Query cost paid per query (joins, GROUP BY)",
                ],
              },
              right: {
                heading: "MOLAP server",
                items: [
                  "Cubes as pre-computed multidimensional arrays",
                  "Sub-second responses, no joins at query time",
                  "Sparse combinations waste array space",
                  "Load-time aggregation limits cube size",
                ],
              },
            },
            table: {
              caption: "The OLAP server architectures compared.",
              headers: ["Aspect", "ROLAP", "MOLAP", "HOLAP"],
              rows: [
                ["Storage", "relational tables", "multidimensional arrays", "relational detail + array aggregates"],
                ["Query speed", "slower (SQL, joins)", "fastest (index arithmetic)", "fast summaries, slower detail"],
                ["Scalability", "very high", "limited by cube materialization", "high"],
                ["Sparse data", "handled naturally", "needs compression", "detail stays relational"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025",
              body: "June 2025 Q1b asked to 'compare ROLAP, MOLAP, OLAP and explain different OLAP operations'. Answer as one connected essay: the operations list (section 1.6) plus the server table here, closed with the sparse-cube arithmetic — that combination hits every marking point of the original question.",
            },
            keyTerms: [
              { term: "ROLAP", definition: "OLAP server over relational tables; operations become SQL — scalable, slower." },
              { term: "MOLAP", definition: "OLAP server over pre-computed array cubes — fastest queries, limited scale." },
              { term: "HOLAP", definition: "Hybrid: relational detail plus MOLAP aggregation cubes." },
              { term: "Materialized cuboid", definition: "A pre-computed aggregate (GROUP BY result) stored to skip query-time computation." },
              { term: "Sparse cube", definition: "A cube whose occupied cells are few relative to its dimension-product size." },
            ],
            examQuestions: [
              {
                q: "Compare ROLAP, MOLAP and HOLAP servers — storage, query speed, scalability and sparse-data handling — and state when each architecture is the right choice.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "ROLAP: relational tables, operations as SQL, unbounded scale, per-query cost",
                  "MOLAP: pre-computed arrays, sub-second queries, sparse-cube waste, load-time limits",
                  "HOLAP: relational detail + MOLAP aggregates — speed on summaries, depth on drill-down",
                  "Sparse arithmetic: 3650 x 5000 x 200 = 3.65B cells, ~98% empty",
                  "Choice: huge unpredictable workloads -> ROLAP; predictable fast dashboards -> MOLAP",
                ],
              },
              {
                q: "Why does a MOLAP cube waste space on real retail data, and how do engines mitigate it?",
                marks: 7,
                outline: [
                  "Dimension-product is huge (time x product x store = billions of cells)",
                  "Most combinations never occur (2% occupancy in the worked example)",
                  "Dense arrays allocate all cells anyway",
                  "Mitigations: sparse compression, chunk arrays, or push detail to HOLAP/ROLAP",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Warehouse implementation — cube computation, OLAP queries and indexing",
            body: [
              "Implementation is where the warehouse earns its speed, and the syllabus names three concerns. Efficient computation of data cubes: the full cube of d dimensions has 2^d cuboids (all possible GROUP BYs), so materializing everything is impossible — compute the full cube for small dimension counts using multi-way array aggregation (share partial aggregates across cuboids in one pass over a sparse array), or select a subset of cuboids to materialize using a greedy ranking that weighs each cuboid's benefit (query frequency x savings) against its space cost. Partial materialization is the standard answer: materialize the top cuboids, compute the rest on demand.",
              "Processing OLAP queries is top-down: locate the cuboid matching the query's grouping level — fetch it if materialized; otherwise fetch the nearest ancestor cuboid and derive downward. Query rewriting over materialized summary tables (the classic 'lattice of cuboids' walk) turns a multi-second aggregation over billions of rows into a sub-second fetch. The worked trace: 'average sales by quarter for region' — the quarter x region cuboid is materialized, so the query reads 48 summary rows instead of aggregating 50 million fact rows; drilling to month falls to the month x region cuboid, also materialized; drilling to day must aggregate the fact table on the fly.",
              "Indexing completes the implementation. Bitmap indexes represent each distinct value of a low-cardinality column as one bit vector over the rows — gender {M, F} on six rows becomes M = 110001 and F = 001001; AND/OR of predicates becomes AND/OR of bit vectors, so 'male AND (north OR east)' is three bitwise operations. They excel on low-cardinality warehouse columns, compress superbly, but degrade on high-cardinality columns where B+ tree indexes remain the right tool. Join indexes map a dimension value directly to the fact rows sharing it, pre-computing the star-schema join. The worked bitmap query on six rows: (region = N OR E) AND gender = M — N = 110001, E = 000010, OR = 110011, AND with M = 110001 -> rows 1, 2, 6.",
              "The exam angle pairs all three: 'explain efficient cube computation, OLAP query processing and indexing in a warehouse' — 2^d cuboids and partial materialization, the top-down cuboid walk with one worked fetch, then bitmap vs B+ tree vs join index with the bit-vector trace. Examiners accept HOLAP-style division of labour as a closing line: aggregates precomputed, detail indexed relationally.",
            ],
            bullets: [
              "Full cube of d dimensions = 2^d cuboids — total materialization is impossible.",
              "Multi-way array aggregation computes many cuboids sharing one array pass.",
              "Partial materialization: greedy selection by benefit (frequency x savings) vs space.",
              "OLAP queries walk the cuboid lattice top-down; drill-down falls to finer cuboids.",
              "Bitmap index: one bit vector per distinct value; predicates become bitwise AND/OR.",
              "Bitmaps suit low-cardinality columns; B+ trees suit high-cardinality ones.",
              "Join indexes pre-compute the star join from dimension values to fact rows.",
            ],
            diagram: {
              kind: "flow",
              title: "Answering an OLAP query",
              caption:
                "Find the right cuboid; derive from an ancestor if the exact level was not materialized.",
              steps: [
                { label: "Parse query", note: "grouping level + filters" },
                { label: "Locate cuboid", note: "walk the lattice to the matching GROUP BY" },
                { label: "Materialized?", note: "yes: fetch; no: derive from nearest ancestor" },
                { label: "Apply filters", note: "bitmap AND/OR on the fetched rows" },
                { label: "Present", note: "pivot for the report" },
              ],
            },
            table: {
              caption: "Indexing options in the warehouse.",
              headers: ["Index", "Structure", "Best cardinality", "Warehouse use"],
              rows: [
                ["Bitmap", "one bit vector per distinct value", "low (gender, region, category)", "fast AND/OR of filters"],
                ["B+ tree", "balanced tree over keys", "high (customer id, date)", "range and point lookups"],
                ["Join index", "dimension value -> fact rows", "any", "pre-computed star join"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "bitmap.py — predicate evaluation as bit operations",
              code: `region = ["N", "N", "S", "W", "E", "N"]
gender = ["M", "M", "F", "F", "M", "M"]

def bits(col, value):
    return "".join("1" if r == value else "0" for r in col)

N, E, M = bits(region, "N"), bits(region, "E"), bits(gender, "M")
ne_or   = "".join("1" if a == "1" or b == "1" else "0" for a, b in zip(N, E))
result  = "".join("1" if a == "1" and b == "1" else "0" for a, b in zip(ne_or, M))
print(result)   # 110001 -> rows 1, 2 and 6 match: N-or-E and male`,
            },
            callout: {
              type: "tip",
              title: "The 2^d line earns the mark",
              body: "Open the cube-computation answer with 'a cube over d dimensions has 2^d cuboids, so total materialization is impossible' — then partial materialization and greedy selection follow logically. Examiners look for that opening line; without it the answer reads as guessing.",
            },
            keyTerms: [
              { term: "Cuboid", definition: "One aggregate (GROUP BY result) in the cube lattice; the full cube is 2^d cuboids." },
              { term: "Partial materialization", definition: "Pre-computing a selected subset of cuboids and deriving the rest on demand." },
              { term: "Multi-way array aggregation", definition: "Computing many cuboids in one pass over a chunked sparse array." },
              { term: "Bitmap index", definition: "A bit vector per distinct column value; predicates evaluate as bitwise operations." },
              { term: "Join index", definition: "Maps dimension values directly to the fact rows sharing them, pre-computing the star join." },
            ],
            examQuestions: [
              {
                q: "Explain efficient computation of data cubes (full vs partial materialization, multi-way array aggregation), the top-down processing of OLAP queries, and the role of bitmap and join indexes.",
                marks: 7,
                outline: [
                  "Full cube has 2^d cuboids — total materialization impossible",
                  "Multi-way array aggregation shares partial aggregates in one pass",
                  "Partial: greedy selection of cuboids by benefit vs space",
                  "Query processing: walk the cuboid lattice top-down, derive from ancestors",
                  "Worked fetch: quarter x region cuboid -> 48 rows instead of 50M fact rows",
                  "Bitmap index: bit vectors per value; AND/OR of predicates",
                  "Join index pre-computes the star join; B+ trees for high-cardinality columns",
                ],
              },
              {
                q: "Construct the bitmap indexes for a six-row Region column and evaluate the predicate (region = 'N' OR region = 'E') AND gender = 'M'.",
                marks: 7,
                outline: [
                  "N = 110001, S = 001000, E = 000010, W = 000100, M = 110001",
                  "OR step: N OR E = 110011",
                  "AND step with M: 110011 AND 110001 = 110001",
                  "Rows 1, 2 and 6 satisfy the predicate",
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
      title: "Data Mining",
      summary:
        "Unit II turns raw operational data into minable data: preprocessing (cleaning missing and noisy values), integration and transformation strategies, reduction, discretization and concept hierarchy generation, the basics and techniques of data mining itself, the seven-step knowledge discovery process, and the field's applications and challenges.",
      chapter: {
        number: "02",
        title: "From Data to Knowledge",
        intro:
          "Unit II covers data preprocessing and its cleaning of missing and noisy values, data integration and the transformation strategies, data reduction, discretization and concept hierarchy generation, the basics and task families of data mining, the knowledge discovery process step by step, and the applications and challenges that frame the whole subject.",
        inOneBreath:
          "Real data is dirty, scattered and too large: cleaning handles missing values and noise (binning, regression, clustering), integration merges sources and removes redundancy, transformation normalizes (min-max, z-score, decimal scaling), reduction shrinks rows and attributes, discretization maps numbers to labels and builds concept hierarchies; mining tasks split into descriptive (association, clustering, summarization) and predictive (classification, regression); KDP wraps mining in seven steps from cleaning to knowledge presentation — and mining is just one of them.",
        sections: [
          {
            number: "2.1",
            title: "Basics of data mining and its techniques",
            body: [
              "Data mining is the nontrivial extraction of implicit, previously unknown and potentially useful information (patterns, rules, regularities) from large datasets. The three adjectives carry the marks: 'implicit' means the pattern is not stored anywhere but discovered; 'previously unknown' separates mining from confirming a known hypothesis; 'potentially useful' separates insight from noise. Mining is not querying — 'total sales for March' retrieves a stored fact, while 'customers who bought X typically buy Y within a week' discovers a pattern nobody wrote down. Nor is it ordinary statistics reporting: mining searches hypotheses automatically at scale.",
              "The task families split into descriptive (characterize the general properties of data) and predictive (infer values for future data). Descriptive: class description and summarization (concept description), association rules (Unit III), clustering (Unit IV), outlier analysis (Unit IV), evolution and trend analysis. Predictive: classification (predict a class label — Unit IV's trees and Bayes) and prediction/regression (predict a continuous value). The techniques borrowed to do this come from statistics (sampling, hypothesis testing), machine learning (trees, Bayes), database technology (OLAP, indexing) and pattern recognition — the syllabus's phrase 'data mining techniques' covers exactly this interdisciplinary toolbox.",
              "A worked example anchors the distinction: a telecom retailer with 4 crore call records. Descriptive mining reports 'weekend call volume clusters into three customer groups' (clustering) and 'SMS bundles co-occur with evening calls' (association). Predictive mining builds a classifier that predicts churn (yes/no) from usage features, and a regression that predicts next month's data usage in GB. Same data, two task families, two kinds of output — a rule or summary versus a model that scores new tuples. The exam answer should name which family each output belongs to.",
              "The exam angle: 'define data mining; is it different from query processing and statistics? describe its task families' — write the definition verbatim with the three adjectives, give the query-versus-mining contrast, then enumerate descriptive and predictive tasks with one example each. Close by naming the source disciplines; the syllabus's 'data mining techniques' line is asking for exactly that list.",
            ],
            bullets: [
              "Definition carries three adjectives: implicit, previously unknown, potentially useful.",
              "Querying retrieves stored facts; mining discovers patterns nobody wrote down.",
              "Descriptive tasks: summarization, association, clustering, outliers, trend analysis.",
              "Predictive tasks: classification (label) and prediction/regression (continuous value).",
              "Techniques borrowed from statistics, machine learning, databases and pattern recognition.",
              "Same telecom data: clustering = descriptive; churn classifier = predictive.",
            ],
            diagram: {
              kind: "fork",
              title: "Which data mining task do you need?",
              caption: "The task family follows from what the analysis must output.",
              start: "A large dataset, a business question",
              branches: [
                { label: "Summarize what the data looks like", outcome: "class description / OLAP summarization — descriptive", good: true },
                { label: "Find what occurs together", outcome: "association rule mining (Unit III) — descriptive", good: true },
                { label: "Predict a label for new tuples", outcome: "classification — trees, Bayes, K-NN (Unit IV)", good: true },
                { label: "Find natural groups", outcome: "clustering (Unit IV) — descriptive, no labels needed", good: true },
              ],
            },
            table: {
              caption: "Descriptive vs predictive mining tasks.",
              headers: ["Family", "Task", "Output", "Example"],
              rows: [
                ["Descriptive", "association rules", "if-then rules with support/confidence", "bread -> milk (0.4, 0.67)"],
                ["Descriptive", "clustering", "groups of similar tuples", "three usage segments"],
                ["Predictive", "classification", "model predicting a class label", "churn: yes/no"],
                ["Predictive", "regression", "model predicting a number", "next month's GB usage"],
              ],
            },
            callout: {
              type: "tip",
              title: "Two words decide the definition marks",
              body: "'Previously unknown' and 'potentially useful' are the phrases the examiner scans for in the definition. Write them exactly, then contrast with query processing — 'total sales for March' is retrieval, 'customers who buy X buy Y' is mining.",
            },
            keyTerms: [
              { term: "Data mining", definition: "Nontrivial extraction of implicit, previously unknown, potentially useful patterns from large data." },
              { term: "Descriptive task", definition: "Characterizes general properties of the data — association, clustering, summarization." },
              { term: "Predictive task", definition: "Infers labels or values for new/future data — classification and regression." },
              { term: "Knowledge discovery", definition: "The full process (Unit 2.6) of which mining is the core step." },
            ],
            examQuestions: [
              {
                q: "Define data mining. How is it different from query processing and traditional statistics? Explain its descriptive and predictive task families with one example of each.",
                marks: 7,
                outline: [
                  "Definition with the three adjectives: implicit, previously unknown, potentially useful",
                  "Query processing retrieves stored facts; mining discovers unstated patterns",
                  "Statistics tests stated hypotheses; mining searches them automatically at scale",
                  "Descriptive: association, clustering, summarization, outlier, trend",
                  "Predictive: classification (label) and regression (continuous)",
                  "Telecom example: usage clusters vs churn classifier",
                  "Techniques from statistics, ML, databases, pattern recognition",
                ],
              },
              {
                q: "Classify each as descriptive or predictive, with one-line reasons: (a) market-basket rules, (b) churn classifier, (c) customer segmentation, (d) fraud detection.",
                marks: 7,
                outline: [
                  "(a) descriptive — summarizes co-occurrence, no target label",
                  "(b) predictive — supervised model scoring a label",
                  "(c) descriptive — unsupervised grouping",
                  "(d) predictive (supervised) or outlier analysis (descriptive) — both defensible with reason",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Data preprocessing — cleaning missing and noisy values",
            body: [
              "Real-world data is dirty: incomplete (missing attribute values), noisy (errors and outliers) and inconsistent (conflicting codes). Preprocessing exists because mining algorithms amplify dirt — a decision tree will happily split on a data-entry error. The syllabus's preprocessing block covers cleaning (this section), integration and transformation (next), reduction and discretization (after). Cleaning is always the first step, and the exam reliably tests it — the June 2025 paper asked the missing-values question verbatim.",
              "Missing values have six standard treatments: ignore the tuple (only when the class label is missing and the dataset is large); fill manually (slow, impractical at scale); use a global constant ('Unknown'); use the attribute mean; use the mean of the attribute within the tuple's class (class-wise mean — better, since a 45-year-old's missing income should be filled with the 45-year-old mean, not the all-ages mean); or use the most probable value predicted by a decision tree, Bayesian classifier or regression — the most sophisticated and usually the best. Worked choice: income missing on 8% of a 10,000-row table — the global mean drags toward the average of all ages; the class-wise mean for each age bracket; the predicted value for precision work.",
              "Noisy data is smoothed by three techniques. Binning: sort values, partition into equal-depth bins, smooth by bin mean, median or boundaries. Worked trace — sorted values 4, 8, 15, 21, 21, 24, 25, 28, 34, depth 3: bin1 {4, 8, 15} smoothed by mean 9 -> {9, 9, 9}, or by boundaries -> {4, 4, 15}; bin2 {21, 21, 24} -> mean {22, 22, 22} or boundaries {21, 21, 24}; bin3 {25, 28, 34} -> mean {29, 29, 29}. Regression fits a function (here: income by age) and replaces values by their fitted values — smoothing in one formula. Clustering detects outliers as points outside every cluster; the 90-lakh salary in a 3-6 lakh population lands in no cluster and is flagged, then corrected or removed.",
              "The exam angle: 'describe the methods for handling the missing values problem' (June 2025 Q2b verbatim) — list all six treatments with one line of when-to-use each, then defend the most probable value method as the best-practice default. If the question extends to noise, add the binning trace: examiners reward the actual numbers, not just the method names.",
            ],
            bullets: [
              "Six missing-value treatments: ignore, manual fill, global constant, mean, class-wise mean, predicted value.",
              "Class-wise mean beats global mean — fill from the tuple's own group.",
              "The most probable value (tree/Bayes/regression) is the most sophisticated fill.",
              "Binning: equal-depth bins, smooth by mean, median or boundaries.",
              "Trace: 4, 8, 15 -> mean 9 -> {9, 9, 9}; by boundaries -> {4, 4, 15}.",
              "Regression replaces values by fitted ones; clustering flags outliers outside all clusters.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The preprocessing pipeline",
              caption:
                "Cleaning is stage one; integration, transformation, reduction and discretization follow before mining ever runs.",
              stages: [
                { label: "Clean", note: "missing values, noise, inconsistencies" },
                { label: "Integrate", note: "merge sources, remove redundancy" },
                { label: "Transform", note: "normalize, generalize, aggregate" },
                { label: "Reduce", note: "sampling, attribute selection" },
                { label: "Discretize", note: "numbers -> labels, hierarchies" },
              ],
            },
            table: {
              caption: "Missing-value methods and when to use them.",
              headers: ["Method", "How it fills", "Use when"],
              rows: [
                ["Ignore the tuple", "drop the row entirely", "class label missing, data plentiful"],
                ["Global constant", "'Unknown' for all gaps", "gaps may themselves be meaningful"],
                ["Attribute mean", "column average", "quick, distribution roughly uniform"],
                ["Class-wise mean", "mean within the tuple's class", "attribute varies by class (income by age)"],
                ["Most probable value", "predicted by tree/Bayes/regression", "precision matters — best-practice default"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "binning.py — equal-depth bins smoothed by mean and boundaries",
              code: `values = [4, 8, 15, 21, 21, 24, 25, 28, 34]
depth = 3
bins = [values[i:i+depth] for i in range(0, len(values), depth)]

for b in bins:
    m = sum(b) / len(b)
    print("bin", b,
          "mean ->", [round(m)] * len(b),
          "boundaries ->", [b[0], b[-1]] * (len(b) // 2) + [b[-1]])
# bin [4, 8, 15]  mean -> [9, 9, 9]     boundaries -> [4, 4, 15]
# bin [21, 21, 24] mean -> [22, 22, 22] boundaries -> [21, 21, 24]
# bin [25, 28, 34] mean -> [29, 29, 29] boundaries -> [25, 25, 34]`,
            },
            callout: {
              type: "exam",
              title: "Asked verbatim in Jun 2025",
              body: "June 2025 Q2b: 'In real world data, tuples with missing values for some attributes are a common occurrence. Describe various methods for handling this problem.' That is exactly the six-method list — write all six, order them crude-to-sophisticated, and finish by recommending the most-probable-value method.",
            },
            keyTerms: [
              { term: "Missing value", definition: "An attribute with no recorded value — handled by dropping, filling or predicting." },
              { term: "Class-wise mean", definition: "The mean of the attribute within the tuple's own class or group." },
              { term: "Noise", definition: "Random error or variance in a measured attribute — smoothed by binning, regression, clustering." },
              { term: "Equal-depth binning", definition: "Partitioning sorted values so each bin holds the same count, then smoothing within bins." },
              { term: "Outlier", definition: "A value deviating so far from the rest that it arouses suspicion of error — or of genuine novelty." },
            ],
            examQuestions: [
              {
                q: "In real world data, tuples with missing values for some attributes are a common occurrence. Describe various methods for handling this problem.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Ignore the tuple: only when the class label is missing and data is plentiful",
                  "Fill manually: accurate but impractical at scale",
                  "Global constant such as 'Unknown'",
                  "Attribute mean: quick but blurs group differences",
                  "Class-wise mean: fill from the tuple's own class (income by age bracket)",
                  "Most probable value: predicted by decision tree, Bayes or regression — best practice",
                  "Close: recommend the predicted-value method for precision work",
                ],
              },
              {
                q: "Smooth the series 4, 8, 15, 21, 21, 24, 25, 28, 34 using equal-depth binning of depth 3, by bin means and by bin boundaries.",
                marks: 7,
                outline: [
                  "Depth-3 bins: {4,8,15}, {21,21,24}, {25,28,34}",
                  "Bin means: 9, 22, 29 -> smoothed bins {9,9,9}, {22,22,22}, {29,29,29}",
                  "Bin boundaries: each value replaced by its nearest boundary",
                  "Result by boundaries: {4,4,15}, {21,21,24}, {25,25,34}",
                ],
              },
              {
                q: "Explain how clustering is used for noise removal in data cleaning.",
                marks: 7,
                outline: [
                  "Cluster the data so similar tuples group together",
                  "Points falling outside every cluster are outliers/noise",
                  "Inspect flagged values: correct errors, drop tuples, or keep genuine novelties",
                  "Works without distribution assumptions, unlike z-score tests",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Data integration and transformation strategies",
            body: [
              "Integration merges data from multiple sources into one coherent store, and three problems dominate. Schema integration: the same entity has different names across sources — cust_id, customer_no, c_no all mean one customer; matching them is entity resolution, aided by metadata. Redundancy: an attribute is derivable from another (annual_income from monthly_income) or duplicated across sources; detect it by correlation analysis — chi-square (χ²) tests independence for nominal attributes, the correlation coefficient does it for numeric ones, and a near-±1 correlation means drop one of the pair. Data value conflicts: the same attribute measured in different units, currencies or precisions (rupees vs dollars, metres vs feet) — resolved by explicit mapping rules, never by trusting either source blindly.",
              "Transformation reshapes integrated data for mining, and the syllabus's 'transformation strategies' line maps to five named operations. Smoothing removes noise (binning, regression — section 2.2's toolkit). Aggregation summarizes (daily sales -> monthly sales). Generalization climbs a concept hierarchy (street -> city -> country, or 24 -> young). Normalization scales attributes to comparable ranges — min-max maps to [0, 1]: v' = (v − min)/(max − min); z-score standardizes: v' = (v − mean)/σ; decimal scaling shifts the decimal: v' = v/10^j with the smallest j making max(|v'|) < 1. Attribute construction builds new features from old (area = length × breadth).",
              "The worked normalization triple: income ranging 50000..98000, value 72000. Min-max: (72000 − 50000)/(98000 − 50000) = 0.458. Z-score (mean 74000, σ 12000): (72000 − 74000)/12000 = −0.167. Decimal scaling (max 98000, j = 5): 72000/10^5 = 0.72. All three land the value in [−1, 1]-ish territory so no attribute dominates a distance computation — the reason normalization is mandatory before K-NN, K-Means and neural networks. Min-max preserves shape but is outlier-sensitive; z-score is the robust default; decimal scaling is the cheap one-pass option when the max magnitude is known.",
              "The exam angle: 'explain data transformation strategies in detail' was June 2025 Q2a verbatim — enumerate all five strategies with one line each, then work the three normalization formulas on one shared value (0.458, −0.167, 0.72) so the examiner sees real computation. If the question extends to integration, add the χ²/correlation redundancy test — it is the one integration tool with a formula, and formulas earn marks.",
            ],
            bullets: [
              "Integration problems: schema mismatch (entity resolution), redundancy, value conflicts.",
              "Redundancy test: chi-square for nominal attributes, correlation coefficient for numeric.",
              "Near-±1 correlation -> one of the pair is derivable — drop it.",
              "Five transformation strategies: smoothing, aggregation, generalization, normalization, attribute construction.",
              "Min-max: (v-min)/(max-min) -> 0.458 for the worked income; shape-preserving, outlier-sensitive.",
              "Z-score: (v-mean)/sd -> -0.167; the robust default. Decimal scaling: v/10^j -> 0.72.",
            ],
            diagram: {
              kind: "flow",
              title: "From sources to a minable store",
              caption:
                "Integration resolves identities and redundancy first; transformation then reshapes the merged data.",
              steps: [
                { label: "Merge sources", note: "match schemas, resolve entities" },
                { label: "Detect redundancy", note: "chi-square / correlation tests" },
                { label: "Resolve conflicts", note: "units, currencies, precisions" },
                { label: "Transform", note: "normalize, generalize, aggregate" },
                { label: "Mine-ready store", note: "comparable scales, clean features" },
              ],
            },
            table: {
              caption: "Normalization formulas on the same value (income 72000, range 50000-98000, mean 74000, sd 12000).",
              headers: ["Method", "Formula", "Worked result", "Trade-off"],
              rows: [
                ["Min-max", "v' = (v - min)/(max - min)", "(72000-50000)/48000 = 0.458", "shape-preserving; outlier-sensitive"],
                ["Z-score", "v' = (v - mean)/sd", "(72000-74000)/12000 = -0.167", "robust default; unbounded range"],
                ["Decimal scaling", "v' = v / 10^j, smallest j with max|v'| < 1", "72000 / 10^5 = 0.72", "cheap; needs known max magnitude"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked verbatim in Jun 2025",
              body: "June 2025 Q2a: 'Explain data transformation strategies in detail.' The expected answer names all five strategies — smoothing, aggregation, generalization, normalization (with all three formulas), attribute construction — and works at least the min-max number. Missing one strategy is the usual mark-loser.",
            },
            keyTerms: [
              { term: "Schema integration", definition: "Matching entities and attributes that carry different names across sources." },
              { term: "Chi-square test", definition: "Tests independence of two nominal attributes — the redundancy detector for categories." },
              { term: "Correlation coefficient", definition: "Measures linear dependence of two numeric attributes; near ±1 means redundancy." },
              { term: "Min-max normalization", definition: "v' = (v - min)/(max - min), mapping to [0, 1]." },
              { term: "Decimal scaling", definition: "v' = v/10^j with the smallest j so the maximum absolute value stays below 1." },
            ],
            examQuestions: [
              {
                q: "Explain data transformation strategies in detail — smoothing, aggregation, generalization, normalization (min-max, z-score, decimal scaling) and attribute construction — with worked numbers.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Smoothing: binning/regression remove noise (link to 2.2)",
                  "Aggregation: daily -> monthly sales summaries",
                  "Generalization: climb concept hierarchies (street -> city; 24 -> young)",
                  "Normalization: min-max 72000 -> 0.458; z-score -> -0.167; decimal scaling -> 0.72",
                  "Attribute construction: area = length x breadth, BMI from height/weight",
                  "Why normalize: distance-based algorithms are dominated by large-range attributes",
                ],
              },
              {
                q: "How is redundancy detected during data integration? Give the test for nominal and for numeric attributes.",
                marks: 7,
                outline: [
                  "Nominal attributes: chi-square test of independence — large chi-square means dependence",
                  "Numeric attributes: correlation coefficient r; |r| near 1 means one derives from the other",
                  "Example: annual_income vs monthly_income -> r = 1.0 -> drop one",
                  "Redundancy inflates dimensionality and misleads attribute-weighting methods",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Data reduction",
            body: [
              "Mining gigabytes directly is slow and often impossible in memory, so reduction shrinks the data while preserving (approximately) the analytical information. The syllabus's families: data cube aggregation (summarize to the smallest level the analysis needs — daily to monthly before mining five-year trends), attribute subset selection (keep only attributes relevant to the task, chosen by information gain or correlation), dimensionality reduction (encode attributes into fewer — wavelets and PCA), numerosity reduction (replace rows by a smaller representation — sampling, histograms, clustering), and discretization (numbers to labels — next section's topic).",
              "Attribute subset selection is worth its own worked logic: start with the full attribute set, greedily add (or remove) attributes whose inclusion (or removal) best improves a scoring function such as information gain, and stop when no candidate improves. Sampling is the numerosity workhorse — simple random sampling without replacement, with replacement, cluster sampling (mine one representative cluster), and stratified sampling (sample within each class so rare classes keep representation). The worked case: a fraud dataset with 99.8% legitimate and 0.2% fraudulent rows — simple sampling would almost surely drop every fraud row, so stratify: sample within each class independently, preserving the (or boosting the) fraud proportion.",
              "Histograms compress numeric distributions: bucket salary into ranges and store (range, count) pairs — 10 lakh rows become 12 buckets, and the mining question 'does salary matter?' survives the compression. Clustering as reduction replaces each cluster by its representative (centroid or medoid). Dimensionality reduction's PCA rotates the data onto a few axes of maximum variance and keeps those — the intuition suffices here; the algorithm belongs to warehouse/analysis electives. All of reduction trades exactness for speed under one discipline: validate on a holdout that the reduced data's mined model matches the full data's within tolerance.",
              "The exam angle: 'explain the major data reduction techniques' — name the five families, give one example each, and work the stratified-sampling argument (the 99.8/0.2 fraud case) because it shows why sampling type matters. The common slip is writing 'reduction means sampling' — the examiner wants the whole family with attribute selection and aggregation included.",
            ],
            bullets: [
              "Five families: cube aggregation, attribute selection, dimensionality reduction, numerosity reduction, discretization.",
              "Aggregate to the coarsest level the analysis still needs — daily -> monthly for trends.",
              "Attribute selection: greedy forward/backward search scored by information gain.",
              "Sampling types: SRS without/with replacement, cluster sample, stratified sample.",
              "Stratify when classes are imbalanced: 99.8% vs 0.2% fraud would vanish in simple sampling.",
              "Histograms and cluster representatives compress without losing the analytical signal.",
            ],
            diagram: {
              kind: "matrix",
              title: "Which reduction do you need?",
              caption:
                "Too many rows, too many attributes, or both — each quadrant has its own remedy.",
              axes: { x: "Attribute count (few -> many)", y: "Row count (few -> many)" },
              quadrants: [
                { label: "No reduction needed", note: "small and narrow — mine directly" },
                { label: "Dimensionality reduction", note: "few rows, many attributes — PCA, attribute selection" },
                { label: "Numerosity reduction", note: "many rows, few attributes — sampling, histograms" },
                { label: "Full reduction pipeline", note: "many rows and attributes — aggregate, select, then sample" },
              ],
            },
            table: {
              caption: "Reduction techniques at a glance.",
              headers: ["Technique", "Reduces", "How", "Worked example"],
              rows: [
                ["Cube aggregation", "rows", "summarize up a hierarchy", "daily -> monthly sales"],
                ["Attribute selection", "columns", "score by information gain", "drop zipcode when age+income predict"],
                ["Dimensionality reduction", "columns", "PCA / wavelets encode few axes", "50 features -> 5 components"],
                ["Sampling", "rows", "random / cluster / stratified", "stratified 10% keeps the 0.2% fraud class"],
                ["Histogram", "rows", "(range, count) buckets", "salary -> 12 buckets"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "sampling.py — stratified sampling keeps rare classes",
              code: `import numpy as np

# 10,000 rows: 9,980 legitimate (0), 20 fraud (1)
labels = np.zeros(10000, dtype=int); labels[:20] = 1

rng = np.random.default_rng(0)
frac = 0.1
sample = np.concatenate([
    rng.choice(np.where(labels == c)[0],
               size=max(1, int(frac * (labels == c).sum())),  # at least one fraud row
               replace=False)
    for c in [0, 1]
])
print(len(sample), labels[sample].sum())   # ~1000 rows, 2 fraud rows kept`,
            },
            callout: {
              type: "warning",
              title: "Simple sampling deletes rare classes",
              body: "On an imbalanced dataset, simple random sampling is not neutral — it silently deletes the rare class (fraud, default, disease) the mining was asked to find. Always stratify by class when reducing rows; mention this in any sampling answer.",
            },
            keyTerms: [
              { term: "Data reduction", definition: "Shrinking data volume while preserving analytical information — rows, columns or both." },
              { term: "Attribute subset selection", definition: "Keeping the most task-relevant attributes, scored by information gain or correlation." },
              { term: "Stratified sampling", definition: "Sampling within each class separately so rare classes keep representation." },
              { term: "Histogram reduction", definition: "Replacing rows by (range, count) buckets of a numeric attribute." },
              { term: "Dimensionality reduction", definition: "Encoding attributes into fewer derived axes — PCA, wavelets." },
            ],
            examQuestions: [
              {
                q: "Explain the major data reduction techniques — cube aggregation, attribute subset selection, dimensionality reduction, numerosity reduction and discretization — with one example each.",
                marks: 7,
                outline: [
                  "Aggregation: daily -> monthly before five-year trend mining",
                  "Attribute selection: greedy search scored by information gain",
                  "Dimensionality: PCA/wavelets encode many columns into few axes",
                  "Numerosity: sampling, histograms, cluster representatives",
                  "Discretization: numbers -> labels (next section)",
                  "Fraud example: stratified sampling preserves the 0.2% rare class",
                  "Discipline: validate the reduced-data model against the full-data model",
                ],
              },
              {
                q: "Why does simple random sampling fail on an imbalanced fraud dataset, and what is the fix?",
                marks: 7,
                outline: [
                  "0.2% fraud class: a 1% simple sample almost surely contains no fraud rows",
                  "The mined model then sees only legitimate behaviour and cannot detect fraud",
                  "Fix: stratified sampling within each class, possibly oversampling the rare class",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Discretization and concept hierarchy generation",
            body: [
              "Discretization converts a numeric attribute's continuous values into a small set of interval labels — income in thousands of rupees becomes {low, medium, high} — making patterns readable, rules short and classifiers less overfit. Concept hierarchy generation builds the ladder above the labels: low < medium < high is one level, and above it the attribute generalizes further (or for nominal data: street < city < province < country). Mining can then run at any level of the ladder — the same mechanism Unit III reuses for multi-level association rules.",
              "The methods differ in what they look at. Binning (equal-width or equal-depth) and histogram analysis are unsupervised and cheap. Cluster analysis groups values and treats each cluster as an interval — unsupervised but data-shaped. Entropy/decision-tree based discretization is supervised: it picks the split boundaries that best separate class labels, choosing the cut with maximum information gain — the only method that uses class information. Correlation-based (ChiMerge) merges intervals while a chi-square test says adjacent intervals differ in class distribution. A worked decision-tree discretization of age against a buys/computes class: sort the ages, test every candidate cut, keep the one with the highest gain, recurse — the result is data-derived boundaries like {(-inf, 30), (30, 55), (55, inf)} instead of an arbitrary 3-bin split.",
              "Nominal hierarchies come from experts or from the data itself (grouping product codes by prefix); numeric hierarchies come from discretization. Top-down (splitting: start with all values, cut finer) and bottom-up (merging: start with all distinct values, merge coarser) are the two construction directions — binning is top-down, ChiMerge is bottom-up. The worked salary hierarchy: level 1 = the raw rupee values; level 2 = intervals (0..25000) etc.; level 3 = labels {low, medium, high}; mining 'buys_computer' rules at level 3 gives short, general rules, while level 1 gives precise but unreadable ones.",
              "The exam angle: 'explain discretization and concept hierarchy generation with methods' — define both, list the four methods marking which are supervised, give the age/salary worked boundaries, and end by connecting hierarchies to roll-up/drill-down (Unit I) and multi-level rules (Unit III). That connection sentence is what the examiner's model answer carries.",
            ],
            bullets: [
              "Discretization: continuous values -> interval labels; hierarchies ladder the labels upward.",
              "Unsupervised methods: binning, histogram analysis, cluster analysis.",
              "Supervised methods: entropy/decision-tree based, correlation-based (ChiMerge).",
              "Decision-tree discretization picks cut points by maximum information gain.",
              "Construction directions: top-down splitting (binning) vs bottom-up merging (ChiMerge).",
              "Salary ladder: raw rupees -> intervals -> {low, medium, high} — mining at any level.",
              "Same mechanism powers OLAP roll-up and multi-level association rules.",
            ],
            diagram: {
              kind: "pyramid",
              title: "A nominal concept hierarchy",
              caption:
                "Mining at the top gives general rules; drilling down gives precise but verbose ones.",
              tiers: [
                { label: "Country", note: "coarsest — rules apply nationwide" },
                { label: "Province", note: "regional patterns emerge" },
                { label: "City", note: "local patterns; most rules mined here" },
                { label: "Street", note: "finest — precise, verbose, sparse" },
              ],
            },
            table: {
              caption: "Discretization methods.",
              headers: ["Method", "Supervised?", "Idea", "Typical output"],
              rows: [
                ["Equal-width binning", "no", "fixed interval width", "age: 0-20, 20-40, 40-60"],
                ["Equal-depth binning", "no", "fixed count per bin", "depth-3 bins of sorted values"],
                ["Cluster analysis", "no", "clusters become intervals", "data-shaped ranges"],
                ["Entropy / decision tree", "yes", "cut where information gain is max", "age: (-inf,30], (30,55], (55,inf)"],
                ["ChiMerge (chi-square)", "yes", "merge adjacent intervals while chi-square says similar", "bottom-up merged ranges"],
              ],
            },
            callout: {
              type: "tip",
              title: "Supervised beats arbitrary when labels exist",
              body: "If class labels exist, say so: entropy-based discretization uses them and places boundaries where the class actually changes, while binning cuts blindly. Naming which methods are supervised is a standard sub-question — and the answer is exactly two: entropy-based and chi-square-based.",
            },
            keyTerms: [
              { term: "Discretization", definition: "Converting numeric values into interval labels for readability and robustness." },
              { term: "Concept hierarchy", definition: "A ladder of increasingly general levels for an attribute, enabling mining at any granularity." },
              { term: "Entropy-based discretization", definition: "Choosing cut points that maximize class information gain — supervised." },
              { term: "ChiMerge", definition: "Bottom-up merging of adjacent intervals while chi-square finds them class-similar." },
              { term: "Top-down vs bottom-up", definition: "Splitting from all values down (binning) vs merging from distinct values up (ChiMerge)." },
            ],
            examQuestions: [
              {
                q: "Explain discretization and concept hierarchy generation. Describe the methods (binning, histogram, cluster analysis, entropy-based, correlation-based), marking which are supervised.",
                marks: 7,
                outline: [
                  "Definition: numeric -> interval labels; hierarchies stack the labels upward",
                  "Binning (equal-width/depth): unsupervised, cheap",
                  "Histogram and cluster analysis: unsupervised, data-shaped intervals",
                  "Entropy/decision-tree: supervised — cuts at maximum information gain",
                  "ChiMerge: supervised, bottom-up merging by chi-square",
                  "Worked output: age -> (-inf,30], (30,55], (55,inf)",
                  "Hierarchies connect to OLAP roll-up and multi-level association rules",
                ],
              },
              {
                q: "Generate a three-level concept hierarchy for a salary attribute and explain why mining at the top level gives more general rules.",
                marks: 7,
                outline: [
                  "Level 1: raw rupee values (every distinct number)",
                  "Level 2: intervals, e.g. (0..25000), (25000..50000), (50000..inf)",
                  "Level 3: labels {low, medium, high}",
                  "Top-level rules cover more tuples, shorter and more readable",
                  "Drill-down recovers detail when a rule needs it",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "KDP — the knowledge discovery process",
            body: [
              "Knowledge discovery in databases (KDP/KDD) is the full pipeline that ends in useful knowledge, and data mining is one step of it — the syllabus and the June 2025 paper both test the step list. The seven steps: 1. data cleaning (remove noise and fill missing values), 2. data integration (combine multiple sources), 3. data selection (retrieve only the task-relevant data), 4. data transformation (consolidate into forms fit for mining — normalization, aggregation), 5. data mining (apply the algorithms — the essential step), 6. pattern evaluation (identify truly interesting patterns by interestingness measures — support, confidence, lift, novelty), 7. knowledge presentation (visualization and reporting to the user).",
              "A worked end-to-end trace makes the steps concrete. Churn analysis at a telecom: clean the CRM extract (fill missing usage values, drop duplicates); integrate billing and complaint systems keyed by customer id; select customers with 24 months of history; transform (normalize usage, aggregate monthly, discretize recharge values into labels); mine (build a decision tree predicting churn); evaluate (the rule 'complaints > 3 AND last recharge < 100' has support 4%, confidence 78%, lift 3.1 — interesting; 'all customers have a phone number' is trivial and discarded); present (a dashboard of churn segments with the top rules). The trace shows why evaluation exists: mining returns hundreds of rules and only a few are useful.",
              "The process is iterative, not linear: a disappointing evaluation sends the analyst back to selection or transformation (different attributes, different granularity), and presentation usually triggers new questions — which is why the KDP is drawn as a loop over steps 1-7 with feedback. The exam answer should say this explicitly: mining is the core but never more than one of seven steps, and the surrounding steps decide whether its output is usable. Skipping evaluation is how trivial patterns ('customers breathe oxygen') reach decision makers.",
              "The exam angle: the June 2025 paper asked this twice — Q1a ('describe the steps involved in data mining when viewed as a process of knowledge discovery') and Q3b ('describe knowledge discovery process in detail') — making it the single most-repeated question of the paper. Write all seven steps in order, attach the telecom trace, and close with the iteration sentence.",
            ],
            bullets: [
              "Seven steps: cleaning, integration, selection, transformation, mining, evaluation, presentation.",
              "Data mining is step 5 — the core step, not the whole process.",
              "Selection retrieves task-relevant data; transformation makes it minable.",
              "Pattern evaluation filters by interestingness: support, confidence, lift, novelty.",
              "Worked trace: telecom churn from CRM extract to dashboard of top rules.",
              "KDP is a loop: evaluation failures send you back to selection or transformation.",
            ],
            diagram: {
              kind: "cycle",
              title: "KDP as an iterative loop",
              caption:
                "Each pass either lands usable knowledge or sends you back to selection and transformation with sharper questions.",
              steps: [
                { label: "Clean + integrate", note: "fix noise, merge sources" },
                { label: "Select + transform", note: "task-relevant, minable form" },
                { label: "Mine", note: "apply the algorithm" },
                { label: "Evaluate", note: "interestingness: support, confidence, lift" },
                { label: "Present", note: "visualization and report" },
              ],
            },
            table: {
              caption: "The seven KDP steps with the churn worked trace.",
              headers: ["Step", "Action", "Churn example"],
              rows: [
                ["1. Cleaning", "fill gaps, fix noise", "fill missing usage, drop duplicates"],
                ["2. Integration", "merge sources", "CRM + billing + complaints keyed by id"],
                ["3. Selection", "task-relevant rows", "customers with 24-month history"],
                ["4. Transformation", "minable form", "normalize usage, discretize recharge"],
                ["5. Mining", "apply algorithm", "decision tree predicting churn"],
                ["6. Evaluation", "filter patterns", "keep lift 3.1 rule, drop trivial ones"],
                ["7. Presentation", "report to user", "dashboard of churn segments"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked twice in Jun 2025",
              body: "The June 2025 paper carried KDP twice: Q1a 'describe the steps involved in data mining when viewed as a process of knowledge discovery' and Q3b 'describe knowledge discovery process in detail'. Learn the seven steps as one ordered list with the telecom trace — it answers both phrasings and is the safest 7 marks in the paper.",
            },
            keyTerms: [
              { term: "KDP / KDD", definition: "The full knowledge discovery process — mining is its fifth of seven steps." },
              { term: "Data selection", definition: "Retrieving only task-relevant data from the integrated store." },
              { term: "Pattern evaluation", definition: "Filtering mined patterns by interestingness measures and domain judgment." },
              { term: "Knowledge presentation", definition: "Communicating discovered knowledge through visualization and reports." },
              { term: "Interestingness", definition: "Support, confidence, lift, novelty, actionability — the criteria separating insight from noise." },
            ],
            examQuestions: [
              {
                q: "Describe the steps involved in data mining when viewed as a process of knowledge discovery.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "1 Cleaning: remove noise, fill missing values",
                  "2 Integration: combine multiple sources",
                  "3 Selection: retrieve task-relevant data",
                  "4 Transformation: normalize, aggregate into minable form",
                  "5 Mining: apply the algorithm — the essential step",
                  "6 Pattern evaluation: interestingness measures (support, confidence, lift)",
                  "7 Knowledge presentation: visualization and reporting; loop back on weak results",
                ],
              },
              {
                q: "Describe the knowledge discovery process in detail, illustrating each step with a churn-analysis example.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "All seven steps in order (see 1a list)",
                  "Churn trace: clean CRM -> integrate billing -> select 24-month customers",
                  "Transform: normalize usage, discretize recharge amounts",
                  "Mine: decision tree -> rules like complaints > 3 AND recharge < 100",
                  "Evaluate: support 4%, confidence 78%, lift 3.1 -> keep; trivial rules dropped",
                  "Present: dashboard; iterate back to selection when evaluation disappoints",
                ],
              },
              {
                q: "Why is pattern evaluation a necessary KDP step even when the mining algorithm is correct?",
                marks: 7,
                outline: [
                  "Algorithms return hundreds of patterns, most trivial or spurious",
                  "Statistical measures (support, confidence, lift) separate signal from noise",
                  "Domain judgment adds novelty and actionability that no formula captures",
                  "Without it, obvious facts and coincidences reach decision makers as 'knowledge'",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Applications and challenges of data mining",
            body: [
              "Applications span every industry that stores data. Market basket analysis and recommendation (retail: co-purchased products drive shelf layout and online suggestions). Fraud and intrusion detection (banking and telecom: transactions that deviate from a customer's model). Customer relationship management: churn prediction, segmentation, targeted campaigns. Credit scoring (loans approved or priced by mined risk models). Bioinformatics and medicine (gene expression patterns, diagnosis support). Web mining, spatial and text mining — Unit V's own topics — and education (identifying at-risk students). The common shape: a large historical dataset, a decision that repeats often, and measurable value from a small accuracy gain.",
              "The challenges are the field's honest checklist. Mining methodology: heterogeneous, distributed and streaming data; complex object types; mining at multiple levels of abstraction. User interaction: expressing queries in mining languages, presenting patterns meaningfully, incorporating background knowledge. Performance: scalability to terabytes, parallel and incremental algorithms, real-time response on streams. Data diversity: handling multimedia, web, spatial and temporal sources together. Privacy and social issues: mined personal profiles, re-identification, misuse of sensitive knowledge — serious enough that Unit V devotes sections to security, privacy and ethics.",
              "Each application also illustrates a challenge, which is the mark-earning pairing. Recommendation illustrates scale (millions of users x products), fraud detection illustrates class imbalance and drift (fraudsters adapt), credit scoring illustrates the privacy/ethics challenge (discriminatory outcomes from biased history), and churn prediction illustrates user interaction (business users need segment-level explanations, not coefficient dumps). A strong answer names application and challenge in one sentence each rather than as two unrelated lists.",
              "The exam angle: 'discuss applications and challenges of data mining' — give five applications across industries, five challenges under the standard headings (methodology, user interaction, performance, data diversity, privacy), and pair at least two of them. The examiner's model answer almost always closes with the privacy line, because it sets up Unit V.",
            ],
            bullets: [
              "Applications: basket analysis, fraud detection, churn/CRM, credit scoring, bioinformatics, education.",
              "Common shape: large history + repeated decision + measurable value from accuracy.",
              "Challenge — methodology: heterogeneous, distributed, streaming, multi-level data.",
              "Challenge — user interaction: mining query languages, pattern presentation, background knowledge.",
              "Challenge — performance: scalability, parallelism, incremental and real-time mining.",
              "Challenge — data diversity: multimedia, web, spatial, temporal together.",
              "Challenge — privacy and society: profiling, re-identification, misuse (Unit V).",
            ],
            diagram: {
              kind: "compare",
              title: "Where data mining earns vs where it struggles",
              caption:
                "Every application on the left maps to one challenge on the right — pair them in the answer.",
              left: {
                heading: "Applications (what it earns)",
                items: [
                  "Basket analysis -> shelf layout, recommendations",
                  "Fraud detection on transactions and calls",
                  "Churn prediction and customer segmentation",
                  "Credit scoring; diagnosis support; at-risk students",
                ],
              },
              right: {
                heading: "Challenges (what it struggles with)",
                items: [
                  "Scale: terabytes, streams, parallel algorithms",
                  "Imbalance and drift: fraudsters adapt continuously",
                  "Interaction: patterns must be explainable to users",
                  "Privacy and ethics: profiling, bias, re-identification",
                ],
              },
            },
            table: {
              caption: "Application -> its characteristic challenge.",
              headers: ["Application", "Data involved", "Main challenge it illustrates"],
              rows: [
                ["Recommendation", "user x product interactions", "scalability to millions of pairs"],
                ["Fraud detection", "transaction streams", "class imbalance + concept drift"],
                ["Credit scoring", "loan history with outcomes", "bias and ethical accountability"],
                ["Churn prediction", "usage + complaints", "explainability to business users"],
              ],
            },
            callout: {
              type: "exam",
              title: "Close with the privacy line",
              body: "Model answers to 'applications and challenges' end on privacy — profiling, re-identification and misuse — because it is the challenge with its own syllabus unit (V). One closing sentence makes the answer look complete to the examiner.",
            },
            keyTerms: [
              { term: "Market basket analysis", definition: "Mining co-purchase patterns to drive layout and recommendation." },
              { term: "Churn prediction", definition: "Classifying customers likely to leave, from usage and complaint history." },
              { term: "Class imbalance", definition: "Rare positive class (fraud, default) that naive models ignore." },
              { term: "Concept drift", definition: "The target relationship shifts over time (fraudsters adapt) — models need retraining." },
              { term: "Privacy-preserving data mining", definition: "Techniques that mine useful patterns without exposing personal data." },
            ],
            examQuestions: [
              {
                q: "Discuss the applications of data mining across industries and the major challenges of the field, pairing at least two applications with their characteristic challenges.",
                marks: 7,
                outline: [
                  "Applications: basket analysis, fraud, churn/CRM, credit scoring, bioinformatics, education",
                  "Challenges: methodology (heterogeneous/distributed), user interaction, performance, data diversity, privacy",
                  "Pairing: recommendation <-> scalability",
                  "Pairing: fraud detection <-> imbalance and drift",
                  "Pairing: credit scoring <-> privacy and ethics",
                  "Close: privacy is the challenge with its own unit (V)",
                ],
              },
              {
                q: "Why is privacy the hardest data mining challenge to solve technically?",
                marks: 7,
                outline: [
                  "Useful mining and privacy pull in opposite directions — finer patterns need finer data",
                  "Re-identification defeats naive anonymization (linkage attacks)",
                  "No single mechanism (k-anonymity, differential privacy) fits all analyses",
                  "Governance, consent and law lag the technology",
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
      title: "Mining Association Rules in Large Databases",
      summary:
        "Unit III finds what goes together: the market-basket model with support and confidence, single-dimensional boolean rules via the Apriori algorithm and its candidate generation, why strong rules can still be negatively correlated (lift), FP-Growth's tree-based alternative, multi-level association rules, mining rules from time series, and the latest trends in association rule mining.",
      chapter: {
        number: "03",
        title: "Finding What Goes Together",
        intro:
          "Unit III covers association rule mining and its support/confidence metrics, single-dimensional boolean rules mined by Apriori with candidate generation and pruning, misleading strong rules and the lift/interest measure, FP-Growth and its FP-tree, multi-level association rules over concept hierarchies, time-series mining of association rules, and the latest trends in the field.",
        inOneBreath:
          "Support counts the transaction fraction containing X and Y; confidence is support(X union Y)/support(X); Apriori exploits the downward-closure property (subsets of frequent itemsets are frequent) to generate and prune candidates level by level; confidence alone misleads — a 67% rule can be negatively correlated when lift = confidence/P(Y) < 1; FP-Growth builds a compressed prefix tree from two scans and mines conditional pattern bases with no candidate generation; multi-level rules use concept hierarchies with reduced support at lower levels; sequential rules add a time dimension.",
        sections: [
          {
            number: "3.1",
            title: "Association rule mining — support and confidence",
            body: [
              "Association rule mining discovers if-then relationships among items in transaction data: in a market basket, X -> Y means customers who buy itemset X tend to buy itemset Y. Two measures quantify a rule. Support s(X -> Y) is the fraction of transactions containing both X and Y — P(X ∪ Y); it measures usefulness (how often the pattern exists). Confidence c(X -> Y) = support(X ∪ Y)/support(X) = P(Y | X); it measures certainty (how often Y follows X). An itemset is frequent if its support exceeds minsup; a rule is strong if its confidence exceeds minconf. Mining = find all frequent itemsets, then generate strong rules from them.",
              "A worked basket database of five transactions — T1 {milk, bread}, T2 {milk, bread, butter}, T3 {bread, butter}, T4 {milk, butter}, T5 {bread} — with minsup = 40% (2 transactions) and minconf = 60%. Item supports: milk 3/5, bread 4/5, butter 3/5. Pair supports: {milk, bread} 2/5 = 40% (frequent), {milk, butter} 2/5 (frequent), {bread, butter} 2/5 (frequent). Rule milk -> bread: confidence 2/3 = 66.7% — strong. Rule bread -> milk: 2/4 = 50% — below minconf, discarded. Rule butter -> milk: 2/3 = 66.7% — strong. The same itemset generates different rules in each direction, which is why rule generation is a separate step from itemset mining.",
              "The two-threshold design answers a question students often miss: why isn't confidence alone enough? Because a rule can have high confidence yet apply to almost nothing — confidence 100% on a pattern occurring in 0.001% of transactions is useless to a supermarket. Support filters for relevance; confidence filters for reliability. (And as section 3.3 shows, even both together can mislead about correlation — lift completes the picture.) Typical exam numbers sit on round fractions precisely so the arithmetic is checkable.",
              "The exam angle: 'define association rule mining; define support and confidence; compute them for a given rule' — write both formulas, work them on the five-transaction database, and state the two-step process (frequent itemsets first, rules second). Keep this database memorized: Apriori's candidate trace in the next section reuses it exactly.",
            ],
            bullets: [
              "Rule X -> Y: X and Y are itemsets; X and Y share no items.",
              "Support s(X -> Y) = P(X ∪ Y) — usefulness; frequency of the whole pattern.",
              "Confidence c(X -> Y) = support(X ∪ Y)/support(X) = P(Y | X) — reliability.",
              "Frequent itemset: support >= minsup. Strong rule: confidence >= minconf.",
              "Worked: milk -> bread has support 2/5 = 40%, confidence 2/3 = 66.7%.",
              "Confidence alone fails: 100% confidence on 0.001% support is useless.",
              "Mining is two steps: find all frequent itemsets, then generate strong rules.",
            ],
            diagram: {
              kind: "flow",
              title: "From transactions to strong rules",
              caption:
                "Two thresholds in sequence: minsup selects patterns worth having, minconf selects rules worth trusting.",
              steps: [
                { label: "Transactions", note: "the basket database (5 rows here)" },
                { label: "Frequent itemsets", note: "all itemsets with support >= minsup" },
                { label: "Candidate rules", note: "every X -> Y split of each itemset" },
                { label: "Strong rules", note: "keep confidence >= minconf" },
                { label: "Check lift", note: "does the rule beat independence? (3.3)" },
              ],
            },
            table: {
              caption: "The worked basket database (reused by Apriori in 3.2).",
              headers: ["TID", "Items bought"],
              rows: [
                ["T1", "milk, bread"],
                ["T2", "milk, bread, butter"],
                ["T3", "bread, butter"],
                ["T4", "milk, butter"],
                ["T5", "bread"],
              ],
            },
            callout: {
              type: "tip",
              title: "State the thresholds before computing",
              body: "In every numerical, write minsup and minconf first, then compute. Half the lost marks in association questions come from arithmetic on unstated thresholds — the examiner cannot tell which transactions you counted. Also compute both directions of a rule (milk -> bread and bread -> milk differ: 66.7% vs 50%).",
            },
            keyTerms: [
              { term: "Support", definition: "Fraction of transactions containing both X and Y — P(X ∪ Y)." },
              { term: "Confidence", definition: "Conditional probability P(Y | X) = support(X ∪ Y)/support(X)." },
              { term: "Frequent itemset", definition: "An itemset whose support meets minsup." },
              { term: "Strong rule", definition: "A rule whose confidence meets minconf (built from a frequent itemset)." },
              { term: "Market basket model", definition: "Transactions as item sets; association mining's home problem." },
            ],
            examQuestions: [
              {
                q: "Define association rule mining. Define support and confidence with formulas, and compute both for milk -> bread and bread -> milk on the database T1 {milk,bread}, T2 {milk,bread,butter}, T3 {bread,butter}, T4 {milk,butter}, T5 {bread}.",
                marks: 7,
                outline: [
                  "Mining: discover if-then item relationships in transaction data",
                  "Support = P(X ∪ Y); confidence = P(Y | X) = support(X ∪ Y)/support(X)",
                  "milk in 3 transactions, bread in 4, both in 2",
                  "milk -> bread: support 2/5 = 40%, confidence 2/3 = 66.7%",
                  "bread -> milk: same support, confidence 2/4 = 50%",
                  "Same itemset, different rules per direction",
                ],
              },
              {
                q: "Why does association mining need a support threshold in addition to confidence?",
                marks: 7,
                outline: [
                  "Confidence measures certainty only within the rule's scope",
                  "A rare pattern can have 100% confidence on trivially few transactions",
                  "Support guarantees the pattern occurs often enough to matter to the business",
                  "Both thresholds define 'strong' — support for usefulness, confidence for reliability",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "The Apriori algorithm — candidate generation and the Apriori property",
            body: [
              "Apriori mines all frequent itemsets by level-wise search, exploiting one insight — the Apriori property: all non-empty subsets of a frequent itemset must also be frequent. Its contrapositive drives the pruning: if any subset of a candidate is infrequent, the candidate itself is infrequent and can be discarded before counting. The algorithm: scan the database to find frequent 1-itemsets (L1); join Lk−1 with itself to generate candidate k-itemsets Ck; prune every candidate having an infrequent (k−1)-subset; scan the database to count candidates and keep those meeting minsup as Lk; repeat until Lk is empty.",
              "The worked trace on the five-transaction database of 3.1 (minsup = 2): C1 = {milk: 3, bread: 4, butter: 3} -> L1 = {milk, bread, butter}. Join L1 with itself: C2 = {milk, bread}, {milk, butter}, {bread, butter}; no pruning needed at k = 2 (each candidate's 1-subsets are all in L1). Counting: all three have support 2 -> L2. Join L2 with itself: {milk, bread} + {milk, butter} -> C3 = {milk, bread, butter}; prune: its subsets {milk, bread} and {milk, butter} are frequent, so it survives pruning — but counting finds support 1 (only T2) -> infrequent, L3 = empty, stop. Frequent itemsets: the three pairs; rules follow as in 3.1. The pruning step saved nothing here but saves everything on large datasets — candidates with any infrequent subset never get counted.",
              "The June 2025 paper asked for the property's proof, which is one line of set logic: if S is frequent, support(S) >= minsup; for any non-empty subset A ⊆ S, every transaction containing S also contains A, so support(A) >= support(S) >= minsup — hence A is frequent. This anti-monotone (downward-closure) property is what makes level-wise search viable: without it, finding all frequent itemsets in an item space of size 2^d would require counting every possible itemset.",
              "The exam angle: 'explain Apriori with a worked example; state and prove the Apriori property' — the candidate table (C1/L1, C2/L2, C3) is the expected artifact, and the proof is the set-containment line. A frequent slip is forgetting the prune step between join and count, or claiming C3 was 'pruned' when it was actually counted and found infrequent — pruning removes candidates by subset inspection; counting removes them by support. Distinguish the two in writing.",
            ],
            bullets: [
              "Apriori property: every non-empty subset of a frequent itemset is frequent.",
              "Anti-monotone: adding items never increases support — infrequent subsets kill candidates.",
              "Loop: join Lk-1 with itself -> Ck -> prune by subsets -> count -> Lk.",
              "Worked trace: L1 = {milk, bread, butter}; L2 = all three pairs; C3 counted at support 1 -> stop.",
              "Prune (subset inspection) and count (support check) are different eliminations — say so.",
              "Proof: support(A) >= support(S) for A ⊆ S, because every S-transaction contains A.",
            ],
            diagram: {
              kind: "pipeline",
              title: "One Apriori level, start to finish",
              caption:
                "Join, prune, count, keep — repeat until a level comes back empty.",
              stages: [
                { label: "Scan -> L1", note: "count single items, keep support >= minsup" },
                { label: "Join Lk-1 * Lk-1", note: "generate candidate k-itemsets" },
                { label: "Prune", note: "drop candidates with any infrequent subset" },
                { label: "Count", note: "scan database for surviving candidates" },
                { label: "Lk", note: "keep those meeting minsup; repeat or stop" },
              ],
            },
            table: {
              caption: "Apriori candidate trace (minsup = 2 of 5 transactions).",
              headers: ["Level", "Candidates (support)", "Frequent set Lk"],
              rows: [
                ["1", "milk (3), bread (4), butter (3)", "L1 = {milk, bread, butter}"],
                ["2", "{milk,bread} (2), {milk,butter} (2), {bread,butter} (2)", "L2 = all three pairs"],
                ["3", "{milk,bread,butter} (1) — passed pruning, failed counting", "L3 = empty -> stop"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025 — prove the property",
              body: "June 2025 Q4b: 'Apriori algorithm makes use of prior knowledge of subset support properties. Prove that all non-empty subsets of a frequent itemset must also be frequent.' The full-mark proof is one line — support(A) >= support(S) >= minsup for every non-empty A ⊆ S — stated, justified ('every transaction containing S contains A'), and named as the downward-closure/anti-monotone property.",
            },
            keyTerms: [
              { term: "Apriori algorithm", definition: "Level-wise mining of frequent itemsets by candidate generation, pruning and counting." },
              { term: "Apriori (downward-closure) property", definition: "All non-empty subsets of a frequent itemset are frequent; the basis of candidate pruning." },
              { term: "Anti-monotonicity", definition: "Support never increases when items are added to an itemset." },
              { term: "Candidate set Ck", definition: "The k-itemsets generated by joining Lk-1 with itself and pruned by subset inspection." },
              { term: "Level-wise search", definition: "Mining frequent 1-itemsets, then 2, then 3, ... until a level is empty." },
            ],
            examQuestions: [
              {
                q: "Apriori algorithm makes use of prior knowledge of subset support properties. Prove that all non-empty subsets of a frequent itemset must also be frequent.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Let S be frequent: support(S) >= minsup",
                  "Let A be any non-empty subset of S",
                  "Every transaction containing S necessarily contains A",
                  "Hence support(A) >= support(S) >= minsup",
                  "Therefore A is frequent — the Apriori (downward-closure) property",
                  "Corollary: any candidate with an infrequent subset is infrequent — the pruning rule",
                ],
              },
              {
                q: "Run Apriori on the database T1 {milk,bread}, T2 {milk,bread,butter}, T3 {bread,butter}, T4 {milk,butter}, T5 {bread} with minsup = 2, showing candidate generation, pruning and counting at each level.",
                marks: 7,
                outline: [
                  "C1: milk 3, bread 4, butter 3 -> L1 = {milk, bread, butter}",
                  "C2 = join of L1: three pairs, no infrequent subsets to prune",
                  "Counting: all pairs have support 2 -> L2 = all three pairs",
                  "C3 = {milk,bread,butter}; subsets frequent -> survives pruning",
                  "Counting: support 1 (only T2) -> infrequent; L3 empty -> terminate",
                  "Frequent itemsets: the three pairs; strong rules per minconf",
                ],
              },
              {
                q: "Distinguish the prune step from the count step in Apriori. Why does pruning never eliminate a genuinely frequent candidate?",
                marks: 7,
                outline: [
                  "Prune: subset inspection — removes candidates having any infrequent (k-1)-subset",
                  "Count: database scan — removes candidates whose own support misses minsup",
                  "By the Apriori property, an infrequent subset implies the candidate is infrequent",
                  "So pruning removes only provably infrequent candidates — it is lossless",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Strong rules can mislead — negative correlation and lift",
            body: [
              "Support and confidence do not measure correlation. A rule can clear both thresholds and still be useless — even harmful — because X and Y are negatively correlated: buying X makes Y less likely than it was by chance. The measure that catches this is lift (interest): lift(X -> Y) = confidence(X -> Y) / P(Y) = support(X ∪ Y) / (support(X) × support(Y)). Lift 1 means independence; lift > 1 positive correlation; lift < 1 negative correlation — the rule's antecedent actively decreases the consequent's likelihood.",
              "The worked example is the June 2025 question. In 10,000 transactions, 6,000 contain computer games, 7,500 contain videos, and 4,000 contain both. Confidence(games -> videos) = 4000/6000 = 66.7% — comfortably above a 50% minconf, so the rule looks strong. But P(videos) = 7500/10000 = 75%, so lift = 0.667/0.75 = 0.89 < 1: buying computer games makes buying videos less likely than the customer baseline. Equivalently, the expected joint probability under independence is P(games) × P(videos) = 0.60 × 0.75 = 0.45, but the actual joint is 0.40 — below expectation, the signature of negative correlation. A shop acting on the 'strong' rule by bundling games with videos would be pairing products that repel each other's buyers.",
              "Why does this happen? Confidence measures concentration within the antecedent's group, not against the population baseline. Games buyers may indeed often buy videos — 2 in 3 — but non-games-buyers buy videos even more often (3500/4000 = 87.5%), so the comparison group is more video-friendly than the rule's group. Confidence alone cannot see the baseline; lift compares the two groups explicitly. The contingency numbers: 4000 both, 2000 games only, 3500 videos only, 500 neither.",
              "The exam angle: 'give an example to show that items in a strong association rule may actually be negatively correlated' (June 2025 Q4a) — construct the 10,000/6000/7500/4000 example, compute confidence 66.7%, then lift 0.89 < 1, and close with the explanation sentence about baselines. A warning callout earns itself here: always compute lift before acting on a rule.",
            ],
            bullets: [
              "Lift = confidence / P(Y) = support(X ∪ Y) / (support(X) × support(Y)).",
              "Lift 1 = independent; > 1 positive correlation; < 1 negative correlation.",
              "Worked: conf(games -> videos) = 4000/6000 = 66.7% (looks strong),",
              "but P(videos) = 75% -> lift = 0.89 < 1: games buyers buy videos LESS often.",
              "Expected joint 0.60 x 0.75 = 0.45 vs actual 0.40 — negative dependence.",
              "Confidence ignores the population baseline; lift compares groups explicitly.",
            ],
            diagram: {
              kind: "matrix",
              title: "Confidence vs lift — four verdicts",
              caption:
                "The dangerous quadrant is top-right: high confidence, lift below 1 — a rule that clears both thresholds yet points the wrong way.",
              axes: { x: "Confidence (low -> high)", y: "Lift (below 1 -> above 1)" },
              quadrants: [
                { label: "Genuinely useful rule", note: "high confidence, lift > 1 — act on it" },
                { label: "Positively associated but weak", note: "lift > 1, low confidence — observe, don't rely" },
                { label: "The misleading 'strong' rule", note: "high confidence, lift < 1 — the Jun 2025 trap" },
                { label: "Discard", note: "low confidence, lift < 1 — nothing to see" },
              ],
            },
            table: {
              caption: "The worked contingency (10,000 transactions).",
              headers: ["", "Videos", "No videos", "Total"],
              rows: [
                ["Games", "4000", "2000", "6000"],
                ["No games", "3500", "500", "4000"],
                ["Total", "7500", "2500", "10000"],
              ],
            },
            callout: {
              type: "warning",
              title: "Confidence above minconf is not endorsement",
              body: "The games -> videos rule passes minconf 50% at 66.7% yet is negatively correlated (lift 0.89). Before acting on any mined rule, compute lift: below 1 means the antecedent reduces the consequent's likelihood. This exact trap was June 2025 Q4a.",
            },
            keyTerms: [
              { term: "Lift (interest)", definition: "support(X ∪ Y)/(support(X)·support(Y)) — correlation of X and Y around independence 1." },
              { term: "Negative correlation", definition: "Lift < 1: buying X lowers the probability of buying Y below the baseline." },
              { term: "Contingency table", definition: "2x2 counts of X/Y co-occurrence from which confidence and lift are computed." },
              { term: "Independence baseline", definition: "P(X)·P(Y) — the joint probability expected if X and Y had no relationship." },
            ],
            examQuestions: [
              {
                q: "Give an example to show that items in a strong association rule actually may be negatively correlated.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "10,000 transactions; games in 6000, videos in 7500, both in 4000",
                  "Confidence(games -> videos) = 4000/6000 = 66.7% > minconf — 'strong'",
                  "But P(videos) = 7500/10000 = 75%",
                  "Lift = 0.667/0.75 = 0.89 < 1 — negative correlation",
                  "Equivalently: actual joint 0.40 < expected 0.60 x 0.75 = 0.45",
                  "Conclusion: confidence lacks the population baseline; lift exposes the truth",
                ],
              },
              {
                q: "Define lift and interpret the three ranges of its value for an association rule.",
                marks: 7,
                outline: [
                  "lift = support(X ∪ Y)/(support(X) x support(Y)) = confidence/P(Y)",
                  "= 1: X and Y independent — the rule carries no information",
                  "> 1: positive correlation — X raises Y's likelihood",
                  "< 1: negative correlation — X lowers Y's likelihood despite high confidence",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "FP-Growth algorithm",
            body: [
              "FP-Growth (frequent-pattern growth) mines all frequent itemsets without generating candidates, fixing Apriori's two costs: candidate explosion at level 3+ and one database scan per level. The method: scan once to count item frequencies and drop infrequent items; scan again to build the FP-tree — a prefix tree where each transaction's items are inserted in descending frequency order, shared prefixes stored once, and a header table linking each item to its occurrences. Mining then works per item from the least frequent upward: build its conditional pattern base (the prefix paths of its occurrences), compress into a conditional FP-tree, and recurse.",
              "The worked trace on the 3.1 database (minsup = 2): frequencies bread 4, milk 3, butter 3. Reordering each transaction by descending frequency: T1 {bread, milk}, T2 {bread, milk, butter}, T3 {bread, butter}, T4 {milk, butter}, T5 {bread}. The tree grows as: the bread->milk branch shared by T1 and T2 (bread count 2, milk count 2), with butter(1) hanging below milk from T2; a second branch bread->butter from T3; a third branch milk->butter from T4; and the single node bread(1) from T5 — the header table links every occurrence of each item. Mining butter (frequency 3): its conditional pattern base is {(bread, milk): 1, (bread): 1, (milk): 1}; the conditional FP-tree keeps {butter, bread}: 2 and {butter, milk}: 2, while {bread, milk, butter} (support 1 < 2) dies — so butter generates exactly {butter, bread} and {butter, milk}, matching Apriori's L2. Mining milk: base {bread: 2} -> {milk, bread}: 2. The result is identical to Apriori's, obtained from the tree alone.",
              "The comparison is the exam's favourite contrast. Apriori: many scans (one per level), candidate generation with pruning, simple to implement, works well when itemsets are short. FP-Growth: exactly two scans, no candidates, a compressed in-memory tree, recursion over conditional trees — much faster on large, dense datasets, but memory-hungry when the tree does not compress (few shared prefixes). The chosen item order (frequency-descending) maximizes prefix sharing, which is what makes the tree small.",
              "The exam angle: 'explain FP-Growth; construct the FP-tree and mine it; compare with Apriori' — draw the tree with labeled counts and header links, list the conditional pattern bases, and finish with the two-scan/no-candidate comparison. The common slip is forgetting to order items by descending frequency before insertion — unordered insertion destroys prefix sharing and the tree degenerates.",
            ],
            bullets: [
              "Two database scans total: one to rank items, one to build the FP-tree.",
              "FP-tree: prefix tree, items inserted in descending frequency order, shared prefixes stored once.",
              "Header table links every occurrence of each item for traversal.",
              "Mine per item: conditional pattern base -> conditional FP-tree -> recurse.",
              "Worked: butter's base {(bread,milk):1, bread:1, milk:1} -> sets {butter,bread}, {butter,milk}.",
              "No candidate generation ever — Apriori's Ck explosion disappears.",
              "Cost: memory for the tree; degrades when transactions share few prefixes.",
            ],
            diagram: {
              kind: "pipeline",
              title: "FP-Growth end to end",
              caption:
                "Scan, order, grow, recurse — candidate-free mining of every frequent itemset.",
              stages: [
                { label: "Scan 1", note: "item frequencies; drop infrequent items" },
                { label: "Order", note: "descending frequency per transaction" },
                { label: "Grow FP-tree", note: "insert transactions; share prefixes" },
                { label: "Conditional bases", note: "per item, from least frequent up" },
                { label: "Recurse", note: "conditional FP-trees -> frequent itemsets" },
              ],
            },
            table: {
              caption: "Mining butter: conditional pattern base to frequent sets.",
              headers: ["Item", "Conditional pattern base", "Conditional FP-tree", "Generated frequent sets"],
              rows: [
                ["butter (3)", "{bread,milk}:1, bread:1, milk:1", "bread:2, milk:2", "{butter,bread}, {butter,milk}"],
                ["milk (3)", "bread:2", "bread:2", "{milk,bread}"],
                ["bread (4)", "(none — most frequent, empty base)", "empty", "no longer patterns above bread"],
              ],
            },
            callout: {
              type: "tip",
              title: "Ordering is the whole trick",
              body: "Items must be inserted in descending frequency order — that is what makes prefixes shared and the tree compact. If asked why FP-Growth compresses data, the answer is the ordering rule plus prefix sharing, not the tree structure alone.",
            },
            keyTerms: [
              { term: "FP-tree", definition: "A prefix tree of transactions with items in descending frequency order; shared prefixes stored once." },
              { term: "Header table", definition: "Per-item list of node links into the tree, enabling traversal of every occurrence." },
              { term: "Conditional pattern base", definition: "The set of prefix paths leading to an item's occurrences, with counts." },
              { term: "Conditional FP-tree", definition: "The FP-tree compressed from one item's conditional pattern base." },
              { term: "Frequent-pattern growth", definition: "Mining by growing longer itemsets from shorter ones inside the tree — no candidates." },
            ],
            examQuestions: [
              {
                q: "Explain the FP-Growth algorithm. Construct the FP-tree for T1 {milk,bread}, T2 {milk,bread,butter}, T3 {bread,butter}, T4 {milk,butter}, T5 {bread} (minsup = 2) and mine it to obtain all frequent itemsets.",
                marks: 7,
                outline: [
                  "Scan 1: bread 4, milk 3, butter 3; order transactions by descending frequency",
                  "Insert: {bread,milk}, {bread,milk,butter}, {bread,butter}, {milk,butter}, {bread}",
                  "Tree: bread->milk (shared by T1,T2), bread->butter, milk->butter; header links per item",
                  "Mine butter: base {(bread,milk):1, bread:1, milk:1} -> {butter,bread}, {butter,milk}",
                  "Mine milk: base {bread:2} -> {milk,bread}",
                  "Result matches Apriori's L2 — obtained with zero candidate generation and two scans",
                ],
              },
              {
                q: "Compare Apriori and FP-Growth — scans, candidates, memory and dataset fit.",
                marks: 7,
                outline: [
                  "Apriori: one scan per level; generates and prunes candidates",
                  "FP-Growth: exactly two scans; no candidates; recursive conditional trees",
                  "Apriori memory-light, FP-Growth memory-hungry (tree in RAM)",
                  "FP-Growth faster on large dense data; Apriori fine when itemsets are short",
                  "Both return the same frequent itemsets — the difference is efficiency",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Multi-level association rules",
            body: [
              "Items live in concept hierarchies — milk -> 2% milk -> Dairyland 2% milk, or food -> bread -> wheat bread — and interesting patterns exist at several levels: 'customers buy dairy' (too general), 'customers buy 2% milk with wheat bread' (actionable), 'customers buy Dairyland 2% milk with Wonder wheat bread' (too specific to stock). Multi-level association mining runs the Apriori/FP machinery at each level of the hierarchy and passes the results down, giving rules at whatever abstraction the decision needs.",
              "Support is level-sensitive: fewer transactions contain a low-level item, so a uniform minsup across levels misses everything specific. Three strategies fix it. Uniform support: one threshold everywhere — simple, but either the low levels drown (too-high threshold) or the top level drowns in trivial rules (too-low). Reduced support: minsup shrinks level by level, e.g. 5% at 'milk', 3% at '2% milk' — the standard choice, with the rule that an item at level i can only be frequent if its ancestor at level i−1 was (level-by-level independent processing). Group-based support: thresholds set per branch by business importance — expensive electronics get a lower support than cheap groceries because each sale matters more.",
              "Redundancy filtering is the second half of the method. If 'bread -> milk' (support 8%, confidence 70%) is found and 'bread -> 2% milk' turns out to have nearly the same support and confidence, the lower rule is redundant — it adds nothing to the ancestor and should be filtered (an ancestor is redundant when its descendants do not significantly improve support or confidence). The worked check: ancestor rule 'milk -> bread' with (support 15%, confidence 85%); descendant '2% milk -> bread' with (support 14%, confidence 84%) — the descendant is 1%-level different from its expectation under the ancestor, so filter it; only rules whose numbers move meaningfully from their ancestors are kept.",
              "The exam angle: 'explain multi-level association rule mining and the support strategies' — draw the item hierarchy, name the three support strategies with one line each, and work the redundancy check with actual percentages. The link to Unit II is worth a sentence: concept hierarchies built by discretization are exactly what multi-level mining climbs.",
            ],
            bullets: [
              "Mine at several levels of the item concept hierarchy, passing results downward.",
              "Uniform support: simple but misses specific rules or drowns in general ones.",
              "Reduced support: threshold shrinks per level (5% -> 3% -> 1%); ancestors gate descendants.",
              "Group-based support: per-branch thresholds by business priority (electronics vs groceries).",
              "Redundancy filtering: drop descendants whose support/confidence barely differ from ancestors.",
              "Worked: 'bread -> milk' (15%, 85%) makes 'bread -> 2% milk' (14%, 84%) redundant.",
              "Hierarchies come from Unit II's discretization and concept hierarchy generation.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The item concept hierarchy for multi-level mining",
              caption:
                "Support shrinks as you descend — each level mines with the threshold its density can afford.",
              tiers: [
                { label: "Food (level 1)", note: "uniform support, e.g. 5% — very general rules" },
                { label: "Milk, Bread (level 2)", note: "reduced support, e.g. 3%" },
                { label: "2% milk, Wheat bread (level 3)", note: "reduced support, e.g. 1% — actionable rules" },
                { label: "Brand names (level 4)", note: "group-based support; usually too specific" },
              ],
            },
            table: {
              caption: "Support strategies for multi-level mining.",
              headers: ["Strategy", "Threshold rule", "Strength", "Weakness"],
              rows: [
                ["Uniform support", "same minsup at all levels", "simple", "one level's rules drown"],
                ["Reduced support", "minsup shrinks level by level", "standard; keeps specific rules", "many low-level itemsets"],
                ["Group-based support", "per-branch thresholds by importance", "matches business value", "costly to tune"],
              ],
            },
            callout: {
              type: "warning",
              title: "Lower levels need lower support",
              body: "A low-level item ('Dairyland 2% milk') appears in far fewer transactions than its ancestor ('milk'). With a uniform minsup, every specific rule is discarded before it is ever seen. State the reduced-support strategy — and the ancestor-gating rule — whenever multi-level mining is asked.",
            },
            keyTerms: [
              { term: "Multi-level association rules", definition: "Rules mined at multiple levels of an item concept hierarchy." },
              { term: "Reduced support", definition: "Lower minsup at lower levels so sparse specific items can still be frequent." },
              { term: "Group-based support", definition: "Thresholds assigned per hierarchy branch according to business importance." },
              { term: "Redundant rule", definition: "A descendant rule whose support/confidence add nothing over its ancestor — filtered out." },
              { term: "Level-by-level independent", definition: "An item is processed at level i only if its ancestor was frequent at level i-1." },
            ],
            examQuestions: [
              {
                q: "Explain multi-level association rule mining. Describe the uniform, reduced and group-based support strategies and the filtering of redundant rules.",
                marks: 7,
                outline: [
                  "Items form concept hierarchies; patterns exist at several abstraction levels",
                  "Uniform support: one minsup — simple, but one level always drowns",
                  "Reduced support: thresholds shrink per level (5% -> 3% -> 1%)",
                  "Ancestor gating: level-i item considered only if its ancestor was frequent",
                  "Group-based: per-branch thresholds by business priority",
                  "Redundancy: drop descendants not meaningfully better than ancestors",
                  "Worked check: (15%, 85%) ancestor vs (14%, 84%) descendant -> filter",
                ],
              },
              {
                q: "Why is a uniform support threshold unsuitable for multi-level mining?",
                marks: 7,
                outline: [
                  "Low-level items occur in fewer transactions by construction",
                  "A threshold tuned for the top level discards every specific rule",
                  "A threshold tuned for the bottom level floods the top with trivial rules",
                  "Reduced (or group-based) support matches each level's density",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Time-series mining of association rules",
            body: [
              "A time series is a sequence of values indexed in time order — hourly sales, daily prices, monthly call volumes — and mining it adds a dimension the market-basket model lacks: when. Two related tasks live here. Time-series analysis decomposes a series into trend (long-term movement), seasonal (regular calendar cycles), cyclic (multi-year waves) and random (irregular remainder) components. Sequential/inter-transaction association rules generalize the basket rule across time: 'customers who buy a laptop buy a laptop bag within 7 days' — the rule's items need not co-occur in one transaction, only within a time window or sequence.",
              "The worked mining pipeline: decompose (isolate trend/seasonal so patterns are not confounded — festival spikes are seasonal, not trend); discretize the numeric series into states (price -> {high, medium, low}); slide a time window across the state sequence; count sequences like 'high -> medium within 3 days' for support; filter by confidence and lift exactly as in 3.1-3.3. Worked numbers: over 200 trading days, 'price high today -> price medium within 3 days' occurs in 60 windows (support 30%) with confidence 75% and lift 1.2 — a real pattern; 'price high -> price high tomorrow' has lift 0.8 — mean reversion, the negative-correlation trap of 3.3 in temporal clothing.",
              "The four components are the exam's descriptive core: trend is the long-run direction (sales growing 4% a year), seasonality is calendar-locked (diwali spikes every November), cycles are non-calendar waves (business cycles of irregular length), random is the leftover noise — and mining should target the structured components while smoothing or modelling the random one. Sequential rules extend Apriori's machinery with a time constraint (minimum/maximum gap, window size), which is exactly what algorithms like GSP and PrefixSpan implement — name them as 'the sequential cousins of Apriori' for a completeness point.",
              "The exam angle: 'explain time-series mining of association rules; describe the components of a time series; give an inter-transaction rule example' — define the series, list the four components with examples, work one sequential rule with support/confidence/lift, and state the window constraint that distinguishes it from a plain basket rule.",
            ],
            bullets: [
              "Time series: values indexed by time; mining asks 'what follows what', not just 'what co-occurs'.",
              "Four components: trend, seasonal, cyclic, random — name one example each.",
              "Pipeline: decompose -> discretize to states -> sliding window -> count sequences -> filter.",
              "Inter-transaction rule: 'laptop -> laptop bag within 7 days' — time-bounded co-occurrence.",
              "Worked: 'high -> medium within 3 days' — support 30%, confidence 75%, lift 1.2.",
              "Lift < 1 in time series = mean reversion — the 3.3 trap returns.",
              "Sequential algorithms (GSP, PrefixSpan) = Apriori-family machinery + time constraints.",
            ],
            diagram: {
              kind: "layers",
              title: "Decomposing a sales time series",
              caption:
                "Mine the structured layers; the random remainder is noise — festival spikes belong to the seasonal layer, not the trend.",
              layers: [
                { label: "Observed series", note: "raw hourly/monthly values" },
                { label: "Trend", note: "long-run movement (+4% per year)" },
                { label: "Seasonal", note: "calendar cycles (November festival spike)" },
                { label: "Cyclic", note: "irregular multi-year waves" },
                { label: "Random", note: "irregular remainder — smooth or model it" },
              ],
            },
            table: {
              caption: "Time-series components with examples.",
              headers: ["Component", "Description", "Retail example"],
              rows: [
                ["Trend", "long-term direction of the series", "sales up 4% a year"],
                ["Seasonal", "calendar-locked repeating pattern", "diwali spike every November"],
                ["Cyclic", "long, irregular wave", "business cycle of 3-7 years"],
                ["Random", "irregular remainder", "day-to-day noise"],
              ],
            },
            callout: {
              type: "tip",
              title: "The window is the definition",
              body: "An inter-transaction rule is defined by its time constraint — 'within 7 days', 'within 3-day window'. If your answer's example has no time bound, it is a plain basket rule. Write the window explicitly and the examiner sees you know the difference.",
            },
            keyTerms: [
              { term: "Time series", definition: "A sequence of attribute values indexed by time order." },
              { term: "Sequential pattern", definition: "A frequently occurring ordered subsequence of events/states." },
              { term: "Inter-transaction rule", definition: "An association rule whose items span several transactions within a time window." },
              { term: "Sliding window", definition: "A fixed-length moving span of time within which sequences are counted." },
              { term: "Mean reversion", definition: "Lift < 1 in temporal form — a high value is followed by lower ones more than chance." },
            ],
            examQuestions: [
              {
                q: "Explain the mining of association rules from time series. Describe the four components of a time series and give one inter-transaction rule with its window.",
                marks: 7,
                outline: [
                  "Time series: values in time order; mining adds 'when' to basket rules",
                  "Trend: long-term movement (sales +4%/year)",
                  "Seasonal: calendar cycles (festival spike); cyclic: irregular waves",
                  "Random: remainder noise — smooth or model",
                  "Pipeline: decompose -> discretize -> sliding window -> count -> filter by lift",
                  "Worked rule: 'price high -> price medium within 3 days' (30%, 75%, lift 1.2)",
                  "Inter-transaction example: laptop -> laptop bag within 7 days",
                ],
              },
              {
                q: "How do sequential association rules differ from ordinary market-basket rules, and which algorithm family implements them?",
                marks: 7,
                outline: [
                  "Basket rules: items co-occur in one transaction",
                  "Sequential rules: items ordered in time within a window/gaps",
                  "Support counts ordered occurrences, not just co-presence",
                  "GSP and PrefixSpan — Apriori-family machinery plus time constraints",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Latest trends in association rule mining",
            body: [
              "The Apriori-era toolkit has grown a second generation, and the syllabus's 'latest trends' line asks for a survey of it. Performance trends: partition-based mining (split the database into disjoint chunks, mine each locally, merge — the trick is that any global frequent itemset is frequent in at least one partition), hashing (DHP hashes candidate pairs into buckets to prune early), sampling (mine a representative sample, verify on the rest), and dynamic itemset counting (DIC adds candidates at multiple points in one scan). All four attack the same cost — database scans and candidate explosion — and are standard short-note material.",
              "Expressiveness trends extend what a rule can say. Constraint-based mining pushes user constraints (contains an item, above a price, within a category) into the mining itself instead of filtering afterward. Quantitative rules mine numeric attributes ('age 30-39 AND income 50k-70k -> buys laptop'), generalizing boolean items to intervals. Correlation rules replace bare confidence with lift or chi-square — section 3.3's lesson institutionalized. Negative rules ('buying X reduces buying Y') and rare-item rules handle the items that low-support thresholds would discard; incremental maintenance updates frequent itemsets as the database grows instead of re-mining from scratch.",
              "Application trends carry the machinery to new data shapes: sequential rules over event streams (3.6), spatio-temporal rules ('customers who live in X visit mall Y on weekends'), rules over multimedia and web-usage data (Unit V), and profile-based mining where the unit of analysis is a person's history rather than a transaction. The honest framing for the exam: Apriori's level-wise skeleton survives everywhere — the trends change what counts as an item, a transaction, and an interesting pattern.",
              "The exam angle: 'write short notes on the latest trends in association rule mining' — name two performance techniques (partition, sampling/DIC), two expressiveness extensions (constraint-based, quantitative/correlation), and one application trend (sequential or spatio-temporal), each with one line of mechanism. The common slip is listing trend names with no mechanism — every mark-bearing line has a 'how'.",
            ],
            bullets: [
              "Partition-based: mine disjoint chunks locally, merge — global frequent sets appear locally.",
              "Hashing (DHP), sampling, and DIC cut scans and early-prune candidates.",
              "Constraint-based mining: user constraints (items, prices, categories) pushed into the algorithm.",
              "Quantitative rules: numeric attributes with intervals (age 30-39 AND income 50k-70k -> laptop).",
              "Correlation rules: lift/chi-square replace bare confidence (3.3 institutionalized).",
              "Negative rules, rare-item rules, incremental maintenance — handling the awkward cases.",
              "New data shapes: streams, spatio-temporal, web usage, profiles (Unit V's raw material).",
            ],
            diagram: {
              kind: "compare",
              title: "Apriori-era mining vs the trend generation",
              caption:
                "The level-wise skeleton survives; what changed is what counts as item, transaction and interestingness.",
              left: {
                heading: "Classic mining (Apriori era)",
                items: [
                  "Boolean items in one basket",
                  "minsup + minconf only",
                  "Confidence as the quality bar",
                  "Static database, full re-mining",
                ],
              },
              right: {
                heading: "Current trends",
                items: [
                  "Quantitative, sequential, spatio-temporal items",
                  "User constraints pushed into the algorithm",
                  "Lift/chi-square as the quality bar",
                  "Incremental updates on growing data",
                ],
              },
            },
            table: {
              caption: "Trends with their mechanisms.",
              headers: ["Trend", "Mechanism (the 'how')", "Gain"],
              rows: [
                ["Partition-based mining", "mine chunks locally, merge globally", "fewer full scans"],
                ["Sampling", "mine a representative sample, verify on the rest", "big-data speed"],
                ["Constraint-based mining", "constraints pushed into candidate generation", "only relevant patterns"],
                ["Quantitative rules", "interval-based items over numeric attributes", "rules from real-valued data"],
                ["Correlation rules", "lift / chi-square as the quality measure", "no misleading 'strong' rules"],
              ],
            },
            callout: {
              type: "exam",
              title: "Short-notes question, mechanism marks",
              body: "'Latest trends' is asked as short notes. Name each trend and give its mechanism in one line — 'partition: global frequent itemsets must be frequent in at least one local partition' is the level of specificity the answer key carries. Names without mechanisms score half.",
            },
            keyTerms: [
              { term: "Partition-based mining", definition: "Mining disjoint database partitions locally and merging — global frequent sets are locally frequent somewhere." },
              { term: "Constraint-based mining", definition: "Pushing user constraints into the mining algorithm rather than filtering results afterwards." },
              { term: "Quantitative association rule", definition: "A rule over intervals of numeric attributes instead of boolean items." },
              { term: "Correlation rule", definition: "A rule measured by lift or chi-square rather than confidence alone." },
              { term: "Incremental maintenance", definition: "Updating frequent itemsets as new transactions arrive instead of re-mining." },
            ],
            examQuestions: [
              {
                q: "Write short notes on the latest trends in association rule mining, giving the mechanism of each trend.",
                marks: 7,
                outline: [
                  "Partition-based: global frequent -> frequent in some partition; fewer scans",
                  "Sampling: mine a representative sample, verify against the full data",
                  "DIC: add candidates at multiple scan points",
                  "Constraint-based: user constraints pushed into candidate generation",
                  "Quantitative rules: numeric intervals as items",
                  "Correlation rules: lift/chi-square replace bare confidence",
                  "Sequential/spatio-temporal/profile mining: new transaction shapes (Unit V link)",
                ],
              },
              {
                q: "Explain the partition principle of partition-based association mining and why merging local results is safe.",
                marks: 7,
                outline: [
                  "Split the database into n disjoint partitions",
                  "Mine each partition at 2x minsup (local frequent sets, local candidate sets)",
                  "Any itemset frequent globally is frequent in at least one partition",
                  "Merge local candidates, count once on the full database to confirm",
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
      title: "Classification and Clustering",
      summary:
        "Unit IV is the algorithmic core: distance measures, the families of clustering algorithms, K-Means with its iterations and local-optimum failure, decision tree induction with entropy and pruning, Bayesian (naive Bayes) classification, other classification methods and prediction, classifier accuracy from the confusion matrix, and outlier analysis with clustering-based and semi-supervised detection.",
      chapter: {
        number: "04",
        title: "Predicting and Grouping",
        intro:
          "Unit IV covers distance measures and the types of clustering algorithms, the K-Means algorithm with worked iterations, decision tree induction with information gain and pruning, Bayesian classification, other classification methods and prediction, classifier accuracy with the confusion matrix and cross-validation, and outlier analysis from statistical to clustering-based and semi-supervised methods.",
        inOneBreath:
          "Distances quantify similarity (Euclidean, Manhattan, Minkowski, cosine) and clustering has five families (partitioning, hierarchical, density, grid, model-based); K-Means alternates assign-and-update to minimize within-cluster variation but converges only to a local optimum; decision trees split on maximum information gain (entropy) and are pruned against overfitting; naive Bayes applies Bayes' theorem with a conditional-independence assumption; accuracy alone misleads on imbalance — use precision, recall and F1 from the confusion matrix; outliers are found statistically (IQR fences), by distance, by density, or by clustering at multiple granularity levels.",
        sections: [
          {
            number: "4.1",
            title: "Distance measures",
            body: [
              "Distance quantifies dissimilarity between tuples — the quantity every clustering algorithm minimizes and many classifiers (K-NN) compare. The core family is Minkowski distance: d(x, z) = (Σ |xi − zi|^p)^(1/p). p = 2 gives Euclidean distance (straight-line, the default for continuous data); p = 1 gives Manhattan (city-block) distance, more robust to a single large coordinate difference; p → ∞ gives Chebyshev (maximum-coordinate) distance. For text and sparse vectors, cosine similarity measures the angle between vectors and ignores magnitude: cos(θ) = (x·z)/(‖x‖‖z‖). For categorical attributes, Hamming or matching distance counts mismatched categories.",
              "The worked point pair A(2, 3), B(5, 7): Euclidean = sqrt((5−2)² + (7−3)²) = sqrt(9 + 16) = 5; Manhattan = |5−2| + |7−3| = 3 + 4 = 7; Chebyshev = max(3, 4) = 4. All three are correct answers to 'how far apart' — they disagree because they weight differences differently, and the algorithm's assumption decides which is right. A document pair with word-count vectors (2, 1, 0) and (8, 4, 0) has Euclidean distance sqrt(36+9+0) ≈ 6.7 (they look far apart) but cosine similarity 1.0 (same direction — same topic, longer document), which is exactly why text mining uses cosine and clustering on scaled numeric data uses Euclidean.",
              "The discipline that precedes every distance computation is normalization: attributes must be on comparable scales, or the widest-range attribute dominates. Income ranging 0–10,00,000 versus age 0–100 makes age invisible in Euclidean distance — the min-max/z-score transformation of Unit II (section 2.3) is mandatory preprocessing, and stating that sentence in any distance/clustering answer earns a mark. Mixed-type data (numeric + categorical) uses Gower's distance, which averages per-attribute distances appropriately.",
              "The exam angle: 'explain the distance measures with formulas and compute for two points' — write Minkowski with p = 1, 2, ∞ named, compute the three distances for A(2,3), B(5,7) (7, 5, 4), add cosine for text with the vector example, and close with the normalization discipline. The examiner checks the three numbers first.",
            ],
            bullets: [
              "Minkowski: d = (Σ|xi − zi|^p)^(1/p); p = 1 Manhattan, p = 2 Euclidean, p -> ∞ Chebyshev.",
              "Worked pair A(2,3), B(5,7): Manhattan 7, Euclidean 5, Chebyshev 4.",
              "Cosine similarity: angle between vectors, magnitude-blind — the text-mining choice.",
              "Worked vectors (2,1,0) vs (8,4,0): Euclidean ~6.7 but cosine 1.0 — same topic, longer doc.",
              "Categorical data: Hamming/matching distance counts mismatches.",
              "Mixed types: Gower's distance averages per-attribute measures.",
              "Normalize first — the widest-range attribute otherwise dominates every distance.",
            ],
            diagram: {
              kind: "fork",
              title: "Which distance measure fits the data?",
              caption: "The measure follows the data type and what magnitude should mean.",
              start: "Two tuples to compare",
              branches: [
                { label: "Continuous, scaled attributes", outcome: "Euclidean (default) or Manhattan if outliers worry you", good: true },
                { label: "Sparse text vectors", outcome: "cosine similarity — angle, not magnitude", good: true },
                { label: "Categorical attributes", outcome: "Hamming / matching distance", good: true },
                { label: "Unscaled mixed ranges", outcome: "income drowns age — normalize before measuring", good: false },
              ],
            },
            table: {
              caption: "Distance measures and the worked point pair A(2,3), B(5,7).",
              headers: ["Measure", "Formula", "A to B", "Best for"],
              rows: [
                ["Euclidean", "sqrt(Σ(xi − zi)^2)", "sqrt(9+16) = 5", "continuous scaled data"],
                ["Manhattan", "Σ|xi − zi|", "3+4 = 7", "outlier-robust comparison"],
                ["Chebyshev", "max|xi − zi|", "max(3,4) = 4", "worst-coordinate comparison"],
                ["Cosine", "(x·z)/(‖x‖‖z‖)", "1.0 for parallel vectors", "text and sparse vectors"],
              ],
            },
            callout: {
              type: "tip",
              title: "One family, three settings of p",
              body: "Minkowski with p = 1, 2, ∞ gives Manhattan, Euclidean and Chebyshev — one formula generating three named measures. Writing the family once and reading off the three cases is faster and more impressive than three unrelated formulas, and it makes the examiner's 'state the relation between them' sub-question free.",
            },
            keyTerms: [
              { term: "Euclidean distance", definition: "Straight-line distance sqrt(Σ(xi − zi)^2) — the default for scaled continuous data." },
              { term: "Manhattan distance", definition: "Sum of absolute coordinate differences — robust to single large deviations." },
              { term: "Chebyshev distance", definition: "Maximum absolute coordinate difference — the p -> ∞ Minkowski case." },
              { term: "Cosine similarity", definition: "The angle between two vectors, ignoring magnitude — the text-mining similarity." },
              { term: "Normalization before distance", definition: "Scaling attributes to comparable ranges so no single feature dominates." },
            ],
            examQuestions: [
              {
                q: "Explain the distance measures used in data mining — Euclidean, Manhattan, Chebyshev, cosine and one categorical measure — computing each for A(2, 3) and B(5, 7).",
                marks: 7,
                outline: [
                  "Minkowski family: d = (Σ|xi − zi|^p)^(1/p)",
                  "Euclidean (p = 2): sqrt(9 + 16) = 5",
                  "Manhattan (p = 1): 3 + 4 = 7",
                  "Chebyshev (p -> ∞): max(3, 4) = 4",
                  "Cosine: angle-based, magnitude-blind — for text vectors",
                  "Categorical: Hamming/matching distance",
                  "Normalize attributes before any of these",
                ],
              },
              {
                q: "Why does text mining prefer cosine similarity to Euclidean distance? Illustrate with vectors.",
                marks: 7,
                outline: [
                  "Longer documents have larger-magnitude vectors of the same topic",
                  "(2,1,0) and (8,4,0): Euclidean ~6.7 says 'far', cosine 1.0 says 'same topic'",
                  "Cosine compares direction (word proportions), not length",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Types of clustering algorithms",
            body: [
              "Clustering groups unlabelled tuples so that intra-cluster similarity is high and inter-cluster similarity low, and the syllabus's 'types of clustering algorithms' line is the taxonomy. Partitioning methods (K-Means, K-Medoids/PAM) construct K flat clusters by optimizing a centre-based criterion — fast and scalable, but they assume roughly spherical, similar-sized clusters and need K in advance. Hierarchical methods (agglomerative bottom-up, divisive top-down) build a dendrogram of nested clusters — no K needed upfront, but merges/splits are irreversible and cost O(n²) memory. Density-based methods (DBSCAN) grow clusters from dense regions, find arbitrary shapes, and label sparse points as noise. Grid-based methods (STING, CLIQUE) quantize the space into cells and cluster over the grid — fast, summary-level. Model-based methods (EM over Gaussian mixtures) fit probability models with soft memberships.",
              "Hard versus fuzzy membership cuts across the families: hard clustering assigns each point to exactly one cluster (K-Means), fuzzy clustering assigns degrees of membership (fuzzy C-Means gives a point 60% cluster A, 40% cluster B) — the right model when clusters genuinely overlap. A good clustering method, per the standard requirement list, should be scalable, handle arbitrary shapes and noise, work in high dimensions, be order-insensitive, and be interpretable — no single algorithm meets all of them, which is why the taxonomy matters: the choice encodes which requirement you pay for.",
              "The worked shape argument makes the taxonomy concrete: two elongated crescent shapes defeat K-Means (it cuts them across the middle — centre-based criteria see two half-moons, not crescents) but DBSCAN finds them perfectly by chaining dense regions; conversely, DBSCAN on uniformly dense spheres returns one blob when K-Means returns the natural K. Two parallel lines (the local-optimum example of 4.3) are another K-Means failure that density methods survive. Matching family to expected cluster shape is the exam's real question.",
              "The exam angle: 'explain the types of clustering algorithms' — five families, one representative algorithm each, one strength and one weakness each, then the crescents-versus-spheres shape example. End with hard vs fuzzy — one line, one mark, reliably present in the answer key.",
            ],
            bullets: [
              "Partitioning (K-Means, K-Medoids): K flat clusters, centre-based, fast, spherical assumption.",
              "Hierarchical: agglomerative/divisive dendrogram; no upfront K; O(n^2) cost, irreversible merges.",
              "Density-based (DBSCAN): clusters as dense regions; arbitrary shapes; noise label.",
              "Grid-based (STING, CLIQUE): space quantized into cells; fast at summary level.",
              "Model-based (GMM/EM): probabilistic components, soft memberships.",
              "Hard vs fuzzy: one cluster per point vs degrees of membership (fuzzy C-Means).",
              "Crescents defeat K-Means but DBSCAN finds them; dense spheres are the reverse.",
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing the clustering family",
              caption:
                "Cluster shape and data scale decide the family — each quadrant names its algorithm.",
              axes: { x: "Expected cluster shape (spherical -> arbitrary)", y: "Dataset scale (small -> huge)" },
              quadrants: [
                { label: "K-Means / PAM", note: "spherical shapes, large data — the fast default" },
                { label: "DBSCAN / OPTICS", note: "arbitrary shapes, moderate data — plus noise handling" },
                { label: "Hierarchical agglomerative", note: "spherical-ish, small data — dendrogram wanted" },
                { label: "STING / CLIQUE (grid)", note: "arbitrary shapes, huge data — summary-level clustering" },
              ],
            },
            table: {
              caption: "The five clustering families.",
              headers: ["Family", "Representative", "Strength", "Weakness"],
              rows: [
                ["Partitioning", "K-Means, K-Medoids", "fast, scalable", "spherical assumption; needs K"],
                ["Hierarchical", "agglomerative (AGNES)", "dendrogram; no upfront K", "irreversible merges; O(n^2)"],
                ["Density-based", "DBSCAN", "arbitrary shapes; noise handling", "struggles with varying density"],
                ["Grid-based", "STING, CLIQUE", "very fast on large spatial data", "coarse, quantization-dependent"],
                ["Model-based", "GMM with EM", "soft membership; elliptical clusters", "distributional assumptions"],
              ],
            },
            callout: {
              type: "exam",
              title: "Shape beats brand",
              body: "When asked to 'choose a clustering algorithm for a given dataset', the mark scheme wants the shape argument: spherical equal blobs -> K-Means; arbitrary shapes with noise -> DBSCAN; nested groups -> hierarchical; overlapping soft clusters -> GMM/fuzzy. Name the family, then justify by shape — never by popularity.",
            },
            keyTerms: [
              { term: "Partitioning clustering", definition: "Constructing K flat clusters by optimizing distance to centres (K-Means, K-Medoids)." },
              { term: "Hierarchical clustering", definition: "Building a tree of nested clusters (dendrogram) by agglomerative merges or divisive splits." },
              { term: "Density-based clustering", definition: "Growing clusters from dense regions separated by sparse ones (DBSCAN)." },
              { term: "Fuzzy clustering", definition: "Assigning degrees of membership to clusters instead of hard labels (fuzzy C-Means)." },
              { term: "Dendrogram", definition: "The tree diagram of hierarchical merges/splits; cut height yields flat clusters." },
            ],
            examQuestions: [
              {
                q: "Explain the types of clustering algorithms — partitioning, hierarchical, density-based, grid-based and model-based — with one representative, one strength and one weakness each. Distinguish hard from fuzzy clustering.",
                marks: 7,
                outline: [
                  "Partitioning (K-Means): fast; spherical assumption, needs K",
                  "Hierarchical (AGNES/DIANA): dendrogram, no K; irreversible, O(n^2)",
                  "Density-based (DBSCAN): arbitrary shapes + noise; varying density hurts",
                  "Grid-based (STING): fast summaries; quantization coarseness",
                  "Model-based (GMM/EM): soft, elliptical; assumption-bound",
                  "Hard: one label per point; fuzzy: degrees of membership",
                  "Shape example: crescents need density methods, not K-Means",
                ],
              },
              {
                q: "Why does K-Means fail on two crescent-shaped clusters while DBSCAN succeeds?",
                marks: 7,
                outline: [
                  "K-Means minimizes distance to centroids — its objective sees two half-moons",
                  "The centroid-optimal split cuts across both crescents' middles",
                  "DBSCAN chains dense regions wherever they connect, following the crescent shape",
                  "Lesson: the algorithm's implicit cluster-shape belief decides success",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "K-Means algorithm — iterations and the local optimum",
            body: [
              "K-Means partitions n points into K clusters by alternating two steps until nothing moves. Choose K initial centroids (randomly or by K-Means++ seeding); assign every point to its nearest centroid (Euclidean); recompute each centroid as the mean of its assigned points; repeat assignment and update until assignments stop changing. The objective it minimizes is within-cluster variation — the sum of squared distances from each point to its cluster's centroid — and each step can only lower it, so the loop always converges. What it does not guarantee is that the converged answer is the global optimum.",
              "Worked iterations, one-dimensional points {2, 4, 10, 12} with K = 2 and initial centroids m1 = 2, m2 = 4. Iteration 1: 2 -> m1 (0 vs 2); 4 -> m2 (2 vs 0); 10 -> m2 (8 vs 6); 12 -> m2 (10 vs 8). Clusters {2} and {4, 10, 12}; new means m1 = 2, m2 = 8.67. Iteration 2: 2 -> m1; 4 -> m1 (2 vs 4.67, moves); 10 -> m2 (8 vs 1.33); 12 -> m2. Clusters {2, 4} and {10, 12}; means m1 = 3, m2 = 11. Iteration 3: 2 -> m1 (1 vs 9); 4 -> m1 (1 vs 7); 10 -> m2 (7 vs 1); 12 -> m2 (9 vs 1) — nothing moves: converged to {2, 4} and {10, 12}, the natural split.",
              "The local-optimum failure (June 2025 Q5b): six 2-D points forming two vertical lines — line A at x = 0 with y ∈ {1, 3, 5}, line B at x = 10 with the same y values. True clustering is by line; within-cluster variation of the truth: line A mean (0, 3), squared distances 0 + 4 + 4 = 8, same for line B — total 16. Seed both centroids on line A, say c1 = (0, 1) and c2 = (0, 2): assignment one puts (0,1) and (10,1) with c1, the other four points with c2 — a horizontal cut; after the update step (centroids become (5, 1) and (5, 4)) every re-assignment confirms the same partition, and the loop converges with total variation 50 + 104 = 154, far above the true 16, with no single point-move able to improve it. The algorithm optimized locally: both seeds landed on one natural cluster, so the structure was destroyed at assignment one. K-Means++ seeding, multiple random restarts (keep the lowest variation), or better objective matches (DBSCAN for lines) are the standard defences.",
              "The exam angle: June 2025 asked the algorithm with an example (Q8b) and the local-optimum example (Q5b) separately — write the four algorithm steps, the three-iteration trace, and the vertical-lines failure with the two variation totals (16 vs 154) as evidence. The examiner's key phrase is 'local optimum, not global — initial centroids decide the outcome'.",
            ],
            bullets: [
              "Algorithm: seed K centroids -> assign to nearest -> recompute means -> repeat until stable.",
              "Objective: within-cluster variation = Σ over clusters Σ ||x − centroid||².",
              "Each step lowers the objective -> convergence guaranteed — but only to a local optimum.",
              "Worked trace: {2, 4, 10, 12}, K = 2, seeds 2 and 4 -> converges to {2,4} | {10,12}.",
              "Failure case: seeds c1 = (0,1), c2 = (0,2) on one of two vertical lines ->",
              "converges to a horizontal cut with variation 154 vs the true clustering's 16.",
              "Defences: K-Means++ seeding, multiple restarts, or a shape-appropriate algorithm.",
            ],
            diagram: {
              kind: "cycle",
              title: "The K-Means loop",
              caption:
                "Assign and update lower the within-cluster variation every pass — until a (possibly local) optimum freezes the loop.",
              steps: [
                { label: "Seed", note: "choose K initial centroids (K-Means++)" },
                { label: "Assign", note: "each point -> nearest centroid" },
                { label: "Update", note: "each centroid -> mean of its points" },
                { label: "Check", note: "assignments changed? loop again" },
                { label: "Output", note: "K clusters + total variation" },
              ],
            },
            table: {
              caption: "Worked K-Means trace on {2, 4, 10, 12}, K = 2, seeds m1 = 2, m2 = 4.",
              headers: ["Iteration", "Cluster 1", "Cluster 2", "Centroids (m1, m2)"],
              rows: [
                ["Initial", "—", "—", "(2, 4)"],
                ["1 (assign+update)", "{2}", "{4, 10, 12}", "(2, 8.67)"],
                ["2 (assign+update)", "{2, 4}", "{10, 12}", "(3, 11)"],
                ["3 — no change", "{2, 4}", "{10, 12}", "(3, 11) — converged"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "kmeans.py — the worked trace, then the restart defence",
              code: `import numpy as np
from sklearn.cluster import KMeans

X = np.array([[2], [4], [10], [12]])
km = KMeans(n_clusters=2, n_init=10, random_state=42).fit(X)
print(km.labels_.ravel())            # [0 0 1 1]
print(km.cluster_centers_.ravel())   # [3. 11.]
print(km.inertia_)                   # within-cluster variation = 4.0

# n_init=10: run ten seedings, keep the lowest variation — the
# standard defence against K-Means' local-optimum convergence`,
            },
            callout: {
              type: "exam",
              title: "Asked twice in Jun 2025",
              body: "June 2025 carried K-Means twice: Q8b 'write k-means algorithm with example' and Q5b 'give an example to show why the k-means algorithm may not find the global optimum, that is optimizing the within cluster variation'. Prepare the four-step algorithm, the {2,4,10,12} trace, and the vertical-lines failure (variation 154 vs 16) as three separate artifacts — they answer both halves.",
            },
            keyTerms: [
              { term: "K-Means", definition: "Partitioning clustering alternating assign-to-nearest and update-mean steps." },
              { term: "Within-cluster variation", definition: "Sum of squared distances from points to their centroid — the objective K-Means minimizes." },
              { term: "Local optimum", definition: "A converged assignment no single point-move improves, yet the global best differs — seed-dependent." },
              { term: "K-Means++", definition: "Seeding that spreads initial centroids by squared-distance weighting to avoid degenerate starts." },
              { term: "n_init restarts", definition: "Running K-Means many times and keeping the lowest-variation result." },
            ],
            examQuestions: [
              {
                q: "Write the K-Means algorithm with an example, showing the assignment and update steps until convergence.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Steps: choose K seeds; assign each point to nearest centroid;",
                  "recompute centroids as cluster means; repeat until assignments stable",
                  "Worked: {2, 4, 10, 12}, K = 2, m1 = 2, m2 = 4",
                  "Iter 1: {2} | {4, 10, 12} -> (2, 8.67)",
                  "Iter 2: {2, 4} | {10, 12} -> (3, 11)",
                  "Iter 3: no change — converged to the natural split",
                ],
              },
              {
                q: "Give an example to show why the K-Means algorithm may not find the global optimum of within-cluster variation.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Two vertical lines of three points: (0,1),(0,3),(0,5) and (10,1),(10,3),(10,5)",
                  "True clustering by line: total variation = 8 + 8 = 16",
                  "Seeds c1 = (0,1), c2 = (0,2) both fall on line A",
                  "First assignment splits by height (horizontal cut); update fixes centroids (5,1),(5,4)",
                  "Converges with variation 50 + 104 = 154 — a stable local optimum, far above 16",
                  "Defences: K-Means++ seeding, multiple restarts, shape-appropriate algorithms",
                ],
              },
              {
                q: "Why does K-Means always converge, and why is that not enough?",
                marks: 7,
                outline: [
                  "Each assignment lowers variation for fixed centroids, each update lowers it further",
                  "Variation is bounded below by 0 -> the loop must stop",
                  "The stop is a local optimum: seed-dependent, no global guarantee",
                  "Hence restarts and K-Means++ are mandatory practice",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Decision tree induction — information gain and pruning",
            body: [
              "A decision tree classifies by asking attribute questions: internal nodes test attributes, branches are outcomes, leaves carry class labels; ID3 builds it top-down by greedy attribute selection. The selection criterion is information gain. Entropy of a node with class distribution (p+, p−): Entropy(S) = −p+ log2 p+ − p− log2 p−. Information gain of attribute A: Gain(S, A) = Entropy(S) − Σ (|Sv|/|S|) Entropy(Sv) over A's branches. ID3 splits on the attribute with maximum gain and recurses on each branch; C4.5 adds gain ratio to penalize many-valued attributes, and CART switches to the Gini index.",
              "Worked computation on an 8-tuple node with 5 yes / 3 no: Entropy = −(5/8) log2(5/8) − (3/8) log2(3/8) = 0.954. Attribute Outlook splits it into Sunny (4 tuples: 3 yes, 1 no; Entropy 0.811) and Rain (4 tuples: 2 yes, 2 no; Entropy 1.0); weighted = 0.5 × 0.811 + 0.5 × 1.0 = 0.906; Gain(Outlook) = 0.954 − 0.906 = 0.048. Attribute Wind splits into Weak (5 tuples: 4 yes, 1 no; Entropy 0.722) and Strong (3 tuples: 1 yes, 2 no; Entropy 0.918); weighted = 0.625 × 0.722 + 0.375 × 0.918 = 0.795; Gain(Wind) = 0.954 − 0.795 = 0.159. Wind wins and becomes the root's test.",
              "Pruning (June 2025 Q5a) answers the tree's one weakness: a fully-grown tree fits the training data so well that it memorizes noise — 100% training accuracy, poor test accuracy — the overfitting failure. Pruning cuts branches that do not generalize: pre-pruning stops growth early (minimum node size, maximum depth, gain thresholds); post-pruning grows the full tree and then removes branches whose removal does not worsen accuracy on validation data (reduced-error pruning) or by cost-complexity trade-off. Why it is useful: smaller trees carry the stable signal, generalize better, and are readable. The drawback of a separate evaluation set: with limited data, holding out tuples for pruning starves training — the tree is built on less data and may miss patterns the held-out set contains, and the choice of which tuples to hold out changes the final tree.",
              "The exam angle: 'explain decision tree induction; why is pruning useful; what is the drawback of a separate pruning set' — write the entropy and gain formulas, work the Outlook/Wind comparison (0.048 vs 0.159), name pre- and post-pruning, and state the data-hunger drawback verbatim. The pseudo-code below is the artifact examiners expect for 'write the ID3 algorithm'.",
            ],
            bullets: [
              "Tree: internal nodes test attributes, branches are outcomes, leaves are class labels.",
              "Entropy(S) = −Σ pi log2 pi; Gain(S, A) = Entropy(S) − weighted branch entropies.",
              "Worked: node 5 yes/3 no -> 0.954; Gain(Outlook) = 0.048, Gain(Wind) = 0.159 -> Wind wins.",
              "C4.5 gain ratio penalizes many-valued attributes; CART uses Gini index.",
              "Overfitting: the full tree memorizes noise — high train accuracy, poor test accuracy.",
              "Pre-pruning stops early; post-pruning (reduced-error) removes branches on validation data.",
              "Separate pruning set drawback: less data for training; tree depends on the hold-out choice.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Decision tree induction, then pruning",
              caption:
                "Greedy splitting grows the tree; pruning shrinks it back to the signal.",
              stages: [
                { label: "Node", note: "all tuples start at the root" },
                { label: "Measure", note: "entropy of node, gain of each attribute" },
                { label: "Split", note: "on maximum gain; recurse per branch" },
                { label: "Stop", note: "pure node / no attributes left / threshold" },
                { label: "Prune", note: "cut branches that fail on validation data" },
              ],
            },
            table: {
              caption: "Attribute selection on the 8-tuple node (5 yes, 3 no).",
              headers: ["Attribute", "Branch entropies", "Weighted entropy", "Gain"],
              rows: [
                ["Outlook", "Sunny 0.811, Rain 1.000", "0.5(0.811) + 0.5(1.000) = 0.906", "0.954 − 0.906 = 0.048"],
                ["Wind", "Weak 0.722, Strong 0.918", "0.625(0.722) + 0.375(0.918) = 0.795", "0.954 − 0.795 = 0.159"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "id3.py — decision tree induction in pseudo-code",
              code: `function ID3(S, attributes):
    if all tuples in S have the same class C:
        return leaf(C)
    if attributes is empty:
        return leaf(majority class of S)
    A* = argmax over attributes of Gain(S, A)
    tree = new node testing A*
    for each value v of A*:
        Sv = {tuples of S with A* = v}
        if Sv is empty:
            attach leaf(majority class of S)
        else:
            attach ID3(Sv, attributes − {A*})
    return tree

# post-pruning: for each subtree, if accuracy on validation data
# does not drop when the subtree is replaced by its majority leaf,
# replace it — repeat until no cut helps`,
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025 — pruning's price",
              body: "June 2025 Q5a: 'Why is tree pruning useful in decision tree induction? What is a drawback of using a separate set of tuples to evaluate pruning?' Answer: pruning fights overfitting (noise memorized, poor generalization); the drawback is data hunger — training sees fewer tuples and the tree's shape depends on which tuples were held out.",
            },
            keyTerms: [
              { term: "Information gain", definition: "Entropy reduction from splitting on an attribute — ID3's selection criterion." },
              { term: "Entropy", definition: "−Σ pi log2 pi — the impurity of a node's class distribution." },
              { term: "Overfitting", definition: "The tree memorizes training noise; perfect train accuracy, poor test accuracy." },
              { term: "Pre-pruning", definition: "Stopping tree growth early via depth, size or gain thresholds." },
              { term: "Post-pruning (reduced-error)", definition: "Growing fully, then cutting subtrees that fail on validation tuples." },
            ],
            examQuestions: [
              {
                q: "Why is tree pruning useful in decision tree induction? What is a drawback of using a separate set of tuples to evaluate pruning?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Fully-grown trees fit training noise — overfitting: perfect train, poor test accuracy",
                  "Pruning removes branches that do not generalize: pre-pruning (early stop),",
                  "post-pruning (reduced-error / cost-complexity on validation data)",
                  "Benefits: better generalization, smaller readable trees",
                  "Drawback of a separate pruning set: fewer tuples for training — patterns missed",
                  "The tree's shape depends on which tuples were held out",
                ],
              },
              {
                q: "Compute the information gain of Outlook and Wind for the node with 8 tuples (5 yes, 3 no), where Outlook splits 4/4 and Wind splits 5/3 as given, and state which attribute ID3 selects.",
                marks: 7,
                outline: [
                  "Entropy(node) = −(5/8)log2(5/8) − (3/8)log2(3/8) = 0.954",
                  "Outlook: 0.5(0.811) + 0.5(1.000) = 0.906 -> gain 0.048",
                  "Wind: 0.625(0.722) + 0.375(0.918) = 0.795 -> gain 0.159",
                  "ID3 splits on Wind (higher gain)",
                ],
              },
              {
                q: "Write the ID3 algorithm in pseudo-code, including the stopping conditions.",
                marks: 7,
                outline: [
                  "If all tuples share one class -> leaf",
                  "If no attributes remain -> leaf with majority class",
                  "Otherwise choose attribute of maximum information gain",
                  "Partition tuples by the attribute's values; recurse on each partition",
                  "Empty partition -> leaf with parent's majority class",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Bayesian classification — naive Bayes",
            body: [
              "Bayesian classification applies Bayes' theorem: P(H | X) = P(X | H) P(H) / P(X) — the posterior probability of class H given tuple X, computed from the likelihood P(X | H), the prior P(H) and the evidence P(X). Classification picks the class with the maximum posterior, and since P(X) is constant across classes, the comparison reduces to maximizing P(X | H) P(H). Estimating P(X | H) directly is impossible — too many attribute combinations — so the naive Bayes classifier assumes attributes are conditionally independent given the class: P(X | H) = Π P(xi | H), reducing estimation to per-attribute counts.",
              "Worked classification on a 6-row weather table — (sunny, weak, yes), (sunny, strong, no), (rain, weak, yes), (rain, weak, yes), (sunny, weak, no), (rain, strong, no) — classify X = (Outlook = sunny, Wind = weak). Priors: P(yes) = 3/6 = 0.5, P(no) = 0.5. Likelihoods: P(sunny | yes) = 1/3, P(sunny | no) = 2/3; P(weak | yes) = 3/3 = 1, P(weak | no) = 1/3. Scores: yes: 0.5 × (1/3) × 1 = 1/6 ≈ 0.167; no: 0.5 × (2/3) × (1/3) = 1/9 ≈ 0.111. 0.167 > 0.111, so classify Play = yes. The normalization constant P(X) is never computed — argmax only needs the unnormalized scores.",
              "The independence assumption is 'naive' because attributes correlate in reality (age and income do), yet naive Bayes competes with far heavier models on text classification and other high-dimensional tasks — its variance stays low because it estimates one parameter per attribute per class instead of their combinations. Its practical weakness is the zero-frequency problem: if P(sunny | yes) were 0/3 (no sunny-yes row), the whole product collapses to 0 and the class is erased regardless of other evidence. Laplace (add-one) smoothing fixes it: P(xi | H) = (count + 1)/(total + k), where k is the number of xi's values.",
              "The exam angle: 'state Bayes' theorem; explain the naive assumption; classify a tuple with given counts' — write the theorem, name the assumption and its purpose (estimability), work the weather numbers (0.167 vs 0.111 -> yes), and close with Laplace smoothing and the zero-frequency problem. The examiner checks the two unnormalized scores.",
            ],
            bullets: [
              "Bayes: P(H | X) = P(X | H) P(H) / P(X); compare classes by P(X | H) P(H).",
              "Naive assumption: attributes conditionally independent given the class -> product of per-attribute likelihoods.",
              "Worked: X = (sunny, weak): yes scores 0.167, no scores 0.111 -> Play = yes.",
              "P(X) never computed — argmax needs unnormalized scores only.",
              "Why naive works: one parameter per attribute-class pair — low variance, strong on text.",
              "Zero-frequency problem: one 0 likelihood erases the class — fix with Laplace smoothing (add-one).",
            ],
            diagram: {
              kind: "flow",
              title: "Classifying one tuple with naive Bayes",
              caption:
                "Priors in, per-attribute likelihoods multiplied, argmax out — the evidence term is never needed.",
              steps: [
                { label: "Priors", note: "P(yes) = P(no) = 0.5 from class counts" },
                { label: "Likelihoods", note: "P(sunny|class), P(weak|class) from per-attribute counts" },
                { label: "Score", note: "P(class) x product of likelihoods" },
                { label: "Argmax", note: "0.167 (yes) vs 0.111 (no) -> yes" },
              ],
            },
            table: {
              caption: "The worked training table (6 rows).",
              headers: ["TID", "Outlook", "Wind", "Play"],
              rows: [
                ["1", "sunny", "weak", "yes"],
                ["2", "sunny", "strong", "no"],
                ["3", "rain", "weak", "yes"],
                ["4", "rain", "weak", "yes"],
                ["5", "sunny", "weak", "no"],
                ["6", "rain", "strong", "no"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "naive_bayes.py — the worked posterior scores",
              code: `from collections import Counter

rows = [("sunny","weak","yes"), ("sunny","strong","no"),
        ("rain","weak","yes"),  ("rain","weak","yes"),
        ("sunny","weak","no"),  ("rain","strong","no")]

def likelihood(attr, val, cls):
    hits = sum(1 for r in rows if r[2] == cls and r[attr] == val)
    tot  = sum(1 for r in rows if r[2] == cls)
    return (hits + 1) / (tot + 2)      # Laplace smoothing, k = 2

for cls in ["yes", "no"]:
    prior = sum(1 for r in rows if r[2] == cls) / len(rows)
    score = prior * likelihood(0, "sunny", cls) * likelihood(1, "weak", cls)
    print(cls, round(score, 4))       # yes 0.1667, no 0.0926 -> Play = yes`,
            },
            callout: {
              type: "warning",
              title: "One zero erases a class",
              body: "If any P(xi | class) counts to zero, the product becomes zero and that class can never be predicted — the zero-frequency problem. Always apply Laplace (add-one) smoothing in numericals: (count + 1)/(total + number_of_values). Mention it unprompted; examiners look for it.",
            },
            keyTerms: [
              { term: "Bayes' theorem", definition: "P(H | X) = P(X | H) P(H) / P(X) — posterior from likelihood and prior." },
              { term: "Naive assumption", definition: "Attributes are conditionally independent given the class — makes likelihoods estimable." },
              { term: "Prior / posterior", definition: "Class probability before seeing X (prior) and after (posterior)." },
              { term: "Zero-frequency problem", definition: "A zero likelihood count collapses the whole class score to zero." },
              { term: "Laplace smoothing", definition: "(count + 1)/(total + k) — the add-one fix for zero counts." },
            ],
            examQuestions: [
              {
                q: "State Bayes' theorem and explain the naive Bayes classifier. Classify X = (Outlook = sunny, Wind = weak) from the 6-row table: sunny-weak rows are 2 yes / 1 no, priors 3/6 each.",
                marks: 7,
                outline: [
                  "P(H | X) = P(X | H) P(H) / P(X); classes compared by P(X | H) P(H)",
                  "Naive assumption: product of per-attribute likelihoods",
                  "P(sunny|yes) = 1/3, P(sunny|no) = 2/3; P(weak|yes) = 1, P(weak|no) = 1/3",
                  "yes: 0.5 x (1/3) x 1 = 0.167; no: 0.5 x (2/3) x (1/3) = 0.111",
                  "Argmax -> Play = yes",
                ],
              },
              {
                q: "Why is the classifier called 'naive', and why does it nevertheless perform well in practice?",
                marks: 7,
                outline: [
                  "The conditional-independence assumption is rarely true (age and income correlate)",
                  "But it cuts parameters from combinatorial to per-attribute — low variance",
                  "Estimates stay robust with little data; strong on high-dimensional text",
                  "Errors in the assumption often cancel in the argmax comparison",
                ],
              },
              {
                q: "What is the zero-frequency problem and how does Laplace smoothing solve it?",
                marks: 7,
                outline: [
                  "An attribute value never seen with a class gives P = 0, zeroing the product",
                  "The class becomes unpredictable regardless of other evidence",
                  "Laplace: P = (count + 1)/(total + number_of_values)",
                  "Every value keeps a non-zero probability; the estimate stays close to observed",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Other classification methods and prediction",
            body: [
              "Beyond trees and Bayes, the syllabus groups 'other classification methods' and prediction. K-NN (nearest-neighbour) is lazy learning: store all training tuples, classify a new point by the majority class of its K nearest neighbours — no model is built at training time, all the work happens at query time, and everything depends on the distance measure (normalized attributes!) and K (small K overfits noise, large K blurs boundaries). Rule-based classifiers turn a decision tree into IF-THEN rules or mine rules directly from data (Unit III's machinery, reused). SVM places the maximum-margin hyperplane between classes and extends to non-linear boundaries via kernels — the syllabus names it; a one-paragraph description suffices here.",
              "Prediction (regression) is classification's continuous twin: the target is a number, and the standard model is linear regression, y = α + βx, fitted by least squares. β = Σ(x − x̄)(y − ȳ) / Σ(x − x̄)² and α = ȳ − βx̄. Worked fit on four points (1, 2), (2, 3), (3, 5), (4, 4): x̄ = 2.5, ȳ = 3.5; β = (−1.5)(−1.5) + (−0.5)(−0.5) + (0.5)(1.5) + (1.5)(0.5) / (2.25 + 0.25 + 0.25 + 2.25) = 4.0 / 5.0 = 0.8; α = 3.5 − 0.8 × 2.5 = 1.5. Model: ŷ = 1.5 + 0.8x; predicting at x = 6 gives ŷ = 6.3. Multiple linear regression extends to several predictors; quality is judged by MSE or R², not accuracy.",
              "The classification-versus-prediction contrast is itself examinable: classification predicts categorical labels (buy/don't buy) and is evaluated by accuracy, precision, recall; prediction forecasts continuous values (next month's sales) and is evaluated by mean squared error. Decision trees adapt to both (regression trees), as do neural networks — the algorithm families are shared, the target type and metrics differ.",
              "The exam angle: 'explain K-NN with an example; distinguish classification from prediction; fit a linear regression' — work the K-NN majority vote (below), the least-squares numbers (β = 0.8, α = 1.5, ŷ(6) = 6.3), and close with the metrics contrast. K-NN's 'lazy' label and its normalization dependence are the two mark-bearing remarks.",
            ],
            bullets: [
              "K-NN: lazy learning — no model built; majority class of the K nearest stored tuples.",
              "K dial: small K overfits noise; large K blurs local boundaries.",
              "K-NN is scale-sensitive: normalization is mandatory before measuring distances.",
              "Rule-based classifiers: tree-to-rules or directly mined IF-THEN rules.",
              "SVM: maximum-margin hyperplane; kernels for non-linear boundaries.",
              "Prediction = continuous target; linear regression fitted by least squares.",
              "Worked fit: (1,2),(2,3),(3,5),(4,4) -> ŷ = 1.5 + 0.8x; ŷ(6) = 6.3.",
            ],
            diagram: {
              kind: "compare",
              title: "Classification vs prediction",
              caption:
                "Same algorithm families, different target type and different metrics.",
              left: {
                heading: "Classification",
                items: [
                  "Target: categorical class label",
                  "Example: churn yes/no",
                  "Metrics: accuracy, precision, recall, F1",
                  "Models: trees, Bayes, K-NN, SVM",
                ],
              },
              right: {
                heading: "Prediction (regression)",
                items: [
                  "Target: continuous value",
                  "Example: next month's sales",
                  "Metrics: MSE, R^2",
                  "Models: linear regression, regression trees",
                ],
              },
            },
            table: {
              caption: "Classification methods at a glance.",
              headers: ["Method", "Learning style", "Key idea", "Watch out for"],
              rows: [
                ["K-NN", "lazy (no model)", "majority of K nearest neighbours", "scaling; K choice; query-time cost"],
                ["Decision tree", "eager", "greedy splits by information gain", "overfitting — prune"],
                ["Naive Bayes", "eager", "posterior by independence assumption", "zero counts — Laplace"],
                ["SVM", "eager", "maximum-margin hyperplane + kernels", "kernel/parameter tuning"],
                ["Linear regression", "eager", "least-squares line y = a + bx", "only for continuous targets"],
              ],
            },
            callout: {
              type: "tip",
              title: "K-NN does no training at all",
              body: "The 'lazy' label is the mark-bearing remark: K-NN stores the training set and defers all computation to query time, the opposite of eager classifiers that build a model once. That is also why K-NN scales badly to large datasets — every query compares against every stored tuple.",
            },
            keyTerms: [
              { term: "K-NN", definition: "Classifies a tuple by the majority class of its K nearest neighbours — lazy learning." },
              { term: "Lazy vs eager learning", definition: "Lazy defers modelling to query time (K-NN); eager builds the model at training time." },
              { term: "Prediction (regression)", definition: "Modelling a continuous target, typically by least-squares linear regression." },
              { term: "Least squares", definition: "Choosing α, β minimizing the sum of squared residuals of y = α + βx." },
              { term: "SVM", definition: "Classifier placing the maximum-margin hyperplane between classes; kernels add non-linearity." },
            ],
            examQuestions: [
              {
                q: "Explain the K-NN classification method with a worked example and state why normalization matters for it.",
                marks: 7,
                outline: [
                  "Store training tuples; classify by majority class of K nearest",
                  "Worked: points (1,2) A, (2,3) A, (6,7) B, (7,8) B; query (3,2)",
                  "Distances: 1.41, 2, 6.4, 7.28 -> 3-NN = two A, one B -> classify A",
                  "Lazy learning: no model, all work at query time",
                  "Distance dominated by widest-range attribute -> normalize first",
                ],
              },
              {
                q: "Fit a linear regression to (1,2), (2,3), (3,5), (4,4) by least squares and predict at x = 6.",
                marks: 7,
                outline: [
                  "x̄ = 2.5, ȳ = 3.5",
                  "β = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² = 4.0/5.0 = 0.8",
                  "α = 3.5 − 0.8(2.5) = 1.5",
                  "ŷ = 1.5 + 0.8x; ŷ(6) = 6.3",
                ],
              },
              {
                q: "Distinguish classification from prediction — target type, typical models and evaluation metrics.",
                marks: 7,
                outline: [
                  "Classification: categorical label (churn yes/no)",
                  "Prediction: continuous value (next month's sales)",
                  "Metrics: accuracy/precision/recall vs MSE/R^2",
                  "Trees and neural networks serve both (regression trees)",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Classifier accuracy — confusion matrix and cross-validation",
            body: [
              "Classifier accuracy is measured against labelled test data, and the confusion matrix is the artifact everything else derives from: a 2×2 table of predicted class × actual class — true positives (TP), false positives (FP), false negatives (FN), true negatives (TN). From it: accuracy = (TP + TN)/(TP + FP + FN + TN); error rate = 1 − accuracy; precision = TP/(TP + FP) — of the predicted positives, how many were right; recall (sensitivity) = TP/(TP + FN) — of the actual positives, how many were found; specificity = TN/(TN + FP); F1 = 2·precision·recall/(precision + recall) — the harmonic mean balancing the two.",
              "Worked matrix from a 100-tuple test set — TP = 40, FP = 10, FN = 20, TN = 30: accuracy = 70/100 = 0.70; precision = 40/50 = 0.80; recall = 40/60 = 0.667; F1 = 2 × 0.8 × 0.667/(0.8 + 0.667) = 1.067/1.467 = 0.727. The numbers tell the story accuracy hides: the classifier is precise when it fires (0.80) but misses a third of the actual positives (recall 0.667) — which matters or not depending on the cost of a missed fraud versus a false alarm. On imbalanced data accuracy misleads outright: a 99%-negative fraud dataset yields 99% accuracy for the trivial 'never flag' classifier — precision/recall/F1 are the honest metrics there.",
              "Estimating accuracy honestly requires data discipline: holdout splits data into 2/3 training and 1/3 testing (random subsampling repeats it and averages); k-fold cross-validation divides data into k equal folds, trains on k−1 and tests on the held fold, rotating k times and averaging — the standard k = 10, giving every tuple exactly one turn in the test seat; leave-one-out is k = n for tiny datasets; bootstrap samples with replacement for the rare-data case. Stratification — keeping class proportions in every fold — is the standard refinement, and it answers the imbalance problem at the estimation level.",
              "The exam angle: 'explain the confusion matrix and derive the metrics; explain k-fold cross-validation' — draw the matrix, compute the four metric numbers from the worked matrix, and state why accuracy misleads on imbalance. The exam also rewards naming the estimation schemes (holdout, random subsampling, k-fold CV, bootstrap) with one line each.",
            ],
            bullets: [
              "Confusion matrix 2x2: TP, FP, FN, TN — every metric derives from these four counts.",
              "Accuracy = (TP+TN)/total; precision = TP/(TP+FP); recall = TP/(TP+FN).",
              "F1 = 2PR/(P+R) — harmonic mean punishes imbalance between precision and recall.",
              "Worked: TP 40, FP 10, FN 20, TN 30 -> accuracy 0.70, precision 0.80, recall 0.667, F1 0.727.",
              "Imbalance trap: 'never flag fraud' scores 99% accuracy on a 99%-negative dataset.",
              "Holdout 2/3-1/3; k-fold CV rotates k folds and averages — k = 10 standard.",
              "Stratification keeps class proportions in every fold.",
            ],
            diagram: {
              kind: "matrix",
              title: "The confusion matrix quadrant map",
              caption:
                "Two correct cells, two error cells — every accuracy metric is arithmetic on these four boxes.",
              axes: { x: "Predicted (negative -> positive)", y: "Actual (negative -> positive)" },
              quadrants: [
                { label: "True positive (TP = 40)", note: "predicted +, actually + — hits" },
                { label: "False positive (FP = 10)", note: "predicted +, actually − — false alarms (hurts precision)" },
                { label: "False negative (FN = 20)", note: "predicted −, actually + — misses (hurts recall)" },
                { label: "True negative (TN = 30)", note: "predicted −, actually − — correct rejections" },
              ],
            },
            table: {
              caption: "Metrics from the worked confusion matrix (TP 40, FP 10, FN 20, TN 30).",
              headers: ["Metric", "Formula", "Computation", "Value"],
              rows: [
                ["Accuracy", "(TP+TN)/total", "(40+30)/100", "0.70"],
                ["Precision", "TP/(TP+FP)", "40/50", "0.80"],
                ["Recall (sensitivity)", "TP/(TP+FN)", "40/60", "0.667"],
                ["F1", "2PR/(P+R)", "2(0.8)(0.667)/1.467", "0.727"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "accuracy.py — the four metrics from the confusion counts",
              code: `TP, FP, FN, TN = 40, 10, 20, 30

accuracy = (TP + TN) / (TP + FP + FN + TN)          # 0.70
precision = TP / (TP + FP)                          # 0.80
recall = TP / (TP + FN)                             # 0.667
f1 = 2 * precision * recall / (precision + recall)  # 0.727
print(accuracy, precision, recall, round(f1, 3))

# k-fold cross-validation: every tuple gets exactly one turn as test data
from sklearn.model_selection import cross_val_score
# scores = cross_val_score(model, X, y, cv=10)  -> average of 10 honest scores`,
            },
            callout: {
              type: "exam",
              title: "Draw the matrix before computing",
              body: "In every metric numerical, draw the 2×2 with TP/FP/FN/TN placed in the cells first, then compute. Mixing up FP and FN (precision vs recall denominators) is the single most common slip — the drawing makes the denominators visible and the marks safe.",
            },
            keyTerms: [
              { term: "Confusion matrix", definition: "The 2x2 table of predicted vs actual classes underlying every accuracy metric." },
              { term: "Precision", definition: "TP/(TP+FP) — how trustworthy a positive prediction is." },
              { term: "Recall (sensitivity)", definition: "TP/(TP+FN) — how much of the actual positive class is found." },
              { term: "F1 score", definition: "Harmonic mean of precision and recall — punishes lopsided performance." },
              { term: "k-fold cross-validation", definition: "Rotate k folds as test data, average the k scores — the honest small-data estimate." },
            ],
            examQuestions: [
              {
                q: "A classifier tested on 100 tuples gives TP = 40, FP = 10, FN = 20, TN = 30. Draw the confusion matrix and compute accuracy, error rate, precision, recall, specificity and F1.",
                marks: 14,
                outline: [
                  "Matrix: TP 40, FP 10 / FN 20, TN 30",
                  "Accuracy = 70/100 = 0.70; error rate = 0.30",
                  "Precision = 40/50 = 0.80",
                  "Recall = 40/60 = 0.667; specificity = 30/40 = 0.75",
                  "F1 = 2(0.8)(0.667)/(1.467) = 0.727",
                  "Interpretation: precise when firing, misses a third of positives",
                ],
              },
              {
                q: "Explain k-fold cross-validation. Why is it preferred to a single holdout split on small datasets?",
                marks: 7,
                outline: [
                  "Split data into k equal folds (k = 10 standard)",
                  "Train on k−1 folds, test on the held fold; rotate k times",
                  "Every tuple is tested exactly once; average the k scores",
                  "Single holdout: one unlucky split gives a misleading estimate",
                  "Stratification keeps class proportions in every fold",
                ],
              },
              {
                q: "Why does accuracy mislead on imbalanced datasets, and which metrics fix it?",
                marks: 7,
                outline: [
                  "99%-negative data: 'never flag' achieves 99% accuracy while finding zero fraud",
                  "Accuracy ignores the class the task cares about",
                  "Precision, recall, F1 (and specificity) measure behaviour per class",
                  "Report them together, or use balanced accuracy",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Outlier analysis",
            body: [
              "An outlier is an observation that deviates so much from the rest of the data as to arouse suspicion that it was generated by a different mechanism (Hawkins' definition) — and in fraud detection, network intrusion and equipment monitoring, the outliers are the entire point. Types: global outliers (far from the whole dataset), contextual outliers (normal globally, abnormal given context — a ₹50,000 purchase is normal in December, odd in February), collective outliers (a group individually normal, collectively anomalous). The syllabus's methods: statistical, distance-based, density-based, clustering-based and semi-supervised.",
              "Statistical detection uses distribution tests: the IQR fence rule flags values outside [Q1 − 1.5·IQR, Q3 + 1.5·IQR]; z-scores flag |z| > 3. Worked: salaries 30, 32, 34, 35, 36, 38, 90 (in thousands) — Q1 = 32, Q3 = 38, IQR = 6, fences 23 and 47 — the 90 is flagged. Distance-based (DB(pct, dmin)): a point is an outlier if fewer than pct of points lie within dmin of it — fails when clusters differ in density, which motivates density-based methods like LOF (local outlier factor: how isolated a point is relative to its neighbours' density). Clustering-based detection (June 2025 Q6a) exploits the hierarchy: cluster the data at multiple granularity levels — cut a hierarchical clustering's dendrogram high and small distant clusters count as outliers along with stray points; cut lower and only truly isolated points do. This finds outliers at different levels: a pair of odd transactions invisible at fine granularity becomes a visible outlier cluster at coarse granularity.",
              "Semi-supervised detection (June 2025 Q6b) trains on a small labelled set plus a large unlabelled pool: the advantage of using objects without labels is threefold — they are plentiful and cheap (labels are expensive), they reflect the true data distribution (so the model learns the boundary of 'normal' far more accurately than the labelled sample alone), and they let the detector discover new outlier types no label anticipated. Typical flow: train a model of normality on labelled normal data, refine it on the unlabelled pool, score new tuples against the refined model.",
              "The exam angle: the June 2025 paper asked two outlier questions — Q6a (clustering-based detection across granularity levels) and Q6b (the advantage of unlabelled objects in semi-supervised detection) — so outlier analysis was this paper's hot topic. Prepare the Hawkins definition, the IQR worked example, the multi-level clustering method, and the three-part unlabelled-objects advantage.",
            ],
            bullets: [
              "Hawkins: an observation deviating so much it arouses suspicion of a different mechanism.",
              "Types: global, contextual (December vs February), collective.",
              "IQR fences: [Q1 − 1.5·IQR, Q3 + 1.5·IQR] — worked salaries flag 90 (fences 23, 47).",
              "Distance-based DB(pct, dmin) fails on differing densities -> LOF measures local isolation.",
              "Clustering-based: cut the dendrogram at several heights -> outliers at multiple granularity levels.",
              "Semi-supervised advantage: unlabelled objects are plentiful, cheap, and reflect the true distribution.",
              "They also let the model discover outlier types no label anticipated.",
            ],
            diagram: {
              kind: "fork",
              title: "How will you detect the outlier?",
              caption: "Four method families — the choice follows the data's density structure and labels available.",
              start: "A suspected anomalous tuple",
              branches: [
                { label: "Known distribution", outcome: "statistical: IQR fences, z-score > 3", good: true },
                { label: "Similar densities overall", outcome: "distance-based DB(pct, dmin)", good: true },
                { label: "Varying densities", outcome: "density-based LOF — local comparison", good: true },
                { label: "Hierarchical structure", outcome: "clustering-based: cut dendrogram at several levels", good: true },
              ],
            },
            table: {
              caption: "Outlier detection methods.",
              headers: ["Method", "Idea", "Worked use", "Weakness"],
              rows: [
                ["Statistical (IQR/z)", "distribution fences", "salary 90 vs fences 23-47", "assumes a distribution"],
                ["Distance-based", "few neighbours within dmin", "DB(5%, 0.5) flags isolated points", "density-blind"],
                ["Density-based (LOF)", "isolation relative to neighbours", "outliers inside sparse regions", "parameter choice"],
                ["Clustering-based", "points outside clusters (per level)", "dendrogram cuts expose level-wise outliers", "depends on clustering quality"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two outlier questions in Jun 2025",
              body: "June 2025 Q6a asked for a clustering-based method finding outliers at different granularity levels (multi-level dendrogram cuts), and Q6b asked the advantage of using unlabelled objects in semi-supervised outlier detection (plentiful, cheap, true distribution, novel outlier types). Outlier analysis was the hottest Unit IV topic — prepare both answers.",
            },
            keyTerms: [
              { term: "Outlier", definition: "An observation deviating so much it arouses suspicion of a different generating mechanism." },
              { term: "IQR fence", definition: "Flags values outside [Q1 − 1.5·IQR, Q3 + 1.5·IQR]." },
              { term: "LOF", definition: "Local outlier factor — isolation of a point relative to its neighbours' density." },
              { term: "Clustering-based detection", definition: "Points outside clusters are outliers; dendrogram cuts expose them at multiple granularity levels." },
              { term: "Semi-supervised detection", definition: "Training a model of normality on labelled data refined by a large unlabelled pool." },
            ],
            examQuestions: [
              {
                q: "Clusters may form a hierarchy, and outliers may belong to different granularity levels. Explain a clustering-based outlier detection method that can find outliers at different levels.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Run hierarchical clustering over the data -> dendrogram",
                  "Cut the dendrogram at multiple heights -> partitions of different coarseness",
                  "At each cut: points not in any sizeable cluster are outliers of that level",
                  "Fine cut: only stray individual points are flagged",
                  "Coarse cut: small distant clusters (2-3 odd points) also become outliers",
                  "Example: a pair of odd transactions invisible alone, visible as a cluster at a coarse cut",
                ],
              },
              {
                q: "In outlier detection by semi-supervised learning, what is the advantage of using objects without labels in the training dataset?",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Unlabelled objects are plentiful and cheap; labels are expensive",
                  "They reflect the true data distribution, so the 'normal' boundary is learned accurately",
                  "The labelled sample alone may miss whole regions of normal behaviour",
                  "The unlabelled pool exposes novel outlier types no label anticipated",
                ],
              },
              {
                q: "Apply the IQR fence rule to salaries 30, 32, 34, 35, 36, 38, 90 (thousands) and identify the outlier.",
                marks: 7,
                outline: [
                  "Q1 = 32, Q3 = 38, IQR = 6",
                  "Lower fence = 32 − 9 = 23; upper fence = 38 + 9 = 47",
                  "90 > 47 -> outlier; all others lie inside the fences",
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
      title: "Web Mining and Emerging Issues",
      summary:
        "Unit V extends the toolkit beyond the warehouse: web mining and its three types (content, structure, usage), text mining with TF-IDF, spatial mining, temporal mining, and the security, privacy and ethical issues that every deployed mining system must answer for.",
      chapter: {
        number: "05",
        title: "Mining the Web and Beyond",
        intro:
          "Unit V covers web mining and its content, structure and usage types, text mining with TF-IDF weighting, spatial mining and its association and clustering tasks, temporal mining of sequences and periodic patterns, security issues including the inference problem, and the privacy and ethical issues of profiling, anonymization and accountable model use.",
        inOneBreath:
          "Web mining splits into content (page text/media), structure (hyperlinks, PageRank/HITS) and usage (server logs, clickstreams); text mining tokenizes, removes stop-words, stems and weights with TF-IDF (term frequency x inverse document frequency); spatial mining extracts patterns from geographic data (colocation rules, spatial clustering); temporal mining finds sequences, periodicity and trends over time; security threats include the inference problem and re-identification, answered by k-anonymity and differential privacy; ethics demands consent, fairness and explainability.",
        sections: [
          {
            number: "5.1",
            title: "Web mining and its types",
            body: [
              "Web mining applies data mining techniques to web data — pages, hyperlinks and logs — to extract patterns and knowledge. The web is the largest but hardest dataset: pages are semi-structured HTML, unstructured text and media; hyperlinks encode judgment ('a link is a vote'); and usage logs record behaviour nobody consciously reported. The syllabus's standard answer splits the field into three types, and the June 2025 paper asked exactly this taxonomy.",
              "Web content mining extracts knowledge from page contents — the text, images, tables and metadata of pages themselves: classifying pages into a topic directory, extracting product names and prices from shop pages, sentiment analysis of reviews. Web structure mining extracts knowledge from the hyperlink graph: which pages link to which, discovering authoritative pages and communities; its flagship algorithms are PageRank (a page is important if important pages link to it — Google's origin) and HITS, which separates hubs (pages that link to many authorities) from authorities (pages many hubs link to). Structure mining also distinguishes intra-page structure (tags, layout) from inter-page structure (links between pages).",
              "Web usage mining extracts patterns from server logs and clickstreams: who visited what, in which order, from where. The pipeline: raw log -> data cleaning (filter images, robots) -> sessionization (group requests into user sessions) -> pattern discovery (frequent navigation sequences, clusters of similar users, association between page visits) -> application (site redesign, personalization, prefetching, recommendation). A worked pattern: logs show 60% of users who view a course page then view the fee page within the same session — support 40% for the rule course-page -> fee-page — driving a redesign that puts fees on the course page itself.",
              "The exam angle: 'What is web mining? Explain its types' was June 2025 Q7a — define web mining, then the three types each with one data source, one technique and one example, and close with the usage-mining pipeline. The three-type taxonomy is the whole skeleton; the examples are the difference between a pass and a first-class answer.",
            ],
            bullets: [
              "Web mining = data mining over page content, hyperlink structure and usage logs.",
              "Content mining: page text/media — classification, extraction, sentiment.",
              "Structure mining: the hyperlink graph — PageRank and HITS (hubs vs authorities).",
              "Intra-page (tags/layout) vs inter-page (links) structure.",
              "Usage mining: server logs -> cleaning -> sessionization -> pattern discovery.",
              "Worked usage pattern: course-page -> fee-page within session, support 40%.",
              "Applications: personalization, site redesign, prefetching, recommendation.",
            ],
            diagram: {
              kind: "fork",
              title: "The three types of web mining",
              caption: "Same toolkit, three different raw materials — and each has a flagship algorithm.",
              start: "Web mining",
              branches: [
                { label: "Content", outcome: "page text/media -> classification, extraction, sentiment", good: true },
                { label: "Structure", outcome: "hyperlink graph -> PageRank, HITS, communities", good: true },
                { label: "Usage", outcome: "server logs -> sessions, navigation sequences, personalization", good: true },
                { label: "Treating the web as one uniform dataset", outcome: "ignores which raw material you actually have", good: false },
              ],
            },
            table: {
              caption: "The three types with sources, techniques and examples.",
              headers: ["Type", "Data source", "Techniques", "Example"],
              rows: [
                ["Content", "page text, tags, media", "text mining, classification", "classify pages into a topic directory"],
                ["Structure", "hyperlink graph", "PageRank, HITS", "rank university homepages by authority"],
                ["Usage", "server logs, clickstreams", "sessionization, sequential mining", "course-page -> fee-page rule"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025",
              body: "June 2025 Q7a: 'What is Web mining? Explain its types.' The answer key expects the definition plus the content/structure/usage taxonomy with one example each. Adding the usage-mining pipeline (clean -> sessionize -> discover) is the usual extra mark.",
            },
            keyTerms: [
              { term: "Web mining", definition: "Applying data mining to web content, structure and usage data." },
              { term: "Web content mining", definition: "Extracting knowledge from what pages contain — text, tags, media." },
              { term: "Web structure mining", definition: "Mining the hyperlink graph for authority, hubs and communities (PageRank, HITS)." },
              { term: "Web usage mining", definition: "Mining server logs and clickstreams for navigation patterns after sessionization." },
              { term: "Sessionization", definition: "Grouping raw log requests into per-user sessions — the preprocessing step of usage mining." },
            ],
            examQuestions: [
              {
                q: "What is web mining? Explain its types — content, structure and usage — with data sources, techniques and one example of each.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: data mining applied to pages, links and logs",
                  "Content: page text/media -> classification, extraction (topic directories)",
                  "Structure: hyperlink graph -> PageRank/HITS, hubs vs authorities",
                  "Usage: logs -> sessionization -> navigation patterns",
                  "Worked usage rule: course-page -> fee-page, support 40%",
                  "Applications: personalization, redesign, recommendation",
                ],
              },
              {
                q: "Explain the PageRank idea and how HITS differs from it.",
                marks: 7,
                outline: [
                  "PageRank: a page is important if important pages link to it — recursive importance",
                  "Query-independent: one score per page",
                  "HITS: two scores per page — hub (links to many authorities) and authority (linked by hubs)",
                  "HITS is query-dependent (computed on a focused subgraph)",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Text mining",
            body: [
              "Text mining extracts patterns and knowledge from unstructured text — documents, reviews, emails, news. Text cannot be mined directly: it must be converted to numbers, and the standard pipeline is: tokenization (split text into words/terms), stop-word removal (drop the-far-and-of-and words that carry no topic), stemming (reduce words to roots — studies, studying, studied -> studi), and vectorization — representing each document as a term-weight vector over the vocabulary.",
              "The standard weighting is TF-IDF: term frequency tf(t, d) = count of t in d / length of d, measuring how central the term is to the document; inverse document frequency idf(t) = log(N / df(t)) where N is the corpus size and df(t) the number of documents containing t, measuring how distinctive the term is; weight w = tf × idf. Worked: a 100-word document using 'data' 3 times has tf = 0.03; if 'data' appears in 100 of 1000 documents, idf = log10(1000/100) = 1, so w = 0.03. A term appearing in only 10 documents has idf = log10(100) = 2 and weight 0.06 — rare-but-present terms are rewarded, ubiquitous terms are discounted ('the' appears in 990 documents: idf ≈ 0.004, weight ~0).",
              "On the vectorized corpus, the mining tasks run: document classification (spam filters, topic directories), document clustering (group similar articles), information retrieval (rank documents by query-term weights), latent topic discovery (LSA/topic models), and sentiment analysis (positive/negative classification of reviews). The worked sentiment shape: a review corpus of 5000 movie reviews classified positive/negative by naive Bayes over TF-IDF vectors reaches ~85% accuracy because words like 'wonderful' and 'boring' carry near-perfect class information — text mining's signature success story.",
              "The exam angle: 'explain text mining and its preprocessing steps; compute TF-IDF' — the four-step pipeline, the TF-IDF formula, and the two-term worked computation (0.03 vs 0.06) showing the reward for distinctiveness. State explicitly why stop-word removal and stemming precede vectorization: they shrink the vocabulary and merge word variants, which makes the term-document matrix smaller and denser in signal.",
            ],
            bullets: [
              "Pipeline: tokenize -> remove stop-words -> stem -> vectorize (TF-IDF).",
              "TF-IDF weight = term frequency x inverse document frequency.",
              "tf = term count / document length; idf = log(N / documents containing the term).",
              "Worked: tf 0.03 with idf 1 -> 0.03; a rarer term (df 10 of 1000) gets idf 2 -> 0.06.",
              "Ubiquitous words are discounted: 'the' in 990 of 1000 docs has idf ~ 0.004.",
              "Tasks on vectors: classification, clustering, retrieval, sentiment analysis.",
              "Worked sentiment: naive Bayes over TF-IDF reaches ~85% on movie reviews.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From raw text to a minable matrix",
              caption:
                "Four preprocessing steps turn unstructured prose into a term-document matrix the miners can work on.",
              stages: [
                { label: "Tokenize", note: "split into terms" },
                { label: "Remove stop-words", note: "drop the, of, and — no topic signal" },
                { label: "Stem", note: "studies/studying -> studi" },
                { label: "Vectorize", note: "TF-IDF weights per term" },
                { label: "Mine", note: "classify, cluster, retrieve" },
              ],
            },
            table: {
              caption: "TF-IDF worked on two terms (1000-document corpus).",
              headers: ["Term", "tf (in the 100-word doc)", "idf", "tf-idf weight"],
              rows: [
                ["data", "3/100 = 0.03", "log10(1000/100) = 1", "0.03"],
                ["clustering", "2/100 = 0.02", "log10(1000/10) = 2", "0.04"],
                ["the", "8/100 = 0.08", "log10(1000/990) ≈ 0.004", "≈ 0.0003"],
              ],
            },
            callout: {
              type: "tip",
              title: "Distinctiveness, not frequency, is the signal",
              body: "TF-IDF's insight: a term is informative when it is frequent in one document but rare across the corpus. 'The' scores high on tf and ~0 on idf; 'clustering' scores moderately on tf and high on idf. Write both factors in any TF-IDF numerical — one-factor answers read as misunderstanding.",
            },
            keyTerms: [
              { term: "Text mining", definition: "Extracting patterns and knowledge from unstructured text collections." },
              { term: "Tokenization", definition: "Splitting text into individual terms — the first preprocessing step." },
              { term: "Stemming", definition: "Reducing word variants to a common root (studies, studying -> studi)." },
              { term: "TF-IDF", definition: "Term frequency x inverse document frequency — rewards rare-but-present terms." },
              { term: "Term-document matrix", definition: "The vectorized corpus: documents as rows, terms as weighted columns." },
            ],
            examQuestions: [
              {
                q: "Explain text mining and its preprocessing pipeline. Compute the TF-IDF weight of a term with tf = 0.03 appearing in 100 of 1000 documents, and contrast it with a ubiquitous term.",
                marks: 7,
                outline: [
                  "Pipeline: tokenize -> stop-word removal -> stemming -> TF-IDF vectorization",
                  "idf = log10(N/df) = log10(1000/100) = 1",
                  "weight = tf x idf = 0.03 x 1 = 0.03",
                  "'the': df 990 -> idf ≈ 0.004 -> weight ~0 despite high tf",
                  "Rare-but-present terms get the highest weights",
                ],
              },
              {
                q: "Why do stop-word removal and stemming precede vectorization in text mining?",
                marks: 7,
                outline: [
                  "Stop-words carry no topic signal but dominate term counts",
                  "Stemming merges word variants into one feature",
                  "Both shrink the vocabulary — smaller, denser term-document matrix",
                  "Downstream classifiers see signal, not grammar",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Spatial mining",
            body: [
              "Spatial mining extracts patterns from geographic and spatial data — maps, satellite images, GIS records, sensor locations — where the key relationships are location, distance and topology rather than equality of attributes. Spatial data differs from relational data structurally: geometry (points, lines, polygons, rasters), spatial relationships (near, inside, adjacent, connected), and spatial aggregation (which are meaningless in ordinary SQL), all served by spatial indexes such as R-trees and quadtrees — a spatial data warehouse with spatial OLAP sits on top.",
              "The mining tasks mirror the classical ones with spatial predicates: spatial association rules over spatial predicates and relationships — 'is_a(x, school) AND close_to(x, park) -> expensive(x)' (property within a kilometre of a school and park tends to be expensive); spatial clustering (grouping locations by density or proximity — the DBSCAN of Unit IV on coordinates; the classic worked task: cluster crime incidents to find hotspots); spatial classification (predicting a class from spatial context — classifying land use from neighbouring features); and spatial trend analysis (how a measure changes with distance from a landmark — 'the closer to the metro, the higher the footfall'). Colocation rules are the spatial generalization of Unit III: 'flamingos and reeds are colocated in wetlands' with a participation-index measure replacing support, because spatial co-occurrence is graded by proximity, not exact co-presence.",
              "A worked spatial association: from a GIS of 100 neighbourhoods, 40 contain schools; of those, 30 are within 1 km of a park; and 24 of those have above-median property prices. Rule 'school AND near-park -> expensive' has support 24/100 = 24% and confidence 24/30 = 80%, with lift = 0.80/P(expensive) = 0.80/0.5 = 1.6 > 1 — a genuinely positive spatial correlation worth acting on. The lift step is the same discipline section 3.3 enforced, applied to location.",
              "The exam angle: June 2025 Q8a asked 'describe spatial and temporal mining with suitable example' as one question — prepare the definition, one spatial association rule with worked support/confidence/lift, one clustering example, and name R-trees/quadtree as the indexing difference from relational systems. The spatial + temporal pairing means the same revision session covers section 5.4.",
            ],
            bullets: [
              "Spatial mining works on geometry, topology and distance — not just attribute equality.",
              "Spatial predicates: close_to, inside, adjacent_to — the atoms of spatial rules.",
              "Spatial association worked rule: school AND near-park -> expensive (24%, 80%, lift 1.6).",
              "Spatial clustering finds hotspots (crime, disease) — DBSCAN on coordinates.",
              "Spatial trend: how a measure changes with distance from a landmark.",
              "Colocation rules generalize basket rules with a participation index.",
              "Spatial indexes: R-tree and quadtree — the structural difference from relational DBMS.",
            ],
            diagram: {
              kind: "layers",
              title: "The spatial mining stack",
              caption:
                "Spatial indexes and warehouses underneath; pattern mining on top — each layer answers a different question.",
              layers: [
                { label: "Applications", note: "mall siting, crime hotspots, epidemiology, land use" },
                { label: "Spatial mining", note: "association (colocation), clustering, classification, trends" },
                { label: "Spatial warehouse + OLAP", note: "spatial aggregation by region, roll-up over maps" },
                { label: "Spatial indexes", note: "R-tree, quadtree — fast near/inside queries" },
                { label: "Raw spatial data", note: "points, lines, polygons, rasters, GPS traces" },
              ],
            },
            table: {
              caption: "Relational vs spatial data handling.",
              headers: ["Aspect", "Relational mining", "Spatial mining"],
              rows: [
                ["Core relationship", "attribute equality", "distance, topology (near, inside)"],
                ["Association measure", "support over co-presence", "participation index over proximity"],
                ["Indexing", "B+ trees", "R-tree, quadtree"],
                ["Worked pattern", "bread -> milk (40%, 67%)", "school AND near-park -> expensive (24%, 80%, lift 1.6)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025 — with temporal",
              body: "June 2025 Q8a asked spatial and temporal mining together in one question ('with suitable example'). Prepare one worked spatial rule (support/confidence/lift) and one temporal pattern, then present both halves — the pairing is the paper's own structure, not an accident.",
            },
            keyTerms: [
              { term: "Spatial mining", definition: "Extracting patterns from geographic data using location, distance and topology." },
              { term: "Spatial association rule", definition: "A rule over spatial predicates, e.g. school AND near-park -> expensive." },
              { term: "Colocation rule", definition: "Spatial co-occurrence pattern measured by participation index instead of support." },
              { term: "R-tree", definition: "A spatial index organizing bounding rectangles for fast near/inside queries." },
              { term: "Spatial hotspot", definition: "A region of unusually high event density found by spatial clustering." },
            ],
            examQuestions: [
              {
                q: "Describe spatial mining with a suitable example — including one spatial association rule with computed support, confidence and lift.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: patterns from maps/GIS via location, distance, topology",
                  "Tasks: spatial association, clustering (hotspots), classification, trends",
                  "Worked rule: school AND near-park -> expensive",
                  "Support 24/100 = 24%; confidence 24/30 = 80%",
                  "Lift = 0.80/0.50 = 1.6 > 1 — genuine positive spatial correlation",
                  "Indexing difference: R-tree/quadtree vs B+ tree",
                ],
              },
              {
                q: "How do colocation rules generalize market-basket association rules to spatial data?",
                marks: 7,
                outline: [
                  "Basket rules need exact co-presence in one transaction",
                  "Spatial features never 'occur in the same transaction' — they are nearby",
                  "Participation index grades co-occurrence by proximity",
                  "Example: flamingos and reeds colocated in wetlands",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Temporal mining",
            body: [
              "Temporal mining extracts patterns from data ordered in time — event sequences, transactions with timestamps, sensor streams — asking what follows what, what repeats, and what is trending. Its pattern vocabulary: sequential patterns (event A usually followed by B within a window — Unit III's machinery with time constraints), periodic patterns (every Friday the ATM in the hostel sees peak withdrawals), calendar-based patterns (month-end salary spikes), and trends (upward drift of data usage). A worked pattern: from 2 years of library logs, 'a student who fails to renew a book on the due date is 3 times more likely to visit the reading room within a week' — support 12%, confidence 71%, lift 3.0 — a temporal rule because the window carries the meaning.",
              "The methods stack as: timestamp and sequence the events; discretize values into states where needed (usage -> {low, medium, high}); mine frequent sequences within min/max gap constraints (GSP, PrefixSpan — the sequential cousins of Apriori); check periodicity by autocorrelation or by counting interval recurrence; validate with lift exactly as section 3.3 taught, because a temporally 'strong' rule can still be negatively correlated against the base rate. Streams add the sliding-window discipline: mine the current window, merge with the running model, expire stale patterns — temporal mining in motion rather than in batch.",
              "The spatial-temporal pairing from the paper deserves one worked composite: 'weekend evenings, customers within 5 km of a multiplex visit the nearby food court within 90 minutes' — support 18%, confidence 64%, lift 2.1. It has a spatial predicate (within 5 km), a temporal window (within 90 minutes) and a calendar condition (weekend evenings): three constraints, one actionable rule for staffing and inventory. This is the 'suitable example' the June 2025 question asked for, usable for either half.",
              "The exam angle: 'describe temporal mining with a suitable example' — define the field, name the four pattern types with one example each, work one sequential rule with its window and lift, and close with the sliding-window/stream sentence. Distinguish temporal mining from plain time-series analysis (3.6): time-series mining works on numeric series; temporal mining works on event sequences — the latter is the syllabus's unit-V topic.",
            ],
            bullets: [
              "Temporal mining: patterns over event sequences — sequences, periodicity, calendar effects, trends.",
              "Sequential patterns with min/max gap constraints — GSP and PrefixSpan.",
              "Worked rule: missed renewal -> reading-room visit within a week (12%, 71%, lift 3.0).",
              "Periodic patterns: every Friday peak; calendar patterns: month-end salary spikes.",
              "Validate with lift — temporal 'strong' rules can still be negatively correlated.",
              "Streams: sliding window -> mine -> merge -> expire stale patterns.",
              "Composite example: weekend evenings, within 5 km -> food court within 90 minutes (18%, 64%, lift 2.1).",
            ],
            diagram: {
              kind: "cycle",
              title: "Mining temporal data streams",
              caption:
                "Temporal mining in motion: each window is mined, merged into the running model, and stale patterns expire.",
              steps: [
                { label: "Timestamp events", note: "sequence the arriving data" },
                { label: "Mine window", note: "frequent sequences within gap constraints" },
                { label: "Merge", note: "update the running pattern model" },
                { label: "Expire", note: "drop patterns not seen in recent windows" },
                { label: "Slide", note: "next window; repeat" },
              ],
            },
            table: {
              caption: "Temporal pattern types with examples.",
              headers: ["Pattern type", "Description", "Worked example"],
              rows: [
                ["Sequential", "A followed by B within a window", "missed renewal -> reading room in 7 days (lift 3.0)"],
                ["Periodic", "repeats at fixed intervals", "Friday ATM withdrawal peak"],
                ["Calendar-based", "tied to dates/month-ends", "salary-day spending spike"],
                ["Trend", "long-term drift", "data usage up 6% per quarter"],
              ],
            },
            callout: {
              type: "tip",
              title: "Temporal is about events, not just numbers",
              body: "Time-series analysis (section 3.6) mines numeric series; temporal mining mines event sequences — who did what in which order. If your answer's only example is a line chart, you have answered the wrong half; give an event rule with a time window.",
            },
            keyTerms: [
              { term: "Temporal mining", definition: "Extracting sequential, periodic and trend patterns from time-ordered event data." },
              { term: "Sequential pattern mining", definition: "Finding frequently occurring ordered event subsequences (GSP, PrefixSpan)." },
              { term: "Periodic pattern", definition: "An event repeating at fixed intervals — weekly, monthly, seasonally." },
              { term: "Sliding window", definition: "A moving time span over which stream patterns are mined and refreshed." },
              { term: "Calendar-based pattern", definition: "A pattern tied to dates — month-end, festival days, salary days." },
            ],
            examQuestions: [
              {
                q: "Describe temporal mining with a suitable example, naming the pattern types and one worked sequential rule with its window.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Definition: patterns over time-ordered events — sequences, periodicity, calendar, trends",
                  "Sequential: missed renewal -> reading-room visit within 7 days (12%, 71%, lift 3.0)",
                  "Periodic: Friday ATM peak; calendar: salary-day spike; trend: usage +6%/quarter",
                  "Mine with GSP/PrefixSpan under min/max gap constraints",
                  "Validate with lift; stream case uses sliding windows",
                  "Composite: weekend evenings, within 5 km -> food court in 90 minutes (18%, 64%, lift 2.1)",
                ],
              },
              {
                q: "Distinguish temporal mining from time-series analysis.",
                marks: 7,
                outline: [
                  "Time-series analysis: numeric values indexed by time (prices, sales)",
                  "Temporal mining: event sequences with order and windows",
                  "Time-series mines components/trends; temporal mines who-did-what-when patterns",
                  "They overlap (both use windows) but the data and outputs differ",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Security issues in data mining",
            body: [
              "Data mining threatens security precisely because it succeeds: patterns that are individually harmless become sensitive in combination. The central problem is inference — combining innocuous, individually accessible data to derive confidential knowledge: nothing in a pharmacy-sales database names patients, but mining purchases by census tract can reveal that a specific small town has an unusual concentration of a medication associated with one condition; the data was public, the inference is private. June 2025 Q7b asked for 'security issues in data mining' — the inference problem is the expected centrepiece.",
              "The issue inventory, each with its defence. Inference attacks (combine permitted datasets to infer forbidden knowledge) — defended by restricting combinations, not just tables: access control must consider derived knowledge, and query auditing tracks what a user has already seen. Re-identification (anonymized records matched back to people — Sweeney showed 87% of Americans are identifiable by ZIP + birth date + gender alone) — defended by k-anonymity (each record indistinguishable from at least k−1 others), l-diversity (sensitive attributes vary within groups) and differential privacy (calibrated noise so single-record presence or absence changes nothing measurable). Model and data theft (mined models are intellectual property; training data can be reconstructed from models) — defended by access control, watermarking, and limiting model exposure. Misuse by insiders and profiling by institutions — the ethical escalation of the same mechanisms.",
              "A worked re-identification arithmetic makes the danger concrete: a 'de-identified' hospital table drops names but keeps (ZIP, birth date, gender); a voter list contains (ZIP, birth date, gender, name). Joining the two on three fields reduces most people to unique matches — the join is the attack, and no single table was breached. The fix changes the data itself: generalize birth dates to years, generalize ZIP to first three digits, until each combination covers k people (k = 5, say) — measurable, checkable, and exactly what the examiner wants named as k-anonymity.",
              "The exam angle: 'describe security issues in data mining' (June 2025 Q7b) — open with the inference problem and one worked inference example, then the inventory (re-identification with the 87% statistic, model theft, insider misuse), each paired with its defence (k-anonymity, l-diversity, differential privacy, access control on derived knowledge). Security is the section where threats-and-defences pairing earns the structure marks.",
            ],
            bullets: [
              "Inference problem: innocuous datasets combined reveal confidential knowledge.",
              "Access control must govern combinations and derived knowledge, not just tables.",
              "Re-identification: 87% of Americans unique by ZIP + birth date + gender (Sweeney).",
              "k-anonymity: every record indistinguishable from k−1 others; l-diversity varies sensitive values.",
              "Differential privacy: calibrated noise so one record's presence is undetectable.",
              "Model theft: mined models and training data are assets worth attacking.",
              "Defence pairing: every threat named with its countermeasure earns the structure marks.",
            ],
            diagram: {
              kind: "fork",
              title: "Where does mining leak knowledge?",
              caption: "Four leak paths — and each has a named countermeasure.",
              start: "A deployed mining system",
              branches: [
                { label: "Inference from permitted data", outcome: "query auditing, combination-restricted access control", good: false },
                { label: "Re-identification of 'anonymized' data", outcome: "k-anonymity, l-diversity, differential privacy", good: false },
                { label: "Model / training-data theft", outcome: "access control, watermarking, limited model exposure", good: false },
                { label: "Privacy-preserving mining by design", outcome: "randomization, secure multiparty computation", good: true },
              ],
            },
            table: {
              caption: "Security threats and defences.",
              headers: ["Threat", "Worked example", "Defence"],
              rows: [
                ["Inference attack", "pharmacy sales by tract -> condition prevalence", "combination control, query auditing"],
                ["Re-identification", "hospital table joined with voter list on ZIP+dob+gender", "k-anonymity (generalize until k-cover)"],
                ["Attribute disclosure", "a k-group where all have one disease", "l-diversity — vary sensitive values"],
                ["Model theft", "reconstructing training data from a released model", "watermarking, restricted model APIs"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in Jun 2025 — lead with inference",
              body: "June 2025 Q7b: 'Describe security issues in data mining.' Open with the inference problem and a worked example, then re-identification with the 87% statistic and k-anonymity as the fix. The pairing of each threat with its defence is what the answer key rewards.",
            },
            keyTerms: [
              { term: "Inference problem", definition: "Deriving confidential knowledge by combining individually accessible, innocuous data." },
              { term: "Re-identification", definition: "Matching anonymized records back to individuals via auxiliary data." },
              { term: "k-anonymity", definition: "Every released record is indistinguishable from at least k−1 others on identifying fields." },
              { term: "l-diversity", definition: "Ensuring sensitive attribute values vary within each k-anonymous group." },
              { term: "Differential privacy", definition: "Adding calibrated noise so any single record's presence or absence is statistically undetectable." },
            ],
            examQuestions: [
              {
                q: "Describe the security issues in data mining — the inference problem, re-identification, model theft and insider misuse — pairing each with its defence.",
                marks: 7,
                appearances: ["Jun 2025"],
                outline: [
                  "Inference: innocuous combinations reveal confidential knowledge (pharmacy example)",
                  "Defence: access control on combinations/derived knowledge, query auditing",
                  "Re-identification: 87% unique by ZIP + birth date + gender (Sweeney)",
                  "Defence: k-anonymity via generalization/suppression, plus l-diversity",
                  "Model theft: reconstructing data from released models",
                  "Defence: watermarking, restricted APIs",
                  "Close: privacy-preserving mining (randomization, secure computation) as design-level fix",
                ],
              },
              {
                q: "Explain k-anonymity and l-diversity. Why is k-anonymity alone not sufficient?",
                marks: 7,
                outline: [
                  "k-anonymity: generalize/suppress until each record matches k−1 others",
                  "Protects identity but not attributes",
                  "If all k members of a group share one sensitive value, the value is disclosed",
                  "l-diversity requires l distinct sensitive values per group",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Privacy and ethical issues",
            body: [
              "Privacy issues in data mining go beyond security: even legally collected, correctly stored data can be mined into surveillance. Profiling without consent: retailers mine purchase histories into individual pregnancy/budget/health profiles and act on them before the customer knows — the famous case of a retail chain detecting a teenager's pregnancy from shopping patterns and mailing baby coupons to her home. Function creep: data collected for one purpose (billing) is mined for another (credit decisions) without new consent. Data retention: the longer history is kept, the more patterns exist and the more the archive is worth attacking. Anonymity is fragile: section 5.5's re-identification arithmetic applies to every 'anonymized' dataset mined for research.",
              "The technical toolkit is anonymization and privacy-preserving mining: generalization (birth date -> year), suppression (drop rare identifying values), k-anonymity and l-diversity for identity and attribute protection, randomization (perturb values before mining, recover distributions afterwards) and differential privacy (noise calibrated to a privacy budget ε) for publishable statistics and models. The trade-off is explicit and examinable: privacy mechanisms reduce data utility — generalized data answers coarser queries; noised results carry wider intervals — and the practitioner's job is choosing the point on that frontier the application can afford.",
              "Ethical issues are the human layer above the technical one. Fairness: mined credit or hiring models inherit historical bias — a model trained on discriminatory approvals reproduces the discrimination at scale; the defence is bias auditing across demographic groups before deployment. Transparency and explainability: a loan applicant deserves a reason ('income below threshold for 24 months'), not a black-box score. Accountability: someone must own the model's decisions — the institution, not 'the algorithm'. Consent and dignity: mining personal behaviour for profit without meaningful consent is an ethical failure even when legal. The June 2025 paper's security question (7b) is the companion piece — ethics is where 'can we mine it?' meets 'should we?'.",
              "The exam angle: 'discuss privacy and ethical issues in data mining' — name profiling with the pregnancy-detection case, function creep and retention; give the anonymization toolkit with the utility trade-off; then the three ethical pillars (fairness, transparency, accountability) each with one sentence. Close by connecting to security: anonymity is technical, ethics is institutional — both required.",
            ],
            bullets: [
              "Profiling without consent: pregnancy detection from shopping patterns — the canonical case.",
              "Function creep: billing data mined for credit decisions without new consent.",
              "Retention: long archives are pattern-rich and attack-worthy — define retention limits.",
              "Toolkit: generalization, suppression, k-anonymity, l-diversity, randomization, differential privacy.",
              "Trade-off: privacy mechanisms buy anonymity with reduced data utility.",
              "Ethical pillars: fairness (bias audit), transparency (explainable decisions), accountability (an owner).",
              "Ethics answers 'should we?' — security answers 'can it leak?' — both required.",
            ],
            diagram: {
              kind: "matrix",
              title: "Mapping data by sensitivity and identifiability",
              caption:
                "The quadrants prescribe the treatment — and the top-right cell is where anonymization budgets go.",
              axes: { x: "Identifiability (aggregate -> unique)", y: "Sensitivity (low -> high)" },
              quadrants: [
                { label: "Publishable statistics", note: "aggregate, insensitive — share freely" },
                { label: "Sensitive aggregates", note: "anonymize + differential privacy before release" },
                { label: "Unique but benign", note: "pseudonymize; watch for linkage (ZIP + dob + gender)" },
                { label: "Unique and sensitive", note: "highest risk — k-anonymity, l-diversity, strict access" },
              ],
            },
            table: {
              caption: "Anonymization techniques and their properties.",
              headers: ["Technique", "How it works", "Protects against", "Cost"],
              rows: [
                ["Generalization", "birth date -> year, ZIP -> 3 digits", "re-identification", "coarser queries"],
                ["Suppression", "drop rare identifying values", "unique outliers", "information loss"],
                ["Randomization", "perturb values before mining", "exact recovery", "noisy individual records"],
                ["Differential privacy", "calibrated noise on outputs", "any single-record inference", "wider result intervals"],
              ],
            },
            callout: {
              type: "warning",
              title: "Anonymity is arithmetic, not a label",
              body: "Calling a dataset 'anonymized' changes nothing — identifiability is a property of the combination of fields. ZIP + birth date + gender alone identifies 87% of Americans. Before releasing or mining 'anonymized' data, count the k: if groups are smaller than the promised k, the label is false.",
            },
            keyTerms: [
              { term: "Profiling", definition: "Building individual behaviour models from mined personal data, often without consent." },
              { term: "Function creep", definition: "Using data collected for one purpose for another, unconsented purpose." },
              { term: "Fairness (in mining)", definition: "Auditing models for discriminatory outcomes across demographic groups." },
              { term: "Privacy budget (epsilon)", definition: "The total privacy loss allowed in differential privacy releases." },
              { term: "Explainability", definition: "The obligation that automated decisions come with human-readable reasons." },
            ],
            examQuestions: [
              {
                q: "Discuss the privacy and ethical issues of data mining, with the anonymization toolkit and the utility trade-off.",
                marks: 7,
                outline: [
                  "Profiling without consent (retail pregnancy-detection case)",
                  "Function creep and excessive retention",
                  "Toolkit: generalization, suppression, k-anonymity, l-diversity, randomization, differential privacy",
                  "Trade-off: privacy mechanisms reduce data utility — choose the frontier point",
                  "Ethics: fairness (bias audit), transparency (explainable loans), accountability (an owner)",
                  "Close: security answers leakage; ethics answers consent and duty",
                ],
              },
              {
                q: "Why can a legally collected dataset still be unethical to mine?",
                marks: 7,
                outline: [
                  "Consent was for the original purpose, not for profiling",
                  "Mined inferences (health, pregnancy, wealth) exceed what the person shared knowingly",
                  "Biased historical data reproduces discrimination at scale",
                  "Black-box decisions deny applicants explainable reasons",
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
      heading: "Exam weightage — where to spend the hours",
      weightedTopics: [
        { topic: "KDP and data preprocessing (cleaning, transformation)", weight: "≈ 14-21 marks", note: "Asked twice in Jun 2025 (Q1a KDP steps, Q3b KDP detail) plus missing values (Q2b) and transformation strategies (Q2a) — four questions touch this block." },
        { topic: "Schemas, OLAP operations and servers", weight: "≈ 14 marks", note: "Jun 2025 Q1b (ROLAP/MOLAP + operations) and Q3a (University snowflake diagram) — the diagram is the marks." },
        { topic: "Apriori and association rule metrics", weight: "≈ 14 marks", note: "Jun 2025 Q4b (prove downward closure) and Q4a (strong rule negatively correlated) — proof + worked lift example." },
        { topic: "K-Means and clustering families", weight: "≈ 14 marks", note: "Jun 2025 Q8b (algorithm with example) and Q5b (local optimum example) — the iteration trace is expected." },
        { topic: "Decision trees and pruning", weight: "≈ 7 marks", note: "Jun 2025 Q5a — pruning usefulness plus the separate-pruning-set drawback; carry entropy/gain numbers too." },
        { topic: "Outlier analysis", weight: "≈ 14 marks", note: "Jun 2025 Q6a (clustering-based outliers at different levels) and Q6b (semi-supervised, unlabelled objects) — two full halves on one topic." },
        { topic: "Web mining types and security issues", weight: "≈ 14 marks", note: "Jun 2025 Q7a (web mining types) and Q7b (security issues) — taxonomy + inference problem." },
        { topic: "Spatial/temporal mining, FP-Growth, accuracy metrics", weight: "≈ 7-14 marks", note: "Jun 2025 Q8a covers spatial + temporal; FP-Growth and confusion-matrix numericals are classic examiner additions — prepare the FP-tree and one metric set." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for past-paper questions. Every algorithm here is answerable by hand — do each worked trace on paper at least twice; the June 2025 paper rewards computed numbers, not definitions alone.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — data warehousing", tasks: ["Inmon's four characteristics + basic elements", "Three-tier architecture and data marts (dependent vs independent)", "ETL pipeline: extract, clean, transform, load", "Star, snowflake, galaxy — draw all three; then the University snowflake from Jun 2025 Q3a", "Horizontal vs vertical partitioning with examples"] },
        { week: "Week 2", focus: "Unit I OLAP + Unit II preprocessing", tasks: ["Data cube, five OLAP operations with one cube", "ROLAP vs MOLAP vs HOLAP table + sparse-cube arithmetic", "Bitmap index worked query (N or E AND M)", "Missing values: six methods; binning trace 4,8,15... -> smoothed bins", "Integration redundancy tests; normalization triple (0.458, -0.167, 0.72)"] },
        { week: "Week 3", focus: "Unit II reduction + KDP, Unit III metrics", tasks: ["Reduction families + stratified sampling on the fraud case", "Discretization methods (mark the supervised two)", "Seven KDP steps with the churn trace — write it twice", "Support/confidence on the 5-transaction basket database", "Lift and the games/videos negative-correlation example"] },
        { week: "Week 4", focus: "Unit III algorithms", tasks: ["Apriori candidate table C1->L1->C2->L2->C3 on the same database", "Prove the Apriori property in one line — Jun 2025 Q4b", "FP-Growth: build the FP-tree, mine butter's conditional base", "Multi-level rules: three support strategies + redundancy filter", "Time-series components; latest trends short notes with mechanisms"] },
        { week: "Week 5", focus: "Unit IV — classification and clustering", tasks: ["Distance measures: compute 7, 5, 4 for A(2,3), B(5,7); cosine for text", "Clustering taxonomy + hard vs fuzzy + crescents argument", "K-Means trace on {2,4,10,12} + vertical-lines local optimum (154 vs 16)", "Entropy/gain computation (0.048 vs 0.159) + pruning answer", "Naive Bayes on the 6-row weather table with Laplace smoothing"] },
        { week: "Week 6", focus: "Unit IV metrics/outliers + Unit V + revision", tasks: ["Confusion matrix: accuracy 0.70, precision 0.80, recall 0.667, F1 0.727", "K-fold CV and the imbalance argument", "Outliers: IQR fences, clustering-based multi-level method, semi-supervised advantage", "Web mining types; security (inference + k-anonymity); privacy/ethics pillars", "Two timed full papers; last-day sheet of formulas and diagrams"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "The paper's format is fixed: 8 questions of 14 marks (a/b halves of 7 each), attempt any five — scan all 16 halves first and bank the four you can answer completely before committing time.",
        "Pair every algorithm with its artifact: Apriori with the candidate table, FP-Growth with the tree, K-Means with the iteration trace, Bayes with the two unnormalized scores. The artifact is half the marks.",
        "For KDP (asked twice in Jun 2025), write the seven steps in order and attach the churn worked trace — the steps alone read as memorization; the trace reads as understanding.",
        "In every numerical, state thresholds and formulas before computing: minsup/minconf for association, min-depth for binning, Q1/Q3 before fences.",
        "For any association rule, compute lift before concluding — Jun 2025 Q4a exists precisely to catch confidence-only answers.",
        "Draw schemas and cubes: the University snowflake needs labelled boxes and keys; the OLAP operations answer needs a cube sketch. Unlabelled diagrams score half.",
        "State assumptions unprompted: 'K-Means converges to a local optimum'; 'naive Bayes assumes conditional independence'; 'accuracy misleads on imbalance'. These sentences are the answer key's own lines.",
        "Time-box: a 7-mark half in 18-20 minutes, leaving ~15 minutes at the end to add the lift line, the Laplace note or the diagram label that recovers an easy mark.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: do not learn anything new. Morning — one page of formulas (support/confidence/lift, entropy and gain, the three normalizations, precision/recall/F1, min-max/z-score/decimal scaling) and the five diagrams (three schemas, cube with operations, FP-tree, K-Means loop, confusion matrix). Afternoon — rewrite the four worked traces by hand: Apriori candidates on the 5-transaction database, K-Means on {2, 4, 10, 12}, naive Bayes on the 6-row weather table, and the games/videos lift computation. Evening — the seven KDP steps and the six missing-value methods, recited in order; then sleep. The Jun 2025 paper shows exactly these artifacts are what gets marked.",
        "Common slips below are the ones the paper's own questions are built to catch — Q4a catches confidence-only answers, Q4b catches missing proofs, Q5a catches unexplained pruning, Q5b catches 'K-Means always finds the best clustering'.",
      ],
      bullets: [
        "Writing confidence without lift — a 66.7% rule can be negatively correlated (Jun 2025 Q4a's exact trap).",
        "Claiming Apriori prunes C3 by support — pruning is subset inspection; counting is support. Jun 2025 Q4b wants the proof line support(A) >= support(S) >= minsup.",
        "Forgetting to order items by descending frequency in the FP-tree — unordered insertion destroys prefix sharing.",
        "Drawing the snowflake with measures in dimension tables — measures belong to the fact only.",
        "Stopping K-Means at iteration 2 without showing the no-change iteration — convergence must be demonstrated.",
        "Mixing FP and FN in the confusion matrix — precision divides by (TP+FP), recall by (TP+FN); draw the matrix first.",
        "Answering 'web mining' with one type — the taxonomy (content, structure, usage) is the question's whole skeleton.",
        "Filling missing values with the global mean when the class-wise mean or predicted value is asked for — the Jun 2025 answer key orders methods by sophistication.",
        "Saying K-Means 'always finds the global optimum' — Jun 2025 Q5b exists to disprove exactly that sentence.",
        "Leaving the time window out of an inter-transaction rule — without 'within N days' it is a plain basket rule.",
      ],
    },
  ],
};
