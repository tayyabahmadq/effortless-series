import type { AcademicSubject } from "./types";

export const cy605: AcademicSubject = {
  id: "cy-605",
  code: "CY-605",
  title: "Modern Application Development",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: how modern applications are architected and delivered, how frontends are built and rendered, how backends and APIs speak, how mobile and cloud-native platforms host them, and how testing, security and release engineering keep them shippable.",
  description:
    "Five units walk from the modern application landscape - architectures, the three-tier web, HTTP, the DevOps loop and the developer toolchain - through frontend development from browser rendering to frameworks and performance, then backend development with REST APIs, databases, authentication, middleware and real-time channels, then mobile and cloud-native development with the 12-factor app, Docker, Kubernetes, service models and CI/CD, ending with the quality and delivery layer: the testing pyramid, testable code, OWASP security, secure coding, observability, release engineering and emerging patterns.",
  accentColor: "#0ea5e9",
  emoji: "MD",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "The Modern Application Landscape",
      summary:
        "Unit I frames the subject: what makes an application modern, the architectural spectrum from monolith through microservices to serverless, the three-tier web architecture and a request's full life, HTTP as the contract between tiers, the Agile-DevOps delivery loop, the developer toolchain from Git to containers, and JSON as the data contract that holds it all together.",
      chapter: {
        number: "01",
        title: "How Modern Applications Are Built",
        intro:
          "Unit I covers the characteristics that make an application modern, the monolith versus microservices versus serverless architectural spectrum, the three-tier web architecture and the complete life of a request, HTTP verbs, status codes and headers, the Agile and DevOps delivery loop with CI/CD, the developer toolchain - Git, runtimes, editors, containers - and JSON as the universal data contract between clients, services and databases.",
        inOneBreath:
          "Modern = API-first, stateless where possible, continuously deployed, multi-device, data-driven. Architecture is a spectrum: monolith for speed of starting, microservices for scale of teams, serverless for scale of spikes. Every web interaction is a three-tier round trip - client renders, server decides, database remembers. HTTP is the contract: verbs carry intent, status codes carry verdicts, headers carry metadata. The DevOps loop turns 'done' into 'deployed and observed', and Git plus containers make the loop reproducible. JSON is the contract language - one format across browsers, services and queues.",
        sections: [
          {
            number: "1.1",
            title: "What makes an application modern",
            body: [
              "A modern application is built for the web-and-cloud era, and the word is a checklist, not an aesthetic. API-first: every capability is exposed as an interface a program can call, so a web client, a mobile app and a partner integration share one backend. Stateless services: any server can handle any request because state lives in the database or cache, which is what makes horizontal scaling possible. Continuously deployed: releases happen weekly or daily through automated pipelines, not quarterly through change-freeze windows. Multi-device: the same product renders on a phone, a tablet and a desktop. Data-driven: the UI is rendered from fetched data, not baked into static screens.",
              "A worked example fixes the picture. A food-delivery app: a React web client and a Flutter mobile app both call one REST API built on Node and Express; PostgreSQL stores orders and users, Redis caches menu lookups, a message queue emails invoices asynchronously; everything runs in Docker containers behind a load balancer, deployed by a pipeline that runs on every git push. Count the shape: 3 clients, 1 API layer of about 40 endpoints, 4 backing services, 1 pipeline. When the lunch-hour spike triples traffic, the platform adds container replicas in minutes - no monolithic redeploy, no hardware purchase.",
              "The forces that define modernity are worth naming because exams ask 'why did this shift happen'. Users went multi-device and always-online, so availability became a feature. Teams grew large and parallel, so independent deployability became a management requirement. Infrastructure became elastic and metered, so scaling by buying hardware gave way to scaling by adding containers. Delivery became a competitive weapon - shipping fixes in hours beats shipping them in quarters - which is why the DevOps loop of 1.5 is part of the definition, not an afterthought.",
              "Exam framing: expect 'what is modern application development' or 'list the characteristics of modern applications'. Answer with the five-part checklist, the food-delivery worked example with its counts, and the four forces. Close with the sentence examiners reward: modernity is less about languages than about interfaces, statelessness and delivery speed.",
            ],
            keyTerms: [
              { term: "API-first", definition: "Every capability exposed as a callable interface before any client is built." },
              { term: "Stateless service", definition: "No per-request memory on the server; state lives in databases and caches." },
              { term: "Continuous deployment", definition: "Automated pipeline releases every passing change without manual gates." },
              { term: "Horizontal scaling", definition: "Adding more instances of the same stateless service instead of bigger machines." },
            ],
            table: {
              caption: "The parts of a modern application and what each does.",
              headers: ["Component", "Role", "Example"],
              rows: [
                ["Web / mobile client", "renders UI, calls the API", "React SPA, Flutter app"],
                ["API layer", "business logic behind HTTP", "Node/Express, 40 endpoints"],
                ["Relational database", "system of record", "PostgreSQL: orders, users"],
                ["Cache", "fast repeated reads", "Redis: menu, sessions"],
                ["Message queue", "async work off the request path", "RabbitMQ: invoice emails"],
                ["Pipeline + registry", "build, test, ship containers", "GitHub Actions to a registry"],
              ],
            },
            bullets: [
              "Modern checklist: API-first, stateless services, continuous deployment, multi-device, data-driven UI.",
              "Worked shape: 3 clients, 1 API of 40 endpoints, 4 backing services, 1 automated pipeline.",
              "Elasticity replaced hardware: traffic spikes are absorbed by adding container replicas.",
              "Availability is a feature - users are always online and rivals are one tab away.",
              "Independent deployability is a team-scale requirement, not only a technical one.",
              "Modernity is about interfaces, statelessness and delivery speed more than about languages.",
            ],
            diagram: {
              kind: "compare",
              title: "Desktop-era app vs modern application",
              caption: "The shift is structural: where state lives, how releases happen, who the clients are.",
              left: {
                heading: "Desktop-era application",
                items: [
                  "One binary installed per machine",
                  "State in local files; updates by reinstall",
                  "Monolithic releases, quarterly",
                  "One client: the desktop it was built for",
                ],
              },
              right: {
                heading: "Modern application",
                items: [
                  "Clients call APIs over HTTP",
                  "State in databases and caches",
                  "Pipeline releases weekly or daily",
                  "Web, mobile and partner clients from one backend",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Checklist, not buzzword",
              body: "When an answer says 'modern', attach the checklist: API-first, stateless, continuously deployed, multi-device, data-driven. Examiners mark the properties, not the adjective - five nouns beat one buzzword every time.",
            },
            examQuestions: [
              {
                q: "Define modern application development, list its defining characteristics, and illustrate with a worked example showing clients, services and delivery.",
                marks: 14,
                outline: [
                  "API-first: capabilities exposed as callable interfaces",
                  "Stateless services: state in database/cache, enabling horizontal scale",
                  "Continuous deployment: automated pipeline, releases weekly or daily",
                  "Multi-device: one backend serving web, mobile and partners",
                  "Data-driven UI rendered from fetched data",
                  "Worked example: food-delivery - 3 clients, 40 endpoints, 4 backing services",
                  "Forces: always-online users, large parallel teams, elastic cloud, delivery speed",
                ],
              },
              {
                q: "Why did horizontal scaling replace scaling by bigger machines in modern platforms?",
                marks: 7,
                outline: [
                  "Stateless services: any replica can serve any request",
                  "Cloud pricing is metered - add replicas for the spike, remove them after",
                  "Commodity replicas beat single big machines on cost and failure radius",
                  "Load balancers distribute; databases hold the shared state",
                  "Contrast: stateful monolith must scale vertically - expensive ceiling",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Application architectures - monolith, microservices, serverless",
            body: [
              "Architecture is the shape of the deployable unit, and the modern spectrum has three named stops. A monolith is one codebase deployed as one process: simple to develop, test and debug - one transaction, one log file, one deployment - but every change redeploys everything and one memory leak can take the whole product down. Microservices split the product into independently deployable services by business capability - orders, payments, catalog - each owning its own database, communicating over HTTP or messaging. Serverless (functions-as-a-service) goes further: no server to manage at all - code runs as short-lived functions invoked by events, scaled to zero when idle and billed per invocation.",
              "The worked comparison is a checkout flow. Monolith: one POST /checkout call runs in one process - validate cart, charge card, reserve stock, send mail - a single transaction with immediate consistency. Microservices: the orders service calls payments and inventory over the network, publishes an 'order placed' event that the notification service consumes - four deployable units, eventual consistency, but the payments team can redeploy on their own schedule. Serverless: each step is a function triggered by an event - HTTP trigger for checkout, queue trigger for mail - with the platform handling scale; the trade is cold starts (a function idle for minutes may take 300-800 ms to wake) and harder local debugging.",
              "Choosing is the examinable skill, and the honest answer is 'by team size and traffic shape'. Monolith until teams and deploys collide: under about ten engineers and a moderate release cadence, it wins on speed and simplicity. Microservices when independent deployability and team autonomy outweigh operational cost - you inherit distributed transactions, service discovery and observability debt. Serverless for spiky, event-driven, small units of work - image processing, webhook handlers, scheduled jobs - not for long-running stateful flows. Netflix and Amazon are the canonical microservice stories; AWS Lambda the canonical serverless one; and the migration pattern most companies actually follow is modular monolith first, extract services only where the boundaries prove themselves.",
              "Exam framing: expect 'compare monolith and microservices', 'what is serverless and when is it appropriate', or a scenario asking you to choose. Give all three definitions, the checkout-flow contrast, the decision rule, and one trade-off sentence per option. The closing line: architecture is a business decision wearing a technical costume - team size and traffic shape decide, not fashion.",
            ],
            keyTerms: [
              { term: "Monolith", definition: "One codebase deployed as one process - simple, consistent, redeploy-everything releases." },
              { term: "Microservice", definition: "Independently deployable service per business capability, owning its own data." },
              { term: "Serverless / FaaS", definition: "Event-triggered short-lived functions; scale to zero, pay per invocation." },
              { term: "Eventual consistency", definition: "Services agree over time instead of in one transaction - the microservice price." },
              { term: "Cold start", definition: "Latency to instantiate an idle function - the serverless price." },
            ],
            table: {
              caption: "The three architectures side by side.",
              headers: ["Aspect", "Monolith", "Microservices", "Serverless"],
              rows: [
                ["Deploy unit", "one process", "one per capability", "one per function"],
                ["Consistency", "single transaction", "eventual (events)", "eventual (triggers)"],
                ["Scaling", "whole app at once", "per service", "per invocation, to zero"],
                ["Operational load", "lowest", "highest", "lowest - but opaque"],
                ["Best fit", "small teams, fast start", "many teams, independent releases", "spiky event-driven work"],
              ],
            },
            bullets: [
              "Monolith: one process, one transaction, one deploy - fast to start, slow to scale as a team.",
              "Microservices: deploy and scale per capability; cost is distributed transactions and operations.",
              "Serverless: scale to zero and per-invocation billing; cost is cold starts and debugging.",
              "Checkout contrast: one transaction vs service calls plus events vs event-triggered functions.",
              "Decision rule: team size and traffic shape - not fashion - pick the architecture.",
              "The common real path: modular monolith first, extract services where boundaries prove out.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the deployable unit",
              caption: "Three questions at the fork decide the architecture before any code is written.",
              start: "What does the product need?",
              branches: [
                { label: "Small team, fast start", outcome: "monolith - one deploy, one transaction, easy debug", good: true },
                { label: "Many teams, independent releases", outcome: "microservices - deploy per capability, own your data", good: true },
                { label: "Spike-y, event-driven work", outcome: "serverless - scale to zero, pay per invocation", good: true },
                { label: "Microservices with three developers", outcome: "operations overhead swallows the benefit", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Microservices are not a default",
              body: "The most expensive architecture mistake of the decade is a five-person team running forty services. Every network hop is a new failure mode, a new deployment, a new dashboard. Start modular and monolithic; extract a service when a boundary and a team collide - say this sentence in any 'choose an architecture' answer.",
            },
            examQuestions: [
              {
                q: "Compare monolithic, microservices and serverless architectures with their advantages, disadvantages and suitable use cases, using a checkout flow as the running example.",
                marks: 14,
                outline: [
                  "Monolith: single process, single transaction - simple, redeploy-everything cost",
                  "Microservices: per-capability deployables with own databases; eventual consistency",
                  "Serverless: event-triggered functions, scale to zero, per-invocation billing",
                  "Checkout: one POST in-process vs service calls + events vs function triggers",
                  "Trade-offs: debuggability vs team autonomy vs cold starts (300-800 ms)",
                  "Decision rule: team size and traffic shape decide",
                  "Real-world path: modular monolith, extract where boundaries prove out",
                ],
              },
              {
                q: "When is serverless the wrong choice even though it promises zero server management?",
                marks: 7,
                outline: [
                  "Long-running or stateful flows - functions are short-lived",
                  "Consistent high traffic - per-invocation billing exceeds reserved capacity",
                  "Hard latency ceilings - cold starts of 300-800 ms break them",
                  "Complex local debugging and testing story",
                  "Heavy inter-function communication - choreography cost grows",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "The three-tier web architecture and the life of a request",
            body: [
              "Almost every web application is three tiers wearing different clothes. The presentation tier is what runs on the user's device - browser-rendered HTML/CSS/JS or a mobile app - responsible for rendering and interaction. The application tier is the server process holding business logic - validation, rules, orchestration - exposed over HTTP. The data tier is the system of record - PostgreSQL, MongoDB, Redis - responsible for persistence and queries. The tiers are separated by contracts (HTTP + JSON between tiers one and two, queries and drivers between two and three), and that separation is what lets each tier scale and fail independently.",
              "The life of a request is the section's spine and a favourite exam trace. A user clicks 'Place order' at 11:42:03: (1) the client renders the button's state and sends POST /api/orders with a JSON body and an Authorization header; (2) DNS resolved api.foodapp.in to 52.94.x.x and TLS negotiated in 40 ms; (3) the load balancer forwards to one of six API replicas; (4) middleware authenticates the JWT (2 ms) and validates the body; (5) the route handler runs business logic - stock check, price total - issuing three queries to PostgreSQL (11 ms) and one cached read from Redis (1 ms); (6) the order row is committed, an event is published; (7) the server answers 201 Created with the order JSON in 23 ms total; (8) the client renders the confirmation screen. Eight steps, one trace - memorise the shape with the numbers.",
              "Why tiers matter is a scaling and failure argument. Presentation scales by CDN and static hosting - it is cheap and global. Application tier scales horizontally because it is stateless - add replicas behind the balancer. Data tier scales vertically first, then by read replicas and sharding - it is the hardest to scale, which is why caches exist to keep reads off it. Failure follows the same boundaries: a crashed replica loses no data because state is in the data tier; a slow database backs up the app tier; a broken deploy rolls back without touching data. Every later topic in this subject - APIs, auth, containers, observability - lives at one of these three seams.",
              "Exam framing: expect 'explain the three-tier architecture' or 'trace a request through a web application'. Draw the three boxes, name the contract between each pair, then run the timed trace. The sentence examiners reward: tiers are separated by contracts so each can scale, fail and deploy independently.",
            ],
            keyTerms: [
              { term: "Presentation tier", definition: "Client-side UI - browser or mobile app - rendering and interaction." },
              { term: "Application tier", definition: "Server-side business logic exposed over HTTP; stateless so it scales horizontally." },
              { term: "Data tier", definition: "System of record - databases and caches; hardest to scale, hence cached reads." },
              { term: "Load balancer", definition: "Distributes requests across app-tier replicas; the entry point of the tier." },
              { term: "Horizontal scaling", definition: "Adding replicas of the stateless tier instead of enlarging one machine." },
            ],
            table: {
              caption: "Tier responsibilities and scaling paths.",
              headers: ["Tier", "Runs on", "Owns", "Scaling path"],
              rows: [
                ["Presentation", "browser / device", "rendering, interaction", "CDN + static hosting"],
                ["Application", "API replicas", "business logic, decisions", "stateless replicas behind balancer"],
                ["Data", "PostgreSQL + Redis", "truth and fast reads", "vertical -> read replicas -> shards"],
              ],
            },
            bullets: [
              "Three tiers: presentation (render), application (decide), data (remember).",
              "Contracts: HTTP+JSON between client and API; drivers and queries between API and database.",
              "Request trace: click -> DNS+TLS 40 ms -> balancer -> middleware auth 2 ms -> logic + SQL 11 ms -> 201 in 23 ms.",
              "Scaling asymmetry: CDN for static, replicas for stateless app, replicas/shards + cache for data.",
              "Failure isolation: crash a replica, lose no data; slow database backs up only the app tier.",
              "Every later topic sits at one of the three seams - APIs, auth, containers, observability.",
            ],
            diagram: {
              kind: "layers",
              title: "The three-tier stack, top to bottom",
              caption: "Index 0 is what the user touches; each lower layer is one contract away from the one above.",
              layers: [
                { label: "Presentation tier", note: "browser / mobile app - renders UI, holds no truth" },
                { label: "Application tier", note: "API replicas behind a load balancer - business logic, stateless" },
                { label: "Data tier", note: "PostgreSQL + Redis + queues - system of record and fast reads" },
              ],
            },
            callout: {
              type: "exam",
              title: "Trace with numbers",
              body: "A bare 'request goes to the server and back' scores half. The full-marks trace names all eight steps with two or three timings - TLS 40 ms, auth 2 ms, queries 11 ms, response 23 ms - and ends with the independence sentence. Numbers convert a description into an engineering answer.",
            },
            examQuestions: [
              {
                q: "Explain the three-tier web architecture and trace one complete request (click to rendered confirmation) through all tiers with the contracts and approximate timings involved.",
                marks: 14,
                outline: [
                  "Presentation tier: renders and interacts, holds no truth",
                  "Application tier: stateless business logic behind a load balancer",
                  "Data tier: system of record plus cache for fast reads",
                  "Contracts: HTTP+JSON client-to-API, drivers API-to-database",
                  "Trace: click -> DNS+TLS 40 ms -> balancer -> JWT check 2 ms",
                  "Logic: stock check, price total, 3 SQL queries 11 ms, Redis 1 ms",
                  "Response: 201 Created in 23 ms; client renders confirmation",
                ],
              },
              {
                q: "Why does the data tier scale differently from the application tier?",
                marks: 7,
                outline: [
                  "App tier is stateless - replicas are interchangeable",
                  "Data tier holds truth - consistency constraints limit naive replication",
                  "Scaling path: vertical first, then read replicas, then sharding",
                  "Caches (Redis) keep hot reads off the database",
                  "Failure: data loss is permanent, so the tier changes conservatively",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "HTTP - verbs, status codes and headers as the contract",
            body: [
              "HTTP is the contract every modern application speaks, and its grammar has three parts. Verbs carry intent: GET reads without side effects (safe, cacheable), POST creates or triggers, PUT replaces a resource in full, PATCH modifies partially, DELETE removes. Status codes carry verdicts in families: 2xx success (200 OK, 201 Created, 204 No Content), 3xx redirection (301 permanent, 302 temporary, 304 not-modified for caches), 4xx client error (400 bad syntax, 401 unauthenticated, 403 forbidden, 404 missing, 422 unprocessable, 429 rate-limited), 5xx server error (500 crash, 502 bad gateway, 503 unavailable). Headers carry metadata: Authorization for tokens, Content-Type for body format, Cache-Control for freshness, CORS headers for cross-origin permission.",
              "A worked trace makes the grammar concrete. Create an order: POST /api/orders, body {\"sku\": \"KB-01\", \"qty\": 2}, header Authorization: Bearer eyJ...; server answers 201 Created, header Location: /api/orders/1042, body {\"id\": 1042, \"status\": \"confirmed\", \"total\": 898}. Read it: GET /api/orders/1042 answers 200 with Cache-Control: max-age=30. Try to delete someone else's order: DELETE /api/orders/1042 answers 403 Forbidden - authenticated but not authorised, which is exactly the 401/403 distinction examiners probe. Send qty: \"two\" instead of a number: 422 Unprocessable Entity with a validation message. The five-case trace teaches the contract better than any table memorised alone.",
              "Two HTTP properties shape everything downstream. It is stateless: each request carries everything the server needs (that is why authentication tokens ride in headers, 3.4), which is what lets any replica serve any request. And it is a cacheable protocol: GET responses can declare freshness with Cache-Control and validators (ETag, If-None-Match), letting CDNs and browsers serve repeats without hitting the server - a 304 answer moves bytes on no data. REST (detailed in 3.2) is the style that uses this grammar deliberately: resources as URLs, verbs as actions, status codes as outcomes.",
              "Exam framing: expect 'explain HTTP methods with examples', 'list important status codes with scenarios', or 'what makes HTTP stateless and why does it matter'. Give the verb table with the safe/idempotent annotations, the five-case trace, and the statelessness-to-scaling sentence. The distinction pair to nail: 401 means 'who are you', 403 means 'I know who you are - no'.",
            ],
            keyTerms: [
              { term: "Idempotent method", definition: "Repeating the request has the same effect as one call - GET, PUT, DELETE are; POST is not." },
              { term: "401 vs 403", definition: "401 unauthenticated ('who are you'); 403 forbidden ('I know you - denied')." },
              { term: "ETag", definition: "A response fingerprint; If-None-Match turns a 200 into a 304 when unchanged." },
              { term: "CORS headers", definition: "Access-Control-* headers that permit a browser on another origin to call the API." },
              { term: "Statelessness", definition: "No session memory between requests - the property that makes replica scaling work." },
            ],
            table: {
              caption: "The verbs and the status-code families you must be able to deploy.",
              headers: ["Item", "Meaning", "Idempotent?", "Typical answer"],
              rows: [
                ["GET", "read a resource", "yes, safe", "200 + body"],
                ["POST", "create / trigger", "no", "201 + Location"],
                ["PUT", "replace in full", "yes", "200 or 204"],
                ["PATCH", "modify partially", "mostly yes", "200"],
                ["DELETE", "remove", "yes", "204"],
                ["4xx family", "client error", "-", "400 / 401 / 403 / 404 / 422 / 429"],
                ["5xx family", "server error", "-", "500 / 502 / 503"],
              ],
            },
            bullets: [
              "Verbs carry intent: GET reads, POST creates, PUT replaces, PATCH patches, DELETE removes.",
              "Status families: 2xx success, 3xx redirect/cache, 4xx caller's mistake, 5xx server's fault.",
              "Worked trace: 201 + Location on create; 200 with max-age=30 on read; 403 on someone else's order.",
              "401 vs 403: unauthenticated vs forbidden - the pair examiners always probe.",
              "Statelessness: every request self-contained, so any replica can serve it.",
              "Cacheability: Cache-Control + ETag turn repeat GETs into 304s at the CDN edge.",
            ],
            diagram: {
              kind: "flow",
              title: "One HTTP exchange, start to finish",
              caption: "The five-case trace as a flow - each branch teaches a different part of the contract.",
              steps: [
                { label: "Client", note: "POST /api/orders + JSON + Bearer token" },
                { label: "TLS + balancer", note: "40 ms setup; route to a replica" },
                { label: "Auth + validate", note: "JWT verified; bad qty -> 422" },
                { label: "Business logic", note: "create order; someone else's -> 403" },
                { label: "Respond", note: "201 + Location: /api/orders/1042" },
              ],
            },
            callout: {
              type: "exam",
              title: "Say 'idempotent' with the verbs",
              body: "Listing verbs earns half; annotating them earns the rest - GET safe and idempotent, PUT and DELETE idempotent, POST neither. The one-line reason: idempotency is what lets a client retry a timed-out request safely, and retries are half of real-world HTTP.",
            },
            examQuestions: [
              {
                q: "Explain HTTP methods and the status-code families with a five-case worked trace of an order API (create, read, forbidden delete, validation failure, success headers).",
                marks: 14,
                outline: [
                  "Verbs: GET/POST/PUT/PATCH/DELETE with intents",
                  "Idempotency annotations and why retries need them",
                  "Status families: 2xx, 3xx, 4xx, 5xx with members",
                  "Create: 201 Created + Location header",
                  "Read: 200 with Cache-Control: max-age=30",
                  "Forbidden delete: 403 vs 401 distinction",
                  "Validation failure: 422 with error body; server fault: 500/503",
                ],
              },
              {
                q: "Why is HTTP's statelessness a feature for scaling rather than a limitation?",
                marks: 7,
                outline: [
                  "Each request carries all context (tokens, body) - no session memory needed",
                  "Any replica can serve any request - balancers need no affinity",
                  "Replicas can crash and be replaced without losing sessions",
                  "State moved to shared tiers: databases, caches, token stores",
                  "Contrast: sticky sessions pin users to one replica - scaling pain",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "The delivery loop - Agile, CI/CD and DevOps",
            body: [
              "Modern applications are delivered by a loop, not a waterfall. Agile organises the work: short iterations (one to two week sprints), a prioritised backlog, working software every iteration, and planning that expects requirements to change. CI/CD automates the path from commit to production: continuous integration merges and tests every push (build in 4 minutes, unit tests in 2, lint and type checks in 1); continuous delivery keeps every passing build deployable; continuous deployment pushes it live automatically. DevOps is the culture that closes the loop: the team that builds it runs it - deployment, monitoring and on-call included.",
              "The worked loop with numbers. A developer merges a pull request at 10:00: the pipeline checks out, installs dependencies from lockfile (cached, 40 seconds), builds (90 seconds), runs 412 unit tests (2 minutes), spins up the app with a test database and runs 38 integration tests (3 minutes), builds a Docker image tagged with the commit SHA (60 seconds), pushes it to the registry, and deploys to staging where 12 end-to-end tests run (4 minutes). Total: about 11 minutes from merge to staging. A canary release routes 5 percent of production traffic to the new version for 30 minutes; error rate and latency are compared against the baseline; a clean canary promotes to 100 percent; a 2 percent error jump auto-rolls back in 90 seconds. Friday release freezes exist because the loop makes releases boring - boring is the goal.",
              "The DevOps loop earns its place in this subject because it is the difference between writing an app and operating one. Deployment strategies are the loop's vocabulary: rolling (replace replicas gradually), blue-green (two full environments, switch the router), canary (percentage traffic to the new version), feature flags (deploy code dark, release progressively). Observability (Unit V) is the loop's senses - you cannot auto-rollback on an error-rate jump you cannot measure. And the security gate belongs in the pipeline, not the end: dependency scanning and secret scanning run at the CI stage, which is the cyber-security student's home turf in this subject.",
              "Exam framing: expect 'explain CI/CD and its stages', 'compare deployment strategies', or 'what is DevOps'. Define the three continuous terms distinctly (integration vs delivery vs deployment), run the 11-minute pipeline with its stage timings, and contrast rolling, blue-green, canary and flags. The sentence examiners reward: 'you build it, you run it' - DevOps is ownership of the loop, not a job title.",
            ],
            keyTerms: [
              { term: "Continuous integration", definition: "Every push is merged, built and tested automatically; broken builds block." },
              { term: "Continuous delivery", definition: "Every passing build is deployable on demand; deployment is one decision away." },
              { term: "Continuous deployment", definition: "Every passing build deploys to production automatically." },
              { term: "Canary release", definition: "Route a small traffic percentage to the new version; promote or auto-rollback on metrics." },
              { term: "Feature flag", definition: "Deploy code dark, then release progressively by toggling - decouples deploy from release." },
            ],
            table: {
              caption: "Pipeline stages - time, artefact, gate.",
              headers: ["Stage", "Duration", "Artefact", "Gate"],
              rows: [
                ["Install + build", "40 s + 90 s", "build output", "lint + type check"],
                ["Unit tests", "2 min (412 tests)", "green report", "failure blocks merge"],
                ["Integration", "3 min (38 tests)", "service-backed report", "real DB + queue"],
                ["Package + scan", "60 s", "image by digest", "CVE gate"],
                ["E2E on staging", "4 min (12 journeys)", "staging deploy", "journey pass"],
              ],
            },
            bullets: [
              "Agile: short sprints, prioritised backlog, working software each iteration, change expected.",
              "CI: merge + build + test every push; pipeline stages have measurable timings.",
              "Delivery vs deployment: deployable-on-demand vs deploying automatically - exams probe the difference.",
              "Worked pipeline: cached install 40 s, build 90 s, 412 unit tests 2 min, 38 integration tests 3 min, image 60 s, e2e 4 min.",
              "Strategies: rolling, blue-green, canary (5 percent for 30 min), feature flags - each with a rollback story.",
              "Security gates belong in the pipeline: dependency and secret scanning at CI, not after release.",
            ],
            diagram: {
              kind: "cycle",
              title: "The DevOps loop",
              caption: "Commit to observed production and back - the loop is the product's heartbeat.",
              steps: [
                { label: "Commit / merge", note: "pull request reviewed" },
                { label: "CI build + tests", note: "unit, integration, lint, scans" },
                { label: "Package", note: "Docker image tagged with commit SHA" },
                { label: "Deploy", note: "canary 5 percent -> promote" },
                { label: "Monitor", note: "error rate, latency, logs" },
                { label: "Rollback / fix", note: "auto-rollback in 90 s on regression" },
              ],
            },
            callout: {
              type: "exam",
              title: "Three 'continuous' words, three definitions",
              body: "CI = every push built and tested. Continuous delivery = deployable on demand. Continuous deployment = deployed automatically. Examiners open with this trio because conflating them is the most common slip - write the three definitions as separate lines before any pipeline diagram.",
            },
            examQuestions: [
              {
                q: "Explain the CI/CD pipeline stage by stage with realistic timings, and compare rolling, blue-green and canary deployment strategies with their rollback stories.",
                marks: 14,
                outline: [
                  "CI stages: checkout, cached install 40 s, build 90 s, lint + unit tests 2 min",
                  "Integration stage: app + test database, 38 tests in 3 minutes",
                  "Package: Docker image tagged with commit SHA, pushed to registry",
                  "CD: staging deploy + 12 end-to-end tests, 4 minutes",
                  "Canary: 5 percent traffic for 30 minutes, metrics compared",
                  "Rollback: automatic in 90 s on error-rate jump; blue-green = instant switch",
                  "Rolling vs blue-green vs canary: cost, speed and risk contrast",
                ],
              },
              {
                q: "Differentiate continuous integration, continuous delivery and continuous deployment with one sentence each and one example artefact.",
                marks: 7,
                outline: [
                  "CI: every push merged, built, tested - artefact: green build report",
                  "Continuous delivery: always-deployable build - artefact: staged release candidate",
                  "Continuous deployment: auto-release on green - artefact: production deploy log",
                  "Delivery leaves a human decision; deployment removes it",
                  "Flags blur the line: deploy always, release by toggle",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "The developer toolchain - Git, runtimes and containers",
            body: [
              "The toolchain is the subject's laboratory, and four tools carry most of it. Git is version control: commits are snapshots, branches are parallel lines of work, merges reconcile them; the pull-request workflow - branch, commit, push, review, merge - is how modern teams collaborate. Runtimes execute code: Node.js runs JavaScript outside the browser with an event loop built for I/O-heavy work, Python serves data-heavy endpoints, and each runtime ships a package manager (npm, pip) whose lockfile pins exact versions so every machine installs the same tree. Editors (VS Code) are workbenches: language servers, linting on save, integrated debuggers and terminals.",
              "The worked Git trace. A feature branch: git checkout -b feat/order-total; three commits (git commit -m with messages that say why); push and open a pull request at 09:40; CI runs the 1.5 pipeline on the branch; two reviewers approve one inline change; rebase onto main to keep history linear (git rebase main), then merge. Count the artefacts: 3 commits, 1 review thread, 1 pipeline run, 0 broken mains. The disaster-recovery commands every student should be able to name: git stash for parking work, git revert for a public-history undo (never rewrite main with reset), git bisect to find the commit that introduced a bug by binary search - 500 commits in about 9 checks.",
              "Containers complete the toolchain because they make 'works on my machine' disappear. A Docker image packages the runtime, dependencies and code into an immutable artefact built from a Dockerfile; the same image runs identically on a laptop, a CI runner and production - which is why the 1.5 pipeline builds one and Unit IV builds whole platforms on them. The daily loop: edit code, run tests locally in containers, commit, push; the pipeline does the rest. The exam-facing claim: reproducibility is the toolchain's product - lockfile pins dependencies, image pins the runtime, pipeline pins the path to production.",
              "Exam framing: expect 'explain the version-control workflow', 'what problem do containers solve', or 'role of a package manager and lockfile'. Give the branch-commit-review-rebase trace with its artefact counts, the three rescue commands with when each is right, and the reproducibility chain. The sentence examiners reward: main is always deployable - branches are where risk lives.",
            ],
            keyTerms: [
              { term: "Pull request", definition: "A proposed merge with review, CI checks and a discussion thread attached." },
              { term: "Lockfile", definition: "Pinned dependency versions (package-lock.json) so every install is identical." },
              { term: "Docker image", definition: "Immutable runtime+dependencies+code artefact; identical on laptop, CI and production." },
              { term: "git bisect", definition: "Binary-search commit history for the commit that introduced a bug." },
              { term: "Rebase vs merge", definition: "Rebase linearises history before review; merge preserves the branch shape." },
            ],
            codeExample: {
              language: "bash",
              caption: "feature.sh - the branch-to-merge loop and the three rescues",
              code: `git checkout -b feat/order-total        # branch off main
git commit -m "round totals to paise before tax (#412)"
git push -u origin feat/order-total     # PR opens; CI runs on branch
git fetch origin && git rebase origin/main   # linear history pre-merge

# the three rescues:
git stash                               # park uncommitted work mid-task
git revert 4f2a9c1                      # undo in shared history - never reset main
git bisect start                        # binary-search the commit that broke it`,
            },
            bullets: [
              "Git workflow: branch -> commit -> push -> PR review -> CI green -> rebase -> merge.",
              "Rescue commands: stash (park work), revert (undo in public history), bisect (find the bad commit).",
              "Never rewrite main with reset or force-push - revert keeps the history honest.",
              "Runtimes + package managers: Node/npm, Python/pip; the lockfile makes installs identical.",
              "Dockerfile builds an immutable image: same bytes on laptop, CI and production.",
              "Reproducibility chain: lockfile pins deps, image pins runtime, pipeline pins the path.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The daily developer pipeline",
              caption: "From edit to merged main - every stage leaves a named artefact.",
              stages: [
                { label: "Branch", note: "feat/order-total off main" },
                { label: "Commit x3", note: "messages say why, not what" },
                { label: "Push + PR", note: "review thread, CI on branch" },
                { label: "Rebase", note: "linear history onto main" },
                { label: "Merge", note: "main deployable again" },
              ],
            },
            callout: {
              type: "tip",
              title: "Commit messages are documentation",
              body: "'Fix bug' documents nothing; 'round order totals to paise before tax to avoid 1-paise mismatches (#412)' documents a decision. Examiners and teammates read history the same way - the why is the message. One sentence in an answer about Git shows you know commits are records, not saves.",
            },
            examQuestions: [
              {
                q: "Describe the modern Git collaboration workflow from branch to merge, and explain three commands used to recover from mistakes with their correct situations.",
                marks: 14,
                outline: [
                  "Branch off main: feat/order-total",
                  "Commits with why-messages; push and open a pull request",
                  "CI runs the pipeline on the branch; reviewers approve or request changes",
                  "Rebase onto main for linear history, then merge",
                  "git stash: park uncommitted work mid-task",
                  "git revert: undo in shared history - never reset main",
                  "git bisect: binary-search 500 commits in about 9 checks",
                ],
              },
              {
                q: "What exactly does a Docker image pin, and why does that make 'works on my machine' disappear?",
                marks: 7,
                outline: [
                  "Image pins runtime version, OS libraries, dependencies and code bytes",
                  "Built once from a Dockerfile; immutable and hash-addressed",
                  "Laptop, CI runner and production run the identical artefact",
                  "Lockfile pins the dependency tree inside that runtime",
                  "Environment drift becomes a build-time error, not a runtime mystery",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "JSON and the data contract between tiers",
            body: [
              "JSON (JavaScript Object Notation) is the data contract of modern development: six types - object, array, string, number, boolean, null - and one job, representing structured data as text any language can parse. Its dominance is compositional: browsers parse it natively (JSON.parse), every language has a fast serializer, HTTP bodies carry it with Content-Type: application/json, databases store it (PostgreSQL jsonb), queues carry it, configuration files are written in it. The worked payload: {\"id\": 1042, \"items\": [{\"sku\": \"KB-01\", \"qty\": 2, \"price\": 449.0}], \"total\": 898, \"placedAt\": \"2026-03-12T11:42:03Z\"} - nested, typed, and the same bytes whether the caller is a React client, a Flutter app or a cron job.",
              "Designing the contract is the examinable craft. Dates as ISO 8601 strings in UTC ('2026-03-12T11:42:03Z') - never local time, never locale formats. Money as integer paise or decimal strings, never binary floats (0.1 + 0.2 = 0.30000000000000004 - a classic arithmetic slip). Enumerations as lowercase strings, not magic numbers, so logs stay readable. Consistent casing (camelCase in JSON bodies), consistent error envelope ({\"error\": {\"code\": \"VALIDATION\", \"message\": \"qty must be a number\"}}), and versioned shapes - adding fields is safe, removing or renaming them breaks clients. Validation happens at the boundary with a schema (JSON Schema, zod, Pydantic) so the interior of the application trusts its inputs.",
              "The alternatives frame JSON's limits honestly. XML (Unit II heritage) carries namespaces and schemas but is verbose; YAML wins for configuration (Docker Compose, Kubernetes) because humans edit it, but its indentation-sensitivity and implicit typing make it a poor API format; Protocol Buffers trade JSON's readability for binary compactness and typed contracts (3-10x smaller payloads) in service-to-service paths; CSV survives for bulk tabular exports. The exam-facing choice rule: humans and browsers on the wire - JSON; machines talking to machines at high volume - Protobuf or gRPC; humans writing infrastructure - YAML; bulk data exchange - CSV.",
              "Exam framing: expect 'explain JSON with an example', 'compare JSON and XML', or 'design a payload for an order API'. Give the six types, the worked order payload, the four contract-design rules (UTC dates, integer money, string enums, versioned fields), and the format-choice rule. The sentence examiners reward: the schema is the contract - validate at the boundary and trust it inside.",
            ],
            keyTerms: [
              { term: "JSON", definition: "Text format with six types - object, array, string, number, boolean, null - parsed everywhere." },
              { term: "ISO 8601 UTC", definition: "The only acceptable date shape on the wire: 2026-03-12T11:42:03Z." },
              { term: "Error envelope", definition: "A consistent error shape ({code, message}) every client can handle the same way." },
              { term: "Schema validation", definition: "Checking payloads against a declared contract at the boundary (JSON Schema, zod, Pydantic)." },
              { term: "Protocol Buffers", definition: "Binary, schema-first serialization - smaller and typed, used by gRPC." },
            ],
            codeExample: {
              language: "json",
              caption: "order.json - the worked contract payload with the four rules applied",
              code: `{
  "id": 1042,
  "items": [
    { "sku": "KB-01", "qty": 2, "pricePaise": 44900 }
  ],
  "totalPaise": 99700,
  "status": "confirmed",
  "placedAt": "2026-03-12T11:42:03Z"
}
// money as integer paise (never floats), enum as a lowercase string,
// date as ISO 8601 UTC, flat-and-additive shape clients can trust`,
            },
            bullets: [
              "Six types, one job: structured data as text any language parses.",
              "Worked payload: nested order object with ISO-UTC timestamp and integer-total price.",
              "Contract rules: UTC ISO dates, integer paise for money, string enums, additive versioning.",
              "Floats lie: 0.1 + 0.2 = 0.30000000000000004 - money never rides on binary floats.",
              "Validate at the boundary with a schema; the interior trusts the contract.",
              "Format choice: JSON for the wire, YAML for config, Protobuf/gRPC for machine-to-machine, CSV for bulk.",
            ],
            diagram: {
              kind: "matrix",
              title: "Where each format fits",
              caption: "Plot by who writes it and how strictly it must be typed - the choice becomes obvious.",
              axes: { x: "Schema strictness (loose -> strict)", y: "Primary writer (machine -> human)" },
              quadrants: [
                { label: "JSON", note: "browser/service payloads - humans read, machines write" },
                { label: "Protocol Buffers / gRPC", note: "machine-to-machine, strict types, compact" },
                { label: "YAML", note: "humans write infrastructure: Compose, Kubernetes" },
                { label: "CSV / logs", note: "loose, bulk, machine-to-machine exports" },
              ],
            },
            callout: {
              type: "warning",
              title: "Money is not a float",
              body: "The classic payload slip: price: 449.10 as a float. Binary floats cannot represent 449.10 exactly, totals drift by a paise, and finance reconciliation fails. Ship integer paise (44910) or decimal strings, convert at the edge - one line in any API-design answer that examiners notice.",
            },
            examQuestions: [
              {
                q: "Explain JSON's structure with a worked order payload, and state four contract-design rules (dates, money, enums, versioning) that keep clients and services compatible.",
                marks: 14,
                outline: [
                  "Six types: object, array, string, number, boolean, null",
                  "Worked payload: id, items array with sku/qty/price, total, placedAt",
                  "Dates: ISO 8601 UTC strings - 2026-03-12T11:42:03Z",
                  "Money: integer paise or decimal strings, never binary floats (0.1+0.2 example)",
                  "Enums: lowercase strings, not magic numbers - logs stay readable",
                  "Versioning: additive changes safe; renames/removals break clients",
                  "Boundary validation with JSON Schema/zod before trusting inputs",
                ],
              },
              {
                q: "Compare JSON, XML, YAML and Protocol Buffers on verbosity, typing and typical use.",
                marks: 7,
                outline: [
                  "JSON: compact, native in browsers - the API wire format",
                  "XML: namespaces and schema heritage - verbose, document-flavoured",
                  "YAML: human-edited configuration (Compose, Kubernetes); indentation-sensitive",
                  "Protobuf: binary, schema-first, 3-10x smaller - gRPC transport",
                  "Choice rule: wire = JSON, config = YAML, M2M = Protobuf, bulk = CSV",
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
      title: "Frontend Development",
      summary:
        "Unit II builds the client: the browser as a runtime with its render pipeline and the DOM, HTML5 structure and semantics with forms, CSS3's box model, layout systems and responsive design, JavaScript essentials from types through async, DOM manipulation and the event model, the component model that frameworks like React industrialise, and the performance and accessibility discipline that separates a demo from a product.",
      chapter: {
        number: "02",
        title: "Building the Client",
        intro:
          "Unit II covers the browser render pipeline (parse HTML to DOM, CSS to CSSOM, layout, paint, composite), HTML5 semantic elements and forms with validation, the CSS box model, flexbox and grid layout, media queries and responsive design, JavaScript types, functions and async/await, DOM selection, manipulation and event handling with delegation, the component model - props, state and reconciliation in React - and performance and accessibility: budgets, lazy loading and the WCAG checklist.",
        inOneBreath:
          "The browser is a runtime: HTML becomes the DOM, CSS the CSSOM, and layout-paint-composite turns them into pixels - blocking JS costs frames, so async and defer matter. Semantics are accessibility: nav, main, button mean something to assistive tech and SEO alike. The box model plus flex/grid solve layout; media queries make it responsive. JavaScript is single-threaded - the event loop is why async/await exists. DOM work is select-listen-mutate, and frameworks industrialise exactly that cycle: state changes, re-render, diff, patch. Ship within a performance budget (LCP under 2.5 s, JS under 200 KB) and an accessibility checklist (contrast 4.5:1, keyboard reachability, labels on inputs).",
        sections: [
          {
            number: "2.1",
            title: "The browser as a runtime - render pipeline and the DOM",
            body: [
              "The browser is not a document viewer; it is a runtime, and its render pipeline is the exam's favourite frontend diagram. Parse HTML into the DOM (Document Object Model - the live tree of nodes JavaScript reads and writes); parse CSS into the CSSOM; combine both into a render tree of visible nodes; run layout to compute the geometry of every box; paint the pixels into layers; composite the layers onto the screen. Each stage feeds the next, and the cost profile matters: re-layout (reflow) after a geometry change is the expensive path, re-paint is cheaper, and a pure composite (transform/opacity animations) is cheapest - which is why performant animations animate transform and opacity, never width or top.",
              "The worked trace with numbers. A 120 KB HTML page with two stylesheets and one script: HTML parse and DOM build in about 40 ms; CSS parse 15 ms; layout of 800 boxes 25 ms; paint 30 ms - first contentful paint around 110 ms on a mid-range laptop. Now the blocking case: a 400 KB synchronous script in the head halts parsing until it downloads and executes - on a 3G connection that is 1.8 seconds of blank screen. The fixes are attributes: defer runs the script after parsing in order, async runs it when ready out of order, and module scripts defer by default. Loading a render-blocking stylesheet from a third party that takes 600 ms pushes every pixel 600 ms later - hence the audit habit: Lighthouse flags blocking resources, and the fix is usually one attribute or a preload hint.",
              "The DOM deserves its own paragraph because everything else in this unit touches it. It is a live tree: scripts hold references to nodes, styles apply through selectors, events bubble through it (2.5), and frameworks maintain their own virtual copy to batch updates against it (2.6). The DOM API is the contract: document.querySelector('#cart') selects, element.addEventListener('click', fn) observes, element.textContent and classList mutate. DevTools is the examiner's microscope: the Elements panel shows the live DOM, the Performance panel records a flame chart where long tasks (over 50 ms) show exactly which stage is slow, and the Layout Shift regions show why a page jumps.",
              "Exam framing: expect 'explain the browser rendering pipeline' or 'what is the DOM and how do scripts interact with it'. Draw the six stages in order, run the trace with the blocking-script contrast and the defer/async fix, and name the reflow-repaint-composite cost ladder. The sentence examiners reward: the DOM is the live interface between document, styles, events and scripts.",
            ],
            keyTerms: [
              { term: "DOM", definition: "The live tree of document nodes that scripts read and write." },
              { term: "Reflow / re-layout", definition: "Recomputing geometry after a change - the expensive stage to trigger." },
              { term: "Composite", definition: "Merging painted layers - cheapest to change; animate transform/opacity." },
              { term: "defer / async", definition: "Script attributes: defer runs after parse in order; async runs when fetched, out of order." },
              { term: "Long task", definition: "Any main-thread task over 50 ms - visible in the Performance flame chart." },
            ],
            table: {
              caption: "The render pipeline - stage, input, cost of re-running it.",
              headers: ["Stage", "Input -> output", "Typical cost", "What forces it again"],
              rows: [
                ["Parse HTML", "bytes -> DOM", "about 40 ms / 120 KB", "document changes"],
                ["Parse CSS", "stylesheets -> CSSOM", "about 15 ms", "new stylesheet rules"],
                ["Style (recalculate)", "DOM + CSSOM -> render tree", "per changed node", "class/attribute changes"],
                ["Layout", "tree -> geometry", "about 25 ms / 800 boxes", "size or position changes"],
                ["Paint", "geometry -> pixels per layer", "about 30 ms", "colour/shadow changes"],
                ["Composite", "layers -> screen", "cheapest", "transform/opacity animations"],
              ],
            },
            bullets: [
              "Pipeline: parse HTML -> DOM, parse CSS -> CSSOM, render tree, layout, paint, composite.",
              "Cost ladder: re-layout is expensive, re-paint cheaper, re-composite cheapest.",
              "Blocking script in the head = blank screen; defer/async/module are the fixes.",
              "Trace: 120 KB page renders at about 110 ms; a 400 KB sync script adds 1.8 s on 3G.",
              "Animate transform and opacity - animating width/top forces layout every frame.",
              "DevTools: Elements shows the live DOM, Performance shows long tasks over 50 ms.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The browser render pipeline",
              caption: "Bytes to pixels in six stages; the cheap-to-retrigger stages sit at the bottom.",
              stages: [
                { label: "Parse HTML", note: "bytes -> DOM tree" },
                { label: "Parse CSS", note: "stylesheets -> CSSOM" },
                { label: "Render tree", note: "visible nodes + styles" },
                { label: "Layout", note: "compute geometry (reflow)" },
                { label: "Paint", note: "fill pixels per layer" },
                { label: "Composite", note: "merge layers to screen" },
              ],
            },
            callout: {
              type: "tip",
              title: "The cost ladder answers performance questions",
              body: "When asked 'why is animating width slow?', answer with the ladder: width changes force layout -> paint -> composite every frame; transform composites only. One diagram, one sentence - the full-marks shape for any rendering question.",
            },
            examQuestions: [
              {
                q: "Explain the browser rendering pipeline stage by stage, with the cost of re-triggering each, and show how a render-blocking script delays first paint and how defer/async fix it.",
                marks: 14,
                outline: [
                  "Parse HTML -> DOM; parse CSS -> CSSOM",
                  "Render tree = visible nodes with computed styles",
                  "Layout computes geometry - reflow is the expensive stage",
                  "Paint fills pixels per layer; composite merges layers",
                  "Cost ladder: layout > paint > composite; animate transform/opacity",
                  "Blocking script: 400 KB sync = 1.8 s blank on 3G",
                  "defer: post-parse in order; async: when fetched; module defaults to defer",
                ],
              },
              {
                q: "What is the DOM and why do frameworks maintain a virtual copy of it?",
                marks: 7,
                outline: [
                  "Live tree of nodes - the interface between document, styles, events, scripts",
                  "Direct mutations force style/layout per change",
                  "Frameworks batch changes: diff virtual tree, patch minimal real DOM",
                  "Result: fewer reflows, predictable state-to-UI mapping",
                  "DevTools Elements panel always shows the real DOM, not the virtual one",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "HTML5 - semantics, structure and forms",
            body: [
              "HTML is the document's skeleton, and HTML5's contribution was vocabulary with meaning. Semantic elements - header, nav, main, article, section, aside, footer - say what a region is, not just how it looks; a div is a neutral box, a nav is 'these are the primary links', and that meaning is machine-readable: screen readers navigate by landmarks, search engines weigh headings, reader modes strip everything else. The document skeleton: doctype html, a head with meta charset, viewport and title, and a body where one h1 per page, hierarchical h2-h4 and one main element give the outline a shape.",
              "Forms are where HTML5 earned its keep, and the worked example is the unit's staple. A checkout form: input type=email triggers a keyboard with @ on mobile and built-in format validation; type=number with min/max/step constrains quantity; required marks fields mandatory; pattern encodes regex rules (pincode: [1-9][0-9]{5}); placeholder hints but never replaces label; and the label-for binding is accessibility law - a label bound to its input means clicking the text focuses the field and screen readers announce it. Validation: the browser blocks submit and shows native messages until constraints pass; novalidate + custom JS gives full control. The accessibility layer: aria-live regions announce dynamic errors, and autocomplete attributes (cc-number, postal-code) earn conversion and compliance points.",
              "Beyond structure, HTML5 replaced plugins: canvas for pixel drawing and charts, video/audio with codec attributes, and the family of storage and offline APIs - localStorage (about 5 MB, persistent, strings only), sessionStorage (cleared with the tab), IndexedDB (structured, asynchronous) - plus the fetch API and WebSocket for communication. The exam-facing line: HTML5 moved the browser from a page renderer to an application platform, which is exactly why frontend became an engineering discipline.",
              "Exam framing: expect 'list semantic elements and their purpose', 'design a validated form', or 'HTML5 features over HTML4'. Give the landmark list with what each means to assistive tech, the checkout-form markup with its constraint attributes, and the platform features. The sentence examiners reward: semantics are accessibility - the meaning you write into the markup is what assistive technology and search engines read.",
            ],
            keyTerms: [
              { term: "Semantic element", definition: "Markup whose name carries meaning - nav, main, article - readable by machines and assistive tech." },
              { term: "Landmark", definition: "A region screen readers navigate by - banner, navigation, main, contentinfo." },
              { term: "Constraint validation", definition: "Browser-enforced input rules: required, type, min/max, pattern." },
              { term: "label-for binding", definition: "Connecting a label to its input so clicking focuses and screen readers announce it." },
              { term: "localStorage", definition: "Persistent string storage of about 5 MB per origin; sessionStorage clears with the tab." },
            ],
            codeExample: {
              language: "html",
              caption: "checkout.html - semantic skeleton with a validated form",
              code: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Checkout - FoodApp</title>
</head>
<body>
  <header><h1>Checkout</h1></header>
  <main>
    <form action="/api/orders" method="post">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" required
             autocomplete="email">

      <label for="qty">Quantity (1-10)</label>
      <input id="qty" name="qty" type="number" min="1" max="10" value="1">

      <label for="pin">Pincode</label>
      <input id="pin" name="pin" type="text" inputmode="numeric"
             pattern="[1-9][0-9]{5}" required autocomplete="postal-code">

      <button type="submit">Place order</button>
    </form>
  </main>
  <footer><p>© 2026 FoodApp</p></footer>
</body>
</html>`,
            },
            bullets: [
              "Landmarks: header/banner, nav/navigation, main, article, aside, footer/contentinfo.",
              "One h1 per page, hierarchical headings - the outline is what SEO and readers parse.",
              "Form constraints: type=email/number, min/max/step, required, pattern - validation without JS.",
              "label-for is accessibility law; autocomplete attributes improve mobile UX and compliance.",
              "Platform APIs: canvas, video/audio, localStorage (about 5 MB), IndexedDB, fetch, WebSocket.",
              "HTML5's shift: page renderer -> application platform - the reason frontend engineering exists.",
            ],
            diagram: {
              kind: "compare",
              title: "Div soup vs semantic structure",
              caption: "Same pixels, different meaning - assistive tech and search engines read the right side.",
              left: {
                heading: "Div soup",
                items: [
                  "class=\"top\", class=\"menu\", class=\"content\"",
                  "Meaning lives in class names only",
                  "Screen readers see anonymous boxes",
                  "Reader modes and SEO guess",
                ],
              },
              right: {
                heading: "Semantic HTML5",
                items: [
                  "header, nav, main, article, footer",
                  "Meaning carried by the elements themselves",
                  "Landmark navigation for assistive tech",
                  "Search engines and reader modes parse structure",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Semantics are accessibility",
              body: "The sentence that closes every HTML answer: semantic markup is not styling preference - it is how screen reader users navigate, how SEO ranks, and how reader modes reconstruct the page. Then name three landmarks and one form constraint; that combination is the full 7-mark shape.",
            },
            examQuestions: [
              {
                q: "Explain HTML5 semantic elements and their accessibility value, and design a checkout form using constraint validation (types, required, pattern, labels).",
                marks: 14,
                outline: [
                  "Landmarks: header, nav, main, article, aside, footer and their roles",
                  "Heading hierarchy: one h1, nested h2-h4",
                  "Div soup vs semantics: what machines actually read",
                  "type=email/number: keyboard + built-in validation",
                  "required, min/max, pattern (pincode [1-9][0-9]{5})",
                  "label-for binding + autocomplete attributes",
                  "Browser blocks submit until constraints pass; novalidate for custom JS",
                ],
              },
              {
                q: "Name four HTML5 platform features that moved the browser from document viewer to application platform.",
                marks: 7,
                outline: [
                  "canvas: pixel drawing, charts, games",
                  "video/audio: media without plugins",
                  "localStorage/IndexedDB: client-side persistence",
                  "fetch + WebSocket: modern communication",
                  "Consequence: full applications, not pages - frontend engineering discipline",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "CSS3 - box model, layout systems and responsive design",
            body: [
              "CSS styles by selector, and everything positions through one mental model: the box model. Every element is a box of content, wrapped in padding, a border, and margin - and box-sizing: border-box makes width include padding and border, which is why every modern stylesheet starts with it. Specificity decides conflicts: inline styles beat ids, ids beat classes, classes beat elements; !important overrides but is a code smell. Cascade order settles ties: later rules win. The worked number: a card with width 300px, padding 16px, border 1px renders 300px wide with border-box but 334px without - the arithmetic that explains half of all layout bugs.",
              "Layout is flexbox and grid, and the choice between them is one sentence: flexbox distributes along one axis (a toolbar, a card row), grid places in two dimensions (a page skeleton). Flexbox vocabulary: justify-content along the main axis, align-items across it, gap for spacing, flex: 1 for a child that takes remaining space. Grid vocabulary: grid-template-columns: repeat(3, 1fr), grid-template-areas for named placement, and auto-fit with minmax(240px, 1fr) for a responsive card grid without a single media query - the recipe that replaces float-era hacks. Position completes the toolbox: relative as anchor, absolute to the anchor, fixed to the viewport, sticky to the scroll.",
              "Responsive design is media queries plus fluid units, and the worked pattern is mobile-first. Base styles target the phone; min-width queries layer on complexity: @media (min-width: 640px) for a two-column layout, (min-width: 1024px) for a sidebar. Fluid units: rem scales with the root font-size (accessibility - users who enlarge text get proportion), percentages and fr track containers, clamp() interpolates (font-size: clamp(1rem, 2.5vw, 1.5rem)). Images respond with max-width: 100% and srcset for resolution switching. The exam-facing standard: test at 360px, 768px and 1280px - the three widths that expose nearly every responsive bug.",
              "Exam framing: expect 'explain the box model with an example', 'compare flexbox and grid', or 'how do you make a layout responsive'. Give the four boxes with the 300/334 arithmetic, the one-axis/two-axes rule with recipes, and the mobile-first pattern with clamp. The sentence examiners reward: border-box plus flex/grid plus min-width queries is the complete modern layout answer.",
            ],
            keyTerms: [
              { term: "Box model", definition: "Content + padding + border + margin; border-box makes width include the inner three." },
              { term: "Specificity", definition: "inline > id > class > element; ties settled by source order." },
              { term: "Flexbox", definition: "One-axis distribution: justify-content, align-items, flex: 1, gap." },
              { term: "CSS Grid", definition: "Two-dimensional placement: template columns/areas, auto-fit + minmax recipes." },
              { term: "clamp()", definition: "Fluid interpolation: clamp(min, preferred, max) - responsive values without queries." },
            ],
            codeExample: {
              language: "css",
              caption: "layout.css - border-box, a flex header, a responsive grid, mobile-first queries",
              code: `*, *::before, *::after { box-sizing: border-box; }

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
}

.card-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;           /* phone: one column */
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

.card {
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

h1 { font-size: clamp(1.25rem, 2.5vw, 1.75rem); }`,
            },
            bullets: [
              "Box model: content + padding + border + margin; border-box keeps width arithmetic sane.",
              "Worked number: 300px width + 16px padding + 1px border = 300px with border-box, 334px without.",
              "Specificity: inline > id > class > element; !important is a code smell.",
              "Flexbox for one axis, grid for two - toolbar vs page skeleton.",
              "Responsive recipe: grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)).",
              "Mobile-first: base = phone, min-width layers at 640/1024; test at 360, 768, 1280.",
            ],
            diagram: {
              kind: "layers",
              title: "The box model, outermost to innermost",
              caption: "Margin, border, padding, content - the four boxes every element owns.",
              layers: [
                { label: "Margin", note: "space outside - pushes neighbours away" },
                { label: "Border", note: "the visible edge and its width" },
                { label: "Padding", note: "space inside - keeps content off the border" },
                { label: "Content", note: "the box the width/height properties size" },
              ],
            },
            callout: {
              type: "exam",
              title: "Do the box arithmetic",
              body: "The question 'explain the box model' is answered with one calculation: width 300, padding 16 both sides, border 1 both sides - content-box renders 334px, border-box renders 300px. Two numbers, one property name, full marks.",
            },
            examQuestions: [
              {
                q: "Explain the CSS box model with the 300px arithmetic, specificity rules, and when to choose flexbox versus grid with one recipe of each.",
                marks: 14,
                outline: [
                  "Four boxes: content, padding, border, margin",
                  "content-box: 300 + 32 + 2 = 334px; border-box: 300px",
                  "Specificity: inline > id > class > element; cascade settles ties",
                  "Flexbox: one-axis distribution - toolbar with justify-content + flex: 1",
                  "Grid: two-dimensional placement - repeat(3, 1fr) or named areas",
                  "Responsive recipe: auto-fit + minmax(240px, 1fr)",
                  "Mobile-first media queries; clamp() for fluid type",
                ],
              },
              {
                q: "Why is box-sizing: border-box the first rule of every modern stylesheet?",
                marks: 7,
                outline: [
                  "Default content-box makes width exclude padding and border",
                  "Designers reason in final width - 300px should render 300px",
                  "Without it, every padding tweak breaks the layout arithmetic",
                  "border-box aligns CSS width with design tools' width",
                  "Applied via universal selector before any component CSS",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "JavaScript essentials - types, functions and async",
            body: [
              "JavaScript is the client's programming language, and its examinable core is small. Types: seven primitives (string, number, boolean, null, undefined, symbol, bigint) plus objects - with the coercion traps that make exam questions: typeof null is 'object', 0.1 + 0.2 is not 0.3, '2' + 2 is '22' while '2' - 2 is 0. let and const replaced var (block scope vs function scope); template literals handle interpolation; destructuring and the spread operator move data between shapes. Functions are values: arrow functions (x => x * 2) differ from declarations in one examinable way - arrow functions do not bind their own this.",
              "Asynchrony is the section's centre of gravity, and it exists because JavaScript is single-threaded. The event loop: the call stack runs synchronous code; I/O (fetch, timers) is handed to the platform; callbacks queue up; the loop picks them up when the stack empties. The evolution: callbacks -> promises (a value that arrives later, with .then/.catch chains) -> async/await, which makes asynchronous code read sequentially: const res = await fetch(url); const data = await res.json(). The worked trace: three sequential awaits each taking 150 ms run in 450 ms, but Promise.all of the three runs in about 160 ms - the sentence that explains why independent calls must be parallelised, and the N+1 problem in miniature.",
              "Error handling and modules complete the core. try/catch around await catches rejection; unhandled promise rejections crash Node processes, so every await chain ends in a catch or middleware. Modules: ES import/export with one default export per module and named exports otherwise; bundlers (Vite, webpack) resolve and minify them into the 2.1 pipeline. The DOM-facing pattern this unit feeds: fetch data, map it to DOM nodes, attach handlers - which is 2.5's subject and the reason frameworks exist.",
              "Exam framing: expect 'explain the event loop with async/await', 'Promise.all vs sequential awaits', or the coercion traps. Give the single-threaded premise, the callback-promise-async evolution, the 450 ms versus 160 ms arithmetic, and the error-handling discipline. The sentence examiners reward: asynchronous code queues work for later - the event loop runs it when the stack clears.",
            ],
            keyTerms: [
              { term: "Event loop", definition: "Runs queued callbacks when the call stack empties - the single-threaded scheduler." },
              { term: "Promise", definition: "A value that arrives later; then/catch chain, async/await sugar over it." },
              { term: "Promise.all", definition: "Runs independent async work concurrently - rejects fast on first failure." },
              { term: "Arrow function", definition: "Compact function expression that does not bind its own this." },
              { term: "Block scope", definition: "let/const live inside their block - the fix for var's function-scope leaks." },
            ],
            codeExample: {
              language: "javascript",
              caption: "fetch-menu.js - sequential vs parallel awaits with the timing difference",
              code: `async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(res.status + " " + url);
  return res.json();
}

// sequential: about 450 ms (3 x 150 ms)
const menu = await getJSON("/api/menu");
const offers = await getJSON("/api/offers");
const user = await getJSON("/api/me");

// parallel: about 160 ms - independent calls run together
const [menu2, offers2, user2] = await Promise.all([
  getJSON("/api/menu"),
  getJSON("/api/offers"),
  getJSON("/api/me"),
]);

console.log(menu.items.length, user.name);`,
            },
            bullets: [
              "Seven primitives + objects; typeof null is 'object' and 0.1 + 0.2 is not 0.3.",
              "let/const are block-scoped; arrow functions do not bind their own this.",
              "Single-threaded: I/O goes to the platform, callbacks queue, the event loop drains them.",
              "Evolution: callbacks -> promises -> async/await; errors need try/catch around await.",
              "Timing arithmetic: 3 sequential awaits = 450 ms; Promise.all = about 160 ms.",
              "Modules: ES import/export; bundlers resolve them into the render pipeline.",
            ],
            diagram: {
              kind: "flow",
              title: "One await through the event loop",
              caption: "The stack hands work out, the loop hands results back - nothing waits in line on the main thread.",
              steps: [
                { label: "Call", note: "fetch(url) starts network work" },
                { label: "Suspend", note: "await parks the function, stack clears" },
                { label: "Loop idle", note: "other events and renders run" },
                { label: "Resolve", note: "response arrives, continuation queued" },
                { label: "Resume", note: "loop runs the continuation with the result" },
              ],
            },
            callout: {
              type: "warning",
              title: "Await in a loop is the frontend N+1",
              body: "for (const id of ids) { await getJSON('/api/items/' + id); } runs 40 requests in 6 seconds where Promise.all runs them in 300 ms. The fix is one line, and it is the same disease as the backend N+1 query - say the parallel sentence in any async answer.",
            },
            examQuestions: [
              {
                q: "Explain JavaScript's event loop and the evolution from callbacks to async/await, with the sequential-versus-parallel timing arithmetic for three 150 ms calls.",
                marks: 14,
                outline: [
                  "Single-threaded premise: one call stack, work queued for later",
                  "Callbacks -> promises (.then/.catch) -> async/await sugar",
                  "await suspends the function; the loop runs when the stack clears",
                  "Sequential: 3 x 150 ms = 450 ms",
                  "Promise.all: about 160 ms - independent calls parallelise",
                  "Error handling: try/catch around await; unhandled rejections crash Node",
                  "Modules: import/export, bundled into the render pipeline",
                ],
              },
              {
                q: "List three JavaScript coercion traps and why let/const replaced var.",
                marks: 7,
                outline: [
                  "typeof null === 'object' - historical bug kept for compatibility",
                  "'2' + 2 is '22' but '2' - 2 is 0 - plus prefers string concatenation",
                  "0.1 + 0.2 !== 0.3 - binary floating point",
                  "var is function-scoped and hoisted; let/const are block-scoped",
                  "const prevents rebinding - the default choice",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "The DOM and events - selection, mutation and delegation",
            body: [
              "DOM programming is three verbs: select, listen, mutate. Select: document.querySelector('#cart') takes any CSS selector and returns the first match, querySelectorAll returns all; older APIs getElementById and getElementsByClassName still appear in exams and codebases. Mutate: textContent for text (safe - it never parses HTML), innerHTML for markup (dangerous with user input - that is the XSS door, 5.4), classList.toggle('open'), setAttribute, and createElement + appendChild for building nodes. The modern shortcut for repeated shapes: template literals plus insertAdjacentHTML, always with sanitised data.",
              "Events are the browser's conversation with the user, and the model has three examinable properties. Registration: addEventListener('click', handler) with options - { once: true } auto-removes, { passive: true } promises no preventDefault so scrolling stays fast. Flow: an event travels capture (top-down) to the target, then bubbles (bottom-up) back to the document; event.stopPropagation() halts the journey, event.preventDefault() cancels the default action (a form submit, a link navigation). Delegation is the professional pattern: one listener on the list container reads event.target and handles any row - even rows added later - instead of forty listeners on forty rows; the arithmetic is 1 listener versus 40, and it survives dynamic content by construction.",
              "The worked trace. A cart list with a 'Remove' button per row: container listener on click; if (event.target.matches('.remove')) { const row = event.target.closest('li'); row.remove(); updateTotal(); }. One listener, works for rows added tomorrow. The counter-pattern examiners like to test: 40 rows x 2 listeners = 80 registrations, each a memory reference that must be cleaned up on re-render - leak by accumulation. The state-update cycle completes the section: event -> update state -> re-render (manual here, automatic in frameworks 2.6) - this loop is literally what React industrialises, so understanding it vanilla makes every framework answer easier.",
              "Exam framing: expect 'explain event bubbling and delegation', 'textContent vs innerHTML', or 'write code to handle a list action'. Give the three verbs, the capture-bubble journey with stopPropagation/preventDefault, the delegation arithmetic (1 vs 40 listeners), and the state-update cycle. The sentence examiners reward: delegate to the parent - listeners survive dynamic content and memory does not grow.",
            ],
            keyTerms: [
              { term: "Event delegation", definition: "One listener on a parent handling children via event.target - survives dynamic content." },
              { term: "Bubbling / capture", definition: "Event travels down (capture) to the target, then up (bubble) - stopPropagation halts it." },
              { term: "preventDefault", definition: "Cancels the browser's default action (submit, navigate) without stopping the event's travel." },
              { term: "textContent vs innerHTML", definition: "textContent is safe text; innerHTML parses markup - the XSS door for user input." },
              { term: "closest()", definition: "Walks up from the target to the nearest matching ancestor - delegation's companion." },
            ],
            codeExample: {
              language: "javascript",
              caption: "cart.js - event delegation on a dynamic list",
              code: `const list = document.querySelector('#cart');

// ONE listener for every row - present and future
list.addEventListener('click', (event) => {
  if (!event.target.matches('.remove')) return;
  const row = event.target.closest('li');
  const sku = row.dataset.sku;
  row.remove();
  updateTotal(sku);
});

function addRow(item) {
  list.insertAdjacentHTML('beforeend',
    '<li data-sku="' + item.sku + '">' + item.name +
    ' - Rs ' + item.price +
    ' <button class="remove">Remove</button></li>');
}

function updateTotal(removedSku) {
  // recompute from state, not from the DOM
  state.items = state.items.filter((i) => i.sku !== removedSku);
  document.querySelector('#total').textContent = 'Rs ' + total(state.items);
}`,
            },
            bullets: [
              "Three verbs: querySelector to select, addEventListener to listen, textContent/classList to mutate.",
              "Event journey: capture top-down to the target, bubble back up; stopPropagation and preventDefault act at any stop.",
              "Delegation arithmetic: 1 listener on the container versus 40 on the rows - and rows added later just work.",
              "textContent never parses markup - the safe default; innerHTML with user input is the XSS door.",
              "Update state, then render from state - the manual cycle frameworks automate.",
              "Options that matter: { once: true }, { passive: true } for scroll performance.",
            ],
            diagram: {
              kind: "cycle",
              title: "The DOM update cycle",
              caption: "Event to state to render - frameworks automate exactly this loop.",
              steps: [
                { label: "Event", note: "click / input / submit reaches a handler" },
                { label: "Handle", note: "delegate via event.target, compute intent" },
                { label: "Update state", note: "modify the data, not the pixels" },
                { label: "Render", note: "rebuild the affected DOM from state" },
                { label: "Await", note: "browser repaints; next event arrives" },
              ],
            },
            callout: {
              type: "exam",
              title: "1 versus 40 is the delegation answer",
              body: "When asked 'why delegate?', the marks are in the arithmetic: one listener on the parent replaces forty on the rows, handles rows added later, and frees you from cleanup bookkeeping on re-render. Then show the matches/closest two-liner - pattern plus reason is the full answer.",
            },
            examQuestions: [
              {
                q: "Explain event flow (capture, target, bubble), stopPropagation versus preventDefault, and demonstrate event delegation on a dynamic list with the listener-count arithmetic.",
                marks: 14,
                outline: [
                  "Capture: top-down to the target; bubble: back up to the document",
                  "stopPropagation halts travel; preventDefault cancels the default action",
                  "Registration options: once, passive, capture",
                  "Delegation: one container listener + event.target.matches + closest",
                  "Arithmetic: 1 listener vs 40; rows added later need nothing",
                  "textContent vs innerHTML: XSS door with user input",
                  "Cycle: event -> state update -> re-render",
                ],
              },
              {
                q: "Why is innerHTML with user input dangerous, and what are the two safe alternatives?",
                marks: 7,
                outline: [
                  "innerHTML parses strings as markup - <img onerror=...> executes",
                  "XSS: attacker input becomes code in another user's session",
                  "textContent inserts as text - markup stays inert",
                  "createElement + textContent builds nodes without parsing",
                  "If HTML is required, sanitise server-side with a library, never regex",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Frontend frameworks - the component model",
            body: [
              "Frameworks industrialise the 2.5 cycle: instead of manually mutating the DOM after every event, you declare UI as a function of state, and the framework re-renders on change. React's model is the syllabus's exemplar: components are functions returning markup (JSX); props flow down from parent to child as immutable inputs; state is the component's private memory, changed only by calling the setter; a state change schedules a re-render, React diffs the new virtual tree against the old (reconciliation), and patches only the real DOM nodes that changed. The counter example: useState(0), onClick={() => setCount(c => c + 1)} - the DOM update is declarative; you never call document.querySelector.",
              "The hook set is the examinable API surface. useState for local state; useEffect for synchronising with the outside world - data fetching (fetch in effect, abort on cleanup), subscriptions, timers - with a dependency array that decides when it re-runs ([] once after mount, [id] when id changes, no array every render); useContext for values many components need (theme, auth); useRef for values that persist across renders without triggering renders (DOM nodes, timer ids); useMemo/useCallback to cache expensive computations and stable function identities. The worked cost argument: a 1,000-row table re-renders in 8 ms of diffing versus 45 ms of full manual rebuild - virtual DOM batching buys time, but the real product is predictability: UI = f(state) means the interface can be understood as data, tested without a browser, and debugged with time-travel tools.",
              "Choosing a framework is a compare-table question. React: the ecosystem default - huge library surface, JSX, hooks; Vue: gentler ramp, template-based, reactivity built in; Angular: the batteries-included enterprise framework - TypeScript-first, dependency injection, forms and routing in the box; Svelte: compile-time reactivity - no virtual DOM, smallest bundles. All four implement the same component model with different syntax. The architecture word that ties them together is SPA (single-page application): one HTML shell, client-side routing (React Router), and the API supplying data - with the known trade that first load carries the framework's cost, mitigated by code splitting and, at the edges, server-side rendering (Next.js-style) for first-paint and SEO.",
              "Exam framing: expect 'explain the component model with props and state', 'what does useEffect do', or 'compare React and Angular'. Give the UI-equals-f(state) sentence, the reconciliation/diff idea, the hook table with dependency-array semantics, and the framework compare table. The sentence examiners reward: state changes schedule re-renders - the framework diffs and patches, and the developer declares.",
            ],
            keyTerms: [
              { term: "Component", definition: "A function returning UI from props and state - the unit of composition." },
              { term: "Props vs state", definition: "Props are immutable inputs from the parent; state is the component's private, settable memory." },
              { term: "Reconciliation", definition: "Diffing new virtual tree against old and patching minimal real DOM nodes." },
              { term: "useEffect", definition: "Synchronises with the outside world; the dependency array decides when it re-runs." },
              { term: "SPA", definition: "One HTML shell with client-side routing; data arrives from APIs." },
            ],
            table: {
              caption: "The framework compare table examiners ask for.",
              headers: ["Framework", "Model", "Strength", "Typical fit"],
              rows: [
                ["React", "components + hooks, JSX, virtual DOM", "ecosystem size, hiring pool", "default SPA choice"],
                ["Vue", "templates + reactive state", "gentle ramp, docs", "teams new to frameworks"],
                ["Angular", "TypeScript-first, DI, full toolkit", "structure at enterprise scale", "large regulated orgs"],
                ["Svelte", "compile-time reactivity, no vDOM", "smallest bundles, less boilerplate", "performance-sensitive widgets"],
              ],
            },
            bullets: [
              "UI = f(state): declare markup from data; the framework re-renders on change.",
              "Props down, events up: data flows one way, which keeps the mental model debuggable.",
              "useState + setter schedules a re-render; reconciliation patches only what changed.",
              "useEffect dependency array: [] once, [id] on change, none every render - the exam's favourite nuance.",
              "Diffing cost example: 8 ms patch of 1,000 rows vs 45 ms full manual rebuild.",
              "React for ecosystem, Vue for ramp, Angular for enterprise structure, Svelte for bundle size.",
            ],
            diagram: {
              kind: "cycle",
              title: "The React render cycle",
              caption: "State change to patched DOM - the 2.5 loop with the framework driving.",
              steps: [
                { label: "Event", note: "onClick fires" },
                { label: "Set state", note: "setCount(c => c + 1)" },
                { label: "Re-render", note: "component function runs again" },
                { label: "Diff", note: "new virtual tree vs old" },
                { label: "Patch", note: "minimal real DOM updates" },
              ],
            },
            callout: {
              type: "exam",
              title: "The dependency array is the question",
              body: "Whenever useEffect appears in a question, the examiner wants the array semantics: no array re-runs after every render, [] runs once after mount, [id] re-runs when id changes - and the cleanup function runs before the next run and on unmount. Four clauses, full marks, and the most common interview probe in frontend.",
            },
            examQuestions: [
              {
                q: "Explain the component model: props versus state, the re-render and reconciliation cycle, and the core hooks with their dependency-array semantics.",
                marks: 14,
                outline: [
                  "Component = function returning UI from props + state",
                  "Props: immutable, parent-to-child; state: private, setter-changed",
                  "State change -> re-render -> diff virtual trees -> patch real DOM",
                  "useState: value + setter; counter example",
                  "useEffect: [] once, [id] on change, none every render; cleanup order",
                  "useContext for shared values; useRef for persistent non-render values",
                  "Cost example: 8 ms diff vs 45 ms manual rebuild; predictability is the real product",
                ],
              },
              {
                q: "Compare React, Vue, Angular and Svelte on model, strengths and fit - and state the SPA trade with its mitigations.",
                marks: 7,
                outline: [
                  "React: hooks + JSX, largest ecosystem - default choice",
                  "Vue: templates + reactivity - gentlest ramp",
                  "Angular: TypeScript, DI, batteries-included - enterprise structure",
                  "Svelte: compile-time reactivity - smallest bundles",
                  "SPA trade: first-load cost; mitigation: code splitting, SSR/Next.js",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Performance and accessibility - the shipping disciplines",
            body: [
              "Performance is a budget, not a vibe. The Core Web Vitals are the examinable numbers: LCP (Largest Contentful Paint) under 2.5 seconds - the main content rendered; INP (Interaction to Next Paint) under 200 ms - responsiveness to clicks; CLS (Cumulative Layout Shift) under 0.1 - nothing jumps while loading. The levers, in order of payoff: ship less JavaScript (code splitting so routes load their own chunks, tree shaking so unused library code is dropped - a charting library imported wholesale can be 300 KB where the used parts are 40 KB); compress and cache (gzip/brotli, Cache-Control from 1.4); optimise images (WebP/AVIF, srcset, lazy loading below the fold); preload what the next page needs; and keep the main thread free - long tasks over 50 ms get sliced.",
              "The worked budget trace. A product page: HTML 15 KB, CSS 30 KB, JS 180 KB (after splitting), hero image 90 KB WebP - total about 315 KB, about 1.1 s LCP on 4G. Before the diet it shipped 1.2 MB of un-split JS and a 2 MB JPEG: LCP 4.3 s, bounce rate up 24 percent - Google's own published correlation is roughly +1 s LCP to -7 percent conversions. CLS fixes are specific: every image gets width/height attributes (the browser reserves space before load), ads and embeds get reserved containers, and fonts get font-display: swap with a size-adjusted fallback so the swap does not shift text.",
              "Accessibility (a11y) is the second discipline, and it is examined as a checklist. Perceivable: alt text on meaningful images, contrast of at least 4.5:1 for text (3:1 for large text), captions on video. Operable: everything reachable by keyboard (tab order follows DOM order; no focus traps), visible focus styles, skip-to-content links. Understandable: labels on every input (2.2), error messages that say what to fix, lang attribute set. Robust: semantic HTML (the cheapest a11y win), ARIA only to patch semantics, tested with a screen reader once. The numbers to quote: about 15-20 percent of users benefit directly from a11y work, WCAG 2.1 AA is the compliance bar, and the legal exposure (Accessibility Act / DPDP-era expectations) makes it a requirement rather than a virtue.",
              "Exam framing: expect 'explain Core Web Vitals', 'how would you improve a slow page', or 'write the accessibility checklist'. Give the three vitals with thresholds, the before/after budget trace with the conversion number, and the four WCAG principles with two concrete items each. The sentence examiners reward: performance and accessibility are engineering requirements with numbers - budgets and thresholds, not opinions.",
            ],
            keyTerms: [
              { term: "LCP", definition: "Largest Contentful Paint - main content rendered; target under 2.5 s." },
              { term: "CLS", definition: "Cumulative Layout Shift - visual stability; target under 0.1; fix by reserving space." },
              { term: "Code splitting", definition: "Bundling per route/chunk so users download only what the page uses." },
              { term: "WCAG 2.1 AA", definition: "The accessibility compliance bar - perceivable, operable, understandable, robust." },
              { term: "Tree shaking", definition: "Dropping unused exports at build time - why import the module, not the library." },
            ],
            table: {
              caption: "A realistic performance budget for one page.",
              headers: ["Asset", "Before", "After", "Lever"],
              rows: [
                ["JavaScript", "1,200 KB single bundle", "180 KB split per route", "code splitting + tree shaking"],
                ["Hero image", "2,000 KB JPEG", "90 KB WebP + srcset", "format + resolution switching"],
                ["CSS", "95 KB", "30 KB", "purge unused classes"],
                ["Fonts", "4 weights, blocking", "2 weights, swap", "font-display + subset"],
                ["LCP (4G)", "4.3 s", "1.1 s", "sum of the above"],
                ["CLS", "0.31", "0.02", "width/height + reserved slots"],
              ],
            },
            bullets: [
              "Vitals and thresholds: LCP < 2.5 s, INP < 200 ms, CLS < 0.1 - memorise the three numbers.",
              "Biggest lever: ship less JS - splitting per route, tree shaking per import.",
              "Images: WebP/AVIF, srcset, lazy below the fold; +1 s LCP correlates to about -7 percent conversions.",
              "CLS fixes: width/height on images, reserved slots for embeds, font-display: swap.",
              "A11y: contrast 4.5:1, keyboard reachability, labels, alt text, lang, one screen-reader test.",
              "WCAG 2.1 AA is the bar; about 15-20 percent of users benefit - requirement, not virtue.",
            ],
            diagram: {
              kind: "matrix",
              title: "Priority grid - impact against effort",
              caption: "Run the audit, plot each finding, and ship the top-left quadrant first.",
              axes: { x: "Effort (low -> high)", y: "Impact (low -> high)" },
              quadrants: [
                { label: "Do first", note: "image formats, width/height, font-display - cheap and large" },
                { label: "Plan", note: "code splitting, SSR - large but architectural" },
                { label: "Quick wins", note: "alt text, labels, contrast tokens - cheap and necessary" },
                { label: "Skip for now", note: "micro-optimisations below the threshold" },
              ],
            },
            callout: {
              type: "exam",
              title: "Numbers, then checklist",
              body: "Performance answers open with the three vital thresholds; accessibility answers open with the four WCAG principles. Then one before/after trace (1.2 MB to 315 KB, 4.3 s to 1.1 s LCP) and the a11y benefit number (15-20 percent of users) - engineering answers carry numbers, opinions do not.",
            },
            examQuestions: [
              {
                q: "Explain the Core Web Vitals with thresholds, and walk through a performance diet (splitting, images, fonts, CLS fixes) with before/after numbers.",
                marks: 14,
                outline: [
                  "LCP < 2.5 s, INP < 200 ms, CLS < 0.1",
                  "Ship less JS: code splitting per route, tree shaking (300 KB -> 40 KB example)",
                  "Images: WebP/AVIF + srcset + lazy loading",
                  "Fonts: font-display: swap + size-adjusted fallback",
                  "CLS: width/height attributes, reserved embed slots",
                  "Budget trace: 1.2 MB / 4.3 s -> 315 KB / 1.1 s; +1 s LCP = about -7 percent conversions",
                  "Long tasks sliced below 50 ms; preload critical path",
                ],
              },
              {
                q: "Write the accessibility checklist for a web form and state the WCAG bar with the user-benefit number.",
                marks: 7,
                outline: [
                  "Perceivable: alt text, contrast 4.5:1, captions",
                  "Operable: keyboard reachable, visible focus, skip link",
                  "Understandable: labels on every input, clear error text, lang set",
                  "Robust: semantic HTML first, ARIA only to patch",
                  "WCAG 2.1 AA compliance bar; 15-20 percent of users benefit",
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
      title: "Backend Development and APIs",
      summary:
        "Unit III builds the server: runtimes and Express with the middleware chain, REST API design from resources to versioning, databases from SQL schema design through NoSQL choices to ORMs, authentication from sessions through JWTs to OAuth 2.0, the middleware pipeline for validation, logging and errors, file handling and third-party integrations, and the real-time layer with WebSockets.",
      chapter: {
        number: "03",
        title: "Building the Server",
        intro:
          "Unit III covers the Node.js event-loop runtime and an Express server with its middleware chain, REST resource design with verbs, nesting, pagination and versioning, relational schema design, joins and indexes against NoSQL document and key-value models, cookie sessions versus JWTs versus OAuth 2.0 authorization flows, the middleware pipeline - validation, rate limiting, structured logging, error envelopes - file uploads and third-party integration patterns, and real-time communication with polling, Server-Sent Events and WebSockets.",
        inOneBreath:
          "A backend is a loop: request -> middleware chain -> route -> business logic -> data -> JSON out. Node runs that loop on one thread with an event loop built for I/O; Express organises it as middleware. REST names resources with nouns and lets HTTP verbs carry intent - version before clients bind. SQL is the default: schema, joins, indexes (B-tree on the where-columns); NoSQL when the access pattern, not fashion, demands it. Sessions are simple and revocable; JWTs are stateless and hard to revoke; OAuth 2.0 delegates authorization. Validate at the boundary, log structured, answer errors in one envelope. Files belong in object storage; real-time is polling, SSE or WebSocket - pick by direction and fan-out.",
        sections: [
          {
            number: "3.1",
            title: "Servers and runtimes - Node.js and Express",
            body: [
              "A backend server listens for requests, runs business logic against data, and answers - and Node.js is the syllabus's runtime for that job. Its defining trait is the event loop (2.4): one thread handling thousands of concurrent connections by never blocking - every I/O call (database query, HTTP call, file read) is asynchronous, so the thread serves another request while waiting. The consequence is a programming rule examiners probe: CPU-heavy work (image processing, big loops) blocks every other request on that thread, so it belongs in worker threads or a separate service - Node scales by I/O concurrency, not by computation.",
              "Express is the minimal framework on top, and its whole architecture is the middleware chain: each request flows through functions of the form (req, res, next) in registration order - logger, authenticator, body parser, rate limiter - until a handler responds or next() passes it on. The worked server: const app = express(); app.use(express.json()); app.use(logger); app.use(auth); app.post('/api/orders', createOrder); app.listen(3000). The createOrder handler reads req.body and req.user, calls the model layer, and answers res.status(201).json(order); errors funnel to one final error middleware with the (err, req, res, next) four-argument signature - which is why Express error handling is a single chokepoint, 3.5's subject.",
              "The project layout is the examinable craft beyond hello-world: routes (URL to handler mapping), controllers (thin handlers that parse, call, answer), services (business logic, framework-free and testable), models (data access - 3.3), middlewares (cross-cutting concerns), and config split by environment (dev, test, prod via environment variables - 4.2's twelve-factor rule). The numbers of a working setup: one process per machine core via cluster or pm2 (8 cores, 8 workers), health endpoint /healthz returning 200 for the load balancer (1.3), graceful shutdown draining connections on SIGTERM. A 23 ms p95 target from 1.3 starts here: keep handlers thin, keep I/O async, keep one chokepoint for errors.",
              "Exam framing: expect 'explain Node's event loop model', 'write/describe an Express server with middleware', or 'project structure for a REST API'. Give the one-thread-I/O premise with the blocking warning, the middleware chain with registration order, the layered layout, and the error-chokepoint signature. The sentence examiners reward: Node scales by concurrency of I/O, never by parallelism of computation.",
            ],
            keyTerms: [
              { term: "Event loop", definition: "Node's one-thread scheduler: async I/O queues callbacks that run when the stack clears." },
              { term: "Middleware", definition: "A (req, res, next) function in the chain; order of registration is order of execution." },
              { term: "Error middleware", definition: "The four-argument final handler that every thrown/nexted error funnels into." },
              { term: "Controller / service split", definition: "Thin handlers parse and answer; services hold testable business logic." },
              { term: "Graceful shutdown", definition: "On SIGTERM, stop accepting and drain in-flight requests before exit." },
            ],
            codeExample: {
              language: "javascript",
              caption: "server.js - an Express server with the chain and the error chokepoint",
              code: `import express from "express";
import { router as orders } from "./routes/orders.js";
import { logger } from "./middleware/logger.js";
import { auth } from "./middleware/auth.js";

const app = express();

app.use(express.json());        // parse JSON bodies
app.use(logger);                // structured request log
app.use(auth);                  // verify JWT, attach req.user
app.use("/api/orders", orders); // routes -> controllers -> services

app.get("/healthz", (_req, res) => res.status(200).send("ok"));

// the single chokepoint: every next(err) lands here
app.use((err, _req, res, _next) => {
  console.error(JSON.stringify({ level: "error", msg: err.message }));
  res.status(err.status || 500).json({
    error: { code: err.code || "INTERNAL", message: err.message },
  });
});

app.listen(3000, () => console.log("api on :3000"));`,
            },
            bullets: [
              "Node: one thread + event loop - thousands of concurrent connections via async I/O.",
              "Blocking rule: CPU-heavy work starves every request - offload to workers or services.",
              "Express middleware: (req, res, next) functions in registration order.",
              "Layout: routes -> controllers -> services -> models; middlewares cross-cutting; config from env.",
              "Errors: one four-argument middleware is the single chokepoint - one error envelope.",
              "Operational floor: /healthz for the balancer, one worker per core, graceful shutdown on SIGTERM.",
            ],
            diagram: {
              kind: "flow",
              title: "One request through the Express chain",
              caption: "Middleware in, route in the middle, JSON out - errors divert to the chokepoint.",
              steps: [
                { label: "Request", note: "POST /api/orders + Bearer token" },
                { label: "express.json", note: "body parsed onto req.body" },
                { label: "logger", note: "structured log line started" },
                { label: "auth", note: "JWT verified -> req.user; bad -> 401" },
                { label: "route handler", note: "service logic -> 201 JSON" },
                { label: "error path", note: "any next(err) -> error middleware" },
              ],
            },
            callout: {
              type: "tip",
              title: "One chokepoint, one envelope",
              body: "Express questions are secretly questions about discipline: handlers that throw or next(err) instead of res.json-ing errors themselves, and one error middleware that formats every failure into the same envelope ({code, message}). Say 'single chokepoint' in the answer - it is the phrase examiners look for.",
            },
            examQuestions: [
              {
                q: "Explain Node.js's event-loop concurrency model and its blocking limitation, then describe an Express server: middleware chain, layered structure and the error-handling chokepoint.",
                marks: 14,
                outline: [
                  "One thread + event loop: async I/O serves thousands of connections",
                  "Blocking CPU work starves all requests - workers/separate services",
                  "Middleware: (req, res, next) in registration order - parse, log, auth",
                  "Layers: routes -> controllers -> services -> models",
                  "Handlers thin: parse, call service, res.status(...).json(...)",
                  "Error middleware: (err, req, res, next) single chokepoint, one envelope",
                  "Ops: /healthz, worker per core, graceful SIGTERM drain",
                ],
              },
              {
                q: "Why must CPU-bound work leave the Node main thread even though the process has multiple cores?",
                marks: 7,
                outline: [
                  "One thread runs all request callbacks - a 2 s loop blocks everyone",
                  "p95 latency collapses while that work runs",
                  "Worker threads/processes pool compute without blocking I/O",
                  "Or split into a separate service sized for CPU",
                  "Rule: Node scales by I/O concurrency, not computation",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "REST API design - resources, verbs and versioning",
            body: [
              "REST is a style, not a protocol: name resources with nouns (plural, lowercase, kebab-case: /api/orders, /api/order-items), let HTTP verbs carry intent (1.4's grammar), and let status codes carry outcomes. The design table for an orders resource is the exam staple: GET /api/orders (list, 200, paginated), GET /api/orders/1042 (one, 200 or 404), POST /api/orders (create, 201 + Location), PUT /api/orders/1042 (full replace, 200), PATCH /api/orders/1042 (partial update, 200), DELETE /api/orders/1042 (remove, 204), and sub-resources for relationships: GET /api/orders/1042/items, POST /api/orders/1042/items. Verbs in URLs (POST /getOrders) are the anti-pattern that fails answers.",
              "The craft is in the edges. Pagination: never return unbounded lists - ?limit=25&cursor=... with a next-cursor in the response envelope ({data, nextCursor}); offset pagination degrades on big tables and duplicates rows under concurrent inserts. Filtering and sorting stay in query strings (?status=pending&sort=-placedAt); request bodies are for state, query strings for views. Validation happens at the boundary (schema - 1.7) so a bad payload is 422 with field-level messages. Versioning is the compatibility contract: /api/v1/orders or a header version - and the rule is additive evolution (new optional fields never break clients; renames do). Deprecation is announced with a sunset header and a window, not a silent break.",
              "The worked trace ties REST to 1.3's request life. Create: POST /api/v1/orders {sku, qty} -> 201, Location: /api/v1/orders/1042, body {id, status: 'confirmed', total}. List with pagination: GET /api/v1/orders?status=pending&limit=25&cursor=eyJpZCI6MTA0Mn0 -> 200 {data: [...25 rows...], nextCursor: '...'} - the cursor is base64 of the last id. Errors: unknown id -> 404 {error: {code: 'NOT_FOUND'}}; invalid qty -> 422 {error: {code: 'VALIDATION', message: 'qty must be 1-10', field: 'qty'}}; rate exceeded -> 429 with Retry-After: 30. Four calls, four code families, one envelope - that consistency is what clients build against.",
              "Exam framing: expect 'design a REST API for X', 'explain REST principles', or 'how do you version and paginate an API'. Give the resource/verb table, the sub-resource rule, the cursor-pagination envelope, and the versioning rule with the sunset header. The sentence examiners reward: REST is nouns + verbs + status codes + hypermedia - the URL identifies, the verb acts, the code answers.",
            ],
            keyTerms: [
              { term: "Resource", definition: "A noun URL that identifies a thing - /api/orders/1042 - the unit of REST design." },
              { term: "Sub-resource", definition: "A relationship path - /api/orders/1042/items - for nested data." },
              { term: "Cursor pagination", definition: "Opaque next-cursor in the response; stable under concurrent writes, unlike offsets." },
              { term: "API versioning", definition: "/api/v1/... or header versioning; evolve additively, deprecate with a sunset header." },
              { term: "Error envelope", definition: "One error shape ({error: {code, message, field?}}) across every endpoint." },
            ],
            table: {
              caption: "The orders API - one table that answers most design questions.",
              headers: ["Endpoint", "Verb", "Success", "Typical errors"],
              rows: [
                ["/api/v1/orders", "GET (list)", "200 + {data, nextCursor}", "400 bad cursor"],
                ["/api/v1/orders", "POST", "201 + Location", "422 validation, 401"],
                ["/api/v1/orders/1042", "GET", "200 + order", "404"],
                ["/api/v1/orders/1042", "PATCH", "200 + updated", "404, 409 conflict"],
                ["/api/v1/orders/1042", "DELETE", "204", "404, 403"],
                ["/api/v1/orders/1042/items", "GET / POST", "200 / 201", "404, 422"],
              ],
            },
            bullets: [
              "Nouns for URLs, verbs for intent, status codes for outcomes - the REST grammar.",
              "Sub-resources express relationships: /api/orders/1042/items.",
              "Paginate everything: cursor-based with {data, nextCursor}; offsets degrade and duplicate.",
              "Validation at the boundary: 422 with field-level messages, one error envelope everywhere.",
              "Version from day one: /api/v1; evolve additively; deprecate with a sunset header.",
              "Anti-patterns: verbs in URLs, unbounded lists, magic numbers as enums, silent breaking changes.",
            ],
            diagram: {
              kind: "compare",
              title: "RPC-flavoured API vs REST",
              caption: "The same two operations, two grammars - the right side is what clients and caches understand.",
              left: {
                heading: "RPC-style (anti-pattern)",
                items: [
                  "POST /getOrders, POST /deleteOrder",
                  "Verbs in URLs, everything is POST",
                  "Status codes ignored - 200 with {error}",
                  "Caches and proxies see noise",
                ],
              },
              right: {
                heading: "REST",
                items: [
                  "GET /api/v1/orders, DELETE /api/v1/orders/1042",
                  "Nouns for resources, verbs for intent",
                  "201/204/404/422 carry the verdicts",
                  "GET is cacheable; semantics are standard",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Write the endpoint table",
              body: "For any 'design an API for X' question, the full-marks artifact is the table: endpoint, verb, success code, error codes - six rows for orders plus one sub-resource row. Then one envelope example and one pagination line. Tables beat prose in API questions because the examiner is grading the interface, not the essay.",
            },
            examQuestions: [
              {
                q: "Design the REST API for an orders system: resource paths, verbs, status codes, sub-resources, pagination and error envelope - and state the versioning rule.",
                marks: 14,
                outline: [
                  "Nouns: /api/v1/orders, /api/v1/orders/1042",
                  "Verb table: GET list/one, POST create (201 + Location), PATCH, DELETE (204)",
                  "Sub-resource: /api/v1/orders/1042/items",
                  "Pagination: ?limit=25&cursor=... with {data, nextCursor}",
                  "Errors: 404 NOT_FOUND, 422 VALIDATION with field, 429 + Retry-After",
                  "Envelope: {error: {code, message, field?}} everywhere",
                  "Versioning: /api/v1, additive evolution, sunset header for deprecation",
                ],
              },
              {
                q: "Why does cursor pagination beat offset pagination at scale?",
                marks: 7,
                outline: [
                  "OFFSET scans and discards rows - page 1000 of 25 reads 25,000",
                  "Concurrent inserts shift offsets - rows duplicate across pages",
                  "Cursor is stable: 'after id X' - no scan penalty, no duplication",
                  "Opaque token (base64 id) hides implementation",
                  "Trade: no random page jumps - sequential and filtered browsing only",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Databases - SQL, NoSQL and the ORM layer",
            body: [
              "The data tier's default choice is relational, and the examinable core is schema design plus joins plus indexes. Normalisation keeps each fact in one place: users (id, email, name), orders (id, user_id, placed_at, total), order_items (id, order_id, sku, qty, price) - foreign keys with ON DELETE behaviour, constraints (NOT NULL, UNIQUE, CHECK) pushing invariants into the database. Joins assemble: SELECT o.id, u.name, SUM(i.qty * i.price) FROM orders o JOIN users u ON u.id = o.user_id JOIN order_items i ON i.order_id = o.id WHERE o.placed_at >= '2026-03-01' GROUP BY o.id, u.name - one query, one truth. Indexes are the performance lever: a B-tree index on orders(user_id, placed_at) turns a sequential scan of 10 million rows into a tree descent of about 23 comparisons - the EXPLAIN plan is the proof, and an index on columns you filter or join by is the rule.",
              "NoSQL earns its place by access pattern, not fashion. Document stores (MongoDB) fit aggregates read and written whole - a product with attributes and variants in one document - and trade joins for embedding; key-value stores (Redis) fit caching, sessions and rate-limit counters at sub-millisecond reads; wide-column (Cassandra) fits write-heavy time-series at scale; graph stores fit relationship traversals. The worked decision: an orders system is relational (transactions across order + items + payment); a product catalogue with per-merchant schemas is document-friendly; 'who viewed this product' analytics is key-value counters. Polyglot persistence is the honest production answer - PostgreSQL as truth, Redis in front for hot reads, a queue between.",
              "The ORM (object-relational mapper) is the layer between code and SQL, and the exam wants both sides. It buys: type-safe models (User hasMany Order), migrations as versioned schema changes, injection-safe parameterisation by default, and portability across drivers. It costs: the N+1 query problem - loop over 100 orders, each touching order.items lazily, fires 101 queries where one JOIN would do (fix: eager loading - include items); leaked SQL for window functions and CTEs; and false confidence - the ORM generates SQL, the developer still owns the index choice. The rule: know the SQL the ORM writes (logging on), and drop to raw queries at the analytical edges.",
              "Exam framing: expect 'design a schema for X', 'compare SQL and NoSQL', or 'explain the N+1 problem'. Give the three-table schema with constraints, one JOIN with its index and EXPLAIN line, the access-pattern decision rule with one example per store type, and the N+1 arithmetic with the eager-loading fix. The sentence examiners reward: pick the database by access pattern and transaction needs - schema first, index second, ORM third.",
            ],
            keyTerms: [
              { term: "Normalisation", definition: "Each fact stored once; relations connected by foreign keys with constraints." },
              { term: "B-tree index", definition: "Log-time lookup structure on filtered/joined columns; EXPLAIN proves its use." },
              { term: "Document store", definition: "MongoDB-style aggregates read/written whole; joins traded for embedding." },
              { term: "N+1 queries", definition: "One query for the list plus one per row for relations - fixed by eager loading." },
              { term: "Migration", definition: "Versioned schema change applied in order across environments." },
            ],
            codeExample: {
              language: "sql",
              caption: "orders.sql - schema, one analytical JOIN, and the index that makes it fast",
              code: `CREATE TABLE users (
  id    SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name  TEXT NOT NULL
);

CREATE TABLE orders (
  id        SERIAL PRIMARY KEY,
  user_id   INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  placed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  total     INT NOT NULL CHECK (total >= 0)      -- integer paise
);

CREATE TABLE order_items (
  id       SERIAL PRIMARY KEY,
  order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  sku      TEXT NOT NULL,
  qty      INT  NOT NULL CHECK (qty > 0),
  price    INT  NOT NULL
);

-- the index the JOIN and WHERE actually use
CREATE INDEX idx_orders_user_placed ON orders (user_id, placed_at);

SELECT o.id, u.name, SUM(i.qty * i.price) AS item_total
FROM orders o
JOIN users u       ON u.id = o.user_id
JOIN order_items i ON i.order_id = o.id
WHERE o.placed_at >= '2026-03-01'
GROUP BY o.id, u.name;`,
            },
            bullets: [
              "Schema: users -> orders -> order_items with FKs, CHECKs and UNIQUEs pushing invariants down.",
              "Money and totals as integer paise with CHECK constraints - the 1.7 rule enforced by the database.",
              "Indexes on filter/join columns: B-tree turns 10M-row scans into about 23 comparisons; EXPLAIN proves it.",
              "NoSQL by access pattern: documents for whole aggregates, KV for cache/sessions, wide-column for time-series.",
              "Polyglot reality: PostgreSQL truth + Redis hot reads + queue between - not one store for everything.",
              "ORM: buys types, migrations, injection safety; costs N+1 (fix: eager loading) and hidden SQL - log it.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the store",
              caption: "Two questions at the fork - transactions and access pattern - pick the database.",
              start: "What does the workload need?",
              branches: [
                { label: "Multi-row transactions, ad-hoc joins", outcome: "relational (PostgreSQL) - schema, FKs, indexes", good: true },
                { label: "Whole-aggregate reads/writes", outcome: "document store (MongoDB) - embed instead of join", good: true },
                { label: "Cache, sessions, counters", outcome: "key-value (Redis) - sub-ms reads, TTLs", good: true },
                { label: "Write-heavy time-series", outcome: "wide-column (Cassandra) - partition by time", good: true },
                { label: "NoSQL because it is trendy", outcome: "mismatched model, lost transactions, rework", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "EXPLAIN is the proof",
              body: "Any indexing answer without an EXPLAIN line is a claim; with one, it is evidence: 'before: Seq Scan on orders (cost 0..180000); after index: Index Scan using idx_orders_user_placed (cost 0..8)'. Write one before/after cost line in any index question and the arithmetic argument is complete.",
            },
            examQuestions: [
              {
                q: "Design the relational schema for an orders system with constraints, write one analytical JOIN, name the index it needs, and explain the EXPLAIN before/after.",
                marks: 14,
                outline: [
                  "users(id, email UNIQUE, name), orders(id, user_id FK, placed_at, total CHECK)",
                  "order_items(id, order_id FK, sku, qty, price)",
                  "Money as integer paise with CHECK (total >= 0)",
                  "JOIN users + order_items, GROUP BY with SUM(qty * price)",
                  "Index on (user_id, placed_at) - filter and join columns",
                  "Before: Seq Scan cost 0..180000; after: Index Scan cost 0..8",
                  "ON DELETE CASCADE choice and its data-retention trade",
                ],
              },
              {
                q: "Explain the N+1 query problem with the 100-order arithmetic and the two fixes.",
                marks: 7,
                outline: [
                  "List query returns 100 orders; lazy relation fires 101 queries total",
                  "Each round trip about 1 ms x 101 - p95 blows past the 23 ms target",
                  "Fix 1: eager loading - one JOIN loads items with the list",
                  "Fix 2: batched IN query - two queries total",
                  "Rule: log the SQL your ORM writes; drop to raw at analytical edges",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Authentication and sessions - cookies, JWT and OAuth 2.0",
            body: [
              "Authentication proves who the caller is; authorization decides what they may do - the pair the exams always separate. The three mechanisms in play: cookie sessions, token (JWT) authentication, and OAuth 2.0 delegation. Cookie sessions: login verifies credentials server-side and stores a session record (Redis: sess:a3f1 -> userId, 30-minute TTL); the server sends Set-Cookie: session=a3f1; HttpOnly; Secure; SameSite=Lax, and the browser returns it on every request. HttpOnly keeps the cookie away from JavaScript (XSS cannot read it), Secure restricts to HTTPS, SameSite blunts cross-site request forgery. The model's virtue is revocability - delete the Redis key and the session dies instantly.",
              "JWTs flip the model stateless. A JSON Web Token is three base64url parts: header, payload (sub, role, exp, iat), and an HMAC-SHA256 (or RSA/ECDSA) signature; the server verifies the signature with its secret or public key and trusts the payload - no lookup, any replica accepts it (1.4's statelessness paying off). The worked token: header {alg: HS256}, payload {sub: 'u_1042', role: 'customer', exp: 1741790523}, signed - and the exam's favourite warning: JWTs are signed, not encrypted - base64-decoding reveals the payload, so never put secrets in claims. The trade is revocation: a stolen token is valid until exp (often 15 minutes), so real systems use short-lived access tokens (15 min) plus refresh tokens (stored server-side, revocable), or a denylist keyed by jti.",
              "OAuth 2.0 is authorization delegation - 'let this app act for me without seeing my password'. The authorization-code flow (the exam's flow to know): the client app redirects the user to the provider's consent screen; the provider authenticates the user and redirects back with a one-time code; the client exchanges code + client_secret for tokens at the token endpoint; the client calls APIs with the access token, refreshing as needed. Numbers to quote: access-token life 5-60 minutes, refresh-token rotation, PKCE (code challenge/verifier) mandatory for mobile and SPA clients because they cannot hold a client_secret. The layered reality of a modern app: OAuth 2.0 + OIDC for sign-on (Google login), session or short JWT inside, scopes for authorization.",
              "Exam framing: expect 'compare session and JWT authentication', 'explain the OAuth authorization-code flow', or 'how do you store a password'. Passwords: store Argon2/bcrypt hashes with per-user salts (2.6's numbers), never plaintext, never reversible. The sentence examiners reward: sessions revoke instantly and scale by shared store; JWTs scale by statelessness and revoke badly - pick by whether logout must be instant.",
            ],
            keyTerms: [
              { term: "HttpOnly / Secure / SameSite", definition: "Cookie flags: no JS access, HTTPS-only, and CSRF-blunting cross-site policy." },
              { term: "JWT", definition: "Signed header.payload.signature token - stateless auth; signed, never encrypted." },
              { term: "Refresh token", definition: "Long-lived, server-side revocable token that mints short-lived access tokens." },
              { term: "Authorization-code flow", definition: "OAuth 2.0: consent -> code -> code+secret -> tokens; PKCE for public clients." },
              { term: "Scopes", definition: "Delegated permission strings (orders:read) - authorization, not authentication." },
            ],
            table: {
              caption: "Session vs JWT vs OAuth 2.0 - the comparison row examiners grade.",
              headers: ["Aspect", "Cookie session", "JWT", "OAuth 2.0"],
              rows: [
                ["State", "server-side (Redis)", "stateless, self-contained", "delegated tokens"],
                ["Revocation", "instant - delete the key", "hard - wait for exp / denylist", "revoke refresh + consent"],
                ["Scaling", "shared session store needed", "any replica verifies locally", "provider holds identity"],
                ["CSRF exposure", "yes - SameSite/CSRF token", "no cookie - bearer header", "n/a at API layer"],
                ["XSS exposure", "HttpOnly protects", "token readable by JS if stored wrong", "tokens held by client"],
                ["Typical life", "30 min sliding", "15 min access + refresh", "5-60 min + refresh"],
              ],
            },
            bullets: [
              "Sessions: Redis-backed, HttpOnly + Secure + SameSite cookie, instant revocation.",
              "JWT: header.payload.signature, HMAC or RSA-signed; payload is visible - no secrets in claims.",
              "Revocation trade: 15-minute access tokens + revocable refresh tokens is the standard compromise.",
              "OAuth 2.0 authorization-code flow: consent -> code -> token exchange; PKCE for SPAs/mobiles.",
              "Passwords: Argon2/bcrypt with per-user salts (2.6 numbers) - never plaintext or MD5.",
              "Layered reality: OIDC sign-on outside, session or short JWT inside, scopes for authorization.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The OAuth 2.0 authorization-code flow",
              caption: "Consent screen to API call - the user's password never reaches the client app.",
              stages: [
                { label: "Redirect", note: "client -> provider /authorize with scope + PKCE challenge" },
                { label: "Consent", note: "user authenticates at the provider and approves scopes" },
                { label: "Code back", note: "redirect_uri?code=one-time-code" },
                { label: "Exchange", note: "code + client_secret -> access + refresh tokens" },
                { label: "Call API", note: "Bearer access token; refresh when expired" },
              ],
            },
            callout: {
              type: "exam",
              title: "The revocation sentence",
              body: "The full-marks comparison ends: 'sessions revoke instantly at the cost of a shared store; JWTs scale statelessly but a stolen token lives until exp - hence short access tokens plus revocable refresh tokens.' Add the signed-not-encrypted warning and the PKCE requirement for public clients, and the auth question is fully covered.",
            },
            examQuestions: [
              {
                q: "Compare cookie sessions and JWT authentication on state, revocation, scaling, CSRF and XSS exposure - and describe the standard short-access-plus-refresh compromise.",
                marks: 14,
                outline: [
                  "Sessions: server-side record (Redis, TTL), HttpOnly/Secure/SameSite cookie",
                  "Instant revocation by deleting the key; scaling needs shared store",
                  "JWT: three base64url parts, HMAC/RSA signature verified locally",
                  "Signed not encrypted - payload visible; no secrets in claims",
                  "Revocation hard: valid until exp; denylist by jti as patch",
                  "CSRF: cookies exposed (SameSite), bearer tokens not",
                  "Compromise: 15-min access + server-stored revocable refresh",
                ],
              },
              {
                q: "Explain the OAuth 2.0 authorization-code flow with PKCE and why public clients need it.",
                marks: 7,
                outline: [
                  "Redirect to /authorize with scope + code challenge",
                  "User consents at the provider - password never reaches the client",
                  "One-time code returned to redirect_uri",
                  "Code + client_secret exchanged for tokens",
                  "SPA/mobile cannot hold a secret - PKCE binds code to verifier",
                  "Access 5-60 min; refresh rotation; scopes = authorization",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Middleware and the backend pipeline",
            body: [
              "Cross-cutting concerns - logging, validation, rate limiting, error shaping - belong in the middleware chain (3.1), and the examinable discipline is their order. The canonical order: request-id + structured logging first (so every later line correlates), body parsing, security headers, rate limiting, authentication, validation, route handlers, and the error chokepoint last. Order matters because each stage assumes its predecessors ran: auth reads parsed bodies? No - auth reads headers; validation reads parsed bodies and the authenticated user; logging must wrap everything to time it. A wrong order is a real bug class: rate limiting after auth lets unauthenticated floods burn login-cost.",
              "Validation is the pipeline's gate (1.7's contract enforced server-side, because client-side validation is UX, not security). The pattern: one schema per endpoint (zod/Pydantic/Joi), parse not validate - parse turns raw input into typed, trusted objects or throws - and the failure becomes 422 with field-level messages in the standard envelope. The worked rule set for any string input: type, length bounds (name 1-100), format regex where applicable, and normalisation (trim, lowercase emails). The security framing for this course: validation is the injection defence - parameterised SQL (3.3) plus schema-checked input closes the OWASP injection door that 5.3 opens formally.",
              "Rate limiting and logging are the two operational middlewares with numbers. Rate limiting: token-bucket keyed by user or IP - say 100 requests per minute with a 429 + Retry-After response and headers (X-RateLimit-Remaining) clients can honour; login and OTP endpoints get their own stricter buckets (5 per 15 minutes) because they are brute-force doors. Structured logging: one JSON line per request - {ts, level, reqId, method, path, status, durMs, userId} - with the request-id injected at the first middleware and echoed in every error (client support asks for the id, the on-call greps it in seconds); p95 dashboards (23 ms target from 1.3) are built from exactly these lines. Metrics counters and traces hang off the same request-id - 5.5's observability starts here.",
              "Exam framing: expect 'explain middleware and its ordering', 'how do you validate and rate-limit an API', or 'design the logging strategy'. Give the canonical order with the why for each position, the parse-don't-validate rule with a 422 example, and the token-bucket numbers with the stricter login bucket. The sentence examiners reward: cross-cutting concerns are middleware so that handlers stay thin and behaviour is uniform.",
            ],
            keyTerms: [
              { term: "Middleware order", definition: "Log -> parse -> security -> rate-limit -> auth -> validate -> route -> errors; position is semantics." },
              { term: "Parse, don't validate", definition: "Schema parsing converts raw input into typed trusted objects or fails with 422." },
              { term: "Token bucket", definition: "Rate-limit model: capacity, refill rate, per-key; answer 429 + Retry-After." },
              { term: "Request-id", definition: "Correlation id injected first, echoed everywhere - the thread that ties logs to traces." },
              { term: "Structured logging", definition: "One JSON line per request with timing and identity - dashboards and greps live on it." },
            ],
            codeExample: {
              language: "javascript",
              caption: "validate.js - schema middleware with field-level 422s",
              code: `import { z } from "zod";

const orderSchema = z.object({
  sku: z.string().min(1).max(64),
  qty: z.number().int().min(1).max(10),
  pin: z.string().regex(/^[1-9][0-9]{5}$/),
});

export function validate(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      const field = parsed.error.issues[0].path.join(".");
      return res.status(422).json({
        error: { code: "VALIDATION",
                 message: parsed.error.issues[0].message,
                 field },
      });
    }
    req.body = parsed.data;   // trusted, typed, normalised
    next();
  };
}

// usage: app.post("/api/v1/orders", validate(orderSchema), createOrder);`,
            },
            bullets: [
              "Canonical order: request-id/log -> parse -> security headers -> rate limit -> auth -> validate -> routes -> errors.",
              "Position is semantics: rate limiting before auth protects login endpoints from floods.",
              "Parse, don't validate: schemas turn input into typed objects or 422 with field paths.",
              "Token bucket: 100 req/min per user, 429 + Retry-After; login/OTP stricter at 5 per 15 min.",
              "Structured log line: {ts, reqId, method, path, status, durMs, userId} - p95 dashboards feed on it.",
              "Request-id ties logs, metrics and traces together - 5.5's observability starts here.",
            ],
            diagram: {
              kind: "layers",
              title: "The middleware onion, outermost first",
              caption: "A request enters through every layer on the way in and every answer leaves through them again.",
              layers: [
                { label: "Logging + request-id", note: "wrap everything - timing and correlation" },
                { label: "Body parsing + security headers", note: "JSON in, CSP/XFO headers out" },
                { label: "Rate limiting", note: "token bucket per key; 429 + Retry-After" },
                { label: "Authentication", note: "verify JWT/session -> req.user" },
                { label: "Validation", note: "schema-gate bodies -> 422 field errors" },
                { label: "Route handlers", note: "thin controllers -> services" },
              ],
            },
            callout: {
              type: "exam",
              title: "Order is the answer",
              body: "Middleware questions are ordering questions: 'why rate limit before auth?' - because floods should be cheap to reject; 'why validate after auth?' - because 401 beats 422 for strangers. Two position-justification sentences upgrade a list into an engineering answer.",
            },
            examQuestions: [
              {
                q: "Explain the middleware pipeline with its canonical order and the justification for each position, and demonstrate schema validation with a 422 field-level response.",
                marks: 14,
                outline: [
                  "Order: log+reqId -> parse -> security -> rate limit -> auth -> validate -> routes -> errors",
                  "Logging first: wraps everything, correlates by request-id",
                  "Rate limit before auth: floods rejected cheaply; 429 + Retry-After",
                  "Auth reads headers; validation reads parsed bodies - hence that order",
                  "Parse-don't-validate: zod schema -> typed req.body or 422",
                  "422 envelope with field path and message",
                  "Error chokepoint last: one shape for every failure",
                ],
              },
              {
                q: "Design the rate-limiting strategy for a public API with a brute-forceable login endpoint.",
                marks: 7,
                outline: [
                  "Token bucket keyed by user for general API: 100 req/min",
                  "Stricter bucket on login/OTP: 5 per 15 min per IP+account",
                  "429 + Retry-After + X-RateLimit headers",
                  "Redis-backed counters so limits hold across replicas",
                  "Fail-closed on the login bucket, fail-open elsewhere for availability",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Files, uploads and third-party integrations",
            body: [
              "Files break the JSON contract, and the backend's job is to move them safely from browser to durable storage. The pattern: client uploads multipart/form-data (or a presigned URL flows, below); a middleware (multer in Node) enforces type (magic-byte sniffing, not the extension), size (say 5 MB) and count; the bytes go to object storage - S3-compatible buckets - never to the API server's disk (containers are ephemeral, 4.3); the database stores only metadata (key, bucket, mime, size, owner); the API returns a stable content URL. The worked numbers: a 4 MB avatar at 50 Mbps takes 0.64 s to upload; the presigned-PUT variant removes the API from the byte path entirely - the client uploads straight to the bucket with a signed, expiring (15-minute) URL, and the server only mints it and records the result.",
              "Serving files back has its own discipline: never stream through the API when a URL will do - presigned GET URLs (expiry 5-15 minutes) let the client download from the bucket directly, keeping API capacity for logic; content types and Content-Disposition: attachment for user-supplied files (the drive-by-download defence); images get a resize/CDN path (2.7). Access control lives at the mint step: the handler checks the requester owns the file before signing - the presigned URL is capability, not identity. The anti-pattern that fails exams: storing images as BLOBs in the database (bloats backups, starves the buffer pool) or on the API pod's disk (lost on restart, not shared across replicas).",
              "Third-party integrations - payment gateways, email, SMS, maps - are just remote APIs with two extra rules: wrap them (an adapter service so the vendor's SDK never leaks into business logic - swap Razorpay for Stripe in one file) and survive their failures. The patterns: timeout (3 s), retry with exponential backoff and jitter (3 attempts: 200 ms, 600 ms, 1.8 s) only on idempotent calls, circuit breaker that opens after 5 consecutive failures and half-opens after 30 s, idempotency keys on money-moving calls (the gateway deduplicates a retried payment), and webhooks inbound with signature verification (HMAC header) and idempotent handlers (event id checked against a store). The exam line: every external call is a failure point - timeout, retry, breaker, idempotency are the four names of resilience.",
              "Exam framing: expect 'design a file-upload flow', 'why object storage', or 'how do you call unreliable third parties'. Give the multipart-plus-validation flow with the presigned variant, the BLOB/disk anti-patterns, and the four resilience patterns with numbers. The sentence examiners reward: the server stores metadata and mints capability - bytes flow client-to-bucket, logic stays on the API.",
            ],
            keyTerms: [
              { term: "Object storage", definition: "S3-style buckets - durable, cheap, capacity-independent; the only home for user files." },
              { term: "Presigned URL", definition: "Signed, expiring capability URL letting clients PUT/GET bytes without API bandwidth." },
              { term: "Magic bytes", definition: "File-type sniffing from content header bytes - extensions and MIME claims lie." },
              { term: "Circuit breaker", definition: "Fail fast after repeated failures; half-open probes recovery - stops cascade failures." },
              { term: "Idempotency key", definition: "Client-supplied unique key so retries of money-moving calls deduplicate." },
            ],
            codeExample: {
              language: "javascript",
              caption: "avatar.js - validate, then mint a presigned PUT; bytes skip the API",
              code: `import crypto from "crypto";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

app.post("/api/v1/avatars/presign", auth, async (req, res) => {
  const { mime, sizeBytes } = req.body;
  if (!["image/jpeg", "image/png", "image/webp"].includes(mime))
    return res.status(422).json({ error: { code: "VALIDATION", message: "bad mime" } });
  if (sizeBytes > 5 * 1024 * 1024)
    return res.status(422).json({ error: { code: "TOO_LARGE" } });

  const key = "avatars/" + req.user.id + "/" + crypto.randomUUID();
  const uploadUrl = await getSignedUrl(s3,
    new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: mime }),
    { expiresIn: 900 });                    // 15 minutes - a capability
  res.status(201).json({ key, uploadUrl }); // metadata row written on confirm
});`,
            },
            bullets: [
              "Upload path: validate (magic bytes, 5 MB cap) -> object storage -> metadata row -> content URL.",
              "Presigned PUT removes the API from the byte path: signed 15-minute URL, client uploads direct.",
              "Downloads: presigned GET (5-15 min) + Content-Disposition: attachment for user files.",
              "Anti-patterns: BLOBs in the database, files on the ephemeral API disk - both fail at scale.",
              "Integrations wrapped in adapters: vendor SDKs never leak into business logic.",
              "Resilience quartet: 3 s timeout, backoff retries (200/600/1800 ms), 5-failure breaker, idempotency keys.",
            ],
            diagram: {
              kind: "matrix",
              title: "Where do the bytes go?",
              caption: "Size against access pattern - only one quadrant is production-grade for user files.",
              axes: { x: "Access pattern (rare -> hot)", y: "Size (small -> large)" },
              quadrants: [
                { label: "API disk", note: "dev only - ephemeral, unshared" },
                { label: "Object storage + CDN", note: "the production quadrant for user files" },
                { label: "Database BLOB", note: "tiny config assets at most - never user media" },
                { label: "Generated / cached bytes", note: "report exports, thumbnails - queue-built" },
              ],
            },
            callout: {
              type: "warning",
              title: "Presigned URLs are capabilities",
              body: "Anyone holding a presigned URL can use it until it expires - so mint them only after an ownership check, keep expiries short (5-15 minutes), and never log full URLs (they are credentials in your logs). The exam trap: 'presigned = public'. It is not public - it is a scoped, timed capability.",
            },
            examQuestions: [
              {
                q: "Design a secure file-upload and serving flow for user avatars: validation, storage choice, presigned URLs, and the two anti-patterns to avoid.",
                marks: 14,
                outline: [
                  "Upload: multipart or presigned PUT; magic-byte sniffing; 5 MB cap",
                  "Bytes to S3-compatible bucket - never API disk (ephemeral, unshared)",
                  "Metadata row: key, bucket, mime, size, owner",
                  "Serving: presigned GET 5-15 min after ownership check",
                  "Content-Disposition: attachment for user-supplied files",
                  "Anti-patterns: DB BLOBs (backups bloat), pod disk (lost on restart)",
                  "CDN + resize path for images (2.7 link)",
                ],
              },
              {
                q: "List the four resilience patterns for calling unreliable third-party APIs with concrete numbers.",
                marks: 7,
                outline: [
                  "Timeout: 3 s hard ceiling per call",
                  "Retry with exponential backoff + jitter: 200/600/1800 ms, idempotent calls only",
                  "Circuit breaker: open after 5 consecutive failures, half-open after 30 s",
                  "Idempotency keys on money-moving calls - gateway deduplicates retries",
                  "Adapter wrapper keeps vendor SDKs out of business logic",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Real-time - polling, SSE and WebSockets",
            body: [
              "HTTP is request-response, but products need server-initiated updates - chat, notifications, live prices - and the syllabus's three mechanisms form an escalating ladder. Polling: the client asks every N seconds (setInterval + fetch); dead simple, cacheable, but wasteful at scale - 10,000 clients polling every 5 seconds is 2,000 requests per second for news that arrives once a minute. Long-polling holds the request open until data arrives - fewer empty answers, but a held connection per client and awkward timeouts. Server-Sent Events (SSE): one HTTP response that stays open, server pushes text/event-stream frames, client listens with EventSource - one-way, auto-reconnecting, HTTP/2-friendly: the right answer for feeds and notifications.",
              "WebSockets are the two-way upgrade: one TCP connection upgraded from HTTP (Upgrade: websocket, 101 Switching Protocols), then a full-duplex message channel - either side sends any time, about 6-byte frame overhead versus hundreds of bytes of HTTP headers per poll. The worked chat trace: client connects to wss://api.foodapp.in/ws with the JWT as a query param or first message; server authenticates, registers the socket in a room (room:order:1042); order status changes publish to Redis pub/sub; each replica forwards to its local sockets in that room; client receives {type: 'STATUS', order: 1042, status: 'out_for_delivery'} in under 100 ms. The scaling fact every WebSocket answer needs: sockets are state pinned to one replica - the pub/sub backbone (Redis) is what makes 10 replicas behind a balancer behave as one.",
              "Choosing is the exam's decision point, and the table decides it: direction (server-to-client only? SSE suffices), fan-out (thousands of sockets per replica? budgets: one replica holds about 10k sockets at 4 GB with node, memory per socket about 50-100 KB), infrastructure (proxies and load balancers need Upgrade-aware config and sticky or shared routing), and delivery guarantees (WebSocket gives ordered delivery on a live connection but nothing across disconnects - message queues and client acks restore semantics; heartbeat pings every 25 s and dead-socket sweeps reap zombies). The sentence that closes the section: polling is a clock, SSE is a stream, WebSocket is a conversation - pick by who speaks first.",
              "Exam framing: expect 'compare polling, SSE and WebSockets', 'explain WebSocket scaling with pub/sub', or 'design live order tracking'. Give the three mechanisms with their cost arithmetic (2,000 rps for 10k pollers), the room-plus-Redis trace, and the socket-budget numbers. The sentence examiners reward: sockets are state - scale them with a pub/sub backbone, not bigger machines.",
            ],
            keyTerms: [
              { term: "SSE", definition: "One-way server push over a long-lived HTTP response; EventSource client, auto-reconnect." },
              { term: "WebSocket", definition: "Full-duplex TCP channel upgraded from HTTP; small frames, either side speaks." },
              { term: "Room", definition: "Server-side grouping of sockets (room:order:1042) that bounds broadcast scope." },
              { term: "Redis pub/sub backbone", definition: "Cross-replica message fan-out - makes socket state behave as one system." },
              { term: "Heartbeat", definition: "Periodic ping (25 s) plus dead-socket sweep - reaps connections that vanished silently." },
            ],
            table: {
              caption: "The real-time ladder - mechanism, direction, cost, fit.",
              headers: ["Mechanism", "Direction", "Overhead / cost", "Best fit"],
              rows: [
                ["Polling", "client asks", "10k clients / 5 s = 2,000 rps of empty answers", "coarse updates, simplest infra"],
                ["Long-polling", "server-held answer", "one held connection per client; timeout juggling", "legacy environments"],
                ["SSE", "server -> client, one-way", "one open HTTP stream; auto-reconnect built in", "feeds, notifications, dashboards"],
                ["WebSocket", "two-way", "about 6-byte frames; socket state per replica", "chat, collaboration, live tracking"],
              ],
            },
            bullets: [
              "Ladder: polling (a clock), SSE (a stream), WebSocket (a conversation) - pick by who speaks first.",
              "Polling arithmetic: 10,000 clients every 5 s = 2,000 rps mostly answering 'nothing new'.",
              "WebSocket upgrade: 101 Switching Protocols; frames are tiny vs repeated HTTP headers.",
              "Rooms bound broadcasts: room:order:1042 - only that order's sockets hear the update.",
              "Cross-replica fan-out: Redis pub/sub behind the balancer - sockets are per-replica state.",
              "Budgets: about 10k sockets per 4 GB replica (50-100 KB each); heartbeats every 25 s reap the dead.",
            ],
            diagram: {
              kind: "cycle",
              title: "Live order status over WebSockets",
              caption: "Change to message to room to socket - the pub/sub loop that scales across replicas.",
              steps: [
                { label: "Change", note: "order 1042 -> out_for_delivery" },
                { label: "Publish", note: "service publishes to Redis channel" },
                { label: "Fan-out", note: "each replica receives the event" },
                { label: "Deliver", note: "replica sends to local room:order:1042 sockets" },
                { label: "Render", note: "client updates the tracking card < 100 ms" },
              ],
            },
            callout: {
              type: "exam",
              title: "Sockets are state",
              body: "The scaling sentence examiners reward: 'a WebSocket is a pinned connection on one replica - horizontal scaling works only when a pub/sub backbone (Redis) fans messages to whichever replica holds the socket.' Add the room concept and the 10k-sockets-per-4 GB budget and the answer is operational, not theoretical.",
            },
            examQuestions: [
              {
                q: "Compare polling, long-polling, SSE and WebSockets on direction, overhead and fit, with the polling cost arithmetic and the socket-budget number.",
                marks: 14,
                outline: [
                  "Polling: client clock; 10k clients / 5 s = 2,000 rps of empties",
                  "Long-polling: held requests, timeout juggling - legacy fit",
                  "SSE: one-way stream, EventSource, auto-reconnect - feeds",
                  "WebSocket: full-duplex frames (about 6 bytes) - chat, tracking",
                  "Upgrade handshake: 101 Switching Protocols from HTTP",
                  "Budget: about 10k sockets per 4 GB replica (50-100 KB each)",
                  "Heartbeat 25 s + sweep reaps dead connections",
                ],
              },
              {
                q: "Design live order tracking for 10 API replicas: connection, rooms, fan-out and reconnection.",
                marks: 7,
                outline: [
                  "wss:// connect with JWT (header or first message)",
                  "Server authenticates and joins room:order:<id>",
                  "Status changes publish to Redis pub/sub",
                  "Each replica forwards to its local room sockets",
                  "Client reconnects with exponential backoff and last-event-id",
                  "Ordered delivery on the live socket; queue + acks across disconnects",
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
      title: "Mobile and Cloud-Native Development",
      summary:
        "Unit IV hosts the application: the mobile spectrum from native through hybrid to cross-platform, the twelve-factor rules that make an app cloud-native, Docker containers from Dockerfile to registry, Kubernetes with deployments, services and scaling, the cloud service models from IaaS through PaaS and SaaS to serverless with their responsibility split, the CI/CD pipeline and deployment strategies for containers, and the API-at-scale layer - gateways, caching and rate limiting.",
      chapter: {
        number: "04",
        title: "Shipping to Devices and the Cloud",
        intro:
          "Unit IV covers native, hybrid and cross-platform mobile development with the framework trade-offs, the twelve-factor methodology - codebase, config, backing services, statelessness, port binding, concurrency, disposability, logs and admin processes - Docker images, layers, registries and the build-ship-run flow, Kubernetes pods, deployments, services and autoscaling, the IaaS/PaaS/SaaS/serverless responsibility matrix, CI/CD pipelines for containers with rolling, blue-green and canary strategies, and API gateways, caching layers and rate limits for scale.",
        inOneBreath:
          "Mobile: native buys platform depth, cross-platform buys team size - choose by the app's dependence on device APIs. Cloud-native is twelve-factor: config in env vars, state in backing services, disposability everywhere. Docker packages the app as an immutable layered image; the registry is its home; containers are instances. Kubernetes schedules those instances: a Deployment keeps N replicas, a Service load-balances them, the HPA scales on CPU, rollouts are revisioned. Cloud models trade control for convenience - IaaS you manage up, serverless you manage almost nothing. The pipeline builds, tests, scans and deploys; canary promotes or rolls back. The gateway terminates, caches and rate-limits; every layer of the request path caches what it can.",
        sections: [
          {
            number: "4.1",
            title: "Mobile application types - native, hybrid, cross-platform",
            body: [
              "Mobile divides into three build strategies. Native: Swift/Objective-C on iOS, Kotlin/Java on Android - two codebases, full platform depth: every API, every animation, best performance and best tooling. Hybrid: one web codebase (HTML/CSS/JS) inside a WebView wrapper (Cordova, Ionic) - fastest to build, weakest feel; the app is a browser wearing a costume. Cross-platform: one codebase compiled or interpreted to near-native UI - React Native (JS bridging to native widgets) and Flutter (Dart compiling AOT with its own rendered widget set); near-native performance and one team. The exam's comparison axis is always the same: development cost versus platform depth.",
              "The worked decision. A food-delivery app: maps, camera, push notifications, payments, and a UI that must feel standard on both platforms. Flutter/React Native covers all of these with one team of 4 instead of 2+2 native developers - about 40 percent cost saving with acceptable feel. A camera-heavy AR app with real-time sensor access: native wins - the platform APIs surface first on native, bridges lag by months, and frame budgets of 16 ms punish bridge overhead. The rule the arithmetic teaches: the more the app is a standard UI over HTTP APIs, the better cross-platform fares; the deeper it reaches into device hardware, the more native earns its two codebases.",
              "The mobile-specific engineering that exams probe: app stores as the deployment channel (review cycles of 1-7 days make hotfixes slow, so mobile apps need API-driven feature flags and server-driven UI to change behaviour without a release); push notifications via platform services (FCM/APNs); offline-first with local databases (SQLite, WatermelonDB) and sync queues; and the security set this course cares about - certificate pinning against MITM, no secrets in the app bundle (decompile and read them - the app is in hostile hands, so tokens are short-lived and device-bound), biometric-gated key storage (Keychain/Keystore). The web-app alternative (PWA - 2.7 and 5.7) trades device depth for zero install.",
              "Exam framing: expect 'compare native, hybrid and cross-platform', 'when is Flutter the right choice', or 'mobile security concerns'. Give the three definitions, the food-delivery versus AR-app decision with the cost numbers, and the mobile-specific concerns (stores, flags, pinning, bundle secrets). The sentence examiners reward: cross-platform buys team size, native buys platform depth - the app's API hunger decides.",
            ],
            keyTerms: [
              { term: "Native app", definition: "Platform language and toolchain (Swift/Kotlin) - full API depth, two codebases." },
              { term: "Hybrid app", definition: "Web app inside a WebView (Cordova/Ionic) - one codebase, weakest feel." },
              { term: "Cross-platform", definition: "One codebase, near-native widgets - React Native (bridge) or Flutter (own renderer)." },
              { term: "Server-driven UI / flags", definition: "Behaviour changed from the API side - beats app-store review cycles." },
              { term: "Certificate pinning", definition: "The app trusts only its expected server certificate - MITM defence on mobile." },
            ],
            table: {
              caption: "The mobile build strategies - the row set every comparison answer needs.",
              headers: ["Strategy", "Languages", "Codebases", "Performance", "Device API depth", "Typical cost"],
              rows: [
                ["Native", "Swift / Kotlin", "2", "best", "full, day-one", "2 teams"],
                ["Hybrid (WebView)", "HTML/JS", "1", "weakest", "via plugins", "smallest"],
                ["React Native", "JS/TS", "1", "near-native", "bridge-dependent", "1 team"],
                ["Flutter", "Dart (AOT)", "1", "near-native", "plugins; own renderer", "1 team"],
              ],
            },
            bullets: [
              "Native: two codebases, best performance and day-one API access - AR, sensors, frame budgets.",
              "Hybrid: WebView wrapper - fastest build, weakest feel; fine for content apps.",
              "Cross-platform: one team, near-native - React Native bridges, Flutter renders its own widgets.",
              "Worked decision: delivery app -> Flutter saves about 40 percent team cost; AR camera app -> native.",
              "Store reviews (1-7 days) make flags and server-driven UI mandatory for mobile agility.",
              "Mobile security: pin certificates, never ship secrets in the bundle, short device-bound tokens.",
            ],
            diagram: {
              kind: "compare",
              title: "Native vs cross-platform",
              caption: "The trade in one frame: two expert teams versus one shared team.",
              left: {
                heading: "Native (Swift + Kotlin)",
                items: [
                  "Day-one access to every platform API",
                  "Best performance and platform feel",
                  "Two codebases, two release trains",
                  "Fit: AR, sensors, frame-budget apps",
                ],
              },
              right: {
                heading: "Cross-platform (Flutter / RN)",
                items: [
                  "One codebase, one team (about 40 percent saving)",
                  "Near-native UI and performance",
                  "Bridge/plugin lag on newest APIs",
                  "Fit: standard UI over HTTP APIs",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "API hunger decides",
              body: "The one-line decision rule: the more an app is standard UI over HTTP APIs, the better cross-platform fares; the deeper it reaches into hardware, the more native earns its two codebases. Attach the food-delivery versus AR example and the 40 percent cost number - rule, example, number is the full shape.",
            },
            examQuestions: [
              {
                q: "Compare native, hybrid and cross-platform mobile development on languages, codebases, performance, device-API depth and cost, with a worked decision for two app types.",
                marks: 14,
                outline: [
                  "Native: Swift/Kotlin, 2 codebases, full depth, best performance",
                  "Hybrid: WebView (Cordova/Ionic) - one codebase, weakest feel",
                  "Cross-platform: React Native (bridge) vs Flutter (own renderer)",
                  "Delivery app: maps + camera + push covered by Flutter - 1 team of 4 vs 2+2",
                  "AR app: 16 ms frame budgets + day-one sensors -> native",
                  "Store review cycles (1-7 days) -> flags and server-driven UI",
                  "Rule: API hunger decides; cross-platform buys team size",
                ],
              },
              {
                q: "List four mobile-specific security practices and the reason each exists.",
                marks: 7,
                outline: [
                  "Certificate pinning: blocks MITM with stolen/forged CAs",
                  "No secrets in the bundle: decompilation reads everything",
                  "Short-lived device-bound tokens: stolen devices have finite access",
                  "Keychain/Keystore + biometric gate for sensitive keys",
                  "Apps run in hostile hands - trust nothing client-side",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "The twelve-factor app - cloud-native principles",
            body: [
              "The twelve-factor methodology is the checklist that makes an application runnable on any cloud, and the exam wants the factors grouped, not just listed. Codebase and build: one codebase in version control, many deploys; dependencies explicitly declared (1.6's lockfile). Config and backing services: configuration lives in environment variables - never in code - and every external service (database, cache, queue) is an attached resource addressed by URL, swappable without code change: swapping PostgreSQL for a managed instance is one env var plus a migration, not a refactor.",
              "The runtime factors are where statelessness is enforced. Port binding: the app listens on a port and serves HTTP itself - no dependence on an external web server. Concurrency: scale is horizontal processes (web processes behind a balancer, worker processes on queues) rather than one big daemon. Disposability: processes start in seconds and shut down gracefully on SIGTERM - fast starts make scaling and deploys cheap, graceful drains make them safe. Dev/prod parity: the three environments differ by as little as possible - same backing services (containers make this trivial), same pipeline (1.5). Logs: write to stdout as event streams - the platform aggregates (4.5), the app never manages files. Admin processes: one-off tasks (migrations, backfills) run as identical one-off processes in the same environment.",
              "The worked violation-and-fix trace is the exam's favourite shape. Violation: config.json committed with the database password and S3 keys - every environment diverges, and a leaked repo leaks credentials (5.4's secret management). Fix: DATABASE_URL and S3_BUCKET from env vars, secrets from the platform's secret store, .env files git-ignored with .env.example committed. Violation two: a session stored on the API pod's local disk - a second replica cannot see it, a restart loses it. Fix: sessions in Redis (3.4), uploads in object storage (3.6) - state belongs to backing services; processes are disposable. Twelve lines of discipline, two traces, and the whole unit's platform engineering follows from them.",
              "Exam framing: expect 'explain the twelve-factor methodology', 'why config in environment variables', or 'statelessness and disposability'. Group the factors (codebase/dependencies, config/backing services, runtime/disposability, parity/logs/admin), run both violation traces, and close with the platform link - Kubernetes (4.4) is twelve-factor enforced by software: env vars from secrets, probes for disposability, replicas for concurrency.",
            ],
            keyTerms: [
              { term: "Backing service", definition: "Any external resource (DB, cache, queue) attached via URL - swappable without code change." },
              { term: "Port binding", definition: "The app serves HTTP itself on a port - no external server dependency." },
              { term: "Disposability", definition: "Fast start, graceful SIGTERM drain - processes are cattle, not pets." },
              { term: "Dev/prod parity", definition: "Environments differ minimally - same services, same pipeline, containers enforce it." },
              { term: "Logs as event streams", definition: "Write to stdout; the platform aggregates - the app manages no log files." },
            ],
            codeExample: {
              language: "bash",
              caption: ".env.example - config lives in the environment, never in the repo",
              code: `# committed as .env.example; the real .env is git-ignored
NODE_ENV=development
PORT=3000

DATABASE_URL=postgres://app:app@localhost:5432/orders
REDIS_URL=redis://localhost:6379
QUEUE_URL=amqp://localhost:5672

S3_BUCKET=foodapp-uploads-dev
JWT_SIGNING_KEY=     # injected at runtime from the secret store - never committed
LOG_LEVEL=info       # debug in local runs only`,
            },
            bullets: [
              "Codebase/dependencies: one repo, many deploys; lockfile-pinned dependencies.",
              "Config: environment variables only - committed config files leak credentials and fork environments.",
              "Backing services attached by URL: swap managed for self-hosted without touching code.",
              "Runtime: port binding, horizontal process concurrency, disposability (fast start, SIGTERM drain).",
              "Parity, logs to stdout, one-off admin processes in the same image.",
              "Kubernetes operationalises the factors: env from Secrets, liveness probes, replica scaling.",
            ],
            diagram: {
              kind: "fork",
              title: "Where does state live in a twelve-factor app?",
              caption: "Every 'where is it stored' question ends in the same place - outside the process.",
              start: "State found in the process?",
              branches: [
                { label: "Session data", outcome: "Redis backing service - shared, TTL-managed", good: true },
                { label: "Uploaded files", outcome: "object storage - durable, replica-shared", good: true },
                { label: "Configuration", outcome: "environment variables + secret store", good: true },
                { label: "Files on pod disk", outcome: "lost on restart, invisible to other replicas", good: false },
                { label: "Secrets in committed config", outcome: "leaked by every repo clone and log", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Cattle, not pets",
              body: "The disposability sentence examiners reward: 'processes start in seconds, shut down gracefully on SIGTERM, and are replaceable at any moment - any state they hold locally is a bug.' Tie it to Kubernetes: liveness probes kill unhealthy pets, the Deployment replaces them, and nobody mourns.",
            },
            examQuestions: [
              {
                q: "Explain the twelve-factor methodology, grouping the factors into codebase, config and backing services, runtime and disposability, and parity/logs/admin - with two violation-and-fix traces.",
                marks: 14,
                outline: [
                  "Codebase: one repo, many deploys; explicit lockfile dependencies",
                  "Config: env vars; committed config leaks secrets and forks environments",
                  "Backing services attached by URL - swappable resources",
                  "Runtime: port binding, horizontal concurrency, disposability (SIGTERM drain)",
                  "Parity: identical dev/test/prod via containers; logs to stdout",
                  "Violation 1: committed credentials -> env + secret store + .env.example",
                  "Violation 2: pod-disk sessions -> Redis; pod-disk uploads -> object storage",
                ],
              },
              {
                q: "How does Kubernetes enforce twelve-factor rules in software?",
                marks: 7,
                outline: [
                  "env vars + Secrets mounted from the platform, not committed files",
                  "Services attached by URL in ConfigMaps/Secrets",
                  "Replicas + HPA implement horizontal concurrency",
                  "Liveness/readiness probes enforce disposability",
                  "stdout logs collected by the platform's log shipper",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Docker - images, layers and the build-ship-run flow",
            body: [
              "A container packages an application with its runtime and dependencies into an isolated process on a shared host kernel - lighter than a virtual machine (VMs virtualise hardware and boot a guest OS in seconds-to-minutes; containers start in milliseconds and share the kernel). Docker is the tooling that builds, ships and runs them. The Dockerfile is the build recipe; the image is the immutable artefact; the container is a running instance of that image. The layering trick makes builds fast: each instruction (FROM, COPY, RUN) creates a cached layer, and unchanged layers are reused - reorder instructions from least to most frequently changing and rebuilds drop from minutes to seconds.",
              "The worked Dockerfile is the exam's code question, and its anatomy is graded line by line. FROM node:20-alpine (small base - 50 MB versus 1 GB for full images); WORKDIR /app; COPY package*.json first and RUN npm ci --omit=dev (dependency layer cached until the lockfile changes); COPY the source; a non-root USER (security: a compromised container does not own the host); EXPOSE 3000 (documentation of the port); CMD node server.js. Multi-stage builds take it further: stage one compiles with build tools (900 MB of toolchain), stage two copies only the artefact into a clean runtime base - final image 120 MB instead of 980 MB, smaller attack surface and faster pulls. The registry (Docker Hub or private) is the shipping half: docker build -t api:git-sha1, push, and every environment pulls the same digest.",
              "The run half and the discipline around it: one process per container (sidecars and logs are separate containers - compose orchestrates the dev stack: app, PostgreSQL, Redis with a two-file docker-compose.yml); containers are disposable (4.2) - state goes to backing services, logs to stdout; resource limits (--memory, --cpus) stop one container from starving neighbours; and the security floor for this course: pin image digests, scan images (Trivy) in the pipeline (5.4's gate), run as non-root, no secrets baked into layers (they survive in image history - env vars and secret mounts instead). The numbers to quote: image sizes (1 GB full vs 120 MB multi-stage alpine), startup (milliseconds vs VM minutes), density (dozens of containers per host versus a handful of VMs).",
              "Exam framing: expect 'explain image vs container', 'write/annotate a Dockerfile', or 'containers vs VMs'. Give the three-part vocabulary, the layer-caching reorder trick, the annotated Dockerfile with the non-root and multi-stage points, and the VM contrast with numbers. The sentence examiners reward: the image is the immutable artefact, the container is its running instance - and the registry makes both environments run the same bytes.",
            ],
            keyTerms: [
              { term: "Image", definition: "Immutable layered artefact built from a Dockerfile; identified by digest." },
              { term: "Container", definition: "A running instance of an image - isolated process on the shared host kernel." },
              { term: "Layer caching", definition: "Unchanged instruction layers are reused; order Dockerfiles least-to-most-changing." },
              { term: "Multi-stage build", definition: "Compile in one stage, copy artefacts into a clean slim runtime stage." },
              { term: "Registry", definition: "The image home (Hub/private) - every environment pulls the same digest." },
            ],
            codeExample: {
              language: "dockerfile",
              caption: "Dockerfile - multi-stage Node API, non-root, layer-ordered",
              code: `# ---- build stage: heavy toolchain, thrown away ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci                        # cached until lockfile changes
COPY . .
RUN npm run build

# ---- runtime stage: clean, small, non-root ----
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
USER node                         # never run as root
EXPOSE 3000
CMD ["node", "dist/server.js"]

# build: docker build -t api:$(git rev-parse --short HEAD) .
# run:   docker run -p 3000:3000 --memory 512m api:a1b2c3d`,
            },
            bullets: [
              "Vocabulary: Dockerfile (recipe) -> image (immutable artefact) -> container (running instance).",
              "Containers share the host kernel: millisecond starts, dozens per host; VMs boot guest OSes.",
              "Layer ordering: COPY package*.json + npm ci before source COPY - rebuilds drop minutes to seconds.",
              "Multi-stage: 980 MB toolchain image becomes 120 MB runtime image - smaller surface, faster pulls.",
              "Security floor: USER node, pinned digests, Trivy scan in CI, secrets via env/mounts never in layers.",
              "One process per container; compose wires app + PostgreSQL + Redis for local dev.",
            ],
            diagram: {
              kind: "flow",
              title: "Build - ship - run",
              caption: "One digest travels from laptop to registry to cluster - the same bytes everywhere.",
              steps: [
                { label: "Build", note: "docker build -> layered image tagged with commit SHA" },
                { label: "Push", note: "image pushed to registry by digest" },
                { label: "Pull", note: "any host pulls the identical digest" },
                { label: "Run", note: "container instance with limits + env" },
                { label: "Dispose", note: "crash or redeploy -> replaced, never repaired" },
              ],
            },
            callout: {
              type: "warning",
              title: "Secrets never bake into layers",
              body: "A COPY .env or an ARG with a token lives forever in image history - anyone who pulls the image can read it with docker history. Secrets enter containers at runtime: environment variables from the orchestrator's secret store or mounted secret files. This one line belongs in every Docker security answer.",
            },
            examQuestions: [
              {
                q: "Explain the Docker build-ship-run flow and annotate a multi-stage Dockerfile: layer caching order, non-root user, image-size numbers and the secret-handling rule.",
                marks: 14,
                outline: [
                  "Dockerfile -> image -> container; registry as the shipping half",
                  "Layer caching: deps layer before source; reorder least-to-most changing",
                  "Multi-stage: 980 MB build stage, 120 MB runtime stage",
                  "FROM alpine base: 50 MB vs 1 GB full images",
                  "USER node - non-root containment",
                  "Secrets via env/mounts at runtime, never COPY'd into layers",
                  "Run with --memory/--cpus limits; disposable on crash",
                ],
              },
              {
                q: "Contrast containers and virtual machines on startup, density and isolation.",
                marks: 7,
                outline: [
                  "VMs virtualise hardware + boot a guest OS: seconds to minutes",
                  "Containers share the host kernel: milliseconds to start",
                  "Density: dozens of containers per host vs a handful of VMs",
                  "Isolation: VM boundary is hardware-level; container boundary is namespaces/cgroups",
                  "Practical result: containers for apps, VMs for hard multi-tenant boundaries",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Kubernetes - pods, deployments and scaling",
            body: [
              "Kubernetes (k8s) is the operating system for containers: it schedules them across a cluster of nodes, keeps the declared count alive, routes traffic to them, and replaces failures - the platform layer that turns 4.3's containers into a self-healing system. The vocabulary is the exam's first hurdle: a pod is the smallest unit - one or more containers sharing network and storage (almost always one container); a Deployment declares 'keep N replicas of this pod template running' and rolls updates revision by revision; a Service gives the ever-changing pods one stable virtual IP and DNS name and load-balances across them; an Ingress routes external HTTP by hostname and path to services; ConfigMaps and Secrets inject configuration (4.2); a Namespace partitions the cluster.",
              "The declarative loop is the exam's core mechanism. You write desired state in YAML - replicas: 3, image: api:a1b2c3d, resources, probes - and kubectl apply sends it to the API server; controllers reconcile actual toward desired forever. The rollout: Deployment creates a new ReplicaSet, starts one new pod, readiness probe (GET /healthz, 200) gates traffic, one old pod terminates (graceful SIGTERM drain, 3.1), repeat - the rolling update of 1.5 executed by the platform; a bad rollout halts automatically when new pods fail readiness, and kubectl rollout undo restores the previous revision in seconds. The numbers: 3 replicas across 3 nodes, pod start 4-8 s (container pull + start), maxUnavailable 1/maxSurge 1 default rolling strategy.",
              "Scaling and healing are the factors made automatic. Horizontal Pod Autoscaler watches CPU (target 70 percent) and scales replicas 3 -> 12 during the lunch spike, back down after; the Cluster Autoscaler adds nodes when pods are unschedulable. Healing: a pod's node dies, the scheduler notices within seconds (node lease timeout) and reschedules its pods elsewhere - the 'cattle, not pets' sentence from 4.2 enforced by software. Resource requests and limits are the fairness mechanism: requests schedule capacity (request 250m CPU, 256 Mi memory), limits cap runtime - a container exceeding its memory limit is OOM-killed and restarted, which is why memory limits on leaky services show up as restart storms in dashboards (5.5 reads them).",
              "Exam framing: expect 'explain pods, deployments and services', 'how does k8s do rolling updates', or 'how does autoscaling work'. Give the vocabulary with the one-stable-IP trick, the YAML-to-reconciliation loop with the rollout gates, and the HPA/limits numbers. The sentence examiners reward: Kubernetes reconciles declared state - you declare 3 healthy replicas, controllers make it true forever.",
            ],
            keyTerms: [
              { term: "Pod", definition: "Smallest k8s unit - one or more containers sharing network/storage; mortal by design." },
              { term: "Deployment", definition: "Declares N replicas of a pod template; revisioned rolling updates with undo." },
              { term: "Service", definition: "Stable virtual IP + DNS over changing pods; load-balances across replicas." },
              { term: "Readiness probe", definition: "Gate for traffic (GET /healthz); failing probe keeps a pod out of the Service." },
              { term: "HPA", definition: "Horizontal Pod Autoscaler - scales replicas on CPU/memory (target 70 percent)." },
            ],
            codeExample: {
              language: "yaml",
              caption: "deployment.yaml - the declared state the controllers maintain",
              code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: orders-api
spec:
  replicas: 3
  selector:
    matchLabels: { app: orders-api }
  template:
    metadata:
      labels: { app: orders-api }
    spec:
      containers:
        - name: api
          image: registry.example.com/api:a1b2c3d   # pinned digest
          ports: [{ containerPort: 3000 }]
          env:
            - name: DATABASE_URL
              valueFrom: { secretKeyRef: { name: db, key: url } }
          resources:
            requests: { cpu: 250m, memory: 256Mi }
            limits:   { cpu: 500m, memory: 512Mi }
          readinessProbe:
            httpGet: { path: /healthz, port: 3000 }
            initialDelaySeconds: 3
          livenessProbe:
            httpGet: { path: /healthz, port: 3000 }
            periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata: { name: orders-api }
spec:
  selector: { app: orders-api }
  ports: [{ port: 80, targetPort: 3000 }]`,
            },
            bullets: [
              "Pod = mortal unit; Deployment = 'keep N replicas of this template'; Service = stable IP over them.",
              "Declarative loop: YAML -> kubectl apply -> controllers reconcile actual toward desired forever.",
              "Rollout: new ReplicaSet, readiness gates traffic, old pods drain on SIGTERM, bad rollouts auto-halt.",
              "Numbers: 3 replicas, pod start 4-8 s, HPA target 70 percent CPU scaling 3 -> 12 on spikes.",
              "Requests schedule capacity, limits cap runtime - memory-limit breaches surface as OOM restart storms.",
              "Node death: lease timeout, pods rescheduled elsewhere - self-healing is the product.",
            ],
            diagram: {
              kind: "pipeline",
              title: "A rolling update, stage by stage",
              caption: "Declare the new image; the platform replaces pods one at a time behind readiness gates.",
              stages: [
                { label: "Apply", note: "new image digest in deployment YAML" },
                { label: "New ReplicaSet", note: "one new pod starts (4-8 s)" },
                { label: "Readiness gate", note: "/healthz 200 -> added to Service" },
                { label: "Scale down old", note: "one old pod SIGTERMs and drains" },
                { label: "Repeat", note: "until 3 new replicas; revision kept for undo" },
              ],
            },
            callout: {
              type: "exam",
              title: "Reconciliation is the idea",
              body: "Kubernetes questions answer with one sentence: 'you declare desired state; controllers continuously reconcile actual toward desired.' Then three concrete proofs - rollout with readiness gates, HPA on CPU, node-death rescheduling - and the answer moves from definition to mechanism.",
            },
            examQuestions: [
              {
                q: "Explain pods, Deployments, Services and probes, and walk through a rolling update with the readiness gate, drain and rollback mechanism.",
                marks: 14,
                outline: [
                  "Pod: smallest unit, mortal; Deployment: keep N replicas of a template",
                  "Service: stable virtual IP + DNS across changing pods",
                  "Ingress routes external HTTP; ConfigMaps/Secrets inject config",
                  "Apply YAML -> controllers reconcile actual toward desired",
                  "Rollout: new ReplicaSet, readiness /healthz gates, old pod SIGTERM drain",
                  "Failed readiness auto-halts; kubectl rollout undo restores revision",
                  "Numbers: 3 replicas, pod start 4-8 s, maxUnavailable/maxSurge 1",
                ],
              },
              {
                q: "How do the HPA and resource requests/limits interact during a traffic spike?",
                marks: 7,
                outline: [
                  "HPA watches CPU against the 70 percent target",
                  "Replicas scale 3 -> 12 within minutes on sustained load",
                  "Requests reserve schedulable capacity per pod",
                  "Limits cap runtime - OOM kill on breach, restart storm visible in metrics",
                  "Cluster Autoscaler adds nodes when pods are unschedulable",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Cloud service models - IaaS, PaaS, SaaS and serverless",
            body: [
              "Cloud providers sell the same stack at four altitudes, and the exam's tool for comparing them is the responsibility matrix: who manages what, from the cables up. IaaS (Infrastructure as a Service - EC2, Azure VMs): the provider runs datacenters, hardware and virtualisation; you manage the OS upward - patching, runtimes, scaling, backups. PaaS (App Engine, Heroku, managed databases): the provider runs the OS and platform; you deploy code and configure - scaling and patching are largely theirs. SaaS (Gmail, Salesforce): you configure, the provider runs everything. Serverless/FaaS (Lambda, Cloud Functions): you upload functions; the provider runs, scales and bills per invocation - PaaS taken to its 'no server visible' conclusion.",
              "The worked comparison is one product need: an orders API. IaaS path: provision 3 VMs (t3.medium, about Rs 2,500/month each), install Node, patch monthly, configure the balancer, own autoscaling - maximum control (custom kernels, niche runtimes, compliance regimes), maximum toil. PaaS path: push the container to a managed service (App Runner/Cloud Run) - the platform handles TLS, scaling and health checks; you own the app and its env vars; the trade is platform limits (no custom kernel modules, fixed deploy shapes). Serverless path: 40 endpoints become functions - pay per GB-second (a burst of 1 million invocations at 200 ms and 512 MB costs a few dollars, but idle-to-bursty billing punishes steady high traffic), cold starts (1.3's numbers) on rare paths, 15-minute execution ceilings. The managed-database footnote runs through all three: RDS/Cloud SQL removes backups, patching and replication from your list - the single highest-leverage delegate in any architecture.",
              "The decision rule the exams want: choose by control against toil. You manage the OS and up on IaaS - pick it for compliance isolation, exotic runtimes, or lift-and-shift migrations; you manage code and config on PaaS - pick it for most product APIs (the default); you manage functions on FaaS - pick it for spiky, event-driven, interruptible work (1.2's rule restated). The cost contrast to quote: steady 24/7 load favours reserved instances (PaaS/IaaS), spiky load favours per-invocation serverless, and the crossover point is measurable - a function running flat-out 24/7 costs 2-4x its container equivalent. The security note for this course: the provider inherits patching and physical security, but identity, data and configuration remain yours - misconfigured S3 buckets and over-permissive IAM roles are the cloud's own top breach class (5.3's misconfiguration entry).",
              "Exam framing: expect 'compare IaaS, PaaS, SaaS', 'where does serverless fit', or 'draw the responsibility matrix'. Give the four definitions with one example each, the orders-API cost trace with the steady-versus-spike crossover, and the security split (provider patches, you configure). The sentence examiners reward: each altitude trades control for toil - choose by how much OS you actually want to own.",
            ],
            keyTerms: [
              { term: "IaaS", definition: "Raw VMs/storage - you manage OS and up (EC2, Azure VMs)." },
              { term: "PaaS", definition: "Platform runs OS + runtime; you deploy code (App Runner, Heroku)." },
              { term: "SaaS", definition: "Finished software consumed over the net - you configure only (Gmail, Salesforce)." },
              { term: "FaaS / serverless", definition: "Event-triggered functions, scale to zero, per-invocation billing (Lambda)." },
              { term: "Managed database", definition: "Provider-run DB with backups/patching/replication - the highest-leverage delegate." },
            ],
            table: {
              caption: "The responsibility matrix - who manages what at each altitude.",
              headers: ["Layer", "IaaS", "PaaS", "Serverless", "SaaS"],
              rows: [
                ["Application code", "you", "you", "you (functions)", "provider"],
                ["Runtime + scaling", "you", "provider", "provider", "provider"],
                ["OS patching", "you", "provider", "provider", "provider"],
                ["Virtualisation", "provider", "provider", "provider", "provider"],
                ["Hardware / datacenter", "provider", "provider", "provider", "provider"],
                ["Data + identity + config", "you", "you", "you", "you (within the product)"],
              ],
            },
            bullets: [
              "IaaS: control and toil - you patch, scale and back up; fit for compliance and lift-and-shift.",
              "PaaS: the default for product APIs - deploy a container, platform runs TLS/scaling/health.",
              "Serverless: per-invocation billing for spiky work; 15-minute ceilings, cold starts on rare paths.",
              "Cost crossover: flat-out 24/7 functions cost 2-4x their container equivalent; spikes favour FaaS.",
              "Managed databases (RDS/Cloud SQL) remove backups, patching, replication - delegate first here.",
              "Security split: provider patches the floor; identity, buckets and IAM over-permission stay yours.",
            ],
            diagram: {
              kind: "matrix",
              title: "Control against toil",
              caption: "Four altitudes, one axis pair - the workload decides the altitude, not preference.",
              axes: { x: "Toil you own (low -> high)", y: "Control you hold (low -> high)" },
              quadrants: [
                { label: "SaaS", note: "no toil, no control - configure and go" },
                { label: "IaaS", note: "maximum control, maximum toil - you own the OS upward" },
                { label: "Serverless / FaaS", note: "near-zero toil, function-sized control" },
                { label: "PaaS", note: "the middle default - code in, platform runs the rest" },
              ],
            },
            callout: {
              type: "exam",
              title: "Own the OS or not",
              body: "The choosing sentence examiners reward: 'IaaS when you must own the OS (compliance, exotic runtimes), PaaS for most product APIs, FaaS for spiky event-driven work - and delegate the database first, always.' Then the crossover number (24/7 functions 2-4x containers) proves the answer is economic, not fashionable.",
            },
            examQuestions: [
              {
                q: "Compare IaaS, PaaS, SaaS and serverless with examples, draw the responsibility matrix, and work the orders-API cost contrast including the steady-versus-spike crossover.",
                marks: 14,
                outline: [
                  "IaaS: VMs - you manage OS upward (EC2 example)",
                  "PaaS: deploy code/container - platform runs TLS, scaling (App Runner)",
                  "SaaS: consume finished software (Gmail, Salesforce)",
                  "FaaS: event functions, scale to zero, per-invocation billing (Lambda)",
                  "Matrix rows: code/runtime/OS/virtualisation/hardware across the four",
                  "Costs: 3 VMs at Rs 2,500/month + patching vs managed platform vs per-invocation",
                  "Crossover: 24/7 functions cost 2-4x containers; spikes favour FaaS",
                ],
              },
              {
                q: "Why does 'the provider patches the floor but you configure the door' describe cloud security?",
                marks: 7,
                outline: [
                  "Provider inherits hardware, virtualisation and OS patching",
                  "Your surface: IAM roles, bucket policies, network rules, secrets",
                  "Top cloud breach class: misconfiguration - public buckets, wildcard IAM",
                  "Shared-responsibility boundary = data + identity + configuration",
                  "Audit these with policy tools (5.4's gates in the pipeline)",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "CI/CD for containers and deployment strategies",
            body: [
              "1.5 built the pipeline; Unit IV runs it for containers, and the difference is the artefact and the target. The container pipeline: checkout -> cached install -> unit tests -> integration tests with services (PostgreSQL and Redis started as containers themselves) -> build the image tagged with the commit SHA -> scan it (Trivy for CVEs; fail the build on critical findings) -> push to the registry by digest -> deploy the manifest (update the image tag in the Deployment YAML - gitOps style: the repository is the source of truth, the cluster syncs to it). The numbers carry over and grow one stage: about 13 minutes merge-to-staging with the scan and manifest update included.",
              "Deployment strategies are the exam's compare table, and containers make all three cheap because images are immutable and replicas are disposable. Rolling (k8s default): replace pods one at a time behind readiness gates - zero extra capacity beyond maxSurge, gradual exposure, rollback by revision undo; the risk is two versions serving simultaneously with no traffic control. Blue-green: run the full new version (blue) beside the old (green), test blue privately, then flip the Service/router - instant, atomic cutover and instant rollback (flip back), at the cost of double capacity during the switch. Canary: route a small percentage (5 percent) to the new version via weighted routing at the gateway (4.7), watch error rate and latency against baseline for 30 minutes, promote or auto-rollback (1.5's 90-second rollback) - the statistically safest path for user-facing changes.",
              "The worked release trace ties the unit together. Merge at 10:00: pipeline green by 10:13 (13 minutes); canary at 10:14 takes 5 percent of traffic; error rate 0.1 percent baseline vs 0.12 percent canary - within threshold; latency p95 23 ms vs 24 ms - pass; promote to 100 percent at 10:45; the old ReplicaSet scales to zero but stays one revision deep for undo. A regression variant: canary error rate 3 percent at 10:20 - automatic rollback in 90 seconds, users who saw the canary mostly got retried by their clients, postmortem reads the canary metrics not the prod logs. Feature flags (1.5) complete the pattern: deploy dark, release progressively (1 percent -> 10 percent -> 100 percent), kill-switch without a rollback.",
              "Exam framing: expect 'explain the container CI/CD pipeline', 'compare rolling, blue-green and canary', or 'design a safe release process'. Give the pipeline stages with the scan gate, the three strategies with capacity and rollback trades, and the timed release trace. The sentence examiners reward: immutable images plus disposable replicas make deployment a routing decision - the risk moves from the deploy to the rollout plan.",
            ],
            keyTerms: [
              { term: "GitOps", definition: "The repository holds desired state; the cluster syncs to it - deploys are commits." },
              { term: "Image scanning gate", definition: "CVE scan (Trivy) fails the pipeline on critical findings before push." },
              { term: "Blue-green", definition: "Two full environments, atomic router flip, instant rollback, double capacity." },
              { term: "Canary", definition: "Percentage traffic to the new version, metrics compared, promote or auto-rollback." },
              { term: "Kill switch", definition: "Feature flag turned off at runtime - release control without a redeploy." },
            ],
            codeExample: {
              language: "yaml",
              caption: "ci.yml - the container pipeline with the scan gate",
              code: `name: api-ci
on: { push: { branches: [main] } }
jobs:
  build-test-scan-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint && npm test            # unit
      - run: npm run test:integration            # services via compose
      - run: docker build -t api:$GITHUB_SHA .
      - name: scan
        run: trivy image --severity CRITICAL --exit-code 1 api:$GITHUB_SHA
      - run: docker push api:$GITHUB_SHA
      - name: deploy canary
        run: |
          kubectl set image deploy/orders-api \
            api=registry.example.com/api:$GITHUB_SHA
          kubectl rollout status deploy/orders-api --timeout=120s`,
            },
            bullets: [
              "Container pipeline: install -> unit -> integration (services as containers) -> build -> scan -> push -> deploy.",
              "Scan gate: Trivy fails the build on CRITICAL CVEs - security at CI time, not audit time.",
              "GitOps: image tag updated in the repo; the cluster syncs - deploys are reviewable commits.",
              "Rolling: cheap, gradual, no traffic control; blue-green: atomic flip, double capacity.",
              "Canary: 5 percent for 30 minutes, baseline comparison, 90-second auto-rollback.",
              "Flags complete releases: dark deploy, progressive expose, kill switch without redeploy.",
            ],
            diagram: {
              kind: "cycle",
              title: "The container release loop",
              caption: "Commit to canary to promote or rollback - the loop that makes releases boring.",
              steps: [
                { label: "Merge", note: "PR green; 13-minute pipeline" },
                { label: "Image + scan", note: "SHA-tagged, CVE-gated, pushed by digest" },
                { label: "Canary", note: "5 percent traffic, metrics vs baseline" },
                { label: "Promote", note: "100 percent; old revision kept" },
                { label: "Observe", note: "p95 23 ms, error 0.1 percent dashboards" },
                { label: "Rollback", note: "undo revision in 90 s on regression" },
              ],
            },
            callout: {
              type: "exam",
              title: "Risk moves to the rollout",
              body: "The sentence examiners reward: 'immutable images and disposable replicas turn deployment into a routing decision - the risk lives in the rollout plan, not the deploy.' Then the three strategies each get one trade sentence: rolling has no traffic control, blue-green doubles capacity, canary needs metric plumbing.",
            },
            examQuestions: [
              {
                q: "Describe the container CI/CD pipeline stage by stage with the scan gate, and compare rolling, blue-green and canary deployments on capacity, exposure and rollback.",
                marks: 14,
                outline: [
                  "Stages: install -> unit -> integration -> build (SHA tag) -> Trivy scan -> push -> deploy",
                  "Scan gate fails on CRITICAL CVEs before push",
                  "GitOps: image tag updated in repo; cluster syncs",
                  "Rolling: k8s default, readiness-gated, no traffic-weight control",
                  "Blue-green: atomic flip + instant rollback at double capacity",
                  "Canary: 5 percent / 30 min, baseline comparison, 90 s auto-rollback",
                  "Flags: dark deploy, progressive release, kill switch",
                ],
              },
              {
                q: "Walk through a canary release that regresses: what fires, how fast, and what the users experience.",
                marks: 7,
                outline: [
                  "Canary at 5 percent; error rate 3 percent vs 0.1 percent baseline",
                  "Automatic rollback in 90 seconds - revision undo",
                  "Only 5 percent of users ever saw the bad version",
                  "Clients retry idempotent calls transparently",
                  "Postmortem reads canary metrics, not production logs",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "APIs at scale - gateways, caching and rate limits",
            body: [
              "One service is code; scale is infrastructure around it, and the gateway is the front door. An API gateway (nginx, Envoy, cloud LB) terminates TLS, routes by path and host, and centralises the cross-cutting infrastructure that 3.5 put in middleware: authentication (JWT verification at the edge), rate limiting (token buckets per API key), request shaping (size caps, header normalisation), and observability hooks (request-ids, access logs). The tiered limit pattern: global (10k rps across the service), per-client (100 rps per API key), per-endpoint (5 per 15 min on login) - 3.5's buckets promoted to the edge, backed by Redis so they hold across replicas.",
              "Caching is the scale lever, and the exam wants the layers named with their TTLs. Browser cache: Cache-Control on static assets (max-age=31536000 for hashed files - immutable names let you cache forever). CDN: static and even API GETs cached at edge PoPs - a 90 percent hit rate on the catalogue endpoints removes them from origin capacity arithmetic entirely. Gateway/API cache: short-lived response caches for hot GETs (menu: 60 s). Application cache (Redis): sessions, rate-limit counters, computed aggregates (cart totals) with TTLs and explicit invalidation on writes. Database cache: the buffer pool (hot pages in memory). The worked read path: catalogue request -> CDN hit 12 ms (90 percent of traffic ends here) -> on miss, gateway -> Redis 1 ms -> on miss, PostgreSQL 11 ms -> response cached upward. Writes invalidate: order placed -> cache.del('catalog:menu') - TTLs are the safety net for imperfect invalidation.",
              "The remaining scale patterns are named single-sentence answers: horizontal replicas behind the gateway (1.3); read replicas for the database with the replication-lag caveat (read-your-own-writes needs routing rules); queues between the write path and slow work (email, invoices - 3.6); pagination and field filtering so responses stay small; and backpressure - when the queue is full, shed load with 429s rather than accepting work you cannot do. The failure story examiners like: a viral spike multiplies catalogue reads 20x - CDN absorbs it (cache hit rate holds), gateway rate-limits scrapers per-key, Redis serves hot keys at 1 ms, PostgreSQL sees its usual 10 percent, and the API p95 stays under 50 ms. Scale is not one big server; it is many small decisions stacked.",
              "Exam framing: expect 'explain API gateway responsibilities', 'design the caching layers with TTLs', or 'how does a read-heavy API survive a 20x spike'. Give the gateway function list with the tiered limits, the five cache layers with the read-path trace and numbers, and the spike story. The sentence examiners reward: every layer caches what it can and invalidates on write - scale is a stack of caches with a rate limiter in front.",
            ],
            keyTerms: [
              { term: "API gateway", definition: "Edge box: TLS, routing, auth, rate limits, request-id - cross-cutting at the perimeter." },
              { term: "CDN", definition: "Edge-cached static/API responses; a 90 percent hit rate changes all capacity math." },
              { term: "Redis application cache", definition: "Sessions, counters, hot aggregates with TTL + explicit invalidation." },
              { term: "Read replica", definition: "Database copy for read scaling - with the replication-lag caveat." },
              { term: "Backpressure", definition: "Shed load (429) when capacity is out rather than accepting undeliverable work." },
            ],
            table: {
              caption: "The cache stack - layer, contents, TTL, invalidation.",
              headers: ["Layer", "What it caches", "Typical TTL", "Invalidation"],
              rows: [
                ["Browser", "hashed static assets", "1 year (immutable names)", "new hashed filenames"],
                ["CDN", "static + hot API GETs", "5-60 min", "purge API on deploy"],
                ["Gateway cache", "hot GET responses", "30-60 s", "TTL only"],
                ["Redis (app)", "sessions, counters, aggregates", "minutes-hours", "del on write + TTL"],
                ["DB buffer pool", "hot pages", "managed by engine", "automatic"],
              ],
            },
            bullets: [
              "Gateway: TLS, routing, JWT at the edge, tiered rate limits (10k global / 100 per key / 5 login).",
              "Read path numbers: CDN hit 12 ms (90 percent) -> Redis 1 ms -> PostgreSQL 11 ms.",
              "Cache rule: every layer caches what it can; writes invalidate downward (cache.del on order).",
              "TTLs are the safety net for imperfect invalidation - short TTLs bound staleness.",
              "Spike story: 20x reads absorbed by CDN hit rate; gateway limits scrapers; p95 under 50 ms.",
              "Backpressure: full queue -> 429 shed load; read replicas with read-your-own-writes routing.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The request path, edge to origin",
              caption: "Most requests die at the top layer - capacity math only cares about the survivors.",
              tiers: [
                { label: "CDN edge", note: "90 percent of reads end here - 12 ms" },
                { label: "Gateway", note: "TLS, auth, rate limits, short cache" },
                { label: "App replicas", note: "business logic, Redis lookups (1 ms)" },
                { label: "Database", note: "11 ms on the surviving 10 percent of reads" },
              ],
            },
            callout: {
              type: "exam",
              title: "Capacity math is cache math",
              body: "The sentence examiners reward: 'origin capacity is computed on cache misses - a 90 percent CDN hit rate means the database is sized for 10 percent of traffic.' Then the read-path numbers (12/1/11 ms) and the write-invalidation line complete any scale question.",
            },
            examQuestions: [
              {
                q: "Explain the API gateway's responsibilities and the five caching layers with TTLs, tracing one read path with numbers and one write-invalidation.",
                marks: 14,
                outline: [
                  "Gateway: TLS termination, routing, JWT at edge, tiered rate limits",
                  "Limits: 10k global, 100 per key, 5 per 15 min on login - Redis-backed",
                  "Layers: browser (1 year hashed), CDN (5-60 min), gateway (30-60 s), Redis, buffer pool",
                  "Read path: CDN hit 12 ms (90 percent) -> Redis 1 ms -> PostgreSQL 11 ms",
                  "Write: order placed -> cache.del('catalog:menu') + TTL net",
                  "Replicas with read-your-own-writes caveat",
                  "Backpressure: shed 429 when queues fill",
                ],
              },
              {
                q: "A catalogue endpoint goes 20x viral. Walk through which layers absorb the spike.",
                marks: 7,
                outline: [
                  "CDN hit rate holds - most reads never reach origin",
                  "Gateway rate-limits abusive keys; per-key buckets in Redis",
                  "Redis serves hot keys at 1 ms; TTLs bound staleness",
                  "PostgreSQL sees about 10 percent - replica headroom covers it",
                  "Result: p95 under 50 ms without scaling the database",
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
      title: "Quality, Security and Delivery",
      summary:
        "Unit V keeps the application honest: the testing pyramid and its unit-integration-end-to-end economics, testable code with the test-double taxonomy, the OWASP Top 10 as the application threat list, secure coding and API security from validation to secret management, observability through structured logs, metrics and distributed traces, release engineering with semantic versioning, feature flags and rollback drills, and the emerging patterns - PWAs, micro-frontends and AI-assisted development - that are reshaping the discipline.",
      chapter: {
        number: "05",
        title: "Shipping with Confidence",
        intro:
          "Unit V covers the testing pyramid's counts and economics, jest-style unit tests and integration tests against real services, the test-double table (dummy, stub, spy, mock, fake) and the design rules that make code testable, the OWASP Top 10 with injection, broken authentication, sensitive-data exposure and misconfiguration as the headline rows, secure coding - parameterised queries, validation at the boundary, secret management, dependency scanning - observability with structured logs, RED metrics and trace spans, release engineering with SemVer bumps, feature flags and rollback drills, and the emerging patterns: PWAs, micro-frontends and AI-assisted development with their governance.",
        inOneBreath:
          "Test like a pyramid: hundreds of fast unit tests, dozens of integration tests against real services, a handful of end-to-end journeys - invert the pyramid and the suite becomes slow and flaky. Testable code is dependency-injected code; doubles are named by what they assert (stub returns, spy records, mock verifies). Security is a list: injection dies with parameterised queries, broken auth dies with 3.4's discipline, secrets die with managers and scans. Observability is three signals - structured logs for what happened, metrics for how much, traces for where time went - joined by the request-id. Releases are SemVer plus flags plus rehearsed rollbacks. And the frontier - PWAs, micro-frontends, AI pair-programmers - changes the workflow, not the principles.",
        sections: [
          {
            number: "5.1",
            title: "The testing pyramid - unit, integration, end-to-end",
            body: [
              "The testing pyramid is the syllabus's central quality diagram: three layers sized deliberately. Unit tests dominate - hundreds of them, each testing one function or module in isolation, running in milliseconds, no network, no database. Integration tests sit in the middle - dozens, exercising real interactions: the API against a real PostgreSQL in a container, the queue consumed, the auth middleware traversed. End-to-end tests crown it - a handful (5-12), driving a real browser through complete user journeys: login, add to cart, checkout. The pyramid's economics is the examinable claim: unit tests cost seconds and pinpoint failures precisely; E2E tests cost minutes, break for many reasons (flaky waits, environments), and localise failures poorly - so put the volume where feedback is fastest.",
              "The inverted pyramid is the named anti-pattern: suites dominated by E2E tests take 40 minutes to run, fail flakily, and get ignored - which is worse than not testing. The worked numbers for a small API: 412 unit tests in 2 minutes (about 290 ms each), 38 integration tests in 3 minutes (about 4.7 s each, mostly container startup amortised), 12 E2E journeys in 4 minutes on staging - total about 9 minutes, the pipeline budget of 4.6. Coverage is the metric with a caveat examiners probe: line coverage measures executed lines, not verified behaviour - 100 percent coverage with assertion-free tests proves nothing; the honest target is branch coverage of business logic (about 80 percent) plus every bugfix accompanied by the test that reproduces the bug first (red), then the fix (green).",
              "The layers test different things and the exam wants the split precise. Unit: pure logic - the pricing function, the validator, the date parser - mocked dependencies, deterministic (fixed clock via injection). Integration: the seams - does the repository query actually run against PostgreSQL's dialect, does the JWT middleware attach req.user, does the queue consumer retry. E2E: the journeys - the happy path plus one or two critical failure paths (payment declined), run against a staging environment with seeded data. Contract tests (Pact-style) are the modern addition between integration and E2E: the consumer's expectations recorded and verified against the provider, so microservice teams break each other's clients at CI time instead of production time.",
              "Exam framing: expect 'explain the testing pyramid', 'why not test everything end-to-end', or 'coverage and its limits'. Give the three layers with counts and timings, the inverted-pyramid failure, the coverage caveat with the red-green bugfix rule, and the contract-test addition. The sentence examiners reward: the pyramid is an economics argument - test volume follows feedback speed and failure precision.",
            ],
            keyTerms: [
              { term: "Unit test", definition: "One module in isolation, milliseconds, mocked dependencies - the pyramid's base." },
              { term: "Integration test", definition: "Real components against real services (containers) - tests the seams." },
              { term: "E2E test", definition: "Browser-driven user journey on staging - few, slow, highest-fidelity." },
              { term: "Flaky test", definition: "Passes and fails without code change - E2E's disease; quarantine and fix or delete." },
              { term: "Contract test", definition: "Consumer expectations verified against the provider - cross-team safety net." },
            ],
            codeExample: {
              language: "javascript",
              caption: "pricing.test.js - a unit test with injected clock and a table of cases",
              code: `import { describe, it, expect } from "vitest";
import { orderTotal } from "./pricing.js";

describe("orderTotal", () => {
  it("sums items in integer paise", () => {
    const items = [
      { price: 44900, qty: 2 },   // Rs 449.00 x2
      { price: 9900, qty: 1 },
    ];
    expect(orderTotal(items)).toBe(99700);
  });

  it("rejects empty carts", () => {
    expect(() => orderTotal([])).toThrow("EMPTY_CART");
  });

  it("applies GST once, not per item", () => {
    const items = [{ price: 10000, qty: 3 }];
    expect(orderTotal(items, { gstRate: 0.18 })).toBe(35400);
  });
});
// 3 tests, about 12 ms total - the pyramid's base in action`,
            },
            bullets: [
              "Pyramid: hundreds of unit (ms) -> dozens of integration (s) -> a handful of E2E (minutes).",
              "Worked budget: 412 unit in 2 min, 38 integration in 3 min, 12 E2E in 4 min - 9 minutes total.",
              "Inverted pyramid: 40-minute flaky suites get ignored - worse than no tests.",
              "Coverage caveat: executed lines are not verified behaviour; target branch coverage of logic.",
              "Bugfix rule: reproduce the bug with a failing test first, then fix - red, green.",
              "Contract tests verify consumer expectations against providers at CI time.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The testing pyramid",
              caption: "Volume at the fast base, fidelity at the slow crown - and the inverted anti-pattern beside it.",
              tiers: [
                { label: "E2E journeys", note: "5-12 tests, minutes, staging - the crown" },
                { label: "Integration", note: "dozens, real services in containers - the seams" },
                { label: "Unit", note: "hundreds, milliseconds, mocked deps - the base" },
              ],
            },
            callout: {
              type: "exam",
              title: "Economics, not dogma",
              body: "The full-marks close: 'the pyramid is an economics argument - unit tests give fast, precise feedback, E2E gives fidelity at minutes per run, so volume follows speed.' Quote the 412/38/12 counts with their timings; numbers turn the diagram into an argument.",
            },
            examQuestions: [
              {
                q: "Explain the testing pyramid with counts and timings for a small API, contrast it with the inverted pyramid's failure mode, and state the coverage caveat with the bugfix rule.",
                marks: 14,
                outline: [
                  "Unit: hundreds, ms, mocked dependencies - logic only",
                  "Integration: dozens, real containers - repository, middleware, queue seams",
                  "E2E: 5-12 journeys on staging - happy path + critical failures",
                  "Worked budget: 412 unit / 2 min, 38 integration / 3 min, 12 E2E / 4 min",
                  "Inverted pyramid: 40-minute flaky suites get ignored",
                  "Coverage: lines executed is not behaviour verified; branch coverage of logic",
                  "Red-green rule: failing test reproduces the bug before the fix",
                ],
              },
              {
                q: "What do contract tests add between integration and E2E testing in a microservice system?",
                marks: 7,
                outline: [
                  "Consumer expectations recorded (Pact-style)",
                  "Provider verifies them in its own CI",
                  "Breaking changes caught at build time, not production time",
                  "Removes the need for full cross-service E2E environments",
                  "Complements, not replaces, the pyramid layers",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Writing testable code - doubles, fixtures and design rules",
            body: [
              "Testability is a design property, and the exam's design rules are few and mechanical. Dependency injection: never construct collaborators inside a function - receive them as parameters so tests can substitute (orderTotal(items, { clock }) takes the clock; the fixed-clock test is deterministic while new Date() tests flake on midnight runs). Pure functions where possible: same input, same output, no side effects - the pricing function of 5.1 is pure and needs no doubles at all. Side effects pushed to the edges: I/O lives in repositories and gateways the core logic calls through interfaces - the hexagonal shape that lets the core be tested headlessly.",
              "The double taxonomy is the exam's table: dummy (fills a parameter, never used), stub (returns canned answers to calls), spy (a stub that records calls for later inspection), mock (a pre-programmed object with expectations - verifying the interaction itself is the assertion), fake (a working lightweight implementation - in-memory repository, in-memory queue). The worked distinction: testing 'checkout sends an order event' with a spy asserts the event was published (state not yet visible); with a fake queue the test can consume the event and assert its payload - the fake tests behaviour, the spy tests interaction, and over-mocking is the named disease: mock the HTTP layer and your test verifies your assumptions about the vendor, not the vendor.",
              "Fixtures and the rest of the hygiene: factories over shared mutable fixtures (buildFreshUser() beats a singleton testUser.json mutated by six tests - order-dependent failures are flakiness in disguise); one assertion theme per test with a name that says the behaviour ('applies GST once, not per item' - the 5.1 test names are the pattern); arrange-act-assert structure; and database tests on transactions - begin, run assertions, rollback - so integration suites stay parallel-safe. The CI discipline ties to 4.6: unit tests on every push, integration on PRs, E2E on merge to staging - and flaky tests quarantined, not skipped silently, because a skipped flake is a hidden bug with a licence.",
              "Exam framing: expect 'explain test doubles with examples', 'what makes code testable', or 'fix this flaky suite'. Give the five doubles in table form with the spy-versus-fake contrast, the injection and purity rules with the fixed-clock example, and the fixture hygiene. The sentence examiners reward: mock the boundary, test the behaviour - interaction assertions verify your assumptions, behaviour assertions verify your code.",
            ],
            keyTerms: [
              { term: "Dependency injection", definition: "Collaborators arrive as parameters - substitutable in tests, swappable in prod." },
              { term: "Stub vs mock", definition: "Stub returns canned state; mock asserts the interaction itself." },
              { term: "Fake", definition: "Working lightweight implementation (in-memory repo/queue) - tests behaviour end to end." },
              { term: "Factory fixtures", definition: "Fresh test data per test - no shared mutable state, no order dependence." },
              { term: "Fixed clock", definition: "Injected time source making time-dependent tests deterministic." },
            ],
            table: {
              caption: "The test-double table examiners grade.",
              headers: ["Double", "Behaviour", "Asserts", "Typical use"],
              rows: [
                ["Dummy", "fills a slot, never used", "nothing", "required parameter you ignore"],
                ["Stub", "returns canned answers", "state after the call", "pricing lookup returns fixed rate"],
                ["Spy", "records calls, delegates", "interaction after the fact", "event published once"],
                ["Mock", "pre-programmed expectations", "interaction itself", "repo.save called with exact shape"],
                ["Fake", "working light implementation", "behaviour end to end", "in-memory queue consumed for payload"],
              ],
            },
            bullets: [
              "Inject collaborators: orderTotal(items, { clock }) - fixed clocks beat midnight flakes.",
              "Pure functions first: same input, same output - no doubles needed at the core.",
              "Side effects at the edges: repositories and gateways behind interfaces (hexagonal).",
              "Doubles in order of preference: fake (behaviour) > spy (interaction) > mock (assumptions).",
              "Over-mocking verifies your guesses about vendors, not the vendors - integrate for real at the seams.",
              "Hygiene: factory fixtures, arrange-act-assert, transaction-rollback DB tests, quarantined flakes.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a test double",
              caption: "Ask what the assertion is about - state, interaction or behaviour - and the double picks itself.",
              start: "What is the assertion about?",
              branches: [
                { label: "Pure logic result", outcome: "no double - call and assert the output", good: true },
                { label: "State after a call", outcome: "stub - canned answers, assert the result", good: true },
                { label: "A side effect happened", outcome: "spy - record calls, assert the record", good: true },
                { label: "A flow through real behaviour", outcome: "fake - in-memory repo/queue, consume the result", good: true },
                { label: "Mocking the vendor SDK", outcome: "verifies your assumptions, not the vendor - integrate instead", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Mock the boundary, test the behaviour",
              body: "The sentence examiners reward: 'fakes test behaviour, spies test interaction, mocks verify assumptions - prefer fakes, reach for mocks only when the interaction is itself the contract.' Add the fixed-clock example and the over-mocking warning and the answer covers design, doubles and judgement.",
            },
            examQuestions: [
              {
                q: "Explain the five test doubles with the spy-versus-fake contrast, and state the design rules (injection, purity, edges) that make code testable.",
                marks: 14,
                outline: [
                  "Dummy: fills a slot, asserts nothing",
                  "Stub: canned answers; asserts state after the call",
                  "Spy: records interactions; asserts after the fact",
                  "Mock: pre-programmed expectations; asserts the interaction itself",
                  "Fake: working lightweight implementation; asserts behaviour end to end",
                  "Injection: collaborators as parameters; fixed clock example",
                  "Purity at the core, side effects at the edges; over-mocking warns about assumptions",
                ],
              },
              {
                q: "A suite fails only when tests run in a certain order. Diagnose and fix.",
                marks: 7,
                outline: [
                  "Shared mutable fixture mutated by earlier tests",
                  "Order dependence = hidden flakiness",
                  "Fix: factory fixtures - fresh data per test",
                  "DB tests on transactions with rollback for parallel safety",
                  "Quarantine remaining flakes - never silently skip",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "OWASP Top 10 - the application threat list",
            body: [
              "The OWASP Top 10 is the industry's ranked list of application-security risks, and for this course it is the checklist every secure-code answer walks. A01 Broken access control: IDOR - fetching /api/orders/1042 that belongs to someone else because the handler never checked ownership (the fix is the ownership check plus server-side authorization on every object, 3.2's trace); A02 Cryptographic failures: sensitive data over HTTP, weak or absent hashing (passwords in MD5 - 3.4's Argon2 rule); A03 Injection: SQL/NoSQL/command injection from unvalidated input (the parameterised-query fix, 3.3); A04 Insecure design: missing rate limits and abuse cases (the design-level entry - threats modelled before code); A05 Security misconfiguration: debug endpoints in production, permissive CORS, default credentials, public S3 buckets (4.5's cloud breach class).",
              "The second half: A06 Vulnerable and outdated components: the dependency tree - one CVE in a transitive package is your CVE (the fix is 4.6's Trivy gate plus Dependabot-style update discipline); A07 Identification and authentication failures: weak passwords, missing MFA, session tokens never expiring (3.4's whole section); A08 Software and data integrity failures: unsigned updates, unverified deserialization, CI/CD with unguarded pipelines (the supply-chain entry - pin digests, verify signatures); A09 Security logging and monitoring failures: breaches that go unnoticed because errors and auth failures are not logged and alerted (3.5's structured logs + 5.5's alerts); A10 Server-side request forgery: the server tricked into fetching an attacker-chosen URL (webhooks and URL previews - validate schemes and hosts against an allowlist).",
              "The worked attack trace is the exam's favourite shape: an IDOR on the orders API. Attacker registers, logs in, receives token; enumerates GET /api/orders/1041, 1042, 1043 with their own token; the handler loads by id without checking user_id - responses leak other customers' addresses and totals. The defence chain in answer form: object-level authorization in every handler (if (order.userId !== req.user.id) return 403), non-guessable identifiers (UUIDs instead of sequential ints as defence-in-depth), the a09 logging rule (403 spikes alert), and the test that pins it (integration test: user B's token on user A's order -> 403 - the bugfix-red-green rule of 5.1 applied to security). One trace, four defences, five syllabus links - that is the full-marks security answer.",
              "Exam framing: expect 'explain the OWASP Top 10', 'explain SQL injection with prevention', or 'demonstrate an IDOR and its defences'. Give the ten rows in compressed form (name + one-line risk + one-line fix), run one attack trace with the defence chain, and cite the two entries this course has already equipped (injection via 3.3, auth via 3.4). The sentence examiners reward: every entry is a pair - the attack and the pipeline-or-code control that kills it.",
            ],
            keyTerms: [
              { term: "IDOR", definition: "Insecure direct object reference - guessing ids to reach other users' objects; fixed by object-level authorization." },
              { term: "Injection", definition: "Untrusted input interpreted as code (SQL/NoSQL/shell); killed by parameterised queries and schema validation." },
              { term: "Security misconfiguration", definition: "Debug endpoints, permissive CORS, default creds, public buckets - the cloud's top breach class." },
              { term: "SSRF", definition: "Server fetches an attacker-chosen URL - killed by scheme/host allowlists." },
              { term: "Dependency CVE", definition: "A known vulnerability in a (transitive) package - caught by scanners in the pipeline." },
            ],
            table: {
              caption: "OWASP Top 10 compressed - risk and the control that kills it.",
              headers: ["#", "Risk", "Typical shape", "Primary control"],
              rows: [
                ["A01", "Broken access control", "IDOR on /api/orders/1042", "object-level authorization checks"],
                ["A02", "Cryptographic failures", "HTTP, MD5 passwords", "TLS everywhere, Argon2, field encryption"],
                ["A03", "Injection", "SQL/shell via input", "parameterised queries + schema validation"],
                ["A04", "Insecure design", "no rate limits, abuse paths", "threat modelling at design time"],
                ["A05", "Misconfiguration", "debug endpoints, open CORS/buckets", "hardened defaults + config audits"],
                ["A06", "Vulnerable components", "CVE in a transitive package", "Trivy/Dependabot gates"],
                ["A07", "Auth failures", "no MFA, eternal sessions", "3.4's session/JWT discipline + MFA"],
                ["A08", "Integrity failures", "unsigned updates, unguarded CI", "pin digests, verify signatures"],
                ["A09", "Logging/monitoring failures", "breaches unnoticed", "structured logs + alerts on auth anomalies"],
                ["A10", "SSRF", "URL fetch from user input", "scheme/host allowlists"],
              ],
            },
            bullets: [
              "Walk the ten as pairs: risk + control - the list is a checklist, not trivia.",
              "Injection dies with parameterised queries (3.3) plus boundary validation (3.5).",
              "Broken access control (IDOR) is the most common - authorization checks on every object.",
              "Misconfiguration is the cloud's top breach class: buckets, CORS, debug endpoints (4.5).",
              "Supply chain: one CVE in a transitive dep is your CVE - scan gates at CI (4.6).",
              "A09 closes the loop: auth anomalies logged (3.5) and alerted (5.5) turn breaches into pages.",
            ],
            diagram: {
              kind: "matrix",
              title: "Prioritising the list",
              caption: "Plot by exploitability and impact - the top-left quadrant is this sprint's work.",
              axes: { x: "Exploitability (hard -> easy)", y: "Impact (low -> high)" },
              quadrants: [
                { label: "Fix now", note: "IDOR, injection, auth failures - easy and devastating" },
                { label: "Programme work", note: "integrity/supply chain - hard, high impact" },
                { label: "Hygiene backlog", note: "headers, cookies flags - easy, lower impact" },
                { label: "Monitor", note: "niche SSRF shapes behind allowlists" },
              ],
            },
            callout: {
              type: "exam",
              title: "One trace, four defences",
              body: "The IDOR trace is the reusable security answer: enumerate with own token -> handler lacks ownership check -> fix with object-level 403 + UUID ids + alerting on 403 spikes + the integration test that pins it. Attack, gap, controls, test - four beats, any OWASP entry.",
            },
            examQuestions: [
              {
                q: "List the OWASP Top 10 with a one-line risk and control each, and demonstrate the IDOR attack trace with its full defence chain.",
                marks: 14,
                outline: [
                  "A01 access control: IDOR -> object-level authorization",
                  "A02 crypto failures -> TLS + Argon2 + field encryption",
                  "A03 injection -> parameterised queries + validation",
                  "A05 misconfiguration -> hardened defaults, config audits",
                  "A06/A08 supply chain/integrity -> scan gates, pinned digests",
                  "A07 auth failures -> 3.4 discipline + MFA; A09 logging -> alerts",
                  "IDOR trace: enumerate -> missing check -> 403 + UUIDs + alert + pinned test",
                ],
              },
              {
                q: "Explain SQL injection with a vulnerable and a parameterised example.",
                marks: 7,
                outline: [
                  "Vulnerable: query = \"SELECT ... WHERE email = '\" + input + \"'\" - ' OR '1'='1 dumps rows",
                  "Input becomes code - the definition of injection",
                  "Parameterised: db.query('... WHERE email = $1', [email]) - value never parsed as SQL",
                  "ORMs parameterise by default but raw string concatenation reintroduces it",
                  "Boundary validation (3.5) as the second layer",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Secure coding and API security - validation to secrets",
            body: [
              "Secure coding is 3.5's pipeline wearing a security hat, and the rules are concrete. Input: validate at the boundary with schemas (parse, don't validate), treat every downstream system's expectations as constraints (SQL wants parameterised values - 3.3; shells want execFile with argument arrays, never string concatenation; URLs want scheme+host allowlists - A10's SSRF fix). Output: encode per context - HTML-escape rendered strings (2.5's innerHTML door), set security headers (Content-Security-Policy to kill inline-script XSS, X-Content-Type-Options, Strict-Transport-Security), and sign outbound webhooks with HMAC so receivers verify origin.",
              "Secrets are the section's operational centre because leaking one is the fastest route from code to breach. The rules: secrets never in source (the .env commit is the classic leak - 4.2's violation), never in images (4.3's layer history), never in logs (3.5's log scrubbing); they live in a manager (Vault, cloud secret managers, k8s Secrets) and reach processes at runtime via env or mounted files; they rotate (DB passwords quarterly, API keys per-service, JWT signing keys on schedule with kid rotation); and they are scanned for - gitleaks/trufflehog in the pipeline (4.6's gate) catches the committed key before it merges. The worked incident shape: a developer pastes a .env into a public repo - scanner fires within minutes, key revoked, rotated, and the audit trail (3.5) shows no anomalous use between commit and revoke. Detection speed is the metric, not perfection.",
              "API security collects the checks that gate every request: authentication at the edge (JWT verified by the gateway, 4.7), authorization per object (5.3's ownership rule), rate limits per key (3.5's buckets), request-size caps, CORS allowlists (never '*' with credentials), and dependency hygiene (4.6's Trivy gate plus lockfile-pinned, signed base images). The password-and-session floor from 3.4 stays examinable here in one line each: Argon2 with per-user salts, HttpOnly/Secure/SameSite cookies, short access tokens with revocable refresh. The exam's framing device is defence-in-depth - every control has a second layer: validation behind the schema, parameterisation behind validation, rate limits behind auth, backups behind everything (ransomware's last answer).",
              "Exam framing: expect 'secure this API', 'how do you manage secrets', or 'list security headers and their jobs'. Give the input/output rule pairs, the secret lifecycle (store, inject, rotate, scan) with the leaked-.env trace, and the request-gate checklist. The sentence examiners reward: validation, parameterisation, least privilege, rotation and scanning are five layers - no single one is trusted alone.",
            ],
            keyTerms: [
              { term: "CSP", definition: "Content-Security-Policy header - allowlist of script/style sources; kills inline-script XSS." },
              { term: "Secret manager", definition: "Vault/cloud secret store - runtime injection, rotation, audit; never source or images." },
              { term: "gitleaks scan", definition: "Pipeline gate that detects committed credentials before they merge." },
              { term: "HMAC webhook signature", definition: "Signed outbound webhooks so receivers verify the sender." },
              { term: "Defence in depth", definition: "Layered controls - each has a second; no single gate is trusted alone." },
            ],
            codeExample: {
              language: "javascript",
              caption: "security_headers.js - edge middleware with the header set and its jobs",
              code: `export function securityHeaders(_req, res, next) {
  // only scripts from self - inline script (XSS) refused
  res.setHeader("Content-Security-Policy",
    "default-src 'self'; script-src 'self'");
  res.setHeader("Strict-Transport-Security",
    "max-age=31536000; includeSubDomains");   // force HTTPS
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");   // no clickjacking
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
}

// secrets: runtime injection only
// const key = process.env.JWT_SIGNING_KEY;   // from k8s Secret / Vault
// never: const key = "sk_live_9f2..." in source;`,
            },
            bullets: [
              "Input: schema-parse everything; parameterise SQL; execFile with arrays; allowlist fetched URLs.",
              "Output: context encoding + CSP, HSTS, nosniff, frame-deny, referrer policy.",
              "Secrets: manager-stored, runtime-injected, rotated on schedule, never in source/images/logs.",
              "Leaked-.env trace: scanner fires, key revoked and rotated, audit trail checks for use.",
              "Request gates: edge JWT, per-object authorization, per-key rate limits, CORS allowlists.",
              "Defence in depth: schema -> parameterisation -> limits -> auth -> backups - layered, trusted never singly.",
            ],
            diagram: {
              kind: "flow",
              title: "The secret lifecycle",
              caption: "Store, inject, rotate, scan - the four stages that keep credentials out of code.",
              steps: [
                { label: "Store", note: "Vault / k8s Secret / cloud manager" },
                { label: "Inject", note: "env var or mounted file at runtime" },
                { label: "Rotate", note: "DB quarterly, keys per-service, kid rotation" },
                { label: "Scan", note: "gitleaks at CI; revoke on hit" },
                { label: "Audit", note: "access logs answer 'who used it when'" },
              ],
            },
            callout: {
              type: "warning",
              title: "Logs leak too",
              body: "The under-taught leak: request bodies in logs. Passwords, tokens and card numbers ride in bodies; a debug logger that dumps req.body writes them to storage forever. Scrub at the logger (3.5's middleware), allowlist fields, and say so in any logging or secrets answer - it is the leak examiners add to test depth.",
            },
            examQuestions: [
              {
                q: "Explain the secret-management lifecycle with the leaked-.env incident trace, and list the security headers with the attack each one addresses.",
                marks: 14,
                outline: [
                  "Never in source/images/logs; store in Vault/k8s Secrets",
                  "Runtime injection via env or mounts (4.2/4.3 links)",
                  "Rotation: DB quarterly, API keys per-service, JWT kid rotation",
                  "gitleaks/trufflehog gate at CI catches commits pre-merge",
                  "Incident trace: paste -> scanner minutes -> revoke/rotate -> audit shows no use",
                  "CSP kills inline XSS; HSTS forces TLS; nosniff stops MIME confusion",
                  "X-Frame-Options DENY stops clickjacking; referrer policy trims leakage",
                ],
              },
              {
                q: "State the input and output rules that secure a form-processing endpoint end to end.",
                marks: 7,
                outline: [
                  "Schema-parse at the boundary; length/format/normalisation",
                  "Parameterised SQL for storage; execFile arrays for any process",
                  "HTML-escape on render or textContent insertion",
                  "CSP + HSTS headers at the edge",
                  "Rate limit + ownership check on the endpoint",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Observability - logs, metrics and traces",
            body: [
              "Monitoring asks pre-set questions (is the CPU high?); observability asks questions you did not pre-script - and its three signals are the exam's structure. Structured logs: one JSON line per event (3.5's request middleware) - {ts, level, reqId, userId, event, durMs} - greppable, aggregatable, and the raw material for every incident review; the discipline is levels (error/warn/info/debug with debug off in prod) and the request-id thread that ties a user complaint to every line their request produced. Metrics: numeric time series - counters (http_requests_total), gauges (in_flight_requests), histograms (request duration buckets) - cheap to store, ideal for dashboards and alerts; the RED method names the three request metrics: Rate, Errors, Duration.",
              "Distributed tracing follows one request across services: each hop creates a span (gateway span -> auth span -> orders-service span -> SQL span), linked by a shared trace-id (the request-id of 3.5 promoted to a standard - W3C traceparent headers), so the waterfall shows exactly where the 2-second p99 went: SQL 1.8 s on the orders join - the missing index of 3.3 discovered from the trace, not guessed. Sampling keeps it affordable (trace 1-10 percent of requests, always the errors and the slowest). The worked incident trace ties all three: alert fires (metric: p95 latency 23 ms -> 210 ms for 10 minutes); the dashboard shows which endpoint (metrics); the trace waterfall shows the slow span (tracing); the log line at that span shows the event - connection-pool exhaustion after the 4.6 deploy. Metric found it, trace located it, log explained it.",
              "Alerting is the discipline that keeps the signals honest: alert on symptoms users feel (error rate over 1 percent for 5 minutes, p95 over 100 ms) not on causes (CPU 80 percent - that is a dashboard line, not a page); every alert links a runbook (first three commands to run); SLOs frame the numbers (99.9 percent availability = about 43 minutes of downtime per month - the error budget that decides whether to ship features or stabilise). The anti-patterns to name: log-and-hope (no alerts on errors - A09 of OWASP), dashboard-only observability (nobody sees it at 3 am), and alert fatigue (40 unactionable pages train the on-call to ignore the pager - the quiet failure that precedes every big one).",
              "Exam framing: expect 'explain the three pillars of observability', 'design logging and alerting for an API', or 'walk through an incident with the three signals'. Give the signals with their formats (JSON lines, time series, spans), the RED metrics, the incident trace (metric -> trace -> log), and the SLO/error-budget arithmetic. The sentence examiners reward: metrics say something is wrong, traces say where, logs say why.",
            ],
            keyTerms: [
              { term: "Structured logging", definition: "JSON event lines with levels and the request-id thread - greppable and aggregatable." },
              { term: "RED metrics", definition: "Rate, Errors, Duration per endpoint - the three request series every service exports." },
              { term: "Trace span", definition: "One timed, attributed hop in a request's journey; spans share a trace-id." },
              { term: "SLO / error budget", definition: "Target reliability (99.9 percent = 43 min/month) that gates feature vs stability work." },
              { term: "Symptom alerts", definition: "Page on what users feel (error rate, latency), not on internal causes." },
            ],
            codeExample: {
              language: "javascript",
              caption: "logger.js - the structured request log line that feeds all three signals",
              code: `import crypto from "crypto";

export function requestLogger(req, res, next) {
  const start = process.hrtime.bigint();
  req.reqId = req.headers["x-request-id"] || crypto.randomUUID();

  res.on("finish", () => {
    const durMs = Number(process.hrtime.bigint() - start) / 1e6;
    const line = {
      ts: new Date().toISOString(),
      level: res.statusCode >= 500 ? "error"
           : res.statusCode >= 400 ? "warn" : "info",
      reqId: req.reqId,
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      durMs: Math.round(durMs * 10) / 10,
      userId: req.user?.id ?? null,
    };
    console.log(JSON.stringify(line));
    // metrics hooks: requests_total++, duration histogram observe(durMs)
  });
  next();
}
// one line per request -> logs (grep), metrics (RED), traces (trace-id)`,
            },
            bullets: [
              "Logs: JSON lines, levels, request-id thread - the raw material of incident review.",
              "Metrics: counters, gauges, histograms; RED = Rate, Errors, Duration per endpoint.",
              "Traces: spans per hop sharing a trace-id; sample 1-10 percent, always errors and slowest.",
              "Incident trace: alert (p95 210 ms) -> dashboard endpoint -> waterfall (SQL 1.8 s) -> log (pool exhausted).",
              "Alert on symptoms with runbooks; SLO 99.9 percent = about 43 minutes of monthly budget.",
              "Anti-patterns: log-and-hope (A09), dashboard-only, alert fatigue training on-call to ignore.",
            ],
            diagram: {
              kind: "layers",
              title: "The three signals, bottom to top",
              caption: "Logs are the ground truth, metrics the summary, traces the connective tissue - request-id joins them.",
              layers: [
                { label: "Alerts + SLOs", note: "symptom pages with runbooks - what wakes the on-call" },
                { label: "Traces", note: "span waterfalls across services - where time went" },
                { label: "Metrics", note: "RED time series + histograms - dashboards and thresholds" },
                { label: "Structured logs", note: "JSON lines with request-id - why it happened" },
              ],
            },
            callout: {
              type: "exam",
              title: "Wrong, where, why",
              body: "The three-signal sentence examiners reward: 'metrics say something is wrong, traces say where, logs say why - the request-id stitches all three.' Then the worked incident (23 -> 210 ms, SQL span 1.8 s, pool-exhaustion log line) demonstrates the sentence instead of reciting it.",
            },
            examQuestions: [
              {
                q: "Explain the three pillars of observability with their formats and the RED method, and walk through one incident using all three signals.",
                marks: 14,
                outline: [
                  "Logs: JSON lines, levels, request-id - greppable ground truth",
                  "Metrics: counters/gauges/histograms; RED = Rate, Errors, Duration",
                  "Traces: spans sharing trace-id; sampling 1-10 percent with errors kept",
                  "Alert: p95 23 -> 210 ms for 10 minutes fires the page",
                  "Metrics locate the endpoint; trace waterfall shows SQL span 1.8 s",
                  "Log at that span: connection-pool exhaustion after deploy",
                  "SLO frame: 99.9 percent = 43 min/month; budget gates ship vs stabilise",
                ],
              },
              {
                q: "Why do good teams alert on symptoms rather than causes? Give two examples of each.",
                marks: 7,
                outline: [
                  "Symptoms are what users feel - error rate over 1 percent, p95 over 100 ms",
                  "Causes are internal - CPU 80 percent, disk 90 percent: dashboard lines",
                  "Cause alerts fire daily and train on-call to ignore pages",
                  "Symptom alerts are actionable: runbook attached",
                  "Both matter - but only symptoms page a human",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Release engineering - versioning, flags and rollbacks",
            body: [
              "Releases are engineering artefacts with their own discipline. Semantic versioning (MAJOR.MINOR.PATCH) states compatibility: PATCH fixes without changing behaviour (1.4.1 -> 1.4.2), MINOR adds backwards-compatible features (1.4 -> 1.5), MAJOR breaks (1.x -> 2.0) - the API-facing rule from 3.2 made contractual; libraries publish SemVer, APIs publish changelogs with deprecation windows (3.2's sunset header). Changelogs are generated from conventional commits (feat:, fix:, breaking:) - the tooling reads commit messages, so 1.6's why-messages become release notes automatically. The release train: cut a release branch, tag (v1.5.0), the pipeline builds the image (4.6), canary promotes, and the tag plus changelog are the audit trail.",
              "Feature flags decouple deploy from release (1.5's distinction operationalised): code ships dark, flags expose it progressively - 1 percent, 10 percent, 100 percent - with targeting (internal users first, then a cohort, then everyone) and instant kill switches without a rollback. Flags are also risk: they are branch-by-abandonment - every stale flag is an untested code path, so hygiene rules exist (every flag has an owner and an expiry; cleanup tickets auto-create; flag count is a metric the team watches). The worked rollout: payment-v2 behind flag 'payments_v2' - internal (day 1), 5 percent (day 2, canary metrics), 25 percent (day 4), 100 percent (day 7), flag removed in the next sprint's cleanup - the full lifecycle with dates.",
              "Rollbacks are rehearsed, not improvised. The ladder from cheapest to most drastic: flag kill switch (seconds, no redeploy - the first response to a feature regression); revision rollback (kubectl rollout undo - 90 seconds, 4.6's canary auto-rollback); blue-green flip back (seconds, if capacity allowed the double environment); database rollback is the honest exception - migrations are forward-only in practice, so schema changes are designed expand-contract: add the new column (expand), deploy code that writes both, backfill, switch reads, then drop the old column (contract) in a later release - never a down-migration on a Friday. The drill discipline: game-day exercises run the rollback quarterly so the 90-second claim stays true, and the postmortem template (timeline, impact, root cause, action items with owners) turns every incident into the next release's checklist.",
              "Exam framing: expect 'explain semantic versioning', 'how do feature flags work and what are their risks', or 'design a rollback strategy'. Give the SemVer table with the API link, the flag lifecycle with dates and the stale-flag risk, and the rollback ladder with expand-contract. The sentence examiners reward: deploy is not release - flags separate them, and the cheapest rollback is a switch you rehearsed.",
            ],
            keyTerms: [
              { term: "SemVer", definition: "MAJOR.MINOR.PATCH encoding compatibility - breaking, additive, fixing." },
              { term: "Feature flag", definition: "Runtime switch decoupling deploy from release; progressive exposure + kill switch." },
              { term: "Branch by abandonment", definition: "Stale flags are untested paths - every flag needs owner and expiry." },
              { term: "Expand-contract", definition: "Forward-only schema change pattern: add, dual-write, backfill, switch, drop later." },
              { term: "Error budget", definition: "SLO's allowed downtime (5.5) deciding whether the release trains ship or stabilise." },
            ],
            table: {
              caption: "The rollback ladder - cheapest first.",
              headers: ["Rung", "Action", "Time", "Covers"],
              rows: [
                ["1", "feature-flag kill switch", "seconds", "feature regressions, no redeploy"],
                ["2", "revision rollback (rollout undo)", "about 90 s", "bad image/deploys"],
                ["3", "blue-green flip back", "seconds", "whole-version regressions"],
                ["4", "expand-contract migration forward-fix", "minutes-hours", "schema issues - no down-migrations"],
                ["5", "restore from backup", "hours", "data loss - the last resort"],
              ],
            },
            bullets: [
              "SemVer: PATCH fixes, MINOR adds, MAJOR breaks - APIs publish changelogs + sunset windows.",
              "Conventional commits feed changelog generation - 1.6's why-messages become release notes.",
              "Flag lifecycle: dark deploy -> internal -> 5 -> 25 -> 100 percent -> cleanup sprint.",
              "Flag risk: branch by abandonment - owner + expiry on every flag; count is a team metric.",
              "Rollback ladder: kill switch -> revision undo -> blue-green flip -> expand-contract -> backup restore.",
              "Rehearse quarterly (game days): the 90-second rollback claim must stay true.",
            ],
            diagram: {
              kind: "cycle",
              title: "The release loop",
              caption: "Version, flag, expose, promote, clean up - and rehearse the exits.",
              steps: [
                { label: "Cut", note: "tag v1.5.0 from main; changelog generated" },
                { label: "Deploy dark", note: "image live, flag off" },
                { label: "Expose", note: "internal -> 5 -> 25 -> 100 percent" },
                { label: "Promote / kill", note: "metrics decide; switch in seconds" },
                { label: "Clean up", note: "flag removed next sprint" },
              ],
            },
            callout: {
              type: "exam",
              title: "Deploy is not release",
              body: "The opening sentence examiners reward: 'deployment puts code in production; release puts it in front of users - feature flags separate the two.' Then the dated rollout (day 1 internal, day 7 full, cleanup sprint) and the expand-contract rule for schema rollbacks cover both halves of the question.",
            },
            examQuestions: [
              {
                q: "Explain semantic versioning with the API-linking rules, the feature-flag lifecycle with its risks, and the rollback ladder including expand-contract for schema changes.",
                marks: 14,
                outline: [
                  "SemVer: PATCH/MINOR/MAJOR semantics; changelogs + sunset deprecations",
                  "Conventional commits -> generated changelogs",
                  "Flags: dark deploy, progressive exposure, kill switch",
                  "Lifecycle with dates: internal day 1, 5 percent day 2, 100 percent day 7, cleanup sprint",
                  "Risk: branch by abandonment - owner + expiry per flag",
                  "Ladder: kill switch -> revision undo -> flip -> expand-contract -> backup",
                  "Expand-contract: add column, dual-write, backfill, switch reads, drop later",
                ],
              },
              {
                q: "Why are database down-migrations avoided in production, and what replaces them?",
                marks: 7,
                outline: [
                  "Down-migrations destroy data irreversibly (dropped columns, converted types)",
                  "Migrations are forward-only in practice",
                  "Expand-contract: additive change first, dual-write, backfill",
                  "Reads switch after parity; old column dropped in a later release",
                  "Backup restore is the last resort - hours, not the plan",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Emerging patterns - PWAs, micro-frontends and AI-assisted development",
            body: [
              "Three patterns are reshaping the discipline, and each is an exam answer of the same shape: what, why, and what it costs. Progressive Web Apps: web apps with an app-like contract - a web app manifest (name, icons, theme), a service worker (a programmable proxy that caches assets and queues offline requests), and installability + push notifications on supported platforms; the worked numbers: Lighthouse PWA criteria met by one manifest, one service worker with a stale-while-revalidate cache strategy, and offline reads of the last menu working on a train - the cost is iOS's partial support (no push on older versions, storage quotas) and cache-invalidation discipline (bump the cache name per deploy or serve stale forever).",
              "Micro-frontends apply the microservice idea to the frontend: independently developed and deployed UI fragments composed into one shell - module federation at build/runtime, or iframes at the blunt end. The trade reads like 1.2's: team autonomy and independent releases (four teams, four deploy trains) versus duplicated dependencies, design-system drift and cross-fragment state complexity. The rule that keeps it honest: adopt per-organisation-scale, not per-fashion - one team with one product should ship a modular monolith frontend (feature folders, shared component library), and micro-frontends earn their overhead when team boundaries genuinely collide (platform + product orgs at scale). The state story is the usual discipline: communicate through URLs and events, not shared globals.",
              "AI-assisted development is the pattern this cohort lives with: code assistants (Copilot-class) draft implementations, generate tests and explain unfamiliar code - the productivity claims are real for boilerplate and test scaffolding, and the caveats are exactly this syllabus's material: generated code needs review (subtle injection patterns and stale API usage appear), secrets and proprietary code belong in policy-governed tools (the 5.4 leak rules extend to prompts), and tests written by the same intelligence that wrote the code verify assumptions, not independence - so generated tests are reviewed with the 5.2 fake-over-mock discipline. The governance line: AI assists the author, the author owns the code - reviews, scans and accountability do not delegate.",
              "Exam framing: expect 'what is a PWA and its components', 'compare micro-frontends with monolith frontends', or 'discuss AI-assisted development with risks'. Give each pattern's definition, one worked example with numbers, and one named cost. The sentence examiners reward: every emerging pattern is an old principle in new clothes - offline-first, team autonomy, and review discipline; the principles of this syllabus are the stable part.",
            ],
            keyTerms: [
              { term: "Service worker", definition: "Programmable proxy script - caches assets, queues offline requests, enables push." },
              { term: "Web app manifest", definition: "JSON describing name, icons, colours - the installability contract." },
              { term: "Micro-frontends", definition: "Independently deployed UI fragments composed in one shell - team autonomy at frontend scale." },
              { term: "Stale-while-revalidate", definition: "Cache strategy: serve cached instantly, refresh in background." },
              { term: "Review discipline", definition: "AI-generated code owned by the author - reviews, scans and tests stay human-accountable." },
            ],
            table: {
              caption: "The three patterns - what, win, cost.",
              headers: ["Pattern", "What it is", "The win", "The cost"],
              rows: [
                ["PWA", "manifest + service worker + install", "offline, install, push without stores", "iOS gaps, cache discipline"],
                ["Micro-frontends", "independently deployed UI fragments", "team autonomy, independent releases", "dup deps, design drift, state seams"],
                ["AI-assisted dev", "assistant drafts code/tests/explanations", "boilerplate + scaffolding speed", "review burden, policy/leak risk"],
              ],
            },
            bullets: [
              "PWA = manifest + service worker; install + offline + push on supported platforms.",
              "Worked offline read: stale-while-revalidate serves last menu instantly, refreshes behind.",
              "PWA cost: iOS partial support; bump cache names per deploy or serve stale forever.",
              "Micro-frontends: module federation/iframes; autonomy bought with duplicated deps and drift.",
              "Adoption rule: modular monolith frontend until team boundaries collide at org scale.",
              "AI assists the author, the author owns the code: reviews, scans, and independent tests stay.",
            ],
            diagram: {
              kind: "compare",
              title: "Monolith frontend vs micro-frontends",
              caption: "The 1.2 fork, replayed on the client side - autonomy against seams.",
              left: {
                heading: "Modular monolith frontend",
                items: [
                  "One build, one deploy train",
                  "Shared component library, no drift",
                  "Simple state and routing",
                  "Fit: one team, one product",
                ],
              },
              right: {
                heading: "Micro-frontends",
                items: [
                  "Per-team deploy trains (4 teams, 4 trains)",
                  "Independent releases and stacks",
                  "Duplicated deps + design-system drift",
                  "Fit: platform + product orgs at scale",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Old principles, new clothes",
              body: "The close examiners reward: 'PWA is offline-first, micro-frontends are team autonomy, AI assistance is review discipline - new mechanisms, syllabus principles.' One sentence per pattern linking it back to 4.2, 1.2 and 5.2 upgrades a current-affairs answer into a course answer.",
            },
            examQuestions: [
              {
                q: "Explain PWAs with their components and one worked offline strategy, and discuss the costs that keep them from replacing native apps.",
                marks: 14,
                outline: [
                  "Manifest: name, icons, theme - the installability contract",
                  "Service worker: programmable proxy, caches, queues offline requests",
                  "Stale-while-revalidate: instant cached menu, background refresh",
                  "Install + push without app stores",
                  "Costs: iOS partial support, storage quotas",
                  "Cache discipline: bump cache names per deploy",
                  "Fit: content and commerce apps; native keeps hardware depth (4.1)",
                ],
              },
              {
                q: "What governance should a team adopt for AI-assisted development and why?",
                marks: 7,
                outline: [
                  "Human review of every generated change - subtle injection patterns appear",
                  "Policy-governed tools: proprietary code and secrets out of prompts (5.4)",
                  "Independent tests: generated tests verify assumptions - review with 5.2 discipline",
                  "Scans still gate (4.6): AI output enters the same pipeline",
                  "Accountability: the author owns the code, not the tool",
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
        { topic: "REST API design + HTTP verbs/status codes", weight: "about 10-12 marks", note: "Unit I and III overlap - the verb table, 401/403, and one worked trace." },
        { topic: "Three-tier architecture + request lifecycle", weight: "about 8-10 marks", note: "Draw the tiers, run the timed trace - opens most papers." },
        { topic: "Monolith vs microservices vs serverless", weight: "about 8-10 marks", note: "Checkout-flow contrast plus the team-size decision rule." },
        { topic: "Auth: sessions, JWT, OAuth 2.0", weight: "about 8-10 marks", note: "Flow diagram + the stateless trade of JWTs." },
        { topic: "Containers and Kubernetes basics", weight: "about 8-10 marks", note: "Dockerfile anatomy, image vs container, pod/deployment/service trio." },
        { topic: "Testing pyramid + test doubles", weight: "about 6-8 marks", note: "Pyramid numbers, mock/stub/spy table, coverage caveat." },
        { topic: "OWASP Top 10 + secure API practices", weight: "about 6-8 marks", note: "Injection, broken auth, validation pipeline - the security unit's core." },
        { topic: "CI/CD pipeline + deployment strategies", weight: "about 6-8 marks", note: "Stage timings, rolling vs blue-green vs canary, rollback story." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every code sample typed once and run. This subject is tool-examined: build one tiny app (an orders API with a web client) across the six weeks and every answer writes itself from memory of that build.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - landscape and contracts", tasks: ["Modern checklist + food-delivery worked example", "Monolith/microservices/serverless fork + checkout contrast", "Three-tier trace with timings", "HTTP verb table + five-case status trace", "CI/CD stage timings + deployment strategies", "Git workflow + JSON contract rules"] },
        { week: "Week 2", focus: "Unit II - frontend", tasks: ["Render pipeline: HTML -> DOM -> CSSOM -> layout -> paint", "Semantic HTML page + a full form with validation", "Box model + flexbox/grid on a real layout", "JS: let/const, arrow functions, async/await fetch", "DOM: select, listen, mutate; delegation", "React: component, props, state, one useEffect; a11y checklist"] },
        { week: "Week 3", focus: "Unit III - backend", tasks: ["Express server with middleware chain by hand", "Design 10 REST endpoints for the orders API", "SQL schema + joins; one NoSQL collection", "Cookie session vs JWT login implemented", "Validation + error middleware; rate limit", "One WebSocket channel; polling vs SSE vs WS table"] },
        { week: "Week 4", focus: "Unit IV - mobile and cloud-native", tasks: ["Native vs hybrid vs cross-platform table", "Write a Dockerfile; build and run the API image", "12-factor checklist against your app", "Kubernetes: pod/deployment/service YAML", "IaaS/PaaS/SaaS/serverless responsibility rows", "CI YAML with build-test-deploy stages; canary plan"] },
        { week: "Week 5", focus: "Unit V - quality and delivery", tasks: ["Jest unit tests + one integration test", "Test doubles table applied to your code", "OWASP Top 10 mapped to your API", "Validation middleware + secret management", "Structured logs + one metric + one trace", "SemVer + feature flag + rollback drill"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Rewrite the anchor tables from memory", "One full request trace, one auth flow, one CI pipeline", "Two papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every architecture answer is a diagram first: three tiers, fork of architectures, or the CI loop - then narrate. Half the marks are structural.",
        "Attach numbers to traces: TLS 40 ms, auth 2 ms, queries 11 ms, 201 in 23 ms - numbers turn prose into engineering.",
        "Pair every advantage with its price: microservices with distributed transactions, serverless with cold starts, JWTs with revocation difficulty.",
        "For API questions, write the endpoint line (verb + path), the request body, the response body and the status code - four lines, full marks.",
        "Auth answers name the stateless trade: JWTs scale but revocation is hard; sessions revoke instantly but need shared storage.",
        "Docker/Kubernetes answers quote the trio: image (immutable artefact), container (running instance), pod (smallest k8s unit).",
        "Security answers follow OWASP order: injection, broken auth, sensitive data exposure - and close with the validation-at-the-boundary rule.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to check diagrams against text.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rewrite the anchor tables (HTTP verbs and statuses, auth comparison, IaaS/PaaS/SaaS responsibility, test doubles, OWASP Top 10), re-run one request trace, one JWT login flow and the Dockerfile anatomy from memory, and re-quote the three 'continuous' definitions. No new material tonight.",
      ],
      bullets: [
        "Calling POST idempotent - it is the one common verb that is not; retries duplicate orders.",
        "Mixing 401 with 403 - unauthenticated vs forbidden; examiners probe the pair every year.",
        "Saying JWTs are encrypted - they are signed (Base64-visible payload); encrypt separately if needed.",
        "Confusing image and container - the image is the artefact, the container is the running instance.",
        "Calling Docker a virtual machine - containers share the host kernel; VMs virtualise hardware.",
        "Putting a database inside the same container as the API - one process per container is the rule.",
        "Writing money as floats in payload examples - integer paise or decimal strings only.",
        "Claiming tests prove absence of bugs - coverage measures executed lines, not correctness.",
        "Skipping the 0-RTT/canary style caveats - every modern technique has a named price; quote it.",
        "Forgetting CORS in browser-API answers - the browser blocks cross-origin calls without headers.",
      ],
    },
  ],
};
