import type { Book } from "../types";

export const book09: Book = {
  id: "book-09",
  number: 9,
  title: "Master Load Testing",
  subtitle: "Book 09 of 13 · The Effortless Series",
  tagline:
    "Load, stress, spike and soak testing with k6 and JMeter; percentiles (p95, p99) instead of averages; throughput; bottleneck hunting; profiling; saturation points for CPU, I/O and connection pools.",
  description:
    "Systems do not fail at average load — they fail at the spike, the sale, the Monday morning. You cannot know your capacity until you measure it.",
  layer: "Prove it works",
  layerQuestion: "How do we know before the users do?",
  accentColor: "#facc15",
  emoji: "09",
  months: "Month 6",
  chapters: [
    {
      number: 1,
      title: "Why Load Testing",
      summary:
        "Hope is not a strategy. 'It worked when I clicked it' is also not a strategy. Load testing is how you know before strangers find out you do not.",
      keyIdea:
        "The first time your product gets press, your load test results are the only thing standing between the traffic curve and the incident channel.",
      deepDive: [
        {
          heading: "One user proves nothing",
          paragraphs: [
            "One user clicking through staging answers a different question than production asks. Production asks whether two hundred checkout requests per second still return in under a second while the cache is cold, the database is running maintenance, and three other services share the box. You cannot answer that by clicking. Load testing is the discipline of generating that traffic deliberately, in a controlled environment, before the internet generates it for you at the worst possible hour.",
            "The cost asymmetry settles the argument. Discovering your ceiling on a Tuesday costs one engineer an afternoon and a ticket. Discovering it during the launch costs an incident, a bridge call, a refund conversation, and the trust of every team that depends on you. Load testing buys the Tuesday version. It converts an unknown into a number, and a number can be defended, budgeted, and improved — hope cannot be any of those things.",
          ],
        },
        {
          heading: "Three numbers per run",
          paragraphs: [
            "Run a proper load test and you come back with three numbers. The ceiling: the highest throughput the system sustains while meeting its latency SLO — say, 1,200 requests per second at p99 under 400 milliseconds. The knee: the load level where latency leaves its flatline and starts climbing, which is always lower than the collapse point. And the failure mode: what actually happens past the knee — clean 429s, hung connections, or five hundred errors from every endpoint at once.",
            "The second thing it measures is you. A load test without dashboards is theater, so the run double-checks that your observability works: that CPU, memory, disk, pool and database wait metrics exist at one-second granularity, that alerts fire where they should, and that a stranger joining the on-call rotation could tell which resource is drowning. Teams discover more observability gaps in one afternoon of load testing than in a quarter of spec-writing.",
          ],
        },
        {
          heading: "A habit, not an event",
          paragraphs: [
            "Load testing is not a launch-eve ritual; it is a scheduled maintenance activity. Run the full curve before any launch, migration, or schema change on a hot path. Run a short smoke at two times average traffic on every release that touches the top endpoints. Re-run the deep runs quarterly regardless, because capacity quietly expires: data grows, dependencies upgrade, traffic mixes shift, and last quarter's number becomes this quarter's folklore.",
            "Start smaller than feels serious. A minimum viable load test is one k6 scenario against your busiest endpoint, fifteen minutes, staged from one to fifty virtual users, asserting p95 and error rate. That single run, repeated after every significant change, beats a grand strategy that never gets executed. Scale the ambition after the habit exists — full journey mixes, soak runs, replayed traffic — not before, because an unrun test protects no one.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Two ways to meet the traffic spike",
        caption: "One of these columns ends in a postmortem.",
        left: {
          heading: "Load tested",
          items: [
            "Capacity ceiling is a number",
            "p99 known at every step",
            "Bottleneck fixed in advance",
            "On-call recognizes the graph",
          ],
        },
        right: {
          heading: "Hope as a strategy",
          items: [
            "Capacity ceiling is a rumor",
            "Averages hide the tail",
            "Bottleneck found live at peak",
            "On-call meets it at 2 a.m.",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Testing the happy path with one user and calling it load coverage.",
          fix: "Generate concurrent virtual users at target RPS and measure percentiles — concurrency is the variable, not an afterthought.",
        },
        {
          mistake: "Running load tests on a laptop instead of a production-shaped environment.",
          fix: "Match instance classes, connection limits and data volume; otherwise the numbers describe a machine nobody ships.",
        },
        {
          mistake: "Reporting the average response time because it looked good.",
          fix: "Report p95 and p99 with the error rate; the average is the first number to stop mattering under load.",
        },
        {
          mistake: "Skipping the rerun because last quarter's result is still on a wiki page.",
          fix: "Capacity expires. Re-run after schema changes, dependency upgrades, and any release touching a hot path.",
        },
      ],
      fieldChecklist: [
        "I know the current sustainable RPS for my service's top three endpoints, and the date I measured it.",
        "I have a written performance budget per endpoint before I write the first k6 scenario.",
        "I can name the resource I expect to saturate first, and I am ready to be wrong.",
        "My load tests run against production-shaped infrastructure, not my laptop.",
        "The dashboards I would watch during an incident are the same ones I watch during a load test.",
        "I re-run the suite after any change to schema, indexes, or a hot code path.",
      ],
      keyTerms: [
        {
          term: "Load test",
          definition:
            "A controlled experiment that generates predictable traffic against a system to measure throughput, latency percentiles and error rate at each load level.",
        },
        {
          term: "Virtual user (VU)",
          definition:
            "One simulated client in a load tool such as k6 or JMeter; it holds sessions, sends requests and counts toward concurrency.",
        },
        {
          term: "Saturation",
          definition:
            "The point where a resource — CPU, disk, connection pool — has no spare capacity left, so extra load converts into queueing latency instead of throughput.",
        },
        {
          term: "Knee of the curve",
          definition:
            "The load level just before latency starts climbing and throughput plateaus — the practical capacity number you defend in planning.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why invest in load testing when we already have staging and code review?",
          a: "Staging proves the happy path works; it says nothing about holds. Load testing generates the traffic of a bad day deliberately and converts unknown capacity into three defensible numbers: the ceiling, the knee, and the failure mode past it. It also audits your observability — you cannot run one honestly without dashboards. The cost asymmetry settles it: finding the limit on a Tuesday is a ticket; finding it at launch is an incident.",
        },
        {
          q: "How do you decide what load level to test at?",
          a: "From evidence. I pull the daily peak requests per second from production metrics — the p95 or p99 of traffic over the last month — build the route mix from access logs, and add twenty to fifty percent headroom. That becomes the load phase. Levels beyond it belong to stress and spike tests, which exist precisely to find where the SLO breaks, not to imitate a real day.",
        },
        {
          q: "Tell me about a time load testing saved you.",
          a: "Before a sale event, our spike run showed the autoscaler taking minutes to replace instances that failed health checks under cold-start load — the burst would have been over before capacity arrived. We pre-warmed a pool and moved the health check to a cheap endpoint. The launch ran well past peak with p99 under our SLO. The test cost an afternoon; the incident it prevented would have cost the weekend.",
        },
      ],
      quiz: [
        {
          question: "Which numbers should a load test report instead of the average?",
          options: [
            "The mean and the mode",
            "p50, p95 and p99 with sample counts",
            "Only the fastest request",
            "Total CPU time",
          ],
          answerIndex: 1,
          explanation:
            "Percentiles describe the shape users actually experience. The mean summarizes a right-skewed distribution into a number nobody feels, which is exactly how the tail — the retries, tickets and abandoned carts — hides from dashboards.",
        },
        {
          question: "What does the 'knee' of the load curve represent?",
          options: [
            "The error rate at idle",
            "The number of virtual users configured",
            "The load where latency leaves its flatline and starts climbing",
            "The point of maximum throughput ever observed",
          ],
          answerIndex: 2,
          explanation:
            "The knee is where latency stops being flat and starts climbing — the honest definition of capacity. The collapse point is dramatic but too late; planning needs the load level where degradation begins.",
        },
        {
          question:
            "Your service gets press coverage tomorrow and traffic could triple. What is the most defensible thing to have done in advance?",
          options: [
            "Compressed all images",
            "Disabled logging to save IOPS",
            "Added a bigger database instance on a hunch",
            "A recent load test with a recorded capacity ceiling and known failure mode",
          ],
          answerIndex: 3,
          explanation:
            "A dated load test converts an unknown into a number: the ceiling, the knee and the failure mode. Hope, image compression and hunches do not survive contact with a three-times traffic day; evidence does.",
        },
      ],
    },
    {
      number: 2,
      title: "Types of Load Tests: Load, Stress, Spike, Soak",
      summary:
        "Four tests, four questions. Load: can it handle normal? Stress: where does it break? Spike: does it survive sudden jumps? Soak: does it degrade over hours?",
      keyIdea:
        "Each test answers a different question. Run all four before claiming you know your system.",
      deepDive: [
        {
          heading: "Load: the ordinary bad day",
          paragraphs: [
            "A load test answers the first question: can we handle the traffic we already expect? Take your production daily peak — the p95 or p99 of requests per second over the last month — and drive that shape through the system for ten to thirty minutes. The pass condition is written before the run: p99 under the SLO, error rate under one percent, throughput matching the target. If you cannot state the pass condition, you are exploring, not testing.",
            "Pick the target from evidence, not optimism. Pull the top routes with their measured shares from access logs, apply the real read-write ratio, and add modest headroom — twenty to fifty percent — for growth. Testing far beyond expected peak belongs to stress and spike tests; a load test that quietly runs at ten times traffic tells you nothing about the day you actually planned for.",
          ],
        },
        {
          heading: "Stress and spike find edges",
          paragraphs: [
            "A stress test ramps load in steps — two hundred, four hundred, eight hundred virtual users — and watches for the moment an SLO breaks. The deliverable is not the failure; it is the record of the ceiling, which resource saturated first, and how the system failed: graceful degradation with clear errors, or a collapse that took healthy endpoints down with it. Every system has a breaking point. Knowing yours is a feature, not an admission.",
            "A spike test asks a different question: does the system survive a sudden jump? Go from idle to ten times load in seconds — the cron job that fires at midnight, the link that hits the front page, the sale that opens on the minute. Watch whether queues absorb the burst, whether autoscaling reacts in time, and whether failures come back fast and legible instead of hanging. An autoscaler you have never watched during a spike is a rumor, not a mechanism.",
          ],
        },
        {
          heading: "Soak finds what time reveals",
          paragraphs: [
            "Soak tests run for hours at realistic load, and their findings are all slow: memory that climbs a steady slope toward the container limit, file descriptors that never get released, database connections that leak one per hour, logs that fill a disk overnight, cache hit rates that decay until every request is a miss. None of these appear in a fifteen-minute run. All of them appear at 4 a.m. on day three of a launch week.",
            "The skill in a soak run is watching trends, not snapshots. Graph memory, GC pause time, open file descriptors and pool wait for the entire duration and look at the slope, because a leak is a direction, not a level. Run soaks overnight in staging on production-shaped data, and treat any resource with a positive slope as a finding even when the absolute number still looks comfortable.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Four tests, four questions",
        caption: "Intensity against duration — every cell is a different experiment.",
        axes: { x: "How long it runs", y: "How hard you push" },
        quadrants: [
          { label: "Spike", note: "sudden jump, minutes" },
          { label: "Stress", note: "ramp past the limit" },
          { label: "Load", note: "expected peak, minutes" },
          { label: "Soak", note: "expected load, hours" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Four questions, four shapes — the same scenario file, driven by different stage profiles.",
        code: [
          "# Load: expected peak, steady",
          "k6 run --stage 1m:200 --stage 15m:200 --stage 1m:0 scenarios/browse.js",
          "",
          "# Stress: ramp in steps until the SLO breaks — note the ceiling",
          "k6 run --stage 1m:200 --stage 8m:800 --stage 2m:800 scenarios/browse.js",
          "",
          "# Spike: 10x in ten seconds, then hold and recover",
          "k6 run --stage 10s:1000 --stage 4m:1000 --stage 1m:0 scenarios/browse.js",
          "",
          "# Soak: hours at expected load; watch memory and fd slopes",
          "k6 run --duration 4h --vus 150 scenarios/browse.js",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Running a stress test against production during business hours because staging 'is not real'.",
          fix: "Stress production-shaped staging; if production is required, use a small traffic percentage with a kill switch and off-peak hours.",
        },
        {
          mistake: "Declaring spike readiness because an autoscaler exists.",
          fix: "Fire the spike and watch: scale-up takes minutes, cooldowns thrash, and cold instances fail health checks. Verify each, never assume.",
        },
        {
          mistake: "Calling a twenty-minute run a soak test.",
          fix: "Soak means hours — overnight at minimum. Leaks are slopes, and slopes need time to become visible.",
        },
        {
          mistake: "Treating a stress-test failure as a launch blocker bug.",
          fix: "Every system has a breaking point. Record the ceiling, the failure mode and the first alert; that knowledge is the deliverable.",
        },
      ],
      fieldChecklist: [
        "I have run a load test at my expected peak and can state its p95 and p99 from memory.",
        "I have run a stress test this quarter and can state the ceiling where the SLO breaks.",
        "I have fired a genuine spike — idle to peak in seconds — and watched autoscaling respond.",
        "I have run an overnight soak and graphed memory, fds, and GC pause time over the whole run.",
        "Each test type has a written pass condition, not just a feeling.",
        "I know which alerts should fire during each test, and I verified they did.",
      ],
      keyTerms: [
        {
          term: "Stress test",
          definition:
            "A test that pushes load past the expected peak in steps until an SLO breaks, to find the system's ceiling and its failure mode.",
        },
        {
          term: "Spike test",
          definition:
            "A test that jumps from idle to many times normal load in seconds and checks whether queues, autoscaling and fail-fast errors absorb it.",
        },
        {
          term: "Soak test",
          definition:
            "A long run at realistic load, hours to days, designed to surface leaks, pool exhaustion and slow degradation that short tests miss.",
        },
        {
          term: "Graceful degradation",
          definition:
            "Failing in a controlled way past capacity — shedding low-priority work, queueing, returning clear 429s — instead of collapsing for everyone.",
        },
      ],
      interviewQuestions: [
        {
          q: "What is the difference between a stress test and a spike test?",
          a: "A stress test ramps load in sustained steps past the expected peak until an SLO breaks; its deliverable is the ceiling, the first saturated resource, and the failure mode. A spike test jumps from idle to many times normal in seconds and asks whether queues, autoscaling and fail-fast errors absorb the burst. Stress finds the edge; spike asks whether you can survive arriving at it suddenly.",
        },
        {
          q: "What kinds of bugs do only soak tests catch?",
          a: "Slow ones. Memory leaks that climb toward the container limit, file descriptor and connection leaks measured per hour, log disks filling overnight, cache hit ratios decaying, GC pause trends rising. All are slope findings, invisible in a fifteen-minute run. I run soaks overnight at expected load on production-shaped data and graph resources for the whole duration — a positive slope is a finding even when the level looks safe.",
        },
        {
          q: "How long should a load test run?",
          a: "Long enough for queues to settle and short enough to run often. Ten to thirty minutes at a held step for load and stress phases; seconds-to-minutes for a spike; overnight for a soak. The trap is measuring before steady state — percentile curves need a minute or two to stabilize after each step change, and readings taken during the transient describe the ramp, not the system.",
        },
      ],
      quiz: [
        {
          question: "Which test type runs for hours at expected load to find leaks?",
          options: ["Spike", "Stress", "Soak", "Smoke"],
          answerIndex: 2,
          explanation:
            "Soak tests hold expected load for hours to days, which is the only timescale where leaks, pool exhaustion and cache decay become visible as slopes. Short tests measure levels; soaks measure directions.",
        },
        {
          question: "What is the deliverable of a stress test?",
          options: [
            "Proof the system never fails",
            "The ceiling where the SLO breaks and how failure behaves",
            "A passing build badge",
            "The maximum thread count the JVM supports",
          ],
          answerIndex: 1,
          explanation:
            "Every system has a breaking point, so failure is not the deliverable — knowledge is. The record of the ceiling, the first saturated resource and the failure mode is what planning and on-call actually need.",
        },
        {
          question:
            "A cron job fires at midnight and sends traffic from near-idle to ten times normal in seconds. Which test models it?",
          options: [
            "A 4-hour soak at 2x average",
            "A stepwise stress ramp",
            "A unit test of the cron expression",
            "A spike test from idle to peak in seconds",
          ],
          answerIndex: 3,
          explanation:
            "A spike is defined by its suddenness: near-idle to many times normal in seconds. Soaks and ramps change load gradually; only the spike asks whether queues and autoscaling absorb a genuine jump.",
        },
      ],
    },
    {
      number: 3,
      title: "k6 and JMeter",
      summary:
        "Two tools dominate load testing in 2026: k6 for code-first, developer-friendly scenarios; JMeter for GUI-driven, enterprise-shaped test plans.",
      keyIdea:
        "k6 scripts are code, versioned with your repo. JMeter excels at complex enterprise scenarios.",
      deepDive: [
        {
          heading: "k6 makes tests code",
          paragraphs: [
            "In k6 a load scenario is a JavaScript file: virtual users, stages, thresholds and checks, all versioned beside the code they exercise. Options declare the shape — VUs, duration, arrival rates — and thresholds turn your SLO into pass or fail conditions the tool itself enforces. Because scenarios are code, they get reviewed in pull requests, parameterized with environment variables, and executed headless in CI with one command. The load test stops being an artifact someone owns and becomes part of the build.",
            "The metrics k6 emits by default teach the right habits: http_req_duration reports percentiles, http_req_failed tracks error rate, and checks record assertion passes separately from network success. Thresholds like p(99)<400 or rate<0.01 fail the run with a non-zero exit, which is exactly what a CI gate needs. Write thresholds from your real SLOs, not from round numbers — the test exists to protect a promise, not to decorate a report.",
          ],
        },
        {
          heading: "JMeter makes tests trees",
          paragraphs: [
            "JMeter models a test as a tree of elements: thread groups define users and ramp-up, samplers issue requests, controllers branch and loop, listeners report. Its depth is protocol breadth — JDBC, JMS, FTP, TCP alongside HTTP — which is why enterprise shops with mixed estates still reach for it. The GUI makes complex, parameterized flows approachable: CSV data sets for credentials, assertions per sampler, distributed injection across many load generators for very high concurrency.",
            "Respect its two sharp edges. The GUI is for authoring only — run the plan headless in CLI mode for anything real, because the GUI memory footprint collapses long runs. And treat the .jmx file as source code: commit it, review it, and diff it, or the plan drifts into a local artifact one departing contractor owns alone. JMeter rewards discipline exactly the way k6 does; it simply expresses the discipline as XML.",
          ],
        },
        {
          heading: "Choose by workflow",
          paragraphs: [
            "The choice is workflow, not feature count. A developer-heavy team shipping an HTTP API will move faster in k6: tests live in the repo, thresholds gate CI, and the learning curve is JavaScript they already speak. A QA-led organization testing mixed protocols, record-and-replay flows and legacy systems gets more from JMeter's breadth. Locust earns a mention for Python teams, Gatling for Scala shops, autocannon for quick Node one-liners — every mainstream tool can find a bottleneck.",
            "What separates teams that know their capacity from teams that do not is not the tool; it is whether scenarios are reviewed artifacts with thresholds and honest weights. A mediocre tool in version control beats a powerful tool in a drawer. Pick the one your team will actually run weekly, standardize on it in a short decision record, and invest the saved arguments into better scenarios.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "k6 versus JMeter",
        caption: "Pick by team workflow, not by feature checklist — the wrong tool collects dust.",
        left: {
          heading: "k6",
          items: [
            "Scenarios are JavaScript",
            "Lives in the repo, PRs",
            "Thresholds fail the run",
            "CLI-first, CI-native",
          ],
        },
        right: {
          heading: "JMeter",
          items: [
            "Plans built in a GUI",
            "Deep protocol coverage",
            "Enterprise plugin ecosystem",
            "Heavy at distributed scale",
          ],
        },
      },
      codeExample: {
        language: "javascript",
        caption:
          "A k6 scenario with thresholds — the run fails the build, not just your feelings.",
        code: [
          "import http from 'k6/http';",
          "import { check } from 'k6';",
          "",
          "export const options = {",
          "  vus: 50,",
          "  duration: '3m',",
          "  thresholds: {",
          "    http_req_failed: ['rate<0.01'],",
          "    http_req_duration: ['p(95)<300', 'p(99)<800'],",
          "  },",
          "};",
          "",
          "export default function () {",
          "  const res = http.get('https://api.example.com/products?page=1');",
          "  check(res, { 'status is 200': (r) => r.status === 200 });",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Authoring JMeter plans in the GUI without ever committing the .jmx to the repo.",
          fix: "Commit every plan and script beside the code it exercises — a test you cannot diff is a test you cannot trust.",
        },
        {
          mistake: "Writing hundreds of checks but zero thresholds, then eyeballing the summary.",
          fix: "Encode the SLO as k6 thresholds or JMeter assertions so the run itself fails loudly on breach.",
        },
        {
          mistake: "One giant scenario where every virtual user does everything.",
          fix: "Model journeys — browse, checkout, admin — as separate scenarios with production-derived weights and honest think time.",
        },
        {
          mistake: "Blaming the tool when results look wrong.",
          fix: "Wrong results are almost always wrong modeling: missing think time, unaccounted caching, one endpoint hammered. Fix the scenario first.",
        },
      ],
      fieldChecklist: [
        "Every load scenario for this service lives in the repo and changes in pull requests.",
        "My k6 thresholds mirror the SLOs we promise users, not round numbers I picked.",
        "I can run the full suite headless from one command with no GUI open.",
        "Scenario weights match production traffic shares for the top endpoints.",
        "I know which tool my team standardized on, and why it beat the alternatives for our stack.",
        "Test data — CSV files, seeds, tokens — is versioned or generated, never hand-typed per run.",
      ],
      keyTerms: [
        {
          term: "Threshold (k6)",
          definition:
            "A pass or fail condition on a metric — for example p(95) under 300 ms — evaluated during and after the run; failures exit non-zero for CI.",
        },
        {
          term: "Thread group (JMeter)",
          definition:
            "JMeter's unit of concurrency: the number of simulated users, ramp-up time and loop count for one branch of a test plan.",
        },
        {
          term: "Scenario",
          definition:
            "A named user journey with its own executor, VU count and pacing — browse, checkout, admin — mixed to imitate real traffic.",
        },
        {
          term: "Check",
          definition:
            "An assertion on a single response — status, body, header — recorded as a pass rate; checks observe, thresholds fail.",
        },
      ],
      interviewQuestions: [
        {
          q: "k6 or JMeter — how do you choose?",
          a: "By workflow, not features. k6 wins for developer teams shipping HTTP APIs: scenarios are JavaScript in the repo, thresholds gate CI with non-zero exits, and the learning curve is a language the team already speaks. JMeter wins for QA-led organizations with mixed protocols — JDBC, JMS, TCP — record-and-replay needs, and distributed injection. Locust, Gatling and autocannon are honest alternatives. A mediocre tool in version control beats a powerful one in a drawer.",
        },
        {
          q: "How do you make load testing a team habit instead of one engineer's hobby?",
          a: "Make scenarios reviewed artifacts with thresholds, and put the gate in CI so the build, not a person, asks for them. A three-minute k6 smoke on pull requests, a nightly peak-mix run with a posted report, budgets versioned beside the code. When a breach blocks a merge like any red test, ownership spreads. The hobbyist pattern — one hero running GUI tools before launches — dies the day they go on vacation.",
        },
        {
          q: "What does a good load scenario look like?",
          a: "It mirrors production, not the demo. Named journeys — browse, checkout, admin — with weights from access logs, think time between steps, seeded users and production-scale data, plus a low-weight background scenario for jobs and webhooks. Thresholds assert the real SLOs: p95 and p99 per endpoint, error rate, maybe a throughput floor. And it is deterministic enough to compare week over week: pinned data, fixed environment, exported percentiles.",
        },
      ],
      quiz: [
        {
          question: "What makes a k6 threshold more useful than eyeballing the end-of-run summary?",
          options: [
            "It renders nicer charts",
            "It fails the run with a non-zero exit, so CI can gate on it",
            "It runs the test twice",
            "It replaces the need for monitoring",
          ],
          answerIndex: 1,
          explanation:
            "Thresholds turn an SLO into a pass or fail condition enforced by the tool itself, failing with a non-zero exit. That exit code is what lets CI gate merges on performance instead of taste.",
        },
        {
          question: "In JMeter, what does a thread group control?",
          options: [
            "The color of listeners",
            "Database connection pooling",
            "Number of users, ramp-up time and loop count for a branch of the plan",
            "The order of post-processors",
          ],
          answerIndex: 2,
          explanation:
            "A thread group is JMeter's unit of concurrency: how many users, how fast they ramp up, and how many iterations they run. Thread groups are how separate journeys get separate load shapes in one plan.",
        },
        {
          question:
            "A teammate writes one giant scenario where every VU hits every endpoint equally, then reports surprising p99s. Best first move?",
          options: [
            "Rebuild scenarios as weighted journeys matching production traffic shares",
            "Double the VU count to stabilize results",
            "Delete the thresholds so the run passes",
            "Switch tools immediately",
          ],
          answerIndex: 0,
          explanation:
            "Equal weighting tests a system nobody runs. Real traffic is a skewed mix, and percentiles only mean something against the mix users produce. Rebuild the scenario from access-log shares before doubting the infrastructure.",
        },
      ],
    },
    {
      number: 4,
      title: "Percentiles (p50, p95, p99) Instead of Averages",
      summary:
        "Averages lie. Your p99 is the user who leaves. The average says 'most users are fine' while the tail quietly destroys your conversion rate.",
      keyIdea:
        "Always report p95 and p99. A histogram of slow requests tells you what they share.",
      deepDive: [
        {
          heading: "Averages lie by design",
          paragraphs: [
            "Latency is not normally distributed — it has a long right tail, and the mean is the wrong summary for any skewed distribution. One request in a hundred taking five seconds can double an average that p95 barely notices. The average says most users are fine; p99 says one user in a hundred is having a terrible time, and at 10,000 requests per second that is a hundred terrible experiences every second, all of them eligible to become support tickets, abandoned carts, or retries that double your load.",
            "Percentiles are rank statements, which is what makes them honest. p95 means nineteen of twenty requests finish below this line. p99 means the worst one in a hundred — the user refreshing the page, the mobile client on a train, the webhook consumer timing out. When you report p50, p95 and p99 together, you describe the whole distribution's shape; when you report only the mean, you describe the number nobody experiences.",
          ],
        },
        {
          heading: "Reading the tail correctly",
          paragraphs: [
            "Compute percentiles per endpoint and per time window, never as one global number. A service-wide p99 mixes a fast health check with a slow report export and tells you nothing; the aggregate hides the one route that is burning users. Histogram metrics — Prometheus buckets, HDR histograms in the client — make percentiles cheap at any volume, so there is no excuse for averaging first and bucketing later. Bucket edges must cover the tail: if p99 is three seconds and your top bucket is one second, your dashboard is fiction.",
            "When p99 moves, group the slow requests and ask what they share. Same endpoint? Same tenant with a million-row dataset? Cache misses after a deploy flushed the warm entries? Payloads above a size threshold? Ten example slow requests with trace ids usually answer this in minutes, which is why slow-request sampling with trace correlation is a requirement, not a nice-to-have. The histogram tells you the tail exists; the samples tell you why.",
          ],
        },
        {
          heading: "Where the tail comes from",
          paragraphs: [
            "The dominant source is queueing. As utilization approaches saturation, wait times grow non-linearly — near a fully busy resource, each extra request roughly multiplies the wait. That is why p99 explodes at loads the average shrugs off: the tail is where the queue lives. GC pauses, lock contention, connection pool starvation and cold caches all contribute their own spikes, and each one shows up in the tail before it shows in the median.",
            "Then there is the client side, which server metrics never see. DNS resolution, TLS handshakes, mobile radio state, and retry storms on error all add latency between the click and the render. Frontend tools complete the picture: Lighthouse audits, Chrome DevTools performance traces, and the Core Web Vitals — LCP for loading, INP for interaction, CLS for stability. The server p99 and the user-perceived p99 are different numbers; the second one is the one that shows up in revenue.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Anatomy of one request's latency",
        caption: "The tail lives where queueing hides — find the slowest stage, not the slowest average.",
        steps: [
          { label: "Queue wait", note: "saturated resource first" },
          { label: "Middleware", note: "auth, rate limits, flags" },
          { label: "Handler", note: "your code lives here" },
          { label: "DB round trips", note: "often most of wall time" },
          { label: "Network home", note: "TLS, transfer, client" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "From a cumulative histogram, p95 and p99 fall out in ten lines — no average in sight.",
        code: [
          "// p95 and p99 from a cumulative latency histogram (milliseconds)",
          "const edges = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000];",
          "const cumulative = [412, 988, 2041, 6120, 8455, 9540, 9915, 9970, 9999];",
          "const total = cumulative[cumulative.length - 1];",
          "",
          "export function percentile(p: number): number {",
          "  const target = Math.ceil((p / 100) * total);",
          "  const i = cumulative.findIndex((c) => c >= target);",
          "  return i === -1 ? Infinity : edges[i];",
          "}",
          "",
          "// p95: 500 ms — one request in 20 is slower",
          "console.log(percentile(95));",
          "// p99: 1000 ms — one request in 100 waits a full second",
          "console.log(percentile(99));",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Headlining the release notes with mean response time.",
          fix: "Report p50, p95 and p99 per endpoint with sample counts; the mean summarizes a distribution nobody experiences.",
        },
        {
          mistake: "Publishing one aggregate p99 across all endpoints.",
          fix: "Break percentiles down per endpoint and method; the aggregate hides the one route burning users.",
        },
        {
          mistake: "Client timers that start after DNS and TLS finish.",
          fix: "Measure from the user's clock — request intention to useful render; on the frontend that means LCP and INP.",
        },
        {
          mistake: "Top metric bucket set to one second when p99 is three seconds.",
          fix: "Cover the tail in histogram buckets; if the top bucket is below your p99, the dashboard is fiction.",
        },
      ],
      fieldChecklist: [
        "My dashboards show p95 and p99 per endpoint, with the average nowhere as the headline.",
        "I can state, for my service, what fraction of requests the p99 covers at today's RPS.",
        "When p99 spikes, I can pull ten example slow requests with trace ids in under a minute.",
        "Latency buckets in my metrics cover the tail — the top bucket is not one second when p99 is three.",
        "I know the difference between server-side latency and user-perceived latency in my product.",
        "Alerts fire on percentile breaches and error-budget burn, never on the mean.",
      ],
      keyTerms: [
        {
          term: "p95",
          definition:
            "The latency below which 95 percent of requests complete — one request in 20 is slower; the minimum bar for any honest performance claim.",
        },
        {
          term: "p99",
          definition:
            "The latency below which 99 percent of requests complete — the tail your angriest users, retries and support tickets come from.",
        },
        {
          term: "Histogram",
          definition:
            "A metric type counting observations into predefined buckets; the standard way to compute percentiles cheaply in Prometheus and friends.",
        },
        {
          term: "Queueing delay",
          definition:
            "Time a request spends waiting for a busy resource before service begins; it grows non-linearly as utilization approaches 100 percent.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why are averages a bad latency metric?",
          a: "Latency distributions are right-skewed: one slow request in a hundred can double a mean that p95 barely notices. The average describes a number no user experiences — most were fine, the tail was miserable, and the tail is where retries, support tickets and abandoned carts come from. Report p50, p95 and p99 per endpoint with sample counts. The mean is not wrong, it is answering a question nobody asked.",
        },
        {
          q: "p99 doubled but p95 barely moved. What do you investigate?",
          a: "A tail-only regression points at mechanisms that hit a subset of requests: GC pauses under allocation pressure, lock contention on a hot row, connection pool starvation, cache misses after a deploy flushed warm entries, or a new query plan on one route. I pull slow-request samples with trace ids and group by what they share — endpoint, tenant, payload, timing — then read the resource timeline at the moment the tail moved.",
        },
        {
          q: "How do you measure latency without lying to yourself?",
          a: "Measure from the user's clock, not the handler's. Server-side timers that start after DNS and TLS hide the front of the journey; frontend tools — Chrome DevTools performance traces, Lighthouse, Core Web Vitals like LCP and INP — cover the rest. Compute percentiles from histogram buckets whose edges cover the tail, per endpoint and per window. And keep slow-request samples queryable; percentiles tell you the tail exists, samples tell you why.",
        },
      ],
      quiz: [
        {
          question: "Why does the mean mislead for latency?",
          options: [
            "Means are slower to compute",
            "Latency distributions are right-skewed; a small tail drags the mean up while most users are fine",
            "The mean equals p50 in every distribution",
            "Percentiles require histograms",
          ],
          answerIndex: 1,
          explanation:
            "Latency is right-skewed: one request in a hundred taking seconds can double a mean that p95 barely registers. The mean answers a question nobody asks; percentiles answer the one users and on-call live with.",
        },
        {
          question: "At 10,000 requests per second, roughly how many requests per second exceed p99?",
          options: ["Ten", "One thousand", "One hundred", "None, by definition"],
          answerIndex: 2,
          explanation:
            "p99 is the worst one percent. At 10,000 requests per second that is one hundred slower requests every second — each a candidate for a retry, a support ticket or an abandoned cart.",
        },
        {
          question:
            "p99 tripled this morning, p50 unchanged, deploys went out overnight. What do you pull first?",
          options: [
            "A bigger database instance",
            "The average response time graph",
            "A load test at double traffic",
            "Slow-request samples with trace ids and the deploy diff",
          ],
          answerIndex: 3,
          explanation:
            "A tail-only regression with a fresh deploy points at subset mechanisms: GC pauses, lock contention, cache misses or a new query plan. Slow-request samples with trace ids and the deploy diff usually name it in minutes.",
        },
      ],
    },
    {
      number: 5,
      title: "Throughput vs. Concurrency",
      summary:
        "Throughput is work done per second; concurrency is work in flight at once. Little's Law connects them: L = λ × W.",
      keyIdea:
        "Adding concurrency only helps if your system isn't already saturated. Past saturation, latency climbs.",
      deepDive: [
        {
          heading: "Little's Law as a planning tool",
          paragraphs: [
            "Little's Law — L equals lambda times W — connects the three numbers every capacity conversation confuses: concurrency L, arrival rate lambda, and time in system W. Five hundred requests per second at 200 milliseconds average means one hundred requests in flight. If the roadmap demands 2,000 requests per second at the same latency, you need four hundred concurrent slots: connections, threads, memory, database sessions. The arithmetic is trivial, and teams still skip it, then rediscover it from a dashboard at 3 a.m.",
            "Use it in the direction that hurts: given a target RPS and SLO, compute required concurrency, then check every pooled resource on the path — HTTP client pools, database pools, thread pools — against that number. Each in-flight request holds real resources: memory, file descriptors, often a database connection for its whole duration. Concurrency is not a free knob; it is inventory, and every unit of it costs somewhere.",
          ],
        },
        {
          heading: "The knee changes the rules",
          paragraphs: [
            "Below saturation, adding concurrency raises throughput roughly linearly — more work in flight, same service time. At the knee, the first resource saturates: throughput plateaus and latency starts climbing hyperbolically, because new arrivals join a queue instead of getting service. Past the knee, every additional virtual user makes every existing request slower. This is the single most useful graph in capacity planning: throughput and latency versus load, drawn together, with the knee marked.",
            "Amdahl's Law caps everything from above. If ten percent of your request path is serial — one global lock, a single-writer table, a synchronized cache fill — no amount of parallelism buys more than ten times total speedup, and in practice far less. Before adding instances at the knee, hunt the serial fraction: the mutex everyone holds, the queue with one consumer, the shared rate limiter. Parallelizing the parallel part is a hobby; removing serialization is engineering.",
          ],
        },
        {
          heading: "Open and closed loops",
          paragraphs: [
            "Most fixed-VU tools run closed models: each virtual user finishes a request, waits, and issues the next, so arrival rate falls when latency rises — the system under test gets a break exactly when it is struggling. Real traffic is an open model: users keep arriving at a rate that ignores your latency. k6's arrival-rate executors and autocannon's rate mode let you hold arrivals constant, which is the honest way to find a collapse point.",
            "Add think time or you are testing a bot farm. Real users pause between actions — reading, scrolling, deciding — which spreads arrivals and keeps RPS claims honest. A scenario with no pacing can turn fifty users into thousands of requests per second on a fast endpoint and then report a capacity number no human population would produce. Model the pause, then compare your synthetic arrival rate against production's per-session rate as a sanity check.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Throughput stopped rising?",
        caption: "When throughput plateaus, something saturated — adding users only makes the queue longer.",
        start: "Throughput stopped rising",
        branches: [
          {
            label: "CPU pegged on app instances",
            outcome: "Scale out the app tier",
            good: true,
          },
          {
            label: "DB pool waits climbing",
            outcome: "Widen the pool, tune query",
            good: true,
          },
          {
            label: "Downstream rate-limiting you",
            outcome: "Cache and back off",
            good: true,
          },
          {
            label: "Keep adding virtual users",
            outcome: "Latency climbs, no gain",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Same endpoint, two models: connections held versus arrivals per second — the second one is closer to reality.",
        code: [
          "# Closed model: hold 50 connections, see what falls out",
          "npx autocannon -c 50 -d 30 https://api.example.com/orders",
          "",
          "# Open model: hold arrivals at 500 req/s regardless of latency",
          "npx autocannon -c 100 -d 30 -r 500 https://api.example.com/orders",
          "",
          "# Plot throughput and latency against load on one chart.",
          "# Where they stop moving together — that is your knee.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Reporting virtual user count as the system's capacity.",
          fix: "Capacity is requests per second at a latency SLO; VUs are an input, RPS at the knee is the output.",
        },
        {
          mistake: "Sizing pools from a formula instead of measured wait time.",
          fix: "Chart pool waits under load and tune until waits sit near zero at target throughput, then document the number.",
        },
        {
          mistake: "Adding concurrency to a saturated system to push through.",
          fix: "Past the knee, added concurrency becomes queue depth. Fix the saturated resource or add capacity.",
        },
        {
          mistake: "Omitting think time, then bragging about impossible RPS.",
          fix: "Add realistic pacing and compare synthetic arrival rates against production per-session rates as a sanity check.",
        },
      ],
      fieldChecklist: [
        "I can compute in-flight concurrency from RPS and latency with Little's Law on a whiteboard.",
        "My scenarios use arrival-rate pacing or honest think time, not just looping VUs.",
        "I know the knee of my service: the RPS where latency stops being flat.",
        "Pool sizes for HTTP clients and database connections are measured under load, then documented.",
        "I can name the serial fraction of my hottest request path — the part extra cores cannot parallelize.",
        "My capacity doc states RPS at SLO, the instance count that delivered it, and the date.",
      ],
      keyTerms: [
        {
          term: "Throughput",
          definition:
            "Completed requests or useful work per second; the y-axis that plateaus when something saturates.",
        },
        {
          term: "Concurrency",
          definition:
            "Requests in flight at the same instant; each one holds memory, file descriptors and often a database connection.",
        },
        {
          term: "Little's Law",
          definition:
            "L = λ × W — average concurrency equals arrival rate times average time in system; the arithmetic behind every pool-sizing decision.",
        },
        {
          term: "Amdahl's law",
          definition:
            "The speedup limit imposed by the serial fraction of work: ten percent serial means no parallelism ever buys more than ten times total speedup.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain Little's Law and how you have actually used it.",
          a: "L equals lambda times W: average concurrency is arrival rate times time in system. I use it for pool math. If the roadmap wants 2,000 requests per second at 200 milliseconds, that is 400 requests in flight — which means HTTP client pools, database pools and thread pools each need to absorb 400 concurrent acquisitions across the fleet. Teams size pools from folklore and rediscover the law from a pool-wait dashboard at 3 a.m. The arithmetic is one line; run it before the launch.",
        },
        {
          q: "Throughput plateaus no matter how many VUs you add. Walk me through your investigation.",
          a: "First I stop adding users — past the knee, extra concurrency just deepens the queue. Then I read the resource timeline from the run: which ceiling was hit while others held headroom? CPU per instance, pool wait, database active sessions, disk await, load balancer connections. Usually one resource saturated. Then Amdahl's Law: check for a serial fraction — a global lock, a single-writer table — that caps speedup regardless of parallelism. Fix that resource, re-run the identical scenario, and find the next queue.",
        },
        {
          q: "Why can fixed-VU load tests overstate your capacity?",
          a: "Because closed loops back off when the system slows: each virtual user waits for its response before the next request, so arrival rate drops exactly when latency rises. The system under test gets relief in its worst moment, and the reported RPS describes a self-throttling client, not real traffic. Arrival-rate executors — k6's constant-arrival, autocannon's rate mode — hold arrivals constant and reveal the true collapse point. Add think time or you are measuring a bot farm.",
        },
      ],
      quiz: [
        {
          question: "Little's Law states L = λ × W. What is W?",
          options: [
            "Worker thread count",
            "Average time a unit spends in the system",
            "Watts of server power",
            "Wait events per second",
          ],
          answerIndex: 1,
          explanation:
            "W is the average time a unit spends in the system — queue plus service. The law ties concurrency to arrival rate and duration, which is exactly the arithmetic pool sizing requires.",
        },
        {
          question: "What happens when you add virtual users past the knee?",
          options: [
            "Throughput keeps rising linearly",
            "Latency falls because more users share the work",
            "Throughput plateaus and latency climbs",
            "Error rate drops to zero",
          ],
          answerIndex: 2,
          explanation:
            "At the knee the first resource saturates. Extra arrivals join a queue instead of getting service, so throughput plateaus while latency climbs hyperbolically — every new user makes every existing request slower.",
        },
        {
          question:
            "Throughput stops rising at 800 RPS. DB pool wait time is climbing while CPU idles at 40 percent. What is the bottleneck?",
          options: [
            "The database connection pool",
            "CPU saturation",
            "Client bandwidth",
            "The load generator",
          ],
          answerIndex: 0,
          explanation:
            "Pool wait rising while CPU idles means requests are queued for a connection, not compute. The saturated resource defines the bottleneck; widening the pool or fixing the query comes before any scaling.",
        },
      ],
    },
    {
      number: 6,
      title: "Bottleneck Hunting",
      summary:
        "Every system has exactly one bottleneck at a time. Fix it, the next one appears. The load test is how you find them in order.",
      keyIdea:
        "Measure CPU, memory, I/O, network, DB pool, connection limits per layer during the test. The first to saturate is your bottleneck.",
      deepDive: [
        {
          heading: "The queue is always somewhere",
          paragraphs: [
            "At any instant a loaded system has exactly one dominant constraint; the rest of the path is waiting for it. The queue might be the kernel accept backlog, the worker thread pool, the database connection pool, a row lock, or a disk controller. Requests do not disappear when a resource is busy — they wait, and the wait is your latency. Bottleneck hunting is the discipline of finding which queue is longest at each load level and fixing that one first.",
            "Find the queue by watching per-resource utilization during a stepwise run: CPU per instance, memory, disk IOPS and await, network throughput, database active sessions and wait events, pool wait time, load balancer connection counts. The first resource to hit its ceiling while others sit below eighty percent is your bottleneck. One-second granularity matters; a sixty-second average will average away the exact spike that saturated the disk during your checkpoint.",
          ],
        },
        {
          heading: "Per tier, not the whole",
          paragraphs: [
            "Aggregate dashboards hide skew. One hot shard, one busy worker, one noisy neighbor can own the bottleneck while fleet-average CPU shows a comfortable forty percent. Break every metric down per instance, per pod, per database node, per partition. Skew itself is a finding: it means the traffic is not distributing, and no amount of horizontal scaling fixes a hash that sends half the users to one box.",
            "In practice the database usually wins the title. Watch pg_stat_activity wait events live, pg_stat_statements for the top queries by total time, pool wait as its own metric, and replica lag under write load. A sudden multiplication of queries per request — the N+1 pattern — shows up as query QPS rising faster than request RPS. Cache hit ratios belong on the same screen: a five-point drop in hit rate can look identical to an under-provisioned database from the outside.",
          ],
        },
        {
          heading: "One variable, then re-run",
          paragraphs: [
            "The method is strict: change one thing, re-run the identical scenario, compare p95, p99, throughput and the resource ceilings. Change five things and you have five explanations and no attribution. Keep a bottleneck ledger — date, hypothesis, change, run link, result, next bottleneck revealed — because the queue always moves somewhere else when you fix the current one, and the ledger is how the next incident starts informed instead of blind.",
            "Expect the baton pass. Fix CPU with an index, and the connection pool saturates next. Widen the pool, and lock contention surfaces. Relieve the lock, and GC pauses appear in the tail. This is not failure; it is the system becoming honest one layer at a time. Teams that stop after the first fix get a second spike with a new bottleneck and no map. Teams that keep iterating eventually run out of cheap bottlenecks — that is what a real capacity plan looks like.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The bottleneck hunting loop",
        caption: "One loop, one variable, one honest re-run — bottlenecks are found in order, not in bulk.",
        stages: [
          { label: "Run baseline", note: "same shape as production" },
          { label: "Watch resources", note: "one-second granularity" },
          { label: "Find saturation", note: "first ceiling reached wins" },
          { label: "Fix one thing", note: "a single variable per run" },
          { label: "Re-run, compare", note: "did p99 actually move" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Bottleneck hunting is watching the right counters once per second while the load runs.",
        code: [
          "# Terminal 1: the load",
          "k6 run --stage 2m:400 --stage 10m:400 scenarios/checkout.js",
          "",
          "# Terminal 2: one line per second, per tier",
          "vmstat 1                  # app: run queue length, io wait",
          "iostat -x 1               # disk: percent utilization, await",
          "pg_top                    # db: live queries and wait states",
          "",
          "# Which state dominates? Count sessions by wait state:",
          "psql -c 'select state, count(*) from pg_stat_activity group by 1'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Running the load test with dashboards closed, reading only the summary.",
          fix: "Watch CPU, disk, pools and DB waits live at one-second granularity; the bottleneck story is in the timeline.",
        },
        {
          mistake: "Changing five things between runs because everything seemed slow.",
          fix: "One variable per iteration, identical scenario, re-run and compare percentiles — attribution requires isolation.",
        },
        {
          mistake: "Optimizing the endpoint with the scariest number on the dashboard.",
          fix: "Chase the resource that saturated first at the knee; endpoint-level fear without saturation context misleads.",
        },
        {
          mistake: "Sprinkling caches everywhere after the first bottleneck.",
          fix: "Fix the saturated resource in order; caches add invalidation load and move queues rather than delete them.",
        },
      ],
      fieldChecklist: [
        "I have a one-second-granularity dashboard covering CPU, memory, disk, network, pool and DB waits.",
        "During a run I can say, out loud, which resource saturates first.",
        "My bottleneck ledger lists each fix, the run that proved it, and the next bottleneck revealed.",
        "I change one variable per test iteration — no shotgun tuning.",
        "I can capture pg_stat_statements top queries and pool wait time during a run.",
        "After each fix I re-run the identical scenario and compare p95, p99 and throughput.",
      ],
      keyTerms: [
        {
          term: "Bottleneck",
          definition:
            "The one resource currently limiting throughput; fixing it moves the queue to the next resource, never to zero.",
        },
        {
          term: "Utilization",
          definition:
            "Fraction of a resource's capacity in use; near 100 percent, extra load turns into queueing instead of work.",
        },
        {
          term: "Wait event",
          definition:
            "What a request or a database session is currently blocked on — CPU, IO, lock, or pool; the label that names your bottleneck.",
        },
        {
          term: "N+1",
          definition:
            "One query plus one query per item in a list; invisible at one user, an RPS multiplier at load.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you find a bottleneck in a system you have never seen?",
          a: "Run a stepwise load test with per-resource metrics at one-second granularity: CPU per instance, memory, disk IOPS and await, network, pool wait, database sessions and wait events. The first resource to hit its ceiling while others hold headroom is the bottleneck — the queue is always somewhere, and utilization names it. Then change one variable, re-run the identical scenario, and repeat. Keep a ledger; the queue always moves when you fix it.",
        },
        {
          q: "The database is slow. Where do you look first?",
          a: "pg_stat_statements for queries ranked by total time, pg_stat_activity wait events for what sessions are blocked on, and pool wait as its own metric — CPU can idle while everyone queues for a connection. Then compare query QPS to request RPS: query volume rising faster is the N+1 signature. Cache hit ratio belongs on the same screen; a five-point drop looks identical to an under-provisioned database from the outside.",
        },
        {
          q: "Tell me about a bottleneck that moved when you fixed it.",
          a: "We chased p99 spikes to CPU, added an index, and CPU fell — then pool wait appeared: the faster path raised completion rates and exposed connection starvation. Widening the pool surfaced lock contention on a hot counter row; batching the increments surfaced GC churn from large payloads. Three rounds, one variable each, all documented in a ledger. That is normal — systems become honest one layer at a time.",
        },
      ],
      quiz: [
        {
          question: "During a stepwise load run, which resource is the bottleneck?",
          options: [
            "The one with the prettiest dashboard",
            "The first to hit its ceiling while others still have headroom",
            "The most expensive instance",
            "The one with the highest memory always",
          ],
          answerIndex: 1,
          explanation:
            "The bottleneck is the queue — the first resource with no headroom left while others sit below their ceilings. Utilization is how a queue makes itself visible; the ceiling is how you catch it.",
        },
        {
          question: "Why watch metrics at one-second granularity?",
          options: [
            "Longer averages smooth away the exact spike that saturated a resource",
            "One-second data is cheaper",
            "Dashboards require it",
            "It reduces metric cardinality",
          ],
          answerIndex: 0,
          explanation:
            "A sixty-second average averages away the exact spike that saturated a disk during a checkpoint or a pool during a burst. Saturation is an event, and events need event-sized buckets.",
        },
        {
          question:
            "You fixed CPU with an index; now the DB pool saturates. What does this pattern tell you?",
          options: [
            "The fix was wrong",
            "Load testing is unreliable",
            "The queue moved to the next constraint — keep iterating, one fix per run",
            "The pool size was always the only problem",
          ],
          answerIndex: 2,
          explanation:
            "That is theory of constraints in the wild: fixing the binding constraint moves the queue to the next one. It is progress, not failure — the system becomes honest one layer at a time.",
        },
      ],
    },
    {
      number: 7,
      title: "Profiling Under Load",
      summary:
        "A profiler attached during a load test is the fastest way to find the line of code that owns your latency.",
      keyIdea:
        "Py-spy, perf, async-profiler — sampling profilers that work in production, not just labs.",
      deepDive: [
        {
          heading: "Profile where the load is",
          paragraphs: [
            "Profiling idle code is astrology — hot paths only get hot under concurrency, cache pressure and real data volumes. Attach a sampling profiler while the load test holds the system at its knee. The pairing is well established: py-spy for Python, perf and async-profiler for the JVM, the inspector's CPU profile or 0x for Node, pprof for Go. Sampling costs a fraction of a percent of throughput, which is why it is tolerated in loaded and even production environments.",
            "Read the flame graph like a map: width is share of samples, depth is the call path, and a wide plateau is where time actually goes. The usual suspects are embarrassingly concrete — JSON re-serialization, regex backtracking, allocation churn feeding the GC, a lock everyone holds. Continuous profilers such as Pyroscope or Parca keep rolling flame graphs for production, which means the answer to 'what got slow' is a link, not a rerun.",
          ],
        },
        {
          heading: "CPU time is half the story",
          paragraphs: [
            "An on-CPU flame graph shows where threads burn processor cycles; it is blind to where threads wait. Much of a tail latency budget lives off-CPU: blocked on a row lock, waiting for a pool connection, sitting in a socket receive queue, waiting on disk. If your p99 is 900 milliseconds and the on-CPU flame accounts for fifty, the investigation is not CPU — it is wait analysis. Look at lock wait graphs, pool wait metrics and database wait events before optimizing code nobody is waiting on.",
            "Sampling beats instrumentation under load for exactly the reason instrumentation feels better: it records full call counts and timing per function, but the overhead distorts the timing you came to measure. A profiler that adds thirty percent overhead will happily invent a bottleneck. Reserve instrumenting profilers for unit-scale experiments and traces; bring sampling profilers — statistical, cheap, stack-accurate enough — to the loaded system, and trust the distribution they draw.",
          ],
        },
        {
          heading: "From flame to fix, with proof",
          paragraphs: [
            "The translation from flame graph to fix is usually short once you see it. A wide bar on per-row serialization becomes a batched query. A regex bar becomes a precompiled or restructured pattern. A GC bar becomes an allocation diet — reuse buffers, trim payloads, stream instead of materializing. A lock bar becomes finer-grained locking or sharded counters. Each fix is one line of intent, which keeps the re-run honest: one change, one measurement, one verdict.",
            "Close the loop with artifacts. Capture the before flame, apply the fix, re-run the identical load scenario, capture the after flame, and put all three plus the percentile delta into the pull request. This habit does two things: it proves the fix was real rather than a lucky run, and it builds a library of maps showing where this codebase's time goes — which is exactly what the next performance incident will ask for.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The profiling loop",
        caption: "Profiling under load turns a hunch into a flame graph — the widest bar is a to-do list.",
        steps: [
          { label: "Reproduce", note: "load at the knee" },
          { label: "Sample", note: "attach a sampling profiler" },
          { label: "Read flames", note: "widest bar owns the time" },
          { label: "Fix one hotspot", note: "algorithm, index, lock" },
          { label: "Re-measure", note: "did the flame shrink" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Sampling profilers attach to the live process during the run — sixty seconds of flame beats an hour of guessing.",
        code: [
          "# Python: 60 seconds of samples from the running service",
          "py-spy record --pid 4242 --duration 60 --format speedscope -o flame.json",
          "",
          "# JVM: async-profiler writes an interactive flame graph",
          "./profiler.sh -d 60 -f flame.html $(pgrep -f order-service)",
          "",
          "# Node: CPU profile opens directly in Chrome DevTools",
          "node --cpu-prof --cpu-prof-dir ./profiles dist/server.js",
          "",
          "# Go: 30 seconds from the live pprof endpoint",
          "curl -s 'https://api.example.com/debug/pprof/profile?seconds=30' -o cpu.pb.gz",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Profiling on a laptop with one user and shipping the conclusions.",
          fix: "Attach the profiler during a real load run; hot paths only get hot under concurrency and cache pressure.",
        },
        {
          mistake: "Reading only on-CPU flames and missing blocked threads.",
          fix: "Check off-CPU and wall-time profiles too — most tail latency is waiting on locks, pools and I/O.",
        },
        {
          mistake: "Running an instrumenting profiler in a loaded environment.",
          fix: "Sampling profilers — py-spy, perf, async-profiler — cost fractions of a percent; instrumentation distorts the latency you measure.",
        },
        {
          mistake: "Shipping a hotspot fix without re-running the same load.",
          fix: "Re-run the identical scenario and attach before and after flames plus the percentile delta to the PR.",
        },
      ],
      fieldChecklist: [
        "I know the sampling profiler for each runtime in my stack and the exact command to attach it.",
        "I have captured a flame graph while the service sat at its knee, not while idle.",
        "I can read a flame graph: width, depth, and where the widest plateau starts.",
        "Continuous profiling — Pyroscope, Parca, or similar — runs in production with low overhead.",
        "Every performance fix PR carries before and after flames plus the percentile delta.",
        "I check off-CPU time — locks, IO, pool waits — before blaming the CPU.",
      ],
      keyTerms: [
        {
          term: "Sampling profiler",
          definition:
            "A profiler that records call stacks at intervals; low overhead and statistically valid under load — py-spy, perf, async-profiler.",
        },
        {
          term: "Flame graph",
          definition:
            "A visualization of sampled stacks: width is time share, depth is call path; the widest bar is where the time actually goes.",
        },
        {
          term: "Off-CPU time",
          definition:
            "Time threads spend blocked on locks, IO or pool waits; invisible to on-CPU profiles but often the whole tail story.",
        },
        {
          term: "Continuous profiler",
          definition:
            "An always-on production profiler producing rolling flame graphs — Pyroscope, Parca, Datadog Continuous Profiler.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you profile a service that is slow only under load?",
          a: "Attach a sampling profiler while a load test holds the service at its knee: py-spy for Python, perf or async-profiler for the JVM, the inspector or 0x for Node, pprof for Go. Sampling overhead is a fraction of a percent, so measurements stay honest. Read flame graphs for the widest plateaus, and check off-CPU time separately — much of a tail is waiting on locks, pools and disk, which on-CPU flames never show. Fix one hotspot, re-run, compare flames.",
        },
        {
          q: "What can a flame graph tell you that a trace cannot?",
          a: "Where the time goes across the whole population, not one request's path. A trace explains a single slow request end to end; a flame graph aggregates thousands of samples and shows the code that owns the cost — the JSON serializer called on every request, the regex, the allocation churn feeding GC. Traces are better for answering 'what happened to this request'; flames answer 'where does the machine actually spend its time under load'. I use both: traces to attribute, flames to fix.",
        },
        {
          q: "Describe a performance fix you found by profiling.",
          a: "A p99 regression under load showed a wide plateau in a serialization function — every list endpoint re-encoded unchanged product documents per request. We cached the encoded form keyed by version, and the flame bar collapsed; p99 fell by more than half at the same load. The PR carried before and after flames plus percentile deltas. The habit that made it work: profile at load, change one thing, re-run the identical scenario, keep the evidence in the review.",
        },
      ],
      quiz: [
        {
          question: "Why profile during a load test rather than at idle?",
          options: [
            "The profiler needs network traffic to run",
            "Hot paths only get hot under concurrency and cache pressure",
            "Idle profiling corrupts memory",
            "Flame graphs require HTTPS",
          ],
          answerIndex: 1,
          explanation:
            "Hot paths only get hot under concurrency, cache pressure and real data volumes. Idle profiles are astrology; the load test holds the system at the knee where the code that owns latency actually runs.",
        },
        {
          question: "Your on-CPU flame accounts for 50 ms of a 900 ms p99. Where is the rest likely hiding?",
          options: [
            "In compiler optimizations",
            "In the load generator",
            "Off-CPU: locks, pool waits, disk and network waits",
            "Nowhere — the measurement is wrong",
          ],
          answerIndex: 2,
          explanation:
            "On-CPU flames show burning; they are blind to waiting. Locks, pool waits, socket queues and disk waits live off-CPU, and off-CPU time is where most of a nine-hundred-millisecond tail usually hides.",
        },
        {
          question: "A fix shrank the widest flame bar. What proves it helped?",
          options: [
            "The code looks faster",
            "The profiler was removed",
            "Unit tests pass",
            "Re-running the identical load scenario shows smaller flames and better percentiles",
          ],
          answerIndex: 3,
          explanation:
            "Code review feelings are not evidence. The identical scenario, re-run, with before and after flames plus the percentile delta proves the fix did what it claimed — and builds the library the next incident needs.",
        },
      ],
    },
    {
      number: 8,
      title: "Saturation Points: CPU, I/O, Connection Pools",
      summary:
        "Every resource has a saturation point. Past it, throughput plateaus and latency climbs. Knowing each one is the difference between scaling and hoping.",
      keyIdea:
        "Map saturation per tier: CPU at N cores, IOPS at the disk's rated limit, DB pool at max_connections, LB at LCU ceiling.",
      deepDive: [
        {
          heading: "CPU saturates loudly, memory does not",
          paragraphs: [
            "CPU saturation is the friendly failure: latency climbs smoothly, the run queue lengthens, and in containers the throttling counter tells you exactly when cgroup limits kicked in. Watch CPU per instance plus run queue or throttled seconds, and horizontal scaling works if the service is stateless. Memory is the opposite temperament: past the limit there is no slow lane, just allocation failures, OOM kills, or swap thrash that turns every request into an I/O operation. Soak tests exist to catch memory's slope before production catches the kill.",
            "Runtime GC behavior sits between the two. JVM and V8 heaps degrade gracefully for a while — longer pauses, more frequent collections — and then fall off a cliff as the heap fills. Chart GC pause time and collection frequency during soaks, and treat a rising pause trend as a finding even when p50 looks healthy. Allocation churn that was invisible at one user becomes the dominant CPU cost at a thousand.",
          ],
        },
        {
          heading: "I/O and pools saturate quietly",
          paragraphs: [
            "Disks and volumes saturate at rated limits — provisioned IOPS, throughput caps — and the symptom is rising await time while CPU stays idle. Database workloads feel it first: WAL fsync latency, checkpoint spikes, vacuum and backup jobs competing for the same volume. Network has its own ceilings in bandwidth and packet rate, and they arrive as retransmit storms and queue drops rather than clean slowdowns. iostat, cloud volume metrics and retransmit counters will all tell you before the users do.",
            "Connection pools are the silent saturator: CPU can be comfortable, disk quiet, and latency still triples because every request is waiting for a connection. Pool wait time deserves its own metric on the main dashboard. And pools interact with the database ceiling through simple multiplication — instances times pool size plus operational headroom must stay under max_connections, or the whole fleet times out together on deploy morning. When instance count grows, the answer is a pooler like PgBouncer, not a bigger server.",
          ],
        },
        {
          heading: "Write the map down",
          paragraphs: [
            "Build a saturation map: one line per tier, each with its measured ceiling. Load balancer: connection and LCU limits. App tier: CPU cores and memory per instance, measured at the knee. Pools: size times instances. Database: max_connections, IOPS, and the write throughput at which replication falls behind. Disk: rated versus observed IOPS. Measured, dated, and stored beside the runbook — a ceiling that exists only in someone's memory is a rumor wearing a badge.",
            "The map turns capacity planning into arithmetic. At two times traffic, which ceiling do you hit first? At five? The answer orders your roadmap: add replicas, widen pools, move hot data to faster disks, split a tenant onto its own shard. Re-measure after every infrastructure change, because ceilings move — an engine upgrade lifts one, a new region lowers another — and a stale map is how teams scale the tier that was never the problem.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Know each tier's ceiling",
        caption: "Each tier saturates at a different ceiling — capacity is the minimum of them all.",
        layers: [
          { label: "Load balancer", note: "LCU and connection caps" },
          { label: "App instances", note: "cores, memory, GC pauses" },
          { label: "Client pools", note: "pool size, socket fds" },
          { label: "Database", note: "max_connections, locks" },
          { label: "Disks and network", note: "rated IOPS and throughput" },
        ],
      },
      codeExample: {
        language: "ts",
        caption: "Pool math is a multiplication you can do before the incident does it for you.",
        code: [
          "// Database connection math — do it before the deploy does it for you",
          "const instances = 12;",
          "const poolPerInstance = 10;       // app-side pg pool max",
          "const opsHeadroom = 20;           // migrations, psql sessions, dashboards",
          "const serverMax = 400;            // max_connections on the primary",
          "",
          "const required = instances * poolPerInstance + opsHeadroom;",
          "const headroomPct = ((serverMax - required) / serverMax) * 100;",
          "",
          "console.log(`required: ${required}, headroom: ${headroomPct.toFixed(1)}%`);",
          "// 140 required, 65% headroom — safe at 12 instances.",
          "// At 28 instances the math goes negative: add PgBouncer, not memory.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Scaling app instances while the database connection ceiling stays fixed.",
          fix: "Instances times pool size plus ops headroom must stay under max_connections — add PgBouncer when instance count grows.",
        },
        {
          mistake: "Assuming disk limits are cloud problems that never apply to you.",
          fix: "Read the volume's rated IOPS and throughput, then verify with iostat during a soak — climbing await is the tell.",
        },
        {
          mistake: "Treating memory like CPU and expecting graceful slowdown.",
          fix: "Memory fails hard: OOM kills and swap thrash. Soak tests graph RSS and GC pauses to catch the slope.",
        },
        {
          mistake: "Recording saturation points once, never after infra changes.",
          fix: "Re-measure after every resize, upgrade or pool change; a saturation map is dated evidence, not folklore.",
        },
      ],
      fieldChecklist: [
        "I have a saturation map per tier: CPU, memory, disk IOPS, network, pools, database connections.",
        "The numbers in the map are measured from load runs, with the date next to each.",
        "I can state which ceiling my service hits first at 2x, 5x and 10x current traffic.",
        "Pool wait time is a metric I can chart, not a guess.",
        "Connection math — instances times pool plus headroom versus max_connections — is documented and green.",
        "Container CPU throttling and GC pause metrics are on my main dashboard.",
      ],
      keyTerms: [
        {
          term: "Saturation point",
          definition:
            "The load level at which a resource hits its ceiling; beyond it throughput plateaus and latency grows without bound.",
        },
        {
          term: "IOPS",
          definition:
            "Input/output operations per second a disk can sustain; volumes cap it, and saturated disks show rising await times.",
        },
        {
          term: "Connection pool",
          definition:
            "A bounded set of reusable database connections; when all are busy, requests queue — pool wait time is the saturation signal.",
        },
        {
          term: "OOM kill",
          definition:
            "The kernel terminating a process for exceeding memory limits; memory saturation's abrupt, graceless failure mode.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you find the saturation point of a resource?",
          a: "Push load in steps and watch that resource against its ceiling while everything else holds headroom. CPU: run queue and container throttling counters. Disk: rated IOPS and throughput versus observed, with await climbing. Pools: wait time rising. Database: active sessions against max_connections, replication falling behind at write bursts. Record each ceiling with a date in a saturation map, and re-measure after infrastructure changes — a stale map is how teams scale the tier that was never the problem.",
        },
        {
          q: "Latency spikes after scaling from 10 to 14 instances, CPU mostly idle. What is happening?",
          a: "Almost certainly connection exhaustion. Fourteen instances times fifteen pool connections plus operational headroom is 230 sessions against a max_connections of 200 — deploy morning, every instance reconnects at once and the database rejects or queues them. The tell is latency climbing with comfortable CPU. The fix is pool math and a pooler like PgBouncer in front, not a bigger server; and the saturation map should have predicted this multiplication before the deploy did.",
        },
        {
          q: "How do you plan capacity for a five-times traffic event?",
          a: "From the saturation map, as arithmetic. Order the ceilings by which one the load hits first at each multiple: LB connection and LCU limits, app CPU and memory, pool and connection ceilings, database IOPS and write throughput, disk. Scale the first bottleneck, re-measure, repeat — each round either buys headroom or names the next constraint. Then validate with a spike and a soak at the target multiple, because autoscaler reaction time and memory slopes are part of the answer, not footnotes.",
        },
      ],
      quiz: [
        {
          question: "How does memory saturation fail, compared to CPU?",
          options: [
            "More gracefully, with warnings",
            "Abruptly: OOM kills, swap thrash, allocation failures",
            "It never fails under load",
            "Only GC gets slower forever",
          ],
          answerIndex: 1,
          explanation:
            "CPU degrades smoothly — queues grow, latency climbs — and containers even report throttling. Memory has no slow lane: allocation failures, swap thrash and OOM kills arrive abruptly, which is why soaks chart its slope.",
        },
        {
          question: "Latency triples with comfortable CPU and quiet disk. Which saturation do you check first?",
          options: [
            "Network bandwidth",
            "Disk IOPS",
            "Connection pool wait",
            "Number of deployed functions",
          ],
          answerIndex: 2,
          explanation:
            "That combination — latency up, CPU comfortable, disk quiet — is the signature of connection pool saturation. Requests are queued for a connection, not for compute; pool wait time names it directly.",
        },
        {
          question:
            "You scale from 10 to 14 app instances and everything times out on deploy. max_connections is 200, pool per instance 15, ops headroom 20. What happened?",
          options: [
            "The database got slower by itself",
            "DNS failed",
            "The load balancer hit its LCU limit",
            "14 x 15 + 20 = 230 exceeded max_connections — connection exhaustion",
          ],
          answerIndex: 3,
          explanation:
            "Instances times pool size plus operational headroom is 230 sessions against a 200 ceiling. The multiplication exceeded max_connections at deploy, when every instance reconnects at once — pool math, not mystery.",
        },
      ],
    },
    {
      number: 9,
      title: "Realistic Workload Modeling",
      summary:
        "A load test is only as good as its scenario. Testing 'one endpoint at max QPS' tells you nothing about real user behavior.",
      keyIdea:
        "Replay production traffic shapes. Mix reads and writes at the real ratio. Include the long tail of endpoints users actually hit.",
      deepDive: [
        {
          heading: "The one-endpoint trap",
          paragraphs: [
            "Hammering a single endpoint at maximum rate tests a cache, not a system. Real traffic is a distribution: a handful of hot routes, a long tail of rare ones, a read-write ratio that determines whether the database or the cache layer is actually working, payloads of wildly different sizes, and a mix of authenticated and anonymous requests that changes caching behavior entirely. A capacity claim is only valid for the mix you tested — a number earned by one endpoint describes one endpoint.",
            "Build the mix from evidence. Access logs give you route shares and payload sizes; analytics gives you think times and journey shapes; the schema gives you the real write ratio. Encode the shares as scenario weights in k6 or thread group proportions in JMeter, and refresh them quarterly — product changes move traffic, and a stale mix is a slow lie. The report should name the mix it tested, or the number means nothing next month.",
          ],
        },
        {
          heading: "State and data realism",
          paragraphs: [
            "Test users must exist. Seed accounts with sessions, carts, permissions and history, or your run measures the error path: authentication short-circuits, carts 404, and the error rate tells you about your fixtures rather than your capacity. Data volume is the same discipline at larger scale — a table with ten thousand rows plans queries differently than one with ten million, from index depth to whether the planner chooses a scan. Populate to production scale before trusting any percentile.",
            "Cache state is its own axis. A cold cache measures deploy morning; a warm cache measures the steady state where most of the year is spent. Run both, separately, and label them. Track the cache hit ratio during every run — if synthetic traffic cannot reproduce the production hit ratio, the test is exercising a different system than the one users experience, and the fix is better modeling, not a shrug.",
          ],
        },
        {
          heading: "Journeys, not endpoints",
          paragraphs: [
            "Users do not call endpoints; they travel journeys — browse, open a product, add to cart, check out, confirm — and each leg exercises different tiers: cache-heavy reads, session writes, payment calls, queue producers. Model journeys with weights and think time, then let the mix produce the endpoint traffic as a consequence. k6 expresses this as named scenarios with executors and weights; JMeter as thread groups with controllers. The report then says something real: 'checkout at peak holds p99 under 800 milliseconds.'",
            "Then include the awkward traffic that shares the same resources: background jobs, webhooks, health checks, admin tools, bot crawlers, and the retry behavior of your own clients. None of it is glamorous, all of it runs at 3 a.m., and all of it competes for the same database, pool and disk. A low-weight background scenario in every run keeps the test honest about the system you actually operate, not the one the architecture diagram advertises.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Weight scenarios like production",
        caption: "A real workload is a mix of quadrants — weight your scenarios, not just your hot path.",
        axes: { x: "How often users hit it", y: "How heavy each request is" },
        quadrants: [
          { label: "Watch it", note: "rare but heavy — exports" },
          { label: "Model first", note: "checkout, search at peak" },
          { label: "Sample it", note: "the long tail, cheap" },
          { label: "Volume baseline", note: "feed, listings, health" },
        ],
      },
      pitfalls: [
        {
          mistake: "Hammering one endpoint at max QPS and reporting system capacity.",
          fix: "Model the production route mix with realistic weights; capacity claims are only valid for the mix you tested.",
        },
        {
          mistake: "Running every VU as a fresh anonymous user with an empty cache.",
          fix: "Seed sessions, cookies and auth state; test warm-cache steady state and cold-cache deploy morning separately.",
        },
        {
          mistake: "Pointing the test at tables with a hundred rows.",
          fix: "Populate to production scale — plans, buffers and vacuum behave differently at ten million rows.",
        },
        {
          mistake: "Ignoring background traffic from jobs, webhooks and admin tools.",
          fix: "Add a low-weight background scenario; shared resources feel it, and it runs at 3 a.m. too.",
        },
      ],
      fieldChecklist: [
        "My scenario weights come from production access logs, not from what is easy to script.",
        "The read/write ratio in my tests matches the measured production ratio.",
        "Test data is generated at production scale — row counts, payload sizes, tenant spread.",
        "I run both cold-cache and warm-cache scenarios and can tell them apart in the report.",
        "Journeys — browse to checkout — are modeled with think time, not single endpoints.",
        "Background traffic — jobs, webhooks, health checks — appears in the mix.",
      ],
      keyTerms: [
        {
          term: "Workload mix",
          definition:
            "The weighted set of requests, journeys and background tasks a system actually serves; the shape your scenarios must imitate.",
        },
        {
          term: "Think time",
          definition:
            "The realistic pause between user actions; without it, synthetic traffic is a burst storm no human ever produced.",
        },
        {
          term: "Warm cache",
          definition:
            "Steady-state behavior after caches have filled; cold-cache tests measure the deploy-morning experience instead.",
        },
        {
          term: "Data realism",
          definition:
            "Testing against production-scale row counts, payload sizes and distributions so query plans and cache behavior match reality.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you make a load test realistic?",
          a: "Model the traffic you actually serve: route weights from access logs, the real read-write ratio, payload size distribution, journeys with think time rather than single endpoints, seeded users with sessions and permissions, and data volumes at production scale. Add the background layer — jobs, webhooks, health checks. Then verify realism: if synthetic cache hit ratios and per-endpoint shares do not match production, fix the modeling before trusting any percentile the run produces.",
        },
        {
          q: "What happens when load tests use unrealistic data volumes?",
          a: "The numbers describe a different system. With a thousand rows, every index fits in memory and the planner picks index scans; at ten million rows, plans change, buffer hit ratios drop, and vacuum pressure appears. Autovacuum lag, bloat and index depth are load findings that toy datasets cannot reproduce. Populate to production scale — sampled and anonymized if needed — before claiming any percentile, because the planner's behavior at scale is the behavior users experience.",
        },
        {
          q: "How do you model traffic you cannot predict, like a viral spike?",
          a: "Two layers. The soakable base: your known peak mix, which covers the ordinary bad day. The spike layer: an arrival-rate scenario that jumps to a chosen multiple — five, ten, twenty times — to find where the system stops absorbing and starts queueing, and how fast autoscaling actually reacts. You cannot predict the viral day, but you can know the multiple your system survives and the failure mode past it. That number is what the launch plan is built on.",
        },
      ],
      quiz: [
        {
          question: "What is wrong with testing 'one endpoint at max QPS'?",
          options: [
            "It is impossible to script",
            "Capacity claims are only valid for the traffic mix you actually tested",
            "k6 cannot hit one endpoint",
            "It always passes",
          ],
          answerIndex: 1,
          explanation:
            "A capacity claim is only valid for the mix that produced it. One endpoint tests one cache and one code path; production serves a skewed distribution whose shape decides which tier actually works hard.",
        },
        {
          question: "Why does data volume change load test results?",
          options: [
            "Bigger data needs bigger JSON",
            "Network packets grow",
            "Query plans, index depth and cache behavior differ at production-scale row counts",
            "It does not — plans are static",
          ],
          answerIndex: 2,
          explanation:
            "Query plans, index depth, buffer hit ratios and vacuum behavior all change between ten thousand and ten million rows. Testing toy data measures a database you do not run in production.",
        },
        {
          question:
            "Your warm-cache test shows p95 of 80 ms; users report seconds-long loads right after deploys. What did you skip?",
          options: [
            "A cold-cache scenario — deploys flush caches",
            "A bigger staging database",
            "More VUs",
            "A different tool",
          ],
          answerIndex: 0,
          explanation:
            "Deploys flush caches, so the morning experience is the cold-cache experience. Warm-cache numbers describe steady state only; run both, label both, and track hit ratios so synthetic traffic resembles the real thing.",
        },
      ],
    },
    {
      number: 10,
      title: "Replaying Production Traffic",
      summary:
        "The gold standard: capture real traffic (anonymized, sampled) and replay it. Your test becomes a mirror, not a guess.",
      keyIdea:
        "Capture at the edge, anonymize PII, replay at scaled-up rates to find tomorrow's bottleneck today.",
      deepDive: [
        {
          heading: "Capture where traffic enters",
          paragraphs: [
            "Capture at the edge where you see everything: access logs with latency and byte counts, a mirroring port with GoReplay, or service mesh traffic mirroring in Istio or Envoy, which copies requests to a shadow without touching user responses. Store the request line, a header subset, payload sizes and timings. The edge is the honest vantage point — by the time traffic reaches application logs, caching and fan-out have already changed its shape.",
            "Anonymize inside the pipeline, before the data lands anywhere shared. Replace emails and account identifiers with stable pseudonyms — the same user always maps to the same token, so session behavior survives — strip Authorization headers, and scrub anything a compliance review would flag. This is a legal boundary, not a nicety: captured traffic is customer data, it needs documented retention, and the sign-off belongs in writing before the first capture runs.",
          ],
        },
        {
          heading: "Replay honestly, then scale",
          paragraphs: [
            "A replay is only honest if it preserves order, session affinity, header distributions and payload mix, with sampling applied uniformly rather than by convenience. Scale by multiplying the arrival rate — GoReplay's percentage multiplier exists for exactly this — never by deleting think time, which turns journeys into bursts. Validate the mirror first: replay at one times traffic and compare percentiles against production. If your staging mirror is twenty percent off at one times, do not trust it at five.",
            "Guard the side effects. Replayed checkouts charge cards, replayed signups send emails, replayed webhooks call third parties — every downstream mutation needs a stub, a sandbox, or a big red flag in the environment. Watch the same dashboards you watch in production, and push the multiplier upward in steps: two times, five times, ten — each step either holds its percentiles or hands you the name of the next resource that will saturate at scale.",
          ],
        },
        {
          heading: "When replay is overkill",
          paragraphs: [
            "Replay is expensive: storage, anonymization pipelines, legal sign-off, a production-shaped mirror. For a straightforward API, a well-modeled synthetic mix gets you ninety percent of the insight at a fraction of the cost. Reserve full replay for the high-stakes moments — a migration, a rewrite, a merger bringing a new traffic shape, the launch where the board is watching. Proportionality is part of engineering judgment.",
            "The durable pattern is hybrid: synthetic journeys for breadth and control — you can inject failures and edge cases a real day never contained — plus replayed traffic for realism and surprise. Keep the capture-and-replay harness warm between uses, run it quarterly, and treat every replay report as a capacity data point with a date attached. The harness you maintain calmly beats the one you rebuild in a panic.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "From log to replay",
        caption: "A replay is a mirror with a volume knob — turn it up until something saturates.",
        stages: [
          { label: "Capture", note: "at the edge, full fidelity" },
          { label: "Anonymize", note: "strip PII, scrub tokens" },
          { label: "Sample", note: "keep shape, drop bulk" },
          { label: "Scale", note: "multiply the rate" },
          { label: "Replay", note: "against a staging mirror" },
          { label: "Compare", note: "validate against prod first" },
        ],
      },
      codeExample: {
        language: "bash",
        caption: "Sample, scrub, then replay at a multiplier — the log becomes the workload.",
        code: [
          "# 1. Sample every 100th request, keep the shape",
          "awk 'NR % 100 == 0' access.log > sampled.log",
          "",
          "# 2. Scrub tokens and emails before anything leaves the box",
          "sed -E 's/Bearer [A-Za-z0-9._-]+/Bearer REDACTED/g; s/[^ ]+@[^ ]+/user@example.com/g' \\",
          "  sampled.log > clean.log",
          "",
          "# 3. Replay the cleaned mix at 5x against the staging mirror",
          "gor --input-file 'clean.log|500%' --output-http https://staging.example.com",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Replaying raw production logs containing emails and bearer tokens.",
          fix: "Anonymize before replay: stable pseudonyms per user, Authorization headers stripped, documented retention, sign-off in writing.",
        },
        {
          mistake: "Replaying into a staging database ten thousand times smaller than production.",
          fix: "Match data volume and distribution first; a replay against toy data validates nothing but the happy path.",
        },
        {
          mistake: "Scaling the replay by cutting think time.",
          fix: "Multiply the arrival rate instead; shrinking pauses turns journeys into bursts and measures a system you do not run.",
        },
        {
          mistake: "Letting the replay send real emails and charge real cards.",
          fix: "Stub or sandbox every third-party side effect before the replay starts; the test should bill nobody.",
        },
      ],
      fieldChecklist: [
        "Traffic capture has explicit sign-off covering PII handling and retention.",
        "Anonymization is deterministic per user, so session behavior survives the scrub.",
        "The replay target mirrors production data volume and instance classes.",
        "I validate the mirror by comparing replayed percentiles against production percentiles.",
        "Third-party side effects — email, payments, webhooks — are stubbed or sandboxed.",
        "Replay runs on a schedule — quarterly minimum — not only before big launches.",
      ],
      keyTerms: [
        {
          term: "Traffic mirroring",
          definition:
            "Sending a copy of live requests to a shadow service at the proxy or mesh level, without affecting responses to users.",
        },
        {
          term: "Anonymization",
          definition:
            "Deterministically replacing identifying data — emails, tokens, ids — so replays keep session shape without carrying PII.",
        },
        {
          term: "GoReplay",
          definition:
            "An open-source tool that captures and replays HTTP traffic, with rate multipliers for scaled replays.",
        },
        {
          term: "Shadow environment",
          definition:
            "A production-shaped, non-user-facing copy of the stack used for replayed traffic and risky experiments.",
        },
      ],
      interviewQuestions: [
        {
          q: "When is replaying production traffic worth the cost?",
          a: "For high-stakes moments: migrations, rewrites, mergers bringing a new traffic shape, launches under executive scrutiny. Replay costs storage, an anonymization pipeline, legal sign-off and a production-shaped mirror, so for a straightforward API a well-modeled synthetic mix delivers most of the insight at a fraction of the cost. The hybrid is the durable pattern: synthetic journeys for control and failure injection, replayed traffic for realism and the surprises your imagination did not include.",
        },
        {
          q: "How do you keep PII out of a replay pipeline?",
          a: "Anonymize before the data lands anywhere shared, with sign-off in writing first. Replace emails and identifiers with stable pseudonyms — same user maps to same token, so session behavior survives — strip Authorization headers, scrub free-text fields a compliance review would flag, and document retention. Sample before storing to shrink the surface. The capture is customer data; treat the pipeline's first stage as the compliance boundary, not the last.",
        },
        {
          q: "What can a replay reveal that a synthetic scenario cannot?",
          a: "The request distribution you did not imagine: weird header combinations, session sequences that break assumptions, payload sizes from the long tail, traffic correlations between routes that share a database row. Synthetic scenarios encode what you believe about your traffic; replays encode what your traffic actually is. That gap is exactly where surprise regressions live — which is why I validate a staging mirror by comparing replayed percentiles against production before trusting any scaled run.",
        },
      ],
      quiz: [
        {
          question: "Where should you capture traffic for replay?",
          options: [
            "Inside each microservice",
            "At the edge, where the full traffic shape is visible",
            "From the database WAL",
            "From CI logs",
          ],
          answerIndex: 1,
          explanation:
            "The edge sees the true traffic shape before caching and fan-out change it. Capture there and the replay inherits real route shares, header distributions and session sequences — the shape users actually produce.",
        },
        {
          question: "How should you scale a replay to five times load?",
          options: [
            "Delete think time from the scenarios",
            "Run the replay five times sequentially",
            "Multiply the arrival rate",
            "Use one user with heavy pipelining",
          ],
          answerIndex: 2,
          explanation:
            "Scaling by deleting think time converts journeys into request bursts — a workload you do not operate. Multiplying the arrival rate preserves the shape while increasing its volume, which is the experiment you meant to run.",
        },
        {
          question: "A replayed checkout flow charged a real card in staging. What was missing?",
          options: [
            "More anonymization of emails",
            "A longer soak phase",
            "Higher think time",
            "Stubbed or sandboxed third-party side effects",
          ],
          answerIndex: 3,
          explanation:
            "Replays execute real request sequences, so real side effects fire: charges, emails, webhooks. Every downstream mutation needs a stub or sandbox before the replay starts, or staging bills someone at five times volume.",
        },
      ],
    },
    {
      number: 11,
      title: "Baseline, Ramp, Spike, Soak, Recover",
      summary:
        "The five-phase curve that every load test should run. If you have not run this curve, you do not know your system.",
      keyIdea:
        "Recovery is the often-skipped phase: how fast does the system return to baseline after the load stops?",
      deepDive: [
        {
          heading: "Baseline: the honest starting line",
          paragraphs: [
            "Before any drama, measure ordinary. Run one to two times average traffic for a few minutes and record p50, p95, p99, throughput, error rate and the resource utilization snapshot. This is the anchor every later phase is read against, and the anchor CI gates compare against next week. Without it, every number in the dramatic phases is uninterpretable — faster than what? slower since when? A baseline without a date and commit hash is folklore, not evidence.",
            "Baselines expire quietly. Every deploy, dependency upgrade, data growth week and traffic mix shift moves the floor, so re-baseline on a schedule — per release for hot paths, weekly for the service as a whole. Store baselines as artifacts next to the run reports, and make drift visible: a service whose p95 crept up ten percent over a quarter did not have one bad day; it had ninety unexamined ones.",
          ],
        },
        {
          heading: "Ramp and spike shape the climb",
          paragraphs: [
            "The ramp is stepwise on purpose: increase load, hold the step long enough for queues to settle, then increase again. At each step, watch where latency leaves its flatline and which resource approaches its ceiling. The knee — the load where the flatline ends — is your capacity number, and it is always lower than the load where everything is already visibly broken. Teams that ramp in one continuous sweep find the collapse but miss the knee, which is the number planning actually needs.",
            "The spike is a jump, not a ramp: idle to ten times load in seconds. Three questions get answered: does the queue absorb the burst, does autoscaling fire in time, and do failures come back fast and legible — 429s with backoff hints, clean 503s — instead of connections hanging until a client timeout? Watch the autoscaler's events with your own eyes during the run; its reaction time and cooldown behavior are capacity facts you will want at 2 a.m. someday.",
          ],
        },
        {
          heading: "Soak and recover: the long memory",
          paragraphs: [
            "The soak holds expected peak for hours, and its findings are all about time: memory slopes, pool leaks measured in connections per hour, log disks filling, cache hit ratios decaying, GC pause trends climbing. Nothing here is visible in a fifteen-minute run, which is why soaks belong overnight in staging on production-shaped data. Read the soak by slope, not by level — a resource trending upward is a finding even while the absolute number still looks safe.",
            "Recovery is the phase everyone skips and every incident needs. Stop the load and keep measuring: how long until p99 returns to baseline, queues drain, pools empty, autoscaler scales back in? A system that recovers in two minutes absorbs the next spike; one that takes forty minutes turns every spike into a compound incident, because the next burst arrives while you are still standing up. Measure recovery, give it a budget, and alert on it like any other capacity number.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The five-phase curve",
        caption: "The fifth phase is the one everyone skips — recovery time is a capacity number too.",
        steps: [
          { label: "Baseline", note: "1-2x average, record truth" },
          { label: "Ramp", note: "stepwise to the knee" },
          { label: "Spike", note: "10x jump, watch absorption" },
          { label: "Soak", note: "hold peak for hours" },
          { label: "Recover", note: "does p99 come home?" },
        ],
      },
      pitfalls: [
        {
          mistake: "Starting the report at the spike with no recorded baseline.",
          fix: "Baseline first at one to two times average, with date and commit hash; every later number is a comparison.",
        },
        {
          mistake: "Stopping the test the moment peak load ends.",
          fix: "Keep measuring: time-to-baseline, queue drain and scale-in events are capacity numbers too.",
        },
        {
          mistake: "Treating the five phases as five unrelated one-off scripts.",
          fix: "Run them as one scripted curve with recorded stages so runs stay comparable week over week.",
        },
        {
          mistake: "Reading capacity off the final step of a continuous ramp.",
          fix: "Capacity is the knee — the load where latency leaves its flatline — not the step where everything already queues.",
        },
      ],
      fieldChecklist: [
        "Every load run starts with a baseline phase at one to two times average traffic.",
        "The baseline record includes date, commit hash, instance count and the percentile numbers.",
        "My ramp holds steps long enough to see each level settle, not just flash past.",
        "I have watched autoscaler events during a spike and know its reaction time.",
        "Overnight soaks graph memory, pool waits and GC pauses for the full run.",
        "Recovery time — load stop to baseline p99 — is measured, alertable and written down.",
      ],
      keyTerms: [
        {
          term: "Baseline",
          definition:
            "A measured performance snapshot at ordinary load, anchored to a date and commit; the reference every other run is compared against.",
        },
        {
          term: "Ramp",
          definition:
            "A stepwise increase of load toward the peak, long enough at each step to let queues settle and saturation show.",
        },
        {
          term: "Held step",
          definition:
            "A fixed load level maintained long enough for queues to settle before the next increase; ramps without held steps measure transients.",
        },
        {
          term: "Recovery time",
          definition:
            "How long the system needs to return to baseline latency and utilization after load stops; slow recovery invites cascading failures.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through the five phases of a proper load test.",
          a: "Baseline at one to two times average, recording percentiles and utilization as the anchor every other phase is read against. Ramp in held steps to find the knee — where latency leaves its flatline. Spike from idle to a chosen multiple to test absorption, autoscaling and fail-fast errors. Soak at expected peak for hours to catch slopes: memory, pools, GC, caches. Recover — stop the load and measure how long the system takes to return to baseline, which is a capacity number like any other.",
        },
        {
          q: "Why does recovery time matter as much as peak capacity?",
          a: "Because incidents compound through recovery. A system that returns to baseline in two minutes absorbs the next spike; one that takes forty minutes meets the next burst while queues, pools and autoscaler state are still unsettled, and the second spike lands on a wounded system. Slow recovery turns separate bursts into one long outage. I measure time-to-baseline after load stops, give it a budget, and alert on it like any other capacity number.",
        },
        {
          q: "What does a baseline buy you that a single stress test does not?",
          a: "A comparison anchor. A stress run in isolation produces numbers; a baseline makes them mean something — faster than what, slower since when. Baselines also expire informatively: re-run one per release and drift becomes visible as data, not anecdotes. With a dated baseline, a five percent p99 regression is a finding with a suspect commit; without one, every load test debate restarts from scratch and folklore wins.",
        },
      ],
      quiz: [
        {
          question: "What anchors every other phase of a load test?",
          options: [
            "The spike",
            "The baseline at one to two times average",
            "The recovery phase",
            "The soak",
          ],
          answerIndex: 1,
          explanation:
            "Every later phase is read against the baseline: the knee is where latency leaves it, the spike tests absorption beyond it, and CI compares future runs to it. Without the anchor, all numbers are uninterpretable.",
        },
        {
          question: "What does the recovery phase measure?",
          options: [
            "How fast tests run in CI",
            "The ramp step size",
            "Time for the system to return to baseline after load stops",
            "Cache hit ratio at idle",
          ],
          answerIndex: 2,
          explanation:
            "Recovery is a capacity number: it decides whether the next spike lands on a healthy system or a wounded one. Fast recovery absorbs bursts; slow recovery compounds them into one long incident.",
        },
        {
          question:
            "Your team ramps in one continuous sweep and reads capacity off the final step. What did they miss?",
          options: [
            "The error budget",
            "The soak phase",
            "Think time",
            "The knee — the load where latency leaves its flatline",
          ],
          answerIndex: 3,
          explanation:
            "A continuous sweep finds the collapse but skips the held steps where queues settle and the knee becomes visible. Capacity planning needs the knee — the load where degradation starts, not where it ends.",
        },
      ],
    },
    {
      number: 12,
      title: "Load Testing the Database",
      summary:
        "The database is usually the bottleneck, and load testing it requires its own tooling — sysbench, pgbench, HammerDB.",
      keyIdea:
        "Test the DB in isolation, then with the app layer. N+1s hide here, and only load reveals them.",
      deepDive: [
        {
          heading: "Tools that speak database",
          paragraphs: [
            "Load the database with tools that speak its dialect. pgbench ships with Postgres: initialize TPC-B-shaped data at a scale factor, run transaction mixes, measure transactions per second and latency. sysbench drives MySQL and Postgres with oltp_read_write workloads you can script. HammerDB brings TPC-C and TPC-H to commercial engines. The rule that makes any of them honest: run at production data volume, because a benchmark on a thousand rows measures the buffer cache, not the database.",
            "The database-only run gives you the engine's ceiling and a tuning laboratory: shared_buffers, WAL fsync behavior, checkpoint spacing, index choices, autovacuum aggressiveness — each provable with the same script before and after. It also exposes the classics that never show at low volume: checkpoint-induced latency spikes every few minutes, lock waits under write concurrency, replication falling behind at write bursts. Fix them here, where iterations are minutes, not in the app where every change is a deploy.",
          ],
        },
        {
          heading: "Then load it through the app",
          paragraphs: [
            "The engine ceiling is not your throughput; the application decides how much of it you waste. Load through the real API and watch the database from inside: pg_stat_statements for the queries by total time, pg_stat_activity wait events, pool wait, connection churn, replica lag. The gap between what pgbench achieved and what your app achieves is engineering headroom — and the N+1 is almost always sitting in it, turning one logical request into fifty physical queries.",
            "App-layer runs also reveal the timing sins that benchmarks never commit: long transactions holding locks across a slow payment call, read-your-own-writes forcing primary reads, retry logic multiplying load during hiccups, and deploy-morning connection storms when every instance reconnects at once. Trace ids stitched through the ORM make each of these attributable to a line of code, which is why database load testing and tracing are the same project wearing different hats.",
          ],
        },
        {
          heading: "The traps only load reveals",
          paragraphs: [
            "The N+1 deserves its reputation because it is invisible at one user: a page that issues one query plus fifty lazy-loaded relations is a curiosity at QPS one and an outage at QPS five hundred, when query volume multiplies past pool capacity. ORM lazy loading is the usual accomplice. Batch the lookups, join where the planner agrees, and verify with the query count per request metric — most ORMs can emit it in development mode.",
            "Then test the operations you will need during the incident. Kill the primary during a load run and time failover honestly — promotion, reconnect storms, the queue of requests that failed mid-flight. Take a backup while the system is under soak and watch the IOPS contention. Run a migration under load. These rehearsals convert your worst Wednesday into a checklist, and they are only available in an environment you are allowed to break.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Two passes at the database",
        caption: "The database in isolation sets the ceiling; the app decides how much of it you waste.",
        left: {
          heading: "Database in isolation",
          items: [
            "pgbench, sysbench, HammerDB",
            "Sets the engine's ceiling",
            "Tune buffers, WAL, indexes",
            "Fast loop, few variables",
          ],
        },
        right: {
          heading: "Through the app",
          items: [
            "k6 against real endpoints",
            "Reveals N+1s, pool waits",
            "Measures what users feel",
            "Slower loop, more variables",
          ],
        },
      },
      codeExample: {
        language: "bash",
        caption:
          "pgbench against a production-scale copy — transactions per second here is the database's honest ceiling.",
        code: [
          "# Initialize TPC-B-shaped data at scale 100 (10M account rows)",
          "pgbench -i -s 100 benchdb",
          "",
          "# Custom script: point read plus a bounded update",
          "cat > mix.sql <<'SQL'",
          "\\set aid random(1, 100 * :scale)",
          "SELECT abalance FROM pgbench_accounts WHERE aid = :aid;",
          "UPDATE pgbench_accounts SET abalance = abalance + 1 WHERE aid = :aid;",
          "SQL",
          "",
          "# 8 clients, 4 threads, 5 minutes, progress every 10 seconds",
          "pgbench -c 8 -j 4 -T 300 -P 10 -f mix.sql benchdb",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Benchmarking on a copy with a thousand rows.",
          fix: "Initialize at production scale with pgbench -s or seeded data; plans change completely at ten million rows.",
        },
        {
          mistake: "Tuning the database toward a pgbench number the app never approaches.",
          fix: "After DB-only runs, load through the app; the gap between engine ceiling and user throughput is the to-do list.",
        },
        {
          mistake: "Testing only reads because writes are riskier to script.",
          fix: "Include the real write ratio — updates, vacuum pressure and replication lag are where load shows first.",
        },
        {
          mistake: "Never rehearsing failover or backups under load.",
          fix: "Kill the primary during a run and time recovery; take a backup mid-soak and watch the IOPS contention.",
        },
      ],
      fieldChecklist: [
        "I have run pgbench, sysbench or HammerDB against a production-scale copy of the data.",
        "Database settings I tuned are justified by before and after runs of the same script.",
        "The gap between DB-only ceiling and app-level throughput is measured and explained.",
        "pg_stat_statements and pg_stat_activity waits are watched during app-layer load runs.",
        "I have timed failover and a backup under load, not just on an idle Sunday.",
        "N+1 hotspots found under load have trace ids and become batched queries.",
      ],
      keyTerms: [
        {
          term: "pgbench",
          definition:
            "Postgres's built-in benchmarking tool: initializes TPC-B-like data and runs scripted transactions with configurable clients and scale.",
        },
        {
          term: "sysbench",
          definition:
            "A scriptable benchmark suite — oltp_read_write and friends — for MySQL, Postgres and CPU/IO baselines.",
        },
        {
          term: "Scale factor",
          definition:
            "The data-size multiplier in a benchmark; results at scale 1 say nothing about behavior at production row counts.",
        },
        {
          term: "Replica lag",
          definition:
            "The delay between a write on the primary and its appearance on a read replica; load and long transactions widen it.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you load test a database?",
          a: "In two passes. First in isolation with engine-native tools — pgbench for Postgres, sysbench for MySQL and Postgres, HammerDB for TPC-C on commercial engines — at production scale factors, tuning buffers, WAL and indexes where the script proves it. Then through the application with k6 or JMeter, watching pg_stat_statements, wait events, pool waits and replica lag. The gap between the engine's ceiling and what the app achieves is your real to-do list, and the N+1 usually lives there.",
        },
        {
          q: "The app is slow but pgbench shows the database is fast. What next?",
          a: "The gap between engine ceiling and application throughput is the suspect list: N+1 patterns multiplying queries, pool waits serializing requests, chatty schemas requiring round trips, long transactions holding locks across slow external calls. Compare query QPS to request RPS — query volume rising faster than traffic is the N+1 signature. Then profile with trace ids stitched through the ORM so each wasted query attributes to a line of code. The database is fine; the access pattern is not.",
        },
        {
          q: "What database problems only appear under load?",
          a: "Lock waits as write concurrency rises, checkpoint-induced latency spikes every few minutes, autovacuum falling behind on hot tables, replication lag widening at write bursts, connection storms when a deploy reconnects every instance at once, and pool exhaustion hiding behind idle CPU. Also the operational ones: backups contending for IOPS during soak, failover under load taking longer than on an idle Sunday. Load is the only honest rehearsal environment for all of these.",
        },
      ],
      quiz: [
        {
          question: "Why run pgbench or sysbench at production scale factors?",
          options: [
            "Licenses require it",
            "It is faster",
            "Plans, cache behavior and index depth differ completely at production row counts",
            "Scale factors only affect CPU",
          ],
          answerIndex: 2,
          explanation:
            "At a thousand rows every index fits in memory and plans are trivial; at ten million, plans, buffer behavior and vacuum pressure change completely. Benchmark the database you operate, not a miniature of it.",
        },
        {
          question: "The database benchmark shows a high ceiling, but app throughput is far lower. What does the gap usually contain?",
          options: [
            "Nothing — numbers should match",
            "A broken benchmark",
            "Application waste: N+1s, pool waits, chatty queries",
            "Free capacity for marketing",
          ],
          answerIndex: 2,
          explanation:
            "The engine ceiling is rarely the user's experience; the application spends it. N+1 patterns, pool waits and chatty round trips consume the gap, which is why app-layer load and DB-only runs are both required.",
        },
        {
          question: "Query QPS rises three times faster than request RPS under load. What is the classic suspect?",
          options: [
            "An N+1 multiplying queries per request",
            "CPU throttling",
            "DNS resolution",
            "The load generator overheating",
          ],
          answerIndex: 0,
          explanation:
            "Query volume outgrowing request volume is the N+1 signature: one logical request becomes many physical queries. It is invisible at one user and an outage at scale — load is what makes it honest.",
        },
      ],
    },
    {
      number: 13,
      title: "Load Testing in CI",
      summary:
        "A load test run once is a snapshot. A load test run in CI on every release is a regression detector.",
      keyIdea:
        "Run a short, sharp load test in staging CI with a p99 budget. A regression beyond the budget fails the build.",
      deepDive: [
        {
          heading: "From snapshot to regression detector",
          paragraphs: [
            "A load test run once tells you what the system could do on a Tuesday in March. The same test run in CI tells you whether last week's merge made it worse. The mechanism is simple: encode budgets as thresholds — p99 under 400 milliseconds at two times average, error rate under one percent — and let the tool exit non-zero on breach. k6 thresholds and JMeter assertions both do this; the discipline is treating the exit code as the verdict.",
            "Keep the gate short and sharp: three to five minutes at two times average traffic against a fixed-size staging environment. Control the noise — dedicated runners, pinned dependencies, seeded data, warm caches — because a noisy gate trains the team to ignore it. Export every run's percentiles as artifacts and chart them over time; the trend line catches the slow ten-percent drifts that individual runs happily pass, month after month.",
          ],
        },
        {
          heading: "Budgets make performance a feature",
          paragraphs: [
            "A performance budget is a number attached to an endpoint, versioned in the repo like any other contract: p99, error rate, and a throughput floor. Set budgets from measured baselines plus agreed headroom, not from aspirations — a budget every run fails is wallpaper, and a budget nobody can breach is decoration. When a merge breaches a budget, the build goes red with a link to the run report, and the regression gets an owner the way any failing test would.",
            "Flakiness is the tax every perf gate pays, so budget for it deliberately. Know your environment's noise floor by running the same commit twice; treat deltas inside that floor as weather. Re-run before escalating, quarantine scenarios that flap, and schedule the deep runs — full mix, soak phases, replay — nightly or weekly where their runtime cannot hurt anyone. The gate's job is catching real regressions quickly, not producing perfect measurements on every commit.",
          ],
        },
        {
          heading: "Wire it into the release",
          paragraphs: [
            "The full shape is a pyramid of runs. Every commit: micro-benchmarks on hot functions. Every pull request: the short gate at two times average. Nightly: the peak-mix run with full thresholds and a posted report. Weekly or per release: the deep run — soak phases, replayed traffic, failover rehearsal. Each tier has a budget, each tier stores artifacts, and each tier's report lands where decisions happen: the PR comment, the release notes, the capacity page.",
            "When the gate blocks, bisect with the tools you already built: the stored baseline, the per-run percentile artifacts, the nightly flame graphs. Treat a budget breach exactly like a failing unit test — blocking, owned, bisected — and the team's relationship with performance changes within a quarter. The alternative, a quarterly all-hands load test that everyone dreads and nobody reads, is how capacity folklore survives another year.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The performance budget pyramid",
        caption: "Cheap and frequent at the base, expensive and rare at the top — every tier has a budget.",
        tiers: [
          { label: "Weekly full replay", note: "staging mirror, 30 minutes" },
          { label: "Nightly budget run", note: "peak mix, ten minutes" },
          { label: "PR gate", note: "3-minute smoke, 2x average" },
          { label: "Benchmarks", note: "hot paths, every commit" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "The same thresholds that gate the nightly run gate the pull request — performance becomes a test.",
        code: [
          "name: performance",
          "on:",
          "  pull_request:",
          "    paths: ['api/**']",
          "  schedule:",
          "    - cron: '0 3 * * *'",
          "jobs:",
          "  budgets:",
          "    runs-on: [self-hosted, perf-runner]",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - name: PR gate - smoke at 2x average",
          "        run: k6 run --quiet scenarios/smoke.js",
          "      - name: Nightly peak mix, full thresholds",
          "        if: github.event_name == 'schedule'",
          "        run: k6 run scenarios/peak-mix.js --summary-export report.json",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Running load tests on shared CI runners and trusting the deltas.",
          fix: "Use a dedicated pinned runner and learn the noise floor before believing a five percent p99 change.",
        },
        {
          mistake: "A forty-five-minute load suite on every pull request.",
          fix: "Keep the PR gate under five minutes at modest load; put deep runs on a nightly schedule with reports.",
        },
        {
          mistake: "Budgets set from hopes, failing every run.",
          fix: "Set budgets from a measured baseline plus agreed headroom; a budget that never passes is wallpaper.",
        },
        {
          mistake: "Marking the perf job 'allow failure' and forgetting it.",
          fix: "Threshold breaches block merges like red unit tests: owned, bisected, and explained with stored artifacts.",
        },
      ],
      fieldChecklist: [
        "A load test runs in CI on every pull request that touches a hot path.",
        "The PR-gate run finishes in under five minutes with explicit thresholds.",
        "Percentiles from every run are stored as artifacts and charted over time.",
        "Performance budgets are versioned beside the code they protect.",
        "My CI perf environment is dedicated and reproducible — same runner, same data seed.",
        "Budget breaches block merges and get bisected like any other red build.",
      ],
      keyTerms: [
        {
          term: "Performance budget",
          definition:
            "A numeric bound — p99, error rate, throughput floor — that a run must meet; breaches fail the build like any test.",
        },
        {
          term: "Regression gate",
          definition:
            "A CI check that compares current results against a stored baseline and blocks merges beyond agreed headroom.",
        },
        {
          term: "Noise floor",
          definition:
            "The run-to-run variance of an environment; you must know it before believing any small performance delta.",
        },
        {
          term: "Summary export",
          definition:
            "k6's machine-readable end-of-run report — written by --summary-export — that CI can store, chart and diff.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you prevent performance regressions from reaching production?",
          a: "Make performance a test. Encode budgets — p99 per endpoint, error rate, a throughput floor — as thresholds in a load scenario that runs in CI, with a three-to-five-minute gate on pull requests touching hot paths and a deeper nightly run. Thresholds set from measured baselines plus headroom, artifacts stored every run, trend charts over time. When the gate goes red, the regression gets an owner and a bisect, exactly like a failing unit test.",
        },
        {
          q: "Load tests are flaky in CI. How do you fix that?",
          a: "Control the environment before distrusting the numbers. Dedicated, pinned runners; seeded data; warm caches; the same commit run twice to learn the noise floor. Deltas inside the floor are weather — re-run before escalating. Quarantine scenarios that flap and fix them separately; schedule the deep, noisy runs nightly where runtime does not hurt anyone. The gate's job is catching real regressions quickly, not producing perfect measurements on every commit.",
        },
        {
          q: "What belongs in a nightly load run that a PR gate cannot afford?",
          a: "The full peak mix with complete thresholds, longer holds at each step so queues settle, soak phases for slope findings, and the expensive extras: replayed production traffic at scale, failover rehearsal, backup under load. The PR gate is a smoke at two times average that finishes in minutes; the nightly run is where knee-mapping, flame graph capture and capacity updates happen. Both export artifacts; the nightly report feeds the weekly capacity review.",
        },
      ],
      quiz: [
        {
          question: "What turns a CI load test into a regression detector?",
          options: [
            "Running it on Fridays",
            "Thresholds that fail the build when budgets are breached",
            "A GUI report",
            "Testing production directly",
          ],
          answerIndex: 1,
          explanation:
            "Thresholds with a non-zero exit turn the load test into a gate the build respects. Without them the run produces a report; with them it produces a verdict a merge cannot ignore.",
        },
        {
          question: "Where should a performance budget come from?",
          options: [
            "The fastest number anyone has ever seen",
            "Frontend metrics only",
            "A new guess every run",
            "Measured baselines plus agreed headroom",
          ],
          answerIndex: 3,
          explanation:
            "A budget from measured baselines plus agreed headroom is defensible; one from aspirations fails every run and trains the team to ignore red. Budgets are contracts, and contracts need realistic terms.",
        },
        {
          question: "Your PR perf gate is flaky on shared runners. What is the standard fix?",
          options: [
            "Remove the gate",
            "Run the full soak on every PR",
            "Dedicated pinned runner, warm caches, know the noise floor, re-run before escalating",
            "Lower all budgets until it passes",
          ],
          answerIndex: 2,
          explanation:
            "Noise comes from the environment, not the code: shared runners, cold caches, drifting data. Pin the runner, seed the data, learn the variance by running the same commit twice, then trust small deltas.",
        },
      ],
    },
    {
      number: 14,
      title: "Reading the Load Test Report",
      summary:
        "A load test report is data, not a verdict. The skill is reading it: which percentile moved, which endpoint regressed, which resource saturated first.",
      keyIdea:
        "Compare against the baseline, not against hopes. A 5% p99 regression is a finding; a 50% one is an incident prevented.",
      deepDive: [
        {
          heading: "Read against the baseline",
          paragraphs: [
            "A report is data, not a verdict; the verdict is yours to construct. Start by comparing every percentile per endpoint against the stored baseline from the same environment class. Then classify what moved: p50 up means everyone got slower — systemic, likely a deploy or a shared resource; p99 up while p50 held means the tail regressed — GC, locks, cache misses, a new query plan. Which percentile moved is the single most diagnostic fact in the report.",
            "Check the guardrails before celebrating any improvement: did throughput hold at the same load, did the error rate stay flat, did resource utilization stay inside ceilings? A faster p99 with a higher error rate is a bug with better marketing. And make sure the improvement survives the full curve — a change that wins at ramp but collapses at soak is not a win; it is a smaller incident waiting for a bigger crowd.",
          ],
        },
        {
          heading: "Attribute before acting",
          paragraphs: [
            "Correlate the moved percentile with the resource timeline: which ceiling was approached when the latency turned, and what else was happening — a checkpoint, a deploy, a batch job, a cache flush? Drill per endpoint and per scenario; the aggregate hides the guilty route. Pull the slow-request samples with trace ids and read three of them end to end. The commit diff, config diff and data growth since the baseline complete the triangle: what changed, what saturated, who suffered.",
            "Respect the noise floor before naming a regression. Run the same commit twice and learn what your environment's run-to-run variance actually is; a three percent p99 delta inside that variance is weather, not a finding. A five percent p99 regression outside the floor is a finding worth a ticket; a fifty percent one is an incident you prevented, and both deserve a written record. The proportionate response is a skill, and it starts with knowing your floor.",
          ],
        },
        {
          heading: "Write the verdict down",
          paragraphs: [
            "End every run with a one-line verdict and the numbers that justify it: pass within budget, or breach with the moved percentile, the suspect commit, and the named owner of the next action. Attach the artifacts — raw summaries, flame graphs, dashboard screenshots, the scenario hash — so the next investigation starts from evidence instead of memory. A report without a verdict will be re-litigated in every meeting that mentions it, forever.",
            "Then translate the verdict upward. The capacity number — sustainable requests per second at the SLO, on this date, on this infrastructure — belongs in the document product and leadership actually read, because it decides launch dates and marketing promises. Engineers read percentiles; organizations read dates and limits. When you hand both versions over, load testing stops being a QA chore and becomes the way the company makes commitments it can keep.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "A number moved — now what?",
        caption: "Every moved number has a next action — a report that ends in shrugs was read wrong.",
        start: "A number moved",
        branches: [
          {
            label: "p99 up, errors flat",
            outcome: "Trace it, then profile",
            good: true,
          },
          {
            label: "Errors climb at the knee",
            outcome: "Fix before scaling out",
            good: true,
          },
          {
            label: "Delta inside the noise",
            outcome: "Update baseline, ship",
            good: true,
          },
          {
            label: "Read only the p50",
            outcome: "The tail is still burning",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake: "Skimming the summary and declaring victory on the average.",
          fix: "Read per-endpoint p95 and p99 against the baseline; the summary averages away exactly the users you worry about.",
        },
        {
          mistake: "Comparing this run to last quarter's run on different infrastructure.",
          fix: "Compare against baselines from the same environment class, and record any environment change in the report.",
        },
        {
          mistake: "Ignoring a doubled error rate because latency improved.",
          fix: "A win is faster percentiles, equal-or-lower errors and the same throughput at the same load — all three.",
        },
        {
          mistake: "Producing a report with no verdict, owners or next actions.",
          fix: "End with pass or breach, named actions with owners, and stored artifacts linked for the next investigation.",
        },
      ],
      fieldChecklist: [
        "I read every report against a stored baseline from the same environment class.",
        "I can say which percentile moved, per endpoint, and what the tail requests share.",
        "I know my environment's noise floor before calling any small delta a regression.",
        "Every report ends with a verdict: pass, or budget breach with named owners.",
        "Raw artifacts — summaries, flame graphs, logs — are stored and linked from the report.",
        "The capacity number — sustainable RPS at SLO — is written where product decisions are made.",
      ],
      keyTerms: [
        {
          term: "Baseline comparison",
          definition:
            "Reading current results against a stored prior run from the same environment; the only honest way to call a regression.",
        },
        {
          term: "Attribution",
          definition:
            "Connecting a moved percentile to a cause: the commit, config or data change that explains it.",
        },
        {
          term: "Verdict",
          definition:
            "The one-line outcome of a run — pass, breach, or investigate — with owners and actions attached.",
        },
        {
          term: "Error budget",
          definition:
            "The allowed share of failed or slow requests derived from the SLO; improvements that spend it are not improvements.",
        },
      ],
      interviewQuestions: [
        {
          q: "A load test shows p99 up forty percent. Walk me through your next hour.",
          a: "First, verify against the baseline from the same environment class and check the guardrails — did throughput hold, did errors rise, did a resource hit a ceiling when the tail moved? Then attribute: per-endpoint percentiles, slow-request samples with trace ids, the commit and config diffs since the baseline. Re-run the same commit once to test the noise floor. If it is real, profile the suspect path under load, and write the verdict — breach, owner, next action — into the report.",
        },
        {
          q: "How do you report load test results to non-engineers?",
          a: "One number and one sentence: sustainable requests per second at the promised latency, on this date, on this infrastructure — and whether that covers the launch plan. Leave percentiles and flame graphs in the appendix for engineers; the decision-relevant facts are the capacity number, the date, and the first resource that will run out. That translation is what lets product set launch dates the system can keep.",
        },
        {
          q: "When is a five percent regression worth blocking a release?",
          a: "When it is outside the environment's noise floor and lands on a hot path — five percent p99 on a checkout endpoint during launch season absolutely qualifies. The discipline matters more than the threshold: re-run to confirm, compare against the dated baseline, then let the budget decide. Consistent small regressions compound; three accepted five-percent moves in a quarter is a fifteen-percent incident nobody approved. Block when the budget says so, and renegotiate budgets in daylight, not during a launch.",
        },
      ],
      quiz: [
        {
          question: "Which fact is most diagnostic when reading a load test report?",
          options: [
            "The total request count",
            "Which percentile moved, per endpoint",
            "The test duration",
            "The tool version",
          ],
          answerIndex: 1,
          explanation:
            "Which percentile moved is diagnostic: p50 up is systemic, p99-up-only is a tail mechanism. Per-endpoint breakdown plus the baseline is what turns a number into a suspect.",
        },
        {
          question: "What is the noise floor?",
          options: [
            "The minimum load a test may apply",
            "The sound the load generator makes",
            "Run-to-run variance of the environment; deltas inside it are not findings",
            "The error budget",
          ],
          answerIndex: 2,
          explanation:
            "The noise floor is run-to-run variance in your environment. Deltas smaller than it are weather, and calling them findings trains everyone to distrust the report; the floor is what makes small deltas meaningful.",
        },
        {
          question: "p99 improved 30 percent but the error rate doubled. Did the release improve?",
          options: [
            "Yes — percentiles are the only metric",
            "Yes, if the average also improved",
            "Impossible to say without JMeter",
            "No — wins require faster percentiles with equal-or-lower errors at the same throughput",
          ],
          answerIndex: 3,
          explanation:
            "A win must survive the guardrails: faster percentiles, equal-or-lower errors, same throughput at the same load. A faster tail with doubled errors is a bug with better marketing, not a release improvement.",
        },
      ],
    },
  ],
};
