/**
 * Book 00 — The Roadmap.
 *
 * Metadata copied verbatim from books-data.ts; all 14 chapters expanded to the
 * series format (deep dive, diagram, code example, pitfalls, field checklist,
 * key terms, interview answers, quiz) following src/lib/books/_reference.ts.
 */
import type { Book } from "../types";

export const book00: Book = {
  id: "book-00",
  number: 0,
  title: "The Roadmap",
  subtitle: "Book 00 of 13 · The Effortless Series",
  tagline:
    "Start here. The twelve-month path that takes a self-taught beginner to a hired, production-ready engineer in the AI era.",
  description:
    "How the thirteen books connect, why each one exists, and the twelve-month path that takes a self-taught beginner to a hired, production-ready engineer in the AI era.",
  layer: "Map",
  layerQuestion: "How do the thirteen books connect?",
  accentColor: "#f5b942",
  emoji: "00",
  months: "Start here",
  chapters: [
    {
      number: 1,
      title: "Why This Series Exists (and Who It Is For)",
      summary:
        "Nobody sits a beginner down and explains the whole machine. Tutorials teach parts. Production requires the whole. This series is that handoff.",
      keyIdea: "Effortless is not zero effort — it is effort spent once, in advance, on purpose.",
      deepDive: [
        {
          heading: "The gap tutorials never close",
          paragraphs: [
            "Tutorials teach you to build a feature when everything works. Production asks a different question: what happens when the disk fills, the certificate expires, the migration locks its table at lunchtime, the secret leaks to a public repo, the queue backs up during launch week. Nobody sits a self-taught beginner down and explains the whole machine — you get parts and assemble the rest alone, and the missing pieces are invisible precisely until they fail. This series is that missing handoff.",
            "Effortless here means effort spent once, in advance, on purpose. The backup you verified before you needed it, the alert you wrote before the outage, the rollback you rehearsed on staging, the checklist your last incident produced — each is an hour spent now so a future night is short. Every book in the series takes one discipline and walks it the way a practitioner would: mechanisms first, then real commands against real services, then the pitfalls, then the checklist that turns reading into habit.",
          ],
        },
        {
          heading: "Who this is actually for",
          paragraphs: [
            "The self-taught developer who can ship a demo but cannot explain why it stands up. The bootcamp graduate who has written React for a year but never opened a query plan or read a TLS handshake. The working junior who deploys on Fridays and holds their breath. And the AI-era beginner who can generate a finished-looking product in an afternoon but has no vocabulary for what will break first. If you recognize yourself in any of those, this map was drawn for you.",
            "The prerequisites are deliberately small: an editor, git, Docker, one cloud free tier, four calendar slots a week, and one project you actually care about. No computer science degree, no mathematics beyond arithmetic and a little probability, no permission to wait for. What the series does demand is tolerance for breaking things on purpose in scratch environments — that is the tuition — and the discipline of writing down what broke, because your own incidents are the best curriculum you will ever own.",
          ],
        },
        {
          heading: "How to read the series",
          paragraphs: [
            "Every chapter follows one skeleton: the idea in a sentence, a deep dive, a diagram, four pitfalls, a checklist, key terms, interview answers and a quiz. The checklist is the product — reading without installing the habits is entertainment. Each book ends with you having done something to a real project: added the index, rotated the key, written the alert, run the load test. Collect commits, not highlights.",
            "Order matters more than speed: data before identity, identity before defense, the wire before architecture, proof before shipping. One book a month, with the project absorbing each checklist the same week you read it, is the pace the twelve-month plan in chapter 12 formalizes — and the rule about never reading more than one book ahead is what keeps the knowledge attached to something real. Slow is smooth; smooth is fast.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where self-taught paths stall",
        caption:
          "The stall is rarely talent — it is the missing map and the missing project.",
        start: "How will you learn production?",
        branches: [
          {
            label: "Follow the map, book a month",
            outcome: "Compounding, verifiable skill",
            good: true,
          },
          {
            label: "Tutorial-hop by trend",
            outcome: "Fragments; gaps you cannot name",
            good: false,
          },
          {
            label: "Build without fundamentals",
            outcome: "Looks finished, fails oddly",
            good: false,
          },
          {
            label: "Read without a project",
            outcome: "Evaporates within weeks",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "A working toolkit verified in five commands beats a perfect plan you never start.",
        code: [
          "# Verify the toolkit before Book 01 begins",
          "git --version || echo 'git missing — install it first'",
          "docker info > /dev/null 2>&1 \\",
          "  || echo 'docker daemon not running'",
          "",
          "# A scratch database you are allowed to break weekly",
          "docker run -d --name pg-scratch -p 127.0.0.1:5432:5432 \\",
          "  -e POSTGRES_PASSWORD=local-scratch postgres:16-alpine",
          "",
          "# Evidence beats memory: start the engineering log today",
          "mkdir -p ~/eng-log",
          "echo series-started-on-$(date +%F) >> ~/eng-log/log.md",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Collecting courses and bookmarks instead of finishing one mapped path.",
          fix: "One book a month, one project, every checklist installed the week you read it. Depth compounds; collecting does not.",
        },
        {
          mistake: "Reading without a project to absorb the checklists.",
          fix: "Pick one project now — multi-user, money-shaped, public URL — and let every chapter leave a commit in it.",
        },
        {
          mistake: "Skipping the boring books (databases, secrets) to chase AI topics.",
          fix: "The exciting parts stand on the boring ones. The outage books come before the résumé books for a reason.",
        },
        {
          mistake: "Waiting for a mentor before starting.",
          fix: "The series is the mentor: mechanisms, commands, pitfalls, checklists. Keep an engineering log instead of office hours.",
        },
      ],
      fieldChecklist: [
        "I have a code editor, git, Docker, and one cloud free tier ready.",
        "I have a notebook (paper or digital) for incident checklists.",
        "I have booked four study slots per week in my calendar.",
        "I accepted that I will break things on purpose, in scratch environments.",
        "I have one real project picked that will absorb every checklist in the series.",
        "I have started an engineering log and written the first entry today.",
      ],
      keyTerms: [
        {
          term: "Production readiness",
          definition:
            "The state where a system survives the events tutorials never simulate: traffic spikes, expired certificates, half-finished deploys.",
        },
        {
          term: "Field checklist",
          definition:
            "A short list of installable habits per chapter; reading without doing them is entertainment, not training.",
        },
        {
          term: "Scratch environment",
          definition:
            "A disposable setup — a local container or sandbox account — where breaking things on purpose costs nothing.",
        },
        {
          term: "Engineering log",
          definition:
            "A dated, searchable record of what you built, broke and decided; the raw material for checklists, post-mortems and interview stories.",
        },
      ],
      interviewQuestions: [
        {
          q: "You are self-taught. How do you know you are not missing something fundamental?",
          a: "I follow a structured map — databases, encryption, auth, secrets, security, networking, system design, scaling, load testing, testing, deployment, disaster recovery, monitoring — and I keep a checklist from every incident. The map tells me what exists; the checklists tell me what actually breaks.",
        },
        {
          q: "Why does a structured roadmap matter more now that AI can answer any question?",
          a: "Because answers are free and judgment is not. AI can explain WAL or TLS on demand, but it cannot tell you which discipline your project is missing this month. A map turns infinite answers into a sequence: learn data first, then identity, then defense, installing each into a project the same week. The map is what makes the answers compound instead of scatter.",
        },
        {
          q: "What does 'production-ready' actually mean for a junior engineer?",
          a: "It means I can trace a request from DNS to the database row and name what protects each hop: TLS at the edge, validation at the boundary, a transaction around the write, secrets injected at runtime, logs and metrics on the way out. It also means I have personal receipts — a verified restore, a rehearsed rollback, a load report — not just confidence.",
        },
      ],
      quiz: [
        {
          question: "What does 'effortless' mean in this series?",
          options: [
            "Writing code with no effort at all",
            "Effort spent once, in advance, on purpose — where it compounds",
            "Using AI so humans never type",
            "Skipping fundamentals to ship faster",
          ],
          answerIndex: 1,
          explanation:
            "The promise is not laziness — it is front-loading effort where it compounds: a verified backup, a rehearsed rollback, a written runbook. Effort spent once in advance is what makes every later effort cheap.",
        },
        {
          question:
            "You have ten free hours this week: a third framework tutorial, or Book 01 plus its checklist installed on your project. What does the series recommend?",
          options: [
            "The tutorial — frameworks are what job listings mention",
            "Split evenly; they are equally valuable",
            "The book and checklist — fundamentals transfer, and the project absorbs them as proof",
            "Neither — wait until you feel ready",
          ],
          answerIndex: 2,
          explanation:
            "Fundamentals transfer across every framework and every employer; framework tutorials expire. The book plus the checklist produces both durable knowledge and a dated artifact in your project — proof, not exposure.",
        },
        {
          question: "Which artifact proves a chapter's checklist was actually done?",
          options: [
            "A commit, command output or log entry in a real project",
            "A highlighted page in the book",
            "A screenshot of the table of contents",
            "Finishing the quiz on the first try",
          ],
          answerIndex: 0,
          explanation:
            "A checklist that never touched a repository is a wish. Commits, command output and log entries are the evidence that the habit was installed, and they double as interview material later.",
        },
      ],
    },
    {
      number: 2,
      title: "The 2026 Landscape: What Actually Changed",
      summary:
        "The fundamentals did not change. The speed did. Speed without fundamentals is just a faster way to cause an outage.",
      keyIdea: "Your risk is confidence asymmetry: you can produce output that looks finished, so nothing forces you to learn the parts that are invisible when things go well.",
      deepDive: [
        {
          heading: "What did not change",
          paragraphs: [
            "Packets still get lost, databases still lose writes without a durability log, credentials still leak, caches still serve stale answers, and TLS still costs round trips. Postgres still enforces exactly the constraints you declare, Redis still evicts by its configured policy, and the network still refuses to be instantaneous. Everything in Books 01 through 08 would be recognizable to an engineer from a decade ago — that is the point. Fundamentals age slowly, which makes them the safest investment in a fast decade.",
            "What changed is the price of the first draft. Code, configs, tests and even design documents arrive nearly finished in seconds from a model, and the bottleneck moved from typing to judging: deciding what to build, reviewing what appeared, verifying it under real conditions. When drafting was expensive, you learned by writing. Now you can produce a finished-looking artifact long before you can produce a correct one, so the learning has to happen in review and verification instead.",
          ],
        },
        {
          heading: "Confidence asymmetry, made concrete",
          paragraphs: [
            "AI output looks like a senior's pull request: named variables, comments, even tests. But plausibility is not correctness. The diff handles the happy path and quietly breaks on retry. The migration works on an empty development database and locks a million-row table in production. The example config pastes a connection string into a file because that is how examples are written. Nothing in the artifact signals the gap between plausible and correct — only fundamentals can see it, which is why this series keeps insisting on them.",
            "The failure shape is new. Yesterday's beginner shipped something obviously broken and got feedback within minutes. Today's beginner can ship something subtly broken that passes review, passes the demo, and fails at two in the morning under real concurrency. So the series puts the verification disciplines — testing, load testing, monitoring — on the same pedestal as the building disciplines, and treats 'the model wrote it' as a sentence that has never once satisfied a post-mortem.",
          ],
        },
        {
          heading: "Managed is not understood",
          paragraphs: [
            "The 2026 default stack is managed end to end: Cloudflare or Vercel at the edge, a managed Postgres, object storage, GitHub Actions building and deploying, a managed queue. Each service removes operations and none of them removes understanding. The managed database still deadlocks, the edge cache still serves stale responses on the paths you forgot, the managed queue still needs idempotent consumers. You own the design decisions; the vendor owns the plumbing — and outages live exactly at that boundary.",
            "So treat every managed service as a black box you must be able to reason about from the outside. Know its limits before you need them: the connection ceiling on your Postgres tier, what the CDN caches by default and for how long, what the queue guarantees about ordering and duplicate delivery. When the incident arrives, the vendor's dashboard tells you what broke; only fundamentals tell you why it broke and what to change so it does not repeat.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "The workflow that changed",
        caption:
          "Drafting collapsed to seconds; judgment did not — the gap between them is where careers and outages now live.",
        left: {
          heading: "What changed (drafting)",
          items: [
            "First draft of code, tests, configs",
            "Boilerplate and plumbing",
            "Explaining an unfamiliar codebase",
            "Writing the first version of a runbook",
          ],
        },
        right: {
          heading: "What did not (judging)",
          items: [
            "Reviewing for failure modes",
            "Designing for the unhappy path",
            "Verifying under real traffic",
            "Owning every line you merge",
          ],
        },
      },
      codeExample: {
        language: "yaml",
        caption:
          "In 2026 the pipeline, not the person, is the gate — make the machine require the checks.",
        code: [
          "# The pipeline, not the person, is the merge gate",
          "name: ci",
          "on: [pull_request]",
          "jobs:",
          "  verify:",
          "    runs-on: ubuntu-latest",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - uses: actions/setup-node@v4",
          "        with:",
          "          node-version: 22",
          "      - run: npm ci",
          "      - run: npm run lint && npm test && npm run build",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Letting plausible AI output replace verification because review feels slow.",
          fix: "Budget review time as part of the task. Reading a diff for failure modes is the work now; typing was never the expensive part.",
        },
        {
          mistake: "Learning only framework releases and AI news, never the layer beneath.",
          fix: "For every hour on the new thing, spend an hour on the layer it stands on — the framework changes, the wire does not.",
        },
        {
          mistake: "Trusting a managed service's defaults with production data.",
          fix: "Read the limits and failure modes: connection ceilings, cache TTLs, backup retention. Defaults are tuned for demos, not for your outage.",
        },
        {
          mistake: "Measuring progress by output volume.",
          fix: "Count installed habits instead: one verified backup, one rehearsed rollback, one load report. Volume impresses nobody at 2 a.m.",
        },
      ],
      fieldChecklist: [
        "I can name three things AI cannot be trusted to do alone (secrets, migrations, auth logic).",
        "I understand that my deploy pipeline, not my code, decides how safe releases are.",
        "I treat every managed service as something I still need to understand underneath.",
        "I review AI diffs for failure modes first: retries, empty input, concurrency, partial failure.",
        "For every managed service I use, I can say what it does when it fails, not just when it works.",
      ],
      keyTerms: [
        {
          term: "Confidence asymmetry",
          definition:
            "The 2026 gap where you can produce finished-looking output long before you can produce correct output, hiding missing fundamentals.",
        },
        {
          term: "Managed service",
          definition:
            "A vendor-operated component that removes operations but not understanding; you still own limits, failure modes and design decisions.",
        },
        {
          term: "Verification discipline",
          definition:
            "The practice of proving behavior under real conditions — tests, load reports, monitors — instead of trusting how the demo went.",
        },
        {
          term: "Default posture",
          definition:
            "The out-of-the-box configuration of a service; convenient for demos, dangerous in production until you read and deliberately change what matters.",
        },
      ],
      interviewQuestions: [
        {
          q: "How has AI changed how you work as an engineer?",
          a: "Drafting is free now, so I spend my time on specification, review, and verification. I treat AI output like a junior dev's PR: great velocity, but I own every line, especially around auth, secrets, and data migrations where a plausible-looking diff can be quietly wrong.",
        },
        {
          q: "What is the biggest risk in AI-assisted development, honestly?",
          a: "Velocity without verification. A model produces a diff that looks finished, so teams merge it with less scrutiny than a human PR would get. The dangerous cases are invisible in the happy path — retries, migrations on large tables, auth edge cases. My rule: every generated change gets the same failure-mode review and the same tests as any other change, and the merge gate is the pipeline, not enthusiasm.",
        },
        {
          q: "You use managed platforms everywhere. Why learn the fundamentals underneath?",
          a: "Because the managed layer decides the limits, and I decide the design. I need to know my Postgres instance's connection ceiling before pool math matters, what the CDN caches before I blame the app for stale data, and how the queue behaves when a consumer is slow. Outages are diagnosed at the boundary between what the vendor owns and what I own — that boundary is exactly the fundamentals.",
        },
      ],
      quiz: [
        {
          question: "Which activity changed the most between 2015 and 2026?",
          options: [
            "Routing packets across the internet",
            "Producing the first draft of code, tests and configs",
            "Enforcing database constraints",
            "Negotiating a TLS handshake",
          ],
          answerIndex: 1,
          explanation:
            "Drafting collapsed to near zero; the wire, the database and the handshake behave as they always have. The bottleneck moved to judging and verifying what the machine produces.",
        },
        {
          question:
            "An AI-generated migration passes on an empty development database. What verification is still missing?",
          options: [
            "None — a passing local run is the bar",
            "A spelling check on the migration name",
            "A rehearsal against a production-shaped table, plus a written rollback plan",
            "A request for the model to regenerate it twice",
          ],
          answerIndex: 2,
          explanation:
            "Locking behavior, backfill cost and rollback only appear against realistic volume. The empty database hides exactly the failures this series exists to prevent.",
        },
        {
          question: "What does 'managed' never remove?",
          options: [
            "The vendor's on-call rotation",
            "Your responsibility for limits, failure modes and design decisions",
            "The need for version control",
            "Network latency",
          ],
          answerIndex: 1,
          explanation:
            "Vendors absorb operations, not understanding. Connection ceilings, cache defaults and delivery guarantees still shape your design — and they are the first place incidents come from.",
        },
      ],
    },
    {
      number: 3,
      title: "Coding with AI Without Blunders: Fundamentals as Your Accuracy Engine",
      summary:
        "AI writes what you ask for. The blunders come from asking for the wrong thing, or accepting the wrong answer. Fundamentals are how you notice.",
      keyIdea: "You do not need to out-code the machine. You need to out-verify it.",
      deepDive: [
        {
          heading: "Specify before you generate",
          paragraphs: [
            "The first species of blunder is asking for the wrong thing, because the model completes whatever you wrote — including a wrong spec. So the skill upstream of the prompt is the behavior contract: inputs, outputs, failure behavior, and the things that must never happen. Ten lines of specification turn 'write a checkout function' into something reviewable. If you cannot write the contract, you do not understand the feature yet; the prompt is a mirror, and it shows the gap.",
            "Make the contract carry the hard requirements the model would otherwise skip. 'Validate a coupon: reject expired ones, one per user, idempotent under retry, never double-apply on concurrent requests' — that sentence hands the model the concurrency constraint and hands you the acceptance tests before any code exists. The spec becomes the test file, the test file becomes the merge gate, and the generated implementation now has something honest to fail against.",
          ],
        },
        {
          heading: "Review like a skeptical senior",
          paragraphs: [
            "Read every diff with the question 'what does this break?', never 'does this work?'. What happens on retry, on empty input, on two requests at once, on the dependency being down? Hunt the categories that quietly hurt: swallowed errors, missing transactions around multi-step writes, secrets or connection strings pasted into files, N+1 queries, and new endpoints missing their authorization check. The happy path was already handled — that is the cheapest thing a model produces.",
            "Then hold the ownership line: never merge a line you cannot explain. If the model used a library feature you do not know, stop and learn it, or replace it with code you do. AI has removed the cost of writing; it must not be allowed to remove the cost of understanding. Production does not accept 'the model wrote it' as a root cause, and neither will an interviewer who asks you to walk through your own pull request.",
          ],
        },
        {
          heading: "Make verification mechanical",
          paragraphs: [
            "Willpower is not a review process; machines are. Require tests with every generated feature and read them — a tautology that asserts the mock equals the mock proves nothing and blocks nothing. Run the suite in CI so an unverified diff cannot merge. Keep secrets out of generated files entirely: injected at runtime from a secrets manager, never as literals. Ship risky changes behind a feature flag, and watch error rates and latency after release, because the demo is not the deployment.",
            "This is why fundamentals are the accuracy engine. You can only review what you can recognize: Book 01 teaches you to spot the missing index and the naked write, Book 03 the missing authorization check, Book 05 the injection and the trusted client value, Book 10 the tautological test. Each book adds review vocabulary to your eye. The model keeps producing faster; you keep verifying sharper — and that combination, drafting plus judgment, is the actual 2026 engineering job.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The verification loop",
        caption: "Drafting is one cheap step; the loop around it is the discipline.",
        steps: [
          { label: "Specify", note: "behavior contract first" },
          { label: "Generate", note: "AI drafts fast" },
          { label: "Review", note: "failure modes, line by line" },
          { label: "Test", note: "CI, not willpower" },
          { label: "Watch", note: "flags and metrics after release" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The tests encode the spec before code exists; the generated diff must survive them or it does not merge.",
        code: [
          "// The spec becomes tests; the AI diff must survive them.",
          "import { applyCoupon } from './coupons';",
          "it('rejects an expired coupon', async () => {",
          "  await expect(applyCoupon('OLD', 'user_42'))",
          "    .rejects.toThrow('expired');",
          "});",
          "",
          "it('never double-applies on concurrent retries', async () => {",
          "  const tries = [",
          "    applyCoupon('SAVE10', 'user_42'),",
          "    applyCoupon('SAVE10', 'user_42'),",
          "  ];",
          "  const ok = (await Promise.allSettled(tries))",
          "    .filter(r => r.status === 'fulfilled');",
          "  expect(ok).toHaveLength(1);",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Prompting for a feature with no written behavior contract.",
          fix: "Write inputs, outputs, failure behavior and invariants first. The spec becomes the tests, and the tests become the merge gate.",
        },
        {
          mistake: "Accepting a diff with a line you cannot explain.",
          fix: "Stop and learn that line or rewrite it in code you own. Understanding is not optional overhead — it is the deliverable.",
        },
        {
          mistake: "Keeping AI-suggested connection strings or keys in files.",
          fix: "Secrets are injected at runtime from a secrets manager or env vars, and generated files get scanned before commit.",
        },
        {
          mistake: "Trusting generated tests without reading them.",
          fix: "Check that tests assert real behavior, not mock echoing mock. A tautology green in CI is more dangerous than no test.",
        },
      ],
      fieldChecklist: [
        "I never merge an AI diff I cannot explain line by line.",
        "I ask 'what does this break?' before 'does this work?'",
        "I keep AI-suggested secrets and connection strings out of files — always injected at runtime.",
        "I demand tests with any generated feature, and I check the tests are not tautologies.",
        "I write the behavior contract before the prompt, and it becomes the test file.",
        "I check generated tests for tautologies before trusting a green run.",
      ],
      keyTerms: [
        {
          term: "Behavior contract",
          definition:
            "The written inputs, outputs, failure behavior and invariants a feature must satisfy; written before generation, enforced as tests.",
        },
        {
          term: "Tautological test",
          definition:
            "A test that asserts the mock matches the mock or restates the implementation; green in CI while proving nothing.",
        },
        {
          term: "Feature flag",
          definition:
            "A runtime switch that lets risky code ship dark and be toggled off in seconds when the metrics disagree with the demo.",
        },
        {
          term: "Runtime injection",
          definition:
            "Providing secrets to a process at start time from a secrets manager or environment — never as literals in generated files.",
        },
      ],
      interviewQuestions: [
        {
          q: "Do you trust AI-written code?",
          a: "I trust verified code. I use AI for velocity and treat its output as a draft: review the diff for failure modes, require tests, ship behind a flag, and watch the metrics. The fundamentals in this series are exactly the review vocabulary that makes that loop safe.",
        },
        {
          q: "Walk me through your process for a feature you built with AI assistance.",
          a: "I write the behavior contract first — inputs, outputs, failure modes, invariants — and turn it into failing tests. Then I generate the implementation and review the diff for the categories that hurt: retries, concurrency, authorization, swallowed errors. I refactor anything I cannot explain, run the suite in CI, ship behind a flag, and watch error rates and latency for the first day. The AI accelerated drafting; the process stayed professional.",
        },
        {
          q: "How do you review a test suite generated by AI?",
          a: "I read the assertions, not the names. I look for tautologies — tests where the expected value is derived from the same code under test or from the mock itself. Then I check coverage of the failure modes in the spec: expired inputs, concurrent calls, empty results. If the suite only proves the happy path, I write the missing cases myself before merging.",
        },
      ],
      quiz: [
        {
          question: "Where do most AI coding blunders originate?",
          options: [
            "The model computes too slowly",
            "Asking for the wrong thing, or accepting a wrong answer",
            "Token costs",
            "The IDE plugin version",
          ],
          answerIndex: 1,
          explanation:
            "Generation is usually fine; the failure is in the request and the acceptance. A precise behavior contract and a failure-mode review remove both halves of the problem.",
        },
        {
          question:
            "An AI diff includes a line using an API you have never seen; the tests pass. Best move?",
          options: [
            "Merge — green tests are the gate",
            "Add a TODO comment and merge",
            "Learn the API or replace the line with code you can explain, then merge",
            "Regenerate until the line disappears",
          ],
          answerIndex: 2,
          explanation:
            "Ownership is the rule: you are the author of record. Understanding one line now is cheaper than debugging it at two in the morning, and the knowledge compounds.",
        },
        {
          question: "What makes a generated test tautological?",
          options: [
            "It runs in CI",
            "It uses fake data",
            "It was written after the implementation",
            "The assertion echoes the implementation or the mock, so it cannot meaningfully fail",
          ],
          answerIndex: 3,
          explanation:
            "A test must be able to fail against a wrong implementation. If the expected value is derived from the same code or mock under test, it is a mirror, not a gate.",
        },
      ],
    },
    {
      number: 4,
      title: "The Map: How the 13 Books Connect",
      summary:
        "Thirteen books sound like thirteen unrelated subjects. They are actually one system, seen from thirteen angles.",
      keyIdea: "Picture one user request. It crosses the network (06), hits a load balancer and a cache (08), lands on your service, which proves who the caller is (03) and what they may do (03, 05), opens a pooled connection and runs a transaction (01), reads keys from a secrets manager (04) wrapped in TLS (02), publishes an event to a queue (07, 08), returns through the reverse proxy with security headers (05, 06) — and the whole journey left traces you can query later (13).",
      deepDive: [
        {
          heading: "One request, thirteen disciplines",
          paragraphs: [
            "Follow one request through the map. DNS resolves through the CDN (Book 06), TLS terminates at the edge (Book 02), the load balancer picks a stateless instance (Book 08). Middleware validates the session or JWT (Book 03) and checks what the caller may do (Books 03 and 05). The handler opens a pooled connection and runs a transaction (Book 01), reads keys from the secrets manager (Book 04), maybe touches Redis and a queue (Books 07 and 08), and returns through the reverse proxy with security headers (Books 05 and 06) — leaving traces you can query later (Book 13).",
            "That journey is the proof the books form one system: no subject floats alone, because each one is a hop the request actually makes. When you can narrate it from memory you hold two things at once — the skeleton for every system design interview, and the triage reflex for every incident, because you always know which hop you are standing on when something hurts. Thirteen books, one request, one map.",
          ],
        },
        {
          heading: "Three bands, one order",
          paragraphs: [
            "The books cluster into bands. The foundation band — Books 01 through 06 — decides whether data is true, private, reachable only by the right code, and moving over a wire you understand. The architecture band — Books 07 and 08 — decides the shape: services, queues, caches, scaling. The proof and operations band — Books 09 through 13 — decides whether you can demonstrate the system and keep it alive. Chapters 5 through 11 of this book walk the bands in order.",
            "The order inside the bands is load-bearing. Encryption (02) follows databases (01) because you protect what you can first name. Secrets (04) follows authentication (03) because keys are identity for your code. The wire (06) precedes architecture (07) because latency budgets are design inputs. Proof (09, 10) precedes deployment (11) because you do not automate the shipping of things you cannot verify. Take the books in order and each one hands the next its vocabulary.",
          ],
        },
        {
          heading: "The map as a daily tool",
          paragraphs: [
            "Use the map as a diagnostic index. Redis is evicting your hot keys — that is Book 08. A stale response survived the deploy — Book 06. A JWT expired mid-session and nobody can say why — Book 03. A migration locked the orders table — Book 01. When something breaks, 'which hop failed' turns everything-is-wrong panic into a bounded checklist with a book number on it. That single question is worth most of this book.",
            "It is also a scope filter for AI-era work. When a generated feature touches a hop you have not studied, the map names the book to read before the merge, not after the incident. And it converts the vague intention to 'learn infrastructure eventually' into a queue with names and months attached — which is exactly what chapter 12 turns into the twelve-month plan, one book a month, never more than one ahead of the project.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "One request, hop by hop",
        caption:
          "Each stage is a book — the map is a request journey, not a bookshelf.",
        stages: [
          { label: "Edge + TLS", note: "DNS, CDN, cert — 06, 02" },
          { label: "Load balancer", note: "stateless instances — 08" },
          { label: "Identity check", note: "JWT or session — 03, 05" },
          { label: "Service logic", note: "pooled tx, secrets — 01, 04" },
          { label: "Async side effects", note: "queue, cache — 07, 08" },
          { label: "Response + traces", note: "headers, logs — 05, 06, 13" },
        ],
      },
      pitfalls: [
        {
          mistake: "Treating the thirteen books as unrelated electives to sample.",
          fix: "Read them as hops of one request in order — data, identity, defense, wire, architecture, proof, operations. The order is load-bearing.",
        },
        {
          mistake: "Memorizing the map but never tracing a real request.",
          fix: "Pick your project's actual request and name every hop out loud, with the tool involved. Memory comes from tracing, not rereading.",
        },
        {
          mistake: "Studying architecture before the fundamentals it stands on.",
          fix: "Books 07 and 08 assume 01 through 06. Scaling a system you cannot yet secure just spreads the bug across more machines.",
        },
        {
          mistake: "Skipping books you think managed services hide for you.",
          fix: "Vendors hide operations, not concepts. The managed queue still needs idempotent consumers — that is Book 07's problem, not one you can skip.",
        },
      ],
      fieldChecklist: [
        "I can trace one request through at least eight of the thirteen disciplines from memory.",
        "I know which three books protect data (01, 02, 05) and which three prove it works (09, 10, 13).",
        "I have picked my reading order and booked it against the 12-month plan.",
        "I can narrate the request journey from DNS to database row and back, naming the tool at each hop.",
        "When something breaks, I ask which hop of the journey failed before opening any dashboard.",
      ],
      keyTerms: [
        {
          term: "Request journey",
          definition:
            "The full path of one user request — DNS, TLS, balancer, identity, logic, queue, response, traces; the spine the thirteen books hang on.",
        },
        {
          term: "Discipline map",
          definition:
            "The ordered grouping of the thirteen books into foundation, architecture and proof-operations bands; the series' table of contents and diagnostic index.",
        },
        {
          term: "Stateless service",
          definition:
            "A service holding no in-process session state, so any instance can serve any request — the property load balancers and horizontal scaling depend on.",
        },
        {
          term: "Trace",
          definition:
            "The per-request record linking every hop's timing and errors into one queryable story — Book 13's answer to 'where did that second go?'",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through what happens when a user hits your API.",
          a: "DNS resolves through the CDN, TLS terminates at the edge, the load balancer picks a stateless instance, middleware validates the session or JWT, the request passes input validation, uses a pooled DB connection inside a transaction, maybe touches Redis and a queue, and every hop emits logs, metrics and traces I can query later. Each clause is a book in my map.",
        },
        {
          q: "How do you decide what to learn next as an engineer?",
          a: "I look at the request journey of my own project and find the hop I cannot explain. If I cannot say what happens when TLS terminates, or why the queue consumer needs idempotency, that hop names my next book. It keeps learning tied to shipping instead of to trends — each gap is something the project needs the week I close it.",
        },
        {
          q: "Why learn databases before networking, or security before scaling?",
          a: "Because each layer gives the next one its vocabulary. Scaling decisions are latency budgets, which need the wire (06). Security review is authorization plus validation, which needs identity (03). And everything stands on storage (01), because that is where truth lives. Out of order, the same material reads as trivia; in order, it reads as consequences.",
        },
      ],
      quiz: [
        {
          question:
            "In the map, which books answer 'who is this caller, and what may they do'?",
          options: [
            "Book 01 — databases",
            "Book 03 and Book 05 — identity and defense",
            "Book 08 — scaling",
            "Book 13 — monitoring",
          ],
          answerIndex: 1,
          explanation:
            "Authentication proves who the caller is (03); authorization decides what the caller may do (05). They sit at the identity hop of the request journey.",
        },
        {
          question:
            "Checkout sometimes charges twice when clients retry. Which part of the map do you open?",
          options: [
            "The wire — Book 06",
            "Identity — Book 03",
            "Data and architecture — transactions and idempotency, Books 01 and 07",
            "Monitoring — Book 13",
          ],
          answerIndex: 2,
          explanation:
            "Double charges are an idempotency and transaction problem. The database enforces the unique key; the design makes retries safe — both live in the data and architecture bands.",
        },
        {
          question:
            "What makes the thirteen books one system rather than thirteen subjects?",
          options: [
            "They share a publisher and an accent color",
            "Each one is a hop a real request makes, with one direction of authority per fact",
            "They all use PostgreSQL exclusively",
            "They are the same length",
          ],
          answerIndex: 1,
          explanation:
            "The request journey is the connective tissue: every book protects, moves or proves something on the path a real request takes through your system.",
        },
      ],
    },
    {
      number: 5,
      title: "The Data and Trust Layer: Books 01 and 02",
      summary:
        "Everything you will ever build stands on two things: where the truth is stored, and who can see it.",
      keyIdea: "Book 01 decides what is true. Book 02 decides who can read it. Get these wrong and every later discipline is decoration on a broken base.",
      deepDive: [
        {
          heading: "What months 1 and 2 install",
          paragraphs: [
            "Book 01, in months 1 and 2, teaches data: access patterns before engines, Postgres as the honest default, indexes and query plans, transactions with real isolation levels, connection pooling, replicas, zero-downtime migrations and verified backups. Its checklist produces artifacts you can show: an EXPLAIN ANALYZE you can read line by line, a migration that shipped without locking, a restore you have personally performed. By the end you stop fearing the database and start reading it.",
            "Book 02, in month 2, teaches trust: TLS versions and the handshake, encryption at rest, field-level encryption for the columns whose leak is a lawsuit, hashing versus encrypting versus encoding, and key rotation as a rehearsed runbook rather than an emergency. Its checklist produces a modern protocol floor on every endpoint, encrypted dangerous columns with runtime-injected keys, and a one-sentence answer to the question 'if the disk was stolen, what exactly is readable?'",
          ],
        },
        {
          heading: "Two books, one request",
          paragraphs: [
            "On the request journey this layer owns three moments. Book 02 owns the first: TLS terminates at your edge, so the data crosses the public internet encrypted. Book 01 owns the middle: the service opens a pooled connection and runs a transaction, so the fact changes atomically under constraints. Book 02 owns the last: dangerous columns are encrypted at rest and backups are encrypted too, so a stolen disk reads as noise. One request, two books, no gaps.",
            "The split also sorts failure symptoms. Slow queries, deadlocks, table bloat and replication lag point at Book 01; handshake failures, expired certificates, mixed content and leaked snapshots point at Book 02. Put both on one layer of your mental model — the data layer — and incidents start telling you which half to open before you have read a single log line. That is what a map is for.",
          ],
        },
        {
          heading: "Why this layer is first",
          paragraphs: [
            "Every later book assumes this one. Authentication stores credentials — a data problem with an encryption problem attached. Secrets management encrypts the keys your code uses — Book 02's discipline applied to Book 04's assets. Caching only behaves when you know which system is the source of truth. Monitoring alerts on query latency you learned to read in Book 01. A gap here makes everything above it decoration, which is why the year starts here and nowhere else.",
            "The compounding artifact is a schema you are proud of: multi-user, money-shaped, with invariants the engine enforces, field-level encryption on the dangerous columns, and a restore you have rehearsed. That one schema exercises both books' checklists, anchors every practice project in chapter 13, and answers the interview question 'how do you design data?' with something the interviewer can actually read.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Data and trust, stacked",
        caption: "Book 01 defines the truth; Book 02 guards it in motion and at rest.",
        layers: [
          { label: "TLS termination", note: "Book 02 — data in motion" },
          { label: "Application logic", note: "validate, authorize" },
          { label: "Pooled transaction", note: "Book 01 — truth changes" },
          { label: "Postgres", note: "constraints, WAL" },
          { label: "Encrypted at rest", note: "Book 02 — columns, backups" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Invariants live in the engine and the dangerous field is encrypted with a runtime-injected key.",
        code: [
          "-- Invariants live in the engine, not in hoping",
          "CREATE TABLE payouts (",
          "  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
          "  merchant_id  BIGINT NOT NULL REFERENCES merchants(id),",
          "  amount_cents BIGINT NOT NULL CHECK (amount_cents > 0),",
          "  status       TEXT   NOT NULL DEFAULT 'pending',",
          "  -- Book 02: a field whose leak would be a lawsuit",
          "  bank_ref_enc BYTEA  NOT NULL",
          ");",
          "",
          "-- Key injected at runtime (SET app.pgp_key from the secrets manager)",
          "INSERT INTO payouts (merchant_id, amount_cents, bank_ref_enc)",
          "VALUES (42, 2500,",
          "  pgp_sym_encrypt('acct-8841', current_setting('app.pgp_key')));",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Encrypting everything so no column can be indexed or queried.",
          fix: "Classify first: encrypt the dangerous few (tokens, identifiers), constrain and index the rest. Blanket encryption trades incidents for blindness.",
        },
        {
          mistake: "Learning SQL syntax but never reading a query plan.",
          fix: "Run EXPLAIN ANALYZE on your three hottest queries in month 1. Reading plans is the actual skill; syntax is the ticket in.",
        },
        {
          mistake: "Backups configured but never restored.",
          fix: "Schedule a monthly restore into a scratch instance and time it. An unverified backup is a hope, not a backup.",
        },
        {
          mistake: "Treating TLS as a checkbox the platform handles.",
          fix: "Know your protocol floor (TLS 1.2 minimum), track certificate expiry in monitoring, and test what an expired certificate does to your clients.",
        },
      ],
      fieldChecklist: [
        "I have written the top five access patterns for my project's main table, with frequencies.",
        "I can name the one authoritative store for every fact my system keeps.",
        "I have run EXPLAIN ANALYZE on a hot query and can read every line of the plan.",
        "Dangerous columns (tokens, bank references) are encrypted at the field level, with the key injected at runtime.",
        "I know my TLS protocol floor and where certificate expiry is monitored.",
        "I have performed one full restore from backup into a scratch instance.",
      ],
      keyTerms: [
        {
          term: "Data in motion vs at rest",
          definition:
            "In motion means crossing the wire under TLS; at rest means on disk or in backups under field or volume encryption — Book 02 guards both.",
        },
        {
          term: "Invariant",
          definition:
            "A rule that must always hold — amounts positive, emails unique — pushed into the database as constraints so no code path can bypass it.",
        },
        {
          term: "Key rotation",
          definition:
            "The rehearsed process of replacing an encryption key without downtime or data loss; a runbook, not an emergency improvisation.",
        },
        {
          term: "Pooled connection",
          definition:
            "A bounded, reused set of database connections shared by the app; the reason connection counts stay sane under load.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why do data and encryption belong in the same layer of your map?",
          a: "Because they are two halves of one question — what is true, and who can read it. A perfectly normalized schema with an unencrypted backup is not protected; strong encryption over data with no source of truth just makes the chaos confidential. I learned them together in months 1 and 2 so every storage decision came with its privacy decision attached.",
        },
        {
          q: "A backup restore is only tested yearly. What do you change?",
          a: "The cadence and the ownership. I would make restore a monthly drill into a scratch instance, time it, and record the steps as a runbook. The drill catches the failures that only appear during recovery — expired credentials, missing extensions, schema drift — while they are cheap. An unverified backup has never once saved anyone; it just delays the discovery.",
        },
        {
          q: "Where does encryption start and stop in a small product?",
          a: "Start with TLS everywhere on the wire, encryption at rest at the storage layer, and field-level encryption for the few columns whose leak is a lawsuit — tokens, national identifiers, bank references. Stop before encrypting data you need to query and index; put access control and constraints there instead. Encryption is for the dangerous few, not a substitute for authorization.",
        },
      ],
      quiz: [
        {
          question: "How do Books 01 and 02 divide the request journey?",
          options: [
            "Frontend versus backend",
            "01 owns truth and its invariants; 02 owns data in motion and at rest",
            "01 owns the cloud, 02 owns the laptop",
            "They cover the same hop twice for redundancy",
          ],
          answerIndex: 1,
          explanation:
            "One book defines what is true and enforces it with transactions and constraints; the other guards the same data while it moves (TLS) and while it sleeps (encryption at rest).",
        },
        {
          question:
            "Queries on the orders table turned slow; row count unchanged. What does this layer check first?",
          options: [
            "Move the data to a NoSQL store",
            "Put Redis in front of everything",
            "Read the plan: dead tuples, missing index, stale statistics",
            "Restart the database and hope",
          ],
          answerIndex: 2,
          explanation:
            "Update-heavy tables bloat and statistics go stale; the query plan shows it immediately. This is Book 01's first reflex, and it fixes most slowdowns without new infrastructure.",
        },
        {
          question: "Which is the strongest evidence that a backup exists?",
          options: [
            "A recent successful restore you personally performed into a scratch instance",
            "A green checkbox in the cloud console",
            "The vendor's documentation page",
            "A cron job named 'backup'",
          ],
          answerIndex: 0,
          explanation:
            "Until you have restored, the backup is a hypothesis. The drill catches the real failures — expired credentials, missing extensions, schema drift — while they are cheap to fix.",
        },
      ],
    },
    {
      number: 6,
      title: "Identity and Keys: Books 03 and 04",
      summary:
        "Half of all breaches are not clever. They are a credential that should not exist, sitting somewhere it should not be.",
      keyIdea: "Authentication proves who a user is; secrets hygiene proves who your code is. No long-lived credential should be readable where an attacker ends up.",
      deepDive: [
        {
          heading: "One question, two actors",
          paragraphs: [
            "Book 03, in month 3, is identity for humans: password hashing with bcrypt or argon2id, sessions versus JWTs and when each earns its keep, multi-factor authentication, OAuth flows you do not hand-roll, refresh token rotation, and authorization models that say who may do what. Book 04, in month 4, is identity for code: API keys, service accounts, a secrets manager as the single source, short-lived credentials via OIDC, rotation schedules, and injection at runtime instead of literals in files.",
            "Both books answer the same question — how does this caller prove who it is — for different callers. That framing prevents the classic mess of treating machine credentials as configuration. A database password leaked to a public repository is a stolen identity, and it deserves the same design rigor as user authentication. In practice it usually gets less, which is roughly how half of breaches happen.",
          ],
        },
        {
          heading: "The credential lifecycle",
          paragraphs: [
            "Every credential has four moments: birth, use, rotation and death. Birth with least privilege — the deploy role cannot read user data. Use injected at runtime, never committed, never echoed into logs. Rotation on a schedule and on demand, because 'rotate immediately' must be a rehearsed command, not a research project. Death promptly, with an inventory that notices when a credential has no owner. Breaches rarely defeat the cryptography; they find a credential that skipped one of the four moments.",
            "Book 04's checklist turns the lifecycle into mechanics: one secrets manager as the only source of truth for credentials, CI assuming short-lived OIDC roles instead of storing cloud keys, rotation scheduled and drilled, and a written inventory — one row per secret, with an owner and an expiry. The inventory enforces a blunt rule: if a credential is not in it, the credential does not exist, and it should not work either.",
          ],
        },
        {
          heading: "Why identity precedes defense",
          paragraphs: [
            "Book 05's authorization checks are written in the language Book 03 installs: principals, claims, scopes, capabilities. If identity is fuzzy, defense becomes guesswork, and guesswork fails open. The modern default also removes whole leak categories before security review starts: short-lived tokens minted by an identity provider mean there is no long-lived cloud key to steal, because it never existed. Months 3 and 4 buy Book 05 its vocabulary and take the cheapest wins first.",
            "On the request journey, this layer is one hop with two sides: the middleware proving the user, and the service proving itself to the database and every downstream API. The chapter summary's line — a credential that should not exist, sitting somewhere it should not be — describes a failure of exactly this hop. Books 03 and 04 exist to make that sentence impossible to apply to your project.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "A service needs a credential",
        caption:
          "Every branch but the first two has ended in a headline you have read.",
        start: "Code needs a secret",
        branches: [
          {
            label: "Secrets manager + OIDC",
            outcome: "Short-lived, injected at runtime, rotatable",
            good: true,
          },
          {
            label: "Env var from CI/CD",
            outcome: "Acceptable for low-risk values only",
            good: true,
          },
          {
            label: "Committed to the repo",
            outcome: "Public the day the repo is",
            good: false,
          },
          {
            label: "Long-lived key in config",
            outcome: "One leak, months of quiet abuse",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "Short-lived OIDC credentials retire the stored cloud key — and the leak category with it.",
        code: [
          "# No stored cloud keys: the job mints short-lived credentials via OIDC",
          "permissions:",
          "  id-token: write",
          "  contents: read",
          "jobs:",
          "  deploy:",
          "    runs-on: ubuntu-latest",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - uses: aws-actions/configure-aws-credentials@v4",
          "        with:",
          "          role-to-assume: arn:aws:iam::123456789012:role/deploy",
          "          aws-region: eu-central-1",
          "          role-duration-seconds: 900",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Storing production secrets as CI variables copied between repos.",
          fix: "One secrets manager, one owner per secret, jobs assume roles for minutes. Spread copies are unrotatable by construction.",
        },
        {
          mistake: "One admin service account shared by every job.",
          fix: "Scope per job: the deploy role cannot read user data. Blast radius is decided at birth, not after the leak.",
        },
        {
          mistake: "JWTs that live for days with no revocation path.",
          fix: "Short access-token lifetimes in minutes, refresh with rotation, and a denylist or version check for immediate kill.",
        },
        {
          mistake: "Password rotation theater instead of real controls.",
          fix: "Modern guidance: long unique passwords, argon2id or bcrypt hashing, and MFA — 90-day rotation without MFA mostly churns user choices.",
        },
      ],
      fieldChecklist: [
        "I can state where every credential in my project is born, lives, rotates and dies.",
        "No secret exists as a literal in any repo, config file or CI variable I could avoid.",
        "CI and deploys use short-lived OIDC roles, not stored cloud keys.",
        "Access tokens are short-lived; refresh tokens rotate; I can kill a session on demand.",
        "Password hashing uses bcrypt or argon2id with per-user salts, verified by a test.",
        "I hold a written credential inventory: one row per secret, with owner and expiry.",
      ],
      keyTerms: [
        {
          term: "OIDC federation",
          definition:
            "Exchanging a short-lived identity token from your CI or cloud for temporary credentials, retiring stored long-lived keys.",
        },
        {
          term: "Refresh token rotation",
          definition:
            "Issuing a new refresh token on every use and invalidating the old one, so a stolen token has a short life and reuse is detectable.",
        },
        {
          term: "Least privilege",
          definition:
            "Every identity, human or machine, holds exactly the scopes its task needs — decided at issuance, not after an incident.",
        },
        {
          term: "Secrets manager",
          definition:
            "The single vendor-controlled store for credentials — Secrets Manager, Vault, SSM Parameter Store — with versioning, rotation and audit logs.",
        },
      ],
      interviewQuestions: [
        {
          q: "Where do secrets live in your projects?",
          a: "In one secrets manager, referenced by name, injected at runtime — locally through a wrapper pointing at the manager, in CI through short-lived OIDC roles. Nothing sensitive is committed, and a pre-commit scan backs that up. Rotation is scheduled and rehearsed, and an inventory lists every credential with an owner and an expiry date.",
        },
        {
          q: "Sessions or JWTs — how do you choose?",
          a: "Sessions by default for browser apps: server-side state means instant revocation and simple logout. JWTs where statelessness earns its keep — service-to-service calls, mobile clients, multiple consumers of one token — with short access lifetimes, refresh rotation and a revocation path for emergencies. The mistake is picking one as an identity; pick per access pattern.",
        },
        {
          q: "A scanner found an API key committed last year. Walk me through your response.",
          a: "Assume it is compromised and rotate first, investigate second: revoke and reissue, then trace where it was used and what it touched. After the fire, the post-mortem is about the system — why did a secret exist in a file, why did review miss it, why did scanning not catch it for a year. The fix is a lifecycle, not a cleanup.",
        },
      ],
      quiz: [
        {
          question:
            "Books 03 and 04 answer the same question for different callers. What is the question?",
          options: [
            "How to cache a response",
            "How does a caller prove who it is — human or machine",
            "How to scale a database",
            "How to write a migration",
          ],
          answerIndex: 1,
          explanation:
            "Book 03 is identity for humans; Book 04 is identity for code and pipelines. Same question, two actor classes, one shared lifecycle.",
        },
        {
          question: "A deploy job needs cloud access tonight. Which setup do you build?",
          options: [
            "A long-lived access key stored as a CI secret",
            "Root user credentials shared with the team",
            "An OIDC-trusted role the job assumes for its duration",
            "Keys pasted into the Dockerfile",
          ],
          answerIndex: 2,
          explanation:
            "OIDC federation mints minutes-scoped credentials per run. There is nothing durable to leak, rotation is automatic, and revocation is just removing the trust policy.",
        },
        {
          question: "Why do credential leaks beat cryptographic breaks in practice?",
          options: [
            "Encryption algorithms are deprecated",
            "Leaks need no expertise — one committed file or one over-scoped key",
            "Hashes are reversible now",
            "Attackers dislike databases",
          ],
          answerIndex: 1,
          explanation:
            "The crypto holds; the hygiene does not. That is why these two books are about lifecycles, inventories and rotation — the boring mechanics where real incidents actually originate.",
        },
      ],
    },
    {
      number: 7,
      title: "Defense: Book 05",
      summary:
        "Attackers do not break in. They log in — or they find the one endpoint you forgot to check.",
      keyIdea: "Security is a property you either designed in or did not. The OWASP Top 10 has been essentially the same list for fifteen years.",
      deepDive: [
        {
          heading: "The attacker's economics",
          paragraphs: [
            "Attackers run volume businesses. Scanners probe every public address continuously for the same short list of flaws: injection, broken access control, misconfigurations, missing rate limits. The OWASP Top 10 has stayed essentially the same list for fifteen years because the economics have not changed — the cheap automated attack still works on the unprepared, and the unprepared are always available. Your defense is not cleverness; it is refusing to be the cheapest target on the scan.",
            "Book 05, in month 5, turns that list into reflexes. Validate every input at the boundary. Authorize every request against a written model — who may do what to which resource. Parameterize every query so injection is structural rather than a matter of discipline. Encode output, set the security headers, and rate limit the expensive routes. None of it is glamorous; all of it is what the scan is actually looking for.",
          ],
        },
        {
          heading: "Designed in, or not there",
          paragraphs: [
            "Security is a property of the design, not of the last audit. A deny-by-default authorization model — every action forbidden until a capability is explicitly granted — makes the forgotten check impossible, because a missing check fails closed. An allow-by-default model makes the forgotten check inevitable. Parameterized queries make injection a non-topic. Edge rate limits make brute force boring. Each is a structural decision, made once, that removes a class of bug instead of chasing instances of it.",
            "Book 05's checklist produces artifacts, not adjectives: a one-page threat model listing trust boundaries and the top abused endpoints, dependency and secret scanning wired into CI, security headers verified by a test, an authorization matrix — role by action — written down, and one self-directed pass with a scanner such as OWASP ZAP against your own endpoints. When someone asks how you know the API is safe, you hand over the matrix and the CI logs.",
          ],
        },
        {
          heading: "Where small systems actually get hurt",
          paragraphs: [
            "Not exotic zero-days. The forgotten endpoint that skips the authorization check. The debug route left enabled in production. The admin panel with no rate limit. The webhook accepting payloads without verifying the signature. These are afternoon-sized fixes — verify webhook signatures, put auth on every route including the internal ones, keep secrets out of query strings — and they remove most of the real risk a small product carries. Boring checks, applied everywhere, beat clever ones applied once.",
            "Map position: Book 05 consumes Book 03's identity vocabulary and Book 01's parameterization discipline, and feeds forward into Book 06, because the wire is where attacks arrive, and Book 13, which monitors for abuse signals. On the request journey, defense sits at two hops — validation going in, headers and limits coming out. The stance underneath is one sentence: trust nothing you have not checked, and check it again when the surface changes.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Where to spend defense hours",
        caption:
          "Most breaches live in the top-left: powerful endpoints nobody thought to review.",
        axes: { x: "Attention in code review", y: "Power if abused" },
        quadrants: [
          { label: "Automate checks first", note: "authz tests, scanners in CI" },
          { label: "Threat-model by hand", note: "auth, payments, uploads" },
          { label: "Fix in bulk", note: "headers, dependency bumps" },
          { label: "Checklist item only", note: "already covered by review" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "One function, one stance: every protected action asks for a capability that must be granted — never assumed.",
        code: [
          "// Deny by default: a route is reachable only via a granted capability",
          "type Capability = 'order:read' | 'order:cancel' | 'admin:refund';",
          "",
          "const grants: Record<string, Capability[]> = {",
          "  support: ['order:read', 'order:cancel'],",
          "  finance: ['order:read', 'admin:refund'],",
          "};",
          "",
          "export function requireCap(role: string, cap: Capability): void {",
          "  if (!grants[role]?.includes(cap)) {",
          "    // No role match, no capability, no fallback: deny",
          "    throw new Error('forbidden');",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Trusting identifiers from the client (userId in the request body).",
          fix: "Identity comes from the verified token, never the payload. Re-derive ownership server-side on every access.",
        },
        {
          mistake: "Adding auth to routes as they are remembered.",
          fix: "List every route in one table with its required capability. If it is not in the table, it is not deployed.",
        },
        {
          mistake: "Rate limiting only the login endpoint.",
          fix: "Limit at the edge per IP and per account on every expensive route — password reset, search, uploads, exports.",
        },
        {
          mistake: "Treating the security pass as a pre-launch event.",
          fix: "Scanners and authorization tests run in CI on every PR. Defense is a pipeline stage, not a launch-week festival.",
        },
      ],
      fieldChecklist: [
        "Every route in my project appears in one table with its required capability.",
        "Authorization is deny by default; a missing check fails closed.",
        "All queries are parameterized; no string-built SQL exists in the repo.",
        "Webhook and callback endpoints verify signatures before parsing payloads.",
        "Rate limits protect every expensive route, checked with a load test.",
        "Security headers and dependency scanning run as CI gates on every pull request.",
      ],
      keyTerms: [
        {
          term: "Deny by default",
          definition:
            "The stance where every action is forbidden until explicitly granted; a forgotten check fails closed instead of open.",
        },
        {
          term: "Broken access control",
          definition:
            "The recurring OWASP entry where an endpoint performs an action the caller was never granted — usually a missing or client-trusted check.",
        },
        {
          term: "Threat model",
          definition:
            "A one-page list of your trust boundaries, the assets behind them and the ways each boundary is abused; the plan behind the checks.",
        },
        {
          term: "Parameterized query",
          definition:
            "A query with values bound separately from structure, making injection structural rather than a matter of developer discipline.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you approach security for a small product with no security team?",
          a: "I rely on structure over heroics: deny-by-default authorization with a route-to-capability table, parameterized queries and input validation at the boundary, edge rate limits, dependency and secret scanning in CI, and a one-page threat model reviewed whenever the surface changes. Most real risk for a small product is the forgotten endpoint, and structure is what prevents forgetting.",
        },
        {
          q: "What does the OWASP Top 10 get right?",
          a: "Its stability. The list has barely changed in fifteen years because attackers still take the cheapest path: broken access control, injection, misconfiguration. It is not a syllabus of exotic attacks — it is an economics lesson. If your endpoints verify identity, enforce grants, validate input and fail closed, you have declined to be the cheap target.",
        },
        {
          q: "A new endpoint needs to let users export their data. What do you check before shipping?",
          a: "Authorization first — the export can only read the caller's own data, derived from the token. Then abuse: rate limits and quotas, because exports are expensive and a scraping magnet. Then safety: streaming rather than loading everything into memory, no secrets or other tenants' rows in the payload, and an audit log entry, because an export is a data egress event.",
        },
      ],
      quiz: [
        {
          question:
            "Why has the OWASP Top 10 stayed essentially unchanged for fifteen years?",
          options: [
            "The list is refreshed but identical by tradition",
            "The economics favor cheap automated attacks against the same basic flaws",
            "Browsers refuse to change",
            "Nobody audits it",
          ],
          answerIndex: 1,
          explanation:
            "Attackers take the cheapest path that works, and the basics — access control, injection, misconfiguration — still work on unprepared systems. The list is an economics lesson as much as a syllabus.",
        },
        {
          question:
            "A route allows an action when body.userId matches the order's owner. What is wrong?",
          options: [
            "Nothing — ownership is being compared",
            "It needs a stronger password policy",
            "Identity must come from the verified token, and ownership re-derived server-side on every access",
            "The field should be renamed",
          ],
          answerIndex: 2,
          explanation:
            "A client-sent identifier is attacker-controlled input. Trust the token for identity, re-derive ownership in the server, and fail closed when either is missing.",
        },
        {
          question: "What does 'deny by default' mean for authorization?",
          options: [
            "Every request returns an error page",
            "Every action is forbidden until a capability is explicitly granted, so a missing check fails closed",
            "Half of requests are rejected to confuse attackers",
            "Routes are hidden from the navigation menu",
          ],
          answerIndex: 1,
          explanation:
            "The default answer is no, permitted only by an explicit capability check. A forgotten check then fails closed, which is the structurally safe direction for a system nobody fully remembers.",
        },
      ],
    },
    {
      number: 8,
      title: "The Wire: Book 06",
      summary:
        "Everything you ship is packets. Everything that 'randomly fails' is usually one of those packets being slow, lost or refused.",
      keyIdea: "One hour of Book 06 gives you a diagnostic tool most self-taught engineers never build: the ability to estimate where latency comes from before opening a profiler.",
      deepDive: [
        {
          heading: "The journey has a floor",
          paragraphs: [
            "Physics and protocol set costs your code never sees. DNS must resolve. TCP needs one round trip to connect. TLS adds another — TLS 1.3 trimmed the handshake to a single round trip, which is why everyone moved to it. Then your request bytes travel, the server works, and the response travels back. Distance is unbribable: light in fiber covers roughly half a millisecond per hundred kilometers, each way. A client eight hundred kilometers away starts every request in debt.",
            "Book 06, in month 6, turns this into an estimation skill. Before any profiler opens, you can already say: the client is a few hundred milliseconds away, the flow makes four sequential round trips, and that is most of the latency budget. It also reframes the 'random' failures — most of them are packets being slow, lost or refused: a timeout set too short, a pool exhausted, a connection refused by something that was fine yesterday.",
          ],
        },
        {
          heading: "The diagnostic ladder",
          paragraphs: [
            "Climb it in order. dig answers 'is the name resolving, and to what?'. curl with timing variables answers 'which hop eats the time?' — DNS, TCP, TLS, time to first byte, total, each on its own line. ping and traceroute answer 'is the path itself sick?'; mtr finds where loss happens along it. tcpdump and Wireshark show the actual conversation when everything above is honest and the problem persists. Each rung answers one question; starting at the top of the ladder wastes evenings.",
            "The checklist produces three things: a documented latency budget per request, so every hop's share is written down; timeouts and retries chosen deliberately, with per-hop budgets that sum to the caller's budget, backoff with jitter, and idempotency wherever retries can double an effect; and one solved incident where curl's timing output named the guilty hop in minutes. That last artifact is the proof the month worked — you saw the wire, not a dashboard.",
          ],
        },
        {
          heading: "Why the wire sits mid-map",
          paragraphs: [
            "After defense, because the wire is where attacks arrive and where rate limits live. Before architecture, because latency budgets are design inputs: where a cache goes, whether a service call is worth it, why a queue decouples — every architecture argument is secretly a network argument with a number attached. One hour of Book 06 changes how you read any system diagram, which is the chapter's promise, and it is not an exaggeration.",
            "In the AI era this layer is quietly a moat. Generated code assumes the network is free and perfectly reliable: a chatty loop of queries, a retry on every failure, no timeout anywhere. Someone has to know why those choices fall over under real distance and load, and to say it in round trips. The engineer who can estimate latency from topology reviews the machine's output; the one who cannot reviews vibes.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Anatomy of one request",
        caption:
          "The floors add up before your code runs at all — estimate them first.",
        steps: [
          { label: "DNS", note: "resolve the name" },
          { label: "TCP", note: "one round trip" },
          { label: "TLS", note: "1.3: one more" },
          { label: "Request", note: "your bytes travel" },
          { label: "Server work", note: "the part you control" },
          { label: "Response", note: "round trip back" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Five numbers, one request: if TLS dominates, the problem is the handshake, not the handler.",
        code: [
          "# Split one request into its hops before blaming the code",
          "curl -so /dev/null -w '\\n' \\",
          "  -w 'dns    %{time_namelookup}s\\n' \\",
          "  -w 'tcp    %{time_connect}s\\n' \\",
          "  -w 'tls    %{time_appconnect}s\\n' \\",
          "  -w 'ttfb   %{time_starttransfer}s\\n' \\",
          "  -w 'total  %{time_total}s\\n' \\",
          "  https://example.com",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Setting every timeout to 30 seconds 'to be safe'.",
          fix: "Budget per hop so totals stay bounded: short timeouts fail fast, retries with backoff and jitter handle the flakiness.",
        },
        {
          mistake: "Retrying every failure immediately, in every layer.",
          fix: "Retry only idempotent operations, with backoff and jitter, at one layer. Stacked retries multiply into outages.",
        },
        {
          mistake: "Blaming the database before measuring the hop split.",
          fix: "Run curl with timing output first. DNS, handshakes and queueing regularly outweigh the query you were about to optimize.",
        },
        {
          mistake: "Treating N+1 queries as an application-only problem.",
          fix: "Each extra query is a round trip; over the network they compound. Batch them — the wire is the multiplier.",
        },
      ],
      fieldChecklist: [
        "I can estimate a request's floor latency from topology before opening a profiler.",
        "Every external call in my project has a deliberate timeout, not a library default.",
        "Retries use backoff with jitter, only on idempotent operations, at one layer.",
        "I have diagnosed one real slowdown using curl timing output alone.",
        "I keep a per-request latency budget documented: what costs what, and where the margin is.",
        "DNS health, TLS certificate expiry and connection-pool saturation are monitored.",
      ],
      keyTerms: [
        {
          term: "Round trip (RTT)",
          definition:
            "One full crossing there and back; handshakes, queries and retries are all counted in these, and distance sets the floor.",
        },
        {
          term: "TTFB (time to first byte)",
          definition:
            "The moment the first response byte arrives; the hop-split number that tells you whether the wait was the wire or the work.",
        },
        {
          term: "Backoff with jitter",
          definition:
            "Retrying after growing, randomized delays, so a thousand clients do not stampede the recovering service in unison.",
        },
        {
          term: "Idempotency",
          definition:
            "The property that repeating an operation has the same effect as doing it once — the license that makes retries safe.",
        },
      ],
      interviewQuestions: [
        {
          q: "A page takes 800ms but the server logs 30ms. Where do you look?",
          a: "The wire. I split the request with curl timing: DNS, TCP, TLS, time to first byte. Typically the gap is round trips — a cold TLS handshake, a redirect chain, sequential calls to slow dependencies, or client-side work after the first byte. The server log only measures its own slice; the journey outside it is Book 06's territory.",
        },
        {
          q: "How do you choose timeouts and retries for a service call?",
          a: "Budget backwards from the caller: if the user-facing path gets 500ms, each dependency gets a share with a little margin, and timeouts are set to that share, not to library defaults. Retries exist only for idempotent calls, with exponential backoff and jitter, applied at one layer so they do not multiply. The alternative is a timeout-and-retry storm that turns one slow dependency into a full outage.",
        },
        {
          q: "Why should an architect learn packet-level networking?",
          a: "Because architecture arguments are latency arguments in disguise. Whether to add a cache, split a service, or accept an extra hop all reduces to round trips and failure modes on the wire. An engineer who can estimate those costs from topology makes design decisions with numbers instead of adjectives — and diagnoses 'random' failures as packets being slow, lost or refused.",
        },
      ],
      quiz: [
        {
          question: "What sequence does a fresh connection to an HTTPS site require?",
          options: [
            "No handshakes — TLS is precomputed",
            "DNS, one TCP round trip, one TLS round trip with TLS 1.3",
            "TLS only",
            "Three TCP round trips and two TLS ones",
          ],
          answerIndex: 1,
          explanation:
            "Name first, transport second, encryption third — each costs round trips before a single byte of your logic runs. That is the floor every latency budget starts from.",
        },
        {
          question:
            "curl shows time-to-first-byte nearly equal to total, both large; server logs show 20ms of work. What does that suggest?",
          options: [
            "The database needs an index",
            "The response body is too large",
            "The wait happened before work started — the wire, a queue or an upstream dependency",
            "The server needs a restart",
          ],
          answerIndex: 2,
          explanation:
            "If first byte is late but the handler is fast, the delay sits in front of the work: handshakes, queuing, upstream calls. The hop split points at it.",
        },
        {
          question: "Why do retries stacked across layers cause outages?",
          options: [
            "They consume TLS sessions",
            "Each layer multiplies attempts, so a brief slowdown becomes a synchronized stampede",
            "Retries are billed by providers",
            "They corrupt DNS caches",
          ],
          answerIndex: 1,
          explanation:
            "One slow call becomes many under layered retries, all arriving at once when the dependency recovers. Retry at one layer, with backoff and jitter, and only for idempotent operations.",
        },
      ],
    },
    {
      number: 9,
      title: "Architecture: Books 07 and 08",
      summary:
        "System design decides whether success is survivable. Scaling decides whether you can afford it.",
      keyIdea: "Book 07 is the map of decisions; Book 08 is the toolbox that implements them. Read them as one subject split in two.",
      deepDive: [
        {
          heading: "One subject, two halves",
          paragraphs: [
            "Book 07, in month 7, is decision-shaped: when a monolith beats services, how to split along real seams, data ownership per service, queues and events for decoupling, consistency choices and idempotency, and the workflows that span services without corrupting state. Book 08, in month 8, is implementation-shaped: load balancers, stateless tiers, Redis caches and their eviction behavior, connection pools, read replicas, autoscaling and backpressure. Read them as map and toolbox, in that order, in those two months.",
            "The pair shares one exam question: double the traffic — what breaks first, and what is the plan? Answering it needs both halves, a diagram and pool math. Book 07 without Book 08 leaves you able to draw boxes you cannot run; Book 08 without Book 07 leaves you running machinery pointed at the wrong shape. The interview version of this question is why the two books are one subject.",
          ],
        },
        {
          heading: "Defaults that make scaling legal",
          paragraphs: [
            "Statelessness first: any instance can serve any request because sessions live in Redis or a signed cookie, never in process memory. One database as the source of truth, read replicas for read scale. A queue between accepting a request and doing the work, so spikes are absorbed instead of dropped. Caches with explicit TTLs, honestly labeled as projections. None of these is exotic; together they are what 'scales horizontally' actually means in practice.",
            "Pool math is the classic concrete case. Total connections equal app instances times pool size, plus operational headroom, and that sum must stay under the database's max_connections. Autoscaling that ignores the equation multiplies instances until the database refuses everyone — you scaled the thing in front until the thing behind fell over. That one calculation is why Book 08 ships with Book 07 and not instead of it.",
          ],
        },
        {
          heading: "Climb the ladder in order",
          paragraphs: [
            "The ladder most systems actually climb: tune the query and add the index; cache the genuinely hot read; move deferrable work to the queue; add read replicas; only then consider splitting the database or extracting a service. Each rung is cheaper than the next, and jumping straight to the top rung is how teams buy distributed-systems problems while their EXPLAIN output remains unread. The pyramid diagram in this chapter is the order, drawn.",
            "On the request journey, Books 07 and 08 own the middle hops: the balancer choosing an instance, the cache answering before the database is asked, the queue carrying side effects out of the critical path. Month 7 draws that middle; month 8 makes it survivable. Chapter 13's project will force both on schedule — a viral week is a systems design final you cannot reschedule.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The scaling ladder",
        caption: "Climb from the base — each rung is cheaper than the one above it.",
        tiers: [
          { label: "Shard / split", note: "last resort, real cost" },
          { label: "Replicas + queue", note: "read scale, spike absorption" },
          { label: "Cache hot reads", note: "Redis, explicit TTLs" },
          { label: "Index + tune", note: "EXPLAIN first, always" },
        ],
      },
      pitfalls: [
        {
          mistake: "Splitting into microservices before one service hurts.",
          fix: "Split on a measured seam — team bottlenecks, deploy pain, different scale profiles. A distributed monolith has both costs and neither benefit.",
        },
        {
          mistake: "Autoscaling app instances without checking pool math.",
          fix: "Instances times pool size plus headroom must fit max_connections. Cap replicas or shrink pools before the database caps you.",
        },
        {
          mistake: "Caching without a TTL or an invalidation story.",
          fix: "Every cache entry has a TTL and a known staleness bound; write down the source of truth and how each projection rebuilds.",
        },
        {
          mistake: "Putting everything in the queue 'for scale'.",
          fix: "Queues are for work that can be late, not for answers the user is waiting on. Define which reads are synchronous by contract.",
        },
      ],
      fieldChecklist: [
        "I can draw my system's middle: balancer, stateless instances, cache, queue, database.",
        "Every service instance is stateless; sessions live outside process memory.",
        "I have done the pool math: instances times pool plus headroom versus max_connections.",
        "I know my system's current bottleneck and the next rung of the ladder for it.",
        "Queued work is idempotent, and consumers tolerate duplicate delivery.",
        "Every cache has a TTL and a written rebuild path from the source of truth.",
      ],
      keyTerms: [
        {
          term: "Statelessness",
          definition:
            "No request-critical state kept in process memory, so any instance can serve any request — the property horizontal scaling is built on.",
        },
        {
          term: "Backpressure",
          definition:
            "Signaling upstream to slow down — queue depth, 429s, load shedding — instead of accepting work you cannot finish.",
        },
        {
          term: "Read replica",
          definition:
            "A copy of the database serving reads by shipping the write log; it scales queries, never the single source of truth.",
        },
        {
          term: "Pool math",
          definition:
            "The calculation keeping total connections (instances times pool size plus headroom) under the database ceiling; the classic scaling footgun.",
        },
      ],
      interviewQuestions: [
        {
          q: "How would you scale a service to ten times its current traffic?",
          a: "In order, cheapest first: profile and index the hot queries, cache the genuinely hot reads with explicit TTLs, move async work behind a queue, add read replicas for read-heavy paths, and only consider sharding or splitting services if one of those measured seams is actually the bottleneck. Along the way, check the pool math — scaling instances against a fixed connection ceiling fails at step zero.",
        },
        {
          q: "When is a queue the wrong answer?",
          a: "When the caller needs the answer this second. Queues buy absorption and decoupling at the price of latency and a new failure mode — duplicate delivery. Anything the user is waiting on stays synchronous behind a tight budget; queues take validation emails, image processing, webhook fanout. And consumers must be idempotent, because 'at least once' is what delivery actually means.",
        },
        {
          q: "Monolith or microservices for a new team of three?",
          a: "A well-modularized monolith: one deploy, one database, boundaries enforced in code. Split out a service only when a measured seam demands it — different scaling profile, independent release cadence, or a team boundary. A three-person microservice fleet spends its time on distributed-systems plumbing instead of the product, and usually produces a distributed monolith: all the latency, none of the independence.",
        },
      ],
      quiz: [
        {
          question: "What is the division of labor between Books 07 and 08?",
          options: [
            "07 is frontend, 08 is backend",
            "07 is the set of architectural decisions; 08 is the toolbox that implements and scales them",
            "07 covers testing, 08 covers monitoring",
            "They are the same content split for printing",
          ],
          answerIndex: 1,
          explanation:
            "One book decides the shape — services, queues, consistency; the other runs the shape — balancers, pools, replicas. Together they answer the double-the-traffic question.",
        },
        {
          question:
            "Autoscaling added twenty app instances; the database now refuses connections. What was skipped?",
          options: [
            "A CDN in front",
            "A service mesh",
            "Sharding the database",
            "Pool math — instances times pool size must fit max_connections",
          ],
          answerIndex: 3,
          explanation:
            "Every new instance brings its pool with it. Cap replica count or shrink per-instance pools, or add a pooler in front — the equation has to balance.",
        },
        {
          question: "Reads are slow. What is the correct first rung of the ladder?",
          options: [
            "Shard the database",
            "EXPLAIN the hot queries and add the right indexes",
            "Add five read replicas",
            "Rewrite the service in another language",
          ],
          answerIndex: 1,
          explanation:
            "Indexing and tuning are the cheap base of the ladder, and they fix the majority of read problems. Sharding multiplies operational cost and is rarely the first bottleneck.",
        },
      ],
    },
    {
      number: 10,
      title: "Proof: Books 09 and 10",
      summary:
        "Hope is not a strategy. Neither is 'it worked when I clicked it.' Proof is a discipline, and it has tools.",
      keyIdea: "Book 09 proves performance; Book 10 proves behavior. Together they answer the question every stakeholder eventually asks — 'how do you know?' — with artifacts instead of adjectives.",
      deepDive: [
        {
          heading: "Two kinds of proof",
          paragraphs: [
            "Book 09, in month 9, proves performance: k6 or Locust scripts against realistic scenarios, ramping load, percentile latencies — p50, p95, p99, because averages hide the tail where incidents live — throughput ceilings, and the bottleneck each run names. Book 10, in month 10, proves behavior: the testing pyramid, with fast unit tests in volume, integration tests against a real database, and a handful of end-to-end flows. One measures the system under stress; the other pins what it must do.",
            "They answer different stakeholder questions that arrive in the same words: 'how do you know?' Load says what breaks at ten times Friday's traffic. The pyramid says checkout still works after the refactor. The professional answer to both is an artifact — a report with numbers, a suite with the failure modes covered — never 'it seemed fine when I clicked through it.'",
          ],
        },
        {
          heading: "Artifacts, not adjectives",
          paragraphs: [
            "Book 09's checklist output is a load script committed to the repo and a run report: requests per second at target latency, p95 and p99, error rate, and where the ceiling was hit. Then the fix the report pointed at — an index, a pool, a queue — and a re-run showing the delta. That before-and-after pair is the load report's whole point; a single run with no comparison is a screenshot of one afternoon.",
            "Book 10's output is a suite that fails when behavior breaks: integration tests against real Postgres running in Docker, not mocks of SQL; tests written from the spec's failure modes — expired inputs, concurrency, empty results; and a CI gate that blocks merge on red. The suite doubles as documentation — a new engineer reads the tests to learn what the system actually promises, which no wiki has ever achieved.",
          ],
        },
        {
          heading: "Why proof precedes shipping",
          paragraphs: [
            "Month 11's automated deploys are only safe if something catches regressions automatically, and that something is months 9 and 10. A pipeline that ships many times a day with no tests is a machine for distributing bugs efficiently. Proof instruments the brakes; deployment installs the accelerator. The order in the map — prove, then ship — is not stylistic. It is what makes the shipping chapter's confidence legal.",
            "Load testing also audits month 8's architecture: the autoscaling rules, pool sizes and cache TTLs were chosen from assumptions, and one run replaces them with measurements. The pyramid protects every future AI-generated diff too — the machine drafts faster than you can read, so the suite, not the reviewer's stamina, is what scales. Proof is the layer that lets everything above it move fast without lying.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Proof versus hope",
        caption:
          "The left column answers 'how do you know'; the right column answers nothing.",
        left: {
          heading: "Artifacts (Books 09–10)",
          items: [
            "Load report: p95, p99, ceiling found",
            "Failing-first tests for each failure mode",
            "Integration tests on real Postgres in CI",
            "Before/after numbers after the fix",
          ],
        },
        right: {
          heading: "Hope (the other path)",
          items: [
            "'It worked when I clicked it'",
            "Averages that hide the p99 tail",
            "Mocked tests that echo the mock",
            "A demo that meets production traffic once",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Load testing the happy path only, from one machine, once.",
          fix: "Script the realistic mix, ramp to twice your worst day, rerun after big changes. One run is a screenshot; load is a movie.",
        },
        {
          mistake: "Reporting average latency.",
          fix: "Percentiles or nothing: p50 for the typical user, p95 and p99 for the tail where incidents and churn live. Averages bury the truth.",
        },
        {
          mistake: "Mocking the database in integration tests.",
          fix: "Run real Postgres in a container; dialects, constraints and transactions behave differently than fakes. Mock at the network edge, not at truth.",
        },
        {
          mistake: "Writing tests after the code 'to hit coverage'.",
          fix: "Turn the spec's failure modes into failing tests first, then make them pass. Coverage is a side effect of specifying behavior, not a target.",
        },
      ],
      fieldChecklist: [
        "A load script for my project's main flow lives in the repo and runs on demand.",
        "I know my system's p95 and p99 at target load, and the current ceiling.",
        "One bottleneck found by a load run has been fixed and re-measured, with numbers recorded.",
        "Integration tests run against a real database in Docker, not a mock.",
        "The suite covers the spec's failure modes: expired inputs, concurrency, empty results.",
        "CI blocks merge on red tests; nobody bypasses it, including me.",
      ],
      keyTerms: [
        {
          term: "p95 / p99",
          definition:
            "The latency percentiles where the tail lives; the numbers users actually experience on their worst ordinary day.",
        },
        {
          term: "Test pyramid",
          definition:
            "Many fast unit tests, fewer integration tests against real dependencies, a handful of end-to-end flows — cost rises toward the tip.",
        },
        {
          term: "Load profile",
          definition:
            "The scripted shape of traffic in a test: request mix, ramp rate, duration; realism here decides whether the report means anything.",
        },
        {
          term: "Regression gate",
          definition:
            "The CI rule that red tests block merge; the mechanical guarantee that proof stays attached to every change.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you know your service performs under load?",
          a: "I have a report. k6 scripts model the realistic mix — reads, writes, retries — ramp toward twice the worst observed day, and the run records throughput, p95, p99 and error rate until something breaks. The bottleneck it names gets fixed, the run is repeated, and the before/after pair goes in the repo. 'It felt fast' is not an answer I can give or accept.",
        },
        {
          q: "What makes a test suite trustworthy?",
          a: "It fails for the right reasons. Tests assert observable behavior, integration tests run against a real database so dialect and constraints are honest, failure modes from the spec are covered, and flaky tests are quarantined and fixed rather than retried into meaninglessness. A suite nobody trusts is worse than none — it teaches the team to ignore red.",
        },
        {
          q: "A stakeholder asks 'how do you know it works?' What do you show?",
          a: "Artifacts matched to the question: for correctness, the suite's green run and the failure-mode cases it covers; for performance, the latest load report with percentiles and the ceiling found; for operations, the alert rules and the last incident's post-mortem with its action items. Adjectives are opinions; artifacts survive the follow-up questions.",
        },
      ],
      quiz: [
        {
          question: "Which pair of books turns 'how do you know?' into artifacts?",
          options: [
            "Books 01 and 02",
            "Books 03 and 04",
            "Books 07 and 08",
            "Books 09 and 10",
          ],
          answerIndex: 3,
          explanation:
            "Book 09 produces load reports with percentiles and ceilings; Book 10 produces the suite that gates merges. Together they replace adjectives with dated, re-runnable evidence.",
        },
        {
          question:
            "Average latency is 120ms, but support tickets say the app 'sometimes hangs'. First move?",
          options: [
            "Lower the average further",
            "Add a loading spinner",
            "Look at p95 and p99 — the tail the average hides",
            "Restart the servers nightly",
          ],
          answerIndex: 2,
          explanation:
            "The tickets describe the tail, and averages bury tails by construction. Percentile latency is where incidents, churn and honest capacity planning live — measure p95 and p99 before touching anything.",
        },
        {
          question:
            "Why integration-test against a real database instead of a mock?",
          options: [
            "Mocks are slower",
            "Real engines enforce dialect, constraints and transaction behavior that fakes silently get wrong",
            "Databases are cheaper than mocks",
            "It avoids writing unit tests",
          ],
          answerIndex: 1,
          explanation:
            "A mock agrees with your assumptions; the engine disagrees with your mistakes. Postgres in a container is seconds to start and catches the failures mocks are blind to.",
        },
      ],
    },
    {
      number: 11,
      title: "Shipping and Surviving: Books 11, 12 and 13",
      summary:
        "The last three books are where engineering becomes operations: get it live, get it back, and watch it tell the truth.",
      keyIdea: "Automate the repeatable, rehearse the dangerous, and instrument everything.",
      deepDive: [
        {
          heading: "Book 11: automate the repeatable",
          paragraphs: [
            "Deployment, in month 11, is making release boring. One path, every time: CI runs lint, tests and build; the image is built once and promoted through stages; staging gets a smoke test; production gets a canary slice compared against baseline; rollback is a rehearsed command. Docker keeps environments identical; GitHub Actions or an equivalent owns the path; migrations expand-then-contract so data and code can deploy independently and never corrupt each other.",
            "The checklist output: a pipeline that ships without anyone's memory, a rollback you have personally executed, database changes that never require a Friday traffic freeze, and the quiet confidence that release is a non-event. The tell that the book is not finished: deploying still needs a checklist written from memory each time. That checklist is a spec — automate it, stage by stage, until the human role is watching the dashboard.",
          ],
        },
        {
          heading: "Book 12: rehearse the dangerous",
          paragraphs: [
            "Disaster recovery, in month 12, asks the questions nobody wants to answer coldly: if the database vanished now, how long until service returns, and to what point in time? RPO and RTO turn grief into numbers — how much data you may lose and how long you may be down, agreed in daylight. The deliverable is the drill: one rehearsed restore, one rehearsed loss of an instance or region, one runbook per scenario, each dated.",
            "Backups count only when restores are tested — the month 1 habit returns with stakes attached. Rehearsal exposes what dashboards hide: expired credentials, missing extensions, schema drift, a backup job that has been silently failing for weeks. Surviving is designed in advance; during the incident you only get to execute what you already practiced. That is the entire philosophy of Book 12 in one sentence.",
          ],
        },
        {
          heading: "Book 13: make it tell the truth",
          paragraphs: [
            "Monitoring, in month 12, is instrumentation with intent. Logs structured and queryable. Metrics covering the four golden signals — latency, traffic, errors, saturation. Traces linking one request's hops into a single story. Alerts that page only on symptoms users feel, with an owner and a runbook per alert — never on every CPU blip. The checklist output: a dashboard per service, alert rules reviewed quarterly, and one incident walked end to end through your own telemetry.",
            "The three books close the loop the series opened. Book 01's verified backup becomes Book 12's rehearsed restore. Book 09's load report becomes Book 13's baseline for anomaly alerts. Book 05's threat model becomes the abuse signals worth watching. Shipping is not the end of engineering; it is the start of the data that makes the next version better — which is why the roadmap ends where the job begins.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The operations loop",
        caption:
          "Ship, watch, rehearse, repair — the loop never terminates; that is the job.",
        steps: [
          { label: "Deploy", note: "same path, every time" },
          { label: "Observe", note: "logs, metrics, traces" },
          { label: "Alert", note: "only on user pain" },
          { label: "Recover", note: "rehearsed rollback" },
          { label: "Review", note: "post-mortem feeds checks" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "An alert that fires only when users feel pain — with a duration clause to survive blips.",
        code: [
          "# Page on symptoms users feel, not on every CPU blip",
          "groups:",
          "  - name: checkout",
          "    rules:",
          "      - alert: HighErrorRate",
          "        expr: |",
          "          job:http_error_rate:ratio5m{job='checkout'} > 0.02",
          "        for: 5m",
          "        labels:",
          "          severity: page",
          "        annotations:",
          "          summary: checkout 5xx ratio above 2% for 5 minutes",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "A deploy process that only one person can perform from memory.",
          fix: "Encode every step in CI until the human role is watching the dashboard. If a step is not in the pipeline, it is not a step.",
        },
        {
          mistake: "Alerting on causes (CPU 80%) instead of symptoms (users failing).",
          fix: "Page on error rate, latency and saturation against the baseline; keep cause-level signals in the dashboard, not the pager.",
        },
        {
          mistake: "Never rehearsing disaster because it feels morbid.",
          fix: "Schedule the restore drill and the instance-loss game quarterly. The rehearsal is cheap; discovering a dead backup during an outage is not.",
        },
        {
          mistake: "Post-mortems that end at 'human error'.",
          fix: "Blameless and systemic: what made the error easy, what would have caught it, which checklist or alert changes. Then do them.",
        },
      ],
      fieldChecklist: [
        "One command or one merge ships; the pipeline contains every step.",
        "I have personally executed a rollback in the last quarter.",
        "Migrations are expand-then-contract; deploys never require a traffic freeze.",
        "I know my RPO and RTO targets and have met them in a rehearsed drill.",
        "Alerts fire on user-facing symptoms with an owner and a runbook each.",
        "One incident has been walked end-to-end through my own logs, metrics and traces.",
      ],
      keyTerms: [
        {
          term: "Canary release",
          definition:
            "Routing a small slice of traffic to the new version and comparing its metrics before full rollout; the blast radius of a bad deploy, bounded.",
        },
        {
          term: "RPO / RTO",
          definition:
            "Recovery point objective: how much data loss is tolerable. Recovery time objective: how long you may be down. Numbers that turn panic into a plan.",
        },
        {
          term: "Golden signals",
          definition:
            "Latency, traffic, errors and saturation — the four metrics that describe almost every service's health.",
        },
        {
          term: "Blameless post-mortem",
          definition:
            "An incident review aimed at systems and safeguards, not names; its output is checklist and alert changes, not apologies.",
        },
      ],
      interviewQuestions: [
        {
          q: "Describe your deployment process and why it is shaped that way.",
          a: "One path, fully automated: CI runs lint, tests and build, the image is built once and promoted through staging with a smoke test, production gets a canary slice compared against baseline, and migrations are expand-then-contract so data and code deploy independently. Rollback is a rehearsed command, not a plan. The design goal is that release is boring and reversible at every step.",
        },
        {
          q: "What does a good alert look like?",
          a: "It fires on a symptom a user would feel — error rate, latency against baseline, queue depth causing real delay — it survives blips with a duration clause, and it names its owner and runbook. Cause-level signals like CPU stay in dashboards. The test I apply: if this page wakes you and nothing is actually wrong for users, the alert is wrong, not the night.",
        },
        {
          q: "How do you approach production incidents?",
          a: "Detect fast via a symptom alert, mitigate first — rollback or flag off — before root-causing, then hold the blameless review. The lasting changes are always systemic: the missing alert, the untested backup, the deploy path that allowed the bad state. 'Human error' never survives the review; the process that permitted it does, and gets fixed.",
        },
      ],
      quiz: [
        {
          question: "Which book's goal is making release a non-event?",
          options: [
            "Book 03 — authentication",
            "Book 05 — defense",
            "Book 11 — deployment",
            "Book 13 — monitoring",
          ],
          answerIndex: 2,
          explanation:
            "Book 11 automates the release path so the same boring steps run every time, with rollback rehearsed. Boring deploys are what make frequent releases safe.",
        },
        {
          question: "The backup job has been green for a year. What is still missing?",
          options: [
            "Nothing — green means ready",
            "A rehearsed restore proving you can meet your RTO",
            "A longer retention window",
            "A second cron job for redundancy",
          ],
          answerIndex: 1,
          explanation:
            "A green backup job proves the job ran, not that recovery works. The drill is what finds expired credentials, missing extensions and drift while they are cheap.",
        },
        {
          question: "What belongs in the pager?",
          options: [
            "CPU above 80% for one minute",
            "A single failed health check",
            "Every deploy event",
            "User-facing symptoms — error rate and latency against baseline, sustained",
          ],
          answerIndex: 3,
          explanation:
            "Page on what users feel, with a duration clause to survive blips and a runbook attached. Cause-level signals stay in dashboards where they inform, not wake.",
        },
      ],
    },
    {
      number: 12,
      title: "The 12-Month Study Plan",
      summary:
        "A year sounds long. Four books a quarter, one project growing underneath, and it is honestly comfortable.",
      keyIdea: "Never advance more than one book ahead of your project's adoption of it. Reading Book 11 while the project has no CI is fog, not progress.",
      deepDive: [
        {
          heading: "The shape of the year",
          paragraphs: [
            "Four quarters, each with a theme the project must absorb. Months 1 and 2: data and encryption — Books 01 and 02. Month 3: identity — Book 03. Month 4: secrets — Book 04. Month 5: defense — Book 05. Month 6: the wire — Book 06. Months 7 and 8: architecture and scaling — Books 07 and 08. Month 9: load — Book 09. Month 10: testing — Book 10. Month 11: deployment — Book 11. Month 12: disaster recovery and monitoring — Books 12 and 13.",
            "The pacing rule is the chapter's key idea made mechanical: never advance more than one book ahead of your project's adoption. Reading about load testing while the project has no tests is fog, not progress. Each book's checklist lands as commits in the same week the book is read; that is the whole engine. Slower is genuinely faster here, because the project is the memory the books write into.",
          ],
        },
        {
          heading: "What each quarter leaves behind",
          paragraphs: [
            "Quarter one leaves a schema with enforced invariants, TLS everywhere, working authentication with MFA, a secrets manager with rotation, and a threat model — the project is now honest by construction. Quarter two leaves measured latency budgets and a system that survives a doubled load. Quarter three leaves proof: percentile reports and a suite that gates merges. Quarter four leaves the pipeline, a rehearsed restore and live alerts with owners. Four quarters, four layers of the map, installed.",
            "Every artifact is also interview material, which is chapter 14's point. By month twelve the project holds a load report, a threat model, a post-mortem or two and a deployment history — proof a hiring manager can touch, not certificates promising you once read about these things. Keep the artifacts in the repository, dated, with the engineering log beside them; the trail is the résumé, and it writes itself if you never skip the weekly entry.",
          ],
        },
        {
          heading: "When the plan slips",
          paragraphs: [
            "It will slip — launches, interviews, life. The recovery is the rule itself: the project's state tells you where you are. If the current month's checklist items are not installed, do not advance; re-book the slots instead. A month spent making Book 05's checks real beats three months of skimming ahead, and the map forgives resuming — the treadmill does not. There is no shame in being on month 5 in month 8; there is only fog in pretending otherwise.",
            "Protect the compounding artifacts while you slip: the weekly engineering log entry, the checklist items as commits, the quarterly metrics baseline. In month twelve, rereading that trail is the difference between saying 'I studied for a year' and showing the dated path of what you can now prove. The plan's real output is not the reading; it is the version of you the project records.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Twelve months, four quarters",
        caption:
          "Never more than one book ahead of what the project has already absorbed.",
        stages: [
          { label: "Months 1–2", note: "Books 01–02: data, TLS" },
          { label: "Months 3–4", note: "Books 03–04: identity, keys" },
          { label: "Months 5–6", note: "Books 05–06: defense, wire" },
          { label: "Months 7–8", note: "Books 07–08: design, scale" },
          { label: "Months 9–10", note: "Books 09–10: load, tests" },
          { label: "Months 11–12", note: "Books 11–13: ship, DR, watch" },
        ],
      },
      codeExample: {
        language: "python",
        caption:
          "The weekly entry is small; twelve months of them is the record the whole plan rests on.",
        code: [
          "# One entry per week; the dated files are the resume point",
          "import json, pathlib",
          "",
          "entry = {",
          "    'week': 11,",
          "    'book': '03-identity',",
          "    'installed': ['refresh rotation behind a flag', 'MFA for admins'],",
          "    'broke': 'lockout endpoint had no rate limit',",
          "    'next': 'Book 04 — CI credentials via OIDC',",
          "}",
          "path = pathlib.Path('~/eng-log/2026-W11.json').expanduser()",
          "path.write_text(json.dumps(entry, indent=2))",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Reading three books ahead because the current one feels slow.",
          fix: "The rule is one book ahead, never more. If it feels slow, the checklist is not installed — speed comes from the project, not the pages.",
        },
        {
          mistake: "Studying by video marathon with no project commits.",
          fix: "Every week ends with commits that match the checklist. Watching is not learning; installing is.",
        },
        {
          mistake: "Restarting the plan from Book 01 after a lapse.",
          fix: "Find yourself on the map: which checklists are actually live in the project? Resume there. The map forgives; the treadmill does not.",
        },
        {
          mistake: "Treating the calendar slots as optional when busy.",
          fix: "Shrink the session, never skip it — two focused hours beat zero. The streak is the engine; momentum dies by omission.",
        },
      ],
      fieldChecklist: [
        "My calendar has four recurring weekly slots for the next twelve months.",
        "I have one project that will absorb every checklist in the series.",
        "I keep an engineering log and I have written the first entry.",
        "I know which book is current and which is one ahead — nothing is two ahead.",
        "Each month ends with that book's checklist items living as commits in the project.",
        "I reread my log monthly and adjust the plan against project state, not guilt.",
      ],
      keyTerms: [
        {
          term: "Pacing rule",
          definition:
            "Never advance more than one book ahead of the project's adoption; knowledge compounds only when installed the same week.",
        },
        {
          term: "Quarter theme",
          definition:
            "The four-block structure of the year — foundation, architecture, proof, operations — each leaving named artifacts in the project.",
        },
        {
          term: "Compounding artifact",
          definition:
            "A deliverable that grows more valuable with use — the schema, the load report, the runbook, the dated log; the physical form of progress.",
        },
        {
          term: "Resume point",
          definition:
            "Where the project's live checklists say you actually are, used to restart after a lapse without shame or re-reading.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you keep learning as an engineer?",
          a: "I follow a discipline map, not a trend feed: one structured book per month, every idea installed into a live project the same week, and an incident log that turns mistakes into checklists. Slow, applied, compounding.",
        },
        {
          q: "A year is a long plan. What happens when you fall behind?",
          a: "The project tells me where I am, not the calendar. I find the last month whose checklist is genuinely installed and resume there, shrinking sessions rather than skipping them. The plan is a map, not a treadmill — a month making one book's checks real beats three months of skimming ahead, and the log keeps the resume point honest.",
        },
        {
          q: "Why attach every book to one project instead of smaller exercises?",
          a: "Because context is what makes knowledge stick and produce proof. One growing project means each checklist lands on real state — a real schema, real traffic, real incidents — so month twelve leaves a system with a threat model, a load report and a deploy history. Twelve disconnected exercises produce notes; one project produces an engineer.",
        },
      ],
      quiz: [
        {
          question: "What is the pacing rule of the twelve-month plan?",
          options: [
            "Two books per month, minimum",
            "Never advance more than one book ahead of the project's adoption",
            "Finish all thirteen books, then start building",
            "Read only what the current ticket requires",
          ],
          answerIndex: 1,
          explanation:
            "Knowledge compounds only when installed the same week. One book ahead is a queue; three ahead is fog — reading about deploys while CI does not exist proves nothing.",
        },
        {
          question:
            "It is month 8, but the project has no tests and no load script. What does the plan say?",
          options: [
            "Continue to month 9 on schedule",
            "Restart from Book 01 to be safe",
            "Stop advancing; make the proof checklists real before moving on",
            "Skip proof — interviews never ask for it",
          ],
          answerIndex: 2,
          explanation:
            "The project's state is the resume point, not the calendar. Proof is what the last third of the plan and the interviews both rest on — install it before advancing.",
        },
        {
          question: "What does each quarter of the plan leave behind?",
          options: [
            "A certificate per book",
            "Named artifacts — schema, budgets, reports, pipeline, drills, alerts",
            "Summaries of each chapter",
            "A list of books completed",
          ],
          answerIndex: 1,
          explanation:
            "The plan is engineered to produce proof: each quarter's theme ends as dated artifacts in one project, which become the portfolio chapter 14 describes.",
        },
      ],
    },
    {
      number: 13,
      title: "Practice Projects That Exercise All 13",
      summary:
        "One project, grown deliberately, can force every discipline in this series to show up. Here is the exact growth script.",
      keyIdea: "Multi-user matters because it forces auth; money-shaped features matter because they force transactions, idempotency and audit trails; and a public URL matters because it invites the internet.",
      deepDive: [
        {
          heading: "Three forcing features",
          paragraphs: [
            "Multi-user forces authentication: registration, sessions, MFA, authorization checks, and a password reset flow done properly — the fastest way to discover whether you actually understand Book 03. Money-shaped features force transactions: a balance that must never double-spend, idempotent endpoints, an audit trail you can reconcile — Book 01 and Book 07 made physical. A public URL invites the internet: scanners, scrapers, rate limits, TLS, abuse you must watch — Books 05, 06 and 13, delivered by strangers.",
            "Everything else in the series hangs off these three. Encryption protects what multi-user systems store. Secrets protect what the money path calls. Networking explains why the public URL feels slow from far away. Testing proves the ledger. Disaster recovery protects it. Choose the project by whether it forces, not by whether it impresses — a feature that cannot fail teaches nothing, and a feature that can is the whole curriculum.",
          ],
        },
        {
          heading: "The growth script, stage by stage",
          paragraphs: [
            "Stage one: a single-user core on Postgres — schema, indexes, one migration, one verified backup. Stage two: multi-user — auth, sessions, roles, field-level encryption on the sensitive columns. Stage three: money — a wallet or booking with real transactions, unique idempotency keys, an append-only ledger, a reconciliation query. Stage four: public — a real domain, TLS, CDN, rate limits, monitoring, a load test before you tell anyone. Stage five: proof — the drill, the report, the post-mortem.",
            "Each stage is a deliberate incident generator, and that is the point. Break the scratch copy on purpose: kill the connection mid-transaction and watch the rollback, let the queue double-deliver and see whether the consumer survives, restore last night's backup into scratch and find what drifted. Every breakage becomes a dated log entry, and every checklist item in the series exists because someone's breakage produced it first.",
          ],
        },
        {
          heading: "Scope discipline",
          paragraphs: [
            "Keep it small enough to finish stages and real enough to matter: a booking tool for a club, a budget tracker with real exports, a URL shortener with quotas. One user besides you is enough to force auth. Ten dollars of balance is enough to force transactional honesty. One public link is enough to invite the internet. Grandeur is not the requirement; forcing functions are. The map does not care how big the database is.",
            "Resist the second project until the first has been through the whole script, because the compounding lives in one system's history: its threat model, its load reports, its post-mortems, its growth commits. By month twelve this one repository is simultaneously your best teacher, your engineering log and the core of your portfolio — which is exactly where chapter 14 picks up. One system, fully walked, beats five demos.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The project growth script",
        caption:
          "Each stage exists to force a discipline to show up and leave a checklist behind.",
        steps: [
          { label: "Stage 1: core", note: "schema, indexes, backup" },
          { label: "Stage 2: multi-user", note: "auth, roles, encryption" },
          { label: "Stage 3: money", note: "transactions, idempotency" },
          { label: "Stage 4: public", note: "TLS, limits, monitoring" },
          { label: "Stage 5: proof", note: "load test, drills, report" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "The money stage in two tables: a unique idempotency key makes retries safe, and the ledger makes balances auditable.",
        code: [
          "-- Money-shaped: the unique idempotency key makes retries safe",
          "CREATE TABLE payments (",
          "  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
          "  user_id         BIGINT NOT NULL REFERENCES users(id),",
          "  idempotency_key TEXT   NOT NULL UNIQUE,",
          "  amount_cents    BIGINT NOT NULL CHECK (amount_cents > 0),",
          "  status          TEXT   NOT NULL DEFAULT 'pending'",
          ");",
          "",
          "-- Audit trail: balances are derived from entries, never stored and hoped",
          "CREATE TABLE ledger_entries (",
          "  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,",
          "  payment_id  BIGINT REFERENCES payments(id),",
          "  user_id     BIGINT NOT NULL,",
          "  delta_cents BIGINT NOT NULL",
          ");",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Choosing an impressive project that forces none of the disciplines.",
          fix: "Pick by forcing functions: multi-user, money-shaped, public URL. A portfolio of demos without auth, money or traffic teaches nothing.",
        },
        {
          mistake: "Adding stages before the last one's checklists are real.",
          fix: "One stage at a time, checklists installed as commits. Stage four on top of stage two's gaps is a hackathon, not training.",
        },
        {
          mistake: "Keeping the project private 'until it is ready'.",
          fix: "Go public early with rate limits and monitoring on. The internet is a teacher; a private project hides the lessons that matter.",
        },
        {
          mistake: "Starting a second project when the first gets hard.",
          fix: "The hard part is the curriculum. Push the first through all five stages; the second project will take days, not months.",
        },
      ],
      fieldChecklist: [
        "My project has all three forcing features: multi-user, money-shaped, public URL.",
        "I can name which stage the project is in and which checklists are live.",
        "The money path uses real transactions, unique idempotency keys and a reconcilable ledger.",
        "I have broken the scratch copy on purpose and turned each breakage into a log entry.",
        "A load test ran before the public announcement, and its report is in the repo.",
        "The repo holds the threat model, runbooks and post-mortems alongside the code.",
      ],
      keyTerms: [
        {
          term: "Forcing feature",
          definition:
            "A requirement that makes a discipline unavoidable — multi-user forces auth, money forces transactions, a public URL forces defense and monitoring.",
        },
        {
          term: "Idempotency key",
          definition:
            "A unique client-supplied token per operation; the database rejects duplicates, so retries can never double-apply a payment.",
        },
        {
          term: "Audit trail",
          definition:
            "An append-only record of who changed what and when — the ledger — from which current state is derived and disputes are settled.",
        },
        {
          term: "Reconciliation",
          definition:
            "The periodic check that derived state (balances) matches the source record (ledger); the test that money logic is honest.",
        },
      ],
      interviewQuestions: [
        {
          q: "Tell me about a project that shows your production skills.",
          a: "One project, grown deliberately: it started as a single-user booking tool on Postgres, gained multi-user auth with MFA and field-level encryption, then a wallet with idempotent payments and a reconcilable ledger, then went public behind a CDN with rate limits and monitoring. I can walk through its threat model, its load report and two post-mortems. Every stage left checklists and dated log entries.",
        },
        {
          q: "Why does a money-shaped feature matter so much in practice projects?",
          a: "Because money makes honesty testable. A balance must survive retries, concurrency and crashes, which forces real transactions, unique idempotency keys and an append-only ledger you can reconcile. Those same invariants — atomic writes, safe retries, audit trails — are what every serious backend needs, and a toy project without them never has to learn any of it.",
        },
        {
          q: "How do you keep a practice project from becoming a never-ending rewrite?",
          a: "Stage gates and the map. Each stage has named checklists; I do not add features that skip stages, and I do not restart when it gets hard — the hard part is the curriculum. The project's job is to force disciplines to show up, not to be a product. Scope stays one domain, one database, one public URL.",
        },
      ],
      quiz: [
        {
          question:
            "Which three project features force most of the series' disciplines?",
          options: [
            "AI features, blockchain, quantum resistance",
            "Multi-user, money-shaped, public URL",
            "Dark mode, internationalization, offline support",
            "Monorepo, microservices, serverless",
          ],
          answerIndex: 1,
          explanation:
            "Those three drag authentication, transactions with idempotency, and public-facing defense into existence by necessity. Everything else in the map hangs off what they force you to build.",
        },
        {
          question:
            "The wallet endpoint has no idempotency key and clients retry on timeout. What happens?",
          options: [
            "Nothing — HTTP retries are safe by default",
            "The database deduplicates automatically",
            "Duplicate charges — each retry re-runs a non-idempotent write",
            "Only latency increases",
          ],
          answerIndex: 2,
          explanation:
            "A retry is a second, identical request to the server. Without a unique idempotency key enforced by the database, the payment path happily charges twice.",
        },
        {
          question: "Why go public before the project feels finished?",
          options: [
            "Finished projects are boring to demo",
            "A public URL invites the real internet — scanners, scrapers and abuse — which forces defense and monitoring",
            "To collect stars on GitHub",
            "Private repositories cost money",
          ],
          answerIndex: 1,
          explanation:
            "The internet is the only honest generator of traffic, abuse and weirdness. A private project hides exactly the lessons the public chapters are written for.",
        },
      ],
    },
    {
      number: 14,
      title: "Careers: Portfolio, Interviews, First Job",
      summary:
        "Nobody hires potential. They hire proof. This series is engineered to produce proof.",
      keyIdea: "One candidate with a load report, a threat model and a post-mortem beats ten candidates with certificates.",
      deepDive: [
        {
          heading: "Proof beats promise",
          paragraphs: [
            "One candidate with a load report, a threat model and a post-mortem beats ten candidates with certificates — because artifacts can be probed. When you narrate the request journey from chapter 4 in an interview, you are reciting a map you have actually walked, and every clause has a repository artifact behind it. Interviewers calibrate quickly between rehearsed vocabulary and lived vocabulary; the difference shows the moment they ask 'why' one level deeper and you keep answering.",
            "The portfolio is chapter 13's project plus its paper trail: the dated engineering log, the load report with its before-and-after numbers, the threat model, the rehearsed-restore runbook, the post-mortems. Not a gallery of five tutorial clones — one system with a history. Depth reads as seniority even at junior scale, because depth is exactly what the interview is trying to detect.",
          ],
        },
        {
          heading: "How to tell it",
          paragraphs: [
            "Build the stories now, while memory is fresh. One incident you caused and fixed: what made the error easy, what you changed, what would catch it next time. One bottleneck found and measured, with the numbers from before and after. One design decision you defended and later revised, and what the revision taught you. Tell each as situation, what you checked, what you changed, how you verified — an interview shape with engineering honesty inside it.",
            "Then rehearse the fundamentals out loud: explain what a transaction guarantees, walk through a TLS handshake, describe what happens when a deploy goes wrong. Answer in mechanisms, then trade-offs, then what you would do differently — that three-layer answer is what 'sounds senior' actually is. Every quiz in this series exists partly for this drill, and the checklists you installed are what hold up when the follow-up questions arrive.",
          ],
        },
        {
          heading: "The first job, realistically",
          paragraphs: [
            "Aim where the map is the job description: junior backend, platform-adjacent teams, infrastructure companies' support-engineering paths. Their screens ask about databases, incidents and deploys — and you have a migration story, a drill log and a deployment history. Apply from month nine onward, not month twelve: hiring loops take weeks, rejections are tuition, and every interview tells you which checklist to sharpen next. Perfect readiness is a rumor; nobody is hired ready.",
            "After the offer, keep the log going: the first ninety days are the same discipline at someone else's scale. Install one book's checklist into the team's system per quarter, ask which checklist covered the last incident, volunteer for the post-mortem and the runbook. The roadmap does not expire at hire — it is simply the first year of the job, already walked once at home, where the mistakes were cheap.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The proof hierarchy",
        caption:
          "Hiring managers read from the top — artifacts they can verify beat claims they must take on faith.",
        tiers: [
          { label: "Lived stories", note: "incident, fix, numbers" },
          { label: "Artifacts", note: "load report, threat model" },
          { label: "A deployed system", note: "one project, full history" },
          { label: "Certificates", note: "the floor, not the signal" },
        ],
      },
      pitfalls: [
        {
          mistake: "A portfolio of tutorial clones with no operational history.",
          fix: "One project with a dated trail: threat model, load report, post-mortems, runbooks. Depth in one system outscores breadth in five demos.",
        },
        {
          mistake: "Rehearsing buzzwords without the mechanisms beneath.",
          fix: "Answer in mechanisms first, trade-offs second, regrets third. Interviewers probe one level deeper than your vocabulary; the checklists are what hold.",
        },
        {
          mistake: "Waiting until the plan 'finishes' to apply.",
          fix: "Apply from month nine. Loops take weeks, rejections are tuition, and each interview tells you which checklist to sharpen next.",
        },
        {
          mistake: "Hiding the incidents you caused.",
          fix: "Own them with the fix and the systemic change they produced. Engineers who say 'I broke it, here is what I changed' read as safe, not risky.",
        },
      ],
      fieldChecklist: [
        "My portfolio is one project plus its paper trail: log, reports, runbooks, post-mortems.",
        "I have three practiced stories: an incident, a measured fix, a revised decision.",
        "I can answer the fundamentals questions out loud in mechanisms, trade-offs, regrets.",
        "Applications started by month nine, with each loop's gaps fed back into the plan.",
        "My repo README links the artifacts, dated, not just the code.",
        "I keep the weekly log running after hire; the roadmap becomes the first year of the job.",
      ],
      keyTerms: [
        {
          term: "Proof artifact",
          definition:
            "A dated, verifiable deliverable — load report, threat model, post-mortem, restore runbook — that demonstrates a discipline was practiced, not just studied.",
        },
        {
          term: "Mechanism answer",
          definition:
            "Answering in three layers: how it works, what it costs, what you would change — the shape that separates lived knowledge from rehearsed vocabulary.",
        },
        {
          term: "Portfolio depth",
          definition:
            "One system with a full operational history instead of many shallow demos; depth reads as seniority at any scale.",
        },
        {
          term: "STAR story",
          definition:
            "Situation, task, action, result — told with engineering honesty: what you checked, what you changed, how you verified the fix.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you present yourself as self-taught without production job experience?",
          a: "With artifacts instead of claims: one project that went through the full growth script — auth, payments, a public URL — with its threat model, load report and rehearsed-restore runbook in the repo, plus a dated engineering log. I narrate the request journey clause by clause and answer one level deeper on why. The map I can prove I walked is my experience.",
        },
        {
          q: "What questions should you expect in a junior backend interview?",
          a: "Fundamentals, asked as war stories: how transactions behave under concurrency, what an index does and when the planner ignores it, how you would add auth to an endpoint, what happens when a deploy goes wrong, how you would find a slow query. Answer in mechanisms, then trade-offs. Every one of those has a chapter and a checklist behind it in this series.",
        },
        {
          q: "How do you keep growing after the first job?",
          a: "The same loop, at work: install one discipline per quarter into the team's real system, keep the personal engineering log, and volunteer for post-mortems and runbooks. Ask which checklist covered the last incident and what it missed. The roadmap becomes the first year of the job — the difference is that now the incidents are shared, and so is the compounding.",
        },
      ],
      quiz: [
        {
          question: "What beats certificates in hiring, per this chapter?",
          options: [
            "A longer list of languages",
            "Verifiable artifacts — a load report, a threat model, a post-mortem",
            "A bigger social following",
            "More tutorial certificates",
          ],
          answerIndex: 1,
          explanation:
            "Artifacts can be probed, questioned and verified, while certificates only assert attendance. Depth in one real system is what technical interviews are actually fishing for.",
        },
        {
          question:
            "An interviewer says: 'walk me through what happens when a user hits your API'. Best answer shape?",
          options: [
            "List the frameworks you have used",
            "Describe your last tutorial project",
            "Say the code is self-documenting",
            "Recite the request journey clause by clause with the tools, then go one level deeper on any hop they pick",
          ],
          answerIndex: 3,
          explanation:
            "The journey is the shared map between you and the interviewer. Going one level deeper on any hop is where lived knowledge separates from rehearsed vocabulary.",
        },
        {
          question: "When should job applications start, per the plan?",
          options: [
            "After the full twelve months",
            "Only after the portfolio is perfect",
            "From month nine, treating loops and rejections as part of the training",
            "Never — referrals replace applications",
          ],
          answerIndex: 2,
          explanation:
            "Loops take weeks and rejections teach. Each interview names the checklist to sharpen next, which makes applying early a feedback mechanism, not a gamble.",
        },
      ],
    },
  ],
};
