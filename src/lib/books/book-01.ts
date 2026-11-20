/**
 * Book 01 — Master Databases.
 *
 * Chapters 1-3 are copied verbatim from the golden reference (_reference.ts).
 * Chapters 4-14 were expanded to the same format and quality bar.
 */
import type { Book } from "../types";

export const book01: Book = {
  id: "book-01",
  number: 1,
  title: "Master Databases",
  subtitle: "Book 01 of 13 · The Effortless Series",
  tagline:
    "The full database survival kit: SQL and NoSQL, PostgreSQL and MongoDB, schema design, indexes, transactions, locking, pooling, replicas, sharding, query plans, zero-downtime migrations and verified backups.",
  description:
    "Data outlives code. Services are rebuilt in an afternoon; a corrupted table with no verified backup can end a company. This book is how you touch a database like someone who has been paged for it.",
  layer: "Store & protect data",
  layerQuestion: "Where does truth live, and how do we keep it private?",
  accentColor: "#5dd9c1",
  emoji: "01",
  months: "Months 1–2",
  chapters: [
    {
      number: 1,
      title: "SQL vs NoSQL",
      summary:
        "Everyone told me to pick a side. Twenty years later the honest answer is: the data picks the side for you, if you listen to it.",
      keyIdea:
        "SQL and NoSQL are not competitors; they are answers to different questions. The rule that keeps this sane: exactly one system is the source of truth for any given fact.",
      deepDive: [
        {
          heading: "The question behind the question",
          paragraphs: [
            "When someone asks 'SQL or NoSQL?', they are really asking three smaller questions. First: is my access pattern entity-shaped (rows you join and filter) or aggregate-shaped (documents you fetch whole by key)? Second: which invariants must the database enforce for me — uniqueness, foreign keys, constraints — and which will my application code enforce? Third: how does this system need to fail? A relational database fails toward rejecting bad writes; most document stores fail toward accepting them and reconciling later. Those are different bets, and neither is free.",
            "The mistake is choosing by fashion or by résumé. In 2026 the honest default is still PostgreSQL: it handles JSON documents natively, scales reads with replicas, and only hands you real problems past a scale most products never reach. Choose a document store when the shape of the data genuinely varies per record and you never need to join across records — event payloads, content drafts, device telemetry. Choose key-value stores when the access pattern is a pure dictionary: sessions, feature flags, rate-limit counters.",
          ],
        },
        {
          heading: "The one-source-of-truth rule",
          paragraphs: [
            "Systems fail not because they picked the wrong database, but because the same fact lived in two databases with no referee. The order total in Postgres said 42.00; the copy in the search index said 41.50; which one does the invoice print? Nobody decided. The rule: for any given fact, one system is authoritative, everything else is a rebuildable projection — a cache, an index, a report. If you can afford to drop it and rebuild it from the source, it is a projection. If dropping it loses money, it is the source, and it earns transactional guarantees.",
            "This rule is also how you stay calm in design reviews. You do not argue 'Mongo vs Postgres' as identity; you ask 'which facts live here, and who is the referee when copies disagree?' A polyglot system — Postgres for truth, Elasticsearch for search, Redis for speed — is perfectly healthy as long as every arrow of data flow has one direction of authority and a documented rebuild path.",
          ],
        },
        {
          heading: "What this choice costs later",
          paragraphs: [
            "Every database is a trade between writes, reads, consistency and operational simplicity — you pay somewhere. Relational pays with vertical scale and careful migrations. Document stores pay with joins done in application code, which grow like ivy across your services. Key-value stores pay with 'no secondary access pattern': the day someone asks 'list all sessions started after Tuesday', the answer is a scan or a new system.",
            "So make the choice reversible where you can. Keep access patterns behind repository interfaces, keep heavy JSON in typed columns, and write down, in one paragraph per table or collection, why it is shaped the way it is. Six months later that paragraph is the difference between a five-minute decision and a two-week argument.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Which database holds this data?",
        caption:
          "Answer the access-pattern questions in order; stop at the first honest match.",
        start: "A new kind of data",
        branches: [
          {
            label: "Needs joins, constraints, ad-hoc queries?",
            outcome: "PostgreSQL — relational, the default",
            good: true,
          },
          {
            label: "Whole documents by key, shape varies per record?",
            outcome: "Document store (MongoDB)",
            good: true,
          },
          {
            label: "Pure key lookup, no secondary patterns?",
            outcome: "Key-value store (Redis / DynamoDB)",
            good: true,
          },
          {
            label: "Picked by hype, not access pattern",
            outcome: "You will migrate twice and own both systems",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "The same fact can live in a typed column and a flexible document column — Postgres does both.",
        code: [
          "CREATE TABLE orders (",
          "  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
          "  customer_id BIGINT NOT NULL REFERENCES customers(id),",
          "  status      order_status NOT NULL DEFAULT 'pending',",
          "  total_cents BIGINT NOT NULL CHECK (total_cents >= 0),",
          "  -- flexible part: queryable JSON for attributes that vary per order",
          "  attributes  JSONB NOT NULL DEFAULT '{}',",
          "  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()",
          ");",
          "",
          "CREATE INDEX idx_orders_customer_created",
          "  ON orders (customer_id, created_at DESC);",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Choosing the database before writing down the top five access patterns.",
          fix: "Write the queries first — actual shapes, with expected frequency. The data picks the side for you when you listen to it.",
        },
        {
          mistake:
            "Keeping the same fact authoritative in two systems 'just in case'.",
          fix: "Name the source of truth per fact in a one-page doc. Everything else must be rebuildable from it — or it does not get to exist.",
        },
        {
          mistake: "Treating 'schemaless' as 'no schema'.",
          fix: "The schema moved into application code and became invisible. Document it: version every payload shape, validate on write.",
        },
        {
          mistake: "Worrying about sharding on day one.",
          fix: "Design one node well: indexes, pooling, transactions. Most systems that shard early did not need to; most that need it later wish they had kept one node longer.",
        },
      ],
      fieldChecklist: [
        "I have written the top five access patterns for this data, with read/write frequency per pattern.",
        "For every fact, I can name the one authoritative system and the rebuild path for its copies.",
        "I chose relational as the default and can articulate why any deviation beats that default.",
        "I know which invariants live in the database (constraints) versus application code — and why.",
        "My repository layer hides the storage engine behind interfaces, so the choice stays reversible.",
        "I have a one-paragraph 'why it is shaped this way' note for every table or collection.",
      ],
      keyTerms: [
        {
          term: "Source of truth",
          definition:
            "The single system whose value for a fact wins when copies disagree; everything else is a rebuildable projection.",
        },
        {
          term: "Access pattern",
          definition:
            "The concrete shape of one read or write your system performs — filters, sort, frequency — the real driver of every storage decision.",
        },
        {
          term: "Aggregate",
          definition:
            "A boundary of data that is always read and written as one unit; document stores make aggregates explicit, relational stores let you compose them.",
        },
        {
          term: "Polyglot persistence",
          definition:
            "Deliberately using several storage engines, each for the access pattern it serves best, with one authority per fact.",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you choose NoSQL over SQL?",
          a: "When the access pattern is aggregate-shaped — read and write whole documents by key — the schema evolves per record, and write volume outgrows one node. I still keep relational for anything touching money or needing ad-hoc joins.",
        },
        {
          q: "How do you keep a cache, a search index and the database from disagreeing?",
          a: "One direction of authority: the database is the source, caches and indexes are projections with a documented rebuild path. Writes flow from truth outward, and every projection answers the question 'if I deleted this, how would it be rebuilt?' If there is no answer, it is not a projection — it is a second truth, and that is the actual bug.",
        },
        {
          q: "A teammate wants to add MongoDB 'for speed'. How do you respond?",
          a: "I ask which query is slow and pull its EXPLAIN output. Nine times out of ten it is a missing index or an N+1, which no database change will fix. If there is a genuinely aggregate-shaped, high-write-volume workload, I scope it to that dataset — one source of truth, projections elsewhere — instead of re-platforming the whole system.",
        },
      ],
      quiz: [
        {
          question:
            "Your invoice total (in Postgres) disagrees with the search index copy. What went wrong at the design level?",
          options: [
            "The search index is too slow and should be replaced",
            "Two systems held the same fact with no named source of truth",
            "Postgres should have been replaced by a document store",
            "The invoice service has a timezone bug",
          ],
          answerIndex: 1,
          explanation:
            "The disagreement is not the bug — it is the symptom. The bug is that no one declared which system is authoritative for 'order total', so both copies believed they were right.",
        },
        {
          question:
            "Which access pattern is the strongest signal for a document store?",
          options: [
            "Ad-hoc reports joining five entities",
            "Ledger rows that must satisfy CHECK constraints",
            "Reading and writing whole records by key, where shape varies per record",
            "Global secondary-index lookups by arbitrary fields",
          ],
          answerIndex: 2,
          explanation:
            "Document stores shine when the unit of work is the whole aggregate fetched by key and records legitimately differ in shape. Joins, constraints and secondary indexes are where relational wins.",
        },
        {
          question: "What is the cheapest way to keep a storage choice reversible?",
          options: [
            "Run both databases in parallel from day one",
            "Hide access patterns behind repository interfaces",
            "Avoid writing any queries for six months",
            "Only use ORMs, never raw SQL",
          ],
          answerIndex: 1,
          explanation:
            "A repository boundary means the engine is an implementation detail. Changing storage becomes a refactor of one layer, not a rewrite of every call site.",
        },
      ],
    },
    {
      number: 2,
      title: "PostgreSQL",
      summary:
        "If I could only know one database deeply for the rest of my career, it would be this one. The default answer of the modern industry, and the default is correct.",
      keyIdea:
        "Boring is a superpower. WAL makes crash recovery possible; VACUUM reclaims dead rows; the query planner decides how every statement executes.",
      deepDive: [
        {
          heading: "Why the default is correct",
          paragraphs: [
            "PostgreSQL is the rare tool that is simultaneously a beginner's database and a bank's database. It gives you real transactions with configurable isolation, constraints the engine enforces, JSONB for when you need document-shaped data, full-text search, window functions, extensions like PostGIS and pgvector — one engine covering the access patterns of ninety percent of products. Every hour you invest in it compounds, because the skills transfer: every cloud offers managed Postgres, every language has first-class drivers, every ORM speaks its dialect fluently.",
            "In 2026 the ecosystem has consolidated further: Postgres derivatives power serverless platforms (Neon, Supabase), vector workloads (pgvector), time-series (TimescaleDB). Learning one engine deeply is now broader than learning 'Postgres' — it is learning the default substrate of the modern stack. That is what boring buys you: the bugs you hit have all been hit before, the answers are documented, and the edge cases have names.",
          ],
        },
        {
          heading: "The three mechanisms you must be able to explain",
          paragraphs: [
            "First, the WAL — the write-ahead log. Before any data page is modified, the change is appended to the log and flushed. That single design gives you crash recovery (replay the log since the last checkpoint), replication (ship the log to a standby), and point-in-time recovery (archive it). When someone says 'the database crashed and came back', WAL is the mechanism doing the resurrecting. Second, VACUUM: Postgres does not physically delete updated rows — it marks old row versions dead, and autovacuum reclaims them. When an update-heavy table bloats and queries slow down, the autovacuum tuning conversation is the fix, not 'let's add a cache'.",
            "Third, the query planner. Every statement is parsed, planned and executed; the planner uses statistics about your data to choose between an index scan and a sequential scan. It is usually right, and when it is wrong it is usually because the statistics are stale or your query confuses it. Everything in Chapter 11 flows from this mechanism: you cannot fix a slow query you cannot read a plan for.",
          ],
        },
        {
          heading: "Configuration that matters in the first week",
          paragraphs: [
            "Defaults are tuned for machines from another decade. Before your project earns real traffic, set four things deliberately: max_connections sized to your pool math (not 10,000), shared_buffers around a quarter of RAM on a dedicated box, a statement_timeout so runaway queries die instead of stacking up, and log_min_duration_statement to surface slow queries in week one instead of month six. Managed platforms expose these as parameters — learn what each one actually does; the console checkbox is not knowledge.",
            "Also verify, not assume, your durability settings: synchronous_commit and the backup schedule decide whether yesterday's work survives a crash. And on day one, before any real data: confirm you can restore. The restore test is Chapter 14's discipline, but the habit starts the week you create the database.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "A write, from top to bottom",
        caption: "Every layer below exists so the layer above can be fast and safe.",
        layers: [
          { label: "SQL interface", note: "parse, plan, execute" },
          { label: "Buffer cache", note: "hot pages in shared memory" },
          { label: "WAL", note: "append + fsync before data pages" },
          { label: "Data pages on disk", note: "tables, indexes, visibility map" },
          { label: "Backups / replicas", note: "WAL shipped outward" },
        ],
      },
      codeExample: {
        language: "sql",
        caption: "Four settings worth setting deliberately before real traffic.",
        code: [
          "-- Kill runaway queries instead of letting them stack up",
          "SET statement_timeout = '15s';",
          "",
          "-- Surface slow queries in the log from week one",
          "SET log_min_duration_statement = 500;  -- ms",
          "",
          "-- Pool math, not wishful thinking:",
          "-- app instances x pool size + ops headroom",
          "SET max_connections = 200;",
          "",
          "-- Confirm durability posture explicitly, never by default",
          "SHOW synchronous_commit;  -- 'on' = wait for WAL flush",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating max_connections as a scale knob and cranking it to 2,000.",
          fix: "Connections are memory-hungry processes. Size the pool per instance, keep the sum below the server limit, and use PgBouncer when instance count grows.",
        },
        {
          mistake: "Disabling autovacuum on a hot table because 'it uses resources'.",
          fix: "Autovacuum is load-bearing. If it is lagging, tune thresholds and cost limits per table — never switch it off.",
        },
        {
          mistake: "Adding an index and never checking whether the planner uses it.",
          fix: "EXPLAIN ANALYZE the real query after every index change. An unused index costs writes and teaches you nothing.",
        },
        {
          mistake: "Assuming managed = backed up.",
          fix: "Verify the backup window, retention and — the real test — perform one restore into a scratch instance this week.",
        },
      ],
      fieldChecklist: [
        "I can explain WAL, VACUUM and the query planner in one sentence each, from memory.",
        "statement_timeout, log_min_duration_statement and pool-sized max_connections are set deliberately.",
        "I have run EXPLAIN ANALYZE on this project's slowest query and can read every line of the plan.",
        "I have performed one real restore from backup into a scratch database.",
        "I know where this database's logs live and how to read slow-query entries.",
        "Autovacuum is enabled and I know when it last ran on my hottest table.",
      ],
      keyTerms: [
        {
          term: "WAL (write-ahead log)",
          definition:
            "The append-only log every change is written to before data pages are touched — the mechanism behind crash recovery, replication and PITR.",
        },
        {
          term: "MVCC",
          definition:
            "Multi-version concurrency control: readers and writers do not block each other because old row versions coexist until vacuumed.",
        },
        {
          term: "Dead tuple",
          definition:
            "A row version made obsolete by an update or delete; reclaimed by VACUUM. Dead-tuple buildup is table bloat.",
        },
        {
          term: "Query planner",
          definition:
            "The component that turns SQL into an execution plan using table statistics; the reason indexes sometimes get ignored.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through what happens when Postgres commits a transaction.",
          a: "Changes are applied to shared buffers, but before commit returns, the WAL record describing them is flushed to disk — that is the durability point. If the process dies mid-transaction, recovery replays WAL since the last checkpoint and uncommitted work is rolled back. Commit latency is therefore a disk-flush conversation, which is why batching small transactions matters.",
        },
        {
          q: "A table with heavy updates has gotten slow. What do you check first?",
          a: "Bloat and statistics. I check dead tuples and last-autovacuum time, look at table and index sizes versus row count, then run EXPLAIN ANALYZE on the hot query. Usually it is dead-tuple buildup confusing the planner or bloating scans — tune autovacuum for that table, rebuild the bloated index concurrently, and the latency falls without any new infrastructure.",
        },
        {
          q: "Why is Postgres your default choice?",
          a: "Because its failure modes are documented and its feature floor is high: real transactions, constraints, JSONB, full-text search, extensions like pgvector. Managed offerings everywhere, a huge hiring pool, and its skills transfer to every derivative. I pick exotic engines only when a measured access pattern demands it.",
        },
      ],
      quiz: [
        {
          question:
            "What single mechanism makes crash recovery, replication and point-in-time recovery possible in Postgres?",
          options: ["VACUUM", "The WAL", "The buffer cache", "pg_stat_statements"],
          answerIndex: 1,
          explanation:
            "Every change is logged to the WAL before data pages are modified. Recovery replays it, replicas receive it, PITR archives it. One mechanism, three features.",
        },
        {
          question:
            "Queries against a heavily-updated table got slower, row count unchanged. Best first move?",
          options: [
            "Add a read replica",
            "Put Redis in front",
            "Check dead tuples and when autovacuum last ran",
            "Upgrade to a bigger instance",
          ],
          answerIndex: 2,
          explanation:
            "Update-heavy tables accumulate dead row versions that bloat scans and skew statistics. Vacuum state is the cheap, likely diagnosis before any infrastructure move.",
        },
        {
          question: "Why can raising max_connections to 5,000 make things worse?",
          options: [
            "Postgres charges per connection",
            "Each connection is a memory-hungry process; context-switching and memory pressure degrade everyone",
            "Connections are capped by DNS",
            "It invalidates your indexes",
          ],
          answerIndex: 1,
          explanation:
            "Connections are processes with real memory cost. The fix is pool sizing per app instance plus pooling middleware — not an ever-bigger server ceiling.",
        },
      ],
    },
    {
      number: 3,
      title: "MongoDB",
      summary:
        "MongoDB is not 'the beginner database' and it is not a worse Postgres. It is a different bargain: give up joins, get shape freedom and horizontal scale.",
      keyIdea:
        "Embed when the child is always accessed with the parent and bounded in size. When you hear 'unbounded array inside a document,' hear 'future incident.'",
      deepDive: [
        {
          heading: "The bargain, stated honestly",
          paragraphs: [
            "MongoDB trades relational guarantees for operational and shape flexibility. Documents are JSON-like blobs read and written whole; there are no joins (there are $lookups, which are the same cost with different syntax), no foreign-key enforcement, and by default no multi-document transactions — they exist now, at a performance cost. What you get back: one access pattern done extremely well (fetch the aggregate by key), schemas that vary per record without NULL-column forests, and horizontal scale via native sharding when one node stops being enough.",
            "The bargain works when your data genuinely is aggregates: product catalog entries, content drafts, event payloads, per-tenant config. It works badly when your questions are relational: 'top customers by revenue across regions last quarter' is a join and an aggregation, and doing it in application code means shipping every raw document over the wire and joining in Node. The engine's query planner cannot help you there, and neither can an index.",
          ],
        },
        {
          heading: "Embed or reference — the one decision that shapes everything",
          paragraphs: [
            "Every MongoDB schema decision reduces to: does this related data live inside the parent document, or in its own collection pointed at by an id? Embed when the child is always read with the parent, is bounded in size, and is owned only by the parent — order line items, a user's notification preferences. Reference when the child is read independently, is written by multiple owners, or is unbounded — comments on a viral post, products shared across orders. The catastrophic failure is the unbounded embedded array: an order document that grows to sixteen megabytes, exceeds the hard document limit, and starts failing writes during your biggest launch week. When you hear 'unbounded array inside a document', hear 'future incident'.",
            "The sixteen-megabyte document limit is not a technicality — it is the design boundary. So are index rules: indexes on embedded fields work (index 'items.sku'), but the index is only useful if your queries match the embedded shape. Design documents around the queries you will actually run, exactly as you would design tables around access patterns in Chapter 1. The discipline is identical; the vocabulary changes.",
          ],
        },
        {
          heading: "Where MongoDB earns its keep in 2026",
          paragraphs: [
            "Modern MongoDB is more relational-flavored than its reputation: multi-document ACID transactions exist (use them sparingly — they serialise through a cost), schema validation via JSON Schema exists ($jsonSchema validators catch garbage at write time — turn them on), and change streams give you a built-in feed of every write, which is how projections (search indexes, caches, analytics) stay in sync without hand-rolled polling. Atlas search and time-series collections cover two common side-needs natively.",
            "The professional pattern in a polyglot system: MongoDB as the operational store for aggregate-shaped data, with projections elsewhere for cross-cutting questions. Search goes to Elasticsearch/OpenSearch, analytics to a warehouse, and both are rebuilt from change streams. That keeps the 'one source of truth per fact' rule intact while using each engine for what it is genuinely good at.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Embed or reference?",
        caption: "The single schema decision every MongoDB design hinges on.",
        left: {
          heading: "Embed when…",
          items: [
            "Child is always read with the parent",
            "Size is bounded (grows to tens of items, not millions)",
            "Only the parent writes it",
            "Example: order line items, user preferences",
          ],
        },
        right: {
          heading: "Reference when…",
          items: [
            "Child is queried on its own",
            "Multiple owners write it",
            "The array would be unbounded",
            "Example: comments, products shared across orders",
          ],
        },
      },
      codeExample: {
        language: "javascript",
        caption:
          "Schema validation catches garbage at write time — turn validators on from day one.",
        code: [
          "db.createCollection(\"orders\", {",
          "  validator: {",
          "    $jsonSchema: {",
          "      bsonType: \"object\",",
          "      required: [\"customerId\", \"status\", \"items\", \"createdAt\"],",
          "      properties: {",
          "        status: { enum: [\"pending\", \"paid\", \"shipped\", \"refunded\"] },",
          "        items: {",
          "          bsonType: \"array\",",
          "          maxItems: 50,  // bounded on purpose — unbounded arrays are incidents",
          "          items: {",
          "            bsonType: \"object\",",
          "            required: [\"sku\", \"qty\", \"unitPriceCents\"],",
          "          },",
          "        },",
          "      },",
          "    },",
          "  },",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Embedding an array that grows without bound (comments, events, log lines).",
          fix: "Reference instead. Embedding is for bounded, parent-owned children — if it can hit thousands, it is a collection.",
        },
        {
          mistake: "Replacing joins with $lookup everywhere and calling it scale.",
          fix: "$lookup has join-shaped cost. If $lookup dominates your pipeline, the data wants to be relational — or the question wants a projection (search/warehouse), not a live join.",
        },
        {
          mistake: "Shipping without schema validation because 'schemaless'.",
          fix: "Add $jsonSchema validators. The schema always exists — the only question is whether the database or your users enforce it.",
        },
        {
          mistake: "Using multi-document transactions casually.",
          fix: "They work but cost throughput. Design documents so a transaction is rarely needed; when needed, keep them short and narrow.",
        },
      ],
      fieldChecklist: [
        "Every embedded array in my schema is bounded — I can state its expected max size.",
        "I have written the top queries and confirmed each is served by an index that matches its shape.",
        "$jsonSchema validators are active on every collection with required fields and enums.",
        "I know which reads tolerate eventual consistency and which must read primary (read-your-owns-writes).",
        "Change streams or a documented poll keeps every projection (search, cache) in sync with truth.",
        "I can explain, per collection, why embedding or referencing was the right call.",
      ],
      keyTerms: [
        {
          term: "Aggregate",
          definition:
            "The boundary of data read and written as one unit — in MongoDB, the document itself plus its bounded embedded children.",
        },
        {
          term: "$lookup",
          definition:
            "MongoDB's join-shaped aggregation stage; correct to use occasionally, expensive to build a design on.",
        },
        {
          term: "16 MB document limit",
          definition:
            "The hard ceiling on any single document — the reason unbounded embedded arrays are a design error, not a tuning problem.",
        },
        {
          term: "Change stream",
          definition:
            "A subscribable feed of writes on a collection — the clean way to keep projections (search, caches, analytics) in sync.",
        },
        {
          term: "Shard key",
          definition:
            "The field documents are distributed by; chosen at collection birth and expensive to regret (see Chapter 10).",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you choose MongoDB over Postgres?",
          a: "When the workload is aggregate-shaped: whole documents fetched and written by key, shape varying per record, high write volume that benefits from native sharding. Catalogs, content drafts, event payloads. I keep relational for anything needing joins, constraints or money-grade invariants.",
        },
        {
          q: "How do you decide between embedding and referencing?",
          a: "Three questions: is the child always read with the parent, is it bounded in size, and does only the parent write it? Three yeses means embed. Any no means reference. The unbounded embedded array is the classic MongoDB incident — a document creeping toward the 16 MB limit and failing writes at the worst time.",
        },
        {
          q: "Your MongoDB writes started failing during a launch. What do you check?",
          a: "First, document size errors — a growing embedded array hitting the 16 MB ceiling is the classic cause. Then shard-key hotspots if the collection is sharded, validator rejections if new fields shipped, and write concern timeouts under replication lag. Logs name the exact failure; the design doc usually already predicted which of these would break first.",
        },
      ],
      quiz: [
        {
          question:
            "A 'comments' array is embedded in each post document. What is the predictable failure?",
          options: [
            "Comments become eventually consistent",
            "The array grows unbounded toward the 16 MB document limit and writes start failing",
            "MongoDB automatically shards the array",
            "$lookup stops working on embedded arrays",
          ],
          answerIndex: 1,
          explanation:
            "Unbounded embedded arrays are the classic MongoDB incident: the document hits the hard 16 MB ceiling, writes fail under load. Comments should be a referenced collection.",
        },
        {
          question:
            "Your aggregation pipeline is mostly $lookup stages. What does that tell you?",
          options: [
            "MongoDB is functioning as designed",
            "You should add more indexes on the foreign fields and move on",
            "The data or the question is relational — wrong storage shape for this access pattern",
            "You need a bigger replica set",
          ],
          answerIndex: 2,
          explanation:
            "$lookup has join-shaped cost. If joins dominate, either the data belongs in a relational store, or the question belongs in a projection (search index, warehouse) rebuilt from change streams.",
        },
        {
          question:
            "What is the professional way to enforce structure in a 'schemaless' store?",
          options: [
            "Application-level checks only",
            "Trust every producer to be careful",
            "$jsonSchema validators at write time, versioned as shapes evolve",
            "Convert everything to strings",
          ],
          answerIndex: 2,
          explanation:
            "The schema always exists — the only question is who enforces it. Validators push the check to the write path where bad data is cheapest to reject.",
        },
      ],
    },
    {
      number: 4,
      title: "Schema Design",
      summary:
        "Schema design is the cheapest architecture decision you will ever get to make twice — before there is data in the table.",
      keyIdea:
        "A schema is a machine-checked statement of what your business believes. Every NOT NULL is a promise. Push invariants down into the database wherever possible.",
      deepDive: [
        {
          heading: "The schema is the contract",
          paragraphs: [
            "Your API can be bypassed. Your service can be redeployed with the validation turned off, your admin scripts can INSERT directly, and the migration someone runs at 2am does not import your TypeScript types. The database, on the other hand, sees every write from every path that has ever existed or ever will. That is why a CHECK constraint, a NOT NULL and a foreign key are not bureaucratic decoration — they are the only rules in your system that no code path can skip. Write them where the writes happen.",
            "Start every table by asking what must never be true, and encode that answer. Emails must be unique: a UNIQUE index. Amounts must be non-negative: a CHECK. An order without a customer is meaningless: a foreign key with ON DELETE RESTRICT, chosen deliberately rather than accepted by default. None of this is gold-plating; it is the cheapest engineering you will ever buy, because the database enforces it in microseconds and it survives every future teammate who never reads your documentation.",
          ],
        },
        {
          heading: "Nulls are a design decision",
          paragraphs: [
            "A nullable column is not laziness; it is a claim that the value is genuinely unknown or not yet applicable, and every nullable column makes every consumer handle a third answer beside yes and no. The question to ask at design time is which one you mean: is the field optional forever, optional until some lifecycle event, or optional only because nobody wanted to think? phone_verified_at nullable is a state machine. discount_applied nullable usually means someone is avoiding a zero.",
            "TIMESTAMPTZ columns deserve the same scrutiny. created_at and updated_at should be NOT NULL with defaults, because a row that exists but was never created is a contradiction you will debug someday. Soft deletes — a deleted_at column instead of DELETE — are a product decision wearing a database costume: they buy audit trails and undo, and they charge you in every query that must now remember WHERE deleted_at IS NULL. Decide that once, centrally, and name the pattern in the team docs.",
          ],
        },
        {
          heading: "Design for the migration, not just the model",
          paragraphs: [
            "Every schema you ship is also a migration path you will one day walk backwards out of. Columns that can never be dropped, enums that grow every quarter, and foreign keys without ON DELETE answers are all future work orders. A useful exercise before committing a design: imagine the feature it supports being killed next year, and sketch the ALTER statements that would remove it. If that sketch is horrifying, the design is over-coupled, no matter how elegant the entity diagram looked.",
            "Practically, that means stable column names, boring types, and Postgres ENUMs used sparingly — Postgres has historically made adding a value a special case, while a lookup table with a foreign key grows without ceremony. It means TEXT over VARCHAR(30) in Postgres, where the length limit buys you nothing in storage and costs you a migration when marketing says titles can be 45 characters. Postgres will not punish a wider type; your future self will punish a needless constraint.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where does this invariant live?",
        caption:
          "The only rules no code path can skip are the ones the database enforces on every write.",
        start: "Pick the enforcement point",
        branches: [
          {
            label: "CHECK or NOT NULL",
            outcome: "Enforced on every write, forever, by the store itself",
            good: true,
          },
          {
            label: "UNIQUE index",
            outcome: "Duplicates become impossible, not just discouraged",
            good: true,
          },
          {
            label: "Application check",
            outcome: "True until the one script that skips it runs",
            good: false,
          },
          {
            label: "A Slack reminder",
            outcome: "An audit finding with a due date",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Constraints carry the business rules; the partial unique index makes a race impossible.",
        code: [
          "CREATE TABLE orders (",
          "  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
          "  customer_id BIGINT NOT NULL REFERENCES customers (id),",
          "  status      TEXT   NOT NULL DEFAULT 'pending'",
          "              CHECK (status IN ('pending', 'paid', 'shipped', 'refunded')),",
          "  total_cents BIGINT NOT NULL CHECK (total_cents >= 0),",
          "  promo_code  TEXT,                       -- nullable: genuinely optional",
          "  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()",
          ");",
          "",
          "-- One open cart per customer, even if two services race.",
          "CREATE UNIQUE INDEX one_open_cart_per_customer",
          "  ON carts (customer_id) WHERE status = 'open';",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Relying on application-layer validation as the only guard against bad rows",
          fix: "Add CHECK, NOT NULL and UNIQUE constraints so every write path — including scripts and future services — enforces the same rules.",
        },
        {
          mistake: "Making columns nullable by default, then writing IS NULL branches everywhere",
          fix: "Default to NOT NULL; make a column nullable only when the value is genuinely unknown or not applicable, and say which one you mean.",
        },
        {
          mistake: "Storing money as FLOAT or DOUBLE PRECISION",
          fix: "Use integer cents or NUMERIC; binary floats cannot represent 0.10 exactly and the rounding error compounds across sums and refunds.",
        },
        {
          mistake: "Adding Postgres enums for fast-changing category lists",
          fix: "Use a lookup table with a foreign key, or TEXT with a CHECK; both grow without DDL ceremony or tooling quirks.",
        },
      ],
      fieldChecklist: [
        "I can name, for each table I own, the invariants the database enforces versus the ones only application code enforces.",
        "Every table I create has explicit NOT NULL, DEFAULT and foreign key answers — nothing left to engine defaults I have not read.",
        "Money is stored as integer cents or NUMERIC, never floating point.",
        "Every nullable column I ship has a one-line justification for why NULL is the right third state.",
        "I have sketched the ALTER statements that would remove this feature before I committed its schema.",
        "I keep a short data dictionary — column names, meaning, units — next to the schema.",
      ],
      keyTerms: [
        {
          term: "Constraint",
          definition:
            "A rule the database enforces on every write regardless of which code path issued it.",
        },
        {
          term: "Foreign key",
          definition:
            "A column-level promise that the referenced row exists, with a declared answer for what happens on delete.",
        },
        {
          term: "Soft delete",
          definition:
            "Marking rows deleted via a timestamp or flag instead of removing them, trading query complexity for audit history.",
        },
        {
          term: "Partial index",
          definition:
            "An index built over a WHERE subset of rows, small enough to enforce rules like one open cart per customer.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you decide what belongs in the schema versus in application code?",
          a: "Anything that defines correctness of the data goes in the schema: types, NOT NULL, CHECK, UNIQUE, foreign keys — because scripts, backfills and future services all write through that layer too. Application code owns workflow rules: what to show, when to email, rate limits. My test is simple: if violating the rule would corrupt the dataset even with no user watching, it belongs in the database.",
        },
        {
          q: "When is a nullable column the right call?",
          a: "When NULL means something specific: not yet applicable or genuinely unknown, and the lifecycle has a moment that fills it. verified_at is a great example — the null state is the whole point. I avoid nullable columns that are really a second default, like a status hidden inside a date. Those become two sources of truth, and every query grows an IS NULL branch.",
        },
        {
          q: "A teammate wants to store money as FLOAT because the payment provider sends decimals. What do you say?",
          a: "Convert once at the boundary. Store integer cents or NUMERIC, because binary floats cannot represent 0.10 exactly and the error compounds across sums, equality joins and refunds. The provider integration multiplies out at the edge; the ledger stays exact. It is free to fix on day one and costs a reconciliation incident in year two if nobody does.",
        },
      ],
      quiz: [
        {
          question:
            "What is the strongest argument for CHECK constraints over application validation?",
          options: [
            "They run faster than JavaScript",
            "They enforce the rule on every write path, including scripts and future services",
            "They are required by the SQL standard",
            "They make SELECT queries faster",
          ],
          answerIndex: 1,
          explanation:
            "Application validation only covers paths through that code. Admin scripts, backfills and the services written next year all bypass it; the constraint layer in the database does not.",
        },
        {
          question:
            "A discount column is NULL for most rows, and every query adds OR discount IS NULL. What does that signal?",
          options: [
            "NULL is doing double duty; the design should be revisited",
            "The queries need better indexes",
            "The rows are corrupted",
            "Nothing; this is optimal SQL",
          ],
          answerIndex: 0,
          explanation:
            "A nullable column that forces special cases in every query usually means the null is really a status wearing a disguise. Model the state explicitly and the branches disappear.",
        },
        {
          question:
            "Why prefer TEXT over VARCHAR(30) for a title column in Postgres?",
          options: [
            "TEXT is stored more compactly",
            "VARCHAR(30) silently truncates input",
            "The length limit buys nothing in storage and becomes a migration when limits change",
            "TEXT supports full-text search only",
          ],
          answerIndex: 2,
          explanation:
            "In Postgres both store the same way; the artificial limit just converts a copy change into a migration decision later. Reserve length limits for real data rules like country codes.",
        },
      ],
    },
    {
      number: 5,
      title: "Indexes",
      summary:
        "An index is a sorted copy of one column that trades write speed for read speed. Add them on evidence, not on anxiety.",
      keyIdea:
        "Order the columns as: equality filters first, then the sort column, then range columns. That single ordering rule is the most valuable 30 seconds of index theory you will ever learn.",
      deepDive: [
        {
          heading: "A sorted copy that costs on every write",
          paragraphs: [
            "An index is a mostly-B-tree sorted copy of chosen columns pointing back at rows. Reads get logarithmic lookups instead of scanning everything; every INSERT, UPDATE and DELETE on an indexed column pays to maintain that copy, plus storage, plus planner overhead choosing between them. That trade is why 'add an index' is not always the fix: a table with thirty indexes can be write-crippled while the ninth redundant index provides nothing its neighbors do not. Indexes are infrastructure, not accessories.",
            "In Postgres you can watch the cost directly: pg_stat_user_indexes reports idx_scan alongside table write counts, and unused indexes are visible in a day. The discipline that scales: every new index names the query it serves. If you cannot point at the EXPLAIN output that improved, or the p99 that dropped, the index is anxiety wearing a CREATE INDEX costume. Delete unused ones deliberately; DROP INDEX CONCURRENTLY exists because dropping is not free either on hot tables.",
          ],
        },
        {
          heading: "Equality, then sort, then range",
          paragraphs: [
            "The ordering rule in the key idea is worth internalizing until it is reflex. A B-tree index on (user_id, created_at) serves WHERE user_id = ? ORDER BY created_at with the sort already done, because equality pinned the prefix and the second column is sorted within it. Swap the columns and the planner still finds user_id rows, but now sorts them by hand — the index degenerates to a filter. Put a range column between them and the sort guarantee breaks for everything after the range.",
            "The same prefix logic explains why an index on (email) is useless for WHERE lower(email) = ?, and why a function index on lower(email) fixes it exactly. Postgres offers INCLUDE columns that ride along in the index without participating in ordering — add the two columns the SELECT fetches and the query becomes index-only, no heap visits. Index-only scans also depend on the visibility map, so a table that never vacuums quietly loses the optimization you just built.",
          ],
        },
        {
          heading: "Add indexes on evidence, not anxiety",
          paragraphs: [
            "The workflow is boring and effective. A slow query appears: run EXPLAIN ANALYZE, find the sequential scan or the sort node that dominates, confirm the predicate is actually selective — indexing status on a three-value column where 90 percent of rows are 'active' helps nobody. Create the index, re-run EXPLAIN ANALYZE, confirm the plan changed and the timing dropped, then record why the index exists in the migration file. Evidence in, evidence verified, evidence documented.",
            "Two Postgres mechanics save production days. CREATE INDEX CONCURRENTLY builds without blocking writes, at the cost of taking longer and being non-transactional — exactly the right trade for a live orders table. And an invalid or failed concurrent build leaves an index that exists while useless, so after a failure you drop it and retry rather than assuming the index is there. UNIQUE constraints added the same way avoid the table lock that used to take down launches.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Composite index column order",
        caption:
          "Equality columns first, then sort, then range — the planner can only use the prefix.",
        stages: [
          { label: "Equality columns", note: "WHERE user_id = ?" },
          { label: "Sort column", note: "ORDER BY created_at" },
          { label: "Range column", note: "WHERE created_at > ?" },
          { label: "INCLUDE extras", note: "covering, no table trip" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Column order follows the query shape; CONCURRENTLY keeps writes flowing while the index builds.",
        code: [
          "-- The dashboard query this index serves:",
          "-- SELECT * FROM events WHERE user_id = $1",
          "--   ORDER BY created_at DESC LIMIT 20;",
          "",
          "-- Equality column first, sort column second.",
          "CREATE INDEX CONCURRENTLY events_user_created_idx",
          "  ON events (user_id, created_at DESC);",
          "",
          "-- Covering variant: SELECT columns ride along, no heap visits.",
          "CREATE INDEX CONCURRENTLY events_user_created_covering_idx",
          "  ON events (user_id, created_at DESC)",
          "  INCLUDE (event_type, payload);",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Indexing every column a query might someday filter on",
          fix: "Add indexes when EXPLAIN ANALYZE shows a scan that hurts; each index is a tax on every write and on the planner's choice time.",
        },
        {
          mistake: "Putting the range column before the equality columns in a composite index",
          fix: "Order: equality first, then sort, then range. A range in the middle breaks the sort guarantee for every later column.",
        },
        {
          mistake: "Wrapping an indexed column in a function and expecting the index to work",
          fix: "Create a matching expression index, e.g. ON users (lower(email)), so the planner can use it for the computed form.",
        },
        {
          mistake: "Building or dropping indexes on a hot table without CONCURRENTLY",
          fix: "The CONCURRENTLY variants avoid blocking writes; after a failed build, drop the invalid index and retry.",
        },
      ],
      fieldChecklist: [
        "Every index I add names the query and the EXPLAIN evidence that justified it.",
        "My composite indexes order columns as equality, then sort, then range.",
        "I check pg_stat_user_indexes monthly and drop indexes with no scans.",
        "Index builds on live tables use CONCURRENTLY, and I verify the index is valid afterwards.",
        "Filters on expressions (lower(), date_trunc()) get expression indexes, not plain ones.",
        "I know my largest tables' write rates and treat each new index as a write tax I approved.",
      ],
      keyTerms: [
        {
          term: "B-tree",
          definition:
            "The default Postgres index structure: a balanced sorted tree that finds ranges and points in logarithmic time.",
        },
        {
          term: "Composite index",
          definition:
            "One index over multiple columns, usable only via its leftmost prefix and most useful when ordered to match the query.",
        },
        {
          term: "Covering index",
          definition:
            "An index that carries extra payload columns via INCLUDE so a query is answered from the index alone, without touching the table.",
        },
        {
          term: "Selectivity",
          definition:
            "How narrow a predicate is; low-selectivity predicates rarely justify an index because most rows match anyway.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you decide which columns to index?",
          a: "I start from real queries, not column lists. For the slow statement I read EXPLAIN ANALYZE, check selectivity, and design the composite index around it: equality filters first, the sort column next, range last, with INCLUDE for covering reads when the query fetches few columns. Then I verify the plan actually changed and document why the index exists. A monthly unused-index review closes the loop.",
        },
        {
          q: "What is the cost of an index?",
          a: "Storage, plus maintenance on every insert, update and delete touching those columns, plus planner work choosing between indexes. On write-heavy tables that tax dominates; a feed table with twenty indexes will spend most of its time maintaining them. I treat indexes like dependencies: each justified by a measured query, reviewed periodically, and dropped when the scan counters go quiet.",
        },
        {
          q: "A deploy added an index and writes got slower instead of reads getting faster. What happened?",
          a: "Likely a low-value index on a write-heavy table: the maintenance cost outweighed the read benefit, or the planner switched to a plan worse for the mixed workload. I check pg_stat_user_indexes for whether the new index is even being scanned, compare plans before and after, and drop it if the scans are zero. It gets the same review any dependency gets.",
        },
      ],
      quiz: [
        {
          question:
            "For WHERE user_id = ? ORDER BY created_at DESC, which composite index serves both the filter and the sort?",
          options: [
            "(created_at, user_id)",
            "(user_id, created_at DESC)",
            "Two separate single-column indexes",
            "(user_id) only",
          ],
          answerIndex: 1,
          explanation:
            "Equality pins the prefix; the second column is then sorted within it, so no separate sort step is needed. The reverse order would still filter but hand-sort every result.",
        },
        {
          question:
            "A query filters WHERE lower(email) = ? and ignores your index on email. Why?",
          options: [
            "The planner is broken",
            "lower() is not supported in Postgres",
            "The index stores raw email; the function form needs its own expression index",
            "The table needs vacuuming first",
          ],
          answerIndex: 2,
          explanation:
            "The planner matches index expressions to the query's expressions. A function index on lower(email) makes the predicate indexable; rewriting the query cannot conjure one. Plain column indexes only serve raw column references.",
        },
        {
          question:
            "A hot orders table needs a new unique constraint during business hours. What is the professional move?",
          options: [
            "CREATE UNIQUE INDEX CONCURRENTLY, then attach it with UNIQUE USING INDEX",
            "ALTER TABLE ADD CONSTRAINT during lunch",
            "Add it in a maintenance window next quarter",
            "Create the index normally; the lock is brief",
          ],
          answerIndex: 0,
          explanation:
            "CONCURRENTLY builds without blocking writes; ADD CONSTRAINT ... UNIQUE USING INDEX then flips it on with a brief metadata lock. Plain builds take an exclusive lock and stall every write until done.",
        },
      ],
    },
    {
      number: 6,
      title: "Transactions",
      summary:
        "A transaction is the difference between 'the money left one account' and 'the money arrived in the other.' Banks did not invent ACID for fun.",
      keyIdea:
        "Keep transactions short. No HTTP calls, sleeps or user input inside an open transaction.",
      deepDive: [
        {
          heading: "All or nothing is the whole product",
          paragraphs: [
            "Strip away the terminology and a transaction is one promise: the group of statements inside it either all apply or none do. The transfer is the canonical case — debit one account, credit another — but the same promise backs your notification-with-audit-row, your order-with-inventory-decrement, any multi-table write where a half-applied state is a lie. Without that boundary, every crash between statement one and statement two leaves an orphan, and you write cleanup jobs to mop up what the engine should have prevented.",
            "Postgres delivers the promise with WAL: changes are written to the log and flushed before the commit is acknowledged, so a power cut after COMMIT replays the log and the transaction survives; a crash before commit forgets it cleanly. ROLLBACK is not an undo engine working hard — the original rows were never overwritten in place, MVCC wrote new versions, and aborting just marks them dead. Understanding that commit means durable, not merely done, changes how you reason about disks.",
          ],
        },
        {
          heading: "Keep it short; the locks are watching",
          paragraphs: [
            "Every transaction holds its locks and its connection slot until commit or rollback, so duration is a resource budget. An open transaction that makes an HTTP call is a lock on your orders table with network latency added — under load, those holds stack up until every other writer queues behind one slow third-party API. The rule is absolute: no user input, no HTTP, no sleeps, no message publishing inside the boundary. Fetch what you need, write what you computed, get out.",
            "The control plane for misbehaving transactions is built in: pg_stat_activity shows sessions and their state, idle in transaction being the tell of an app that opened a boundary and went for coffee, and idle_in_transaction_session_timeout kills the worst offenders. ORM interactive transactions deserve the same suspicion — a lazy-loaded relation inside a loop keeps the boundary open for seconds. Commit at the end of a unit of work, not at the end of a request.",
          ],
        },
        {
          heading: "A transaction is a unit of work, not a button",
          paragraphs: [
            "The engineering question is where the boundary goes. Too wide — wrap the whole request — and you serialize your own application while holding locks for milliseconds that become seconds. Too narrow — commit after each statement — and you are back to orphaned half-states. The professional unit is one business invariant: reserve the seat and record the reservation; debit and credit; insert the row and its audit twin. Name the invariant, put exactly its statements inside, commit.",
            "When one database cannot hold the invariant — money in a ledger, files in object storage — do not fake a distributed transaction. Write the local transaction first, then the outbound event, and accept that the consumer sees eventual consistency; outbox tables and idempotent consumers are the standard toolkit. The failure modes to design against are the message sent for a transaction that rolled back, and its twin, the transaction committed with no message. Both are detectable; neither is acceptable by default.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The life of a transaction",
        caption:
          "Everything between BEGIN and COMMIT lands together — or, on ROLLBACK, never.",
        steps: [
          { label: "BEGIN", note: "snapshot assigned" },
          { label: "Do the work", note: "rows locked as touched" },
          { label: "COMMIT", note: "or ROLLBACK; no third door" },
          { label: "WAL flush", note: "durable before the reply" },
          { label: "Visible", note: "other sessions see it now" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "A guarded debit inside one boundary: the two updates commit together or not at all.",
        code: [
          "BEGIN;",
          "",
          "UPDATE accounts SET balance_cents = balance_cents - 5000",
          " WHERE id = 42 AND balance_cents >= 5000",
          "RETURNING id;              -- no row back? ROLLBACK, do not proceed",
          "",
          "UPDATE accounts SET balance_cents = balance_cents + 5000",
          " WHERE id = 97;",
          "",
          "COMMIT;                    -- or ROLLBACK: nothing ever happened",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Calling an external API or waiting on user input inside an open transaction",
          fix: "Compute outside the boundary. A transaction holds locks until commit; one slow HTTP call turns a row lock into a global stall.",
        },
        {
          mistake: "Wrapping the entire request in one transaction by default",
          fix: "Scope the boundary to one business invariant. Wide transactions serialize unrelated work and multiply deadlock surface.",
        },
        {
          mistake: "Treating COMMIT as optional cleanup, leaving connections idle in transaction",
          fix: "Always commit or roll back promptly; set idle_in_transaction_session_timeout so forgotten boundaries cannot pile up.",
        },
        {
          mistake: "Assuming the second UPDATE succeeded because the first did",
          fix: "Check affected rows inside the boundary and ROLLBACK on surprise; a guard condition plus RETURNING makes failure explicit.",
        },
      ],
      fieldChecklist: [
        "Every transaction I write covers exactly one business invariant and nothing else.",
        "No HTTP calls, sleeps, message publishes or user prompts inside my boundaries.",
        "I check affected-row counts and roll back on unexpected zeros.",
        "I watch pg_stat_activity for idle in transaction and a timeout is set for it.",
        "Cross-service workflows use an outbox or idempotent retry, not a fake distributed transaction.",
        "I can explain what WAL makes durable and what a rollback actually discards.",
      ],
      keyTerms: [
        {
          term: "ACID",
          definition:
            "Atomicity, Consistency, Isolation, Durability — the four promises a transactional engine makes about grouped writes.",
        },
        {
          term: "WAL",
          definition:
            "The write-ahead log Postgres flushes at commit so completed work survives crashes by replay.",
        },
        {
          term: "MVCC",
          definition:
            "Readers and writers do not block each other because rows keep versions; aborts abandon new versions instead of undoing in place.",
        },
        {
          term: "Idle in transaction",
          definition:
            "A session state meaning a boundary is open and the client is doing something else; the tell of a leaked transaction.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does ACID mean in practice, not in a textbook?",
          a: "Atomicity: the group commits or vanishes, no partial states. Consistency: constraints hold before and after. Isolation: concurrent transactions do not see each other's half-work beyond the level you chose. Durability: once COMMIT returns, the write survives a crash — in Postgres that is WAL flushed before the ack. In practice it means I can group a debit and credit and stop writing cleanup scripts for crashes.",
        },
        {
          q: "Where do you draw transaction boundaries?",
          a: "Around one business invariant: the statements that must land together for the invariant to make sense, and nothing more. Reserve seat plus record reservation, debit plus credit, row plus audit twin. I keep external calls, user waits and queue publishes outside the boundary, verify affected rows inside it, and commit fast. Whole-request transactions feel safe and are the opposite: they serialize the application.",
        },
        {
          q: "You need to update the database and publish to Kafka reliably. One transaction?",
          a: "No distributed transaction. I write the change plus an outbox row in one local transaction, then a relay publishes the outbox to Kafka and marks it sent. The consumer is idempotent because retries are guaranteed. The alternative — publish after commit — risks the committed-but-never-published gap on crash; the outbox turns that gap into a delayed message instead of a lost one.",
        },
      ],
      quiz: [
        {
          question:
            "Why must an HTTP call never happen inside an open transaction?",
          options: [
            "HTTP is slower than SQL",
            "The transaction's locks and connection are held for the full network round trip",
            "The database cannot resolve hostnames",
            "COMMIT would fail",
          ],
          answerIndex: 1,
          explanation:
            "Locks and the connection slot live until commit. A slow or hanging call stacks holds across all writers until the system stalls behind one third-party endpoint.",
        },
        {
          question:
            "The debit succeeds, the credit update matches zero rows, and code proceeds to COMMIT. What shipped?",
          options: [
            "Money vanished: the debit committed with no matching credit",
            "A valid partial transaction — Postgres rolls back unmatched updates",
            "An automatic deadlock resolution",
            "Nothing; an UPDATE with no matches aborts the transaction",
          ],
          answerIndex: 0,
          explanation:
            "Postgres commits whatever the boundary contains unless you say otherwise. Zero affected rows must be checked and turned into ROLLBACK by your code; the engine will not guess.",
        },
        {
          question:
            "What makes a committed Postgres transaction survive a power cut?",
          options: [
            "Periodic table snapshots",
            "Replication to a standby",
            "The WAL flushed to disk before the commit is acknowledged",
            "The OS page cache",
          ],
          answerIndex: 2,
          explanation:
            "Commit means durable: the log record reaches disk before the client hears success. Replicas improve availability, but the WAL flush is what survives a crash of the primary.",
        },
      ],
    },
    {
      number: 7,
      title: "Normalization",
      summary:
        "Normalization is the answer to 'which copy is the true one?' — the question that ends arguments and careers.",
      keyIdea:
        "Reach for 3NF as the default. Denormalize deliberately, with a documented recompute process. Denormalization without a consistency plan is scheduled corruption.",
      deepDive: [
        {
          heading: "One fact, one place",
          paragraphs: [
            "Normalization has one idea at its core: store each fact exactly once, where it belongs. When a customer's shipping city lives in the orders table, updates become archaeology — change the city in one row and every historical order quietly disagrees about where that customer lives. The anomaly family has names you should know by feel: update anomalies that leave copies contradicting, insert anomalies that cannot record a product until someone orders it, delete anomalies that erase the last order and the only record of the customer with it.",
            "The normal forms are mechanical answers to specific redundancy shapes. First: values are atomic, no comma-separated lists pretending to be tables. Second: no column depends on part of a composite key. Third: no column depends on another non-key column — the zip code that determines the city is a fact about zip codes and deserves its own table. In practice, designs that reach third normal form have already avoided the anomalies that actually bite production systems.",
          ],
        },
        {
          heading: "Denormalize with a plan, not a mood",
          paragraphs: [
            "Denormalization is buying read speed with write consistency debt, and like all debt it is fine when priced. The legitimate versions are concrete: a cached aggregate like orders_count maintained by a trigger or scheduled recompute; a read model rebuilt from the source of truth by events; a reporting copy in a warehouse. What is never legitimate is duplicating a column because the join felt slow one afternoon, with no owner, no recompute path and no monitoring for drift.",
            "If you denormalize, write the drift story down before the copy exists: what updates it, how often it recomputes, how you detect divergence, and who pages when the numbers disagree. A nightly recompute with a checksum comparison is a plan. A comment saying 'we keep this in sync' is not. The test I use: if the source of truth and the copy disagree right now, which one does the refund flow trust — and is that written anywhere a new engineer will find it?",
          ],
        },
        {
          heading: "Joins are not the emergency you fear",
          paragraphs: [
            "The instinct that joins are slow comes from tables without indexes and plans without statistics. A join on indexed keys over a well-analyzed table is microseconds to low milliseconds at scales most products never exceed. Before denormalizing for performance, run the honest experiment: EXPLAIN ANALYZE the join, add the missing index, re-measure. More often than not the model was right and the missing piece was a B-tree. Performance-driven denormalization should survive contact with a query plan.",
            "There are real moments to stop normalizing: analytics tables measured in billions of rows where every join multiplies cost, document-shaped payloads read whole and never queried relationally, and event logs that are append-only archives. Those are deliberate shape decisions for specific access patterns. The failure pattern is not any single denormalization; it is doing one casually, in the operational store, without naming who owns its consistency. Casual is how the customer count disagrees with the customer table for a quarter.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The normal form ladder",
        caption:
          "Each tier answers one specific redundancy question; 3NF is where sane designs stop.",
        tiers: [
          { label: "3NF", note: "no fact depends on a non-key column" },
          { label: "2NF", note: "no partial key dependency" },
          { label: "1NF", note: "atomic values, no repeating groups" },
          { label: "Unnormalized", note: "the spreadsheet you started with" },
        ],
      },
      pitfalls: [
        {
          mistake: "Storing a derived count or total next to its source with no recompute path",
          fix: "Maintain it with a trigger or scheduled recompute, monitor drift, and document which value the refund flow trusts.",
        },
        {
          mistake: "Comma-separated values in one column to avoid a join table",
          fix: "Use a real child table. The CSV column breaks referential integrity, indexing and every query that needs one value.",
        },
        {
          mistake: "Denormalizing because a join was slow, without reading the plan",
          fix: "EXPLAIN ANALYZE first; a missing index or stale statistics explains most slow joins. Measure before reshaping the model.",
        },
        {
          mistake: "Debating BCNF formalism on a CRUD app's first schema",
          fix: "Design to 3NF, ship, and revisit with evidence. The anomalies that hurt production are caught well before the textbook edge cases.",
        },
      ],
      fieldChecklist: [
        "Every fact in my schema has exactly one authoritative home.",
        "No column depends on part of a composite key or on another non-key column without a deliberate reason.",
        "Each denormalized copy I own has a named recompute process, a drift check and an owner.",
        "I have EXPLAIN ANALYZE evidence for every join I removed through denormalization.",
        "My lookup and category data lives in referenced tables, not comma-separated strings.",
      ],
      keyTerms: [
        {
          term: "Normal form",
          definition:
            "A progressive set of redundancy rules: 1NF bans repeating groups, 2NF partial-key dependencies, 3NF non-key dependencies.",
        },
        {
          term: "Update anomaly",
          definition:
            "The corruption pattern where the same fact stored in many rows disagrees after a partial update.",
        },
        {
          term: "Denormalization",
          definition:
            "Deliberately duplicating data for read performance or query simplicity, paid for with a consistency plan.",
        },
        {
          term: "3NF",
          definition:
            "The practical default: every non-key column depends on the key, the whole key, and nothing but the key.",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you denormalize, and how do you keep it safe?",
          a: "For measured read paths: hot aggregates like counts, warehouse-style reporting tables, or document payloads read whole. Safe means priced — a named recompute process, drift detection such as periodic checksums, and a documented answer for which copy wins a disagreement. I never denormalize the operational store casually over a join that EXPLAIN ANALYZE would probably fix with an index.",
        },
        {
          q: "Explain third normal form to a product manager.",
          a: "Every fact is stored exactly once, in the table it belongs to. If we change a customer's city, it changes in one place, so nothing can disagree. The cost is joins when reading; the benefit is that no update ever leaves two versions of the truth. We denormalize only when a measurement shows the join is genuinely expensive, and then we add a process that keeps the copy honest.",
        },
        {
          q: "A report disagrees with the orders table. Walk me through your response.",
          a: "First identify which is the source of truth — the orders table — and treat the report as a derived copy until proven otherwise. Then find the copy's refresh mechanism and its last successful run, and look for the divergence window: failed recompute, missed event, or a writer bypassing the trigger. The durable fix is not re-running the report; it is adding a drift check that pages someone before customers see it.",
        },
      ],
      quiz: [
        {
          question:
            "Which problem does normalization primarily prevent?",
          options: [
            "The same fact stored in several rows disagreeing after updates",
            "Slow queries under load",
            "Deadlocks between concurrent writers",
            "Replication lag on read replicas",
          ],
          answerIndex: 0,
          explanation:
            "Storing a fact once is the whole design. Copy-based storage invites update, insert and delete anomalies; the normal forms are mechanical rules that remove the shapes where copies appear.",
        },
        {
          question:
            "You add an orders_count column updated by application code in three services. What is missing?",
          options: [
            "An index on orders_count",
            "A single owner for the recompute and a drift check",
            "A trigger to drop the column",
            "Nothing; three writers is resilient",
          ],
          answerIndex: 1,
          explanation:
            "Multiple writers with no shared recompute path is scheduled corruption. Either one mechanism maintains the count — trigger or scheduled job — or the value is computed at read time.",
        },
        {
          question:
            "What is the default target for a new relational schema, per this chapter?",
          options: [
            "1NF for flexibility",
            "BCNF everywhere",
            "3NF, denormalizing only with evidence and a plan",
            "Fully denormalized for speed",
          ],
          answerIndex: 2,
          explanation:
            "3NF removes the anomalies that bite production while keeping joins cheap on indexed tables. Higher forms matter in edge cases; denormalization is a priced decision, not a default.",
        },
      ],
    },
    {
      number: 8,
      title: "Connection Pooling",
      summary:
        "Opening a database connection is expensive enough that 'one per request' is how small apps turn a slow database into a dead one.",
      keyIdea:
        "Pool size found by measurement (load test), starting around 10–20. Bigger is not safer.",
      deepDive: [
        {
          heading: "A connection is a process, not a socket",
          paragraphs: [
            "In Postgres every connection is a backend process with its own memory for caches, sort buffers and plan state. That is why one-per-request architectures die: a thousand concurrent requests become a thousand processes, each taking time and memory to fork, and the box spends its CPU scheduling backends instead of executing queries. Opening a connection also costs several round trips of handshake and authentication. The pool exists to pay that cost once and amortize it across every request the application will ever serve.",
            "The counterintuitive part is that bigger pools are slower. Postgres does its best work with a modest number of active backends; beyond that, contention on locks, buffers and the CPU scheduler makes every query a little worse. The known-good pattern puts a pooler like PgBouncer between your fleet and the database, with thousands of clients queuing on the pooler and only dozens of real server connections doing work. PgBouncer's transaction mode multiplexes many client connections over few server ones.",
          ],
        },
        {
          heading: "Size it by measurement, not superstition",
          paragraphs: [
            "The starting point is cores times a small factor, not connections times hope. For a four-core database, ten to twenty genuinely active connections is a defensible first size; beyond that you are usually queuing, not parallelizing. The measurement loop: load test at expected traffic, watch throughput and p99 latency, and adjust. If raising the pool raises latency, the database was already saturated and your queue should live in front of it, not inside the server's process table.",
            "Multiply carefully across the fleet: pool size is per instance, so ten app servers at twenty connections each is two hundred potential backends — which is exactly why the external pooler exists. Also budget for the things that hold connections while doing nothing: a transaction left open across an HTTP call is not just a lock risk from Chapter 6, it is a pool slot withdrawn from circulation. Checkout timeout configuration matters as much as size, because the failure you want is a fast error, not an infinite wait.",
          ],
        },
        {
          heading: "The pool is part of the database now",
          paragraphs: [
            "Pooling middleware changes semantics you must respect. In transaction mode a connection is assigned per transaction, so session state — prepared statements, advisory locks, SET search_path, temporary tables — breaks or leaks between clients. Modern drivers and PgBouncer versions handle prepared statements better than they used to, but the safe discipline stands: keep session-level features out of pooled paths, or pin those clients to session mode with their own budget. Every team hits this once; the incident is usually named after the advisory lock.",
            "Operational hygiene closes the chapter. A health check that runs a trivial SELECT on idle borrowed connections prevents the classic revival of a connection the server already closed — firewalls and load balancers kill idle TCP silently, and the first user after the weekend pays for it. Watch pool wait times as a first-class metric: rising time-to-acquire is the earliest signal that the database, not the app, is the bottleneck. The pool is not plumbing; it is the admission gate to your most contended resource.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The connection lifecycle",
        caption:
          "Connections are borrowed for one unit of work and returned — ownership is always temporary.",
        steps: [
          { label: "Acquire", note: "wait if the pool is busy" },
          { label: "Execute", note: "one unit of work" },
          { label: "Reset", note: "roll back leftovers" },
          { label: "Return", note: "back to the idle list" },
          { label: "Health check", note: "evict the dead ones" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "A bounded pool with a fast checkout timeout: acquire, do one unit of work, release in finally.",
        code: [
          "import { Pool, PoolClient } from 'pg';",
          "",
          "// max is per instance: the database sees instances x max.",
          "export const pool = new Pool({",
          "  max: 10,                        // measured under load, not guessed",
          "  idleTimeoutMillis: 30_000,",
          "  connectionTimeoutMillis: 5_000, // fail fast when saturated",
          "});",
          "",
          "// One unit of work per checkout; release even on throw.",
          "export async function withDb<T>(work: (c: PoolClient) => Promise<T>) {",
          "  const c = await pool.connect();",
          "  try {",
          "    return await work(c);",
          "  } finally {",
          "    c.release();",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Creating a new database connection per request or per function call",
          fix: "One shared pool per process; a connection costs a fork plus handshake in Postgres and pays nothing back.",
        },
        {
          mistake: "Raising max connections to fix saturation",
          fix: "Size from cores and load tests, around 10-20 active per server; queue in front of the database instead of inside it.",
        },
        {
          mistake: "Using session features — advisory locks, SET, temp tables — through a transaction-mode pooler",
          fix: "Keep session state out of pooled paths, or pin those clients to a dedicated session-mode pool with its own budget.",
        },
        {
          mistake: "Forgetting to release a client on an error path",
          fix: "Always check out in try/finally or a wrapper; a leaked client is a permanently missing pool slot.",
        },
      ],
      fieldChecklist: [
        "My app uses one shared pool per process, and every checkout is released in a finally.",
        "Pool max is per instance and I can multiply it across the fleet to compute worst-case backends.",
        "Checkout has a timeout, so saturation fails fast instead of hanging requests.",
        "Session-only features (advisory locks, SET, temp tables) are kept off the transaction-pooled path.",
        "I watch time-to-acquire as a metric and can explain what its rise means.",
        "Load tests, not vibes, decided the pool size.",
      ],
      keyTerms: [
        {
          term: "Connection pool",
          definition:
            "A bounded set of reusable database connections that amortizes setup cost and caps concurrent backends.",
        },
        {
          term: "PgBouncer",
          definition:
            "A lightweight external pooler that multiplexes many client connections over few server connections, often in transaction mode.",
        },
        {
          term: "Backend process",
          definition:
            "What a Postgres connection actually is — a full OS process with private memory, which is why connection counts are expensive.",
        },
        {
          term: "Checkout timeout",
          definition:
            "The maximum time a client waits for a free connection; it turns saturation into fast errors instead of hangs.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why not just raise max_connections on the database?",
          a: "Because each Postgres connection is a backend process with private memory; thousands of them spend the machine on scheduling and context switches instead of queries, and performance degrades before you hit any limit. The professional shape is a modest pool — sized by load test, often via PgBouncer — so clients queue cheaply in front of the database and the server runs a small number of active, fast backends.",
        },
        {
          q: "What pool size do you start with and how do you tune it?",
          a: "Ten to twenty per instance as the opening guess — roughly cores times a small factor on the server — then load test: watch throughput and p99 while adjusting. If adding connections raises latency, the database is saturated and the queue belongs in front of it. I multiply per-instance size across the fleet to compute worst-case backends, which is usually the moment the team meets PgBouncer.",
        },
        {
          q: "Your app intermittently errors with connection failures on Monday mornings. What is happening?",
          a: "Idle connections are being reaped — a firewall, load balancer or the server itself closes TCP that looked dead over the weekend, and the pool hands out the corpse on first use. Fixes: keep-alives or a health-check query on idle connections, a shorter idleTimeoutMillis so the pool rotates its own stock, and retry-once on connection errors. The pool config usually fixes it in an afternoon.",
        },
      ],
      quiz: [
        {
          question:
            "What does one Postgres connection actually cost the server?",
          options: [
            "A file descriptor and nothing more",
            "A backend process with its own memory",
            "One row in a shared table",
            "A thread in the client's runtime",
          ],
          answerIndex: 1,
          explanation:
            "Postgres forks a process per connection, each with private memory for caches and plan state. That model is why connection counts, not query counts, often decide capacity.",
        },
        {
          question:
            "Ten app servers each run a pool of 50. Under load, latency climbs with throughput. First move?",
          options: [
            "Shrink real active connections toward what the server can run and queue in front, usually with PgBouncer",
            "Raise max_connections to 1000",
            "Add read replicas",
            "Disable pooling",
          ],
          answerIndex: 0,
          explanation:
            "Oversubscribed backends contend on locks, buffers and CPU; more connections make every query worse. A modest active set with a queue in front is the known-good shape.",
        },
        {
          question:
            "In PgBouncer transaction mode, which feature breaks?",
          options: [
            "Simple SELECT queries",
            "COMMIT and ROLLBACK",
            "Session state such as advisory locks held across transactions",
            "The TCP connection to the server",
          ],
          answerIndex: 2,
          explanation:
            "Transaction mode assigns a server connection per transaction, so anything meant to persist on that connection — advisory locks, SET, temp tables — leaks or lands elsewhere. Session state belongs on session-mode pools.",
        },
      ],
    },
    {
      number: 9,
      title: "Read Replicas",
      summary:
        "Replicas are how one database becomes three: one that writes, and two that answer the questions the marketing dashboard asks at lunchtime.",
      keyIdea:
        "The catch that defines the whole chapter: replication lag. The professional pattern is read-your-owns-writes.",
      deepDive: [
        {
          heading: "Copies are for reads, and reads are most traffic",
          paragraphs: [
            "Most workloads read far more than they write, which is why replication is the first horizontal move worth knowing: one primary accepts writes, one or more standbys replay its WAL and serve read traffic. Analytics dashboards, exports, and search indexing move off the primary and stop competing with checkout for buffer cache and CPU. In Postgres, streaming replication with hot standby keeps a replica nearly current; managed platforms turn the whole setup into a checkbox, which is exactly why the next paragraph matters.",
            "Replicas also buy resilience: a standby promoted when the primary dies turns a potential day-long outage into a blip. But the default answers are asynchronous — the primary commits and replies without waiting for standbys to catch up. Synchronous replication trades a little write latency for the guarantee that a committed transaction exists on at least one standby, which matters when durability across failures is a requirement, not a hope. Know which mode your platform runs before the incident decides for you.",
          ],
        },
        {
          heading: "Lag is the catch; design for it",
          paragraphs: [
            "Async replication means a read replica is always answering a slightly older question. Write a row, immediately SELECT it from a replica, and sometimes it is not there — the user sees their comment vanish on refresh, the order confirmation page 404s. The lag is usually milliseconds and occasionally seconds under load, and it is not a bug to fix but a property to design around. Any correct read-after-write flow needs a plan that does not depend on luck.",
            "The professional pattern is read-your-owns-writes: after a write, that user's follow-up reads go to the primary for a bounded window — a few seconds, or until a replication position check confirms the replica has caught up. Cheap versions work too: route reads to the primary for the duration of the request that wrote, or let the client carry a timestamp the server checks. What never works is ignoring the problem, because the bug is intermittent and shows up in demos, support tickets and load tests, in that order.",
          ],
        },
        {
          heading: "Replicas fail differently than caches",
          paragraphs: [
            "Operationally, a replica is a second database with its own failure modes. Replay can fall behind under heavy write bursts and even run out of slots or disk; a promoted standby that missed recent transactions produces the split-brain sequel — two primaries accepting writes — unless fencing is configured. Monitoring lag with pg_stat_replication or the platform's metric is not optional; treat a replica more than a few seconds behind as an alert, because its read traffic is now answering old questions at scale.",
            "Also respect what replication copies: everything. A long-running report that starves vacuum on the primary reproduces bloat on every standby; a table someone dropped gets dropped everywhere, instantly, because DDL ships in the stream too. That cuts both ways — the accidental DROP is recoverable from a delayed standby if you keep one, which is a genuinely strong argument for a replica with a deliberate replay delay. Fast replicas for reads; one slow one for disasters.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Write here, read there",
        caption:
          "One primary takes writes; replicas replay its log and serve reads — slightly behind.",
        steps: [
          { label: "App write", note: "goes to the primary" },
          { label: "Primary", note: "commits to WAL" },
          { label: "WAL stream", note: "ships to standbys" },
          { label: "Replica", note: "replays, lags a bit" },
          { label: "Dashboard reads", note: "accept the delay" },
        ],
      },
      pitfalls: [
        {
          mistake: "Routing read-after-write requests to a replica and hoping lag stays zero",
          fix: "Use read-your-owns-writes: after a write, send that user's follow-up reads to the primary for a bounded window or until the replica catches up.",
        },
        {
          mistake: "Treating replica lag as a bug to tune away",
          fix: "Async replicas answer older questions by design. Alert on lag, design reads for staleness, and fix only the exceptions.",
        },
        {
          mistake: "Assuming a replica protects against accidental DDL",
          fix: "DDL ships in the replication stream; a dropped table is dropped everywhere. Keep a delayed standby for recovery.",
        },
        {
          mistake: "Promoting a standby without fencing the old primary",
          fix: "Fence or terminate the old primary first; two writers is split brain, and both halves of your data diverge quietly.",
        },
      ],
      fieldChecklist: [
        "I know which read paths in my system tolerate staleness and which do not.",
        "Write-then-read flows use read-your-owns-writes, not luck.",
        "Replication lag is monitored and alerted, with a threshold someone chose on purpose.",
        "I know whether my platform replicates synchronously or asynchronously, and what that costs.",
        "A delayed or offline copy exists for recovering from logical damage, not just hardware loss.",
        "Promotion runbooks fence the old primary before anyone writes to the new one.",
      ],
      keyTerms: [
        {
          term: "Streaming replication",
          definition:
            "Postgres standby servers replaying the primary's WAL in near real time, serving reads or waiting for promotion.",
        },
        {
          term: "Replication lag",
          definition:
            "The delay between a commit on the primary and its appearance on a replica; a property to design around, not a bug.",
        },
        {
          term: "Read-your-owns-writes",
          definition:
            "The consistency pattern that sends a user's post-write reads to the primary, or checks replica position, so their own data never vanishes.",
        },
        {
          term: "Split brain",
          definition:
            "The failure where two nodes both believe they are primary and accept writes; prevented by fencing.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you handle replication lag in a read-replica setup?",
          a: "First, classify reads: dashboards and search tolerate seconds, read-after-write flows do not. For the latter I implement read-your-owns-writes — the user's follow-up reads hit the primary for a bounded window, or the app checks the replica's replay position before routing. I also alert on lag with a real threshold, because a replica minutes behind is quietly serving stale answers to every consumer that trusts it.",
        },
        {
          q: "When would you choose synchronous replication?",
          a: "When a committed transaction must survive the loss of the primary — payment ledgers, anything audited — and the extra write latency is an acceptable price. Async standbys are faster but can lose the last transactions at failover. In practice I run sync where durability is contractual, async everywhere else, and I make sure someone knows which is which before failover makes the choice for us.",
        },
        {
          q: "A replica is 40 seconds behind and climbing. What do you do?",
          a: "Stabilize first: check pg_stat_replication for what shipped versus what replayed, look for a long-running query blocking replay or a write burst on the primary, and stop non-essential read traffic from deepening it. If replay is stuck on a conflicting query, terminate that query. Then treat the alert as a design finding — a replica that far behind means reads are being answered with data older than anyone assumed.",
        },
      ],
      quiz: [
        {
          question:
            "What is the defining catch of asynchronous read replicas?",
          options: [
            "They cannot serve reads",
            "They answer slightly stale data because commits return before replay finishes",
            "They must run on different hardware",
            "They only work with MongoDB",
          ],
          answerIndex: 1,
          explanation:
            "The primary acknowledges commits without waiting for standbys. The replica is always at least a little behind, which is invisible until a user writes and immediately reads.",
        },
        {
          question:
            "A user posts a comment, refreshes, and the comment is sometimes missing. Which pattern fixes it?",
          options: [
            "Read-your-owns-writes: route that user's post-write reads to the primary",
            "Bigger replicas",
            "Synchronous disk flushes on the app server",
            "More aggressive vacuum",
          ],
          answerIndex: 0,
          explanation:
            "After a write, the user's follow-up reads go to the primary for a bounded window or until a position check passes. Lag is a property; this pattern makes read-after-write correct anyway.",
        },
        {
          question:
            "A table is accidentally dropped in production. Which setup can recover it fastest?",
          options: [
            "The fastest async replica, already caught up",
            "A bigger connection pool",
            "A delayed standby that has not replayed the DROP yet",
            "VACUUM FULL",
          ],
          answerIndex: 2,
          explanation:
            "DDL ships in the replication stream, so caught-up replicas lost the table too. A deliberately delayed standby still holds pre-accident state and can be promoted or queried to extract the data.",
        },
      ],
    },
    {
      number: 10,
      title: "Sharding",
      summary:
        "Sharding is when one database becomes many, and you volunteer to be the router. Do it later than you think, and know why forever after.",
      keyIdea:
        "The decision that defines a sharded system forever is the shard key. Re-sharding means moving every row in a live system.",
      deepDive: [
        {
          heading: "Shard only when one box is truly done",
          paragraphs: [
            "Sharding splits one logical dataset across many independent databases, each owning a subset of rows, with your code or a router deciding where each read and write lands. It is the most expensive scalability tool you will buy: joins become application code, cross-shard transactions become distributed problems, and every operational task — backups, migrations, EXPLAIN — multiplies by shard count. Before it, exhaust the ladder: indexes, partitioning, read replicas, vertical scaling, caching. Each of those is cheaper per order of magnitude.",
            "The honest triggers are concrete: write volume that saturates one primary even after tuning, a working set that will not fit in memory on any single purchasable machine, or hard tenancy requirements where customers demand physical isolation. Note what is not on the list — 'we might grow someday.' Sharding a system that fits on one machine converts a solved problem into a permanent architectural tax. MongoDB makes it a config; Postgres makes it a project; both charge the same ongoing fee.",
          ],
        },
        {
          heading: "The shard key is forever",
          paragraphs: [
            "The shard key determines which shard holds each row, and changing it later means rewriting history — moving every row in a live system while every query still runs. Choose it from access patterns, not from data shape: if every meaningful query carries user_id, a hash of user_id spreads load evenly and keeps each user's rows together. If queries arrive by tenant, tenant_id gives natural isolation and easy per-customer extraction, at the cost of one hyperscale tenant able to unbalance the fleet.",
            "Range keys look intuitive and usually regress to the hot-shard problem: every insert targets today's range, so the newest shard takes all writes while the others idle. Pure random distribution spreads load perfectly and destroys locality — every query scatters to every shard. The professional test for a candidate key: write down your five most valuable queries and check that each one can name its shard. Any query that cannot will fan out, and fan-out latency is the floor your p99 lives on.",
          ],
        },
        {
          heading: "Living with shards",
          paragraphs: [
            "Design the rebalancing story before the first shard exists. Fixed hash buckets — route by hash modulo a large bucket count, map buckets to shards — let you move buckets between machines later without touching the key. Add a lookup or directory layer and resharding becomes a background copy; without one, it becomes a migration that freezes features for a quarter. MongoDB's balancer automates chunks on the chosen key; homegrown Postgres setups grow Citus or an app-level router, each with the same bucket math underneath.",
            "Accept the new normal for queries: cross-shard aggregations are scatter-gather, so push what you can into per-shard rollups and accept eventual consistency for global counts. Cross-shard transactions are the hard wall — most teams redesign flows so an invariant lives inside one shard, and pay an outbox or saga for the rest. Operational work doubles too: a schema change is now a fleet rollout with version skew, which is Chapter 13's expand-and-contract pattern with more moving parts.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where does the shard key come from?",
        caption:
          "The key decides which rows live together forever — choose the one your queries actually carry.",
        start: "Pick the shard key",
        branches: [
          {
            label: "user_id hash",
            outcome: "Even spread; queries that carry user_id hit one shard",
            good: true,
          },
          {
            label: "tenant_id",
            outcome: "Natural B2B isolation; watch for one giant tenant",
            good: true,
          },
          {
            label: "created_at range",
            outcome: "Hot shard: all writes land on the newest range forever",
            good: false,
          },
          {
            label: "random or none",
            outcome: "Every query fans out to every shard; scatter-gather tax",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Sharding before exhausting indexes, partitioning, replicas and caching",
          fix: "Each rung of that ladder is an order of magnitude cheaper. Shard for write saturation or physical isolation, not for hypothetical growth.",
        },
        {
          mistake: "Choosing a range-based shard key like created_at",
          fix: "All writes land on the hottest range and every other shard idles. Prefer hashing a query-carried key such as user_id.",
        },
        {
          mistake: "Picking a shard key from data shape instead of access patterns",
          fix: "Write down the five most valuable queries; each must be able to name its shard. Queries that cannot will fan out to all of them.",
        },
        {
          mistake: "Planning to re-shard later without a bucket or directory design",
          fix: "Use fixed hash buckets mapped to shards so rebalancing is a background copy, not a quarter-long feature freeze.",
        },
      ],
      fieldChecklist: [
        "I can state the measured trigger that justifies sharding this system — or the fact that none exists yet.",
        "My candidate shard key comes from the top queries, and each of them can name its shard.",
        "The routing layer uses fixed buckets so rebalancing is a copy, not a rewrite.",
        "Cross-shard invariants are either redesigned into one shard or handled with an explicit pattern.",
        "Backups, migrations and monitoring plans exist per shard, not just per fleet.",
      ],
      keyTerms: [
        {
          term: "Shard key",
          definition:
            "The field rows are distributed by; chosen once, expensive to regret, and best derived from the queries you run most.",
        },
        {
          term: "Fan-out",
          definition:
            "A query that must visit every shard because the key does not localize it; the floor under your latency.",
        },
        {
          term: "Hot shard",
          definition:
            "A shard receiving disproportionate traffic, typically the newest range on a range key or one giant tenant.",
        },
        {
          term: "Resharding",
          definition:
            "Redistributing rows across shards; a live data movement that bucket design turns into a background copy.",
        },
      ],
      interviewQuestions: [
        {
          q: "When is sharding the right call?",
          a: "When the evidence says one machine is done: write volume saturating a tuned primary, a working set no purchasable box holds, or tenancy that requires physical isolation. Indexes, partitioning, replicas, caching and vertical scaling come first because each is cheaper. The phrase I distrust is 'we might grow' — sharding a system that was never unsolved on one box is a permanent tax paid by every future feature.",
        },
        {
          q: "How do you choose a shard key?",
          a: "From access patterns. I list the queries that matter most and require each to name its shard from the key. Hash of user_id spreads evenly and localizes per-user queries; tenant_id isolates customers but risks one giant tenant; created_at ranges sound natural and put every write on the newest shard. Changing the key later means moving every row live, so this choice is effectively permanent.",
        },
        {
          q: "How do you handle queries that span shards?",
          a: "Scatter-gather, with the acceptance that the floor is the slowest shard — fine for dashboards, painful for user-facing paths. My preferences: keep each user's or tenant's data on one shard so most queries never fan out, build per-shard rollups for global counts, and avoid cross-shard transactions by redesigning flows so invariants live within one shard. Where they cannot, an outbox or saga with idempotency beats a fragile distributed commit.",
        },
      ],
      quiz: [
        {
          question:
            "Why is the shard key called a permanent decision?",
          options: [
            "It cannot be indexed",
            "Changing it means moving every row in a live system while queries still run",
            "It must be a UUID",
            "Databases forget it on restart",
          ],
          answerIndex: 1,
          explanation:
            "The key decides which shard holds each row. Re-sharding rewrites the distribution of the whole dataset under live traffic, which is why bucket and directory designs exist to soften it.",
        },
        {
          question:
            "Writes land on one shard while the others idle. Likely cause?",
          options: [
            "A range key like created_at directs every insert to the newest range",
            "The hash function is broken",
            "Too many shards",
            "Missing indexes",
          ],
          answerIndex: 0,
          explanation:
            "Range keys put new rows on the newest range, so the hottest shard takes every write. Hashing a query-carried key spreads load evenly across the fleet.",
        },
        {
          question:
            "A dashboard query must aggregate across all shards. What is the pragmatic design?",
          options: [
            "One global transaction per dashboard load",
            "Move everything back to one database",
            "Per-shard rollups with eventual consistency for global numbers",
            "Deny dashboards access to shards",
          ],
          answerIndex: 2,
          explanation:
            "Scatter-gather works but is slow and fragile for user-facing paths; rollups computed per shard and merged give fast global answers, priced as eventual consistency — the standard trade.",
        },
      ],
    },
    {
      number: 11,
      title: "Query Execution Plans (EXPLAIN/ANALYZE) & the N+1 Problem",
      summary:
        "The planner is a colleague who explains exactly how it intends to run your query. Most engineers never ask. That is why their databases are slow.",
      keyIdea:
        "Reading plans is the single highest-leverage debugging skill in databases. Count queries per request in development to catch N+1s.",
      deepDive: [
        {
          heading: "Ask the planner before you guess",
          paragraphs: [
            "EXPLAIN shows the plan the planner intends; EXPLAIN ANALYZE actually runs the statement and reports real timings against estimates. The output is a tree read inside-out, and the node that dominates cost is where you look first: a Sequential Scan on a large table for a selective predicate, an expensive Sort with no index behind it, a Nested Loop whose outer side ran a million times. Estimated rows versus actual rows is the health signal — when they diverge wildly, the planner is optimizing against fiction.",
            "Most misdiagnosed 'slow database' incidents end here: nobody had read the plan. The loop is short — capture EXPLAIN ANALYZE for the slow query, find the dominant node, form one hypothesis (missing index, bad row estimate, a sort spilling to disk), make one change, re-run. Adding BUFFERS to the EXPLAIN shows cache hits versus reads, which separates a CPU problem from an I/O problem. pg_stat_statements ranks the statements worth planning for by total time, so effort lands where the milliseconds live.",
          ],
        },
        {
          heading: "The N+1 is an ORM-shaped accident",
          paragraphs: [
            "The classic shape: fetch one hundred orders in one query, then access order.customer in a loop, and the ORM helpfully issues one query per order — one hundred and one queries for one screen. Latency multiplies by count, the pool from Chapter 8 feels it first, and everything looks fine in staging where the list has five rows. It is not a database problem; it is an access-pattern bug wearing a database costume, and it survives code review because each individual query is fast.",
            "Catch them structurally, not heroically. In development, log or count queries per request — most ORMs have a mode for it, and a budget of, say, ten queries per page turns N+1s into test failures. The fixes are boring: eager loading or JOINs when you know the parents, one query with WHERE id IN (...) when you have a batch, dataloaders to batch and dedupe within a request. In the plans, an N+1 is visible as the same plan repeated — which is why reading plans and counting queries are the same skill.",
          ],
        },
        {
          heading: "Estimates are opinions; measure them",
          paragraphs: [
            "The planner chooses plans from statistics, and stale statistics produce confident nonsense. After bulk loads and big deletes, ANALYZE refreshes the picture; autovacuum usually handles it, but a table that just swallowed a ten-million-row import can mislead the planner until told. When estimates and reality disagree on a specific query, extended statistics or corrected settings fix the class of problem, not just the instance. A plan that is bad because its inputs are lies will stay bad no matter how many indexes you add.",
            "Read plans with suspicion toward the word 'someday'. An index that helps this query may regress the update path; a JOIN rewrite may beat the ORM's loop today and lose after a data shape change. That is why the loop ends with re-measure, not with belief: run the EXPLAIN ANALYZE after the change, compare total time and buffers, keep what won. Teams that internalize this stop arguing about databases in standups and start pasting plans instead — the argument ends where the evidence begins.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "The planner's first decision",
        caption:
          "Table size and selectivity decide scan strategy; EXPLAIN shows which branch it took.",
        axes: { x: "Rows the query matches", y: "Size of the table" },
        quadrants: [
          { label: "Index scan", note: "big table, few rows — random reads win" },
          { label: "Sequential scan", note: "big table, most rows — often parallel" },
          { label: "Either", note: "small table: a whole scan is a few pages" },
          { label: "Sequential scan", note: "small table: an index would be overhead" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "One command turns a slow-query argument into a plan with numbers attached.",
        code: [
          "EXPLAIN (ANALYZE, BUFFERS)",
          "SELECT o.id, c.name",
          "FROM orders o",
          "JOIN customers c ON c.id = o.customer_id",
          "WHERE o.user_id = 42",
          "ORDER BY o.created_at DESC",
          "LIMIT 20;",
          "",
          "-- What to look for:",
          "--   Seq Scan on a big table for a selective predicate",
          "--   Sort with no index behind it",
          "--   estimated rows far from the actual rows reported",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Debugging a slow query by adding indexes without reading the plan",
          fix: "EXPLAIN (ANALYZE, BUFFERS) first; find the dominant node and check estimated versus actual rows before touching anything.",
        },
        {
          mistake: "Ignoring row estimate mismatches and tuning the query anyway",
          fix: "When estimates diverge wildly from actuals, run ANALYZE and reconsider statistics; the planner is optimizing against fiction.",
        },
        {
          mistake: "Reviewing ORM code with no visibility into queries issued per request",
          fix: "Log or count queries per request in development and set a budget; an N+1 should fail a test, not a launch.",
        },
        {
          mistake: "Trusting staging latency where the list renders five rows",
          fix: "N+1 cost scales with list size; test with realistic volumes and batch-fetch children with one IN query.",
        },
      ],
      fieldChecklist: [
        "My first move on any slow query is EXPLAIN (ANALYZE, BUFFERS), not a new index.",
        "I can read a plan inside-out and name the node that dominates cost.",
        "Estimated rows versus actual rows is a check I actually perform.",
        "Query count per request is logged in development with an enforced budget.",
        "List endpoints I own are tested with realistic volumes, not five rows.",
        "pg_stat_statements is enabled and someone looks at it weekly.",
      ],
      keyTerms: [
        {
          term: "EXPLAIN ANALYZE",
          definition:
            "The command that shows the planner's chosen plan plus real timings; the difference between guessing and measuring.",
        },
        {
          term: "Sequential scan",
          definition:
            "Reading every page of a table; correct for broad queries and damning for selective ones on large tables.",
        },
        {
          term: "Cardinality estimate",
          definition:
            "The planner's predicted row count for each node; wildly wrong estimates produce confidently bad plans.",
        },
        {
          term: "N+1 query",
          definition:
            "One query for the list plus one per item fetched lazily; an access-pattern bug that scales latency with list size.",
        },
      ],
      interviewQuestions: [
        {
          q: "A query is slow in production. Walk me through your process.",
          a: "Reproduce it, then EXPLAIN (ANALYZE, BUFFERS): find the node dominating cost and compare estimated versus actual rows. Divergent estimates mean statistics; a sequential scan on a selective predicate means an index; a Sort spilling to disk means memory or a missing index. One change per iteration, re-measure each time, and pg_stat_statements to confirm the fixed query left the top of the list. I paste the plan into the incident doc.",
        },
        {
          q: "What is an N+1 and how do you prevent them?",
          a: "One query fetches a list, then the ORM issues one more per item for a relation — a hundred orders become a hundred and one queries. Prevention is structural: count queries per request in development with a budget that fails tests, eager-load or JOIN known relations, batch with one IN query for collections built at runtime. Staging hides them because lists are short; production is where the pool notices.",
        },
        {
          q: "Why can the same query get a different plan after a big import?",
          a: "Plans are chosen from statistics, and a bulk load changes the data the statistics describe. Row counts, value distributions and correlation shift; the old estimates become fiction and the planner picks plans confidently optimized for a table that no longer exists. ANALYZE after large imports fixes the inputs. This is also why plan changes appear after autovacuum runs — the picture updated, so the choice updated.",
        },
      ],
      quiz: [
        {
          question:
            "What does the gap between estimated and actual rows in a plan tell you?",
          options: [
            "The index is corrupted",
            "The planner's statistics are wrong or stale, so it may pick bad plans",
            "The query is syntactically invalid",
            "Nothing; they never differ",
          ],
          answerIndex: 1,
          explanation:
            "The planner optimizes against its estimates. When they diverge wildly from reality, run ANALYZE and reconsider statistics — the plan is bad because its inputs are fiction.",
        },
        {
          question:
            "An endpoint fetches 100 orders then loads each order's customer separately. Best fix?",
          options: [
            "Batch or eager-load: one query with WHERE id IN (...) or a JOIN",
            "Add an index on customers.id",
            "Raise the connection pool size",
            "Cache the endpoint forever",
          ],
          answerIndex: 0,
          explanation:
            "The relational shape is fine; the access pattern is the bug. One batched query replaces the loop, and a per-request query budget turns the next N+1 into a failing test.",
        },
        {
          question:
            "Which pair gives real timings plus cache behavior for a plan?",
          options: [
            "EXPLAIN, VACUUM",
            "ANALYZE, REINDEX",
            "EXPLAIN (ANALYZE, BUFFERS)",
            "pg_dump, pg_restore",
          ],
          answerIndex: 2,
          explanation:
            "ANALYZE executes the statement and reports actual times; BUFFERS reports shared hits versus reads, which separates CPU problems from I/O problems in one run.",
        },
      ],
    },
    {
      number: 12,
      title: "Deadlocks, Isolation Levels & Locking",
      summary:
        "Every concurrent database is a traffic system. Isolation levels are the speed limits; deadlocks are the four-way stops nobody yields at.",
      keyIdea:
        "Pick the weakest level that makes your invariants hold, and write the retry loop. Serializable without retries is an outage you configured.",
      deepDive: [
        {
          heading: "Isolation levels are priced promises",
          paragraphs: [
            "Concurrent transactions create races, and isolation levels decide which races you are willing to have. Read Committed, the default nearly everywhere, gives each statement a fresh snapshot: no dirty reads, but two statements in one transaction can see the world change between them — a count checked early, spent later, wrong by the time you commit. Repeatable Read pins the snapshot for the whole transaction. Serializable goes further and behaves as if transactions ran one at a time, aborting the pairs that cannot be reordered into that story.",
            "The professional choice is the weakest level that makes your actual invariants hold. Most CRUD flows are safe at Read Committed with constraints doing the heavy lifting — a UNIQUE index enforces uniqueness at any isolation level, which is why the constraint layer from Chapter 4 matters more than the isolation dial. Reach for stronger isolation when application logic depends on facts staying stable across statements: balance checks followed by debits, seat availability followed by reservation. That is the shape where races become money.",
          ],
        },
        {
          heading: "A deadlock is a scheduling event",
          paragraphs: [
            "A deadlock needs two transactions and two resources taken in opposite orders: transaction A locks row 1 and wants row 2, transaction B locks row 2 and wants row 1, and both wait forever. Postgres detects the cycle and aborts one victim with an error your code must treat as retryable, not fatal. The classic producer is multi-row updates in inconsistent order — batch jobs updating accounts by whatever id the application loop produced. Sorting the ids and updating in one consistent order eliminates the entire class.",
            "The retry loop is not optional furniture; it is the contract that makes strong isolation usable. Serializable and Repeatable Read abort transactions on serialization failures — Postgres error code 40001 — and the correct response is to run the whole unit of work again, since the snapshot it read is no longer trustworthy. Retry a bounded number of times with jitter, and make the operation idempotent so a retry cannot double-apply. Serializable without retries is not safety; it is an outage you configured.",
          ],
        },
        {
          heading: "Locks you can name and locks you cannot",
          paragraphs: [
            "Row locks come with the statements that need them, and SELECT FOR UPDATE is the explicit one: read the row and hold the lock until commit, the standard pattern for check-then-write on one row. SKIP LOCKED turns it into a work queue — workers claim unclaimed rows without blocking each other, the standard job-table pattern. Advisory locks give you application-named locks for bigger critical sections. What they all share: held until commit or rollback, which is why Chapter 6's short-transaction rule is a locking rule too.",
            "Schema locks are the quiet ones that page you. ALTER TABLE needs locks that wait on all existing readers and writers to finish first — one long report query queues every subsequent ALTER behind it, and then everything queues behind the ALTER. That is the mechanism behind Chapter 13's zero-downtime rules, and lock_timeout plus statement_timeout are the guardrails that turn an infinite queue into a fast failure you can retry. When in doubt, pg_locks shows who holds what and who is waiting.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Read Committed vs Serializable",
        caption:
          "The default is fast and forgiving; serializable makes conflicts explicit and demands a retry loop.",
        left: {
          heading: "Read Committed (default)",
          items: [
            "Each statement sees a fresh snapshot",
            "No retry loop needed for aborts",
            "Anomalies possible across statements",
            "The pragmatic default for CRUD",
          ],
        },
        right: {
          heading: "Serializable",
          items: [
            "Whole transaction behaves as if alone",
            "Conflicts abort with a retryable error",
            "Needs bounded, idempotent retries",
            "For invariants math must guarantee",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Serializable buys guaranteed invariants and pays in retries: 40001 means run the whole unit of work again.",
        code: [
          "const RETRIES = 3;",
          "",
          "export async function reserve(eventId: number, userId: number) {",
          "  for (let attempt = 1; attempt <= RETRIES; attempt++) {",
          "    try {",
          "      return await withTx('serializable', async (t) => {",
          "        const { rows } = await t.query(",
          "          'SELECT seats_left FROM events WHERE id = $1 FOR UPDATE',",
          "          [eventId],",
          "        );",
          "        if (rows[0].seats_left < 1) throw new ConflictError();",
          "        await t.query(",
          "          'INSERT INTO reservations (event_id, user_id) VALUES ($1, $2)',",
          "          [eventId, userId],",
          "        );",
          "      });",
          "    } catch (err) {",
          "      // 40001: serialization failure — retry the whole unit of work",
          "      if (err.code === '40001' && attempt < RETRIES) continue;",
          "      throw err;",
          "    }",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating serialization failure (40001) or deadlock as a 500 and giving up",
          fix: "Retry the whole transaction with backoff; the engine aborted it for your safety, and the work is safe to redo.",
        },
        {
          mistake: "Updating many rows in whatever order the application loop produced",
          fix: "Sort by a stable key and update in one consistent order; most deadlocks are just two writers doing the reverse.",
        },
        {
          mistake: "Running check-then-write races at the default level and calling it safe",
          fix: "One row: SELECT FOR UPDATE. Across statements: Repeatable Read or Serializable with retries. Constraints wherever possible.",
        },
        {
          mistake: "Running ALTER TABLE on a hot table without lock_timeout",
          fix: "Set lock_timeout so the ALTER fails fast instead of queueing behind one long query — and queueing everything else behind itself.",
        },
      ],
      fieldChecklist: [
        "I can name the isolation level each of my write paths runs at, and why it is enough.",
        "Serialization failures and deadlocks are retried with bounded backoff, and the operations are idempotent.",
        "Multi-row updates sort by a stable key so all writers take locks in the same order.",
        "Check-then-write on a single row uses SELECT FOR UPDATE, not hope.",
        "Job tables use SKIP LOCKED so workers claim work without blocking each other.",
        "DDL runs carry a lock_timeout, and I know what queues behind a waiting ALTER.",
      ],
      keyTerms: [
        {
          term: "Isolation level",
          definition:
            "The tier of protection against concurrent-transaction anomalies; the default Read Committed is per-statement, Serializable is whole-transaction.",
        },
        {
          term: "Deadlock",
          definition:
            "Two transactions each holding what the other needs; Postgres detects the cycle and aborts one victim to retry.",
        },
        {
          term: "SELECT FOR UPDATE",
          definition:
            "A row-locking read that holds its locks to commit; with SKIP LOCKED it becomes the basis of work queues.",
        },
        {
          term: "Serialization failure",
          definition:
            "The Postgres error 40001 telling you the transaction conflicted and must be retried whole; the contract behind strong isolation.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain isolation levels like I have to configure one today.",
          a: "Read Committed: every statement sees fresh committed data — fast, and fine when constraints carry correctness. Repeatable Read: one snapshot per transaction, so repeated reads agree. Serializable: behaves as if transactions ran alone; conflicting ones abort with 40001 and must be retried. Pick the weakest level your invariants survive, add the retry loop for anything stronger, and let UNIQUE and CHECK constraints do the work at any level.",
        },
        {
          q: "How do you prevent deadlocks?",
          a: "Most are ordering bugs: two transactions touching the same rows in opposite orders. Fix the class, not the instance — sort ids and update in one consistent order everywhere, keep transactions short so holds are brief, and treat the deadlock error as retryable regardless. Postgres detects cycles and kills one victim, so the remaining question is whether your code retries gracefully or turns a scheduling event into a user-facing failure.",
        },
        {
          q: "Where would SELECT FOR UPDATE SKIP LOCKED be the right tool?",
          a: "Work queues: a jobs table where many workers pull without stepping on each other. Each worker runs SELECT ... FOR UPDATE SKIP LOCKED LIMIT n, claims unclaimed rows, processes them, and commits or fails them — no coordination service, no double processing, and the row lock is the claim. I have used it for email batches, webhook retries and exports; it is the simplest reliable queue most databases already ship.",
        },
      ],
      quiz: [
        {
          question:
            "What does Postgres error 40001 mean your code should do?",
          options: [
            "Log and move on",
            "Retry the entire transaction, bounded times, with the operation idempotent",
            "Reconnect the pool",
            "Escalate to serializable",
          ],
          answerIndex: 1,
          explanation:
            "40001 is a serialization failure: the transaction conflicted and was aborted for correctness. Retrying whole units of work is the contract that makes strong isolation usable.",
        },
        {
          question:
            "Two batch jobs deadlock nightly updating the same accounts. Root cause?",
          options: [
            "They update rows in opposite orders — unsorted multi-row updates",
            "The accounts table needs an index",
            "The isolation level is too low",
            "VACUUM has not run",
          ],
          answerIndex: 0,
          explanation:
            "Deadlocks are lock-ordering collisions, not table defects. Sorting ids so every writer takes locks in the same order eliminates the class; retries remain the safety net.",
        },
        {
          question:
            "Which clause turns SELECT FOR UPDATE into a safe multi-worker queue?",
          options: [
            "NOWAIT",
            "FOR SHARE",
            "SKIP LOCKED",
            "Default behavior",
          ],
          answerIndex: 2,
          explanation:
            "SKIP LOCKED makes each worker claim only unclaimed rows instead of waiting behind each other — no coordination service needed, and the row lock itself is the claim.",
        },
      ],
    },
    {
      number: 13,
      title: "Schema Migrations & Zero-Downtime Changes",
      summary:
        "The deploy that breaks production is almost never the new endpoint. It is the ALTER TABLE that locked the orders table on a Tuesday lunch rush.",
      keyIdea:
        "The expand-and-contract pattern: expand (add new nullable), migrate code, contract (remove old) only after no running code touches it.",
      deepDive: [
        {
          heading: "The deploy is not the migration",
          paragraphs: [
            "The dangerous moment in shipping is not the new endpoint; it is DDL against a table that is busy. In Postgres, ALTER TABLE takes locks that must wait for every existing reader and writer to finish, and everything that arrives after queues behind the ALTER — a table locked for a minute at lunchtime is an outage with a database-shaped cause. Adding a column with a DEFAULT that forces a rewrite used to be the textbook stall; modern Postgres optimizes many of those cases, but the queueing rule stands.",
            "The guardrails are cheap and permanent. Run migrations with lock_timeout so a blocked ALTER fails fast instead of joining the queue, and a statement_timeout appropriate to the job. Never bundle migrations with feature deploys — ship the migration, watch it, then ship the code that uses it, so a rollback never has to reverse both. And treat CREATE INDEX CONCURRENTLY and its DROP sibling as the only ways to touch indexes on tables with traffic, knowing a failed concurrent build leaves an invalid index to clean up.",
          ],
        },
        {
          heading: "Expand, migrate, contract",
          paragraphs: [
            "Zero-downtime changes are choreography, not heroics. Expand: add the new column or table as nullable, harmless to every running version. Migrate: backfill in batches — a few thousand rows, a pause, repeat — so you never hold a transaction long enough to matter, and make the job resumable because it will be interrupted. Deploy code that writes both shapes and still reads the old one. Switch reads to the new shape once parity is verified. Contract: drop the old only when no running version touches it.",
            "The discipline that makes it work is patience about the contract step. Old code survives longer than anyone plans: a canary instance, a worker nobody updated, a mobile client pinned to last year's API. The rule is versions, not dates — drop nothing until you can prove no running code reads it, using logs, feature flags or a read counter on the old column. Renames are the canonical trap: add the new name, dual write, switch, drop — never RENAME and hope every deploy lands in the same second.",
          ],
        },
        {
          heading: "Migrations are code with more consequences",
          paragraphs: [
            "Because migrations mutate shared state, they deserve the same engineering as code: versioned in the repository, applied by a tool that records what ran (Flyway, Liquibase, goose, or your framework's system), and reviewable like any pull request. Every migration gets its reverse story written down — even if the answer is 'restore from backup', which is a decision, not an embarrassment. A migration that cannot say what happens when it fails midway does not understand itself, and neither will you at 3am.",
            "Rehearse on production-shaped data. A backfill that takes eight minutes on the staging copy of one thousand rows may take a day against fifty million, and a plan validated on the small copy is a plan that has never run. Dry-run the DDL, measure the backfill rate, and schedule accordingly. The teams that migrate calmly at scale are not braver; they simply refuse to run any statement for the first time in production — including the boring ones, especially the boring ones.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Expand and contract",
        caption:
          "Never change and remove in one step; give old and new code time to coexist.",
        stages: [
          { label: "Expand", note: "add nullable, no rewrite" },
          { label: "Backfill", note: "batched, resumable" },
          { label: "Dual write", note: "write both, read old" },
          { label: "Switch reads", note: "verify parity first" },
          { label: "Contract", note: "drop only when unread" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "The rename that never locks anyone out: add nullable, batch the backfill, drop the old after the last reader is gone.",
        code: [
          "-- Step 1: expand — safe for every running version.",
          "ALTER TABLE orders ADD COLUMN total_v2_cents BIGINT;",
          "",
          "-- Step 2: backfill in resumable batches.",
          "UPDATE orders SET total_v2_cents = total_cents",
          " WHERE id IN (",
          "   SELECT id FROM orders",
          "    WHERE total_v2_cents IS NULL",
          "    ORDER BY id",
          "    LIMIT 5000",
          " );",
          "",
          "-- Step 3, much later: contract — only when nothing reads the old.",
          "ALTER TABLE orders DROP COLUMN total_cents;",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Shipping a migration and the code that needs it in the same deploy",
          fix: "Ship the migration first, verify, then deploy the code. Rollback then means reverting code, not un-altering a table.",
        },
        {
          mistake: "Running ALTER TABLE on a busy table without lock_timeout",
          fix: "Set lock_timeout and retry; a waiting ALTER queues every new reader and writer behind itself.",
        },
        {
          mistake: "Backfilling fifty million rows in one transaction",
          fix: "Batch by primary key with a pause between chunks; resumable jobs survive the restarts they will inevitably need.",
        },
        {
          mistake: "Dropping the old column on a schedule instead of on evidence",
          fix: "Drop only when logs or counters prove no running version reads it. Versions, not dates, gate the contract step.",
        },
      ],
      fieldChecklist: [
        "Migrations are versioned, reviewed and applied by a tool that records what ran.",
        "Every migration I ship has a written reverse story, even if it is restore-from-backup.",
        "DDL on live tables runs with lock_timeout, and indexes use the CONCURRENTLY variants.",
        "Backfills are batched, resumable and measured against production-shaped volumes.",
        "I can prove which running versions read each column before I drop it.",
        "Migrations and feature deploys ship separately.",
      ],
      keyTerms: [
        {
          term: "Expand and contract",
          definition:
            "The zero-downtime pattern: add the new shape, migrate code and data, remove the old only when nothing reads it.",
        },
        {
          term: "Backfill",
          definition:
            "Populating a new column from old data in resumable batches, sized so no single update matters.",
        },
        {
          term: "lock_timeout",
          definition:
            "The Postgres setting that makes DDL fail fast instead of queueing behind every existing reader and writer.",
        },
        {
          term: "Invalid index",
          definition:
            "The leftover from a failed CREATE INDEX CONCURRENTLY; it exists, is used by nothing, and must be dropped.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you run a breaking schema change with zero downtime?",
          a: "Expand and contract. Add the new column nullable — harmless to every running version. Backfill in batches that can resume. Ship code that writes both shapes and reads the old, verify parity, switch reads to the new, and only then drop the old after evidence that no running code touches it. Each step is independently reversible, so the risk is spread across deploys instead of concentrated in one ALTER.",
        },
        {
          q: "An ALTER TABLE hung in production and requests are piling up. What happened?",
          a: "The ALTER waits for an access-exclusive lock until every current reader and writer finishes, and everything arriving queues behind it — one long report query turns a two-second DDL into an outage. The fix now is to cancel the ALTER and the long query it waits on. The fix forever is lock_timeout on DDL, so blocked changes fail fast and retry instead of joining the queue.",
        },
        {
          q: "How do you test migrations?",
          a: "On production-shaped data, never the staging toy copy. I dry-run the DDL, measure the backfill rate against realistic volumes to get a real duration, and rehearse the rollback story. Version skew matters too: the old code must survive alongside the new shape, so I test the app with and without the migration applied. The boring discipline is refusing to run any statement for the first time in production.",
        },
      ],
      quiz: [
        {
          question:
            "Why must migrations and feature deploys ship separately?",
          options: [
            "The migration tool is slow",
            "So a rollback means reverting code, not reversing a data-changing DDL",
            "They conflict over ports",
            "CI cannot run both",
          ],
          answerIndex: 1,
          explanation:
            "DDL mutates shared state and some changes cannot be cleanly undone. Shipping the migration first, verified, keeps every rollback a code-only event.",
        },
        {
          question:
            "A rename of a hot column is requested. What is the safe path?",
          options: [
            "Add the new column, dual write, switch reads, drop the old later",
            "ALTER TABLE RENAME during a maintenance window",
            "Rename and deploy everything atomically",
            "Create a new table and copy everything in one transaction",
          ],
          answerIndex: 0,
          explanation:
            "Rename in one step breaks every running version that still says the old name. Expand-and-contract lets old and new coexist until the last reader is gone.",
        },
        {
          question:
            "What does lock_timeout do for a migration?",
          options: [
            "Speeds up the ALTER itself",
            "Extends the statement timeout",
            "Makes blocked DDL fail fast instead of queueing behind existing readers and writers",
            "Disables autovacuum during the run",
          ],
          answerIndex: 2,
          explanation:
            "A waiting ALTER collects every new query behind it. lock_timeout turns that infinite queue into a fast, retryable failure — the guardrail that makes lunchtime DDL survivable.",
        },
      ],
    },
    {
      number: 14,
      title: "Partitioning vs. Sharding & Backup/Restore Verification",
      summary:
        "Two words people confuse, and one habit that saves companies: restoring a backup you have never restored is not a backup, it is a hope.",
      keyIdea:
        "The 3-2-1-1-0 rule. Schedule the restore drill monthly; make the failure loud.",
      deepDive: [
        {
          heading: "Partitioning and sharding are different tools",
          paragraphs: [
            "Partitioning divides one table into pieces inside one database system: by month for events, by tenant range, by hash. The table keeps one name, the planner prunes partitions so queries touching one month scan one partition, and old data leaves by DETACH or DROP instead of a giant DELETE. Maintenance gets cheaper — indexes build per partition, vacuum works on smaller chunks. Nothing about deployment changes; it is still one engine, one connection pool, one backup story per system.",
            "Sharding splits data across independent database systems, each with its own failure domain, connection pool and operational burden — Chapter 10's permanent decision. The confusion is linguistic, so fix the vocabulary: partition when one table's size hurts scans or maintenance; shard when one machine's capacity or isolation needs demand it. Partitioning is a table design you can revisit; sharding is an architecture you live in. Announcing 'we partitioned the database' when you sharded it, or the reverse, has sent more than one incident review sideways.",
          ],
        },
        {
          heading: "A backup you never restored is a hope",
          paragraphs: [
            "The uncomfortable industry truth: a large share of backup restore attempts surface problems — missing files, expired credentials, schemas that drifted from the tooling, data too stale to matter. Until you have restored it, the backup is an unverified artifact. The discipline is the restore drill: on a schedule, restore the latest backup into a scratch environment, run integrity checks — row counts against production, a checksum on the payment tables, the app booting against it — and report the result somewhere visible. A drill that never fails is not being run honestly.",
            "Measure what matters: recovery point objective — how much data you can afford to lose, which sets backup frequency — and recovery time objective — how long the restore takes, which sets tooling and rehearsal. A nightly backup gives a worst-case day of loss; if the business needs an hour, that is a different design with WAL archiving and point-in-time recovery. Time the drill. The first restore of a terabyte-class database is a project; discovering that during the incident makes it a different, worse project.",
          ],
        },
        {
          heading: "3-2-1-1-0, operated, not framed",
          paragraphs: [
            "The rule reads like a poster and works like a checklist. Three copies of the data. Two different media or platforms, so one format or vendor failure is not total. One copy offsite, because the flood does not check your region settings. One copy offline or immutable, because the modern adversary — ransomware — specifically hunts for backups with the same credentials as production. Zero errors: a verified restore drill. Each clause exists because a real failure class killed someone's only copy.",
            "Operational notes from the field: pg_dump and pg_restore for portable logical backups, base backups with WAL archiving for point-in-time recovery on bigger systems, and physical copies for fast full restores — know which one each requirement needs. Test access, not just data: who can trigger the restore, from where, with credentials that still work. And make failure loud — a silent failed backup job is indistinguishable from a healthy one in every dashboard nobody reads. The habit is monthly; the payoff is the day everything else went wrong.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The 3-2-1-1-0 rule",
        caption:
          "Copies and media are the easy part; zero errors means a restore you have actually rehearsed.",
        tiers: [
          { label: "0 errors", note: "a restore drill that passed" },
          { label: "1 offline copy", note: "immune to stolen credentials" },
          { label: "1 offsite copy", note: "survives the building" },
          { label: "2 media types", note: "no single format failure" },
          { label: "3 total copies", note: "production plus two" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The drill that converts a backup from a hope into a fact: restore to scratch, count the money, report it.",
        code: [
          "# Monthly restore drill — a backup is real only after this passes.",
          "cp /backups/pg/base-2026-03-01.tar /tmp/drill/   # pulled from cold storage",
          "dropdb --if-exists drill_restore",
          "createdb drill_restore",
          "pg_restore --no-owner -d drill_restore /tmp/drill/base-2026-03-01.tar",
          "",
          "# Integrity: counts and money sums must match production.",
          "psql -d drill_restore -c 'SELECT count(*) FROM orders;'",
          "psql -d drill_restore -c 'SELECT sum(total_cents) FROM orders;'",
          "",
          "# Report pass or fail where the team reads it. Silence is failure.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Backups that run nightly and have never been restored",
          fix: "Schedule a monthly restore drill into a scratch database with count and checksum checks; make pass or fail visible.",
        },
        {
          mistake: "Confusing partitioning with sharding in design docs",
          fix: "Partitioning is one table split inside one system; sharding is many independent systems. Different tools, different costs.",
        },
        {
          mistake: "One copy of the backup, next to the database, same credentials",
          fix: "3-2-1-1-0: three copies, two media, one offsite, one offline or immutable, zero restore errors.",
        },
        {
          mistake: "Choosing backup frequency without asking how much loss the business tolerates",
          fix: "Set RPO with the business first; then pick nightly dumps versus WAL archiving and point-in-time recovery.",
        },
      ],
      fieldChecklist: [
        "I can state our RPO and RTO, and they were chosen with the business, not by the backup tool.",
        "A restore drill runs monthly, into scratch, with row-count and checksum checks, and reports visibly.",
        "Copies exist on two media types, one offsite, and one offline or immutable.",
        "Backup job failures alert loudly; silence is treated as failure.",
        "I know which tables would be checked first in a restore, and who can trigger it.",
        "Partitioning and sharding decisions in my docs use the words correctly.",
      ],
      keyTerms: [
        {
          term: "Partitioning",
          definition:
            "Splitting one table into named pieces inside one database system so scans, maintenance and retention work on chunks.",
        },
        {
          term: "RPO",
          definition:
            "Recovery point objective: how much data the business can afford to lose; the number that decides backup frequency and WAL archiving.",
        },
        {
          term: "RTO",
          definition:
            "Recovery time objective: how long the restore may take; the number that decides tooling, sizing and how often you rehearse.",
        },
        {
          term: "Point-in-time recovery",
          definition:
            "Restoring a base backup and replaying WAL to any chosen moment; the design behind hour-grade RPOs.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you know your backups actually work?",
          a: "By restoring them on a schedule. Monthly, we pull the latest backup into a scratch database, run pg_restore, compare row counts and money sums against production, and post the result. The drill has caught expired credentials and schema drift before they became incidents. Until a backup has been restored successfully, I treat it as an unverified artifact, not a safety net.",
        },
        {
          q: "When do you partition a table instead of sharding?",
          a: "Partition when the table itself is the problem: billions of rows where queries target one slice, retention that should be a DROP of an old partition instead of a giant DELETE, index builds that need to be per-chunk. It stays one system — no new operational surface. Shard when one machine is out of capacity or isolation is required. The vocabularies get confused constantly, and the costs are wildly different.",
        },
        {
          q: "Design a backup strategy for a payments database.",
          a: "Start from the business: RPO near zero means WAL archiving with point-in-time recovery, not nightly dumps. Then 3-2-1-1-0: three copies, two media, one offsite, one offline or immutable because ransomware hunts backups with production credentials. Restore drills monthly with checksum checks on the ledger tables, timed so we know the real RTO. Frequency, tooling and rehearsal all follow from the two objectives, in that order.",
        },
      ],
      quiz: [
        {
          question:
            "What does the 0 in 3-2-1-1-0 mean?",
          options: [
            "Zero downtime during backups",
            "Zero restore errors: a drill that actually passed",
            "Zero cost",
            "Zero copies kept offline",
          ],
          answerIndex: 1,
          explanation:
            "Zero is the verification clause: the restore drill ran and passed. Copies without a rehearsed, verified restore are hopes with a schedule attached.",
        },
        {
          question:
            "Events table: 2 billion rows, queries almost always filter to one month. Best first move?",
          options: [
            "Partition the table by month so the planner prunes to one chunk",
            "Shard across six databases",
            "Add more indexes on every column",
            "Move the table to MongoDB",
          ],
          answerIndex: 0,
          explanation:
            "One table, one system, slice-shaped access: partitioning prunes scans and makes retention a DROP of an old chunk. Sharding buys capacity and isolation you have not shown a need for.",
        },
        {
          question:
            "Which backup design supports restoring to any minute of the last week?",
          options: [
            "A single weekly pg_dump",
            "Nightly CSV exports",
            "Base backup plus continuous WAL archiving with point-in-time recovery",
            "A copy of the data directory made while the server runs",
          ],
          answerIndex: 2,
          explanation:
            "A base backup plus archived WAL replays to any chosen timestamp within retention. The hot data-directory copy is inconsistent under writes; dumps and CSVs only recover to their run time.",
        },
      ],
    },
  ],
};
