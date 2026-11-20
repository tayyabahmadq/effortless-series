import type { Book } from "../types";

export const book02: Book = {
  id: "book-02",
  number: 2,
  title: "Master Encryption",
  subtitle: "Book 02 of 13 · The Effortless Series",
  tagline:
    "Cryptography for engineers who ship: TLS end to end, AES, password hashing with bcrypt and Argon2, keys and certificates, KMS, envelope encryption, signatures, rotation and mTLS.",
  description:
    "Encryption is the rare discipline where a confidently wrong implementation is worse than none. This book teaches the correct defaults, not the math.",
  layer: "Store & protect data",
  layerQuestion: "Where does truth live, and how do we keep it private?",
  accentColor: "#a78bfa",
  emoji: "02",
  months: "Months 1–2",
  chapters: [
    {
      number: 1,
      title: "HTTPS and TLS",
      summary:
        "Every URL that starts with https is a promise: nobody between your user and your server can read or change this traffic. TLS is the machinery that keeps that promise.",
      keyIdea: "TLS does three jobs on every connection: encryption, integrity, and authentication. The modern protocol is TLS 1.3.",
      deepDive: [
        {
          heading: "Three promises per connection",
          paragraphs: [
            "TLS gives you three guarantees on every connection, and they fail together if you weaken any one of them. Encryption means nobody between the client and the server can read the traffic. Integrity means a tampered byte kills the connection — modern ciphers authenticate everything, so silent modification is impossible. Authentication means the server proved its identity with a certificate chain before a single byte of application data moved. When you say 'we use HTTPS', you are claiming all three, not just the first.",
            "The modern handshake is TLS 1.3, and it completes in a single round trip. The client sends a ClientHello with supported cipher suites and a key share; the server answers with its certificate, its own key share, and a Finished message; both sides derive identical session keys through ECDHE. Everything fragile was deliberately removed: RSA key exchange, CBC suites, compression, renegotiation, and static Diffie-Hellman. If your stack still negotiates TLS 1.2 by default, the configuration is the task — not the algorithm.",
          ],
        },
        {
          heading: "What the handshake actually does",
          paragraphs: [
            "Authentication is the part people underestimate. The client builds a chain from the server's certificate to a root its operating system trusts, checks the hostname against the SAN, checks validity dates and key usage, and only then considers the server genuine. Skip any of those checks and encryption becomes theater: an attacker with any certificate can sit in the middle. Verification is a property of the client's behavior, not of TLS itself — curl with -k and Node with rejectUnauthorized set to false throw the authentication guarantee away.",
            "Know where TLS terminates in your system. On most stacks it is the load balancer or the CDN edge, which means the hop behind it — balancer to service, service to database — runs on a separate decision. Terminating at the edge is normal and sensible; what is not sensible is forgetting the decision exists. Verify what you actually serve with openssl s_client -connect host:443 -brief: it prints the negotiated protocol, cipher suite, and verification result, which is the ground truth behind every claim about TLS support.",
          ],
        },
        {
          heading: "How TLS breaks in the field",
          paragraphs: [
            "Production TLS failures are operational, not mathematical. The classic: the site works in every browser and curl fails with a certificate verify error — an incomplete chain, because the server sends the leaf but not the intermediates, and browsers quietly fetch or cache what curl refuses to. Close behind: expired certificates, hostname mismatches after a rename, and clock skew on a client. All of them are diagnosable in one command with openssl s_client, and none of them require you to touch the cryptography.",
            "Set the defaults deliberately: TLS 1.2 and 1.3 only, AEAD suites, HSTS on, port 80 redirecting with a 301. The Mozilla SSL Configuration Generator produces server configs for nginx, Envoy and Traefik that survive review; treat hand-edited cipher lists with suspicion. And decide about 0-RTT early data consciously: it makes resumption faster but replays are possible, so it belongs on idempotent GETs, not on requests that charge a card. Expiry monitoring is Chapter 8's subject, but start it in week one.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "TLS 1.3 handshake",
        caption: "One round trip, and every byte after is authenticated and sealed.",
        steps: [
          { label: "ClientHello", note: "ciphers + X25519 key share" },
          { label: "ServerHello + cert", note: "identity, key share, Finished" },
          { label: "Verify chain", note: "trust store, hostname, dates" },
          { label: "Derive session keys", note: "ECDHE, forward secrecy" },
          { label: "Encrypted traffic", note: "AEAD: AES-GCM or ChaCha" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "One command turns 'we support TLS 1.3' from a claim into a measurement.",
        code: [
          "# Verify, never assume: what did we actually negotiate?",
          "openssl s_client -connect example.com:443 -tls1_3 -brief < /dev/null",
          "",
          "# Protocol version: TLSv1.3",
          "# Ciphersuite: TLS_AES_256_GCM_SHA384",
          "# Server Temp Key: X25519, 253 bits",
          "# Verify return code: 0 (ok)",
          "",
          "# Full chain view — spot a missing intermediate immediately",
          "openssl s_client -connect example.com:443 -showcerts < /dev/null | head -40",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Browsing the site to confirm TLS works, then shipping the config.",
          fix: "Browsers negotiate the weakest common suite and paper over chain gaps. Verify with openssl s_client or testssl.sh before and after every change.",
        },
        {
          mistake:
            "Enabling 0-RTT early data on endpoints that are not idempotent.",
          fix: "0-RTT data can be replayed by an attacker. Restrict it to safe GETs or add server-side anti-replay before enabling it anywhere.",
        },
        {
          mistake:
            "Copying ssl_ciphers and ssl_protocols from a blog post of unknown vintage.",
          fix: "Generate server config from the Mozilla SSL Configuration Generator, pin TLS 1.2 and 1.3 only, and re-verify after upgrades.",
        },
        {
          mistake:
            "Treating a green padlock as proof the whole path is protected.",
          fix: "TLS covers one hop. Map every hop the data takes and encrypt the ones behind the load balancer too — that is Chapter 2.",
        },
      ],
      fieldChecklist: [
        "I can name the three guarantees TLS provides per connection: encryption, integrity, authentication.",
        "I have run openssl s_client against production and can read the negotiated protocol, suite and chain.",
        "My servers accept only TLS 1.2 and 1.3; older protocol versions are disabled, not deprecated.",
        "The served certificate chain is complete — a barebones container verifies it with plain curl.",
        "HSTS is enabled and plain HTTP redirects with a 301, not a friendly landing page.",
        "0-RTT, where enabled, serves only idempotent requests, and that decision is written down.",
      ],
      keyTerms: [
        {
          term: "TLS 1.3",
          definition:
            "The current Transport Layer Security version: one-round-trip handshake, AEAD-only suites, forward secrecy by default.",
        },
        {
          term: "AEAD",
          definition:
            "Authenticated encryption with associated data — one primitive that encrypts and authenticates, so tampering fails the connection instead of altering data.",
        },
        {
          term: "ECDHE",
          definition:
            "Ephemeral Diffie-Hellman over elliptic curves; fresh session keys per connection, so a leaked long-term key cannot decrypt past traffic.",
        },
        {
          term: "HSTS",
          definition:
            "HTTP Strict Transport Security — a response header that forces browsers onto HTTPS and blocks downgrade attempts.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does TLS actually give you, and what does it not?",
          a: "Three guarantees per connection: confidentiality, integrity and server authentication — encryption, tamper detection, and a verified identity before data flows. It does not protect data at rest, application logic, or hops behind your load balancer, and TLS without certificate verification is decoration. With TLS 1.3 you also get forward secrecy by default: the ephemeral ECDHE keys mean a stolen server key cannot decrypt recorded past sessions.",
        },
        {
          q: "Why did TLS 1.3 remove the RSA key exchange?",
          a: "Because it had no forward secrecy. Under RSA key exchange the client encrypts the session secret to the server's static key, so anyone who records traffic and later obtains that one key decrypts every session ever captured. TLS 1.3 mandates ephemeral (EC)DHE instead: each connection contributes fresh key material, and compromise of a long-term key exposes only impersonation going forward, not history. It also removed CBC suites, compression and renegotiation — everything that kept failing audits.",
        },
        {
          q: "curl in CI fails certificate verification but every browser works. Diagnosis?",
          a: "Incomplete chain, almost every time: the server presents the leaf but not the intermediates. Browsers fetch missing intermediates via AIA or have them cached, so they sail through; curl and most non-browser clients verify strictly and fail. Confirm with openssl s_client -showcerts, fix the server to serve the full chain, and add a curl-based synthetic check so the regression is caught before a customer's integration finds it.",
        },
      ],
      quiz: [
        {
          question:
            "A load balancer terminates TLS 1.3 for your API. Which statement is exactly true?",
          options: [
            "All traffic behind the balancer is encrypted by the same guarantee",
            "The edge hop is protected; hops behind it are separate decisions",
            "TLS terminates only at the application server",
            "HTTP/2 requires encryption end to end",
          ],
          answerIndex: 1,
          explanation:
            "Termination is where one TLS contract ends. Everything downstream — balancer to service to database — needs its own encryption decision, which is the whole subject of Chapter 2.",
        },
        {
          question:
            "Which property does the ephemeral ECDHE exchange in TLS 1.3 provide?",
          options: [
            "Faster certificate issuance",
            "Client authentication by default",
            "Forward secrecy: past sessions stay sealed if the server key later leaks",
            "Protection against expired certificates",
          ],
          answerIndex: 2,
          explanation:
            "Ephemeral key agreement means session keys never depend on the long-term key alone. A stolen server key buys impersonation going forward, never decryption of recorded history.",
        },
        {
          question:
            "A client reports certificate errors on your API, but browsers are fine. Most likely cause?",
          options: [
            "The server serves an incomplete chain (missing intermediates)",
            "The cipher suite is too modern",
            "TLS 1.3 removed CBC suites",
            "The certificate uses ECDSA instead of RSA",
          ],
          answerIndex: 0,
          explanation:
            "Browsers cache or fetch intermediate certificates, so they tolerate a short chain; curl and most non-browser clients verify strictly. Serve leaf plus intermediates and confirm with openssl s_client -showcerts.",
        },
      ],
    },
    {
      number: 2,
      title: "Encryption in Transit",
      summary:
        "TLS on the edge is table stakes. The question that finds real gaps is: name every hop my data takes, and the encryption on each one.",
      keyIdea: "Never disable certificate verification anywhere in the chain — that turns TLS into a costume.",
      deepDive: [
        {
          heading: "Name every hop",
          paragraphs: [
            "The question that finds real gaps is embarrassingly simple: name every hop your data takes, and the encryption on each one. Browser to edge, edge to load balancer, balancer to service, service to database, service to queue, service to the third-party API that sends webhooks back. Each arrow is either encrypted and verified, encrypted and unverified, or plaintext — and teams routinely discover the perimeter is encrypted while everything inside the data center speaks plain HTTP.",
            "Attackers do not need to sit on the open internet; they need one foothold on any network segment a plaintext arrow crosses. A compromised pod, a rogue workload in the VPC, tcpdump on a busy host, an ARP-poisoning laptop in the office — any of them reads unverified traffic. The audit is one afternoon: draw the path, label each arrow with protocol and verification mode, and count how many say 'encrypted, nobody checks'. Most claims about TLS cover exactly one arrow.",
          ],
        },
        {
          heading: "Verification is the ballgame",
          paragraphs: [
            "TLS without verification is a costume. Postgres sslmode=require encrypts the connection but accepts any certificate — including one the man in the middle just minted; sslmode=verify-full checks the chain and the hostname and fails hard. The same split exists everywhere: Node's rejectUnauthorized, curl's -k, Python's verify=False. The secure configuration is the one that rejects; the insecure one is the one that 'works'. When an integration breaks with a certificate error, the fix is trusting the right CA — never disabling the check.",
            "Inside the perimeter, verification at scale means an internal certificate authority. Service meshes (Istio, Linkerd) issue short-lived workload certificates automatically and enforce mutual TLS on every connection; Vault PKI and step-ca do the same without a mesh. Mutual TLS is the full version of verification — the server checks the client too — and Chapter 14 develops it. For now the rule is: every client that can be configured to verify must verify, and you prove it by pointing that client at a bad certificate and watching it fail.",
          ],
        },
        {
          heading: "The hops people forget",
          paragraphs: [
            "The forgotten arrows have names. Database drivers defaulting to sslmode=require or disabled entirely. Redis and Kafka listeners running plaintext inside the VPC because 'the network is private'. SMTP with STARTTLS, which is opportunistic and downgradeable — MTA-STS exists because of it. Outbound HTTP calls to internal tools. DNS, plaintext unless you run DoH or DoT. Backups shipped over http because a script predates the policy. Each one is invisible until you look for it, and looking is the habit.",
            "Make plaintext impossible rather than discouraged. Enforce TLS at the ingress and reject http. Point one hour of traffic capture (tcpdump or tshark) at each internal subnet and search it for sensitive strings — the results usually end the debate in minutes. Set database clients to verify-full with a pinned CA in every environment, not just production. And treat 'encrypted but unverified' as its own finding: encryption without authentication protects you from passive sniffers only, and passive sniffers are the least of your problems.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "One request, four contracts",
        caption: "Every arrow is its own contract; one unverified arrow is the breach.",
        stages: [
          { label: "Browser", note: "TLS 1.3 to the edge" },
          { label: "CDN / edge", note: "terminates, inspects, routes" },
          { label: "Load balancer", note: "re-encrypts upstream" },
          { label: "Service mesh", note: "mTLS, short-lived IDs" },
          { label: "Database", note: "verify-full, pinned CA" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Verification is two lines of configuration; skipping it reduces TLS to decoration.",
        code: [
          "import fs from \"node:fs\";",
          "import { Pool } from \"pg\";",
          "",
          "// sslmode=require encrypts but trusts ANY certificate. Verify instead.",
          "export const pool = new Pool({",
          "  connectionString: process.env.DATABASE_URL,",
          "  ssl: {",
          "    rejectUnauthorized: true,              // fail on unknown CAs",
          "    ca: fs.readFileSync(\"/etc/ssl/db-ca.pem\", \"utf8\"),",
          "  },",
          "});",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Setting sslmode=require and reporting the database connection as verified.",
          fix: "require encrypts but accepts any certificate, including the attacker's. Use verify-full with a pinned CA bundle on every client.",
        },
        {
          mistake:
            "Fixing a TLS error with NODE_TLS_REJECT_UNAUTHORIZED=0 or curl -k.",
          fix: "The error is the security working. Import the correct CA into the trust store; disabling verification is a local debugging act, never a deploy.",
        },
        {
          mistake:
            "Terminating TLS at the load balancer and leaving internal traffic plaintext.",
          fix: "Encrypt behind the edge too — mesh mTLS or app-level TLS. The perimeter is a doorway, not a wall.",
        },
        {
          mistake:
            "Trusting a private VPC to make plaintext traffic unreadable.",
          fix: "Private is not isolated: one compromised workload reads the segment. Capture an hour of traffic once and let the results argue for you.",
        },
      ],
      fieldChecklist: [
        "I have drawn one sensitive request's full route and labeled the TLS mode of every hop.",
        "Database clients verify (verify-full or rejectUnauthorized with a pinned CA) in every environment.",
        "No rejectUnauthorized: false, curl -k or verify=False exists in any deployed code path.",
        "Service-to-service traffic inside the perimeter runs mTLS or app-level TLS with verification.",
        "I captured one hour of internal traffic once and confirmed nothing sensitive crossed it in plaintext.",
        "Inbound webhooks and partner integrations are served over HTTPS with verification enforced at the edge.",
      ],
      keyTerms: [
        {
          term: "TLS termination",
          definition:
            "The point where encrypted traffic is decrypted — edge, balancer or service; everything downstream of it needs its own plan.",
        },
        {
          term: "sslmode",
          definition:
            "Postgres client TLS setting; require encrypts without verifying, verify-full validates chain and hostname.",
        },
        {
          term: "mTLS",
          definition:
            "Mutual TLS — both sides present certificates and verify each other; the default posture inside service meshes.",
        },
        {
          term: "Downgrade attack",
          definition:
            "Forcing a connection back to weaker security — plaintext, old TLS or unverified; defended by HSTS, MTA-STS and protocol pinning.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you know every hop of your traffic is encrypted?",
          a: "I do not assume it — I audit it. I draw the route of one sensitive request end to end, label each arrow with protocol and verification mode, then verify with capture: an hour of tcpdump per internal subnet, searched for plaintext payloads. The findings are predictable — unencrypted Redis, sslmode=require databases, STARTTLS mail — and each becomes a ticket with an owner. The audit reruns quarterly, because arrows get added faster than they get fixed.",
        },
        {
          q: "What is the difference between sslmode=require and verify-full?",
          a: "require turns the encryption on but accepts any certificate the server presents, so a man in the middle with a self-signed cert reads everything. verify-full validates the certificate chain against a CA you pinned and checks the hostname, failing the connection otherwise. The gap between them is precisely the gap an active attacker exploits — encryption without authentication stops passive sniffing only.",
        },
        {
          q: "A teammate calls the VPC 'private' and skips TLS between services. Response?",
          a: "I ask what a compromised pod can do. Inside the perimeter it can ARP-spoof, capture traffic, or impersonate a service — private networks segment access, they do not authenticate anyone. Then I point at the cheapest fix: a mesh or internal CA gives short-lived workload certificates and mTLS without code changes. Verification also buys identity: access logs stop saying 'some pod' and start saying which workload, which is worth it on its own.",
        },
      ],
      quiz: [
        {
          question:
            "sslmode=require is configured on every database client. What protection do you actually have?",
          options: [
            "Full protection against active man-in-the-middle attacks",
            "Encryption against passive sniffing, none against an attacker with any certificate",
            "No encryption; the mode only enables TLS",
            "Client certificate authentication",
          ],
          answerIndex: 1,
          explanation:
            "require encrypts but skips verification, so anyone who presents a valid-format certificate — including a freshly minted one — can sit in the middle. verify-full is the mode that authenticates the server.",
        },
        {
          question:
            "A service mesh issues short-lived workload certificates and enforces mTLS. Biggest operational win?",
          options: [
            "Faster database queries",
            "Elimination of all application bugs",
            "Every connection carries a verifiable identity that policies and logs can use",
            "Removal of the need for encryption at rest",
          ],
          answerIndex: 2,
          explanation:
            "mTLS upgrades transport from 'encrypted bytes' to 'encrypted bytes with a name'. Identity enables authorization between services and makes audit logs meaningful — performance and at-rest encryption are separate concerns.",
        },
        {
          question:
            "Where does the 'encrypted but unverified' failure mode come from?",
          options: [
            "Clients that encrypt but skip certificate verification, so any certificate is accepted",
            "Cipher suites that are too strong",
            "Certificates expiring too quickly",
            "Using TLS 1.3 instead of 1.2",
          ],
          answerIndex: 0,
          explanation:
            "Verification is a client behavior. When the client accepts any chain — rejectUnauthorized false, sslmode=require — the authentication guarantee disappears and the encryption protects only against passive listeners.",
        },
      ],
    },
    {
      number: 3,
      title: "Encryption at Rest",
      summary:
        "Disks outlive their owners. Laptops get stolen, snapshots get shared, disks get decommissioned — encryption at rest is what makes all of that boring.",
      keyIdea: "Customer-managed KMS keys for regulated data. Bucket policies reject unencrypted uploads.",
      deepDive: [
        {
          heading: "Disks outlive their owners",
          paragraphs: [
            "The threat model is concrete: a laptop stolen from a car, a snapshot shared cross-account for debugging, a decommissioned disk that left the data center un-wiped, a backup bucket opened to the internet by one checkbox. Encryption at rest turns all of these into non-events — the thief holds ciphertext, and the key never traveled with the data. That is the entire value proposition: storage media and storage copies change hands constantly, and encryption is what makes each handoff boring.",
            "Match the layer to the threat. Full-disk encryption — LUKS on Linux, BitLocker, FileVault, cloud volume encryption on EBS and Persistent Disk — protects a device that is powered off or a volume that is detached. It does not protect data from someone using the running system, because the key is already loaded. Field-level encryption — pgcrypto in Postgres, application-side AEAD before the row is written — survives a database dump. Decide per dataset: device theft, dump leak, or both.",
          ],
        },
        {
          heading: "Customer-managed keys earn their keep",
          paragraphs: [
            "Cloud storage encryption defaults are good hygiene and weak compliance. Provider-managed keys encrypt everything, but you do not control policy, audit, or revocation. Customer-managed KMS keys change that: the key policy names exactly which roles may decrypt, every use lands in CloudTrail, and revoking the key revokes the data. For regulated data this is the difference between 'the cloud provider says it is encrypted' and 'we can prove who could read it and when'.",
            "Then make plaintext uploads impossible. Bucket policies can deny non-TLS transport (aws:SecureTransport false) and reject objects lacking an encryption header; organization policies can forbid creating unencrypted buckets or disks at all. Enforce at the platform, not in the wiki: a config scanner (AWS Config rules, Prowler, Steampipe) that alerts on any unencrypted resource catches the exception process quietly becoming the standard process. Defaults are what the loudest deadline produces unless the platform pushes back.",
          ],
        },
        {
          heading: "The kill switch and its cost",
          paragraphs: [
            "Deleting or scheduling deletion of a customer-managed key — a seven-to-thirty-day window in AWS KMS — makes every object encrypted under it permanently unreadable. That is cryptographic data destruction, the compliance feature auditors ask about, and the operational hazard nobody budgets for. Guard the key policy like production: separate administration duties, require dual control for deletion, log and alarm on every lifecycle action, and keep the break-glass process written down and rehearsed.",
            "Snapshots and copies are where discipline decays. Copies can lose encryption at copy time; shares can grant more than intended; an unencrypted snapshot made before a policy existed lives on for years. Re-check encryption state after every copy or share, and include decryption in restore drills — a restore that fails because the key policy changed is Chapter 10's warning arriving early. Encryption at rest is a system property, not a checkbox: it holds only as long as the keys, policies and copies around it hold.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "At rest vs. in transit",
        caption:
          "Different threats, different keys — production needs both, everywhere, verified.",
        left: {
          heading: "Encryption at rest",
          items: [
            "Protects disks, snapshots, objects, backups",
            "Threat: stolen media, leaked dumps",
            "Keys live in KMS, checked per use",
            "Blind to a running app with access",
          ],
        },
        right: {
          heading: "Encryption in transit",
          items: [
            "Protects bytes between hops",
            "Threat: sniffing, man in the middle",
            "Session keys, ephemeral per connection",
            "Blind to an unverified hop",
          ],
        },
      },
      codeExample: {
        language: "json",
        caption:
          "The bucket enforces the rule, so a forgetful uploader fails loudly instead of leaking quietly.",
        code: [
          "{",
          "  \"Version\": \"2012-10-17\",",
          "  \"Statement\": [",
          "    {",
          "      \"Sid\": \"DenyUnencryptedUploads\",",
          "      \"Effect\": \"Deny\",",
          "      \"Principal\": \"*\",",
          "      \"Action\": \"s3:PutObject\",",
          "      \"Resource\": \"arn:aws:s3:::acme-prod-backups/*\",",
          "      \"Condition\": {",
          "        \"Null\": { \"s3:x-amz-server-side-encryption\": \"true\" }",
          "      }",
          "    }",
          "  ]",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Counting provider-managed default encryption as customer-managed compliance.",
          fix: "Defaults give hygiene, not control. Regulated data needs customer-managed keys with key policies, audit trails and revocation you operate.",
        },
        {
          mistake:
            "Assuming full-disk encryption protects a running server.",
          fix: "FDE protects a powered-off device; with the OS booted the key is in memory. Add field-level encryption for crown jewels.",
        },
        {
          mistake:
            "Sharing a snapshot cross-account without re-checking its encryption state.",
          fix: "Copies can drop encryption at copy time. Encrypt before sharing, re-encrypt on arrival, and review who can copy what.",
        },
        {
          mistake:
            "Encrypting everything at rest while the KMS Decrypt policy allows a wildcard.",
          fix: "The key policy is the real access control. Name the roles, alarm on anomalous Decrypt volume, review quarterly.",
        },
      ],
      fieldChecklist: [
        "Every datastore I own has encryption at rest on, and I know whether the key is provider-managed or customer-managed.",
        "Regulated data uses customer-managed KMS keys whose policies name specific roles, not stars.",
        "Bucket and organization policies reject unencrypted uploads and non-TLS transport.",
        "I know what becomes unreadable if a key is revoked, and restore drills include decryption.",
        "Snapshot and backup copies are re-checked for encryption after every copy or share.",
        "A config scanner alerts when any new resource lands unencrypted.",
      ],
      keyTerms: [
        {
          term: "Encryption at rest",
          definition:
            "Encrypting stored data — volumes, objects, snapshots, backups — so a stolen disk or dump is ciphertext without the key.",
        },
        {
          term: "Customer-managed key",
          definition:
            "A KMS key your organization controls: policy, rotation, audit and revocation — unlike provider-owned defaults.",
        },
        {
          term: "Field-level encryption",
          definition:
            "Encrypting specific columns or attributes in the application, so a database dump alone cannot read them.",
        },
        {
          term: "Key policy",
          definition:
            "The IAM document deciding who may use a KMS key; the real access control on everything encrypted under it.",
        },
      ],
      interviewQuestions: [
        {
          q: "What does encryption at rest actually protect against?",
          a: "Loss of custody over stored data: stolen laptops and disks, snapshots shared too widely, dumps exfiltrated from a compromised backup bucket, decommissioned media. It does not protect against an attacker who is already running as your application, because decryption happens there. That is why the answer is layered: full-disk or storage-level encryption for the copies, customer-managed KMS keys for control and audit, and field-level encryption for the few attributes that must survive even a database dump.",
        },
        {
          q: "When do you insist on customer-managed keys over provider defaults?",
          a: "Whenever someone needs to prove control: regulated data, contractual commitments, or the requirement to revoke. Provider defaults encrypt but give you no key policy, no per-use audit and no revocation. Customer-managed keys cost real work — policy maintenance, rotation, guarding deletion — so I scope them to the datasets that need the guarantees rather than the whole estate, and let defaults carry the long tail of ordinary hygiene.",
        },
        {
          q: "How do you make unencrypted storage impossible across a large organization?",
          a: "Guardrails at the platform, not memos: organization policies forbid unencrypted buckets, volumes and databases at creation; IaC modules default to encryption with customer-managed keys; a config scanner alerts on drift and exceptions get expiry dates. The bucket policy rejects uploads without encryption headers, so mistakes fail at write time. The cultural piece is making the secure path the fastest path — a developer who uses the module never meets the scanner.",
        },
      ],
      quiz: [
        {
          question:
            "A decommissioned disk from your fleet appears at an auction. Which control makes this boring?",
          options: [
            "Inventory spreadsheets and asset tags",
            "Encryption at rest with keys that never traveled with the disk",
            "Faster procurement processes",
            "A stricter offboarding checklist for people",
          ],
          answerIndex: 1,
          explanation:
            "Media leaves custody in ways policy cannot always prevent. Encryption at rest means the disk holds ciphertext and the key stayed in KMS — possession without keys is worthless.",
        },
        {
          question:
            "Which property does full-disk encryption lose the moment the OS boots?",
          options: [
            "Integrity of the filesystem",
            "Network encryption",
            "Backup compatibility",
            "Protection of data from someone operating the running system",
          ],
          answerIndex: 3,
          explanation:
            "With the system running, the volume key sits in memory and the OS serves plaintext to anything with sufficient privileges. FDE targets device loss; dump-leak threats want field-level encryption.",
        },
        {
          question:
            "What is the strongest argument for customer-managed KMS keys on regulated data?",
          options: [
            "They are cheaper than provider defaults",
            "They enable faster queries through hardware acceleration",
            "They add control: key policy, per-use audit and revocation you operate",
            "They remove the need for backups",
          ],
          answerIndex: 2,
          explanation:
            "The value is governance, not performance: named policies, CloudTrail evidence of every decrypt, and the ability to revoke access cryptographically. Defaults encrypt; customer-managed keys let you prove and revoke.",
        },
      ],
    },
    {
      number: 4,
      title: "Password Hashing",
      summary:
        "If your database leaks, the passwords question is simple: can the attacker log in as everyone? Password hashing is the difference between a bad day and an extinction event.",
      keyIdea: "A password must never be stored encrypted or encoded — only hashed. Use deliberately slow, memory-hard functions.",
      deepDive: [
        {
          heading: "Three wrong ways, one right shape",
          paragraphs: [
            "Storing passwords has exactly one correct shape, and four popular wrong ones. Plaintext means the database leak logs everyone in. Encoding — Base64 or hex — is reversible by anyone with a terminal; it is transport, not protection. Encryption means you now hold a key, and in the same breach the key usually travels with the data; encryption is reversible by design, and passwords never need reversing. A password is not data you ever read back — only verify.",
            "Hash it: store the output of a one-way function and verify by hashing the attempt. But the hash must be slow on purpose. SHA-256 and friends are built for speed — billions of guesses per second on rented GPUs — which is exactly wrong here. Password hashing functions invert that goal: bcrypt, scrypt and Argon2 burn measurable time and memory per guess, so a leaked database costs the attacker years instead of an afternoon. Slowness is not a side effect; it is the security.",
          ],
        },
        {
          heading: "Salt, work factor, and pepper",
          paragraphs: [
            "The salt is a unique random value stored with each hash, and it exists to kill precomputation: rainbow tables become useless and two users with the same password produce different hashes, so cracking happens per user, never in batch. Modern formats make this automatic — bcrypt embeds the salt in its $2b$ string, Argon2 in its encoded output — so there is no excuse for hand-managed salt columns. What remains a deliberate choice is the work factor.",
            "Tune the work factor so a verification takes roughly one hundred to two hundred fifty milliseconds on your production hardware — expensive enough to hurt an attacker running millions of guesses, invisible enough that users never notice a login. Raise it as hardware improves, and let rehash-on-login do the migrating. A pepper — a secret added outside the database, held in KMS — is optional defense in depth: it helps only if the database leaks without the application's secrets, and it adds key-management obligations. Start without it; add it with custody discipline or not at all.",
          ],
        },
        {
          heading: "Verification and the login path",
          paragraphs: [
            "Verification goes through the library and nothing else: bcrypt.compare, argon2.verify — constant-time, format-aware, salt-handling included. Hand-rolling the comparison reintroduces timing leaks and format mistakes the library already solved. Each user's hash carries its own parameters, which is what makes evolution painless: when you raise the cost or move algorithms, successful logins transparently rehash, and the fleet upgrades itself over weeks of ordinary traffic.",
            "The login path completes the defense. Rate-limit and throttle authentication attempts — a slow hash protecting a wide-open endpoint just converts your CPU into the attacker's amplifier. Check candidate passwords against breach corpora (the HIBP range query keeps your list private), and follow NIST 800-63B: allow long passphrases, drop forced periodic rotation and composition theater, block the top ten thousand leaked passwords. Length and uniqueness beat clever rules; hashing makes the stored form survivable, but the endpoint decides how many guesses anyone gets.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Store it how?",
        caption: "Only one branch survives a leaked database.",
        start: "A credential to persist",
        branches: [
          {
            label: "Base64 to look scrambled",
            outcome: "Encoding: reversible by anyone",
            good: false,
          },
          {
            label: "Encrypt with a shared key",
            outcome: "Now a key exists to leak too",
            good: false,
          },
          {
            label: "SHA-256, salted",
            outcome: "Fast hashes crack at GPU scale",
            good: false,
          },
          {
            label: "Argon2id or bcrypt",
            outcome: "Slow, salted, verify-only",
            good: true,
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Storing passwords encrypted because a product request needs 'the original'.",
          fix: "You never need the original — only a match. Redesign the feature; if it truly needs recovery, it is not a password.",
        },
        {
          mistake:
            "Salting SHA-256 and shipping it as a password scheme.",
          fix: "Fast hashes reward the attacker's hardware. Use bcrypt, scrypt or Argon2 — functions deliberately built to be slow and memory-hungry.",
        },
        {
          mistake:
            "One salt generated at deploy time, shared by every user.",
          fix: "A shared salt restores batch cracking. Every user gets a unique random salt, embedded in the stored hash by the library.",
        },
        {
          mistake: "Comparing hashes with === in application code.",
          fix: "Hand-rolled comparison leaks timing and mishandles formats. Use the library's verify call — constant-time and format-aware.",
        },
      ],
      fieldChecklist: [
        "Passwords in my systems are hashed with a slow, salted, memory-hard function — never encrypted or encoded.",
        "I can state the exact parameters in production: bcrypt cost, or Argon2 memory, time and parallelism.",
        "Verification latency is measured on production hardware and the work factor was chosen against it.",
        "Rehash-on-login is live, so parameter upgrades ride normal sign-ins.",
        "The authentication endpoint rate-limits attempts and checks candidates against breach corpora.",
        "I can name the library call that verifies and confirm it is the only comparison path.",
      ],
      keyTerms: [
        {
          term: "Salt",
          definition:
            "Unique random data stored with each hash; defeats precomputation and forces attackers to work per user.",
        },
        {
          term: "Work factor",
          definition:
            "The tunable cost of a password hash — bcrypt rounds or Argon2 memory and time — raised over the years as hardware improves.",
        },
        {
          term: "Memory-hardness",
          definition:
            "Cost measured in RAM so GPUs and ASICs gain little; Argon2's main lever against parallel cracking hardware.",
        },
        {
          term: "Credential stuffing",
          definition:
            "Replaying leaked username-password pairs against other services; the breach multiplier that slow hashing exists to blunt.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why hash passwords instead of encrypting them?",
          a: "Because you never need them back. Authentication only asks 'does this attempt match?', which a one-way function answers; encryption asks 'can this be reversed?', and reversibility means holding a key that will eventually sit in the same backup, image or config as the data. Hashing removes the key from the threat model entirely: a leaked database with slow, salted hashes costs the attacker per-user brute force measured in years, not an afternoon of base64 or one Decrypt call.",
        },
        {
          q: "How do you pick password hashing parameters?",
          a: "By measurement, not folklore. I benchmark bcrypt or Argon2 on the production hardware, aim for roughly one hundred to two hundred fifty milliseconds per verification, and set memory, time and cost to land there. Then I document the values, alert if login latency drifts — an instance resize silently changes the economics — and revisit every few years. Rehash-on-login means raising the work factor later needs no migration project; the fleet upgrades itself as users sign in.",
        },
        {
          q: "Ten million users have bcrypt cost 10 hashes from 2015. Migration plan?",
          a: "No big bang and no forced resets. Keep verification accepting cost 10, and on every successful login rehash with the new parameters — plaintext is momentarily available exactly there. Old hashes upgrade as users sign in; dormant accounts keep old parameters, which is acceptable because they are also the least-used credentials. Track the upgraded fraction as a metric, raise the target cost, and let the curve finish itself over a year of ordinary traffic.",
        },
      ],
      quiz: [
        {
          question:
            "A breach dump contains your users table. Which stored form lets attackers log in fastest?",
          options: [
            "Base64-encoded passwords",
            "Argon2id hashes with tuned parameters",
            "AES-256-encrypted passwords with the key in the same dump",
            "Encrypted and encoded forms are equally slow",
          ],
          answerIndex: 0,
          explanation:
            "Encoding is reversible in one command with no key; encryption is reversible the moment the key appears — and it usually appears with the dump. Only slow salted hashes force per-user brute force.",
        },
        {
          question: "What does a per-user salt accomplish?",
          options: [
            "Makes each hash slower to compute",
            "Prevents identical passwords from producing identical hashes and defeats precomputed tables",
            "Allows password recovery when users forget",
            "Compresses the hash for storage",
          ],
          answerIndex: 1,
          explanation:
            "Salting kills rainbow tables and forces per-user cracking — two identical passwords yield different stored hashes. It does not slow an individual guess; the work factor does that.",
        },
        {
          question:
            "Login takes 15 milliseconds with your current bcrypt cost. What does that tell you?",
          options: [
            "The parameters are well tuned for production",
            "Users will notice the latency and complain",
            "The work factor is too low; raise it toward the 100-250ms band on production hardware",
            "Nothing — latency does not affect security",
          ],
          answerIndex: 2,
          explanation:
            "The benchmark band exists so cracking costs attackers years while users wait imperceptibly. Fifteen milliseconds buys the attacker a thousand-fold speedup at essentially zero user benefit.",
        },
      ],
    },
    {
      number: 5,
      title: "bcrypt and Argon2",
      summary:
        "These two functions have defended more passwords than every firewall combined. Pick one, tune it once, revisit the parameters every few years.",
      keyIdea: "Argon2id for new systems (memory-hardness is the modern anti-GPU lever). bcrypt at cost 12+ for existing ones.",
      deepDive: [
        {
          heading: "bcrypt: the old guard still holds",
          paragraphs: [
            "bcrypt has defended passwords since 1999, and its design choices still look right: a cost parameter that doubles the work with every increment, a salt embedded in the output, and a self-describing string — $2b$12$ plus salt and hash — that carries its own settings. That format is why migrations are painless: verification reads the parameters from the string itself. Tune cost so production logins land in the one-hundred-to-two-hundred-fifty-millisecond band; cost 10 was the last decade's default, cost 12 is today's floor.",
            "Know its edges honestly. bcrypt is not memory-hard, so ASIC and FPGA attackers gain some leverage, and it truncates input at seventy-two bytes — fine for passphrases nobody uses, a real limit once diceware passwords get long. Neither flaw is a reason to migrate; both are reasons to know what you deployed. Ecosystems with mature bindings — Node, Python, Ruby on Rails' default — keep bcrypt a completely defensible choice for existing systems.",
          ],
        },
        {
          heading: "Argon2id: the modern default",
          paragraphs: [
            "Argon2 won the Password Hashing Competition in 2015, and its id variant — hybrid, resistant to both GPU cracking and side channels — is what you deploy. Its anti-hardware lever is memory: each hash demands real RAM, so the attacker's thousand-core GPU with a few megabytes per core gains almost nothing. Parameters are memory (in KiB), time (iterations) and parallelism (lanes); OWASP's published baseline sits around nineteen MiB of memory with two iterations, and hardware keeps arguing for more.",
            "Bindings are mature everywhere: argon2 in Node, argon2-cffi in Python, password_hash with PASSWORD_ARGON2ID in PHP, libsodium's crypto_pwhash. The encoded output — $argon2id$v=19$m=...,t=...,p=... plus salt and hash — embeds its parameters exactly like bcrypt does, so verification stays format-aware and upgrades stay possible. New systems default here; the only reason to pick something else is an environment that cannot run a native binding, which in 2026 is rare.",
          ],
        },
        {
          heading: "Migration without a migration project",
          paragraphs: [
            "The two functions coexist happily behind one verify call: the stored string says which algorithm and parameters it uses, so supporting both is table stakes. The migration recipe is rehash-on-login — verify with the old parameters, and on success immediately rehash with the new, then persist. Track the upgraded fraction as a metric; it climbs with ordinary traffic and finishes over a year without a single forced password reset. Never batch-convert with a script that needs plaintext you do not have.",
            "Two operational realities complete the picture. First, capacity: memory-hard hashing at scale is real RAM — two hundred concurrent logins at sixty-four MiB each is roughly twelve GiB — so provision for peak concurrency and rate-limit the endpoint, or the password hashing itself becomes the denial-of-service. Second, drift: resizing instances changes the latency profile silently, so alert on hashing duration and re-tune when hardware moves under you. The parameters are a living configuration, not a constant.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Argon2id vs bcrypt",
        caption:
          "New systems reach for Argon2id; living bcrypt is a tenant, not an emergency.",
        left: {
          heading: "Argon2id",
          items: [
            "Memory-hard: punishes GPU rigs",
            "Parameters: memory, time, parallelism",
            "Winner of the PHC, 2015",
            "The default for new systems",
          ],
        },
        right: {
          heading: "bcrypt",
          items: [
            "Battle-tested since 1999",
            "Cost knob: each step doubles work",
            "Not memory-hard; 72-byte truncation",
            "Fine for existing systems — keep it",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "The encoded hash carries its own parameters, so verification and upgrades need no side channel.",
        code: [
          "import argon2 from \"argon2\";",
          "",
          "// Hash: parameters ride inside the encoded output forever.",
          "const hash = await argon2.hash(password, {",
          "  type: argon2.argon2id,",
          "  memoryCost: 65536,   // 64 MiB",
          "  timeCost: 3,",
          "  parallelism: 1,",
          "});",
          "",
          "// Verify: constant-time and format-aware. Never ===.",
          "const ok = await argon2.verify(hash, candidate);",
          "",
          "// Rehash-on-login: upgrade stale parameters at successful sign-in.",
          "if (ok && argon2.needsRehash(hash, CURRENT_PARAMS)) {",
          "  await users.updateHash(user.id, await argon2.hash(password, CURRENT_PARAMS));",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Pre-hashing long passwords with SHA-256 before bcrypt to dodge truncation.",
          fix: "Pre-hashing adds collision and format hazards of its own. Accept the 72-byte limit or use Argon2, which has none.",
        },
        {
          mistake:
            "Setting memoryCost so low that verification finishes in under a millisecond.",
          fix: "Tune to the 100-250ms band on production hardware. Sub-millisecond hashing donates the speed difference to the attacker.",
        },
        {
          mistake:
            "Hardcoding cost and memory in source so no environment can tune them.",
          fix: "Parameters live in config; the encoded hash carries its own values regardless. A bump then needs a config change, not a deploy.",
        },
        {
          mistake:
            "Running memory-hard hashing on an undersized fleet without capacity math.",
          fix: "Sixty-four MiB per concurrent login adds up fast — 200 logins is roughly 12 GiB. Provision for peak and rate-limit the endpoint.",
        },
      ],
      fieldChecklist: [
        "I know from memory which algorithm and parameters production password hashing uses.",
        "Every verification goes through the library's compare or verify call — no hand-rolled comparison.",
        "Rehash-on-login upgrades stale parameters during ordinary sign-ins.",
        "Hashing latency is measured in production and alerts when it drifts.",
        "Concurrency math for memory-hard hashing is done, and the auth endpoint is rate-limited.",
        "If bcrypt is in play, the 72-byte truncation behavior is documented for the team.",
      ],
      keyTerms: [
        {
          term: "Argon2id",
          definition:
            "The hybrid Argon2 variant — side-channel resistant and memory-hard; the modern default for password hashing.",
        },
        {
          term: "Encoded hash",
          definition:
            "The self-describing output string ($2b$..., $argon2id$...) carrying algorithm, parameters and salt together.",
        },
        {
          term: "Cost parameter",
          definition:
            "bcrypt's work knob (2^rounds); every increment doubles the hashing time.",
        },
        {
          term: "Rehash-on-login",
          definition:
            "Upgrading a stored hash to current parameters at successful sign-in, when plaintext is momentarily available.",
        },
      ],
      interviewQuestions: [
        {
          q: "bcrypt or Argon2 — how do you decide?",
          a: "For new systems, Argon2id wherever a mature binding runs — memory-hardness is the modern anti-GPU lever and the parameters flex in three dimensions. Existing bcrypt stays: it is battle-tested with no practical breaks, and a migration that buys little is not free. The real rule is that the decision is reversible — both formats self-describe their parameters, so verification supports both and rehash-on-login migrates the fleet during ordinary traffic. I have never regretted Argon2id on a greenfield; I have never panicked over a bcrypt fleet either.",
        },
        {
          q: "Why does memory-hardness matter against GPU cracking?",
          a: "A GPU offers thousands of cores but very little fast memory per core. Time-costly hashes parallelize beautifully across those cores; memory-costly hashes do not, because sixty-four MiB per guess means the card runs a handful of guesses at a time instead of thousands. That collapses the attacker's throughput by orders of magnitude per dollar — which is the entire arms race in one sentence. bcrypt predates the lever, which is why Argon2id is the default for new work.",
        },
        {
          q: "How would you migrate a large user base from bcrypt to Argon2id?",
          a: "Rehash-on-login and patience. Verification accepts both algorithms — the stored string says which — so nothing breaks on day one. At each successful login I rehash immediately with the new parameters; the plaintext is available exactly at that moment and never logged. I track the upgraded percentage as a metric, keep old parameters valid indefinitely, and let months of ordinary traffic finish what a forced-reset campaign would do worse. Dormant accounts stay on bcrypt, which is an acceptable tail.",
        },
      ],
      quiz: [
        {
          question: "What does Argon2's memory cost primarily defend against?",
          options: [
            "SQL injection attempts",
            "Timing attacks on the login endpoint",
            "GPU and ASIC rigs that parallelize CPU-bound work",
            "Rainbow table precomputation",
          ],
          answerIndex: 2,
          explanation:
            "Memory-hardness starves parallel hardware: each guess needs real RAM, so thousand-core GPUs collapse to a handful of concurrent guesses. Salting handles precomputation; memory cost handles hardware.",
        },
        {
          question:
            "Why are encoded hash formats like $2b$12$... operationally important?",
          options: [
            "They compress the hash for faster database reads",
            "They let verification read algorithm and parameters from the string itself, making upgrades painless",
            "They encrypt the salt against disclosure",
            "They are required by SQL standards",
          ],
          answerIndex: 1,
          explanation:
            "Self-describing formats mean the verifier needs no side table of who-uses-what. That is exactly what makes multi-algorithm support and rehash-on-login migration cheap.",
        },
        {
          question:
            "Your fleet hashes with Argon2id at 19 MiB. Concurrency spikes to 500 logins. What must be true?",
          options: [
            "The fleet provisioned roughly 10+ GiB of RAM for hashing peak concurrency",
            "The database needs an extra replica",
            "Nothing — memory cost is per password lifetime, not per login",
            "Argon2 should switch to bcrypt under load",
          ],
          answerIndex: 0,
          explanation:
            "Memory-hard hashing multiplies concurrency by memory per hash: 500 logins at 19 MiB is about 9.5 GiB. Provision for the peak or rate-limit, or the hashing becomes the outage.",
        },
      ],
    },
    {
      number: 6,
      title: "AES",
      summary:
        "AES-256 encrypts everything from your phone's storage to classified government data. Your job is not the algorithm — it is the mode, the IV, and the key.",
      keyIdea: "ECB is banned. Use authenticated modes (AES-GCM or XChaCha20-Poly1305). Never reuse a (key, nonce) pair.",
      deepDive: [
        {
          heading: "The algorithm was settled in 2001",
          paragraphs: [
            "AES — Rijndael, standardized by NIST as FIPS 197 — is a block cipher: it transforms fixed 128-bit blocks under a key of 128, 192 or 256 bits. It runs everywhere from phone storage to bank transfers, accelerated to gigabytes per second by AES-NI on x86 and the ARMv8 crypto extensions. Twenty-five years of analysis have produced no practical attack on properly used AES. Your job was never the algorithm; it is the mode, the nonce, and the key — that is where every real-world failure lives.",
            "Modes decide everything. ECB encrypts identical blocks identically — structure leaks straight through the ciphertext, the textbook penguin proves it, and it is banned. CBC chains blocks but is malleable without authentication and owns a museum of padding-oracle CVEs. GCM is counter mode plus an authentication tag: AEAD, the default everywhere modern. The rule that compresses the whole chapter: authenticated encryption or nothing — a mode that can be tampered with undetected is not encryption you can rely on.",
          ],
        },
        {
          heading: "Nonces are a one-way door",
          paragraphs: [
            "GCM security collapses if a key and nonce pair repeats. The keystream repeats with it, XOR tricks leak plaintext relations, and worse, the GHASH authentication key becomes recoverable — forgeries follow. Random 96-bit nonces stay safe to about two to the thirty-second messages per key: fine for session keys, dangerous for long-lived ones. If you cannot guarantee uniqueness, XChaCha20-Poly1305 removes the worry with a 192-bit nonce space that makes random generation boring.",
            "ChaCha20-Poly1305 deserves equal billing: it is fast in software, constant-time by design — no lookup tables, no cache-timing worries — and it is a TLS 1.3 suite alongside AES-GCM. The practical split: AES-GCM where hardware acceleration exists, ChaCha on devices without it, XChaCha wherever nonce-misuse risk is real. Both are AEADs; both authenticate the ciphertext and any associated data — headers you want integrity on but not secrecy on.",
          ],
        },
        {
          heading: "Doing it right in application code",
          paragraphs: [
            "Use the platform primitives: WebCrypto subtle.encrypt with AES-GCM, node:crypto createCipheriv, libsodium's aead functions. The recipe is short: fresh twelve-byte IV per message from a CSPRNG, prepend it to the ciphertext, append the authentication tag, and pass associated data to the AAD parameter when headers matter. Never a static IV, never ECB, never bare CBC. Store the format versioned — a one-byte version, then IV, tag, ciphertext — so migration stays possible when it eventually needs to be.",
            "Key hygiene completes it: 256-bit keys from a real CSPRNG — crypto.getRandomValues or /dev/urandom — never derived from passwords directly; passwords go through Argon2id or PBKDF2 first, and the derived key meets the AEAD. Keys live in KMS or a vault, per Chapter 9, not in environment files. And remember the genre split: ciphertext is binary, Base64 around it is transport, not protection — Chapter 12 exists because that sentence gets forgotten in code review.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "Encrypting a payload today",
        caption: "The mode is the decision; the algorithm was settled decades ago.",
        start: "Bulk encryption needed",
        branches: [
          {
            label: "AES-GCM, fresh 96-bit nonce",
            outcome: "Default where AES hardware exists",
            good: true,
          },
          {
            label: "XChaCha20-Poly1305, random IV",
            outcome: "192-bit nonces: no reuse fear",
            good: true,
          },
          {
            label: "AES-CBC without a MAC",
            outcome: "Malleable; padding-oracle history",
            good: false,
          },
          {
            label: "AES-ECB for simplicity",
            outcome: "Identical blocks leak structure",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Twelve fresh bytes per message and a verified tag — the whole discipline in sixteen lines.",
        code: [
          "import { createCipheriv, createDecipheriv, randomBytes } from \"node:crypto\";",
          "",
          "// Seal: fresh 12-byte IV per message; output = version + iv + tag + ct",
          "export const seal = (key: Buffer, pt: Buffer) => {",
          "  const iv = randomBytes(12);               // never reuse a (key, iv) pair",
          "  const c = createCipheriv(\"aes-256-gcm\", key, iv);",
          "  const ct = Buffer.concat([c.update(pt), c.final()]);",
          "  return Buffer.concat([Buffer.from([1]), iv, c.getAuthTag(), ct]);",
          "};",
          "",
          "// Open: the auth tag is verified before any plaintext returns",
          "export const open = (key: Buffer, sealed: Buffer) => {",
          "  const iv = sealed.subarray(1, 13), tag = sealed.subarray(13, 29);",
          "  const d = createDecipheriv(\"aes-256-gcm\", key, iv).setAuthTag(tag);",
          "  return Buffer.concat([d.update(sealed.subarray(29)), d.final()]);",
          "};",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Reusing a GCM nonce because random generation 'has never collided yet'.",
          fix: "One (key, nonce) repeat in GCM enables forgeries. Count nonces per key, or move to XChaCha20-Poly1305 and stop worrying.",
        },
        {
          mistake: "Choosing AES-ECB because it needs no IV management.",
          fix: "ECB encrypts identical blocks identically — structure leaks through. It is the textbook example of what not to ship.",
        },
        {
          mistake: "Encrypting with CBC and skipping the MAC to save effort.",
          fix: "Unauthenticated ciphertext is malleable. Use an AEAD mode, or Encrypt-then-MAC with an HMAC — never the reverse order.",
        },
        {
          mistake: "Deriving AES keys from user passwords with no KDF.",
          fix: "Passwords carry too little entropy for keys. Derive with Argon2id or PBKDF2 into 256 bits, then use the AEAD.",
        },
      ],
      fieldChecklist: [
        "Every encryption call site uses an authenticated mode — AES-GCM or XChaCha20-Poly1305; no ECB, no bare CBC.",
        "I can explain what breaks if a nonce repeats, and what the codebase does to prevent it.",
        "The ciphertext format is versioned and documented: version byte, IV, tag, ciphertext.",
        "Keys are 256 bits from a CSPRNG and stored in KMS or a vault — never in env files.",
        "Decrypt failures surface as exceptions from tag verification, never as garbage plaintext.",
        "Password-derived keys go through Argon2id or PBKDF2 before touching an AEAD.",
      ],
      keyTerms: [
        {
          term: "Block cipher",
          definition:
            "Operates on fixed 128-bit blocks; AES is the standard one, and the mode of operation is where security is won or lost.",
        },
        {
          term: "Nonce",
          definition:
            "Number used once; in GCM a repeated (key, nonce) pair is catastrophic, while XChaCha's 192-bit space makes random generation safe.",
        },
        {
          term: "GCM",
          definition:
            "Galois/Counter Mode — CTR encryption plus an authentication tag; the default AEAD in TLS 1.3 and cloud storage.",
        },
        {
          term: "Associated data",
          definition:
            "Data authenticated but not encrypted (headers, context), passed to the AEAD so tampering there also fails the tag.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why is AES-GCM preferred over AES-CBC?",
          a: "GCM is authenticated encryption: the ciphertext carries a tag, so tampering fails the decrypt instead of delivering altered plaintext. CBC authenticates nothing and is malleable — bit-flipping attacks and a decade of padding-oracle CVEs come with it; bolting an HMAC on later is Encrypt-then-MAC discipline most teams get wrong. AES-GCM with fresh nonces is the default in TLS 1.3, cloud storage and every modern library, so it is also the choice reviewers can check against published guidance.",
        },
        {
          q: "What actually happens when a GCM nonce repeats?",
          a: "Two things, both bad. The counter-mode keystream repeats, so XORing the two ciphertexts cancels the pad and leaks relations between plaintexts. Worse, the GHASH authentication subkey becomes computable from the two tag equations, after which the attacker can forge valid tags for chosen ciphertexts. Random 96-bit nonces keep this safe to roughly two to the thirty-second messages per key; beyond that, XChaCha20-Poly1305 with its 192-bit nonce is the structural fix.",
        },
        {
          q: "AES or ChaCha20 — how do you choose?",
          a: "By hardware and by nonce discipline. AES-GCM wins where AES-NI or ARM crypto extensions exist — effectively every server — reaching gigabytes per second. ChaCha20-Poly1305 wins in software: constant-time by construction, fast on devices without acceleration, which is why TLS 1.3 ships both. Where nonce management is a real risk, XChaCha removes the class of failure with its 192-bit nonce. Both are sound; the mistake would be ECB or unauthenticated CBC, not picking between these two.",
        },
      ],
      quiz: [
        {
          question:
            "Why is ECB banned for anything beyond single-block, structureless data?",
          options: [
            "It is too slow for modern hardware",
            "It requires larger keys than other modes",
            "Identical plaintext blocks produce identical ciphertext blocks, leaking structure",
            "It cannot be implemented in hardware",
          ],
          answerIndex: 2,
          explanation:
            "ECB is a per-block substitution: repeated content shows through, which is how the encrypted penguin stays recognizable. Any real data has structure, so the leak is not theoretical.",
        },
        {
          question:
            "Many messages under one long-lived key with random nonces. Best mode choice?",
          options: [
            "XChaCha20-Poly1305, whose 192-bit nonces make random generation safe",
            "AES-GCM with 96-bit nonces, no further thought",
            "AES-ECB with rotating keys",
            "AES-CBC with a static IV",
          ],
          answerIndex: 0,
          explanation:
            "GCM's random-nonce safety ends around two to the thirty-second messages per key; a long-lived high-volume key walks into that bound. XChaCha's 192-bit nonce space removes the birthday concern structurally.",
        },
        {
          question:
            "What does the authentication tag protect that encryption alone does not?",
          options: [
            "Key confidentiality",
            "Integrity — undetected ciphertext modification becomes impossible",
            "Faster decryption",
            "Protection against nonce reuse",
          ],
          answerIndex: 1,
          explanation:
            "Without a tag, attackers can flip ciphertext bits and predictably alter plaintext. The tag turns tampering into a decrypt failure — that is the AEAD guarantee.",
        },
      ],
    },
    {
      number: 7,
      title: "Public and Private Keys",
      summary:
        "Asymmetric cryptography is the magic trick that makes the internet trust-able: publish half a key to the world, keep the other half in a vault.",
      keyIdea: "A private key is one file whose leak is an identity theft for machines. ed25519 preferred for SSH and new signing use-cases.",
      deepDive: [
        {
          heading: "The trick that lets trust scale",
          paragraphs: [
            "Symmetric cryptography has a delivery problem: every pair of parties needs a shared secret, and n parties means n times n-minus-one over two keys, each of which had to travel somewhere vulnerable. Asymmetric cryptography splits the key in two: publish the public half, guard the private half. Anyone can encrypt to you or verify your signatures; only you can decrypt or sign. The distribution problem inverts — public keys need authenticity, not secrecy, and certificates are the machinery that delivers authenticity.",
            "Production cryptography is hybrid, and understanding the split is the point. TLS 1.3 uses asymmetric crypto for identity and key agreement — certificates and ECDHE — then switches to symmetric AES-GCM or ChaCha20 for every payload byte. The reason is speed: asymmetric operations cost orders of magnitude more than symmetric ones. Each half does the job it is good at: public keys establish who and how to talk, symmetric keys move the actual data.",
          ],
        },
        {
          heading: "One file that is your identity",
          paragraphs: [
            "A private key is identity for machines, and one leaked file is machine identity theft: the thief can impersonate your server, sign releases as you, decrypt messages addressed to you. This is not hypothetical — bots scan public repositories for committed deploy keys within minutes of a push. With TLS 1.3's forward secrecy a leaked server key cannot unlock recorded past traffic, but it enables impersonation until revocation, and for signing keys there is no such consolation: past signatures are attacker-grade too.",
            "Move keys up the storage ladder as stakes rise: a plain file on disk with mode 600 is the floor; passphrase-protected keys plus ssh-agent is the everyday standard; OS keystores and TPMs bind keys to hardware; KMS and HSM keep the private half non-exportable, with signing as an API call. Generate keys on the machine that will use them — keys born in CI and copied around multiply leak paths. Secret scanning (gitleaks, GitHub's) belongs in CI, not in your postmortem.",
          ],
        },
        {
          heading: "ed25519 by default",
          paragraphs: [
            "For new keys, ed25519 is the answer: 32-byte public keys, 64-byte signatures, fast verification, and deterministic signing — no per-signature nonce randomness to fumble. That last property matters more than it sounds: ECDSA's nonce reuse or bias leaks the private key algebraically, which is how the 2013 Android Bitcoin wallet drain and the PS3 signing key happened. Determinism removes a whole class of operational failure from the table.",
            "The ecosystem decides the rest. RSA still everywhere: minimum 2048 bits, 3072 preferred, PSS padding for new signing — PKCS#1 v1.5 survives only for legacy compatibility. ECDSA P-256 rules the FIPS and HSM world and shows up as ES256 in JWTs. Practical defaults: ssh-keygen -t ed25519 -a 100 for SSH, EdDSA or ES256 for new JWT work, age or GPG for encrypting files to people. Match the algorithm to the constraint, not to the argument.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Two halves of a keypair",
        caption:
          "Opposite custody rules for two halves of the same secret — confusing them is how keys leak.",
        left: {
          heading: "Public half",
          items: [
            "Published in certs and key servers",
            "Encrypts to you, verifies signatures",
            "Losing it costs nothing",
            "Needs authenticity, not secrecy",
          ],
        },
        right: {
          heading: "Private half",
          items: [
            "Never leaves agent, keystore or HSM",
            "Decrypts, signs, proves identity",
            "One leak is machine identity theft",
            "Rotate and audit on suspicion",
          ],
        },
      },
      codeExample: {
        language: "bash",
        caption:
          "Generate on the machine that owns the key; age turns the public half into a one-command envelope.",
        code: [
          "# A modern keypair: ed25519, hardened passphrase KDF, 100 rounds",
          "ssh-keygen -t ed25519 -a 100 -C \"deploy@acme-2026\" -f ~/.ssh/deploy_ed25519",
          "",
          "# Encrypt a file to a recipient's public key with age",
          "age -R ~/.ssh/deploy_ed25519.pub -o secrets.env.age secrets.env",
          "",
          "# Decryption needs the private key — nothing else can read the file",
          "age -d -i ~/.ssh/deploy_ed25519 -o secrets.env secrets.env.age",
          "",
          "# Fingerprint for the audit trail: which key is deployed where",
          "ssh-keygen -lf ~/.ssh/deploy_ed25519.pub",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Committing a private key because 'it is internal and scoped to one repo'.",
          fix: "Bots harvest keys from public and leaked private repos alike. Generate on the target machine, run gitleaks in CI, rotate on exposure.",
        },
        {
          mistake:
            "Generating keys centrally and copying private keys to every server.",
          fix: "Every copy is another leak path. Generate on the host; for shared signing, use KMS or HSM where the key never leaves as bytes.",
        },
        {
          mistake:
            "Running one SSH key across every role and machine for a decade.",
          fix: "One key per person per purpose, rotated on schedule and role change; passphrases plus agent stop a stolen file from being enough.",
        },
        {
          mistake: "Keeping RSA-1024 because a legacy partner requires the format.",
          fix: "1024-bit RSA is broken territory. Push the partner to 2048 minimum — 3072 preferred — or to an ECC algorithm.",
        },
      ],
      fieldChecklist: [
        "Every private key I manage is passphrase-protected, agent-held, or lives in a keystore, KMS or HSM.",
        "Secret scanning runs in CI and over history; no key has ever been committed and left unrotated.",
        "I maintain an inventory: which keys exist, where they are used, who owns them.",
        "New SSH keys and JWT signing use ed25519 or ES256; RSA only where legacy demands, 2048 bits minimum.",
        "I have rehearsed the leak response: revoke, rotate, audit who could have used the key.",
        "Keys are generated on the machine that will use them — never shipped from CI or a workstation.",
      ],
      keyTerms: [
        {
          term: "Keypair",
          definition:
            "Matched public and private halves; the public half encrypts and verifies, the private half decrypts and signs.",
        },
        {
          term: "Forward secrecy",
          definition:
            "Ephemeral key agreement means a later private-key leak cannot decrypt previously recorded sessions.",
        },
        {
          term: "ed25519",
          definition:
            "EdDSA signatures on Curve25519 — small, fast, deterministic; the default choice for new keys.",
        },
        {
          term: "HSM",
          definition:
            "Hardware security module: keys live inside and operate inside; private key material is never released as readable bytes.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain public-key cryptography to a new engineer in two minutes.",
          a: "Two mathematically linked halves: whatever one locks, only the other opens. Publish the public half freely — it encrypts messages to you and verifies your signatures — and guard the private half, which decrypts and signs. That split turns key distribution from a logistics problem into an authenticity problem, solved by certificates. Production stays hybrid: asymmetric crypto handles identity and key agreement in a TLS handshake, then fast symmetric AES-GCM carries the data. Asymmetric is the trust layer, not the bulk layer.",
        },
        {
          q: "A private signing key just leaked. Walk me through your first hour.",
          a: "Contain, assess, rotate, audit. Revoke and replace the key first — stop the bleeding before forensics. Then establish the exposure window and check every signature and artifact produced in it: releases, tokens, commits; assume anything signed in the window is attacker-eligible until proven otherwise. Audit where the key could have been used — CI logs, package registries — and rotate everything that trusted it. Finally, fix the path in: secret scanning, generation-on-target, KMS custody. The postmortem is about the leak path, not the crypto.",
        },
        {
          q: "Why does TLS still use symmetric encryption for data despite having public keys?",
          a: "Speed and design. Asymmetric operations cost orders of magnitude more CPU than symmetric ones — doing RSA or ECC on every payload byte would collapse throughput. So the handshake uses certificates for authentication and ECDHE for agreeing on fresh session keys, then hands traffic to AES-GCM or ChaCha20. That hybrid is also where forward secrecy lives: ephemeral session keys mean later compromise of the long-term private key cannot decrypt recorded sessions.",
        },
      ],
      quiz: [
        {
          question:
            "What does a leaked TLS server private key compromise under TLS 1.3?",
          options: [
            "Future impersonation until revocation — but not past sessions, thanks to forward secrecy",
            "All recorded past sessions, thanks to RSA key exchange",
            "Nothing, because TLS 1.3 re-encrypts automatically",
            "The certificate authority's root key",
          ],
          answerIndex: 0,
          explanation:
            "TLS 1.3's ephemeral ECDHE means session keys never depend on the long-term key alone, so history stays sealed. Impersonation going forward is the exposure — rotate and revoke quickly.",
        },
        {
          question:
            "Why is ed25519's deterministic signing considered an operational advantage?",
          options: [
            "It makes signatures smaller than any other scheme",
            "It removes per-signature nonce randomness, whose reuse or bias leaks the private key",
            "It is required by FIPS standards",
            "It eliminates the need for certificates",
          ],
          answerIndex: 1,
          explanation:
            "ECDSA failures — the Android Bitcoin wallet drain, the PS3 key — were nonce failures. Determinism deletes the failure class instead of training people to avoid it.",
        },
        {
          question: "Where should a production signing key live?",
          options: [
            "In the application's environment variables",
            "In the Git repository, encrypted with age",
            "In KMS or an HSM, with signing as an API call and no exportable key material",
            "On a shared team drive with restricted permissions",
          ],
          answerIndex: 2,
          explanation:
            "Non-exportable keys shrink the threat model: an attacker with code execution can use the key, but cannot walk out with it. Environment variables and shared drives fail that test.",
        },
      ],
    },
    {
      number: 8,
      title: "SSL Certificates",
      summary:
        "A certificate is a signed ID card for a hostname. Everything weird about TLS ops — expiry panics, chain errors, private CAs — is certificate management.",
      keyIdea: "Short-lived certs from Let's Encrypt with automatic renewal. The 'expiry panic' genre dies when renewal is automated and monitored.",
      deepDive: [
        {
          heading: "A signed ID card for a hostname",
          paragraphs: [
            "An X.509 certificate binds a hostname — the SAN field; common name is deprecated — to a public key, signed by an issuer. Clients verify by building a chain: leaf, intermediates, a root already trusted by the operating system or browser. The classic production failure lives right there: the server presents only the leaf, browsers quietly fill the gap from cache or AIA fetches, and curl on a bare container fails verification. Serve the full chain and verify with openssl s_client -showcerts.",
            "Verification also checks the validity window, hostname match, and key usage extensions — serverAuth for TLS. And everything expires: Let's Encrypt issues ninety-day certificates, public trust windows have been shrinking toward months, and the CA/Browser Forum keeps tightening the schedule. Short life is deliberate policy, not bureaucracy: revocation is unreliable, so the industry leans on fast expiry to contain compromise. Planning around permanent certificates is planning against the design.",
          ],
        },
        {
          heading: "ACME: certificates as cattle",
          paragraphs: [
            "ACME — RFC 8555 — automates issuance: a client (certbot, acme.sh, lego, Caddy built in, cert-manager on Kubernetes) proves control of the domain and receives a certificate. HTTP-01 serves a token on port 80; DNS-01 writes a TXT record through a provider API and covers wildcards; TLS-ALPN-01 works behind strict ingress setups. Let's Encrypt issues free ninety-day certificates with renewal handled twice daily by timer, thirty days ahead. Caddy renews invisibly; cert-manager turns ingress certificates into rotating Kubernetes secrets.",
            "Internal hostnames deserve the same treatment from a private CA: step-ca or Vault's PKI engine issues short-lived certificates over an API with policies you control, and the root gets distributed in your base images and trust stores. Never buy public certificates for internal names — the public CA cannot validate them, and you gain nothing you cannot get from your own CA. Automation is the whole point: certificates should arrive, renew and retire without a human typing a command.",
          ],
        },
        {
          heading: "Dismantling the expiry panic",
          paragraphs: [
            "The expiry panic genre has one root cause: renewal depends on automation, and automation fails quietly. Certbot wrote its error to a log nobody reads, the deploy hook stopped firing after a config change, the DNS API token expired — and thirty days later the site is down. The fix is alerting on the renewal pipeline itself: renewal job failures, days-remaining on a dashboard with an owner, and a synthetic check that continuously asserts real TLS verification succeeds against production.",
            "Then rehearse the failure once: kill the active certificate in staging, watch monitoring catch it, run the recovery. The historical warnings are real — the AddTrust intermediate expiration in 2020 broke chains across the industry — and they all reduce to the same habit: know what your clients verify, know when what you serve dies, and automate both sides. Certificates are cattle; any single one being load-bearing is the smell.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The certificate lifecycle",
        caption:
          "Automation turns certificates from emergencies into background noise.",
        steps: [
          { label: "Issue", note: "ACME or internal CA" },
          { label: "Deploy", note: "server, LB, secret store" },
          { label: "Serve", note: "clients verify the chain" },
          { label: "Monitor", note: "expiry + renewal alerts" },
          { label: "Renew", note: "automated, 30 days early" },
          { label: "Retire", note: "old cert revoked, replaced" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Two commands replace the expiry panic: inspect what is served, and automate renewal with a reload hook.",
        code: [
          "# Inspect what a server actually serves: dates, issuer, SANs",
          "openssl s_client -connect example.com:443 -servername example.com \\",
          "  < /dev/null | openssl x509 -noout -subject -issuer -dates -ext subjectAltName",
          "",
          "# Renew on a timer; the deploy hook reloads nginx atomically",
          "certbot renew --deploy-hook \"systemctl reload nginx\"",
          "",
          "# Wildcards need the DNS-01 challenge (TXT record via provider API)",
          "certbot certonly --dns-route53 -d \"*.example.com\"",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Serving only the leaf certificate and calling chain errors 'a curl problem'.",
          fix: "Send leaf plus intermediates. Browsers paper over gaps; curl, Java and Go verify strictly. Check with openssl s_client -showcerts.",
        },
        {
          mistake:
            "Automated renewal with no alerting on the renewal job itself.",
          fix: "Silent renewal failures surface as outages weeks later. Alert on job failure and days-remaining, and test the deploy hook.",
        },
        {
          mistake:
            "Buying multi-year public certificates and calendaring the renewal.",
          fix: "Calendar-based management is how the panic genre survives. Use ACME — certbot, cert-manager, Caddy — and monitor as the backup.",
        },
        {
          mistake: "Requesting public certificates for internal hostnames.",
          fix: "Public CAs cannot validate internal names. Run step-ca or Vault PKI, trust the root in your fleet, issue short-lived certs automatically.",
        },
      ],
      fieldChecklist: [
        "Every certificate I serve includes the full chain and passes plain curl verification from a bare container.",
        "Renewal is automated via ACME, and its failure — not only expiry — pages someone.",
        "Days-to-expiry sits on a dashboard with a named owner, not in a personal calendar.",
        "Internal services use a private CA whose root ships in base images.",
        "I know which challenge type each renewal uses — HTTP-01 or DNS-01 — and why.",
        "A synthetic check continuously asserts that real verification succeeds against production.",
      ],
      keyTerms: [
        {
          term: "X.509",
          definition:
            "The certificate format: identity (hostname via SAN) bound to a public key, signed by an issuer, valid for a window.",
        },
        {
          term: "Chain of trust",
          definition:
            "Leaf signed by intermediates signed by a root the client already trusts; the server must serve the whole chain.",
        },
        {
          term: "ACME",
          definition:
            "RFC 8555 — the protocol automating issuance and renewal through domain-control challenges like HTTP-01 and DNS-01.",
        },
        {
          term: "SAN",
          definition:
            "Subject Alternative Name — the certificate field that actually lists hostnames; wildcards live here too.",
        },
        {
          term: "OCSP stapling",
          definition:
            "The server delivers a time-stamped revocation proof during the handshake, so clients need not query the CA.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why are certificate lifetimes getting shorter?",
          a: "Because revocation is broken in practice — CRLs are heavy and OCSP has privacy and availability problems — so the industry substitutes fast expiry for reliable revocation. A compromised certificate stops mattering in weeks rather than sitting valid for years. Let's Encrypt normalized ninety days; public trust windows keep shrinking from there. Operationally, the answer is not longer certificates but boring automation: ACME renewal, monitored pipelines, and certificates that arrive and retire without human hands.",
        },
        {
          q: "How do you manage certificates for internal services?",
          a: "A private CA with the same discipline as public automation. step-ca or Vault's PKI engine issues short-lived certificates over APIs with policy control; the root goes into base images and trust bundles, updated in stages. Renewal is automated per workload — cert-manager for Kubernetes, host agents elsewhere — and expiry monitoring covers the internal CA too, including its root. The payoff compounds with mTLS in Chapter 14: the same machinery that keeps server certificates fresh issues the client identities.",
        },
        {
          q: "A production endpoint throws certificate errors, but renewal is automated. Debug plan?",
          a: "First, what is actually served: openssl s_client -showcerts shows the chain, dates and SAN — the usual suspects are a missing intermediate, a renewal that succeeded but never reloaded the server, or a SAN that no longer matches after a rename. Then check the renewal pipeline: certbot logs, deploy-hook failures, expired DNS API tokens. Finally widen the net — clock skew on the client, an intermediate that expired. The measurement comes first because every guess is cheap and wrong often.",
        },
      ],
      quiz: [
        {
          question:
            "Browsers accept your site but a Go service fails TLS verification. Most likely cause?",
          options: [
            "The server presents an incomplete chain, missing intermediates",
            "The certificate uses ECDSA, which Go rejects",
            "The certificate has too long a validity window",
            "Go requires TLS 1.2 maximum",
          ],
          answerIndex: 0,
          explanation:
            "Browsers fetch or cache missing intermediates; strict clients verify only what is served. Ship the full chain and confirm with openssl s_client -showcerts from a bare container.",
        },
        {
          question:
            "What does the DNS-01 challenge provide that HTTP-01 does not?",
          options: [
            "Faster certificate issuance",
            "Support for wildcard certificates and hosts not reachable on port 80",
            "Stronger cryptographic protection of the key",
            "Automatic revocation checks",
          ],
          answerIndex: 1,
          explanation:
            "DNS-01 proves domain control through a TXT record via a provider API, so it can cover *.example.com and hosts hidden behind strict ingress where port 80 is unavailable.",
        },
        {
          question:
            "Renewal succeeded but the endpoint still serves the old certificate. Why?",
          options: [
            "The CA issued a revoked certificate",
            "Let's Encrypt rate-limits serving, not issuance",
            "The deploy hook never reloaded the server process",
            "TLS 1.3 caches certificates on clients",
          ],
          answerIndex: 2,
          explanation:
            "Renewal writes files; serving them requires the reload — the deploy hook's whole job. Hooks fail silently after config changes, which is why renewal pipelines need their own alerting.",
        },
      ],
    },
    {
      number: 9,
      title: "Key Management (KMS)",
      summary:
        "Every crypto failure story ends the same way: 'and then we found the key in a config file.' KMS is the discipline of never telling that story.",
      keyIdea: "The application sees permissions and ciphertext, not keys. KMS gives you the kill switch: deleting a key makes everything encrypted under it permanently unreadable.",
      deepDive: [
        {
          heading: "The config-file graveyard",
          paragraphs: [
            "Every crypto failure story ends the same way: the key was in a config file — committed to Git, baked into a Docker layer, echoed by a CI script with set -x, pasted into Slack during an incident. The pattern is structural, not carelessness: keys that applications must read are keys that applications can leak. KMS breaks the pattern by making key material non-exportable: AWS KMS, GCP Cloud KMS, Azure Key Vault and Vault's transit engine hold keys inside HSM-backed storage and answer encrypt and decrypt requests over an API.",
            "The mental shift is from owning bytes to holding permissions. Your application never sees the master key; it sends plaintext or ciphertext to the API and IAM decides, call by call, whether the request succeeds. Every use lands in audit logs — CloudTrail, Vault audit devices. The threat model improves in kind: an attacker with code execution can use the key while the session lasts, but cannot walk out with it. That difference — usable versus stealable — is the whole architecture.",
          ],
        },
        {
          heading: "Hierarchy, rotation, and the kill switch",
          paragraphs: [
            "Structure keys like environments: one key per service per purpose, staging never touching production keys, each with its own policy naming its own roles. Rotation is designed to be transparent — KMS automatic rotation replaces backing material annually while old ciphertext stays decryptable; Vault transit rotates named keys on demand. Rotate on schedule and on suspicion; the incident rotation you rehearsed is the one that takes minutes instead of days.",
            "The kill switch is the feature auditors love and operators fear: scheduling deletion of a key — a seven-to-thirty-day window in AWS — makes everything encrypted under it permanently unreadable. That is cryptographic data destruction, and it cuts both ways: guard key policies like production infrastructure, separate administration duties, require dual control for lifecycle operations, and keep a written, rehearsed break-glass process. The policy document is the real access control; a bucket policy means nothing if Decrypt allows a wildcard.",
          ],
        },
        {
          heading: "Operating KMS in production",
          paragraphs: [
            "Watch the volume, not just the permissions: Decrypt and Encrypt call rates in CloudTrail or Vault audit logs reveal misuse, compromised workloads and runaway code paths — alarm on anomalies, not just on failures. Keep policies least-privilege with conditions: via VPC endpoint only, named roles only, MFA for destructive operations. Review quarterly, because policies accrete stars the way closets accrete coats. And test the negative case — a role that should not decrypt, failing — because a policy nobody has seen fail is a policy nobody has read.",
            "Two operational costs deserve honest accounting. Latency: every Decrypt is a network call with a permission check, which is exactly why Chapter 11's envelope encryption and data-key caching exist — KMS wraps keys, not payloads. Availability: KMS becomes a dependency; if the API is unreachable, decryption stops. Decide per system whether you fail closed (a payment processor must) or degrade gracefully with short-lived caches. Unmanaged honestly, that dependency becomes the surprise outage.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Who ever sees which key",
        caption:
          "Each layer touches only the key above it; the top never leaves the hardware.",
        layers: [
          { label: "Root keys in HSM", note: "never exportable, ever" },
          { label: "KMS master keys (KEK)", note: "policy + audit on every use" },
          { label: "Data keys (DEK), wrapped", note: "travel with the ciphertext" },
          { label: "Application runtime", note: "sees ciphertext, not keys" },
          { label: "Stored data", note: "AES-GCM under its own DEK" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "KMS inverts the leak problem: the app holds permissions and ciphertext, never the key itself.",
        code: [
          "import { KMSClient, EncryptCommand, DecryptCommand } from \"@aws-sdk/client-kms\";",
          "",
          "const kms = new KMSClient({});",
          "",
          "// The key never leaves KMS: the app sends bytes and gets bytes back.",
          "export const seal = async (plaintext: Buffer) => {",
          "  const out = await kms.send(new EncryptCommand({",
          "    KeyId: process.env.KMS_KEY_ARN,       // one key per service",
          "    Plaintext: plaintext,",
          "  }));",
          "  return out.CiphertextBlob as Buffer;    // opaque and auditable",
          "};",
          "",
          "export const unseal = async (blob: Buffer) => {",
          "  const out = await kms.send(new DecryptCommand({ CiphertextBlob: blob }));",
          "  return out.Plaintext as Buffer;         // IAM decides if this succeeds",
          "};",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Keeping KMS-wrapped secrets' plaintext in .env files that Git tracks.",
          fix: "Env files end up in repos, images and CI logs. Keys stay in KMS; applications hold permissions and ciphertext only.",
        },
        {
          mistake: "Granting kms:Decrypt to wildcard principals 'temporarily'.",
          fix: "The key policy is the real access control. Name roles per key, add conditions, alarm on Decrypt volume, review quarterly.",
        },
        {
          mistake: "One shared master key across every service and environment.",
          fix: "One leak decrypts everything. One key per service per environment; staging never touches production keys.",
        },
        {
          mistake:
            "Assuming rotation breaks access to previously encrypted data.",
          fix: "KMS rotation keeps old material decryptable while new calls use fresh backing keys. Rotate on schedule and on suspicion.",
        },
      ],
      fieldChecklist: [
        "No key material exists in code, env files, container images or logs — only permissions and ciphertext.",
        "Every service uses its own key, and each key policy names roles rather than stars.",
        "Key usage is logged and alerted on volume anomalies, not just failures.",
        "Rotation runs on schedule and after incidents; I can explain why old ciphertext stays readable.",
        "Deletion and scheduling of keys are dual-controlled, audited and covered by a rehearsed break-glass process.",
        "I know the latency profile of Decrypt calls and where Chapter 11's caching earns its keep.",
      ],
      keyTerms: [
        {
          term: "KMS",
          definition:
            "Key management service — managed, HSM-backed storage that performs encryption via API; key material is non-exportable.",
        },
        {
          term: "Key policy",
          definition:
            "The IAM document deciding who may use a key; the real access control over everything encrypted under it.",
        },
        {
          term: "Non-exportable key",
          definition:
            "Key material the service never releases; consumers receive API results and permissions, never bytes.",
        },
        {
          term: "Break-glass",
          definition:
            "The documented, dual-controlled emergency path for rare destructive operations such as key deletion.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why a KMS instead of secrets in Vault or env vars?",
          a: "Because exportability is the vulnerability. Env vars and even fetched secrets live in process memory, logs and images — they leak through exactly the channels applications leak through. A KMS key is non-exportable: the application holds an IAM identity and asks for operations, every call is authorized and audited, and compromise yields temporary use rather than permanent theft. Vault remains valuable for dynamic secrets and broader secret lifecycle — but the master keys belong behind non-exportability, which is a property, not a feature flag.",
        },
        {
          q: "What does deleting a KMS key do, and how do you guard it?",
          a: "Scheduled deletion — a seven-to-thirty-day window in AWS — makes everything encrypted under that key permanently unreadable: cryptographic destruction, no recovery after the window. That power needs dual control: separate admin duties, MFA on lifecycle operations, alarms on any deletion action, and a rehearsed break-glass process that includes canceling a scheduled deletion. Before ever relying on revocation as a feature, test restores against the reality that the data is gone — that test belongs in the backup drills.",
        },
        {
          q: "How do you keep KMS latency and cost out of hot paths?",
          a: "Envelope encryption plus caching. KMS wraps keys, not payloads: a data key generated locally does the bulk AES-GCM work, and only the small wrap call touches KMS. Unwrapped data keys cache in memory behind a TTL and byte budget — AWS documents the pattern as data-key caching — so steady-state traffic rarely hits the API. The trade-off is honest: a cached plaintext key lives outside KMS, so you bound its lifetime, bound its blast radius, and monitor call volume for paths that skipped the envelope.",
        },
      ],
      quiz: [
        {
          question:
            "What is the security property that makes a KMS different from a secrets file?",
          options: [
            "Key material is non-exportable — consumers get API results and permissions, never the bytes",
            "It stores keys encrypted at rest",
            "It rotates keys automatically every hour",
            "It compresses ciphertext for cheaper storage",
          ],
          answerIndex: 0,
          explanation:
            "Files and env vars leak through application channels; a non-exportable key cannot leave the service. Compromise becomes temporary use under audit, not permanent theft.",
        },
        {
          question:
            "Your team schedules deletion of a production KMS key by accident. After the window, what is true?",
          options: [
            "AWS support can restore the key on request",
            "Old data stays readable for thirty days, then decrypts normally",
            "Only new writes fail; reads continue",
            "Data encrypted under it becomes permanently unreadable",
          ],
          answerIndex: 3,
          explanation:
            "The waiting window exists for exactly one cancellation decision. After it, ciphertext under that key is dead — which is the feature, and why lifecycle operations demand dual control.",
        },
        {
          question: "Why does envelope encryption exist alongside KMS?",
          options: [
            "KMS cannot encrypt data securely",
            "To keep bulk crypto local and fast while the master key stays non-exportable",
            "To avoid paying for KMS entirely",
            "To remove the need for audit logs",
          ],
          answerIndex: 1,
          explanation:
            "KMS calls are permission-checked network round trips with payload limits. Envelope encryption puts fast AES-GCM on local data keys and reserves KMS for wrapping the small keys.",
        },
      ],
    },
    {
      number: 10,
      title: "Encrypted Backups",
      summary:
        "Your backup is a copy of everything, in a file, probably in another region. It is also the most stolen artifact in every breach report.",
      keyIdea: "Separation of powers: the entity that can copy the backup must not be the entity that can decrypt it.",
      deepDive: [
        {
          heading: "The most stolen artifact",
          paragraphs: [
            "A backup is a complete copy of the company, sitting on infrastructure chosen for price, not vigilance: an NFS mount nobody has logged into for a year, an S3 bucket with a permissive policy, an rsync job older than half the team. Breach reports rhyme: attacker lands on one server, finds the backup credentials or an existing mount, and leaves with everything in one transfer. A backup without encryption is simply a breach with a delivery delay.",
            "Ransomware sharpens the same lesson from the other side: modern attackers locate and destroy backups before detonating the payload, because your recovery is their leverage. Both attacks point at one rule — separation of powers. The entity that can copy the backup must not be the entity that can decrypt it. Storage credentials get stolen constantly; ciphertext without reachable keys is the difference between a copied artifact and a catastrophic disclosure.",
          ],
        },
        {
          heading: "Encrypt before it leaves",
          paragraphs: [
            "Layered options, strongest first: client-side encryption means data is encrypted before upload — restic and borgbackup encrypt with repository keys, pgBackRest takes cipher options, age wraps dumps — so the storage layer holds only ciphertext and its compromise reveals nothing. Storage-level encryption, S3 SSE with a customer-managed key, is simpler and covers object theft, but the storage tier can still decrypt, and with it so can anyone holding storage credentials. Database-native encryption sits between. Choose client-side for crown jewels.",
            "Client-side encryption's real risk is key custody: lose the key and the backup is lost forever, and no vendor can help because the vendor never had it. So backup keys live in KMS with their own policy — the backup storage role cannot Decrypt, the restore role can — plus dual control and a documented, tested escrow path. The restore drill now includes the key path by definition: restore with real permissions in a scratch environment, or you have tested nothing.",
          ],
        },
        {
          heading: "Immutability and the drill",
          paragraphs: [
            "Encryption protects confidentiality; immutability protects availability, and ransomware taught the industry that both matter. S3 Object Lock in compliance mode, WORM tape, and Backblaze's object lock give a window during which deletion is impossible — including for the credentials that created the copies. Pair immutable storage with separate credentials and a separate network zone, so the compromise of production does not automatically reach the vault. Encryption plus immutability is the modern backup posture; either alone has a known hole.",
            "The drill closes the loop: quarterly, restore a full backup into a scratch environment, decryption included, under the real key policy. Time it, verify checksums and sample rows, and confirm the restore role's Decrypt permissions actually work — the drill that fails is the drill doing its job. Alert on backup job failures like production incidents, track success as a metric rather than a log line, and remember Chapter 9's warning: a backup encrypted to a key nobody can reach is indistinguishable from no backup at all.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "The backup honesty grid",
        caption:
          "Encryption without a tested restore is a disaster wearing the costume of a plan.",
        axes: { x: "Restore actually tested?", y: "Encrypted, keys safe?" },
        quadrants: [
          { label: "Hope, not a backup", note: "encrypted, but never restored" },
          { label: "The target state", note: "drill-tested quarterly" },
          { label: "Two disasters in one", note: "plaintext and never tested" },
          { label: "A leak on a schedule", note: "restorable, but plaintext" },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Encrypting backups to a key stored in the same bucket as the backups.",
          fix: "Same-location keys defeat the encryption. Keys live in KMS under a policy the storage role cannot satisfy.",
        },
        {
          mistake:
            "Letting the backup service hold full production database credentials.",
          fix: "Least privilege: a dedicated read role for the backup job, network-segregated; the storage tier holds ciphertext it cannot open.",
        },
        {
          mistake:
            "Assuming the backup vendor can recover a lost client-side encryption key.",
          fix: "Client-side means the vendor never had it. KMS-held keys, dual control, escrow documentation, and a tested recovery path.",
        },
        {
          mistake: "Restoring for the first time during the incident.",
          fix: "Quarterly full restore into a scratch environment, decryption included. An untested backup is a hope with a schedule.",
        },
      ],
      fieldChecklist: [
        "Backup encryption keys live in KMS, and the storage tier's role cannot Decrypt them.",
        "The entity that copies backups is not the entity that can read them.",
        "Backup storage is immutable or versioned with delete protection inside a window.",
        "I have run a full restore, decryption included, within the last quarter.",
        "Backup job failures alert like production incidents; success is tracked as a metric.",
        "Key escrow for backup keys is documented, dual-controlled and actually tested.",
      ],
      keyTerms: [
        {
          term: "Client-side encryption",
          definition:
            "Encrypting before upload, so backup storage holds only ciphertext and its compromise reveals nothing.",
        },
        {
          term: "Key escrow",
          definition:
            "The documented, secured custody path for backup keys — the line between recovery and permanent loss.",
        },
        {
          term: "Immutability",
          definition:
            "Storage that rejects modification or deletion for a window — S3 Object Lock, WORM — the ransomware countermeasure.",
        },
        {
          term: "Separation of powers",
          definition:
            "Copying, storing and decrypting a backup are distinct roles with distinct credentials and keys.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you stop an attacker who steals your backups from reading them?",
          a: "Make the copy useless without a second secret. Client-side encryption before upload — restic, borg, age-wrapped dumps — leaves the storage tier holding ciphertext; keys live in KMS under a policy the storage role cannot satisfy. Then assume the attacker also steals storage credentials: they get blobs. The control that makes it real is the quarterly restore drill with decryption under the real policy, because encryption that breaks your own recovery is just ransomware you administered to yourself.",
        },
        {
          q: "Where does the backup encryption key live, and how do you avoid losing it?",
          a: "In KMS, with a policy naming exactly who may Decrypt — the restore role, an on-call break-glass role, nobody else. Dual control for lifecycle operations, documented escrow, and the key included in the quarterly drill so 'can we actually restore' is answered with evidence, not hope. The one thing I never do is let the key live beside the data it protects, in the same bucket or the same repository, because the threat model that steals one steals both.",
        },
        {
          q: "Design a backup strategy that survives ransomware.",
          a: "Four properties, deliberately separated. Encrypted: client-side, keys in KMS, storage cannot decrypt. Immutable: Object Lock or WORM windows longer than the attack horizon. Isolated: separate credentials, separate network zone, separate identity provider if possible. Rehearsed: quarterly full restore including decryption, timed and verified. Then the operational glue — failure alerting, success metrics, retention tiers — because the attacker in the report did not defeat the backup; they defeated the one of those four properties the team skipped.",
        },
      ],
      quiz: [
        {
          question:
            "An attacker compromises your backup storage credentials. Which design makes that a non-event?",
          options: [
            "Storage-level encryption with the provider's default key",
            "Client-side encryption with keys the storage role cannot decrypt",
            "More frequent backups",
            "Compressing the backups before upload",
          ],
          answerIndex: 1,
          explanation:
            "Stolen storage credentials can copy whatever the storage can read. Client-side ciphertext with unreachable keys turns the theft into useless blobs — that is separation of powers.",
        },
        {
          question:
            "Why does immutability matter alongside encryption for backups?",
          options: [
            "It improves compression ratios",
            "It speeds up restore operations",
            "It replaces the need for encryption",
            "It blocks deletion and overwrite during the retention window, defending recovery from ransomware",
          ],
          answerIndex: 3,
          explanation:
            "Encryption protects confidentiality; ransomware attacks availability by deleting or overwriting backups. Object Lock and WORM windows keep the recovery path intact even under credential compromise.",
        },
        {
          question:
            "A backup is encrypted with a customer-managed key and passes checksum verification weekly. What is still missing?",
          options: [
            "Nothing — checksums prove restorability",
            "A second copy on the same storage tier",
            "A restore drill that decrypts and loads the data under the real key policy",
            "Switching to a provider-managed key for reliability",
          ],
          answerIndex: 2,
          explanation:
            "Integrity checks prove the bits, not the path. Until a full restore — decryption, permissions, data validation — has actually run, the backup remains an unverified assumption.",
        },
      ],
    },
    {
      number: 11,
      title: "Envelope Encryption (DEK + KEK)",
      summary:
        "One key for everything means one leak for everything. Envelope encryption gives every piece of data its own key — and protects that key with another.",
      keyIdea: "Generate a data encryption key (DEK) locally, encrypt the data with fast AES-GCM, then encrypt only the DEK with the master key (KEK) via KMS.",
      deepDive: [
        {
          heading: "One key for everything, one leak for everything",
          paragraphs: [
            "Two constraints collide in production cryptography. Managed KMS calls are permission-checked network round trips with payload limits — AWS KMS encrypts four kilobytes at a time — while bulk data wants gigabytes-per-second AES-GCM. Encrypting everything through the API is slow and expensive; encrypting everything with one local master key recreates the config-file problem. Envelope encryption resolves both: generate a fresh data encryption key locally, encrypt the data with it, then ask KMS to wrap only that small key under the master.",
            "The stored artifact is the envelope: ciphertext plus the wrapped DEK, side by side, self-describing. Decryption runs one IAM-checked unwrap call, then local AES at hardware speed. The properties stack up: the master key never leaves KMS; each dataset owns a DEK, so one leak exposes one dataset; every unwrap is audited per caller; and KMS traffic stays proportional to key operations, not bytes. S3 SSE-KMS, EBS encryption and most database TDE run exactly this machinery under the hood.",
          ],
        },
        {
          heading: "The format and the caching trade",
          paragraphs: [
            "Document the envelope format in the repo, not in tribal memory: version byte, ciphertext, IV, tag, wrapped DEK — and expect it to outlive several refactors. AWS's Encryption SDK is the reference implementation, and one of its ideas deserves adoption everywhere: key commitment, a value that binds decryption to the exact key material used at encryption, so an attacker cannot downgrade you to a weaker algorithm at decrypt time. Formats drift; commitment keeps the drift honest.",
            "Caching is where the operational trade lives. Unwrapping per request adds latency and cost; caching plaintext DEKs in memory — AWS documents this as data-key caching, with TTL and byte-budget controls — makes steady-state traffic cheap. The cost is honest: a cached plaintext key exists outside KMS, so bound its lifetime, bound how much data it can touch, evict on schedule, and monitor KMS call volume for code paths that quietly skipped the envelope. Every cache is a small, deliberate relaxation of the model.",
          ],
        },
        {
          heading: "Crypto-shredding and when to skip it",
          paragraphs: [
            "Destroy one DEK and its dataset becomes permanently unreadable while everything else keeps working — that is crypto-shredding, the surgical version of Chapter 9's kill switch. Per-tenant DEKs turn right-to-erasure requests into key operations, and regulated-retention scenarios into policy questions instead of storage raids. The pattern is the strongest argument for per-dataset keys rather than one long-lived DEK of convenience. One key for everything means one leak for everything; DEK-per-dataset discipline is what bounds every blast radius in this chapter.",
            "Know when the pattern is overkill. Small datasets already covered by platform encryption — S3 SSE-KMS on the bucket, disk encryption on the volume — gain little from application-side envelopes and pay in complexity: DEK storage, format versioning, wrapped-key rotation, SDK choice. The platform path is one checkbox and an audit story; the envelope is a subsystem with owners. Take it when you need tenant isolation, crypto-shredding, or KMS costs that would dominate — otherwise spend the complexity budget where the threat model actually points.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "One write through the envelope",
        caption:
          "Fast crypto stays local; only the small key ever meets the master key.",
        stages: [
          { label: "Generate DEK locally", note: "256 bits from the CSPRNG" },
          { label: "AES-GCM the data", note: "DEK never leaves the process" },
          { label: "KMS wraps the DEK", note: "KEK, IAM-checked call" },
          { label: "Store the envelope", note: "ciphertext + wrapped key" },
          { label: "Read: unwrap, decrypt", note: "one KMS call per TTL" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "The DEK does the heavy lifting locally; only the small key ever meets the master key.",
        code: [
          "import { createCipheriv, createDecipheriv, randomBytes } from \"node:crypto\";",
          "import { seal, unseal } from \"./kms\";        // chapter 9's KMS helpers",
          "",
          "// WRITE: a fresh data key per dataset; bulk crypto stays local.",
          "const dek = randomBytes(32);                 // 256-bit DEK",
          "const iv = randomBytes(12);",
          "const cipher = createCipheriv(\"aes-256-gcm\", dek, iv);",
          "const ciphertext = Buffer.concat([cipher.update(payload), cipher.final()]);",
          "const wrapped = await seal(dek);             // KMS wraps the small key",
          "await store.save(id, { iv, ciphertext, wrapped });",
          "",
          "// READ: one IAM-checked unwrap, then local decryption at speed.",
          "const dk = await unseal(wrapped);",
          "const decipher = createDecipheriv(\"aes-256-gcm\", dk, iv);",
          "const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Calling KMS Encrypt for every field of every row.",
          fix: "KMS wraps keys, not payloads — size limits, per-call cost, round-trip latency. Generate a DEK locally and wrap that once.",
        },
        {
          mistake:
            "Storing the plaintext DEK beside the ciphertext it protects.",
          fix: "Wrapped or not at all. A plaintext key next to its data is encryption with the key taped to the box.",
        },
        {
          mistake: "Reusing one DEK across every dataset for convenience.",
          fix: "Per-dataset or per-tenant DEKs bound blast radius and enable crypto-shredding. A forever-DEK recreates the one-key problem.",
        },
        {
          mistake: "Caching plaintext DEKs with no TTL or byte budget.",
          fix: "Caching trades latency for exposure. Bound lifetime and volume, evict on schedule, and monitor for paths that skipped the envelope.",
        },
      ],
      fieldChecklist: [
        "Bulk data is encrypted locally with per-dataset DEKs; KMS sees only key-wrapping calls.",
        "The envelope format is versioned and documented: version, IV, tag, ciphertext, wrapped DEK.",
        "No plaintext DEK ever sits beside the ciphertext it protects.",
        "DEK caching has explicit TTL and byte limits, and the trade-off is written down.",
        "I can explain crypto-shredding for our data: which key is destroyed, and what becomes unreadable.",
        "KMS call volume is monitored — spikes reveal code paths that skipped the envelope.",
      ],
      keyTerms: [
        {
          term: "DEK",
          definition:
            "Data encryption key — the per-dataset AES key that encrypts bulk data locally and is stored wrapped.",
        },
        {
          term: "KEK",
          definition:
            "Key-encryption key — the KMS-held master key that wraps DEKs; it never leaves the service.",
        },
        {
          term: "Key wrapping",
          definition:
            "Encrypting one key with another — how the DEK travels safely beside the ciphertext it protects.",
        },
        {
          term: "Crypto-shredding",
          definition:
            "Destroying a DEK so its dataset becomes permanently unreadable without touching anything else.",
        },
        {
          term: "Key commitment",
          definition:
            "A decrypt-time binding to the exact key used at encryption, blocking algorithm-downgrade attacks.",
        },
      ],
      interviewQuestions: [
        {
          q: "Explain envelope encryption and why it exists.",
          a: "Two problems, one pattern. Bulk data needs fast local AES-GCM, while master keys need to stay non-exportable and audited inside KMS. So: generate a data encryption key locally, encrypt the data with it, ask KMS to wrap only that small key under the master key, and store ciphertext plus wrapped DEK together. Reading costs one IAM-checked unwrap plus local decryption. You get platform speed, a master key that never moves, per-dataset blast radius, and an audit trail of who unwrapped what.",
        },
        {
          q: "How would you make one tenant's data unreadable without touching anything else?",
          a: "Crypto-shredding with per-tenant DEKs. Each tenant's data is encrypted under its own data key, wrapped by the KMS master; erasure becomes a key operation — delete or revoke that tenant's DEK and the ciphertext is permanently dead while every other tenant keeps working. The implementation details that matter: no cached copies of the destroyed key, deletion audited and dual-controlled, and backups included, since a backup holding the wrapped DEK can resurrect the data.",
        },
        {
          q: "What belongs in the stored envelope record, and why does the format matter?",
          a: "A version byte, the ciphertext, the IV, the authentication tag, and the wrapped DEK — documented in the repository like an API. The format outlives refactors, and its properties carry security weight: the version enables migration, the tag makes tampering fail loudly, and key commitment — the AWS Encryption SDK's approach — binds decryption to the original key material so downgrade attacks fail. Formats without owners drift; when drift meets cryptography, the failure is silent.",
        },
      ],
      quiz: [
        {
          question:
            "Why wrap the DEK instead of storing it plainly beside the ciphertext?",
          options: [
            "So the stored artifact cannot decrypt itself — the key needs KMS and permission",
            "Wrapped keys compress better",
            "Wrapping makes AES-GCM faster",
            "It avoids needing an IV",
          ],
          answerIndex: 0,
          explanation:
            "A plaintext DEK beside its data is the key taped to the box. Wrapping under the KEK means decryption requires a permission-checked, audited KMS call — separation of powers again.",
        },
        {
          question:
            "Your service makes 40,000 KMS Decrypt calls per minute during peak. What does that suggest?",
          options: [
            "KMS is misconfigured and needs a bigger quota only",
            "Bulk data is likely being decrypted through KMS instead of local DEKs — check for a skipped envelope",
            "The IAM policies are too strict",
            "Wrap and unwrap calls are being double-counted",
          ],
          answerIndex: 1,
          explanation:
            "Envelope encryption keeps KMS traffic proportional to key operations, not bytes. Call volume scaling with traffic is the classic symptom of a code path decrypting payloads through the API.",
        },
        {
          question: "What does key commitment defend against?",
          options: [
            "Nonces repeating under the same key",
            "DEK caches growing unbounded",
            "Attackers downgrading the decryption to a weaker algorithm or key",
            "Wrapped keys being read by admins",
          ],
          answerIndex: 2,
          explanation:
            "Without commitment, a decrypt routine may accept whatever key material it is handed — including weakened or substituted keys. Commitment binds the operation to the exact original key, failing otherwise.",
        },
      ],
    },
    {
      number: 12,
      title: "Hashing vs. Encoding vs. Encryption",
      summary:
        "Base64 is not encryption. MD5 is not a password hasher. This one table prevents an entire genre of security theater.",
      keyIdea: "Encoding = reversible, no key, for transport. Hashing = one-way, for integrity. Encryption = reversible only with key, for confidentiality.",
      deepDive: [
        {
          heading: "Three words, three contracts",
          paragraphs: [
            "Encoding — Base64, hex, URL-encoding — is reversible with no key, and exists to move bytes through media that mangle them: JSON bodies, headers, URLs. Anyone reverses it; it has never been protection. Hashing — SHA-256, BLAKE3 — is one-way: a fixed-size digest you verify against, never recover from. Encryption — AES-GCM — is reversible with the key only, and exists for confidentiality. Three transforms, three contracts: transport, integrity, secrecy. The failures begin when the words get swapped in a design doc.",
            "The failure genre is recognizable on sight: 'we encrypted the token with Base64'; 'the reset token is the MD5 of the email'; 'the API key is stored encrypted' — the diff shows atob. Each transform looks cryptic, so it feels safe, and none of them provides the property being claimed. The test that sorts everything: name the key. If there is no secret input, it is not encryption. If reversal is possible at all, it is not hashing. If the key is public or predictable, the secrecy claim is theater.",
          ],
        },
        {
          heading: "Where each one belongs",
          paragraphs: [
            "Encoding belongs to transport: JWTs are base64url segments — the dots are encoding; the signature inside is where the security lives. Data URLs, multipart bodies, protobuf-in-JSON — all encoding. Hashing belongs to identity and integrity: package checksums (npm integrity fields, Docker digests), content-addressed storage like Git, and password verification — the slow branch from Chapter 4. HMAC deserves its own line: a hash with a key, proving integrity and origin together — signed webhooks, signed cookies. Bare hashes authenticate nothing.",
            "Encryption belongs wherever readers must be excluded: PII columns, tokens at rest, backups, session data on disk — plus everything in transit via TLS. The classic confusion is the JWT again: 'it is signed, so it is private' — no. Signatures prove origin and integrity; the claims remain base64url-readable by anyone holding the token. Encrypted JWTs exist — JWE — but are rare in practice; the default posture treats token payloads as public and keeps sensitive claims server-side.",
          ],
        },
        {
          heading: "The review habit that catches it",
          paragraphs: [
            "Three questions per transform in review: what is the goal — transport, integrity, or confidentiality? Where is the key, if any exists? Can the result be reversed without secrets, and is that acceptable for this data? A leaked dump then predicts itself: encoded data reads immediately, hashed data with slow parameters resists, encrypted data without keys is dead weight. The questions take thirty seconds and prevent an entire genre of postmortems that begin with 'we thought it was encrypted'.",
            "Automate the vigilance. Search the codebase in CI for base64, atob, btoa near words like token, password, secret; for MD5 and SHA-1 in password-adjacent paths; and ban the word 'encrypted' for anything lacking a key in docs and pull requests. When the genre appears anyway — and it will, usually from a well-meaning performance note about string sizes — the fix is a migration plan plus a blameless note, because the next engineer is one forum answer away from repeating it.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "What does this transform do?",
        caption: "The key question sorts every transform in one sentence.",
        start: "I need to transform data",
        branches: [
          {
            label: "Move it through a text format",
            outcome: "Encoding: reversible, keyless",
            good: true,
          },
          {
            label: "Prove it was not altered",
            outcome: "Hash or HMAC: one-way",
            good: true,
          },
          {
            label: "Hide it from readers",
            outcome: "Encryption: reversible with key",
            good: true,
          },
          {
            label: "Look secure without a key",
            outcome: "Security theater. Name the key.",
            good: false,
          },
        ],
      },
      pitfalls: [
        {
          mistake:
            "Writing 'we encrypt it with Base64' in a design doc or pull request.",
          fix: "Base64 is transport encoding with no key. Call it encoding, and pick a real scheme if secrecy is the goal.",
        },
        {
          mistake: "Treating signed JWTs as private because they look scrambled.",
          fix: "JWT claims are base64url-encoded and readable by anyone with the token. Keep sensitive claims server-side or use JWE.",
        },
        {
          mistake:
            "Hashing low-entropy tokens with plain SHA-256 and storing them at rest.",
          fix: "Fast hashes brute-force instantly against small inputs. Encrypt such tokens, or hash them salted and slow like passwords.",
        },
        {
          mistake: "Keeping MD5 'because the legacy integration needs it'.",
          fix: "Fence it: MD5 for that one non-adversarial checksum, documented; SHA-256 and HMAC everywhere new.",
        },
      ],
      fieldChecklist: [
        "I can define encoding, hashing and encryption in one sentence each, from memory.",
        "Every 'encrypted' claim in our docs survives the key question: name the secret input.",
        "JWTs we issue are treated as readable: sensitive claims live server-side or in JWE.",
        "CI greps for base64, MD5 and SHA-1 near token and password handling without an approved exception.",
        "Webhooks and signed cookies use keyed HMAC, never bare hashes.",
        "Code review asks the three questions: goal, key location, reversibility.",
      ],
      keyTerms: [
        {
          term: "Encoding",
          definition:
            "Reversible byte-to-text transform (Base64, hex) with no key — for transport, never for protection.",
        },
        {
          term: "HMAC",
          definition:
            "Hash-based message authentication code — a keyed hash proving integrity and origin together.",
        },
        {
          term: "Digest",
          definition:
            "The fixed-size output of a hash function; equal digests prove identical input without revealing it.",
        },
        {
          term: "JWE",
          definition:
            "JSON Web Encryption — the encrypted member of the JWT family; rare, because most systems sign without encrypting claims.",
        },
      ],
      interviewQuestions: [
        {
          q: "A teammate says the password column is 'encrypted with Base64'. What do you say?",
          a: "First the correction, kindly: Base64 is encoding — reversible with no key, so calling it encryption is the genre confusion this chapter exists to kill. Then the test: name the key. There is none, so anyone with the dump has every password. Then the plan: hash with Argon2id or bcrypt going forward, rehash-on-login to migrate the fleet, and treat the migration like Chapter 5 describes — no big bang, no forced resets, just verification accepting both formats until the tail is gone.",
        },
        {
          q: "Is a JWT encrypted? What can an attacker do with a stolen one?",
          a: "No — a JWT is signed, not encrypted: header and claims are base64url segments anyone can decode, the signature proves only who issued them and that they were not altered. A stolen token can be read fully and replayed until expiry, subject to server-side revocation if you built it. Defenses: short lifetimes, audience and issuer checks, refresh-token rotation, and keeping genuinely sensitive claims server-side — or using JWE when claims must travel encrypted, which is rare by design.",
        },
        {
          q: "When would you choose HMAC over encryption?",
          a: "When the goal is authenticity and integrity rather than secrecy: webhook signatures so receivers verify the sender, signed cookies, signed URLs for time-limited access. HMAC gives a keyed, fast, standard proof of origin and integrity without the key management burden of encryption schemes. The boundary is sharp: anything whose disclosure itself causes damage needs encryption — AES-GCM — not an HMAC. The recurring mistake is HMAC over a secret value whose secrecy also matters; low-entropy inputs need slow, salted handling instead.",
        },
      ],
      quiz: [
        {
          question: "Which statement about Base64 is true?",
          options: [
            "It is a reversible encoding with no key, intended for transport",
            "It is a lightweight encryption scheme suitable for secrets",
            "It is a one-way hash with collision resistance",
            "It provides integrity through checksums",
          ],
          answerIndex: 0,
          explanation:
            "Base64 maps bytes to text reversibly with no secret input. Its security value is zero by definition — that is why 'encrypted with Base64' is the canonical security-theater sentence.",
        },
        {
          question:
            "A webhook receiver verifies payload integrity and sender authenticity. What belongs in the design?",
          options: [
            "A bare SHA-256 digest of the body",
            "Base64 encoding of the body",
            "HMAC with a shared signing secret over the body and timestamp",
            "AES-256 encryption of the body with a published key",
          ],
          answerIndex: 2,
          explanation:
            "Integrity plus authenticity is the keyed case: HMAC. A bare hash can be recomputed by anyone, and encryption with a published key protects nothing — the secret input is the point.",
        },
        {
          question: "Why is 'signed JWT' not the same as 'private JWT'?",
          options: [
            "Signatures and encryption are unrelated operations",
            "Signing proves origin and integrity while the claims remain readable to anyone holding the token",
            "JWT signatures are stripped by proxies in transit",
            "Encrypted JWTs are invalid per the specification",
          ],
          answerIndex: 1,
          explanation:
            "The signature covers the encoded claims; it does not conceal them. Anyone with the token decodes the payload — JWE is the variant that actually encrypts, and it is rare in practice.",
        },
      ],
    },
    {
      number: 13,
      title: "Asymmetric Algorithms (RSA, Ed25519/ECC) & Digital Signatures",
      summary:
        "A signature is the asymmetric answer to 'who really sent this?' — and the algorithm choice is simpler than the internet argues about.",
      keyIdea: "Ed25519 for new designs, ECDSA P-256 where the ecosystem requires it, RSA-2048+ for legacy compatibility.",
      deepDive: [
        {
          heading: "What a signature proves, exactly",
          paragraphs: [
            "Sign with the private key; anyone holding the public key verifies. Three properties arrive with every valid signature: authenticity — only the key holder could have produced it; integrity — any altered byte breaks verification; and non-repudiation — the signer cannot plausibly deny it, which is what auditors and courts care about. Releases signed with cosign and Sigstore, JWTs, TLS handshakes, driver updates, signed commits — the machine world runs on this one contract.",
            "The boundaries matter as much as the guarantees. A signature proves possession of the key over those bytes — not that the holder intended it at that moment, not that the key was uncompromised, and nothing about freshness: a captured signature replays forever unless the protocol adds timestamps and scopes. Identity is not in the signature either; a certificate or a transparency log binds key to name. And verification must be strict — accepting the algorithm from the header unvalidated is how the JWT alg-none catastrophe happened.",
          ],
        },
        {
          heading: "Choosing the algorithm in 2026",
          paragraphs: [
            "ed25519 is the default for new designs: 32-byte keys, 64-byte signatures, fast operations, and deterministic signing — no per-signature randomness to misuse, which is precisely the failure ECDSA carries. ECDSA P-256 — ES256 in JWT terms — owns the FIPS and HSM world and most existing ecosystems; its compact keys are lovely, but every signature needs fresh, high-quality nonce randomness, and reuse or bias leaks the private key algebraically — the 2013 Android Bitcoin wallet drain was exactly that.",
            "RSA is the compatibility choice: supported everywhere, 2048 bits minimum and 3072 preferred, large signatures, and PSS padding for new signing while PKCS#1 v1.5 survives only as legacy. Post-quantum is no longer hypothetical: NIST standardized ML-DSA as FIPS 204 in 2024, and hybrid classical-plus-PQ schemes are appearing in 2026 stacks. The posture is calm: no quantum machine threatens today's keys, migration paths exist, and the algorithm you choose this year should be one with a documented exit.",
          ],
        },
        {
          heading: "Operating signatures in production",
          paragraphs: [
            "Signing keys are reputational: a leaked release key means attackers can ship malware with your signature on it. Chapter 7's custody ladder applies doubly — KMS asymmetric keys and Vault transit keep the private half non-exportable, and the application sends a digest and receives a signature. Rotation needs published trust: a key list clients verify against, or a transparency log — Sigstore's Rekor model — that makes key provenance auditable instead of tribal.",
            "Verification is code, and code needs pinning: enforce the allowed algorithm server-side, reject none and header-chosen algorithms, check key IDs against the trusted set, and make verification failure fail the request — a surprising number of integrations log and continue. Negative tests carry equal weight with happy paths: tampered payloads, wrong keys, wrong algorithms, expired scopes. The signature is the contract; the verifier is the part everyone forgets to test.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Picking a signing algorithm",
        caption:
          "Algorithm choice is mostly a compatibility decision — default modern, match the constraint.",
        left: {
          heading: "Modern default",
          items: [
            "ed25519: small, fast, deterministic",
            "No nonce randomness to misuse",
            "SSH, EdDSA JWTs, Sigstore, age",
            "The pick for every new design",
          ],
        },
        right: {
          heading: "Constrained picks",
          items: [
            "ECDSA P-256: FIPS and HSM world",
            "Nonce reuse leaks the private key",
            "RSA-3072 + PSS: universal legacy",
            "Choose only when ecosystems demand",
          ],
        },
      },
      pitfalls: [
        {
          mistake: "Letting the JWT header choose the verification algorithm.",
          fix: "Pin accepted algorithms server-side and reject none. The alg-none and RS256-to-HS256 confusions were header-trust bugs.",
        },
        {
          mistake:
            "Generating ECDSA signatures with reused or weakly random nonces.",
          fix: "Nonce reuse exposes the private key algebraically. Prefer deterministic ed25519, or RFC 6979-style deterministic ECDSA.",
        },
        {
          mistake: "Signing with RSA PKCS#1 v1.5 because the library defaults to it.",
          fix: "v1.5 padding carries known hazards. Use PSS for new signing; treat v1.5 as a compatibility constraint, not a choice.",
        },
        {
          mistake:
            "Treating a valid signature as proof of sender intent and freshness.",
          fix: "Signatures prove key possession over bytes. Bind keys to identity via certificates, and handle replay and freshness separately.",
        },
      ],
      fieldChecklist: [
        "New signing features use ed25519, or ES256 where FIPS or HSM constraints apply.",
        "Verification pins accepted algorithms server-side and rejects none and header-chosen values.",
        "Signing keys are non-exportable — KMS asymmetric keys or Vault transit — with rotation on schedule.",
        "Negative tests cover tampered payloads, wrong keys and wrong algorithms.",
        "Anything externally verified has a published key list or transparency mechanism.",
        "I can state what a signature does and does not prove, and the team doc says the same.",
      ],
      keyTerms: [
        {
          term: "Digital signature",
          definition:
            "Asymmetric proof — sign with the private key, verify with the public — delivering authenticity, integrity and non-repudiation.",
        },
        {
          term: "EdDSA (ed25519)",
          definition:
            "Deterministic elliptic-curve signatures: small, fast, no per-signature randomness to misuse.",
        },
        {
          term: "ECDSA",
          definition:
            "Elliptic-curve DSA on curves like P-256; compact but dependent on fresh, high-quality nonces per signature.",
        },
        {
          term: "RSASSA-PSS",
          definition:
            "The recommended RSA signature padding; PKCS#1 v1.5 persists only for legacy interoperability.",
        },
        {
          term: "Non-repudiation",
          definition:
            "The property that a verified signature is attributable to the key holder in a way records can demonstrate.",
        },
      ],
      interviewQuestions: [
        {
          q: "RSA, ECDSA or ed25519 for a new signing feature — walk me through the choice.",
          a: "Default ed25519: small keys and signatures, fast, deterministic signing that removes the nonce-misuse failure class. If the environment is FIPS-constrained or the key must live in an HSM that only offers P-256, ECDSA ES256 is the correct constrained pick — with RFC 6979 deterministic nonces if the library supports them. RSA-3072 with PSS padding is for interop with systems that speak nothing else. The decision is compatibility-driven, not fashion-driven; all three are sound at proper key sizes.",
        },
        {
          q: "What does a digital signature actually guarantee — and what does it not?",
          a: "It guarantees three things: only the key holder could have produced it, the bytes are unaltered, and the signer is attributable in an auditable way. It does not guarantee intent, key health, or freshness — stolen keys sign freely, and captured signatures replay unless the protocol scopes them. That gap is why infrastructure exists around signatures: certificates bind keys to identities, transparency logs make key usage auditable, and timestamps and scopes handle freshness. The signature is one clause of the contract, not the whole document.",
        },
        {
          q: "How do you harden JWT verification?",
          a: "Pin the algorithm server-side — EdDSA or ES256 — and reject none and any algorithm the header claims; the historic breaks were header-trust bugs. Validate against a trusted key set with key IDs, not against whatever key arrives. Check issuer, audience, expiry and not-before on every request, and make failure fail: no log-and-continue paths. Then negative tests — tampered payloads, swapped algorithms, wrong audiences, expired tokens — because the happy path is the only path attackers will never take.",
        },
      ],
      quiz: [
        {
          question: "Why did nonce reuse break the 2013 Android Bitcoin wallet?",
          options: [
            "ECDSA signatures with repeated nonces leak the private key algebraically",
            "The wallet used RSA keys that were too small",
            "Bitcoin's protocol mandated MD5 signatures",
            "The wallets stored keys in plaintext",
          ],
          answerIndex: 0,
          explanation:
            "ECDSA's security depends on fresh, unpredictable nonces per signature; reuse or bias lets attackers solve for the private key from known signatures. Deterministic schemes like ed25519 remove the hazard.",
        },
        {
          question:
            "A verifier accepts whatever algorithm the token header declares. What is the correct fix?",
          options: [
            "Increase the signature size",
            "Rotate the signing key more often",
            "Pin the allowed algorithms server-side and reject everything else, including none",
            "Switch from JWTs to opaque tokens entirely",
          ],
          answerIndex: 2,
          explanation:
            "The alg-none and RS256-to-HS256 breaks were verifier bugs, not cryptography failures: the header is attacker-controlled input. Verification must enforce a server-side allowlist.",
        },
        {
          question: "Which is NOT something a valid signature proves?",
          options: [
            "The signer held the private key",
            "The bytes are unaltered since signing",
            "The signer is the key holder named by the certificate",
            "The signer intended this action at this moment",
          ],
          answerIndex: 3,
          explanation:
            "Possession, integrity and attribution to the certified key holder are covered. Intent and timing are not — stolen keys sign freely, which is why custody, freshness and scope live outside the signature.",
        },
      ],
    },
    {
      number: 14,
      title: "Certificate Rotation & mTLS (Mutual TLS)",
      summary:
        "Two habits finish the book: rotate everything on a schedule so no key is load-bearing forever, and make machines authenticate like people do.",
      keyIdea: "Overlap (issue new before killing old), automation (ACME, KMS rotation), rehearsal (rotate quarterly). mTLS binds identity to a short-lived certificate.",
      deepDive: [
        {
          heading: "Nothing is load-bearing forever",
          paragraphs: [
            "The closing discipline of the book: no key or certificate is permanent, because permanence is where compromise compounds. Rotation gives every secret a shelf life — a leaked credential matters for weeks, not for the rest of the company's history. The working cadence: TLS certificates already live short through ACME; KMS master keys rotate annually; signing keys on schedule and on incident; SSH keys per role change; API credentials on ninety-day clocks or, better, dynamic. The enabler for all of it is overlap: issue the new before killing the old, run both, verify, then retire.",
            "In 2026 much of this runs itself when you let it: cert-manager renews ingress certificates; service meshes issue workload identities with hours-long lifetimes; Vault issues database credentials that expire on their own. The habit that remains human is the rehearsal: quarterly, rotate one real credential end to end — issue, deploy with overlap, verify, revoke the old. The credential nobody has rotated in three years is also the one nobody remembers how to replace, and that combination is how rotation day becomes an outage.",
          ],
        },
        {
          heading: "mTLS: machines authenticate like people",
          paragraphs: [
            "Standard TLS authenticates one direction: the client verifies the server, and the server accepts whoever arrives. mTLS closes that gap — both sides present certificates and verify each other — and inside the perimeter it converts 'any workload that can reach the port' into 'only workloads holding a valid identity'. Service meshes make it ambient: Istio and Linkerd issue short-lived SPIFFE certificates, rotate them automatically, and enforce identity on every connection without touching application code.",
            "The payoff is a stack, not a toggle: encryption kills plaintext internal traffic; identity makes every connection carry a name, so access logs finally say who; authorization becomes 'orders may call payments, nothing else' instead of IP allowlists; and blast radius shrinks because a compromised workload's credentials expire in hours. Zero-trust networking is mostly mTLS plus policy. Where meshes do not reach, the same pattern works at the application edge — Postgres client certificates with verify-full, Kafka mTLS listeners, nginx client verification.",
          ],
        },
        {
          heading: "The failure modes are operational",
          paragraphs: [
            "mTLS outages are boring in the best way: a certificate expired, a trust bundle did not propagate, a renewal hook died quietly. The defenses are Chapter 8's, extended: expiry and renewal-failure alerting on every identity, staged trust-bundle rollouts with health checks, and overlap windows sized to your deployment cadence — if deploys take an hour, a ninety-second overlap is theater. Client certificate distribution is Chapter 9's problem wearing a different hat: mesh sidecars, Vault agent or CSI drivers, never hand-copied keys.",
            "Rehearse revocation, not just rotation: kill a workload certificate and confirm the mesh blocks it within its window, because revocation that works on paper fails in spirit when nobody has watched it work. And write the worst-case runbook — a compromised root CA — because short-lived everything is precisely what makes that scenario survivable: identities die within hours, the bundle rotates in stages, and the fleet recovers without a rebuild. Finish as the book began: name the guarantees, automate the boring, drill until rotation is a Tuesday task.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The rotation loop",
        caption:
          "Rotation is a loop you rehearse; the first unrehearsed rotation is the incident.",
        steps: [
          { label: "Issue new", note: "before the old expires" },
          { label: "Deploy with overlap", note: "both identities valid" },
          { label: "Verify", note: "synthetic checks green" },
          { label: "Retire old", note: "revoke, then remove" },
          { label: "Drill quarterly", note: "one credential end to end" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "A one-day client certificate and a two-way verified curl: the mesh model in miniature.",
        code: [
          "# Issue a short-lived client certificate from the internal CA",
          "openssl x509 -req -in client.csr \\",
          "  -CA internal-ca.crt -CAkey internal-ca.key -CAcreateserial \\",
          "  -days 1 -out client.crt        # one-day life, on purpose",
          "",
          "# nginx requires and verifies client certificates on this listener:",
          "#   ssl_client_certificate /etc/ca/internal-ca.crt;",
          "#   ssl_verify_client on;",
          "",
          "# Prove identity in both directions from the command line",
          "curl -sv --cacert internal-ca.crt \\",
          "  --cert client.crt --key client.key \\",
          "  https://payments.internal.example.com/health",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake:
            "Rotating by swapping the certificate and restarting every service at once.",
          fix: "Overlap: issue the new first, run both during rollout, verify, then retire. A simultaneous swap converts rotation into an outage.",
        },
        {
          mistake: "Issuing client certificates with multi-year lifetimes like API keys.",
          fix: "mTLS identity wants short lives — hours in a mesh, days at most elsewhere — with renewal automated or it becomes an outage generator.",
        },
        {
          mistake: "Enabling mTLS without ever rehearsing a rotation or revocation.",
          fix: "Quarterly drill on a real workload: issue, deploy, overlap, revoke. The drill finds the broken hook before production does.",
        },
        {
          mistake: "Copying client private keys to every node for convenience.",
          fix: "Distribute via mesh sidecars, Vault agent or CSI; generate on the host. A copied key is a leak with extra steps.",
        },
      ],
      fieldChecklist: [
        "Every key and certificate I own has a rotation schedule, an owner and a runbook.",
        "Rotation uses overlap: the new is issued and verified before the old is retired.",
        "Service-to-service traffic inside the perimeter runs mTLS with short-lived identities.",
        "Expiry and renewal-failure alerts cover certificates, keys and trust bundles.",
        "I have rotated one real credential end to end within the last quarter.",
        "Revocation is tested: a killed certificate stops working within the expected window.",
        "Trust bundle updates roll out in stages, and I verify health checks at each step.",
      ],
      keyTerms: [
        {
          term: "mTLS",
          definition:
            "Mutual TLS — client and server both present certificates and verify each other; identity on every connection.",
        },
        {
          term: "SPIFFE / SVID",
          definition:
            "The workload-identity standard and its short-lived certificates; how service meshes name every service.",
        },
        {
          term: "Overlap window",
          definition:
            "The period where old and new credentials both work — rotation's safety margin, sized to deployment cadence.",
        },
        {
          term: "Trust bundle",
          definition:
            "The set of CA certificates a component trusts; it must propagate as carefully and observably as code.",
        },
        {
          term: "Dynamic secrets",
          definition:
            "Credentials issued on demand with built-in expiry — Vault database credentials, mesh workload certificates.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you rotate certificates with zero downtime?",
          a: "Overlap plus automation plus rehearsal. Issue the new certificate while the old is still valid, deploy it across the fleet with both trusted during the window, verify with synthetic checks, and only then retire the old — revoking it last. The automation (ACME, cert-manager, mesh identity) makes the cadence boring, and the alerting watches the renewal pipeline itself, not just expiry. The rehearsal matters most: quarterly, rotate one real credential end to end, so the first unrehearsed rotation is never the production one.",
        },
        {
          q: "What does mTLS buy that network ACLs do not?",
          a: "Identity instead of location. An ACL says 'this subnet may reach this port' — compromise anything inside and the ACL vouches for you. mTLS says 'this workload, holding this short-lived certificate, may call that workload' — so authorization follows identity, logs name the caller, and stolen credentials expire within hours. It also travels with the workload: policies survive rescheduling and scaling that invalidate IP-based rules. Zero-trust networking is essentially mTLS for identity plus policy for intent, and both are auditable.",
        },
        {
          q: "Your root CA is compromised. Why does the architecture survive it?",
          a: "Because everything downstream is short-lived. Workload certificates expire within hours, so the compromised trust window is bounded by design; staged trust-bundle rotation rolls out a replacement root with health checks; revocation lists clear the remaining window; and services rebootstrap as new identities are issued. The runbook exists because we rehearsed a lesser version — a single revoked workload cert — quarterly. Long-lived certificates would turn the same event into a fleet-wide rebuild; short-lived everything turns it into a bad afternoon.",
        },
      ],
      quiz: [
        {
          question:
            "What makes zero-downtime certificate rotation work in practice?",
          options: [
            "Overlap: the new credential is issued and verified before the old is retired",
            "Rotating during the lowest-traffic minute of the night",
            "Restarting all services simultaneously after swapping files",
            "Disabling verification during the rotation window",
          ],
          answerIndex: 0,
          explanation:
            "The overlap window is the safety margin: both credentials valid while rollout and verification happen. Simultaneous swaps and disabled verification convert maintenance into incidents.",
        },
        {
          question:
            "A compromised pod is making calls it should not. How does mTLS limit the damage?",
          options: [
            "It blocks all traffic from the pod's IP permanently",
            "Its workload identity is short-lived and policy-scoped, so credentials expire and revocation applies",
            "It encrypts the pod's memory",
            "It automatically patches the pod's software",
          ],
          answerIndex: 1,
          explanation:
            "mTLS binds identity to short-lived certificates: the stolen credential dies within its validity window, and revocation plus policy scoping shrink what it could do meanwhile.",
        },
        {
          question:
            "Your team enables mTLS and a week later services fail with certificate errors. Most likely cause?",
          options: [
            "The certificates are too strong for the hardware",
            "mTLS is incompatible with HTTP/2",
            "A trust bundle or renewal pipeline failed quietly — an operational failure, not a crypto one",
            "The certificates expired by design with no recovery possible",
          ],
          answerIndex: 2,
          explanation:
            "mTLS failures are operational: bundles that did not propagate, hooks that stopped firing, expiries nobody watched. The defenses are alerting, staged rollouts and rehearsed rotation.",
        },
      ],
    },
  ],
};
