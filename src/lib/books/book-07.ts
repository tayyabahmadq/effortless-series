/**
 * Book 07 — Master System Design.
 * Expanded from the seed data in books-data.ts; format follows _reference.ts.
 */
import type { Book } from "../types";

export const book07: Book = {
  id: "book-07",
  number: 7,
  title: "Master System Design",
  subtitle: "Book 07 of 13 · The Effortless Series",
  tagline:
    "The decision discipline: clients and servers, monolith vs microservices, API design, REST and GraphQL, caching, CAP, consistency, event-driven architecture, idempotency, circuit breakers, sagas and back-of-the-envelope estimation.",
  description:
    "System design is the accumulation of trade-offs that are painful to reverse. This book teaches you to see the trade-offs on a whiteboard — before they harden into concrete.",
  layer: "Shape & stretch",
  layerQuestion: "What architecture survives success?",
  accentColor: "#22d3ee",
  emoji: "07",
  months: "Months 7–8",
  chapters: [
    {
      number: 1,
      title: "Client and Server",
      summary:
        "The request/response model is the atom of the web — and most architecture decisions are really decisions about which side owns which responsibility.",
      keyIdea:
        "Server owns validation, authorization, money, truth. Client owns presentation. No business rule lives only in the client.",
      deepDive: [
        {
          heading: "The contract never changed",
          paragraphs: [
            "Strip away the frameworks and the model is unchanged since the beginning: a client initiates, a server responds. The browser or app renders what it received; the server computes, validates and persists. What has changed is where the blur sits — modern clients render aggressively, prefetch, cache, even run their own storage offline. The blur is fine as long as one line stays sharp: the client may suggest, but the server decides. Every architecture argument in this book is, at some depth, an argument about where that line runs.",
            "The division of labor follows the trust boundary. The client owns presentation: layout, interaction, optimistic feedback, input ergonomics. The server owns validation, authorization, money and truth. Input validation in the browser is a courtesy that saves a round trip; the same checks run again on the server, because anything arriving over the network is untrusted regardless of which UI sent it. A request is not a message from your app — it is a message from the internet wearing your app's clothes.",
          ],
        },
        {
          heading: "Statelessness multiplies everything",
          paragraphs: [
            "A server that keeps session state in process memory is a server you cannot replace. Load balancers must pin users to it with sticky sessions, deploys drain it carefully, a crash loses logins, and scaling means copying state everywhere. Make the server stateless — sessions in Redis or signed tokens, every request self-contained — and properties cascade: any instance serves any request, deploys become rolling restarts, autoscaling is trivial, and a dead instance is a non-event. Statelessness is the highest-leverage habit in the request/response world.",
            "Statelessness does not mean no state; it means no state that only one machine holds. The database holds the records, Redis holds sessions, object storage holds files — the server is a stateless function between them. The test is operational: kill an instance mid-session in staging and ask what the user noticed. If the answer is 'nothing', the architecture scales horizontally. If the answer is 'everyone on that box got logged out', you have found the sticky state before production did.",
          ],
        },
        {
          heading: "The line fails by drift",
          paragraphs: [
            "The line erodes quietly through drift: the web app validates a coupon, the mobile app forgets the rule, and the API trusts whichever client sent the request. The fix is boring and absolute — one server-side module owns each business rule, and clients only render its outputs. Prices are computed where the catalog lives; entitlements are checked where the grant lives. Clients send identifiers and intent; servers return computed results. This costs an occasional round trip and repays it the first time a rule changes exactly once.",
            "Optimistic UI blurs the line on purpose: the client shows the cart total instantly and reconciles when the server answers. That is good UX, and safe only because reconciliation is authoritative — the server's number replaces the guess, always, including when they disagree. The path you must design is the disagreement itself: what does the screen show when the server's total is higher? Decide it in the contract now, not in a support escalation later.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "One request, five owners",
        caption:
          "Read left to right: ownership of truth increases at every hop.",
        steps: [
          { label: "Browser", note: "renders; suggests; never decides" },
          { label: "CDN", note: "static bytes; no decisions" },
          { label: "Load balancer", note: "routes; no business logic" },
          { label: "App server", note: "validates, authorizes, decides" },
          { label: "Database", note: "owns the truth" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The server recomputes everything money-shaped; the client only sent identifiers.",
        code: [
          "// Server-side re-validation: the client is untrusted, always.",
          "type CheckoutInput = { cartId: string; couponCode?: string };",
          "",
          "export function handleCheckout(raw: unknown) {",
          "  const input = parse(raw, CheckoutInputSchema);  // zod-style parse",
          "  const cart = carts.mustFind(input.cartId);      // ids, not prices",
          "  const total = pricing.compute(cart, input.couponCode);",
          "  return { totalCents: total, requestId: newRequestId() };",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Trusting client-side validation as the only check on any field.",
          fix: "Client validation is UX; the server re-validates every field against the schema. Requests are untrusted regardless of which client sent them.",
        },
        {
          mistake:
            "Computing prices or permissions in the client and submitting the results.",
          fix: "Server recomputes totals from the catalog and grants it owns; clients send identifiers and intent. The client's number is a preview, always reconciled.",
        },
        {
          mistake:
            "Storing session state in server memory and calling the design scalable.",
          fix: "Sessions live in Redis or signed tokens so any instance serves any request. Verify by killing an instance mid-session in staging.",
        },
        {
          mistake: "Letting a business rule fork between web and mobile clients.",
          fix: "One server-side module owns each rule; clients render its outputs. Rules never fork per client — every client hits the same path.",
        },
      ],
      fieldChecklist: [
        "I can name, for every field in our API, where validation happens on both client and server.",
        "No price, permission or entitlement is computed in any client.",
        "My servers are stateless — any instance can serve any request, verified by killing one in staging.",
        "Session and user state live in Redis or signed tokens, not in process memory.",
        "I can draw the request path — client, edge, balancer, app, database — from memory.",
        "Every business rule lives in exactly one server-side module that all clients hit.",
      ],
      keyTerms: [
        {
          term: "Trust boundary",
          definition:
            "The line where untrusted input becomes validated data; every server-side entry point sits on it.",
        },
        {
          term: "Stateless service",
          definition:
            "A server that keeps no per-client state in memory, so any instance can serve any request.",
        },
        {
          term: "Sticky session",
          definition:
            "Load-balancer pinning of a user to one instance — usually the symptom of hidden server-side state.",
        },
        {
          term: "Thin client",
          definition:
            "A client that renders and suggests while all decisions and computations stay on the server.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does the industry keep hammering on stateless servers?",
          a: "Because state in server memory breaks the properties that make services operable: horizontal scaling, rolling deploys and cheap failure. If any instance can serve any request, a dead instance is a non-event and autoscaling is a config change. Sessions go to Redis or signed tokens, files to object storage. My test is operational: kill an instance mid-session in staging and check that users noticed nothing.",
        },
        {
          q: "A client sends the final discounted price with its order. What do you change?",
          a: "The contract. The client sends cart and coupon identifiers; the server recomputes totals from the catalog and grants it owns. Client-side price display stays — it is good UX — but it becomes a preview reconciled against the server's authoritative response, including the disagreement path. This costs one round trip and prevents an entire class of tampering and drift bugs across web, mobile and every future client.",
        },
        {
          q: "Where does the client-server line genuinely blur, and what keeps it safe?",
          a: "Offline-first and optimistic UI blur it deliberately: clients render intent immediately and reconcile later. It stays safe when reconciliation is authoritative — the server's state always wins, and the disagreement path is designed, not improvised. Edge rendering and service workers complicate the topology but not the rule: presentation may live anywhere; validation, authorization, money and truth never leave the server.",
        },
      ],
      quiz: [
        {
          question:
            "A user edits the price field in browser dev tools and submits the form. What should happen?",
          options: [
            "The request is rejected because clients cannot inspect traffic",
            "Nothing — TLS prevents field editing",
            "The server recomputes the price from authoritative data and ignores the submitted value",
            "The WAF blocks the request automatically",
          ],
          answerIndex: 2,
          explanation:
            "Client-submitted values are untrusted input, never data. Anything money-shaped — totals, discounts, entitlements — is recomputed on the server from sources the client cannot touch, and the submitted number is ignored outright.",
        },
        {
          question:
            "What property does a stateless server unlock that a sticky one does not?",
          options: [
            "Lower database load",
            "Any instance can serve any request, making scaling and deploys trivial",
            "Stronger encryption",
            "Faster DNS resolution",
          ],
          answerIndex: 1,
          explanation:
            "Statelessness makes instances interchangeable: load balancers route freely, deploys become restarts, and a crash loses nothing. Sticky sessions are usually the symptom of hidden per-instance state.",
        },
        {
          question: "Client-side validation exists primarily to…",
          options: [
            "Replace server-side validation",
            "Improve security",
            "Reduce server CPU costs",
            "Save users a round trip by catching errors early",
          ],
          answerIndex: 3,
          explanation:
            "Client validation is UX. The server re-validates everything because requests are untrusted regardless of which client sent them — one earns speed, the other earns correctness.",
        },
      ],
    },
    {
      number: 2,
      title: "Monolith vs Microservices",
      summary:
        "The industry spent a decade learning that microservices are an organizational technology, not a performance one. Start a monolith; split when the org chart forces it.",
      keyIdea:
        "Modular monolith with enforced seams. Split only on named forcing functions. Never split for fashion.",
      deepDive: [
        {
          heading: "Microservices are organizational technology",
          paragraphs: [
            "Microservices exist to solve an organizational problem: at some headcount, one deploy train and one codebase become the bottleneck, and teams block each other. Independent deployability, failure isolation and per-service scaling are the prizes. The price is paid in architecture: a function call becomes a network call that can timeout, retry, duplicate or vanish; one feature spans five repos; local development needs orchestration; every bug is distributed whether it wants to be or not. The trade buys throughput for teams, not for requests.",
            "So the honest question is never 'are microservices good?' but 'does this organization have the pain they cure?' A team of eight shipping one product does not — it buys the costs at retail and receives none of the benefits. An org of two hundred engineers stepping on each other in one codebase might. Between those poles, the default answer for most products most of the time is a well-modularized monolith, which delivers the meaningful benefit — clear boundaries — without the network.",
          ],
        },
        {
          heading: "The modular monolith is the default",
          paragraphs: [
            "A modular monolith is one deployable with enforced internal seams: billing, catalog and identity each own their tables and expose a narrow public interface, with lint rules or architecture tests rejecting illegal imports. You keep deployability, transactional consistency across modules, and a debugger that steps through the whole system. The discipline matters more than the packaging: seams enforced by convention decay; seams enforced by tooling survive reorgs, deadlines and new hires.",
            "The seams are also the extraction plan. A module with one public interface, its own schema and no shared-table shortcuts can be lifted into a service in weeks; a tangle cannot. That is the real argument against big-ball-of-mud monoliths — not aesthetics, but optionality. Write down, per module, its tables and its interface, and the monolith stays a launch pad instead of a tar pit.",
          ],
        },
        {
          heading: "Split on named forcing functions",
          paragraphs: [
            "Splitting is justified by named forcing functions, not vibes. The real ones: a team needs to deploy independently of the train (organizational scale), one component has wildly different scaling or technology needs (a video transcoder is not a CRUD app), or compliance demands isolation for a data domain. Each forcing function names the seam to cut first. If nobody can name one, the split is fashion, and fashion refactors are paid for in outages.",
            "Extract one seam at a time with the strangler pattern: route a slice of traffic to the new service behind a facade, keep the monolith authoritative until the new path is proven, then shrink the monolith's surface. Attempting a big-bang decomposition rewrites everything at once, and big-bang rewrites are how monoliths become distributed monoliths — all of the coupling, none of the transactions, twice the deploys.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Monolith vs microservices, honestly",
        caption:
          "The left column ships this quarter; the right column is a decade of ops debt.",
        left: {
          heading: "Modular monolith",
          items: [
            "One deploy, one runtime, one debugger",
            "Module seams enforced by tooling",
            "In-process calls: fast, transactional",
            "Extract a module when evidence demands",
          ],
        },
        right: {
          heading: "Premature microservices",
          items: [
            "A function call became a network call",
            "Five repos for one feature's stack trace",
            "Every deploy needs orchestration and tracing",
            "Split by fashion, paid for in outages",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "A seam is enforced by what a module exports, not by good intentions.",
        code: [
          "// src/modules/billing/public-api.ts — the only door into billing",
          "export type { Invoice, InvoiceStatus } from './types';",
          "export { createInvoice } from './createInvoice';",
          "export { markInvoicePaid } from './markInvoicePaid';",
          "",
          "// src/modules/orders/checkout.ts — orders may only use the door",
          "import { createInvoice } from '../billing/public-api'; // ok",
          "// import { invoiceRepo } from '../billing/internal/repo';",
          "//     ^ lint rule fails the build: internal is not public",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Splitting into microservices before a second team needs to deploy independently.",
          fix: "Start with a modular monolith with tool-enforced seams. Split when a named forcing function appears — deploy independence, scale, compliance.",
        },
        {
          mistake: "Services sharing one database because extraction 'came later'.",
          fix: "One schema owner per service. Cross-service reads go through its API or its events — never reach into someone else's tables.",
        },
        {
          mistake:
            "A distributed monolith: services that must deploy together in lockstep.",
          fix: "If they deploy together, they are one service with extra hops. Merge them and keep the seam in code, where it is cheap to change.",
        },
        {
          mistake:
            "Local development requires a cluster and fifteen services running.",
          fix: "Keep per-service runnable contracts and test doubles. If devs cannot run the system on a laptop, velocity is quietly dying.",
        },
      ],
      fieldChecklist: [
        "I can name the module seams in our codebase and the tooling that enforces them.",
        "Every module owns its tables; no cross-module table reads survive code review.",
        "I can articulate which forcing function would justify extracting each candidate module.",
        "The system runs on a developer laptop without a service mesh.",
        "Each extracted service (if any) owns its schema and deploys independently.",
        "An ADR records why the current service granularity was chosen.",
      ],
      keyTerms: [
        {
          term: "Modular monolith",
          definition:
            "One deployable with enforced internal seams — modules with owned tables and narrow public interfaces, extractable when evidence demands.",
        },
        {
          term: "Forcing function",
          definition:
            "A concrete, nameable pressure — deploy independence, scale asymmetry, compliance — that justifies extracting a service.",
        },
        {
          term: "Strangler pattern",
          definition:
            "Migrating slice by slice behind a facade, keeping the old system authoritative until the new path is proven.",
        },
        {
          term: "Distributed monolith",
          definition:
            "Services that must deploy and change together — all the coupling of a monolith, plus the network.",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you actually split a monolith into microservices?",
          a: "Only on named forcing functions: a team needs to deploy independently of the release train, a component has radically different scaling or technology needs, or compliance requires isolating a data domain. I extract one seam at a time behind a strangler facade, keeping the monolith authoritative until the new path is proven. Without a forcing function, a modular monolith with enforced interfaces delivers most benefits at a fraction of the operational cost.",
        },
        {
          q: "How do you prevent a modular monolith from decaying into a big ball of mud?",
          a: "Enforce seams with tooling, not reviews alone: lint rules or architecture tests that fail the build on illegal imports, one public interface per module, and separate schemas. Decay is gradual — one shortcut at a time — so enforcement has to be automatic. I also keep one paragraph per module naming its tables and responsibilities; that document is what makes later extraction possible.",
        },
        {
          q: "Leadership wants microservices 'for scale'. The team is five engineers. Respond.",
          a: "I ask which scale: requests, data, or engineers. Five engineers hitting request-scale usually means a monolith with replicas and a cache solves it. Splitting costs distributed debugging, deployment orchestration and on-call surface that five people cannot staff. I propose enforcing module seams now so extraction stays cheap, and revisiting when a second team or a genuine scaling wall appears.",
        },
      ],
      quiz: [
        {
          question:
            "The strongest predictor that microservices will pay off is…",
          options: [
            "The codebase is older than five years",
            "Multiple teams need to deploy independently at a meaningful headcount",
            "The team wants to try Kubernetes",
            "The database is getting large",
          ],
          answerIndex: 1,
          explanation:
            "Microservices solve organizational scaling. Independent deployability matters once many teams block each other on one deploy train; below that threshold you pay distributed-systems prices for benefits nobody receives.",
        },
        {
          question:
            "What is the first practical step toward splitting a well-modularized monolith?",
          options: [
            "Split it into ten services in one release",
            "Copy the database and share it between old and new services",
            "Extract one seam at a time behind a strangler facade",
            "Rewrite the whole system in a new language",
          ],
          answerIndex: 2,
          explanation:
            "Strangler extraction migrates slice by slice behind a facade, keeping the monolith authoritative until the new path is proven. Big-bang decompositions fail loudly; stranglers fail small.",
        },
        {
          question:
            "Three services always deploy together in one coordinated release. What does that tell you?",
          options: [
            "You need a better CD pipeline",
            "The services are correctly decoupled",
            "Message queues are missing",
            "They are a distributed monolith — the coupling moved, it did not disappear",
          ],
          answerIndex: 3,
          explanation:
            "Deploy coupling is the tell: the seam you cut was not a real boundary. Merge them back into one deployable and keep the boundary in code, where it is cheap to change.",
        },
      ],
    },
    {
      number: 3,
      title: "API Design",
      summary:
        "The API is the product's real user interface — for the developers, integrations and services that build on it. Design it like it ships to strangers, because it does.",
      keyIdea:
        "Versioned paths, cursor pagination, idempotent mutations, errors as data with request ids. OpenAPI is the source of truth.",
      deepDive: [
        {
          heading: "The user is a developer",
          paragraphs: [
            "An API is a user interface whose users are developers, and they cannot be walked through it on a call. Predictability is the whole product: one error shape everywhere, naming conventions that repeat, pagination that works identically on every list, resources named after the domain and not the database table. The test is brutal and useful: can a developer integrate the third endpoint after reading the docs for the first one? If yes, the design is working; if no, every addition multiplies support load.",
            "Errors deserve first-class design because they are the part every integrator meets. Each failure returns the same envelope: a machine-readable code the client can branch on, a human-readable message, and a request id that joins the caller's ticket to your logs. Status codes carry the coarse split — 4xx says the caller can fix it, 5xx says you must. An error without a request id is a support ticket you chose to make expensive.",
          ],
        },
        {
          heading: "The contract moves without breaking",
          paragraphs: [
            "Shipped APIs change under load from their own success: clients you cannot upgrade depend on shapes you no longer love. The disciplines are additive-first and versioned paths. Additive changes — new fields, new endpoints — ship freely because old clients ignore what they do not know. Semantic changes get a new path (/v2/) with the old one on a published deprecation clock and a Deprecation header announcing it. Renames are additive too: ship the new name, alias the old, remove in a future major.",
            "Pagination looks cosmetic and is not. Offset pagination breaks on active tables: inserts shift every window, so a user paging through results skips or repeats rows, and deep offsets make the database walk and discard thousands of rows. Cursor pagination — 'continue after this stable, indexed key' — is stable under concurrent writes and constant-cost to serve. It is less human-friendly, so return an opaque cursor and document it; the cost is one design afternoon, paid once.",
          ],
        },
        {
          heading: "Mutations survive retries",
          paragraphs: [
            "Every mutation will eventually be retried — the mobile network dropped, the proxy timed out, the user double-clicked. Design for it: mutations carry an idempotency key, the server remembers the first result per key, and retries receive the saved response instead of a second execution. GET is safe by contract, PUT is idempotent by definition, POST earns idempotency through the key. This one habit dissolves the worst class of production bugs: the double charge, the double email, the double row.",
            "OpenAPI (or a typed schema) is the source of truth, not documentation of it. Generate types, mocks and docs from one spec, and drift becomes a build failure instead of a support ticket. Contract tests run the spec against the real service in CI, so 'the docs are stale' stops being a sentence anyone says. The spec is also how you review API design as a team — reviewing diffs of a spec is cheaper than reviewing integration pain later.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Changing a shipped API",
        caption:
          "Four answers to 'can we change this field?' — only three are safe.",
        start: "A change to a shipped endpoint",
        branches: [
          {
            label: "Additive: new field",
            outcome: "Ship it; old clients ignore it",
            good: true,
          },
          {
            label: "Semantics clients depend on",
            outcome: "New versioned path; old path gets a deprecation clock",
            good: true,
          },
          {
            label: "Rename for clarity",
            outcome: "Add the new name, alias the old, remove later",
            good: true,
          },
          {
            label: "Silent shape or type change",
            outcome: "Every integration breaks at once",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Errors are part of the API surface: a code to branch on, a message to read, a request id to grep logs with.",
        code: [
          "// One error shape everywhere; codes are data, not prose.",
          "function apiError(",
          "  status: number,",
          "  code: string,       // machine-readable: rate_limited",
          "  message: string,    // human-readable",
          "  requestId: string,  // joins the caller's ticket to your logs",
          ") {",
          "  return Response.json(",
          "    { error: { code, message, requestId } },",
          "    { status },",
          "  );",
          "}",
          "",
          "apiError(429, 'rate_limited', 'Slow down; retry after 30s.', req.id);",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Offset pagination on lists that receive inserts during a user's scroll.",
          fix: "Cursor pagination on a stable, indexed column. Offsets skip and repeat rows as data moves, and deep pages walk the database.",
        },
        {
          mistake: "Returning 200 OK with the error hiding inside the body.",
          fix: "Status codes are the contract: 4xx caller-fixable, 5xx yours. Then the envelope: code, message, request id — in every error, everywhere.",
        },
        {
          mistake:
            "Changing a response field's type because 'only internal clients use it'.",
          fix: "Internal clients are strangers in six months. Add the new shape, alias the old, deprecate on a published clock.",
        },
        {
          mistake: "Hand-written docs that drift from the real responses.",
          fix: "OpenAPI as source of truth: generate types, docs and contract tests from the spec, so drift fails CI instead of failing customers.",
        },
      ],
      fieldChecklist: [
        "I can draw the error envelope for our API from memory, including the request id.",
        "Every list endpoint paginates by cursor, not offset.",
        "Mutations accept an idempotency key and replay the stored result.",
        "Breaking changes go through versioned paths with a published deprecation window.",
        "The OpenAPI spec generates types and docs; contract tests run it against the real service in CI.",
        "I have integrated one of our own endpoints using only the public docs, cold.",
      ],
      keyTerms: [
        {
          term: "Cursor pagination",
          definition:
            "Paging by a stable, indexed key ('continue after this') instead of a row offset — stable under concurrent writes.",
        },
        {
          term: "Idempotency key",
          definition:
            "A client-minted handle per logical attempt that lets the server store and replay the first response instead of re-executing.",
        },
        {
          term: "Deprecation window",
          definition:
            "A published, dated grace period during which an old API path keeps working before removal.",
        },
        {
          term: "Error envelope",
          definition:
            "One uniform error body — machine-readable code, human message, request id — returned by every failure of the API.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you evolve a public API without breaking consumers?",
          a: "Additive-first: new fields and endpoints ship freely since old clients ignore them. Semantic changes get a versioned path with the old one on a published deprecation clock and a Deprecation header. Renames ship as aliases. Contract tests in CI verify the spec against the real service, so drift fails the build. The one thing you cannot do is silently change a shape clients already parse.",
        },
        {
          q: "Why is cursor pagination preferred over offset for active datasets?",
          a: "Offsets are positions, and positions move: inserts shift every window, so users skip or repeat rows, and deep pages force the database to scan and discard. Cursors name a stable, indexed key — constant cost, stable under concurrent writes. The trade is human: cursors are opaque, so document the contract and return the token without exposing its internals.",
        },
        {
          q: "What makes an API pleasant to integrate, concretely?",
          a: "Predictability across endpoints: one error envelope with a request id, identical pagination everywhere, names that repeat the domain's vocabulary, honest status codes. Errors carry machine-readable codes so clients branch without string-matching messages. And the spec is generated from, not paraphrased after, the implementation — because docs that drift are worse than no docs: they teach wrong usage with confidence.",
        },
      ],
      quiz: [
        {
          question:
            "A client retries a POST that timed out. Without an idempotency key, the likely result is…",
          options: [
            "The server automatically dedupes it",
            "A duplicate execution — second charge, second row",
            "A 409 Conflict from the database",
            "Nothing; HTTP forbids retries",
          ],
          answerIndex: 1,
          explanation:
            "The server cannot tell a retry from a new request without a key. Idempotency keys let the server store and replay the first response, making retries harmless.",
        },
        {
          question:
            "Users see some products twice while paging a busy catalog with offset pagination. Why?",
          options: [
            "The CDN cached old pages",
            "The database index is corrupt",
            "Cursors would show the same behavior",
            "Concurrent inserts shifted the offset windows",
          ],
          answerIndex: 3,
          explanation:
            "Offsets are row positions. When rows are inserted ahead of your position, the next page shifts and repeats neighbors. Cursor pagination anchors on a stable key instead.",
        },
        {
          question:
            "Which change is safe to ship to a live API without versioning?",
          options: [
            "Renaming a response field",
            "Changing a field from string to integer",
            "Adding a new optional response field",
            "Removing an undocumented field",
          ],
          answerIndex: 2,
          explanation:
            "Additive changes are safe because existing clients ignore what they do not know. Renames, type changes and removals alter shapes clients already parse — those need versioning and a deprecation clock.",
        },
      ],
    },
    {
      number: 4,
      title: "REST and GraphQL",
      summary:
        "Two dialects of the same question: how should clients ask a server for shaped data? Each answers it with a different trade.",
      keyIdea:
        "REST's HTTP semantics win for public, cache-heavy APIs. GraphQL wins for composed UIs with batched resolvers and complexity limits.",
      deepDive: [
        {
          heading: "REST is HTTP's native dialect",
          paragraphs: [
            "REST is less a protocol than a discipline: resources at URLs, standard verbs with standard meanings, status codes that carry meaning, and — the underrated part — HTTP's caching model for free. GET is safe and cacheable, so CDNs and browsers can serve it without asking you. That property alone makes REST the default for public APIs: third-party developers already know it, every tool from curl to monitoring speaks it, and cacheability turns traffic into infrastructure wins.",
            "The discipline is where teams slip. Verbs get abused — GETs with side effects, PUTs doing partial updates — and status codes collapse into 200-with-errors. Both break tooling: caches stop being able to cache, clients stop trusting codes, and monitoring stops distinguishing your failures from callers'. The payoff for keeping the discipline is not purity; it is that the entire HTTP ecosystem — proxies, CDNs, browsers, SDKs — works for you instead of around you.",
          ],
        },
        {
          heading: "GraphQL's bargain",
          paragraphs: [
            "GraphQL answers a different pain: screens composed of many entities. A dashboard wants the user, their three latest orders and each order's status — four REST round trips of overfetched JSON, or four bespoke endpoints. GraphQL sends one query describing exactly the shape needed, and the server composes it through resolvers. Mobile clients on slow networks love it; so do frontend teams who stop waiting for backend endpoints. The schema is the contract — introspectable, typed, one endpoint to secure.",
            "The bill arrives as server complexity. Naively written resolvers fire one query per field, and a list of a hundred items becomes a hundred and one database queries — the N+1 problem, relocated to your server. Batching (DataLoader-style) coalesces them, but someone must build and maintain that discipline. Caching is harder too: POST bodies do not fit HTTP cache keys, so entity-level caching must be designed by hand. GraphQL trades REST's simplicity at the edge for composability at the core.",
          ],
        },
        {
          heading: "Choose by workload, then guard",
          paragraphs: [
            "The choice is by workload, not ideology. Public, cache-heavy, third-party-facing APIs stay REST — the ecosystem and CDN economics are decisive. Product UIs with many composed entities, especially on mobile, justify GraphQL behind your own auth. Plenty of systems run both: REST for public and partner surfaces, GraphQL as the internal composition layer for first-party screens. The expensive failure is adopting GraphQL because it is modern, then rebuilding REST-shaped endpoints inside it one field at a time.",
            "A GraphQL deployment needs the guards REST inherits from the protocol: depth and complexity limits so no client asks for the whole graph, pagination required on every list field, rate limiting priced per query complexity, and persisted queries for first-party apps so production only executes known queries. Turn those on at launch, not after the first catastrophic query — by then it is an incident review slide.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "REST or GraphQL?",
        caption:
          "Choose by workload: caching and strangers versus composed screens and one contract.",
        left: {
          heading: "REST wins when…",
          items: [
            "Public API for third-party developers",
            "CDN and HTTP caching carry real load",
            "Resources map cleanly to URLs",
            "Standard tooling must just work",
          ],
        },
        right: {
          heading: "GraphQL wins when…",
          items: [
            "Screens compose many entities in one view",
            "Mobile bandwidth punishes overfetching",
            "Frontend needs shapes backend cannot predict",
            "One typed schema is the single contract",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Naive resolvers issuing one database query per field.",
          fix: "Batch with DataLoader-style coalescing and count resolver queries per request in dev. N+1 moved server-side; it did not disappear.",
        },
        {
          mistake: "Shipping GraphQL with no depth or complexity limits.",
          fix: "Enforce depth and complexity limits, require pagination on lists, and persist queries for first-party apps — at launch, not after the incident.",
        },
        {
          mistake: "GET endpoints that mutate state, breaking caches and retries.",
          fix: "GET stays safe and cacheable; mutations ride POST, PUT, PATCH or DELETE. Side effects in GET poison every layer that trusts the verb.",
        },
        {
          mistake: "Caching a GraphQL endpoint like a REST one.",
          fix: "POST bodies do not fit HTTP cache keys. Cache at entity level behind resolvers; only persisted queries should hit CDN GETs.",
        },
      ],
      fieldChecklist: [
        "I can state, for this API, why REST or GraphQL fits its actual workload.",
        "Every GraphQL deployment I own has depth and complexity limits enforced at launch.",
        "Resolver query counts are instrumented; N+1 shows up in dev, not in a pager.",
        "GET endpoints are safe and cacheable; no side effects hide in them.",
        "Lists paginate — in REST by cursor, in GraphQL with required pagination arguments.",
        "First-party clients use persisted queries or versioned paths, not ad-hoc query strings.",
      ],
      keyTerms: [
        {
          term: "Overfetching",
          definition:
            "Returning more data than the client renders — the tax REST pays that GraphQL's shaped queries eliminate.",
        },
        {
          term: "Resolver",
          definition:
            "The per-field function GraphQL calls to produce one value; its database behavior decides the system's performance.",
        },
        {
          term: "N+1 problem",
          definition:
            "One query for the list plus one per item; in GraphQL it fires per field unless resolvers batch.",
        },
        {
          term: "Persisted query",
          definition:
            "A pre-registered GraphQL query the client invokes by id, so production executes only known, reviewed shapes.",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you choose GraphQL over REST for a new API?",
          a: "When screens compose many entities and client shape needs vary faster than backend endpoints can track — typically first-party product UIs, especially mobile. One query replaces several round trips and kills overfetching. I would not choose it for a public, cache-heavy API: HTTP semantics and CDN economics favor REST. Hybrid is common and honest — REST outward, GraphQL as the composition layer inward.",
        },
        {
          q: "A GraphQL endpoint is slow under load. Where do you look first?",
          a: "Resolver query counts — the N+1 pattern dominates: one resolver firing per item in a list. Instrument queries per request, then batch with DataLoader-style coalescing. Next, unbounded queries: enforce depth and complexity limits, because one client asking for the entire graph can starve everyone. Finally, caching: entity-level caching behind resolvers, since POST-based endpoints get nothing from HTTP caches for free.",
        },
        {
          q: "Is REST obsolete?",
          a: "No — it is the default dialect of the web and still the right answer for public APIs, integrations, and anything a CDN should accelerate. GraphQL solves a specific pain: composed, client-shaped reads behind your own auth. Teams that pick per workload get simple systems; teams that pick per fashion get GraphQL-shaped REST or REST-shaped GraphQL, both of which combine the weaknesses of each.",
        },
      ],
      quiz: [
        {
          question:
            "A mobile team complains that REST endpoints return bloated JSON. The cheapest correct fix is…",
          options: [
            "Add gzip",
            "Create screen-shaped endpoints or adopt GraphQL",
            "Increase the server's bandwidth",
            "Disable response compression",
          ],
          answerIndex: 1,
          explanation:
            "Overfetching is a shape problem, not a compression problem. Screen-shaped endpoints or GraphQL let clients ask for exactly the fields they render — the actual fix.",
        },
        {
          question: "What does a naive GraphQL resolver do to the database?",
          options: [
            "Nothing — a GraphQL query is one query",
            "Full table scans only",
            "Deadlocks from concurrent resolvers",
            "One query per resolved field, producing N+1 on lists",
          ],
          answerIndex: 3,
          explanation:
            "Each field's resolver runs independently, so a list of 100 items with several fields can fire hundreds of queries. Batching via DataLoader coalesces them per request.",
        },
        {
          question:
            "Which REST property lets a CDN serve responses without touching your servers?",
          options: [
            "GET being safe and cacheable",
            "Statelessness of POST",
            "Uniform resource naming",
            "Versioned URL paths",
          ],
          answerIndex: 0,
          explanation:
            "Because GET promises no side effects, any layer between client and server may cache and replay it. That is the infrastructure win GraphQL gives up by default.",
        },
      ],
    },
    {
      number: 5,
      title: "Caching Strategy",
      summary:
        "A cache trades freshness for speed — and every cache is a correctness bet you place on purpose. The strategy is choosing which bets, and knowing how each one loses.",
      keyIdea:
        "User-scoped data never enters shared caches without user-scoped keys. Money decisions read truth, not copies.",
      deepDive: [
        {
          heading: "Every cache is a correctness bet",
          paragraphs: [
            "A cache is a deliberate decision to sometimes serve old data in exchange for speed. That framing keeps designs honest: every cached answer is a bet that staleness will not matter, and bets need named stakes. The canonical pattern is cache-aside: check the cache, on miss read the source of truth and repopulate, on hit serve. Read-through, write-through and write-behind variants move the responsibility into the cache layer itself, each shifting where the staleness and failure modes appear.",
            "Invalidation is the hard part, and hand-waving it is the classic sin. The old joke — 'there are only two hard things in computer science: naming and cache invalidation' — is funny because it is true. The discipline is to name, per key, the event that retires it: a write hook, a domain event, a version bump on the key prefix. TTLs are a backstop for forgotten events, not the strategy. If you cannot name how a key becomes wrong, you do not understand your own cache.",
          ],
        },
        {
          heading: "Keys are the design",
          paragraphs: [
            "The key namespace is where caching designs succeed or leak. User-scoped data — profiles, balances, drafts — belongs under user-scoped keys: user:42:profile, never a shared global entry. A shared key for private data is a data breach with a one-line cause. Version prefixes (v2:product:17) make shape changes trivial: deploy the new prefix, let old entries expire, never mourn a mixed-shape cache. Namespacing by tenant and scope also makes the blast radius of any flush calculable before it happens.",
            "TTLs are policy, and they encode the staleness budget per data class. A product description can ride an hour-long TTL; a session token rides minutes; an account balance rides zero — money reads truth, the book-wide rule. Set TTLs by asking who notices staleness and what it costs, then write the answers down. Jitter TTLs by a few percent so identical keys do not expire in the same instant and stampede the database together.",
          ],
        },
        {
          heading: "Know how your cache fails",
          paragraphs: [
            "The signature failure is the thundering herd: a hot key expires, a thousand requests miss simultaneously, all hit the database at once, and the cache you added becomes the outage amplifier. Guards are cheap: singleflight (one rebuild, many waiters), jittered TTLs, probabilistic early refresh, and prewarming keys before traffic. A related sin is caching errors or empty results with long TTLs, turning a five-minute database blip into an hour of cached failures — never cache a 5xx, and give negatives short lives.",
            "Then there is the question every team skips: should this be cached at all? Caching shines on read-heavy, slowly-changing, computed-expensive data. It performs badly on per-user hot paths with strict freshness, where invalidation cost exceeds read cost — and it actively harms write-heavy data. Run the fork before every caching conversation: measure the actual read pattern first. A missing index is discovered in five minutes and beats a cache in every dimension.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Where copies of the answer live",
        caption:
          "Fastest first; the bottom layer is the only one that is always right.",
        layers: [
          { label: "Browser cache", note: "per-user, private scope" },
          { label: "CDN edge", note: "public responses, seconds of TTL" },
          { label: "App memory (LRU)", note: "per instance, microseconds" },
          { label: "Redis", note: "shared, milliseconds, evictable" },
          { label: "Postgres", note: "source of truth, always wins" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Cache-aside with a stampede guard and jittered TTL — the boring, correct pattern.",
        code: [
          "const TTL_SECONDS = 60;",
          "",
          "export async function getProduct(id: string) {",
          "  const key = `v3:product:${id}`;       // versioned + scoped",
          "  const hit = await redis.get(key);",
          "  if (hit) return JSON.parse(hit);",
          "",
          "  // Stampede guard: one rebuild, many waiters.",
          "  return singleflight(key, async () => {",
          "    const product = await db.products.find(id);",
          "    if (!product) return null;          // never cache negatives long",
          "    await redis.set(key, JSON.stringify(product),",
          "      { ex: TTL_SECONDS + jitter(5) }); // jitter: no sync expiry",
          "    return product;",
          "  });",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Caching user-private data under a global, shared key.",
          fix: "Scope every key by user or tenant: user:42:profile. One shared key for private data is a breach with a one-line cause.",
        },
        {
          mistake: "Invalidation strategy is 'the TTL will handle it'.",
          fix: "Name the retirement event per key — write hook, domain event, version bump. TTLs backstop the events you missed; they are not the plan.",
        },
        {
          mistake: "Caching failed responses and empty results for long TTLs.",
          fix: "Never cache 5xx bodies; give negative results seconds, not minutes. A cached error outlives the outage that caused it.",
        },
        {
          mistake: "Adding a cache before profiling the slow read.",
          fix: "Run and EXPLAIN the query first. A missing index or an N+1 is a five-minute fix that also keeps correctness intact.",
        },
      ],
      fieldChecklist: [
        "Every cache key encodes its scope — user, tenant, version — and I can name the scheme.",
        "For each cached fact I can name the invalidating event and the staleness budget in seconds.",
        "Money and entitlement reads bypass shared caches and hit the source of truth.",
        "TTLs carry jitter; hot keys have singleflight or locks guarding rebuilds.",
        "Caches are warmed — or their cold start tolerated — after deploys and flushes.",
        "I know the cache hit rate and the p95 latency with the cache removed, from measurements.",
      ],
      keyTerms: [
        {
          term: "Cache-aside",
          definition:
            "The application checks the cache, reads the source of truth on miss, and repopulates — the database stays authoritative.",
        },
        {
          term: "TTL",
          definition:
            "Time to live: how long a cached answer may be reused — the backstop behind your invalidation events.",
        },
        {
          term: "Thundering herd",
          definition:
            "Many requests missing the same expired key simultaneously and stampeding the source of truth together.",
        },
        {
          term: "Stale-while-revalidate",
          definition:
            "Serving the cached answer immediately while refreshing it in the background — freshness without added latency.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you decide what to cache and what to leave alone?",
          a: "Measure the read path first: most 'we need a cache' conclusions are a missing index or an N+1. Cache what is read-heavy, slowly changing and expensive to compute, with a written staleness budget per key and a named invalidation event. Leave money, entitlements and read-your-own-writes paths reading truth. Every cache is a correctness bet — I only place bets whose stakes I can price.",
        },
        {
          q: "Your cache was supposed to protect the database, and the database fell over anyway. What happened?",
          a: "Almost always a thundering herd: a hot key expired under load, every request missed at once, and the rebuild stampede hit the database. Guards: singleflight so one rebuild serves many waiters, jittered TTLs so identical keys do not expire together, probabilistic early refresh, and prewarming before deploys. I also check for cached negatives — errors parked with long TTLs, turning a blip into an hour.",
        },
        {
          q: "How do you keep user A from ever seeing user B's cached data?",
          a: "Scope is encoded in the key: the user or tenant id lives in every key touching private data, and shared keys are reserved for genuinely public responses. Then verify at the boundary — authorization checks run on cache hits too, since a cache hit is not an authorization decision. The one-line audit: list every key prefix and name the scope it serves; an unnamed scope is a leak waiting for traffic.",
        },
      ],
      quiz: [
        {
          question:
            "The safest general pattern for caching database reads in an application is…",
          options: [
            "Write-behind with no TTLs",
            "Cache everything forever",
            "Cache-aside with named invalidation and a TTL backstop",
            "No cache, ever",
          ],
          answerIndex: 2,
          explanation:
            "Cache-aside keeps the database authoritative: misses read truth and repopulate, invalidation events retire keys, TTLs backstop what you missed. The other options either lose writes or hand-wave correctness.",
        },
        {
          question:
            "A hot key expires at noon and the database melts. The direct countermeasure is…",
          options: [
            "Raise the TTL to 24 hours",
            "Add more database replicas",
            "Disable the cache",
            "Singleflight rebuild plus jittered TTLs",
          ],
          answerIndex: 3,
          explanation:
            "The herd is many waiters racing one rebuild. Singleflight collapses them into one rebuild, and jitter stops keys expiring simultaneously. Replicas add capacity but not coordination.",
        },
        {
          question: "Which data may enter a shared cache under a global key?",
          options: [
            "A published product description",
            "A user's account balance",
            "A user's saved drafts",
            "A user's session",
          ],
          answerIndex: 0,
          explanation:
            "Published, non-user-scoped content is safe to share. Balances, drafts and sessions are user-scoped: their keys must carry the user's scope or they become someone else's data.",
        },
      ],
    },
    {
      number: 6,
      title: "CAP Theorem",
      summary:
        "When the network splits, a distributed system must choose: refuse to serve, or risk answering with old truth. CAP is that forced choice, stated as a theorem.",
      keyIdea:
        "CAP is per-operation, not per-system. Money ledger writes are CP; product page views are AP.",
      deepDive: [
        {
          heading: "A theorem with a narrow waist",
          paragraphs: [
            "CAP makes one claim: during a network partition, a distributed system serving a given operation must choose between consistency (every read sees the latest write) and availability (every request receives a response). The partition clause is load-bearing — when the network is healthy you can have both, and life is good. Partitions are not exotic: switches reboot, cables get cut, zones wobble, so the theorem describes your system on a random Tuesday, not a rare disaster.",
            "Two misreadings cause most damage. First, labeling whole systems CP or AP — the choice is per operation, and one system runs both all the time: a Postgres primary for ledger writes (CP-flavored) and a Redis cache of the product page (AP-flavored). Second, forgetting that partition tolerance is not optional; you do not get to choose it. The real everyday trade is latency: strong consistency costs extra round trips on every operation. PACELC says it plainly — else, latency.",
          ],
        },
        {
          heading: "Per operation, not per system",
          paragraphs: [
            "Design happens when you walk the operation list and assign rungs. Ledger writes, balances, entitlements: fail closed when unsure — refuse or queue rather than guess. Product pages, recommendations, social feeds: serve possibly-stale answers; wrong-by-a-few-seconds beats down. Config and feature flags: small, strongly consistent, worth the latency because everything else reads them. The output is a one-page table — operation, rung, behavior during a split — and that page is the distributed design.",
            "The mechanism under the rungs is quorum thinking: with replicas, writes acknowledged by a majority and reads served by a majority cannot silently disagree; relax either side and staleness becomes possible in exchange for speed and availability. Managed systems expose the same dial — synchronous replication levels, read-your-own-writes routing, consistency modes in DynamoDB or Cosmos DB. You are not choosing a label; you are tuning how many replicas must agree before an answer is allowed.",
          ],
        },
        {
          heading: "Design for the split you will have",
          paragraphs: [
            "Every endpoint needs a rehearsed answer to 'the network is split — now what?' Fail closed: refuse the write and tell the user, correct for money. Fail open: serve the cached answer with its staleness flagged, correct for content. Buffer: accept the write locally and replay on heal — powerful and dangerous, since replay needs idempotency and conflict rules (Chapter 11). The unforgivable answer is silence: nobody decided, so the failure decides, at the worst hour.",
            "Then rehearse it: partition drills are chaos engineering's oldest trick. Pull the network between app and database in staging and watch what each endpoint does — error shapes, staleness windows, retry storms, whether queues grow unbounded. What you learn in an hour of staging is what incident reviews extract painfully from production. The deliverable is not the drill; it is the updated table from the previous section, with observed behavior replacing intentions.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Which rung for this operation?",
        caption:
          "Locate the operation by what mistakes cost; the quadrant names your machinery.",
        axes: {
          x: "Cost of rejecting writes",
          y: "Cost of stale answers",
        },
        quadrants: [
          {
            label: "CP territory",
            note: "stale is costly, refusal cheap: consensus, quorums, refuse when unsure",
          },
          {
            label: "The hard middle",
            note: "both costly: single writer, durable queue, or compensations",
          },
          {
            label: "Cache freely",
            note: "staleness cheap, refusal cheap: serve copies without ceremony",
          },
          {
            label: "AP territory",
            note: "staleness cheap, refusal costly: accept writes, reconcile on heal",
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Declaring the entire system CP or AP in the architecture doc.",
          fix: "The choice is per operation. Walk the endpoint list and assign rungs — ledger writes fail closed, feeds serve stale — and write the table down.",
        },
        {
          mistake:
            "Choosing strong consistency only for partitions, ignoring everyday latency.",
          fix: "PACELC: with no partition, strong consistency still costs round trips on every write. Count them; the real price is usually latency.",
        },
        {
          mistake: "Serving a cached balance or entitlement because it was fast.",
          fix: "Money decisions read truth. Staleness budgets are written per field; anything a user can lose money on reads the authoritative store.",
        },
        {
          mistake:
            "No rehearsed answer for what each endpoint does during a network split.",
          fix: "Decide fail-closed, fail-open or buffer per endpoint, then run a partition drill in staging and update the table with observed behavior.",
        },
      ],
      fieldChecklist: [
        "I can state CAP in one sentence and say which clause people usually misremember.",
        "Our system has a per-operation consistency table — operation, rung, behavior during a split.",
        "Money and entitlement paths fail closed when the source of truth is unreachable.",
        "I know which reads tolerate staleness and their maximum acceptable age in seconds.",
        "A partition drill has been run in staging within the last quarter.",
        "Every buffered write has an idempotency and conflict-resolution story before it queues.",
      ],
      keyTerms: [
        {
          term: "CAP theorem",
          definition:
            "During a network partition, a single operation must choose between consistency and availability — per operation, not per system.",
        },
        {
          term: "Quorum",
          definition:
            "The majority of replicas that must agree on a write or a read before an answer ships; the machinery behind tunable consistency.",
        },
        {
          term: "PACELC",
          definition:
            "The extension of CAP: if partitioned choose C or A, else choose between consistency and latency.",
        },
        {
          term: "Fail-closed",
          definition:
            "Refusing service when correctness cannot be assured — the right failure for money and permissions.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain CAP and how you apply it in real design.",
          a: "During a partition, one operation must choose consistency or availability — the theorem applies per operation, not per system. I walk the endpoint list and assign rungs: ledger writes and entitlements fail closed; product pages and feeds serve stale answers with a staleness budget; flags stay strongly consistent because everything reads them. With the network healthy the real trade is latency — PACELC — so I count round trips, not labels.",
        },
        {
          q: "Your database offers tunable consistency. What decides the setting per use case?",
          a: "The cost of being wrong, per operation. Balances and limits need quorum or synchronous replication — a majority must agree before an answer ships. Social counts and recommendations tolerate seconds of staleness and ride cheaper settings. Read-your-own-writes gets routing to the primary or a consistency token. The mistake is one global setting; the discipline is a table of operations with their rungs and the reason each is safe.",
        },
        {
          q: "Production errors come from one region while another is fine. First hypothesis?",
          a: "A partition or regional degradation, not a code bug. I check whether the failing region is refusing writes (fail-closed behavior) or serving stale data, and whether our consistency table predicted this. Immediate levers: confirm drill behavior, drain traffic to healthy regions, protect queue lengths. After healing, reconcile buffered writes idempotently — and update the runbook with what actually happened.",
        },
      ],
      quiz: [
        {
          question: "CAP's real-world lesson for a healthy network is…",
          options: [
            "You must always choose between consistency and availability",
            "Partitions never happen in cloud environments",
            "The everyday trade is latency: strong consistency costs round trips",
            "Consistency only matters for reads",
          ],
          answerIndex: 2,
          explanation:
            "With no partition, both C and A are achievable; the constant cost is extra coordination round trips. PACELC names it: else, latency. Partitions are real but not permanent.",
        },
        {
          question:
            "A payments write cannot reach the authoritative ledger quorum. What should it do?",
          options: [
            "Write to a local cache and move on",
            "Fail closed — refuse or queue for guaranteed replay",
            "Serve the page anyway with a warning",
            "Retry forever in the request path",
          ],
          answerIndex: 1,
          explanation:
            "Money fails closed: refuse or durably queue with an idempotency guarantee, never guess. Unbounded retries in the request path cascade; cached balances are wrong answers with high stakes.",
        },
        {
          question: "Why is 'our system is AP' an incomplete design statement?",
          options: [
            "AP systems cannot be built",
            "AP only applies to caches",
            "It ignores the database vendor",
            "Consistency is per operation — the same system runs CP and AP paths",
          ],
          answerIndex: 3,
          explanation:
            "One system serves many operations with different stakes. The design unit is the operation: a ledger write and a product-page view can and should sit on different rungs.",
        },
      ],
    },
    {
      number: 7,
      title: "Consistency",
      summary:
        "Between 'always perfectly consistent' and 'eventually, whatever' lives a ladder of guarantees. Choosing the right rung is most of distributed design.",
      keyIdea:
        "Every entity has a written consistency contract. Optimistic concurrency (version columns) for concurrent writes.",
      deepDive: [
        {
          heading: "A ladder, not a switch",
          paragraphs: [
            "Consistency is a ladder, and naming the rungs is most of distributed design. Strong (linearizable) reads see the latest committed write — the most expensive rung. Bounded staleness accepts answers no older than N. Read-your-own-writes guarantees a user sees their own edit — the rung users actually notice when it breaks. Monotonic reads stop time from running backwards within a session. Eventual accepts convergence later. Most product needs live in the middle rungs; almost nothing needs maximum everywhere.",
            "The rung users feel is read-your-own-writes, and replica lag is what breaks it. You edit your profile, the next page loads from a replica still seconds behind, and your edit appears to vanish — a support ticket generator. The fixes are routing: send the user's own reads to the primary for a short window after their write, or stamp a consistency token into the session and let replicas check it. Both are cheap; neither happens by accident.",
          ],
        },
        {
          heading: "Write the contract per entity",
          paragraphs: [
            "Ambiguity is the enemy, so each entity gets a written consistency contract: who may read stale copies, how stale, and what wins on conflict. A profile bio rides eventual consistency with a minutes-long staleness budget — nobody loses money. A wallet balance rides strong consistency with optimistic concurrency, because two concurrent writes to one balance are an audit finding. The contract turns 'eventually consistent' from a shrug into a spec with numbers and an owner.",
            "The contract also decides where conflicts land. Entities written by one writer at a time rarely conflict; entities written concurrently — shared documents, counters, inventory — need an explicit rule: last-writer-wins with timestamps, optimistic version checks that reject and retry, or serializable isolation for the few flows where interleaving is unacceptable. Writing the rule down before the first conflict is the difference between designed behavior and a Wednesday incident.",
          ],
        },
        {
          heading: "Optimistic concurrency is the workhorse",
          paragraphs: [
            "For concurrent writes, the workhorse is the version column: read the row with its version, write with WHERE version equals what you read, and a zero-row result means someone moved first — re-read, merge, retry. It is compare-and-swap in SQL, holds no locks across user think-time, and scales because conflicts are rare and cheap to detect. Lost updates — two writers overwriting each other silently — are the bug this kills; at default isolation levels the database will not kill it for you.",
            "Pessimistic locking (SELECT FOR UPDATE) has its place: short, contended critical sections where retry storms would thrash — a counter, a job claim. Serializable isolation is the top rung: the database proves your transactions ran as if sequential, and it is worth it for the handful of flows — ledger posting, stock movement — where every interleaving must be correct. The discipline is choosing deliberately: default to optimistic, escalate to locks or serializable only where the contract says so.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The consistency ladder",
        caption:
          "Every rung down buys speed; climb only where the contract demands it.",
        tiers: [
          { label: "Serializable", note: "as if sequential; ledger postings" },
          {
            label: "Repeatable read",
            note: "stable snapshot inside a transaction",
          },
          { label: "Read committed", note: "default; no dirty reads" },
          {
            label: "Read-your-own-writes",
            note: "route user reads to primary",
          },
          { label: "Eventual", note: "caches, search, recommendations" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Compare-and-swap on a version column: conflicts are detected, not lost.",
        code: [
          "-- Optimistic concurrency: the version column is the referee.",
          "UPDATE documents",
          "SET body       = $2,",
          "    version    = version + 1,",
          "    updated_at = now()",
          "WHERE id = $1",
          "  AND version = $3;   -- the version the caller read",
          "",
          "-- 0 rows updated means someone wrote first:",
          "-- re-read, merge, retry — do not blind-overwrite.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Reading your own writes from a lagging replica.",
          fix: "Route the user's reads to the primary for a window after their write, or carry a consistency token the replica must satisfy.",
        },
        {
          mistake: "Assuming default isolation prevents lost updates.",
          fix: "At read committed, two writers can both pass a check-then-write. Guard concurrent writes with version columns or SELECT FOR UPDATE.",
        },
        {
          mistake:
            "Using 'eventually consistent' without a staleness budget per entity.",
          fix: "Write the contract: who may see stale data, how old, what wins on conflict. A shrug is not a spec.",
        },
        {
          mistake: "Blind retry of a failed optimistic write.",
          fix: "Re-read, re-apply the intent, then retry with the new version. Blind retries overwrite someone else's committed change.",
        },
      ],
      fieldChecklist: [
        "Every entity has a written consistency contract: rung, staleness budget, conflict rule.",
        "Read-your-own-writes is implemented — routing or tokens — and I can describe the mechanism.",
        "Concurrent-write paths use version columns or explicit locks; no naked check-then-write remains.",
        "I know which flows run serializable and why each earns that cost.",
        "Replica lag is monitored, and alerting fires before users notice stale reads.",
        "Conflict retries re-read and merge; no blind overwrite retries exist in the codebase.",
      ],
      keyTerms: [
        {
          term: "Linearizability",
          definition:
            "The strongest read guarantee: every read sees the latest committed write, as if operations ran one at a time.",
        },
        {
          term: "Read-your-own-writes",
          definition:
            "The guarantee that a user sees the effects of their own writes — the rung broken by replica lag.",
        },
        {
          term: "Optimistic concurrency",
          definition:
            "Detecting conflicts with a version column and compare-and-swap instead of holding locks; conflicts retry after merging.",
        },
        {
          term: "Lost update",
          definition:
            "Two writers passing the same check and one overwriting the other silently — the default-isolation bug CAS prevents.",
        },
      ],
      interviewQuestions: [
        {
          q: "A user saves their profile and the change sometimes disappears. Diagnose.",
          a: "Classic read-your-own-writes violation: the write hit the primary, the next read hit a lagging replica. Fix by routing the user's own reads to the primary for a window after their write, or carrying a consistency token the replica checks. If the disappearance is real — two writers overwriting each other — the fix is optimistic concurrency: a version column and compare-and-swap so conflicts are detected, not silently lost.",
        },
        {
          q: "How do you pick isolation levels without overpaying?",
          a: "Default to the database's read committed plus version columns for concurrent-write paths — conflicts are rare and cheap to detect. Escalate to SELECT FOR UPDATE only for short, contended critical sections like counters and job claims. Reserve serializable for the few flows where every interleaving must be provably correct, such as ledger postings. Each escalation is justified in the entity's written consistency contract, not chosen per query by feel.",
        },
        {
          q: "Consistency versus isolation — why does the distinction matter operationally?",
          a: "Consistency is what readers across the system see — the replica-lag ladder. Isolation is what concurrent transactions inside one database perceive — the SQL levels. Operationally they fail differently: consistency failures show as stale reads across services; isolation failures show as lost updates and phantoms inside one store. Reviews that conflate them end up tuning replicas to fix a locking bug, which fixes nothing.",
        },
      ],
      quiz: [
        {
          question:
            "Users report their own edits vanishing intermittently. Which guarantee is broken?",
          options: [
            "Eventual consistency of search indexes",
            "Read-your-own-writes",
            "Serializable isolation",
            "Monotonic writes",
          ],
          answerIndex: 1,
          explanation:
            "Seeing your own write is the guarantee users notice. The write landed on the primary while the read hit a lagging replica — fix with primary routing or consistency tokens.",
        },
        {
          question:
            "Two requests concurrently update the same row via check-then-write at read committed. What happens?",
          options: [
            "The database serializes them automatically",
            "The second request gets a deadlock",
            "Both writes are rejected",
            "Both pass the check; the second overwrites the first — a lost update",
          ],
          answerIndex: 3,
          explanation:
            "Default isolation does not stop two writers from passing the same check-then-write. Guard concurrent paths with version columns or SELECT FOR UPDATE, which turn the race into a detected, retryable conflict.",
        },
        {
          question: "Which entity most justifies serializable isolation?",
          options: [
            "A ledger posting that must never interleave",
            "A product description",
            "A cached recommendation list",
            "A user's avatar URL",
          ],
          answerIndex: 0,
          explanation:
            "Serializable proves transactions ran as if sequential — expensive, and worth it only where every interleaving must be correct: money movement, stock decrements. Content fields ride much cheaper rungs.",
        },
      ],
    },
    {
      number: 8,
      title: "Event Driven Design",
      summary:
        "Request/response asks and waits. Events announce and move on — and the decoupling they buy reshapes how your system fails and heals.",
      keyIdea:
        "The transactional outbox: write state and the event in one local transaction. Consumers must be idempotent.",
      deepDive: [
        {
          heading: "Announce and move on",
          paragraphs: [
            "Request/response couples fates: the caller waits, so the callee's latency and uptime become the caller's problem. Events invert control — a producer publishes a fact ('order 42 was paid') and moves on; whoever cares consumes it whenever they are healthy. Temporal decoupling is the prize: the producer does not know consumers exist, new consumers subscribe without touching producers, slow consumers lag instead of blocking checkouts, and a crashed consumer's work waits in the broker instead of vanishing.",
            "The inversion reshapes failure. In request/response, the user sees the error and retries. In event-driven systems, failures surface as lag, poison messages and stale projections — quieter, recoverable, but invisible without instrumentation. The design rule that follows: events are facts in the past tense, named after what happened, addressed to topics, not recipients. 'SendConfirmationEmail' is a command that couples; 'order.paid' is a fact that frees every future consumer, known and unborn.",
          ],
        },
        {
          heading: "The transactional outbox",
          paragraphs: [
            "The naive pattern — save to the database, then publish to the broker — is the dual write, and it fails under every crash you will actually have: the process dies between the two steps, the commit lands but the publish does not, or the publish lands but the commit rolls back. The database and the broker diverge silently, and no retry ladder fixes it because neither side knows the truth. This is one of the most common event-driven outages, and it is entirely avoidable.",
            "The transactional outbox fixes it with one insight: your database transaction is the only atomicity you have, so use it. In the same transaction, write the state change and an event row into an outbox table. A separate relay — a poller or change-data-capture like Debezium — reads committed outbox rows and publishes them, marking each done. State and event are born together or not at all; the few hundred milliseconds of relay lag is the entire cost.",
          ],
        },
        {
          heading: "Consumers carry the burden",
          paragraphs: [
            "Publishing once is not guaranteed, so consumers design for repeats: dedupe on event id or a natural key, guard effects with unique constraints (Chapter 11), and make reprocessing a normal operation, not an emergency. Ordering is likewise conditional — within a Kafka partition yes, globally no — so sequence-sensitive logic keys by entity id or tolerates reordering. Poison messages (malformed, undecodable, semantically impossible) need a bounded-retry path into a dead-letter queue with an alert, because silent death is worse than loud failure.",
            "Finally, events evolve. Payloads get additive fields, never renamed or repurposed; new semantics get new event types; the envelope carries a version and a schema that consumers validate. Old consumers read new events without breaking — that is the compatibility contract that lets producers ship. Teams that skip this build event spaghetti, where changing one producer requires a meeting with every consumer, and the decoupling exists only in the diagram.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The event loop, end to end",
        caption:
          "State and event are born in one transaction; everything after is retryable by design.",
        steps: [
          { label: "Act", note: "state + outbox, one transaction" },
          { label: "Relay", note: "committed outbox rows publish" },
          { label: "Deliver", note: "broker acks, at-least-once" },
          { label: "Consume", note: "idempotent, dedupe on event id" },
          { label: "Project", note: "caches, search, side effects" },
          { label: "Commit offset", note: "last, after the effect" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "State and event commit together — the outbox kills the dual-write failure.",
        code: [
          "await db.transaction(async (tx) => {",
          "  const order = await tx.orders.update({",
          "    where: { id: orderId }, data: { status: 'paid' },",
          "  });",
          "  // State and event commit atomically — no dual write.",
          "  await tx.outbox.create({ data: {",
          "    topic: 'orders.order-paid',",
          "    key: order.id,                    // partition key",
          "    payload: JSON.stringify({",
          "      eventId: crypto.randomUUID(),",
          "      type: 'order.paid',",
          "      orderId: order.id,",
          "    }),",
          "  }});",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Dual writes: committing to the database, then publishing to the broker.",
          fix: "Transactional outbox: write state and event row in one local transaction; a relay or CDC publishes after commit. Neither step orphans the other.",
        },
        {
          mistake: "Consumers assuming each event arrives exactly once.",
          fix: "Design for at-least-once: dedupe on event id or natural key, and back effects with unique constraints. Reprocessing is routine, not crisis.",
        },
        {
          mistake: "Event payloads that rename or repurpose fields over time.",
          fix: "Additive evolution only; new semantics get new event types; the envelope carries a version. Old consumers must read new events without breaking.",
        },
        {
          mistake: "Poison messages retried forever, silently blocking the queue.",
          fix: "Bounded retries with backoff, then a dead-letter queue with an alert and a runbook. A stuck head-of-line is an outage wearing patience.",
        },
      ],
      fieldChecklist: [
        "Every event-producing flow writes state and outbox row in one transaction; no dual writes survive.",
        "Every consumer dedupes on event id or natural key, and I have tested redelivery.",
        "Sequence-sensitive logic keys by entity id or tolerates reordering; no global-order assumptions.",
        "A dead-letter queue exists per consumer, with an alert and a triage runbook.",
        "Event schemas are versioned and additive; consumers validate envelopes on ingest.",
        "Reprocessing a day of events is rehearsed and safe, not improvised.",
      ],
      keyTerms: [
        {
          term: "Transactional outbox",
          definition:
            "Writing the event row in the same local transaction as the state change, so a relay publishes only what actually committed.",
        },
        {
          term: "Dual write",
          definition:
            "Committing to a database and a broker as two separate steps — the unfixable divergence bug the outbox exists to prevent.",
        },
        {
          term: "Change data capture",
          definition:
            "Streaming committed database changes as events (Debezium-style) — often the relay behind an outbox.",
        },
        {
          term: "Event envelope",
          definition:
            "The standard wrapper around every event — id, type, version, timestamp, payload — that consumers validate and dedupe on.",
        },
      ],
      interviewQuestions: [
        {
          q: "What is the dual-write problem and how do you solve it?",
          a: "Writing the database and publishing to the broker as two independent steps: a crash between them leaves them disagreeing, and no retry ladder can repair it because neither side holds the truth. The fix is the transactional outbox — commit the state change and the event row in one local transaction, then a relay or CDC (Debezium-style) publishes committed rows and marks them done. Atomicity comes from the database you already trust.",
        },
        {
          q: "How do you design consumers for at-least-once delivery?",
          a: "Assume repeats: dedupe on event id or a natural key like order id plus step, and let unique constraints backstop effects that must never double-run. Process, then commit the offset — never commit first. Ordering assumptions stay within a partition or keyed by entity. Poison messages get bounded retries and a dead-letter queue with alerting. Then rehearse redelivery deliberately, because the first unrehearsed redelivery is always during an incident.",
        },
        {
          q: "When is event-driven design the wrong choice?",
          a: "When the caller genuinely needs the answer now — a checkout that must confirm stock before charging is a request/response conversation, possibly with a saga underneath. Events also cost: schema evolution discipline, consumer idempotency, lag monitoring, DLQ operations. If a flow has one consumer, no replay value, and strict synchronous semantics, a direct call is simpler and honest. I reach for events where decoupling, replay or fan-out is the actual requirement.",
        },
      ],
      quiz: [
        {
          question:
            "The service commits an order to Postgres, then the process dies before publishing the event. The fix is…",
          options: [
            "Retry the publish from a background thread",
            "A transactional outbox committed with the order",
            "Publish before committing the order",
            "Add a longer broker timeout",
          ],
          answerIndex: 1,
          explanation:
            "No retry ladder can bridge a crash between two systems. The outbox writes state and event atomically in one transaction; a relay publishes what actually committed.",
        },
        {
          question:
            "Why are events named as past-tense facts, like order.paid?",
          options: [
            "It is a naming convention only",
            "Past tense sorts better in logs",
            "Commands are forbidden by brokers",
            "Facts free consumers: the producer reports what happened, not what someone must do",
          ],
          answerIndex: 3,
          explanation:
            "Commands couple producer to consumer; facts let any consumer react without the producer knowing. The vocabulary is the decoupling — rename the intent and the architecture follows.",
        },
        {
          question:
            "A consumer receives the same event id twice within a minute. What should happen?",
          options: [
            "An alert for broker misconfiguration",
            "A rollback of the first effect",
            "Nothing notable — dedupe absorbs it and effects stay unique",
            "The offset must be rewound",
          ],
          answerIndex: 2,
          explanation:
            "Duplicates are normal under at-least-once delivery. Dedupe on event id plus unique-constrained effects make redelivery harmless; alerting on every duplicate would page on the system working as designed.",
        },
      ],
    },
    {
      number: 9,
      title: "Pub Sub",
      summary:
        "Pub/sub is the post office of the architecture: producers address topics, not recipients — and the delivery guarantees are the fine print you must read.",
      keyIdea:
        "Business-critical flows use durable, replicated brokers. Consumer lag is the single best early-warning signal.",
      deepDive: [
        {
          heading: "Topics, not recipients",
          paragraphs: [
            "Pub/sub inverts addressing: producers publish to a topic — orders.paid — with no knowledge of who listens; subscribers attach and react. Add a fraud consumer, an analytics pipeline, an email sender; the producer's code never changes. The broker families matter because their guarantees differ: log-based brokers (Kafka, Pulsar) keep an ordered, replayable log per partition; queue-based systems (RabbitMQ, SQS) route and delete on ack; managed fan-out services (SNS, Google Pub/Sub) trade control for operation.",
            "The log-versus-queue distinction decides designs. Logs give replay — rebuild a search index by re-reading last week's events — plus ordering within a partition, at the cost of managing partition counts and keys. Queues give simple competing-consumer semantics — N workers, one job each — but consumed messages are gone, so rebuilds need the source system. Fan-out topics give easy multi-subscriber delivery with thin replay and ordering guarantees. Choose by matching the access pattern, exactly as with storage.",
          ],
        },
        {
          heading: "Read the delivery fine print",
          paragraphs: [
            "Delivery guarantees are the contract, and the default is at-least-once: messages arrive one or more times, never zero. Exactly-once delivery is mostly marketing — the effect-side truth is Chapter 11's idempotency. Ordering is scoped: Kafka preserves order only within a partition, so sequencing logic must key by entity id or tolerate reordering; FIFO queues give order per queue at throughput cost. Acknowledgment semantics matter too — the ack window (visibility timeout, max poll interval) must exceed processing time, or in-flight work is redelivered mid-flight.",
            "Consumer groups turn a topic into parallelism: members split the partitions, each message processed by exactly one member in Kafka's model, while competing consumers on a queue pull independently. Scale has a ceiling: consumers beyond the partition or queue parallelism idle. The durable pattern: batch consume, process, then commit offsets — keeping the commit after the effect so crashes replay rather than skip. That one ordering choice converts most duplicate-delivery bugs into non-events.",
          ],
        },
        {
          heading: "Lag is the vital sign",
          paragraphs: [
            "Consumer lag — messages waiting versus processed rate — is the single best early-warning signal a pub/sub system emits. Lag grows when consumers slow, when traffic spikes, or when a poison message blocks a partition head; all three are different runbooks, and lag is how you know to open one. Alert on sustained lag growth, not absolute depth alone — a deep-but-draining queue is healthy, a shallow-but-growing one is dying. Publish rate, consume rate and oldest-message age together tell the story.",
            "Retry with backoff belongs in the consumer, bounded, before the dead-letter queue — park poison messages somewhere a human triages, with the original payload and the error attached. Backpressure is the quieter half: bounded queues in consumers, prefetch limits, and admission control upstream, so a burst degrades delivery latency instead of exhausting memory. And rehearse replay: knowing you can reprocess a day of events from the log is what makes eventual-consistency policies brave instead of hopeful.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "One message, end to end",
        caption:
          "Order lives inside the partition; everything else is parallel and at-least-once.",
        steps: [
          { label: "Producer", note: "publishes to topic, keyed" },
          { label: "Broker", note: "replicated, durable log" },
          { label: "Partition", note: "order exists only here" },
          { label: "Consumer group", note: "parallel, offset-tracked" },
          { label: "Retry then DLQ", note: "poison messages park here" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "acks=all plus commit-after-processing: the two settings that make a Kafka pipeline trustworthy.",
        code: [
          "# Producer: durability before latency",
          "producer:",
          "  acks: all                 # wait for in-sync replicas",
          "  enable.idempotence: true  # no duplicates on retry",
          "  linger.ms: 5              # small batching win",
          "",
          "# Consumer: slow is fine, stuck is not",
          "consumer:",
          "  group.id: billing",
          "  auto.offset.reset: earliest",
          "  enable.auto.commit: false # commit after the effect, never before",
          "  max.poll.interval.ms: 300000",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Assuming the broker preserves global order across a topic.",
          fix: "Order exists within a partition or FIFO queue only. Key sequence-sensitive messages by entity id, or design consumers to tolerate reordering.",
        },
        {
          mistake: "Committing offsets before the effect completes.",
          fix: "Process, then commit. A crash then replays the message into your idempotent handler instead of skipping work that never landed.",
        },
        {
          mistake: "Poison messages retried forever, blocking the partition head.",
          fix: "Bounded retries with backoff, then a dead-letter queue carrying payload and error, with an alert. Silent head-of-line blocking is an outage with a delay.",
        },
        {
          mistake: "Adding consumers past the partition count and calling it scaling.",
          fix: "Partitions bound parallelism. Add partitions deliberately (rehashing keys) or scale within the limit; idle consumers add cost and confusion.",
        },
      ],
      fieldChecklist: [
        "Every business-critical topic sits on a durable, replicated broker — acks and replication verified in config.",
        "Consumers commit offsets after effects, and I can show the code that proves it.",
        "Consumer lag, publish rate and oldest-message age are alerted on, with runbooks per failure shape.",
        "Dead-letter queues exist per consumer and are triaged on a schedule, not discovered by users.",
        "Sequence-sensitive flows key by entity id; no global-order assumptions survive review.",
        "Replaying one day of events into the current consumers has been rehearsed in staging.",
      ],
      keyTerms: [
        {
          term: "Topic",
          definition:
            "The named channel producers address instead of recipients — the addressing inversion that makes subscribers swappable.",
        },
        {
          term: "Consumer group",
          definition:
            "A set of consumers that splits a topic's partitions among members, giving parallelism with per-message exclusivity.",
        },
        {
          term: "Consumer lag",
          definition:
            "Messages waiting versus processed rate — the early-warning metric for slow consumers, bursts and poison messages alike.",
        },
        {
          term: "Dead-letter queue",
          definition:
            "Where messages park after bounded retries fail — with payload and error attached, triaged by a human.",
        },
      ],
      interviewQuestions: [
        {
          q: "Kafka, RabbitMQ or a managed pub/sub — how do you choose?",
          a: "By access pattern. Kafka when you need replay, high throughput and ordering within keyed partitions — event sourcing, projections, reprocessing. RabbitMQ or SQS when competing consumers over discrete jobs suffice and consumed-is-gone is fine. Managed fan-out (SNS, Pub/Sub) when multi-subscriber delivery matters more than control. The expensive mistake is picking per brand loyalty; the durable answer matches replay, ordering and fan-out needs to the broker family.",
        },
        {
          q: "Consumer lag is climbing in production. Walk your diagnosis.",
          a: "Three shapes: consume rate dropped (slow handler, downstream dependency, GC), publish rate spiked (upstream burst or a retry storm), or a poison message blocked a partition head. I check oldest-message age per partition, error logs for repeat failures, and whether scaling consumers is even possible — partitions bound parallelism. Mitigation is shape-specific: fix or roll back the slow path, shed or buffer the burst, DLQ the poison.",
        },
        {
          q: "Why commit offsets only after processing, and what does that cost you?",
          a: "Commit-first loses work: a crash after commit means the message is gone before its effect landed. Commit-last means a crash replays the message, and idempotency absorbs the duplicate — the honest cost of at-least-once. The side effect is possible reprocessing on rebalances, which is fine when consumers dedupe. The pattern is process, then commit, with the visibility or poll timeout sized above worst-case handling time.",
        },
      ],
      quiz: [
        {
          question:
            "Why does consumer lag make the best early-warning signal?",
          options: [
            "It measures broker CPU directly",
            "It grows before users notice, across slow consumers, bursts and poison messages alike",
            "It replaces logging",
            "It only matters for Kafka",
          ],
          answerIndex: 1,
          explanation:
            "Lag integrates every failure mode into one visible number: waiting messages versus processing rate. Rising lag with draining depth is traffic; flat-or-growing age with flat rate is a stuck consumer.",
        },
        {
          question:
            "Order matters per account: debit then credit must apply in sequence. The design is…",
          options: [
            "One global ordered topic",
            "Random partitioning with consumer-side sorting",
            "A database per account",
            "Key messages by account id so they land in one partition or FIFO queue",
          ],
          answerIndex: 3,
          explanation:
            "Brokers order within a partition or FIFO queue only. Keying by entity id routes an entity's sequence to one ordered lane; global order is neither offered nor needed.",
        },
        {
          question:
            "A message references a customer that was hard-deleted; the consumer fails every retry. What now?",
          options: [
            "Route it to the dead-letter queue after bounded retries, with payload and error attached",
            "Increase retries to 100",
            "Delete the message silently",
            "Restart the consumer group",
          ],
          answerIndex: 0,
          explanation:
            "Poison messages need bounded retries, then a DLQ a human triages. Forever-retries block the partition head; silent deletion hides a bug; the DLQ keeps evidence for the fix.",
        },
      ],
    },
    {
      number: 10,
      title: "Trade Offs",
      summary:
        "Every architecture decision is a trade-off wearing a decision's clothes. The skill is naming the exchange rate — out loud, in writing.",
      keyIdea:
        "Architecture Decision Records (ADRs). Reversibility rating: one-way vs two-way decisions.",
      deepDive: [
        {
          heading: "Name the exchange rate",
          paragraphs: [
            "There are no free architecture choices, only trades wearing decision clothes: consistency for latency, flexibility for operational load, build for control at the price of ownership. The senior move is naming the exchange rate out loud — what is gained, what is surrendered, who feels it and when. Teams that skip this re-litigate decisions quarterly because nobody recorded the reasoning; teams that write it down move faster precisely because the debate is stored, not repeated.",
            "The Architecture Decision Record is the tool: one page, dated — context, decision, consequences. Short enough to read, honest enough to disagree with. ADRs compound into institutional memory that survives reorgs and departed staff, and reviewing a proposal becomes reviewing a diff of its ADR. The quality bar is consequences: an ADR without a consequences section is a press release, not a decision record. Write what it costs, not only what it buys.",
          ],
        },
        {
          heading: "Reversibility is the real currency",
          paragraphs: [
            "Decisions divide into two-way doors and one-way doors. Two-way — a library swap, a feature flag default, an endpoint addition — deserve speed: decide, ship, learn, revert if wrong. One-way — the database engine, the consistency model of the ledger, a public API contract, where the data lives — deserve ceremony: data, a prototype of the risky path, and explicit sign-off. Misclassifying in either direction is the classic failure: paralyzing the team over flags, or winging a data model migration.",
            "Reversibility can be engineered. Repository interfaces keep storage swappable; feature flags make behavior changes two-way; parallel-run periods let new systems prove themselves against old truth before cutover. When a one-way door cannot be avoided, shrink it: pilot on one entity or one region, define the rollback before the migration, and schedule the decision review before commitment rather than after regret. Speed comes from making more doors two-way, not from rushing through the one-way ones.",
          ],
        },
        {
          heading: "Disagreement is data",
          paragraphs: [
            "Architecture review is not persuasion; it is surfacing the trades each option makes, then letting the constraint that matters most decide — latency, cost, hiring pool, failure tolerance, team shape. 'It depends' becomes rigorous when the dependences are named: this option wins if read traffic dominates, that one if writes do. Disagreement inside the review is valuable — it usually means two real constraints are competing, and the ADR's job is to record which one won and why.",
            "Decisions also expire. A monolith chosen for three engineers is wrong at thirty; a queue depth tuned for one product is wrong after the second. Date-stamp ADRs with revisit triggers — traffic grows tenfold, a second team forms, a cost ceiling is hit — so re-opening a file is routine maintenance, not an act of heresy. The healthiest architectures are not the ones with no old decisions; they are the ones whose old decisions are visibly, cheaply revisable.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Framing the big decision",
        caption:
          "Classify the door before debating the options; the classification sets the process.",
        start: "A significant architecture choice",
        branches: [
          {
            label: "Two-way door",
            outcome: "Decide this week; record the ADR",
            good: true,
          },
          {
            label: "One-way, data exists",
            outcome: "Benchmark both; decide on numbers",
            good: true,
          },
          {
            label: "One-way, no data",
            outcome: "Prototype the risky path first",
            good: true,
          },
          {
            label: "Decide by seniority or hype",
            outcome: "The org re-litigates it forever",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Decisions living in Slack threads and meeting memories.",
          fix: "One-page ADRs, dated: context, decision, consequences. Link them from the code or repo so they are found when the question recurs.",
        },
        {
          mistake: "Treating every decision as reversible — or as permanent.",
          fix: "Classify one-way vs two-way explicitly. Two-way doors ship fast; one-way doors earn data, prototypes and sign-off before commitment.",
        },
        {
          mistake: "Pros and cons lists that never name what is lost.",
          fix: "Each option states its cost — latency, money, hiring pool, failure modes. An analysis without named costs is advocacy.",
        },
        {
          mistake: "ADRs written once and never revisited.",
          fix: "Add revisit triggers with dates — scale, team shape, cost. Decisions expire; scheduled re-opening is maintenance, not mutiny.",
        },
      ],
      fieldChecklist: [
        "Every significant decision in this project has a dated ADR with a consequences section.",
        "I classify decisions one-way vs two-way before choosing a process for them.",
        "One-way decisions in the last year each had data or a prototype behind them.",
        "Reversibility mechanisms (interfaces, flags, parallel runs) exist where doors were made two-way.",
        "ADRs carry revisit triggers, and one has actually been re-opened on a trigger.",
        "In reviews, I name the exchange rate of my preferred option before defending it.",
      ],
      keyTerms: [
        {
          term: "Architecture decision record",
          definition:
            "A dated, one-page record — context, decision, consequences — that stores the reasoning so debates are not repeated.",
        },
        {
          term: "One-way decision",
          definition:
            "A choice that is painful or impossible to reverse; it earns data, prototypes and explicit sign-off.",
        },
        {
          term: "Parallel run",
          definition:
            "Running new and old systems side by side against the same traffic so the new path proves itself before cutover.",
        },
        {
          term: "Revisit trigger",
          definition:
            "A named condition — scale, team shape, cost — recorded with an ADR that schedules its re-opening.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you document architecture decisions so they actually get used?",
          a: "ADRs kept brutally short: one dated page per decision — context, decision, consequences — linked from the code they govern. The consequences section earns trust: what it costs and when it hurts. Then revisit triggers, so re-opening is scheduled maintenance. The usage test: a new engineer should answer 'why is this a monolith?' by reading three files, not by booking a meeting with me.",
        },
        {
          q: "Tell me about a one-way decision you handled differently from a two-way one.",
          a: "Choosing the ledger's consistency model was one-way: I prototyped the contention path, benchmarked quorum versus synchronous replication, and wrote the ADR with failure behavior spelled out before sign-off. Swapping a JSON serializer was two-way: flag it, ship it, watch it, revert-ready. The discipline is classification first — mislabeling either direction is the classic failure, paralyzing small choices or winging the irreversible ones.",
        },
        {
          q: "How do you resolve architecture disagreement between strong senior engineers?",
          a: "By naming the competing constraints rather than debating taste: usually both are right about different trade-offs. I make each side state its option's exchange rate — what it surrenders — then we identify the constraint that dominates for this system at this scale, and the decision follows. The ADR records which constraint won, so when scale changes, the revisit trigger is objective instead of personal.",
        },
      ],
      quiz: [
        {
          question: "What belongs in every ADR without exception?",
          options: [
            "A diagram of every service",
            "The named consequences of the decision",
            "A vote count of who agreed",
            "The CEO's approval",
          ],
          answerIndex: 1,
          explanation:
            "Consequences turn a decision into a record: what it costs, who feels it, when it hurts. Without that, the document is advocacy and future teams cannot reason about revisiting it.",
        },
        {
          question:
            "Migrating where the ledger data lives is best classified as…",
          options: [
            "A two-way door — ship it and learn",
            "A purely operational detail",
            "A decision for the vendor to make",
            "A one-way door — data, prototype and sign-off first",
          ],
          answerIndex: 3,
          explanation:
            "Data location compounds: every consumer, backup and contract wraps around it. One-way doors earn benchmarks, prototypes of the risky path, and explicit sign-off before commitment.",
        },
        {
          question:
            "The team keeps re-litigating last year's queue choice. The likeliest cause?",
          options: [
            "Engineers enjoy debating",
            "Queues are inherently controversial",
            "The decision was never recorded with context and consequences",
            "The ADR tooling is wrong",
          ],
          answerIndex: 2,
          explanation:
            "Unrecorded decisions get re-opened because new members and new context restart the debate from zero. A dated ADR with revisit triggers converts re-litigation into scheduled maintenance.",
        },
      ],
    },
    {
      number: 11,
      title: "Idempotency Keys & Exactly-Once vs. At-Least-Once Processing",
      summary:
        "Retries are mandatory in distributed systems; doing the thing twice is optional. Idempotency is what makes that sentence true.",
      keyIdea:
        "Exactly-once delivery is a myth; exactly-once effects are engineering. Idempotency keys at APIs, event-id dedupe in consumers, unique constraints in DB.",
      deepDive: [
        {
          heading: "Retries are mandatory",
          paragraphs: [
            "In any distributed system, retries are not a choice: timeouts fire on healthy work, proxies give up, networks partition for milliseconds, consumers rebalance mid-message. The honest delivery guarantee is at-least-once — your operation will occasionally run twice. Exactly-once delivery, as brokers market it, covers narrow internal paths and does not extend to your charges, emails and counters. The engineering goal is therefore exactly-once effects: the work may execute twice, but the world shows one result.",
            "The duplicates that reach production are never hypothetical. The mobile client retries a payment after a tunnel drops and the customer sees two charges; the consumer rebalances mid-batch and a shipment books twice; the at-least-once broker redelivers after a long GC pause and the welcome email sends twice. Each case is the same bug wearing different clothes: an effect executed without a duplicate guard. The fix is layered, and every layer is cheap.",
          ],
        },
        {
          heading: "Three layers of defense",
          paragraphs: [
            "Layer one is the API: mutations carry an idempotency key the client mints per logical attempt. The server records key, status and response; a retry returns the saved response verbatim instead of executing again. Layer two is the consumer: dedupe on event id or a natural key — order id plus step — using a processed-events store with a TTL or the log's own offset tracking. Layer three is the database: unique constraints and compare-and-swap columns, the durable referee that outlives every cache flush and redeploy.",
            "Key hygiene decides whether layer one works. Scope the key per operation per entity — one key per checkout attempt, not per user per day — and give it a TTL matching the retry horizon: hours, not years. Store the response, not just success: clients compare bodies, and replaying a generic 200 breaks clients that reconcile on amounts. On replay, the same response with the same status is the contract; a mismatch is a new bug class.",
          ],
        },
        {
          heading: "Walk your effects and name their guards",
          paragraphs: [
            "Audit the system by effect class. Charges and ledger entries: unique constraint on the idempotency key, no exceptions. Emails and notifications: a sent-log keyed by event id, checked before send. Counters and inventory: atomic increments with idempotent composition — setting to a computed value beats a blind increment when replays are possible. State machines: transitions guarded so re-applying a completed transition is a no-op. Walk every side effect in the codebase and name its guard; an unnamed one is tomorrow's double-charge ticket.",
            "Reconciliation is the safety net behind the guards. Periodic jobs compare what should have happened with what did — payments charged versus orders marked paid, emails sent versus events consumed — and surface drift before customers do. The combination is the professional posture: idempotency makes duplicates harmless, unique constraints make them impossible at the source of truth, and reconciliation catches the residue neither layer foresaw. Exactly-once effects are not a product you buy; they are this triple defense, maintained.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The retry-safe write path",
        caption:
          "Duplicates arrive anyway; the pipeline turns them into replays instead of effects.",
        stages: [
          { label: "Client mints key", note: "one per logical attempt" },
          { label: "Lookup", note: "seen before? replay saved response" },
          { label: "Execute once", note: "unique constraint guards it" },
          { label: "Store result", note: "key, status, response body" },
          { label: "Replay forever", note: "retries get the saved answer" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "The database unique constraint is the final referee; everything upstream is convenience.",
        code: [
          "CREATE TABLE payment_attempts (",
          "  idempotency_key TEXT PRIMARY KEY,",
          "  order_id        BIGINT NOT NULL,",
          "  status          TEXT NOT NULL,   -- 'succeeded' or 'failed'",
          "  response        JSONB NOT NULL,  -- saved to replay verbatim",
          "  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()",
          ");",
          "",
          "-- The primary key is the last line of defense:",
          "INSERT INTO payment_attempts (idempotency_key, order_id, status, response)",
          "VALUES ($1, $2, 'succeeded', $3)",
          "ON CONFLICT (idempotency_key) DO NOTHING;",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Idempotency keys scoped too wide or kept forever.",
          fix: "Scope per operation per entity with a TTL matching the retry horizon. A key is an attempt handle, not a user identity.",
        },
        {
          mistake: "Deduping in Redis only, with no unique constraint below.",
          fix: "Caches evict and processes restart; the database unique constraint is the durable referee. Redis is for speed, the constraint for truth.",
        },
        {
          mistake: "Replaying duplicates with a fresh generic 200.",
          fix: "Store the original response and return it verbatim — same status, same body. Clients reconcile on amounts and ids, not just codes.",
        },
        {
          mistake:
            "Trusting a broker's exactly-once mode to protect your side effects.",
          fix: "It covers broker-internal paths only. Charges, emails and counters still need keys, dedupe stores and constraints on the effect side.",
        },
      ],
      fieldChecklist: [
        "Every mutating endpoint documents its idempotency key header and replay behavior.",
        "Every side effect in the codebase has a named duplicate guard — constraint, sent-log or CAS.",
        "Consumers dedupe on event id or natural key, and redelivery has been tested deliberately.",
        "Idempotency records store the full response, not just success flags.",
        "A reconciliation job compares effects against intents on a schedule.",
        "I can explain why exactly-once delivery is a myth and exactly-once effects are not.",
      ],
      keyTerms: [
        {
          term: "Idempotency key",
          definition:
            "A client-minted handle per logical attempt; the server stores the first result under it and replays that result for retries.",
        },
        {
          term: "At-least-once delivery",
          definition:
            "The honest broker guarantee: messages arrive one or more times, never zero — duplicates are normal, absence is the bug.",
        },
        {
          term: "Exactly-once effects",
          definition:
            "The engineering goal: execution may repeat, but the visible result happens once — built from keys, dedupe and constraints.",
        },
        {
          term: "Deduplication window",
          definition:
            "The TTL or range within which a repeat of the same key or event id is recognized and absorbed instead of executed.",
        },
      ],
      interviewQuestions: [
        {
          q: "Is exactly-once processing real?",
          a: "Exactly-once delivery, as an end-to-end guarantee across brokers, databases and your code, is a myth — timeouts and rebalances make double execution inevitable. Exactly-once effects are engineering: idempotency keys at APIs with stored responses, event-id dedupe in consumers, and unique constraints in the database as the durable referee. Kafka's transactional mode covers broker-internal paths only. Design for at-least-once execution and build effects that show one result.",
        },
        {
          q: "Design the idempotency layer for a payments endpoint.",
          a: "The client mints a key per checkout attempt; the server looks it up before executing and replays the stored response verbatim on matches. Execution is guarded by a unique constraint on the key in a payment-attempts table holding status and the full response. Keys expire on the retry horizon, hours. A reconciliation job compares charges against attempts to catch anything the layers missed. That is the triple defense, applied where money is.",
        },
        {
          q: "A consumer processed a message and crashed before committing its offset. What happens next?",
          a: "The broker redelivers to the next consumer — the message runs again. That is at-least-once working as designed, which is why the handler deduped on event id before any effect, and the effects sit behind unique constraints or CAS guards. If redelivery surprises the team, the fix is rehearsing it: kill the consumer mid-batch in staging and watch the duplicate get absorbed. Unrehearsed redelivery is always an incident.",
        },
      ],
      quiz: [
        {
          question:
            "What does an idempotency key actually store on first execution?",
          options: [
            "Only a success flag",
            "The key, the outcome status, and the full response to replay verbatim",
            "The client's IP address",
            "A signed JWT",
          ],
          answerIndex: 1,
          explanation:
            "Replay must return the same status and body, because clients reconcile on ids and amounts. A generic 200 on retry creates a new class of reconciliation bugs.",
        },
        {
          question:
            "The broker advertises exactly-once. Your charge endpoint still needs…",
          options: [
            "Nothing — the broker guarantees it",
            "A bigger timeout",
            "At-least-once disabled",
            "Idempotency keys and a unique constraint, because delivery guarantees stop at the broker",
          ],
          answerIndex: 3,
          explanation:
            "Exactly-once modes cover broker-internal paths, not your database, your emails or your retries in front of them. Effects need their own guards at the source of truth.",
        },
        {
          question:
            "Which guard best prevents a double charge at the last line of defense?",
          options: [
            "A Redis TTL key",
            "A retry budget",
            "A unique constraint on the idempotency key in the payments table",
            "A warning in the docs",
          ],
          answerIndex: 2,
          explanation:
            "Caches evict and processes forget; the database constraint is durable and atomic with the write. Redis is the fast layer; the constraint is the referee.",
        },
      ],
    },
    {
      number: 12,
      title: "Circuit Breakers, Timeouts, Backpressure & Bulkheads",
      summary:
        "Distributed systems fail by cascade: one slow dependency eats every thread in every service that waits on it. These four patterns are the containment field.",
      keyIdea:
        "Every remote call: timeout + circuit breaker + bulkheaded pool. Degradation ladder per dependency.",
      deepDive: [
        {
          heading: "Failure travels through waiting",
          paragraphs: [
            "Distributed systems rarely fail by explosion; they fail by saturation through waiting. A database slows from 20 to 2,000 milliseconds, and every service calling it holds its threads, connections and memory while it waits — until pools exhaust and callers of callers stall too. The cascade converts one slow dependency into a platform-wide outage without a single exception being thrown. Latency, not error rate, is the contagious property; the first containment is a timeout on every remote call, with no default-unbounded clients anywhere.",
            "Timeouts need sizing discipline: above the healthy tail so good work is not killed, well below the caller's own budget so failures surface in time, and propagated — the downstream call may not outlive the request it serves. Retries sit above timeouts, and sane retries are bounded, exponential with jitter, and budgeted per request so a fan-out of five dependencies does not multiply one hiccup into thirty attempts. Tight retry loops without backoff turn partial degradation into self-inflicted denial of service.",
          ],
        },
        {
          heading: "Breakers and bulkheads",
          paragraphs: [
            "The circuit breaker adds a tripwire: count failures per dependency, and past a threshold, stop calling — fail fast locally for a cool-down, then send one probe through (half-open) to test recovery. Callers get immediate errors instead of multi-second hangs, the failing dependency gets breathing room, and recovery is automatic without a human in the loop. Breakers convert waiting into failing, which sounds worse and is dramatically better: fast failure is something callers can handle; slow failure is something callers drown in.",
            "The bulkhead isolates the pools: separate connection and concurrency budgets per dependency, so search going slow cannot consume the connections checkout needs. Then give each dependency a degradation ladder written in advance — full feature, cached answer, static default, disabled with graceful copy — so triage under stress is execution, not invention. The breaker decides when; the ladder decides what callers see; the bulkhead decides what is still available.",
          ],
        },
        {
          heading: "Backpressure is the honest answer",
          paragraphs: [
            "When demand exceeds capacity, the system needs to say so: shed load with 429 or 503 and a Retry-After, prioritizing critical paths over batch work. Serving everyone slowly is the worst option — it converts overload into timeout storms everywhere. Queues absorb bursts, but only bounded ones: a queue that never drains is a delayed outage plus a full-disk incident, so every queue carries a depth limit and a declared overflow behavior — defer, degrade or drop, decided in daylight.",
            "These patterns compose into the containment field for one rule: every remote call gets a timeout, every dependency gets a breaker, every shared resource gets a bulkhead, every queue gets a bound, and every overload gets a shedding policy. None of it is exotic — a wrapper library and configuration — but it must exist before the cascade, because during one, nobody is refactoring. Name each dependency's timeout, threshold, pool size, queue bound and ladder, on one page, this week.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The breaker state machine",
        caption:
          "It converts slow failure into fast failure, then heals on its own.",
        steps: [
          { label: "Closed", note: "traffic flows; failures counted" },
          { label: "Trip", note: "error or latency threshold crossed" },
          { label: "Open", note: "fail fast; no calls sent" },
          { label: "Cool down", note: "give the dependency room" },
          { label: "Half-open", note: "one probe request allowed" },
          { label: "Heal", note: "probe passes: back to closed" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Timeout, threshold, cool-down, bulkhead, and a degradation path — five decisions in ten lines.",
        code: [
          "const breaker = new CircuitBreaker(callPayments, {",
          "  timeoutMs: 2000,          // every remote call gets one",
          "  failureThreshold: 0.5,    // trip at half failures",
          "  resetTimeoutMs: 30_000,   // cool-down before the probe",
          "});",
          "const paymentPool = new Pool({ maxConcurrent: 20 }); // bulkhead",
          "",
          "export async function chargeCart(cart: Cart) {",
          "  if (breaker.isOpen()) {",
          "    return chargeLater(cart);   // degrade: queue, do not drown",
          "  }",
          "  return breaker.execute(() => paymentPool.run(cart));",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "HTTP clients shipped with no timeout configured.",
          fix: "Every remote call carries an explicit timeout, sized above the healthy tail and below the caller's budget. Unbounded waiting is how cascades start.",
        },
        {
          mistake: "Retrying immediately, unbounded, on every failure.",
          fix: "Exponential backoff with jitter, bounded attempts, and a retry budget per request — plus a breaker so retries stop while the dependency is down.",
        },
        {
          mistake: "One shared connection pool serving all dependencies.",
          fix: "Bulkhead it: isolated pools per dependency so a slow search cannot starve checkout. Ship a few threads into the water, not the whole crew.",
        },
        {
          mistake: "Unbounded queues used to 'absorb' overload.",
          fix: "Bound every queue and declare overflow behavior — defer, degrade or drop. A queue that never drains is a delayed outage with a full disk.",
        },
      ],
      fieldChecklist: [
        "Every remote call has an explicit timeout; I can name each dependency's value and why.",
        "Every external dependency has a circuit breaker with a tested trip and heal.",
        "Shared resources are bulkheaded — per-dependency pools — and I know each pool's size.",
        "Each dependency has a written degradation ladder: full, cached, default, disabled.",
        "All queues are bounded with declared overflow behavior; none can grow forever.",
        "Retries use exponential backoff with jitter and a per-request budget.",
        "A dependency has been killed in staging and the degradation behaved as written.",
      ],
      keyTerms: [
        {
          term: "Circuit breaker",
          definition:
            "A per-dependency tripwire that stops calling after a failure threshold, fails fast locally, and probes to heal automatically.",
        },
        {
          term: "Bulkhead",
          definition:
            "Isolated resource pools per dependency, so one sinking component cannot take the whole ship's crew with it.",
        },
        {
          term: "Backpressure",
          definition:
            "Signaling overload instead of absorbing it silently — bounded queues, shedding, and declared overflow behavior.",
        },
        {
          term: "Load shedding",
          definition:
            "Deliberately rejecting low-priority work with 429 or 503 when capacity is exceeded, protecting the critical path.",
        },
      ],
      interviewQuestions: [
        {
          q: "A dependency's p99 jumps from 50ms to 5s. What protects the rest of the system?",
          a: "Three layers, in order. Timeouts cap each call below the caller's budget so threads turn over. The circuit breaker trips on the elevated error and latency rate and fails fast locally, giving the dependency room to recover, with a half-open probe to heal. Bulkheaded pools mean other dependencies keep their resources. Callers execute the written degradation ladder — cached answers, defaults, disabled with graceful copy — instead of hanging. Without these, one slow dependency eats every upstream thread pool.",
        },
        {
          q: "Why is failing fast considered a resilience feature?",
          a: "Because slow failure is contagious and fast failure is handleable. A caller that gets an immediate error can shed, retry with backoff, or serve a default; a caller waiting five seconds is holding a thread, a connection and a user. Failing fast also protects the struggling dependency — fewer queued requests to chew through on recovery. The breaker's whole job is converting waiting into immediate, information-rich failure.",
        },
        {
          q: "How do you design for overload rather than just failure?",
          a: "Backpressure: bounded queues with declared overflow, load shedding via 429 and 503 with Retry-After, and priority — critical paths run while batch work defers. Degradation ladders are written per dependency in advance. The discipline is deciding overflow behavior in daylight, because during the overload nobody invents well. Then rehearse it: run load past capacity in staging and verify shedding behaves and recovery drains cleanly.",
        },
      ],
      quiz: [
        {
          question:
            "What single property makes one slow dependency cascade platform-wide?",
          options: [
            "High error rates in logs",
            "Callers holding threads and connections while waiting",
            "Too many microservices",
            "DNS misconfiguration",
          ],
          answerIndex: 1,
          explanation:
            "Waiting consumes caller resources. Pools exhaust, upstream callers stall, and the outage spreads without a single exception. Timeouts and breakers exist to break exactly this chain.",
        },
        {
          question: "A circuit breaker is open. What do callers experience?",
          options: [
            "The same multi-second hangs",
            "Automatic retries at full rate",
            "Immediate local failures they can degrade on, while a probe tests recovery",
            "Nothing changes until a human closes it",
          ],
          answerIndex: 2,
          explanation:
            "Open means fail fast with no remote calls sent; half-open later allows one probe through to test healing. Meanwhile callers execute their written degradation ladder instead of waiting on a dependency that is struggling.",
        },
        {
          question: "Why must queues be bounded even though they absorb bursts?",
          options: [
            "A queue that never drains is a delayed outage, and depth limits force a declared overflow policy",
            "Memory costs money",
            "Consumers cannot read unbounded queues",
            "Brokers forbid it",
          ],
          answerIndex: 0,
          explanation:
            "Unbounded queues defer failure and compound it — latency grows, memory fills, and recovery replays a mountain. A bound forces the defer-degrade-drop decision while it is still cheap.",
        },
      ],
    },
    {
      number: 13,
      title: "Saga Pattern & Distributed Transactions",
      summary:
        "A transaction across three services has no COMMIT that covers all three. The saga is how you get all-or-nothing semantics with compensations instead of locks.",
      keyIdea:
        "Every step + compensation idempotent. Sagas are persisted state machines: crash resumes, never restarts.",
      deepDive: [
        {
          heading: "No COMMIT spans two services",
          paragraphs: [
            "Local transactions are atomic; the network is not. Once an order touches payments, inventory and shipping, no single COMMIT covers all three — two-phase commit exists but holds locks across services, turns any participant's crash into everyone's wait, and most managed stores either refuse it or charge dearly for it. The saga replaces one distributed transaction with a sequence of local transactions, each step committing independently and announcing its outcome, achieving all-or-nothing semantics through compensation rather than locks.",
            "Two coordination styles exist. Choreography: each service reacts to the previous step's event — order placed triggers payment, payment succeeded triggers reservation — simple to start, harder to trace as steps grow. Orchestration: a saga orchestrator drives steps as explicit commands and tracks state in one place — more code up front, far easier to reason about past four or five steps. The practical rule: choreograph two or three well-known steps; orchestrate anything longer or anything auditors ask about.",
          ],
        },
        {
          heading: "Compensation is the undo",
          paragraphs: [
            "Each saga step declares its business inverse: charge becomes refund, reserve becomes release, book-shipment becomes cancel-label. When a later step fails or times out, compensations run in reverse order for the completed steps. This is not a database rollback — the refund is a real, visible transaction the customer may see, which is exactly right: the world learned the truth in between, and the saga's job is to leave it coherent, not erased. Design the failure UX as deliberately as the success path.",
            "Compensations inherit every distributed-systems property of the steps themselves: they can fail, so they retry idempotently (Chapter 11's keys and constraints apply); they can be overtaken by events — the refund races a shipment that already left — so the state machine needs rules for late arrivals. The counts to know cold: every step idempotent, every compensation idempotent, every step timeouted, every stuck state observable. Sagas that skimp on any of the four become incident generators rather than reliability tools.",
          ],
        },
        {
          heading: "Sagas are persisted state machines",
          paragraphs: [
            "The orchestrator's state — which step, which attempt, which payloads — lives in durable storage, keyed by the business entity. A crash mid-saga must resume where it stopped: never restart from the first charge, never silently drop. Timeouts are part of the machine, not an afterthought — a step that neither succeeds nor fails (the payment provider went quiet) needs a declared deadline that triggers compensation or escalation. The state machine diagram is a design artifact: draw the failure arcs before coding the happy path.",
            "Testing follows the diagram. The happy path is the easy part; the tests that earn their keep crash the process between steps, kill the payment provider at step three, and double-deliver every command. Rehearse recovery in staging the way you rehearse backups. And keep saga traces first-class: one trace id from order placement through every step and compensation, because the first question in any saga incident is 'where did it stop, and what has the customer already seen?'",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "An order saga, forward and back",
        caption:
          "Each step commits locally; failure walks the compensations in reverse.",
        steps: [
          { label: "Reserve stock", note: "compensate: release hold" },
          { label: "Charge card", note: "compensate: refund" },
          { label: "Book shipment", note: "compensate: cancel label" },
          { label: "Confirm order", note: "emit order.confirmed" },
          { label: "On any failure", note: "compensate completed steps in reverse" },
        ],
      },
      pitfalls: [
        {
          mistake: "Saga steps that are not idempotent.",
          fix: "Every step and compensation dedupes on a step id; retried commands must never double-charge or double-book. Chapter 11 applies to sagas first.",
        },
        {
          mistake: "Saga state held only in the orchestrator's memory.",
          fix: "Persist step, attempt and payload per business entity. A crash resumes the machine at the same step; restart-from-step-one double-charges.",
        },
        {
          mistake: "Treating compensation as a database rollback.",
          fix: "Compensations are business inverses — refunds, releases, cancellations — visible to users. The goal is coherence with what the world learned, not erasure.",
        },
        {
          mistake: "No timeouts on saga steps.",
          fix: "Every step gets a declared deadline; silence from a provider triggers compensation or escalation. Stuck-forever states are worse than failed ones.",
        },
      ],
      fieldChecklist: [
        "Every saga in the system is drawn as a state machine, including failure arcs and timeouts.",
        "Every step and compensation is idempotent, verified by replaying it deliberately.",
        "Saga state is persisted with the business entity; crash-resume is tested in staging.",
        "Compensation UX is designed — the customer sees a refund, not a void.",
        "One trace id links every step and compensation of a saga instance.",
        "A stuck-saga alert exists: any instance in a non-terminal state beyond its deadline pages.",
      ],
      keyTerms: [
        {
          term: "Saga",
          definition:
            "A sequence of local transactions across services, coordinated so the whole achieves all-or-nothing semantics through compensations.",
        },
        {
          term: "Compensation",
          definition:
            "The business inverse of a completed saga step — a refund, a release, a cancellation — run in reverse order on failure.",
        },
        {
          term: "Orchestration",
          definition:
            "Saga coordination by an explicit, persisted state machine that commands each step; preferable past a handful of steps.",
        },
        {
          term: "Two-phase commit",
          definition:
            "The atomic-commit protocol across participants — correct but lock-heavy and availability-coupling, which is why sagas usually win.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you implement a transaction across three services?",
          a: "You do not — you implement a saga: local transactions per service plus compensations for the ones that completed before a failure. I orchestrate when steps exceed a handful or auditability matters, persisting the state machine per order with timeouts per step. Every step and compensation is idempotent. The design artifact is the diagram with failure arcs; the test plan crashes the process between steps and kills providers mid-saga to prove resume-not-restart.",
        },
        {
          q: "Why is a saga's compensation not a rollback?",
          a: "Because the intermediate state became real: the charge hit the card, the customer's bank saw it, emails may have fired. A refund is a new, visible business transaction that restores coherence; an erasure would lie about history and break the audit trail. That is also why compensations run in reverse order and must handle late arrivals — the refund may race a shipment that already left, and the state machine needs a rule for who wins.",
        },
        {
          q: "Choreography or orchestration — how do you choose?",
          a: "By step count and traceability. Two or three well-known reactions choreograph cleanly as events, with no extra component. Past that, or whenever an auditor asks 'who owns this flow?', orchestrate: an explicit state machine with persisted state, timeouts and one trace id. The failure mode of choreography at scale is a flow nobody can draw; the cost of orchestration is an extra component — usually worth it by the fourth step.",
        },
      ],
      quiz: [
        {
          question:
            "Why do most teams avoid two-phase commit across microservices?",
          options: [
            "It is deprecated by SQL standards",
            "It holds locks across services, couples availability, and is poorly supported by managed stores",
            "It requires GraphQL",
            "It only works on one machine",
          ],
          answerIndex: 1,
          explanation:
            "Two-phase commit makes every participant wait on every other, and one crashed coordinator freezes all of them. Sagas trade atomic locking for sequential local transactions plus compensations, which fail independently and retry.",
        },
        {
          question:
            "The payment succeeds; inventory reservation then fails. What does the saga do?",
          options: [
            "Rolls back the payment row in the payments database",
            "Marks the order paid anyway",
            "Requeues inventory until it succeeds",
            "Runs the compensation — refund — as a new visible business transaction",
          ],
          answerIndex: 3,
          explanation:
            "Completed steps are undone by their business inverses in reverse order. The refund is real and visible — coherence, not erasure — and must itself be idempotent.",
        },
        {
          question:
            "The orchestrator crashes between charging and shipping. Correct behavior on restart?",
          options: [
            "Restart the saga from the first step",
            "Drop the saga and let support handle it",
            "Resume the persisted state machine at the recorded step",
            "Refund automatically and abandon",
          ],
          answerIndex: 2,
          explanation:
            "Saga state is durable and keyed to the business entity; restart resumes the machine at the recorded step. Restart-from-step-one would double-charge the customer, and dropping the instance silently strands their money.",
        },
      ],
    },
    {
      number: 14,
      title: "Back-of-the-Envelope Capacity & Bandwidth Estimation",
      summary:
        "The 60-second skill that turns 'should we worry about scale?' into arithmetic — and the interview round it quietly decides.",
      keyIdea:
        "Latency and size constants memorized. Every RFC opens with a five-line capacity envelope.",
      deepDive: [
        {
          heading: "The constants you carry",
          paragraphs: [
            "Estimation rests on a handful of internalized constants: memory access around 100 nanoseconds, an SSD read around a tenth of a millisecond, a same-datacenter round trip under a millisecond, a cross-continent round trip one to two hundred milliseconds. Arithmetic anchors: a million requests a day averages about twelve per second; peak runs two to five times the average; a kilobyte per event at a million events a day is roughly a gigabyte a day. Orders of magnitude, memorized once, forever load-bearing.",
            "The habit matters more than the precision. Five lines of arithmetic before a design conversation converts 'should we worry about scale?' from vibes into numbers a team can argue with. The envelope is deliberately rough — round to powers of ten, sanity-check against the constants, flag whichever number sits within one order of magnitude of an architectural threshold. That flag, not the estimate itself, is the deliverable: it names where the design must bend.",
          ],
        },
        {
          heading: "The five-line envelope",
          paragraphs: [
            "The standard envelope: users to sessions to requests per session gives QPS — then split reads from writes, because caches and replicas live on the read side. Storage is record size times entities times growth period, remembering that replicas and indexes multiply the raw figure by two or three. Bandwidth is QPS times average payload, both directions. Memory for hot data is working-set size — the keys that get most of the traffic, per the 80/20 rule — checked against what one node holds.",
            "Work an example to make it muscle memory: ten million daily users, twenty requests per session, three times peak — that lands near ten thousand peak requests per second, comfortably behind a load-balanced fleet with a cache tier. Two-kilobyte events at one per session per day is about twenty gigabytes daily, under a terabyte monthly — one modest node plus a replica. Numbers like these, computed in a minute, kill both premature sharding and confident cluelessness.",
          ],
        },
        {
          heading: "Where the math bends the design",
          paragraphs: [
            "The envelope earns its keep when a line crosses a threshold. Storage growth approaching what one node and its backup window tolerate moves sharding from an interview answer into the RFC. Read QPS beyond what replicas and a cache absorb moves CDN strategy up the agenda. Bandwidth near network-card limits changes payload design — pagination sizes, compression, field trimming — before latency complaints do. Each threshold is a design fork, and the envelope is what triggers the conversation while forks are still cheap.",
            "In interviews, the envelope is also pacing: it demonstrates you size before you design, and it anchors every later choice — 'at our estimated ten thousand QPS, this cache holds the working set' — so the whiteboard stays quantitative. Interviewers listen for the constants, the peak factor, the read/write split, and the honest rounding. The skill is sixty seconds of arithmetic that quietly decides the round; the habit is the same envelope atop every RFC you write at work.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The five-line envelope",
        caption:
          "Rough numbers in minutes; the output is which threshold the design must respect.",
        stages: [
          { label: "QPS", note: "users, sessions, peak factor" },
          { label: "Read/write split", note: "caches live on reads" },
          { label: "Storage", note: "record size × growth × 2-3" },
          { label: "Bandwidth", note: "QPS × payload, both ways" },
          { label: "Hot memory", note: "working set vs one node" },
        ],
      },
      codeExample: {
        language: "python",
        caption:
          "Estimation is arithmetic you can run in your head — the code just documents it.",
        code: [
          "def envelope(users_millions: float, days: int = 30):",
          "    sessions = users_millions * 2            # sessions/user/day",
          "    requests = sessions * 20                 # requests/session",
          "    avg_qps = requests * 1e6 / 86_400        # a day has 86,400 s",
          "    peak_qps = avg_qps * 3                   # typical peak factor",
          "    event_tb = sessions * 1e6 * 2_000 / 1e12 * days  # 2 KB/event",
          "",
          "    return {",
          "        'avg_qps': round(avg_qps),",
          "        'peak_qps': round(peak_qps),",
          "        'monthly_event_tb': round(event_tb, 1),",
          "    }",
          "",
          "# envelope(10) -> avg ~4,600 qps, peak ~14,000, storage ~1.2 TB/month",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Sizing for average load.",
          fix: "Multiply by the peak factor — two to five times average is typical. Averages build systems that fall over at lunch and on launch days.",
        },
        {
          mistake: "Estimating to three decimal places.",
          fix: "Round to powers of ten; the deliverable is which threshold the design approaches, not precision. An order of magnitude decides architectures.",
        },
        {
          mistake: "Forgetting replication and index overhead in storage math.",
          fix: "Multiply raw data by two to three for replicas, indexes and logs before sizing nodes and backup windows.",
        },
        {
          mistake: "Skipping the envelope because the design 'obviously scales'.",
          fix: "Five lines of arithmetic before every RFC. It catches the hundred-times-growth assumption and the cache-too-small mistake in minute one.",
        },
      ],
      fieldChecklist: [
        "I can recite the latency constants — memory, SSD, same-DC round trip, cross-continent — from memory.",
        "Every design document I write opens with a five-line capacity envelope.",
        "I convert users to peak QPS with a stated peak factor, not averages alone.",
        "Storage math includes the two-to-three-times overhead for replicas and indexes.",
        "I know this system's working-set size and whether it fits one node's memory.",
        "The envelope's flagged threshold — storage, QPS, bandwidth — is stated in the design, with its consequence.",
      ],
      keyTerms: [
        {
          term: "QPS",
          definition:
            "Queries (or requests) per second — the throughput figure every capacity conversation starts from.",
        },
        {
          term: "Peak factor",
          definition:
            "The multiple above average that real traffic reaches — commonly two to five — which is what you actually size for.",
        },
        {
          term: "Working set",
          definition:
            "The data that receives most of the traffic in a period; if it fits in one node's memory, the design stays simple.",
        },
        {
          term: "Read/write ratio",
          definition:
            "How reads compare to writes for a workload — the split that decides where caches, replicas and sharding pay off.",
        },
      ],
      interviewQuestions: [
        {
          q: "Estimate the infrastructure for a URL shortener at ten million links created per month.",
          a: "Writes: ten million per month averages about four per second, peak maybe twenty — trivial write load. Reads dominate at a 100-to-1 ratio, so around four hundred per second average, two thousand at peak — a cache tier plus a small fleet handles it. Storage: a short record under a kilobyte means roughly ten gigabytes a year — one node with room for years. The envelope says this is a caching-and-index problem, not a sharding problem.",
        },
        {
          q: "Which constant mistakes do candidates make in capacity estimation?",
          a: "Three: designing for average load with no peak factor; forgetting that replicas and indexes multiply storage two to three times; and confusing users per day with requests per second — a million daily users is not a million QPS. The recovery is method: users to sessions to requests, split reads from writes, round to powers of ten, and state which threshold the design approaches.",
        },
        {
          q: "How does estimation change a real design conversation, not just interviews?",
          a: "It converts scaling anxiety into a named threshold. When the envelope shows storage crossing one node's comfort in a year, sharding enters the RFC with a date rather than a fear; when read QPS fits behind replicas plus a cache, the team spends the meeting on consistency instead. Every RFC I write opens with the five-line envelope — it is cheap, and it decides which trade-offs are real.",
        },
      ],
      quiz: [
        {
          question: "One million requests per day averages closest to…",
          options: [
            "1,000 requests per second",
            "About 12 requests per second",
            "100 requests per second",
            "12,000 requests per second",
          ],
          answerIndex: 1,
          explanation:
            "A million divided by 86,400 seconds is roughly 12 per second — the constant that keeps day-scale numbers honest. Peak then multiplies by two to five.",
        },
        {
          question: "Why multiply raw storage by two to three in an envelope?",
          options: [
            "For compression overhead",
            "Backups require it by law",
            "Replicas, indexes and logs roughly double or triple the raw footprint",
            "To be safe emotionally",
          ],
          answerIndex: 2,
          explanation:
            "Replication makes copies, indexes add per-row structures, and logs grow alongside the data itself. Envelopes that skip this overhead undersize nodes and backup windows — the raw number is a floor, not the footprint.",
        },
        {
          question:
            "The envelope shows peak read QPS far beyond what replicas can serve. The design responds by…",
          options: [
            "Adding a cache tier and CDN strategy to the RFC",
            "Ignoring it until launch",
            "Choosing a stronger consistency level",
            "Reducing the peak factor",
          ],
          answerIndex: 0,
          explanation:
            "Read scale beyond replicas is the cache and CDN conversation — the envelope's job is surfacing that fork early, while changing the design is still cheap.",
        },
      ],
    },
  ],
};

