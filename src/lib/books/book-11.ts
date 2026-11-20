/**
 * Book 11 — Master Deployment.
 *
 * Deploys are the most frequent risky operation in software; this book makes
 * them boring. Expanded from books-data.ts: chapter titles, summaries and key
 * ideas are kept verbatim; the rest follows the golden reference format in
 * _reference.ts.
 */
import type { Book } from "../types";

export const book11: Book = {
  id: "book-11",
  number: 11,
  title: "Master Deployment",
  subtitle: "Book 11 of 13 · The Effortless Series",
  tagline:
    "Docker, CI/CD with GitHub Actions, AWS and Kubernetes, environment configuration, domains and SSL, blue-green and canary releases, feature flags, immutable images and semantic versioning, infrastructure as code.",
  description:
    "Deploys are the most frequent risky operation in software; making them boring is the single highest-leverage reliability investment.",
  layer: "Ship, survive, watch",
  layerQuestion: "How does it go live, come back, and tell us the truth?",
  accentColor: "#60a5fa",
  emoji: "11",
  months: "Month 10",
  chapters: [
    {
      number: 1,
      title: "Docker and Containerization",
      summary:
        "Docker packages your app, its runtime, and its dependencies into one immutable artifact that runs identically on every machine.",
      keyIdea:
        "Images are immutable and reproducible. The image that passed staging is the image that ships to prod.",
      deepDive: [
        {
          heading: "Containers are not virtual machines",
          paragraphs: [
            "A virtual machine virtualizes hardware and boots a full guest operating system; a container isolates a process using kernel namespaces and cgroups, sharing the host kernel itself. That difference explains every practical property: a VM image weighs gigabytes and boots in tens of seconds, while a container image weighs tens of megabytes and starts in milliseconds. Ten containers fit comfortably where one VM fits, and a crashed container is a process restart, not a reboot.",
            "Isolation also has honest limits. A container walls off the filesystem, process tree and network stack, but it is a hardened process, not a security boundary like a VM — so images run as non-root users, ship minimal package sets, and stay one process per container. Logs go to stdout so the platform collects them. Treat a container like a well-sandboxed program: convenient, fast, and never a place to hide dirty state.",
          ],
        },
        {
          heading: "The image is the artifact",
          paragraphs: [
            "A Dockerfile is a build recipe where each instruction creates a filesystem layer, and layers cache. Order is strategy: copy the lockfiles and install dependencies before copying source, so editing application code rebuilds only the last layers, not npm ci. The image is identified by a content digest; tags like latest are mutable labels that two different builds can share. When you need to name a build exactly, the digest is the only honest name.",
            "The pipeline consequence is the whole point: build the image once in CI, push it to a registry, and let every environment pull that same digest. If staging and prod each rebuild from source, you tested one binary and shipped another — base image updates and lockfile drift guarantee subtle differences. One build, promoted by digest, is what makes the key idea true: the image that passed staging is the image that ships.",
          ],
        },
        {
          heading: "What goes into the Dockerfile",
          paragraphs: [
            "Multi-stage builds separate building from running: a builder stage holds the toolchain — Node, compilers, dev dependencies — and the final stage copies out only dist and production node_modules onto a slim base like node:22-alpine. The shipped image shrinks from a gigabyte to roughly 150 megabytes, pulls faster, and presents a shorter CVE list to patch. Add a non-root USER, and prefer the exec form of CMD so signals reach your process for graceful shutdown.",
            "Containers must also die well, because they will die often. On SIGTERM, stop accepting new connections, finish in-flight requests within the termination grace period, then exit — a process that ignores signals gets killed after 30 seconds mid-request, and users see the errors. Health endpoints exist for the platform: a cheap liveness check that proves the process is up, and a readiness check that gates traffic. Getting shutdown and probes right is most of what makes containers boring.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Inside a container image",
        caption:
          "Layer order is a caching strategy: what changes most lives highest, what never changes lives lowest.",
        layers: [
          { label: "App code", note: "COPY — changes most often" },
          { label: "Dependencies", note: "rebuilt only on lockfile change" },
          { label: "Runtime", note: "node:22-alpine base image" },
          { label: "OS libraries", note: "from the pinned base" },
          { label: "Digest", note: "content hash names the build" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Multi-stage keeps the toolchain out of the shipped image; USER node keeps the process unprivileged.",
        code: [
          "FROM node:22-alpine AS build",
          "WORKDIR /app",
          "COPY package*.json ./",
          "RUN npm ci",
          "COPY . .",
          "RUN npm run build",
          "",
          "FROM node:22-alpine",
          "WORKDIR /app",
          "ENV NODE_ENV=production",
          "COPY --from=build /app/dist ./dist",
          "COPY --from=build /app/node_modules ./node_modules",
          "USER node",
          "# keep graceful shutdown on SIGTERM so deploys drain cleanly",
          "CMD node dist/server.js",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Deploying :latest so staging and prod can silently run different builds.",
          fix: "Deploy by immutable digest or a git-SHA release tag. latest is a moving label, not a version, and it will point at the wrong build eventually.",
        },
        {
          mistake:
            "COPY . . as the first instruction, so every code edit rebuilds npm ci.",
          fix: "Copy lockfiles and install dependencies before copying source; dependency layers then cache until the lockfile actually changes.",
        },
        {
          mistake: "Shipping images that run as root because it is the default.",
          fix: "Add USER to the Dockerfile and verify with whoami inside the container; root in a container is root against the shared host kernel.",
        },
        {
          mistake:
            "Installing curl, vim and build tools into the production image to debug faster.",
          fix: "Debug from an ephemeral sidecar (kubectl debug, docker exec with a debug image). Fewer packages in prod means a shorter CVE list to patch.",
        },
      ],
      fieldChecklist: [
        "I can explain the difference between a container and a VM in two sentences.",
        "My Dockerfile copies lockfiles before source, so dependency layers cache.",
        "My production image runs as a non-root user and I have verified it.",
        "CI builds one image per commit and every environment deploys the same digest.",
        "My container handles SIGTERM and drains in-flight requests before exiting.",
        "I know my production image size and can say why each layer is there.",
      ],
      keyTerms: [
        {
          term: "Image",
          definition:
            "A read-only, layered, content-addressed artifact built from a Dockerfile and identified immutably by its digest.",
        },
        {
          term: "Layer",
          definition:
            "One filesystem diff produced by a Dockerfile instruction; layers cache and are shared across images.",
        },
        {
          term: "Container",
          definition:
            "A running process isolated by namespaces and cgroups over the shared host kernel — lighter than a VM by design.",
        },
        {
          term: "Multi-stage build",
          definition:
            "A Dockerfile pattern that compiles in a builder stage and copies only runtime artifacts into a minimal final image.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does Docker actually buy you over a VM?",
          a: "Packaging and speed. A VM virtualizes hardware and carries a whole guest OS; a container isolates a process with namespaces and cgroups over the shared kernel, so it starts in milliseconds and costs megabytes. The real prize is the artifact: one immutable image runs identically on my laptop, in CI and in prod, which kills the works-on-my-machine class of bugs.",
        },
        {
          q: "Why build once and promote the image instead of rebuilding per environment?",
          a: "Because the artifact is the unit of trust. If each environment rebuilds from source, different base image states, lockfile drift or registry variance can produce different binaries, and the thing you tested is not the thing you shipped. Build once in CI, push to a registry by digest, and promote that digest from staging to prod — the digest is the proof that the tested bytes are the shipped bytes.",
        },
        {
          q: "How do you keep a Node image small and safe?",
          a: "Multi-stage builds: compile in a builder stage, copy only dist and production node_modules into a slim final image like node:22-alpine or distroless. Install with npm ci, run as a non-root USER, and do not ship curl, vim or build tools — debug with an ephemeral sidecar instead. Small images pull faster and hand you a much shorter CVE list to patch each month.",
        },
      ],
      quiz: [
        {
          question:
            "What identifies an image build immutably, regardless of tags?",
          options: [
            "The :latest tag",
            "The content digest",
            "The Dockerfile path",
            "The container name",
          ],
          answerIndex: 1,
          explanation:
            "The digest is a hash of the image content; tags are mutable pointers that can be reassigned to different builds. Two builds can share a tag — they can never share a digest.",
        },
        {
          question:
            "Your Dockerfile starts with COPY . . then RUN npm ci. A teammate changes one line of app code. What happens on rebuild?",
          options: [
            "Nothing — Docker only rebuilds changed files",
            "npm ci is skipped because node_modules is cached",
            "The image digest stays the same",
            "Every layer after the changed instruction rebuilds, including npm ci",
          ],
          answerIndex: 3,
          explanation:
            "Layer caching invalidates from the first changed instruction onward. Copying source before installing dependencies means every edit re-downloads the world — fix the instruction order.",
        },
        {
          question: "Containers differ from virtual machines because containers…",
          options: [
            "Isolate processes over the host kernel instead of virtualizing hardware",
            "Run only Linux binaries",
            "Cannot execute as root",
            "Require a hypervisor per application",
          ],
          answerIndex: 0,
          explanation:
            "Namespaces and cgroups isolate a process over the shared kernel — no guest OS, no hypervisor per app. That is why containers start in milliseconds and a crash is a restart, not a reboot.",
        },
      ],
    },
    {
      number: 2,
      title: "CI/CD with GitHub Actions",
      summary:
        "Continuous Integration runs tests on every push. Continuous Delivery ships every green build to staging; Continuous Production deploys to prod on approval.",
      keyIdea:
        "The pipeline is code, versioned with your repo. YAML in your repository defines build, test, and deploy stages.",
      deepDive: [
        {
          heading: "CI is a contract, not a courtesy",
          paragraphs: [
            "Continuous integration is the promise that every push is built and tested before anyone merges it, which is what keeps main releasable. Lint and typecheck fail in seconds, unit and integration tests run in parallel shards, and the whole loop stays under roughly ten minutes. When the pipeline drags past that, engineers start overriding red checks to ship, and the contract quietly dies.",
            "Flakiness is the second killer. A test that fails randomly teaches the team to rerun instead of investigate, and reruns mask real failures. Quarantine flaky tests immediately — they still run but cannot block — then fix or delete them within the sprint. Combine that with branch protection requiring green checks and small pull requests, and main becomes something you can deploy on any morning without a ritual.",
          ],
        },
        {
          heading: "Delivery versus deployment",
          paragraphs: [
            "Continuous delivery means every green commit on main produces a versioned artifact and lands on staging automatically, with prod waiting behind an approval gate. Continuous deployment removes the gate: main goes to prod directly, protected by canary analysis and automatic rollback instead of a human clicking approve. Delivery is the honest default until tests, observability and revert speed have earned the missing gate.",
            "The mechanics are a directed graph of jobs: workflows live in .github/workflows, jobs run on ephemeral runners, and needs wires dependencies between them. Environments in GitHub map to stages and carry protection rules — required reviewers for prod, secrets scoped per environment. The deploy job does not build anything; it consumes the artifact the test job produced. Stages that rebuild defeat the entire chain of custody.",
          ],
        },
        {
          heading: "Where pipelines fail",
          paragraphs: [
            "Pipelines fail in predictable places. Jobs without timeout-minutes hang for six hours burning runner minutes; caches get saved before install instead of after; secrets leak through echo or into forked pull request runs. Third-party actions pinned by mutable tag can be moved under you — pin them by commit SHA and set job permissions like contents: read so a compromised step reaches nothing.",
            "Authenticate to clouds with OIDC federation instead of stored keys: the workflow assumes a short-lived role per run, so there is nothing permanent to steal. Then test the failure path on purpose — break a test, watch the deploy refuse to happen, watch the alert fire. A pipeline you have never seen fail red is untested software, and it is the software your production depends on.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The path from push to prod",
        caption:
          "Each stage consumes the previous stage's output; prod never rebuilds anything.",
        stages: [
          { label: "Lint + type", note: "seconds — fail fast" },
          { label: "Tests", note: "unit + integration, sharded" },
          { label: "Build image", note: "once, tagged by git SHA" },
          { label: "Push registry", note: "artifact stored by digest" },
          { label: "Staging", note: "auto deploy + smoke test" },
          { label: "Prod", note: "approval gate, then deploy" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "Fail fast, time out every job, and deploy main automatically with the commit SHA as the release tag.",
        code: [
          "name: ci",
          "on: [push, pull_request]",
          "jobs:",
          "  test:",
          "    runs-on: ubuntu-latest",
          "    timeout-minutes: 10",
          "    steps:",
          "      - uses: actions/checkout@v4",
          "      - uses: actions/setup-node@v4",
          "        with: { node-version: 22, cache: npm }",
          "      - run: npm ci",
          "      - run: npm run lint",
          "      - run: npm test -- --coverage",
          "  deploy-staging:",
          "    needs: test",
          "    if: github.ref == 'refs/heads/main'",
          "    runs-on: ubuntu-latest",
          "    steps:",
          "      - run: ./scripts/deploy.sh staging ${{ github.sha }}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Pinning third-party actions by mutable tag like @v4 in a prod pipeline.",
          fix: "Pin by full commit SHA and review updates deliberately; tags move, SHAs do not. Set least-privilege permissions per job.",
        },
        {
          mistake:
            "Deploy jobs that rebuild from source per environment.",
          fix: "Build one artifact in CI, push to the registry, deploy that digest everywhere. Rebuilding per environment means you test one binary and ship another.",
        },
        {
          mistake:
            "No timeout-minutes, so one hung test burns hours of runner time.",
          fix: "Set timeout-minutes on every job — 5 to 15 is plenty for a fast pipeline — and fail the run on the first error.",
        },
        {
          mistake:
            "Long-lived cloud access keys sitting in repository secrets forever.",
          fix: "Use OIDC federation so workflows assume a short-lived role per run; delete the static keys after the switch.",
        },
      ],
      fieldChecklist: [
        "Every push to main runs lint, typecheck and tests before any deploy can happen.",
        "I can go from git push to a running staging deploy without touching my laptop.",
        "The prod artifact is built once and deployed by digest, never rebuilt per environment.",
        "Every job has a timeout, and I have seen the pipeline red on purpose.",
        "Cloud credentials in CI use OIDC or short-lived tokens, not permanent keys.",
        "Branch protection requires the pipeline to pass before merge.",
      ],
      keyTerms: [
        {
          term: "Continuous Integration",
          definition:
            "Every push is built and tested automatically, so main is always releasable.",
        },
        {
          term: "Continuous Delivery",
          definition:
            "Every green build produces a versioned artifact and staging stays current; prod waits behind a gate.",
        },
        {
          term: "Runner",
          definition:
            "The ephemeral machine a CI job executes on — hosted or self-hosted, disposable by preference.",
        },
        {
          term: "OIDC federation",
          definition:
            "Short-lived cloud credentials issued to CI from an identity token, replacing static access keys.",
        },
      ],
      interviewQuestions: [
        {
          q: "What is the difference between continuous delivery and continuous deployment?",
          a: "Delivery means every green build is deployable and staging updates automatically, but a gate approves prod. Deployment means merge to main goes all the way to prod with no gate, protected by automated analysis, flags and rollback. I recommend deployment only when tests, canaries and revert speed are trustworthy; delivery is the honest default for most teams, and the gate doubles as an audit point.",
        },
        {
          q: "Your pipeline takes 40 minutes and people merge without waiting. Fix it?",
          a: "Shard the test suite across parallel jobs, cache dependencies before install, and run typecheck concurrently with tests instead of serially. Move slow integration tests to a scheduled or merge-queue trigger. Around ten minutes is the trust threshold — past it, engineers route around the pipeline, so treat pipeline latency as a product bug with a budget, not an inconvenience.",
        },
        {
          q: "How do you keep CI from becoming a supply-chain risk?",
          a: "Pin third-party actions by commit SHA, set job-level permissions like contents: read, and authenticate to clouds with OIDC instead of stored keys. Review action updates the way you review dependency updates, scope secrets per environment so a compromised workflow cannot reach prod credentials, and keep the pipeline itself in the repo so every change to it is reviewed like code.",
        },
      ],
      quiz: [
        {
          question: "In GitHub Actions, what does needs: between two jobs create?",
          options: [
            "A shared filesystem",
            "A retry policy",
            "A dependency — the second job waits for the first to succeed",
            "A matrix of parallel runs",
          ],
          answerIndex: 2,
          explanation:
            "needs builds the job graph: the dependent job starts only when the dependency succeeds. It is how test gates deploy, and why a deploy job consuming an artifact implies tests passed.",
        },
        {
          question:
            "Prod is running a different binary than the one tested in staging. Most likely cause?",
          options: [
            "The deploy job rebuilds from source instead of deploying the tested digest",
            "Tests ran on a different runner",
            "The tag was not :latest",
            "Someone skipped lint",
          ],
          answerIndex: 0,
          explanation:
            "Rebuilding per environment breaks the chain of custody — base images, lockfiles and registry state can all drift between builds. Build once, promote the digest, deploy the same bytes everywhere.",
        },
        {
          question: "Why pin third-party actions by commit SHA rather than by tag?",
          options: [
            "SHAs run faster on hosted runners",
            "Tags are mutable — a moved tag can run attacker code inside your pipeline",
            "SHAs enable dependency caching",
            "GitHub requires SHAs for public repositories",
          ],
          answerIndex: 1,
          explanation:
            "A tag like @v4 is a pointer anyone with write access can move. Pinning the SHA freezes the exact code that runs in your pipeline with your secrets.",
        },
      ],
    },
    {
      number: 3,
      title: "AWS, Kubernetes, and Platform Choices",
      summary:
        "Cloud platforms offer managed everything. Kubernetes gives you portability and complexity. Choose per team size and operational appetite.",
      keyIdea:
        "Managed services for small teams. Kubernetes when you have a platform team. Never run Kubernetes you cannot operate.",
      deepDive: [
        {
          heading: "The ladder of operational burden",
          paragraphs: [
            "Platform choices form a ladder, and each rung trades convenience for control. Serverless and PaaS — Vercel, Cloud Run, App Runner — take code or an image and handle scaling, TLS and health for you. ECS or Fargate hands you task definitions, services and load balancers. Kubernetes hands you a distributed system worth the name. Every rung up costs engineering hours that do not ship features.",
            "Match the rung to the team, not the résumé. A three-person startup operating its own Kubernetes cluster is spending its only senior hours on node upgrades and ingress tuning instead of product. Managed Kubernetes — EKS, GKE, AKS — removes control-plane operations but not workload operations: node pools, autoscaling, storage classes and upgrades remain yours. The honest question is who gets paged when the cluster misbehaves.",
          ],
        },
        {
          heading: "What Kubernetes actually gives and costs",
          paragraphs: [
            "The primitives are genuinely good: Deployments keep a desired replica count and replace broken pods, Services give a stable address, Ingress routes and terminates TLS, ConfigMaps and Secrets inject config, the HPA scales on metrics. Self-healing and declarative rollouts are why the ecosystem won. The cost is the debugging surface: CrashLoopBackOff, OOMKilled, DNS flakes, YAML sprawl — and an upgrade treadmill that arrives every few months whether you are ready or not.",
            "A workable rule of thumb: adopt Kubernetes when you can name the engineer who owns it and you run enough services with different scaling needs to amortize the platform. Before that point, managed containers deliver the same deploy story — health checks, limits, rolling updates — at a fraction of the surface area. And whatever you choose, containerize: the image is what keeps the choice reversible.",
          ],
        },
        {
          heading: "Choosing with eyes open",
          paragraphs: [
            "Decide on inputs you can actually observe: team size, operational appetite, expected scale, compliance needs, and the cost of leaving. Startups ship fastest on a managed platform; growth-stage teams consolidate onto ECS or EKS when services multiply; large organizations justify Kubernetes for portability and its ecosystem of operators and schedulers. Migrate when a concrete limit blocks you — never for fashion, and only after writing down what would have to be true to leave.",
            "The deploy story matters more than the brand. Health checks, resource limits, rollout strategy and observability exist on every rung of the ladder, and they are what actually prevent incidents. A boring managed platform with real probes and automatic rollback beats an unmaintained cluster with perfect portability. Choose the smallest amount of infrastructure your team can operate well, and revisit the decision yearly with data.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Where does this workload run?",
        caption:
          "The honest axis is people: control you cannot staff is complexity you rented.",
        axes: {
          x: "Ops capacity on the team",
          y: "Control the workload needs",
        },
        quadrants: [
          { label: "Redesign first", note: "needing control without staff is a smell" },
          { label: "Kubernetes", note: "you can name the on-call engineer" },
          { label: "Managed platform", note: "Vercel, Cloud Run, Fly" },
          { label: "ECS or Fargate", note: "containers without cluster ops" },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Adopting Kubernetes because job posts mention it, with no platform owner named.",
          fix: "Adopt when a named engineer can own upgrades, ingress and autoscaling. Until then, managed containers (Fargate, Cloud Run) deliver the same deploys.",
        },
        {
          mistake:
            "Liveness and readiness probes pointing at expensive downstream checks.",
          fix: "Probes run every few seconds: use a cheap internal /healthz that proves the process is alive; let dependencies have their own alarms.",
        },
        {
          mistake:
            "Choosing a different cloud provider per service — five clouds for five services.",
          fix: "One primary cloud plus documented edge exceptions; every extra provider multiplies IAM, networking and on-call knowledge.",
        },
        {
          mistake:
            "Skipping containerization because 'we are on a PaaS anyway'.",
          fix: "Containerize even on a PaaS: the image is what keeps the platform choice reversible when limits appear.",
        },
      ],
      fieldChecklist: [
        "I can name the specific operational work my platform choice adds each month.",
        "Every service has readiness and liveness probes (or platform health checks) wired to real health.",
        "The team size matches the platform: nobody is on-call for machinery they cannot explain.",
        "Our images are portable, so moving platforms is a deploy change, not a rewrite.",
        "I can state the concrete limit (scale, compliance, cost) that would justify moving up the ladder.",
        "We chose one primary cloud and documented the exceptions.",
      ],
      keyTerms: [
        {
          term: "PaaS",
          definition:
            "Platform as a service — you deploy code or an image and the provider runs scaling, TLS and health for you.",
        },
        {
          term: "Managed Kubernetes",
          definition:
            "EKS, GKE, AKS: the provider operates the control plane; node pools, ingress and upgrades remain yours.",
        },
        {
          term: "Readiness probe",
          definition:
            "A check that gates traffic to a container; failing it removes the pod from the load balancer without restarting it.",
        },
        {
          term: "HPA",
          definition:
            "The Kubernetes horizontal pod autoscaler — adjusts replica count against CPU, memory or custom metrics.",
        },
      ],
      interviewQuestions: [
        {
          q: "When is Kubernetes the right choice?",
          a: "When you run many services with different scaling and release needs, and at least one engineer can own the cluster — upgrades, ingress, autoscaling, storage. Then the ecosystem pays off: operators, batch scheduling, service mesh. A three-person team shipping one Next.js app gets the same reliability from a managed platform at a fraction of the complexity, and can revisit the choice because the image stays portable.",
        },
        {
          q: "A startup asks whether they need Kubernetes. What do you tell them?",
          a: "Not yet. Ship on a managed platform and containerize the app so the option stays open. The image is the portable unit; when their needs genuinely require cluster features — service mesh, GPU batch jobs, multi-tenant scheduling — they move a workload, not a codebase. The expensive mistake is paying the Kubernetes complexity tax years before the scale or team exists to justify it.",
        },
        {
          q: "How do you decide between ECS and EKS on AWS?",
          a: "ECS if the workload is containers on AWS only — simpler IAM, cheaper, less YAML. EKS when you need portability, the wider ecosystem, or the team already speaks Kubernetes fluently. I also weigh hiring: Kubernetes experience is common, deep ECS expertise is rarer. Either way, health checks, resource limits and rollout strategy matter more to reliability than the orchestrator's brand.",
        },
      ],
      quiz: [
        {
          question:
            "What does a managed Kubernetes service (EKS, GKE, AKS) take off your plate?",
          options: [
            "The control plane — API servers, etcd, scheduler",
            "Node pool upgrades",
            "Ingress and TLS termination",
            "Application deployments",
          ],
          answerIndex: 0,
          explanation:
            "Managed Kubernetes operates the control plane only. Node pools, upgrades, ingress, autoscaling and storage remain yours — which is why 'managed' does not mean 'no work'.",
        },
        {
          question:
            "A team of four wants portability above all. What is the most honest advice?",
          options: [
            "Adopt Kubernetes immediately",
            "Adopt raw EC2 with autoscaling groups",
            "Avoid containers entirely",
            "Containerize now, stay on a managed platform, revisit when there is a platform owner",
          ],
          answerIndex: 3,
          explanation:
            "Containerization preserves portability without the cluster burden. Kubernetes becomes justified when someone can own it and the workload variety amortizes the platform cost.",
        },
        {
          question: "A pod's readiness probe starts failing. What happens?",
          options: [
            "The pod restarts immediately",
            "The pod stops receiving new traffic until it recovers",
            "The node is drained",
            "Nothing until liveness also fails",
          ],
          answerIndex: 1,
          explanation:
            "Readiness gates traffic: failing it removes the pod from Service endpoints without a restart. Liveness is the one that restarts — confusing the two causes restart storms.",
        },
      ],
    },
    {
      number: 4,
      title: "Environment Configuration",
      summary:
        "Configuration differs per environment; code does not. The twelve-factor principle: config in the environment, not the codebase.",
      keyIdea:
        "One artifact, many environments. Secrets injected at deploy time, never baked in.",
      deepDive: [
        {
          heading: "Config is anything that varies",
          paragraphs: [
            "Twelve-factor draws the line precisely: config is anything likely to differ between deploys — database URLs, API keys, regions, log levels — while code is identical everywhere. The test is brutal and simple: could you open-source the repository today without leaking a credential? If any production value lives in the code, the answer is no, and the same image can no longer run in every environment unchanged.",
            "The mechanics are humble: the process reads environment variables at startup, and the deploy system injects them — GitHub Environments, Kubernetes Secrets mounted as files or env, Vercel project settings. What separates professionals is validation at boot: a schema check that crashes with the missing key's name. A service that starts half-configured and fails at 3am is a debugging story; one that refuses to boot at deploy time is a one-line fix.",
          ],
        },
        {
          heading: "Secrets have a lifecycle",
          paragraphs: [
            "Git history is forever, and scanning bots find committed keys within minutes — GitHub secret scanning exists because the leak rate justifies it. Treat anything pushed as burned: rotate the credential, then clean up. Rotation is the real argument for injection at deploy time: a secret baked into an image requires rebuilding every environment to rotate, while an injected secret rotates with a store update and a restart.",
            "Scope secrets like identities, not like constants. Staging must never hold production credentials — a staging leak is not a drill — and each service reads only what it uses, through a store like AWS Secrets Manager or Vault with an audit trail. Never echo secrets into logs, URLs or error reports. Local development uses throwaway credentials, precisely because laptops get stolen and dotfiles get pushed.",
          ],
        },
        {
          heading: "The traps that survive",
          paragraphs: [
            "Config drift is the quiet one: the same key spelled differently across environments, or set in staging and forgotten in prod, so staging is green and prod is red with identical code. Fight it with a manifest — every key, its type, which environments set it — validated at boot in CI. The other trap is compile-time config: anything in a client bundle, NEXT_PUBLIC_ included, is public by definition and must contain nothing privileged.",
            "Preview environments multiply the surface: every pull request wants its own database URL and callback origins. Solve it with templates and defaults, not per-env heroics, and document the keys in one table — purpose, type, which environments set it. When onboarding a new engineer takes a day instead of a week, this table is usually the difference. Config that is discoverable is config that stays boring.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Where does configuration live?",
        caption:
          "The same bytes in every environment; only injected config changes.",
        left: {
          heading: "Environment-injected",
          items: [
            "Same image digest in every env",
            "Secrets come from a store at deploy time",
            "Rotation means restart, not rebuild",
            "The repo is safe to open-source",
          ],
        },
        right: {
          heading: "Baked into the image",
          items: [
            "One build per environment",
            "Keys live in Docker layers forever",
            "Rotation means rebuilding everything",
            "One push to git leaks the keys",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Validate the environment at boot so missing config crashes loudly at deploy, not silently at peak.",
        code: [
          "import { z } from 'zod';",
          "",
          "const Env = z.object({",
          "  DATABASE_URL: z.string().url(),",
          "  SESSION_SECRET: z.string().min(32),",
          "  LOG_LEVEL: z.enum(['debug', 'info', 'warn']).default('info'),",
          "});",
          "",
          "const parsed = Env.safeParse(process.env);",
          "if (!parsed.success) {",
          "  // fail fast: name every missing key at boot, not at 3am",
          "  console.error('Invalid config:', parsed.error.flatten().fieldErrors);",
          "  process.exit(1);",
          "}",
          "",
          "export const env = parsed.data;",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Committing .env with real prod credentials because it was convenient once.",
          fix: "Assume anything pushed is burned: rotate the key first, scrub history for hygiene, and keep real secrets only in the deploy-time store.",
        },
        {
          mistake:
            "Different env var names across staging and prod, reconciled from memory.",
          fix: "One typed schema shared by all environments; CI boots the app with sample config to prove every key exists.",
        },
        {
          mistake:
            "Putting secrets behind NEXT_PUBLIC_ or client-side config to simplify fetches.",
          fix: "Client bundles are public. Anything a browser needs is not a secret; route privileged calls through the server.",
        },
        {
          mistake:
            "Baking the database URL into the image to skip runtime wiring.",
          fix: "One artifact, many environments: read config from process.env at startup and inject per environment at deploy time.",
        },
      ],
      fieldChecklist: [
        "The repo could be open-sourced today without leaking a credential.",
        "Config is validated at boot and a missing key crashes with the key's name in the error.",
        "Every environment variable is documented: purpose, type, which environments set it.",
        "Staging secrets are separate from prod and scoped to what staging actually needs.",
        "I can rotate any secret without rebuilding an image.",
        "Client-exposed config contains nothing privileged.",
      ],
      keyTerms: [
        {
          term: "Twelve-factor config",
          definition:
            "Store config in the environment, keep code and config strictly separated, and run one artifact across all deploys.",
        },
        {
          term: "Secret store",
          definition:
            "A managed vault (Vault, AWS Secrets Manager) that injects credentials at deploy or runtime with audit and rotation.",
        },
        {
          term: "Config drift",
          definition:
            "The same key holding different values across environments by accident — staging green, prod red.",
        },
        {
          term: "Fail fast",
          definition:
            "Crash at startup on invalid config rather than running half-configured until the worst possible moment.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does configuration belong in the environment?",
          a: "Because the artifact should be identical everywhere — the image tested in staging must be the bytes running in prod. If config is baked in, each environment is a different build and every guarantee evaporates. Environment config also makes rotation an update-plus-restart instead of a rebuild, and it keeps credentials out of git, Docker layers and CI logs where they leak.",
        },
        {
          q: "A service works in staging and fails in prod with no code difference. First thought?",
          a: "Config drift. I diff the effective environment: every env var, injected secrets and files, DNS. A missing key, a trailing slash in a URL, a typo'd region. Boot-time validation exists precisely for this — the app should have refused to start with the key's name in the error, which turns a midnight mystery into a one-line fix the next morning.",
        },
        {
          q: "How do you handle secrets in a containerized deploy?",
          a: "Secrets live in a store — Vault, AWS Secrets Manager, Kubernetes Secrets — and are injected at deploy time as env vars or mounted files, scoped per service with least privilege and an audit trail. Never in git, never in image layers, never in logs. Rotation is a store update plus a restart. For anything client-side the rule is absolute: if the browser can see it, it is not a secret.",
        },
      ],
      quiz: [
        {
          question:
            "Which is the strongest reason configuration lives outside the image?",
          options: [
            "Images run faster without environment variables",
            "Env vars are cheaper than config files",
            "One tested artifact runs in every environment unchanged",
            "Docker mandates it",
          ],
          answerIndex: 2,
          explanation:
            "One artifact across environments preserves the chain of custody: the image that passed staging is provably the image in prod. Baked config means one build per environment and zero guarantees.",
        },
        {
          question:
            "An API key committed to git last year is discovered. Correct response?",
          options: [
            "Delete the commit with force-push and move on",
            "Rotate the credential immediately — assume it is burned",
            "Leave it; history is read-only anyway",
            "Rename the variable in code",
          ],
          answerIndex: 1,
          explanation:
            "History is forever and scrapers keep copies. Force-pushing hides the key from future readers, not from the ones who saved it. Rotation is the only action that actually closes the hole.",
        },
        {
          question:
            "NEXT_PUBLIC_STRIPE_SECRET appears in your client bundle. Why is this a bug?",
          options: [
            "Client bundles are minified, so it is safe",
            "Everything in a client bundle is public by design",
            "Vercel strips NEXT_PUBLIC vars at runtime",
            "It only leaks on localhost",
          ],
          answerIndex: 1,
          explanation:
            "Compile-time client config ships to every visitor's browser — it is public by construction. Privileged calls must route through a server that holds the real credential.",
        },
      ],
    },
    {
      number: 5,
      title: "Domains and SSL",
      summary:
        "DNS records point users at your load balancer. TLS certificates prove your identity. Automation makes both boring.",
      keyIdea:
        "ACME (Let's Encrypt) for automated cert renewal. Expiry monitoring alerts at 30/14/7 days.",
      deepDive: [
        {
          heading: "DNS is the first deploy you make",
          paragraphs: [
            "Before TLS, before load balancers, users need to find you: A and AAAA records point at IPs, CNAME aliases subdomains, ALIAS records solve the apex domain that cannot CNAME, and TXT records carry verification challenges for ACME and email. TTL is the knob that matters most — it sets how long resolvers may cache an answer. Low during a planned cutover so the switch propagates in minutes; raised once stable so caching protects you.",
            "Propagation is caching, not magic — a record change is fast, resolvers are merely slow to ask again. CAA records whitelist which certificate authorities may issue for your domain, a one-line guard against mis-issuance. And manage hosted zones in infrastructure as code: DNS outages are deploys, so record changes deserve plans, review and rollback like everything else in production. The registrar account itself gets 2FA, a transfer lock and documented recovery, because domain hijacking is the outage nobody plans for.",
          ],
        },
        {
          heading: "TLS in practice",
          paragraphs: [
            "The handshake does two things: it proves the server is who it claims — a certificate chaining to a trusted authority — and it establishes encryption. Modern posture is TLS 1.2 minimum with 1.3 preferred, http redirected at the edge, and HSTS telling browsers to refuse plain connections next time. Certificates come from ACM on AWS or from ACME providers like Let's Encrypt, and wildcard versus per-host is a tradeoff between convenience and blast radius.",
            "Expiry is the classic self-inflicted outage: a healthy site becomes a browser warning because a renewal cron died silently months earlier. The fix is automation plus independent verification — managed certificates renew themselves, ACME clients renew around day 30, and an external monitor checks days-remaining from outside your network, alerting at 30, 14 and 7 days. Trust the automation, but verify it from a vantage point that cannot share its failure.",
          ],
        },
        {
          heading: "When the boring parts break",
          paragraphs: [
            "The failures are famous and preventable: the expired certificate nobody owned, the missing intermediate chain that works in some clients and fails in others, the migration Friday where TTL was still a day. Each has the same shape — a manual step that automation should own, and no monitor watching the result. openssl s_client against each host, a chain check in CI, and TTL planning before cutover close all three.",
            "Treat the domain portfolio as infrastructure: subdomains per environment, an owner for every zone, and a break-glass procedure that assumes the registrar is compromised. Registrar lock and recovery codes sound like paranoia until the day a hijack redirects your apex to a phishing page. The whole chapter compresses to one sentence: automation owns certificates and records, and monitors verify that ownership from the outside.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The certificate renewal loop",
        caption:
          "Certificates are not installed once — they are kept alive by a loop you can observe.",
        steps: [
          { label: "Issue", note: "ACME challenge proves domain control" },
          { label: "Deploy", note: "cert attached to the load balancer" },
          { label: "Serve", note: "TLS handshake on every request" },
          { label: "Monitor", note: "external check, alerts at 30/14/7 days" },
          { label: "Renew", note: "auto-renews around day 30" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "An external cron checks every cert 30 days out; renewal failures become alerts, not outages.",
        code: [
          "#!/usr/bin/env bash",
          "# Warn when a prod certificate expires within 30 days",
          "set -euo pipefail",
          "THIRTY_DAYS=2592000",
          "for host in api.example.com app.example.com; do",
          "  if echo | openssl s_client -servername $host -connect $host:443 2>/dev/null \\",
          "     | openssl x509 -noout -checkend $THIRTY_DAYS; then",
          "    echo $host ok",
          "  else",
          "    echo $host expires within 30 days >&2",
          "    exit 1",
          "  fi",
          "done",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Renewing certificates by hand each quarter from a calendar reminder.",
          fix: "Automate with ACME (certbot, Caddy) or a managed certificate, and add an external expiry monitor alerting at 30, 14 and 7 days.",
        },
        {
          mistake:
            "Leaving a 24-hour TTL on records right before a cutover.",
          fix: "Drop TTL to 60-300 seconds a day before the switch, verify the new target, then raise TTL back once stable.",
        },
        {
          mistake:
            "Serving the certificate without the intermediate chain.",
          fix: "Send the full chain — some clients trust it, some fail. Verify with openssl s_client and an external SSL scan.",
        },
        {
          mistake:
            "Treating DNS as not-quite-code: console edits at midnight.",
          fix: "Manage hosted zones in Terraform with review; DNS is production infrastructure, so changes get plans and rollback like everything else.",
        },
      ],
      fieldChecklist: [
        "Every environment has a subdomain and I can draw the record chain from user to load balancer.",
        "Certificate renewal is automated and an external monitor alerts at 30, 14 and 7 days.",
        "I know the current TTL of the records I would need to move in an emergency.",
        "HSTS is on and http redirects at the edge, not in application code.",
        "DNS zones live in infrastructure-as-code and changes go through review.",
        "The registrar account has 2FA, a transfer lock and documented recovery.",
      ],
      keyTerms: [
        {
          term: "TTL",
          definition:
            "Time to live — how long resolvers may cache a DNS answer; the knob that controls cutover speed.",
        },
        {
          term: "ACME",
          definition:
            "The protocol behind Let's Encrypt that automates certificate issuance and renewal after proving domain control.",
        },
        {
          term: "CAA record",
          definition:
            "A DNS record whitelisting which certificate authorities may issue certificates for a domain.",
        },
        {
          term: "HSTS",
          definition:
            "Strict-Transport-Security: a response header telling browsers to refuse plain http for the domain.",
        },
      ],
      interviewQuestions: [
        {
          q: "A site that worked yesterday now shows a certificate warning. Walk me through it.",
          a: "Almost always expiry or chain. I check dates with openssl s_client -connect host:443 piped to openssl x509 -noout -dates, then inspect the served chain — a missing intermediate passes in some clients and fails in others. Fix is reissue and redeploy the full chain, then fix the process: automated renewal plus an external monitor alerting at 30, 14 and 7 days so the next silent failure is impossible.",
        },
        {
          q: "How do you migrate traffic to a new load balancer with zero downtime?",
          a: "Lower DNS TTL to 60-300 seconds a day ahead, bring up the new load balancer with the same certificates, verify health, then switch records and watch both ends as old traffic drains with the caches. Keep the old stack warm for the TTL window and run health checks on both sides. Raise TTL back after stability so normal caching protects the origin again.",
        },
        {
          q: "Why put DNS in Terraform?",
          a: "Because DNS is production infrastructure and changes to it deserve review, history and rollback like everything else. In Terraform, a record change is a plan I can read — this record now points there — instead of a console click nobody sees. It pairs with CAA records and registrar locking as guardrails, and a nightly plan catches manual changes before they become incidents.",
        },
      ],
      quiz: [
        {
          question: "Why lower a DNS TTL before a planned cutover?",
          options: [
            "Lower TTL reduces DNS costs",
            "Resolvers cache answers — a low TTL lets the new record spread within minutes",
            "TTL controls certificate renewal",
            "High TTL breaks TLS handshakes",
          ],
          answerIndex: 1,
          explanation:
            "TTL is the cache lifetime resolvers honor. Dropping it to 60-300 seconds before the switch means the new target propagates in minutes instead of a day; raise it back once stable.",
        },
        {
          question:
            "The strongest protection against a silent certificate-expiry outage is:",
          options: [
            "A longer certificate validity period",
            "A bigger load balancer",
            "Wildcard certificates for every host",
            "Automated renewal plus external monitoring alerting at 30/14/7 days",
          ],
          answerIndex: 3,
          explanation:
            "Renewal can die silently; an external monitor checks expiry from outside your network, so the failure surfaces as an alert weeks before browsers start warning users.",
        },
        {
          question: "What does a CAA record do?",
          options: [
            "Encrypts DNS queries",
            "Points the apex domain at a CDN",
            "Sets the cache TTL",
            "Restricts which CAs may issue certificates for the domain",
          ],
          answerIndex: 3,
          explanation:
            "CAA is a whitelist for issuers. If a CA is not listed, it should refuse to issue — a cheap guard against mis-issuance and certificate-based hijacking.",
        },
      ],
    },
    {
      number: 6,
      title: "Blue-Green Deployments",
      summary:
        "Two identical environments: blue serves traffic while green is idle. Deploy to green, switch traffic, keep blue as instant rollback.",
      keyIdea:
        "Instant rollback by traffic switch. Costs double the infrastructure but eliminates deploy-time risk.",
      deepDive: [
        {
          heading: "Two stacks, one switch",
          paragraphs: [
            "Blue serves all traffic while green deploys idle beside it. Green takes no user requests until it passes a smoke gate — health checks and a few scripted critical-path calls — and then the switch happens at the load balancer: a target group change or a service selector flip, measured in seconds. Rollback is the same operation in reverse, because blue still runs the previous version untouched.",
            "The costs are two: infrastructure, doubled during the release window, and a shared database, which blue-green does not solve at all. Green must run against the schema blue is using, so migrations in the same release must be backward compatible or the rollback flips into a crashing old version. Blue-green rolls back code flawlessly; data changes need the expand-and-contract discipline of Chapter 12 as a companion.",
          ],
        },
        {
          heading: "The switch and its sharp edges",
          paragraphs: [
            "A naive switch drops in-flight requests and hands 100 percent of traffic to a cold version. The polite switch has three ingredients: connection draining on the load balancer so old targets finish what they started, graceful shutdown on SIGTERM in the old version, and warm-up for green — primed caches, open pools, JIT compiled — before it takes the full load. A switch to a cold version is an outage with extra steps.",
            "After the flip comes the bake window: five to fifteen minutes watching error rate and latency on the new version, with automatic rollback if they breach. Blue stays running through that entire window — tearing it down at T+0 deletes your rollback to save a few dollars. Long-lived websocket connections and sticky sessions complicate the switch, so drain or migrate them deliberately rather than discovering them mid-incident.",
          ],
        },
        {
          heading: "When to reach for it",
          paragraphs: [
            "Blue-green earns its double cost when binary rollback speed matters more than compute: payment services, big launches, releases where partial exposure is dangerous. Kubernetes makes the pattern cheap — two Deployments and a selector flip, or Argo Rollouts orchestrating it — and serverless platforms give you version aliasing with instant rollback for free. The pattern matters less than the property it guarantees: never more than one switch away from the last good version.",
            "For the daily grind, rolling deploys save the duplicated cost by replacing instances gradually, accepting mixed versions during the rollout. Many teams run both: blue-green for risky or schema-heavy releases, rolling for everything else, with canaries where metrics must decide. Choose by asking one question — what does rollback look like at 4pm on a Friday? — and pick the pattern with the shortest honest answer.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A blue-green release",
        caption:
          "The old version stays warm until the new one has proven itself under real traffic.",
        steps: [
          { label: "Blue serves", note: "current version, 100 percent" },
          { label: "Deploy green", note: "new version, zero traffic" },
          { label: "Smoke test", note: "health + scripted requests" },
          { label: "Flip switch", note: "seconds at the load balancer" },
          { label: "Watch bake", note: "auto-rollback flips back" },
          { label: "Retire blue", note: "only after the bake window" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Blue-green on Kubernetes is a selector flip away; keep blue deployable for the whole bake window.",
        code: [
          "#!/usr/bin/env bash",
          "set -euo pipefail",
          "# Flip public traffic from blue to green (smoke gate already passed)",
          "kubectl patch service web -p '{spec: {selector: {version: green}}}'",
          "",
          "# Bake window: fail if the health endpoint ever wobbles",
          "ok=true",
          "for i in $(seq 1 30); do",
          "  code=$(curl -s -o /dev/null -w '%{http_code}' localhost:8090/healthz)",
          "  [ $code = 200 ] || ok=false",
          "  sleep 10",
          "done",
          "",
          "# Rollback is the same flip in reverse",
          "$ok && echo promoted || kubectl patch service web -p '{spec: {selector: {version: blue}}}'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Tearing down blue the moment green goes live, to save compute.",
          fix: "Keep blue running through the bake window — it is your rollback. Automate teardown after the window, never at T+0.",
        },
        {
          mistake:
            "Switching traffic to green with cold caches and empty connection pools.",
          fix: "Warm green with synthetic traffic before the flip; a switch to a cold version is an outage with extra steps.",
        },
        {
          mistake:
            "Running a destructive schema migration in the same release as the switch.",
          fix: "Migrations must be backward compatible before the switch; ship data changes separately using expand-and-contract.",
        },
        {
          mistake:
            "Cutting connections at the switch so in-flight requests die.",
          fix: "Enable connection draining on the load balancer and graceful shutdown on SIGTERM; let the old version finish what it started.",
        },
      ],
      fieldChecklist: [
        "Green receives zero user traffic until it passes a smoke gate I trust.",
        "The traffic switch takes seconds, and I have timed the rollback the same way.",
        "Blue stays warm through the bake window and teardown is automated after it.",
        "In-flight requests survive the switch: draining and graceful shutdown are on.",
        "Schema changes ship separately from the switch and are backward compatible.",
        "I know the doubled-infrastructure cost and the window it applies to.",
      ],
      keyTerms: [
        {
          term: "Blue-green deployment",
          definition:
            "Two identical stacks; traffic switches from old (blue) to new (green) in one step, with blue kept as instant rollback.",
        },
        {
          term: "Connection draining",
          definition:
            "The load balancer finishing in-flight requests before removing a target — the polite part of any switch.",
        },
        {
          term: "Bake window",
          definition:
            "A watched interval after the switch during which metrics decide keep or roll back.",
        },
        {
          term: "Smoke test",
          definition:
            "A fast scripted pass over critical routes, run against the idle stack before it takes traffic.",
        },
      ],
      interviewQuestions: [
        {
          q: "Blue-green doubles infrastructure. When is that worth it?",
          a: "When binary rollback speed matters more than compute cost: payments, launches with big spikes, releases where partial exposure is dangerous. The switch is seconds and rollback is the same switch backwards. For everyday services, rolling deploys or canaries give most of the safety at half the cost. I also shorten the doubled window by automating teardown after the bake window ends.",
        },
        {
          q: "How does blue-green interact with database migrations?",
          a: "Badly unless migrations are backward compatible. Blue and green share one schema, so green must run against blue's schema and the reverse must hold during rollback. That means expand-and-contract: additive migrations first, dual-compatible code, cleanup in a later release. A destructive migration inside a blue-green release turns the rollback flip into a crash of the old version.",
        },
        {
          q: "Where does blue-green break down?",
          a: "At the data and the warm-up. It rolls back code, not migrations, and a cold green — empty caches, cold JIT — can fall over while taking 100 percent at once, so warming is mandatory. Long-lived websocket connections and sticky sessions also complicate the switch and must be drained deliberately. None are disqualifiers; all are items on the pre-switch checklist.",
        },
      ],
      quiz: [
        {
          question: "The core property blue-green buys over rolling deploys:",
          options: [
            "Lower compute cost",
            "Mixed versions during rollout",
            "A one-step traffic switch with the old version kept as instant rollback",
            "No need for health checks",
          ],
          answerIndex: 2,
          explanation:
            "Blue-green trades duplicated infrastructure for a binary switch: all traffic moves at once and rollback is the same move reversed, with the old version running untouched until dismissed.",
        },
        {
          question:
            "During the switch, in-flight requests on blue start failing. Missing piece?",
          options: [
            "A bigger load balancer",
            "More blue replicas",
            "A lower DNS TTL",
            "Connection draining plus graceful shutdown on SIGTERM",
          ],
          answerIndex: 3,
          explanation:
            "Targets removed mid-request drop connections unless the LB drains them and the process finishes work on SIGTERM. That pair is what makes the switch invisible to users.",
        },
        {
          question: "Why must migrations be backward compatible before the switch?",
          options: [
            "Green and blue share one schema — rollback must survive it",
            "Terraform requires it",
            "It speeds up the smoke test",
            "Kubernetes rejects incompatible schemas",
          ],
          answerIndex: 0,
          explanation:
            "Both versions run against the same database. If the schema only fits the new code, flipping back to blue hands traffic to an app that crashes — rollback must stay viable.",
        },
      ],
    },
    {
      number: 7,
      title: "Canary Releases",
      summary:
        "Roll out the new version to a small percentage of traffic first. Watch metrics. Expand if healthy, roll back if not.",
      keyIdea:
        "Canary by cookie, header, or percentage. Automated rollback on error-budget burn.",
      deepDive: [
        {
          heading: "Small blast radius by construction",
          paragraphs: [
            "A canary gives the new version a small slice of real traffic — one to five percent — while the baseline keeps the rest, and the two are compared directly. Slice by percentage, by header or cookie for internal cohorts, or by consistent hashing so each user stays on one version. The canary answers a single question: does the new code behave like the old code under real traffic?",
            "Rollout proceeds through gates: one percent for ten minutes, then five, twenty-five, fifty, one hundred — each step gated on metrics from the last. Sample size is the trap: one percent of fifty requests an hour proves nothing, so size the first slice for real volume, hundreds of requests minimum. Sticky hashing matters because a user ping-ponging between two versions is a bug report factory.",
          ],
        },
        {
          heading: "Metrics that decide",
          paragraphs: [
            "Judge the canary against the baseline over the same window — absolute thresholds lie because traffic moves with the time of day. Error rate, p99 latency, saturation, and one business counter that matters, like checkout success. Small slices are noisy, so require a minimum request count before judging, and label every metric series with the release version at deploy time, because gates are impossible without that label.",
            "Rollback must be automatic: if the canary's error rate exceeds baseline by a defined margin or the SLO burn rate crosses a fast-burn threshold, the rollout aborts to zero percent without a human. A canary that needs someone to notice and type kubectl at night is a canary in name only. Humans investigate after the revert; the automation's only job is to stop the bleeding first.",
          ],
        },
        {
          heading: "Canary in the wild",
          paragraphs: [
            "The tooling is mature: Argo Rollouts and Flagger drive weights and run analysis queries against Prometheus; AWS CodeDeploy shifts traffic with CloudWatch alarms; service meshes split at the header level. Serverless platforms offer weighted aliases. What the tools cannot supply is the discipline — gates that compare against baseline, thresholds someone agreed to, and the organizational will to let an automated revert stand.",
            "Canaries catch technical regressions well and behavioral ones imperfectly: wrong discount math on Tuesdays may never reach one percent of traffic. Shadow traffic and targeted cohorts cover the rest. And not every deploy deserves analysis — a CSS fix ships straight to one hundred percent. Reserve the full machinery for the paths where a regression is expensive, because the cost is rollout duration.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "The canary decision",
        caption:
          "The canary decision is mechanical: compare to baseline, expand, hold, or revert.",
        start: "Canary live at 1 percent",
        branches: [
          {
            label: "Errors flat, p99 flat",
            outcome: "Ramp: 5 to 25 to 50 to 100 percent",
            good: true,
          },
          {
            label: "Latency slightly up",
            outcome: "Hold the slice and watch one more window",
            good: true,
          },
          {
            label: "Error rate above baseline",
            outcome: "Auto-rollback to 0 percent",
            good: true,
          },
          {
            label: "Slice widened by hand",
            outcome: "You skipped the gate and own the outage",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "The rollout policy is declarative: weights, pauses and an analysis gate between them.",
        code: [
          "apiVersion: argoproj.io/v1alpha1",
          "kind: Rollout",
          "metadata: { name: web }",
          "spec:",
          "  strategy:",
          "    canary:",
          "      steps:",
          "        - setWeight: 5",
          "        - pause: { duration: 10m }",
          "        - analysis:",
          "            templates: [{ templateName: error-rate }]",
          "        - setWeight: 25",
          "        - pause: { duration: 10m }",
          "        - setWeight: 50",
          "        - pause: { duration: 15m }",
          "        - setWeight: 100",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Judging a canary on absolute thresholds instead of against baseline.",
          fix: "Compare canary to the same-window baseline; absolute numbers move with traffic and time of day, so they fire on noise.",
        },
        {
          mistake:
            "A 1 percent canary on 50 requests an hour — no statistical power.",
          fix: "Size the first slice for meaningful volume, or canary a specific cohort by header until the sample means something.",
        },
        {
          mistake:
            "Rollback requires a human to notice and type kubectl at night.",
          fix: "Automate: analysis gates against Prometheus with automatic abort on burn; humans investigate after the revert.",
        },
        {
          mistake:
            "Shipping without version labels on metrics, so canary data is indistinguishable.",
          fix: "Label every metric series with the release version at deploy time; without it, gates cannot tell canary from baseline.",
        },
      ],
      fieldChecklist: [
        "Every deploy labels metrics with the release version before rollout starts.",
        "Canary decisions compare against baseline, never absolute thresholds alone.",
        "The first slice size is chosen for statistical power, not sentiment.",
        "Automated rollback fires on error-rate or SLO burn without a human in the loop.",
        "Rollout gates are declarative (Argo Rollouts, Flagger, CodeDeploy), not hand-run kubectl.",
        "I know which deploys skip canary, and why that is safe for them.",
      ],
      keyTerms: [
        {
          term: "Canary release",
          definition:
            "Serving a small traffic slice to the new version and comparing its metrics to baseline before expanding.",
        },
        {
          term: "Baseline comparison",
          definition:
            "Judging the canary against the old version over the same window, which cancels traffic noise.",
        },
        {
          term: "SLO burn rate",
          definition:
            "How fast the error budget is being consumed relative to plan; the principled rollback signal.",
        },
        {
          term: "Traffic splitting",
          definition:
            "The load-balancer capability that divides requests by percentage, header or consistent hash.",
        },
      ],
      interviewQuestions: [
        {
          q: "How would you design a canary process from scratch?",
          a: "Version-labeled metrics first, then a declarative rollout: five percent, a ten-minute pause, an analysis gate comparing error rate and p99 against baseline, then twenty-five, fifty, one hundred. Automated abort on burn. Gates compare against baseline over the same window, and the first slice is sized so the canary actually receives enough requests for the comparison to mean anything.",
        },
        {
          q: "Canary looks healthy at 1 percent but the full rollout breaks. Why?",
          a: "Small slices hide rare and conditional failures: a bug affecting one request in a million never reaches the canary, edge-case data belongs to specific users, cache-warming differences appear only at scale, and background jobs may not run in the window. Mitigate with bigger intermediate steps, longer bakes, cohort canaries for known segments — and keep the 100 percent bake window with auto-rollback anyway.",
        },
        {
          q: "Difference between canary and blue-green?",
          a: "Exposure model. Blue-green flips all traffic at once after a smoke test — fast and binary, costing double infrastructure. Canary exposes gradually with metric gates between steps — it catches regressions real users would hit, at the cost of a longer rollout. Risky releases get canary analysis; heavy warmups or instant reversions may suit blue-green. The shared property is a fast way back.",
        },
      ],
      quiz: [
        {
          question:
            "Why compare canary metrics to baseline rather than fixed thresholds?",
          options: [
            "Baselines are cheaper to store",
            "Baseline comparison cancels traffic noise and time-of-day effects",
            "Fixed thresholds violate SLOs",
            "Prometheus requires it",
          ],
          answerIndex: 1,
          explanation:
            "Absolute numbers drift with traffic patterns; comparing canary to baseline over the same window isolates the change you shipped from the change the clock caused.",
        },
        {
          question:
            "A canary at 1 percent sees 40 requests in its window. Correct move?",
          options: [
            "Promote — no errors means healthy",
            "Roll back — any canary is better than none",
            "Skip straight to 100 percent",
            "Widen the slice or target a cohort so the sample actually means something",
          ],
          answerIndex: 3,
          explanation:
            "Forty requests cannot distinguish a healthy release from a broken one. Statistical power requires volume — widen the slice, lengthen the window, or target a known cohort first.",
        },
        {
          question:
            "What makes rollback automatic rather than aspirational?",
          options: [
            "A Slack channel for on-call",
            "Longer pauses between rollout steps",
            "Analysis gates that abort the rollout when burn thresholds trip",
            "A runbook nobody has opened",
          ],
          answerIndex: 2,
          explanation:
            "Automatic means the deploy tool queries metrics mid-rollout and reverts on breach without waiting for a human — the gate between steps is what actually enforces it.",
        },
      ],
    },
    {
      number: 8,
      title: "Feature Flags",
      summary:
        "Decouple deploy from release. Ship code dark; turn features on per-user, per-percentage, per-cohort, on demand.",
      keyIdea:
        "Flags make every deploy safe (the code is off). Flags make every release reversible (turn it off).",
      deepDive: [
        {
          heading: "Deploy is not release",
          paragraphs: [
            "Deploying means the code runs in production; releasing means users can reach it. A feature flag sits between them: the code ships dark, and enabling becomes a runtime decision — per user, per percentage, per cohort — with no second deploy. Deploys shrink to small, frequent, low-risk events because the risky code is inert, and releases become reversible in milliseconds because turning a feature off is a flag flip.",
            "Mechanically, evaluation happens server-side: LaunchDarkly, Unleash, Flagsmith or a homegrown config service returns the flag state, cached so evaluation adds microseconds to the request path. Client SDKs receive evaluated values, never the keys that would expose private cohorts. Coarse toggles can live in environment config, but anything you plan to ramp gradually belongs in a service built for changing it without a deploy.",
          ],
        },
        {
          heading: "Flags are a liability with a lifespan",
          paragraphs: [
            "Every flag multiplies code paths — N flags mean two to the N combinations, and untested combinations are where bugs hide. So every flag is born with an owner, a purpose, and an expiry intent: a date or a completion condition. Removal is part of the feature's definition of done — when the ramp reaches one hundred percent, the flag and its dead branches get deleted in the same sprint.",
            "The flag-off path is production code for most users, so it gets production testing: CI runs both branches, the dark path ships to prod with every deploy, and the kill switch is exercised once under real load so you know flipping it off actually works. A flag whose off path has never run is not a safety net; it is a second, untested product.",
          ],
        },
        {
          heading: "Operational rules that keep flags safe",
          paragraphs: [
            "Registry everything: name, owner, type — release, experiment, or ops — created date, and expiry. A weekly job reports stale flags. Flips in production are audited and announced, because a flip is a deploy in speed and in risk; it deserves the same traceability. Permissions decide who can flip what — a dashboard anyone can toggle is an incident waiting for a curious click.",
            "Know the boundaries: flags cannot gate schema changes, so data work leans on expand-and-contract instead. Billing-critical paths get a flag plus careful dual-running, and performance work measures with the flag off as the control. Experiments are a different species from release flags — they demand statistical rigor and a decision date, not an open-ended ramp. Conflating the species is how a temporary test becomes permanent furniture nobody remembers approving.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Life of a release flag",
        caption:
          "A flag without an expiry date is permanent code you forgot you owned.",
        stages: [
          { label: "Create", note: "off by default, owner named" },
          { label: "Ship dark", note: "code deploys, users see nothing" },
          { label: "Internal cohort", note: "staff flips it on first" },
          { label: "Ramp", note: "5, 25, 50, 100 percent" },
          { label: "Remove", note: "delete the branch, the flag, the debt" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Fail closed: if the flag service is down, the safe default ships, not an outage.",
        code: [
          "type Flags = { checkoutV2: boolean };",
          "",
          "// Server-side evaluation: short timeout, safe fallback",
          "export async function getFlags(userId: string): Promise<Flags> {",
          "  try {",
          "    return await flagClient.evaluate(userId, {",
          "      timeoutMs: 50,",
          "      fallback: { checkoutV2: false },",
          "    });",
          "  } catch {",
          "    // The flag service is down. Ship the safe default.",
          "    return { checkoutV2: false };",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Flags that outlive their feature for years, dead branches and all.",
          fix: "Every flag gets an owner and an expiry intent; a weekly job reports stale flags, and removal is part of the feature's definition of done.",
        },
        {
          mistake:
            "A flag service outage takes the product down because evaluation throws.",
          fix: "Fail closed with a cached or hardcoded safe default and a short timeout; flags must never become a new single point of failure.",
        },
        {
          mistake:
            "Testing only the flag-on path because that is the exciting one.",
          fix: "CI tests both branches; most users see off. The dark path is production code and ships to prod with every deploy.",
        },
        {
          mistake:
            "Letting anyone flip prod flags from a dashboard with no audit.",
          fix: "Gate flips behind permissions and change logging — a flip is a deploy and gets the same traceability and announcement.",
        },
      ],
      fieldChecklist: [
        "Every flag in the codebase has a named owner and an expiry intent.",
        "New code ships dark and the flag-off path is tested in CI on every push.",
        "I have flipped a feature off under real traffic at least once, on purpose.",
        "Flag evaluation fails closed with a safe default when the service is unavailable.",
        "Flips in prod are audited and announced like deploys.",
        "Stale flags are swept on a schedule, not when someone trips over one.",
      ],
      keyTerms: [
        {
          term: "Feature flag",
          definition:
            "A runtime switch that decouples deploying code from releasing it to users.",
        },
        {
          term: "Release flag",
          definition:
            "A temporary flag meant to be removed once the feature is fully on — not an experiment or a config knob.",
        },
        {
          term: "Kill switch",
          definition:
            "A pre-built off path for a feature that can be flipped in seconds during an incident.",
        },
        {
          term: "Flag debt",
          definition:
            "The accumulating cost of dead flags and combinatorial code paths when flags are never cleaned up.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do feature flags change your deploy process?",
          a: "They decouple deploy from release, so deploys become small, frequent and low-risk — code behind a flag is inert. Risk moves to release decisions, which are reversible in milliseconds and targetable per cohort. The price is hygiene: every flag needs an owner, an expiry and a cleanup, or the codebase fills with dead branches nobody can safely delete.",
        },
        {
          q: "The flag service is down. What should happen?",
          a: "Nothing visible. Evaluation must fail closed: a short timeout, a cached last-known value or a hardcoded safe default, and no exceptions in the request path. If a flag outage can take the product down, flags became a single point of failure — the opposite of their purpose. Prove it by deliberately pointing the SDK at a dead endpoint once and watching the fallback work.",
        },
        {
          q: "How do you keep flag debt under control?",
          a: "A registry with owner, type and created date; expiry intentions set at creation; a weekly stale-flag report; and removal included in the feature's definition of done. I also separate species: release flags die at 100 percent, experiment flags die at decision time, ops flags are few and long-lived. Mixing the species is how decade-old flags survive unnoticed.",
        },
      ],
      quiz: [
        {
          question: "Deploy versus release — what is the distinction?",
          options: [
            "They are the same event",
            "Deploy puts code in prod; release lets users reach it",
            "Release means staging",
            "Deploy is only for databases",
          ],
          answerIndex: 1,
          explanation:
            "The flag sits between the two: code deploys dark, and release becomes a runtime decision per cohort. That split is what makes risky features shippable in small, safe increments.",
        },
        {
          question:
            "A release flag hit 100 percent two quarters ago. Correct state today?",
          options: [
            "Kept forever for safety",
            "Renamed to an ops flag",
            "Removed — code simplified, flag and branches deleted",
            "Defaulted to on in code, flag kept",
          ],
          answerIndex: 2,
          explanation:
            "Release flags are temporary by design. Once fully on, removal is part of done: simplify the code, delete the branches, and shrink the combinatorial surface you have to test.",
        },
        {
          question:
            "Flag evaluation should fail how when the flag service is unreachable?",
          options: [
            "Closed — return a safe default quickly",
            "Open — enable everything",
            "Retry for 30 seconds per request",
            "Crash the request",
          ],
          answerIndex: 0,
          explanation:
            "Fail closed: short timeout, cached or hardcoded safe default. Flags must never become a single point of failure — the degraded path deserves a test as much as the happy path.",
        },
      ],
    },
    {
      number: 9,
      title: "Immutable Images",
      summary:
        "An image, once built, never changes. No 'hot fixes' on a running container; you build a new image and redeploy.",
      keyIdea:
        "Immutability makes deploys reproducible and rollback trivial: deploy the previous image.",
      deepDive: [
        {
          heading: "Pets versus cattle",
          paragraphs: [
            "A mutable server is a pet: you ssh in, patch it by hand, hotfix it in place, and over the months it drifts from every sibling until nobody can rebuild it. An immutable container is cattle: identical to its twins, replaceable, disposable. The fix for a bad container is never repair — it is replacement with a new image. Drift becomes impossible instead of merely discouraged.",
            "Immutability draws a hard line around what is forbidden: docker exec to edit a file, kubectl edit on a live Deployment, npm install on the box, hand-touched config. Each one creates a snowflake that staging cannot reproduce and rollback cannot restore. The discipline compresses to one rule: if a change matters, it is a commit; if it is a commit, it is a build; if it is a build, it is a deploy.",
          ],
        },
        {
          heading: "Reproducibility and its enemies",
          paragraphs: [
            "Reproducibility is a habit of pinning: base images by digest, dependencies by lockfile with npm ci, tool versions in CI. Rebuilding the same commit should produce the same behavior — ideally the same digest. Floating tags quietly break this: node:latest today is not node:latest next month, so two builds of an identical commit can differ in ways tests cannot explain. Pin everything that executes — the digest is the identity, the tag is just fashion.",
            "Config and state stay outside the image by design. One image runs in every environment with differences injected at runtime, and containers hold no data on local disk — sessions go to Redis, uploads to object storage, databases to managed services. A container with state on its own filesystem breaks immutability in practice: replacing it is data loss, so nobody ever replaces it, and it becomes a pet with a docker logo.",
          ],
        },
        {
          heading: "Rollback as a first-class operation",
          paragraphs: [
            "Rollback under immutability is redeploying the previous digest — seconds, deterministic, the same pipeline that shipped it. That requires history: a retention policy keeping the last ten to twenty release images, and release tags carrying the git short SHA so 'the previous one' is unambiguous at 3am. Compare that to hotfix-on-prod: unreviewed, untested, unreproducible, and usually slower than rolling a new image forward anyway.",
            "The culture is forward-fix: rollback is the stopgap that ends user pain in minutes, and the real fix follows through the pipeline within the hour. Emergencies get an expedited path through the same pipeline — more eyes, same steps — never a side door around it. Then the postmortem asks one pointed question: why did anyone believe patching a running container was an option?",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Fixing a bad release",
        caption:
          "One of these is a deploy; the other is a story you will tell in the postmortem.",
        left: {
          heading: "Immutable: rebuild",
          items: [
            "New image tagged with the fix",
            "Same pipeline, same tests",
            "Rollback = previous digest",
            "Every environment stays identical",
          ],
        },
        right: {
          heading: "Mutable: hotfix in place",
          items: [
            "docker exec and edit a file",
            "Prod drifts from staging forever",
            "Rollback means guesswork",
            "The fix dies with the container",
          ],
        },
      },
      codeExample: {
        language: "bash",
        caption:
          "Build once, tag with the commit, record the digest — rollback becomes redeploying the previous line.",
        code: [
          "#!/usr/bin/env bash",
          "set -euo pipefail",
          "SHA=$(git rev-parse --short HEAD)",
          "IMAGE=myapp-web",
          "",
          "# Build once; every deploy of this commit uses this digest",
          "docker build -t $IMAGE:$SHA .",
          "docker push $IMAGE:$SHA",
          "DIGEST=$(docker inspect --format '{{index .RepoDigests 0}}' $IMAGE:$SHA)",
          "echo $DIGEST >> release-history.txt",
          "",
          "# Rollback is just: deploy the previous line of release-history.txt",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Patching a running container with docker exec because the fix is small.",
          fix: "Commit, build, deploy. The exec'd change is invisible to git, dies on the next replace, and drifts prod from every other environment.",
        },
        {
          mistake:
            "FROM node:latest so the base image floats between builds.",
          fix: "Pin base images by digest and update them deliberately; a floating base can change runtime behavior between two identical commits.",
        },
        {
          mistake:
            "Keeping only :latest in the registry, so rollback has no previous version.",
          fix: "Retain the last 10-20 release digests and tag by git SHA; rollback needs history to exist.",
        },
        {
          mistake:
            "Storing uploads or sessions on container disk because volumes felt heavy.",
          fix: "Containers are cattle — state on local disk dies with replacement. Use managed volumes or object storage instead.",
        },
      ],
      fieldChecklist: [
        "No deploy path requires editing anything inside a running container.",
        "Base images are pinned by digest and updates are deliberate, reviewed events.",
        "Every release is tagged with its git SHA and the previous N digests are retained.",
        "I can roll back to the previous release in one command, and I have rehearsed it.",
        "Containers hold no state that is not reproducible or externally stored.",
        "Reproducing prod locally means running the same image, not approximating it.",
      ],
      keyTerms: [
        {
          term: "Immutable infrastructure",
          definition:
            "Servers and containers are never modified after deploy — every change comes from replacing them with a new image.",
        },
        {
          term: "Snowflake server",
          definition:
            "A machine whose state differs from every sibling and cannot be rebuilt from source; the end state of mutable ops.",
        },
        {
          term: "Image digest",
          definition:
            "The content hash that identifies an image build exactly; the unit deploy systems promote and roll back.",
        },
        {
          term: "Stateless container",
          definition:
            "A container whose local disk holds nothing that cannot be lost on replacement.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does immutability actually buy you?",
          a: "Reproducibility and trivial rollback. Every environment runs identical bytes, so staging results predict prod behavior, and rollback is redeploying the previous digest — deterministic and rehearsed. It also removes a whole class of drift bugs: no hand-edited configs, no exec'd hotfixes, no snowflakes. The cost is discipline: every change, however small, goes through the pipeline instead of through a terminal.",
        },
        {
          q: "Production is down and the fix is one line. Do you exec in?",
          a: "No. I roll forward: commit the one line and run the expedited path through the same pipeline — tests, build, deploy by digest. If rollback is faster, I roll back first and land the fix forward. An exec'd change is unreviewed, untested, dies with the next pod, and leaves prod lying about its own state. A one-line fix through the pipeline takes minutes, not hours.",
        },
        {
          q: "How do you make builds reproducible in practice?",
          a: "Pin everything: base images by digest, dependencies by lockfile with npm ci, action and tool versions by SHA. Build once in CI and promote the digest rather than rebuilding per environment. Perfect reproducibility is hard — timestamps and compiler nondeterminism exist — but digest-pinned bases plus locked dependencies get you close enough that the same commit means the same behavior.",
        },
      ],
      quiz: [
        {
          question: "Rolling back under immutable deploys means:",
          options: [
            "Restoring a server from backup",
            "Redeploying the previous image digest",
            "Undoing the git commit in place",
            "Rebuilding from the main branch",
          ],
          answerIndex: 1,
          explanation:
            "Immutability makes rollback deterministic: the previous digest still exists in the registry, runs the same bytes it ran before, and deploys through the same pipeline in seconds.",
        },
        {
          question: "Why pin base images by digest instead of by tag?",
          options: [
            "Tags are mutable — the same tag can point to different content over time",
            "Digests download faster",
            "Tags are deprecated",
            "Digests compress better",
          ],
          answerIndex: 0,
          explanation:
            "A tag like node:latest is reassigned as new builds publish. Pinning the digest freezes the exact bytes your build depends on; updates become deliberate events, not accidents.",
        },
        {
          question:
            "A container stores session files on local disk. What breaks first?",
          options: [
            "Nothing, until the image is rebuilt",
            "Replacement — a new container loses the files, so replicas and rollbacks corrupt sessions",
            "DNS resolution",
            "Certificate renewal",
          ],
          answerIndex: 1,
          explanation:
            "Local disk is not shared across replicas and does not survive replacement. State belongs in Redis, a database or object storage — or the container quietly becomes an unreplaceable pet.",
        },
      ],
    },
    {
      number: 10,
      title: "Semantic Versioning",
      summary:
        "MAJOR.MINOR.PATCH: breaking changes bump major, new features bump minor, fixes bump patch. The contract that lets dependencies reason about upgrades.",
      keyIdea:
        "Versions communicate intent. A library that breaks on a patch bump is violating the contract.",
      deepDive: [
        {
          heading: "The contract, read aloud",
          paragraphs: [
            "Semantic versioning encodes intent in three numbers: MAJOR for breaking changes, MINOR for backward-compatible features, PATCH for fixes that change nothing else. Consumers read the bump and decide — the caret range accepts compatible minors, the tilde accepts patches only, lockfiles pin what actually runs. The contract is what lets tooling reason about upgrades automatically, because humans encoded their intent where machines can parse it.",
            "Before 1.0 the rules relax — 0.x allows breaking in a minor — and that is the honest signal: stability is not promised yet. Reaching 1.0 is a decision you make, not a milestone that happens. Internal services version their API contract the same way: a /v1/ path is semver with a longer deprecation fuse, and it tells every consumer exactly how much change to expect.",
          ],
        },
        {
          heading: "Release discipline",
          paragraphs: [
            "Bumps come from judgment, assisted by automation: conventional commits feed tools like semantic-release and changesets, which compute the version and draft the changelog. Judgment still decides — renaming a config key is breaking even though the diff is two lines. The rule survives every tool: if a consumer could break, it is a MAJOR, and a deprecation window comes first wherever you can afford one.",
            "Deprecation is a feature you ship: announce the change, warn at runtime or in the type system, keep the old path for a window, and remove it in the next MAJOR with a changelog that says what to do. Changelogs are part of the interface — written for consumers, not generated noise. Internal packages deserve identical discipline; your colleagues are the most demanding users you will ever have.",
          ],
        },
        {
          heading: "Where versions meet deploys",
          paragraphs: [
            "In a deploy pipeline, versions become traceability: release tags map to image tags map to metric labels, so 'which version is prod' is a query, not an investigation. Rebuilds never overwrite a published version — the same number always means the same content, exactly like an image digest. Rolling back means deploying the previous version, which is one more reason the previous version must exist and be unambiguous.",
            "Watch the failure modes: version numbers as marketing — a v2 that is a rebrand — trains consumers to ignore your signals. Monorepos get changesets per package and committed lockfiles, with renovate or dependabot as scheduled diligence instead of panic upgrades. And when a release goes wrong, the version number is how the incident report says what ran, when, and what to never do again.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Which number bumps?",
        caption:
          "Three numbers carry intent; the discipline is deciding before you publish.",
        start: "You changed the code",
        branches: [
          {
            label: "Old callers can break",
            outcome: "Bump MAJOR, deprecate first",
            good: true,
          },
          {
            label: "New feature, old calls fine",
            outcome: "Bump MINOR",
            good: true,
          },
          {
            label: "Behavior unchanged, bug fixed",
            outcome: "Bump PATCH",
            good: true,
          },
          {
            label: "Ship it and decide later",
            outcome: "Every consumer learns to distrust you",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Shipping a breaking change as a patch because the diff looked small.",
          fix: "Judge by consumer impact, not diff size: a renamed option or changed default is a MAJOR, deprecated loudly first.",
        },
        {
          mistake:
            "Republishing the same version number with different content.",
          fix: "A published version is immutable, like an image digest; fix forward as a new patch, never overwrite.",
        },
        {
          mistake:
            "Changelogs that say 'bug fixes and improvements' for every release.",
          fix: "Write changelogs for consumers: what changed, what breaks, what to do. Conventional commits can automate the skeleton.",
        },
        {
          mistake:
            "Treating internal packages as version-free.",
          fix: "Internal libraries get semver, changelogs and deprecation windows too — your colleagues are the most demanding consumers you have.",
        },
      ],
      fieldChecklist: [
        "I can state, for my last release, why it was MAJOR, MINOR or PATCH.",
        "Breaking changes are deprecated first and announced before removal.",
        "Release tags, image tags and the running version in metrics all agree.",
        "The changelog tells a consumer what to do, not what we did.",
        "Published versions are immutable — nothing is ever republished in place.",
        "Dependency updates run on a schedule (renovate, dependabot), not on panic.",
      ],
      keyTerms: [
        {
          term: "Semantic versioning",
          definition:
            "MAJOR.MINOR.PATCH encoding intent — breaking, feature, fix — the contract consumers upgrade against.",
        },
        {
          term: "Version range",
          definition:
            "A consumer's declared tolerance, like a caret accepting any compatible 1.x; lockfiles pin what actually runs.",
        },
        {
          term: "Deprecation",
          definition:
            "The announced, supported interval before removal — the courtesy that makes MAJOR bumps survivable.",
        },
        {
          term: "Changelog",
          definition:
            "The human-facing record of what changed and what to do about it; part of the interface, not an afterthought.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does semantic versioning matter for deployment?",
          a: "Because versions are how machines and humans reason about what is running. Release tags map to image tags map to metrics labels — when an incident hits, 'which version is prod' is a query, not an investigation. Semver also drives safe automation: renovate, lockfiles and rollbacks all assume a version is immutable and means exactly what it says.",
        },
        {
          q: "You maintain a library. How do you handle a necessary breaking change?",
          a: "Deprecate, then break. Ship the new path in a MINOR, warn old consumers at runtime or in the type system, give a window — one minor or a dated deadline — and only then bump MAJOR with a changelog that says what to do. A breaking change without a deprecation window is how you lose every consumer who cannot upgrade in lockstep with you.",
        },
        {
          q: "Is semver right for services, not just libraries?",
          a: "The spirit, adjusted. Services version their API contract — /v1/ paths or headers — because consumers upgrade independently, and the MAJOR.MINOR.PATCH discipline applies to that contract. Internal deploys also tag releases so rollback targets are unambiguous. What does not transfer is the ranges-and-lockfile machinery; for a service there is exactly one version in prod, and you can see it in metrics.",
        },
      ],
      quiz: [
        {
          question:
            "You rename a config option your library reads. What bump is honest?",
          options: [
            "PATCH — the diff is one line",
            "MINOR — it is an internal detail",
            "MAJOR — consumers relying on the old name will break",
            "No bump — config is not API",
          ],
          answerIndex: 2,
          explanation:
            "Semver judges by consumer impact, not diff size. A renamed option breaks anyone using the old name — that is a MAJOR with a deprecation window, regardless of how small the change looks.",
        },
        {
          question: "What does a caret range allow npm to install?",
          options: [
            "Only the exact pinned version",
            "2.0.0 and above",
            "Any version at all",
            "The pinned version and any compatible release within the same major, never 2.0.0",
          ],
          answerIndex: 3,
          explanation:
            "The caret trusts the MAJOR contract: compatible minors and patches are safe, a MAJOR bump is not. Lockfiles then pin the exact version that actually runs.",
        },
        {
          question: "The most professional deprecation sequence is:",
          options: [
            "Remove immediately with a changelog note",
            "Announce, warn consumers, support the old path for a window, then remove in the next MAJOR",
            "Keep both paths forever",
            "Rename and hope nobody notices",
          ],
          answerIndex: 1,
          explanation:
            "Deprecation is a shipped feature: announce, warn, wait, remove. Consumers upgrade on their own schedule; the window is what makes a MAJOR bump survivable instead of hostile.",
        },
      ],
    },
    {
      number: 11,
      title: "Infrastructure as Code",
      summary:
        "Your infrastructure — VPCs, databases, load balancers, DNS — is defined in code (Terraform, Pulumi, CDK), versioned, reviewed, and reproducible.",
      keyIdea:
        "No console clicks in production. Every resource is in code; every change is a pull request.",
      deepDive: [
        {
          heading: "The console is the enemy",
          paragraphs: [
            "A console change is invisible: no review, no history, no way to reproduce the environment from source. Infrastructure as code replaces the console with declarations — Terraform, Pulumi, CDK — stored in git and applied through plan, review, apply. The plan is the artifact of trust: read the diff like a code review, because a security group or an IAM policy is code with a very large blast radius.",
            "State is the mechanism and the hazard: it maps your declarations to real resources and must live remotely — S3 with DynamoDB locking, or Terraform Cloud — never on a laptop, never in git. State files hold secrets and cannot survive two simultaneous applies without locking. Lose the state and Terraform can no longer see what exists; recovery is possible but it is archaeology with an outage attached.",
          ],
        },
        {
          heading: "Modules, environments, discipline",
          paragraphs: [
            "Modules package patterns once: a service module carries the load balancer, target group, task definition and alarms, and each environment instantiates it with parameters. Dev, staging and prod differ by variables, not by copy-pasted resource blocks — divergence between environments is exactly how staging stops predicting prod. Adopting on brownfield starts with terraform import, one resource category at a time, until the plan shows no surprises.",
            "Discipline lives in the pipeline: plans run on pull requests and get posted as comments, applies run from CI with a scoped role, never from a laptop holding admin credentials. Separate the plan role from the apply role. Sensitive values flow through variables and secret stores, never through committed files. Nightly drift plans catch the console click someone swears they did not make.",
          ],
        },
        {
          heading: "IaC meets CI/CD",
          paragraphs: [
            "Infrastructure changes deploy like code changes: reviewed, planned, applied on merge, reversible by reverting the commit — with extra care around destructive diffs, since deleting a database in code deletes it in reality. Keep application deploys and infrastructure changes on separate pipelines; they run on different cadences with different risk. A revert of an apply is a plan too, not a leap of faith.",
            "Honest caveats close the chapter: IaC is not backup — it reproduces structure, not data — so lifecycle prevent_destroy guards the resources that must never vanish, and backups stay a separate discipline. The goal is not purity or a zero-console policy enforced by shame; it is that any engineer can rebuild the environment from the repository, and every change to prod exists somewhere reviewable.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A change to prod infrastructure",
        caption:
          "Infrastructure changes get the same discipline as code: diff, review, apply, audit.",
        steps: [
          { label: "Edit HCL", note: "declare the intent in code" },
          { label: "Plan diff", note: "read it like a review" },
          { label: "Review", note: "prod needs a second pair of eyes" },
          { label: "Apply", note: "locked state, audited, from CI" },
          { label: "Drift watch", note: "nightly plan catches console edits" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Plan, review, apply with locking — and a nightly drift check that exposes console clicks as diffs.",
        code: [
          "#!/usr/bin/env bash",
          "set -euo pipefail",
          "cd infra/prod",
          "terraform init -input=false",
          "",
          "# The plan is the review artifact — read it like a diff",
          "terraform plan -out=tfplan -lock-timeout=60s",
          "# Apply only after approval, with state locking on",
          "terraform apply -lock-timeout=60s tfplan",
          "",
          "# Nightly drift check: console clicks show up as diffs",
          "terraform plan -detailed-exitcode -lock-timeout=60s || echo drift detected",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Making a quick fix in the AWS console during an incident.",
          fix: "Emergencies happen — but every console change is back-ported to code within a day, or drift hides it and the environment stops being reproducible.",
        },
        {
          mistake:
            "Terraform state on a laptop or committed to git.",
          fix: "Remote state with locking (S3 plus DynamoDB, or Terraform Cloud). State holds secrets and must not race between applies.",
        },
        {
          mistake:
            "Copy-pasting resource blocks between dev, staging and prod.",
          fix: "One module, three environments as parameter sets; divergence between environments is how staging stops predicting prod.",
        },
        {
          mistake:
            "Running terraform apply from a laptop with admin credentials.",
          fix: "Applies run from CI with scoped roles; humans plan and approve, pipelines write. The audit trail lives with the pipeline.",
        },
      ],
      fieldChecklist: [
        "Every production resource exists in code; I cannot think of a console-only one.",
        "State lives remotely with locking, and I know where it is and who can touch it.",
        "Infra changes go through plan, review, apply — with the plan attached to the PR.",
        "A nightly drift check runs, and I have seen it catch something at least once.",
        "Dev, staging and prod instantiate the same modules with different variables.",
        "I can rebuild the environment from the repo plus backups, and we have practiced.",
      ],
      keyTerms: [
        {
          term: "Infrastructure as Code",
          definition:
            "Declaring infrastructure in versioned code (Terraform, Pulumi, CDK) so changes are reviewed, reproducible and reversible.",
        },
        {
          term: "Terraform state",
          definition:
            "The mapping between declarations and real resources; stored remotely, locked during applies, dangerous to lose.",
        },
        {
          term: "Drift",
          definition:
            "Reality diverging from the code — usually a console change; detected by scheduled plans.",
        },
        {
          term: "Module",
          definition:
            "A reusable, parameterized unit of infrastructure — a service, a database — that environments instantiate.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why is infrastructure as code non-negotiable in production?",
          a: "Because console changes are invisible: no review, no history, no reproducibility. With IaC, every change is a diff someone reads before it exists — IAM policies and security groups deserve exactly that scrutiny. It also makes environments rebuildable from the repo, which is the difference between a disaster-recovery plan and a wish. Drift checks keep the code honest about reality.",
        },
        {
          q: "How do you introduce Terraform into an existing cloud account?",
          a: "Archaeology first: inventory what exists, then import resources into state one category at a time — networking, then databases, then services — and get plans showing no changes before you manage more. New resources go through modules from day one. Set approval gates and prevent_destroy on data stores before anyone trusts the pipeline with an apply.",
        },
        {
          q: "How does IaC fit with a CI/CD pipeline?",
          a: "Plans run on every pull request and get posted as comments; applies run on merge from CI with a scoped role, never from laptops. I keep infra and app deploys on separate pipelines — different cadence, different risk. Nightly drift plans catch out-of-band changes, and reverting a bad apply usually means reverting the commit, with extra care around destructive diffs.",
        },
      ],
      quiz: [
        {
          question: "What does terraform plan output represent?",
          options: [
            "The current state file",
            "The diff between declared code and real infrastructure",
            "A backup of the cloud",
            "The provider changelog",
          ],
          answerIndex: 1,
          explanation:
            "Plan is the preview of what apply would change, computed against real resources. That diff is the review artifact — which is why posting it on the PR is standard practice.",
        },
        {
          question:
            "Two engineers run terraform apply simultaneously. What prevents corruption?",
          options: [
            "Terraform merges the changes",
            "The last writer wins safely",
            "Applies are forbidden in CI",
            "Remote state locking blocks the second apply until the first finishes",
          ],
          answerIndex: 3,
          explanation:
            "State locking serializes applies. Without it, two concurrent applies read the same state and race each other — which is exactly why state lives somewhere with a lock, not on a laptop.",
        },
        {
          question:
            "A nightly terraform plan shows a change nobody submitted. Most likely:",
          options: [
            "Terraform is broken",
            "A provider upgrade",
            "Someone changed a resource in the console",
            "The state file expired",
          ],
          answerIndex: 2,
          explanation:
            "A diff with no corresponding commit is drift — reality moved without the code. The fix is back-porting the change to code so the repo remains the source of truth.",
        },
      ],
    },
    {
      number: 12,
      title: "Zero-Downtime Migrations",
      summary:
        "Schema changes that lock tables are outages. The expand-and-contract pattern makes every migration compatible with both old and new code.",
      keyIdea:
        "Each step is small, each step deploys safely, the dangerous moment where old and new disagree never exists.",
      deepDive: [
        {
          heading: "Why migrations take sites down",
          paragraphs: [
            "Schema changes lock, and locks queue. Adding a column with a default on older Postgres rewrote the whole table; adding NOT NULL scans every row; CREATE INDEX blocks writes without the CONCURRENTLY keyword. A blocking statement against a table with tens of millions of rows turns into a request queue, then health check timeouts, then a full outage — all triggered by a deploy that was supposed to be routine.",
            "The skill is knowing your engine's actual behavior on your version: modern Postgres adds columns instantly in most cases, NOT NULL arrives via a check added NOT VALID and validated later, and CONCURRENTLY cannot run inside a transaction. MySQL has its own online DDL matrix of ALGORITHM options. Rehearse on a clone with production row counts and measure the lock time — the measurement, not hope, is the go or no-go.",
          ],
        },
        {
          heading: "Expand and contract",
          paragraphs: [
            "Expand first: add the new shape additively — a nullable column, a new table — without touching anything old. Then dual-write: the new code writes both old and new shapes while backfills run in batches. Reads switch behind a flag. At every instant, old code and new code both work against the schema; that invariant is the whole design, and it is why the dangerous moment where versions disagree never exists.",
            "Contract last, in a later release: once every reader has left the old shape, drop it. Backfill discipline is its own craft — keyset batches of a few thousand rows, throttled, resumable through a watermark column, run off-peak, watched for replica lag. One giant UPDATE over eighty million rows is a self-inflicted incident: a long transaction, WAL explosion, replica lag, pool exhaustion, all at once.",
          ],
        },
        {
          heading: "The migration is code",
          paragraphs: [
            "Migrations live in the repository next to the code that needs them — Prisma migrate, Alembic, Flyway, golang-migrate — versioned, reviewed, and tested against a copy of production scale, because a migration proven on one hundred rows says nothing about one hundred million. Down migrations are aspirational fiction; the real rollback is the previous application version, which is exactly why compatibility in both directions is the design requirement.",
            "The sequencing rules follow from the invariant: schema expands before code that uses it ships, and contracts after the last reader is gone — two releases minimum for anything destructive. Measure, do not assume: run the migration on a staging clone with real row counts and record the lock duration. That number in the pull request is what reviewers actually need to approve a hot-table change.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Expand and contract",
        caption:
          "The dangerous moment — old and new disagreeing — is designed out, not survived.",
        stages: [
          { label: "Expand", note: "additive change, old code unaffected" },
          { label: "Dual-write", note: "new code writes both shapes" },
          { label: "Backfill", note: "batched, throttled, resumable" },
          { label: "Switch reads", note: "behind a flag, watch metrics" },
          { label: "Contract", note: "drop old shape, later release" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Add first, validate with NOT VALID, backfill in batches — no statement ever rewrites the hot table.",
        code: [
          "-- Expand: additive and instant on modern Postgres",
          "ALTER TABLE orders ADD COLUMN IF NOT EXISTS discount_cents BIGINT;",
          "",
          "-- Enforce NOT NULL later, without a table rewrite",
          "ALTER TABLE orders ADD CONSTRAINT orders_discount_nn",
          "  CHECK (discount_cents IS NOT NULL) NOT VALID;",
          "ALTER TABLE orders VALIDATE CONSTRAINT orders_discount_nn;",
          "",
          "-- Backfill in bounded batches; the id range advances each run",
          "UPDATE orders SET discount_cents = 0",
          " WHERE discount_cents IS NULL AND id <= 5000;",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Running ADD COLUMN with DEFAULT on a huge table and calling it instant.",
          fix: "Know your engine version's DDL behavior; test on a prod-scale clone and measure lock time before the deploy ships.",
        },
        {
          mistake:
            "Backfilling 80 million rows in one statement at peak.",
          fix: "Keyset batches of a few thousand rows, throttled, resumable via a watermark column, monitored for replica lag.",
        },
        {
          mistake:
            "Shipping the destructive migration in the same deploy as the code using it.",
          fix: "Expand first, ship code, migrate readers, contract last — destructive changes are always a later release, never the same deploy.",
        },
        {
          mistake:
            "Keeping down migrations as the rollback plan.",
          fix: "Rollback is the previous app version running against the expanded schema; down scripts are never exercised and never trusted.",
        },
      ],
      fieldChecklist: [
        "I know how each planned DDL statement behaves on my engine version and row count.",
        "Every migration is tested against a staging clone with production-scale data.",
        "Backfills are batched, throttled, resumable and watched for replica lag.",
        "Destructive changes wait until no reader of the old shape exists — a later release, never the same deploy.",
        "I can state the app-version rollback for any migration I ship.",
        "Migration lock times are measured, not assumed.",
      ],
      keyTerms: [
        {
          term: "Expand-and-contract",
          definition:
            "Additive schema change first, dual-compatible code, cleanup in a later release — zero downtime by construction.",
        },
        {
          term: "NOT VALID constraint",
          definition:
            "A Postgres check added without scanning existing rows; VALIDATE runs the scan later, without blocking writes.",
        },
        {
          term: "Keyset pagination",
          definition:
            "Batching by a monotonic key instead of OFFSET — stable, index-friendly iteration for backfills.",
        },
        {
          term: "CREATE INDEX CONCURRENTLY",
          definition:
            "A Postgres index build that does not block writes; it cannot run inside a transaction.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through renaming a column on a hot table with zero downtime.",
          a: "Expand: add the new column nullable, dual-write both names in code. Backfill old rows in keyset batches with throttling. Switch reads to the new column behind a flag and watch. Once no reader touches the old name, contract — drop it in a later release. Four small deploys, each reversible, and old and new code never disagree with the schema at any moment.",
        },
        {
          q: "How do you decide if a migration is safe to run?",
          a: "Two facts: the statement's lock behavior on my engine version, and the table's real size. I rehearse on a prod-scale clone and measure duration and lock time; if it locks writes for more than a few seconds on a hot table, it goes expand-and-contract instead. Rules of thumb: CONCURRENTLY for indexes, NOT VALID for constraints, batches for backfills.",
        },
        {
          q: "What is the most dangerous migration mistake you have seen?",
          a: "The untested backfill — one UPDATE over tens of millions of rows at peak: a long transaction, WAL explosion, replica lag, connection pool exhaustion. It looks like a database problem but it is a deploy problem. Since then I treat backfills as workloads with their own monitoring: bounded batches, a resumable watermark, and a lag alarm wired to the job itself.",
        },
      ],
      quiz: [
        {
          question:
            "The invariant expand-and-contract maintains at every step:",
          options: [
            "No more than one table changes per week",
            "The schema never changes",
            "Old code and new code both work against the schema at all times",
            "Migrations run outside business hours",
          ],
          answerIndex: 2,
          explanation:
            "The whole design is dual compatibility: additive expands, dual-writes, flag-gated read switches, and a delayed contract. That invariant is why rollback always has somewhere safe to go.",
        },
        {
          question: "Why does CREATE INDEX CONCURRENTLY exist?",
          options: [
            "Building an index normally blocks writes for the whole build",
            "It makes indexes faster to query",
            "It skips validation of the index",
            "It works inside transactions",
          ],
          answerIndex: 0,
          explanation:
            "A standard index build takes a lock that blocks writes until it finishes. CONCURRENTLY builds without blocking writes — the tradeoff being it is slower and cannot run in a transaction.",
        },
        {
          question: "The honest rollback plan for a destructive migration is:",
          options: [
            "Running the down migration",
            "Restoring from backup",
            "The previous app version, compatible with the expanded schema, still running",
            "Point-in-time recovery",
          ],
          answerIndex: 2,
          explanation:
            "Down migrations are almost never exercised and often wrong at scale. The reliable rollback is application-level: the previous version runs happily on the expanded schema while you fix forward.",
        },
      ],
    },
    {
      number: 13,
      title: "Automatic Rollback Triggers",
      summary:
        "A bad deploy should roll back before humans notice. Define the metrics that trigger automatic rollback: error rate, p99 latency, SLO burn.",
      keyIdea:
        "Rollback is minutes; root-causing is hours. The runbook says roll back before diagnosing.",
      deepDive: [
        {
          heading: "The first move is always revert",
          paragraphs: [
            "Deploys have a tell: incidents that start minutes after one are the deploy until proven otherwise. That correlation is enough to act — revert first, investigate after. Root-causing while production burns spends minutes you do not have, on the least likely hypothesis. Rollback takes the version out of the equation in one step, and a healthy share of incidents simply end there.",
            "The enemy is sunk cost: 'the deploy is probably fine, let me check the logs first' while the error budget burns. Reverting is cheap, blameless and reversible in the other direction too — redeploy the digest if you were wrong. The runbook's first line exists to override adrenaline: roll back before diagnosing. Investigation happens on the reverted build, where nobody's request is paying for your curiosity.",
          ],
        },
        {
          heading: "What triggers a rollback",
          paragraphs: [
            "Define the triggers before the deploy: error rate above baseline, p99 latency breach, saturation, a business counter like checkout success, and SLO burn rate — the most principled signal, because fast-burn windows trip only when the release is genuinely consuming the error budget. Compare against the pre-deploy baseline over the same window so ordinary traffic noise cannot fire the trigger.",
            "Mechanically, the deploy tool watches the bake window: CodeDeploy listens to alarms, Argo Rollouts and Flagger run analysis queries between weight steps, and any breach aborts the rollout automatically. Use symptom-level triggers — any error spike counts, attribution comes later. Damp the flapping: require the breach to persist for a minimum duration and rate-limit reverts, or the system will ping-pong between versions all night.",
          ],
        },
        {
          heading: "Designing for reversibility",
          paragraphs: [
            "Automatic rollback only works if rollback is a normal operation: previous digests retained in the registry, migrations backward compatible so old code runs on the new schema, flags letting you disable behavior without a deploy, and a one-command revert any on-call engineer can run. A rollback that depends on an untested script is a hope, not a design. The pieces from Chapters 8 through 12 are the prerequisites.",
            "Then rehearse: once a month, deploy a canary that deliberately fails its health check and watch the automation revert it without human hands. Chaos engineering for the pipeline. After every real revert, preserve evidence and postmortem the release process — what did tests miss, what signal was missing, which trigger was too loose. The maturity metric is mean time to revert, and it should only ever go down.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Roll back or debug?",
        caption:
          "Correlation with a deploy is enough to revert; certainty is not required to stop the bleeding.",
        start: "Error rate spikes after deploy",
        branches: [
          {
            label: "Within the bake window",
            outcome: "Automation reverts to previous digest",
            good: true,
          },
          {
            label: "Deploy correlation unclear",
            outcome: "Revert anyway — correlation is enough",
            good: true,
          },
          {
            label: "Revert fails or stalls",
            outcome: "Redeploy last good; page the owner",
            good: true,
          },
          {
            label: "Debug in prod first",
            outcome: "The budget burns while you read logs",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Rollback requires finding and paging the person who deployed.",
          fix: "Anyone on-call can revert with one command; the previous digest is retained and the runbook contains the exact command.",
        },
        {
          mistake:
            "Auto-rollback thresholds tuned so loosely they never fire.",
          fix: "Start from the pre-deploy baseline, set multipliers you would accept as a human, and rehearse with a deliberately bad canary.",
        },
        {
          mistake:
            "Treating a successful revert as the end of the incident.",
          fix: "Preserve evidence, postmortem the release process, and sharpen the trigger that should have caught it earlier.",
        },
        {
          mistake:
            "Rolling back code but leaving the new schema and flags in place.",
          fix: "Rollback spans the release: code digest, flag state, config, schema compatibility. Design so the old version runs on everything new.",
        },
      ],
      fieldChecklist: [
        "Every deploy has a bake window with defined rollback signals and thresholds.",
        "Reverting to the previous version is one command any on-call engineer can run.",
        "I have watched automation roll back a deliberately bad canary, on purpose.",
        "SLO burn rate, not just raw error counts, feeds the rollback decision.",
        "Rollback compatibility covers code, schema, config and flags together.",
        "Mean time to revert is measured and trending down.",
      ],
      keyTerms: [
        {
          term: "SLO burn rate",
          definition:
            "How fast the error budget is being consumed; fast-burn windows are the principled auto-rollback trigger.",
        },
        {
          term: "Bake window",
          definition:
            "The post-deploy interval during which metrics decide keep, promote or revert.",
        },
        {
          term: "Flapping",
          definition:
            "A trigger that fires, reverts, and re-fires repeatedly — damped by minimum breach duration and rate limits.",
        },
        {
          term: "Mean time to revert",
          definition:
            "The deploy-level maturity metric: minutes from symptom to the previous version serving traffic again.",
        },
      ],
      interviewQuestions: [
        {
          q: "Deploy went out, errors spiked, no one knows why. What do you do in the first five minutes?",
          a: "Revert. Correlation with a deploy is enough justification; the revert is one command and removes the variable while we investigate. If rollback is somehow slower or riskier than the outage, that is the real finding — it means the pipeline is not actually reversible, which is a bigger problem than whatever this release broke.",
        },
        {
          q: "How do you choose automatic rollback thresholds?",
          a: "Baseline-relative and burn-based: compare the post-deploy window to the same window pre-deploy, and use SLO burn rate so the trigger scales with traffic. Require a minimum breach duration to avoid flapping, and rehearse the trigger with a deliberately failing canary so we know what firing feels like. Absolute thresholds rot; ratios and burns survive traffic changes.",
        },
        {
          q: "What makes a system genuinely rollback-ready?",
          a: "Four things, together: previous digests retained and deployable by one command; migrations backward compatible so old code runs on the new schema; flags letting you disable behavior without a deploy; and rehearsed automation watching the bake window. Miss any one and rollback is a theory. We rehearse monthly — deploy a canary that fails, watch it revert.",
        },
      ],
      quiz: [
        {
          question: "Errors spike minutes after a deploy. The runbook's first line says:",
          options: [
            "Roll back before diagnosing",
            "Read the stack traces in prod",
            "Scale up replicas",
            "Wait for a second occurrence",
          ],
          answerIndex: 0,
          explanation:
            "Reverting removes the suspected variable in one step and is cheap to undo if wrong. Diagnosis happens on the reverted build — while user traffic pays for neither your curiosity nor your confidence.",
        },
        {
          question:
            "Which trigger design best avoids noise-induced rollbacks?",
          options: [
            "Absolute error count above 100",
            "Any single 5xx",
            "Baseline-relative error rate with a minimum breach duration",
            "Memory usage over 80 percent",
          ],
          answerIndex: 2,
          explanation:
            "Baseline comparison cancels traffic noise, and a minimum breach duration damps flapping. Absolute thresholds rot as traffic grows and either never fire or fire constantly.",
        },
        {
          question:
            "A rollback reverts code but not the migration that shipped with it. What went wrong in design?",
          options: [
            "Nothing — code rollback is sufficient",
            "The migration was not backward compatible, so old code cannot run on the new schema",
            "The flag service failed",
            "The registry lost the digest",
          ],
          answerIndex: 1,
          explanation:
            "Rollback is only real when the previous version runs against everything new. Backward-compatible migrations (expand-and-contract) are what keep that promise after the schema has moved.",
        },
      ],
    },
    {
      number: 14,
      title: "The Boring Deploy",
      summary:
        "The goal is not exciting deploys; it is boring ones. One command, reversible, observable, frequent. Boring is the highest compliment you can pay a deploy pipeline.",
      keyIdea:
        "Frequency reduces risk: a deploy that ships ten times a day is a non-event; one that ships monthly is an incident.",
      deepDive: [
        {
          heading: "Boring is a feature you build",
          paragraphs: [
            "A boring deploy has concrete properties: one command, or none beyond merging to main; a pipeline that runs identically every time; a version you can name; a rehearsed rollback; metrics that show the release as an event. Excitement — console clicks, hand-patched files, live debugging during rollout — is risk being generated in real time. Every manual step is a place where a human varies, and variance is where incidents live.",
            "Frequency is the compounding part: small diffs are easy to review, easy to test, easy to blame and easy to revert. A monthly deploy bundles a month of interaction risk into one event with no author. Fifty deploys a week with near-zero per-deploy risk beat one heroic release, and the DORA metrics — frequency, lead time, change failure rate, MTTR — exist to measure exactly this muscle.",
          ],
        },
        {
          heading: "The loop that never stops",
          paragraphs: [
            "The mature pipeline is a loop: commit, build, deploy, observe, learn, commit again. Observation is part of deploying — bake windows, version-labeled metrics, dashboards where a release draws a vertical line. Learning feeds the next turn: every incident sharpens a trigger, every flaky test gets fixed or deleted, every manual step gets scripted. The loop is the actual product; features merely ride on it.",
            "Measure the pipeline itself, not just the software: lead time from commit to prod, deployment frequency, change failure rate, time to restore. When a number degrades, the loop is telling you which part to fix — slow tests, missing rollback, flaky deploys. Teams that deploy on Friday afternoon without ceremony have this loop; teams that queue releases for deploy days have a schedule standing in for a system.",
          ],
        },
        {
          heading: "Friday afternoon as the final exam",
          paragraphs: [
            "The final exam is one question: can you ship on Friday at 4pm and go home? If flags decouple release from deploy, rollback is automatic, migrations are expand-and-contract, and the bake window is watching — yes, and it should feel unremarkable. If the answer is never, the pipeline has told you something honest: it is not reversible enough, and a calendar rule will not fix that.",
            "The last ten percent compounds: smoke tests that catch what unit tests miss, canary analysis on the risky paths, immutable images, infrastructure as code underneath it all. The payoff is cultural as much as technical — engineers who trust the pipeline ship more, iterate faster, and stop fearing production. Boring deploys are how good teams earn the right to build exciting products.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The deploy loop",
        caption:
          "Each turn of the loop makes the next deploy safer; skipping turns makes it scarier.",
        steps: [
          { label: "Commit", note: "small diff, reviewed" },
          { label: "Pipeline", note: "tests build one artifact" },
          { label: "Deploy", note: "same image, injected config" },
          { label: "Observe", note: "bake window, version-labeled metrics" },
          { label: "Learn", note: "sharpen triggers, fix flakiness" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "One command, no decisions: the script has no branches where a human judgment call can hide.",
        code: [
          "#!/usr/bin/env bash",
          "# The whole deploy: one command, no human decisions",
          "set -euo pipefail",
          "",
          "SHA=$(git rev-parse --short HEAD)",
          "echo Deploying $SHA",
          "",
          "# 1. CI already built and pushed this image by digest",
          "# 2. Deploy by SHA, never by latest",
          "./scripts/deploy.sh $SHA",
          "",
          "# 3. The deploy tool runs the bake window and rolls back automatically",
          "echo $SHA deployed. Bake window running; rollback is automatic.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Batching a week of work into one 'release branch' deploy.",
          fix: "Ship daily behind flags: small diffs, instant blame, trivial revert. Big batches are interaction risk with no author.",
        },
        {
          mistake:
            "A deploy checklist that lives in someone's head.",
          fix: "Script every step; the checklist is the script. Humans supervise the pipeline, they do not perform it.",
        },
        {
          mistake:
            "Treating Friday deploys as inherently dangerous.",
          fix: "A pipeline you cannot trust on Friday is not trustworthy on Tuesday either — fix reversibility, not the calendar.",
        },
        {
          mistake:
            "Never measuring lead time or change failure rate.",
          fix: "Track the DORA four; when a number degrades, the loop is telling you which part to fix next.",
        },
      ],
      fieldChecklist: [
        "Any engineer can deploy with one command, and no deploy step exists only in someone's memory.",
        "The previous release is one command away, and I have rehearsed the revert this month.",
        "New releases are visible as events on the metrics dashboards.",
        "I would ship on Friday at 4pm without ceremony, and I can explain why that is safe.",
        "Lead time, deploy frequency and change failure rate are tracked and improving.",
        "Every deploy is the same pipeline; there is no special path for urgent fixes.",
      ],
      keyTerms: [
        {
          term: "DORA metrics",
          definition:
            "Deployment frequency, lead time, change failure rate, MTTR — the four numbers that grade a delivery loop.",
        },
        {
          term: "Lead time",
          definition:
            "Minutes from commit to prod; the honest measure of how much pipeline stands between an idea and users.",
        },
        {
          term: "Change failure rate",
          definition:
            "The share of deploys causing incidents; the quality counterweight to frequency.",
        },
        {
          term: "Boring deploy",
          definition:
            "One command, reversible, observable, frequent — the pipeline as a non-event.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does a healthy deployment culture look like?",
          a: "Deploys are non-events: one command or merge-to-main, the same pipeline every time, a bake window with automatic rollback, and version-labeled metrics so a release is visible. Engineers deploy daily without asking permission, and the DORA numbers trend the right way. The tell is emotional, not technical: nobody's heart rate rises when a deploy starts.",
        },
        {
          q: "How do you get from monthly releases to daily deploys?",
          a: "Reduce batch size and make every step safe: flags so dark code ships, expand-and-contract so migrations never block, automated rollback so mistakes cost minutes, and a pipeline under ten minutes so waiting never becomes the excuse. Then frequency itself improves safety — small diffs revert trivially. It is a flywheel; each week gets easier than the last.",
        },
        {
          q: "Someone says 'we do not deploy on Fridays'. Reasonable?",
          a: "It is a symptom, not a policy. If deploys were reversible and observable, Fridays would not matter; the calendar rule is compensating for a pipeline people do not trust. I fix the pipeline — flags, automated rollback, rehearsed reverts — and then let the team decide when to ship. Avoiding Fridays forever means the underlying risk never gets fixed.",
        },
      ],
      quiz: [
        {
          question: "Why does deploying more often reduce risk?",
          options: [
            "More deploys mean better morale",
            "Small diffs are easier to review, test, blame and revert than big batches",
            "Frequent deploys skip testing",
            "Servers warm up faster",
          ],
          answerIndex: 1,
          explanation:
            "Risk scales with batch size and obscurity. A small diff has a known author, a short review, instant blame and a one-command revert; a monthly batch has none of those.",
        },
        {
          question: "The real problem behind a 'no Friday deploys' rule is:",
          options: [
            "Weekend support costs",
            "DNS TTLs",
            "Engineers dislike Fridays",
            "The pipeline is not reversible or observable enough to trust",
          ],
          answerIndex: 3,
          explanation:
            "A calendar rule compensates for missing trust. Fix reversibility — flags, automated rollback, rehearsed reverts — and the day of the week stops being a variable at all.",
        },
        {
          question:
            "Which metric pairs deploy frequency with a quality counterweight?",
          options: [
            "Code coverage",
            "Number of open pull requests",
            "Change failure rate",
            "Story points per sprint",
          ],
          answerIndex: 2,
          explanation:
            "Frequency without quality is just speed with incidents. Change failure rate — the share of deploys causing problems — is the counterweight that keeps the loop honest.",
        },
      ],
    },
  ],
};
