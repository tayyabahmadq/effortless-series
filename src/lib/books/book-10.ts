/**
 * Book 10 — Master Testing. Fully expanded chapters, matching the golden
 * reference format in _reference.ts.
 */
import type { Book } from "../types";

export const book10: Book = {
  id: "book-10",
  number: 10,
  title: "Master Testing",
  subtitle: "Book 10 of 13 · The Effortless Series",
  tagline:
    "The whole pyramid: unit, integration and end-to-end tests; Playwright; mocks and contract testing; coverage that means something; TDD; regression tests; CI gating; chaos and fault injection; fixtures and database isolation.",
  description:
    "Tests are the memory of a codebase — they let you change it years later without fear, and they are the gate that makes AI-generated velocity safe.",
  layer: "Prove it works",
  layerQuestion: "How do we know before the users do?",
  accentColor: "#a3e635",
  emoji: "10",
  months: "Month 6",
  chapters: [
    {
      number: 1,
      title: "The Test Pyramid",
      summary:
        "Many fast unit tests at the base, fewer integration tests in the middle, very few expensive end-to-end tests at the top. Inverted pyramids are slow, flaky, and expensive.",
      keyIdea:
        "The pyramid shape is a cost-vs-confidence trade. Each layer catches a different class of bug.",
      deepDive: [
        {
          heading: "The shape is an economics argument",
          paragraphs: [
            "The pyramid is an economics argument before it is a diagram. A unit test runs in milliseconds, so you can afford hundreds of them on every save; an integration test against a real Postgres takes seconds, so it earns a middle tier; an end-to-end test driving Playwright through a browser takes tens of seconds and fails for environmental reasons, so it earns a handful. Cost per test rises as you climb, and confidence per test rises with it. The shape — many cheap, few expensive — falls out of those numbers, not from dogma.",
            "The inverted pyramid is what happens when this logic runs backwards. Teams write most of their tests through the browser because it feels most real, and six months later the suite takes forty minutes, fails randomly once a week, and every failure is a debugging expedition across every layer at once. Slow feedback kills the habit of running tests locally; random failure kills trust in CI. A pyramid holds because each tier does a job the tier above would do ten times more expensively.",
          ],
        },
        {
          heading: "Each layer catches a different class of bug",
          paragraphs: [
            "Unit tests catch logic errors: the off-by-one, the inverted condition, the tax computed on the subtotal instead of the total. Integration tests catch wiring bugs: the query that works against a mock but not real Postgres, the env var missing only in real composition, the transaction that never commits. End-to-end tests catch journey bugs: the redirect loop after login, the cookie Safari drops, the checkout button that does nothing on the second attempt. No layer substitutes for another, which is why the shape has tiers at all.",
            "Put numbers on it. A healthy TypeScript service in 2026 runs lint and type checks first, hundreds of Vitest unit tests on every save, dozens of integration tests against containerized Postgres and Redis on every push, and roughly a dozen Playwright journeys before release. The exact ratios vary per product, but the direction never does: volume concentrates at the cheap bottom, and the expensive top stays small enough that a red journey is an event, not a Tuesday.",
          ],
        },
        {
          heading: "The shape drifts one expedient at a time",
          paragraphs: [
            "Pyramids erode through reasonable decisions. A bug is easiest to reproduce through the UI, so the fix ships with a Playwright test — and it stays there, though a unit test could have caught the same defect. Repeat that for a year and the top tier is four hundred browser tests nobody trusts. The rule that prevents it: when an end-to-end test finds a bug, fix it and add the permanent guard at the lowest layer that can catch it. Push tests down, always.",
            "Hold the shape with numbers, not vibes. Track count and duration per tier in CI; when the E2E suite grows past its budget or the full run crosses ten minutes, that is a review conversation, not an automatic merge. Prune tests whose cost no longer matches the risk they cover, and push down the ones that duplicate a lower tier. A pyramid is maintenance, like a garden — nobody decides to let it go wild, which is exactly why somebody has to notice.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The test pyramid",
        caption:
          "Cost per test rises as you climb, so volume sorts itself toward the cheap base.",
        tiers: [
          { label: "E2E journeys", note: "a dozen critical flows only" },
          { label: "Integration", note: "real engines, the workhorse tier" },
          { label: "Unit", note: "hundreds, milliseconds each" },
          { label: "Static checks", note: "types and lint, zero runtime" },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Investing mostly in end-to-end tests because they feel most real.",
          fix: "Push every test as far down the pyramid as it will go. E2E is the tip, not the body — keep it to the critical journeys.",
        },
        {
          mistake:
            "Writing an E2E test for a bug a unit test could have caught.",
          fix: "When an E2E fails, fix it and add the permanent guard at the lowest layer that can catch the same bug. Push tests down, always.",
        },
        {
          mistake: "Letting the E2E suite grow unbounded, one test per bug.",
          fix: "Budget the top tier to roughly a dozen journeys. Growth beyond the budget is a review conversation, not a rubber stamp.",
        },
        {
          mistake: "Treating the pyramid as a fixed ratio instead of a cost trade.",
          fix: "Revisit the mix per service: a pure calculation library is nearly all unit tests; a UI-heavy app earns more integration and E2E.",
        },
      ],
      fieldChecklist: [
        "I can state the count and runtime of the unit, integration and E2E tiers in this repo from memory.",
        "My E2E suite covers only journeys whose failure would page someone or lose money.",
        "When an E2E test found a bug recently, the permanent guard landed at the lowest layer possible.",
        "I know the wall-clock duration of the full suite in CI and would notice if it doubled.",
        "Static checks (types, lint) run before any test tier in the pipeline.",
        "I have pruned or pushed down at least one test this quarter whose cost outran its value.",
      ],
      keyTerms: [
        {
          term: "Test pyramid",
          definition:
            "The cost-vs-confidence shape of a suite: many fast unit tests at the base, fewer integration tests in the middle, a handful of E2E journeys at the tip.",
        },
        {
          term: "Integration test",
          definition:
            "A test that exercises your code against real dependencies — a real Postgres, a real queue — to catch wiring bugs unit tests cannot see.",
        },
        {
          term: "End-to-end test",
          definition:
            "A test that drives the real system through a browser exactly as a user would; expensive, so reserved for critical journeys.",
        },
        {
          term: "Inverted pyramid",
          definition:
            "The anti-pattern where most tests are E2E; slow, flaky, and hard to diagnose because every failure blends every layer.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does the test pyramid still matter in 2026?",
          a: "Because the economics have not changed. Unit tests run in milliseconds on every save; E2E tests take tens of seconds and fail for environmental reasons. Fast feedback where it is cheap, real confidence at the tip. AI-generated tests make the bottom tier even cheaper to fill, which makes holding the top tier small more important, not less.",
        },
        {
          q: "Your team has 400 E2E tests and 200 unit tests. What do you do?",
          a: "Freeze the E2E tier first — no new browser tests without a review. Then classify the 400 by journey, keep the dozen or so that guard critical flows, and push the rest down: behaviors reproducible at the API level become integration tests, pure logic becomes unit tests. The move takes a quarter of patient effort and buys back a suite that finishes in minutes instead of an hour.",
        },
        {
          q: "What does each layer catch that the others miss?",
          a: "Unit catches logic: wrong branches, bad math, boundary handling. Integration catches wiring: SQL against a real engine, serialization, missing config, transactions. E2E catches journeys: cookies, redirects, caching, cross-browser behavior. A defect that costs money usually passes through two of the three layers — which one catches it depends on where the wiring breaks.",
        },
      ],
      quiz: [
        {
          question: "Which tier sits at the base of a healthy test pyramid?",
          options: ["End-to-end tests", "Manual QA", "Unit tests", "Integration tests"],
          answerIndex: 2,
          explanation:
            "The base is the cheap, fast tier — unit tests in the hundreds. Integration forms the middle, and the handful of E2E journeys sit at the tip where cost per test is highest.",
        },
        {
          question:
            "A bug is reproducible only through the full browser flow. After fixing it, where does the permanent regression test go?",
          options: [
            "E2E only, since that is where it reproduces",
            "At the lowest layer that can catch the same failure",
            "Nowhere — the bug is fixed",
            "Duplicated at every layer for safety",
          ],
          answerIndex: 1,
          explanation:
            "The reproduction path is not the protection path. Once diagnosed, the defect usually has a smaller trigger — a function or an API call — and the guard belongs at that lowest layer.",
        },
        {
          question:
            "Your E2E suite runs 45 minutes and fails randomly about once a week. Most likely root cause?",
          options: [
            "The pyramid is inverted — too much weight on the slowest, most brittle tier",
            "The unit tests are too slow",
            "Integration tests are missing",
            "Developers run tests locally",
          ],
          answerIndex: 0,
          explanation:
            "Long, randomly failing suites are the signature of an inverted pyramid: every failure blends every layer, and trust in the whole gate erodes. Shrink the tip and push tests down.",
        },
      ],
    },
    {
      number: 2,
      title: "Unit Tests",
      summary:
        "Unit tests verify a single function in isolation. Fast, deterministic, and the foundation of refactor confidence.",
      keyIdea:
        "A unit test that touches the filesystem, network, or database is not a unit test — it is an integration test in disguise.",
      deepDive: [
        {
          heading: "Isolation is the definition",
          paragraphs: [
            "A unit test verifies one function or class with every collaborator replaced by a test double: the clock is faked, the network is intercepted, the database sits behind an interface. It runs in milliseconds and passes or fails identically on every machine. The moment the test reads a file, calls fetch, or opens a Postgres connection, it has crossed into integration territory — slower, environment-sensitive, and dishonestly named. The name matters because it sets expectations about speed and determinism.",
            "Testability is a design signal, not a stylistic preference. Code that is hard to unit test is usually telling you something real: hidden globals, singletons, IO woven through decision logic. The fix is architectural — extract the pure core that computes, push reads and writes to the edges, and pass collaborators in as parameters. Teams that chase testability this way end up with better boundaries even before the tests run; the difficulty of testing is how the design complains.",
          ],
        },
        {
          heading: "The daily mechanics in Vitest",
          paragraphs: [
            "In 2026 Vitest is the default for new TypeScript projects: a Jest-compatible API shape, native ESM, and watch mode that re-runs only the tests your change touched. Jest remains everywhere in older repositories, and everything in this chapter transfers. The commands are two: vitest --watch while thinking, vitest run in CI. Structure each test as arrange, act, assert; one behavior per test; and name it as a claim about behavior — 'charges tax only for taxable states' — so the failure output reads like a bug report.",
            "Cover the boundaries where logic actually breaks: the empty list, the single item, the maximum, the negative, the unicode name, the leap-day date, the error path. Do not cover getters, generated code, or wiring — that is Chapter 7's vanity coverage. Keep each test independent of every other: no shared mutable state, no reliance on execution order. Independence is what lets you run one test while debugging instead of the whole file.",
          ],
        },
        {
          heading: "Where unit tests stop",
          paragraphs: [
            "The line is IO. If the behavior you care about requires the world to exist — a row in a table, a response over the wire, a file on disk — stop pretending. Write an integration test against the real thing (Chapter 3) or a contract test at the boundary (Chapter 6). The cost of faking a database faithfully inside a unit test exceeds the cost of just running one in a container, and the fake will drift exactly when it matters most.",
            "Speed is the other boundary. A unit suite that finishes in seconds is a thinking tool: you run it on every save, and it answers questions while you are still holding the problem in your head. Let it drift to minutes and people batch changes, run it rarely, and debug by print statement. If one file's tests are slow, the file usually mixes computation with IO — split it, and both halves get faster.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "True unit test, or integration in disguise?",
        caption:
          "If a test needs the world to exist, it is not a unit test — name it honestly and test it as integration.",
        left: {
          heading: "True unit test",
          items: [
            "Pure logic, all doubles injected",
            "Millisecond-fast, runs on every save",
            "Deterministic — same result every run",
            "Fails only when behavior changed",
          ],
        },
        right: {
          heading: "Integration in disguise",
          items: [
            "Touches disk, network or database",
            "Seconds slow, skipped when hurried",
            "Order- and timezone-sensitive",
            "Fails when the environment changed",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Behavior-named tests over implementation-named tests — the failure message reads like a bug report.",
        code: [
          "import { describe, expect, it } from 'vitest';",
          "import { chargeFor } from './pricing'; // pure: no IO, no clock",
          "",
          "describe('chargeFor', () => {",
          "  it('charges tax only for taxable states', () => {",
          "    expect(chargeFor({ state: 'CA', subtotalCents: 10000 }).taxCents).toBe(725);",
          "  });",
          "  it('charges no tax where none is due', () => {",
          "    expect(chargeFor({ state: 'OR', subtotalCents: 10000 }).taxCents).toBe(0);",
          "  });",
          "  it('rejects a negative subtotal instead of refunding', () => {",
          "    expect(() => chargeFor({ state: 'CA', subtotalCents: -1 })).toThrow(/negative/);",
          "  });",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Unit-testing implementation details: private methods, call counts, internal state.",
          fix: "Assert observable behavior — inputs to outputs. Implementation-coupled tests break on every refactor and protect nothing.",
        },
        {
          mistake: "Mocking everything, including the module's own helper functions.",
          fix: "Mock only external boundaries: network, clock, IO. Over-mocked suites verify your mocks, not your code.",
        },
        {
          mistake: "A 'unit' test that reads a fixture file or hits localhost.",
          fix: "Inline tiny fixtures; replace IO with doubles. If it truly needs the world, rename it integration and treat it accordingly.",
        },
        {
          mistake: "Tautological tests: expect(result).toEqual(result).",
          fix: "Write the assertion against a hand-computed expected value first. A test that cannot fail is decoration, not protection.",
        },
      ],
      fieldChecklist: [
        "I can run the unit suite with one command and it finishes in seconds.",
        "Every unit test is deterministic — no real clock, network, filesystem or database.",
        "Test names read as behavior: 'charges tax only for taxable states', not 'testChargeFor'.",
        "Boundary cases are covered: empty, one, many, maximum, negative, and the error paths.",
        "When a function is hard to test, I treat that as a design signal and extract the pure core.",
        "I never assert on a mock's call count where an output assertion was possible.",
      ],
      keyTerms: [
        {
          term: "Test double",
          definition:
            "Any object standing in for a real dependency in a test — stubs, fakes, spies and mocks are all species of double.",
        },
        {
          term: "Determinism",
          definition:
            "The property that a test passes or fails identically on every run given the same code — the entry fee for trusting a suite.",
        },
        {
          term: "Arrange-Act-Assert",
          definition:
            "The standard unit test structure: set up inputs, invoke the behavior, assert the observable result.",
        },
        {
          term: "Testable design",
          definition:
            "Code shaped so logic is pure and IO lives at the edges — testability as a byproduct of good boundaries.",
        },
      ],
      interviewQuestions: [
        {
          q: "What makes a test a unit test?",
          a: "Isolation and determinism. One behavior under test, every collaborator replaced by a double, no IO — no filesystem, network, database or real clock. It runs in milliseconds and passes identically on any machine. If it needs the world to exist, it is an integration test, and it should be named, run and trusted as one.",
        },
        {
          q: "How do you test a function that depends on the current time?",
          a: "Inject the clock. Pass the dependency in as a parameter, or use the framework's fake timers — vi.useFakeTimers in Vitest, jest.useFakeTimers in Jest — and advance to the exact instant the behavior cares about: the leap day, the midnight rollover, the DST boundary. Then the test pins a specific moment instead of racing the real one, and it stays deterministic forever.",
        },
        {
          q: "When is 100% unit coverage of a module a smell?",
          a: "When it is bought with tests of trivia — getters, setters, generated code, wiring — or with assertions on implementation details like internal call order. Coverage of the decision logic is valuable; coverage of the scaffolding is noise. If a number was the goal, the tests were written for the metric, not the behavior, and they will fight every refactor.",
        },
      ],
      quiz: [
        {
          question:
            "A test calls a stub HTTP server over the real network stack and asserts the response. What is it?",
          options: [
            "A unit test — the server is a stub",
            "An integration test — it crosses a process and network boundary",
            "An end-to-end test",
            "A contract test",
          ],
          answerIndex: 1,
          explanation:
            "Stubs do not make a test a unit test. Crossing a network boundary makes it slow and environment-sensitive, which is the definition of the integration tier — name it honestly.",
        },
        {
          question:
            "Which failure most strongly suggests a test is coupled to implementation details?",
          options: [
            "It fails after a behavior-preserving refactor",
            "It fails when the network is down",
            "It passes on CI but fails locally",
            "It is slower than the others",
          ],
          answerIndex: 0,
          explanation:
            "Behavior-preserving refactors change structure, not outcomes. If the test breaks anyway, it was asserting structure — call counts, private state — rather than observable behavior.",
        },
        {
          question:
            "What is the healthiest response to logic that is painful to unit test?",
          options: [
            "Mock harder until it passes",
            "Skip unit tests and cover it with E2E",
            "Delete the failing tests",
            "Extract the pure decision logic and push IO to the edges",
          ],
          answerIndex: 3,
          explanation:
            "Painful unit tests are a design signal: IO is woven into decision logic. Extracting the pure core makes the logic trivially testable and improves the boundaries at the same time.",
        },
      ],
    },
    {
      number: 3,
      title: "Integration Tests",
      summary:
        "Integration tests verify that components work together — your code plus a real database, a real queue, a real cache. Slower, but they catch the bugs unit tests miss.",
      keyIdea:
        "Use testcontainers to spin real Postgres/Redis per test run. Mocked databases test your mocks.",
      deepDive: [
        {
          heading: "The bugs only integration can catch",
          paragraphs: [
            "Mock the database and a whole class of bug becomes invisible: the query that sorts NULLs differently in Postgres than in your mock, the JSONB column that round-trips dates as strings, the transaction that deadlocks under two writers, the migration that forgot a NOT NULL. These are composition bugs — your code is correct in isolation and wrong together. Integration tests exist to catch them: your code plus a real engine, a real queue, a real cache, wired the way production wires them.",
            "The workhorse form is API-level: start your real HTTP server, point it at a real Postgres and Redis, send requests, assert responses and side effects. This tier is dramatically more stable than browser tests and dramatically more honest than unit doubles. When engineers say 'the middle of the pyramid', this is what they mean — most of your confidence per second of CI time comes from here, not from the browser tier.",
          ],
        },
        {
          heading: "Real dependencies with testcontainers",
          paragraphs: [
            "Testcontainers is the modern default: it starts a disposable Postgres, Redis or Kafka in Docker for the run, on the real engine and version you ship with, and throws it away afterward. No shared dev database, no 'someone seeded it on Thursday' state, no order dependence. The mocked database tests your mocks; the containerized one tests your SQL, your migrations and your pool math. It costs tens of seconds and buys the ability to reproduce any database bug locally in one command.",
            "Manage the cost deliberately: boot containers once per suite, not per test; share them across files through a global fixture; cache images in CI so the pull is not the bottleneck. State isolation still happens per test — transactions, truncation or schemas, which is Chapter 12's subject — because a shared container with a shared dataset is just a shared dev database with extra startup time. The container gives you a clean engine; your harness gives you clean state.",
          ],
        },
        {
          heading: "Test your boundaries, not the framework",
          paragraphs: [
            "Integration tests pay for themselves where the wiring is yours: the repository layer against real SQL, the API surface against real HTTP, the queue consumer against a real broker. They waste money where the wiring belongs to someone else: Express's router, Next's rendering, the Postgres driver itself. The vendor tests that; you test that you used it correctly. A useful heuristic — if a test failure would teach you nothing about your own code, it is testing the wrong thing.",
            "Third-party HTTP APIs are a special case: never call them live from tests. They are slow, rate-limited, nondeterministic, and occasionally down in ways that make your pipeline lie. Stub them with MSW handlers for behavior, and cover the real shape with contract tests (Chapter 6). Keep the whole tier deterministic: fixed seeds, frozen clocks, one writer per dataset. A reproducible integration failure is a debugging session; an irreproducible one is a superstition.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "One integration test, end to end",
        caption:
          "Real engine, real migrations, real HTTP — the middle of the pyramid is where wiring bugs die.",
        steps: [
          { label: "Boot containers", note: "testcontainers: Postgres, Redis" },
          { label: "Migrate schema", note: "real migrations, never a copy" },
          { label: "Seed fixtures", note: "minimal, explicit state" },
          { label: "Call the real API", note: "HTTP in, assert out" },
          { label: "Tear down", note: "container dies, state gone" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "A disposable Postgres per run: the real engine, a private port, nothing shared with anyone else's machine.",
        code: [
          "# One disposable Postgres for the whole integration run",
          "docker run -d --rm --name test-pg \\",
          "  -e POSTGRES_PASSWORD=test \\",
          "  -e POSTGRES_DB=app_test \\",
          "  -p 54329:5432 postgres:17",
          "",
          "# Real migrations against the real engine",
          "DATABASE_URL=postgresql://postgres:test@localhost:54329/app_test npm run migrate:up",
          "",
          "# Run the integration tier, then the container dies with it",
          "npm run test:integration",
          "docker stop test-pg",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Mocking the database in tests that are called integration tests.",
          fix: "Use testcontainers or an ephemeral instance. A mocked database verifies your mock's behavior, not your queries.",
        },
        {
          mistake: "One shared dev database for the whole team's test runs.",
          fix: "Per-run containers or schemas. Shared state makes tests order-dependent and failures irreproducible.",
        },
        {
          mistake: "Starting a fresh container for every individual test case.",
          fix: "Boot once per suite and isolate state per test with transactions or truncation — Chapter 12 covers the menu.",
        },
        {
          mistake: "Asserting only the happy path of an integration flow.",
          fix: "Cover the failure edges too: duplicate key, constraint violation, timeout. That is what the real engine is for.",
        },
      ],
      fieldChecklist: [
        "My integration tests run against a real database engine, started fresh per run, never a shared dev box.",
        "Migrations, not hand-written schema copies, build the test database.",
        "I can run the integration tier alone, and it stays green in any order.",
        "Failure paths are covered: constraint violations, duplicates, timeouts.",
        "The integration suite runs in CI with Docker available, and I know its duration.",
        "No integration test calls a live third-party API — those boundaries are stubbed or contract-tested.",
      ],
      keyTerms: [
        {
          term: "Testcontainers",
          definition:
            "A library family that starts real dependencies — Postgres, Redis, Kafka — in disposable Docker containers for the duration of a test run.",
        },
        {
          term: "Fixture",
          definition:
            "The minimal, explicit dataset a test starts from, created by setup code rather than inherited from whoever ran last.",
        },
        {
          term: "Workhorse tier",
          definition:
            "The integration layer: the best confidence-per-second in the suite because it is real enough to catch wiring bugs and stable enough to trust.",
        },
        {
          term: "Composition bug",
          definition:
            "A defect that only appears when correct parts run together — the class integration tests exist to catch.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why not just mock the database in tests?",
          a: "Because the mock tests itself. Real engines have dialect behaviors mocks get wrong: NULL ordering, JSONB round-trips, transaction isolation, constraint timing. The bugs that page you at 2 a.m. are exactly those — the query that worked in the mock and fails on real Postgres. Containers made real engines cheap: tens of seconds per run buys the ability to reproduce any database bug locally.",
        },
        {
          q: "How do you keep integration tests fast if containers are slow to start?",
          a: "Boot once per suite through a global fixture, reuse the containers across files, and cache images in CI. State isolation moves to the per-test level — transactional rollback or truncation — so speed comes from the harness, not from skipping realism. With that shape, two hundred integration tests add a couple of minutes, most of it migration, and they still run against the real engine.",
        },
        {
          q: "What is the difference between what unit and integration tests catch?",
          a: "Unit tests catch logic errors in isolation: wrong branches, bad math, unhandled boundaries. Integration tests catch composition errors: serialization mismatches, SQL the mock tolerated, missing environment config, transactions that never commit. The first class embarrasses the function; the second class causes incidents. That is why the middle tier is the workhorse, not the base.",
        },
      ],
      quiz: [
        {
          question:
            "Your SQL passes against a mocked repository but fails on real Postgres. Which tier would have caught it?",
          options: [
            "Static types",
            "Unit tests",
            "Code review always catches this",
            "Integration tests with a real engine",
          ],
          answerIndex: 3,
          explanation:
            "Dialect differences, constraint behavior and transaction semantics only exist in the real engine. This is precisely the bug class the integration tier exists to catch.",
        },
        {
          question:
            "Best practice for a testcontainers-based suite with 200 integration tests?",
          options: [
            "Start one container per test case",
            "Boot the container once per suite and isolate state per test",
            "Share one dev database across the team",
            "Skip teardown to save time",
          ],
          answerIndex: 1,
          explanation:
            "Container startup is amortized once; cleanliness comes from per-test state isolation instead of per-test booting. Skipping teardown or sharing a dev database reintroduces the order-dependence bugs.",
        },
        {
          question: "Which is NOT a good use of integration tests?",
          options: [
            "Verifying a migration against the real engine",
            "Testing that your API handles a duplicate-key insert",
            "Testing the Express framework's own router",
            "Verifying repository queries against real Postgres",
          ],
          answerIndex: 2,
          explanation:
            "Framework internals are the vendor's contract, not your wiring. Testing them costs CI minutes and teaches you nothing about your own code when they fail.",
        },
      ],
    },
    {
      number: 4,
      title: "End-to-End Tests with Playwright",
      summary:
        "End-to-end tests simulate real user journeys through the actual browser. Few in number, high in confidence, the gate before release.",
      keyIdea:
        "Playwright over Selenium in 2026: faster, more reliable, better API. Test user journeys, not pages.",
      deepDive: [
        {
          heading: "Journeys, not pages",
          paragraphs: [
            "An end-to-end test drives the real product the way a user does: real browser, real clicks, real network, real database behind it. The unit of this tier is the journey — sign up, onboard, create the first project, check out — not the page. Page-by-page tests couple to layout and break on every redesign while missing the wiring bugs that only appear across steps. Write the journey a real user would recognize, and name the test after the outcome they are buying.",
            "Keep the tier small on purpose: the dozen or so journeys whose failure would cost money or wake someone up — signup, login, password reset, checkout, the money path. Everything else belongs at a lower layer, where failures are cheaper and diagnosis is faster. This tier is also the release gate: before shipping, the same journeys run as a smoke pass, answering one question — is this build fit to deploy? — in minutes.",
          ],
        },
        {
          heading: "Why Playwright in 2026",
          paragraphs: [
            "Playwright won the browser-testing decade for reasons you can feel in a week: actions auto-wait until elements are actionable, so there are no sleeps; every failure can record a trace you replay step by step; tests run in parallel workers across Chromium, Firefox and WebKit; codegen drafts a flow for you in seconds. Against Selenium's manual waits, separate WebDriver plumbing and grid maintenance, the difference is not marginal — it is the difference between a suite people run and one they route around.",
            "Discipline in locators is what keeps the suite alive: locate by role, label or test id — the things a user or an accessibility tree knows about — never by CSS class or nth-child position, which break silently when the layout shifts. Component tests with Testing Library cover the widget level; Playwright covers the journey. The two coexist happily, and confusion between them usually means a test is sitting at the wrong layer.",
          ],
        },
        {
          heading: "Trustworthy E2E is isolated and traced",
          paragraphs: [
            "Each test creates its own world: a fresh user via the API, the data it needs seeded, a browser context that starts clean. No test depends on the one before it — chains mean one failure fails everything and debugging becomes archaeology. Point the suite at a production-like environment (Playwright's webServer option starts the app for you), because the bugs this tier exists to catch — cookies, redirects, caching headers — only exist in a real composition.",
            "When a journey fails, the trace is the payoff: DOM snapshots, network traffic, console output, each step replayable in the trace viewer. A failing E2E without a trace is a morning gone; with one, it is usually five minutes. Keep the suite under ten minutes with parallel workers and CI sharding, and treat any growth past the journey budget as a design smell pushing work back down the pyramid.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Does this journey deserve the browser?",
        caption:
          "The browser tier is for journeys that are both frequent and expensive to break.",
        axes: { x: "Blast radius if it breaks", y: "How often users hit it" },
        quadrants: [
          { label: "Test below the browser", note: "frequent but cheap: unit or integration" },
          { label: "E2E must-have", note: "signup, login, checkout" },
          { label: "Skip it", note: "rare and cheap: not worth a spec" },
          { label: "One smoke journey", note: "password reset, refunds" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Locators by role and label, assertions that auto-wait — a Playwright spec reads like the user's journey.",
        code: [
          "import { test, expect } from '@playwright/test';",
          "",
          "test('new user signs up and lands on a dashboard', async ({ page }) => {",
          "  await page.goto('/signup');",
          "  await page.getByLabel('Email').fill('e2e-user@example.com');",
          "  await page.getByLabel('Password').fill('correct-horse-battery');",
          "  await page.getByRole('button', { name: 'Create account' }).click();",
          "",
          "  // Auto-waited assertions — never waitForTimeout",
          "  await expect(page).toHaveURL(/dashboard/);",
          "  await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();",
          "  await expect(page.getByTestId('project-count')).toHaveText('0');",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Waiting with page.waitForTimeout(3000) instead of conditions.",
          fix: "Use auto-waiting and expect().toBeVisible or toHaveURL. Sleeps make suites slow and still flaky under load.",
        },
        {
          mistake: "Selecting elements by CSS class or nth-child position.",
          fix: "Locate by role, label or test id. Positional selectors break silently when the layout shifts, and the failure is a mis-click, not an error.",
        },
        {
          mistake: "One giant E2E test that walks the whole app in sequence.",
          fix: "Independent journeys with fresh state each. A chain means one failure fails everything and debugging is guesswork.",
        },
        {
          mistake: "Testing pages instead of journeys.",
          fix: "Write the flow a real user takes. Page-by-page tests couple to layout and miss the cross-step wiring bugs E2E exists for.",
        },
      ],
      fieldChecklist: [
        "My E2E suite is a short list of named journeys, each independent and order-free.",
        "Every E2E failure produces a trace, screenshot or video I can replay.",
        "Locators use roles, labels and test ids — never layout-dependent selectors.",
        "There is no waitForTimeout anywhere in the suite.",
        "The E2E tier runs in CI with parallel workers and finishes in minutes, not an hour.",
        "Before release, the same journeys run as a smoke pass against a production-like environment.",
      ],
      keyTerms: [
        {
          term: "Journey",
          definition:
            "A complete user flow with business value — signup, login, checkout — the unit of E2E testing rather than the page.",
        },
        {
          term: "Auto-waiting",
          definition:
            "Playwright's behavior of retrying actions until elements are actionable, replacing fixed sleeps with conditions.",
        },
        {
          term: "Trace",
          definition:
            "A replayable recording of a failed E2E run — DOM snapshots, network, console — the difference between debugging and guessing.",
        },
        {
          term: "Smoke test",
          definition:
            "A minimal pass over the critical journeys that answers one question: is this build fit to deploy?",
        },
      ],
      interviewQuestions: [
        {
          q: "Why Playwright over Selenium for new projects?",
          a: "Speed and reliability, structurally. Auto-waiting removes the sleep-and-pray pattern that made Selenium suites flaky; traces make failures debuggable in minutes; parallel workers and multi-browser coverage are built in rather than grid infrastructure. One npm install replaces a WebDriver stack. Teams migrating usually report their E2E tier getting both faster and trusted for the first time.",
        },
        {
          q: "How many E2E tests should a product have?",
          a: "As many as there are critical journeys, and no more — usually a dozen or two: signup, login, password reset, checkout, the money path, plus one smoke journey per rare-but-dangerous flow. The number is a budget, not a score. Growth past it means work is leaking upward from cheaper tiers, and the suite will get slower and flakier without adding confidence.",
        },
        {
          q: "An E2E test fails once in ten CI runs. Walk me through your next hour.",
          a: "First, replay the trace from the failing run — most flakes identify themselves as a timing or ordering issue. Then reproduce locally with repeated runs against the same environment. I check for hidden shared state, leftover data between runs, and any sleep-based waiting. If it blocks the gate, the test quarantines immediately with an owner; the fix or the honest deletion lands within the week.",
        },
      ],
      quiz: [
        {
          question: "What is the right unit of an end-to-end test?",
          options: ["A page render", "A component", "A complete user journey", "An API endpoint"],
          answerIndex: 2,
          explanation:
            "E2E exists to catch what only appears across steps — cookies, redirects, cross-page wiring that no single page reveals. Page-level tests duplicate what cheaper tiers already cover, couple to layout, and still miss the seams where journeys actually break.",
        },
        {
          question:
            "A button is sometimes not clickable when the test reaches it. Correct fix?",
          options: [
            "Add waitForTimeout(2000) before the click",
            "Rely on auto-waiting for the actionable state",
            "Retry the whole suite until green",
            "Mark the test skip",
          ],
          answerIndex: 1,
          explanation:
            "The flake is a wait problem. Auto-waiting retries until the element is visible, enabled and stable; sleeps are a bet on timing that loses under CI load.",
        },
        {
          question: "Which locator style survives a redesign best?",
          options: [
            "CSS classes",
            "nth-child positions",
            "XPath by position",
            "Roles, labels and test ids",
          ],
          answerIndex: 3,
          explanation:
            "Roles and labels are what users and the accessibility tree depend on, so redesigns preserve them; classes and positional indexes are styling details that shift constantly.",
        },
      ],
    },
    {
      number: 5,
      title: "Mocks and Stubs",
      summary:
        "Mocks replace dependencies with controlled fakes. Powerful, but a mock that drifts from reality is a test that passes while production fails.",
      keyIdea:
        "Mocks for unit tests; contract tests for the boundary between your code and the real dependency.",
      deepDive: [
        {
          heading: "Doubles, precisely named",
          paragraphs: [
            "The vocabulary carries real information. A stub returns canned answers — you arrange it, then assert on your code's output. A mock carries expectations about how it will be called — the test fails if the interaction does not happen. A fake is a working lightweight implementation, like an in-memory repository: real behavior, none of the cost. A spy wraps a real object and records calls. People who say 'mock' for all four end up asserting interactions where they should be asserting results, which is how brittle suites get built.",
            "The rule of thumb: for queries — things that answer questions — prefer stubs and fakes, and assert on outputs. Reserve mocks for commands with side effects you cannot observe any other way: a charge sent to the payments gateway, an email handed to the sender. If the effect produces a return value or a state change you can read, assert on that instead; call counts are the weakest assertion in the toolbox.",
          ],
        },
        {
          heading: "Where mocks earn their keep",
          paragraphs: [
            "Mocks and stubs earn their place around nondeterminism and ownership. The clock, randomness, the network, and dependencies you do not own — the payments gateway, the email provider — are the legitimate territory. Vitest gives you vi.fn() and vi.useFakeTimers; MSW intercepts HTTP at the network layer with handlers that behave like the real service, shared across tests so every test sees the same realistic API. Deterministic code plus a deterministic fake is how a unit test stays a unit test.",
            "The danger has a name: drift. A mock that says the orders API returns a flat array while production moved to a paginated envelope will pass every run while the feature fails for every user. Drift is not hypothetical — APIs evolve, mocks do not, and nothing in a unit test notices. This is why the mock chapter and the contract chapter are adjacent: the contract test is the check that keeps the double honest (Chapter 6).",
          ],
        },
        {
          heading: "Keep doubles honest",
          paragraphs: [
            "Three habits keep doubles from lying. First, type them against the real client: define the double as the same interface the production client implements, so a shape change breaks compilation, not production. Second, share HTTP fakes through MSW handlers owned next to the client they imitate, not re-invented per test. Third, back every mocked boundary with something real somewhere — a contract test against the provider or an integration test against a sandbox — so drift has a place to get caught.",
            "And do not mock what you own. Your own modules are cheap to run for real; mocking them tests your mock's opinion of them. Mock boundaries you do not control, wrap third parties behind thin interfaces you do control, and keep the wrapper itself covered by the real thing in integration. A suite that follows this rule survives refactors, because it asserted behavior, not architecture.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Stub or fake, or mock or spy?",
        caption:
          "Stubs answer; mocks assert — use the one that matches how the failure would actually show up.",
        left: {
          heading: "Stub or fake",
          items: [
            "Canned answers for queries",
            "You arrange state, assert output",
            "Fakes run real logic in memory",
            "Breaks when the output contract changes",
          ],
        },
        right: {
          heading: "Mock or spy",
          items: [
            "Asserts how the dependency was called",
            "You verify interactions, not outputs",
            "Right for unobservable side effects",
            "Breaks when the interaction contract changes",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "A mock earns its place on an unobservable side effect — a charge — where the output alone proves nothing.",
        code: [
          "import { describe, expect, it, vi } from 'vitest';",
          "",
          "const payments = { charge: vi.fn() }; // the boundary we do not own",
          "async function checkout(items: { priceCents: number }[]) {",
          "  const total = items.reduce((sum, i) => sum + i.priceCents, 0);",
          "  if (total <= 0) return { charged: false };",
          "  await payments.charge({ cents: total });",
          "  return { charged: true };",
          "}",
          "",
          "describe('checkout', () => {",
          "  it('charges exactly once for a paid cart', async () => {",
          "    await checkout([{ priceCents: 2500 }]);",
          "    expect(payments.charge).toHaveBeenCalledTimes(1);",
          "  });",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Mocking every dependency by default, including your own modules.",
          fix: "Mock boundaries you do not own and nondeterminism only. Over-mocked suites verify your mocks and block refactors.",
        },
        {
          mistake: "Letting mocks drift from the real dependency's behavior.",
          fix: "Type doubles against the real client and back them with contract tests (Chapter 6). A drifted mock is a lie that ships.",
        },
        {
          mistake: "Asserting mock call counts where an output assertion exists.",
          fix: "Assert outputs first; interactions only when the effect is otherwise invisible, like a charge or an email.",
        },
        {
          mistake: "Hand-rolling a mock of a complex third-party client.",
          fix: "Use MSW handlers or a published fake. A half-accurate homemade double tests a service that does not exist.",
        },
      ],
      fieldChecklist: [
        "I can say whether each double in my suite is a stub, fake, spy or mock — and why it is the right species.",
        "Mocks exist only at boundaries I do not own or that are nondeterministic.",
        "HTTP doubles live in MSW handlers shared across tests, not ad hoc per test.",
        "Doubles are typed against the real client interfaces, so shape changes fail compilation.",
        "Every mocked boundary is backed by a contract or integration test against something real.",
        "A refactor that changes no behavior does not break my mocks.",
      ],
      keyTerms: [
        {
          term: "Stub",
          definition:
            "A double returning canned answers for calls; you arrange it, then assert on your code's output.",
        },
        {
          term: "Mock",
          definition:
            "A double with expectations about how it will be called; the test fails if the expected interaction does not happen.",
        },
        {
          term: "Fake",
          definition:
            "A working lightweight implementation of a dependency, like an in-memory repository — real behavior, none of the cost.",
        },
        {
          term: "MSW (Mock Service Worker)",
          definition:
            "A library that intercepts HTTP at the network layer with reusable handlers, so every test sees the same realistic API.",
        },
      ],
      interviewQuestions: [
        {
          q: "What is the difference between a stub, a fake and a mock?",
          a: "A stub returns canned answers — you arrange it and assert on your code's output. A fake is a working lightweight implementation, like an in-memory repository, with real behavior. A mock carries expectations about interactions and fails when they do not happen. The practical consequence: queries deserve stubs and fakes with output assertions; only unobservable side effects justify interaction mocks.",
        },
        {
          q: "How do you stop mocks from lying about the real service?",
          a: "Three layers of defense. Type doubles against the real client interface so shape changes break compilation. Share HTTP fakes through MSW handlers owned next to the client they imitate. And back the boundary with a contract test that verifies expectations against the actual provider in CI — that last check is what catches drift the moment the other team changes something.",
        },
        {
          q: "When would you refuse to mock?",
          a: "When the dependency is mine and cheap: my own modules, my pure functions, my repository against a containerized Postgres in an integration tier. Mocking what you own tests your mock's opinion of your code. I also refuse to mock a database inside integration tests — testcontainers made the real engine cheap, and the fake would hide exactly the bugs the tier exists to catch.",
        },
      ],
      quiz: [
        {
          question:
            "You need a dependency that returns canned user records for a query. Best species of double?",
          options: [
            "A mock with call expectations",
            "A stub or in-memory fake",
            "A real staging service",
            "A spy wrapping production",
          ],
          answerIndex: 1,
          explanation:
            "Queries deserve arranged answers and output assertions, which read cleanly and survive refactors. Interaction expectations add brittleness without adding information whenever the result itself is observable — assert what came back, not how the dependency was tickled.",
        },
        {
          question:
            "A mock says the API returns a flat array; production now returns a paginated envelope. What failed?",
          options: [
            "The unit under test has a logic bug",
            "The test framework misreported results",
            "The mock drifted from reality — a contract test was missing",
            "Nothing; both shapes are correct",
          ],
          answerIndex: 2,
          explanation:
            "This is drift: the double froze an old contract while reality moved. The fix is a verified contract at the boundary so the provider's change breaks CI, not users.",
        },
        {
          question: "Which dependency is the best candidate for mocking in a unit test?",
          options: [
            "The system clock and the payments gateway",
            "A pure pricing function in the same module",
            "Your own repository class",
            "The database, in an integration suite",
          ],
          answerIndex: 0,
          explanation:
            "Nondeterminism and ownership are the criteria: the clock is nondeterministic, the gateway is external. Your own functions and repositories are cheap to run for real.",
        },
      ],
    },
    {
      number: 6,
      title: "Contract Testing",
      summary:
        "When service A calls service B, both sides agree on a contract. Contract tests verify each side independently against the shared contract.",
      keyIdea:
        "Pact-style consumer-driven contracts. Eliminates the integration test that requires both services running.",
      deepDive: [
        {
          heading: "The problem contracts solve",
          paragraphs: [
            "When service A calls service B, the naive options are both bad: an integration test that needs both services running — slow, orchestration-heavy, flaky at the seams — or A stubbing B entirely, which is Chapter 5's drift problem, now between teams. A contract is the third option: a machine-checkable description of the requests A will make and the responses B promises, which each side verifies independently. Neither service needs the other running; the contract does the meeting.",
            "Consumer-driven contracts, Pact's model, put ownership with the party that has the requirements: the consumer writes tests against a mock of the provider, and those tests generate a pact file — concrete interactions, each with a given state and an expected response. The provider's CI replays every interaction against its real implementation. If the provider changes something the consumer depends on, the provider's build goes red before deploy, not after a customer page.",
          ],
        },
        {
          heading: "How a pact flows",
          paragraphs: [
            "The loop has five stations: the consumer test produces the pact; a broker stores and versions it per consumer-provider pair; the provider's CI verifies each interaction against real code, with failures naming the exact mismatched field; deploys are gated with broker checks like can-i-deploy; and both sides evolve contracts deliberately, with versioned provider states. The broker becomes the shared memory between teams — who depends on what, and when it last held.",
            "You do not need Pact to get the essential move: one artifact both sides check against. Schema-first APIs with OpenAPI, generated client types, and schema validation in CI give the same property — drift caught at build time by whichever side caused it. What you cannot skip is verification: a contract nobody re-runs is a stale mock with a file extension, and it will drift exactly like one.",
          ],
        },
        {
          heading: "Where contracts apply",
          paragraphs: [
            "Contracts are for boundaries between deployables and teams: your frontend against your BFF, service against service, your backend against a vendor API whose behavior you must predict. They are overhead inside a single repository, where shared TypeScript types already give compile-time truth and a refactor touches both sides atomically. Draw the line at the deployment boundary: if two sides can ship independently, they need a contract; if they ship together, types suffice.",
            "Keep provider states honest. A contract verified against 'order 42 exists' proves nothing if no code path can produce order 42 in the environments that matter. Provider states are code — version them, review them, and make them realistic. And treat a failing contract as what it is: the cheapest possible detection of a breaking change, caught while it is still a pull request instead of an incident.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The contract loop",
        caption:
          "Consumer and provider never meet in a test environment — the contract does the meeting.",
        steps: [
          { label: "Consumer writes test", note: "against a mock of the provider" },
          { label: "Pact generated", note: "requests and expected responses" },
          { label: "Broker stores pact", note: "versioned, per team pair" },
          { label: "Provider verifies", note: "replays against real code" },
          { label: "Deploy gated", note: "can-i-deploy before release" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The consumer test writes the contract; the provider's CI verifies it against real code — both sides, independently.",
        code: [
          "import { PactV3, MatchersV3 } from '@pact-foundation/pact-v3';",
          "import { expect, it } from 'vitest';",
          "import { getOrder } from './ordersClient';",
          "",
          "it('web consumes orders: fetch order 42', async () => {",
          "  const { like } = MatchersV3;",
          "  await new PactV3({ consumer: 'web', provider: 'orders' })",
          "    .given('order 42 exists')",
          "    .uponReceiving('a request for order 42')",
          "    .withRequest({ method: 'GET', path: '/orders/42' })",
          "    .willRespondWith({ status: 200, body: like({ id: 42, totalCents: 2500 }) })",
          "    .executeTest(async (mock) => {",
          "      expect((await getOrder(mock.baseUrl, 42)).totalCents).toBe(2500);",
          "    });",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating a pact as documentation nobody re-verifies.",
          fix: "Provider verification must run in CI on every change. An unverified contract is a stale mock with extra steps.",
        },
        {
          mistake: "Contract testing internal function boundaries inside one repo.",
          fix: "Contracts are for boundaries between deployables; inside one repo, shared types give compile-time truth at zero runtime cost.",
        },
        {
          mistake: "Writing provider states that never occur in production.",
          fix: "Keep given states realistic and versioned. A contract verified against a fantasy state proves nothing about the real path.",
        },
        {
          mistake: "Shipping a provider change that breaks a consumer.",
          fix: "Gate deploys with broker status checks like can-i-deploy. Green unit tests do not excuse a broken contract.",
        },
      ],
      fieldChecklist: [
        "Every service-to-service boundary my team owns has a contract artifact both sides verify.",
        "Provider verification runs in CI, and a failing contract blocks the merge or deploy.",
        "Consumer tests generate contracts automatically; nobody hand-writes pact JSON.",
        "I can name the broker (or equivalent) and the last time a contract caught a real break.",
        "Provider states are realistic, versioned and reviewed like production data.",
        "Internal module boundaries rely on shared types, not heavyweight contract machinery.",
      ],
      keyTerms: [
        {
          term: "Consumer-driven contract",
          definition:
            "A contract written from the consumer's expectations and verified by the provider — Pact's core model.",
        },
        {
          term: "Pact",
          definition:
            "The dominant contract-testing tool family: consumer tests emit pact files that provider CI replays against real code.",
        },
        {
          term: "Pact broker",
          definition:
            "The service storing and versioning contracts, gating deploys with checks like can-i-deploy.",
        },
        {
          term: "Provider state",
          definition:
            "The precondition a contract assumes before an interaction, such as order 42 exists — kept realistic or the contract proves nothing.",
        },
      ],
      interviewQuestions: [
        {
          q: "What problem does contract testing solve that integration testing does not?",
          a: "Coupling and cost. A cross-service integration test needs both deployables running, orchestrated, in the same environment — slow and flaky at the seams. A contract lets each side verify independently: the consumer against a generated mock, the provider against real code, the broker as referee. Drift between teams is caught in whichever CI caused it, hours or days before any integrated environment would have seen it.",
        },
        {
          q: "How would you introduce contract testing between two teams?",
          a: "Start with the most broken boundary — the one with the last cross-team incident. The consumer team writes the first pact from real usage, the broker goes up, and the provider adds verification as a required check. Keep the first contract narrow, prove it catches one real change, then expand. The organizational win is that breaking changes now surface as red builds in the breaking team's pipeline.",
        },
        {
          q: "A provider deploy broke a consumer but all provider tests were green. What was missing?",
          a: "Verification against the consumer's contract. Green provider tests only prove the provider agrees with itself. Either provider-side contract verification was not a required check, or the deploy skipped the broker's can-i-deploy gate. The fix is mechanical: replay the pacts in provider CI and gate the deploy on broker status, so the consumer's expectations are part of the provider's own definition of green.",
        },
      ],
      quiz: [
        {
          question: "In consumer-driven contract testing, who writes the contract first?",
          options: [
            "The provider team",
            "The consumer, via tests against a mock of the provider",
            "A central architecture board",
            "The broker, generated from traffic logs",
          ],
          answerIndex: 1,
          explanation:
            "Consumer-driven means the party with the requirements encodes them as executable tests against a mock; running those tests emits the pact file the provider must later verify against real code.",
        },
        {
          question: "What does the provider side do with a pact file?",
          options: [
            "Replays each interaction against the real service in CI",
            "Displays it in a dashboard for reference",
            "Converts it to an OpenAPI document",
            "Archives it for audit purposes only",
          ],
          answerIndex: 0,
          explanation:
            "Verification is the whole point: each recorded interaction is replayed against real provider code in CI, and a mismatch fails the provider's build before any deploy can ship the break to consumers.",
        },
        {
          question: "Which boundary is a poor fit for contract testing?",
          options: [
            "Your checkout service calls the payments service",
            "A mobile app calls your public API",
            "Two modules inside one TypeScript repository",
            "Your service calls a vendor's shipping API",
          ],
          answerIndex: 2,
          explanation:
            "Modules in one repo ship together and share TypeScript types, so compile-time truth is free and atomic. Contracts earn their cost only across independently deployable boundaries, where neither side can see the other's build.",
        },
      ],
    },
    {
      number: 7,
      title: "Coverage That Means Something",
      summary:
        "100% coverage is a vanity metric. The valuable question is: do the tests cover the risky paths — the auth checks, the money math, the edge cases?",
      keyIdea:
        "Track coverage on the critical paths separately. 80% overall with 100% on auth beats 95% overall with 60% on auth.",
      deepDive: [
        {
          heading: "The vanity metric problem",
          paragraphs: [
            "Coverage measures execution, not verification. A test that calls a function and asserts nothing produces line coverage; a tautological test — expect(result).toEqual(result) — produces coverage; a suite generated to touch every line produces a green dashboard over an unguarded codebase. The number can reach one hundred percent while the suite would pass with every branch inverted. Coverage is evidence that code ran under test, and nothing more than that.",
            "Once a coverage number becomes a target, Goodhart's law does the rest: engineers write assertion-free tests, exclude the hard files, or generate tests aimed at the implementation rather than the behavior. The metric goes up; protection does not. This is not an argument against measuring coverage — it is an argument against believing a single aggregate number can summarize something as uneven as risk across a codebase.",
          ],
        },
        {
          heading: "Risk-weighted coverage",
          paragraphs: [
            "Lines are not equal. The auth check, the money math, the permission boundary, the migration — a bug there is an incident; a bug in a config loader is a Tuesday annoyance. The valuable question is not 'how much is covered' but 'are the risky paths covered' — and that means tracking coverage on critical paths separately, with thresholds enforced in CI per path rather than one global bar that everything hides behind.",
            "The chapter's rule in one line: eighty percent overall with one hundred percent on auth beats ninety-five percent overall with sixty percent on auth. Vitest makes the policy executable — per-glob thresholds in the coverage config, strict for src/money and src/auth, relaxed elsewhere. Add diff coverage on pull requests so changed lines must be tested, and legacy debt stops being an excuse for new debt.",
          ],
        },
        {
          heading: "A map, not a score",
          paragraphs: [
            "Coverage's honest use is diagnostic: open the report, look at what is uncovered in the files that matter, and let that decide the next hour of testing. The stronger instrument is mutation testing — Stryker in the TypeScript world: it mutates your logic, flips a comparison, drops an increment, and checks the suite fails. A mutant that survives is a test that asserts too little. Mutation on one critical module teaches more about suite quality than a year of coverage dashboards.",
            "Ratchet, do not leap: require coverage on changed lines in every pull request, hold critical paths at their bar, and let the aggregate number drift where it does not matter — the ratchet means debt shrinks or stays flat, never grows. When someone proposes 'one hundred percent everywhere', ask what the assertion-free tests that follow will be protecting. The answer is nothing, which is exactly what the metric was measuring before the push — a number moving while the risk stayed still.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where does the next test hour go?",
        caption:
          "Coverage is spent, not collected — aim the next hour at the lines that can lose money.",
        start: "One testing hour to spend",
        branches: [
          {
            label: "Auth, money or permissions?",
            outcome: "Test to exhaustion — 100% is the floor",
            good: true,
          },
          {
            label: "Core API-level user flow?",
            outcome: "Integration test with a real engine",
            good: true,
          },
          {
            label: "Glue, config, generated code?",
            outcome: "Skip — coverage here is noise",
            good: true,
          },
          {
            label: "Chasing the overall percentage",
            outcome: "Assertion-free tests, zero protection",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Thresholds per critical path, not one global vanity number — the config is the policy.",
        code: [
          "import { defineConfig } from 'vitest/config';",
          "",
          "export default defineConfig({",
          "  test: {",
          "    coverage: {",
          "      provider: 'v8',",
          "      thresholds: {",
          "        lines: 80,",
          "        branches: 75,",
          "        // critical paths held to a higher bar",
          "        'src/money/**': { lines: 100, branches: 100 },",
          "        'src/auth/**': { lines: 100, branches: 100 },",
          "      },",
          "    },",
          "  },",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Chasing 100% overall coverage as a team goal.",
          fix: "Hold critical paths near 100% and let glue be uncovered. The percentage is a map for the next test, not a score.",
        },
        {
          mistake: "Writing assertion-free tests to tick uncovered lines.",
          fix: "Every test asserts an observable result. Coverage without verification is theater with a green dashboard.",
        },
        {
          mistake: "One global threshold for a codebase of unequal risk.",
          fix: "Per-glob thresholds in the coverage config: strict for money and auth, relaxed elsewhere, diff coverage on pull requests.",
        },
        {
          mistake: "Measuring only line coverage on branch-heavy logic.",
          fix: "Track branch coverage too — the if nobody takes is exactly where incidents live. Mutation testing goes further still.",
        },
      ],
      fieldChecklist: [
        "I can name the five most dangerous files in this repo and their coverage from memory.",
        "Coverage thresholds are enforced per critical path in CI, not just reported.",
        "No test in the suite runs code without asserting on a result.",
        "I read the uncovered-lines view to decide what to test next, not just the total.",
        "Changed-line (diff) coverage is required on every pull request.",
        "I have run mutation testing on one critical module and fixed what it exposed.",
      ],
      keyTerms: [
        {
          term: "Line coverage",
          definition:
            "The share of executed lines; the weakest form of the metric because running code is not the same as verifying it.",
        },
        {
          term: "Branch coverage",
          definition:
            "The share of decision outcomes taken; catches the untested if that line coverage never sees.",
        },
        {
          term: "Mutation testing",
          definition:
            "Automatically mutating logic and checking the suite fails — the strongest available measure of test quality (Stryker in TypeScript).",
        },
        {
          term: "Diff coverage",
          definition:
            "Coverage computed on changed lines only; ratchets quality forward without being hostage to legacy debt.",
        },
      ],
      interviewQuestions: [
        {
          q: "Is 100% coverage a good goal?",
          a: "Not as an aggregate. Coverage verifies execution, not behavior, so the last points are usually bought with assertion-free tests of glue code. What I commit to instead: near-total coverage on critical paths — auth, money, permissions — enforced with per-path thresholds, plus diff coverage so new code arrives tested. That suite protects the lines that can cause incidents instead of flattering a dashboard.",
        },
        {
          q: "How do you measure whether tests are any good, beyond coverage?",
          a: "Mutation testing first: Stryker mutates the logic and a surviving mutant names a weak test. Then the failure review — when tests break, do they break for reasons that matter? And the refactor check: behavior-preserving changes should not break the suite, implementation-coupled ones do. A suite that survives mutations, fails meaningfully, and refactors cleanly is good regardless of its coverage number.",
        },
        {
          q: "How do you raise coverage on a legacy codebase without stalling delivery?",
          a: "Ratchet with diff coverage: every pull request must test its changed lines, so the number climbs as the code churns without a heroic backfill project. Prioritize critical paths first — money and auth — with per-glob thresholds. And let bug fixes drag tests with them: each defect arrives with its regression test, which is exactly where the next unit of coverage buys the most risk reduction.",
        },
      ],
      quiz: [
        {
          question: "Which scenario proves coverage can lie?",
          options: [
            "A test asserting every branch of the money math",
            "A test that executes a function and asserts nothing",
            "An integration test against real Postgres",
            "A mutation-tested pricing module",
          ],
          answerIndex: 1,
          explanation:
            "Execution without verification still counts as covered. That is the gap between coverage and protection — and why the metric must be read as evidence, not assurance.",
        },
        {
          question: "Per this chapter, which is the better suite?",
          options: [
            "95% overall, 60% on auth",
            "100% overall, generated tests",
            "70% overall, no thresholds",
            "80% overall, 100% on auth",
          ],
          answerIndex: 3,
          explanation:
            "Risk is uneven, so protection must be too. Near-total coverage on the paths that cause incidents — auth, money, permissions — beats a flattering aggregate number sitting on top of a soft auth tier.",
        },
        {
          question: "What does mutation testing tell you that line coverage cannot?",
          options: [
            "Whether the suite actually detects changed behavior",
            "Which files are the largest",
            "How fast the tests run",
            "Which lines are commented out",
          ],
          answerIndex: 0,
          explanation:
            "A surviving mutant means the suite ran the mutated code and stayed green — direct proof of assertion-free coverage. A line-coverage report can never make that distinction, because running code was its only bar.",
        },
      ],
    },
    {
      number: 8,
      title: "TDD and When It Helps",
      summary:
        "Test-Driven Development: write the test, watch it fail, write the code, watch it pass, refactor. Discipline that designs interfaces before implementations.",
      keyIdea:
        "TDD shines for new features with clear specs. It is not a religion — exploratory code can be written first, tests added after.",
      deepDive: [
        {
          heading: "The loop, taken literally",
          paragraphs: [
            "Red-green-refactor is three moves, in order, in minutes. Red: write the smallest test that expresses the next behavior and watch it fail — the failure is information, because a test never seen failing may be testing nothing. Green: write the least code that passes, and resist perfecting it. Refactor: with tests green, clean names, remove duplication, improve the shape; the suite catches any slip. Then commit. Each cycle leaves the tree green and the behavior list one item longer.",
            "The design payoff is the part people underrate. Writing the test first forces you to call the API as its first consumer: the name, the parameters and the result shape get decided from the outside, before an implementation exists to defend its own choices. The result is usually smaller interfaces, fewer awkward parameters, and error paths specified on purpose instead of discovered in production. The tests are a byproduct; the design is the product.",
          ],
        },
        {
          heading: "Where TDD shines",
          paragraphs: [
            "TDD pays where the spec is clear and behavior is enumerable: validators, parsers, pricing rules, state machines, permission logic — the classic territory where you can list the cases on a whiteboard and each case becomes one red test. The loop converts ambiguity into concrete questions ('what should happen to a negative subtotal?') answered one at a time, and the finished suite is a specification that runs, which onboarding engineers read before they read the implementation.",
            "Bug fixes are TDD's other home turf: the failing test that reproduces the bug is the red step, arrived at honestly. Write it, watch it fail against the buggy code, fix, watch it green, and keep the test forever as the regression guard (Chapter 9). If a team adopts only one TDD-flavored habit, make it this one — it is the highest-value test written anywhere in the codebase, and it starts from real pain rather than ceremony.",
          ],
        },
        {
          heading: "Where it does not — and the hybrid",
          paragraphs: [
            "TDD struggles where discovery precedes specification: exploratory spikes, unfamiliar libraries, UI layout, data shapes you are still learning. Writing tests first there means testing guesses, and the churn erases the value. The honest sequence is spike, learn, then pin: throw away the exploration code if you like, keep the knowledge, and write the tests that specify what you learned before hardening the real implementation.",
            "So it is not a religion. The discipline that transfers everywhere is this: no behavior change ships without a test that fails without it. Whether that test precedes the code by five minutes (new, specifiable behavior) or by a day (after the spike) is judgment. What never happens is the code that lands with tests retro-fitted to pass — those tests describe the implementation, not the behavior, and they protect nothing.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The TDD loop",
        caption:
          "The failure is the point: a test you have watched fail is a test you can trust.",
        steps: [
          { label: "Red", note: "smallest failing test, watched" },
          { label: "Green", note: "the least code that passes" },
          { label: "Refactor", note: "clean up, tests stay green" },
          { label: "Commit", note: "small steps, always shippable" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The red step names the behavior and the result shape before any implementation defends its own choices.",
        code: [
          "// RED — written before validatePassword exists; watch it fail",
          "import { describe, expect, it } from 'vitest';",
          "import { validatePassword } from './password';",
          "",
          "describe('validatePassword', () => {",
          "  it('rejects under 12 characters', () => {",
          "    expect(validatePassword('short')).toMatchObject({",
          "      ok: false,",
          "      reason: 'too-short',",
          "    });",
          "  });",
          "",
          "  it('accepts a long passphrase containing a digit', () => {",
          "    expect(validatePassword('correct-horse-7')).toMatchObject({ ok: true });",
          "  });",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Writing all the tests up front, then all the code after.",
          fix: "TDD is a loop, not a phase — one behavior at a time, red to green in minutes, with a commit at each green.",
        },
        {
          mistake: "Skipping the red step because the test 'obviously fails'.",
          fix: "Watch every new test fail once. A test never seen failing may be asserting nothing, and you will not know until an incident.",
        },
        {
          mistake: "TDD-ing a UI spike or an exploratory prototype.",
          fix: "Spike first to learn, then pin behavior with tests. TDD is for specifiable behavior, not open-ended discovery.",
        },
        {
          mistake: "Writing giant tests for whole features in one sweep.",
          fix: "Smallest failing test next. Big-bang tests hide which behavior broke and turn the loop from minutes into hours.",
        },
      ],
      fieldChecklist: [
        "I have watched every new test fail before writing the code that passes it.",
        "My red-green-refactor cycles land in minutes, with a commit at each green.",
        "Tests written first drove at least one interface change I would not have chosen otherwise.",
        "I spike before testing when the design is genuinely unknown — and pin behavior afterward.",
        "Bug fixes start from a failing test that reproduces the bug.",
        "The suite stays green between cycles; I never commit red.",
      ],
      keyTerms: [
        {
          term: "Red-green-refactor",
          definition:
            "The TDD loop: a failing test first, minimal code to pass, then cleanup with the tests as a safety net.",
        },
        {
          term: "Test-first design",
          definition:
            "Letting the test call the API before it exists, so names and shapes are designed from the consumer's side.",
        },
        {
          term: "Spike",
          definition:
            "A throwaway exploration to answer a design question — legitimate, and usually followed by tests pinning what was learned.",
        },
        {
          term: "Behavior specification",
          definition:
            "A test named as a claim about the system ('rejects under 12 characters') rather than a description of the code.",
        },
      ],
      interviewQuestions: [
        {
          q: "When does TDD pay off, and when does it not?",
          a: "It pays where the spec is clear and behavior is enumerable: validators, parsers, pricing rules, state machines — and it pays double on bug fixes, where the failing test is the reproduction. It struggles on discovery work: spikes, unfamiliar libraries, UI layout, unknown data shapes, where tests-first means testing guesses. The hybrid is honest: spike to learn, then pin what you learned with tests before hardening.",
        },
        {
          q: "Walk me through your TDD loop on a recent feature.",
          a: "I take the next behavior — say, 'rejects a password under 12 characters' — and write exactly that test, importing a function that does not exist. Red. Then the least code that passes: a length check returning a shaped result. Green. Then refactor names and structure while the suite stays green, and commit. The next behavior starts the next cycle; the interface emerged from being called, not from being planned.",
        },
        {
          q: "Is TDD about tests or about design?",
          a: "Both, but the design is the product. Tests-first forces you to call the API as its first consumer, so names, parameters and error shapes get decided from the outside. The suite that falls out is a specification that runs — which matters — but the lasting value is interfaces that fit their callers and error paths specified on purpose instead of discovered in production.",
        },
      ],
      quiz: [
        {
          question: "In TDD, why must you watch the test fail first?",
          options: [
            "To prove the test can fail and is actually testing something",
            "To warm up the test runner",
            "To generate a coverage report",
            "Because CI requires it",
          ],
          answerIndex: 0,
          explanation:
            "A test never seen failing may pass for the wrong reason or assert nothing. The red step is the cheap verification that the test itself works.",
        },
        {
          question: "Which task fits test-first development best?",
          options: [
            "Exploratory data analysis on an unknown dataset",
            "A pricing rules engine with a written spec",
            "A one-off UI layout experiment",
            "Renaming internal variables",
          ],
          answerIndex: 1,
          explanation:
            "Clear, enumerable behavior is TDD territory: each case on the whiteboard becomes one red test in the loop. Discovery work is different — it wants a spike to learn first, tests to pin afterward.",
        },
        {
          question: "What is the healthiest stance toward TDD?",
          options: [
            "All code must be written test-first, always",
            "Tests are a post-release activity",
            "TDD where specs are clear, spike-then-pin where they are not — but nothing ships untested",
            "TDD only applies to frontend code",
          ],
          answerIndex: 2,
          explanation:
            "The transferable rule is that no behavior change ships without a test that fails without it; the ordering is judgment, the guarantee is not optional.",
        },
      ],
    },
    {
      number: 9,
      title: "Regression Tests",
      summary:
        "Every bug fix ships with a test that would have caught it. The regression suite is your 'this never happens again' memory.",
      keyIdea:
        "A bug that recurs is a finding: the regression test was missing, weak, or skipped in CI.",
      deepDive: [
        {
          heading: "Every fix ships with a test",
          paragraphs: [
            "The discipline is small and non-negotiable: a bug arrives, you reduce it to the smallest reliable reproduction, you write the test that fails against the current code, you fix, the test goes green, and it joins the suite permanently. The suite becomes the codebase's memory of every way it has ever broken — 'this never happens again' made executable. A fix shipped without its test is a rumor: maybe it works, maybe it returns with the next refactor.",
            "The reason this compounds is that systems regress exactly when memory fades: the engineer who fixed the leap-day cron has moved on, the comment was deleted, and someone changes the scheduler. The regression test does not remember the incident — it enforces it. Years in, the suite reads like the product's medical history, and new engineers learn the real failure modes from test names rather than folklore.",
          ],
        },
        {
          heading: "The suite is a map of scars",
          paragraphs: [
            "Look at a mature regression suite and you will see the product's biography: the timezone that double-billed, the unicode surname that broke the export, the refund of a negative amount, the race between two logins. Each test earned its place by breaking someone's day once. This is why deleting regression tests should require the same ceremony as deleting database columns — you are erasing a documented failure the system is sworn against repeating.",
            "A recurring bug is a finding, not bad luck. When the same defect class returns, one of three things failed: the regression test was never written, it was written weakly and did not pin the exact condition, or it was skipped or quarantined in CI. The postmortem question is not just 'why did the bug happen' but 'why did the guard fail' — and the answer is usually a process gap, not a clever bug.",
          ],
        },
        {
          heading: "Write regressions that hold",
          paragraphs: [
            "Weak regression tests share one flaw: they approximate. 'Fails on big files sometimes' protects nothing; 'fails on a 10,001-row CSV whose final row lacks a trailing newline' catches it every time. Minimize until the test is one case with pinned inputs — the exact date, the exact string, the exact config — and assert the exact observable outcome. Vagueness is where repeat offenders come from.",
            "Place the test at the lowest layer that reproduces the bug — Chapter 1's push-down rule — and name it after the behavior and the ticket: 'prevents refunding negative amounts (GH-1042)'. The name is documentation for the next engineer who touches the refund logic: it tells them what they may not break and why. The suite's readability is part of its protective power, not a nice-to-have.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The regression discipline",
        caption:
          "A bug fix without a test is a rumor; with one, it is a permanently closed door.",
        steps: [
          { label: "Reproduce", note: "smallest reliable case" },
          { label: "Red test", note: "pins the exact bug" },
          { label: "Fix", note: "minimal, no scope creep" },
          { label: "Green and review", note: "test joins the suite" },
          { label: "Never again", note: "CI guards it forever" },
        ],
      },
      pitfalls: [
        {
          mistake: "Fixing the bug and shipping without a test.",
          fix: "No red test, no fix. The reproduction test is the receipt proving the bug is actually gone.",
        },
        {
          mistake: "A regression test too vague to fail reliably.",
          fix: "Minimize to the exact input, date or state, and pin the precise condition that broke.",
        },
        {
          mistake: "Test names like 'regression test 3'.",
          fix: "Name by behavior and ticket: 'prevents negative-amount refunds (GH-1042)'. Future readers must know what they protect.",
        },
        {
          mistake: "Skipping flaky regression tests instead of fixing them.",
          fix: "A skipped regression is an open wound. Quarantine briefly with an owner, and fix within the week (Chapter 13).",
        },
      ],
      fieldChecklist: [
        "Every bug I fixed this month shipped with a test that failed first.",
        "I can search the suite by ticket id and find the scar for any past incident.",
        "Regression tests pin exact conditions — dates, inputs, config — not approximations.",
        "New teammates can read the regression suite as a history of how this system breaks.",
        "Recurring bugs trigger a question about the missing or weak test, not just the code.",
        "Regression coverage sits at the lowest layer that can catch each bug.",
      ],
      keyTerms: [
        {
          term: "Regression test",
          definition:
            "A test written from a past bug, kept forever, that fails if the bug ever returns.",
        },
        {
          term: "Reproduction case",
          definition:
            "The smallest reliable input and state that triggers the bug — the raw material of a good regression test.",
        },
        {
          term: "Blameless postmortem",
          definition:
            "An incident review focused on system causes rather than culprits — where the question 'which test was missing' gets answered.",
        },
        {
          term: "Characterization test",
          definition:
            "A test that pins existing behavior before refactoring risky code — a cousin of the regression test aimed at the present instead of the past.",
        },
      ],
      interviewQuestions: [
        {
          q: "What is your process when a bug arrives in production?",
          a: "Reduce it to the smallest reliable reproduction first — that alone often reveals the cause. Then write the test that fails against current code, fix minimally, watch it green, and keep the test forever, named with the behavior and ticket. In the postmortem, the extra question: which guard was missing, weak or skipped, and what closes that gap so the next defect class does not repeat it.",
        },
        {
          q: "A bug you fixed last year just recurred. What does that tell you?",
          a: "That the safety net had a hole. Either the regression test never existed, it was too vague to pin the exact condition, or it was skipped, quarantined or deleted. I treat the recurrence as a process finding, not bad luck: audit the guards for the whole defect class, not just this instance, because the same gap usually exposes neighbors.",
        },
        {
          q: "How do you keep a regression suite from becoming bloated?",
          a: "Push tests down layers — a bug reproducible at the unit level should not occupy a browser test. Consolidate duplicates that pin the same behavior from different incidents. Keep names tied to behavior and tickets so review can judge relevance. Deletion is fine when a behavior disappears from the product entirely; the suite mirrors what the system currently promises, not its whole history.",
        },
      ],
      quiz: [
        {
          question: "What is the non-negotiable companion to every bug fix?",
          options: [
            "A postmortem document",
            "A new monitoring alert",
            "A test that failed before the fix",
            "A version bump",
          ],
          answerIndex: 2,
          explanation:
            "The red-to-green test is the receipt: it proves the reproduction, drives the fix, and stands guard forever. Alerts and postmortems complement it but replace nothing.",
        },
        {
          question: "A bug fixed six months ago just recurred. Most likely cause?",
          options: [
            "The original fix was wrong",
            "The regression test was missing, weak or skipped in CI",
            "Users changed behavior",
            "The framework needs a security patch",
          ],
          answerIndex: 1,
          explanation:
            "Recurrence means the guard failed, and there are exactly three ways: never written, written weakly, or not actually running in CI. Each has a different process fix.",
        },
        {
          question: "What makes a regression test trustworthy?",
          options: [
            "It pins the exact reproduced condition and has been seen failing",
            "It runs fast",
            "It covers many features at once",
            "It is named after the engineer who fixed it",
          ],
          answerIndex: 0,
          explanation:
            "Precision plus observed failure is the pair: exact conditions make it fail reliably, and having watched it fail proves it can. Breadth and speed are secondary virtues.",
        },
      ],
    },
    {
      number: 10,
      title: "CI Gating",
      summary:
        "Tests are worthless if a red build can ship. CI gating makes the test suite a release gate, not a suggestion.",
      keyIdea:
        "Main branch is always deployable. A failing test blocks merge. Pull requests require green CI.",
      deepDive: [
        {
          heading: "Main is always deployable",
          paragraphs: [
            "CI gating is the set of rules that turns a test suite from a suggestion into a gate: every pull request requires green checks to merge, a failing test blocks merge, and main is deployable at any commit. The rules are enforced by the platform — branch protection with required status checks — not by policy documents, because policies erode exactly when deadlines arrive. 'Just this once' merges are how red main becomes a way of life within a quarter.",
            "Two rules keep the gate meaningful. First, red main is an incident: the team stops merging and reverts or fixes immediately, because every commit stacked on red is compounding risk. Second, the required checks must be few and meaningful — forty noisy checks train people to ignore them, and then the one check that mattered gets ignored too. Gate on what blocks a deploy; report the rest as optional signals.",
          ],
        },
        {
          heading: "Stage the pipeline cheap to expensive",
          paragraphs: [
            "Order stages so the cheapest checks fail first: lint and typecheck in seconds, unit tests in seconds more, integration against containers in tens of seconds, build, then E2E last. Most failures are caught at the cheap stages, so most failures cost minutes instead of the full run. Paying for eight minutes of browser tests to learn about a missing semicolon is how pipelines earn a reputation for wasting everyone's time.",
            "Then buy speed deliberately: cache dependencies and Docker layers, share build artifacts between stages instead of rebuilding, shard the E2E tier across parallel workers. Target a full pipeline around ten to fifteen minutes; past that, engineers start batching merges and the gate's feedback loop degrades for everyone at once. Pipeline duration is a feature you maintain, not a fixed cost you accept forever.",
          ],
        },
        {
          heading: "Gate hygiene",
          paragraphs: [
            "Flaky tests are how gates die: a check that fails randomly trains people to click re-run and merge anyway, and soon every failure is suspect. Quarantine suspects where they cannot block (Chapter 13), allow retries only with tracking, and keep the required checks deterministic. A gate you sometimes ignore is a gate you have already removed, whatever the dashboard claims. Guard the gate's own integrity the way you guard main — it is the same trust, mechanized.",
            "Coverage and regression discipline live here too: require diff coverage on changed lines, and let the required checks include the tiers that catch real deploy blockers — unit, integration, the E2E smoke. What the gate must never include is busywork: format checks belong in pre-commit hooks, generated reports belong in artifacts. Every required check should be one a reviewer would have asked about anyway.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The merge gate",
        caption:
          "Fail fast, pay for expensive stages only after cheap ones pass — and nothing merges on red.",
        stages: [
          { label: "Lint + types", note: "seconds, cheapest checks" },
          { label: "Unit", note: "pure logic, every push" },
          { label: "Integration", note: "real engines via containers" },
          { label: "Build", note: "compile once, reuse artifact" },
          { label: "E2E smoke", note: "critical journeys only" },
          { label: "Merge allowed", note: "main stays deployable" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "Branch protection makes this workflow a required check — red means no merge, no exceptions.",
        code: [
          "name: ci",
          "on: [pull_request]",
          "jobs:",
          "  gate:",
          "    runs-on: ubuntu-latest",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - uses: actions/setup-node@v4",
          "        with: { node-version: 22, cache: npm }",
          "      - run: npm ci",
          "      - run: npm run lint && npm run typecheck",
          "      - run: npm run test:unit",
          "      - run: npm run test:integration",
          "      # required check: branch protection blocks merge until green",
          "      - run: npm run test:e2e",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Merging on red because the fix is 'one line'.",
          fix: "Stop-the-line: revert or fix, but main never stays red. Exceptions become the norm within a month.",
        },
        {
          mistake: "Gating on a slow monolithic pipeline that takes an hour.",
          fix: "Stage cheap-to-expensive, parallelize, cache. Under fifteen minutes, or engineers start stacking merges blind.",
        },
        {
          mistake: "Allowing direct pushes to main.",
          fix: "Branch protection with required status checks. The gate only works if it cannot be walked around by anyone, including admins.",
        },
        {
          mistake: "Adding auto-retry to hide flaky tests in CI.",
          fix: "Retries mask disease (Chapter 13). Quarantine the flaky test, fix it inside the week, keep the gate honest.",
        },
      ],
      fieldChecklist: [
        "Branch protection on main requires the test workflow as a status check.",
        "A red main is treated as an incident: revert or fix immediately, no new merges.",
        "The pipeline stages run cheap-to-expensive and fail fast.",
        "Full pipeline wall-clock is under fifteen minutes, and I would notice drift.",
        "No direct pushes to main — every change arrives through a gated pull request.",
        "CI retries exist only with tracking, and flaky tests are quarantined, not forgiven.",
      ],
      keyTerms: [
        {
          term: "CI gate",
          definition:
            "A required green status that blocks merges or deploys — the difference between a test suite and a suggestion.",
        },
        {
          term: "Branch protection",
          definition:
            "Repository rules (GitHub, GitLab) that forbid direct pushes and require named checks to pass before merge.",
        },
        {
          term: "Required check",
          definition:
            "A CI workflow whose red status blocks the pull request, enforced by the platform rather than by policy.",
        },
        {
          term: "Stop-the-line",
          definition:
            "The andon-style rule that a red main halts all merges until fixed or reverted — red is an incident, not a queue item.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you make tests actually enforce quality, not just exist?",
          a: "Mechanics before culture: branch protection on main, required status checks for the tiers that block deploys, no direct pushes. Red main is treated as an incident with revert-or-fix immediately. Then keep the gate trustworthy — deterministic checks, quarantined flaky tests, retries only with tracking. A gate people trust and cannot bypass is what turns a suite into quality enforcement.",
        },
        {
          q: "CI takes 50 minutes and engineers batch merges. Fix it.",
          a: "Profile the stages first: usually E2E dominates and everything rebuilds artifacts. Split into cheap-to-expensive stages so most failures exit in minutes; cache dependencies and Docker layers; share one build artifact; shard E2E across parallel workers. Consider deferring the full E2E tier to post-merge with a pre-merge smoke. Target fifteen minutes total — the gate only protects velocity if it is faster than the temptation to skip it.",
        },
        {
          q: "Someone with admin rights merged past a red gate. Response?",
          a: "Treat it as an incident review, not a reprimand: did the change break main, and why did the bypass feel necessary? Then remove the mechanism — branch protection that cannot be overridden without an explicit, logged and reviewed exception. The cultural point lands harder afterward: every exception is policy now, so if bypassing was fine once, the rule was theater, and everyone learned that.",
        },
      ],
      quiz: [
        {
          question: "What makes a test suite a gate rather than a suggestion?",
          options: [
            "Running it nightly",
            "Required green status blocking merge via branch protection",
            "High overall coverage",
            "A Slack bot that reports results",
          ],
          answerIndex: 1,
          explanation:
            "A gate is enforcement at the platform level: required checks, protected branches, no path around red. Reporting and schedules inform; they do not stop anything.",
        },
        {
          question: "Best ordering for pipeline stages?",
          options: [
            "E2E first for fast feedback",
            "All stages in parallel from the start",
            "Random order to catch race conditions",
            "Cheap checks first, expensive tiers last",
          ],
          answerIndex: 3,
          explanation:
            "Most failures are cheap-stage failures: lint, types, unit. Failing in seconds instead of after the E2E tier is what keeps the pipeline usable and the feedback tight.",
        },
        {
          question: "Main is red. Correct team behavior?",
          options: [
            "Stop merges: revert or fix immediately",
            "Merge more changes to dilute the failure",
            "Disable the failing test and move on",
            "Wait for the nightly run to confirm",
          ],
          answerIndex: 0,
          explanation:
            "Red main is an incident — every commit stacked on top compounds risk. Revert if the fix is not immediate; a deployable main is the whole point of the gate.",
        },
      ],
    },
    {
      number: 11,
      title: "Chaos and Fault Injection",
      summary:
        "Load testing asks 'can it handle volume?' Chaos testing asks 'can it handle failure?' Inject faults in staging: kill instances, drop packets, exhaust resources.",
      keyIdea:
        "Chaos Monkey in staging. Game days: a scheduled failure drill that finds the gaps in your resilience design.",
      deepDive: [
        {
          heading: "A different question than load",
          paragraphs: [
            "Load testing asks whether the system handles volume — k6, Gatling or Locust driving realistic traffic while you watch latency and error rates. Chaos testing asks a different question: what happens when things fail — an instance dies, the network partitions, the disk fills, a dependency slows to a crawl. Volume problems announce themselves in dashboards; failure problems hide until the first real outage, because happy-path tests never exercise the failure paths.",
            "The chaos engineering method is a loop with manners: define a measurable steady state — latency, error rate, queue depth — hypothesize it survives a specific fault, inject that fault in a controlled environment, observe, and learn. The hypothesis is what separates engineering from vandalism. 'The retry budget keeps us from cascading when the payments API slows by two seconds' is a claim the experiment can confirm or refute.",
          ],
        },
        {
          heading: "Inject faults where it is safe",
          paragraphs: [
            "Staging is the laboratory: kill instances mid-request, add latency on the database link with toxiproxy or tc netem, drop packets, exhaust the connection pool, fill the disk. The tools are mundane — toxiproxy for network conditions, Litmus or Gremlin for orchestration, plain scripts for the rest — and the findings are consistently expensive-sounding: the missing timeout that lets a call hang forever, the unbounded retry storm, the background job that dies silently and never resumes.",
            "Every gap found gets closed twice: once in code — add the timeout, add the budget, add the backoff — and once as a test or alert so it cannot return unnoticed. The silence finding matters as much as the crash finding: dashboards that showed nothing during the experiment are telling you the real outage would also have been invisible until customers noticed. Observability gaps are resilience gaps.",
          ],
        },
        {
          heading: "Game days make it culture",
          paragraphs: [
            "A game day is a scheduled failure drill: the team knows a fault is coming but not which one, on-call works the detection and mitigation path live, and the metric is time-to-mitigate with the runbook open. Runbooks written but never exercised are fiction; the game day is the edit that makes them true. Rotate who drives so the knowledge does not live in one person's head, and log every gap found as a ticket with an owner.",
            "Production chaos is a later chapter, earned: blast-radius controls, an abort switch, scoped experiments, and a team that has already fixed what staging exposed. Most teams get the full value from staging experiments plus game days; the discipline of hypothesizing, injecting and observing transfers completely, and the outage you prevent in staging is indistinguishable from the one production never sees.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A chaos experiment, run properly",
        caption:
          "A hypothesis you cannot state is not an experiment — chaos without measurement is just sabotage.",
        steps: [
          { label: "Steady state", note: "define measurable normal" },
          { label: "Hypothesis", note: "the fault will not break it" },
          { label: "Inject fault", note: "kill, delay, drop, exhaust" },
          { label: "Observe", note: "metrics, alerts, users" },
          { label: "Learn", note: "close the gap, repeat" },
        ],
      },
      pitfalls: [
        {
          mistake: "Injecting chaos into production before staging discipline exists.",
          fix: "Master staging experiments and game days first. Production chaos needs blast-radius controls and an abort switch.",
        },
        {
          mistake: "Random fault injection with no steady-state metric.",
          fix: "Define normal first — latency, error rate — hypothesize, then inject. Unmeasured chaos is unlearned chaos.",
        },
        {
          mistake: "Fixing the gap but skipping the regression test for it.",
          fix: "Every chaos finding lands twice: code fix plus a test or alert that fails if the gap reopens.",
        },
        {
          mistake: "Treating retries as resilience without budgets or jitter.",
          fix: "Unbounded retries amplify outages into storms. Budget them, add backoff and jitter, and test the budget under injected failure.",
        },
      ],
      fieldChecklist: [
        "I can state the steady-state metrics for this service and where they are graphed.",
        "Every outbound call has an explicit timeout — verified, not assumed.",
        "Retry logic has budgets and jitter, and I have seen it behave under injected failure.",
        "A chaos experiment this quarter found and closed at least one real gap.",
        "The on-call runbook has been exercised in a game day, not just written.",
        "Chaos runs in staging; any production experiment has an abort switch and a scope.",
      ],
      keyTerms: [
        {
          term: "Chaos engineering",
          definition:
            "The discipline of injecting controlled failures to find resilience gaps before users do — hypothesis, inject, observe, learn.",
        },
        {
          term: "Fault injection",
          definition:
            "Deliberately introducing failures — latency, packet loss, killed processes — at chosen points to exercise failure paths.",
        },
        {
          term: "Steady state",
          definition:
            "The measurable definition of normal — latency, error rate — that an experiment assumes will hold under fault.",
        },
        {
          term: "Game day",
          definition:
            "A scheduled failure drill where the team practices detection and mitigation against a real injected fault.",
        },
        {
          term: "Retry storm",
          definition:
            "The cascade where retries amplify an outage; prevented with retry budgets, backoff and jitter.",
        },
      ],
      interviewQuestions: [
        {
          q: "How is chaos testing different from load testing?",
          a: "Different questions and different failure surfaces. Load testing answers 'can it handle volume' with realistic traffic and throughput and latency curves. Chaos testing answers 'can it handle failure' by breaking things — killing instances, delaying the database, dropping packets — and watching whether the design's resilience mechanisms actually work. Volume failures show in dashboards; failure paths are invisible until injected.",
        },
        {
          q: "Design a chaos experiment for a payment service.",
          a: "Steady state: checkout success rate and p99 latency at normal traffic. Hypothesis: if the payments gateway slows by two seconds, timeouts fire, requests queue briefly, and no customer sees an error. Injection: toxiproxy adds two seconds of latency on the gateway route in staging. Observation: timeout behavior, queue depth, retry budget, alerting. The usual finding is a missing timeout or an unbounded retry — then close it in code and in a test.",
        },
        {
          q: "What did chaos testing teach you that unit tests could not?",
          a: "Composition behavior under partial failure: that a missing timeout turns one slow dependency into a frozen thread pool, that retries without budgets cascade, that a dashboard said nothing while everything hung. Unit tests verify logic in isolation; chaos verifies the failure design of the whole system — the timeouts, budgets, backoffs and alerts that only exist between components.",
        },
      ],
      quiz: [
        {
          question: "The first step of a chaos experiment, per the principles of chaos?",
          options: [
            "Define a measurable steady state",
            "Kill a random pod",
            "Buy a chaos platform",
            "Declare production ready",
          ],
          answerIndex: 0,
          explanation:
            "Without a measurable normal, an experiment cannot confirm or refute anything — it is just breakage with extra steps. Steady state comes first, then the hypothesis, then the injection; only that order produces a learning.",
        },
        {
          question: "Retries with no budget, no backoff, no jitter most likely cause:",
          options: [
            "Faster recovery",
            "Lower latency",
            "A retry storm that amplifies the outage",
            "Nothing; retries are free",
          ],
          answerIndex: 2,
          explanation:
            "When a dependency slows, synchronized retries multiply traffic exactly when the dependency is weakest, turning a blip into a cascade. Unbudgeted, unjittered retries are the classic amplification chaos experiments exist to expose.",
        },
        {
          question: "Where should a team new to chaos run experiments?",
          options: [
            "Production during peak traffic",
            "Staging, with game days",
            "Local laptops only",
            "Never — chaos is only for big tech",
          ],
          answerIndex: 1,
          explanation:
            "Staging gives real failure paths without real customers, and game days convert findings into runbooks, fixes and muscle memory. Production chaos comes later, and only with blast-radius controls, an abort switch and earned trust.",
        },
      ],
    },
    {
      number: 12,
      title: "Fixtures and Database Isolation",
      summary:
        "Tests that share database state contaminate each other. Each test gets a clean fixture, a transactional rollback, or a fresh database.",
      keyIdea:
        "Transaction-rollback per test for speed; fresh DB per test run for honesty. Pick per suite.",
      deepDive: [
        {
          heading: "Shared state ruins suites",
          paragraphs: [
            "Tests that share a database contaminate each other in ways that look like mysteries: the suite passes alone and fails in CI; it fails when parallelized; it fails on Tuesdays when a slower machine overlaps two files. Every variant is the same disease — a test reading state another test wrote. The failure that teaches it best is the leftover row from yesterday's debugging session quietly passing today's test.",
            "The rule that ends the mystery class: every test starts from a state it created itself, through the harness, not developer discipline. If a test assumes an empty table, the harness guarantees an empty table; if it assumes a seeded user, it seeds that user. Assumed state is a time bomb whose timer is the next parallel run, and nobody can defuse it by being careful.",
          ],
        },
        {
          heading: "Rollback or fresh — pick per suite",
          paragraphs: [
            "Transaction rollback is the speed play: begin a transaction, seed inside it, run the test, roll back. Writes vanish in milliseconds and tests can run hard in parallel against one database. It has edges: code that manages its own transactions conflicts with the wrapper, anything relying on committed-data visibility breaks, and sequences may not reset between tests. Great for the bulk of a suite; wrong for transactional subjects.",
            "A fresh database per run — or per worker — is the honesty play: migrations actually run, nothing leaks between runs, and the cost is tens of seconds rather than minutes. Pick per suite, not per religion: rollback for the broad middle where speed compounds, fresh for migration-sensitive and transactional subjects where the harness's correctness matters more than its runtime. Most mature setups use both.",
          ],
        },
        {
          heading: "Fixtures: explicit, minimal, fast",
          paragraphs: [
            "Factories beat fixture blobs: a createUser function with sensible defaults, overridden by the one field the test cares about, keeps the test's intent visible — you can read which field matters because it is the only one set. Giant shared YAML or SQL fixtures rot into a commons nobody understands: seeding fifteen tables for a test that reads one column, and breaking when a column is added six months later.",
            "Wire cleanup into the harness: beforeEach builds the world, afterEach rolls back or truncates, and parallel workers get their own schema or database so isolation survives concurrency. The test that must clean up after itself in its own body is already a test that will leak once someone adds an early return. Isolation is infrastructure, and infrastructure is the only kind that holds under deadline pressure.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Two ways to isolate database state",
        caption:
          "Rollback buys speed, freshness buys truth — choose per suite, and let the harness enforce it.",
        left: {
          heading: "Transaction rollback",
          items: [
            "Begin, seed, test, rollback",
            "Milliseconds — the fast default",
            "Fails with transactional code",
            "Sequences may not reset",
          ],
        },
        right: {
          heading: "Fresh database",
          items: [
            "New DB or schema per run",
            "Honest: migrations really run",
            "Slower — seconds per run",
            "Right for migration-sensitive suites",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Each test runs inside a transaction that is rolled back — writes vanish, state never leaks between tests.",
        code: [
          "import { afterEach, beforeEach, expect, it } from 'vitest';",
          "import { db } from './db'; // test-only pool",
          "import { createUser } from './users';",
          "",
          "let tx: TestTx;",
          "",
          "beforeEach(async () => {",
          "  tx = await db.begin(); // every write below is scoped to this transaction",
          "});",
          "",
          "afterEach(() => tx.rollback()); // the test's writes cease to exist",
          "",
          "it('creates a user with a usable invite code', async () => {",
          "  const user = await createUser({ email: 'a@example.com' }, { tx });",
          "  expect(user.inviteCode).toMatch(/^INV-[A-Z0-9]{8}$/);",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Tests assuming the database is empty or seeded 'by someone else'.",
          fix: "Every test creates its own state via factories. Assumed state is a time bomb for the next parallel run.",
        },
        {
          mistake: "One giant shared fixture file loaded for every test.",
          fix: "Minimal factories per test; the one field that matters should be visible in the test itself.",
        },
        {
          mistake: "Transaction rollback on tests that manage their own transactions.",
          fix: "Switch those suites to fresh-schema-per-worker or truncation; rollback and nested transactions conflict.",
        },
        {
          mistake: "Parallel workers sharing one schema.",
          fix: "A schema or database per worker. Shared state plus parallelism equals nondeterministic failures nobody can reproduce.",
        },
      ],
      fieldChecklist: [
        "Every test creates the state it needs; none assumes leftovers.",
        "I can explain this suite's isolation strategy — rollback, truncation or fresh schema — and its tradeoff.",
        "Factories build fixtures with sensible defaults, and the field under test is set explicitly in each test.",
        "Parallel workers never share a schema or table.",
        "The suite passes when run in any order, alone, and fully parallel.",
        "Cleanup lives in the harness (beforeEach and afterEach), not in developer memory.",
      ],
      keyTerms: [
        {
          term: "Fixture",
          definition:
            "The known starting state a test creates for itself — explicit, minimal, and never inherited from another test.",
        },
        {
          term: "Transactional rollback",
          definition:
            "Isolation by running each test inside a transaction that is rolled back afterward — fast, with known limits around nested transactions.",
        },
        {
          term: "Test factory",
          definition:
            "A function that builds a valid entity with defaults, letting the test override only the fields that matter.",
        },
        {
          term: "Worker isolation",
          definition:
            "Giving each parallel test worker its own schema or database so parallel runs cannot contaminate each other.",
        },
        {
          term: "Order dependence",
          definition:
            "The disease where tests pass only in one sequence — proof of leaked shared state somewhere in the harness.",
        },
      ],
      interviewQuestions: [
        {
          q: "Your integration suite passes alone but fails in CI. First suspects?",
          a: "Shared state and concurrency. CI usually parallelizes and starts clean, so leftovers other tests relied on vanish, and two files that shared a table now overlap. I check for order dependence, workers sharing a schema, and seeds someone assumed. The durable fix is harness-enforced isolation — per-test transactions or truncation, per-worker schemas — so the suite passes in any order, alone or parallel.",
        },
        {
          q: "Compare transaction rollback with fresh databases for test isolation.",
          a: "Rollback is speed: begin, seed, test, roll back in milliseconds, fully parallelizable. It breaks when the code under test manages its own transactions or needs committed-data visibility, and sequences may not reset. Fresh databases are honesty: migrations really run, nothing leaks, at a cost of seconds per run. Pick per suite — rollback for the broad middle, fresh for migration-sensitive or transactional subjects.",
        },
        {
          q: "How do you keep fixtures maintainable as the schema grows?",
          a: "Factories with sensible defaults, one per entity, living next to the schema migrations so they evolve together. Tests override only the field under test, so intent stays readable. I kill shared fixture blobs on sight — they seed fifteen tables for a one-column read and break silently on every migration. The test of good fixtures: a new engineer can read a test and know exactly what world it runs in.",
        },
      ],
      quiz: [
        {
          question: "Tests pass individually but fail when the whole suite runs. Prime suspect?",
          options: [
            "The CPU is too slow",
            "Shared database state leaking between tests",
            "The test runner is broken",
            "Coverage thresholds",
          ],
          answerIndex: 1,
          explanation:
            "Order-dependent failures are the signature of shared state: a test reads something another test wrote and only passes in one sequence. The cure is harness-enforced isolation per test, not slower machines or stricter discipline.",
        },
        {
          question: "Which isolation strategy is fastest per test?",
          options: [
            "Fresh database per test",
            "Manual cleanup after the suite",
            "Transaction rollback per test",
            "Restarting the container each time",
          ],
          answerIndex: 2,
          explanation:
            "Rollback discards each test's writes in milliseconds with no rebuild cost, which is why it is the default. Fresh databases and container restarts trade seconds for stronger guarantees — a deliberate per-suite judgment, not an accident.",
        },
        {
          question: "Why prefer factories over one shared fixture file?",
          options: [
            "Each test sees only the state it declares, so intent stays visible",
            "Factories run faster",
            "Fixture files cannot express dates",
            "Factories avoid using the database",
          ],
          answerIndex: 0,
          explanation:
            "Factories make the field under test the only explicit one, so tests stay readable and independent. Shared blobs hide intent and break silently on schema changes.",
        },
      ],
    },
    {
      number: 13,
      title: "The War on Flaky Tests",
      summary:
        "A flaky test is worse than no test: it erodes trust in the whole suite. Quarantine flaky tests; fix or delete them within a week.",
      keyIdea:
        "Flakiness is a signal — usually a hidden shared state, a timing dependency, or a real race condition the test exposed.",
      deepDive: [
        {
          heading: "Worse than no test",
          paragraphs: [
            "A flaky test — one that passes and fails on identical code — does damage out of proportion to its count. Red builds become routine, re-run buttons get worn out, engineers merge past failures to keep shipping, and within a quarter the gate is decorative. At a one percent flake rate, a suite running five thousand times a week produces dozens of false alarms, and each one spends the same trust as a real failure.",
            "Flakiness is measurable, so treat it as a metric: re-run a suspect test twenty times locally, track per-test retry counts from CI — Playwright's JSON reporter feeds this — and keep a leaderboard of offenders. What gets graphed gets fixed, because 'it seems flaky sometimes' finally has a number attached, and the number makes the quarantine conversation short. The argument moves from opinion to arithmetic.",
          ],
        },
        {
          heading: "Quarantine, then fix or delete",
          paragraphs: [
            "The policy that works: a suspected-flaky test moves to a quarantine job, where it still runs but cannot block, with an owner and a one-week deadline — fix it or delete it. Permanent quarantine is a graveyard that costs compute and accumulates shame; the deadline is what makes quarantine a hospital rather than a landfill. The main suite stays deterministic, so the gate stays trustworthy while the work happens.",
            "Diagnosis comes before blame: replay the trace, read the logs, run the loop that reproduces it. The usual suspects are hidden shared state (Chapter 12), timing dependencies disguised as sleeps, and order or parallelism the test secretly relied on. Occasionally the diagnosis is a gift: the test exposed a genuine race condition that production would have hit eventually — fix the race in the product, not just the test.",
          ],
        },
        {
          heading: "The usual root causes",
          paragraphs: [
            "Most flakes reduce to a short list. Sleeps instead of conditions: waitForTimeout(3000) is a bet that three seconds is always enough, and under CI load it is not — use auto-waiting and explicit expectations. Shared state: yesterday's row is today's assertion failure. Clock and timezone dependence: the test that fails at midnight UTC. Network assumptions: localhost is not instantaneous. Each has a mechanical fix, which is why flakes are bugs with good stack traces, not weather.",
            "Culture is the last mile: make 'flaky' a word that triggers work — an owner, a deadline, a ticket — rather than a shrug. Celebrate deletions of tests that protected nothing. Review whether retries in CI are buying diagnosis or hiding disease. The teams that win the war are not the ones with zero flakes forever; they are the ones whose median time from flake detected to flake fixed is days, not quarters.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The flaky-test loop",
        caption:
          "Quarantine is a hospital, not a cemetery — every flaky test leaves fixed, or leaves deleted.",
        steps: [
          { label: "Detect", note: "rerun loop or CI tracker" },
          { label: "Quarantine", note: "runs, but cannot block" },
          { label: "Diagnose", note: "traces, logs, reruns" },
          { label: "Fix or delete", note: "root cause, within a week" },
          { label: "Return to suite", note: "gate restored" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Retries with tracking and traces on failure — diagnose flakiness instead of hiding it.",
        code: [
          "import { defineConfig } from '@playwright/test';",
          "",
          "export default defineConfig({",
          "  // Retries exist for diagnosis, never to buy green builds",
          "  retries: process.env.CI ? 1 : 0,",
          "  workers: 4,",
          "  reporter: [",
          "    ['list'],",
          "    ['json', { outputFile: 'results.json' }], // feeds the flake tracker",
          "  ],",
          "  use: { trace: 'retain-on-failure' }, // replayable evidence on every failure",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Adding retries until the suite is green and moving on.",
          fix: "Retries hide disease. Track which tests retried and fix the top offenders within the week.",
        },
        {
          mistake: "Leaving tests in quarantine for months.",
          fix: "One-week deadline: fix or delete. A permanent quarantine is a graveyard that still costs compute.",
        },
        {
          mistake: "Assuming flakiness is always test-side.",
          fix: "Flakiness often exposes a real race condition in production code. Diagnose before blaming the test.",
        },
        {
          mistake: "Waiting with sleeps because the test 'sometimes needs longer'.",
          fix: "Replace sleeps with condition-based waits; timing dependencies are the top avoidable flake source.",
        },
      ],
      fieldChecklist: [
        "I can state this month's flake rate and name the current top three offenders.",
        "Quarantined tests have owners and deadlines — nothing lives there past a week.",
        "No test in the suite uses sleeps for synchronization.",
        "Every E2E failure produces a trace I can replay offline.",
        "When a 'flaky' test turned out to expose a real race, the production fix shipped too.",
        "Deleting a test that protects nothing is considered a win, not a loss.",
      ],
      keyTerms: [
        {
          term: "Flaky test",
          definition:
            "A test that passes and fails on identical code — the fastest way to destroy trust in a suite.",
        },
        {
          term: "Quarantine",
          definition:
            "A holding job where suspected-flaky tests run without blocking merges, under a fix-or-delete deadline.",
        },
        {
          term: "Retry (test)",
          definition:
            "Re-running a failed test automatically; useful for diagnosis, corrosive as a permanent policy.",
        },
        {
          term: "Race condition",
          definition:
            "Behavior depending on timing between concurrent operations — the real bug many flaky tests are exposing.",
        },
      ],
      interviewQuestions: [
        {
          q: "A test fails one in ten runs. Walk me through fixing it.",
          a: "Quantify first: rerun it twenty times locally to confirm the rate and see the failure modes. Then replay traces and read logs for the common thread — usually shared state, a sleep-based wait, or order and parallelism assumptions. Fix the root cause, or if it exposed a real race in the product, fix that too. While it blocks the gate, it quarantines with an owner; the fix lands inside the week, and the flake tracker confirms the cure.",
        },
        {
          q: "How do you keep flaky tests from destroying trust in CI?",
          a: "Quarantine with teeth: suspected flakes move to a non-blocking job with an owner and a one-week fix-or-delete deadline, so the required checks stay deterministic. Track flake rate as a metric with a leaderboard, keep retries rare and tracked, and make 'flaky' a word that opens a ticket rather than a shrug. The main suite stays trustworthy because it never contains a known liar.",
        },
        {
          q: "When is a flaky test actually valuable?",
          a: "When it is telling the truth. A test that fails under load but passes in isolation may be exposing a genuine race condition — the same one production would hit at the worst time. Before deleting it, diagnose: if the product is wrong, the fix ships in the product and the test stays as its regression guard. Deleting the messenger is how races survive until they become incidents.",
        },
      ],
      quiz: [
        {
          question: "Why is a flaky test often worse than no test?",
          options: [
            "It uses more compute than a stable test",
            "It erodes trust until people ignore red builds entirely",
            "It cannot be parallelized",
            "It inflates coverage numbers",
          ],
          answerIndex: 1,
          explanation:
            "The damage is cultural: false alarms train the team to merge past red, and once the gate is ignored, every real failure is ignored with it.",
        },
        {
          question: "Team policy for a newly flaky test?",
          options: [
            "Delete it immediately",
            "Add three retries and forget it",
            "Quarantine with an owner and a one-week fix-or-delete deadline",
            "Mark it slow and keep merging",
          ],
          answerIndex: 2,
          explanation:
            "Quarantine keeps the required checks deterministic while preserving the test's evidence for diagnosis, and the one-week deadline is what prevents quarantine from quietly becoming a permanent graveyard.",
        },
        {
          question:
            "A test fails under load in CI but passes in isolation. What might it be?",
          options: [
            "A genuine race condition the test exposed",
            "A coverage gap",
            "A stale lockfile",
            "A missing import",
          ],
          answerIndex: 0,
          explanation:
            "Load changes timing, and timing-sensitive failures often point at real concurrency bugs in the product. Diagnose before blaming the test — it may be the only honest witness.",
        },
      ],
    },
    {
      number: 14,
      title: "Testing in the AI Era",
      summary:
        "AI writes code fast; tests are what makes that velocity safe. The new discipline: tests written before, during, and after AI-generated code, with extra scrutiny on the edges AI gets wrong.",
      keyIdea:
        "AI-generated code needs the same test discipline as human code, with extra attention to the failure modes AI introduces: plausible-but-wrong logic, missing edge cases, hallucinated APIs.",
      deepDive: [
        {
          heading: "Velocity without a gate is a gamble",
          paragraphs: [
            "AI writes code faster than any review process reads it, which moves the bottleneck: the scarce resource is no longer production of changes but verification of them. Tests are what make that velocity safe — they are the machine-checkable contract between generated code and production, and they scale with volume in a way human attention does not. A team without a trustworthy suite experiences AI as an accelerant for incidents, not delivery.",
            "The discipline is tests before, during and after. Before: the failing test that specifies the behavior is now the spec you hand the model. During: generate with the tests in the loop, so red-green is the working rhythm. After: the diff goes through the same CI gate as human code — same required checks, same diff coverage, no exceptions for provenance. The gate does not care who wrote the code, and that indifference is the point.",
          ],
        },
        {
          heading: "The failure modes AI introduces",
          paragraphs: [
            "AI code fails in characteristic ways: plausible-but-wrong logic that reads cleanly while inverting a condition; missing edge cases — the empty list, the boundary value, the unicode name; hallucinated APIs that call methods which do not exist. Types and the compiler catch the last category cheaply; only behavior tests catch the first two, because both look correct in review. Extra scrutiny goes exactly where the code looks most confident.",
            "AI-written tests need more skepticism than AI-written code. They mirror the implementation, producing tautological tests that assert the bug as written; they mock the dependency in the shape the code wishes it had; they pad coverage without assertions. Review AI tests by attacking them: would this fail if the logic inverted? Has it been seen failing? Does it assert behavior or bookkeeping? A test that cannot fail is a liability with a green checkmark.",
          ],
        },
        {
          heading: "The engineer's new shape",
          paragraphs: [
            "The leverage moves from typing to specifying: the highest-value artifact in AI-assisted development is the failing test, because it is the spec the machine codes against and the guard the machine cannot talk its way past. Engineers who can write precise behavior names, boundary cases and failure paths become multiplicities; engineers who can only review prose become bottlenecks. The skill this whole book has been building — naming behavior — is suddenly the job description.",
            "Keep the pyramid while the volume shifts. AI floods the base cheaply — unit tests, property cases, table-driven variants — and that is fine; the top stays human-curated, because choosing which end-to-end journeys matter and which risks are unacceptable is judgment, not generation. The gate remains human-owned even when generation is automated: thresholds, critical paths, and the decision of what 'done' means do not delegate.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "AI generated a change — gate it",
        caption:
          "Confidence is not correctness — the gate that makes AI velocity safe is the same suite it has always been.",
        start: "An AI-written diff lands",
        branches: [
          {
            label: "Spec tests failing first?",
            outcome: "Run the loop: make them green",
            good: true,
          },
          {
            label: "No tests yet?",
            outcome: "Write behavior tests before merging",
            good: true,
          },
          {
            label: "Diff touches money or auth?",
            outcome: "Human review, line by line",
            good: true,
          },
          {
            label: "Trust the confident output",
            outcome: "Plausible-but-wrong ships to prod",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Reviewing AI code by reading it and nodding.",
          fix: "Read the diff against its tests. Behavior not verified by a failing test is behavior you are guessing about.",
        },
        {
          mistake: "Accepting AI-written tests that mirror the implementation.",
          fix: "Tests must assert behavior and be seen to fail. Tautological AI tests are coverage theater with a green check.",
        },
        {
          mistake: "Letting hallucinated APIs reach CI.",
          fix: "Types, lint and the compiler are the first gate; runtime tests catch the rest. No unverifiable API call merges.",
        },
        {
          mistake: "Doubling E2E volume because AI can generate tests cheaply.",
          fix: "AI floods the pyramid base cheaply; the top stays human-curated. More E2E is more flakiness, not more safety.",
        },
      ],
      fieldChecklist: [
        "Every AI-generated change arrives with tests I have seen fail first.",
        "I review AI tests as skeptically as AI code — assertions verified, mocks checked.",
        "Types and lint gate hallucinated APIs before tests do.",
        "Critical journeys and thresholds stay human-curated even when generation is automated.",
        "I can name the last plausible-but-wrong bug AI code slipped past review — and the test that now guards it.",
        "The suite, not the reviewer's stamina, is the thing that scales with velocity.",
      ],
      keyTerms: [
        {
          term: "Plausible-but-wrong",
          definition:
            "Code that reads convincingly yet implements the wrong logic — the signature AI failure mode only tests catch.",
        },
        {
          term: "Hallucinated API",
          definition:
            "A method or endpoint that does not exist, confidently called; caught first by types, finally by tests.",
        },
        {
          term: "Spec test",
          definition:
            "A failing test written before generation that serves as the machine-checkable spec for the change.",
        },
        {
          term: "Verification bottleneck",
          definition:
            "The shift, in AI-era development, of the limiting factor from writing code to proving it correct.",
        },
      ],
      interviewQuestions: [
        {
          q: "How does AI change what testing means on your team?",
          a: "It moves the bottleneck from writing to verifying, so the suite becomes the load-bearing safety system. Tests written before generation act as specs; the same CI gate applies to AI and human diffs; AI tests get extra scrutiny because they tend to mirror the implementation. The pyramid stays, the volume at the base grows, and the judgment about what matters stays human.",
        },
        {
          q: "How do you review AI-generated code differently from human code?",
          a: "Same gate, different emphasis. I read the diff against its tests first — what behavior is actually verified — and check that the tests were seen failing. I hunt the AI signature failure modes: plausible-but-wrong logic in the confident parts, missing edge cases, calls to APIs that do not exist. Anything touching money or auth gets human line-by-line review regardless of how clean the diff reads.",
        },
        {
          q: "What skill matters most for engineers in AI-era testing?",
          a: "Specifying behavior precisely. The failing test is now the highest-leverage artifact: it is the spec the machine codes against and the guard CI enforces. That means naming behaviors as claims, enumerating boundary and failure cases, and deciding what 'done' means. Engineers who can do that multiply themselves; engineers who can only review prose become the bottleneck the tests were supposed to relieve.",
        },
      ],
      quiz: [
        {
          question: "What is the highest-leverage human artifact in AI-assisted development?",
          options: [
            "Longer code reviews",
            "More E2E tests",
            "The failing test that specs the change",
            "A style guide",
          ],
          answerIndex: 2,
          explanation:
            "The spec test is both the instructions the machine codes against and the guard CI enforces — it scales with volume where reading prose does not.",
        },
        {
          question:
            "An AI-written test passes immediately and asserts on internal calls only. What is it?",
          options: [
            "Strong evidence the code works",
            "A tautological test — rewrite it to assert behavior",
            "A contract test",
            "A valid regression test",
          ],
          answerIndex: 1,
          explanation:
            "Tests that mirror the implementation verify the bug exactly as written, tautology dressed as testing. Attack them before merging: would they fail if the logic inverted? If not, they protect nothing and inflate the dashboard.",
        },
        {
          question:
            "Which failure mode do compiler types mostly miss, making runtime tests essential?",
          options: [
            "Plausible-but-wrong logic that type-checks",
            "Hallucinated APIs",
            "Missing imports",
            "Syntax errors",
          ],
          answerIndex: 0,
          explanation:
            "Types catch nonexistent methods and shape errors cheaply, but subtly inverted business logic compiles cleanly — only a behavior test that has failed catches it.",
        },
      ],
    },
  ],
};
