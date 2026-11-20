/**
 * Book 04 — Master Secrets.
 *
 * The operational life of credentials: env vars, secrets managers, rotation,
 * least privilege, git-history leaks, scanning, webhook signatures, workload
 * identity, the revocation playbook and environment separation.
 *
 * Chapter summaries, key ideas and titles are kept verbatim from books-data.
 */
import type { Book } from "../types";

export const book04: Book = {
  id: "book-04",
  number: 4,
  title: "Master Secrets",
  subtitle: "Book 04 of 13 · The Effortless Series",
  tagline:
    "The operational life of credentials: environment variables done right, secrets managers, key rotation, least privilege, git-history leaks, secret scanning, webhook signatures, workload identity, the emergency revocation playbook and environment separation.",
  description:
    "One leaked key can bill you five figures overnight or hand a stranger your database. Secret leaks are the most common self-inflicted breach — and fully preventable.",
  layer: "Gate identity and keys",
  layerQuestion: "Who are you, what may you do, and what credentials are in play?",
  accentColor: "#fb923c",
  emoji: "04",
  months: "Month 4",
  chapters: [
    {
      number: 1,
      title: "Environment Variables",
      summary:
        "The twelve-factor app said 'store config in the environment' in 2011, and it was right — but 'environment' has grown up since.",
      keyIdea:
        "Env vars are the transport layer for secrets, not the storage layer. The secrets manager is the source of truth.",
      deepDive: [
        {
          heading: "Transport, not storage",
          paragraphs: [
            "The twelve-factor manifesto told you to store config in the environment so the same build could run in dev, staging and prod. That advice is about the contract between code and runtime: read configuration from process.env, never hardcode it. It was never a mandate to keep the production database password in a file on your laptop. Env vars are how a secret travels from wherever it is stored into your process — the last mile, not the warehouse.",
            "The distinction matters because each layer has different failure modes. A secrets manager can rotate, version, audit and revoke. A shell profile cannot. Once a secret is written into a .env file that lives on four laptops and three team channels, it has silently become a second source of truth that no dashboard can see and no tool can rotate. Treat the environment as a delivery address: the value arrives at process start and is owned by the manager upstream.",
          ],
        },
        {
          heading: "Read late, validate at boot",
          paragraphs: [
            "Two habits separate careful code from eventual incidents. First: read env vars at boot, once, through one typed config module — not scattered as process.env.SOMETHING across forty files, where a typo silently yields undefined. Second: validate. If STRIPE_API_KEY is missing, crash loudly at startup with a message naming the variable. Failing fast at boot converts a mysterious runtime 500 into a deploy that refuses to go green.",
            "Import-time reads are the classic trap: a module that reads process.env.API_KEY at the top binds the value before your runtime has injected anything — serverless cold starts, edge runtimes and test runners all load modules in orders you do not fully control. Resolve lazily or in an explicit init function. The same rule is what makes rotation possible later in Chapter 6: if the value is captured once at import, no rotation scheme can reach it.",
          ],
        },
        {
          heading: "The env var threat surface",
          paragraphs: [
            "Env vars leak in ways people underestimate. They appear in crash reports and error trackers when someone dumps process.env to debug a deploy. Child processes inherit all of them, so a build step with a vulnerable dependency can read every secret the CI job holds. docker inspect shows them to anyone with container access. Shell history files, CI logs from set -x, and issue threads where someone pastes their terminal output round out the list. Assume any env var will eventually be printed somewhere.",
            "The professional posture is therefore minimal exposure: inject only the vars a process needs, never pass the whole environment through, and keep values short-lived where the platform allows it. Modern runtimes help — AWS ECS and Lambda can inject at task start from Secrets Manager or Parameter Store, Kubernetes mounts them from Secret objects, Doppler and Infisical sync them per environment. The platform plumbing exists; using it well is the whole chapter.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Where a secret actually lives",
        caption:
          "The manager holds the truth; the environment is just the delivery mechanism.",
        layers: [
          { label: "Secrets manager", note: "source of truth, audited" },
          { label: "Runtime injection", note: "platform pulls at start" },
          { label: "Process env", note: "transport, not storage" },
          { label: "App memory", note: "read at boot, never logged" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "One typed module reads the environment once and fails loudly at boot when a variable is missing.",
        code: [
          "// config.ts — the only module that touches process.env",
          "function required(name: string): string {",
          "  const value = process.env[name];",
          "  if (!value) {",
          "    throw new Error(`Missing required env var: ${name}`);",
          "  }",
          "  return value;",
          "}",
          "",
          "export const config = {",
          "  stripeKey: required('STRIPE_API_KEY'),",
          "  dbUrl: required('DATABASE_URL'),",
          "} as const;",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Committing .env files 'just for local dev' and promising to be careful.",
          fix: "Keep real values in a secrets manager even locally; commit only a .env.example with empty values and comments explaining each variable.",
        },
        {
          mistake: "Scattering process.env reads across dozens of modules with no validation.",
          fix: "Route every read through one typed config module that validates at boot and names the missing variable in the error.",
        },
        {
          mistake: "Logging process.env or dumping it into error reports to debug a deploy.",
          fix: "Log only variable names, never values. Scrub error trackers so env-shaped payloads are redacted before they leave the process.",
        },
        {
          mistake: "Passing the full environment to every child process and build step.",
          fix: "Forward an explicit allow-list of variables; build tools and third-party scripts should see only what they individually need.",
        },
      ],
      fieldChecklist: [
        "I have one typed config module and no raw process.env reads anywhere else.",
        "I crash the service at boot when a variable is missing, with a message naming the exact variable.",
        "I have a .env.example committed and the real .env ignored by git.",
        "I never log, dump or attach env values to error reports — names only.",
        "I use platform-level injection (ECS, Lambda, Kubernetes secrets) where available.",
        "I can name every secret this process needs and why.",
      ],
      keyTerms: [
        {
          term: "Twelve-factor config",
          definition:
            "The principle that configuration lives outside the code so one build runs in every environment — a transport contract, not storage advice.",
        },
        {
          term: "Secrets manager",
          definition:
            "The audited, versioned, rotatable store of record for credentials — AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault, Doppler.",
        },
        {
          term: "Import-time capture",
          definition:
            "Binding an env value into a module-level constant at load time, which freezes it before injection and blocks rotation.",
        },
        {
          term: "Blast radius",
          definition:
            "Everything that can read or inherit a credential once it exists — child processes, logs, crash reports, container inspection.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why do you still use environment variables if you have a secrets manager?",
          a: "Because they solve different problems. The manager is the source of truth: audited, versioned, rotatable. Env vars are the transport into the process at start time. The failure pattern I avoid is treating .env files on laptops as a second source of truth — I want exactly one place that holds the value and one mechanism that delivers it.",
        },
        {
          q: "A teammate pasted their environment into a bug report. What do you do?",
          a: "Treat it as a leak, not a mistake to clean up quietly. Anything secret-shaped in the paste gets rotated first, and then we fix the habit: redaction on the tracker, a rule against dumping env, and a config module that makes values hard to print accidentally. Rotation is cheap; assuming it was harmless is not.",
        },
        {
          q: "How do you make a missing env var fail safely?",
          a: "At boot, not at request time. A required() helper that throws with the variable's name turns a bad deploy into an instant, obvious crash instead of a runtime undefined leaking into a signed request weeks later. I also fail on unexpected variable names in staging, because silent config drift is how staging stops resembling production.",
        },
      ],
      quiz: [
        {
          question: "What does 'env vars are the transport layer' mean in practice?",
          options: [
            "Env vars are the safest long-term place to store production secrets",
            "They deliver values into the process at start; the secrets manager holds the truth",
            "Every secret must pass through at least two env vars before use",
            "Env vars replace the need for rotation or auditing",
          ],
          answerIndex: 1,
          explanation:
            "Twelve-factor is about the contract between code and runtime. Storage, rotation and audit live in the manager; the env var is the last-mile delivery, which is why .env files on laptops quietly become second truths.",
        },
        {
          question:
            "A module reads const key = process.env.KEY at import time. What breaks later?",
          options: [
            "Nothing — import-time reads are the recommended pattern",
            "The bundle gets larger",
            "Rotation cannot reach the value; cold starts and test runners may load it before injection",
            "Node.js refuses to start in production",
          ],
          answerIndex: 2,
          explanation:
            "Capturing at import freezes the value before the runtime guarantees injection, and no later rotation can update it. Resolve lazily or in explicit init so the value is always fetched fresh.",
        },
        {
          question:
            "Which is the most defensible way to handle a build script that needs one secret?",
          options: [
            "Pass the entire environment so nothing is missing",
            "Hardcode it in the build script since CI is private",
            "Base64-encode it into the script",
            "Forward an explicit allow-list containing just that variable",
          ],
          answerIndex: 3,
          explanation:
            "Child processes inherit whatever you forward. An allow-list keeps the leak surface equal to the job: a compromised dependency in the build sees one scoped value, not the database URL and every other credential.",
        },
      ],
    },
    {
      number: 2,
      title: "Never Commit .env",
      summary:
        "The most expensive typo in software is 'git add .'. One command, one push, and your database password is public forever.",
      keyIdea:
        "Rotate first, clean history later. Defense in depth: .gitignore, pre-commit hooks, CI scanning, push protection.",
      deepDive: [
        {
          heading: "Why one push is forever",
          paragraphs: [
            "A pushed secret is not a mistake anymore; it is an event. Bots crawl public repositories for secret-shaped strings within minutes — GitHub push protection, truffleHog, and every scraping script on the internet are watching the firehose. Even if you notice and delete the file ten minutes later, the commit is cloned, forked, cached and indexed. Public or private matters less than you think: private repos get shared, mirrored, and leaked through third-party CI integrations and abandoned contractor accounts.",
            "The correct mental model: the moment a credential lands in a commit that left your machine, assume it is compromised and act accordingly — rotate the credential, then audit what it did in the interim, then clean history if you still care. Deleting the file in a follow-up commit changes nothing about the first commit; git history is append-only by design, and every clone already has it.",
          ],
        },
        {
          heading: "Defense in depth, four layers",
          paragraphs: [
            "No single gate catches everything, so the defense is layered. The .gitignore keeps .env out of git status and out of muscle memory's reach. A pre-commit hook — gitleaks protect, or a detect-secrets hook — stops secret-shaped strings before they enter a commit locally. CI scanning with gitleaks or truffleHog catches what slipped past laptops because someone bypassed the hook with --no-verify. And provider push protection, GitHub's secret scanning push block, rejects the push itself at the server.",
            "Each layer covers a different human moment: the tired Friday commit, the 'I will remove it in the next commit' push, the 'CI will not look there' path, the force-push that assumes rewriting history erases the past. You are not fighting tools; you are building slack into a system that assumes busy people make the same mistake that cost the last team five figures.",
          ],
        },
        {
          heading: "Make the safe path the fast path",
          paragraphs: [
            "Prevention works only when the safe option is also convenient. Commit a .env.example with variable names, empty values and a comment per line explaining what it expects. Onboard engineers with 'copy it, fill it from the secrets manager' as a documented step. If filling a secret requires hunting through Slack, someone will shortcut it by committing a real file — friction pushes people toward the exact behavior you are trying to prevent.",
            "Also decide, as a team, what lives in .env at all. Local development works better with throwaway credentials: a dev database with synthetic data, test-mode API keys, a local secrets manager like Vault dev mode or Doppler's local sync. When nothing in the local file is production-grade, a leak becomes an annoyance instead of an incident. The cheapest defense is for the local file to contain nothing worth stealing.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Four gates before the internet",
        caption:
          "Each gate catches what the previous one missed; a secret must survive all four to become public.",
        stages: [
          { label: "gitignore", note: "file never staged" },
          { label: "Pre-commit", note: "gitleaks scans the diff" },
          { label: "CI scan", note: "catches --no-verify bypasses" },
          { label: "Push protection", note: "server rejects known patterns" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The recovery drill for an untracked .env and the template that replaces it.",
        code: [
          "# Keep real values out of git, permanently",
          "echo '.env' >> .gitignore",
          "echo '.env.*' >> .gitignore",
          "",
          "# Untrack a file git already knows about",
          "git rm --cached .env",
          "",
          "# Commit a safe template: names and comments, never values",
          "cp .env .env.example",
          "# then edit it — empty values, one comment per variable",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Adding .env to .gitignore after it was already tracked and pushed.",
          fix: "gitignore does not untrack. Run git rm --cached .env, commit, and treat every commit that contained it as compromised — rotate first.",
        },
        {
          mistake: "Assuming a private repository makes a committed secret safe.",
          fix: "Private repos leak through forks, mirrors, CI integrations and ex-employees. The same rule applies: rotate first, audit usage, then clean.",
        },
        {
          mistake: "Deleting the secret in a follow-up commit and calling it handled.",
          fix: "History is append-only; the first commit still holds the value. Rotate the credential immediately — history rewriting is optional, rotation is not.",
        },
        {
          mistake: "Bypassing a blocking pre-commit hook with --no-verify when in a hurry.",
          fix: "If the hook blocks legit work, fix the allow-list the same day. A hook people routinely bypass is decoration, not defense.",
        },
      ],
      fieldChecklist: [
        "I keep every real secret file in this repo ignored by git and untracked.",
        "I maintain a .env.example documenting every variable with names and comments, no values.",
        "I have a pre-commit secret scan installed, and I treat bypassing it as an incident habit, not a convenience.",
        "I run a CI secret scan on every push, including full history on the default branch.",
        "I develop locally with throwaway or test-mode credentials, never production ones.",
        "I know the rotation commands for this project's top three credentials without looking them up.",
      ],
      keyTerms: [
        {
          term: "Push protection",
          definition:
            "Provider-side blocking (GitHub secret scanning) that rejects pushes containing recognized secret formats before they land.",
        },
        {
          term: "Pre-commit hook",
          definition:
            "A local git hook that scans staged changes before the commit is created — the earliest and cheapest leak gate.",
        },
        {
          term: ".env.example",
          definition:
            "A committed template listing every required variable with empty values and comments; the documentation for local setup.",
        },
        {
          term: "--no-verify",
          definition:
            "The git flag that skips hooks; safe occasionally, dangerous as a habit, and the reason CI scanning must exist.",
        },
      ],
      interviewQuestions: [
        {
          q: "You found a committed .env from six months ago. Walk me through your first hour.",
          a: "Rotation before investigation. I identify every credential in the file, rotate or deactivate each one, and check provider audit logs for use I do not recognize — especially from unfamiliar sources. Only then do I worry about git history: whether the repo is public, whether forks exist, whether a history rewrite plus force-push is worth the disruption. Cleaning history does not un-leak anything; revoking the credential does.",
        },
        {
          q: "Why layered defenses instead of one strong scanner?",
          a: "Because each layer fails independently and covers a different moment. gitignore handles habit, pre-commit handles the tired commit, CI scanning handles hooks that were bypassed or never installed, push protection handles everything else at the server. Any single layer has false negatives and bypass paths; four cheap overlapping layers catch what any one of them misses.",
        },
        {
          q: "How do you make sure new engineers do not commit .env on day one?",
          a: "Make the safe path the documented path: the README says copy .env.example and pull real values from the secrets manager, the pre-commit hook ships with the bootstrap script, and CI scanning is on from the first push. Day-one prevention is onboarding design, not a warning in Slack.",
        },
      ],
      quiz: [
        {
          question: "A secret was committed and pushed two hours ago. What is the first action?",
          options: [
            "Rotate or revoke the exposed credential",
            "Rewrite git history and force-push",
            "Delete the repository and recreate it",
            "Email the team to stop cloning",
          ],
          answerIndex: 0,
          explanation:
            "Rotation is the only action that actually de-weaponizes the secret. History rewrites, deletion and announcements all come after, and none of them undo the fact that clones and crawlers already have the value.",
        },
        {
          question:
            "Which layer catches a secret pushed with --no-verify from a laptop without hooks installed?",
          options: [
            "The .gitignore",
            "The pre-commit hook",
            "CI secret scanning or provider push protection",
            "Nothing catches it",
          ],
          answerIndex: 2,
          explanation:
            "Local layers were bypassed or absent by definition. The remaining gates are server-side: CI scanning on the pushed commit, or the provider's push protection rejecting the push before it lands.",
        },
        {
          question: "Why commit a .env.example?",
          options: [
            "So CI can read real values from it",
            "So the safe setup path is documented and convenient, reducing the temptation to commit real files",
            "It is required by twelve-factor",
            "To keep variable names secret from new hires",
          ],
          answerIndex: 1,
          explanation:
            "Prevention is friction design: when filling local secrets is easy and documented, nobody shortcuts it by committing the real file. The example file is documentation that happens to block a leak.",
        },
      ],
    },
    {
      number: 3,
      title: "Secrets Manager",
      summary:
        "A secrets manager is the vault your credentials deserve: audited access, rotation, IAM scoping, and no plaintext copies scattered across laptops.",
      keyIdea:
        "Per-secret IAM policies, access audit logs, native rotation, versioning. No ad-hoc system offers any of these.",
      deepDive: [
        {
          heading: "What the manager actually buys you",
          paragraphs: [
            "The features sound like a marketing list until each one saves you. IAM scoping: a policy that says this service may read exactly one secret path, so a compromised container cannot walk the vault. Audit logs: when an incident happens, you can answer who read the database password in the last thirty days with a query instead of a shrug. Versioning: rotation becomes adding a new version, not an in-place overwrite that breaks every reader simultaneously.",
            "The options in 2026: cloud-native managers (AWS Secrets Manager, GCP Secret Manager, Azure Key Vault) integrate tightly with IAM and rotation; HashiCorp Vault is platform-neutral with dynamic secrets — short-lived database credentials generated on demand; Doppler, Infisical and 1Password service accounts make the developer experience pleasant. The specific product matters far less than adopting the model: one place holds truth, access is granted per identity, and every read is recorded.",
          ],
        },
        {
          heading: "Fetch at boot, cache in memory",
          paragraphs: [
            "The integration pattern is simple and worth standardizing: at process start, authenticate with your workload identity, fetch the secrets you need from the manager, hold them in memory, and never write them to disk. The application reads from its config module; the config module reads from the manager. Local development gets the same flow — a Doppler run wrapper or Vault agent — so production is not running a code path developers have never executed.",
            "Resist the urge to build your own layer on top: a homegrown encrypted-blob-in-S3 scheme will have none of the auditing, none of the IAM scoping, and one more thing to get wrong. Also resist caching secrets in shared Redis or writing them into config databases — the manager's guarantees apply only while the value stays inside its access model. The moment you copy the vault into a worse vault, the worse vault is your security posture.",
          ],
        },
        {
          heading: "Naming, structure and failure modes",
          paragraphs: [
            "Structure secrets the way IAM will consume them: a path per environment and per service, like prod/payments/stripe/api-key. Path discipline is what makes least privilege enforceable — a policy can scope to a prefix, but only if prefixes mean something. Flatten everything into one namespace and every policy becomes an exception list that grows until someone grants admin just to end the pain.",
            "Decide the failure mode for manager downtime now, while calm: secrets managers are highly available, but your code should still fail loudly rather than silently fall back to stale local copies. A missing secret is a startup error with a clear message, not a cached value from last week read from a temp file nobody remembers writing. Availability is a property of the manager; correctness is a property of your integration.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Boot-time secret fetch",
        caption:
          "Identity first, then the fetch — the manager never hands a secret to an anonymous caller.",
        steps: [
          { label: "Process start", note: "config module initializes" },
          { label: "Workload identity", note: "IAM role or OIDC token" },
          { label: "Secrets manager", note: "checks policy, logs the read" },
          { label: "In-memory cache", note: "process memory only, no disk" },
          { label: "Application", note: "reads typed config" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The shell version of the diagram: authenticate, read one scoped path, never touch disk.",
        code: [
          "# Fetch one secret at boot; the IAM policy scopes this",
          "# service to exactly this path, and the read is logged",
          "export STRIPE_API_KEY=$(aws secretsmanager get-secret-value \\",
          "  --secret-id prod/payments/stripe/api-key \\",
          "  --query SecretString \\",
          "  --output text)",
          "",
          "# Vault equivalent: authenticate once, read one field",
          "vault login -method=oidc -no-print",
          "vault kv get -field=api-key prod/payments/stripe",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Granting every service a broad read on the entire secrets namespace.",
          fix: "Scope IAM policies to path prefixes per service and environment. A leaked container credential should read one secret, not the vault.",
        },
        {
          mistake: "Caching fetched secrets in Redis or writing them to a shared volume.",
          fix: "Keep values in process memory only. Every extra copy is a store you cannot audit, rotate or revoke.",
        },
        {
          mistake: "Authenticating to the secrets manager itself with static long-lived keys.",
          fix: "Use workload identity — IAM roles, OIDC federation, Vault AppRole with short TTLs. The credential that opens the vault should also expire.",
        },
        {
          mistake: "Silently falling back to a stale local copy when the manager is unreachable.",
          fix: "Fail loudly at startup. Manager downtime is rare and visible; a process running on week-old credentials is invisible and wrong.",
        },
      ],
      fieldChecklist: [
        "I keep every production secret in the manager; no laptop holds a production credential.",
        "I scope IAM policies per service to specific secret paths, and I can show the policy for each.",
        "I have manager audit logs enabled, and I know how to query who read what, when.",
        "I fetch secrets at boot into memory; I write them to no disk or shared cache.",
        "I encode environment and service in secret paths, and the naming is documented.",
        "I develop locally against the same fetch flow the production path uses.",
      ],
      keyTerms: [
        {
          term: "IAM scoping",
          definition:
            "An access policy that grants an identity read on specific secret paths only — the difference between one leaked credential and total compromise.",
        },
        {
          term: "Dynamic secrets",
          definition:
            "Credentials generated on demand with built-in TTLs, like Vault's temporary database users; nothing static exists to leak.",
        },
        {
          term: "Audit log",
          definition:
            "The manager's record of every read and write, with identity and timestamp — the evidence that turns incident response into queries.",
        },
        {
          term: "Versioning",
          definition:
            "Per-secret history that makes rotation additive — publish a new version, verify readers, retire the old one.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you integrate a secrets manager without becoming dependent on it at every request?",
          a: "Fetch at boot, cache in memory for the life of the process. Requests hit the cache, not the manager, so latency and availability stay application-local. For rotation, either restart on schedule or re-fetch periodically through the same config module. The manager is on the critical path only at process start, which is exactly where a loud failure belongs.",
        },
        {
          q: "Vault or a cloud-native secrets manager — how do you choose?",
          a: "Default to the cloud manager your platform already trusts: IAM integration is free and auditing is native. Vault earns its operational cost when you need platform-neutral secrets across clouds, dynamic short-lived database credentials, or features like transit encryption. I do not adopt Vault for its reputation; I adopt it for dynamic secrets or multi-cloud truth.",
        },
        {
          q: "What makes a secrets manager better than an encrypted config file in S3?",
          a: "Every guarantee the homegrown scheme lacks: per-path IAM scoping, versioning, rotation hooks, and an audit log that answers who read what. An encrypted blob gives you one decryption key to protect and no visibility into access. The failure I have seen with hand-rolled schemes is not weak encryption — it is that nobody can say which services read which values, ever.",
        },
      ],
      quiz: [
        {
          question: "What does per-secret IAM scoping actually protect against?",
          options: [
            "The secret being read too slowly at boot",
            "A compromised workload walking the entire vault after leaking one credential",
            "Secrets expiring too early",
            "Developers forgetting variable names",
          ],
          answerIndex: 1,
          explanation:
            "Scoping bounds the blast radius of any single compromised identity: the leaked payments container can read the payments path, not the database master password. Flat namespaces make every policy an exception list.",
        },
        {
          question:
            "Where should a secret fetched at boot live for the rest of the process lifetime?",
          options: [
            "On a shared volume so restarts are fast",
            "In Redis so all instances share it",
            "In process memory only",
            "In a second .env file for resilience",
          ],
          answerIndex: 2,
          explanation:
            "Every copy outside the manager loses auditing, rotation and revocation. Process memory is ephemeral, per-instance and dies with the process — the least persistent, least shared place available.",
        },
        {
          question: "The secrets manager is briefly unreachable at deploy time. Correct behavior?",
          options: [
            "Fail startup loudly with a clear error",
            "Fall back to the last cached file on disk",
            "Continue with empty values and warn",
            "Retry silently for 24 hours",
          ],
          answerIndex: 0,
          explanation:
            "A missing secret is a startup error, not a degraded mode. Silent fallbacks run week-old credentials invisibly; a loud failure gets fixed in minutes and never quietly lies about which credentials are live.",
        },
      ],
    },
    {
      number: 4,
      title: "Call APIs from the Server",
      summary:
        "The moment a third-party API key is reachable from the browser, it is public. 'But it's minified' is not encryption — it is compression.",
      keyIdea:
        "Thin backend proxy pattern. The key stays on the server; the client gets scoped ephemeral tokens.",
      deepDive: [
        {
          heading: "Minified is not encrypted",
          paragraphs: [
            "Anything the browser downloads, the user can read. Open devtools and click any bundled JavaScript file: minification shortens variable names, it does not hide string literals. A key inlined into a Next.js or Vite bundle is visible in one search, and environment variables prefixed NEXT_PUBLIC_ or VITE_ are inlined into the artifact at build time by design. The browser cannot hold a secret; it is a hostile runtime you do not control.",
            "This is not a frontend-engineering failure — it is an architecture boundary. Third-party keys authenticate your account to a vendor, and whoever presents the key is the account owner as far as the vendor is concerned. Rate limits, billing and data access all attach to it. If the client presents it, every user of your site is presenting your identity, and scraping your endpoint scrapes it too.",
          ],
        },
        {
          heading: "The thin proxy pattern",
          paragraphs: [
            "The fix is a route on your own server: the client calls your /api endpoint, your backend attaches the key server-side, forwards the request, and returns the response. The key never crosses the network boundary to the user. Keep the proxy thin — pass through the request, add the credential, do not build a shadow API — and add your own auth and rate limiting per user session so one browser cannot drain your vendor quota anonymously.",
            "When the client genuinely needs to talk to the vendor directly — maps rendering in the browser, streaming responses — vendors offer scoped, restricted, often ephemeral alternatives: Google Maps keys restricted to your domains, Firebase tokens minted per user, temporary tokens from your backend with short TTLs and minimal scope. The pattern is constant: the long-lived master key stays on the server, and the client holds only what is scoped to its session and its task.",
          ],
        },
        {
          heading: "What about edge and serverless?",
          paragraphs: [
            "Serverless and edge functions are server — they count. A Vercel edge function or Cloudflare Worker holding the key in platform-managed secrets is the same pattern with shorter compute; the key is configured in the platform's secret store, not the bundle. The boundary to respect is not server machine but code the user cannot inspect. Anything executed on infrastructure you control can hold credentials; anything shipped to the browser cannot.",
            "Audit this boundary per feature, not once for the codebase. A new client-side chart that calls the vendor directly is a new leak even if the rest of the app is clean. The review question is mechanical: for every third-party integration, where is the key read — from server-side config, or from something the browser downloads? If the answer is the bundle, the fix is the proxy, and it is rarely more than an afternoon.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where does this API call run?",
        caption: "Only one of these branches keeps the key yours.",
        start: "A third-party API call",
        branches: [
          {
            label: "Browser calls vendor",
            outcome: "Key is public. Proxy it.",
            good: false,
          },
          {
            label: "Server route proxies",
            outcome: "Key stays server-side",
            good: true,
          },
          {
            label: "Client holds scoped token",
            outcome: "Ephemeral, per-session, minimal",
            good: true,
          },
          {
            label: "Edge or worker holds it",
            outcome: "Server-side by definition",
            good: true,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The client authenticates to your route; your server authenticates to the vendor.",
        code: [
          "// The browser calls your route; the key never crosses to the client",
          "import { Hono } from 'hono';",
          "import { vendorClient } from './vendor'; // SDK reads the key from config",
          "import { rateLimit } from './limits';",
          "",
          "const app = new Hono();",
          "",
          "app.post('/api/summarize', async (c) => {",
          "  const user = c.get('user');",
          "  await rateLimit(user.id, 'summarize'); // your quota, per user",
          "",
          "  const { text } = await c.req.json();",
          "  const result = await vendorClient.summarize(text);",
          "  return c.json(result); // response goes out; the key never does",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Using NEXT_PUBLIC_ or VITE_ prefixes for a third-party API key.",
          fix: "Those prefixes deliberately inline values into the browser bundle. Only truly public values get them; keys go through a server route.",
        },
        {
          mistake: "Assuming minification or obfuscation hides a key in the bundle.",
          fix: "String literals survive minification untouched; devtools exposes them. If the browser downloads it, treat it as published.",
        },
        {
          mistake: "Running a proxy route with no auth or rate limit of its own.",
          fix: "Require your session auth and per-user rate limits on the proxy, or strangers will drain your vendor quota through it anonymously.",
        },
        {
          mistake: "Shipping a restricted client key but forgetting domain restrictions.",
          fix: "A restricted key without domain, app or referrer checks is unrestricted again. Configure the vendor-side restrictions and verify from another origin.",
        },
      ],
      fieldChecklist: [
        "I read every third-party key only in server-side code, and I grep the client bundle for each key name to confirm.",
        "I keep public env prefixes (NEXT_PUBLIC_, VITE_, EXPO_PUBLIC_) limited to values that are safe to publish.",
        "I require session auth and per-user rate limits on proxy routes before they touch the vendor.",
        "I give client-side vendor integrations only scoped, restricted or ephemeral tokens minted by the backend.",
        "I have opened devtools on this app and confirmed no secret-shaped strings appear in any downloaded file.",
        "I answer the review question 'where is this key read?' for every new integration.",
      ],
      keyTerms: [
        {
          term: "Thin proxy",
          definition:
            "A minimal server route that attaches the vendor key server-side and forwards the request; the client sees only your API.",
        },
        {
          term: "Public bundle",
          definition:
            "Everything the browser downloads — JavaScript, source maps, service workers — all of it is published content.",
        },
        {
          term: "Restricted API key",
          definition:
            "A vendor key limited by domain, app identity, referrer or IP; useful for direct client calls, useless if restrictions are skipped.",
        },
        {
          term: "Ephemeral token",
          definition:
            "A short-lived, narrowly scoped credential minted by your backend for one client session — expires on its own.",
        },
      ],
      interviewQuestions: [
        {
          q: "The team wants to call an AI vendor directly from the browser for latency. How do you respond?",
          a: "Ask what the vendor offers for exactly this. Most have browser-safe options: restricted keys with domain checks, or ephemeral tokens your backend mints per session. The master key stays server-side either way; the client gets something scoped, expiring and tied to an authenticated user. If the vendor offers none of that, an edge route adds barely any latency and keeps the key yours.",
        },
        {
          q: "How do you audit an existing frontend for leaked keys?",
          a: "Scan artifacts, not source: build the app, then search every file the browser downloads for key-shaped strings and known key names — bundle chunks, source maps if published, service worker files. Then check the runtime: the devtools network tab and any global config objects. I also rotate anything found regardless of how long it has been there.",
        },
        {
          q: "Why is 'the key is only in the mobile app binary' still a leak?",
          a: "A mobile binary is a bundle the user downloads. Strings survive stripping and obfuscation, and tools exist specifically to extract keys from apps. Vendors treat whatever presents the key as you. Mobile clients get the same treatment as browsers: your backend in the middle, or scoped ephemeral tokens — never a long-lived key embedded in the artifact.",
        },
      ],
      quiz: [
        {
          question:
            "What happens to a key inlined into a client bundle with a NEXT_PUBLIC_ prefix?",
          options: [
            "It stays server-side because Next.js hides it",
            "It is minified into unreadable form",
            "It ships to every visitor and is readable in devtools",
            "It is encrypted by the framework",
          ],
          answerIndex: 2,
          explanation:
            "Public prefixes are inlined into the artifact by design. Minification shortens identifiers, not string literals — anyone who downloads the bundle has the key.",
        },
        {
          question: "The correct place for a third-party secret key is…",
          options: [
            "In localStorage so the client can reuse it",
            "In server-side code that the browser cannot inspect",
            "In the client bundle, obfuscated",
            "In a public environment variable",
          ],
          answerIndex: 1,
          explanation:
            "The boundary is inspectability, not machines: code running on infrastructure you control can hold credentials; anything shipped to the browser cannot. The thin proxy is the standard pattern.",
        },
        {
          question:
            "A client genuinely needs to talk to the vendor directly. Best available pattern?",
          options: [
            "Mint a scoped, short-lived token from your backend for the session",
            "Embed the master key with obfuscation",
            "Share the master key with all logged-in users",
            "Move the key into a service worker",
          ],
          answerIndex: 0,
          explanation:
            "The master key stays server-side; the client receives a per-session token with minimal scope and TTL. Vendors offer restricted keys or ephemeral token endpoints for exactly this case.",
        },
      ],
    },
    {
      number: 5,
      title: "No Keys in Frontend",
      summary:
        "Chapter 4's rule, applied to the whole browser surface: bundles, source maps, service workers, mobile binaries — if it ships to the user, it is public.",
      keyIdea:
        "Scan the artifact, not the source. CI scans built artifacts for secret patterns. Source maps excluded from production.",
      deepDive: [
        {
          heading: "The full surface of frontend",
          paragraphs: [
            "The bundle is the obvious surface; it is not the whole one. Source maps shipped to production reconstruct your original source, comments included — anyone can browse your tree through the devtools sources panel. Service workers cache and ship their own scripts. Static export directories include files nobody remembers. Mobile binaries carry the same rule with worse ergonomics: extracting strings from an APK or IPA is a standard exercise, and obfuscation only slows it down. If the client downloads it, it is published.",
            "Some leakage is accidental at build time. A public-prefixed variable renamed carelessly, a config object attached to window for debugging, a GraphQL query embedding an internal header, a testing flag pointing at staging. None of these look like secrets in the source; assembled in the artifact they tell an attacker exactly where the real secrets are used. The artifact is the unit of truth about exposure, which is why the next section scans it.",
          ],
        },
        {
          heading: "Scan the artifact, not the source",
          paragraphs: [
            "Scanning source catches code you wrote; scanning artifacts catches what the build produced — both matter, but only the second is what the public actually receives. Make it a CI step: build the app, then run a scanner over the output directory. truffleHog's filesystem scanner reads every file in dist or .next; a plain grep pass with key-shaped regexes catches the rest. The scan runs against the same artifact that deploys, so it cannot drift from reality.",
            "Keep the scan fast and the rules shared: the same regex set used by the pre-commit hook (Chapter 13) drives the artifact scan, so there is one definition of secret-shaped across the team. Fail the build on a hit with the file and the matched rule in the message. A scan that emails warnings produces a graveyard of ignored warnings; a scan that blocks deploys produces fixes.",
          ],
        },
        {
          heading: "Source maps and debugging surfaces",
          paragraphs: [
            "Source maps deserve their own decision because they are so useful in incidents and so generous to attackers. The professional default: maps generated in every build, uploaded to your error tracker — Sentry and its equivalents ingest them for symbolication — but never deployed to the public origin. The tracker gets readable stack traces; the public gets minified ones. Most build tools support this as a one-line config: emit maps, do not publish them, upload in CI.",
            "The same discipline applies to anything else that aids debugging: verbose error responses leaking config paths, staging URLs embedded in production bundles, feature flag SDK keys that are actually project-wide admin keys. Feature flag and analytics keys are the most common safe-looking leaks — some vendors treat those keys as public by design, others do not. Classify each one explicitly instead of assuming the SDK's default is safe.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "What gets scanned",
        caption:
          "The source is what you wrote; the artifact is what the world receives — scan the second.",
        left: {
          heading: "Source scan",
          items: [
            "Runs on the repo, pre-commit and CI",
            "Catches keys in code and config files",
            "Cannot see what the build inlines",
            "Cheap, runs in milliseconds",
          ],
        },
        right: {
          heading: "Artifact scan",
          items: [
            "Runs on dist, .next or the binary",
            "Catches build-time inlining and drift",
            "Sees exactly what users download",
            "Runs after build, blocks the deploy",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Publishing source maps to production because 'they help debugging'.",
          fix: "Generate maps, upload them to the error tracker, exclude them from the public origin. Stack traces for you, minified code for everyone else.",
        },
        {
          mistake: "Scanning only source files and trusting the build not to add anything.",
          fix: "Scan the built artifact in CI — the same directory that deploys. Inlining and code generation are invisible to source scans.",
        },
        {
          mistake: "Treating an analytics or feature-flag SDK key as automatically public-safe.",
          fix: "Classify each SDK key against the vendor's actual access model. If it unlocks data or config, treat it as a secret and proxy it.",
        },
        {
          mistake: "Attaching config objects to window for debugging and leaving them in production.",
          fix: "Gate debug globals behind a non-production check, or strip them in the build. The window object is readable by any script on the page.",
        },
      ],
      fieldChecklist: [
        "I ship no source maps from production deploys; the error tracker receives them instead.",
        "I have CI build the artifact and scan the output directory before the deploy step.",
        "I keep the scanner's rules identical to the pre-commit rules — one definition of secret-shaped.",
        "I make a scan hit fail the build with the file and rule named in the message.",
        "I classify every SDK key (flags, analytics, maps) public-safe or secret, in writing.",
        "I strip debug globals, staging URLs and internal endpoints from the production artifact.",
      ],
      keyTerms: [
        {
          term: "Source map",
          definition:
            "A file mapping minified output back to original source; priceless for debugging, a gift to attackers if published.",
        },
        {
          term: "Artifact scan",
          definition:
            "A secret-pattern scan run over built output rather than source; the only scan that sees what users actually receive.",
        },
        {
          term: "Public-safe key",
          definition:
            "An SDK key whose vendor access model makes exposure harmless by design — classified explicitly, never assumed.",
        },
        {
          term: "Symbolication",
          definition:
            "Using source maps to turn minified stack traces into readable ones, done in the error tracker instead of on the public origin.",
        },
      ],
      interviewQuestions: [
        {
          q: "What do you scan for in a frontend, and where?",
          a: "Two passes. Pre-commit and CI scan the source for secret-shaped strings with the same rules everywhere. After the build, CI scans the artifact — the dist or .next output — because inlining, code generation and renames can produce exposure the source never contained. The artifact is what the public downloads, so it is the artifact that must pass.",
        },
        {
          q: "Are source maps a security problem or a developer convenience?",
          a: "Both, and the resolution is to separate their audiences: generate them always, upload them to the error tracker for symbolication, and never serve them from the public origin. You keep readable stack traces in incidents; attackers browsing your production assets find minified code. It is a build-config one-liner that removes an entire reconnaissance phase.",
        },
        {
          q: "Which frontend leak surprised you most?",
          a: "The quiet ones: a feature-flag SDK key that turned out to grant environment-wide config writes, a staging API URL inlined through a public env var, a config object parked on window for debugging that shipped for two years. None looked like a secret in source review. All of them were visible in the built artifact in one scan.",
        },
      ],
      quiz: [
        {
          question: "Why scan the built artifact instead of only the source?",
          options: [
            "Artifact scans run faster than source scans",
            "Source scanning is impossible in CI",
            "The build can inline or generate exposure the source never had — and the artifact is what users receive",
            "Artifact scans catch syntax errors too",
          ],
          answerIndex: 2,
          explanation:
            "Public env prefixes, code generation and bundler inlining all happen at build time. The artifact is the ground truth of exposure, so the scan that gates deploys must run on it.",
        },
        {
          question:
            "The professional way to keep readable stack traces without leaking source?",
          options: [
            "Upload source maps to the error tracker; never publish them to the origin",
            "Obfuscate the source maps",
            "Publish maps only for logged-in users",
            "Skip minification entirely",
          ],
          answerIndex: 0,
          explanation:
            "Symbolication belongs to the tracker: it ingests the maps, the public origin does not serve them. Developers keep readable traces; the browser gets minified output only.",
        },
        {
          question:
            "An SDK key for your feature flag tool ships in the client bundle. Correct classification?",
          options: [
            "Automatically safe — all SDK keys are public",
            "Safe if the bundle is minified",
            "Safe because the key is short",
            "A secret until the vendor's access model proves otherwise, in writing",
          ],
          answerIndex: 3,
          explanation:
            "Some SDK keys are public by design; others unlock configuration or data. The vendor's actual access model decides, and the classification is documented — never assumed from the key's name or length.",
        },
      ],
    },
    {
      number: 6,
      title: "Key Rotation",
      summary:
        "Static credentials age like milk, not wine. Rotation is the scheduled retirement that makes every leak a non-event.",
      keyIdea:
        "Overlap + dual-acceptance windows. Credential resolution is runtime-refreshable, no import-time singletons.",
      deepDive: [
        {
          heading: "Rotation is incident insurance",
          paragraphs: [
            "The value of rotation is easiest to see from the incident side. A key leaked today that was rotated last week is a story with no consequences: the thief holds a dead string. A key leaked today that has been the same since 2023 is a breach investigation. Rotation does not prevent leaks; it bounds how long any leaked credential stays dangerous, which is why the rotation interval should be shorter than the time you would need to notice a leak.",
            "This reframes the chore. You are not rotating because a compliance checkbox said so; you are rehearsing revocation. Every scheduled rotation is a full pass through the mechanism you will need at 2 a.m.: publish new value, prove readers work, retire old value, watch for failures. Teams that rotate quarterly execute the emergency path calmly; teams that never rotate discover, mid-incident, that nobody knows which service holds the key.",
          ],
        },
        {
          heading: "Overlap and dual acceptance",
          paragraphs: [
            "A rotation with zero downtime has two phases. First, dual acceptance: the consumer accepts both the old and the new credential, so you can publish the new one while everything keeps working. Second, the flip: new reads and writes use the new credential, and the old one is retired after a verification window. Cloud platforms build this in — AWS and GCP APIs accept two active key versions, and databases accept a new password while old sessions persist until they end.",
            "The verification window matters more than the flip: an internal consumer you forgot — the cron job on the retired VM, the partner's webhook config, the dashboard data source — fails on its own schedule, days later. Overlap gives those forgotten consumers time to surface without an outage. Set the old credential's retirement date when you publish the new one, and treat a key still in use at retirement as a finding, not a relief.",
          ],
        },
        {
          heading: "Runtime refresh, not import-time capture",
          paragraphs: [
            "Rotation at rest is useless if consumers freeze the value. Chapter 1's rule returns: resolve credentials through a function that can re-fetch, not a module-level constant captured at import. Secrets managers version values; Vault dynamic secrets generate fresh credentials per session; a config module with a TTL cache picks up new versions without a redeploy. The refresh path doubles as the emergency path — the same code that picks up scheduled rotation picks up incident rotation.",
            "Keep a rotation inventory: every credential, its location, its consumers, its rotation interval, and the exact commands or console paths for changing it. The inventory is most of the work; the mechanics are easy. When Chapter 12's playbook says rotate the payments key, the inventory is the difference between a five-minute action and an afternoon of archaeology through Slack threads and stale wikis.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The rotation loop",
        caption:
          "Publish, verify, retire — and every pass rehearses the emergency version of itself.",
        steps: [
          { label: "Publish new", note: "new version alongside old" },
          { label: "Dual accept", note: "consumers take both values" },
          { label: "Flip consumers", note: "config refreshes at runtime" },
          { label: "Verify window", note: "forgotten consumers surface" },
          { label: "Retire old", note: "revoke; watch for failures" },
          { label: "Audit usage", note: "old-key reads after retirement" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "A TTL cache makes scheduled and emergency rotation reachable without a redeploy.",
        code: [
          "// Credentials resolve through a refreshable resolver, never an import-time constant",
          "let cached: { value: string; fetchedAt: number } | null = null;",
          "const TTL_MS = 5 * 60 * 1000;",
          "",
          "export async function getStripeKey(): Promise<string> {",
          "  if (cached && Date.now() - cached.fetchedAt < TTL_MS) {",
          "    return cached.value;",
          "  }",
          "  // Secrets manager call: AWS Secrets Manager, Vault or Doppler",
          "  const value = await secrets.get('prod/payments/stripe/api-key');",
          "  cached = { value, fetchedAt: Date.now() };",
          "  return cached.value;",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Capturing credentials in module-level constants at import time.",
          fix: "Resolve through a function with a TTL cache, so a new secret version reaches consumers without a redeploy or restart.",
        },
        {
          mistake: "Rotating by overwriting the secret in place with no overlap.",
          fix: "Publish the new value alongside the old, confirm dual acceptance, flip, then retire. In-place overwrites turn rotation into an outage.",
        },
        {
          mistake:
            "Rotating the database but forgetting the cron job, partner webhook or dashboard using the same key.",
          fix: "Keep a per-credential consumer inventory and a verification window before retiring the old value; let the forgotten ones surface.",
        },
        {
          mistake: "Postponing rotation indefinitely because the key 'has never leaked'.",
          fix: "Rotation bounds the damage of the leak you have not noticed yet. Schedule it, automate the reminders, rehearse the mechanics quarterly.",
        },
      ],
      fieldChecklist: [
        "I keep every long-lived credential in an inventory with a rotation interval and a named owner.",
        "I resolve credentials through runtime-refreshable code, never import-time constants.",
        "I keep the rotation path overlapped: new and old values both accepted during the window.",
        "I retire old values as a deliberate step after verification, not part of the same keystroke.",
        "I completed the last scheduled rotation without downtime, and I documented the commands used.",
        "I alert on reads using a retired credential, not just let them fail as requests.",
      ],
      keyTerms: [
        {
          term: "Dual acceptance",
          definition:
            "A window during which both old and new credential values are valid, making rotation a flip instead of an outage.",
        },
        {
          term: "Rotation interval",
          definition:
            "The scheduled lifetime of a credential; chosen so a leaked key expires before a leak would be noticed and handled.",
        },
        {
          term: "TTL cache",
          definition:
            "An in-process cache with a time-to-live that re-fetches secrets from the manager, giving rotation a runtime path.",
        },
        {
          term: "Rotation inventory",
          definition:
            "The list of every credential with its consumers, location and rotation commands — the document that makes 2 a.m. fast.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you rotate a credential used by many services with zero downtime?",
          a: "Overlap and dual acceptance. Publish the new value as a second version, make consumers accept either value — usually by having them re-read through a refreshable resolver — then flip, hold a verification window, and retire the old version. The window is where forgotten consumers surface safely. I treat any old-key usage found in that window as inventory to fix, not noise.",
        },
        {
          q: "What makes rotation actually happen in practice, rather than staying a policy?",
          a: "Ownership and mechanics. Every credential in the inventory has a named owner, an interval, and documented commands; calendar or CI reminders fire on schedule; and the refresh code path means rotation rarely needs a redeploy. Quarterly rehearsals — rotate one real credential end-to-end — keep the muscle memory current. Policy without a runnable procedure decays into a wiki page nobody opens.",
        },
        {
          q: "Why does rotation matter if you already scan for leaks?",
          a: "Scanning shortens time-to-detection; rotation shortens time-to-harm. They multiply: a leaked key that rotates weekly is dangerous for days at most, and detection can take that long. A key that never rotates stays dangerous until detection succeeds, and detection is not guaranteed — crawlers find keys that scanners miss. Rotation is the control that works when everything else fails.",
        },
      ],
      quiz: [
        {
          question: "What is the main security value of scheduled rotation?",
          options: [
            "It prevents keys from ever leaking",
            "It makes keys impossible to guess",
            "It bounds how long any leaked credential stays dangerous",
            "It removes the need for audit logs",
          ],
          answerIndex: 2,
          explanation:
            "Rotation is insurance, not prevention. A key rotated last week is a dead string to whoever stole it; a key from three years ago is a breach. The interval should be shorter than your realistic detection time.",
        },
        {
          question:
            "During a zero-downtime rotation, why keep the old credential valid for a window?",
          options: [
            "To save cost on the secrets manager",
            "So forgotten consumers surface safely instead of failing days later",
            "Because cloud providers require two keys",
            "To keep old sessions logged in forever",
          ],
          answerIndex: 1,
          explanation:
            "The verification window is the safety net for consumers nobody remembered — cron jobs, partner configs, dashboards. They fail during overlap, where it is visible, instead of during retirement, where it is an outage.",
        },
        {
          question:
            "A consumer captured its credential in an import-time constant. What does rotation require?",
          options: [
            "A redeploy or restart of that consumer for every rotation",
            "Nothing — constants update automatically",
            "Disabling the secrets manager",
            "Doubling the rotation interval",
          ],
          answerIndex: 0,
          explanation:
            "Import-time capture freezes the value. Refreshable resolution — a function with a TTL cache reading from the manager — is what makes rotation reachable at runtime; without it, every rotation is a deployment.",
        },
      ],
    },
    {
      number: 7,
      title: "Least Privilege",
      summary:
        "Every credential should be able to do exactly its job and nothing else. 'Admin because it was easier' is how one leaked key becomes a total breach.",
      keyIdea:
        "Inventory walk per credential: what does it need? Delete the difference. Quarterly least-privilege audit shrinks drifted permissions.",
      deepDive: [
        {
          heading: "Scope is blast radius",
          paragraphs: [
            "Two keys can look identical in a config file and differ by a factor of a hundred in damage. The image-resizer worker with an S3 read-only policy on one bucket leaks into a bad afternoon; the same worker with an admin access key leaks into a bad quarter. Least privilege is not a compliance ritual — it is the act of deciding, in advance and in writing, the maximum damage each credential can do.",
            "The discipline starts with an inventory walk per credential: what does this identity actually need to do, on which resources, from where? Write the answer as a policy — S3 read on this bucket and prefix, secretsmanager GetSecretValue on these two paths, nothing else. Then delete the difference between the written policy and what the credential currently holds. The gap between what it needs and what it has is your exposure, measured.",
          ],
        },
        {
          heading: "The mechanics of scoping",
          paragraphs: [
            "Cloud IAM gives you the vocabulary: resource ARNs and paths, action lists, condition keys. A scoped policy names the bucket, not the account; the secret path, not the namespace; the DynamoDB table, not the region. Conditions tighten further — restrict by source network, VPC endpoint, or time window where the platform supports it. Where IAM is too coarse, app-level scoping steps in: a database user per service with grants on its own schema, vendor API keys created per integration with per-key permissions.",
            "Scope at grant time, not audit time. Every new credential is born narrow and earns breadth through a documented need — broadening later is a review, narrowing later is a fight nobody wins. The default-inverse pattern, start admin and trim when there is time, never trims, because there is never time and nothing is visibly broken. Narrow credentials break visibly on day one, when the fix is five minutes old in your memory.",
          ],
        },
        {
          heading: "The quarterly audit",
          paragraphs: [
            "Permissions drift: services grow, someone adds s3:PutObject for a one-off script, the script dies, the permission stays. The quarterly audit is the counter-force: walk the inventory, for each credential diff actual usage logs against granted permissions, and shrink to the used set. CloudTrail, GCP audit logs and vendor key-usage dashboards give you the actually-used side; the policy gives you the granted side; the difference is the deletion list.",
            "Retire aggressively in the same pass. Credentials unused for a quarter get revoked, not renewed — re-creating one is documented and takes minutes, while an orphaned admin key is a standing invitation. The audit ends with two numbers worth tracking over time: total credentials, and credentials with permissions beyond their written need. Both should trend down; if they trend up, the drift is organizational, not technical, and the fix is a process change, not more policies.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "The least-privilege audit grid",
        caption:
          "Usage frequency against excess scope; the bottom-right quadrant dies today.",
        axes: { x: "Scope beyond its job", y: "How often it is used" },
        quadrants: [
          { label: "Healthy", note: "used daily, scoped tight" },
          { label: "Trim now", note: "hot but over-scoped" },
          { label: "Retire soon", note: "dormant, narrowly scoped" },
          { label: "Revoke today", note: "dormant and over-scoped" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "Read one bucket prefix and one secret path — this policy is the worker's entire world.",
        code: [
          "# IAM policy document (YAML form) for the image-resize worker",
          "Statement:",
          "  - Sid: ResizeWorkerReadsOnePrefix",
          "    Effect: Allow",
          "    Action: s3:GetObject",
          "    Resource: arn:aws:s3:::media-uploads/resize/*",
          "  - Sid: ReadOwnSecretsOnly",
          "    Effect: Allow",
          "    Action: secretsmanager:GetSecretValue",
          "    Resource: arn:aws:secretsmanager:*:<ACCOUNT_ID>:secret:prod/resize/*",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Reusing one admin credential across every service 'to keep things simple'.",
          fix: "One identity per service, scoped to its resources. Simplify with shared policy templates, not shared blast radius.",
        },
        {
          mistake: "Starting every new integration with a broad key and planning to trim later.",
          fix: "Grant narrowly at birth and broaden through review. Narrow-on-day-one failures are loud and cheap; later trims never happen.",
        },
        {
          mistake: "Auditing granted permissions without checking what is actually used.",
          fix: "Diff usage logs (CloudTrail, vendor dashboards) against granted policies each quarter; shrink to the used set, revoke the unused.",
        },
        {
          mistake: "Leaving one-off script permissions in place after the script is gone.",
          fix: "Delete the permission in the same change that deletes the script. Orphaned grants are the main source of quarterly drift.",
        },
      ],
      fieldChecklist: [
        "I map every credential to one service and one written-down job.",
        "I write policies that name specific resources and paths, not whole accounts or namespaces.",
        "I grant new credentials narrow at birth; broadening requires a documented reason.",
        "I run a quarterly audit that diffs actual usage against granted scope and produces a deletion list.",
        "I revoked every credential unused for a quarter, and I documented how to re-create one.",
        "I can state, for each credential, the maximum damage it could do if leaked.",
      ],
      keyTerms: [
        {
          term: "Least privilege",
          definition:
            "The principle that every identity holds only the permissions its job requires — nothing more, because the excess is pure blast radius.",
        },
        {
          term: "Blast radius",
          definition:
            "The maximum damage a credential can do if leaked; scoping is the act of deciding it in advance.",
        },
        {
          term: "Permissions drift",
          definition:
            "The slow accumulation of granted-but-unused permissions as services change; the quarterly audit is the counter-force.",
        },
        {
          term: "Resource-scoped policy",
          definition:
            "An IAM policy naming specific resources and paths — buckets, secret paths, tables — rather than entire namespaces.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you approach least privilege for a service that already has an admin key?",
          a: "Inventory walk first: log the key's actual usage for a couple of weeks, write down the real resource set and actions, then write the narrow policy and run the service alongside the broad key before switching. The transition proves nothing was missed. Finally revoke the admin key — the audit is not done until the over-scoped credential no longer exists.",
        },
        {
          q: "What does a quarterly least-privilege audit look like in practice?",
          a: "For each credential: pull usage logs, diff against granted permissions, and shrink to the used set. Anything dormant for a quarter gets revoked outright. I track two numbers over time — total credentials, and credentials exceeding their written need — because both should fall. Rising numbers mean the process is broken upstream, usually broad keys granted at birth.",
        },
        {
          q: "How do you scope access where cloud IAM is too coarse?",
          a: "Drop a layer: database users per service with grants on their own schema, vendor keys created per integration with per-key permissions, app-level authorization in front of shared resources. IAM handles the coarse boundary; the application enforces the fine one. The rule stays constant — each credential's scope equals its job, verified by usage logs rather than intent.",
        },
      ],
      quiz: [
        {
          question: "A leaked key's damage is primarily determined by…",
          options: [
            "How long the key is",
            "Its scope — the permissions and resources it can touch",
            "The programming language of the service",
            "The provider's pricing tier",
          ],
          answerIndex: 1,
          explanation:
            "Scope is blast radius. A read-only policy on one prefix and an admin key on the whole account differ by orders of magnitude in incident outcome, regardless of how the leak happened.",
        },
        {
          question: "Which credential gets revoked first in the audit grid?",
          options: [
            "Frequently used with tight scope",
            "Frequently used but over-scoped",
            "Dormant with tight scope",
            "Dormant and over-scoped",
          ],
          answerIndex: 3,
          explanation:
            "Dormant plus over-scoped is pure downside: nobody depends on it, and its excess permissions are standing exposure. It dies today. Dormant-but-scoped gets retired on a schedule; hot-but-broad gets trimmed under review.",
        },
        {
          question: "Why grant narrowly at birth instead of trimming later?",
          options: [
            "Broadening later is a documented review; narrowing later never happens because nothing is visibly broken",
            "Narrow credentials are cheaper",
            "Cloud providers forbid permission changes",
            "Narrow keys are faster to provision",
          ],
          answerIndex: 0,
          explanation:
            "The default-inverse pattern — start broad, trim when there is time — never trims. Narrow credentials fail loudly on day one when the fix is cheap and the need is fresh in memory.",
        },
      ],
    },
    {
      number: 8,
      title: "Leaks in Git History",
      summary:
        "Deleting a file does not delete it. Git remembers everything — every commit, every branch, every force-push — and so do the clones.",
      keyIdea:
        "Once pushed, treat the secret as compromised. Rotate first, audit usage, then optionally rewrite history.",
      deepDive: [
        {
          heading: "Git never forgets",
          paragraphs: [
            "Git is append-only by design. A commit that added a secret remains reachable from every clone, every fork, every reflog entry and every remote that fetched it — even after the file is deleted in a later commit, even after the branch is deleted, even after a force-push overwrites it. Deleting hides the secret from the current checkout; it does nothing to the object database, which is exactly where every tool that looks for secrets goes digging.",
            "History rewriting tools exist — git filter-repo, BFG Repo-Cleaner — and they work, with caveats. They rewrite every commit containing the secret, changing all descendant hashes; every collaborator must re-clone or carefully rebase; open pull requests break; force-pushing the rewritten history is its own coordination event. And none of it matters if the repo was ever cloned outside your team, forked on the forge, or mirrored. Rewriting is hygiene for your own copy; it is not undisclosure.",
          ],
        },
        {
          heading: "The order of operations",
          paragraphs: [
            "Rotate first, because rotation is the only step that changes the facts. Audit second: provider logs — cloud audit trails, vendor dashboards — tell you whether the credential was used between leak and rotation, from where, doing what. That window is your incident, and its size determines whether you are writing a changelog entry or a postmortem. Third, clean: rewrite history with git filter-repo or BFG, and confirm the scanner finds nothing on a full-history rescan.",
            "Communicate in parallel, not after: anyone holding a clone must know that hashes changed and how to re-clone, and the decision about public disclosure depends on the repo's visibility and the credential's blast radius. Teams routinely get the order wrong — spending the first hour on history surgery while the stolen key keeps working. The key's remaining validity is the emergency; the git objects are archaeology.",
          ],
        },
        {
          heading: "Making history rescannable",
          paragraphs: [
            "Full-history scanning should be a routine, boring operation: gitleaks detect over the whole repo, or truffleHog's git scanner with verification against provider APIs, run in CI on the default branch and after any incident. A baseline file allowlists old findings you have consciously accepted, so new findings stand out. The scan turning up nothing after a cleanup is the receipt that the rewrite worked.",
            "Prevention compounds with practice: gitleaks' pre-commit mode stops most secrets at the commit boundary; push protection catches the rest at the forge; CI full-history scans catch whatever bypassed both. Teams that scan full history weekly find their own leaks before outsiders do. The goal is not a spotless history — it is knowing, with receipts, exactly which secrets ever entered it and that none remain valid.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The leak triage sequence",
        caption:
          "Rotate changes the facts; audit sizes the incident; rewriting is hygiene that comes last.",
        stages: [
          { label: "Rotate", note: "revoke or replace the credential" },
          { label: "Audit usage", note: "provider logs, leak-to-rotation window" },
          { label: "Notify clones", note: "hashes will change; re-clone" },
          { label: "Rewrite history", note: "filter-repo or BFG, then force-push" },
          { label: "Rescan", note: "full-history scan as the receipt" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Rotate first, then rewrite with git filter-repo, then prove the cleanup with a full-history scan.",
        code: [
          "# Rotate first. Then scrub the value from every commit it touched",
          "pip install git-filter-repo",
          "git clone --mirror <REPO_URL> repo-scrub",
          "cd repo-scrub",
          "",
          "echo 'leaked-value-here==>REDACTED' > replacements.txt",
          "git filter-repo --replace-text replacements.txt",
          "",
          "# Republish and prove the cleanup with a full-history scan",
          "git push --force --all",
          "gitleaks detect --source . --redact -v",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Spending the first hour of an incident rewriting history while the key still works.",
          fix: "Rotate and audit before touching git. Rotation changes the facts; history surgery only changes your copy of the past.",
        },
        {
          mistake: "Force-pushing a rewritten history without coordinating with clone holders.",
          fix: "Announce the rewrite, freeze pushes, and give every collaborator the re-clone steps. Uncoordinated rewrites shred open pull requests and forks.",
        },
        {
          mistake: "Believing a history rewrite undid the leak.",
          fix: "Rewriting cleans your copy; clones, forks and caches keep the old objects. Undisclosure is rotation, nothing else.",
        },
        {
          mistake: "Running history scans only during incidents.",
          fix: "Scan full history on a schedule and after incidents, with a baseline allowlist so new findings are impossible to miss.",
        },
      ],
      fieldChecklist: [
        "I rotate immediately in response to any pushed secret, before any git surgery.",
        "I have checked provider audit logs for the leak-to-rotation window for unfamiliar use.",
        "I can run a full-history secret scan on this repo and interpret its output.",
        "I keep a baseline allowlist of accepted findings; I treat everything else as new.",
        "I document history rewrite steps (filter-repo or BFG) before they are ever needed.",
        "I keep written re-clone instructions for collaborators ready for the day a rewrite happens.",
      ],
      keyTerms: [
        {
          term: "Append-only history",
          definition:
            "Git's object model: commits are never removed by later commits or deletes; every pushed object remains reachable in every clone.",
        },
        {
          term: "git filter-repo",
          definition:
            "The modern history-rewriting tool that scrubs paths or values across all commits, changing descendant hashes.",
        },
        {
          term: "BFG Repo-Cleaner",
          definition:
            "A simpler history-rewriting alternative to filter-repo, focused on removing files and secret patterns.",
        },
        {
          term: "Full-history scan",
          definition:
            "A secret scan over every commit rather than the latest tree — the receipt that a cleanup actually worked.",
        },
      ],
      interviewQuestions: [
        {
          q: "A secret was pushed two years ago and the repo has many forks. What do you do?",
          a: "Rotate immediately — that is the only step that defuses the key. Then audit usage in provider logs for the whole exposed window. History rewriting is close to pointless with external forks: you cannot reach them. I document the finding, rescan full history to find siblings, and put the prevention gates — hooks, CI scanning, push protection — in place so it does not repeat.",
        },
        {
          q: "Why is rotating before rewriting so important?",
          a: "Because rewriting takes coordination — clones, forks, open pull requests, force-pushes — and none of it changes whether the stolen key works. Rotation is minutes and ends the exposure; rewriting is hours and only cleans your copy. Teams that invert the order spend their incident window on git archaeology while the credential keeps answering requests.",
        },
        {
          q: "How do you keep a large repo's history continuously audited for secrets?",
          a: "Full-history scanning in CI with a maintained baseline allowlist: accepted findings are recorded, everything new fails the build. gitleaks or truffleHog run fast enough for a weekly full pass on most repos, and verification against provider APIs tells you whether a found string is still active. The baseline turns the scan from noise into a changelog of exposure.",
        },
      ],
      quiz: [
        {
          question:
            "What does deleting the secret's file in a new commit do to the old commit?",
          options: [
            "Removes it from history",
            "Nothing — the old commit and its contents remain reachable in every clone",
            "Marks it as confidential",
            "Compresses it out of the object database",
          ],
          answerIndex: 1,
          explanation:
            "Git is append-only: a later commit cannot erase an earlier one. The secret stays in the object database and every clone until a deliberate rewrite — and in external clones even after that.",
        },
        {
          question: "Correct order after discovering a pushed secret?",
          options: [
            "Rotate, audit usage, rewrite history last, then rescan",
            "Rewrite history, force-push, then rotate",
            "Delete the repo and start over",
            "Email everyone, then decide",
          ],
          answerIndex: 0,
          explanation:
            "Rotation changes the facts; auditing sizes the incident; rewriting is hygiene for your own copy and needs coordination. The rescan is the receipt that the cleanup worked.",
        },
        {
          question:
            "After a successful filter-repo rewrite and force-push, is the secret safe?",
          options: [
            "Yes — the history no longer contains it",
            "Yes, if you also delete the branch",
            "No — every pre-existing clone, fork and cache still holds the old objects; only rotation actually defuses it",
            "Yes, if the repo is private",
          ],
          answerIndex: 2,
          explanation:
            "Rewriting cleans your copy of history. Any clone made before the rewrite keeps the old commits, which is why rotation — not rewriting — is the step that ends the exposure.",
        },
      ],
    },
    {
      number: 9,
      title: "Secret Scanning",
      summary:
        "Humans leak; machines catch. Secret scanning turns 'hopefully nobody commits a key' into a pipeline gate with receipts.",
      keyIdea:
        "Layered scanning with one rule set: pre-commit, CI, full-history baseline, artifact scans, provider push protection.",
      deepDive: [
        {
          heading: "One rule set, many layers",
          paragraphs: [
            "The architecture that works is one definition of secret-shaped enforced at every layer where code travels: the pre-commit hook scans staged changes, CI scans every push and pull request, a scheduled job scans full history against a baseline, the build scan checks artifacts before deploy, and the forge's push protection blocks recognized patterns at the server. Five layers, one ruleset — usually gitleaks' rules with your additions.",
            "One ruleset is the governance trick. When each layer invents its own patterns, findings contradict each other and every exception needs four explanations. With a shared rules file, an allowlist entry added for a false positive is fixed everywhere at once, and a new pattern — your webhook signing secret format, a partner's token scheme — propagates the same day. The rules file lives in the repo, versioned and reviewed like any other code.",
          ],
        },
        {
          heading: "Detectors and verification",
          paragraphs: [
            "Generic entropy scanning catches strings that look random and high-entropy; provider-specific detectors catch known formats — AWS access key IDs, Stripe keys, Slack tokens, Google API keys — with far fewer false positives. The mature scanners (gitleaks, truffleHog, GitGuardian, GitHub secret scanning) combine both, and truffleHog and GitHub can verify candidates live against the provider API: a verified-active finding is an incident, an unverified one is a warning. Verification turns a pile of regex hits into a ranked queue.",
            "Tune carefully, because scanner trust dies by a thousand false positives. Every new rule gets tested against your actual repos for a while in report-only mode before it blocks anything. Findings get triaged with a disposition — real leak, safe pattern, allowlisted forever — and the disposition is recorded, not just dismissed. A scanner whose alerts are habitually closed unreviewed is providing the feeling of security without the function.",
          ],
        },
        {
          heading: "What scanning cannot do",
          paragraphs: [
            "Scanners match patterns; they do not understand context. A key constructed at runtime and concatenated in pieces, a secret in a database dump attachment, credentials in a private package, or a key embedded in a binary's strings section can pass every regex you own. Scanning is a net with known holes, which is why it layers with rotation (bounds damage), least privilege (bounds scope), and short-lived credentials (nothing static to find).",
            "The strategic end-state worth naming: the less static-secret surface you have, the less scanning has to catch. Workload identity and dynamic secrets (Chapter 11) shrink the population of leakable strings toward zero; scanning then guards the shrinking remainder — vendor keys you cannot federate, signing secrets, one-off integrations. Measure scanning by what it stops, not by alerts raised; its success metric is leaks that die in a hook, invisible to everyone.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "The scanning stack",
        caption:
          "One ruleset, enforced at every place code can travel — the leak must survive five chances to die.",
        layers: [
          { label: "Pre-commit hook", note: "staged diff, milliseconds" },
          { label: "CI push scan", note: "every PR and branch" },
          { label: "History baseline", note: "scheduled full-history pass" },
          { label: "Artifact scan", note: "built output before deploy" },
          { label: "Push protection", note: "provider blocks at the server" },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Running the scanner in report-only mode forever because blocking annoyed someone.",
          fix: "Tune the rules against real repos for a while, then block. A scanner that only warns becomes a feed nobody reads.",
        },
        {
          mistake: "Each repo and layer maintaining its own divergent secret patterns.",
          fix: "One versioned rules file in the repo, consumed by hooks, CI and history scans. Exceptions get fixed once, everywhere.",
        },
        {
          mistake: "Closing scanner alerts as false positives without recording a disposition.",
          fix: "Triage with receipts: real leak, safe pattern, or allowlisted with a reason. Unreviewed closures train everyone to ignore alerts.",
        },
        {
          mistake: "Relying on scanning alone and shipping static keys everywhere regardless.",
          fix: "Scan and shrink the target: rotate, scope tightly, and move to short-lived credentials where possible. Scanning guards what remains.",
        },
      ],
      fieldChecklist: [
        "I drive pre-commit, CI, history and artifact scans from one versioned ruleset.",
        "I block merges in CI on scan hits; I treat report-only mode as a tuning phase, not a home.",
        "I record a disposition for every finding — leak, safe pattern, or allowlisted with reason.",
        "I run a scheduled full-history scan with a baseline, so new findings are impossible to miss.",
        "I verify candidate secrets against provider APIs where supported, and I treat verified-active as an incident.",
        "I know which credentials in this project escape generic rules, and I have custom patterns for them.",
      ],
      keyTerms: [
        {
          term: "Entropy scan",
          definition:
            "A detector for high-randomness strings that looks like keys without knowing any provider's format — broad, noisier.",
        },
        {
          term: "Provider detector",
          definition:
            "A rule matching a vendor's documented key format (AWS, Stripe, Slack), giving precise, low-false-positive findings.",
        },
        {
          term: "Verification",
          definition:
            "Checking a found candidate against the provider API to see if it is still active — the difference between a warning and an incident.",
        },
        {
          term: "Baseline allowlist",
          definition:
            "The recorded set of accepted findings that lets a full-history scan surface only new exposure.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you design secret scanning so people do not ignore it?",
          a: "One ruleset everywhere, tuned against real repos before blocking, and dispositions recorded for every finding. Alerts die when they are habitually noise: rules get tested in report-only mode first, false positives get allowlisted with reasons once and fixed everywhere, and verified-active findings page someone. The scanner's goal is few alerts, each one meaningful — not maximum volume.",
        },
        {
          q: "What are the limits of secret scanning?",
          a: "It matches patterns, so it misses context-dependent leaks: secrets assembled at runtime, database dumps, binary strings, private packages. That is why scanning is one control among several — rotation bounds how long any miss stays dangerous, least privilege bounds what it can do, and workload identity removes static keys entirely. I treat scanning as the net under the other three, not the foundation.",
        },
        {
          q: "Walk me through adopting secret scanning on a legacy repo with existing leaks.",
          a: "First a full-history scan in report-only mode to size the problem. Every finding gets a disposition: active credentials rotate now, dead ones get allowlisted with the date and reason. Then blocking turns on for new commits, the baseline records accepted history, and a scheduled scan keeps the past audited. Adoption is an incident-response exercise first and a pipeline gate second.",
        },
      ],
      quiz: [
        {
          question: "Why keep one ruleset across all scanning layers?",
          options: [
            "It makes scans run faster",
            "Multiple rulesets are impossible to configure",
            "It is required by the scanner license",
            "Findings, exceptions and new patterns stay consistent — a fix or allowlist entry applies everywhere at once",
          ],
          answerIndex: 3,
          explanation:
            "Divergent rulesets mean contradicting findings and exceptions that need four explanations. A shared versioned rules file is governance: one definition of secret-shaped, fixed once, enforced everywhere.",
        },
        {
          question:
            "A scan finds a candidate AWS key and verification says it is still active. This is…",
          options: [
            "A false positive to allowlist",
            "An incident: rotate first, then audit usage, then investigate the source",
            "Safe because the repo is private",
            "A task for next quarter's cleanup",
          ],
          answerIndex: 1,
          explanation:
            "Verification changes the finding's class: an active credential outside its intended place is exposure, regardless of repo visibility. Rotation and usage audit come before any cleanup or allowlisting.",
        },
        {
          question: "Which leak would a pattern-based scanner most likely miss?",
          options: [
            "A secret assembled from concatenated pieces at runtime",
            "A hardcoded AWS access key in a config file",
            "A Slack token pasted into a commit message",
            "A Stripe key in a test fixture",
          ],
          answerIndex: 0,
          explanation:
            "Scanners match string patterns; a secret constructed piecewise at runtime never exists as a contiguous literal. That residual risk is handled by rotation, scoping and short-lived credentials, not better regexes.",
        },
      ],
    },
    {
      number: 10,
      title: "Webhook Signatures",
      summary:
        "Your webhook endpoint is an open URL that triggers business logic. Without signature verification, it is a public API that lets strangers invoke your code.",
      keyIdea:
        "HMAC over raw bytes, constant-time comparison, before any parsing. Timestamp tolerance + event id dedup.",
      deepDive: [
        {
          heading: "The unauthenticated endpoint on your server",
          paragraphs: [
            "A webhook receiver is unusual: it is your code, listening at a public URL, triggered by whoever shows up. Without verification, anyone who discovers the URL can POST fake payment-succeeded events — unlocking content, marking invoices paid, triggering refunds — and your logs will look perfectly normal. The signature turns that open URL into an authenticated one: the provider signs each payload with a shared secret, and your endpoint verifies the signature before trusting a single byte.",
            "Every major provider ships this: Stripe, GitHub, Shopify, Twilio and Slack all sign webhooks with an HMAC scheme and document a verification recipe. The differences are cosmetic; the shape is constant. If a provider you use offers no signature mechanism, that is a reason to front it with something that authenticates another way — an ingest route validating a rotating token, or a queue fed by a verified forwarder.",
          ],
        },
        {
          heading: "Verify raw bytes, in constant time",
          paragraphs: [
            "Three implementation details decide whether the verification is real. First, compute the HMAC over the exact raw request body — the bytes as they arrived — not over a re-serialized parsed object, because JSON key order and whitespace changes will break or, worse, let manipulated payloads through. Second, compare digests with a constant-time function — crypto.timingSafeEqual in Node, hmac.compare_digest in Python — so timing cannot leak how many bytes matched. Third, do all of this before parsing or acting on the payload.",
            "Add the two provider-provided sanity checks that matter as much as the math. The timestamp header exists because signatures can be replayed: reject deliveries older than a small tolerance window — minutes, not hours. The event id exists because providers retry: deduplicate on it so one delivery processed twice does not double-charge a customer. Signature, freshness, idempotence — three checks, all cheap, all before business logic.",
          ],
        },
        {
          heading: "Operational hygiene for signing secrets",
          paragraphs: [
            "The webhook signing secret is a credential like any other: it lives in the secrets manager, not in code, and it rotates. Providers issue signing secrets with versions for exactly this — Stripe's whsec keys support rolling rotation, where the endpoint verifies against the current secret and tolerates the previous one during the overlap window. Build the endpoint to try multiple secret versions; a hard-coded single secret makes rotation an outage.",
            "Log verification failures with enough structure to be useful: which check failed, the source, the event id if any. A spike in signature failures is either misconfiguration after a rotation or someone probing the endpoint, and you want the dashboard that tells you which. Keep the verification module separate from business logic so it can be unit-tested with recorded fixtures — real captured headers, not hand-typed examples — and regression-tested whenever the provider changes its scheme.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Verify before you trust",
        caption:
          "Nothing reaches business logic until the signature, freshness and idempotence checks pass.",
        steps: [
          { label: "Raw body", note: "keep the exact bytes" },
          { label: "Timestamp check", note: "reject replays outside tolerance" },
          { label: "HMAC compute", note: "signing secret from manager" },
          { label: "Constant-time compare", note: "timingSafeEqual" },
          { label: "Event dedup", note: "id seen before? drop" },
          { label: "Business logic", note: "parse and act, finally" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Raw bytes in, timestamp tolerance, HMAC, constant-time compare — and parsing only happens after true.",
        code: [
          "import { createHmac, timingSafeEqual } from 'node:crypto';",
          "import { config } from './config';",
          "",
          "export function verifyWebhook(rawBody: Buffer, header: string): boolean {",
          "  // header shape: t=<unix_ts>,v1=<hex_digest>",
          "  const [tsPart, sigPart] = header.split(',');",
          "  const ts = Number(tsPart.slice(2));",
          "  const provided = sigPart.slice(3);",
          "",
          "  if (Math.abs(Date.now() / 1000 - ts) > 300) return false; // replay guard",
          "",
          "  const expected = createHmac('sha256', config.webhookSecret)",
          "    .update(Buffer.concat([Buffer.from(String(ts)), rawBody]))",
          "    .digest('hex');",
          "",
          "  return timingSafeEqual(Buffer.from(expected), Buffer.from(provided));",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Verifying the HMAC over re-serialized JSON instead of the raw request bytes.",
          fix: "Read the body as a Buffer before any parser touches it and sign exactly those bytes. Re-serialization changes whitespace and key order.",
        },
        {
          mistake: "Comparing signature digests with === or plain string equality.",
          fix: "Use constant-time comparison — timingSafeEqual in Node, compare_digest in Python. Timing leaks how much of a forged signature matched.",
        },
        {
          mistake: "Trusting deliveries with valid signatures but stale timestamps.",
          fix: "Enforce a small timestamp tolerance and dedupe on the event id. Signatures prove origin, not freshness or uniqueness.",
        },
        {
          mistake: "Hardcoding one signing secret with no rotation support in the endpoint.",
          fix: "Verify against the current secret version and tolerate the previous one during rotation windows, the way Stripe signing keys roll.",
        },
      ],
      fieldChecklist: [
        "I verify signatures before parsing on every webhook endpoint, over the raw bytes.",
        "I compare digests in constant time, and I name the function in code review.",
        "I guard every receiver with a timestamp tolerance and an event-id dedup.",
        "I keep signing secrets in the manager, and the endpoint tolerates version overlap for rotation.",
        "I log signature failures with reason, source and event id, and I graph them.",
        "I test the verification module with recorded real-provider fixtures.",
      ],
      keyTerms: [
        {
          term: "HMAC",
          definition:
            "Hash-based message authentication code — a signature computed from the payload and a shared secret, proving the sender holds the secret.",
        },
        {
          term: "Constant-time compare",
          definition:
            "A comparison whose runtime does not vary with how many bytes match, preventing timing oracles on signature checks.",
        },
        {
          term: "Replay attack",
          definition:
            "Re-delivering a captured, validly signed payload later; defeated with timestamp tolerance.",
        },
        {
          term: "Idempotent receiver",
          definition:
            "A webhook handler that drops duplicate event ids, because providers retry deliveries and duplicates double-apply side effects.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through securing a webhook endpoint end to end.",
          a: "Read the body as raw bytes before any parser; check the provider's timestamp header against a small tolerance; compute the HMAC with the signing secret from the secrets manager; compare in constant time; dedupe on the event id; only then parse and dispatch. Failures log reason, source and event id. It is one small module, unit-tested against recorded fixtures, reused by every receiver.",
        },
        {
          q: "Why does constant-time comparison matter if attackers cannot see timings from outside?",
          a: "Because timing is observable in more ways than people assume — response-time distributions over many requests leak byte-by-byte match progress, and internal networks leak even more readily. The cost of timingSafeEqual is one line. There is no scenario where string equality is the better choice, so the review rule is simple: signature comparisons are never ordinary equality.",
        },
        {
          q: "How do you rotate a webhook signing secret without dropping deliveries?",
          a: "Providers version signing secrets for this: configure the endpoint to accept the current and previous secret during the overlap window, rotate on the provider side, then retire the old version after the tolerance passes. Verification failures stay flat during a healthy rotation; a spike means a consumer never learned the new secret, and the logs name it.",
        },
      ],
      quiz: [
        {
          question: "Why compute the webhook HMAC over the raw request body?",
          options: [
            "It is faster than signing parsed JSON",
            "Re-serialization changes bytes — key order and whitespace — breaking valid deliveries and allowing manipulation",
            "Raw bodies are encrypted by default",
            "Providers reject signed parsed JSON",
          ],
          answerIndex: 1,
          explanation:
            "The signature covers exact bytes. Parsing and re-stringifying the payload produces a different byte string, so verification fails — or worse, a modified payload re-signed by your own code appears valid.",
        },
        {
          question:
            "A delivery arrives with a valid signature but a timestamp from six hours ago. What do you do?",
          options: [
            "Process it — the signature is what matters",
            "Process it but log a warning",
            "Reject it as a replay outside tolerance",
            "Queue it for manual review",
          ],
          answerIndex: 2,
          explanation:
            "Signatures prove origin, not freshness. The timestamp check exists precisely for this: a captured payload replayed hours later should die at the door, before it double-applies side effects.",
        },
        {
          question: "What does deduplicating on the event id protect against?",
          options: [
            "Forged signatures",
            "Timing attacks",
            "Expired signing secrets",
            "Double-processing when providers retry deliveries",
          ],
          answerIndex: 3,
          explanation:
            "Providers retry on failure and at-least-once delivery is the norm. Without idempotence, one signed event processed twice charges a customer twice. Signature, freshness, idempotence — three separate checks.",
        },
      ],
    },
    {
      number: 11,
      title: "Short-Lived / Dynamic Credentials & Workload Identity",
      summary:
        "The end-state of secret management is having no static secrets at all: your service proves who it is with a token that is minutes old and dies on its own.",
      keyIdea:
        "Cloud IAM roles and OIDC federation. CI/CD uses OIDC federation — no long-lived cloud keys in CI secrets.",
      deepDive: [
        {
          heading: "Prove identity, do not carry it",
          paragraphs: [
            "Every static secret is a liability with a shelf life measured in your vigilance. Workload identity inverts the model: instead of storing a key, your service proves what it is — an attested identity — and receives short-lived credentials in exchange. AWS instances assume IAM roles via the instance metadata service; Kubernetes workloads use service account token projection; GitHub Actions exchanges an OIDC token for cloud credentials; Vault generates database credentials on demand with built-in TTLs.",
            "The security property is different in kind, not degree. A leaked static key works until someone notices and revokes it — days, months, forever. A leaked session token works for its TTL — usually minutes to an hour — and often only from the workload's context. The blast radius shrinks from your account to this task, this hour. You stop rotating credentials; the platform does, continuously, as part of issuing them.",
          ],
        },
        {
          heading: "CI/CD: the highest-value migration",
          paragraphs: [
            "CI systems are the classic static-key graveyard: an AWS access key id and secret sitting in repository settings, valid forever, readable by anyone with admin on the repo, passed to every build step including third-party actions. OIDC federation removes them. The workflow requests an identity token from the CI provider, your cloud trusts that issuer, and a role assumption policy maps repo and branch to permissions. The cloud never stores a CI secret at all.",
            "The trust configuration is where the real work is: scope the role to your repository and branch conditions, not any token from the platform. A policy that trusts the issuer without subject conditions would let any repo on the forge assume your role. Pin the audience, restrict subjects to your org and repo, and keep the role's permissions to what deploys actually need — federation changes the credential's lifetime, not the least-privilege rules from Chapter 7.",
          ],
        },
        {
          heading: "The migration path for the rest",
          paragraphs: [
            "Not everything can federate on day one, so migrate by category. Cloud-run workloads move first — roles instead of keys is the documented default on AWS, GCP and Azure. CI moves second, via OIDC. Third-party vendor keys that support scoped, expiring tokens move third. What remains static shrinks to genuine exceptions — signing secrets, legacy vendor integrations — and those inherit the Chapter 6 rotation discipline with the Chapter 9 scanning net underneath.",
            "Expect the debugging curve: identity errors replace key errors, and the error messages are less familiar. Unable-to-assume-role means the trust policy, the subject claim or the permission boundary disagreed with the request — read the policy and the token's claims side by side. Invest once in a debug command that prints the workload's resolved identity and effective permissions; you will use it every time federation misbehaves, and it pays for itself in one incident.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "How should this workload authenticate?",
        caption:
          "Federation and roles first; a static key is the last resort, not the default.",
        start: "A workload needs cloud access",
        branches: [
          {
            label: "Cloud runtime",
            outcome: "Attached IAM role, zero keys",
            good: true,
          },
          {
            label: "CI/CD pipeline",
            outcome: "OIDC federation, no stored keys",
            good: true,
          },
          {
            label: "Third party with tokens",
            outcome: "Scoped, expiring vendor tokens",
            good: true,
          },
          {
            label: "Only static keys possible",
            outcome: "Rotate hard, scan, migrate off",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "OIDC federation: the workflow proves identity with a minutes-old token; no cloud keys live in repository secrets.",
        code: [
          "permissions:",
          "  id-token: write   # request an OIDC token from the CI provider",
          "  contents: read",
          "",
          "jobs:",
          "  deploy:",
          "    runs-on: ubuntu-latest",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - uses: aws-actions/configure-aws-credentials@v4",
          "        with:",
          "          role-to-assume: arn:aws:iam::<ACCOUNT_ID>:role/gha-deploy",
          "          aws-region: us-east-1",
          "      # No cloud keys in repo secrets — the IAM trust policy",
          "      # pins org, repo and branch via the token subject claim",
          "      - run: aws sts get-caller-identity",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Keeping long-lived AWS keys in CI secrets because federation looks complicated.",
          fix: "Federation is a one-afternoon setup: trust policy with subject conditions, id-token permission, the configure step. Delete the static keys afterwards.",
        },
        {
          mistake: "Trusting the OIDC issuer without subject or audience conditions.",
          fix: "Pin the trust policy to your org, repo and branch via subject claims, and pin the audience. An unconstrained trust lets any repo assume your role.",
        },
        {
          mistake: "Federating the credential but granting it an over-broad role.",
          fix: "Federation changes lifetime, not scope. The assumed role still follows Chapter 7: resources named, actions minimal, usage audited.",
        },
        {
          mistake: "Treating session tokens as leak-proof and skipping basic hygiene.",
          fix: "Short TTLs shrink risk, they do not erase it. Keep logs, scope tightly, and still rotate the one thing that does not expire itself.",
        },
      ],
      fieldChecklist: [
        "I keep no long-lived cloud keys in CI secrets; deploys authenticate via OIDC federation.",
        "I pin issuer, audience and subject (org, repo, branch) in every OIDC trust policy.",
        "I authenticate cloud workloads through attached roles, not stored credentials.",
        "I can debug a failed role assumption by reading the trust policy next to the token's claims.",
        "I keep remaining static credentials on a documented exception list with rotation owners.",
        "I keep token TTLs and role permissions as narrow as the workload's actual job.",
      ],
      keyTerms: [
        {
          term: "Workload identity",
          definition:
            "A platform-attested identity for a service or job, used to obtain short-lived credentials instead of storing static keys.",
        },
        {
          term: "OIDC federation",
          definition:
            "Exchanging a CI provider's OpenID Connect token for temporary cloud credentials through a trust policy — no stored cloud keys.",
        },
        {
          term: "Trust policy",
          definition:
            "The IAM document that says which issuer, audience and subject may assume a role — where over-broad configuration becomes anyone's repo.",
        },
        {
          term: "Dynamic secrets",
          definition:
            "Credentials generated per-use with built-in expiry, like Vault's temporary database users; nothing static exists to leak.",
        },
      ],
      interviewQuestions: [
        {
          q: "How would you eliminate static cloud keys from a CI/CD pipeline?",
          a: "OIDC federation. The workflow requests an identity token from the CI provider; the cloud trusts that issuer with a policy pinning audience and subject to the org, repo and branch; the job assumes a scoped role and gets minutes-lived credentials. Then the static keys get deleted from repository secrets, and usage moves to role session logs where it is attributable per run.",
        },
        {
          q: "What are the failure modes of workload identity, and how do you debug them?",
          a: "Trust-policy mismatches: audience, subject or issuer claims not matching what the platform issued; clock skew; roles missing permissions the workflow needs. I read the token's claims beside the trust policy line by line, and I keep a debug command that prints the workload's resolved identity and effective permissions. The errors are unfamiliar at first, then completely mechanical.",
        },
        {
          q: "Is a short-lived session token still a secret that needs handling?",
          a: "Yes, with proportionate care. It expires in minutes and is often context-bound, but during its life it works — so it stays out of logs and artifacts, and its role stays least-privilege. The difference is consequence: a leaked session token is an hour of scoped risk, while a leaked static key is an unbounded incident until someone notices.",
        },
      ],
      quiz: [
        {
          question: "What is the core security advantage of OIDC federation in CI?",
          options: [
            "No long-lived cloud credential exists to leak; the cloud issues minutes-old credentials per run",
            "Tokens are encrypted at rest",
            "Builds run faster without secrets",
            "It removes the need for least privilege",
          ],
          answerIndex: 0,
          explanation:
            "The repository holds no cloud keys at all. Each run presents a fresh identity token, the trust policy decides what it may assume, and the resulting credentials expire on their own.",
        },
        {
          question: "Which OIDC trust policy is safe?",
          options: [
            "Trusting the GitHub issuer for any subject",
            "Trusting your org, specific repo and branch, with a pinned audience",
            "Trusting any issuer with your org in the subject",
            "Trusting the issuer and checking the repo in application code later",
          ],
          answerIndex: 1,
          explanation:
            "The trust policy is the gate. Without subject and audience conditions, any repository on the platform can mint a token your cloud accepts. Scope it to your org, repo and branch, and pin the audience.",
        },
        {
          question: "A workload gets credentials by assuming an IAM role. What does that NOT change?",
          options: [
            "The credential's lifetime",
            "Where credentials are stored",
            "The need for rotation scheduling",
            "The need for least-privilege scoping and audit",
          ],
          answerIndex: 3,
          explanation:
            "Federation and roles change how credentials are issued and how long they live. Scope is still your decision: the assumed role needs named resources and minimal actions, and its usage still lands in audit logs.",
        },
      ],
    },
    {
      number: 12,
      title: "Emergency Key Revocation & Incident Playbook",
      summary:
        "At 2 a.m. with a leaked production key, you do not want a debate — you want a script. This chapter is that script, written while calm.",
      keyIdea:
        "Contain first. Containment before understanding is the rule. Quarterly rehearsal rotates one real credential end-to-end.",
      deepDive: [
        {
          heading: "Contain first, understand second",
          paragraphs: [
            "The playbook exists to override your instincts at the worst moment. The instinct is to investigate: figure out how it leaked, who did it, how bad it is — while the credential keeps working for whoever holds it. The rule is containment before understanding: deactivate first, investigate second. A key that is disabled cannot do more damage, and every question you wanted to answer remains answerable from logs afterwards. Revocation is fast; continued exposure is not.",
            "Containment is graded by credential class, decided in advance. Cloud access keys: disable, do not delete — disabled preserves attribution trails and lets you re-enable if a critical consumer breaks. Database passwords: rotate with dual acceptance if you can afford minutes, hard-rotate if you cannot. Signing secrets: publish the new one and accept overlap. Vendor keys: revoke through the provider's console or API, which is why the playbook records the exact path per vendor.",
          ],
        },
        {
          heading: "The written playbook",
          paragraphs: [
            "The playbook is a living document with one section per credential class: where it lives, who can revoke it, the exact commands or console paths, the consumers that will break, and the rollback. For each: detection-to-containment should be minutes, not meetings. It names the on-call decision rights explicitly — anyone on call may deactivate a key; nobody needs approval at 2 a.m. to stop ongoing damage. Hesitation costs more than false positives.",
            "After containment, the flow is familiar from Chapter 8: audit the usage window in provider logs, identify unfamiliar access, rotate downstream dependencies, notify affected consumers, and only then do postmortem work — how it leaked, why scanning missed it, which control goes in this week. Write the postmortem while the timeline is fresh, and file each control as an issue with an owner, because postmortem actions without owners are how the same incident recurs.",
          ],
        },
        {
          heading: "Rehearsal is the difference",
          paragraphs: [
            "A playbook nobody has executed is a theory. The quarterly rehearsal is deliberately small and real: rotate one production credential end-to-end during business hours, following the playbook exactly, with the team watching. Every rehearsal finds something — a consumer missing from the inventory, a runbook command that changed, a dashboard that never got the new secret — and finding it during rehearsal costs minutes instead of revenue.",
            "Track two numbers per rehearsal: time from decision to containment, and number of surprises. The first should be minutes; the second should trend to zero over a year. Teams that rehearse rotate calmly because the mechanics are muscle memory; teams that do not discover, during the real event, that their playbook describes an organization chart from two reorgs ago. The rehearsal also doubles as the best secrets-management onboarding exercise you can run.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The 2 a.m. runbook",
        caption:
          "Minutes to containment; the questions can wait until the key cannot hurt anyone.",
        stages: [
          { label: "Contain", note: "disable, do not delete" },
          { label: "Assess use", note: "audit logs for the window" },
          { label: "Rotate deps", note: "downstream consumers next" },
          { label: "Notify", note: "consumers and stakeholders" },
          { label: "Postmortem", note: "leak path, missing control" },
          { label: "Rehearse", note: "quarterly, one real key" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Disable before delete — containment preserves the evidence while stopping the damage.",
        code: [
          "# Contain first: disable, do not delete (preserves the audit trail)",
          "aws iam update-access-key \\",
          "  --access-key-id <LEAKED_KEY_ID> \\",
          "  --status Inactive",
          "",
          "# Confirm containment before anything else",
          "aws iam get-access-key-last-used --access-key-id <LEAKED_KEY_ID>",
          "",
          "# Audit what it did during the exposure window",
          "aws cloudtrail lookup-events \\",
          "  --lookup-attributes AttributeKey=AccessKeyId,AttributeValue=<LEAKED_KEY_ID> \\",
          "  --max-results 50",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Investigating how the key leaked before disabling it.",
          fix: "Containment before understanding. A disabled key stops the damage; the investigation works fine from logs afterwards.",
        },
        {
          mistake: "Deleting compromised cloud keys immediately.",
          fix: "Disable instead. Disabled keys stop working but keep their audit trail; deletion destroys the attribution you are about to need.",
        },
        {
          mistake: "A playbook stored in a wiki nobody has ever executed.",
          fix: "Rehearse quarterly: rotate one real production credential end-to-end during business hours. Every rehearsal finds gaps while they are still cheap.",
        },
        {
          mistake: "Requiring manager approval before revoking a credential at night.",
          fix: "Write the decision rights down: on-call may contain immediately, always. Hesitation costs more than any false positive.",
        },
      ],
      fieldChecklist: [
        "I maintain a written playbook with per-credential containment steps, owners and rollback.",
        "I keep on-call decision rights explicit: anyone can contain, no approval needed.",
        "I disable cloud keys, never delete them, during containment.",
        "I write down and test the audit queries for the exposed window.",
        "I rehearsed this quarter and rotated one real credential end-to-end.",
        "I file rehearsal surprises as issues with owners, not just note them.",
        "I measure time from decision to containment and trend it down.",
      ],
      keyTerms: [
        {
          term: "Containment",
          definition:
            "The first incident action — make the credential unable to do harm — deliberately ordered before understanding how it leaked.",
        },
        {
          term: "Disable vs delete",
          definition:
            "Disabling a cloud key stops its use while preserving audit trails; deletion destroys the evidence you are about to need.",
        },
        {
          term: "Runbook",
          definition:
            "The per-credential playbook: exact commands, console paths, consumers that break, and rollback — written while calm.",
        },
        {
          term: "Rehearsal",
          definition:
            "A scheduled, real, end-to-end rotation of one production credential that keeps the playbook executable and finds gaps cheaply.",
        },
      ],
      interviewQuestions: [
        {
          q: "It is 2 a.m. and a production AWS key appears in a public repository. What do you do?",
          a: "Disable the key — update-access-key to Inactive — before anything else; disabling keeps the audit trail that deletion destroys. Then audit CloudTrail for the exposed window: what ran, from where. Rotate dependent consumers to a new key, notify stakeholders, and only afterwards do the postmortem: leak path, why scanning missed it, which control ships this week. The order is containment, assessment, rotation, learning.",
        },
        {
          q: "How do you keep an incident playbook from rotting?",
          a: "Rehearsal with receipts. Quarterly, rotate one real production credential end-to-end following the playbook; record time-to-containment and count the surprises; file every gap as an owned issue. The rehearsal keeps commands current, consumers inventoried and decision rights fresh — and it doubles as the best onboarding exercise for new engineers, because they see the whole credential surface in one afternoon.",
        },
        {
          q: "What belongs in the playbook besides the revocation commands?",
          a: "The consumers that will break when the key dies, and their fix paths; the audit queries for the exposure window; the rollback for each containment action; stakeholder notification templates; and the decision rights — who may contain without approval. Commands alone get you containment; the surrounding sections get you a fast, complete recovery without a second outage.",
        },
      ],
      quiz: [
        {
          question: "First action when a production key is found leaked?",
          options: [
            "Open an investigation into how it leaked",
            "Post in the team channel for discussion",
            "Disable or revoke the credential",
            "Wait for the security team's morning review",
          ],
          answerIndex: 2,
          explanation:
            "Containment before understanding. Every minute of investigation is a minute the credential keeps working for whoever holds it; the investigation works exactly the same from logs afterwards.",
        },
        {
          question: "Why disable a compromised AWS key rather than delete it?",
          options: [
            "Disabled keys are cheaper",
            "Deletion is faster",
            "AWS does not allow deleting keys",
            "Disabling stops use while preserving the audit trail needed for attribution",
          ],
          answerIndex: 3,
          explanation:
            "You are about to need the key's usage history for the exposure window. Disabled keeps the evidence and stops the damage; deletion stops the damage and destroys the evidence.",
        },
        {
          question: "What is the main purpose of the quarterly rehearsal?",
          options: [
            "To train the on-call rotation schedule",
            "To keep the playbook executable and find inventory gaps while they are cheap",
            "To satisfy an external audit",
            "To rotate every credential in the company",
          ],
          answerIndex: 1,
          explanation:
            "A playbook nobody has run is a theory. One real end-to-end rotation per quarter surfaces stale commands, missing consumers and unclear decision rights — during business hours, for minutes of cost.",
        },
      ],
    },
    {
      number: 13,
      title: "Pre-commit Hooks & CI Secret Detection",
      summary:
        "Chapters 2 and 9 built the scanners; this chapter wires them into the two moments that matter — the developer's commit, and the team's merge.",
      keyIdea:
        "Identical rulesets at both layers. Hook bootstrap documented; failure messages tell the developer exactly what to do next.",
      deepDive: [
        {
          heading: "Two moments, one contract",
          paragraphs: [
            "Secrets cross from private to shared at exactly two moments: when a commit is created on a laptop, and when it merges into the shared branch. Wire scanning into both, with the same ruleset — the pre-commit hook scans staged changes in milliseconds, and CI scans the push and the pull request with the identical rules file. The developer who skips or lacks the hook meets the same gate in CI, with the same message.",
            "Identical rulesets are what make the system feel fair rather than arbitrary. When CI rejects a commit the hook would have rejected, the developer learns the hook was missing or stale — which is a bootstrap problem, not a discipline problem. Divergent rules produce the opposite: confusion about which scanner is right, exceptions argued per layer, and a slow drift toward disabling whichever gate failed last.",
          ],
        },
        {
          heading: "The hook must bootstrap itself",
          paragraphs: [
            "The most common failure of pre-commit scanning is nothing technical: half the team has the hook, half does not, because installation was a Slack message from three months ago. Make the hook install itself: a bootstrap script every contributor runs once — a make setup or npm run setup — which installs dependencies, installs the git hook, and verifies it works by scanning a deliberately dirty fixture file. The README states it as step two of cloning, not as a footnote.",
            "Frameworks reduce the drift: pre-commit (the Python framework) pins hook versions in a committed config file, so everyone runs the same gitleaks revision; husky does the same for Node ecosystems. A periodic CI check can verify the hook configuration on main matches what CI runs — hooks are code, and code rots silently unless something tests it. The framework also gives each contributor the same scanner binary, not whatever version their machine remembers.",
          ],
        },
        {
          heading: "Failure messages are the product",
          paragraphs: [
            "When the gate fires, the developer is mid-thought and slightly annoyed; the message decides whether the experience feels like a guardrail or an obstacle. A good failure names the file and line, the rule that matched, whether the finding looks like a known provider's key, and the exact next steps: remove and rotate if real, use the documented allowlist format if false positive, or the override flag for deliberate fixtures with the review requirement that follows.",
            "Deliberate exceptions need a paved road, or developers will pave their own. Test fixtures, documentation examples and detected-false-positive patterns each get their own documented mechanism — a markers-based allowlist for fixtures, the rules file for pattern exemptions — so the git history shows why each exception exists and CI enforces the same list. The override flag exists for genuine emergencies; using it should be rare, visible, and followed by a fix the same day.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "The two gates",
        caption:
          "Same rules, two moments — the laptop gate is for speed, the CI gate is for truth.",
        left: {
          heading: "Pre-commit hook",
          items: [
            "Scans staged changes in milliseconds",
            "Fixes happen before the commit exists",
            "Depends on local setup, so coverage varies",
            "Bypassable with --no-verify",
          ],
        },
        right: {
          heading: "CI gate",
          items: [
            "Scans every push and pull request",
            "Runs the identical versioned ruleset",
            "Cannot be skipped by local habit",
            "The merge decision has receipts",
          ],
        },
      },
      codeExample: {
        language: "yaml",
        caption:
          "Pinned hook versions in a committed config file make every contributor run the same scanner.",
        code: [
          "# .pre-commit-config.yaml — pinned versions, bootstrapped by make setup",
          "repos:",
          "  - repo: https://github.com/gitleaks/gitleaks",
          "    rev: v8.24.3",
          "    hooks:",
          "      - id: gitleaks",
          "        args: [--staged, --redact]",
          "  - repo: https://github.com/Yelp/detect-secrets",
          "    rev: v1.5.0",
          "    hooks:",
          "      - id: detect-secrets",
          "        args: [--baseline, .secrets.baseline]",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Hook installation documented as a message in Slack instead of a bootstrap script.",
          fix: "One command installs everything and verifies the hook with a dirty fixture; the README lists it as step two of cloning.",
        },
        {
          mistake: "CI scanning with different rules than the pre-commit hook.",
          fix: "One versioned ruleset in the repo consumed by both layers, so local rejections and CI rejections always agree.",
        },
        {
          mistake: "Failure output that says only scan failed, with no file or next steps.",
          fix: "Print file, line, matched rule and the documented options: rotate if real, allowlist format if false positive, override flag with follow-up.",
        },
        {
          mistake: "Letting --no-verify become the team's habitual answer to hook friction.",
          fix: "Fix the friction the same day it appears — stale rules, slow scan, bad allowlist. A routinely bypassed gate is decoration.",
        },
      ],
      fieldChecklist: [
        "I made cloning the repo plus running its setup script install and verify the pre-commit hook.",
        "I pin hook versions in a committed config file (pre-commit or husky).",
        "I run the identical ruleset in CI on every push and pull request.",
        "I make failure messages name file, line, rule and the exact documented next steps.",
        "I put test fixtures on the markers-based allowlist, not bypass flags.",
        "I verify periodically that the hook config on main matches what CI runs.",
        "I keep override-flag usage visible in review and follow it up the same day.",
      ],
      keyTerms: [
        {
          term: "Pre-commit framework",
          definition:
            "A hook manager that pins scanner versions in a committed config file so every contributor runs identical tooling.",
        },
        {
          term: "Bootstrap script",
          definition:
            "The one-command setup that installs dependencies and hooks — the difference between full hook coverage and folklore.",
        },
        {
          term: "Baseline file",
          definition:
            "A scanner's record of accepted findings (detect-secrets' .secrets.baseline), so only new findings surface.",
        },
        {
          term: "Paved road",
          definition:
            "The documented, convenient path for legitimate exceptions — fixtures and allowlists — that keeps bypass flags rare.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you get a team from 'some people have hooks' to full coverage?",
          a: "Make installation part of bootstrap: one setup command installs the pinned hook and verifies it against a dirty fixture. CI then enforces the identical ruleset, so a missing hook surfaces as a CI rejection with instructions rather than as a leak. Coverage becomes a property of onboarding, and the periodic check that hook config matches CI keeps it from rotting.",
        },
        {
          q: "What makes a secret-scan failure message good?",
          a: "It answers the developer's actual questions in order: what matched (file, line, rule), how bad it looks (known provider format or generic entropy), and what to do next — rotate if real, documented allowlist format if false positive, override flag for deliberate fixtures with follow-up. A message that only says scan failed trains people to reach for bypass flags.",
        },
        {
          q: "How do you handle legitimate secrets in tests and docs?",
          a: "With paved roads: a markers-based allowlist for fixture files, pattern exemptions in the shared ruleset for documentation examples, each with a recorded reason. CI enforces the same lists, so exceptions are visible in review instead of hidden in bypass flags. The override path stays for genuine emergencies, rare, and followed by a same-day fix.",
        },
      ],
      quiz: [
        {
          question: "Why must the pre-commit hook and the CI gate share one ruleset?",
          options: [
            "To reduce CI compute cost",
            "So local and CI rejections always agree, keeping the system fair and maintainable",
            "Because scanners cannot support two rulesets",
            "To make scans run faster locally",
          ],
          answerIndex: 1,
          explanation:
            "Divergent rules produce contradiction: which gate is right, exceptions argued per layer, gates disabled after disputes. One versioned ruleset fixes an allowlist entry once, everywhere.",
        },
        {
          question:
            "The most common reason a pre-commit scanner fails to protect a team is…",
          options: [
            "Uneven installation — hooks exist only on laptops where someone remembered",
            "The scanner's regex quality",
            "Git refusing to run hooks",
            "CI scanning being redundant",
          ],
          answerIndex: 0,
          explanation:
            "The technical layer is usually fine; distribution is the failure. A bootstrap script that installs and verifies the hook turns coverage into a property of onboarding rather than memory.",
        },
        {
          question:
            "A developer needs to commit a test fixture containing a fake secret-shaped string. Best path?",
          options: [
            "Use --no-verify for this commit",
            "Comment out the string, commit, restore it after",
            "Use the documented markers-based allowlist for fixtures, visible to CI and review",
            "Ask CI to skip scanning this file forever",
          ],
          answerIndex: 2,
          explanation:
            "Legitimate exceptions need a paved road: markers or allowlist entries with recorded reasons, enforced identically in CI. Bypass flags and delete-then-restore are how real leaks hide inside fake-looking ones.",
        },
      ],
    },
    {
      number: 14,
      title: "Separation of Dev, Staging, and Prod Secrets",
      summary:
        "The staging database that talks to production payment keys is not a staging environment — it is a production breach with extra steps.",
      keyIdea:
        "Path-scoped secrets per environment; IAM refuses cross-env reads. No live production data in staging — synthetic or genuinely masked.",
      deepDive: [
        {
          heading: "Environments are trust boundaries",
          paragraphs: [
            "The failure usually starts with a convenience: staging reuses the production database password because standing up a second one is tedious, or the staging app holds a production payment key because test mode is flaky. From that moment, staging is production with worse hygiene — fewer eyes, looser access, older data. Every staging leak is then a production breach by inheritance, and staging leaks more because it is exactly where experimentation happens.",
            "Treat environments as trust boundaries the same way you treat network boundaries. A credential issued for staging must be structurally incapable of touching production resources — not discouraged by policy, refused by IAM. Cloud projects get this with separate accounts or projects per environment; Vault gets it with path scoping; database servers get it with separate instances or, at minimum, separate users and grants. The separation must be enforced by the thing holding the resource, because laptops and CI configs will get it wrong eventually.",
          ],
        },
        {
          heading: "Structural enforcement, not convention",
          paragraphs: [
            "Conventions rot; structure survives. The reliable pattern is one account or project per environment, each with its own IAM, its own secrets paths, its own data stores. A staging service's policy points at paths that simply do not exist in its account, and the cross-environment read fails with a permission error, which is the system working. Shared infrastructure like DNS or observability can be the documented exception with scoped, read-only cross-access.",
            "Enforce the boundary from both sides: IAM refuses staging identities on production resources, and a config-level guard refuses production-shaped values in staging deploys. The second guard catches the human path — someone pastes the production connection string into a staging variable, and a boot-time validation rejects it because its shape or resource identifier belongs to prod. Two independent walls, because the whole point of separation is that no single mistake crosses it.",
          ],
        },
        {
          heading: "Data is a secret too",
          paragraphs: [
            "Environment separation includes data, and this is where teams get complacent. A staging database restored from production carries real customer records, real tokens, real password hashes — under staging's weaker access controls, with staging's habit of third-party integrations and verbose logging. A staging breach then leaks customer data without anyone having touched production. The rule: synthetic data, or genuinely masked data — masked structurally, not reversibly nudged.",
            "Masking is a discipline of its own: emails and names transformed consistently, tokens and password hashes replaced rather than scrambled, identifiers re-mapped so foreign keys still hold. Hashing the email column but shipping real password hashes is not masking; it is a copy of the hardest-to-rotate credential in your system. If a dataset cannot be safely masked, staging does not get it — feature development works on synthetic data, and production-shaped testing happens in a locked, audited environment that is not staging.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Where should this credential live?",
        caption:
          "Every environment gets its own truth; the fourth branch is how breaches inherit.",
        start: "A secret needs a home",
        branches: [
          {
            label: "Dev",
            outcome: "Throwaway creds, synthetic data",
            good: true,
          },
          {
            label: "Staging",
            outcome: "Own account, prod-shaped, masked data",
            good: true,
          },
          {
            label: "Production",
            outcome: "Least privilege, audited access",
            good: true,
          },
          {
            label: "Shared across environments",
            outcome: "A staging leak is a prod breach",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Pointing staging at production databases or payment keys because test mode is inconvenient.",
          fix: "Every environment gets its own credentials and data stores. If test mode is flaky, fix test mode — do not wire staging into prod.",
        },
        {
          mistake: "Relying on naming conventions instead of IAM-level separation.",
          fix: "Separate accounts or projects per environment; IAM makes cross-environment reads impossible. Conventions rot, permissions do not.",
        },
        {
          mistake: "Restoring production data into staging to test realistically.",
          fix: "Use synthetic or structurally masked data. A production copy under staging controls is a customer-data breach waiting for its incident.",
        },
        {
          mistake: "Masking by hashing one column while shipping real tokens and password hashes.",
          fix: "Mask as a set: identities, tokens, hashes and identifiers all transformed or replaced. Anything that cannot be masked stays out of staging.",
        },
      ],
      fieldChecklist: [
        "I run each environment in its own account or project with its own IAM and secret paths.",
        "I have tried a staging identity against production resources and watched it fail structurally.",
        "I reject production-shaped values in non-production deploys with a boot-time guard.",
        "I keep staging data synthetic or genuinely masked — tokens, hashes and identifiers included.",
        "I keep any cross-environment access (DNS, observability) a documented, scoped, read-only exception.",
        "I can name, for each environment, which secrets exist there and which cannot exist.",
      ],
      keyTerms: [
        {
          term: "Environment separation",
          definition:
            "Structural isolation of credentials, resources and data per environment, enforced by IAM and account boundaries rather than convention.",
        },
        {
          term: "Account-per-environment",
          definition:
            "The strongest cloud pattern for separation: each environment in its own account or project, with no shared blast radius.",
        },
        {
          term: "Synthetic data",
          definition:
            "Generated, production-shaped test data with no real customer content — the safe default for non-production environments.",
        },
        {
          term: "Masked data",
          definition:
            "Production-derived data with identities, tokens, hashes and identifiers structurally replaced; reversible or partial masking is not masking.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you enforce that staging can never touch production resources?",
          a: "Structurally, not by convention. Staging runs in its own account or project: the production secret paths and resource identifiers do not exist there, so cross-environment reads fail at IAM. I also add a deploy-time guard that rejects production-shaped values in staging config. Then I verify by trying — attempt a cross-environment read from staging and confirm the permission error, because a boundary you have never seen fail is a boundary you cannot trust.",
        },
        {
          q: "A developer says staging needs real production data to catch realistic bugs. Response?",
          a: "Realistic shape, not real records: synthetic data generation or structural masking that covers identities, tokens, password hashes and identifier remapping. If the bug genuinely requires production conditions, that testing happens in a locked, audited replica environment — not staging with its third-party integrations and verbose logging. A production data copy under staging controls is a customer-data breach with a staging error message.",
        },
        {
          q: "What is the most common cross-environment mistake you have seen?",
          a: "The payment key in staging because test mode is flaky, closely followed by the production database URL pasted into a staging env var during a debug session. Both are convenience decisions, which is why enforcement has to be structural: IAM that refuses the read, and boot-time validation that rejects the value. Convenience will always argue for sharing; the architecture has to say no.",
        },
      ],
      quiz: [
        {
          question: "What makes staging a production breach with extra steps?",
          options: [
            "Staging uses older hardware",
            "Sharing production credentials or data with staging means a staging leak inherits production blast radius",
            "Staging deploys less frequently",
            "Staging has fewer tests",
          ],
          answerIndex: 1,
          explanation:
            "Staging is where experimentation, weaker access controls and verbose logging live. Give it production credentials or data and every staging incident becomes a production incident by inheritance.",
        },
        {
          question: "The most reliable way to enforce environment separation is…",
          options: [
            "Naming conventions like STAGING_DATABASE_URL",
            "A wiki page listing which secrets belong where",
            "Separate accounts or projects per environment, with IAM refusing cross-environment reads",
            "Code review catching mismatches",
          ],
          answerIndex: 2,
          explanation:
            "Conventions rot and humans paste. Account-level separation makes the cross-environment read fail with a permission error — the system enforcing the boundary instead of asking people to remember it.",
        },
        {
          question: "Which staging dataset is actually safe?",
          options: [
            "A production restore with the email column hashed",
            "A production restore, read-only",
            "A production restore from six months ago",
            "Synthetic data, or production data with identities, tokens, hashes and identifiers structurally replaced",
          ],
          answerIndex: 3,
          explanation:
            "Partial masking fails at the unmasked columns: hashed emails beside real password hashes is a copy of the hardest credential to rotate. Mask as a set or use synthetic data.",
        },
      ],
    },
  ],
};
