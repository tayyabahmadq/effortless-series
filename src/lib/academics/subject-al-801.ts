/**
 * Academics - RGPV AIML 8th-semester subject: AL-801 Business Intelligence.
 *
 * Structure mirrors subject-cs-302.ts: 5 units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or SQL/Python sample, and three
 * exam-style questions (one 7-mark with outline + two short answers).
 */

import type { AcademicSubject } from "./types";

export const al801: AcademicSubject = {
  id: "al-801",
  code: "AL-801",
  title: "Business Intelligence",
  semester: "VIII Semester",
  program: "RGPV \u00b7 Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-801: BI foundations, data warehousing, OLAP and data mining, reporting and dashboards, advanced BI and implementation - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from BI foundations and decision-making levels into data warehousing with star and snowflake schemas, through OLAP operations and data mining techniques such as decision trees, k-means and Apriori, then across reporting, dashboards and visualization principles, and finally into advanced BI covering big data, real-time streaming, mobile BI and implementation case studies. Every section pairs the theory with a worked micro-example - a 6-transaction basket, a retail star schema, a 2-cluster k-means iteration - plus a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#60a5fa",
  emoji: "BI",
  unitCount: 5,
  totalSections: 30,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Business Intelligence Foundations",
      summary:
        "Unit I sets the stage: the three levels of decision-making, the BI definition and layered architecture from sources through ETL and warehouse to analytics and delivery, OLTP contrasted with OLAP, the BI tool landscape anchored by Excel, Power BI and Tableau, the BI lifecycle with team roles, and KPI design that turns raw data into a measurable business value case.",
      chapter: {
        number: "01",
        title: "Business Intelligence Foundations",
        intro:
          "Unit I builds the vocabulary the rest of the subject borrows: decision-making levels from strategic to operational, the BI architecture that connects sources to delivery, the OLTP-versus-OLAP distinction, the BI tool landscape, the BW lifecycle with its team roles, and the KPI design that makes BI measurable in business value terms.",
        inOneBreath:
          "Decisions run at three levels - strategic (multi-year, board), tactical (quarterly, manager) and operational (real-time, line worker); BI is the set of techniques, tools and processes that turn raw data into actionable insight for those decisions; the architecture chains sources, ETL, warehouse, analytics and delivery; OLTP is short-transaction current-data work while OLAP is complex-query historical work; Excel, Power BI and Tableau cover personal, team and enterprise scales; the BI lifecycle runs from project planning to deployment with roles like sponsor, data architect and steward; and KPIs are SMART measures cascaded from a top goal into a tree of drivers.",
        sections: [
          {
            number: "1.1",
            title: "Decision-making levels and the data-to-decision pipeline",
            body: [
              "Every organisation runs three decision horizons. Strategic decisions set the long-term direction and are owned by the board: a retail chain committing to open 50 stores in two years is a strategic call with a horizon of three to five years and tolerance for ambiguity. Tactical decisions translate strategy into plans for the next quarter or year and are owned by managers: increasing inventory turn from 4 to 5 this quarter, with the merchandising team choosing which categories to push, is tactical. Operational decisions are minute-to-minute, owned by front-line staff and systems: reorder SKU 1042 when stock drops below 5 units, or approve a payment when fraud score is under 0.3, are operational rules executed thousands of times a day.",
              "Each level feeds on a different data diet. Strategic decisions need aggregated, external, long-horizon data - market size, competitor moves, five-year sales trends. Tactical decisions need the last few quarters broken out by region, product and channel. Operational decisions need the freshest possible event stream - the last transaction, the current stock level, the live sensor reading. A BI system that conflates these horizons fails: feeding board-level strategic questions with yesterday's POS logs drowns the signal, while feeding operational reorder logic with quarterly aggregates is too slow to be useful.",
              "The data-to-decision pipeline converts raw events into action through five stages. Raw events (a swipe, a click, a sensor pulse) are captured as data; data is cleaned, integrated and contextualised into information (sales by store by day); information is patterned and explained into knowledge (sales drop 12% when it rains); knowledge is weighed against alternatives to form a decision (run rain-day promotions); the decision triggers an action (auto-activate the promotion when the forecast shows rain). Each stage adds value and removes volume: terabytes of events become a handful of decisions per day.",
              "A worked retail example shows the chain end-to-end. A store's POS logs 12,000 transactions per day. The ETL job aggregates them into a sales_fact table by product, store and day. A weekly dashboard reveals that umbrella sales spike 8x on rainy days. The category manager turns that into knowledge: weather drives impulse buys of weather-sensitive SKUs. The strategic decision is to integrate the weather API into the replenishment system; the tactical decision is to lift umbrella safety stock by 20% during monsoon; the operational decision is to push the umbrella end-cap to the store front when the local forecast predicts rain.",
            ],
            bullets: [
              "Three decision levels: strategic (3-5 years, board), tactical (quarter to year, manager), operational (real-time, line).",
              "Strategic data is aggregated, external, long-horizon; operational data is fresh, internal, event-level.",
              "Data-to-decision pipeline: event -> data -> information -> knowledge -> decision -> action.",
              "Volume shrinks at every stage: terabytes of events become a few board decisions per quarter.",
              "Worked retail: 12,000 daily POS rows aggregated to sales_fact; rainy-day umbrella spike 8x triggers auto-promotion.",
              "BI systems must respect the horizon: strategic dashboards on quarterly aggregates, operational alerts on event streams.",
              "A KPI for each level: revenue growth YoY (strategic), inventory turn (tactical), stockout rate (operational).",
            ],
            table: {
              caption: "Decision levels mapped to data horizon, owner and BI artefact.",
              headers: ["Level", "Horizon", "Owner", "Data type", "BI artefact"],
              rows: [
                ["Strategic", "3-5 years", "Board / CXO", "Aggregated + external", "5-year trend dashboard"],
                ["Tactical", "Quarter / Year", "Manager", "Quarterly by region/product", "Scorecard vs target"],
                ["Operational", "Real-time / Daily", "Front-line", "Event-level live stream", "Alert + reorder rule"],
                ["Cross-level", "All", "Data team", "Conformed dimensions", "Shared semantic layer"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Decision levels pyramid",
              caption:
                "Fewer, slower, costlier decisions at the top; more, faster, cheaper at the base - data volume inverts.",
              tiers: [
                { label: "Strategic", note: "few decisions, multi-year, board" },
                { label: "Tactical", note: "quarterly plans, managers" },
                { label: "Operational", note: "thousands per day, front-line" },
              ],
            },
            callout: {
              type: "exam",
              title: "Map every case study to all three levels",
              body: "RGPV theory questions on BI value often ask 'how does BI support decision-making'. Answer with the three levels and one concrete example at each - never write a generic paragraph. Award marks land on the strategic/tactical/operational split and on the worked numbers (horizon, owner, decision).",
            },
            keyTerms: [
              { term: "Strategic decision", definition: "Long-horizon (3-5 year) board-level call setting organisational direction, e.g. open 50 stores in two years." },
              { term: "Tactical decision", definition: "Quarterly-to-yearly manager-level plan translating strategy into action, e.g. lift inventory turn from 4 to 5." },
              { term: "Operational decision", definition: "Real-time, front-line or system-driven rule executed many times per day, e.g. reorder when stock < 5." },
              { term: "Data-to-decision pipeline", definition: "Event -> data -> information -> knowledge -> decision -> action: the value-adding chain BI supports." },
            ],
            examQuestions: [
              {
                q: "Explain the three levels of decision-making in a business organisation with a worked example for each. Show how a BI system supplies a different artefact to each level and trace one decision through the data-to-decision pipeline.",
                marks: 7,
                outline: [
                  "Define strategic, tactical and operational decisions with horizons and owners.",
                  "Worked strategic example: a retail chain opening 50 stores in 2 years, using 5-year market trend data.",
                  "Worked tactical example: quarterly inventory turn lifted from 4 to 5 using regional sales scorecards.",
                  "Worked operational example: daily reorder of SKU 1042 when stock < 5 units using POS stream.",
                  "Map BI artefacts: strategic dashboard, tactical scorecard, operational alert.",
                  "Trace one decision through event -> data -> information -> knowledge -> decision -> action.",
                  "Conclude that volume shrinks and value rises as data moves up the pyramid.",
                ],
              },
              {
                q: "Distinguish between strategic and operational decisions with one example each.",
                marks: 2,
              },
              {
                q: "List the six stages of the data-to-decision pipeline in order.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "BI definition, value and layered architecture",
            body: [
              "Business Intelligence is the set of techniques, tools and processes that transform raw data into actionable insight for business decisions. The emphasis is on actionable: a dashboard that simply displays numbers is reporting, not BI; BI adds the integration, history, analytics and delivery that let a manager act. The value proposition is measurable - reduced stockouts, higher campaign ROI, lower fraud losses, faster monthly close - and is the only honest test of whether a BI investment is paying back.",
              "The canonical BI architecture has five layers, each consuming the previous. Source systems - CRM, ERP, POS, web logs, IoT sensors, spreadsheets - generate the raw data but were built to run operations, not to answer business questions. ETL (extract, transform, load) pulls from these sources, cleanses, deduplicates, standardises codes and loads into the warehouse. The data warehouse is the single integrated, historical, subject-oriented store. Analytics layers run SQL, OLAP and data mining on top of the warehouse. Delivery layers - reports, dashboards, alerts, embedded widgets - push insight to the right person at the right time.",
              "A worked 5-store retail chain illustrates the chain. The POS system logs 12,000 transactions per store per day; the inventory ERP tracks 8,000 SKUs; the HR system records 120 employees. ETL pulls each nightly at 2 AM, maps SKU codes between POS and ERP (POS code 1042 = ERP code 4042), and loads into a sales_fact table. The warehouse holds 3 years of history - 65 million fact rows. Analytics layers compute daily sales by category and store. Delivery pushes a Monday morning dashboard to the category manager and a same-day alert to the store manager if their shrink exceeds 1% of sales.",
              "The architecture pays back when each layer is owned. A common failure is to leave ETL as an afterthought and let data quality drift: the warehouse then becomes a swamp. Mature BI programmes assign a data steward per subject area, publish a refresh SLA (e.g. 'data current to 2 AM, available by 6 AM'), and instrument every layer with row counts and latency metrics so a break is visible before the executive sees the wrong number on the dashboard.",
            ],
            bullets: [
              "BI definition: techniques, tools and processes that turn raw data into actionable insight.",
              "Five-layer architecture: sources -> ETL -> warehouse -> analytics -> delivery.",
              "Sources: CRM, ERP, POS, web logs, IoT - operational systems, not query-friendly.",
              "ETL = extract (pull), transform (clean, standardise), load (push to warehouse).",
              "Warehouse = integrated, historical, subject-oriented single version of truth.",
              "Delivery: reports (canned), dashboards (interactive), alerts (push), embedded (in app).",
              "Worked retail: 5 stores, 12k txns/store/day, 3 years = 65M fact rows in sales_fact.",
              "Mature programmes publish refresh SLAs and instrument every layer with row-count checks.",
            ],
            codeExample: {
              language: "sql",
              caption: "Five-layer architecture mirrored in a nightly warehouse load (SQL).",
              code:
                "-- Layer 1: source tables in operational DB\n" +
                "-- Layer 2-3: ETL pulls, transforms, loads into warehouse fact table\n" +
                "INSERT INTO wh.sales_fact (\n" +
                "  date_key, store_key, product_key, units, dollars\n" +
                ")\n" +
                "SELECT\n" +
                "  d.date_key,\n" +
                "  s.store_key,\n" +
                "  p.product_key,              -- POS code 1042 maps to ERP 4042 here\n" +
                "  SUM(t.qty) AS units,\n" +
                "  SUM(t.qty * t.unit_price) AS dollars\n" +
                "FROM staging.pos_transactions t\n" +
                "JOIN wh.dim_date   d ON d.full_date = t.txn_date\n" +
                "JOIN wh.dim_store  s ON s.pos_code = t.store_code\n" +
                "JOIN wh.dim_product p ON p.pos_sku = t.sku\n" +
                "WHERE t.txn_date = CURRENT_DATE - 1\n" +
                "GROUP BY d.date_key, s.store_key, p.product_key;\n" +
                "-- Layer 4-5: a scheduled view feeds the manager dashboard at 6 AM\n" +
                "CREATE OR REPLACE VIEW analytics.daily_sales_by_store AS\n" +
                "SELECT store_key, date_key, SUM(dollars) AS sales\n" +
                "FROM wh.sales_fact GROUP BY store_key, date_key;",
            },
            diagram: {
              kind: "pipeline",
              title: "BI architecture pipeline",
              caption:
                "Sources to delivery in five stages - each stage adds value and removes volume.",
              stages: [
                { label: "Sources", note: "CRM, ERP, POS, web, IoT" },
                { label: "ETL", note: "extract, transform, load" },
                { label: "Data warehouse", note: "integrated, historical, subject-oriented" },
                { label: "Analytics", note: "SQL, OLAP, data mining" },
                { label: "Delivery", note: "reports, dashboards, alerts" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the five-layer pipe in the exam",
              body: "The architecture diagram is a near-guaranteed question. Draw the five boxes left to right (sources, ETL, DW, analytics, delivery), label the arrows ('extract', 'transform', 'load', 'query', 'render'), and add one concrete source per layer (e.g. POS, staging table, sales_fact, daily_sales view, manager dashboard). The concrete labels are what lift the answer from 5 to 7 marks.",
            },
            keyTerms: [
              { term: "Business Intelligence", definition: "The techniques, tools and processes that transform raw data into actionable insight for decisions." },
              { term: "ETL", definition: "Extract, Transform, Load: the process that pulls data from sources, cleans and standardises it, and loads it into the warehouse." },
              { term: "Data warehouse", definition: "An integrated, historical, subject-oriented, non-volatile store that supports decision-making - the single version of truth." },
              { term: "Delivery layer", definition: "The front-end artefacts - reports, dashboards, alerts, embedded widgets - that push insight to the right user." },
            ],
            examQuestions: [
              {
                q: "Define Business Intelligence. Explain its five-layer architecture from sources to delivery with a worked retail example, and state how each layer adds measurable value.",
                marks: 7,
                outline: [
                  "Define BI as techniques, tools and processes that turn raw data into actionable insight.",
                  "List the five layers: sources, ETL, warehouse, analytics, delivery.",
                  "Worked example: 5-store chain, 12k transactions/store/day from POS, 8k SKUs from ERP, 120 employees from HR.",
                  "ETL pulls nightly, maps SKU codes (POS 1042 = ERP 4042), loads sales_fact with 65M rows over 3 years.",
                  "Analytics layer computes daily sales by category and store.",
                  "Delivery: Monday dashboard for category manager; same-day alert for store manager if shrink > 1%.",
                  "State value per layer: integration at ETL, history at DW, insight at analytics, action at delivery.",
                ],
              },
              {
                q: "Name the five layers of BI architecture in order.",
                marks: 2,
              },
              {
                q: "Why is the data warehouse called the 'single version of truth'?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "OLTP versus OLAP workloads",
            body: [
              "Operational systems run OLTP (online transaction processing): short, fast, many-user transactions that capture the current state of the business. An ATM withdrawal, an order entry, a hotel booking - each is an OLTP transaction that must be atomic, consistent, isolated and durable (the ACID properties), with sub-second response and 24x7 availability. OLTP schemas are highly normalised (3NF) to avoid write anomalies, and they hold only current data: once an order ships, the row is updated to 'shipped' and the prior state is lost unless an audit trail is kept separately.",
              "OLAP (online analytical processing) is the opposite workload: complex, read-mostly queries over large historical data sets run by a handful of analysts. A typical OLAP query - 'compare umbrella sales in monsoon 2024 vs 2023 across 50 stores and 12 categories' - touches millions of rows, joins a fact table to several dimensions and runs for seconds to minutes. OLAP schemas are denormalised (star or snowflake) to minimise joins and tolerate redundancy because the data is loaded in batches and rarely updated. Availability expectations are business-hours, not 24x7.",
              "The two workloads must never share a database. Running an OLAP query on an OLTP system steals locks and CPU from the cash register; running OLTP updates on a warehouse star schema breaks the dimensional model and the ETL pipeline. The standard pattern is to keep OLTP in the source system and replicate or ETL into a separate OLAP warehouse. The separation also lets each system be tuned for its own access pattern: OLTP for fast writes with B-tree indexes, OLAP for fast reads with columnar storage, bitmap indexes and pre-aggregated cubes.",
              "A worked banking example makes the contrast sharp. The ATM network runs OLTP: a withdrawal must post in under 2 seconds, balance updated atomically, with the row staying current. The fraud analytics team runs OLAP: 'find cards whose transaction pattern shifted 3 standard deviations in the last 7 days compared to a 90-day baseline' touches 200 million transactions, runs for 45 seconds, and is read-only. Mixing the two would either freeze the ATMs or starve the analysts - so the bank ETLs a nightly copy into a fraud warehouse and the analysts query that, never the live system.",
            ],
            bullets: [
              "OLTP: short transactions, current data, many users, normalised schema, sub-second response.",
              "OLAP: complex queries, historical data, few users, denormalised schema, seconds-to-minutes response.",
              "ACID for OLTP (atomicity, consistency, isolation, durability); OLAP tolerates eventual consistency.",
              "Never mix workloads: OLAP steals OLTP locks; OLTP writes break dimensional models.",
              "OLTP schema = 3NF; OLAP schema = star or snowflake.",
              "OLTP indexed for fast writes (B-tree); OLAP indexed for fast scans (columnar, bitmap).",
              "Worked banking: ATM posts withdrawal in 2s (OLTP); fraud scan on 200M rows runs 45s (OLAP) on a copy.",
            ],
            table: {
              caption: "OLTP vs OLAP across eight dimensions.",
              headers: ["Dimension", "OLTP", "OLAP"],
              rows: [
                ["Purpose", "Run the business (capture)", "Analyse the business (decide)"],
                ["Transaction volume", "Thousands/sec, small", "Few/day, large queries"],
                ["Data freshness", "Current", "Historical (years)"],
                ["Schema", "Normalised 3NF", "Denormalised star/snowflake"],
                ["Users", "Many (customers, clerks)", "Few (analysts, managers)"],
                ["Response target", "Sub-second", "Seconds to minutes"],
                ["Availability", "24x7, ACID", "Business hours, eventual OK"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "OLTP vs OLAP at a glance",
              caption:
                "Two workloads, two databases - keep them separate to protect the cash register and the analyst.",
              left: {
                heading: "OLTP",
                items: [
                  "Short atomic transactions",
                  "Current data, 24x7",
                  "Many users, sub-second response",
                  "Normalised 3NF schema",
                  "B-tree indexes for fast writes",
                ],
              },
              right: {
                heading: "OLAP",
                items: [
                  "Complex read-mostly queries",
                  "Historical data, business hours",
                  "Few users, seconds-to-minutes",
                  "Denormalised star schema",
                  "Columnar and bitmap indexes",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Never run the analyst on the cash register",
              body: "If asked 'why do we need a warehouse when the source system already has the data', the correct answer is workload isolation: an OLAP scan on the OLTP database will lock rows the cash register needs and freeze operations. ETL a copy nightly and let analysts hit that - this separation is itself a 2-mark answer.",
            },
            keyTerms: [
              { term: "OLTP", definition: "Online Transaction Processing: short, fast, many-user transactions that capture the current state of the business." },
              { term: "OLAP", definition: "Online Analytical Processing: complex, read-mostly queries over large historical data sets run by analysts." },
              { term: "ACID", definition: "Atomicity, Consistency, Isolation, Durability - the transaction guarantees an OLTP system must provide." },
              { term: "Workload isolation", definition: "Keeping OLTP and OLAP on separate databases so analytical scans do not interfere with operational writes." },
            ],
            examQuestions: [
              {
                q: "Compare OLTP and OLAP systems on at least six dimensions with a worked banking example. Explain why the two workloads must be isolated.",
                marks: 7,
                outline: [
                  "Define OLTP (short, fast, many-user, current data) and OLAP (complex, few users, historical).",
                  "Compare on purpose, transaction volume, freshness, schema, users, response target, availability.",
                  "OLTP schema normalised 3NF; OLAP denormalised star/snowflake.",
                  "Worked example: ATM posts withdrawal in under 2 seconds (OLTP).",
                  "Worked example: fraud scan over 200M transactions runs 45 seconds on a nightly copy (OLAP).",
                  "Explain workload isolation: OLAP scans lock OLTP rows and freeze the cash register.",
                  "Conclude that nightly ETL into a separate warehouse protects both workloads.",
                ],
              },
              {
                q: "State two reasons why an OLAP query should not be run on an OLTP database.",
                marks: 2,
              },
              {
                q: "Why is the OLAP schema denormalised (star) while the OLTP schema is normalised (3NF)?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "BI tool landscape - Excel, Power BI and Tableau",
            body: [
              "The BI tool spectrum runs from personal spreadsheets to enterprise analytics platforms, and choosing the right tier is itself a BI decision. Microsoft Excel, with its pivot tables, Power Query add-in and Power Pivot in-memory engine, handles up to about 1-2 million rows per workbook and is the right tool for a one-off personal or team analysis. Its strengths are ubiquity (every business user knows it) and flexibility (formulas, charts, what-if). Its weaknesses are limited row volume, no centralised dataset governance, and the famous 'spreadsheet hell' of duplicated versions drifting out of sync.",
              "Power BI is Microsoft's enterprise BI platform, built on the same VertiPaq in-memory engine as Power Pivot but extended with a cloud service (Power BI Service), desktop authoring tool (Power BI Desktop), and a calculation language called DAX. A Power BI dataset can hold hundreds of millions of rows in memory, refresh on a schedule, and serve dashboards to thousands of consumers through workspaces and row-level security. DAX measures like 'Total Sales = SUM(sales[dollars])' and 'YoY Growth = DIVIDE([Total Sales] - [PY Sales], [PY Sales])' are reusable across reports and provide one semantic layer for the organisation.",
              "Tableau takes a visualization-first philosophy: the user drags fields onto shelves (rows, columns, color, size) and the VizQL engine generates the SQL and renders the chart. Tableau's Hyper engine is fast on wide data sets, and its visual language - reference lines, dual-axis, sets, parameters - is more polished than Power BI for exploratory analytics. Tableau Server or Tableau Cloud provides sharing and governance. The trade-off: Tableau licensing is costlier per user than Power BI (often bundled with Microsoft 365 E5), and Tableau lacks Power BI's tight integration with Microsoft Office and Teams.",
              "A worked selection grid makes the choice concrete. For a marketing analyst doing a one-off campaign ROI analysis on 80,000 rows, Excel with Power Query is the right pick - it ships in 2 hours and the analyst already knows it. For a sales operations team that needs daily refreshed dashboards shared with 200 reps, Power BI Desktop + Service with a published dataset is the right pick. For an exploratory data analytics team that needs to spot anomalies in 50 million rows with rich interactivity, Tableau Desktop + Server is the right pick. No tool wins everywhere - the question is fit to the use case.",
            ],
            bullets: [
              "Excel: 1-2M rows per workbook, pivot tables, Power Query, ubiquitous - personal/team analysis.",
              "Power BI: VertiPaq in-memory engine, DAX measures, scheduled refresh, RLS - enterprise dashboards.",
              "Tableau: VizQL + Hyper engine, viz-first drag-drop, polished visuals - exploratory analytics.",
              "Selection driver: row volume, refresh frequency, audience size, integration needs, licensing cost.",
              "Power BI typically bundled with Microsoft 365 E5 - lower marginal cost per seat.",
              "Tableau licensing is costlier but richer for visual exploration; Salesforce-owned since 2019.",
              "Worked: Excel for 80k-row campaign ROI; Power BI for 200-rep daily sales; Tableau for 50M-row anomaly hunt.",
              "Governance tie-breaker: pick the platform whose certified datasets the org already operates.",
            ],
            table: {
              caption: "Excel vs Power BI vs Tableau across selection dimensions.",
              headers: ["Dimension", "Excel", "Power BI", "Tableau"],
              rows: [
                ["Row limit", "~1-2M per workbook", "100M+ in-memory", "100M+ via Hyper"],
                ["Authoring", "Formulas + pivots", "Desktop + DAX", "Desktop + VizQL"],
                ["Sharing", "Email/file share", "Service workspaces", "Server / Cloud"],
                ["Refresh", "Manual / Power Query", "Scheduled up to 8x/day", "Scheduled / live"],
                ["Strength", "Flexibility, ubiquity", "Microsoft integration", "Visual polish"],
                ["Cost", "Low (already owned)", "Mid (M365 E5)", "High per seat"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Tool selection matrix by audience size and row volume",
              caption:
                "Quadrants by audience (single analyst vs 200+ consumers) and row volume (under 1M vs over 50M).",
              axes: { x: "Audience size (left small, right large)", y: "Row volume (top large, bottom small)" },
              quadrants: [
                { label: "Top-left: Power BI Desktop", note: "single analyst, 100M+ rows in-memory" },
                { label: "Top-right: Tableau + Server", note: "many consumers, 50M+ rows, exploratory" },
                { label: "Bottom-left: Excel + Power Query", note: "single analyst, under 1M rows" },
                { label: "Bottom-right: Power BI Service", note: "200+ consumers, under 5M rows, daily refresh" },
              ],
            },
            callout: {
              type: "tip",
              title: "Match the tool to the use case, not to fashion",
              body: "Exam questions on tool selection reward use-case fit. State the row volume, audience size and refresh frequency first, then name the tool: 80k-row single-shot = Excel; 200-rep daily = Power BI Service; 50M-row exploratory = Tableau. A 'Power BI is best' answer with no use case earns fewer marks than a reasoned fit.",
            },
            keyTerms: [
              { term: "Power Query", definition: "Excel and Power BI's ETL tool: connect, clean and shape data from many sources before loading into the model." },
              { term: "DAX", definition: "Data Analysis Expressions: Power BI's formula language for measures like SUM, CALCULATE and time intelligence." },
              { term: "VizQL", definition: "Tableau's query language that translates drag-drop shelf placements into SQL and visual rendering." },
              { term: "VertiPaq", definition: "The in-memory columnar engine powering Power Pivot and Power BI datasets, capable of 100M+ rows." },
            ],
            examQuestions: [
              {
                q: "Compare Excel, Power BI and Tableau across six dimensions and give a worked use case for each. Explain how the tool selection depends on row volume, audience size and refresh frequency.",
                marks: 7,
                outline: [
                  "List the dimensions: row limit, authoring, sharing, refresh, strength, cost.",
                  "Excel: ~1-2M rows, formulas + pivots, file share, manual, ubiquitous, low cost.",
                  "Power BI: 100M+ rows in VertiPaq, DAX, Service workspaces, scheduled 8x/day, Microsoft integration, mid cost.",
                  "Tableau: Hyper engine 100M+, VizQL drag-drop, Server/Cloud, scheduled/live, visual polish, high cost.",
                  "Worked Excel case: 80k-row campaign ROI for a single marketing analyst.",
                  "Worked Power BI case: 200-rep daily sales dashboard with RLS.",
                  "Worked Tableau case: 50M-row anomaly hunt by an exploratory analytics team.",
                ],
              },
              {
                q: "Name two advantages of Power BI over Excel for enterprise dashboards.",
                marks: 2,
              },
              {
                q: "What is DAX and where is it used?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "BI lifecycle and team roles",
            body: [
              "Kimball's Business Dimensional Lifecycle is the canonical roadmap for delivering a BI programme. It starts with project planning (scope, sponsor, budget, team), moves through business requirements definition (interviews, prioritised questions, success metrics), technical architecture design (source-to-ETL-to-warehouse blueprint), dimensional modelling (fact and dimension table design), ETL design and development, BI application development (reports and dashboards), deployment, and finally maintenance and growth. The lifecycle is iterative: each successful release funds the next subject area, and a mature programme runs multiple releases in parallel.",
              "The lifecycle is deliberately requirements-first. Interviewing business users to extract their questions - 'which stores are underperforming on basket size this quarter?' - drives the dimensional model: the question becomes a sales_fact table with basket_size as a measure and store and date as dimensions. Skipping requirements and copying the OLTP schema into a warehouse is the classic BI failure: the warehouse then answers no question the business actually asks, and adoption collapses within a year.",
              "A BI programme needs seven core roles. The executive sponsor (often a CXO) funds and unblocks the programme, and is the single biggest success factor - without sponsorship, scope creep kills the project. The project manager runs scope, schedule and budget. The data architect designs the warehouse, dimensional model and conformed dimensions. The ETL developer builds the pipelines. The BI developer builds reports and dashboards on top of the warehouse. The data steward owns business definitions and data quality for a subject area. The end-user analyst consumes dashboards and provides feedback.",
              "A worked example shows the lifecycle in motion. A retailer kicks off a BI programme with a board-level sponsor (the CFO), a project manager, a data architect, two ETL developers, one BI developer and a sales data steward. Business requirements interviews surface 40 prioritised questions; the architect designs a retail star schema with sales_fact and four dimensions. ETL is built in 8 weeks, BI dashboards in 4 weeks, and the first release goes live in 90 days. The release answers the top 15 questions; the team then iterates to cover the rest. After 12 months, three subject areas (sales, inventory, customer) are live and adoption is measured at 180 weekly active dashboard users.",
            ],
            bullets: [
              "Kimball lifecycle: planning -> requirements -> architecture -> modelling -> ETL -> BI app -> deploy -> maintain.",
              "Requirements-first: prioritised business questions drive the dimensional model.",
              "Copying the OLTP schema into a warehouse is the classic BI failure - it answers no real question.",
              "Seven core roles: sponsor, PM, data architect, ETL dev, BI dev, data steward, end-user.",
              "Executive sponsorship is the single biggest success factor; without it scope creep kills the project.",
              "Iterative delivery: each release funds the next subject area; run multiple releases in parallel.",
              "Worked: retail BI, CFO sponsor, 90-day first release, 180 weekly active users after 12 months.",
              "Adoption metric: weekly active dashboard users, not report count - usage is the real test.",
            ],
            table: {
              caption: "BI lifecycle phases mapped to typical duration and owner.",
              headers: ["Phase", "Output", "Owner", "Typical duration"],
              rows: [
                ["Project planning", "Scope, sponsor, budget", "PM + sponsor", "2 weeks"],
                ["Business requirements", "Prioritised question list", "Data steward + PM", "3-4 weeks"],
                ["Architecture", "Source-to-DW blueprint", "Data architect", "2-3 weeks"],
                ["Dimensional modelling", "Star schema, grain statement", "Data architect", "2 weeks"],
                ["ETL development", "Pipelines, refresh SLA", "ETL developer", "6-8 weeks"],
                ["BI application", "Reports, dashboards", "BI developer", "3-4 weeks"],
                ["Deployment + maintenance", "Live release, support rota", "PM + BI dev", "ongoing"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Kimball Business Dimensional Lifecycle",
              caption:
                "A loop - each successful release funds the next subject area, keeping the programme iterative.",
              steps: [
                { label: "Project planning", note: "scope, sponsor, budget" },
                { label: "Business requirements", note: "interviews, prioritised questions" },
                { label: "Architecture + modelling", note: "blueprint, star schema, grain" },
                { label: "ETL development", note: "pipelines, refresh SLA" },
                { label: "BI application", note: "reports, dashboards" },
                { label: "Deploy + iterate", note: "measure adoption, fund next subject" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always pair the lifecycle with the seven roles",
              body: "A 7-mark lifecycle question should always carry the seven roles alongside the eight phases - one role per phase roughly. Name a concrete sponsor (e.g. the CFO) and one adoption metric (weekly active users) to lift the answer from a memorised list to a working programme.",
            },
            keyTerms: [
              { term: "Kimball lifecycle", definition: "The eight-phase Business Dimensional Lifecycle from project planning to maintenance, iterative across subject areas." },
              { term: "Executive sponsor", definition: "A CXO-level champion who funds and unblocks the BI programme; the single biggest success factor." },
              { term: "Data steward", definition: "Subject-area owner of business definitions and data quality, who runs requirements interviews and certifies dimensions." },
              { term: "Conformed dimension", definition: "A shared dimension (e.g. dim_date, dim_product) used consistently across multiple fact tables and data marts." },
            ],
            examQuestions: [
              {
                q: "Describe the Kimball Business Dimensional Lifecycle. List its phases, map the seven core team roles, and trace a worked retail BI programme from kickoff to a 90-day first release.",
                marks: 7,
                outline: [
                  "List the eight phases: planning, requirements, architecture, modelling, ETL, BI app, deployment, maintenance.",
                  "Explain requirements-first: prioritised business questions drive the dimensional model.",
                  "List the seven roles: sponsor, PM, data architect, ETL dev, BI dev, steward, end-user.",
                  "Note executive sponsorship as the single biggest success factor.",
                  "Worked retail example: CFO sponsor, PM, architect, 2 ETL devs, BI dev, sales steward.",
                  "Timeline: 2 weeks planning, 4 weeks requirements, 3 weeks architecture, 8 weeks ETL, 4 weeks BI app.",
                  "Outcome: 90-day first release covering 15 of 40 questions, then iterate; 180 weekly active users after 12 months.",
                ],
              },
              {
                q: "Name any four roles in a BI team and state one responsibility of each.",
                marks: 2,
              },
              {
                q: "Why is the requirements phase placed before the design phase in the lifecycle?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "KPI design, metrics and business value cases",
            body: [
              "A Key Performance Indicator is a SMART measure tied to a business goal: specific, measurable, achievable, relevant and time-bound. 'Increase revenue' is not a KPI; 'grow Q3 online revenue 15% year-over-year to USD 12M' is. A KPI tree cascades the top metric into drivers that teams can move. The top node 'revenue growth 15% YoY' breaks into 'customer count' times 'basket size' times 'purchase frequency'; each of those breaks further - customer count into new acquisitions and retained customers, basket size into units per transaction and average price, frequency into visits per customer per month.",
              "A worked KPI tree for an online retailer illustrates the cascade. Top: revenue = USD 10M, target USD 11.5M (15% growth). Drivers: customer count 200k -> target 220k; basket size USD 50 -> target USD 52; frequency 1.0 visit/month -> target 1.05. Each driver has an owner and a lever: customer count is owned by marketing via acquisition campaigns; basket size by merchandising via cross-sell recommendations; frequency by CRM via email re-engagement. The tree gives every team a number to move and a lever to move it with - the operational definition of alignment.",
              "BI delivers measurable business value through KPI visibility. Walmart's Retail Link system, shared with suppliers since 1991, reduced out-of-stock events by an estimated 10-30% by giving suppliers real-time shelf data. Harrah's (now Caesars) used customer analytics to grow revenue from approximately USD 500M to USD 3B between 1998 and 2003, driven by loyalty-card segmentation and targeted offers. Netflix's recommendation engine, a BI-style analytics application, reportedly drives around 75-80% of viewing hours and saves an estimated USD 1B per year in churn reduction.",
              "The hard part is choosing KPIs that resist gaming. A 'call handling time' KPI can push agents to rush customers off the phone and harm satisfaction; a 'sales conversion rate' KPI can push reps to cherry-pick easy leads. Mature programmes pair a productivity KPI with a quality KPI (handling time with satisfaction, conversion with lifetime value) and review thresholds quarterly. KPIs are not permanent: as strategy shifts, the tree reshapes. The BI system's job is to make the current tree measurable and visible, not to fossilise last year's strategy.",
            ],
            bullets: [
              "KPI = SMART measure tied to a goal: specific, measurable, achievable, relevant, time-bound.",
              "'Increase revenue' is not a KPI; 'grow Q3 online revenue 15% YoY to USD 12M' is.",
              "KPI tree: revenue = customer count x basket size x frequency - cascade top metric to levers.",
              "Every leaf has an owner and a lever: marketing owns acquisition, merchandising owns cross-sell, CRM owns frequency.",
              "Pair productivity KPIs with quality KPIs to resist gaming (handling time with satisfaction).",
              "Worked: 200k -> 220k customers, USD 50 -> USD 52 basket, 1.0 -> 1.05 visits - revenue 10 -> 11.5M.",
              "Walmart Retail Link cut out-of-stocks 10-30%; Harrah's grew revenue USD 500M -> USD 3B; Netflix saves ~USD 1B/year in churn.",
              "KPIs are not permanent: review quarterly and reshape as strategy shifts.",
            ],
            codeExample: {
              language: "python",
              caption: "Building a KPI tree as nested dictionaries and rolling up actuals (Python).",
              code:
                "# KPI tree: top metric cascaded into drivers with owners and levers\n" +
                "tree = {\n" +
                "  'name': 'Revenue', 'actual': 10_000_000, 'target': 11_500_000,\n" +
                "  'drivers': [\n" +
                "    {'name': 'Customer count', 'actual': 200_000, 'target': 220_000,\n" +
                "     'owner': 'Marketing', 'lever': 'Acquisition campaigns'},\n" +
                "    {'name': 'Basket size (USD)', 'actual': 50, 'target': 52,\n" +
                "     'owner': 'Merchandising', 'lever': 'Cross-sell recommendations'},\n" +
                "    {'name': 'Visits per month', 'actual': 1.00, 'target': 1.05,\n" +
                "     'owner': 'CRM', 'lever': 'Email re-engagement'},\n" +
                "  ]\n" +
                "}\n" +
                "# roll up: revenue ~ customer_count * basket_size * visits\n" +
                "rolled = (tree['drivers'][0]['actual'] *\n" +
                "          tree['drivers'][1]['actual'] *\n" +
                "          tree['drivers'][2]['actual'])\n" +
                "print('rolled revenue:', rolled)         # 10,000,000\n" +
                "print('gap to target:', tree['target'] - rolled)  # 1,500,000\n" +
                "# flag any driver more than 5% behind its target\n" +
                "for d in tree['drivers']:\n" +
                "  pct = d['actual'] / d['target']\n" +
                "  flag = 'AT RISK' if pct < 0.95 else 'on track'\n" +
                "  print(d['name'], '->', flag)",
            },
            diagram: {
              kind: "layers",
              title: "KPI tree layers - revenue cascaded to drivers and levers",
              caption:
                "Top layer is the strategic number; middle layer the drivers; bottom layer the team-level levers.",
              layers: [
                { label: "Strategic: Revenue USD 10M -> 11.5M (15% YoY)", note: "owned by CEO/CFO" },
                { label: "Drivers: Customer count x Basket size x Frequency", note: "owned by function heads" },
                { label: "Levers: Acquisition, Cross-sell, Re-engagement", note: "owned by team leads" },
                { label: "Metrics: 200k->220k, USD 50->52, 1.0->1.05", note: "tracked weekly in BI dashboards" },
              ],
            },
            callout: {
              type: "warning",
              title: "Beware KPIs that can be gamed",
              body: "A single productivity KPI invites gaming: 'call handling time' pushes agents to rush customers; 'conversion rate' pushes reps to cherry-pick. Always pair productivity with quality (handling time with satisfaction, conversion with lifetime value) and review thresholds quarterly. An ungated KPI becomes a target, and a target becomes a problem.",
            },
            keyTerms: [
              { term: "KPI", definition: "A SMART measure - specific, measurable, achievable, relevant, time-bound - tied to a business goal." },
              { term: "KPI tree", definition: "A cascade from a top metric into drivers and team-level levers, each with an owner and a target." },
              { term: "Driver", definition: "A multiplier that moves the top metric (customer count, basket size, frequency) and has an owner." },
              { term: "Gaming risk", definition: "The tendency of staff to optimise a single KPI in ways that harm other outcomes; mitigated by pairing productivity with quality." },
            ],
            examQuestions: [
              {
                q: "Define a KPI and the SMART criteria. Construct a KPI tree for an online retailer with revenue as the top metric, name the owners and levers at each level, and cite three documented business value cases of BI.",
                marks: 7,
                outline: [
                  "Define KPI and SMART: specific, measurable, achievable, relevant, time-bound.",
                  "Contrast 'increase revenue' (not a KPI) with 'grow Q3 online revenue 15% YoY to USD 12M' (a KPI).",
                  "Top node: revenue USD 10M -> 11.5M (15% YoY).",
                  "Drivers: customer count 200k -> 220k; basket size USD 50 -> USD 52; frequency 1.0 -> 1.05.",
                  "Owners and levers: marketing -> acquisition; merchandising -> cross-sell; CRM -> re-engagement.",
                  "Business value cases: Walmart Retail Link cut out-of-stocks 10-30%; Harrah's grew revenue USD 500M -> USD 3B; Netflix saves ~USD 1B/year.",
                  "Conclude with anti-gaming: pair productivity KPI with quality KPI and review quarterly.",
                ],
              },
              {
                q: "State the five letters of SMART for a KPI.",
                marks: 2,
              },
              {
                q: "Give two examples of KPIs that can be gamed and a paired quality KPI that mitigates each.",
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
      title: "Data Warehousing",
      summary:
        "Unit II dives into the warehouse itself: the four Inmon characteristics, the Inmon top-down versus Kimball bottom-up architectures, the star and snowflake schemas with a worked retail star, fact and dimension design with grain statements, the three SCD types for slowly changing dimensions, the ETL pipeline and staging area, data marts, and metadata plus data quality dimensions.",
      chapter: {
        number: "02",
        title: "Data Warehousing",
        intro:
          "Unit II is the engineering core of BI: what makes a warehouse different from an OLTP database, the two competing architectural philosophies, the dimensional schemas (star and snowflake), the design of facts and dimensions including slowly changing dimensions, the ETL pipeline that feeds it all, and the metadata and data quality regime that keeps it trustworthy.",
        inOneBreath:
          "A data warehouse is subject-oriented, integrated, time-variant and non-volatile; Inmon builds top-down from a normalised enterprise DW then derives data marts while Kimball builds bottom-up from conformed dimensional marts that integrate into a bus architecture; the star schema has a fact table surrounded by denormalised dimensions while the snowflake normalises the dimensions; the grain statement fixes what one fact row means; SCD Type 1 overwrites, Type 2 preserves history with effective dates, and Type 3 keeps a previous-value column; ETL extracts from sources, transforms in staging and loads into facts and dimensions; data marts are subject-specific subsets; metadata spans technical, business and operational; and data quality is measured on accuracy, completeness, consistency, timeliness, validity and uniqueness.",
        sections: [
          {
            number: "2.1",
            title: "Data warehouse characteristics",
            body: [
              "Bill Inmon, the father of data warehousing, defined it as a subject-oriented, integrated, time-variant and non-volatile collection of data in support of management's decision-making process. Subject-oriented means the warehouse is organised by business subject - sales, customers, inventory - rather than by the application that produced the data. An order-entry OLTP system organises by order_id; the warehouse organises the same data by customer and product so the analyst can ask 'which products does this customer buy' without rejoining five tables.",
              "Integrated means the warehouse reconciles inconsistent encodings across sources. The POS system may code gender as M/F, the CRM as 1/0, the loyalty programme as Male/Female - the warehouse standardises on one code. Currency may be in USD in finance and INR in operations; units may be cases in supply chain and eaches in stores. Integration happens once, in ETL, and is documented in the metadata so every downstream consumer inherits the same definitions. Integration is the most expensive characteristic to deliver and the most valuable to consume.",
              "Time-variant means every warehouse record carries a time dimension and the warehouse keeps history - typically three to five years. An OLTP customer row shows the current address; the warehouse shows every address the customer has had, with effective and expiry dates, so 'which customers moved from Mumbai to Pune in the last 24 months' is a query, not a forensic investigation. Non-volatile means the warehouse is read-mostly: data is loaded in batch, not updated transaction-by-transaction, and once loaded a fact row is not changed. This is what makes the warehouse safe for analytical scans.",
              "A worked retail example shows all four characteristics. A 5-store chain's warehouse holds a sales_fact table (subject-oriented: the subject is sales), with SKU codes unified across POS and ERP (integrated), three years of daily data (time-variant), and nightly batch loads with no intra-day updates to fact rows (non-volatile). An analyst asking 'compare 2024 umbrella sales to 2023 by region' runs a single SQL query against this warehouse - the same query on the OLTP system would require joining live transaction tables to product and store tables and risk locking the cash registers.",
            ],
            bullets: [
              "Inmon's four characteristics: subject-oriented, integrated, time-variant, non-volatile.",
              "Subject-oriented: organised by business subject (sales, customer), not by application (order_id).",
              "Integrated: one ETL pass reconciles encodings (M/F vs 1/0 vs Male/Female) and units (cases vs eaches).",
              "Time-variant: every record timestamped, history kept 3-5 years, effective/expiry dates on dimensions.",
              "Non-volatile: loaded in batch, read-mostly, fact rows not updated - safe for analytical scans.",
              "Worked retail: sales_fact with SKU unified across POS/ERP, 3 years daily, nightly batch load.",
              "Integration is the most expensive characteristic to deliver and the most valuable to consume.",
              "OLTP shows current state; warehouse shows every state over time - history enables trend questions.",
            ],
            table: {
              caption: "Inmon's four characteristics applied to a retail warehouse.",
              headers: ["Characteristic", "Definition", "Worked retail example"],
              rows: [
                ["Subject-oriented", "Organised by business subject", "sales_fact table subject = sales"],
                ["Integrated", "Encodings reconciled once in ETL", "SKU 1042 unified across POS and ERP"],
                ["Time-variant", "Every record timestamped, history kept", "3 years of daily data with effective dates"],
                ["Non-volatile", "Batch-loaded, fact rows not updated", "Nightly 2 AM load, no intra-day writes"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "OLTP current-state vs warehouse historical view",
              caption:
                "OLTP shows the latest value of a row; the warehouse shows every value over time, plus reconciled encodings.",
              left: {
                heading: "OLTP (current state)",
                items: [
                  "Single row per customer",
                  "Latest address only",
                  "Encoding varies by source (M/F vs 1/0)",
                  "Updated transaction-by-transaction",
                  "Optimised for write speed",
                ],
              },
              right: {
                heading: "Warehouse (historical view)",
                items: [
                  "Multiple rows per customer over time",
                  "Every address with effective/expiry dates",
                  "Encoding integrated to one canonical value",
                  "Loaded in batch, read-mostly",
                  "Optimised for analytical scans",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always quote Inmon's definition verbatim",
              body: "The 7-mark warehouse definition question rewards the verbatim Inmon quote: 'a subject-oriented, integrated, time-variant and non-volatile collection of data in support of management's decision-making process'. Then unpack each of the four characteristics with one worked retail example - that combination is the full-marks template.",
            },
            keyTerms: [
              { term: "Subject-oriented", definition: "Organised by business subject (sales, customer, inventory) rather than by the source application." },
              { term: "Integrated", definition: "Encodings, units and codes reconciled once in ETL so downstream consumers inherit one definition." },
              { term: "Time-variant", definition: "Every record carries a time dimension and history is kept for years, enabling trend queries." },
              { term: "Non-volatile", definition: "Data loaded in batch and not updated transaction-by-transaction, making the warehouse safe for scans." },
            ],
            examQuestions: [
              {
                q: "State Inmon's definition of a data warehouse and explain each of its four characteristics with a worked retail example. Contrast the warehouse view with the OLTP view for a customer who has changed address.",
                marks: 7,
                outline: [
                  "Quote Inmon: subject-oriented, integrated, time-variant, non-volatile, supporting management decisions.",
                  "Subject-oriented: organised by business subject (sales), not by application (order_id).",
                  "Integrated: SKU 1042 unified across POS and ERP; encodings reconciled in ETL.",
                  "Time-variant: 3 years of daily data with effective/expiry dates on customer dimension.",
                  "Non-volatile: nightly 2 AM batch load, no intra-day writes to fact rows.",
                  "OLTP view: single row showing latest Mumbai address.",
                  "Warehouse view: multiple rows showing Mumbai (2021-2023) and Pune (2023-now) with effective dates.",
                ],
              },
              {
                q: "What does 'non-volatile' mean for a data warehouse?",
                marks: 2,
              },
              {
                q: "Give one example each of how a warehouse achieves 'integrated' and 'time-variant' data.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Inmon vs Kimball architectures",
            body: [
              "The two competing DW architectures differ in shape and direction. Inmon's enterprise data warehouse (EDW) approach is top-down: build a single normalised (3NF) enterprise warehouse first, then derive dimensional data marts from it for specific business units. Kimball's approach is bottom-up: build conformed dimensional data marts first, one subject area at a time, then integrate them through a shared 'bus architecture' of conformed dimensions into a logical enterprise warehouse. Both end at dimensional marts serving business users; they differ in where the normalised layer lives.",
              "Inmon's strength is the single integrated normalised store - the EDW is the system of record, and data marts are derived projections, so consistency is structural. Its weakness is time-to-value: building the EDW takes 12-24 months before the first data mart sees daylight, and requirements must be gathered enterprise-wide up front, which is hard. Kimball's strength is speed - a single subject-area mart ships in 90 days and immediately answers business questions. Its weakness is the risk of inconsistent marts if conformance is not enforced: each mart must share the same dim_date, dim_product and dim_customer or the bus architecture breaks.",
              "The trade-off maps to organisation type. A large enterprise with strong IT governance, a multi-year budget and many subject areas - a bank, a telco, a manufacturer - often picks Inmon because the EDW gives every business unit the same definitions and the budget allows the long build. A mid-size company with a single burning question (sales performance, marketing ROI) picks Kimball because the first mart ships in 90 days and proves value before the next funding round. Many real programmes are hybrid: a Kimball mart ships first to prove value, then an Inmon EDW is built underneath to integrate later subject areas.",
              "A worked example contrasts the two. A bank choosing Inmon builds a 3NF EDW integrating deposits, loans, cards and customer in 18 months, then derives risk and marketing marts - consistency is guaranteed by the EDW but the first mart ships in month 18. A retail chain choosing Kimball builds a sales mart in 90 days using conformed dim_date, dim_product and dim_store, ships it, then adds an inventory mart reusing the same dim_product - the first mart ships in month 3 but conformance discipline is the team's own responsibility, not the architecture's.",
            ],
            bullets: [
              "Inmon: top-down, normalised 3NF EDW first, then derive dimensional marts.",
              "Kimball: bottom-up, conformed dimensional marts first, integrated via a bus architecture.",
              "Inmon strength: structural consistency - EDW is the system of record.",
              "Inmon weakness: 12-24 months before first mart ships; enterprise-wide requirements up front.",
              "Kimball strength: 90-day time-to-value for the first subject area.",
              "Kimball weakness: mart consistency is the team's discipline, not the architecture's.",
              "Worked bank: Inmon EDW in 18 months, then risk and marketing marts derived.",
              "Worked retailer: Kimball sales mart in 90 days reusing dim_date, dim_product, dim_store.",
              "Hybrid pattern common: ship a Kimball mart first, build Inmon EDW underneath for later subjects.",
            ],
            table: {
              caption: "Inmon vs Kimball across six decision dimensions.",
              headers: ["Dimension", "Inmon (top-down)", "Kimball (bottom-up)"],
              rows: [
                ["Starting layer", "Normalised 3NF EDW", "Dimensional data mart"],
                ["Direction", "Top-down", "Bottom-up"],
                ["Time to first mart", "12-24 months", "~90 days"],
                ["Consistency source", "Structural (EDW)", "Conformance discipline"],
                ["Requirements", "Enterprise-wide up front", "Per subject area"],
                ["Best fit", "Large enterprise, strong IT", "Mid-size, single burning question"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Inmon vs Kimball architectural shape",
              caption:
                "Inmon normalises first then derives marts; Kimball builds marts first then integrates them via conformed dimensions.",
              left: {
                heading: "Inmon (top-down)",
                items: [
                  "Single normalised 3NF EDW",
                  "Data marts derived from EDW",
                  "Structural consistency",
                  "12-24 months to first mart",
                  "Best for large enterprise",
                ],
              },
              right: {
                heading: "Kimball (bottom-up)",
                items: [
                  "Conformed dimensional marts",
                  "Bus architecture integrates them",
                  "Discipline-based consistency",
                  "~90 days to first mart",
                  "Best for mid-size, focused question",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Mention the hybrid real-world pattern",
              body: "Pure Inmon vs pure Kimball is a textbook dichotomy; real programmes are often hybrid. A Kimball mart ships first to prove value in 90 days, then an Inmon EDW is built underneath for later subject areas. Mentioning the hybrid pattern earns the extra mark that separates a memorised answer from an experienced one.",
            },
            keyTerms: [
              { term: "Enterprise Data Warehouse (EDW)", definition: "Inmon's single normalised 3NF store that is the system of record for the enterprise, from which marts are derived." },
              { term: "Bus architecture", definition: "Kimball's integration pattern: conformed dimensions shared across marts form a 'bus' that lets them be queried together." },
              { term: "Conformed dimension", definition: "A dimension implemented identically across marts (e.g. dim_date) so fact tables can be joined consistently." },
              { term: "Data mart", definition: "A subject-specific subset of the warehouse serving one business unit (sales, marketing, finance)." },
            ],
            examQuestions: [
              {
                q: "Compare Inmon and Kimball DW architectures on six dimensions. Give a worked example of each and state when a hybrid pattern is appropriate.",
                marks: 7,
                outline: [
                  "Define Inmon: top-down, normalised 3NF EDW first, then derive marts.",
                  "Define Kimball: bottom-up, conformed dimensional marts integrated via bus architecture.",
                  "Compare on starting layer, direction, time-to-value, consistency source, requirements, fit.",
                  "Worked Inmon example: bank builds EDW integrating deposits, loans, cards in 18 months, then derives risk and marketing marts.",
                  "Worked Kimball example: retail chain builds sales mart in 90 days reusing dim_date, dim_product, dim_store.",
                  "Trade-off: Inmon = structural consistency but slow; Kimball = fast but conformance is discipline.",
                  "Hybrid pattern: ship a Kimball mart first, build Inmon EDW underneath for later subjects.",
                ],
              },
              {
                q: "What is a conformed dimension and why is it central to Kimball's bus architecture?",
                marks: 2,
              },
              {
                q: "Name one strength and one weakness each of Inmon and Kimball.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Star and snowflake schemas",
            body: [
              "Dimensional modelling produces two canonical schemas. The star schema has one fact table at the centre surrounded by denormalised dimension tables - each dimension holds all its attributes in a single flat table, even hierarchies like category -> subcategory -> product. The snowflake schema normalises the dimensions: the product dimension is split into product, subcategory and department tables, joined by keys. The star is faster for queries (fewer joins) and simpler for users; the snowflake saves storage and enforces referential integrity at the cost of more joins per query.",
              "A worked retail star schema has a sales_fact table with five foreign keys (date_key, store_key, product_key, customer_key, promotion_key) and two measures (units, dollars). Surrounding it are dim_date (date_key, full_date, week, month, quarter, year), dim_store (store_key, store_code, city, region, state), dim_product (product_key, sku, name, brand, category, subcategory), dim_customer (customer_key, customer_id, name, segment, signup_date) and dim_promotion (promotion_key, name, start, end, discount). Every analytical question becomes a single join from the fact to one or two dimensions - 'umbrella sales by region in monsoon' is sales_fact joined to dim_product and dim_store and dim_date.",
              "Snowflaking the same schema splits dim_product into dim_product (product_key, sku, name, subcategory_key), dim_subcategory (subcategory_key, name, category_key) and dim_category (category_key, name, department). The query 'umbrella sales by category' now needs three joins instead of one. Snowflaking saves storage when categories repeat heavily (one row per category instead of repeating in every product) but in modern columnar engines the storage saving is small and the join cost is real, so most practitioners default to star and snowflake only when a dimension is huge (e.g. a customer dimension with 50 million rows).",
              "The choice rule is practical. Start with a star - it is simpler for users and faster for queries. Snowflake a dimension only when (a) it is too large to fit comfortably denormalised, (b) the hierarchy is shared across multiple fact tables and must be conformed, or (c) the source system already models it as a snowflake and the ETL cost of flattening is high. In exams the safe answer is 'prefer star for query speed and simplicity; snowflake only for very large or shared hierarchies'. The fact table grain is fixed by the design ('one row per product sold per transaction line per day'); the schema shape is a performance and storage decision downstream of that.",
            ],
            bullets: [
              "Star schema: one fact table surrounded by denormalised dimension tables.",
              "Snowflake schema: dimensions normalised into multiple tables, joined by keys.",
              "Star is faster (fewer joins) and simpler for users; snowflake saves storage and enforces RI.",
              "Worked retail star: sales_fact with date_key, store_key, product_key, customer_key, promotion_key.",
              "Measures in the fact: units (additive), dollars (additive), discount_pct (semi-additive over time).",
              "Snowflake splits dim_product into product -> subcategory -> category -> department (three joins).",
              "Default rule: prefer star; snowflake only for huge dimensions (>50M rows) or shared hierarchies.",
              "Schema shape is a performance decision downstream of fixing the fact grain.",
            ],
            codeExample: {
              language: "sql",
              caption: "Retail star schema DDL - fact and dimensions in SQL.",
              code:
                "-- Fact table at the centre\n" +
                "CREATE TABLE wh.sales_fact (\n" +
                "  date_key      INT NOT NULL,\n" +
                "  store_key     INT NOT NULL,\n" +
                "  product_key   INT NOT NULL,\n" +
                "  customer_key  INT NOT NULL,\n" +
                "  promotion_key INT NOT NULL,\n" +
                "  units         INT NOT NULL,        -- additive measure\n" +
                "  dollars       NUMERIC(12,2) NOT NULL,  -- additive measure\n" +
                "  CONSTRAINT pk_sales PRIMARY KEY (\n" +
                "    date_key, store_key, product_key, customer_key, promotion_key)\n" +
                ");\n" +
                "-- Surrounding denormalised dimensions (star)\n" +
                "CREATE TABLE wh.dim_date (\n" +
                "  date_key INT PRIMARY KEY, full_date DATE, week INT,\n" +
                "  month INT, quarter INT, year INT\n" +
                ");\n" +
                "CREATE TABLE wh.dim_product (\n" +
                "  product_key INT PRIMARY KEY, sku VARCHAR(20), name VARCHAR(100),\n" +
                "  brand VARCHAR(50), category VARCHAR(50), subcategory VARCHAR(50)\n" +
                ");\n" +
                "CREATE TABLE wh.dim_store (\n" +
                "  store_key INT PRIMARY KEY, store_code VARCHAR(10),\n" +
                "  city VARCHAR(50), region VARCHAR(30), state VARCHAR(30)\n" +
                ");\n" +
                "-- 'Umbrella sales by region in monsoon' becomes one fact + 3 dims\n" +
                "SELECT s.region, SUM(f.dollars) AS sales\n" +
                "FROM wh.sales_fact f\n" +
                "JOIN wh.dim_product p ON p.product_key = f.product_key\n" +
                "JOIN wh.dim_store   s ON s.store_key    = f.store_key\n" +
                "JOIN wh.dim_date    d ON d.date_key      = f.date_key\n" +
                "WHERE p.subcategory = 'Umbrellas' AND d.quarter = 3\n" +
                "GROUP BY s.region;",
            },
            diagram: {
              kind: "layers",
              title: "Star schema layers - fact at centre, dimensions around",
              caption:
                "Fact table surrounded by denormalised dimensions; a query joins one fact to 1-3 dimensions only.",
              layers: [
                { label: "Fact: sales_fact (date_key, store_key, product_key, customer_key, promotion_key, units, dollars)", note: "centre" },
                { label: "Conformed dimensions: dim_date, dim_store, dim_product, dim_customer, dim_promotion", note: "denormalised" },
                { label: "Hierarchies flattened into dimension columns (region->state->city in dim_store)", note: "no extra joins" },
                { label: "Analytical queries: 1 fact + 1-3 dimension joins, often served by an OLAP cube", note: "fast" },
              ],
            },
            callout: {
              type: "tip",
              title: "Default to star, snowflake only with a reason",
              body: "When asked 'star or snowflake', the safe answer is: prefer the star for query speed and user simplicity; snowflake only when a dimension is very large (>50M rows) or when its hierarchy must be conformed across multiple facts. Always state the reason - an answer that picks one without a reason loses marks.",
            },
            keyTerms: [
              { term: "Star schema", definition: "A fact table surrounded by denormalised dimension tables; queries join the fact to 1-3 dimensions." },
              { term: "Snowflake schema", definition: "A star with normalised dimensions split into multiple tables joined by keys; saves storage, adds joins." },
              { term: "Fact table", definition: "The central table holding measures and foreign keys to dimensions; each row is one grain instance." },
              { term: "Dimension table", definition: "A denormalised table holding descriptive attributes used to filter and group fact rows." },
            ],
            examQuestions: [
              {
                q: "Distinguish between star and snowflake schemas with a worked retail example. State when you would snowflake a dimension and why the star is the default choice.",
                marks: 7,
                outline: [
                  "Define star: one fact table surrounded by denormalised dimensions.",
                  "Define snowflake: dimensions normalised into multiple tables joined by keys.",
                  "Worked retail star: sales_fact with date_key, store_key, product_key, customer_key, promotion_key.",
                  "Worked snowflake: dim_product split into product -> subcategory -> category -> department.",
                  "Trade-off: star fewer joins and simpler; snowflake saves storage and enforces RI.",
                  "Snowflake when dimension is huge (>50M rows) or hierarchy shared across facts.",
                  "Default rule: prefer star for query speed; snowflake only with a stated reason.",
                ],
              },
              {
                q: "Write the SQL for a star-schema fact table with two measures and three dimension foreign keys.",
                marks: 2,
              },
              {
                q: "Give two reasons a practitioner prefers the star schema by default.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Fact and dimension design, including SCD Types 1, 2 and 3",
            body: [
              "Designing a fact table begins with the grain statement: a single sentence declaring what one fact row represents. 'One row per product sold per transaction line per store per day' is a grain; without it the fact table is uncontrolled and its measures become meaningless. The grain determines the measures (additive quantities like units and dollars that make sense at every level) and the dimensions (everything you can slice by - date, store, product, customer, promotion). Declaring the grain before designing the table is the most important discipline in dimensional modelling.",
              "Dimension design must handle change. A customer moves from Mumbai to Pune; a product rebrands; a salesperson is reassigned. Slowly Changing Dimensions (SCD) are the three standard patterns. Type 1 overwrites the old value - the row shows only the new value, history is lost. Use Type 1 when history does not matter, e.g. correcting a typo in a customer name. Type 2 preserves history by adding a new row with effective and expiry dates and a current flag - the customer now has two rows, Mumbai (2021-2023, expired) and Pune (2023-now, current). Use Type 2 when history does matter for analysis, e.g. tracking how customer behaviour changes after a move.",
              "Type 3 keeps limited history by adding a 'previous value' column. The customer row has current_city = Pune and previous_city = Mumbai, with a change_date. Type 3 supports 'before vs after' comparison but only one historical value - it cannot track multiple moves. Use Type 3 for ad-hoc two-period comparisons when the storage cost of Type 2 is not justified. In practice Type 2 dominates for important dimensions (customer, product) and Type 1 is used for cosmetic attributes (name spelling); Type 3 is rare, used for seasonal or limited-history comparisons.",
              "A worked customer move shows all three. Customer 1001 lived in Mumbai from 2021-01-01 to 2023-05-15, then moved to Pune. Type 1: row shows city = Pune only - the Mumbai period is lost. Type 2: two rows - (customer_key=1001, city=Mumbai, eff=2021-01-01, exp=2023-05-15, is_current=0) and (customer_key=1001, city=Pune, eff=2023-05-16, exp=9999-12-31, is_current=1). Type 3: one row - (customer_key=1001, current_city=Pune, previous_city=Mumbai, change_date=2023-05-16). The fact table joins to whichever surrogate key was current at the transaction date, so a 2022 sale joins to the Mumbai row and a 2024 sale joins to the Pune row - this is why Type 2 uses surrogate keys, not natural keys.",
            ],
            bullets: [
              "Grain statement: one sentence declaring what one fact row represents.",
              "Example grain: 'one row per product sold per transaction line per store per day'.",
              "Measures: additive (units, dollars), semi-additive (balance, headcount), non-additive (ratios, averages).",
              "SCD Type 1: overwrite - history lost, used for cosmetic fixes (typo in name).",
              "SCD Type 2: new row with effective/expiry dates and current flag - full history, dominant pattern.",
              "SCD Type 3: previous_value column - limited one-step history, used for before/after comparisons.",
              "Worked customer 1001: Mumbai 2021-2023, Pune 2023-now; Type 2 makes two rows with surrogate keys.",
              "Fact joins to the surrogate key current at the transaction date, not the natural key.",
            ],
            table: {
              caption: "Customer 1001 moving from Mumbai to Pune, tracked under each SCD type.",
              headers: ["SCD type", "Row(s) after move", "History kept", "Use case"],
              rows: [
                ["Type 1", "city = Pune (one row)", "None", "Correcting a typo"],
                ["Type 2", "Mumbai (eff 2021-01-01, exp 2023-05-15, current=0) + Pune (eff 2023-05-16, current=1)", "Full", "Customer/product changes"],
                ["Type 3", "current_city = Pune, previous_city = Mumbai, change_date = 2023-05-16", "One step", "Seasonal / before-after"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing an SCD type",
              caption:
                "Pick the SCD type by asking whether history matters and how many historical values to retain.",
              start: "Attribute changes on a dimension row",
              branches: [
                { label: "History does not matter", outcome: "SCD Type 1 - overwrite", good: true },
                { label: "History matters, retain all changes", outcome: "SCD Type 2 - new row with eff/exp dates", good: true },
                { label: "Only before/after needed", outcome: "SCD Type 3 - previous_value column", good: true },
                { label: "Unknown / mixed", outcome: "Pick Type 2 - safest default", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Always include the surrogate key point",
              body: "A common slip in SCD answers is to forget that Type 2 needs surrogate keys, not natural keys. The fact table joins to the surrogate current at the transaction date - a 2022 sale joins to the Mumbai row, a 2024 sale to the Pune row. Stating this point earns the mark that separates a complete answer from a partial one.",
            },
            keyTerms: [
              { term: "Grain statement", definition: "A single sentence declaring what one fact row represents; the foundation of dimensional modelling." },
              { term: "SCD Type 1", definition: "Overwrite the old value with the new; no history retained; used for cosmetic corrections." },
              { term: "SCD Type 2", definition: "Add a new row with effective and expiry dates and a current flag; full history retained; uses surrogate keys." },
              { term: "SCD Type 3", definition: "Add a previous_value column alongside the current value; limited one-step history for before/after comparison." },
              { term: "Surrogate key", definition: "An artificial dimension key (often an INT sequence) that lets Type 2 carry multiple rows per natural key." },
            ],
            examQuestions: [
              {
                q: "Define a grain statement and the three Slowly Changing Dimension types. Track a customer moving from Mumbai to Pune under each type and explain why Type 2 needs surrogate keys.",
                marks: 7,
                outline: [
                  "Define grain: 'one row per product sold per transaction line per store per day'.",
                  "SCD Type 1: overwrite - city becomes Pune, Mumbai history lost.",
                  "SCD Type 2: add new row - Mumbai (eff 2021-01-01, exp 2023-05-15, current=0) and Pune (eff 2023-05-16, current=1).",
                  "SCD Type 3: one row with current_city=Pune, previous_city=Mumbai, change_date=2023-05-16.",
                  "Type 2 preserves full history; Type 3 only one step; Type 1 none.",
                  "Type 2 uses surrogate keys so the fact joins to the row current at transaction date.",
                  "A 2022 sale joins to the Mumbai surrogate; a 2024 sale joins to the Pune surrogate.",
                ],
              },
              {
                q: "Write a grain statement for a sales fact table.",
                marks: 2,
              },
              {
                q: "When would you choose SCD Type 3 instead of Type 2?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "ETL process, staging and data marts",
            body: [
              "ETL - extract, transform, load - is the pipeline that feeds the warehouse and consumes 60-70% of a typical BI programme's effort. Extract pulls data from sources: full extracts (every row, every night) for small dimension tables, incremental extracts (only changed rows since the last run, identified by a last-modified timestamp or a CDC log) for large fact tables. A nightly POS extract might pull 60,000 new transactions using a watermark column txn_timestamp > last_run_time. Extract is mechanical but must respect source-system SLAs - never extract during the source's peak load window.",
              "Transform is where the work is. Cleansing fixes dirty data: trim whitespace, standardise case, parse free-text fields, deduplicate near-matches. Standardisation maps encodings: POS gender M/F, CRM 1/0, loyalty Male/Female all become the warehouse's canonical M/F. Derivation computes new columns: revenue = units * unit_price, profit = revenue - cost, quarter = ((month - 1) DIV 3) + 1. Aggregation rolls transactional data up to the fact grain. Lookup joins to dimension tables to resolve surrogate keys - the ETL must look up the surrogate key for the customer, product and store current at the transaction date to load the fact correctly.",
              "Load writes to the warehouse. Dimensions load first (so surrogate keys exist for the fact lookup), then facts. A common pattern uses a staging area - a landing zone of raw, untransformed extracts - so the transform logic is decoupled from the source systems and can be re-run if a load fails. Staging also provides an audit trail: the raw extract is preserved for a window (e.g. 7 days) so a transformation bug can be fixed and the load re-run without re-extracting from the source. Loading may use bulk insert (fast but locks the table) or partition switching (atomic, used for very large facts).",
              "A data mart is a subject-specific subset of the warehouse serving one business unit. A sales mart exposes sales_fact and conformed dimensions to the sales team; a marketing mart exposes campaign_fact and customer dimensions to marketing; a finance mart exposes general_ledger_fact to finance. Independent (non-conformed) marts are a Kimball anti-pattern because they cannot be queried together and drift apart; conformed marts share dim_date, dim_product and dim_customer so a query can be split across them. A worked ETL pipeline: nightly extract at 2 AM from POS, ERP and CRM into staging; transform from 2:30 AM resolving surrogate keys and standardising codes; load dimensions at 3 AM and facts at 4 AM; aggregate dashboards at 5 AM; available to users by 6 AM, with row-count and latency checks gating the publication.",
            ],
            bullets: [
              "ETL = extract, transform, load; consumes 60-70% of BI programme effort.",
              "Extract: full for small dims, incremental (watermark or CDC) for large facts.",
              "Transform: cleanse, standardise encodings, derive columns, aggregate, lookup surrogate keys.",
              "Load: dimensions first (so surrogates exist), then facts; bulk insert or partition switch.",
              "Staging area: raw extracts preserved 7+ days for audit and re-run on transform bug.",
              "Data mart: subject-specific subset; conformed marts share dim_date, dim_product, dim_customer.",
              "Independent (non-conformed) marts are a Kimball anti-pattern - they drift apart.",
              "Worked: extract 2 AM, transform 2:30, dim load 3 AM, fact load 4 AM, dashboards 5 AM, users 6 AM.",
            ],
            codeExample: {
              language: "python",
              caption: "A pandas-style transform resolving surrogate keys and standardising codes.",
              code:
                "import pandas as pd\n" +
                "# staging extract: raw rows from POS\n" +
                "pos = pd.DataFrame({\n" +
                "  'txn_id': [9001, 9002, 9003],\n" +
                "  'sku':    [1042, 1042, 2099],\n" +
                "  'qty':    [2, 1, 3],\n" +
                "  'price':  [25.0, 25.0, 80.0],\n" +
                "  'store_code': ['S01', 'S02', 'S01'],\n" +
                "})\n" +
                "# product mapping: POS sku -> warehouse surrogate product_key\n" +
                "pmap = pd.DataFrame({'sku':[1042,2099], 'product_key':[501,502]})\n" +
                "# store mapping: store_code -> warehouse surrogate store_key\n" +
                "smap = pd.DataFrame({'store_code':['S01','S02'], 'store_key':[11,12]})\n" +
                "# transform: join surrogate keys, derive dollars, standardise\n" +
                "t = pos.merge(pmap, on='sku').merge(smap, on='store_code')\n" +
                "t['dollars'] = t['qty'] * t['price']\n" +
                "# output the warehouse-ready fact rows\n" +
                "fact = t[['txn_id','product_key','store_key','qty','dollars']]\n" +
                "print(fact)\n" +
                "#   txn_id  product_key  store_key  qty  dollars\n" +
                "#0   9001          501         11    2     50.0\n" +
                "#1   9002          501         12    1     25.0\n" +
                "#2   9003          502         11    3    240.0",
            },
            diagram: {
              kind: "pipeline",
              title: "Nightly ETL pipeline with staging and mart load",
              caption:
                "Extract to staging, transform with surrogate lookups, load dimensions then facts, then publish dashboards.",
              stages: [
                { label: "Extract sources", note: "POS, ERP, CRM at 2 AM" },
                { label: "Land in staging", note: "raw extract preserved 7 days" },
                { label: "Transform", note: "cleanse, standardise, derive, lookup keys" },
                { label: "Load dims then facts", note: "dims 3 AM, facts 4 AM" },
                { label: "Aggregate dashboards", note: "5 AM; row-count checks gate publish" },
                { label: "Publish to marts", note: "users see data by 6 AM" },
              ],
            },
            callout: {
              type: "warning",
              title: "Dimensions load before facts - every night",
              body: "The most common ETL slip is loading facts before dimensions, which breaks the surrogate key lookup and produces unjoinable fact rows. Always load dimensions first - even if a dimension is unchanged, re-run the lookup so the fact can resolve its keys. The pattern is enforced by dependency ordering in the ETL scheduler; never bypass it for speed.",
            },
            keyTerms: [
              { term: "Extract", definition: "Pull data from sources - full extracts for small dims, incremental extracts (watermark or CDC) for large facts." },
              { term: "Transform", definition: "Cleanse, standardise encodings, derive columns, aggregate, and look up surrogate keys for the fact." },
              { term: "Staging area", definition: "A landing zone of raw extracts preserved for a window so a transform bug can be fixed and the load re-run." },
              { term: "Data mart", definition: "A subject-specific subset of the warehouse serving one business unit; conformed marts share dimensions." },
            ],
            examQuestions: [
              {
                q: "Explain the three phases of ETL with a worked nightly retail pipeline. Describe the role of the staging area and state why dimensions must be loaded before facts.",
                marks: 7,
                outline: [
                  "Define ETL: extract, transform, load - 60-70% of BI effort.",
                  "Extract: nightly at 2 AM from POS, ERP, CRM; full for small dims, incremental (watermark) for large facts.",
                  "Transform: cleanse, standardise codes, derive dollars, aggregate, lookup surrogate keys.",
                  "Load: dimensions first at 3 AM so surrogate keys exist; facts at 4 AM; dashboards at 5 AM; users by 6 AM.",
                  "Staging area: raw extract preserved 7+ days for audit and re-run on transform bug.",
                  "Dimensions before facts because the fact's surrogate key lookup depends on the dimension rows existing.",
                  "Data marts receive the conformed fact and dimensions so sales, marketing and finance can share dim_date.",
                ],
              },
              {
                q: "What is a data mart and what makes a set of marts 'conformed'?",
                marks: 2,
              },
              {
                q: "Give two reasons an ETL job uses a staging area rather than transforming directly from source to warehouse.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.6",
            title: "Metadata and data quality",
            body: [
              "Metadata is 'data about data' and is what makes a warehouse usable rather than a pile of tables. Three metadata types matter. Technical metadata describes the physical warehouse: table names, column types, indexes, foreign-key relationships, ETL job schedules, last-refresh timestamps. Business metadata describes meaning: the definition of 'revenue' (gross or net? before or after returns?), the unit (USD or INR?), the owner (finance or sales?), the calculation formula. Operational metadata describes runtime: when each ETL job ran, how many rows it loaded, how long it took, what errors it logged.",
              "Without business metadata the warehouse is uninterpretable. Two analysts querying 'revenue' from the same sales_fact may get different numbers because one filters returns and the other does not - a 5% gap that becomes a board-level argument. The fix is a business glossary: a published list of every measure with its exact definition, owner and lineage. Power BI and Tableau both surface this metadata through their semantic layers; the warehouse team's job is to keep the glossary authoritative and to enforce it by gating every new report against certified definitions.",
              "Data quality is measured on six dimensions. Accuracy: does the value match reality? (customer address is correct). Completeness: are required fields populated? (no null customer_key). Consistency: do related values agree? (sum of fact dollars equals ledger total). Timeliness: is the data current enough for its use? (warehouse loaded by 6 AM for morning dashboards). Validity: does the value conform to its domain? (gender in {M, F, O}). Uniqueness: is each entity represented once? (no duplicate customer rows). Each dimension has metrics: accuracy by sample audit, completeness by null percentage, consistency by reconciliation breaks, timeliness by SLA breach count, validity by constraint violation count, uniqueness by duplicate key count.",
              "A worked data quality regime runs nightly checks before the dashboard publishes. The steward defines 12 checks on sales_fact: customer_key not null (completeness), units >= 0 (validity), sum(dollars) within 1% of ledger (consistency), refresh completed by 6 AM (timeliness), gender in {M,F,O} (validity), customer_key unique per customer natural key (uniqueness). Each check is a SQL query returning pass/fail and a metric; if any check fails, the publish is gated and the steward is paged. A monthly scorecard reports the percentage of nights each check passed - 99.5% is the practical target, and a drop is investigated before any new release goes live.",
            ],
            bullets: [
              "Metadata = data about data; three types: technical, business, operational.",
              "Technical: table names, types, indexes, FK relationships, ETL schedules.",
              "Business: definitions (revenue gross/net?), units (USD/INR?), owners, formulas.",
              "Operational: job run times, row counts, durations, error logs.",
              "Business glossary prevents two analysts reporting different 'revenue' numbers from the same fact.",
              "Six data quality dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness.",
              "Worked: 12 nightly SQL checks gate the dashboard publish; monthly scorecard targets 99.5% pass rate.",
              "A data quality drop is investigated before any new release goes live - publish is gated.",
            ],
            table: {
              caption: "Six data quality dimensions with metrics and worked examples.",
              headers: ["Dimension", "Question", "Metric", "Worked example"],
              rows: [
                ["Accuracy", "Matches reality?", "Sample audit %", "Customer address verified against postal service"],
                ["Completeness", "Required fields filled?", "Null percentage", "customer_key not null on sales_fact"],
                ["Consistency", "Related values agree?", "Reconciliation break", "sum(dollars) within 1% of ledger"],
                ["Timeliness", "Current enough?", "SLA breach count", "Refresh completed by 6 AM"],
                ["Validity", "Conforms to domain?", "Constraint violations", "gender in {M, F, O}"],
                ["Uniqueness", "Entity once only?", "Duplicate key count", "customer_key unique per natural key"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Data quality dimensions: definition vs measurement",
              caption:
                "Quadrants by focus (definition vs runtime) and difficulty (cheap to measure vs needs audit).",
              axes: { x: "Cheap to measure (left) vs needs audit (right)", y: "Definition (top) vs runtime (bottom)" },
              quadrants: [
                { label: "Top-left: Validity, Completeness", note: "cheap SQL checks on every load" },
                { label: "Top-right: Accuracy, Uniqueness", note: "needs sample audit or fuzzy match" },
                { label: "Bottom-left: Timeliness", note: "runtime SLA breach counter" },
                { label: "Bottom-right: Consistency", note: "reconciliation break vs ledger" },
              ],
            },
            callout: {
              type: "tip",
              title: "Gate the dashboard publish on quality checks",
              body: "A practical pattern that earns marks: gate the dashboard publish on a fixed set of nightly SQL checks. If any check fails, the steward is paged and the old dashboard remains visible. State the six dimensions, the metric for each, and the gating pattern - this combination is the full-marks data-quality answer.",
            },
            keyTerms: [
              { term: "Metadata", definition: "Data about data; three types - technical (schema), business (definitions) and operational (job runtime)." },
              { term: "Business glossary", definition: "A published list of every measure with its exact definition, owner and lineage, authoritative for all reports." },
              { term: "Data quality dimensions", definition: "Accuracy, completeness, consistency, timeliness, validity and uniqueness - each with a measurable metric." },
              { term: "Publish gating", definition: "Pattern of blocking dashboard publication if any nightly quality check fails, so users always see validated data." },
            ],
            examQuestions: [
              {
                q: "Define metadata and its three types. State the six data quality dimensions with one metric each, and describe a nightly gating regime that prevents a bad dashboard from publishing.",
                marks: 7,
                outline: [
                  "Define metadata as data about data; three types: technical, business, operational.",
                  "Technical: tables, types, indexes, FKs, schedules.",
                  "Business: definitions, units, owners, formulas - kept in a glossary.",
                  "Operational: run times, row counts, durations, errors.",
                  "Six quality dimensions: accuracy, completeness, consistency, timeliness, validity, uniqueness.",
                  "Metric per dimension: sample audit, null %, reconciliation break, SLA breach, constraint count, duplicate count.",
                  "Gating regime: 12 nightly SQL checks; any failure pages the steward and blocks publish; monthly scorecard targets 99.5%.",
                ],
              },
              {
                q: "List the three types of metadata with one example each.",
                marks: 2,
              },
              {
                q: "Give the six data quality dimensions and a metric for each.",
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
      title: "OLAP and Data Mining for BI",
      summary:
        "Unit III is the analytical engine: the OLAP operations (roll-up, drill-down, slice, dice, pivot) on a worked sales cube, the MOLAP/ROLAP/HOLAP storage trade-offs, the data mining tasks (classification, clustering, association, regression), decision trees and k-means for segmentation, Apriori with support/confidence/lift on a 6-transaction basket, regression for forecasting, and the evaluation metrics that make models trustworthy for business use.",
      chapter: {
        number: "03",
        title: "OLAP and Data Mining for BI",
        intro:
          "Unit III turns the warehouse into decisions: the OLAP operations that navigate a multidimensional cube, the storage trade-offs between MOLAP, ROLAP and HOLAP, the four core data mining tasks, two specific algorithms (decision trees for churn and k-means for segmentation), association rule mining with Apriori, regression for forecasting, and the evaluation metrics that make each model trustworthy in a business setting.",
        inOneBreath:
          "OLAP navigates a cube with five operations - roll-up aggregates up a hierarchy, drill-down expands, slice fixes one dimension, dice subcubes on two or more, pivot rotates the axes; MOLAP stores the cube in a multidimensional array (fast, volume-limited), ROLAP queries the star schema in SQL (scales, slower), HOLAP keeps aggregates in MOLAP and detail in ROLAP; data mining has four tasks - classification (discrete label), clustering (no labels), association (co-occurrence), regression (continuous); a decision tree splits on tenure then monthly charges to predict churn; k-means iterates assign-and-update to converge on 2 customer segments; Apriori mines frequent itemsets with support, confidence and lift on a 6-transaction basket; linear regression forecasts sales from advertising as y = 34.5 + 1.95x; and models are evaluated by confusion matrix, RMSE, silhouette and lift curve before deployment.",
        sections: [
          {
            number: "3.1",
            title: "OLAP operations on a worked sales cube",
            body: [
              "An OLAP cube is a multidimensional array of measures indexed by dimensions. A worked sales cube has three dimensions - Time (Quarter x Month), Product (Category x Subcategory), Store (Region x City) - and one measure, Units Sold. The cube cell at (Q3, Electronics-Umbrellas, North-Mumbai) holds the units sold of umbrellas in Mumbai during Q3. OLAP operations navigate this cube to answer business questions without writing fresh SQL each time.",
              "Roll-up aggregates up a hierarchy: Month -> Quarter sums the monthly cells into quarterly cells, reducing the cube's resolution. Q3 umbrella sales in Mumbai becomes the sum of July, August and September. Drill-down is the inverse: Quarter -> Month expands each quarterly cell back into its three monthly cells. Slice fixes one dimension to a single value: Time = Q3 returns the 2-D plane of (Product, Store) cells for Q3 only - 'show me umbrella sales by store in Q3'. Dice selects a sub-cube by fixing two or more dimensions: Category = Electronics AND Region = North returns the cells where both conditions hold.",
              "Pivot (rotate) reorients the cube by swapping dimensions between rows and columns - 'show me product categories on rows and regions on columns instead of the reverse'. A drill-across (or drill-through) crosses fact tables: from sales cube to inventory cube to ask 'for the SKUs whose Q3 sales exceeded 1000 units, what is the current stock level'. A worked query sequence: start with a 3-D cube of Units Sold; roll-up Time from Month to Quarter (now 4 cells per year per Product x Store); slice Time = Q3 (now a 2-D Product x Store plane); dice Category = Electronics AND Region = North (a sub-plane); drill-down Store from Region to City (back to 3-D but with finer Store resolution); pivot to put Product on rows and City on columns - five operations to answer a focused question.",
              "The five operations compose: an analyst rarely runs just one. A retail category manager starts with the full cube, rolls up Time to Quarter, slices to Q3, dices to Electronics in the North region, drills down Store from Region to City, then pivots to read Product on rows. Each operation is a single click in an OLAP client (Excel PivotTable, Power BI matrix, Tableau cross-tab); the engine generates the SQL or multidimensional query behind the scenes. The conceptual model - one cube navigated by five operations - is what the exam expects the student to articulate.",
            ],
            bullets: [
              "OLAP cube: multidimensional array of measures indexed by dimensions.",
              "Worked cube: Time (Quarter x Month), Product (Category x Subcategory), Store (Region x City); measure = Units Sold.",
              "Roll-up: aggregate up a hierarchy (Month -> Quarter); reduces resolution.",
              "Drill-down: expand down a hierarchy (Quarter -> Month); the inverse of roll-up.",
              "Slice: fix one dimension to a value (Time = Q3); returns a 2-D plane.",
              "Dice: fix two or more dimensions (Category = Electronics AND Region = North); returns a sub-cube.",
              "Pivot: rotate the axes (swap Product and Store between rows and columns).",
              "Worked sequence: roll-up -> slice -> dice -> drill-down -> pivot composes to answer one focused question.",
            ],
            codeExample: {
              language: "sql",
              caption: "Five OLAP operations expressed as SQL GROUP BY changes.",
              code:
                "-- Start: full cube (Month x Category x City)\n" +
                "SELECT month, category, city, SUM(units) AS units\n" +
                "FROM sales_fact f\n" +
                "JOIN dim_date d ON d.date_key = f.date_key\n" +
                "JOIN dim_product p ON p.product_key = f.product_key\n" +
                "JOIN dim_store s ON s.store_key = f.store_key\n" +
                "GROUP BY month, category, city;\n" +
                "-- Roll-up Time: Month -> Quarter\n" +
                "SELECT quarter, category, city, SUM(units)\n" +
                "FROM ... GROUP BY quarter, category, city;\n" +
                "-- Slice Time = Q3\n" +
                "SELECT category, city, SUM(units)\n" +
                "FROM ... WHERE quarter = 3 GROUP BY category, city;\n" +
                "-- Dice: Category = Electronics AND Region = North\n" +
                "SELECT subcategory, city, SUM(units)\n" +
                "FROM ... WHERE quarter = 3 AND category = 'Electronics'\n" +
                "  AND s.region = 'North' GROUP BY subcategory, city;\n" +
                "-- Drill-down Store: Region -> City (already shown), Pivot via column swap\n" +
                "-- Pivot: rotate subcategory to columns, city to rows\n" +
                "SELECT city,\n" +
                "  SUM(CASE WHEN subcategory='Umbrellas' THEN units ELSE 0 END) AS umbrellas,\n" +
                "  SUM(CASE WHEN subcategory='Chargers' THEN units ELSE 0 END) AS chargers\n" +
                "FROM ... WHERE quarter = 3 AND s.region = 'North'\n" +
                "GROUP BY city;",
            },
            diagram: {
              kind: "layers",
              title: "Sales cube dimensions and the navigation operations",
              caption:
                "The cube has three dimensions; each operation reshapes which cells the analyst sees.",
              layers: [
                { label: "Time dimension (Year -> Quarter -> Month)", note: "roll-up / drill-down here" },
                { label: "Product dimension (Category -> Subcategory)", note: "slice / dice on Category" },
                { label: "Store dimension (Region -> State -> City)", note: "drill-down Region -> City" },
                { label: "Measure: SUM(units) at each cell", note: "pivot rotates axes" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always define each operation with a worked cell",
              body: "Definitions alone earn partial credit. For each of the five operations, write one sentence of definition and one worked cell example from the same retail cube: roll-up Month to Quarter, slice Time = Q3, dice Category = Electronics AND Region = North, drill-down Region to City, pivot Product and Store. The consistent worked cube is what lifts the answer to full marks.",
            },
            keyTerms: [
              { term: "OLAP cube", definition: "A multidimensional array of measures indexed by dimensions like Time, Product and Store." },
              { term: "Roll-up", definition: "Aggregate up a hierarchy (Month -> Quarter); reduces resolution of the cube." },
              { term: "Drill-down", definition: "Expand down a hierarchy (Quarter -> Month); the inverse of roll-up." },
              { term: "Slice and dice", definition: "Slice fixes one dimension to a value; dice fixes two or more, returning a sub-cube." },
              { term: "Pivot", definition: "Rotate the cube by swapping dimensions between rows and columns." },
            ],
            examQuestions: [
              {
                q: "Define an OLAP cube and explain the five operations (roll-up, drill-down, slice, dice, pivot) using a worked sales cube with Time, Product and Store dimensions. Show one composed sequence that answers a focused question.",
                marks: 7,
                outline: [
                  "Define cube: multidimensional array of measures indexed by Time (Quarter x Month), Product (Category x Subcategory), Store (Region x City).",
                  "Roll-up: aggregate Month -> Quarter; reduces resolution.",
                  "Drill-down: expand Quarter -> Month; inverse of roll-up.",
                  "Slice: fix Time = Q3; returns 2-D Product x Store plane.",
                  "Dice: fix Category = Electronics AND Region = North; returns sub-cube.",
                  "Pivot: swap Product and Store between rows and columns.",
                  "Composed sequence: roll-up to Quarter, slice Q3, dice Electronics/North, drill-down Region->City, pivot - answers 'which cities in the North sold the most electronics in Q3'.",
                ],
              },
              {
                q: "Distinguish between slice and dice with one example each.",
                marks: 2,
              },
              {
                q: "What does the pivot operation do to an OLAP cube?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "MOLAP, ROLAP and HOLAP storage",
            body: [
              "OLAP storage comes in three flavours depending on where the cube physically lives. MOLAP (multidimensional OLAP) stores the cube as a compressed multidimensional array in a proprietary file format - examples include SSAS Multidimensional, Essbase, Oracle OLAP. The array is pre-calculated and pre-aggregated at every dimension combination the designer expects users to query, so response is sub-second. The cost is a build time that grows with the number of dimension combinations (the 'cube explosion'), so MOLAP is best for cubes with moderate dimensionality (say, up to 10 dimensions and 100 million cells).",
              "ROLAP (relational OLAP) stores the cube as the star schema in a relational database and translates each OLAP operation into SQL at query time. No pre-aggregation, no explosion - the cube scales to billions of rows. The cost is query latency: a complex drill-down may run a multi-join SQL query for 5-30 seconds. Modern columnar databases (Snowflake, BigQuery, Redshift) and materialised aggregate tables narrow the gap, and a ROLAP engine can drill-through to the finest transactional detail, which MOLAP cannot - a key advantage for audit and root-cause analysis.",
              "HOLAP (hybrid OLAP) splits the cube: aggregates live in MOLAP for speed, detailed data stays in ROLAP for scale. A typical HOLAP layout pre-computes the top three levels of each dimension (Year -> Quarter -> Month for Time, Category -> Subcategory for Product) in MOLAP for instant dashboard response, and leaves leaf-level data in ROLAP so a drill-through to individual transactions still works. HOLAP gives the best of both worlds at the cost of a more complex engine that must decide at query time which store to consult.",
              "A worked selection rule: pick MOLAP when the cube is moderate-sized, query latency must be sub-second, and drill-through to detail is not required - typical for an executive scorecard with 5 dimensions. Pick ROLAP when the data volume is in the hundreds of millions of rows, dimensions are many (8+), or drill-through is essential - typical for operational analytics on transaction-level data. Pick HOLAP when both matter - typical for a large retail DW where executives need instant KPIs and analysts need drill-through to transactions. SSAS supports all three modes on the same model, which is why Microsoft-centric shops frequently use HOLAP.",
            ],
            bullets: [
              "MOLAP: cube stored as multidimensional array (SSAS Multidim, Essbase); sub-second; cube explosion risk.",
              "ROLAP: cube stored as star schema in relational DB; SQL at query time; scales to billions; seconds latency.",
              "HOLAP: aggregates in MOLAP, detail in ROLAP; best of both at the cost of engine complexity.",
              "MOLAP best for moderate cubes (up to ~10 dims, ~100M cells) needing sub-second response.",
              "ROLAP best for huge volumes (100M+ rows) with drill-through requirements.",
              "HOLAP best when both KPI speed and drill-through matter (large retail DW).",
              "SSAS supports all three modes on the same model - common in Microsoft shops.",
              "Cube explosion: number of cells grows as product of dimension cardinalities; MOLAP's main limit.",
            ],
            table: {
              caption: "MOLAP vs ROLAP vs HOLAP across selection dimensions.",
              headers: ["Dimension", "MOLAP", "ROLAP", "HOLAP"],
              rows: [
                ["Storage", "Multidim array", "Star schema (SQL)", "Mixed (agg MOLAP, detail ROLAP)"],
                ["Build time", "High (pre-calc)", "None", "Partial"],
                ["Query latency", "Sub-second", "Seconds", "Sub-second agg, sec detail"],
                ["Data volume", "Moderate", "Billions", "Large"],
                ["Drill-through", "No", "Yes", "Yes"],
                ["Typical use", "Executive scorecard", "Operational analytics", "Large retail DW"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing MOLAP, ROLAP or HOLAP",
              caption:
                "Pick storage by asking three questions: sub-second needed? drill-through needed? volume huge?",
              start: "Designing an OLAP cube",
              branches: [
                { label: "Sub-second, no drill-through, moderate size", outcome: "MOLAP - pre-calc array", good: true },
                { label: "Drill-through, huge volume, latency OK", outcome: "ROLAP - SQL on star schema", good: true },
                { label: "Both sub-second KPIs and drill-through", outcome: "HOLAP - aggregates in MOLAP, detail in ROLAP", good: true },
                { label: "Microsoft shop, one model, multiple modes", outcome: "SSAS HOLAP on same model", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "HOLAP is the safe enterprise answer",
              body: "When asked 'which storage to choose' in an enterprise context, HOLAP is often the safe answer: aggregates in MOLAP for instant dashboards, detail in ROLAP for drill-through. State the trade-off explicitly - speed for aggregates, scale for detail, complexity for the engine - and you have the full-marks answer.",
            },
            keyTerms: [
              { term: "MOLAP", definition: "Multidimensional OLAP: cube stored as a compressed multidimensional array; sub-second but volume-limited." },
              { term: "ROLAP", definition: "Relational OLAP: cube stored as star schema in a relational DB, queried by SQL at runtime; scales, slower." },
              { term: "HOLAP", definition: "Hybrid OLAP: aggregates in MOLAP for speed, detail in ROLAP for scale and drill-through." },
              { term: "Cube explosion", definition: "The exponential growth in pre-calculated cells as dimension cardinalities multiply; MOLAP's main limit." },
            ],
            examQuestions: [
              {
                q: "Compare MOLAP, ROLAP and HOLAP on six dimensions and state a worked selection rule for each. Explain cube explosion and how HOLAP mitigates the trade-off.",
                marks: 7,
                outline: [
                  "MOLAP: cube stored as multidimensional array; pre-calculated; sub-second; volume-limited by cube explosion.",
                  "ROLAP: cube stored as star schema; SQL at query time; scales to billions; seconds latency.",
                  "HOLAP: aggregates in MOLAP, detail in ROLAP; sub-second for KPIs, drill-through for analysts.",
                  "Compare on storage, build time, latency, volume, drill-through, typical use.",
                  "MOLAP for executive scorecard (5 dims, sub-second, no drill-through).",
                  "ROLAP for operational analytics (100M+ rows, drill-through essential).",
                  "HOLAP for large retail DW (both KPI speed and drill-through); cube explosion mitigated by leaving detail in ROLAP.",
                ],
              },
              {
                q: "What is cube explosion and which storage type does it limit?",
                marks: 2,
              },
              {
                q: "Give one advantage of ROLAP over MOLAP and one advantage of MOLAP over ROLAP.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Data mining tasks - classification, clustering, association, regression",
            body: [
              "Data mining is the discovery of patterns in data using methods from statistics and machine learning. Four core tasks cover most business applications. Classification assigns each row to one of a known set of discrete labels using a model trained on labelled examples - churn (yes/no), fraud (legit/suspect), email (spam/not-spam). Clustering groups rows into clusters based on similarity without prior labels - customer segments, product affinities. Association finds rules that describe co-occurrence - 'customers who buy bread also buy milk'. Regression predicts a continuous numeric value - next-quarter sales, lifetime value.",
              "Each task answers a different business question. Classification answers 'which customers will churn next month?' - a discrete yes/no prediction that drives retention campaigns. Clustering answers 'what are the natural customer segments in our base?' - useful for targeted marketing when no segmentation exists. Association answers 'which products co-purchase often enough to merchandise together?' - the classic market-basket analysis. Regression answers 'what will next quarter's revenue be?' - forecasting used for budgeting, capacity planning and inventory replenishment.",
              "Two further tasks deserve mention. Anomaly detection finds rows that differ significantly from the norm - fraud, sensor faults, network intrusions. Sequence mining finds ordered patterns - 'customers who buy a stroller often buy a car seat within 30 days'. These overlap with classification (anomaly detection can be modelled as a one-class classification) and association (sequence mining extends association with order). The four core tasks are the exam answer; the extras are mentioned for completeness.",
              "Each task is paired with a representative algorithm and evaluation metric. Classification: decision tree or logistic regression, evaluated by accuracy, precision, recall and the confusion matrix. Clustering: k-means or hierarchical, evaluated by silhouette and within-cluster sum of squares. Association: Apriori or FP-growth, evaluated by support, confidence and lift. Regression: linear regression or gradient boosting, evaluated by RMSE and MAE. The pairing of task and metric is itself a 2-mark answer - state the task, name the algorithm, name the metric. The next sections drill into the worked algorithms.",
            ],
            bullets: [
              "Four core tasks: classification, clustering, association, regression.",
              "Classification: discrete label (churn yes/no); algorithms: decision tree, logistic regression.",
              "Clustering: groups without labels (customer segments); algorithms: k-means, hierarchical.",
              "Association: co-occurrence rules (bread -> milk); algorithms: Apriori, FP-growth.",
              "Regression: continuous value (next-quarter sales); algorithms: linear, gradient boosting.",
              "Two extras: anomaly detection (fraud) and sequence mining (stroller then car seat).",
              "Task-metric pairing: classification -> confusion matrix; clustering -> silhouette; association -> lift; regression -> RMSE.",
              "Each task answers a different business question - never conflate them in the exam.",
            ],
            table: {
              caption: "Data mining tasks with question, algorithm and evaluation metric.",
              headers: ["Task", "Business question", "Algorithm", "Evaluation metric"],
              rows: [
                ["Classification", "Will this customer churn?", "Decision tree", "Confusion matrix, accuracy"],
                ["Clustering", "What are the natural segments?", "k-means", "Silhouette, WSS"],
                ["Association", "Which products co-purchase?", "Apriori", "Support, confidence, lift"],
                ["Regression", "What is next-quarter revenue?", "Linear regression", "RMSE, MAE"],
                ["Anomaly", "Is this transaction fraudulent?", "Isolation forest", "Precision at k"],
                ["Sequence", "What comes after a stroller?", "PrefixSpan", "Support over ordered windows"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Data mining tasks by label availability and output type",
              caption:
                "Quadrants by output (discrete vs continuous) and supervision (labelled vs unlabelled).",
              axes: { x: "Output: discrete (left) vs continuous (right)", y: "Supervised (top) vs unsupervised (bottom)" },
              quadrants: [
                { label: "Top-left: Classification", note: "labelled, discrete - churn, fraud" },
                { label: "Top-right: Regression", note: "labelled, continuous - sales forecast" },
                { label: "Bottom-left: Clustering", note: "unlabelled, discrete - customer segments" },
                { label: "Bottom-right: Anomaly detection", note: "unlabelled, continuous - fraud outliers" },
              ],
            },
            callout: {
              type: "exam",
              title: "Pair each task with its algorithm and metric",
              body: "A 7-mark data-mining-overview question rewards the task-algorithm-metric triple for each of the four core tasks. State the task, name one algorithm (decision tree for classification, k-means for clustering, Apriori for association, linear regression for regression), name the evaluation metric (confusion matrix, silhouette, lift, RMSE). The pairs are the marks.",
            },
            keyTerms: [
              { term: "Classification", definition: "Supervised task assigning rows to discrete labels using a model trained on labelled examples." },
              { term: "Clustering", definition: "Unsupervised task grouping rows by similarity without prior labels; used for segmentation." },
              { term: "Association", definition: "Task finding co-occurrence rules between items, e.g. customers who buy bread also buy milk." },
              { term: "Regression", definition: "Supervised task predicting a continuous numeric value, e.g. next-quarter sales forecast." },
            ],
            examQuestions: [
              {
                q: "Define data mining and its four core tasks with a business question, algorithm and evaluation metric for each. Place the four tasks on a 2x2 matrix of supervision and output type.",
                marks: 7,
                outline: [
                  "Define data mining: discovery of patterns in data using statistics and machine learning.",
                  "Classification: 'will the customer churn?' - decision tree - confusion matrix and accuracy.",
                  "Clustering: 'what are the natural segments?' - k-means - silhouette and WSS.",
                  "Association: 'which products co-purchase?' - Apriori - support, confidence, lift.",
                  "Regression: 'what is next-quarter revenue?' - linear regression - RMSE and MAE.",
                  "Matrix axes: supervision (supervised vs unsupervised) and output (discrete vs continuous).",
                  "Quadrants: classification (top-left), regression (top-right), clustering (bottom-left), anomaly (bottom-right).",
                ],
              },
              {
                q: "Distinguish between classification and clustering with one example each.",
                marks: 2,
              },
              {
                q: "Name one evaluation metric for regression and one for association rules.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Decision trees for churn and k-means for segmentation",
            body: [
              "A decision tree is a flowchart-like model that splits data on attribute tests to predict a label. For churn prediction on a telecom customer base, the tree might first split on 'tenure < 12 months': customers with short tenure go left (high churn risk), long tenure go right (low risk). The left branch then splits on 'monthly charges > 800': high charges plus short tenure is the highest-risk leaf, where 65% churn; lower charges plus short tenure is the medium-risk leaf at 30%. The right branch splits on 'contract type': month-to-month contracts churn at 18%, annual contracts at 4%. Each leaf is a labelled probability, and the path to it is a human-readable rule.",
              "The tree is built by recursive partitioning: at each node, choose the attribute and split that most reduces impurity (measured by Gini index or entropy). Gini = 1 - sum(p_i^2); a pure node (all one class) has Gini = 0, a 50-50 node has Gini = 0.5. The algorithm picks the split with the largest Gini drop, recurses on each child, and stops at a depth limit or a minimum-leaf-size limit to avoid overfitting. The result is interpretable - 'short tenure and high monthly charges' is a rule a marketing team can act on with a retention offer, which is why decision trees are popular in BI where explainability matters.",
              "k-means clustering segments customers into k groups by minimising the within-cluster sum of squared distances to centroids. The algorithm: (1) pick k initial centroids (random or k-means++); (2) assign each point to the nearest centroid by Euclidean distance; (3) recompute each centroid as the mean of its assigned points; (4) repeat steps 2-3 until assignments stop changing (convergence). For customer segmentation on (recency, monthly_spend), k=2 starts with centroids c1=(10, 2000) and c2=(90, 200).",
              "A worked 2-cluster iteration makes k-means concrete. Four customers: A=(20, 1800), B=(30, 1700), C=(80, 300), D=(100, 250). Initial centroids c1=(10, 2000), c2=(90, 200). Distances: A to c1 ~ 283, to c2 ~ 1615 -> assign A to c1; B to c1 ~ 306, to c2 ~ 1418 -> assign B to c1; C to c1 ~ 1715, to c2 ~ 141 -> assign C to c2; D to c1 ~ 1942, to c2 ~ 141 -> assign D to c2. Update centroids: c1 = mean(A, B) = (25, 1750); c2 = mean(C, D) = (90, 275). Second iteration: A to c1 ~ 50, to c2 ~ 1480 -> c1; B to c1 ~ 50, to c2 ~ 1447 -> c1; C to c1 ~ 1457, to c2 ~ 95 -> c2; D to c1 ~ 1673, to c2 ~ 95 -> c2. No reassignment - converged. The two segments are 'recent high-spenders' (A, B) and 'older low-spenders' (C, D), a usable marketing segmentation.",
            ],
            bullets: [
              "Decision tree: flowchart of attribute tests leading to labelled leaves.",
              "Churn tree splits: tenure < 12 (high risk), then monthly charges > 800 (65% churn leaf).",
              "Gini impurity = 1 - sum(p_i^2); the split with the largest Gini drop is chosen.",
              "Trees are interpretable - 'short tenure and high charges' is a rule marketing can act on.",
              "k-means: pick k centroids, assign points to nearest, update centroids, iterate to convergence.",
              "Worked: customers A,B,C,D on (recency, spend); 2 iterations converge to 'recent high-spend' and 'older low-spend'.",
              "Choose k by the elbow method or silhouette; random seeds can trap in local minima - try multiple.",
              "k-means++ seeding spreads initial centroids, reducing local-minima risk.",
            ],
            codeExample: {
              language: "python",
              caption: "k-means on four customers with two iterations shown (Python).",
              code:
                "import math\n" +
                "# customers: (recency_days, monthly_spend)\n" +
                "pts = {'A':(20,1800),'B':(30,1700),'C':(80,300),'D':(100,250)}\n" +
                "c1 = (10, 2000)   # initial centroid 1\n" +
                "c2 = (90, 200)    # initial centroid 2\n" +
                "def dist(p, c):\n" +
                "  return math.sqrt((p[0]-c[0])**2 + (p[1]-c[1])**2)\n" +
                "# Iteration 1: assign each point to nearest centroid\n" +
                "for it in (1, 2):\n" +
                "  assign = {k: (1 if dist(p,c1) < dist(p,c2) else 2) for k,p in pts.items()}\n" +
                "  print('iter', it, 'assign:', assign)\n" +
                "  # update centroids = mean of assigned points\n" +
                "  g1 = [p for k,p in pts.items() if assign[k]==1]\n" +
                "  g2 = [p for k,p in pts.items() if assign[k]==2]\n" +
                "  c1 = (sum(p[0] for p in g1)/len(g1), sum(p[1] for p in g1)/len(g1))\n" +
                "  c2 = (sum(p[0] for p in g2)/len(g2), sum(p[1] for p in g2)/len(g2))\n" +
                "  print('  c1=', c1, 'c2=', c2)\n" +
                "# iter 1 assign: A->1, B->1, C->2, D->2; c1=(25.0,1750.0), c2=(90.0,275.0)\n" +
                "# iter 2 assign unchanged -> converged",
            },
            diagram: {
              kind: "cycle",
              title: "k-means iteration loop",
              caption:
                "Assign-and-update cycles until no point moves - then the clusters are stable.",
              steps: [
                { label: "Pick k initial centroids", note: "random or k-means++" },
                { label: "Assign each point to nearest centroid", note: "Euclidean distance" },
                { label: "Update centroids to mean of assigned points", note: "minimises WSS" },
                { label: "Check for reassignments", note: "if none, converged; else loop" },
              ],
            },
            callout: {
              type: "tip",
              title: "Show both iterations in the k-means worked answer",
              body: "k-means exam questions reward a full worked iteration. Show the four points, the two initial centroids, the first assignment, the updated centroids, the second assignment, and the convergence check. A single-iteration answer loses marks for not demonstrating the loop. The numbers must be consistent - recompute distances before writing.",
            },
            keyTerms: [
              { term: "Decision tree", definition: "A flowchart-like model that splits data on attribute tests to predict a label; built by recursive partitioning on Gini or entropy." },
              { term: "Gini index", definition: "Impurity measure = 1 - sum(p_i^2); a pure node has Gini 0, a 50-50 node has Gini 0.5." },
              { term: "k-means", definition: "Clustering algorithm that assigns points to the nearest of k centroids, then updates centroids as means, iterating to convergence." },
              { term: "Within-cluster sum of squares (WSS)", definition: "Sum of squared distances from each point to its centroid; k-means minimises this." },
            ],
            examQuestions: [
              {
                q: "Explain decision tree construction for churn prediction with a worked tree on tenure and monthly charges. Then run two iterations of k-means on four customers with (recency, monthly_spend) features and k=2, showing centroids and assignments.",
                marks: 7,
                outline: [
                  "Define decision tree: recursive partitioning on Gini or entropy impurity.",
                  "Worked churn tree: split on tenure < 12 (high-risk left); then monthly charges > 800 (65% churn leaf).",
                  "Gini = 1 - sum(p_i^2); choose the split with the largest Gini drop; stop at depth or min-leaf-size.",
                  "k-means: pick k centroids, assign by Euclidean distance, update as mean, iterate to convergence.",
                  "Customers A=(20,1800), B=(30,1700), C=(80,300), D=(100,250); initial c1=(10,2000), c2=(90,200).",
                  "Iter 1: A,B -> c1; C,D -> c2; update c1=(25,1750), c2=(90,275).",
                  "Iter 2: no reassignment - converged; segments 'recent high-spend' (A,B) and 'older low-spend' (C,D).",
                ],
              },
              {
                q: "What is the Gini index and how is it used in tree building?",
                marks: 2,
              },
              {
                q: "State the four steps of one k-means iteration.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Association rules with Apriori - support, confidence, lift",
            body: [
              "Association rule mining finds rules of the form X -> Y describing co-occurrence in transactional data - the classic market-basket analysis. Each rule has three metrics. Support of an itemset is the fraction of transactions containing it: support(bread, milk) = count(bread and milk) / total transactions. Confidence of X -> Y is the conditional probability that Y is bought given X: support(X, Y) / support(X). Lift is the ratio of observed co-occurrence to expected co-occurrence under independence: support(X, Y) / (support(X) * support(Y)). Lift > 1 means positive correlation, lift = 1 means independence, lift < 1 means negative.",
              "Apriori is the algorithm that mines frequent itemsets and extracts rules. It uses the downward-closure property: if an itemset is frequent, all its subsets are frequent; equivalently, if a subset is infrequent, all supersets are infrequent. The algorithm: (1) count 1-itemsets and keep those above min_support; (2) generate candidate 2-itemsets by joining frequent 1-itemsets; (3) count candidates and keep frequent ones; (4) repeat for k=3, 4, ... until no frequent itemsets remain; (5) from each frequent itemset, generate rules whose confidence exceeds min_confidence. The downward-closure property prunes the search dramatically - candidate generation only happens from already-frequent subsets.",
              "A worked 6-transaction basket makes the metrics concrete. Transactions: T1 = {bread, milk}; T2 = {bread, milk, butter}; T3 = {bread, milk}; T4 = {bread, milk}; T5 = {cola, chips}; T6 = {cola, chips}. Total = 6 transactions. Counts: bread = 4, milk = 4, butter = 1, cola = 2, chips = 2. With min_support = 50% (3 of 6), only bread and milk pass as 1-itemsets (4/6 = 67% each); butter (1/6), cola (2/6) and chips (2/6) all fall below.",
              "Joining frequent 1-itemsets gives candidate {bread, milk}. Count = 4 (T1, T2, T3, T4) = 4/6 = 67%, which passes. No further candidates (butter, cola, chips were infrequent so they cannot be in any frequent 2-itemset by downward closure). From {bread, milk}: rule bread -> milk has confidence = support(bread, milk) / support(bread) = (4/6) / (4/6) = 1.0 = 100%. Rule milk -> bread has the same confidence = 100%. Lift(bread -> milk) = support(bread, milk) / (support(bread) * support(milk)) = (4/6) / ((4/6) * (4/6)) = (4/6) / (16/36) = 0.667 / 0.444 = 1.5. Lift of 1.5 means buying bread makes the purchase of milk 1.5 times more likely than baseline - a strong positive association worth merchandising together.",
            ],
            bullets: [
              "Rule X -> Y: support = count(X,Y)/N; confidence = support(X,Y)/support(X); lift = support(X,Y)/(support(X)*support(Y)).",
              "Lift > 1 positive correlation; lift = 1 independence; lift < 1 negative.",
              "Apriori uses downward closure: if a subset is infrequent, all supersets are infrequent.",
              "Algorithm: count 1-itemsets, generate candidate k-itemsets from frequent (k-1)-itemsets, count, repeat.",
              "Worked 6 transactions: T1-T4 = {bread, milk} (T2 adds butter); T5-T6 = {cola, chips}.",
              "min_support = 50% (3/6): only bread and milk pass; {bread, milk} = 4/6 = 67%.",
              "confidence(bread -> milk) = 100%; confidence(milk -> bread) = 100%.",
              "lift(bread -> milk) = (4/6) / ((4/6)*(4/6)) = 1.5 - strong positive, merchandise together.",
            ],
            codeExample: {
              language: "python",
              caption: "Apriori metrics on the 6-transaction basket (Python).",
              code:
                "# 6 transactions\n" +
                "txns = [\n" +
                "  ['bread','milk'],\n" +
                "  ['bread','milk','butter'],\n" +
                "  ['bread','milk'],\n" +
                "  ['bread','milk'],\n" +
                "  ['cola','chips'],\n" +
                "  ['cola','chips'],\n" +
                "]\n" +
                "N = len(txns)\n" +
                "def supp(items):\n" +
                "  c = sum(1 for t in txns if set(items).issubset(set(t)))\n" +
                "  return c / N\n" +
                "# 1-itemsets with min_support = 0.5\n" +
                "for it in ['bread','milk','butter','cola','chips']:\n" +
                "  print(it, 'support=', round(supp([it]),3))\n" +
                "# bread 0.667, milk 0.667, butter 0.167, cola 0.333, chips 0.333\n" +
                "# only bread & milk pass -> candidate {bread, milk}\n" +
                "sbm = supp(['bread','milk'])\n" +
                "print('{bread,milk} support=', round(sbm,3))   # 0.667\n" +
                "print('conf(bread->milk)=', round(sbm/supp(['bread']),3))   # 1.0\n" +
                "print('conf(milk->bread)=', round(sbm/supp(['milk']),3))   # 1.0\n" +
                "lift = sbm / (supp(['bread']) * supp(['milk']))\n" +
                "print('lift(bread->milk)=', round(lift,3))    # 1.5 -> strong positive",
            },
            diagram: {
              kind: "flow",
              title: "Apriori workflow - count, prune, join, repeat",
              caption:
                "Each level only generates candidates from the previous level's frequent itemsets.",
              steps: [
                { label: "Count 1-itemsets", note: "keep those above min_support" },
                { label: "Join frequent (k-1)-itemsets", note: "generate k-itemset candidates" },
                { label: "Count candidates, prune by downward closure", note: "drop any with infrequent subset" },
                { label: "Repeat for k+1", note: "until no frequent itemsets remain" },
                { label: "Generate rules above min_confidence", note: "compute lift for each" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always compute lift on the same numbers",
              body: "The most common Apriori slip is quoting support and confidence but computing lift on different transactions. Use one basket throughout: support(bread, milk) = 4/6, support(bread) = 4/6, support(milk) = 4/6, lift = (4/6) / ((4/6)*(4/6)) = 1.5. State the interpretation explicitly - 'bread makes milk 1.5x more likely than baseline, a strong positive association worth merchandising together'.",
            },
            keyTerms: [
              { term: "Support", definition: "Fraction of transactions containing an itemset; count(itemset) / total transactions." },
              { term: "Confidence", definition: "Conditional probability of Y given X: support(X, Y) / support(X)." },
              { term: "Lift", definition: "Ratio of observed co-occurrence to independence: support(X, Y) / (support(X) * support(Y)); > 1 means positive correlation." },
              { term: "Downward closure", definition: "Apriori property: if an itemset is frequent, all its subsets are frequent, so candidate generation prunes aggressively." },
            ],
            examQuestions: [
              {
                q: "Define support, confidence and lift for association rules. Run the Apriori algorithm on a 6-transaction basket with min_support 50% and compute confidence and lift for the rule 'bread -> milk'. State the downward closure property and how it prunes the search.",
                marks: 7,
                outline: [
                  "Define support(X) = count(X)/N; confidence(X->Y) = support(X,Y)/support(X); lift = support(X,Y)/(support(X)*support(Y)).",
                  "Downward closure: if a subset is infrequent, all supersets are infrequent.",
                  "Worked basket: T1-T4 contain {bread, milk} (T2 adds butter); T5-T6 = {cola, chips}.",
                  "1-itemsets: bread 4/6 = 67%, milk 4/6 = 67% pass; butter, cola, chips all below 50%.",
                  "Candidate {bread, milk}: support = 4/6 = 67% passes.",
                  "confidence(bread -> milk) = (4/6)/(4/6) = 100%; confidence(milk -> bread) = 100%.",
                  "lift = (4/6) / ((4/6)*(4/6)) = 1.5 - strong positive, merchandise together.",
                ],
              },
              {
                q: "What does a lift value of 1.0 indicate for an association rule?",
                marks: 2,
              },
              {
                q: "State the downward closure property and how Apriori uses it.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.6",
            title: "Regression for forecasting and model evaluation",
            body: [
              "Regression predicts a continuous numeric value from one or more inputs. Simple linear regression fits y = a + bx to a set of (x, y) pairs by the least-squares method: choose a and b to minimise the sum of squared residuals (y_i - (a + b*x_i))^2. The closed-form solution is b = cov(x, y) / var(x) and a = mean(y) - b * mean(x). For multiple inputs (multiple regression) the same least-squares principle extends to a vector of coefficients; the BI context usually needs simple or two-variable regression for forecasting.",
              "A worked forecasting example: predict next-quarter sales from advertising spend. Five months of data: (adv=10, sales=50), (20, 75), (30, 100), (40, 110), (50, 130). Mean_x = 30, mean_y = 93. cov(x, y) = sum((x_i - mean_x)(y_i - mean_y))/n = ((-20)(-43) + (-10)(-18) + 0*7 + 10*17 + 20*37)/5 = (860 + 180 + 0 + 170 + 740)/5 = 1950/5 = 390. var(x) = sum((x_i - mean_x)^2)/n = (400 + 100 + 0 + 100 + 400)/5 = 1000/5 = 200. b = 390/200 = 1.95. a = 93 - 1.95*30 = 93 - 58.5 = 34.5. So sales = 34.5 + 1.95 * adv. Forecast for adv = 60: sales = 34.5 + 1.95*60 = 34.5 + 117 = 151.5 - the basis for next quarter's revenue plan if advertising stays at 60.",
              "Model evaluation depends on task type. For regression, RMSE (root mean squared error) and MAE (mean absolute error) measure typical prediction error in the units of y; RMSE penalises large errors more, MAE is more robust to outliers. R-squared measures the fraction of variance in y explained by the model (0 to 1, higher is better). For classification, the confusion matrix counts true positives, false positives, true negatives and false negatives; from it derive accuracy = (TP + TN)/(TP + TN + FP + FN), precision = TP/(TP + FP), recall = TP/(TP + FN), and the F1 score as their harmonic mean. For clustering, the silhouette score measures how similar a point is to its own cluster versus the nearest other cluster (-1 to 1, higher is better). For association, lift (computed in section 3.5) is the metric.",
              "Cross-validation protects against overfitting. Split the data into k folds, train on k-1 and test on the held-out fold, repeat k times and average the metric. The 5-fold or 10-fold cross-validation gives a more honest estimate of model performance than a single train/test split, especially with smaller datasets. In BI, where models drive decisions like retention campaigns or revenue forecasts, an overfitted model deployed to production silently degrades - so cross-validated metrics and a holdout test set are the discipline that earns business trust. The exam answer: state the model, name the metric, describe cross-validation, deploy only when the held-out metric meets the threshold.",
            ],
            bullets: [
              "Linear regression: y = a + bx with b = cov(x,y)/var(x), a = mean(y) - b*mean(x).",
              "Least-squares minimises sum of squared residuals (y_i - (a + b*x_i))^2.",
              "Worked: 5 months (adv, sales); cov = 390, var = 200, b = 1.95, a = 34.5; forecast adv=60 -> 151.5.",
              "Regression metrics: RMSE, MAE, R-squared (fraction of variance explained).",
              "Classification metrics: confusion matrix -> accuracy, precision, recall, F1.",
              "Clustering metric: silhouette (-1 to 1, higher better).",
              "Association metric: lift (Section 3.5).",
              "Cross-validation: k-fold (typically 5 or 10) gives honest held-out performance estimate.",
            ],
            codeExample: {
              language: "python",
              caption: "Linear regression on 5 months of advertising vs sales (Python).",
              code:
                "# 5 months: (advertising, sales)\n" +
                "data = [(10,50),(20,75),(30,100),(40,110),(50,130)]\n" +
                "n = len(data)\n" +
                "mx = sum(x for x,_ in data) / n   # mean_x = 30\n" +
                "my = sum(y for _,y in data) / n   # mean_y = 93\n" +
                "cov = sum((x-mx)*(y-my) for x,y in data) / n  # 390\n" +
                "varx = sum((x-mx)**2 for x,_ in data) / n     # 200\n" +
                "b = cov / varx                    # 1.95\n" +
                "a = my - b * mx                   # 34.5\n" +
                "print('a=%.2f b=%.2f' % (a, b))    # a=34.50 b=1.95\n" +
                "# forecast next quarter at advertising = 60\n" +
                "adv = 60\n" +
                "print('forecast sales = %.1f' % (a + b*adv))  # 151.5\n" +
                "# RMSE on the training data\n" +
                "import math\n" +
                "rmse = math.sqrt(sum((y - (a + b*x))**2 for x,y in data) / n)\n" +
                "print('train RMSE = %.2f' % rmse)             # ~3.46",
            },
            diagram: {
              kind: "flow",
              title: "Regression model-building workflow",
              caption:
                "Train on historical data, evaluate with metrics, cross-validate, deploy only when the threshold is met.",
              steps: [
                { label: "Collect labelled (x, y) data", note: "historical advertising vs sales" },
                { label: "Fit y = a + bx by least squares", note: "b = cov(x,y)/var(x); a = mean(y) - b*mean(x)" },
                { label: "Evaluate RMSE, MAE, R-squared", note: "in units of y" },
                { label: "Cross-validate (5-fold or 10-fold)", note: "honest held-out estimate" },
                { label: "Deploy if metric meets threshold", note: "else iterate features or model" },
              ],
            },
            callout: {
              type: "warning",
              title: "Cross-validate before deploying",
              body: "A regression model trained on 5 data points can fit the training data perfectly and fail on new data - the overfitting trap. Always state 5-fold or 10-fold cross-validation as the discipline that gives an honest held-out metric, and deploy only when that metric meets the business threshold. Without cross-validation, an overfitted forecast silently degrades and loses business trust.",
            },
            keyTerms: [
              { term: "Linear regression", definition: "A model y = a + bx fitted by least squares; b = cov(x,y)/var(x), a = mean(y) - b*mean(x)." },
              { term: "RMSE", definition: "Root mean squared error: sqrt(mean((y_pred - y_actual)^2)); penalises large errors more than MAE." },
              { term: "Confusion matrix", definition: "A 2x2 table of true positives, false positives, true negatives and false negatives; basis for accuracy, precision, recall." },
              { term: "Cross-validation", definition: "Split data into k folds, train on k-1 and test on the held-out fold, repeat and average; gives an honest performance estimate." },
            ],
            examQuestions: [
              {
                q: "Fit a simple linear regression y = a + bx to the 5-month advertising-sales data (10,50), (20,75), (30,100), (40,110), (50,130). Show the cov/var computation, forecast sales at advertising = 60, and state the evaluation metrics and cross-validation discipline for deploying a regression model.",
                marks: 7,
                outline: [
                  "State the model y = a + bx with b = cov(x,y)/var(x) and a = mean(y) - b*mean(x).",
                  "Compute mean_x = 30, mean_y = 93.",
                  "cov(x,y) = (860 + 180 + 0 + 170 + 740)/5 = 390; var(x) = (400+100+0+100+400)/5 = 200.",
                  "b = 390/200 = 1.95; a = 93 - 1.95*30 = 34.5.",
                  "Forecast at adv=60: sales = 34.5 + 1.95*60 = 151.5.",
                  "Evaluation metrics: RMSE, MAE, R-squared for regression; confusion matrix for classification.",
                  "Cross-validation: 5-fold or 10-fold; deploy only when held-out metric meets the threshold.",
                ],
              },
              {
                q: "Define RMSE and state why it penalises large errors more than MAE.",
                marks: 2,
              },
              {
                q: "List the four entries of a confusion matrix and the formulas for accuracy and precision.",
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
      title: "Reporting, Dashboards and Visualization",
      summary:
        "Unit IV is the user-facing layer: reporting versus analytics, the report types (canned, ad-hoc, scorecards), KPI design for dashboards, the visualization principles that make charts honest, dashboard layout patterns, Excel for BI with pivots and Power Query, Power BI and Tableau overviews, storytelling with data, and the governance that keeps self-service BI from becoming spreadsheet chaos.",
      chapter: {
        number: "04",
        title: "Reporting, Dashboards and Visualization",
        intro:
          "Unit IV covers everything the business user actually sees: the distinction between reporting and analytics, the report types and their delivery patterns, the KPI design that drives dashboards, the visualization principles that keep charts honest and effective, dashboard layout patterns for strategic, tactical and operational audiences, Excel and Power Query for personal BI, Power BI and Tableau for enterprise BI, storytelling with data, and the governance that keeps self-service BI trustworthy.",
        inOneBreath:
          "Reporting describes what happened while analytics explains why and predicts what next; report types are canned (scheduled, fixed format), ad-hoc (one-off queries) and scorecards (KPIs vs targets); KPIs follow SMART and pair productivity with quality to resist gaming; visualization picks the chart by the question - bar for compare, line for trend, scatter for correlation, pie rarely; color uses at most five hues, color-blind safe, one accent for emphasis; honesty rules include y-axis from zero for bars, no dual-axis without a link, label over legend; dashboard layout follows the F-pattern with KPIs top-left, alerts top-right, charts middle, detail bottom; Excel with pivot tables and Power Query handles up to ~2M rows for personal BI; Power BI Desktop plus Service with DAX handles enterprise dashboards; Tableau Desktop plus Server with VizQL handles exploratory analytics; storytelling follows hook, context, evidence, action; and self-service BI needs certified datasets, a data catalog and governance to avoid spreadsheet hell.",
        sections: [
          {
            number: "4.1",
            title: "Reporting vs analytics and the report types",
            body: [
              "Reporting and analytics are different activities on the same data. Reporting describes what happened: last month's sales by region, today's stockouts, this quarter's churn count. It answers 'what' questions and is consumed passively - a manager reads the report and notes whether the number is on target. Analytics explains why it happened and predicts what will happen next: 'why did Q3 umbrella sales drop in the South', 'what will Q4 revenue be'. Analytics answers 'why' and 'what next' and is consumed actively - an analyst explores the data, forms hypotheses and tests them. BI platforms deliver both, but the design trade-offs differ.",
              "Three report types cover the spectrum. Canned (operational) reports are scheduled, fixed-format documents - the daily sales PDF emailed to store managers at 7 AM, the monthly board pack, the weekly inventory turn spreadsheet. They are repeatable, parameterised (run for store S04 for week 32) and target a known audience. Ad-hoc reports are one-off queries: an analyst pulls the list of customers whose basket size dropped 30% last month to feed a re-engagement campaign. They are unrepeatable, exploratory and target a single user. Scorecards are KPI-tracking documents: revenue vs target, churn vs threshold, NPS vs last quarter. They are repeatable, focused on deltas to target and target an executive audience.",
              "Each report type fits a different use case. Canned reports serve operational management - daily store performance, weekly inventory turns, monthly P&L. Ad-hoc reports serve one-off analysis - campaign ROI for a single promotion, root-cause of a stockout spike, customer list for a win-back. Scorecards serve strategic and tactical management - the executive dashboard showing top 10 KPIs vs target with red/amber/green status. The exam answer should name all three, give a worked example of each and link each to its decision level: canned for operational, scorecard for strategic/tactical, ad-hoc for any level on demand.",
              "The delivery channel differs too. Canned reports are pushed: emailed PDFs, portal subscriptions, printed copies for store managers without laptops. Scorecards are pulled: executives log in to a dashboard portal on demand. Ad-hoc reports are self-served: analysts run them in Power BI, Tableau or Excel against a certified dataset. A mature BI programme publishes a catalog of all three: a report catalog listing every canned report with its schedule and owner, a scorecard portal showing every executive KPI, and a certified-dataset catalog enabling ad-hoc analysis without re-creating the underlying queries. The catalog itself is a BI artefact worth mentioning in the exam.",
            ],
            bullets: [
              "Reporting describes what happened; analytics explains why and predicts what next.",
              "Canned (operational) report: scheduled, fixed format, repeatable, e.g. daily sales PDF at 7 AM.",
              "Ad-hoc report: one-off, exploratory, single user, e.g. customer list for a win-back campaign.",
              "Scorecard: KPIs vs target with red/amber/green, e.g. executive dashboard with top 10 KPIs.",
              "Canned serves operational; scorecard serves strategic/tactical; ad-hoc serves any level on demand.",
              "Delivery: canned pushed (email/portal), scorecards pulled (dashboard login), ad-hoc self-served.",
              "Mature programmes publish a catalog of all three with schedule, owner and certified dataset.",
              "Ad-hoc on certified datasets prevents 'spreadsheet hell' of duplicated definitions.",
            ],
            table: {
              caption: "Three report types mapped to decision level, audience and delivery.",
              headers: ["Type", "Decision level", "Audience", "Delivery", "Worked example"],
              rows: [
                ["Canned", "Operational", "Store manager", "Email/portal, daily 7 AM", "Daily sales PDF"],
                ["Ad-hoc", "Any (on demand)", "Analyst", "Self-served on certified dataset", "Customer win-back list"],
                ["Scorecard", "Strategic/Tactical", "Executive", "Dashboard portal (pull)", "Top 10 KPIs vs target"],
                ["Canned (monthly)", "Strategic", "Board", "Board pack PDF", "Monthly P&L summary"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Reporting vs analytics on the same data",
              caption:
                "Reporting answers 'what'; analytics answers 'why' and 'what next' - both delivered by the BI platform.",
              left: {
                heading: "Reporting",
                items: [
                  "Describes what happened",
                  "Answers 'what' questions",
                  "Consumed passively",
                  "Fixed format, scheduled",
                  "Daily sales PDF, monthly P&L",
                ],
              },
              right: {
                heading: "Analytics",
                items: [
                  "Explains why and predicts next",
                  "Answers 'why' and 'what next'",
                  "Consumed actively",
                  "Exploratory, interactive",
                  "Q3 umbrella drop root-cause, Q4 forecast",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Link each report type to a decision level",
              body: "The exam answer that earns full marks links each report type to its decision level: canned for operational, scorecard for strategic/tactical, ad-hoc for any on demand. Add the delivery channel (push vs pull vs self-served) and one worked example for each. A list of types without levels and examples is a partial answer.",
            },
            keyTerms: [
              { term: "Reporting", definition: "Activity that describes what happened - sales by region, stockouts today - consumed passively." },
              { term: "Analytics", definition: "Activity that explains why something happened and predicts what will happen next; consumed actively." },
              { term: "Canned report", definition: "Scheduled, fixed-format, repeatable report pushed to a known audience, e.g. daily sales PDF at 7 AM." },
              { term: "Scorecard", definition: "KPI-tracking report showing metrics vs targets with red/amber/green status, aimed at executives." },
            ],
            examQuestions: [
              {
                q: "Distinguish between reporting and analytics. Describe the three report types (canned, ad-hoc, scorecard) with a worked example of each, link each to a decision level, and state the delivery channel for each.",
                marks: 7,
                outline: [
                  "Reporting describes what happened; analytics explains why and predicts what next.",
                  "Reporting consumed passively (read the number); analytics consumed actively (explore, hypothesise, test).",
                  "Canned: scheduled, fixed format, e.g. daily sales PDF at 7 AM; operational level; pushed.",
                  "Ad-hoc: one-off, e.g. customer win-back list; any level on demand; self-served.",
                  "Scorecard: KPIs vs target, e.g. executive dashboard top 10 KPIs; strategic/tactical; pulled.",
                  "Delivery channels: canned pushed, scorecards pulled, ad-hoc self-served on certified datasets.",
                  "Mature programmes publish a catalog of all three to prevent duplicated definitions.",
                ],
              },
              {
                q: "Give one example each of a canned report and an ad-hoc report.",
                marks: 2,
              },
              {
                q: "What is a scorecard and at which decision level is it aimed?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "KPI design and visualization principles",
            body: [
              "KPI design for dashboards inherits the SMART discipline from Unit I but adds visual encoding. Each KPI needs a target, a current value, a delta to target ( favourable or unfavourable), and a status (green/amber/red). The status thresholds are part of the design: green if sales >= 95% of target, amber if 85-95%, red if below 85%. A KPI without thresholds is just a number; thresholds make it actionable. Pair every productivity KPI with a quality KPI (sales with margin, conversion with lifetime value) to resist gaming.",
              "Chart selection is governed by the question. Comparing categories? Bar chart (vertical if under 10 categories, horizontal if labels are long). Trend over time? Line chart (or area for cumulative share). Correlation between two measures? Scatter plot. Part of a whole? Stacked bar or tree map (avoid pie beyond 3 slices). Distribution? Histogram or box plot. Geographic comparison? Choropleth map. The wrong chart is the most common visualization mistake - a pie chart for 8 categories, a line chart for non-time data, a 3-D bar that distorts comparison. The rule: pick the chart by the question, not by what looks impressive.",
              "Color discipline separates professional from amateur. Use at most five hues in a single chart, choose a color-blind safe palette (avoid red-green for status; use blue-orange or shape encoding), reserve one accent color for emphasis (the category the user should act on) and keep the rest muted. Never use rainbow palettes for ordinal data - the colors have no implied order. Status colors (red/amber/green) are an exception but must always be paired with shape or text labels so color-blind users can read them.",
              "Honesty rules are non-negotiable. Bar chart y-axis must start at zero - a bar truncated at y=80 vs y=100 exaggerates a 20% difference to a 400% visual difference. Avoid dual y-axes unless the two series are explicitly linked (e.g. sales and conversion rate); a dual-axis can imply a spurious correlation. Label series directly on the chart when possible - legends force eye movement. Annotate the key insight (a callout on the spike) rather than letting the user search for it. Tufte's 'data-ink ratio' is the underlying principle: maximise the ink devoted to data, minimise chartjunk (3-D effects, gradient fills, drop shadows). The exam answer: state each rule with a worked example of the mistake it prevents.",
            ],
            bullets: [
              "KPI design: target, current, delta, status (red/amber/green) thresholds; pair productivity with quality.",
              "Bar chart for compare; line for trend; scatter for correlation; histogram for distribution; choropleth for geography.",
              "Avoid pie beyond 3 slices; use stacked bar or tree map instead.",
              "Color: max five hues, color-blind safe (blue-orange, not red-green), one accent for emphasis.",
              "No rainbow palettes for ordinal data - colors have no implied order.",
              "Bar y-axis must start at zero; dual-axis only with linked series.",
              "Label series directly on chart; annotate the key insight with a callout.",
              "Tufte's data-ink ratio: maximise data ink, minimise chartjunk (3-D, gradients, shadows).",
            ],
            table: {
              caption: "Chart selection by the question being asked.",
              headers: ["Question", "Chart", "Mistake to avoid"],
              rows: [
                ["Compare categories", "Bar (vertical or horizontal)", "Pie with more than 3 slices"],
                ["Trend over time", "Line (or area for cumulative)", "Line for non-time data"],
                ["Correlation of two measures", "Scatter", "Dual-axis implying spurious link"],
                ["Part of a whole", "Stacked bar or tree map", "3-D pie with slices hidden"],
                ["Distribution", "Histogram or box plot", "Bar chart with bin labels missing"],
                ["Geographic comparison", "Choropleth map", "Rainbow palette for ordinal data"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Chart selection 2x2 - by data type and question",
              caption:
                "Quadrants by data type (categorical vs time) and question (compare vs composition).",
              axes: { x: "Categorical (left) vs Time (right)", y: "Compare (top) vs Composition (bottom)" },
              quadrants: [
                { label: "Top-left: Bar chart", note: "compare categories" },
                { label: "Top-right: Line chart", note: "compare over time" },
                { label: "Bottom-left: Tree map / pie (max 3)", note: "composition of categories" },
                { label: "Bottom-right: Stacked area", note: "composition over time" },
              ],
            },
            callout: {
              type: "warning",
              title: "Y-axis from zero is non-negotiable for bars",
              body: "The single most common dishonest chart is a bar chart whose y-axis does not start at zero - it visually exaggerates small differences into large ones. Always state the rule: bar y-axis from zero; the only exception is when the bars themselves are deviations from a baseline that is not zero, and even then annotate the baseline. Examiners look for this rule by name.",
            },
            keyTerms: [
              { term: "SMART KPI", definition: "Specific, Measurable, Achievable, Relevant, Time-bound measure paired with a target and red/amber/green thresholds." },
              { term: "Chart selection by question", definition: "Bar for compare, line for trend, scatter for correlation, stacked bar/tree map for composition, histogram for distribution." },
              { term: "Data-ink ratio", definition: "Tufte's principle: maximise the ink devoted to data, minimise chartjunk like 3-D effects and gradient fills." },
              { term: "Color-blind safe palette", definition: "A palette distinguishable by color-blind users, e.g. blue-orange instead of red-green, paired with shape or text labels." },
            ],
            examQuestions: [
              {
                q: "State four visualization principles covering chart selection, color, honesty rules and Tufte's data-ink ratio. For each, give a worked example of the mistake it prevents.",
                marks: 7,
                outline: [
                  "Chart selection by question: bar for compare, line for trend, scatter for correlation, tree map for composition.",
                  "Mistake prevented: pie chart with 8 slices hides the small ones; use a tree map.",
                  "Color: max five hues, color-blind safe (blue-orange not red-green), one accent for emphasis.",
                  "Mistake prevented: red-green status encoding unreadable to 8% of men with color blindness.",
                  "Honesty: bar y-axis from zero; dual-axis only with linked series.",
                  "Mistake prevented: y-axis truncated at 80 exaggerates a 20% gap to a 400% visual gap.",
                  "Tufte's data-ink ratio: maximise data ink, minimise chartjunk; mistake prevented: 3-D bars distort comparison.",
                ],
              },
              {
                q: "Which chart would you use to show the trend of monthly sales over two years?",
                marks: 2,
              },
              {
                q: "State two reasons a pie chart with 8 slices is a poor visualization choice.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Dashboard layout patterns",
            body: [
              "A dashboard is a single screen of charts and KPIs that lets a user grasp the state of the business at a glance. The 'five-second rule' is the design target: the user should understand the top three KPIs within five seconds of opening the dashboard. Layout discipline is what makes this possible. The eye scans an F-pattern - top-left first, across the top, then down the left side - so the most important KPIs go top-left, alerts and status indicators top-right, supporting charts in the middle band, and detail tables at the bottom for drill-down.",
              "Three dashboard types serve different audiences. A strategic dashboard (executive scorecard) shows the top 10 KPIs vs target, with minimal charts and strong use of red/amber/green status - the CEO opens it Monday morning and asks 'where are we off target'. A tactical dashboard (manager) shows the drivers behind the KPIs - sales by region, by category, by week-over-week trend - so a category manager can ask 'why is the East region under target'. An operational dashboard (front-line) shows real-time or near-real-time metrics - calls in queue, stockouts today, ATM downtime - and is designed for action, often with alerts that page a user when a threshold is breached.",
              "Layout patterns follow the audience. A strategic dashboard uses a '6-KPI banner' across the top (revenue, margin, customer count, NPS, churn, cash), then a 2x2 grid of supporting charts, with a single commentary box at the bottom for the analyst's note. A tactical dashboard uses a left-rail of filters (date range, region, category) plus a main canvas of 4-6 linked charts (when the user clicks a region, all charts filter). An operational dashboard uses large numeric tiles for current values (calls in queue: 12), sparklines for recent trend, and a top alert list for items needing action. The pattern is itself a 2-mark answer.",
              "A worked retail dashboard illustrates the patterns. The strategic view shows six banner KPIs (revenue, margin %, customer count, basket size, conversion, inventory turn) with red/amber/green status; clicking 'revenue' drills to a tactical view with a regional bar chart, a category line chart and a week-over-week trend; clicking a region drills to an operational view with that region's store-level table and today's stockout alerts. The three layers are linked by the same conformed dimensions (dim_date, dim_store, dim_product), so a click filters consistently across all of them. The layout is F-pattern at each level; the navigation is drill-down across levels; the dimensions are conformed across the warehouse - this is the full-marks answer template.",
            ],
            bullets: [
              "Five-second rule: top three KPIs understandable within five seconds of opening.",
              "F-pattern scanning: KPIs top-left, alerts top-right, charts middle, detail bottom.",
              "Strategic dashboard: top 10 KPIs vs target, minimal charts, red/amber/green; for the CEO.",
              "Tactical dashboard: drivers behind KPIs - sales by region, by category, by week; for the manager.",
              "Operational dashboard: real-time metrics with alerts; for the front-line.",
              "Strategic layout: 6-KPI banner + 2x2 grid + commentary box.",
              "Tactical layout: left-rail filters + 4-6 linked charts that cross-filter on click.",
              "Operational layout: large numeric tiles + sparklines + alert list.",
              "Worked retail: strategic -> tactical -> operational, all linked by conformed dimensions.",
            ],
            table: {
              caption: "Three dashboard types mapped to audience, content and layout pattern.",
              headers: ["Type", "Audience", "Content", "Layout pattern", "Refresh"],
              rows: [
                ["Strategic", "Executive", "Top 10 KPIs vs target", "6-KPI banner + 2x2 grid + commentary", "Daily"],
                ["Tactical", "Manager", "Drivers by region/category/week", "Left-rail filters + 4-6 linked charts", "Daily / hourly"],
                ["Operational", "Front-line", "Real-time metrics + alerts", "Numeric tiles + sparklines + alert list", "Minutes"],
                ["Drill-down", "All", "Linked views across levels", "Conformed dimensions across the warehouse", "Varies"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Dashboard layout layers - F-pattern by audience",
              caption:
                "Top KPIs first, alerts top-right, charts in the middle band, detail at the bottom for drill-down.",
              layers: [
                { label: "Strategic: 6-KPI banner across the top + commentary", note: "executive, daily refresh" },
                { label: "Tactical: left-rail filters + 4-6 linked charts", note: "manager, daily/hourly refresh" },
                { label: "Operational: numeric tiles + sparklines + alert list", note: "front-line, minute refresh" },
                { label: "Drill-down: conformed dimensions link all three layers", note: "click filters consistently" },
              ],
            },
            callout: {
              type: "tip",
              title: "State the five-second rule",
              body: "The five-second rule is the dashboard design target examiners look for. State it, then explain how the F-pattern layout (KPIs top-left, alerts top-right, charts middle, detail bottom) achieves it. Pair the rule with one concrete worked dashboard (retail strategic -> tactical -> operational) to lift the answer from definition to design.",
            },
            keyTerms: [
              { term: "Five-second rule", definition: "Dashboard design target: top three KPIs understandable within five seconds of opening." },
              { term: "F-pattern", definition: "Eye-scanning pattern: top-left first, across the top, then down the left; layout places KPIs top-left, alerts top-right." },
              { term: "Strategic dashboard", definition: "Executive scorecard showing top KPIs vs target with red/amber/green status, refreshed daily." },
              { term: "Operational dashboard", definition: "Front-line dashboard showing real-time metrics with alert paging, refreshed in minutes." },
            ],
            examQuestions: [
              {
                q: "Describe the three dashboard types (strategic, tactical, operational) with audience, content and layout pattern for each. State the five-second rule and the F-pattern layout, and trace a worked retail dashboard from strategic to tactical to operational.",
                marks: 7,
                outline: [
                  "Five-second rule: top three KPIs understandable within five seconds of opening.",
                  "F-pattern: KPIs top-left, alerts top-right, charts middle band, detail at bottom.",
                  "Strategic: top 10 KPIs vs target with red/amber/green; for executives; daily refresh.",
                  "Tactical: drivers by region/category/week; for managers; daily/hourly refresh.",
                  "Operational: real-time metrics with alert paging; for front-line; minute refresh.",
                  "Layout patterns: 6-KPI banner for strategic, left-rail filters for tactical, numeric tiles for operational.",
                  "Worked retail: strategic -> tactical -> operational, all linked by conformed dim_date, dim_store, dim_product.",
                ],
              },
              {
                q: "State the five-second rule for dashboard design.",
                marks: 2,
              },
              {
                q: "What is the F-pattern and how does it guide dashboard layout?",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Excel for BI - pivot tables and Power Query",
            body: [
              "Excel is the most widely deployed BI tool in the world and is the right starting point for personal and small-team analysis. Its pivot table feature drag-and-drop-aggregates a list of rows into a cross-tab: drop 'Region' onto rows, 'Category' onto columns and 'Sum of Dollars' onto values, and Excel produces the regional x category sales matrix in seconds. With Power Pivot (the in-memory VertiPaq engine built into modern Excel), the pivot can sit on top of a data model holding 1-2 million rows, with relationships between fact and dimension tables and DAX measures like 'Total Sales = SUM(sales[dollars])' reusable across pivots.",
              "Power Query is Excel's ETL tool and is the gateway to repeatable BI workflows. From the Data ribbon, 'Get Data' connects to sources (CSV, Excel, SQL Server, web, folder of files), and the Power Query Editor applies transformations as steps: remove columns, filter rows, split a column on delimiter, merge with another table, group by with aggregation. Each step is recorded as M code (the Power Query formula language) and is replayable - refresh the query and the same transformations reapply to new data. This repeatability is the difference between a one-off manual cleanup and a maintainable BI workflow.",
              "A worked Excel BI workflow illustrates the chain. The marketing analyst receives a monthly campaign_performance.csv with 80,000 rows. She opens Excel, uses Power Query to: (1) connect to the CSV; (2) promote headers; (3) change data types (revenue to currency, date to date); (4) split campaign_id on '-' to get channel and tactic; (5) merge with a campaign_lookup.xlsx to add budget; (6) compute ROI as a custom column (revenue / budget); (7) load to the data model. She then builds a pivot: rows = channel, columns = month, values = Sum of ROI. The whole workflow takes 30 minutes the first time and 30 seconds to refresh next month - this repeatability is the BI payoff.",
              "Excel's limits are the BI escalator. When the data exceeds 1-2 million rows, when refresh must be scheduled and shared with 50+ users, or when row-level security is needed (each rep sees only their region), it is time to migrate to Power BI - which uses the same VertiPaq engine and the same Power Query and DAX, so the analyst's skills transfer directly. The migration path is itself a BI architecture decision: start in Excel, prove value, then promote the workbook to a Power BI dataset when the use case outgrows Excel's limits. No rework - just promotion.",
            ],
            bullets: [
              "Excel pivot table: drag-and-drop aggregation - drop Region, Category, Sum of Dollars to cross-tab.",
              "Power Pivot: VertiPaq in-memory engine, 1-2M rows, DAX measures reusable across pivots.",
              "Power Query: ETL in Excel - connect, transform steps (filter, split, merge, group), replayable M code.",
              "Steps recorded as M code; refresh replays transformations on new data.",
              "Worked: 80k-row campaign CSV -> Power Query 7-step cleanup -> pivot of ROI by channel and month.",
              "First run 30 minutes, refresh 30 seconds - repeatability is the BI payoff.",
              "Migrate to Power BI when rows exceed 1-2M, refresh must be scheduled, or RLS is needed.",
              "Power BI uses same VertiPaq, Power Query and DAX - skills transfer, no rework.",
            ],
            codeExample: {
              language: "python",
              caption: "Pandas equivalent of an Excel pivot table - same shape, scripted (Python).",
              code:
                "import pandas as pd\n" +
                "# the 'campaign_performance' table loaded from CSV\n" +
                "df = pd.DataFrame({\n" +
                "  'channel':   ['email','email','paid','paid','social','social'],\n" +
                "  'month':     ['2024-07','2024-08','2024-07','2024-08','2024-07','2024-08'],\n" +
                "  'revenue':   [12000, 15000, 9000, 11000, 6000, 8000],\n" +
                "  'budget':    [3000, 3000, 5000, 5000, 2000, 2000],\n" +
                "})\n" +
                "# Power Query-style derive: ROI = revenue / budget\n" +
                "df['roi'] = df['revenue'] / df['budget']\n" +
                "# pivot table: rows=channel, columns=month, values=Sum of ROI\n" +
                "piv = df.pivot_table(index='channel', columns='month',\n" +
                "                     values='roi', aggfunc='mean')\n" +
                "print(piv.round(2))\n" +
                "# month      2024-07  2024-08\n" +
                "# channel\n" +
                "# email        4.00    5.00\n" +
                "# paid         1.80    2.20\n" +
                "# social       3.00    4.00",
            },
            diagram: {
              kind: "flow",
              title: "Excel-to-Power-BI escalator",
              caption:
                "Start in Excel, prove value, promote the workbook to a Power BI dataset when limits are reached.",
              steps: [
                { label: "Personal CSV in Excel", note: "80k rows, one-off analysis" },
                { label: "Power Query cleanup steps", note: "recorded M code, replayable" },
                { label: "Pivot table + DAX measures", note: "VertiPaq up to 1-2M rows" },
                { label: "Promote to Power BI dataset", note: "when rows, refresh or RLS exceed Excel" },
                { label: "Publish to Power BI Service", note: "same engine, no rework" },
              ],
            },
            callout: {
              type: "tip",
              title: "Highlight the repeatability of Power Query",
              body: "The repeatability of Power Query is the BI payoff and earns exam marks. State that each cleanup step is recorded as M code, refresh replays the steps on new data, and the first run of 30 minutes becomes a 30-second refresh next month. This is the difference between a one-off cleanup and a maintainable BI workflow - the heart of personal BI.",
            },
            keyTerms: [
              { term: "Pivot table", definition: "Excel feature that drag-and-drop-aggregates a list into a cross-tab by row, column and value fields." },
              { term: "Power Query", definition: "Excel and Power BI's ETL tool that records transformation steps as M code for replayable refresh." },
              { term: "Power Pivot", definition: "Excel's in-memory VertiPaq engine that holds 1-2M rows with relationships and DAX measures." },
              { term: "DAX", definition: "Data Analysis Expressions: the formula language for Power Pivot and Power BI measures." },
            ],
            examQuestions: [
              {
                q: "Explain the role of pivot tables, Power Query and Power Pivot in Excel-based BI. Walk through a worked campaign-performance analysis from CSV load to pivot, and state the conditions under which you would migrate the workbook to Power BI.",
                marks: 7,
                outline: [
                  "Pivot table: drag-and-drop aggregation - rows, columns, values - produces cross-tab in seconds.",
                  "Power Query: ETL in Excel; steps recorded as M code; refresh replays transformations.",
                  "Power Pivot: VertiPaq in-memory engine, 1-2M rows, DAX measures reusable.",
                  "Worked: 80k-row campaign CSV -> Power Query 7-step cleanup (types, split, merge, ROI) -> load to data model.",
                  "Pivot: rows = channel, columns = month, values = Sum of ROI; first run 30 min, refresh 30 sec.",
                  "Migrate to Power BI when rows exceed 1-2M, refresh must be scheduled, or row-level security is needed.",
                  "Same VertiPaq, Power Query and DAX - skills transfer, no rework; workbook promotes to a dataset.",
                ],
              },
              {
                q: "What does Power Query record when you apply transformations, and why does that matter?",
                marks: 2,
              },
              {
                q: "Give two conditions under which an Excel workbook should be migrated to Power BI.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Power BI and Tableau overviews and storytelling with data",
            body: [
              "Power BI is Microsoft's enterprise BI platform with three components: Power BI Desktop (free authoring tool for Windows), Power BI Service (cloud collaboration and sharing), and Power BI Report Server (on-premises alternative for regulated industries). A developer builds a dataset in Desktop (Power Query for ETL, VertiPaq for storage, DAX for measures), authors reports as visualisations on top of the dataset, then publishes to a workspace in the Service where stakeholders view via browser, mobile app or embedded in Teams. Row-level security restricts each rep to their region; scheduled refresh (up to 8 times per day for Pro, 48 for Premium) keeps the data current.",
              "Tableau takes a visualization-first approach. Tableau Desktop is the authoring tool; the user drags fields onto shelves (rows, columns, color, size, label) and the VizQL engine generates the SQL and renders the chart in real time. Tableau Prep cleans and shapes data. Tableau Server or Tableau Cloud provides sharing, governance and row-level security. Tableau's Hyper engine handles wide data sets well, and its visual language - reference lines, dual-axis, sets, parameters, trend lines - is more polished than Power BI for exploratory analytics. The trade-off: licensing is costlier per user than Power BI (often bundled with Microsoft 365 E5), and the Microsoft integration is weaker.",
              "Storytelling with data is the discipline of turning a chart into a narrative. Cole Nussbaumer Knaflic's framework - 'story' is the narrative arc; 'slides' are the visualisation sequence; 'charts' are the individual pictures - distils to four moves. Hook: open with the question or the surprising number ('Q3 umbrella sales in the South dropped 12% versus Q2 - why?'). Context: anchor the audience with what is normal ('the South has historically contributed 35% of umbrella revenue'). Evidence: present the chart that supports the answer, with the key insight annotated ('the drop coincides with a 40% reduction in monsoon rainfall'). Action: close with the recommendation ('reallocate umbrella marketing spend to the North where rainfall is up 20%').",
              "A worked storytelling example illustrates the moves. The category manager opens the Q3 review with the hook - 'the South's umbrella revenue dropped from USD 1.2M to USD 1.06M, a 12% fall'. She anchors context - 'the South has contributed 35% of umbrella revenue for the last 3 years, so a 12% drop is a 4-percentage-point hit to total umbrella revenue'. She presents evidence - a dual-axis chart of weekly South umbrella sales overlaid with weekly rainfall, with the rainfall decline annotated. She closes with the action - 'reallocate USD 80k of umbrella marketing spend from the South to the North where rainfall is up 20%; we project a USD 200k revenue recovery'. The four moves - hook, context, evidence, action - are the storytelling template the exam rewards.",
            ],
            bullets: [
              "Power BI: Desktop (author), Service (cloud share), Report Server (on-prem); VertiPaq + DAX + Power Query.",
              "Scheduled refresh: up to 8x/day (Pro) or 48x/day (Premium); row-level security per region.",
              "Tableau: Desktop (VizQL drag-drop), Prep (clean), Server/Cloud (share); Hyper engine.",
              "Tableau licensing costlier per user; Power BI often bundled with Microsoft 365 E5.",
              "Storytelling moves: hook (surprising number), context (what is normal), evidence (annotated chart), action (recommendation).",
              "Cole Nussbaumer Knaflic: story is narrative arc; slides are sequence; charts are pictures.",
              "Worked: Q3 South umbrella revenue USD 1.2M -> 1.06M (-12%); 40% rainfall drop annotated; reallocate USD 80k marketing.",
              "Always annotate the key insight on the chart rather than letting the user search for it.",
            ],
            table: {
              caption: "Power BI vs Tableau across enterprise selection dimensions.",
              headers: ["Dimension", "Power BI", "Tableau"],
              rows: [
                ["Authoring", "Desktop + DAX", "Desktop + VizQL"],
                ["Sharing", "Service workspaces", "Server / Cloud"],
                ["Engine", "VertiPaq in-memory", "Hyper"],
                ["ETL", "Power Query (M)", "Tableau Prep"],
                ["Refresh", "Up to 48x/day (Premium)", "Scheduled / live"],
                ["Licensing", "Often bundled M365 E5", "Costlier per seat"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Power BI vs Tableau platform comparison",
              caption:
                "Both cover authoring, sharing and ETL; differences are in engine, licensing and integration.",
              left: {
                heading: "Power BI",
                items: [
                  "Desktop authoring with DAX",
                  "Service workspaces + RLS",
                  "VertiPaq in-memory engine",
                  "Power Query (M) for ETL",
                  "Bundled with Microsoft 365 E5",
                ],
              },
              right: {
                heading: "Tableau",
                items: [
                  "Desktop authoring with VizQL",
                  "Server or Cloud sharing",
                  "Hyper engine for wide data",
                  "Tableau Prep for ETL",
                  "Costlier per seat; richer visuals",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Storytelling = hook, context, evidence, action",
              body: "A 7-mark storytelling question rewards the four-move template: hook with a surprising number, anchor context with what is normal, present the annotated chart as evidence, close with a recommendation. Always include a worked example with real numbers (USD 1.2M -> 1.06M, -12%, reallocate USD 80k) - memorised definitions without a worked narrative earn partial credit only.",
            },
            keyTerms: [
              { term: "Power BI Service", definition: "Microsoft's cloud collaboration layer for Power BI; workspaces, scheduled refresh, row-level security." },
              { term: "VizQL", definition: "Tableau's query language that translates drag-drop shelf placements into SQL and rendered visuals." },
              { term: "Storytelling with data", definition: "Four-move framework: hook, context, evidence, action - turns a chart into a narrative." },
              { term: "Annotated chart", definition: "A chart with the key insight labelled by a callout so the user does not have to search for it." },
            ],
            examQuestions: [
              {
                q: "Compare Power BI and Tableau across six dimensions, then explain the four moves of storytelling with data (hook, context, evidence, action) using a worked Q3 retail example. State the role of annotation on the evidence chart.",
                marks: 7,
                outline: [
                  "Power BI: Desktop + Service + Report Server; VertiPaq + DAX + Power Query; bundled with M365 E5.",
                  "Tableau: Desktop + Prep + Server/Cloud; VizQL + Hyper; costlier per seat, richer visuals.",
                  "Compare on authoring, sharing, engine, ETL, refresh, licensing.",
                  "Storytelling move 1 - hook: 'Q3 South umbrella revenue dropped from USD 1.2M to USD 1.06M, a 12% fall'.",
                  "Move 2 - context: 'the South has contributed 35% of umbrella revenue for the last 3 years'.",
                  "Move 3 - evidence: dual-axis weekly sales and rainfall chart, with the 40% rainfall decline annotated.",
                  "Move 4 - action: 'reallocate USD 80k marketing from South to North; project USD 200k revenue recovery'.",
                ],
              },
              {
                q: "Name the four moves of storytelling with data in order.",
                marks: 2,
              },
              {
                q: "State two advantages of Power BI over Tableau and one advantage of Tableau over Power BI.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.6",
            title: "Self-service BI and governance",
            body: [
              "Self-service BI is the philosophy that business users - not just IT - can build their own reports and dashboards on top of certified datasets. The pattern is 'certified datasets, governed consumption': IT builds and certifies the dataset (the sales_fact, dim_product and conformed dimensions with certified DAX measures), publishes it to a workspace, and business analysts build reports on top using Power BI Desktop or the web authoring tool. The dataset is the single source of truth; the reports are personal or team-level derivatives. This avoids 'spreadsheet hell' where every analyst re-creates the underlying queries with different definitions of 'revenue'.",
              "Governance is what makes self-service safe. A governance regime has four pillars. Certified datasets: a published catalog of datasets that have been reviewed, with an owner, a refresh SLA and a quality stamp - analysts are told 'use these, do not build your own extract'. Data catalog: a searchable inventory of datasets, columns and reports with business definitions - Microsoft Purview, Alation and Collibra are typical tools. Sensitivity labels: PII columns tagged as 'Confidential' or 'PII' and access enforced through row-level security. Refresh audits: every dataset reports its last refresh, row count and quality checks; a breach alerts the owner.",
              "The trade-off is between agility and control. Without governance, self-service BI becomes 'spreadsheet hell' - 500 analysts each maintaining their own version of 'revenue', none agreeing, and the CFO losing trust in the numbers. With too much governance, self-service BI dies - analysts wait weeks for IT to certify a new dataset and go back to Excel. The mature pattern is 'certified when shared, free when personal': an analyst can build any report on a certified dataset for their own use, but publishing to a shared workspace requires the dataset to be certified and the report to pass a review.",
              "A worked governance regime illustrates the balance. A retailer publishes 12 certified datasets (sales, inventory, customer, marketing, finance, etc.) in a Power BI workspace, each with an owner and refresh SLA. A data catalog (Microsoft Purview) makes them searchable. Analysts build reports freely on these datasets for personal use. To publish to a shared 'Sales Team' workspace, the report must use a certified dataset and pass a review by the data steward for correct measures and thresholds. Sensitivity labels mark customer and employee data; RLS ensures each rep sees only their region. A monthly audit reports dataset freshness, quality check pass rate and adoption (weekly active users) - the same three metrics the BI programme reports to the board.",
            ],
            bullets: [
              "Self-service BI: business users build reports on certified datasets, not their own extracts.",
              "Pattern: certified datasets + governed consumption - one source of truth, personal derivatives.",
              "Governance pillar 1: certified datasets - reviewed, owned, with refresh SLA and quality stamp.",
              "Governance pillar 2: data catalog - searchable inventory (Microsoft Purview, Alation, Collibra).",
              "Governance pillar 3: sensitivity labels - PII tagged, access enforced via RLS.",
              "Governance pillar 4: refresh audits - freshness, row count and quality checks reported monthly.",
              "Mature pattern: 'certified when shared, free when personal'.",
              "Worked retailer: 12 certified datasets, Purview catalog, monthly adoption + freshness + quality audit.",
            ],
            table: {
              caption: "Self-service BI maturity levels and the governance needed at each.",
              headers: ["Maturity", "Description", "Governance needed", "Risk if absent"],
              rows: [
                ["Personal", "Analyst builds for self", "None - free Excel/Power BI Desktop", "None - one user only"],
                ["Team", "Shared with 5-20 colleagues", "Certified dataset, owner", "Spreadsheet hell"],
                ["Department", "Shared with 100+ users", "Catalog, refresh SLA, RLS", "Duplicated definitions"],
                ["Enterprise", "Board-level certified", "Full regime + audit", "Loss of executive trust"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Self-service BI governance decision",
              caption:
                "Build on a certified dataset for shared reports; free for personal use; review before publishing.",
              start: "Analyst builds a Power BI report",
              branches: [
                { label: "Personal use only", outcome: "Free build on any data", good: true },
                { label: "Shared with team", outcome: "Must use a certified dataset", good: true },
                { label: "Published department-wide", outcome: "Steward review + RLS + refresh SLA", good: true },
                { label: "Board-level certified", outcome: "Full regime: catalog, audit, sensitivity labels", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Governance is what prevents spreadsheet hell",
              body: "Without governance, 500 analysts each maintain their own definition of 'revenue' and the CFO loses trust. With too much, self-service dies. The mature answer is 'certified when shared, free when personal' - state the trade-off explicitly and the four governance pillars (certified datasets, catalog, sensitivity labels, refresh audits). The trade-off is itself a 2-mark answer.",
            },
            keyTerms: [
              { term: "Self-service BI", definition: "Philosophy that business users build reports on certified datasets rather than re-creating extracts." },
              { term: "Certified dataset", definition: "A reviewed, owned dataset with a refresh SLA and quality stamp, published as the single source of truth." },
              { term: "Data catalog", definition: "A searchable inventory of datasets, columns and reports with business definitions; e.g. Microsoft Purview, Alation." },
              { term: "Refresh audit", definition: "Monthly report of dataset freshness, row count and quality check pass rate, plus weekly active users." },
            ],
            examQuestions: [
              {
                q: "Define self-service BI and state the four governance pillars that make it safe. Explain the trade-off between agility and control, give the mature pattern, and walk through a worked retailer regime with 12 certified datasets.",
                marks: 7,
                outline: [
                  "Self-service BI: business users build reports on certified datasets, not their own extracts.",
                  "Pillar 1: certified datasets - reviewed, owned, with refresh SLA and quality stamp.",
                  "Pillar 2: data catalog - searchable inventory (Purview, Alation, Collibra).",
                  "Pillar 3: sensitivity labels - PII tagged, access via RLS.",
                  "Pillar 4: refresh audits - freshness, row count, quality checks monthly.",
                  "Trade-off: too little governance = spreadsheet hell; too much = self-service dies.",
                  "Mature pattern 'certified when shared, free when personal'; worked retailer with 12 certified datasets, Purview catalog, monthly adoption + freshness + quality audit.",
                ],
              },
              {
                q: "What is a certified dataset in self-service BI?",
                marks: 2,
              },
              {
                q: "Name two tools used as a data catalog in enterprise BI.",
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
      title: "Advanced BI, Big Data and Implementation",
      summary:
        "Unit V pulls BI into the modern era: text analytics and sentiment analysis for voice-of-customer, web and social analytics, the big data ecosystem with lakehouse architecture, real-time BI with streaming and complex event processing, mobile BI, the implementation strategy and pilot-first roadmap, the failure factors and ethics and privacy concerns, and three case studies covering retail basket analysis, banking risk dashboards and airline operations BI.",
      chapter: {
        number: "05",
        title: "Advanced BI, Big Data and Implementation",
        intro:
          "Unit V pulls BI into the modern era: text analytics and sentiment analysis for voice-of-customer, web and social analytics, the big data ecosystem with Hadoop, Spark and lakehouse architecture, real-time BI with streaming and complex event processing, mobile BI, the implementation strategy with its pilot-first roadmap, the failure factors and ethics, and three worked case studies showing BI in retail, banking and airlines.",
        inOneBreath:
          "Text analytics pipeline runs tokenize, POS tag, NER, parse, sentiment on customer reviews; sentiment scoring uses lexicon (VADER) or ML (BERT); web analytics tracks page views, bounce rate, conversions via Google Analytics while social analytics tracks engagement and reach; the big data Vs are volume, velocity, variety, veracity, value; Hadoop pairs HDFS with MapReduce while Spark runs in-memory 100x faster; the lakehouse unifies a data lake (raw, cheap) with a warehouse (queryable, governed) using Delta Lake or Iceberg; cloud BI runs on Snowflake, BigQuery and Athena; real-time BI uses lambda or kappa architectures with Kafka, Spark Structured Streaming and Flink; complex event processing detects patterns in streams (fraud alerts under 100 ms); mobile BI delivers responsive dashboards with push alerts and offline tiles; implementation runs assess, design, pilot, scale, optimize with a pilot-first 90-day delivery; failure factors are data quality, weak sponsorship, scope creep, no adoption; ethics covers bias, PII, GDPR/DPDP and explainability; and case studies include Walmart retail basket, JPMorgan credit risk and Southwest airline ops.",
        sections: [
          {
            number: "5.1",
            title: "Text analytics, sentiment and web/social analytics",
            body: [
              "Text analytics extracts structured signals from unstructured text - customer reviews, support tickets, social posts, call transcripts. The pipeline runs: tokenize (split into words), POS tag (mark nouns, verbs, adjectives), named-entity recognition (NER - identify persons, organisations, locations), parse (extract relationships), and sentiment scoring (rate positivity or negativity). For voice-of-customer (VOC) programmes, the output is a structured table - review_id, sentiment_score, topics, entities - that can be aggregated into dashboards just like transactional facts.",
              "Sentiment scoring uses two approaches. Lexicon-based methods (VADER, TextBlob) score each word against a hand-curated polarity lexicon and combine the scores with rules for negation and intensity - fast, no training data, but weak on sarcasm and domain terms. Machine-learning methods (Naive Bayes, BERT) train a classifier on labelled reviews - accurate, captures domain and sarcasm, but needs labelled data and retraining as language drifts. A worked example: three reviews - 'Loved the umbrella, great quality' (+0.8), 'Terrible service, never again' (-0.6), 'Decent product, ok price' (+0.4) - the dashboard aggregates to an average sentiment of +0.2, flagging the second review for follow-up.",
              "Web analytics tracks user behaviour on a website or app. Google Analytics (and alternatives like Matomo, Adobe Analytics) reports page views, sessions, users, bounce rate (single-page sessions), average session duration, conversion rate (sessions that complete a goal like checkout), and traffic source (organic search, paid, social, direct). E-commerce BI overlays revenue: 'organic search drove 35% of sessions but only 18% of revenue, while email drove 12% of sessions and 28% of revenue' - a finding that drives marketing budget reallocation.",
              "Social analytics tracks engagement on platforms - likes, shares, comments, follower growth, reach, share-of-voice. Tools include native platform analytics (Twitter Analytics, Meta Business Suite) and aggregators (Hootsuite, Sprinklr). A worked integrated VOC dashboard: top-left KPI is average review sentiment (+0.2 trending from +0.15 last month); top-right is NPS (42, up from 38); middle-left is web conversion rate (3.2% vs target 4%); middle-right is social share-of-voice (28%, up 3pp vs competitor); bottom is the top 5 negative-review themes with a drill-through to the underlying reviews. The dashboard combines structured (conversion rate, NPS) and unstructured (sentiment, themes) signals - the modern BI canvas.",
            ],
            bullets: [
              "Text analytics pipeline: tokenize -> POS tag -> NER -> parse -> sentiment.",
              "Sentiment: lexicon (VADER, TextBlob) - fast, no training; ML (BERT) - accurate, needs labels.",
              "Worked reviews: +0.8 'loved great quality', -0.6 'terrible service', +0.4 'decent ok' -> avg +0.2.",
              "Web analytics: page views, sessions, bounce rate, conversion rate, traffic source (Google Analytics).",
              "Conversion rate = goal-completing sessions / total sessions; e.g. 3.2% checkout conversion.",
              "Social analytics: likes, shares, comments, reach, share-of-voice (Hootsuite, Sprinklr).",
              "Integrated VOC dashboard combines structured (NPS, conversion) and unstructured (sentiment, themes).",
              "VOC output is a structured table - review_id, sentiment, topics, entities - aggregatable like any fact.",
            ],
            codeExample: {
              language: "python",
              caption: "VADER lexicon sentiment scoring on three reviews (Python).",
              code:
                "# VADER-style lexicon sentiment scoring (simplified)\n" +
                "lexicon = {\n" +
                "  'loved': 0.6, 'great': 0.5, 'quality': 0.3, 'decent': 0.2,\n" +
                "  'ok': 0.1, 'terrible': -0.6, 'never': -0.2, 'service': 0.0,\n" +
                "  'price': 0.0, 'product': 0.0,\n" +
                "}\n" +
                "reviews = [\n" +
                "  'Loved the umbrella, great quality',\n" +
                "  'Terrible service, never again',\n" +
                "  'Decent product, ok price',\n" +
                "]\n" +
                "def score(text):\n" +
                "  words = text.lower().replace(',','').split()\n" +
                "  hits = [lexicon[w] for w in words if w in lexicon]\n" +
                "  return sum(hits) / len(hits) if hits else 0.0\n" +
                "scores = [score(r) for r in reviews]\n" +
                "for r, s in zip(reviews, scores):\n" +
                "  print(f'{s:+.2f}  {r}')\n" +
                "# +0.80  Loved the umbrella, great quality\n" +
                "# -0.60  Terrible service, never again\n" +
                "# +0.40  Decent product, ok price\n" +
                "print('avg sentiment:', round(sum(scores)/len(scores), 2))  # +0.20",
            },
            diagram: {
              kind: "pipeline",
              title: "Text analytics pipeline from review to dashboard",
              caption:
                "Five stages turn unstructured reviews into structured sentiment rows aggregatable in BI.",
              stages: [
                { label: "Tokenize", note: "split review into words" },
                { label: "POS tag + NER", note: "mark nouns, verbs, entities" },
                { label: "Parse", note: "extract relationships" },
                { label: "Sentiment score", note: "lexicon (VADER) or ML (BERT)" },
                { label: "Aggregate to dashboard", note: "avg sentiment, top themes" },
              ],
            },
            callout: {
              type: "tip",
              title: "Combine structured and unstructured in the VOC dashboard",
              body: "The modern BI canvas combines structured (NPS, conversion rate) and unstructured (sentiment, themes) signals in one dashboard. State the integration explicitly - text analytics output is a structured table (review_id, sentiment, topics, entities) aggregatable like any fact. This integration point is what earns the full-marks answer on a VOC question.",
            },
            keyTerms: [
              { term: "Text analytics", definition: "Pipeline that extracts structured signals from unstructured text: tokenize, POS tag, NER, parse, sentiment." },
              { term: "Sentiment scoring", definition: "Rating positivity or negativity of text, by lexicon (VADER) or ML (BERT); produces a numeric score per review." },
              { term: "Web analytics", definition: "Tracking of user behaviour on a site or app - page views, sessions, bounce rate, conversion rate, traffic source." },
              { term: "Share-of-voice", definition: "Percentage of social mentions in a category captured by a brand versus competitors." },
            ],
            examQuestions: [
              {
                q: "Describe the text analytics pipeline for voice-of-customer. Compare lexicon-based and ML-based sentiment scoring with a worked 3-review example, and explain how web and social analytics integrate into a VOC dashboard.",
                marks: 7,
                outline: [
                  "Pipeline: tokenize, POS tag, NER, parse, sentiment scoring.",
                  "Output: structured table (review_id, sentiment_score, topics, entities) aggregatable in BI.",
                  "Lexicon (VADER, TextBlob): fast, no training, weak on sarcasm.",
                  "ML (BERT): accurate, captures domain and sarcasm, needs labelled data and retraining.",
                  "Worked reviews: +0.8 'Loved the umbrella, great quality', -0.6 'Terrible service, never again', +0.4 'Decent product, ok price'; avg +0.2.",
                  "Web analytics: page views, sessions, bounce rate, conversion rate, traffic source via Google Analytics.",
                  "Social analytics: likes, shares, comments, reach, share-of-voice; integrated VOC dashboard combines structured and unstructured.",
                ],
              },
              {
                q: "List the five stages of the text analytics pipeline in order.",
                marks: 2,
              },
              {
                q: "Give two advantages of ML-based sentiment scoring over lexicon-based scoring.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Big data ecosystem and cloud BI",
            body: [
              "Big data is conventionally defined by the Vs: Volume (terabytes to petabytes), Velocity (high-rate ingest, sometimes streaming), Variety (structured, semi-structured, unstructured), Veracity (noise, uncertainty, bias) and Value (the business outcome). The ecosystem that processes big data has two generations. First-generation Hadoop paired the HDFS distributed file system with the MapReduce compute model - batch, fault-tolerant, but slow because each step wrote to disk. Second-generation Spark runs in-memory, claiming up to 100x faster than MapReduce for in-memory workloads and supporting batch, streaming, SQL (Spark SQL), machine learning (MLlib) and graph (GraphX) in one engine.",
              "The data warehouse was built for structured, schema-on-write data; the data lake was built for raw, any-format, schema-on-read data - CSV, JSON, Parquet, images, audio. The lake is cheap (object storage like S3, ADLS, GCS) and flexible (load anything, define schema at query time), but lacks the transactional guarantees, governance and query performance of the warehouse. The lakehouse architecture, popularised by Databricks, unifies the two: a data lake with a transactional layer (Delta Lake, Apache Iceberg, Apache Hudi) that adds ACID transactions, schema enforcement, time travel and optimized query performance on top of cheap object storage. The lakehouse gives one platform for BI, ML and AI.",
              "Cloud BI runs analytics as a service. Snowflake separates storage from compute, scales each independently and supports cross-cloud data sharing. Google BigQuery is serverless - no clusters to manage, pay per query, integrates with Google's AI services. Amazon Athena runs serverless SQL directly on S3. Azure Synapse blends SQL pools with Spark pools and integrates with Power BI. All four support standard SQL and the star schema, so a dimensional model built on-premise migrates cleanly to the cloud. The cloud BI trade-off is operational simplicity and elasticity against per-query cost and vendor lock-in.",
              "A worked retail big-data flow illustrates the chain. A retailer ingests 5TB of POS events, 2TB of web logs and 500GB of social posts per month into a data lake on S3. Spark jobs aggregate the events into a Parquet fact table partitioned by date and store; a Delta Lake transaction layer adds ACID and time travel; Athena queries the fact for ad-hoc analysis; a nightly load into a Snowflake warehouse serves the executive dashboards. The lake handles the raw variety and volume; the lakehouse layer adds governance; the warehouse serves the curated BI. The pattern - lake for raw, lakehouse for governance, warehouse for BI - is the modern hybrid that examiners reward.",
            ],
            bullets: [
              "Big data Vs: Volume, Velocity, Variety, Veracity, Value.",
              "Hadoop: HDFS (distributed file system) + MapReduce (batch compute) - fault-tolerant but slow.",
              "Spark: in-memory, up to 100x faster than MapReduce; supports batch, streaming, SQL, MLlib, GraphX.",
              "Data warehouse: structured, schema-on-write, governed.",
              "Data lake: raw, any-format, schema-on-read, cheap object storage (S3, ADLS, GCS).",
              "Lakehouse: lake + transactional layer (Delta Lake, Iceberg, Hudi) - ACID, schema enforcement, time travel.",
              "Cloud BI: Snowflake (separated storage/compute), BigQuery (serverless), Athena (SQL on S3), Synapse.",
              "Worked retail: 5TB POS + 2TB web + 500GB social -> S3 lake -> Spark/Delta -> Athena -> Snowflake -> dashboard.",
            ],
            table: {
              caption: "Big data and lakehouse components by layer.",
              headers: ["Layer", "Component", "Role", "Worked retail example"],
              rows: [
                ["Ingest", "Kafka / files", "Stream or batch land raw data", "5TB POS events per month to S3"],
                ["Lake storage", "S3 / ADLS / GCS", "Cheap object storage, any format", "Parquet + JSON + CSV on S3"],
                ["Lakehouse", "Delta Lake / Iceberg", "ACID, schema, time travel", "Transactional layer over Parquet"],
                ["Compute", "Spark / Athena", "In-memory + serverless SQL", "Spark aggregates daily; Athena ad-hoc"],
                ["Warehouse", "Snowflake / BigQuery", "Curated BI serving", "Nightly load serves executive dashboards"],
                ["BI", "Power BI / Tableau", "Dashboard layer", "Power BI connects to Snowflake"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Lakehouse architecture layers - lake to BI",
              caption:
                "Raw lake at the bottom, lakehouse transaction layer, compute, curated warehouse, BI on top.",
              layers: [
                { label: "BI dashboards (Power BI / Tableau)", note: "served from curated warehouse" },
                { label: "Curated warehouse (Snowflake / BigQuery)", note: "nightly load, star schema" },
                { label: "Compute (Spark / Athena)", note: "in-memory and serverless SQL" },
                { label: "Lakehouse transaction layer (Delta Lake / Iceberg)", note: "ACID, schema, time travel" },
                { label: "Raw data lake (S3 / ADLS / GCS)", note: "any format, cheap, schema-on-read" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the lakehouse transaction layers by name",
              body: "The lakehouse is a recent architecture that examiners reward when named precisely. State that Delta Lake, Apache Iceberg and Apache Hudi add ACID transactions, schema enforcement and time travel on top of a cheap object-storage lake - giving one platform for BI, ML and AI. The named transaction layers are the differentiating mark.",
            },
            keyTerms: [
              { term: "Big data Vs", definition: "Volume, Velocity, Variety, Veracity, Value - the conventional definition of big data." },
              { term: "Apache Spark", definition: "In-memory distributed compute engine supporting batch, streaming, SQL, ML and graph; up to 100x faster than MapReduce." },
              { term: "Data lake", definition: "Cheap object-storage repository holding raw data of any format with schema-on-read; lacks warehouse governance." },
              { term: "Lakehouse", definition: "Lake plus a transactional layer (Delta Lake, Iceberg, Hudi) adding ACID, schema enforcement and time travel; one platform for BI, ML and AI." },
            ],
            examQuestions: [
              {
                q: "Define big data using the Vs. Contrast Hadoop and Spark, and the data warehouse, data lake and lakehouse architectures. Walk through a worked retail big-data flow from ingest to dashboard, naming the lakehouse transaction layers.",
                marks: 7,
                outline: [
                  "Vs: Volume, Velocity, Variety, Veracity, Value.",
                  "Hadoop: HDFS + MapReduce - batch, fault-tolerant, slow (writes to disk).",
                  "Spark: in-memory, up to 100x faster, supports batch, streaming, SQL, MLlib, GraphX.",
                  "Warehouse: structured, schema-on-write, governed. Lake: raw, any-format, schema-on-read, cheap.",
                  "Lakehouse: lake + Delta Lake / Iceberg / Hudi - ACID, schema enforcement, time travel.",
                  "Worked retail: 5TB POS + 2TB web + 500GB social -> S3 lake -> Spark/Delta -> Athena -> Snowflake -> Power BI.",
                  "Pattern: lake for raw, lakehouse for governance, warehouse for curated BI.",
                ],
              },
              {
                q: "Name three lakehouse transaction-layer technologies.",
                marks: 2,
              },
              {
                q: "State two advantages of Spark over Hadoop MapReduce.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Real-time BI - streaming and complex event processing",
            body: [
              "Real-time BI delivers insight within seconds of the event, not after a nightly batch. Two architectural patterns dominate. The lambda architecture keeps a batch layer (nightly loads into the warehouse, authoritative and accurate) and a speed layer (real-time streaming into a serving layer, fast but approximate); the serving layer merges the two, preferring batch when available. The kappa architecture simplifies to a single streaming pipeline - everything is a stream, including historical reprocessing - using Kafka and a stream processor like Flink or Spark Structured Streaming. Kappa is conceptually cleaner but requires log retention long enough to reprocess history.",
              "Streaming infrastructure rests on a distributed log like Apache Kafka. Producers write events to topics (e.g. 'pos_transactions', 'atm_withdrawals', 'sensor_readings'); consumers subscribe and process. Each topic is partitioned for parallelism and replicated for durability. A stream processor (Spark Structured Streaming, Flink, Kafka Streams) consumes the topic, applies transformations (filter, aggregate over tumbling or sliding windows, join to reference data) and writes to a sink (a real-time database like Redis or a warehouse for near-real-time dashboards). Latency targets are seconds for dashboards, milliseconds for alerting.",
              "Complex event processing (CEP) detects patterns across multiple events in a stream - the engine that powers fraud alerts, anomaly detection and operational triggers. A CEP query defines a pattern like 'three ATM withdrawals of over USD 500 in different cities within 10 minutes' and the engine evaluates every incoming event against the pattern, firing an alert when matched. Flink CEP, Esper and Siddhi are typical CEP engines. The latency budget is tight: a fraud alert must fire before the transaction completes, often under 100 milliseconds from event to alert.",
              "A worked fraud-detection flow illustrates the chain. A bank's ATM withdrawals stream into a Kafka topic at 50,000 events per second. Spark Structured Streaming reads the topic, joins each event to a reference table of customer baseline behaviour (avg withdrawal, usual cities), and writes enriched events to a Flink CEP engine. The CEP pattern 'three withdrawals over USD 500 in three different cities within 10 minutes' matches a card currently making withdrawals in Mumbai, Delhi and Bangalore - the engine fires an alert in 80 milliseconds, the card is blocked, and the customer is called. The same stream also feeds a near-real-time dashboard of withdrawal volume by city, refreshed every 30 seconds - batch and real-time in one platform.",
            ],
            bullets: [
              "Lambda: batch layer (warehouse, accurate) + speed layer (streaming, approximate); serving layer merges.",
              "Kappa: one streaming pipeline for both real-time and historical reprocessing.",
              "Kafka: distributed log with topics, partitions, replication; producers write, consumers subscribe.",
              "Stream processors: Spark Structured Streaming, Flink, Kafka Streams.",
              "Window types: tumbling (fixed, non-overlapping), sliding (overlapping), session (gap-based).",
              "CEP pattern example: 'three ATM withdrawals > USD 500 in different cities within 10 minutes'.",
              "CEP engines: Flink CEP, Esper, Siddhi; latency budget under 100 ms for fraud alerts.",
              "Worked bank: 50k ATM events/sec -> Kafka -> Spark enrich -> Flink CEP -> alert in 80 ms.",
            ],
            codeExample: {
              language: "python",
              caption: "Spark Structured Streaming tumbling-window aggregation (Python).",
              code:
                "from pyspark.sql import SparkSession\n" +
                "from pyspark.sql.functions import window, col, sum as ssum\n" +
                "spark = SparkSession.builder.appName('realtimeBI').getOrCreate()\n" +
                "# stream of ATM withdrawals from Kafka topic 'atm_withdrawals'\n" +
                "raw = (spark.readStream.format('kafka')\n" +
                "       .option('kafka.bootstrap.servers','localhost:9092')\n" +
                "       .option('subscribe','atm_withdrawals').load())\n" +
                "txns = raw.selectExpr(\"CAST(value AS STRING) AS json\")\n" +
                "# assume parsed columns: card_id, amount, city, ts\n" +
                "# tumbling 10-minute window, withdrawal amount by city\n" +
                "agg = (txns.groupBy(window(col('ts'), '10 minutes'), col('city'))\n" +
                "             .agg(ssum('amount').alias('total_amount'))\n" +
                "             .orderBy('window'))\n" +
                "query = (agg.writeStream.outputMode('complete')\n" +
                "         .format('console').option('truncate','false').start())\n" +
                "query.awaitTermination(timeout=60)\n" +
                "# CEP pattern (Flink CEP) pseudo: within 10 min, 3 withdrawals > USD 500\n" +
                "# in 3 different cities -> fire fraud alert in < 100 ms",
            },
            diagram: {
              kind: "flow",
              title: "Real-time BI flow from event to alert",
              caption:
                "Kafka topic to stream processor to CEP engine to alert, with a parallel dashboard sink.",
              steps: [
                { label: "Event source (ATM)", note: "50,000 events/sec to Kafka" },
                { label: "Kafka topic", note: "partitioned, replicated log" },
                { label: "Spark Structured Streaming", note: "enrich with customer baseline" },
                { label: "Flink CEP engine", note: "pattern match in < 100 ms" },
                { label: "Alert + dashboard sink", note: "card blocked; city dashboard refresh 30s" },
              ],
            },
            callout: {
              type: "exam",
              title: "Lambda vs kappa with a worked fraud example",
              body: "A 7-mark real-time BI question rewards the lambda/kappa contrast plus a worked fraud flow: 50k events/sec to Kafka, Spark enriches, Flink CEP fires an alert in 80 ms, card blocked. State the latency budget (under 100 ms for alerting, seconds for dashboards) and the CEP pattern by name. The worked numbers (50k/sec, 80 ms) are what lift the answer from theory to practice.",
            },
            keyTerms: [
              { term: "Lambda architecture", definition: "Batch layer (warehouse) plus speed layer (streaming); serving layer merges, preferring batch when available." },
              { term: "Kappa architecture", definition: "Single streaming pipeline for both real-time and historical reprocessing; requires long log retention." },
              { term: "Apache Kafka", definition: "Distributed log with topics, partitions and replication; producers write events, consumers subscribe." },
              { term: "Complex event processing (CEP)", definition: "Engine that detects patterns across multiple events in a stream, e.g. three ATM withdrawals in three cities in 10 minutes." },
            ],
            examQuestions: [
              {
                q: "Contrast lambda and kappa real-time BI architectures. Describe the role of Kafka, a stream processor and a CEP engine, and trace a worked credit-card fraud detection flow with latency targets.",
                marks: 7,
                outline: [
                  "Lambda: batch layer (warehouse) + speed layer (streaming); serving layer merges, prefers batch.",
                  "Kappa: single streaming pipeline for both real-time and historical reprocessing.",
                  "Kafka: distributed log; producers write topics, consumers subscribe; partitioned and replicated.",
                  "Stream processor: Spark Structured Streaming or Flink; windowed aggregation.",
                  "CEP engine: Flink CEP, Esper, Siddhi; pattern match like 'three withdrawals > USD 500 in 3 cities in 10 minutes'.",
                  "Worked bank: 50,000 ATM events/sec -> Kafka -> Spark enrich -> Flink CEP -> alert in 80 ms; card blocked.",
                  "Latency targets: under 100 ms for alerts, seconds for dashboards, 30s refresh for city dashboard.",
                ],
              },
              {
                q: "What is a tumbling window in stream processing?",
                marks: 2,
              },
              {
                q: "Give two reasons a bank might choose lambda over kappa for real-time BI.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Mobile BI and implementation strategy",
            body: [
              "Mobile BI delivers dashboards and alerts to smartphones and tablets, extending the analyst's reach beyond the desktop. Mobile design principles differ from desktop: responsive layouts that adapt to portrait and landscape; large tap targets (44 x 44 px minimum) for finger interaction; push alerts for thresholds breached (a regional manager gets a push when daily sales fall below 80% of target); offline tiles cached for review without connectivity (a regional manager on a flight reviews the morning KPIs offline). Power BI Mobile, Tableau Mobile and custom apps from MicroStrategy and SAS are the typical delivery vehicles.",
              "Mobile BI shines for operational and tactical dashboards. A store manager opens the morning dashboard on the phone before leaving home - the day's opening stock, the previous day's sales vs target, the staff rota gaps - and acts before reaching the store. A field service engineer receives a push alert when a machine sensor crosses a threshold, with a drill-down to the machine's history and a 'dispatch technician' button. A regional manager on a multi-city tour reviews each store's KPI delta on the phone between flights, with a 'flag for follow-up' action that creates a task in the manager's calendar.",
              "BI implementation is a multi-month programme, not a project. A standard roadmap runs: assess (current state, pain points, sponsorship, capability maturity), design (target architecture, dimensional model, tool selection), pilot (one subject area, 90 days, prove value), scale (extend to two or three more subject areas, deploy enterprise-wide), and optimize (refresh automation, governance, training, adoption metrics). The pilot-first principle is the most important: deliver one subject area in 90 days, prove the ROI to the sponsor, and only then scale. Programmes that skip the pilot and try to deliver enterprise BI in one go usually fail.",
              "A worked mobile BI plus implementation case shows the chain end-to-end. A retailer kicks off a BI programme with a CFO sponsor. The assess phase (4 weeks) interviews 20 managers and surfaces 40 prioritised questions. The design phase (3 weeks) selects Power BI as the platform and a retail star schema as the model. The pilot phase (90 days) delivers the sales subject area - dashboards answering the top 15 questions, mobile views for store managers, push alerts for daily sales vs target. Adoption is 80 weekly active users after 90 days. The scale phase (next 9 months) adds inventory and customer subject areas; adoption reaches 250. The optimize phase (ongoing) automates refresh, publishes governance, trains users, and reports weekly active users to the board - the same metric that proved the pilot's ROI.",
            ],
            bullets: [
              "Mobile BI: responsive layouts, large tap targets, push alerts, offline tiles.",
              "Delivery vehicles: Power BI Mobile, Tableau Mobile, MicroStrategy, SAS mobile apps.",
              "Best fit: operational and tactical dashboards for managers on the move.",
              "Implementation roadmap: assess -> design -> pilot -> scale -> optimize.",
              "Pilot-first principle: deliver one subject area in 90 days, prove ROI, then scale.",
              "Programmes that skip the pilot and try enterprise BI in one go usually fail.",
              "Worked retailer: 4-week assess, 3-week design, 90-day pilot (sales), 9-month scale (inventory+customer).",
              "Adoption metric: weekly active users - 80 after pilot, 250 after scale, reported to the board.",
            ],
            table: {
              caption: "BI implementation roadmap phases with duration and outcome.",
              headers: ["Phase", "Duration", "Key activity", "Outcome"],
              rows: [
                ["Assess", "4 weeks", "Interview 20 managers, surface 40 questions", "Sponsor + scope"],
                ["Design", "3 weeks", "Select Power BI, design star schema", "Architecture blueprint"],
                ["Pilot", "90 days", "Deliver sales subject area, mobile + alerts", "15 questions answered, 80 WAU"],
                ["Scale", "9 months", "Add inventory and customer subjects", "250 WAU"],
                ["Optimize", "Ongoing", "Automate refresh, governance, training", "Board-level adoption metric"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "BI implementation roadmap pyramid",
              caption:
                "Broad ongoing optimize base, focused 90-day pilot tip - pilot-first is the discipline.",
              tiers: [
                { label: "Assess + Design (4 + 3 weeks)", note: "scope, sponsor, architecture" },
                { label: "Pilot (90 days)", note: "one subject area, prove ROI" },
                { label: "Scale (9 months)", note: "extend to 3+ subject areas" },
                { label: "Optimize (ongoing)", note: "governance, training, adoption metrics" },
              ],
            },
            callout: {
              type: "tip",
              title: "Pilot-first is the discipline examiners reward",
              body: "A 7-mark implementation question must state pilot-first: deliver one subject area in 90 days, prove ROI, then scale. Programmes that try enterprise BI in one go usually fail. Pair the principle with the worked retailer timeline (4-week assess, 3-week design, 90-day pilot, 9-month scale, ongoing optimize) and the adoption metric (weekly active users).",
            },
            keyTerms: [
              { term: "Mobile BI", definition: "BI delivered to smartphones and tablets with responsive layouts, push alerts and offline tiles." },
              { term: "Implementation roadmap", definition: "Five-phase programme: assess, design, pilot, scale, optimize." },
              { term: "Pilot-first", definition: "Principle of delivering one subject area in 90 days to prove ROI before scaling enterprise-wide." },
              { term: "Adoption metric", definition: "Weekly active dashboard users; the practical test of whether the BI programme is paying back." },
            ],
            examQuestions: [
              {
                q: "Describe mobile BI design principles and the BI implementation roadmap. State the pilot-first principle and trace a worked retailer programme from assess to optimize, including the adoption metric reported to the board.",
                marks: 7,
                outline: [
                  "Mobile BI: responsive layouts, large tap targets (44x44 px), push alerts, offline tiles.",
                  "Best fit: operational and tactical dashboards for managers on the move.",
                  "Roadmap: assess, design, pilot, scale, optimize.",
                  "Pilot-first: deliver one subject area in 90 days, prove ROI, then scale.",
                  "Programmes that try enterprise BI in one go usually fail.",
                  "Worked retailer: 4-week assess (40 questions), 3-week design (Power BI + star schema), 90-day pilot (sales), 9-month scale (inventory + customer).",
                  "Adoption metric: weekly active users - 80 after pilot, 250 after scale, reported to the board.",
                ],
              },
              {
                q: "State two design principles specific to mobile BI.",
                marks: 2,
              },
              {
                q: "List the five phases of the BI implementation roadmap in order.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Failure factors, ethics and privacy",
            body: [
              "BI programmes fail for predictable reasons and the exam rewards the named list. Data quality failure tops the list: a warehouse loaded with dirty data becomes a 'swamp' that users stop trusting, and adoption collapses. Weak or absent executive sponsorship is the next most common - without a CXO to unblock scope disputes and protect the budget, the programme dies a slow death of competing priorities. Scope creep - trying to deliver every subject area at once rather than piloting one - exhausts the team and produces nothing usable. No adoption training - building dashboards no one knows how to read - leaves the programme with low usage and a poor ROI story.",
              "Ethics and privacy have moved from optional to mandatory. Personal data is regulated by GDPR in the EU (and UK GDPR), by the DPDP Act 2023 in India, by CCPA in California, and by sectoral laws like HIPAA in US healthcare. BI programmes must: tag PII columns with sensitivity labels, enforce role-based access and row-level security, anonymise or pseudonymise data used for analytics where possible, and maintain an auditable lineage of who accessed what. A breach is now a board-level incident with financial and reputational consequences - the Equifax 2017 breach affected 147 million consumers and cost over USD 1.4 billion.",
              "Bias in BI models is a parallel ethical risk. A churn model trained on historical data may discriminate against a demographic underrepresented in the training set; a credit risk model may perpetuate historical redlining. Mitigations include: audit training data for demographic balance, measure model error per subgroup (not just overall accuracy), include fairness constraints in model training, and provide explainability (SHAP values, decision-tree paths) so a rejected applicant can be told why. The BI team's responsibility is to flag a biased model before deployment, not to discover it after a regulator complaint.",
              "A worked ethics regime illustrates the practice. A retailer's BI programme publishes a 'responsible BI' policy: all customer data is tagged PII and access is RLS-enforced by region; the churn model is audited quarterly for demographic parity, with subgroup error rates published in the model card; rejected-targeting decisions include a one-sentence explanation generated from the decision tree; the data steward signs off every new dataset before publication. The programme reports quarterly to an internal ethics committee and annually to the board - the same governance cadence as data quality. The pattern - tag, enforce, audit, explain - is the ethics template the exam rewards.",
            ],
            bullets: [
              "Failure factor 1: data quality - dirty warehouse becomes a 'swamp', adoption collapses.",
              "Failure factor 2: weak or absent executive sponsorship - programme dies of competing priorities.",
              "Failure factor 3: scope creep - trying every subject area at once produces nothing usable.",
              "Failure factor 4: no adoption training - dashboards no one knows how to read.",
              "Regulations: GDPR (EU), DPDP Act 2023 (India), CCPA (California), HIPAA (US healthcare).",
              "PII tagged, RLS-enforced, anonymised where possible, lineage auditable.",
              "Equifax 2017 breach: 147M consumers, USD 1.4B+ cost - cited as a cautionary case.",
              "Bias mitigation: audit training data, subgroup error rates, fairness constraints, explainability (SHAP).",
            ],
            table: {
              caption: "BI failure factors and their mitigations.",
              headers: ["Failure factor", "Symptom", "Mitigation"],
              rows: [
                ["Data quality", "Users stop trusting the warehouse", "Nightly checks gate publish; steward signs off"],
                ["Weak sponsorship", "Programme loses budget and scope", "CXO sponsor from day 1; quarterly board reviews"],
                ["Scope creep", "Nothing ships in 12 months", "Pilot-first: one subject in 90 days"],
                ["No adoption training", "Dashboards unused", "Role-based training, certified super-users"],
                ["Ethics breach", "Regulator fine, reputational damage", "PII tagging, RLS, audit, explainability"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Failure factor severity by likelihood and impact",
              caption:
                "Quadrants by likelihood (low vs high) and impact (low vs high); top-right needs active mitigation.",
              axes: { x: "Likelihood: low (left) vs high (right)", y: "Impact: high (top) vs low (bottom)" },
              quadrants: [
                { label: "Top-left: Ethics breach", note: "low likelihood, high impact - mitigations still required" },
                { label: "Top-right: Data quality + weak sponsorship", note: "high likelihood, high impact - mitigate actively" },
                { label: "Bottom-left: Tool mismatch", note: "low likelihood, low impact" },
                { label: "Bottom-right: Scope creep + no training", note: "high likelihood, low-medium impact" },
              ],
            },
            callout: {
              type: "warning",
              title: "Always name the regulations by statute",
              body: "An ethics answer that names GDPR, the DPDP Act 2023 (India), CCPA and HIPAA by statute earns more marks than a generic 'privacy laws' answer. Pair the statutes with a worked breach case (Equifax 2017, 147M consumers, USD 1.4B+ cost) and the four mitigations: tag PII, enforce RLS, audit for bias, explain decisions. Statute names signal real understanding.",
            },
            keyTerms: [
              { term: "BI failure factors", definition: "Predictable failure causes: data quality, weak sponsorship, scope creep, no adoption training." },
              { term: "GDPR", definition: "EU General Data Protection Regulation governing personal data; counterpart in India is the DPDP Act 2023." },
              { term: "Model bias", definition: "Systematic error against a demographic in a BI model; mitigated by training-data audit, subgroup error rates and fairness constraints." },
              { term: "Explainability", definition: "Ability to tell a stakeholder why a model produced a decision, e.g. via SHAP values or decision-tree paths." },
            ],
            examQuestions: [
              {
                q: "List four failure factors for BI programmes with a mitigation for each. State the privacy regulations governing BI in India and the EU, and describe a worked ethics regime covering PII tagging, RLS, bias audit and explainability.",
                marks: 7,
                outline: [
                  "Failure factor 1: data quality - mitigate with nightly checks gating publish and steward sign-off.",
                  "Failure factor 2: weak sponsorship - mitigate with a CXO sponsor from day 1 and quarterly board reviews.",
                  "Failure factor 3: scope creep - mitigate with pilot-first delivery of one subject in 90 days.",
                  "Failure factor 4: no adoption training - mitigate with role-based training and certified super-users.",
                  "Regulations: GDPR (EU), DPDP Act 2023 (India), CCPA (California), HIPAA (US healthcare).",
                  "Worked ethics regime: tag PII columns, enforce RLS, audit churn model for demographic parity, explain decisions.",
                  "Cite Equifax 2017 (147M consumers, USD 1.4B+ cost) as a cautionary breach case.",
                ],
              },
              {
                q: "Name two Indian and international regulations governing personal data in BI.",
                marks: 2,
              },
              {
                q: "State two techniques for mitigating model bias in BI.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.6",
            title: "Case studies - retail, banking and airline BI",
            body: [
              "Three case studies anchor the subject in real implementations. Retail basket analysis: Walmart's Retail Link system, shared with suppliers since 1991, gave suppliers near-real-time shelf data and reduced out-of-stocks by an estimated 10-30%. The famous (if apocryphal) 'beer and diapers' story - Friday evening shoppers buying both - illustrates how association rule mining surfaces unexpected co-purchase patterns; the practical action is end-cap placement and cross-merchandising. Tesco's Clubcard, launched with Dunnhumby in 1995, used loyalty-card analytics to segment shoppers and tailor offers, contributing to a documented sales growth during the late 1990s.",
              "Banking risk dashboard: JPMorgan Chase operates a real-time credit risk monitoring platform that aggregates exposure across trading desks, geographies and counterparties, with limits enforced automatically. The dashboard shows current exposure vs limit by counterparty and triggers an alert when exposure exceeds 80% of limit. HSBC deployed an anti-money-laundering (AML) analytics platform that scores transactions on a risk model and escalates the top 0.5% for investigator review - reducing false positives versus the older rules-based system by an estimated 60%. Capital One's credit-card pre-approval models, built on demographic and behavioural data, became a textbook data-driven customer-acquisition case.",
              "Airline operations BI: American Airlines' Sabre system, dating from the 1960s, was an early BI-style analytics platform for yield management - pricing seats dynamically based on demand forecasts. Modern airline ops BI integrates flight status, crew schedules, maintenance logs, weather and demand into a real-time dashboard that predicts delays (a flight is 70% likely to be delayed if the inbound aircraft is late and the crew connection window is under 30 minutes), recommends crew reassignments, and optimises fuel uplift. Southwest's operations control centre uses real-time BI to recover from disruptions - rerouting aircraft and rebooking passengers within minutes of a delay.",
              "The three cases share a pattern. Each starts with a clear business question (which products co-purchase; what is our exposure; will this flight be delayed), each integrates many data sources (POS and weather; trading desks and counterparty limits; flight status and crew schedules), each delivers insight to a specific user at a specific moment (a category manager planning end-caps; a risk officer monitoring exposure; an ops controller recovering from a delay), and each measures ROI in business terms (revenue lift, exposure avoided, delay minutes saved). The pattern - question, integration, delivery, ROI - is the cross-industry BI template the exam rewards.",
            ],
            bullets: [
              "Retail case: Walmart Retail Link (1991) cut out-of-stocks 10-30%; Tesco Clubcard (1995) drove loyalty analytics.",
              "'Beer and diapers' (apocryphal) illustrates association rule mining surfacing co-purchase patterns.",
              "Banking case: JPMorgan real-time credit risk dashboard with exposure vs limit by counterparty.",
              "HSBC AML analytics cut false positives ~60% versus older rules-based system.",
              "Capital One credit-card pre-approval models = textbook data-driven acquisition.",
              "Airline case: American Sabre (1960s) for yield management; modern delay prediction integrates weather + crew.",
              "Southwest ops control uses real-time BI to reroute aircraft and rebook passengers within minutes.",
              "Cross-industry pattern: question -> integration -> delivery to specific user -> ROI in business terms.",
            ],
            table: {
              caption: "Three BI case studies compared on question, data sources, delivery and ROI.",
              headers: ["Case", "Business question", "Data sources", "Delivery", "ROI"],
              rows: [
                ["Walmart Retail Link", "Which SKUs are out of stock?", "POS, supplier inventory", "Supplier portal", "Out-of-stocks cut 10-30%"],
                ["JPMorgan risk", "What is our exposure by counterparty?", "Trading desks, counterparty limits", "Risk officer dashboard", "Auto-enforced limits, breaches avoided"],
                ["HSBC AML", "Which transactions are suspicious?", "Transaction stream, customer profiles", "Investigator queue", "False positives cut ~60%"],
                ["Airline ops BI", "Will this flight be delayed?", "Flight status, crew, weather, demand", "Ops controller dashboard", "Delay minutes saved, faster recovery"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Three case studies branching from a common BI pattern",
              caption:
                "Same pattern (question -> integration -> delivery -> ROI) across three industries.",
              start: "Common BI pattern: question, integration, delivery, ROI",
              branches: [
                { label: "Retail - Walmart/Tesco", outcome: "Basket analysis + loyalty -> end-caps + tailored offers", good: true },
                { label: "Banking - JPMorgan/HSBC", outcome: "Risk exposure + AML scoring -> limit enforcement + investigator queue", good: true },
                { label: "Airline - American/Southwest", outcome: "Delay prediction + crew reassignment -> minutes saved", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Cite the case studies by company and year",
              body: "A 7-mark case-study question rewards specific companies and years: Walmart Retail Link 1991, Tesco Clubcard 1995, JPMorgan real-time risk, HSBC AML ~60% false-positive cut, American Sabre 1960s, Southwest ops recovery. Vague 'a retailer used BI' answers earn partial credit only. The numbers (10-30% out-of-stock cut, 60% false-positive reduction) are the marks.",
            },
            keyTerms: [
              { term: "Retail Link", definition: "Walmart's supplier-facing BI platform launched in 1991, giving suppliers near-real-time shelf data and cutting out-of-stocks." },
              { term: "Credit risk dashboard", definition: "Real-time BI aggregating exposure by counterparty, geography and desk, with automated limit enforcement." },
              { term: "Yield management", definition: "Airline practice of dynamically pricing seats based on demand forecasts, pioneered by American's Sabre system." },
              { term: "Cross-industry BI pattern", definition: "Question -> integration -> delivery to a specific user at a specific moment -> ROI in business terms." },
            ],
            examQuestions: [
              {
                q: "Present three BI case studies - retail (Walmart, Tesco), banking (JPMorgan, HSBC) and airline (American, Southwest). For each, state the question, the data sources, the delivery and the ROI. Extract the cross-industry BI pattern common to all three.",
                marks: 7,
                outline: [
                  "Retail: Walmart Retail Link (1991) - question 'which SKUs out of stock', POS + supplier inventory, supplier portal, out-of-stocks cut 10-30%.",
                  "Retail: Tesco Clubcard (1995) with Dunnhumby - loyalty analytics segmenting shoppers for tailored offers.",
                  "Banking: JPMorgan real-time credit risk dashboard - exposure by counterparty vs limit, auto-enforced.",
                  "Banking: HSBC AML analytics scores transactions, cuts false positives ~60% vs rules-based system.",
                  "Airline: American Sabre (1960s) for yield management; modern delay prediction integrates weather + crew.",
                  "Airline: Southwest ops control uses real-time BI to reroute aircraft and rebook within minutes.",
                  "Cross-industry pattern: question -> integration -> delivery to a specific user at a moment -> ROI in business terms.",
                ],
              },
              {
                q: "Name two retail companies famous for early BI deployments with approximate years.",
                marks: 2,
              },
              {
                q: "State the four steps of the cross-industry BI pattern.",
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
      heading: "Exam weight map",
      weightedTopics: [
        { topic: "Star and snowflake schemas with worked retail schema", weight: "10-12 marks", note: "Draw the star, write the DDL, name the grain - almost guaranteed in Unit II." },
        { topic: "OLAP operations (roll-up, drill-down, slice, dice, pivot) on a sales cube", weight: "8-10 marks", note: "Define each operation with a worked cell from the same cube." },
        { topic: "Apriori with support, confidence, lift on a 6-transaction basket", weight: "8-10 marks", note: "Compute all three metrics on the same numbers - the lift calculation is the differentiator." },
        { topic: "ETL process and SCD Types 1, 2 and 3", weight: "8-10 marks", note: "Track a customer move under each type; state surrogate keys for Type 2." },
        { topic: "BI architecture (sources -> ETL -> DW -> analytics -> delivery)", weight: "6-8 marks", note: "Five-layer pipe with concrete labels per layer." },
        { topic: "Decision tree (churn) and k-means (segmentation) worked iterations", weight: "6-8 marks", note: "Show both iterations of k-means with updated centroids and convergence check." },
        { topic: "Visualization principles and chart selection", weight: "6-8 marks", note: "Bar y-axis from zero; chart by question; color-blind safe palette." },
        { topic: "Inmon vs Kimball architecture comparison", weight: "4-6 marks", note: "Top-down normalised vs bottom-up conformed marts; mention hybrid pattern." },
        { topic: "BI implementation roadmap (pilot-first) and failure factors", weight: "4-6 marks", note: "Five phases; pilot in 90 days; four named failure factors." },
        { topic: "Big data lakehouse and real-time BI (lambda/kappa)", weight: "4-6 marks", note: "Name Delta Lake/Iceberg; cite a worked fraud flow with latency budget." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - BI foundations", tasks: ["Decision levels pyramid and data-to-decision pipeline", "Five-layer BI architecture with worked retail example", "OLTP vs OLAP compare table and tool landscape matrix"] },
        { week: "Week 2", focus: "Unit II - data warehousing", tasks: ["Inmon four characteristics with worked retail example", "Star schema DDL and Inmon vs Kimball comparison", "Grain statement and SCD Types 1, 2, 3 with customer 1001 move"] },
        { week: "Week 3", focus: "Unit II/III - ETL, OLAP, mining", tasks: ["ETL pipeline with staging and surrogate key lookups", "Five OLAP operations on a worked sales cube (roll-up, drill-down, slice, dice, pivot)", "MOLAP/ROLAP/HOLAP selection with cube explosion"] },
        { week: "Week 4", focus: "Unit III - data mining algorithms", tasks: ["Decision tree for churn with Gini splits", "k-means on four customers with two iterations shown", "Apriori on 6-transaction basket with support/confidence/lift computed"] },
        { week: "Week 5", focus: "Unit IV - reporting and visualization", tasks: ["Report types (canned, ad-hoc, scorecard) mapped to decision levels", "Visualization principles, chart selection 2x2, color and honesty rules", "Dashboard layout (strategic, tactical, operational) and Excel-to-Power-BI escalator"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Text analytics pipeline and big data lakehouse", "Real-time BI lambda/kappa with worked fraud flow", "Two full practice papers under exam timing, focusing on worked numbers"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Redraw the five-layer BI architecture pipe (sources, ETL, DW, analytics, delivery) with one concrete label per layer - this single diagram appears in multiple questions.",
        "Memorise the star schema DDL (sales_fact with 5 keys, 2 measures) and the grain statement - both are guaranteed marks in Unit II.",
        "Re-compute the Apriori worked example by hand: support(bread, milk) = 4/6, confidence(bread -> milk) = 100%, lift = 1.5 - the lift calculation is the differentiator.",
        "Walk through the k-means 2-iteration example once more: initial centroids, first assignment, updated centroids, second assignment, convergence.",
        "List the five OLAP operations (roll-up, drill-down, slice, dice, pivot) with one worked cell each from the sales cube.",
        "List the four failure factors and four ethics mitigations (tag, enforce, audit, explain) - both are short-answer gold.",
        "Time-box: 2-mark questions in 3-4 minutes, 3-mark in 5-6 minutes, 7-mark in 14-18 minutes; keep the last 10 minutes for the verification pass.",
        "Carry two coloured pens so the architecture diagrams and cube cells stand out - examiners reward legible diagrams.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Open every 7-mark answer with a verbatim definition (BI, DW, OLAP, KPI) - the definition lines are marked separately from the working.",
        "For architecture questions, draw the five-layer pipe first and label arrows with verbs (extract, transform, load, query, render).",
        "For OLAP questions, define each operation in one sentence and give one worked cell from the same retail cube - consistency earns the marks.",
        "For Apriori, write all counts on the same basket before computing support, confidence and lift - a partial count loses the lift mark.",
        "For k-means, label each iteration explicitly (initial, iter 1, iter 2, converged) and show the updated centroids.",
        "For visualization questions, name the rule by name (y-axis from zero, color-blind safe palette, Tufte's data-ink ratio) - bare advice gets fewer marks than named principles.",
        "For implementation and case-study questions, cite companies and years (Walmart 1991, Tesco 1995, JPMorgan, HSBC, American Sabre, Southwest) - vague answers earn partial credit only.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Quoting support and confidence on different baskets than the lift calculation - use one basket throughout.",
        "Forgetting that SCD Type 2 needs surrogate keys, not natural keys - the fact joins to the surrogate current at the transaction date.",
        "Loading facts before dimensions in the ETL pipeline - dimensions must load first so surrogate keys exist.",
        "Writing 'pie chart for 8 categories' as an acceptable visualization - it is the classic mistake; use a tree map.",
        "Quoting 'y-axis from zero' for line charts - the rule applies to bar charts specifically, not lines (lines may use a non-zero baseline with annotation).",
        "Mixing up Inmon (top-down normalised) and Kimball (bottom-up conformed marts) - the direction and starting layer are the distinguishing marks.",
        "Counting only one iteration for k-means - the question expects both iterations with updated centroids and a convergence check.",
        "Forgetting to name the lakehouse transaction layers (Delta Lake, Iceberg, Hudi) - 'data lake' alone is partial credit, not the lakehouse.",
      ],
    },
  ],
};
