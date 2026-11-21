/**
 * GOLDEN REFERENCE — do not import this file anywhere.
 *
 * It shows the exact format, depth and voice expected of every expanded
 * chapter in src/lib/books/book-*.ts. Book 01's chapters 1-3 live here;
 * book-01.ts copies them verbatim and expands the rest.
 */
import type { Book, DiagramSpec } from "../types";

/** All eight diagram kinds, demonstrated. Copy the shape, not the content. */
export const diagramSpecimens: DiagramSpec[] = [
  {
    kind: "flow",
    title: "Request lifecycle",
    caption: "What happens between the click and the row, left to right.",
    steps: [
      { label: "Client", note: "user clicks" },
      { label: "API", note: "validate input" },
      { label: "Queue", note: "accept the job" },
      { label: "Worker", note: "do the work" },
      { label: "DB", note: "write result" },
    ],
  },
  {
    kind: "pipeline",
    title: "Deploy pipeline",
    caption: "Every stage must pass before the next one runs.",
    stages: [
      { label: "Lint", note: "style gates" },
      { label: "Tests", note: "unit + integration" },
      { label: "Build", note: "compile once" },
      { label: "Staging", note: "smoke test" },
      { label: "Prod", note: "canary first" },
    ],
  },
  {
    kind: "layers",
    title: "Where truth lives",
    caption: "Read from the top down; each layer trusts the one beneath it.",
    layers: [
      { label: "Edge cache", note: "fast, eventually stale" },
      { label: "App memory", note: "per-instance, ephemeral" },
      { label: "Redis", note: "shared, evictable" },
      { label: "Postgres", note: "the source of truth" },
    ],
  },
  {
    kind: "pyramid",
    title: "The testing pyramid",
    caption: "Cheap tests in volume at the base; expensive tests at the tip.",
    tiers: [
      { label: "E2E", note: "a handful, critical flows only" },
      { label: "Integration", note: "API + database, the workhorse" },
      { label: "Unit", note: "hundreds, fast and focused" },
    ],
  },
  {
    kind: "cycle",
    title: "The incident loop",
    caption: "Monitoring feeds review, review feeds prevention, forever.",
    steps: [
      { label: "Detect", note: "alert fires" },
      { label: "Triage", note: "who is affected" },
      { label: "Mitigate", note: "stop the bleeding" },
      { label: "Fix", note: "root cause" },
      { label: "Review", note: "blameless postmortem" },
    ],
  },
  {
    kind: "fork",
    title: "Do you even need a cache?",
    caption: "A decision fork — most 'we need Redis' conclusions die at the first branch.",
    start: "Reads are slow",
    branches: [
      { label: "Missing index?", outcome: "Add the index. Done.", good: true },
      { label: "N+1 queries?", outcome: "Batch the queries. Done.", good: true },
      { label: "Genuinely hot key?", outcome: "Now consider a cache.", good: true },
      { label: "Cache first, ask later", outcome: "New failure mode, same latency.", good: false },
    ],
  },
  {
    kind: "matrix",
    title: "What to automate next",
    caption: "Frequency against blast radius. Top-left first.",
    axes: { x: "Blast radius if it fails", y: "How often you do it" },
    quadrants: [
      { label: "Automate first", note: "daily + risky: deploys, migrations" },
      { label: "Script it", note: "daily + safe: local setup" },
      { label: "Double-check by hand", note: "rare + risky: failover" },
      { label: "Ignore", note: "rare + safe: renaming things" },
    ],
  },
  {
    kind: "compare",
    title: "Two ways to ship a migration",
    caption: "The left column is a Tuesday. The right column is a war story.",
    left: {
      heading: "Expand and contract",
      items: [
        "Add nullable column, ship code that writes both",
        "Backfill in batches while traffic flows",
        "Switch reads behind a flag, watch metrics",
        "Drop the old column in a later release",
      ],
    },
    right: {
      heading: "Big-bang ALTER",
      items: [
        "One statement rewrites the live table",
        "Locks every row during lunch rush",
        "Replica lag spikes across regions",
        "Rollback means restoring from backup",
      ],
    },
  },
];

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
  ],
};
