/**
 * Book 05 — Master Security.
 *
 * The attacker's playbook and your counters. Expanded from books-data.ts:
 * chapter titles, summaries and key ideas are kept verbatim; the rest follows
 * the golden reference format in _reference.ts.
 */
import type { Book } from "../types";

export const book05: Book = {
  id: "book-05",
  number: 5,
  title: "Master Security",
  subtitle: "Book 05 of 13 · The Effortless Series",
  tagline:
    "The attacker's playbook and your counters: SQL injection, XSS, CSRF, CORS, security headers, the OWASP Top 10, dependency audits, penetration testing, IDOR, SSRF, supply-chain security and bot mitigation.",
  description:
    "Your first public endpoint will be scanned by automated bots within hours of going live. This book is the difference between that scan being boring and being the worst week of your quarter.",
  layer: "Defend the perimeter",
  layerQuestion: "What does an attacker try, and what stops it?",
  accentColor: "#ef4444",
  emoji: "05",
  months: "Month 4",
  chapters: [
    {
      number: 1,
      title: "SQL Injection",
      summary:
        "The oldest entry on the list and still the most embarrassing: the database executes a string the attacker wrote.",
      keyIdea:
        "Input becomes query structure instead of data. The durable fix is structural — an ORM or query builder as the default path.",
      deepDive: [
        {
          heading: "One string, two meanings",
          paragraphs: [
            "SQL injection is the vulnerability where attacker-supplied text is concatenated into a query string, so the database cannot tell your code's intent from the attacker's payload. A login form sends an email; your code builds 'SELECT * FROM users WHERE email = ' + input. The attacker submits ' OR 1=1 -- and the WHERE clause becomes a tautology. The database did nothing wrong — it executed exactly what the string said.",
            "Injection has sat at or near the top of vulnerability surveys for two decades because the bug is invisible in code review: the query looks like every other template string. The failures are quiet and catastrophic — dump the users table, UNION extra columns into a product listing, or '; DROP TABLE orders; -- if the account has permission. Automated scanners probe every input with payloads like these within hours of your deploy, so the injection you ship is found by someone else first.",
          ],
        },
        {
          heading: "What an attacker actually does",
          paragraphs: [
            "The manual craft starts with fingerprinting: submit a single quote and watch for a 500, append AND 1=1 versus AND 1=2 and compare responses (boolean-based blind), or call SLEEP(5) and pg_sleep to measure timing differences (time-based blind) when nothing is reflected. Error-based injection leans on verbose database errors to read data a piece at a time. None of these techniques need to see query output — they only need your server to answer differently when a condition holds.",
            "Then escalation: once one string-built query exists, the attacker asks what else the database account can reach — other tables, files the engine can read, and in the worst configurations, OS command execution through features like MSSQL's xp_cmdshell. Where the driver allows stacked queries, one round trip can carry a SELECT and an UPDATE. Defense in depth matters here, because injection is rarely the only weak layer it walks through on its way to something valuable.",
          ],
        },
        {
          heading: "The structural fix and its leftovers",
          paragraphs: [
            "The fix is structural, not sanitizing: never build SQL by concatenation. Use an ORM (Prisma, Drizzle, SQLAlchemy), a query builder, or driver-level parameterized queries as the only path to the database, and enforce that with lint rules and review. Escaping quotes manually is a losing game — encoding rules differ per database, per driver setting, per identifier context — and one missed path is a breach. Chapter 2 covers the parameterization mechanism in full.",
            "Sweep the leftover surfaces: dynamic ORDER BY and column names in admin dashboards, stored procedures built with dynamic SQL inside, reporting tools that accept SQL fragments, and old cron scripts nobody remembers. Grep for concatenation near query calls and run sqlmap against staging — the two find different populations of bugs. When you inherit a codebase, do this sweep first, because inherited injection is the most common kind.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Anatomy of an injection",
        caption:
          "The database executes the attacker's sentence because you let input become syntax.",
        steps: [
          { label: "Attacker input", note: "payload, not data" },
          { label: "String concat", note: "code builds query text" },
          { label: "Query executes", note: "DB sees valid SQL" },
          { label: "Data exfiltrated", note: "table dumped or mutated" },
          { label: "Found by scanner", note: "hours after your deploy" },
        ],
      },
      codeExample: {
        language: "javascript",
        caption:
          "Concatenation hands the attacker the pen: the payload becomes SQL grammar instead of a value.",
        code: [
          "// The bug: input becomes query structure",
          "const email = req.body.email;          // attacker-controlled",
          "// e.g. ' OR '1'='1' -- arrives as the email value",
          "const q = 'SELECT * FROM users WHERE email = ' + email;",
          "await db.query(q);",
          "// The database receives:",
          "// SELECT * FROM users WHERE email = '' OR '1'='1' --'",
          "// The WHERE clause is now always true — every row returns.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Sanitizing input by stripping quotes instead of parameterizing.",
          fix: "Stripping breaks legitimate names like O'Brien and misses encoding tricks. Parameters make input data by construction — use them everywhere.",
        },
        {
          mistake: "Hiding database errors from users but logging full queries with input.",
          fix: "Error pages are not a fix. Keep the parameterized path as the only path; log parameters at debug level only.",
        },
        {
          mistake: "One raw report query concatenating ORDER BY inside an otherwise safe ORM codebase.",
          fix: "Inventory raw queries with grep for template literals near query calls; route every dynamic identifier through a server-side allowlist.",
        },
        {
          mistake: "Giving the app database account owner rights to avoid permission issues.",
          fix: "Run least-privilege: one schema, no superuser, no file access. Injection under a limited role is an incident; under owner it is a catastrophe.",
        },
      ],
      fieldChecklist: [
        "I can point to the single module through which every database query in my project flows.",
        "I have grepped the codebase for string concatenation and template literals adjacent to query calls.",
        "I route every dynamic identifier (column, table, ORDER BY) through a server-side allowlist.",
        "My database accounts run least-privilege, with no superuser or file-read rights.",
        "I have run sqlmap or an equivalent scanner against a staging copy and triaged what it found.",
        "I keep verbose database errors in server-side logs, never in responses.",
      ],
      keyTerms: [
        {
          term: "SQL injection",
          definition:
            "An attack where input is concatenated into query text so the database parses attacker-controlled syntax instead of storing attacker-controlled data.",
        },
        {
          term: "Blind injection",
          definition:
            "Injection where results are not reflected, so the attacker reads data through boolean differences or response delays instead.",
        },
        {
          term: "Stacked queries",
          definition:
            "Multiple SQL statements sent in one round trip — the feature that turns an injected SELECT into an UPDATE or DELETE.",
        },
        {
          term: "Least privilege",
          definition:
            "The database account holds exactly the permissions the application needs — the difference between an incident and a catastrophe after injection.",
        },
      ],
      interviewQuestions: [
        {
          q: "SQL injection has been known for over twenty years. Why is it still everywhere?",
          a: "Because the bug is invisible in review and the fix is structural. A concatenated query looks like every other template string, so it survives code review, and teams bolt on escaping instead of changing the default path to parameters. Every new codebase, framework and developer reintroduces the same mistake. The durable answer is organizational: one query module, lint rules against interpolation, least-privilege accounts, and scanners in CI.",
        },
        {
          q: "How does blind SQL injection work when nothing is reflected to the page?",
          a: "The attacker asks yes-or-no questions and reads the answers indirectly. A payload like AND 1=1 versus AND 1=2 changes the response; a time-based payload like pg_sleep(10) delays the server only when a condition holds. Scripting thousands of those probes extracts the database a character at a time. That is why uniform error handling and consistent response timing are part of injection defense.",
        },
        {
          q: "You inherit a legacy codebase. How do you find injection risk quickly?",
          a: "Three sweeps in an afternoon. Grep for template literals and concatenation near query, execute or raw calls — that finds the obvious ones. Run sqlmap against a staging environment to catch blind paths. Then check the database account's actual privileges, because that decides the blast radius of everything I missed. Each finding becomes a parameterized-query ticket, oldest and most exposed first.",
        },
      ],
      quiz: [
        {
          question:
            "An attacker submits ' OR '1'='1' -- into a login email field and the query is built by concatenation. What happens?",
          options: [
            "The database rejects the malformed email and logs an error",
            "The WHERE clause becomes always-true and the query returns rows it should not",
            "The input is escaped automatically by the driver",
            "The application crashes with a 500, blocking the attack",
          ],
          answerIndex: 1,
          explanation:
            "The quotes close your string, the OR adds a tautology, and the comment swallows the rest. The database sees valid SQL — grammar the attacker wrote — because the input never traveled as a parameter.",
        },
        {
          question:
            "Which control limits the damage if an injection slips through anyway?",
          options: [
            "Escaping single quotes on input",
            "Hiding error messages from users",
            "A least-privilege database account",
            "Longer password requirements",
          ],
          answerIndex: 2,
          explanation:
            "Blast radius is set by what the database account may touch. Injection under a read-only, one-schema role is a bug report; under an owner or superuser role it is an outage and a breach.",
        },
        {
          question:
            "Where does SQL injection most often survive in a modern ORM codebase?",
          options: [
            "In every generated query",
            "In raw or string-built queries: dynamic ORDER BY, report builders, procedures with internal EXEC",
            "In migration files only",
            "In the connection string",
          ],
          answerIndex: 1,
          explanation:
            "ORMs parameterize their generated statements. The residue lives at the edges — raw SQL, dynamic identifiers, dynamic SQL inside procedures — which is exactly where a targeted grep sweep should start.",
        },
      ],
    },
    {
      number: 2,
      title: "Parameterized Queries",
      summary:
        "The complete fix for injection, and a performance feature hiding inside a security one.",
      keyIdea:
        "Parameters cannot parameterize identifiers or keywords — those come from fixed server-side allowlists.",
      deepDive: [
        {
          heading: "The mechanism, precisely",
          paragraphs: [
            "A parameterized query sends the SQL text and the values on separate channels. The database parses the statement first — structure fixed, grammar final — and only then binds your values into placeholders like $1 or the driver's equivalent. At no point is input parsed as SQL, so a payload like ' OR 1=1 -- arrives as a literal string a user might legitimately have typed. Injection is not blocked; it becomes unrepresentable.",
            "The same design is a performance win. Databases cache parsed plans, and a parameterized statement with unchanged structure hits that plan cache while every distinct concatenated string forces a re-parse — real CPU saved on high-traffic endpoints. The security control and the optimization are the same mechanism, which is why 'we will parameterize later' is a claim you never need to make.",
          ],
        },
        {
          heading: "Where parameters cannot reach",
          paragraphs: [
            "Parameters bind values, never identifiers or keywords. You cannot parameterize a table name, a column name, a sort direction, or the number of placeholders in an IN clause. So the dynamic parts of a query — the sortable column in an admin table, the filter field a dashboard exposes — must come from a server-side allowlist: a fixed map from the client's token ('name', 'createdAt') to SQL the server wrote itself. Never interpolate the raw value; look it up instead.",
            "The same discipline covers LIKE patterns (escape the user's wildcards % and _ before binding the value), pagination cursors, and JSON path expressions. If a value genuinely must influence structure, the server owns the translation: the client sends an enum, the server sends the SQL. This is also where ORM risk concentrates — raw fragments and literal() escape hatches are the injection surface inside otherwise safe frameworks.",
          ],
        },
        {
          heading: "Making it the only path",
          paragraphs: [
            "Migrating a legacy codebase is a sweep, not a rewrite. Grep for concatenation and template literals near query calls, fix the hot paths first, and add a lint rule or review checklist item that blocks new ones. Many teams enforce the invariant at the boundary — a single query module whose API accepts values, never SQL fragments — so the unsafe pattern has nowhere left to live.",
            "Verify with tests: a unit test that feeds classic payloads into every user-facing query function and asserts the literal string round-trips, not extra rows. Scanners like sqlmap add coverage for blind paths your tests miss. Keep the runtime honest too — an ORM's raw-execution escape hatch is a code-review flag, not a routine tool. The end state is cultural: writing a concatenated query should feel like shipping a TODO.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "One endpoint, two builders",
        caption:
          "The secure version is also the faster one — the same mechanism does both jobs.",
        left: {
          heading: "Concatenated",
          items: [
            "Query text and input merge into one string",
            "Input is parsed as SQL grammar",
            "Plan cache misses on every payload",
            "Payload becomes WHERE structure",
          ],
        },
        right: {
          heading: "Parameterized",
          items: [
            "Text and values travel separately",
            "Input binds as a literal value",
            "Plan cache hits — structure is stable",
            "Payload stays data, always",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Values bind as parameters; the only dynamic identifier comes from a server-side map, never from the request.",
        code: [
          "// Values bind as data; identifiers come from a fixed map",
          "const SORTABLE = {",
          "  name: 'name ASC',",
          "  createdAt: 'created_at DESC',",
          "} as const;",
          "",
          "const sort = SORTABLE[req.query.sort ?? 'createdAt']; // allowlist",
          "const rows = await pool.query(",
          "  'SELECT id, name, created_at FROM orders WHERE customer_id = $1 ORDER BY ' + sort,",
          "  [customerId], // value travels separately — input cannot change structure",
          ");",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Assuming the ORM makes everything safe while raw fragments handle sorting.",
          fix: "ORM raw escape hatches (Prisma $queryRaw, Sequelize literal) are the injection surface. Route every dynamic identifier through a fixed map.",
        },
        {
          mistake: "Escaping quotes manually instead of binding parameters.",
          fix: "Escaping is context-dependent and driver-specific; one missed path is a breach. Bind values — injection becomes unrepresentable.",
        },
        {
          mistake: "Building IN clauses by joining ids into a string.",
          fix: "Pass an array parameter and expand placeholders per driver, or use ANY($1) in Postgres. The values stay values.",
        },
        {
          mistake: "Letting the client send a column name or direction straight into ORDER BY.",
          fix: "The client sends an enum token; the server maps it to SQL it wrote. Anything outside the map gets a 400.",
        },
      ],
      fieldChecklist: [
        "I route every query through one module that accepts values, not SQL fragments.",
        "I resolve every dynamic identifier through a server-side allowlist map.",
        "I escape user-supplied LIKE wildcards (% and _) before binding.",
        "I have a test that feeds injection payloads into user-facing queries and asserts literal round trips.",
        "I enforce a lint rule or review checklist that blocks new string-built queries.",
        "I treat ORM raw-execution escape hatches as code-review flags, not routine tools.",
      ],
      keyTerms: [
        {
          term: "Parameterized query",
          definition:
            "A statement sent with its structure fixed and values bound separately, so input can never be parsed as SQL grammar.",
        },
        {
          term: "Plan cache",
          definition:
            "The database's store of parsed execution plans; stable parameterized statements reuse plans, concatenated strings re-parse every time.",
        },
        {
          term: "Allowlist",
          definition:
            "A fixed server-side map from a client token to server-written SQL; the only safe way to make input influence query structure.",
        },
        {
          term: "Identifier",
          definition:
            "A table, column or keyword inside a query — something a parameter cannot bind, so it must come from the allowlist.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why are parameterized queries the complete fix for SQL injection?",
          a: "Because they remove the bug class instead of blocking instances. The statement is parsed before values exist, so input arrives as data by construction — there is no payload the database could misread as grammar. Compare that with escaping or stripping, which must anticipate every encoding context and fails if one path is missed. Parameters also reuse cached plans, so the secure path is the fast path. The remaining work is identifiers, which allowlists cover.",
        },
        {
          q: "The client needs to choose a sort column and direction. How do you do that safely?",
          a: "The client sends a short token like 'createdAt' or 'name_desc'; the server holds a fixed map from token to SQL the server wrote — 'created_at DESC' — and rejects anything outside the map with a 400. The raw column name never reaches the query. The same pattern covers filter fields and report columns: input selects from choices I defined, it never becomes SQL text.",
        },
        {
          q: "How do you migrate a legacy codebase off concatenated queries without a big-bang rewrite?",
          a: "Sweep and triage. Grep for concatenation and template literals near query calls, rank by exposure — auth, payments, admin first — and fix hot paths while adding a lint rule that blocks new ones. Route everything through one query module so the unsafe pattern has nowhere to live. Then prove it: payload round-trip tests plus a sqlmap run against staging. The migration ships in slices, each independently verifiable.",
        },
      ],
      quiz: [
        {
          question:
            "What does the database do differently when a query is parameterized?",
          options: [
            "It encrypts the values before storing them",
            "It parses the statement structure first, then binds values as data",
            "It blocks all special characters in input",
            "It compiles the query to machine code",
          ],
          answerIndex: 1,
          explanation:
            "Parsing happens before binding, so input can never influence grammar. That ordering — structure first, values second — is what makes injection unrepresentable rather than merely blocked.",
        },
        {
          question:
            "A dashboard lets users pick which column to sort by. The safe pattern is:",
          options: [
            "Escape the column name before inserting it",
            "Concatenate it — column names cannot be injected",
            "Map a client token to a fixed SQL fragment on the server",
            "URL-encode the column name",
          ],
          answerIndex: 2,
          explanation:
            "Parameters cannot bind identifiers. The client sends an enum token; the server maps it to SQL it wrote itself and rejects anything outside the map.",
        },
        {
          question: "Besides security, what do parameterized queries buy you?",
          options: [
            "Smaller result sets",
            "Automatic index creation",
            "Cached execution plans and less parsing CPU under load",
            "Encrypted network traffic",
          ],
          answerIndex: 2,
          explanation:
            "Stable statement structure lets the database reuse parsed plans; every distinct concatenated string forces a re-parse. The optimization and the security control are the same mechanism.",
        },
      ],
    },
    {
      number: 3,
      title: "Input Validation",
      summary:
        "Validation is the bouncer at the door: check everything against an allowlist at the boundary, then trust what got in.",
      keyIdea:
        "Validate at the trust boundary, server-side, against allowlists. The frontend is a suggestion, not a security control.",
      deepDive: [
        {
          heading: "The boundary decides",
          paragraphs: [
            "Validation is a property of a trust boundary, not of a form. The browser checking an email format is user experience; the server rejecting the same malformed email is security. Everything that crosses into your trust domain — HTTP bodies, query strings, headers, webhook payloads, message-queue events, CSV uploads — is hostile until validated, no matter who claims to have checked it first. Client-side checks are bypassed with curl in one line; they exist to help users, never to stop attackers.",
            "The consequence is architectural: every entry point needs a validation gate, and the gate needs to be boring. In a TypeScript backend that means a schema layer — Zod, joi, class-validator — declared once per endpoint and enforced by middleware, so a new field cannot skip the check by being forgotten. Python has Pydantic; Go has validator libraries. The mechanism matters less than the invariant: no handler executes against unvalidated input.",
          ],
        },
        {
          heading: "Allowlists, not denylists",
          paragraphs: [
            "Denylists ask 'what is bad?' — an unanswerable question, because encodings evolve: unicode tricks, double URL-encoding, null bytes, homoglyphs, parser differentials between your validation library and your database or JSON parser. Allowlists ask 'what is good?' and reject everything else: an order status is one of four enum values, a username matches a fixed pattern with a length cap, an amount is a positive number with two decimals. Validation failure closes the door — fail closed, return 400, log it.",
            "Schema validation goes further than types: constrain lengths, ranges, formats and shapes, and strip unknown fields rather than passing them through. Unknown fields are how mass-assignment bugs happen — a client adds 'isAdmin: true' and your ORM happily writes it. A validator with a strict, unknown-fields-rejected policy turns that entire class of bug into a 400 at the door. And canonicalize before validating: decode and normalize first, so the validator and the consumer see the same string.",
          ],
        },
        {
          heading: "Validate, then trust — carefully",
          paragraphs: [
            "'Validate at the boundary, then trust what got in' does not mean every component blindly trusts every other one. Within your trust domain, internal calls can rely on the boundary's work; but anything that re-enters from outside — a third-party webhook, a partner CSV import, a redirect target — is a new boundary with its own gate. Map your boundaries explicitly; most validation bugs are unmarked boundaries where someone assumed a check that never ran.",
            "Keep validation honest with tests: contract tests that throw malformed payloads at every endpoint, fuzzing on the critical ones, and a review habit of asking where this data entered. Validate egress context too, where it matters — what you render and where you redirect are Chapters 4 and 12. Validation is not one wall; it is the habit of checking at every door, on the way in and on the way out.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Input arrives at the boundary",
        caption:
          "Client-side checks are user experience; the server-side gate is the security control.",
        start: "Request hits the server",
        branches: [
          {
            label: "Matches the allowlist schema",
            outcome: "Pass it through, typed and normalized",
            good: true,
          },
          {
            label: "Fails or has unknown fields",
            outcome: "400, log it, fail closed",
            good: true,
          },
          {
            label: "Client already validated it",
            outcome: "Irrelevant — curl exists",
            good: false,
          },
          {
            label: "No schema on this route",
            outcome: "That is the bug — write one",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "One schema per endpoint, enforced before any handler runs — unknown fields fail closed.",
        code: [
          "import { z } from 'zod';",
          "",
          "const CreateOrder = z.object({",
          "  email: z.string().email().max(254),",
          "  qty: z.number().int().min(1).max(100),",
          "  status: z.enum(['draft', 'paid']),  // allowlist, not free text",
          "}).strict();                         // unknown fields rejected",
          "",
          "export function parseOrder(body: unknown) {",
          "  const result = CreateOrder.safeParse(body);",
          "  if (!result.success) throw new BadRequest(result.error.flatten());",
          "  return result.data;                 // trusted from here on",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Relying on frontend validation as a security control.",
          fix: "Client checks are UX. Every attacker submits with curl; the server-side schema gate is the only one that counts.",
        },
        {
          mistake: "Denylisting bad characters instead of allowlisting known-good shapes.",
          fix: "Encodings and parser quirks defeat denylists. Constrain to enums, patterns, ranges and lengths; reject everything else.",
        },
        {
          mistake: "Passing validated objects with unknown fields straight to the ORM.",
          fix: "That is mass assignment: one added 'isAdmin' field becomes a column write. Use strict schemas that strip or reject extras.",
        },
        {
          mistake: "Validating the JSON body but ignoring query params, headers and webhooks.",
          fix: "Inventory every entry point — query string, path params, uploads, queues, third-party callbacks — and gate each one.",
        },
      ],
      fieldChecklist: [
        "I gate every endpoint through a schema layer (Zod, joi, Pydantic) before its handler runs.",
        "My schemas allowlist: enums, patterns, ranges, lengths — and reject unknown fields.",
        "I can list every trust boundary in my system, including webhooks, queues and file uploads.",
        "I return 400 on validation failure, log it server-side, and never leak parser internals.",
        "I keep tests that throw malformed payloads at critical endpoints and expect rejection.",
        "I treat client-side validation as user experience only, never as a security control.",
      ],
      keyTerms: [
        {
          term: "Trust boundary",
          definition:
            "Any line where data enters your trust domain — HTTP, webhooks, queues, uploads — and validation must run.",
        },
        {
          term: "Allowlist validation",
          definition:
            "Accepting only known-good shapes, values and ranges, and rejecting everything else; the opposite of enumerating badness.",
        },
        {
          term: "Mass assignment",
          definition:
            "A bug where client-supplied unexpected fields are written straight to storage because no schema stripped them.",
        },
        {
          term: "Fail closed",
          definition:
            "Rejecting input on any validation failure or uncertainty, instead of letting it through when checks cannot decide.",
        },
      ],
      interviewQuestions: [
        {
          q: "Where should input validation happen and why?",
          a: "At every trust boundary, server-side, before business logic runs. The HTTP handler gate is the non-negotiable one; webhooks, message queues and file uploads are separate boundaries that each need their own schema. Client-side validation improves user experience but proves nothing — requests can be crafted with curl. I enforce it with a schema library wired into middleware so a new endpoint cannot skip the gate by accident.",
        },
        {
          q: "Allowlist or denylist validation — defend your choice.",
          a: "Allowlist, always. Denylists enumerate badness, and badness is unbounded: unicode tricks, double encoding, null bytes, parser differentials between the validator and the consumer. Allowlists bound the problem to what you actually accept — an enum of four statuses, a regex, a numeric range — and fail closed on everything else. Denylists occasionally help for known-bad signatures at the edge, but they are a supplement, never the gate.",
        },
        {
          q: "What is a validation bug you have seen cause real damage?",
          a: "Mass assignment: an endpoint bound the request body straight to the ORM model, and a client discovered that sending an extra status field overwrote order state the UI never exposed. The fix was strict schemas that reject unknown fields, plus tests asserting the rejections. The lesson I carry: validation is not just 'is this well-formed' — it is 'is this exactly the shape I designed, nothing more'.",
        },
      ],
      quiz: [
        {
          question:
            "Your React form validates the email format perfectly. What does that buy you security-wise?",
          options: [
            "It stops most attackers",
            "It proves the server can trust the field",
            "Nothing — client checks are UX; attackers submit with curl",
            "It satisfies the OWASP Top 10 requirement",
          ],
          answerIndex: 2,
          explanation:
            "Client-side checks can be bypassed by any hand-built request. They reduce typos, not risk. The server-side schema gate is the control that actually runs against hostile input.",
        },
        {
          question:
            "A validator accepts any string for 'status'. The allowlist replacement is:",
          options: [
            "A regex that blocks SQL keywords",
            "An enum of the exact statuses the domain defines",
            "A longer maximum length",
            "Escaping the value before use",
          ],
          answerIndex: 1,
          explanation:
            "Allowlisting means accepting only values you defined and rejecting everything else. An enum bounds the space completely; denylisting known-bad strings always leaves encoding tricks unblocked, and the list can never be complete.",
        },
        {
          question:
            "A client adds an unexpected field 'role: admin' to a POST and your ORM saves it. What failed?",
          options: [
            "Encryption at rest",
            "The CORS policy",
            "Input validation with strict unknown-field rejection",
            "The database constraint",
          ],
          answerIndex: 2,
          explanation:
            "That is mass assignment. A strict schema strips or rejects unknown fields, converting the whole class into a 400 at the boundary instead of a write you never intended.",
        },
      ],
    },
    {
      number: 4,
      title: "XSS (Cross-Site Scripting)",
      summary:
        "XSS turns your users' browsers into the attacker's runtime. Your app is just the delivery mechanism.",
      keyIdea:
        "Context-aware output encoding. React escapes by default — XSS is now a framework-bypass problem at the edges.",
      deepDive: [
        {
          heading: "Your app as a delivery vehicle",
          paragraphs: [
            "XSS is code injection into your users' browsers: attacker-supplied data reaches a page in a context where the browser executes it as script. Once it runs, it runs as your user — reading the DOM, firing authenticated requests with their cookies, logging keystrokes. You built the app; the attacker wrote the payload; your user's browser is the runtime. The three flavors: stored (payload persisted in a comment or profile, served to every viewer), reflected (it rides in the URL and echoes back), and DOM-based (client code writes untrusted data into a sink such as innerHTML).",
            "Impact scales with what the session can do. On a marketing site it is defacement; on a banking app it is fraudulent transfers with no credential theft needed, because the browser holds everything the attacker requires. Sessions, CSRF tokens, localStorage tokens — script in the page can read all of them. That is why XSS sits at the top of every vulnerability list: one bug, full user compromise.",
          ],
        },
        {
          heading: "Context is everything",
          paragraphs: [
            "The fix is context-aware output encoding: data must be encoded for the exact context where it lands — HTML body, attribute, JavaScript string, URL, or CSS — because each context has different dangerous characters. Escaping for HTML body does nothing inside an attribute or a script block. Frameworks do this by default: React escapes interpolated values, Vue and Angular sanitize bindings. So the modern XSS bug is a framework bypass: dangerouslySetInnerHTML with unsanitized data, href built from user input (javascript: URLs), or server-side rendering that injects raw strings into markup.",
            "So the review checklist is a sink list: innerHTML, v-html and dangerouslySetInnerHTML; eval and new Function; setTimeout with a string; document.write; URLs flowing into href or src; and JSON embedded in script tags. Anything user-controlled flowing into one of those gets sanitized with a purpose-built library — DOMPurify for HTML — or designed out. Content Security Policy (Chapter 7) is the second line: even a missed sink stays unexploitable when inline script cannot execute.",
          ],
        },
        {
          heading: "Defense at the edges in 2026",
          paragraphs: [
            "Modern stacks have moved the goalposts: SSR frameworks stream HTML assembled on the server, where escaping mistakes are easier to make; and AI features that interpolate model output into pages created a brand-new untrusted-input source — a prompt-injected model can steer XSS payloads into your DOM. Treat model output exactly like user input: encode at the sink, never trust the generator. HttpOnly cookies (invisible to script) and a CSP keep the ceiling low when a sink slips through.",
            "Verify like an attacker: scan with tools, but the durable habit is data-flow review — for each sink, trace the input back to its source and ask who controls it. Burp Suite and browser devtools find the reflected ones; stored ones hide in fields nobody considers dangerous, like a filename or a CSV header. When a finding lands, fix the sink with the right encoding, not the input — global input escaping breaks legitimate rich data and misses contexts anyway.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A stored XSS payload travels",
        caption:
          "The attacker never touches the victim — your database and your page deliver the payload.",
        steps: [
          { label: "Attacker posts comment", note: "payload, not text" },
          { label: "Stored unescaped", note: "DB holds raw script" },
          { label: "Page renders it", note: "into a script-capable sink" },
          { label: "Victim browser executes", note: "runs as the user" },
          { label: "Session hijacked", note: "requests ride their cookies" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Sanitize at the sink with an explicit allowlist — and reach for raw-HTML sinks last, not first.",
        code: [
          "import DOMPurify from 'dompurify';",
          "",
          "// User HTML is code until sanitized — this is the sink path",
          "export function renderUserBio(raw: string): string {",
          "  const clean = DOMPurify.sanitize(raw, {",
          "    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],",
          "    ALLOWED_ATTR: ['href', 'rel'],  // no event handlers, no style",
          "    ALLOW_DATA_ATTR: false,",
          "  });",
          "  return clean;                    // safe to hand to the DOM",
          "}",
          "",
          "// Plain interpolation stays escaped by React — no sink, no bug",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Escaping on input instead of encoding at output, per context.",
          fix: "Input escaping corrupts data (Math < Physics) and misses contexts. Keep data raw, encode where it lands: body, attribute, JS string, URL.",
        },
        {
          mistake: "Using dangerouslySetInnerHTML for user content without a sanitizer.",
          fix: "DOMPurify with an explicit allowlist, or no raw HTML at all. If the product needs rich text, ship a constrained editor format instead.",
        },
        {
          mistake: "Building URLs from user input in href or src without scheme checks.",
          fix: "Allowlist schemes to http, https and mailto; reject javascript:, data: and protocol-relative tricks before rendering.",
        },
        {
          mistake: "Assuming React or Vue makes XSS impossible.",
          fix: "Frameworks escape interpolation, not sinks: dangerouslySetInnerHTML, href construction, SSR string injection and model output all bypass the default.",
        },
      ],
      fieldChecklist: [
        "I can list the XSS sinks in my codebase: innerHTML, dangerouslySetInnerHTML, v-html, eval, document.write.",
        "I pass every user-controlled value reaching a sink through DOMPurify or an equivalent allowlist sanitizer.",
        "I allowlist schemes (http, https, mailto) before user input becomes an href or src.",
        "I set session cookies HttpOnly, so stolen-script payloads cannot read them.",
        "I treat AI model output as untrusted input and encode it at the sink like any user string.",
        "I deploy a CSP (report-only first) so missed sinks cannot execute inline script.",
      ],
      keyTerms: [
        {
          term: "XSS (cross-site scripting)",
          definition:
            "Injection that makes the victim's browser execute attacker script in your page's origin, running with the user's full authority.",
        },
        {
          term: "Sink",
          definition:
            "A DOM or template API that interprets strings as code or markup — innerHTML, eval, href construction — where untrusted data must be encoded.",
        },
        {
          term: "Output encoding",
          definition:
            "Transforming data to match the exact rendering context (HTML body, attribute, JS string, URL) so it displays instead of executes.",
        },
        {
          term: "DOM-based XSS",
          definition:
            "XSS created entirely client-side, when page script writes untrusted URL fragments or data into a dangerous sink.",
        },
        {
          term: "HttpOnly",
          definition:
            "A cookie flag that hides the cookie from script; the reason a successful XSS cannot always walk away with the session.",
        },
      ],
      interviewQuestions: [
        {
          q: "React escapes everything by default. Is XSS still a realistic risk?",
          a: "Yes, because the bug moved to the edges rather than disappearing. Realistic sinks in React apps: dangerouslySetInnerHTML for rich text, hrefs built from user input, SSR pipelines that assemble HTML strings, markdown renderers, and now AI output interpolated into pages. Framework escaping covers interpolation only. The skill is sink awareness — knowing which APIs interpret strings as code, and gating every one of them with sanitization or design.",
        },
        {
          q: "Stored, reflected and DOM-based XSS — how do they differ in defense terms?",
          a: "They differ in delivery, not in the fix. Stored payloads persist and hit every viewer, so they need server-side output encoding plus sink hygiene. Reflected rides the request and needs the same encoding; automated scanners find these quickly. DOM-based happens entirely in browser code writing to innerHTML or location-based sinks, so defense lives in the client code and DOMPurify. One discipline — context-aware encoding at every sink — covers all three.",
        },
        {
          q: "How does a Content Security Policy help against XSS, and why is it not enough alone?",
          a: "CSP restricts which script may execute, so a payload that slips into the DOM often cannot run — inline script is blocked and external origins are allowlisted. But CSP is a safety net with a bypass history: unsafe-inline, loose script-src values and JSONP endpoints have all defeated it. It complements, never replaces, output encoding at sinks. I deploy it report-only first, watch the violation reports, then enforce.",
        },
      ],
      quiz: [
        {
          question:
            "A comment field renders through dangerouslySetInnerHTML with raw text. What is the impact chain?",
          options: [
            "The server is compromised first",
            "The payload executes in every viewer's browser and runs with their session authority",
            "Only the attacker's own browser is affected",
            "The database executes the script",
          ],
          answerIndex: 1,
          explanation:
            "Stored XSS means the payload persists and fires for each reader. It runs in their origin with their cookies — the attacker needs no credentials, only a victim view.",
        },
        {
          question:
            "Which pair is the correct defense for user-supplied rich text and for URLs?",
          options: [
            "DOMPurify allowlist at the sink; scheme allowlist for href values",
            "Strip all quotes on input; block all URLs",
            "Escape on input; validate on output",
            "CSP alone for both",
          ],
          answerIndex: 0,
          explanation:
            "HTML content needs allowlist sanitization at the sink; URLs need a scheme check before becoming href values. Both fixes live at output, in their own context.",
        },
        {
          question:
            "Why is HttpOnly part of XSS defense if it does not stop the script from running?",
          options: [
            "It blocks script execution entirely",
            "It enables CSP automatically",
            "It keeps the session cookie unreadable to script, capping what the payload can steal",
            "It sanitizes the DOM",
          ],
          answerIndex: 2,
          explanation:
            "An XSS payload that cannot read the session cookie must still work through the page's own requests — a higher, noisier bar. HttpOnly lowers the ceiling of any single XSS bug.",
        },
      ],
    },
    {
      number: 5,
      title: "CSRF (Cross-Site Request Forgery)",
      summary:
        "CSRF makes the victim's browser commit the crime: the request comes from the right browser, with the right cookie — and the attacker wrote the message.",
      keyIdea:
        "SameSite cookies are the modern default. State changes never ride GET. Tokens are the belt-and-suspenders layer.",
      deepDive: [
        {
          heading: "The crime the browser commits",
          paragraphs: [
            "CSRF exploits a browser's core convenience: when a request goes to your site, the browser attaches the user's cookies automatically — no script needed, just an img tag, a form auto-submitted from attacker-controlled HTML, or a fetch from another tab. The request is genuine; the browser is the one sending it; the attacker only wrote the URL and the body. Your server sees a fully authenticated POST from the victim's session and cannot, by itself, tell who composed it.",
            "The impact is any state-changing endpoint: email changed, password reset, funds transferred, settings flipped. GET must never change state — preloading link scanners and CSRF both punish that mistake — and even then, POST-only is not a defense, because forms can forge POSTs cross-site. CSRF is orthogonal to XSS: XSS steals the session to act as the user; CSRF needs no theft at all, because the session rides along on its own.",
          ],
        },
        {
          heading: "SameSite is the new baseline",
          paragraphs: [
            "The modern default defense is the SameSite cookie attribute, which tells the browser when a cookie may ride cross-site requests. SameSite=Lax — now the browser default — allows the cookie on top-level navigations but not on cross-site form posts, subresource requests or fetches, killing most classical CSRF. SameSite=Strict removes even navigation attachment, at the cost of breaking arrive-logged-in flows from other sites. Set it explicitly; do not depend on browser defaults, and remember subdomains: sibling-domain attacks share a cookie scope.",
            "SameSite has blind spots — old browsers, cookie restoration quirks, and same-site-but-different-origin scenarios (app.example.com calling api.example.com) — so layered defenses still apply. The classic is the synchronizer token: the server issues a random token tied to the session, forms embed it, state-changing handlers verify it; an attacker on another origin cannot read or set it. Modern SPAs often verify the Origin header against an allowlist instead. Bearer-token APIs (Authorization header instead of cookies) are structurally immune, because browsers never attach that header on their own.",
          ],
        },
        {
          heading: "Building it in by default",
          paragraphs: [
            "Make CSRF protection a framework-level default rather than per-route heroics: Django has it on by default, Spring Security ships it, and Express and Fastify want csrf-csrf or similar middleware wired into every state-changing route. The expensive failure pattern is opt-in protection — someone forgets one route, and that route is the password change. Enforce at the router level: every non-GET request must present a valid token or a same-origin Origin header, or it gets 403 before your handler runs.",
            "Test it the way attackers do: a small static page that attempts a cross-site form post and a fetch with credentials against your staging endpoints, expecting every one to fail. Include it in pen-test scope (Chapter 10). Mind the edges: login CSRF (the attacker logs the victim into the attacker's account), logout CSRF, and JSON POSTs relying on content-type alone — forms can send text/plain that some parsers accept anyway. Verify, do not assume.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Who composed this request?",
        caption:
          "CSRF works because the cookie rides along; every defense answers who composed the request.",
        start: "State-changing request arrives",
        branches: [
          {
            label: "Cookie is SameSite=Strict",
            outcome: "Browser blocked it already",
            good: true,
          },
          {
            label: "Token verified server-side",
            outcome: "Genuine form — process it",
            good: true,
          },
          {
            label: "Origin header not allowlisted",
            outcome: "403 before the handler",
            good: true,
          },
          {
            label: "GET changed state",
            outcome: "Forged by a link — broken design",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Relying on POST-only as the CSRF defense.",
          fix: "Forms forge cross-site POSTs trivially. Defense is SameSite cookies plus tokens or Origin verification on every state change.",
        },
        {
          mistake: "Changing state in a GET route for convenience.",
          fix: "Links, prefetchers and img tags all fire GETs cross-site with cookies attached. State changes ride POST, PATCH or DELETE only.",
        },
        {
          mistake: "Skipping CSRF checks for API routes that read cookies.",
          fix: "Cookie-authenticated JSON endpoints are CSRF-relevant. Verify Origin or require a token header that cross-site requests cannot set.",
        },
        {
          mistake: "Leaving SameSite to browser defaults.",
          fix: "Set SameSite explicitly per cookie and probe staging with cross-site form posts and fetches; defaults vary by browser and version.",
        },
      ],
      fieldChecklist: [
        "I keep every state change on a non-GET method — no convenience-link exceptions.",
        "I set SameSite, Secure and HttpOnly explicitly on session cookies, never by browser default.",
        "I verify a CSRF token or an allowlisted Origin header at the router level on every state-changing route.",
        "I have run a cross-site form-post and fetch probe against staging and watched every attempt fail.",
        "I cover login and logout flows with the same protections, not as edge cases.",
        "I give cookie-authenticated API routes the same checks as server-rendered forms.",
      ],
      keyTerms: [
        {
          term: "CSRF",
          definition:
            "An attack that makes the victim's browser send an authenticated, attacker-composed state-changing request using ambient cookies.",
        },
        {
          term: "SameSite",
          definition:
            "A cookie attribute restricting cross-site attachment: Lax allows top-level navigations only, Strict blocks those too.",
        },
        {
          term: "Synchronizer token",
          definition:
            "A per-session random token embedded in forms and verified server-side; other origins cannot read or set it.",
        },
        {
          term: "Origin header",
          definition:
            "The browser-declared source of a request; verified against an allowlist to reject cross-site state changes.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain CSRF to a product manager, and what actually stops it.",
          a: "A malicious site tells your logged-in browser to send a request to your bank's server; the browser helpfully attaches your session cookie, and the server cannot tell the request was composed elsewhere. What stops it: SameSite cookies tell the browser not to attach cookies to cross-site requests; CSRF tokens prove the request came from a page we rendered; Origin checks reject foreign sources. Layers, because each has edge cases.",
        },
        {
          q: "Your API uses cookie sessions. Where does CSRF defense belong?",
          a: "At the router, globally, not per handler. Every non-GET request must pass a token check or an Origin allowlist before business code runs — opt-in per-route protection guarantees one forgotten route. Cookie flags come first: SameSite=Lax or Strict, Secure, HttpOnly. Bearer-token APIs dodge the problem structurally because browsers never attach Authorization headers unprompted, which is one argument for splitting cookie-based and token-based surfaces.",
        },
        {
          q: "Is a JSON API with a content-type requirement safe from CSRF?",
          a: "Historically people said yes, because forms could not send application/json. That reasoning is fragile: forms can send text/plain, and parsers on some stacks accept it; browser quirks have repeatedly punched holes in content-type reasoning. I verify Origin explicitly instead. Content-type requirements remain useful for other reasons, but I would not bet user account changes on that alone.",
        },
      ],
      quiz: [
        {
          question:
            "Why does CSRF work without any script running on your page?",
          options: [
            "It exploits a database privilege bug",
            "Browsers attach cookies to cross-site requests automatically",
            "It brute-forces the session id",
            "It exploits CORS misconfiguration to read responses",
          ],
          answerIndex: 1,
          explanation:
            "The cookie rides along with any request the browser makes toward your domain. CSRF forges the request, not the session — which is why cookie attributes are the first defense.",
        },
        {
          question:
            "A state change is implemented as a GET link. The main risk:",
          options: [
            "Prefetchers, link scanners and forged links can trigger it with cookies attached",
            "Slower response times",
            "It breaks the CSP",
            "It cannot be logged",
          ],
          answerIndex: 0,
          explanation:
            "GET requests fire in contexts you do not control — email link scanners, preloading, img tags. State changes belong to POST, PATCH and DELETE behind real protections.",
        },
        {
          question: "Which API design is structurally immune to CSRF?",
          options: [
            "Cookie sessions with SameSite=Lax",
            "Basic auth over HTTPS",
            "Bearer tokens sent in an Authorization header the browser never attaches unprompted",
            "Sessions with long maxAge",
          ],
          answerIndex: 2,
          explanation:
            "CSRF exploits ambient credentials that the browser attaches automatically. An Authorization header must be attached deliberately by your own code, so a forged cross-site request arrives without it and cannot act.",
        },
      ],
    },
    {
      number: 6,
      title: "CORS",
      summary:
        "CORS is not a firewall that protects your API — it is a browser rule that tells OTHER sites' browsers what they may do with your API.",
      keyIdea:
        "CORS protects your users' browsers from other sites. Authentication and authorization protect the API.",
      deepDive: [
        {
          heading: "What CORS actually is",
          paragraphs: [
            "Browsers enforce the same-origin policy: script on site A cannot read responses from site B's API. CORS is the system of HTTP headers by which site B opts specific other origins into that power. Read that again: your Access-Control-Allow-Origin header does not protect your API from the world — it grants other websites' JavaScript permission to read your responses from their users' browsers. The default, with no CORS headers, is the strictest setting: everyone can still send you requests; no one can read the responses cross-origin.",
            "This kills the most common misconception — 'CORS is my firewall, and loosening it makes me insecure'. Your authentication, authorization and rate limiting protect the API; CORS protects your users' browsers from other sites. A public API with no credentials needs generous CORS or none at all. Meanwhile curl, server-side scripts and bots ignore CORS entirely — it is a browser-only mechanism, so an attacker with a terminal never faced it in the first place.",
          ],
        },
        {
          heading: "The mechanics that bite",
          paragraphs: [
            "Two request classes matter. Simple requests — GET, HEAD, POST with a short content-type list — go straight through: the browser sends them, then hides the response unless the headers permit. Anything else — custom headers like Authorization, JSON content types, PUT or DELETE — triggers a preflight: an automatic OPTIONS request asking permission, which the server must answer correctly (Access-Control-Allow-Origin, -Methods, -Headers) before the real request fires. Preflights are why a fetch that worked in Postman fails in the browser, and why the fix is server headers, not client heroics.",
            "The dangerous configuration is credentials. When the browser sends cookies, Access-Control-Allow-Origin must be the exact origin — never * — and Access-Control-Allow-Credentials must be true. Reflecting whatever Origin the request carries while setting credentials true is equivalent to disabling the same-origin policy for logged-in users: any web page can read responses under the victim's session. Loose origin regexes (https://*.example.com matching evil-example.com) are recurring CVE material. Allowlist exact origins, keep the list short, and test it.",
          ],
        },
        {
          heading: "Operating CORS deliberately",
          paragraphs: [
            "Design the matrix before writing headers: which first-party origins call which API, whether credentials are involved, and whether third parties need programmatic access — which means server-to-server keys, not CORS grants. Configure per environment: localhost ports in dev, exact prod origins in prod, and never copy the dev wildcard into production. Gate the middleware with a config map, not with environment sniffing buried in route code.",
            "Debug with the browser, not folklore: the Network tab shows the preflight OPTIONS, its response, and the precise header complaint. Common failures are a missing OPTIONS route (a proxy swallowed it), missing headers on error responses (errors need the CORS headers too, or the client cannot read why it failed), and duplicate ACAO values, which are fatal. Cache preflights with Access-Control-Max-Age to cut the OPTIONS tax, and treat any 'it works with curl' argument as a sign the reviewer does not yet know what CORS governs.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "CORS outcomes for a cross-origin call",
        caption:
          "Wildcards and credentials never mix — reflecting the Origin header with credentials is the classic CVE.",
        axes: { x: "Server allows this origin?", y: "Cookies attached?" },
        quadrants: [
          {
            label: "Creds + exact origin",
            note: "the one legitimate credentialed case",
          },
          {
            label: "Creds + ACAO wildcard",
            note: "invalid — browser rejects; reflecting Origin instead is worse",
          },
          {
            label: "No creds + allowed",
            note: "public API read — grant deliberately",
          },
          {
            label: "No creds + disallowed",
            note: "request runs, response hidden from script",
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "An exact-origin allowlist with credentials true — the only safe combination for cookie-authenticated APIs.",
        code: [
          "import cors from 'cors';",
          "",
          "// Exact origins only — never reflect the request Origin blindly",
          "const allowlist = new Set([",
          "  'https://app.example.com',",
          "  'https://admin.example.com',",
          "]);",
          "const options: cors.CorsOptions = {",
          "  origin: (origin, cb) => {",
          "    if (!origin || allowlist.has(origin)) return cb(null, true);",
          "    cb(new Error('origin not allowed')); // becomes a blocked response",
          "  },",
          "  credentials: true,  // forces exact-origin ACAO; wildcard is invalid",
          "  methods: ['GET', 'POST', 'PATCH', 'DELETE'],",
          "};",
          "app.use(cors(options));",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Setting Access-Control-Allow-Origin to * while cookies authenticate the API.",
          fix: "The browser rejects the wildcard-with-credentials combination; if you 'fix' it by reflecting Origin, any site can read sessions. Allowlist exact origins.",
        },
        {
          mistake: "Treating CORS errors as an API security breach and loosening headers.",
          fix: "CORS governs browsers reading responses, not attackers reaching the API. Curl never faced CORS. Tighten auth instead of widening headers.",
        },
        {
          mistake: "Reflecting whatever Origin header the request carries.",
          fix: "Origin reflection plus credentials disables the same-origin policy for logged-in users. Compare against a static allowlist; reject the rest.",
        },
        {
          mistake: "Forgetting CORS headers on error and OPTIONS responses.",
          fix: "Errors and preflights need the same headers, or the client cannot read failures. Cover them in middleware, not per route.",
        },
      ],
      fieldChecklist: [
        "I can state, per API surface, which origins may call it and whether credentials are involved.",
        "My CORS allowlist is a static config of exact origins — no wildcards, no reflected Origin, no loose regexes.",
        "I keep dev and production CORS configs separate; the dev localhost wildcard cannot reach prod.",
        "I carry the same CORS headers on preflight OPTIONS routes and error responses as on successes.",
        "I debug CORS in the browser Network tab, reading the preflight and its response headers.",
        "I give server-to-server consumers API keys, not CORS grants.",
      ],
      keyTerms: [
        {
          term: "Same-origin policy",
          definition:
            "The browser rule that script from one origin cannot read another origin's responses; CORS is the opt-out mechanism.",
        },
        {
          term: "Preflight",
          definition:
            "An automatic OPTIONS request the browser sends before non-simple cross-origin requests, asking the server for permission headers.",
        },
        {
          term: "Access-Control-Allow-Origin",
          definition:
            "The response header naming the one origin — or a wildcard, only without credentials — allowed to read the response.",
        },
        {
          term: "Credentials mode",
          definition:
            "Whether a cross-origin request carries cookies; when true, the server must name the exact origin, because wildcards are invalid.",
        },
      ],
      interviewQuestions: [
        {
          q: "A teammate says disabling CORS would make the API more secure. Response?",
          a: "CORS is not a firewall — it is a set of headers granting other origins' browsers read access to responses. Removing it makes the API harder for legitimate frontends and changes nothing for attackers, who use curl and never faced the same-origin policy in the first place. What protects the API: authentication, authorization, rate limiting and input validation. I would trace the actual fear — usually a leaked endpoint — and fix that layer instead.",
        },
        {
          q: "How do you configure CORS for a cookie-authenticated API consumed by two first-party frontends?",
          a: "A static allowlist with the two exact origins, credentials true, and the methods the app actually uses. No wildcard — the browser forbids the combination anyway — and no Origin reflection, which would let any site read responses under the user's session. I cover OPTIONS preflights and error responses with the same headers, keep dev and prod configs separate, and write a test asserting a foreign origin gets no ACAO header at all.",
        },
        {
          q: "A browser fetch fails with a CORS error but works in curl. Walk me through debugging.",
          a: "First confirm which request failed: the Network tab shows whether the preflight OPTIONS or the actual call broke. Then read the preflight response — usually a missing Access-Control-Allow-Headers for Authorization, a content-type outside the simple list, or an OPTIONS route swallowed by a proxy. Remember the failure may be correct: an origin not on the allowlist is the system working. And the headers must appear on error responses too, or failures become unreadable.",
        },
      ],
      quiz: [
        {
          question:
            "What does removing CORS headers from a public, cookie-less API actually do?",
          options: [
            "Blocks all cross-origin attacks",
            "Makes it impossible for legitimate web frontends to read responses",
            "Protects the API from curl and bots",
            "Encrypts responses in transit",
          ],
          answerIndex: 1,
          explanation:
            "No CORS headers means browsers block cross-origin reads. Attackers with curl were never subject to the browser rule, so security does not change — only legitimate frontends break.",
        },
        {
          question:
            "Which combination is valid for a credentialed cross-origin request?",
          options: [
            "ACAO: * with credentials true",
            "Reflected Origin with credentials true",
            "Exact-origin ACAO with credentials true",
            "No ACAO with credentials true",
          ],
          answerIndex: 2,
          explanation:
            "With credentials, the browser requires the exact origin in Access-Control-Allow-Origin. Wildcards fail outright; reflection is worse — it grants every site access to user sessions.",
        },
        {
          question:
            "A PUT with an Authorization header from another origin will first trigger:",
          options: [
            "A 401 from the server",
            "A preflight OPTIONS request asking for permission headers",
            "An automatic retry",
            "A cookie reset",
          ],
          answerIndex: 1,
          explanation:
            "Non-simple requests get an automatic preflight. The server must answer with the right Allow headers before the browser sends the real request — a common source of works-in-Postman confusion.",
        },
      ],
    },
    {
      number: 7,
      title: "Security Headers",
      summary:
        "Five HTTP headers turn the browser into your co-defender. They cost minutes to add and contain entire attack classes.",
      keyIdea:
        "CSP, HSTS, nosniff, frame-ancestors, Referrer-Policy. Start CSP in report-only mode, then enforce.",
      deepDive: [
        {
          heading: "Cheap controls, entire attack classes",
          paragraphs: [
            "Security headers are instructions your responses give the browser about how to behave when rendering your pages. They cost minutes to add, need no application code changes, and each retires a category of exploit: Content-Security-Policy constrains where script and other resources may come from; Strict-Transport-Security forces HTTPS; X-Content-Type-Options: nosniff stops MIME confusion; frame-ancestors in CSP blocks clickjacking framing; Referrer-Policy stops URL leakage. These are the rare controls where effort and coverage are wildly out of proportion in your favor.",
            "They also fail loudly in testing, which makes them engineering-friendly: set them, run the site, and the browser console shows you exactly what would break. Start CSP in report-only mode with a reporting endpoint, watch violations in your logs for a couple of weeks, tighten the policy until it is silent, then flip the enforcement switch. That workflow turns 'CSP is scary' into a two-week project with a measurable end.",
          ],
        },
        {
          heading: "CSP, the deep one",
          paragraphs: [
            "CSP deserves its own section because it is both the strongest and the easiest to weaken. A policy like default-src 'self'; script-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self' eliminates inline script, plugins and framing in one line — turning most stored XSS payloads inert. The traps: 'unsafe-inline' and 'unsafe-eval' bring back exactly the attacks you were defending against; broad third-party script origins reopen the door through their content; and every allowlisted script origin becomes code you trust as if you wrote it.",
            "For legacy code that cannot drop inline handlers immediately, nonces are the modern answer: generate a random nonce per response, emit it in the CSP header and on each legitimate script tag, and keep 'unsafe-inline' out — browsers honor the nonce instead. HSTS pairs with it: max-age well past a year, includeSubDomains, preload — but only after the whole domain genuinely serves HTTPS, because HSTS is sticky and a mistake locks subdomains out for the max-age duration.",
          ],
        },
        {
          heading: "The rest of the set, and verification",
          paragraphs: [
            "X-Content-Type-Options: nosniff stops the browser from guessing content types — the defense behind script-upload tricks where user content gets served and then guessed as JavaScript. Referrer-Policy: strict-origin-when-cross-origin (or no-referrer for sensitive apps) keeps full URLs — which contain tokens and user ids — from leaking to third-party sites via the Referer header. Permissions-Policy locks down powerful browser APIs you do not use. Cookies are not CSP headers but ride the same review: Secure, HttpOnly, SameSite, as Chapter 5 covered.",
            "Verify mechanically: external scanners grade your header set from outside, Lighthouse flags missing ones, and your own CI can curl the homepage and assert the header set — a five-line smoke test that catches regressions from framework upgrades. Frameworks change defaults silently, middleware updates drop headers, and a new CDN can strip them. The whole set is one middleware function or one nginx block — the cheapest regression test in security.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "What each header takes away",
        caption:
          "Read from the top: each header removes one whole attack class before your code runs.",
        layers: [
          { label: "CSP", note: "kills injected script sources" },
          { label: "HSTS", note: "forces HTTPS, blocks downgrade" },
          { label: "frame-ancestors none", note: "blocks clickjacking framing" },
          { label: "nosniff", note: "stops MIME guessing tricks" },
          { label: "Referrer-Policy", note: "stops token leakage in Referer" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Five headers, one middleware — each line retires an attack class the browser would otherwise allow.",
        code: [
          "// One middleware: ship CSP in Report-Only, watch reports, then enforce",
          "app.use((req, res, next) => {",
          "  res.setHeader('Content-Security-Policy', [",
          "    `default-src 'self'`,",
          "    `script-src 'self'`,",
          "    `object-src 'none'`,",
          "    `frame-ancestors 'none'`,",
          "    `base-uri 'self'`,",
          "  ].join('; '));",
          "  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');",
          "  res.setHeader('X-Content-Type-Options', 'nosniff');",
          "  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');",
          "  next();",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Adding 'unsafe-inline' to CSP because some legacy script broke.",
          fix: "That re-opens the XSS door the header closed. Move the script to a file, or adopt per-response nonces until the inline handlers are gone.",
        },
        {
          mistake: "Treating X-Frame-Options DENY as clickjacking coverage for the whole domain.",
          fix: "It is per-response. Set frame-ancestors 'none' in CSP globally, and keep X-Frame-Options for legacy browsers.",
        },
        {
          mistake: "Enabling HSTS with preload before every subdomain serves valid HTTPS.",
          fix: "HSTS is sticky for max-age. Verify each subdomain first, ship includeSubDomains when true, and add preload last.",
        },
        {
          mistake: "Setting headers once and never re-checking after upgrades.",
          fix: "Frameworks and CDNs drop headers silently. Assert the set with a five-line CI smoke test that curls the homepage.",
        },
      ],
      fieldChecklist: [
        "I ship CSP with no unsafe-inline and no unsafe-eval; violations stream to a reporting endpoint I read.",
        "I set HSTS with a max-age beyond a year and includeSubDomains, adding preload only after subdomains were verified.",
        "I keep nosniff and Referrer-Policy present on every response, including errors.",
        "I block framing with frame-ancestors 'none' plus X-Frame-Options for old browsers.",
        "I assert the exact header set with a CI smoke test that curls the homepage.",
        "I re-verify headers after framework, middleware and CDN changes.",
      ],
      keyTerms: [
        {
          term: "Content-Security-Policy (CSP)",
          definition:
            "A response header that whitelists where script, style and other resources may load from; the strongest single header against XSS.",
        },
        {
          term: "HSTS",
          definition:
            "Strict-Transport-Security: tells browsers to refuse plain HTTP for the domain, blocking downgrade and cookie-stripping tricks.",
        },
        {
          term: "MIME sniffing",
          definition:
            "Legacy browser behavior of guessing content types from bytes; nosniff disables it, closing script-upload tricks.",
        },
        {
          term: "Clickjacking",
          definition:
            "Framing your page invisibly to steal clicks; blocked by frame-ancestors 'none' in CSP or X-Frame-Options.",
        },
        {
          term: "Report-only mode",
          definition:
            "CSP deployment stage where violations are reported but not blocked, letting you tune the policy before enforcing.",
        },
      ],
      interviewQuestions: [
        {
          q: "How would you roll out CSP on an app that has never had it?",
          a: "Report-only first: Content-Security-Policy-Report-Only with a reporting endpoint, and no enforcement, so nothing breaks. Read the violation reports for a week or two, fix what the app legitimately needs — move inline scripts to files, add nonces where inline is unavoidable — and tighten the policy until reports go quiet. Then enforce. The roll-out is a measurable project, not a leap of faith, and the reporting endpoint stays live afterward as a canary.",
        },
        {
          q: "Which security header gives you the most protection per unit of effort?",
          a: "CSP, by a distance, when it is strict: default-src 'self' with object-src 'none' and frame-ancestors 'none' neutralizes most XSS payloads, plugin content and framing in one header. HSTS is a close second because it closes downgrade attacks. But the value is entirely in the strictness — a CSP with unsafe-inline is decoration. I grade the header set with an external scanner and assert it in CI.",
        },
        {
          q: "Your security scanner flags a missing X-Frame-Options. What do you do?",
          a: "I set frame-ancestors 'none' in the CSP, which modern browsers honor and which supersedes the old header, and keep X-Frame-Options DENY alongside it for legacy clients. Then I check whether any page legitimately needs framing — an embedded admin console, a payment iframe — because the answer is per-response, not global. Finally the CI smoke test asserts both headers, so the next framework upgrade cannot silently drop them.",
        },
      ],
      quiz: [
        {
          question:
            "What is the safest first step when adding CSP to a legacy app?",
          options: [
            "Enforce the strictest policy immediately",
            "Ship Report-Only with a reporting endpoint and tune from real violations",
            "Allow everything and tighten later",
            "Add only X-Frame-Options first",
          ],
          answerIndex: 1,
          explanation:
            "Report-only mode shows you exactly what the app needs without breaking anything. You tighten until reports are quiet, then flip enforcement — a measured rollout with evidence.",
        },
        {
          question: "Why does 'unsafe-inline' largely defeat the purpose of CSP?",
          options: [
            "Inline script is the primary XSS payload channel, so allowing it re-opens the door",
            "It disables the reporting endpoint",
            "It only affects styles, not scripts",
            "It makes HSTS mandatory",
          ],
          answerIndex: 0,
          explanation:
            "Most injected payloads are inline script tags or event handlers, so allowing inline execution keeps the primary channel open — use file-based script or per-response nonces instead, even for legacy code.",
        },
        {
          question:
            "Which header stops the browser from executing user-uploaded content it guessed is JavaScript?",
          options: [
            "Referrer-Policy",
            "Permissions-Policy",
            "X-Content-Type-Options: nosniff",
            "Access-Control-Allow-Origin",
          ],
          answerIndex: 2,
          explanation:
            "nosniff disables MIME guessing, so files served as text or images are not reinterpreted as scripts. It is a one-line header that closes a whole upload-attack family.",
        },
      ],
    },
    {
      number: 8,
      title: "OWASP Top 10",
      summary:
        "The most useful list in security is not a standard — it is a walking order for your quarterly audit, refreshed every few years.",
      keyIdea:
        "Walk the ten quarterly with evidence per item. The mapped checklist is the deliverable.",
      deepDive: [
        {
          heading: "A walking order, not a standard",
          paragraphs: [
            "The OWASP Top 10 is a periodically refreshed list of the most significant web application security risk categories, assembled from incident data and industry surveys. Its value to a working engineer is not academic: it is a curated checklist of the ways applications actually get breached, ordered by prevalence and impact. Broken access control, cryptographic failures, injection, insecure design, security misconfiguration, vulnerable components, authentication failures, integrity failures, logging failures and SSRF — each maps to concrete checks you can run against your own system.",
            "Treat it as a walking order for a quarterly audit. For each of the ten, write down: the control we claim, the evidence it works, and who verified it last. 'Broken access control' is not closed by intention — it is closed by an authorization matrix test in CI; 'cryptographic failures' by an inventory of where TLS, hashing and storage encryption live and which algorithms they use. The deliverable is a mapped checklist with evidence links, and it becomes your compliance story for free.",
          ],
        },
        {
          heading: "How to walk it without lying to yourself",
          paragraphs: [
            "The audit fails when teams answer 'we use a framework, so covered'. Frameworks cover defaults, not configuration: Express does not authorize your endpoints; Django's CSRF middleware does not protect the JSON routes you disabled it on; React does not sanitize dangerouslySetInnerHTML. For each category, find the actual mechanism in your code and test it adversarially. Access control: try to read another tenant's object by id. Misconfiguration: enumerate error pages, default headers, debug endpoints. Authentication: probe login with a leaked password list.",
            "Automate the re-walk. SAST and dependency scanners — Semgrep, Dependabot, Trivy — cover the mechanical categories continuously; the judgment categories, insecure design and access-control logic, need humans, so schedule them. Track the audit as issues, not as a document: each finding gets an owner and a deadline, and the trend quarter over quarter is the real signal. An audit that produces no tickets was not an audit; it was a self-esteem exercise.",
          ],
        },
        {
          heading: "Where the 2021 list shifted",
          paragraphs: [
            "The 2021 refresh promoted broken access control to first place — reflecting how API-era systems fail: not classic injection but missing object-level checks, the topic of Chapter 11. Cryptographic failures (formerly sensitive data exposure) and security misconfiguration rose; XML external entities folded into security misconfiguration; and insecure design appeared as a new category to force threat-modeling conversations upstream. The stable lesson across versions: categories move, but they are all failures of authority, secrecy, integrity or availability.",
            "Use the list to organize, not to grade. A five-item internal Top 10 based on your own stack and incident history is more honest than reciting the global one; the global list tells you which doors attackers try first, your incidents tell you which of your doors are weakest. Walk both quarterly. And when a new version drops, diff it — the changes are the industry telling you where attacks moved, which is worth an engineering all-hands slide.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Triage the audit findings",
        caption:
          "Likelihood against impact — the top-left quadrant is this sprint, the bottom-right is documented acceptance.",
        axes: { x: "Impact if exploited", y: "Likelihood of discovery" },
        quadrants: [
          {
            label: "Fix this sprint",
            note: "likely + damaging: IDOR, auth bypass",
          },
          {
            label: "Schedule the fix",
            note: "rare + damaging: edge-case path traversal",
          },
          {
            label: "Ticket with a deadline",
            note: "likely + mild: missing headers",
          },
          {
            label: "Accept and document",
            note: "rare + mild, with a named owner",
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Marking OWASP categories 'covered by the framework' without evidence.",
          fix: "Frameworks cover defaults, not your configuration. Each category needs a named mechanism in your code and an adversarial test that proves it.",
        },
        {
          mistake: "Running the audit as a document review once a year.",
          fix: "Walk it quarterly with evidence per item, automate the mechanical categories in CI, and turn every finding into an owned ticket.",
        },
        {
          mistake: "Treating the Top 10 as a grade to publish.",
          fix: "It is a walking order, not a score. Map it to your stack, rank by your own incident history, and fix top-left quadrant findings first.",
        },
        {
          mistake: "Fixing findings without feeding the class back into prevention.",
          fix: "Every audit finding becomes a CI check or a checklist item, so the same class cannot silently return next quarter.",
        },
      ],
      fieldChecklist: [
        "I maintain a mapped OWASP checklist: control, evidence link, last verifier, per category.",
        "I run an adversarial authorization test suite in CI that tries cross-tenant access by id.",
        "I keep an inventory of cryptographic use: TLS termination, password hashing, storage encryption, algorithms chosen.",
        "I run SAST and dependency scanners in CI, routing findings to owners with deadlines.",
        "I re-walk the full ten quarterly and diff each new OWASP version when it publishes.",
        "I turn every audit finding into a ticket and a prevention item — checklist, lint rule or test.",
      ],
      keyTerms: [
        {
          term: "OWASP Top 10",
          definition:
            "A periodically refreshed list of the most significant web application risk categories, used as an audit walking order.",
        },
        {
          term: "Broken access control",
          definition:
            "Users acting outside their intended permissions — the top category, usually a missing object-level check.",
        },
        {
          term: "Security misconfiguration",
          definition:
            "Insecure defaults left in place: debug endpoints, verbose errors, missing headers, permissive CORS.",
        },
        {
          term: "Threat modeling",
          definition:
            "Systematically asking what can go wrong at design time, so insecure-design findings surface before code exists.",
        },
        {
          term: "SAST",
          definition:
            "Static application security testing: scanning source code for vulnerability patterns automatically, in CI.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you actually use the OWASP Top 10 in day-to-day engineering?",
          a: "As a quarterly audit walking order with evidence per category. For each of the ten: name the control, show the test or config that proves it, and record who verified it. The mechanical categories — vulnerable dependencies, misconfiguration, injection patterns — run continuously in CI through scanners. The judgment categories — access control, insecure design — get a human session. Findings become owned tickets; the quarter-over-quarter trend is the metric that matters.",
        },
        {
          q: "Why did broken access control top the 2021 list, and what does that change?",
          a: "Because API-era systems fail at authorization more than injection: the user is authenticated but nobody checked they own the object they just requested — one missing if-statement. It moved the audit emphasis from input sanitization toward object-level authorization checks and an authz test matrix in CI. It also pairs with insecure design's promotion: both push security questions to design review, before endpoints exist to mis-protect.",
        },
        {
          q: "A manager asks for 'OWASP compliance'. What do you say?",
          a: "That the Top 10 is not a certifiable standard — it is a risk-awareness list — so the honest deliverable is a mapped checklist: each category, our control, evidence, verifier, date. That artifact satisfies auditors better than a badge, because it shows the mechanism. I would also set the cadence: quarterly re-walk, scanners in CI between walks, findings tracked to closure. Compliance theater is a one-time poster; this is a process with a trend line.",
        },
      ],
      quiz: [
        {
          question:
            "The best deliverable from an OWASP Top 10 audit is:",
          options: [
            "A signed certificate",
            "A mapped checklist with evidence and a verifier per category",
            "A slide listing the ten names",
            "A pentest report from two years ago",
          ],
          answerIndex: 1,
          explanation:
            "The list is a walking order, not a standard. Evidence per category — a test, a config, a scan — is what makes the audit real and reusable at compliance time.",
        },
        {
          question:
            "Which category does 'user id in the URL, no ownership check' belong to?",
          options: [
            "Injection",
            "Cryptographic failures",
            "Broken access control",
            "Security misconfiguration",
          ],
          answerIndex: 2,
          explanation:
            "Authenticated but unauthorized object access is broken access control — the number one category on the 2021 list, and the subject of Chapter 11, where the authz matrix test suite lives.",
        },
        {
          question:
            "Why is 'we use a framework' a weak answer for most categories?",
          options: [
            "Frameworks are always insecure",
            "Frameworks cover safe defaults, not your configuration and business logic",
            "Frameworks require disabling security features",
            "The Top 10 excludes framework users",
          ],
          answerIndex: 1,
          explanation:
            "Defaults protect only what you did not customize. Disabling CSRF for JSON routes, missing authorization logic, and raw escape hatches all live outside what the framework guards.",
        },
      ],
    },
    {
      number: 9,
      title: "Dependency Audits",
      summary:
        "Your application is a few thousand lines of your code standing on millions of lines of someone else's. Their vulnerabilities are your vulnerabilities.",
      keyIdea:
        "Reachability first — is the vulnerable code path actually called? Dependency freshness tracked; monthly upgrade day.",
      deepDive: [
        {
          heading: "Your real attack surface is inherited",
          paragraphs: [
            "A modern application is a few thousand lines you wrote standing on hundreds of thousands you did not: frameworks, drivers, parsers, and the transitive closure of all of it in the lockfile. Their CVEs are your CVEs, and the last decade proved the pipeline will fetch attacks on schedule — event-stream changing hands and shipping a targeted payload, ua-parser-js poisoned through a compromised maintainer account, xz showing years of patient social engineering. The first discipline is visibility: you cannot audit what you cannot enumerate, which is why the lockfile is committed and an SBOM per release is table stakes.",
            "The audit loop itself is mechanical: npm audit for the JS ecosystem, pip-audit for Python, Trivy or Grype for containers, Dependabot or Renovate to keep the stream flowing. Wire them into CI and gate deploys on critical findings. But raw scanner output drowns you — hundreds of advisories, most unreachable. The skill that separates professionals from alarm-fatigued teams is triage: deciding which advisories actually matter for your code.",
          ],
        },
        {
          heading: "Reachability changes everything",
          paragraphs: [
            "Reachability analysis asks: does my code execute the vulnerable function on any path? Tools increasingly answer it — Snyk ships call-graph reachability, OSV-Scanner feeds from the OSS-Guru advisory database — but you can approximate it by hand: read the advisory, find the affected module, grep your usage, and decide. A vulnerable parser you never import in any deployed bundle is a different animal from the one handling user uploads. Severity scores describe the library in isolation; reachability describes your risk.",
            "When the vulnerable path is live and no patched version exists, escalate deliberately: pin the last safe version, add a validation or WAF layer to block the known exploit pattern, or fork and patch — npm overrides and yarn resolutions let you force patched forks. Document the deviation with an expiry, a ticket with a date, because unmaintained temporary forks are how supply-chain debt compounds. Most advisories, though, resolve with an ordinary version bump and a test run.",
          ],
        },
        {
          heading: "Make freshness a habit, not a fire drill",
          paragraphs: [
            "The teams that survive dependency disclosures are the ones already close to current. A monthly upgrade day — minor and patch bumps across the repo, tests green, one merge — keeps the distance to any future patched release small. Major upgrades get their own tickets with a real risk review; everything else is routine. Lockfiles pin exact versions for reproducible builds, and upgrades happen as reviewed, tested commits — never as an unreviewed bulk update before a launch.",
            "Watch the edges scanners do not cover: git dependencies and private registries with weak access control, Docker base images (scan with Trivy, pin by digest), GitHub Actions versions, and the install scripts some packages run at add time — which is why CI installs with ignore-scripts where possible and you read what a new package executes at install. Dependency security is mostly operational hygiene; the teams that treat it as a habit are boring, and boring is the point.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "From advisory to merged fix",
        caption:
          "Every stage passes forward; the triage stage is what keeps the pipeline from drowning you.",
        stages: [
          { label: "Scanner in CI", note: "npm audit, Trivy, Dependabot" },
          { label: "Triage", note: "severity vs reachability" },
          { label: "Upgrade or patch", note: "bump, override, or fork" },
          { label: "Tests + build", note: "regression gate" },
          { label: "SBOM + release", note: "bill of materials recorded" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Audit gates in CI, reachability triage for noise, overrides for unpatched upstreams — the monthly loop.",
        code: [
          "# Gate the build: fail on high or critical advisories",
          "npm audit --audit-level=high",
          "",
          "# Triage by reachability: does any deployed code import the module?",
          "rg -n 'event-stream' src/ || echo 'unreachable in our code'",
          "",
          "# Force a patched version when upstream has not shipped the fix",
          "npm pkg set 'overrides.lodash=^4.17.21'",
          "",
          "# Containers are dependencies too",
          "trivy image app:latest --severity HIGH,CRITICAL --exit-code 1",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating every audit finding as equally urgent until the team goes numb.",
          fix: "Triage by reachability: does deployed code call the vulnerable path? Unreachable advisories get scheduled, not sirens.",
        },
        {
          mistake: "Running npm audit manually before big releases only.",
          fix: "Scanner in CI with an audit-level gate, Dependabot or Renovate enabled, and a monthly upgrade day. Disclosure waits for no release.",
        },
        {
          mistake: "Committing package.json without the lockfile, or updating it casually.",
          fix: "Commit the lockfile, install with frozen resolution in CI, and change versions only through reviewed commits.",
        },
        {
          mistake: "Forking a package to patch it and leaving the fork unmaintained.",
          fix: "Every override or fork gets a ticket with an expiry date and a named owner, so the deviation cannot outlive its review.",
        },
      ],
      fieldChecklist: [
        "I run audit tooling (npm audit, pip-audit, Trivy) in CI, gating on high or critical findings.",
        "I keep Dependabot or Renovate enabled, reviewing and merging upgrade PRs on a monthly cadence.",
        "I triage advisories by reachability before triaging by severity score.",
        "I commit the lockfile and CI installs with frozen, reproducible resolution.",
        "I give every override or fork an expiry ticket and a named owner.",
        "I scan container images and pin them by digest, not by floating tags.",
        "I generate an SBOM per release so I can answer 'what do we run?' in minutes.",
      ],
      keyTerms: [
        {
          term: "CVE",
          definition:
            "A published identifier for a known vulnerability; how advisories, scanners and patches refer to the same flaw.",
        },
        {
          term: "Reachability",
          definition:
            "Whether your deployed code actually executes the vulnerable function; the difference between an advisory and your risk.",
        },
        {
          term: "SBOM",
          definition:
            "Software bill of materials: a machine-readable inventory of every component in a build, generated per release.",
        },
        {
          term: "Lockfile",
          definition:
            "The committed, exact-resolution record of your dependency tree — a security artifact, not a convenience.",
        },
        {
          term: "npm overrides",
          definition:
            "A package.json mechanism to force specific versions transitively, used to pin patched forks of unpatched upstreams.",
        },
      ],
      interviewQuestions: [
        {
          q: "A critical CVE drops in a library you use. Walk me through your response.",
          a: "First, reachability: does our deployed code call the vulnerable path, and with what inputs? Read the advisory, grep our usage, check the blast radius. If reachable and a patch exists, bump, test, ship same day behind normal review. If no patch exists, pin the last safe version or force a patched override, add a blocking mitigation at the edge if the exploit pattern is known, and open an expiry ticket. Finally, write the finding class back into the audit checklist.",
        },
        {
          q: "How do you keep dependency management from drowning the team in noise?",
          a: "Automation plus triage. Scanners run in CI with a severity gate so new criticals fail the build; Dependabot or Renovate keeps small bumps flowing as routine PRs; a monthly upgrade day clears the accumulated minor work in one afternoon. For the noise: reachability analysis separates advisories that touch deployed code from ones that do not, and only the former get sprint attention. The unfiltered feed is for robots, not for humans.",
        },
        {
          q: "Why commit the lockfile, and what is the security argument?",
          a: "The lockfile pins the exact resolution of every package, including transitive ones — it makes builds reproducible, so what you tested is what deploys. Security-wise it is the input for SBOMs and audits, it prevents a fresh install from silently pulling a newer compromised version, and diffs make every dependency change reviewable. CI installs with frozen lockfile mode; version changes happen as reviewed commits, never as ambient drift.",
        },
      ],
      quiz: [
        {
          question:
            "Two advisories arrive: one in a JSON parser you never import, one in your upload handler's library. What do you fix first?",
          options: [
            "The JSON parser — parsers are always dangerous",
            "The upload handler library — the vulnerable path is actually executed",
            "Whichever has the higher CVSS score",
            "Neither; wait for the monthly upgrade day",
          ],
          answerIndex: 1,
          explanation:
            "Reachability beats severity scores: risk is the vulnerable function on a path your deployed code executes with hostile input. The unused parser is a scheduled bump, not a fire drill.",
        },
        {
          question:
            "A critical CVE has no patched release. Best interim move?",
          options: [
            "Pin the last safe version or force a patched override, and add an expiry ticket",
            "Ignore it until upstream acts",
            "Delete package-lock.json to force a refresh",
            "Disable the feature permanently",
          ],
          answerIndex: 0,
          explanation:
            "Pin or override to the safe version, mitigate at the edge if the exploit pattern is known, and record the deviation with an owner and an expiry so it cannot silently become permanent.",
        },
        {
          question:
            "What does an SBOM give you that package.json does not?",
          options: [
            "Faster builds",
            "Automatic patching",
            "A complete per-build inventory including transitive and container layers, so disclosures map in minutes",
            "License enforcement",
          ],
          answerIndex: 2,
          explanation:
            "The bill of materials covers the whole artifact — transitive dependencies, images, actions. When the next disclosure lands, you query it instead of reconstructing your tree by hand.",
        },
      ],
    },
    {
      number: 10,
      title: "Pen Testing",
      summary:
        "You have spent ten chapters defending. A penetration test is what happens when a professional spends a week attacking.",
      keyIdea:
        "Fix on a schedule. Verify the fixes. Feed the classes of finding back into the checklist and CI.",
      deepDive: [
        {
          heading: "What a test actually looks like",
          paragraphs: [
            "A penetration test is a time-boxed engagement where a professional attacker probes your system with your permission: reconnaissance, enumeration, exploitation of what they find, and a report ranked by severity with reproduction steps. Scope is negotiated first — which environments, which accounts, whether social engineering is included — and rules of engagement define what must never happen: no real data destruction, no production downtime, a kill-switch contact. Good testers report findings you could have found; great ones report the chaining you never imagined — bug A plus misconfiguration B equals admin access.",
            "The engagement ends with two artifacts that matter more than the report: the debrief, where you learn the how; and the retest, where fixes are verified. Read the report as an engineer, not as a compliance checkbox: every finding maps to a mechanism in your codebase — an IDOR is a missing check in a handler, an SSRF is an unpinned fetch — and the fix belongs in your backlog with an owner, not in a PDF.",
          ],
        },
        {
          heading: "Continuous testing between engagements",
          paragraphs: [
            "An annual test is a snapshot; attackers operate continuously. Between engagements, run the automation yourself: a DAST scanner — ZAP or Burp Suite — against staging on a schedule, SAST and dependency scanning in CI, and a bug bounty program that turns the internet into a distributed test team you pay only for valid findings. Even a modest internal exercise — one engineer spending two days each quarter attacking a feature before it ships — catches the class of bug external tests find after launch.",
            "Build the feedback loop that makes each test the last of its kind: every finding becomes a fix, a regression test in the security suite, and a checklist or lint rule that prevents the class. Track finding classes across engagements — if the same category recurs, the loop is broken. Scope each new engagement toward what changed: the new API surface, the new integration, the new AI feature. Experienced testers ask for your threat model and your last two reports first; have both ready.",
          ],
        },
        {
          heading: "Running it well",
          paragraphs: [
            "Choose testers by what they will find, not by certificate walls: ask for sample reports — you are buying writing quality as much as hacking — references, and method transparency. Time-box realistically: a week finds the shallow-and-wide issues in a mid-sized system; a focused engagement on one new surface goes deeper. Insist on a staging environment that mirrors production configuration, because headers, WAF rules and network policy differ between environments, and those differences are exactly where misconfiguration findings hide.",
            "Handle findings like production incidents: triage by severity and reachability, fix on a schedule with owners, and verify the fixes with the retest rather than assuming the patch worked. Legal and operational hygiene matters too: authorization letters, data-handling agreements, and coordination with your hosting provider before any live testing. A test that ends with no retest is half a test — the attacker verified their exploits; you have only promised to verify yours.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The testing loop",
        caption:
          "Each turn of the loop should end a finding class forever, not just a finding.",
        steps: [
          { label: "Test", note: "external pen test or bounty" },
          { label: "Triage", note: "severity and reachability" },
          { label: "Fix", note: "owned, scheduled, shipped" },
          { label: "Retest", note: "verify, never assume" },
          { label: "Prevent", note: "regression test plus lint rule" },
        ],
      },
      pitfalls: [
        {
          mistake: "Treating the pen test report as compliance paperwork to archive.",
          fix: "Every finding gets a fix, a regression test and a prevention rule with owners and dates. The report is input to the backlog, not a PDF.",
        },
        {
          mistake: "Skipping the retest because the fixes were 'obviously correct'.",
          fix: "Attackers verified their exploits; verify your fixes the same way. Schedule the retest when the engagement is booked.",
        },
        {
          mistake: "Testing staging that does not match production configuration.",
          fix: "Headers, WAF rules and network policy differ by environment — and that is where misconfigurations hide. Mirror prod config or test prod with safeguards.",
        },
        {
          mistake: "Relying on one annual test as the security program.",
          fix: "Continuous DAST and SAST in between, a bug bounty for the long tail, and scope each engagement toward what actually changed.",
        },
      ],
      fieldChecklist: [
        "I book the next engagement with scope, rules of engagement and a retest included.",
        "I keep the threat model and last two reports ready for testers — they ask for both.",
        "I run a DAST scanner against staging on a schedule, not only during engagements.",
        "I close every finding from the last test with a fix, a regression test and a prevention rule.",
        "I track finding classes across engagements; recurrence means the loop is broken.",
        "I sign authorization letters and data-handling agreements before anyone attacks anything.",
      ],
      keyTerms: [
        {
          term: "Penetration test",
          definition:
            "A time-boxed, authorized attack on your system by a professional, ending in a severity-ranked report with reproduction steps.",
        },
        {
          term: "DAST",
          definition:
            "Dynamic application security testing: probing the running application from the outside, like an attacker would.",
        },
        {
          term: "Rules of engagement",
          definition:
            "The negotiated scope, limits and kill-switch contacts that make an authorized attack safe to run.",
        },
        {
          term: "Bug bounty",
          definition:
            "A standing program paying external researchers for valid findings; continuous testing that scales with your surface.",
        },
        {
          term: "Retest",
          definition:
            "The verification pass confirming fixes actually close the findings — the half of the engagement teams skip.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you make a penetration test produce lasting value, not just a report?",
          a: "Close the loop on every finding: fix it, add a regression test to the security suite, and add a prevention rule — a lint check, a checklist item, a CI gate — that stops the class. Track finding classes across engagements; recurrence means the loop is broken. Scope the next engagement toward what changed since the last one, and give testers your threat model up front. The report is the artifact; the loop is the value.",
        },
        {
          q: "What should be true before you let testers loose?",
          a: "Signed authorization and data-handling agreements, explicit scope and rules of engagement, a kill-switch contact on both sides, and a staging environment that mirrors production configuration — headers, WAF rules, network policy — because environment drift is where misconfiguration findings come from. Also a known-issue list: tell testers what you already know so they spend their paid hours on new ground instead of rediscovering your backlog.",
        },
        {
          q: "Annual pen test versus continuous testing — how do you balance them?",
          a: "They cover different ground. The annual engagement brings human creativity: chaining, business-logic abuse, the things scanners miss. Continuous tooling — SAST, dependency scanning, scheduled DAST — plus a bug bounty covers breadth all year at lower cost. My split: automation in CI always, bounty for the long tail, and a human engagement when the surface changes materially — a new API, an acquisition, an AI feature. Frequency of change, not the calendar, drives the schedule.",
        },
      ],
      quiz: [
        {
          question:
            "The most skipped, most valuable part of a pen test engagement is the:",
          options: [
            "Scoping call",
            "Retest verifying the fixes actually closed the findings",
            "Kickoff email",
            "Executive summary",
          ],
          answerIndex: 1,
          explanation:
            "Fixes assumed correct can miss the real path the tester used. The retest verifies with the same methods — without it you have findings and hopes.",
        },
        {
          question:
            "A finding says 'IDOR on /invoices/{id}'. The correct engineering response:",
          options: [
            "Note it in the report archive",
            "Add a WAF rule blocking /invoices",
            "Fix the missing ownership check, add an authz regression test, and add the class to the prevention checklist",
            "Rename the endpoint",
          ],
          answerIndex: 2,
          explanation:
            "Findings map to mechanisms. Fix the check, test the class in CI, and prevent recurrence — renaming the endpoint or filtering at the WAF addresses neither.",
        },
        {
          question:
            "Why does staging need to mirror production configuration for testing?",
          options: [
            "Headers, WAF rules and network policy differences hide exactly the misconfiguration class",
            "Staging is cheaper to attack",
            "Testers cannot access production",
            "Production data is always encrypted",
          ],
          answerIndex: 0,
          explanation:
            "Environment drift is a finding source in itself. A test against mismatched config validates the wrong system; mirror prod config or test prod under safeguards.",
        },
      ],
    },
    {
      number: 11,
      title: "IDOR / BOLA (Broken Object Level Authorization)",
      summary:
        "The number one API vulnerability in the wild is one missing if-statement: the user is logged in, but nobody checked they own the thing.",
      keyIdea:
        "Object-level checks in the authorization layer, server-side. The authz matrix test suite runs in CI.",
      deepDive: [
        {
          heading: "One missing if-statement",
          paragraphs: [
            "Broken object level authorization is the number one API vulnerability class in the wild, and it is structurally trivial: the request is authenticated — valid token, real user — but the handler fetches the object by id from the URL without asking whether this user may touch this object. GET /api/invoices/4821 returns the invoice if the id exists. The attacker registers, notes their own invoice is 4820, and walks the range. No exploit toolkit, no injection — an incrementing loop and a script.",
            "It tops the API Top 10 because modern development practically breeds it: resources got ids in URLs, handlers got scaffolding that loads by id, and authorization moved into UI hiding — the web app simply never renders a link to someone else's invoice. Hiding is not authorization. UUIDs raise the effort from seconds to scraping, not to impossible: ids leak through Referer headers, response bodies, other endpoints, and support screenshots. If the server does not check ownership, hard-to-guess ids are your entire control — and that is not a control.",
          ],
        },
        {
          heading: "The fix is a layer, not a habit",
          paragraphs: [
            "The durable fix is a central authorization layer through which every object access passes: load the object only in company with the check — scope the query itself (WHERE owner_id = :currentUser) or route the fetch through a policy function (can(user, action, object)). Frameworks help: policy objects like Pundit and CASL, row-level security in Postgres, scoping helpers in your ORM. The anti-pattern is scattered checks — some handlers remember, some do not, and code review cannot hold a pattern that lives in forty places.",
            "Prove it with an authorization matrix test suite in CI: for each endpoint, for each role pair, assert the status code — owner gets 200, other tenant gets 404 or 403, admin per policy, anonymous gets 401. Generate the cases from your route table so a new endpoint without matrix coverage fails the build. Two design notes: prefer 404 over 403 for cross-tenant objects, because 403 confirms existence; and never trust the client-supplied user id in the body or query — identity comes from the session, always.",
          ],
        },
        {
          heading: "BOLA beyond the happy path",
          paragraphs: [
            "The same hole appears in every non-GET verb — POST /api/export with someone else's record id in the body, PATCH that updates a foreign object, DELETE that destroys one — and in nested routes where the parent is checked but the child is not: /orgs/7/projects/91 where project 91 belongs to org 8. Check the whole chain. Batch endpoints are the sneakiest: 'export these ids' performs one check on the first id and loops the rest. Every id in every request, every time.",
            "Non-HTTP surfaces need it too: message consumers processing update-this-order events, background jobs acting on ids from user input, report generators, and mobile-only endpoints that skip the checks their web twins have. Audit by grepping for object fetches by id and asking, for each, where the authorization happened. Then add telemetry: log authorization denials with a counter, because a spike in object-route 404s is either a bug or an attack in progress, and you want to know which.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "The check that must exist",
        caption:
          "Authentication answers who you are; object-level authorization answers whether this row is yours.",
        start: "GET /api/invoices/4821",
        branches: [
          {
            label: "Ownership in the query",
            outcome: "WHERE owner_id = user — passes",
            good: true,
          },
          {
            label: "Policy check on load",
            outcome: "can(user, read, object)",
            good: true,
          },
          {
            label: "AuthN only, no authz",
            outcome: "IDOR — walk the id range",
            good: false,
          },
          {
            label: "403 confirms existence",
            outcome: "Leak — return 404 instead",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Scope the query by the caller — the authorization check becomes the only way to load the object.",
        code: [
          "// Wrong: authentication treated as authorization",
          "const invoice = await db.invoice.findUnique({ where: { id } });",
          "",
          "// Right: the check and the load are one query — nothing to forget",
          "const invoice = await db.invoice.findFirst({",
          "  where: { id, orgId: req.user.orgId },  // scoped to the caller",
          "});",
          "if (!invoice) return res.status(404).json({ error: 'not found' });",
          "// 404, not 403: existence of the object is not disclosed",
          "",
          "// CI: the authz matrix asserts per role pair, per endpoint",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Relying on UUIDs as the authorization control.",
          fix: "Ids leak through Referers, responses and support tickets. UUIDs raise effort, not safety — the server must check ownership regardless.",
        },
        {
          mistake: "Checking the parent resource but not the child in nested routes.",
          fix: "Authorize the whole chain: /orgs/7/projects/91 must verify project 91 belongs to org 7, at every level.",
        },
        {
          mistake: "Trusting a user id sent in the body or query string.",
          fix: "Identity comes from the verified session only. Any client-supplied actor id is attacker-controlled input.",
        },
        {
          mistake: "Returning 403 for cross-tenant objects.",
          fix: "403 confirms the object exists. Return 404 for anything the caller must not know about, and log the denial.",
        },
      ],
      fieldChecklist: [
        "I resolve every object access through one authorization layer or a scoped query.",
        "I cover every endpoint per role pair in the authz matrix suite, which fails the build when a route lacks coverage.",
        "I check the entire chain on nested routes, and authorize every id in batch endpoints, not just the first.",
        "I return 404 for cross-tenant misses, with a logged denial event I can alert on.",
        "I never take identity from client-supplied body or query fields — session only.",
        "I run the same object-level checks in non-HTTP consumers: queue workers, jobs, exports.",
        "I alert on spikes in denials or object-route 404s.",
      ],
      keyTerms: [
        {
          term: "IDOR",
          definition:
            "Insecure direct object reference: fetching an object by id without verifying the caller's relationship to it.",
        },
        {
          term: "BOLA",
          definition:
            "Broken object level authorization — the API Top 10 name for the same failure across API surfaces.",
        },
        {
          term: "Authorization matrix",
          definition:
            "The table of endpoint times role times expected outcome; expressed as a CI test suite, it is the proof.",
        },
        {
          term: "Scoped query",
          definition:
            "A database query that includes the ownership or tenant condition, making authorization part of the load itself.",
        },
        {
          term: "Horizontal privilege escalation",
          definition:
            "Acting on peers' resources at your own privilege level — what IDOR enables, as opposed to escalating to admin.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does IDOR top the API vulnerability lists despite being a simple bug?",
          a: "Because modern development breeds it and tooling misses it. Handlers scaffold a fetch-by-id; authorization lives in the UI, which never renders the link; UUIDs feel like protection but leak through Referers and responses. Scanners struggle with business-logic authorization because they lack a legitimate second tenant. The defense is structural: scoped queries or a policy layer for every object access, plus an authorization matrix suite in CI that fails the build when a route has no coverage.",
        },
        {
          q: "How do you test for broken object level authorization systematically?",
          a: "Build the matrix: every endpoint times the role pairs that matter, asserting the expected code — owner 200, other tenant 404, anonymous 401, admin per policy. Generate the cases from the route table so new endpoints must enroll. Run it in CI with two real accounts per role in a seeded database. Manual probes add the sneaky cases: nested routes, batch exports, non-GET verbs, and ids swapped in request bodies where the UI would never send them.",
        },
        {
          q: "403 or 404 for unauthorized object access — how do you decide?",
          a: "Default to 404 when the caller must not even learn the object exists — cross-tenant anything — because 403 confirms existence and enables resource enumeration. Use 403 where existence is public anyway and the signal helps debugging, for example an admin-only action on a public resource. Whichever you choose, log the denial with enough context to alert on: a spike in cross-tenant 404s is either a bug or a scripted walk, and that distinction is urgent.",
        },
      ],
      quiz: [
        {
          question:
            "GET /api/invoices/4821 works for any logged-in user. What failed?",
          options: [
            "Authentication — the token is invalid",
            "Object-level authorization — nobody checked the caller owns the invoice",
            "Transport security",
            "Rate limiting",
          ],
          answerIndex: 1,
          explanation:
            "The user is real and logged in; the missing step is the ownership check on the object. That is IDOR/BOLA — an if-statement, not a cryptosystem, that was skipped.",
        },
        {
          question:
            "Why are UUIDs not a substitute for ownership checks?",
          options: [
            "They leak via Referers, response bodies and other endpoints; they raise effort, not safety",
            "They are guessable by quantum computers",
            "UUIDs are deprecated in 2026",
            "Databases index them poorly",
          ],
          answerIndex: 0,
          explanation:
            "Unpredictability is not authorization. Ids leak constantly through Referers, responses and screenshots, and scraping beats guessing — the server-side ownership check is the actual control, not the id format.",
        },
        {
          question:
            "POST /api/export accepts a list of invoice ids and checks only the first one. What is the bug class?",
          options: [
            "Injection",
            "CSRF",
            "IDOR in a batch endpoint — every id needs its own check",
            "Verbose error handling",
          ],
          answerIndex: 2,
          explanation:
            "Batch operations are a classic BOLA hiding spot: one check at the front, an unchecked loop behind it. Authorize every id, or resolve the batch through a scoped query.",
        },
      ],
    },
    {
      number: 12,
      title: "SSRF (Server-Side Request Forgery) & Path Traversal",
      summary:
        "Two attacks where you become the weapon: your server makes the request the attacker chooses, or opens the file the attacker names.",
      keyIdea:
        "Egress control, not input parsing alone. Attacker input may select from addresses YOU define, never construct addresses.",
      deepDive: [
        {
          heading: "Your server as the weapon",
          paragraphs: [
            "Server-side request forgery is the bug where attacker-controlled input decides where your server makes a request. A webhook URL field, a PDF generator fetching images, an import-by-URL feature — the attacker submits the cloud metadata address or an internal service URL, and your backend, which sits inside the trust perimeter, fetches it and often reflects the response. The metadata endpoint is the jackpot: short-lived credentials for the whole cloud role. The Capital One breach of 2019 worked exactly this way — SSRF to metadata, then an account listing with the stolen role.",
            "The classic mistakes: allowing any user-supplied URL, trusting DNS (an attacker-controlled hostname can resolve to internal addresses after your check — rebinding), following redirects into internal space, and parsing URLs with libraries that accept surprising schemes. Blocklists — deny 169.254.x, deny 10.x — lose to IPv6, decimal IP forms, and DNS rebinding. Input parsing alone has never been a complete SSRF defense; the architecture has to change.",
          ],
        },
        {
          heading: "Egress control is the real fix",
          paragraphs: [
            "The structural defense: attacker input may select from addresses you define, never construct addresses. Replace 'give us a URL' with 'give us an id' and resolve the id to a fixed destination server-side. Where arbitrary destinations are the product — importers, webhooks — put fetches through an egress proxy or validation layer that resolves DNS itself, checks the resolved IP against link-local, loopback, private and metadata ranges, and fetches with redirects disabled or re-validated per hop. Enforce IMDSv2 (which requires a session token headers-first) and segment internal services on the network.",
            "Path traversal is the file-shaped sibling: ../ sequences in a filename walk out of the intended directory — /files/report.pdf becomes /files/../../etc/passwd. The fix is the same shape: never build filesystem paths from raw input. Resolve the user's selection against a fixed root, verify the canonical resolved path starts with that root, store uploads under server-generated names, and let OS permissions and a container filesystem do their part. URL-encoding variants and null bytes are the encoding trivia; the canonical-path check defeats all of them at once.",
          ],
        },
        {
          heading: "Detecting and containing",
          paragraphs: [
            "Both attacks are loud if you log the right things: outbound fetches with their resolved destinations, file access with canonical paths, and 4xx/5xx on object-like parameters. Alert on egress to link-local or private ranges from app subnets — legitimate app servers rarely talk to the metadata address except at boot. Fuzz the URL and file parameters in staging with SSRF and traversal payload lists, and include both in the threat model of any feature whose job is fetching or storing.",
            "Containment decides blast radius when prevention fails: the app role holds minimum cloud permissions; the egress proxy allowlists by destination category; containers run with read-only filesystems and no host mounts; database credentials do not sit in environment variables readable by every subprocess. Red-team both classes specifically — SSRF to metadata and traversal to /etc/passwd are the first two things any external tester will try on a feature that fetches or stores, so they should be the first two things you test yourself.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Where an SSRF request goes",
        caption:
          "The perimeter you defend from outside does not exist for requests your own server makes.",
        steps: [
          { label: "Attacker submits URL", note: "webhook or import field" },
          { label: "Server fetches it", note: "inside the trust perimeter" },
          { label: "Internal target hit", note: "metadata, admin, database" },
          { label: "Response reflected", note: "credentials or data leak" },
          { label: "Role compromised", note: "cloud account pivots" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Resolve, then validate the resolved IP — hostname checks lose to DNS rebinding.",
        code: [
          "import { isIP } from 'node:net';",
          "import dns from 'node:dns/promises';",
          "",
          "// Abridged list — add 172.16/12 and 100.64/10 in production",
          "const BLOCKED = (ip: string) =>",
          "  ip.startsWith('10.') || ip.startsWith('192.168.') ||",
          "  ip.startsWith('169.254.') || ip.startsWith('127.') ||",
          "  ip === '::1' || ip.startsWith('fd') || ip.startsWith('fe80');",
          "",
          "// Resolve first, THEN check the resolved address — never the hostname",
          "export async function assertSafeHost(hostname: string) {",
          "  const [ip] = await dns.lookup(hostname);",
          "  if (isIP(ip) && BLOCKED(ip)) throw new Error('internal range blocked');",
          "  return ip; // fetch this IP; redirects disabled or re-validated",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Accepting user-supplied URLs and blocking known-bad hosts with a denylist.",
          fix: "Blocklists lose to IPv6, decimal IPs, redirects and DNS rebinding. Resolve, check the resolved IP against private ranges, and disable redirect following.",
        },
        {
          mistake: "Building file paths by joining user input to a base directory.",
          fix: "Resolve against a fixed root, require the canonical path to start with that root, and store uploads under server-generated names.",
        },
        {
          mistake: "Leaving cloud metadata reachable from app subnets.",
          fix: "Enforce IMDSv2, restrict instance roles to minimum permissions, and alert on any app-server call to the metadata address.",
        },
        {
          mistake: "Validating the hostname but letting the fetch follow redirects anywhere.",
          fix: "Re-validate every hop or disable redirects. A 302 to an internal address is the standard SSRF pivot.",
        },
      ],
      fieldChecklist: [
        "I resolve every server-side fetch destination through an egress check or proxy I can name.",
        "I let attacker input select destinations from server-defined ids or allowlists — never construct URLs.",
        "I disable redirect following, or re-validate per hop, on any fetch influenced by input.",
        "I resolve file access against a fixed root with a canonical-path prefix check.",
        "I hold the cloud role to minimum permissions, enforce IMDSv2, and alert on metadata calls.",
        "I have probed staging with SSRF and traversal payloads and watched the blocks fire.",
      ],
      keyTerms: [
        {
          term: "SSRF",
          definition:
            "Server-side request forgery: attacker input chooses where your server makes a request, reaching internal targets the perimeter hides.",
        },
        {
          term: "DNS rebinding",
          definition:
            "A hostname that resolves to a safe address during validation and an internal one during fetch; defeated by validating the resolved IP.",
        },
        {
          term: "IMDSv2",
          definition:
            "AWS instance metadata v2, which requires a session token header first, blunting SSRF-to-credential attacks.",
        },
        {
          term: "Egress control",
          definition:
            "Governing which destinations your servers may connect to; the architectural answer to SSRF.",
        },
        {
          term: "Path traversal",
          definition:
            "Walking out of an intended directory with sequences like ../ to read arbitrary files; defeated by canonical-path checks.",
        },
      ],
      interviewQuestions: [
        {
          q: "A feature needs to fetch a file from any URL a user provides. Design it safely.",
          a: "First ask whether arbitrary destinations are truly required; usually a fixed set of providers with ids is enough, and then input never constructs URLs. If arbitrary fetching is the product: fetch through an egress proxy that resolves DNS itself, validates the resolved IP against private, loopback and link-local ranges, disables or re-validates redirects, caps response size and content type, and times out fast. The app role also holds minimum permissions so metadata theft has a small ceiling.",
        },
        {
          q: "Why is DNS rebinding the reason hostname blocklists fail?",
          a: "Because validation and fetching are two separate lookups. The attacker controls a hostname that returns a safe public IP when your validator resolves it, and an internal address seconds later when the fetch resolves it — the check and the use see different answers. The fix is checking the resolved address from the same lookup the fetch uses, pinning the resolved IP for the connection, and treating redirect hops as new validations. Parsing the hostname alone never closes this.",
        },
        {
          q: "How do SSRF and path traversal relate, and do they share a defense?",
          a: "Both are cases of your code fetching or opening what the attacker names — the server as the weapon. The shared defense shape is: input selects from server-defined choices, never constructs the target. For URLs that means ids or allowlists plus resolved-IP validation; for files it means resolving against a fixed root and requiring the canonical path to stay inside it. Both also need containment — least-privilege roles, read-only filesystems — because prevention eventually fails once.",
        },
      ],
      quiz: [
        {
          question:
            "Why is 169.254.169.254 the most famous SSRF destination?",
          options: [
            "It is the public DNS root",
            "Cloud instance metadata — including role credentials — lives there",
            "It hosts the container registry",
            "It is the Kubernetes API",
          ],
          answerIndex: 1,
          explanation:
            "Every major cloud exposes instance metadata on a link-local address, and that metadata includes credentials for the machine's role. SSRF that reaches it becomes cloud account compromise.",
        },
        {
          question: "The reliable SSRF validation order is:",
          options: [
            "Resolve DNS, validate the resolved IP, then fetch that IP with redirects handled",
            "Check the hostname string, then fetch",
            "Fetch, then check the response for internal data",
            "Block 127.0.0.1 and 10.0.0.0/8 strings",
          ],
          answerIndex: 0,
          explanation:
            "Hostname checks and fetches resolve at different moments — rebinding exploits that gap. Validate the resolved address from the same lookup the connection uses, per hop.",
        },
        {
          question:
            "A download parameter accepts report.pdf and ../../etc/passwd also works. What is the correct fix?",
          options: [
            "Strip ../ sequences from input",
            "URL-encode the parameter",
            "Resolve against a fixed root and require the canonical path to remain inside it",
            "Rename the endpoint",
          ],
          answerIndex: 2,
          explanation:
            "Encoding tricks evade string stripping; the canonical-path check defeats every variant at once. The resolved path must start with the fixed root, or the request is rejected.",
        },
      ],
    },
    {
      number: 13,
      title: "Supply Chain Security (Pinned Versions, SBOM, Malicious Packages)",
      summary:
        "The 2020s proved it: you do not have to be hacked directly. Your build pipeline will happily fetch the attack for you.",
      keyIdea:
        "Pin everything. SBOM per release. Provenance verification at deploy. Keep CI credential-free via OIDC.",
      deepDive: [
        {
          heading: "The build fetches the attack",
          paragraphs: [
            "The last decade of supply-chain incidents taught the lesson repeatedly: you do not have to be hacked directly when your build pipeline fetches code on your behalf. event-stream changed hands and shipped a payload targeting a specific app; ua-parser-js was poisoned through a compromised maintainer account into millions of downloads; xz showed years of patient social engineering landing a backdoor in the compression library under OpenSSH. The pattern is always trust, laundered: you trust your direct dependencies, they trust theirs, and nobody verified the hand-offs.",
            "Your exposure is wider than package.json: Docker base images, GitHub Actions, Terraform modules, browser extensions on engineer machines — and the AI-era twist of hallucinated package names that malware authors register preemptively, the slopsquatting problem. When a maintainer account is compromised, malware flows to every install that runs within the exposure window; the only structural answer is verification at your end, not trust at theirs.",
          ],
        },
        {
          heading: "Pin, inventory, verify provenance",
          paragraphs: [
            "Three controls form the core. Pin everything: exact versions in the lockfile, digests for container images, pinned SHAs and version tags for CI actions. Inventory everything: an SBOM per release — CycloneDX or SPDX — so the next disclosure becomes a query, not an archaeology dig. Verify provenance where the ecosystem supports it: npm provenance and Sigstore signatures let you confirm an artifact was built by the expected pipeline from the expected source at the expected version. Verify at deploy time, not just at install time.",
            "Gate new dependencies the way you gate new code: a review step asking what the package does, who maintains it, how many maintainers, when it was last updated, what it executes at install — postinstall scripts run on your machines, so CI installs with ignore-scripts — and whether it is needed at all, because the most secure dependency is the twenty lines you write yourself. Automated tools like Socket score install-time behaviors such as network access and child-process spawns. An internal registry proxy gives you a choke point to quarantine and scan before anything reaches developers.",
          ],
        },
        {
          heading: "Harden the pipeline itself",
          paragraphs: [
            "CI is the crown jewels with keys: it holds credentials and decides what ships. Keep CI credential-free via OIDC — short-lived, workload-scoped tokens instead of long-lived API keys stored as repository secrets — and scope what each workflow may touch. Separate build from publish, require review for workflow file changes (the .github directory is attack surface), and treat branch protection as mandatory for anything deployable. The SolarWinds lesson: to the attacker, the build system is the product.",
            "Practice the failure: when the next malicious-package trend hits, the teams that win are the ones with an SBOM query, a registry quarantine, and a rehearsed rotation — because the right move is rotating every credential the pipeline held, not just patching the package. Run a tabletop: this dependency was malicious for six hours, what did it touch? The answer list — npm tokens, cloud keys in CI, signing keys — is your credential inventory, and it should exist before the incident, reviewed quarterly.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "Trust the code you run, tiered",
        caption:
          "Verify hardest where trust is thinnest — the bottom tier is everything you have not vouched for.",
        tiers: [
          { label: "Your reviewed code", note: "tests, review, CI gates" },
          { label: "Vetted direct deps", note: "installed through the review gate" },
          { label: "Pinned transitive deps", note: "lockfile plus SBOM tracked" },
          { label: "Everything else", note: "unverified — the attack surface" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "Pinned SHAs, OIDC instead of stored secrets, scripts disabled, an SBOM per build — pipeline hygiene in one workflow.",
        code: [
          "# Workflow hardening: pinned action, OIDC, no install scripts, SBOM",
          "permissions:",
          "  id-token: write   # OIDC — no long-lived secrets stored in the repo",
          "  contents: read",
          "steps:",
          "  - uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2",
          "  - run: npm ci --ignore-scripts    # postinstall cannot execute",
          "  - run: npm audit --audit-level=critical",
          "  - run: npx @cyclonedx/cyclonedx-npm --output-file sbom.json",
          "  - uses: actions/upload-artifact@ea165f8d65b6e75b540449e92b4886f43607fa02",
          "    with:",
          "      name: sbom",
          "      path: sbom.json",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Using floating version ranges and latest tags everywhere.",
          fix: "Pin exact versions in the lockfile, digests for images, SHAs for CI actions. Reproducibility is the floor of supply-chain security.",
        },
        {
          mistake: "Storing long-lived cloud credentials as CI secrets.",
          fix: "Use OIDC: short-lived, workload-scoped tokens minted per run. Rotation becomes automatic and leak blast radius shrinks to minutes.",
        },
        {
          mistake: "Adding a popular package without vetting maintainers or install scripts.",
          fix: "A review gate: maintainers, update cadence, postinstall behavior, and whether twenty lines of your own code would do.",
        },
        {
          mistake: "Treating a malicious-dependency incident as 'patch the package'.",
          fix: "Rotate every credential the pipeline held, check the SBOM for the exposure window, and re-verify artifacts — the package was one of several assets touched.",
        },
      ],
      fieldChecklist: [
        "I pin exact versions in lockfiles, digests for images, and full SHAs for CI actions with version comments.",
        "I generate an SBOM (CycloneDX or SPDX) per release, queryable within minutes.",
        "I authenticate CI with OIDC short-lived tokens; no long-lived cloud keys live in repo secrets.",
        "I pass new dependencies through a vetting gate: maintainers, cadence, install-time behavior, necessity.",
        "I install in CI with ignore-scripts enabled and a registry proxy or quarantine in front.",
        "I have run the tabletop: a dependency was malicious for six hours — what did we rotate?",
      ],
      keyTerms: [
        {
          term: "SBOM",
          definition:
            "Software bill of materials: a machine-readable inventory of every component in a build, queryable when the next disclosure lands.",
        },
        {
          term: "Provenance",
          definition:
            "Verifiable metadata linking a built artifact to the source, pipeline and version that produced it — trust with receipts.",
        },
        {
          term: "OIDC",
          definition:
            "OpenID Connect federation that mints short-lived, workload-scoped CI credentials instead of stored long-lived secrets.",
        },
        {
          term: "Typosquatting",
          definition:
            "Publishing a malicious package under a name one keystroke from a popular one; hallucinated AI suggestions extend it.",
        },
        {
          term: "SLSA",
          definition:
            "A framework of supply-chain integrity levels, from source provenance to hermetic, verifiable builds.",
        },
      ],
      interviewQuestions: [
        {
          q: "What did the major supply-chain incidents change about how you consume open source?",
          a: "Trust moved from reputation to verification. I pin everything — lockfile versions, image digests, action SHAs; I generate an SBOM per release so disclosures become queries; I verify provenance where the ecosystem supports it; and new dependencies pass a vetting gate covering maintainers, update cadence and install-time behavior. The xz case in particular showed social engineering is the vector, so popular-and-well-maintained is a starting point, not a verdict.",
        },
        {
          q: "Why is OIDC the recommended pattern for CI credentials?",
          a: "Because stored long-lived secrets are the pipeline's softest target: they leak, they outlive their purpose, and rotation is manual. OIDC mints a short-lived token per workflow run, scoped to that exact repository and job, exchanged with the cloud provider — nothing to steal that stays valuable past the run. Combined with branch protection on workflow files, it shrinks the SolarWinds-style scenario where the build system is the intrusion path.",
        },
        {
          q: "A dependency you use was published malicious for six hours and you installed within the window. First hour?",
          a: "Contain and rotate. Freeze installs through the registry proxy, query the SBOM to confirm which builds ingested it, pull the package tarball diff to understand what it did, then rotate every credential the affected pipeline could reach — registry tokens, cloud keys, signing keys — not just remove the package. Only then rebuild artifacts from clean lockfiles and re-verify. Removal without rotation assumes the malware wanted to be noticed, which is the wrong assumption.",
        },
      ],
      quiz: [
        {
          question:
            "The core reason supply-chain attacks succeed against careful teams:",
          options: [
            "Trust is transitive — you inherit every hand-off you never verified",
            "npm is fundamentally insecure",
            "Firewalls cannot inspect packages",
            "Lockfiles hide vulnerabilities",
          ],
          answerIndex: 0,
          explanation:
            "Your direct dependencies trust theirs, images trust upstream builds, CI trusts action authors. Verification at your boundary — pinning, SBOM, provenance — is the structural answer.",
        },
        {
          question:
            "Which pairing best limits CI credential damage?",
          options: [
            "Longer secrets with more rotation reminders",
            "OIDC short-lived tokens plus branch protection on workflow files",
            "Storing secrets in environment files",
            "Disabling CI logging",
          ],
          answerIndex: 1,
          explanation:
            "OIDC tokens expire within the run and are scoped per workload; protecting workflow files stops the attacker from minting new permissions. Stored keys have neither property.",
        },
        {
          question: "An SBOM's most valuable moment is:",
          options: [
            "At license review",
            "During onboarding",
            "When a dependency disclosure lands and you must map exposure in minutes",
            "When the bundle feels slow",
          ],
          answerIndex: 2,
          explanation:
            "The bill of materials earns its keep during incident response: which builds ingested the dependency, which versions, which exposure window. Without it, answering those questions is archaeology under deadline pressure.",
        },
      ],
    },
    {
      number: 14,
      title: "Bot Mitigation, CAPTCHA / Proof-of-Work & Abuse Quotas",
      summary:
        "The internet's ambient traffic is bots: scanners, scrapers, credential stuffers, signup spammers. Your defenses need a floor that works while you sleep.",
      keyIdea:
        "Progressive friction. The floor (quotas) is always on; challenges are the escalator. Honest users never see a challenge.",
      deepDive: [
        {
          heading: "The floor traffic is not human",
          paragraphs: [
            "Within hours of a public endpoint existing, the scanners arrive — automated, patient, unimpressed by your design review. The ambient internet mix is vulnerability scanners, credential stuffers replaying breach lists against your login, scrapers after your data and pricing, signup spammers farming free tiers, and reservation bots when anything is scarce. None of this is a breach in the classic sense; it is economics — each automated request costs you compute, data quality and user trust, and returns value to someone else. Defense here is ongoing capacity management, not a one-time hardening.",
            "The design principle is progressive friction, matched to abuse value: cheap passive signals — rate limits, request patterns — filter the bottom of the pyramid; challenges like CAPTCHA and proof-of-work escalate against suspicious traffic; hard blocks catch the rest. The inverse mistake is friction inflation, CAPTCHA on every login, which taxes your honest users a hundred times per bot that gets through anyway. Modern CAPTCHA systems are mostly invisible behavioral scoring for exactly this reason, and proof-of-work — the Anubis-style approach protecting public git forges from AI crawlers — charges a compute tax instead of a human attention tax.",
          ],
        },
        {
          heading: "Quotas first, escalators after",
          paragraphs: [
            "Start with quotas because they work while you sleep and they cannot be solved by a smarter bot: per-IP and per-account rate limits on expensive endpoints — login, signup, password reset, search, anything calling an LLM — sized to legitimate behavior with headroom, returning 429 with Retry-After. Redis-backed counters make the limit global across instances; the limit goes on the abuse target: per account for credential stuffing, per IP for scraping, per session for search. Log every 429, because your abuse telemetry starts there.",
            "Layer signals on top: failed-login velocity per account and per IP — credential stuffing shows up as a distribution your honest users are never part of — signup bursts and disposable-email domains, request patterns that never render assets, and honeypot fields invisible to humans that bots fill anyway. Escalate deliberately: extra latency first, then challenges, then blocks — and prefer serving tarpit responses to scrapers over clean 403s, which teach the scraper exactly where the wall is. Every tier writes events, because the bot war is won with data, not with one clever wall.",
          ],
        },
        {
          heading: "Bots with browsers, and the honest-user tax",
          paragraphs: [
            "The adversary has industrialized: headless browser farms rotate residential proxies, solve or farm CAPTCHA tokens, and spoof fingerprints — a check based on one signal, a user agent or a single header, fails in an afternoon. Defense becomes ensemble scoring: signals combined with weights, tuned continuously — which is why managed bot management (Cloudflare, Akamai, DataDome, HUMAN) exists: they see traffic across thousands of sites and buy you that network effect. Self-rolling is viable for the floor and a losing game for the top of the pyramid.",
            "Guard the honest-user tax with the same rigor as the bot wall: measure challenge rates per endpoint, alert when legitimate users hit friction, provide an accessibility path around every challenge, and review the false-positive cost in support tickets. Every protection needs an abuse runbook: what a stuffing campaign looks like in your dashboards, who can raise limits, what the emergency lever is. Abuse defense is an operations discipline wearing a security costume — the teams that treat it as such sleep through attacks that used to page them at 3 a.m.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Progressive friction, top to bottom",
        caption:
          "The floor is always on; each layer above is the escalator, and honest users stay at the bottom.",
        layers: [
          { label: "Hard block", note: "known-bad: blocklists, WAF" },
          { label: "Challenge", note: "CAPTCHA or proof-of-work" },
          { label: "Behavioral scoring", note: "velocity, fingerprints, honeypots" },
          { label: "Quotas", note: "429 with Retry-After, always on" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "A Redis-backed quota is the always-on floor: cheap, global across instances, and independent of bot cleverness.",
        code: [
          "import Redis from 'ioredis';",
          "",
          "const redis = new Redis(process.env.REDIS_URL); // one store, all instances",
          "",
          "// Fixed-window quota per key; cheap, global, always on",
          "export async function rateLimit(key: string, limit: number, windowSec: number) {",
          "  const bucket = Math.floor(Date.now() / 1000 / windowSec);",
          "  const k = `rl:${key}:${bucket}`;",
          "  const hits = await redis.incr(k);",
          "  if (hits === 1) await redis.expire(k, windowSec);",
          "  return { allowed: hits <= limit, retryAfter: windowSec };",
          "}",
          "",
          "// Call per request: allowed ? next() : respond 429 with Retry-After",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "CAPTCHA on every sensitive endpoint as the primary defense.",
          fix: "It taxes honest users and is farmed anyway. Quotas are the floor; challenges are the escalator for flagged traffic only.",
        },
        {
          mistake: "Rate limiting per instance in application memory.",
          fix: "Behind a load balancer each instance grants its own full budget. Count in Redis or at the gateway so the limit is global.",
        },
        {
          mistake: "Trusting one signal like user agent or a single header.",
          fix: "Headless farms spoof single signals in an afternoon. Combine velocity, fingerprint and behavioral signals with weights, or buy a managed service.",
        },
        {
          mistake: "Returning clean, instant 403s to suspected scrapers.",
          fix: "That confirms the boundary and helps their tuning. Serve tarpit or degraded responses, log everything, and keep the real wall invisible.",
        },
      ],
      fieldChecklist: [
        "I keep per-account and per-IP quotas with 429 and Retry-After on expensive endpoints: login, signup, reset, search, AI calls.",
        "I keep quota counters in Redis or the gateway — global across instances, never in app memory.",
        "I log every 429 and failed login, with velocity alerts that page someone.",
        "I fire challenges only on flagged traffic, monitoring challenge rates per endpoint for false positives.",
        "I place honeypot fields on public forms and check them server-side.",
        "I maintain an abuse runbook: dashboards, escalation contacts, and the emergency quota lever.",
        "I provide an accessible alternative path around every challenge for honest users.",
      ],
      keyTerms: [
        {
          term: "Progressive friction",
          definition:
            "Escalating cost for suspicious traffic: latency, then challenges, then blocks — while honest users stay at the free tier.",
        },
        {
          term: "Credential stuffing",
          definition:
            "Replaying leaked username-password pairs against your login at scale; countered by per-account velocity limits, not just CAPTCHA.",
        },
        {
          term: "Proof-of-work challenge",
          definition:
            "A small computational task clients must solve before service; a price on abuse that spares human attention.",
        },
        {
          term: "Token bucket",
          definition:
            "A rate-limiting algorithm allowing controlled bursts within a sustained rate; the standard quota primitive.",
        },
        {
          term: "Tarpit",
          definition:
            "A deliberately slow or degraded response served to suspected bots instead of a clean rejection.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you design bot defense without punishing real users?",
          a: "Progressive friction with quotas as the always-on floor. Honest users should only ever encounter rate limits sized above legitimate behavior; challenges appear only for traffic flagged by velocity, fingerprint or behavioral signals; blocks are reserved for confirmed abuse. I measure the honest-user tax — challenge rates per endpoint, support tickets, accessibility paths — with the same seriousness as the bot catch rate, because a defense that taxes a hundred real users per bot caught is losing on economics.",
        },
        {
          q: "Credential stuffing waves hit your login. What actually stops them?",
          a: "Not CAPTCHA alone — farmed tokens flow around it. Per-account and per-IP velocity limits on failed logins, breach-password screening that rejects credentials known in public dumps, mandatory MFA on suspicious logins, and alerting on the stuffing signature: a wide distribution of single-attempt failures across accounts. Combined with SameSite cookies and rate limits, the attack economics collapse — the stuffer's cost per valid login rises above the value of one.",
        },
        {
          q: "Build vs buy for bot management — how do you decide?",
          a: "Split the pyramid. The floor — quotas, honeypots, velocity rules, tarpits — is buildable in a week with Redis and middleware, and it catches the volume. The top — ensemble fingerprint scoring against headless browser farms with residential proxies — is a continuously tuned arms race fed by cross-site traffic data you do not have, which is the actual product Cloudflare, Akamai, DataDome and HUMAN sell. I build the floor, buy the top when abuse economics justify it, and keep the runbook either way.",
        },
      ],
      quiz: [
        {
          question:
            "Why are quotas the first line of abuse defense rather than CAPTCHA?",
          options: [
            "Quotas are cheap, always on, global, and cannot be solved — only respected",
            "CAPTCHA is deprecated",
            "CAPTCHA only works on mobile",
            "Quotas are required by law",
          ],
          answerIndex: 0,
          explanation:
            "A quota charges every request regardless of how clever the bot is; a challenge taxes human attention and is farmed anyway. Floor first, escalator second.",
        },
        {
          question:
            "Rate limits live in each app instance's memory behind a load balancer. The flaw:",
          options: [
            "Memory limits are slower",
            "Each instance grants a full budget, multiplying the real limit by instance count",
            "Redis is required by the framework",
            "It breaks HTTPS",
          ],
          answerIndex: 1,
          explanation:
            "Effective limit equals per-instance budget times instances — a tenfold increase you did not intend. Count in Redis or at the gateway so the budget is global.",
        },
        {
          question:
            "A scraper rotates residential proxies and spoofs fingerprints. What still works?",
          options: [
            "Blocking the user agent",
            "Behavioral ensemble scoring at the edge, backed by cross-site traffic data",
            "A robots.txt update",
            "Longer session timeouts",
          ],
          answerIndex: 1,
          explanation:
            "Single signals spoof in an afternoon; managed bot networks score against traffic seen across thousands of sites, which is exactly the network effect self-rolled defenses lack.",
        },
      ],
    },
  ],
};
