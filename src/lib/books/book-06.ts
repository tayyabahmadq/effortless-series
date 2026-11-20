/**
 * Book 06 — Master Networking.
 * Expanded from the seed data in books-data.ts; format follows _reference.ts.
 */
import type { Book } from "../types";

export const book06: Book = {
  id: "book-06",
  number: 6,
  title: "Master Networking",
  subtitle: "Book 06 of 13 · The Effortless Series",
  tagline:
    "The wire, demystified: DNS, IPs, TCP and UDP, HTTP through HTTP/3, ports, reverse proxies and nginx, WebSockets, latency budgets, firewalls, load balancing, VPCs and subnets, and the operational reality of loss, retries and draining.",
  description:
    "Everything you ship is packets. Everything that 'randomly fails' is usually one of those packets being slow, lost or refused. This book converts networking from mystery into diagnosis.",
  layer: "Move the bytes",
  layerQuestion: "How does a request actually travel and fail?",
  accentColor: "#38bdf8",
  emoji: "06",
  months: "Month 5",
  chapters: [
    {
      number: 1,
      title: "DNS",
      summary:
        "Before any packet flies, a name becomes a number — and that lookup is the first, and most forgettable, source of your latency.",
      keyIdea: "TTL is the contract: lower before migrations, not after. CAA record set for supply-chain hardening.",
      deepDive: [
        {
          heading: "A lookup is a chain of asks",
          paragraphs: [
            "A DNS lookup is not one question; it is a chain of them. The browser checks its own cache, then the operating system's, then hands the name to a recursive resolver — your ISP's, or a public one like 1.1.1.1 or 8.8.8.8. If the resolver has no fresh answer, it walks the hierarchy: a root nameserver points at the .com nameservers, the TLD points at your domain's authoritative nameserver, and that server finally holds the record. Every hop along the way caches what it learned.",
            "The cost shape follows directly. A cold lookup can spend several round trips walking that chain — on a 50 millisecond path, the name can cost more than the request it enables. A warm one is effectively free, because every layer caches until the TTL expires. That is why first visits feel slow and repeat visits fly, and why 'the site is slow for new users but fine for everyone inside the office' is a DNS story before it is an application story.",
          ],
        },
        {
          heading: "TTL is the contract",
          paragraphs: [
            "TTL is the contract between your zone and every cache on earth: this answer may be reused for N seconds. Stable records earn long TTLs — hours or a day — because they cost nothing and absorb resolver load. Records you plan to move earn short ones, and the timing is the whole trick: lower the TTL to 60 seconds before the migration, wait out the old value, then change the record. You cannot retract an answer the world has already cached; propagation delay equals the TTL you published yesterday.",
            "Treat the contract as approximate. Some corporate resolvers cache past the TTL, some clients pin their own resolver, and negative answers cache too — a typo'd record can haunt caches for its TTL just like a correct one. Know your record types: A and AAAA point at addresses, CNAME aliases a name, MX routes mail, TXT carries verification, NS delegates, and CAA declares which certificate authorities may issue for you. Each one is a small policy statement someone will rely on in an incident.",
          ],
        },
        {
          heading: "Breakage looks like nothing",
          paragraphs: [
            "DNS failure looks like nothing: timeouts, NXDOMAIN, or answers that differ between users. The causes are mundane — an expired registration, a deleted record, a lame delegation, a resolver outage — and the symptom is maddeningly partial, because caches disagree. Some users resolve the old IP, some the new one, some nothing at all. dig is the instrument: dig +short for the answer, dig @1.1.1.1 to interrogate a specific resolver, dig +trace to walk the full delegation chain when you need to see where the chain breaks.",
            "Operate the zone like production, because it is. Monitor resolution from several public resolvers and regions, not just your workstation. Set a CAA record naming exactly the CAs that may issue certificates for your domain — supply-chain hardening that costs one line. And treat the registrar as a root of trust: two-factor authentication and a transfer lock, because an attacker who takes your domain skips every control you built beneath it.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A DNS lookup, step by step",
        caption:
          "Every hop caches the answer, so the first visitor pays and everyone after rides free.",
        steps: [
          { label: "Browser cache", note: "checks its own TTL first" },
          { label: "OS stub resolver", note: "OS-level cache, then ask out" },
          { label: "Recursive resolver", note: "does the walking for you" },
          { label: "Root then TLD", note: "points at .com nameservers" },
          { label: "Authoritative NS", note: "the record's actual home" },
          { label: "Answer cached", note: "every hop honors the TTL" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Three dig invocations answer the questions caches, resolvers and delegation raise.",
        code: [
          "# What will caches hold, and for how long?",
          "dig +short api.example.com A",
          "dig api.example.com A +noall +answer   # the second column is the TTL",
          "",
          "# Does a public resolver disagree with yours?",
          "dig @1.1.1.1 api.example.com A +noall +answer",
          "",
          "# Walk the full delegation chain when propagation puzzles you",
          "dig +trace api.example.com",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Lowering the TTL during the migration and expecting instant propagation.",
          fix: "TTL controls caches you do not own. Drop it to 60 seconds at least one old-TTL before the switch, then change the record.",
        },
        {
          mistake: "Pointing the zone apex at a plain CNAME and breaking resolution rules.",
          fix: "Apex records sit next to SOA and NS; use A/AAAA or provider flattening (ALIAS), and keep the CNAME on subdomains.",
        },
        {
          mistake: "Verifying a DNS change only from your own machine.",
          fix: "dig the record from 1.1.1.1, 8.8.8.8 and a remote region — local caches disagree with what customers actually see.",
        },
        {
          mistake: "Treating CAA and registrar security as paperwork.",
          fix: "CAA restricts which CAs may issue for your domain; registrar lock and 2FA stop a hijack that bypasses every other control.",
        },
      ],
      fieldChecklist: [
        "I know the TTL on every record I own and why each has that value.",
        "I lower TTLs before a migration and wait out the old value before cutting over.",
        "I can run dig +trace and read the delegation chain it prints.",
        "I verify DNS changes from public resolvers in more than one region.",
        "My zone publishes a CAA record naming exactly the CAs that may issue certificates.",
        "The registrar account has 2FA and transfer lock enabled.",
      ],
      keyTerms: [
        {
          term: "TTL",
          definition:
            "The number of seconds a DNS answer may be cached; the contract between your zone and every resolver on the path.",
        },
        {
          term: "Recursive resolver",
          definition:
            "The server that walks root, TLD and authoritative nameservers on your behalf and caches what it learns.",
        },
        {
          term: "Authoritative nameserver",
          definition:
            "The nameserver that holds the actual records for a zone and gives the final answer for it.",
        },
        {
          term: "CAA record",
          definition:
            "A DNS record that declares which certificate authorities may issue certificates for the domain.",
        },
      ],
      interviewQuestions: [
        {
          q: "A deploy changed a DNS record and some users still hit the old server. Explain and fix.",
          a: "Old answers are cached, and the old TTL decides how long. I confirm the authoritative record is correct with dig, then check public resolvers to see what the world sees. The fix is waiting out the original TTL; the prevention is lowering the TTL to 60 seconds well before the cutover. Clients with pinned resolvers that over-cache are the stubborn tail — a short rollback window covers them.",
        },
        {
          q: "Where does DNS fit in a latency budget?",
          a: "First. An uncached lookup costs one round trip per delegation level — resolver, root, TLD, authoritative — so it can add 100 milliseconds or more on a high-latency path. After that it is effectively free until TTL expiry. Browsers and operating systems cache, resolvers cache, so the discipline is sane TTLs and not inflating the chain with CNAMEs that each add another lookup.",
        },
        {
          q: "Why do CAA records matter?",
          a: "They let the domain declare which CAs may issue certificates for it. That shrinks the supply chain: a mis-issued certificate from an authority you never use is rejected at issuance. I treat them like any other guardrail — set once, checked in review, and paired with registrar lock and 2FA, because whoever controls the domain controls everything above TLS.",
        },
      ],
      quiz: [
        {
          question: "Your migration plan switches DNS at noon. What must be true beforehand?",
          options: [
            "The new server must have run for 24 hours first",
            "The TTL was lowered ahead of time and the old TTL has elapsed",
            "The DNS provider must be changed too",
            "All client caches must be flushed manually",
          ],
          answerIndex: 1,
          explanation:
            "You cannot invalidate caches you do not own. Lower the TTL before the change, wait out the previously published TTL, then switch — propagation delay equals the old contract.",
        },
        {
          question:
            "Which record type restricts which certificate authorities can issue for your domain?",
          options: ["MX", "TXT", "CAA", "NS"],
          answerIndex: 2,
          explanation:
            "CAA is a policy record: it names the CAs allowed to issue certificates for the domain, hardening the TLS supply chain. TXT is verification, MX is mail routing, NS is delegation.",
        },
        {
          question:
            "Users in one region see the old IP hours after a switch; others see the new one. Most likely cause?",
          options: [
            "Resolvers still serving a cached answer past the old TTL",
            "BGP route flapping between regions",
            "The new server is misconfigured",
            "Anycast was accidentally enabled",
          ],
          answerIndex: 0,
          explanation:
            "Partial visibility after a change is the signature of caches, not routing. Each resolver holds the answer it learned; they converge only as the old TTL expires everywhere.",
        },
      ],
    },
    {
      number: 2,
      title: "IP Addresses",
      summary:
        "Every packet carries two addresses — who sent it, who receives it — and the address plan quietly decides your entire network architecture.",
      keyIdea:
        "Internal services bind to 127.0.0.1 or private interfaces. The SSRF/private-range rule is address-range literacy applied.",
      deepDive: [
        {
          heading: "Two addresses on every packet",
          paragraphs: [
            "Every IP packet carries two addresses, source and destination, and both are hierarchical: a network portion that routers forward on, and a host portion that identifies the machine. CIDR notation writes the split down — 10.1.2.0/24 means the first 24 bits are network and the remaining 8 name 256 hosts. Read a routing table this way and it stops being scary: every entry is one prefix and a next hop, nothing more.",
            "IPv4 is 32 bits — about 4.3 billion addresses — and the pool is exhausted, which is why clouds now bill for public IPv4 and why private ranges plus NAT carried the internet for two decades. IPv6 is 128 bits and then some; you will run dual-stack for years, not flip a switch. The operational habit that matters today: know which of your addresses are scarce and public, and which are free and internal.",
          ],
        },
        {
          heading: "The private and public split is architecture",
          paragraphs: [
            "The split between public and private is architecture, not trivia. RFC 1918 reserves 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16 as private space — reusable in every network on earth and never routed on the internet. Loopback, 127.0.0.0/8, never leaves the machine. Public addresses are scarce, billed and exposed; private ones are free, plentiful and trusted. Where a service binds decides which world it lives in.",
            "The rule falls out of the split: internal services bind to 127.0.0.1 or a private interface, never 0.0.0.0 on a host with a public address. Address-range literacy is also the heart of SSRF defense. When your server fetches a user-supplied URL, resolve the hostname and reject any answer in private, loopback or link-local space — especially 169.254.169.254, the cloud metadata address that hands out credentials. Same literacy, pointed at an attacker.",
          ],
        },
        {
          heading: "The address plan outlives the code",
          paragraphs: [
            "The address plan outlives every service that runs inside it. Decide the ranges per environment and per tier early — a /16 per production VPC, /24s per tier — and write the map down. Two networks that pick overlapping ranges will work perfectly alone and then fail permanently to peer or VPN; fixing it later means re-addressing live systems under traffic. Subnet size is a one-way door, so leave headroom.",
            "Inside the plan, keep code out of it. Applications should reference DNS names, never literal IPs, so re-addressing becomes a DNS change instead of a deploy. Reserve static addresses for the things that genuinely need them — the load balancer edge, NAT gateways, egress allowlists — and let everything else float. When a ticket says 'connect to 10.2.3.4', your first question is which name that address is supposed to have.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "Where an address lives",
        caption:
          "The split is not trivia — it is the trust boundary the whole architecture stands on.",
        left: {
          heading: "Public, internet-routable",
          items: [
            "Scarce, leased, billed by the cloud",
            "Belongs on load balancers and NAT gateways",
            "Every packet from it crosses the open internet",
            "Guarded by security groups and WAFs",
          ],
        },
        right: {
          heading: "Private, loopback, link-local",
          items: [
            "RFC 1918: 10/8, 172.16/12, 192.168/16",
            "Reusable everywhere; effectively free",
            "127.0.0.1 means this machine only",
            "Where app and data tiers should bind",
          ],
        },
      },
      codeExample: {
        language: "ts",
        caption:
          "Address-range literacy as code: resolve first, then refuse private and metadata answers.",
        code: [
          "// User-supplied URLs must never point into private space.",
          "import { promises as dns } from 'node:dns';",
          "",
          "function isPrivateIp(ip: string): boolean {",
          "  const [a, b] = ip.split('.').map(Number);",
          "  if (a === 10 || a === 127) return true;",
          "  if (a === 172 && b >= 16 && b <= 31) return true;",
          "  if (a === 192 && b === 168) return true;",
          "  if (a === 169 && b === 254) return true; // link-local: cloud metadata",
          "  return false;",
          "}",
          "",
          "// Resolve first, then check every answer before connecting.",
          "const answers = await dns.lookup(hostname, { all: true });",
          "if (answers.some((a) => isPrivateIp(a.address))) throw new Error('SSRF blocked');",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Binding the app to 0.0.0.0 on a box with a public IP and calling it internal.",
          fix: "Bind to 127.0.0.1 or the private interface; let the reverse proxy own the public door.",
        },
        {
          mistake: "Hardcoding IP addresses in application configuration.",
          fix: "Use DNS names. Re-addressing becomes a DNS change, not a deploy; IPs in code rot the first time a subnet moves.",
        },
        {
          mistake: "Validating SSRF by hostname string instead of resolved IPs.",
          fix: "Resolve every A/AAAA answer and check each against private, link-local and metadata ranges — attackers rebind DNS to 169.254.169.254.",
        },
        {
          mistake: "Designing the address plan after the first services exist.",
          fix: "Pick non-overlapping CIDRs per tier and region on day one; overlapping ranges permanently break peering and VPN.",
        },
      ],
      fieldChecklist: [
        "I can state which RFC 1918 ranges my company uses per environment without looking.",
        "Internal services bind to loopback or private interfaces; nothing internal listens on 0.0.0.0 of a public host.",
        "Every outbound fetch of user-supplied URLs resolves DNS and rejects private, link-local and metadata addresses.",
        "My network plan has non-overlapping CIDR blocks per tier and region, written down.",
        "Application configuration references DNS names, not literal IPs.",
        "I know which resources genuinely need static public IPs and why.",
      ],
      keyTerms: [
        {
          term: "CIDR notation",
          definition:
            "Address plus prefix length (10.0.0.0/8) that says which bits are the network and which are hosts.",
        },
        {
          term: "RFC 1918",
          definition:
            "The standard reserving 10/8, 172.16/12 and 192.168/16 as private address space that is never routed on the internet.",
        },
        {
          term: "Loopback",
          definition:
            "The 127.0.0.0/8 range, usually 127.0.0.1, that never leaves the machine — where internal services bind.",
        },
        {
          term: "SSRF",
          definition:
            "Server-side request forgery: tricking your server into fetching a URL, usually aimed at private or cloud-metadata addresses.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you prevent SSRF in a service that fetches user-supplied URLs?",
          a: "Resolve the hostname and check every returned address against private, loopback, link-local and cloud-metadata ranges before connecting — checking the hostname string is not enough, because DNS can point anywhere or rebind between check and fetch. Then follow redirects with the same validation on every hop, and keep the fetcher on a network path with egress rules so a missed case still fails loudly.",
        },
        {
          q: "Why do clouds charge for public IPv4 now?",
          a: "The pool is exhausted. IPv4 is 32 bits — about 4.3 billion addresses — and every one is allocated, so a public address is scarce inventory the provider could sell to someone else. The engineering answer is unchanged: keep public IPs only at the edge, run everything else in private space behind NAT and load balancers, and adopt IPv6 where you can.",
        },
        {
          q: "What happens when two teams pick overlapping private subnets?",
          a: "Each network works alone; the moment you try to peer or VPN them, the route tables collide — both sides claim the same range and traffic into it is ambiguous. Fixes after the fact are painful: re-IP one side under live traffic, or layer NAT to translate, which nobody enjoys operating. That is why the address plan is written down and reviewed before the first subnet exists.",
        },
      ],
      quiz: [
        {
          question: "Which range is loopback?",
          options: ["169.254.0.0/16", "127.0.0.0/8", "172.16.0.0/12", "10.0.0.0/8"],
          answerIndex: 1,
          explanation:
            "127.0.0.0/8 never leaves the host — it exists only inside your own machine. Link-local is 169.254/16, while 172.16/12 and 10/8 are private ranges that leave the host but never the open internet.",
        },
        {
          question:
            "A fetcher blocks any URL whose hostname contains 192.168. What still gets through?",
          options: [
            "Nothing — the check is complete",
            "IPv6 literals only",
            "Hostnames that resolve to private or metadata addresses",
            "Only 172.16/12 addresses",
          ],
          answerIndex: 2,
          explanation:
            "String checks miss what DNS does. The defense resolves every A/AAAA answer and rejects private, loopback, link-local and metadata ranges — on each redirect hop.",
        },
        {
          question: "What does the /24 in 10.1.2.0/24 mean?",
          options: [
            "The subnet can hold 24 hosts",
            "The first 24 addresses are reserved",
            "24 bits of checksum",
            "The first 24 bits are the network, leaving 256 host addresses",
          ],
          answerIndex: 3,
          explanation:
            "The prefix length counts network bits. A /24 leaves 8 host bits, so 256 addresses total — a few of which each cloud reserves for infrastructure.",
        },
      ],
    },
    {
      number: 3,
      title: "TCP and UDP",
      summary:
        "TCP guarantees delivery and order; UDP guarantees nothing and costs nothing. Every protocol you run is a bet on which guarantee you need.",
      keyIdea:
        "TCP trades latency and state for reliability; UDP trades guarantees for speed and statelessness; QUIC is UDP reassembled into a better TCP.",
      deepDive: [
        {
          heading: "TCP: reliability is a protocol, not a wish",
          paragraphs: [
            "TCP's promises are a protocol, not a wish. The handshake — SYN, SYN-ACK, ACK — opens the connection and costs one round trip before any data moves. From then on, sequence numbers and acknowledgments track every byte; lost segments are retransmitted; delivery is ordered and duplicate-free. Flow control stops a fast sender from drowning a slow receiver, and congestion control — slow start, a congestion window that shrinks on loss — makes TCP back off when the network is hurting.",
            "The bill comes in two currencies. Latency: every new connection pays at least one round trip, plus more for TLS, which is why connection reuse is the cheapest performance win in this book. State: both endpoints hold buffers, windows and timers, and after a close the socket lingers in TIME_WAIT for roughly a minute on Linux. And head-of-line blocking: delivery is a single ordered stream, so one lost segment stalls everything behind it until the retransmission lands.",
          ],
        },
        {
          heading: "UDP: nothing guaranteed, everything possible",
          paragraphs: [
            "UDP is IP plus ports and a checksum, nothing else. No handshake, no retransmission, no ordering, no state — one datagram in, maybe one out. That makes it the natural fit for DNS (a small question, a small answer, and 'retry' means asking again, often another server), for NTP, VoIP and games, and for anything where a late packet is worthless. The protocol costs nothing and promises nothing; you get exactly that bargain.",
            "The rope cuts both ways. If you build reliability on UDP, you inherit TCP's hardest problems yourself: retransmission, ordering, flow control and — non-optional — congestion control, because unthrottled retransmits can melt a shared link. QUIC is the proof it can be done well: a user-space transport over UDP that rebuilds ordered, reliable, encrypted streams, with loss isolated per stream instead of stalling the whole connection. When someone says QUIC, hear 'UDP reassembled into a better TCP'.",
          ],
        },
        {
          heading: "Choosing, and knowing the cost",
          paragraphs: [
            "The default is decided for you: web traffic is TCP plus TLS, or QUIC. Reach for UDP deliberately, in three cases — when a late packet is worthless (live voice and video), when the exchange is one request and one answer (DNS), or when you are prepared to own reliability yourself (QUIC, or a game protocol with its own model). Everything else is a bet that a guarantee you are not getting was never needed.",
            "The failure fingerprints differ, and that is the diagnostic skill. TCP problems surface as connect timeouts, resets and retransmissions — visible in ss, netstat and tcpdump, felt by users as jitter. UDP problems surface as silent timeouts: no connection state anywhere, because firewalls and middleboxes drop datagrams without ceremony. A service that works on the office network and dies on the corporate VPN is often a UDP path some box in the middle refuses to pass.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "The stack under your request",
        caption:
          "TCP and UDP are two choices at the same layer — the one under HTTP, above IP.",
        layers: [
          { label: "Application", note: "HTTP, DNS, gRPC" },
          { label: "Transport", note: "the TCP-or-UDP choice" },
          { label: "Internet (IP)", note: "addresses and routing" },
          { label: "Link", note: "Ethernet, Wi-Fi, fiber" },
        ],
      },
      pitfalls: [
        {
          mistake: "Blaming the application when retransmissions are eating the latency.",
          fix: "Check retransmit counters and tcpdump before profiling code — packet loss shows up as random p99 spikes no refactor fixes.",
        },
        {
          mistake: "Assuming UDP traffic passes every firewall like TCP does.",
          fix: "Many middleboxes drop or throttle UDP. If you ship QUIC, keep TCP fallback and prove both paths from real networks.",
        },
        {
          mistake: "Opening a fresh TCP connection for every request.",
          fix: "Reuse connections. Handshake plus TLS costs round trips; keep-alive and pools pay for themselves immediately.",
        },
        {
          mistake: "Building a reliability layer on UDP without congestion control.",
          fix: "Unthrottled retransmits can melt shared links. Use QUIC or copy its approach — windows and backoff are mandatory, not optional.",
        },
      ],
      fieldChecklist: [
        "I can explain the TCP handshake and why every new connection costs at least one round trip.",
        "I know which of my services speak TCP and which speak UDP, and why each picked its transport.",
        "I can read retransmission and drop counters with ss or netstat instead of guessing.",
        "Connection pools and keep-alive are on for every client that talks TCP.",
        "Anything I deploy on UDP 443 has been verified from networks I do not control.",
        "I know where TIME_WAIT shows up and why thousands of them after a burst are usually harmless.",
      ],
      keyTerms: [
        {
          term: "Three-way handshake",
          definition:
            "The SYN, SYN-ACK, ACK exchange that opens a TCP connection and costs one round trip before any data moves.",
        },
        {
          term: "Head-of-line blocking",
          definition:
            "One lost segment stalling everything queued behind it — at the transport layer in TCP, at the request layer in HTTP/1.1.",
        },
        {
          term: "Congestion control",
          definition:
            "TCP's self-throttling behavior (slow start, congestion window) that backs off when the network drops packets.",
        },
        {
          term: "QUIC",
          definition:
            "The UDP-based transport under HTTP/3 that rebuilds reliability, ordering and encryption as independent streams in user space.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does DNS use UDP?",
          a: "The classic exchange is one small query and one answer — a single round trip, with the retry being 'ask again', often another server. A TCP handshake would double the cost before the question even ships, and per-lookup state does not scale for resolvers answering the world. Note the nuance: large answers and zone transfers use TCP, and DNS-over-QUIC is emerging. UDP is the default, not the only path.",
        },
        {
          q: "When would you pick UDP for your own protocol?",
          a: "Only when late data is worthless or I am prepared to own reliability myself. Live audio and video drop frames rather than stall; telemetry and games tolerate loss. If I need guarantees, I reach for QUIC instead of hand-rolling retransmits — it gives ordering, loss recovery and encryption per stream, and my failure modes become boring again.",
        },
        {
          q: "A service shows random latency spikes every few minutes. Network or app?",
          a: "Split the signal. I look at TCP retransmits and zero-window events on the box, then tcpdump a slow sample. Retransmits or loss mean the network; a quiet wire with slow upstream response times means the app or its queue. Random spikes with loss are classic congestion or MTU problems — no amount of application profiling fixes a wire.",
        },
      ],
      quiz: [
        {
          question: "What does TCP guarantee that UDP does not?",
          options: [
            "Lower latency",
            "Encryption",
            "Delivery, order and no duplicates within the stream",
            "Faster handshakes",
          ],
          answerIndex: 2,
          explanation:
            "TCP gives ordered, reliable, duplicate-free byte streams through sequence numbers, acknowledgments and retransmission. What it sacrifices is latency, not encryption — handshakes and state are the price.",
        },
        {
          question: "QUIC is best described as…",
          options: [
            "A replacement for IP",
            "A firewall protocol",
            "TLS over TCP with extra headers",
            "UDP with reliability, ordering and encryption rebuilt in user space",
          ],
          answerIndex: 3,
          explanation:
            "QUIC runs over UDP and re-implements TCP's guarantees as independent streams, fixing transport head-of-line blocking and merging the TLS handshake into connection setup — one round trip, then data.",
        },
        {
          question: "Live audio call, one packet lost. TCP versus UDP behavior?",
          options: [
            "TCP stalls the stream until the packet is retransmitted; UDP just moves on",
            "Both retransmit silently",
            "UDP reorders packets automatically",
            "TCP drops the packet",
          ],
          answerIndex: 0,
          explanation:
            "TCP's in-order delivery is a promise: nothing after the hole is usable until it is filled. For live media the stall is worse than the loss, which is why real-time protocols choose UDP.",
        },
      ],
    },
    {
      number: 4,
      title: "HTTP and HTTPS",
      summary:
        "One protocol carries most of the internet's meaning: a method, a path, headers, maybe a body — and a status code that is a whole conversation.",
      keyIdea:
        "Headers are the metadata that make everything work. A production HTTP issue is 80 percent a header issue.",
      deepDive: [
        {
          heading: "The grammar: method, path, headers, body",
          paragraphs: [
            "HTTP is a small grammar with enormous reach: a method, a path, headers, an optional body, and a status back. The methods carry semantics that everything downstream relies on — GET is safe and cacheable, PUT and DELETE are idempotent, POST is neither, which is exactly why retries of POST need idempotency keys. Status classes form a coarse but universal conversation: 2xx worked, 3xx moved, 4xx is the caller's fault, 5xx is yours.",
            "Learn the codes that carry incident meaning. 301 versus 308: whether the method survives the redirect. 401 versus 403: unauthenticated versus unauthorized — different fixes, different pages. 429 with Retry-After: the polite refusal clients should obey. 502 and 504 are the proxy's verdicts on your backend — refused versus too slow. And resist inventing 200-OK-with-an-error-body conventions; caches, monitors and every client library key off real status codes, and a lying 200 breaks all three at once.",
          ],
        },
        {
          heading: "Headers are where production lives",
          paragraphs: [
            "In production, an HTTP issue is a header issue until proven otherwise. Caching lives in Cache-Control, ETag and Vary — get them wrong and the CDN serves yesterday's page or nothing at all. Auth lives in Authorization. Client identity lives in X-Forwarded-For and X-Forwarded-Proto, written by your proxy. Cross-origin lives in the Access-Control family. Body shape lives in Content-Type, length in Content-Length or chunked encoding. The protocol's real expressiveness is all metadata.",
            "Two header disciplines prevent whole classes of bugs. First, trust nothing inbound: a client can send any X-Forwarded-For it likes, so the edge proxy must overwrite or append, and the app must believe only the proxy. Second, know where compression happens: gzip or brotli trades CPU for bytes, belongs at the edge, and is applied to public content — compressing responses that carry secrets has a history of enabling attacks that recover them byte by byte.",
          ],
        },
        {
          heading: "HTTPS is TLS with HTTP inside",
          paragraphs: [
            "HTTPS is TLS with HTTP inside. Before the first request, a handshake runs: versions and ciphers are negotiated, the server presents a certificate chain, the client validates the name against the domain it dialed and the chain against its trusted roots, and session keys are derived. TLS 1.3 does this in one round trip; TLS 1.2 needs two. After that, the same bytes as before flow — encrypted and integrity-checked, semantics unchanged.",
            "Operations carry the rest. Certificates expire, so renewal is automated with ACME — Let's Encrypt, or Caddy where it is the default — and monitored, because an expired certificate is a full outage. Many names on one IP work through SNI. Redirect HTTP to HTTPS and add HSTS once you are confident, keep old TLS versions off, and terminate at the proxy — the next chapters make that a design decision, not a default. When debugging, curl -v and openssl s_client show the handshake line by line.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "A request, end to end",
        caption:
          "HTTP is the contract in the middle; everything before and after is transport plumbing.",
        steps: [
          { label: "Build request", note: "method, path, headers" },
          { label: "Resolve + connect", note: "DNS, TCP, TLS" },
          { label: "Server handles", note: "route, auth, logic" },
          { label: "Respond", note: "status, headers, body" },
          { label: "Client decides", note: "cache, render, retry" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Headers and redirects are where production HTTP actually lives — read them instead of guessing.",
        code: [
          "# Status line and response headers, no body noise",
          "curl -sS -o /dev/null -D - 'https://example.com'",
          "",
          "# What did the edge decide about caching?",
          "curl -sS -D - -o /dev/null 'https://example.com' | grep -i cache",
          "",
          "# Follow every redirect hop to its final URL",
          "curl -sSL -o /dev/null -w '%{url_effective}\\n' 'http://example.com'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Returning 200 OK with an error payload and hoping clients notice.",
          fix: "Status codes are the protocol. Use 4xx for caller faults, 5xx for yours — monitoring, caches and clients all key off them.",
        },
        {
          mistake: "Trusting X-Forwarded-For from any source.",
          fix: "Only your edge proxy may set it; strip inbound values and append. Otherwise client IP logic, rate limits and logs are spoofable.",
        },
        {
          mistake: "Inventing custom cache headers because Cache-Control felt limiting.",
          fix: "Cache-Control, ETag and Vary are understood by every CDN and browser. Custom headers are invisible to them.",
        },
        {
          mistake: "Letting certificates expire because renewal is manual.",
          fix: "Automate with ACME (Caddy, certbot) and alert at 30 days. An expired cert is a full outage nobody gets credit for fixing.",
        },
      ],
      fieldChecklist: [
        "I can predict the status code, caching and CORS behavior of my endpoints from the code alone.",
        "Forwarded headers are set by the proxy and stripped or appended — my app never trusts a client-supplied X-Forwarded-For.",
        "Every certificate in production auto-renews; I have watched one renew successfully.",
        "Error responses use proper status codes, with details in the body.",
        "I can read a full HTTP exchange with curl -v before debugging application code.",
        "HSTS and the http-to-https redirect are in place at the edge.",
      ],
      keyTerms: [
        {
          term: "Idempotent method",
          definition:
            "A method whose repetition has no extra effect — GET, PUT, DELETE — the property that safe retries depend on.",
        },
        {
          term: "Status code classes",
          definition:
            "1xx informational, 2xx success, 3xx redirect, 4xx caller error, 5xx server error — the coarse signal every client and monitor reads.",
        },
        {
          term: "X-Forwarded-For",
          definition:
            "The hop-by-hop header your edge proxy uses to pass the client IP inward — trustworthy only if the proxy strips inbound values.",
        },
        {
          term: "TLS handshake",
          definition:
            "The negotiation that verifies the certificate and derives session keys before any HTTP bytes flow.",
        },
      ],
      interviewQuestions: [
        {
          q: "Walk me through what happens when a browser fetches an HTTPS URL.",
          a: "DNS resolution first, then a TCP connection, then the TLS handshake — certificate chain verified against trusted roots, keys derived, TLS 1.3 doing it in one round trip. Then the HTTP request: method, path, headers. The server responds with status, headers, body. Caches are consulted at browser and CDN layers before any of this. Every step is observable — curl -w breaks the timeline apart.",
        },
        {
          q: "Why do 502 and 504 mean different things on call?",
          a: "502 bad gateway: the proxy reached for the upstream and got a refusal — process crashed, port closed, connection reset. 504 gateway timeout: the upstream accepted the work and never answered within the proxy's timeout. They route to different investigations: 502 is a crash or restart, 504 is slowness or a stuck request. I page different instincts for each.",
        },
        {
          q: "An API works in curl but fails in the browser. How do you debug it?",
          a: "Diff the requests. CORS is the usual suspect: the browser sends Origin and an OPTIONS preflight that curl never sends, and the server must answer it with the right Access-Control headers. Second suspects are cookies or Authorization headers stripped by fetch defaults, and cache variations on Vary. Reproduce the browser's exact request, then bisect the headers.",
        },
      ],
      quiz: [
        {
          question: "What is the operational difference between 401 and 403?",
          options: [
            "401 means the server crashed",
            "401: not authenticated; 403: authenticated but not allowed",
            "They are aliases",
            "403 means rate limited",
          ],
          answerIndex: 1,
          explanation:
            "401 says who are you — credentials missing or invalid; 403 says I know who you are and you may not do this. They route to completely different fixes.",
        },
        {
          question: "A proxy in front of your app returns 504. What does that tell you first?",
          options: [
            "The proxy itself crashed",
            "TLS failed",
            "The upstream accepted the request but did not answer within the proxy timeout",
            "The client sent a malformed request",
          ],
          answerIndex: 2,
          explanation:
            "504 is a timeout: the upstream was reachable but too slow. 502 would mean refusal or crash — the distinction points your investigation at latency, not liveness.",
        },
        {
          question: "Which header pair governs whether a CDN may cache a response?",
          options: [
            "Host and Port",
            "Accept and Content-Type",
            "Upgrade and Connection",
            "Cache-Control and ETag",
          ],
          answerIndex: 3,
          explanation:
            "Cache-Control states the policy (max-age, s-maxage, no-store) and ETag supports revalidation; CDNs and browsers both honor them. Host and Accept are routing and negotiation, not caching.",
        },
      ],
    },
    {
      number: 5,
      title: "Ports",
      summary:
        "The IP address finds the machine; the port finds the program. Sixty-five thousand doors per address, and the discipline is knowing which ones you opened.",
      keyIdea:
        "ss -tlnp is the audit. Security groups default-deny ingress. Every allowed port is a documented decision with an owner.",
      deepDive: [
        {
          heading: "IP finds the machine, port finds the program",
          paragraphs: [
            "The IP address finds the machine; the port finds the program. The space runs 0 to 65535, with conventions you should know cold: 0-1023 well-known (22 SSH, 53 DNS, 80 HTTP, 443 HTTPS), 1024-49151 registered, and the top of the range ephemeral — the temporary local ports the OS hands out for outbound connections, drawn from something like 32768-60999 on Linux. A connection is identified by the full four-tuple: protocol, source IP and port, destination IP and port.",
            "'Open' has two meanings, and confusing them costs hours. A port can be listening on the host — the kernel has a socket bound — and it can be reachable through the firewalls in between. Both must be true for a connection to succeed, and each is checked by a different tool. ss -tlnp answers the first question from inside the host; nc -vz or curl from another machine answers the second. When something 'is running but unreachable', you are somewhere between the two answers.",
          ],
        },
        {
          heading: "The audit discipline",
          paragraphs: [
            "The audit discipline is one command and one habit. Run ss -tlnp on every host you own: what listens, on which address, owned by which process. Anything not in the runbook gets investigated, not ignored. On the cloud side, security groups are default-deny, and every allowed rule has an owner, a reason and the narrowest source range that works — 443 from anywhere, SSH from the bastion, the database port from the app tier only.",
            "Egress deserves the same treatment: which ports and destinations may a host talk to, and why. And skip the folklore — moving an admin panel to port 8443 for safety is obscurity, not control; scanners sweep the entire range within hours of exposure. The real options are authentication, VPN, or putting the admin surface behind the reverse proxy where policy already lives. A port is a door; the lock is what you do at it, not its number.",
          ],
        },
        {
          heading: "Collisions and ephemerals",
          paragraphs: [
            "Two failure modes show up on real hosts. Collisions: two processes want port 8080 and the second bind fails with 'address already in use' — resolved by moving one, binding different interfaces, or SO_REUSEPORT when you genuinely want shared listening. Exhaustion: a host opening thousands of short-lived outbound connections can drain its ephemeral range, and new connects start failing while TIME_WAIT sockets pile up. Pool and reuse connections first; widening the range is a stopgap.",
            "In containerized environments ports map twice — container port to service port to ingress — and each hop is a chance for a silent miswire. A Service pointed at the wrong targetPort produces connections that open and immediately go nowhere, which looks like a backend bug and is a plumbing bug. Keep application ports boring and identical across environments, and document the chain once so the three numbers stop being three mysteries.",
          ],
        },
      ],
      diagram: {
        kind: "fork",
        title: "A listener you did not expect",
        caption:
          "Every open port is a decision someone made; the audit finds the decisions nobody remembers.",
        start: "ss -tlnp shows a listener",
        branches: [
          {
            label: "Documented and owned",
            outcome: "Fine — it stays in the port register.",
            good: true,
          },
          {
            label: "Bound to 0.0.0.0 by default",
            outcome: "Rebind to 127.0.0.1 or the private NIC.",
            good: true,
          },
          {
            label: "Security group rule, unused",
            outcome: "Remove it; doors age into incidents.",
            good: true,
          },
          {
            label: "Unknown binary listening",
            outcome: "Investigate before blocking or ignoring.",
            good: false,
          },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "One command lists every door on the host; a second machine proves which doors the firewalls leave open.",
        code: [
          "# Every listener, its bind address, its owner",
          "ss -tlnp",
          "",
          "# Flag anything bound to all interfaces - public by definition",
          "ss -tlnp | grep -E '0\\.0\\.0\\.0|\\[::\\]'",
          "",
          "# From another box: is the door open through the firewalls too?",
          "nc -vz -w 3 db.internal.example.com 5432",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Opening a security group port 'temporarily' for debugging.",
          fix: "Temporary rules become permanent. Open with an expiry note in the runbook, close it in the same session, or use a bastion.",
        },
        {
          mistake: "Assuming the service is up because it works from localhost.",
          fix: "Localhost proves binding, not reachability. Test from another host — the firewall is a separate layer with separate rules.",
        },
        {
          mistake: "Running admin interfaces on a non-standard public port for safety.",
          fix: "Obscurity is not a control. Put admin paths behind the proxy with auth, VPN or mTLS — scanners find every port within hours.",
        },
        {
          mistake: "Ignoring ephemeral port exhaustion on connection-heavy hosts.",
          fix: "Thousands of short-lived outbound connections can drain the local range. Pool and reuse connections; widen the range only as a stopgap.",
        },
      ],
      fieldChecklist: [
        "I can produce the listening-socket audit for any host I own and explain every line.",
        "Every ingress rule in my security groups has an owner and a reason written next to it.",
        "Internal services bind to loopback or private addresses, not 0.0.0.0.",
        "I test reachability from a second machine, never only from the host itself.",
        "Egress rules restrict which ports and CIDRs my hosts can talk to.",
        "Connection-heavy clients pool connections so they cannot exhaust ephemeral ports.",
      ],
      keyTerms: [
        {
          term: "Four-tuple",
          definition:
            "Protocol plus source IP, source port, destination IP and destination port — the identity the kernel demultiplexes packets by.",
        },
        {
          term: "Well-known ports",
          definition:
            "Ports 0-1023, reserved by convention for system services: 22 SSH, 53 DNS, 80 HTTP, 443 HTTPS.",
        },
        {
          term: "Ephemeral port",
          definition:
            "The temporary local port an OS assigns to each outbound connection, drawn from a range like 32768-60999 on Linux.",
        },
        {
          term: "Default-deny",
          definition:
            "The firewall posture that drops everything not explicitly allowed — every open door becomes a documented decision.",
        },
      ],
      interviewQuestions: [
        {
          q: "A service is running but unreachable from another host. Walk me through your diagnosis.",
          a: "Layer by layer. On the host: ss -tlnp — is it listening, and on which address? Bound to 127.0.0.1 explains everything. Then the host firewall, then the cloud security groups and NACLs, then any intermediate proxy. From the client: nc -vz tells me if the port is open through all of it. Half the time it is the bind address; the other half it is a rule that exists on one layer and not another.",
        },
        {
          q: "Why can two processes both listen on port 8080 on the same machine?",
          a: "They usually cannot — the kernel refuses the second bind with 'address already in use' unless the addresses differ (one binds 127.0.0.1:8080, the other 10.0.0.5:8080) or SO_REUSEPORT allows shared binding for load balancing and zero-downtime handoff. Also note: two listeners can share a port across different network namespaces, which is how containers seem to break the rule.",
        },
        {
          q: "What is your process for deciding a new port should open to the internet?",
          a: "First: does it need to be public at all — can the reverse proxy or a private link front it? If yes: allow only the minimum source ranges, pair the port with TLS and authentication, write the owner and reason into the runbook, and add it to a periodic audit so a rule nobody remembers gets removed instead of aging into an incident.",
        },
      ],
      quiz: [
        {
          question: "What does ss -tlnp tell you that a scan from another machine cannot?",
          options: [
            "Which kernel version is running",
            "What is listening locally and which process owns it",
            "The firewall rules",
            "The remote client IP",
          ],
          answerIndex: 1,
          explanation:
            "ss reads the local socket table: every listener, its bind address and owning process. A remote scan only proves reachability through firewalls — it cannot see inside the host.",
        },
        {
          question: "A client gets connection refused, not a timeout. What does that suggest?",
          options: [
            "Packets are being dropped by a firewall",
            "DNS is broken",
            "The host is reachable but nothing listens on that port",
            "TLS handshake failed",
          ],
          answerIndex: 2,
          explanation:
            "Refused means a RST came back: the host answered but no listener owns that port. A silent drop is a timeout and points at firewall rules instead.",
        },
        {
          question: "Why does the ephemeral port range matter in practice?",
          options: [
            "It determines which ports you may expose publicly",
            "It sets the maximum file descriptors",
            "It controls TCP window size",
            "Heavy outbound connection churn can exhaust it and break new connections",
          ],
          answerIndex: 3,
          explanation:
            "Every outbound connection takes a temporary local port from that range. Hosts making thousands of short-lived calls can drain it, and new connects start failing; pooling connections is the real fix.",
        },
      ],
    },
    {
      number: 6,
      title: "Reverse Proxy",
      summary:
        "The reverse proxy is the bouncer of your architecture: one public door, TLS termination, routing, compression, and the place where every 502 originates.",
      keyIdea:
        "App binds private/localhost; the proxy owns the public surface. 502 vs 504 are different incidents.",
      deepDive: [
        {
          heading: "One public door",
          paragraphs: [
            "The reverse proxy is one public door in front of many private rooms. The application binds to localhost or a private interface; the proxy owns ports 80 and 443 and concentrates the concerns every backend would otherwise reimplement badly: TLS termination and certificate management, the HTTP-to-HTTPS redirect, routing by host and path to different upstreams, compression, static files, size caps and rate limits. Clients see one stable hostname; behind the door, services move freely.",
            "That concentration is the product. Add a service, canary a new version, swap a database-backed endpoint for a queue — proxy configuration, no client change. It is also the single place where policy gets enforced consistently for every backend instead of driftily per service. The trade-off is focus: the proxy is now load-bearing, its config is production code, and its logs are the first place every request-shaped incident goes to be understood.",
          ],
        },
        {
          heading: "502, 504 and the headers that betray them",
          paragraphs: [
            "The proxy's own error codes are the incident's first clue. 502 Bad Gateway: the proxy reached for the upstream and was refused — the process crashed, the port closed, the connection reset. 504 Gateway Timeout: the upstream accepted the work and never answered inside proxy_read_timeout. 503 is often deliberate: maintenance or overload. Log upstream_addr and upstream_response_time in the access log and the difference stops being trivia — you get which backend and how long, per request.",
            "Header plumbing is the proxy's other job. It sets X-Forwarded-For, X-Forwarded-Proto and Host for the app to trust — and must strip or overwrite whatever the client sent, or client IP logic and rate limits become spoofable. WebSocket upgrades only work if the proxy passes the hop-by-hop Upgrade and Connection headers. Compression and cache headers are frequently decided here too, which is why 'works directly, broken through the proxy' is a bug category of its own.",
          ],
        },
        {
          heading: "Timeouts and keep-alive, both directions",
          paragraphs: [
            "Timeouts exist on both legs and they are separate knobs: client-to-proxy and proxy-to-upstream. Nothing should hang forever — set an explicit connect timeout of a few seconds and read timeouts sized to each route's real p99. Long-running endpoints (uploads, exports, WebSocket upgrades) need deliberately raised values on that location, because a 60-second default read timeout is the most common silent socket killer behind proxies.",
            "Keep-alive to the upstreams is the other half. Without it, every request pays a fresh TCP connection — and fresh TLS, if the app speaks it — to the backend; enable upstream keepalive, speak HTTP/1.1 to the upstream, and clear the Connection header so the socket survives. Add health checks, active or passive, so the proxy stops routing to dead backends and a crash becomes clean failover instead of a 502 storm. Connection counts on both sides tell you whether any of this is working.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Through the front door",
        caption:
          "One public door where TLS, routing and policy concentrate — and where 502s are born.",
        stages: [
          { label: "Terminate TLS", note: "certificates live here" },
          { label: "Route", note: "host and path rules" },
          { label: "Protect", note: "rate limits, size caps" },
          { label: "Forward upstream", note: "keep-alive to the app" },
          { label: "Respond + log", note: "compress, record upstream time" },
        ],
      },
      pitfalls: [
        {
          mistake: "Letting the app terminate TLS and bind 0.0.0.0 on a public host.",
          fix: "Proxy owns the public door: it terminates TLS, the app binds private and never faces the internet directly.",
        },
        {
          mistake: "Diagnosing 502 and 504 as the same bug.",
          fix: "502 is refusal or crash — check upstream liveness. 504 is slowness — check upstream latency and proxy_read_timeout.",
        },
        {
          mistake: "No keep-alive from proxy to upstream.",
          fix: "Every request re-pays TCP and TLS. Enable upstream keepalive with HTTP/1.1 and an empty Connection header.",
        },
        {
          mistake: "Trusting X-Forwarded-For without stripping client-supplied values.",
          fix: "The proxy sets forwarded headers from scratch or appends; everything inbound from clients is attacker-controlled.",
        },
      ],
      fieldChecklist: [
        "Every backend service binds to a private address; only the proxy has a public listener.",
        "I can name which proxy config routes each public path and to which upstream.",
        "Access logs include upstream_addr and upstream_response_time, not just total time.",
        "Client, proxy and upstream timeouts are all set explicitly — nothing can hang forever.",
        "Upstream keep-alive is enabled and connection counts make sense on both sides.",
        "WebSocket and long-running routes have their upgrade and timeout handling verified.",
      ],
      keyTerms: [
        {
          term: "TLS termination",
          definition:
            "Unwrapping TLS at the proxy so certificates and inspection live in one place; upstreams may re-encrypt if policy demands.",
        },
        {
          term: "Upstream",
          definition:
            "The backend server a proxy forwards to; its address and health are what the proxy's routing table tracks.",
        },
        {
          term: "502 vs 504",
          definition:
            "Bad gateway: upstream refused or died. Gateway timeout: upstream was too slow. Different incidents, different first moves.",
        },
        {
          term: "X-Forwarded-For",
          definition:
            "The client-IP chain your edge constructs; trustworthy only because the edge strips whatever clients sent.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why put a reverse proxy in front of your app at all?",
          a: "Concentration of cross-cutting concerns: TLS and certificates, host and path routing, compression, rate limits, size caps and consistent access logs live in one battle-tested component instead of being re-implemented in every service. It also decouples the public contract — one hostname, stable ports — from backend churn, so apps can restart, move and scale without any client ever noticing.",
        },
        {
          q: "You see a spike of 502s. What do you check, in order?",
          a: "The proxy log first: upstream_addr says which backend, upstream_response_time says how it failed. Then backend liveness — crash loop, OOM kill, a deployment race where old instances died before draining. Then connection limits — the proxy exhausting its upstream keep-alive pool or hitting worker_connections. A 502 spike during a deploy is almost always a lifecycle bug, not a networking one.",
        },
        {
          q: "How do you support a request that legitimately runs for ten minutes?",
          a: "First I challenge the design — ten minutes inside one HTTP request is fragile; a job queue with polling or callbacks usually fits better. If it must stay: raise the proxy and client read timeouts for that route only, keep idle protections off that path, and make the client tolerant of drops. The default posture stays short timeouts everywhere else.",
        },
      ],
      quiz: [
        {
          question: "Your architecture diagram says '502: something'. What split matters on call?",
          options: [
            "502 and 504 are interchangeable",
            "502 is a client error",
            "502 means upstream refused or died; 504 means it was too slow",
            "502 is always a DNS problem",
          ],
          answerIndex: 2,
          explanation:
            "The proxy distinguishes refusal (502) from timeout (504). One points at crashes and restarts, the other at latency — treating them as one bug wastes half the diagnosis.",
        },
        {
          question: "What is the main operational benefit of terminating TLS at the proxy?",
          options: [
            "It makes TLS faster",
            "Certificates, policy and routing concentrate in one place",
            "It removes the need for certificates",
            "It encrypts internal traffic by definition",
          ],
          answerIndex: 1,
          explanation:
            "Termination centralizes certificate lifecycle and lets the proxy see requests for routing and protection. Internal encryption afterwards is a separate, deliberate choice — re-encryption or mTLS.",
        },
        {
          question: "Requests through the proxy are slow but direct app calls are fast. Where do you look?",
          options: [
            "The TLS certificate chain",
            "Client DNS cache",
            "The browser cache",
            "The proxy's upstream keep-alive and timeout settings",
          ],
          answerIndex: 3,
          explanation:
            "A fresh TCP-plus-TLS connection per request, or a mismatched read timeout on one route, is the classic proxy-induced slowdown. Upstream keep-alive and explicit, per-route timeouts are the fix.",
        },
      ],
    },
    {
      number: 7,
      title: "Nginx",
      summary:
        "One config file that can be your TLS terminator, load balancer, cache, and rate limiter. Learn the directives once, reuse for a decade.",
      keyIdea:
        "Event-driven, non-blocking worker model. Structured access log includes upstream_response_time and upstream_addr.",
      deepDive: [
        {
          heading: "The worker model explains the tuning",
          paragraphs: [
            "nginx scales because it does not spend a thread per connection. A small number of worker processes — worker_processes auto, one per core — each run an event loop multiplexing thousands of sockets, bounded by worker_connections and the file descriptor limit. Memory stays flat under load; the model is the opposite of a process-per-connection server. The corollary: anything blocking inside a worker stalls every connection it serves, which is why the tuning conversation is about limits and non-blocking work, never about adding threads.",
            "Capacity is arithmetic you can do on one line: workers times connections per worker, bounded by open-file limits and real CPU. Compression and TLS handshakes are the CPU-heavy work, so their cost shows up as worker utilization, not memory. When an nginx box maxes CPU, suspect gzip and brotli on large responses, TLS churn from missing keep-alive, or a worker stuck in a retry loop against a dead upstream — not a mysterious kernel bug.",
          ],
        },
        {
          heading: "The directives that carry production",
          paragraphs: [
            "A handful of directives carry most production configs. server blocks bind host and port; location blocks route by prefix or regex — matched by specificity, not file order. proxy_pass hands work to an upstream block; proxy_set_header fixes Host and the X-Forwarded family; upstream keepalive needs proxy_http_version 1.1 and a cleared Connection header. limit_req and limit_conn do rate limiting; gzip or brotli compress; ssl_certificate and ssl_protocols own TLS.",
            "The defaults are decisions you did not make. proxy_read_timeout waits 60 seconds between upstream reads — the silent killer of WebSockets and long requests. client_max_body_size caps uploads at one megabyte and answers bigger ones with 413. Change them per route where reality differs, and treat every default as a question: what happens when a request exceeds this? Read the answer in the docs before production traffic reads it in your logs.",
          ],
        },
        {
          heading: "Logs are the diagnosis",
          paragraphs: [
            "The loop that keeps nginx sane: edit one thing, nginx -t, reload, watch the logs. nginx -t catches the syntax error before it becomes an outage; reload (not restart) spawns new workers and lets old ones drain in-flight requests; the error log and access log confirm reality. One change at a time is not ceremony — it is the difference between knowing what fixed it and having two variables.",
            "Make the logs answer the question you will ask at 3 a.m.: which upstream, how slow? Add $upstream_response_time and $upstream_addr to the access log format. With them, 'the site is slow' becomes 'upstream 10.0.3.12 has been slow since 14:02 on /api/search' — one awk pipeline away from an owner. Without them you cannot separate proxy overhead from backend slowness, which is the first question of every latency incident.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The config loop",
        caption:
          "One change, one test, one reload, one look at the logs — a loop, not a leap.",
        steps: [
          { label: "Edit config", note: "one change at a time" },
          { label: "nginx -t", note: "never reload untested" },
          { label: "Reload", note: "old workers drain" },
          { label: "Watch logs", note: "access + error, tail live" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "With upstream_response_time in the log, one pipeline answers which upstream and which route is slow.",
        code: [
          "# Log with upstream truth (nginx.conf):",
          "# log_format upstream '$remote_addr $host $uri $status'",
          "#   ' rt=$request_time urt=$upstream_response_time ua=$upstream_addr';",
          "",
          "# Which upstream is taking the traffic right now?",
          "tail -n 20000 /var/log/nginx/access.log \\",
          "  | awk '{print $7}' \\",
          "  | sort | uniq -c | sort -rn | head",
          "",
          "# Worst requests, slowest first ($3 = uri, $6 = urt)",
          "tail -n 20000 /var/log/nginx/access.log \\",
          "  | awk '{print $3, $6}' \\",
          "  | sort -k2 -rn | head",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Editing nginx.conf and running a full restart directly.",
          fix: "nginx -t first, then reload — restart kills in-flight requests; reload lets workers drain. Config in git, one change at a time.",
        },
        {
          mistake: "Leaving worker_connections and file descriptor limits at defaults.",
          fix: "Capacity is workers times connections per worker, bounded by the open-file limit. Size all three on purpose.",
        },
        {
          mistake: "Logging only $request_time.",
          fix: "Add $upstream_response_time and $upstream_addr. Without them you cannot separate proxy overhead from upstream slowness — the first question of every incident.",
        },
        {
          mistake: "Assuming location blocks match in the order written.",
          fix: "Nginx matches by longest prefix and regex rules, not file order. Test ambiguous routes with curl before shipping.",
        },
      ],
      fieldChecklist: [
        "worker_processes, worker_connections and file descriptor limits are sized together, on purpose.",
        "nginx -t runs before every reload, and reloads are used instead of restarts.",
        "The access log captures $upstream_response_time and $upstream_addr.",
        "Upstream keep-alive is configured (proxy_http_version 1.1, cleared Connection header).",
        "proxy_read_timeout and client_max_body_size are set per route where they differ from defaults.",
        "Config lives in version control and every change goes through the edit-test-reload-watch loop.",
      ],
      keyTerms: [
        {
          term: "Worker process",
          definition:
            "One of nginx's event-loop processes; capacity is roughly workers times connections per worker, all non-blocking.",
        },
        {
          term: "server block",
          definition:
            "The virtual host unit — binds an address and port, and owns the locations and upstreams beneath it.",
        },
        {
          term: "proxy_read_timeout",
          definition:
            "How long nginx waits between reads from the upstream; its 60-second default sits behind many mystery 504s.",
        },
        {
          term: "upstream_response_time",
          definition:
            "A log variable recording how long the upstream took — the field that separates proxy overhead from backend slowness.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why does nginx scale to so many connections?",
          a: "Event-driven, non-blocking workers: a handful of processes each run an event loop multiplexing thousands of sockets, so memory and context-switching cost stays roughly flat instead of growing per connection. The trade-off is that anything blocking inside a worker stalls thousands of connections at once — which is why the tuning conversation is always worker_connections, file descriptors and avoiding blocking work, never 'add threads'.",
        },
        {
          q: "Your nginx box hits 100 percent CPU. What are your suspects?",
          a: "Compression and TLS first — gzip, brotli and TLS handshakes are CPU-bound worker work; check whether large responses are being compressed per request that a cache could serve. Then rate-limit churn and logging volume. If CPU is high because upstream responses are huge, caching at the proxy fixes it. I also confirm it is nginx itself and not a worker stuck retrying a bad upstream.",
        },
        {
          q: "How do you do zero-downtime reloads of nginx config?",
          a: "nginx -t to validate, then reload — the master spawns new workers with the new config and old workers finish in-flight requests before exiting. On a fleet, roll one node, watch the error log and p99, then continue. For backend swaps, keep both upstream pools healthy during the window; never restart the master during peak unless config tests are green.",
        },
      ],
      quiz: [
        {
          question: "Why does a reload drop almost nothing while a restart drops in-flight requests?",
          options: [
            "Reload is faster, so fewer requests arrive",
            "Reload hands connections to new workers; restart kills the master and its connections",
            "Restart only reloads certificates",
            "There is no difference",
          ],
          answerIndex: 1,
          explanation:
            "Reload spawns new workers and lets old ones drain; restart tears down the master process and every socket it owns. The habit is nginx -t then reload.",
        },
        {
          question: "Which log addition best separates 'nginx is slow' from 'the app is slow'?",
          options: ["$remote_addr", "$status", "$request_time", "$upstream_response_time"],
          answerIndex: 3,
          explanation:
            "Total time minus upstream time isolates the proxy's own overhead, and pairing it with $upstream_addr names the guilty backend. Without that field, every latency incident starts as a guessing game between two suspects.",
        },
        {
          question: "A route returns 404 only for one specific URL pattern. First nginx suspect?",
          options: [
            "A more specific location block is winning the match",
            "The upstream is down",
            "worker_connections are exhausted",
            "gzip is mangling the response",
          ],
          answerIndex: 0,
          explanation:
            "Nginx picks locations by longest prefix and regex rules, not file order. Log $uri and $upstream_addr for one failing request and the winner usually explains itself.",
        },
      ],
    },
    {
      number: 8,
      title: "WebSockets",
      summary:
        "HTTP asks and answers. WebSockets leave the line open — and bring their own lifecycle, their own scaling story, and their own ways to hang.",
      keyIdea:
        "State lives in Redis/pubsub, not in the socket. Heartbeats at both ends. Client reconnects with backoff + jitter.",
      deepDive: [
        {
          heading: "It starts as HTTP",
          paragraphs: [
            "A WebSocket starts life as an ordinary HTTP request: a GET with Upgrade: websocket and Connection: Upgrade, carrying a Sec-WebSocket-Key. The server answers 101 Switching Protocols, and from that moment the same TCP connection carries WebSocket frames instead of request-response pairs. Proxies must cooperate — pass the Upgrade and Connection headers through, speak HTTP/1.1 upstream, and raise the read timeout on that route, or every socket dies at the default.",
            "After the upgrade, the HTTP world is gone. Either side may send text or binary frames whenever it likes; ping and pong control frames exist for liveness; a close handshake exists for goodbye. There are no status codes, no caching, no CORS — your application now owns a message protocol, its own framing of errors, and its own versioning. The freedom is the feature; the responsibility is the price.",
          ],
        },
        {
          heading: "State you own now",
          paragraphs: [
            "HTTP was stateless and proud of it; a socket is state you now own. Who is connected, which rooms or channels they subscribed to, when they were last heard from — that is all live instance memory until you deliberately move it. And sockets die silently: NAT gateways drop idle flows in minutes, phones lock, wifi hands off. Heartbeats at both ends are how death gets noticed in seconds instead of at the next send failure.",
            "Scaling follows from where the state lives. A socket belongs to exactly one instance, but events belong to everyone — so publish through Redis pub/sub (or an equivalent), and let every instance relay what it hears to its local sockets. Subscription state becomes fleet-visible; instances can join, leave and be redeployed without orphaning users. Sticky sessions help the initial handshake land somewhere alive, but the pub/sub layer is what makes the fleet actually stateless enough to operate.",
          ],
        },
        {
          heading: "Reconnect is the happy path",
          paragraphs: [
            "Design the reconnect as the happy path, because mobile networks guarantee you will need it. Reconnect with exponential backoff and jitter — capped, never a tight loop — resubscribe on connect, and handle the gap: sequence numbers on messages, or replay from a durable feed, so a three-second disconnect does not silently drop three seconds of events. The quality of a WebSocket product is, to first order, the quality of its reconnect.",
            "Servers owe the same courtesy. Graceful shutdown means stop accepting, tell connected clients to reconnect elsewhere, drain the sockets inside the grace period, and exit — turning deploys into a visible blip instead of a mass disconnect. Watch the socket metrics that page before users do: open connections per instance, handshake failure rate, heartbeat-driven reclaim rate. When those drift, you find out in a dashboard instead of a support channel.",
          ],
        },
      ],
      diagram: {
        kind: "flow",
        title: "The WebSocket lifecycle",
        caption:
          "The socket is state you now own: health, identity and death all need explicit handling.",
        steps: [
          { label: "Upgrade request", note: "HTTP GET + Upgrade headers" },
          { label: "101 Switching", note: "same TCP socket, new protocol" },
          { label: "Frames both ways", note: "no request/response pairs" },
          { label: "Heartbeats", note: "ping/pong detects dead peers" },
          { label: "Close or drop", note: "clean close vs dead network" },
          { label: "Reconnect + backoff", note: "with jitter, then resubscribe" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Exponential backoff with jitter turns inevitable disconnects into a routine, not an outage.",
        code: [
          "function connectWithBackoff(url: string) {",
          "  let attempt = 0;",
          "  const open = () => {",
          "    const ws = new WebSocket(url);",
          "    ws.onopen = () => { attempt = 0; resubscribe(ws); };",
          "    ws.onclose = () => {",
          "      const wait = Math.min(30_000, 2 ** attempt * 500);",
          "      const jitter = Math.random() * wait * 0.3;",
          "      attempt += 1;",
          "      setTimeout(open, wait + jitter); // reconnecting is normal life",
          "    };",
          "  };",
          "  open();",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Assuming a socket that was open this morning is still open.",
          fix: "Heartbeat at both ends and treat every send failure as reconnect. NATs and mobile networks close idle sockets within minutes.",
        },
        {
          mistake: "Holding all state in the socket handler of one instance.",
          fix: "Fan out through Redis pub/sub. Sockets are per-instance; subscriptions must be fleet-visible to scale and to survive deploys.",
        },
        {
          mistake: "Reconnecting instantly in a tight loop after a server crash.",
          fix: "Exponential backoff with jitter, capped. A thundering herd of instant reconnects is a self-inflicted second outage.",
        },
        {
          mistake: "Forgetting proxy and timeout config for the upgrade route.",
          fix: "Pass Upgrade and Connection headers, use HTTP/1.1 upstreams, and raise read timeouts on that location — or every socket dies at 60 seconds.",
        },
      ],
      fieldChecklist: [
        "Heartbeats run at both ends and dead sockets are reclaimed within seconds.",
        "Clients reconnect with exponential backoff plus jitter and resubscribe on reconnect.",
        "Subscription and room state live in Redis pub/sub or equivalent, not in instance memory alone.",
        "The proxy passes Upgrade and Connection headers and has route-specific long timeouts.",
        "I can watch open socket count, handshake failures and reconnect rate on a dashboard.",
        "Deploys drain sockets gracefully: clients are told to reconnect, not dropped silently.",
      ],
      keyTerms: [
        {
          term: "Upgrade handshake",
          definition:
            "The HTTP exchange — GET with Upgrade: websocket, answered by 101 Switching Protocols — that turns one TCP connection into a WebSocket.",
        },
        {
          term: "Heartbeat",
          definition:
            "Periodic ping/pong frames that prove a socket is alive; the only reliable way to notice dead peers.",
        },
        {
          term: "Pub/sub fan-out",
          definition:
            "Publishing events through Redis or similar so every instance relays to its local sockets — scaling without sticky state.",
        },
        {
          term: "Backoff with jitter",
          definition:
            "Reconnect delays that grow exponentially and vary randomly, preventing a synchronized reconnect stampede.",
        },
      ],
      interviewQuestions: [
        {
          q: "How do you scale WebSockets beyond one server?",
          a: "Accept that a socket belongs to exactly one instance and make the fan-out stateless: publish events to Redis pub/sub, every instance subscribes and relays to its local sockets. Sticky sessions help the handshake find a live instance, but state lives in Redis, so instances can join, leave or be redeployed. Client reconnect logic covers the rest.",
        },
        {
          q: "Updates stop arriving but pages still load. What do you check?",
          a: "That is a dead-socket signature: HTTP works, the long-lived socket died silently. I check open-socket counts and last-heartbeat ages per instance, proxy timeouts on the upgrade route — the 60-second read timeout default kills idle sockets — and load balancer idle timeouts. The fixes are heartbeats shorter than every idle timeout on the path, and reconnect with backoff as the client default.",
        },
        {
          q: "Why jitter in the reconnect backoff?",
          a: "Without it, every disconnected client retries on the same schedule, so a recoverable server blip becomes a synchronized stampede that knocks it over again. Jitter desynchronizes the herd: retries spread across the window, the server recovers under a ramp instead of a spike. The same trick protects DNS failovers, cache expirations and every other scheduled mass event.",
        },
      ],
      quiz: [
        {
          question: "What does the 101 status code signify in a WebSocket handshake?",
          options: [
            "The protocol switches — the TCP connection now carries WebSocket frames",
            "The server is overloaded",
            "TLS failed",
            "The message was too large",
          ],
          answerIndex: 0,
          explanation:
            "101 Switching Protocols is the server's yes: the same TCP socket stops speaking HTTP request-response and starts carrying frames in both directions, with neither side waiting for the other.",
        },
        {
          question:
            "Half your users' sockets die about 60 seconds after connect, behind a proxy. Most likely cause?",
          options: [
            "The clients are mobile",
            "Redis pub/sub is down",
            "A 60-second read timeout on the proxy route",
            "The TLS certificate expired",
          ],
          answerIndex: 2,
          explanation:
            "Idle sockets die exactly at proxy read timeouts. Heartbeats shorter than every timeout on the path — proxy and load balancer — keep them alive.",
        },
        {
          question: "Why does fan-out belong in Redis pub/sub rather than instance memory?",
          options: [
            "Redis is faster than memory",
            "It removes the need for heartbeats",
            "Memory cannot hold strings",
            "Sockets attach to one instance, but events must reach every instance's clients",
          ],
          answerIndex: 3,
          explanation:
            "Any instance may hold the socket for a subscribed user, so every instance must see every event. The pub/sub layer is what lets the fleet scale and redeploy without orphaning state.",
        },
      ],
    },
    {
      number: 9,
      title: "Latency",
      summary:
        "Every request pays four costs. Engineers who budget them design fast systems; engineers who do not discover them in the pager.",
      keyIdea:
        "Propagation, handshakes, queuing, serialization. curl timing breakdown attributes a real request to its costs.",
      deepDive: [
        {
          heading: "Four costs, one budget",
          paragraphs: [
            "Every request pays four costs. Propagation: physics — light in fiber is fast but not instant, and distance prices in milliseconds you can only avoid by moving closer. Handshakes: DNS, TCP and TLS each cost round trips before the first byte of real work. Queuing: load — at your servers and on every router between. Serialization: payload size over the available bandwidth. Budget all four, or discover them one pager at a time.",
            "Arithmetic makes it concrete. On an intercontinental path with a 50-100 millisecond round trip, TCP plus a TLS 1.3 handshake costs two round trips — roughly 100-200 milliseconds — before the request even ships, and cold DNS adds more. That floor is why keep-alive and session resumption exist: they amortize the handshakes across many requests. It is also why the same code is fast in one region and mysteriously slow in another — nothing changed except the wire.",
          ],
        },
        {
          heading: "Measure, do not guess",
          paragraphs: [
            "Measure per phase, not in total. curl -w prints the breakdown: time_namelookup for DNS, time_connect for TCP, time_appconnect for TLS, time_starttransfer for the first byte, time_total for everything. The gaps name the guilty layer — connect minus namelookup is the TCP round trip, appconnect minus connect is the handshake, starttransfer minus appconnect is your server thinking, the rest is transfer. Wire that format into your shell once; you will use it in every incident for a decade.",
            "Inside the service, watch percentiles. The average hides the tail, and the tail is where retries, garbage collection pauses and cold caches live — p95 and p99 are the users you are actually losing. Keep server-side timings (request handling, database, upstream calls) separate from client-side measurements so network cost and code cost never blur. Between two known points, mtr is the instrument: hop-by-hop latency and loss, in both directions, because the return path can be the sick one.",
          ],
        },
        {
          heading: "Buy back round trips",
          paragraphs: [
            "Buy back round trips in order of payoff. Move content closer — a CDN turns distant static and cacheable responses into local ones. Keep connections alive — pools and keep-alive amortize TCP and TLS. Cut handshake cost — TLS 1.3 and session resumption. Shrink payloads — compression and fewer, smaller round trips. And cache so the request never happens at all, which beats optimizing it.",
            "Then write the budget down per endpoint: what latency is acceptable and why. A login submit can tolerate 300 milliseconds; autocomplete needs to feel instant under 100; a background export does not care. A written budget turns 'it feels slow' into a measurement conversation, makes regressions objective in review, and converts unmet budgets into named engineering work instead of vibes. Teams with budgets argue about numbers; teams without them argue about opinions.",
          ],
        },
      ],
      diagram: {
        kind: "pipeline",
        title: "Where the milliseconds go",
        caption:
          "curl -w attributes one real request across these buckets — handshakes first, then your code.",
        stages: [
          { label: "DNS lookup", note: "only when caches are cold" },
          { label: "TCP connect", note: "one round trip" },
          { label: "TLS handshake", note: "1.3: one more round trip" },
          { label: "Server think", note: "your code and its queries" },
          { label: "Content transfer", note: "bytes over the wire" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "The gap between two timestamps names the guilty layer; run it during incidents, not after.",
        code: [
          "# One line that assigns blame per phase",
          "curl -sS -o /dev/null \\",
          "  -w 'dns=%{time_namelookup}s connect=%{time_connect}s tls=%{time_appconnect}s ttfb=%{time_starttransfer}s total=%{time_total}s\\n' \\",
          "  'https://example.com'",
          "",
          "# dns=0.012 connect=0.062 tls=0.109 ttfb=0.171 total=0.180",
          "# connect-dns = TCP round trip; tls-connect = handshake;",
          "# ttfb-tls = server think time; total-ttfb = transfer.",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Optimizing server code before reading a timing breakdown.",
          fix: "curl -w first: DNS, connect, TLS, ttfb, total. Handshakes and distance often dwarf any code improvement available.",
        },
        {
          mistake: "Judging performance by the average response time.",
          fix: "Track p95 and p99. Averages hide the tail where retries, GC pauses and cold caches live — and the tail is where users churn.",
        },
        {
          mistake: "Opening a fresh connection for every request.",
          fix: "Keep-alive and connection pools amortize TCP and TLS across requests; on a 50 ms path that is over 100 ms saved per request.",
        },
        {
          mistake: "Treating same-region benchmarks as user experience.",
          fix: "Test from real geographies and networks. Cross-continent RTT adds a fixed floor no code review can remove — only placement does.",
        },
      ],
      fieldChecklist: [
        "I can break any request into DNS, connect, TLS, ttfb and total with curl -w.",
        "Latency dashboards show percentiles (p50, p95, p99), never just averages.",
        "Connections are kept alive and pooled for every hot dependency.",
        "I know the RTT from each user region to my stack and have written budgets for key endpoints.",
        "Static and cacheable responses are served from a CDN or edge cache, not the app.",
        "mtr or traceroute is my first stop when latency appears between two known points.",
      ],
      keyTerms: [
        {
          term: "RTT (round-trip time)",
          definition:
            "The time for a packet to go out and come back — the atomic unit every handshake and request is priced in.",
        },
        {
          term: "TTFB (time to first byte)",
          definition:
            "The moment the first response byte arrives — the sum of lookups, handshakes and server think time.",
        },
        {
          term: "Percentile (p95/p99)",
          definition:
            "The response-time threshold that 95 or 99 percent of requests beat — the honest way to see tail pain that averages hide.",
        },
        {
          term: "Keep-alive",
          definition:
            "Reusing an open TCP/TLS connection for many requests instead of paying the handshake each time.",
        },
      ],
      interviewQuestions: [
        {
          q: "The API reports 80 ms but users see 600 ms. Where is the rest?",
          a: "Between the browser and the server: DNS, TCP and TLS handshakes, upload and download over the wire, and any proxy hops. curl -w from the user's region separates them immediately. Every handshake is round trips on a path you do not control, which is why the fixes are CDN placement, keep-alive, TLS 1.3 and smaller payloads — not more server optimization.",
        },
        {
          q: "Why do you insist on percentiles over averages?",
          a: "Because latency distributions are long-tailed. An average of 120 ms can hide a p99 of 2 seconds that a fifth of your sessions hit. The tail is where GC pauses, cold caches, retries and congestion live, and it correlates with your angriest users. Percentiles make the tail visible; then you can decide whether it is worth real money to fix.",
        },
        {
          q: "How would you build a latency budget for a new endpoint?",
          a: "Start from the user experience target and subtract: page budget minus render leaves the API budget; subtract measured RTT and handshake costs for the region mix; the remainder is server think time, which I split across dependencies by measurement. The budget is written down, alerted on at p95, and re-checked when architecture changes — otherwise it silently drifts into the pager.",
        },
      ],
      quiz: [
        {
          question: "Which curl -w variables bracket 'server think time'?",
          options: [
            "time_namelookup to time_connect",
            "time_connect to time_total",
            "time_appconnect to time_starttransfer",
            "time_total to time_namelookup",
          ],
          answerIndex: 2,
          explanation:
            "From TLS completion to first byte is the server doing its work. The surrounding gaps are DNS, TCP, TLS and transfer — each layer gets its own timestamp.",
        },
        {
          question: "Same code, two regions: one fast, one consistently slow. First suspect?",
          options: [
            "Round-trip distance and handshake cost on the slow path",
            "A code path difference",
            "The database index",
            "Random garbage-collection pauses",
          ],
          answerIndex: 0,
          explanation:
            "Consistent regional slowness with identical code is physics: more RTT for every handshake and every request. CDNs, edge caches and region placement attack it; code review cannot.",
        },
        {
          question: "TLS 1.3 improved first-request latency mainly by…",
          options: [
            "Compressing headers",
            "Reusing UDP ports",
            "Removing certificates",
            "Reducing the handshake to one round trip",
          ],
          answerIndex: 3,
          explanation:
            "TLS 1.3 does its handshake in a single round trip versus two for TLS 1.2, and QUIC merges transport and crypto handshakes further — fewer round trips before the first byte.",
        },
      ],
    },
    {
      number: 10,
      title: "Firewalls",
      summary:
        "A firewall is a policy about who may talk to whom, enforced at the door. The discipline is default-deny plus explicit, owned exceptions.",
      keyIdea:
        "Egress default-deny converts exfiltration attempts from silent success into loud signals.",
      deepDive: [
        {
          heading: "Default-deny, then named exceptions",
          paragraphs: [
            "A firewall is a policy about who may talk to whom, enforced at the door. The posture that survives contact with production is default-deny: no inbound allowed, then each port opened from the narrowest source that works — 443 from anywhere, SSH from the bastion subnet, the database port from the application tier's security group. Every rule carries an owner and a reason; unowned rules get deleted on principle.",
            "Default-deny earns its keep against what you do not know: the debug listener someone left bound, the new service nobody registered, the staging hole that became permanent. With deny-by-default, all of that traffic shows up as logged denials — an audit trail that catches mistakes while they are cheap. Allow-all-plus-blocklist is the inverse posture: it silently trusts everything you have not yet thought to fear.",
          ],
        },
        {
          heading: "Egress is the half everyone skips",
          paragraphs: [
            "Egress is the half everyone skips, and it is where the blast radius lives. Filter inbound only, and a compromised application can quietly upload your database to an attacker's bucket — silent success. Default-deny egress turns that same attempt into a denied connection with a log line: exfiltration becomes loud. The setup cost is real — allowlists for package repos, APIs, DNS, NTP — and the maintenance is the price of knowing what your servers can say to the world.",
            "Layer the policy. Cloud security groups are stateful and instance-scoped: allow the connection and replies flow back free. Network ACLs are stateless, subnet-scoped and rule-numbered — return traffic on ephemeral ports must be allowed explicitly, which is the detail people forget. Host firewalls — nftables or iptables, ufw, firewalld, the Windows firewall — guard against lateral movement inside a trusted subnet. No single layer is the boundary; each assumes the one above it failed.",
          ],
        },
        {
          heading: "The layers, and how they disagree",
          paragraphs: [
            "Troubleshoot blocked connections by walking the layers in order, testing each: is the service bound and listening (ss), does the host firewall pass it, does the security group allow the source, does the NACL allow both directions, does a route exist at all? nc -vz from the real source host is the honest test — from localhost proves nothing. The classic finding is a rule that exists on one layer and not the next.",
            "Keep the policy in code. Firewall rules that live in a console are invisible to review, impossible to audit and trivially drift; the same rules as infrastructure-as-code are diffable, reviewable and recoverable. Collect denied-traffic logs and have someone actually read them — the denial log is the intrusion log. A firewall you never look at is a wall with the cameras unplugged.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "Policy at every door",
        caption:
          "No single rule carries the trust boundary; each layer assumes the one above it failed.",
        layers: [
          { label: "Cloud security groups", note: "stateful, around instances" },
          { label: "Host firewall", note: "nftables, lateral traffic" },
          { label: "Service binding + auth", note: "loopback binds, app authn" },
          { label: "Egress default-deny", note: "outbound is policy too" },
        ],
      },
      codeExample: {
        language: "bash",
        caption:
          "Default-deny in both directions, with every exception commented — the runbook is the firewall.",
        code: [
          "# Posture: deny everything, then name the doors",
          "ufw default deny incoming",
          "ufw default deny outgoing",
          "",
          "# Named exceptions, each with a reason in the runbook",
          "ufw allow 443/tcp comment 'public HTTPS'",
          "ufw allow from 10.0.2.0/24 to any port 5432 comment 'app tier to Postgres'",
          "ufw allow to 10.0.3.10 port 443 comment 'package mirror'",
          "",
          "# Denials are the audit trail - keep them and read them",
          "ufw logging on",
          "journalctl -k --since today | grep 'UFW BLOCK' | tail -n 20",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Filtering only ingress and letting hosts reach the whole internet.",
          fix: "Default-deny egress too, allowlisted by destination. Exfiltration then becomes a logged denial instead of silent success.",
        },
        {
          mistake: "Opening a port to 0.0.0.0/0 because the source range was unknown.",
          fix: "Find the actual source — bastion CIDR, app security group, office VPN. A world-open door is a bug with a firewall in front of it.",
        },
        {
          mistake: "Treating 'the security group allows it' as 'the service works'.",
          fix: "Reachability is layered: bind address, host firewall, SG, NACL, route. Test with nc from the real source, not from localhost.",
        },
        {
          mistake: "Letting rules accumulate with no owner or expiry.",
          fix: "Every rule has an owner, a reason and a review date. Unowned rules are how staging access becomes a production incident two years later.",
        },
      ],
      fieldChecklist: [
        "Ingress is default-deny; every allowed rule has an owner, a reason and the narrowest source range that works.",
        "Egress is default-deny on at least every host that can reach sensitive data.",
        "The database tier has no internet egress route at all.",
        "I can trace a blocked connection through bind, host firewall, security group and NACL in order.",
        "Denied-traffic logs are collected and someone actually reads them.",
        "Firewall rules live in version control or infrastructure-as-code, not in console clicks.",
      ],
      keyTerms: [
        {
          term: "Stateful firewall",
          definition:
            "Tracks connections so reply traffic is allowed automatically — security groups work this way; NACLs do not.",
        },
        {
          term: "Default-deny",
          definition:
            "Drop everything not explicitly allowed; the posture that turns unknown traffic into logged signals instead of silent exposure.",
        },
        {
          term: "Egress filtering",
          definition:
            "Restricting what your hosts may talk to outbound — the control that makes data exfiltration loud instead of quiet.",
        },
        {
          term: "NACL",
          definition:
            "A stateless, subnet-scoped rule list where returning traffic must be allowed explicitly, unlike security groups.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why insist on default-deny egress when most teams only filter inbound?",
          a: "Because inbound rules protect your perimeter while egress rules limit your blast radius. A compromised container with open egress can quietly ship your database dump to an outside bucket; with default-deny, that same attempt is a denied connection with a log line. I have never regretted the setup pain — I have repeatedly seen the alert it produced during real incidents.",
        },
        {
          q: "A new service cannot reach the database. Where do you look?",
          a: "Down the stack, in order. ss on the database host: is Postgres listening, on which bind address? Host firewall next, then the security group — does it allow 5432 from this new service's group, not just the old app tier? Then NACL statelessness on return traffic, and finally the route table if they are in different subnets. Nine times out of ten it is the SG referencing the wrong source group.",
        },
        {
          q: "Security groups versus network ACLs — when do the differences matter?",
          a: "Security groups are stateful and instance-scoped: allow the inbound rule and replies flow back. NACLs are stateless and subnet-scoped with numbered, order-evaluated rules, so ephemeral return ports must be allowed explicitly. They matter when you need subnet-level segmenting, explicit deny, or a backstop — but day to day, most mistakes come from forgetting NACL statelessness, not from choosing between them.",
        },
      ],
      quiz: [
        {
          question: "What does 'stateful' mean for a security group?",
          options: [
            "It keeps rule history for audits",
            "Allowed inbound connections get their replies allowed automatically",
            "It stores packets for replay",
            "It applies to the whole subnet",
          ],
          answerIndex: 1,
          explanation:
            "Stateful means the firewall tracks the connection: replies to allowed inbound traffic pass without extra rules. NACLs are stateless, so return traffic on ephemeral ports needs explicit allow rules.",
        },
        {
          question: "Your data tier should be configured so that…",
          options: [
            "It has no egress route, so stolen data cannot leave",
            "It can reach the internet for patches",
            "It accepts connections from anywhere inside the VPC",
            "It runs its own firewall only",
          ],
          answerIndex: 0,
          explanation:
            "A database that cannot open outbound connections cannot exfiltrate what it holds. Patching happens through controlled mirrors or managed services — not through an open door.",
        },
        {
          question: "The strongest argument for default-deny is…",
          options: [
            "It makes configs shorter",
            "It is required by TLS 1.3",
            "It speeds up routing",
            "It defends against services and listeners you do not know about yet",
          ],
          answerIndex: 3,
          explanation:
            "You cannot enumerate what you have not shipped yet. Default-deny turns every unregistered listener and forgotten hole into a logged denial instead of open exposure.",
        },
      ],
    },
    {
      number: 11,
      title: "HTTP/1.1 vs HTTP/2 vs HTTP/3 (QUIC)",
      summary:
        "Three protocol generations, one theme: fewer round trips and less head-of-line waiting. The differences are all about how streams share a connection.",
      keyIdea:
        "HTTP/3 fixes per-stream independence over QUIC. Same theory, better loss behavior, plus a merged handshake.",
      deepDive: [
        {
          heading: "One theme: fewer round trips, less waiting",
          paragraphs: [
            "HTTP/1.1 is a text protocol that carries one request at a time per connection; browsers worked around it by opening about six connections per origin, and pipelining — sending several requests before answers — was crippled by head-of-line blocking and never trusted. HTTP/2 replaced the text grammar with binary framing: many streams multiplexed over one connection, headers compressed with HPACK, priorities between streams. One connection, many requests in flight — the request-level queue disappeared.",
            "What did not disappear is TCP's. All those streams still ride one ordered byte stream, so a single lost segment halts reassembly for the whole connection until the retransmission lands — every stream stalls for one stream's loss. On clean wired networks this is a rounding error; on lossy mobile paths it can erase the multiplexing win entirely. That specific failure is the reason HTTP/3 exists.",
          ],
        },
        {
          heading: "QUIC rebuilds the transport",
          paragraphs: [
            "HTTP/3 moves the transport. QUIC runs over UDP and rebuilds reliability, ordering and flow control per stream, so loss on stream A does not stall stream B — head-of-line blocking is confined to the stream that lost the packet. TLS 1.3 is integrated into the handshake, so transport and crypto negotiation merge: the first request can start about one round trip after DNS. Connection IDs identify the connection instead of the address pair, so a connection survives switching from wifi to cellular.",
            "The caveats are operational. 0-RTT resumption lets a client send early data immediately, but that data can be replayed by an attacker — keep it to idempotent reads or turn it off. UDP 443 must pass every firewall and middlebox on the path, or HTTP/3 silently never engages; load balancers and monitoring tools need QUIC awareness. The safe posture is to advertise HTTP/3 through alt-svc, serve it, and keep HTTP/2 as a fully working fallback.",
          ],
        },
        {
          heading: "What actually changes for you",
          paragraphs: [
            "Semantics did not change across the three generations — same methods, statuses and headers, negotiated transparently through ALPN during the handshake. The wins concentrate exactly where round trips and loss dominate: high-latency paths, mobile networks, far regions. On a fast wired connection, 1.1, 2 and 3 can be nearly indistinguishable, so measure per network class before crediting or blaming a protocol version.",
            "Debugging changes shape. There is no plaintext on the wire to read casually — QUIC encrypts even frame headers — so the tools move up a level: curl --http3 where your build supports it, the protocol column in browser devtools, alt-svc headers advertising h3, and server-side QUIC logs. The skill that carries over intact is Chapter 9's: phase-by-phase timing. You are still asking how many round trips and who owns each one.",
          ],
        },
      ],
      diagram: {
        kind: "compare",
        title: "HTTP/2 vs HTTP/3",
        caption:
          "Same semantics, different transport — the win is per-stream loss isolation, not new verbs.",
        left: {
          heading: "HTTP/2 over TCP",
          items: [
            "One connection, many parallel streams",
            "Request-level blocking solved",
            "One lost TCP packet stalls every stream",
            "TCP and TLS handshakes are separate",
          ],
        },
        right: {
          heading: "HTTP/3 over QUIC",
          items: [
            "Streams are independent — loss is contained",
            "Rides on UDP 443",
            "Transport and TLS handshake merged",
            "Connection ID survives network changes",
          ],
        },
      },
      codeExample: {
        language: "bash",
        caption:
          "The protocol is a fact you can verify from the client — and compare per request, not per vendor page.",
        code: [
          "# Which protocol did the server actually speak?",
          "curl -sI 'https://example.com' | grep -i '^http/'",
          "# HTTP/2 200",
          "",
          "# Is HTTP/3 advertised? alt-svc is the hint",
          "curl -sI 'https://example.com' | grep -i alt-svc",
          "",
          "# Compare phase timings between versions",
          "curl --http2 -sS -o /dev/null -w 'h2 total=%{time_total}s\\n' 'https://example.com'",
          "curl --http3 -sS -o /dev/null -w 'h3 total=%{time_total}s\\n' 'https://example.com'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Assuming HTTP/2 will fix a slow site on a clean wired network.",
          fix: "Multiplexing pays on high-RTT, lossy paths. Measure with curl -w before crediting or blaming the protocol version.",
        },
        {
          mistake: "Shipping HTTP/3 without verifying UDP 443 end to end.",
          fix: "Middleboxes drop UDP silently. Test from mobile networks, keep HTTP/2 fallback, and confirm load balancers pass QUIC flows.",
        },
        {
          mistake: "Sending sensitive, non-idempotent requests in QUIC 0-RTT data.",
          fix: "0-RTT early data can be replayed. Restrict it to idempotent reads, or disable 0-RTT on endpoints that mutate state.",
        },
        {
          mistake: "Debugging HTTP/3 with TCP-era assumptions and plaintext tcpdump.",
          fix: "QUIC encrypts frames, including headers. Use curl --http3, devtools protocol indicators and alt-svc, plus server-side QUIC logs.",
        },
      ],
      fieldChecklist: [
        "I know which HTTP version each edge actually negotiates, verified from real clients.",
        "The edge advertises HTTP/3 via alt-svc and keeps HTTP/2 as a working fallback.",
        "UDP 443 is open through every firewall and load balancer on the path — tested from mobile networks.",
        "0-RTT is disabled or restricted to idempotent requests.",
        "Latency comparisons between versions use curl -w style phase timing, not anecdotes.",
        "I can explain why one lost packet stalls all HTTP/2 streams but only one HTTP/3 stream.",
      ],
      keyTerms: [
        {
          term: "Multiplexing",
          definition:
            "Many concurrent streams sharing one connection — HTTP/2's core win over HTTP/1.1's one-request-per-connection.",
        },
        {
          term: "Head-of-line blocking",
          definition:
            "One blocked unit stalling everything behind it; at TCP in HTTP/2, solved per-stream by QUIC in HTTP/3.",
        },
        {
          term: "ALPN",
          definition:
            "The TLS extension where client and server agree on the application protocol — h2, http/1.1, h3 — during the handshake.",
        },
        {
          term: "alt-svc",
          definition:
            "The response header by which a server advertises that HTTP/3 is available for future connections.",
        },
      ],
      interviewQuestions: [
        {
          q: "Why did HTTP/2 not eliminate head-of-line blocking?",
          a: "It fixed it at the request layer — many streams share one connection — but they still ride a single ordered TCP byte stream, so one lost segment halts reassembly for every stream until the retransmission arrives. HTTP/3 moves reliability into QUIC, where streams are independent: loss only stalls the stream that lost the packet. That is the entire architectural difference.",
        },
        {
          q: "When is HTTP/3 worth enabling, and what does it cost?",
          a: "Worth it wherever paths are high-latency or lossy — mobile networks, distant regions — and for connection migration across wifi and cellular. Cost: UDP 443 must pass every firewall and middlebox, load balancers and observability need QUIC awareness, and 0-RTT introduces replay considerations. Since semantics are unchanged, enabling it is low risk with HTTP/2 fallback in place.",
        },
        {
          q: "How do you validate that HTTP/3 actually improved things for users?",
          a: "Compare distributions, not stories: same endpoints, h2 versus h3 cohorts, percentile timing broken into handshake, ttfb and total, ideally segmented by network quality. Expect the biggest deltas on lossy high-RTT paths and near zero on fast links. If the p95 on mobile does not move, the rollout was theater — keep it anyway for connection migration, but know what it bought.",
        },
      ],
      quiz: [
        {
          question: "What problem does multiplexing in HTTP/2 solve?",
          options: [
            "TLS certificate size",
            "UDP packet loss",
            "One-request-at-a-time-per-connection in HTTP/1.1",
            "DNS TTL behavior",
          ],
          answerIndex: 2,
          explanation:
            "HTTP/1.1 serializes requests per connection, so browsers opened about six connections per origin to fake parallelism. HTTP/2 interleaves many streams over one connection instead — the request-level queue disappears.",
        },
        {
          question: "Why can one lost TCP packet stall every HTTP/2 stream?",
          options: [
            "Streams share one ordered TCP byte stream; reassembly waits for the missing segment",
            "HPACK compression fails on loss",
            "HTTP/2 disables retransmission",
            "Each stream has its own connection",
          ],
          answerIndex: 0,
          explanation:
            "Under HTTP/2 the multiplexed streams ride one TCP stream. TCP delivers bytes in order, so a hole blocks everything after it until retransmission fills it.",
        },
        {
          question: "What does QUIC's connection ID enable?",
          options: [
            "Skipping TLS entirely",
            "Unlimited 0-RTT writes",
            "Compression across servers",
            "Connections surviving an IP change, like wifi to cellular",
          ],
          answerIndex: 3,
          explanation:
            "The connection is identified by an ID, not the address pair, so a client can change networks mid-connection and keep streaming. Handshakes and streams remain independent of IP.",
        },
      ],
    },
    {
      number: 12,
      title: "Layer 4 vs Layer 7 Load Balancing & TLS Termination",
      summary:
        "An L4 balancer forwards bytes; an L7 balancer understands requests. The choice decides what your edge can see, decide, and protect.",
      keyIdea:
        "TLS termination pattern is a trust decision, not a performance one. Real architectures use both.",
      deepDive: [
        {
          heading: "L4: fast, blind, faithful",
          paragraphs: [
            "An L4 balancer forwards flows: it reads IP addresses and ports, picks a backend, and moves bytes — nothing about HTTP. That blindness is the speed: extremely high throughput, low overhead, protocol-agnostic, equally at home in front of databases, game servers, gRPC or QUIC. It cannot route by path or header, rewrite anything, compress, or read a status code; its health checks see port reachability unless you configure protocol-aware probes.",
            "TLS passthrough is the L4 signature move: the balancer forwards encrypted bytes untouched, certificates live on the backends, encryption stays end-to-end, and client certificates still work. What you give up is edge visibility — no path routing, no WAF, no header logic — and most of your health-check honesty. It is the right choice when the protocol is not HTTP-shaped or when encryption policy forbids terminating anywhere but the backend.",
          ],
        },
        {
          heading: "L7: sees requests, pays for it",
          paragraphs: [
            "An L7 balancer terminates HTTP(S) and reads whole requests: route by host and path, weighted canaries, header rewrites, rate limits, a WAF, cookie-based sticky sessions, compression. The price is that it must decrypt — certificates live at the edge — and spend CPU sitting in the path of every header byte. Everything an L4 cannot see, an L7 decides on; that is the entire trade.",
            "Termination is a trust decision, not a performance ranking. Terminate at the edge and hop plaintext inside a private VPC: simple, common, and fine if your boundary is the VPC edge. Terminate and re-encrypt, or add mTLS between services: more CPU and certificate plumbing, and every internal hop is authenticated and encrypted — the zero-trust and regulated-environment answer. Neither is more correct; the question is where your trust boundary actually ends, and writing that down.",
          ],
        },
        {
          heading: "You will use both",
          paragraphs: [
            "Real architectures use both, stacked. An anycast or cloud L4 layer at the front absorbs connection floods and spreads load across regions; an L7 tier — nginx, HAProxy, Envoy, a managed ALB — does routing, policy and TLS; the app tier sits behind both. Sticky sessions exist for the legacy case where an app holds session state in memory; the durable fix is externalizing that state so any backend can serve any request, and dropping stickiness entirely.",
            "Health checks decide whether failover is an event or an outage. Make them ask a real question — an endpoint that touches the dependency chain — at intervals and thresholds tuned to how fast you want removal versus how much noise you tolerate. Add passive detection so real request errors also pull a backend from rotation. And drain on deregistration: in-flight requests finish before the instance disappears (Chapter 14). A port that answers is not a service that works; the balancer should know the difference.",
          ],
        },
      ],
      diagram: {
        kind: "matrix",
        title: "Four real load-balancing postures",
        caption:
          "The axes are how deep the balancer sees and whether the hop inside stays encrypted.",
        axes: { x: "What the balancer decides on", y: "Encryption to the upstream" },
        quadrants: [
          { label: "L4 passthrough", note: "bytes only; TLS ends at the backend" },
          { label: "L7 + re-encrypt", note: "inspect at the edge, encrypt the hop" },
          { label: "L4, plain TCP", note: "internal, non-HTTP ports" },
          { label: "L7, plaintext inside", note: "terminate; hop to app unencrypted" },
        ],
      },
      codeExample: {
        language: "yaml",
        caption:
          "A health check must verify the dependency chain, or the balancer routes traffic to a process that answers but cannot work.",
        code: [
          "# An L7 health check that asks a real question",
          "healthCheck:",
          "  protocol: HTTP",
          "  path: /healthz",
          "  port: 8080",
          "  intervalSeconds: 10",
          "  timeoutSeconds: 3",
          "  healthyThresholdCount: 2",
          "  unhealthyThresholdCount: 3",
          "  matcher:",
          "    httpCode: '200'",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "Health checks that only verify the port is open.",
          fix: "Probe a real endpoint that touches its dependencies. A process that answers TCP but cannot reach its database is still down.",
        },
        {
          mistake: "Using sticky sessions to compensate for in-memory state.",
          fix: "Externalize state to Redis or the database and drop stickiness. Cookies pin users to dying instances and break even scaling.",
        },
        {
          mistake: "Assuming the L4 balancer can route by path or header.",
          fix: "L4 forwards flows and cannot read HTTP. Put an L7 tier in front when you need host or path routing, rewrites or a WAF.",
        },
        {
          mistake: "Leaving TLS termination decisions to defaults.",
          fix: "Decide explicitly who decrypts: edge termination with plaintext hops, or re-encrypt and mTLS inside. Write the trust boundary down.",
        },
      ],
      fieldChecklist: [
        "I can say, for each public endpoint, which L4 and L7 layers it crosses and why each exists.",
        "Health checks exercise real dependencies, with intervals and thresholds tuned to failover speed versus noise.",
        "Where TLS terminates is a written decision, including whether internal hops are re-encrypted.",
        "Sticky sessions exist only where state genuinely cannot be externalized — and I know which routes those are.",
        "Deregistration drains in-flight requests before instances disappear.",
        "Certificates live where TLS terminates, and renewal there is automated.",
      ],
      keyTerms: [
        {
          term: "L4 load balancer",
          definition:
            "Forwards TCP/UDP flows by address and port without reading the application protocol — fast, blind, protocol-agnostic.",
        },
        {
          term: "L7 load balancer",
          definition:
            "Terminates HTTP(S) and routes per request — path, headers, cookies — enabling canaries, WAF and sticky sessions.",
        },
        {
          term: "TLS termination",
          definition:
            "Decrypting at the balancer so the edge holds certificates and can inspect requests; re-encryption or mTLS can follow.",
        },
        {
          term: "Sticky session",
          definition:
            "Cookie or flow affinity pinning a client to one backend; a workaround for in-memory state, not a design.",
        },
      ],
      interviewQuestions: [
        {
          q: "When would you choose an L4 balancer over an L7 one?",
          a: "When traffic is not HTTP-shaped (databases, game servers, raw gRPC), when throughput and latency matter more than routing intelligence, when you want TLS passthrough for end-to-end encryption or client certificates, or when you need to front QUIC. L4 is also the cheaper absorption layer for connection floods. The moment you need path routing, header logic or a WAF, you add L7 in front of the app tier.",
        },
        {
          q: "Terminating TLS at the load balancer — is that a security problem?",
          a: "It is a trust boundary decision, not a vulnerability by itself. Termination means the edge holds private keys and the hop to upstreams is plaintext unless you re-encrypt. Inside a private VPC many teams accept that; regulated or zero-trust environments re-encrypt or use mTLS so every hop is authenticated. The mistake is not choosing — it is assuming the default matches your compliance story.",
        },
        {
          q: "Your load balancer marks a backend healthy but users get errors. How?",
          a: "The health check is lying by being shallow: a 200 on /healthz from a process whose database connection pool is dead. I make checks exercise the dependency chain or accept the trade-off consciously, add passive failure detection so real request errors also pull the target from rotation, and look at draining thresholds so a sick backend exits cleanly instead of flapping.",
        },
      ],
      quiz: [
        {
          question: "What can an L7 balancer do that an L4 balancer fundamentally cannot?",
          options: [
            "Forward UDP",
            "Route by request path or header",
            "Reach one million connections",
            "Terminate TCP",
          ],
          answerIndex: 1,
          explanation:
            "L7 terminates HTTP and reads the request, so it can route by host and path, rewrite headers, and apply WAF rules. L4 sees flows of bytes, not requests.",
        },
        {
          question:
            "Compliance requires the request stay encrypted between balancer and app. What setup?",
          options: [
            "L4 passthrough only",
            "TLS 1.0",
            "L7 termination with re-encryption or mTLS to the upstream",
            "Disable health checks",
          ],
          answerIndex: 2,
          explanation:
            "Termination at the edge still allows inspection; re-encryption or mTLS restores encryption on the internal hop while keeping it. L4 passthrough also works, but forfeits L7 routing and the WAF.",
        },
        {
          question: "Why can a 'healthy' backend still be broken?",
          options: [
            "The check only proves the process answers, not that its dependencies work",
            "Health checks are encrypted",
            "Load balancers cache health forever",
            "Backends cannot lie",
          ],
          answerIndex: 0,
          explanation:
            "A TCP or shallow-HTTP check validates liveness, not function. Make health checks touch the dependency chain, and add passive detection so real errors also remove the target.",
        },
      ],
    },
    {
      number: 13,
      title: "Subnets, VPCs, NAT Gateways & CIDR",
      summary:
        "The cloud's network fabric is a private internet you design: address blocks, trust boundaries, and one carefully shaped door to the outside world.",
      keyIdea:
        "Apps and data in private subnets; only ALB/NAT public. Data tier has no egress route — cannot exfiltrate.",
      deepDive: [
        {
          heading: "A private internet you design",
          paragraphs: [
            "A VPC is a private internet you design: one CIDR block you own — 10.0.0.0/16 is a classic start — carved into subnets, typically /24s, one per tier per availability zone. Route tables decide where traffic may flow; security groups decide who may talk. It is all software-defined: changes are API calls and infrastructure-as-code, not cabling. The design you write down first is the one you live in for years.",
            "CIDR math you will actually use: a /24 holds 256 addresses, a /16 holds 65,536, and clouds reserve a handful of addresses in every subnet for infrastructure, so usable capacity is slightly less than the arithmetic suggests. Two rules prevent permanent pain: leave headroom, because a subnet cannot stretch later — and never let environments or peered networks pick overlapping ranges, because overlap turns every future VPN or peering attempt into a re-addressing project.",
          ],
        },
        {
          heading: "Public, private, and the one door",
          paragraphs: [
            "The tier model gives the plan its shape. Public subnets have a route to an internet gateway, and only two residents: the load balancer and the NAT gateways. Private application subnets have no inbound path from the internet — requests arrive through the load balancer — and reach out through a NAT gateway for patches, packages and external APIs. One NAT gateway per availability zone: they are AZ-scoped, and a single shared one makes its zone a single point of egress failure.",
            "The data tier is stricter still: a private subnet, security groups that accept traffic only from the application tier, and no NAT route at all. A database that cannot open outbound connections cannot exfiltrate its contents, whatever software compromise occurs on the host. This is Chapter 10's egress principle expressed as topology — enforced by a missing route instead of by discipline — and it is nearly free to build on day one.",
          ],
        },
        {
          heading: "The everyday skills",
          paragraphs: [
            "The everyday skills are reading, not building. Read route tables to know where traffic goes; read security group rules — and prefer referencing group IDs over CIDRs, so rules follow the tier instead of tracking changing IPs. Turn on flow logs: they settle connectivity arguments with facts about which packets actually moved, in which direction, and which layer refused them. When an instance 'cannot reach the database', the answer is usually route table, SG source, or NACL statelessness, in that order.",
            "IPv6 changes the shape of the thinking: there is no NAT to hide behind, so security groups and egress policy carry the entire boundary — plan dual-stack deliberately rather than discovering it. And keep names over numbers: DNS names for services, group references for rules, literal IPs nowhere in application configuration. Address plans are durable; address literals rot the first time a subnet moves. The fabric is a design document that happens to route packets.",
          ],
        },
      ],
      diagram: {
        kind: "layers",
        title: "A VPC, top to bottom",
        caption:
          "One carefully shaped door: only the edge is public, and the data tier cannot even dial out.",
        layers: [
          { label: "Public subnet", note: "ALB + NAT gateway only" },
          { label: "Private app subnet", note: "egress via NAT, no inbound" },
          { label: "Private data subnet", note: "no internet route at all" },
          { label: "Route tables + SGs", note: "the wiring between tiers" },
        ],
      },
      pitfalls: [
        {
          mistake: "Putting application servers in the public subnet 'for convenience'.",
          fix: "Public means a route from the internet. Apps live in private subnets behind the load balancer — the door stays singular.",
        },
        {
          mistake: "Sizing subnets tight and growing into a re-IP project.",
          fix: "Subnet size is a one-way door. Plan /24s per tier per AZ with headroom, and non-overlapping CIDRs per environment.",
        },
        {
          mistake: "Giving the data tier a NAT route 'just in case'.",
          fix: "No route, no exfiltration. Data tiers get zero internet egress; patches and tools come through controlled paths.",
        },
        {
          mistake: "One NAT gateway shared by every availability zone.",
          fix: "NAT is AZ-scoped infrastructure. One per AZ, or the zone's private egress dies with it — and takes your patching and API calls too.",
        },
      ],
      fieldChecklist: [
        "The VPC plan is written down: CIDR per environment, subnet per tier per AZ, none overlapping.",
        "Only the load balancer and NAT gateways sit in public subnets; app and data tiers have no public IPs.",
        "The data tier has no egress route to the internet at all.",
        "NAT gateways exist one per availability zone, and I know what breaks if one dies.",
        "Security group rules reference group IDs and DNS names where possible, not literal IPs.",
        "VPC flow logs are on, and I have used them at least once to settle a connectivity argument.",
      ],
      keyTerms: [
        {
          term: "VPC",
          definition:
            "A virtual private network you design in the cloud: your own CIDR space, subnets, route tables and rules, all API-defined.",
        },
        {
          term: "CIDR block",
          definition:
            "An address range written address-plus-prefix (10.0.0.0/16); the unit you plan, carve and peer with.",
        },
        {
          term: "NAT gateway",
          definition:
            "The managed one-way door: private subnets reach the internet outbound while nothing can dial in.",
        },
        {
          term: "Public subnet",
          definition:
            "A subnet whose route table points at an internet gateway — the only place that should touch the internet directly.",
        },
      ],
      interviewQuestions: [
        {
          q: "Design a VPC for a three-tier web app. What do you lay out first?",
          a: "The address plan before any resources: one non-overlapping CIDR per environment, then subnets per tier per availability zone — public for the load balancer and NAT, private app, private data. Route tables wire app egress through NAT and the data tier to nothing. Security groups reference tiers, not IPs. The whole thing is infrastructure-as-code from the first subnet, because every later change is a migration.",
        },
        {
          q: "Why does the data tier get no NAT route?",
          a: "Because egress is the exfiltration path. A database that cannot open outbound connections cannot ship its contents anywhere, no matter what runs on it — the topology enforces the policy instead of hoping tooling behaves. Patches and maintenance happen through controlled ingress paths. It costs nothing on day one and is painful to retrofit, so it goes in the original design.",
        },
        {
          q: "A private subnet instance cannot reach the internet. What do you check?",
          a: "In order: the route table — is 0.0.0.0/0 pointed at a NAT gateway? Is the NAT gateway itself in a public subnet with an assigned IP? Security group egress on the instance, NACL statelessness on both subnets, and whether the destination is blocked by its own policy. Then flow logs tell you which layer actually dropped the packet.",
        },
      ],
      quiz: [
        {
          question: "What makes a subnet 'public' in a VPC?",
          options: [
            "It has a security group",
            "It uses RFC 1918 addresses",
            "Its route table points to an internet gateway",
            "It contains more than one AZ",
          ],
          answerIndex: 2,
          explanation:
            "Public is a routing fact: a path to an internet gateway. Resources in it can be reached from the internet if their firewall allows — nothing else defines it.",
        },
        {
          question: "What is the security value of giving the database subnet no NAT route?",
          options: [
            "A compromised database cannot exfiltrate data to the internet",
            "It makes queries faster",
            "It saves the cost of an ALB",
            "It enables IPv6",
          ],
          answerIndex: 0,
          explanation:
            "Egress is the exfiltration path, and topology enforces the policy better than discipline: no route means no outbound connection, whatever software is compromised on that host.",
        },
        {
          question: "Why one NAT gateway per availability zone?",
          options: [
            "Cloud providers limit one per VPC",
            "They cannot route IPv4",
            "It halves the bill",
            "NAT gateways are AZ-scoped; a zone outage would cut that zone's egress",
          ],
          answerIndex: 3,
          explanation:
            "A NAT gateway lives in one zone. Cross-AZ routing covers failures at extra latency and cost, but the standard posture is one per AZ so a zone dies without taking its private egress along.",
        },
      ],
    },
    {
      number: 14,
      title: "Packet Loss, Timeouts, Retries & Connection Draining",
      summary:
        "Loss is normal, timeouts are choices, retries are weapons that cut both ways, and draining is what separates a rolling deploy from an outage.",
      keyIdea:
        "Every network call has an explicit timeout. Retries: idempotent ops only, exp backoff + jitter, retry budget capped.",
      deepDive: [
        {
          heading: "Loss is normal; plan for it",
          paragraphs: [
            "Packet loss is not an anomaly; it is the network's resting state under load. Congestion drops packets, MTU mismatches drop packets, hardware drops packets. TCP converts loss into latency — retransmissions the user feels as tail spikes — while UDP converts it into gaps. Either way, the design conclusion is identical: every network call can fail or hang, so every network call gets an explicit connect timeout and read timeout. No library defaults, ever.",
            "Diagnose loss with mtr between the two endpoints: it shows hop-by-hop latency and loss, and you run it in both directions because the return path can be the sick one while the forward path looks perfect. On hosts, retransmit counters separate wire pain from code pain. Loss that tracks traffic volume is congestion; sparse random loss is normal life. Your job is not eliminating it — it is building timeouts and retries that absorb it without drama.",
          ],
        },
        {
          heading: "Timeouts are choices",
          paragraphs: [
            "Timeouts are choices, and they must be coherent across the stack: the client's read timeout, the proxy's, the application's, the database statement timeout, the load balancer's idle timeout. The rule is that outer timeouts exceed inner ones — otherwise an outer layer abandons work that still succeeds, wastes retries, and calls it an outage. Connect timeouts should be a few seconds: a connection that takes thirty seconds to open is already a failure.",
            "Too long is as dangerous as too short. A 300-second read timeout holds a thread, a connection and a user session open while the human has long since left; multiply by a slow dependency and the queue backs up until healthy requests time out too — one slow endpoint cascading into a full outage. Fail fast, retry deliberately, degrade gracefully. A timeout converts a hang into an error, and errors can be handled; hangs can only be waited on.",
          ],
        },
        {
          heading: "Retries have recoil; draining has grace",
          paragraphs: [
            "Retries are a weapon with recoil. Retry only idempotent operations — GET, PUT, DELETE — or make POSTs safe with idempotency keys, because a blind retry of a payment is a double charge. Back off exponentially with jitter, cap the attempts at two or three, and give each caller a retry budget so a struggling dependency is not multiplied by your whole fleet at once. Without those limits you have built a retry storm: every failure spawning more load exactly when the system can least afford it.",
            "Draining is the other half of the discipline and the difference between a rolling deploy and an outage. On shutdown, an instance stops accepting new work — deregistered from the load balancer, readiness flipped false — answers with Connection: close, finishes in-flight requests inside the grace period, and only then exits. SIGTERM handlers, load balancer deregistration delays and Kubernetes preStop hooks exist for exactly this. Handled properly, deploys are invisible; skipped, every deploy drops somebody's request.",
          ],
        },
      ],
      diagram: {
        kind: "cycle",
        title: "The retry, done safely",
        caption:
          "A retry is a vote of no confidence — budget it and space it, or it becomes a storm.",
        steps: [
          { label: "Attempt", note: "explicit timeout on the call" },
          { label: "Timeout or 5xx", note: "classify before retrying" },
          { label: "Backoff + jitter", note: "exponential, randomized" },
          { label: "Budget check", note: "cap total retries" },
          { label: "Give up loudly", note: "metric, then circuit opens" },
        ],
      },
      codeExample: {
        language: "ts",
        caption:
          "Explicit timeout, classify the failure, exponential backoff with jitter, hard cap — and only for idempotent requests.",
        code: [
          "async function fetchWithRetry(url: string, init?: RequestInit) {",
          "  for (let attempt = 0; attempt < 3; attempt++) {",
          "    try {",
          "      const res = await fetch(url, {",
          "        ...init,",
          "        signal: AbortSignal.timeout(2_000), // explicit, always",
          "      });",
          "      if (res.status >= 500 && attempt < 2) throw new Error('upstream 5xx');",
          "      return res;",
          "    } catch {",
          "      const wait = 2 ** attempt * 250;",
          "      await new Promise((r) => setTimeout(r, wait + Math.random() * wait));",
          "    }",
          "  }",
          "  throw new Error('retries exhausted');",
          "}",
        ].join("\n"),
      },
      pitfalls: [
        {
          mistake: "No timeout on the HTTP client because 'the network is reliable'.",
          fix: "Every call gets explicit connect and read timeouts. An unbounded call holds threads and connections until the whole service queues up.",
        },
        {
          mistake: "Retrying POST requests from the client on failure.",
          fix: "Idempotency keys make retries safe, or the operation must be a GET or PUT. Blind POST retries double-charge customers.",
        },
        {
          mistake: "Retrying with fixed short delays from every instance.",
          fix: "Exponential backoff with jitter and a retry budget per caller. Without it, one dependency blip becomes a synchronized storm.",
        },
        {
          mistake: "Killing app processes with SIGKILL or without SIGTERM handling.",
          fix: "Handle SIGTERM: stop accepting, answer Connection: close, finish in-flight work inside the grace period, then exit.",
        },
      ],
      fieldChecklist: [
        "Every outbound network call in my code has an explicit connect and read timeout.",
        "Outer timeouts are longer than inner ones, so no layer retries work its caller already abandoned.",
        "Retries exist only on idempotent operations or idempotency-keyed requests.",
        "Backoff is exponential with jitter, retry counts and budgets are capped, and the caps are tested.",
        "Services handle SIGTERM: deregister, drain in-flight requests, then exit within the grace period.",
        "Load balancer deregistration delay and idle timeouts match the app's drain behavior.",
        "mtr is my tool when a path degrades; I can read where loss begins.",
      ],
      keyTerms: [
        {
          term: "Retry storm",
          definition:
            "The feedback loop where every failure spawns retries from every caller, multiplying load on a struggling dependency until recovery is impossible.",
        },
        {
          term: "Exponential backoff with jitter",
          definition:
            "Retry delays that double each attempt and vary randomly — the standard way to retry without synchronizing a herd.",
        },
        {
          term: "Idempotency",
          definition:
            "The property that repeating an operation has no extra effect; the precondition for safe retries.",
        },
        {
          term: "Connection draining",
          definition:
            "Stopping new work on an instance while letting in-flight requests finish before it disappears — what makes deploys invisible.",
        },
      ],
      interviewQuestions: [
        {
          q: "A dependency starts timing out and your service falls over with it. What went wrong?",
          a: "Usually retry amplification plus held resources: every call waits the full timeout, retries multiply load, threads and connections pile up. I add explicit timeouts shorter than the caller's, cap retries with backoff and jitter, add a retry budget, and open a circuit breaker after sustained failure so we fail fast and shed load. Then the dependency recovers without dragging us down — and latency budgets stay honest.",
        },
        {
          q: "How do you make deploys drop zero requests?",
          a: "Both ends cooperate. The instance: handle SIGTERM — stop accepting, tell the load balancer to deregister, answer Connection: close, finish in-flight work within the grace period. The infrastructure: deregistration delay longer than the slowest real request, readiness probes that fail fast on shutdown. In-flight completion plus no new accepts is the whole trick; everything else is tuning the window sizes.",
        },
        {
          q: "Why is 'just add retries' often the wrong first fix?",
          a: "Because retries multiply load exactly when the system can least afford it. On a dependency at 90 percent capacity, naive retries push it over; the storm then looks like the original outage. Retries are correct on idempotent operations with backoff, jitter, budgets and an exit condition — and only after timeouts are coherent. Otherwise you are automating the crowd stampeding toward the exits.",
        },
      ],
      quiz: [
        {
          question: "What is the safest precondition for automatic retries?",
          options: [
            "The request is small",
            "The server is healthy",
            "The operation is idempotent or carries an idempotency key",
            "Latency is low",
          ],
          answerIndex: 2,
          explanation:
            "Retries replay the request, so replay must be harmless. Only idempotent operations — or POSTs guarded by idempotency keys — can be repeated without double effects like double charges.",
        },
        {
          question:
            "A dependency degrades; every service instance retries three times instantly. What happens next?",
          options: [
            "The dependency recovers faster",
            "Nothing — retries are free",
            "The circuit breaker opens by default",
            "Load multiplies by the retry factor and the outage deepens — a retry storm",
          ],
          answerIndex: 3,
          explanation:
            "Retries are extra load. Every caller multiplying failing requests by three turns a partial degradation into full collapse — backoff, jitter and budgets exist to prevent exactly this.",
        },
        {
          question: "What makes a rolling deploy invisible to users?",
          options: [
            "Faster instance types",
            "Draining: no new accepts, in-flight requests finished before exit",
            "Deploying at night",
            "Increasing CPU limits",
          ],
          answerIndex: 1,
          explanation:
            "Deregistration plus SIGTERM handling lets instances finish real work before disappearing. Time of day and machine size do not stop dropped requests — lifecycle handling does.",
        },
      ],
    },
  ],
};
