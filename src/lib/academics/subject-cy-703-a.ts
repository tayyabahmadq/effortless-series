/**
 * Academics - RGPV Cyber Security 7th-semester subject: CY-703(A)
 * Ethical Hacking.
 *
 * Structure mirrors subject-ad-502.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, one
 * diagram, a table or code sample, a callout, key terms, and examiner-style
 * exam questions (7- or 14-mark, each with a 5-7 point outline).
 */

import type { AcademicSubject } from "./types";

export const cy703a: AcademicSubject = {
  id: "cy-703-a",
  code: "CY-703(A)",
  title: "Ethical Hacking",
  semester: "VII Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "The ethical hack as one connected discipline: hacker classes and footprinting, the business perspective that authorizes the attack, reconnaissance and preparation, enumeration and exploitation, and the closing toolkit - reverse engineering, email and Bluetooth hacking, incident response, and the ethics that keep it professional.",
  description:
    "Five units walk from what ethical hacking is - hacker classes, the networking basics every attack presumes, footprinting and scanning with port and OS fingerprinting, Google hacking, Windows and Linux attack surfaces - into the business perspective: objectives, security policy, the limitations that bound a controlled attack, multi-phase planning, teaming and the engagement planner. Unit III prepares the hack: technical preparation, social engineering and physical recon, steganography and cryptography, wireless attacks, and the defenders' tripwires - firewalls, honeypots, IDS and IPS. Unit IV works enumeration into exploitation: NetBIOS/SNMP/LDAP enumeration, intuitive testing and evasion, password crackers, rootkits, wardialing and DoS. Unit V closes the craft: reverse engineering, email hacking, incident handling, Bluetooth and mobile hacking, the professional toolkit, and the legal and ethical responsibilities that distinguish the ethical hacker from the criminal.",
  accentColor: "#ef4444",
  emoji: "EH",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations, Footprinting and Scanning",
      summary:
        "Unit I builds the vocabulary and the opening toolkit: what ethical hacking is and which classes of hackers exist, the networking basics every later attack presumes, information gathering and footprinting, network-range discovery and active-machine identification, open-port and access-point discovery with OS fingerprinting, mapping the network attack surface, and the Google-hacking, scanning, Windows and Linux attack material the syllabus names explicitly.",
      chapter: {
        number: "01",
        title: "The Ethical Hacker's Opening Moves",
        intro:
          "Unit I covers the introduction to ethical hacking and its hacker taxonomy, networking and basics, footprinting and scanning as information gathering, determining the network range, identifying active machines, finding open ports and access points, OS fingerprinting, mapping the network attack surface, and the syllabus's explicit tail - Google hacking, scanning, Windows hacking and Linux hacking.",
        inOneBreath:
          "Ethical hacking is authorized attack with written permission and a report; hackers divide black (criminal), white (authorized), grey (unauthorized but not malicious), and the state actors beside them. Every attack presumes TCP/IP literacy: ports 21/22/25/53/80/443/445/3389, three-way handshakes, TTL fingerprints. Footprinting is pre-contact OSINT (WHOIS, DNS, dorks, social media); scanning is contact - ping sweeps find live hosts, port scans find services (SYN half-open evades logs), -sV banners versions, -O reads TTL/DF/window quirks for the OS. The attack surface map ranks every discovered asset by reachability and value - it is the document the whole engagement hangs from. Google dorking (site:, filetype:, inurl:) extracts exposed files; Windows attacks ride SMB/NetBIOS and PowerShell; Linux attacks ride SSH, SUID misconfigurations and weak service config.",
        sections: [
          {
            number: "1.1",
            title: "Introduction to ethical hacking",
            body: [
              "Ethical hacking is the deliberate, authorized probing of systems to discover what an attacker could discover - performed with the owner's written permission, within agreed boundaries, and reported back for remediation. The ethics live in three properties that separate it from crime: authorization before activity, scope discipline during it, and disclosure after it. The historical anchor the exam expects: hacker initially meant a skilled tinkerer (the 1960s MIT model-railroad club sense), drifted criminal in the press through the 1980s worm era, and the professional rebrand - white hat, penetration tester, ethical hacker - exists precisely to reattach the skill to consent. Certifications institutionalized it: CEH (EC-Council) defines the curriculum this syllabus mirrors, OSCP proves the hands-on capability, CREST adds the consultancy layer.",
              "The hacker classes are the guaranteed question. Black-hat hackers attack without permission for profit, ideology or ego - the criminal class behind ransomware and carding. White-hat hackers attack with permission and report - the ethical hacker this subject trains. Grey-hat hackers attack without permission but without malice - the researcher who finds a flaw and posts it publicly before notifying the vendor; legally they are trespassers, practically they sometimes get hired. Beside them sit the state and corporate categories the syllabus gestures at: script kiddies (pre-built tools, no depth), hacktivists (ideology-driven, e.g. defacement campaigns), state-sponsored APTs (patient, funded, espionage) and insiders (legitimate access misused). A worked sizing: of a typical mid-size firm's incident load, financially-motivated organized crime dominates (60-70%), insiders 10-20%, hacktivism and espionage smaller but higher-impact.",
              "The ethical hacker's method is the five-phase lifecycle the CEH curriculum formalizes and this subject follows: reconnaissance (passive and active information gathering), scanning and enumeration (ports, services, users), gaining access (exploitation), maintaining access (persistence - RoE-bounded), and covering tracks (tested only where authorized, and always reversed at cleanup). Each phase feeds the next: footprinting output selects the scan targets, scan output selects the exploits, and the report at the end is what makes the whole cycle legal. The exam's framing sentence: the phases mirror a criminal attack exactly - the ethics differ, the techniques do not.",
              "Exam framing: 'Define ethical hacking and explain the types of hackers' is a 7-mark staple; 'discuss the phases of an ethical hack' is 14. Write the three ethics properties, the five hacker classes with one example each, the five-phase lifecycle, and close with the mirror sentence - same techniques, authorized intent.",
            ],
            keyTerms: [
              { term: "Ethical hacking", definition: "Authorized, scoped, reported attack simulation - permission, boundaries and disclosure separate it from crime." },
              { term: "Grey-hat hacker", definition: "Attacks without permission but without malice; legally trespass, occasionally hired after disclosure." },
              { term: "Script kiddie", definition: "Attacker running pre-built tools without understanding them - volume without depth." },
              { term: "APT", definition: "Advanced Persistent Threat - funded, patient state-linked attacker pursuing espionage objectives." },
            ],
            diagram: {
              kind: "compare",
              title: "The hat colours and what actually separates them",
              caption: "Technique is identical; authorization and intent are the whole difference.",
              left: {
                heading: "Black hat / grey hat",
                items: [
                  "No authorization for the target",
                  "Profit, ideology, ego or publicity",
                  "No disclosure duty - or premature public disclosure",
                  "Criminal liability under IT Act Sec 66 / CFAA",
                ],
              },
              right: {
                heading: "White hat / ethical hacker",
                items: [
                  "Signed authorization before any packet",
                  "Client's defensive interest",
                  "Full private disclosure + remediation report",
                  "Contractual liability limits and insurance",
                ],
              },
            },
            bullets: [
              "Three ethics properties: authorization before activity, scope discipline during, disclosure after.",
              "Classes: black (criminal), white (authorized), grey (unauthorized, non-malicious), plus script kiddies, hacktivists, APTs, insiders.",
              "Incident mix: organized crime 60-70% of loads; insiders 10-20%; hacktivism/espionage rare but high-impact.",
              "Five-phase lifecycle: reconnaissance -> scanning/enumeration -> gaining access -> maintaining access -> covering tracks.",
              "Phases mirror criminal attack exactly - only authorization and intent differ.",
              "Certifications: CEH (curriculum), OSCP (hands-on), CREST (consultancy standard).",
            ],
            callout: {
              type: "exam",
              title: "The mirror sentence is the closing mark",
              body: "After listing hacker classes and phases, end with one line: 'the ethical hacker uses identical techniques within written authorization and reports for remediation'. Examiners award the synthesis mark for that sentence - it shows you know where the ethics actually live.",
            },
            table: {
              caption: "The hacker taxonomy with one worked example per class.",
              headers: ["Class", "Authorization", "Motive", "Signature example"],
              rows: [
                ["Black hat", "None", "Profit / extortion", "Ransomware operators"],
                ["White hat", "Written contract", "Client defence", "Pentest consultant"],
                ["Grey hat", "None, no malice", "Recognition / curiosity", "Public bug disclosure without permission"],
                ["Script kiddie", "None", "Thrill", "Loic-era DDoS forays"],
                ["Hacktivist", "None", "Ideology", "Defacement campaigns"],
                ["State APT", "None (state cover)", "Espionage", "Long-dwell intrusion sets"],
              ],
            },
            examQuestions: [
              {
                q: "Define ethical hacking and explain in detail the classes of hackers, the phases of an ethical hack, and the properties that distinguish ethical hacking from criminal activity.",
                marks: 14,
                outline: [
                  "Definition: authorized attack simulation with consent, boundaries and a report",
                  "Three properties: authorization, scope discipline, disclosure",
                  "Classes: black, white, grey, script kiddie, hacktivist, state APT, insider - one example each",
                  "Incident mix: crime 60-70%, insiders 10-20% - sizing earns the applied mark",
                  "Five phases: recon -> scan/enum -> access -> maintain -> cover tracks",
                  "Phase feeding: footprint selects scans, scans select exploits",
                  "Mirror sentence: identical techniques, authorized intent, remediation report",
                ],
              },
              {
                q: "Why is a grey-hat disclosure still legally problematic even when it helps the vendor?",
                marks: 7,
                outline: [
                  "Testing occurred without authorization - trespass regardless of motive",
                  "IT Act Sec 66 / CFAA criminalize unauthorized access itself",
                  "Public disclosure before a fix may expose users mid-window",
                  "Coordinated disclosure under authorization is the lawful path",
                  "Some vendors still engage such researchers - optics, not legality",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Networking and basics for the ethical hacker",
            body: [
              "Every attack in this subject presumes TCP/IP literacy, and the exam tests it through ports and protocol behavior. The working port table: 21 FTP (cleartext credentials - a finding by itself), 22 SSH (key exchange, hardening target), 23 Telnet (cleartext everything - immediate critical), 25 SMTP (user enumeration via VRFY), 53 DNS (zone transfers, version leaks), 80/443 HTTP(S) (the primary attack surface), 110/143 POP3/IMAP (mail retrieval), 137-139 NetBIOS (the Windows enumeration legacy), 161/162 SNMP (community strings 'public'/'private'), 389/636 LDAP(LDAPS) (directory objects), 445 SMB (shares, the EternalBlue-class history), 1433/3306 SQL Server/MySQL (data tier), 3389 RDP (remote desktop - brute-force magnet), 5900 VNC. Knowing which service default-behaves on which port is the difference between a scan list and an attack plan.",
              "The mechanics the questions build on: the TCP three-way handshake (SYN -> SYN/ACK -> ACK) is what SYN scanning exploits by never sending the final ACK; TTL values fingerprint OS families (128 Windows, 64 Linux, 255 Cisco) and shrink by one per router hop; ARP resolves IP to MAC on local segments and is the protocol of ARP-spoofing MitM; DNS resolves names and leaks data through zone transfers and cache snooping; DHCP hands out addresses and can be spoofed (rogue DHCP = traffic interception). UDP services answer ambiguously - no reply means open-or-filtered - which is why UDP scanning is slow and SNMP enumeration (161, community 'public') is the classic quiet win: one request returns interface tables, connected devices and sometimes routing data.",
              "The worked trace ties it together: traceroute to a target shows 11 hops; TTL 113 in the reply implies the host started at TTL 128 with 15 hops expected - a Windows-flavoured stack. A port probe of 445 answers SYN/ACK immediately (SMB open); banner grab shows 'Samba 4.11' or Windows SMB dialect; the attacker now knows which enumeration module (enum4linux vs enum4windows-class tooling) fits. This is the unit's method in miniature: protocol behavior -> inference -> tool selection, and every later section presumes exactly this loop.",
              "Exam framing: 'Explain the networking basics and protocols used by ethical hackers' is a 7-mark staple. Give the working port table (12+ rows), the handshake and TTL mechanics, the UDP ambiguity point, and the worked traceroute-to-tool-selection trace.",
            ],
            keyTerms: [
              { term: "Three-way handshake", definition: "SYN -> SYN/ACK -> ACK; the sequence SYN scanning half-completes." },
              { term: "TTL fingerprinting", definition: "Initial TTL (128/64/255) minus hops identifies the OS family." },
              { term: "SNMP community string", definition: "The cleartext 'password' of SNMP v1/2c - 'public' grants read on misconfigured devices." },
              { term: "Banner grabbing", definition: "Reading service version strings from connection responses to select exploits." },
            ],
            diagram: {
              kind: "layers",
              title: "The attack-relevant TCP/IP stack",
              caption: "Name one attack per layer; that mapping is the networking-basics answer.",
              layers: [
                { label: "Application", note: "HTTP/HTTPS, DNS, SMTP, SNMP, SMB - injection, dorking, enumeration" },
                { label: "Transport", note: "TCP/UDP - SYN scans, TTL/OS fingerprint, UDP ambiguity" },
                { label: "Network", note: "IP/ICMP - traceroute mapping, ping sweeps, spoofing" },
                { label: "Data link", note: "ARP - spoofing, MitM, cam-table overflow" },
                { label: "Physical", note: "taps, wireless, hardware implants" },
              ],
            },
            bullets: [
              "Port table: 21/23 cleartext findings; 22/25/53/80/443/161/389/445/3389 the working set; 137-139 the NetBIOS legacy.",
              "SYN scan exploits the half-completed handshake; connect scan completes it (logged).",
              "TTL 128/64/255 fingerprint Windows/Linux/Cisco; hops subtract en route.",
              "UDP no-reply = open-or-filtered; SNMP 'public' community is the quiet enumeration win.",
              "ARP on local segments enables spoofing MitM; DNS leaks via AXFR and cache snooping.",
              "Worked trace: TTL 113 after 11 hops -> Windows stack -> tool selection follows.",
            ],
            callout: {
              type: "tip",
              title: "Memorize the port table as pairs",
              body: "Learn ports as service-plus-default-behavior pairs: '445 - SMB - shares and dialects', '161 - SNMP - community strings'. Every enumeration question becomes recall instead of reasoning, and banner-grab questions resolve to tool choice instantly.",
            },
            table: {
              caption: "The ethical hacker's working port table.",
              headers: ["Port", "Service", "Default behavior", "Attack relevance"],
              rows: [
                ["21/23", "FTP/Telnet", "Cleartext credentials", "Immediate findings"],
                ["22", "SSH", "Key exchange, banners", "Version match, brute-force magnet"],
                ["25", "SMTP", "VRFY/EXPN commands", "User enumeration"],
                ["53", "DNS", "Zone data", "AXFR, cache snooping"],
                ["161/162", "SNMP", "Community 'public'", "Device and route inventory"],
                ["137-139/445", "NetBIOS/SMB", "Shares, sessions", "Null sessions, EternalBlue class"],
                ["3389", "RDP", "Remote desktop", "Brute-force + BlueKeep class"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the networking fundamentals an ethical hacker relies on: the port-service table, the TCP handshake and SYN-scan mechanics, TTL fingerprinting, UDP ambiguity and ARP/DNS attack relevance. Include a worked traceroute-to-tool-selection trace.",
                marks: 14,
                outline: [
                  "Port table: 12+ services with default behaviors and attack relevance",
                  "Handshake: SYN -> SYN/ACK -> ACK; SYN scan never sends final ACK - evades naive logging",
                  "TTL: 128 Windows, 64 Linux, 255 Cisco; hops subtract",
                  "UDP ambiguity: no reply = open|filtered; slow scans; SNMP quiet win",
                  "ARP/DNS: spoofing MitM; AXFR zone leak",
                  "Worked trace: TTL 113 at 11 hops -> Windows stack -> enum tool selection",
                  "Banner grab closes the loop: version strings select exploit modules",
                ],
              },
              {
                q: "Why does a UDP scan return 'open|filtered' while TCP SYN scanning resolves cleanly?",
                marks: 7,
                outline: [
                  "UDP has no handshake; open ports may simply not reply to probe payloads",
                  "ICMP port-unreachable signals closed - but firewalls suppress ICMP",
                  "Silence is therefore ambiguous: open or filtered",
                  "TCP SYN gets SYN/ACK (open) or RST (closed) - deterministic",
                  "Hence UDP scans retransmit and run slow",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Information gathering and footprinting",
            body: [
              "Footprinting is the systematic collection of target information before any contact: the phase that converts a company name into an actionable target map. Passive footprinting reads third-party records - WHOIS (registrant, nameservers, expiry), DNS records (A, MX, NS, TXT, SPF entries revealing mail providers and cloud vendors), certificate-transparency logs (crt.sh exposing every issued subdomain), search-engine caches, Shodan/Censys banner indexes, social media (staff names, email formats, badge photos), job postings (the technology inventory hidden in 'must know Fortinet and vCenter'), and breach databases (whether staff credentials already circulate). Active footprinting then verifies: ping sweeps, traceroute, and light web probing - all logged by the target, all needing the signed scope of Unit II.",
              "The worked dossier shows the yield: for example.com, WHOIS gives registrar since 2009 and privacy-shielded contacts; DNS gives Google Workspace MX plus a TXT token revealing a marketing SaaS; crt.sh returns 43 subdomains including staging.example.com and vpn-old.example.com; LinkedIn yields 120 employees with firstname.lastname emails and 3 named system administrators; Shodan shows two exposed RDP ports on regional offices; and one job posting admits ' Fortinet FortiGate + SolarWinds'. The attack plan writes itself from that page: the forgotten subdomains and default-credential RDPs are the soft entry points, the admin names feed phishing pretexts, and the technology list pre-loads the exploit shortlist - all before a single packet touched the target.",
              "Tooling turns the dossier into a pipeline: theHarvester (emails + hosts from search engines), Maltego (entity-graph transforms across domains, people, infrastructure), Recon-ng/Amass (modular subdomain enumeration with permutations and brute force), DNSRecon/DNSenum (record sweeps + AXFR attempts), and MetaGoofil-style document metadata extraction (PDF author fields leak usernames and internal hostnames - the exiftool pass over the target website's downloadable PDFs is a reliable username generator). The exam's operational discipline: passive sources are legal and safe (public records); active verification waits for authorization; and everything lands in the footprint document the engagement planner of Unit II consumes.",
              "Exam framing: 'What is footprinting? Explain passive and active information gathering with tools' is a 7-14 mark staple. Define the phase, split passive/active with sources, work the dossier with its subdomain and email-format yields, list the tools per function, and close with the legality line.",
            ],
            keyTerms: [
              { term: "Footprinting", definition: "Pre-contact systematic collection of target information into a working dossier." },
              { term: "OSINT", definition: "Open-source intelligence - public-record gathering that touches no target systems." },
              { term: "Certificate transparency", definition: "Public TLS issuance logs - the reliable subdomain-discovery channel." },
              { term: "Document metadata", definition: "Author/hostname fields inside posted PDFs and DOCX files - a reliable username source." },
            ],
            diagram: {
              kind: "fork",
              title: "Footprinting branches: passive first, active second",
              caption: "Everything left of the authorization line is free and safe; everything right of it is logged and contracted.",
              start: "Information gathering",
              branches: [
                { label: "Public records", outcome: "WHOIS, DNS, crt.sh, Shodan, LinkedIn, job posts - zero packets to target", good: true },
                { label: "Third-party indexes", outcome: "search caches, breach databases, document metadata - still passive", good: true },
                { label: "Light verification", outcome: "ping sweep, traceroute, web probing - packets, logged, needs authorization", good: false },
                { label: "Deep probing", outcome: "port scans and beyond - that is scanning (1.4), not footprinting", good: false },
              ],
            },
            bullets: [
              "Passive sources: WHOIS, DNS records, crt.sh, Shodan/Censys, social media, job postings, breach databases.",
              "Active verification: ping sweep, traceroute, light web probes - logged by the target, needs the signed scope.",
              "Worked dossier: 43 subdomains from crt.sh; staging + vpn-old are the soft entries; 120-name staff list feeds phishing.",
              "Job postings leak the stack: FortiGate + SolarWinds pre-load the exploit shortlist.",
              "Tools: theHarvester, Maltego, Recon-ng/Amass, DNSRecon, exiftool on posted documents.",
              "Discipline: passive first and unlimited; active waits for authorization; all output lands in the footprint document.",
            ],
            callout: {
              type: "exam",
              title: "The dossier is the answer's spine",
              body: "Examiners reward the worked dossier over tool lists: write one paragraph that walks example.com from WHOIS to crt.sh to LinkedIn to Shodan and shows the attack plan emerging. Tool names support the paragraph; the paragraph is what earns the 14.",
            },
            table: {
              caption: "Footprinting sources and their yields.",
              headers: ["Source", "Query", "Yield"],
              rows: [
                ["WHOIS", "whois example.com", "Registrar, nameservers, expiry"],
                ["DNS", "dig ANY example.com", "MX, TXT tokens, SPF, NS"],
                ["crt.sh", "%.example.com", "All logged subdomains incl. staging"],
                ["Shodan", "org:ExampleCo", "Exposed services + banners"],
                ["LinkedIn", "site:linkedin.com example.com", "Staff names, email format, admins"],
                ["Job posts", "site:example.com careers", "Technology inventory"],
                ["Posted documents", "exiftool over site PDFs", "Usernames, internal hostnames"],
              ],
            },
            examQuestions: [
              {
                q: "Define footprinting and explain passive versus active information gathering. Walk a worked dossier from WHOIS through DNS, certificate transparency, social media and Shodan to an attack plan; list the tooling per function and state the legality boundary.",
                marks: 14,
                outline: [
                  "Definition: pre-contact systematic target-information collection",
                  "Passive: WHOIS, DNS, crt.sh, Shodan, LinkedIn, job posts, metadata - no packets",
                  "Active verification: sweeps and traceroute - logged, needs authorization",
                  "Worked dossier: 43 subdomains, staging/vpn-old soft entries, firstname.lastname emails, 3 admin names",
                  "Yield conversion: soft entries + pretexts + tech stack = the attack plan",
                  "Tools: theHarvester, Maltego, Recon-ng/Amass, DNSRecon, exiftool",
                  "Boundary: passive unlimited and legal; active inside the signed scope only",
                ],
              },
              {
                q: "How does document metadata leak usernames, and how is it harvested?",
                marks: 7,
                outline: [
                  "Office documents record author and machine names",
                  "Site-published PDFs/DOCX often retain original authorship metadata",
                  "exiftool / MetaGoofil batch-extract the fields",
                  "Output is a username list matching the email format",
                  "Feeds password attacks and phishing pretexts",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Determining the network range and identifying active machines",
            body: [
              "Before ports, the attacker needs the map's frame: which address ranges belong to the target (network range determination) and which machines are alive within them (host discovery). Range determination reads the footprint: WHOIS/netblock lookups (whois -h whois.arin.net <IP> returns the owning organization), BGP looking-glasses and bgp.he.net (the announced prefixes for the target's AS number), reverse DNS sweeps across the ranges ( PTR records that name hosts), and traceroute boundaries (where latency jumps to new infrastructure). A mid-size target maps to 3-8 netblocks - the exam's worked number - plus the wildcard reality that cloud-hosted assets sit on provider ranges identifiable only by reverse DNS and service behaviour.",
              "Host discovery then prunes the ranges to live machines, and the techniques trade noise against coverage: ICMP echo (ping sweep - blocked by many firewalls), TCP SYN to common ports (443, 80, 22, 445 - survives ICMP filtering because it looks like traffic), TCP ACK probes (stateful firewalls may RST them, revealing the host), UDP probes to 53/161/137, and ARP sweeps on local segments (unfiltered, definitive - arp-scan 10.0.2.0/24 answers every Ethernet host). The Nmap grammar: nmap -sn 10.0.2.0/24 does the discovery pass without port scanning; -Pn skips discovery entirely (assumes all alive - correct when firewalls drop probes); -PE/-PS443/-PA80/-PU53 mix probe types; --discovery-ignore-rst handles ACK-RST quirks. The worked result pattern: a /24 sweep with mixed probes returns 37 of 256 alive; ICMP-only would have returned 22 - 15 hosts visible only because SYN probes to 443/80 slipped past the ICMP filter, which is the exam's why-multiple-probes point.",
              "Range-and-discovery output is the first entry in the target register that Unit II's planner consumes: netblocks with owners, live hosts with probe evidence, and the reverse-DNS names that hint at function (db01, vpn-gw, pos-047). The professional boundary matters too: discovery against the client's own listed ranges is authorized; the neighbouring ranges that share the provider are not - and it is precisely here that beginners scope-creep, because traceroute and sweeps happily cross netblock boundaries. The RoE fixes the edge; the tester logs where the sweep stopped and why.",
              "Exam framing: 'How does an ethical hacker determine the network range and identify live hosts?' is a 7-14 mark standard. Give the range sources (WHOIS netblocks, BGP/AS, reverse DNS, traceroute), the discovery techniques with their noise/coverage trade-offs, the Nmap grammar, and the worked 37-vs-22 multiple-probe result.",
            ],
            keyTerms: [
              { term: "Netblock / CIDR range", definition: "The announced address block belonging to the target - the scan universe's boundary." },
              { term: "Ping sweep", definition: "ICMP echo across a range to find live hosts - cheapest discovery, often filtered." },
              { term: "ARP sweep", definition: "Local-segment discovery by MAC resolution - definitive and unfiltered on Ethernet." },
              { term: "-Pn", definition: "Nmap flag assuming all hosts alive - the correct mode when probes are firewalled." },
            ],
            diagram: {
              kind: "flow",
              title: "From company name to live-host list",
              caption: "Range first, discovery second; both feed the target register.",
              steps: [
                { label: "WHOIS / BGP", note: "3-8 netblocks with owners" },
                { label: "Reverse DNS sweep", note: "PTR names hint at function" },
                { label: "Traceroute edges", note: "infrastructure boundaries" },
                { label: "Mixed-probe discovery", note: "ICMP + SYN + UDP + ARP" },
                { label: "Target register", note: "37/256 alive, names and evidence" },
              ],
            },
            bullets: [
              "Range sources: WHOIS netblocks, BGP looking-glasses (AS prefixes), reverse DNS sweeps, traceroute boundaries.",
              "Discovery probes: ICMP echo, TCP SYN to 443/80/22/445, TCP ACK, UDP to 53/161/137, ARP on local segments.",
              "Nmap grammar: -sn sweep, -Pn assume-alive, -PE/-PS/-PA/-PU probe mixes.",
              "Worked result: 37/256 alive with mixed probes vs 22 ICMP-only - 15 hosts hide behind ICMP filtering.",
              "Cloud reality: provider-range assets identified by reverse DNS and service behavior, not ownership.",
              "Scope discipline: sweeps stop at the RoE's netblock edge; log where and why.",
            ],
            callout: {
              type: "warning",
              title: "Sweeps cross netblocks",
              body: "Traceroute and mixed-probe sweeps do not respect the client's property line - the provider's neighbours answer too. Stop at the registered ranges, and note in the log exactly which addresses were probed. Discovery is the phase where scope accidents are cheapest to make and easiest to avoid.",
            },
            codeExample: {
              language: "bash",
              caption: "discovery.sh - range to live-host list",
              code: `# range determination
whois -h whois.arin.net 203.0.113.24     # owner org + netblocks
dig -x 203.0.113.24                      # PTR hints: vpn-gw.example.com

# host discovery - mixed probes survive ICMP filters
nmap -sn -PE -PS443,80 -PA80 -PU53 203.0.113.0/24   # 37 up

# icmp-only for contrast
nmap -sn -PE 203.0.113.0/24                          # 22 up

# local segment - definitive
arp-scan --localnet                                   # every Ethernet host`,
            },
            examQuestions: [
              {
                q: "Explain how an ethical hacker determines the network range and identifies active machines. Cover the range sources, the discovery probe types with trade-offs, the Nmap grammar, and a worked result showing why multiple probe types matter.",
                marks: 14,
                outline: [
                  "Range: WHOIS netblocks, BGP/AS prefixes, reverse DNS, traceroute edges - 3-8 blocks typical",
                  "Probes: ICMP echo (cheap, filtered), TCP SYN 443/80 (survives filters), ACK, UDP 53/161, ARP local",
                  "Nmap: -sn, -Pn, -PE/-PS443,80/-PA80/-PU53 mixes",
                  "Worked: 37/256 alive mixed vs 22 ICMP-only - 15 hidden hosts found",
                  "Cloud assets: reverse DNS + behavior over ownership",
                  "Output: target register with evidence and function-hinting names",
                  "Scope: stop at RoE netblocks; log the boundary",
                ],
              },
              {
                q: "Why does ARP sweeping remain the definitive discovery method on a local segment?",
                marks: 7,
                outline: [
                  "IP communication on Ethernet requires MAC resolution",
                  "Hosts must answer ARP to receive any traffic",
                  "No host firewall drops ARP in normal operation",
                  "arp-scan enumerates every live interface including 'stealthy' ones",
                  "Only physical isolation or static-ARP hardening resists",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Finding open ports, access points and OS fingerprinting",
            body: [
              "With live hosts known, the scan answers three questions per host: which ports accept connections (open ports), which wireless access points are audible (access points), and which operating system the stack resembles (OS fingerprinting). Port scanning grammar (nmap): -sS SYN half-open (fast, needs root, avoids connect logs), -sT connect (no privileges, fully logged), -sU UDP (slow, catches SNMP/DNS/NTP), -sA ACK (maps firewall rules, not services), -sF/-sX/-sN FIN/Xmas/NULL (RFC-trick scans that fail on Windows), -p- all 65,535 ports, --top-ports 1000 the fast pass, -T4 timing template, --min-rate for throttled targets. The worked pass: -sS -p- on a live host finds 14 open ports in ~90 seconds; --top-ports 1000 finds 11 in 8 seconds - the missing three (a 30000-range admin port, a database port, a custom service) are the reason full sweeps matter on high-value hosts.",
              "Access-point discovery is the wireless flank: monitor-mode capture (airmon-ng start wlan0; airodump-ng wlan0mon) enumerates every SSID, BSSID, channel, encryption and client within radio range - the same survey the wireless unit details; the exam's point here is placement in the methodology: access points are discovered in the same phase as ports because both are 'what can I reach'. A site survey returns 8-15 SSIDs with 2-4 open/guest networks - each open AP is a potential entry like an open port, and the report treats them as one findings class.",
              "OS fingerprinting reads stack quirks: active fingerprinting sends crafted probes (nmap -O) and matches TTL, window size, DF flag, TCP options order and quirks against a signature database - returning e.g. 'Linux 5.x, 97% confidence' from 8-10 probes; passive fingerprinting (p0f-style) reads the same fields from captured traffic without sending anything - slower, stealthier, less precise. The worked inference chain: TTL 113 (128 initial, Windows family), window 64240 (Windows default), MSS 1460, no SACK in one probe response - the signature vote consolidates on Windows Server; the exploit-selection consequence is immediate (Windows SMB/NetBIOS enumeration next, not Linux SUID checks). OS detection accuracy note for the report: fingerprinting is probabilistic - state confidence, verify by banner, never report the OS as fact.",
              "Exam framing: 'Explain port scanning techniques, access point discovery and OS fingerprinting' is a 14-mark standard. Give the scan-type table with trade-offs, the worked full-vs-top-ports numbers, the monitor-mode AP survey, active-vs-passive fingerprinting, and the TTL/window inference chain with the confidence caveat.",
            ],
            keyTerms: [
              { term: "SYN scan (-sS)", definition: "Half-open TCP scan - fast, root-only, avoids connect-level logging." },
              { term: "Xmas scan", definition: "FIN+PSH+URG flags set; closed ports stay silent per RFC - fails on Windows stacks." },
              { term: "Active OS fingerprinting", definition: "Crafted probe responses matched against signature databases (nmap -O)." },
              { term: "Passive fingerprinting", definition: "OS inference from captured traffic only (p0f) - stealthy, less precise." },
            ],
            diagram: {
              kind: "compare",
              title: "Active vs passive OS fingerprinting",
              caption: "Send probes and be sure, or stay silent and be seen by nobody - the tester picks by authorization stage.",
              left: {
                heading: "Active (nmap -O)",
                items: [
                  "8-10 crafted probes per host",
                  "Reads TTL, window, DF, options order",
                  "97%-style confidence scores",
                  "Packets logged by the target",
                ],
              },
              right: {
                heading: "Passive (p0f class)",
                items: [
                  "Zero packets - reads existing traffic",
                  "Same fields, from observed flows",
                  "Slower accumulation, softer answers",
                  "Suitable for pre-authorization listening",
                ],
              },
            },
            bullets: [
              "Scan table: -sS fast/root; -sT logged/no-root; -sU slow/UDP; -sA firewall mapping; -sF/-sX/-sN RFC tricks fail on Windows.",
              "Worked: -sS -p- finds 14 ports in ~90 s; --top-ports 1000 finds 11 in 8 s - full sweeps matter on high-value hosts.",
              "AP discovery: monitor mode + airodump-ng = 8-15 SSIDs; open/guest APs are entry points treated like open ports.",
              "Fingerprint fields: TTL, window size, DF flag, TCP options order, MSS.",
              "Worked chain: TTL 113 + window 64240 + MSS 1460 -> Windows Server vote -> SMB enumeration selected.",
              "Report caveat: OS detection is probabilistic - state confidence, verify with banners.",
            ],
            callout: {
              type: "exam",
              title: "The confidence caveat is a mark",
              body: "After the fingerprint chain, add: 'OS detection is probabilistic - report the confidence and verify against service banners.' Examiners penalize absolute OS claims; the caveat shows method discipline and earns its line.",
            },
            table: {
              caption: "Port scan types - the exam table.",
              headers: ["Scan", "Flag", "Mechanism", "Trade-off"],
              rows: [
                ["SYN", "-sS", "Half-open handshake", "Fast, root needed, avoids connect logs"],
                ["Connect", "-sT", "Full handshake", "No root, fully logged, slower"],
                ["UDP", "-sU", "Datagram + ICMP inference", "Slow, catches SNMP/DNS/NTP"],
                ["ACK", "-sA", "Unsolicited ACK probe", "Maps firewall rules, not services"],
                ["FIN/Xmas/NULL", "-sF/-sX/-sN", "Flag-trick silence", "Evades some firewalls; useless on Windows"],
                ["Full sweep", "-p-", "All 65,535 ports", "90 s vs 8 s for top-1000; finds the 3 hidden"],
              ],
            },
            examQuestions: [
              {
                q: "Explain open-port discovery, access-point enumeration and OS fingerprinting in the scanning phase. Compare scan types with trade-offs, give the full-vs-top-ports worked numbers, describe the wireless survey, and contrast active and passive OS fingerprinting with an inference chain.",
                marks: 14,
                outline: [
                  "Scan types: -sS, -sT, -sU, -sA, -sF/-sX/-sN with mechanisms and trade-offs",
                  "Worked: 14 ports in 90 s full sweep vs 11 in 8 s top-1000 - hidden admin/DB ports",
                  "AP discovery: monitor mode, airodump survey, 8-15 SSIDs; open APs = entry points",
                  "Active fingerprinting: crafted probes, TTL/window/DF/options, confidence scores",
                  "Passive: p0f-style capture-only inference, stealthier, softer",
                  "Worked chain: TTL 113 + window 64240 -> Windows vote -> SMB enumeration",
                  "Caveat: probabilistic - confidence + banner verification in the report",
                ],
              },
              {
                q: "Why do FIN, Xmas and NULL scans fail against Windows targets?",
                marks: 7,
                outline: [
                  "RFC 793: closed TCP ports should RST any received segment without SYN",
                  "These scans send non-SYN segments; compliant stacks stay silent on closed ports",
                  "Silence lets the scanner infer 'closed or filtered'",
                  "Windows historically RSTs regardless - all ports read as closed",
                  "Result: scan useless on Windows; use -sS/-sT there",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Mapping the network attack surface",
            body: [
              "The attack surface map is the synthesis artifact of the scanning phase: every discovered asset placed on one canvas with its reachability, function, exposure and value - the document the whole engagement hangs from and the section examiners look for under 'mapping the network attack surface'. Its rows: external hosts (perimeter firewalls, VPN gateways, mail, web), internal servers (directory, file, database, print), workstations (the phishable fleet), wireless (corporate, guest, IoT SSIDs), cloud assets (buckets, IAM roles, serverless), and the humans (with their harvested names and pretexts). Each row gets columns for: how reachable (internet / partner / internal-only), what the asset does, what exposure the scan showed (versions, ports, banners), and what it is worth to the attacker.",
              "The worked map shows why the artifact steers the engagement: a mid-size estate maps to 62 external assets (of which 4 are VPN/web high-value), 180 internal (of which 12 hold data the business actually sells), 15 wireless networks (3 corporate, 2 guest, 10 IoT), 40 cloud resources (6 with public exposure), and 200 humans. The prioritization falls out arithmetically: 4 external high-value + 6 exposed cloud + the 10-IoT forgotten-SSID class + 3 named admins = the engagement's first-week target list. Without the map, scanning is uniform and hours burn on the print server; with it, the threat model of Unit II picks paths in minutes.",
              "The map also fixes the report's structure: findings attach to map rows (the SMB finding lives on the file-server row, the SSRF on the cloud row), and the remediation roadmap follows the same rows - which is why professional reports open with the surface summary ('62 external, 6 cloud-exposed, 3 named admins') before any CVE. The maintenance reality closes the loop: the surface drifts weekly (new cloud buckets, departed-staff credentials), so mature programmes re-map continuously with asset inventories and cloud posture tools - the map is a living document, and the exam's maturity mark goes to answers that say so.",
              "Exam framing: 'What is the network attack surface and how is it mapped?' is a 7-mark standard; 'map an estate and derive the target list' is 14. Define the artifact, give the row taxonomy, work the 62/180/15/40/200 numbers into the prioritization arithmetic, and close with the living-document point.",
            ],
            keyTerms: [
              { term: "Attack surface", definition: "The complete set of reachable assets and entry points an attacker could target." },
              { term: "Target register", definition: "The engagement's list of in-scope assets with evidence and value ratings." },
              { term: "Reachability", definition: "Internet / partner / internal-only - the first prioritization axis on the map." },
              { term: "Surface drift", definition: "Continuous change of the surface (cloud, staff, services) requiring re-mapping." },
            ],
            diagram: {
              kind: "matrix",
              title: "The surface map's prioritization quadrant",
              caption: "Value against reachability; the upper-right is the first week's work.",
              axes: { x: "Reachability (internal-only -> internet)", y: "Asset value (low -> high)" },
              quadrants: [
                { label: "Second wave", note: "high value, internal - after a foothold exists" },
                { label: "First week", note: "high value, internet-reachable - VPN, web, exposed cloud" },
                { label: "Backlog", note: "low value, internal - print servers, lab hosts" },
                { label: "Quick wins", note: "low value, exposed - forgotten SSIDs, default creds" },
              ],
            },
            bullets: [
              "Row taxonomy: external hosts, internal servers, workstations, wireless, cloud assets, humans.",
              "Per-row columns: reachability, function, scan exposure, attacker value.",
              "Worked estate: 62 external (4 high-value), 180 internal (12 data-bearing), 15 wireless (10 IoT), 40 cloud (6 exposed), 200 humans.",
              "Prioritization arithmetic: 4 external + 6 cloud + IoT SSIDs + 3 admins = first-week list.",
              "Report structure follows the map: findings attach to rows; remediation follows rows.",
              "Surface drifts weekly - continuous re-mapping with inventories and CSPM is the maturity answer.",
            ],
            callout: {
              type: "tip",
              title: "Write the map before scanning deep",
              body: "The map converts scanning from uniform noise into directed work. Build it after discovery and light scanning (rows and columns filled), then deep-scan only the upper-right quadrant. The hours saved are the engagement's profit margin.",
            },
            table: {
              caption: "The worked surface map for a mid-size estate.",
              headers: ["Row class", "Count", "Of interest", "Why"],
              rows: [
                ["External hosts", "62", "4", "VPN + web - internet-reachable high value"],
                ["Internal servers", "180", "12", "Data-bearing: directory, file, DB"],
                ["Wireless", "15", "3", "2 guest + 1 forgotten-IoT pivot class"],
                ["Cloud assets", "40", "6", "Public buckets / roles / metadata exposure"],
                ["Humans", "200", "3", "Named admins = phishing pretexts"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the network attack surface and its mapping. Give the row taxonomy and per-row columns, work a mid-size estate's numbers into a prioritized first-week target list, and explain how the map structures both the engagement and the report.",
                marks: 14,
                outline: [
                  "Definition: complete canvas of reachable assets with exposure and value",
                  "Rows: external, internal servers, workstations, wireless, cloud, humans",
                  "Columns: reachability, function, scan exposure, attacker value",
                  "Worked: 62/180/15/40/200 with 4/12/3/6/3 of-interest counts",
                  "Prioritization: external high-value + exposed cloud + IoT SSIDs + admins = week one",
                  "Report tie-in: findings and remediation attach to map rows",
                  "Maturity: surface drifts - continuous re-mapping, inventories, CSPM",
                ],
              },
              {
                q: "Why does a uniform deep scan waste engagement hours compared to a mapped approach?",
                marks: 7,
                outline: [
                  "Deep scans cost minutes-to-hours per host (full sweeps, versions)",
                  "Most hosts are low-value: print servers, lab boxes",
                  "The map concentrates deep scanning on high-value reachable rows",
                  "Uniform scanning trades coverage the report never uses",
                  "Threat modeling (Unit II) consumes the map, not the raw scan",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Google hacking, scanning, Windows and Linux hacking",
            body: [
              "The syllabus's closing Unit I cluster packages four attack surfaces. Google hacking (dorking) extracts exposed content through search operators: site:example.com confines results, filetype:pdf/xls/sql/bak finds documents, inurl:admin|config|login finds panels, intitle:'index of' finds directory listings, cache: reads archived copies; a 10-minute dork pass on a typical domain returns backup dumps, credential sheets and internal portals - GHDB (Google Hacking Database) is the operator cookbook, and the mitigation is robots.txt hygiene plus no-sensitive-content-on-webroots. Scanning is sections 1.4-1.6 compressed: discovery, ports, versions, OS - already covered, and named here because the syllabus groups them.",
              "Windows hacking rides the platform's own machinery: NetBIOS/SMB null sessions (net use \\\\target\\IPC$ '' /u:'' enumerating shares and users on legacy targets), RPC endpoint enumeration, PowerShell remoting abuse where admins left WinRM open, RDP brute-force at 3389, and the credential locations (SAM hashes, LSASS memory) that Unit IV cracks. Linux hacking rides configuration weakness: SSH enumeration and weak keys, SUID binaries and sudo misconfigurations (the escalation class of Unit II), world-readable configuration files holding credentials, cron jobs running writable scripts, and the service-specific catalogue (weak ftp/webservers on embedded boxes). Both families end in the same place - credentials or a shell - and the exam wants the platform split stated cleanly: Windows = SMB/RPC/token classes; Linux = file-permission and service-config classes.",
              "The worked pair shows the split in one engagement: the Windows host (TTL 113, 445 open) falls to SMB enumeration - 3 shares, 28 users, one password reuse caught by spraying against the password policy discovered alongside; the Linux host (TTL 63, 22 open) falls to config review - /etc/exports world-readable NFS (mountable, contains a backup tar with an SSH key), the key opens user deployment, sudo -l shows NOPASSWD vim, root follows. Two platforms, two technique families, one report - and the dork pass earlier had already handed over the internal network diagram PDF whose existence made both paths visible.",
              "Exam framing: 'Explain Google hacking, scanning, Windows and Linux hacking' is the syllabus's literal 14-mark question. Define dorking with five operators and one defensive line, compress scanning to its phase position, split Windows (SMB/RPC/token) from Linux (permission/config) technique families with the worked pair, and close with the GHDB/robots.txt mitigation.",
            ],
            keyTerms: [
              { term: "Google dork", definition: "Search-operator query (site:, filetype:, inurl:, intitle:) extracting exposed content." },
              { term: "GHDB", definition: "The Google Hacking Database - the community cookbook of tested dork operators." },
              { term: "Null session", definition: "Anonymous SMB/NetBIOS session enumerating shares and users on legacy Windows." },
              { term: "SUID misconfiguration", definition: "Root-owned executables or NOPASSWD sudo entries yielding root on Linux." },
            ],
            diagram: {
              kind: "compare",
              title: "Windows vs Linux attack families",
              caption: "Different machinery, same destination - credentials or a shell.",
              left: {
                heading: "Windows classes",
                items: [
                  "NetBIOS/SMB null sessions and shares",
                  "RPC endpoint and service enumeration",
                  "WinRM/PowerShell remoting abuse",
                  "RDP brute-force; SAM/LSASS credentials",
                ],
              },
              right: {
                heading: "Linux classes",
                items: [
                  "SSH enumeration and weak keys",
                  "SUID binaries + sudo NOPASSWD",
                  "World-readable configs holding secrets",
                  "Writable cron scripts; weak embedded services",
                ],
              },
            },
            bullets: [
              "Dork operators: site:, filetype: (pdf/xls/sql/bak), inurl: (admin/config/login), intitle:'index of', cache:.",
              "Worked dork yield: backup dumps, credential sheets, internal portals in 10 minutes; mitigation = robots hygiene + no secrets on webroots.",
              "Windows machinery: null sessions, RPC enumeration, WinRM abuse, RDP brute-force, SAM/LSASS credentials.",
              "Linux machinery: SSH/weak keys, SUID + sudo misconfig, world-readable secrets, writable cron, embedded services.",
              "Worked pair: SMB 28 users -> spray -> shell; NFS export -> SSH key -> sudo vim -> root.",
              "Both families terminate in credentials or shell - the report unifies them.",
            ],
            callout: {
              type: "exam",
              title: "Name the split, then work one host each",
              body: "The Windows/Linux question scores through contrast: state the machinery split in one sentence each, then work one concrete host per platform. Examiners reward the symmetric structure - two families, two worked cases, one closing sentence.",
            },
            codeExample: {
              language: "bash",
              caption: "dorks-and-platforms.txt - the syllabus's four surfaces",
              code: `# Google dorking
site:example.com filetype:sql
site:example.com intitle:"index of" backup
inurl:admin site:example.com

# Windows path
net use \\\\203.0.113.14\\IPC$ "" /u:""     # null session
enum4linux -a 203.0.113.14                # 3 shares, 28 users

# Linux path
showmount -e 203.0.113.21                 # world-readable NFS export
mount -t nfs 203.0.113.21:/backup /mnt    # tar with SSH key
sudo -l                                    # NOPASSWD: vim -> root`,
            },
            examQuestions: [
              {
                q: "Explain Google hacking, scanning, Windows hacking and Linux hacking as a connected toolkit. Give five dork operators with a defensive line, position scanning in the methodology, split the Windows and Linux technique families with one worked host each, and close with mitigations.",
                marks: 14,
                outline: [
                  "Dorking: site:/filetype:/inurl:/intitle:/cache: - GHDB cookbook; 10-minute yield described",
                  "Defence: robots.txt hygiene, no sensitive content on webroots, authenticated areas off-index",
                  "Scanning: discovery + ports + versions + OS (sections 1.4-1.6) feeding both platform families",
                  "Windows: null sessions, RPC, WinRM, RDP brute-force, SAM/LSASS - worked SMB 28-user spray",
                  "Linux: SSH/keys, SUID/sudo, world-readable configs, cron, embedded services - worked NFS->key->vim->root",
                  "Both terminate in credentials/shell - one report, two families",
                  "Mitigations: SMB signing + share ACLs; file permissions + sudo auditing + NFS export controls",
                ],
              },
              {
                q: "What is a null session and why do modern Windows systems resist it?",
                marks: 7,
                outline: [
                  "Anonymous SMB session to IPC$ with empty credentials",
                  "Legacy systems allowed share/user enumeration over it",
                  "RestrictAnonymous and SMB signing hardening removed the capability",
                  "Modern targets require credentials for enumeration",
                  "Legacy/embedded boxes remain the finding class",
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
      title: "The Business Perspective",
      summary:
        "Unit II covers the business side of the ethical hack: objectives, security policy, previous results, the limitations of a controlled attack, timing and attack-type planning, multi-phased attacks, teaming, the engagement planner, and the consultant-logistics-law-enforcement machinery.",
      chapter: {
        number: "02",
        title: "Planning the Controlled Attack",
        intro:
          "Unit II covers business objectives, security policy, previous test results, inherent and imposed limitations, timing, attack type, source point, multi-phased attacks, teaming, the engagement planner, and the consultant and logistics layer.",
        inOneBreath:
          "The engagement descends from its business objective (compliance, incident, change, assurance, improvement) through policy and previous results (27/21/6) into a framing sentence. Inherent limitations (time, knowledge, noise, scope) differ from imposed ones (technique, target, timing exclusions) - the coverage statement separates them. Four planning decisions chain: timing, attack type, source point, required knowledge; multi-phase plans carry preconditions, exits and a buffer; the engagement planner binds teaming, tasks, evidence and deconfliction; procurement, logistics and law-enforcement anticipation complete the skeleton.",
        sections: [
          {
            number: "2.1",
            title: "Business objectives, security policy and previous test results",
            body: [
              "The business perspective opens the engagement because it answers the question every technical step serves: why is this test happening? Business objectives for a test come in recognizable families: compliance-driven (PCI DSS, ISO 27001 audit evidence, RBI/SEBI expectations), incident-driven (a breach or near-miss last quarter), change-driven (a new internet-facing product or a merger's network integration), assurance-driven (customer or board demands proof), and improvement-driven (a mature programme seeking the next weak layer). Each family changes the engagement: compliance tests buy coverage and evidence, incident tests buy root-cause depth, improvement tests buy creative attack paths. The proposal that names the objective explicitly in section one is the professional difference examiners reward.",
              "The security policy is the engagement's rule source: it defines what the organization considers acceptable testing (which systems may be attacked, when, by whom), what it considers critical (the data classification that fixes value ratings), and what it requires of testers (NDAs, background checks, insurance). Previous test results are the engagement's memory: last year's report shows what was found, what was fixed, and - the honest metric - what recurred. A worked review: last year's report listed 27 findings, 21 remediated, 6 accepted with owners; this year's plan therefore spends less time on the fixed classes and adds the surfaces that grew since (a new SaaS integration, 3 acquired subsidiaries' networks). Re-testing the 21 fixed findings is standard scope - the regression check that proves remediation held.",
              "The three inputs converge into the engagement's framing sentence, which the report's executive summary will quote: 'at the client's request after the Q3 phishing incident, this test verifies whether internet-facing services and the phishing path still yield domain access within one week, re-tests the 21 remediated findings, and covers the two subsidiaries acquired since the last assessment.' Every later artifact - scope, RoE, target register, hours allocation - hangs from that sentence. The exam's analysis point: tests without business objectives become scanner reports; tests with objectives become evidence for decisions.",
              "Exam framing: 'Explain the business perspective of an ethical hack - objectives, policy, previous results' is a 7-mark opener. Give the five objective families with one engagement-shape consequence each, the policy's three rule roles, and the worked 27/21/6 review that shapes this year's scope.",
            ],
            keyTerms: [
              { term: "Engagement objective", definition: "The business reason for the test - compliance, incident, change, assurance or improvement." },
              { term: "Security policy", definition: "The organization's rules on acceptable testing, critical assets and tester requirements." },
              { term: "Regression re-test", definition: "Re-verifying last cycle's remediated findings still hold." },
              { term: "Accepted risk", definition: "A documented, owned decision not to remediate a finding." },
            ],
            diagram: {
              kind: "pyramid",
              title: "From business reason to technical hour",
              caption: "Every layer of the engagement descends from the objective sentence.",
              tiers: [
                { label: "Business objective", note: "why: incident, compliance, assurance, change, improvement" },
                { label: "Security policy + previous results", note: "rules and memory shape the boundaries" },
                { label: "Framing sentence", note: "what this test will prove" },
                { label: "Scope, RoE, target register", note: "where and when" },
                { label: "Hours and techniques", note: "the technical work, allocated by objective" },
              ],
            },
            bullets: [
              "Objective families: compliance (evidence), incident (root cause), change (new surface), assurance (proof), improvement (creative paths).",
              "Objective changes engagement shape: compliance buys coverage; incident buys depth; improvement buys creativity.",
              "Security policy defines acceptable testing, critical assets (classification), tester obligations.",
              "Previous results are memory: worked 27 findings -> 21 fixed -> 6 accepted with owners.",
              "This year's plan: re-test the 21 (regression), deprioritize fixed classes, add the new SaaS and 2 subsidiaries.",
              "Framing sentence quoted by the executive summary ties every later artifact together.",
            ],
            callout: {
              type: "tip",
              title: "Quote the objective in section one",
              body: "Proposals that open with the business objective win and test better: 'this test verifies whether the phishing path still yields domain access' gives the whole team a target, and the report can honestly say whether the objective held - the sentence that turns a finding list into an answer.",
            },
            table: {
              caption: "Objective families and what they change.",
              headers: ["Family", "Trigger", "Engagement shape"],
              rows: [
                ["Compliance", "PCI / ISO / regulator", "Coverage-heavy, evidence-grade documentation"],
                ["Incident", "Breach or near-miss", "Root-cause depth on the incident path"],
                ["Change", "New product / merger", "Focus on the new or integrated surface"],
                ["Assurance", "Customer / board demand", "Third-party grade, executive reporting"],
                ["Improvement", "Mature programme", "Creative, stealth-adjacent attack paths"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the business perspective of an ethical hack: the objective families and how each changes the engagement, the security policy's role, and how previous test results shape the new scope. Support with a worked 27/21/6 review.",
                marks: 14,
                outline: [
                  "Objective families: compliance, incident, change, assurance, improvement",
                  "Shape consequences: evidence-grade vs root-cause vs creative coverage",
                  "Policy roles: acceptable testing, critical-asset classification, tester obligations",
                  "Previous results as memory: 27 findings, 21 remediated, 6 accepted with owners",
                  "Regression: re-test the 21 to prove fixes held",
                  "New surfaces: SaaS integration and 2 acquired subsidiaries added to scope",
                  "Framing sentence ties scope, RoE, register and hours together",
                ],
              },
              {
                q: "Why are 'accepted risks' from last year's report important inputs to this year's engagement?",
                marks: 7,
                outline: [
                  "Acceptances are documented, owned decisions - testable over time",
                  "Re-check whether acceptance rationale still holds (control changed?)",
                  "Exploitation priority: accepted risks remain attacker-reachable",
                  "Trend evidence: repeat acceptances signal governance failure",
                  "Report re-states each acceptance with current status",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Business challenges and the test's value case",
            body: [
              "Business challenges are the frictions a test must navigate, and naming them is a marked skill because every one has a project consequence. The catalogue: fear of disruption (production systems that cannot crash - the RoE excludes destructive techniques), confidentiality anxiety (findings and data exposure - answered by NDAs, redaction rules and evidence-handling terms), budget competition (security testing competing with feature work - answered by the value case), timeline pressure (audit deadlines forcing compressed scopes), and trust asymmetry (an outsider given credentials - answered by insurance, background checks and reference calls). Each challenge has a contractual answer, and the engagement planner records both sides.",
              "The value case is the test's business arithmetic, and the exam wants it with numbers. Cost side: a two-week web-centric engagement at 80 consultant-hours priced per day; a quarterly continuous-testing subscription; tooling and cloud lab costs. Benefit side, in the client's currency: avoided breach cost (industry average in the millions per incident; regulatory fines a multiple of turnover in GDPR-scale regimes), avoided downtime hours (a 4-hour outage of the order-fulfilment system costs the client's own daily revenue number), compliance penalties avoided, and the premium reductions some insurers extend for evidenced testing. The worked sentence: '80 hours of testing at X is priced against a single phishing-borne incident that cost a comparable firm 200+ hours of response and a regulatory notice - the ratio is the value case.'",
              "The honest value-case caveat is itself a mark: testing reduces but never eliminates risk - it samples the attack surface in time (findings valid until the next change) and space (scoped assets only). Mature clients treat testing as a measurement instrument, not a vaccine: the trend of findings and repeat rates is the value, not the absence of findings. The exam's closing sentence pairs the two: sell the test with the value case, manage expectations with the sampling caveat, and put both in the proposal so the client's board sees the same arithmetic the tester does.",
              "Exam framing: 'Discuss the business challenges and value of an ethical hacking engagement' is a 7-mark standard. Give the five challenges with contractual answers, work the cost/benefit arithmetic with a concrete ratio, and close with the sampling caveat sentence.",
            ],
            keyTerms: [
              { term: "Disruption fear", definition: "The client's worry that testing breaks production - bounded by RoE technique exclusions." },
              { term: "Value case", definition: "The cost-versus-avoided-loss arithmetic that justifies the engagement." },
              { term: "Trust asymmetry", definition: "The outsider-with-credentials problem - answered by vetting, NDAs, insurance." },
              { term: "Sampling caveat", definition: "Testing measures risk at a point in time and within scope - not a guarantee." },
            ],
            diagram: {
              kind: "compare",
              title: "Business challenge vs contractual answer",
              caption: "Every friction has a paper answer - name both sides.",
              left: {
                heading: "Challenges",
                items: [
                  "Disruption fear - production cannot crash",
                  "Confidentiality anxiety - findings leak",
                  "Budget competition - testing vs features",
                  "Timeline pressure - audit deadlines",
                  "Trust asymmetry - outsider credentials",
                ],
              },
              right: {
                heading: "Answers",
                items: [
                  "RoE technique exclusions + staging tests",
                  "NDAs, redaction rules, evidence terms",
                  "Value case with breach-cost arithmetic",
                  "Phased scope: critical assets first",
                  "Insurance, vetting, references, escrow",
                ],
              },
            },
            bullets: [
              "Challenges: disruption, confidentiality, budget, timeline, trust - each with a paper answer.",
              "Cost side: 80 hours two-week engagement, tooling, cloud lab; continuous-testing subscriptions as the cadence alternative.",
              "Benefit side: breach cost in millions, downtime priced in daily revenue, regulatory exposure, insurance effects.",
              "Worked ratio: 80 test-hours vs 200+ incident-response hours for a comparable firm.",
              "Sampling caveat: findings valid in time and space; testing is measurement, not vaccination.",
              "Value = trend of findings and repeat rates, not absence of findings.",
            ],
            callout: {
              type: "exam",
              title: "The ratio sentence earns the applied mark",
              body: "Abstract value arguments score poorly; the ratio sentence scores: '80 hours of testing against 200+ hours of incident response and a regulatory notice.' Write it once with the client's own downtime number substituted in.",
            },
            table: {
              caption: "The value case with numbers.",
              headers: ["Side", "Item", "Typical magnitude"],
              rows: [
                ["Cost", "Two-week engagement, 80 hours", "Fixed price by seniority mix"],
                ["Cost", "Tooling + cloud lab", "Single-digit % of engagement"],
                ["Benefit", "Avoided breach response", "200+ hours + incident costs"],
                ["Benefit", "Avoided regulatory notice", "Fines up to turnover-percentage regimes"],
                ["Benefit", "Avoided downtime", "Hours x daily revenue of order systems"],
                ["Benefit", "Insurance / customer assurance", "Premiums + deal enablement"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the business challenges of penetration testing and construct the value case. Present the five challenges with contractual answers, work the cost/benefit arithmetic with a ratio, and state the sampling caveat that manages expectations.",
                marks: 14,
                outline: [
                  "Challenges: disruption, confidentiality, budget, timeline, trust",
                  "Answers: RoE exclusions, NDAs/redaction, value case, phased scope, vetting/insurance",
                  "Cost side: 80 hours, tooling, lab; continuous cadence alternative",
                  "Benefit side: breach cost, downtime in daily revenue, fines, insurance",
                  "Worked ratio: 80 test-hours vs 200+ incident hours",
                  "Caveat: sampling in time and scope; measurement not vaccination",
                  "Trend value: findings and repeat-rate trends over absence of findings",
                ],
              },
              {
                q: "How should a tester respond to a client whose primary challenge is fear of production disruption?",
                marks: 7,
                outline: [
                  "Exclude destructive techniques in the RoE explicitly",
                  "Test staging first, production with read-only proofs",
                  "Throttle scans; agree maintenance windows",
                  "SOC deconfliction contacts and abort criteria",
                  "Deliver vulnerability-assessment evidence if full exploitation is refused",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Inherent and imposed limitations",
            body: [
              "Every controlled attack runs inside two constraint sets the syllabus names precisely. Inherent limitations are the physics of testing itself: time (weeks of work against an attacker's unlimited patience - the tester samples what the adversary would eventually cover), knowledge (the tester lacks the insider's context and the criminal's desperation), noise (scans and exploits trip monitoring in ways a stealthy adversary might avoid), and scope (the contract's edges - while real attackers read every interface). The classic worked illustration: a tester given two weeks finds the phishing path; an APT that spent nine months cultivating a supply-chain foothold walks a path no scoped test would ever see. The honest report states this sampling nature explicitly - testing proves the found paths, never the absence of paths.",
              "Imposed limitations are the client's deliberate boundaries, and they are legitimate engineering choices the RoE records: technique exclusions (no DoS on production, no physical entry without escorts, no destructive payload classes), target exclusions (legacy systems too fragile, third-party platforms contractually off-limits), timing windows (off-hours testing only, SOC-deconflicted), identity constraints (some tests use provided accounts rather than stolen-class access), and disclosure constraints (test results shared with named recipients only). Each imposed limitation trades realism for safety, and the professional move is to price the trade in the proposal: 'excluding DoS removes availability findings; compensating with a staged resilience exercise on staging' - the sentence that keeps the limitation visible rather than silent.",
              "The exam's analysis axis is the interaction between the two sets: inherent limitations bound what any test can know; imposed limitations bound what this test may do; and the report must distinguish them when explaining coverage. A worked coverage statement: 'of 62 external assets, 58 were tested fully; 4 were excluded by client instruction (fragile legacy), and sampling means paths beyond the tested set remain unknown' - the first clause is imposed, the second inherent, and both belong in the report's limitations section. Examiners consistently reward candidates who can name which limitation type explains which coverage gap.",
              "Exam framing: 'Explain the inherent and imposed limitations of penetration testing' is a reliable 7-14 mark question. Define both sets with the four inherent items and five imposed items, work the two-weeks-vs-nine-months illustration, give the coverage statement that separates the two, and close with the pricing-the-trade sentence.",
            ],
            keyTerms: [
              { term: "Inherent limitation", definition: "The test's own physics: time, knowledge, noise, scope - bounding what any test can know." },
              { term: "Imposed limitation", definition: "The client's deliberate RoE boundaries: techniques, targets, timing, identity, disclosure." },
              { term: "Coverage statement", definition: "The report sentence separating what was tested, what was excluded, and what remains unknown." },
              { term: "Staged resilience exercise", definition: "Availability testing on staging - the compensating answer to a DoS exclusion." },
            ],
            diagram: {
              kind: "matrix",
              title: "Limitation types across the coverage question",
              caption: "Name which type explains each gap; that separation is the analysis mark.",
              axes: { x: "Cause (test physics -> client instruction)", y: "Coverage effect (small -> large)" },
              quadrants: [
                { label: "Inherent - sampling", note: "paths beyond the tested set remain unknown, always" },
                { label: "Inherent - knowledge/noise", note: "insider context and stealth the tester lacks" },
                { label: "Imposed - technique exclusions", note: "DoS/physical off - availability classes untested" },
                { label: "Imposed - target exclusions", note: "legacy and third-party assets untested by instruction" },
              ],
            },
            bullets: [
              "Inherent: time (sampling), knowledge (no insider context), noise (monitoring trips), scope (contract edges).",
              "Imposed: technique exclusions, target exclusions, timing windows, identity constraints, disclosure limits.",
              "Worked illustration: two-week test finds the phishing path; a nine-month supply-chain APT walks an untestable path.",
              "Price the trade in the proposal: DoS exclusion -> staged resilience exercise on staging.",
              "Coverage statement separates the sets: '58 fully tested, 4 excluded by instruction, paths beyond remain unknown.'",
              "Reports must classify each coverage gap by limitation type.",
            ],
            callout: {
              type: "warning",
              title: "Never let an imposed limitation go silent",
              body: "The failure pattern: the RoE excludes a technique, nobody writes it down, and the report later reads as if availability was tested. Silent limitations become liability - every exclusion appears in the proposal, the RoE and the report's limitations section with the compensating control named.",
            },
            table: {
              caption: "The two limitation sets side by side.",
              headers: ["Set", "Items", "Where recorded"],
              rows: [
                ["Inherent", "Time, knowledge, noise, scope", "Report limitations - unchangeable"],
                ["Imposed", "Techniques, targets, timing, identity, disclosure", "Proposal + RoE + report - priced and compensated"],
                ["Example inherent", "Nine-month APT path untestable", "Sampling caveat sentence"],
                ["Example imposed", "No DoS on production", "Staged resilience exercise instead"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the inherent and imposed limitations of a controlled attack. List each set, illustrate the inherent sampling problem with the two-weeks-vs-nine-months case, show how imposed limitations are priced with compensations, and write the coverage statement that separates them.",
                marks: 14,
                outline: [
                  "Inherent: time, knowledge, noise, scope - physics of testing",
                  "Imposed: technique/target exclusions, timing, identity, disclosure - client boundaries",
                  "Sampling case: two-week test vs nine-month supply-chain APT path",
                  "Pricing: DoS exclusion compensated by staged resilience exercise",
                  "Coverage statement: 58 fully tested, 4 excluded by instruction, unknown beyond",
                  "Classification duty: every gap labelled inherent or imposed",
                  "Honesty rule: testing proves found paths, never absence of paths",
                ],
              },
              {
                q: "Why is the noise limitation a double-edged finding for the client?",
                marks: 7,
                outline: [
                  "Tester's noisy scans trip monitoring - realistic for unsophisticated attackers",
                  "Stealthy adversaries may avoid triggering the same alerts",
                  "Detection success during a test does not prove detection of patient attackers",
                  "Red team operations measure stealth detection separately",
                  "Report distinguishes visible-work detection from covert detection capability",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Timing, attack type, source point and required knowledge",
            body: [
              "Four planning decisions shape every controlled attack, and the syllabus names them as a cluster. Timing: when the attack runs - off-hours for quiet networks (fewer users to disturb, fewer eyes to notice, but SOC may be thinner), business hours for realistic load (MFA and helpdesk behavior differ), and window length (a 2-week window at 6 hours/day versus a 1-week sprint; the worked number: compressed windows trade depth for schedule, and the planner allocates accordingly). Attack type: black/grey/white-box and external/internal (Unit 1.3's axes revisited at planning level) - the decision that fixes what the tester may know and where they start. Source point: where the attack originates - the tester's own infrastructure, a rented VPS in the client's country (latency and geo-blocking realism), an on-site laptop on the staff VLAN for internal tests, or a phishing-delivered implant (the C2 box needs logging for the report's traffic timeline).",
              "Required knowledge is the fourth decision and the syllabus's phrase for skill matching: what the tester must know to execute the chosen plan - web-exploitation depth for an app-heavy surface, Active Directory internals for domain paths, wireless tooling for the RF flank, cloud IAM mechanics for the SaaS estate. The mismatch failure mode is the career lesson: a web-focused tester assigned a domain-escalation engagement burns the window learning what a specialist knows cold, and the report under-delivers. The planner therefore names required knowledge per phase and either staffs it or adjusts the plan - 'AD specialist joins days 4-6 for the escalation phase' is a normal planning line.",
              "The four decisions interact, and the worked plan shows it: objective (prove domain access via phishing), timing (2 weeks, business hours - helpdesk realism matters), attack type (grey-box internal + external phishing), source point (rented VPS for C2 + on-site laptop day 3 for the internal phase), required knowledge (AD escalation specialist on days 4-6). The interplay rule the exam rewards: each decision constrains the next - timing realism pushed business hours, business hours made the phishing path plausible, the phishing path set the C2 requirements, and the C2 traffic pattern demanded the specialist. Planning is sequencing, not listing.",
              "Exam framing: 'Explain the planning decisions - timing, attack type, source point, required knowledge' is a 7-14 mark standard. Define each decision with its options and trade-offs, work the four-decision plan with its interplay chain, and close with the sequencing rule.",
            ],
            keyTerms: [
              { term: "Timing window", definition: "When and how long the attack runs - realism versus disruption trade." },
              { term: "Source point", definition: "Where attack traffic originates - own infra, VPS, on-site laptop, or implant C2." },
              { term: "Required knowledge", definition: "The skills a plan demands - staffed or the plan adjusts." },
              { term: "Deconfliction", definition: "Agreed signals and contacts keeping tester traffic distinguishable from real incidents." },
            ],
            diagram: {
              kind: "flow",
              title: "The four decisions as a chain",
              caption: "Each decision constrains the next - planning is sequencing, not listing.",
              steps: [
                { label: "Objective", note: "prove phishing -> domain access" },
                { label: "Timing", note: "2 weeks, business hours - helpdesk realism" },
                { label: "Attack type", note: "grey-box: phishing + internal" },
                { label: "Source point", note: "VPS C2 + on-site laptop day 3" },
                { label: "Required knowledge", note: "AD specialist days 4-6" },
              ],
            },
            bullets: [
              "Timing: off-hours (quiet, thin SOC) vs business hours (realistic load, helpdesk behavior); window length trades depth for schedule.",
              "Attack type: black/grey/white and external/internal - fixes what the tester may know and where they start.",
              "Source point options: own infrastructure, in-country VPS (geo realism), on-site laptop (internal phase), implant C2 (logged for the timeline).",
              "Required knowledge: web depth, AD internals, wireless tooling, cloud IAM - mismatch burns the window.",
              "Worked plan: 2 weeks business-hours grey-box, VPS C2, on-site day 3, AD specialist days 4-6.",
              "Interplay rule: each decision constrains the next - plan as a chain.",
            ],
            callout: {
              type: "tip",
              title: "Staff the specialist, do not wing it",
              body: "The planner's honest line - 'AD specialist days 4-6' - is what separates professional plans from wishful ones. Naming required knowledge per phase forces the staffing conversation before the window starts, not on day 4 when the escalation path appears.",
            },
            table: {
              caption: "Planning decisions and their trade-offs.",
              headers: ["Decision", "Options", "Trade-off"],
              rows: [
                ["Timing", "Off-hours / business hours / sprint", "Quiet vs realistic; depth vs schedule"],
                ["Attack type", "Black/grey/white; external/internal", "Realism vs coverage"],
                ["Source point", "Own infra / VPS / on-site / implant", "Control vs realism; logging duty"],
                ["Required knowledge", "Web / AD / wireless / cloud specialists", "Cost vs capability match"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the four planning decisions of a controlled attack - timing, attack type, source point and required knowledge - with their options and trade-offs, and demonstrate their interplay with a worked plan.",
                marks: 14,
                outline: [
                  "Timing: off-hours quiet vs business-hours realism; sprint depth cost",
                  "Attack type: knowledge and starting-position axes from Unit 1.3",
                  "Source point: own infra, in-country VPS, on-site laptop, implant C2 with logging",
                  "Required knowledge: web/AD/wireless/cloud matching; mismatch burns the window",
                  "Worked plan: 2 weeks business-hours grey-box phishing, VPS C2, on-site day 3, AD specialist days 4-6",
                  "Interplay chain: realism -> phishing path -> C2 needs -> specialist staffing",
                  "Sequencing rule: each decision constrains the next",
                ],
              },
              {
                q: "Why might a tester choose business-hours timing over an off-hours window despite higher disruption risk?",
                marks: 7,
                outline: [
                  "MFA and helpdesk behaviour differ at 3 a.m.",
                  "Phishing realism requires users at desks",
                  "Detection evaluation needs the SOC at full staffing",
                  "Off-hours results overstate attacker success",
                  "Disruption managed through throttling and deconfliction",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Multi-phased attacks",
            body: [
              "A multi-phased attack is the planner's admission that one action rarely achieves an objective: the test chains phases, each with its own preparation, execution and evidence, so the objective emerges from accumulation. The canonical phase set mirrors the lifecycle: phase 1 - access (a phished credential or an exposed service), phase 2 - expansion (escalation, lateral movement, persistence), phase 3 - objective (the data, mailbox or flag the RoE names), phase 4 - retreat (cleanup, evidence packaging). Each phase is planned as its own mini-engagement with preconditions (what must be true to start), actions (what happens), and exits (what evidence marks success) - and the plan's dependency graph, not the calendar, drives the sequence.",
              "The worked three-phase plan shows the machinery. Objective: demonstrate payroll-data access from a phishing foothold within 10 business days. Phase 1 (days 1-3): phishing campaign to the finance group; precondition - at least one credential or session; exit - authenticated access captured. Phase 2 (days 4-6): escalation - move from the phished user to a read-capable account on the payroll share; preconditions - network reachability and one escalation vector; actions - Kerberoast or relay path, share enumeration; exit - read proof on one row. Phase 3 (days 7-8): objective consolidation - the impact sentence with data class and count, plus the detection-metric conversation; exit - evidence pack complete. Days 9-10 buffer for cleanup and reporting. The dependency graph is explicit: phase 2 cannot start without phase 1's exit, and the buffer absorbs slippage without touching the window.",
              "Why phases matter to the client is the analysis mark: each phase's exit is a separately defensible finding (credential compromise, escalation capability, data exposure), so even a stalled phase yields reportable evidence; the phase structure also maps to remediation (phase 1 dies with phishing-resistant MFA, phase 2 dies with tiered admin and segment fixes, phase 3 dies with share ACLs), which lets the client fix one phase and re-test just that phase. The exam's closing rule: plan phases, not activities - the calendar fills itself when dependencies are explicit.",
              "Exam framing: 'Explain multi-phased attacks and how they are planned' is a 7-14 mark standard. Define phase structure (preconditions, actions, exits), work the three-phase payroll plan with its dependency graph and buffer, and close with the client-side benefits - separable findings and phase-mapped remediation.",
            ],
            keyTerms: [
              { term: "Phase", definition: "A self-contained attack stage with preconditions, actions and an evidence exit." },
              { term: "Dependency graph", definition: "The plan's sequencing logic - which phase's exit feeds which phase's start." },
              { term: "Evidence exit", definition: "The artifact marking a phase's success - screenshot, log, data proof." },
              { term: "Buffer", definition: "Planned slack absorbing slippage without extending the window." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The three-phase payroll plan",
              caption: "Days 1-3 access, 4-6 expansion, 7-8 objective, 9-10 buffer - dependencies drive the calendar.",
              stages: [
                { label: "Phase 1: Access", note: "phishing; exit = authenticated session" },
                { label: "Phase 2: Expansion", note: "escalation to payroll read; exit = one-row proof" },
                { label: "Phase 3: Objective", note: "impact sentence + detection metrics" },
                { label: "Buffer + cleanup", note: "days 9-10 absorb slippage, remove artifacts" },
              ],
            },
            bullets: [
              "Phase structure: preconditions -> actions -> evidence exit; the dependency graph drives sequencing.",
              "Canonical phases: access, expansion, objective, retreat (cleanup + evidence).",
              "Worked plan: 10 days - phishing (1-3), escalation (4-6), objective consolidation (7-8), buffer (9-10).",
              "Each phase exit is a separately defensible finding even if later phases stall.",
              "Phase-mapped remediation: MFA kills phase 1; tiered admin kills phase 2; share ACLs kill phase 3.",
              "Planning rule: phases, not activities - the calendar fills from dependencies.",
            ],
            callout: {
              type: "exam",
              title: "Draw the dependency arrows",
              body: "The multi-phase answer earns its marks through the graph: draw the three phases with arrows from each exit to the next entry, and label the buffer. The visual dependency story is what examiners grade - prose alone reads as a to-do list.",
            },
            table: {
              caption: "Phase exits and the remediation each exit maps to.",
              headers: ["Phase", "Evidence exit", "Remediation that kills it"],
              rows: [
                ["Access", "Authenticated session from phishing", "Phishing-resistant MFA + DMARC"],
                ["Expansion", "Escalated read capability", "Tiered admin + segmentation"],
                ["Objective", "Payroll row proof + impact sentence", "Share ACLs + data classification"],
                ["Buffer", "Cleanup verification screenshots", "N/A - hygiene discipline"],
              ],
            },
            examQuestions: [
              {
                q: "Explain multi-phased attacks: the phase structure, a worked three-phase plan with dependency graph and buffer, and the client-side benefits of phase-mapped findings and remediation.",
                marks: 14,
                outline: [
                  "Phase anatomy: preconditions, actions, evidence exits",
                  "Canonical set: access, expansion, objective, retreat",
                  "Worked plan: 10 days - phishing 1-3, escalation 4-6, objective 7-8, buffer 9-10",
                  "Dependency graph: phase 2 starts only on phase 1's exit",
                  "Separable findings: each exit independently defensible",
                  "Phase-mapped remediation: MFA / tiered admin / share ACLs",
                  "Rule: phases not activities; calendar follows dependencies",
                ],
              },
              {
                q: "Why does phase structure protect the engagement when a later phase stalls?",
                marks: 7,
                outline: [
                  "Each phase exit is standalone evidence",
                  "A stalled escalation still reports the credential compromise",
                  "Buffer absorbs slippage without breaking the window",
                  "Client can remediate the achieved phase and re-test just it",
                  "Partial success remains fully documented and defensible",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Teaming, attack structure and the engagement planner",
            body: [
              "Multi-person engagements need structure or they collapse into parallel chaos, and the syllabus's teaming vocabulary is the fix. Roles: engagement lead (client-facing, scope authority, final report owner), operators (the hands-on testers, often split by specialty - web, network, AD, wireless), social engineer (the phishing/pretext specialist working to a separate consent track), and the note-keeper (the evidence and timeline custodian whose log the report is written from). Small engagements merge roles; large ones add the white-cell function. The attack structure answers who does what when: parallel tracks (web and network simultaneously - fastest but coordination-heavy), relay structure (one track's exit feeds the next - the multi-phase pattern of 2.5), and pair structure (one operator drives, one documents - the highest-evidence pattern for complex chains).",
              "The engagement planner is the document that binds the team: a single shared file holding the objective and framing sentence, scope and RoE extracts, the target register, the phase plan with dependencies, per-operator task lists, the evidence index (every screenshot cross-referenced), the deconfliction contacts, and the daily log. The worked planner state on day 4 of a two-week engagement shows its function: operator A has 6 completed tasks with 14 evidence items indexed, operator B is blocked waiting on the VPN credentials the client promised for day 4 (escalation flagged to the lead), the social engineer's campaign hit rate needs a decision - extend day 5 or pivot to vishing - and the lead's afternoon is one status meeting plus one client call instead of reconstruction. The planner is why professional engagements survive contact with reality.",
              "The evidence discipline inside teaming is the exam's analysis mark: in multi-operator work, evidence without provenance is inadmissible - the note-keeper's log timestamps who ran what from which host, screenshots carry machine-readable context (hostname, date, operator initials), and the final report's methodology section references the log as its spine. The closing hygiene rule: the planner is itself sensitive (it lists every weakness found so far) - access-controlled, backed up encrypted, and destroyed or handed over per contract at engagement end.",
              "Exam framing: 'Explain teaming, attack structure and the engagement planner' is a 7-14 mark standard. Give the role set with split-track options, define the planner's sections, work the day-4 planner state with its blocking decision, and close with evidence-provenance discipline.",
            ],
            keyTerms: [
              { term: "Engagement lead", definition: "Client-facing owner of scope, safety and the final report." },
              { term: "Note-keeper", definition: "The evidence and timeline custodian - the report's source of record." },
              { term: "Relay structure", definition: "Sequential attack structure where one track's exit feeds the next." },
              { term: "Engagement planner", definition: "The shared working document: scope, register, phases, tasks, evidence index, log." },
            ],
            diagram: {
              kind: "fork",
              title: "Attack structure choice",
              caption: "Parallel for speed, relay for dependencies, pair for evidence - the planner records which.",
              start: "Two or more operators",
              branches: [
                { label: "Parallel tracks", outcome: "web + network simultaneously - fastest, coordination-heavy", good: true },
                { label: "Relay", outcome: "phase exits feed next entries - the multi-phase pattern", good: true },
                { label: "Pair driving", outcome: "one drives, one documents - highest evidence quality", good: true },
                { label: "Unstructured freelancing", outcome: "duplicate work, missing evidence, scope accidents - the failure mode", good: false },
              ],
            },
            bullets: [
              "Roles: engagement lead, operators (web/network/AD/wireless split), social engineer (separate consent track), note-keeper.",
              "Structures: parallel (speed), relay (dependencies), pair (evidence quality); large engagements add a white cell.",
              "Planner sections: objective, scope/RoE extract, target register, phase plan, task lists, evidence index, deconfliction contacts, daily log.",
              "Worked day-4 state: 6 tasks + 14 evidence items for A; B blocked on promised VPN creds; campaign decision - extend or pivot to vishing.",
              "Evidence provenance: timestamped log, attributed screenshots; the methodology section cites the log as spine.",
              "Planner hygiene: access-controlled, encrypted, destroyed or handed over per contract.",
            ],
            callout: {
              type: "tip",
              title: "The evidence index is the report's pre-write",
              body: "Indexing evidence as it lands (item 14: '14:32 - opB - meterpreter hashdump - host db01') means the report writes itself in week two. Teams that back-fill evidence from memory lose hours and mark quality - the index is the cheapest quality tool in teaming.",
            },
            table: {
              caption: "The engagement planner's sections.",
              headers: ["Section", "Content", "Owner"],
              rows: [
                ["Objective + framing", "Business reason and proof sentence", "Lead"],
                ["Scope + RoE extract", "Boundaries and technique rules", "Lead"],
                ["Target register", "Assets, evidence, value ratings", "Operators"],
                ["Phase plan + tasks", "Dependencies and per-operator lists", "Lead + operators"],
                ["Evidence index", "Numbered artifacts with provenance", "Note-keeper"],
                ["Daily log", "Timestamped actions and decisions", "Note-keeper"],
              ],
            },
            examQuestions: [
              {
                q: "Explain teaming and attack structure in ethical hacking engagements: the role set, structure options with trade-offs, the engagement planner's sections, a worked planner state showing a blocking decision, and evidence-provenance discipline.",
                marks: 14,
                outline: [
                  "Roles: lead, specialty operators, social engineer (separate consent), note-keeper",
                  "Structures: parallel (speed), relay (dependencies), pair (evidence); white cell at scale",
                  "Planner: objective, scope extract, register, phase plan, tasks, evidence index, contacts, log",
                  "Worked day-4: 14 indexed items; blocked VPN creds escalated; extend-or-vishing decision",
                  "Provenance: timestamped, attributed evidence; report cites the log",
                  "Hygiene: planner is sensitive - access-controlled, encrypted, contract-bound destruction",
                  "Failure mode: unstructured freelancing - duplicates, missing evidence, scope accidents",
                ],
              },
              {
                q: "Why does evidence need provenance in multi-operator engagements?",
                marks: 7,
                outline: [
                  "Report claims must be attributable to an operator, host and time",
                  "Unattributed screenshots cannot be re-verified during disputes",
                  "Cleanup verification needs per-host accountability",
                  "Client SOC correlation requires timeline accuracy",
                  "The note-keeper's log is the provenance spine",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "The right consultant, the tester, logistics, intermediates and law enforcement",
            body: [
              "The syllabus closes Unit II with the procurement and logistics layer - the people-and-paper machinery around the attack. The right consultant: credentials (OSCP/CEH/CREST as capability evidence), references from comparable engagements, insurance (professional indemnity covering testing errors), and the fit test - a consultant whose sample report reads like a Nessus dump will deliver a Nessus dump. The tester (in-house versus consultant): in-house testers know the estate and stay cheap but suffer confirmation bias and inside-politics blindness; consultants bring fresh eyes and outside credibility but cost more and need onboarding - the mature pattern is both: annual external engagement plus continuous internal testing.",
              "Logistics is the physical and virtual plumbing: accounts provisioned for the test (scoped, monitored, expiring), network access (VPN profile or on-site position), lab space for the team, tooling licences, the evidence store, and the communication channel with the client's SOC. Intermediates are the people between tester and target owner: the engagement sponsor (who pays and wants the answer), the technical liaison (who provisions access), the SOC lead (who watches the alarms), and the legal contact (who holds the contract) - each needs a named contact and a deconfliction path, because a tester caught mid-exploit needs the SOC lead's phone number, not the switchboard. Law enforcement: the engagement's paperwork should anticipate accidental detection - the get-out-of-jail letter (from Unit 1.2's layer stack), a named escalation contact, and awareness of jurisdiction (cross-border targets bring CFAA/IT Act overlaps).",
              "The worked logistics checklist shows the machinery in one list: test accounts expiring on window close, VPN profile scoped to the RoE ranges, SOC deconfliction line with agreed silent-period signals, evidence store with access control and retention terms, insurance certificate on file, sponsor briefing scheduled day 1, legal contact holding the signed contract, and the law-enforcement letter carried during on-site work. The exam's closing sentence: the technical work of Units I, III and IV only happens inside this machinery - procurement, provisioning and paper are the engagement's skeleton, and the planner (2.6) keeps it all in one place.",
              "Exam framing: 'Discuss the selection of consultants, tester roles, logistics, intermediates and law-enforcement considerations' is the 14-mark closer of Unit II. Give the consultant-selection criteria, the in-house-vs-consultant trade, the logistics checklist, the intermediates map, and the law-enforcement anticipation.",
            ],
            keyTerms: [
              { term: "Engagement sponsor", definition: "The client-side owner of the test's budget and objectives." },
              { term: "Technical liaison", definition: "The client contact provisioning access and answering platform questions." },
              { term: "Deconfliction path", definition: "The agreed contact chain resolving tester-versus-incident ambiguity." },
              { term: "Professional indemnity", definition: "Insurance covering testing errors - a procurement baseline." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The people-and-paper stack around the attack",
              caption: "Technical work sits on this skeleton; remove a layer and the engagement wobbles.",
              tiers: [
                { label: "Sponsor", note: "budget + objective owner" },
                { label: "Legal + contract", note: "signed scope, liability, disclosure terms" },
                { label: "SOC lead + liaison", note: "deconfliction + provisioning" },
                { label: "Logistics", note: "accounts, access, lab, evidence store" },
                { label: "Tester / consultant", note: "the technical execution layer" },
              ],
            },
            bullets: [
              "Consultant criteria: certifications (OSCP/CEH/CREST), comparable references, insurance, sample-report quality.",
              "In-house vs consultant: estate knowledge and cost vs fresh eyes and credibility; mature pattern runs both.",
              "Logistics: scoped expiring accounts, scoped VPN, lab, licences, evidence store, SOC channel.",
              "Intermediates: sponsor, technical liaison, SOC lead, legal contact - each named with a deconfliction path.",
              "Law enforcement: get-out-of-jail letter, escalation contact, jurisdiction awareness (CFAA/IT Act overlap).",
              "Closing sentence: technical work happens inside this machinery - paper is the skeleton.",
            ],
            callout: {
              type: "exam",
              title: "Read the sample report, not the logo",
              body: "The consultant-selection mark lives in one line: 'assess the sample report, not the certification wall.' A report that reads like scanner output predicts a scanner-output engagement - and the examiner wants candidates who know procurement is a quality gate.",
            },
            table: {
              caption: "The logistics checklist - one engagement, one list.",
              headers: ["Item", "Detail", "Owner"],
              rows: [
                ["Test accounts", "Scoped, monitored, expiring at window close", "Liaison"],
                ["Network access", "VPN profile bound to RoE ranges", "Liaison"],
                ["SOC deconfliction", "Named line + silent-period signals", "SOC lead"],
                ["Evidence store", "Access-controlled, retention per contract", "Note-keeper"],
                ["Insurance + contract", "Certificates on file before day 1", "Legal + sponsor"],
                ["Get-out-of-jail letter", "Carried during on-site work", "Tester"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the selection of the right consultant, the in-house versus consultant trade-off, engagement logistics, the intermediates map and law-enforcement anticipation. Support with the logistics checklist.",
                marks: 14,
                outline: [
                  "Consultant criteria: certifications, references, insurance, sample-report quality",
                  "In-house: knowledge + cheap, bias risk; consultant: fresh eyes + credibility, cost",
                  "Mature pattern: annual external + continuous internal",
                  "Logistics: expiring scoped accounts, scoped VPN, lab, licences, evidence store, SOC channel",
                  "Intermediates: sponsor, liaison, SOC lead, legal - named deconfliction paths",
                  "Law enforcement: letter, escalation contact, jurisdiction overlap",
                  "Closing: paper is the skeleton the technical work hangs from",
                ],
              },
              {
                q: "Why should test accounts be scoped and expiring rather than reusing an admin's credentials?",
                marks: 7,
                outline: [
                  "Scoped accounts bound the blast radius of tester mistakes",
                  "Expiry removes orphan access after the window",
                  "Reused admin credentials break audit attribution",
                  "Monitoring can whitelist the test account's expected behavior",
                  "Cleanup is provable: account gone, access gone",
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
      title: "Preparing for a Hack",
      summary:
        "Unit III covers technical preparation and engagement management, social engineering, physical security, internet reconnaissance, steganography and cryptography, wireless hacking, and the defenders' machinery - firewalls, honeypots, IDS and IPS.",
      chapter: {
        number: "03",
        title: "Preparation and Reconnaissance",
        intro:
          "Unit III covers technical preparation, engagement management, social engineering, physical security, internet reconnaissance, steganography, cryptography, wireless hacking, firewalls, honeypots, IDS and IPS.",
        inOneBreath:
          "Phase zero builds the bench (standardized platform, register verification, evidence pipeline) and the rhythm (change control, abort criteria). Reconnaissance runs social channels (62/18/3), physical chains (90 seconds), internet pipelines (61 subdomains, 84 emails), the stego-versus-crypto contrast, wireless survey-and-crack, and the defenders' machinery - honeypot fingerprinting and the 400-packet detection reading that sets the engagement's noise budget.",
        sections: [
          {
            number: "3.1",
            title: "Technical preparation and managing the engagement",
            body: [
              "Preparation turns the planner into a working bench, and the syllabus splits it into technical preparation and engagement management. Technical preparation: the attack platform (Kali-class distribution or a curated toolkit - one standardized image so every operator's tooling is reproducible), tooling inventory (recon, scanning, exploitation, cracking, wireless, web - each with version pinned for the report), the VPN/tunnels for remote work, target-range verification (confirm every register entry resolves and the RoE's IP list matches reality - one stale netblock is a scope accident waiting), and the evidence pipeline (screenshot tooling, log format, the index from 2.6). The worked bench list: laptop with standardized image, VPS for C2 with logging, adapter for wireless (monitor-capable), and the lab VMs for safe testing of exploits before they touch client systems.",
              "Engagement management is the running discipline: the daily rhythm (kickoff with the team, the planner update, the client status note if agreed, evidence indexing as work happens), the change-control rule (anything outside the RoE - a new target, a new technique class, a schedule change - goes to the lead and the client contact in writing before it happens), and the abort criteria (what stops everything immediately: production impact, out-of-scope contact, SOC request, legal event). The worked management moment: on day 3 the operator's scan reveals the client's staging server also hosts a partner-facing API not in the register - the rule fires: stop touching it, document the discovery, request written scope amendment; the amendment arrives in 40 minutes and the API enters the register. That loop, not heroics, is engagement management.",
              "The syllabus's phrase 'managing the engagement' also covers the client relationship: status reporting cadence (daily one-liner or agreed silence for covert phases), the mid-engagement debrief for the technical liaison (so fixes can start while testing continues), and the closing handoff (evidence retention, account teardown, planner disposition). The exam's framing sentence: preparation is what makes the technical units executable, and management is what keeps them inside the contract - both are phase-zero work that determines phase-one quality.",
              "Exam framing: 'Explain technical preparation and engagement management' is a 7-mark opener. Give the bench list (platform, tooling, tunnels, register verification, evidence pipeline), the daily rhythm with change control and abort criteria, and work the day-3 out-of-register discovery loop.",
            ],
            keyTerms: [
              { term: "Attack platform", definition: "The standardized, reproducible tester image and toolset." },
              { term: "Change control", definition: "Written client approval before any out-of-RoE action or target." },
              { term: "Abort criteria", definition: "Pre-agreed events that stop testing immediately." },
              { term: "Evidence pipeline", definition: "Screenshot, logging and indexing tooling established before day one." },
            ],
            diagram: {
              kind: "pipeline",
              title: "Phase-zero preparation pipeline",
              caption: "Bench, rules and evidence before the first packet - phase-zero quality decides phase-one quality.",
              stages: [
                { label: "Platform", note: "standardized image, pinned tool versions" },
                { label: "Register verification", note: "every entry resolves; RoE IPs match" },
                { label: "Evidence pipeline", note: "screenshots, logs, index" },
                { label: "Access + tunnels", note: "VPN, C2 VPS, adapters" },
                { label: "Management rhythm", note: "daily planner update + change control" },
              ],
            },
            bullets: [
              "Bench: standardized Kali-class image, pinned tool versions, monitor-capable adapter, C2 VPS with logging, lab VMs for safe exploit testing.",
              "Register verification: confirm every target resolves and matches the RoE IP list - stale netblocks cause scope accidents.",
              "Daily rhythm: planner update, evidence indexing, agreed client status cadence.",
              "Change control: new target/technique/schedule changes go to lead + client in writing first.",
              "Abort criteria: production impact, out-of-scope contact, SOC request, legal event - everything stops.",
              "Worked loop: day-3 discovery of an unregistered partner API -> stop, document, written amendment in 40 minutes, register updated.",
            ],
            callout: {
              type: "warning",
              title: "Test exploits in the lab, not on the client",
              body: "Every exploit gets one rehearsal on an equivalent lab VM before it runs against client systems. Unrehearsed payloads crash hosts, and 'the exploit was supposed to be stable' is not a sentence clients accept - the lab step is preparation, not optional caution.",
            },
            table: {
              caption: "The phase-zero checklist.",
              headers: ["Item", "Purpose", "Verified by"],
              rows: [
                ["Standardized platform", "Reproducible tooling across operators", "Image version note"],
                ["Register verification", "RoE IPs match reality", "Resolution log"],
                ["Evidence pipeline", "Attributable artifacts from hour one", "Index with entry 1"],
                ["Access + tunnels", "Remote work + covert phases", "Connectivity test"],
                ["Abort criteria", "Immediate-stop rules agreed", "Client sign-off in writing"],
                ["Lab rehearsal", "Exploits tested before client systems", "Lab transcript"],
              ],
            },
            examQuestions: [
              {
                q: "Explain technical preparation and engagement management in an ethical hack: the bench and evidence pipeline, the daily rhythm with change control, abort criteria, and a worked out-of-register discovery loop.",
                marks: 14,
                outline: [
                  "Bench: standardized image, pinned tools, adapter, C2 VPS, lab VMs for rehearsal",
                  "Register verification: RoE IPs vs reality - stale netblock risk",
                  "Evidence pipeline: screenshots, logs, index established before day one",
                  "Daily rhythm: planner update, indexing, agreed client cadence",
                  "Change control: written approval before out-of-RoE actions",
                  "Abort criteria: impact, scope accident, SOC request, legal event",
                  "Worked loop: unregistered partner API -> stop, document, amendment, register update",
                ],
              },
              {
                q: "Why must register verification happen before scanning rather than during it?",
                marks: 7,
                outline: [
                  "Stale or wrong netblocks turn legitimate scans into scope violations",
                  "Client-side changes (cloud, acquisitions) drift the register",
                  "Verification is cheap; scope accidents are expensive and legal",
                  "Discrepancies resolve before any packet, in writing",
                  "The resolution log becomes part of the evidence pack",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Social engineering",
            body: [
              "Reconnaissance's human flank is social engineering - the techniques that extract information and access from people rather than systems, and the highest-success class in the field. The channel taxonomy: email (mass phishing, researched spear phishing, executive whaling, business email compromise), voice (vishing - the helpdesk pretext resetting MFA), SMS (smishing with parcel and payroll lures), and in-person (pretexting with props, tailgating, impersonation of contractors). The levers are psychological constants: authority (the IT-department voice), urgency (the expiring account), scarcity (the one-day link), social proof (everyone else has submitted), and fear (the disciplinary threat). Each simulated attack names its lever - the report's tactic column.",
              "The worked campaign is the syllabus's number set: a two-week simulated phishing operation against a 200-employee firm uses the firstname.lastname format and admin names harvested in Unit 1.3; 500 emails from a lookalike domain yield 62% opens and 18% credential submissions (90 employees, 40 privileged); the vishing follow-up ('IT here, your MFA is expiring - read me the code') succeeds against 3 of 10 targets and one full MFA bypass. The controls the numbers justify: SPF/DKIM/DMARC (flags the lookalike domain), phishing-resistant FIDO2 MFA (kills the code-reading vector), out-of-band verification for payment changes (kills BEC), and reporting-culture metrics - median time-to-report, not just click rate, is the programme's health number.",
              "The consent layer is where social engineering differs from every other technique: it needs its own RoE paragraph - named in-scope population, channels allowed (email yes, vishing to named targets, no in-person without escort rules), credential-use limits (prove the access chain, then stop; no data reads), an instant opt-out for distressed targets, and a promise not to humiliate - simulated phishing pages show a coaching screen, not a shaming list. The exam's analysis sentence: social engineering works because organizations defend systems and forget people; the ethical test's job is measuring that gap without damaging the workforce.",
              "Exam framing: 'Explain social engineering techniques and safeguards' is a 7-14 mark staple. Give the channel taxonomy with levers, work the 62/18/3 campaign, present the consent layer, and close with the control mapping.",
            ],
            keyTerms: [
              { term: "Spear phishing", definition: "Researched, targeted phishing built from OSINT on the specific victim." },
              { term: "BEC", definition: "Business email compromise - executive/vendor impersonation to redirect payments." },
              { term: "Phishing-resistant MFA", definition: "FIDO2/WebAuthn keys bound to origin - immune to code-reading attacks." },
              { term: "Time-to-report", definition: "Median minutes from attack contact to user report - the awareness health metric." },
            ],
            diagram: {
              kind: "fork",
              title: "Channel selection follows the recon",
              caption: "The harvested names and formats decide the channel and the pretext.",
              start: "Social-engineering target set",
              branches: [
                { label: "Broad awareness goal", outcome: "mass phishing, lookalike domain; measures open/submit rates", good: true },
                { label: "Privileged-user risk", outcome: "spear + vishing to MFA reset; measures bypass count", good: true },
                { label: "Payment-process risk", outcome: "BEC wire-change pretext; measures process catches", good: true },
                { label: "Real data extraction", outcome: "out of scope - consent layer forbids; stop at access proof", good: false },
              ],
            },
            bullets: [
              "Channels: mass/spear/whaling email, BEC, vishing, smishing, in-person pretexting and tailgating.",
              "Levers: authority, urgency, scarcity, social proof, fear - named per attack in the report.",
              "Worked campaign: 500 emails -> 62% open -> 18% submit (40 privileged) -> vishing 3/10 -> 1 MFA bypass.",
              "Controls: SPF/DKIM/DMARC, FIDO2 keys, out-of-band payment verification, reporting-culture metrics.",
              "Consent layer: named population, allowed channels, credential-use limits, opt-out, coaching not shaming.",
              "Analysis: organizations defend systems and forget people - the test measures the gap safely.",
            ],
            callout: {
              type: "warning",
              title: "The consent paragraph is not optional",
              body: "A phishing simulation without its own consent layer becomes an HR incident: shamed employees, legal complaints, a client relationship gone. Named population, allowed channels, credential limits, opt-out, coaching response - all in writing before the first email.",
            },
            table: {
              caption: "Channels, levers and controls.",
              headers: ["Channel", "Signature tactic", "Lever", "Control"],
              rows: [
                ["Email - mass", "Lookalike-domain lure", "Urgency + curiosity", "DMARC + reporting button"],
                ["Email - spear/BEC", "CFO wire-change", "Authority", "Out-of-band verification"],
                ["Voice", "MFA-reset helpdesk call", "Authority + urgency", "FIDO2 keys + callback policy"],
                ["SMS", "Parcel/payroll link", "Scarcity", "URL-inspection training"],
                ["In-person", "Tailgating with props", "Social proof", "Badge culture + man-traps"],
              ],
            },
            examQuestions: [
              {
                q: "Explain social engineering as part of reconnaissance: the channel taxonomy with psychological levers, a worked simulated campaign with its metric chain, the consent layer that governs simulations, and the control mapping.",
                marks: 14,
                outline: [
                  "Channels: mass/spear/whaling, BEC, vishing, smishing, in-person",
                  "Levers: authority, urgency, scarcity, social proof, fear",
                  "Worked: 500 emails, 62/18 metrics, 40 privileged, 3/10 vishing, 1 bypass",
                  "Recon input: email format + admin names select the pretext",
                  "Consent layer: named population, channels, credential limits, opt-out, coaching",
                  "Controls: DMARC, FIDO2, out-of-band verification, reporting metrics",
                  "Analysis: defend people as systems - measure the gap without harming the workforce",
                ],
              },
              {
                q: "Why is time-to-report a better awareness metric than click rate?",
                marks: 7,
                outline: [
                  "Clicks happen; the damage window depends on reporting speed",
                  "4-hour median report time = 4-hour attacker window",
                  "12-minute median shrinks the window by 20x",
                  "Click rate plateau reflects human error; report time shows culture",
                  "Training gains show up as reporting speed first",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Physical security",
            body: [
              "Physical reconnaissance asks whether an attacker can reach the hardware, and its failures convert directly into digital access. The target inventory: entry controls (badge readers, bypass behaviors, door schedules), perimeter (gates, loading docks, propped doors), surveillance (coverage, blind spots, who watches), device exposure (unlocked cabinets, live lobby ports, bins with intact documents), and environmental systems (HVAC panels, UPS). The techniques are deliberately low-tech: tailgating behind a badge-holder (50-90% success in real engagements), badge cloning (a 30-second low-frequency read), lock bypass on cabinets, and document harvesting from recycling - the works because organizations budget for digital controls and forget doors.",
              "The worked chain is the section's number set: an authorized tester with a contractor vest and clipboard reaches the loading dock in 90 seconds, holds the door behind an employee, finds the nearest network cabinet unlocked, and plants a small bridge on a live lobby port - internal scanning begins inside the perimeter; the entire external attack surface of Unit I is bypassed by one walk. The impact sentence writes itself: 'perimeter digital controls assume a closed building; that assumption failed in 90 seconds on day one.' The control pairs: man-traps/turnstiles (tailgating), smart-card migration (cloning), alarmed cabinets (implants), NAC on wall ports (bridges), shredding contracts (bins) - each control kills one observed failure, and the re-test verifies each kill.",
              "The discipline layer is the syllabus's emphasized point: physical testing is the RoE's sharpest edge - named buildings and hours, no production hardware touched, planted devices inventoried and removed same-day, a scripted response for being challenged ('authorized tester - here is the letter and the contact number'), and an immediate abort protocol. Being caught unannounced in a bank's server room without the script is a police conversation; the script, the letter and the SOC number are what keep a legitimate test legitimate.",
              "Exam framing: 'Explain physical security vulnerabilities and testing techniques' is a 7-14 mark staple. Give the inventory, the low-tech techniques with the 50-90% and 90-second numbers, the control pairs, and close with the discipline layer.",
            ],
            keyTerms: [
              { term: "Tailgating", definition: "Following an authorized person through a controlled door - the highest-success physical attack." },
              { term: "Badge cloning", definition: "Copying a low-frequency prox credential in seconds with portable tools." },
              { term: "NAC", definition: "Network Access Control - unknown devices on wall ports land in quarantine." },
              { term: "Challenge script", definition: "The rehearsed response when challenged: authorization letter plus contact number." },
            ],
            diagram: {
              kind: "layers",
              title: "Physical defence in depth",
              caption: "The 90-second case fell through four layers at once; depth means no single hole is fatal.",
              layers: [
                { label: "Perimeter", note: "fence, gates, dock, CCTV" },
                { label: "Entry", note: "badge + man-trap + reception challenge" },
                { label: "Zones", note: "server-room badge + door alarms" },
                { label: "Devices", note: "locked cabinets, NAC ports" },
                { label: "Data", note: "disk encryption, shredding, clean desk" },
              ],
            },
            bullets: [
              "Inventory: entry controls, perimeter, surveillance, device exposure, environmental systems.",
              "Techniques: tailgating (50-90%), badge cloning (30 s), cabinet bypass, bin harvesting.",
              "Worked chain: 90 seconds from loading dock to planted bridge - external attack surface bypassed.",
              "Control pairs: man-traps, smart cards, alarmed cabinets, NAC ports, shredding contracts.",
              "Discipline: named buildings/hours, no hardware touch, same-day removal, challenge script, abort protocol.",
              "Re-test: each control verified by replaying its attack once post-fix.",
            ],
            callout: {
              type: "warning",
              title: "Physical testing carries real-world risk",
              body: "Trespass laws, alarm responses, armed guards: every move needs pre-agreed boundaries, the challenge script, and the abort protocol. No finding justifies an unscheduled police encounter - the discipline layer is what keeps this technique professional.",
            },
            table: {
              caption: "Failure-to-fix pairs.",
              headers: ["Failure", "Impact", "Fix"],
              rows: [
                ["Tailgating succeeds", "Perimeter bypass in seconds", "Man-trap + badge culture audit"],
                ["LF prox badges", "30-second clone", "Smart cards with challenge-response"],
                ["Unlocked cabinet", "Implant placement", "Door-contact alarms + key audit"],
                ["Live lobby ports", "Internal bridge", "NAC quarantine on all ports"],
                ["Intact documents in bins", "Data harvesting", "Cross-cut shredding + audits"],
              ],
            },
            examQuestions: [
              {
                q: "Explain physical security reconnaissance: the target inventory, low-tech techniques with success metrics, the worked 90-second chain, control pairs, and the discipline layer that keeps testing lawful.",
                marks: 14,
                outline: [
                  "Inventory: entry, perimeter, surveillance, devices, environmental",
                  "Techniques: tailgating 50-90%, badge clone 30 s, bypass, bins",
                  "Worked: vest-and-clipboard -> dock -> door -> cabinet -> planted bridge in 90 s",
                  "Digital impact: internal scanning begins; external controls bypassed",
                  "Control pairs: man-traps, smart cards, alarms, NAC, shredding",
                  "Discipline: scope, no hardware touch, same-day removal, challenge script, abort",
                  "Re-test verifies each control by replaying its attack",
                ],
              },
              {
                q: "How does the challenge script protect the tester and the engagement?",
                marks: 7,
                outline: [
                  "Being challenged is the highest-risk physical moment",
                  "Script: identify as authorized tester, show letter, provide contact",
                  "The letter's phone reaches the sponsor or SOC lead directly",
                  "Prevents escalation to police mid-test",
                  "Rehearsed lines avoid improvisation under stress",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Internet reconnaissance",
            body: [
              "Internet reconnaissance is the footprinting phase (Unit 1.3) turned into an attacker's weapon: the systematic harvest of everything the target's internet presence leaks. The sources: DNS (records, subdomains via brute force and permutation, zone transfers), search engines (dorks extracting documents, portals, credentials), certificate transparency (the subdomain ledger), WHOIS and netblocks (ownership and ranges), banner databases (Shodan/Censys - exposed services with versions), social media (staff, formats, technology admissions in job posts), breach corpora (whether staff passwords already circulate), and the target's own website (document metadata, form behaviors, framework fingerprints). The exam wants this as a pipeline, not a list: harvest -> deduplicate -> enrich (resolve, port-probe lightly, classify) -> map onto the surface of 1.6.",
              "The worked pipeline shows the yield: DNSRecon returns 61 subdomains (12 from AXFR attempt - denied but the attempt is logged evidence), crt.sh adds 9 more including staging; theHarvester pulls 84 emails and the firstname.lastname format; Shodan shows one exposed RDP and an outdated Jenkins on a forgotten host; exiftool over 14 site PDFs yields 5 usernames including a sysadmin; breach check flags 7 staff credentials circulating from an old leak. The plan the pipeline hands over: forgotten-Jenkins host + circulating credentials + staging subdomain = three candidate entries, each with its next-phase technique pre-selected. Nothing here touched the target beyond a few DNS queries and one HTTP fetch - the passive-to-active ratio is the discipline mark.",
              "The defensive mirror closes the section, and examiners reward it: minimize the surface that recon feeds on (no sensitive files on webroots, robots hygiene, consistent subdomain naming and takedown of stale hosts), scrub document metadata before publishing, watch for recon indicators (unusual DNS query patterns, AXFR attempts, cert-transparency monitoring alerts), and credential-hygiene programmes that neutralize breach-corpus reuse. The closing sentence: internet reconnaissance is the attacker's first hour and the defender's cheapest fix - every leaked artifact removed is an attack path deleted.",
              "Exam framing: 'Explain internet reconnaissance tools and techniques' is a 7-14 mark standard. Give the source pipeline with tools, work the 61/84/9/7 yield numbers into a plan, and close with the defensive mirror.",
            ],
            keyTerms: [
              { term: "Subdomain enumeration", definition: "Brute-force, permutation and CT-log discovery of a domain's hosts." },
              { term: "AXFR attempt", definition: "DNS zone-transfer request - denied on hardened servers, logged as recon evidence." },
              { term: "Breach corpus", definition: "Leaked credential sets from past incidents - reuse enables silent entry." },
              { term: "Recon indicators", definition: "DNS query spikes, AXFR attempts, CT alerts - the defender's detection surface." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The internet-recon pipeline",
              caption: "Harvest, deduplicate, enrich, map - passive before active, always.",
              stages: [
                { label: "Harvest", note: "DNS, dorks, CT, WHOIS, Shodan, social, breach" },
                { label: "Deduplicate", note: "61 subdomains -> 52 unique" },
                { label: "Enrich", note: "resolve, light probe, classify" },
                { label: "Map", note: "onto the attack-surface rows of 1.6" },
                { label: "Plan", note: "3 candidate entries with techniques pre-selected" },
              ],
            },
            bullets: [
              "Sources: DNS + AXFR, dorks, crt.sh, WHOIS/netblocks, Shodan, social/job posts, breach corpora, site metadata.",
              "Worked yield: 61 subdomains, 84 emails + format, 9 CT extras, 1 exposed RDP + old Jenkins, 5 usernames from metadata, 7 breach-flagged staff.",
              "Plan output: forgotten Jenkins + circulating credentials + staging = three entries with next techniques pre-loaded.",
              "Passive-to-active ratio: a few DNS queries and one HTTP fetch - discipline mark.",
              "Defensive mirror: surface minimization, metadata scrubbing, recon-indicator monitoring, credential hygiene.",
              "Closing: every leaked artifact removed deletes an attack path.",
            ],
            callout: {
              type: "tip",
              title: "Check breach corpora before password work",
              body: "One query against breach-corpus aggregators tells you whether the target's staff credentials circulate from an old leak. If yes, password spraying has a seed list that turns guessing into confirmation - and the finding writes itself as a credential-hygiene control gap.",
            },
            table: {
              caption: "Recon sources, tools and yields.",
              headers: ["Source", "Tool", "Worked yield"],
              rows: [
                ["DNS + subdomains", "DNSRecon / Amass", "61 subdomains, AXFR denied"],
                ["Certificate logs", "crt.sh", "9 extras incl. staging"],
                ["Search engines", "theHarvester", "84 emails + name format"],
                ["Banner indexes", "Shodan", "Exposed RDP + old Jenkins"],
                ["Document metadata", "exiftool", "5 usernames incl. sysadmin"],
                ["Breach corpora", "aggregator query", "7 staff credentials circulating"],
              ],
            },
            examQuestions: [
              {
                q: "Explain internet reconnaissance as a pipeline: sources and tools, the worked yield numbers, how the output converts into an entry plan, the passive-to-active discipline, and the defensive mirror.",
                marks: 14,
                outline: [
                  "Pipeline: harvest -> deduplicate -> enrich -> map -> plan",
                  "Sources: DNS/AXFR, dorks, crt.sh, WHOIS, Shodan, social, breach, metadata",
                  "Worked: 61 subdomains, 84 emails, 9 CT extras, RDP + Jenkins, 5 usernames, 7 breach hits",
                  "Plan: Jenkins + credentials + staging = three entries with techniques pre-selected",
                  "Discipline: passive dominates; few queries, one fetch",
                  "Defence: surface minimization, metadata scrub, recon monitoring, credential hygiene",
                  "Sentence: removed artifacts delete attack paths",
                ],
              },
              {
                q: "What do recon indicators look like on the defender's side, and how are they monitored?",
                marks: 7,
                outline: [
                  "DNS query spikes and permutation patterns on authoritative servers",
                  "AXFR attempts in DNS logs",
                  "CT-log alerts for unexpected certificate issuance",
                  "Shodan/Censys exposure scans of your own ranges",
                  "SIEM correlation of these signals as early warning",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Steganography and cryptography",
            body: [
              "The syllabus pairs steganography and cryptography in reconnaissance because both are channels the attacker may hide in and the tester must recognize. Steganography hides existence: data embedded in media - LSB (least-significant-bit) embedding in images where pixel bits carry a payload invisible to the eye, audio echo/steganographic tools, video frames, document whitespace. The tester meets it three ways: exfiltration channels (data leaving a monitored network inside innocent-looking images), covert command channels (malware fetching instructions from a public image's LSBs), and forensics work (detecting and extracting embedded data). Tools: steghide, OpenPuff, zsteg, outguess; detection: statistical anomalies in LSB planes, entropy analysis, and the carrier-vs-original comparison when both are available. The worked demo: a 2 MB PNG embeds a 40 KB text payload across its LSB planes at zero visible difference; zsteg finds the anomaly in seconds when the password-free variant is used.",
              "Cryptography in the recon frame is the tester's assessment lens: which traffic is encrypted, which is not, and what that means for interception and integrity. The working split: cleartext protocols (HTTP, FTP, Telnet, SMTP without TLS, SNMP v1/2c) leak content and credentials to anyone on-path; encrypted channels (TLS 1.2/1.3, SSH) protect content but leak metadata (SNI, sizes, timing) that still maps behavior; and the assessment question per protocol is version and configuration health (the kill table - DES/MD5/RC4/SHA-1 - from the pentesting sibling subject applies here as the checklist). The recon consequence: egress traffic inventory (what leaves, encrypted or not) is reconnaissance of the defender's own posture - the tester's report lists it as a finding class.",
              "The pairing's exam angle is the contrast: cryptography protects content but advertises protection (an encrypted channel is visible), while steganography hides the channel's existence entirely - the two solve different detection problems, and attackers chain them (encrypt the payload, then steganographically embed it). The defences mirror: cryptography is defeated by key attacks, steganography by statistical analysis; both are detected by anomaly monitoring (encrypted flows to unexpected destinations, image traffic with anomalous entropy). The worked defensive rule: DLP + egress allow-lists catch exfiltration regardless of carrier, because the destination anomaly survives any hiding technique.",
              "Exam framing: 'Explain steganography and cryptography in the context of reconnaissance' is a 7-14 mark standard. Define both with mechanisms (LSB embedding; cleartext-vs-encrypted split), give the tester's three stego meeting points with tools, work the 2 MB/40 KB demo, and close with the contrast-plus-defence paragraph.",
            ],
            keyTerms: [
              { term: "Steganography", definition: "Hiding data's existence inside innocuous carriers - images, audio, documents." },
              { term: "LSB embedding", definition: "Payload stored in pixel least-significant bits - invisible visually, detectable statistically." },
              { term: "Cleartext protocol", definition: "Content and credentials readable by anyone on-path - HTTP, Telnet, FTP, SNMP v1/2c." },
              { term: "Egress allow-list", definition: "Outbound traffic restricted to approved destinations - the exfiltration kill." },
            ],
            diagram: {
              kind: "compare",
              title: "Cryptography vs steganography",
              caption: "Protect content and advertise it, or hide the channel entirely - different detection problems.",
              left: {
                heading: "Cryptography",
                items: [
                  "Protects content under a key",
                  "Channel visible (TLS handshake, SSH banner)",
                  "Metadata still leaks: SNI, sizes, timing",
                  "Defeated by key/protocol attacks",
                ],
              },
              right: {
                heading: "Steganography",
                items: [
                  "Hides the channel's existence",
                  "Carrier looks innocent (image, audio)",
                  "Payload embedded in LSB planes",
                  "Defeated by statistical anomaly analysis",
                ],
              },
            },
            bullets: [
              "Tester's three stego meeting points: exfiltration carriers, covert command channels, forensic extraction.",
              "Tools: steghide, OpenPuff, zsteg, outguess; detection via LSB-plane statistics and entropy.",
              "Worked demo: 40 KB payload in a 2 MB PNG's LSBs, invisible to the eye, found in seconds.",
              "Crypto split: cleartext protocols leak everything; encrypted channels leak metadata; kill-table checklist applies.",
              "Attackers chain both: encrypt the payload, then embed it - defence must be carrier-independent.",
              "Egress allow-lists + DLP catch exfiltration regardless of carrier - the destination anomaly survives hiding.",
            ],
            callout: {
              type: "tip",
              title: "Detect destinations, not carriers",
              body: "Steganography defeats content inspection by design, so the robust defence is the destination: an allow-listed egress policy flags any image upload to an unapproved host. Teach this sentence in the exam - it shows you understand why carrier-based detection fails.",
            },
            table: {
              caption: "The stego toolkit and its detection.",
              headers: ["Tool", "Carrier", "Detection signal"],
              rows: [
                ["steghide", "JPEG/BMP/WAV", "Embedded-data password prompts; histogram anomalies"],
                ["zsteg", "PNG/BMP", "LSB-plane anomalies across channels"],
                ["OpenPuff", "Multi-carrier", "Entropy outliers vs carrier baseline"],
                ["outguess", "JPEG", "Statistical DCT coefficient shifts"],
                ["CLI entropy (binwalk -E)", "any file", "Entropy spikes in trailing regions"],
              ],
            },
            examQuestions: [
              {
                q: "Explain steganography and cryptography in reconnaissance: mechanisms, the tester's three meeting points with tools, a worked embedding demo, the cleartext/encrypted split, and the contrast-plus-defence analysis.",
                marks: 14,
                outline: [
                  "Steganography: data hidden in carriers; LSB embedding mechanism",
                  "Meeting points: exfiltration carriers, covert command channels, forensics",
                  "Tools: steghide, zsteg, OpenPuff, outguess + entropy analysis",
                  "Worked demo: 40 KB in 2 MB PNG, invisible, seconds to detect when unprotected",
                  "Crypto split: cleartext leaks all; encrypted leaks metadata; kill-table checklist",
                  "Contrast: crypto advertises, stego hides - different detection problems; attackers chain both",
                  "Defence: egress allow-lists + DLP catch destination anomalies regardless of carrier",
                ],
              },
              {
                q: "Why does LSB embedding survive visual inspection but not statistical analysis?",
                marks: 7,
                outline: [
                  "LSB changes alter each pixel by +/-1 - imperceptible",
                  "The payload creates non-natural patterns in the lowest bit-plane",
                  "Natural images show noise-like LSBs; embedded data shows structure",
                  "zsteg/chisquare tests expose the structure",
                  "Compression-resistant carriers and encryption of payload harden but never erase the statistics",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Wireless hacking",
            body: [
              "Wireless hacking in the reconnaissance frame is the RF flank of the attack: everything audible from the parking lot. The pipeline: monitor mode (airmon-ng start wlan0 -> wlan0mon), survey (airodump-ng enumerates SSIDs, BSSIDs, channels, encryption, clients - a site yields 8-15 networks), classification (WPA2-Enterprise corporate vs guest vs IoT PSK vs open), then the RoE-permitted attack class. PSK targets: handshake capture (airodump focus + aireplay deauth to force reconnect) then offline cracking (aircrack-ng with wordlists; hashcat -m 22000 for the PMKID clientless variant - no client needed). Client targets: evil-twin APs and captive-portal clones harvesting credentials. Infrastructure targets: rogue-AP insertion. Enterprise targets resist cracking entirely - the pivot is client-side and rogue-AP classes, and stating that pivot is the method mark.",
              "The worked sequence with its numbers: focus on the corporate-adjacent IoT SSID (WPA2-PSK, 6); airodump captures 4 EAPOL frames after one deauth; aircrack against a 14-million-entry list runs at CPU speed for hours or GPU speed for minutes at 100k-1M guesses/second; the passphrase 'vendorname2019' falls in 41 minutes - the default-pattern passphrase the vendor shipped. From association, the tester sits on the IoT VLAN, and the segment's firewall misconfiguration (the VLAN reachable from the corporate zone) is the pivot finding. The mitigation column: WPA3/802.1X on corporate, PMF against deauth, passphrase length for surviving PSKs, VLAN quarantine for IoT - the standard hardening table.",
              "The legality and consent frame is acute in wireless: RF does not respect walls - the tester's adapter hears the neighbour's networks too, and the RoE must fix BSSID allow-lists (attack these SSIDs only), capture-retention rules (client traffic captured incidentally is deleted, not browsed), and site-visit discipline (badge/escort rules, logged capture locations). The closing analysis: wireless testing is where the physical and digital worlds meet - the survey is a map, the handshake is a credential, and the parking lot is the network's lobby.",
              "Exam framing: 'Explain wireless hacking techniques and safeguards' is a 7-14 mark standard. Walk the pipeline with tools, work the 4-frame/41-minute crack, state the Enterprise pivot, give the hardening table, and close with the RF legality frame.",
            ],
            keyTerms: [
              { term: "Monitor mode", definition: "Capture-all adapter mode - the prerequisite for survey and handshake work." },
              { term: "PMKID attack", definition: "Clientless WPA2-PSK cracking from the AP's first EAPOL frame." },
              { term: "BSSID allow-list", definition: "The RoE rule fixing which networks may be attacked - RF hears beyond the fence." },
              { term: "PMF (802.11w)", definition: "Protected management frames - the deauth countermeasure." },
            ],
            diagram: {
              kind: "flow",
              title: "The wireless attack pipeline",
              caption: "Survey classifies; classification selects the attack class; the RoE bounds everything.",
              steps: [
                { label: "Monitor mode", note: "airmon-ng -> wlan0mon" },
                { label: "Survey", note: "airodump: 8-15 SSIDs, clients" },
                { label: "Classify", note: "Enterprise / guest / IoT PSK / open" },
                { label: "Capture", note: "handshake or PMKID on PSK" },
                { label: "Crack + pivot", note: "offline cracking; VLAN reachability check" },
              ],
            },
            bullets: [
              "Pipeline: monitor -> survey -> classify -> capture -> crack/pivot; survey table anchors the report.",
              "PSK work: airodump focus + aireplay deauth -> 4 EAPOL frames -> aircrack/hashcat offline.",
              "PMKID variant: clientless capture of EAPOL M1; hashcat -m 22000.",
              "Worked: 'vendorname2019' falls in 41 minutes on GPU economics; IoT VLAN misconfiguration is the pivot finding.",
              "Hardening: WPA3/802.1X corporate, PMF, long PSKs, IoT VLAN quarantine.",
              "RF legality: BSSID allow-lists, incidental-capture deletion, site-visit logging.",
            ],
            callout: {
              type: "exam",
              title: "RF hears beyond the fence",
              body: "The legal-frame sentence examiners look for: 'RF does not respect walls - the RoE fixes BSSID allow-lists and deletion rules for incidentally captured client traffic.' Write it in every wireless answer; it separates the professional from the hobbyist.",
            },
            codeExample: {
              language: "bash",
              caption: "wireless.sh - the survey-and-crack sequence",
              code: `airmon-ng start wlan0                  # wlan0mon
airodump-ng wlan0mon                   # survey: 8-15 SSIDs
airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w cap wlan0mon
aireplay-ng -0 1 -a AA:BB:CC:DD:EE:FF -c CLIENT wlan0mon
# "WPA HANDSHAKE" -> capture confirmed
aircrack-ng -w rockyou.lst cap-01.cap  # 41 min on this pass
# clientless alternative
hcxdumptool -i wlan0mon -o pmkid.pcapng`,
            },
            examQuestions: [
              {
                q: "Explain wireless hacking in reconnaissance: the pipeline with tools, the PSK crack sequence with worked numbers, the Enterprise pivot, the hardening table, and the RF legality frame.",
                marks: 14,
                outline: [
                  "Pipeline: monitor, survey (8-15 SSIDs), classify, capture, crack/pivot",
                  "PSK: focus + deauth -> 4 EAPOL -> offline crack; PMKID clientless variant",
                  "Worked: vendor-default passphrase falls in 41 minutes; GPU economics quoted",
                  "Pivot: IoT VLAN reachable from corporate - the segment misconfiguration finding",
                  "Hardening: WPA3/802.1X, PMF, passphrase length, VLAN quarantine",
                  "Legality: BSSID allow-lists, incidental-capture deletion, site logging",
                  "Closing: survey is a map, handshake is a credential, parking lot is the lobby",
                ],
              },
              {
                q: "Why does WPA2-Enterprise resist the handshake-crack class entirely?",
                marks: 7,
                outline: [
                  "No shared passphrase exists to guess",
                  "Authentication is per-user via 802.1X/RADIUS",
                  "Captured EAPOL frames carry session material, not password derivations",
                  "Offline dictionary attack has no offline target",
                  "Attack shifts to client-side and rogue-AP classes",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Firewalls, honeypots, IDS and IPS",
            body: [
              "Reconnaissance must read the defenders' machinery, and the syllabus names four pieces. Firewalls filter traffic by rule: packet-filtering (stateless, port/IP rules), stateful (connection tracking - the dominant edge class), application-layer (WAF/proxy - content inspection), and NGFW (stateful plus IPS plus identity). The tester reads them through behaviour: ACK scans (-sA) map rule sets, port-closed-vs-filtered distinctions reveal filtering, and response timing fingerprints inspection. Honeypots are decoys - low-interaction (emulated services, e.g. honeyd) and high-interaction (real systems instrumented) - deployed to detect and study attackers; the tester's tell is the too-good-to-be-true host: an 'outdated' FTP server that answers perfectly, a share inviting writes - the fingerprint scan (odd banner combos, instant root on a 'vulnerable' service) plus a quick reputation check (reverse DNS, ASN context) avoids wasting the engagement on a decoy.",
              "IDS and IPS are the detection pair: IDS detects and alerts (Snort/Suricata in IDS mode, or NDR analytics), IPS detects and blocks inline (the same engines in IPS mode). Signature-based detection matches known patterns (fast, precise, blind to novelty); anomaly-based models normal behavior and flags deviation (catches novel, cries false positives); and the tester meets both as the difference between what fired during the engagement and what did not. The worked detection reading: the engagement's 400 scan packets tripped 2 signature alerts (both auto-suppressed as tuning) and zero anomaly alerts - the finding is the coverage gap: scanning of that volume should page someone. The mitigation column is the defender's mirror: tune signatures to the estate, baseline anomalies over weeks, and - the purple-team answer - replay adversary techniques deliberately to measure detection.",
              "The reconnaissance consequence is the section's thesis: the tester maps defences the way they map assets, because the attack plan routes around or through them - the firewall map says which paths are open, the honeypot check says which hosts lie, the IDS/IPS reading says how loud the exploitation phase may be (a loud engagement against tuned detection is a client request; a silent phase against absent detection is the finding). The closing sentence: knowing the defenders' machinery is knowing the engagement's noise budget.",
              "Exam framing: 'Explain firewalls, honeypots, IDS and IPS from the attacker's perspective' is a 7-14 mark standard. Give the four machinery classes with tester-visible behaviors, the honeypot fingerprinting method, the signature-vs-anomaly contrast with the worked detection reading, and close with the noise-budget thesis.",
            ],
            keyTerms: [
              { term: "Stateful firewall", definition: "Tracks connection state; the dominant edge-filtering class." },
              { term: "Honeypot", definition: "A decoy system deployed to detect and study attackers - low or high interaction." },
              { term: "IDS vs IPS", definition: "Detect-and-alert versus detect-and-block inline deployment of the same engines." },
              { term: "Noise budget", definition: "How loud the engagement may be, fixed by the client's monitoring expectations." },
            ],
            diagram: {
              kind: "compare",
              title: "Signature vs anomaly detection",
              caption: "One catches the known fast, the other catches the novel slowly - the tester exploits the gap.",
              left: {
                heading: "Signature-based",
                items: [
                  "Matches known attack patterns",
                  "Fast, precise, low false positives",
                  "Blind to novel techniques",
                  "Worked: 2 auto-suppressed scan alerts",
                ],
              },
              right: {
                heading: "Anomaly-based",
                items: [
                  "Models normal behaviour, flags deviation",
                  "Catches novel attacks",
                  "High false-positive cost; needs baselining",
                  "Worked: zero alerts on 400 scan packets - the gap",
                ],
              },
            },
            bullets: [
              "Firewall classes: packet-filtering, stateful, application-layer (WAF), NGFW; read via ACK scans and filtered-vs-closed behavior.",
              "Honeypots: low-interaction emulations, high-interaction instrumented systems; tell = too-good-to-be-true service responses.",
              "IDS/IPS: same engines, alert versus block; Snort/Suricata as the reference pair.",
              "Signature: known patterns, precise, novelty-blind; anomaly: behavioral models, novel-aware, noisy.",
              "Worked reading: 400 scan packets -> 2 suppressed signature alerts, 0 anomaly alerts = coverage-gap finding.",
              "Thesis: mapping defences fixes the engagement's noise budget - loud or silent by agreement.",
            ],
            callout: {
              type: "tip",
              title: "Fingerprint the decoy before attacking it",
              body: "One reconnaissance minute saves an engagement day: before exploiting the beautifully vulnerable host, check banner plausibility, response consistency and reverse-DNS context. Honeypots are built to be attacked - make the attacker's checklist work for you.",
            },
            table: {
              caption: "Defence machinery and the tester's reading of each.",
              headers: ["Machinery", "Purpose", "Tester-visible behaviour"],
              rows: [
                ["Packet-filter firewall", "Stateless port/IP rules", "Filtered vs closed port distinction"],
                ["Stateful firewall", "Connection tracking", "ACK scans reveal rule sets"],
                ["WAF / proxy", "Content inspection", "Response latency; payload mangling"],
                ["Honeypot", "Decoy + study", "Too-perfect vulnerable services"],
                ["IDS", "Detect + alert", "Alert counts vs engagement volume"],
                ["IPS", "Detect + block inline", "Connection resets on known payloads"],
              ],
            },
            examQuestions: [
              {
                q: "Explain firewalls, honeypots, IDS and IPS as reconnaissance targets: classes and behaviors, honeypot fingerprinting, signature-versus-anomaly detection with a worked reading, and the noise-budget thesis.",
                marks: 14,
                outline: [
                  "Firewall classes: stateless, stateful, WAF, NGFW; ACK-scan reading",
                  "Honeypots: low/high interaction; too-perfect-services tell; reputation check",
                  "IDS vs IPS: same engines, alert vs block",
                  "Signature: known-pattern precision, novelty-blind",
                  "Anomaly: behavioural models, novel-aware, false-positive cost",
                  "Worked: 400 packets, 2 suppressed alerts, 0 anomaly alerts - coverage gap",
                  "Thesis: defence map fixes the noise budget; loud by agreement, silent as a finding",
                ],
              },
              {
                q: "How does an attacker distinguish a honeypot from a genuinely vulnerable host?",
                marks: 7,
                outline: [
                  "Banner and version combinations too convenient",
                  "Response consistency: honeypots answer perfectly and uniformly",
                  "Exploits succeed instantly where real systems need conditions",
                  "Network context: reverse DNS, ASN, expected role mismatch",
                  "Compare against neighbours - decoys isolate cleanly",
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
      title: "Enumeration and Exploitation",
      summary:
        "Unit IV covers enumeration techniques and elements, the soft objective, exploitation preparation, intuitive testing and evasion, password crackers, rootkits and backdoors, and the closing cluster - wardialing, network services, DoS attacks and areas of concern.",
      chapter: {
        number: "04",
        title: "Enumeration to Exploitation",
        intro:
          "Unit IV covers enumeration (SMB, SNMP, LDAP, SMTP, DNS, NFS), the soft objective decision, exploitation preparation, intuitive testing and evasion, password cracking, rootkits and backdoors, wardialing, network services and DoS.",
        inOneBreath:
          "Enumeration converts 'port open' into names, shares and policies (28 users, 5-failure lockout, 22 mailboxes) - calibration for calibrated attacks. The soft objective gates proceed-or-hold on authorization, preconditions and blast radius; pre-flight packages turn enumeration into 40-second exploitation. Intuitive testing reads the filter's own errors; evasion stays inside the RoE. Password cracking measures policy reality (9+3+1 of 28); rootkits hide in layers an outside kernel unmasks; wardialing's modern equivalents, DoS classes (51,000x amplification) and the areas-of-concern checklist close the unit.",
        sections: [
          {
            number: "4.1",
            title: "Enumeration techniques and elements",
            body: [
              "Enumeration is the phase where scanning becomes structured intelligence: querying live services for the structured data they willingly (or carelessly) disclose - users, shares, groups, routes, printers, policies. The syllabus's elements per service: NetBIOS/SMB (137-139/445: share lists, user lists, group memberships, password policy via null or weak sessions), SNMP (161: community 'public'/'private' yielding interface tables, connected-device inventories, routing data, sometimes running-config names), LDAP (389/636: directory users, groups, service accounts), SMTP (25: VRFY/EXPN mailbox validation), DNS (53: zone transfer attempts, record classes), NTP (123: version and peer leaks), NFS (2049: export lists via showmount), and RPC (endpoint mapper exposing service UUIDs). Each element has its canonical tool: enum4linux/crackmapexec for SMB, snmpwalk for SNMP, ldapsearch for LDAP, nmap's enumeration NSE scripts as the orchestrator.",
              "The worked enumeration pass on a Windows-flavoured host: enum4linux -a returns 3 shares (public, finance, print$), 28 usernames, a password policy (minimum 8 characters, lockout after 5 failures - the policy that calibrates spraying speed), 2 domain admins' names, and the domain SID; snmpwalk with community 'public' on the adjacent router returns 14 interface descriptions naming VLANs; SMTP VRFY confirms 22 of the 28 users have mailboxes. The conversion is immediate: 28 usernames minus lockout policy = spray at 1 attempt per account per hour (stays under 5-attempt lockout), finance share is the phase-3 objective from Unit II's plan, and the two domain-admin names become the spear-phishing priorities. Enumeration is where the attack plan fills its last blanks.",
              "The distinction examiners probe: scanning asks 'what exists', enumeration asks 'what exists and what does it say' - scans find port 445 open; enumeration returns the names, shares and policies that make exploitation social rather than blind. The defensive mirror: enumeration succeeds on misconfigurations (anonymous sessions, default communities, VRFY enabled, NFS exports open) - each element maps to one hardening line (disable anonymous SMB enumeration, change SNMP communities or move to v3, disable VRFY, restrict showmount), which is why enumeration tables appear in hardening audits verbatim.",
              "Exam framing: 'Explain enumeration and its techniques with elements per service' is a 14-mark standard. Give the service-element-tool table, work the enum4linux/snmpwalk/VRFY pass with its 28-user/22-mailbox numbers, state the scanning-vs-enumeration distinction, and close with the defensive mirror.",
            ],
            keyTerms: [
              { term: "Null session", definition: "Anonymous SMB/NetBIOS session - legacy enumeration channel." },
              { term: "SNMP community string", definition: "Cleartext v1/2c 'password'; 'public' grants read on misconfigured devices." },
              { term: "VRFY", definition: "SMTP command validating a mailbox exists - the user-list verifier." },
              { term: "Showmount", definition: "NFS export-list query - reveals mountable directories." },
            ],
            diagram: {
              kind: "flow",
              title: "From scan to attack parameters",
              caption: "Enumeration converts 'port open' into names, policies and calibrated plans.",
              steps: [
                { label: "Scan finds 445 open", note: "SMB listening" },
                { label: "enum4linux", note: "3 shares, 28 users, lockout 5" },
                { label: "snmpwalk 'public'", note: "14 VLAN-named interfaces" },
                { label: "SMTP VRFY", note: "22 of 28 mailboxes live" },
                { label: "Plan calibrated", note: "1 attempt/account/hour; objectives located" },
              ],
            },
            bullets: [
              "Elements per service: SMB (shares/users/policy), SNMP (interfaces/routes), LDAP (directory objects), SMTP (VRFY), DNS (AXFR), NFS (exports), RPC (UUIDs).",
              "Canonical tools: enum4linux/crackmapexec, snmpwalk, ldapsearch, showmount, nmap NSE enumeration scripts.",
              "Worked pass: 3 shares, 28 users, lockout policy 5, 2 domain admins, 14 VLAN-named interfaces, 22 mailboxes.",
              "Conversion: spray at 1 attempt/account/hour under the 5-failure lockout; finance share = phase-3 objective; admins = spear priorities.",
              "Scanning vs enumeration: 'what exists' vs 'what it says' - names, shares, policies.",
              "Defensive mirror: anonymous SMB off, SNMP v3, VRFY off, export restrictions - one hardening line per element.",
            ],
            callout: {
              type: "exam",
              title: "The password policy is the calibration",
              body: "The enumeration detail that changes the attack: the discovered password policy (minimum length, lockout threshold) calibrates spraying speed. Writing 'lockout after 5 -> 1 attempt per account per hour' in the answer shows you read the policy as a constraint, not trivia.",
            },
            table: {
              caption: "Enumeration elements by service - the exam table.",
              headers: ["Service / port", "Data yielded", "Tool"],
              rows: [
                ["NetBIOS/SMB 137-139, 445", "Shares, users, groups, policy, SID", "enum4linux, crackmapexec"],
                ["SNMP 161/162", "Interfaces, devices, routes", "snmpwalk, snmp-check"],
                ["LDAP 389/636", "Users, groups, service accounts", "ldapsearch"],
                ["SMTP 25", "Mailbox validation (VRFY/EXPN)", "nmap smtp-enum-users"],
                ["DNS 53", "Zone transfer, records", "dig axfr, DNSRecon"],
                ["NFS 2049", "Export lists", "showmount -e"],
                ["RPC 135", "Service UUIDs", "rpcdump"],
              ],
            },
            examQuestions: [
              {
                q: "Explain enumeration and its techniques: the service-element-tool table, a worked Windows-flavoured enumeration pass with conversion into attack parameters, the scanning-versus-enumeration distinction, and the defensive mirror.",
                marks: 14,
                outline: [
                  "Service elements: SMB, SNMP, LDAP, SMTP, DNS, NFS, RPC with data each yields",
                  "Tools: enum4linux, crackmapexec, snmpwalk, ldapsearch, showmount, NSE scripts",
                  "Worked pass: 3 shares, 28 users, 5-failure lockout, 2 admins, 22 VRFY mailboxes",
                  "Conversion: spray calibration, phase-3 objective located, spear priorities set",
                  "Distinction: scanning = what exists; enumeration = what it says",
                  "Defensive mirror: one hardening line per element (SMB anon off, SNMP v3, VRFY off, export ACLs)",
                  "Enumeration tables appear verbatim in hardening audits",
                ],
              },
              {
                q: "How does the discovered password policy change the password-attack plan?",
                marks: 7,
                outline: [
                  "Lockout threshold caps attempts per account per period",
                  "Minimum length prunes the candidate list",
                  "Complexity rules shape the wordlist (substitutions, suffix years)",
                  "Spray paced: 1 attempt/account/hour under a 5-failure policy",
                  "Policy discovery turns brute force into calibrated spraying",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "The soft objective: looking around or attacking",
            body: [
              "The syllabus's 'soft objective - looking around or attack' names the decision every enumeration output forces: the data in hand invites exploitation, but the RoE and the phase plan decide whether to proceed. The soft objective is the middle state: authenticated-looking-around that proves access without exploiting - reading the share listing the enumeration revealed, opening the public share's directory tree, confirming the VRFY'd mailbox exists by sending nothing. It is 'looking around' with evidence discipline: every step reversible, nothing modified, screenshots timestamped - the state that produces report evidence even when the client pulls the plug mid-engagement.",
              "The decision framework: proceed to attack when the RoE explicitly authorizes the technique, the phase plan's preconditions are met, and the blast radius is understood (what breaks if the exploit crashes the service); hold at soft-objective when authorization is ambiguous, the technique's stability is unknown, or the client's monitoring agreement requires the SOC to see the phase first. The worked decision: enumeration shows the finance share readable by the phished user - the phase-3 objective needs a data-read proof; the RoE authorizes read-only access with volume limits; the SOC was told exploitation starts day 6 - so proceed, read one row, capture, stop. Contrast case: the same share listing shows a database backup that would need a service restart to mount - the RoE forbids restarts; hold, document, note the path as 'confirmed but not executed'.",
              "The soft objective's professional value is the exam's analysis mark: it converts ambiguity into documented findings (a held path is still a finding - 'path confirmed, execution withheld by RoE'), it protects the engagement legally (no unauthorized technique ran), and it gives the client a choice ('the path is proven to this point; authorize execution and we complete it in one hour'). The closing rule: the ethical hacker attacks only what the contract authorizes - everything else is looking around, and looking around done well is most of the work.",
              "Exam framing: 'Explain the soft objective - looking around versus attacking' is a 7-14 mark standard. Define the middle state with its evidence discipline, give the proceed/hold framework with its three checks, work the finance-share proceed and the backup-hold contrast, and close with the professional-value paragraph.",
            ],
            keyTerms: [
              { term: "Soft objective", definition: "Authenticated-looking-around that proves access without exploiting - reversible, evidenced." },
              { term: "Blast radius", definition: "What breaks if the technique fails or crashes the service." },
              { term: "Held path", definition: "A confirmed-but-not-executed attack path, documented as a finding." },
              { term: "Volume limit", definition: "The RoE cap on data read during proofs - one row, not one table." },
            ],
            diagram: {
              kind: "fork",
              title: "Proceed or hold - the three-check gate",
              caption: "Enumeration always offers the next step; the RoE decides whether it is taken.",
              start: "Enumeration revealed an exploitable path",
              branches: [
                { label: "RoE authorizes + preconditions met + blast radius known", outcome: "proceed: exploit within volume limits, capture evidence", good: true },
                { label: "Authorization ambiguous", outcome: "hold: document as held path, ask the lead", good: false },
                { label: "Technique stability unknown", outcome: "hold: rehearse in the lab first", good: false },
                { label: "SOC visibility not yet agreed", outcome: "hold: schedule the phase with the client", good: false },
              ],
            },
            bullets: [
              "Soft objective: authenticated looking-around - reversible steps, timestamped evidence, nothing modified.",
              "Proceed checks: explicit RoE authorization, phase preconditions met, blast radius understood.",
              "Worked proceed: finance share readable + RoE read-only + SOC informed -> read one row, capture, stop.",
              "Worked hold: database backup needing a service restart - RoE forbids restarts -> held path documented.",
              "Held paths are findings: 'confirmed but not executed' - the client can authorize completion later.",
              "Rule: attack only what the contract authorizes; looking around done well is most of the work.",
            ],
            callout: {
              type: "exam",
              title: "Held paths are still findings",
              body: "Candidates lose marks treating a withheld exploit as a wasted step. The marked framing: 'path confirmed to authentication; execution withheld per RoE - client may authorize completion.' Ambiguity converted to documentation is the professional's product.",
            },
            table: {
              caption: "Proceed versus hold - the worked contrast.",
              headers: ["Situation", "Decision", "Reason"],
              rows: [
                ["Finance share readable, RoE allows read-only", "Proceed: one-row proof", "Authorized, bounded, SOC informed"],
                ["Backup needs service restart to mount", "Hold: held path", "RoE forbids restarts"],
                ["Novel exploit untested in lab", "Hold: rehearse first", "Stability unknown"],
                ["SOC asked to see exploitation live", "Hold: schedule phase", "Visibility agreement pending"],
                ["Public share directory tree", "Soft objective", "Reversible, zero-impact evidence"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the soft objective in enumeration: the looking-around state and its evidence discipline, the proceed-or-hold framework with its checks, worked proceed and hold cases, and the professional value of held paths.",
                marks: 14,
                outline: [
                  "Definition: authenticated looking-around, reversible, timestamped evidence",
                  "Proceed checks: explicit authorization, preconditions, blast radius",
                  "Worked proceed: readable finance share + read-only RoE -> one-row proof",
                  "Worked hold: restart-requiring backup path -> documented, not executed",
                  "Held paths as findings: confirmed-but-withheld, completable on request",
                  "Legal protection: no unauthorized technique ran",
                  "Rule: attack only the contract's authorizations; most of the work is looking around",
                ],
              },
              {
                q: "Why is blast-radius analysis required before executing any exploitation step?",
                marks: 7,
                outline: [
                  "Exploits can crash services, not just succeed",
                  "Production impact is the engagement's biggest liability",
                  "Blast radius = what fails if the exploit errors",
                  "Lab rehearsal plus restart restrictions bound it",
                  "The check is a RoE discipline, not paranoia",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Preparing for the next phase: exploitation",
            body: [
              "Preparation for exploitation is the handover where enumeration's intelligence becomes a targeting package: per-host exploit plans with preconditions verified, payloads chosen, fallbacks ready and evidence steps scripted. The package per target: service and version (from banners - the exploit match), OS and architecture (from fingerprinting - the payload match), network position (egress from target to tester - reverse versus bind shell), access level needed (pre-auth versus credentialed - the enumeration's usernames feed it), and the success criteria (what evidence lands when it works). The pre-flight checklist is the syllabus's operational heart: verify version, rehearse in lab, prepare payload and listener, script the evidence capture, and set the abort line if the service degrades.",
              "The worked package shows it end to end: target 10.0.2.14, Samba 4.11 on 445 (banner-verified), Linux x64 (TTL 63, fingerprint 97%), egress open (the host calls out to a monitoring endpoint - reverse shell viable), credentials not needed (pre-auth module exists), success = session + uid evidence. Pre-flight: module matched and lab-rehearsed (stable), listener on LHOST 10.10.14.5:4444 confirmed, evidence script queued (whoami, id, hostname, screenshot), abort line = any service degradation. Execution then takes 40 seconds: module fires, session opens, evidence lands - and the fallback (manual PoC adaptation) never needed. The planning-to-execution ratio the exam likes: two hours of preparation for 40 seconds of exploitation - and the report's credibility rests on the two hours.",
              "The phase-preparation frame also covers the escalation ladder's prep: once the first shell lands, phase 2's package (privilege enumeration commands queued, credential-harvest tooling staged, pivot routes drafted) is what makes the engagement flow - the exam's closing sentence: exploitation is the cheapest-looking phase precisely because preparation made it so; every second of a clean exploit was bought in enumeration and pre-flight.",
              "Exam framing: 'How does an ethical hacker prepare for the exploitation phase?' is a 7-14 mark standard. Give the targeting-package fields, the five-step pre-flight checklist, work the Samba package end to end with its 40-second execution, and close with the preparation-to-execution ratio sentence.",
            ],
            keyTerms: [
              { term: "Targeting package", definition: "Per-host plan: version, OS, egress, access level, success criteria." },
              { term: "Pre-flight checklist", definition: "Verify version, lab-rehearse, stage payload/listener, script evidence, set abort line." },
              { term: "Fallback", definition: "The alternative exploit path prepared before the primary fires." },
              { term: "Evidence script", definition: "The queued command sequence capturing proof the instant the shell lands." },
            ],
            diagram: {
              kind: "pipeline",
              title: "From enumeration to exploitation",
              caption: "Package, pre-flight, execute, evidence - two hours of preparation for forty seconds of execution.",
              stages: [
                { label: "Targeting package", note: "Samba 4.11, Linux x64, egress open, pre-auth" },
                { label: "Lab rehearsal", note: "module stable on equivalent VM" },
                { label: "Pre-flight", note: "listener staged, evidence scripted, abort line set" },
                { label: "Execute", note: "40 seconds to session" },
                { label: "Evidence", note: "whoami, id, screenshot - queued and landed" },
              ],
            },
            bullets: [
              "Package fields: service/version, OS/architecture, egress direction, access level, success criteria.",
              "Pre-flight: version verified, lab-rehearsed, payload + listener staged, evidence scripted, abort line set.",
              "Worked package: Samba 4.11 pre-auth module, reverse shell viable (egress open), LHOST 10.10.14.5:4444.",
              "Execution: 40 seconds module-to-session; evidence lands from the queued script.",
              "Fallback prepared: manual PoC adaptation - never needed but never skipped.",
              "Ratio: two hours of preparation per forty seconds of exploitation - preparation is the credibility.",
            ],
            callout: {
              type: "warning",
              title: "Never fire an unrehearsed module",
              body: "The pre-flight that gets skipped is the one that crashes the client's mail server. Rehearse on an equivalent VM, stage the fallback, and set the abort line in writing - the 40-second exploit is safe only when the two hours before it were honest.",
            },
            table: {
              caption: "The targeting package for the worked host.",
              headers: ["Field", "Value", "Source"],
              rows: [
                ["Service / version", "Samba 4.11, port 445", "Banner grab"],
                ["OS / architecture", "Linux x64", "TTL + fingerprint (97%)"],
                ["Egress", "Open - reverse shell viable", "Outbound monitoring call observed"],
                ["Access level", "Pre-auth", "Module requirement"],
                ["Success criteria", "Session + uid evidence", "Phase plan"],
                ["Abort line", "Any service degradation", "RoE"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how the exploitation phase is prepared: the targeting package fields, the pre-flight checklist, a worked package executed end to end, and the preparation-to-execution ratio that makes exploitation look easy.",
                marks: 14,
                outline: [
                  "Package: service/version, OS/arch, egress, access level, success criteria",
                  "Pre-flight: verify version, lab rehearsal, payload + listener, evidence script, abort line",
                  "Worked: Samba 4.11, Linux x64, egress open, pre-auth module, LHOST staged",
                  "Execution: 40 seconds module-to-session; evidence queued and landed",
                  "Fallback: manual PoC adaptation prepared, unused",
                  "Phase-2 prep: escalation commands queued, harvest tooling staged",
                  "Sentence: exploitation is cheap-looking because preparation made it so",
                ],
              },
              {
                q: "Why does the egress direction decide the payload choice?",
                marks: 7,
                outline: [
                  "Reverse shell needs the target to connect out to the listener",
                  "Bind shell needs inbound connectivity to the target",
                  "Ingress is almost always filtered; egress rarely is",
                  "Observing outbound monitoring calls proves egress",
                  "Hence reverse payloads dominate real engagements",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Intuitive testing and evasion",
            body: [
              "Intuitive testing is the syllabus's name for the judgment layer above tooling: reading a target's responses the way a craftsman reads material - the error message that leaks a framework, the timing gap that says a filter parsed something, the null-byte behavior that says a filter does substring checks. Where scanners run signatures, intuition runs hypotheses: the login page that returns different errors for wrong-user versus wrong-password (user enumeration), the upload filter that blocks .php but not .php5/.phtml/.phar (extension logic readable from its rejections), the WAF that blocks 'UNION SELECT' but not 'UNION/**/SELECT' (keyword matching, not parsing). Each hypothesis is a one-request experiment - and the exam's framing is that intuition is systematic, not magical: observe, hypothesize, test one variable, record.",
              "Evasion is the deliberate shaping of traffic to pass defences that would otherwise block it, and the taxonomy runs by defence: against signature IDS/IPS - payload encoding (URL/unicode), fragmentation, case manipulation, protocol-level tricks (the 'UNION/**/SELECT' class); against WAFs - comment insertion, alternative syntax (mid-operator splitting in SQLi, tag-based XSS variants), header manipulation; against rate limits - spraying pace from the enumeration's lockout policy; against AV/engine scanners - payload obfuscation and in-memory execution. The worked evasion pair: the filter blocks '<script>' but accepts '<img src=x onerror=...>' (event-handler variant); the IDS matches 'UNION SELECT' but 'union all select' with case and whitespace passes - both are one-variable experiments derived from the filter's own error text.",
              "The professional boundary is the section's ethics anchor: evasion within an engagement serves the RoE's stated purpose (proving paths the client asked to be proven under realistic conditions) and never exceeds it - an evasion that crashes the WAF, or one used to reach an explicitly excluded target, is a scope violation wearing a technical costume. The closing sentence: intuition and evasion are the same skill - reading the defence's assumptions and testing one variable past them - and both are bounded by the contract, not by capability.",
              "Exam framing: 'Explain intuitive testing and evasion techniques with their limits' is a 7-14 mark standard. Define intuitive testing as systematic hypothesis work with three worked hypotheses, give the evasion taxonomy by defence with the worked pair, and close with the RoE boundary paragraph.",
            ],
            keyTerms: [
              { term: "Intuitive testing", definition: "Systematic observe-hypothesize-test-record work from a target's own responses." },
              { term: "Evasion", definition: "Shaping traffic to pass signature, WAF, rate or engine defences." },
              { term: "One-variable experiment", definition: "Each test changes exactly one element so the filter's logic is readable." },
              { term: "Mid-operator splitting", definition: "SQLi syntax variant that defeats naive keyword matching." },
            ],
            diagram: {
              kind: "compare",
              title: "Scanner vs intuitive tester",
              caption: "Signatures test what is known; intuition reads what the defence itself reveals.",
              left: {
                heading: "Scanner behaviour",
                items: [
                  "Fires known payloads from templates",
                  "Blocks reported as 'target not vulnerable'",
                  "Cannot read why a payload was rejected",
                  "Noise-heavy, hypothesis-free",
                ],
              },
              right: {
                heading: "Intuitive behaviour",
                items: [
                  "Reads error text, timing, null-byte behaviour",
                  "Forms one-variable hypotheses",
                  "Shapes payloads to the filter's logic",
                  "Records each experiment as evidence",
                ],
              },
            },
            bullets: [
              "Worked hypotheses: differential login errors (user enum), extension rejections (.php5/.phtml), WAF keyword bypass (UNION/**/SELECT).",
              "Evasion by defence: IDS - encoding/fragmentation/case; WAF - comment insertion, alternative syntax; rate limits - paced spraying; AV - obfuscation.",
              "Worked pair: <img src=x onerror=...> passes a <script>-filter; 'union all select' passes case+whitespace matching.",
              "Method: observe, hypothesize, change one variable, record - intuition is systematic.",
              "Boundary: evasion serves the RoE's purpose only; crashing defences or reaching excluded targets is scope violation.",
              "Closing: intuition and evasion are one skill - reading assumptions, testing past them, inside the contract.",
            ],
            callout: {
              type: "exam",
              title: "Read the filter's own error",
              body: "The highest-skill sentence in this section: 'the filter's rejection message is its documentation.' An answer that quotes the actual rejection ('.php blocked') and derives the next payload ('.phtml') demonstrates intuitive testing far better than listing evasion tricks.",
            },
            table: {
              caption: "Evasion taxonomy by defence.",
              headers: ["Defence", "Assumption", "Evasion class"],
              rows: [
                ["Signature IDS/IPS", "Known patterns match", "Encoding, fragmentation, case"],
                ["WAF keyword rules", "Payloads match keywords", "Comment insertion, alt syntax"],
                ["Rate limiting", "Fixed request pace", "Paced spraying from lockout policy"],
                ["Upload filters", "Extension == type", "Double/misleading extensions, MIME tricks"],
                ["AV/engines", "Disk-resident signatures", "In-memory execution, obfuscation"],
              ],
            },
            examQuestions: [
              {
                q: "Explain intuitive testing and evasion: the systematic hypothesis method with worked hypotheses, the evasion taxonomy by defence class with a worked pair, and the RoE boundary that governs both.",
                marks: 14,
                outline: [
                  "Intuitive testing: observe, hypothesize, one-variable test, record",
                  "Worked hypotheses: differential errors, extension logic, WAF keyword bypass",
                  "Evasion classes: IDS encoding/fragmentation; WAF comment/alt-syntax; rate pacing; AV obfuscation",
                  "Worked pair: <img onerror> past script filter; 'union all select' past case matching",
                  "Method point: filter rejections are documentation",
                  "Boundary: evasion only within RoE purpose; never crashes defences or touches excluded targets",
                  "Closing: one skill - reading assumptions, testing past them, bounded by contract",
                ],
              },
              {
                q: "Why is user enumeration via differential login errors a finding even without a successful login?",
                marks: 7,
                outline: [
                  "Different messages reveal which usernames exist",
                  "Attackers prune lists before password attacks",
                  "Spraying efficiency rises sharply",
                  "Remediation: uniform error responses and timing",
                  "Enumeration itself is the vulnerability - access is not required",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Password crackers",
            body: [
              "Password cracking is the offline (or calibrated online) inversion of password storage, and the syllabus's tool cluster is John the Ripper and hashcat. The mechanics per storage class: Unix /etc/shadow hashes (unshadowed and fed to John - 'john unshadowed.txt'), Windows NTLM hashes (hashcat -m 1000), SHA-512-crypt Linux (-m 1800), WPA handshakes (-m 22000), and the policy classes that make cracking feasible: unsalted MD5 (instant), fast hashes without iterations (GPU-friendly), salted-but-single-iteration (still fast), KDF-protected (bcrypt/argon2 - deliberately slow, 10-1000 hashes/second per device). Attack modes: dictionary (wordlist + rules - rockyou 14M entries with mangling rules), brute force (all candidates - length-limited by math: 8-char lowercase is ~2^37, minutes on GPUs; 12-char mixed is centuries), hybrid/combination, and mask attacks (known structure: 'Word + 4 digits' targets the corporate pattern).",
              "The worked cracking session shows the economics: a hash dump of 28 accounts yields 9 passwords in 40 minutes using rockyou + rules (the reused-pattern set), 3 more via mask attack (?u?l?l?l?l?d?d?d?d - the 'Name + 4 digits' corporate pattern guessed from two cracked examples), and 1 domain-admin hash refuses everything - the report's honest line is '16 of 28 recovered; the remainder resisted 24 hours of GPU work at the configured policy'. The online side is calibrated spraying (from the enumeration's lockout policy: 1 attempt/account/hour) and hashcat's GPU economics quoted as the risk argument: unsalted single-iteration hashes crack at billions per second; the fix is bcrypt/argon2 + length floors + breach-corpus screening.",
              "The defensive mirror earns its marks: storage (bcrypt/Argon2id with current parameters), policy (12+ characters, no rotation theatre, breach-corpus deny-lists), and monitoring (offline-cracking evidence = stolen hashes, so hash-dump detection is the incident trigger). The exam's closing sentence: cracking is the measurement of the client's password reality - 16 of 28 is not a tool score, it is the policy's report card, and the remediation is parameters, not slogans.",
              "Exam framing: 'Explain password cracking tools and techniques' is a 14-mark staple. Give the storage-class mechanics with hashcat modes, the attack modes with math, work the 9+3+1 cracking session, and close with the defensive mirror and the report-card sentence.",
            ],
            keyTerms: [
              { term: "John the Ripper", definition: "The classic cracker - unshadowed hash files, rules-based mangling." },
              { term: "hashcat", definition: "GPU cracker; -m modes per hash type (1000 NTLM, 1800 sha512crypt, 22000 WPA)." },
              { term: "Mask attack", definition: "Structure-directed brute force (?u?l?d placeholders) targeting known password patterns." },
              { term: "Argon2id", definition: "The modern password KDF - memory-hard, resists GPU cracking by design." },
            ],
            diagram: {
              kind: "pyramid",
              title: "Password reality, measured",
              caption: "16 of 28 recovered - the pyramid shows where each fell.",
              tiers: [
                { label: "Domain admin - resisted", note: "long, random, no reuse - the exemplar" },
                { label: "Mask-recovered (3)", note: "Name + 4 digits corporate pattern" },
                { label: "Rule-recovered (9)", note: "rockyou + rules in 40 minutes" },
                { label: "Breach-list hits", note: "already public - instant losses" },
                { label: "Policy floor", note: "12+ chars, argon2id, corpus screening = the fix" },
              ],
            },
            bullets: [
              "Storage classes: unsalted MD5 (instant), NTLM (fast), sha512crypt (salted), bcrypt/argon2 (deliberately slow).",
              "hashcat modes: -m 1000 NTLM, -m 1800 sha512crypt, -m 22000 WPA; John for rules-based dictionary work.",
              "Attack modes: dictionary + rules, brute force (math-limited), hybrid, mask (?u?l?l?l?l?d?d?d?d).",
              "Worked session: 9 in 40 min (rockyou+rules), 3 via mask from the corporate pattern, 1 resisted 24 h GPU.",
              "Online calibration: 1 attempt/account/hour under the discovered 5-failure lockout.",
              "Defence: argon2id + 12-char floor + breach screening; hash-dump detection as the incident trigger.",
            ],
            callout: {
              type: "exam",
              title: "Quote the math, then the economics",
              body: "The numerical marks live in two lines: '8-char lowercase = 2^37 candidates, minutes on GPU; 12-char mixed = centuries' and 'argon2id at 100 hashes/second throttles the same GPU by nine orders'. Write both; they prove you understand why length and KDF parameters decide outcomes.",
            },
            codeExample: {
              language: "bash",
              caption: "cracking.txt - the worked session",
              code: `unshadow passwd shadow > unshadowed.txt
john --wordlist=rockyou.lst --rules unshadowed.txt   # 9 in 40 min
john --show unshadowed.txt                            # recovered list

hashcat -m 1000 ntlm.txt -a 3 '?u?l?l?l?l?d?d?d?d'    # mask: Name+4digits
hashcat -m 1000 ntlm.txt rockyou.lst -r rules/best64.rule

# economics check
8-char lowercase  = 26^8 ~ 2.1e11 candidates  -> minutes on GPU
12-char mixed     = 62^12 ~ 3.2e21 candidates -> centuries
argon2id          = ~100 h/s per device       -> GPU throttled by design`,
            },
            examQuestions: [
              {
                q: "Explain password cracking: storage-class mechanics with hashcat modes, the attack modes with candidate mathematics, a worked cracking session with its honest remainder, and the defensive mirror.",
                marks: 14,
                outline: [
                  "Storage classes: MD5 unsalted, NTLM, sha512crypt, bcrypt/argon2 - speed per class",
                  "hashcat modes: -m 1000, -m 1800, -m 22000; John rules-based",
                  "Modes: dictionary+rules, brute force, hybrid, mask attacks",
                  "Math: 8-char lowercase minutes; 12-char mixed centuries",
                  "Worked session: 9 (rockyou+rules), 3 (corporate mask), 1 resisted 24 h GPU",
                  "Online calibration: 1 attempt/account/hour under 5-failure lockout",
                  "Defence: argon2id parameters, 12-char floor, breach screening, hash-dump alerting",
                ],
              },
              {
                q: "Why does bcrypt resist GPU cracking where unsalted MD5 does not?",
                marks: 7,
                outline: [
                  "bcrypt has a configurable cost factor iterating the core function",
                  "GPU parallelism gains little from memory-heavy, branchy iteration",
                  "Unsalted MD5 is a single cheap transform - billions/second",
                  "bcrypt at cost 10 runs tens-to-hundreds per second per device",
                  "Nine orders of magnitude is the design intent",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Rootkits and backdoors",
            body: [
              "Rootkits are persistence that hides its own existence: userland rootkits replace or hook binaries and libraries (the trojaned ls that omits attacker files, LD_PRELOAD hooks that filter directory listings), kernel-mode rootkits load into ring 0 (LKM rootkits modifying system-call tables, DKOM process hiding) so neither user nor userland tools see the compromise, and boot/firmware-level rootkits (bootkits, UEFI implants) survive reinstalls. Backdoors are the simpler sibling: any mechanism re-establishing access without authentication - a hardcoded account, an SSH key in authorized_keys, a webshell, a scheduled reverse shell, an added service. The tester's use is bounded by the RoE (persistence is usually forbidden in pentests, permitted-and-reversible in red teams), but the recognition duty is not: detecting an existing rootkit or backdoor is a finding class the engagement must be able to report.",
              "The detection catalogue is the exam's technical core: cross-verification (compare 'ls' output against 'stat' on the directory, count inodes - rootkits filter views but not the filesystem itself), boot-time media checks (boot a clean live environment and mount the suspect disk - kernel rootkits cannot hide from an outside kernel), signature and integrity tools (rkhunter, chkrootkit - known signatures; AIDE/Tripwire file-integrity baselines), behavior analytics (hidden PIDs, /proc anomalies, modules loaded without files), and the memory-forensics gold standard (volatility against a memory dump - userland lies are invisible to a kernel-level analyst reading raw RAM). The worked detection: netstat shows no listener but the live-USB check finds one on 4444 bound by a process named [kworker/2:1] - a fake kernel-thread name for a userspace binary; the file's absence from 'ls' but presence in directory inode counts seals the userland-rootkit finding.",
              "The report's language matters as much as the detection: findings distinguish 'backdoor functionality observed in [artifact]' (evidence-backed) from 'indicators consistent with a userland rootkit' (probabilistic), because the legal weight differs and the remediation differs - a backdoor is removed and rotated; a rootkit is presumed-surviving (the mitigation is rebuild, not clean). The closing sentence: the ethical hacker's job is recognition and evidence, not counter-rootkit warfare - the rebuild decision belongs to the client, priced by the evidence the tester gathered.",
              "Exam framing: 'Explain rootkits and backdoors, and how they are detected' is a 14-mark standard. Give the taxonomy (userland, kernel, boot/firmware) with mechanisms, the backdoor catalogue, the five-detection catalogue with the worked netstat/live-USB case, and close with the report-language distinction.",
            ],
            keyTerms: [
              { term: "Userland rootkit", definition: "Binary/library replacement or hooks hiding attacker artifacts from userland views." },
              { term: "Kernel rootkit (LKM)", definition: "Ring-0 module altering system-call tables to hide processes, files, connections." },
              { term: "Bootkit", definition: "Persistence below the OS in boot chain or firmware - survives reinstalls." },
              { term: "Live-USB verification", definition: "Mounting the suspect disk from a clean kernel - hides nothing from an outside OS." },
            ],
            diagram: {
              kind: "layers",
              title: "The hiding stack - detection from outside",
              caption: "Each layer lies to the layers above it; only an outside kernel or raw memory sees the truth.",
              layers: [
                { label: "Firmware / bootkit", note: "survives reinstalls; detect via firmware hash, external boot" },
                { label: "Kernel rootkit", note: "syscall hooks; detect via live-USB mount, memory forensics" },
                { label: "Userland rootkit", note: "binary/lib hooks; detect via cross-verification, inode counts" },
                { label: "Backdoor (no hiding)", note: "keys, webshells, scheduled shells; detect by inventory diff" },
              ],
            },
            bullets: [
              "Taxonomy: userland (trojaned binaries, LD_PRELOAD), kernel (LKM, syscall tables, DKOM), boot/firmware (survives reinstall).",
              "Backdoor catalogue: hardcoded accounts, SSH keys, webshells, scheduled reverse shells, added services.",
              "Detection: cross-verification (ls vs stat, inode counts), live-USB mounting, rkhunter/chkrootkit, AIDE baselines, volatility memory analysis.",
              "Worked case: netstat clean but live-USB finds 4444 listener under a fake [kworker] name; inode count discrepancy seals it.",
              "Report language: evidence-backed 'functionality observed' vs probabilistic 'indicators consistent with'.",
              "Remediation split: backdoor = remove + rotate; rootkit = presume-surviving, rebuild recommended.",
            ],
            callout: {
              type: "exam",
              title: "An outside kernel sees everything",
              body: "The one-line detection principle examiners want: 'a rootkit lies to the OS it runs in - boot a clean kernel from USB and mount the disk, and nothing can hide from an OS it is not running in.' It compresses the whole detection catalogue into a defensible sentence.",
            },
            table: {
              caption: "Detection techniques against hiding layers.",
              headers: ["Technique", "Detects", "Why it works"],
              rows: [
                ["ls vs stat / inode counts", "Userland filtering", "Filesystem truth vs filtered views"],
                ["Live-USB disk mount", "Kernel rootkits", "Clean kernel reads the raw disk"],
                ["rkhunter / chkrootkit", "Known signatures", "Signature match on artefacts"],
                ["AIDE / Tripwire", "File changes", "Baseline integrity diff"],
                ["Volatility (memory)", "Kernel + userland", "Raw RAM cannot be hooked"],
                ["Inventory diff", "Backdoors", "Keys/accounts/services vs baseline"],
              ],
            },
            examQuestions: [
              {
                q: "Explain rootkits and backdoors: the taxonomy with mechanisms, the backdoor catalogue, the detection techniques with a worked case, and the report-language and remediation distinction.",
                marks: 14,
                outline: [
                  "Taxonomy: userland hooks, kernel LKM/syscall, boot/firmware persistence",
                  "Backdoors: accounts, SSH keys, webshells, scheduled shells, services",
                  "Detection: cross-verification, live-USB mount, signatures, integrity baselines, memory forensics",
                  "Worked: fake [kworker] 4444 listener; inode discrepancy confirms userland rootkit",
                  "Report language: evidence-backed vs probabilistic phrasing and why it matters",
                  "Remediation: backdoor remove+rotate; rootkit presume-surviving, rebuild",
                  "Role boundary: recognition and evidence, not counter-warfare",
                ],
              },
              {
                q: "Why does memory forensics defeat both userland and kernel rootkits?",
                marks: 7,
                outline: [
                  "Rootkits hook the OS's own view of itself",
                  "A memory dump captures raw physical state, unfiltered",
                  "Analyst reads structures directly - process lists, injected code",
                  "No running OS kernel is involved to lie",
                  "Volatility profiles reconstruct the truth offline",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Wardialing, network services, DoS attacks and areas of concern",
            body: [
              "The syllabus's closing Unit IV cluster pairs legacy and modern. Wardialing is the historical mass-dialling hunt for modems that answer (ToneLoc/Teo-class tools dialing thousands of numbers, logging carriers) - its modern equivalents are the same idea over new transports: mass scanning of exposed RDP/VPN endpoints (the Shodan-driven hunt for 3389), VoIP/SIP endpoint scanning, and IoT device sweeps - the lesson is that 'find whatever answers on the wire' never went away, only the transport changed. Network services exploitation is the modern core: the service catalogue (SSH, SMB, RDP, databases, webservers, mail) worked with the enumeration-to-exploitation method of this unit - each service's version, configuration and credential state deciding the path.",
              "DoS attacks close the cluster: the mechanism classes are volumetric (flooding bandwidth - UDP amplification where 1 request byte yields 30-100 response bytes from open resolvers/memcached), protocol (SYN floods exhausting connection tables), and application (slowloris holding HTTP threads open with partial requests - low volume, high effect). The amplification math is the exam's number: memcached amplification peaked at ~51,000x (100 bytes in, 5 MB out), which is why 1 Gbps of attacker bandwidth produced multi-hundred-Gbps attacks (the 2018 memcached incidents). The tester's stance: DoS is usually RoE-excluded from production; when authorized it is staged (staging environment, drain stops, agreed abort), and the report's value is resilience findings - rate limits, SYN cookies, CDN/anti-DDoS posture - not outage demos.",
              "Areas of concern is the syllabus's own ethics-and-safety section header, and the exam expects it as a checklist: production stability (exploits that crash services are RoE violations regardless of findings), legal scope (every packet inside the signed ranges), data discipline (read-limits on proofs, no exfiltration of real data), third-party exposure (attacks must not bounce through uninvolved networks - the amplification-reflection rule), and disclosure timing (findings that create real-time risk - an open memcached fleet - are reported to the client immediately, not held for the report). The closing sentence: Unit IV's techniques are all legal only inside the authorization envelope - the areas-of-concern checklist is the envelope's walls.",
              "Exam framing: 'Explain wardialing, network service exploitation and DoS attacks, with areas of concern' is the 14-mark closer. Trace wardialing to its modern equivalents, work the service-exploitation method, give the DoS classes with the 51,000x amplification number, and close with the five-item checklist.",
            ],
            keyTerms: [
              { term: "Wardialing", definition: "Mass-dialling hunt for answering modems - archetype of wire-wide discovery." },
              { term: "Amplification attack", definition: "Small requests eliciting large responses from third parties; memcached peaked ~51,000x." },
              { term: "Slowloris", definition: "Application-layer DoS holding HTTP threads with partial requests." },
              { term: "SYN cookies", definition: "Stateless SYN-flood defence - connection state encoded into the sequence number." },
            ],
            diagram: {
              kind: "fork",
              title: "The DoS mechanism classes",
              caption: "Bandwidth, protocol, application - each starves a different resource.",
              start: "Denial-of-service class",
              branches: [
                { label: "Volumetric", outcome: "bandwidth flood via amplification (memcached 51,000x) - CDN/scrubbing defence", good: true },
                { label: "Protocol", outcome: "SYN floods exhaust tables - SYN cookies and conn-limit defence", good: true },
                { label: "Application", outcome: "slowloris holds threads - request timeouts and WAF limits defence", good: true },
                { label: "Untargeted production DoS", outcome: "RoE-excluded - staged resilience tests only", good: false },
              ],
            },
            bullets: [
              "Wardialing: ToneLoc-era modem hunting; modern equivalents - mass RDP/VPN endpoint scanning, SIP sweeps, IoT discovery.",
              "Service exploitation: the enumeration-to-exploitation method per service (SSH, SMB, RDP, DBs, web, mail).",
              "DoS classes: volumetric (amplification), protocol (SYN flood), application (slowloris) - each starves a different resource.",
              "Amplification math: memcached ~51,000x; 1 Gbps attacker produced hundreds of Gbps in 2018 incidents.",
              "Tester stance: DoS RoE-excluded from production; staged resilience on staging; report resilience posture.",
              "Areas of concern: production stability, legal scope, data discipline, third-party exposure, immediate disclosure of live-risk findings.",
            ],
            callout: {
              type: "warning",
              title: "Do not bounce through third parties",
              body: "Amplification and reflection make uninvolved networks part of your attack path - that is a legal boundary, not a tuning choice. The RoE fixes source addresses and forbids third-party bounces; the areas-of-concern checklist exists because enthusiastic tooling forgets.",
            },
            table: {
              caption: "DoS classes and their defences.",
              headers: ["Class", "Mechanism", "Signature case", "Defence"],
              rows: [
                ["Volumetric", "Bandwidth flood, often amplified", "memcached 51,000x (2018)", "CDN/scrubbing, anycast"],
                ["Protocol", "Connection-table exhaustion", "SYN flood", "SYN cookies, conn limits"],
                ["Application", "Thread/socket holding", "slowloris", "Timeouts, WAF limits, request caps"],
                ["Reflection", "Third-party response spoofing", "NTP monlist (historic)", "Egress filtering, BCP-38"],
              ],
            },
            examQuestions: [
              {
                q: "Explain wardialing, network service exploitation and DoS attacks: wardialing's modern equivalents, the service-exploitation method, the three DoS classes with amplification mathematics, and the areas-of-concern checklist.",
                marks: 14,
                outline: [
                  "Wardialing: modem-era mass discovery; modern: RDP/VPN endpoint sweeps, SIP, IoT",
                  "Service exploitation: enumeration -> package -> pre-flight -> execute per service",
                  "DoS classes: volumetric, protocol, application with mechanisms",
                  "Amplification: memcached ~51,000x; 1 Gbps -> hundreds of Gbps (2018)",
                  "Defences: scrubbing/CDN, SYN cookies, timeouts/WAF limits",
                  "Tester stance: RoE-excluded production DoS; staged resilience; posture findings",
                  "Checklist: stability, legal scope, data limits, third-party exposure, immediate disclosure",
                ],
              },
              {
                q: "Why does amplification make reflection attacks a legal hazard, not just a technical one?",
                marks: 7,
                outline: [
                  "Spoofed requests make third-party servers send the traffic",
                  "The victim sees thousands of unrelated source networks",
                  "Those third parties are uninvolved and harmed",
                  "Most jurisdictions treat this as unauthorized impairment",
                  "Hence RoE forbids spoofed/reflected techniques outright",
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
      title: "Beyond the Network: RE, Email, Incident Response and Ethics",
      summary:
        "Unit V covers reverse engineering, email hacking, incident handling and response, Bluetooth and mobile hacking, the ethical hacker's toolkit, and the legal, professional and ethical responsibilities that define the profession.",
      chapter: {
        number: "05",
        title: "The Wider Craft and Its Ethics",
        intro:
          "Unit V covers reverse engineering, email hacking, incident handling, Bluetooth and mobile hacking, the professional toolkit, and the legal, professional and ethical responsibilities of the ethical hacker.",
        inOneBreath:
          "Reverse engineering loops triage-map-verify into IOCs (the 300-second beacon); email hacking is the swaks-to-DMARC chain; incident response runs NIST's four phases with the 12/15/20 numbers. Bluetooth's trio attacks discoverability, OBEX and RFCOMM (9/4/1/0 on one floor); mobile's fleet audit finds network adb, unencrypted backups and exported components. The toolkit is organized by phase with usage disciplines; the ethics stack - legal, professional, ethical - ends in the refusal duty: defined by the envelope, not the tools.",
        sections: [
          {
            number: "5.1",
            title: "Reverse engineering",
            body: [
              "Reverse engineering is the analysis of software without its source: reconstructing behavior, structure and secrets from the compiled artifact - the skill behind malware analysis, vulnerability research, protocol analysis and license-cracking forensics. The two modes: static analysis (examine the artifact without running it - strings for readable constants, file/PE-header analysis for type and linkage, disassembly to assembly with objdump/IDA Pro/Ghidra, decompilation to pseudo-C with Ghidra/Hex-Rays) and dynamic analysis (run it under observation - debuggers like gdb/x64dbg set breakpoints and read registers, sysinternals/strace/ltrace trace system and library calls, network capture observes protocol behavior). The methodology is iterative: triage (type, packer, entropy), static map (functions, strings, imports), dynamic verification (run and watch), then loop - each cycle sharpens the model of the program.",
              "The worked static-to-dynamic chain shows the loop on a suspect binary: strings reveals 'POST /telemetry' and 'Base64:' hints; file says 'PE32 executable, packed' and entropy analysis flags high entropy (UPX-packed); upx -d unpacks; Ghidra's decompiler shows a config-decrypt routine with a hardcoded key constant; gdb confirms at runtime that the binary calls connect() to one hardcoded IP every 300 seconds - the behavioral signature (beacon, 5-minute interval, C2 address) is the incident-response deliverable. The report artifact: IOCs (indicators of compromise - the C2 IP, the user-agent, the 300-second beacon interval) that defenders can hunt for - reverse engineering converts a mystery binary into a hunt list.",
              "The legality frame is the syllabus's attention point: reverse engineering sits on a legal spectrum - analyzing malware you captured is standard practice, analyzing software you licensed is bounded by EULA terms (many prohibit disassembly even for interoperability, though jurisdictions carve interoperability exceptions), analyzing a competitor's product crosses into trade-secret territory. The exam's closing sentences: the ethical hacker reverse engineers artifacts the engagement or incident produced (captured malware, firmware images of in-scope devices), documents method and findings like any other evidence, and checks the license before touching anything commercial - the skill is neutral, the authorization decides its character.",
              "Exam framing: 'Explain reverse engineering - its modes, methodology and tools' is a 14-mark standard. Give static vs dynamic with tools per mode, walk the worked triage-to-IOC chain with the 300-second beacon, state the iterative loop, and close with the legality spectrum.",
            ],
            keyTerms: [
              { term: "Static analysis", definition: "Artifact examination without execution - strings, headers, disassembly, decompilation." },
              { term: "Dynamic analysis", definition: "Observed execution - debuggers, call traces, network capture." },
              { term: "IOC", definition: "Indicator of compromise - C2 addresses, beacons, user-agents derived from analysis." },
              { term: "Packing", definition: "Executable compression/obfuscation; high entropy flags it, upx -d reverses the simple cases." },
            ],
            diagram: {
              kind: "cycle",
              title: "The reverse-engineering loop",
              caption: "Triage, map, verify, sharpen - each rotation turns a binary into evidence.",
              steps: [
                { label: "Triage", note: "file, entropy, packer check" },
                { label: "Static map", note: "strings, imports, decompiled functions" },
                { label: "Dynamic verify", note: "gdb breakpoints, call traces" },
                { label: "Sharpen", note: "resolve key constants, C2 behavior" },
                { label: "Document IOCs", note: "IP, beacon interval, user-agent" },
              ],
            },
            bullets: [
              "Static tools: strings, file, objdump, IDA Pro, Ghidra (decompiles to pseudo-C); dynamic: gdb, x64dbg, strace/ltrace, Wireshark.",
              "Triage order: type, packer (entropy check), unpack (upx -d), then map functions and strings.",
              "Worked chain: telemetry strings -> UPX pack -> decompiled config decrypt with hardcoded key -> 300-second beacon to one C2.",
              "Deliverable: IOCs - C2 IP, interval, user-agent - the incident-response hunt list.",
              "Iterative loop: static hypothesis, dynamic verification, repeat.",
              "Legality spectrum: captured malware standard practice; licensed software bounded by EULA; competitor analysis off-limits.",
            ],
            callout: {
              type: "tip",
              title: "Entropy first, disassemble second",
              body: "The triage shortcut that saves hours: check entropy before disassembly. A packed binary disassembles into garbage - high entropy says 'unpack first' (upx -d or unpacking routines), and the real analysis starts on the unpacked image. Write the entropy check into every methodology answer.",
            },
            codeExample: {
              language: "bash",
              caption: "re.sh - the triage-to-beacon chain",
              code: `file suspect.exe               # PE32 executable, packed
python -c "import math,statistics,collections;
  d=open('suspect.exe','rb').read();
  print('entropy high' if statistics.pstdev([b for b in d[:1<<20]])>6 else 'low')"
strings suspect.exe | grep -i "POST\\|Base64\\|http"   # behaviour hints
upx -d suspect.exe             # unpack
ghidra suspect.exe             # decompile: config decrypt, hardcoded key
gdb ./suspect.exe              # break on connect() -> C2 IP, 300 s beacon`,
            },
            examQuestions: [
              {
                q: "Explain reverse engineering: static and dynamic modes with tools, the iterative methodology, a worked triage-to-IOC chain with beacon behavior, and the legality spectrum.",
                marks: 14,
                outline: [
                  "Static: strings, file/PE headers, objdump/IDA/Ghidra decompilation",
                  "Dynamic: gdb/x64dbg breakpoints, strace/ltrace, network capture",
                  "Methodology: triage -> static map -> dynamic verify -> sharpen, iterative",
                  "Triage: entropy flags packing; upx -d reverses simple packers",
                  "Worked chain: telemetry strings -> unpack -> hardcoded key -> 300 s beacon to C2",
                  "Deliverable: IOCs (IP, interval, user-agent) for incident hunting",
                  "Legality: captured malware standard; licensed bounded by EULA; competitor off-limits",
                ],
              },
              {
                q: "Why does high entropy suggest a packed binary, and what does that change in the workflow?",
                marks: 7,
                outline: [
                  "Compression randomizes byte distributions - entropy approaches 8 bits/byte",
                  "Normal compiled code shows lower entropy with structure",
                  "High entropy => disassembly will be meaningless",
                  "Workflow: unpack first (upx -d or unpacking stubs)",
                  "Then static analysis proceeds on the unpacked image",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Email hacking",
            body: [
              "Email hacking is the abuse of mail's trust model - identities forged in headers, infrastructure abused for relay and spoofing, and humans phished through the inbox they trust. The technique classes: spoofing (crafting From/Reply-To headers that display any identity - trivially easy because SMTP trusts senders unless SPF/DKIM/DMARC verify), open-relay abuse (misconfigured mail servers forward for anyone - the spam-era classic, still found on legacy boxes), phishing infrastructure (lookalike domains, credential-harvesting pages behind mail links, tracking pixels reading who opened), relay/recon abuse (EXPN/VRFY and header leaks enumerating users), and mailbox attacks (weak passwords, unpatched webmail CVEs, OAuth-app consent phishing - 'grant this app mailbox access'). The header forensics thread ties it together: every attack leaves header evidence (Received chain, Message-ID, X-Originating-IP) that the forensics unit of the sibling subject analyses.",
              "The worked spoof is the exam's demonstration: a Python smtplib script or swaks one-liner sends 'From: CFO <cfo@example.com>' to finance; the mail lands in the inbox unless DMARC rejects it - the test of the control is the test of the attack. The worked chain with numbers: spoof sent from a VPS (SPF record of example.com does not include the VPS - fail), DKIM absent (no signature), DMARC policy none (no enforcement) -> message lands; with DMARC p=reject the same message dies at the gateway. The mitigation table follows the three controls: SPF (which servers may send for the domain), DKIM (cryptographic per-message signature), DMARC (what to do when both fail - plus reporting visibility). The phishing side reuses Unit III's campaign numbers (62/18/3) - email hacking is the delivery layer for those campaigns.",
              "The analysis frame examiners reward: email's weakness is that its identity model predates verification - the From line was display text, not authentication, and the three controls retrofit authentication onto a 1980s protocol. The closing sentences: email hacking techniques are mostly one misconfiguration away from failure (DMARC rejects the spoof, closed relay blocks the abuse, MFA blunts the credential harvest), which makes the mail server's configuration review - relay status, SPF/DKIM/DMARC records, webmail patch level - one of the highest-value hours in any engagement.",
              "Exam framing: 'Explain email hacking techniques and their countermeasures' is a 7-14 mark staple. Give the technique classes with the spoof demonstration, work the swaks/DMARC chain with its control test, tabulate SPF/DKIM/DMARC, and close with the predates-verification analysis.",
            ],
            keyTerms: [
              { term: "Email spoofing", definition: "Forging display headers so mail appears from any identity." },
              { term: "SPF", definition: "Sender Policy Framework - DNS record listing servers authorized to send for the domain." },
              { term: "DKIM", definition: "DomainKeys Identified Mail - cryptographic per-message signature verified against DNS." },
              { term: "DMARC", definition: "Policy layer over SPF/DKIM - enforce (quarantine/reject) and report failures." },
            ],
            diagram: {
              kind: "flow",
              title: "The spoof and where DMARC kills it",
              caption: "SMTP trusts the sender until the three controls verify it - trace each check.",
              steps: [
                { label: "Craft headers", note: "swaks --from CFO@example.com" },
                { label: "Receiver: SPF check", note: "VPS not authorized -> fail" },
                { label: "DKIM check", note: "no signature -> fail" },
                { label: "DMARC policy", note: "none -> deliver (attack works)" },
                { label: "With p=reject", note: "same mail dies at gateway" },
              ],
            },
            bullets: [
              "Technique classes: header spoofing, open-relay abuse, phishing infrastructure (pixels, harvest pages), relay/user recon (VRFY/EXPN), OAuth consent phishing.",
              "Worked spoof: swaks one-liner from CFO identity; lands without DMARC, dies at p=reject.",
              "SPF = authorized senders; DKIM = per-message signature; DMARC = enforcement + visibility.",
              "Header forensics: Received chain and X-Originating-IP carry the evidence trail.",
              "The 62/18/3 campaign numbers of Unit III are delivered through this layer.",
              "Configuration review: relay status, three DNS records, webmail patch level - the highest-value mail hour.",
            ],
            callout: {
              type: "exam",
              title: "The control test is the attack test",
              body: "The elegant exam move: demonstrate the spoof, then demonstrate the same spoof dying under DMARC p=reject. One mail server, two outcomes - the attack and its countermeasure in a single worked chain, which is exactly what the 14-mark answer wants.",
            },
            codeExample: {
              language: "bash",
              caption: "spoof.sh - swaks and the DMARC verdict",
              code: `# spoof test: forged From:, no auth
swaks --to finance@example.com \\
      --from "CFO <cfo@example.com>" \\
      --header "Subject: Urgent wire change"

# receiver's verdict:
#  SPF: vps-ip NOT in example.com SPF -> fail
#  DKIM: absent -> fail
#  DMARC: p=none -> delivered (finding: no enforcement)
#  DMARC p=reject -> same mail quarantined (control proven)`,
            },
            examQuestions: [
              {
                q: "Explain email hacking: the technique classes, the worked spoof demonstration with the SPF/DKIM/DMARC verdict chain, the phishing-delivery connection, and the configuration-review closing.",
                marks: 14,
                outline: [
                  "Classes: spoofing, open relay, phishing infra, VRFY/EXPN recon, OAuth consent",
                  "Spoof mechanics: SMTP trusts headers absent verification",
                  "Worked chain: swaks forged CFO mail; SPF fail, DKIM absent, DMARC none -> delivered",
                  "Control test: same mail under p=reject dies at gateway",
                  "SPF/DKIM/DMARC table with roles",
                  "Phishing campaigns (62/18/3) ride this delivery layer",
                  "Mail-server config review as the highest-value hour",
                ],
              },
              {
                q: "Why does email spoofing remain trivially possible despite decades of the protocol?",
                marks: 7,
                outline: [
                  "SMTP's identity model predates authentication",
                  "From headers were display conventions, not proofs",
                  "Verification was retrofitted (SPF 1997+, DKIM 2004+, DMARC 2012+)",
                  "Deployment remains incomplete across domains",
                  "Where records and enforcement exist, spoofing dies at the gateway",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Incident handling and response",
            body: [
              "Incident handling is the defender's mirror of everything this subject attacks, and the syllabus includes it because the ethical hacker must speak response fluently - the report's detection findings and the debrief (Units II and III) only land if phrased in the response lifecycle. The standard is NIST SP 800-61's four phases: preparation (plans, tooling, training, contact trees), detection and analysis (identifying the incident from alerts and reports, scoping it, classifying severity), containment, eradication and recovery (stop the spread, remove the cause, restore safely - with evidence preserved along the way), and post-incident activity (lessons learned, metric updates, control changes). The lifecycle's discipline: evidence before cleanup (memory captures, disk images, log preservation precede any removal), and containment choices trade speed against evidence (pull the cable vs let it run and watch).",
              "The worked incident walks the phases with the engagement's own numbers: an email-attachment ransomware case - detection (SOC alert: 40 files encrypted in 12 minutes on one workstation; user report at minute 15), analysis (scope: one host, one user, no lateral spread - EDR telemetry; classification: serious but contained), containment (host isolated at minute 20 - network quarantine, not shutdown, preserving memory), eradication and recovery (malware removed from image backup; credentials rotated; the phished user's sessions revoked), post-incident (the phishing control gap maps to this subject's findings - DMARC absent, FIDO2 absent; time-to-report was 15 minutes - the awareness metric worked). The lifecycle's numbers: 12 minutes of damage, 15-minute detection, 20-minute containment - the three numbers the exec summary quotes.",
              "The hacker-response bridge is the exam's analysis mark: the ethical hacker's artifacts feed each phase - the IOC list from reverse engineering (5.1) feeds detection, the attack-path map feeds containment scoping, the report's mitigation table feeds post-incident change; and the debrief (purple-team conversation) converts the engagement into detection engineering. The closing sentence: incident response is where the ethical hack proves its value twice - once in findings, once in the readiness the findings measured.",
              "Exam framing: 'Explain incident handling and response' is a 7-14 mark staple. Give the NIST four phases with their disciplines, walk the ransomware case with its 12/15/20 numbers, bridge the hacker's artifacts to each phase, and close with the double-value sentence.",
            ],
            keyTerms: [
              { term: "NIST SP 800-61 lifecycle", definition: "Preparation -> detection/analysis -> containment/eradication/recovery -> post-incident." },
              { term: "Evidence before cleanup", definition: "Memory and disk preservation precede removal - the response's first law." },
              { term: "Time-to-detect / time-to-contain", definition: "The two response metrics every incident summary quotes." },
              { term: "IOC list", definition: "The indicators (IPs, hashes, beacons) derived from analysis that drive hunting." },
            ],
            diagram: {
              kind: "cycle",
              title: "The NIST incident-response lifecycle",
              caption: "Four phases; the loop closes with lessons feeding preparation.",
              steps: [
                { label: "Preparation", note: "plans, tooling, contacts, training" },
                { label: "Detection + analysis", note: "alert triage, scoping, classification" },
                { label: "Containment", note: "quarantine, preserve evidence" },
                { label: "Eradication + recovery", note: "remove cause, restore, rotate credentials" },
                { label: "Post-incident", note: "lessons, metrics, control change" },
              ],
            },
            bullets: [
              "NIST phases: preparation, detection/analysis, containment/eradication/recovery, post-incident activity.",
              "Discipline: evidence before cleanup; containment trades speed against evidence (quarantine vs shutdown).",
              "Worked case: ransomware on one host - 12 min damage, 15 min user report, 20 min containment, image-backup recovery.",
              "Post-incident maps to this subject: DMARC and FIDO2 gaps, time-to-report as the working metric.",
              "Hacker bridge: IOCs feed detection; attack paths feed scoping; mitigation tables feed change.",
              "Double value: findings once, measured readiness twice.",
            ],
            callout: {
              type: "exam",
              title: "Quote the three numbers",
              body: "Incident summaries live on three timestamps: damage window, detection time, containment time. The worked case's 12/15/20 minutes is the exam's model - and the analysis sentence (containment chose quarantine over shutdown to preserve memory) shows the evidence discipline examiners look for.",
            },
            table: {
              caption: "The worked ransomware incident by phase.",
              headers: ["Phase", "Action", "Artifact"],
              rows: [
                ["Detection", "SOC alert + user report (min 15)", "Alert ticket, timeline"],
                ["Analysis", "Scope: 1 host, 1 user, no spread", "EDR telemetry, classification"],
                ["Containment", "Network quarantine (min 20)", "Memory + disk preserved"],
                ["Eradication/recovery", "Clean rebuild, credential rotation", "Restore log, rotation record"],
                ["Post-incident", "Control gaps -> DMARC/FIDO2 plan", "Lessons memo, metrics"],
              ],
            },
            examQuestions: [
              {
                q: "Explain incident handling and response: the NIST lifecycle with its disciplines, a worked ransomware case with phase-by-phase numbers, and the bridge from ethical-hacking artifacts to each response phase.",
                marks: 14,
                outline: [
                  "Four phases: preparation, detection/analysis, containment/eradication/recovery, post-incident",
                  "Disciplines: evidence before cleanup; containment speed-vs-evidence trade",
                  "Worked case: 12 min damage, 15 min detection, 20 min containment; image-backup recovery",
                  "Post-incident: DMARC/FIDO2 gaps; time-to-report worked",
                  "IOC lists feed detection; path maps feed scoping; mitigation tables feed change",
                  "Purple-team debrief converts engagement into detection engineering",
                  "Double value: findings + measured readiness",
                ],
              },
              {
                q: "Why do responders quarantine rather than power off a compromised host?",
                marks: 7,
                outline: [
                  "Power loss destroys volatile memory evidence",
                  "Quarantine stops spread while keeping RAM alive",
                  "Memory captures reveal process, network and credential state",
                  "Disk imaging follows for non-volatile evidence",
                  "Shutdown is the last resort, not the default",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Bluetooth hacking",
            body: [
              "Bluetooth hacking exploits the pairing and service model of the 2.4 GHz personal-area network, and the syllabus's classic trio is still the exam's taxonomy: Bluejacking (sending unsolicited vCards/messages to discoverable devices - harmless nuisance, but the recon step: it proves range and discoverability), Bluesnarfing (extracting data - contacts, messages, sometimes files - from devices with vulnerable OBEX implementations that allow object push without pairing), and Bluebugging (taking command of the device - placing calls, reading messages - via RFCOMM channels exposed on vulnerable stacks). Each attacks a different layer: Bluejacking the discoverability, Bluesnarfing the OBEX push channel, Bluebugging the RFCOMM service channels; all three depend on the device being discoverable or on remembered pairings.",
              "The worked assessment on an office floor: a scan with standard Linux tooling (hciconfig/hcitool class, or modern btmgmt) finds 9 discoverable devices; 4 accept unsolicited vCards (Bluejacking works - discoverability finding); 1 older headset-and-phone combo exposes OBEX object push without pairing and yields the contacts list (Bluesnarfing - critical finding, the data class quantified: 214 contacts); 0 allow RFCOMM command channels (Bluebugging resisted - modern stacks patched). The mitigation column: disable discoverability when not pairing (the setting that kills all three classes at rest), patch stacks (the 2004-2007 CVE era is old but legacy devices persist), minimize exposed profiles (turn off OBEX push when unused), and pair-confirm prompts enabled (the user's last line). The office math: 9 discoverable on one floor is the finding - discoverability is a policy gap, not a technology failure.",
              "The modern frame the exam adds: classic Bluetooth attacks faded as stacks hardened, but the class persists in variants - BLE (Bluetooth Low Energy) GATT service exposure on wearables and IoT (unauthenticated characteristics readable by any phone app), Bluetooth relay/key-derivation research on newer pairing modes, and the coexistence lesson (2.4 GHz is shared with Wi-Fi - co-channel interference and channel-jamming research). The closing sentence: Bluetooth hacking today is mostly a discoverability-and-profile audit - the attack classes are known, the patches exist, and the finding is the device someone forgot to configure.",
              "Exam framing: 'Explain Bluetooth hacking - Bluejacking, Bluesnarfing, Bluebugging - and safeguards' is a 7-14 mark staple. Define the trio by layer attacked, work the 9/4/1/0 assessment with the 214-contact yield, tabulate the mitigations, and close with the modern BLE frame.",
            ],
            keyTerms: [
              { term: "Bluejacking", definition: "Unsolicited vCard/message sending to discoverable devices - harmless recon." },
              { term: "Bluesnarfing", definition: "Data theft over unauthenticated OBEX push channels on vulnerable stacks." },
              { term: "Bluebugging", definition: "Device control via exposed RFCOMM channels - calls, messages." },
              { term: "GATT exposure", definition: "Unauthenticated BLE characteristics readable by any nearby app - the modern class." },
            ],
            diagram: {
              kind: "compare",
              title: "The Bluetooth attack trio, by layer",
              caption: "Discoverability, data push, command channel - one mitigation (invisible by default) covers all three.",
              left: {
                heading: "Attacks",
                items: [
                  "Bluejacking - unsolicited vCards (recon)",
                  "Bluesnarfing - OBEX data theft",
                  "Bluebugging - RFCOMM device control",
                  "Modern: BLE GATT unauthenticated reads",
                ],
              },
              right: {
                heading: "Safeguards",
                items: [
                  "Disable discoverability when not pairing",
                  "Patch stacks (legacy devices persist)",
                  "Disable unused profiles (OBEX push off)",
                  "Pair-confirm prompts; BLE ACLs on characteristics",
                ],
              },
            },
            bullets: [
              "Trio by layer: Bluejacking discoverability, Bluesnarfing OBEX push, Bluebugging RFCOMM channels.",
              "Worked assessment: 9 discoverable devices, 4 accept vCards, 1 yields 214 contacts via OBEX, 0 RFCOMM control.",
              "The finding is the floor count: 9 discoverable = policy gap, not technology failure.",
              "Mitigations: invisible by default, patched stacks, profiles off when unused, pair-confirm prompts, BLE ACLs.",
              "Modern class: BLE GATT services on wearables/IoT readable without authentication.",
              "Closing: Bluetooth hacking today = discoverability-and-profile audit.",
            ],
            callout: {
              type: "exam",
              title: "One setting kills the trio",
              body: "The exam's favorite line: 'discoverability is the master switch - invisible devices accept no vCards, no push, no channels.' Structure the answer as attack -> the setting that ends it, and the mitigation table writes itself.",
            },
            table: {
              caption: "The Bluetooth assessment result and fixes.",
              headers: ["Class", "Worked result", "Fix"],
              rows: [
                ["Bluejacking", "4 of 9 accept vCards", "Discoverability off by default"],
                ["Bluesnarfing", "1 device: 214 contacts via OBEX", "Patch stack; disable object push"],
                ["Bluebugging", "0 vulnerable", "Keep stacks patched; pairing prompts on"],
                ["BLE GATT", "Wearables unauthed reads", "Characteristic ACLs; app-level auth"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Bluetooth attack trio with the layer each attacks, a worked office-floor assessment with counts and a data yield, the mitigation table, and the modern BLE frame.",
                marks: 14,
                outline: [
                  "Bluejacking: unsolicited vCards - discoverability recon",
                  "Bluesnarfing: OBEX push data theft on vulnerable stacks",
                  "Bluebugging: RFCOMM command control",
                  "Worked: 9 discoverable, 4 vCards, 1 -> 214 contacts, 0 RFCOMM",
                  "Finding: floor-level discoverability is the policy gap",
                  "Mitigations: invisible by default, patches, profile hygiene, pairing prompts",
                  "Modern: BLE GATT unauthenticated characteristics on wearables/IoT",
                ],
              },
              {
                q: "Why is Bluesnarfing more serious than Bluejacking even though both need discoverability?",
                marks: 7,
                outline: [
                  "Bluejacking sends data - nuisance and recon only",
                  "Bluesnarfing extracts data - privacy breach with quantifiable content",
                  "Legal weight: unauthorized data access vs unsolicited message",
                  "Report severity: Bluejacking low, Bluesnarfing critical (214 contacts)",
                  "Both share the same fix - the setting decides the class",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Mobile phone hacking",
            body: [
              "Mobile phone hacking attacks the pocket computer: the same surface the mobile-security section of the sibling subject maps, viewed from the hacker's side. The classes: physical access attacks (unlock bypass on forgotten devices, backup extraction - adb backup or iTunes backups holding app data, forensics-class extraction tools), network-position attacks (rogue base stations and IMSI catchers - surveillance class, RoE-gated everywhere; malicious Wi-Fi with captive portals harvesting credentials), app-layer attacks (the exported-component and deep-link classes, permission abuse, OAuth consent phishing on mobile flows), management-plane attacks (MDM enrollment abuse, lost-mode manipulation), and the Bluetooth flank of 5.4 as the phone's PAN. The mobile OS split holds: Android's openness (adb, decompilable apps) makes it the assessment workhorse; iOS's sandbox tightens everything but jailbreaks and backup analysis persist.",
              "The worked assessment on a fleet: 20 test devices - 4 still expose adb debugging over Wi-Fi (network adb = shell access from any LAN peer; critical), 6 had completed unencrypted iTunes/adb backups holding app data (messages, tokens - the backup-extraction class), the mobile app under test exposes 1 exported activity launching an authenticated screen (IPC finding), and 2 devices accept a rogue-Wi-Fi captive portal that mirrors the corporate login (credential harvest - 3 of 10 users submitted). The numbers to quote: 4/20 network-debugging exposure, 6/20 unencrypted backups, 1 exported component, 3/10 portal submissions. Mitigations follow: network adb off (USB only), encrypted backups, component export audits, certificate-pinned apps rejecting portal clones, and MDM baselines enforcing both.",
              "The consent and legality layer is heavier here than anywhere else in the syllabus: phones hold personal data (messages, photos, health data), so the RoE must name devices (test fleet, not staff phones), data classes (app-data only; no personal content browsing), extraction limits (backups analyzed for the app under test only), and the IMSI-catcher class is excluded from commercial work entirely (surveillance-law territory). The closing sentence: mobile hacking's professional form is fleet-configuration auditing plus app-surface testing - the personal-data boundary is what separates assessment from surveillance.",
              "Exam framing: 'Explain mobile phone hacking techniques and safeguards' is a 7-14 mark standard. Give the five classes with the platform split, work the 20-device fleet numbers, tabulate mitigations, and close with the consent layer.",
            ],
            keyTerms: [
              { term: "Network adb", definition: "Android debugging over Wi-Fi - shell access from any LAN peer; the fleet's critical misconfiguration." },
              { term: "Backup extraction", definition: "App-data recovery from unencrypted adb/iTunes backups." },
              { term: "Exported component", definition: "Android component callable by any app - the IPC surface." },
              { term: "MDM baseline", definition: "Mobile device management enforcing configuration: debugging off, encryption on, profiles locked." },
            ],
            diagram: {
              kind: "layers",
              title: "The phone's attack surface",
              caption: "Five layers from physical to management; each has one fleet control.",
              layers: [
                { label: "Physical", note: "unlock bypass, backup extraction - encryption + MDM" },
                { label: "Network position", note: "rogue Wi-Fi/portals, IMSI class - cert pinning + awareness" },
                { label: "App layer", note: "exported components, deep links, permission abuse" },
                { label: "Bluetooth PAN", note: "discoverability/profile audit (5.4)" },
                { label: "Management plane", note: "MDM enrollment abuse - enrollment certs" },
              ],
            },
            bullets: [
              "Classes: physical access, network position (rogue Wi-Fi, IMSI - surveillance-gated), app layer, management plane, Bluetooth PAN.",
              "Platform split: Android open (adb, decompilation) as workhorse; iOS sandboxed with jailbreak/backup exceptions.",
              "Worked fleet: 4/20 network adb, 6/20 unencrypted backups, 1 exported activity, 3/10 portal submissions.",
              "Mitigations: USB-only debugging, encrypted backups, export audits, cert-pinned apps, MDM baselines.",
              "Consent layer: named test devices, app-data-only analysis, no personal content, IMSI class excluded.",
              "Closing: fleet-config auditing + app testing - the personal-data boundary separates assessment from surveillance.",
            ],
            callout: {
              type: "warning",
              title: "Test the fleet, never the person",
              body: "The consent sentence examiners want: 'the RoE names test devices and app-data classes only - staff phones and personal content are out of bounds, and the IMSI-catcher class is surveillance law, not assessment.' Mobile testing lives or dies on this boundary.",
            },
            table: {
              caption: "The 20-device fleet assessment.",
              headers: ["Finding", "Count", "Fix"],
              rows: [
                ["adb over Wi-Fi enabled", "4/20", "USB-only debugging via MDM"],
                ["Unencrypted backups", "6/20", "Encrypted-backup policy + storage checks"],
                ["Exported activity in app", "1", "exported=false + permission checks"],
                ["Portal clone submissions", "3/10 users", "Certificate pinning + awareness"],
              ],
            },
            examQuestions: [
              {
                q: "Explain mobile phone hacking: the five technique classes with the platform split, a worked 20-device fleet assessment with counts, the mitigation table, and the consent layer that bounds professional work.",
                marks: 14,
                outline: [
                  "Classes: physical, network position, app layer, management, Bluetooth PAN",
                  "Split: Android open vs iOS sandbox; jailbreak/backup exceptions",
                  "Worked fleet: 4/20 network adb, 6/20 unencrypted backups, 1 exported activity, 3/10 portals",
                  "Mitigations: USB-only adb, encrypted backups, export audits, pinning, MDM",
                  "Consent: named devices, app-data only, no personal content, IMSI excluded",
                  "Analysis: assessment vs surveillance boundary",
                  "Closing: fleet-config auditing plus app-surface testing",
                ],
              },
              {
                q: "Why is adb over Wi-Fi a critical fleet finding rather than a medium one?",
                marks: 7,
                outline: [
                  "It grants shell access to any LAN peer, no user interaction",
                  "Shell reaches app data, tokens and device state",
                  "One misconfigured device compromises the trust of the segment",
                  "Default should be USB-only, enforced by MDM",
                  "Remote-access-class severity: silent, credential-bearing, no phishing needed",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Basic ethical hacking tools and professional usage",
            body: [
              "The toolkit section is the syllabus's inventory moment: the tools the whole subject used, organized by phase so the exam answer reads as a pipeline, not a list. Reconnaissance: theHarvester, Maltego, Recon-ng/Amass, Shodan, crt.sh, theHarvester-class breach queries; scanning and enumeration: Nmap (with NSE), enum4linux, snmpwalk, showmount; exploitation: Metasploit, sqlmap, searchsploit (the offline exploit-DB mirror); cracking: John, hashcat, Hydra (online brute-force against services with lockout-aware pacing); wireless: aircrack-ng suite, hcxdumptool, Wifite; web: Burp Suite, ZAP, ffuf/gobuster, nuclei; post-exploitation: Meterpreter, chisel (tunnels), mimikatz-class credential tools (RoE-gated); and the reporting bench: evidence capture scripts, the planner, CVSS calculators.",
              "Professional usage is the syllabus's real topic - the difference between owning tools and running engagements. The usage disciplines: version pinning (the report's reproducibility depends on pinned tool versions), output discipline (every tool's raw output archived - the evidence pack's raw layer), pacing and noise control (scan rates and lockout-aware brute-force pacing), lab-first testing (every exploit rehearsed before client systems), and the licensing/consent frame (commercial tools' licences, consent-gated techniques - the phishing and physical tracks each carry their own RoE paragraphs). The worked usage note: the same Nmap binary serves recon and reporting - '-oA evidence/nmap-full' writes greppable output into the evidence tree; tool usage and evidence discipline are one habit, not two.",
              "The tool-selection judgment is the analysis mark: tools are chosen by phase fit and stability, not brand - Nmap beats an automated all-in-one when the report needs per-port evidence; manual Burp work beats scanner output when the finding is a logic flaw; a slower lab-rehearsed exploit beats a fast untested one on client systems. The closing sentence: the toolkit is the trade's vocabulary, professional usage is its grammar - the exam rewards candidates who can name the tool per phase and the discipline per tool.",
              "Exam framing: 'List and explain the basic ethical hacking tools and their professional usage' is the 14-mark inventory. Organize by phase with one exemplar tool each, state the five usage disciplines, work the evidence-output habit with the -oA example, and close with the tool-selection judgment.",
            ],
            keyTerms: [
              { term: "searchsploit", definition: "Offline exploit-DB mirror - the exploit shortlist lookup without internet." },
              { term: "Version pinning", definition: "Fixed tool versions recorded for report reproducibility." },
              { term: "Output discipline", definition: "Archiving every tool's raw output into the evidence tree." },
              { term: "Lockout-aware pacing", definition: "Online brute-force rates derived from the discovered password policy." },
            ],
            diagram: {
              kind: "pipeline",
              title: "The toolkit as a phase pipeline",
              caption: "One exemplar per stage; the evidence tree runs beneath every stage.",
              stages: [
                { label: "Recon", note: "theHarvester, Maltego, Amass, Shodan" },
                { label: "Scan + enumerate", note: "Nmap + NSE, enum4linux, snmpwalk" },
                { label: "Exploit", note: "Metasploit, sqlmap, searchsploit" },
                { label: "Crack", note: "John, hashcat, Hydra (paced)" },
                { label: "Wireless / web", note: "aircrack-ng suite; Burp, ffuf, nuclei" },
                { label: "Post + report", note: "Meterpreter, chisel; evidence tree, CVSS calc" },
              ],
            },
            bullets: [
              "Phase-organized toolkit: recon (theHarvester/Maltego/Amass), scan (Nmap/enum4linux), exploit (Metasploit/sqlmap/searchsploit), crack (John/hashcat/Hydra), wireless (aircrack-ng), web (Burp/ffuf/nuclei), post (Meterpreter/chisel).",
              "Usage disciplines: version pinning, raw-output archiving, noise pacing, lab-first testing, licensing/consent gates.",
              "Worked habit: nmap -oA evidence/nmap-full writes greppable output into the evidence tree - one habit for tool and evidence.",
              "Selection judgment: phase fit and stability over brand - manual Burp for logic flaws, lab-rehearsed exploits on client systems.",
              "Every technique track carries its own consent paragraph (phishing, physical, wireless).",
              "Closing: tools are vocabulary, usage is grammar - name tool per phase, discipline per tool.",
            ],
            callout: {
              type: "tip",
              title: "Write every tool's output into the evidence tree",
              body: "The single habit that upgrades tool usage to professional grade: every command writes to evidence/ (nmap -oA, tee -a, script). The report's methodology cites that tree; disputes resolve by re-reading raw output; and nothing is reconstructed from memory.",
            },
            table: {
              caption: "Tool inventory by phase.",
              headers: ["Phase", "Exemplar tools", "Usage discipline"],
              rows: [
                ["Reconnaissance", "theHarvester, Maltego, Amass, Shodan", "Passive-first ordering"],
                ["Scanning/enumeration", "Nmap + NSE, enum4linux, snmpwalk", "Throttle rates; log scope"],
                ["Exploitation", "Metasploit, sqlmap, searchsploit", "Lab rehearsal before firing"],
                ["Cracking", "John, hashcat, Hydra", "Lockout-aware pacing"],
                ["Wireless", "aircrack-ng suite, hcxdumptool", "BSSID allow-lists"],
                ["Web", "Burp Suite, ZAP, ffuf, nuclei", "Manual pass over scanner output"],
                ["Post-exploitation", "Meterpreter, chisel, credential tools", "RoE-gated; evidence-first"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the ethical hacker's toolkit organized by phase, the professional usage disciplines, the evidence-output habit, and the tool-selection judgment.",
                marks: 14,
                outline: [
                  "Phase pipeline: recon, scan/enum, exploit, crack, wireless, web, post",
                  "Exemplar tools per phase named",
                  "Disciplines: pinning, output archiving, pacing, lab-first, licensing/consent",
                  "Worked habit: nmap -oA evidence/ - greppable raw output",
                  "Judgment: phase fit + stability over brand; manual Burp for logic flaws",
                  "Consent paragraphs per technique track",
                  "Closing: tools vocabulary, usage grammar",
                ],
              },
              {
                q: "Why does version pinning matter for the report more than for the attack?",
                marks: 7,
                outline: [
                  "Findings must be reproducible months later",
                  "Tool behavior changes between versions (scan signatures, module behavior)",
                  "Pinned versions let a third party re-run the evidence",
                  "Disputes resolve against recorded outputs",
                  "Reproducibility is the report's scientific claim",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Legal, professional and ethical issues: the ethical hacker's responsibilities",
            body: [
              "The subject's closing section is its foundation restated: the legal, professional and ethical frame that makes the preceding units lawful. The legal layer: authorization documents (contract, scope, RoE, get-out-of-jail letter - Unit II's machinery), the statutes (IT Act 2000/2008 Sections 43, 66, 66C, 72; CFAA; Computer Misuse Act), data-protection duties (client data handled under NDA, personal data minimized and redacted), and jurisdiction awareness (cross-border targets, provider terms). The professional layer: competence boundaries (no engagements beyond demonstrated skill - the refusal duty), confidentiality (findings never leak, even anonymized, without consent), conflict management (testing a competitor of a current client disclosed or declined), insurance and liability terms, and the certification bodies' codes (CEH's code of ethics, CREST's professional standards) as the profession's written floor.",
              "The ethical layer is the syllabus's deepest point: integrity in reporting (severities honest, not inflated to sell remediation), proportionality (techniques matched to objectives - no collateral damage for demonstration value), respect for the workforce (social-engineering consent layers, no humiliation), and the stewardship of knowledge (responsible disclosure of independently found flaws, no public detonation of exploit details against unpatched estates). The worked dilemma set sharpens it: the client asks for a finding to be 'made worse' for budget reasons - refuse (integrity); the engagement discovers a critical flaw in an out-of-scope partner system - stop, document, and follow the disclosure protocol (proportionality and law); the tester privately finds a 0-day in a product during unrelated work - coordinated disclosure with the vendor (stewardship).",
              "The responsibilities checklist is the exam's closing artifact: written authorization before any activity; scope boundaries respected absolutely; findings reported honestly and privately; techniques documented for reproducibility; artifacts cleaned and verified; knowledge used for defence; and the refusal duty exercised when competence, law or ethics do not align. The closing sentence: every technique in this subject is a crime without these responsibilities - the ethical hacker is defined not by tools but by the envelope they work inside.",
              "Exam framing: 'Discuss the legal, professional and ethical issues and responsibilities of the ethical hacker' is the subject's 14-mark closer. Give the three layers (legal, professional, ethical) with their concrete items, work the three-dilemma set with resolutions, present the responsibilities checklist, and close with the envelope sentence.",
            ],
            keyTerms: [
              { term: "Refusal duty", definition: "Declining engagements beyond competence, law or ethics - the profession's self-limit." },
              { term: "Integrity in reporting", definition: "Honest severities and complete findings - never inflated for remediation sales." },
              { term: "Responsible disclosure", definition: "Privately reporting independently found flaws to vendors before public release." },
              { term: "Proportionality", definition: "Techniques matched to objectives; no collateral damage for demonstration." },
            ],
            diagram: {
              kind: "pyramid",
              title: "The responsibility stack",
              caption: "Law at the base, ethics at the peak - each layer depends on the one beneath.",
              tiers: [
                { label: "Ethics", note: "integrity, proportionality, stewardship" },
                { label: "Professional standards", note: "competence, confidentiality, conflicts, codes" },
                { label: "Legal frame", note: "authorization, statutes, data protection, jurisdiction" },
                { label: "Technical work", note: "everything Units I-IV taught - lawful only inside this stack" },
              ],
            },
            bullets: [
              "Legal: authorization documents, IT Act 43/66/66C/72 + CFAA/CMA, data-protection duties, jurisdiction.",
              "Professional: competence boundaries and refusal duty, confidentiality, conflict management, insurance, certification codes.",
              "Ethical: honest severities, proportionality, workforce respect, responsible disclosure stewardship.",
              "Worked dilemmas: refuse inflating findings; stop-and-disclose the out-of-scope critical; coordinated disclosure for the 0-day.",
              "Checklist: authorization first, scope absolute, honest private reporting, documented techniques, verified cleanup, defence-oriented knowledge.",
              "Closing: defined by the envelope, not the tools - every technique is a crime without the stack.",
            ],
            callout: {
              type: "exam",
              title: "The refusal duty is the differentiator",
              body: "When the question asks what makes an ethical hacker ethical, the marked answer is not a definition - it is the refusal duty: declining the out-of-competence engagement, the unethical scope, the dishonest report. Name the three refusals explicitly and the ethics layer becomes concrete.",
            },
            table: {
              caption: "The three dilemma resolutions.",
              headers: ["Dilemma", "Pressure", "Resolution"],
              rows: [
                ["Inflate a finding for budget", "Client revenue", "Refuse - integrity in reporting"],
                ["Critical flaw in out-of-scope partner", "Curiosity / completeness", "Stop, document, disclosure protocol"],
                ["0-day found in unrelated product", "Publicity", "Coordinated disclosure to vendor"],
                ["Engagement beyond competence", "Revenue", "Decline and refer - refusal duty"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the legal, professional and ethical issues and responsibilities of the ethical hacker: the three layers with concrete items, the worked dilemma set with resolutions, the responsibilities checklist, and the closing envelope sentence.",
                marks: 14,
                outline: [
                  "Legal: authorization, IT Act/CFAA/CMA, data protection, jurisdiction",
                  "Professional: competence/refusal, confidentiality, conflicts, codes, insurance",
                  "Ethical: integrity, proportionality, workforce respect, disclosure stewardship",
                  "Dilemmas: refuse inflation; stop-and-disclose partner flaw; coordinate the 0-day",
                  "Checklist: authorization, scope, honest private reporting, documentation, cleanup, defence orientation",
                  "Refusal duty as the profession's self-limit",
                  "Closing: defined by the envelope - every technique is a crime without it",
                ],
              },
              {
                q: "Why must severity ratings be honest even when the client pressures for more findings?",
                marks: 7,
                outline: [
                  "The report is a trust artifact - the profession's currency",
                  "Inflated severity corrupts remediation priorities",
                  "Clients discover inflation and terminate relationships",
                  "Certification codes explicitly require honesty",
                  "Honest lows and highs alike make the sprint list actionable",
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
        "CY-703(A) papers distribute across all five units, but the heavy blocks are Unit I's footprinting-and-scanning cluster and Unit IV's enumeration-and-exploitation core; Unit II's business perspective feeds the short definitions and one long question; Unit III's social-engineering and defenders'-machinery pair supplies both; Unit V closes with the toolkit, incident response and the ethics question the paper nearly always asks. The worked numbers to have automatic: the 62/18/3 campaign, the 28-user enumeration pass, the 9+3+1 cracking session, and the 9/4/1/0 Bluetooth floor.",
      ],
      weightedTopics: [
        { topic: "Hacker classes, phases of an ethical hack, ethics and law", weight: "10-12 marks", note: "Definitions plus the mirror sentence; the ethics closer is near-guaranteed." },
        { topic: "Footprinting, scanning, OS fingerprinting, dorking", weight: "12-14 marks", note: "One 14-mark pipeline question; Nmap grammar and TTL inference chain verbatim." },
        { topic: "Enumeration and exploitation (SMB/SNMP, soft objective, pre-flight)", weight: "12-14 marks", note: "The 28-user pass and the proceed-or-hold gate are the marked patterns." },
        { topic: "Password cracking, rootkits, DoS, evasion", weight: "10-12 marks", note: "hashcat modes + cracking economics; the hiding-stack detection table." },
        { topic: "Social engineering, physical security, honeypots/IDS/IPS", weight: "8-10 marks", note: "Channel taxonomy with levers; signature-vs-anomaly with the 400-packet reading." },
        { topic: "Business perspective: objectives, limitations, planner, logistics", weight: "6-8 marks", note: "Objective families + inherent-vs-imposed distinction; planner sections." },
        { topic: "Reverse engineering, email hacking, incident response", weight: "8-10 marks", note: "Static/dynamic loop with IOCs; swaks-DMARC chain; NIST four phases." },
        { topic: "Bluetooth and mobile hacking, toolkit", weight: "6-8 marks", note: "The trio by layer and the 20-device fleet numbers; phase-organized toolkit." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Two hours a day, five days a week: this schedule covers every unit twice - understanding with the worked chains first, timed revision second - and reserves the final week for full papers and the four anchor diagrams drawn from memory.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - classes and footprinting", tasks: ["Hacker taxonomy + phases with the mirror sentence", "Port table as service-behavior pairs", "Dossier walk: WHOIS -> crt.sh -> LinkedIn -> Shodan", "Nmap discovery/scan/fingerprint commands on a lab box"] },
        { week: "Week 2", focus: "Unit I tail + Unit II", tasks: ["Windows/Linux family split with the worked pair", "Objective families and the 27/21/6 review", "Inherent vs imposed limitations + coverage statement", "Planner sections and the four-decision chain"] },
        { week: "Week 3", focus: "Unit III - preparation and recon", tasks: ["Social-engineering channels + 62/18/3 campaign", "Physical: 90-second chain and control pairs", "Internet-recon pipeline with 61/84/9/7 yields", "Stego/crypto contrast; wireless pipeline; honeypot/IDS reading"] },
        { week: "Week 4", focus: "Unit IV - enumeration and exploitation", tasks: ["Enumeration elements table + 28-user worked pass", "Soft objective gate: proceed vs hold cases", "Pre-flight package: Samba worked end to end", "Intuitive testing hypotheses + evasion pair"] },
        { week: "Week 5", focus: "Unit IV tail + Unit V", tasks: ["hashcat modes + 9+3+1 session economics", "Rootkit hiding stack + detection table", "Wardialing/DoS classes + 51,000x amplification", "RE loop, swaks-DMARC chain, NIST IR phases"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Bluetooth trio + 20-device fleet numbers", "Toolkit by phase + usage disciplines", "Ethics three-layer stack + refusal duty", "Two full mock papers; redraw anchor diagrams daily"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Do not learn anything new; cycle the four worked chains - 62/18/3 campaign, 28-user enumeration pass, 9+3+1 cracking, 9/4/1/0 Bluetooth floor.",
        "Redraw the anchor diagrams from memory: the phases wheel, the authorization pyramid, the hiding stack, the NIST IR cycle.",
        "Recite the tool-per-phase pipeline once per hour with one discipline per tool.",
        "Re-read the ethics three-layer stack and the three dilemmas - the closing question is near-certain.",
        "Rehearse the scanning-vs-enumeration and signature-vs-anomaly contrasts - two guaranteed comparison marks.",
        "Skim every 'in one breath' paragraph; they compress each unit into the recall net.",
        "Sleep seven hours; the chain questions reward a fresh brain more than a fifth pass.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      examTips: [
        "Open with the one-line definition, then the diagram, then the worked numbers - examiners mark structure top-down.",
        "For tool questions, give commands verbatim (enum4linux -a, snmpwalk -c public, swaks --from ...) - tool literacy is marked separately.",
        "Attach a number to every claim: 62/18/3, 28 users, 41 minutes, 51,000x - 'quickly' scores nothing.",
        "In comparison questions (scanning vs enumeration, IDS vs IPS, bluejacking vs bluesnarfing), use a table - rows earn faster than prose.",
        "For ethics and law answers, use the three-layer stack and end with the refusal duty - the closing judgment line is the 14th mark.",
        "Quote the filter's own rejection text when explaining intuitive testing - 'the filter's error is its documentation'.",
        "Time-box: 7 marks = 12 minutes, 14 marks = 25 minutes including the diagram; leave 5 minutes to add numbers to thin answers.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Listing hacker classes without the mirror sentence - authorization and intent are the marked difference.",
        "Confusing scanning with enumeration - 'what exists' versus 'what it says' is a guaranteed 2-mark line.",
        "Saying TCP connect scans are stealthy - they complete the handshake and log; SYN scans do not.",
        "Forgetting the consent layer in social-engineering answers - named population, credential limits, coaching response.",
        "Calling hashes 'encryption' or claiming WEP 'just has a weak key' - FMS/PTW statistical attacks is the marked phrase.",
        "Mixing up Bluejacking (send), Bluesnarfing (read) and Bluebugging (control) - layer attacked decides the class.",
        "Presenting scanner findings as evidence - manual verification and reproduction steps are required.",
        "Inventing RGPV year citations - describe technique and worked example instead; fabricated citations cost credibility marks.",
      ],
    },
  ],
};
