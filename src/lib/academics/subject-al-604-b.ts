/**
 * Academics - RGPV AI & ML 6th-semester subject: AL-604(B) Information
 * Security & Management.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al604b: AcademicSubject = {
  id: "al-604-b",
  code: "AL-604(B)",
  title: "Information Security & Management",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-604(B): security foundations, cryptography, network and application security, security management, and legal and emerging issues - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Five units walk from the foundations of information security - the CIA triad, attack vocabulary and the malware zoo - through classical and modern cryptography with hand-worked examples of Caesar, RSA and Diffie-Hellman, into network and application security from firewalls to TLS and SQL injection. Unit IV turns technical controls into management discipline: policy, risk matrices, disaster recovery and the incident response lifecycle. Unit V closes with the Indian IT Act 2000, privacy, digital forensics and the emerging security issues of cloud, IoT, AI and post-quantum cryptography. Every section pairs the concept with a worked example, a redrawable diagram, and the exam questions RGPV actually asks.",
  accentColor: "#ef4444",
  emoji: "SEC",
  unitCount: 5,
  totalSections: 30,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations of Information Security",
      summary:
        "The shared vocabulary of the whole subject: the CIA triad and its extensions, the precise meanings of threat, attack, vulnerability, risk and exploit, the split between passive and active attacks, the malware taxonomy from viruses to ransomware, the X.800 catalogue of security services and mechanisms, and the attacker profiles behind real case studies.",
      chapter: {
        number: "01",
        title: "Security Foundations: Goals, Attacks and Malware",
        intro:
          "Unit I builds the lens through which every later topic is viewed. It starts with the three classic goals - confidentiality, integrity and availability - plus the extensions of authenticity, accountability and non-repudiation, then fixes the difference between a threat, an attack, a vulnerability, an exploit and a risk. From there it separates passive eavesdropping from active interference, surveys the malware families, maps the X.800 model of services and mechanisms onto them, and closes with who actually attacks and what the headline breaches teach us.",
        inOneBreath:
          "Security protects confidentiality (only authorized readers), integrity (no undetected change) and availability (usable when needed), extended by authenticity, accountability and non-repudiation. A threat is a potential danger, a vulnerability is a weakness, an exploit is code or a technique that turns the weakness into an attack, and risk combines likelihood with impact. Passive attacks (eavesdropping, traffic analysis) preserve state and are hard to detect, so encryption prevents them; active attacks (masquerade, replay, modification, denial of service) change state and are fought with integrity checks and monitoring. Malware splits into viruses, worms, trojans, ransomware, rootkits and botnets, each with a different propagation trick. X.800 names five services - authentication, access control, confidentiality, integrity, non-repudiation - delivered by mechanisms such as encipherment and digital signatures. Attackers range from script kiddies to nation-state APTs, and real breaches like WannaCry and Equifax show unpatched vulnerabilities converting into catastrophic risk.",
        sections: [
          {
            number: "1.1",
            title: "The CIA triad and its extensions",
            body: [
              "Confidentiality means information is readable only by people and processes authorized to read it. It is enforced by encryption and by access control: a database encrypted with AES-256 at rest stays unreadable even if a disk is stolen, and a permission check stops a guest user from opening an admin record. Confidentiality fails in an eavesdropping attack, when a packet sniffer on open Wi-Fi captures a password sent in cleartext, or in a social-engineering attack where an attacker simply asks for the secret and is told. Note the useful distinction between data confidentiality (stored files) and data in transit (network traffic) - exam answers should name which one a given control protects.",
              "Integrity means data cannot be altered without the alteration being detected. The standard tool is a cryptographic hash such as SHA-256: compute the hash of a downloaded installer, compare it with the publisher's published value, and any single flipped bit produces a completely different digest, so tampering is exposed immediately. For stronger guarantees a digital signature binds the data to a private key, proving both integrity and origin. Integrity attacks range from a student editing marks in a university database to an attacker silently modifying a software update in transit - the silent cases are the dangerous ones, which is exactly why detection mechanisms matter as much as prevention.",
              "Availability means the system and its data are usable when legitimate users need them. The classic enemy is the denial-of-service attack: a distributed botnet flooding a university portal with millions of junk requests until genuine students cannot register for courses. Availability is defended less by cryptography and more by engineering - redundant servers, load balancers, uninterruptible power, backups and rate limiting. A ransomware outbreak also attacks availability, because files exist but cannot be opened until they are restored from backup or decrypted. In exam answers, always connect the attack to the pillar it violates: eavesdropping hits confidentiality, tampering hits integrity, DDoS hits availability.",
              "Three extensions complete the modern picture. Authenticity asks whether a user, message or document is genuinely what it claims to be - multi-factor authentication and certificates establish it. Accountability demands that every action be traceable to a unique responsible identity, which is why shared admin passwords are a policy violation: if five people know one password, no audit log can say who deleted the file. Non-repudiation guarantees a sender cannot later deny having sent a message, achieved with digital signatures because only the sender holds the private key. A bank transfer needs all of these together: authenticate the customer, keep the amount confidential, preserve the record's integrity, and keep proof neither party can deny.",
            ],
            bullets: [
              "Confidentiality: only authorized parties can read data; enforced by encryption (AES-256) and access control.",
              "Integrity: no undetected modification; enforced by hashes (SHA-256) and digital signatures.",
              "Availability: service works when needed; defended by redundancy, backups, load balancing and rate limiting.",
              "Authenticity: users and messages are genuinely what they claim; enforced by MFA and certificates.",
              "Accountability: every action maps to one unique identity; broken by shared accounts.",
              "Non-repudiation: the sender cannot deny sending; provided by signatures made with a private key.",
              "Worked mapping: phishing violates authenticity, packet sniffing violates confidentiality, mark-editing violates integrity and accountability.",
            ],
            table: {
              caption: "Each attack violates a specific goal - name the pillar in every answer.",
              headers: ["Goal", "Meaning", "Attack that violates it", "Typical control"],
              rows: [
                ["Confidentiality", "only authorized readers", "eavesdropping on open Wi-Fi", "AES encryption, access control"],
                ["Integrity", "no undetected change", "editing marks in a database", "SHA-256 hash, digital signature"],
                ["Availability", "usable when needed", "DDoS on the exam portal", "redundancy, rate limiting, backups"],
                ["Authenticity", "identity is genuine", "phishing login page", "MFA, certificates"],
                ["Accountability", "actions traceable to a user", "shared administrator password", "audit logs, unique user IDs"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Security goals stack from foundations to guarantees",
              caption:
                "The bottom three are the CIA triad; the top three are the extensions built on top of them.",
              layers: [
                { label: "Non-repudiation", note: "cannot deny the act" },
                { label: "Accountability", note: "actions traceable to identities" },
                { label: "Authenticity", note: "genuineness of users and data" },
                { label: "Integrity", note: "no undetected change" },
                { label: "Availability", note: "usable when needed" },
                { label: "Confidentiality", note: "secrecy of data" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "When a question describes a scenario (stolen laptop, edited bill, jammed website), do not just define CIA - explicitly state which pillar each scenario breaks and which control repairs it. RGPV examiners award the linking sentence, not the bare definition.",
            },
            keyTerms: [
              { term: "CIA triad", definition: "The three classic security goals: confidentiality, integrity and availability." },
              { term: "Authenticity", definition: "The property that a user, message or document is genuinely what it claims to be." },
              { term: "Accountability", definition: "The requirement that every action in a system can be traced to one unique responsible identity." },
              { term: "Non-repudiation", definition: "Proof that a message came from its claimed sender, who therefore cannot deny sending it." },
            ],
            examQuestions: [
              {
                q: "Define the CIA triad. Explain authenticity, accountability and non-repudiation as extensions, and classify each of the following by the goal it violates: packet sniffing on a LAN, editing rows in a results database, a DDoS flood, a phishing login page, and a shared root password.",
                marks: 7,
                outline: [
                  "Define confidentiality, integrity and availability with one example each.",
                  "State that the triad is extended by authenticity, accountability and non-repudiation.",
                  "Define authenticity and cite MFA or certificates as its controls.",
                  "Define accountability and explain why shared accounts break it.",
                  "Define non-repudiation and tie it to digital signatures.",
                  "Classify the five scenarios: sniffing -> confidentiality; row editing -> integrity and accountability; DDoS -> availability; phishing -> authenticity; shared password -> accountability.",
                  "Close with one sentence on why a secure system needs all goals simultaneously, e.g. the bank-transfer example.",
                ],
              },
              {
                q: "Which security goal does ransomware primarily violate, and which backup practice restores it?",
                marks: 2,
              },
              {
                q: "A student downloads an installer and checks its SHA-256 value against the publisher's site. Which goal does this protect, and how does a single changed bit expose tampering?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Threat, attack, vulnerability, risk and exploit",
            body: [
              "A threat is a potential danger that could harm an asset - a person, group, program or event such as a hacker collective, a disgruntled employee or a flood in the server room. An attack is a threat realized: the actual act of trying to steal, alter, destroy or deny access to information. The distinction matters for planning, because threats are infinite but attacks are specific: 'there are web attackers on the internet' is a threat, 'someone submitted admin' OR '1'='1 to the login form' is an attack. Every exam answer should treat threat as the cause, attack as the event, and damage as the consequence.",
              "A vulnerability is a weakness in design, implementation, configuration or even human habit: an unpatched Apache Struts server, a default password of admin/admin, a receptionist who resets passwords on phone request. An exploit is the concrete tool or technique that converts the weakness into access - the Metasploit module or hand-crafted HTTP request aimed at that specific CVE. The same vulnerability has different risk depending on whether a working exploit is public: a patched-but-unfixed flaw with no public exploit is urgent once exploit code appears on GitHub, because the attacker's cost just collapsed to near zero.",
              "Risk ties the vocabulary together quantitatively: risk is roughly the probability that a threat will successfully exploit a vulnerability times the impact of the loss. Worked example: a customer database holding 50,000 records (high asset value), a SQL injection flaw (vulnerability), active web attackers (threat). Rate likelihood 4 out of 5 and impact 5 out of 5 and the risk score is 20 on a 25-point scale - critical, meaning management must act now, not next quarter. If a web application firewall cuts likelihood to 1, the score falls to 5 and the same risk becomes tolerable; the numbers make prioritization defensible.",
              "Controls (safeguards or countermeasures) are what you buy with that analysis: preventive controls like input validation stop the attack, detective controls like SIEM alerts reveal it, corrective controls like backups restore from it. After controls are applied the remaining exposure is residual risk, which management formally accepts or treats further - risk can be mitigated, transferred (insurance, contracts), avoided (shut the service down) or accepted. This accept-or-treat decision, recorded in writing, is the exact pattern Unit IV formalizes in the risk management methodology, so the vocabulary here is the foundation of everything in the management half of the course.",
            ],
            bullets: [
              "Threat: a potential danger to an asset (attacker group, malware campaign, flood).",
              "Attack: a threat realized as an actual attempt to steal, alter or deny data.",
              "Vulnerability: a weakness in code, configuration or human procedure.",
              "Exploit: the concrete technique or tool that weaponizes a vulnerability.",
              "Risk = likelihood of successful exploitation x impact of the loss.",
              "Four risk treatments: mitigate, transfer, avoid, accept - always with documented approval.",
              "Worked numbers: likelihood 4 x impact 5 = 20/25 (critical); add a control, likelihood drops to 1, score 5/25 (low).",
            ],
            codeExample: {
              language: "python",
              caption: "Quantitative risk scoring: the same asset before and after a control is added.",
              code: `# Simple quantitative risk scoring (asset - threat - control model)
def risk_score(asset_value, threat_likelihood, vulnerability_severity):
    # likelihood and severity rated 1 (low) to 5 (critical)
    return asset_value * threat_likelihood * vulnerability_severity

def classify(score):
    if score >= 60: return "CRITICAL - act immediately"
    if score >= 30: return "HIGH - schedule this quarter"
    if score >= 12: return "MEDIUM - monitor and plan"
    return "LOW - accept and review yearly"

# Customer database: value 5, SQLi likelihood 4, missing validation severity 4
score = risk_score(5, 4, 4)      # 80 -> CRITICAL
print(score, classify(score))

# After parameterized queries ship (severity drops to 1)
print(risk_score(5, 4, 1), classify(risk_score(5, 4, 1)))   # 20 MEDIUM`,
            },
            diagram: {
              kind: "flow",
              title: "From asset to residual risk",
              caption:
                "Each arrow adds one vocabulary term - reproduce this chain when asked to 'explain the risk process'.",
              steps: [
                { label: "Asset: customer database", note: "value = high" },
                { label: "Vulnerability: no input validation" },
                { label: "Threat: web attacker builds an exploit" },
                { label: "Risk = likelihood x impact", note: "scored and prioritized" },
                { label: "Control: parameterized queries + WAF" },
                { label: "Residual risk accepted by management", note: "documented" },
              ],
            },
            callout: {
              type: "tip",
              title: "Fix the word, keep the marks",
              body: "Students routinely write 'vulnerability' when they mean 'threat' and lose the definition marks. Memorize the causal chain: threat (who could hurt you) finds vulnerability (your weakness) and uses an exploit (the tool) to launch an attack (the event), producing risk (measured exposure).",
            },
            keyTerms: [
              { term: "Threat", definition: "A potential danger - person, program or event - that could harm an asset." },
              { term: "Vulnerability", definition: "A weakness in design, implementation, configuration or procedure that a threat can use." },
              { term: "Exploit", definition: "Code or a technique that takes advantage of a specific vulnerability." },
              { term: "Risk", definition: "The expected loss: likelihood that a threat exploits a vulnerability, multiplied by impact." },
              { term: "Control (safeguard)", definition: "A preventive, detective or corrective measure that reduces risk to a residual level." },
            ],
            examQuestions: [
              {
                q: "Define threat, attack, vulnerability, exploit and risk with one example of each. Explain the four ways risk can be treated and compute how a control changes a risk scored at likelihood 4, impact 5.",
                marks: 7,
                outline: [
                  "Define each of the five terms in one precise sentence.",
                  "Give a coherent single-story example: unpatched server (vulnerability), attacker group (threat), exploit kit (exploit), attempted breach (attack), measured exposure (risk).",
                  "State risk = likelihood x impact and compute 4 x 5 = 20/25, classified critical.",
                  "Explain mitigation with a concrete control such as input validation or patching.",
                  "Explain transfer (insurance), avoidance (retire the service) and acceptance (documented sign-off).",
                  "Recompute the score after the control drops likelihood to 1: 1 x 5 = 5/25, now acceptable.",
                  "Note that residual risk must be formally accepted and reviewed, not ignored.",
                ],
              },
              {
                q: "Differentiate between a vulnerability and an exploit with one example of each.",
                marks: 2,
              },
              {
                q: "Name the four risk-treatment options and match each to one sentence-length example.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "Passive versus active attacks",
            body: [
              "Passive attacks only observe. In eavesdropping the attacker reads message contents - passwords, card numbers, emails - off the wire; in traffic analysis the attacker studies metadata even when content is encrypted: who talks to whom, when, how often, and how much. Nothing in the stream is modified, so neither the sender nor the receiver can detect the interception. That detectability asymmetry drives the defence: since observation cannot be caught after the fact, passive attacks must be prevented, and the prevention is encryption of content plus padding or tunneling to obscure traffic patterns.",
              "Active attacks change something. Masquerade means pretending to be another identity, as when a phishing page impersonates the university portal. Replay captures a legitimate exchange and re-sends it later - a classic counter is a timestamp or nonce so an old message is rejected as stale. Modification alters data in transit, from a changed bank amount to an injected payload; denial of service destroys availability entirely. Because active attacks leave traces - altered packets, crashed services, forged sessions - they can be detected by integrity checks, sequence numbers and monitoring, and then blocked by authentication.",
              "A worked contrast makes the asymmetry concrete. Imagine an attacker on the same hostel Wi-Fi during a payment. If the site uses HTTPS, the attacker sees only TLS records and connection timings: confidentiality holds, and nothing the victim does would ever reveal the eavesdropper - a passive attack evaded by encryption. Remove TLS and the attacker can go active: intercept the POST, alter 'amount=1000' to 'amount=99000', and forward it. The victim notices only when the statement arrives, which is exactly why banks sign and verify transactions and why tamper detection (hashes, MACs) belongs to every active-attack defence.",
              "The mapping to the CIA triad should be stated explicitly in answers: passive attacks threaten confidentiality (and, via traffic analysis, complicate accountability by hiding the observer), while active attacks threaten integrity, availability and authenticity. It also explains tool choice in later units: encryption (Unit II) is the answer to passive attacks; message authentication codes, digital signatures, sequence numbers and intrusion detection (Units II and III) are the answers to active ones. X.800 expresses the same split - prevention of passive attacks by encipherment, detection of active attacks by integrity and authentication mechanisms.",
            ],
            bullets: [
              "Passive attacks: eavesdropping (read contents) and traffic analysis (read patterns); nothing is modified.",
              "Passive attacks are practically undetectable, so the strategy is prevention through encryption.",
              "Active attacks: masquerade, replay, modification of messages, and denial of service.",
              "Active attacks change state, so detection via integrity checks and monitoring is possible.",
              "Replay defence: timestamps or nonces make old captured messages stale and rejectable.",
              "Worked contrast: HTTPS turns a payment interception from an active modification opportunity into harmless passive observation.",
              "Mapping: passive -> confidentiality; active -> integrity, availability, authenticity.",
            ],
            table: {
              caption: "The passive/active split in one table - memorize the detectability row.",
              headers: ["Aspect", "Passive attacks", "Active attacks"],
              rows: [
                ["Goal", "observe and learn", "alter, disrupt or fake"],
                ["Examples", "eavesdropping, traffic analysis", "masquerade, replay, modification, DoS"],
                ["CIA pillar hit", "confidentiality", "integrity, availability, authenticity"],
                ["Detectable?", "hard - nothing changes on the wire", "easier - state changes leave traces"],
                ["Best defence", "encryption (prevention)", "integrity checks, authentication, IDS"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Passive and active attacks differ in detection, not just effect",
              caption:
                "One column is fought by encrypting; the other by authenticating and monitoring.",
              left: {
                heading: "Passive",
                items: [
                  "Goal: observe and learn",
                  "Eavesdropping, traffic analysis",
                  "Nothing is modified",
                  "Hard to detect - operate under assumption of observation",
                  "Encryption is the main defence",
                ],
              },
              right: {
                heading: "Active",
                items: [
                  "Goal: alter, disrupt or fake",
                  "Masquerade, replay, modification, DoS",
                  "State is changed or forged",
                  "Easier to detect via integrity checks and logs",
                  "Authentication plus monitoring defend",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Do not call DoS passive",
              body: "The single most common Unit I mistake is listing denial of service among passive attacks. A DoS flood destroys availability and changes system state - it is the textbook active attack. If a definition question offers 'eavesdropping, DoS, replay, masquerade', only eavesdropping is passive.",
            },
            keyTerms: [
              { term: "Passive attack", definition: "An attack that only observes or records traffic without modifying it, such as eavesdropping." },
              { term: "Traffic analysis", definition: "Inferring information from communication patterns - endpoints, timing, volume - even when content is encrypted." },
              { term: "Masquerade", definition: "An active attack in which the attacker impersonates a legitimate identity." },
              { term: "Replay attack", definition: "Re-transmitting a captured legitimate message later to produce an unauthorized effect." },
            ],
            examQuestions: [
              {
                q: "Distinguish passive and active attacks with two examples of each. Explain why the defence strategies differ (prevention versus detection) and map each category onto the CIA triad, including how replay is defeated.",
                marks: 7,
                outline: [
                  "Define passive attacks: observation without modification; give eavesdropping and traffic analysis.",
                  "Define active attacks: modification, fabrication or disruption; give masquerade, replay, modification, DoS.",
                  "Explain the detectability asymmetry: passive leaves no traces, active does.",
                  "Derive the defence strategies: encryption prevents passive attacks; integrity checks, authentication, sequence numbers and IDS detect and block active ones.",
                  "Describe the replay countermeasure: timestamps or non-ces making captured messages stale.",
                  "Map passive to confidentiality, active to integrity/availability/authenticity.",
                  "Include the HTTPS payment example to show one control shifting an active opportunity into harmless passive noise.",
                ],
              },
              {
                q: "Why can a passive attack not be detected by the communicating parties? Name the standard preventive control.",
                marks: 2,
              },
              {
                q: "An attacker re-sends a captured 'transfer Rs.500' request an hour later. Name the attack and two mechanisms that stop it.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Malware taxonomy: virus, worm, trojan, ransomware, rootkit",
            body: [
              "A virus is malware that attaches itself to a host file - a document with macros, an executable, a boot sector - and spreads when the infected file is copied or run by a user. It needs a carrier and human action. A trojan instead masquerades as desirable software: a free game, a cracked installer, a fake invoice viewer. The user willingly runs it, and while the promised feature works, a hidden payload steals banking credentials (the Zeus trojan) or installs a backdoor. Virus and trojan therefore differ in propagation: piggybacking on files versus deceiving the user directly.",
              "A worm needs no host file and no user action: it self-replicates across the network by exploiting a service vulnerability. WannaCry (May 2017) is the canonical worked case - it carried the EternalBlue exploit for a Windows SMB flaw, scanned for reachable port 445, pushed itself into unpatched machines, and then encrypted files for ransom. Within days it had infected hundreds of thousands of machines in over 150 countries, including hospitals and railways. The lesson is double: one unpatched protocol became a global event, and a worm can carry any payload, here ransomware - the categories in this taxonomy combine in practice.",
              "Ransomware encrypts the victim's files - or locks the screen - and demands payment, typically in cryptocurrency, for the key. Modern families also exfiltrate data first and threaten publication: double extortion. Defence is unglamorous but decisive: offline or immutable backups (so encryption cannot reach them), least-privilege accounts (so the malware cannot roam the network), patched systems, and email filtering for the phishing attachments that deliver most families. Paying is discouraged: it funds crime, and several victims who paid received broken decryptors. The recovery story is always restore-from-backup versus pay - which is why backup discipline is a security control, not an IT convenience.",
              "Rootkits are the stealth family: they embed in the kernel, firmware or boot chain to hide files, processes and network connections from the operating system itself, so antivirus running inside the compromised OS reports a clean machine. Detection therefore comes from outside - offline scanning, booting from trusted media, secure boot and measured boot. Rounding out the zoo: spyware silently harvests activity, keyloggers capture input, and botnets enroll thousands of infected machines under a command-and-control server to rent out as a DDoS weapon (Mirai recruited routers and cameras via default passwords). Fileless malware skips the disk entirely, living in memory and scripting shells to evade file-based scanning.",
            ],
            bullets: [
              "Virus: attaches to a host file, spreads by user action; classic carrier-based malware.",
              "Trojan: pretends to be useful software; the deception itself is the delivery mechanism.",
              "Worm: self-replicates over the network without a host or user action; WannaCry via EternalBlue is the exam case.",
              "Ransomware: encrypts files for payment; countered by offline backups, least privilege and patching.",
              "Rootkit: hides at kernel or firmware level; detected by offline and boot-time scanning, not by the infected OS.",
              "Botnet: many infected hosts under command-and-control, rented for DDoS or spam; Mirai used default passwords.",
              "Modern trend: fileless, memory-resident malware and double-extortion ransomware.",
            ],
            table: {
              caption: "The malware zoo - propagation, example and defence for each family.",
              headers: ["Type", "How it spreads or hides", "Famous example", "Primary defence"],
              rows: [
                ["Virus", "attaches to a host file; needs user action", "macro viruses in documents", "antivirus scanning, macro blocking"],
                ["Worm", "self-replicates over the network; no host needed", "WannaCry (EternalBlue, 2017)", "patching, network segmentation"],
                ["Trojan", "masquerades as useful software", "Zeus banking trojan", "download hygiene, sandboxing"],
                ["Ransomware", "encrypts files and demands payment", "WannaCry, Ryuk", "offline backups, least privilege"],
                ["Rootkit", "hides in kernel, boot chain or firmware", "Sony BMG rootkit", "secure boot, offline scanning"],
                ["Botnet", "infected nodes await command-and-control", "Mirai (IoT default passwords)", "egress filtering, C2 takedowns"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "One unsigned executable, three endings",
              caption:
                "The same malware meets three different environments - only the hardened one stays safe.",
              start: "An unsigned executable arrives by email",
              branches: [
                { label: "Runs in a sandbox with least privilege", outcome: "execution confined, no persistence achieved", good: true },
                { label: "User runs it as administrator", outcome: "payload installs a rootkit and hides", good: false },
                { label: "Network with no offline backups", outcome: "ransomware encrypts everything; payout decision forced", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Comparison questions dominate this topic. Structure the answer as a table with rows for host required, user action required, spread speed and hiding technique, then name one real family per row. WannaCry is the safest worked example: a worm that delivers ransomware via a patched-but-unfixed SMB vulnerability.",
            },
            keyTerms: [
              { term: "Virus", definition: "Malware that attaches to a host file and spreads when the file is run or shared." },
              { term: "Worm", definition: "Self-replicating malware that spreads across networks without needing a host file or user action." },
              { term: "Trojan", definition: "Malware disguised as legitimate or desirable software; the user's own execution delivers the payload." },
              { term: "Ransomware", definition: "Malware that encrypts or locks data and demands payment for restoration." },
              { term: "Rootkit", definition: "Stealth malware operating at kernel or firmware level to conceal its presence from the OS." },
            ],
            examQuestions: [
              {
                q: "Compare virus, worm, trojan and ransomware on propagation method, user involvement and speed of spread. Explain the WannaCry incident as a worked example, naming the vulnerability it exploited and two defences that would have stopped it.",
                marks: 7,
                outline: [
                  "Define each family in one line with its propagation mechanism.",
                  "Contrast virus (host file + user action) with worm (self-replicating, no user action).",
                  "Contrast trojan (deception) with ransomware (extortion payload).",
                  "Present WannaCry: worm using EternalBlue against unpatched Windows SMB, encrypting files for ransom, global spread in 2017.",
                  "Name defences: patching the SMB flaw, disabling SMBv1, offline backups, network segmentation, email filtering.",
                  "Note that categories combine: the worm carried a ransomware payload.",
                  "Conclude with the general lesson: propagation prevention (patch, segment) plus recovery capability (backups) are both mandatory.",
                ],
              },
              {
                q: "Why can antivirus running inside an infected OS fail to detect a rootkit? Name one detection approach.",
                marks: 3,
              },
              {
                q: "Distinguish a trojan from a worm in two sentences each.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Security services and mechanisms: the X.800 model",
            body: [
              "ITU-T Recommendation X.800 gives the vocabulary that exam questions quote: a security service is a capability that enhances the security of data processing and transfer, and a security mechanism is the concrete process or device that implements a service. X.800 lists five services. Peer-entity authentication proves the identity at the start of a connection; data-origin authentication proves who produced a message. Access control limits who may use which resource. Data confidentiality keeps content unreadable (connection, connectionless, selective-field and traffic-flow flavours); data integrity guarantees no undetected alteration; non-repudiation with proof of origin or delivery removes later denial.",
              "The mechanisms catalogue is longer: encipherment (encryption) stands first, followed by digital signatures, access-control mechanisms, data-integrity mechanisms, authentication exchange, traffic padding, routing control and notarization. A mapping exercise is the standard exam task: confidentiality is delivered by encipherment; integrity by integrity mechanisms and digital signatures; peer-entity authentication by authentication exchange or digital signatures; non-repudiation by digital signatures plus notarization (a trusted third party timestamps the evidence); traffic-flow confidentiality by traffic padding and routing control. Learn at least one mechanism per service so the mapping is never empty.",
              "A worked example ties it together: securing an email from student to controller of examinations. Encipherment (PGP-style) provides confidentiality; a hash plus digital signature provides integrity and data-origin authentication; the signature with a certificate provides non-repudiation, since only the student's private key could have produced it; the campus mail gateway applying access-control rules provides access control. One design, four services - and the answer scores because it names the mechanism for each service rather than vaguely saying 'we encrypt it'.",
              "X.800 also says where mechanisms live, which previews Unit III. Application-layer mechanisms (PGP, S/MIME) protect one message end to end regardless of route; transport-layer mechanisms (TLS) protect a connection; network-layer mechanisms (IPSec) protect host-to-host or site-to-site traffic; link-layer encryption protects a single hop but requires every hop to be trusted. The rule of thumb: the lower the mechanism sits, the broader but blunter its protection; the higher it sits, the finer-grained but application-specific. Placement questions ('where would you deploy encryption for a banking API?') are answered by reasoning along exactly this ladder.",
            ],
            bullets: [
              "Service versus mechanism: the service is the guarantee, the mechanism is the implementing process.",
              "Five X.800 services: peer-entity authentication, access control, data confidentiality, data integrity, non-repudiation.",
              "Eight mechanisms: encipherment, digital signature, access control, data integrity, authentication exchange, traffic padding, routing control, notarization.",
              "Mapping to memorize: non-repudiation -> signature + notarization; traffic-flow confidentiality -> padding + routing control.",
              "Worked email example: PGP encryption + signature + certificate delivers confidentiality, integrity, authentication and non-repudiation at once.",
              "Placement ladder: application (PGP) > transport (TLS) > network (IPSec) > link (per-hop).",
              "Lower mechanisms are broader and blunter; higher ones are finer-grained and application-aware.",
            ],
            table: {
              caption: "Service-to-mechanism mapping - the core of every X.800 answer.",
              headers: ["X.800 service", "What it guarantees", "Key mechanism(s)"],
              rows: [
                ["Peer-entity authentication", "identity proven at connection setup", "authentication exchange, digital signature"],
                ["Access control", "resources used only by authorized entities", "access-control lists, tickets"],
                ["Data confidentiality", "content unreadable to interceptors", "encipherment, routing control"],
                ["Data integrity", "no undetected alteration", "integrity mechanisms, digital signature"],
                ["Non-repudiation", "sender or receiver cannot later deny", "digital signature, notarization"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where security mechanisms sit in the protocol stack",
              caption:
                "Top layers protect messages precisely; bottom layers protect traffic broadly.",
              layers: [
                { label: "Application layer: PGP, S/MIME", note: "per-message, end-to-end" },
                { label: "Transport layer: TLS", note: "channel security per connection" },
                { label: "Network layer: IPSec", note: "host-to-host or site-to-site" },
                { label: "Data-link layer: link encryption", note: "single hop; every hop must be trusted" },
              ],
            },
            callout: {
              type: "tip",
              title: "Quote the standard, then map",
              body: "Answers that open with 'X.800 (ITU-T) defines security services as ...' and then produce a service-to-mechanism table score highest. The mapping table is worth drawing even when not explicitly demanded - it demonstrates command of both lists in one stroke.",
            },
            keyTerms: [
              { term: "Security service (X.800)", definition: "A capability that enhances security of data processing or transfer, e.g. authentication or confidentiality." },
              { term: "Security mechanism", definition: "A concrete process implementing one or more services, e.g. encipherment or digital signature." },
              { term: "Notarization", definition: "Use of a trusted third party to guarantee properties such as the time or origin of a message." },
              { term: "Traffic padding", definition: "Inserting dummy traffic to disguise real traffic patterns and support traffic-flow confidentiality." },
            ],
            examQuestions: [
              {
                q: "List the five security services of X.800 and the eight security mechanisms, then map at least one mechanism to each service. Illustrate the mapping by designing the protection of an examination-result email end to end.",
                marks: 7,
                outline: [
                  "Define service versus mechanism in one sentence each.",
                  "List the five services: peer-entity authentication, access control, data confidentiality, data integrity, non-repudiation.",
                  "List the eight mechanisms: encipherment, digital signature, access control, data integrity, authentication exchange, traffic padding, routing control, notarization.",
                  "Produce the mapping table with at least one mechanism per service.",
                  "Design the email: PGP encryption for confidentiality; hash + signature for integrity and origin authentication; certificate-backed signature for non-repudiation.",
                  "Add the mail gateway's access-control rules as the access-control service.",
                  "Optionally state the placement ladder (application/transport/network) for one extra mark.",
                ],
              },
              {
                q: "Which X.800 service guarantees that a sender cannot later deny sending a message, and which two mechanisms deliver it?",
                marks: 2,
              },
              {
                q: "Explain traffic padding and routing control and name the service they support.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.6",
            title: "Attackers, motivations and case studies",
            body: [
              "Attackers divide into recognizable profiles, and the profile predicts the method. Script kiddies run borrowed tools against easy targets for thrill; defacements and opportunistic scans are their signature. Hacktivists act from ideology - leaking documents or defacing sites of organizations they oppose. Organized cybercriminals are businesses: their products are ransomware-as-a-service, banking fraud and data theft, and their decision variable is profit. Insiders already hold legitimate access - a malicious employee, or an honest one phished - and cause a large share of expensive breaches precisely because their access is trusted. Nation-state groups (APT: advanced persistent threat) bring funding, patience and sometimes zero-day exploits, pursuing espionage or disruption over months.",
              "Motivations map onto the profiles: money (ransomware, card fraud), ideology (leaks, defacement), ego and curiosity (kiddies proving skill), revenge (disgruntled insiders) and state advantage (espionage, sabotage). The motivation tells you the likely target and tempo: a criminal group wants convertible assets and exits quickly; an APT wants quiet persistence inside defence research or power-grid networks. Exam answers should connect profile to motivation to method in one line each - 'insider, revenge, exfiltrates a customer list before resigning' - because examiners reward the causal chain, not the list of labels.",
              "Case studies convert the theory into consequences. WannaCry (2017) showed unpatched vulnerabilities scaling globally: EternalBlue turned one Windows SMB flaw into hundreds of thousands of infected machines within days, hitting the UK's National Health Service, where appointments were cancelled - a direct availability impact on human services. Equifax (2017) showed process failure: a known Apache Struts vulnerability (CVE-2017-5638) had a patch available for weeks, but the web server was never updated, and attackers spent over two months unnoticed, taking personal data of about 147 million people. Both breaches were preventable by routine hygiene - patching, segmentation, monitoring - which is exactly the point examiners want drawn.",
              "The insider and cloud cases complete the picture. Target (2013) began with credentials stolen from a third-party HVAC vendor and lateral movement into the payment network - segmentation would have contained it. Capital One (2019) began with a misconfigured web application firewall allowing server-side request forgery into metadata services, exposing about 100 million credit applications: a configuration vulnerability, not a code vulnerability. Draw the general lessons explicitly: inventory your assets, patch fast, segment networks, monitor logs, restrict and review privileged access, and rehearse recovery. Every case study answer should end with the control that would have broken the attack chain.",
            ],
            bullets: [
              "Script kiddies: borrowed tools, opportunistic targets, defacement and scans.",
              "Hacktivists: ideology-driven leaks and defacements.",
              "Organized cybercrime: profit-driven, ransomware-as-a-service, banking fraud.",
              "Insiders: legitimate access - malicious intent or phished credentials; hardest to detect.",
              "APT / nation-state: funded, patient, espionage or sabotage with possible zero-days.",
              "WannaCry (2017): EternalBlue + unpatched SMB -> global worm, NHS cancellations.",
              "Equifax (2017): known Struts flaw, patch not applied, 147 million records; Target (2013) and Capital One (2019) add segmentation and misconfiguration lessons.",
            ],
            codeExample: {
              language: "python",
              caption: "A mini log analyzer: the first tool every SOC analyst writes.",
              code: `# Flag accounts with repeated failed logins - brute-force signature
LOG = [
    "FAILED user=admin ip=10.0.0.8",
    "FAILED user=admin ip=10.0.0.8",
    "OK user=alice ip=10.0.0.31",
    "FAILED user=admin ip=10.0.0.8",
    "FAILED user=root ip=10.0.0.8",
]
fails = {}
for line in LOG:
    if "FAILED" in line:
        user = line.split("user=")[1].split()[0]
        fails[user] = fails.get(user, 0) + 1

for user, n in fails.items():
    if n >= 3:
        print("ALERT:", user, "had", n, "failed attempts")
# Output: ALERT: admin had 3 failed attempts`,
            },
            diagram: {
              kind: "pyramid",
              title: "Attacker capability tiers",
              caption:
                "Higher tiers bring better tooling and patience - and demand stronger controls.",
              tiers: [
                { label: "Nation-state APT", note: "funded, patient, zero-days" },
                { label: "Organized cybercrime", note: "profit: ransomware, fraud" },
                { label: "Hacktivists", note: "ideology: leaks, defacement" },
                { label: "Insiders", note: "access without advanced skill" },
                { label: "Script kiddies", note: "borrowed tools, opportunistic" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For 'explain with a case study' questions, pick two contrasting incidents - one patching failure (Equifax) and one configuration failure (Capital One) - and end each with the single control that breaks the chain. A named incident with a named control beats three paragraphs of generic advice.",
            },
            keyTerms: [
              { term: "APT", definition: "Advanced persistent threat: a well-resourced, patient group (often state-linked) that maintains long-term covert access." },
              { term: "Hacktivist", definition: "An attacker motivated by ideology rather than money, using leaks and defacement." },
              { term: "Insider threat", definition: "Risk from a person with legitimate access - malicious intent or deceived credentials." },
              { term: "Script kiddie", definition: "An unskilled attacker using ready-made tools against easy targets." },
            ],
            examQuestions: [
              {
                q: "Describe the main attacker categories with their motivations, and analyse the WannaCry or Equifax breach: what was the vulnerability, how did the attack proceed, what was the impact, and which two controls would have prevented it?",
                marks: 7,
                outline: [
                  "List profiles: script kiddies, hacktivists, organized crime, insiders, nation-state APT.",
                  "Attach one motivation and one typical method to each profile.",
                  "Choose the case study and state the specific vulnerability (EternalBlue SMB, or Apache Struts CVE-2017-5638).",
                  "Trace the attack chain step by step from initial access to impact.",
                  "Quantify impact (NHS appointment cancellations; about 147 million records) and note the availability/privacy goals hit.",
                  "Name the controls: rapid patching and segmentation for WannaCry; patch management plus asset inventory and monitoring for Equifax.",
                  "Close with the general lesson: routine hygiene defeats most headline breaches.",
                ],
              },
              {
                q: "Why are insider threats harder to detect than external ones? Give one preventive and one detective control.",
                marks: 3,
              },
              {
                q: "Match each motivation (money, ideology, revenge, espionage) to the most likely attacker profile.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Cryptography",
      summary:
        "The mathematics of secrecy and trust: classical ciphers worked by hand, symmetric machines from DES to AES, block cipher modes and their failure modes, the RSA and Diffie-Hellman algorithms computed with small numbers, SHA-256 hashing, digital signatures, and the PKI and key-management machinery that makes it all usable.",
      chapter: {
        number: "02",
        title: "Cryptography: Ciphers, Keys and Signatures",
        intro:
          "Unit II moves from what security is to how it is built. Classical ciphers (Caesar, Vigenere, transposition) introduce the ideas of key and key space with examples you can compute by hand, then symmetric cryptography covers DES's Feistel structure and AES's rounds. Block cipher modes show why the mode matters as much as the algorithm, with ECB's pattern leak as the cautionary tale. Asymmetric cryptography brings RSA and Diffie-Hellman with worked small-number examples, hash functions bring integrity, and digital signatures, PKI certificates and key management complete the trust chain.",
        inOneBreath:
          "Caesar shifts each letter by k (SECURE with k=3 becomes VHFXUH) and falls to 25 brute-force tries; Vigenere shifts by a repeating key (HELLO with KEY becomes RIJVS); transposition rearranges letters (rail fence). DES encrypts 64-bit blocks with a 56-bit key through 16 Feistel rounds and is brute-force broken; AES uses a 128-bit block with 128/192/256-bit keys in 10/12/14 rounds of SubBytes, ShiftRows, MixColumns and AddRoundKey. ECB mode leaks patterns, CBC chains via an IV, CTR turns the block cipher into a stream. RSA uses n = pq, phi = (p-1)(q-1), ed = 1 mod phi; with p=7, q=11, e=13, d=37, message 5 encrypts to 26. Diffie-Hellman on p=23, g=5 gives both parties the shared secret 4. SHA-256 produces a 256-bit digest with avalanche; signatures encrypt a hash with the private key; PKI chains certificates from a root CA; keys must be generated, distributed, rotated and revoked under procedure.",
        sections: [
          {
            number: "2.1",
            title: "Classical ciphers: Caesar, Vigenere and transposition",
            body: [
              "The Caesar cipher shifts every letter by a fixed amount k. With k = 3, the word SECURE becomes VHFXUH: S->V, E->H, C->F, U->X, R->U, E->H. Decryption shifts back by 3. The entire security rests on one number, so the key space is only 25 meaningful shifts (26 including the trivial zero shift) - an attacker tries every shift and keeps the one producing readable English, which takes seconds by hand and microseconds by machine. Caesar illustrates the two primitive ideas every cipher after it reuses: an algorithm (shift) and a key (the shift amount), with security supposed to live entirely in the key, never in the secrecy of the algorithm (Kerckhoffs's principle).",
              "The Vigenere cipher defends against brute force by shifting each letter by a different amount: key K = KEY over plaintext HELLO gives H+K=R, E+E=I, L+Y=J (35 wraps mod 26 to 9), L+K=V, O+E=S, so the ciphertext is RIJVS. For 400 years this defeated casual frequency analysis, because the letter E no longer always maps to the same cipher letter. Its collapse came from the repeating key: Kasiski's method finds repeated ciphertext strings whose distances reveal the key length (say 5), then the text splits into 5 Caesar-shifted streams, each solvable by ordinary frequency analysis. The lesson: periodic keys leak their period, and modern stream ciphers avoid the flaw with non-repeating keystreams.",
              "Transposition ciphers change positions instead of letters. Rail fence with 2 rails on ATTACKATDAWN writes alternating letters on two rails: rail one gets A T C K T D W (positions 0, 2, 4, 6, 8, 10) and rail two gets T A A A A N (positions 1, 3, 5, 7, 9, 11), so the ciphertext is ATCKTDWTAAAAAN. Columnar transposition writes the plaintext into rows and reads it out in a key-determined column order. Character frequencies are unchanged by any transposition - the attacker sees a normal English distribution - so the giveaway of a transposition cipher is exactly that: correct frequencies, meaningless text, meaning the attack path is anagram-style reconstruction rather than frequency analysis.",
              "Why do examiners still ask about ciphers broken centuries ago? Because they compress the whole subject into miniature. Caesar demonstrates small key spaces dying to brute force; Vigenere demonstrates periodicity dying to analysis; transposition demonstrates that hiding order is not hiding content. Every modern claim - AES's 2^128 key space, CBC's chaining, the nonce discipline of CTR - is the historical lesson restated with bigger numbers. When an answer defines Kerckhoffs's principle (the system must be secure even if everything except the key is public) and illustrates it with Caesar's 25-key collapse, the examiner sees both the history and its modern consequence in one paragraph.",
            ],
            bullets: [
              "Caesar: shift by fixed k; SECURE with k=3 -> VHFXUH; key space 25, brute-forced instantly.",
              "Kerckhoffs's principle: assume the algorithm is public; secrecy lives only in the key.",
              "Vigenere: repeating key letter-by-letter shifts; HELLO with KEY -> RIJVS.",
              "Vigenere weakness: the repeating period is discoverable (Kasiski), then each stream is a Caesar cipher.",
              "Rail fence transposition on ATTACKATDAWN with 2 rails -> ATCKTDWTAAAAAN.",
              "Transposition preserves letter frequencies - the attacker notices a normal distribution in scrambled text.",
              "Historical lesson mapped forward: small key space, periodic keys and visible structure are exactly what modern designs eliminate.",
            ],
            codeExample: {
              language: "python",
              caption: "All three classical ciphers in one runnable script.",
              code: `# Classical ciphers: Caesar shift and Vigenere
def caesar(text, k):
    out = ""
    for ch in text.upper():
        if ch.isalpha():
            out += chr((ord(ch) - 65 + k) % 26 + 65)
        else:
            out += ch
    return out

print(caesar("SECURE", 3))       # VHFXUH
print(caesar(caesar("SECURE", 3), -3))  # SECURE - decrypt shifts back

def vigenere(text, key):
    out, j = "", 0
    for ch in text.upper():
        shift = ord(key[j % len(key)].upper()) - 65
        out += chr((ord(ch) - 65 + shift) % 26 + 65)
        j += 1
    return out

print(vigenere("HELLO", "KEY"))  # RIJVS`,
            },
            diagram: {
              kind: "flow",
              title: "Caesar encryption and its collapse by brute force",
              caption:
                "Redraw this chain for any shift question - including the attacker's last step.",
              steps: [
                { label: "Plaintext: SECURE" },
                { label: "Shift each letter +3", note: "key k = 3" },
                { label: "Ciphertext: VHFXUH" },
                { label: "Decrypt shifts back -3", note: "recovers SECURE" },
                { label: "Attacker tries all 25 shifts", note: "key space too small" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Cipher questions are arithmetic - show every substitution. Write the plaintext above the key above the ciphertext in columns, compute letter numbers where needed (A=0), and state the final string in bold. A wrong letter with visible working still earns method marks; an unexplained string earns none.",
            },
            keyTerms: [
              { term: "Key space", definition: "The set of all possible keys; Caesar's is 25, which is why it dies to brute force." },
              { term: "Kerckhoffs's principle", definition: "A cryptosystem must remain secure when everything except the key is public." },
              { term: "Substitution cipher", definition: "A cipher replacing letters by others, preserving position (Caesar, Vigenere)." },
              { term: "Transposition cipher", definition: "A cipher rearranging letter positions while preserving the letters themselves (rail fence, columnar)." },
              { term: "Kasiski examination", definition: "Finding repeated ciphertext strings to deduce a Vigenere key's length." },
            ],
            examQuestions: [
              {
                q: "Encrypt SECURE using the Caesar cipher with shift 3 and ATTACKATDAWN using 2-rail rail-fence transposition, showing all working. Then explain why the Vigenere cipher with key KEY is stronger than Caesar, and why it still fails.",
                marks: 7,
                outline: [
                  "Write the alphabet numbering A=0 used for the working.",
                  "Caesar: map S->V, E->H, C->F, U->X, R->U, E->H to get VHFXUH.",
                  "Rail fence: split ATTACKATDAWN into rails ATCKTDW and TAAAAAN, ciphertext ATCKTDWTAAAAAN.",
                  "Define Vigenere as letter-wise shifts by a repeating key.",
                  "Compute HELLO + KEY -> RIJVS showing the mod-26 wrap on the L+Y step.",
                  "Explain the strength: key space grows from 25 to 26^m, defeating simple frequency analysis.",
                  "Explain the failure: the repeating period leaks via Kasiski, then each period is a separate Caesar shift solved by frequency analysis.",
                ],
              },
              {
                q: "Decrypt VHFXUH when it was produced by a Caesar cipher with unknown shift.",
                marks: 2,
              },
              {
                q: "Why does unchanged letter frequency suggest a transposition cipher rather than a substitution cipher?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Symmetric encryption: DES and AES",
            body: [
              "Symmetric encryption uses one shared secret key for both encryption and decryption, so the real problem becomes key distribution - how two parties who have never met share a secret (solved in 2.4 and 2.5). DES, the Data Encryption Standard (1977), encrypts 64-bit blocks with a 56-bit key through 16 rounds of a Feistel network: each round splits the block into halves, runs one half through a round function F (expansion, S-boxes, permutation), and XORs the result with the other half, then swaps. Feistel's elegance is that decryption uses the same machinery in reverse round order. Its weakness is arithmetic: 2^56 is about 7.2 x 10^16 keys, and by 1998 the EFF's Deep Crack machine brute-forced a DES key in 56 hours.",
              "The industry response was 3DES: encrypt-decrypt-encrypt with two or three 56-bit keys, stretching the effective key length to 112 or 168 bits. It kept legacy hardware alive for two decades but inherits the narrow 64-bit block, which limits how much data one key may safely encrypt (birthday-collision concerns around 32 GB) and runs far slower than modern ciphers. 3DES is now deprecated for new designs; it appears in exams mainly as the bridge that kept banking systems secure while AES was standardized, and as a reminder that key length alone was not the only dated assumption.",
              "AES (Rijndael, standardized 2001) encrypts a 128-bit block with keys of 128, 192 or 256 bits in 10, 12 or 14 rounds respectively. It is a substitution-permutation network, not a Feistel network: each round applies SubBytes (byte-wise S-box substitution), ShiftRows (cyclic row shifts in the 4x4 state), MixColumns (linear mixing of each column - skipped in the final round) and AddRoundKey (XOR with the round key derived from the master key by the key schedule). Decryption inverts each operation with inverse tables. AES-128 offers a 2^128 key space; the popular claim is that testing 2^128 keys at a billion keys per second would take longer than the age of the universe - exam answers love that sentence, and it is mathematically fair.",
              "The practical rules follow directly. Never reuse a symmetric key across unrelated purposes; rotate keys periodically; and choose AES-256 when long-term confidentiality matters (data that must stay secret for decades, or fear of future advances). Symmetric speed matters too: AES runs in hardware on every modern CPU (AES-NI instructions), achieving gigabytes per second, which is why TLS sessions after the handshake switch to symmetric encryption. The design pattern of all secure channels - asymmetric cryptography to agree on a key, symmetric cryptography to protect the traffic - begins from this section's speed-versus-key-distribution trade-off.",
            ],
            bullets: [
              "Symmetric = one shared key for encrypt and decrypt; the hard part is key distribution.",
              "DES: 64-bit block, 56-bit key, 16 Feistel rounds; brute-force broken (EFF Deep Crack, 56 hours, 1998).",
              "Feistel structure: split halves, F round function, XOR and swap; decryption reuses the same rounds reversed.",
              "3DES: EDE with 2 or 3 keys gives 112/168-bit strength but keeps the narrow 64-bit block; deprecated for new designs.",
              "AES: 128-bit block, 128/192/256-bit keys, 10/12/14 rounds.",
              "AES round: SubBytes, ShiftRows, MixColumns (not in final round), AddRoundKey; a substitution-permutation network.",
              "AES has hardware support (AES-NI) giving GB/s throughput - hence TLS uses asymmetric key exchange then symmetric bulk encryption.",
            ],
            table: {
              caption: "DES versus 3DES versus AES - the standard comparison question.",
              headers: ["Property", "DES", "3DES", "AES"],
              rows: [
                ["Block size", "64 bits", "64 bits", "128 bits"],
                ["Key length", "56 bits", "112 or 168 bits", "128 / 192 / 256 bits"],
                ["Structure", "Feistel, 16 rounds", "DES applied 3 times", "SPN, 10/12/14 rounds"],
                ["Status", "insecure - brute-forced", "deprecated", "current standard"],
                ["Typical speed", "slow", "slower (3 passes)", "very fast with hardware"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two families of block cipher design",
              caption:
                "Feistel networks reuse one engine both ways; SPNs apply invertible round operations.",
              left: {
                heading: "DES - Feistel network",
                items: [
                  "64-bit block, 56-bit key",
                  "16 rounds of F + XOR + half-swap",
                  "Same engine encrypts and decrypts (rounds reversed)",
                  "Round function need not be invertible",
                  "Broken by brute force; survives only as 3DES",
                ],
              },
              right: {
                heading: "AES - substitution-permutation network",
                items: [
                  "128-bit block, 128/192/256-bit keys",
                  "10/12/14 rounds",
                  "SubBytes, ShiftRows, MixColumns, AddRoundKey",
                  "Every operation must be invertible for decryption",
                  "Current worldwide standard with hardware support",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The four AES round operations and the 10/12/14-to-128/192/256 mapping are asked constantly. Write them as a labeled round diagram: state -> SubBytes -> ShiftRows -> MixColumns -> AddRoundKey -> next round, with 'MixColumns skipped in the final round' as the precision detail that earns the last mark.",
            },
            keyTerms: [
              { term: "Feistel network", definition: "A round structure splitting the block in halves and XORing one half with a function of the other, allowing decryption with reversed rounds." },
              { term: "S-box", definition: "A substitution table providing nonlinearity inside a round; DES has eight, AES has one (SubBytes)." },
              { term: "Key schedule", definition: "The algorithm deriving round keys from the master key." },
              { term: "3DES", definition: "Encrypt-decrypt-encrypt with DES and two or three keys; 112/168-bit strength, now deprecated." },
              { term: "AES (Rijndael)", definition: "The current standard block cipher: 128-bit block, 128/192/256-bit keys, 10/12/14 rounds." },
            ],
            examQuestions: [
              {
                q: "Explain the structure of DES (block size, key size, Feistel rounds) and why it became insecure. Describe AES's round operations and key/round-size options, and state why AES replaced both DES and 3DES.",
                marks: 7,
                outline: [
                  "State DES parameters: 64-bit block, 56-bit key, 16 rounds.",
                  "Explain one Feistel round: split, expansion, S-boxes, permutation, XOR, swap.",
                  "Compute the insecurity: 2^56 keys, brute-forced in 56 hours by EFF hardware in 1998.",
                  "Note 3DES as the interim fix (EDE, 112/168 bits) and its remaining 64-bit-block limitation.",
                  "List AES parameters: 128-bit block, 128/192/256-bit keys, 10/12/14 rounds.",
                  "Describe the four round operations and note MixColumns is skipped in the final round.",
                  "Conclude with AES's advantages: 2^128 key space, hardware acceleration, worldwide standardization.",
                ],
              },
              {
                q: "Why does a Feistel network not require the round function F to be invertible?",
                marks: 3,
              },
              {
                q: "State the number of AES rounds for 128-bit and 256-bit keys.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Block cipher modes: ECB, CBC and CTR",
            body: [
              "A block cipher encrypts exactly one fixed-size block, so real messages need a mode of operation defining how blocks chain. ECB (electronic codebook) is the naive mode: encrypt each block independently with the same key. Identical plaintext blocks then produce identical ciphertext blocks, so structure leaks straight through the encryption. The famous demonstration encrypts the Linux penguin image with AES-ECB: the silhouette remains visible because every white block encrypts identically. ECB also enables block-level cut-and-paste: an attacker can swap ciphertext blocks that decrypt to predictable values, such as moving a payment recipient's field. ECB is acceptable only for encrypting single blocks such as one key value.",
              "CBC (cipher block chaining) fixes the leak by XORing each plaintext block with the previous ciphertext block before encryption: C1 = E(P1 xor IV), then C2 = E(P2 xor C1). Identical plaintext blocks now encrypt differently because their inputs differ, and the IV (initialization vector) must be random and unpredictable per message - reusing an IV lets an attacker detect equal prefixes. Decryption is parallelizable per block, but encryption is sequential, and a corrupted ciphertext block garbles its own plaintext block plus one bit-flip in the next - the malleability that later motivated authenticated modes. CBC with padding is also historically vulnerable to padding-oracle attacks, which recover plaintext from error-message differences.",
              "CTR (counter) mode turns the block cipher into a stream cipher: encrypt successive counter values E(k, nonce || counter) to produce a keystream, then XOR it with the plaintext. Elegant consequences follow: no padding is needed (any length works), encryption and decryption are both parallelizable, random access is possible (seek to block i and decrypt just that block), and only the encryption direction of the cipher is ever used. The critical rule is the nonce discipline: the key and counter value must never repeat, because key plus counter collision gives keystream reuse, and XOR of two ciphertexts reveals the XOR of the two plaintexts - the two-time-pad disaster seen in real protocol failures.",
              "Choosing a mode is a standard exam scenario. ECB: never for data with structure. CBC: fine with a random IV plus integrity protection, but sequential. CTR: fast and parallel with strict nonce uniqueness. Modern practice prefers authenticated modes such as GCM (Galois/counter mode), which computes CTR encryption plus an authentication tag in one pass, so tampering is detected rather than merely making decryption produce garbage - the encryption-integrity pairing that the CIA triad demands. State in answers that confidentiality alone never proves integrity: an attacker can flip bits in any stream-mode ciphertext and the receiver cannot tell without a MAC or AEAD mode.",
            ],
            bullets: [
              "ECB: identical plaintext blocks -> identical ciphertext blocks; the penguin image is the standard proof.",
              "ECB also allows cut-and-paste block substitution - never use it for structured data.",
              "CBC: C1 = E(P1 xor IV), C2 = E(P2 xor C1); IV must be random and unpredictable per message.",
              "CBC properties: hides patterns, but encryption is sequential and errors propagate to the next block.",
              "CTR: keystream = E(k, nonce || counter) XOR plaintext; no padding, parallel, random access.",
              "CTR rule: (key, nonce, counter) must never repeat - reuse causes the two-time-pad leak.",
              "Modern default: authenticated modes like GCM give confidentiality plus integrity in one pass.",
            ],
            codeExample: {
              language: "python",
              caption: "Demonstrating ECB's pattern leak with a toy block cipher.",
              code: `# Toy cipher to show why ECB leaks patterns: identical plaintext
# blocks under the same key produce identical ciphertext blocks.
BLOCK = 8
def toy_encrypt(block, key):
    return bytes((b ^ key) for b in block)   # per-byte XOR "cipher"

key = 0x5A
plaintext = b"PASSWORDPASSWORDLOGIN"      # two identical 8-byte blocks
blocks = [plaintext[i:i+BLOCK] for i in range(0, len(plaintext), BLOCK)]
cipher_blocks = [toy_encrypt(b, key) for b in blocks]

for i, (p, c) in enumerate(zip(blocks, cipher_blocks)):
    print(i, p, "->", c)
# Blocks 0 and 1 ("PASSWORD") encrypt to the SAME block:
# an attacker sees the repetition without knowing the key.`,
            },
            diagram: {
              kind: "flow",
              title: "CBC chaining hides plaintext patterns",
              caption:
                "Each block's input depends on the previous ciphertext, so repeats vanish.",
              steps: [
                { label: "P1 xor IV -> encrypt -> C1" },
                { label: "P2 xor C1 -> encrypt -> C2", note: "chained" },
                { label: "P3 xor C2 -> encrypt -> C3" },
                { label: "Identical plaintext blocks now differ" },
                { label: "IV must be random per message", note: "reuse leaks equal prefixes" },
              ],
            },
            callout: {
              type: "warning",
              title: "ECB still appears in real products",
              body: "ECB is not merely a textbook joke: misconfigured cloud storage and databases have exposed data with it. When a question offers a mode choice, answer with the two-part rule - ECB leaks structure and allows block substitution; use CBC with a random IV or CTR/GCM with unique nonces, and always add an authentication tag.",
            },
            keyTerms: [
              { term: "Mode of operation", definition: "The scheme for applying a block cipher to messages longer than one block." },
              { term: "ECB", definition: "Electronic codebook: blocks encrypted independently; leaks patterns and allows block substitution." },
              { term: "CBC", definition: "Cipher block chaining: each block XORed with the previous ciphertext before encryption; needs a random IV." },
              { term: "CTR", definition: "Counter mode: encrypts counter values to form a keystream XORed with the plaintext; needs unique nonces." },
              { term: "GCM", definition: "Galois/counter mode: an authenticated-encryption mode providing confidentiality plus an integrity tag." },
            ],
            examQuestions: [
              {
                q: "Explain why ECB mode is insecure for structured data, how CBC mode solves the pattern leak, and how CTR mode works. Compare all three on parallelism, padding and error propagation, and state why authenticated modes such as GCM are preferred today.",
                marks: 7,
                outline: [
                  "Define a mode of operation and its purpose.",
                  "Show ECB's flaw: identical blocks map identically; cite the penguin image and cut-and-paste substitution.",
                  "Derive CBC: C1 = E(P1 xor IV), chaining formulas; explain why the IV must be random per message.",
                  "Evaluate CBC: hides patterns, sequential encryption, single-bit error affects two blocks, padding-oracle history.",
                  "Derive CTR: keystream E(k, nonce || counter) XOR plaintext; no padding, parallel, random access.",
                  "State the CTR nonce-uniqueness rule and the two-time-pad leak when it is violated.",
                  "Conclude with GCM: CTR plus an authentication tag gives integrity, which no confidentiality-only mode provides.",
                ],
              },
              {
                q: "What happens if two messages are encrypted in CTR mode with the same key and the same nonce? Explain the leak.",
                marks: 3,
              },
              {
                q: "Why must a CBC initialization vector be unpredictable, not merely unique?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Asymmetric cryptography: RSA with a worked example",
            body: [
              "Asymmetric cryptography solves the problem symmetric systems never could: two strangers on an open network can communicate securely without pre-sharing a secret. Each party owns a key pair - a public key published to the world and a private key kept secret. Whatever one key encrypts, only the other decrypts, so anyone can send confidential mail to you using your public key, and you alone can open it. RSA (Rivest, Shamir, Adleman, 1977) bases this on the difficulty of factoring the product of two large primes: recovering the private key from the public modulus n = p x q is believed infeasible when p and q are hundreds of digits long.",
              "Key generation follows four steps. Choose primes p and q; compute n = p x q and phi = (p-1)(q-1); choose e coprime to phi (conveniently 65537 in practice); compute d as the modular inverse of e, meaning e x d = 1 (mod phi). The public key is (e, n) and the private key is (d, n). Encryption of message m is c = m^e mod n; decryption is m = c^d mod n. Because exponents cancel mod n when ed = 1 mod phi, the round trip always recovers m. Signatures use the same arithmetic reversed: sign with d (s = m^d mod n), verify with e.",
              "The exam-sized worked example: take p = 7, q = 11, so n = 77 and phi = (6)(10) = 60. Choose e = 13 (gcd(13, 60) = 1) and find d such that 13d = 1 mod 60: 13 x 37 = 481 = 480 + 1 = 8 x 60 + 1, so d = 37. Encrypt m = 5: 5^13 mod 77. Square-and-multiply keeps it manageable: 5^2 = 25, 5^4 = 25^2 = 625 = 9 (mod 77), 5^8 = 9^2 = 81 = 4 (mod 77), so 5^13 = 5^8 x 5^4 x 5^1 = 4 x 9 x 5 = 180 = 26 (mod 77). Decrypt 26^37 mod 77 and the same method returns 5. In real deployments p and q are 1024-bit primes and n is 2048 bits or more.",
              "Practical constraints complete the answer. RSA is thousands of times slower than AES, so protocols never encrypt bulk data with it: they encrypt a random session key (hybrid encryption) or, in modern TLS, use RSA only for signatures while ECDH negotiates keys. Textbook RSA is deterministic - the same m always gives the same c - so real standards add randomized padding (OAEP for encryption, PSS for signatures). Key size matters: 512-bit RSA is factorable by hobbyists, 1024 bits is retired, and 2048 bits is the current floor. These constraints turn an algorithm description into the engineering judgment examiners look for at the 7-mark level.",
            ],
            bullets: [
              "Key pair: public key published, private key secret; whatever one encrypts only the other decrypts.",
              "Hardness assumption: factoring n = p x q is infeasible for large p, q.",
              "Generation: n = pq, phi = (p-1)(q-1), choose e coprime to phi, d = e^-1 mod phi.",
              "Encryption c = m^e mod n; decryption m = c^d mod n; signatures reverse the roles.",
              "Worked example: p=7, q=11, n=77, phi=60, e=13, d=37 (13x37 = 481 = 1 mod 60); 5^13 mod 77 = 26; 26^37 mod 77 = 5.",
              "RSA is slow and deterministic: real systems use hybrid encryption with OAEP/PSS padding and RSA-2048 minimum.",
              "In TLS today RSA mostly signs; key agreement is ECDH (see 2.5).",
            ],
            codeExample: {
              language: "python",
              caption: "The full exam-sized RSA example, runnable.",
              code: `# RSA with tiny numbers (exam-sized example: p=7, q=11, e=13)
p, q, e = 7, 11, 13
n = p * q                      # 77
phi = (p - 1) * (q - 1)        # 60

# Find d: e * d = 1 (mod phi)
d = next(k for k in range(1, phi) if (e * k) % phi == 1)   # 37
print("n =", n, "phi =", phi, "d =", d)

m = 5                          # message
c = pow(m, e, n)               # 5^13 mod 77 = 26
back = pow(c, d, n)            # 26^37 mod 77 = 5
print("ciphertext:", c, "recovered:", back)
assert back == m`,
            },
            diagram: {
              kind: "pipeline",
              title: "RSA key generation, encryption and decryption",
              caption:
                "Every stage of this pipeline is a computable exam step - practise it until automatic.",
              stages: [
                { label: "Choose primes p = 7, q = 11" },
                { label: "n = 77, phi = 60" },
                { label: "Pick e = 13; compute d = 37", note: "ed = 1 mod phi" },
                { label: "Encrypt: c = m^e mod n", note: "5 -> 26" },
                { label: "Decrypt: m = c^d mod n", note: "26 -> 5" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 7-mark RSA question is almost always the small-number trace. Memorize the square-and-multiply chain for 5^13 mod 77 (4 x 9 x 5 = 180 = 26) and the d-search (13 x 37 = 481). Write phi = (p-1)(q-1) before touching e - skipping phi is the most common lost step.",
            },
            keyTerms: [
              { term: "Public key / private key", definition: "A published half (e, n) used to encrypt or verify, and a secret half (d, n) used to decrypt or sign." },
              { term: "Euler's phi", definition: "phi(n) = (p-1)(q-1) for n = pq; the modulus in which d is computed as the inverse of e." },
              { term: "Modular exponentiation", definition: "Computing m^e mod n efficiently by square-and-multiply; the core RSA operation." },
              { term: "Hybrid encryption", definition: "Encrypting data with a symmetric cipher whose session key is itself encrypted with RSA." },
              { term: "OAEP", definition: "Optimal asymmetric encryption padding: the randomized padding making RSA encryption secure in practice." },
            ],
            examQuestions: [
              {
                q: "For p = 7, q = 11 and e = 13, compute n, phi and d, then encrypt the message m = 5 and decrypt the result, showing every modular step. Explain why RSA is secure and why real systems use hybrid encryption with padding.",
                marks: 7,
                outline: [
                  "Compute n = 77 and phi = (6)(10) = 60.",
                  "Verify gcd(13, 60) = 1 and find d = 37 by checking 13 x 37 = 481 = 1 (mod 60).",
                  "Encrypt by square-and-multiply: 5^2 = 25, 5^4 = 9, 5^8 = 4 (mod 77).",
                  "Combine: 5^13 = 4 x 9 x 5 = 180 = 26 (mod 77); ciphertext is 26.",
                  "Decrypt: 26^37 mod 77 recovers 5 using the same method.",
                  "Explain security: factoring 77 is trivial, but factoring a 2048-bit modulus is infeasible; small numbers are for computation practice only.",
                  "Explain hybrid encryption and randomized padding (OAEP/PSS): RSA is slow, deterministic and must never be used raw.",
                ],
              },
              {
                q: "Why is textbook RSA without padding considered insecure? Give the property it lacks.",
                marks: 2,
              },
              {
                q: "In RSA, which key signs a message and which key verifies it?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Diffie-Hellman key exchange",
            body: [
              "Diffie-Hellman (1976) solves key distribution without ever transmitting the secret. The two parties publicly agree on a large prime p and a generator g; then Alice picks a private random a and publishes A = g^a mod p, while Bob picks b and publishes B = g^b mod p. Alice computes B^a mod p and Bob computes A^b mod p - both equal g^(ab) mod p, because exponents commute. An eavesdropper sees p, g, A and B but must recover a from A (the discrete logarithm problem), which is computationally infeasible for properly chosen 2048-bit or larger parameters.",
              "The textbook-sized trace: p = 23, g = 5, a = 6, b = 15. Alice sends A = 5^6 mod 23 = 8 (since 5^2 = 2, 5^4 = 4, 5^6 = 8). Bob sends B = 5^15 mod 23 = 19. Alice computes 19^6 mod 23 = 4 and Bob computes 8^15 mod 23 = 4: the shared secret is 4, which they feed into a key-derivation function to obtain AES keys. Both parties computed the same number without ever sending it - that single sentence is the heart of every Diffie-Hellman answer and the reason the discovery won a place in every secure protocol since.",
              "The classic weakness is the man-in-the-middle attack: DH authenticates nothing by itself. An attacker sitting between Alice and Bob can run a separate DH exchange with each - agreeing secret k1 with Alice and k2 with Bob - decrypting and re-encrypting everything in between while both victims believe they share a key. The fix is to bind the DH exchange to authenticated identities: sign the DH parameters with certificates (as TLS does), or use pre-shared keys. Exam answers must state both halves: DH provides secrecy of the key agreement, but only signatures or certificates provide authentication of the parties.",
              "Practical deployment details round out the topic. Modern TLS uses ECDHE - elliptic-curve Diffie-Hellman with ephemeral (per-session, freshly random) exponents - because it is faster at equivalent security and delivers forward secrecy: if the server's long-term key leaks later, past sessions remain safe because their ephemeral secrets were discarded. Static DH, where exponents never change, lacks this property and is deprecated. Parameter hygiene matters too: small or non-prime p, or weak generators, invite known attacks; implementations verify group parameters. When Unit III shows the TLS handshake, this section is the mathematics inside its key-exchange step.",
            ],
            bullets: [
              "Public setup: prime p and generator g; private values a and b stay with their owners.",
              "Exchange: A = g^a mod p and B = g^b mod p; shared secret = g^(ab) mod p.",
              "Worked example: p=23, g=5, a=6, b=15 gives A=8, B=19 and shared secret 4.",
              "Security rests on the discrete logarithm problem: recovering a from A is infeasible for large p.",
              "Man-in-the-middle attack: DH alone authenticates nobody; sign the exchange or use certificates.",
              "ECDHE = elliptic-curve DH with ephemeral exponents: faster and forward-secret.",
              "Forward secrecy: past sessions stay confidential even if a long-term key later leaks.",
            ],
            codeExample: {
              language: "python",
              caption: "The p=23, g=5 exchange simulated end to end.",
              code: `# Diffie-Hellman key exchange with p=23, g=5 (textbook example)
p, g = 23, 5
a, b = 6, 15                   # Alice's and Bob's private values

A = pow(g, a, p)               # 5^6  mod 23 = 8
B = pow(g, b, p)               # 5^15 mod 23 = 19
print("A =", A, " B =", B)     # these travel over the public wire

s_alice = pow(B, a, p)         # 19^6  mod 23 = 4
s_bob   = pow(A, b, p)         # 8^15  mod 23 = 4
print("shared secret:", s_alice, s_bob)
assert s_alice == s_bob == 4
# An eavesdropper sees p, g, A, B but must solve a discrete log to get 4.`,
            },
            diagram: {
              kind: "flow",
              title: "Diffie-Hellman over p = 23, g = 5",
              caption:
                "The secret (4) is never transmitted - both sides compute it independently.",
              steps: [
                { label: "Both agree publicly on p = 23, g = 5" },
                { label: "Alice sends A = 5^6 mod 23 = 8", note: "keeps a = 6 private" },
                { label: "Bob sends B = 5^15 mod 23 = 19", note: "keeps b = 15 private" },
                { label: "Alice computes B^a mod 23 = 4" },
                { label: "Bob computes A^b mod 23 = 4", note: "shared secret established" },
              ],
            },
            callout: {
              type: "warning",
              title: "Diffie-Hellman does not authenticate",
              body: "The most frequent exam error is claiming DH alone is 'secure key exchange' full stop. Add the second clause every time: because the exchange is unauthenticated, an active attacker can run two independent exchanges (man-in-the-middle). Authentication comes from signing the exchange with certificates - which is precisely how TLS assembles it.",
            },
            keyTerms: [
              { term: "Discrete logarithm problem", definition: "Recovering a from g^a mod p; computationally infeasible for large prime p and the basis of DH security." },
              { term: "Ephemeral key", definition: "A fresh random exponent generated per session and discarded afterwards." },
              { term: "Forward secrecy", definition: "The property that past session keys remain safe even if long-term keys are later compromised." },
              { term: "Man-in-the-middle attack", definition: "An attacker relaying and altering traffic between two parties who each believe they talk to the other directly." },
            ],
            examQuestions: [
              {
                q: "Explain the Diffie-Hellman key exchange and compute the shared secret for p = 23, g = 5, a = 6, b = 15, showing all modular steps. Then describe the man-in-the-middle attack against unauthenticated DH and the standard fix used in TLS.",
                marks: 7,
                outline: [
                  "State the public parameters p = 23, g = 5 and private choices a = 6, b = 15.",
                  "Compute A = 5^6 mod 23 = 8 via 5^2 = 2, 5^4 = 4.",
                  "Compute B = 5^15 mod 23 = 19.",
                  "Compute the shared secret: B^a = 19^6 mod 23 = 4 and A^b = 8^15 mod 23 = 4.",
                  "Explain why the eavesdropper fails: the discrete logarithm problem.",
                  "Describe the MITM attack: two separate exchanges, two secrets k1 and k2, full relay.",
                  "Give the fix: authenticate the exchange with digital signatures/certificates, as TLS does, ideally with ephemeral ECDHE for forward secrecy.",
                ],
              },
              {
                q: "Define forward secrecy and explain why ephemeral Diffie-Hellman provides it.",
                marks: 3,
              },
              {
                q: "What is the discrete logarithm problem, and on what assumption does DH security rest?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Hash functions and SHA-256",
            body: [
              "A cryptographic hash function maps input of any size to a fixed-size digest - SHA-256 always outputs 256 bits - while acting like a fingerprint of the data. Three properties define it. Preimage resistance: given a digest, finding any input producing it is infeasible (you cannot reverse the fingerprint). Second-preimage resistance: given a specific input, finding a different input with the same digest is infeasible (you cannot swap a document under the same fingerprint). Collision resistance: finding any two inputs sharing a digest is infeasible. Collisions must exist mathematically (infinite inputs, finite outputs), but finding them must be hopeless.",
              "SHA-256 processes the input in 512-bit blocks after padding, chaining each block through a compression function whose state feeds the next block (the Merkle-Damgard construction), starting from fixed public constants. The celebrated avalanche effect means a one-bit input change flips roughly half the output bits, unpredictably. The numbers matter: a 256-bit digest gives 2^256 preimage effort and 2^128 collision effort by the birthday paradox - a collision search over n-bit digests succeeds around 2^(n/2) trials. MD5 (128-bit digest, broken collisions since 2004) and SHA-1 (160-bit, practical collisions demonstrated in 2017) are the cautionary entries; both were retired precisely because their collision bounds fell below 2^64.",
              "The birthday paradox deserves its own worked sentence: with only 23 people, the chance two share a birthday exceeds 50 percent, because pairs grow quadratically. Translated to hashes, an attacker seeking any collision does not need 2^256 work - about 2^128 hash evaluations suffice for 256-bit digests, which is why 'collision resistance' quotes n/2. This also explains why comparing two specific files (second preimage, 2^256) is vastly harder than finding any colliding pair (2^128), a distinction examiners reward when stated explicitly.",
              "Applications follow from the properties. Integrity: publishers publish SHA-256 digests of downloads; any tamper changes the digest visibly. Password storage: systems store salted hashes, never passwords, so a database theft does not reveal credentials - salts defeat precomputed rainbow tables. Digital signatures sign the digest, not the document (cheaper, and the signature covers whatever was hashed). Blockchains chain block hashes, making history tamper-evident; HMAC combines a hash with a key for message authentication. One warning belongs in every answer: plain hashes verify integrity only when the digest arrives through a trusted channel - an attacker who can alter both file and digest defeats an unprotected comparison, which is why keyed hashes (HMAC) or signatures exist.",
            ],
            bullets: [
              "Three properties: preimage resistance, second-preimage resistance, collision resistance.",
              "SHA-256: 256-bit digest, 512-bit blocks, Merkle-Damgard chaining, fixed public constants.",
              "Avalanche: one flipped input bit changes about half the output bits.",
              "Birthday bound: collision search costs about 2^(n/2) = 2^128 for 256-bit digests; preimage costs 2^256.",
              "Broken ancestors: MD5 (collisions since 2004) and SHA-1 (2017) - never sign or verify with them.",
              "Applications: download integrity, salted password storage, signature input, blockchain chaining, HMAC.",
              "Caveat: an unkeyed hash proves nothing against an attacker who can change both file and digest - use HMAC or signatures.",
            ],
            codeExample: {
              language: "python",
              caption: "The avalanche effect demonstrated on a one-character change.",
              code: `# SHA-256 and the avalanche effect
import hashlib

def sha256(text):
    return hashlib.sha256(text.encode()).hexdigest()

m1 = "Pay Alice Rs.1000"
m2 = "Pay Alice Rs.1001"        # one character differs
d1, d2 = sha256(m1), sha256(m2)
print(d1)
print(d2)

diff = sum(a != b for a, b in zip(d1, d2))
print("hex characters differing:", diff, "of 64")
# Roughly half of the 256 output bits flip - impossible to predict
# or to craft a second message with the same digest.`,
            },
            diagram: {
              kind: "pipeline",
              title: "SHA-256 digesting a message",
              caption:
                "Padding, chaining, output - and the avalanche that makes tampering visible.",
              stages: [
                { label: "Message padded to 512-bit blocks" },
                { label: "Blocks chained through compression", note: "Merkle-Damgard" },
                { label: "256-bit digest produced" },
                { label: "One-bit change flips ~half the bits", note: "avalanche" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote the numbers: 256-bit digest, 2^256 preimage work, 2^128 collision work via the birthday paradox, MD5 broken 2004, SHA-1 2017. Examiners scan for exact figures. If asked 'why is a collision inevitable yet useless?', answer that infinite inputs map to finite digests but finding a pair costs 2^128 evaluations.",
            },
            keyTerms: [
              { term: "Cryptographic hash", definition: "A one-way function mapping any input to a fixed-size digest with preimage, second-preimage and collision resistance." },
              { term: "Avalanche effect", definition: "A small input change produces a drastically different digest, with about half the output bits flipping." },
              { term: "Birthday paradox", definition: "Collision probability grows quadratically, so a 256-bit hash offers about 2^128 collision resistance." },
              { term: "Salt", definition: "A random value combined with each password before hashing, defeating precomputed rainbow tables." },
              { term: "HMAC", definition: "A keyed hash construction providing message authentication, not just integrity." },
            ],
            examQuestions: [
              {
                q: "Define the three security properties of a hash function, explain SHA-256's structure and the avalanche effect, and compute why collision resistance for a 256-bit digest is about 2^128. Contrast MD5 and SHA-1 and list three applications of cryptographic hashes.",
                marks: 7,
                outline: [
                  "Define preimage resistance, second-preimage resistance and collision resistance.",
                  "Describe SHA-256: 256-bit output, 512-bit block processing, Merkle-Damgard chaining.",
                  "Explain avalanche with the one-character example: about half the bits flip.",
                  "Apply the birthday paradox: pairs grow quadratically, so collision effort is about 2^(256/2) = 2^128.",
                  "State MD5's 2004 collisions and SHA-1's 2017 collision demonstration; both retired.",
                  "Applications: download integrity, salted password storage, digital-signature input (plus blockchain or HMAC).",
                  "Add the caveat that unkeyed hashes need a trusted digest channel, hence HMAC or signatures.",
                ],
              },
              {
                q: "Why are passwords stored as salted hashes instead of encrypted?",
                marks: 3,
              },
              {
                q: "State the digest sizes of MD5, SHA-1 and SHA-256.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.7",
            title: "Digital signatures, PKI certificates and key management",
            body: [
              "A digital signature is the asymmetric cipher run backwards: the signer hashes the message and encrypts the digest with the private key; verifiers decrypt with the public key and compare against their own hash. Only the private key holder can produce the signature, so the signature simultaneously proves integrity (the hash matches) and non-repudiation (only that key could have signed), and because it covers the hash, any one-bit change breaks verification. Signatures are legally recognized in India under the IT Act's provisions for electronic signatures, which links this section directly to Unit V. RSA-PSS and ECDSA are the practical algorithms; raw RSA signing without hashing or padding is unsafe.",
              "The public key itself must be authenticated - a man-in-the-middle can hand you their own public key claiming it is the bank's. Public key infrastructure solves this with certificates: an X.509 certificate binds an identity (a domain name, an organization) to a public key, signed by a certificate authority. Browsers already trust a small set of root CA public keys shipped with the OS; a presented certificate chains leaf -> intermediate -> root, with each link's signature verified, plus checks for expiry, revocation (CRL or OCSP) and name match. This chain of trust is how https:// connections establish that the key really belongs to the domain.",
              "A worked walkthrough: your browser visits a bank. The server presents a certificate for bank.com signed by an intermediate CA, itself signed by a root CA in the browser's trust store. The browser verifies the root (built-in), the intermediate's signature (by the root's public key), the leaf's signature (by the intermediate's public key), that the name matches bank.com, that dates are valid, and that the certificate is not revoked. Only then does the browser use the leaf's public key for the TLS exchange in Unit III. Expired, self-signed for the wrong name, or revoked certificates each trigger a distinct browser warning - the warnings are the verification failing loudly.",
              "Key management is the unglamorous layer that decides whether any of this works: generation (keys born on the device that uses them, with adequate entropy), distribution (public keys via certificates, symmetric keys via authenticated channels or key-wrapping), storage (HSMs or encrypted keystores; never source code or config files), rotation (periodic re-issuance limits blast radius) and revocation (CRL/OCSP, plus certificate transparency logs catching mis-issuance). History's lesson is sharp: leaks of long-term signing keys and expired certificates still cause major outages and breaches, and a perfect algorithm with sloppy key handling is simply an insecure system. State that sentence - it is the bridge to the management half of the course.",
            ],
            bullets: [
              "Signature = hash the message, encrypt the digest with the private key; verify with the public key.",
              "One signature proves integrity, authenticity and non-repudiation simultaneously.",
              "X.509 certificate: identity + public key + validity + issuer signature; the CA signs it.",
              "Chain of trust: leaf -> intermediate -> root CA pre-trusted by the browser/OS.",
              "Verification checks: signature chain, name match, validity dates, revocation via CRL/OCSP.",
              "Key lifecycle: generation with entropy, distribution, secure storage (HSM), rotation, revocation.",
              "Operational truth: leaked or expired keys cause real outages - algorithm strength is worthless without key discipline.",
            ],
            codeExample: {
              language: "bash",
              caption: "Sign, verify and tamper - the whole signature story in one terminal session.",
              code: `# Digital signatures with OpenSSL: sign a file, verify it, tamper it
echo "Exam hall rules v1" > notice.txt

# 1. Generate a private key and export the public key
openssl genrsa -out priv.pem 2048
openssl rsa -in priv.pem -pubout -out pub.pem

# 2. Sign the file (hash encrypted with the private key)
openssl dgst -sha256 -sign priv.pem -out notice.sig notice.txt

# 3. Anyone with the public key verifies authorship and integrity
openssl dgst -sha256 -verify pub.pem -signature notice.sig notice.txt
# prints: Verified OK

# 4. Change one byte and verification fails
echo "tampered" >> notice.txt
openssl dgst -sha256 -verify pub.pem -signature notice.sig notice.txt
# prints: Verification FAILURE`,
            },
            diagram: {
              kind: "layers",
              title: "Chain of trust in PKI",
              caption:
                "Each layer signs the one below it; the browser verifies upward to the root.",
              layers: [
                { label: "Root CA (offline, in OS trust store)" },
                { label: "Intermediate CA", note: "signs end-entity certificates" },
                { label: "Server certificate", note: "binds domain to public key" },
                { label: "Browser verification", note: "signatures, expiry, revocation, name" },
              ],
            },
            callout: {
              type: "tip",
              title: "Encrypt-versus-sign in one line",
              body: "Students swap the keys constantly. Fix it with two sentences: encrypt with the recipient's public key (only they can read it); sign with your own private key (only you could have made it). The bank's certificate gives you a key to encrypt to the bank; your private key gives the world a way to verify it was you.",
            },
            keyTerms: [
              { term: "Digital signature", definition: "A hash of the message encrypted with the signer's private key, providing integrity, authenticity and non-repudiation." },
              { term: "X.509 certificate", definition: "A CA-signed structure binding an identity to a public key with validity and revocation information." },
              { term: "Certificate authority (CA)", definition: "A trusted party whose signed root key anchors the chain of trust." },
              { term: "OCSP / CRL", definition: "The two revocation-checking mechanisms: online status queries and published revocation lists." },
              { term: "Key rotation", definition: "Periodically replacing keys to limit the damage of any single compromise." },
            ],
            examQuestions: [
              {
                q: "Explain how a digital signature is created and verified, which properties it provides, and why certificates are needed to authenticate public keys. Walk through the browser-to-bank verification of an X.509 chain including revocation checks.",
                marks: 7,
                outline: [
                  "Describe signing: hash the message, encrypt the digest with the private key (RSA-PSS or ECDSA).",
                  "Describe verification: decrypt with the public key, recompute the hash, compare.",
                  "List the properties delivered: integrity, authenticity, non-repudiation.",
                  "Explain the public-key authentication problem: MITM handing out fake keys.",
                  "Define the X.509 certificate and the CA's role in binding identity to key.",
                  "Trace the chain: leaf -> intermediate -> trusted root, checking each signature, name match, validity, revocation (CRL/OCSP).",
                  "Close with key-management practice: generation, storage, rotation, revocation, and why leaked keys defeat strong algorithms.",
                ],
              },
              {
                q: "Why does a digital signature also provide non-repudiation while a MAC does not?",
                marks: 3,
              },
              {
                q: "Name the two standard certificate-revocation mechanisms.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Network and Application Security",
      summary:
        "Defence where data actually travels: firewalls in their three generations, intrusion detection and prevention, VPN tunneling, the TLS handshake step by step, email authentication standards, the web attack trio of SQL injection, XSS and CSRF, the OWASP Top 10, wireless security from WEP's collapse to WPA3, and denial-of-service patterns with their mitigations.",
      chapter: {
        number: "03",
        title: "Securing Networks, Protocols and Web Applications",
        intro:
          "Unit III moves security onto the wire and into the browser. It begins with network perimeter controls - packet-filtering, stateful and application firewalls - then adds detection with IDS/IPS systems and private connectivity with VPN tunneling. The TLS handshake shows cryptography assembled into a working protocol, and email standards SPF, DKIM and DMARC apply the same trust ideas to messages. The second half examines the attacks that dominate real breaches: SQL injection, cross-site scripting, CSRF, the OWASP Top 10 categories, wireless protocols from WEP to WPA3, and the mechanics of distributed denial of service.",
        inOneBreath:
          "Packet-filter firewalls decide on the 5-tuple; stateful firewalls track connection state; application firewalls inspect payload. IDS detects (signature = known patterns, low false positives; anomaly = learned baseline, catches zero-days but noisy), IPS blocks inline. VPNs encapsulate and encrypt packets - IPSec tunnel mode hides the entire original packet. TLS: ClientHello, ServerHello with certificate, key exchange, session keys, Finished messages; TLS 1.3 cuts a round trip. Email trust = SPF (allowed IPs) + DKIM (cryptographic signature) + DMARC (alignment policy). Web attacks: SQL injection via string concatenation (admin' OR '1'='1) defeated by parameterized queries; XSS injects scripts (stored, reflected, DOM) defeated by output encoding; CSRF abuses the browser's automatic cookies, defeated by tokens. WEP's 24-bit IV killed it; WPA2 uses AES-CCMP; WPA3 adds SAE with forward secrecy. DDoS splits into volumetric (mitigated by scrubbing and anycast), protocol (SYN cookies) and application-layer (rate limiting).",
        sections: [
          {
            number: "3.1",
            title: "Firewalls: packet filter, stateful and application",
            body: [
              "A firewall enforces an access policy between network zones. The first generation, the packet filter, examines each packet's 5-tuple - source IP, destination IP, source port, destination port, protocol - and drops or forwards it against static rules. A typical rule set allows inbound TCP 443 to the web server, allows SSH only from the admin subnet, and denies everything else. Packet filters are fast and cheap (implemented in routers), but they are stateless: they cannot tell a legitimate reply packet from an attacker's forged one, because they remember nothing about earlier packets.",
              "Stateful inspection fixed that by tracking connections. The firewall maintains a state table: when an internal host sends a SYN outward, the return SYN-ACK is admitted only because the table shows a pending connection from that host, with matching sequence numbers. This defeats simplistic spoofing and makes rule sets tiny - one outbound rule covers thousands of return flows. Stateful firewalls also add timeouts, connection limits and logging, and they are the default mode of every consumer router and cloud security group today. Their limit is still packet-level thinking: they do not understand what the payload means.",
              "Application-layer firewalls (proxies and next-generation firewalls) understand protocols. An HTTP proxy terminates the client connection, inspects the request - URL, headers, body - and applies policy such as blocking file uploads or stripping known-malicious payloads; a WAF (web application firewall) matches SQL injection and XSS signatures in HTTP traffic. NGFWs add deep packet inspection, user-identity awareness and TLS inspection. The cost is processing depth: inspecting payloads is slower and must be decrypted first. Exam answers should present the three generations as a progression of knowledge: header bits -> connection state -> application semantics.",
              "Architecture completes the picture. Defence in depth places firewalls at the perimeter, between the DMZ and the internal network, and between network segments - a database server should never be reachable directly from the internet. The DMZ pattern hosts public-facing services (web, mail) in an isolated zone so a compromised web server cannot reach internal desktops. The cardinal policy is default deny: every flow not explicitly permitted is dropped, with logging of what was dropped - a silent firewall hides both attacks and misconfigurations. Firewalls are perimeter tools and say nothing about traffic that never crosses them, which is why Unit III continues with detection inside the network.",
            ],
            bullets: [
              "Packet filter: rules on the 5-tuple; fast, stateless, blind to replies versus forgeries.",
              "Stateful inspection: connection state table admits return traffic automatically; blocks spoofed packets.",
              "Application firewall / WAF: understands HTTP; blocks injection payloads, enforces content policy.",
              "NGFW extras: deep packet inspection, identity awareness, TLS inspection.",
              "Defence in depth: perimeter, DMZ, internal segmentation; databases never directly exposed.",
              "DMZ pattern: public services isolated so a compromised host cannot pivot inward.",
              "Default deny with logging: only explicitly permitted flows pass, everything else is recorded.",
            ],
            codeExample: {
              language: "bash",
              caption: "A default-deny iptables ruleset for a web server.",
              code: `# A default-deny packet filter on a web server (iptables)
# 1. Flush old rules and set the default policy to DROP
iptables -F
iptables -P INPUT DROP
iptables -P FORWARD DROP

# 2. Allow established connections and loopback
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -i lo -j ACCEPT

# 3. Allow only what the service needs
iptables -A INPUT -p tcp --dport 80  -j ACCEPT   # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT   # HTTPS
iptables -A INPUT -p tcp --dport 22 -s 10.0.0.0/24 -j ACCEPT  # SSH from LAN

# 4. Log everything else that falls through
iptables -A INPUT -j LOG --log-prefix "DROPPED: "`,
            },
            diagram: {
              kind: "layers",
              title: "Defence in depth around a web application",
              caption:
                "Each firewall layer shrinks what a compromised outer host can reach.",
              layers: [
                { label: "Internet", note: "untrusted" },
                { label: "Perimeter firewall + WAF", note: "filters obvious abuse" },
                { label: "DMZ: web and mail servers" },
                { label: "Internal firewall" },
                { label: "Database on isolated VLAN", note: "no direct internet path" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Comparison questions ask for the three firewall generations. Answer with the information each uses to decide: packet filter = header 5-tuple only; stateful = header plus connection history; application = full payload semantics. Then add one limitation per generation - that structure scores better than listing features.",
            },
            keyTerms: [
              { term: "Packet-filtering firewall", definition: "A stateless device permitting or denying packets by source/destination IP, ports and protocol." },
              { term: "Stateful inspection", definition: "Tracking connection state so return traffic is admitted automatically and spoofed packets are rejected." },
              { term: "WAF", definition: "Web application firewall: inspects HTTP traffic for injection and application-layer attacks." },
              { term: "DMZ", definition: "A network zone holding public-facing servers, isolated from the internal LAN by its own firewall rules." },
              { term: "Default deny", definition: "The policy that all traffic is dropped unless a rule explicitly permits it." },
            ],
            examQuestions: [
              {
                q: "Compare packet-filtering, stateful and application-layer firewalls on the information they use, their speed, and their limitations. Explain the DMZ architecture with a diagram and justify the default-deny policy.",
                marks: 7,
                outline: [
                  "Define the firewall's role: enforcing policy between zones.",
                  "Packet filter: 5-tuple rules, stateless; show a two-line rule example; limitation - cannot distinguish replies from forgeries.",
                  "Stateful: connection state table; explain the SYN/SYN-ACK admission; limitation - no payload understanding.",
                  "Application layer: protocol semantics, proxying, WAF signatures; limitation - slower, needs decryption.",
                  "Draw the DMZ: internet, perimeter firewall, DMZ with web/mail, internal firewall, LAN.",
                  "Explain why public services sit in the DMZ: containment of compromise.",
                  "State default deny plus logging and its justification: silence hides both attacks and errors.",
                ],
              },
              {
                q: "Why can a stateless packet filter not reliably admit only the replies to outbound connections?",
                marks: 2,
              },
              {
                q: "Write (in words) three iptables rules for a server that must serve HTTPS, be SSH-administered only from 10.0.0.0/24, and drop everything else.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "IDS and IPS: signature versus anomaly detection",
            body: [
              "An intrusion detection system (IDS) watches traffic or host activity and raises alerts on suspicious events; an intrusion prevention system (IPS) sits inline and blocks them in real time. The placement difference drives everything: a NIDS (network IDS) taps a mirror port and can afford deep analysis with zero latency risk, while an IPS must decide in microseconds and a false positive breaks legitimate traffic, so its rules are tuned conservatively. HIDS (host-based) versions watch logs, file integrity and process behaviour on one machine, catching what never crosses the network. Detection-first-then-response is also how SIEM pipelines (Unit IV) consume IDS output.",
              "Signature (misuse) detection matches traffic against a database of known attack patterns - a Snort-style rule might match SELECT ... UNION ... in a URL or a specific exploit's byte sequence. Strengths: precise, low false-positive rate, and every alert is explainable ('matched rule 1000002: SQL injection in URI'). Weakness: total blindness to anything not in the database - zero-day exploits and polymorphic malware that mutates its own bytes pass straight through, and the signature feed is in a permanent race with attackers.",
              "Anomaly detection instead learns a statistical baseline - typical bandwidth, ports, protocols, login times, query patterns - and flags significant deviations. This can catch novel attacks: a workstation that suddenly scans the /24, a database that starts exporting gigabytes at 03:00, a user authenticating from a new country. The price is noise: baselines drift as business changes, so anomaly systems produce high false-positive rates and demand tuning, and an attacker who moves slowly (low-and-slow exfiltration) may stay under the threshold. The two approaches are complementary - signature for known threats with precision, anomaly for unknown threats with tolerance for noise - and production systems run both.",
              "Evaluation vocabulary belongs in every answer. A true positive is a real attack caught; a false positive is benign activity flagged (the tuning tax); a false negative is an attack missed (the dangerous failure mode); precision and recall quantify the trade-off. Worked example: an IDS flags 1000 alerts, 100 of which are real attacks - precision 10 percent, an analyst's nightmare - so teams tune rules, whitelist known-good scanners, and correlate alerts in a SIEM before human review. Evasion techniques (fragmentation, encoding, slow requests) motivate the deeper inspection of NGFWs and the behavioural view of anomaly engines, connecting this section forward to the SOC operations of Unit IV.",
            ],
            bullets: [
              "IDS detects and alerts; IPS sits inline and blocks - placement changes the false-positive stakes.",
              "NIDS watches network traffic from a mirror port; HIDS watches logs, integrity and processes on a host.",
              "Signature detection: known patterns, low false positives, explainable alerts, blind to zero-days.",
              "Anomaly detection: learned baseline, catches novel behaviour, high false-positive rate, needs tuning.",
              "The two are complementary and are usually run together with SIEM correlation.",
              "Vocabulary: true/false positive, false negative (the dangerous one), precision and recall.",
              "Worked numbers: 1000 alerts with 100 real attacks gives 10 percent precision - tuning and correlation are mandatory.",
            ],
            codeExample: {
              language: "python",
              caption: "A toy signature-based IDS over HTTP request lines.",
              code: `# Toy signature-based IDS: match suspicious patterns in HTTP requests
SIGNATURES = [
    ("' OR '1'='1", "SQL injection tautology"),
    ("<script>", "XSS script injection"),
    ("../../", "path traversal"),
]

def inspect(request_line):
    for pattern, name in SIGNATURES:
        if pattern.lower() in request_line.lower():
            return "ALERT: " + name
    return "clean"

tests = [
    "GET /login?user=admin' OR '1'='1",
    "GET /index.html",
    "GET /download?file=../../etc/passwd",
]
for t in tests:
    print(inspect(t), "<-", t)`,
            },
            diagram: {
              kind: "compare",
              title: "Two detection philosophies",
              caption:
                "Signature buys precision on known attacks; anomaly buys coverage of unknown ones.",
              left: {
                heading: "Signature (misuse) detection",
                items: [
                  "Matches known attack patterns from a feed",
                  "Low false-positive rate",
                  "Every alert is explainable by rule ID",
                  "Blind to zero-days and polymorphism",
                  "Example: Snort rule matching SQL injection in a URI",
                ],
              },
              right: {
                heading: "Anomaly (behaviour) detection",
                items: [
                  "Learns a statistical baseline and flags deviations",
                  "Can catch novel and zero-day behaviour",
                  "High false-positive rate, needs constant tuning",
                  "Low-and-slow attackers may stay under thresholds",
                  "Example: flagging a sudden database export at 03:00",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "A false negative is worse than a false positive",
              body: "When asked to compare the two detection styles, end with this asymmetry: a false positive wastes an analyst's minutes, but a false negative leaves an attacker inside. That asymmetry is why prevention-tuned IPS rules coexist with noisy anomaly engines and why alerts are correlated in a SIEM rather than read raw.",
            },
            keyTerms: [
              { term: "IDS / IPS", definition: "Intrusion detection raises alerts on suspicious activity; intrusion prevention blocks it inline." },
              { term: "Signature detection", definition: "Matching traffic against known attack patterns; precise but blind to unknown attacks." },
              { term: "Anomaly detection", definition: "Flagging deviations from a learned baseline; broad coverage but noisy." },
              { term: "False negative", definition: "A real attack that the system missed - the most dangerous failure mode." },
              { term: "HIDS / NIDS", definition: "Host-based (logs, files, processes) versus network-based (mirrored traffic) intrusion detection." },
            ],
            examQuestions: [
              {
                q: "Compare signature-based and anomaly-based intrusion detection with two strengths and two weaknesses each. Distinguish IDS from IPS and NIDS from HIDS, define false positive and false negative, and explain why production systems run both detection styles.",
                marks: 7,
                outline: [
                  "Define IDS (detect/alert) versus IPS (inline block) and the latency stakes.",
                  "Define NIDS (mirror port) and HIDS (host logs/integrity).",
                  "Signature strengths: precision, low false positives, explainable rule IDs; weaknesses: no zero-days, feed race.",
                  "Anomaly strengths: novel-attack coverage; weaknesses: false-positive noise, baseline drift, low-and-slow evasion.",
                  "Define false positive, false negative and precision with the 1000/100 example.",
                  "Argue complementarity: known-threat precision plus unknown-threat coverage.",
                  "Close with SIEM correlation and tuning as the operational glue (links to Unit IV).",
                ],
              },
              {
                q: "Why must an IPS be tuned more conservatively than a NIDS?",
                marks: 2,
              },
              {
                q: "Give one attack scenario that a signature IDS misses but an anomaly engine catches.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "VPNs and tunneling",
            body: [
              "A virtual private network creates a secure channel across an untrusted network by encapsulation: the original packet - headers and all - becomes the payload of a new packet, encrypted and authenticated for a tunnel between two endpoints. Employees at a cafe reach the office intranet as if locally attached, and branch offices link as one network over the internet. The security claims are confidentiality (encryption), integrity (authentication of the tunnel), and often access control: the VPN concentrator only admits authenticated users to specific internal subnets. The classic trade-off is trust: after connecting, the VPN host trusts the client machine, which is why zero-trust architectures (Unit V) re-examine this assumption.",
              "IPSec is the standard suite at the network layer, with two protocols: AH (authentication header) provides integrity and origin authentication but no encryption, while ESP (encapsulating security payload) provides encryption plus optional authentication - ESP is what real deployments use. Two modes matter for exams. Transport mode encrypts only the payload and leaves original IP headers visible, suited to host-to-host protection. Tunnel mode encapsulates and protects the entire original packet behind a new IP header whose endpoints are the two security gateways, which is how site-to-site VPNs work: internal addresses become invisible to eavesdroppers, hiding topology as a side benefit.",
              "A worked walk-through of tunnel mode: a branch PC sends a packet to an internal server 10.2.0.5. The branch gateway wraps the whole packet in ESP, encrypts it with keys from IKE (Internet Key Exchange, which typically runs Diffie-Hellman from Unit 2.5 and authenticates the gateways with certificates), and ships it to the head-office gateway's public address. The head-office gateway decrypts, verifies, strips the tunnel header and forwards the original packet inside. On the wire, an observer sees only two gateways exchanging unreadable ESP packets - not who inside talked to whom. Compare this directly with transport mode, where original headers stay readable and only payloads are protected.",
              "SSL/TLS VPNs operate at the transport layer instead, needing no client-side IP stack changes: a browser-based portal or a lightweight client tunnels applications over TLS 443, traversing NATs and firewalls easily - one reason remote-access VPNs moved to TLS. WireGuard, a modern alternative, uses a small curated cryptographic suite (Curve25519, ChaCha20-Poly1305) with a few thousand lines of code, valued for auditability and speed. Common exam comparisons: IPSec tunnel versus transport mode (what is encrypted), site-to-site versus remote access (who the endpoints are), and the observation that a VPN protects transit only - a malware-infected laptop inside the tunnel still endangers the intranet, which is why endpoint hygiene and segmentation remain necessary.",
            ],
            bullets: [
              "VPN = encapsulation + encryption + authentication across an untrusted network.",
              "IPSec protocols: AH (integrity only) versus ESP (encryption plus integrity) - ESP dominates in practice.",
              "Transport mode: payload encrypted, original headers visible, host-to-host use.",
              "Tunnel mode: entire original packet encrypted behind a new gateway-to-gateway header; hides internal topology.",
              "IKE negotiates IPSec keys using Diffie-Hellman and authenticates gateways with certificates.",
              "TLS VPNs tunnel over 443 with no IP-stack changes; WireGuard offers a minimal, fast modern design.",
              "Boundary: a VPN protects the transit path, not the endpoints - infected laptops still menace the intranet.",
            ],
            table: {
              caption: "IPSec tunnel mode versus transport mode - the standard VPN comparison.",
              headers: ["Aspect", "Tunnel mode", "Transport mode"],
              rows: [
                ["What is encrypted", "the entire original IP packet", "only the payload"],
                ["Visible on the wire", "new tunnel headers; internal addresses hidden", "original IP headers remain readable"],
                ["Typical use", "site-to-site: gateway to gateway", "end-to-end: host to host"],
                ["Who implements it", "security gateways at both sites", "the two endpoint hosts themselves"],
                ["Traffic-analysis protection", "strong - topology concealed", "weak - headers reveal endpoints"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "IPSec tunnel mode encapsulation",
              caption:
                "Follow one packet from branch PC to head-office server.",
              stages: [
                { label: "Original IP packet", note: "10.x header + payload" },
                { label: "ESP wraps the whole packet" },
                { label: "Encrypt + authenticate", note: "keys from IKE/DH" },
                { label: "New gateway-to-gateway header added" },
                { label: "Receiver verifies, strips, forwards" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw tunnel mode as a nested-box diagram: outer IP header | ESP header | encrypted (original IP header + payload) | ESP trailer. The examiner checks that the ORIGINAL header is inside the encrypted region - forgetting that detail is the most common lost mark in VPN questions.",
            },
            keyTerms: [
              { term: "Encapsulation", definition: "Wrapping an entire packet as the payload of a new packet for protected transit." },
              { term: "ESP", definition: "Encapsulating security payload: the IPSec protocol providing encryption and authentication." },
              { term: "IKE", definition: "Internet Key Exchange: negotiates IPSec session keys via Diffie-Hellman with certificate authentication." },
              { term: "Site-to-site VPN", definition: "A permanent gateway-to-gateway tunnel joining two networks, usually in tunnel mode." },
              { term: "Remote-access VPN", definition: "A per-user tunnel from a client (often TLS-based) into the corporate network." },
            ],
            examQuestions: [
              {
                q: "Explain VPN tunneling and compare IPSec tunnel mode with transport mode on what is encrypted, typical use and traffic-analysis protection. Describe the ESP encapsulation of a packet from a branch office to head office, including IKE's role, with a diagram.",
                marks: 7,
                outline: [
                  "Define a VPN's three services: confidentiality, integrity, controlled access.",
                  "Explain encapsulation: original packet becomes the payload of a new protected packet.",
                  "Compare modes: transport encrypts payload only with headers visible; tunnel encrypts the entire packet behind new headers.",
                  "Map uses: transport for host-to-host, tunnel for site-to-site gateways.",
                  "Walk through ESP tunnel encapsulation step by step with the nested-box diagram.",
                  "Explain IKE: Diffie-Hellman for keys plus certificates for gateway authentication.",
                  "State the boundary: VPN protects transit, not endpoints; mention TLS VPN/WireGuard as alternatives.",
                ],
              },
              {
                q: "Why does tunnel mode protect better against traffic analysis than transport mode?",
                marks: 2,
              },
              {
                q: "Differentiate AH and ESP in two lines each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "The TLS/SSL handshake step by step",
            body: [
              "TLS (the successor to SSL) assembles Unit II's cryptography into the protocol securing HTTPS. The TLS 1.2 handshake begins with the ClientHello: the browser announces its highest supported version, a list of cipher suites (key-exchange algorithm, cipher, hash), and a random value. The server answers with ServerHello - choosing one suite and sending its own random - plus its certificate chain and, for RSA key transport, its readiness to accept an encrypted premaster secret. Both sides then derive identical session keys from the shared secret and the two random values, guaranteeing fresh keys per session.",
              "Verification sits between the messages: before using the server's public key, the client validates the certificate exactly as in section 2.7 - chain to a trusted root, name matching the domain, validity dates, revocation status. Only then does the client encrypt the premaster secret (RSA key exchange) or run ECDHE, signing the parameters with the server's certificate key. The handshake closes with ChangeCipherSpec and Finished messages: each side sends a MAC over the entire transcript, so a tampered handshake - including a man-in-the-middle attempt - is detected before any application data flows.",
              "TLS 1.3 streamlined this into essentially one round trip: ClientHello carries key shares already, the server replies with its share and the finished transcript, and encryption of application data starts immediately. TLS 1.3 also removed the broken legacy pieces - RSA static key exchange (no forward secrecy), CBC ciphers, RC4, SHA-1, compression - leaving AEAD suites like AES-GCM and ChaCha20-Poly1305 with ECDHE key agreement. The security properties to state in answers: confidentiality and integrity of the channel, server authentication via the certificate chain, freshness via randoms and ephemeral keys, and forward secrecy when ECDHE is used.",
              "A worked failure completes understanding: strip the certificate validation (as some early embedded devices did) and the handshake still 'succeeds' - but a man-in-the-middle simply presents its own certificate, and all the session-key mathematics now secure a channel to the attacker. This is why 'HTTPS' alone is not a security guarantee; certificate validation is the load-bearing step. Operationally, the same logic powers HSTS (forcing browsers onto HTTPS), certificate pinning in mobile apps, and the cipher-suite hardening checkable with openssl - the commands below show exactly what a hardened server should and should not accept.",
            ],
            bullets: [
              "ClientHello: version, cipher suites, random value (and key shares in TLS 1.3).",
              "ServerHello: chosen suite, server random, certificate chain.",
              "Certificate validation before key use: chain, name, dates, revocation - the load-bearing step.",
              "Key exchange: RSA premaster (legacy) or ECDHE (ephemeral, forward-secret).",
              "Both sides derive session keys from the shared secret plus both randoms.",
              "Finished messages MAC the whole transcript, detecting any handshake tampering.",
              "TLS 1.3: one round trip, AEAD-only suites, legacy algorithms removed.",
            ],
            codeExample: {
              language: "bash",
              caption: "Inspecting a live TLS handshake and testing protocol hardening.",
              code: `# Inspect a live TLS handshake from the command line
# 1. Show certificate chain, cipher and protocol version
openssl s_client -connect example.com:443 -brief < /dev/null
#   Protocol version: TLSv1.3
#   Ciphersuite: TLS_AES_256_GCM_SHA384
#   Server certificate: (subject, issuer, expiry)

# 2. Force an old protocol to test whether weak TLS is still accepted
openssl s_client -connect example.com:443 -tls1_1 < /dev/null
# A hardened server answers: "no protocols available" - good.

# 3. Check certificate expiry without a browser
echo | openssl s_client -connect example.com:443 2>/dev/null \\
  | openssl x509 -noout -dates`,
            },
            diagram: {
              kind: "flow",
              title: "TLS 1.2 handshake in six moves",
              caption:
                "Draw client and server as two columns and number the arrows - the classic exam sketch.",
              steps: [
                { label: "ClientHello: versions, suites, random" },
                { label: "ServerHello + certificate + key share" },
                { label: "Client validates the certificate chain" },
                { label: "Key exchange -> premaster secret", note: "RSA or ECDHE" },
                { label: "Both derive identical session keys" },
                { label: "Finished messages MAC the transcript" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The handshake question is drawn, not written. Two columns (client, server), numbered arrows, and labels for each message's contents score full marks. Add the sentence 'certificate verification happens BEFORE the client uses the server's public key' - it is the step examiners specifically look for.",
            },
            keyTerms: [
              { term: "Cipher suite", definition: "The negotiated combination of key-exchange algorithm, bulk cipher and hash used by a TLS session." },
              { term: "Premaster secret", definition: "The value exchanged during the handshake from which both parties derive identical session keys." },
              { term: "Forward secrecy (TLS)", definition: "Guaranteed by ephemeral ECDHE: later leakage of the server's certificate key does not expose past sessions." },
              { term: "AEAD", definition: "Authenticated encryption with associated data, e.g. AES-GCM: confidentiality and integrity in one operation." },
              { term: "HSTS", definition: "HTTP Strict Transport Security: a policy forcing browsers to use HTTPS for the domain." },
            ],
            examQuestions: [
              {
                q: "Describe the TLS 1.2 handshake message by message, indicating what each contains and what is verified. Explain how session keys are derived, why Finished messages matter, and state the improvements TLS 1.3 introduces.",
                marks: 7,
                outline: [
                  "Draw the two-column message diagram: ClientHello (versions, suites, random).",
                  "ServerHello (chosen suite, random) plus certificate chain.",
                  "Client verifies the chain: root trust, name match, dates, revocation.",
                  "Key exchange: RSA premaster secret or ECDHE parameters; note forward secrecy.",
                  "Both derive session keys from the shared secret and both randoms; freshness explained.",
                  "ChangeCipherSpec + Finished: MAC over the transcript detects tampering and MITM.",
                  "TLS 1.3 improvements: one round trip with key shares, AEAD-only suites, removal of RSA key transport, CBC, RC4 and SHA-1.",
                ],
              },
              {
                q: "What exactly fails if a client skips certificate validation but completes the handshake?",
                marks: 3,
              },
              {
                q: "Which TLS 1.3 change guarantees forward secrecy for every connection?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Email security: SPF, DKIM and DMARC",
            body: [
              "SMTP was designed for a trusted internet and authenticates nothing: anyone can open a TCP 25 session and send mail claiming any From address. That forgery underlies phishing (fake bank or exam-cell mails), business email compromise (a 'CEO' ordering a wire transfer) and spam. Three standards, all built on DNS, restore sender trust. They answer different questions, and exam answers should keep them distinct: SPF asks whether the sending IP is authorized, DKIM asks whether the message is cryptographically signed by the domain, and DMARC asks whether either proof aligns with the visible From domain and what to do when it does not.",
              "SPF (sender policy framework) publishes, in a DNS TXT record for the domain, which IP addresses may send its mail: for example 'v=spf1 ip4:203.0.113.0/24 include:_spf.google.com -all'. A receiving server checks the envelope sender's domain, looks up the record, and fails mail from unauthorized IPs. Limitation: SPF validates only the envelope and breaks on forwarding, because the forwarder's IP is not in the original record - a forwarding university alias can legitimately fail SPF. The '-all' versus '~all' distinction (hard fail versus soft fail) controls how strictly receivers treat failures.",
              "DKIM (domainkeys identified mail) attaches a cryptographic signature over selected headers and the body. The sending server signs with a private key; the public key is published in DNS (a TXT record like 's1._domainkey.example.com'), and receivers verify the signature survives transit intact. Because the signature covers the From header, a valid DKIM signature proves the message content and header set genuinely came from the signing domain - even across forwarding hops, unlike SPF. Note the split of trust: the signing key lives on the outbound mail server, so DKIM's strength is the domain's server-side key hygiene.",
              "DMARC (domain-based message authentication, reporting and conformance) ties the two together with the missing policy layer. It checks alignment: does the domain that passed SPF or DKIM match the From header domain users actually see? A _dmarc DNS record sets the policy - p=none (monitor only), p=quarantine (spam-folder failures), p=reject (bounce them) - plus aggregate reports so the domain owner sees who is sending as them. Worked ending for any scenario: a phisher spoofing your university's From domain fails alignment, and with p=reject the receiving Gmail or Outlook simply refuses delivery. The three together are why modern phishing increasingly attacks the human (urgency, links) rather than the headers.",
            ],
            bullets: [
              "SMTP authenticates nothing - header forgery is trivial without these standards.",
              "SPF: DNS TXT record listing authorized sending IPs; validates the envelope sender only.",
              "SPF weakness: forwarding breaks it, since forwarders send from unlisted IPs.",
              "DKIM: server signs headers and body with a private key; public key published in DNS.",
              "DKIM survives forwarding because the signature covers the From header and content.",
              "DMARC: alignment of SPF/DKIM domain with the visible From domain, plus policy p=none/quarantine/reject and reporting.",
              "Worked outcome: spoofed university mail fails DMARC alignment and is rejected by receivers.",
            ],
            table: {
              caption: "Three email standards, three different questions.",
              headers: ["Standard", "What it checks", "Where it lives", "What it cannot do alone"],
              rows: [
                ["SPF", "is the sending IP authorized for the domain?", "DNS TXT record", "fails on forwarded mail"],
                ["DKIM", "is the message signed by the domain's key?", "DNS public key + header signature", "does not say which From is legitimate"],
                ["DMARC", "do SPF or DKIM align with the visible From domain?", "_dmarc DNS TXT policy", "depends on receivers honouring the policy"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "What a receiver does with an inbound message",
              caption:
                "DMARC turns authentication results into a deliverability decision.",
              start: "Inbound mail claims to be from your bank",
              branches: [
                { label: "SPF pass and DKIM valid, aligned with From", outcome: "deliver per DMARC policy", good: true },
                { label: "Authentication fails", outcome: "quarantine or reject per the _dmarc policy", good: false },
                { label: "Passes but not aligned", outcome: "suspicious: legitimate server, spoofed display domain", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "One question per standard",
              body: "Keep the trio straight with their questions: SPF - 'is this IP allowed?'; DKIM - 'is this mail signed?'; DMARC - 'does the proof match what the user sees, and what should I do about it?'. Answers that mix up which standard validates the envelope versus the headers lose the comparison marks.",
            },
            keyTerms: [
              { term: "SPF", definition: "A DNS record listing IP addresses authorized to send mail for a domain; checks the envelope sender." },
              { term: "DKIM", definition: "A cryptographic signature over message headers and body, verifiable via a DNS-published public key." },
              { term: "DMARC", definition: "A policy layer checking alignment of SPF/DKIM with the From domain and instructing receivers to monitor, quarantine or reject." },
              { term: "Phishing", definition: "Fraudulent messages impersonating trusted parties to steal credentials or money." },
              { term: "Envelope sender", definition: "The SMTP-level (MAIL FROM) address, distinct from the user-visible From header." },
            ],
            examQuestions: [
              {
                q: "Explain SPF, DKIM and DMARC: what each checks, where its data lives in DNS, and one limitation of each. Illustrate with the scenario of an attacker spoofing your university's From domain and trace the receiving server's decision.",
                marks: 7,
                outline: [
                  "State the root problem: SMTP authenticates nothing, so From headers are forgeable.",
                  "SPF: DNS TXT with authorized IPs; checks the envelope sender; limitation - forwarding.",
                  "DKIM: private-key signature over headers and body, public key in DNS; survives forwarding; limitation - reveals nothing about which From is user-trusted.",
                  "DMARC: alignment of the passing domain with the visible From; policies p=none, p=quarantine, p=reject; aggregate reports.",
                  "Trace the spoof: attacker's IP not in SPF, no DKIM key, alignment fails.",
                  "Receiver decision: with p=reject the message is bounced; with p=none only reported.",
                  "Conclude: the trio shifts phishing from header forgery to human manipulation.",
                ],
              },
              {
                q: "Why does DKIM keep working across mail forwarders while SPF may fail?",
                marks: 3,
              },
              {
                q: "What DMARC policy value would you set first when deploying, and why not p=reject immediately?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "Web attacks: SQL injection, XSS and CSRF",
            body: [
              "SQL injection exploits string concatenation: when an application builds a query by gluing user input into SQL text, the input changes the query's meaning. The classic tautology: a login query 'SELECT * FROM users WHERE user=\"' + u + \"' AND pass='\" + p + \"'' becomes, with u = admin' --, 'SELECT * FROM users WHERE user='admin' -- AND pass=...' - the comment swallows the password check and logs the attacker in as admin. Worse variants use UNION SELECT to dump other tables or stacked queries to drop data. The 2008 Heartland and numerous breach post-mortems trace directly to this flaw; it is consistently in the OWASP Top 10 and the default 7-mark web-security question.",
              "The fix is structural, not filtering: parameterized (prepared) statements send SQL and data separately, so the driver treats input strictly as values - 'admin' -- becomes a username nobody has, not SQL. Additional layers: least-privilege database accounts (a web app account that cannot DROP tables limits blast radius), ORM query builders, and error handling that never echoes database errors to users (verbose errors reveal table names). Input validation still helps - whitelist formats, length limits - but the exam answer must be precise: escaping and validation reduce risk, parameterization eliminates the vulnerability class.",
              "Cross-site scripting (XSS) injects JavaScript that runs in another user's browser. Stored XSS persists on the server - a profile field containing <script> executes for every visitor, enabling cookie theft (document.cookie sent to the attacker), keylogging or request forgery under the victim's session. Reflected XSS travels in the request: a crafted link whose parameter is echoed unescaped, phished to victims. DOM-based XSS happens client-side when JavaScript writes untrusted data into the page. Defences: output encoding appropriate to context (HTML, attribute, JavaScript), Content-Security-Policy headers restricting script sources, HttpOnly cookies (invisible to document.cookie), and frameworks that auto-escape by default.",
              "Cross-site request forgery (CSRF) abuses the browser's habit of attaching cookies to every request: while logged into the bank, visiting an attacker's page containing <img src=\"http://bank.com/transfer?to=attacker&amount=10000\"> triggers a real transfer with the victim's stolen credentials - the cookies - attached automatically, no script needed. The defence is a CSRF token: a random value the server embeds in forms and verifies on submission; attacker pages cannot read it (same-origin policy) so their forged requests fail. SameSite cookies add a second layer by refusing to travel on cross-site requests. The trio's shared lesson: never trust client-supplied input, and pair every state-changing action with an unforgeable proof of user intent.",
            ],
            bullets: [
              "SQL injection: concatenation lets input alter query structure; admin' -- or ' OR '1'='1 are the classics.",
              "Fix: parameterized statements treat input as data; least-privilege DB accounts and hidden errors limit damage.",
              "XSS types: stored (persists, hits every visitor), reflected (arrives in a crafted link), DOM-based (client-side).",
              "XSS impact: session-cookie theft, keylogging, actions under the victim's identity.",
              "XSS defences: context-aware output encoding, CSP headers, HttpOnly cookies, auto-escaping frameworks.",
              "CSRF: browser auto-attaches cookies to forged requests; no script execution needed.",
              "CSRF defences: per-session random tokens verified server-side, SameSite cookies, same-origin policy as backdrop.",
            ],
            codeExample: {
              language: "python",
              caption: "The vulnerable and the parameterized login, side by side.",
              code: `# Vulnerable vs parameterized login query (sqlite3)
import sqlite3
conn = sqlite3.connect(":memory:")
conn.execute("CREATE TABLE users (user TEXT, pass TEXT)")
conn.execute("INSERT INTO users VALUES ('admin', 's3cret')")

def vulnerable_login(user, pw):
    # DANGER: concatenation lets input change the query's meaning
    q = "SELECT * FROM users WHERE user='" + user + "' AND pass='" + pw + "'"
    return conn.execute(q).fetchall()

def safe_login(user, pw):
    # Parameterized: input is always data, never executable SQL
    q = "SELECT * FROM users WHERE user=? AND pass=?"
    return conn.execute(q, (user, pw)).fetchall()

print(vulnerable_login("admin' --", "x"))  # returns the admin row: bypass!
print(safe_login("admin' --", "x"))        # returns []: attack fails`,
            },
            diagram: {
              kind: "matrix",
              title: "Web attacks mapped by skill and damage",
              caption:
                "Low-skill high-damage is the quadrant automation and training must cover.",
              axes: { x: "Skill required", y: "Damage potential" },
              quadrants: [
                { label: "SQLi with automated tools", note: "top-left: low skill, high damage" },
                { label: "Chained exploits by APT groups", note: "top-right: high skill, high damage" },
                { label: "CSRF on a minor preference page", note: "bottom-left: low skill, low damage" },
                { label: "Exotic side channels on niche stacks", note: "bottom-right: high skill, low damage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The full-marks pattern for 'explain SQL injection with example': (1) show the vulnerable concatenated string, (2) show the injected input and the resulting query, (3) show the parameterized version. Three code lines beat three paragraphs of theory. Add 'OR 1=1' and 'UNION SELECT' as the named variants.",
            },
            keyTerms: [
              { term: "SQL injection", definition: "Crafting input that alters SQL query structure because the application concatenates it into the query string." },
              { term: "Parameterized query", definition: "A prepared statement sending SQL and values separately so input can never change query structure." },
              { term: "Stored / reflected / DOM XSS", definition: "The three XSS flavours: persisted on the server, carried in the request URL, or created client-side by page scripts." },
              { term: "CSRF token", definition: "A per-session random value embedded in forms and verified on submission, unforgeable by third-party pages." },
              { term: "HttpOnly cookie", definition: "A cookie flag making it invisible to JavaScript, blunting XSS session theft." },
            ],
            examQuestions: [
              {
                q: "Explain SQL injection with a concrete vulnerable query and its parameterized fix. Then define stored, reflected and DOM-based XSS with one defence each, and explain CSRF's mechanism and its token countermeasure.",
                marks: 7,
                outline: [
                  "Show the vulnerable concatenation for a login query.",
                  "Inject admin' -- (or ' OR '1'='1) and trace the resulting SQL.",
                  "Show the parameterized statement and explain why the input is inert.",
                  "Add secondary controls: least-privilege DB account, no verbose errors.",
                  "Define the three XSS types with the impact of stolen sessions.",
                  "Defences: output encoding, CSP, HttpOnly cookies.",
                  "Explain CSRF: automatic cookie attachment, forged cross-site request, and the token + SameSite fix.",
                ],
              },
              {
                q: "Why does a CSRF attack not require the attacker's page to execute any script?",
                marks: 2,
              },
              {
                q: "Write the injected input that turns a concatenated login query into a password-less admin login, and explain each character.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.7",
            title: "Wireless security (WEP to WPA3) and denial of service",
            body: [
              "Wireless made attacks physical-free: any laptop in range is 'on the wire'. WEP (1999) failed within a few years for a structural reason: it used RC4 with a short 24-bit initialization vector that repeats after about 16 million packets. The FMS attack (and later far faster variants) recover the shared key from collected IV collisions - minutes of traffic on a busy network, automated in tools like aircrack-ng. WEP also used a shared static key and an integrity check (CRC-32) that was linear and forgeable. The exam sentence: WEP's design mistakes were IV reuse, static keys and a forgeable integrity check; it must never be used, only disabled.",
              "WPA arrived as a stopgap (TKIP on the same RC4 hardware) and WPA2 (2004) as the real fix: AES-CCMP with a per-session key derived through a 4-way handshake between client and access point. WPA2-Personal still had a calculable weakness: an attacker capturing the handshake can brute-force the pre-shared passphrase offline at full speed, so 'password123' falls in seconds while a 20-character random passphrase resists. WPA-KRACK (2017) demonstrated handshake reinstallation flaws patched in vendors' firmware - a reminder that protocol and implementation are separate failure surfaces.",
              "WPA3 (2018) replaces the PSK handshake with SAE (Simultaneous Authentication of Equals, based on Diffie-Hellman): each session uses fresh ephemeral keys, giving forward secrecy, and offline dictionary attacks stop working because every guess requires active interaction with the network (which is rate-limited and detectable). WPA3 also adds Opportunistic Wireless Encryption for open networks (encrypting each client-to-AP link without a shared password). Exam comparisons: WEP = broken IV scheme; WPA/TKIP = deprecated bridge; WPA2-CCMP = the long-term standard; WPA3-SAE = forward secrecy and guess-resistance. Enterprise variants (802.1X/EAP) authenticate users against a RADIUS server instead of a shared passphrase.",
              "Denial of service splits into three families with different mitigations. Volumetric floods (UDP floods, DNS/NTP amplification, the 2018 memcached reflection bursts measured in terabits) exhaust bandwidth; the defence is upstream scrubbing centres, anycast dispersion and limiting amplification (source-address validation, disabling open resolvers). Protocol attacks (SYN floods half-opening TCP tables, ping of death, fragmented packets) exhaust connection state; SYN cookies and firewall rate limits defend. Application-layer attacks (HTTP floods, Slowloris holding sockets open) exhaust expensive backend work; rate limiting, caching, bot detection and autoscaling help. Botnets assembled from Mirai-style IoT devices are the standard attack platform - one reason Unit V covers IoT hardening.",
            ],
            bullets: [
              "WEP flaws: 24-bit IV repeats (~16 million packets), RC4 key recovery (FMS), static shared keys, forgeable CRC-32 integrity.",
              "WPA/TKIP was the RC4-era bridge; deprecated.",
              "WPA2: AES-CCMP, per-session keys via the 4-way handshake; offline dictionary attacks against weak passphrases remain possible.",
              "WPA3: SAE handshake gives ephemeral keys, forward secrecy and resistance to offline guessing; OWE encrypts open networks.",
              "Enterprise wireless uses 802.1X/EAP with RADIUS instead of shared passphrases.",
              "DDoS families: volumetric (scrubbing, anycast), protocol (SYN cookies, rate limits), application-layer (caching, bot detection, autoscaling).",
              "Amplification abuse (DNS, NTP, memcached) is curbed by source validation and closing open resolvers.",
            ],
            table: {
              caption: "Wireless standards from broken to hardened.",
              headers: ["Standard", "Core design", "Verdict"],
              rows: [
                ["WEP (1999)", "RC4 with 24-bit IV, shared static key", "broken in minutes by FMS; disable"],
                ["WPA (2003)", "TKIP stopgap on RC4 hardware", "deprecated"],
                ["WPA2 (2004)", "AES-CCMP, 4-way handshake, per-session keys", "long-term standard; weak passphrases brute-forceable"],
                ["WPA3 (2018)", "SAE handshake, ephemeral keys, forward secrecy", "resists offline dictionary attacks"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two families of denial of service",
              caption:
                "The layer attacked decides the mitigation - bandwidth versus backend work.",
              left: {
                heading: "Volumetric and protocol",
                items: [
                  "UDP floods, DNS/NTP/memcached amplification",
                  "SYN floods exhaust half-open tables",
                  "Measured in Gbps and packets per second",
                  "Mitigated upstream: scrubbing centres, anycast",
                  "SYN cookies and rate limits defend state",
                ],
              },
              right: {
                heading: "Application layer",
                items: [
                  "HTTP floods and Slowloris slow requests",
                  "Low bandwidth, hard to distinguish from users",
                  "Hits expensive backend logic and databases",
                  "Mitigated at the edge: caching, bot detection",
                  "Rate limiting and autoscaling absorb the load",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For WEP, always give the two named mechanisms: the 24-bit IV that repeats and the FMS statistical key-recovery attack. For DDoS, name all three families before describing any mitigation - questions reward the classification as heavily as the countermeasures.",
            },
            keyTerms: [
              { term: "IV reuse (WEP)", definition: "WEP's 24-bit initialization vector repeats after ~16 million packets, enabling RC4 key recovery." },
              { term: "SAE", definition: "Simultaneous Authentication of Equals: WPA3's Diffie-Hellman-based handshake providing forward secrecy." },
              { term: "SYN flood", definition: "A protocol DoS opening countless half-open TCP connections to exhaust server state." },
              { term: "Amplification attack", definition: "Reflecting small requests (DNS, NTP, memcached) into large replies toward the victim." },
              { term: "SYN cookies", definition: "Stateless TCP technique letting servers survive SYN floods without allocating state." },
            ],
            examQuestions: [
              {
                q: "Explain why WEP is insecure (IV size, FMS attack, integrity check), then trace the evolution to WPA2 and WPA3 naming the cipher and handshake each uses. Finally classify denial-of-service attacks into three families with one mitigation each.",
                marks: 7,
                outline: [
                  "WEP mechanics: RC4, 24-bit IV, shared static key, CRC-32 integrity.",
                  "Attack: IV collisions enable FMS statistical key recovery in minutes.",
                  "WPA/TKIP as the RC4 stopgap; deprecated.",
                  "WPA2: AES-CCMP, 4-way handshake, per-session keys; note offline dictionary attacks on weak PSKs.",
                  "WPA3: SAE with ephemeral DH keys - forward secrecy and guess-resistance; mention 802.1X enterprise.",
                  "DDoS classification: volumetric, protocol, application-layer.",
                  "One mitigation per family: scrubbing/anycast, SYN cookies, rate limiting/caching.",
                ],
              },
              {
                q: "Why can a WPA2 passphrase be attacked offline while a WPA3 passphrase cannot?",
                marks: 3,
              },
              {
                q: "Name the amplification protocols abused in record-setting volumetric DDoS attacks.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Security Management",
      summary:
        "Turning technical controls into governance: the policy hierarchy from corporate intent to desk-level procedure, the ISO 27001/27002 standards and NIST CSF functions, risk management with asset identification and the likelihood-impact matrix, business continuity and disaster recovery with RTO and RPO, the incident response lifecycle, and the audit, metrics, awareness and SOC operations that keep it all running.",
      chapter: {
        number: "04",
        title: "Managing Security: Policy, Risk, Response",
        intro:
          "Unit IV treats security as a management discipline rather than a toolkit. It opens with how policy cascades from a signed corporate statement to concrete procedures, anchored by ISO 27001/27002 and the NIST Cybersecurity Framework's five functions. Risk management supplies the decision engine: identify assets, model threats, score likelihood against impact, and choose treatments. Business continuity and disaster recovery quantify resilience through RTO and RPO, the incident response lifecycle shows what happens when controls fail, and audits, metrics, awareness training and SOC operations close the loop of continuous improvement.",
        inOneBreath:
          "Policy cascades corporate intent -> functional/domain policies -> standards and baselines -> procedures, each level narrower and more prescriptive. ISO 27001 certifies the management system (Plan-Do-Check-Act); ISO 27002 is the control catalogue (93 controls in 4 themes, 2022); NIST CSF organizes five functions: Identify, Protect, Detect, Respond, Recover. Risk methodology: identify assets and owners, model threats (STRIDE), rate likelihood x impact on a 5x5 matrix, then mitigate, transfer, avoid or accept. Continuity: BIA drives RTO (how fast service returns) and RPO (how much data may be lost); hot/warm/cold sites trade cost against speed; 3-2-1 backups underpin it. Incident response: preparation, detection and analysis, containment, eradication and recovery, lessons learned - a cycle, not a line. Governance closes with audits (internal/external), metrics (MTTD, MTTR, patch latency, phishing click rate), awareness training and SOC tiers L1-L3.",
        sections: [
          {
            number: "4.1",
            title: "Security policy hierarchy, ISO 27001/27002 and NIST CSF",
            body: [
              "A security policy is management's signed statement of intent - what must be protected and why - and it cascades downward in specificity. At the top sits the corporate policy: brief, durable, applicable to everyone ('information is classified into four levels; unauthorized disclosure is a disciplinary matter'). Below it, functional or domain policies govern areas: acceptable use, remote access, cryptography, incident handling. Below those, standards and baselines fix mandatory technical parameters (minimum password length, hardening baselines for servers), and procedures give step-by-step instructions a new joiner could follow. Guidelines, which are advisory rather than binding, complete the set. Each level answers a different question: why, what, how much, exactly how.",
              "ISO/IEC 27001 is the certifiable standard for an Information Security Management System (ISMS): it specifies how the organization must govern risk through the Plan-Do-Check-Act cycle - plan the scope and risk assessment, do the controls, check with monitoring and management review, act on nonconformities. Certification means an accredited auditor confirmed the ISMS exists and functions. ISO/IEC 27002 is its companion catalogue of controls (the 2022 revision arranges 93 controls into four themes: organizational, people, physical, technological), giving organizations a menu from which to select justified controls. The pairing matters in exams: 27001 is the management framework you certify against, 27002 is the control reference you select from.",
              "The NIST Cybersecurity Framework organizes the same discipline as five functions, recalled by the mnemonic IPDRR: Identify (asset inventory, risk assessment), Protect (access control, training, encryption), Detect (monitoring, anomaly events), Respond (incident handling, communication), Recover (restoration, improvements). Unlike ISO 27001 it is not certifiable; it is a self-assessment and roadmap tool, letting an organization profile its current tier (partial to optimized) and target tier. Many Indian organizations map controls across both: 27002 supplies the control text, CSF supplies the maturity language. Exam answers should state this division of labour rather than presenting the frameworks as rivals.",
              "The workability test binds the hierarchy together: policies fail when they contradict operations, so each level must be reviewed (typically annually or after major incidents), version-controlled, and endorsed at the right altitude - a password standard signed by the CISO, a backup procedure owned by the operations team. Real failures are instructive: organizations with beautiful policies but no enforcement discover the gap during audits, and auditors specifically trace a control from the corporate policy through the standard down to the procedure and its evidence of operation. That trace - policy, standard, procedure, evidence - is exactly the four-layer story an exam answer should tell, and it is the first question in most certification interviews.",
            ],
            bullets: [
              "Hierarchy: corporate policy -> functional/domain policies -> standards and baselines -> procedures; guidelines are advisory.",
              "Each level answers: why (policy), what (domain policy), how much (standard), exactly how (procedure).",
              "ISO 27001: certifiable ISMS built on Plan-Do-Check-Act; audit and certification target.",
              "ISO 27002: control catalogue - 93 controls across organizational, people, physical, technological themes (2022).",
              "NIST CSF: five functions IPDRR - Identify, Protect, Detect, Respond, Recover; self-assessment with current and target tiers.",
              "Division of labour: 27002 provides controls, CSF provides maturity language, 27001 certifies governance.",
              "Lifecycle: annual review, versioning, right-altitude sign-off; auditors trace policy -> standard -> procedure -> evidence.",
            ],
            table: {
              caption: "Three frameworks, three different jobs.",
              headers: ["Framework", "What it is", "How it is used"],
              rows: [
                ["ISO/IEC 27001", "certifiable ISMS standard (PDCA)", "audit and certification of security governance"],
                ["ISO/IEC 27002", "control catalogue: 93 controls, 4 themes", "menu for selecting and justifying controls"],
                ["NIST CSF", "five functions: Identify, Protect, Detect, Respond, Recover", "self-assessment, maturity tiers, roadmap"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The policy hierarchy",
              caption:
                "Broad at the top, prescriptive at the base - each layer cites the one above it.",
              tiers: [
                { label: "Corporate security policy", note: "management intent, signed" },
                { label: "Functional / domain policies", note: "acceptable use, remote access" },
                { label: "Standards and baselines", note: "password minimums, hardening" },
                { label: "Procedures and guidelines", note: "step-by-step how-to" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two distinctions decide the marks: 27001 versus 27002 (management system to certify versus control catalogue to select from) and policy versus procedure (binding intent versus executable steps). If asked to 'write a policy', keep it to intent and scope - writing procedures in a policy answer loses structure marks.",
            },
            keyTerms: [
              { term: "Security policy", definition: "Management's signed statement of security intent, scope and responsibility at the top of the document hierarchy." },
              { term: "ISMS", definition: "Information Security Management System: the PDCA-governed structure ISO 27001 certifies." },
              { term: "Baseline", definition: "A mandatory minimum configuration or parameter set, e.g. server hardening standards." },
              { term: "PDCA cycle", definition: "Plan-Do-Check-Act: the continuous improvement loop at the heart of ISO 27001." },
              { term: "NIST CSF tiers", definition: "Maturity levels (partial to optimized) profiling how completely the five functions are implemented." },
            ],
            examQuestions: [
              {
                q: "Explain the security policy hierarchy with one example at each level. Distinguish ISO 27001 from ISO 27002 and from the NIST CSF, and describe how an auditor would trace a control from corporate policy down to operational evidence.",
                marks: 7,
                outline: [
                  "Draw the pyramid: corporate policy, domain policies, standards/baselines, procedures, guidelines.",
                  "Give a concrete example at each level (classification policy; acceptable-use policy; password standard; backup runbook).",
                  "Define ISO 27001: certifiable ISMS using PDCA; state what certification means.",
                  "Define ISO 27002: control catalogue, 93 controls in 4 themes (2022); used to select controls.",
                  "Define NIST CSF: five IPDRR functions, non-certifiable, tier-based self-assessment.",
                  "Explain the division of labour among the three frameworks.",
                  "Trace the audit: policy clause -> standard parameter -> procedure step -> log or record as evidence.",
                ],
              },
              {
                q: "Why are guidelines advisory while standards are mandatory? One sentence each.",
                marks: 2,
              },
              {
                q: "Name the five NIST CSF functions with one example activity under each.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Risk management methodology and the likelihood-impact matrix",
            body: [
              "Risk management is a repeatable methodology, not an opinion. Step one: identify and value assets - databases, source code, laptops, reputation, and the people who operate them - and assign each an owner, because an asset without an owner has no one accountable for its risk. Step two: identify threats to each asset and the vulnerabilities they could exploit, using structured modelling such as STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege) for software or a simple brainstorm by scenario. Step three: rate likelihood (rare to almost certain) and impact (negligible to severe) on defined scales - the definitions must be written down or two assessors will score the same risk 2 and 4.",
              "The likelihood-impact matrix turns the two ratings into a priority grid. Multiply or look up: a 5x5 matrix classes scores of 20-25 as critical, 12-19 as high, 6-11 as medium, and 1-5 as low. Worked example: SQL injection against the student-results database scores likelihood 4 (internet-facing, no WAF yet) times impact 5 (personal data of thousands, regulatory exposure) = 20 - critical, requiring action this month. Laptop theft scores 3 x 3 = 9 - medium, handled by standard controls. Typosquatting a non-critical domain scores 2 x 2 = 4 - low, accepted with annual review. The matrix's job is not precision but defensible prioritization under limited budgets.",
              "Treatment follows the matrix, using the four options from Unit 1.2: mitigate (controls that cut likelihood or impact), transfer (insurance, contracts), avoid (retire the risky service) and accept (documented sign-off, usually only for low/critical-irrelevant risks). Critical risks demand mitigation before anything else; acceptance of a critical risk should be challenged in review. Each treatment must name its control, its owner and its target date - 'we will look into it' is not a treatment. Residual risk after controls returns to the matrix, and what remains is formally accepted by management, closing the loop that ties risk registers to the policy hierarchy of section 4.1.",
              "The discipline is cyclical: risks are re-assessed annually, after major incidents, and after significant change (new product, new vendor, new regulation). Common failure modes deserve naming in answers: risk registers that are written once and never revisited; scores inflated to win budget or deflated to avoid work; missing treatment owners; and vulnerability scans mistaken for risk assessment - a scan lists weaknesses, but risk assessment weighs them against assets and likelihood. A mature organization can show the chain: asset -> threat -> score -> treatment -> owner -> residual risk -> acceptance, with each link dated and signed. That chain is the 7-mark answer.",
            ],
            bullets: [
              "Methodology: identify assets and owners -> identify threats and vulnerabilities -> rate likelihood and impact -> treat -> monitor.",
              "STRIDE categories: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege.",
              "5x5 matrix classes: 20-25 critical, 12-19 high, 6-11 medium, 1-5 low.",
              "Worked scoring: results-database SQLi = 4 x 5 = 20 (critical); laptop theft 3 x 3 = 9 (medium); typosquat 2 x 2 = 4 (low).",
              "Treatments: mitigate, transfer, avoid, accept - each with a named control, owner and date.",
              "Residual risk is formally accepted by management after controls are applied.",
              "Cycle: annual reassessment plus event-triggered reviews (incidents, new vendors, new regulation).",
            ],
            codeExample: {
              language: "python",
              caption: "A risk register scored by the 5x5 matrix.",
              code: `# Likelihood x impact risk matrix (both rated 1-5)
def classify(score):
    if score >= 20: return "CRITICAL"
    if score >= 12: return "HIGH"
    if score >= 6:  return "MEDIUM"
    return "LOW"

risks = [
    ("SQLi on results DB", 4, 5),   # 20 -> CRITICAL
    ("Laptop theft",       3, 3),   # 9  -> MEDIUM
    ("Typosquat domain",   2, 2),   # 4  -> LOW
]
for name, likelihood, impact in risks:
    print(name, "->", likelihood * impact, classify(likelihood * impact))

# Output:
# SQLi on results DB -> 20 CRITICAL
# Laptop theft -> 9 MEDIUM
# Typosquat domain -> 4 LOW`,
            },
            diagram: {
              kind: "matrix",
              title: "The likelihood-impact matrix with treatment zones",
              caption:
                "Axes run 1 (low) to 5 (high); each quadrant suggests a default treatment.",
              axes: { x: "Likelihood", y: "Impact" },
              quadrants: [
                { label: "Transfer", note: "high impact, unlikely: insurance, contracts" },
                { label: "Avoid or urgent mitigation", note: "high impact, likely: act now" },
                { label: "Accept and monitor", note: "low impact, unlikely: annual review" },
                { label: "Mitigate with cheap controls", note: "low impact, likely: routine fixes" },
              ],
            },
            callout: {
              type: "warning",
              title: "A scan is not an assessment",
              body: "Vulnerability scanners list weaknesses; risk assessment weighs them against asset value and likelihood. Answers that equate the two lose the marks reserved for methodology. Show the full chain - asset, threat, score, treatment, owner, residual acceptance - to demonstrate the discipline.",
            },
            keyTerms: [
              { term: "Asset register", definition: "The inventoried list of information assets with owners and assigned value." },
              { term: "STRIDE", definition: "Threat-model taxonomy: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege." },
              { term: "Risk register", definition: "The living document recording scored risks, treatments, owners and residual acceptance." },
              { term: "Residual risk", definition: "The exposure remaining after controls, formally accepted by management." },
              { term: "Likelihood-impact matrix", definition: "A 5x5 grid converting two ratings into a priority class from low to critical." },
            ],
            examQuestions: [
              {
                q: "Describe the risk management methodology from asset identification to residual-risk acceptance. Construct a 5x5 likelihood-impact matrix with class boundaries, score three example risks, and assign a treatment to each.",
                marks: 7,
                outline: [
                  "List the methodology steps: asset identification, threat modelling, rating, treatment, monitoring.",
                  "Explain asset valuation and ownership; name STRIDE as the modelling tool.",
                  "Draw the 5x5 matrix and state the class boundaries (20-25, 12-19, 6-11, 1-5).",
                  "Score SQLi on the results database: 4 x 5 = 20, critical.",
                  "Score laptop theft: 3 x 3 = 9, medium; and typosquatting: 2 x 2 = 4, low.",
                  "Assign treatments: mitigation (WAF/parameterized queries), mitigation (encryption, remote wipe), acceptance with review.",
                  "Close with the register cycle: owners, dates, annual reassessment, formal acceptance of residual risk.",
                ],
              },
              {
                q: "List the six STRIDE threat categories with a one-line example each.",
                marks: 3,
              },
              {
                q: "Which risk treatment applies when impact is severe but likelihood is rare, and why?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Business continuity, disaster recovery, RTO and RPO",
            body: [
              "Business continuity planning (BCP) asks how the organization keeps functioning during disruption; disaster recovery (DR) is its technical half - restoring IT systems after a disaster. The analysis that drives both is the Business Impact Analysis (BIA): for each critical process, quantify how long it can be down and how much data may be lost before damage becomes unacceptable. Two numbers come out of the BIA and dominate every exam question: RTO (recovery time objective) - the maximum tolerable time from failure to restored service - and RPO (recovery point objective) - the maximum tolerable data loss measured backwards in time from the failure moment.",
              "A worked timeline fixes both definitions. Backups run nightly at 02:00; disaster strikes at 11:00; service is restored at 14:00. The RPO requirement decides whether nightly backups suffice: if the business tolerates losing up to 9 hours of data, it does; if it can lose only 15 minutes, nightly backups fail and log shipping or continuous replication is required - a cost decision driven entirely by RPO. The RTO of 3 hours then dictates infrastructure: a cold site with servers to unpack cannot meet it, but a warm site with replicated data or a cloud failover can. State in answers that RTO drives architecture while RPO drives data-replication frequency.",
              "Recovery sites trade cost against speed and are the classic comparison table. A hot site mirrors production in real time and can take traffic in minutes - highest cost, typically reserved for payment systems. A warm site has hardware and connectivity but data arrives by scheduled shipping or log shipping - hours of RTO. A cold site provides empty equipped space - days of RTO, cheapest. Cloud DR reshapes the economics: infrastructure-as-code lets an organization re-provision into another region quickly, paying only while running. Backup discipline underpins all of it: the 3-2-1 rule - three copies, two media types, one off-site - with restore tests, because an untested backup is a hope, not a plan.",
              "Plans only count if they are rehearsed. DR tests escalate from tabletop walkthroughs to full failover exercises, and findings feed back into the plan - an organization that discovers its restore takes 11 hours instead of the required 3 must either improve replication or renegotiate the RTO with the business. Governance details earn marks: the plan has an owner, contact trees, alternate-site activation criteria, and priority order from the BIA (restore the payment gateway before the intranet wiki). Continuity is a lifecycle, not a document: assess, plan, implement, test, revise - mirroring the PDCA loop of the ISMS in section 4.1.",
            ],
            bullets: [
              "BCP keeps the business running; DR restores the IT that supports it; the BIA quantifies both.",
              "RTO: maximum downtime from failure to restored service - drives architecture choice.",
              "RPO: maximum tolerable data loss measured backwards from failure - drives backup/replication frequency.",
              "Worked timeline: nightly backup at 02:00, disaster at 11:00, restore at 14:00 -> RPO window 9 hours, RTO 3 hours.",
              "Sites: hot (minutes, costliest), warm (hours), cold (days); cloud failover re-provisions via infrastructure as code.",
              "3-2-1 backup rule: three copies, two media, one off-site; untested backups are not a plan.",
              "Testing escalates from tabletop to full failover; findings revise the plan and may renegotiate RTO.",
            ],
            table: {
              caption: "Recovery-site tiers: cost against speed.",
              headers: ["Site type", "Typical RTO", "Typical RPO", "Relative cost"],
              rows: [
                ["Hot site", "minutes", "near zero (synchronous replication)", "highest"],
                ["Warm site", "hours", "up to 1 hour (log shipping)", "medium"],
                ["Cold site", "days", "up to 24 hours (nightly backups)", "lowest"],
                ["Cloud DR", "minutes to hours", "depends on snapshot schedule", "pay per use"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Recovery timeline defining RPO and RTO",
              caption:
                "Mark the two objectives on the timeline - this sketch answers most DR questions.",
              steps: [
                { label: "Steady state: last backup 02:00" },
                { label: "Disaster strikes at 11:00" },
                { label: "RPO window: up to 9 hours of data lost", note: "set backup frequency" },
                { label: "Failover and restore begin", note: "hot/warm/cold site choice" },
                { label: "Service restored at 14:00: RTO = 3 hours" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "RTO and RPO are frequently swapped. Fix the pair: RTO is about TIME (how long the service is dark), RPO is about DATA (how much is lost). Draw the timeline with both arrows pointing backwards from the disaster moment, and attach the worked 02:00/11:00/14:00 example.",
            },
            keyTerms: [
              { term: "BIA", definition: "Business impact analysis: identifies critical processes and quantifies tolerable downtime and data loss." },
              { term: "RTO", definition: "Recovery time objective: the maximum acceptable time from failure to restored service." },
              { term: "RPO", definition: "Recovery point objective: the maximum acceptable data loss, measured as time before the failure." },
              { term: "Hot / warm / cold site", definition: "Recovery-site tiers trading real-time mirroring, partial readiness, or equipped empty space against cost." },
              { term: "3-2-1 rule", definition: "Keep three copies of data on two different media with one copy off-site." },
            ],
            examQuestions: [
              {
                q: "Define RTO and RPO and explain how the BIA produces them. Using a timeline where backups run at 02:00, disaster strikes at 11:00 and service returns at 14:00, compute the implied RPO window and RTO, and recommend a recovery-site tier with justification.",
                marks: 7,
                outline: [
                  "Define BCP versus DR and the role of the BIA.",
                  "Define RTO (time to restore) and RPO (data loss window) precisely.",
                  "Draw the timeline: last backup 02:00, disaster 11:00, restore 14:00.",
                  "Compute: RPO window = 9 hours of potential loss; achieved RTO = 3 hours.",
                  "Discuss: nightly backups satisfy RPO only if the business tolerates ~9 hours of loss; otherwise log shipping/replication.",
                  "Recommend a site tier: warm site or cloud DR for a 3-hour RTO; justify against hot-site cost and cold-site delay.",
                  "Add the 3-2-1 rule, restore testing and plan revision as closing controls.",
                ],
              },
              {
                q: "A process requires RPO of 15 minutes. Why are nightly backups insufficient, and what mechanism meets the requirement?",
                marks: 3,
              },
              {
                q: "State the 3-2-1 backup rule.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "The incident response lifecycle",
            body: [
              "An incident is any event that actually harms or credibly threatens information assets - ransomware detonating, credentials phished, a database exposed. Incident response (IR) is the disciplined process for handling it, standardized in NIST SP 800-61 as a lifecycle. Preparation is the longest phase and happens before anything breaks: playbooks per scenario, logging and alerting in place, contact trees and out-of-band communication (assuming the attacker reads your email), retained forensics support, and rehearsed backups. Organizations that skip preparation improvise during the breach, and improvisation destroys evidence and doubles recovery time.",
              "Detection and analysis begins when a signal arrives - an IDS alert, a user report, an antivirus hit, an anomalous log pattern. The team triages: is it real (many alerts are false positives), what is the scope, which systems and data are affected, and what class of incident is it (maps directly to the Unit I taxonomy)? Accurate scoping matters legally and technically: knowing the attacker's entry point and dwell time decides what must be imaged for evidence and what can simply be patched. This phase feeds management communication: who is informed, when, through which channel, under the notification rules Unit V discusses.",
              "Containment comes next, and it is deliberately split: short-term containment stops the bleeding (isolate the host from the network, disable the compromised account, block the C2 domain) while system backup preserves forensic evidence before cleaning. Eradication removes the cause - delete malware, patch the exploited vulnerability, reset all credentials that could have been observed, close the misconfiguration. Recovery returns systems to production from clean sources (restored images, rebuilt hosts) with heightened monitoring, because attackers commonly re-enter through the same or a neighbouring door; monitoring for recurrence is part of recovery, not an afterthought.",
              "Lessons learned closes the cycle within about two weeks of containment: a blameless post-incident review producing a written report - timeline, root cause, cost, and concrete improvements (a missing patch process, an absent log source, an MFA gap) that feed back into preparation. The lifecycle is a cycle, and the exam diagram should show it as one: preparation -> detection and analysis -> containment -> eradication and recovery -> lessons learned -> (back to) preparation. Worked framing for scenarios: 'a phishing mail led to credential theft' - preparation (MFA, simulations) would have cut likelihood; detection (impossible-travel alert) caught it; containment (disable account) stopped it; lessons learned (mandatory MFA rollout) closes the loop.",
            ],
            bullets: [
              "Incident: an event that actually harms or credibly threatens assets - distinguish from an 'event' or 'alert'.",
              "NIST SP 800-61 lifecycle: preparation, detection and analysis, containment, eradication and recovery, lessons learned.",
              "Preparation: playbooks, logging, contacts, out-of-band comms, forensics retainer, tested backups.",
              "Detection and analysis: triage authenticity, scope, entry point, dwell time, incident class.",
              "Containment: isolate hosts, disable accounts, block C2 - then preserve evidence before cleaning.",
              "Eradication and recovery: remove cause, patch, reset credentials, restore from clean sources with heightened monitoring.",
              "Lessons learned: blameless review within ~2 weeks; findings feed preparation - the loop closes.",
            ],
            codeExample: {
              language: "bash",
              caption: "First triage commands on a suspicious Linux host.",
              code: `# First 10 minutes of incident triage on a suspicious Linux host
# 1. Who is on the box right now?
w
last -20                       # recent logins and reboots

# 2. What is listening and connecting?
ss -tulpn                      # listening sockets with owning process
netstat -plan | grep ESTABLISHED

# 3. What is running and what changed recently?
ps auxf | less                 # process tree, look for odd parents
find /etc /tmp -mtime -1 -type f    # files changed in last 24h

# 4. Preserve evidence before shutting anything down
mkdir -p /tmp/evidence
dmesg > /tmp/evidence/dmesg.txt
cp /var/log/auth.log /tmp/evidence/
sha256sum /tmp/evidence/*      # hash now to prove integrity later`,
            },
            diagram: {
              kind: "cycle",
              title: "The incident response lifecycle",
              caption:
                "Lessons learned feeds preparation - draw the arrow back to the start.",
              steps: [
                { label: "Preparation", note: "playbooks, logging, training" },
                { label: "Detection and analysis", note: "triage and scope" },
                { label: "Containment", note: "isolate, preserve evidence" },
                { label: "Eradication and recovery", note: "remove cause, restore clean" },
                { label: "Lessons learned", note: "report, improve, loop back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Draw the lifecycle as a circle with five labelled segments and one line of activities inside each. Then answer scenario questions by walking the circle: for ransomware, name the containment action (isolate, power down only after imaging), the eradication (patch the entry vulnerability), and the recovery (restore from offline backups).",
            },
            keyTerms: [
              { term: "Incident", definition: "An event that actually harms or credibly threatens information assets, triggering the response process." },
              { term: "Playbook", definition: "A pre-written, scenario-specific response procedure used during preparation and execution." },
              { term: "Containment", definition: "Short-term actions stopping incident spread while preserving forensic evidence." },
              { term: "Eradication", definition: "Removing the root cause: malware, exploited vulnerability, compromised credentials." },
              { term: "Post-incident review", definition: "The blameless lessons-learned report produced within about two weeks, feeding improvements back into preparation." },
            ],
            examQuestions: [
              {
                q: "Describe each phase of the incident response lifecycle with its key activities. Apply the lifecycle to a ransomware outbreak, naming one concrete action per phase, and explain why lessons learned is drawn as a loop back to preparation.",
                marks: 7,
                outline: [
                  "Define incident versus alert/event; introduce NIST SP 800-61.",
                  "Preparation: playbooks, logging, contacts, out-of-band comms, tested backups.",
                  "Detection and analysis: triage, scope, entry point, dwell time.",
                  "Containment: isolate host, disable accounts, block C2; image before cleaning.",
                  "Eradication and recovery: patch the vulnerability, reset credentials, restore from offline backups, heightened monitoring.",
                  "Lessons learned: blameless review, written report, cost and root cause, concrete improvements.",
                  "Explain the loop: improvements land in preparation, so the next incident is cheaper and faster.",
                ],
              },
              {
                q: "Why must forensic imaging happen before a compromised host is cleaned or reimaged?",
                marks: 3,
              },
              {
                q: "Name three artifacts a preparation phase must have in place before any incident.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Security audit, metrics, awareness training and SOC operations",
            body: [
              "Auditing is the evidence layer of governance. Internal audits are performed by the organization's own team against its policies and chosen controls; external audits (including ISO 27001 certification assessments) provide independent assurance for customers and regulators. Auditors trace controls to evidence: a password standard must appear in configuration, a backup procedure in restore logs, an access review in signed records. Complementing audits, vulnerability assessment runs scans and reviews configurations on a schedule, while penetration testing goes further - authorized, scoped attack simulation that demonstrates exploitability. The distinction matters in answers: a scan finds weaknesses, a pentest proves they work, an audit proves the management system operates.",
              "Metrics make security visible to management. Useful ones include MTTD (mean time to detect - how long attackers roam unnoticed), MTTR (mean time to respond/recover), patch latency (days from vendor release to deployment, tracked separately for criticals), phishing simulation click rate (the awareness trend line), coverage of MFA, and the number of assets outside the asset register. Good metrics are trended over time and tied to targets - 'patch latency for critical vulnerabilities under 14 days' - because a snapshot without a trend answers no management question. Bad metrics are equally instructive: counting blocked attacks rewards noisy blocking, and vanity totals (millions of events processed) measure cost, not security.",
              "Security awareness training addresses the human layer, where most breaches begin. Effective programmes are role-based (developers get secure-coding sessions, finance gets payment-fraud training, everyone gets phishing basics), frequent rather than annual marathons, and measured - simulated phishing campaigns track click and report rates per department, and the goal is a rising report rate, not just a falling click rate, since reporting is the behaviour that actually triggers response. Positive reinforcement outperforms blame: a culture where staff confess mistakes within minutes is worth more than any single control, and it connects directly to the lessons-learned culture of section 4.4.",
              "The Security Operations Center (SOC) is where detection becomes response. Its pipeline ingests logs into a SIEM, correlates them into prioritized alerts, and escalates through tiers: Tier 1 triages alerts (is it real, how severe), Tier 2 investigates (scope, contain), Tier 3 hunts threats and performs forensics on the hardest cases; SOAR automation handles the repetitive enrichment (look up the IP, isolate the host) so analysts think instead of copy-paste. The 24x7 roster, escalation SLAs, and documented handovers are operational detail examiners accept as a sentence. Tie the section together in closing: audit proves the system, metrics measure it, training strengthens its people, and the SOC runs it every day - the four pillars that make Unit IV's management real.",
            ],
            bullets: [
              "Internal audit: own team vs policy; external audit/certification: independent assurance.",
              "Auditors trace policy -> standard -> procedure -> evidence of operation.",
              "Vulnerability assessment finds weaknesses; penetration testing proves exploitability under authorization.",
              "Metrics: MTTD, MTTR, critical patch latency, phishing click/report rate, MFA coverage - trended against targets.",
              "Awareness training: role-based, frequent, measured by simulations; rising report rate is the goal.",
              "SOC tiers: L1 triage -> L2 investigation -> L3 threat hunting; SIEM correlates, SOAR automates.",
              "Closing synthesis: audit proves, metrics measure, training strengthens, SOC operates.",
            ],
            table: {
              caption: "Security metrics that management actually reads.",
              headers: ["Metric", "Question it answers", "Healthy target"],
              rows: [
                ["MTTD", "how fast do we notice compromise?", "under 30 minutes for high-severity alerts"],
                ["MTTR", "how fast do we contain and recover?", "under 4 hours"],
                ["Critical patch latency", "how old are open critical vulnerabilities?", "deployed within 14 days"],
                ["Phishing report rate", "is awareness training changing behaviour?", "rising quarter over quarter"],
                ["MFA coverage", "what share of accounts have a second factor?", "100 percent of external-facing accounts"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "SOC escalation tiers",
              caption:
                "Alerts enter at the base and escalate only as far as their severity requires.",
              tiers: [
                { label: "Tier 3: threat hunting and forensics" },
                { label: "Tier 2: investigation and containment" },
                { label: "Tier 1: alert triage", note: "real or false positive?" },
                { label: "Tooling base: SIEM, EDR, SOAR", note: "log collection, correlation, automation" },
              ],
            },
            callout: {
              type: "tip",
              title: "Metrics need trends, not snapshots",
              body: "Whenever asked to 'suggest security metrics', attach a target and a direction to each number - patch latency under 14 days and falling, report rate rising. A bare number tells management nothing; a trended metric against a target is what turns the SOC into a governed function.",
            },
            keyTerms: [
              { term: "Internal / external audit", definition: "Self-performed assurance against policy versus independent assurance for customers and regulators." },
              { term: "Penetration test", definition: "An authorized, scoped simulated attack demonstrating whether vulnerabilities are exploitable in practice." },
              { term: "MTTD / MTTR", definition: "Mean time to detect and mean time to respond/recover - the two core operational speed metrics." },
              { term: "SIEM", definition: "Security information and event management: centralized log collection, correlation and alerting." },
              { term: "SOAR", definition: "Security orchestration, automation and response: automated enrichment and containment actions in the SOC." },
            ],
            examQuestions: [
              {
                q: "Explain the difference between vulnerability assessment, penetration testing and security audit. Propose four security metrics with targets, describe the design of an effective awareness-training programme, and outline SOC tier operations.",
                marks: 7,
                outline: [
                  "Define vulnerability assessment: scheduled scanning and configuration review, finds weaknesses.",
                  "Define penetration testing: authorized simulated attack, proves exploitability; note scoping and rules of engagement.",
                  "Define audit: traces policy -> procedure -> evidence; internal versus external/certification.",
                  "Metrics: MTTD, MTTR, critical patch latency, phishing report rate - each with a target and a trend.",
                  "Awareness design: role-based content, frequent short sessions, simulated campaigns, positive reporting culture.",
                  "SOC tiers: L1 triage, L2 investigation, L3 hunting; SIEM correlation and SOAR automation.",
                  "Synthesize: audit proves, metrics measure, training strengthens people, SOC operates daily.",
                ],
              },
              {
                q: "Why is a rising phishing report rate a better training outcome than only a falling click rate?",
                marks: 3,
              },
              {
                q: "Name the three SOC analyst tiers and the one-sentence job of each.",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Legal, Ethical and Emerging Issues",
      summary:
        "Where security meets society: the Indian IT Act 2000 and its amendment landscape, cybercrime categories and penalties, intellectual property in cyberspace, privacy and data protection principles, the basics of computer forensics and the chain of custody, professional ethics codes, and the emerging security questions of cloud, IoT, AI, zero trust and post-quantum cryptography.",
      chapter: {
        number: "05",
        title: "Law, Ethics and the Emerging Frontier",
        intro:
          "Unit V situates the technology in its legal and ethical frame. It surveys the Indian IT Act 2000 with its 2008 amendment - objectives, cybercrime categories and the well-known penalty sections - then covers intellectual property in cyberspace and privacy principles from consent to data minimization. Computer forensics explains how digital evidence survives a courtroom, ethics codes define professional duty, and the closing sections examine security in cloud, IoT and AI systems alongside zero-trust architecture and post-quantum cryptography, finishing with the case studies that tie law, ethics and engineering together.",
        inOneBreath:
          "The IT Act 2000 (amended 2008) gives legal recognition to electronic records and signatures, creates cybercrime categories - offences against computer systems (unauthorized access, damage: sections 43 and 66 overview) and offences against persons (identity theft 66C, cheating by personation 66D, obscene content 67) - and routes compensation disputes to an adjudicating officer with appeals to the Cyber Appellate Tribunal. IPR splits into copyright (code and media, automatic), patent (novel methods), trademark (brands, typosquatting) and trade secrets. Privacy rests on consent, purpose limitation, data minimization and security safeguards - reflected in IT Act section 43A, the SPDI Rules 2011 and the DPDP Act 2023. Forensics follows the order of volatility, images with write blockers, hashes everything and maintains the chain of custody. Ethics codes (ACM/ISC2) make professionals accountable. Cloud shifts responsibility per the shared-responsibility model; IoT fails on default passwords (Mirai); AI adds adversarial inputs and data poisoning; zero trust replaces perimeter trust; post-quantum cryptography pre-empts Shor's algorithm breaking RSA/ECC.",
        sections: [
          {
            number: "5.1",
            title: "The Indian IT Act 2000: objectives, cybercrimes and penalties",
            body: [
              "The Information Technology Act, 2000 was India's first dedicated law for the digital world, enacted to give legal recognition to electronic records and digital signatures so that e-commerce, e-governance and electronic contracts could stand in court. It created the framework for certifying authorities that issue digital signature certificates and defined the liabilities of network service providers. The 2008 amendment broadened the Act substantially: it added new offences (identity theft, cyberterrorism), recognized electronic signatures beyond specific crypto techniques, and strengthened intermediary liability rules with safe-harbour conditions for platforms. Exam answers should present the Act's two halves: facilitation of electronic transactions and regulation of computer misuse.",
              "Cybercrimes divide into two families. Offences against computer systems and data target the machine: unauthorized access to a computer or network, unauthorized copying or downloading of data, introduction of viruses or contaminants, denial of service, and damage to source code. Offences against persons use computers as the weapon: identity theft (misusing passwords or biometric identifiers), cheating by personation using computer resources (fake profiles, phishing scams), cyberstalking and harassment, publishing obscene or sexually explicit material electronically, and violation of privacy (intercepting or disclosing someone's data without consent). Cyberterrorism - using a computer to threaten the unity, security or sovereignty of India - sits in the most serious tier with correspondingly heavier penalties.",
              "The Act's best-known provisions, in overview style appropriate for exams, include: section 43, which makes unauthorized access, downloading, virus introduction and damage civilly punishable with compensation to the affected party; section 65, covering tampering with computer source documents; section 66, the computer-related offences clause applying where acts under 43 are done dishonestly or fraudulently, with imprisonment typically up to three years and/or fine; sections 66C and 66D on identity theft and cheating by personation; and section 67 on publishing obscene material electronically, with escalating penalties for subsequent convictions. Section 43A (from the 2008 amendment) imposes compensation liability for negligence in protecting sensitive personal data - the bridge to privacy in section 5.3. Quote these at overview level; do not fabricate finer subsection details.",
              "Enforcement structure completes the picture. Compensation matters are heard by an adjudicating officer (not below the rank of a secretary to government), appeals go to the Cyber Appellate Tribunal, and criminal offences proceed through ordinary courts with investigation by police and specialized cybercrime cells. Practical realities worth one exam sentence: jurisdiction is difficult when attacker, victim and servers sit in different countries, evidence is volatile and must be preserved with forensic discipline (section 5.4), and awareness remains low - the Act's mechanism only works when victims report. The Act also interacts with sectoral rules, notably the 2011 SPDI Rules and the 2023 DPDP Act, which refine the privacy duties the IT Act introduced.",
            ],
            bullets: [
              "Act of 2000: legal recognition of electronic records and digital signatures; certifying-authority framework for e-commerce and e-governance.",
              "2008 amendment: new offences (identity theft, cyberterrorism), electronic signatures, refined intermediary liability.",
              "Two crime families: offences against computer systems (access, data theft, viruses, DoS) versus offences against persons (identity theft, personation, obscene content, privacy violation).",
              "Overview sections: 43 (compensation for unauthorized access/damage), 65 (source-code tampering), 66 (dishonest computer offences), 66C/66D (identity theft, personation), 67 (obscene content).",
              "Section 43A: compensation liability for negligent protection of sensitive personal data.",
              "Enforcement: adjudicating officer for compensation, Cyber Appellate Tribunal for appeals, cybercrime cells for investigation.",
              "Challenge sentence: cross-border jurisdiction, volatile evidence, and under-reporting limit practical enforcement.",
            ],
            table: {
              caption: "Well-known IT Act provisions in overview - sufficient detail for exams.",
              headers: ["Provision (overview)", "What it covers", "Typical consequence"],
              rows: [
                ["Section 43", "unauthorized access, data theft, virus introduction, damage", "compensation payable to the affected party"],
                ["Section 65", "tampering with computer source documents", "imprisonment and/or fine"],
                ["Section 66", "computer-related offences done dishonestly or fraudulently", "imprisonment up to 3 years and/or fine"],
                ["Sections 66C / 66D", "identity theft; cheating by personation using computer resources", "imprisonment and/or fine"],
                ["Section 67", "publishing obscene material electronically", "escalating penalties on repeat conviction"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "How a cyber complaint travels under the IT Act",
              caption:
                "Compensation and criminal routes are separate - draw both lanes.",
              steps: [
                { label: "Victim files complaint", note: "cybercrime portal or police cell" },
                { label: "Evidence preserved", note: "imaged and hashed (see 5.4)" },
                { label: "Compensation route: adjudicating officer" },
                { label: "Appeals: Cyber Appellate Tribunal" },
                { label: "Criminal route: police investigation, then court" },
              ],
            },
            callout: {
              type: "warning",
              title: "Quote sections in overview only",
              body: "Examiners accept 'section 43 overview - compensation for unauthorized access and damage' style answers. They penalize invented subsection numbers and invented sentence lengths. Stick to the six provisions above plus the 43A privacy clause, and hedge penalties with 'typically' unless the question supplies the text.",
            },
            keyTerms: [
              { term: "IT Act 2000", definition: "India's foundational law giving legal validity to electronic records and signatures and criminalizing computer misuse." },
              { term: "Certifying authority", definition: "A licensed body issuing digital signature certificates under the Act's PKI framework." },
              { term: "Intermediary liability", definition: "Rules (strengthened in 2008) defining when platforms are protected by safe harbour and when they must act on unlawful content." },
              { term: "Adjudicating officer", definition: "The authority hearing compensation claims under the Act, with appeals to the Cyber Appellate Tribunal." },
              { term: "Cyberterrorism", definition: "The gravest Act offence: using computers to threaten India's unity, security or sovereignty." },
            ],
            examQuestions: [
              {
                q: "State the objectives of the IT Act 2000 and the changes the 2008 amendment introduced. Classify cybercrimes into offences against computer systems and offences against persons with two examples each, and summarize the penalties under sections 43, 65, 66, 66C/66D and 67 in overview.",
                marks: 7,
                outline: [
                  "Objectives: legal recognition of e-records and digital signatures, enabling e-commerce and e-governance; certifying authorities.",
                  "Amendment 2008: identity theft and cyberterrorism offences, electronic signatures, intermediary safe-harbour refinements.",
                  "Family one: offences against systems - unauthorized access, data theft, viruses, DoS, source damage.",
                  "Family two: offences against persons - identity theft, personation, obscene publication, privacy violation.",
                  "Overview of 43 (compensation), 65 (source tampering), 66 (dishonest offences, up to ~3 years), 66C/66D, 67 (obscenity, escalating).",
                  "Mention 43A compensation for negligent data protection as the privacy bridge.",
                  "Describe enforcement: adjudicating officer, Cyber Appellate Tribunal, cybercrime cells; note jurisdiction challenges.",
                ],
              },
              {
                q: "Which IT Act provision deals with compensation for negligent protection of sensitive personal data?",
                marks: 2,
              },
              {
                q: "A fake profile cheats an investor of money. Name the applicable offence category and the overview section.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "Intellectual property rights in cyberspace",
            body: [
              "Intellectual property law protects creations of the mind, and cyberspace multiplies both the creations and the ways to steal them. Copyright protects the expression of ideas fixed in code, text, music or images - it arises automatically on creation and covers software source code, website content, e-books and media files. Online infringement is volume business: pirated software and films on torrents, scraped course content reposted on other sites, GPL-licensed code embedded in proprietary products without complying with the licence. Software licensing bridges law and engineering: proprietary EULAs grant usage rights, while open-source licences (permissive MIT/Apache versus copyleft GPL) impose different redistribution duties that developers must actually understand before shipping.",
              "Patents protect inventions - novel, non-obvious, industrially useful methods and products - for a limited term (about 20 years in India). In software the patent question is famously contentious: Indian law excludes algorithms and business methods as such under section 3(k) of the Patents Act, though inventions with technical effect can qualify, which makes 'can software be patented?' a nuanced exam answer rather than a yes/no. Trade secrets protect confidential business information - source code under NDA, algorithms, customer lists - through contracts and access control rather than registration; their loss is typically an insider or exfiltration story, which is why NDAs and least-privilege access are trade-secret controls as much as security controls.",
              "Trademarks protect brand identifiers - names, logos, domain-adjacent marks - and cyberspace generates distinctive abuse patterns. Cybersquatting registers domains matching famous brands to sell them back or harvest traffic; typosquatting registers misspellings (a zero instead of an o in a bank's domain) to phish customers; meta-tag abuse stuffs another's trademark into page keywords. Remedies include the UDRP arbitration process for domain disputes and ordinary infringement suits. Worked example chain: a phisher registers your university's domain with a lookalike character, hosts a fake fee-payment page, and infringes the trademark while committing cheating under the IT Act - two laws, one crime scene, which is the exact integration examiners reward.",
              "The enforcement landscape ties the topic together. WIPO administers international treaties; TRIPS sets minimum IP standards that WTO members implement; India enforces through the Copyright Act 1957 (amended 2012), the Patents Act 1970, the Trade Marks Act 1999, plus IT Act provisions for digital infringement. Emerging exam themes: DRM (technological protection measures whose circumvention is itself illegal), the tension between copyright enforcement and fair dealing for education and research, and the AI-era question of who owns machine-generated content and whether training on copyrighted data infringes - open questions that show IPR is a moving frontier. A good closing sentence: IP protection is also a security activity - leak prevention, licence compliance and brand monitoring are part of the security team's job.",
            ],
            bullets: [
              "Copyright: automatic protection of expression fixed in code, text or media; software piracy and licence violation are its cyber cases.",
              "Open-source licences: MIT/Apache permissive versus GPL copyleft - redistribution duties differ and must be complied with.",
              "Patent: novel, non-obvious, useful invention, ~20-year term; Indian section 3(k) excludes algorithms and business methods as such.",
              "Trade secret: confidential know-how protected by NDAs and access control, not registration.",
              "Trademark abuses: cybersquatting, typosquatting, meta-tag stuffing; UDRP arbitration for domain disputes.",
              "International frame: WIPO treaties, TRIPS minimums; Indian statutes: Copyright Act 1957, Patents Act 1970, Trade Marks Act 1999.",
              "Integration example: a lookalike domain phishing page is simultaneously trademark infringement and IT Act cheating.",
            ],
            table: {
              caption: "The four IP rights and their cyberspace faces.",
              headers: ["Right", "Protects", "Cyberspace example", "Typical remedy"],
              rows: [
                ["Copyright", "expression fixed in code or media", "torrented paid IDE; scraped course content", "takedown, damages"],
                ["Patent", "novel, non-obvious technical invention", "a patented compression method copied in a rival product", "injunction, damages"],
                ["Trademark", "brand identifiers", "typosquatting a bank's domain for phishing", "UDRP, infringement suit"],
                ["Trade secret", "confidential business know-how", "exfiltrated source code by a departing employee", "NDA breach action"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing protection for a new software product",
              caption:
                "One product usually needs several of these rights simultaneously.",
              start: "A new software product ships",
              branches: [
                { label: "Code and media", outcome: "copyright applies automatically on creation", good: true },
                { label: "Brand and domain", outcome: "register the trademark; watch for typosquats", good: true },
                { label: "Novel technical method", outcome: "consider a patent application (mind section 3(k))", good: true },
                { label: "Internal know-how", outcome: "keep as trade secret: NDAs plus access control", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The classic question is 'explain IPR in cyberspace' - answer with the four rights, one cyber example each, and one Indian statute each. Add the section 3(k) nuance for software patents; a bare 'software cannot be patented' is the answer examiners mark down.",
            },
            keyTerms: [
              { term: "Copyright", definition: "Automatic protection of fixed expression, including software code and digital media." },
              { term: "Copyleft (GPL)", definition: "A licence family requiring derivative works to carry the same open licence and source availability." },
              { term: "Typosquatting", definition: "Registering misspelled lookalike domains of famous brands to intercept traffic or phish." },
              { term: "Trade secret", definition: "Valuable confidential business information protected by secrecy measures rather than registration." },
              { term: "UDRP", definition: "The WIPO arbitration process for resolving abusive domain-name registrations." },
            ],
            examQuestions: [
              {
                q: "Explain the four intellectual property rights with one cyberspace example and one Indian statute each. Discuss whether software can be patented in India, and describe how a typosquatting phishing page violates two laws at once.",
                marks: 7,
                outline: [
                  "Copyright: automatic, covers code and media; Copyright Act 1957; piracy and licence violation examples.",
                  "Patent: invention test, ~20 years; Patents Act 1970; section 3(k) excludes algorithms and business methods as such - technical-effect inventions may qualify.",
                  "Trademark: brand identifiers; Trade Marks Act 1999; cybersquatting and typosquatting; UDRP.",
                  "Trade secret: NDAs and access control; source code and customer lists.",
                  "Open-source licence duties: permissive versus copyleft.",
                  "Worked integration: lookalike domain hosts fake payment page - trademark infringement plus IT Act cheating.",
                  "Frame internationally with WIPO and TRIPS; note DRM and AI-era ownership questions.",
                ],
              },
              {
                q: "Differentiate permissive (MIT) and copyleft (GPL) open-source licences in two lines each.",
                marks: 3,
              },
              {
                q: "What is cybersquatting and which dispute-resolution process handles it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Privacy and data protection",
            body: [
              "Privacy in information security means control over personal data: who collects it, for what purpose, who sees it, how long it lives, and how it is destroyed. The principles are converging worldwide into a recognizable canon: consent (processing only for purposes the person agreed to, informed and specific), purpose limitation (data collected for one purpose is not silently repurposed), data minimization (collect and keep only what the task needs), storage limitation (retention schedules with deletion), accuracy, security safeguards (encryption, access control - the IT Act 43A duty), and accountability (a named data controller answerable for compliance). These principles are not decoration: each one maps to a concrete engineering decision, from form-field design to retention cron jobs.",
              "India's legal stack runs in three layers. The IT Act 2000's section 43A (2008 amendment) makes a body corporate liable to compensate for negligent handling of sensitive personal data; the SPDI Rules 2011 operationalize it - reasonable security practices, a published privacy policy, and consent for collecting sensitive personal data such as passwords, health records or financial information. The Digital Personal Data Protection Act, 2023 then modernizes the framework: consent-based processing with notice obligations, duties of data fiduciaries (the organizations holding data), special protections for children's data, rights of individuals to access, correction and erasure, and penalties for breaches. Exams at this level expect the layering - 43A plus SPDI Rules plus DPDP Act 2023 - more than clause-level detail.",
              "The EU's GDPR remains the reference model every textbook compares against, and its vocabulary is worth knowing: lawful bases for processing, the right to erasure (the 'right to be forgotten'), data portability, breach notification within 72 hours, Data Protection Impact Assessments for high-risk processing, and fines up to 4 percent of global turnover. Worked contrast: under GDPR-style regimes, a marketing team cannot enrich its dataset by scraping customer data from a partner without a lawful basis and notice; under India's DPDP model, the same act fails the consent-plus-notice requirement. The comparison sentence to memorize: regimes differ in structure, but consent, minimization and breach accountability appear in all of them.",
              "Engineering privacy turns principles into code and architecture. Minimization in practice: log the email domain, not the address; store only the last four card digits; hash or tokenize identifiers used for analytics. Anonymization versus pseudonymization matters: pseudonymized data (keys held separately) is still personal data; properly anonymized data may fall outside the law, but true anonymization is hard - re-identification attacks have de-anonymized 'anonymous' datasets repeatedly. Deletion is an engineering problem too: backups, logs and analytics pipelines retain copies unless designed for erasure. The exam-worthy closing: privacy is a security requirement like confidentiality, with its own threat model (insider browsing, over-collection, retention creep) and its own controls (field-level access rules, retention jobs, consent records).",
            ],
            bullets: [
              "Principles: consent, purpose limitation, data minimization, storage limitation, accuracy, security safeguards, accountability.",
              "India stack: IT Act section 43A (compensation for negligent data handling) + SPDI Rules 2011 + DPDP Act 2023.",
              "DPDP Act 2023: consent and notice, data fiduciary duties, children's data, access/correction/erasure rights, breach penalties.",
              "GDPR reference model: lawful bases, right to erasure, portability, 72-hour breach notification, DPIAs, 4 percent fines.",
              "Minimization in code: mask identifiers, store card last-4 only, log domains not addresses.",
              "Pseudonymization is not anonymization - re-identification attacks keep 'anonymous' datasets risky.",
              "Deletion must reach backups, logs and pipelines, or erasure rights are only paper.",
            ],
            codeExample: {
              language: "python",
              caption: "Data minimization and masking before logging or sharing.",
              code: `# Data minimization and masking before logging or sharing
import re

record = {"name": "Ravi Sharma", "aadhaar": "1234-5678-9012",
          "email": "ravi@example.com", "card": "4111 1111 1111 1111"}

def minimized(r):
    # keep only fields the task needs, mask the rest
    return {
        "name": r["name"].split()[0] + " S.",           # first name only
        "email_domain": r["email"].split("@")[1],       # no local part
        "card_last4": r["card"].replace(" ", "")[-4:],  # last 4 digits
    }

print(minimized(record))
# {'name': 'Ravi S.', 'email_domain': 'example.com', 'card_last4': '1111'}

# Sanitizing free text before it reaches a third-party log
print(re.sub(r"\\d{4}[- ]?\\d{4}[- ]?\\d{4}", "[REDACTED]", record["aadhaar"]))`,
            },
            diagram: {
              kind: "cycle",
              title: "The data protection lifecycle",
              caption:
                "Each stage carries a principle - consent in, erasure out.",
              steps: [
                { label: "Collect", note: "consent + purpose fixed" },
                { label: "Process", note: "minimize fields used" },
                { label: "Store", note: "encrypt, restrict access" },
                { label: "Share", note: "lawful basis only" },
                { label: "Delete", note: "erasure when purpose ends" },
              ],
            },
            callout: {
              type: "tip",
              title: "Three laws, one stack",
              body: "For 'explain data protection in India', answer in layers: 43A gives the compensation duty, SPDI Rules 2011 give the practices, DPDP Act 2023 gives the modern consent-based regime. Then add GDPR as the international comparison - the layering itself is what examiners score.",
            },
            keyTerms: [
              { term: "Data minimization", definition: "Collecting and retaining only the personal data the stated purpose actually requires." },
              { term: "SPDI Rules 2011", definition: "India's rules under the IT Act requiring security practices, privacy policies and consent for sensitive personal data." },
              { term: "DPDP Act 2023", definition: "India's modern personal data protection law: consent, fiduciary duties, individual rights, penalties." },
              { term: "Right to erasure", definition: "The individual's right to have personal data deleted - GDPR's 'right to be forgotten'." },
              { term: "Pseudonymization", definition: "Replacing identifiers with tokens while keys exist separately; the data remains personal data in law." },
            ],
            examQuestions: [
              {
                q: "Explain the principles of personal data protection and describe India's legal stack (IT Act 43A, SPDI Rules 2011, DPDP Act 2023). Compare with the GDPR's key rights and obligations, and give two concrete engineering examples of data minimization.",
                marks: 7,
                outline: [
                  "State the principles: consent, purpose limitation, minimization, storage limitation, security safeguards, accountability.",
                  "Layer one: section 43A compensation for negligent protection of sensitive personal data.",
                  "Layer two: SPDI Rules 2011 - security practices, privacy policy, consent.",
                  "Layer three: DPDP Act 2023 - consent plus notice, fiduciary duties, erasure and correction rights, penalties.",
                  "GDPR comparison: lawful bases, right to erasure, portability, 72-hour breach notification, DPIAs, fines.",
                  "Engineering example one: masked logging (domain instead of email, card last-4).",
                  "Engineering example two: retention jobs that reach backups and pipelines; pseudonymization caveat.",
                ],
              },
              {
                q: "Why is pseudonymized data still considered personal data?",
                marks: 2,
              },
              {
                q: "Name three individual rights granted under the DPDP Act 2023.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Computer forensics and professional ethics",
            body: [
              "Computer (digital) forensics is the science of preserving, extracting and presenting digital evidence in a way a court accepts. Its first rule is volatility: evidence dies from the top of the stack down - running memory and network connections first, then running processes, then disk, then backups and archives. A responder therefore captures RAM and live connections before powering anything down, then images storage. The image, not the original, is analyzed, and the original is sealed; write blockers guarantee the imaging process cannot modify the source. Skipping volatility order is a classic exam trap: pulling the plug first destroys memory evidence that might hold encryption keys.",
              "Integrity of evidence is proven by hashing: the examiner hashes the original device and the image with SHA-256; matching digests prove the copy is exact, and every subsequent working copy is hashed in turn. The chain of custody is the parallel paperwork: a log recording who touched the evidence, when, why, and with what hash values, from seizure to courtroom - one undocumented transfer can render the entire exhibit doubtful. Legal admissibility adds further discipline: authority for the search, minimization of irrelevant private data, and documented tools and methods (repeatable, defensible). Standard tooling spans dd or FTK Imager for acquisition, EnCase/FTK/Autopsy for analysis, and Volatility for memory forensics.",
              "A worked miniature ties it together: a lab PC is suspected of exfiltrating data. The responder photographs the setup, captures RAM to a write-protected target, disconnects the network, images the disk with a hardware write blocker, hashes original and image (matching SHA-256 values recorded), mounts the image read-only, and analyzes browser history, USB logs and file timelines - each step entered in the custody log. In court the examiner testifies to method and chain, not conclusions. The lesson for security students: the forensic readiness of an organization - logging enabled, retention configured, responders trained - is decided long before any incident, connecting straight back to Unit IV's preparation phase.",
              "Professional ethics gives the field its licence to operate. Codes from bodies such as ACM and (ISC)2 demand honesty, competence, confidentiality, and protection of the public above employer or client. The hacker classifications frame permissible behaviour: white hats test with written authorization inside scope; grey hats probe without permission but usually without malice - still legally exposed; black hats attack for profit or harm. The one-liner every exam wants: curiosity is not authorization - scanning a system you do not own, even 'to help', can be an offence under the IT Act. Ethics also governs disclosure (responsible reporting of vulnerabilities rather than public dropping), insider conduct (no exceeding authorized access), and the duty to report breaches honestly rather than bury them.",
            ],
            bullets: [
              "Order of volatility: RAM and live connections -> processes -> disk -> backups; capture downward before powering off.",
              "Image with a write blocker; analyze the copy; hash original and image (SHA-256) to prove exactness.",
              "Chain of custody: a continuous log of handlers, times, reasons and hashes; one gap weakens the exhibit.",
              "Toolchain: dd/FTK Imager for acquisition, EnCase/FTK/Autopsy for analysis, Volatility for memory.",
              "Forensic readiness (logging, retention, trained responders) is decided before the incident.",
              "Ethics codes (ACM, (ISC)2): honesty, competence, confidentiality, public interest first.",
              "White/grey/black hat: authorization is the dividing line - curiosity is not authorization.",
            ],
            codeExample: {
              language: "bash",
              caption: "Forensic imaging with hash verification and a custody log entry.",
              code: `# Forensic imaging with a hash-verified working copy
# 1. Attach a hardware write blocker, then confirm the device
dmesg | tail                   # note the device name, e.g. /dev/sdb

# 2. Image the whole disk (never mount the original read-write)
dd if=/dev/sdb of=/evidence/disk.img bs=4M status=progress

# 3. Hash the original and the image - both must match
sha256sum /dev/sdb
sha256sum /evidence/disk.img

# 4. Record everything in the chain-of-custody log
echo "$(date -u) imaged /dev/sdb by examiner1, hash logged" >> custody.log
# Examine only disk.img (mounted read-only) - the original stays sealed.`,
            },
            diagram: {
              kind: "pipeline",
              title: "The digital forensic workflow",
              caption:
                "Court admissibility depends on discipline at every stage.",
              stages: [
                { label: "Identify and seize", note: "order of volatility" },
                { label: "Preserve", note: "write blocker, image, hash" },
                { label: "Analyze", note: "working copy, read-only" },
                { label: "Document", note: "chain of custody throughout" },
                { label: "Present", note: "method testimony in court" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Two definitions are almost guaranteed: chain of custody (the documented, unbroken record of who handled evidence, when and why, with hashes) and order of volatility (capture RAM before disk). Then name two tools and one reason an unlogged transfer damages admissibility.",
            },
            keyTerms: [
              { term: "Order of volatility", definition: "Collecting the most short-lived evidence (RAM, connections) before persistent media (disk, backups)." },
              { term: "Chain of custody", definition: "The documented record of evidence handlers, times, purposes and hashes from seizure to court." },
              { term: "Write blocker", definition: "Hardware or software ensuring imaging cannot modify the source device." },
              { term: "Forensic image", definition: "A bit-exact copy of storage, verified by matching hashes, on which all analysis is performed." },
              { term: "White hat", definition: "A security tester operating strictly within written authorization and scope." },
            ],
            examQuestions: [
              {
                q: "Explain the digital forensic workflow from seizure to courtroom, including the order of volatility, write blockers, hash verification and the chain of custody. Explain why an unlogged evidence transfer threatens admissibility, and name two forensic tools.",
                marks: 7,
                outline: [
                  "Define digital forensics and admissibility.",
                  "Order of volatility: RAM and connections before processes, disk, backups; justify with encryption keys in memory.",
                  "Preservation: hardware write blocker, bit-exact image, SHA-256 of original and image matching.",
                  "Analysis on read-only working copies; tools: dd/FTK Imager, EnCase/Autopsy, Volatility.",
                  "Chain of custody: continuous log of handlers, times, reasons, hashes.",
                  "Explain the admissibility failure: one undocumented transfer makes the exhibit doubtful and attackable in cross-examination.",
                  "Presentation: examiner testifies to method; tie to forensic readiness and Unit IV preparation.",
                ],
              },
              {
                q: "Why is pulling the plug on a compromised machine sometimes the wrong first move?",
                marks: 3,
              },
              {
                q: "Classify white, grey and black hats in one line each, naming the legal dividing line.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Security in cloud, IoT and AI, and emerging trends",
            body: [
              "Cloud security changes who controls what. The shared responsibility model divides duties by service model: in IaaS the provider secures the datacentre, hypervisor and physical network, while you secure the OS, applications, identities and data; in PaaS you keep identities, data and application configuration; in SaaS only identities, data and access configuration remain yours. The breaches the model predicts are the ones that happen: Capital One 2019 (a misconfigured WAF enabling server-side request forgery into metadata services, exposing about 100 million credit applications) and countless open S3 buckets are customer-side failures, not provider failures. The exam sentence: the cloud provider almost never leaks your data - misconfigured customers do.",
              "IoT collapses the perimeter: billions of cameras, routers and sensors with default passwords, unpatchable firmware and always-on connections. Mirai (2016) scanned the internet for devices still using vendor default credentials, enslaved hundreds of thousands, and generated record DDoS floods - the core-IP-camera and router lesson in one incident. Defences are unglamorous and structural: change defaults, network-segment IoT away from corporate assets (VLANs), push signed firmware updates, disable unused services, and treat each device as untrusted. AI systems add new failure surfaces: adversarial examples fool classifiers with tiny input perturbations, data poisoning corrupts training sets so models misbehave on chosen triggers, model inversion and theft extract training data or clone the model via its API. AI security controls: input validation and robustness testing, provenance-tracked training data, rate-limited and monitored model APIs.",
              "Two architectural trends dominate the emerging-trends question. Zero trust replaces 'trust the network interior' with 'never trust, always verify': every request is authenticated and authorized regardless of source, identities and device health are checked continuously, access is least-privilege and microsegmented, and the VPN's implicit trust (section 3.3) is replaced by per-application brokers. It is a response to cloud and remote work dissolving the perimeter, and its maturity model starts with identity (MFA everywhere) and asset inventory. Post-quantum cryptography is the other headline: Shor's algorithm on a sufficiently large quantum computer would break RSA and ECC - the foundations of today's key exchange and signatures - while Grover's algorithm merely halves symmetric strength (AES-256 stays comfortable). Migration has begun: NIST standardized lattice-based algorithms (ML-KEM/Kyber for key encapsulation, ML-DSA/Dilithium for signatures), and 'harvest now, decrypt later' - adversaries archiving encrypted traffic to decrypt after quantum maturity - is the argument for migrating long-lived secrets early.",
              "Case studies bind the unit together. Capital One: cloud misconfiguration, over-privileged roles, and SSRF - remediation is least-privilege IAM and configuration review. Mirai: default credentials and unsegmented IoT - remediation is hygiene plus segmentation. The lesson examiners want across all of them: emerging technology does not invent new security principles, it relocates the old ones - CIA triad, least privilege, patch discipline, key management - onto new surfaces, which is why Unit I's vocabulary still explains a 2019 cloud breach and a 2030 quantum transition alike. Close with the professional's posture: inventory everything, assume breach, verify continuously, and treat law (Unit 5.1-5.3) and ethics (5.4) as constraints with the same force as any firewall rule.",
            ],
            bullets: [
              "Shared responsibility: IaaS/PaaS/SaaS shift OS, app and data duties toward the customer; providers secure the infrastructure.",
              "Cloud breaches are customer-side: Capital One 2019 (WAF misconfiguration, SSRF, ~100 million records) and open storage buckets.",
              "IoT risk: default passwords, unpatchable firmware; Mirai (2016) built record DDoS botnets from default-credential devices.",
              "IoT controls: change defaults, VLAN segmentation, signed firmware updates, disable unused services.",
              "AI security: adversarial examples, data poisoning, model theft/inversion; controls are robustness testing, data provenance, API rate limits.",
              "Zero trust: never trust, always verify - continuous identity and device checks, least privilege, microsegmentation; replaces implicit VPN trust.",
              "Post-quantum: Shor breaks RSA/ECC, Grover halves symmetric strength; NIST PQC (ML-KEM/Kyber, ML-DSA/Dilithium); 'harvest now, decrypt later' drives early migration.",
            ],
            table: {
              caption: "Emerging domains: dominant risks and countermeasures.",
              headers: ["Domain", "Top risks", "Key countermeasures"],
              rows: [
                ["Cloud", "misconfigured storage and IAM, shared-responsibility gaps", "least-privilege IAM, configuration review, encryption, CSPM"],
                ["IoT", "default credentials, unpatchable firmware, flat networks", "defaults changed, VLAN segmentation, signed updates"],
                ["AI systems", "adversarial inputs, data poisoning, model theft", "robustness testing, training-data provenance, API rate limiting"],
                ["Quantum era", "RSA/ECC broken by Shor's algorithm", "migrate to ML-KEM/ML-DSA, crypto-agility, inventory long-lived secrets"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Cloud shared responsibility across service models",
              caption:
                "The higher the service model, the more responsibility stays with the customer.",
              layers: [
                { label: "Data, identities, access config", note: "always the customer" },
                { label: "OS, applications, patching", note: "customer in IaaS, shared in PaaS" },
                { label: "Hypervisor, network, storage", note: "provider" },
                { label: "Physical datacentre security", note: "provider" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The emerging-trends question is a synthesis test: name the trend, name the principle it relocates, name one real case. Zero trust -> least privilege and continuous verification; post-quantum -> key management and crypto-agility; IoT -> patch and default hygiene (Mirai). Ending with 'old principles on new surfaces' ties Units I-V together.",
            },
            keyTerms: [
              { term: "Shared responsibility model", definition: "The cloud division of security duties between provider (infrastructure) and customer (data, identities, configuration) by service model." },
              { term: "Mirai", definition: "The 2016 botnet that recruited IoT devices with default passwords for record-scale DDoS attacks." },
              { term: "Adversarial example", definition: "An input with tiny, crafted perturbations that fools a machine-learning model while looking normal to humans." },
              { term: "Zero trust", definition: "An architecture verifying identity, device health and least-privilege authorization for every request, regardless of network location." },
              { term: "Post-quantum cryptography", definition: "Algorithms resistant to quantum attack (e.g. lattice-based ML-KEM, ML-DSA) replacing RSA/ECC key exchange and signatures." },
            ],
            examQuestions: [
              {
                q: "Explain the shared responsibility model across IaaS, PaaS and SaaS, and analyse the Capital One breach as a customer-side cloud failure. Then describe IoT risks using Mirai, and outline zero trust and post-quantum cryptography as emerging responses.",
                marks: 7,
                outline: [
                  "Define shared responsibility and split duties for IaaS, PaaS, SaaS.",
                  "Capital One: WAF misconfiguration enabled SSRF into metadata services; over-privileged roles; ~100 million records exposed.",
                  "Remediation: least-privilege IAM, configuration review, CSPM tooling - provider infrastructure was not the failure.",
                  "IoT: default credentials, unpatchable firmware; Mirai scanned defaults and produced record DDoS.",
                  "IoT controls: segmentation, signed firmware, credential hygiene.",
                  "Zero trust: never trust always verify, continuous checks, microsegmentation; contrast with VPN implicit trust.",
                  "Post-quantum: Shor vs Grover, harvest-now-decrypt-later, NIST ML-KEM/ML-DSA migration.",
                ],
              },
              {
                q: "Why does 'harvest now, decrypt later' make post-quantum migration urgent for long-lived secrets?",
                marks: 3,
              },
              {
                q: "In SaaS, which security duties remain with the customer?",
                marks: 2,
              },
            ],
          },
        ],
      },
    },
  ],
  studyPlan: [
    {
      id: "weights",
      heading: "Exam weight map",
      body: [
        "RGPV AL-604(B) papers typically distribute marks fairly evenly across the five units with a slight tilt toward cryptography and network/application security, since those units carry the computable questions. Reserve daily time for one worked example per unit - Caesar, RSA, the risk matrix, the TLS sketch, the IT Act section list - because the 7-mark questions in this subject are traceable, not essay-like.",
      ],
      weightedTopics: [
        { topic: "CIA triad, security services and mechanisms (X.800)", weight: "7-10 marks", note: "Definition backbone of Unit I; answer with the pillar-to-attack-to-control mapping." },
        { topic: "Symmetric cryptography: DES structure, AES rounds, block cipher modes", weight: "10-14 marks", note: "ECB penguin, CBC chaining and CTR nonces are the standard diagram questions." },
        { topic: "RSA and Diffie-Hellman with small-number worked examples", weight: "8-10 marks", note: "p=7/q=11/e=13 and p=23/g=5 traces are near-guaranteed; show every modular step." },
        { topic: "Hash functions and digital signatures", weight: "6-8 marks", note: "SHA-256 properties, birthday bound 2^128, MD5/SHA-1 break dates, sign-vs-encrypt keys." },
        { topic: "Firewalls, IDS/IPS and VPN tunneling", weight: "7-9 marks", note: "Three-generation comparison, signature vs anomaly, tunnel vs transport with the nested-box diagram." },
        { topic: "TLS handshake and email authentication (SPF/DKIM/DMARC)", weight: "5-7 marks", note: "Draw the two-column handshake; keep the three email standards to one question each." },
        { topic: "Web attacks: SQL injection, XSS, CSRF", weight: "7-9 marks", note: "Vulnerable vs parameterized code plus token defences; OWASP framing earns context marks." },
        { topic: "Risk management, policy hierarchy, ISO 27001/27002, NIST CSF", weight: "7-9 marks", note: "The 5x5 matrix with worked scores and the policy-to-evidence audit trace." },
        { topic: "Incident response lifecycle and BCP/DR (RTO/RPO)", weight: "6-8 marks", note: "Draw the cycle with the loop-back arrow; the 02:00/11:00/14:00 timeline computes both objectives." },
        { topic: "IT Act 2000, privacy, forensics, emerging trends", weight: "6-8 marks", note: "Overview sections 43/65/66/66C/66D/67, chain of custody, shared responsibility, zero trust, post-quantum." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming a five-day week at two hours a day, this schedule covers every section once for understanding and once for revision, ending with full papers under timing. Keep one running sheet of worked examples - it becomes your last-day revision file.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations", tasks: ["CIA triad plus extensions; attack vocabulary with the risk chain", "Passive vs active table; malware zoo with WannaCry case", "X.800 service-mechanism mapping; attacker profiles and Equifax/Capital One lessons"] },
        { week: "Week 2", focus: "Unit II - classical and symmetric crypto", tasks: ["Caesar/Vigenere/transposition by hand (3 traces each)", "DES Feistel vs AES SPN; 10/12/14-round mapping", "ECB vs CBC vs CTR with the penguin and nonce rules"] },
        { week: "Week 3", focus: "Unit II - asymmetric and integrity", tasks: ["RSA trace p=7, q=11, e=13 until you can do it cold", "Diffie-Hellman p=23, g=5 plus the MITM fix", "SHA-256 properties and avalanche; signatures, PKI chain, key lifecycle"] },
        { week: "Week 4", focus: "Unit III - network security", tasks: ["Firewall generations with iptables rules; DMZ sketch", "IDS/IPS comparison; VPN tunnel vs transport nested-box diagram", "TLS 1.2 handshake diagram and TLS 1.3 improvements"] },
        { week: "Week 5", focus: "Unit III - web and wireless + Unit IV start", tasks: ["SQLi vulnerable vs parameterized code; XSS types; CSRF tokens", "WEP-to-WPA3 table; DDoS families and mitigations", "Policy hierarchy, ISO/NIST comparison; risk matrix worked scores"] },
        { week: "Week 6", focus: "Unit IV finish + Unit V + full revision", tasks: ["RTO/RPO timeline; incident response cycle; SOC tiers and metrics", "IT Act sections overview; privacy stack; forensics workflow; zero trust and PQC", "Two full papers under time, then re-derive every worked example from memory"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Re-derive the four computable examples by hand once each: Caesar SECURE -> VHFXUH, RSA 5 -> 26 -> 5, DH secret 4, rail fence ATCKTDWTAAAAAN.",
        "Recite the parameter sets as numbers: DES 64/56/16, AES 128 and 10/12/14, WEP IV 24-bit, SHA-256 256-bit, TLS 1.3 one round trip.",
        "Redraw five diagrams from memory: TLS handshake, IPSec nested box, policy pyramid, incident response cycle, RTO/RPO timeline.",
        "Rehearse the three comparison tables: firewall generations, wireless standards WEP-to-WPA3, ISO 27001 vs 27002 vs NIST CSF.",
        "Write the IT Act section list once in overview style (43, 65, 66, 66C/66D, 67, 43A) with one clause of description each.",
        "Review the case-study one-liners: WannaCry (patching), Equifax (patch management), Capital One (cloud misconfiguration), Mirai (IoT defaults).",
        "Skim every exam-tip callout in this guide - they name the exact detail each answer must contain.",
        "Sleep on time; this subject rewards clean arithmetic and labelled diagrams, both of which degrade fast without rest.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "For every 7-mark question, spend 30 seconds planning the skeleton - definition, diagram, worked example, comparison, conclusion - before writing.",
        "Draw first, then explain: handshake, nested-box, pyramid, cycle and matrix sketches carry marks on their own and organize your prose.",
        "Show modular arithmetic line by line in crypto questions; a wrong digit with visible working still earns method marks.",
        "Quote numbers exactly (2^128, 56-hour DES brute force, 72-hour breach notification, 4 percent GDPR fines) - examiners scan for them.",
        "Attach a real case to every theoretical answer: one sentence with year and lesson is enough (WannaCry 2017, Equifax 2017, Mirai 2016, Capital One 2019).",
        "Name laws and standards by number (ISO 27001/27002, NIST SP 800-61, IT Act section 43 overview) rather than vaguely saying 'standards exist'.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in 14-18 minutes, and reserve 10 minutes to check every diagram is labelled.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Calling denial of service a passive attack - DoS is the textbook active attack; only eavesdropping and traffic analysis are passive.",
        "Skipping phi in RSA: write phi = (p-1)(q-1) = 60 before choosing e; answers that jump straight to d lose the derivation marks.",
        "Swapping the signature keys: encrypt to the recipient's PUBLIC key; sign with your own PRIVATE key.",
        "Confusing RTO with RPO: RTO is time to restore service, RPO is data loss measured backwards from failure.",
        "Presenting ECB as acceptable for data - it leaks patterns and allows block substitution; say CBC/CTR/GCM with IV/nonce discipline.",
        "Claiming Diffie-Hellman alone is secure against man-in-the-middle - it authenticates nothing until certificates or signatures are added.",
        "Inventing precise IT Act subsections or sentence lengths - keep provisions at overview level and hedge penalties with 'typically'.",
        "Equating a vulnerability scan with risk assessment - the methodology chain (asset, threat, score, treatment, owner) is what earns the marks.",
        "Writing 'encryption gives integrity' - confidentiality and integrity are separate goals; integrity needs MACs, signatures or AEAD modes.",
        "Leaving diagrams unlabelled - an unlabelled box sketch scores half of what the same sketch with labelled arrows scores.",
      ],
    },
  ],
};
