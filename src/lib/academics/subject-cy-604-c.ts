import type { AcademicSubject } from "./types";

export const cy604c: AcademicSubject = {
  id: "cy-604-c",
  code: "CY-604(C)",
  title: "Dataware Housing & Mining",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: the warehouse and its ETL and schemas, OLAP and the multidimensional cube, data mining from preprocessing through the KDP, association rules from Apriori to FP-Growth, and classification and clustering from K-Means to outlier analysis.",
  description:
    "Five units walk from the need for data warehousing - elements, marts, architectures, ETL, star, snowflake and galaxy schemas, partitioning - through OLAP technology and multidimensional models with ROLAP, MOLAP, cube computation and indexing, into data mining preprocessing, the KDP, web, text and spatial mining with its security and privacy questions, then association rule mining - support, confidence, Apriori, multi-level rules, FP-Growth, time series and trends - ending with classification and clustering: distance measures, K-Means, decision trees, Bayes, prediction accuracy and outlier analysis.",
  accentColor: "#ec4899",
  emoji: "DW",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Data Warehousing",
      summary:
        "Unit I builds the foundation: the need for data warehousing, its basic elements, data marts and warehouse architecture, the extract-load process with data cleaning and transformation, facts and dimensions in the star schema, the snowflake and galaxy alternatives, and the horizontal and vertical partitioning strategies.",
      chapter: {
        number: "01",
        title: "The Warehouse Foundation",
        intro:
          "Unit I covers the need for data warehousing, basic elements of a data warehouse, data marts, data warehouse architecture, the extract and load process, cleaning and transforming data, star, snowflake and galaxy schemas for multidimensional databases, fact and dimension data, and the partitioning strategy of horizontal and vertical partitioning.",
        inOneBreath:
          "A warehouse is subject-oriented, integrated, time-variant and non-volatile - the decision-support store separated from operational systems. ETL extracts from sources, cleans and transforms, loads into dimensional models: facts (the measures at a grain) surrounded by denormalized dimensions in star schemas, normalized in snowflakes, shared in galaxies - partitioned horizontally by time or key and vertically by columns for manageability and speed.",
        sections: [
          {
            number: "1.1",
            title: "The need for data warehousing",
            body: [
              "The need argument starts from the operational-analytical split: operational systems (OLTP - order entry, banking, reservations) are optimized for transactions - small, fast, current, protected; analytical work (OLAP - trends, comparisons, forecasts) needs the opposite - broad history, integration across systems, and queries that scan millions of rows. Running analytics on operational systems degrades both: the scans choke the transactions, and the operational data was never designed for analysis (fragmented across systems, inconsistent codes, no history). The warehouse is the answer: a separate, purpose-built store for decision support.",
              "Inmon's definition is the syllabus's canonical sentence: a data warehouse is a subject-oriented, integrated, time-variant, non-volatile collection of data in support of management's decision-making process. Each property is a requirement in disguise: subject-oriented (organized by subjects - customer, product, sales - not by applications), integrated (heterogeneous sources merged under one encoding - codes, formats, units reconciled), time-variant (five to ten years of history with explicit time dimensions), non-volatile (loaded and read; no transactional updates). A worked contrast: a bank's OLTP system answers 'what is account 501's balance?' in milliseconds; the warehouse answers 'how did savings balances trend by branch per quarter for five years?' - a query the operational store cannot serve at all.",
              "The consequence completes the need case: decision quality inherits data quality, and the warehouse is where fragmentation ends - one integrated, historical, consistent copy of the business's facts. The exam's sentence: the warehouse exists because analysis and transactions have opposite physics - OLTP for the moment, OLAP for the decade - and no single store can serve both well. The bank contrast is the worked need - one query answerable, one unanswerable, one store built for the second.",
            ],
            keyTerms: [
              { term: "OLTP", definition: "Online transaction processing - small, fast, current operations on operational systems." },
              { term: "OLAP", definition: "Online analytical processing - broad, historical, aggregating analysis queries." },
              { term: "Inmon's definition", definition: "Subject-oriented, integrated, time-variant, non-volatile - the canonical warehouse definition." },
              { term: "Time-variant", definition: "Years of history with explicit time dimensions - the analytical memory." },
            ],
            table: {
              caption: "OLTP vs OLAP - the physics split.",
              headers: ["Property", "OLTP (operational)", "OLAP (warehouse)"],
              rows: [
                ["Work", "Short transactions", "Long analytical scans"],
                ["Data span", "Current state", "5-10 years of history"],
                ["Design", "Application-oriented, normalized", "Subject-oriented, dimensional"],
                ["Access", "Read/write, row-level", "Mostly read, aggregate-heavy"],
                ["Measure", "Transactions per second", "Query response over millions of rows"],
                ["Users", "Clerks, applications", "Analysts, decision makers"],
              ],
            },
            bullets: [
              "Analysis and transactions have opposite physics - the split is the need.",
              "Inmon's four properties are four requirements: subject, integration, history, stability.",
              "Worked contrast: balance query in ms vs five-year trend query - unanswerable on OLTP.",
              "Integration reconciles codes, formats and units across heterogeneous sources.",
              "Non-volatile: load and read - no transactional updates in the warehouse.",
              "Decision quality inherits data quality - the warehouse is where fragmentation ends.",
            ],
            diagram: {
              kind: "compare",
              title: "Operational systems vs the warehouse",
              caption: "Moment versus decade - the two workloads no single store serves well.",
              left: {
                heading: "OLTP systems",
                items: [
                  "Current, normalized, application-oriented",
                  "Small fast transactions, heavy locking",
                  "Fragmented codes across systems",
                  "Analysis queries choke transactions",
                ],
              },
              right: {
                heading: "Data warehouse",
                items: [
                  "Historical, dimensional, subject-oriented",
                  "Integrated under one encoding",
                  "Built for scans and aggregation",
                  "Loaded and read - non-volatile",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Recite the four properties as requirements",
              body: "The definition question's full-credit move: state Inmon's sentence, then convert each property into a requirement - subject-oriented = dimensional design, integrated = ETL reconciliation, time-variant = history tables, non-volatile = load-and-read architecture. The conversion proves understanding beyond recall.",
            },
            examQuestions: [
              {
                q: "Explain the need for data warehousing via the OLTP/OLAP split, state Inmon's definition with each property converted into a requirement, and work the bank's balance-versus-trend contrast.",
                marks: 14,
                outline: [
                  "OLTP: small current transactions; OLAP: broad historical scans",
                  "Analytics on OLTP degrades both sides",
                  "Definition: subject-oriented, integrated, time-variant, non-volatile",
                  "Subject-oriented -> dimensional organization by business subjects",
                  "Integrated -> heterogeneous codes reconciled in ETL",
                  "Time-variant -> 5-10 years; non-volatile -> load-and-read",
                  "Bank trace: ms balance query vs unanswerable five-year trend",
                ],
              },
              {
                q: "Why is a warehouse described as non-volatile?",
                marks: 7,
                outline: [

                  "Data is loaded and read, not transactionally updated",

                  "Changes arrive as new loads (snapshots, corrections)",

                  "Stability protects historical analyses from silent drift",

                  "Corrections arrive as compensating entries, not overwrites",

                  "Analyses remain reproducible across load cycles",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "Basic elements and the warehouse architecture",
            body: [
              "The warehouse's basic elements form a pipeline, and the syllabus's list walks it: source systems (the operational databases and external feeds), the ETL stage (extract, clean, transform - 1.4), the warehouse storage itself (the integrated, historical store organized dimensionally), data marts (departmental subsets - 1.3), the metadata repository (the warehouse's catalog: schema definitions, transformation rules, lineage, load schedules - 'the data about the data'), and the access layer (query and reporting tools, OLAP servers, data mining - Units II-V).",
              "The architecture arranges the elements, and the syllabus's 'architecture' covers the tiers: the source tier feeding the staging area; the storage tier - the enterprise warehouse (the integrated whole) plus dependent data marts built from it; the delivery tier serving analysts; and metadata threading through all tiers. A worked element trace follows one fact: a sales row is extracted from the POS database (source), cleansed of its 'INR/-1' price anomalies (clean), converted to the warehouse's standard units and codes (transform), loaded into the sales fact table (storage), summarized into the marketing mart (mart), documented in metadata (lineage: source POS.db -> clean rule R12 -> fact sales_f), and queried by an OLAP user (access). Six elements, one row - the pipeline in motion.",
              "The metadata's special role completes the section: it is the warehouse's self-description - what data exists, where it came from, how it was transformed, when it was loaded - without which integration claims cannot be audited (and in this syllabus's security frame, without which lineage cannot be proven). The exam's sentence: the warehouse is a pipeline of six elements bound by metadata - sources feed ETL feeds storage feeds marts feed access, with the catalog describing every step.",
            ],
            keyTerms: [
              { term: "Metadata repository", definition: "The catalog: schemas, transformation rules, lineage, schedules." },
              { term: "Staging area", definition: "The intermediate zone between sources and storage where ETL operates." },
              { term: "Data lineage", definition: "The recorded path of every fact from source to report." },
              { term: "Enterprise warehouse + marts", definition: "The integrated whole plus its departmental subsets." },
            ],
            table: {
              caption: "The six basic elements.",
              headers: ["Element", "Role", "Worked example"],
              rows: [
                ["Sources", "Operational DBs, external feeds", "POS database"],
                ["ETL / staging", "Extract, clean, transform, load", "rule R12 fixes price anomalies"],
                ["Warehouse storage", "Integrated, historical, dimensional", "sales fact table"],
                ["Data marts", "Departmental subsets", "marketing mart"],
                ["Metadata", "Catalog, lineage, schedules", "POS.db -> R12 -> sales_f"],
                ["Access layer", "Query, OLAP, mining tools", "analyst's OLAP query"],
              ],
            },
            bullets: [
              "Elements: sources -> staging/ETL -> storage -> marts -> access, with metadata binding all.",
              "Metadata is the self-description: schemas, lineage, transformation rules.",
              "Worked trace: one sales row's path through all six elements.",
              "Enterprise warehouse holds the whole; marts serve departments.",
              "Lineage is auditable proof of integration - the security angle's anchor.",
              "Sentence: a pipeline of elements bound by metadata.",
            ],
            diagram: {
              kind: "layers",
              title: "The warehouse architecture",
              caption: "Source to access, metadata threading every tier.",
              layers: [
                { label: "Access layer", note: "query, reporting, OLAP, mining tools" },
                { label: "Data marts", note: "departmental subsets (dependent)" },
                { label: "Warehouse storage", note: "integrated, historical, dimensional store" },
                { label: "Staging / ETL", note: "extract, clean, transform, load" },
                { label: "Source systems", note: "operational DBs and external feeds" },
              ],
            },
            callout: {
              type: "tip",
              title: "Metadata is the exam's differentiator",
              body: "Most students list sources-ETL-storage-marts and stop. The differentiating element is metadata - the catalog that makes integration auditable and lineage provable. 'The data about the data' is the phrase examiners look for; attach the lineage trace as the worked proof.",
            },
            examQuestions: [
              {
                q: "Describe the basic elements of a data warehouse and its tiered architecture, tracing one sales fact through all six elements including the metadata record.",
                marks: 14,
                outline: [
                  "Elements: sources, ETL/staging, storage, marts, metadata, access",
                  "Architecture: source tier, storage tier (enterprise + marts), delivery tier",
                  "Trace: POS extract -> clean (R12) -> transform -> fact load",
                  "Summarize into marketing mart; document lineage",
                  "Access: OLAP query served from the mart",
                  "Metadata: schemas, rules, lineage, schedules - the audit layer",
                  "Sentence: six elements bound by metadata",
                ],
              },
              {
                q: "Why does lineage matter for a warehouse used in regulated reporting?",
                marks: 7,
                outline: [

                  "Regulators ask where a reported number came from",

                  "Lineage reconstructs source -> transformation -> fact",

                  "Without it, integration claims are unverifiable",

                  "Audit replays rebuild the reported figure on demand",

                  "Transformation rules are the evidence, not testimony",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Data marts and warehouse architecture strategies",
            body: [
              "A data mart is a subject-specific subset of warehouse data serving one department - marketing's marts carry campaign-relevant facts, finance's carry ledger summaries. Marts come in three builds, and the choice is the architecture strategy the syllabus names. Top-down (Inmon): build the enterprise warehouse first, derive dependent marts from it - consistent by construction, slower to first value. Bottom-up (Kimball): build departmental marts first from sources, integrate via conformed dimensions later - fast to value, consistency earned through discipline. Federated: integrate existing marts and systems on demand - pragmatic, weakest consistency.",
              "A worked strategy contrast fixes the trade. A retail chain needs marketing's campaign analysis this quarter and finance's consolidated view next year: bottom-up delivers marketing's mart from POS sources in weeks, with conformed dimensions (the shared customer and product definitions) agreed upfront as the integration promise; top-down spends the quarter building the enterprise warehouse first, then derives both marts - consistent, late. The conformed-dimension discipline is Kimball's answer to the consistency risk: the customer dimension built once, shared by every mart, is what makes bottom-up marts joinable into an enterprise picture later.",
              "The decision logic completes the section: strong enterprise-wide governance and patience -> top-down; urgent departmental needs and strong dimension stewardship -> bottom-up; legacy sprawl and limited mandate -> federated. The exam's sentence: data marts are the warehouse's departmental subsets, and the top-down versus bottom-up choice is really a choice about when consistency is bought - by construction or by conformed-dimension discipline.",
            ],
            keyTerms: [
              { term: "Data mart", definition: "A subject-specific subset serving one department." },
              { term: "Top-down (Inmon)", definition: "Enterprise warehouse first; dependent marts derived - consistent by construction." },
              { term: "Bottom-up (Kimball)", definition: "Marts first; conformed dimensions carry the consistency promise." },
              { term: "Conformed dimensions", definition: "Shared dimension definitions making separate marts joinable." },
            ],
            table: {
              caption: "The three mart strategies.",
              headers: ["Strategy", "Build order", "Consistency", "Time to value"],
              rows: [
                ["Top-down (Inmon)", "Enterprise warehouse -> dependent marts", "By construction", "Slow"],
                ["Bottom-up (Kimball)", "Marts -> conformed dimensions -> integration", "By discipline", "Fast"],
                ["Federated", "Integrate existing marts on demand", "Weakest", "Immediate but fragile"],
              ],
            },
            bullets: [
              "Mart = subject-specific subset: marketing, finance, sales marts.",
              "Top-down: consistency by construction, slower first delivery.",
              "Bottom-up: fast delivery; conformed dimensions earn consistency.",
              "Federated: pragmatic integration of what exists - weakest guarantees.",
              "Worked trace: retail chain delivers marketing first, finance next - Kimball path.",
              "Sentence: the strategy choice is when consistency is bought.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the mart strategy",
              caption: "Governance, urgency and mandate decide the build order.",
              start: "Warehouse programme",
              branches: [
                { label: "Strong governance, patient sponsors", outcome: "top-down - enterprise warehouse first, consistent marts derived", good: true },
                { label: "Urgent departmental needs", outcome: "bottom-up - marts first; conformed dimensions hold the promise", good: true },
                { label: "Legacy sprawl, limited mandate", outcome: "federated - integrate what exists; weakest consistency", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Conformed dimensions are Kimball's insurance",
              body: "The bottom-up risk is inconsistent marts that never join; the fix is the conformed dimension - one customer and product definition shared by every mart. 'Bottom-up buys speed; conformed dimensions buy the future integration' is the sentence that shows you understand the trade.",
            },
            examQuestions: [
              {
                q: "Define data marts and contrast the top-down, bottom-up and federated strategies with a worked retail-chain trace and the conformed-dimension discipline.",
                marks: 14,
                outline: [
                  "Mart: subject-specific departmental subset",
                  "Top-down: enterprise first, dependent marts - consistent, slow",
                  "Bottom-up: marts first, conformed dimensions - fast, disciplined",
                  "Federated: integrate existing stores - pragmatic, fragile",
                  "Retail trace: marketing mart in weeks; finance mart next year",
                  "Conformed customer/product dimensions make marts joinable",
                  "Decision: governance, urgency and mandate set the strategy",
                ],
              },
              {
                q: "What makes a dimension 'conformed'?",
                marks: 7,
                outline: [

                  "One definition: same attributes, codes and hierarchies everywhere",

                  "Identical join keys across all marts",

                  "Drill-across reports work across marts",

                  "Attribute synonyms are resolved once, centrally",

                  "Stewardship owns changes across all marts simultaneously",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "The extract-load process: cleaning and transforming",
            body: [
              "ETL is where integration actually happens, and the syllabus's stages are its steps. Extract: read from sources - full extraction (everything, simple, heavy) or incremental (changed rows only, via timestamps/change logs). Clean: fix the source data's sins - missing values (defaults, imputation), inconsistent codes ('M' vs 'Male' vs '1'), out-of-range values (price -1), duplicates, and conflicts across sources. Transform: convert to the warehouse's standard - format conversions, units (paise to rupees), derived attributes (age from birth date), denormalization into the dimensional shape. Load: move into the warehouse's tables with indexing and aggregation updates, scheduled into load windows.",
              "A worked cleaning-and-transform trace fixes the discipline. Batch input from three branch systems: extraction pulls 2M rows incrementally by timestamp; cleaning catches 4,100 rows - 300 missing customer IDs (imputed from the account table), 2,400 date-format conflicts (dd/mm vs mm/dd reconciled by source rule), 900 duplicate transactions (dropped by transaction-id), 500 out-of-range prices (flagged to source for correction, loaded to quarantine); transformation converts branch currencies to INR, derives age bands, maps 'M/F/1/0' to the standard gender code; loading updates the fact table, the dimension SCDs (slowly changing dimensions - type 2 history rows) and the aggregates. 2M rows in, 2M accounted for - every row's fate recorded in metadata.",
              "The quality economics complete the section: dirty data is not an ETL inconvenience but the warehouse's core risk - analysis on uncleaned integration multiplies the error into every report (the 'garbage in, garbage out' amplified by aggregation), which is why cleaning rules are documented, auditable metadata (1.2's lineage) and quarantine (not silent dropping) is the policy for unresolvable rows. The exam's sentence: ETL is where the warehouse earns its 'integrated' property - extract incrementally, clean explicitly, transform to standard, load completely, and record every row's fate.",
            ],
            keyTerms: [
              { term: "Incremental extraction", definition: "Changed rows only, via timestamps or change logs." },
              { term: "Quarantine", definition: "Holding area for unresolvable rows - never silently dropped." },
              { term: "Slowly changing dimensions (SCD)", definition: "Type 2 history rows tracking dimension changes over time." },
              { term: "Data cleansing", definition: "Missing values, code conflicts, duplicates, ranges - fixed explicitly." },
            ],
            table: {
              caption: "The cleaning ledger for one 2M-row batch.",
              headers: ["Problem", "Count", "Action"],
              rows: [
                ["Missing customer IDs", "300", "Imputed from account table"],
                ["Date-format conflicts", "2,400", "Reconciled by source rule"],
                ["Duplicate transactions", "900", "Dropped by transaction-id"],
                ["Out-of-range prices", "500", "Quarantined; source notified"],
                ["Clean and loaded", "1,999,500 + 500 quarantined", "Every row accounted"],
              ],
            },
            bullets: [
              "Extract: full or incremental by timestamp/change-log.",
              "Clean: missing, codes, duplicates, ranges - explicit, auditable rules.",
              "Transform: units, formats, derivations, denormalization into dimensions.",
              "Load: facts, SCD type-2 history, aggregates - inside load windows.",
              "Worked ledger: 2M in, 4,100 cleaned actions, every row accounted.",
              "Quarantine over silent drops; cleaning rules live in metadata.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The ETL pipeline",
              caption: "Extract, clean, transform, load - with quarantine and metadata recording every fate.",
              stages: [
                { label: "Extract", note: "incremental by timestamp" },
                { label: "Clean", note: "impute, reconcile, deduplicate, flag ranges" },
                { label: "Transform", note: "units, codes, derivations; dimensional shape" },
                { label: "Load", note: "facts + SCD history + aggregates" },
                { label: "Metadata", note: "lineage and rules recorded throughout" },
              ],
            },
            callout: {
              type: "warning",
              title: "Aggregation amplifies dirty data",
              body: "The risk sentence that motivates strict cleaning: 'one bad source row is noise in a detail report; the same row aggregated into a regional total corrupts every summary above it.' Cleaning is not cosmetic - uncleaned integration multiplies errors upward through the dimensional hierarchy.",
            },
            examQuestions: [
              {
                q: "Explain the extract-load process with cleaning and transformation stages, work the 2M-row cleaning ledger, and state the quarantine and metadata policies.",
                marks: 14,
                outline: [
                  "Extract: full vs incremental by timestamp/change-log",
                  "Clean: missing IDs imputed; formats reconciled; duplicates dropped",
                  "Out-of-range: quarantined with source notification",
                  "Transform: units, standard codes, derived attributes, SCD history",
                  "Load: facts + aggregates inside load windows",
                  "Ledger: 2M in, every row accounted, rules in metadata",
                  "Risk: aggregation amplifies uncleaned errors upward",
                ],
              },
              {
                q: "What is an SCD type 2 change and why does the warehouse need it?",
                marks: 7,
                outline: [

                  "A dimension attribute change recorded as a new history row",

                  "Old facts still join to the address they were sold under",

                  "Type 1 overwrites - destroying the time-variant property",

                  "Effective-from/effective-to columns bracket each version",

                  "Current-view flags serve operational-style queries",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Facts, dimensions and the star schema",
            body: [
              "The dimensional model is the warehouse's shape, and its vocabulary is the syllabus's pair. Facts: the measurable business events - a sale, a shipment, a ledger entry - recorded at a stated grain (the exact meaning of one fact row: 'one line item per order per day') and carrying two kinds of columns: foreign keys to dimensions and measures (quantity, price, amount - the numbers aggregated in analysis). Dimensions: the context of the facts - who (customer), what (product), where (store), when (date) - denormalized wide tables with descriptive attributes and hierarchies (day -> month -> quarter -> year).",
              "The star schema is the dimensional model's standard shape: one fact table at the center, surrounded by dimension tables - the star. A worked schema fixes it: fact_sales (date_key, product_key, store_key, customer_key, quantity, unit_price, amount) with grain 'one product line per receipt' - surrounded by dim_date (day, month, quarter, year), dim_product (SKU, category, brand), dim_store (store, city, region), dim_customer (customer, segment). The analyst's query - 'quarterly sales by brand by region' - becomes a simple join of four tables with SUM(amount) GROUP BY attributes: the dimensional model's promise is that business questions become simple, symmetric joins.",
              "The design rules complete the section: fix the grain first (every schema decision follows from it - grain ambiguity is the cardinal dimensional error); keep fact columns numeric and additive where possible (additive, semi-additive like balances, non-additive like unit price - know which measures aggregate how); and keep dimensions wide and denormalized (the analysis-friendliness of the star). The exam's sentence: facts are the measurable events at a stated grain; dimensions are the context that makes them queryable - the star schema arranges them so business questions become simple joins.",
            ],
            keyTerms: [
              { term: "Grain", definition: "The exact meaning of one fact row - the first design decision." },
              { term: "Measures", definition: "The numeric facts: additive, semi-additive, non-additive." },
              { term: "Dimension hierarchy", definition: "Attribute ladders (day -> month -> quarter -> year) enabling roll-ups." },
              { term: "Star schema", definition: "One fact table joined to denormalized dimensions - the standard shape." },
            ],
            table: {
              caption: "The worked star schema.",
              headers: ["Table", "Type", "Columns"],
              rows: [
                ["fact_sales", "Fact (grain: line per receipt)", "date/product/store/customer keys + qty, price, amount"],
                ["dim_date", "Dimension", "day, month, quarter, year"],
                ["dim_product", "Dimension", "SKU, category, brand"],
                ["dim_store", "Dimension", "store, city, region"],
                ["dim_customer", "Dimension", "customer, segment"],
              ],
            },
            bullets: [
              "Facts: measurable events at a declared grain, with keys + measures.",
              "Measures classified: additive, semi-additive (balances), non-additive (unit price).",
              "Dimensions: wide, denormalized, hierarchized context tables.",
              "Worked star: fact_sales + four dimensions; grain = line per receipt.",
              "'Quarterly sales by brand by region' = four-table join + SUM - the promise.",
              "Grain first: every later decision follows from it.",
            ],
            diagram: {
              kind: "flow",
              title: "Designing the star schema",
              caption: "Grain, dimensions, fact, verification - the design sequence in four steps.",
              steps: [
                { label: "Choose the business process", note: "sales - the measurable event" },
                { label: "Declare the grain", note: "one product line per receipt" },
                { label: "Identify dimensions", note: "date, product, store, customer" },
                { label: "Add the measures", note: "qty, price, amount - additivity noted" },
                { label: "Verify with queries", note: "typical questions as star joins" },
              ],
            },
            callout: {
              type: "warning",
              title: "Grain ambiguity is the cardinal error",
              body: "The dimensional design's first commandment: 'declare the grain in one sentence before drawing anything.' A fact table mixing line-level and receipt-level rows silently double-counts in every aggregation - the error surfaces only as inexplicable totals, far from its cause.",
            },
            examQuestions: [
              {
                q: "Define facts, dimensions and grain, draw the worked star schema for sales, classify its measures by additivity, and show how a business question becomes a star join.",
                marks: 14,
                outline: [
                  "Facts: measurable events; grain = one row's exact meaning",
                  "Measures: additive, semi-additive, non-additive classification",
                  "Dimensions: who/what/where/when with hierarchies",
                  "fact_sales grain: one product line per receipt",
                  "Four dimensions: date, product, store, customer",
                  "Query: quarterly sales by brand by region -> 4-join + SUM",
                  "Grain declared first - the cardinal design rule",
                ],
              },
              {
                q: "Why is unit price non-additive while amount is additive?",
                marks: 7,
                outline: [

                  "Summing unit prices across rows is meaningless",

                  "Amount (qty x price) aggregates correctly",

                  "Ratio measures (avg price) derive from additive sums",

                  "Averaging price requires weighting by quantity",

                  "Semi-additive balances sum over some dimensions only",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Snowflake and galaxy schemas",
            body: [
              "Two variations complete the syllabus's schema trio. Snowflake schema: the star's dimensions normalized - brand split from product into dim_brand, city split from store into dim_city - saving storage and easing maintenance at the cost of more joins per query. Galaxy (fact constellation): multiple fact tables sharing dimension tables - fact_sales and fact_shipments both referencing dim_product and dim_date - the enterprise shape when processes share context; shared dimensions (conformed dimensions, 1.3) are what make the constellation coherent.",
              "A worked trio contrast fixes the trade-offs. The sales schema in three shapes: star - dim_product holds SKU, brand, category together (one join from fact to answers; some redundancy: brand stored per product row); snowflake - dim_product -> dim_brand, dim_product -> dim_category (normalized, smaller, but 'sales by brand' now joins fact -> product -> brand: three hops); galaxy - fact_sales + fact_shipments sharing dim_product and dim_date (cross-process questions - 'products sold but not yet shipped' - answerable in one schema). The verdict logic: star for query speed and simplicity (the default), snowflake for large dimensions with heavy redundancy, galaxy when multiple processes must share dimensions.",
              "The design counsel completes the section: denormalization is deliberate in dimensional models (the star's redundancy is analysis-friendliness purchased with storage - the reverse of OLTP's normalization); snowflake only the dimensions that are truly large and stable; and galaxy only with conformed dimensions, or the constellation loses coherence. The exam's sentence: the star is the default, the snowflake trades joins for storage, the galaxy shares dimensions across facts - three shapes, one dimensional logic.",
            ],
            keyTerms: [
              { term: "Snowflake schema", definition: "Star with normalized dimension hierarchies - more joins, less redundancy." },
              { term: "Galaxy / fact constellation", definition: "Multiple fact tables sharing conformed dimensions." },
              { term: "Shared (conformed) dimensions", definition: "Dimensions referenced by multiple fact tables coherently." },
              { term: "Deliberate denormalization", definition: "The star's redundancy bought for query simplicity." },
            ],
            table: {
              caption: "The schema trio compared.",
              headers: ["Schema", "Shape", "Joins per query", "Best when"],
              rows: [
                ["Star", "Fact + denormalized dimensions", "Fewest", "Default - speed and simplicity"],
                ["Snowflake", "Normalized dimensions", "More (fact -> product -> brand)", "Large, stable dimensions"],
                ["Galaxy", "Multiple facts sharing dimensions", "Fewest per fact; cross-fact joins", "Processes sharing context"],
              ],
            },
            bullets: [
              "Snowflake normalizes dimensions: product -> brand, store -> city.",
              "Cost: more hops per query; benefit: less redundancy, easier maintenance.",
              "Galaxy: fact_sales + fact_shipments sharing dim_product, dim_date.",
              "Cross-process questions answerable in one constellation.",
              "Star is the default; denormalization is deliberate, not sloppy.",
              "Galaxy requires conformed dimensions or loses coherence.",
            ],
            diagram: {
              kind: "compare",
              title: "Star vs snowflake",
              caption: "Query speed against storage and maintenance - the denormalization trade.",
              left: {
                heading: "Star schema",
                items: [
                  "Wide dimensions: brand inside product",
                  "One join from fact to answers",
                  "Some attribute redundancy",
                  "The analysis-friendly default",
                ],
              },
              right: {
                heading: "Snowflake schema",
                items: [
                  "Normalized: dim_product -> dim_brand",
                  "More hops: fact -> product -> brand",
                  "Less redundancy, easier updates",
                  "For large, stable dimension hierarchies",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Denormalization is the point",
              body: "The counter-intuitive sentence for examiners: 'the star's redundancy is not poor design - it is the dimensional model's purpose: analysis speed bought with storage.' OLTP normalizes for update safety; the warehouse denormalizes for query simplicity. Saying which physics each shape serves is the mature answer.",
            },
            examQuestions: [
              {
                q: "Explain snowflake and galaxy schemas, contrast the trio (star, snowflake, galaxy) with a worked sales example, and state when each shape is the right choice.",
                marks: 14,
                outline: [
                  "Snowflake: normalized dimensions - product -> brand -> category",
                  "Cost: extra joins; benefit: less redundancy",
                  "Galaxy: fact_sales + fact_shipments sharing conformed dimensions",
                  "Cross-process query: sold-but-not-shipped in one schema",
                  "Star: fewest joins, deliberate denormalization, the default",
                  "Snowflake for large stable dimensions; galaxy for shared processes",
                  "Verdict: three shapes, one dimensional logic",
                ],
              },
              {
                q: "Why do galaxy schemas require conformed dimensions?",
                marks: 7,
                outline: [

                  "Multiple fact tables only cohere via shared definitions",

                  "Unconformed dims break drill-across between facts",

                  "Conformance is the constellation's connective tissue",

                  "Cross-fact joins assume identical member codes",

                  "One steward, one definition, many facts",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "Partitioning strategy - horizontal and vertical",
            body: [
              "Partitioning splits large tables into manageable pieces, and the syllabus's two strategies split on the axis chosen. Horizontal partitioning: rows are divided - by time (each year/month its own partition: the warehouse's natural choice, since analyses are time-bounded), by range of a key (customer A-M, N-Z), by hash (even distribution for load balancing), or by round-robin (pure spreading). Vertical partitioning: columns are divided - grouping frequently-accessed columns apart from wide, rarely-used ones (normalization-like splitting for access speed), or splitting by row size (management of wide rows).",
              "A worked partitioning trace shows both axes earning their keep. fact_sales at 2 billion rows: horizontal by month - each month's partition ~170M rows; a 'last quarter' query scans 3 partitions, not 24; partition pruning is the payoff. Maintenance: old partitions archived to cheaper storage; new loads append one partition (no rewrite of 2 billion rows). Vertical: fact_sales' rarely-used comment column (2 KB per row) split into a side table - hot queries stop dragging 4 TB of comments through cache. Hardware partitioning (Inmon's third form) spreads whole tables across storage devices for parallel I/O. Together: horizontal by time for analysis and lifecycle, vertical by access pattern for I/O, hardware for bandwidth.",
              "The strategy rules complete the section: partition on the axis queries filter by (time for almost every warehouse query); keep partition sizes uniform (skewed partitions recreate the big-table problem inside one partition); and index within partitions consistently. The exam's sentence: partitioning converts one unmanageable table into many manageable ones - horizontally by time or key for pruning and lifecycle, vertically by access pattern for I/O, with hardware partitioning adding parallel bandwidth.",
            ],
            keyTerms: [
              { term: "Partition pruning", definition: "Queries touch only the partitions their filters select." },
              { term: "Horizontal partitioning", definition: "By rows: time, range, hash, round-robin." },
              { term: "Vertical partitioning", definition: "By columns: access-pattern or row-size splits." },
              { term: "Partition lifecycle", definition: "Load appends; old partitions archive without rewrites." },
            ],
            table: {
              caption: "The partitioning choices on fact_sales.",
              headers: ["Strategy", "Split", "Payoff"],
              rows: [
                ["Horizontal by month", "24 partitions of ~170M rows", "'last quarter' scans 3 partitions"],
                ["Horizontal by hash(key)", "Even distribution", "Load balancing across devices"],
                ["Vertical by access", "Comments split to side table", "Hot queries skip 4 TB of cold text"],
                ["Hardware", "Tables across parallel devices", "I/O bandwidth multiplied"],
              ],
            },
            bullets: [
              "Horizontal: rows split by time (natural), range, hash, round-robin.",
              "Pruning: time-filtered queries skip irrelevant partitions.",
              "Lifecycle: archive old partitions; append new loads - no rewrites.",
              "Vertical: hot columns apart from cold; wide rows split by size.",
              "Worked trace: 2B rows -> monthly partitions + comment side table.",
              "Rule: partition on the axis queries filter by.",
            ],
            diagram: {
              kind: "fork",
              title: "Which partitioning axis?",
              caption: "The query pattern decides - time for warehouses, access for tables, devices for I/O.",
              start: "A large table to partition",
              branches: [
                { label: "Queries filter by time", outcome: "horizontal by month/year - pruning and archiving follow", good: true },
                { label: "Columns split hot/cold", outcome: "vertical by access pattern - I/O shrinks", good: true },
                { label: "Load balancing needed", outcome: "hash or round-robin horizontal - even spread", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Time is the warehouse's partition axis",
              body: "The warehouse-specific insight: 'almost every analytical query carries a time filter, so horizontal partitioning by time is the default - pruning makes every query faster and the archive lifecycle free.' Vertical and hardware partitioning are refinements on that base.",
            },
            examQuestions: [
              {
                q: "Explain horizontal and vertical partitioning strategies, work the 2-billion-row fact_sales trace across both axes, and state the strategy rules.",
                marks: 14,
                outline: [
                  "Horizontal: time, range, hash, round-robin splits of rows",
                  "Pruning: last-quarter query scans 3 of 24 monthly partitions",
                  "Lifecycle: archive old partitions; append new loads",
                  "Vertical: comment columns split out by access pattern",
                  "Hardware partitioning: parallel I/O across devices",
                  "Worked: 2B rows -> monthly partitions + side table",
                  "Rule: partition on the axis queries filter by",
                ],
              },
              {
                q: "Why must partition sizes stay uniform?",
                marks: 7,
                outline: [

                  "Skewed partitions recreate the big-table problem locally",

                  "One hot partition serializes the parallelism pruning promised",

                  "Balanced splits keep every partition within I/O budgets",

                  "Uneven months skew load windows too",

                  "Hash partitioning equalizes where time cannot",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Data Warehouse and OLAP Technology",
      summary:
        "Unit II turns the warehouse interactive: multidimensional data models, the OLAP operations - roll-up, drill-down, slice, dice and pivot - the ROLAP, MOLAP and HOLAP server architectures, data warehouse implementation issues, the efficient computation of data cubes, the processing of OLAP queries, and the indexing of OLAP data.",
      chapter: {
        number: "02",
        title: "OLAP and the Multidimensional Cube",
        intro:
          "Unit II covers data warehouse and OLAP technology, multidimensional data models with the different OLAP operations, OLAP servers - ROLAP, MOLAP, HOLAP - data warehouse implementation, efficient computation of data cubes, processing of OLAP queries, and indexing of data.",
        inOneBreath:
          "The cube arranges measures by dimensions with aggregation ladders; OLAP's five operations move around it - roll-up, drill-down, slice, dice, pivot. Servers materialize the cube three ways (ROLAP on relations, MOLAP in arrays, HOLAP hybrid), implementation struggles with scale and sparsity, cube computation pre-aggregates a lattice of 2^d cuboids selectively, queries decompose into lattice lookups, and bitmap and join indexes make the lookups cheap.",
        sections: [
          {
            number: "2.1",
            title: "The multidimensional data model",
            body: [
              "The multidimensional model views data as a cube: dimensions (the analysis axes - time, region, product) and measures (the numbers in the cells - sales, quantity). The model's formal vocabulary: dimensions with hierarchies (day < month < quarter < year), cells at the intersection of dimension members, and aggregation levels - every cell can be viewed at any summary level. The cube of 1.5's star schema is exactly this: fact_sales rendered as sales by (date, product, store, customer), the hierarchies providing the roll-up paths.",
              "A worked cube fixes the vocabulary. Dimensions: time (day -> month -> quarter -> year), region (city -> province -> country), product (SKU -> category -> department). Measures: sales_amount, units. The cell (March 2025, Pune, Beverages) holds sales 4.2 lakh - one measure at one aggregation point. The aggregation ladder: cell values roll up to (Q1 2025, Maharashtra, Beverages), then (2025, India, Beverages), then the grand total - every level reachable because the hierarchies define the paths. Sparsity is the model's structural fact: real cubes are mostly empty (most product-region-time combinations never sold), which drives 2.5's computation choices.",
              "The model's power is its symmetry: every dimension is treated alike, every measure aggregable along every dimension, every question phrased as cell selection plus aggregation. The exam's sentence: the multidimensional model is the star schema seen as a cube - dimensions with hierarchies as axes, measures in cells, and every analysis a walk along the aggregation ladders. The sample cell is the worked vocabulary - one measure, three ladders, one roll-up path.",
            ],
            keyTerms: [
              { term: "Cube", definition: "Measures arranged by dimension axes - the multidimensional data model." },
              { term: "Dimension hierarchy", definition: "Attribute ladders per axis (day -> month -> year) defining roll-up paths." },
              { term: "Cell", definition: "A measure value at one combination of dimension members." },
              { term: "Sparsity", definition: "Real cubes are mostly empty cells - the computation-driving fact." },
            ],
            table: {
              caption: "The worked cube.",
              headers: ["Element", "Members"],
              rows: [
                ["Time (hierarchy)", "day -> month -> quarter -> year"],
                ["Region (hierarchy)", "city -> province -> country"],
                ["Product (hierarchy)", "SKU -> category -> department"],
                ["Measures", "sales_amount, units"],
                ["Sample cell", "(March 2025, Pune, Beverages) = 4.2 lakh"],
              ],
            },
            bullets: [
              "Cube = dimensions as axes + measures in cells.",
              "Hierarchies per dimension define the aggregation ladders.",
              "Worked cell: (March 2025, Pune, Beverages) rolls up through three ladders.",
              "Symmetry: every dimension treated alike; every question a walk.",
              "Sparsity: most cells empty - cube computation must exploit it.",
              "Sentence: the star schema seen as a cube.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The aggregation ladder",
              caption: "Grand total at the apex, cell detail at the base - every rung is a queryable level.",
              tiers: [
                { label: "Grand total", note: "all dimensions at 'all' members" },
                { label: "Year / country / department", note: "top hierarchy rungs" },
                { label: "Quarter / province / category", note: "middle rungs" },
                { label: "Month / city / SKU", note: "detail rungs" },
                { label: "Day / store / SKU batch", note: "base cells - the raw grain" },
              ],
            },
            callout: {
              type: "exam",
              title: "Hierarchies make the ladders",
              body: "The precision mark in cube questions: dimensions are not enough - hierarchies define which aggregations are legal. 'March rolls to Q1 because the time hierarchy says so; a cube without hierarchies is just a table with three keys.' State the hierarchy explicitly in every multidimensional-model answer.",
            },
            examQuestions: [
              {
                q: "Explain the multidimensional data model - dimensions, hierarchies, measures, cells - with the worked sales cube, and state why sparsity matters.",
                marks: 14,
                outline: [
                  "Cube: measures arranged by dimension axes",
                  "Hierarchies: day->month->quarter->year; city->province->country; SKU->category",
                  "Cells: measure values at member combinations",
                  "Worked: (March 2025, Pune, Beverages) = 4.2 lakh with roll-up paths",
                  "Symmetry: every dimension alike; every question a ladder walk",
                  "Sparsity: most cells empty - storage and computation implications",
                  "Sentence: the star schema seen as a cube",
                ],
              },
              {
                q: "How do hierarchies differ from plain dimension attributes?",
                marks: 7,
                outline: [

                  "Hierarchies order attributes into aggregation ladders",

                  "Roll-up/drill-down follow the ladder, not arbitrary attributes",

                  "Plain attributes filter and describe; hierarchies aggregate",

                  "Legal aggregations are exactly the ladder's paths",

                  "Non-ladder groupings filter but cannot navigate",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "The OLAP operations",
            body: [
              "OLAP's five operations move around the cube, and the syllabus's list is the movement catalogue. Roll-up: aggregate up the hierarchy (city -> province) - fewer cells, more summary. Drill-down: the reverse (province -> city) - more detail. Slice: pick one member of one dimension (time = March 2025) - a sub-cube of one fewer dimension. Dice: select members from multiple dimensions (region IN (Pune, Mumbai) AND product IN (Beverages, Snacks)) - a sub-cube of chosen ranges. Pivot (rotate): re-orient the axes - the same data, a different view (product on rows, region on columns instead of the reverse).",
              "A worked operation chain fixes the semantics. Start: sales cube at (month, city, product). Roll-up: month -> quarter and city -> province - the executive view. Slice: time = Q1 2025 - the quarter's sub-cube. Dice: product IN (Beverages, Snacks) - two categories only. Drill-down: product -> SKU - the detail behind the two categories. Pivot: SKU on rows, province on columns - the report layout. Five operations, one analysis session - and each operation is algebraically just selection + aggregation over the hierarchies, which is why OLAP servers can compute them fast.",
              "The drill-through note completes the set: drilling past the cube's base to the underlying records (the receipt behind a suspicious cell) - the audit path that keeps OLAP honest (and, in this syllabus's frame, the trail investigators follow). The exam's sentence: OLAP's operations are five movements around the cube - roll-up and drill-down along hierarchies, slice and dice as selections, pivot as re-orientation - each computable as selection plus aggregation.",
            ],
            keyTerms: [
              { term: "Roll-up / drill-down", definition: "Aggregate up or descend down the dimension hierarchies." },
              { term: "Slice", definition: "Fix one member of one dimension - a sub-cube one dimension smaller." },
              { term: "Dice", definition: "Select member ranges from several dimensions." },
              { term: "Pivot (rotate)", definition: "Re-orient the axes - the same data, another view." },
            ],
            table: {
              caption: "The five operations on the sales cube.",
              headers: ["Operation", "Action", "Worked example"],
              rows: [
                ["Roll-up", "Aggregate up hierarchies", "month->quarter; city->province"],
                ["Drill-down", "Descend hierarchies", "product->SKU"],
                ["Slice", "Fix one dimension member", "time = Q1 2025"],
                ["Dice", "Select ranges of several dimensions", "regions {Pune, Mumbai}; products {Bev, Snacks}"],
                ["Pivot", "Re-orient axes", "SKU rows, province columns"],
              ],
            },
            bullets: [
              "Five movements: roll-up, drill-down, slice, dice, pivot.",
              "Worked chain: executive view -> quarter slice -> two-category dice -> SKU drill-down -> pivot.",
              "Each operation = selection + aggregation over the hierarchies.",
              "Drill-through: past the base cube to the records - the audit path.",
              "OLAP servers compute all five fast because hierarchies bound the work.",
              "Sentence: five movements around one cube.",
            ],
            diagram: {
              kind: "flow",
              title: "An OLAP session as a chain",
              caption: "Five operations from executive summary to SKU detail in one session.",
              steps: [
                { label: "Roll-up", note: "to quarter/province - the executive view" },
                { label: "Slice", note: "time = Q1 2025" },
                { label: "Dice", note: "Beverages + Snacks, Pune + Mumbai" },
                { label: "Drill-down", note: "to SKU detail" },
                { label: "Pivot", note: "SKU rows x province columns for the report" },
              ],
            },
            callout: {
              type: "exam",
              title: "Slice vs dice - the one-dimension test",
              body: "The most-confused pair, resolved by counting: 'slice fixes ONE member of ONE dimension; dice selects ranges of SEVERAL dimensions.' The worked examples carry the distinction: time = Q1 2025 (slice) versus regions and products both restricted (dice). Count dimensions restricted and the answer is mechanical.",
            },
            examQuestions: [
              {
                q: "Explain the five OLAP operations with a worked chain from executive roll-up to SKU drill-down, including the slice-versus-dice distinction and drill-through.",
                marks: 14,
                outline: [
                  "Roll-up: aggregate up hierarchies (month->quarter)",
                  "Drill-down: descend (product->SKU)",
                  "Slice: fix one member of one dimension (time = Q1)",
                  "Dice: restrict several dimensions (regions + products)",
                  "Pivot: re-orient axes for the report",
                  "Drill-through: to base records - the audit path",
                  "All computable as selection + aggregation",
                ],
              },
              {
                q: "Why can OLAP servers answer these operations quickly?",
                marks: 7,
                outline: [

                  "Hierarchies bound the aggregation work",

                  "Pre-aggregation (2.5) means many answers are lookups",

                  "Selections restrict to sub-cubes before computing",

                  "Summary tables answer before the base is touched",

                  "Compression keeps hot cuboids cache-resident",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "OLAP servers - ROLAP, MOLAP and HOLAP",
            body: [
              "The OLAP server materializes the multidimensional model, and the syllabus's trio differs on where. ROLAP (relational OLAP): the cube stored in relational tables (the star schema itself; aggregations as summary tables) - queries translate to SQL over the star; unlimited scale, mature tools, slower aggregation-heavy queries. MOLAP (multidimensional OLAP): the cube stored as arrays - pre-computed cell values in multidimensional storage; fastest query response (index arithmetic, not joins), but array sparsity and cube size limit scale (sparse storage techniques mitigate). HOLAP (hybrid): detail data relational, aggregations multidimensional - MOLAP's speed for summaries, ROLAP's scale for drill-through to records.",
              "A worked trio contrast on one query fixes the trade. Query: 'Q1 sales by region by category' - ROLAP: SQL over star + summary tables (or compute live: joins + GROUP BY - seconds over billions of rows); MOLAP: array lookup of the pre-computed cuboid (milliseconds); HOLAP: the summary from the MOLAP layer, drill-through to the relational detail when the analyst opens a cell. Sizing: 2-billion-row fact - ROLAP stores it comfortably; MOLAP's dense array for the same cube would explode (2^d cells), so MOLAP implementations compress sparse arrays and pre-aggregate selectively (2.5's lattice choices).",
              "The selection logic completes the section: ROLAP for scale and SQL ecosystems; MOLAP for speed on well-bounded cubes; HOLAP where both matters (summaries fast, details relational). The exam's sentence: the trio is one cube in three storages - relational scale, array speed, hybrid pragmatism - and the choice follows the workload's dominant query shape. The worked query is the contrast - seconds, milliseconds, or a hybrid handoff.",
            ],
            keyTerms: [
              { term: "ROLAP", definition: "Cube as relational tables + summary tables; SQL translates OLAP queries." },
              { term: "MOLAP", definition: "Cube as pre-computed arrays - fastest response, scale-limited." },
              { term: "HOLAP", definition: "Relational detail + multidimensional summaries - the hybrid." },
              { term: "Sparse array storage", definition: "MOLAP's compression of mostly-empty cubes." },
            ],
            table: {
              caption: "The server trio compared.",
              headers: ["Server", "Storage", "Query speed", "Scale"],
              rows: [
                ["ROLAP", "Star tables + summaries", "Seconds (SQL joins)", "Unlimited"],
                ["MOLAP", "Pre-computed arrays", "Milliseconds (lookups)", "Cube-size limited"],
                ["HOLAP", "Relational detail + MOLAP summaries", "Fast summaries; relational drill-through", "Balanced"],
              ],
            },
            bullets: [
              "ROLAP: cube on relations; SQL translates; scale unbounded.",
              "MOLAP: arrays of pre-computed cells; milliseconds; sparsity managed.",
              "HOLAP: summaries in arrays; detail stays relational.",
              "Worked query: seconds vs milliseconds vs hybrid handoff.",
              "2B rows: ROLAP comfortable; MOLAP needs sparse compression.",
              "Sentence: one cube, three storages - workload decides.",
            ],
            diagram: {
              kind: "compare",
              title: "ROLAP vs MOLAP",
              caption: "SQL joins versus array lookups - scale against speed.",
              left: {
                heading: "ROLAP",
                items: [
                  "Star schema + summary tables",
                  "Queries translate to SQL",
                  "Unlimited scale, mature ecosystem",
                  "Aggregation-heavy queries slower",
                ],
              },
              right: {
                heading: "MOLAP",
                items: [
                  "Pre-computed multidimensional arrays",
                  "Cell lookups - milliseconds",
                  "Cube size and sparsity limits",
                  "Best on bounded, hot cubes",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "HOLAP is the compromise sentence",
              body: "The hybrid's one-line justification: 'HOLAP keeps the detail relational (scale, drill-through) and the summaries multidimensional (speed) - each layer where it is best.' Most real deployments are HOLAP-shaped in spirit; name it after contrasting the pure pair.",
            },
            examQuestions: [
              {
                q: "Compare ROLAP, MOLAP and HOLAP - storage, speed, scale - with the worked Q1 query answered by each, and state the selection logic.",
                marks: 14,
                outline: [
                  "ROLAP: star + summaries; SQL translation; seconds; unlimited scale",
                  "MOLAP: pre-computed arrays; milliseconds; sparse compression",
                  "HOLAP: relational detail + MOLAP summaries",
                  "Worked: summary query fast in MOLAP; drill-through relational in HOLAP",
                  "2B-row fact: ROLAP comfortable; MOLAP array explodes without sparsity handling",
                  "Selection: dominant query shape and scale decide",
                  "Hybrid sentence: each layer where it is best",
                ],
              },
              {
                q: "Why does a dense MOLAP array explode with dimension count?",
                marks: 7,
                outline: [

                  "Cells grow as the product of members per dimension (2^d combinatorics)",

                  "Real cubes are sparse - most combinations never occur",

                  "Sparse storage and selective pre-aggregation manage it",

                  "Empty cells dominate real cubes overwhelmingly",

                  "Compression exploits the sparsity structurally",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "Data warehouse implementation issues",
            body: [
              "Building the warehouse is an implementation project with known hard spots, and the syllabus's 'implementation' names them. Scale management: billions of rows, terabyte growth - partitioning (1.7), aggregation selection (2.5) and archival lifecycle keep it tractable. Load windows: nightly ETL must complete inside the batch window - incremental extraction, parallel loads, and aggregate maintenance compete for the same hours. Consistency of aggregates: every summary table must refresh in step with its base facts - the update-cascade problem. Metadata quality: undocumented transformations become unexplainable numbers (1.2's audit argument). And the human issues: requirements drift (the BIA-equivalent for warehouses), tool sprawl, and the governance of conformed dimensions.",
              "A worked implementation trace shows the issues interacting. The 2B-row fact table (1.7): nightly window is 6 hours - last month's load took 7 (issue: window overflow); the fix: incremental extraction cuts scanned source rows 10x, parallel partition loads use 4 workers, and aggregate refresh is re-ordered to run on the new partitions only. Next crisis: the marketing mart's totals disagree with the enterprise warehouse's (issue: aggregate refresh cascade missed one summary table) - fixed by metadata-driven refresh dependencies (1.2's lineage driving the cascade). Two issues, two fixes, both structural - and both traceable to the metadata discipline.",
              "The organizational close: warehouse implementation fails less on technology than on governance - conformed dimensions unowned, requirements unbounded, quality expectations unset. The exam's sentence: warehouse implementation is scale, windows, aggregate consistency and metadata governance - and the metadata discipline is the thread that keeps the other three honest. The window-overflow trace is the worked fix - incremental scans and parallel partition loads.",
            ],
            keyTerms: [
              { term: "Load window", definition: "The batch hours ETL must complete inside." },
              { term: "Aggregate refresh cascade", definition: "Summary tables refreshing in dependency order with their facts." },
              { term: "Metadata-driven refresh", definition: "Lineage records driving which summaries need recomputation." },
              { term: "Requirements drift", definition: "Unbounded scope growth - the governance failure mode." },
            ],
            table: {
              caption: "The implementation issues and structural fixes.",
              headers: ["Issue", "Symptom", "Fix"],
              rows: [
                ["Scale", "7-hour loads, slow queries", "Incremental ETL + partition-parallel loads"],
                ["Window overflow", "Loads past 6 hours", "Trim scans; parallelize; reorder aggregates"],
                ["Aggregate inconsistency", "Mart totals disagree", "Metadata-driven refresh cascade"],
                ["Metadata gaps", "Unexplainable numbers", "Lineage as a mandatory artifact"],
                ["Requirements drift", "Ever-growing scope", "Governed conformed dimensions"],
              ],
            },
            bullets: [
              "Issues: scale, load windows, aggregate consistency, metadata, governance.",
              "Worked: window overflow fixed by incremental + parallel partition loads.",
              "Mart disagreement fixed by metadata-driven refresh cascade.",
              "Aggregate refresh must follow fact loads in dependency order.",
              "Governance: conformed dimensions owned; scope bounded.",
              "Sentence: metadata discipline keeps scale, windows and consistency honest.",
            ],
            diagram: {
              kind: "layers",
              title: "The implementation concern stack",
              caption: "Four technical concerns under one governance layer.",
              layers: [
                { label: "Governance", note: "conformed dimensions, scope, quality expectations" },
                { label: "Metadata", note: "lineage, rules, refresh dependencies" },
                { label: "Consistency", note: "aggregate refresh cascades in step" },
                { label: "Scale and windows", note: "partitioning, incremental loads, parallelism" },
              ],
            },
            callout: {
              type: "warning",
              title: "The disagreement that starts at the mart",
              body: "The classic implementation symptom: 'marketing's dashboard disagrees with finance's report' - and the cause is rarely the data, it is the refresh cascade: one summary table missed its dependency. Metadata-driven refresh (lineage deciding what recomputes) is the structural fix; quote the disagreement trace.",
            },
            examQuestions: [
              {
                q: "Discuss the data warehouse implementation issues - scale, load windows, aggregate consistency, metadata and governance - with the worked window-overflow and mart-disagreement traces.",
                marks: 14,
                outline: [
                  "Scale: 2B rows; partitioning + incremental ETL manage it",
                  "Window: 7-hour load vs 6-hour window - parallel partition loads",
                  "Consistency: aggregate refresh cascade in dependency order",
                  "Metadata: lineage drives which summaries recompute",
                  "Governance: conformed dimensions owned; scope bounded",
                  "Disagreement trace: mart vs warehouse totals - cascade miss",
                  "Sentence: metadata discipline anchors the rest",
                ],
              },
              {
                q: "Why do aggregate tables create a consistency obligation?",
                marks: 7,
                outline: [

                  "Summaries must match their base facts or reports disagree",

                  "Every fact load invalidates dependent aggregates",

                  "Dependency-ordered refresh keeps the cascade complete",

                  "Stale aggregates present as contradictory reports",

                  "The cascade derives from lineage, not memory",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "Efficient computation of data cubes",
            body: [
              "The data cube is not one table but a lattice of cuboids: with d dimensions, the full cube contains 2^d cuboids (every subset of dimensions aggregated) - 4 dimensions = 16 cuboids, 8 dimensions = 256. Pre-computing all of them is the full materialization strategy (fast queries, explosive storage); computing none is no materialization (every query computed live); partial materialization selects the useful middle - the syllabus's efficiency problem is exactly this selection plus the computation methods.",
              "The computation methods are the syllabus's named techniques. Multiway array aggregation: compute the whole lattice in one pass over the sparse array, sharing aggregation work across cuboids (each cell read once, contributing to every ancestor). Sort-order optimization: order dimension values by frequency so grouping work shrinks. Grouping on the fly: compute only queried groups from the base table when the cuboid is not materialized. And selection heuristics for partial materialization: materialize cuboids that are frequently queried, at the top of the lattice (cheapest, most shared), or data-iceberg style (only groups above a support threshold - the anti-sparse measure).",
              "A worked computation trace fixes the arithmetic. The 4-dimension sales cube (time, region, product, customer): full lattice = 16 cuboids; the base cuboid (all four keys) holds 2B rows; the apex (all aggregated) holds 1 row. Multiway pass: sort by time, compute all time-ancestor cuboids while the array is in memory; reorder by region; by product - the whole lattice from a few sorted passes, each cell read once. Partial choice: materialize the apex, the three 3-dimension cuboids (most-queried) and the iceberg groups above support 0.1% - 20% of the lattice covering 90% of query load. The exam's sentence: the cube is a 2^d-cuboid lattice; efficiency is choosing what to materialize and computing it multiway - each cell read once, each frequent query a lookup.",
            ],
            keyTerms: [
              { term: "Lattice of cuboids", definition: "2^d aggregation levels from base cube to apex." },
              { term: "Multiway array aggregation", definition: "One pass computing many cuboids - each cell read once." },
              { term: "Partial materialization", definition: "Selectively pre-computing the useful cuboids." },
              { term: "Iceberg condition", definition: "Materialize only groups above a support threshold." },
            ],
            table: {
              caption: "Materialization strategies on the 4-dimension cube.",
              headers: ["Strategy", "Cuboids computed", "Trade-off"],
              rows: [
                ["Full", "All 16", "Fastest queries; explosive storage"],
                ["None", "0 - compute live", "No storage; slow queries"],
                ["Partial (selected)", "Apex + top cuboids + iceberg groups", "20% storage, 90% of queries fast"],
              ],
            },
            bullets: [
              "Lattice: 2^d cuboids from base to apex (16 for 4 dimensions).",
              "Multiway aggregation: one sorted pass feeds many cuboids.",
              "Sort-order by frequency shrinks grouping work.",
              "Iceberg: materialize only groups above support - sparsity answered.",
              "Worked: 20% of the lattice covers 90% of query load.",
              "Sentence: efficiency = selection + multiway computation.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Multiway cube computation",
              caption: "Sorted passes over the base, each cell contributing to every ancestor cuboid.",
              stages: [
                { label: "Load base", note: "sparse array of the base cuboid" },
                { label: "Sort by dimension 1", note: "compute its ancestor cuboids in memory" },
                { label: "Re-sort by dimension 2", note: "next cuboid family" },
                { label: "Repeat", note: "lattice complete; each cell read once" },
                { label: "Prune by iceberg", note: "drop groups below support" },
              ],
            },
            callout: {
              type: "exam",
              title: "2^d is the arithmetic to quote",
              body: "The lattice arithmetic examiners expect: 'd dimensions -> 2^d cuboids - 4 dimensions already 16, 8 dimensions 256.' Then the punchline: full materialization is impossible at scale, so partial selection plus multiway computation is the discipline. Quote both numbers and the strategy follows.",
            },
            examQuestions: [
              {
                q: "Explain the cube lattice (2^d cuboids) and the efficient computation methods - multiway array aggregation, sort-order, iceberg conditions - with the 4-dimension partial-materialization trace.",
                marks: 14,
                outline: [
                  "Lattice: base cuboid to apex; 2^d total (16 for d=4)",
                  "Full vs none vs partial materialization trade-offs",
                  "Multiway: sorted passes; each cell read once; shared work",
                  "Sort-order by dimension frequency shrinks grouping",
                  "Iceberg: only groups above support threshold",
                  "Worked: apex + top cuboids = 20% storage, 90% query coverage",
                  "Sparsity drives every choice",
                ],
              },
              {
                q: "Why is the apex cuboid always worth materializing?",
                marks: 7,
                outline: [

                  "One row, cheapest storage - the grand total",

                  "Answered by lookup in every dashboard's headline",

                  "Best storage-to-query-benefit ratio in the lattice",

                  "Every dashboard opens with the grand total",

                  "Its cost is one row per refresh",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Processing OLAP queries",
            body: [
              "An OLAP query names a cuboid and its selections - and the server's processing is a decomposition onto the lattice. The pipeline: parse the query into (cuboid, selection, aggregation); locate the materialized cuboid if it exists (lookup - 2.5's payoff); otherwise compute from the nearest materialized ancestor or the base (aggregate down from a summary, or roll up from base); apply the selections (slice/dice as filters); and order/pivot for presentation. The optimization question: which cuboid to compute from - the smallest materialized ancestor that contains the answer.",
              "A worked query trace fixes the pipeline. Query: 'Feb 2025 sales by SKU in Pune and Mumbai' - target cuboid: (month, city, SKU). Lookup: not materialized. Nearest ancestor: (month, province, category) is materialized - but Pune/Mumbai need city-level detail, so the ancestor cannot answer; fall to the base cuboid: scan February partition (1.7's pruning: 2 of 24 partitions), group by (month, city, SKU) with filters city IN (Pune, Mumbai), aggregate, return 12,000 rows. Alternative route had the 3-d cuboid (month, city, category) been materialized: aggregate 12 categories up from SKU? No - down? Category is above SKU, so compute from base anyway - the lesson: materialization only helps when its granularity matches or coarsens the query.",
              "The query-processing rules complete the section: answer from the smallest sufficient materialized ancestor; prune to relevant partitions before scanning; push selections down to the storage layer; and cache hot query results (the session-level memoization OLAP tools do). The exam's sentence: OLAP query processing is lattice decomposition - lookup first, compute from the nearest sufficient ancestor, prune and push selections down, and let materialization choices (2.5) decide which queries are lookups.",
            ],
            keyTerms: [
              { term: "Query decomposition", definition: "Query -> (cuboid, selection, aggregation) onto the lattice." },
              { term: "Smallest sufficient ancestor", definition: "The least-materialized cuboid that can answer." },
              { term: "Partition pruning", definition: "Selections restricting the scan to relevant partitions." },
              { term: "Selection pushdown", definition: "Filters applied at the storage layer, not after." },
            ],
            table: {
              caption: "The worked query trace.",
              headers: ["Step", "Action", "Outcome"],
              rows: [
                ["Decompose", "(month, city, SKU) + city filter", "target cuboid named"],
                ["Lookup", "materialized? no", "compute needed"],
                ["Ancestor check", "(month, province, category) - no city detail", "insufficient granularity"],
                ["Base route", "scan Feb partition (pruned)", "12,000 rows grouped"],
                ["Return", "aggregate + present", "answer served"],
              ],
            },
            bullets: [
              "Decompose the query onto (cuboid, selection, aggregation).",
              "Lookup materialized cuboids first - 2.5's payoff.",
              "Ancestors answer only when granularity matches or coarsens the query.",
              "Worked: base-cuboid route with February-partition pruning.",
              "Push selections down; cache hot results.",
              "Sentence: query processing is lattice decomposition.",
            ],
            diagram: {
              kind: "flow",
              title: "One OLAP query's route",
              caption: "Lookup, ancestor check, pruned base scan, aggregate - the decision path.",
              steps: [
                { label: "Parse", note: "cuboid + selections named" },
                { label: "Lookup", note: "materialized cuboid? miss" },
                { label: "Ancestor test", note: "granularity sufficient? no" },
                { label: "Base scan", note: "Feb partition only - pruned" },
                { label: "Aggregate + return", note: "answer served" },
              ],
            },
            callout: {
              type: "warning",
              title: "Materialization only helps at matching granularity",
              body: "The subtle processing point: 'a materialized ancestor answers a query only when its granularity is the same or coarser - finer materializations cannot serve coarser queries' legs and vice versa is fine, but coarser ancestors cannot yield finer detail.' The trace's ancestor check (province lacks city) shows the miss; design materialization by the query workload's actual granularity.",
            },
            examQuestions: [
              {
                q: "Explain OLAP query processing as lattice decomposition with the worked Feb-2025 query trace, and state the processing rules (lookup, smallest sufficient ancestor, pruning, pushdown).",
                marks: 14,
                outline: [
                  "Decompose: (cuboid, selection, aggregation)",
                  "Lookup materialized cuboid - miss in the worked trace",
                  "Ancestor (month, province, category) lacks city detail - insufficient",
                  "Base route: February partition pruned from 24 to 1-2",
                  "Aggregate by (month, city, SKU); return",
                  "Rules: smallest sufficient ancestor; pushdown; hot-result caching",
                  "Sentence: query processing = lattice decomposition",
                ],
              },
              {
                q: "When can a coarser materialized cuboid answer a finer query?",
                marks: 7,
                outline: [

                  "Never for detail - coarser lacks the finer dimension's members",

                  "Only when the query's detail is itself aggregated away",

                  "Hence materialize at the workload's finest common granularity",

                  "Coarser rows cannot invent finer members",

                  "Design materialization from the workload's granularity histogram",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "Indexing OLAP data - bitmap and join indexes",
            body: [
              "OLAP's access patterns - low-cardinality filters, star joins, range scans - get specialized indexes. Bitmap indexes: for each value of a low-cardinality column, a bit vector over the rows (gender: two bitmaps; month: twelve); selections become bitwise AND/OR over vectors - 'sales in Q1 AND region=Pune' is three AND operations on bitmaps, no row touches until the final result set. Cost: bitmap explosion for high-cardinality columns (SKU with 100,000 values), so encodings (bit-sliced, compressed) extend the idea.",
              "Join indexes: the star join pre-computed - for each dimension value, the list of fact-row IDs referencing it (region 'Pune' -> fact rows 4, 917, 20,441...); the star query becomes intersection of lists instead of a multi-table join. Worked trace: 'Q1, Pune, Beverages' - fetch three join-index lists (Q1 dates' rows, Pune stores' rows, Beverages' products' rows), intersect, fetch only the surviving fact rows - three list fetches and an intersection replace a four-table join. B-tree indexes still serve the high-cardinality range filters (amount ranges); the trio (bitmap, join, B-tree) covers the OLAP access profile.",
              "The selection logic completes the section: bitmap for low-cardinality dimension attributes (the filter-heavy columns); join indexes for the star-join pattern (fact-dimension navigation); B-tree for high-cardinality ranges; and everything sized against the update cost - indexes are maintained during loads (2.4's window). The exam's sentence: OLAP indexing matches the access pattern - bitmaps for filter columns, join indexes for star navigation, B-trees for ranges - and every index is paid for in load-window time.",
            ],
            keyTerms: [
              { term: "Bitmap index", definition: "A bit vector per value of a low-cardinality column; filters = bitwise ops." },
              { term: "Join index", definition: "Pre-computed fact-row lists per dimension value - the star join materialized." },
              { term: "Bitwise AND/OR selection", definition: "Multi-condition filters as vector operations." },
              { term: "Update-cost accounting", definition: "Every index is maintained in the load window." },
            ],
            table: {
              caption: "The index trio against the access profile.",
              headers: ["Index", "Serves", "Cost"],
              rows: [
                ["Bitmap", "Low-cardinality filters (Q1, Pune)", "Explosion on high-cardinality columns"],
                ["Join index", "Star navigation (dim -> fact rows)", "Storage per dimension value; load maintenance"],
                ["B-tree", "High-cardinality ranges (amount)", "Standard; less OLAP-shaped"],
              ],
            },
            bullets: [
              "Bitmaps: filters as bitwise AND/OR over value vectors.",
              "Worked: Q1 AND Pune AND Beverages - three vectors intersected.",
              "Join indexes: dim-value -> fact-row lists; star join becomes intersection.",
              "B-trees keep the high-cardinality range filters.",
              "Loads maintain every index - window accounting (2.4).",
              "Sentence: index the access pattern, pay in load time.",
            ],
            diagram: {
              kind: "fork",
              title: "Indexing an OLAP column",
              caption: "Cardinality and role decide the index - every choice bills the load window.",
              start: "A column to index",
              branches: [
                { label: "Low-cardinality filter column", outcome: "bitmap index - selections become bitwise ops", good: true },
                { label: "Star-navigation dimension", outcome: "join index - fact-row lists per value", good: true },
                { label: "High-cardinality range column", outcome: "B-tree - range scans stay efficient", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Cardinality decides the bitmap",
              body: "The bitmap's boundary condition: 'bitmaps shine on low-cardinality columns (a dozen values, twelve bitmaps) and explode on high-cardinality ones (100,000 SKU values -> 100,000 vectors).' The encodings extend the range, but the rule first: cardinality decides. Quote it when choosing indexes.",
            },
            examQuestions: [
              {
                q: "Explain bitmap and join indexes for OLAP data with the worked three-condition query trace, position B-trees, and state the selection and update-cost logic.",
                marks: 14,
                outline: [
                  "Bitmap: one vector per value; AND/OR for multi-condition filters",
                  "Worked: Q1 AND Pune AND Beverages via three bitmaps",
                  "Cardinality limit: explosion on high-cardinality columns",
                  "Join index: dim-value -> fact-row lists; star join as intersection",
                  "B-tree: high-cardinality ranges",
                  "Selection: match index to access pattern",
                  "Update cost: all indexes maintained in the load window",
                ],
              },
              {
                q: "How does a join index change a four-table star query?",
                marks: 7,
                outline: [

                  "Joins pre-computed as fact-row lists per dimension value",

                  "Query = intersect three lists, fetch surviving rows",

                  "Join machinery replaced by list operations",

                  "List intersection beats hash joins at scale",

                  "Index maintenance rides the load pipeline",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Data Mining Fundamentals",
      summary:
        "Unit III prepares and frames the mining: data preprocessing with cleaning, integration and transformation, data reduction with discretization and concept hierarchies, the basics and techniques of data mining, the KDP - the knowledge discovery process - web structure and usage mining with text and spatial mining, the applications and challenges, and the security, privacy and ethical issues.",
      chapter: {
        number: "03",
        title: "Mining Fundamentals",
        intro:
          "Unit III covers data preprocessing - cleaning, integration and transformation - data reduction, discretization and concept hierarchy generation, the basics and techniques of data mining, the KDP (Knowledge Discovery Process), applications and challenges, web structure mining, web usage mining, spatial mining, text mining, and the security, privacy and ethical issues of mining.",
        inOneBreath:
          "Mining eats prepared data: cleaning, integrating, transforming, reducing (with discretization and hierarchies) - then the techniques run (association, classification, clustering, prediction) inside the KDP's six-step cycle. Web mining splits by target (structure, usage, content), text and spatial extend the reach, and the whole discipline carries security, privacy and ethical duties that a cyber security syllabus weighs deliberately.",
        sections: [
          {
            number: "3.1",
            title: "Data preprocessing - cleaning, integration and transformation",
            body: [
              "Mining eats prepared data, and preprocessing is the syllabus's first named stage - three sub-stages deep. Cleaning: missing values (drop the row, fill with a constant/mean/mode, or predict by regression), noisy values (binning by boundaries/means smooths; regression fits; clustering isolates outliers), and inconsistencies (codes reconciled - 1.4's discipline in mining dress). Integration: merging multiple sources - schema integration (matching 'cust_id' to 'customer_no'), entity resolution (Riya Sharma = R. Sharma = customer 501), and redundancy detection (correlated attributes - one of age and birth-date must go; correlation tests decide).",
              "Transformation: the data reshaped for the miners - normalization (min-max to [0,1], z-score standardization, decimal scaling), smoothing, aggregation, generalization (climbing concept hierarchies), and attribute construction (BMI from height/weight - new features carrying old information more usefully). A worked cleaning trace: a 100,000-row customer table - 3,200 missing incomes (filled with segment medians, not global means - the group-aware choice), 400 duplicate customers merged by phone+name match (entity resolution), income vs age correlation 0.92 (one redundant attribute dropped), incomes min-max normalized to [0,1] for the distance-based miners, age bands built as a concept hierarchy. Four decisions, each recorded - preprocessing is decision-dense.",
              "The discipline point completes the section: preprocessing choices change mining results (a mean-fill biases regressions; a global normalization flattens segment differences), so every transformation is recorded as metadata and revisited when models misbehave - the mining equivalent of 1.4's lineage. The exam's sentence: preprocessing is cleaning, integrating and transforming with recorded decisions - the stage where mining success is actually decided.",
            ],
            keyTerms: [
              { term: "Binning", definition: "Smoothing noisy values into boundary/mean-based bins." },
              { term: "Entity resolution", definition: "Deciding which records refer to the same real entity." },
              { term: "Normalization", definition: "min-max, z-score, decimal scaling - comparable scales for miners." },
              { term: "Attribute construction", definition: "New features derived from existing ones (BMI from height, weight)." },
            ],
            table: {
              caption: "The preprocessing ledger (100K rows).",
              headers: ["Step", "Finding", "Decision"],
              rows: [
                ["Cleaning", "3,200 missing incomes", "Segment-median fill"],
                ["Integration", "400 duplicate customers", "Merged by phone+name match"],
                ["Redundancy", "income-age correlation 0.92", "One attribute dropped"],
                ["Transformation", "mixed scales", "min-max to [0,1]; age bands built"],
              ],
            },
            bullets: [
              "Cleaning: missing (drop/fill/predict), noisy (binning/regression/clustering), inconsistent.",
              "Integration: schema matching, entity resolution, redundancy by correlation.",
              "Transformation: normalization, aggregation, generalization, attribute construction.",
              "Worked ledger: medians by segment, entity merge, correlated attribute dropped, scales normalized.",
              "Choices change results - record every transformation as metadata.",
              "Sentence: preprocessing decides mining success.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The preprocessing pipeline",
              caption: "Clean, integrate, transform - each stage feeding the next, decisions recorded.",
              stages: [
                { label: "Clean", note: "missing, noisy, inconsistent values fixed" },
                { label: "Integrate", note: "schemas matched; entities resolved; redundancy removed" },
                { label: "Transform", note: "normalized, aggregated, enriched" },
                { label: "Record", note: "every decision into metadata" },
                { label: "Mine-ready data", note: "the output the techniques consume" },
              ],
            },
            callout: {
              type: "warning",
              title: "Global means bias global models",
              body: "The preprocessing subtlety examiners reward: 'filling missing incomes with the global mean erases segment differences the miner is hunting - fill by segment median instead.' Every cleaning choice is a modelling choice; the metadata record is what makes the choice visible later.",
            },
            examQuestions: [
              {
                q: "Explain data cleaning, integration and transformation with the worked 100K-row ledger, and state why preprocessing decisions must be recorded.",
                marks: 14,
                outline: [
                  "Cleaning: missing (drop/fill/predict); noisy (binning, regression, clustering)",
                  "Integration: schema integration, entity resolution, redundancy via correlation",
                  "Transformation: min-max, z-score, decimal scaling; aggregation; attribute construction",
                  "Ledger: segment-median fill; phone+name merge; 0.92 correlation dropped",
                  "Normalization for distance-based miners; age bands as hierarchy",
                  "Recorded decisions make results auditable and revisable",
                  "Sentence: preprocessing decides mining success",
                ],
              },
              {
                q: "Why does entity resolution precede mining?",
                marks: 7,
                outline: [

                  "Duplicates inflate counts and split behaviour across fake identities",

                  "Patterns learned on unresolved entities are wrong at the source",

                  "Resolution gives each real customer one history",

                  "Segments and churn split across unresolved identities",

                  "Linkage rules become audited metadata themselves",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "Data reduction, discretization and concept hierarchies",
            body: [
              "Data reduction makes big data minable without losing information that matters. The techniques, per the syllabus's reduction family: data cube aggregation (pre-aggregated views - 2.5's lattice reused as reduction), attribute subset selection (drop irrelevant/weak attributes - the correlation tests of 3.1 extended), dimensionality reduction (wavelets, PCA - fewer dimensions carrying the variance), numerosity reduction (sampling, histograms, clustering as compact representatives), and discretization (continuous values into bins - equal-width, equal-frequency, entropy-based). Concept hierarchy generation: the ladders built from discretized attributes (young/middle/senior from ages) or from existing structure (city -> province -> country).",
              "A worked reduction trace fixes the choices. A 10M-row transaction table: aggregation - the mining runs on the daily-aggregated cube (10M -> 400K rows, patterns preserved at the intended grain); attribute selection - transaction-id dropped (pure identifier, zero pattern value), correlated store-vs-city kept one; PCA reduces 40 behavioural attributes to 8 components holding 95% of variance; sampling - the exploratory passes run on a 5% stratified sample (strata by segment, so rare segments survive); discretization - income split by entropy-based cut points (the splits that best separate the target classes), yielding the young/middle/senior-style ladder for age and a low/mid/high income ladder. Four reductions, one dataset 50x lighter and pattern-equivalent.",
              "The reduction's guard completes the section: reduce only what the analysis does not need - the information lost must be information the miner was not using (sampling without stratification silently deletes rare segments; aggressive PCA drops low-variance dimensions that outliers live in - this syllabus's fraud-detection concern). The exam's sentence: reduction trades detail for tractability - cube aggregation, attribute selection, dimensionality and numerosity techniques, with discretization and hierarchies shaping what the miners can express.",
            ],
            keyTerms: [
              { term: "Attribute subset selection", definition: "Keeping the pattern-bearing attributes; dropping the rest." },
              { term: "Dimensionality reduction", definition: "PCA/wavelets - fewer dimensions carrying the variance." },
              { term: "Stratified sampling", definition: "Sampling within segments so rare strata survive." },
              { term: "Entropy-based discretization", definition: "Cut points chosen to best separate target classes." },
            ],
            table: {
              caption: "The reduction ledger (10M rows).",
              headers: ["Technique", "Applied to", "Result"],
              rows: [
                ["Cube aggregation", "transaction table", "10M -> 400K daily rows"],
                ["Attribute selection", "transaction-id, store-vs-city", "identifiers and redundancy dropped"],
                ["PCA", "40 behavioural attributes", "8 components, 95% variance"],
                ["Stratified sampling", "exploratory passes", "5% sample, segments preserved"],
                ["Discretization", "income, age", "entropy cut points; ladders built"],
              ],
            },
            bullets: [
              "Reduction family: aggregation, attribute selection, dimensionality, numerosity.",
              "Discretization: equal-width, equal-frequency, entropy-based bins.",
              "Concept hierarchies from bins or existing structure - the mining vocabulary.",
              "Worked: 10M -> 400K cube rows; 40 -> 8 components; 5% stratified sample.",
              "Guard: reduce only unneeded information - outliers live in low variance.",
              "Sentence: reduction trades detail for tractability, deliberately.",
            ],
            diagram: {
              kind: "fork",
              title: "Which reduction technique?",
              caption: "The bottleneck decides - size, width, noise, or vocabulary.",
              start: "Data too heavy for mining",
              branches: [
                { label: "Too many rows", outcome: "numerosity reduction - sampling, histograms, clustering", good: true },
                { label: "Too many attributes", outcome: "subset selection + PCA/wavelets", good: true },
                { label: "Finer than the question", outcome: "cube aggregation to the intended grain", good: true },
                { label: "Continuous values need categories", outcome: "discretization + concept hierarchies", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Outliers live in the dropped dimensions",
              body: "The security-relevant caution: 'aggressive PCA and variance-based reduction drop low-variance dimensions - exactly where rare-but-critical outliers (frauds, intrusions) hide.' For this syllabus's fraud and intrusion mining, reduction is applied with outlier-preservation checks, not by variance alone.",
            },
            examQuestions: [
              {
                q: "Explain the data reduction techniques - aggregation, attribute selection, dimensionality, numerosity - with discretization and concept hierarchies, working the 10M-row ledger.",
                marks: 14,
                outline: [
                  "Cube aggregation: 10M -> 400K at the intended grain",
                  "Attribute selection: identifiers and correlated pairs dropped",
                  "PCA: 40 attributes -> 8 components, 95% variance",
                  "Stratified sampling: rare segments preserved in the 5% pass",
                  "Discretization: entropy cut points for income and age",
                  "Hierarchies built from bins or structure",
                  "Guard: outliers live in dropped low-variance dimensions",
                ],
              },
              {
                q: "Why is entropy-based discretization preferred over equal-width binning for classification?",
                marks: 7,
                outline: [

                  "Equal-width ignores class structure - cuts may split pure groups",

                  "Entropy cuts maximize class separation at each point",

                  "The bins become informative for the classifier, not just compact",

                  "Class-boundary cuts align bins with the target",

                  "Equal-frequency binning is the middle-ground alternative",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Data mining basics and techniques",
            body: [
              "Data mining is the non-trivial extraction of implicit, previously unknown, potentially useful patterns from data - and the definition's adjectives are examinable: implicit (not stated in the schema), previously unknown (not already known to the business), potentially useful (actionable). The technique families, per the syllabus: association mining (rules among items - Unit IV), classification (supervised: predict a labelled class - Unit V), clustering (unsupervised: group without labels - Unit V), prediction (regression - continuous targets), outlier analysis (the rare and strange - Unit V), and the evolution/sequence family (trends over time - Unit IV's time-series clause).",
              "A worked family mapping fixes which technique answers which question. 'Which products are bought together?' -> association (Unit IV). 'Which customers will churn?' -> classification (labelled churn history). 'What customer groups exist?' -> clustering (no labels exist). 'What will next month's sales be?' -> prediction/regression. 'Which transactions are abnormal?' -> outlier analysis. 'How has buying behaviour shifted over quarters?' -> evolution/sequence mining. Six business questions, six technique families - and the mapping rule (supervised needs labels; unsupervised needs none) is the selection's first gate.",
              "The basics' guard completes the section: patterns vs noise - a mining run on random data finds random patterns, so techniques carry statistical significance tests (support thresholds, significance levels), and interestingness is judged by the business (a statistically real pattern nobody can act on is trivia). The exam's sentence: data mining is the extraction of implicit, unknown, useful patterns - by association, classification, clustering, prediction, outlier and evolution techniques, selected by the question's labels and target.",
            ],
            keyTerms: [
              { term: "Supervised vs unsupervised", definition: "Labelled targets (classification, prediction) vs no labels (clustering, association)." },
              { term: "Interestingness", definition: "Statistically real AND actionable - both tests, not either." },
              { term: "Technique families", definition: "Association, classification, clustering, prediction, outlier, evolution." },
              { term: "Pattern vs noise", definition: "Significance thresholds separate the two." },
            ],
            table: {
              caption: "Business questions to technique families.",
              headers: ["Question", "Family", "Needs labels?"],
              rows: [
                ["Bought-together products", "Association", "No"],
                ["Who will churn?", "Classification", "Yes (churn history)"],
                ["What groups exist?", "Clustering", "No"],
                ["Next month's sales?", "Prediction (regression)", "Yes (historical values)"],
                ["Abnormal transactions?", "Outlier analysis", "Depends on method"],
                ["Behaviour shifts over time?", "Evolution/sequence", "No"],
              ],
            },
            bullets: [
              "Definition's adjectives: implicit, previously unknown, potentially useful.",
              "Six families map to six business questions.",
              "Selection gate: supervised needs labels; unsupervised does not.",
              "Significance tests separate pattern from noise.",
              "Interestingness = statistical reality + business actionability.",
              "Sentence: techniques selected by the question's labels and target.",
            ],
            diagram: {
              kind: "compare",
              title: "Supervised vs unsupervised mining",
              caption: "The first selection gate - labels or no labels.",
              left: {
                heading: "Supervised (labels exist)",
                items: [
                  "Classification: predict the labelled class (churn)",
                  "Prediction: regress a numeric target (sales)",
                  "Evaluated against known answers",
                  "Needs historical labelled data",
                ],
              },
              right: {
                heading: "Unsupervised (no labels)",
                items: [
                  "Clustering: discover groups",
                  "Association: discover co-occurrence rules",
                  "Outlier: discover the abnormal",
                  "Evaluated by interestingness and usefulness",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Unknown and useful - both adjectives count",
              body: "The definition question's trap: quoting 'implicit, previously unknown, potentially useful' and stopping. The examiner wants the consequences: 'unknown' requires novelty checks against business knowledge, 'useful' requires actionability tests - a real pattern nobody can act on is trivia, not knowledge.",
            },
            examQuestions: [
              {
                q: "Define data mining with its defining adjectives, map six business questions to the six technique families, and state the supervised/unsupervised selection gate with the interestingness tests.",
                marks: 14,
                outline: [
                  "Definition: implicit, previously unknown, potentially useful patterns",
                  "Families: association, classification, clustering, prediction, outlier, evolution",
                  "Mapping: churn -> classification; groups -> clustering; trends -> evolution",
                  "Gate: supervised needs labels; unsupervised does not",
                  "Significance tests separate pattern from noise",
                  "Interestingness: statistically real AND actionable",
                  "Unknown/useful consequences: novelty and actionability checks",
                ],
              },
              {
                q: "Why can a statistically significant pattern still be useless?",
                marks: 7,
                outline: [

                  "Real but already known to the business - no novelty",

                  "Real but unactionable - no lever exists",

                  "Interestingness demands both novelty and actionability",

                  "Statistical tests know nothing of business context",

                  "Actionability requires an owner and a lever",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "The KDP - knowledge discovery process",
            body: [
              "Mining is one step of a larger process, and the syllabus's KDP names it: the Knowledge Discovery Process - selection (data from the warehouse/target domain), preprocessing (3.1's cleaning, integration), transformation (3.2's reduction into the mining-ready form), data mining (the techniques applied), evaluation (patterns tested for significance and interestingness), and knowledge presentation (visualization, reports - the output that reaches decision makers). The cycle iterates: evaluation failures send the process back to selection or preprocessing, not to the miner alone.",
              "A worked KDP trace fixes the loop on one question. Question: which customers will respond to a premium offer? Selection: the customer cube slice (3 years, active customers) from the warehouse. Preprocessing: cleaning, entity resolution, segment medians (3.1's ledger). Transformation: PCA to 8 components, income ladder built (3.2). Mining: classification on the labelled past-campaign data. Evaluation: 82% accuracy but precision on the minority class is 31% - the model flags everyone; back to preprocessing (the missing behavioural attributes). Second pass: precision 64% - presentable. Presentation: segment-level response charts to the campaign team. Two passes, six steps - the KDP's iteration demonstrated.",
              "The process's lesson completes the section: mining failures are usually upstream failures (bad selection, dirty preprocessing, wrong transformation), so the KDP's discipline is diagnosing which stage failed before re-running the miner - the iteration is a loop with diagnosis, not a retry button. The exam's sentence: the KDP is selection, preprocessing, transformation, mining, evaluation and presentation - a loop whose failures are diagnosed at their stage, not retried blindly.",
            ],
            keyTerms: [
              { term: "KDP", definition: "Selection -> preprocessing -> transformation -> mining -> evaluation -> presentation." },
              { term: "Pattern evaluation", definition: "Significance + interestingness tests on mined output." },
              { term: "Knowledge presentation", definition: "Visualization and reports reaching decision makers." },
              { term: "Stage-diagnosed iteration", definition: "Failures traced to their stage, not retried blindly." },
            ],
            table: {
              caption: "The worked KDP trace (two passes).",
              headers: ["Step", "Pass 1", "Pass 2"],
              rows: [
                ["Selection", "3-year active-customer slice", "same slice"],
                ["Preprocessing", "cleaning + entity resolution", "+ behavioural attributes added"],
                ["Transformation", "PCA 8; income ladder", "refreshed"],
                ["Mining", "classification", "re-run"],
                ["Evaluation", "82% acc, 31% precision - fail", "64% precision - pass"],
                ["Presentation", "-", "segment response charts"],
              ],
            },
            bullets: [
              "Six steps: selection, preprocessing, transformation, mining, evaluation, presentation.",
              "Worked: precision failure diagnosed to preprocessing, not the miner.",
              "Second pass adds behavioural attributes - evaluation passes.",
              "Presentation: segment charts to the campaign team.",
              "Iteration is diagnosed, not blind - the KDP's discipline.",
              "Sentence: mining failures are usually upstream failures.",
            ],
            diagram: {
              kind: "cycle",
              title: "The KDP loop",
              caption: "Six steps, iterated with diagnosis - evaluation failures route back to their stage.",
              steps: [
                { label: "Selection", note: "target data from the warehouse" },
                { label: "Preprocessing", note: "clean, integrate" },
                { label: "Transformation", note: "reduce to mining-ready form" },
                { label: "Mining", note: "apply the technique" },
                { label: "Evaluation", note: "significance + interestingness" },
                { label: "Presentation", note: "charts and reports to deciders" },
              ],
            },
            callout: {
              type: "exam",
              title: "Diagnose the stage, not the miner",
              body: "The KDP question's differentiator: 'a model with poor precision does not get re-run - the failure is diagnosed to its stage: selection too narrow, preprocessing dirty, transformation lossy.' The two-pass trace shows the diagnosis routing the fix upstream; that routing is the process's whole value.",
            },
            examQuestions: [
              {
                q: "Explain the Knowledge Discovery Process step by step, work the two-pass trace on the campaign question, and state the stage-diagnosis discipline.",
                marks: 14,
                outline: [
                  "Steps: selection, preprocessing, transformation, mining, evaluation, presentation",
                  "Pass 1: 82% accuracy, 31% minority precision - evaluation fails",
                  "Diagnosis: missing behavioural attributes = preprocessing stage",
                  "Pass 2: attributes added, precision 64% - presentable",
                  "Presentation: segment-level charts to the campaign team",
                  "Iteration with diagnosis, not blind retry",
                  "Sentence: mining failures are usually upstream",
                ],
              },
              {
                q: "Why is presentation a named KDP step rather than an afterthought?",
                marks: 7,
                outline: [

                  "Knowledge not communicated is not discovered",

                  "Presentation format changes decisions (charts vs tables)",

                  "Evaluation includes whether deciders can act on the output",

                  "Charts surface patterns tables hide",

                  "Audience-appropriate views differ per stakeholder",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Web, text and spatial mining",
            body: [
              "The syllabus's extended mining targets push past the warehouse. Web mining splits by target: web structure mining (the link graph - which pages link to which; PageRank-style importance, hub-and-authority analysis), web usage mining (the server logs - sessions, paths, frequent navigation patterns, the inputs to site redesign and personalization), and web content mining (the pages themselves - search, categorization). Text mining: patterns in documents - classification (spam filtering - this syllabus's sibling), clustering (topic discovery), information extraction (entities, relations), and sentiment. Spatial mining: patterns with location - spatial association (co-location of facilities), spatial clustering (crime or disease hotspots), spatial outlier detection (values anomalous relative to spatial neighbours).",
              "A worked triple fixes each target's data and output. Structure: crawl the department site's 5,000 pages, build the link matrix, PageRank ranks the admissions page highest - navigation redesign follows the authority structure. Usage: 30 days of server logs - sessions reconstructed by IP+cookie, 15-minute timeouts; frequent sequences (home -> courses -> fees -> exit) reveal the fees page as the exit point - the funnel's leak, fixed by moving the fee structure earlier. Text: 10,000 student emails classified into query types (admissions, fees, tech support) with 89% accuracy - routing automation. Spatial: district-wise crime counts - hotspots clustered (density-based), one district flagged as a spatial outlier (high count vs all its neighbours) - an investigation target. Four targets, four data types, four outputs.",
              "The frame completes the section: web, text and spatial mining are the core techniques (clustering, classification, association) re-targeted at new data types - the graph, the document, the map - with preprocessing per type (logs to sessions, text to term vectors, maps to spatial neighbourhoods). The exam's sentence: web mining splits into structure, usage and content; text and spatial mining extend the same techniques to documents and maps - each new data type importing its own preprocessing.",
            ],
            keyTerms: [
              { term: "Web structure mining", definition: "Patterns in the link graph - PageRank, hubs and authorities." },
              { term: "Web usage mining", definition: "Patterns in server logs - sessions, paths, funnel analysis." },
              { term: "Text mining", definition: "Classification, clustering, extraction over documents." },
              { term: "Spatial outlier", definition: "A value anomalous relative to its spatial neighbours." },
            ],
            table: {
              caption: "The four extended targets.",
              headers: ["Target", "Data", "Techniques", "Worked output"],
              rows: [
                ["Web structure", "Link graph (5K pages)", "PageRank, hub/authority", "admissions page ranked top"],
                ["Web usage", "Server logs -> sessions", "sequence mining", "fees page = funnel leak"],
                ["Text", "10K emails -> term vectors", "classification", "89% query-type routing"],
                ["Spatial", "district crime counts", "clustering + outliers", "one spatial outlier district"],
              ],
            },
            bullets: [
              "Web mining trio: structure (links), usage (logs), content (pages).",
              "Sessions reconstructed: IP+cookie, 15-minute timeout.",
              "Worked: PageRank ranking; funnel leak found; email routing; hotspot + outlier.",
              "Text and spatial = core techniques re-targeted.",
              "Each data type imports its preprocessing (logs, term vectors, neighbourhoods).",
              "Sentence: same techniques, new data types.",
            ],
            diagram: {
              kind: "layers",
              title: "The web mining stack",
              caption: "Structure, usage and content - three layers over the same web.",
              layers: [
                { label: "Web content mining", note: "the pages themselves - search, categorization" },
                { label: "Web usage mining", note: "logs -> sessions -> paths and funnels" },
                { label: "Web structure mining", note: "the link graph - PageRank, authorities" },
                { label: "The web", note: "one object, three minable projections" },
              ],
            },
            callout: {
              type: "tip",
              title: "Usage mining starts with sessionization",
              body: "The preprocessing detail that separates real usage mining from log reading: 'raw logs are requests, not behaviour - sessionization (IP+cookie grouping, timeout cut-offs) is what turns request lists into the paths that sequence mining needs.' Name the step; examiners look for it in usage-mining answers.",
            },
            examQuestions: [
              {
                q: "Explain web structure, usage and content mining, text mining and spatial mining, with the worked traces for each of the four targets.",
                marks: 14,
                outline: [
                  "Structure: link matrix, PageRank - admissions page tops",
                  "Usage: sessionization, frequent sequences - fees funnel leak",
                  "Content: pages categorized and searched",
                  "Text: 10K emails classified at 89% for routing",
                  "Spatial: hotspot clustering + one spatial outlier district",
                  "Core techniques re-targeted at graph, log, text, map",
                  "Each type imports its own preprocessing",
                ],
              },
              {
                q: "How does spatial outlier analysis differ from ordinary outlier detection?",
                marks: 7,
                outline: [

                  "Comparison is against spatial neighbours, not the whole population",

                  "A district is odd relative to its adjacent districts",

                  "Neighbourhood definition (adjacency, distance) is the method's choice",

                  "Global rarity would miss the locally-odd district",

                  "Adjacency graphs define the comparison set",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "Applications and challenges of data mining",
            body: [
              "The syllabus's applications list is the discipline's portfolio: market basket analysis and cross-selling (Unit IV's home turf), customer relationship management (segmentation, churn prediction, next-best-offer), fraud and intrusion detection (the outlier family - this syllabus's security anchor), scientific discovery (genomics, astronomy sky surveys), financial analysis (credit scoring, market movement), and operations (predictive maintenance, demand forecasting). Each application names its technique: basket -> association; churn -> classification; fraud -> outlier; demand -> prediction; segments -> clustering.",
              "A worked application trace fixes the portfolio's shape. A bank mines three questions: credit scoring (classification on labelled repayment history - 78% default-catch rate, driving pricing tiers), fraud detection (outlier analysis on transaction streams - 0.4% flagged, 2:1 true-positive ratio after tuning), and cross-sell (association rules on product holdings - 'customers with cards also open FDs within 90 days' - campaign targeting). Three applications, three techniques, one warehouse - the portfolio in one institution.",
              "The challenges complete the section, and the syllabus's list is candid: data quality (the preprocessing burden of 3.1-3.2 at production scale), scalability (techniques must survive the 2B-row tables), dimensionality (the curse - distance-based methods degrade as dimensions grow), evolving data (patterns drift - models need refresh cycles), and interpretability (black-box models meet regulated decisions). The exam's sentence: data mining's applications span commerce, security and science by reusing six technique families - and its challenges are quality, scale, dimensionality, drift and interpretability, each with a known mitigation and a real cost.",
            ],
            keyTerms: [
              { term: "Churn prediction", definition: "Classification over labelled attrition history." },
              { term: "Curse of dimensionality", definition: "Distance-based methods degrade as dimensions grow." },
              { term: "Model drift", definition: "Patterns shift - models need monitored refresh cycles." },
              { term: "Interpretability", definition: "Regulated and operational decisions need explainable models." },
            ],
            table: {
              caption: "Applications and their techniques.",
              headers: ["Application", "Technique", "Worked result"],
              rows: [
                ["Credit scoring", "Classification", "78% default-catch; pricing tiers"],
                ["Fraud detection", "Outlier analysis", "0.4% flagged; 2:1 true-positive"],
                ["Cross-sell", "Association rules", "card->FD within 90 days"],
                ["Demand forecasting", "Prediction", "next-month sales curve"],
                ["Segmentation", "Clustering", "actionable customer groups"],
              ],
            },
            bullets: [
              "Portfolio: CRM, fraud, science, finance, operations - six families reused.",
              "Bank trace: three applications, three techniques, one warehouse.",
              "Challenges: quality, scalability, dimensionality, drift, interpretability.",
              "Drift: monitored refresh cycles keep models honest.",
              "Interpretability: regulated decisions need explainable outputs.",
              "Sentence: techniques reused everywhere; challenges each cost real work.",
            ],
            diagram: {
              kind: "matrix",
              title: "Application feasibility",
              caption: "Data readiness against decision value - mine the upper-right first.",
              axes: { x: "Data readiness (low -> high)", y: "Decision value (low -> high)" },
              quadrants: [
                { label: "Flagship mining", note: "high value, ready data - credit scoring, fraud" },
                { label: "Value waiting on data", note: "invest in capture first" },
                { label: "Quick wins", note: "low value, easy data - do while learning" },
                { label: "Defer", note: "low value, weak data" },
              ],
            },
            callout: {
              type: "warning",
              title: "Drift is the silent model-killer",
              body: "The production reality examiners under-teach: 'a fraud model trained last year misses this year's fraud - patterns drift, and the KDP needs a monitored refresh cycle, not a one-time deployment.' In the security applications, drift is the difference between detection and blindness.",
            },
            examQuestions: [
              {
                q: "Discuss the applications of data mining with the bank's three-application trace, and analyze the challenges - quality, scalability, dimensionality, drift, interpretability - with their mitigations.",
                marks: 14,
                outline: [
                  "Applications: basket, CRM, fraud, science, finance, operations",
                  "Bank trace: credit scoring 78%, fraud 0.4% flagged 2:1, cross-sell rules",
                  "Technique reuse: classification, outlier, association from the six families",
                  "Challenge: quality - preprocessing burden at scale",
                  "Challenge: scalability and the curse of dimensionality",
                  "Challenge: drift - monitored refresh cycles",
                  "Challenge: interpretability for regulated decisions",
                ],
              },
              {
                q: "Why does the curse of dimensionality hit distance-based methods hardest?",
                marks: 7,
                outline: [

                  "In high dimensions, all pairwise distances converge",

                  "Nearest and farthest neighbours become indistinguishable",

                  "K-Means, K-NN and density methods lose their discriminating geometry",

                  "Volume grows faster than surface - points spread apart",

                  "Dimension reduction restores usable geometry",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "Security, privacy and ethical issues in mining",
            body: [
              "Mining's power is its exposure, and the syllabus's trio names the duties. Security issues: the mined data and models are assets - access-controlled like the warehouse itself (this subject's sibling discipline), model theft and poisoning are attacks on the models, and mining outputs can leak (a pattern report is a data disclosure). Privacy issues: mining re-identifies - anonymized records link back through combinations (the classic quasi-identifier attack: birth date, ZIP and gender identify most people); profiling crosses consent lines (data collected for service used for scoring); and inference infers sensitive traits never disclosed. Ethical issues: fairness (models inherit and amplify data bias - credit scoring on biased history discriminates), transparency (affected people deserve explanations), and purpose limitation (Unit IV's privacy principles, now binding the miner).",
              "A worked issue trace fixes the trio. A telecom mines call detail records for churn: security - the CDR store and the churn model are access-controlled, model exports logged (security); privacy - the 'anonymized' training set re-identifies 60% of subscribers by (area, call-volume-bucket, age-band) - the quasi-identifier attack demonstrated; the fix: k-anonymity generalization until every combination covers at least 20 subscribers, plus purpose limitation (churn only, not credit scoring - a different consent). Ethics: the model's features include a proxy for income that correlates with a protected class - fairness testing shows a 15% disparity; the feature is dropped and the model rebuilt. Three duties, three concrete controls - and the trace is this syllabus's ethics lab.",
              "The protective techniques complete the section: k-anonymity (every quasi-identifier combination covers k people), l-diversity (each group holds l distinct sensitive values), differential privacy (query answers perturbed so individuals are mathematically indistinguishable), and the governance layer (consent mapping, purpose limitation, model audits). The exam's sentence: mining's security, privacy and ethics duties are engineering requirements - access control for models, k-anonymity and differential privacy for data, fairness testing and purpose limitation for decisions - each demonstrated, not just declared.",
            ],
            keyTerms: [
              { term: "Quasi-identifier attack", definition: "Re-identification via attribute combinations (ZIP + birth date + gender)." },
              { term: "K-anonymity", definition: "Every quasi-identifier combination covers at least k individuals." },
              { term: "Differential privacy", definition: "Perturbed answers making individuals mathematically indistinguishable." },
              { term: "Purpose limitation", definition: "Data used only for the consented purpose - the miner's consent duty." },
            ],
            table: {
              caption: "The telecom CDR trace.",
              headers: ["Duty", "Finding", "Control"],
              rows: [
                ["Security", "CDRs + model = assets", "Access control; model-export logging"],
                ["Privacy", "60% re-identification", "k-anonymity (k=20) on quasi-identifiers"],
                ["Purpose", "churn data eyed for scoring", "purpose limitation: churn only"],
                ["Ethics", "income proxy, 15% disparity", "feature dropped; fairness re-tested"],
              ],
            },
            bullets: [
              "Security: models and mined data are protected assets; poisoning and theft are attacks.",
              "Privacy: re-identification via quasi-identifiers; inference of undisclosed traits.",
              "Ethics: bias inheritance, transparency, purpose limitation.",
              "Telecom trace: 60% re-identification -> k=20; proxy feature -> fairness rebuild.",
              "Techniques: k-anonymity, l-diversity, differential privacy.",
              "Sentence: the duties are engineering requirements, demonstrated.",
            ],
            diagram: {
              kind: "compare",
              title: "Security vs privacy vs ethics",
              caption: "Three duties over one mining programme - assets, persons, decisions.",
              left: {
                heading: "Security + privacy",
                items: [
                  "Security: models and data as protected assets",
                  "Attacks: model theft, poisoning, output leakage",
                  "Privacy: re-identification and inference",
                  "Controls: access control, k-anonymity, differential privacy",
                ],
              },
              right: {
                heading: "Ethics",
                items: [
                  "Fairness: bias inherited and amplified",
                  "Transparency: explanations for affected people",
                  "Purpose limitation: consented uses only",
                  "Controls: fairness testing, audits, consent mapping",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Anonymized is not anonymous",
              body: "The privacy lesson's sharpest form: 'removing names does not anonymize - quasi-identifiers (area, age-band, volume-bucket) re-identified 60% of the telecom trace.' Anonymization is a measurable property (k-anonymity, differential privacy), not a deletion habit; that measurement mindset is the exam's differentiator.",
            },
            examQuestions: [
              {
                q: "Discuss the security, privacy and ethical issues of data mining, work the telecom CDR trace across all three duties, and present the protective techniques (k-anonymity, l-diversity, differential privacy).",
                marks: 14,
                outline: [
                  "Security: models/data as assets; theft, poisoning, leakage",
                  "Privacy: quasi-identifier re-identification (60% in the trace)",
                  "k-anonymity: generalize until combinations cover k=20",
                  "Purpose limitation: churn consent does not extend to scoring",
                  "Ethics: income proxy, 15% disparity - feature dropped",
                  "l-diversity and differential privacy as further guarantees",
                  "Sentence: duties are engineering requirements, demonstrated",
                ],
              },
              {
                q: "Why does l-diversity strengthen k-anonymity?",
                marks: 7,
                outline: [

                  "k-anonymity can hide homogeneous groups (same sensitive value)",

                  "l-diversity requires l distinct sensitive values per group",

                  "Together: nobody is unique, and no group is uniform",

                  "Uniform groups leak the shared value to everyone",

                  "The pair closes uniqueness and uniformity together",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Mining Association Rules in Large Databases",
      summary:
        "Unit IV mines the market basket: association rule mining with support, confidence and lift, single-dimensional boolean association rules, the Apriori algorithm, multi-level association rules, the FP-Growth algorithm, time-series mining of association rules, and the latest trends in association rule mining.",
      chapter: {
        number: "04",
        title: "Association Rules",
        intro:
          "Unit IV covers association rule mining, single-dimensional boolean association rules, multi-level association rules, the Apriori algorithm, the FP-Growth algorithm, time-series mining of association rules, and the latest trends in association rule mining.",
        inOneBreath:
          "A rule X -> Y carries support (how common), confidence (how reliable) and lift (how interesting). Mining splits into two steps - frequent itemsets, then rules - with Apriori's anti-monotone prune (every subset of a frequent set is frequent) driving level-wise candidate generation, concept hierarchies lifting rules to multiple levels, and FP-Growth replacing candidate generation with the FP-tree and conditional pattern bases; time series adds sequence, and the trends add constraints, interestingness and streams.",
        sections: [
          {
            number: "4.1",
            title: "Association rule mining - support, confidence and lift",
            body: [
              "An association rule is an implication among itemsets - X -> Y (bread -> butter) - and the syllabus's three measures grade it. Support: s(X -> Y) = P(X and Y) - the fraction of transactions containing both; the frequency gate. Confidence: c(X -> Y) = P(Y | X) = support(XY)/support(X) - among baskets with X, how many have Y; the reliability measure. Lift: lift(X -> Y) = c(X -> Y)/P(Y) - confidence divided by Y's base rate; the interest measure (lift 1 means independence; above 1 means the rule beats chance; below 1, X suppresses Y).",
              "A worked market fixes the arithmetic. 100 baskets: bread appears in 40, butter in 30, both in 20. Rule bread -> butter: support = 20/100 = 20%; confidence = 20/40 = 50%; lift = 50% / 30% = 1.67 - the rule is frequent, moderately reliable, and 67% more likely than chance. Reverse: butter -> bread: support 20%; confidence = 20/30 = 67%; lift same 1.67 - confidence is asymmetric, support and lift are not. Thresholds: min-support 20% and min-confidence 50% would keep both; a stronger 60% confidence drops the first - the threshold choices decide the rule set, which is why they are business parameters, not technical constants.",
              "The lift's caution completes the section: high confidence on a very common Y is uninteresting (confidence 90% when Y appears in 88% of baskets is lift 1.02 - chance dressed up); lift corrects the base-rate illusion. The exam's sentence: association rules are graded by support (frequency), confidence (reliability) and lift (interest beyond the base rate) - three measures, three different questions, and thresholds that are business choices.",
            ],
            keyTerms: [
              { term: "Support", definition: "s(X->Y) = P(X and Y) - the frequency gate." },
              { term: "Confidence", definition: "c(X->Y) = support(XY)/support(X) - reliability among X-baskets." },
              { term: "Lift", definition: "confidence / P(Y) - interest beyond chance; 1 = independence." },
              { term: "Itemset", definition: "A set of items; frequent if its support clears the threshold." },
            ],
            table: {
              caption: "The 100-basket market.",
              headers: ["Measure", "bread -> butter", "butter -> bread"],
              rows: [
                ["Support", "20/100 = 20%", "20/100 = 20%"],
                ["Confidence", "20/40 = 50%", "20/30 = 67%"],
                ["Lift", "0.50/0.30 = 1.67", "0.67/0.40 = 1.67"],
              ],
            },
            bullets: [
              "Three measures: support (common), confidence (reliable), lift (interesting).",
              "Worked: bread->butter at 20%, 50%, lift 1.67.",
              "Confidence asymmetric; support and lift symmetric.",
              "Base-rate trap: high confidence on common Y is lift ~1 - uninteresting.",
              "Thresholds (min-sup, min-conf) are business parameters.",
              "Sentence: three measures, three questions.",
            ],
            diagram: {
              kind: "flow",
              title: "Grading a rule",
              caption: "Frequency, reliability, interest - the three-gate grading of any candidate rule.",
              steps: [
                { label: "Support", note: "20/100 = 20% - passes min-sup 20%" },
                { label: "Confidence", note: "20/40 = 50% - passes min-conf 50%" },
                { label: "Lift", note: "1.67 - beats chance; keep the rule" },
                { label: "Rule shipped", note: "bread -> butter enters the rule set" },
              ],
            },
            callout: {
              type: "exam",
              title: "Lift corrects the base rate",
              body: "The rule-grading trap: 'a 90%-confidence rule on an item present in 88% of baskets is lift 1.02 - pure chance.' Confidence alone promotes base-rate illusions; lift is the correction. Quote the 90/88 example - it is the fastest demonstration that three measures, not one, grade rules.",
            },
            examQuestions: [
              {
                q: "Define support, confidence and lift, work the 100-basket bread-butter example in both directions, and state why lift is needed beyond confidence.",
                marks: 14,
                outline: [
                  "Support = P(XY) = 20%; confidence = P(Y|X) = 50%",
                  "Reverse rule: confidence 67%, same support",
                  "Lift = confidence / base rate = 1.67 both ways",
                  "Confidence asymmetric; support and lift symmetric",
                  "Base-rate trap: 90% confidence on 88%-common Y = lift 1.02",
                  "Thresholds are business parameters (min-sup, min-conf)",
                  "Three measures grade frequency, reliability, interest",
                ],
              },
              {
                q: "Why is support symmetric while confidence is not?",
                marks: 7,
                outline: [

                  "Support counts joint occurrences - order-free",

                  "Confidence conditions on the antecedent - swapping changes the denominator",

                  "Lift normalizes both sides by base rates, restoring symmetry",

                  "Swapping X and Y changes only the conditioning set",

                  "Symmetry makes support the mining's stable currency",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "Single-dimensional boolean association rules - the market basket model",
            body: [
              "The market basket model is the mining's base case: transactions (baskets) of items, boolean attributes (in-basket or not), single-dimensional rules (one predicate per dimension - buys(X, bread) -> buys(X, butter)). The mining task decomposes into two steps, and the decomposition is the syllabus's structural insight: step one, find all frequent itemsets (itemsets whose support clears min-sup - the expensive combinatorial step); step two, generate rules from them (for each frequent itemset L, every non-empty subset A gives rule A -> L - A if confidence clears min-conf - the cheap arithmetic step).",
              "A worked decomposition fixes the split. Frequent itemsets at min-sup 20% from the 100-basket store: {bread} 40%, {butter} 30%, {bread, butter} 20% - three frequent sets. Rule generation from {bread, butter}: subsets {bread}, {butter}; rules bread -> butter (confidence 50% - pass at 50) and butter -> bread (67% - pass). From singleton sets, no rules (no proper non-empty subset). Output: two rules from three itemsets - two steps, one cheap, one expensive. The combinatorial scale shows why step one dominates: 10,000 distinct items -> 2^10,000 candidate itemsets in principle; the anti-monotone property (next section) is what makes the search finite.",
              "The multi-dimensional note completes the base case: single-dimensional boolean rules restrict to one predicate (buys); multi-dimensional rules join predicates (age(X, '30-39') AND income(X, 'high') -> buys(X, laptop)) - an extension the syllabus flags, solved by the same two-step machinery over the joined attribute space. The exam's sentence: the market basket model mines single-dimensional boolean rules in two steps - frequent itemsets (the combinatorial core) then rule generation (the confidence filter) - and every algorithm in this unit is a strategy for step one.",
            ],
            keyTerms: [
              { term: "Market basket model", definition: "Transactions of items; boolean in-basket attributes." },
              { term: "Two-step decomposition", definition: "Frequent itemsets first (expensive), rules second (cheap confidence filter)." },
              { term: "Anti-monotone property", definition: "Every subset of a frequent itemset is frequent - the search pruner." },
              { term: "Multi-dimensional rules", definition: "Predicates joined across dimensions (age AND income -> buys)." },
            ],
            table: {
              caption: "The two-step output (min-sup 20%, min-conf 50%).",
              headers: ["Step", "Input", "Output"],
              rows: [
                ["Frequent itemsets", "100 baskets; 10,000 items", "{bread} 40%, {butter} 30%, {bread,butter} 20%"],
                ["Rule generation", "3 frequent itemsets", "bread->butter (50%); butter->bread (67%)"],
              ],
            },
            bullets: [
              "Base case: transactions, boolean items, one predicate per rule.",
              "Two steps: frequent itemsets (combinatorial), then confidence filtering.",
              "Worked: 3 frequent itemsets -> 2 rules at the thresholds.",
              "Scale: 2^10,000 candidates in principle - step one dominates.",
              "Anti-monotonicity makes the search finite (next section).",
              "Sentence: every algorithm here is a strategy for step one.",
            ],
            diagram: {
              kind: "fork",
              title: "The two-step decomposition",
              caption: "The expensive step finds itemsets; the cheap step filters rules.",
              start: "Mining task",
              branches: [
                { label: "Step 1 - frequent itemsets", outcome: "all itemsets above min-sup - the combinatorial core", good: true },
                { label: "Step 2 - rule generation", outcome: "every subset -> rule, kept if confidence passes", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Step two is arithmetic, step one is search",
              body: "The structural sentence: 'given the frequent itemsets, rules are confidence arithmetic over subsets - all the difficulty lives in step one.' Every algorithm in this unit (Apriori, FP-Growth, the trends) is a step-one strategy, and saying so organizes the whole unit.",
            },
            examQuestions: [
              {
                q: "Explain the market basket model and the two-step mining decomposition, work the 100-basket example through both steps, and state why step one dominates the cost.",
                marks: 14,
                outline: [
                  "Model: transactions, boolean items, single-dimensional rules",
                  "Step 1: frequent itemsets - {bread}, {butter}, {bread, butter}",
                  "Step 2: subset rules with confidence filter - two rules pass",
                  "Combinatorial scale: 2^10,000 candidates in principle",
                  "Anti-monotone property makes step one tractable",
                  "Multi-dimensional extension: joined predicates, same machinery",
                  "Sentence: all difficulty lives in step one",
                ],
              },
              {
                q: "How are rules generated from a frequent itemset of size k?",
                marks: 7,
                outline: [

                  "Every non-empty proper subset A yields rule A -> L - A",

                  "Confidence = support(L)/support(A) checked against min-conf",

                  "k-1 candidate rules per frequent itemset of size k",

                  "Antecedent size trades precision for coverage",

                  "Rules below min-confidence die without shipping",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "The Apriori algorithm",
            body: [
              "Apriori is the classic level-wise algorithm, and its power is one property: the anti-monotone property - every subset of a frequent itemset is frequent (equivalently, any itemset with an infrequent subset cannot be frequent). The algorithm: scan once for frequent 1-itemsets (L1); then per level k - generate candidate (k+1)-itemsets from Lk (join two Lk sets sharing a k-1 prefix), prune candidates with any infrequent k-subset (the Apriori prune - most candidates die without a scan), scan the database to count survivors, keep the frequent (Lk+1); repeat until empty.",
              "A worked trace fixes the loop. 100 baskets, min-sup 20%: L1 = {bread 40%, butter 30%, milk 45%, eggs 25%}. C2 (joins): {bread,butter}, {bread,milk}, {bread,eggs}, {butter,milk}, {butter,eggs}, {milk,eggs} - 6 candidates, no pruning possible at level 2. Scan: counts 20, 18, 15, 22, 12, 14 -> L2 = {bread,butter} 20%, {butter,milk} 22%, {milk,eggs} 14%? - no, 14% < 20% drops; L2 = three sets... precisely: {bread,butter} 20%, {butter,milk} 22% qualify. C3 from L2: {bread,butter,milk} - pruned immediately (subset {bread,milk} is infrequent - the Apriori prune kills it without a scan). L3 = empty; algorithm ends. Scans: two database passes instead of the brute-force thousands.",
              "The improvements complete the section: hash-based counting (candidate counts tallied in hash trees), transaction reduction (transactions with no frequent-k items dropped from later scans), partitioning (two scans over partitions), and sampling (mine a sample, verify on full data). The exam's sentence: Apriori mines level-wise with the anti-monotone prune - generate, prune subsets, scan, keep frequent - trading database scans for the property that kills most candidates before they are counted.",
            ],
            keyTerms: [
              { term: "Anti-monotone property", definition: "Subsets of frequent sets are frequent; infrequent subsets kill candidates." },
              { term: "Level-wise search", definition: "L1 -> C2 -> L2 -> C3 -> ... until empty." },
              { term: "Apriori prune", definition: "Candidates with any infrequent k-subset removed before scanning." },
              { term: "Candidate generation", definition: "Join two Lk sets sharing a k-1 prefix." },
            ],
            table: {
              caption: "The worked Apriori trace (min-sup 20%).",
              headers: ["Level", "Candidates", "After prune + scan", "Frequent"],
              rows: [
                ["L1", "-", "scan 1", "bread 40%, butter 30%, milk 45%, eggs 25%"],
                ["C2 -> L2", "6 joined pairs", "scan 2: 20%, 22% pass", "{bread,butter}, {butter,milk}"],
                ["C3", "{bread,butter,milk}", "pruned: {bread,milk} infrequent", "none - stop"],
              ],
            },
            bullets: [
              "Property: subsets of frequent sets are frequent - the search pruner.",
              "Loop: generate Lk-joins, prune infrequent subsets, scan, keep frequent.",
              "Worked: C3 killed by the {bread,milk} subset - zero scans for it.",
              "Two database scans replace brute-force enumeration.",
              "Improvements: hash trees, transaction reduction, partitioning, sampling.",
              "Sentence: generate, prune, scan, keep - level-wise to empty.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The Apriori loop",
              caption: "Generate candidates, prune by subsets, scan, keep frequent - repeat per level.",
              stages: [
                { label: "Scan 1", note: "frequent 1-itemsets (L1)" },
                { label: "Generate C2", note: "join L1 pairs" },
                { label: "Prune", note: "drop candidates with infrequent subsets" },
                { label: "Scan k", note: "count survivors; keep frequent Lk" },
                { label: "Repeat / stop", note: "until a level returns empty" },
              ],
            },
            callout: {
              type: "exam",
              title: "The prune that never scans",
              body: "The Apriori trace's best line: '{bread,butter,milk} was pruned because its subset {bread,milk} was infrequent - the candidate died without a single database access.' That is the anti-monotone property's value: counting is the expensive act, and the prune minimizes who gets counted.",
            },
            examQuestions: [
              {
                q: "Explain the Apriori algorithm with the anti-monotone property, work the L1-to-L3 trace on the 100-basket data, and list the algorithm's improvements.",
                marks: 14,
                outline: [
                  "Anti-monotone: subsets of frequent sets are frequent",
                  "L1: bread 40%, butter 30%, milk 45%, eggs 25%",
                  "C2: 6 pairs; scan keeps {bread,butter} 20%, {butter,milk} 22%",
                  "C3: {bread,butter,milk} pruned - subset {bread,milk} infrequent",
                  "Two scans total; stop at empty level",
                  "Improvements: hash trees, transaction reduction, partitioning, sampling",
                  "Sentence: generate, prune, scan, keep",
                ],
              },
              {
                q: "Why is the Apriori prune applied before the database scan?",
                marks: 7,
                outline: [

                  "Counting requires a scan - the expensive act",

                  "Subset checks use already-known Lk-1 results - free",

                  "Pruning first minimizes who gets counted",

                  "Free information (Lk-1) prunes paid work (scans)",

                  "The property turns exponential search finite",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "Multi-level association rules",
            body: [
              "Rules at a single level miss the hierarchy - 'bread -> butter' may hold at the food level, 'wheat bread -> dairy butter' at the brand level - and the syllabus's multi-level mining climbs the concept hierarchies (1.2's ladders, 2.1's dimensions). The mechanics: replace items by their ancestors per the hierarchy, mine at each level, and manage the cross-level questions: redundant rules (the same rule appearing at multiple levels - filtered by ancestor-checking), and support assignment across levels.",
              "The support strategies are the syllabus's named choices. Uniform support: the same min-sup at every level - simple, but rare low-level items never surface (a 2% brand-level rule dies under a 20% threshold). Reduced support: lower thresholds at deeper levels - level-d Scaling (min-sup shrinks per level), group-based (different min-sup per product group), or the DTH filter. A worked multi-level trace: hierarchy SKU -> brand -> category -> food; level 1 (food): bread -> butter, support 20%; level 2 (category): wheat-bread -> dairy-butter, support 6% - under uniform 20% it dies; reduced support (20% level 1, 5% level 2) surfaces it; redundancy check: the level-2 rule is an ancestor-refinement of the level-1 rule with higher confidence (67% vs 55%) - kept as informative; had confidence dropped, it would be pruned as redundant.",
              "The cross-level discipline completes the section: mine top-down (ancestors first - the anti-monotone logic extends up the hierarchy), filter redundant descendants (a refined rule kept only if it adds confidence or support information), and document which levels the thresholds served. The exam's sentence: multi-level mining climbs the concept hierarchies with level-wise supports (uniform or reduced), then filters cross-level redundancy by ancestor-checking - so the hierarchy's detail surfaces without duplicating its summary.",
            ],
            keyTerms: [
              { term: "Concept hierarchy climbing", definition: "Items replaced by ancestors per level - mining repeated per level." },
              { term: "Uniform support", definition: "One min-sup at every level - simple, buries deep rules." },
              { term: "Reduced support", definition: "Level-d scaling or group-based thresholds for deeper levels." },
              { term: "Redundancy filtering", definition: "Descendant rules dropped unless they add information." },
            ],
            table: {
              caption: "The multi-level trace (food -> category).",
              headers: ["Level", "Rule", "Support", "Verdict"],
              rows: [
                ["1 (category)", "bread -> butter", "20%", "kept (uniform sup)"],
                ["2 (brand)", "wheat-bread -> dairy-butter", "6%", "needs reduced support (5%)"],
                ["Redundancy", "descendant of level-1 rule", "confidence 67% > 55%", "kept - adds information"],
              ],
            },
            bullets: [
              "Climb hierarchies: SKU -> brand -> category -> food.",
              "Uniform support buries rare deep rules; reduced support frees them.",
              "Strategies: level-d scaling, group-based thresholds.",
              "Worked: 6% brand-level rule surfaces under 5% level-2 threshold.",
              "Redundancy: descendants kept only if confidence or support adds information.",
              "Sentence: hierarchy detail without duplicated summary.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Mining down the concept hierarchy",
              caption: "Rules at every rung - supports reduced as detail deepens.",
              tiers: [
                { label: "Food", note: "level 1 - min-sup 20%" },
                { label: "Category (breads, dairy)", note: "level 2 - min-sup 10%" },
                { label: "Brand", note: "level 3 - min-sup 5%" },
                { label: "SKU", note: "level 4 - min-sup 1%; the detail floor" },
              ],
            },
            callout: {
              type: "warning",
              title: "Uniform support buries the detail",
              body: "The multi-level trap: 'a uniform 20% support never sees the 6% brand-level rule - the deep detail dies under the top-level threshold.' Reduced supports (level-d scaling) are the fix, and the redundancy filter then keeps the deep rules that actually add information. Both halves, always.",
            },
            examQuestions: [
              {
                q: "Explain multi-level association rule mining - hierarchy climbing, uniform vs reduced support, and redundancy filtering - with the food-to-brand worked trace.",
                marks: 14,
                outline: [
                  "Items replaced by ancestors; mining repeated per level",
                  "Uniform support: simple, buries deep rare rules (6% dies under 20%)",
                  "Reduced support: level-d scaling; group-based thresholds",
                  "Trace: 20% category rule; 6% brand rule under 5% threshold",
                  "Redundancy: descendant kept only for added confidence (67% > 55%)",
                  "Mine top-down; ancestors first (anti-monotone extends)",
                  "Sentence: hierarchy detail without duplicated summary",
                ],
              },
              {
                q: "When is a descendant rule pruned as redundant?",
                marks: 7,
                outline: [

                  "Its support and confidence are inherited from the ancestor",

                  "It adds no item-level information",

                  "Ancestor-checking compares the rule to its generalized form",

                  "The generalized ancestor already covers the descendant's reach",

                  "Keep descendants only when confidence improves materially",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "The FP-Growth algorithm",
            body: [
              "FP-Growth answers Apriori's weakness - candidate generation and repeated scans - with a different data structure: the FP-tree (frequent-pattern tree). Build: scan once for frequent 1-items, order them by descending frequency; scan again, inserting each transaction into the tree as a path (shared prefixes shared - compression), with a header table linking each item to its occurrences. Mine: for each item (lowest frequency first), assemble its conditional pattern base (the prefix paths ending at it), build its conditional FP-tree, and recurse - patterns grow by concatenation, no candidates are ever generated, and the database is scanned exactly twice.",
              "A worked FP-tree trace fixes the mechanics. Transactions (min-sup 20% of the 100-basket store): reordered by frequency - milk, bread, butter, eggs. Tree: milk is the root-path item everywhere; paths share prefixes (many transactions start milk -> bread), so nodes carry counts; the header table links milk -> its nodes, bread -> its nodes. Mining bread's conditional pattern base: the paths ending at bread - (milk: 30), (milk, butter: 10) - conditional tree: milk 40 (>= 20), butter 10 (< 20, dropped); frequent patterns grown: {bread}, {milk, bread}. Recursing per item completes the set - no candidate {milk, bread, butter} was ever generated or counted.",
              "The comparison completes the section: FP-Growth avoids candidate generation entirely, scans the database twice, compresses via shared prefixes, and handles dense datasets gracefully; its costs - the tree's memory for huge sparse datasets, and the recursion's complexity - are where Apriori's simplicity wins. The exam's sentence: Apriori searches level-wise with pruned candidates; FP-Growth grows patterns from a compressed tree - candidate generation traded for conditional recursion.",
            ],
            keyTerms: [
              { term: "FP-tree", definition: "Frequency-ordered prefix tree compressing transactions via shared paths." },
              { term: "Conditional pattern base", definition: "The prefix paths ending at one item - its mining sub-database." },
              { term: "Conditional FP-tree", definition: "The tree built from one item's pattern base." },
              { term: "No candidate generation", definition: "Patterns grown by concatenation - Apriori's weakness avoided." },
            ],
            table: {
              caption: "Apriori vs FP-Growth.",
              headers: ["Aspect", "Apriori", "FP-Growth"],
              rows: [
                ["Strategy", "Level-wise candidates + prune", "Tree growth by recursion"],
                ["Database scans", "Once per level (many)", "Exactly two"],
                ["Candidates", "Generated and counted", "None generated"],
                ["Memory", "Low (counts)", "Tree + conditional trees"],
                ["Fits", "Sparse data, simple settings", "Dense data, large itemsets"],
              ],
            },
            bullets: [
              "Build: frequency-ordered paths, shared prefixes, header table.",
              "Mine: conditional pattern base -> conditional tree -> recurse.",
              "Worked: bread's base (milk: 30), (milk, butter: 10) -> {milk, bread}.",
              "Two scans total; no candidates generated or counted.",
              "Trade: tree memory vs candidate explosion.",
              "Sentence: candidates traded for conditional recursion.",
            ],
            diagram: {
              kind: "compare",
              title: "Apriori vs FP-Growth",
              caption: "Search with pruned candidates, or growth from a compressed tree.",
              left: {
                heading: "Apriori",
                items: [
                  "Level-wise: generate, prune, scan, keep",
                  "Scan per level - many database passes",
                  "Simple, memory-light",
                  "Candidate explosion on dense data",
                ],
              },
              right: {
                heading: "FP-Growth",
                items: [
                  "FP-tree compresses; conditional recursion mines",
                  "Exactly two scans",
                  "No candidates ever generated",
                  "Tree memory is the price",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Two scans is the FP-Growth number",
              body: "The comparison's quotable contrast: 'Apriori scans once per level - a 4-itemset world costs four-plus scans; FP-Growth scans exactly twice and never generates a candidate.' Then the honest trade: the FP-tree's memory. Both halves make the comparison complete.",
            },
            examQuestions: [
              {
                q: "Explain FP-Growth - tree construction, conditional pattern bases, recursive mining - with the worked bread trace, and compare it against Apriori's candidate generation.",
                marks: 14,
                outline: [
                  "Build: frequency-ordered insertion; shared prefixes compress",
                  "Header table links items to occurrences",
                  "Bread's conditional base: (milk: 30), (milk, butter: 10)",
                  "Conditional tree: milk 40 frequent; butter 10 dropped",
                  "Patterns grown: {bread}, {milk, bread} - no candidates",
                  "Two scans total vs Apriori's per-level scans",
                  "Trade: tree memory for candidate elimination",
                ],
              },
              {
                q: "Why does FP-Growth suit dense datasets better than Apriori?",
                marks: 7,
                outline: [

                  "Dense data explodes candidate counts level-wise",

                  "FP-trees compress shared prefixes - dense means high compression",

                  "Growth by recursion never materializes candidates",

                  "High-frequency items share long prefixes - maximum compression",

                  "Apriori's level width is dense data's worst case",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "Time-series mining of association rules",
            body: [
              "The time dimension extends association mining from co-occurrence to sequence: time-series mining asks which items or events follow one another (sequential patterns: buy laptop, then within 30 days buy bag; episode rules: A then B then C within a window), and how associations drift across periods (the bread -> butter rule strengthening in winter - the seasonal pattern). The machinery: transactions gain timestamps and customer/session identifiers; the support notion extends to sequences (support = fraction of sequences containing the ordered pattern within the window); and the algorithms are AprioriAll/GSP-style level-wise sequence mining or PrefixSpan's pattern-growth (the FP-Growth idea applied to sequences).",
              "A worked sequential trace fixes the semantics. 100 customer sequences; min-support 15%, window 30 days: laptop -> bag within 30 days appears in 22 sequences - support 22%, confidence = 22/40 (laptop buyers) = 55%, and the lag analysis: 70% of the bag purchases occur within 7 days - the accessory follow-on is fast. Seasonal association: bread -> butter support by month - 14% summer, 26% winter; the rule is seasonal, and mining per period (or with a time-weighted support) surfaces it. Drift: the laptop -> bag rule's support by quarter - steady, while tablet -> case grows from 5% to 18% across the year - the emerging pattern the trend view exists to catch.",
              "The applications and cautions complete the section: retail follow-on baskets, web clickstream paths (3.5's usage mining is sequence mining on sessions), and the security family - attack sequences in audit logs, which this syllabus's home discipline mines for kill chains. The cautions: window choice changes everything (7 vs 30 days rewrite the rules), and sequence count explosion needs the same pruning discipline (anti-monotone extends to subsequences). The exam's sentence: time-series association mining turns co-occurrence into sequence and drift - ordered patterns with window-bounded support, mined level-wise or by pattern growth.",
            ],
            keyTerms: [
              { term: "Sequential pattern", definition: "An ordered itemset pattern with window-bounded support." },
              { term: "Episode rule", definition: "A -> B -> C within a time window." },
              { term: "PrefixSpan", definition: "Pattern-growth sequence mining - the FP-Growth idea for sequences." },
              { term: "Emerging pattern", definition: "Support rising across periods - the drift signal." },
            ],
            table: {
              caption: "The time-series traces.",
              headers: ["Pattern", "Support", "Reading"],
              rows: [
                ["laptop -> bag (30d window)", "22%; confidence 55%", "fast follow-on: 70% within 7 days"],
                ["bread -> butter by month", "14% summer; 26% winter", "seasonal association"],
                ["tablet -> case by quarter", "5% -> 18%", "emerging pattern - drift caught"],
              ],
            },
            bullets: [
              "Co-occurrence becomes sequence: ordered, window-bounded support.",
              "Worked: laptop->bag 22%, seasonal bread->butter, emerging tablet->case.",
              "Algorithms: AprioriAll/GSP (level-wise) or PrefixSpan (growth).",
              "Window choice rewrites the rule set - a business parameter.",
              "Applications: retail follow-ons, clickstreams, audit-log attack sequences.",
              "Sentence: sequence and drift, mined with the same pruning discipline.",
            ],
            diagram: {
              kind: "flow",
              title: "From timestamps to sequences",
              caption: "Sessionize, order, window, mine - the sequence pipeline.",
              steps: [
                { label: "Timestamp + identify", note: "customer/session ids on every event" },
                { label: "Sessionize", note: "events grouped into ordered sequences" },
                { label: "Set the window", note: "30 days - the business parameter" },
                { label: "Mine sequences", note: "level-wise or pattern-growth" },
                { label: "Track periods", note: "drift and seasonality surfaced" },
              ],
            },
            callout: {
              type: "exam",
              title: "The window is a business parameter",
              body: "The time-series trap: 'laptop -> bag within 7 days may be 30% support; within 90 days, 55% - the window choice rewrites the rule set before any algorithm runs.' State the window explicitly in every sequence answer, and treat it as the min-sup of time mining.",
            },
            examQuestions: [
              {
                q: "Explain time-series mining of association rules - sequential patterns, episode windows, seasonal and emerging patterns - with the worked laptop, bread and tablet traces.",
                marks: 14,
                outline: [
                  "Sequence support: fraction of sequences containing the ordered pattern",
                  "laptop->bag: 22% support, 55% confidence, 70% within 7 days",
                  "Seasonal: bread->butter 14% summer vs 26% winter",
                  "Emerging: tablet->case 5% -> 18% across quarters",
                  "Algorithms: AprioriAll/GSP level-wise; PrefixSpan growth",
                  "Window as business parameter; anti-monotone extends to subsequences",
                  "Applications: retail, clickstreams, audit-log attack sequences",
                ],
              },
              {
                q: "How does PrefixSpan extend the FP-Growth idea to sequences?",
                marks: 7,
                outline: [

                  "No candidate sequence generation",

                  "Projected databases per prefix - grow patterns recursively",

                  "The conditional-base recursion, applied to ordered data",

                  "Prefix projection shrinks the database per step",

                  "Growth replaces the sequence-candidate lattice entirely",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "Latest trends in association rule mining",
            body: [
              "The syllabus's trends clause covers the field's movement beyond classic basket mining. Constraint-based mining: rules mined under user constraints - knowledge-type (only rules with specific items), data constraints, dimension/level constraints (which hierarchy levels), interestingness constraints (lift bounds), and rule-shape constraints - constraints pushed into the mining (not filtered after) so the search space shrinks. Interestingness beyond support/confidence: lift joined by correlation measures (chi-square, cosine), and subjective interestingness - unexpectedness against the user's prior knowledge, actionability.",
              "The remaining trends: mining with taxonomy and multi-dimensional rules maturing into quantitative association rules (numeric attributes binned into rules: age(30-39) AND income(high) -> laptop), and the scale trends - stream mining (rules over infinite data streams with sliding windows and one-pass algorithms), distributed and parallel mining (MapReduce-era Apriori and FP-Growth over clusters), and privacy-preserving association rule mining (rules mined over perturbed data, or sensitive rules hidden - this syllabus's security echo). A worked trends trace: a retailer's constraint-based run - 'rules containing only dairy products, lift > 1.5, at the brand level' - the constraints prune the lattice before counting (4.3's discipline, generalized), one pass, 340 rules instead of 12,000.",
              "The synthesis completes the unit: the trends all push in one direction - mining what the user means, at scale, safely. The exam's sentence: association mining's trends are constraint-based search, richer interestingness measures, quantitative and multi-dimensional rules, stream and parallel scale, and privacy preservation - the classic two-step machinery adapted rather than replaced. The 340-versus-12,000 trace is the worked constraint - one pass, three restrictions, search shrunk.",
            ],
            keyTerms: [
              { term: "Constraint-based mining", definition: "User constraints pushed into the search to shrink it." },
              { term: "Quantitative rules", definition: "Numeric attributes binned into rule form (age, income -> buys)." },
              { term: "Stream mining", definition: "One-pass, sliding-window rule mining over infinite streams." },
              { term: "Privacy-preserving mining", definition: "Rules mined over perturbed data, or sensitive rules hidden." },
            ],
            table: {
              caption: "The trend cards.",
              headers: ["Trend", "What changes", "Worked evidence"],
              rows: [
                ["Constraint-based", "Constraints prune inside the search", "340 rules vs 12,000 in one pass"],
                ["Rich interestingness", "chi-square, cosine, unexpectedness", "base-rate traps filtered"],
                ["Quantitative rules", "numeric bins in rule form", "age(30-39) AND income(high) -> laptop"],
                ["Scale", "streams, MapReduce clusters", "one-pass sliding-window mining"],
                ["Privacy", "perturbed mining; rule hiding", "this syllabus's security echo"],
              ],
            },
            bullets: [
              "Constraint classes: knowledge, data, dimension/level, interestingness, shape.",
              "Constraints push into the mining - search shrinks before counting.",
              "Worked: dairy-only, lift>1.5, brand-level - one pass, 340 rules.",
              "Quantitative rules: binned numeric attributes join the antecedent.",
              "Streams and clusters: one-pass and parallel variants of the classics.",
              "Sentence: the two-step machinery adapted, not replaced.",
            ],
            diagram: {
              kind: "layers",
              title: "The trend stack",
              caption: "From constrained semantics to scale and privacy - the classic core underneath.",
              layers: [
                { label: "Privacy-preserving mining", note: "perturbed data, sensitive-rule hiding" },
                { label: "Scale layer", note: "stream mining, parallel/distributed Apriori and FP-Growth" },
                { label: "Richer rules", note: "quantitative, multi-dimensional, taxonomy-aware" },
                { label: "Constrained semantics", note: "constraints and interestingness inside the search" },
                { label: "Classic core", note: "support-confidence two-step machinery" },
              ],
            },
            callout: {
              type: "tip",
              title: "Constraints prune before counting",
              body: "The trends' unifying mechanic: 'a constraint that filters after mining wastes the whole search; pushed into the mining (Apriori's prune generalized), it shrinks the lattice itself.' The 340-vs-12,000 trace is the demonstration - constraints are performance tools, not just filters.",
            },
            examQuestions: [
              {
                q: "Discuss the latest trends in association rule mining - constraint-based search, richer interestingness, quantitative rules, stream and parallel mining, privacy preservation - with the worked constrained trace.",
                marks: 14,
                outline: [
                  "Constraint classes pushed into the mining, shrinking the search",
                  "Worked: dairy-only, lift>1.5, brand level - 340 vs 12,000 rules",
                  "Interestingness: chi-square, cosine, unexpectedness beyond confidence",
                  "Quantitative rules: binned age/income antecedents",
                  "Scale: one-pass stream mining; parallel Apriori/FP-Growth",
                  "Privacy: perturbed mining and sensitive-rule hiding",
                  "Sentence: the two-step machinery adapted, not replaced",
                ],
              },
              {
                q: "Why must constraints be pushed into mining rather than applied after?",
                marks: 7,
                outline: [

                  "Post-filtering pays for all candidates anyway",

                  "In-search constraints prune the lattice - counting shrinks",

                  "Anti-monotone constraints compose with Apriori's prune",

                  "Succinct constraints rewrite candidate generation directly",

                  "The earlier the constraint bites, the less is counted",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Classification and Clustering",
      summary:
        "Unit V organizes and predicts: distance measures, the types of clustering with K-Means and partitioning methods, decision tree induction, Bayesian classification, association-rule-based and other classification methods with prediction, classifier accuracy measures, and outlier analysis.",
      chapter: {
        number: "05",
        title: "Classification and Clustering",
        intro:
          "Unit V covers distance measures, types of clustering and partitioning methods with the K-Means algorithm, decision tree induction, Bayesian classification, association-rule-based and other classification methods, prediction, classifier accuracy, the categorization of methods, and outlier analysis.",
        inOneBreath:
          "Distance measures (Euclidean, Manhattan, Minkowski, cosine) underpin the unsupervised side: K-Means partitions by centroid iteration until convergence. The supervised side: decision trees split by information gain or Gini, naive Bayes multiplies conditional probabilities under independence, prediction regresses continuous targets - and accuracy is judged by the confusion matrix's precision, recall and F1, with outliers found by statistics, distance or density.",
        sections: [
          {
            number: "5.1",
            title: "Distance measures",
            body: [
              "Distance is the geometry of mining - clustering, outlier and nearest-neighbour methods all measure it, and the syllabus's measures are the standard set. Euclidean: the straight-line distance sqrt(sum((x_i - y_i)^2)) - the default geometric choice. Manhattan: the city-block distance sum(|x_i - y_i|) - robust to outliers in single dimensions (no squaring amplifies them). Minkowski: the family parameterized by p - (sum |x_i - y_i|^p)^(1/p); p = 1 is Manhattan, p = 2 is Euclidean, p -> infinity is Chebyshev (the largest single-dimension difference). Cosine similarity: the angle, not the length - (x . y)/(|x||y|); for text vectors where magnitude carries frequency noise and direction carries meaning.",
              "A worked computation fixes the arithmetic. Points A(2, 4) and B(6, 7): Euclidean = sqrt(16 + 9) = 5; Manhattan = 4 + 3 = 7; Chebyshev = 4; cosine = (12 + 28)/(sqrt(20) x sqrt(85)) = 40/41.2 = 0.97 - nearly parallel vectors. Document vectors d1 = (3, 0, 1), d2 = (6, 0, 2): Euclidean distance 4.58 suggests distance, but cosine = (18 + 0 + 2)/(3.16 x 6.32) = 20/20 = 1.0 - the documents are identical in direction (d2 is d1 doubled): term frequency scaled, same topic. The measure choice changes the geometry, and the geometry changes the answer.",
              "The selection logic completes the section: Euclidean for geometric data with comparable scales (after normalization - 3.1's discipline); Manhattan when dimension-robustness matters or the grid matters (city blocks, circuit paths); cosine for sparse high-dimensional vectors (text, recommendations) where magnitude is noise; and Minkowski's p as the tunable middle. The exam's sentence: distance measures are the miners' geometry - Euclidean straight lines, Manhattan city blocks, Minkowski's tunable family, cosine's angles - and the choice rewrites what 'near' means.",
            ],
            keyTerms: [
              { term: "Euclidean distance", definition: "sqrt(sum of squared differences) - straight-line geometry." },
              { term: "Manhattan distance", definition: "sum of absolute differences - city-block, dimension-robust." },
              { term: "Minkowski family", definition: "(sum |diff|^p)^(1/p) - p parameterizes between Manhattan and beyond." },
              { term: "Cosine similarity", definition: "Angle between vectors - magnitude-blind, for sparse text vectors." },
            ],
            table: {
              caption: "The worked distances: A(2,4), B(6,7).",
              headers: ["Measure", "Computation", "Value"],
              rows: [
                ["Euclidean", "sqrt(4^2 + 3^2)", "5"],
                ["Manhattan", "4 + 3", "7"],
                ["Chebyshev (p->inf)", "max(4, 3)", "4"],
                ["Cosine similarity", "40 / (4.47 x 9.22)", "0.97"],
              ],
            },
            bullets: [
              "Four measures: Euclidean, Manhattan, Minkowski(p), cosine.",
              "Worked: A-B at 5, 7, 4, 0.97 across the four.",
              "Document trace: Euclidean says 4.58 apart; cosine says 1.0 - same topic.",
              "Normalization before Euclidean (3.1's discipline).",
              "Cosine for sparse text - magnitude is frequency noise.",
              "Sentence: the measure choice rewrites 'near'.",
            ],
            diagram: {
              kind: "compare",
              title: "Euclidean vs cosine",
              caption: "Length-sensitive geometry against angle-only similarity - the text case flips the verdict.",
              left: {
                heading: "Euclidean distance",
                items: [
                  "Straight-line geometry",
                  "Magnitude matters - normalize first",
                  "Fits continuous, comparable-scale data",
                  "Clustering and K-NN's default",
                ],
              },
              right: {
                heading: "Cosine similarity",
                items: [
                  "Angle only - length blind",
                  "Fits sparse text vectors",
                  "d1 and d2: distance 4.58, cosine 1.0",
                  "Recommendations and search's default",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The document flip",
              body: "The measure-choice demonstration examiners love: 'two documents where one repeats the other thrice are Euclidean-distant but cosine-identical - magnitude carries frequency, direction carries topic.' One trace shows why text mining switches measures and geometric clustering does not.",
            },
            examQuestions: [
              {
                q: "Explain Euclidean, Manhattan, Minkowski and cosine measures with the worked A(2,4)-B(6,7) and document-vector computations, and state the selection logic for each.",
                marks: 14,
                outline: [
                  "Euclidean: sqrt(16+9) = 5 - straight line",
                  "Manhattan: 4+3 = 7 - dimension-robust",
                  "Chebyshev: max = 4; Minkowski family parameterized by p",
                  "Cosine: 0.97 - angle not length",
                  "Document case: Euclidean 4.58 vs cosine 1.0 - the flip",
                  "Normalize before Euclidean; cosine for sparse text",
                  "Sentence: the measure rewrites what near means",
                ],
              },
              {
                q: "Why must data be normalized before Euclidean clustering?",
                marks: 7,
                outline: [

                  "Unscaled large-range attributes dominate the squared sum",

                  "Income in thousands shadows age in years",

                  "Normalization (min-max, z-score) restores balanced geometry",

                  "z-score standardization handles outlier-heavy scales",

                  "Min-max bounds features into comparable ranges",

                ],              },
            ],
          },
          {
            number: "5.2",
            title: "Types of clustering and the K-Means algorithm",
            body: [
              "Clustering types organize the unsupervised family by how groups form. Partitioning methods: build k partitions (K-Means, K-Medoids) - spherical clusters assumed. Hierarchical methods: agglomerative (bottom-up merging) or divisive (top-down splitting), producing dendrograms. Density-based: clusters as dense regions separated by sparse ones (DBSCAN - arbitrary shapes found, noise labelled). Grid-based: quantize the space into cells. The syllabus's K-Means is the partitioning archetype: choose k, initialize k centroids (randomly or k-means++), iterate - assign each point to the nearest centroid, recompute centroids as means - until convergence (assignments stable or SSE change negligible).",
              "A worked K-Means iteration fixes the loop. Points (income in lakhs, spend score): k = 2, centroids C1(5, 40), C2(20, 80). Assign: P1(4, 38) -> C1 (d 2.2 vs 27.7); P2(18, 78) -> C2; P3(6, 45) -> C1; P4(22, 85) -> C2. Update: C1 = mean(P1, P3) = (5, 41.5); C2 = mean(P2, P4) = (20, 81.5). Re-assign: no changes - converged. SSE = sum of squared distances = 2.2^2 + 2.8^2 + ... - the quality measure. The k choice: the elbow method (SSE vs k - pick the bend), or silhouette scores. The cautions: K-Means assumes spherical, similar-size clusters; it is initialization-sensitive (multiple restarts, k-means++); outliers drag centroids (K-Medoids' medoid answer); and scaling is mandatory (5.1's geometry).",
              "The type-to-algorithm mapping completes the section: spherical groups -> K-Means; arbitrary shapes and noise -> DBSCAN; hierarchy questions -> agglomerative with dendrograms; unknown k -> density or hierarchical methods decide it. The exam's sentence: clustering types are partitioning, hierarchical, density and grid - K-Means is partitioning's iterate-assign-update loop, spherical by assumption and initialization-sensitive by construction. The restarts note is the caveat - convergence to a local optimum, quality guarded by k-means++.",
            ],
            keyTerms: [
              { term: "K-Means", definition: "Partition into k clusters by iterating assign-and-update to convergence." },
              { term: "SSE", definition: "Sum of squared errors to centroids - the partitioning quality measure." },
              { term: "Elbow method", definition: "Choosing k at the bend of the SSE-vs-k curve." },
              { term: "DBSCAN", definition: "Density-based clustering - arbitrary shapes, noise-labelled." },
            ],
            table: {
              caption: "The worked K-Means iteration (k = 2).",
              headers: ["Step", "Computation", "Result"],
              rows: [
                ["Initialize", "C1(5, 40), C2(20, 80)", "starting centroids"],
                ["Assign", "P1->C1, P2->C2, P3->C1, P4->C2", "by nearest distance"],
                ["Update", "C1(5, 41.5), C2(20, 81.5)", "cluster means"],
                ["Re-assign", "no changes", "converged"],
                ["SSE", "sum of squared distances", "quality recorded"],
              ],
            },
            bullets: [
              "Types: partitioning, hierarchical, density, grid.",
              "K-Means loop: assign to nearest centroid, update centroids, repeat.",
              "Worked: two iterations to convergence; SSE as the measure.",
              "k chosen by elbow or silhouette; restarts tame initialization.",
              "Cautions: spherical assumption, outlier drag (K-Medoids answers), scaling mandatory.",
              "Arbitrary shapes need DBSCAN, not K-Means.",
            ],
            diagram: {
              kind: "cycle",
              title: "The K-Means loop",
              caption: "Assign, update, test, repeat - until the assignments settle.",
              steps: [
                { label: "Initialize", note: "k centroids (random or k-means++)" },
                { label: "Assign", note: "each point to its nearest centroid" },
                { label: "Update", note: "centroids = cluster means" },
                { label: "Converged?", note: "assignments stable or SSE flat" },
                { label: "Repeat", note: "loop until yes; restarts guard quality" },
              ],
            },
            callout: {
              type: "warning",
              title: "Outliers drag the mean",
              body: "The K-Means failure examiners probe: 'one extreme point moves the centroid toward it and can orphan a small cluster - means are not robust.' K-Medoids (actual points as centers) answers; quoting the failure and the fix demonstrates the algorithm's assumptions, not just its loop.",
            },
            examQuestions: [
              {
                q: "Explain the types of clustering and the K-Means algorithm with the worked two-centroid iteration, the k-choice methods, and the algorithm's cautions.",
                marks: 14,
                outline: [
                  "Types: partitioning, hierarchical, density, grid",
                  "K-Means: initialize, assign, update - converged in the trace",
                  "SSE as the quality measure; elbow for k",
                  "k-means++ and restarts tame initialization sensitivity",
                  "Spherical assumption; outliers drag means - K-Medoids answers",
                  "Scaling mandatory before distance work",
                  "Arbitrary shapes: DBSCAN's territory",
                ],
              },
              {
                q: "Why does K-Means always converge?",
                marks: 7,
                outline: [

                  "Each step (assignment, update) never increases SSE",

                  "Finite partitions bound the process",

                  "Convergence to a local optimum - hence restarts",

                  "Assignment is optimal for fixed centroids",

                  "Update is optimal for fixed assignments",

                ],              },
            ],
          },
          {
            number: "5.3",
            title: "Decision tree induction",
            body: [
              "Decision tree induction builds the supervised classifier as a tree: internal nodes test attributes, branches are outcomes, leaves are classes - and induction chooses each test by a purity criterion. The syllabus's criteria: information gain (ID3) - the entropy reduction from splitting on the attribute, entropy = -sum(p_i log2 p_i); gain ratio (C4.5) - gain normalized by the split's intrinsic information (correcting gain's bias toward many-valued attributes); and Gini index (CART) - the impurity measure sum p_i(1 - p_i), minimized by splits that isolate classes.",
              "A worked gain computation fixes the arithmetic. 14 training tuples, 9 yes / 5 no: entropy(root) = -(9/14)log2(9/14) - (5/14)log2(5/14) = 0.94. Split on income (high: 2 yes 2 no; medium: 4 yes 2 no; low: 3 yes 1 no): entropy(high) = 1.0, entropy(medium) = 0.918, entropy(low) = 0.811; weighted = (4/14)(1.0) + (6/14)(0.918) + (4/14)(0.811) = 0.907. Gain(income) = 0.94 - 0.907 = 0.033. Computing gain for age and student too, the attribute with the largest gain wins the root; recursion repeats per branch until pure leaves (or no attributes). The tree reads as rules: IF income = low AND student = yes THEN buys = yes.",
              "The induction's cautions complete the section: overfitting - trees memorizing training noise (the full-grown tree classifies training perfectly, testing poorly); the remedies are pre-pruning (stop early on thresholds) and post-pruning (grow fully, cut branches validated on held-out data - C4.5's confidence-interval pruning); and handling continuous attributes (binary splits on sorted cut points) and missing values (fractional instances). The exam's sentence: decision tree induction grows a tree by purity - information gain, gain ratio or Gini selecting each test - with pruning as the discipline that keeps the tree general.",
            ],
            keyTerms: [
              { term: "Entropy", definition: "-sum p log2 p - impurity; gain = entropy drop from a split." },
              { term: "Gain ratio", definition: "Gain normalized by split information - corrects many-valued bias." },
              { term: "Gini index", definition: "sum p(1-p) - CART's impurity, minimized by pure splits." },
              { term: "Post-pruning", definition: "Grow fully, then cut branches that fail held-out validation." },
            ],
            table: {
              caption: "The worked gain computation (14 tuples, 9 yes).",
              headers: ["Step", "Value"],
              rows: [
                ["Entropy(root)", "-(9/14)log2(9/14) - (5/14)log2(5/14) = 0.94"],
                ["Entropy(income branches)", "1.0 / 0.918 / 0.811"],
                ["Weighted entropy", "(4/14)1.0 + (6/14)0.918 + (4/14)0.811 = 0.907"],
                ["Gain(income)", "0.94 - 0.907 = 0.033"],
                ["Root choice", "attribute with the largest gain"],
              ],
            },
            bullets: [
              "Tree = tests at nodes, classes at leaves; induction = purity-driven test choice.",
              "Criteria: information gain (ID3), gain ratio (C4.5), Gini (CART).",
              "Worked: root entropy 0.94, income split weighted 0.907, gain 0.033.",
              "Recursion per branch to pure leaves; trees read as IF-THEN rules.",
              "Overfitting answered by pre- and post-pruning.",
              "Continuous attributes: binary splits on sorted cut points.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the split criterion",
              caption: "Three purity criteria - the choice trades bias, simplicity and convention.",
              start: "Selecting the test attribute",
              branches: [
                { label: "Information gain (ID3)", outcome: "entropy drop - biased toward many-valued attributes", good: true },
                { label: "Gain ratio (C4.5)", outcome: "gain normalized by split information - bias corrected", good: true },
                { label: "Gini index (CART)", outcome: "impurity minimized - binary splits, regression-capable", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "0.94 to 0.033 - carry the numbers",
              body: "The induction numerical's expected shape: root entropy 0.94, the candidate split's weighted entropy, the gain, and the comparison against the other attributes. Practise one full computation (income's 0.033) - 'compute information gain' is a recurring numerical and the arithmetic is four lines.",
            },
            examQuestions: [
              {
                q: "Explain decision tree induction with information gain, gain ratio and Gini, work the income-split gain computation on the 14-tuple dataset, and state the pruning remedies for overfitting.",
                marks: 14,
                outline: [
                  "Structure: attribute tests, branches, class leaves",
                  "Entropy(root) = 0.94 for 9-yes/5-no",
                  "Income branches: 1.0, 0.918, 0.811 - weighted 0.907",
                  "Gain(income) = 0.033; largest gain wins the root",
                  "Gain ratio corrects many-valued bias; Gini is CART's alternative",
                  "Overfitting: pre-pruning and post-pruning remedies",
                  "Trees read as IF-THEN classification rules",
                ],
              },
              {
                q: "Why does information gain favor attributes with many values?",
                marks: 7,
                outline: [

                  "Many-valued splits create tiny pure partitions",

                  "Entropy drops dramatically per branch - inflated gain",

                  "Split information normalizes the inflation (gain ratio)",

                  "Unique identifiers split to singletons - maximal spurious gain",

                  "Gain ratio divides by the split's intrinsic information",

                ],              },
            ],
          },
          {
            number: "5.4",
            title: "Bayesian classification",
            body: [
              "Bayesian classification classifies by posterior probability - Bayes' theorem: P(C | X) = P(X | C) P(C) / P(X). The practical form is the naive Bayes classifier: 'naive' because it assumes class-conditional independence (attributes independent given the class), turning the un-computable P(X | C) into a product: P(C | X) proportional to P(C) x product of P(x_i | C). Each P(x_i | C) estimated from counts (with the Laplace smoothing (+1) that stops zero probabilities from erasing whole classes), the class with the largest posterior wins.",
              "A worked classification fixes the arithmetic. Training: 14 tuples, class yes 9, no 5; attribute income = high: P(high|yes) = 2/9, P(high|no) = 2/5; student = yes: P(yes|yes) = 6/9, P(yes|no) = 1/5. Classify X = (income = high, student = yes): P(X|yes)P(yes) = (2/9)(6/9)(9/14) = 0.095; P(X|no)P(no) = (2/5)(1/5)(5/14) = 0.029. Posterior odds: yes wins (0.095 vs 0.029) - X classified yes. The zero-frequency danger: had P(high|no) been 0/5, the whole 'no' posterior would collapse to zero - hence the Laplace correction: (count + 1)/(total + k) for k attribute values.",
              "The assessment completes the section: naive Bayes is fast (count-based training), scalable (per-attribute estimation), and surprisingly competitive on text (the word-independence assumption is wrong but the classification still works - spam filtering's classic engine); its risks are the independence assumption's violations and zero-frequency fragility (Laplace's answer). The exam's sentence: naive Bayes classifies by the largest posterior - prior times the product of conditionals - naive in its independence assumption, Laplace-smoothed against zeros, and the text-mining workhorse.",
            ],
            keyTerms: [
              { term: "Bayes' theorem", definition: "P(C|X) = P(X|C)P(C)/P(X) - classification by posterior." },
              { term: "Naive assumption", definition: "Attributes conditionally independent given the class." },
              { term: "Laplace smoothing", definition: "(count+1)/(total+k) - the zero-frequency guard." },
              { term: "Posterior comparison", definition: "Largest P(C|X) wins; probabilities need not normalize." },
            ],
            table: {
              caption: "The worked classification of X = (high, yes).",
              headers: ["Quantity", "Computation", "Value"],
              rows: [
                ["P(X|yes)P(yes)", "(2/9)(6/9)(9/14)", "0.095"],
                ["P(X|no)P(no)", "(2/5)(1/5)(5/14)", "0.029"],
                ["Verdict", "largest posterior", "classify yes"],
                ["Zero guard", "Laplace: (c+1)/(total+k)", "applied to all estimates"],
              ],
            },
            bullets: [
              "Bayes: posterior proportional to prior x conditionals' product.",
              "Naive: class-conditional independence assumed.",
              "Worked: 0.095 vs 0.029 - X classified yes.",
              "Zero-frequency trap: one 0 estimate erases a class - Laplace fixes it.",
              "Text workhorse: spam filtering despite violated independence.",
              "Fast, scalable, count-based training.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The naive Bayes classification",
              caption: "Priors, per-attribute conditionals, product, compare - four stages to a class.",
              stages: [
                { label: "Priors", note: "P(yes) = 9/14; P(no) = 5/14" },
                { label: "Conditionals", note: "P(high|yes) = 2/9; P(yes|no) = 1/5 ... with Laplace" },
                { label: "Multiply", note: "per class: prior x product of conditionals" },
                { label: "Compare", note: "0.095 vs 0.029 -> classify yes" },
              ],
            },
            callout: {
              type: "warning",
              title: "One zero erases a class",
              body: "The naive Bayes fragility worth quoting: 'if an attribute value never co-occurs with a class, its conditional is zero - the product collapses and that class can never win, however strong the other evidence.' The Laplace correction (+1 numerator, +k denominator) is the one-line fix and the exam's expected mention.",
            },
            examQuestions: [
              {
                q: "Explain naive Bayesian classification with Bayes' theorem, work the classification of X = (high, yes) with the training counts, and state the zero-frequency fix.",
                marks: 14,
                outline: [
                  "Bayes: P(C|X) proportional to P(C) x product P(xi|C)",
                  "Naive assumption: class-conditional independence",
                  "Priors: yes 9/14, no 5/14",
                  "Conditionals: (2/9)(6/9) vs (2/5)(1/5)",
                  "Products: 0.095 vs 0.029 - classify yes",
                  "Laplace smoothing: (count+1)/(total+k) against zeros",
                  "Text workhorse: spam filtering despite violated independence",
                ],
              },
              {
                q: "Why does naive Bayes work well for text despite violated independence?",
                marks: 7,
                outline: [

                  "Classification needs the right argmax, not calibrated probabilities",

                  "Errors in the product tend to cancel across many words",

                  "Huge per-word conditionals dominate the decision",

                  "Word independence violations are systematic but balanced",

                  "Thousands of features outweigh the assumption's noise",

                ],              },
            ],
          },
          {
            number: "5.5",
            title: "Association-based and other classification methods - and prediction",
            body: [
              "Two more classifier families complete the syllabus's set. Association-rule-based classification (CBA - classification by association): mine class-association rules (rules whose consequent is the class label, with support and confidence thresholds), rank the rules, and classify a new tuple by the first matching rule (or the combined strongest set) - the classifier is literally a rule base, maximally interpretable. Other methods named by the syllabus's 'other classification methods': K-nearest-neighbour (classify by the majority class of the k nearest training points - lazy: no training, all work at query time; distance per 5.1, k tuned), and rule-based induction beyond trees (sequential covering: learn one rule, remove its covered examples, learn the next - RIPPER-style).",
              "Prediction is the regression sibling: continuous targets instead of classes - linear regression (y = a + bx fitted by least squares), multiple regression (several predictors), and non-linear extensions. A worked prediction fixes the arithmetic. Sales data (advertising spend x, sales y): means x̄ = 4, ȳ = 12; slope b = sum((x-x̄)(y-ȳ))/sum((x-x̄)^2) = 20/10 = 2; intercept a = 12 - 2(4) = 4. Model: sales = 4 + 2 x spend. Predict at x = 6: 16 lakhs. Quality: correlation r and R^2 judge the fit; the regression's assumptions (linearity, homoscedasticity) are its honesty checks.",
              "The categorization completes the syllabus's 'categorization of methods': eager vs lazy (trees and Bayes build models; K-NN defers all work), interpretable vs opaque (rules and trees explain; ensembles obscure), parametric vs non-parametric (Bayes assumes forms; K-NN assumes none). The exam's sentence: association-based classification turns mined rules into the classifier; K-NN and sequential covering complete the family; prediction regresses the continuous targets - and the method categorization (eager/lazy, interpretable/opaque) is the selection guide.",
            ],
            keyTerms: [
              { term: "Class-association rules", definition: "Rules with the class label as consequent - CBA's rule base." },
              { term: "K-NN (lazy)", definition: "Classify by k nearest training points - no model until queried." },
              { term: "Sequential covering", definition: "Learn one rule, remove its coverage, repeat." },
              { term: "Linear regression", definition: "Least-squares fit y = a + bx for continuous prediction." },
            ],
            table: {
              caption: "The method categorization.",
              headers: ["Axis", "Poles", "Examples"],
              rows: [
                ["Eager vs lazy", "Build model vs defer to query", "Trees/Bayes vs K-NN"],
                ["Interpretable vs opaque", "Explainable vs black-box", "Rules/trees vs ensembles"],
                ["Parametric vs non-parametric", "Assumed form vs data-shaped", "Bayes/regression vs K-NN"],
                ["Target", "Class label vs continuous", "Classification vs prediction"],
              ],
            },
            bullets: [
              "CBA: class-association rules ranked; first-match classification.",
              "K-NN: lazy, distance-based, k tuned - no training phase.",
              "Sequential covering: rule-by-rule, coverage removed per rule.",
              "Prediction: least-squares line; worked model sales = 4 + 2 x spend.",
              "Categorization: eager/lazy, interpretable/opaque, parametric/non-parametric.",
              "Sentence: the categorization is the selection guide.",
            ],
            diagram: {
              kind: "layers",
              title: "The classifier family stack",
              caption: "From rule bases to regressions - one catalogue, categorized three ways.",
              layers: [
                { label: "Prediction (regression)", note: "continuous targets: linear, multiple" },
                { label: "Other classifiers", note: "K-NN lazy; sequential covering rules" },
                { label: "Association-based", note: "class-association rules ranked and applied" },
                { label: "Core classifiers", note: "trees (5.3), naive Bayes (5.4)" },
              ],
            },
            callout: {
              type: "tip",
              title: "Eager versus lazy is the cost shift",
              body: "The categorization's practical sentence: 'eager learners pay at training time and answer fast; lazy learners (K-NN) pay at every query - the choice is which cost your workload tolerates.' High-query systems prefer eager; rapidly-changing data prefers lazy (no stale model).",
            },
            examQuestions: [
              {
                q: "Explain association-rule-based classification, K-NN and sequential covering as the other methods, and work the linear-regression prediction with slope, intercept and a forecast.",
                marks: 14,
                outline: [
                  "CBA: mine class-association rules, rank, first-match classify",
                  "K-NN: lazy majority of k nearest; distance per 5.1",
                  "Sequential covering: learn, remove coverage, repeat",
                  "Regression: b = 20/10 = 2; a = 12 - 8 = 4",
                  "Model: sales = 4 + 2 x spend; at 6 -> 16 lakhs",
                  "Categorization: eager/lazy, interpretable/opaque, parametric/non-parametric",
                  "Sentence: the categorization guides selection",
                ],
              },
              {
                q: "Why is K-NN called a lazy learner?",
                marks: 7,
                outline: [

                  "No model built during training - data stored as-is",

                  "All computation deferred to classification time",

                  "Cheap training, expensive queries; adapts instantly to new data",

                  "Training is a single data copy",

                  "Queries cost distance computations against all points",

                ],              },
            ],
          },
          {
            number: "5.6",
            title: "Classifier accuracy",
            body: [
              "Classifier accuracy is measured against held-out truth, and the syllabus's machinery is the confusion matrix: the 2x2 (or k x k) table of predicted-versus-actual - TP, FP, FN, TN - from which the metrics derive: accuracy = (TP + TN)/all; error rate = 1 - accuracy; precision = TP/(TP + FP) - of the flagged, how many right; recall (sensitivity) = TP/(TP + FN) - of the real positives, how many caught; specificity = TN/(TN + FP); and F1 = 2PR/(P + R) - the precision-recall harmonic mean.",
              "A worked matrix fixes the arithmetic. Fraud classifier on 1,000 transactions (50 frauds): TP = 40 (caught), FN = 10 (missed), FP = 30 (false alarms), TN = 920. Accuracy = 960/1000 = 96% - impressive and misleading: the trivial 'never fraud' classifier scores 95%. Precision = 40/70 = 57%; recall = 40/50 = 80%; F1 = 2(0.57)(0.80)/(1.37) = 0.67 - the honest picture. The imbalance lesson: accuracy lies on skewed classes; precision-recall (or the F-beta family weighting the business's cost asymmetry) is the honest pair - and the cost matrix (missing a fraud costs 100x a false alarm) is the final arbiter of thresholds.",
              "The validation protocol completes the section: holdout (train/test split), k-fold cross-validation (k folds rotated - every example tested once), bootstrap sampling, and the stratification that preserves class ratios in every fold. The exam's sentence: classifier accuracy is a confusion-matrix discipline - accuracy, precision, recall, F1 derived from TP/FP/FN/TN - validated by cross-validation, and judged on the business's cost matrix rather than on accuracy alone.",
            ],
            keyTerms: [
              { term: "Confusion matrix", definition: "TP/FP/FN/TN table - every metric's source." },
              { term: "Precision / recall", definition: "TP/(TP+FP) and TP/(TP+FN) - the honest pair on skewed classes." },
              { term: "F1", definition: "2PR/(P+R) - the harmonic mean balancing the pair." },
              { term: "k-fold cross-validation", definition: "Rotate k folds; every example tested exactly once." },
            ],
            table: {
              caption: "The worked fraud matrix (1,000 transactions, 50 frauds).",
              headers: ["Metric", "Computation", "Value"],
              rows: [
                ["Accuracy", "(40 + 920)/1000", "96% - misleading on imbalance"],
                ["Precision", "40/(40 + 30)", "57%"],
                ["Recall", "40/(40 + 10)", "80%"],
                ["F1", "2(0.57)(0.80)/(1.37)", "0.67"],
                ["Trivial baseline", "never-fraud accuracy", "95% - the honesty check"],
              ],
            },
            bullets: [
              "Confusion matrix first: TP, FP, FN, TN in the cells.",
              "Metrics derived: accuracy, precision, recall, specificity, F1.",
              "Worked: 96% accuracy vs 95% trivial baseline - the imbalance trap.",
              "Precision-recall honest on skewed classes; F1 balances them.",
              "Validation: k-fold cross-validation with stratification.",
              "Cost matrix sets the final threshold - business, not statistics.",
            ],
            diagram: {
              kind: "matrix",
              title: "The confusion matrix",
              caption: "Predicted vs actual - four cells from which every metric derives.",
              axes: { x: "Predicted (negative -> positive)", y: "Actual (positive -> negative)" },
              quadrants: [
                { label: "TP = 40", note: "fraud caught - recall's numerator" },
                { label: "FP = 30", note: "false alarms - precision's penalty" },
                { label: "FN = 10", note: "fraud missed - recall's penalty" },
                { label: "TN = 920", note: "clean cleared - specificity's base" },
              ],
            },
            callout: {
              type: "warning",
              title: "Accuracy lies on skewed classes",
              body: "The worked trace's lesson: '96% accuracy sounds excellent until the never-fraud baseline scores 95% - on imbalanced classes, accuracy measures the majority.' The honest metrics are precision and recall (and F1 balancing them), chosen by the business's cost matrix: missing a fraud costs more than a false alarm.",
            },
            examQuestions: [
              {
                q: "Explain classifier accuracy via the confusion matrix, work the fraud-trace metrics (accuracy, precision, recall, F1), and state the imbalance and validation lessons.",
                marks: 14,
                outline: [
                  "Matrix: TP 40, FP 30, FN 10, TN 920",
                  "Accuracy 96% vs trivial baseline 95% - the imbalance trap",
                  "Precision = 40/70 = 57%; recall = 40/50 = 80%",
                  "F1 = 2PR/(P+R) = 0.67",
                  "Imbalanced classes: precision-recall over accuracy",
                  "k-fold cross-validation with stratification",
                  "Cost matrix decides thresholds - business, not statistics",
                ],
              },
              {
                q: "When would you optimize recall over precision?",
                marks: 7,
                outline: [

                  "When misses cost far more than false alarms",

                  "Fraud, disease screening, intrusion detection",

                  "The cost matrix's asymmetry sets the choice",

                  "False alarms are cheap follow-ups; misses are losses",

                  "Thresholds tune the operating point on the PR curve",

                ],              },
            ],
          },
          {
            number: "5.7",
            title: "Outlier analysis",
            body: [
              "Outlier analysis mines the rare and inconsistent - the transactions, readings or behaviours that deviate so much they invite investigation - and the syllabus's methods divide by the model they assume. Statistical methods: assume a distribution, flag low-probability objects (the 3-sigma rule for normal data; discordancy tests) - parametric and assumption-bound. Distance-based methods: an object is an outlier if its fraction of neighbours within distance r falls below a threshold (DB(p, D)) - distribution-free, but k and r must be chosen. Density-based methods: local outlier factor (LOF) - compare the object's local density to its neighbours' (an object in a sparse region near a dense one is locally an outlier even if globally normal) - the method that handles varying densities.",
              "A worked detection trace fixes the three. Transaction amounts: 990 in the 400-900 range, one at 12,000. Statistical: mean 425, sigma 118 - 12,000 sits at 98 sigma; flagged instantly (assuming near-normality, which the histogram questions). Distance-based: with r = 300, the outlier has 0 neighbours within r (threshold 2%) - flagged. Density-based: LOF compares its local reachability density to its neighbours' - the 12,000 point's density near zero vs dense clusters - flagged as LOF 40+. The complementary case the trace should include: a fraud ring of 50 similar transactions - each has neighbours (distance-based misses), but the ring's density differs from its region - LOF flags it. Three methods, one complementary set.",
              "The applications and cautions complete the section: fraud and intrusion detection (this syllabus's anchor - the audit-log sequences of 4.6 as outliers), equipment fault prediction, and data cleaning (outliers as errors, 3.1's noise family). The cautions: outliers are not errors - they can be the signal (the fraud IS the outlier; deleting it cleans away the discovery); global methods miss local outliers (LOF's reason to exist); and every method's parameters (sigma thresholds, r, k) encode business judgment. The exam's sentence: outlier analysis finds the rare and deviant by statistics, distance or density - and in fraud and intrusion mining, the outlier is not noise to remove but the target to find.",
            ],
            keyTerms: [
              { term: "Statistical (3-sigma)", definition: "Distribution-based discordancy - parametric, assumption-bound." },
              { term: "Distance-based (DB(p, D))", definition: "Outlier if too few neighbours within radius r." },
              { term: "LOF", definition: "Local Outlier Factor - local density compared to neighbours'." },
              { term: "Outlier as signal", definition: "In fraud and intrusion mining, the outlier IS the target." },
            ],
            table: {
              caption: "The worked detection trace (990 normal, one extreme).",
              headers: ["Method", "Computation", "Verdict"],
              rows: [
                ["Statistical", "mean 425, sigma 118 -> 98 sigma", "flagged (near-normal assumed)"],
                ["Distance-based", "0 neighbours within r = 300", "flagged (DB(p, D))"],
                ["Density (LOF)", "local density ~0 vs dense clusters", "flagged; also catches the fraud ring"],
              ],
            },
            bullets: [
              "Methods: statistical (distribution-assumed), distance-based (r, k), density-based (LOF).",
              "Worked: 98-sigma; empty neighbourhood; LOF 40+.",
              "LOF catches local outliers and rings that global methods miss.",
              "Applications: fraud, intrusion, faults - plus cleaning (3.1's noise).",
              "Caution: the outlier may be the signal - do not clean the discovery away.",
              "Sentence: three model families, one complementary set.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the outlier method",
              caption: "Distribution knowledge, density structure and locality decide.",
              start: "Detecting outliers",
              branches: [
                { label: "Distribution known, roughly normal", outcome: "statistical tests - 3-sigma and discordancy", good: true },
                { label: "No distribution; global sparsity", outcome: "distance-based DB(p, D) - neighbours within r", good: true },
                { label: "Varying densities; local anomalies", outcome: "LOF - local density ratios", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "The outlier is the target",
              body: "The security-syllabus sentence that closes the unit: 'in cleaning, outliers are noise to remove; in fraud and intrusion mining, the outlier is the discovery - the analyst's job is knowing which side of that line the current task is on.' Quote it as the unit's final evaluation claim.",
            },
            examQuestions: [
              {
                q: "Explain statistical, distance-based and density-based outlier detection with the worked 12,000-transaction trace, and state the applications and the outlier-as-signal caution.",
                marks: 14,
                outline: [
                  "Statistical: 3-sigma - 98 sigma here; assumption-bound",
                  "Distance-based: DB(p, D) - zero neighbours within r = 300",
                  "Density: LOF flags locally anomalous; catches fraud rings",
                  "Complementary set: each method's blind spot covered",
                  "Applications: fraud, intrusion, faults, cleaning",
                  "Caution: outliers are the target in security mining",
                  "Parameters (sigma, r, k) encode business judgment",
                ],
              },
              {
                q: "Why does LOF catch a fraud ring that distance-based methods miss?",
                marks: 7,
                outline: [

                  "Ring members have each other as neighbours - global distance looks normal",

                  "The ring's local density differs from its surrounding region",

                  "LOF compares density to neighbours, exposing the local anomaly",

                  "Global radius methods see ring members as clustered",

                  "Local ratios expose the group against its context",

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
        { topic: "Warehouse: schemas, ETL, partitioning", weight: "about 12-14 marks", note: "Star/snowflake/galaxy trio and the ETL ledger - Unit I is the drawing unit." },
        { topic: "OLAP: operations, servers, cube computation", weight: "about 12-14 marks", note: "Five operations + ROLAP/MOLAP/HOLAP + 2^d lattice arithmetic." },
        { topic: "Apriori and FP-Growth", weight: "about 10-12 marks", note: "The L1-to-L3 trace and the two-scan comparison - numericals guaranteed." },
        { topic: "Classification: trees, Bayes, K-Means", weight: "about 10-12 marks", note: "Gain computation, naive Bayes product, K-Means loop - three numericals." },
        { topic: "Association measures: support, confidence, lift", weight: "about 8-10 marks", note: "The 100-basket arithmetic and the base-rate trap." },
        { topic: "KDP and preprocessing", weight: "about 8-10 marks", note: "Six steps with the two-pass trace; cleaning ledger." },
        { topic: "Classifier accuracy + outlier analysis", weight: "about 8-10 marks", note: "Confusion matrix numbers and the three outlier methods." },
        { topic: "Reduction, web/text/spatial, privacy", weight: "about 6-8 marks", note: "Reduction ledger, sessionization, k-anonymity traces." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every weekend, re-run one numerical by hand (gain, naive Bayes, K-Means, Apriori). This subject is numerical-examined: the marks live in worked arithmetic with stated thresholds - not in prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the warehouse", tasks: ["OLTP/OLAP split + Inmon's four properties", "Six elements + metadata trace", "Mart strategies + conformed dimensions", "ETL stages + 2M-row cleaning ledger", "Star schema + grain + additivity", "Snowflake/galaxy contrast", "Partitioning axes + 2B-row trace"] },
        { week: "Week 2", focus: "Unit II - OLAP", tasks: ["Cube vocabulary + hierarchies", "Five operations + session chain", "ROLAP/MOLAP/HOLAP trio", "Implementation issues + traces", "2^d lattice + multiway computation", "Query decomposition trace", "Bitmap/join indexes + cardinality rule"] },
        { week: "Week 3", focus: "Unit III - mining fundamentals", tasks: ["Preprocessing ledger + normalization", "Reduction techniques + 10M-row trace", "Six technique families + mapping", "KDP six steps + two-pass trace", "Web structure/usage/content + text + spatial", "Applications + challenges matrix", "Security/privacy/ethics + k-anonymity trace"] },
        { week: "Week 4", focus: "Unit IV - association rules", tasks: ["Support/confidence/lift + 100 baskets", "Two-step decomposition", "Apriori trace L1-L3 + improvements", "Multi-level rules + reduced support", "FP-Growth + tree trace", "Time-series patterns + windows", "Trends + constraint pushdown"] },
        { week: "Week 5", focus: "Unit V - classification and clustering", tasks: ["Distance measures + document flip", "K-Means loop + elbow + cautions", "Gain computation + pruning", "Naive Bayes product + Laplace", "CBA/K-NN/prediction + categorization", "Confusion matrix + fraud trace", "Outlier methods + LOF ring case"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Re-run all five numericals by hand", "Redraw star schema and FP-tree", "Two full past papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is numerical-examined: answer with worked arithmetic and stated thresholds - support 20%, confidence 50%, lift 1.67 beats any essay.",
        "For schema questions, declare the grain in one sentence before drawing - it is the examiner's first check.",
        "For OLAP questions, count the dimensions restricted - slice (one) versus dice (several) resolves mechanically.",
        "For Apriori, show the prune: a candidate killed by an infrequent subset without a scan is the mark-earning line.",
        "For FP-Growth, quote two scans and no candidate generation - then the honest tree-memory trade.",
        "For classification numericals, write the formula first (entropy, Bayes product, distance), then substitute - method marks precede arithmetic.",
        "For accuracy questions, draw the confusion matrix before computing - and check the trivial-baseline comparison.",
        "Security tie-ins are free marks in this branch: re-identification, purpose limitation, the outlier-as-target sentence - one line each, where natural.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to re-check every computation's arithmetic.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: re-run the five numericals (100-basket measures, Apriori trace, gain computation, naive Bayes product, confusion-matrix metrics) and redraw the star schema and K-Means loop - by hand, once each. No new material tonight.",
      ],
      bullets: [
        "Forgetting the grain declaration before drawing a star schema.",
        "Calling unit price additive - only amount sums; price is a ratio measure.",
        "Confusing slice (one dimension) with dice (several).",
        "Quoting 2^d as 2n - the cube lattice is 2^d cuboids for d dimensions.",
        "Materializing every cuboid - partial materialization with iceberg conditions is the answer.",
        "Applying confidence without lift - the base-rate trap (90% on 88%-common).",
        "Skipping the Apriori prune - candidates with infrequent subsets die before scanning.",
        "Saying FP-Growth scans once per level - it scans exactly twice.",
        "Computing gain without normalizing by branch sizes - weighted entropy first.",
        "Dropping the Laplace correction in naive Bayes - one zero erases a class.",
        "Reading 96% accuracy as success without the 95% trivial baseline.",
        "Cleaning away outliers in fraud data - there the outlier is the target.",
      ],
    },
  ],
};
