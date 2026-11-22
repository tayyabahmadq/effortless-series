import type { AcademicSubject } from "./types";

export const it801: AcademicSubject = {
  id: "it-801",
  code: "IT-801",
  title: "Information Security",
  semester: "VIII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: the principles and X.800 architecture that define security, the classical and modern ciphers that enforce it, the public-key and hash machinery that authenticates it, the deployed protocols Kerberos, PGP, IPsec and SSL that carry it, and the system defences — intrusion detection, malware control and firewalls — that operate it.",
  description:
    "Five units walk from the fundamental principles — confidentiality, integrity, availability and non-repudiation — and the OSI/X.800 security architecture, through the classical substitution, transposition and steganography toolbox, into the block-cipher engine room where DES, AES, their cryptanalysis and the five modes of operation live; then to the public-key half of the syllabus (RSA, Diffie-Hellman, elliptic curves, hashes, MACs, HMAC and digital signatures), onward to the protocols that deploy it all — Kerberos, X.509/PKI, PGP, IPsec's AH and ESP, SSL/TLS and SET — and finally to system security: intruders and password management, viruses and DDoS floods, and the firewalls, trusted systems and Common Criteria that close the loop. Every section pairs a definition with a worked cipher walkthrough or attack chain, a diagram of the mechanism, and the exam angle it earns — because the papers ask for Caesar encryptions, RSA mod-arithmetic, Diffie-Hellman key computations and firewall diagrams, not just definitions.",
  accentColor: "#f97316",
  emoji: "IS",
  unitCount: 5,
  totalSections: 38,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction",
      summary:
        "Unit I defines what is being protected and how attacks look: the fundamental principles — confidentiality, integrity, availability and non-repudiation — the OSI/X.800 security architecture with its attacks, services and mechanisms, the model for network security, and the classical encryption toolbox of the symmetric cipher model, substitution techniques, transposition techniques and steganography.",
      chapter: {
        number: "01",
        title: "Principles, Attacks and Classical Ciphers",
        intro:
          "Unit I covers the fundamental principles of information security, the OSI security architecture (X.800), the taxonomy of security attacks, the services and mechanisms that answer them, the model for network security, and the four classical techniques — the symmetric cipher model, substitution, transposition and steganography — that predate computers but still shape every modern cipher.",
        inOneBreath:
          "Security protects confidentiality, integrity, availability and non-repudiation; X.800 views any system as attacks, services and mechanisms. Attacks split into passive (eavesdrop) and active (modify, replay, deny). Classical ciphers: substitution replaces letters (Caesar, Playfair), transposition reorders them (rail fence), steganography hides their existence — and every symmetric cipher is plaintext + key + algorithm, with only 1 key needed for two people but n(n-1)/2 for a network.",
        sections: [
          {
            number: "1.1",
            title: "Fundamental principles of information security",
            body: [
              "Information security rests on four fundamental principles. Confidentiality keeps information from unauthorized eyes — its breach is interception, eavesdropping or snooping. Integrity keeps information unaltered except by authorized parties — its breach is fabrication or modification, including changing stored data or a transaction amount in flight. Availability keeps information and services reachable when legitimate users need them — its breach is denial of service, from a DDoS flood to a failed hard disk. Non-repudiation guarantees a sender cannot later deny having sent a message (and a receiver cannot deny having received it), which is the principle digital signatures exist to satisfy. Every security mechanism in this course can be traced back to defending one of these four.",
              "RGPV's preferred phrasing, 'critical characteristics of information', extends the list with four operational attributes from Godbole's text: accuracy (free from errors, faithful to reality), authenticity (genuinely from its claimed source), utility (usable for its purpose — an encrypted file without the key has confidentiality but no utility) and possession (ownership or control of the information, the attribute lost when a laptop is stolen even if the data on it was encrypted). The May 2023 paper asked exactly this list; the May 2024 paper asked for fabrication, interception, non-repudiation and integrity in one breath — so both formulations deserve memory.",
              "A worked mapping makes the principles concrete. A bank transaction: confidentiality is TLS encrypting it so a sniffer reads nothing; integrity is a MAC catching an attacker who changes 'Rs. 500' to 'Rs. 9500'; availability is redundancy that keeps the payment gateway alive during a flood; non-repudiation is the customer's digital signature that no court argument can shake. The exam angle: for any scenario named in the paper, name the principle violated, the attack that violated it, and the mechanism that would have prevented it — that three-step chain is the full 7-mark answer.",
            ],
            keyTerms: [
              { term: "Confidentiality", definition: "Preventing unauthorized disclosure of information — violated by interception or eavesdropping." },
              { term: "Integrity", definition: "Preventing unauthorized modification of information — violated by fabrication or alteration." },
              { term: "Availability", definition: "Keeping information and services usable on demand — violated by denial-of-service attacks and failures." },
              { term: "Non-repudiation", definition: "Proof of origin and delivery so neither sender nor receiver can later deny the exchange." },
              { term: "Possession", definition: "Control of the information itself — lost by theft even when the stolen data is unreadable." },
            ],
            bullets: [
              "Four principles: confidentiality, integrity, availability, non-repudiation.",
              "Extended characteristics list: accuracy, authenticity, utility, possession.",
              "Fabrication and modification breach integrity; interception breaches confidentiality.",
              "DoS breaches availability; a signed receipt provides non-repudiation.",
              "Answer pattern: principle violated -> attack used -> mechanism that prevents it.",
              "May 2023 asked the critical-characteristics list; May 2024 asked fabrication/interception/non-repudiation/integrity directly.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The four principles as a foundation",
              caption: "Availability, integrity and confidentiality form the CIA triad; non-repudiation sits on top of signatures and integrity.",
              tiers: [
                { label: "Non-repudiation", note: "digital signatures prove origin — no denial possible" },
                { label: "Confidentiality", note: "encryption keeps secrets from unauthorized eyes" },
                { label: "Integrity", note: "MACs and hashes catch any unauthorized change" },
                { label: "Availability", note: "the foundation — services must be reachable when needed" },
              ],
            },
            table: {
              caption: "Principle -> meaning -> typical violation -> standard defence.",
              headers: ["Principle", "What it guarantees", "Typical violation", "Standard defence"],
              rows: [
                ["Confidentiality", "only authorized parties read data", "interception, sniffing", "encryption (AES, TLS)"],
                ["Integrity", "data is not altered in transit or storage", "fabrication, tampering", "MAC, hash, digital signature"],
                ["Availability", "access when needed", "DoS/DDoS, disk failure", "redundancy, filtering, IDS"],
                ["Non-repudiation", "sender cannot deny sending", "disputed transactions", "digital signatures with certificates"],
                ["Authenticity", "the claimed source is genuine", "masquerade attack", "authentication protocols (Kerberos)"],
                ["Possession", "owner keeps control of the data", "device theft", "full-disk encryption"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked verbatim, twice",
              body: "'Describe the critical characteristics of information' (May 2023) and 'Explain fabrication, interception, Non-Repudiation and Integrity in terms of security' (May 2024) are direct principle questions. Memorize both lists — CIA + non-repudiation, and the extended accuracy/authenticity/utility/possession set — and you bank these 7 marks in minutes.",
            },
            examQuestions: [
              {
                q: "Describe the critical characteristics of information. How are they used in computer security?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Explain fabrication, interception, Non-Repudiation and Integrity in terms of security.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "State the four fundamental principles of information security and, for each, give one attack that violates it and one mechanism that defends it.",
                marks: 7,
                outline: [
                  "Confidentiality: violated by interception/sniffing; defended by encryption",
                  "Integrity: violated by fabrication or tampering; defended by MAC or signature",
                  "Availability: violated by DoS/DDoS or hardware failure; defended by redundancy and filtering",
                  "Non-repudiation: violated by a disputed transaction; defended by digital signatures",
                  "Extended list for full marks: accuracy, authenticity, utility, possession",
                  "Close with the mapping: principle -> attack -> mechanism for a named scenario",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "The OSI security architecture (X.800)",
            body: [
              "The OSI security architecture is ITU-T Recommendation X.800 (ISO 7498-2), the international standard that gives security a systematic vocabulary instead of ad-hoc folklore. It defines three viewpoints of any secure system: security attacks (what an adversary does to compromise information), security services (what capability is offered to counter attacks and preserve confidentiality, integrity, availability and non-repudiation) and security mechanisms (the concrete techniques — encipherment, digital signatures, authentication exchange — that implement or support services). The architecture's contribution is the discipline of mapping every attack to the service that defeats it and the mechanism that delivers that service.",
              "A worked reading makes the three layers click. Take the attack 'content modification' — an attacker edits a bank amount in transit. The service that answers it is data integrity. The mechanisms that deliver that service are a MAC (symmetric), a hash chain (unkeyed but detectable) or a digital signature (asymmetric). Now take 'masquerade' — pretending to be another entity. The answering service is peer-entity authentication; the mechanisms are authentication exchange (Kerberos) and digital signatures. X.800's tables map the full grid: five services (authentication, access control, data confidentiality, data integrity, non-repudiation) against eight mechanisms (encipherment, digital signature, access control, data integrity, authentication exchange, traffic padding, routing control, notarization).",
              "The exam angle is the architecture's position in the syllabus: it is the vocabulary every later unit assumes. IPsec (Unit IV) is a set of mechanisms delivering confidentiality and integrity services against interception and modification attacks; a firewall is a mechanism for access control; PGP is encipherment plus signature mechanisms serving email. When a question says 'explain the OSI security architecture', the expected answer names the three viewpoints, lists the five services and the eight mechanisms, and closes with one concrete attack -> service -> mechanism mapping as the worked example.",
            ],
            keyTerms: [
              { term: "X.800", definition: "ITU-T recommendation defining the OSI security architecture: security attacks, security services and security mechanisms." },
              { term: "Security service", definition: "A capability that enhances security of data transfers — authentication, access control, confidentiality, integrity, non-repudiation." },
              { term: "Security mechanism", definition: "The technique implementing a service — encipherment, digital signature, authentication exchange, traffic padding, notarization." },
              { term: "OSI security architecture", definition: "ISO 7498-2's systematic framework mapping attacks to services to mechanisms." },
            ],
            bullets: [
              "X.800 = ISO 7498-2: the OSI security architecture standard.",
              "Three viewpoints: security attacks, security services, security mechanisms.",
              "Five services: authentication, access control, data confidentiality, data integrity, non-repudiation.",
              "Eight mechanisms: encipherment, digital signature, access control, data integrity, authentication exchange, traffic padding, routing control, notarization.",
              "A mechanism may serve several services; one service may need several mechanisms.",
              "Every later protocol (IPsec, SSL, PGP, Kerberos) is mechanisms delivering these services.",
            ],
            diagram: {
              kind: "layers",
              title: "The X.800 stack",
              caption: "Index 0 is the top: what the adversary does, what capability answers it, what technique delivers the capability.",
              layers: [
                { label: "Security attacks", note: "passive: interception, traffic analysis — active: masquerade, replay, modification, DoS" },
                { label: "Security services", note: "authentication · access control · confidentiality · integrity · non-repudiation" },
                { label: "Security mechanisms", note: "encipherment · signatures · authentication exchange · padding · notarization" },
                { label: "Algorithms & protocols", note: "AES, RSA, SHA, Kerberos, IPsec, SSL — Unit II through IV of this course" },
              ],
            },
            table: {
              caption: "X.800 service -> what it protects -> mechanisms that deliver it.",
              headers: ["X.800 service", "Protects against", "Delivering mechanisms"],
              rows: [
                ["Peer-entity authentication", "masquerade attacks", "authentication exchange, digital signatures"],
                ["Access control", "unauthorized use of a resource", "access control mechanisms, firewalls"],
                ["Data confidentiality", "interception, traffic analysis", "encipherment, traffic padding, routing control"],
                ["Data integrity", "modification, replay", "MACs, digital signatures, data integrity mechanisms"],
                ["Non-repudiation", "denial of sending or receiving", "digital signatures, notarization"],
              ],
            },
            callout: {
              type: "tip",
              title: "A three-step memory aid",
              body: "Read X.800 bottom-up: 'with WHAT do we defend' (mechanisms), 'against WHAT capability' (services), 'from WHAT actions' (attacks). Any architecture question is answered in those three sentences plus one concrete mapping — e.g. content modification -> data integrity -> MAC.",
            },
            examQuestions: [
              {
                q: "What is the OSI security architecture? Explain its three viewpoints — security attacks, security services and security mechanisms — and give one worked mapping of an attack to the service and mechanism that counter it.",
                marks: 7,
                outline: [
                  "X.800 / ISO 7498-2 defines the systematic vocabulary",
                  "Attacks: passive (interception, traffic analysis) and active (masquerade, replay, modification, DoS)",
                  "Services: authentication, access control, confidentiality, integrity, non-repudiation",
                  "Mechanisms: encipherment, digital signature, access control, authentication exchange, traffic padding, routing control, notarization, data integrity",
                  "Mapping 1: content modification -> data integrity -> MAC",
                  "Mapping 2: masquerade -> peer-entity authentication -> Kerberos exchange",
                  "Close: later units are these mechanisms realized in protocols",
                ],
              },
              {
                q: "List the five X.800 security services and name the mechanism you would deploy for each in a web-banking system.",
                marks: 7,
                outline: [
                  "Authentication: TLS server certificates + client passwords",
                  "Access control: firewall + application authorization tables",
                  "Data confidentiality: AES under TLS",
                  "Data integrity: TLS record MAC / AEAD",
                  "Non-repudiation: digital signatures on transaction receipts",
                ],
              },
              {
                q: "Distinguish a security service from a security mechanism with one example of each.",
                marks: 3,
                outline: [
                  "Service: the capability offered (e.g. data confidentiality)",
                  "Mechanism: the technique implementing it (e.g. encipherment with AES)",
                  "One service may be delivered by several mechanisms",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Security attacks: passive and active",
            body: [
              "A threat is a potential violation of security — the possibility that someone or something will breach a principle; an attack is the realized assault — an intelligent act that deliberately attempts to evade security services and violate policy. The X.800 taxonomy splits attacks by whether they touch the data stream. Passive attacks observe or monitor transmission without altering it: release of message contents (reading what flows) and traffic analysis (reading the pattern — who talks to whom, when, how often — even when contents are encrypted). Passive attacks are hard to detect because nothing is changed, but easy to prevent, because encryption and padding deny the adversary the observation.",
              "Active attacks modify the data stream or create false streams, and X.800 names four. A masquerade impersonates one entity to another — A pretends to be B, often harvesting credentials first. A replay captures a message and retransmits it later to produce an unauthorized effect — the classic counter is timestamps and sequence numbers (IPsec's anti-replay windows do exactly this). Modification of message contents alters part of a legitimate message or delays/reorders it — countered by MACs and signatures. Denial of service prevents or inhibits normal use — flooding a server, cutting a link. Active attacks are hard to prevent absolutely (physical access cannot be denied) but easy to detect, so the strategy is detection with prompt recovery, not prevention.",
              "A worked chain shows the four active attacks stacking. An attacker sniffing a session (passive) harvests a login token; that token becomes a masquerade; replaying the token later in a new session is a replay; editing the payment amount inside the replayed request is modification; and crashing the bank's monitoring server to hide the traces is denial of service. The exam angle: define threat vs attack in one line each, draw the passive/active split, name the four active attacks with one countermeasure each — and remember the asymmetry (passive: prevent, hard to detect; active: detect, hard to prevent), which is the line examiners look for.",
            ],
            keyTerms: [
              { term: "Threat", definition: "A potential violation of security that may or may not materialize." },
              { term: "Passive attack", definition: "Observes the data stream without changing it — release of message contents and traffic analysis; hard to detect, easy to prevent." },
              { term: "Active attack", definition: "Modifies the stream — masquerade, replay, modification, denial of service; easy to detect, hard to prevent." },
              { term: "Traffic analysis", definition: "Deducing communication patterns (endpoints, frequency, timing) from encrypted traffic." },
              { term: "Replay attack", definition: "Capturing a legitimate message and retransmitting it later for unauthorized effect; countered by timestamps, nonces and sequence windows." },
            ],
            bullets: [
              "Threat = potential violation; attack = the actual intelligent assault.",
              "Passive: release of message contents, traffic analysis — nothing is changed.",
              "Active: masquerade, replay, modification of messages, denial of service.",
              "Passive attacks: prevention (encryption, padding) since detection is impractical.",
              "Active attacks: detection and recovery, since prevention cannot be guaranteed.",
              "Replay is countered by nonces, timestamps and sequence numbers — remember IPsec's anti-replay window.",
            ],
            diagram: {
              kind: "compare",
              title: "Passive vs active attacks",
              caption: "The single most useful split in the syllabus: does the adversary touch the stream or only watch it?",
              left: {
                heading: "Passive — eavesdropping",
                items: [
                  "Release of message contents: reading the traffic",
                  "Traffic analysis: reading the pattern despite encryption",
                  "Nothing is modified, so detection is nearly impossible",
                  "Strategy: prevention — encryption and traffic padding",
                ],
              },
              right: {
                heading: "Active — tampering",
                items: [
                  "Masquerade: impersonate another entity",
                  "Replay: retransmit captured messages later",
                  "Modification: alter, delay or reorder messages",
                  "DoS: disable the service itself — strategy: detect + recover",
                ],
              },
            },
            table: {
              caption: "The attack taxonomy with the countermeasure for each.",
              headers: ["Attack", "Passive / Active", "What it does", "Countermeasure"],
              rows: [
                ["Release of contents", "passive", "reads message bodies", "encryption (AES, TLS)"],
                ["Traffic analysis", "passive", "deduces patterns from encrypted flow", "traffic padding, routing control"],
                ["Masquerade", "active", "impersonates a legitimate entity", "strong authentication (Kerberos, certificates)"],
                ["Replay", "active", "retransmits captured messages", "timestamps, nonces, sequence windows"],
                ["Content modification", "active", "alters part of a message", "MAC / digital signature"],
                ["Denial of service", "active", "floods or disables the service", "firewalls, IDS, redundancy"],
              ],
            },
            callout: {
              type: "warning",
              title: "The replay trap",
              body: "Students list masquerade, modification and DoS but forget replay — the four X.800 active attacks are masquerade, replay, modification of message contents and denial of service. A replay needs no key and no algebra: only freshness (nonces, timestamps, sequence numbers) stops it.",
            },
            examQuestions: [
              {
                q: "Define the terms threat and attack. List and define categories of security attacks.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Distinguish passive from active attacks with two examples of each, and state why the defensive strategy differs between the two families.",
                marks: 7,
                outline: [
                  "Passive: observe only — release of contents, traffic analysis",
                  "Nothing altered -> virtually impossible to detect",
                  "Strategy: prevention — encryption and traffic padding",
                  "Active: alter the stream — masquerade, replay, modification, DoS",
                  "Detection is feasible -> strategy is detection and prompt recovery",
                  "Worked chain: sniff -> masquerade -> replay -> modify -> DoS",
                ],
              },
              {
                q: "Why is traffic analysis a threat even when all traffic is encrypted?",
                marks: 3,
                outline: [
                  "Encryption hides contents, not metadata",
                  "Endpoints, frequency, size and timing still leak information",
                  "Traffic padding and routing control mask the pattern",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Security services, mechanisms and the model for network security",
            body: [
              "The X.800 services expand on the fundamental principles with operational detail. Peer-entity authentication provides confidence in the identity of an entity connected at the other end; data-origin authentication proves the source of a received block of data (without protecting replay). Access control limits who may use which resource and in what way. Data confidentiality protects data from passive attacks — connection confidentiality, connectionless confidentiality, and the selective-field and traffic-flow variants. Data integrity assures messages arrive unmodified, without duplication, insertion or replay. Non-repudiation protects against denial by a sending party (proof of origin) or a receiving party (proof of delivery).",
              "The model for network security is the four-scenario picture every cipher deployment follows. A message travels from source to destination across an information channel; the adversary observes (passive) or modifies (active) that channel. Defence needs: a security-related transformation on the message (encryption, a MAC appended), some secret information shared by the two principals and hidden from the opponent (a key), and optionally a trusted third party — a arbiter who distributes secrets (a KDC) or settles disputes (a notary). The designer's four tasks follow directly: design the transformation algorithm, generate the secret information, develop methods for distributing and sharing it, and specify the protocol that uses algorithm plus secret to provide the intended service.",
              "The Jun 2025 paper asked a subtler distinction: security versus protection. Security is the umbrella condition of the whole system — policies, mechanisms and assurance guaranteeing confidentiality, integrity and availability against any threat, internal or external. Protection is the subset of machinery inside an operating system or application that enforces access control among its own processes and objects — file permissions, capability lists, memory isolation. In one line: protection is the internal access-control mechanism; security is the broader goal that includes protection, physical safeguards and assurance against the outside world. A perfectly protected system is still insecure if the door to the server room is unlocked.",
            ],
            keyTerms: [
              { term: "Peer-entity authentication", definition: "Confidence that the entity at the other end of a connection is who it claims to be." },
              { term: "Trusted third party", definition: "An arbiter trusted by both principals — a KDC that distributes keys or a notary that settles disputes." },
              { term: "Security policy", definition: "The statement of what is and is not allowed; mechanisms enforce it, assurance measures how well." },
              { term: "Protection", definition: "The internal access-control machinery of a system — permissions and isolation among its own users and processes." },
            ],
            bullets: [
              "Services: authentication, access control, confidentiality, integrity, non-repudiation (plus availability).",
              "Data-origin authentication does not by itself stop replay — freshness must be added.",
              "Model for network security: transformation + shared secret + protocol, optionally a trusted third party.",
              "Four designer tasks: algorithm, secret generation, key distribution, protocol specification.",
              "Security is the umbrella goal; protection is the internal access-control subset of it.",
              "A protected system can still be insecure — assurance and physical safeguards complete security.",
            ],
            diagram: {
              kind: "flow",
              title: "The model for network security",
              caption: "Every secure channel in this course is this picture with different words: transform, share a secret, watch for the opponent.",
              steps: [
                { label: "Source prepares message", note: "plaintext plus secret information" },
                { label: "Security transformation", note: "encrypt, append MAC or signature" },
                { label: "Channel", note: "opponent observes or modifies — passive and active attacks" },
                { label: "Reverse transformation", note: "decrypt, verify MAC or signature" },
                { label: "Destination accepts", note: "trusted third party may arbitrate or distribute keys" },
              ],
            },
            table: {
              caption: "Security versus protection — the Jun 2025 contrast in one table.",
              headers: ["Aspect", "Security", "Protection"],
              rows: [
                ["Scope", "whole system, inside and outside threats", "internal objects: processes, files, memory"],
                ["Includes", "policy, assurance, physical and logical controls", "access control mechanisms only"],
                ["Threat source", "external attackers, insiders, failures", "misuse by the system's own users"],
                ["Example", "firewall policy + audits + locks", "file permissions, capability lists"],
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the model, name the tasks",
              body: "For any 'model for network security' question, draw the source -> channel -> destination picture with the adversary above the channel, then list the four designer tasks in order. The trusted third party box earns the last mark — most answers forget it.",
            },
            examQuestions: [
              {
                q: "What are the differences between security and protection? Explain.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Draw and explain the model for network security and state the four tasks its designers must perform.",
                marks: 7,
                outline: [
                  "Source, destination, information channel, adversary above the channel",
                  "Security-related transformation: encryption, MAC, signature",
                  "Secret information shared by principals, hidden from the opponent",
                  "Trusted third party: key distribution or arbitration",
                  "Task 1: design the transformation algorithm",
                  "Task 2: generate secret information; Task 3: distribute it",
                  "Task 4: specify the protocol combining algorithm and secret",
                ],
              },
              {
                q: "Why does data-origin authentication alone fail to stop replay attacks?",
                marks: 3,
                outline: [
                  "It proves who created the block, not that it is fresh",
                  "An attacker can replay the authentic block verbatim",
                  "Nonces, timestamps or sequence numbers add freshness",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "The symmetric cipher model",
            body: [
              "A symmetric cipher (conventional or secret-key cipher) uses one secret key shared by sender and receiver for both encryption and decryption. Its model has five ingredients: plaintext (the original intelligible message), the encryption algorithm (transforms plaintext under the key), the secret key (the value chosen independently of the plaintext), ciphertext (the scrambled output) and the decryption algorithm (reverses it using the same key). Formally, encryption runs C = E(K, P) and decryption P = D(K, C). Security rests entirely on the secrecy of K, never on the secrecy of the algorithm — Kerckhoffs's principle: assume the enemy knows the system.",
              "The key-count arithmetic is a favourite short question. For two people to communicate via cipher, exactly one shared secret key is required. Scale that to a network: n users each needing pairwise private conversation need n(n-1)/2 keys, because every unordered pair must have its own secret — 10 users need 45 keys, 1000 users need 499,500, which is the scalability problem that motivates public-key cryptography (Unit III) and key-distribution centres. Cryptanalysis attacks the algorithm using plaintext/ciphertext pairs (classified: ciphertext-only, known-plaintext, chosen-plaintext, chosen-ciphertext); brute-force attack tries every key — the defender's rule is that the keyspace must make brute force computationally infeasible (56 bits is already breakable; 128 bits is not).",
              "A worked size comparison shows why the keyspace matters. Caesar has 25 usable keys — a child brute-forces it. DES has 2^56 keys — special hardware cracked it in 1998. AES-128 has 2^128 keys — at a trillion keys per second per person for all eight billion humans, the search would run longer than the universe's age. The exam angle: name the five ingredients, state Kerckhoffs's principle, do the n(n-1)/2 arithmetic for a small n (the May 2023 paper asked the two-person case), and classify attacks by what the adversary knows — ciphertext-only up to chosen-ciphertext.",
            ],
            keyTerms: [
              { term: "Symmetric cipher", definition: "One shared secret key used for both encryption and decryption — C = E(K, P), P = D(K, C)." },
              { term: "Kerckhoffs's principle", definition: "Security must depend only on the key's secrecy, assuming the algorithm is public knowledge." },
              { term: "Cryptanalysis", definition: "Attacking the cipher's structure using what is known — ciphertext-only, known-plaintext, chosen-plaintext, chosen-ciphertext." },
              { term: "Brute-force attack", definition: "Trying every possible key; defeated by a keyspace too large to search." },
              { term: "Keyspace", definition: "The set of all possible keys — 2^56 for DES, 2^128 for AES-128." },
            ],
            bullets: [
              "Five ingredients: plaintext, encryption algorithm, key, ciphertext, decryption algorithm.",
              "One key for two people; n(n-1)/2 keys for n people to talk pairwise.",
              "Security lives in the key, not the algorithm — Kerckhoffs's principle.",
              "Attack classification: ciphertext-only -> known-plaintext -> chosen-plaintext -> chosen-ciphertext (adversary grows stronger).",
              "Keyspace sizes: Caesar 25, DES 2^56 (broken), AES-128 2^128 (safe).",
              "Public-key cryptography exists because n(n-1)/2 key distribution does not scale.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The symmetric cipher model",
              caption: "The same key enters both ends; the adversary sees only ciphertext on the insecure channel.",
              stages: [
                { label: "Plaintext P", note: "the intelligible input" },
                { label: "Encryption E", note: "C = E(K, P) with shared key K" },
                { label: "Insecure channel", note: "opponent sees C — cryptanalysis or brute force" },
                { label: "Decryption D", note: "P = D(K, C), same key" },
                { label: "Plaintext P", note: "recovered for the recipient" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "keycount.py — why n(n-1)/2 does not scale",
              code: `def symmetric_keys(n):   # every pair needs its own shared secret
    return n * (n - 1) // 2

def public_keys(n):      # each user owns one key pair (public + private)
    return 2 * n

for n in (2, 10, 1000):
    print(n, symmetric_keys(n), public_keys(n))
# 2   -> 1 key      vs 4
# 10  -> 45 keys    vs 20
# 1000 -> 499500    vs 2000`,
            },
            callout: {
              type: "exam",
              title: "The two-person key question",
              body: "'How many keys are required for two people to communicate via cipher?' (May 2023) — the answer is one shared secret key. Full marks then derive the network case: n(n-1)/2 for symmetric, 2n keys (n pairs) for public-key. That one-line escalation is what turns a 2-mark answer into a 7-mark answer.",
            },
            examQuestions: [
              {
                q: "How many keys are required for two people to communicate via cipher?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Describe the five ingredients of the symmetric cipher model, state Kerckhoffs's principle, and classify cryptanalytic attacks by the adversary's knowledge.",
                marks: 7,
                outline: [
                  "Plaintext, encryption algorithm, secret key, ciphertext, decryption algorithm",
                  "C = E(K, P); P = D(K, C) — one shared key both ends",
                  "Kerckhoffs: assume the algorithm is known; secrecy lives in the key",
                  "Ciphertext-only: adversary has only intercepted ciphertext",
                  "Known-plaintext: some P-C pairs are known",
                  "Chosen-plaintext / chosen-ciphertext: adversary feeds chosen inputs",
                  "Brute force searches the whole keyspace — 2^56 breakable, 2^128 not",
                ],
              },
              {
                q: "How many keys does a 100-user network need for pairwise symmetric communication, and what alternative cuts that number?",
                marks: 3,
                outline: [
                  "n(n-1)/2 = 100*99/2 = 4950 keys",
                  "Public-key cryptography needs only 100 key pairs",
                  "Or a KDC distributes per-session keys on demand",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Substitution techniques: Caesar and Playfair",
            body: [
              "A substitution cipher replaces each plaintext element (letter or group) with another symbol, keeping position intact. Caesar's cipher shifts every letter by a fixed k: with k = 1, 'Laughter is the best medicine' becomes 'Mbhvuifs jt uif cftt nfejdjof' — each letter advances one place and the spaces ride along untouched. Its usable keyspace is 25 (a shift of 26 is the identity), so exhaustive search recovers the plaintext instantly, which makes Caesar a teaching cipher rather than a real one. The monoalphabetic generalization maps each letter to an arbitrary partner — 26! possible keys — but frequency analysis destroys it anyway, because 'E' stays the commonest letter in English ciphertext.",
              "The Playfair cipher is the syllabus's digraph substitution: it encrypts pairs of letters using a 5x5 square built from a keyword (I and J share one cell). With keyword MONARCHY the square reads M O N A R / C H Y B D / E F G I K / L P Q S T / U V W X Z. Rules: plaintext is split into digraphs (a doubled letter gets an 'x' filler, odd length gets padded); same row — replace each letter by the one to its right; same column — the one below; otherwise — rectangle rule, each letter swaps to the letter in its own row and the partner's column (AT encrypts to RS). Working in pairs flattens single-letter frequency and roughly multiplies the keyspace, defeating the simple frequency attack.",
              "A worked trace cements the rules. Encrypt 'HS' with MONARCHY: H sits at row 1, column 1; S at row 3, column 3 — a rectangle, so H takes S's column in H's row (B) and S takes H's column in S's row (P): ciphertext 'BP'. The exam angle: the May 2024 paper asked a straight Caesar encryption with key 1, and Jun 2025 asked Playfair with an example — so memorize both walkthroughs and the comparison table (key space, broken by) that separates Caesar, monoalphabetic, Playfair, Hill and Vigenere.",
            ],
            keyTerms: [
              { term: "Caesar cipher", definition: "Shifts every letter by a fixed k (25 usable keys); broken instantly by brute force." },
              { term: "Monoalphabetic cipher", definition: "One fixed letter-to-letter mapping; 26! keys but still broken by frequency analysis." },
              { term: "Playfair cipher", definition: "Digraph substitution on a 5x5 keyword square using row, column and rectangle rules." },
              { term: "Frequency analysis", definition: "Attacking substitution ciphers by matching ciphertext letter statistics to the language's." },
              { term: "Digraph", definition: "A two-letter unit encrypted as one element — Playfair's defence against single-letter frequencies." },
            ],
            bullets: [
              "Caesar: C = (P + k) mod 26; only 25 usable keys; trivially brute-forced.",
              "Monoalphabetic: 26! keys, yet frequency analysis of the language defeats it.",
              "Playfair: 5x5 keyword square, I/J merged, digraphs with 'x' fillers.",
              "Playfair rules: same row -> right neighbour; same column -> below; rectangle -> swap columns.",
              "Worked trace (MONARCHY): AT -> RS and HS -> BP.",
              "Caesar with key 1: 'Laughter is the best medicine' -> 'Mbhvuifs jt uif cftt nfejdjof'.",
            ],
            diagram: {
              kind: "flow",
              title: "Encrypting with Playfair",
              caption: "Build the square once, then apply the three rules digraph by digraph.",
              steps: [
                { label: "Choose keyword", note: "MONARCHY, fill 5x5, merge I/J" },
                { label: "Prepare plaintext", note: "split into digraphs; 'x' for doubles and padding" },
                { label: "Classify each pair", note: "same row? same column? rectangle?" },
                { label: "Apply the rule", note: "right / below / swap columns" },
                { label: "Concatenate", note: "pairs join into the ciphertext" },
              ],
            },
            table: {
              caption: "The substitution family at a glance.",
              headers: ["Cipher", "Key", "Encrypts", "Broken by"],
              rows: [
                ["Caesar", "shift k (25 keys)", "single letters", "brute force or frequency analysis"],
                ["Monoalphabetic", "26! permutations", "single letters", "frequency analysis"],
                ["Playfair", "5x5 keyword square", "digraphs", "digraph frequency analysis"],
                ["Hill", "n x n invertible matrix", "n-letter blocks", "known-plaintext linear algebra"],
                ["Vigenere", "keyword, repeated", "letters shifted by keyword cycle", "Kasiski/index-of-coincidence"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "caesar.py — the May 2024 walkthrough, runnable",
              code: `def caesar(text, k):
    out = []
    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            out.append(chr((ord(ch) - base + k) % 26 + base))
        else:
            out.append(ch)          # spaces and punctuation untouched
    return "".join(out)

cipher = caesar("Laughter is the best medicine", 1)
print(cipher)                    # Mbhvuifs jt uif cftt nfejdjof
print(caesar(cipher, -1))        # Laughter is the best medicine`,
            },
            callout: {
              type: "exam",
              title: "Two ciphers, two sessions",
              body: "Caesar encryption appeared as a full 7-mark numeric in May 2024 and Playfair with example in Jun 2025. For Playfair, always show the key square — the square itself is half the marks, and the rectangle rule is the step examiners check.",
            },
            examQuestions: [
              {
                q: "Encrypt the following message using Caesar cipher with key = 1. Plaintext is 'Laughter is the best medicine'.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "What is play fair cipher? Explain with suitable example.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Construct the Playfair key square for keyword MONARCHY and state the three encryption rules with one example of each.",
                marks: 7,
                outline: [
                  "Square rows: MONAR / CHYBD / EFGIK / LPQST / UVWXZ (I/J merged)",
                  "Rule 1 same row: each letter -> right neighbour (wrap)",
                  "Rule 2 same column: each letter -> below (wrap)",
                  "Rule 3 rectangle: swap columns within own rows",
                  "Example: AT -> RS (rectangle)",
                  "Example: HS -> BP (rectangle)",
                  "Fillers: doubled letters and odd tail get 'x'",
                ],
              },
              {
                q: "Why does the Playfair cipher resist simple frequency analysis better than a monoalphabetic cipher?",
                marks: 3,
                outline: [
                  "It encrypts digraphs, so 676 pairs share the frequency mass",
                  "Single-letter frequencies flatten and lie about the mapping",
                  "Digraph frequencies are far more uniform than letter frequencies",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Transposition techniques",
            body: [
              "A transposition cipher keeps every plaintext letter but reorders (permutes) their positions — the letters themselves are unchanged, only their addresses move. The rail fence cipher writes the plaintext along 'rails' of a zigzag and reads row by row: with two rails, ATTACKATDAWN splits into the even-index letters ATCADW and odd-index letters TAKTAN, concatenated as ATCADWTAKTAN. Decryption splits the ciphertext in half and interleaves the rows. The columnar transposition generalizes it with a keyword: write the plaintext row-wise under the keyword's letters, then read off columns in alphabetical order of the keyword.",
              "A worked columnar example shows the key's role. Plaintext MEETMEATTHEPARK under keyword CAT (columns ordered A=1, C=2, T=3) is written in three columns and read column-by-column in key order — the keyword defines both the geometry and the reading order, so the key count equals the column permutations, which is tiny compared to modern keys but far larger than rail fence's single parameter. Transposition's weakness is structural: letter frequencies survive untouched (the same multiset of letters appears), so an analyst who spots the frequency signature knows a transposition is in play and attacks the geometry, not the alphabet.",
              "Why the syllabus keeps these techniques is their product with substitution. A product cipher applies substitution then transposition (round after round), and that composition — confusion from substitution, diffusion from transposition — is exactly the design of DES, AES and every modern block cipher (Unit II): SubBytes substitutes, ShiftRows and MixColumns transpose. The exam angle: encrypt ATTACKATDAWN by rail fence and decrypt it back, state why transposition alone is weak, and close with the sentence that modern ciphers are product ciphers built from these two classical ideas.",
            ],
            keyTerms: [
              { term: "Transposition cipher", definition: "Reorders the letters of the plaintext without changing their identities." },
              { term: "Rail fence cipher", definition: "Writes plaintext in a zigzag across rails and reads row-wise; two rails split even and odd indices." },
              { term: "Columnar transposition", definition: "Writes plaintext row-wise under a keyword and reads columns in alphabetical keyword order." },
              { term: "Product cipher", definition: "Composition of substitution and transposition rounds — the architecture of all modern block ciphers." },
              { term: "Diffusion", definition: "Spreading plaintext statistics across ciphertext — transposition's classical contribution." },
            ],
            bullets: [
              "Transposition preserves the letters, permutes their positions.",
              "Rail fence (2 rails): ATTACKATDAWN -> ATCADWTAKTAN; decrypt by interleaving halves.",
              "Columnar: keyword fixes column count and reading order.",
              "Letter frequencies are unchanged — the tell-tale weakness of transposition alone.",
              "Product cipher = substitution rounds + transposition rounds.",
              "DES/AES inherit this: S-boxes substitute, ShiftRows/MixColumns transpose.",
            ],
            diagram: {
              kind: "flow",
              title: "Rail fence with two rails",
              caption: "ATTACKATDAWN zigzags across two rails; reading the rails row-wise gives the ciphertext.",
              steps: [
                { label: "Write zigzag", note: "A T C A D W on rail 1, T A K T A N on rail 2" },
                { label: "Read rail 1", note: "ATCADW" },
                { label: "Read rail 2", note: "TAKTAN" },
                { label: "Concatenate", note: "ciphertext ATCADWTAKTAN" },
                { label: "Decrypt", note: "split in half, interleave, plaintext returns" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "railfence.py — encrypt and decrypt a two-rail transposition",
              code: `def rail_fence(text, rails=2):
    row1 = text[0::2]            # characters at even indices
    row2 = text[1::2]            # characters at odd indices
    return row1 + row2

def rail_unfence(ct):
    half = (len(ct) + 1) // 2
    row1, row2 = ct[:half], ct[half:]
    out = ""
    for a, b in zip(row1, row2):
        out += a + b
    return out + (row1[len(row2):] if len(row1) > len(row2) else "")

ct = rail_fence("ATTACKATDAWN")
print(ct)                        # ATCADWTAKTAN
print(rail_unfence(ct))          # ATTACKATDAWN`,
            },
            callout: {
              type: "tip",
              title: "The bridge sentence",
              body: "The exam-winning line for transposition questions: 'substitution provides confusion, transposition provides diffusion, and their product is the design of every modern block cipher.' It links the classical unit to DES and AES and signals real understanding.",
            },
            examQuestions: [
              {
                q: "Explain transposition ciphers using the rail fence technique. Encrypt ATTACKATDAWN, show the decryption, and state why transposition alone is weak.",
                marks: 7,
                outline: [
                  "Transposition permutes positions, letters unchanged",
                  "Two rails: rail 1 gets even indices, rail 2 odd indices",
                  "Ciphertext ATCADWTAKTAN",
                  "Decryption: split in half, interleave the rows",
                  "Weakness: letter frequencies survive unaltered",
                  "Columnar transposition needs the keyword for geometry and order",
                  "Bridge: product ciphers combine substitution + transposition (DES, AES)",
                ],
              },
              {
                q: "How does a columnar transposition use its keyword, and what does the keyword control?",
                marks: 3,
                outline: [
                  "Keyword letters name the columns",
                  "Alphabetical order of the keyword fixes the reading order",
                  "Keyword length fixes the geometry (column count)",
                ],
              },
              {
                q: "Why do real ciphers never use pure transposition?",
                marks: 2,
                outline: [
                  "Frequencies and letter multiset survive intact",
                  "The analyst attacks the permutation geometry directly",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Steganography",
            body: [
              "Steganography (Greek 'covered writing') hides the existence of a message rather than scrambling it: the secret rides inside an innocent-looking cover — an image, audio file, video or text — and an observer sees only the cover. The classic physical trick was invisible ink or a tattoo under hair; digitally the workhorse is LSB (least significant bit) steganography: a 24-bit image stores one secret bit in the lowest bit of each colour channel, and because the change is 1/256 of a pixel's value, the cover looks identical — a 1024x1024 image hides about 3 MB of payload. Other carriers: whitespace in text, echoes in audio, frames in video, even emoji sequences.",
              "The comparison with cryptography is the exam's favourite angle. Cryptography encrypts: the message's existence is obvious (everyone sees unintelligible ciphertext), but its content is unreadable without the key. Steganography hides existence itself: nothing looks encrypted, but if the channel is discovered the secret is exposed — there is usually no key at all, and even where there is, the hiding scheme is a single point of failure. Detection differs too: cryptanalysis works on known ciphertext; steganalysis hunts statistical anomalies — LSB stego leaves histogram artefacts, whitespace stego changes compression ratios. The practical defence combines both: encrypt first, then hide (the ciphertext inside the cover looks random, so even discovery reveals nothing readable).",
              "A worked example ties it together: hide 'ATTACK' in an image. Convert the message to bits 01000001 01010100 ...; walk the image's pixel bytes and overwrite each least significant bit with the next message bit (01000110 -> 01000111 changes the blue value by 1); the receiver reads the LSBs back in order. The exam angle: define steganography, explain one technique (LSB), give the cryptography comparison table, and close with the two practical drawbacks — payload overhead (the cover must be large) and the single-point-of-failure once the technique is suspected. RGPV has asked steganography in all three sessions seen — as a direct comparison question and twice as a short note.",
            ],
            keyTerms: [
              { term: "Steganography", definition: "Hiding the existence of a message inside an innocent cover medium." },
              { term: "Cover medium", definition: "The innocent carrier — image, audio, video or text — that hosts the hidden payload." },
              { term: "LSB steganography", definition: "Storing one secret bit in the least significant bit of each pixel byte — visually invisible." },
              { term: "Steganalysis", definition: "Detecting hidden data by statistical anomalies in covers (histogram artefacts, compression ratios)." },
              { term: "Watermarking", definition: "Steganography's commercial cousin — embedding ownership marks in media rather than secrets." },
            ],
            bullets: [
              "Steganography hides existence; cryptography hides content.",
              "LSB technique: 1 bit per pixel byte; a 1024x1024 image hides ~3 MB.",
              "Carriers: images, audio, video, whitespace in text, emoji.",
              "Once the channel is discovered, the scheme fails — single point of failure.",
              "Steganalysis detects statistical anomalies; cryptanalysis attacks known ciphertext.",
              "Best practice: encrypt the payload first, then hide it.",
            ],
            diagram: {
              kind: "compare",
              title: "Steganography vs cryptography",
              caption: "One hides that anything is hidden; the other shows scrambled gibberish and dares you to read it.",
              left: {
                heading: "Steganography",
                items: [
                  "Hides the existence of the message",
                  "Cover looks completely innocent",
                  "Often no key — the scheme itself is the secret",
                  "Failure mode: discovery of the channel exposes all",
                ],
              },
              right: {
                heading: "Cryptography",
                items: [
                  "Hides the content of the message",
                  "Ciphertext is visibly encrypted",
                  "Key-based — algorithm can be public",
                  "Failure mode: weak key or broken algorithm",
                ],
              },
            },
            table: {
              caption: "Steganography versus cryptography, aspect by aspect.",
              headers: ["Aspect", "Steganography", "Cryptography"],
              rows: [
                ["Goal", "conceal existence", "conceal meaning"],
                ["Visible output", "an innocent image/audio/text", "obvious scrambled ciphertext"],
                ["Secret", "the embedding scheme and location", "the key"],
                ["Detection", "steganalysis (statistical)", "cryptanalysis (on ciphertext)"],
                ["Payload cost", "large cover needed per secret bit", "ciphertext is same size-ish as plaintext"],
                ["Best practice", "hide encrypted data (combo)", "encrypt then optionally hide"],
              ],
            },
            callout: {
              type: "exam",
              title: "Asked in all three sessions",
              body: "Steganography is the single most repeated topic in the papers seen: May 2023 ('What is Steganography? How it differs from Cryptography?'), May 2024 (short note) and Jun 2025 ('Compare steganography with encryption techniques'). Prepare the comparison table plus the LSB walkthrough — it is near-guaranteed marks.",
            },
            examQuestions: [
              {
                q: "What is Steganography? How it differs from Cryptography?",
                marks: 7,
                appearances: ["May 2023", "May 2024", "Jun 2025"],
              },
              {
                q: "Explain LSB steganography in digital images with a worked example, and state the two practical drawbacks of steganography.",
                marks: 7,
                outline: [
                  "Convert message to a bitstream",
                  "Overwrite the least significant bit of each pixel byte with the next bit",
                  "A change of 1/256 is visually invisible",
                  "Receiver reads LSBs back in the agreed order",
                  "Drawback 1: payload overhead — covers must be large",
                  "Drawback 2: single point of failure once the channel is suspected",
                  "Defence: encrypt the payload before hiding it",
                ],
              },
              {
                q: "Why does combining steganography with cryptography improve security?",
                marks: 3,
                outline: [
                  "Cryptography protects content if the channel is discovered",
                  "Steganography protects existence while the channel stays secret",
                  "Discovery of the cover then reveals only unreadable ciphertext",
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
      title: "Block Ciphers and Data Encryption Algorithm",
      summary:
        "Unit II builds the modern block cipher: the Feistel principles that structure it, DES with its S-boxes and avalanche effect, the cryptanalysis that dates it, AES with its key expansion and four round transformations, multiple encryption and Triple DES, the five modes of operation, and stream ciphers for confidentiality using symmetric encryption.",
      chapter: {
        number: "02",
        title: "Inside Block Ciphers: DES, AES and their Modes",
        intro:
          "Unit II covers block cipher principles and the Feistel structure, the Data Encryption Standard and its strength under differential and linear cryptanalysis, block cipher design principles, the AES competition and cipher, multiple encryption and Triple DES, the five modes of operation, and stream ciphers including confidentiality using symmetric encryption.",
        inOneBreath:
          "A block cipher encrypts fixed-size blocks round by round; DES is 64-bit blocks with a 56-bit key across 16 Feistel rounds whose S-boxes create confusion and the avalanche effect; differential (2^47 chosen plaintexts) and linear (2^43 known) cryptanalysis cannot beat brute force, but 56 bits falls to hardware, so AES (128-bit blocks, 128/192/256 keys, 10/12/14 SPN rounds of SubBytes-ShiftRows-MixColumns-AddRoundKey) replaced it. Double DES falls to meet-in-the-middle at ~2^57 work, hence 3DES; ECB leaks patterns, CBC/CFB/OFB/CTR chain or stream; RC4 shows why keystreams must never repeat.",
        sections: [
          {
            number: "2.1",
            title: "Block cipher principles and the Feistel structure",
            body: [
              "A block cipher encrypts a fixed-size block of bits (64 for DES, 128 for AES) as one unit, producing an equal-size ciphertext block under a key — the same plaintext block under the same key always yields the same ciphertext block. Design choices dominate its strength: block size (large enough to defeat statistical analysis, small enough for speed — 64-bit blocks leak after ~2^32 blocks by the birthday effect, so 128 is modern), key size (56 bits is brute-forceable, 128 is safe), number of rounds (each round must add security against cryptanalysis), subkey generation algorithm (key schedule), and the round function itself, which must be fast yet complex.",
              "The Feistel structure is the classical recipe, used by DES. Split the 2w-bit block into halves (L, R). Each round: L_i = R_(i-1) and R_i = L_(i-1) XOR F(R_(i-1), K_i), where F is the round function and K_i the round subkey. Swap halves and repeat n rounds. The elegance: decryption uses the same structure with subkeys in reverse order — no separate decryption circuit needed, because XOR undoes itself. A worked mini-trace on a 2-round toy cipher: round 1 takes L0 = 0x0123, R0 = 0x4567; round 2's output is then swapped and the final round skips the swap — DES does exactly this dance for 16 rounds.",
              "Design principles name the goals: confusion (the relationship between key and ciphertext is complex — achieved by substitution/S-boxes) and diffusion (plaintext statistics spread across the whole ciphertext — achieved by permutation/transposition), Shannon's two ingredients from Unit I's product cipher. The exam angle: define block cipher, list the five design parameters, write the two Feistel equations, and state why decryption is free — that sequence answers Jun 2025's 'define block cipher, explain design principle' verbatim.",
            ],
            keyTerms: [
              { term: "Block cipher", definition: "Encrypts a fixed-size block under a key; deterministic — same plaintext + key gives same ciphertext." },
              { term: "Feistel structure", definition: "Halves the block and alternates L_i = R_(i-1), R_i = L_(i-1) XOR F(R_(i-1), K_i); decryption reuses the structure with reversed subkeys." },
              { term: "Round function F", definition: "The per-round transformation mixing the half-block with the subkey — fast, nonlinear, avalanche-producing." },
              { term: "Key schedule", definition: "The subkey generation algorithm deriving round keys from the master key." },
              { term: "Confusion and diffusion", definition: "Shannon's two properties: complex key-ciphertext relation and spread plaintext statistics." },
            ],
            bullets: [
              "Block cipher: fixed block size, deterministic, key-driven.",
              "Design parameters: block size, key size, rounds, subkey schedule, round function.",
              "64-bit blocks leak after ~2^32 blocks (birthday effect); 128-bit blocks are modern.",
              "Feistel equations: L_i = R_(i-1); R_i = L_(i-1) XOR F(R_(i-1), K_i).",
              "Decryption = same structure, subkeys reversed — the Feistel superpower.",
              "Confusion from substitution, diffusion from permutation; rounds accumulate both.",
            ],
            diagram: {
              kind: "pipeline",
              title: "A Feistel round chain",
              caption: "Halves swap every round; the final round omits the swap so decryption needs only reversed subkeys.",
              stages: [
                { label: "Input block", note: "split into L0 | R0" },
                { label: "Round 1", note: "L1 = R0; R1 = L0 XOR F(R0, K1)" },
                { label: "Round 2 ... n-1", note: "same pattern with fresh subkeys" },
                { label: "Final round", note: "no swap — output L_n | R_n" },
                { label: "Ciphertext", note: "decrypt with subkeys in reverse order" },
              ],
            },
            table: {
              caption: "The five design parameters and what they control.",
              headers: ["Parameter", "DES choice", "AES choice", "Why it matters"],
              rows: [
                ["Block size", "64 bits", "128 bits", "statistical leakage vs speed; birthday bound ~2^(n/2)"],
                ["Key size", "56 bits", "128/192/256 bits", "brute-force feasibility"],
                ["Rounds", "16", "10/12/14", "cryptanalysis resistance accumulates per round"],
                ["Structure", "Feistel", "SPN (not Feistel)", "decryption design: reused vs inverted"],
                ["Round function", "S-boxes + P-box", "SubBytes etc.", "confusion and diffusion per round"],
              ],
            },
            callout: {
              type: "tip",
              title: "Write the two equations",
              body: "Any Feistel question earns its marks from the two update equations plus the sentence 'decryption uses the same structure with subkeys in reverse order'. Sketch the round box once — half of the diagram is the swap, which students forget.",
            },
            examQuestions: [
              {
                q: "Define block cipher. Explain design principle of block cipher.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Explain the Feistel cipher structure with its round function, write the round equations, and explain why decryption reuses the same structure.",
                marks: 7,
                outline: [
                  "Split 2w-bit block into L and R halves",
                  "Equations: L_i = R_(i-1); R_i = L_(i-1) XOR F(R_(i-1), K_i)",
                  "F: nonlinear round function mixing data with subkey",
                  "Subkeys K_i from the key schedule",
                  "Final round omits the swap",
                  "Decryption: identical circuit, subkeys applied in reverse order",
                  "XOR's self-inverse property is the reason",
                ],
              },
              {
                q: "How do confusion and diffusion arise inside a block cipher?",
                marks: 3,
                outline: [
                  "Confusion: substitution (S-boxes) obscures key-ciphertext relation",
                  "Diffusion: permutation (ShiftRows/MixColumns) spreads statistics",
                  "Rounds alternate the two — the product-cipher idea",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "The Data Encryption Standard (DES)",
            body: [
              "DES, adopted in 1977 from IBM's Lucifer, encrypts 64-bit blocks with a 56-bit key (packaged as 64 bits with 8 parity bits discarded) through 16 Feistel rounds. The pipeline: an initial permutation (IP) scatters the bits, then 16 rounds run the Feistel pattern — each round expands the right half from 32 to 48 bits (E-table), XORs it with a 48-bit subkey from the key schedule, passes it through eight S-boxes (each 6 bits in, 4 bits out — the only nonlinear step), permutes the 32-bit result (P-box), and XORs with the left half. After round 16 the halves swap back and the inverse IP (IP^-1) produces the ciphertext.",
              "The S-boxes are DES's secret sauce and the paper asked their purpose directly: they provide confusion — the only nonlinear component, mapping 6 input bits to 4 output bits so that no linear relation between input and output survives; every other step is a permutation or XOR, both linear. The avalanche effect is the measurable consequence: flipping one plaintext bit changes about 34 of the 64 ciphertext bits (roughly half) after 16 rounds — a tiny input change produces a drastically different output, which is exactly what cryptanalysis hates. The key schedule derives 16 subkeys: PC-1 strips parity to pick 56 bits, splits into halves, rotates by 1 or 2 per round, and PC-2 selects 48 bits each round.",
              "A worked trace of the avalanche idea: encrypt the same 64-bit block twice, second time with bit 1 flipped. Round 1: only the S-box inputs of the altered bits differ; by round 3 the difference has spread through the expansion and permutation to both halves; by round 16 roughly half the output bits differ with probability ~0.5 each. The exam angle: draw the overall structure (IP -> 16 rounds -> swap -> IP^-1), state block/key/round numbers, explain the S-box purpose (nonlinearity/confusion) and quote the avalanche number ~34/64 bits — Jun 2025's question is answered in exactly those five sentences.",
            ],
            keyTerms: [
              { term: "DES", definition: "64-bit block, 56-bit key, 16 Feistel rounds — the 1977 US standard, now deprecated for brute-force reasons." },
              { term: "S-box", definition: "DES's 8 nonlinear substitution boxes: 6 bits in, 4 out — the source of confusion." },
              { term: "Avalanche effect", definition: "One plaintext or key bit flip changes about half the ciphertext bits (DES: ~34 of 64)." },
              { term: "Expansion permutation E", definition: "Stretches the 32-bit half to 48 bits to match the subkey before S-boxing." },
              { term: "Key schedule", definition: "PC-1/rotations/PC-2 deriving sixteen 48-bit subkeys from the 56-bit key." },
            ],
            bullets: [
              "DES: 64-bit block, 56-bit effective key, 16 rounds, 48-bit subkeys.",
              "Pipeline: IP -> 16 Feistel rounds (E -> XOR K_i -> S-boxes -> P -> XOR) -> swap -> IP^-1.",
              "S-boxes: 8 boxes, 6-in/4-out each, the only nonlinear (confusion) step.",
              "Avalanche: one flipped plaintext bit flips ~34 ciphertext bits.",
              "Key schedule: PC-1 picks 56 bits; rotate 1-2 per round; PC-2 emits 48-bit subkeys.",
              "Weakness: the 56-bit key — 2^56 falls to hardware, not the round design.",
            ],
            diagram: {
              kind: "flow",
              title: "One DES encryption",
              caption: "Permutation in, sixteen rounds of expansion-S-box-permutation, swap, permutation out.",
              steps: [
                { label: "64-bit plaintext", note: "initial permutation IP" },
                { label: "Split L0 | R0", note: "32-bit halves" },
                { label: "16 rounds", note: "expand to 48, XOR subkey, S-box, permute, XOR left half" },
                { label: "32-bit swap", note: "after round 16" },
                { label: "Inverse IP", note: "64-bit ciphertext" },
              ],
            },
            table: {
              caption: "DES by the numbers.",
              headers: ["Quantity", "Value", "Role"],
              rows: [
                ["Block size", "64 bits", "input and output per encryption"],
                ["Key size", "56 bits (64 with parity)", "brute-force space 2^56"],
                ["Rounds", "16", "Feistel iterations"],
                ["Subkeys", "16 x 48 bits", "one per round from the schedule"],
                ["S-boxes", "8 (6 -> 4 bits each)", "nonlinearity — confusion"],
                ["Avalanche", "~34 of 64 bits flip", "one plaintext bit change"],
              ],
            },
            callout: {
              type: "tip",
              title: "Purpose of the S-boxes, in one line",
              body: "The S-boxes are the only nonlinear part of DES — they supply confusion so that no linear equation links input, key and output. Everything else (E, P, XOR, IP) is linear, and without the S-boxes DES would be algebraically breakable in one step.",
            },
            examQuestions: [
              {
                q: "What is the purpose of Sboxes in DES? Explain the avalanche effect.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Draw the general structure of DES and explain the initial permutation, the 16 rounds, the expansion, the S-boxes and the final swap.",
                marks: 7,
                outline: [
                  "64-bit block, 56-bit key, 16 Feistel rounds",
                  "IP spreads bits before round 1",
                  "Each round: E expands 32 -> 48, XOR 48-bit subkey, 8 S-boxes 6 -> 4, P permutes, XOR left half",
                  "S-boxes provide nonlinearity (confusion)",
                  "Key schedule: PC-1, rotate, PC-2 per round",
                  "Swap halves after round 16, then IP^-1",
                  "Avalanche: ~34/64 bits flip for a 1-bit plaintext change",
                ],
              },
              {
                q: "Why are the S-boxes the only part of DES that prevents algebraic attack?",
                marks: 3,
                outline: [
                  "E, P, IP and XOR are all linear operations",
                  "A purely linear cipher is solvable by linear algebra",
                  "The 6->4 S-box mapping is nonlinear — it creates confusion",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "The strength of DES: differential and linear cryptanalysis",
            body: [
              "DES's strength question has two answers: the design is remarkably resistant to analytic attack, and the key is embarrassingly short. Brute force: 2^56 keys — in 1998 EFF's Deep Crack machine recovered a key in 56 hours; a year later a distributed effort did it in 22 hours; today cloud hardware does it in hours. No attack on full 16-round DES beats brute force in practice, which is why three decades of cryptanalysis left the structure standing but the key length obsolete. The lesson: a cipher is only as strong as its weakest parameter, and DES's weakest is the key.",
              "Differential cryptanalysis (Biham and Shamir, published 1990-92) studies how input differences propagate through rounds: pick plaintext pairs with a chosen XOR difference, trace the probability of output differences, and use high-probability differentials to extract subkey bits round by round. Against full DES it needs about 2^47 chosen plaintexts — billions of chosen queries, impractical against a real session, though it breaks reduced-round variants easily. Linear cryptanalysis (Matsui, 1993) finds probabilistic linear approximations relating plaintext, ciphertext and key bits and needs about 2^43 known plaintexts — closer to feasible, which is why it caused such alarm. Both attacks shaped AES's evaluation criteria directly: resistance to differential and linear cryptanalysis became mandatory design goals.",
              "The comparison is the exam answer. Brute force needs no plaintexts and 2^56 work — feasible today; differential needs 2^47 chosen plaintexts — impractical collection; linear needs 2^43 known plaintexts — marginal. The exam angle: state that no analytic break defeats full DES, give the three attack costs in a table, then pivot to the real weakness — the 56-bit key — and the industry response, multiple encryption and Triple DES (next section). One mark-saver: differential and linear attacks target the S-boxes' nonlinearity; good S-box design is what keeps their probabilities near chance.",
            ],
            keyTerms: [
              { term: "Brute force on DES", definition: "2^56 key search — 56 hours on EFF's Deep Crack (1998), hours today." },
              { term: "Differential cryptanalysis", definition: "Chosen-plaintext attack tracing input-XOR to output-XOR probabilities; ~2^47 chosen plaintexts against full DES." },
              { term: "Linear cryptanalysis", definition: "Known-plaintext attack using probabilistic linear approximations; ~2^43 known plaintexts." },
              { term: "Reduced-round attack", definition: "Cryptanalysis that easily breaks DES with fewer rounds — the reason DES uses 16." },
              { term: "Key exhaustion", definition: "The failure mode of a too-short key regardless of round design quality." },
            ],
            bullets: [
              "Full 16-round DES has no practical analytic break — the design held.",
              "The 56-bit key is the weakness: 2^56 fell to 1998 hardware in 56 hours.",
              "Differential (Biham-Shamir): ~2^47 chosen plaintexts.",
              "Linear (Matsui): ~2^43 known plaintexts — the closer threat.",
              "Both attacks led to AES's mandatory criteria: strong S-box nonlinearity.",
              "Industry answer: Triple DES with a bigger effective key (next section).",
            ],
            diagram: {
              kind: "fork",
              title: "Three ways to attack DES",
              caption: "Two are impractical for plaintext collection; the third — key exhaustion — is what actually killed DES.",
              start: "Attack DES",
              branches: [
                { label: "Brute force (2^56)", outcome: "no plaintexts needed; hardware now cracks it in hours — the real killer", good: false },
                { label: "Differential cryptanalysis", outcome: "2^47 chosen plaintexts — collecting them is impractical", good: false },
                { label: "Linear cryptanalysis", outcome: "2^43 known plaintexts — marginal but alarming", good: false },
              ],
            },
            table: {
              caption: "DES under three attacks.",
              headers: ["Attack", "Plaintexts needed", "Work", "Verdict"],
              rows: [
                ["Brute force", "none", "2^56 key trials", "feasible today — hours"],
                ["Differential (1990)", "2^47 chosen", "subkey recovery round-wise", "impractical plaintext collection"],
                ["Linear (1993)", "2^43 known", "approximation + counting", "marginal — caused alarm"],
                ["Reduced rounds", "small", "minutes", "proves why 16 rounds are needed"],
              ],
            },
            callout: {
              type: "warning",
              title: "Do not say DES was 'broken' by cryptanalysis",
              body: "The precise statement earns marks: no analytic attack (differential or linear) practically defeats full 16-round DES; DES died of key exhaustion — 2^56 became searchable. Confusing 'the key is short' with 'the structure is broken' is the classic slip.",
            },
            examQuestions: [
              {
                q: "Discuss the strength of DES. Compare brute-force, differential and linear cryptanalysis and state which weakness actually led to its replacement.",
                marks: 7,
                outline: [
                  "Design: 16 rounds, S-boxes — no practical analytic break",
                  "Brute force: 2^56; Deep Crack 1998 -> 56 hours",
                  "Differential: 2^47 chosen plaintexts — impractical",
                  "Linear: 2^43 known plaintexts — marginal",
                  "Real weakness: 56-bit key exhaustion",
                  "Response: multiple encryption -> Triple DES",
                  "Both cryptanalyses shaped AES criteria (S-box nonlinearity)",
                ],
              },
              {
                q: "How do differential and linear cryptanalysis differ in the plaintexts they require?",
                marks: 3,
                outline: [
                  "Differential: chosen plaintext pairs with a fixed XOR difference",
                  "Linear: known plaintexts and probabilistic approximations",
                  "Differential 2^47 chosen vs linear 2^43 known",
                ],
              },
              {
                q: "Why did cryptanalysis of reduced-round DES matter if full DES survived?",
                marks: 2,
                outline: [
                  "It validated the attacks' mathematics",
                  "It set the round-count and S-box criteria for AES",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "The Advanced Encryption Standard (AES)",
            body: [
              "AES was chosen by open competition in 2001: fifteen submissions, five finalists (MARS, RC6, Rijndael, Serpent, Twofish), evaluated on the NIST criteria of security (resistance to differential and linear cryptanalysis), cost (speed on software, hardware and constrained devices) and algorithm/implementation characteristics (flexibility, simplicity). Rijndael won and became FIPS-197. AES encrypts a 128-bit block (the 4x4 byte 'state') with keys of 128, 192 or 256 bits through 10, 12 or 14 rounds respectively — key size buys rounds, block size stays fixed.",
              "AES is not a Feistel cipher: it is a substitution-permutation network whose whole state transforms each round. The four transformations, in order: SubBytes — byte-wise S-box substitution (multiplicative inverse in GF(2^8) plus affine transform), providing confusion; ShiftRows — cyclic row shifts, diffusing bytes across columns; MixColumns — GF(2^8) matrix multiplication mixing each column, the main diffusion step (omitted in the final round); AddRoundKey — XOR with the round key from the key expansion. The key expansion generates 4(r+1) 32-bit words: word i combines word i-1 with word i-4, applying RotWord (byte rotate), SubWord (the same S-box) and an Rcon round constant — this is the 'key generation and expansion format' the May 2024 paper asked for.",
              "Diffusion and confusion are the named concepts in Jun 2025's question, and AES shows both concretely: SubBytes alone is confusion (complex key-ciphertext relation), ShiftRows plus MixColumns alone is diffusion (one changed input byte ends up affecting all 16 state bytes within two rounds — the avalanche again). The exam angle: state the criteria that picked Rijndael, list the four round transformations in order with their jobs, give the key-size/round table, and sketch the key-expansion rule — that full package answers both papers' AES questions.",
            ],
            keyTerms: [
              { term: "AES (Rijndael)", definition: "128-bit block SPN cipher, keys 128/192/256, rounds 10/12/14 — FIPS-197, the current US standard." },
              { term: "State", definition: "AES's 4x4 byte matrix holding the block through the rounds." },
              { term: "MixColumns", definition: "GF(2^8) matrix multiplication over each column — the chief diffusion step (skipped in the final round)." },
              { term: "Key expansion", definition: "Generates 4(r+1) words via RotWord, SubWord and Rcon from the initial key." },
              { term: "SubBytes", definition: "Byte S-box = multiplicative inverse in GF(2^8) followed by an affine map — AES's confusion." },
            ],
            bullets: [
              "AES by evaluation criteria: security, cost, algorithm characteristics — Rijndael won.",
              "128-bit block on a 4x4 byte state; keys 128/192/256 with 10/12/14 rounds.",
              "Round order: SubBytes -> ShiftRows -> MixColumns -> AddRoundKey.",
              "Not Feistel: the entire state transforms; decryption needs inverse structures.",
              "Key expansion: w[i] = w[i-1] (RotWord + SubWord + Rcon) XOR w[i-4].",
              "Diffusion: one input byte affects all 16 bytes within two rounds.",
            ],
            diagram: {
              kind: "pipeline",
              title: "One AES round",
              caption: "Substitute, shift, mix, add key — repeated 10/12/14 times with a final round that skips MixColumns.",
              stages: [
                { label: "Initial AddRoundKey", note: "round 0 key XORed onto the state" },
                { label: "SubBytes", note: "S-box substitution — confusion" },
                { label: "ShiftRows", note: "cyclic row shifts — spread across columns" },
                { label: "MixColumns", note: "GF(2^8) mixing — diffusion (skip in final round)" },
                { label: "AddRoundKey", note: "next round key from the expansion" },
              ],
            },
            table: {
              caption: "AES parameters by key size.",
              headers: ["Key size", "Rounds", "Round keys", "Security margin"],
              rows: [
                ["128 bits", "10", "44 words (176 bytes)", "current default — safe"],
                ["192 bits", "12", "52 words (208 bytes)", "extra margin"],
                ["256 bits", "14", "60 words (240 bytes)", "long-term / top-secret tier"],
              ],
            },
            callout: {
              type: "exam",
              title: "AES in both recent papers",
              body: "May 2024 asked AES key generation and expansion format; Jun 2025 asked diffusion/confusion plus AES steps. Prepare one answer covering: the competition criteria, the four transformations in order, the key-size/round table and the w[i] expansion rule — it banks both 7-markers.",
            },
            examQuestions: [
              {
                q: "Explain in detail the key generation in AES algorithm and its expansion format.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Explain the terms diffusion and confusion. Explain steps of AES.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "State the evaluation criteria of the AES competition and explain the four round transformations with the job each performs.",
                marks: 7,
                outline: [
                  "Criteria: security (differential/linear resistance), cost (speed), algorithm characteristics",
                  "128-bit block, 4x4 byte state, keys 128/192/256",
                  "SubBytes: GF(2^8) inverse + affine — confusion",
                  "ShiftRows: cyclic shifts — positional diffusion",
                  "MixColumns: GF(2^8) matrix per column — main diffusion",
                  "AddRoundKey: XOR with expanded round key",
                  "Final round omits MixColumns; 10/12/14 rounds",
                ],
              },
              {
                q: "Why is AES not a Feistel cipher, and what does that cost?",
                marks: 3,
                outline: [
                  "The whole 128-bit state transforms each round (SPN)",
                  "No half-block swap; decryption needs inverse S-box/ShiftRows/MixColumns structures",
                  "Cost: separate inverse circuitry — not just reversed subkeys",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Multiple encryption and Triple DES",
            body: [
              "When a cipher's key grows too short, the intuitive fix is to encrypt twice with two keys: C = E_K2(E_K1(P)) — double DES. Its presumed strength is 2^(56+56) = 2^112, but the meet-in-the-middle attack reduces it to roughly 2^57 work: compute X = E_K1(P) for all 2^56 values of K1 into a table, compute X = D_K2(C) for all K2, and find the match — one pass forward, one backward, and the pair (K1, K2) that agrees is the key (with a small chance of false positives, resolved with a second plaintext-ciphertext pair). Double encryption is therefore barely better than single — a celebrated lesson that stacking ciphers does not multiply their strength.",
              "Triple DES (3DES) is the fix that survived: encrypt-decrypt-encrypt, C = E_K3(D_K2(E_K1(P))). With three independent keys the effective strength is 168 bits (2^112 after the MITM refinement to 2^118 work for known-plaintext variants); with two keys (K1 = K3) it is 112 bits. The E-D-E middle 'decrypt' step is not an error — it makes 3DES backward-compatible: setting K1 = K2 = K3 reduces the whole operation to single DES, so banks could drop in 3DES on hardware that already spoke DES. 3DES became the workhorse of finance (EMV cards, ATM PINs) after DES fell.",
              "3DES's costs explain its decline. Three DES passes make it roughly a third the speed of DES in software — and DES was already slow; its 64-bit block is vulnerable to birthday-collisions after ~2^32 blocks (Sweet32 attacks on long sessions); and its 64-bit architecture resists efficient hardware and software optimization. The exam angle: show the MITM arithmetic for double DES (2^112 presumption vs ~2^57 reality), state the 3DES keying options (2 or 3 keys, 112/168 bits), explain why the middle step is a decrypt (backward compatibility), and name the two drawbacks (speed, 64-bit block) that led to AES.",
            ],
            keyTerms: [
              { term: "Double DES", definition: "C = E_K2(E_K1(P)); presumed 2^112 strength but broken by meet-in-the-middle to ~2^57 work." },
              { term: "Meet-in-the-middle attack", definition: "Store E_K1(P) for all K1, search D_K2(C) for a match — two half searches instead of one full one." },
              { term: "Triple DES (3DES)", definition: "E-D-E with 2 keys (112 bits) or 3 keys (168 bits); the post-DES financial workhorse." },
              { term: "Backward compatibility", definition: "K1 = K2 = K3 in 3DES reduces to single DES — the reason the middle step is a decrypt." },
              { term: "Sweet32", definition: "Birthday-bound attack on 64-bit block ciphers after ~2^32 blocks in one session." },
            ],
            bullets: [
              "Double DES: 2 keys, presumed 2^112, actual ~2^57 via meet-in-the-middle.",
              "MITM: forward table of E_K1(P), backward search of D_K2(C), match reveals both keys.",
              "3DES E-D-E: 2-key (112-bit) or 3-key (168-bit) variants.",
              "The middle 'decrypt' gives single-DES compatibility (K1 = K2 = K3).",
              "Drawbacks: ~1/3 DES speed; 64-bit block birthday limits; no AES-like efficiency.",
              "Lesson: multiple encryption ≠ multiplication of strength — hence AES's fresh design.",
            ],
            diagram: {
              kind: "compare",
              title: "Double DES vs Triple DES",
              caption: "One falls to meet-in-the-middle; the other survived two decades of finance traffic.",
              left: {
                heading: "Double DES",
                items: [
                  "C = E_K2(E_K1(P)), two 56-bit keys",
                  "Presumed strength 2^112",
                  "MITM: two 2^56 passes -> ~2^57 work",
                  "Verdict: barely better than single DES",
                ],
              },
              right: {
                heading: "Triple DES",
                items: [
                  "C = E_K3(D_K2(E_K1(P))), E-D-E",
                  "2 keys -> 112 bits; 3 keys -> 168 bits",
                  "Middle decrypt = single-DES compatibility",
                  "Drawbacks: slow software, 64-bit block",
                ],
              },
            },
            table: {
              caption: "Multiple-encryption variants compared.",
              headers: ["Variant", "Keys", "Effective strength", "Status"],
              rows: [
                ["Single DES", "1 x 56", "2^56", "deprecated — brute-forceable"],
                ["Double DES", "2 x 56", "~2^57 (MITM)", "never deployed — pointless"],
                ["3DES, 2 keys", "2 x 56", "112 bits", "legacy finance (EMV, ATMs)"],
                ["3DES, 3 keys", "3 x 56", "168 bits", "legacy; phased out for AES"],
                ["AES-128", "1 x 128", "2^128", "current standard"],
              ],
            },
            callout: {
              type: "warning",
              title: "The 2^112 illusion",
              body: "Never write 'double DES has 2^112 security'. The meet-in-the-middle attack needs one 2^56 table plus one 2^56 search — about 2^57 work and 2^56 memory — so double encryption buys almost nothing. This exact slip is what the examiner's question is fishing for.",
            },
            examQuestions: [
              {
                q: "Why is double DES vulnerable to the meet-in-the-middle attack? Show the arithmetic of the reduction and explain how triple DES avoids the problem.",
                marks: 7,
                outline: [
                  "Double DES: C = E_K2(E_K1(P)), presumed 2^112",
                  "X = E_K1(P) = D_K2(C) is the middle value",
                  "Store all 2^56 E_K1(P) values in a table",
                  "Compute all 2^56 D_K2(C) and look for matches",
                  "Effort ~2^57 plus 2^56 memory — barely above single DES",
                  "3DES: E-D-E with 2 or 3 keys, 112/168 bits",
                  "MITM still applies but the work becomes 2^112+ — infeasible",
                ],
              },
              {
                q: "Why is the middle operation of 3DES a decryption rather than an encryption?",
                marks: 3,
                outline: [
                  "E-D-E with K1 = K2 = K3 reproduces single DES",
                  "D_K(E_K(P)) = P makes the middle step cancel out",
                  "Backward compatibility with existing DES hardware",
                ],
              },
              {
                q: "Name two drawbacks of 3DES that led to AES.",
                marks: 2,
                outline: [
                  "Slow in software — three DES passes",
                  "64-bit block: birthday-bound leakage after ~2^32 blocks",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Block cipher modes of operation",
            body: [
              "A block cipher encrypts one fixed block; modes of operation extend it to messages of any length. The five classical modes: ECB (Electronic Codebook) encrypts each block independently — deterministic, parallel, but identical plaintext blocks give identical ciphertext blocks, so patterns leak (the famous 'ECB penguin' shows a encrypted image still displaying its silhouette). CBC (Cipher Block Chaining) XORs each plaintext block with the previous ciphertext block and a random IV, hiding patterns at the cost of sequential processing; one flipped ciphertext bit corrupts its own block and flips a bit in the next (self-healing after that).",
              "The three stream-style modes: CFB (Cipher Feedback) makes a self-synchronizing stream cipher — the previous ciphertext feeds the block cipher to generate keystream bytes, and bit errors propagate for a few blocks; OFB (Output Feedback) generates the keystream from the block cipher's outputs alone (errors do not propagate, but keystream reuse with a repeated IV is fatal); CTR (Counter) encrypts successive counter values to form the keystream — parallelizable, random-access (decrypt block i without decrypting 1..i-1), and the mode TLS and disk encryption prefer. The unbreakable rule for all non-ECB modes: the IV/nonce must never repeat under the same key, or two-time-pad style leaks follow.",
              "A worked contrast: encrypt a 4-block message whose first three blocks are identical. ECB emits three identical ciphertext blocks — a leak. CBC with a random IV emits four different blocks — no leak. That one comparison answers Jun 2025's 'why is ECB rarely used' and May 2024's 'five modes, explain any two'. The exam angle: list all five modes with one property each, then explain any two in depth (CBC's chaining + IV freshness, CTR's parallelism + random access are the safest two to develop), and end with the ECB-penguin sentence.",
            ],
            keyTerms: [
              { term: "ECB mode", definition: "Each block encrypted independently; patterns leak — safe only for single-block keys." },
              { term: "CBC mode", definition: "XORs plaintext with the previous ciphertext and a random IV; sequential, self-healing, pattern-free." },
              { term: "CFB mode", definition: "Self-synchronizing stream mode: previous ciphertext drives the keystream; limited error propagation." },
              { term: "OFB mode", definition: "Keystream generated from cipher outputs; no error propagation; IV reuse is catastrophic." },
              { term: "CTR mode", definition: "Encrypts counter values for a parallel, random-access keystream — the modern default." },
            ],
            bullets: [
              "Five modes: ECB, CBC, CFB, OFB, CTR.",
              "ECB leaks patterns — identical plaintext blocks, identical ciphertext blocks.",
              "CBC: random IV + chaining; sequential; one-bit error corrupts two blocks, then heals.",
              "CFB: self-synchronizing stream; OFB: no error propagation; CTR: parallel and random-access.",
              "IV/nonce reuse under one key breaks CBC/OFB/CTR catastrophically.",
              "ECB is reserved for encrypting single values (like keys), never multi-block messages.",
            ],
            diagram: {
              kind: "matrix",
              title: "Choosing a mode",
              caption: "Plot each mode by pattern protection and granularity — the bottom-left quadrant is the one to avoid.",
              axes: { x: "Pattern protection: none -> chained/randomized", y: "Granularity: block -> stream" },
              quadrants: [
                { label: "CFB / OFB", note: "stream-like, chained keystreams — fixed-IV reuse is fatal" },
                { label: "CTR", note: "stream keystream, parallel, random access — the modern pick" },
                { label: "ECB", note: "block, deterministic — patterns leak, avoid" },
                { label: "CBC", note: "block, chained with random IV — TLS workhorse of its era" },
              ],
            },
            table: {
              caption: "The five modes — property by property.",
              headers: ["Mode", "How it works", "Parallel?", "Weakness"],
              rows: [
                ["ECB", "each block independent", "yes", "identical blocks -> identical output; patterns leak"],
                ["CBC", "P_i XOR C_(i-1) then encrypt; random IV", "no (encrypt)", "sequential; IV must be random and fresh"],
                ["CFB", "previous ciphertext drives keystream", "no", "error propagates a few blocks"],
                ["OFB", "keystream from cipher outputs, XORed", "keystream precomputable", "IV reuse destroys security"],
                ["CTR", "encrypt counter i for keystream block i", "yes", "counter/nonce reuse is fatal"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "modes.py — why ECB leaks and CBC does not",
              code: `# ECB encrypts each block independently - identical plaintext blocks
# give identical ciphertext blocks, leaking the message's structure.
blocks = ["CATS", "CATS", "CATS", "FROG"]
ecb = list(blocks)               # same block, same output
print(ecb)                       # ['CATS', 'CATS', 'CATS', 'FROG'] - pattern visible

prev = "K3x9"                    # CBC chains: each block XORed with the last output
cbc = []
for p in blocks:
    x = "".join(chr(ord(a) ^ ord(b)) for a, b in zip(p, prev))
    cbc.append(x)
    prev = x
print(cbc)                       # all four outputs now differ - pattern hidden`,
            },
            callout: {
              type: "exam",
              title: "Modes in both recent papers",
              body: "May 2024 asked for the five modes with any two explained; Jun 2025 asked ECB's working and why it is rarely used. One prepared answer — five-mode list plus the CBC and CTR deep-dives and the ECB-penguin sentence — covers both questions.",
            },
            examQuestions: [
              {
                q: "Give the five modes of operation of Block cipher. Explain any two.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Explain working of ECB. Why ECB (Electronic Code Book) is rarely used to encrypt message?",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Compare CBC and CTR modes: chaining, parallelism, error behaviour and the IV/nonce rule each obeys.",
                marks: 7,
                outline: [
                  "CBC: P_i XORed with C_(i-1), random IV, sequential",
                  "CBC error: one flipped bit corrupts its block, flips one bit of the next",
                  "CTR: encrypts counter values, keystream XORed with plaintext",
                  "CTR: parallelizable and random-access — decrypt block i alone",
                  "CTR nonce must never repeat under a key (two-time pad)",
                  "CBC IV must be random and unpredictable",
                  "Modern preference: CTR (or GCM = CTR + authentication)",
                ],
              },
              {
                q: "What is the ECB penguin?",
                marks: 2,
                outline: [
                  "An image encrypted in ECB still shows its silhouette",
                  "Identical pixel blocks produce identical ciphertext blocks",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Stream ciphers and confidentiality using symmetric encryption",
            body: [
              "A stream cipher encrypts data one bit or byte at a time by XORing the plaintext with a keystream generated from the key — the one-time-pad idea made practical by a deterministic keystream generator. Where a block cipher waits for a full block, a stream cipher starts instantly and adds no padding, which suits low-latency links, voice and embedded devices. Two families: synchronous stream ciphers generate the keystream from the key alone (independent of plaintext and ciphertext — RC4, OFB, CTR); self-synchronizing (asynchronous) ciphers derive the keystream from a sliding window of previous ciphertext (CFB), so the receiver resynchronizes automatically after lost bits.",
              "The fatal rule is keystream reuse: XOR is its own inverse, so C1 XOR C2 = P1 XOR P2 — two messages encrypted under the same keystream leak their mutual XOR, from which English text (whose XOR with English is largely readable) or two known cribs recover both. This exact failure killed WEP: RC4 with a 24-bit IV repeated within hours, and related-key keystreams collapsed the whole protocol. RC4 itself — a 256-byte state array S permuted by the KSA, then the PRGA swapping entries and emitting bytes — was once the default in TLS and Wi-Fi, but biases in its output (Fluhrer-Mantin-Shamir and later attacks) led to its prohibition in TLS in 2015.",
              "Confidentiality using symmetric encryption is the deployment chapter of the same story: choose link encryption (every hop decrypts/re-encrypts — protects traffic flow but exposes nodes) versus end-to-end encryption (protects data across the path but leaks flow metadata); distribute keys with a KDC or manual channels; add traffic padding against traffic analysis. The exam angle: contrast block and stream ciphers in one table, explain the reuse rule with the C1 XOR C2 arithmetic, name RC4's two deployment failures (WEP, TLS bias attacks), and finish with link vs end-to-end.",
            ],
            keyTerms: [
              { term: "Stream cipher", definition: "XORs plaintext with a key-driven keystream bit by bit — no padding, no waiting." },
              { term: "Keystream reuse", definition: "Two messages under one keystream leak C1 XOR C2 = P1 XOR P2 — the fatal failure mode." },
              { term: "Synchronous stream cipher", definition: "Keystream depends only on the key — plaintext and ciphertext never influence it." },
              { term: "Self-synchronizing cipher", definition: "Keystream derives from previous ciphertext (CFB); resynchronizes automatically after errors." },
              { term: "RC4", definition: "Byte-oriented stream cipher (256-byte permuted state); banned in TLS since 2015 for output biases." },
            ],
            bullets: [
              "Stream cipher: C = P XOR keystream; decrypt with the same keystream.",
              "Synchronous (RC4, OFB, CTR) vs self-synchronizing (CFB).",
              "Never reuse a keystream: C1 XOR C2 = P1 XOR P2.",
              "WEP died of 24-bit IV reuse with RC4; RC4 banned in TLS 2015.",
              "Stream = zero latency and no padding; block = structure and analysis tools.",
              "Confidentiality choices: link vs end-to-end encryption; KDC key distribution; traffic padding.",
            ],
            diagram: {
              kind: "compare",
              title: "Block cipher vs stream cipher",
              caption: "Same key world, different granularity — and a different set of fatal mistakes.",
              left: {
                heading: "Block cipher",
                items: [
                  "Encrypts fixed blocks (64/128 bits)",
                  "Modes add chaining and IV discipline",
                  "Needs padding for arbitrary lengths",
                  "Analysis-friendly: S-boxes, avalanche, cryptanalysis literature",
                ],
              },
              right: {
                heading: "Stream cipher",
                items: [
                  "Encrypts bit/byte at a time via keystream",
                  "No padding, instant start — voice and embedded links",
                  "Fatal error: keystream reuse (C1 XOR C2 = P1 XOR P2)",
                  "Examples: RC4 (deprecated), ChaCha20, CTR/OFB modes",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "stream.py — a counter-based keystream and the reuse rule",
              code: `import hashlib

def keystream(key, n):
    data = b""
    counter = 0
    while len(data) < n:             # hash key + counter -> pseudorandom stream
        data += hashlib.sha256(key + counter.to_bytes(4, "big")).digest()
        counter += 1
    return data[:n]

key = b"shared-secret"
plaintext = b"attack at dawn"
ks = keystream(key, len(plaintext))
cipher = bytes(a ^ b for a, b in zip(plaintext, ks))   # XOR encrypts
plain  = bytes(a ^ b for a, b in zip(cipher, ks))      # same keystream decrypts
print(cipher.hex())                  # random-looking bytes
print(plain.decode())                # attack at dawn`,
            },
            callout: {
              type: "tip",
              title: "The arithmetic that answers everything",
              body: "Memorize C1 XOR C2 = P1 XOR P2. It explains WEP's collapse, why nonces must never repeat, and why CTR/OFB demand unique counter values. One line of algebra — used in an answer, it reads as real understanding.",
            },
            examQuestions: [
              {
                q: "Distinguish stream ciphers from block ciphers. Explain synchronous and self-synchronizing stream ciphers and state why RC4 was withdrawn from TLS and WEP.",
                marks: 7,
                outline: [
                  "Stream: keystream XOR, bit/byte at a time; block: fixed blocks via modes",
                  "Synchronous: keystream from key alone (OFB, CTR)",
                  "Self-synchronizing: keystream from previous ciphertext (CFB)",
                  "RC4: KSA permutes 256-byte state; PRGA emits bytes",
                  "WEP: 24-bit IV reuse -> keystream reuse -> C1 XOR C2 = P1 XOR P2",
                  "TLS: output biases (FMS and successors) leaked plaintext bytes",
                  "Banned in TLS in 2015; ChaCha20 is the modern replacement",
                ],
              },
              {
                q: "Show algebraically why a keystream must never repeat under the same key.",
                marks: 3,
                outline: [
                  "C1 = P1 XOR KS; C2 = P2 XOR KS",
                  "C1 XOR C2 = P1 XOR P2 (keystream cancels)",
                  "Language redundancy or a known crib recovers both plaintexts",
                ],
              },
              {
                q: "Differentiate link encryption from end-to-end encryption.",
                marks: 3,
                outline: [
                  "Link: every hop decrypts and re-encrypts; hides traffic flow, exposes nodes",
                  "End-to-end: source and destination only; protects data, leaks metadata",
                  "Real systems layer both (VPN + TLS)",
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
      title: "Public Key Encryption",
      summary:
        "Unit III is the asymmetric half of the syllabus: public-key principles and trapdoor functions, RSA with Euler's totient and its attacks, key management, Diffie-Hellman key exchange with primitive roots, elliptic curve cryptography, message authentication requirements and MACs, hash functions with SHA and HMAC, and digital signatures with the Digital Signature Standard.",
      chapter: {
        number: "03",
        title: "Public Keys, Hashes and Signatures",
        intro:
          "Unit III covers the principles of public-key cryptosystems, the RSA algorithm with Euler's totient and the factoring problem, key management, Diffie-Hellman key exchange with primitive roots, elliptic curve cryptography, authentication requirements and functions, MACs, hash functions with SHA and HMAC, and digital signatures with the DSS.",
        inOneBreath:
          "Public-key crypto uses a key pair: public to encrypt/verify, private to decrypt/sign; RSA needs phi(n) = (p-1)(q-1) with e*d = 1 mod phi(n) — e.g. G(7) with e=3, d=11, n=15 encrypts to 13 and back to 7. Diffie-Hellman builds a shared secret from public q and primitive root alpha: q=11, alpha=7, XA=3, XB=6 gives YA=2, YB=4, shared K=9. Hashes (SHA-2) fingerprint but authenticate nothing alone; HMAC adds a secret key; signatures sign hashes with the private key — DSS does it on the discrete-log problem.",
        sections: [
          {
            number: "3.1",
            title: "Principles of public-key cryptosystems",
            body: [
              "A public-key (asymmetric) cryptosystem uses a key pair: a public key published freely and a private key kept secret. The model has six ingredients: plaintext, encryption algorithm, public and private keys, ciphertext, decryption algorithm — sender encrypts with the receiver's public key; only the matching private key decrypts. The mathematical engine is the trapdoor one-way function: easy to compute in the forward direction (encrypt), computationally infeasible to invert without the trapdoor secret (the private key) — factoring for RSA, discrete logarithm for Diffie-Hellman and DSS, elliptic-curve discrete logarithm for ECC.",
              "The three uses of a key pair define the syllabus. Encryption/decryption: B's public key encrypts, B's private key decrypts — confidentiality. Digital signature: A's private key signs, A's public key verifies — authentication and non-repudiation (Unit III's last section). Key exchange: two parties combine public values to agree on a shared symmetric key — Diffie-Hellman (the bridge to this unit's protocols). The requirements a scheme must satisfy: the forward computation is easy; deriving the private key from the public key is infeasible; encryption survives a chosen-plaintext attack (the public key is public — attackers may encrypt anything); and either key can be applied in either order (for signature-style schemes).",
              "The cost comparison answers Jun 2025's compare question: public-key algorithms are roughly 1000x slower than symmetric ones, so real systems are hybrids — public-key crypto exchanges a fresh session key, symmetric crypto carries the traffic (TLS does exactly this, PGP too). The exam angle: state the six ingredients, define the trapdoor one-way function, list the three uses with which key does what, and close with the hybrid rule 'public keys distribute secrets, symmetric keys protect data'.",
            ],
            keyTerms: [
              { term: "Public-key cryptosystem", definition: "Key pair cryptography: public key encrypts/verifies, private key decrypts/signs." },
              { term: "Trapdoor one-way function", definition: "Easy forward, infeasible inverse — unless you hold the trapdoor (the private key)." },
              { term: "Hybrid encryption", definition: "Public-key crypto distributes a session key; symmetric crypto carries the bulk data." },
              { term: "Chosen-plaintext resistance", definition: "Security must hold even though anyone may encrypt with the public key." },
            ],
            bullets: [
              "Six ingredients: plaintext, encryption alg, public key, private key, ciphertext, decryption alg.",
              "Receiver's public key encrypts (confidentiality); sender's private key signs (non-repudiation).",
              "Trapdoor one-way functions: factoring (RSA), discrete log (DH, DSS), ECDLP (ECC).",
              "Requirements: easy forward, infeasible private-key derivation, chosen-plaintext safe.",
              "Public-key is ~1000x slower — real systems are hybrids (TLS, PGP).",
              "Public keys distribute secrets; symmetric keys protect data.",
            ],
            diagram: {
              kind: "compare",
              title: "Symmetric vs public-key cryptography",
              caption: "Jun 2025's compare question in one picture — keys, algorithms and the speed gap.",
              left: {
                heading: "Symmetric (private key)",
                items: [
                  "One shared secret key both ends",
                  "Algorithms: DES, 3DES, AES, ChaCha20",
                  "Fast — bulk data encryption",
                  "Problem: n(n-1)/2 key distribution",
                ],
              },
              right: {
                heading: "Public key (asymmetric)",
                items: [
                  "Key pair: public published, private held",
                  "Algorithms: RSA, Diffie-Hellman, DSA, ECC",
                  "~1000x slower — used for keys and signatures",
                  "Solves distribution; enables signatures",
                ],
              },
            },
            table: {
              caption: "Which key does what — the three uses.",
              headers: ["Use", "Sender applies", "Receiver applies", "Provides"],
              rows: [
                ["Encryption", "receiver's public key", "receiver's private key", "confidentiality"],
                ["Digital signature", "sender's private key", "sender's public key", "authentication + non-repudiation"],
                ["Key exchange (DH)", "own private + peer public value", "own private + peer public value", "shared symmetric session key"],
              ],
            },
            callout: {
              type: "exam",
              title: "The two-way table",
              body: "Examiners love the direction slip: encryption uses the RECEIVER's public key, signatures use the SENDER's private key. Write the three-row table (encrypt / sign / exchange) in any public-key question and the direction confusion disappears.",
            },
            examQuestions: [
              {
                q: "Compare public and private key cryptography. Also list various algorithm for each.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "State the requirements a public-key cryptosystem must satisfy and explain the trapdoor one-way function idea with one example.",
                marks: 7,
                outline: [
                  "Key pair: public published, private kept secret",
                  "Easy: encryption with public key, decryption with private key",
                  "Infeasible: deriving the private key from the public key",
                  "Infeasible: recovering plaintext from public key + ciphertext",
                  "Must resist chosen-plaintext attack (public key is public)",
                  "Trapdoor one-way function: factoring (RSA) or discrete log (DH)",
                  "Both parties can use the pair in either order for signatures",
                ],
              },
              {
                q: "Why do real systems combine symmetric and public-key cryptography?",
                marks: 3,
                outline: [
                  "Public-key solves key distribution and signatures",
                  "Symmetric is ~1000x faster for bulk data",
                  "Hybrid: public key carries a fresh session key; AES carries the traffic",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "The RSA algorithm",
            body: [
              "RSA (Rivest-Shamir-Adleman, 1977) is the factoring-based public-key cipher. Key generation: pick two large primes p and q; compute n = p·q and Euler's totient phi(n) = (p-1)(q-1) — the count of integers below n coprime to n; choose e with gcd(e, phi(n)) = 1; compute d = e^(-1) mod phi(n) (the modular inverse). Publish (e, n); keep d (and p, q) secret. Encryption for message M < n is C = M^e mod n; decryption is M = C^d mod n. Correctness rests on Euler's theorem: M^(e·d) = M^(1 mod phi(n)) = M mod n when gcd(M, n) = 1.",
              "The May 2024 numeric is the canonical walkthrough: alphabet G is the 7th letter, and the exam gives e = 3, d = 11, n = 15. Encryption: C = 7^3 mod 15 = 343 mod 15 = 13. Verification by decryption: 13^11 mod 15 — 13^2 = 169 = 4 mod 15, 13^4 = 4^2 = 1 mod 15, so 13^11 = 13^8 · 13^2 · 13^1 = 1 · 4 · 13 = 52 = 7 mod 15: back to G. Consistency check: n = 15 = 3 x 5, so phi(15) = (3-1)(5-1) = 8, and e·d = 33 = 4·8 + 1 = 1 mod 8 — the key pair is valid. G encrypts to 13 and decrypts back to 7.",
              "Security and attacks complete the picture: RSA's hardness is the factoring problem — recovering p and q from n. Euler's totient is the linchpin: phi(n) = (p-1)(q-1), and knowing it reveals d; deriving phi without factoring is as hard as factoring. Attacks: brute force on small n (hence 2048+ bits), mathematical advances in factoring (hence key-size growth), chosen-ciphertext attacks (defeated by OAEP padding, since raw RSA is deterministic and malleable), and timing attacks measuring decryption time (defeated by blinding — randomizing the input). The exam angle: state the key-generation steps, run the G -> 13 -> 7 trace, define phi and the factoring problem, list three attacks with defences — May 2023, May 2024 and Jun 2025 each asked a piece of exactly this.",
            ],
            keyTerms: [
              { term: "RSA", definition: "Public-key cipher on the factoring problem: C = M^e mod n, M = C^d mod n." },
              { term: "Euler's totient phi(n)", definition: "Count of integers below n coprime to n; phi(pq) = (p-1)(q-1) for distinct primes." },
              { term: "Factoring problem", definition: "Recovering p and q from n = pq — the hardness assumption behind RSA." },
              { term: "OAEP padding", definition: "Randomized padding defeating chosen-ciphertext attacks on raw RSA." },
              { term: "Blinding", definition: "Randomizing the decryption input to defeat timing attacks on RSA implementations." },
            ],
            bullets: [
              "Key generation: p, q primes; n = pq; phi = (p-1)(q-1); gcd(e, phi) = 1; d = e^-1 mod phi.",
              "Encrypt C = M^e mod n with the public key; decrypt M = C^d mod n with the private key.",
              "Worked numeric (May 2024): G = 7, e = 3, d = 11, n = 15 -> C = 13 -> back to 7.",
              "phi(15) = 8 and e·d = 33 = 1 mod 8 — the consistency check.",
              "Attacks: brute force (small n), chosen ciphertext (raw RSA), timing; defences: key size, OAEP, blinding.",
              "Security rests on factoring — knowing phi(n) reveals d, and finding phi is as hard as factoring.",
            ],
            diagram: {
              kind: "flow",
              title: "RSA end to end",
              caption: "The May 2024 walkthrough: letter G through encryption and back again.",
              steps: [
                { label: "G -> 7", note: "alphabet position (A=1 ... Z=26)" },
                { label: "Encrypt", note: "C = 7^3 mod 15 = 343 mod 15 = 13" },
                { label: "Ciphertext 13", note: "travels over the insecure channel" },
                { label: "Decrypt", note: "13^11 mod 15: 13^2=4, 13^4=1 -> 1·4·13 = 52 mod 15" },
                { label: "7 -> G", note: "plaintext recovered — verification complete" },
              ],
            },
            table: {
              caption: "RSA attacks and their defences.",
              headers: ["Attack", "How it works", "Defence"],
              rows: [
                ["Brute force", "tries small key spaces / factors small n", "2048+ bit keys"],
                ["Mathematical factoring advances", "better factoring algorithms shrink n's safety", "grow key size; monitor records"],
                ["Chosen ciphertext", "exploits deterministic raw RSA (malleability)", "OAEP randomized padding"],
                ["Timing attack", "measures modular-exponentiation time", "constant-time code, blinding"],
                ["Common modulus / small e misuse", "shared n or e=3 without padding", "unique n per user, padded e usage"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "rsa.py — the May 2024 exam numeric, runnable",
              code: `# May 2024 numeric: alphabet G -> number 7, e = 3, d = 11, n = 15
e, d, n = 3, 11, 15
m = ord("G") - ord("A") + 1          # G is the 7th letter -> 7

c = pow(m, e, n)                     # C = M^e mod n
print(c)                             # 13  (7^3 = 343 = 22*15 + 13)
back = pow(c, d, n)                  # M = C^d mod n
print(back)                          # 7   -> letter G again
print("phi(15) = 8, e*d mod phi =", (e * d) % 8)   # 1: keys are inverses`,
            },
            callout: {
              type: "exam",
              title: "RSA in all three papers",
              body: "May 2023 asked Euler's totient and the factoring problem; May 2024 asked the G/e=3/d=11/n=15 numeric; Jun 2025 asked encryption, decryption and the attacks. RSA is the most reliable question in this paper — prepare key generation, the numeric trace, phi, and three attacks with defences.",
            },
            examQuestions: [
              {
                q: "What is Euler's totient? Also explain the Factoring problem of RSA algorithm.",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Consider a plain text alphabet G. Using RSA algorithm and the value as e=3, d=11 and n=15, find out what this plain text alphabet encrypt to, and verify that upon decryption it transform back to G.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Explain Encryption and Decryption in RSA algorithm. Also discuss various attacks on it.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
            ],
          },
          {
            number: "3.3",
            title: "Key management for public keys",
            body: [
              "Public-key cryptography changes the key-management problem: it solves distribution (public keys can travel openly) and creates authentication (how do you know the key labelled 'Bob' really belongs to Bob?). Stallings's four techniques escalate in trust. Public announcement: users broadcast keys (email signatures, key servers) — trivial but forgeable, since anyone can announce anything. Publicly available directory: a trusted entity maintains a directory of {name, public key} entries, authenticated by the authority — better, but the directory is a single point of compromise and staleness.",
              "Public-key authority: the directory becomes interactive — parties request each other's keys in real time, and every response is signed and timestamped by the authority, so stale or forged entries cannot be replayed. Public-key certificates: the authority's signature moves onto the certificate itself — a structure binding identity, public key, validity period and the issuing CA's signature; users exchange certificates directly with no online authority per session, and anyone can verify the chain up to a root CA they trust. X.509 (Unit IV) is the standard format of exactly this artifact, and PKI is the machinery that issues, stores, revokes and chains those certificates.",
              "Symmetric keys still need their own management: a KDC (key distribution centre) shares a master key with each user and issues per-session keys on request (Kerberos is the deployed realization, Unit IV); hierarchical key control and rekeying handle large groups; key lifecycle — generation, distribution, storage, rotation, revocation, destruction — applies to both key types. The exam angle: name the four distribution techniques in escalating order with the weakness each fixes, then one line on the KDC for symmetric keys and one on the certificate chain for asymmetric keys.",
            ],
            keyTerms: [
              { term: "Public-key authority", definition: "An interactive trusted service that answers key requests with signed, timestamped entries." },
              { term: "Public-key certificate", definition: "A CA-signed binding of identity, public key and validity — verifiable offline up to a trusted root." },
              { term: "KDC (key distribution centre)", definition: "A trusted server sharing master keys with users and issuing fresh session keys on demand." },
              { term: "Key lifecycle", definition: "Generate, distribute, store, rotate, revoke, destroy — managed for both key types." },
            ],
            bullets: [
              "Four distribution techniques: announcement, directory, authority, certificates.",
              "Announcement is forgeable; the directory is a compromise point.",
              "Authority adds real-time signed responses; certificates make trust portable.",
              "A certificate binds identity + public key + validity + CA signature.",
              "Symmetric keys: KDC-issued session keys (Kerberos) or manual distribution.",
              "Lifecycle: generation -> distribution -> storage -> rotation -> revocation -> destruction.",
            ],
            diagram: {
              kind: "cycle",
              title: "The key lifecycle",
              caption: "Every key — symmetric or public — moves around this loop; skipping revoke and rotate is how systems rot.",
              steps: [
                { label: "Generate", note: "strong randomness, correct size" },
                { label: "Distribute", note: "certificates for public keys, KDC for session keys" },
                { label: "Use", note: "encrypt, sign, exchange" },
                { label: "Rotate", note: "periodic rekeying limits blast radius" },
                { label: "Revoke", note: "CRL/OCSP or KDC blacklists" },
                { label: "Destroy", note: "secure erasure of retired keys" },
              ],
            },
            table: {
              caption: "The four public-key distribution techniques.",
              headers: ["Technique", "How it works", "Weakness fixed / remaining"],
              rows: [
                ["Public announcement", "users broadcast keys freely", "fixes secrecy; forgery remains"],
                ["Public directory", "trusted entity lists name -> key", "fixes forgery; staleness and compromise remain"],
                ["Public-key authority", "interactive signed, timestamped responses", "fixes staleness; needs online service"],
                ["Public-key certificates", "CA-signed portable credentials", "fixes online need; requires PKI and revocation"],
              ],
            },
            callout: {
              type: "tip",
              title: "Escalating trust, one sentence each",
              body: "The four techniques are a ladder: announcement (anyone can lie), directory (an authority vouches), authority (vouches in real time, signed), certificate (the vouching travels with the key). Name the ladder in order and each rung's fixed weakness — that structure is the 7-mark answer.",
            },
            examQuestions: [
              {
                q: "Explain the four techniques for distributing public keys — announcement, directory, authority and certificates — and state the weakness each one fixes.",
                marks: 7,
                outline: [
                  "Announcement: broadcast keys; forgeable",
                  "Directory: trusted listing of name -> key; staleness risk",
                  "Authority: interactive signed + timestamped responses; replay-safe",
                  "Certificates: portable CA-signed bindings; offline verification",
                  "Certificate binds identity, public key, validity period",
                  "Verification chains up to a trusted root CA",
                  "Symmetric side: KDC issues per-session keys",
                ],
              },
              {
                q: "What does a public-key certificate bind, and who signs it?",
                marks: 3,
                outline: [
                  "Identity, public key, validity period, issuer, serial, signature algorithm",
                  "Signed by a certificate authority (CA)",
                  "Verified by chaining signatures to a trusted root",
                ],
              },
              {
                q: "Why does a KDC exist alongside public-key infrastructure?",
                marks: 2,
                outline: [
                  "Session keys for symmetric traffic must still be distributed",
                  "The KDC issues fresh per-session keys from master keys",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Diffie-Hellman key exchange",
            body: [
              "Diffie-Hellman (1976) lets two strangers who share no secret create one over an eavesdropped channel. Public numbers: a prime q and a primitive root alpha modulo q — alpha whose powers generate every non-zero residue 1..q-1. Each side picks a private random exponent below q: A chooses XA and publishes YA = alpha^XA mod q; B chooses XB and publishes YB = alpha^XB mod q. Each then computes the shared secret from the other's public value: K = YB^XA mod q = YA^XB mod q — both equal alpha^(XA·XB) mod q, since modular exponentiation commutes. The eavesdropper sees q, alpha, YA, YB but cannot compute K without solving the discrete logarithm problem.",
              "The May 2024 numeric, fully worked: q = 11, alpha = 7, XA = 3, XB = 6. YA = 7^3 mod 11 = 343 mod 11 = 2. YB = 7^6 mod 11: 7^2 = 49 = 5 mod 11, 7^3 = 5·7 = 35 = 2 mod 11, so 7^6 = 2^2 = 4. A computes K = YB^XA = 4^3 = 64 = 9 mod 11; B computes K = YA^XB = 2^6 = 64 = 9 mod 11. Shared secret K = 9. The May 2024 companion question verifies the toolkit: 75 mod 119 = 75 and 89 mod 119 = 89 (both smaller than the modulus); a primitive root of 11 is 2 (its powers 2,4,8,5,10,9,7,3,6,1 cover all ten residues); a primitive root of 5 is 2 (2,4,3,1).",
              "Weaknesses and fixes complete the answer: DH by itself authenticates nobody, so a man-in-the-middle can substitute its own YA/YB and run two separate exchanges — the fix is authenticated DH (certificates or station-to-station signing). The clogging attack floods a host with exponentiations — the fix is cookies (worth checking before expensive math; IKE does this). The exam angle: state the public/private/shared formulas, run the q=11 alpha=7 trace end to end, define primitive root with the residue-listing check, and name MITM + cookies — Jun 2025 asked primitive root + algorithm with example; May 2024 asked the full numeric.",
            ],
            keyTerms: [
              { term: "Diffie-Hellman", definition: "Key exchange over a public channel: K = alpha^(XA·XB) mod q from published YA, YB." },
              { term: "Primitive root", definition: "alpha is a primitive root mod q if its powers generate every non-zero residue 1..q-1." },
              { term: "Discrete logarithm problem", definition: "Recovering X from alpha^X mod q — the hardness assumption protecting DH." },
              { term: "Man-in-the-middle (DH)", definition: "Unauthenticated DH lets an attacker substitute its own public values and split the exchange." },
              { term: "Clogging attack", definition: "Flooding a host with costly exponentiations; countered by cookies before the math." },
            ],
            bullets: [
              "Public: prime q, primitive root alpha; A: YA = alpha^XA mod q; B: YB = alpha^XB mod q.",
              "Shared secret: K = YB^XA mod q = YA^XB mod q = alpha^(XA XB) mod q.",
              "Worked (May 2024): q=11, alpha=7, XA=3, XB=6 -> YA=2, YB=4, K=9.",
              "Primitive root check: powers of 2 mod 11 give all residues 1..10; mod 5 give 1..4.",
              "Trivial mod facts from the same question: 75 mod 119 = 75, 89 mod 119 = 89.",
              "Security = discrete log; weakness = no authentication -> MITM; fix = certificates/cookies.",
            ],
            diagram: {
              kind: "flow",
              title: "Diffie-Hellman, worked",
              caption: "The May 2024 numbers: both sides land on K = 9 without ever transmitting it.",
              steps: [
                { label: "Agree q = 11, alpha = 7", note: "public parameters" },
                { label: "A publishes YA", note: "YA = 7^3 mod 11 = 2" },
                { label: "B publishes YB", note: "YB = 7^6 mod 11 = 4" },
                { label: "A computes K", note: "4^3 mod 11 = 64 mod 11 = 9" },
                { label: "B computes K", note: "2^6 mod 11 = 64 mod 11 = 9 — shared" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "dh.py — the May 2024 numeric plus primitive-root checks",
              code: `q, alpha = 11, 7                    # common prime and primitive root
xa, xb = 3, 6                       # A's and B's private keys

ya = pow(alpha, xa, q)              # YA = alpha^XA mod q
yb = pow(alpha, xb, q)              # YB = alpha^XB mod q
print(ya, yb)                       # 2 and 4

ka = pow(yb, xa, q)                 # A computes K = YB^XA mod q
kb = pow(ya, xb, q)                 # B computes K = YA^XB mod q
print(ka, kb)                       # 9 and 9 - the shared secret

# primitive roots: powers of 2 hit every residue 1..q-1
print(sorted(pow(2, i, 11) for i in range(1, 11)))   # root of 11
print(sorted(pow(2, i, 5) for i in range(1, 5)))     # root of 5`,
            },
            callout: {
              type: "exam",
              title: "The guaranteed numerical",
              body: "Diffie-Hellman appeared as a full 14-mark numerical in May 2024 and again as algorithm + example in Jun 2025. Rehearse the q=11/alpha=7 trace until YA, YB and K=9 come out in under two minutes — and know why 2 is a primitive root of 11 and of 5.",
            },
            examQuestions: [
              {
                q: "Evaluate using Diffie-Hellman key exchange technique. Users A and B use a common prime q = 11 and a primitive root alpha = 7. (i) If user A has private key XA = 3, what is A's public key YA? (ii) If user B has private key XB = 6, what is B's public key YB?",
                marks: 14,
                appearances: ["May 2024"],
              },
              {
                q: "What is Primitive Root? Explain Diffie-Hellman Key exchange algorithm with example.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Find: (i) 75 mod 119 (ii) 89 mod 119 (iii) a primitive root of 11 (iv) a primitive root of 5.",
                marks: 7,
                appearances: ["May 2024"],
              },
            ],
          },
          {
            number: "3.5",
            title: "Elliptic curve cryptography",
            body: [
              "Elliptic curve cryptography (ECC) builds public-key cryptography on a different hard problem. An elliptic curve over a prime field is the set of points satisfying y^2 = x^3 + ax + b (mod p), with the discriminant 4a^3 + 27b^2 != 0 guaranteeing smoothness — plus a point at infinity serving as the identity. Points form an abelian group under 'addition': to add P and Q, draw the line through them, find its third intersection with the curve, and reflect it across the x-axis; doubling P uses the tangent instead. Scalar multiplication kP repeats the addition — easy forward, and inverting it (recovering k from kP) is the elliptic-curve discrete logarithm problem, with no sub-exponential algorithm known.",
              "The payoff is key size. The classical discrete logarithm over Zp* admits index-calculus sub-exponential attacks; the ECDLP does not, so ECC matches RSA security at far smaller parameters: 160-bit ECC ~ 1024-bit RSA, 256-bit ECC ~ 3072-bit RSA, 384 ~ 7680, 512 ~ 15360. Smaller keys mean smaller certificates, faster handshakes and battery-friendly math — which is why TLS 1.3, Bitcoin (ECDSA/secp256k1) and every phone use curves. The schemes mirror the classical ones: ECDH is Diffie-Hellman on curve points; ECDSA is the Digital Signature Algorithm on curves; both standardized by NIST curves P-256, P-384 and friends.",
              "A worked micro-example makes the algebra tangible (a toy curve y^2 = x^3 + 2x + 2 over 17): the points include P = (5,1) and 2P = (6,3) — the tangent at P has slope 6, and reflecting the third intersection gives the doubling result. Real curves use 256-bit primes and the arithmetic is identical in kind. The exam angle: write the curve equation, state the group operation and the ECDLP hardness claim, give the ECC-to-RSA key-size table, and name ECDH and ECDSA as the two deployed schemes.",
            ],
            keyTerms: [
              { term: "Elliptic curve", definition: "Point set of y^2 = x^3 + ax + b mod p plus the point at infinity, forming an abelian group." },
              { term: "Point addition", definition: "Line through P and Q meets the curve again; reflect that third point to get P+Q." },
              { term: "ECDLP", definition: "Recover k from kP — no sub-exponential algorithm known, unlike classical discrete log." },
              { term: "ECDH / ECDSA", definition: "Diffie-Hellman key exchange and digital signatures instantiated on elliptic curves." },
              { term: "NIST P-256", definition: "A widely deployed 256-bit standardized curve — roughly RSA-3072 strength." },
            ],
            bullets: [
              "Curve equation: y^2 = x^3 + ax + b mod p, 4a^3 + 27b^2 != 0.",
              "Points form a group: chord/tangent construction, reflection, point at infinity as identity.",
              "Easy: kP by repeated addition. Hard: k from kP (ECDLP).",
              "Key sizes: ECC 160 ~ RSA 1024; ECC 256 ~ RSA 3072; ECC 384 ~ RSA 7680.",
              "Schemes: ECDH (key exchange) and ECDSA (signatures); secp256k1 runs Bitcoin.",
              "Benefits: smaller keys and certificates, faster handshakes, lower power.",
            ],
            diagram: {
              kind: "compare",
              title: "ECC vs RSA at equal security",
              caption: "Same strength, a fraction of the key — the reason curves took over handshakes.",
              left: {
                heading: "RSA",
                items: [
                  "Hardness: integer factoring",
                  "Sub-exponential factoring advances force bigger keys",
                  "1024/3072/15360-bit keys for 80/128/256-bit security",
                  "Large certificates, slower handshakes",
                ],
              },
              right: {
                heading: "ECC",
                items: [
                  "Hardness: elliptic-curve discrete log",
                  "No sub-exponential attack known on good curves",
                  "160/256/512-bit keys for 80/128/256-bit security",
                  "Small certificates, fast, power-friendly",
                ],
              },
            },
            table: {
              caption: "Equivalent security levels — ECC vs RSA key sizes.",
              headers: ["Symmetric strength", "ECC key (bits)", "RSA key (bits)", "Typical use"],
              rows: [
                ["80 bits", "160", "1024", "legacy IoT"],
                ["112 bits", "224", "2048", "minimum current"],
                ["128 bits", "256", "3072", "TLS default (P-256)"],
                ["192 bits", "384", "7680", "government long-term"],
                ["256 bits", "512", "15360", "top-tier assurance"],
              ],
            },
            callout: {
              type: "tip",
              title: "The one-line hardness contrast",
              body: "Classical discrete log has index calculus (sub-exponential); the elliptic-curve discrete log has no known sub-exponential attack — that single sentence is why ECC matches RSA with keys ten times smaller, and it is the line the examiner wants in any ECC answer.",
            },
            examQuestions: [
              {
                q: "What is an elliptic curve over a finite field? Explain the point addition operation, why ECC needs smaller keys than RSA, and name the two deployed ECC schemes.",
                marks: 7,
                outline: [
                  "y^2 = x^3 + ax + b mod p, discriminant nonzero; point at infinity = identity",
                  "Addition: chord through P, Q -> third intersection -> reflect",
                  "Doubling uses the tangent at P",
                  "Scalar multiplication kP is easy; recovering k is ECDLP — hard",
                  "No sub-exponential attack (no index calculus) on good curves",
                  "Key table: ECC 256 ~ RSA 3072 for 128-bit security",
                  "Schemes: ECDH for exchange, ECDSA for signatures",
                ],
              },
              {
                q: "Which ECC key size matches RSA-3072, and why does that equivalence hold?",
                marks: 3,
                outline: [
                  "256 bits (NIST P-256)",
                  "RSA-3072 gives 128-bit security against factoring",
                  "ECDLP's lack of sub-exponential attacks makes 256-bit curves equally hard",
                ],
              },
              {
                q: "What role does the point at infinity play on an elliptic curve?",
                marks: 2,
                outline: [
                  "It is the group identity element",
                  "P + O = P; it also catches vertical-chord doublings",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Message authentication: requirements, functions and MACs",
            body: [
              "Message authentication is a procedure verifying that a received message is authentic — from its claimed source, unmodified in transit, timely (not replayed or reordered), and (for non-repudiation) attributable. The requirements list the attacks it must stop: disclosure (confidentiality's job, but authentication often rides along), traffic analysis, content modification, sequence modification (deletion, reordering, replay of parts), timing modification (delay and replay), source repudiation and destination repudiation. May 2023's question asks exactly which attacks message authentication addresses — the answer is content/sequence/timing modification plus masquerade, and repudiation when signatures join.",
              "Three function families provide it. Message encryption: ciphertext of the whole message proves something — symmetric encryption's ciphertext is unforgeable by outsiders, giving weak implicit authentication (but anyone who shares the key could have produced it, and the receiver cannot prove origin to a third party); public-key encryption of a hash with the sender's private key is the signature path. Message authentication code: a fixed-length tag MAC = C_K(M) computed from the message under a shared secret key and appended — verification recomputes and compares; it authenticates and detects modification but provides no confidentiality and no third-party non-repudiation (both parties hold the same key). Hash function: a digest with no key — detects accidental corruption, authenticates nothing by itself (anyone can recompute it).",
              "The Jun 2025 question asks how a MAC achieves authentication AND confidentiality — the answer is the combination: MAC alone authenticates; encryption alone (symmetric) mostly encrypts; together, MAC-then-encrypt or encrypt-then-MAC delivers both (encrypt-then-MAC is the modern preference, and AEAD modes like GCM do both in one pass). A worked flow: sender computes tag = MAC(K, M), then sends (E_K2(M), tag) — the receiver decrypts, recomputes the tag over the plaintext, and compares. The exam angle: list the authentication requirements/attacks, name the three function families with one weakness each, and state the combination rule for authentication plus confidentiality.",
            ],
            keyTerms: [
              { term: "Message authentication", definition: "Verifying origin, integrity, timeliness — and attribution when signatures are used." },
              { term: "MAC", definition: "C_K(M): a fixed-length tag from the message plus a shared secret key; unforgeable without K." },
              { term: "Encrypt-then-MAC", definition: "Encrypt the message, then MAC the ciphertext — the modern AEAD-preferred order." },
              { term: "Content modification", definition: "Changing part of a message without detection — the primary attack authentication stops." },
              { term: "Source repudiation", definition: "The sender denying having sent the message — stopped only by signatures, not MACs." },
            ],
            bullets: [
              "Authentication requirements: content, sequence and timing modification; masquerade; repudiation.",
              "Three functions: encryption, MAC, hash — each with a different guarantee.",
              "MAC = tag under a shared key: authentication without confidentiality.",
              "Symmetric encryption gives weak implicit authentication; public-key does not authenticate the sender.",
              "Hash alone detects corruption, not tampering (no secret).",
              "Authentication + confidentiality = encrypt-then-MAC (or AEAD like GCM).",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing an authentication function",
              caption: "Three tools, three gaps — the right answer usually combines two of them.",
              start: "Need message authentication",
              branches: [
                { label: "MAC (shared key)", outcome: "authenticates source and content; no confidentiality, no third-party proof", good: true },
                { label: "Signature (private key)", outcome: "authentication + non-repudiation; slower — sign the hash, not the message", good: true },
                { label: "Unkeyed hash alone", outcome: "anyone can recompute — detects accidents, not attackers", good: false },
              ],
            },
            table: {
              caption: "The three authentication functions and their gaps.",
              headers: ["Function", "What it proves", "What it misses"],
              rows: [
                ["Symmetric encryption", "source within key-sharing circle (implicit)", "origin provable to third party; integrity of order"],
                ["MAC (K, M)", "origin + content to any key holder", "confidentiality; non-repudiation (shared key)"],
                ["Hash (no key)", "accidental corruption detection", "any authentication — attacker recomputes freely"],
                ["Signature (hash, private key)", "origin + integrity + non-repudiation", "confidentiality; speed (sign digests only)"],
              ],
            },
            callout: {
              type: "tip",
              title: "MAC vs signature, one line apart",
              body: "Both authenticate. The MAC shares one key between the parties — so neither can prove origin to a judge. The signature uses a private key only the sender holds — that asymmetry is what buys non-repudiation. Write this contrast whenever the question names both.",
            },
            examQuestions: [
              {
                q: "What types of attacks are addressed by message authentication?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "How message authentication code can be used to achieve message authentication and confidentiality?",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Explain the three approaches to message authentication — encryption, MAC and hash — and state the weakness of each used alone.",
                marks: 7,
                outline: [
                  "Requirements: content/sequence/timing modification, masquerade, repudiation",
                  "Symmetric encryption: implicit source authentication within key holders",
                  "Its gap: no third-party proof; order not protected",
                  "MAC: tag = C_K(M) under shared key — authenticates content and source",
                  "Its gap: no confidentiality, no non-repudiation",
                  "Unkeyed hash: detects corruption only — attacker recomputes",
                  "Combination: encrypt-then-MAC gives authentication + confidentiality",
                ],
              },
              {
                q: "Why does a MAC provide no non-repudiation?",
                marks: 3,
                outline: [
                  "Sender and receiver hold the same key K",
                  "Either party could have computed the tag",
                  "Only a private-key signature isolates the originator",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Hash functions, SHA and HMAC",
            body: [
              "A cryptographic hash function maps an arbitrary-length message to a fixed-length digest H(M) with four properties: easy to compute for any input; one-way (preimage resistance — infeasible to find a message for a given digest); weak collision resistance (second-preimage — infeasible to find M' != M with H(M') = H(M)); and strong collision resistance (infeasible to find any two messages with the same digest). Benefits the May 2023 paper asked for: integrity checking of files and downloads, password storage (store the hash, never the password), fast digital signatures (sign the digest, not the whole message), duplicate detection and fingerprinting, key derivation and pseudo-random generation.",
              "The Jun 2025 twist is the justification question: 'hashing does not ensure integrity of message in network communication.' True — because there is no secret. A worked example: sender sends (M, H(M)); an attacker intercepts, replaces M with M', recomputes H(M') in the open, and forwards (M', H(M')) — the receiver's check passes. Integrity against adversaries needs a secret: a MAC (HMAC) or a signature. Pure hashing detects accidental corruption (bit errors, bad downloads) but is an open door to deliberate tampering — that distinction is the whole answer.",
              "The SHA family and HMAC are the named algorithms. SHA-1 (160-bit) produced the first practical collision in 2017 (SHAttered) and is deprecated; SHA-2 (SHA-224/256/384/512) is the current standard, built as a Merkle-Damgard compression over 512-bit blocks; SHA-3 (Keccak, sponge construction) arrived as a clean-slate backup. HMAC structures the secret: tag = H(K XOR opad || H(K XOR ipad || M)) — the inner hash digests the message under a key-derived pad, the outer hash wraps the result; the two-pass structure defeats length-extension attacks that plague naive H(K || M), which is why TLS, IPsec and JWT all use HMAC. The exam angle: define the four properties, list the benefits, run the tampering example, and write the HMAC composition.",
            ],
            keyTerms: [
              { term: "Preimage resistance", definition: "Given H(M), finding any M that hashes to it is infeasible — one-wayness." },
              { term: "Strong collision resistance", definition: "Finding any pair M != M' with H(M) = H(M') is infeasible; birthday attack costs 2^(n/2)." },
              { term: "SHA-2", definition: "The current hash standard family (224/256/384/512 bits); SHA-1 is deprecated after the 2017 collision." },
              { term: "HMAC", definition: "H(K XOR opad || H(K XOR ipad || M)) — a keyed MAC whose two-pass structure defeats length extension." },
              { term: "Birthday attack", definition: "Finding collisions among 2^(n/2) hashed variants of a 2n-bit-hash message space." },
            ],
            bullets: [
              "Four properties: easy compute, preimage, second-preimage and strong collision resistance.",
              "Benefits: integrity checks, password storage, fast signatures, dedup, key derivation.",
              "Hashing alone authenticates nothing — the attacker recomputes the hash too (Jun 2025's justification).",
              "SHA-1: 160 bits, collision found 2017 — deprecated; SHA-256 is the default.",
              "SHA-3 (Keccak sponge) is the clean-slate alternative.",
              "HMAC = outer hash over inner hash with opad/ipad — defeats length-extension attacks.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From message to digest to HMAC",
              caption: "Hashing is open to all; HMAC wraps the same machinery in a secret.",
              stages: [
                { label: "Message M", note: "any length" },
                { label: "Padding + 512-bit blocks", note: "Merkle-Damgard feed-forward" },
                { label: "Compression rounds", note: "SHA-2: 64/80 rounds per block" },
                { label: "Digest H(M)", note: "fixed 256/512 bits" },
                { label: "HMAC", note: "outer hash over (key-padded) inner digest" },
              ],
            },
            table: {
              caption: "The hash family at a glance.",
              headers: ["Algorithm", "Digest size", "Structure", "Status"],
              rows: [
                ["MD5", "128 bits", "Merkle-Damgard", "broken collisions — never use"],
                ["SHA-1", "160 bits", "Merkle-Damgard", "collision 2017 — deprecated"],
                ["SHA-256", "256 bits", "Merkle-Damgard (64 rounds)", "current default"],
                ["SHA-512", "512 bits", "Merkle-Damgard (80 rounds)", "64-bit platforms"],
                ["SHA-3-256", "256 bits", "Keccak sponge", "clean-slate backup"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "hashhmac.py — why the plain hash fails and HMAC does not",
              code: `import hashlib, hmac

msg = b"pay Rs.5000 to account 1234"
print(hashlib.sha256(msg).hexdigest()[:16])        # digest of the message

tampered = b"pay Rs.9500 to account 1234"
print(hashlib.sha256(tampered).hexdigest()[:16])   # attacker recomputes freely

# HMAC binds a secret key: without it the tag cannot be forged
tag = hmac.new(b"shared-secret", msg, hashlib.sha256).hexdigest()
print(tag[:16])
print(hmac.compare_digest(tag,
      hmac.new(b"shared-secret", tampered, hashlib.sha256).hexdigest()))  # False`,
            },
            callout: {
              type: "exam",
              title: "Hashing in all three sessions",
              body: "May 2023 asked hashing's benefits, May 2024 listed hash function as a short note, and Jun 2025 set the trap — 'hashing does not ensure integrity — justify'. The winning answer carries the tampering example: attacker swaps M for M' and recomputes H(M') openly; only a secret (HMAC or signature) stops that.",
            },
            examQuestions: [
              {
                q: "What is Hashing? What are the benefits of Hashing?",
                marks: 7,
                appearances: ["May 2023", "May 2024"],
              },
              {
                q: "Hashing does not ensure integrity of message in network communication. Justify answer with example.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "State the four properties of a cryptographic hash function, distinguish weak from strong collision resistance, and explain the HMAC construction.",
                marks: 7,
                outline: [
                  "Easy to compute for any input size",
                  "Preimage resistance: one-way",
                  "Weak collision: second preimage hard for a given M",
                  "Strong collision: any pair with equal digest hard — birthday 2^(n/2)",
                  "HMAC = H(K XOR opad || H(K XOR ipad || M))",
                  "Two-pass structure defeats length-extension of naive H(K||M)",
                  "SHA-1 broken (2017); SHA-256 is the default; SHA-3 the backup",
                ],
              },
              {
                q: "Why is signing the hash faster than signing the message?",
                marks: 3,
                outline: [
                  "The digest is fixed-size (256 bits) regardless of message length",
                  "Public-key operations cost depends on operand size",
                  "The hash is assumed collision-resistant, so signing it binds the message",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Digital signatures and the Digital Signature Standard",
            body: [
              "A digital signature binds a message to its originator using asymmetric cryptography backwards: the sender signs with the PRIVATE key, anyone verifies with the public key — because only the sender could have produced that signature, the property scales into non-repudiation, which MACs cannot give. The efficient process signs the hash, not the message: compute h = H(M) (SHA-256), compute the signature with the private key, send (M, signature); the receiver hashes M and verifies the signature on h with the sender's public key. Signing the digest is fast (fixed 256-bit input), and hash-collision resistance carries the binding. Services delivered: authentication (origin), integrity (any change breaks the hash), and non-repudiation (third-party provability) — but never confidentiality, which needs the recipient's public key on top.",
              "A worked chain shows the services stacking: A signs a purchase order's digest with her private key; B verifies with A's public key — authenticity confirmed. An attacker flips an amount: the recomputed hash changes, verification fails — integrity enforced. When the dispute reaches court, A's public-key certificate (from a CA) plus the signature prove she signed — non-repudiation delivered. Without the certificate chain, a signature only proves possession of SOME private key; the certificate is what pins that key to A's identity, which is why signatures and PKI (Unit IV) are inseparable in practice.",
              "The Digital Signature Standard (DSS, FIPS-186) is the government alternative to RSA signatures: the DSA algorithm signs a SHA hash using arithmetic on the discrete logarithm problem (not factoring), with public parameters p, q, g, per-user y, private x, and produces a 320-bit pair (r, s) — the signature is smaller than an RSA signature and signing is faster, while RSA verification is faster and RSA also encrypts (DSS signs only). The exam angle: draw the sign/verify flow, list the three services with the one missing (confidentiality), and state DSA's problem (discrete log) and its RSA contrast in speed and output size.",
            ],
            keyTerms: [
              { term: "Digital signature", definition: "Hash signed with the sender's private key; verified by anyone with the public key — authentication, integrity, non-repudiation." },
              { term: "Non-repudiation", definition: "Third-party provability of origin — the service only signatures (not MACs) deliver." },
              { term: "DSS/DSA", definition: "FIPS-186 signature standard on the discrete-log problem, producing an (r, s) pair over a SHA hash." },
              { term: "Hash-then-sign", definition: "Sign the digest H(M), not M — speed plus the collision resistance guarantee." },
              { term: "Certificate", definition: "The CA-signed binding that pins a public key to an identity — signatures need it for real non-repudiation." },
            ],
            bullets: [
              "Sign with the sender's private key; verify with the sender's public key.",
              "Process: h = H(M); sign h; send (M, signature); receiver re-hashes and verifies.",
              "Services: authentication, integrity, non-repudiation — no confidentiality.",
              "MAC cannot give non-repudiation: shared key, either side could sign.",
              "DSS/DSA: discrete-log based, (r, s) 320-bit output, signs only, faster signing.",
              "RSA signatures: factoring-based, slower signing, faster verification, also encrypts.",
            ],
            diagram: {
              kind: "flow",
              title: "Hash-then-sign, end to end",
              caption: "The digest carries the message's identity; the private key carries the authority.",
              steps: [
                { label: "Hash the message", note: "h = SHA-256(M)" },
                { label: "Sign with private key", note: "sig = Sign(d, h)" },
                { label: "Send (M, sig)", note: "message travels with its signature" },
                { label: "Receiver re-hashes", note: "h' = SHA-256(M)" },
                { label: "Verify with sender's public key", note: "Verify(e, sig, h') — accept or reject" },
              ],
            },
            table: {
              caption: "RSA signatures versus DSS/DSA.",
              headers: ["Aspect", "RSA signature", "DSS/DSA signature"],
              rows: [
                ["Hardness assumption", "integer factoring", "discrete logarithm"],
                ["Signing speed", "slower (large exponentiation)", "faster"],
                ["Verification speed", "faster (small public exponent)", "slower"],
                ["Output size", "grows with modulus (256+ bytes)", "fixed 320-bit (r, s) pair"],
                ["Also encrypts?", "yes (same key pair)", "no — signatures only"],
              ],
            },
            callout: {
              type: "tip",
              title: "The missing service",
              body: "Digital signatures deliver authentication, integrity and non-repudiation — but never confidentiality. If the exam lists all four services for signatures, one is a trap: privacy requires encrypting with the recipient's public key as a separate step.",
            },
            examQuestions: [
              {
                q: "Explain how a digital signature is created and verified using a hash function and public-key cryptography, and state which security services it provides and which it does not.",
                marks: 7,
                outline: [
                  "Hash first: h = H(M) (SHA-256)",
                  "Sign h with the sender's private key",
                  "Send (M, signature)",
                  "Receiver hashes M and verifies with the sender's public key",
                  "Services: authentication, integrity, non-repudiation",
                  "Not provided: confidentiality — needs recipient's public key encryption",
                  "Certificate chain pins the key to an identity (real non-repudiation)",
                ],
              },
              {
                q: "Compare RSA signatures with the DSS: underlying problem, speeds, output size and scope.",
                marks: 7,
                outline: [
                  "RSA: factoring; DSS: discrete logarithm",
                  "RSA signs slower, verifies faster (small e)",
                  "DSS signs faster; output is a fixed 320-bit (r, s)",
                  "RSA also encrypts; DSS is signature-only",
                  "Both sign the SHA digest, not the message",
                  "Both need certificates for identity binding",
                ],
              },
              {
                q: "Why must a signature be combined with a certificate?",
                marks: 2,
                outline: [
                  "A signature proves possession of a private key, not identity",
                  "The CA-signed certificate binds that key to the claimed owner",
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
      title: "Authentication Applications",
      summary:
        "Unit IV deploys the cryptography of Unit III: Kerberos authentication with its tickets and double encryption, X.509 certificates and the six components of PKI, PGP's email security, IP security with its architecture, AH, ESP and key management, and web security through SSL/TLS and the Secure Electronic Transaction protocol.",
      chapter: {
        number: "04",
        title: "Deployed Security: Kerberos, PGP, IPsec, SSL",
        intro:
          "Unit IV covers authentication applications — Kerberos, the X.509 authentication service and public key infrastructure — electronic mail security with Pretty Good Privacy, IP security (overview, architecture, authentication header, encapsulating security payload and key management), and web security: considerations, SSL and TLS, and the Secure Electronic Transaction protocol.",
        inOneBreath:
          "Kerberos is a trusted third party issuing tickets (AS -> TGT -> TGS -> service) with requirements of security, reliability, transparency and scalability; its 'double encryption' protects two principals with two keys. X.509 certificates chain to PKI's six components: CA, RA, certificates, repository, revocation (CRL/OCSP) and key backup. PGP signs, compresses, encrypts with a session key and radix-64s for email. IPsec's AH authenticates (protocol 51), ESP encrypts + authenticates (protocol 50), transport vs tunnel mode, IKE manages keys. SSL/TLS handshakes before the record protocol carries data; SET adds dual signatures so the merchant never sees the card number.",
        sections: [
          {
            number: "4.1",
            title: "Kerberos authentication",
            body: [
              "Kerberos is a trusted third-party authentication service for open distributed networks (Project Athena, MIT), named for the three-headed dog guarding the gate. Its requirements (the May 2024 question): security — eavesdroppers cannot obtain useful information; reliability — the service must be continuously available (distributed servers); transparency — users should not notice the mechanism beyond a password prompt; and scalability — large numbers of clients and servers must be supported. Its enemy model: a user must prove identity to many servers without sending passwords across the network repeatedly, and servers must authenticate users without storing raw passwords.",
              "The mechanism issues time-limited tickets instead of passwords. Step 1: the client asks the Authentication Server (AS); the AS responds with a session key and a Ticket-Granting Ticket (TGT) — the whole reply encrypted with the client's password-derived key, so only the true user can read it. Step 2: the client presents the TGT (encrypted with the TGS's secret key — unreadable and unforgeable by the client) plus an authenticator to the Ticket-Granting Server; the TGS returns a service ticket for the target server. Step 3: the client presents the service ticket plus a fresh authenticator to the server; the ticket carries the client's identity and a session key, timestamps defeat replay. This is why 'double encryption' appears (Jun 2025): the AS reply is encrypted with the client's key to protect the session key, while the ticket inside is encrypted with the TGS's key so the server can trust it — two encryptions protecting two different principals.",
              "Versions differ on crypto and environment. Kerberos v4 used DES, assumed 32-bit byte order and single-realm deployments, and is obsolete. Kerberos v5 (RFC 4120) allows any encryption algorithm, adds flags (renewable, forwardable, postdatable tickets), explicit expiry times, cross-realm trust hierarchies, and pre-authentication to slow password guessing. The exam angle: state the four requirements, walk the three-step exchange naming each ticket and who can decrypt it, and close with the v4/v5 comparison and the double-encryption rationale.",
            ],
            keyTerms: [
              { term: "Kerberos", definition: "Trusted third-party authentication for distributed networks using time-limited, encrypted tickets." },
              { term: "TGT", definition: "Ticket-Granting Ticket — AS-issued, TGS-encrypted credential letting the client request service tickets." },
              { term: "Authenticator", definition: "Client's identity plus timestamp encrypted with the session key — freshness proof against replay." },
              { term: "AS / TGS", definition: "Authentication Server issues the TGT; Ticket-Granting Server converts it into service tickets." },
              { term: "Kerberos v5", definition: "RFC 4120 version: algorithm-agnostic, renewable/forwardable tickets, cross-realm trust." },
            ],
            bullets: [
              "Requirements: security, reliability, transparency, scalability.",
              "Flow: AS -> TGT (client-key encrypted) -> TGS -> service ticket -> server.",
              "Ticket encrypted with the SERVER's key; reply encrypted with the CLIENT's key — the double encryption.",
              "Authenticators (identity + timestamp) defeat replay.",
              "v5 adds renewable tickets, pre-authentication and cross-realm trust over v4's DES.",
              "Passwords never cross the network after the first login.",
            ],
            diagram: {
              kind: "flow",
              title: "The Kerberos exchange",
              caption: "Two encrypted handoffs later, the client holds a service ticket no eavesdropper can use.",
              steps: [
                { label: "Client -> AS", note: "ID + requested services" },
                { label: "AS -> Client", note: "session key + TGT, encrypted with client's password key" },
                { label: "Client -> TGS", note: "TGT + authenticator (timestamp)" },
                { label: "TGS -> Client", note: "service ticket, encrypted with server's key" },
                { label: "Client -> Server", note: "service ticket + fresh authenticator — access granted" },
              ],
            },
            table: {
              caption: "Kerberos versions compared.",
              headers: ["Aspect", "Kerberos v4", "Kerberos v5"],
              rows: [
                ["Encryption", "DES only", "any algorithm (algorithm-agnostic)"],
                ["Tickets", "fixed lifetimes", "renewable, forwardable, postdatable"],
                ["Networking", "32-bit byte order assumptions", "portable tagged encoding (ASN.1)"],
                ["Realms", "single realm focus", "cross-realm hierarchies"],
                ["Password guessing", "minimal protection", "pre-authentication slows guessing"],
              ],
            },
            callout: {
              type: "exam",
              title: "Authentication in every session",
              body: "May 2023 asked authentication systems in general, May 2024 asked Kerberos requirements and versions, and Jun 2025 asked why Kerberos uses double encryption. Prepare one answer carrying the three-step exchange — the ticket encryptions answer the 'why double encryption' question on their own.",
            },
            examQuestions: [
              {
                q: "Formulate what are the requirements of Kerberos? Explain about Kerberos version.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Why do these need to use double encryption when using Kerberos?",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "What is Authentication? Explain different types of authentication systems.",
                marks: 7,
                appearances: ["May 2023"],
              },
            ],
          },
          {
            number: "4.2",
            title: "X.509 authentication service and public key infrastructure",
            body: [
              "X.509 is the ITU-T standard format for public-key certificates — the artifact that binds a public key to an identity. Its core fields: version, serial number (unique per CA), signature algorithm identifier, issuer (the CA's name), validity period (not-before/not-after), subject (the key owner's name), subject's public-key info (algorithm + key), extensions (v3: SANs, key usage, basic constraints), and the issuing CA's digital signature over all of it. Certificates chain: a root CA signs intermediate CAs, intermediates sign end entities; verification walks the chain to a trust anchor — TLS browser trust is exactly this machinery at scale.",
              "The certificate lifecycle needs revocation because private keys leak and identities change before expiry. Two standard mechanisms: the Certificate Revocation List (CRL) — a CA-signed periodic list of revoked serial numbers that relying parties must fetch — and OCSP, the Online Certificate Status Protocol, which answers 'is serial X valid?' in real time (OCSP stapling lets servers attach a fresh proof to their handshake). Compromise of a root CA revokes a whole subtree; that asymmetry is why roots are offline and heavily protected.",
              "The public key infrastructure is the whole machinery — people, protocols and servers — that issues, stores, trusts and revokes certificates. The May 2023 paper asked for its six components: the Certificate Authority (issues and signs certificates), the Registration Authority (verifies identities before issuance), the certificates themselves (the signed bindings), the certificate repository (directories/servers where certificates are published and fetched), the certificate revocation system (CRL/OCSP), and key backup and recovery (archival of decryption keys, with non-repudiation keys deliberately NOT backed up). The exam angle: draw the X.509 field list, explain chain-of-trust verification, name both revocation mechanisms, and recite the six PKI components with one role sentence each.",
            ],
            keyTerms: [
              { term: "X.509 certificate", definition: "Standard structure binding subject identity, public key, validity and extensions, signed by a CA." },
              { term: "Chain of trust", definition: "Root CA -> intermediates -> end-entity certificates; verification walks signatures up to a trust anchor." },
              { term: "CRL", definition: "Certificate Revocation List — periodic CA-signed list of revoked serial numbers." },
              { term: "OCSP", definition: "Online Certificate Status Protocol — real-time per-certificate validity answers." },
              { term: "CA / RA", definition: "Certificate Authority signs certificates; Registration Authority verifies identities before issuance." },
            ],
            bullets: [
              "X.509 fields: version, serial, algorithm, issuer, validity, subject, public key, extensions, CA signature.",
              "Verification chains from the end-entity certificate to a trusted root.",
              "Revocation: CRL (periodic lists) and OCSP (real-time queries, stapled proofs).",
              "PKI's six components: CA, RA, certificates, repository, revocation system, key backup/recovery.",
              "Non-repudiation keys are never backed up; decryption keys may be.",
              "Root CAs stay offline — compromising a root revokes everything beneath it.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The PKI trust hierarchy",
              caption: "Trust flows downward: one offline root anchors thousands of issued certificates.",
              tiers: [
                { label: "Root CA (offline)", note: "self-signed trust anchor, extreme protection" },
                { label: "Intermediate CAs", note: "issue certificates, carry the root's delegated trust" },
                { label: "End-entity certificates", note: "servers and users — verified up the chain" },
                { label: "Relying parties", note: "browsers/clients holding root trust stores" },
              ],
            },
            table: {
              caption: "The six components of PKI (May 2023's question).",
              headers: ["Component", "Role", "Key artifact"],
              rows: [
                ["Certificate Authority (CA)", "issues and signs certificates", "signed X.509 certificates"],
                ["Registration Authority (RA)", "verifies identity before issuance", "verified requests"],
                ["Digital certificates", "bind identity to public key", "X.509 structure"],
                ["Certificate repository", "publishes and serves certificates", "directories / AIA endpoints"],
                ["Revocation system", "marks invalid certificates", "CRLs, OCSP responses"],
                ["Key backup and recovery", "archives decryption keys", "escrowed keys (not signature keys)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Six components, verbatim",
              body: "'What are six components of public key infrastructure?' (May 2023) is a list-recall question — CA, RA, certificates, repository, revocation, key backup/recovery. One role sentence per component plus the note that signature keys are never backed up earns the full 7.",
            },
            examQuestions: [
              {
                q: "What are six components of public key infrastructure? Explain.",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Draw the X.509 certificate fields and explain chain-of-trust verification with both revocation mechanisms.",
                marks: 7,
                outline: [
                  "Fields: version, serial, algorithm, issuer, validity, subject, public key, extensions",
                  "CA's digital signature covers all fields",
                  "Chain: root -> intermediate -> end entity; walk signatures to a trust anchor",
                  "Revocation 1: CRL — periodic signed list of serials",
                  "Revocation 2: OCSP — real-time status queries, stapling",
                  "Root offline; compromise of root revokes the subtree",
                  "PKI ties it together: issue, publish, revoke, recover",
                ],
              },
              {
                q: "Why are non-repudiation keys never backed up?",
                marks: 3,
                outline: [
                  "Two copies weaken the sole-possession guarantee",
                  "A restored copy lets someone else sign",
                  "Decryption keys may be escrowed; signing keys may not",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Electronic mail security: Pretty Good Privacy",
            body: [
              "Email is the most exposed application in common use — plaintext messages cross untrusted relays, and neither the SMTP chain nor the mail servers promise confidentiality or authenticity. PGP (Zimmermann, 1991) fixes this end-to-end with a four-service pipeline the May 2024 paper asked for: authentication — SHA-1 hash of the message signed with the sender's RSA private key (proves origin); compression — ZIP applied after signing (so signatures bind to uncompressed text); confidentiality — the message plus signature encrypted with a fresh one-time session key (IDEA/CAST/3DES/AES), and that session key encrypted with the recipient's RSA public key (hybrid encryption, because public-key ops are slow); email compatibility — radix-64 (base64) encoding turns the binary result into ASCII that survives SMTP.",
              "The block diagram reads left to right: message -> hash -> sign (sender's private key) -> prepend signature -> compress -> generate session key -> encrypt (session key) -> encrypt session key with recipient's public key -> radix-64 -> transmit. Reception reverses every step: base64 decode, decrypt session key with private key, decrypt message, decompress, hash and verify signature with sender's public key. One diagram plus the service-to-step mapping is the full 7-mark answer.",
              "PGP's trust model is its famous difference from X.509: a web of trust instead of a hierarchical CA — each user signs keys of acquaintances, and trust accrues through intersecting endorsements stored in key rings (public and private). Add segmentation (long messages split for email limits) and key management (key IDs, fingerprints, revocation) and PGP becomes a complete, CA-free email security system. The exam angle: list the five services, draw the pipeline, explain the session-key hybrid and radix-64's purpose, and contrast the web of trust with hierarchical PKI.",
            ],
            keyTerms: [
              { term: "PGP", definition: "End-to-end email security: sign, compress, encrypt with session key, radix-64 encode." },
              { term: "Session key", definition: "A fresh symmetric key per message, encrypted with the recipient's public key — the hybrid core." },
              { term: "Radix-64", definition: "Base64 encoding making binary ciphertext SMTP-safe as ASCII." },
              { term: "Web of trust", definition: "PGP's decentralized trust model — users endorse each other's keys instead of a hierarchical CA." },
              { term: "Key ring", definition: "PGP's local store of public keys (of others) and private keys (own), with trust annotations." },
            ],
            bullets: [
              "Services: authentication, compression, confidentiality, email compatibility, segmentation.",
              "Sign with sender's private key over the SHA hash; compress after signing.",
              "Confidentiality: fresh session key encrypts data; recipient's public key encrypts the session key.",
              "Radix-64 exists because SMTP transports only ASCII.",
              "Web of trust vs X.509 hierarchy: endorsements instead of CAs.",
              "Reception reverses: decode -> decrypt -> decompress -> verify.",
            ],
            diagram: {
              kind: "pipeline",
              title: "PGP's send-side pipeline",
              caption: "May 2024's block diagram: each stage earns a mark, and the order is the answer.",
              stages: [
                { label: "Message", note: "plaintext email" },
                { label: "Hash + sign", note: "SHA digest signed with sender's private key" },
                { label: "Compress", note: "ZIP — after signing, before encrypting" },
                { label: "Encrypt", note: "fresh session key (IDEA/AES) on data + signature" },
                { label: "Wrap key + radix-64", note: "session key RSA-encrypted with recipient's public key; base64 out" },
              ],
            },
            table: {
              caption: "PGP services and the mechanism behind each.",
              headers: ["Service", "Mechanism", "Protects against"],
              rows: [
                ["Authentication", "SHA hash + RSA signature (sender's private key)", "masquerade, content modification"],
                ["Confidentiality", "IDEA/CAST/AES with one-time session key", "disclosure in transit and on relays"],
                ["Email compatibility", "radix-64 encoding", "SMTP mangling of binary data"],
                ["Compression", "ZIP before encryption", "nothing — saves bandwidth, helps crypto entropy"],
                ["Segmentation", "splitting long messages", "email length limits"],
              ],
            },
            callout: {
              type: "tip",
              title: "Order matters — say why",
              body: "Signature before compression (sign what the user wrote), compression before encryption (encrypting compressed data leaks less structure), session key per message (public-key speed). One sentence of justification per ordering step is what lifts the PGP answer to full marks.",
            },
            examQuestions: [
              {
                q: "How does PGP provide confidentiality and authentication service for E-mail and file storage applications? Draw the block diagram and explain its components.",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Contrast PGP's web of trust with the X.509 hierarchical certification model, and state when each is preferable.",
                marks: 7,
                outline: [
                  "X.509: hierarchical CAs, root of trust, centralized revocation",
                  "PGP: web of trust — users sign acquaintances' keys",
                  "Trust accrues via intersecting endorsements in key rings",
                  "PGP needs no infrastructure — suits individuals and activists",
                  "X.509 scales to the web with revocation machinery",
                  "PGP weakness: trust path discovery is manual",
                  "X.509 weakness: CA compromise revokes the subtree",
                ],
              },
              {
                q: "Why does PGP compress before encrypting but sign before compressing?",
                marks: 3,
                outline: [
                  "Signing first binds the signature to the original text",
                  "Compressing first would force verification to recompress identically",
                  "Encrypting compressed data hides plaintext structure",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "IP security: overview and architecture",
            body: [
              "IP security (IPsec) provides security at the IP layer — beneath TCP and UDP — so applications get protection transparently: no application changes, no per-user training, and every packet on the wire is covered. IPsec's services (RFC 4301 vocabulary): access control, connectionless integrity, data-origin authentication, rejection of replayed packets (sequence-number windows), confidentiality (encryption), and limited traffic-flow confidentiality (tunnel mode hides inner endpoints). Because it sits at the IP layer, IPsec secures anything above it — the argument for VPNs, which are almost universally IPsec or its descendants.",
              "The architecture is a stack of documents and databases. Documents: RFC 4301 (architecture), RFC 4302 (Authentication Header), RFC 4303 (Encapsulating Security Payload), plus the Internet Key Exchange (IKE) for key management. Two databases drive enforcement: the Security Policy Database (SPD) — per-packet policy saying 'this traffic must be protected, discarded, or bypassed' — and the Security Association Database (SAD) — one entry per active Security Association holding algorithms, keys, sequence counters and lifetimes. A Security Association (SA) is a one-way relationship between sender and receiver defined by three parameters: SPI (security parameters index), destination IP, and protocol identifier (AH or ESP) — two-way traffic needs two SAs.",
              "Modes complete the picture: transport mode protects the payload of an existing IP packet (host-to-host), tunnel mode wraps the whole original packet inside a new IP header (gateway-to-gateway — the VPN shape). The May 2023 question — 'what do you mean by IP Security? Discuss its basic components' — expects: definition (framework of open standards for secure IP communication), components (AH, ESP, IKE + SPD/SAD + SAs), and the two modes. The exam angle: define IPsec, list the services, name the documents and databases, and draw transport vs tunnel.",
            ],
            keyTerms: [
              { term: "IPsec", definition: "Security framework at the IP layer: authentication, integrity, anti-replay and confidentiality for all upper-layer traffic." },
              { term: "Security Association (SA)", definition: "One-way protected relationship defined by SPI, destination IP and protocol (AH/ESP)." },
              { term: "SPD", definition: "Security Policy Database — decides which traffic gets protected, bypassed or discarded." },
              { term: "SAD", definition: "Security Association Database — holds active SAs' algorithms, keys, counters and lifetimes." },
              { term: "Tunnel mode", definition: "Encapsulates the entire original IP packet in a new packet — the VPN gateway pattern." },
            ],
            bullets: [
              "IPsec = security below the transport layer — applications transparently protected.",
              "Services: access control, connectionless integrity, origin authentication, anti-replay, confidentiality, flow confidentiality.",
              "Documents: RFC 4301 architecture, 4302 AH, 4303 ESP, IKE for keys.",
              "Databases: SPD (policy) + SAD (active SAs); SA = SPI + destination IP + protocol.",
              "SAs are one-way — bidirectional traffic needs a pair.",
              "Transport mode = host to host; tunnel mode = gateway to gateway (VPN).",
            ],
            diagram: {
              kind: "layers",
              title: "Where IPsec sits",
              caption: "Index 0 is the top: everything above IPsec is protected without knowing it.",
              layers: [
                { label: "Applications", note: "HTTP, email, DNS — untouched, transparently protected" },
                { label: "TCP / UDP", note: "transport payloads ride inside the protection" },
                { label: "IPsec (AH / ESP)", note: "integrity, authentication, anti-replay, confidentiality" },
                { label: "IP", note: "outer header; tunnel mode adds a second IP header" },
                { label: "Link layer", note: "physical network — untrusted" },
              ],
            },
            table: {
              caption: "The basic components of IP security (May 2023's question).",
              headers: ["Component", "What it is", "Provides"],
              rows: [
                ["AH (protocol 51)", "Authentication Header", "integrity + origin auth + anti-replay (no encryption)"],
                ["ESP (protocol 50)", "Encapsulating Security Payload", "confidentiality + optional auth/integrity"],
                ["IKE", "Internet Key Exchange", "negotiates SAs and keys (Oakley/ISAKMP)"],
                ["SPD", "Security Policy Database", "per-packet protect/bypass/discard decisions"],
                ["SAD", "Security Association Database", "live SAs: keys, algorithms, counters"],
                ["SA", "Security Association", "one-way relationship: SPI + dst IP + protocol"],
              ],
            },
            callout: {
              type: "tip",
              title: "SA is one-way",
              body: "The most-dropped mark in IPsec answers: a Security Association is unidirectional. Two-way communication needs two SAs (one per direction), each with its own SPI and sequence counters. State it explicitly and the rest of the architecture falls into place.",
            },
            examQuestions: [
              {
                q: "What do you mean by the term IP Security? Discuss its basic components.",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "List the services IPsec provides, explain the roles of the SPD and SAD, and define a Security Association.",
                marks: 7,
                outline: [
                  "Services: access control, integrity, origin auth, anti-replay, confidentiality, flow confidentiality",
                  "SPD: policy — protect, bypass or discard per traffic class",
                  "SAD: active SAs with keys, algorithms, sequence windows, lifetimes",
                  "SA: one-way, defined by SPI + destination IP + protocol",
                  "Two-way traffic needs two SAs",
                  "Documents: RFC 4301/4302/4303 + IKE",
                  "Placement: transparent to applications (the VPN argument)",
                ],
              },
              {
                q: "Why does protecting traffic at the IP layer help applications that know nothing about security?",
                marks: 3,
                outline: [
                  "IPsec wraps packets below TCP/UDP",
                  "No application or user action required",
                  "One enforcement point protects every protocol above",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Authentication header, ESP and key management",
            body: [
              "The Authentication Header (AH, protocol 51) provides connectionless integrity, data-origin authentication and anti-replay — but no confidentiality. AH authenticates the ENTIRE packet: the immutable IP header fields plus the payload; mutable fields that change in transit (TTL, header checksum, ToS) are zeroed for the computation. Verification fails if a router legally changed a protected field, which is why AH breaks behind NAT — a famous operational limitation. AH also covers replay via a sequence number and a sliding anti-replay window at the receiver.",
              "The Encapsulating Security Payload (ESP, protocol 50) provides confidentiality — encrypting the payload (and in tunnel mode the entire inner packet) — plus optional integrity/authentication and anti-replay. ESP authenticates only the ESP header and ciphertext (not the outer IP header), so it passes NAT cleanly; modern ESP uses AEAD ciphers (AES-GCM) where encryption and authentication happen in one pass. The choice rule: need only integrity -> AH; need encryption (with or without auth) -> ESP; need both plus NAT traversal -> ESP. Both headers support transport mode (payload protection in place) and tunnel mode (whole original packet wrapped, new IP header on top).",
              "Key management for all this is IKE: manual configuration for tiny deployments, and IKE (RFC 2409, built from ISAKMP's message framework plus Oakley's key-exchange modes) for real ones. IKE phase 1 authenticates the peers (certificates or pre-shared keys) and establishes a secure channel using Diffie-Hellman with cookies that defeat clogging attacks; phase 2 negotiates the actual IPSec SAs (quick mode) with fresh nonces. The exam angle: contrast AH vs ESP in a table (services, what is authenticated, NAT behaviour, protocol numbers), state transport vs tunnel with where each is used, and outline IKE's two phases with cookies and nonces.",
            ],
            keyTerms: [
              { term: "AH (protocol 51)", definition: "Authenticates the whole packet including immutable IP headers; no confidentiality; NAT-hostile." },
              { term: "ESP (protocol 50)", definition: "Encrypts the payload, optional authentication; authenticates ESP header + ciphertext; NAT-friendly." },
              { term: "Transport mode", definition: "Protects the payload of the existing packet — host to host." },
              { term: "Tunnel mode", definition: "Wraps the whole original packet inside a new IP packet — gateway to gateway." },
              { term: "IKE", definition: "Internet Key Exchange: ISAKMP messages + Oakley DH modes; cookies beat clogging, nonces beat replay." },
            ],
            bullets: [
              "AH: integrity + origin auth + anti-replay; authenticates immutable IP headers too.",
              "AH zeroes mutable fields (TTL, checksum) for the MAC computation.",
              "ESP: confidentiality + optional auth; authenticates only its own header/ciphertext.",
              "NAT breaks AH, passes ESP — hence ESP dominates deployments.",
              "Modes: transport (host-to-host) vs tunnel (gateway-to-gateway, the VPN shape).",
              "IKE: phase 1 peer authentication + secure channel; phase 2 IPSec SAs; cookies + nonces.",
            ],
            diagram: {
              kind: "compare",
              title: "AH vs ESP",
              caption: "The choice is coverage versus compatibility: AH covers more of the packet, ESP survives the modern internet.",
              left: {
                heading: "Authentication Header (51)",
                items: [
                  "Integrity + origin auth + anti-replay",
                  "No confidentiality",
                  "Authenticates immutable IP header + payload",
                  "Breaks behind NAT (header fields rewritten)",
                ],
              },
              right: {
                heading: "ESP (50)",
                items: [
                  "Confidentiality + optional auth/integrity",
                  "AEAD (AES-GCM) in one pass",
                  "Authenticates ESP header + ciphertext only",
                  "NAT-friendly — the deployed default",
                ],
              },
            },
            table: {
              caption: "AH versus ESP versus the two modes.",
              headers: ["Property", "AH", "ESP"],
              rows: [
                ["Confidentiality", "none", "yes (cipher on payload)"],
                ["Integrity/auth", "whole packet (immutable IP fields)", "ESP header + ciphertext, optional"],
                ["Anti-replay", "yes (sequence window)", "yes (sequence window)"],
                ["NAT traversal", "broken", "works"],
                ["Protocol number", "51", "50"],
                ["Tunnel mode", "wraps original packet, new IP header", "same — the VPN pattern"],
              ],
            },
            callout: {
              type: "warning",
              title: "The NAT question",
              body: "If asked 'why is AH rarely used today?', the answer is NAT: AH authenticates IP header fields that NAT boxes legally rewrite, so verification always fails. ESP authenticates only its own header and ciphertext, so it survives — which is why ESP with AEAD replaced AH in practice.",
            },
            examQuestions: [
              {
                q: "Compare the Authentication Header with the Encapsulating Security Payload: services each provides, what each authenticates, and why ESP dominates in practice.",
                marks: 7,
                outline: [
                  "AH: integrity, origin auth, anti-replay — no encryption",
                  "AH authenticates immutable IP header fields (mutable zeroed)",
                  "ESP: confidentiality + optional auth over ESP header/ciphertext",
                  "Protocol numbers: AH 51, ESP 50",
                  "NAT rewrites IP headers -> AH verification fails; ESP passes",
                  "Modes: transport (payload) vs tunnel (whole packet, new header)",
                  "Modern ESP uses AEAD (AES-GCM) for one-pass encrypt+authenticate",
                ],
              },
              {
                q: "Explain IKE's two phases and how cookies and nonces protect the exchange.",
                marks: 7,
                outline: [
                  "IKE = ISAKMP message framework + Oakley DH modes",
                  "Phase 1: authenticate peers (certs or PSK), establish secure channel",
                  "Diffie-Hellman with cookies: cheap check before expensive exponentiation — anti-clogging",
                  "Nonces in phase 1 defeat replay of old exchanges",
                  "Phase 2 (quick mode): negotiate IPSec SAs with fresh nonces",
                  "SAs installed into the SAD with SPIs and lifetimes",
                  "Manual keying only for tiny static deployments",
                ],
              },
              {
                q: "Which IPsec mode does a site-to-site VPN use, and why?",
                marks: 3,
                outline: [
                  "Tunnel mode",
                  "Whole original packet is encrypted and wrapped in a new IP header",
                  "End-host addresses stay hidden between the gateways",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Web security: considerations, SSL and TLS",
            body: [
              "Web traffic faces a distinct threat set: integrity (an attacker modifies content or transactions in transit), confidentiality (eavesdropping on sessions, harvesting credentials and card numbers), authentication (spoofed servers or clients, man-in-the-middle) and availability (DoS on the server). The design question is where to put security: at the IP layer (IPsec — protects everything but needs infrastructure), at the transport layer (SSL/TLS — protects TCP connections, the web's choice), or at the application layer (S/MIME/PGP for mail, secure HTTP variants). SSL/TLS won for the web because it is application-independent above TCP and transparent to HTTP code.",
              "SSL (Netscape, mid-1990s) became TLS under the IETF: SSL 3.0 -> TLS 1.0 -> 1.1 -> 1.2 (AEAD, SHA-256) -> 1.3 (dropped legacy ciphers, 1-RTT handshake). Its architecture: the Handshake Protocol negotiates versions/ciphers, authenticates the server (and optionally client) with certificates, and derives session keys by key exchange; the Change Cipher Spec message switches both sides into the agreed parameters; the Record Protocol then fragments, compresses (historically), MACs/AEAD-protects and transmits application data; Alert messages carry errors and closures. The handshake's four message flights — ClientHello (random, cipher suites), ServerHello + Certificate + key exchange, client Finished, server Finished — establish a session with a shared master secret expanded into per-connection keys.",
              "The May 2023 paper's URL/URI question belongs here: a URI (Uniform Resource Identifier) is the generic string identifying a resource; a URL (Uniform Resource Locator) is the URI subtype that also says HOW to fetch it (scheme + host + port + path, e.g. https://www.rgpv.ac.in:443/result.aspx) — every URL is a URI, not every URI is a URL (a URN like urn:isbn:0-451-45160-4 names without locating). Also relevant: cookies and HTTP (May 2023 short notes) — HTTP is stateless, cookies carry state (session IDs) and are hence the classic session-hijack target, defended by the Secure flag, HttpOnly and SameSite. The exam angle: threats table, SSL/TLS handshake steps, why SSL 3.0 died (POODLE), URL vs URI with the example.",
            ],
            keyTerms: [
              { term: "SSL/TLS", definition: "Transport-layer security: handshake authenticates and derives keys; record protocol protects the traffic." },
              { term: "Handshake Protocol", definition: "Negotiates versions and ciphers, exchanges certificates and keys, derives the master secret." },
              { term: "Record Protocol", definition: "Fragments, MACs/AEAD-encrypts and transmits application data over the established session." },
              { term: "URL vs URI", definition: "URI identifies a resource; URL locates it with a scheme and address — every URL is a URI." },
              { term: "Cookie flags", definition: "Secure (HTTPS only), HttpOnly (no JavaScript), SameSite (cross-site control) — anti-hijack hardening." },
            ],
            bullets: [
              "Web threats: integrity, confidentiality, authentication, availability.",
              "Placement options: IPsec (network), SSL/TLS (transport), S/MIME/PGP (application).",
              "SSL handshake: ClientHello -> ServerHello + certificate + key exchange -> Finished both ways.",
              "Record protocol: fragment -> (compress) -> MAC/AEAD -> transmit.",
              "TLS 1.3 removed legacy ciphers and cut the handshake to 1-RTT; SSL 3.0 died with POODLE.",
              "URL = scheme + host + port + path; URN names without locating (every URL is a URI).",
            ],
            diagram: {
              kind: "pipeline",
              title: "The TLS handshake",
              caption: "Certificates prove the server; key exchange proves possession; Finished messages lock the session.",
              stages: [
                { label: "ClientHello", note: "TLS versions, cipher suites, client random" },
                { label: "ServerHello + Certificate", note: "chosen suite, server certificate chain" },
                { label: "Key exchange", note: "(EC)DHE — both derive the shared secret" },
                { label: "Client Finished", note: "MAC over the whole transcript" },
                { label: "Server Finished", note: "session keys confirmed — record protocol takes over" },
              ],
            },
            table: {
              caption: "URL versus URI versus URN.",
              headers: ["Term", "Answers", "Example", "Relation"],
              rows: [
                ["URI", "what is the resource (identity)", "any resource string", "umbrella term"],
                ["URL", "where and how to fetch it", "https://www.rgpv.ac.in/result.aspx", "URI subset that locates"],
                ["URN", "persistent name, no location", "urn:isbn:0-451-45160-4", "URI subset that names"],
                ["Rule of thumb", "scheme://host/path = URL", "urn:... = URN", "every URL and URN is a URI"],
              ],
            },
            callout: {
              type: "tip",
              title: "The one-sentence handshake",
              body: "If time runs short, the compressed SSL answer is: 'handshake authenticates with certificates, agrees ciphers, and derives session keys by (EC)DHE; the record protocol then MAC/AEAD-protects every record.' Add the four message names and you have the skeleton of a 7-mark answer.",
            },
            examQuestions: [
              {
                q: "What is URL and URI? Explain the differences between URL and URI with an example.",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Describe the SSL handshake and record protocols, and explain why SSL 3.0 was deprecated in favour of TLS 1.2/1.3.",
                marks: 7,
                outline: [
                  "Handshake: ClientHello, ServerHello + certificate, key exchange, Finished",
                  "Certificates authenticate the server (optionally the client)",
                  "(EC)DHE derives a shared master secret -> per-connection keys",
                  "Record protocol: fragment, MAC/AEAD, transmit",
                  "Change Cipher Spec switches to agreed parameters",
                  "SSL 3.0: CBC + fallback flaws (POODLE) -> deprecated 2015",
                  "TLS 1.2 AEAD and TLS 1.3 1-RTT are the current choices",
                ],
              },
              {
                q: "Why are HTTP cookies a security consideration, and which flags harden them?",
                marks: 3,
                outline: [
                  "HTTP is stateless — cookies carry session identity",
                  "Stolen cookies enable session hijacking (XSS or sniffing)",
                  "Secure, HttpOnly and SameSite flags reduce the attack surface",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Secure Electronic Transaction (SET)",
            body: [
              "SET (MasterCard/Visa + partners, 1996) is a protocol suite for securing bankcard transactions over open networks. Its goals: confidentiality of payment information (the card number must be invisible even to the merchant), integrity of all transmitted data, authentication of cardholder, merchant and gateway via X.509 certificates, and interoperability across vendors and networks. SET is not itself a payment system — it is the security envelope that lets the existing bankcard infrastructure run over the internet safely.",
              "SET's signature innovation is the dual signature. The cardholder computes two digests: H(OI) over the order information and H(PI) over the payment information; concatenating the two hashes and signing the combined hash with the cardholder's private key produces the dual signature linking order and payment without revealing either to the wrong party. The merchant sees OI and can verify the link but never sees PI (the card number travels encrypted to the acquirer/payment gateway); the bank sees PI and the link but not the order contents. One signature, two audiences, zero card-number leakage to the merchant — that is the answer to 'how can it be achieved' (May 2024).",
              "The purchase flow: cardholder browses, sends the order + PI (encrypted for the gateway) + dual signature + certificates; the merchant verifies the cardholder's certificate and signature, forwards the PI to the payment gateway, receives authorization, completes the order, and settlement flows through the gateway to the issuer. Certificates are mandatory — SET requires a full PKI for all three parties, which is precisely what made it heavy, and lightweight SSL-based payments won the market; SET survives in exams as the design that solved the merchant-sees-no-card-number problem. The exam angle: goals, participants (cardholder, merchant, issuer, acquirer, payment gateway, CA), dual-signature walkthrough, and the SSL-vs-SET closing contrast.",
            ],
            keyTerms: [
              { term: "SET", definition: "Protocol suite securing bankcard payments over open networks with certificates and dual signatures." },
              { term: "Dual signature", definition: "Signature over the concatenated hashes of order information and payment information — links both, reveals neither to the wrong party." },
              { term: "Payment gateway", definition: "The bank-side interface decrypting PI and connecting SET to the card network." },
              { term: "OI / PI", definition: "Order Information (merchant-visible) and Payment Information (bank-visible only)." },
              { term: "Cardholder certificate", definition: "X.509 certificate proving the cardholder to merchant and gateway — mandatory in SET." },
            ],
            bullets: [
              "Goals: confidentiality of card data, integrity, authentication of all parties, interoperability.",
              "Participants: cardholder, merchant, issuer, acquirer, payment gateway, CA.",
              "Dual signature: sign(H(OI) || H(PI)) — merchant sees OI, bank sees PI, neither sees both.",
              "Card number never reaches the merchant — encrypted end-to-end for the gateway.",
              "SET requires full PKI certificates for cardholder, merchant and gateway.",
              "SSL-based payments won the market on lightness; SET remains the exam's design classic.",
            ],
            diagram: {
              kind: "flow",
              title: "A SET purchase",
              caption: "Three certificates and one dual signature later, the merchant ships and the bank pays — with no card number crossing the merchant.",
              steps: [
                { label: "Cardholder orders", note: "OI + PI, dual signature, certificates" },
                { label: "Merchant verifies", note: "cardholder certificate + dual signature over OI" },
                { label: "PI forwarded", note: "encrypted for the payment gateway only" },
                { label: "Gateway authorizes", note: "verifies PI, talks to the card network" },
                { label: "Merchant fulfils", note: "settlement via gateway and issuer" },
              ],
            },
            table: {
              caption: "SET participants and what each one sees.",
              headers: ["Participant", "Role", "Sees"],
              rows: [
                ["Cardholder", "purchases with a bankcard", "own OI and PI"],
                ["Merchant", "sells goods, requests authorization", "OI + cardholder identity — never the card number"],
                ["Issuer", "cardholder's bank", "PI + authorization requests"],
                ["Acquirer", "merchant's bank", "PI + capture requests"],
                ["Payment gateway", "SET-to-card-network bridge", "PI decrypted; OI hidden"],
                ["CA", "issues the three certificates", "identities, not transactions"],
              ],
            },
            callout: {
              type: "exam",
              title: "The dual signature is the answer",
              body: "'What is secure electronic transaction and how it can be achieved?' (May 2024) — the 'how' is: certificates authenticate everyone, encryption hides PI from the merchant, and the dual signature binds OI and PI so the two halves cannot be swapped or forged. Draw the dual-signature box diagram and the marks follow.",
            },
            examQuestions: [
              {
                q: "What is secure electronic transaction and how it can be achieved?",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Explain SET's dual signature with its construction, and state the privacy it gives cardholder, merchant and bank.",
                marks: 7,
                outline: [
                  "Cardholder computes H(OI) and H(PI)",
                  "Concatenates the two hashes and signs with the private key",
                  "Merchant verifies with cardholder's public key — sees OI, never PI",
                  "Gateway/bank verifies — sees PI, never OI",
                  "Link cannot be severed: swapping OI or PI breaks the signature",
                  "Confidentiality of the card number from the merchant",
                  "Participants: cardholder, merchant, issuer, acquirer, gateway, CA",
                ],
              },
              {
                q: "Why did SET lose to SSL-based payment flows despite stronger guarantees?",
                marks: 3,
                outline: [
                  "SET demands certificates for every party — heavy PKI",
                  "SSL needs only a server certificate",
                  "Merchants already had SSL; card networks moved risk controls elsewhere",
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
      title: "System Security",
      summary:
        "Unit V defends the machine itself: intruders and intrusion detection, password management, malicious software from viruses to ransomware with its countermeasures, DoS and DDoS attacks, the threats and controls of information security in practice, firewall design principles and types, and trusted systems under the Common Criteria.",
      chapter: {
        number: "05",
        title: "System Defence: Intruders, Malware, Firewalls",
        intro:
          "Unit V covers intruders and intrusion detection, password management, the taxonomy of malicious software with viruses and related threats and their countermeasures, threats and attacks on information security including DoS and DDoS, the security controls required in practice, firewall design principles, trusted systems and the Common Criteria for IT security evaluation.",
        inOneBreath:
          "Intruders are masqueraders, misfeasors and clandestine users; IDS answers with sensors, analyzers and consoles (signature vs anomaly detection) and delivers deterrence, detection-and-recovery and quality control. Passwords survive only salted slow hashing. Malware spans viruses (need hosts, four phases), worms (self-propagate), trojans and ransomware; countermeasures are detection, identification, removal. DoS floods one source; DDoS floods from a botnet — filter, rate-limit, anycast. Firewalls: packet filter, stateful, application gateway; trusted systems rest on a reference monitor and Bell-LaPadula, certified EAL1-7 by the Common Criteria.",
        sections: [
          {
            number: "5.1",
            title: "Intruders",
            body: [
              "An intruder (hacker/cracker) is someone gaining unauthorized access to a system or its privileges. Stallings's three classes: the masquerader — an outsider who penetrates a system by impersonating a legitimate user and exploits the target's accounts; the misfeasor — a legitimate user who misuses their own privileges (an insider escalating rights, reading files beyond their role); and the clandestine user — someone who seizes supervisory control to evade audit and access control (rootkit operators). The classes matter because each defeats a different control: masqueraders fall to strong authentication, misfeasors to least privilege and auditing, clandestine users to integrity monitoring.",
              "Intrusion techniques cluster around credentials and code. Password guessing exploits weak or default passwords (dictionary and hybrid attacks); password capture watches keystrokes or network traffic (keyloggers, sniffing); trojans and logic bombs plant code that grants later entry; buffer overflows hijack programs into shellcode; and social engineering (phishing, pretexting) walks the human layer around every technical control. The defender's response is a layered loop: prevent with authentication and patching, detect with IDS (next section), react with ejection and recovery, and deter with visible audit and prosecution — the recognition that some intrusions will succeed and the system must notice.",
              "A worked chain: a masquerader phishes a password (social engineering), logs in (masquerade), plants a rootkit to hide (clandestine), and a legitimate admin later abuses the same box (misfeasor) — one compromised host exhibits all three classes. The exam angle: define intruder, list the three classes with one sentence and one countermeasure each, list four intrusion techniques, and close with the prevention-detection-reaction-deterrence cycle. Jun 2025's Q8a pairs this section directly with password management, so rehearse the two answers back to back.",
            ],
            keyTerms: [
              { term: "Masquerader", definition: "Outsider impersonating a legitimate user — countered by strong authentication." },
              { term: "Misfeasor", definition: "Legitimate insider misusing assigned privileges — countered by least privilege and audit." },
              { term: "Clandestine user", definition: "Attacker seizing supervisory control to evade auditing — countered by integrity monitoring." },
              { term: "Social engineering", definition: "Manipulating people to reveal credentials — the human layer around technical controls." },
              { term: "Rootkit", definition: "Malware that hides its presence and grants persistent supervisory access." },
            ],
            bullets: [
              "Three intruder classes: masquerader (outsider), misfeasor (insider), clandestine user (control-seizer).",
              "Techniques: password guessing/capture, trojans, buffer overflows, social engineering.",
              "Masqueraders fall to authentication; misfeasors to least privilege + audit.",
              "Clandestine users need integrity checking to be exposed.",
              "Defence cycle: prevent -> detect -> react -> deter.",
              "Assume some intrusion succeeds — detection and recovery are not optional.",
            ],
            diagram: {
              kind: "fork",
              title: "Three ways to be an intruder",
              caption: "One start, three classes — each defeated by a different control.",
              start: "Intruder",
              branches: [
                { label: "Masquerader", outcome: "impersonates a user — stopped by strong authentication", good: false },
                { label: "Misfeasor", outcome: "insider abusing real privileges — stopped by least privilege and audit", good: false },
                { label: "Clandestine user", outcome: "seizes supervisory control, evades logs — exposed by integrity monitoring", good: false },
              ],
            },
            table: {
              caption: "Intrusion techniques and their direct countermeasures.",
              headers: ["Technique", "How it works", "Countermeasure"],
              rows: [
                ["Password guessing", "dictionary/hybrid attacks on weak passwords", "salted slow hashing, lockouts"],
                ["Password capture", "keyloggers, network sniffing", "MFA, encrypted channels"],
                ["Trojan / logic bomb", "planted code opens later entry", "code signing, least privilege"],
                ["Buffer overflow", "overwrites memory to hijack execution", "ASLR/DEP, input validation, patching"],
                ["Social engineering", "phishing and pretexting for credentials", "user training, MFA"],
              ],
            },
            callout: {
              type: "tip",
              title: "Class + countermeasure pairs",
              body: "Write the three intruder classes each with its matching control in the same line — masquerader/authentication, misfeasor/least-privilege-audit, clandestine/integrity-monitoring. The pairing (not the bare list) is what the examiner scores.",
            },
            examQuestions: [
              {
                q: "Define intruders. Explain the three classes of intruders and give the countermeasure suited to each, with four common intrusion techniques.",
                marks: 7,
                outline: [
                  "Masquerader: outsider impersonating a user — strong authentication",
                  "Misfeasor: insider misusing privileges — least privilege + auditing",
                  "Clandestine user: seizes supervisory control, evades audit — integrity monitoring",
                  "Techniques: password guessing, capture, trojans, buffer overflow",
                  "Social engineering walks around technical controls",
                  "Defence cycle: prevent, detect, react, deter",
                  "Bridge to IDS (next section) for the detect stage",
                ],
              },
              {
                q: "What distinguishes a masquerader from a misfeasor?",
                marks: 3,
                outline: [
                  "Masquerader: illegitimate user impersonating a legitimate one",
                  "Misfeasor: legitimate user abusing their own real privileges",
                  "Different defences: authentication vs least privilege/audit",
                ],
              },
              {
                q: "Why can intrusions not be fully prevented?",
                marks: 2,
                outline: [
                  "Human layer (phishing) bypasses technical controls",
                  "Zero-day flaws and insider misuse persist despite defences",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Intrusion detection",
            body: [
              "Intrusion detection is the recognition that prevention fails: an IDS identifies activity that violates policy or betrays intrusion. Its three benefits (the May 2024 question, straight from Stallings): first, if an intrusion is detected quickly enough the intruder can be identified, ejected and the damage assessed — and recovery information gathered; second, an effective IDS acts as a deterrent, raising the attacker's risk of getting caught; third, the collected data feeds quality control on the security design — showing which policies and mechanisms actually hold up under attack.",
              "The architecture has three roles: sensors (or collectors) gather audit trails, network packets, logs; the analyzer correlates and classifies using two complementary approaches — signature detection (known attack patterns; precise but blind to zero-days, low false positives) and anomaly detection (statistical profiles of 'normal'; catches novel attacks but generates false positives when users legitimately deviate); and the console presents alerts and lets operators tune. Host-based IDS watches one machine's logs and system calls; network-based IDS watches traffic segments; deployed together they cover each other's blind spots. False positives (alarms on legitimate activity) and false negatives (missed attacks) are the tuning budget — too sensitive and operators ignore it, too lax and attacks sail through.",
              "A worked contrast: a signature IDS spots the string pattern of a known SQLi payload instantly but misses a new zero-day with a different shape; an anomaly IDS flags the sudden 4 a.m. mass file read — a novel exfiltration — but also flags the legitimate backup job that moved to a new schedule. Production systems run both and correlate. The exam angle: define IDS, recite the three benefits, draw the sensor -> analyzer -> console pipeline with both detection approaches, and state the HIDS/NIDS split and the false-positive tradeoff. IDS appeared in May 2023 (short note), May 2024 (role + three benefits) and Jun 2025 (paired with password management).",
            ],
            keyTerms: [
              { term: "IDS", definition: "Intrusion Detection System — identifies activity betraying policy violations or attacks." },
              { term: "Signature detection", definition: "Pattern-matching against known attacks; precise, blind to zero-days." },
              { term: "Anomaly detection", definition: "Statistical deviation from a 'normal' profile; catches novel attacks, false-positive prone." },
              { term: "HIDS / NIDS", definition: "Host-based IDS watches logs and syscalls of one machine; network-based IDS watches traffic." },
              { term: "False positive rate", definition: "Alarms on legitimate behaviour — the tuning budget that decides whether an IDS is usable." },
            ],
            bullets: [
              "Three benefits: quick detection -> eject + recover; deterrence; quality control of security design.",
              "Pipeline: sensors -> analyzer (signature + anomaly) -> console.",
              "Signature detection: known patterns, low false positives, no zero-day coverage.",
              "Anomaly detection: statistical profiles, novel-attack coverage, false positives.",
              "HIDS (logs/syscalls) + NIDS (traffic) complement each other.",
              "Assume prevention fails — detection and response complete the defence.",
            ],
            diagram: {
              kind: "pipeline",
              title: "An IDS in production",
              caption: "Collect, classify, alert — with two engines (signature and anomaly) feeding the same console.",
              stages: [
                { label: "Sensors", note: "logs, syscalls, network packets" },
                { label: "Analyzer", note: "signature matching + anomaly statistics" },
                { label: "Correlation", note: "fuse host + network evidence, score severity" },
                { label: "Console/alerts", note: "operator triage, tuning feedback" },
                { label: "Response", note: "eject intruder, assess damage, recover" },
              ],
            },
            table: {
              caption: "Signature versus anomaly detection.",
              headers: ["Property", "Signature detection", "Anomaly detection"],
              rows: [
                ["Model", "database of known attack patterns", "statistical profile of normal behaviour"],
                ["Catches", "known attacks, precisely", "novel/zero-day deviations"],
                ["Misses", "anything not yet in the database", "attacks that mimic normal behaviour"],
                ["False positives", "low", "high — tuning-intensive"],
                ["Example", "known SQLi payload string", "4 a.m. mass file read"],
              ],
            },
            callout: {
              type: "exam",
              title: "IDS in two sessions",
              body: "May 2024 asked the role and 'three benefits' verbatim; May 2023 listed IDS as a short note. Memorize the three benefits as numbered sentences (identify+eject+recover, deterrence, quality control) — they are the question's exact skeleton.",
            },
            examQuestions: [
              {
                q: "Estimate what is the role of intrusion detection system. What are the three benefits that can be provided by the intrusion detection system?",
                marks: 7,
                appearances: ["May 2024"],
              },
              {
                q: "Write short notes on the following: (a) IDS (b) Encrypted tunnel (c) Cookies (d) HTTP.",
                marks: 14,
                appearances: ["May 2023"],
              },
              {
                q: "Compare signature-based and anomaly-based intrusion detection: what each catches, its false-positive behaviour, and why production systems run both.",
                marks: 7,
                outline: [
                  "Signature: pattern database of known attacks",
                  "Precise; low false positives; blind to zero-days",
                  "Anomaly: statistical normal profile",
                  "Catches novel deviations; high false positives need tuning",
                  "HIDS watches logs/syscalls; NIDS watches traffic",
                  "Correlation of both covers each engine's blind spots",
                  "Close: three benefits (recover, deter, quality control)",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Password management",
            body: [
              "Passwords remain the front line of authentication, and their management has two halves. The storage half: systems must never store plaintext passwords — they store salted hashes. On account creation, the system generates a random salt, computes H(salt || password) with a deliberately slow function (bcrypt, scrypt, PBKDF2), and stores (salt, hash). At login it recomputes and compares. The salt defeats precomputation: rainbow tables of password->hash become useless because every user's hash mixes in a unique salt, and identical passwords no longer produce identical stored hashes. The slowness (thousands of iterations) makes offline dictionary attacks expensive per guess.",
              "The selection half: passwords must resist guessing, which pits memorability against entropy. Front-end techniques (user education, strength meters, proactive checkers that reject weak passwords at creation) shape what users choose; back-end techniques (reactive checkers that crack the system's own password file periodically, computer-generated pronounceable passwords, password expiry and reuse bans) police what slips through. The modern consensus — NIST 800-63 — prefers long passphrases over complex short strings, drops forced periodic rotation (which degrades choices), and mandates checking against breach corpora; multi-factor authentication caps the damage when a password does leak.",
              "A worked walkthrough of the salt's effect: user A and user B both choose 'hunter2'. Without salts, both stored rows hold the same hash H('hunter2') — cracking one cracks both, and a precomputed rainbow table matches instantly. With per-user salts: A stores (sA, H(sA||'hunter2')), B stores (sB, H(sB||'hunter2')) — different digests, and the attacker must recompute the table per salt or per guess. The exam angle: explain load-new-password and password-verification with the salted-hash pipeline, name the front-end/back-end selection strategies, and justify slow hashing — Jun 2025 asked exactly this paired with intrusion detection.",
            ],
            keyTerms: [
              { term: "Salt", definition: "A random per-user value hashed with the password so identical passwords yield different stored hashes." },
              { term: "Rainbow table", definition: "Precomputed password->hash lookup — defeated by per-user salts." },
              { term: "PBKDF2/bcrypt", definition: "Deliberately slow key-derivation functions making offline guessing expensive." },
              { term: "Proactive password checker", definition: "Front-end rule engine rejecting weak passwords at creation time." },
              { term: "MFA", definition: "Multi-factor authentication — caps the damage of a leaked password." },
            ],
            bullets: [
              "Never store plaintext: store (salt, slow-hash(salt || password)).",
              "Salts kill rainbow tables and cross-user hash reuse.",
              "Slow hashing (bcrypt/scrypt/PBKDF2) taxes offline dictionary attacks.",
              "Front-end selection: education, strength meters, proactive checkers.",
              "Back-end selection: reactive cracking of your own password file, expiry policy.",
              "Modern policy: long passphrases, breach-corpus checks, MFA — not forced monthly rotation.",
            ],
            diagram: {
              kind: "cycle",
              title: "The password lifecycle",
              caption: "From choice to retirement — every stage is a place to lose or defend the credential.",
              steps: [
                { label: "Choose", note: "passphrase; proactive checker rejects weak picks" },
                { label: "Salt + slow-hash", note: "store (salt, hash) — never plaintext" },
                { label: "Verify", note: "recompute at login; constant-time compare" },
                { label: "Monitor", note: "reactive cracking; breach-corpus checks" },
                { label: "Rotate/retire", note: "revoke on compromise; MFA limits blast radius" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "pwhash.py — salted slow hashing, the storage half",
              code: `import hashlib, os, hmac

def store_password(password):
    salt = os.urandom(16)                        # unique per user
    dk = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, 200_000)
    return salt, dk

salt, dk = store_password("S3cure!pass")
# verification recomputes with the SAME salt - constant-time compare
check = hashlib.pbkdf2_hmac("sha256", "S3cure!pass".encode(), salt, 200_000)
print(hmac.compare_digest(dk, check))            # True
# rainbow tables fail: every salt changes every hash`,
            },
            callout: {
              type: "tip",
              title: "Salt, then slowness — both halves",
              body: "The common half-answer is 'we hash passwords'. Full marks need both: a per-user SALT (defeats precomputation) and a deliberately SLOW hash (defeats offline brute force). One sentence each, in order, plus the login-time recomputation loop.",
            },
            examQuestions: [
              {
                q: "What is Intrusion Detection? Explain Password Management.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Explain salted password hashing end to end — storage at account creation and verification at login — and justify why salts defeat precomputed dictionary attacks.",
                marks: 7,
                outline: [
                  "Never store plaintext passwords",
                  "Generate a random per-user salt",
                  "Store (salt, slow-hash(salt || password)) — bcrypt/PBKDF2",
                  "Login: recompute with the stored salt, constant-time compare",
                  "Identical passwords -> different stored hashes",
                  "Rainbow tables become useless per salt",
                  "Slow iterations tax each offline guess",
                ],
              },
              {
                q: "Give two front-end and two back-end password selection strategies.",
                marks: 3,
                outline: [
                  "Front-end: user education; proactive strength checkers",
                  "Back-end: reactive cracking of the password file; expiry/reuse policy",
                  "Goal: keep entropy high without destroying usability",
                ],
              },
              {
                q: "Why did NIST drop forced periodic password rotation?",
                marks: 2,
                outline: [
                  "Users respond with predictable tweaks (Password1 -> Password2)",
                  "Entropy drops; breach-corpus checks are more effective",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Malicious software: viruses and related threats",
            body: [
              "Malicious software (malware) is any program inserted into a system with hostile intent — grouped by propagation (viruses that infect a host file versus worms that self-propagate over networks), by payload (what damage it does: steal, encrypt, destroy), and by persistence (memory-resident or not). The virus is the classical case, executing in four phases: dormant (idle, waiting), propagation (copies itself into other programs), triggering (activates on a condition — date, count), and execution (the payload runs). Virus types the papers ask for: parasitic (attaches to executables), memory-resident (lodges in RAM to infect every run), boot-sector (infects the boot block, activating before the OS), stealth (hides its modifications from the OS), polymorphic (mutates its signature with each copy), and metamorphic (rewrites its own code entirely).",
              "Worms need no host: they exploit network services to copy themselves (Morris worm 1988; WannaCry 2017 spread as a worm then delivered ransomware). Trojans masquerade as useful software while performing covert tasks; logic bombs detonate on triggers; ransomware encrypts data for payment; spyware and adware surveil; rootkits hide below the OS. The May 2023 question pairs virus and worms and asks for the types; the May 2024 question asks viruses plus related threats and countermeasures — so prepare the taxonomy and the countermeasures in one answer.",
              "Countermeasures follow detection -> identification -> removal. Detection: signature scanners match code patterns against a malware database (fast, blind to zero-days and to polymorphic/morphic variants); integrity checking compares file hashes to stored baselines (catches any modification, including unknown malware); behavioural/heuristic detection watches for virus-typical acts (self-replication, writing to executables, hooking interrupts). Identification pins the exact variant (for forensics and removal), and removal restores infected files from clean backups or rebuilds hosts. Prevention — patching, least privilege, disabling macros, signed code, user awareness — shrinks the attack surface before any scanner runs. The exam angle: define malware, give the four virus phases and five types, contrast virus vs worm, and list the three countermeasure stages with one example each.",
            ],
            keyTerms: [
              { term: "Virus", definition: "Malware that attaches to a host program and replicates when the host runs — dormant, propagation, triggering, execution phases." },
              { term: "Worm", definition: "Self-propagating malware needing no host file — spreads by exploiting network services." },
              { term: "Polymorphic virus", definition: "Mutates its appearance with each infection to defeat signature scanners." },
              { term: "Trojan / logic bomb / ransomware", definition: "Disguised hostile program / trigger-detonated payload / encryption-for-ransom." },
              { term: "Integrity checking", definition: "Comparing file hashes to baselines — catches unknown malware that modifies files." },
            ],
            bullets: [
              "Malware taxonomy: propagation (virus vs worm), payload, persistence.",
              "Virus phases: dormant -> propagation -> triggering -> execution.",
              "Types: parasitic, memory-resident, boot-sector, stealth, polymorphic, metamorphic.",
              "Worm = no host, network self-propagation (Morris, WannaCry).",
              "Countermeasures: detection (signatures, integrity, heuristics) -> identification -> removal.",
              "Prevention: patching, least privilege, macro disabling, signed code, awareness.",
            ],
            diagram: {
              kind: "fork",
              title: "The malware family tree",
              caption: "One hostile intent, three propagation strategies — and every branch gets its own countermeasure.",
              start: "Malicious software",
              branches: [
                { label: "Virus", outcome: "needs a host program; replicates on execution — scanners + integrity checks", good: false },
                { label: "Worm", outcome: "self-propagates over the network — patching + firewalls cut its paths", good: false },
                { label: "Trojan / logic bomb", outcome: "disguised or trigger-dormant — signed code + behavioural detection", good: false },
              ],
            },
            table: {
              caption: "Malware taxonomy — the May 2023/2024 answer in one table.",
              headers: ["Type", "Needs host?", "Signature", "Example"],
              rows: [
                ["Parasitic virus", "yes — attaches to executables", "dormant/propagation/trigger/execute", "classic file infectors"],
                ["Boot-sector virus", "yes — the boot block", "runs before the OS loads", "Stoned"],
                ["Stealth virus", "yes", "hides modifications from the OS", "Skism"],
                ["Polymorphic virus", "yes", "mutates signature per copy", "Tequila"],
                ["Worm", "no — network self-propagation", "exploits services directly", "Morris, WannaCry"],
                ["Ransomware / trojan", "varies", "payload-driven", "CryptoLock variants"],
              ],
            },
            callout: {
              type: "exam",
              title: "Viruses in both sessions",
              body: "May 2023 asked virus vs worms with types; May 2024 asked viruses, related threats and countermeasures. One prepared answer — the four phases, the six types, the virus/worm contrast and the detection-identification-removal trio — covers both questions verbatim.",
            },
            examQuestions: [
              {
                q: "What is Virus and Worms? Explain different types of viruses.",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "What are Viruses? Explain the virus related threats and the counter measures applied.",
                marks: 7,
                appearances: ["May 2023", "May 2024"],
              },
              {
                q: "List the four phases of a virus lifecycle and explain why polymorphic viruses defeat signature scanners.",
                marks: 7,
                outline: [
                  "Dormant: idle, awaiting conditions",
                  "Propagation: copies itself into host programs",
                  "Triggering: activates on date/count/event",
                  "Execution: payload runs — damage begins",
                  "Polymorphic mutation changes the scanner's match pattern per copy",
                  "A new signature is needed for every variant",
                  "Integrity/behavioural detection replaces pattern reliance",
                ],
              },
              {
                q: "State the difference between a virus and a worm with one example of each.",
                marks: 3,
                outline: [
                  "Virus: needs a host program to replicate",
                  "Worm: self-propagates over the network without a host",
                  "Examples: file infector vs Morris/WannaCry",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "DoS and DDoS attacks",
            body: [
              "A denial-of-service (DoS) attack aims to prevent legitimate use of a service — not to steal data but to exhaust a resource. The classical mechanics: flood attacks (ICMP, UDP, TCP SYN floods) exceed bandwidth, memory or connection tables; protocol exploits abuse misbehaving implementations (teardrop, ping of death); and vulnerability-triggered crashes take the service down entirely. The SYN flood is the canonical worked example: the attacker sends TCP SYN packets with spoofed sources; the server allocates half-open connection state and replies with SYN-ACKs that never complete; the backlog fills and real users are refused — the attack costs the attacker nothing per packet and the server everything per handshake.",
              "A distributed denial-of-service (DDoS) attack scales the same idea with a botnet: attacker -> handlers -> thousands of compromised bots -> victim, each bot contributing modest traffic until the aggregate drowns the target. Amplification multiplies it: the bot sends small queries to third-party servers (DNS resolvers, memcached, NTP) with the victim's spoofed source address, and those servers reply with responses 50-5000x larger aimed at the victim — reflection hides the bots and multiplies the flood. DDoS is May 2024's short-note topic and Jun 2025's short-note option; the DoS/DDoS distinction plus the botnet chain is the expected content.",
              "Defences layer by position. At the host: SYN cookies (encode state into the sequence number instead of allocating it), connection limits, patching. At the network edge: ingress/egress filtering (spoofed sources never leave the ISP), rate limiting, firewalls. Above the network: content delivery networks and anycast absorb floods across hundreds of locations; scrubbing centres filter attack traffic upstream; and ISP cooperation blackholes attack flows. The exam angle: define DoS, distinguish DDoS (botnet, handlers/agents) with the handler-agent diagram, give the SYN-flood walkthrough, name amplification/reflection, and list defences at host, edge and CDN layers.",
            ],
            keyTerms: [
              { term: "DoS attack", definition: "Flooding or crashing a service to deny legitimate users — SYN flood is the canonical case." },
              { term: "DDoS", definition: "DoS amplified by a botnet: attacker -> handlers -> agents -> victim, aggregate traffic overwhelms." },
              { term: "SYN flood", definition: "Spoofed SYNs fill the server's half-open backlog; SYN cookies defend by not allocating state." },
              { term: "Amplification / reflection", definition: "Third-party servers reply large to a spoofed victim address — multiplies traffic, hides bots." },
              { term: "Anycast / CDN scrubbing", definition: "Distributing the flood across many locations and filtering it upstream." },
            ],
            bullets: [
              "DoS: exhaust bandwidth, memory or connection state; no data theft, pure denial.",
              "SYN flood: spoofed SYNs -> half-open backlog fills -> SYN cookies defend.",
              "DDoS: botnet of handlers and agents; each bot small, aggregate fatal.",
              "Amplification: DNS/NTP/memcached reply huge to spoofed victim addresses.",
              "Defences: SYN cookies and limits (host), filtering and rate limits (edge), CDN/anycast/scrubbing (upstream).",
              "Egress filtering at ISPs kills spoofed sources at the source.",
            ],
            diagram: {
              kind: "flow",
              title: "A DDoS attack chain",
              caption: "The attacker never touches the victim — handlers direct bots, bots flood, amplifiers multiply.",
              steps: [
                { label: "Attacker", note: "commands the botnet via handlers" },
                { label: "Handlers", note: "relay orders to compromised agents" },
                { label: "Bot army", note: "each bot sends modest traffic" },
                { label: "Amplifiers", note: "DNS/memcached reflect huge replies at the victim" },
                { label: "Victim", note: "link and service saturated — legitimate users denied" },
              ],
            },
            table: {
              caption: "DoS versus DDoS and the layered defences.",
              headers: ["Aspect", "DoS", "DDoS"],
              rows: [
                ["Source", "single machine", "botnet of thousands"],
                ["Traceability", "source findable", "reflection hides the bots"],
                ["Scale", "limited by one host", "aggregate + amplification (1000x)"],
                ["Host defence", "SYN cookies, limits", "same, plus upstream filtering"],
                ["Edge defence", "firewall rate limiting", "ingress/egress filtering, scrubbing"],
                ["Upstream defence", "rarely needed", "CDN/anycast, ISP blackholing"],
              ],
            },
            callout: {
              type: "tip",
              title: "SYN cookies in one line",
              body: "The one mechanism worth quoting: SYN cookies encode connection state into the TCP sequence number itself, so the server allocates nothing until the client's ACK returns — a spoofed SYN wastes nothing. It converts the SYN-flood resource asymmetry back in the server's favour.",
            },
            examQuestions: [
              {
                q: "Write short notes (any three): (a) DoS and DDoS attack (b) Hash function (c) Secure Socket Layer (d) Steganography.",
                marks: 14,
                appearances: ["May 2024"],
              },
              {
                q: "Explain a SYN flood attack step by step and name three defences at host, network-edge and CDN layers.",
                marks: 7,
                outline: [
                  "Attacker sends TCP SYNs with spoofed source addresses",
                  "Server allocates half-open state and sends SYN-ACKs",
                  "ACKs never return; backlog fills",
                  "Legitimate connections refused — denial achieved",
                  "Host: SYN cookies, connection limits, patches",
                  "Edge: ingress/egress filtering, rate limiting",
                  "Upstream: CDN/anycast and scrubbing centres",
                ],
              },
              {
                q: "How does amplification multiply a DDoS and hide its bots?",
                marks: 3,
                outline: [
                  "Bots send small queries with the victim's spoofed address",
                  "Open resolvers reply with responses far larger than the query",
                  "Reflection means replies come from the resolvers, not the bots",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Threats, attacks and security controls",
            body: [
              "Beyond the named families, information security in practice fights a threat catalogue the papers sample directly: SQL injection (May 2023) — user input concatenated into SQL so data becomes code ('name = admin' AND pw = '' OR '1'='1' makes the WHERE clause always true, dumping the user table); cross-site scripting (May 2023) — attacker-supplied JavaScript executes in other users' browsers (reflected: script in a crafted URL; stored: script persisted in a forum post; DOM: client-side sink misuse), stealing cookies and sessions; plus CSRF, phishing and insider threats. The shared root cause of SQLi and XSS is the same: untrusted data crossing into a code context without separation.",
              "The countermeasures follow that root cause. For SQLi: parameterized queries/prepared statements (driver separates code from data — the fix), input validation (whitelist shape and type), escaping as a fallback, least-privilege DB accounts, and web application firewalls as a safety net. For XSS: output encoding per context (HTML, attribute, JS, URL), templating engines that escape by default, Content-Security-Policy to neutralize injected scripts, HttpOnly cookies so stolen scripts cannot read them, and input validation. A worked contrast shows the difference: the vulnerable query string 'SELECT * FROM users WHERE name=' + user + '...' concatenates attack input into SQL grammar; the parameterized version passes (SQL, [user]) — the driver sends the grammar and the data separately, and ' OR '1'='1 becomes a harmless literal.",
              "Security controls organize into three families by timing: preventive (stop the incident — firewalls, authentication, validation, encryption), detective (discover it — IDS, logs, audits, honey pots) and corrective (recover — backups, incident response, patches); and into three by nature: administrative (policies, training, separation of duties), technical (the systems above) and physical (locks, cameras, power). Defence in depth stacks them so one failure never equals one breach. The exam angle: explain SQLi with the '1'='1' walkthrough and its prevention, explain XSS with its three classes, and organize controls into the preventive/detective/corrective grid.",
            ],
            keyTerms: [
              { term: "SQL injection", definition: "Untrusted input concatenated into SQL so data becomes executable grammar; fixed by parameterized queries." },
              { term: "XSS", definition: "Attacker JavaScript executing in victims' browsers — reflected, stored and DOM-based classes." },
              { term: "Parameterized query", definition: "SQL grammar sent separately from data; input can never change the query's structure." },
              { term: "Content-Security-Policy", definition: "Browser policy restricting script sources — neutralizes injected JavaScript." },
              { term: "Defence in depth", definition: "Stacked preventive, detective and corrective controls so one failure is not one breach." },
            ],
            bullets: [
              "SQLi: input concatenated into SQL; ' OR '1'='1' makes WHERE always true.",
              "Fix: parameterized queries first; validation, least privilege and WAF behind them.",
              "XSS classes: reflected (URL), stored (persisted post), DOM (client-side sink).",
              "XSS fixes: context-aware output encoding, CSP, HttpOnly cookies.",
              "Controls by timing: preventive, detective, corrective.",
              "Controls by nature: administrative, technical, physical — stack them (defence in depth).",
            ],
            diagram: {
              kind: "layers",
              title: "Defence in depth around a web app",
              caption: "Index 0 is the outermost layer: each ring assumes the one above it will eventually fail.",
              layers: [
                { label: "Input validation", note: "whitelist shape and type at every entry point" },
                { label: "Parameterized queries / output encoding", note: "separate data from code — kills SQLi and XSS at the root" },
                { label: "Web application firewall", note: "filters known attack patterns as a safety net" },
                { label: "Least privilege", note: "DB accounts limited to what the app needs" },
                { label: "Monitoring + backups", note: "detective and corrective — IDS, logs, restore" },
              ],
            },
            table: {
              caption: "Web threats and their root-cause fixes.",
              headers: ["Threat", "How it works", "Primary fix"],
              rows: [
                ["SQL injection", "input becomes SQL grammar (' OR '1'='1')", "parameterized queries"],
                ["XSS (reflected)", "script in a crafted URL executes on the victim", "output encoding + CSP"],
                ["XSS (stored)", "malicious script persisted in content", "escape on output + HttpOnly cookies"],
                ["CSRF", "victim's browser sends forged requests", "anti-CSRF tokens, SameSite cookies"],
                ["Phishing", "fake pages harvest credentials", "MFA, user training"],
                ["Insider misuse", "legitimate access used maliciously", "least privilege + audit"],
              ],
            },
            codeExample: {
              language: "python",
              caption: "sqli.py — vulnerable concatenation vs parameterized query",
              code: `# VULNERABLE: string concatenation lets ' OR '1'='1 change the query
def login_vulnerable(user, password):
    q = "SELECT * FROM users WHERE name='" + user + "' AND pw='" + password + "'"
    return q

print(login_vulnerable("admin", "' OR '1'='1"))
# -> SELECT * FROM users WHERE name='admin' AND pw='' OR '1'='1'  (always true)

# SAFE: parameterized query separates code from data
def login_safe(user, password):
    q = "SELECT * FROM users WHERE name=? AND pw=?"
    return q, (user, password)          # driver escapes the values`,
            },
            callout: {
              type: "tip",
              title: "One root cause, one sentence",
              body: "SQLi and XSS share a root: untrusted data crossing into a code context. Say that sentence first, then give each fix (parameterized queries; context-aware output encoding) — it shows the examiner you understand the pattern, not just the examples.",
            },
            examQuestions: [
              {
                q: "What is SQL Injection (SQLi) and how to prevent from it?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "What is Cross Site Scripting (XSS) and how does it work?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Organize information-security controls into preventive, detective and corrective families, placing five concrete controls and naming the three natures (administrative, technical, physical).",
                marks: 7,
                outline: [
                  "Preventive: firewalls, authentication, input validation, encryption",
                  "Detective: IDS, audit logs, honey pots, file-integrity checks",
                  "Corrective: backups and restore, incident response, patching",
                  "Administrative: policies, training, separation of duties",
                  "Technical: the systems listed above",
                  "Physical: locks, cameras, power protection",
                  "Close: defence in depth — one control's failure must not equal a breach",
                ],
              },
              {
                q: "Name the three classes of XSS and one defence specific to each.",
                marks: 3,
                outline: [
                  "Reflected: validate/encode URL-driven output",
                  "Stored: escape on render + HttpOnly cookies",
                  "DOM-based: safe client-side sinks (textContent, not innerHTML)",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Firewall design principles",
            body: [
              "A firewall is a choke point enforcing an access policy between a trusted internal network and untrusted externals: ALL traffic between the two passes through it, only authorized traffic crosses (per the security policy), and the firewall itself is immune to penetration. Capabilities: a single audit and alarm point, a single security-policy enforcement point, a platform for non-security functions (NAT, VPN endpoints, logging). Limitations: it cannot stop traffic that bypasses it (rogue modems, other tunnels), cannot protect against insider attacks entirely, cannot block virus-laden transfers it cannot inspect, and tolerates some policy-violating traffic by design (it is a filter, not a guarantee).",
              "The three classic designs (the May 2024 'three types with diagrams' question) differ in inspection depth. Packet filter: a router with rules (source/destination IP, port, protocol, direction) applied per packet — fast, transparent, stateless (the 'default deny' vs 'default allow' policy choice lives here; weaknesses: no state, spoofed headers pass, rule-table complexity). Stateful inspection: tracks connections — a connection table records established flows and only packets belonging to known flows return inward, defeating spoofed replies and port scans that fool naive packet filters. Application-level gateway (proxy): a dedicated proxy per service (HTTP, FTP) relays application content and can inspect payload — the deepest visibility, the slowest throughput, and the reason modern next-gen firewalls merge all three.",
              "A worked rule example: an egress policy 'allow internal HTTP(S), deny everything else' becomes the rule list: (1) allow TCP from internal:1024-65535 to any:443; (2) allow TCP to any:80; (3) deny IP any any — the trailing deny-all is the default-deny principle. The exam angle: define the firewall and its three design goals (choke point, policy enforcement, immunity), give the three types with their diagrams and one weakness each, state default-deny vs default-allow, and list limitations — May 2023 asked 'what is a firewall and how does it work', May 2024 asked the three types, Jun 2025 listed firewalls as a short note.",
            ],
            keyTerms: [
              { term: "Firewall", definition: "Choke point enforcing an access policy between trusted and untrusted networks." },
              { term: "Packet filter", definition: "Per-packet rule matching on IPs, ports, protocol, direction — fast, stateless." },
              { term: "Stateful inspection", definition: "Connection tracking so only packets of established flows return — defeats spoofed replies." },
              { term: "Application gateway", definition: "Per-service proxy inspecting payload — deepest visibility, highest cost." },
              { term: "Default deny", definition: "The design principle: deny everything not explicitly permitted." },
            ],
            bullets: [
              "Design goals: single choke point, policy enforcement, firewall immune to penetration.",
              "Packet filter: rules per packet; stateless; fast; spoofable headers, complex tables.",
              "Stateful: connection table; only established-flow packets return inward.",
              "Application gateway: per-service proxy; inspects payload; slow.",
              "Policy choice: default deny (allow-list) beats default allow (block-list).",
              "Limitations: bypass traffic, insider attacks, uninspectable payloads.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Firewall types by inspection depth",
              caption: "Deeper inspection up the pyramid, higher cost with it — modern firewalls merge all three tiers.",
              tiers: [
                { label: "Application gateway (proxy)", note: "payload-level inspection per service; deepest, slowest" },
                { label: "Stateful inspection", note: "connection tracking; only established flows return" },
                { label: "Packet filter", note: "per-packet rules on IPs/ports; fastest, shallowest" },
              ],
            },
            table: {
              caption: "The three firewall types (May 2024's diagrams question).",
              headers: ["Type", "Inspects", "Strength", "Weakness"],
              rows: [
                ["Packet filter", "each packet's headers", "fast, transparent", "stateless; spoofed headers; complex rules"],
                ["Stateful inspection", "headers + connection state", "blocks spoofed replies and scans", "no payload understanding"],
                ["Application gateway", "application payload via proxy", "content-level control, logging", "one proxy per service; slow"],
                ["Next-gen (hybrid)", "all three layers + identity", "the modern default", "cost, configuration complexity"],
              ],
            },
            callout: {
              type: "exam",
              title: "Firewalls in every session",
              body: "May 2023 asked what a firewall is and how it works; May 2024 asked for the three types with diagrams; Jun 2025 listed firewalls as a short-note option. Prepare one answer: definition + three goals, the three types with their inspection depths, and the default-deny principle.",
            },
            examQuestions: [
              {
                q: "What is Firewall? How Does a Firewall work?",
                marks: 7,
                appearances: ["May 2023"],
              },
              {
                q: "Illustrate the three common types of firewalls with diagrams.",
                marks: 7,
                appearances: ["May 2023", "May 2024"],
              },
              {
                q: "State the design goals of a firewall, sketch the rule list for a default-deny egress policy, and list four limitations.",
                marks: 7,
                outline: [
                  "Goals: choke point, policy enforcement, self-immunity",
                  "Packet filter, stateful inspection, application gateway — one line each",
                  "Rules: allow 443, allow 80, deny any any (default deny)",
                  "Limitation 1: traffic bypassing the firewall",
                  "Limitation 2: insider attacks behind it",
                  "Limitation 3: uninspectable encrypted payloads",
                  "Limitation 4: policy-violating traffic it must still tolerate",
                ],
              },
              {
                q: "Why does stateful inspection defeat attacks that fool a plain packet filter?",
                marks: 3,
                outline: [
                  "The filter sees valid-looking headers on every packet",
                  "Stateful tables know which connections actually exist",
                  "Packets claiming established flows without a table entry are dropped",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Trusted systems and the Common Criteria",
            body: [
              "A trusted system is one relied upon to enforce a security policy correctly — trusted not because it is safe but because breaking its guarantees breaks everything above it. The enforcement core is the reference monitor: an abstraction mediating every subject-object access with three requirements — complete mediation (every access is checked, no exceptions), isolation (tamper-proof and unbypassable), and verifiability (small enough to be analysed and proven correct). Its implementation in a kernel is the trusted computing base (TCB) — all hardware, firmware and software responsible for enforcing the policy; TCB size is the attack surface of trust itself.",
              "Multilevel security makes the idea concrete: classify subjects (users, processes) and objects (files, devices) at sensitivity levels and enforce the Bell-LaPadula model — 'no read up' (simple security property: a subject cannot read an object of higher sensitivity) and 'no write down' (star property: a subject cannot write to an object of lower sensitivity, preventing leaks downward). Together they keep classified information classified. Assurance is measured, not assumed: TCSEC (the US Orange Book) graded systems D through A1, and its international successor is the Common Criteria (ISO/IEC 15408), where vendors state a Security Target (ST) against a Protection Profile (PP) for their Target of Evaluation (TOE), licensed labs evaluate, and the result is an Evaluation Assurance Level (EAL 1-7) — EAL1 functionally tested up to EAL7 formally verified.",
              "A worked reading of the EALs: EAL2 (structurally tested) is the common commercial target; EAL4 (methodically designed, tested and reviewed) is the usual floor for government procurement; EAL5-7 add formal models and verification and are reserved for high-assurance military systems. The exam angle: define trusted system and reference monitor with its three properties, state the two Bell-LaPadula rules with the leak each prevents, name PP/ST/TOE, and list the EAL ladder — Jun 2025 asked trusted systems as a short-note option, which is exactly this package compressed.",
            ],
            keyTerms: [
              { term: "Reference monitor", definition: "The mediating abstraction enforcing every access — complete mediation, isolation, verifiability." },
              { term: "Trusted computing base (TCB)", definition: "All hardware/software responsible for enforcing the security policy — the kernel of trust." },
              { term: "Bell-LaPadula", definition: "MLS model: no read up (confidentiality up), no write down (no leaks down)." },
              { term: "Common Criteria (ISO 15408)", definition: "International evaluation standard: PP, ST, TOE and EAL 1-7 assurance levels." },
              { term: "EAL", definition: "Evaluation Assurance Level: EAL1 functionally tested through EAL7 formally verified." },
            ],
            bullets: [
              "Trusted system: relied on to enforce policy correctly; its failure breaks everything above.",
              "Reference monitor: complete mediation, isolation, verifiability.",
              "TCB = the totality of enforcing mechanisms; smaller TCB, stronger assurance.",
              "Bell-LaPadula: no read up, no write down — the two MLS rules.",
              "Common Criteria: PP (requirements), ST (vendor claim), TOE (evaluated product), EAL 1-7.",
              "EAL4 is the common government floor; EAL5-7 add formal verification.",
            ],
            diagram: {
              kind: "flow",
              title: "How a product earns its EAL",
              caption: "From requirements to rating: the Common Criteria pipeline in four steps.",
              steps: [
                { label: "Target of Evaluation", note: "the product offered for certification" },
                { label: "Security Target vs Protection Profile", note: "vendor claims against a requirements profile" },
                { label: "Licensed-lab evaluation", note: "design review, testing, vulnerability analysis" },
                { label: "EAL rating issued", note: "EAL1-7 — assurance, not a security guarantee" },
              ],
            },
            table: {
              caption: "The seven Evaluation Assurance Levels.",
              headers: ["EAL", "Name", "Adds over the previous", "Typical use"],
              rows: [
                ["EAL1", "functionally tested", "functional testing", "commodity products"],
                ["EAL2", "structurally tested", "developer documentation review", "common commercial"],
                ["EAL3", "methodically tested", "focused development controls", "moderate assurance"],
                ["EAL4", "methodically designed", "formal modular design review", "government procurement floor"],
                ["EAL5-7", "semi-formal to formal verification", "formal models, proofs", "military / high assurance"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two rules, three letters, seven levels",
              body: "The trusted-systems answer compresses to: Bell-LaPadula's 'no read up, no write down'; the Common Criteria's PP/ST/TOE; the EAL ladder 1-7 with EAL4 as the government floor. Jun 2025 listed trusted systems as a short-note option — those three items are the whole note.",
            },
            examQuestions: [
              {
                q: "Write short notes on following (any two): (i) DoS (ii) Firewalls (iii) Trusted Systems.",
                marks: 7,
                appearances: ["Jun 2025"],
              },
              {
                q: "Explain the reference monitor concept and its three requirements, then state the two Bell-LaPadula rules and the leak each prevents.",
                marks: 7,
                outline: [
                  "Reference monitor mediates every subject-object access",
                  "Complete mediation: no access escapes checking",
                  "Isolation: tamper-proof, unbypassable",
                  "Verifiability: small enough to analyse and prove",
                  "Implementation = the trusted computing base (TCB)",
                  "No read up: cannot read higher sensitivity — stops unauthorized disclosure",
                  "No write down: cannot write lower sensitivity — stops leaks downward",
                ],
              },
              {
                q: "In the Common Criteria, what do PP, ST and TOE stand for, and how do they relate to the EAL awarded?",
                marks: 3,
                outline: [
                  "PP: Protection Profile — the reusable requirements set",
                  "ST: Security Target — the vendor's specific claim",
                  "TOE: Target of Evaluation — the product being judged",
                  "The lab evaluates the TOE against the ST and issues EAL 1-7",
                ],
              },
              {
                q: "Why is an EAL rating assurance rather than a promise of security?",
                marks: 2,
                outline: [
                  "EAL measures how rigorously the claim was evaluated",
                  "A rigorously evaluated product can still contain exploitable flaws",
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
      heading: "Exam weightage — where to spend the hours",
      weightedTopics: [
        { topic: "RSA: key generation, Euler's totient, factoring problem, attacks", weight: "≈ 21 marks", note: "Asked in all three papers seen — May 2023 (totient + factoring), May 2024 (G/e=3/d=11/n=15 numeric), Jun 2025 (enc/dec + attacks). Highest-yield topic in the syllabus." },
        { topic: "Block ciphers: DES structure, S-boxes, AES steps + key expansion, modes of operation", weight: "≈ 28 marks", note: "Jun 2025 asked block cipher principles, S-boxes/avalanche, diffusion+confusion+AES steps and ECB; May 2024 asked AES key generation and the five modes. Four 7-markers per paper live here." },
        { topic: "Classical ciphers: Caesar, Playfair, transposition, steganography", weight: "≈ 14-21 marks", note: "May 2024 Caesar numeric, Jun 2025 Playfair, steganography in all three sessions (direct question May 2023 + Jun 2025, short note May 2024). Cheap, guaranteed marks." },
        { topic: "Diffie-Hellman: primitive roots, the q=11/alpha=7 numerical", weight: "≈ 14-21 marks", note: "Full 14-mark numerical in May 2024; algorithm + example in Jun 2025; the mod-arithmetic/primitive-root sub-question (75 mod 119, roots of 11 and 5) came with it." },
        { topic: "Security principles and attacks: CIA + non-repudiation, threat vs attack, passive/active, security vs protection", weight: "≈ 7-14 marks", note: "May 2023 (critical characteristics), May 2024 (fabrication/interception/non-repudiation/integrity), Jun 2025 (threat/attack categories, security vs protection). The Unit I opener is nearly always present." },
        { topic: "System security: IDS, password management, viruses, firewalls, trusted systems", weight: "≈ 14-28 marks", note: "May 2024 IDS benefits + three firewall types + virus countermeasures; May 2023 firewall how-it-works + SQLi + XSS + virus types + IDS short note; Jun 2025 intrusion detection/password management + DoS/firewalls/trusted systems short notes." },
        { topic: "Authentication and applied protocols: Kerberos, PKI, PGP, IPsec, SSL, SET", weight: "≈ 7-14 marks", note: "May 2024 Kerberos requirements + PGP block diagram + SET; May 2023 IPsec components + PKI's six components + URL/URI + authentication systems; Jun 2025 double encryption in Kerberos." },
        { topic: "Hashing, MAC and authentication: hash benefits, HMAC, message authentication", weight: "≈ 7-14 marks", note: "May 2023 hashing benefits + attacks addressed by message authentication; May 2024 hash-function short note; Jun 2025 the justification trap ('hashing does not ensure integrity') + MAC for authentication and confidentiality." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for the three past papers (May 2023, May 2024, Jun 2025). Every cipher in this subject is numerical — do each one by hand at least once: Caesar with key 1, Playfair on MONARCHY, RSA with G and e=3/d=11/n=15, Diffie-Hellman with q=11/alpha=7. The muscle memory is the marks.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — principles and classical ciphers", tasks: ["CIA + non-repudiation + the extended characteristics list", "X.800 attacks/services/mechanisms with one mapping", "Symmetric cipher model + n(n-1)/2 key arithmetic", "Caesar (key 1 on 'Laughter is the best medicine'), Playfair on MONARCHY", "Rail fence on ATTACKATDAWN; steganography vs cryptography table"] },
        { week: "Week 2", focus: "Unit II — DES, AES, modes", tasks: ["Feistel equations + design parameters", "DES structure, S-box purpose, avalanche (~34/64)", "Differential (2^47) vs linear (2^43) vs brute force (2^56)", "AES: four transformations, key expansion, 128/192/256 -> 10/12/14", "Five modes with CBC and CTR deep-dives; double DES MITM arithmetic", "Stream ciphers: C1 XOR C2 = P1 XOR P2"] },
        { week: "Week 3", focus: "Unit III — public key and hashes (part 1)", tasks: ["Public-key principles + trapdoor functions", "RSA key generation + the G -> 13 -> 7 numeric by hand", "Euler's totient, factoring problem, three attacks with defences", "Diffie-Hellman q=11/alpha=7 trace; primitive roots of 11 and 5", "Key management: announcement -> directory -> authority -> certificates"] },
        { week: "Week 4", focus: "Unit III — authentication machinery (part 2)", tasks: ["ECC curve equation + key-size equivalence table", "Message authentication requirements; MAC vs signature vs hash", "Hash properties, SHA family, HMAC composition", "The Jun 2025 justification: hashing alone does not authenticate", "Digital signatures: hash-then-sign; DSS vs RSA signatures"] },
        { week: "Week 5", focus: "Unit IV — deployed protocols", tasks: ["Kerberos: requirements, three-step exchange, v4/v5, double encryption", "X.509 fields + PKI's six components", "PGP pipeline: sign -> compress -> encrypt -> radix-64", "IPsec: SPD/SAD/SAs, AH vs ESP, transport vs tunnel, IKE phases", "SSL handshake steps; URL vs URI; SET dual signature"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Intruder classes + IDS three benefits + signature vs anomaly", "Salted password hashing walkthrough", "Malware taxonomy + virus phases + countermeasures", "DoS/DDoS chain + SYN flood + defences; SQLi/XSS fixes", "Firewall types + default deny; reference monitor + EALs", "Two full past papers under 3-hour timing"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "The paper structure is fixed: 8 questions, attempt 5, every question 14 marks split as 7+7 halves — so each half is a tight 7-mark answer, not an essay. Budget 15 minutes per question and bank the numericals first.",
        "Every session asks at least two pure numericals: one classical cipher (Caesar/Playfair) and one RSA or Diffie-Hellman. Do these first — they are fast, exact, and full-mark when the arithmetic is shown step by step.",
        "Show every modular step: 7^3 mod 15 = 343 - 22*15 = 13, not just '13'. Examiners award the working; a bare answer risks losing half the marks if a digit slips.",
        "Pair every algorithm with its diagram: Kerberos exchange, PGP pipeline, IPsec modes, SSL handshake, the three firewall types, SET dual signature. The diagram is half the answer.",
        "For compare questions (symmetric vs public key, AH vs ESP, steganography vs cryptography, MAC vs signature), write a table — rows = aspects, columns = the two items. Tables read as complete answers.",
        "When a question says 'justify' or 'why' (Jun 2025: 'hashing does not ensure integrity — justify'), the expected move is a concrete counterexample: the attacker recomputes H(M') openly; only a secret (HMAC/signature) stops it.",
        "Answer in the question's terms: 'requirements' means a numbered list (Kerberos: security, reliability, transparency, scalability); 'three benefits' means exactly three numbered sentences (IDS); 'six components' means exactly six named parts (PKI).",
        "Short-note questions reward breadth: May 2024's 'any three of four' and Jun 2025's 'any two of three' — pick the notes you can diagram (SSL, DoS/DDoS, firewalls, steganography) and write 5-6 crisp lines each.",
        "The English version of any disputed question is final (printed on every paper) — if a Hindi line confuses you, re-read the English text above it.",
        "Time-box: 7-mark half-question <= 12 minutes, 14-mark full question <= 25 minutes, leaving 20 minutes to revise the numericals at the end.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "The last day belongs to the numericals and the lists. Morning: redo the four worked traces by hand — Caesar key 1 on 'Laughter is the best medicine', RSA G/e=3/d=11/n=15 (7 -> 13 -> 7), Diffie-Hellman q=11/alpha=7 (YA=2, YB=4, K=9), Playfair on MONARCHY (AT->RS, HS->BP). Afternoon: recite the lists that were asked verbatim — the four security principles plus the extended characteristics, Kerberos's four requirements, IDS's three benefits, PKI's six components, the five modes of operation, the three firewall types, the EAL ladder. Evening: one paper under timing, then sleep — the arithmetic slips below are what fatigue causes.",
      ],
      bullets: [
        "Writing phi(15) = 14 or phi(n) = n - 1 — phi(pq) = (p-1)(q-1); for 15 it is 8, and e*d = 33 = 1 mod 8.",
        "In Diffie-Hellman, computing K from the PUBLIC keys' product instead of YB^XA mod q — the shared secret is alpha^(XA*XB), not alpha^YA+YB.",
        "Claiming a primitive root by guessing 2 without showing the residue check — list the powers and show they cover 1..q-1.",
        "Saying hashing provides message authentication — the Jun 2025 trap; hashing alone is recomputable by the attacker, only MAC/signature authenticates.",
        "Confusing steganography (hides existence) with cryptography (hides content) — the May 2023 comparison asked for exactly this line.",
        "Forgetting Playfair's 'x' fillers for doubled letters and odd tails, or encrypting single letters instead of digraphs.",
        "Writing 'DES was broken by cryptanalysis' — full DES fell to brute force on the 56-bit key; differential (2^47) and linear (2^43) remained impractical.",
        "Mixing up which key encrypts and which signs: receiver's public key encrypts; sender's private key signs.",
        "Calling a MAC non-repudiable-capable — both parties share the key, so neither can prove origin to a third party.",
        "Saying double DES gives 2^112 security — meet-in-the-middle cuts it to ~2^57; that arithmetic is the question.",
        "Listing only three active attacks — X.800 has four: masquerade, replay, modification, denial of service.",
        "In IPsec, forgetting that a Security Association is one-way — bidirectional traffic needs two SAs; and that AH breaks behind NAT while ESP does not.",
        "Describing DoS and DDoS as the same — DDoS is the botnet chain (attacker -> handlers -> agents) with amplification; the distinction is the short note.",
        "Drawing firewalls without the trailing 'deny any any' rule — default deny is the design principle the examiner scans for.",
      ],
    },
  ],
};
