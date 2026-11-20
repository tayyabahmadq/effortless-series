/**
 * Book 12 — Master Disaster Recovery.
 * Expanded from the seed data in books-data.ts; format follows _reference.ts.
 */
import type { Book } from "../types";

export const book12: Book = {
  id: "book-12",
  number: 12,
  title: "Master Disaster Recovery",
  subtitle: "Book 12 of 13 · The Effortless Series",
  tagline:
    "Automated backups, point-in-time recovery, restore drills, snapshots, replication, failover, multi-region, RPO and RTO, retention policy, immutable WORM backups, logical-corruption recovery, runbooks, and split-brain prevention.",
  description:
    "Disasters are binary — either you can rebuild, or you cannot. Ransomware, fat-fingered deletions and region outages are not hypotheticals; the only variable is whether you practiced.",
  layer: "Ship, survive, watch",
  layerQuestion: "How does it go live, come back, and tell us the truth?",
  accentColor: "#fb7185",
  emoji: "12",
  months: "Month 11",
  chapters: [
    {
      number: 1,
      title: "Backups Are a Rumor Until You Restore",
      summary:
        "An untested backup is a hope, not a strategy. The drill — restore into scratch, verify, time it — is what converts artifacts into capability.",
      keyIdea: "Monthly restore drill. A failed drill is an incident, not a learning.",
      deepDive: [
        {
          heading: "A backup is a bet, not a feature",
          paragraphs: [
            "Every backup job can fail in ways that still look green in the dashboard. The dump runs against the wrong schema, the cron user lost bucket permissions, the storage filled at 80 percent and the file truncated — exit code zero either way. Storage durability numbers like eleven nines on S3 describe the bucket, not your ability to use what is inside it. Until someone has restored the artifact and queried it, the backup is a bet placed every night, never settled.",
            "Verification has two layers, and both matter. Byte-level verification — checksums on the artifact — proves the file survived storage intact. Semantic verification proves the data is usable: restore into scratch, count rows against production, check foreign keys, run one real application query. A dump can pass the first and fail the second, which is exactly what happens when the restore tooling was removed, the schema is three major versions behind, or the dump silently selected an empty schema. Schedule both.",
          ],
        },
        {
          heading: "The drill: scratch, verify, time it",
          paragraphs: [
            "Once a month, restore the latest artifact into an isolated scratch environment: same tooling as the real restore path, same permission boundaries, no shortcut script. Then assert — row counts per table, constraint checks, a smoke query the application would run. Record the wall-clock duration from command to verified result. That measured number, not the estimate in the wiki, is the input to your RTO conversation in Chapter 8. Trend it month over month; regressions are findings.",
            "Treat a failed drill as an incident, because it is one: your recovery capability just proved absent. Page it, review it blamelessly, fix it, re-run within the week. The drill also catches drift that no dashboard shows — the new table nobody added to backup coverage, the WAL archive that broke three weeks ago, the IAM policy rotation that quietly revoked restore access. Findings become tickets with owners and dates, and the next drill re-tests them first.",
          ],
        },
        {
          heading: "The cost of never drilling",
          paragraphs: [
            "The untested backup fails at the worst possible moment, under pressure, with leadership watching the clock. Real incidents follow the same shape: ransomware encrypts production and the nightly dump turns out to have been failing since a credential rotation; a fat-fingered DROP TABLE meets a WAL archive that stopped weeks ago. Nobody lied — the dashboard was green. The gap between green dashboards and restorable data is only visible from inside a restore.",
            "The drill buys something subtler than verification: restore becomes routine knowledge spread across the on-call rotation instead of living in one veteran's head. Rotate the drill owner monthly. The first person to restore during a real disaster should have done it at least twice in peacetime, with the stopwatch running and nothing at stake. Capability that only one person possesses is a single point of failure wearing a backup's clothes.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The restore drill",
        caption:
          "Restore speed and verification are facts you schedule, not hopes you hold.",
        steps: [
          { label: "Pick artifact", note: "latest full backup" },
          { label: "Scratch target", note: "isolated from prod" },
          { label: "Restore", note: "real tooling, real perms" },
          { label: "Verify", note: "counts, FKs, smoke query" },
          { label: "Time it", note: "this number is your RTO" },
          { label: "Report", note: "pass, or page on-call" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The drill measures the only number that matters: how long a restore actually takes.",
        code: [
          "#!/usr/bin/env bash",
          "set -euo pipefail",
          "START=$(date +%s)",
          "# Isolated scratch target — same tooling as the real restore path",
          "createdb -h scratch.internal drill_restore",
          "pg_restore -h scratch.internal -d drill_restore --no-owner -j 4 latest.dump",
          "# Semantic verification, not a file-size glance",
          "psql -h scratch.internal -d drill_restore -t -c 'SELECT count(*) FROM orders;'",
          "psql -h scratch.internal -d drill_restore -t -c 'SELECT count(*) FROM customers;'",
          "ELAPSED=$(( $(date +%s) - START ))",
          "echo restore verified in ${ELAPSED} seconds",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Backup jobs green in cron for a year; nobody has ever restored one.",
          fix: "Automate a monthly restore into scratch with assertions; a failed drill pages on-call like any incident.",
        },
        {
          mistake:
            "Verifying a backup by checking the file exists and its size looks right.",
          fix: "Size proves nothing. Verify bytes with checksums and meaning with row counts and a smoke query after a real restore.",
        },
        {
          mistake: "The first restore attempt happens during the disaster.",
          fix: "Restore in peacetime, twice, with a stopwatch. Pressure multiplies every mistake the drill would have caught for free.",
        },
        {
          mistake: "Drill results recorded in a doc nobody reads.",
          fix: "Track restore duration and verification results as metrics; alert on failure and on regression against last drill.",
        },
      ],
      fieldChecklist: [
        "I have restored this system's latest backup into scratch within the last month.",
        "My verification checks meaning — row counts, foreign keys, a smoke query — not just file size.",
        "I can state today's measured restore time without looking it up.",
        "A failed restore drill pages on-call and gets a blameless review like any incident.",
        "The drill runs against the real restore path — same tools, same permissions — not a shortcut script.",
        "Every database and bucket I own appears in the drill inventory.",
      ],
      keyTerms: [
        {
          term: "Restore drill",
          definition:
            "A scheduled, timed exercise that restores a real backup into an isolated environment and verifies the result.",
        },
        {
          term: "Semantic verification",
          definition:
            "Checks that restored data is correct and usable — row counts, constraints, application smoke tests — not merely that files exist.",
        },
        {
          term: "Scratch environment",
          definition:
            "An isolated target for restore tests that can be destroyed freely and cannot touch production data.",
        },
        {
          term: "Silent backup failure",
          definition:
            "A backup job that reports success while producing an unusable artifact — the failure mode only a restore can expose.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you know your backups actually work?",
          a: "They get restored. A monthly drill pulls the latest artifact into an isolated scratch environment, runs semantic checks — row counts, constraints, one real application query — and records the wall-clock duration. The measured time feeds the RTO objective. A failed drill is treated as an incident: paged, reviewed blamelessly, fixed, re-run within the week. Green cron jobs prove nothing; a timed restore with passing assertions is the only evidence I accept.",
        },
        {
          q: "Design a restore drill for a Postgres service.",
          a: "Monthly, automated where possible. Provision a scratch instance with production-shaped tooling and permissions. Restore the latest base backup plus WAL, or the latest custom-format dump. Assert: row counts per table against production tolerance, foreign keys valid, one smoke query the app actually runs. Record declare-to-verified duration as a metric, publish it on the dashboard, and alert on failure or regression. Rotate the drill owner monthly so the whole on-call rotation holds the skill.",
        },
        {
          q: "A backup job has been green for a year. Why might you still be unrestorable?",
          a: "Because exit code zero is not recovery. The job may be dumping an empty or wrong schema, the credentials it writes with may have lost read access to a rotated secret, the WAL archive behind it may have broken months ago, the restore tooling may no longer exist in the current image, or the artifact may be locked to a platform you migrated off. Every one of those fails only when someone actually restores — which is why the drill exists.",
        },
      ],
      quiz: [
        {
          question: "What converts a backup artifact into a recovery capability?",
          options: [
            "Storing it in object storage with eleven-nines durability",
            "Restoring and verifying it on a schedule, with the time recorded",
            "Running the backup job more frequently",
            "Encrypting it with a customer-managed key",
          ],
          answerIndex: 1,
          explanation:
            "Durability of storage says nothing about usability of the artifact. Only a scheduled, timed, verified restore proves the backup can actually produce a working system.",
        },
        {
          question:
            "The drill restores cleanly, but the application fails against the restored database: the dump's schema is three major versions behind the code. What does this reveal?",
          options: [
            "The restore tooling is broken and must be replaced",
            "Snapshot retention is too short",
            "The artifact is intact but the restore path has drifted from the system it protects — keep artifacts current with the app and test the upgrade path",
            "The drill should verify file checksums instead",
          ],
          answerIndex: 2,
          explanation:
            "This is exactly why semantic verification matters: a byte-perfect artifact can still be unusable. Dumps must be taken from the current version, or the upgrade path between artifact and app must be part of the drill.",
        },
        {
          question: "Which is the strongest evidence that you can restore?",
          options: [
            "Twelve months of green backup job exit codes",
            "A vendor durability SLA for the storage bucket",
            "A dashboard showing backup sizes trending upward",
            "A timed restore with passing assertions completed last week",
          ],
          answerIndex: 3,
          explanation:
            "Exit codes, SLAs and dashboards all describe the backup process, not the recovery capability. Only a recent, timed, verified restore measures what a disaster will actually demand.",
        },
      ],
    },
    {
      number: 2,
      title: "Automated Backups",
      summary:
        "Manual backups are forgotten backups. Automation runs the backup, verifies it, replicates it, and alerts on failure — without a human in the loop.",
      keyIdea:
        "Backup automation identity cannot decrypt; restore role cannot move files. Separation of powers.",
      deepDive: [
        {
          heading: "If a human must remember, it will not happen",
          paragraphs: [
            "Manual backups fail in a predictable way: the person who runs them leaves, takes the knowledge, and the backups stop with them. Automation removes the remembering. A scheduler — cron, a Kubernetes CronJob, or the managed backup feature of your database service — triggers the job, and the job does the full loop: take the artifact, verify it, replicate it, alert on any failure. The trigger also fires around risky events: a backup immediately before every migration is cheap insurance.",
            "Automation also removes heroics from restore readiness: the same pipeline that produces artifacts should verify them, because a job that only produces is half a job. Build the loop in order — run, verify, replicate, retain, alert — and treat each stage as a gate: a backup that failed verification is not copied onward, and a backup that failed replication is not marked done. Exit codes are not opinions; wire them into the alerting path.",
          ],
        },
        {
          heading: "Alert on failure and on silence",
          paragraphs: [
            "Failure alerts catch the job that ran and broke. Silence alerts catch the job that never ran at all — the rotated credential, the deleted schedule, the node that was drained and never rescheduled. The pattern is a dead man's switch: the backup job emits a heartbeat on success, and a monitor pages when no heartbeat arrives within the expected window. Without it, the most common backup failure mode — quiet absence — produces no signal at all until someone tries to restore.",
            "Replication is the other half of survivability. The 3-2-1 rule — three copies, two media, one offsite — exists because blast radius applies to backups too: a fire, a region outage, or a compromised account can take the primary and the backup that lives beside it. Copy artifacts to a second account or region as a pipeline stage, not an afterthought. Managed services are not exempt: verify their retention, their cross-region behavior, and their restore path yourself.",
          ],
        },
        {
          heading: "Separation of powers",
          paragraphs: [
            "The quiet disaster scenario is a compromised identity with too many powers. If the same IAM role can write backups, restore them, and delete them, then one stolen credential — human or machine — can erase every copy of your data. Split the powers: the backup writer can create objects but never delete them; the restore role can read but never write; the application identity cannot reach the backup bucket at all.",
            "Keep encryption keys on a separate axis from storage permissions. A database service account that holds the KMS key used for backups can decrypt whatever it can reach; a key policy that grants use only to the restore role closes that path. Review these boundaries the way you review code — access reviews each quarter, least privilege by default. Chapter 10's immutability builds on this: object lock is the wall, but separation of powers is the moat in front of it.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "The backup pipeline",
        caption:
          "A backup is only done when it is verified, replicated and monitored — running is not done.",
        stages: [
          { label: "Run", note: "scheduled, no human" },
          { label: "Verify", note: "checksum + quick restore" },
          { label: "Replicate", note: "second region or account" },
          { label: "Retain", note: "tiered by policy" },
          { label: "Alert", note: "on failure and silence" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "The schedule is the easy half — the job must verify and emit a heartbeat, not only dump.",
        code: [
          "apiVersion: batch/v1",
          "kind: CronJob",
          "metadata:",
          "  name: nightly-pgdump",
          "spec:",
          "  schedule: '15 2 * * *'",
          "  jobTemplate:",
          "    spec:",
          "      template:",
          "        spec:",
          "          restartPolicy: OnFailure",
          "          containers:",
          "            - name: pgdump",
          "              image: postgres:17",
          "              command: ['/bin/sh', '-c']",
          "              args: ['pg_dump --format=custom --file=/backups/app.dump && backup-verify /backups/app.dump && emit-heartbeat']",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "One IAM role can back up, restore and delete backups.",
          fix: "Split identities: the writer cannot delete, the restore role cannot write, the application cannot reach the bucket.",
        },
        {
          mistake:
            "Alerting only when the job fails — a job that never runs pages nobody.",
          fix: "Add a dead man's switch: heartbeat on success, page when no heartbeat arrives within the expected window.",
        },
        {
          mistake: "Backups land on the same volume, region or account as the primary.",
          fix: "3-2-1: three copies, two media, one offsite in a separate blast radius, copied by the pipeline, not by hope.",
        },
        {
          mistake: "Assuming the managed service backs up by default.",
          fix: "Verify retention, PITR window and cross-region copy in the console, then prove it with one restore this month.",
        },
      ],
      fieldChecklist: [
        "Every backup I own is triggered by a scheduler, not a person.",
        "Each backup job verifies its artifact before declaring success.",
        "A second copy exists in another account or region.",
        "I get alerted on failure and on silence — no fresh backup inside the window.",
        "The backup writer identity cannot delete; the restore identity cannot write.",
        "Encryption keys for backups are separate from the identities that store them.",
      ],
      keyTerms: [
        {
          term: "Dead man's switch",
          definition:
            "A monitor that pages when an expected heartbeat — a successful backup — fails to arrive, catching jobs that silently never run.",
        },
        {
          term: "3-2-1 rule",
          definition:
            "Three copies of the data, on two different media, with one copy offsite in a separate blast radius.",
        },
        {
          term: "Separation of duties",
          definition:
            "Splitting write, read and delete powers across distinct identities so no single credential can destroy every copy.",
        },
        {
          term: "Backup artifact",
          definition:
            "The concrete output of a backup run — a dump file, a snapshot, a WAL segment — stored, verified and retained as an independently restorable object.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you make sure backups never get forgotten?",
          a: "Automation with two kinds of alerting. A scheduler owns the trigger — cron, a Kubernetes CronJob, or the managed backup feature — and the job runs the full loop: take, verify, replicate, alert. Failure alerts catch broken runs; a dead man's switch catches runs that never happen, paging when no heartbeat arrives in the expected window. The drill in Chapter 1 closes the loop by proving the artifacts the automation produces are actually restorable.",
        },
        {
          q: "Walk me through the security model around your backups.",
          a: "Separation of powers on two axes. Identities: the backup writer can create objects but never delete them, the restore role can read but never write, and the application identity cannot reach the backup bucket at all. Keys: encryption uses a KMS key whose policy grants use only to the restore role, separate from storage permissions. Combined with an immutable tier in a separate account, a stolen production credential can encrypt production but cannot erase the escape route.",
        },
        {
          q: "What does 'done' mean for a backup job?",
          a: "Run, verify, replicate, retain, alert — all five, as gates. The artifact exists and passed checksum and a quick semantic check; a copy exists in a second account or region; retention placed it in the right tier; and both failure alerting and silence monitoring cover the job. Anything less is a dump, not a backup: an artifact nobody verified, copied, or noticed the absence of.",
        },
      ],
      quiz: [
        {
          question:
            "Backup failure alerts are enabled, yet no backup has run for three weeks and nobody noticed. What was missing?",
          options: [
            "Longer retention on the artifacts",
            "A dead man's switch that pages when no fresh backup arrives in the window",
            "Faster storage for the backup bucket",
            "A second backup job on another schedule",
          ],
          answerIndex: 1,
          explanation:
            "Failure alerts only fire when the job runs and breaks. Silence monitoring — heartbeat expected, page on absence — is what catches the rotated credential or deleted schedule that stops the job entirely.",
        },
        {
          question:
            "Which identity design best limits ransomware damage to backups?",
          options: [
            "One admin role handles backups, restores and cleanup for speed",
            "Production application credentials can read the backup bucket for debugging",
            "The backup writer can create but never delete; restores use a separate read-only role; the app cannot reach the bucket",
            "All identities share a single encryption key for simplicity",
          ],
          answerIndex: 0,
          explanation:
            "The damage an attacker can do is bounded by the powers of the credentials they steal. Splitting write, read and delete powers means one compromised identity cannot erase every copy.",
        },
        {
          question: "What does 'done' mean for a backup job?",
          options: [
            "The process exited with code zero",
            "The artifact exists in the bucket",
            "The dump completed and its size looks plausible",
            "It ran, verified, replicated to a second blast radius, and silence-monitoring covers it",
          ],
          answerIndex: 2,
          explanation:
            "A backup is a pipeline, not a process exit. Until the artifact is verified, replicated and monitored for absence, the job is only half done — and the unmonitored half fails quietly.",
        },
      ],
    },
    {
      number: 3,
      title: "Point-in-Time Recovery (PITR)",
      summary:
        "PITR uses WAL archiving to let you restore the database to any second within the retention window — not just to the last backup.",
      keyIdea:
        "PITR is how you survive the 'we deleted a table at 2pm and noticed at 4pm' incident.",
      deepDive: [
        {
          heading: "WAL archiving is the whole trick",
          paragraphs: [
            "Postgres writes every change to the write-ahead log before it touches data pages — the same WAL that powers crash recovery and replication. Point the archive_command at object storage and every completed WAL segment lands there continuously; managed engines expose the same capability as a toggle with a retention slider. Combine an unbroken WAL stream with a base backup — pg_basebackup or a snapshot — and you can reconstruct the database as of any second covered by that stream.",
            "The recovery floor is the oldest base backup you keep; the ceiling is the newest archived WAL segment. Everything between is replayable at second granularity. MySQL's binlog, SQL Server's transaction log shipping, and MongoDB's oplog-based point-in-time restore are the same design wearing different logos. What none of them forgive: a gap in the archive. One missing segment breaks the chain between your base backup and any target after it — which is why archive health is monitored, not assumed.",
          ],
        },
        {
          heading: "Rewinding to a named second",
          paragraphs: [
            "The restore itself is mechanical: put the base backup into a scratch data directory, configure restore_command to fetch archived WAL, set recovery_target_time to the second you want — or a recovery_target_lsn, or a named restore point — and start Postgres. It replays and stops at the target, and recovery_target_action decides whether it pauses for inspection or promotes immediately. Verify on scratch before promoting anywhere near production; the target second should come from the incident timeline, not from memory.",
            "Before risky migrations, create a named restore point — pg_create_restore_point 'pre-migration-v42' — so the target is one label instead of a timestamp reconstruction. And measure the restore: replaying hours of WAL across a terabyte base backup is not instant, and the measured duration belongs in your RTO math. Teams that rehearse PITR quarterly quote real numbers; teams that do not quote the documentation. The gap between those postures is measured in hours of downtime.",
          ],
        },
        {
          heading: "What PITR covers, and what it does not",
          paragraphs: [
            "PITR exists for the human error class: the table dropped at 2pm and noticed at 4pm, the migration that went wrong, the over-broad UPDATE. Restore to 13:59 on scratch, extract the lost rows, reinsert them — or cut over entirely, per Chapter 11's corruption runbook. It does not cover what the WAL stream never captured: corruption already present in the base backup, an archive that has been broken for three weeks, or a target outside the retention window.",
            "That is why the operational discipline is monitoring plus rehearsal. Alert when no new WAL segment has been archived within the expected interval — archive_timeout bounds the wait, the alert bounds the silence. Track archive success in the drill, not just in the docs. And know your retention numbers cold: the honest answer to 'how far back can you recover?' is the oldest base backup plus unbroken WAL from there forward — nothing more generous than that.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "The PITR stack",
        caption:
          "Recovery reaches exactly as far as the oldest base backup plus unbroken WAL to the target second.",
        layers: [
          { label: "Target moment", note: "the second you name" },
          { label: "Archived WAL", note: "segments shipped continuously" },
          { label: "Base backup", note: "the starting image" },
          { label: "Retention window", note: "how far back you can go" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "PITR is a base backup plus WAL replay to a named second — then verify before promoting.",
        code: [
          "# Scratch instance: point at the WAL archive and name the second we want back",
          "cat >> postgresql.conf <<'EOF'",
          "restore_command = 'cp /mnt/wal-archive/%f %p'",
          "recovery_target_time = '2026-03-04 13:59:30+00'",
          "recovery_target_action = 'pause'",
          "EOF",
          "# Start Postgres — it replays archived WAL and stops at the target",
          "pg_ctl start -D /scratch/pgdata",
          "# Verify on scratch before promoting anywhere near production",
          "psql -d app -c 'SELECT count(*) FROM invoices;'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Treating nightly backups as minute-level recovery.",
          fix: "Nightly means losing up to a day. WAL archiving plus PITR is what buys second-level recovery points.",
        },
        {
          mistake: "WAL archive silently broken since last month; nobody noticed.",
          fix: "Alert when no new segment is archived within the expected interval; walk the archive path in every drill.",
        },
        {
          mistake: "Typing recovery_target_time from memory during the incident.",
          fix: "Pin the second in the incident timeline first, restore to just before it, verify on scratch, then promote.",
        },
        {
          mistake: "Targeting a PITR moment older than the retention window.",
          fix: "Check the oldest base backup and WAL coverage before promising anything; the window is a policy, not infinity.",
        },
      ],
      fieldChecklist: [
        "WAL archiving is on and I know the archive path and retention.",
        "I get alerted when no new WAL segment lands within the expected interval.",
        "I have performed a PITR restore to a named second, end to end, in the last quarter.",
        "Before risky migrations, I create a named restore point or take a logical dump.",
        "I know the oldest base backup my retention keeps — my real recovery floor.",
        "PITR restores happen on scratch first; promotion is a deliberate step.",
      ],
      keyTerms: [
        {
          term: "PITR",
          definition:
            "Point-in-time recovery: reconstructing a database as of any chosen second inside the retention window, from a base backup plus WAL replay.",
        },
        {
          term: "WAL archiving",
          definition:
            "Continuously shipping completed write-ahead log segments to durable storage, so replay can reach any moment between base backups.",
        },
        {
          term: "Restore point",
          definition:
            "A named marker in the WAL stream, created before risky operations, that gives a rewind an exact and memorable target.",
        },
        {
          term: "Recovery target",
          definition:
            "The moment a PITR restore stops at — a timestamp, an LSN, or a named restore point — chosen from the incident timeline, not from memory.",
        },
      ],
      interviewQuestions: [
        {
          q: "The team dropped a table at 2pm and noticed at 4pm. Walk me through the recovery.",
          a: "First, pin the second the table was dropped in the incident timeline — never from memory. Restore the latest base backup onto scratch with restore_command pointed at the WAL archive and recovery_target_time set just before the drop. Verify on scratch: the table is back, counts reconcile. Then decide: cut the whole system over, or extract just the lost rows and reinsert them into the live database. The measured duration updates the RTO math.",
        },
        {
          q: "How does PITR actually work?",
          a: "Postgres writes every change to the WAL before touching data pages. archive_command ships each completed segment to object storage continuously; a base backup anchors the start. To recover, restore the base backup and replay archived WAL to any target second, LSN or named restore point inside the retention window, then promote. The floor is the oldest base backup, the ceiling the newest segment — and one gap in the chain breaks everything after it.",
        },
        {
          q: "Why is PITR necessary if I already have replicas?",
          a: "Because replicas replicate the mistake. A dropped table, a bad migration, an over-broad UPDATE — the standby replays all of it within seconds, so a replica is not a backup against logical error. PITR rewinds to a moment before the event using artifacts the event never touched. Replicas buy availability; WAL archives buy history. You need both, and the corruption runbook in Chapter 11 runs on the PITR path.",
        },
      ],
      quiz: [
        {
          question: "What does PITR buy that nightly backups do not?",
          options: [
            "Faster snapshot creation",
            "Recovery to any second within the WAL retention window, not just to the last backup",
            "Protection against a corrupted base backup",
            "Automatic replication to a second region",
          ],
          answerIndex: 1,
          explanation:
            "Nightly backups bound recovery to backup boundaries. WAL archiving plus replay reaches any second in between — which is the difference between losing a day and losing the ten minutes before a mistake.",
        },
        {
          question:
            "WAL archiving broke three weeks ago and nobody noticed. A table was dropped ten minutes ago. What is the honest recovery picture?",
          options: [
            "PITR to five minutes ago, no data loss",
            "PITR to any point in the last three weeks",
            "PITR cannot cross the gap — the newest reachable state is the last unbroken archive point; everything after must come from elsewhere",
            "Nothing is recoverable ever again",
          ],
          answerIndex: 2,
          explanation:
            "One missing WAL segment breaks the replay chain to every later target. This scenario is why archive health is monitored with alerts — the silent gap is the disaster inside the disaster.",
        },
        {
          question: "Why create a named restore point before a risky migration?",
          options: [
            "It blocks writes during the migration",
            "It speeds up WAL archiving",
            "It replaces the need for backups",
            "It gives the rewind an exact, named target instead of a reconstructed timestamp",
          ],
          answerIndex: 3,
          explanation:
            "Under pressure, reconstructing 'the second before the migration' from logs invites off-by-minutes errors. pg_create_restore_point turns the target into a label the restore can name directly.",
        },
      ],
    },
    {
      number: 4,
      title: "Snapshots vs. Logical Backups",
      summary:
        "Snapshots are fast, full-disk images. Logical backups (pg_dump) are portable SQL. You need both: snapshots for speed, logical for portability and version migration.",
      keyIdea:
        "Snapshots restore the whole volume; logical backups restore the data. Different recovery scenarios need different artifacts.",
      deepDive: [
        {
          heading: "Snapshots: fast, coarse",
          paragraphs: [
            "A snapshot freezes a volume at a moment — EBS snapshots, cloud disk snapshots, storage-array snapshots. Taking one is near-instant because it is copy-on-write metadata, not a data copy; restoring is attaching the volume back, which makes snapshots the fastest path back from a corrupt volume or a destroyed instance. The costs: they are whole-volume, they are tied to the platform you took them on, and each one is a single moment — there is no replaying between snapshots.",
            "Consistency is the hidden catch. A snapshot of a running database is crash-consistent — as if the power cable was pulled — which is safe only because the database replays its own WAL on startup. Include the WAL with the snapshot, or quiesce writes first: fsfreeze, a brief write freeze, or a managed snapshot that coordinates with the engine. Snapshot without either, and the restore can land in a state the database cannot reason about. Chapter 3's PITR chains snapshots with WAL for exactly this reason.",
          ],
        },
        {
          heading: "Logical backups: slow, portable",
          paragraphs: [
            "pg_dump and mysqldump read the database and emit its contents as SQL or a custom-format archive. The restore is a load — which is why logical backups are slow on terabytes and fast on a weekend. What you buy for the wait: portability across versions, clouds and engines; selective restore, because custom-format archives let pg_restore extract a single table; and a migration path, since a dump-and-load is one honest way to move between major versions or platforms. Chapter 14's drill rotates both artifact types for this reason.",
            "The portability is also an audit. A dump that restores into a current schema proves your artifact matches your application; a dump that fails is telling you the backup strategy has drifted from the system it protects. Keep the dump cadence independent of snapshots — nightly logical plus hourly snapshots is a common, honest pairing — and store formats that outlive the tooling: compressed SQL and custom-format archives both survive a cloud migration that volume snapshots do not.",
          ],
        },
        {
          heading: "Different scenarios, different artifacts",
          paragraphs: [
            "Match the artifact to the failure. Instance destroyed, volume corrupt, whole-server loss: snapshot restore, minutes. One table dropped by a migration: logical extract — restore the dump into scratch, pull the table, reinsert. Major version upgrade or cloud migration: logical, because snapshots carry the old engine with them. Region loss: whichever artifact is replicated across regions — which is a retention and replication decision from Chapter 2, made before the disaster, not during it.",
            "Both artifact types belong in the drill inventory, restored on their own schedule. The snapshot drill proves the copy is self-sufficient — restore into a different environment, not the same host with the same network. The logical drill proves the format still loads into the current schema and tooling. Teams that skip one invariably discover which scenario they failed to cover the week they need it; the drill is cheaper than the discovery.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Snapshot vs logical backup",
        caption:
          "One buys minutes of RTO; the other buys portability across versions and clouds.",
        left: {
          heading: "Snapshots",
          items: [
            "Near-instant, whole volume",
            "Restore in minutes",
            "Tied to the storage platform",
            "Crash-consistent; needs WAL for point-in-time",
          ],
        },
        right: {
          heading: "Logical backups",
          items: [
            "Portable SQL, any version or cloud",
            "Restore one table if needed",
            "Slow on terabytes — hours",
            "Doubles as the upgrade path",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Treating a snapshot as point-in-time recovery.",
          fix: "A snapshot is one moment per snapshot. Second-level recovery needs base plus WAL replay, as in PITR.",
        },
        {
          mistake: "Snapshotting a live database with neither WAL nor a write freeze.",
          fix: "Crash-consistent is not app-consistent; include WAL or quiesce first so replay lands in a state the engine accepts.",
        },
        {
          mistake: "Keeping only snapshots.",
          fix: "Snapshots are platform-bound and version-bound. Keep a logical path for selective restore, migration and the audit it provides.",
        },
        {
          mistake: "Testing snapshot restores by re-attaching on the same host.",
          fix: "Restore into a different environment; the drill must prove the copy is self-sufficient.",
        },
      ],
      fieldChecklist: [
        "I can name, per data store, which artifact answers which recovery scenario.",
        "Snapshots are scheduled and copied to a second region.",
        "A logical dump exists and has been restored at least once recently.",
        "The snapshot consistency strategy — WAL, freeze, quiesce — is documented.",
        "Restores of both artifact types appear in the drill rotation.",
        "I know the restore time of each artifact type from measurement, not estimation.",
      ],
      keyTerms: [
        {
          term: "Snapshot",
          definition:
            "A copy-on-write freeze of a volume at one moment; near-instant to take and fast to restore, but whole-volume and platform-bound.",
        },
        {
          term: "Logical backup",
          definition:
            "A portable dump of the data itself — SQL or a custom-format archive — restorable across versions, clouds and engines.",
        },
        {
          term: "Crash-consistent",
          definition:
            "The state of a snapshot taken while writes were in flight — safe only because the database replays its own WAL on startup.",
        },
        {
          term: "Selective restore",
          definition:
            "Extracting a single table or object from a custom-format archive instead of loading everything — the logical backup's superpower.",
        },
      ],
      interviewQuestions: [
        {
          q: "When do snapshots beat logical backups?",
          a: "When the clock is the enemy. A snapshot restores a destroyed instance or corrupted volume in minutes, which makes it the RTO play for whole-system loss. It is also the cheap path for frequent copies of very large volumes. The trade: snapshots are whole-volume, platform-bound, and each one is a single moment — no replay between them. Logical backups are slower but portable, selective and version-crossing. Mature setups run both and drill both.",
        },
        {
          q: "A two-terabyte database must upgrade to a new major version. What is your path?",
          a: "Options in order of honesty: pg_upgrade in place with a tested rollback, a logical dump-and-load into a new cluster, or replication-based cutover. The logical path doubles as proof the backup strategy works — a dump that loads cleanly into the new version is the portability audit. Snapshots cannot carry you across major versions; they carry the old engine with them. Whatever the path, it runs first against a production-shaped copy, timed.",
        },
        {
          q: "Are snapshots backups?",
          a: "Yes, with caveats that matter. They are crash-consistent copies — safe because the engine replays its own WAL on startup — so include WAL or quiesce writes first. They are platform-bound, so they cannot migrate you off the provider, and whole-volume, so selective restore is out. Most importantly they are only as trustworthy as their last restore test. I treat snapshots as one artifact class in the drill inventory, never as the whole strategy.",
        },
      ],
      quiz: [
        {
          question:
            "The database volume is corrupted and the instance is destroyed. Which artifact returns you to service fastest?",
          options: [
            "A volume snapshot restored onto a new instance",
            "Last night's logical dump",
            "A read replica promoted without verification",
            "Rebuilding data from application logs",
          ],
          answerIndex: 0,
          explanation:
            "Snapshot restore is attach-and-start — minutes. A logical dump of two terabytes can take hours to load, which is why whole-system loss is the snapshot's scenario.",
        },
        {
          question:
            "You must restore a single accidentally-dropped table from last night's backup. Which artifact supports this?",
          options: [
            "A whole-volume snapshot",
            "An immutable locked snapshot",
            "A custom-format logical archive, restorable selectively with pg_restore",
            "The current read replica",
          ],
          answerIndex: 2,
          explanation:
            "Custom-format archives support selective restore — pull one table into scratch and reinsert it. Snapshots are whole-volume, and the replica contains the same drop the primary does.",
        },
        {
          question: "Why keep logical backups when snapshots are faster?",
          options: [
            "They restore faster under pressure",
            "Portability: they cross versions, clouds and platforms, and serve as the migration path",
            "They are always smaller than snapshots",
            "They satisfy the 3-2-1 rule by themselves",
          ],
          answerIndex: 1,
          explanation:
            "Snapshots lock you to a platform and an engine version. Logical backups restore across versions and clouds, enable selective restore, and audit whether the backup still matches the application.",
        },
      ],
    },
    {
      number: 5,
      title: "Replication as Resilience",
      summary:
        "A replica is also a live backup that survives the primary's worst day. Replication plus failover is your minute-scale recovery story.",
      keyIdea:
        "A replica is not high availability if its freshness is a rumor. Monitor replication lag.",
      deepDive: [
        {
          heading: "A replica keeps itself fresh",
          paragraphs: [
            "Streaming replication ships the primary's WAL to standbys, which replay it continuously — a live, warm copy that needs no backup window and no restore step to stay current. Synchronous replication makes the primary wait for the standby before acknowledging a commit: near-zero loss, at the cost of latency proportional to distance. Asynchronous acknowledges immediately and lets the standby trail: faster commits, at the cost of a tail of writes that exists only on the primary.",
            "That tail is the entire operational story of async replication. It is also why the replica doubles as infrastructure: read replicas offload heavy queries from the primary, a delayed replica gives you a fixed-distance copy — replay intentionally minutes behind, which buys a rewind point against logical corruption — and a warm standby is the raw material of failover in Chapter 6. One mechanism, WAL shipping, funds all of these postures; choose per cluster, deliberately.",
          ],
        },
        {
          heading: "Lag is the honest metric",
          paragraphs: [
            "A replica is not high availability if its freshness is a rumor. Measure lag two ways: in bytes, with pg_wal_lsn_diff between the primary's current position and each standby's replay position; and in seconds, with the standby's time since its last replayed transaction. Bytes tell you the failover cost; seconds tell you how stale any read against the replica is. Bulk loads, vacuum storms and network blips all spike lag — the alert threshold should fire well before lag threatens the numbers you promised in Chapter 8.",
            "Lag is also an RPO statement. If you fail over to a standby trailing thirty seconds, you lose roughly the last thirty seconds of committed writes — that is your real RPO at that moment, whatever the wiki says. Put the lag number on the dashboard next to the RPO objective, and cap it: most orchestrators refuse to promote a standby beyond a configured lag ceiling precisely because a stale standby winning an election converts an outage into data loss.",
          ],
        },
        {
          heading: "A replica is not a backup",
          paragraphs: [
            "Replication is fidelity, not history: the standby replays every DELETE, every DROP TABLE, every corrupted write, faithfully and quickly. It has no retention window and no independence — it usually shares the primary's credentials, its network, and often its blast radius. Against accidental destruction, ransomware with valid credentials, or a bug that writes wrong data, a replica is exactly as damaged as the primary, only slightly later.",
            "So the postures compose instead of substitute. Replicas buy minutes-scale recovery and read scale; backups and PITR buy history and independence, per Chapters 1 through 4; immutability buys survival against a hostile actor, per Chapter 10. A system with replicas but no verified backups fails Chapter 11's corruption scenario. A system with backups but no replica eats a full restore for every transient hardware death. Healthy systems pay for both, and the drill inventory lists them as different line items.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Write to standby, end to end",
        caption:
          "Failover quality is decided here: lag is the tail of work a promotion can lose.",
        steps: [
          { label: "Client commit", note: "waits per sync mode" },
          { label: "Primary WAL flush", note: "the durability point" },
          { label: "WAL sender", note: "streams to standbys" },
          { label: "Standby replay", note: "applies, stays hot" },
          { label: "Lag monitor", note: "bytes plus seconds" },
        ],
      },
      codeExample: {
        language: "sql",
        caption:
          "Two honest numbers: bytes not yet replayed, and seconds behind — alert on both.",
        code: [
          "-- How far behind is each standby, in bytes and in time?",
          "SELECT client_addr,",
          "       state,",
          "       pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS lag_bytes,",
          "       write_lag,",
          "       flush_lag,",
          "       replay_lag,",
          "       now() - pg_last_xact_replay_timestamp() AS replay_delay",
          "FROM pg_stat_replication;",
          "-- Alert when lag_bytes exceeds your failover tolerance.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Calling a lagging replica high availability.",
          fix: "Monitor replay lag in bytes and seconds with alerts; a replica minutes behind is a stale-read server, not HA.",
        },
        {
          mistake: "Treating replicas as backups.",
          fix: "Replicas replay deletes and corruption faithfully. Backups and PITR own history; replicas own freshness.",
        },
        {
          mistake: "Synchronous replication stretched across regions.",
          fix: "Sync costs one RTT per commit. Sync within the region, async across, and document which writes use which mode.",
        },
        {
          mistake: "Healthy replicas but no rehearsed failover.",
          fix: "Replication is potential; failover converts it. Rehearse promotion, fencing and client repointing per Chapter 6.",
        },
      ],
      fieldChecklist: [
        "I can query replication lag in bytes and seconds right now.",
        "Lag alerts fire before lag threatens the failover promise.",
        "I know which writes are synchronous and which are asynchronous.",
        "At least one replica is maintained as a warm standby, not just read traffic.",
        "My backups and PITR remain the history story; replicas are the freshness story.",
        "Replica health — replay position, not just connectivity — appears on the dashboard.",
      ],
      keyTerms: [
        {
          term: "Streaming replication",
          definition:
            "The primary shipping its WAL to standbys that replay it continuously — the live, warm copy behind minutes-scale recovery.",
        },
        {
          term: "Replication lag",
          definition:
            "The distance between primary and standby, measured in bytes not yet replayed and in seconds since the last replayed transaction.",
        },
        {
          term: "Synchronous replication",
          definition:
            "The primary waits for the standby before acknowledging a commit — near-zero loss, latency proportional to distance.",
        },
        {
          term: "Warm standby",
          definition:
            "A replica kept current and ready for promotion, serving the failover path rather than only read traffic.",
        },
      ],
      interviewQuestions: [
        {
          q: "Is a replica a backup?",
          a: "No — it is a live second copy that serves availability and read scale, not history. The standby replays every DELETE and every corrupted write within seconds and shares the primary's credentials and blast radius. Against accidental destruction or ransomware with valid credentials, it is damaged exactly like the primary, slightly later. Backups and PITR provide the independent, retained, pre-event history; replicas provide minutes-scale freshness. A healthy system pays for both and drills both separately.",
        },
        {
          q: "How do you monitor replication health?",
          a: "Two numbers, both alerted. Bytes: pg_wal_lsn_diff between the primary's current WAL position and each standby's replay position tells me the failover cost. Seconds: the standby's time since its last replayed transaction tells me how stale any read against it is. I alert well before lag threatens the promised RPO, and the orchestrator enforces a lag ceiling so a stale standby can never win a promotion. Connectivity is not health; replay position is.",
        },
        {
          q: "You fail over to an async replica lagging thirty seconds. What did you lose?",
          a: "Roughly the last thirty seconds of committed writes — the tail that existed only on the primary. That measured lag at the moment of failure is your real RPO, whatever the documentation says. This is why lag is a first-class dashboard metric next to the RPO objective, and why services that genuinely need near-zero loss pay for synchronous replication and its latency, instead of pretending async was free.",
        },
      ],
      quiz: [
        {
          question:
            "A standby trails the primary by thirty seconds when the primary dies. What is the failover consequence?",
          options: [
            "Nothing — replication is synchronous by default",
            "The last roughly thirty seconds of committed writes are lost; that lag was your real RPO",
            "The standby automatically catches up before promoting",
            "Data is guaranteed intact by WAL flushing",
          ],
          answerIndex: 1,
          explanation:
            "Asynchronous replication acknowledges before the standby has the writes, so the un-replayed tail dies with the primary. Lag at failure time is your actual RPO, whatever the docs claim.",
        },
        {
          question: "Which pair of metrics best describes replication health?",
          options: [
            "CPU on the primary and disk queue depth",
            "Bucket size and snapshot count",
            "Lag in bytes (pg_wal_lsn_diff) and delay in seconds (time since last replayed transaction)",
            "Backup job duration and alert count",
          ],
          answerIndex: 2,
          explanation:
            "Bytes measure the failover cost — what a promotion would lose. Seconds measure read staleness. Both must be alerted, and neither is implied by the replica being connected.",
        },
        {
          question: "Why is a replica not a backup?",
          options: [
            "Replicas cannot serve reads",
            "Replication requires synchronous commits",
            "Replicas only exist in managed services",
            "It replays deletes, drops and corruption faithfully and has no independent retention",
          ],
          answerIndex: 3,
          explanation:
            "A replica is a faithful live copy of whatever the primary becomes — including damaged. Backups and PITR provide the independent, retained, pre-event history a replica cannot.",
        },
      ],
    },
    {
      number: 6,
      title: "Failover",
      summary:
        "Failover promotes a replica to primary when the primary dies. The mechanics are easy; the surrounding coordination (clients repoint, DNS update, split-brain prevention) is hard.",
      keyIdea:
        "Automated failover with health checks and fencing. Split-brain is the worst outcome — two primaries diverging.",
      deepDive: [
        {
          heading: "Promotion is the easy part",
          paragraphs: [
            "pg_ctl promote — or its managed equivalent, a single API call — turns a standby into a primary in seconds. Everything around that moment is the actual work. Detection: what counts as dead — a refused connection, a slow one, a primary that answers pings but stopped committing? Health checks must test the role, not the port: can I write, is the write recent, does it stay dead for several consecutive probes? Get detection wrong and you fail over on a network blip, or never fail over at all.",
            "Then the coordination: fence the old primary before promoting, repoint clients to the new one, and get the application's retry behavior right. Clients discover the new primary through a repointable endpoint — a connection pooler like PgBouncer, a virtual IP, or DNS with a deliberately low TTL — never through a hardcoded address. Retry with backoff handles the seconds of uncertainty in between. Every one of these steps belongs in the runbook and in the drill, because the promote button is the only part that is easy.",
          ],
        },
        {
          heading: "Fencing before promoting",
          paragraphs: [
            "Fencing is the guarantee that the old primary cannot accept writes while the new one starts: power it off, revoke its network access, or strip its write permissions — STONITH, shoot the other node in the head. Skip fencing and you have created the preconditions for split-brain: two primaries accepting writes, histories diverging, and a reconciliation problem worse than the outage you were escaping. Automated failover systems — Patroni with a distributed consensus store, or your cloud's managed failover — wire fencing into the promotion path precisely so a panicked human cannot skip it.",
            "Orchestrators also encode policy you would otherwise improvise at 3am: Patroni's max_lag_on_failover refuses to promote a standby that trails the primary by more than a configured byte ceiling, trading availability for not losing the tail. Quorum-based promotion needs a majority of voting members to agree — Chapter 13's territory, but the config lines live here. Read what your orchestrator actually does before trusting it: 'automated failover' is a family of designs with very different failure modes.",
          ],
        },
        {
          heading: "Rehearse, or it is a theory",
          paragraphs: [
            "Automated failover that has never fired is a hypothesis. Game-day it quarterly: kill the primary in staging with the same tooling production uses, and measure the full chain — detection time, fencing, promotion, client repoint, first successful write. That measured chain is your real RTO input, and it is always longer than the slide claimed. Include the humans: does the on-call have console access, does the runbook match the current topology, does anyone know where the override flag lives?",
            "The runbook also needs a do-not-failover branch. During a region-wide event or a suspected storage-layer corruption, promoting a replica can make things worse — it spreads corruption, or burns your only warm copy on a lost cause. Automated systems keep promoting through exactly these scenarios unless you gate them. Decide in peacetime which signals force a manual decision — 'two people must agree before promoting during a region event' — and write it down. The worst time to design this gate is during the event.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Primary stops responding",
        caption:
          "The promote button is cheap; the decision to press it is the whole chapter.",
        start: "Primary unresponsive",
        branches: [
          {
            label: "Transient blip — recover",
            outcome: "No action; keep watching",
            good: true,
          },
          {
            label: "Dead: fence, then promote",
            outcome: "Promote standby, repoint clients",
            good: true,
          },
          {
            label: "Promote without fencing",
            outcome: "Two primaries; histories diverge",
            good: false,
          },
          {
            label: "Region-wide event",
            outcome: "Fail over per runbook, gate first",
            good: true,
          },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "max_lag_on_failover is the policy that keeps a stale standby from winning an election.",
        code: [
          "# Patroni: consensus-guarded failover, not a naive health check",
          "ttl: 30",
          "loop_wait: 10",
          "retry_timeout: 10",
          "max_lag_on_failover: 33554432  # 32 MB — never promote a standby this stale",
          "postgresql:",
          "  use_pg_rewind: true",
          "  parameters:",
          "    synchronous_commit: 'on'",
          "  create_replica_methods:",
          "    - basebackup",
          "tags:",
          "  nofailover: false",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Health check is a single TCP connect to the port.",
          fix: "Probe the role, not the port: writability, recency, several consecutive failures before acting.",
        },
        {
          mistake: "Skipping fencing under time pressure.",
          fix: "Automate fencing into the promotion path so it cannot be skipped — revoke the old primary's write ability first.",
        },
        {
          mistake: "Clients hardcode the primary's address.",
          fix: "Repoint via pooler endpoint or low-TTL DNS; add retry with backoff to cover the failover window.",
        },
        {
          mistake: "Failover rehearsed only on setup day, never again.",
          fix: "Game-day quarterly: measure detection through repoint, update the runbook, and rehearse the do-not-failover branch too.",
        },
      ],
      fieldChecklist: [
        "Failover is automated with health checks that test the role, not just the port.",
        "Fencing happens before promotion, every time, by design.",
        "Clients reach the database through a repointable endpoint — pooler or DNS.",
        "I have rehearsed failover and know the measured end-to-end time.",
        "The runbook states when NOT to fail over.",
        "A lag ceiling prevents promoting a stale standby.",
      ],
      keyTerms: [
        {
          term: "Failover",
          definition:
            "Promoting a standby to primary after the primary dies, plus everything that makes it work: detection, fencing, repointing, retry.",
        },
        {
          term: "Fencing",
          definition:
            "Guaranteeing the deposed primary cannot accept writes before the new one starts — power-off, network revocation or permission stripping.",
        },
        {
          term: "Promotion",
          definition:
            "Turning a standby into a primary — the easy mechanical step surrounded by the hard operational one.",
        },
        {
          term: "Repointable endpoint",
          definition:
            "A client-facing address — pooler, virtual IP, low-TTL DNS — that survives which node is primary, so clients never hardcode one.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through your failover design.",
          a: "Detection tests the role, not the port: writability, recency, several consecutive failed probes. On confirmation, fencing revokes the old primary's ability to write before anything is promoted — STONITH or permission revocation, automated into the path. Promotion uses quorum through an orchestrator like Patroni with max_lag_on_failover refusing stale standbys. Clients find the new primary through a pooler endpoint or low-TTL DNS with retry and backoff. The whole chain is measured quarterly in a game day; that measured chain is our RTO.",
        },
        {
          q: "What is split-brain and how do you prevent it?",
          a: "Two nodes both believing they are primary, both accepting writes, histories diverging irrecoverably. Prevention layers: quorum-based promotion so a majority must agree, fencing so the deposed leader physically cannot write, and STONITH as the enforcement. The design bias is asymmetric — better one node down than two primaries up — so under ambiguity we stay down and resolve with a human. Chapter 13 covers the full defense; this is where it earns its keep.",
        },
        {
          q: "When would you refuse to fail over automatically?",
          a: "Region-wide events and suspected storage-layer corruption. Promoting during a region event can burn the last warm copy on a lost cause; promoting onto a replica that replayed corruption spreads it. Automated systems will keep promoting through exactly those scenarios unless gated, so the runbook defines signals that force a manual decision — two people agreeing before promotion during a region event, for instance. That gate is designed in peacetime, written down, and rehearsed.",
        },
      ],
      quiz: [
        {
          question: "What must happen before promoting a standby to primary?",
          options: [
            "A full backup of the standby",
            "Lowering the TTL on all DNS records",
            "Vacuuming the standby",
            "Fencing the old primary so it cannot accept writes",
          ],
          answerIndex: 3,
          explanation:
            "Without fencing, the old primary can keep writing while the new one starts — two primaries, diverging histories. Fencing is the step that makes promotion safe, not optional cleanup.",
        },
        {
          question:
            "A network blip causes one failed health check; the monitor fails over immediately and fencing was skipped. What is the risk?",
          options: [
            "The standby becomes read-only",
            "Two primaries accept writes and histories diverge — split-brain",
            "The backup window is missed",
            "Nothing — failover is idempotent",
          ],
          answerIndex: 1,
          explanation:
            "A false-positive detection plus a skipped fence is the classic split-brain recipe. Health checks need consecutive failures, and fencing must be structural, not remembered.",
        },
        {
          question: "What does Patroni's max_lag_on_failover policy prevent?",
          options: [
            "Clients caching stale connections",
            "WAL segments filling the disk",
            "Promoting a standby too far behind, which would lose the recent write tail",
            "Split DNS between regions",
          ],
          answerIndex: 2,
          explanation:
            "A standby trailing by hundreds of megabytes would silently discard that tail at promotion. The lag ceiling converts 'any availability' back into 'availability without unacceptable data loss'.",
        },
      ],
    },
    {
      number: 7,
      title: "Multi-Region",
      summary:
        "Single-region is single-point-of-failure for the cloud. Multi-region active-active or active-passive is how you survive a region outage.",
      keyIdea:
        "Multi-region is expensive and complex. Justify per service: money ledger yes; recommendation cache maybe not.",
      deepDive: [
        {
          heading: "Region outages are real; so is the bill",
          paragraphs: [
            "A cloud region is a single point of failure at the largest scale you control nothing about — providers publish region status pages precisely because whole regions go dark for hours. The escape is multi-region, and the cheapest honest version is not serving from two regions: it is keeping restorable copies in a second one, so region loss becomes a rebuild measured in hours, not a data-loss event. Full multi-region serving — active-active or active-passive — is a different tier of spend entirely.",
            "The costs are structural, not line items. Active-passive means a standby in the second region whose cross-region lag defines your RPO; failover means promoting it and repointing the world. Active-active means both regions accept writes, which imports conflict resolution — last-writer-wins semantics or genuine CRDTs — into every data model you own. Synchronous replication across regions adds one round trip, often a hundred milliseconds, to every commit. Data residency law can forbid the whole design in some jurisdictions.",
          ],
        },
        {
          heading: "Justify per service, not per platform",
          paragraphs: [
            "Multi-region is a per-service decision, priced against what downtime costs that service. The money ledger, checkout, and authentication usually earn it: being down or losing writes is direct damage. The recommendation cache, the CMS drafts, the analytics pipeline usually do not — a read-only banner and a write-ahead queue that replays when the region returns costs a fraction of a second region and delivers most of the perceived resilience. Graceful degradation first, redundancy second.",
            "Degradation needs machinery to be real: kill switches that turn features off cleanly, flags that route around a dead dependency, and a policy stating which features may degrade and how. Multi-region for one narrow core — the ledger — with everything else degrading honestly, beats multi-region everywhere with degradation nobody tested. The per-service decision also sizes the drill: regional failover rehearsal covers the services that actually moved, not the entire platform.",
          ],
        },
        {
          heading: "Design decisions before the region dies",
          paragraphs: [
            "Everything that makes regional failover possible is decided in peacetime. The data layer: which stores replicate across regions, and what their lag-based RPO is. The edge: DNS or a global load balancer with health checks that steer users away from a dark region, with TTLs low enough to matter. The application tier: stateless, so 'failing over' means pointing existing capacity at the promoted data layer. The humans: a runbook that names who promotes, who repoints DNS, who posts the status update.",
            "Then rehearse it as a drill scenario, because regional failover exercises every layer at once and every one of them rots: DNS health checks pointing at stale endpoints, replicas that stopped replicating months ago, runbooks written for a topology that no longer exists. Chapter 14's rotation includes region loss precisely because it is the most expensive scenario to discover unprepared. Cost and complexity are the price of admission; rehearsal is what turns the spend into capability.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Active-passive vs active-active",
        caption:
          "Pick per service; most deserve neither until graceful degradation is exhausted.",
        left: {
          heading: "Active-passive",
          items: [
            "One region writes; standby replays",
            "Failover promotes the remote copy",
            "Lag sets your cross-region RPO",
            "Simple; half the write complexity",
          ],
        },
        right: {
          heading: "Active-active",
          items: [
            "Every region takes writes",
            "Conflict resolution required",
            "Sync across regions costs latency",
            "Justified for a narrow core only",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Replicating every service to a second region for safety.",
          fix: "Justify per service by damage. Most tolerate a documented degraded mode with kill switches at a fraction of the cost.",
        },
        {
          mistake: "Assuming active-active just works once deployed.",
          fix: "Two regions writing means two truths: pick conflict rules (last-writer-wins or CRDT) before the first dual write.",
        },
        {
          mistake: "Cross-region synchronous replication switched on by default.",
          fix: "Sync adds an RTT to every commit. Sync locally, async across regions, or accept measured latency deliberately.",
        },
        {
          mistake: "Regional failover never tested.",
          fix: "Make region loss a drill scenario: promote the remote copy, repoint DNS, verify, and time the whole chain.",
        },
      ],
      fieldChecklist: [
        "I can name which services are justified for multi-region and why.",
        "Services that stay single-region have a documented degraded mode.",
        "Cross-region lag is monitored and equals my stated RPO.",
        "Regional failover has a runbook and appears in drill rotation.",
        "DNS or a global load balancer can steer users away from a dead region.",
        "Data residency constraints per region are written down.",
      ],
      keyTerms: [
        {
          term: "Active-passive",
          definition:
            "One region serves and writes while a second holds a replicated standby; failover promotes the remote copy.",
        },
        {
          term: "Active-active",
          definition:
            "Every region accepts writes, buying regional independence at the permanent price of conflict resolution.",
        },
        {
          term: "Graceful degradation",
          definition:
            "A designed reduced mode — read-only banner, queued writes, disabled features — that keeps the service honest when infrastructure is lost.",
        },
        {
          term: "Data residency",
          definition:
            "Legal constraints on where data may physically live, which can forbid or reshape a multi-region design before engineering does.",
        },
      ],
      interviewQuestions: [
        {
          q: "Does this system need multi-region?",
          a: "Per service, priced against damage. The money ledger, checkout and authentication usually earn it; the recommendation cache, CMS drafts and analytics usually get a degraded mode instead — a read-only banner and a write-ahead queue that replays after recovery, at a fraction of the cost. Where we do go multi-region, active-passive first: one writing region, an async standby whose lag defines the RPO, promotion plus DNS repointing as the failover, rehearsed as a drill scenario.",
        },
        {
          q: "Active-active versus active-passive — how do you choose?",
          a: "Active-passive is the default: one region writes, the standby replays, failover promotes it. Simple, and the lag is an honest RPO. Active-active means every region takes writes, which imports conflict resolution — last-writer-wins semantics or real CRDTs — into every data model permanently, plus the latency tax if writes are synchronized. I only pay that for a narrow core whose business case survives the math, and everything else degrades honestly through kill switches.",
        },
        {
          q: "How do you survive a region outage with a single-region application?",
          a: "You mostly do not serve — the honest goal becomes rebuild, not availability. If backups and artifacts are copied to a second region, region loss is a restore measured in hours with an RPO equal to the replication cadence, not a data-loss event. That is the cheapest tier of the multi-region ladder, and it is exactly why Chapter 2's replication stage copies across regions. Serving through a region outage is the expensive top tier.",
        },
      ],
      quiz: [
        {
          question:
            "A single-region service needs its cheapest honest resilience upgrade. Which comes first?",
          options: [
            "Restorable copies in a second region plus a degraded mode with kill switches",
            "Full active-active multi-region",
            "Synchronous replication to another continent",
            "A second cloud provider",
          ],
          answerIndex: 0,
          explanation:
            "Copies in a second region turn region loss from data-loss event into hours-long rebuild, and a degraded mode keeps the service honest meanwhile. Serving from two regions is the expensive top tier, not the first step.",
        },
        {
          question: "What is active-active's hardest permanent cost?",
          options: [
            "More expensive load balancers",
            "Twice the storage bills",
            "DNS propagation",
            "Conflict resolution across regions taking writes concurrently",
          ],
          answerIndex: 3,
          explanation:
            "Two regions writing means two truths for the same rows. Last-writer-wins or CRDT semantics must be chosen, implemented and tested — a tax that never expires, unlike one-time setup costs.",
        },
        {
          question:
            "Region 1 dies. You have an active-passive setup with an async cross-region replica lagging thirty seconds. What do you lose?",
          options: [
            "Nothing — promotion is seamless",
            "The whole database",
            "Only read traffic for the failover window",
            "The last roughly thirty seconds of writes; that lag is your RPO",
          ],
          answerIndex: 1,
          explanation:
            "The un-replicated tail existed only in region 1 and dies with it. Cross-region lag is your RPO statement — monitor it, alert on it, and let it justify (or veto) the architecture.",
        },
      ],
    },
    {
      number: 8,
      title: "RPO and RTO",
      summary:
        "Recovery Point Objective: how much data can you lose? Recovery Time Objective: how long until you are back? These two numbers drive every DR decision.",
      keyIdea:
        "RPO drives backup frequency. RTO drives restore automation. Both must be measured, not estimated.",
      deepDive: [
        {
          heading: "Two numbers, written down",
          paragraphs: [
            "RPO, the recovery point objective, is how much data you may lose, measured backward in time: an RPO of five minutes means the disaster may erase the last five minutes of writes and no more. RTO, the recovery time objective, is how long you may be down. They are business tolerances first and engineering budgets second: the business states what it can survive, engineering prices what it costs, and the two numbers are written into a one-page document per service. Without them, every DR debate is taste.",
            "The numbers drive everything mechanical. RPO decides backup frequency, WAL archiving, and replication mode — synchronous for near-zero, asynchronous accepting a lag-sized tail. RTO decides standby tiers and restore automation — nightly tape is fine for an RTO of a day, useless for an RTO of fifteen minutes. Tier the services: the ledger gets seconds-of-RPO treatment, the marketing site gets nightly-backup treatment, and each tier's spend matches its damage. Uniform objectives overspend on some systems and underprotect others.",
          ],
        },
        {
          heading: "Measure, do not estimate",
          paragraphs: [
            "Estimated RPO and RTO are fiction until a drill measures them. The real RPO at any moment is your replication lag plus your archive interval — measurable, on a dashboard. The real RTO is the wall-clock time from declare to verified recovery, measured in the drill with the stopwatch running: Chapter 14 exists because the gap between claimed and measured is where incidents live. A team that promises thirty minutes and restores in six hours does not have a thirty-minute RTO; it has a five-and-a-half-hour surprise.",
            "The silent killers are operational, not technical: the on-call without console access, the restore account whose credentials rotated, the runbook describing last year's topology, the restore that needs a human who is on vacation. Drills surface them because drills exercise people and permissions, not just software. Track measured RTO per drill as a trend — regressions in the trend are findings — and build headroom into every objective: a thirty-minute RTO implemented as twenty minutes, because the disaster will not start on schedule either.",
          ],
        },
        {
          heading: "The price of nines",
          paragraphs: [
            "Each improvement in the objectives costs roughly an order of magnitude. Nightly backups: cheap, RPO up to a day, RTO half a day of manual work. Hourly artifacts plus PITR: moderate, minutes of RPO, hours of RTO. A warm standby with automated failover: expensive, seconds of RPO, minutes of RTO. Active-active multi-region: the most expensive, near-zero and near-zero, with conflict resolution as a permanent engineering tax. Spend follows damage: the ledger earns the top tier, the blog does not.",
            "Revisit the objectives after every real incident and at least once a year, because the business changes underneath them: the side project that grew into revenue has outgrown its nightly-backup tier, and nobody noticed. The DR document names, per service, the two numbers, the mechanism delivering them, and the owner accountable for the drill proving it. If a service cannot state all three, it does not have disaster recovery — it has a backup schedule and optimism.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Where objectives land",
        caption:
          "RPO buys frequency and sync; RTO buys standby and automation — each tier costs an order of magnitude more.",
        axes: {
          x: "RTO: how fast you are back",
          y: "RPO: how much data loss",
        },
        quadrants: [
          {
            label: "Archived WAL + PITR",
            note: "seconds of loss, hours to return",
          },
          {
            label: "Sync replica + auto failover",
            note: "near-zero loss, minutes back",
          },
          {
            label: "Nightly backup + manual",
            note: "a day of loss, half a day back",
          },
          {
            label: "Async standby, promoted",
            note: "minutes of loss, fast return",
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Objectives live next to code, and drill results are asserted against them.",
        code: [
          "// Objectives per service tier — measured in drills, never estimated in docs.",
          "const drTiers = {",
          "  ledger: { rpoSeconds: 0, rtoMinutes: 15, mechanism: 'sync replica + auto failover' },",
          "  orders: { rpoSeconds: 60, rtoMinutes: 60, mechanism: 'async replica + PITR' },",
          "  blog: { rpoSeconds: 86400, rtoMinutes: 480, mechanism: 'nightly backup + manual restore' },",
          "} as const;",
          "",
          "function assertWithinObjective(measuredRtoMinutes: number, tier: keyof typeof drTiers) {",
          "  const objective = drTiers[tier];",
          "  if (measuredRtoMinutes > objective.rtoMinutes) {",
          "    throw new Error('drill exceeded RTO: ' + measuredRtoMinutes + ' min > ' + objective.rtoMinutes + ' min for ' + tier);",
          "  }",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "RPO and RTO assumed from a template and never written down.",
          fix: "One page per service: the numbers, the mechanism, the owner. No written number, no disaster recovery.",
        },
        {
          mistake: "Claiming RTO 30 minutes when the only timed restore took 6 hours.",
          fix: "Measure in drills and treat the gap between claim and reality as the real risk register.",
        },
        {
          mistake: "One uniform objective for every service.",
          fix: "Tier by damage: ledger, checkout, content and analytics have different budgets. Spend follows damage.",
        },
        {
          mistake: "Defining RPO as just the backup interval.",
          fix: "Replication mode and lag decide it too; an async replica's tail is potential loss. Count everything.",
        },
      ],
      fieldChecklist: [
        "Every service I own has a written RPO and RTO with a named owner.",
        "Drill measurements are compared against the objectives, and regressions page.",
        "The mechanism delivering each objective — backup cadence, replication mode — is named.",
        "Objectives are revisited after incidents and at least yearly.",
        "I know which tier each of my services is and why it earns that spend.",
        "RPO includes replication lag, not just backup interval.",
      ],
      keyTerms: [
        {
          term: "RPO",
          definition:
            "Recovery Point Objective: the maximum acceptable data loss, measured backward in time — the number backup frequency and replication mode must deliver.",
        },
        {
          term: "RTO",
          definition:
            "Recovery Time Objective: the maximum acceptable downtime from disaster to verified recovery — the number restore automation and standby tiers must deliver.",
        },
        {
          term: "Service tier",
          definition:
            "The DR class a service belongs to, set by damage, not by enthusiasm; each tier carries its own objectives and mechanism.",
        },
        {
          term: "Recovery objective",
          definition:
            "The written pair of RPO and RTO for one service, with the mechanism delivering them and the owner accountable for proving it.",
        },
      ],
      interviewQuestions: [
        {
          q: "What are RPO and RTO, and who decides them?",
          a: "RPO is the maximum acceptable data loss measured backward in time; RTO is the maximum acceptable downtime. The business states what it can survive; engineering prices what survival costs; both numbers land in a one-page document per service with the mechanism that delivers them and a named owner. Then the drills measure reality against the numbers, because the gap between claimed and measured is where incidents live. Without the document, every DR debate is taste.",
        },
        {
          q: "How do you make an RTO real instead of aspirational?",
          a: "Measure it. The timed drill from declare to verified recovery is the only number that counts, and it is always longer than the slide claimed — the silent killers are operational: missing console access, rotated restore credentials, a runbook describing last year's topology. I track measured RTO as a trend across drills, build headroom into the objective, and treat regressions in the trend as findings with owners.",
        },
        {
          q: "A stakeholder demands zero data loss and instant recovery for everything. Your response?",
          a: "I show the cost ladder: nightly backups are cheap with a day of RPO; PITR buys minutes of loss for moderate spend; warm standbys with automated failover buy seconds and minutes; active-active multi-region buys near-zero on both axes plus a permanent conflict-resolution tax. Then I ask which services genuinely earn the top tier. Usually the ledger does, the marketing site does not, and the conversation moves from theology to budget.",
        },
      ],
      quiz: [
        {
          question: "What is RPO?",
          options: [
            "How long until you are back online",
            "The cost of the recovery infrastructure",
            "The maximum acceptable data loss, measured backward in time",
            "The retention window of your backups",
          ],
          answerIndex: 2,
          explanation:
            "RPO answers 'how much data may vanish?' — five minutes of RPO permits losing the last five minutes of writes. It is decided by backup frequency, archiving and replication mode together.",
        },
        {
          question:
            "A team claims a thirty-minute RTO. What is the only honest way to validate it?",
          options: [
            "A timed drill from declare to verified recovery",
            "Reading the managed provider's documentation",
            "Doubling the backup frequency",
            "Estimating from dump file sizes",
          ],
          answerIndex: 0,
          explanation:
            "RTO is a wall-clock measurement of people, permissions and automation under pressure. Documentation and arithmetic produce estimates; only the drill produces the number the disaster will match.",
        },
        {
          question:
            "At failure, the async replica lagged forty-five seconds but the service's stated RPO is zero. What happened?",
          options: [
            "The objective was met because backups ran hourly",
            "The objective was violated — async replication accepts a lag-sized tail; zero RPO needs synchronous replication",
            "The RPO applies only to snapshots",
            "Nothing — lag resets after failover",
          ],
          answerIndex: 1,
          explanation:
            "Async replication means the un-replicated tail dies with the primary, so the effective RPO equals the lag at failure. Near-zero RPO is bought with synchronous replication and its latency.",
        },
      ],
    },
    {
      number: 9,
      title: "Retention Policy",
      summary:
        "Backups without a retention policy become a storage bill and a legal problem. Define daily, weekly, monthly, yearly tiers and their lifetimes.",
      keyIdea:
        "7 daily / 4 weekly / 12 monthly is a sane default. Compliance regimes (GDPR, HIPAA) may require longer.",
      deepDive: [
        {
          heading: "Grandfather-father-son",
          paragraphs: [
            "Retention is the policy that decides how far back you can recover and when the storage bill stops growing. The classic shape is grandfather-father-son: seven daily son copies, four weekly fathers, twelve monthly grandfathers — the 7/4/12 default that covers a month of fine-grained history plus a year of monthly anchors. Object storage enforces it with lifecycle rules: S3 and GCS both expire objects by age or by tier transition without a human in the loop. The policy document names the tiers; the lifecycle rule is what makes it true.",
            "Unbounded retention is not generosity; it is a bill and a liability that compound quietly. Every retained artifact costs storage forever, and every retained artifact containing personal data extends your exposure under data-protection law. The expensive surprise is the inverse too: lifecycle rules that silently never fire — a versioning misconfiguration, a rule scoped to the wrong prefix — leave growth unbounded while the console claims a policy exists. Alert on storage growth the policy cannot explain; unexplained growth is a broken rule, not a busy week.",
          ],
        },
        {
          heading: "Compliance pulls one way, erasure pulls the other",
          paragraphs: [
            "Regulated data carries minimums: health and financial regimes mandate retention measured in years — HIPAA and SOX-class requirements — and securities law explicitly blesses WORM storage for records regulators may audit. Personal data carries maximums: GDPR's right to erasure does not pause because the row lives in last year's monthly backup. The two forces meet in design, not in hope: segregate regulated classes into long-retention, access-controlled tiers; keep personal-data-bearing backups on bounded retention with documented expiry; record the residual risk where the two collide.",
            "Legal holds are the third force: when litigation lands, relevant backups freeze regardless of tier, and the policy needs a hold procedure that overrides expiration deliberately — an explicit hold flag, audited, with an owner and a release condition. None of this is improvisable during an incident or a subpoena. The retention document maps data classes to tiers, lifetimes, hold procedures and the compliance source for each; it is a compliance artifact as much as an operations one.",
          ],
        },
        {
          heading: "Old tiers rot quietly",
          paragraphs: [
            "The deepest tier is the least-restored and the most-likely to betray you. A yearly archive can fail to restore for reasons nothing else reveals: the format needs a tool version nobody has installed since, the encryption key was wrapped in a KMS policy that rotated, the dump predates three schema major versions. Restore from the oldest tier at least once a year — a drill item, timed and verified like any other. Old artifacts are insurance policies that lapse silently; the annual restore is the premium check.",
            "Retention also defines the honest answer to Chapter 3's question: how far back can you recover? The oldest unexpired base backup plus unbroken WAL from there is the real floor — the policy that says 'we keep yearly archives' is only true if a yearly archive actually exists, restores, and was not expired early by a cost-cutting lifecycle change nobody reviewed. Retention policy, archive health monitoring, and the drill share one job: keeping the advertised floor and the actual floor identical.",
          ],
        },
      ],
      diagram: {
        kind: "pyramid",
        title: "The retention pyramid",
        caption:
          "Few old artifacts, many fresh ones; every tier has a lifetime and an expiry that actually fires.",
        tiers: [
          { label: "Yearly", note: "1-2 kept, compliance floor" },
          { label: "Monthly", note: "12 kept" },
          { label: "Weekly", note: "4 kept" },
          { label: "Daily", note: "7 kept, restore workhorse" },
        ],
      },
      pitfalls: [
        {
          mistake: "No retention policy; backups accumulate until the bill becomes the alert.",
          fix: "Define tiers and lifetimes, enforce with lifecycle rules, and alert on storage growth the policy cannot explain.",
        },
        {
          mistake: "Keeping everything forever to feel safe.",
          fix: "Forever retention compounds cost and legal exposure. Tier by value, expire deliberately, extend only on written requirements.",
        },
        {
          mistake: "Retention set by tool defaults, never reconciled with compliance.",
          fix: "Map erasure obligations (GDPR) and regulatory minimums (HIPAA-class) per data class before choosing lifetimes.",
        },
        {
          mistake: "Never restoring from the oldest tier.",
          fix: "Run a yearly restore from the deepest tier; old artifacts rot in ways only a restore reveals.",
        },
      ],
      fieldChecklist: [
        "I can state the retention tiers and lifetimes for each system I own.",
        "Expiration is enforced by lifecycle rules, not manual cleanup.",
        "Personal-data erasure obligations are reconciled with backup retention in writing.",
        "Storage growth matches policy; unexplained growth alerts.",
        "I have restored from the oldest retention tier at least once.",
        "The policy document names the legal-hold procedure.",
      ],
      keyTerms: [
        {
          term: "Retention policy",
          definition:
            "The written map of what is kept, in which tiers, for how long — the answer to both recovery range and storage cost.",
        },
        {
          term: "Grandfather-father-son",
          definition:
            "The classic GFS rotation: 7 daily, 4 weekly, 12 monthly copies, each tier expiring on its own schedule.",
        },
        {
          term: "Lifecycle rule",
          definition:
            "An object-storage rule that expires or transitions objects by age automatically — the mechanism that makes retention true instead of aspirational.",
        },
        {
          term: "Legal hold",
          definition:
            "A deliberate, audited freeze on expiration for specific artifacts during litigation, overriding the normal retention lifetime.",
        },
      ],
      interviewQuestions: [
        {
          q: "Design a sane backup retention policy.",
          a: "Grandfather-father-son as the default: seven dailies, four weeklies, twelve monthlies, with yearly anchors only where compliance demands them. Enforce it with lifecycle rules in object storage, not manual cleanup, and alert on storage growth the policy cannot explain. Map data classes to tiers: personal data on bounded retention reconciled with erasure obligations, regulated classes on long WORM tiers with legal-hold procedures. And restore from the oldest tier once a year — the deepest tier rots first.",
        },
        {
          q: "GDPR erasure versus backups you may not delete — how do you reconcile them?",
          a: "In design, not in hope. Personal-data-bearing backups get bounded retention with documented expiry, so erasure eventually propagates without manual surgery; where immediate erasure is required, the runbook rebuilds affected artifacts. Regulated classes with minimum retention go into segregated, access-controlled WORM tiers. The residual gap — rows that persist inside backups that expire within ninety days — is documented as accepted risk with a compliance owner, not discovered by a regulator.",
        },
        {
          q: "The storage bill doubled in a month. Where do you look first?",
          a: "The lifecycle rules. The usual culprit is expiry that never fires: a rule scoped to the wrong prefix, a versioning misconfiguration where noncurrent versions are never cleaned, or full copies written per run instead of incrementals. I audit the actual bucket contents against the policy, fix the rule, and add an alert on growth that the policy cannot explain — unexplained growth is a broken rule, not a busy week.",
        },
      ],
      quiz: [
        {
          question: "What does the 7/4/12 grandfather-father-son default mean?",
          options: [
            "Seven weekly, four yearly, twelve hourly copies",
            "Seven daily, four weekly, twelve monthly copies retained",
            "Seven regions, four accounts, twelve buckets",
            "A seven-year legal hold",
          ],
          answerIndex: 1,
          explanation:
            "GFS keeps seven daily sons, four weekly fathers and twelve monthly grandfathers — fine-grained recovery for a month, monthly anchors for a year, all expiring on schedule.",
        },
        {
          question: "Why is keeping every backup forever a bad policy?",
          options: [
            "Object storage charges by request, not size",
            "Old backups restore faster",
            "Lifecycle rules require it",
            "It grows cost indefinitely and extends legal exposure for retained personal data",
          ],
          answerIndex: 3,
          explanation:
            "Every artifact is permanent storage spend, and artifacts containing personal data extend exposure under data-protection law forever. Retention is value-based: keep what a scenario needs, expire deliberately.",
        },
        {
          question:
            "A lifecycle rule exists but storage keeps growing. Likely cause?",
          options: [
            "Users are deleting too little",
            "The rule is scoped to the wrong prefix or a versioning misconfiguration prevents expiry — audit the rule and alert on unexplained growth",
            "Retention should be shortened to fix it",
            "The bill is always proportional to traffic",
          ],
          answerIndex: 1,
          explanation:
            "The most common retention failure is a rule that never fires: wrong prefix, noncurrent versions never cleaned, full copies per run. The console showing a policy proves nothing about the bucket.",
        },
      ],
    },
    {
      number: 10,
      title: "Immutable WORM Backups",
      summary:
        "Write-Once-Read-Many backups cannot be deleted — not by ransomware, not by a compromised admin, not by mistake. The escape route is preserved.",
      keyIdea:
        "Object lock on S3, immutable snapshots on EBS. Ransomware cannot delete what the API refuses to delete.",
      deepDive: [
        {
          heading: "Ransomware deletes the backups first",
          paragraphs: [
            "Modern ransomware does not sprint; it dwells. Operators spend weeks inside a network mapping credentials, locating backup repositories, and quietly deleting or encrypting every copy they can reach — then detonate, leaving the victim with no escape route. The same powers exist by accident: an admin script with a wildcard, a cost-cleanup job with the wrong prefix. If a compromised production credential can delete your backups, the backups are not a recovery path; they are part of the blast radius.",
            "The defense is making deletion physically impossible through the APIs an attacker can reach. S3 Object Lock in compliance mode refuses deletes for the retention window — root included; GCS bucket retention and Azure immutable storage implement the same WORM contract; EBS offers immutable snapshots. Put the immutable tier in a separate account whose break-glass role is the only delete path, hold its keys apart from production identities, and Chapter 2's separation of powers becomes a hard wall instead of a hygiene habit.",
          ],
        },
        {
          heading: "Configure it deliberately",
          paragraphs: [
            "Object lock has two modes, and the choice is the whole design. Governance mode can be bypassed by a privileged role — which is exactly the credential class ransomware steals, so governance mode is a convenience setting wearing a security costume. Compliance mode cannot be bypassed early by anyone, which means mistakes are locked in too: a corrupted backup locked for ninety days wastes space but never history, which is the correct trade. Versioning must be enabled before object lock; the order matters and the console will not always warn you.",
            "Size the lock window against attacker dwell time, not convenience: weeks of quiet persistence is the norm, so days of lock is decoration — months for the tier that matters, paired with an unlocked working tier for routine rotation. Regulated workloads get a second benefit: WORM storage satisfies record-retention regimes that auditors ask about by name. Then verify the wall in every drill: attempt the delete, expect the refusal, and alert loudly if a delete of a locked object ever succeeds — that alarm is a security incident, not a storage event.",
          ],
        },
        {
          heading: "What immutability costs",
          paragraphs: [
            "Immutability trades flexibility for survival, and the invoice has three lines. Cost: locked objects cannot be expired early, so over-provisioned retention is permanent spend — size the locked tier narrowly and let the working tier do daily rotation. Friction: legitimate cleanup, re-backup and retention changes all require the break-glass path, which should be deliberately annoying and fully audited. Finality: a mistake locked in compliance mode stays until expiry, which is why the working tier — unlocked, still access-controlled — remains the place for routine artifacts.",
            "The immutability story composes with everything earlier in this book: Chapter 2's split identities decide who can even reach the locked tier, Chapter 9's retention decides how long the lock runs, and Chapter 14's drill proves the refusal still happens after IAM changes and console redesigns. Immutable backups do not make the other chapters optional — they make the escape route survivable when every other control has already failed, which is the only scenario that justifies their cost.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "A delete request arrives",
        caption:
          "Immutability is judged by what the API refuses, not what the runbook hopes.",
        start: "A delete request arrives",
        branches: [
          {
            label: "Object lock: compliance",
            outcome: "API refuses; backup survives",
            good: true,
          },
          {
            label: "Separate account",
            outcome: "No route from prod creds",
            good: true,
          },
          {
            label: "Legal hold active",
            outcome: "Refused until released",
            good: true,
          },
          {
            label: "Same-account admin creds",
            outcome: "Everything goes; total loss",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The drill includes a delete attempt: refusal is the pass condition.",
        code: [
          "# Versioning first, then compliance-mode object lock — the order matters",
          "aws s3api put-bucket-versioning \\",
          "  --bucket dr-backups-prod \\",
          "  --versioning-configuration Status=Enabled",
          "aws s3api put-object-lock-configuration \\",
          "  --bucket dr-backups-prod \\",
          "  --object-lock-configuration 'ObjectLockEnabled=Enabled,Rule={DefaultRetention={Mode=COMPLIANCE,Days=90}}'",
          "",
          "# Prove the wall: a delete attempt must be refused",
          "aws s3api delete-object --bucket dr-backups-prod --key app/nightly/latest.dump \\",
          "  || echo 'refused as designed'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Choosing governance mode so 'we can still clean up'.",
          fix: "Governance is bypassable by exactly the credentials ransomware steals. Use compliance mode for the tier that matters.",
        },
        {
          mistake: "Object lock window of seven days.",
          fix: "Attackers dwell for weeks before detonating. Lock months on the immutable tier; keep an unlocked working tier for rotation.",
        },
        {
          mistake: "Immutable bucket in the same account as production.",
          fix: "Separate account, break-glass role only: production identities must have no route to deletion at all.",
        },
        {
          mistake: "Immutability configured but never tested.",
          fix: "Attempt deletion in every drill; expect refusal. A successful delete of a locked object pages as a security incident.",
        },
      ],
      fieldChecklist: [
        "The immutable tier rejects deletes by API design, and I have seen the refusal.",
        "Object lock runs in compliance mode for the tier that matters.",
        "Backups live in a separate account; production roles cannot reach deletion.",
        "The lock window exceeds plausible attacker dwell time.",
        "Deletion attempts — successful or refused — are logged and alerted.",
        "A verified, unlocked copy still exists for routine restore work.",
      ],
      keyTerms: [
        {
          term: "WORM",
          definition:
            "Write-Once-Read-Many storage: objects can be created and read but not modified or deleted before their retention window ends.",
        },
        {
          term: "Object lock",
          definition:
            "S3's WORM mechanism: a retention period or legal hold that the storage API itself enforces against deletion, root included.",
        },
        {
          term: "Compliance mode",
          definition:
            "The strict object-lock mode: nobody can shorten the retention or delete early — the trade is permanence, including for mistakes.",
        },
        {
          term: "Break-glass access",
          definition:
            "A narrowly scoped, heavily audited emergency credential — the only deliberate path around a control that is otherwise absolute.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you protect backups from ransomware?",
          a: "Assume the attacker ends up with production admin credentials, then remove their reach. Compliance-mode object lock in a separate account, reachable only by a break-glass role; encryption keys held apart from production identities; least-privilege on every path per Chapter 2. The lock window is sized to attacker dwell time — months, not days. And every drill attempts a delete and expects the refusal: a successful delete of a locked object pages as a security incident.",
        },
        {
          q: "Governance versus compliance mode in S3 Object Lock?",
          a: "Governance mode can be bypassed by a role holding special permissions — precisely the credential class ransomware steals, which makes it a convenience setting wearing a security costume. Compliance mode cannot be bypassed early by anyone, root included: mistakes are locked in too, which is the correct trade when the threat model is a hostile administrator. I use compliance mode for the immutable tier and keep an unlocked, still access-controlled working tier for routine rotation.",
        },
        {
          q: "What does immutability cost, and how do you contain it?",
          a: "Three lines on the invoice. Locked objects cannot expire early, so the locked tier is sized narrowly — months of anchors, not every nightly — while an unlocked working tier handles daily rotation. Legitimate changes go through a deliberately annoying, fully audited break-glass path. And mistakes are permanent until expiry, which is acceptable because a locked bad artifact wastes space, never history. The cost buys survival of the one scenario that justifies it.",
        },
      ],
      quiz: [
        {
          question:
            "Which design survives an attacker holding production admin credentials?",
          options: [
            "Governance-mode object lock",
            "Nightly backups in the same account",
            "Longer retention windows",
            "Compliance-mode object lock in a separate account reachable only by break-glass",
          ],
          answerIndex: 3,
          explanation:
            "Governance mode is bypassable by privileged roles, same-account backups share the attacker's reach, and retention length is irrelevant to deletion. Separate account plus compliance mode removes the delete path entirely.",
        },
        {
          question: "Governance vs compliance mode — the difference?",
          options: [
            "Governance cannot be bypassed; compliance can",
            "Governance can be bypassed by a privileged role; compliance mode cannot, by anyone, before expiry",
            "Compliance mode is cheaper",
            "They differ only in region availability",
          ],
          answerIndex: 1,
          explanation:
            "The bypass permission is the whole story: governance trusts privileged credentials, compliance trusts nobody. When the threat model includes stolen admin credentials, only compliance mode holds.",
        },
        {
          question:
            "During a drill, a delete against a locked object succeeds. What does that mean?",
          options: [
            "Immutability is misconfigured or absent — treat it as a security incident and fix the lock before the next backup",
            "The drill passed — cleanup works",
            "The object was in the working tier, so nothing is wrong",
            "The lock expired as designed",
          ],
          answerIndex: 0,
          explanation:
            "A successful delete of a supposedly locked object means the wall does not exist where you believed it did. That is a security finding with immediate action, not a storage cleanup event.",
        },
      ],
    },
    {
      number: 11,
      title: "Logical-Corruption Recovery",
      summary:
        "A bad migration corrupts data — and replicas replicate the corruption. PITR is the recovery path: restore to the moment before the migration.",
      keyIdea: "Replicas are not backups against logical corruption. PITR is.",
      deepDive: [
        {
          heading: "Corruption replicates faithfully",
          paragraphs: [
            "Logical corruption is the quiet disaster: no crash, no alert, sometimes days between the bad migration and the first symptom. The migration that dropped a column's meaning, the UPDATE missing its WHERE clause, the bug that wrote wrong currencies — replicas replay all of it within seconds, snapshots taken afterward contain it, and downstream copies — caches, search indexes, warehouses — inherit it eagerly. Detection is a designed property: reconciliation checks, constraint canaries after every migration, customer reports as the expensive last resort.",
            "This is the scenario where every convenient recovery tool fails at once. The replica is not a backup — it holds the corruption. Last night's snapshot, taken after the migration, holds it too. Only artifacts that predate the event help: the named restore point created before the migration, the WAL archive that lets PITR rewind to any second before it, or a logical dump old enough to matter. Chapter 3's discipline — restore points before risky migrations — exists for exactly this page of the runbook.",
          ],
        },
        {
          heading: "The rewind runbook",
          paragraphs: [
            "The recovery sequence is a rehearsed pipeline. Freeze writes first — a kill switch that stops the corruption from spreading into more copies while you think. Mark the moment: the incident timeline pins the second the bad change landed. Rewind: restore the base backup plus WAL replay up to just before that second, onto scratch. Validate: reconciliation checks prove the rewound state is sane. Then choose — cut over entirely, or surgically extract the affected rows and reinsert them into the live system.",
            "The step teams forget is the last one: rebuilding every projection from pre-corruption truth. The cache that absorbed wrong prices, the search index that indexed corrupted documents, the warehouse that loaded the bad batch — each needs purging and rebuilding from the rewound source, and each has its own rebuild pipeline with its own lag. The runbook lists them by name, because during the incident 'rebuild everything downstream' is a sentence, not a plan. Un-rebuilt projections quietly reintroduce the corruption days later.",
          ],
        },
        {
          heading: "Prevention is cheaper than rewinds",
          paragraphs: [
            "Every hour of rewind planning is bought back in prevention. Migrations run with a pre-flight: dry-run against a production-shaped copy, a named restore point taken immediately before, and a rollback script that is tested, not written. Blast radius is bounded by flags: the risky path ships behind a kill switch that can turn it off in one action. Constraints and NOT NULL columns are declared in the schema so the database itself rejects the worst writes — the cheapest corruption detection runs at insert time.",
            "Accept that some corruption will still land, and rehearse the rewind anyway — it is a drill scenario in Chapter 14's rotation precisely because it is the most cognitively loaded recovery: the team must diagnose, decide, rewind and rebuild while writes are frozen. Teams that have done it once move through the sequence in an hour; teams reading the runbook for the first time lose the day. The drill converts the worst kind of incident into a procedure with known duration.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Corruption recovery run",
        caption:
          "Rewinding truth is step three; purging every downstream copy is the one teams forget.",
        stages: [
          { label: "Freeze writes", note: "kill switch, stop spread" },
          { label: "Mark the moment", note: "restore point or timestamp" },
          { label: "Rewind", note: "PITR to before the bug" },
          { label: "Validate", note: "constraints + reconciliation" },
          { label: "Rebuild copies", note: "caches, indexes, warehouse" },
        ],
      },
      codeExample: {
        language: "python",
        caption:
          "Semantic checks catch what checksums cannot: data that is intact but wrong.",
        code: [
          "# Reconciliation checks run after every restore drill and corruption rewind",
          "import psycopg",
          "",
          "CHECKS = [",
          "    ('orders must match their line items', (",
          "        'SELECT count(*) FROM orders o '",
          "        'WHERE o.total_cents <> ('",
          "        '  SELECT sum(qty * unit_price_cents) FROM order_items i'",
          "        '  WHERE i.order_id = o.id)')),",
          "    ('no orphan rows', (",
          "        'SELECT count(*) FROM order_items i '",
          "        'WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.id = i.order_id)')),",
          "]",
          "",
          "with psycopg.connect('host=scratch.internal dbname=app') as conn:",
          "    for name, sql in CHECKS:",
          "        bad = conn.execute(sql).fetchone()[0]",
          "        assert bad == 0, 'check failed: ' + name",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Restoring from the latest snapshot after corruption is noticed.",
          fix: "If the snapshot postdates the bug, it contains the bug. Rewind with PITR to before the event.",
        },
        {
          mistake: "Fixing the database but not the downstream copies.",
          fix: "Caches, search indexes and warehouses must be rebuilt from pre-corruption truth; the runbook lists them by name.",
        },
        {
          mistake: "Running migrations with no restore point and no dump.",
          fix: "Named restore point plus a tested rollback before every risky migration; the rewind needs a moment to rewind to.",
        },
        {
          mistake: "Corruption discovered by a customer.",
          fix: "Reconciliation checks and constraint canaries after migrations and restores; quiet detection beats loud apologies.",
        },
      ],
      fieldChecklist: [
        "Every migration runs with a named restore point or verified dump taken first.",
        "Migrations dry-run against a production-shaped copy before prod.",
        "Reconciliation checks run after restores and after risky migrations.",
        "I can name every downstream projection that would need rebuilding after a rewind.",
        "A kill switch can freeze writes within minutes when corruption is suspected.",
        "The corruption runbook has been rehearsed, not just written.",
      ],
      keyTerms: [
        {
          term: "Logical corruption",
          definition:
            "Data that is structurally intact but wrong — bad migrations, missing WHERE clauses, buggy writes — replicated faithfully by every copy downstream.",
        },
        {
          term: "Reconciliation check",
          definition:
            "A scheduled or post-restore assertion that invariants hold — totals match line items, no orphans — the designed detector for quiet corruption.",
        },
        {
          term: "Kill switch",
          definition:
            "A one-action control that freezes writes or disables a feature, used to stop corruption from spreading while recovery is planned.",
        },
        {
          term: "Projection",
          definition:
            "Any downstream copy built from the source of truth — caches, search indexes, warehouses — each of which needs an explicit rebuild after a rewind.",
        },
      ],
      interviewQuestions: [
        {
          q: "A migration corrupted production data and replicated everywhere. Recover it.",
          a: "Freeze writes first so the corruption stops spreading. Pin the second the migration landed from the incident timeline. Rewind: base backup plus WAL replay to just before that second, onto scratch. Validate with reconciliation checks, then choose — cut over entirely, or surgically extract the affected rows and reinsert. Last, and most forgotten: rebuild every downstream projection — caches, search indexes, warehouse — from pre-corruption truth, or it quietly returns days later.",
        },
        {
          q: "How would you even know your data is corrupt?",
          a: "By design, not by customer email. Reconciliation jobs check invariants — totals against line items, orphans, counts against expectations — on a schedule and after every restore and risky migration. Constraint canaries in the schema reject the worst writes at insert time. Corruption is quiet by nature: no crash, no alert, days of delay possible. The cheapest detection runs continuously; the most expensive runs in a support ticket.",
        },
        {
          q: "Why are replicas useless against logical corruption?",
          a: "Because replication is fidelity, not judgment: the standby replays the bad migration as faithfully as the good writes, within seconds. Any snapshot taken after the event contains it too. The only artifacts that help predate the event — a named restore point taken before the migration, or the WAL archive PITR needs to rewind. This is exactly why Chapter 3's habit of restore points before risky migrations exists.",
        },
      ],
      quiz: [
        {
          question:
            "A bad migration corrupted data an hour ago. Which artifact can restore the pre-corruption state?",
          options: [
            "The current read replica",
            "The snapshot taken after the migration",
            "PITR to a second before the migration — base backup plus WAL replay",
            "The search index",
          ],
          answerIndex: 2,
          explanation:
            "Replicas and post-event snapshots all contain the corruption. Only artifacts that predate the event — base backup plus archived WAL to a moment before it — can rewind past the mistake.",
        },
        {
          question: "First action when corruption is suspected?",
          options: [
            "Run a full backup immediately",
            "Freeze writes to stop the corruption spreading into more copies",
            "Promote the replica",
            "Delete the affected rows",
          ],
          answerIndex: 1,
          explanation:
            "Stopping the spread preserves every copy you have not yet contaminated, including the ones you are about to rely on. A full backup would faithfully archive the corruption too.",
        },
        {
          question: "After rewinding the database, what step do teams most often forget?",
          options: [
            "Rotating the database credentials",
            "Running VACUUM",
            "Alerting customers",
            "Rebuilding every downstream projection — caches, indexes, warehouses — from pre-corruption truth",
          ],
          answerIndex: 3,
          explanation:
            "Projections absorbed the corruption too and will reintroduce it silently. The runbook must name each one with its rebuild path — 'rebuild everything downstream' is a sentence, not a plan.",
        },
      ],
    },
    {
      number: 12,
      title: "Runbooks",
      summary:
        "A runbook is the script for an incident: who does what, in what order, with which commands. Written while calm, used while panicked.",
      keyIdea: "Runbooks are rehearsed. An unrehearsed runbook is a wiki page.",
      deepDive: [
        {
          heading: "Written calm, executed panicked",
          paragraphs: [
            "A runbook is the script for the worst hour of your quarter, written by the calmest version of you for the most panicked one. That shapes everything about it: exact commands with expected output, not prose; decision points stated as questions with answers, not judgment calls; owners named per step, not 'the database team'. Structure it as trigger and symptoms, severity definition, first five minutes, mitigation, verification, escalation, and links — dashboards, credential locations, the last drill's timings.",
            "Panic does one thing reliably: it defaults to everyone typing. The runbook defeats that by assigning roles before the first command runs. One Incident Commander who coordinates and decides but touches no keyboard; one operator who executes runbook steps and nothing else; one scribe who records the timeline — timestamps, actions, evidence — as it happens. Mitigation precedes diagnosis: the first five minutes spend the kill switch, the rollback, the flag, because stopping the bleeding is cheaper than understanding it in real time.",
          ],
        },
        {
          heading: "The timeline is the deliverable",
          paragraphs: [
            "The scribe's log is not bureaucracy; it is the raw material of everything that follows. Alert fired at 14:02, declared SEV2 at 14:05, flag disabled at 14:11, error rate fell from eight percent to a fraction of one — each entry with evidence, not adjectives. From that timeline the postmortem reconstructs cause and cost honestly, the measured mitigation time updates the RTO math from Chapter 8, and the customer-communication claims stay anchored to facts. Incidents without timelines become legends; incidents with timelines become lessons.",
            "Communication runs on the same cadence as mitigation: an update to stakeholders every thirty minutes — what happened, what we are doing, when the next update comes — even when the answer is 'no change yet'. The runbook includes the update template, because writing under pressure produces either silence or fiction. Whoever owns comms is not also operating, for the same reason the IC is not typing: one brain per job, and the jobs do not share.",
          ],
        },
        {
          heading: "Rehearsed, or it is a wiki page",
          paragraphs: [
            "An unrehearsed runbook is a document; a rehearsed one is a capability. Game days execute it against staged chaos — kill the primary, corrupt the data, lock the credentials — with the rotation that will actually be on call, not just the expert who wrote it. Every real incident ends with runbook updates as assigned postmortem actions: what surprised us, which step was wrong, which command no longer exists. The update lands the same week, while memory is fresh and honesty is cheap.",
            "Runbooks also rot quietly between incidents: access rotates, versions change, the topology the steps describe was rebuilt last month. A quarterly validity pass — walk the commands, confirm the outputs, update what drifted — catches the rot before the incident does. And keep the runbook reachable when the infrastructure is not: a copy outside the SSO that just fell over, in the on-call bundle, readable from a phone. A runbook that requires the broken system is not a runbook.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "Incident command, first hour",
        caption:
          "The first hour is choreography: roles are assigned before the first command is typed.",
        steps: [
          { label: "Declare", note: "severity, IC named" },
          { label: "Mitigate", note: "kill switch, rollback first" },
          { label: "Command", note: "IC coordinates, never types" },
          { label: "Operate", note: "one operator, runbook steps" },
          { label: "Scribe", note: "timeline: actions, evidence" },
          { label: "Update", note: "comms every 30 minutes" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "A timeline with evidence turns chaos into a postmortem you can learn from.",
        code: [
          "// The scribe's log: timestamps, actions, evidence — no attribution, no blame.",
          "type TimelineEntry = {",
          "  at: string; // ISO timestamp, UTC",
          "  action: string;",
          "  evidence?: string;",
          "};",
          "",
          "const incident7742: TimelineEntry[] = [",
          "  { at: '2026-03-04T14:02:00Z', action: 'p99 alert fired on orders-api' },",
          "  { at: '2026-03-04T14:05:00Z', action: 'declared SEV2, IC: ana' },",
          "  { at: '2026-03-04T14:11:00Z', action: 'flag checkout_v3 disabled',",
          "    evidence: 'error rate fell from 8% to 0.2%' },",
          "  { at: '2026-03-04T14:30:00Z', action: 'customer update posted' },",
          "];",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Runbooks written as prose: 'the DBA will know what to do'.",
          fix: "Exact commands, expected output, decision points, owners per step. Executable, not descriptive.",
        },
        {
          mistake: "Runbook lives behind the SSO that just fell over.",
          fix: "Keep an offline copy in the on-call bundle; the runbook must be readable from a phone with production dark.",
        },
        {
          mistake: "Blameful postmortems; people start hiding mistakes.",
          fix: "Review the timeline, not the people. Blameless reviews keep the next incident honest from the first minute.",
        },
        {
          mistake: "Runbooks updated only when someone remembers.",
          fix: "Every postmortem assigns runbook updates with owners and dates; add a quarterly validity pass for drift.",
        },
      ],
      fieldChecklist: [
        "Every recurring incident class I own has a runbook with exact commands.",
        "The runbook names roles: IC, operator, scribe, comms.",
        "I have executed this runbook in a game day within the last quarter.",
        "Kill switches and one-action mitigations appear in the first five minutes.",
        "A copy of the runbook is reachable without corporate SSO.",
        "The last incident produced runbook updates with owners and dates.",
      ],
      keyTerms: [
        {
          term: "Runbook",
          definition:
            "The executable script for an incident — commands, expected outputs, decision points and owners — written calm and used panicked.",
        },
        {
          term: "Incident Commander",
          definition:
            "The single coordinator who decides, delegates and communicates during an incident — and deliberately does not type.",
        },
        {
          term: "Scribe",
          definition:
            "The role that records the incident timeline as it happens: timestamps, actions, evidence — the postmortem's raw material.",
        },
        {
          term: "Game day",
          definition:
            "A scheduled rehearsal that executes a runbook against staged chaos with the rotation that will actually be on call.",
        },
      ],
      interviewQuestions: [
        {
          q: "What makes a runbook good?",
          a: "Executable, not descriptive: exact commands with expected output, decision points phrased as questions with answers, owners per step, and the first five minutes spent on mitigation — kill switch, rollback, flag — before diagnosis. It names roles so panic does not default to everyone typing: one Incident Commander, one operator, one scribe recording the timeline. And it is rehearsed: a runbook that has not survived a game day is a wiki page with ambitions.",
        },
        {
          q: "Walk me through your role in an incident.",
          a: "If I am commanding, I coordinate, decide and update stakeholders — I do not type. One operator executes the runbook; a scribe records timestamps, actions and evidence as they happen; comms go out every thirty minutes on a template, even when the answer is no change. Mitigation precedes diagnosis: stop the bleeding with the cheapest reversible action first. The timeline becomes the postmortem's raw material and updates the RTO math.",
        },
        {
          q: "How do you keep runbooks from rotting?",
          a: "Three mechanisms. Every real incident ends with runbook updates as assigned postmortem actions, landed the same week. A quarterly validity pass walks the commands, confirms outputs and updates what access rotation and version drift broke. And game days execute the runbook with the rotation that will actually be on call, not just the author. Plus one structural rule: the runbook is reachable without the SSO that just fell over.",
        },
      ],
      quiz: [
        {
          question:
            "In the first minutes of an incident, what comes before root-cause diagnosis?",
          options: [
            "Writing the postmortem",
            "Mitigation — kill switch, rollback, flag — to stop the bleeding",
            "A customer-facing apology",
            "Upgrading the affected service",
          ],
          answerIndex: 1,
          explanation:
            "Stopping the damage is cheaper and faster than understanding it in real time, and diagnosis changes nothing while the bleeding continues. Root cause is for the timeline, not the first five minutes.",
        },
        {
          question: "Who types commands during a well-run incident?",
          options: [
            "Everyone available, in parallel",
            "One designated operator; the Incident Commander coordinates and decides",
            "The Incident Commander, to keep control",
            "Whichever on-call is fastest",
          ],
          answerIndex: 0,
          explanation:
            "Panic defaults to everyone typing, which multiplies errors and hides state. One operator executes; the IC keeps the decisions and comms; parallel typing is how incidents get worse.",
        },
        {
          question: "What keeps a runbook from becoming a wiki page?",
          options: [
            "Adding more prose each quarter",
            "Locking it so only admins edit",
            "Rehearsed game days, postmortem-driven updates, and a quarterly validity pass",
            "Storing it in three wikis simultaneously",
          ],
          answerIndex: 2,
          explanation:
            "A runbook is capability only when executed. Game days prove the steps, incidents feed corrections back with owners, and the validity pass catches the drift access rotation quietly creates.",
        },
      ],
    },
    {
      number: 13,
      title: "Split-Brain Prevention",
      summary:
        "When the network partitions, two nodes may both think they are primary. Split-brain diverges data irrecoverably. Fencing prevents it.",
      keyIdea:
        "Fencing tokens, quorum-based promotion, STONITH (Shoot The Other Node In The Head). Better one node down than two primaries.",
      deepDive: [
        {
          heading: "Two primaries are worse than none",
          paragraphs: [
            "A network partition does not announce itself; each node's view of the world simply goes stale. The standby stops hearing the primary, concludes it is dead, and promotes — while the primary, alive and unaware, keeps accepting writes. Now two primaries diverge: conflicting updates to the same rows, identities issued twice, invariants broken on both sides independently. Merging diverged histories is rarely possible; one side is usually discarded, which means the partition converted a failover into a data-loss event.",
            "The trap is that detection is local and truth is global. Every node makes the promotion decision from what it can see, and during a partition what it can see is wrong. A partition looks identical to a crash from inside the minority — that is the fundamental ambiguity, and no amount of pinging the peer resolves it, because the peer is exactly what is unreachable. The cure is not better detection; it is making unilateral promotion impossible, which is what the rest of this chapter builds.",
          ],
        },
        {
          heading: "Fencing makes lying impossible",
          paragraphs: [
            "Fencing tokens are the elegant version: a monotonically increasing number issued to whoever currently holds the lease, checked by the storage layer itself. A deposed leader wakes from a pause — a garbage-collection stop, a network blip — and tries to keep writing with token 34; the storage rejects anything below the current 35. The zombie leader can believe whatever it likes; the resource simply stops believing it. The check runs where the writes land, not where the belief lives, which is what makes it robust.",
            "Quorum is the structural version: promotion requires a majority of voting members to agree, which two disjoint majorities cannot simultaneously obtain — the mathematics that makes Raft and Paxos safe. Clusters therefore run odd voting membership, or even membership plus a witness node in a third fault domain to break ties. STONITH is the physical version: fence the old node — power it off, revoke its access — before the new one starts. Managed failover services bundle all three; reading their documentation is how you learn what you bought.",
          ],
        },
        {
          heading: "Down is better than diverged",
          paragraphs: [
            "The design rule is asymmetric on purpose: an outage costs minutes, diverged histories cost days and data. So when the network is ambiguous — primary unreachable, quorum unclear, fencing unconfirmed — the correct choice is to stay down, keep writes frozen, and resolve the ambiguity with a human. Systems that prefer availability over consistency in this moment are gambling that partitions resolve cleanly; gambling is not a recovery strategy. Better one node down than two primaries up is this chapter stated as policy.",
            "And if split-brain happens anyway — a misconfigured orchestrator, a skipped fence, a homegrown promotion script — treat it as a corruption event, because that is what it is. Pick the authoritative history deliberately: the side holding the valid fencing token, or the side whose writes the business confirms. Rewind the other side from it using Chapter 11's machinery, and postmortem the fencing gap that allowed it. The postmortem's job is ensuring the same partition produces one primary next time.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Defense in depth vs split-brain",
        caption:
          "Every layer must fail simultaneously for two primaries to exist — that is the design goal.",
        layers: [
          { label: "Single-writer rule", note: "one primary by design" },
          { label: "Lease + fencing token", note: "stale writes rejected" },
          { label: "Quorum promotion", note: "majority must agree" },
          { label: "Witness node", note: "breaks ties in a partition" },
          { label: "STONITH", note: "power-off the old primary" },
        ],
      },
      pitfalls: [
        {
          mistake: "Two-node clusters 'for symmetry'.",
          fix: "Quorums need odd membership or a witness; two nodes each hold a majority of one — the recipe for split-brain.",
        },
        {
          mistake: "Promotion decided by a single node's local view.",
          fix: "Promotion requires quorum or an orchestrator with a consensus store; no node acts alone on its own perception.",
        },
        {
          mistake: "Skipping the fence because 'the old one is surely dead'.",
          fix: "Fence first — revoke writes, power-fence if needed. 'Surely dead' is how two primaries are born.",
        },
        {
          mistake: "Hand-merging diverged data after a split-brain.",
          fix: "Treat it as corruption: choose the authoritative history, rewind the other from it, postmortem the fencing gap.",
        },
      ],
      fieldChecklist: [
        "Voting membership is odd, or a witness breaks ties.",
        "Promotion requires quorum, never a single node's local view.",
        "Writes carry a lease or fencing token that storage can reject.",
        "STONITH or equivalent fencing is wired into the failover path.",
        "I can state, for my database, what happens during a network partition.",
        "A split-brain response exists and treats divergence as corruption.",
      ],
      keyTerms: [
        {
          term: "Split-brain",
          definition:
            "The state where two nodes both act as primary after a partition, diverging data in ways that usually end in discarding one side.",
        },
        {
          term: "Fencing token",
          definition:
            "A monotonically increasing lease number checked by storage, letting it reject writes from a deposed leader still holding stale belief.",
        },
        {
          term: "Quorum",
          definition:
            "The majority of voting members required to make cluster decisions, guaranteeing two disjoint majorities cannot both promote.",
        },
        {
          term: "STONITH",
          definition:
            "Shoot The Other Node In The Head: physically or logically powering off the deposed node so fencing is enforced, not requested.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain split-brain and how you prevent it.",
          a: "During a partition, a standby loses sight of the primary, concludes it is dead, and promotes — while the primary, alive, keeps writing. Two primaries diverge, and diverged histories are usually unrecoverable. Prevention is layered: quorum-based promotion so no single node acts on its local view, fencing tokens that let storage reject a deposed leader's stale writes, and STONITH as physical enforcement. Odd voting membership or a witness breaks ties. The bias: better one node down than two primaries up.",
        },
        {
          q: "What is a fencing token?",
          a: "A monotonically increasing number issued to whoever holds the lease, checked by the resource that receives the writes. A deposed leader wakes from a garbage-collection pause and keeps writing with token 34; storage rejects anything below the current 35. The zombie can believe it is still primary; the resource stops believing it. The check runs where writes land, not where belief lives — that is what makes it robust against partitions and pauses alike.",
        },
        {
          q: "A partition splits your primary from its standby. What happens in your system?",
          a: "The orchestrator — Patroni with a consensus store, or the managed equivalent — holds election: whichever side retains quorum promotes, and fencing guarantees the deposed side cannot write. If quorum is lost entirely, the cluster stays down and pages a human, because availability is not worth diverged data. A manual promotion without fencing is forbidden by the runbook, not just discouraged. If split-brain ever happens anyway, it is treated as a corruption event and rewound.",
        },
      ],
      quiz: [
        {
          question:
            "What is the worst outcome of a network partition between primary and standby?",
          options: [
            "A slower failover",
            "A brief write outage",
            "The standby falling behind",
            "Two primaries accepting writes and diverging irrecoverably",
          ],
          answerIndex: 3,
          explanation:
            "Diverged histories rarely merge; one side is discarded, converting a failover into a data-loss event. Every mechanism in this chapter exists to make that state unreachable.",
        },
        {
          question: "Why do clusters use odd voting membership or a witness node?",
          options: [
            "To reduce licensing costs",
            "To increase write throughput",
            "So a majority (quorum) is unambiguous and two disjoint majorities cannot both promote",
            "To simplify backups",
          ],
          answerIndex: 2,
          explanation:
            "Even membership can split into two equal halves, each believing it has authority. An odd count — or a witness in a third fault domain — guarantees only one side can hold a majority.",
        },
        {
          question: "What does a fencing token do?",
          options: [
            "Encrypts the WAL archive",
            "Lets storage reject writes from a deposed leader holding a stale lease",
            "Balances reads across replicas",
            "Speeds up promotion",
          ],
          answerIndex: 1,
          explanation:
            "The token is checked where writes land: a zombie leader resuming after a pause presents an old number, and storage refuses it. Belief stays local; rejection happens at the resource.",
        },
      ],
    },
    {
      number: 14,
      title: "The Disaster Recovery Drill",
      summary:
        "Quarterly, stage a disaster: kill the primary, failover, restore from backup, verify. Time it. The drill is the only honest measure of your DR posture.",
      keyIdea:
        "The drill surfaces the silent killers: the on-call who lacks console access, the restore that takes 6 hours not 30 minutes, the runbook that's out of date.",
      deepDive: [
        {
          heading: "Stage the disaster on purpose",
          paragraphs: [
            "Once a quarter, the team schedules a disaster: a scenario is picked, a window is announced, and the runbooks come off the wiki and into someone's hands. The scenario rotates — kill the primary, lose the region, restore the immutable tier after a simulated ransomware delete, rewind a corrupted migration — and it gets harder each time, because a drill that always passes teaches nothing. Real tooling, real permissions, a stopwatch: the drill is the only honest measurement your DR posture will ever produce.",
            "Chaos engineering supplies the mindset: inject failure deliberately, observe how the system and the team respond, and treat every surprise as a finding rather than a defeat. Mature teams graduate from staging replicas to bounded production game days — a killed pod in production, a flagged feature frozen — because production is where the permissions, the DNS and the assumptions actually live. The blast radius is chosen deliberately; the surprise is not.",
          ],
        },
        {
          heading: "What the drill measures",
          paragraphs: [
            "The scorecard is the deliverable: measured RTO from declare to verified recovery, measured RPO from the tail of lost writes, and the gap list — the on-call who lacked console access, the restore that took six hours against a thirty-minute claim, the runbook describing last year's topology, the WAL archive that silently stopped in week two. Every gap becomes a ticket with an owner and a date, and the next drill re-tests those tickets before it tries anything new.",
            "A failed drill is an incident and gets a blameless postmortem, because the failure it exposes would have been the disaster's first hour. Track the scorecard trend across quarters: RTO that grows drill over drill is the restore path rotting in slow motion, visible only because someone kept measuring. Leadership gets the trend, not the anecdotes — the number that says the recovery promise is real, improving, and owned.",
          ],
        },
        {
          heading: "Culture: boring, scheduled, blameless",
          paragraphs: [
            "The drill's deepest product is not the scorecard; it is the on-call's calm. A rotation that has restored, failed over and rewound in peacetime meets the real disaster with hands that remember the sequence — and the rotation, not just the expert, has that memory, because drill owners rotate monthly. Expertise concentrated in one head is the last single point of failure, and it wears the disguise of diligence.",
            "Findings are celebrated, not punished — a drill that surfaces three gaps did its job; a drill that surfaces none was too easy, and the next one escalates. Runbooks are updated the same week, while the friction is fresh. This closes the loop the whole book has been building: backups verified by restores (Chapter 1), objectives measured by drills (Chapter 8), fencing proven by staged partitions (Chapter 13). Disasters stay binary — rebuildable or not — and the drill is how you already know which.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The drill loop",
        caption:
          "The drill is the audit: whatever it cannot prove, you do not actually have.",
        steps: [
          { label: "Pick scenario", note: "rotate; escalate difficulty" },
          { label: "Announce scope", note: "who, when, blast radius" },
          { label: "Execute", note: "real tools, stopwatch on" },
          { label: "Scorecard", note: "RTO, RPO, gaps found" },
          { label: "Postmortem", note: "fixes with owners, dates" },
          { label: "Re-run", note: "re-test tickets, harder" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "The drill is written like infrastructure: scenario, steps, objectives, observers.",
        code: [
          "# Quarterly DR game day: region loss scenario, executed for real",
          "apiVersion: v1",
          "kind: ConfigMap",
          "metadata:",
          "  name: dr-drill-2026-q1",
          "data:",
          "  scenario: 'lose-region-1'",
          "  steps: |",
          "    1. Block all traffic from region-1 with the network policy.",
          "    2. Promote the region-2 standby using the failover runbook.",
          "    3. Repoint DNS (TTL already lowered to 60 seconds).",
          "    4. Run the post-restore verification suite and record timings.",
          "  objectives: 'rto_minutes<=60, rpo_seconds<=60'",
          "  observers: 'ic, scribe, oncall-primary'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Drilling the same happy path every quarter.",
          fix: "Rotate hard scenarios — region loss, primary kill, locked restore — and make each drill harder than the last.",
        },
        {
          mistake: "The one DR expert runs every drill.",
          fix: "Rotate the whole on-call rotation through drills; expertise in one head is a single point of failure.",
        },
        {
          mistake: "Findings logged and forgotten.",
          fix: "Every gap becomes a ticket with an owner and a date; the next drill re-tests those tickets first.",
        },
        {
          mistake: "Drills confined to staging forever.",
          fix: "Graduate to bounded production game days once staging scores are green — production is where assumptions live.",
        },
      ],
      fieldChecklist: [
        "A DR drill ran this quarter and I can quote its RTO and RPO.",
        "Scenarios rotate and get harder; the happy path does not count.",
        "Drill findings become tickets with owners and due dates.",
        "The whole on-call rotation participates, not only the expert.",
        "Runbooks are updated within the week after each drill.",
        "A failed drill is treated as an incident with a postmortem.",
        "The scorecard — objectives versus measured — is visible to leadership.",
      ],
      keyTerms: [
        {
          term: "DR drill",
          definition:
            "A scheduled, timed, scored execution of a disaster scenario with real tooling — the only honest measurement of recovery capability.",
        },
        {
          term: "Drill scorecard",
          definition:
            "The drill's deliverable: measured RTO and RPO against objectives, plus the gap list turned into tickets with owners.",
        },
        {
          term: "Chaos engineering",
          definition:
            "Deliberately injecting failure to observe how systems and teams respond, treating every surprise as a finding rather than a defeat.",
        },
        {
          term: "Drill rotation",
          definition:
            "The practice of cycling scenarios and drill owners so the whole on-call rotation holds the skill, not one expert.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you run a disaster recovery drill?",
          a: "Quarterly, with a rotating scenario that gets harder each time: kill the primary, lose a region, restore the immutable tier after a simulated ransomware delete, rewind a corrupted migration. Real tooling, real permissions, a stopwatch. The scorecard records measured RTO, RPO and the gap list; every gap becomes a ticket with an owner and a date, and the next drill re-tests those tickets first. A failed drill gets a blameless postmortem like any incident.",
        },
        {
          q: "What has a drill actually found?",
          a: "The same class of things every drill finds, which is why they run: an on-call engineer without console access to the recovery account, a restore that took six hours against a thirty-minute claim, a runbook describing a topology that was rebuilt last month, a WAL archive that had silently stopped two weeks earlier. None were visible on dashboards. All became tickets with owners — and the next drill proved the fixes.",
        },
        {
          q: "How do you convince leadership to spend real time on drills?",
          a: "By reframing: the drill is the audit of a promise the business is already making. An unmeasured RTO is fiction with good intentions; the disaster will not negotiate, and the gap between claimed and measured is where outages become careers. I show the scorecard trend — objectives versus measured, gaps closed over quarters — and the cost of one drill afternoon against one unpracticed disaster. That comparison closes the argument.",
        },
      ],
      quiz: [
        {
          question: "What is the only honest measure of a DR posture?",
          options: [
            "A timed, scored drill executed with real tools",
            "The managed provider's SLA",
            "The backup job's success rate",
            "The architecture diagram",
          ],
          answerIndex: 0,
          explanation:
            "SLAs, exit codes and diagrams describe intent. The drill measures people, permissions and automation end to end under a stopwatch — the same conditions the disaster will supply.",
        },
        {
          question:
            "The drill's restore took six hours against a claimed thirty-minute RTO. What is the right response?",
          options: [
            "Adjust the claim to six hours and stop drilling",
            "Re-run with a smaller database",
            "Treat it as an incident finding: record the measured number, fix the gaps with owners and dates, and re-test next drill",
            "Blame the on-call who ran the restore",
          ],
          answerIndex: 2,
          explanation:
            "The six-hour number is now your real RTO until proven otherwise. The gap list — access, automation, runbook drift — becomes tickets, and the next drill verifies the fixes moved the number.",
        },
        {
          question: "Who should participate in DR drills?",
          options: [
            "Only the engineer who built the DR system",
            "The entire on-call rotation, with the drill owner rotating",
            "Only management observers",
            "External consultants only",
          ],
          answerIndex: 1,
          explanation:
            "Expertise concentrated in one head is the last single point of failure. Rotating scenarios and owners turns restore skill into rotation-wide muscle memory the disaster can actually use.",
        },
      ],
    },
  ],
};
