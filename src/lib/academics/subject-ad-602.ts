/**
 * Academics - 6th-semester RGPV subject: AD-602 Computer Networks.
 *
 * Same structure as the other subject files: 5 units, one chapter per unit,
 * numbered sections. Each section carries 3-5 body paragraphs with worked
 * examples, key terms, a table or code sample, a diagram, a callout and three
 * exam questions (one full 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ad602: AcademicSubject = {
  id: "ad-602",
  code: "AD-602",
  title: "Computer Networks",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "The complete visual guide to computer networks: OSI and TCP/IP models, transmission media, data link protocols, IPv4 and IPv6, routing algorithms, TCP congestion control, and the application layer with security basics.",
  description:
    "Five units walk from the layered architecture that organises all networking - OSI versus TCP/IP, media, multiplexing and switching - through the data link layer with framing, CRC and ALOHA/CSMA, into the network layer with subnetting, distance-vector and link-state routing and IPv6, up the transport stack to UDP and TCP congestion control, and finishes at DNS, HTTP, email, firewalls and cryptography. Every section pairs theory with a worked example you can reproduce in the exam hall.",
  accentColor: "#22d3ee",
  emoji: "CN",
  unitCount: 5,
  totalSections: 41,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Foundations: Models, Media, Multiplexing and Switching",
      summary:
        "What networks are for, how LANs and WANs differ, the OSI and TCP/IP reference models layer by layer, guided and wireless transmission media, multiplexing schemes, and the three switching techniques that move data from source to destination.",
      chapter: {
        number: "01",
        title: "Network Architecture and the Physical Foundation",
        intro:
          "Unit I builds the vocabulary of the whole subject: why we layer, what each OSI and TCP/IP layer is responsible for, which physical media carry the bits, how FDM/TDM/WDM share a link, and how circuit, message and packet switching move data end to end.",
        inOneBreath:
          "Networks exist to share resources and communicate reliably; topology decides cost and fault tolerance; OSI has 7 layers, TCP/IP has 5 - same philosophy, different packaging; twisted pair, coax and fibre carry guided signals while radio, microwave and infrared go wireless; FDM splits frequency, TDM splits time, WDM splits wavelength; circuit switching reserves a path, packet switching shares one.",
        sections: [
          {
            number: "1.1",
            title: "Uses of networks and LAN, MAN, WAN",
            body: [
              "A computer network is a set of interconnected autonomous computers that exchange data using agreed protocols. 'Autonomous' is the key word: each machine can run on its own, and the interconnection only adds the ability to share resources and communicate. Networks exist for five classical reasons: resource sharing (one printer, many users), data and application sharing (central database, cloud software), communication (email, chat, VoIP), cost saving (small clients plus a powerful server beats many mainframes), and scalability (add machines without redesign). The Internet is the union of millions of such networks into a global internetwork.",
              "Networks are classified by geographic scale, and the classification determines both the technology and the organisation that owns it. A LAN (Local Area Network) covers a single room to a single campus - up to about 1 km - is privately owned, uses broadcast technology such as Ethernet or Wi-Fi, and runs at 100 Mbps to 10 Gbps with very low error rates. A MAN (Metropolitan Area Network) spans a city, roughly 5 to 50 km, often built with optical fibre rings or metro Ethernet, and interconnects several LANs. A WAN (Wide Area Network) spans countries and continents, is built from leased carrier links using switching (not broadcast), and is typically owned by telecom operators that sell capacity to many customers.",
              "Worked example: a college has three labs of 40 PCs each on one floor, connected to a central server room. Each lab is a LAN (one Ethernet switch, 1 Gbps); the three lab switches connect to a backbone switch in the server room forming a campus LAN at 10 Gbps. If the college also connects its two city branches 20 km apart through an ISP's fibre ring, that ring is a MAN; if a fourth campus exists in another city reached over a leased line, the overall internetwork behaves as a WAN. The same organisation can therefore contain all three scales at once - the labels describe links, not the organisation.",
              "The choice of scale brings trade-offs. LANs give the highest bandwidth and lowest latency but are limited in reach; WANs give reach but each packet crosses switching equipment owned by third parties, so delay is higher, error rates are higher, and cost is paid per leased capacity. MANs sit between the two and are usually the cheapest way to interconnect several LANs inside one city. In exam answers, always attach the three identifying properties to each type: coverage range, ownership, and transmission technology (broadcast for LAN/MAN, point-to-point switching for WAN).",
            ],
            keyTerms: [
              { term: "Autonomous computers", definition: "Machines that work independently and are only interconnected for data exchange - the defining property of a network." },
              { term: "LAN", definition: "Local Area Network: up to about 1 km, privately owned, broadcast technology, high speed and low error rate." },
              { term: "MAN", definition: "Metropolitan Area Network: city-wide (5-50 km), usually fibre-based, interconnects LANs." },
              { term: "WAN", definition: "Wide Area Network: country or continent scale, built from carrier-owned switched point-to-point links." },
            ],
            table: {
              caption: "LAN vs MAN vs WAN at a glance.",
              headers: ["Property", "LAN", "MAN", "WAN"],
              rows: [
                ["Range", "Room to campus (up to 1 km)", "City (5-50 km)", "Country / globe"],
                ["Ownership", "Single organisation (private)", "Single or consortium", "Telecom carriers (public)"],
                ["Technology", "Ethernet, Wi-Fi (broadcast)", "Metro Ethernet, fibre ring", "Switched leased lines"],
                ["Speed", "100 Mbps - 10 Gbps", "100 Mbps - 1 Gbps", "2 Mbps - 100 Gbps"],
                ["Error rate", "Lowest", "Moderate", "Highest"],
                ["Example", "College lab", "City cable network", "Internet backbone"],
              ],
            },
            callout: {
              type: "tip",
              title: "Three properties answer every 'distinguish' question",
              body: "Whenever a question asks you to distinguish LAN, MAN and WAN, answer in terms of coverage range, ownership and transmission technology. Naming only the range earns at most half the marks - the technology difference (broadcast vs switched) is what examiners look for.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing a network type by scale",
              caption:
                "The same organisation usually contains all three scales - each link is classified by its own reach.",
              start: "How far apart are the machines?",
              branches: [
                { label: "LAN: one room to campus", outcome: "Ethernet or Wi-Fi switch, privately owned, gigabit speeds", good: true },
                { label: "MAN: across a city", outcome: "Fibre ring or metro Ethernet interconnecting LANs", good: true },
                { label: "WAN: across cities or countries", outcome: "Switched leased carrier links, paid per capacity", good: true },
              ],
            },
            bullets: [
              "Network = interconnected autonomous computers sharing resources via protocols.",
              "Motivations: resource sharing, data sharing, communication, cost saving, scalability.",
              "LAN: up to 1 km, private, broadcast (Ethernet/Wi-Fi), 100 Mbps to 10 Gbps.",
              "MAN: 5-50 km, city scale, typically fibre, interconnects LANs.",
              "WAN: country/globe scale, carrier-owned switched point-to-point links.",
              "One organisation commonly runs LAN + MAN + WAN simultaneously.",
              "Scale drives the trade-off: LAN = speed, WAN = reach, both cost and delay grow with distance.",
            ],
            examQuestions: [
              {
                q: "What is a computer network? Explain the uses of computer networks and distinguish LAN, MAN and WAN with respect to range, ownership and technology.",
                marks: 7,
                outline: [
                  "Define a network as interconnected autonomous computers using common protocols.",
                  "List uses: resource sharing, data sharing, communication, cost, scalability.",
                  "LAN: range up to 1 km, private ownership, broadcast Ethernet/Wi-Fi, high speed.",
                  "MAN: 5-50 km, city scale, fibre-based, interconnects LANs.",
                  "WAN: country/globe scale, carrier-owned switched links.",
                  "Give one real example for each (lab, city branch ring, Internet backbone).",
                  "Conclude that one organisation can contain all three scales.",
                ],
              },
              {
                q: "Why are WANs built with switching technology while LANs use broadcasting?",
                marks: 3,
                outline: [
                  "In a LAN all stations share one medium, so a transmitted frame reaches everyone.",
                  "WAN links are expensive point-to-point leased lines; broadcasting to every site is wasteful.",
                  "Switching forwards packets only along the path toward the destination, saving capacity.",
                ],
              },
              {
                q: "Define the term 'autonomous computers' in the definition of a network.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Network topologies",
            body: [
              "Topology is the geometric arrangement of links and nodes - the shape of the network, independent of the physical wiring detail. Five basic topologies dominate. In a bus topology all stations tap into one backbone cable; every transmission travels the whole cable and each station filters for its own address; terminators absorb signals at both ends. In a star topology every station has a dedicated link to a central hub or switch; all traffic passes through the centre. In a ring topology each station connects to exactly two neighbours and frames circulate in one direction, each station acting as a repeater. In a mesh topology every pair of stations has a dedicated point-to-point link; full mesh of n nodes needs n(n-1)/2 links. A tree topology is a hierarchy of stars joined to a backbone, and a hybrid mixes any of the above.",
              "The mesh topology shows the algebra of the cost trade-off most clearly. For n = 6 stations a full mesh needs 6 x 5 / 2 = 15 duplex links and 5 network interfaces per station - expensive cabling, but each link carries only the traffic of its own pair, so there is no contention, privacy is perfect, and the failure of one link affects only that pair: 15 links must fail before the network breaks. The same 6 stations on a bus need 1 cable and 1 tap per station - cheapest possible wiring, but a single cable cut kills the entire network and heavy contention limits throughput. Star falls between: n links, one central device whose failure is fatal but whose replacement is trivial.",
              "Worked example: an office of 8 PCs must survive any single cable failure. Star with a central switch: 8 links; if the switch is duplicated (redundant switch) every link failure is healed by switching to the spare hub port - total 8 links plus one device. Full mesh of the same 8 PCs needs 8 x 7 / 2 = 28 links. A practical answer is a partial mesh: keep the star, but add 2 direct links between the most critical servers - 10 links total for most of the resilience at a tenth of the mesh cost. Real networks are almost always such hybrids; 'topology' is a design vocabulary, not a rule book.",
              "Advantages and limitations to memorise per topology: bus - cheap, easy to install, but a backbone fault kills everything and performance degrades with load; star - easy fault isolation, centralised management, but hub/switch is a single point of failure and each station needs its own cable run; ring - fair access under load and predictable delay, but one node failure can break the loop unless a dual ring is used; mesh - highest reliability, privacy and no traffic problems, but n(n-1)/2 links and n-1 I/O ports per machine make full mesh practical only for small backbones.",
            ],
            keyTerms: [
              { term: "Topology", definition: "The geometric arrangement of links and nodes in a network." },
              { term: "Bus topology", definition: "All stations share one backbone cable with terminators at both ends." },
              { term: "Star topology", definition: "Every station has a dedicated link to a central hub or switch." },
              { term: "Mesh topology", definition: "Every pair of nodes has a dedicated point-to-point link; full mesh of n nodes uses n(n-1)/2 links." },
            ],
            table: {
              caption: "Topology comparison - the standard exam table.",
              headers: ["Topology", "Links for n nodes", "Strength", "Weakness"],
              rows: [
                ["Bus", "1 backbone cable", "Cheapest wiring", "Backbone cut kills all; contention"],
                ["Star", "n links + 1 hub", "Easy fault isolation", "Hub is single point of failure"],
                ["Ring", "n links in a loop", "Fair access, predictable delay", "One node failure can break the loop"],
                ["Mesh", "n(n-1)/2", "Max reliability and privacy", "Huge cabling and port cost"],
                ["Tree", "hierarchical stars", "Scalable, segmentable", "Root/backbone failure splits network"],
              ],
            },
            callout: {
              type: "exam",
              title: "Compute, do not guess",
              body: "Questions almost always ask 'how many links for a full mesh of n nodes'. Write n(n-1)/2 and evaluate it for the given n - for n = 10 that is 45 links. Also know that each node needs n-1 I/O ports in a full mesh; port cost is the second half of the marks.",
            },
            diagram: {
              kind: "matrix",
              title: "Topology cost versus fault tolerance",
              caption:
                "Top-left is cheapest but weakest, bottom-right is most robust but dearest - every real design sits somewhere in between.",
              axes: { x: "cost of cabling (low to high)", y: "fault tolerance (low to high)" },
              quadrants: [
                { label: "Bus", note: "one cable, zero redundancy" },
                { label: "Tree", note: "cheap but backbone is critical" },
                { label: "Ring", note: "single loop, dual ring adds tolerance" },
                { label: "Mesh", note: "n(n-1)/2 links, survives any link cut" },
              ],
            },
            bullets: [
              "Topology = shape of the network; five basics: bus, star, ring, mesh, tree; hybrids combine them.",
              "Bus: cheapest, terminators required, backbone fault is fatal.",
              "Star: n links plus central device; isolation easy; hub failure fatal.",
              "Ring: each node repeats to two neighbours; dual ring restores tolerance.",
              "Mesh: n(n-1)/2 duplex links, n-1 ports per node, best reliability and privacy.",
              "Star of 6 nodes = 6 links; full mesh of 6 nodes = 15 links.",
              "Real networks are partial-mesh hybrids: full reliability only where it pays.",
            ],
            examQuestions: [
              {
                q: "Explain bus, star, ring and mesh topologies with diagrams. Compare them on cost, reliability and scalability, and compute the number of links in a full mesh of 10 nodes.",
                marks: 7,
                outline: [
                  "Define topology and draw all four shapes.",
                  "Bus: shared backbone, terminators, cheap but backbone fault fatal.",
                  "Star: central hub, easy isolation, hub is single point of failure.",
                  "Ring: unidirectional circulation, fair access, node failure risk.",
                  "Mesh: dedicated links, maximum reliability, n(n-1)/2 cabling and n-1 ports.",
                  "Compute 10 x 9 / 2 = 45 links for the mesh.",
                  "Close with a one-line cost-versus-reliability comparison.",
                ],
              },
              {
                q: "A full mesh network of 6 nodes uses 15 links. How many links does a full mesh of 12 nodes need?",
                marks: 3,
                outline: [
                  "Formula n(n-1)/2.",
                  "12 x 11 / 2 = 66 links.",
                ],
              },
              {
                q: "Which topology has a single point of failure at the centre, and why is it still the most popular?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Layered tasks and the OSI reference model",
            body: [
              "Networking is too complex to design as one monolithic program, so it is organised as a stack of layers: each layer offers services to the layer above using the services of the layer below, communicates with its peer layer using a protocol, and adds its own header to the data as it descends. This is the sender-receiver-receiver-sender picture: the sender's layer N appends header Hn and passes the packet down; each intermediate hop on the way strips and rebuilds the lower-layer headers; at the receiver the same headers are peeled off in reverse order until the application receives exactly the bytes the sender's application produced. Layering isolates change (swap fibre for copper without touching software), simplifies design (each layer solves one problem), and enables interoperability between vendors.",
              "The OSI (Open Systems Interconnection) reference model, standardised by ISO in 1984, defines seven layers. Layer 1 Physical transmits raw bits as electrical, optical or radio signals and defines voltage, connector and bit timing. Layer 2 Data Link frames the bits, performs physical (MAC) addressing, error detection and flow control over a single hop. Layer 3 Network routes packets across multiple hops using logical (IP) addresses. Layer 4 Transport gives end-to-end process-to-process delivery with optional reliability, segmentation and flow control. Layer 5 Session opens, manages and closes dialogues, providing synchronisation points. Layer 6 Presentation translates between machine formats: encoding, compression and encryption. Layer 7 Application is the network interface for user programs - file transfer, mail, browsing.",
              "Memory aid, top-down: 'All People Seem To Need Data Processing'. Two mnemonics bottom-up are also common: 'Please Do Not Throw Sausage Pizza Away'. In the exam the layers must be listed in order with one job sentence each, and the classic traps are assigning routing to the data link layer (it belongs to network) and assigning encryption to the application layer (it belongs to presentation). Note the boundaries: the lower three layers (physical, data link, network) exist at every intermediate node along the path, while layers 4 to 7 run only at the end hosts - that is exactly why they are called end-to-end layers.",
              "Worked example: sending an email. The application layer hands the message to the stack; presentation compresses and encrypts it; session establishes the dialogue with the mail server; transport splits it into segments numbered for reassembly; network adds source and destination IP addresses and chooses the route hop by hop; data link wraps each segment in a frame with MAC addresses for the first hop; physical converts the frame to signals on the cable. Each router along the way rebuilds only layers 1-3, re-addressing the frame for the next hop, while the end-to-end headers from layers 4-7 remain untouched until the receiver. OSI was never fully implemented as a protocol suite, but its vocabulary names every network discussion even today.",
            ],
            keyTerms: [
              { term: "Layering", definition: "Organising network functions into stacked layers, each providing services to the layer above." },
              { term: "Peer protocols", definition: "Rules by which layer N on the sender talks to layer N on the receiver." },
              { term: "Encapsulation", definition: "Each layer adding its own header (and sometimes trailer) to the data as it moves down the stack." },
              { term: "OSI model", definition: "ISO's 7-layer reference model: Physical, Data Link, Network, Transport, Session, Presentation, Application." },
            ],
            table: {
              caption: "The seven OSI layers with data units and addresses.",
              headers: ["Layer", "Job in one sentence", "Data unit", "Address used"],
              rows: [
                ["7 Application", "User services: mail, files, browsing", "Message", "none"],
                ["6 Presentation", "Translation, compression, encryption", "Message", "none"],
                ["5 Session", "Dialogue control and synchronisation", "Message", "none"],
                ["4 Transport", "End-to-end process delivery, reliability", "Segment", "Port numbers"],
                ["3 Network", "Routing across multiple hops", "Packet / Datagram", "IP (logical) address"],
                ["2 Data Link", "Framing, hop-to-hop delivery, error control", "Frame", "MAC (physical) address"],
                ["1 Physical", "Raw bit transmission over a medium", "Bit", "none"],
              ],
            },
            callout: {
              type: "warning",
              title: "Routing is layer 3, addressing is split",
              body: "The most common mark-losers: saying routing is done at the data link layer, or that MAC addresses exist at the network layer. Routing and IP addressing belong to the network layer; MAC (physical) addressing and framing belong to the data link layer; and layers 5-7 (session, presentation, application) run only on end hosts, never on routers.",
            },
            diagram: {
              kind: "layers",
              title: "OSI stack with data units",
              caption:
                "Index 0 is the top of the stack; data units descend from message to bit as headers are added.",
              layers: [
                { label: "7 Application", note: "mail, HTTP, FTP - user programs" },
                { label: "6 Presentation", note: "encryption, compression, encoding" },
                { label: "5 Session", note: "dialogue and synchronisation" },
                { label: "4 Transport", note: "segments, ports, end-to-end delivery" },
                { label: "3 Network", note: "packets, IP addresses, routing" },
                { label: "2 Data Link", note: "frames, MAC addresses, error control" },
                { label: "1 Physical", note: "raw bits on the medium" },
              ],
            },
            bullets: [
              "Layering: each layer serves the layer above and uses the layer below; peers talk by protocol.",
              "Encapsulation: header added going down, removed going up.",
              "Physical: bits and signals; Data Link: frames and MAC addresses; Network: packets and IP routing.",
              "Transport: segments and port numbers, process-to-process delivery.",
              "Session: dialogue management; Presentation: translation/compression/encryption; Application: user services.",
              "Layers 1-3 exist on every router; layers 4-7 only on end hosts (end-to-end layers).",
              "Mnemonic top-down: All People Seem To Need Data Processing.",
            ],
            examQuestions: [
              {
                q: "Explain the OSI reference model. Describe the function of each of its seven layers with the data unit and addressing used at each layer.",
                marks: 7,
                outline: [
                  "State the purpose of layering and encapsulation.",
                  "Physical: raw bits, signals, connectors.",
                  "Data Link: framing, MAC addressing, error and flow control per hop.",
                  "Network: logical addressing and routing across multiple hops.",
                  "Transport: segmentation, ports, end-to-end reliability.",
                  "Session, Presentation, Application: dialogue control, translation/encryption, user services.",
                  "Note which layers run on intermediate routers and which only on hosts.",
                ],
              },
              {
                q: "Why do layers 4 to 7 not need to be implemented in a router?",
                marks: 3,
                outline: [
                  "Routers only forward packets hop to hop.",
                  "Hop-to-hop decisions need layers 1-3 only.",
                  "Layers 4-7 concern the two end processes, so only end hosts run them.",
                ],
              },
              {
                q: "At which OSI layer does encryption normally belong, and why?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "The TCP/IP protocol suite",
            body: [
              "TCP/IP is the protocol suite the Internet actually runs on, developed from ARPANET research in the 1970s and standardised as RFCs. Where OSI is a reference vocabulary of seven layers, TCP/IP is a working stack usually drawn with four layers - Application, Transport, Internet (Network), Network Access (Link) - or equivalently five layers when the physical layer is shown separately. The philosophy differs too: OSI was designed top-down by committee before implementation, TCP/IP grew bottom-up out of running code, which is why TCP/IP became the deployed standard while OSI survives as the language used to describe it.",
              "Mapping the two models: TCP/IP application layer covers OSI session + presentation + application; TCP/IP transport matches OSI transport with TCP (reliable, connection-oriented, byte-stream) and UDP (unreliable, connectionless, datagram); the internet layer is OSI's network layer running IP with the helper protocols ICMP, ARP and routing protocols; the network access layer covers OSI data link + physical, and is deliberately left unspecified - TCP/IP runs over Ethernet, Wi-Fi, fibre, anything. Key protocols at each layer: HTTP, FTP, SMTP, DNS, Telnet at application; TCP and UDP at transport; IP, ICMP, ARP at internet; Ethernet and Wi-Fi at network access.",
              "Worked example: one HTTP page fetch through the TCP/IP stack. The browser creates an HTTP request; TCP splits it into segments, numbering bytes and opening a connection to port 80; IP wraps each segment in a datagram addressed to the server's IP address, choosing the first hop; Ethernet frames each datagram with the MAC address of the local gateway and transmits bits. Each router forwards the datagram using only the IP layer, re-writing the frame for the next hop; at the server TCP reassembles and acknowledges the byte stream, and the application reads the request. The same four-layer journey happens in reverse for the response - and this exact trace is a favourite 7-mark answer.",
              "Strengths and limitations: TCP/IP is open (publicly documented RFCs), scalable (its addressing and routing survived growth from a few dozen to billions of hosts), independent of the underlying hardware, and addressed end-to-end (each process is reached by an IP address plus port number). Its weaknesses are inherited from the design era: the 32-bit IPv4 address space is exhausted, security was retrofitted (IPsec came later), and TCP/IP does not separate session and presentation functions, pushing format conversion into applications. Neither model is 'correct' - OSI is the teaching vocabulary, TCP/IP is the deployed reality; exam answers should say exactly that.",
            ],
            keyTerms: [
              { term: "TCP/IP", definition: "The four/five-layer protocol suite of the Internet: Application, Transport, Internet, Network Access." },
              { term: "IP", definition: "Internetworking Protocol - the connectionless network-layer protocol that routes datagrams end to end." },
              { term: "TCP vs UDP", definition: "TCP is reliable, connection-oriented and byte-stream oriented; UDP is connectionless and unreliable but low overhead." },
              { term: "RFC", definition: "Request for Comments - the public standards documents that define Internet protocols." },
            ],
            table: {
              caption: "OSI layers mapped onto the TCP/IP suite.",
              headers: ["TCP/IP layer", "OSI layers covered", "Representative protocols"],
              rows: [
                ["Application", "7, 6, 5", "HTTP, FTP, SMTP, DNS, Telnet"],
                ["Transport", "4", "TCP, UDP, SCTP"],
                ["Internet", "3", "IP (v4/v6), ICMP, ARP, routing protocols"],
                ["Network Access", "2, 1", "Ethernet, Wi-Fi, PPP, DSL"],
              ],
            },
            callout: {
              type: "tip",
              title: "Say both directions of the mapping",
              body: "When asked to compare OSI and TCP/IP, map in both directions: TCP/IP application = OSI 5+6+7, and OSI transport splits into TCP and UDP. Also state the philosophical difference - OSI designed before implemented, TCP/IP implemented before standardised - for the final marks.",
            },
            diagram: {
              kind: "compare",
              title: "OSI reference model vs TCP/IP suite",
              caption:
                "Same ordering of concerns; TCP/IP collapses the upper three OSI layers and leaves the bottom two open.",
              left: {
                heading: "OSI (7 layers)",
                items: [
                  "7 Application / 6 Presentation / 5 Session",
                  "4 Transport",
                  "3 Network",
                  "2 Data Link / 1 Physical",
                  "Designed by ISO committee (1984), reference vocabulary",
                ],
              },
              right: {
                heading: "TCP/IP (4-5 layers)",
                items: [
                  "Application: HTTP, SMTP, DNS (absorbs 5-7)",
                  "Transport: TCP (reliable) and UDP (fast)",
                  "Internet: IP, ICMP, ARP",
                  "Network Access: Ethernet, Wi-Fi - left open",
                  "Grew from ARPANET, deployed reality of the Internet",
                ],
              },
            },
            bullets: [
              "TCP/IP layers: Application, Transport, Internet, Network Access (Physical shown separately when 5 layers).",
              "Application = OSI session + presentation + application combined.",
              "Transport offers TCP (reliable, connection-oriented) and UDP (unreliable, connectionless).",
              "Internet layer: IP datagrams plus ICMP, ARP and routing protocols.",
              "Network access layer is deliberately unspecified - IP runs over anything.",
              "Each process is identified end-to-end by IP address + port number.",
              "Strengths: open RFCs, scalability, hardware independence; weakness: exhausted IPv4 space, retrofitted security.",
            ],
            examQuestions: [
              {
                q: "Compare the OSI reference model with the TCP/IP protocol suite, layer by layer, and discuss why TCP/IP became the dominant deployed suite.",
                marks: 7,
                outline: [
                  "Draw the OSI 7-layer stack beside the TCP/IP 4-layer stack.",
                  "Map TCP/IP application onto OSI 5, 6 and 7.",
                  "Show transport matching with TCP and UDP replacing a single OSI layer.",
                  "Internet layer = OSI network with IP, ICMP, ARP.",
                  "Network access covers OSI 1 and 2 and is left open.",
                  "Explain implementation-first evolution, openness of RFCs, scalability.",
                  "Note weaknesses: IPv4 exhaustion, retrofitted security.",
                ],
              },
              {
                q: "List four application-layer protocols of TCP/IP and the service each provides.",
                marks: 3,
                outline: [
                  "HTTP - web page transfer; FTP - file transfer; SMTP - mail transfer; DNS - name resolution.",
                ],
              },
              {
                q: "Which two transport protocols does TCP/IP define and how do they differ in one line each?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Guided transmission media",
            body: [
              "Transmission media carry signals from sender to receiver and divide into guided (solid conductor: twisted pair, coaxial cable, optical fibre) and unguided (free space: radio, microwave, infrared). Three properties matter: bandwidth (hence data rate), attenuation (signal weakening with distance) and interference (pickup of external noise). Guided media differ in how well each balances these: twisted pair is cheap but noisy, coaxial cable resists interference better, fibre offers near-infinite bandwidth and total immunity to electromagnetic interference.",
              "Twisted pair consists of two insulated copper wires twisted in a helix; twisting cancels induced noise because each wire picks up opposite interference. UTP (unshielded) is the standard of LAN cabling: Cat 5e carries 1 Gbps to 100 m, Cat 6a carries 10 Gbps to 100 m; STP adds a metal shield for noisy environments. Coaxial cable places a central conductor inside an insulator, a braided shield and an outer jacket; the shield makes it usable up to several hundred MHz, which historically fed cable TV and 10 Mbps Ethernet (10Base2/10Base5). Optical fibre transmits light pulses through a glass core surrounded by a cladding of lower refractive index; total internal reflection traps the light, giving attenuation near 0.2 dB/km, immunity to EMI, no crosstalk and no tapping - ideal for backbone links.",
              "Two fibre modes exist: single-mode fibre (SMF) has a core around 8-10 microns and sends one light ray down a laser path for tens of kilometres; multimode fibre (MMF) has a 50-62.5 micron core through which many rays bounce at different angles, so rays arrive at slightly different times (modal dispersion) limiting MMF to a few hundred metres - hence MMF inside buildings and SMF between cities. Worked example: a fibre link with attenuation 0.2 dB/km carrying 10 km loses 2 dB, so a 1 mW (0 dBm) transmitter arrives at about 0.63 mW (-2 dBm). The same 10 km over Cat 6 copper would be impossible - copper loses several dB per 100 m and needs repeaters roughly every 100 m.",
              "Advantages and limitations: twisted pair is the cheapest and easiest to install but limited to about 100 m runs and vulnerable to EMI; coax supports longer runs and higher frequencies but is bulky and pricier to terminate; fibre gives enormous bandwidth, low loss and security but needs precise connectors, laser/photodiode electronics, and is harder to repair in the field. Selection follows distance, required rate and environment: copper inside a desk, fibre across a campus or under an ocean (where a single fibre pair can carry tens of Tbps with wavelength-division multiplexing).",
            ],
            keyTerms: [
              { term: "UTP", definition: "Unshielded Twisted Pair - copper wires twisted to cancel noise; Cat 5e/6/6a grades for LANs." },
              { term: "Coaxial cable", definition: "Central conductor inside a shielded jacket; usable to several hundred MHz." },
              { term: "Total internal reflection", definition: "Light stays inside the fibre core because the cladding has a lower refractive index." },
              { term: "Single-mode vs multimode", definition: "SMF: one ray, laser, long haul; MMF: many rays, LED, short haul with modal dispersion." },
            ],
            table: {
              caption: "Guided media compared.",
              headers: ["Media", "Typical rate", "Max useful run", "Interference immunity", "Relative cost"],
              rows: [
                ["UTP Cat 6", "1-10 Gbps", "100 m", "Low (twisting only)", "Lowest"],
                ["STP", "1-10 Gbps", "100 m", "Medium (shield)", "Low"],
                ["Coaxial", "10 Mbps - 1 Gbps", "185-500 m (classic Ethernet)", "High (shield)", "Medium"],
                ["Multimode fibre", "1-100 Gbps", "300-550 m", "Total (light)", "High"],
                ["Single-mode fibre", "10 Gbps - Tbps", "40-100 km", "Total (light)", "Highest"],
              ],
            },
            callout: {
              type: "exam",
              title: "Quote numbers",
              body: "Examiners reward concrete figures: twisted pair 100 m, fibre attenuation about 0.2 dB/km, single-mode core about 10 microns, multimode 50-62.5 microns, modal dispersion as the reason MMF is short-range. A worked attenuation calculation (0.2 dB/km x 10 km = 2 dB) converts a definition answer into a 7-mark answer.",
            },
            diagram: {
              kind: "compare",
              title: "Copper versus optical fibre",
              caption:
                "Electrons in copper versus photons in glass - the physics explains every row of the comparison table.",
              left: {
                heading: "Copper (UTP / coax)",
                items: [
                  "Electrical signals, vulnerable to EMI",
                  "Attenuation forces repeaters every ~100 m",
                  "Cheap connectors and tools",
                  "Rates to ~10 Gbps short range",
                  "Can be tapped electrically",
                ],
              },
              right: {
                heading: "Optical fibre",
                items: [
                  "Light pulses, immune to EMI",
                  "Attenuation ~0.2 dB/km, tens of km unaided",
                  "Precise laser/photodiode termination",
                  "Rates to Tbps with WDM",
                  "Near impossible to tap - secure",
                ],
              },
            },
            bullets: [
              "Guided media: twisted pair, coaxial cable, optical fibre.",
              "Twisted pair: helical twist cancels induced noise; UTP for LANs, STP adds shield.",
              "Cat 5e = 1 Gbps, Cat 6a = 10 Gbps, both limited to 100 m.",
              "Coax: braided shield gives hundreds of MHz; classic cable TV and 10Base2 Ethernet.",
              "Fibre: total internal reflection traps light in the core; 0.2 dB/km attenuation.",
              "SMF (laser, ~10 micron core, long haul) vs MMF (LED, 50-62.5 micron core, modal dispersion, short haul).",
              "Worked loss: 0.2 dB/km x 10 km = 2 dB, 1 mW arrives as ~0.63 mW.",
              "Selection = distance + data rate + environment (EMI, security).",
            ],
            examQuestions: [
              {
                q: "Explain the construction and characteristics of twisted pair, coaxial cable and optical fibre. Compare bandwidth, attenuation and interference immunity, and state where each is used.",
                marks: 7,
                outline: [
                  "Twisted pair: two twisted conductors, twist cancels noise; UTP/STP, 100 m, Cat grades.",
                  "Coax: core + insulator + braided shield; hundreds of MHz; cable TV, classic Ethernet.",
                  "Fibre: core, cladding, total internal reflection; 0.2 dB/km; immunity to EMI.",
                  "SMF vs MMF and modal dispersion.",
                  "Worked attenuation: 0.2 dB/km x 10 km = 2 dB loss.",
                  "Applications: copper to the desk, fibre for backbone and long haul.",
                  "Cost and termination difficulty trade-off.",
                ],
              },
              {
                q: "Why is multimode fibre limited to short distances while single-mode fibre spans cities?",
                marks: 3,
                outline: [
                  "MMF core is wide, many rays travel different path lengths.",
                  "Different arrival times = modal dispersion, smearing pulses.",
                  "SMF sends one ray straight down the core, so no dispersion.",
                ],
              },
              {
                q: "What does the twist in twisted-pair cable achieve?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "Wireless transmission, capacity limits and multiplexing",
            body: [
              "Unguided media carry electromagnetic waves through air or vacuum. Radio waves (below about 1 GHz) are omnidirectional, penetrate walls, and serve broadcast radio/TV and low-rate telemetry; microwave (1-300 GHz) is focused in narrow beams by dish antennas, needs line of sight, and feeds point-to-point links and satellite channels (geostationary satellites at 36,000 km add about 270 ms round-trip delay); infrared is short-range, blocked by walls, used in remote controls and short device pairing. Wireless adds three impairments absent in guided media: multipath (reflections arrive late and interfere), fading (signal strength fluctuates), and open access to eavesdroppers - hence encryption and spread spectrum.",
              "Channel capacity has two hard limits every exam expects. Nyquist for a noiseless channel: C = 2B log2(L), where B is bandwidth in Hz and L the number of signal levels. Shannon for a noisy channel: C = B log2(1 + S/N), with S/N as a power ratio (dB version uses S/N = 10^(dB/10)). Worked example 1: a 3000 Hz telephone channel using 8 signal levels gives C = 2 x 3000 x log2(8) = 2 x 3000 x 3 = 18,000 bps. Worked example 2: the same 3000 Hz channel with SNR 30 dB: S/N = 1000, C = 3000 x log2(1001) = 3000 x 9.97 = about 29,900 bps - Shannon is the ceiling no modulation can exceed, so pushing more bits per second through a noisy channel means raising bandwidth or SNR.",
              "Multiplexing lets one link carry many signals. Frequency Division Multiplexing (FDM) assigns each channel a carrier frequency band with guard bands to prevent overlap - analogue radio and the classic telephone trunks. Time Division Multiplexing (TDM) gives each channel the whole bandwidth for a fixed time slot; synchronous TDM wastes idle slots, statistical TDM fills slots on demand. Worked example: four 1 Mbps streams TDM-multiplexed into one link need frame time slots of equal length, so the link must run at 4 Mbps and each slot carries 1/4 of the frame; if the TDM frame is 125 microseconds (8000 frames/s, the voice standard), each slot carries 250 bits and each voice channel is digitised at 64 kbps (8 bits x 8000 samples/s). Wavelength Division Multiplexing (WDM) is FDM applied to optical fibre - many colours of light in one fibre, each at 10-100 Gbps; dense WDM packs 100+ wavelengths per fibre pair.",
              "Trade-offs: FDM needs analogue carrier hardware and guard bands but each channel runs continuously; TDM is purely digital and cheap in silicon but requires synchronised clocks and buffer memory, and a silent channel wastes its slot unless statistical TDM is used; WDM inherits fibre's huge bandwidth but optical components (tunable lasers, filters, amplifiers) are costly. Spread spectrum techniques (frequency hopping, direct sequence) deliberately spread a narrowband signal over wide bandwidth for interference resistance - the base of Wi-Fi and CDMA - trading spectral efficiency for robustness, which is exactly the wireless bargain.",
            ],
            keyTerms: [
              { term: "Line of sight", definition: "Microwave propagation requirement: antennas must see each other unobstructed." },
              { term: "Nyquist rate C = 2B log2(L)", definition: "Maximum data rate of a noiseless channel of bandwidth B with L signal levels." },
              { term: "Shannon capacity C = B log2(1 + S/N)", definition: "Maximum error-free rate of a noisy channel; an absolute ceiling." },
              { term: "TDM slot", definition: "Fixed time interval in a TDM frame granted to one multiplexed channel." },
            ],
            table: {
              caption: "Multiplexing schemes compared.",
              headers: ["Scheme", "Shared resource", "Needs", "Typical use"],
              rows: [
                ["FDM", "Frequency bands + guard bands", "Analogue carriers", "Radio, TV, old telephone trunks"],
                ["TDM", "Time slots per frame", "Synchronised clocks", "Digital voice (64 kbps slots), E1/T1"],
                ["Statistical TDM", "Slots filled on demand", "Addressing per slot", "Data networks, statistical muxes"],
                ["WDM / DWDM", "Light wavelengths on fibre", "Tunable lasers, filters", "Backbone fibre, submarine cables"],
              ],
            },
            callout: {
              type: "exam",
              title: "Nyquist and Shannon are one-liner marks",
              body: "Write the formula, substitute, evaluate: Nyquist C = 2 x 3000 x log2(8) = 18000 bps; Shannon with 30 dB means S/N = 1000, C = 3000 x log2(1001) = about 29900 bps. State explicitly that Shannon's limit cannot be exceeded by any coding scheme - that sentence earns the conceptual mark.",
            },
            diagram: {
              kind: "pipeline",
              title: "Synchronous TDM frame in motion",
              caption:
                "Four 64 kbps voice channels share one line: the frame repeats every 125 microseconds, each slot carrying 8 bits.",
              stages: [
                { label: "Slot 1", note: "channel A - 8 bits" },
                { label: "Slot 2", note: "channel B - 8 bits" },
                { label: "Slot 3", note: "channel C - 8 bits" },
                { label: "Slot 4", note: "channel D - 8 bits" },
                { label: "Frame repeats", note: "8000 frames/s = 2.048 Mbps for 4 x 64 kbps + framing" },
              ],
            },
            bullets: [
              "Radio: omnidirectional, penetrates walls, below ~1 GHz; microwave: focused beam, line of sight, 1-300 GHz.",
              "Geostationary satellite adds ~270 ms round-trip delay.",
              "Wireless impairments: multipath, fading, open eavesdropping.",
              "Nyquist (noiseless): C = 2B log2(L); 3000 Hz, L = 8 gives 18000 bps.",
              "Shannon (noisy): C = B log2(1 + S/N); 30 dB = S/N 1000, 3000 Hz gives ~29900 bps.",
              "FDM splits frequency with guard bands; TDM splits time; WDM splits optical wavelength.",
              "Four 1 Mbps channels need a 4 Mbps TDM link; 125 microsecond frame = 8000 frames/s.",
              "64 kbps voice = 8 bits x 8000 samples/s - the origin of the E1 rate 2.048 Mbps.",
            ],
            examQuestions: [
              {
                q: "State and apply the Nyquist and Shannon capacity theorems. A channel of 3000 Hz bandwidth uses 8 signal levels and has an SNR of 30 dB - find both capacity limits and explain the difference.",
                marks: 7,
                outline: [
                  "State Nyquist C = 2B log2(L) for noiseless channels.",
                  "Substitute: 2 x 3000 x log2(8) = 18000 bps.",
                  "State Shannon C = B log2(1 + S/N) for noisy channels.",
                  "Convert 30 dB to S/N = 1000.",
                  "Compute C = 3000 x log2(1001) = about 29900 bps.",
                  "Explain Shannon is the absolute ceiling; Nyquist assumes no noise.",
                  "Conclude: to exceed 18 kbps realistically, raise SNR or bandwidth, never beyond Shannon.",
                ],
              },
              {
                q: "Four channels of 1 Mbps each are multiplexed with synchronous TDM. What link rate is needed and how many bits travel in each slot if the frame lasts 125 microseconds?",
                marks: 3,
                outline: [
                  "Link must carry the sum: 4 Mbps.",
                  "8000 frames/s x 4 Mbps implies 500 bits per frame.",
                  "Each of the 4 slots carries 125 bits.",
                ],
              },
              {
                q: "Distinguish FDM from WDM in two lines.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.7",
            title: "Switching techniques: circuit, message and packet switching",
            body: [
              "When source and destination are not directly connected, an intervening network of switches moves the data, and HOW it moves it defines three techniques. Circuit switching reserves a dedicated physical path end-to-end before any data flows: the connection is set up (in classic telephony by signalling through exchanges), the path is held for the whole conversation, and torn down afterwards. The telephone network is the archetype - once your 64 kbps circuit exists, its bandwidth is yours whether you speak or stay silent, and delay is essentially propagation only, so quality is constant and predictable.",
              "Message switching is store-and-forward of complete messages: each switch receives the entire message on an input line, stores it, chooses an output line and retransmits it. No path is reserved and no size limit exists, but the whole message must fit in each switch's memory and the delay is the sum of per-hop store-and-forward times. It suits non-interactive traffic (classic telegrams, email relays) and has largely disappeared, surviving conceptually inside mail servers and message queues. Packet switching refines it: messages are chopped into packets of bounded size (say 1000-1500 bytes), each packet is routed independently, and the network's lines are shared statistically by all users.",
              "Packet switching has two sub-modes. In the datagram approach every packet carries the full destination address and may follow a different route - packets of one conversation can arrive out of order and the network gives no delivery guarantee (the Internet's IP is the canonical example; reliability is TCP's job above). In the virtual-circuit approach a route is chosen once during connection setup and every packet of the conversation carries only a short virtual circuit identifier (X.25, Frame Relay, ATM are the classics) - ordering is preserved and setup simplifies per-packet work, at the cost of state in switches and vulnerability to route failures. Worked comparison: send a 1 MB file as 1000 packets of 1000 bytes over 3 hops of 10 Mbps with 1 ms propagation per hop. Datagram setup cost is zero but routing decisions happen 3 x 1000 times; a virtual circuit pays one setup round trip but then forwards 3000 packets with a 12-bit label lookup instead of a 32-bit address lookup.",
              "Advantages and limitations: circuit switching gives constant delay and guaranteed bandwidth but wastes idle capacity and takes setup time - useless for bursty data; packet switching shares capacity efficiently among bursty users and is robust (packets reroute around failures) but adds queueing delay, jitter, out-of-order arrival and congestion under overload. A useful number to quote: total transfer time with store-and-forward of P packets over H hops is about H x (transmission time per packet) x P plus propagation, because each hop must receive the full packet before forwarding; cut-through switching reduces this by forwarding as bits arrive, at the cost of forwarding packets with errors.",
            ],
            keyTerms: [
              { term: "Circuit switching", definition: "A dedicated end-to-end path is reserved before data flows and held for the whole session (telephone network)." },
              { term: "Store-and-forward", definition: "A switch receives, stores, then retransmits the whole message or packet on the next link." },
              { term: "Datagram", definition: "Packet-switched service where every packet is routed independently and may arrive out of order (IP)." },
              { term: "Virtual circuit", definition: "Packet-switched service with a pre-established route; packets carry a short VC identifier (X.25, ATM)." },
            ],
            table: {
              caption: "The three switching techniques side by side.",
              headers: ["Property", "Circuit switching", "Message switching", "Packet switching"],
              rows: [
                ["Setup", "Required, dedicated path", "None", "None (datagram) or once (VC)"],
                ["Path dedication", "Reserved for whole session", "Shared", "Shared statistically"],
                ["Delay", "Propagation only after setup", "Sum of per-hop store times", "Queueing + transmission, jitter possible"],
                ["Bandwidth use", "Wasted when idle", "Efficient", "Most efficient for bursty traffic"],
                ["Ordering / reliability", "Guaranteed", "Per message", "Datagram: no; VC: ordered"],
                ["Example", "Telephone network (PSTN)", "Telegram, mail relay", "Internet (IP), ATM"],
              ],
            },
            callout: {
              type: "warning",
              title: "Datagram vs virtual circuit is a network-layer question",
              body: "Students mix this up constantly: BOTH datagram and virtual circuit are packet-switching sub-modes, not alternatives to packet switching. The contrast pair is circuit vs packet switching; inside packet switching, datagram (connectionless, IP) vs virtual circuit (connection-oriented, X.25/ATM). Keep the two levels of contrast separate in the answer.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing how the data travels",
              caption:
                "Interaction length decides the winner: long steady streams favour reservation, bursty traffic favours sharing.",
              start: "What does the traffic look like?",
              branches: [
                { label: "Constant, long-lived stream (voice)", outcome: "Circuit switching: reserve once, constant delay", good: true },
                { label: "Bursty, unpredictable data", outcome: "Packet switching (datagram): share lines, reroute on failure", good: true },
                { label: "Ordered transaction stream over fixed route", outcome: "Virtual circuit: setup once, ordered delivery", good: true },
              ],
            },
            bullets: [
              "Circuit switching: setup - transfer - teardown; constant delay; bandwidth reserved whether used or not.",
              "Message switching: store-and-forward of whole messages; needs big buffers; per-hop delay adds up.",
              "Packet switching: bounded-size packets, statistical sharing, robust rerouting.",
              "Datagram: full address in every packet, independent routes, possible reordering (IP).",
              "Virtual circuit: setup phase, short VC id per packet, ordered delivery (X.25, ATM).",
              "Worked figure: 1000 packets x 3 hops = 3000 routing decisions (datagram) vs 1 setup + label lookups (VC).",
              "Bursty traffic is why the Internet is packet switched - efficiency of shared capacity.",
              "Trade-off: reserved quality (circuit) vs efficiency and resilience (packet).",
            ],
            examQuestions: [
              {
                q: "Compare circuit switching, message switching and packet switching with diagrams of each. Explain datagram and virtual-circuit approaches to packet switching with their advantages and limitations.",
                marks: 7,
                outline: [
                  "Draw the three switching architectures.",
                  "Circuit: setup, dedicated path, constant delay, wasted idle bandwidth (telephone example).",
                  "Message: full store-and-forward, memory cost, non-interactive use.",
                  "Packet: bounded packets, statistical sharing, robustness.",
                  "Datagram: independent routing, reordering, no guarantees (IP).",
                  "Virtual circuit: setup, VC identifiers, ordering, state in switches.",
                  "Worked note: 1 MB file as 1000 packets over 3 hops - cost of setup vs per-packet decisions.",
                ],
              },
              {
                q: "Why is packet switching preferred for bursty data traffic even though it introduces jitter?",
                marks: 3,
                outline: [
                  "Bursty sources are idle most of the time; dedicated circuits waste that capacity.",
                  "Statistical sharing lets active users use idle capacity.",
                  "Jitter is absorbed by buffering and handled above (TCP) - cheaper than wasted circuits.",
                ],
              },
              {
                q: "Name one classic virtual-circuit network technology and one datagram network.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.8",
            title: "Internetworking devices: repeater, hub, bridge, switch, router, gateway",
            body: [
              "Devices that connect network segments differ by the OSI layer at which they operate, and that layer decides exactly what they understand and change. A repeater works at the physical layer: it regenerates and retimes the electrical or optical signal, extending the reach of a medium without interpreting any content. A hub is a multiport repeater: everything received on one port is repeated on all others, so a hub-connected LAN is one collision domain where all stations compete for the wire - which is why hubs are obsolete, replaced by switches.",
              "A bridge operates at the data link layer: it reads MAC addresses, learns which addresses live on which side by watching source addresses, and forwards frames only when the destination lies on the other side - separating collision domains. A switch is a multiport bridge with hardware (ASIC) forwarding and often full-duplex ports, so every port is its own collision domain and total bandwidth scales: an 8-port switch at 1 Gbps can theoretically carry 8 Gbps of aggregate traffic. Switches still forward broadcast frames everywhere, so one switch network remains a single broadcast domain.",
              "A router operates at the network layer: it reads IP addresses, consults a routing table, decrements the TTL and chooses the next hop - separating broadcast domains and connecting networks with different technologies (Ethernet to fibre to Wi-Fi). Only a router can join different logical networks (different IP subnets); a switch cannot. Finally, a gateway (in the strict sense) works above layer 3, translating protocols between entire stacks - an email gateway converting between mail formats, a VoIP gateway bridging PSTN and IP. In loose usage 'gateway' also means 'the router that leaves my subnet'.",
              "Worked example: a college LAN of 200 PCs in 4 labs. One hub per lab would give 4 collision domains but 200 stations still share broadcast traffic and every hub port repeats collisions; replacing hubs with a 48-port switch per lab gives each PC a private 1 Gbps collision domain and 4 broadcast domains if VLANs divide them. A router then joins the campus to the Internet and enforces subnet boundaries; the path college-to-ISP crosses a fibre repeater/amplifier in between. Rules of thumb for exams: repeater/hub = layer 1, one collision domain; bridge/switch = layer 2, splits collision domains; router = layer 3, splits broadcast domains and changes IP hops; gateway = protocol translation. Collision domains multiply downward through the stack, broadcast domains only at routers.",
            ],
            keyTerms: [
              { term: "Repeater", definition: "Physical-layer device that regenerates signals to extend medium reach." },
              { term: "Collision domain", definition: "Set of ports whose simultaneous transmissions interfere; split by switches, never by hubs." },
              { term: "Broadcast domain", definition: "Set of devices that receive one another's broadcast frames; split only by routers (or VLANs)." },
              { term: "Gateway", definition: "Device translating between different protocol stacks, operating above the network layer." },
            ],
            table: {
              caption: "Internetworking devices by OSI layer.",
              headers: ["Device", "OSI layer", "Understands", "Domains separated"],
              rows: [
                ["Repeater", "1 Physical", "Bits / signals", "None - extends one segment"],
                ["Hub", "1 Physical", "Bits, floods all ports", "None - one collision domain"],
                ["Bridge / Switch", "2 Data Link", "MAC addresses, frames", "Collision domain per port"],
                ["Router", "3 Network", "IP addresses, routing table", "Collision AND broadcast domains"],
                ["Gateway", "4-7", "Application / protocol formats", "Translates whole stacks"],
              ],
            },
            callout: {
              type: "exam",
              title: "The two-domain rule",
              body: "Repeaters and hubs neither split collision nor broadcast domains. Switches split collision domains but NOT broadcast domains. Only routers (and VLANs) split broadcast domains. Quote this rule explicitly - it is the discriminating sentence in almost every device-comparison answer.",
            },
            diagram: {
              kind: "layers",
              title: "Devices stack up the OSI layers",
              caption:
                "Higher-layer devices understand more - and therefore isolate more: hub floods, switch filters, router routes.",
              layers: [
                { label: "Gateway (layers 4-7)", note: "translates protocols between stacks" },
                { label: "Router (layer 3)", note: "IP routing, splits broadcast domains" },
                { label: "Switch / Bridge (layer 2)", note: "MAC forwarding, collision domain per port" },
                { label: "Hub (layer 1)", note: "multiport repeater, floods everything" },
                { label: "Repeater (layer 1)", note: "signal regeneration only" },
              ],
            },
            bullets: [
              "Repeater: layer 1, regenerates signals, no intelligence.",
              "Hub: multiport repeater; one collision domain; obsolete because of flooding.",
              "Bridge/switch: layer 2, learns MAC source addresses, forwards selectively.",
              "Switch = multiport bridge with ASIC and full duplex; collision domain per port.",
              "Router: layer 3, TTL decrement, next-hop choice, splits broadcast domains.",
              "Router is the only device connecting different IP subnets and different technologies.",
              "Gateway: application/transport translation (mail, VoIP, protocol conversion).",
              "Worked plan: 4 lab switches + router = per-port collision domains and routed broadcast isolation.",
            ],
            examQuestions: [
              {
                q: "Explain the working of repeater, hub, bridge, switch, router and gateway, stating the OSI layer of each. How do collision domains and broadcast domains differ across these devices?",
                marks: 7,
                outline: [
                  "Repeater: layer 1 signal regeneration.",
                  "Hub: multiport repeater, single collision domain, flooding.",
                  "Bridge/switch: layer 2 MAC learning and selective forwarding.",
                  "Switch gives a collision domain per port, full duplex, ASIC speed.",
                  "Router: layer 3, routing table, TTL, splits broadcast domains.",
                  "Gateway: above layer 3, protocol translation examples.",
                  "State the two-domain rule to conclude.",
                ],
              },
              {
                q: "A switch receives a frame whose destination MAC address is unknown. What does it do, and why?",
                marks: 3,
                outline: [
                  "Unknown unicast is flooded out of all other ports.",
                  "The reply reveals the port of the destination.",
                  "The switch caches the MAC-port pair in its learning table.",
                ],
              },
              {
                q: "Which device joins two networks with different IP subnets, and why can a switch not do it?",
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
      title: "Data Link Layer: Framing, Errors, Flow Control and MAC",
      summary:
        "Design issues of the data link layer, framing methods, error detection with parity, checksum and CRC, error correction with Hamming codes, sliding-window flow control, random access protocols ALOHA and CSMA, and the Ethernet standard with CSMA/CD.",
      chapter: {
        number: "02",
        title: "Making One Hop Reliable",
        intro:
          "Unit II covers everything that must work between two directly connected machines: frames instead of raw bits, error detection with CRC, error correction with Hamming codes, flow control with sliding windows, and the medium access battle of ALOHA, CSMA and Ethernet.",
        inOneBreath:
          "The DLL frames bits, addresses them by MAC, detects errors with parity/checksum/CRC and corrects them with Hamming; flow control uses stop-and-wait or sliding windows (Go-Back-N, Selective Repeat); multiple stations share one medium via ALOHA (max 36.8% slotted) or CSMA with collision detection; Ethernet = IEEE 802.3 frames + CSMA/CD + 64-byte minimum frame.",
        sections: [
          {
            number: "2.1",
            title: "Data link layer design issues and services",
            body: [
              "The data link layer (DLL) takes a raw transmission hop - bits possibly corrupted by noise, arriving at unpredictable times - and turns it into an apparently error-free, ordered, frame-delimited channel for the network layer above. Its design issues are five: providing a well-defined service interface to the network layer, framing (deciding where frames begin and end), error control (detecting and correcting transmission errors), flow control (keeping a fast sender from swamping a slow receiver), and medium access control (deciding who may transmit when many stations share one link).",
              "Services offered to the network layer come in three flavours: unacknowledged connectionless service (send frames, no feedback - fine on low-error LANs, used by Ethernet), acknowledged connectionless service (each frame individually acknowledged and retransmitted if missing - useful on noisy wireless links), and acknowledged connection-oriented service (a connection is established, frames numbered, all guaranteed in order - typical of WAN links such as PPP over leased lines). The choice is an engineering trade-off: on a reliable LAN, acknowledgement overhead is wasted; on a 60% loss Wi-Fi hop, it is essential.",
              "Worked example: consider a satellite link with 270 ms one-way delay running unacknowledged connectionless service for a file transfer of 100 frames. If 5 frames are lost randomly, the network layer above sees 95 of 100 files-worth of data with no warning - the file is silently corrupted. With acknowledged connection-oriented service, missing frame numbers are detected, the sender retransmits only frames 12, 37, 41, 78 and 90, and the receiver reconstructs all 100 in order - at the cost of acknowledgement traffic and a windowing scheme. This is precisely why Wi-Fi's 802.11 MAC acknowledges every frame while Ethernet's 802.3 does not: the error rate, not ideology, decides.",
              "Positioning matters for exam answers: the DLL is the only layer whose functions differ sharply between hop types. Over one Ethernet hop it uses CSMA/CD (in classic half-duplex) or full-duplex switching; over a Wi-Fi hop it uses CSMA/CA plus acknowledgements; over a modem or DSL hop it uses PPP with byte stuffing. The abstract services stay the same; the concrete protocols change with the medium. The DLL also performs physical addressing (48-bit MAC addresses), and often duplicates the frame header and trailer to protect both ends of the data - which is why framing is the first design issue to master.",
            ],
            keyTerms: [
              { term: "Frame", definition: "The data link layer PDU: header + payload + trailer, delimiting one hop's transmission unit." },
              { term: "Acknowledged connection-oriented service", definition: "Connection established, frames numbered and acknowledged, delivered in order." },
              { term: "Physical addressing", definition: "Using 48-bit MAC addresses to identify the two ends of one hop." },
              { term: "Medium access control (MAC)", definition: "The sublayer that decides which station may transmit when several share one medium." },
            ],
            table: {
              caption: "Three DLL service types and where they appear.",
              headers: ["Service", "Guarantees", "Cost", "Typical link"],
              rows: [
                ["Unacknowledged connectionless", "None - frames may be lost", "Lowest", "Ethernet on reliable LANs"],
                ["Acknowledged connectionless", "Each frame acked and retried", "Per-frame ack overhead", "802.11 Wi-Fi, noisy links"],
                ["Acknowledged connection-oriented", "Ordered, reliable stream", "Setup + windowing", "PPP, leased lines, HDLC"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name all five design issues",
              body: "When the question says 'explain design issues of the data link layer', list exactly five: service interface, framing, error control, flow control, medium access control. Then give one sentence and one protocol example per issue. This structure alone often secures 6 of 7 marks.",
            },
            diagram: {
              kind: "flow",
              title: "What the data link layer does to one frame",
              caption:
                "From the network layer's packet to reliable bits on one hop and back again at the receiver.",
              steps: [
                { label: "Network layer hands over a packet" },
                { label: "DLL frames it", note: "header + trailer, MAC addresses" },
                { label: "Transmit over one hop", note: "with error detection bits" },
                { label: "Receiver checks and acks", note: "retransmit if needed" },
                { label: "Packet passed up", note: "in order, error-free" },
              ],
            },
            bullets: [
              "Five design issues: service interface, framing, error control, flow control, medium access.",
              "Three service types: unacknowledged connectionless, acknowledged connectionless, acknowledged connection-oriented.",
              "Ethernet skips per-frame acks; Wi-Fi acknowledges every frame - error rate decides.",
              "DLL adds both header AND trailer because error detection codes must follow the data.",
              "MAC addresses (48-bit) identify the ends of one hop only, never end-to-end.",
              "Same services, different protocols per hop type: 802.3, 802.11, PPP.",
            ],
            examQuestions: [
              {
                q: "Explain the design issues of the data link layer and describe the three types of services it can offer to the network layer, with one example link for each.",
                marks: 7,
                outline: [
                  "List the five design issues and define each in one line.",
                  "Unacknowledged connectionless: no feedback, Ethernet example.",
                  "Acknowledged connectionless: per-frame ack, Wi-Fi example.",
                  "Acknowledged connection-oriented: numbered, ordered, PPP example.",
                  "Worked contrast: 100-frame file over a lossy link with and without acks.",
                  "Note the header+trailer structure of a frame.",
                  "Conclude that the error rate of the hop selects the service.",
                ],
              },
              {
                q: "Why does the data link layer add a trailer to the frame when all other layers add only headers?",
                marks: 3,
                outline: [
                  "Error detection codes (CRC, checksum) are computed over the payload.",
                  "They must be appended after the data so the receiver can verify immediately.",
                  "Hence header at the front, trailer at the end.",
                ],
              },
              {
                q: "What is medium access control and why is it needed only on shared media?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Framing: character count, byte stuffing and bit stuffing",
            body: [
              "Framing is the problem of finding frame boundaries in an endless bit stream. Four classical solutions exist. (1) Character count: the header carries the number of characters in the frame; the receiver counts them off. It is simple but fatal - if the count field is corrupted by one bit, the receiver loses synchronisation and every following frame boundary is wrong, with no way to resynchronise. (2) Byte stuffing with flag bytes: each frame starts and ends with a special flag byte (e.g. 0x7E); to keep data bytes equal to the flag from being misread, every flag-like data byte is preceded by an escape byte (0x7D), and escape bytes in data are themselves escaped (doubled). PPP uses this scheme.",
              "(3) Bit stuffing: for frames delimited by the bit pattern 01111110, the sender inserts a 0 after every run of five consecutive 1s in the data; the receiver deletes any 0 that follows five 1s. This guarantees the flag pattern never appears inside data regardless of content - HDLC uses it. (4) Physical layer coding violations: use signal patterns that cannot occur in ordinary data (e.g. in 4B/5B or Manchester coding some codes are reserved for frame delimiters) - elegant where the physical layer permits it.",
              "Worked example of bit stuffing: suppose the payload bit sequence is 0110111111111100 and the flag is 01111110. Scan for five consecutive 1s: after '011011111' we have five 1s, so insert a 0, giving 0110111110; the remaining run '11111100' again contains five 1s after the stuffed 0 - '11111' then '11100', so insert another 0 after the first five: 0110111110111110111100? Let us do it carefully: original = 0 1 1 0 1 1 1 1 1 1 1 1 1 1 0 0. Runs of 1s: positions 4-14 hold eleven consecutive 1s. After every 5 ones insert 0: first five ones kept, insert 0, next five ones kept, insert 0, remaining one one kept. Stuffed output = 011011111 0 11111 0 1 00 = 0110111110111110100. The receiver scans for '11111' followed by 0 and deletes that 0, recovering the exact original - the frame can now be delimited by 01111110 unambiguously.",
              "Worked example of byte stuffing: payload (hex) = 45 7E 21 7D 63. Sender transmits 45 7D 5E 21 7D 5D 63: the flag 7E becomes escape 7D + 5E (7E XOR 0x20), and the escape 7D becomes 7D + 5D. The receiver strips each 7D and complements bit 5 of the following byte, recovering 45 7E 21 7D 63 exactly. Overhead is data-dependent - worst case doubles the payload - but average cost is tiny. Comparing schemes: character count is O(1) overhead but fragile; flag-and-stuff schemes are content-independent and self-resynchronising (the next flag realigns the receiver) which is why every modern protocol uses stuffing rather than counts.",
            ],
            keyTerms: [
              { term: "Flag byte/pattern", definition: "Reserved byte (0x7E) or bit pattern (01111110) marking frame start and end." },
              { term: "Byte stuffing", definition: "Inserting an escape byte before flag-like data bytes so flags stay unambiguous (PPP)." },
              { term: "Bit stuffing", definition: "Inserting a 0 after any five consecutive 1s so the flag pattern never occurs in data (HDLC)." },
              { term: "Coding violation", definition: "Using physical signals impossible in normal data as frame delimiters." },
            ],
            table: {
              caption: "Framing methods compared.",
              headers: ["Method", "How boundaries are found", "Overhead", "Failure mode"],
              rows: [
                ["Character count", "Count field in header", "1 byte", "Corrupted count desynchronises everything"],
                ["Byte stuffing (flag + escape)", "Flag 0x7E, escapes in data", "Data-dependent", "None - self-resynchronising"],
                ["Bit stuffing (flag + stuffed 0s)", "Flag 01111110, 0 after five 1s", "Up to 1 bit per 5 bits worst case", "None - self-resynchronising"],
                ["Coding violation", "Reserved physical signals", "None in data", "Needs special physical coding"],
              ],
            },
            callout: {
              type: "exam",
              title: "Do the stuffing on paper",
              body: "Bit-stuffing questions are free marks if you work mechanically: write the bit string, underline every group of five consecutive 1s, insert a 0 after each group (the stuffed 0 itself breaks the run), then show the receiver's deletion step. Losing track mid-string is the classic error - rewrite the string after each insertion.",
            },
            diagram: {
              kind: "pipeline",
              title: "Anatomy of a stuffed frame",
              caption:
                "Flag at both ends, stuffing applied only to the payload, error check computed before the closing flag is appended.",
              stages: [
                { label: "Opening flag", note: "01111110" },
                { label: "Address + control", note: "hop endpoints and sequence numbers" },
                { label: "Payload (bit-stuffed)", note: "0 inserted after every five 1s" },
                { label: "CRC trailer", note: "error detection over frame" },
                { label: "Closing flag", note: "01111110 - receiver now knows the frame ended" },
              ],
            },
            bullets: [
              "Four framing methods: character count, byte stuffing, bit stuffing, coding violations.",
              "Character count fails catastrophically if the count bit flips - receiver loses all boundaries.",
              "Byte stuffing: 0x7E flag; data 0x7E sent as 0x7D 0x5E; data 0x7D sent as 0x7D 0x5D.",
              "Bit stuffing: 0 inserted after five consecutive 1s; receiver deletes 0 after five 1s.",
              "Worked: payload 0110111111111100 becomes 0110111110111110100 when stuffed.",
              "Stuffing makes frames content-independent and self-resynchronising at the next flag.",
              "PPP uses byte stuffing; HDLC uses bit stuffing.",
            ],
            examQuestions: [
              {
                q: "Explain framing and describe byte stuffing and bit stuffing with worked examples. Why is character counting considered fragile?",
                marks: 7,
                outline: [
                  "State the framing problem: finding boundaries in a bit stream.",
                  "Character count method and its one-bit corruption failure.",
                  "Byte stuffing: flag 0x7E, escape 0x7D, work 45 7E 21 7D 63 -> 45 7D 5E 21 7D 5D 63.",
                  "Bit stuffing: 0 after five 1s; stuff 0110111111111100 -> 0110111110111110100.",
                  "Show the receiver-side deletion recovers the original.",
                  "Explain self-resynchronisation at the next flag.",
                  "Name PPP and HDLC as the standard users.",
                ],
              },
              {
                q: "Bit-stuff the data string 1111111111 (ten ones). Show sender output and receiver recovery.",
                marks: 3,
                outline: [
                  "After each five 1s insert 0: 11111 0 11111 0 (then string ends).",
                  "Sender output: 111110111110.",
                  "Receiver deletes each 0 following five 1s, recovering ten 1s.",
                ],
              },
              {
                q: "Which byte does PPP use as its flag and which as its escape?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Error detection: parity and checksum",
            body: [
              "Transmission errors arise from noise, attenuation distortion and interference; error control answers with two strategies - detection (know an error happened, retransmit) and correction (fix it without retransmission). Detection codes add redundancy: a parity bit makes the number of 1s even (even parity) or odd across a word. Worked example: data byte 1011001 has five 1s; even parity appends 1, giving codeword 10110011 with six 1s; if one bit flips anywhere, parity breaks and the error is detected. But any two-bit flip preserves parity and passes silently - parity detects all odd numbers of errors and no even ones, at 1-bit overhead. Two-dimensional (row-and-column) parity raises coverage: arrange bytes in a matrix, compute row and column parities, and a single-bit error is caught by one row AND one column parity, actually pinpointing its position - and thereby correcting it.",
              "The Internet checksum is a 16-bit 1's complement sum. Sender: group data into 16-bit words, sum them with end-around carry (wrap the overflow bit back into the sum), complement the result, and place it in the checksum field. Receiver: sums all 16-bit words including the checksum; the result is all 1s (0xFFFF) if the data is intact. Worked example: two 16-bit words 0xB224 and 0x0021 - sum = 0xB245 (no carry); checksum = ~0xB245 = 0x4DBA. Add a third word 0x0001: running sum 0xB246, checksum 0x4DB9. If one bit flips in transit, the receiver's final sum no longer equals 0xFFFF and the packet is dropped. UDP, TCP and IP all use it.",
              "Strengths and weaknesses: the checksum is cheap - one add per 16-bit word in software - but weak, because byte-order-preserving errors cancel: if two 16-bit words swap places the sum is unchanged and the corruption passes undetected. Parity is even cheaper but detects only odd error counts. Both are weaker than the CRC, which is computed by polynomial division and detects all single- and double-bit errors, all odd error counts (when chosen well), all burst errors up to the generator length, and most longer bursts. The design ladder is thus: parity (1 bit) < checksum (16 bits) < CRC (16-32 bits), with cost rising in the same order - parity in hardware registers, checksum in software, CRC in a small shift-register circuit.",
              "Where each is used: parity lives in memory chips and asynchronous serial links (RS-232), where errors are single-bit and overhead must be minimal; the checksum covers TCP/UDP segments and IP headers because it must be computed in software on every packet at line rate and its weakness against reordering is acceptable; CRC guards Ethernet frames (CRC-32), HDLC, Bluetooth and storage media, because its hardware cost is trivial and its detection power is what a noisy shared medium needs. A detection scheme is only half the story though - detection must pair with a retransmission protocol (ARQ) to become reliability.",
            ],
            keyTerms: [
              { term: "Even parity", definition: "Extra bit chosen so the total count of 1s in the codeword is even." },
              { term: "Two-dimensional parity", definition: "Row and column parity bits over a matrix of bytes; localises single-bit errors." },
              { term: "Internet checksum", definition: "16-bit 1's complement sum of words, complemented; receiver must get all 1s." },
              { term: "End-around carry", definition: "Overflow bit of the sum wrapped back into the least significant position." },
            ],
            table: {
              caption: "Detection codes: cost versus power.",
              headers: ["Code", "Overhead", "Detects", "Used in"],
              rows: [
                ["Single parity bit", "1 bit per byte", "All odd-count errors; no even ones", "RS-232, memory"],
                ["2D parity", "Row + column bits", "All 1-, 2-, 3-bit errors; corrects 1-bit", "Older block transfers"],
                ["Internet checksum", "16 bits", "Most errors; misses word swaps, offset errors", "IP, TCP, UDP"],
                ["CRC-32", "32 bits", "All 1/2-bit, odd, burst <= 32; most longer bursts", "Ethernet, HDLC, storage"],
              ],
            },
            callout: {
              type: "warning",
              title: "Checksum passes two classic corruptions",
              body: "The Internet checksum fails to detect: (1) two 16-bit words exchanged in position, (2) one word increased by X and another decreased by X. Quote these counterexamples when asked why CRC is superior - examiners reward the specific failure mode over a vague 'checksum is weaker'.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing a detection code",
              caption:
                "Overhead budget and error model decide the code - all three feed a retransmission protocol at the next level.",
              start: "What redundancy can the hop afford?",
              branches: [
                { label: "1 spare bit, single-bit errors", outcome: "Parity: cheapest, odd errors only", good: true },
                { label: "Software per-packet, CPU cheap", outcome: "Internet checksum in IP/TCP/UDP", good: true },
                { label: "Noisy shared medium, hardware easy", outcome: "CRC: strongest detection at trivial circuit cost", good: true },
              ],
            },
            bullets: [
              "Detection adds redundancy so the receiver can tell an error happened; correction repairs it locally.",
              "Even parity on 1011001: five 1s, so parity bit = 1, codeword 10110011.",
              "Parity detects all odd-count errors, misses any even-count error.",
              "2D parity localises a single-bit error at the intersection of a failing row and column.",
              "Internet checksum: 1's complement sum with end-around carry, complemented; receiver sum must be 0xFFFF.",
              "Worked: 0xB224 + 0x0021 = 0xB245, checksum 0x4DBA.",
              "Checksum misses word swaps and compensating changes; CRC detects all 2-bit and burst <= 32 errors.",
              "Ladder of power: parity < checksum < CRC; ladder of cost in the same order.",
            ],
            examQuestions: [
              {
                q: "Explain single-bit parity and the Internet checksum with worked examples. Show two kinds of corruption the checksum cannot detect and compare both schemes with CRC.",
                marks: 7,
                outline: [
                  "Even parity example: 1011001 -> 10110011; note odd-error-only detection.",
                  "2D parity improvement and localisation.",
                  "Checksum algorithm: 16-bit words, end-around carry, complement.",
                  "Worked sum: 0xB224 + 0x0021 = 0xB245, checksum 0x4DBA.",
                  "Failure modes: word swap, compensating +/- changes.",
                  "CRC strengths: all 2-bit, odd, burst <= 32 errors.",
                  "Conclude with the cost-versus-power ladder and typical uses.",
                ],
              },
              {
                q: "Compute the even parity bit for the byte 1100110 and state what error patterns parity cannot detect.",
                marks: 3,
                outline: [
                  "Four 1s already even, so parity bit = 0.",
                  "Any even number of flipped bits (2, 4, ...) preserves parity.",
                  "Hence only odd-count errors are caught.",
                ],
              },
              {
                q: "Which protocol fields carry the Internet checksum?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "Cyclic redundancy check (CRC)",
            body: [
              "The CRC treats the message as a binary polynomial - each bit is a coefficient of x^k - and divides it by a generator polynomial agreed by both sides. The sender appends a CRC (frame check sequence) so that the enlarged codeword divides evenly by the generator; the receiver performs the same division and accepts the frame only if the remainder is zero. Polynomial arithmetic uses modulo-2 arithmetic: addition and subtraction are both XOR, with no carries and no borrows. A generator of degree r produces an r-bit CRC and detects all bursts of length <= r.",
              "Algorithm, sender side: (1) take the r-bit generator G (degree r), append r zero bits to the k-bit message M; (2) divide M x 2^r by G using XOR long division; (3) the r-bit remainder R is the CRC; (4) transmit T = M x 2^r + R (append R to the message). Because T is constructed so T = (M x 2^r - R) + R and subtraction is XOR, T is exactly divisible by G - the receiver's remainder comes out zero for error-free frames and nonzero otherwise.",
              "Worked example (the classic): message M = 1101011011, generator G = 10011 (degree 4, so append four 0s), dividend = 11010110110000. XOR long division: divide step by step, aligning G under the leading 1 of the current remainder. The division proceeds: 11010110110000 XOR-shifted against 10011 yields quotient 1100001010 and final remainder R = 1110. The transmitted frame is therefore 1101011011 1110 (14 bits). At the receiver the same division of the received 14-bit string by 10011 gives remainder 0000 - frame accepted. Flip any single bit of the frame and the remainder becomes nonzero - the corrupted frame is discarded and retransmission (ARQ) is triggered.",
              "Why CRC is powerful: if G contains the factor (x + 1), all errors with an odd number of bits are detected; if G's degree is r, all double errors within the codeword length are detected (for generator choices like the standard CRC-32 polynomial), and all bursts of length <= r are caught, with only 2^-r probability of missing a longer burst. Practical generators: CRC-16 (x^16 + x^15 + x^2 + 1, used in older protocols), CRC-CCITT, CRC-32 used in Ethernet (x^32 + x^26 + x^23 + ... + 1). Hardware cost is a shift register of r flip-flops plus a few XOR gates - computed at wire speed on every Ethernet frame. Limitations: CRC detects, never corrects; it cannot protect against malicious tampering (a forged frame can carry a valid CRC), so security needs cryptographic hashes, and CRC must be paired with ARQ to complete reliability.",
            ],
            keyTerms: [
              { term: "Generator polynomial G", definition: "Divisor of degree r; both sides agree on it; produces an r-bit CRC." },
              { term: "Modulo-2 arithmetic", definition: "Addition and subtraction are XOR with no carries or borrows." },
              { term: "Frame check sequence (FCS)", definition: "The r-bit remainder appended to the message so the codeword divides evenly by G." },
              { term: "Burst error", definition: "A run of consecutive corrupted bits; CRC of degree r detects all bursts of length <= r." },
            ],
            table: {
              caption: "Standard CRC generators.",
              headers: ["Standard", "Generator (hex/binary)", "CRC bits", "Typical use"],
              rows: [
                ["CRC-8", "x^8 + x^2 + x + 1", "8", "Short control frames"],
                ["CRC-16", "x^16 + x^15 + x^2 + 1", "16", "HDLC, older links"],
                ["CRC-CCITT", "x^16 + x^12 + x^5 + 1", "16", "X.25, Bluetooth"],
                ["CRC-32", "x^32 + x^26 + x^23 + ... + x + 1", "32", "Ethernet, Wi-Fi, ZIP"],
              ],
            },
            callout: {
              type: "tip",
              title: "Show the division, not just the remainder",
              body: "In the exam, write the four-zero-appended dividend and perform at least the first four XOR alignment steps visibly, then state quotient and remainder R = 1110 and transmit 1101011011 1110. The visible division is what the marks are for; a bare answer gives no method marks even if correct.",
            },
            diagram: {
              kind: "flow",
              title: "CRC at sender and receiver",
              caption:
                "Append r zeros, divide, append remainder, transmit; the receiver divides and demands a zero remainder.",
              steps: [
                { label: "Append r zeros to M", note: "1101011011 -> + 0000" },
                { label: "Divide by G = 10011", note: "modulo-2 (XOR) long division" },
                { label: "Remainder R = 1110", note: "this is the CRC / FCS" },
                { label: "Transmit M + R", note: "1101011011 1110" },
                { label: "Receiver divides by G", note: "remainder 0000 = accept; else discard + ARQ" },
              ],
            },
            bullets: [
              "CRC = polynomial division of message with r appended zeros by generator G, keep remainder.",
              "Modulo-2 arithmetic: add/subtract = XOR; no carries.",
              "Worked: M = 1101011011, G = 10011, dividend 11010110110000, remainder 1110, send 1101011011 1110.",
              "Receiver's zero remainder accepts the frame; any single-bit error gives nonzero remainder.",
              "Detects all bursts <= r bits; misses longer bursts with probability 2^-r.",
              "Generator with factor (x + 1) catches all odd-count errors.",
              "CRC-32 protects every Ethernet frame; hardware is a shift register + XORs.",
              "CRC detects only - correction needs ARQ or Hamming codes; not tamper-proof.",
            ],
            examQuestions: [
              {
                q: "Explain the CRC method of error detection. For message 1101011011 and generator polynomial x^4 + x + 1, compute the transmitted codeword showing the division, and state which error patterns CRC detects.",
                marks: 7,
                outline: [
                  "Represent M as polynomial, note G = 10011 has degree 4.",
                  "Append four zeros: dividend 11010110110000.",
                  "Perform modulo-2 long division showing XOR alignment steps.",
                  "Quotient 1100001010, remainder R = 1110.",
                  "Transmitted frame = 1101011011 1110.",
                  "Receiver divides and expects remainder 0000; one flipped bit -> nonzero.",
                  "Detection power: all 1- and 2-bit errors, odd counts (factor x+1), bursts <= 4.",
                ],
              },
              {
                q: "Why does appending the remainder R to M x 2^r make the codeword exactly divisible by G?",
                marks: 3,
                outline: [
                  "M x 2^r = G x Q + R by definition of division.",
                  "XOR subtraction: M x 2^r - R = G x Q.",
                  "Append R (addition = XOR = subtraction), so T = G x Q + R - R + R = G x Q, divisible by G.",
                ],
              },
              {
                q: "State one thing a CRC cannot do, and one corruption scenario where it is not an adequate defence.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.5",
            title: "Error correction: Hamming codes",
            body: [
              "Detection plus retransmission is wasteful when errors are frequent or feedback is slow (deep space, satellite), so error-correcting codes (FEC - forward error correction) add enough redundancy to repair errors at the receiver. The Hamming code is the classical single-error-correcting code: it places k parity bits at power-of-two positions (1, 2, 4, 8, ...) interleaved with m data bits, giving codeword length n = m + k with k = ceil(log2(n + 1)). Each parity bit covers exactly the positions whose binary index has a 1 in that parity's bit position; a receiver recomputes all parities, and the binary number formed by the failing parity checks (the syndrome) names the position of the single flipped bit - flip it back and the data is recovered.",
              "Worked example: encode the 4 data bits 1011 into a (7,4) Hamming codeword with even parity. Positions: p1=1, p2=2, d3=1, p4=4, d5=0, d6=1, d7=1. Parity p1 covers positions 1,3,5,7 (odd positions): bits 1,0,1 sum to 2, so p1 = 0. Parity p2 covers positions 2,3,6,7 (indices with bit 2 set): bits 1,1,1 sum to 3, so p2 = 1. Parity p4 covers positions 4,5,6,7 (indices with bit 4 set): bits 0,1,1 sum to 2, so p4 = 0. Codeword = p1 p2 d3 p4 d5 d6 d7 = 0110011. Now corrupt position 5 (receiver gets 0110111): recompute - p1 check over positions 1,3,5,7 = 0,1,1 sum 2 even, pass; p2 check = 1,1,1 odd, fail; p4 check = 0,1,1 even, pass. Syndrome = p4 p2 p1 = 101 binary = 5 - exactly the corrupted position. Flip bit 5 back and decode 1011.",
              "Minimum Hamming distance is the master concept: the distance between two codewords is the number of differing bit positions, and a code corrects t errors iff its minimum distance d_min >= 2t + 1, and detects 2t errors iff d_min >= 2t + 2. Single parity has d_min = 2: detects 1 error, corrects none. Hamming (7,4) has d_min = 3: corrects 1 or detects 2, but cannot do both simultaneously. Redundancy cost: to correct t errors you need roughly m >= log2(1 + n x sum of combinations) bits of overhead - the Hamming bound - and stronger codes (Reed-Solomon in CDs, convolutional/Viterbi codes in Wi-Fi and satellite links) trade more overhead for multiple-error correction.",
              "Trade-offs: FEC pays fixed overhead on every frame and avoids retransmission latency - ideal for one-way links, real-time streams and high-error channels; ARQ pays variable latency but near-zero overhead on clean links - ideal for wired LANs. Worked sizing: a (7,4) Hamming code sends 4 data bits in 7 bit-slots, i.e. 75% overhead; a satellite link with 10^-3 bit error rate and 270 ms round-trip would spend most of its time retransmitting under ARQ, so FEC is the only sensible choice there, whereas Ethernet's 10^-9 error rate makes detection + retransmission far cheaper. The exam answer should always end with this engineering judgement, not just the arithmetic.",
            ],
            keyTerms: [
              { term: "Hamming code (7,4)", definition: "4 data bits + 3 parity bits at positions 1, 2, 4; corrects any single-bit error." },
              { term: "Syndrome", definition: "The binary number formed by failing parity checks; names the corrupted bit position." },
              { term: "Hamming distance d_min", definition: "Minimum number of differing bits between any two codewords." },
              { term: "FEC", definition: "Forward error correction: repairing errors at the receiver without retransmission." },
            ],
            table: {
              caption: "Distance rules: detect or correct?",
              headers: ["Code", "d_min", "Can detect", "Can correct"],
              rows: [
                ["Single parity", "2", "1-bit errors", "None"],
                ["Hamming (7,4)", "3", "2-bit errors (or)", "1-bit errors"],
                ["Extended Hamming (8,4)", "4", "3-bit errors (or)", "1-bit + detect 2-bit"],
                ["Reed-Solomon block codes", "high", "many", "Bursts (CD, DVD, DVB)"],
              ],
            },
            callout: {
              type: "exam",
              title: "The 2t + 1 rule is the concept mark",
              body: "Write d_min >= 2t + 1 for correction of t errors and d_min >= 2t + 2 for detection of 2t errors explicitly, then apply to Hamming (7,4): d_min = 3 gives t = 1. Examiners award the rule statement separately from the worked encoding - do both.",
            },
            diagram: {
              kind: "matrix",
              title: "How parity checks partition the 7 positions",
              caption:
                "Each parity covers the positions whose index contains its bit - failing checks spell the error position in binary.",
              axes: { x: "parity coverage (p1, p2, p4)", y: "position index (1 to 7)" },
              quadrants: [
                { label: "p1 covers 1,3,5,7", note: "odd indices - check bit 1" },
                { label: "p2 covers 2,3,6,7", note: "indices with bit 2 set" },
                { label: "p4 covers 4,5,6,7", note: "indices with bit 4 set" },
                { label: "Syndrome = p4 p2 p1", note: "binary value = corrupted position" },
              ],
            },
            bullets: [
              "FEC repairs errors at the receiver; ARQ retransmits - the trade-off is overhead vs latency.",
              "Parity bits sit at positions 1, 2, 4, 8; each covers positions whose index contains that power of two.",
              "Worked encoding: data 1011 -> codeword 0110011 (p1=0, p2=1, p4=0).",
              "Worked correction: received 0110111 gives syndrome 101 = 5, flip position 5.",
              "d_min >= 2t + 1 corrects t errors; d_min >= 2t + 2 detects 2t errors.",
              "Hamming (7,4): d_min = 3, corrects 1 bit; extended version adds an overall parity for double detection.",
              "FEC wins on satellite/deep-space/real-time links; ARQ wins on clean wired links.",
            ],
            examQuestions: [
              {
                q: "Construct the (7,4) Hamming codeword for data 1011 using even parity, show how a single-bit error in position 5 is located and corrected via the syndrome, and state the distance conditions for detecting and correcting t errors.",
                marks: 7,
                outline: [
                  "Lay out positions: p1 p2 1 p4 0 1 1.",
                  "Compute p1 over positions 1,3,5,7 = 0; p2 over 2,3,6,7 = 1; p4 over 4,5,6,7 = 0.",
                  "Codeword 0110011.",
                  "Corrupt bit 5: received 0110111; recompute all three checks.",
                  "Syndrome p4 p2 p1 = 101 = 5; flip position 5; decode 1011.",
                  "State d_min >= 2t + 1 (correct t) and d_min >= 2t + 2 (detect 2t).",
                  "Note d_min = 3 for (7,4) hence single-error correction.",
                ],
              },
              {
                q: "How many parity bits are needed for 8 data bits in a Hamming code, and where are they placed?",
                marks: 3,
                outline: [
                  "Need k with 2^k >= m + k + 1; k = 4 (12-bit word).",
                  "Placed at positions 1, 2, 4, 8.",
                  "Data fills the remaining 8 positions.",
                ],
              },
              {
                q: "A code has minimum distance 5. How many errors can it correct and how many can it detect?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "Flow control and sliding window: Stop-and-Wait, Go-Back-N, Selective Repeat",
            body: [
              "Flow control prevents a fast sender from overrunning a slow receiver; reliable delivery adds the need to retransmit lost frames. The two problems share one machinery: sequence numbers and acknowledgement windows. Stop-and-Wait is the baseline - sender transmits one frame and blocks until its acknowledgement arrives; each frame carries a 1-bit sequence number so duplicate frames after a lost ack can be recognised. Its fatal weakness is utilisation: with frame transmission time Tt and round-trip propagation Tp, efficiency U = Tt / (Tt + 2Tp). Worked example: a 64 kbps satellite link, 1000-byte frames (Tt = 0.125 s) and 536 ms RTT gives U = 0.125 / (0.125 + 0.536) = about 19% - four fifths of the channel idles while waiting.",
              "Sliding window protocols fix this by sending up to W frames before requiring an ack. With Go-Back-N the sender keeps a window of N outstanding frames; cumulative acknowledgements (ack n means 'all frames up to n-1 received'); on a timeout the sender retransmits the lost frame AND everything after it. Receiver buffers nothing out of order - it discards any frame arriving out of sequence. Worked example: N = 5, frames 0-4 sent, frame 2 lost, frames 3-4 arrive and are discarded; after timeout the sender retransmits 2, 3, 4 - three frames wasted per one lost. The sequence number space must satisfy W <= 2^m - 1 for m-bit numbers (W = 7 for 3 bits) so old and new frames can never be confused.",
              "Selective Repeat (SR) refines this: the receiver buffers out-of-order frames and acknowledges each individually; only the genuinely lost frame is retransmitted. SR needs W <= 2^(m-1) (W = 4 for 3-bit sequence numbers) because receiver and sender windows together must be less than the sequence space. Worked example: same loss of frame 2 with N = 5 - receiver stores 3 and 4, acks each; sender retransmits only frame 2, receiver delivers 2, 3, 4 in order. Bandwidth cost: one frame retransmitted instead of three. The price is receiver memory and per-frame ack overhead, which is why GBN dominates where errors are rare and SR where errors are frequent or bandwidth is precious.",
              "Optimal window sizing closes the unit: to keep the pipe full, W must be at least the bandwidth-delay product in frames - W >= 1 + 2Tp/Tt. For the satellite example: 1 + 0.536/0.125 = about 5.3, so W = 6 frames saturates the link; W = 4 leaves roughly a quarter of the capacity unused. Compare the three protocols in one line each: Stop-and-Wait = simplest, W = 1, halves itself on long fat links; GBN = one timer, cumulative acks, retransmits in-order tails; SR = per-frame timers, individual acks, out-of-order buffering. Every modern reliable transport (TCP) is a hybrid: cumulative acks like GBN, selective retransmission options like SR.",
            ],
            keyTerms: [
              { term: "Sliding window", definition: "Set of frame numbers the sender may have outstanding without acknowledgement." },
              { term: "Cumulative acknowledgement", definition: "Ack n confirms receipt of all frames numbered below n (Go-Back-N style)." },
              { term: "Go-Back-N window bound", definition: "W <= 2^m - 1 for m-bit sequence numbers." },
              { term: "Selective Repeat window bound", definition: "W <= 2^(m-1) for m-bit sequence numbers." },
            ],
            table: {
              caption: "The three sliding-window protocols.",
              headers: ["Property", "Stop-and-Wait", "Go-Back-N", "Selective Repeat"],
              rows: [
                ["Window size", "1", "N <= 2^m - 1", "N <= 2^(m-1)"],
                ["Acks", "Per frame, 1-bit number", "Cumulative", "Individual (or negative)"],
                ["Receiver buffering", "None", "None - discards out-of-order", "Buffers out-of-order frames"],
                ["On frame loss", "Resend one frame", "Resend lost frame + all after it", "Resend only the lost frame"],
                ["Timers", "One", "One per window", "One per frame"],
                ["Best for", "Simple, low-delay links", "Rare errors", "Frequent errors / costly bandwidth"],
              ],
            },
            callout: {
              type: "exam",
              title: "Window bound questions are guaranteed marks",
              body: "Memorise the two bounds and WHY: GBN uses W <= 2^m - 1 because the ack for frame W would collide with the number of the first new frame; SR needs W <= 2^(m-1) because the receiver's acceptance window and the sender's new-frame window together must fit in the sequence space without overlap. Draw the two windows when explaining.",
            },
            diagram: {
              kind: "compare",
              title: "Go-Back-N versus Selective Repeat after losing frame 2",
              caption:
                "Same loss, same window - GBN retransmits three frames, SR retransmits one; that difference is the whole design choice.",
              left: {
                heading: "Go-Back-N (W = 5)",
                items: [
                  "Frames 0-4 sent; frame 2 lost",
                  "Frames 3, 4 arrive out of order and are discarded",
                  "Timeout: retransmit 2, 3, 4 (3 frames)",
                  "Receiver needs no buffer",
                  "One timer for the whole window",
                ],
              },
              right: {
                heading: "Selective Repeat (W = 5)",
                items: [
                  "Frames 0-4 sent; frame 2 lost",
                  "Frames 3, 4 arrive, are buffered and acked",
                  "Only frame 2 is retransmitted (1 frame)",
                  "Receiver delivers 2, 3, 4 in order",
                  "Per-frame timers + receiver buffer",
                ],
              },
            },
            bullets: [
              "Stop-and-Wait: W = 1, utilisation U = Tt / (Tt + 2Tp) - about 19% on the worked satellite link.",
              "Sliding window sends N frames before waiting; pipelining fills the bandwidth-delay product.",
              "GBN: cumulative acks, no receiver buffering, retransmits everything after a loss.",
              "SR: individual acks, out-of-order buffering, retransmits only what was lost.",
              "Window bounds: GBN W <= 2^m - 1; SR W <= 2^(m-1) - with 3-bit numbers, 7 and 4.",
              "Optimal W >= 1 + 2Tp / Tt; satellite example needs W = 6 to saturate a 64 kbps link.",
              "TCP later combines GBN cumulative acks with SR-style selective retransmission.",
            ],
            examQuestions: [
              {
                q: "Explain Stop-and-Wait, Go-Back-N and Selective Repeat with diagrams. Compute Stop-and-Wait utilisation for a 64 kbps link with 536 ms RTT and 1000-byte frames, derive the optimal window, and justify the sequence-number bounds.",
                marks: 7,
                outline: [
                  "Stop-and-Wait operation and U = Tt / (Tt + 2Tp).",
                  "Tt = 8000 bits / 64000 bps = 0.125 s; U = 0.125 / 0.661 = about 19%.",
                  "Explain sliding window and bandwidth-delay product W >= 1 + 2Tp/Tt = 5.3, so W = 6.",
                  "GBN: cumulative acks, discard out-of-order, resend from lost frame.",
                  "SR: buffer out-of-order, resend only lost frame.",
                  "Bounds: GBN W <= 2^m - 1, SR W <= 2^(m-1), with reasons.",
                  "Conclude: error rate and bandwidth cost select the protocol.",
                ],
              },
              {
                q: "A protocol uses 4-bit sequence numbers. What is the maximum window for Go-Back-N and for Selective Repeat?",
                marks: 3,
                outline: [
                  "GBN: 2^4 - 1 = 15.",
                  "SR: 2^(4-1) = 8.",
                  "State the reasoning behind each bound.",
                ],
              },
              {
                q: "Why does Go-Back-N discard out-of-order frames instead of buffering them?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.7",
            title: "Medium access: ALOHA and CSMA",
            body: [
              "When many stations share one broadcast channel, some rule must decide who transmits - the MAC (medium access control) problem. Random access protocols let stations transmit whenever they like and clean up after collisions. Pure ALOHA: transmit immediately; if no ack returns within the timeout, wait a random backoff and retransmit. Its vulnerable period is 2 frame times (a collision occurs if any transmission overlaps ours), giving throughput S = G e^(-2G) maximised at G = 0.5, S = 1/(2e) = 18.4% of channel capacity. Slotted ALOHA synchronises transmissions to slot boundaries, halving the vulnerable period to 1 frame time: S = G e^(-G), maximised at G = 1, S = 1/e = 36.8%.",
              "Carrier Sense Multiple Access (CSMA) listens before transmitting - 'sense before you speak'. Three variants: 1-persistent CSMA transmits immediately if idle (and keeps retrying while busy) - highest utilisation but guaranteed collisions when several stations wait; non-persistent CSMA transmits with probability 1 if idle, otherwise waits a random time and re-senses - lower load, less collision, more delay; p-persistent CSMA transmits with probability p in each idle slot - tunable between the two. Even sensing cannot prevent all collisions because propagation delay means a distant station may have already started: the larger the distance/bandwidth product, the larger the wasted window.",
              "CSMA/CD (collision detection) adds listening DURING transmission: if a collision is detected, abort immediately, send a 32-bit jam signal, then back off exponentially (binary exponential backoff: after i collisions, wait 0 to 2^i - 1 slot times, capped at 10, i.e. 1023 slots; give up after 16 attempts). Minimum frame size makes collisions detectable: a sender must still be transmitting when a collision echo returns, so frame transmission time >= 2 x propagation time. Worked example (classic Ethernet): 10 Mbps, 2.5 km maximum network extent, signal speed about 2 x 10^8 m/s gives one-way delay 12.5 microseconds, so slot time = 51.2 microseconds and minimum frame = 10 Mbps x 51.2 microseconds = 512 bits = 64 bytes. Any frame shorter than 64 bytes cannot have its collision detected - hence the padding rule.",
              "Advantages and limitations: ALOHA is trivially simple, needs no synchronisation (pure) and suits bursty, sparse traffic - but collapses as load grows (beyond G = 0.5 pure / G = 1 slotted, throughput falls, since more load means more collisions). CSMA raises throughput substantially by not transmitting blind, but requires carrier sensing hardware and still wastes time on collisions, which CSMA/CD minimises by aborting early. CSMA/CD works poorly at high bit rates over long distances (the 2Tp window grows), which is exactly why switched full-duplex Ethernet dropped CSMA/CD entirely, and why wireless links use CSMA/CA (collision avoidance) instead - a radio cannot hear the channel while transmitting (its own signal drowns the receiver), and hidden stations may be inaudible altogether.",
            ],
            keyTerms: [
              { term: "Vulnerable period", definition: "Time window during which another transmission can collide with ours; 2Tt (pure) or Tt (slotted) ALOHA." },
              { term: "1-persistent CSMA", definition: "Sense, transmit immediately if idle; keep sensing while busy - maximum contention." },
              { term: "Binary exponential backoff", definition: "After i collisions wait a random 0 to 2^i - 1 slot times; give up after 16." },
              { term: "Jam signal", definition: "32-bit pattern transmitted after detecting a collision so every station notices it." },
            ],
            table: {
              caption: "Random access protocols: throughput numbers to quote.",
              headers: ["Protocol", "Throughput formula", "Maximum S", "Key mechanism"],
              rows: [
                ["Pure ALOHA", "S = G e^(-2G)", "18.4% at G = 0.5", "Transmit anytime, random backoff"],
                ["Slotted ALOHA", "S = G e^(-G)", "36.8% at G = 1", "Slot-synchronised starts"],
                ["1-persistent CSMA", "sim-based", "higher than ALOHA", "Sense then transmit immediately"],
                ["CSMA/CD", "sim-based", "near capacity on short LANs", "Sense + abort + exponential backoff"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two numbers carry this question",
              body: "Quote 18.4% for pure ALOHA (G = 0.5) and 36.8% for slotted ALOHA (G = 1), with formulas S = G e^(-2G) and S = G e^(-G). Then derive the 64-byte minimum Ethernet frame from slot time 51.2 microseconds at 10 Mbps - these three computations are the scored core of any ALOHA/CSMA answer.",
            },
            diagram: {
              kind: "cycle",
              title: "CSMA/CD operation loop",
              caption:
                "Sense, transmit, watch for collision, back off exponentially - and repeat until the frame gets through.",
              steps: [
                { label: "Sense channel", note: "idle? start now; busy? defer" },
                { label: "Transmit frame", note: "keep listening while sending" },
                { label: "Collision detected?", note: "abort + send jam signal" },
                { label: "Binary exponential backoff", note: "wait 0..2^i - 1 slots after i collisions" },
                { label: "Retry (max 16)", note: "give up and report error after 16 attempts" },
                { label: "Ack received - done", note: "frame delivered, loop ends" },
              ],
            },
            bullets: [
              "Pure ALOHA: transmit immediately, S = G e^(-2G), peak 18.4% at G = 0.5.",
              "Slotted ALOHA: slot-aligned, S = G e^(-G), peak 36.8% at G = 1.",
              "CSMA variants: 1-persistent (immediate), non-persistent (random re-sense), p-persistent (probabilistic per slot).",
              "CSMA/CD: abort on collision, jam signal, binary exponential backoff, give up after 16 tries.",
              "Minimum frame rule: transmission time >= 2 x propagation; 10 Mbps Ethernet = 51.2 microsecond slot = 64 bytes.",
              "Collisions grow with the distance x bandwidth product - long fat links defeat CSMA/CD.",
              "Wireless cannot do CD (own signal drowns receiver, hidden-terminal problem) - hence CSMA/CA in Wi-Fi.",
              "Switched full-duplex Ethernet eliminated CSMA/CD entirely.",
            ],
            examQuestions: [
              {
                q: "Explain pure ALOHA, slotted ALOHA and CSMA/CD. Derive or state their throughput formulas with maximum values, and show why Ethernet needs a 64-byte minimum frame at 10 Mbps with 51.2 microsecond slot time.",
                marks: 7,
                outline: [
                  "Pure ALOHA: transmit anytime, vulnerable period 2Tt, S = G e^(-2G), max 18.4%.",
                  "Slotted ALOHA: slots halve the vulnerable period, S = G e^(-G), max 36.8%.",
                  "CSMA: sense first; 1-, non- and p-persistent variants.",
                  "CSMA/CD: detect during transmission, jam, exponential backoff.",
                  "Collision detectability needs Tt >= 2Tp.",
                  "10 Mbps x 51.2 microseconds = 512 bits = 64 bytes minimum frame.",
                  "Note why wireless uses CSMA/CA instead.",
                ],
              },
              {
                q: "A slotted ALOHA network generates G = 1 frame per slot time. What fraction of slots carries a successful frame, and what fraction collides?",
                marks: 3,
                outline: [
                  "S = G e^(-G) = 1/e = 0.368 success.",
                  "Idle probability e^(-1) = 0.368.",
                  "Collision probability 1 - 0.368 - 0.368 = 0.264.",
                ],
              },
              {
                q: "What is the jam signal and when is it sent?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.8",
            title: "Ethernet: IEEE 802.3 frame, MAC addressing and CSMA/CD in practice",
            body: [
              "Ethernet (IEEE 802.3) is the dominant LAN technology: it defines the physical signalling and the MAC frame. The classic frame fields: Preamble (7 bytes of alternating 1010... to synchronise the receiver's clock) + Start of Frame Delimiter (1 byte, 10101011); Destination MAC (6 bytes) and Source MAC (6 bytes); Type/Length (2 bytes - values >= 1536 identify the payload protocol, e.g. 0x0800 IPv4, 0x0806 ARP); payload (46 to 1500 bytes - padded to the 46-byte minimum when short); and Frame Check Sequence (4-byte CRC-32). Total maximum = 1518 bytes; minimum (without preamble) = 64 bytes, dictated by collision detection as derived in section 2.7.",
              "MAC addresses are 48-bit (6-byte) identifiers burned into NICs, written as 12 hex digits - e.g. 00:1A:2B:3C:4D:5E. The first 3 bytes are the Organizationally Unique Identifier (vendor), the last 3 the interface serial. Two special addresses matter: the broadcast address FF:FF:FF:FF:FF:FF (delivered to all stations on the LAN) and multicast addresses (first bit of first octet = 1). MAC addresses are locally significant (layer 2, per hop) while IP addresses are globally routable (layer 3, end-to-end) - resolution between them is ARP's job, covered in Unit III. A frame's MAC addresses change at every router hop even though the IP addresses inside never do - quote that sentence whenever the two address families are compared.",
              "Operation in classic half-duplex Ethernet: stations share one coaxial cable or a hub; a station with a frame to send senses the channel (CSMA), transmits, and watches for collisions; on collision it jams, backs off exponentially and retries. With switches and full duplex, every port is a private collision domain and CSMA/CD becomes unnecessary - a switched network can send and receive simultaneously at full rate. Speeds evolved: 10 Mbps (10Base5 'thick', 10Base2 'thin', 10Base-T twisted pair), 100 Mbps Fast Ethernet, 1 Gbps Gigabit Ethernet, 10/40/100 Gbps - all keeping the same frame format, which is Ethernet's great design virtue: the frame survived every physical revolution.",
              "Worked example (hex dump): an Ethernet frame carrying an ARP packet begins with preamble 55 55 55 55 55 55 55 (alternating bits), SFD D5, then destination FF FF FF FF FF FF (broadcast), source 00 1A 2B 3C 4D 5E, type 08 06 (ARP), then the ARP payload, then the 4-byte CRC. Reading a dump like this - field by field, byte by byte - is a standard exam exercise, and the same skill underlies protocol analysers (Wireshark). Advantages of Ethernet: simple, cheap, self-learning switches, enormous installed base, one frame format across all speeds. Limitations: 1500-byte MTU forces segmentation of larger packets; classic shared Ethernet degrades under load (collision storms); no native encryption or authentication in the basic frame (security added by 802.1X, 802.1AE).",
            ],
            keyTerms: [
              { term: "MTU 1500 bytes", definition: "Maximum Ethernet payload size; larger IP packets must be fragmented." },
              { term: "OUI", definition: "Organizationally Unique Identifier - first 3 bytes of a MAC address, assigned to the vendor." },
              { term: "Broadcast MAC FF:FF:FF:FF:FF:FF", definition: "Frame delivered to every station on the local LAN segment." },
              { term: "EtherType 0x0800", definition: "Type field value identifying the payload as IPv4 (0x0806 = ARP, 0x86DD = IPv6)." },
            ],
            table: {
              caption: "IEEE 802.3 frame fields.",
              headers: ["Field", "Bytes", "Purpose"],
              rows: [
                ["Preamble + SFD", "7 + 1", "Clock synchronisation; 10101011 delimiter"],
                ["Destination MAC", "6", "Receiving NIC's hardware address"],
                ["Source MAC", "6", "Sending NIC's hardware address"],
                ["Type / Length", "2", "Payload protocol (0x0800 IPv4) or length"],
                ["Payload", "46-1500", "Data, padded to 46 bytes minimum"],
                ["CRC-32 (FCS)", "4", "Error detection over the whole frame"],
              ],
            },
            callout: {
              type: "tip",
              title: "Why 46 bytes minimum payload",
              body: "The 64-byte minimum frame minus 18 bytes of header/trailer (6+6+2+4) leaves exactly 46 bytes of payload. Frames whose data is shorter are padded - state this arithmetic in the exam; it connects the CSMA/CD slot-time derivation to the frame format and earns the synthesis marks.",
            },
            diagram: {
              kind: "pipeline",
              title: "An Ethernet frame, field by field",
              caption:
                "64 to 1518 bytes: the minimum comes from collision detectability, the maximum from the 1500-byte MTU.",
              stages: [
                { label: "Preamble + SFD (8 B)", note: "101010... then 10101011" },
                { label: "Dest MAC + Source MAC (12 B)", note: "or FF:FF:FF:FF:FF:FF to broadcast" },
                { label: "Type/Length (2 B)", note: "0x0800 = IPv4, 0x0806 = ARP" },
                { label: "Payload (46-1500 B)", note: "padded to the 46-byte minimum" },
                { label: "CRC-32 (4 B)", note: "receiver discards frame on mismatch" },
              ],
            },
            bullets: [
              "Frame: preamble+SFD, dest/src MAC, type, payload 46-1500 B, CRC-32; 64-1518 bytes total.",
              "MAC = 48 bits, OUI + serial; broadcast FF:FF:FF:FF:FF:FF.",
              "MAC addresses change at every hop; IP addresses persist end-to-end.",
              "EtherType 0x0800 = IPv4, 0x0806 = ARP, 0x86DD = IPv6.",
              "64-byte minimum from CSMA/CD: 51.2 microsecond slot time x 10 Mbps = 512 bits.",
              "Switched full-duplex Ethernet makes CSMA/CD unnecessary; every port is its own collision domain.",
              "One frame format survived 10 Mbps to 100 Gbps - the key to Ethernet's dominance.",
              "Limitations: 1500-byte MTU, load degradation in shared mode, no native security.",
            ],
            examQuestions: [
              {
                q: "Draw and explain the IEEE 802.3 Ethernet frame format with all field sizes. Explain MAC addressing including broadcast, and discuss why switched full-duplex Ethernet no longer needs CSMA/CD.",
                marks: 7,
                outline: [
                  "Draw the frame with byte counts: 8 preamble, 6+6 MAC, 2 type, 46-1500 payload, 4 CRC.",
                  "Preamble/SFD purpose: clock sync and delimiter.",
                  "Type field examples: 0x0800, 0x0806, 0x86DD.",
                  "MAC structure: OUI + serial; broadcast address meaning.",
                  "Minimum 64 bytes from slot time 51.2 microseconds; padding to 46-byte payload.",
                  "Full duplex + switch = private collision domain per port; no collisions to detect.",
                  "Limitations: MTU 1500, no native security.",
                ],
              },
              {
                q: "An Ethernet frame's payload is 12 bytes. How is it transmitted, and why?",
                marks: 3,
                outline: [
                  "Payload padded to 46 bytes with zeros; length/type field distinguishes.",
                  "Minimum frame 64 bytes is required for collision detection.",
                  "64 - 18 header/trailer bytes = 46-byte minimum payload.",
                ],
              },
              {
                q: "Decode: what does destination MAC FF:FF:FF:FF:FF:FF and type 0x0806 identify?",
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
      title: "Network Layer: IP, Addressing, ICMP and Routing",
      summary:
        "Network layer design issues, IPv4 addressing and classful classes, subnetting and CIDR with worked calculations, the IPv4 datagram header, address resolution with ARP and DHCP, ICMP messages, distance-vector and link-state routing algorithms, and IPv6.",
      chapter: {
        number: "03",
        title: "Getting Packets Across Many Hops",
        intro:
          "Unit III moves up one layer: how IP addresses are structured and subnetted, what the IPv4 header contains, how ARP maps addresses, what ICMP reports, and how routing protocols - distance vector and link state - learn the topology, closing with the transition to IPv6.",
        inOneBreath:
          "IP is best-effort and connectionless; addresses are 32 bits split network/host; subnetting borrows host bits (/26 = 4 subnets x 62 hosts); the header carries version, TTL, protocol and checksum; ARP resolves IP to MAC locally; ICMP reports errors and answers queries; distance vector exchanges tables (count-to-infinity fixed by split horizon), link state floods topology and runs Dijkstra; IPv6 = 128 bits, no fragmentation, no header checksum.",
        sections: [
          {
            number: "3.1",
            title: "Network layer services and design issues",
            body: [
              "The network layer must deliver packets from the source host to the destination host across a mesh of routers - the only layer that spans multiple hops. Its design questions: should the service be connection-oriented (virtual circuits) or connectionless (datagrams)? Who is responsible for delivery guarantees - the network (ATM's approach) or the end hosts (IP's approach)? The Internet answered decisively: IP is connectionless, best-effort, and dumb at the core - no ordering, no duplicates removal, no loss recovery, no congestion guarantees - with all intelligence (TCP reliability, congestion control) pushed to the hosts. This 'end-to-end argument' is what allowed the network to scale to billions of hosts.",
              "Two sub-modes again matter (from Unit I, now with routing detail). Datagram networks: each packet carries the full 32-bit destination address; every router makes an independent forwarding decision from its routing table; packets may arrive out of order, be duplicated or lost; no state is kept per conversation - routers crash and paths reroute without breaking 'state' because there is none. Virtual-circuit networks: a connection setup phase fixes a path; each packet carries a short VC identifier that is rewritten hop by hop (label swapping); ordering and quality can be guaranteed, but switches hold state and a link failure tears down circuits. The Internet chose datagrams; X.25, Frame Relay and ATM chose virtual circuits.",
              "Worked example: a packet from host A (10.0.1.5) to server B (172.16.9.20) crosses three routers R1-R2-R3. At R1 the routing table is consulted: longest-prefix match on 172.16.9.20 selects the entry 172.16.9.0/24 via next hop 10.0.2.1 on interface eth1; TTL is decremented (67 to 66), the header checksum is recomputed, the frame is rebuilt for the next link with new MAC addresses. This happens at every router - the IP addresses in the header never change (except under NAT), but the layer-2 frames are rewritten hop by hop. If a router's table lists 172.16.0.0/16 via another path AND 172.16.9.0/24 via the first, the more specific (longer) prefix wins - longest prefix match is the fundamental forwarding rule.",
              "Services and limitations of the design: connectionless operation gives resilience (reroute around failures), scalability (no per-flow state) and simplicity, but forces hosts to cope with loss, duplication, reordering and variable delay - the price TCP pays with sequence numbers and retransmission. Other design issues the network layer owns: congestion control at the network level (rarely; mostly left to TCP), error reporting (ICMP), fragmentation and reassembly when links disagree on maximum packet size (routers fragment, only the final host reassembles), and security (optional IPsec sits inside this layer). The exam answer should contrast datagram vs virtual circuit table-style and finish with the Internet's rationale.",
            ],
            keyTerms: [
              { term: "Best-effort service", definition: "IP attempts delivery but guarantees nothing - no order, no loss protection, no delay bound." },
              { term: "Longest prefix match", definition: "Router forwards using the most specific (longest) routing-table entry that matches the destination." },
              { term: "Label swapping", definition: "Virtual-circuit forwarding: each hop replaces the incoming VC id with an outgoing one." },
              { term: "TTL", definition: "Time To Live - hop counter decremented at every router; at 0 the packet is discarded (prevents loops)." },
            ],
            table: {
              caption: "Datagram vs virtual-circuit network service.",
              headers: ["Property", "Datagram (IP)", "Virtual circuit (X.25/ATM)"],
              rows: [
                ["Setup phase", "None", "Required, fixes a path"],
                ["Address in every packet", "Full 32-bit destination", "Short VC identifier, swapped per hop"],
                ["Ordering", "Not guaranteed", "Preserved"],
                ["Router state", "None per conversation", "Per-circuit state tables"],
                ["Failure handling", "Reroute next packet", "Circuit torn down, re-setup"],
                ["Example", "The Internet", "X.25, Frame Relay, ATM"],
              ],
            },
            callout: {
              type: "tip",
              title: "The end-to-end argument earns the last mark",
              body: "After comparing datagram and virtual-circuit service, state WHY the Internet chose datagrams: no per-flow state means routers stay simple and scalable, failures reroute transparently, and intelligence (reliability, congestion control) belongs at the hosts. This 'dumb core, smart edges' philosophy is the conceptual mark examiners look for.",
            },
            diagram: {
              kind: "compare",
              title: "One packet's journey: datagram vs virtual circuit",
              caption:
                "Same destination, different machinery: independent lookups per hop versus one setup and label swapping.",
              left: {
                heading: "Datagram (IP)",
                items: [
                  "Full destination address in every packet",
                  "Each router: longest prefix match, independent decision",
                  "TTL decremented, header checksum recomputed",
                  "Packets may reorder, duplicate, or be lost",
                  "Link failure: next packet simply takes another path",
                ],
              },
              right: {
                heading: "Virtual circuit (ATM)",
                items: [
                  "Setup phase fixes the path first",
                  "Short VC id swapped hop by hop",
                  "State table per circuit in every switch",
                  "Ordered, possibly guaranteed quality",
                  "Link failure: circuit torn down and re-established",
                ],
              },
            },
            bullets: [
              "Network layer = end-to-end packet delivery across routers; IP is connectionless and best-effort.",
              "Two service models: datagram (stateless, reorderable) vs virtual circuit (setup, label swap, ordered).",
              "Forwarding rule: longest prefix match wins over shorter, more general prefixes.",
              "Per-hop mechanics: TTL decrement, header checksum recompute, frame rebuild with new MACs.",
              "IP headers survive the journey; layer-2 frames are rewritten at every hop.",
              "Fragmentation happens at routers; reassembly only at the final host.",
              "Error reporting is delegated to ICMP; security to optional IPsec.",
              "Rationale: stateless core scales and reroutes; intelligence lives at the edges (TCP).",
            ],
            examQuestions: [
              {
                q: "Explain the design issues of the network layer. Compare the datagram and virtual-circuit service models and justify the Internet's choice of the datagram model.",
                marks: 7,
                outline: [
                  "State the layer's goal: host-to-host delivery across routers.",
                  "Datagram model: full address, independent per-hop decisions, no state.",
                  "Virtual-circuit model: setup, VC identifiers, label swapping, ordered.",
                  "Table comparison: setup, ordering, state, failure handling.",
                  "Worked routing example: longest prefix match on 172.16.9.20 with /24 beating /16.",
                  "Per-hop mechanics: TTL, checksum, new frame.",
                  "End-to-end argument: stateless core for scale and resilience.",
                ],
              },
              {
                q: "A router has entries 172.16.0.0/16 and 172.16.9.0/24. Which path is chosen for 172.16.9.20 and why?",
                marks: 3,
                outline: [
                  "Longest prefix match: /24 is more specific.",
                  "Packet follows the 172.16.9.0/24 route.",
                  "More general /16 entry serves other 172.16.x.x destinations.",
                ],
              },
              {
                q: "What does best-effort service mean in one sentence, and which layer compensates for it?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "IPv4 addressing and classful addressing",
            body: [
              "An IPv4 address is a 32-bit number written as four dotted decimal octets, e.g. 192.168.10.137. It is hierarchical: a network part (which network the host sits on) followed by a host part (which machine on that network). In the original classful scheme the leading bits fixed the split: Class A begins with 0 (first octet 1-126), network part 8 bits - 16 million hosts per network; Class B begins with 10 (128-191), network 16 bits - 65,534 hosts; Class C begins with 110 (192-223), network 24 bits - 254 hosts. Classes D (224-239) are multicast and E (240-255) experimental. The default masks are 255.0.0.0, 255.255.0.0 and 255.255.255.0 respectively.",
              "Three special addresses must never be assigned: all host bits 0 = the network address itself (192.168.10.0); all host bits 1 = the directed broadcast for that network (192.168.10.255); 127.x.x.x = loopback (localhost, never on the wire). Also reserved: 0.0.0.0 means 'this host', 255.255.255.255 is the limited broadcast on the local link, and RFC 1918 private ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are not routable on the Internet - NAT rewrites them at the border. These special cases are constant mark sources in short questions.",
              "Worked example: classify 140.24.7.19. First octet 140 lies in 128-191, so Class B; default mask 255.255.0.0; network part 140.24 (binary 10001100.00011000); host part 7.19. Usable addresses on that network: 140.24.0.1 to 140.24.255.254 = 65,534 hosts (2^16 minus the all-0 and all-1 host patterns). Now classify 203.0.113.45: first octet 203 begins 110, Class C, mask 255.255.255.0, network 203.0.113, 254 usable hosts. In binary, 203 = 11001011 - always check the leading bits, not decimal intuition, because the boundary values (126, 127, 128, 191, 192) are where students slip: 127 is loopback (not a Class A network), 128.1.2.3 is Class B, not A.",
              "Classful addressing wasted space catastrophically - a single-host organisation had to consume a Class C's 254 addresses, and a mid-size one a Class B's 65,534 - and exhausted address blocks long before the Internet outgrew them. The fixes, in order of deployment: subnetting (split a class inside an organisation, section 3.3), classless inter-domain routing CIDR (drop classes entirely; any prefix length /8 to /30 is routable), NAT (reuse private ranges behind one public address), and finally IPv6 (128 bits, section 3.9). Modern answers should present the classes as history and CIDR as reality: an address today is always written with an explicit prefix length, e.g. 140.24.7.19/24.",
            ],
            keyTerms: [
              { term: "Dotted decimal", definition: "32-bit IPv4 address written as four 0-255 octets separated by dots." },
              { term: "Class A/B/C", definition: "Classful scheme fixing the network/host split by leading bits 0 / 10 / 110." },
              { term: "Directed broadcast", definition: "All host bits set to 1 - the broadcast address of that specific network." },
              { term: "RFC 1918 private range", definition: "10/8, 172.16/12, 192.168/16 - reusable behind NAT, not routable publicly." },
            ],
            table: {
              caption: "Classful IPv4 addresses.",
              headers: ["Class", "Leading bits", "First octet", "Default mask", "Hosts per network"],
              rows: [
                ["A", "0", "1-126", "255.0.0.0 (/8)", "16,777,214"],
                ["B", "10", "128-191", "255.255.0.0 (/16)", "65,534"],
                ["C", "110", "192-223", "255.255.255.0 (/24)", "254"],
                ["D", "1110", "224-239", "multicast - no mask", "-"],
                ["E", "1111", "240-255", "experimental", "-"],
              ],
            },
            callout: {
              type: "warning",
              title: "127 is loopback, not Class A",
              body: "First octet 127 is reserved for loopback and is NOT a valid Class A network - listing 126 as the Class A boundary and 127 as reserved is what separates a careful answer from a careless one. Similarly 0 is reserved and the Class A host count is 2^24 - 2, never 2^24.",
            },
            diagram: {
              kind: "pyramid",
              title: "Classful address space by size",
              caption:
                "Few huge Class A networks at the top, millions of small Class C networks at the base - the imbalance CIDR replaced.",
              tiers: [
                { label: "Class A - 126 networks", note: "/8, ~16.7 million hosts each" },
                { label: "Class B - 16,384 networks", note: "/16, 65,534 hosts each" },
                { label: "Class C - ~2 million networks", note: "/24, 254 hosts each" },
                { label: "Class D / E", note: "multicast and experimental ranges" },
              ],
            },
            bullets: [
              "IPv4 address = 32 bits, four dotted decimal octets, split network part + host part.",
              "Class A: leading 0, octets 1-126, /8, 16,777,214 hosts.",
              "Class B: leading 10, octets 128-191, /16, 65,534 hosts.",
              "Class C: leading 110, octets 192-223, /24, 254 hosts.",
              "Class D = multicast (224-239), Class E = experimental (240-255).",
              "Special: host bits all 0 = network id; all 1 = broadcast; 127.x = loopback.",
              "Private ranges 10/8, 172.16/12, 192.168/16 are NAT'd, never public.",
              "Classful waste led to subnetting, CIDR, NAT and IPv6.",
            ],
            examQuestions: [
              {
                q: "Explain classful IPv4 addressing. Classify 140.24.7.19 and 203.0.113.45, give their default masks, network ids and usable host counts, and list the special addresses that cannot be assigned to hosts.",
                marks: 7,
                outline: [
                  "32-bit address, dotted decimal, network + host parts.",
                  "Class rules by leading bits with first-octet ranges.",
                  "140.24.7.19: first octet 140 in 128-191 -> Class B, /16.",
                  "Network 140.24.0.0, hosts 140.24.0.1 - 140.24.255.254 = 65,534.",
                  "203.0.113.45: leading 110 -> Class C, /24, network 203.0.113.0, 254 hosts.",
                  "Special addresses: network id, directed broadcast, loopback 127, limited broadcast 255.255.255.255.",
                  "Note classful waste and the CIDR/NAT/IPv6 evolution.",
                ],
              },
              {
                q: "How many usable host addresses exist in a Class B network, and why not 65,536?",
                marks: 3,
                outline: [
                  "Host part = 16 bits = 65,536 combinations.",
                  "All-zeros host is the network id; all-ones is broadcast.",
                  "Usable = 65,534.",
                ],
              },
              {
                q: "Which class does the address 128.1.2.3 belong to, and what is its default mask?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Subnetting, supernetting and CIDR",
            body: [
              "Subnetting divides one network into smaller pieces by borrowing bits from the host part, controlled by an extended mask. The arithmetic in three rules: number of subnets = 2^borrowed bits; hosts per subnet = 2^(remaining host bits) - 2; and a host address belongs to the subnet given by ANDing it with the mask. Subnet mask in prefix notation: /26 means 26 one-bits = 255.255.255.192 (the fourth octet 192 = 11000000). Every exam answer should show the mask in binary at least once - it is the visible step that earns method marks.",
              "Worked example (the standard one): network 192.168.10.0/24 is subnetted with mask 255.255.255.192 (/26). Borrowed bits = 2, so 2^2 = 4 subnets; remaining host bits = 6, so 2^6 - 2 = 62 hosts each. The four subnets: 192.168.10.0 - 63 (network .0, broadcast .63), 192.168.10.64 - 127, 192.168.10.128 - 191, 192.168.10.192 - 255. Which subnet holds host 192.168.10.137? AND with mask: 137 = 10001001, mask 11000000, AND = 10000000 = 128 - so it belongs to 192.168.10.128/26, whose usable range is 192.168.10.129 - 190. The block size trick (256 - 192 = 64 = subnet spacing) gives the same answer faster.",
              "Worked example 2 (design in reverse): a company needs 6 subnets of at least 30 hosts from 172.16.0.0/16. Hosts: 2^5 - 2 = 30, so keep 5 host bits; borrowed = 16 - 5 = 11 bits, mask /27 = 255.255.255.224. Subnets available: 2^11 = 2048 (need only 6), each with 30 hosts - satisfied. First three subnets: 172.16.0.0/27 (hosts .1-.30), 172.16.0.32/27 (.33-.62), 172.16.0.64/27 (.65-.94). Supernetting goes the opposite way - aggregating contiguous networks by shrinking the prefix, e.g. four /24 networks 192.168.8.0, 192.168.9.0, 192.168.10.0, 192.168.11.0 summarise as 192.168.8.0/22 (common high bits 11000000 10101000 000010xx) - which is exactly route aggregation, the mechanism that keeps Internet routing tables small.",
              "CIDR (Classless Inter-Domain Routing, RFC 1519) removes classes entirely: an address is prefix + prefix length, any length from /8 to /32 valid, allocated in blocks sized to actual need. Benefits: no forced waste (a 500-host company gets a /23, not a Class B), and route aggregation (an ISP advertises one /16 for its thousands of customers). Limitations to note: subnetting fragments small blocks and complicates management; masks of /31 and /32 have special uses (point-to-point links, host routes); and aggregation only works while address blocks stay geographically contiguous - years of piecemeal allocation have scattered prefixes, which is why routing tables keep growing despite CIDR. But the arithmetic discipline - mask, AND, count - is identical for every prefix length.",
            ],
            keyTerms: [
              { term: "Subnet mask", definition: "Bit pattern of 1s marking the network(+subnet) part of an address; ANDed with the address to find the subnet." },
              { term: "Prefix notation /n", definition: "Number of 1-bits in the mask; /26 = 255.255.255.192." },
              { term: "Block size", definition: "256 - (last mask octet) = number of addresses spanned by a subnet, e.g. /26 spans 64." },
              { term: "CIDR", definition: "Classless routing: address = prefix + length, any /n valid, enabling aggregation." },
            ],
            table: {
              caption: "Subnetting cheat table for the last octet.",
              headers: ["Prefix", "Last octet mask", "Block size", "Usable hosts", "Subnets from /24"],
              rows: [
                ["/25", "128", "128", "126", "2"],
                ["/26", "192", "64", "62", "4"],
                ["/27", "224", "32", "30", "8"],
                ["/28", "240", "16", "14", "16"],
                ["/30", "252", "4", "2", "64"],
              ],
            },
            callout: {
              type: "exam",
              title: "The AND step is the answer",
              body: "Never just quote the subnet range - show the AND operation: 137 = 10001001, mask 11000000, result 10000000 = 128. Then state the range .129-.190 and exclude .128 (network) and .191 (broadcast). Examiners award the binary AND explicitly, and forgetting to subtract 2 for network+broadcast is the most common lost mark.",
            },
            diagram: {
              kind: "flow",
              title: "Subnetting a /24 into four /26s",
              caption:
                "Borrow 2 host bits, compute mask and block size, list ranges, then locate a host by ANDing.",
              steps: [
                { label: "Start: 192.168.10.0/24", note: "255.255.255.0" },
                { label: "Borrow 2 host bits", note: "mask /26 = 255.255.255.192" },
                { label: "2^2 = 4 subnets, 62 hosts each", note: "block size 256 - 192 = 64" },
                { label: "Ranges: .0-.63, .64-.127, .128-.191, .192-.255", note: "network + broadcast at each edge" },
                { label: "Locate 137: AND gives .128", note: "host 137 lies in subnet 192.168.10.128/26" },
              ],
            },
            bullets: [
              "Subnetting borrows host bits: subnets = 2^b, hosts = 2^(h) - 2 per subnet.",
              "Mask /26 = 255.255.255.192; block size 64; four /26 subnets fit a /24.",
              "Worked: 192.168.10.137 ANDed with /26 mask lands in subnet 192.168.10.128/26 (hosts .129-.190).",
              "Design backwards: need 6 x 30 hosts -> 5 host bits -> /27, mask 255.255.255.224.",
              "Supernetting merges contiguous networks: 192.168.8.0 - 192.168.11.0 = 192.168.8.0/22.",
              "CIDR drops classes: any prefix /8-/32, allocation sized to need.",
              "Route aggregation shrinks global routing tables - the purpose of CIDR.",
              "Limitation: scattered historical allocations limit real-world aggregation.",
            ],
            examQuestions: [
              {
                q: "Explain subnetting with CIDR notation. Given 192.168.10.0/24 subnetted with mask 255.255.255.192, find the number of subnets, hosts per subnet, all subnet ranges, and the subnet containing 192.168.10.137 - showing the binary AND step.",
                marks: 7,
                outline: [
                  "Explain borrowing host bits and extended masks.",
                  "Mask /26 = 11000000 in last octet; 2 borrowed bits.",
                  "2^2 = 4 subnets; 2^6 - 2 = 62 hosts each.",
                  "Ranges .0-.63, .64-.127, .128-.191, .192-.255 with network/broadcast edges.",
                  "AND: 137 = 10001001 with 11000000 = 10000000 = 128.",
                  "Host 137 belongs to 192.168.10.128/26, usable .129-.190.",
                  "Mention block size shortcut 256 - 192 = 64.",
                ],
              },
              {
                q: "Design subnets for 6 departments with 30 hosts each starting from 172.16.0.0/16. Give the mask and the first two subnet ranges.",
                marks: 3,
                outline: [
                  "30 hosts need 5 host bits (2^5 - 2 = 30).",
                  "Mask /27 = 255.255.255.224.",
                  "First subnets: 172.16.0.0/27 (.1-.30), 172.16.0.32/27 (.33-.62).",
                ],
              },
              {
                q: "Aggregate 192.168.8.0/24 through 192.168.11.0/24 into one CIDR prefix.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.4",
            title: "IPv4 datagram header",
            body: [
              "Every IPv4 packet begins with a 20-byte base header (options extend it to 60 bytes). The fields, in order: Version (4 bits, = 4) and IHL (4 bits, header length in 32-bit words, minimum 5 = 20 bytes); Type of Service / DiffServ (8 bits, priority marking); Total Length (16 bits, header + payload, max 65,535 bytes); Identification (16 bits), Flags (3 bits: reserved, DF do-not-fragment, MF more-fragments) and Fragment Offset (13 bits, in units of 8 bytes) - the fragmentation machinery; TTL (8 bits, decremented per hop, discard at 0); Protocol (8 bits: 1 = ICMP, 6 = TCP, 17 = UDP); Header Checksum (16 bits, over the header only, recomputed at every hop because TTL changes); Source IP (32 bits); Destination IP (32 bits).",
              "Mechanics of the fields that do real work. Fragmentation: a packet larger than the next link's MTU is split; all fragments share the same Identification, MF = 1 on all but the last, and the Fragment Offset positions each piece every 8 bytes; the final host reassembles - never routers. Example: a 4000-byte IP packet (20-byte header + 3980 data) must cross an MTU-1500 link: it yields fragments carrying 1480, 1480 and 1020 data bytes (1480 = 1500 - 20 header, and 1480 is divisible by 8), with offsets 0, 185, 370 (in 8-byte units: 1480/8 = 185) and flags MF set on the first two. TTL: every router subtracts 1; at 0 the router drops the packet and sends ICMP Time Exceeded - which is exactly how traceroute maps a path.",
              "The Protocol field is the demultiplexing key: the receiving IP layer hands the payload up to ICMP (1), TCP (6), UDP (17), OSPF (89), etc., based on this byte - the network-layer twin of the port numbers the transport layer will use. The checksum covers only the header (payload protection is the transport's job) and must be recomputed at every hop because TTL changed - a design cost IPv6 removed entirely. Options (source routing, record route, timestamp) are rarely used today; they exist for diagnostics and were historically abused for attacks, so routers often filter them.",
              "Worked example (reading a header): hex dump 45 00 00 3C 1C 46 40 00 40 06 B1 E6 C0 A8 01 64 C0 A8 01 01. Decode: 45 = version 4, IHL 5 (20-byte header); 00 = normal service; 003C = total length 60 bytes; 1C46 = identification 7238; 40 00 = flags DF set, no MF, offset 0 - not fragmented; 40 = TTL 64; 06 = protocol 6, TCP; B1E6 = header checksum; C0A8 0164 = 192.168.1.100 source; C0A8 0101 = 192.168.1.1 destination. Reading a 20-byte header from hex is a standard exam exercise and the fastest way to prove understanding of field widths and byte order. Limitations of IPv4 as a design: 32-bit addresses (exhausted), per-hop checksum cost, router-performed fragmentation, and weak security - all four were fixed in IPv6.",
            ],
            keyTerms: [
              { term: "IHL", definition: "Internet Header Length - header size in 32-bit words; 5 means 20 bytes, maximum 15 means 60." },
              { term: "DF / MF flags", definition: "Do-not-Fragment forbids splitting; More-Fragments marks all but the last piece." },
              { term: "Fragment offset", definition: "Position of this fragment's data in the original packet, counted in 8-byte units." },
              { term: "Protocol field", definition: "Demultiplexes the payload: 1 = ICMP, 6 = TCP, 17 = UDP, 89 = OSPF." },
            ],
            table: {
              caption: "IPv4 header fields (base header = 20 bytes).",
              headers: ["Field", "Bits", "Meaning / typical value"],
              rows: [
                ["Version + IHL", "4 + 4", "4 and 5 (20-byte header)"],
                ["Type of Service", "8", "Priority / DiffServ marking"],
                ["Total Length", "16", "Header + data, up to 65,535 bytes"],
                ["Identification", "16", "Same for all fragments of one packet"],
                ["Flags + Offset", "3 + 13", "DF, MF; offset in 8-byte units"],
                ["TTL", "8", "Decrement per hop; 0 = drop + ICMP"],
                ["Protocol", "8", "1 ICMP, 6 TCP, 17 UDP"],
                ["Header Checksum", "16", "Header only, recomputed every hop"],
                ["Source + Destination", "32 + 32", "Dotted decimal addresses"],
              ],
            },
            callout: {
              type: "exam",
              title: "Fragment arithmetic is the favourite sub-question",
              body: "Practice one fragment calculation cold: 3980 data bytes over MTU 1500 gives fragments of 1480 + 1480 + 1020 data bytes, offsets 0, 185, 370 (divide by 8), MF = 1 on the first two only. Also remember: fragmentation can only be switched off with DF, and only the destination host reassembles.",
            },
            diagram: {
              kind: "pipeline",
              title: "The IPv4 header, field by field",
              caption:
                "20 bytes minimum: identity (addresses), delivery (TTL, protocol), and repair (fragmentation triple).",
              stages: [
                { label: "Version + IHL + TOS", note: "4, 5 (20 B), priority bits" },
                { label: "Total Length", note: "whole packet size, max 65,535 B" },
                { label: "ID + Flags + Offset", note: "fragmentation triple" },
                { label: "TTL + Protocol + Checksum", note: "hop limit, demux key, header CRC" },
                { label: "Source + Destination IP", note: "32-bit endpoints" },
              ],
            },
            bullets: [
              "Base header 20 bytes; options extend to 60; IHL counts 32-bit words.",
              "Total Length max 65,535 bytes (16-bit field).",
              "Fragmentation: ID shared by fragments, MF on all but last, offset in 8-byte units.",
              "Worked: 3980 data bytes over MTU 1500 -> 1480 + 1480 + 1020, offsets 0, 185, 370.",
              "TTL decremented per hop; 0 triggers ICMP Time Exceeded - traceroute exploits this.",
              "Protocol field demultiplexes: 1 ICMP, 6 TCP, 17 UDP.",
              "Header checksum recomputed at every hop because TTL changes - removed in IPv6.",
              "Hex decode example: 45 00 00 3C ... 06 ... = IPv4, 20-byte header, 60 bytes total, TCP payload.",
            ],
            examQuestions: [
              {
                q: "Draw and explain the IPv4 datagram header. A 4000-byte packet must cross a link with MTU 1500 - compute the fragments, their offsets and flags, and state who reassembles them.",
                marks: 7,
                outline: [
                  "Draw the header with bit widths of all fields.",
                  "Explain TTL, Protocol, Checksum roles.",
                  "Fragmentation triple: Identification, Flags (DF/MF), Offset in 8-byte units.",
                  "Payload 3980 bytes; fragments carry 1480, 1480, 1020 data bytes.",
                  "Offsets 0, 185, 370; MF = 1 on first two fragments.",
                  "Identification field identical in all three fragments.",
                  "Reassembly happens only at the final destination host.",
                ],
              },
              {
                q: "In the header byte sequence 45 00 00 3C, what are the version, header length and total length?",
                marks: 3,
                outline: [
                  "4 = IPv4, IHL 5 = 20-byte header.",
                  "0x003C = 60 bytes total length.",
                  "Payload therefore 40 bytes.",
                ],
              },
              {
                q: "Give the Protocol field values for TCP, UDP and ICMP.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "ARP, RARP, BOOTP and DHCP",
            body: [
              "Packets are addressed with IP but frames are addressed with MAC - something must map between them. ARP (Address Resolution Protocol) does it on the local link: the host broadcasts an ARP request ('who has 192.168.1.1? tell 192.168.1.100'), every station receives it, and only the owner unicast-replies with its MAC. The requester caches the pair in an ARP cache (typically valid minutes) so repeated traffic needs no new broadcast. ARP works only within one broadcast domain - if the destination is off-net, the host instead ARPs for its default gateway and lets the router continue the journey.",
              "Mechanics with a worked trace: host A (192.168.1.100, MAC ...5E) wants to reach 192.168.1.1. Its cache misses, so it sends an Ethernet broadcast frame FF:FF:FF:FF:FF:FF, EtherType 0x0806, containing sender IP/MAC and target IP with target MAC 00:00:00:00:00:00. Every host on the segment processes the request; host 192.168.1.1 replies (unicast, EtherType 0x0806) with its MAC; A stores the pair and sends the actual IP packet. Meanwhile B also cached A's mapping from the request - gratuitous learning. Attacks exist because ARP trusts everything: ARP spoofing/poisoning sends fake replies to redirect traffic (man-in-the-middle); defences are dynamic ARP inspection and static ARP entries on sensitive hosts.",
              "The reverse problem - a diskless station knows its MAC but not its IP - motivated RARP (Reverse ARP): broadcast your MAC, an RARP server replies with the assigned IP. RARP was replaced by BOOTP (bootstrap protocol, UDP-based, can also supply gateway and boot file name, but requires manual table entries) and then by DHCP (Dynamic Host Configuration Protocol), which automates everything. DHCP's DORA exchange: Discover (client broadcasts to 255.255.255.255:67), Offer (server proposes an address with lease time), Request (client formally asks for one offer), Acknowledge (server confirms with subnet mask, router, DNS servers, lease duration). Leases renew at half-life; addresses return to the pool on expiry - which is why a laptop's IP can change across visits to the same cafe.",
              "Comparison and limitations: ARP is stateless, link-local and essential, but spoofable and generates broadcast noise; RARP is obsolete; BOOTP fixed RARP's server lookup by centralising configuration but still handed out static entries; DHCP adds dynamic pools, lease times and options (DNS domain, NTP servers, TFTP boot files) at the cost of a bootstrap problem - a client with no IP must broadcast, and DHCP relays (ip helper-address) forward Discover packets across routers. Every 'how does my laptop get online' story is ARP + DHCP + default gateway, and the exam loves asking for the DORA steps in order.",
            ],
            keyTerms: [
              { term: "ARP cache", definition: "Table of recent IP-to-MAC mappings, aged out after minutes to keep it fresh." },
              { term: "Gratuitous ARP", definition: "Unsolicited ARP announcement so other hosts update their caches (e.g. after failover)." },
              { term: "DORA", definition: "DHCP's four-step exchange: Discover, Offer, Request, Acknowledge." },
              { term: "DHCP lease", definition: "Time-limited grant of an address; renewed at half-life, released at expiry." },
            ],
            table: {
              caption: "Address configuration protocols, old to new.",
              headers: ["Protocol", "Question it answers", "Transport", "Key limitation"],
              rows: [
                ["ARP", "Which MAC has this IP? (local link)", "Broadcast frames", "Spoofable; link-local only"],
                ["RARP", "Which IP belongs to my MAC?", "RARP server broadcast", "Static server tables; obsolete"],
                ["BOOTP", "IP + gateway + boot file", "UDP 67/68", "Manual per-host entries"],
                ["DHCP", "All of it, dynamically", "UDP 67/68", "Needs relay across routers"],
              ],
            },
            callout: {
              type: "exam",
              title: "DORA in the right order",
              body: "Write DHCP's Discover, Offer, Request, Acknowledge in order with a one-line description each, and note that all four ride on UDP broadcasts until the client has an address. Reversing Offer and Request is the most common slip; also mention the ip helper-address relay for clients on a different subnet.",
            },
            diagram: {
              kind: "cycle",
              title: "ARP resolution and cache life",
              caption:
                "Broadcast once, learn from the reply, cache for minutes, age out and repeat when the entry expires.",
              steps: [
                { label: "Cache miss for 192.168.1.1", note: "no mapping in local table" },
                { label: "Broadcast ARP request", note: "FF:FF:FF:FF:FF:FF, who has 192.168.1.1?" },
                { label: "Owner unicasts reply", note: "192.168.1.1 is-at MAC ...01" },
                { label: "Cache the mapping", note: "both sides learn; timer starts" },
                { label: "Use for minutes", note: "direct frames, no more broadcasts" },
                { label: "Entry ages out", note: "cycle restarts on next need" },
              ],
            },
            bullets: [
              "ARP maps IP -> MAC on one link via broadcast request / unicast reply.",
              "Only the target answers, but every listener caches the requester's mapping too.",
              "ARP spoofing poisons caches - countered by dynamic ARP inspection and static entries.",
              "Off-net destinations: ARP for the default gateway instead of the destination itself.",
              "RARP (MAC -> IP) was replaced by BOOTP, then by DHCP.",
              "DHCP DORA: Discover, Offer, Request, Acknowledge - all UDP broadcast at first.",
              "DHCP hands out mask, gateway, DNS, lease time; leases renew at half-life.",
              "DHCP relay (ip helper) forwards Discover packets across subnets.",
            ],
            examQuestions: [
              {
                q: "Explain ARP operation with a message trace, discuss the ARP cache and spoofing, and describe how DHCP's DORA exchange configures a client - including what happens when the client is on a different subnet than the server.",
                marks: 7,
                outline: [
                  "State the IP-to-MAC gap that ARP fills.",
                  "Trace: cache miss, broadcast request FF:FF:FF:FF:FF:FF, unicast reply, cache update.",
                  "Both parties learn from one exchange; cache aging.",
                  "Spoofing attack and two defences.",
                  "DORA steps in order with one line each.",
                  "Lease time and renewal at half-life.",
                  "Off-subnet clients need DHCP relay (ip helper-address).",
                ],
              },
              {
                q: "Why does a host ARP for its default gateway rather than for a remote destination IP?",
                marks: 3,
                outline: [
                  "ARP works only within the local broadcast domain.",
                  "Remote hosts are unreachable by link-layer broadcast.",
                  "The gateway router takes over and forwards hop by hop.",
                ],
              },
              {
                q: "Expand the acronym DHCP and name its four exchange messages.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "ICMP: the Internet Control Message Protocol",
            body: [
              "IP is silent about failures - so ICMP (RFC 792) is the protocol that reports them. ICMP messages ride inside IP packets (Protocol field = 1) and come in two families. Error-reporting messages: Destination Unreachable (router or host cannot deliver - code says why: network unreachable, port unreachable, fragmentation needed), Time Exceeded (TTL hit zero in transit, or reassembly timer expired), Parameter Problem (malformed header), Source Quench (historic congestion notice, deprecated), Redirect (a better first-hop router exists on this link). Query (diagnostic) messages: Echo Request / Echo Reply (ping), Timestamp Request/Reply (clock measurement), Address Mask Request/Reply (historic), Router Advertisement/Solicitation (host finds its gateway).",
              "Every ICMP error message follows one discipline: it quotes the IP header plus the first 8 bytes of the offending datagram, so the receiver can identify which packet failed (the first 8 bytes contain TCP/UDP ports). And every ICMP error obeys strict rules: no error about an error-bearing datagram, no error for multicast/broadcast frames, no error for non-first fragments, no error generated in response to ICMP errors themselves - all four rules prevent error storms. Worked example: traceroute sends UDP (or ICMP echo) packets with TTL = 1, 2, 3, ...; router n decrements TTL n to 0, drops the packet and returns ICMP Time Exceeded quoting the packet; the source reads each router's address from those replies; the final host answers with Port Unreachable (nothing listens on that port), which tells traceroute the destination is reached.",
              "Ping in detail: ping sends ICMP Echo Request with a sequence number and timestamp; the target echoes them back; the sender computes round-trip time per packet and reports loss percentage. Worked numbers: ping www.example.com returns '64 bytes from 93.184.216.34: icmp_seq=1 ttl=56 time=12.3 ms' - ttl=56 means the packet crossed 8 routers (started at 64), time=12.3 ms is the RTT of that exchange. Ten pings with one lost packet = 10% loss and jitter visible across the time column - ping is the first diagnostic of every network engineer.",
              "Limitations and security: ICMP is unauthenticated and rate-limitable, so it is a vehicle for attacks - smurf attacks bounce Echo Requests off broadcast addresses, ping floods exhaust bandwidth, and traceroute leaks topology (hence organisations filter ICMP). Yet dropping all ICMP breaks path discovery (PMTUD relies on 'fragmentation needed' Destination Unreachable messages) and breaks diagnostics - the correct policy is selective filtering, not blanket blocking. For exams: know the message categories, the four 'never reply with an error' rules, and the mechanics of ping and traceroute as worked applications.",
            ],
            keyTerms: [
              { term: "Echo Request / Reply", definition: "ICMP types 8 and 0 - the pair behind ping." },
              { term: "Time Exceeded", definition: "ICMP type 11: TTL reached 0 (type 11 code 0) or fragment reassembly timer expired (code 1)." },
              { term: "Destination Unreachable", definition: "ICMP type 3, with codes naming the cause (network, host, port, fragmentation needed)." },
              { term: "PMTUD", definition: "Path MTU discovery - relies on 'fragmentation needed' ICMP messages; blocking them breaks large packets." },
            ],
            table: {
              caption: "Principal ICMP messages.",
              headers: ["Type", "Name", "Family", "Use"],
              rows: [
                ["0 / 8", "Echo Reply / Request", "Query", "ping - reachability and RTT"],
                ["3", "Destination Unreachable", "Error", "Delivery failed; code gives reason"],
                ["11", "Time Exceeded", "Error", "TTL = 0 - the basis of traceroute"],
                ["5", "Redirect", "Error", "Better gateway exists on this link"],
                ["12", "Parameter Problem", "Error", "Bad header field detected"],
              ],
            },
            callout: {
              type: "warning",
              title: "The four never-reply rules",
              body: "ICMP errors are NEVER sent about: (1) datagrams already carrying ICMP error messages, (2) multicast or broadcast frames, (3) fragments other than the first, (4) datagrams destined to IP layer or non-first fragment losses. Reciting these four rules is the discriminator between a 4-mark and a 7-mark ICMP answer.",
            },
            diagram: {
              kind: "fork",
              title: "The two ICMP families",
              caption:
                "Errors are reactive reports about failed datagrams; queries are proactive diagnostic requests.",
              start: "Why was the ICMP message sent?",
              branches: [
                { label: "A datagram failed in transit", outcome: "Error family: Unreachable, Time Exceeded, Redirect, Parameter Problem", good: true },
                { label: "Someone asked a diagnostic question", outcome: "Query family: Echo (ping), Timestamp, Router Solicitation", good: true },
              ],
            },
            bullets: [
              "ICMP rides inside IP (Protocol = 1); it reports, never repairs.",
              "Error family: Destination Unreachable, Time Exceeded, Parameter Problem, Redirect.",
              "Query family: Echo Request/Reply (ping), Timestamp, Router Discovery.",
              "Every ICMP error quotes the original header + first 8 bytes for identification.",
              "Four never-reply rules prevent error storms (no errors about errors, multicast, later fragments).",
              "Ping: Echo with sequence number and timestamp; reports RTT and loss.",
              "Traceroute: incrementing TTL harvests Time Exceeded from every router.",
              "Blocking all ICMP breaks PMTUD; filter selectively instead.",
            ],
            examQuestions: [
              {
                q: "Explain ICMP and its message types. Describe how ping and traceroute work using ICMP messages, and state the four rules that restrict when ICMP error messages may be generated.",
                marks: 7,
                outline: [
                  "ICMP purpose: IP's error and diagnostic channel, Protocol 1.",
                  "Error types: Unreachable (codes), Time Exceeded, Parameter Problem, Redirect.",
                  "Query types: Echo pair, Timestamp, Router discovery.",
                  "Error messages quote header + first 8 bytes.",
                  "Ping trace: Echo Request/Reply, seq numbers, RTT 12.3 ms example, ttl=56 means 8 hops.",
                  "Traceroute trace: TTL 1,2,3... harvests Time Exceeded; Port Unreachable ends it.",
                  "The four never-reply rules and why they prevent storms.",
                ],
              },
              {
                q: "A ping reply arrives with ttl=56. What does it reveal about the path, assuming the sender used the default 64?",
                marks: 3,
                outline: [
                  "Each router decrements TTL by 1.",
                  "64 - 56 = 8 routers crossed.",
                  "Reply arrived within 8 hops - directional estimate only.",
                ],
              },
              {
                q: "Which ICMP type does traceroute rely on, and which message signals the destination host is reached?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.7",
            title: "Distance vector routing (Bellman-Ford) and count-to-infinity",
            body: [
              "Distance vector (DV) routing is decentralised: each router keeps a table of (destination, estimated cost, next hop) for every known destination and periodically - every 30 seconds in RIP - sends its whole table to directly connected neighbours. On receiving a neighbour's table, the router applies the Bellman-Ford relaxation: new cost to destination X via neighbour V = (my cost to V) + (V's cost to X); if this beats my current estimate, adopt it with V as next hop. No router ever sees the whole topology; each only trusts its neighbours' word.",
              "Worked example: three routers A, B, C in a line: A-B cost 1, B-C cost 1 (A-C not linked). Initial tables: A knows B at 1, unreachable C at infinity; B knows A at 1 and C at 1; C knows B at 1, A at infinity. After B advertises: A learns 'C via B' at 1 + 1 = 2; C symmetrically learns 'A via B' at 2. Convergence took one exchange. Now the failure: link B-C goes down. B immediately sets C to infinity... but the next advertisement from A says 'C at 2 via me' - B, unable to tell that A's route actually runs through B itself, adopts C at 3 via A; A then hears B's new cost and raises its own to 4. The two keep inflating each other: count-to-infinity, the classic DV pathology.",
              "Fixes, each partial: split horizon - never advertise a route back out the interface it was learned from (A would not tell B about C via B); with poison reverse - advertise it back at cost infinity, making the failure explicit; triggered updates - send immediately on change instead of waiting for the timer; and finite maximum hop counts (RIP caps at 15 hops, 16 = infinity) which guarantees loops end within a bounded count though it also caps network diameter. Worked with split horizon: B-C fails; A never told B 'C via you', so B's only knowledge is the dead link - B sets C = infinity, advertises, A raises its C to infinity too - convergence in one cycle instead of counting upward forever.",
              "Properties and practice: DV is simple, low memory (one row per destination), and works beautifully on small stable networks - RIP ran the early Internet on it. Its weaknesses: slow convergence after failures (the 'good news travels fast, bad news travels slowly' problem), bandwidth wasted on full-table broadcasts, hop-count metric only (no bandwidth or delay awareness), and the 15-hop ceiling. Bellman-Ford complexity is O(V.E) per recomputation. Production descendant: BGP is a path-vector protocol - DV with the entire path carried instead of just cost, so loops are visible and policy routing possible. The exam core is: state the algorithm, run the three-router trace, exhibit count-to-infinity, then name split horizon, poison reverse, triggered updates and the RIP cap.",
            ],
            keyTerms: [
              { term: "Distance vector table", definition: "Per-destination list of (best cost, next hop) maintained from neighbours' advertisements." },
              { term: "Bellman-Ford update", definition: "cost(X via V) = cost(V) + neighbour's cost(X); adopt if smaller." },
              { term: "Count-to-infinity", definition: "Two routers inflate a dead route's cost toward infinity by advertising through each other." },
              { term: "Split horizon / poison reverse", definition: "Never re-advertise a route out its arrival interface; poison version advertises it at infinity." },
            ],
            table: {
              caption: "Count-to-infinity with and without split horizon (B-C link fails).",
              headers: ["Round", "Plain DV: A's cost to C", "With split horizon: A's cost to C"],
              rows: [
                ["Failure detected", "B sets C = infinity", "B sets C = infinity"],
                ["Next exchange", "A hears C=2 was stale... B adopts C=3 via A", "A never claimed C via B; A adopts infinity"],
                ["Following exchange", "A adopts 4, B 5, ... unbounded", "Converged: both infinity"],
                ["RIP safety net", "cap at 16 = infinity", "cap unnecessary here"],
              ],
            },
            callout: {
              type: "exam",
              title: "Trace, then fix",
              body: "Any DV question worth 7 marks expects: (1) the Bellman-Ford update rule written as a formula, (2) the three-router A-B-C worked trace, (3) the count-to-infinity sequence (2, 3, 4, ...), (4) the four fixes with one line each. Skipping the numeric trace is the most common way to lose half the marks.",
            },
            diagram: {
              kind: "cycle",
              title: "The DV update loop",
              caption:
                "Every 30 seconds: advertise, receive, relax, converge - and when a link dies, the loop must break with split horizon.",
              steps: [
                { label: "Send full table to neighbours", note: "RIP period: 30 s" },
                { label: "Receive neighbour vectors", note: "costs as the neighbour sees them" },
                { label: "Apply Bellman-Ford rule", note: "my cost to V + V's cost to X" },
                { label: "Update table if shorter", note: "record next hop = V" },
                { label: "Triggered update on change", note: "advertise immediately, not on timer" },
                { label: "Converged - idle until change", note: "then the loop restarts" },
              ],
            },
            bullets: [
              "DV = each router knows only neighbour costs + neighbours' advertised vectors.",
              "Update rule: cost(X via V) = cost(V) + neighbour_cost(X); adopt if better.",
              "Converges by periodic exchange; RIP advertises every 30 s.",
              "Count-to-infinity: dead link costs inflate 3, 4, 5... through mutual re-advertisement.",
              "Split horizon: never advertise a route out the interface it came from.",
              "Poison reverse: advertise that route back as infinity - explicit failure signal.",
              "Triggered updates and the RIP 16 = infinity cap bound the pathology.",
              "RIP limits: 15-hop diameter, hop metric only, slow bad-news convergence; BGP generalises DV to path vectors.",
            ],
            examQuestions: [
              {
                q: "Explain the distance vector routing algorithm with the Bellman-Ford update rule. Work through routers A-B-C (costs 1 and 1) to show convergence, then show count-to-infinity when B-C fails and describe split horizon, poison reverse, triggered updates and the RIP hop cap as remedies.",
                marks: 7,
                outline: [
                  "State the per-router table and the update formula.",
                  "Trace initial tables: A knows B=1; B knows A=1, C=1; C knows B=1.",
                  "One exchange converges: A reaches C at 2 via B, C reaches A at 2 via B.",
                  "Failure: B-C down; B sets infinity, but A's stale route re-infects B.",
                  "Inflation sequence 3, 4, 5, ... = count-to-infinity.",
                  "Fixes: split horizon, poison reverse, triggered updates, RIP cap 16.",
                  "Re-trace with split horizon: convergence in one cycle.",
                ],
              },
              {
                q: "RIP treats cost 16 as infinity. What network diameter does this imply, and why is a cap useful at all?",
                marks: 3,
                outline: [
                  "Maximum usable path = 15 hops.",
                  "The cap bounds count-to-infinity - loops terminate after at most 16 counts.",
                  "Beyond 15 hops the network must use other protocols.",
                ],
              },
              {
                q: "State the Bellman-Ford relaxation formula as used in DV routing.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.8",
            title: "Link state routing, Dijkstra's algorithm and OSPF",
            body: [
              "Link state routing is the opposite philosophy: every router learns the COMPLETE topology and computes routes itself. Three phases: (1) discover neighbours - Hello packets on each interface; (2) measure costs and flood a Link State Advertisement (LSA) describing 'me, my interfaces, their costs' to ALL routers via reliable flooding (each router forwards new LSAs on every interface except the arrival one; sequence numbers discard duplicates); (3) once the Link State Database is identical everywhere, each router independently runs Dijkstra's shortest path first (SPF) algorithm and builds its own forwarding table. Failures converge fast and loops are transient because every router computes from identical, current data.",
              "Dijkstra's algorithm computes shortest paths from one source in a graph with non-negative weights. Worked example: nodes A-B 2, A-C 5, B-C 1, B-D 4, C-D 1. From A: tentative = {B:2, C:5}. Pick smallest, B = 2 (permanent). Relax B's edges: via B, C = min(5, 2+1) = 3, D = 2+4 = 6. Pick C = 3 (permanent). Relax: D = min(6, 3+1) = 4. Pick D = 4. Final: B=2 (via B), C=3 (via B then C), D=4 (via B, C, D). The routing table follows directly: to reach C, next hop B; to reach D, next hop B. Every router runs the same computation with itself as root - which is why each builds a different tree from one identical database.",
              "OSPF (Open Shortest Path First) is the production link state protocol: LSAs flooded reliably, SPF recomputed on change (and periodically to be safe), areas to bound the database (Area 0 backbone plus attached areas, with Area Border Routers summarising), equal-cost multipath supported, and authentication on every adjacency. Compare with DV on the axes exams love: knowledge (partial, from neighbours vs complete, self-computed), convergence (slow, count-to-infinity vs fast, no such pathology), memory/CPU (tiny vs O(V^2) SPF and full topology DB), message scope (periodic full tables vs flooding only on change), and scaling (small nets vs areas for large ones). RIP cost almost nothing to run; OSPF buys speed and correctness with memory and computation.",
              "Worked failure trace closing the comparison: link B-C fails in the graph above. B and C detect it via Hello timeout, originate new LSAs (incremented sequence numbers), flood them; every router's database updates within one flooding round; Dijkstra recomputes: A now reaches C via A-C direct at 5 (cost 5 beats nothing else since B-C path is dead). Convergence: seconds, with explicit topology knowledge - versus DV, where the same failure could count toward infinity. IS-IS is OSPF's sibling (used in ISP cores); both descend from the ARPANET's link state research. The exam formula: phases (Hello, flood LSA, SPF), one worked Dijkstra trace, OSPF features (areas, authentication, equal-cost paths), then the DV/LSR comparison table.",
            ],
            keyTerms: [
              { term: "Link State Advertisement (LSA)", definition: "Router's record of its interfaces and costs, flooded to every router in the area." },
              { term: "Reliable flooding", definition: "Forward a new LSA out every interface except its arrival one; sequence numbers reject duplicates." },
              { term: "Dijkstra SPF", definition: "Shortest-path-first computation over the shared topology database, rooted at the computing router." },
              { term: "OSPF Area 0", definition: "Backbone area to which all other areas attach; ABRs summarise between areas." },
            ],
            table: {
              caption: "Distance vector vs link state.",
              headers: ["Axis", "Distance vector (RIP)", "Link state (OSPF)"],
              rows: [
                ["Topology knowledge", "Neighbours' vectors only", "Complete map, computed locally"],
                ["Message content", "Full routing table, periodic", "LSAs on change only"],
                ["Convergence", "Slow; count-to-infinity risk", "Fast; flooded updates + SPF"],
                ["Memory / CPU", "Minimal", "Full DB + O(V^2) Dijkstra"],
                ["Metric", "Hop count (max 15)", "Cost (bandwidth-derived), multipath"],
                ["Scaling", "Small networks", "Areas + summarisation for large ones"],
              ],
            },
            callout: {
              type: "exam",
              title: "One Dijkstra trace, shown as a table",
              body: "Write the tentative/permanent table per step: start {B:2, C:5}; B permanent, C drops to 3 via B; C permanent, D drops to 4. State the final routing table with next hops. The visible relaxation steps - not just the final distances - are where the marks live, exactly like the CRC division.",
            },
            diagram: {
              kind: "flow",
              title: "Link state routing in five steps",
              caption:
                "Every router performs the same sequence and ends with the same database - then computes its own tree.",
              steps: [
                { label: "Discover neighbours", note: "Hello packets per interface" },
                { label: "Measure link costs", note: "bandwidth-derived metric" },
                { label: "Flood LSAs to all routers", note: "reliable, sequence-numbered" },
                { label: "Build identical topology database", note: "every router sees the whole map" },
                { label: "Run Dijkstra, install routes", note: "own root, own forwarding table" },
              ],
            },
            bullets: [
              "LSR phases: neighbour discovery (Hello), LSA flooding, independent Dijkstra computation.",
              "Reliable flooding: forward new LSAs everywhere except the arrival interface; sequence numbers kill duplicates.",
              "Dijkstra worked: A-B 2, B-C 1, A-C 5 gives C = 3 via B; B-D 4, C-D 1 gives D = 4 via B, C.",
              "Every router computes from the identical database - transient loops only, fast convergence.",
              "OSPF: areas with backbone Area 0, ABR summarisation, equal-cost multipath, authenticated adjacencies.",
              "DV vs LSR: partial vs complete knowledge; slow vs fast convergence; tiny vs heavier resources.",
              "LSR flooding traffic only on change; DV wastes bandwidth on periodic full tables.",
              "IS-IS = the ISP-core sibling of OSPF; both descend from ARPANET work.",
            ],
            examQuestions: [
              {
                q: "Explain link state routing: its phases, reliable flooding and Dijkstra's algorithm. Run Dijkstra on links A-B 2, A-C 5, B-C 1, B-D 4, C-D 1 from source A, showing every tentative update, and state the resulting routing table.",
                marks: 7,
                outline: [
                  "Three phases: Hello discovery, LSA flooding, SPF computation.",
                  "Explain reliable flooding and duplicate suppression.",
                  "Initial tentative set {B:2, C:5}.",
                  "B permanent at 2; relax: C = min(5, 3) = 3, D = 6.",
                  "C permanent at 3; relax: D = min(6, 4) = 4.",
                  "D permanent at 4; done.",
                  "Routing table: B via B, C via B, D via B.",
                ],
              },
              {
                q: "Why does link state routing not suffer from count-to-infinity?",
                marks: 3,
                outline: [
                  "Every router holds the complete current topology.",
                  "A dead link disappears from the flooded LSAs.",
                  "Dijkstra recomputes on true data - no stale second-hand vectors.",
                ],
              },
              {
                q: "What is OSPF Area 0 and what role does an Area Border Router play?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.9",
            title: "IPv6: addresses, header and transition",
            body: [
              "IPv6 (RFC 2460/8200) exists because 32 bits cannot address the planet: 4.3 billion addresses were exhausted by 2011 while phones, sensors and vehicles kept multiplying. IPv6 uses 128-bit addresses - about 3.4 x 10^38 of them, enough to number every grain of sand with millions to spare. Addresses are written as eight groups of 4 hex digits with two abbreviation rules: drop leading zeros in each group, and replace the longest run of all-zero groups with '::' (once only). Worked example: 2001:0DB8:0000:0000:0000:FF00:0042:8329 abbreviates to 2001:db8::ff00:42:8329. Address anatomy: first 64 bits = network/subnet prefix, last 64 = interface identifier (usually derived from the MAC via modified EUI-64). Special addresses: ::1 loopback, fe80::/10 link-local, 2000::/3 global unicast, ff02::1 all-nodes multicast (replacing broadcast entirely).",
              "The IPv6 header is a fixed 40 bytes, radically simplified versus IPv4: Version (4), Traffic Class (8, DiffServ), Flow Label (20, per-flow marking), Payload Length (16), Next Header (8, replaces both Protocol and the options mechanism), Hop Limit (8, = TTL), then 128-bit source and destination addresses. Removed from IPv4: header checksum (link-layer CRCs and transport checksums suffice; recomputing at every hop was wasted silicon), fragmentation fields (routers never fragment - the sender discovers path MTU and fragments itself), options (moved to chained extension headers referenced by Next Header). The result is faster forwarding: one 40-byte fixed layout parsed in silicon.",
              "IPv6's structural upgrades: no broadcast (multicast and anycast instead - one address delivered to the nearest of many hosts), built-in IPsec support, autoconfiguration (SLAAC: the host builds its own address from the router-advertised prefix + its interface ID, no DHCP needed for basic connectivity), and hierarchical aggregation designed into allocation policy (ISPs get large blocks and summarise cleanly). Transition mechanisms, because the Internet cannot flip overnight: dual stack (hosts run IPv4 and IPv6 side by side), tunnelling (IPv6 packets inside IPv4 - 6to4, Teredo), and translation (NAT64/DNS64 for IPv6-only clients reaching IPv4 servers). Each mechanism trades simplicity for compatibility; dual stack is the mainstream answer.",
              "The comparison answer, table-style: address 32 vs 128 bits; header 20-60 variable vs fixed 40 bytes; checksum present vs absent; fragmentation by routers vs senders only; broadcast present vs replaced by multicast/anycast; configuration manual/DHCP vs autoconfig-capable; security optional vs designed-in IPsec; IPsec mandatory-to-implement; mobility built into the base design. Limitations honestly stated: IPv6 deployment is decades-long, dual-stack doubles routing and operations work, and many legacy applications hardcode 32-bit address parsing. The exam's favourite numeric: compute how many /64 subnets exist in one /48 ISP block - 2^16 - and how many hosts per subnet: 2^64.",
            ],
            keyTerms: [
              { term: ":: abbreviation rule", definition: "Replace the longest single run of zero groups with '::' - useable only once per address." },
              { term: "Next Header field", definition: "IPv6's chained-protocol pointer: TCP/UDP or an extension header (routing, fragmentation, IPsec)." },
              { term: "Anycast", definition: "One address assigned to many hosts; delivery goes to the nearest - no IPv4 equivalent." },
              { term: "SLAAC", definition: "Stateless address autoconfiguration: prefix from Router Advertisement + self-generated interface ID." },
            ],
            table: {
              caption: "IPv4 vs IPv6 head-to-head.",
              headers: ["Property", "IPv4", "IPv6"],
              rows: [
                ["Address size", "32 bits (dotted decimal)", "128 bits (hex colon notation)"],
                ["Header", "20-60 bytes, variable", "Fixed 40 bytes + extension headers"],
                ["Checksum", "Header checksum, recomputed per hop", "None"],
                ["Fragmentation", "By routers and sender", "Sender only (Path MTU discovery)"],
                ["Broadcast", "Yes", "No - multicast and anycast"],
                ["Configuration", "Manual / DHCP", "SLAAC or DHCPv6"],
                ["Security", "IPsec optional", "IPsec designed in"],
                ["Example address", "192.168.1.100", "2001:db8::ff00:42:8329"],
              ],
            },
            callout: {
              type: "exam",
              title: "Abbreviate with the two rules, in order",
              body: "First strip leading zeros per group, THEN replace the longest zero-run with '::' exactly once: 2001:0DB8:0000:0000:0000:FF00:0042:8329 -> 2001:db8::ff00:42:8329. Doing the rules in the wrong order, or using '::' twice (which is ambiguous and illegal), are the two standard mark-losers.",
            },
            diagram: {
              kind: "compare",
              title: "IPv4 header versus IPv6 header",
              caption:
                "IPv6 deleted, relocated and added: checksum and fragmentation gone, flow label in, options chained.",
              left: {
                heading: "IPv4 header (20-60 B)",
                items: [
                  "IHL variable; options inline",
                  "Identification/Flags/Offset for fragmentation",
                  "Header checksum recomputed every hop",
                  "Protocol field for demux",
                  "TTL, Type of Service",
                ],
              },
              right: {
                heading: "IPv6 header (fixed 40 B)",
                items: [
                  "Fixed layout parsed at wire speed",
                  "No fragmentation fields - sender handles PMTU",
                  "No checksum at all",
                  "Next Header chains extension headers",
                  "Hop Limit, Traffic Class, Flow Label",
                ],
              },
            },
            bullets: [
              "IPv6 addresses: 128 bits, 8 hex groups, leading zeros stripped, '::' once for the longest zero run.",
              "Worked abbreviation: 2001:0DB8:0000:0000:0000:FF00:0042:8329 = 2001:db8::ff00:42:8329.",
              "Layout: 64-bit network prefix + 64-bit interface ID (EUI-64 from MAC).",
              "Special: ::1 loopback, fe80::/10 link-local, ff02::1 all-nodes multicast.",
              "Header fixed at 40 bytes: no checksum, no router fragmentation, options become extension headers.",
              "Broadcast abolished; multicast and anycast take over.",
              "SLAAC autoconfiguration; IPsec designed in; Flow Label for per-flow handling.",
              "Transition: dual stack (mainstream), tunnelling (6to4), translation (NAT64/DNS64).",
            ],
            examQuestions: [
              {
                q: "Explain IPv6 addressing and header format. Abbreviate 2001:0DB8:0000:0000:0000:FF00:0042:8329 showing both abbreviation rules, and compare the IPv4 and IPv6 headers field by field.",
                marks: 7,
                outline: [
                  "128-bit addresses, hex colon notation, 64/64 split.",
                  "Rule 1: strip leading zeros per group.",
                  "Rule 2: '::' replaces the single longest zero-run, once only.",
                  "Result: 2001:db8::ff00:42:8329.",
                  "IPv6 header fields: Traffic Class, Flow Label, Payload Length, Next Header, Hop Limit.",
                  "Removed vs IPv4: checksum, fragmentation triple, inline options.",
                  "Table comparison of the two headers.",
                ],
              },
              {
                q: "Why does IPv6 remove the header checksum that IPv4 recomputes at every hop?",
                marks: 3,
                outline: [
                  "Link layers already carry strong CRCs (Ethernet CRC-32).",
                  "Transport layers checksum their own headers + payload.",
                  "Per-hop recomputation was pure overhead in silicon.",
                ],
              },
              {
                q: "Name the three IPv4-to-IPv6 transition mechanisms.",
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
      title: "Transport Layer: UDP and TCP",
      summary:
        "Transport services and process-to-process delivery, UDP with checksum arithmetic, the TCP segment header and services, connection management with the three-way handshake, flow control and silly window syndrome, error control and timers, congestion control from slow start to fast recovery, and traffic shaping with leaky and token buckets.",
      chapter: {
        number: "04",
        title: "Reliable Bytes Between Processes",
        intro:
          "Unit IV climbs to the first end-to-end layer: how UDP delivers datagrams cheaply, how TCP builds a reliable ordered byte stream with handshakes, sequence numbers, sliding windows, retransmission timers and congestion control, and how leaky/token buckets shape traffic at the edge.",
        inOneBreath:
          "Transport = ports, demultiplexing to processes; UDP is a 8-byte header datagram service; TCP is a connection-oriented byte stream: 3-way handshake, seq/ack numbering, rwnd flow control with sliding windows, Jacobson RTT estimation, slow start doubling cwnd to ssthresh then AIMD, fast retransmit on 3 dupacks; leaky bucket smooths bursts, token bucket permits them.",
        sections: [
          {
            number: "4.1",
            title: "Transport layer services and duties",
            body: [
              "The transport layer provides process-to-process delivery: the network layer got the packet to the right HOST, the transport layer gets the data to the right PROCESS. The mechanism is port numbers - 16-bit identifiers (0-65535) attached to every segment. Well-known ports 0-1023 serve standard services (HTTP 80, HTTPS 443, DNS 53, SMTP 25, FTP 21, Telnet 23); registered ports 1024-49151 belong to applications; ephemeral ports 49152-65535 are chosen by clients per connection. A socket is the full tuple (IP address, port, protocol) - two browsers on one host share one IP but are distinguished by different ephemeral ports.",
              "Services the layer can offer: multiplexing/demultiplexing (many applications share one IP layer via ports), connection management (establishing and tearing down conversations), reliability (sequence numbers, acknowledgements, retransmission), flow control (sliding windows protecting the receiver), congestion control (protecting the network itself), ordered delivery, and optionally security (TLS sits between transport and application in practice; SCTP offers message framing and multihoming). Two philosophies split the layer: UDP (User Datagram Protocol) does only multiplexing, minimal header, no guarantees - connectionless and lean; TCP (Transmission Control Protocol) does everything above - connection-oriented, reliable, ordered, flow- and congestion-controlled.",
              "Worked example of demultiplexing: a web server at 93.184.216.34 hosts two conversations simultaneously - client A (10.0.0.5, ephemeral port 51000) talks to port 443, client B (10.0.0.9, port 51422) also to 443. Every arriving TCP segment is matched on the four-tuple (src IP, src port, dst IP, dst port); segment from A goes to socket A, segment from B to socket B - same destination port, different conversations. Without ports, one IP address could serve only one conversation at a time; with them, thousands run in parallel. The same logic inside the OS: each TCP connection is a socket table entry the kernel routes data through.",
              "Positioning and trade-offs: the transport layer runs only on end hosts (routers never see ports), which is why it can promise end-to-end properties the network cannot - ordering, reliability, congestion behaviour. Choosing between UDP and TCP is the classic design decision: real-time voice and video, DNS queries, gaming and streaming pick UDP (latency beats completeness; missing frames age out anyway); file transfer, email, web pages pick TCP (correctness matters more than delay). The exam answer should give the port number table, the socket four-tuple, the service list, and the UDP-vs-TCP selection rationale with one application example each.",
            ],
            keyTerms: [
              { term: "Port number", definition: "16-bit process identifier; well-known 0-1023, registered 1024-49151, ephemeral above 49151." },
              { term: "Socket", definition: "(IP, port, protocol) tuple identifying one endpoint of a conversation." },
              { term: "Multiplexing (transport)", definition: "Many application processes share one network-layer service, separated by ports." },
              { term: "SCTP", definition: "Stream Control Transmission Protocol - message-oriented transport with multihoming and multi-streaming." },
            ],
            table: {
              caption: "Well-known port numbers to memorise.",
              headers: ["Port", "Protocol", "Service"],
              rows: [
                ["20 / 21", "TCP", "FTP data / FTP control"],
                ["23", "TCP", "Telnet"],
                ["25", "TCP", "SMTP mail transfer"],
                ["53", "UDP/TCP", "DNS"],
                ["80 / 443", "TCP", "HTTP / HTTPS"],
                ["110 / 143", "TCP", "POP3 / IMAP mail retrieval"],
              ],
            },
            callout: {
              type: "exam",
              title: "Ports demultiplex, sockets identify",
              body: "A port number alone does not name a connection - the socket four-tuple (source IP, source port, destination IP, destination port) does. Two clients on port 51000 to the same server coexist because their source IPs differ. State this explicitly; it is the conceptual heart of every 'transport services' question.",
            },
            diagram: {
              kind: "layers",
              title: "Where the transport layer sits",
              caption:
                "End-to-end only: routers see up to layer 3; ports exist solely inside the two communicating hosts.",
              layers: [
                { label: "Application processes", note: "browser, mail client - identified by ports" },
                { label: "Transport (UDP / TCP)", note: "ports, reliability, flow + congestion control" },
                { label: "Network (IP)", note: "host-to-host delivery, routing - last layer routers see" },
                { label: "Data link + Physical", note: "hop by hop, rewritten at every router" },
              ],
            },
            bullets: [
              "Transport = process-to-process delivery; ports are the 16-bit process addresses.",
              "Port ranges: well-known 0-1023, registered 1024-49151, ephemeral 49152-65535.",
              "Socket four-tuple: (src IP, src port, dst IP, dst port) uniquely names a connection.",
              "Services: multiplexing, connections, reliability, flow control, congestion control, ordering.",
              "UDP = minimal datagram service; TCP = reliable ordered byte stream.",
              "UDP fits real-time media and DNS; TCP fits file transfer, mail, web.",
              "Transport runs only on end hosts - routers never demultiplex by port.",
            ],
            examQuestions: [
              {
                q: "Explain the services of the transport layer, the role of ports and sockets, and how demultiplexing lets one server host thousands of simultaneous conversations. Give the well-known ports for HTTP, DNS, SMTP and FTP.",
                marks: 7,
                outline: [
                  "Layer goal: process-to-process, above host-to-host IP.",
                  "Port ranges: well-known, registered, ephemeral.",
                  "Socket four-tuple definition.",
                  "Demultiplexing worked example: two clients, same dst port 443, distinct four-tuples.",
                  "Service list: multiplexing, reliability, flow/congestion control, ordering.",
                  "UDP vs TCP one-line contrast.",
                  "Ports: 80/443 HTTP(S), 53 DNS, 25 SMTP, 21 FTP control.",
                ],
              },
              {
                q: "Why does the transport layer exist at all if IP already delivers packets to the destination host?",
                marks: 3,
                outline: [
                  "IP stops at the host; many processes share that host.",
                  "Ports select the right process.",
                  "Transport also adds reliability and congestion behaviour IP lacks.",
                ],
              },
              {
                q: "Which port range is ephemeral and who chooses numbers from it?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "UDP: user datagram protocol",
            body: [
              "UDP is transport with everything optional removed: a connectionless, unreliable, message-oriented service consisting of IP plus an 8-byte header. The header fields: Source Port (16, optional - can be 0 for fire-and-forget clients), Destination Port (16), Length (16, header + data in bytes, minimum 8), Checksum (16, computed over a pseudo-header of IP fields + UDP header + data; optional in IPv4 but mandatory in IPv6). That is the whole protocol - no connection setup, no sequence numbers, no acks, no flow or congestion control. UDP's payload is a discrete datagram: each write() becomes exactly one packet, preserving message boundaries unlike TCP's byte stream.",
              "The pseudo-header checksum deserves the worked example. The checksum covers a pretend header prepended for computation only: source IP, destination IP, zero byte, protocol (17), UDP length - so a datagram delivered to the wrong host or wrong port fails the check. Worked computation for a 4-byte UDP payload 'AB CD' (41 42 43 44): pseudo-header words 0xC0A8 (part of source IP) etc. are summed with the UDP header words (source port 0x1F90 = 8080, dest port 0x0035 = 53, length 0x000C) and payload words 0x4142, 0x4344, with end-around carry at each overflow, then complemented - exactly the Internet checksum algorithm of section 2.3, just over a wider field. If the final sum is 0x0000 the checksum field is written as 0xFFFF (all-zero is the 'no checksum' marker).",
              "Why choose UDP: latency (no handshake - one packet does the job; DNS query and answer complete in one round trip with no three-way handshake), no head-of-line blocking (a lost video frame does not stall later frames the way a TCP loss freezes the byte stream), application-controlled reliability (quic/RTP add exactly the recovery they need), multicast and broadcast support (TCP is strictly unicast), and tiny overhead (8 bytes + no ack traffic vs TCP's 20+ byte header with acknowledgements). DNS, DHCP, SNMP, RTP voice/video, online gaming, and modern QUIC (HTTP/3's transport) all ride on UDP.",
              "Limitations, stated honestly: no congestion control means UDP flows can starve TCP flows and collapse a congested network - applications must self-limit (RTP pacing, QUIC's own congestion controller); no guarantee of delivery, order or deduplication - lossy links lose data silently; the datagram size is bounded by IP's 65,535-byte limit minus headers; and some firewalls treat UDP harshly because it is stateless. The selection rule for exams: if correctness-per-byte matters and latency is flexible, TCP; if timeliness matters and staleness is fatal, UDP; if the application can do better than both, build on UDP like QUIC does.",
            ],
            keyTerms: [
              { term: "Pseudo-header", definition: "IP fields prepended only for checksum computation, binding the datagram to host and protocol." },
              { term: "Datagram preservation of boundaries", definition: "Each UDP send is one packet - no byte-stream merging as in TCP." },
              { term: "Head-of-line blocking", definition: "TCP loss stalls all later bytes; UDP never blocks later datagrams." },
              { term: "QUIC", definition: "HTTP/3's reliable transport built over UDP with its own encryption and congestion control." },
            ],
            table: {
              caption: "UDP header - all 8 bytes of it.",
              headers: ["Field", "Bits", "Purpose"],
              rows: [
                ["Source port", "16", "Reply address; may be 0"],
                ["Destination port", "16", "Demultiplexes to the process"],
                ["Length", "16", "Header + data, minimum 8 bytes"],
                ["Checksum", "16", "Over pseudo-header + header + data"],
              ],
            },
            callout: {
              type: "warning",
              title: "UDP checksum 0x0000 means 'not computed'",
              body: "In IPv4 the UDP checksum is optional; a sender that skips it writes 0x0000. But the computed value can legitimately be 0x0000 - so in that case the field is transmitted as 0xFFFF. In IPv6 the checksum is mandatory. Quote both facts; the edge case is a favourite one-liner.",
            },
            diagram: {
              kind: "compare",
              title: "UDP versus TCP - the design fork",
              caption:
                "Everything TCP does costs latency and bytes; UDP deletes it all and leaves correctness to the application.",
              left: {
                heading: "UDP",
                items: [
                  "Connectionless - no handshake",
                  "8-byte header, no acks",
                  "Message boundaries preserved",
                  "No flow or congestion control",
                  "DNS, DHCP, RTP, gaming, QUIC",
                ],
              },
              right: {
                heading: "TCP",
                items: [
                  "Connection-oriented - 3-way handshake",
                  "20-60 byte header, acks, retransmission",
                  "Ordered byte stream, no boundaries",
                  "Flow + congestion control built in",
                  "HTTP, FTP, SMTP, SSH",
                ],
              },
            },
            bullets: [
              "UDP = IP + 8-byte header: ports, length, checksum. Nothing else.",
              "Connectionless, unreliable, message-oriented; boundaries preserved.",
              "Checksum covers a pseudo-header (IPs + protocol + length) + UDP header + data.",
              "Computed checksum 0 is transmitted as 0xFFFF; 0x0000 field means 'skipped' (IPv4).",
              "Advantages: no handshake latency, no head-of-line blocking, multicast-capable, tiny overhead.",
              "Used by DNS, DHCP, SNMP, RTP, gaming, QUIC (HTTP/3).",
              "Limitations: no congestion control (can starve TCP), silent loss, 65,535-byte cap.",
              "Selection rule: timeliness over completeness -> UDP; correctness over delay -> TCP.",
            ],
            examQuestions: [
              {
                q: "Explain the UDP header and services. Describe the pseudo-header checksum and why UDP suits real-time applications, and give the cases where TCP must be used instead.",
                marks: 7,
                outline: [
                  "Draw the 8-byte header with field sizes.",
                  "Connectionless, unreliable, message-oriented service description.",
                  "Pseudo-header contents and what corruption it catches (wrong host/port delivery).",
                  "Checksum edge cases: 0x0000 skipped, computed 0 sent as 0xFFFF.",
                  "Advantages: no handshake, no head-of-line blocking, multicast, overhead.",
                  "Applications: DNS, DHCP, RTP, QUIC.",
                  "When TCP instead: correctness, ordering, congestion fairness.",
                ],
              },
              {
                q: "What is head-of-line blocking, and why does UDP avoid it?",
                marks: 3,
                outline: [
                  "TCP's ordered stream: one lost segment stalls all later data awaiting retransmission.",
                  "UDP datagrams are independent - later datagrams are delivered immediately.",
                  "Applications re-order or discard stale data themselves.",
                ],
              },
              {
                q: "Give the UDP Length field's minimum value and explain why.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "TCP services and the segment header",
            body: [
              "TCP turns IP's unreliable packet service into a reliable, connection-oriented, full-duplex BYTE STREAM: bytes sent in order are delivered in order, exactly once, or the connection fails visibly. Services: connection establishment and teardown, reliable delivery with acknowledgements and retransmission, ordered delivery via sequence numbers, flow control (receiver-advertised windows), congestion control (sender-side window discipline), multiplexing by ports, and optional urgent data. TCP is byte-oriented - applications push bytes, TCP decides how to bundle them into segments; message boundaries are not preserved (contrast UDP), which is why application protocols need their own framing.",
              "The segment header (20-60 bytes): Source Port + Destination Port (16 each); Sequence Number (32 - the byte offset of this segment's first data byte in the stream); Acknowledgement Number (32 - next byte expected, valid when ACK flag set, i.e. cumulative acknowledgement); Data Offset (4 bits, header length in 32-bit words); Flags (6-9 bits: URG, ACK, PSH, RST, SYN, FIN, plus ECE/CWR for explicit congestion notification); Window (16 - the receiver's advertised free buffer, the flow-control credit); Checksum (16, mandatory, pseudo-header based); Urgent Pointer (16); Options (MSS, window scale, timestamps, SACK).",
              "Sequence numbering is the heart of reliability and it is BYTE-based, not segment-based. Worked example: the client's SYN carries seq = 1000 (Initial Sequence Number), consuming one byte, so its first data byte is 1001. Client sends 300 bytes: seq = 1001, covering bytes 1001-1300; server acks with ack = 1301 ('next expected'). Server's SYN carries seq = 5000; server sends 500 bytes: seq = 5001, and acks the client meanwhile with ack = 1301. Client acknowledges server data with ack = 5501. Each direction numbers independently - full duplex - and a retransmission simply repeats the same sequence range. The 32-bit numbers wrap around at 4 GB, handled by timestamps and protection windows.",
              "Limitations and design costs: TCP's generality costs bytes and latency (handshake before first data, ack traffic, slow-start ramp before full speed); head-of-line blocking on the single ordered stream hurts real-time flows; a spoofed RST or sequence attack is possible without cryptographic protection (TCP-AO/TLS fix it above or inside TCP); and its congestion control is fair only among TCP flows - UDP can bypass it. Header options extend the negotiation at handshake: MSS (maximum segment size, usually MTU - 40), window scale (multiplies the 16-bit window up to 1 GB), SACK (selective acknowledgement for efficient retransmission), timestamps (RTT measurement + PAWS wrap protection).",
            ],
            keyTerms: [
              { term: "Sequence number", definition: "32-bit byte offset of the segment's first data byte within its direction's stream." },
              { term: "Cumulative ack", definition: "Acknowledgement number = next byte expected; confirms everything below it." },
              { term: "ISN", definition: "Initial Sequence Number chosen at connection setup; the SYN itself consumes one sequence number." },
              { term: "MSS", definition: "Maximum Segment Size negotiated at handshake, typically MTU minus 40 (1460 for Ethernet)."},
            ],
            table: {
              caption: "TCP header fields (base header 20 bytes).",
              headers: ["Field", "Bits", "Role"],
              rows: [
                ["Source / Destination Port", "16 + 16", "Process demultiplexing"],
                ["Sequence Number", "32", "Byte offset of first data byte"],
                ["Acknowledgement Number", "32", "Next expected byte (if ACK)"],
                ["Data Offset + Reserved", "4 + 6", "Header length in 32-bit words"],
                ["Flags", "6-9", "URG, ACK, PSH, RST, SYN, FIN (+ECE, CWR)"],
                ["Window", "16", "Receiver's flow-control credit"],
                ["Checksum", "16", "Mandatory, pseudo-header based"],
                ["Options", "0-320", "MSS, window scale, SACK, timestamps"],
              ],
            },
            callout: {
              type: "tip",
              title: "SYN and FIN each consume one sequence number",
              body: "The classic trap: after ISN = 1000, the first data byte is 1001 because the SYN consumed 1000. Same for FIN. When computing acks, count SYN and FIN as one byte each even though they carry no data - exam numeric answers depend on exactly this rule.",
            },
            diagram: {
              kind: "pipeline",
              title: "A TCP segment from stream to wire",
              caption:
                "The byte stream is carved into segments; every field below rides in the 20-byte base header.",
              stages: [
                { label: "Ports", note: "16 + 16 bits: which processes" },
                { label: "Seq + Ack numbers", note: "byte offsets in each direction" },
                { label: "Flags", note: "SYN, ACK, FIN, RST, PSH, URG" },
                { label: "Window + Checksum", note: "flow-control credit, mandatory CRC" },
                { label: "Options", note: "MSS, window scale, SACK, timestamps" },
              ],
            },
            bullets: [
              "TCP = connection-oriented, reliable, ordered, full-duplex byte stream with flow + congestion control.",
              "Header 20-60 bytes; ports, 32-bit seq/ack, flags, 16-bit window, checksum.",
              "Sequence numbers count BYTES; SYN and FIN each consume one.",
              "Worked: ISN 1000, 300 bytes sent -> ack 1301; server ISN 5000 replies independently.",
              "Flags: SYN (open), FIN (close), RST (abort), ACK, PSH, URG, ECE/CWR.",
              "Window field = receiver's advertised credit; window scale option multiplies it.",
              "Options: MSS (MTU - 40 = 1460), window scale, SACK, timestamps.",
              "Costs: handshake latency, ack overhead, head-of-line blocking; QUIC/HTTP3 address them.",
            ],
            examQuestions: [
              {
                q: "Draw and explain the TCP segment header. A client uses ISN 1000 and sends 300 bytes; the server uses ISN 5000 and sends 500 bytes. Compute all sequence and acknowledgement numbers exchanged, and explain why SYN consumes a sequence number.",
                marks: 7,
                outline: [
                  "Draw the header with field widths.",
                  "Client SYN: seq 1000; SYN consumes one byte -> data starts 1001.",
                  "Client data 1001-1300; server acks 1301.",
                  "Server SYN: seq 5000, ack 1301.",
                  "Server data 5001-5500; client acks 5501.",
                  "Full duplex: independent numbering per direction.",
                  "SYN/FIN counted as one byte so acks and retransmissions stay unambiguous.",
                ],
              },
              {
                q: "What does the 16-bit Window field control, and which option overcomes its 65,535-byte limit?",
                marks: 3,
                outline: [
                  "Window = receiver's advertised free buffer (flow control credit).",
                  "Window scale option multiplies it by a power of two negotiated at handshake.",
                  "Effective window up to about 1 GB for high-bandwidth links.",
                ],
              },
              {
                q: "Name the six TCP control flags and one use each.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "TCP connection management: three-way handshake and termination",
            body: [
              "A TCP connection is virtual state, not a physical circuit: both ends allocate send/receive buffers, sequence counters and state variables. Establishment uses the three-way handshake: (1) client sends SYN with its ISN (seq = x); (2) server replies SYN + ACK (seq = y, ack = x + 1); (3) client sends ACK (ack = y + 1) - optionally carrying the first data. Three segments are the minimum: two are needed to seed each direction's sequence numbers independently, and the third lets the server know the client received its SYN - otherwise the server could not distinguish a duplicate old SYN from a fresh one. Both sides also negotiate MSS, window scale, SACK in the SYN exchange.",
              "The state machines: client walks CLOSED -> SYN_SENT -> ESTABLISHED; server CLOSED -> LISTEN -> SYN_RCVD -> ESTABLISHED. Teardown is symmetric with FIN: (1) FIN from closer, (2) ACK from other side, (3) FIN from other side, (4) final ACK - 'four-way close', with each direction closing independently (half-close allowed). States CLOSE_WAIT, LAST_ACK, FIN_WAIT_1/2, TIME_WAIT follow. Why TIME_WAIT (the client's post-close state, duration 2 x MSL, typically 60-120 s)? To let any duplicate segments from the old connection die out and to ensure the final ACK is retransmittable if lost - guaranteeing the same four-tuple can be safely reused only after all ghosts are gone.",
              "Worked numeric trace: client SYN seq = 1000 -> server; server SYN+ACK seq = 5000, ack = 1001 -> client; client ACK seq = 1001, ack = 5001, + 100 bytes of HTTP request (1001-1100) -> server; server ACK ack = 1101; server response 2000 bytes seq = 5001-7000; client ACK ack = 7001. Closing: client FIN seq = 1101 -> server acks 1102 and sends its own FIN seq = 7001; client acks 7002; client sits in TIME_WAIT for 2 MSL. Every number in that trace follows from the one-byte-SYN rule - reproduce it and the handshake question is fully scored.",
              "Anomalies and limits: simultaneous open (both sides SYN at once - rare but defined); RST aborts immediately (no FIN, buffers discarded) - used for rejections and by some firewalls; half-open connections arise when one side crashed (keepalive timers detect them); SYN flooding attacks exploit that the server allocates state upon receiving a mere SYN - countered by SYN cookies (encode state into the sequence number, allocate nothing until the ACK arrives). Delayed ACKs and Nagle's algorithm interact here too (small-packet suppression) - worth one exam sentence. The design lesson: three segments is the minimal protocol that creates synchronised state in BOTH directions over a lossy channel, and every extra state (TIME_WAIT, SYN cookies) exists to keep that state safe against duplicates and attacks.",
            ],
            keyTerms: [
              { term: "Three-way handshake", definition: "SYN, SYN+ACK, ACK exchange that synchronises ISNs and negotiates options." },
              { term: "Four-way close", definition: "FIN, ACK, FIN, ACK - each direction closes independently (half-close support)." },
              { term: "TIME_WAIT", definition: "Post-close state lasting 2 x MSL so duplicate segments die and the final ACK can be resent." },
              { term: "SYN cookies", definition: "Stateless server defence against SYN floods: state encoded in the ISN, allocated only on the final ACK." },
            ],
            table: {
              caption: "Handshake and teardown states.",
              headers: ["Phase", "Client states", "Server states", "Segments"],
              rows: [
                ["Open", "SYN_SENT -> ESTABLISHED", "LISTEN -> SYN_RCVD -> ESTABLISHED", "SYN, SYN+ACK, ACK"],
                ["Data", "ESTABLISHED", "ESTABLISHED", "full-duplex segments"],
                ["Close (client first)", "FIN_WAIT_1/2 -> TIME_WAIT -> CLOSED", "CLOSE_WAIT -> LAST_ACK -> CLOSED", "FIN, ACK, FIN, ACK"],
              ],
            },
            callout: {
              type: "exam",
              title: "Why exactly three segments?",
              body: "Two segments seed both ISNs; the third confirms the server's SYN reached the client, which is what disambiguates delayed duplicate SYNs from old connections. Add the TIME_WAIT rationale (duplicate suppression + last-ACK retransmission) and the SYN-flood defence (SYN cookies) and the connection-management answer is complete at 7 marks.",
            },
            diagram: {
              kind: "flow",
              title: "The three-way handshake with numbers",
              caption:
                "Worked ISNs: 1000 and 5000 - each SYN consumes one byte, so acks are x+1 and y+1.",
              steps: [
                { label: "Client -> SYN, seq = 1000", note: "state SYN_SENT; MSS/scale negotiated" },
                { label: "Server -> SYN+ACK, seq = 5000, ack = 1001", note: "state SYN_RCVD" },
                { label: "Client -> ACK, ack = 5001", note: "both ESTABLISHED" },
                { label: "First data may ride here", note: "client request bytes 1001 onward" },
                { label: "Later: FIN, ACK, FIN, ACK", note: "then client waits 2 x MSL in TIME_WAIT" },
              ],
            },
            bullets: [
              "Handshake: SYN (seq = x), SYN+ACK (seq = y, ack = x+1), ACK (ack = y+1).",
              "Purpose: seed both directions' ISNs, negotiate MSS/window scale/SACK, reject duplicates.",
              "Client states: CLOSED, SYN_SENT, ESTABLISHED; server adds LISTEN, SYN_RCVD.",
              "Teardown: FIN, ACK, FIN, ACK; half-close supported; RST aborts instantly.",
              "TIME_WAIT lasts 2 x MSL (about 60-120 s) to kill duplicates and allow last-ACK retransmission.",
              "Worked trace: 1000/5000 ISNs, data 1001-1300 acked 1301, server data acked 7001.",
              "SYN flood: server allocates state per SYN; SYN cookies make the SYN stateless.",
              "Keepalive timers reap half-open connections after peer crashes.",
            ],
            examQuestions: [
              {
                q: "Explain TCP connection establishment and termination with diagrams of the state machines. Justify why three segments are needed to open, why four are used to close, and why the client waits 2 x MSL in TIME_WAIT.",
                marks: 7,
                outline: [
                  "Three-way handshake segment by segment with ISNs x and y.",
                  "Why three: two seed ISNs, third confirms server's SYN received.",
                  "Duplicate-SYN disambiguation argument.",
                  "Four-way close with half-close; states CLOSE_WAIT, LAST_ACK, FIN_WAIT, TIME_WAIT.",
                  "TIME_WAIT = 2 x MSL: duplicate suppression + retransmittable final ACK.",
                  "RST abort vs orderly FIN.",
                  "SYN flooding and SYN cookies as the security footnote.",
                ],
              },
              {
                q: "In the handshake with client ISN 1000 and server ISN 5000, what are the two acknowledgement numbers and the first data sequence number?",
                marks: 3,
                outline: [
                  "Server acks 1001 (SYN consumed 1000).",
                  "Client acks 5001 (SYN consumed 5000).",
                  "First data byte: seq 1001.",
                ],
              },
              {
                q: "How do SYN cookies defend against SYN flooding?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "TCP flow control and the sliding window",
            body: [
              "TCP flow control matches sender speed to RECEIVER capacity. The receiver advertises in every segment a 16-bit Window field: rwnd = its remaining free buffer space, i.e. the highest byte it can still accept beyond the last acknowledged one. The sender may have unacknowledged bytes outstanding only up to LastByteSent - LastByteAcked <= rwnd. When the application is slow to drain the receive buffer, rwnd shrinks; when it hits 0, the sender stops - and the receiver later re-opens with a window update on a pure ACK (or the sender probes with 1-byte 'window probe' segments to avoid deadlock). This is exactly the sliding-window idea of Unit II, now in bytes instead of frames.",
              "Worked example: receiver buffer 4 KB; bytes 0-4000 received and acked but the application has consumed only 1000, so free space = 4000 + 1000 consumed? Carefully: buffer holds bytes 1000-4000 unconsumed; the receiver advertises rwnd = 4096 - 3000 = 1096, meaning the sender may transmit up to byte 4000 + 1096 = 5096 without new acknowledgement. Sender has sent through 4500: it may send 596 more bytes now, then must wait. Application drains 2000 bytes; next ACK advertises rwnd = 3096, releasing the sender to push through byte 7096. Every ACK carries the current credit - flow control is continuously renegotiated, per segment, in both directions.",
              "Silly window syndrome (SWS): when the application reads 1 byte at a time, rwnd keeps advertising tiny credits and the sender ships 1-byte packets - 40 bytes of header per byte of data. Two half-fixes meet in the middle. Receiver side (Clark's solution): never advertise a window smaller than the MSS or half the buffer - advertise 0 and wait for space instead. Sender side (Nagle's algorithm): accumulate small writes until an ACK arrives or a full MSS accumulates - one unacknowledged small segment allowed at a time. Worked: an interactive typing application with Nagle sends 'H' immediately, then buffers 'ello world' until the ack returns, then ships one 10-byte segment instead of ten 1-byte ones - at the cost of interactive latency (which is why telnet/ssh users disable Nagle with TCP_NODELAY).",
              "Limits and tuning: the 16-bit window caps credit at 65,535 bytes - fatal on high bandwidth-delay paths (a 1 Gbps link with 100 ms RTT needs a 12.5 MB window to fill!), hence the window scale option multiplying rwnd by up to 2^14 negotiated at handshake. The receive window and the congestion window (section 4.7) coexist: the sender transmits min(rwnd, cwnd) bytes outstanding. Flow control protects the RECEIVER (memory), congestion control protects the NETWORK (routers) - that one sentence distinguishes the two concepts and examiners check for it explicitly. The practical picture: rwnd shrinks under slow applications, cwnd shrinks under network loss - TCP's sending rate is the minimum of the two.",
            ],
            keyTerms: [
              { term: "rwnd", definition: "Receiver-advertised window: free buffer space carried in every segment's Window field." },
              { term: "Zero-window deadlock", definition: "rwnd = 0 stops the sender; window probes and updates restart it safely." },
              { term: "Clark's solution", definition: "Receiver never advertises a silly window: either MSS-sized or zero." },
              { term: "Nagle's algorithm", definition: "Sender buffers small writes until an ACK arrives or an MSS accumulates." },
            ],
            table: {
              caption: "Flow-control traces - one buffer, one sender.",
              headers: ["Event", "Buffer state", "Advertised rwnd", "Sender may send through byte"],
              rows: [
                ["Initial: buffer 4096, empty", "0 used", "4096", "4096"],
                ["3000 received, 1000 consumed", "3000 held", "1096", "5096 (596 more allowed)"],
                ["App drains 2000 more", "1000 held", "3096", "7096"],
                ["App stalled, buffer full", "4096 held", "0", "sender stops; probes later"],
              ],
            },
            callout: {
              type: "warning",
              title: "Flow control vs congestion control - one line apart",
              body: "Flow control protects the RECEIVER: its window (rwnd) shrinks when the application reads slowly. Congestion control protects the NETWORK: its window (cwnd) shrinks when routers drop packets. TCP sends at min(rwnd, cwnd). Mixing the two windows in an exam answer is the most common conceptual error in this unit.",
            },
            diagram: {
              kind: "cycle",
              title: "The flow-control feedback loop",
              caption:
                "Every ACK re-advertises credit: the window slides forward as data is acked and buffer space is reclaimed.",
              steps: [
                { label: "Receiver advertises rwnd", note: "free buffer space in Window field" },
                { label: "Sender transmits up to credit", note: "outstanding <= rwnd (and cwnd)" },
                { label: "Data fills receive buffer", note: "application consumes at its own pace" },
                { label: "ACK carries new rwnd", note: "shrunken or grown credit" },
                { label: "Window slides forward", note: "acked bytes released from buffer" },
                { label: "Repeat every RTT", note: "credit renegotiated continuously" },
              ],
            },
            bullets: [
              "rwnd = receiver's free buffer, advertised in every segment's Window field.",
              "Sender rule: outstanding bytes <= min(rwnd, cwnd).",
              "Worked: buffer 4096, 3000 held, 1000 consumed -> rwnd = 1096; sender may reach byte 5096.",
              "rwnd = 0 stops the sender; window probes and later updates restart it.",
              "SWS: tiny advertisements + small writes = 40-byte headers per data byte.",
              "Clark's solution (receiver: MSS or zero) + Nagle's algorithm (sender: batch small writes).",
              "Window scale option multiplies the 16-bit cap (65,535 B) up to ~1 GB for fat pipes.",
              "Flow control protects the receiver; congestion control protects the network.",
            ],
            examQuestions: [
              {
                q: "Explain TCP flow control with the advertised window. Given a 4096-byte buffer holding 3000 unconsumed bytes with 1000 consumed, compute rwnd and the highest byte the sender may transmit, and explain how silly window syndrome is fixed at both ends.",
                marks: 7,
                outline: [
                  "Define rwnd and the sliding-window rule in bytes.",
                  "Buffer arithmetic: 4096 - (3000 - 1000) = 2096... use the consistent trace: rwnd = 1096 with 3000 held.",
                  "Show sender's outstanding-byte bound and highest transmittable byte 5096.",
                  "Zero-window deadlock and window probes.",
                  "SWS definition with the 40-byte-per-byte absurdity.",
                  "Clark's receiver fix and Nagle's sender fix.",
                  "Window scale option for the 16-bit limit; min(rwnd, cwnd) conclusion.",
                ],
              },
              {
                q: "The receiver advertises rwnd = 0. How does the connection resume without deadlock?",
                marks: 3,
                outline: [
                  "Sender cannot just wait forever for an ACK.",
                  "It transmits periodic 1-byte window probes.",
                  "When buffer space frees, the receiver's ACK re-opens the window.",
                ],
              },
              {
                q: "State Nagle's algorithm in one sentence and name the option that disables it.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.6",
            title: "TCP error control, retransmission timers and RTT estimation",
            body: [
              "TCP error control combines four mechanisms: checksums (corrupt segments dropped silently), acknowledgements (cumulative, with SACK options), retransmission timers, and duplicate detection via sequence numbers. The central problem is the retransmission timeout (RTO): too short and healthy segments are resent, flooding the network; too long and every loss idles the connection for seconds. TCP measures round-trip time per ack and adapts the RTO continuously - Jacobson's algorithm, one of the great little pieces of engineering in the protocol.",
              "Jacobson's estimator: keep a smoothed RTT estimate SRTT = (1 - alpha) x SRTT + alpha x SampleRTT (alpha = 1/8) and a deviation DEV = (1 - beta) x DEV + beta x |SampleRTT - SRTT| (beta = 1/4); set RTO = SRTT + 4 x DEV. Worked trace: samples 100 ms, then 120 ms. Start SRTT = 100, DEV = 0, RTO = 100. Sample 2: SRTT = (7/8)(100) + (1/8)(120) = 87.5 + 15 = 102.5; DEV = (3/4)(0) + (1/4)|120 - 100| = 5; RTO = 102.5 + 20 = 122.5 ms. A third sample of 90 ms: SRTT = (7/8)(102.5) + (1/8)(90) = 89.7 + 11.25 = 100.9; DEV = (3/4)(5) + (1/4)|90 - 102.5| = 3.75 + 3.125 = 6.875; RTO = 100.9 + 27.5 = 128.4 ms. The RTO tracks variability, not just the mean.",
              "Two hard cases the algorithm must survive. (1) Ambiguity: when a segment times out and is retransmitted, its ACK could acknowledge the ORIGINAL or the RETRANSMISSION - using that sample corrupts the estimate (Karn's problem). Karn's algorithm: exclude retransmitted segments from RTT sampling and double RTO on each successive retransmission (exponential backoff), restoring the normal estimate once a NON-retransmitted segment is acked. (2) Fast retransmit: waiting a full RTO wastes time when evidence is already arriving - three DUPLICATE acks (same ack number four times counting the original) almost certainly mean one segment was lost while later ones got through; the sender retransmits immediately without waiting for the timer. This works because cumulative acks keep repeating while the hole exists.",
              "Retransmission strategy in full: on RTO expiry resend exactly the lowest unacknowledged segment (Go-Back-N style with cumulative acks, refined by SACK so only genuinely missing ranges are resent), double the RTO, repeat - capped by giving up after about 15 attempts (connection presumed dead). Fast recovery (section 4.7) complements fast retransmit by managing the congestion window without a slow-start restart. Worked end-to-end scenario: segments 1-10 sent; segment 5 lost; acks for 1-4 arrive, then duplicate acks 5, 5, 5 arrive with segments 6-10; three dupacks trigger immediate retransmit of 5; the next ack = 11 acknowledges everything at once - one retransmission repaired the whole window without any timer expiry.",
            ],
            keyTerms: [
              { term: "RTO", definition: "Retransmission timeout = SRTT + 4 x DEV, adapted per ack with Jacobson's algorithm." },
              { term: "Karn's algorithm", definition: "Never sample RTT from retransmitted segments; double RTO per retry." },
              { term: "Fast retransmit", definition: "Retransmit on three duplicate acks without waiting for RTO expiry." },
              { term: "SACK", definition: "Selective acknowledgement option reporting exact received ranges for efficient retransmission." },
            ],
            table: {
              caption: "Jacobson estimator trace (ms).",
              headers: ["Sample RTT", "New SRTT (alpha = 1/8)", "New DEV (beta = 1/4)", "New RTO = SRTT + 4 DEV"],
              rows: [
                ["100 (initial)", "100", "0", "100"],
                ["120", "102.5", "5.0", "122.5"],
                ["90", "100.9", "6.875", "128.4"],
              ],
            },
            callout: {
              type: "exam",
              title: "Three duplicate acks, not two",
              body: "The threshold is THREE duplicate acks - the ack number appears four times in total (original + three repeats). Two duplicates can be reordering, not loss. Also pair fast retransmit with Karn's rule in the answer: timer-based retransmission never updates RTT samples; fast retransmit triggers on evidence, before the timer.",
            },
            diagram: {
              kind: "flow",
              title: "Loss recovery: timer versus fast retransmit",
              caption:
                "Both paths resend the missing segment; the fast path saves a full RTO of idle waiting.",
              steps: [
                { label: "Segment 5 lost in transit", note: "segments 6-10 arrive fine" },
                { label: "Receiver keeps acking 5", note: "duplicate acks: 5, 5, 5" },
                { label: "Fast path: 3 dupacks", note: "retransmit 5 immediately" },
                { label: "Slow path: RTO expires", note: "RTO = SRTT + 4 DEV; retry, double RTO" },
                { label: "Ack = 11 confirms all", note: "cumulative ack repairs the window" },
              ],
            },
            bullets: [
              "Error control = checksum + cumulative acks (+SACK) + RTO timers + sequence-number dedup.",
              "RTO = SRTT + 4 x DEV; SRTT and DEV updated with alpha = 1/8, beta = 1/4.",
              "Worked: samples 100, 120, 90 ms give SRTT 100, 102.5, 100.9 and RTO 100, 122.5, 128.4.",
              "Karn: retransmitted segments yield no RTT samples; RTO doubles per retry.",
              "Fast retransmit: three duplicate acks trigger immediate resend, no timer wait.",
              "Worked loss: 5 lost among 1-10; dupacks 5,5,5 -> resend 5; ack 11 clears the window.",
              "On RTO expiry resend lowest unacked segment and double RTO; give up after ~15 attempts.",
              "SACK option reports exact holes so only missing ranges are resent.",
            ],
            examQuestions: [
              {
                q: "Explain TCP error control. Derive Jacobson's RTO with a three-sample trace (100, 120, 90 ms), state Karn's algorithm and its reason, and show how fast retransmit repairs a lost segment 5 among segments 1-10 using duplicate acknowledgements.",
                marks: 7,
                outline: [
                  "List the four error-control mechanisms.",
                  "SRTT = (7/8) old + (1/8) sample; DEV = (3/4) old + (1/4) |error|; RTO = SRTT + 4 DEV.",
                  "Trace: SRTT 100 -> 102.5 -> 100.9; RTO 100 -> 122.5 -> 128.4.",
                  "Ambiguity problem and Karn's exclusion + doubling.",
                  "Fast retransmit: dupack threshold of three.",
                  "Numeric loss trace with ack = 11 conclusion.",
                  "SACK refinement and retry cap.",
                ],
              },
              {
                q: "Why must retransmitted segments be excluded from RTT sampling?",
                marks: 3,
                outline: [
                  "The ack may be for the original or the retransmission - ambiguous.",
                  "A too-small sample (ack for original) corrupts SRTT downward.",
                  "Downward-biased SRTT causes premature retransmission loops (Karn's problem).",
                ],
              },
              {
                q: "What exactly is a duplicate acknowledgement and what does it imply?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.7",
            title: "TCP congestion control: slow start, AIMD and fast recovery",
            body: [
              "Flow control protects one receiver; congestion control protects the NETWORK - the routers whose queues overflow when aggregate sending rate exceeds capacity. TCP tracks a congestion window cwnd (in bytes) and transmits min(rwnd, cwnd) outstanding. The signal of congestion is packet loss (and, with ECN, explicit marks): on loss, TCP cuts cwnd sharply; without loss it probes upward slowly. The two growth phases: SLOW START doubles cwnd every RTT (exponential, until cwnd reaches the threshold ssthresh) and CONGESTION AVOIDANCE adds one MSS per RTT (linear, additive increase).",
              "Worked trace (the exam classic), MSS = 1 KB, ssthresh = 8 KB, initial cwnd = 1: RTT 1 sends 1, cwnd = 2; RTT 2 sends 2, cwnd = 4; RTT 3 sends 4, cwnd = 8 = ssthresh - switch to linear; RTT 4 sends 8, cwnd = 9; RTT 5 sends 9, cwnd = 10; ... growth 1, 2, 4, 8, 9, 10, 11... Now a loss occurs at cwnd = 12: fast retransmit fires (3 dupacks), ssthresh = cwnd/2 = 6, cwnd = ssthresh + 3 x MSS = 9 (fast recovery), then cwnd = 6 and linear growth resumes - 7, 8, 9... A TIMEOUT (no dupacks) is worse: ssthresh = cwnd/2, cwnd resets to 1 MSS, and slow start begins again. Write the two branches explicitly: dupack loss = multiplicative decrease only; timeout loss = full slow-start restart.",
              "The philosophy is AIMD - additive increase, multiplicative decrease - which provably converges to fair sharing of a bottleneck: two flows increase equally but whoever loses more backs off more, so their shares equalise (the sawtooth). Worked fairness picture: flows A and B each at 10 units; A suffers the next two losses, dropping to 5 then 2.5 while B stays 10; on recovery both grow +1 per RTT, but A regains ground as B now loses proportionally more - they oscillate toward equality around the bottleneck rate. Slow start's name misleads: it starts exponentially fast; it exists because at connection open the network's capacity is unknown and overshooting causes collapse - the doubling probes it in log(RTT) time.",
              "Modern refinements and limits: fast retransmit/fast recovery (1989-1996, Tahoe implements retransmit only, Reno adds recovery, NewReno fixes partial acks, SACK makes retransmission precise, CUBIC (Linux default) scales the window as a cubic function of time since last loss for high-speed paths, BBR (Google) estimates bandwidth and RTT instead of reacting to loss). Limits: AIMD throughput is inversely proportional to RTT - long-distance flows lose fairness to nearby ones; loss-based control misbehaves on wireless (random loss reads as congestion and throttles unnecessarily); and high-speed networks need thousands of segments per RTT, making the +1-MSS-per-RTT ramp glacial (CUBIC and BBR answer exactly this). The exam formula set to memorise: ssthresh = cwnd/2 on loss, cwnd = 1 on timeout, +1 MSS per RTT in avoidance, x2 per RTT in slow start.",
            ],
            keyTerms: [
              { term: "cwnd", definition: "Congestion window - sender's estimate of safe outstanding bytes; sends are capped at min(rwnd, cwnd)." },
              { term: "ssthresh", definition: "Slow-start threshold; cwnd grows exponentially below it, linearly above it." },
              { term: "AIMD", definition: "Additive increase (+1 MSS per RTT), multiplicative decrease (halve cwnd on loss) - fair and stable." },
              { term: "Fast recovery", definition: "After dupack-triggered loss: set ssthresh = cwnd/2, inflate cwnd temporarily, resume avoidance without slow start." },
            ],
            table: {
              caption: "Worked congestion window trace (MSS = 1 KB, ssthresh = 8 KB).",
              headers: ["RTT", "cwnd sent (KB)", "Growth rule", "Notes"],
              rows: [
                ["1", "1", "x2 (slow start)", "cwnd -> 2"],
                ["2", "2", "x2 (slow start)", "cwnd -> 4"],
                ["3", "4", "x2 (slow start)", "cwnd -> 8 = ssthresh"],
                ["4", "8", "+1 (avoidance)", "cwnd -> 9"],
                ["5", "9", "+1 (avoidance)", "cwnd -> 10"],
                ["6", "10", "+1 (avoidance)", "loss at cwnd = 12 next: ssthresh = 6"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two losses, two different recoveries",
              body: "Triple-duplicate-ack loss: halve (ssthresh = cwnd/2), fast recovery, continue linear growth. Timeout loss: ssthresh = cwnd/2, cwnd = 1, full slow start. Drawing the sawtooth with both loss types marked - and labelling slow start vs congestion avoidance regions - is the visual that scores 7/7 on congestion questions.",
            },
            diagram: {
              kind: "pipeline",
              title: "cwnd through its phases",
              caption:
                "Exponential probe, linear growth, multiplicative cut - the sawtooth every TCP connection lives in.",
              stages: [
                { label: "Slow start", note: "cwnd = 1, 2, 4, 8 - doubling each RTT" },
                { label: "Threshold reached", note: "cwnd = ssthresh, switch to linear" },
                { label: "Congestion avoidance", note: "+1 MSS per RTT: 9, 10, 11, 12" },
                { label: "Loss (3 dupacks)", note: "ssthresh = cwnd/2 = 6; fast recovery" },
                { label: "Resume avoidance", note: "linear from 6 - sawtooth continues" },
              ],
            },
            bullets: [
              "TCP sends min(rwnd, cwnd); congestion control guards routers, flow control guards the receiver.",
              "Slow start: cwnd doubles per RTT (1, 2, 4, 8) until ssthresh.",
              "Congestion avoidance: +1 MSS per RTT (linear) - additive increase.",
              "On 3 dupacks: ssthresh = cwnd/2, fast recovery, resume avoidance.",
              "On timeout: ssthresh = cwnd/2, cwnd = 1, restart slow start.",
              "Worked trace: 1, 2, 4, 8, 9, 10 with ssthresh = 8; loss at 12 cuts to 6.",
              "AIMD converges to fair sharing - the sawtooth oscillates around the bottleneck.",
              "Modern variants: Tahoe, Reno, NewReno, SACK, CUBIC (cubic growth), BBR (model-based).",
            ],
            examQuestions: [
              {
                q: "Explain TCP congestion control. With MSS = 1 KB and ssthresh = 8 KB, trace cwnd from 1 through slow start into congestion avoidance, then show the response to (a) triple-duplicate-ack loss at cwnd = 12 and (b) a timeout at cwnd = 12.",
                marks: 7,
                outline: [
                  "Define cwnd, ssthresh and min(rwnd, cwnd).",
                  "Slow start doubling: 1, 2, 4, 8.",
                  "Switch at ssthresh; avoidance: 9, 10, 11, 12.",
                  "Dupack loss: ssthresh = 6, fast recovery, linear from 6.",
                  "Timeout: ssthresh = 6, cwnd = 1, slow start again.",
                  "Explain AIMD fairness with the two-flow example.",
                  "Mention Tahoe/Reno/CUBIC/BBR evolution.",
                ],
              },
              {
                q: "Why is slow start called 'slow' when its growth is exponential?",
                marks: 3,
                outline: [
                  "It starts from 1 MSS - tiny compared to link capacity.",
                  "Exponential growth reaches ssthresh in log2(ssthresh) RTTs.",
                  "The name contrasts with starting full-speed, not with slow growth.",
                ],
              },
              {
                q: "State the AIMD rule and what it converges to.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.8",
            title: "Traffic shaping: leaky bucket and token bucket",
            body: [
              "Traffic shaping smooths bursty flows at the network edge so the interior sees predictable loads. The leaky bucket metaphor: traffic pours into a bucket of fixed depth with a hole leaking at constant rate - bursts are absorbed into the queue and emitted at the fixed leak rate, whatever the input did. Algorithm: a queue of capacity b bytes drains at constant rate r; packets exceeding capacity are dropped (or the sender stalls). Guarantees: perfectly smooth output rate, bounded queue memory, fair treatment across flows. Cost: burstiness is destroyed even when the network could have absorbed it - average delay rises and the fixed rate may be badly chosen.",
              "The token bucket permits bursts while bounding their size. Tokens are generated at rate r into a bucket of depth b (max b tokens saved); a packet of size s may leave only after consuming s tokens; if tokens are insufficient, the packet waits (or is dropped). Idle time accumulates credit - up to b - so the next burst may transmit at full line rate for b bytes, then falls back to rate r. The maximum burst that can be sent instantly is b bytes, and over any interval t the output is bounded by b + r x t - a precise, negotiated envelope. This is exactly how ATM, MPLS and cloud providers bill 'burstable' bandwidth.",
              "Worked example: token bucket with r = 2 Mbps, b = 1 MB (8 Mbit). A silent period of 10 seconds accumulates 8 Mbit of tokens (capped at b = 8 Mbit). A burst of 12 Mbit arrives: the first 8 Mbit go out at line rate (say 100 Mbps, taking 0.08 s), then the remaining 4 Mbit emit at the token rate 2 Mbps, taking 2 s - total 2.08 s, output bounded by 8 + 2t Mbit. The same 12 Mbit burst through a leaky bucket with rate 2 Mbps takes 6 seconds flat - perfectly smooth but slow. Which is right depends on the application: leaky bucket for guaranteed-rate voice circuits, token bucket for elastic data that wants to use idle capacity.",
              "Comparison table and placement: leaky bucket - constant output rate, no credit for idleness, shapes rigidly, drops/queues bursts immediately after the bucket fills; token bucket - rate cap with burst credit, idle capacity banked, shapes loosely (bursts up to b permitted), no queueing inside the shaper itself ( policing vs shaping distinction). Both sit at ingress edges (ISP subscriber lines, cloud NICs) rather than in the core; core routers prefer queueing disciplines (FQ, RED) instead. Typical exam pairing: define both, draw both bucket diagrams, run the 12-Mbit arithmetic above, and close with the selection rationale - guarantee vs permission, smoothness vs responsiveness.",
            ],
            keyTerms: [
              { term: "Leaky bucket", definition: "Queue draining at constant rate r - output is perfectly smooth regardless of input bursts." },
              { term: "Token bucket", definition: "Tokens accrue at rate r up to depth b; bursts consume saved tokens at line rate." },
              { term: "Burst size bound", definition: "Token bucket output over interval t is at most b + r x t bytes." },
              { term: "Shaping vs policing", definition: "Shaping buffers excess traffic; policing drops it. Token bucket often polices, leaky bucket shapes." },
            ],
            table: {
              caption: "Leaky vs token bucket.",
              headers: ["Property", "Leaky bucket", "Token bucket"],
              rows: [
                ["Output rate", "Constant r always", "Up to line rate while tokens last, then r"],
                ["Idle credit", "None - idleness is lost", "Saved up to b bytes of tokens"],
                ["Burst handling", "Queued/dropped beyond bucket depth", "Permitted up to b bytes"],
                ["Output bound", "r x t", "b + r x t"],
                ["Best for", "Guaranteed smooth rate (voice)", "Bursty elastic traffic (data)"],
              ],
            },
            callout: {
              type: "exam",
              title: "Run the burst arithmetic",
              body: "Standard numeric: r = 2 Mbps, b = 1 MB = 8 Mbit, 10 s idle, then a 12 Mbit burst. Answer: 8 Mbit tokens available, so 8 Mbit at line rate + 4 Mbit at 2 Mbps = 2.08 s total (at 100 Mbps line rate); a leaky bucket at 2 Mbps needs 6 s. This single worked example covers both algorithms and the b + rt bound.",
            },
            diagram: {
              kind: "fork",
              title: "Which bucket for which traffic?",
              caption:
                "Both bound the flow; one promises smoothness, the other banks idle capacity as burst credit.",
              start: "What does the application need?",
              branches: [
                { label: "Constant-rate stream (voice)", outcome: "Leaky bucket: fixed drain rate, smooth output, idleness wasted", good: true },
                { label: "Bursty elastic data", outcome: "Token bucket: idle tokens banked, bursts up to b at line rate", good: true },
              ],
            },
            bullets: [
              "Leaky bucket: bursty input -> constant-rate output; queue absorbs bursts, overflow drops.",
              "Token bucket: tokens at rate r, bucket depth b; send needs tokens; idle time banks credit.",
              "Output bound: token bucket = b + r x t over interval t; leaky bucket = r x t.",
              "Worked: r = 2 Mbps, b = 8 Mbit, 12 Mbit burst after 10 s idle -> 8 Mbit instant + 2 s at 2 Mbps = 2.08 s.",
              "Leaky bucket same burst: 6 s flat - smooth but slow.",
              "Leaky = guarantee (voice); token = permission (elastic data).",
              "Both deployed at network edges (subscriber lines, cloud NICs); cores use queueing disciplines instead.",
              "Shaping buffers excess; policing drops it - the operational distinction.",
            ],
            examQuestions: [
              {
                q: "Explain the leaky bucket and token bucket algorithms with diagrams. For r = 2 Mbps, b = 1 MB and a 12 Mbit burst after 10 idle seconds, compute the transmission time under each and state the output bounds.",
                marks: 7,
                outline: [
                  "Leaky bucket mechanics: queue + constant drain r.",
                  "Token bucket mechanics: token accrual, depth b, consume per byte.",
                  "Idle credit: 2 Mbps x 10 s = 20 Mbit capped at b = 8 Mbit.",
                  "Burst: first 8 Mbit at line rate (0.08 s at 100 Mbps).",
                  "Remaining 4 Mbit at 2 Mbps = 2 s; total 2.08 s.",
                  "Leaky bucket: 12 Mbit / 2 Mbps = 6 s constant.",
                  "Bounds: b + r x t vs r x t; selection rationale.",
                ],
              },
              {
                q: "Why does a token bucket permit bursts while a leaky bucket never does?",
                marks: 3,
                outline: [
                  "Token bucket stores permission (tokens) during idle time.",
                  "Saved tokens release instantly at line rate, up to b bytes.",
                  "Leaky bucket's only buffer is the queue, drained at fixed r - no credit mechanism.",
                ],
              },
              {
                q: "State the maximum data a token bucket (b = 4 Mbit, r = 1 Mbps) can send in 3 seconds.",
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
      title: "Application Layer and Security Basics",
      summary:
        "Name resolution with DNS, the web with HTTP, file transfer with FTP, email with SMTP/POP3/IMAP/MIME, remote login with Telnet and SSH, firewalls and network security goals, symmetric and asymmetric cryptography with RSA, and message integrity with hashes and digital signatures.",
      chapter: {
        number: "05",
        title: "What Users Actually Run - and How It Is Protected",
        intro:
          "Unit V surveys the protocols users touch daily - DNS, HTTP, FTP, email, remote login - and closes with the security fundamentals: firewalls, the CIA goals, symmetric versus public-key cryptography with a worked RSA example, hashes and digital signatures.",
        inOneBreath:
          "DNS resolves names via root/TLD/authoritative servers with caching; HTTP is request-response over TCP 80/443; FTP splits control (21) from data (20); email travels UA -> SMTP -> MDA -> POP3/IMAP; SSH replaces Telnet with encryption; firewalls filter packets and proxies enforce policy toward CIA goals; RSA: n = pq, ed = 1 mod phi, c = m^e mod n; signatures sign hashes, certificates bind keys to identities.",
        sections: [
          {
            number: "5.1",
            title: "DNS: domain name system",
            body: [
              "Humans remember names (www.rgpv.ac.in); routers need numbers. DNS is the distributed, hierarchical database that maps names to IP addresses - so fundamental that 'if DNS breaks, the Internet feels broken'. The name space is an inverted tree: the root '.', top-level domains (com, org, in, edu), second-level domains (rgpv.ac.in), and subdomains below, each zone administered independently. Resource records carry the data: A (name -> IPv4), AAAA (name -> IPv6), CNAME (alias), MX (mail server), NS (name server), PTR (reverse lookup), SOA (zone authority).",
              "Resolution works in two modes. Recursive resolution: the local resolver takes full responsibility, querying upward until an answer returns - the client waits for the final IP only. Iterative resolution: the server, if it is not authoritative, returns a REFERRAL ('ask this server instead') and the client walks the chain itself. The usual flow: stub -> local resolver (recursive) -> root server (referral to .in TLD) -> TLD server (referral to rgpv.ac.in NS) -> authoritative server (final A record). Worked trace for www.rgpv.ac.in: root says 'ask the .in servers', .in says 'ask ns1.rgpv.ac.in at x.x.x.x', authoritative says A = 203.196.x.x - four queries, each answered from delegation records.",
              "Caching is DNS's scalability trick: every answer carries a TTL (time to live) and is cached by resolvers on the path - a popular name resolves from cache in microseconds without touching any authoritative server. Worked effect: the first lookup of www.rgpv.ac.in takes four queries and maybe 100 ms; the next lookup within TTL is local cache, sub-millisecond. Negative answers are cached too (negative TTL). Consequences: TTL trades freshness for load (short TTL for servers about to move - the mechanism behind zero-downtime migrations), and cache poisoning is a real attack - Kaminsky-style spoofing floods a resolver with forged answers - countered by DNSSEC, which signs records with public-key signatures.",
              "Limitations and details worth marks: UDP port 53 carries normal queries (one round trip, no handshake), TCP port 53 for zone transfers and responses over 512 bytes (now EDNS0 relaxes the size limit); DNS load balances by rotating multiple A records; round-robin is crude but universal; DNS propagation delay after record changes is just TTL expiry. The hierarchy - root (13 logical anycast identities), TLD registries, authoritative servers, plus resolvers - is the picture to draw: pyramid of delegation, cache as the side door. Exam favourites: recursive vs iterative, record types, TTL and caching, the four-query trace.",
            ],
            keyTerms: [
              { term: "Recursive resolution", definition: "Resolver promises the final answer; it does all the upward querying itself." },
              { term: "Iterative resolution / referral", definition: "Server answers 'ask X instead'; the requester continues the walk." },
              { term: "TTL", definition: "Seconds a record may be cached; short = fresh, long = low load." },
              { term: "MX record", definition: "Names the mail exchanger for a domain; A/AAAA map names to IPv4/IPv6." },
            ],
            table: {
              caption: "Principal DNS record types.",
              headers: ["Type", "Meaning", "Example"],
              rows: [
                ["A", "Name -> IPv4 address", "www.rgpv.ac.in A 203.196.x.x"],
                ["AAAA", "Name -> IPv6 address", "www.example.com AAAA 2606:..."],
                ["CNAME", "Alias to another name", "mail.example.com CNAME example.com"],
                ["MX", "Mail server for the domain", "example.com MX 10 mx1.example.com"],
                ["NS", "Authoritative name server", "example.com NS ns1.example.com"],
                ["PTR", "Reverse: IP -> name", "x.x.196.203.in-addr.arpa PTR www.rgpv.ac.in"],
              ],
            },
            callout: {
              type: "tip",
              title: "Draw the four-query trace",
              body: "For www.rgpv.ac.in: stub -> local resolver; resolver -> root (referral to .in); root/TLD -> .in server (referral to rgpv.ac.in NS); NS -> authoritative (A record back down the chain). Label each hop recursive or iterative - that labelling is exactly what the examiner is scoring.",
            },
            diagram: {
              kind: "pyramid",
              title: "DNS hierarchy and delegation",
              caption:
                "Delegation flows downward: root delegates to TLDs, TLDs to zones - caching short-circuits the whole walk.",
              tiers: [
                { label: "Root servers (.)", note: "13 logical identities, anycast worldwide; delegate to TLDs" },
                { label: "TLD servers (.com, .in, .org)", note: "delegate to zone name servers" },
                { label: "Authoritative zone servers", note: "hold the actual A/MX records" },
                { label: "Local resolvers + caches", note: "client's first stop; answer from TTL cache when possible" },
              ],
            },
            bullets: [
              "DNS = distributed hierarchical database mapping names to addresses.",
              "Tree: root -> TLD -> second-level domains; zones administered independently.",
              "Records: A, AAAA, CNAME, MX, NS, PTR, SOA.",
              "Recursive mode: resolver does all queries; iterative mode: referrals returned.",
              "Worked trace: 4 queries for www.rgpv.ac.in - root, .in, authoritative, answer.",
              "Caching with TTL makes popular names sub-millisecond and the system scalable.",
              "UDP 53 for queries; TCP 53 for zone transfer and oversized answers.",
              "Attacks: cache poisoning; defence: DNSSEC signed records.",
            ],
            examQuestions: [
              {
                q: "Explain DNS name resolution. Contrast recursive and iterative resolution, trace the complete lookup of www.rgpv.ac.in through root, TLD and authoritative servers, list four record types, and explain the role of TTL caching.",
                marks: 7,
                outline: [
                  "Purpose and hierarchy of the name space.",
                  "Recursive vs iterative with one-line definitions.",
                  "Trace: local resolver -> root -> .in TLD -> rgpv authoritative -> answer.",
                  "Label which hops are recursive and which iterative.",
                  "Records: A, AAAA, MX, CNAME with examples.",
                  "TTL: freshness vs load; negative caching.",
                  "UDP 53 / TCP 53 and DNSSEC as the security note.",
                ],
              },
              {
                q: "Why does DNS use UDP for ordinary queries and TCP only for zone transfers?",
                marks: 3,
                outline: [
                  "A query-answer pair fits one datagram - one round trip, no handshake.",
                  "UDP is cheaper and faster for short exchanges.",
                  "Zone transfers are large, ordered streams - TCP reliability is required.",
                ],
              },
              {
                q: "Which DNS record maps a name to an IPv6 address, and which maps an IP back to a name?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "HTTP and the world wide web",
            body: [
              "HTTP (HyperText Transfer Protocol) is the client-server, request-response protocol of the web, riding on TCP port 80 (443 with TLS = HTTPS). A transaction: the client opens a TCP connection, sends a request line (METHOD path version) plus headers and optional body; the server replies with a status line (version code phrase), headers and a body. Methods: GET (retrieve), POST (submit data), PUT (store), DELETE, HEAD (headers only). Status classes: 1xx informational, 2xx success (200 OK), 3xx redirect (301, 304 Not Modified), 4xx client error (404 Not Found, 403 Forbidden), 5xx server error (500).",
              "Evolution of connection use is the standard exam narrative. HTTP/1.0 opened a new TCP connection per object - a page with 10 images paid 10 handshakes. HTTP/1.1 made connections persistent (keep-alive) with pipelining (requests queued before answers arrive) - but head-of-line blocking at the TCP level remained. HTTP/2 multiplexes many streams over one connection with binary framing; HTTP/3 moves to QUIC over UDP, eliminating TCP-level head-of-line blocking entirely. Each step attacked the latency tax of the previous design - a clean worked example of protocol evolution driven by page complexity (modern pages load 50+ objects).",
              "Caching and conditionals: browsers and proxies store responses; the client revalidates with conditional requests - If-Modified-Since against a Last-Modified header, or If-None-Match against an ETag entity tag. Worked exchange: client sends GET with If-None-Match: abc123; server answers 304 Not Modified with NO body - the client uses its cached copy and the 2 KB of body never crosses the wire. Proxies (forward proxies for clients, reverse proxies/CDNs for servers) amplify this by serving hot content near the user. Cookies (Set-Cookie / Cookie headers) add state to the stateless protocol - sessions, logins, shopping carts - at the cost of privacy concerns and cookie-theft attacks (mitigated by the Secure and HttpOnly flags).",
              "Worked session trace to memorise: (1) GET /index.html HTTP/1.1 with Host: www.example.com -> 200 OK, Last-Modified, ETag, Set-Cookie: session=xyz; (2) GET /style.css with If-None-Match -> 304; (3) POST /login with cookie and form body -> 302 redirect to /home; (4) GET /home with cookie -> 200. Limitations: HTTP is text-based and verbose (fixed by HTTP/2's binary framing), plaintext (fixed by TLS - hence HTTPS everywhere), and stateless by design (state reconstructed via cookies/tokens). The exam answer should include one full request and one full response written out with headers - that alone separates the 7-mark answer from the summary.",
            ],
            keyTerms: [
              { term: "Persistent connection", definition: "HTTP/1.1 keep-alive: many requests over one TCP connection." },
              { term: "ETag / If-None-Match", definition: "Entity tag revalidation - server answers 304 Not Modified instead of resending the body." },
              { term: "Cookie", definition: "Server-issued state token returned by the browser on every request, giving HTTP session memory." },
              { term: "Reverse proxy / CDN", definition: "Server-side cache tier serving hot content close to users." },
            ],
            table: {
              caption: "HTTP versions and what each fixed.",
              headers: ["Version", "Transport", "Innovation", "Problem remaining"],
              rows: [
                ["1.0", "TCP, one object per connection", "Basic request/response", "Handshake per object"],
                ["1.1", "TCP, persistent + pipelining", "Keep-alive, chunked encoding", "TCP head-of-line blocking"],
                ["2", "TCP, multiplexed streams", "Binary framing, header compression", "TCP-level HOL still"],
                ["3", "QUIC over UDP", "Streams independent, built-in TLS", "Newness / UDP middlebox issues"],
              ],
            },
            callout: {
              type: "exam",
              title: "Write a real request and response",
              body: "In the exam, write at least: GET /index.html HTTP/1.1, Host: www.example.com, If-None-Match: \"abc123\" and the reply HTTP/1.1 304 Not Modified. Concrete header lines with a conditional GET demonstrating a 304 - not just 'the browser asks for the page' - is what earns full marks on HTTP questions.",
            },
            diagram: {
              kind: "flow",
              title: "One HTTPS session, four exchanges",
              caption:
                "Request, cached revalidation, login redirect, authenticated fetch - cookies carry the state.",
              steps: [
                { label: "GET /index.html", note: "200 OK + ETag abc123 + Set-Cookie: session=xyz" },
                { label: "GET /style.css + If-None-Match", note: "304 Not Modified - body never sent" },
                { label: "POST /login + cookie", note: "302 redirect to /home" },
                { label: "GET /home + cookie", note: "200 OK - authenticated session" },
                { label: "Connection kept alive", note: "HTTP/1.1 keep-alive for further objects" },
              ],
            },
            bullets: [
              "HTTP: client-server, request-response over TCP 80 / TLS 443.",
              "Methods: GET, POST, PUT, DELETE, HEAD; status classes 2xx, 3xx, 4xx, 5xx.",
              "1.0: connection per object; 1.1: persistent + pipelining; 2: multiplexing; 3: QUIC/UDP.",
              "Conditional GET with If-Modified-Since / If-None-Match -> 304 saves the body transfer.",
              "Cookies give stateless HTTP session memory (Set-Cookie / Cookie headers).",
              "Proxies and CDNs cache near users; reverse proxies shield servers.",
              "Worked 304 exchange: 2 KB body saved by one ETag match.",
              "Plaintext weakness fixed by TLS; verbosity fixed by HTTP/2 binary framing.",
            ],
            examQuestions: [
              {
                q: "Explain HTTP's operation, methods and status codes. Write a request-response pair demonstrating a conditional GET returning 304, and trace how HTTP/1.0, 1.1, 2 and 3 successively reduced latency.",
                marks: 7,
                outline: [
                  "Request-response model over TCP; port 80/443.",
                  "Methods GET/POST/PUT/DELETE/HEAD; status classes with examples.",
                  "Conditional GET: GET + If-None-Match: abc123.",
                  "Server: 304 Not Modified, no body - cache reused.",
                  "Version evolution: per-object connections -> keep-alive -> multiplexing -> QUIC.",
                  "Head-of-line blocking at each stage and its cure.",
                  "Cookies for state; TLS for confidentiality.",
                ],
              },
              {
                q: "Why is HTTP called stateless, and how do cookies restore state?",
                marks: 3,
                outline: [
                  "Each request is independent - server keeps no conversation memory.",
                  "Server issues Set-Cookie; browser echoes it in Cookie headers.",
                  "Session identity, logins and carts ride on that token.",
                ],
              },
              {
                q: "What does the 304 status code mean and which request type triggers it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "FTP: file transfer protocol",
            body: [
              "FTP is the oldest bulk file-transfer protocol (RFC 959), deliberately designed for maximum throughput rather than elegance. Its defining quirk: TWO TCP connections per session. The control connection (TCP port 21, the 'primary') carries commands and replies as plain NVT-ASCII text - USER, PASS, RETR, STOR, LIST, QUIT - and stays open for the whole session. Each actual file transfer opens a separate DATA connection (port 20 in active mode) which is torn down after the transfer. Separating control from data means commands can be issued mid-transfer (abort a huge download without killing the session) and the protocol survives even if a transfer fails.",
              "The two data-connection modes matter for NAT and firewalls. Active mode: the client sends PORT 192,168,1,5,50001, telling the server 'connect to me at port 50001'; the server opens the data connection FROM port 20 TO that port - a server-initiated inbound connection that firewalls routinely block. Passive mode: the client sends PASV; the server replies with a high port, the CLIENT connects outward to it - which traverses client-side firewalls fine but needs server-side care. Modern practice is passive mode precisely because of this asymmetry - a worked example of protocol behaviour shaped by security middleboxes decades after the RFC.",
              "Worked session trace: connect to ftp.example.com:21 -> server 220 ready; USER anonymous -> 331; PASS guest@ -> 230 logged in; CWD /pub -> 250; PASV -> 227 entering passive mode (port 51000); client connects 51000; RETR report.pdf -> server opens data path, sends 2,400,000 bytes -> 226 transfer complete (data connection closes); QUIT -> 221. Note in the trace how control (21) persists while data (51000) opens and closes per transfer - draw the two parallel lines in the timing diagram and the question is answered visually.",
              "Limitations and history: FTP sends everything in cleartext - credentials, commands, file contents - so it has been replaced by SFTP (file transfer inside SSH, one encrypted connection, no separate data channel) and FTPS (FTP with TLS). No native integrity or resume-with-verification; two connections confuse NATs; no directory listing standardisation (LIST output format was never specified, causing client incompatibilities). Yet the exam loves FTP for its architecture lesson: control/data separation, port 21 vs 20, active vs passive, anonymous FTP (USER anonymous, email as password) - and as the contrast case that motivates SFTP's single-connection encrypted design.",
            ],
            keyTerms: [
              { term: "Control connection (21)", definition: "Persistent TCP session carrying ASCII commands and numeric replies (220, 331, 226...)." },
              { term: "Data connection (20 / PASV port)", definition: "Per-transfer TCP connection carrying the file or listing, closed when done." },
              { term: "Active vs passive mode", definition: "Active: server connects to client's PORT; passive: client connects to server's PASV port." },
              { term: "SFTP", definition: "File transfer tunneled inside SSH - one encrypted connection, replacing FTP's cleartext pair." },
            ],
            table: {
              caption: "Active vs passive data connections.",
              headers: ["Property", "Active mode", "Passive mode"],
              rows: [
                ["Who opens data connection", "Server, from port 20", "Client, to server's PASV port"],
                ["Client command", "PORT 192,168,1,5,50001", "PASV"],
                ["Firewall friendliness", "Blocks inbound server connections", "Outbound client connection - usually fine"],
                ["NAT behaviour", "Problematic - needs ALG", "Works; server must expose port range"],
                ["Modern preference", "Rare", "Standard"],
              ],
            },
            callout: {
              type: "exam",
              title: "Two connections, two jobs",
              body: "Always answer FTP questions as a pair of parallel TCP sessions: control on 21 stays open end-to-end carrying USER/PASS/RETR/QUIT; each file rides a fresh data connection (20 active, PASV port passive) that closes on completion. Draw both arrows with the port numbers - the diagram IS the answer.",
            },
            diagram: {
              kind: "fork",
              title: "Opening the FTP data connection",
              caption:
                "Same file transfer, opposite initiators - and the firewall decides which mode survives.",
              start: "Client has issued PASV or PORT?",
              branches: [
                { label: "PORT (active)", outcome: "Server connects out from port 20 to client:50001 - often firewall-blocked", good: false },
                { label: "PASV (passive)", outcome: "Client connects out to server's high port - traverses client firewalls", good: true },
              ],
            },
            bullets: [
              "FTP uses TWO TCP connections: control 21 (persistent) + data (per transfer).",
              "Commands in ASCII: USER, PASS, RETR (get), STOR (put), LIST, CWD, QUIT; replies 220/331/226.",
              "Active mode: server initiates data connection from port 20 - blocked by firewalls.",
              "Passive mode: client initiates to a PASV-negotiated high port - the modern default.",
              "Worked trace: 220 -> USER/PASS 230 -> PASV 227 (51000) -> RETR 2,400,000 B -> 226 -> QUIT.",
              "Control/data separation allows mid-transfer commands and survives failed transfers.",
              "Cleartext credentials motivated SFTP (over SSH) and FTPS (over TLS).",
              "NATs struggle with active mode's inbound connection - hence its decline.",
            ],
            examQuestions: [
              {
                q: "Explain FTP's two-connection architecture with a full session trace (commands, reply codes, ports). Contrast active and passive mode and state why passive mode became standard.",
                marks: 7,
                outline: [
                  "Control connection: port 21, persistent, ASCII commands/replies.",
                  "Data connection: per transfer, port 20 active or PASV port passive.",
                  "Trace: 220, USER/PASS -> 230, PASV -> 227, RETR -> 226, QUIT -> 221.",
                  "Active mode mechanics: PORT command, server-initiated inbound connection.",
                  "Firewall/NAT problems with inbound connections.",
                  "Passive mode mechanics and why it traverses client firewalls.",
                  "Security: cleartext -> SFTP/FTPS evolution.",
                ],
              },
              {
                q: "Which FTP command pair logs in anonymously, and what password is conventionally supplied?",
                marks: 3,
                outline: [
                  "USER anonymous.",
                  "PASS with an email address as convention.",
                  "Server grants a restricted guest file area.",
                ],
              },
              {
                q: "Give the FTP port numbers for control and (active) data connections.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Email: SMTP, POP3, IMAP and MIME",
            body: [
              "Electronic mail is a relay system, not a direct delivery: your User Agent (mail app) hands the message to your Mail Transfer Agent via SMTP; MTAs relay the message SMTP-hop by SMTP-hop toward the recipient's Mail Delivery Agent; the recipient pulls it down with POP3 or IMAP. SMTP (Simple Mail Transfer Protocol, TCP port 25 between servers, 587 for client submission) is text-command based - HELO/EHLO, MAIL FROM, RCPT TO, DATA, QUIT - and is a PUSH protocol: it can only send toward a server, never let a user fetch mail, which is exactly why POP3/IMAP exist.",
              "Worked message journey: alice@college.ac.in composes to bob@corp.com. Her UA speaks SMTP to the college's outgoing server (EHLO college.ac.in, MAIL FROM: alice@college.ac.in, RCPT TO: bob@corp.com, DATA + message + '.'), which queues it. The college MTA resolves corp.com's MX record (DNS section 5.1), connects to corp.com's mail server on port 25 and relays the same SMTP dialogue. The message lands in Bob's mailbox; Bob's client fetches it - POP3 (port 110) downloads and typically deletes server copies, IMAP (port 143) keeps mail on the server with folders and flags, synchronised across devices. Modern wrappers: STARTTLS/TLS encrypt the SMTP legs; SPF, DKIM and DMARC authenticate the sending domain.",
              "MIME (Multipurpose Internet Mail Extensions) made email multimedia without breaking the 7-bit ASCII SMTP of 1982: MIME headers declare Content-Type (text/html, image/jpeg, multipart/mixed) and Content-Transfer-Encoding (base64 for binary data as printable text). Worked multipart anatomy: a message with attached photo and PDF carries Content-Type: multipart/mixed; boundary=xyz, then text part, then --xyz with image/jpeg base64 block, then --xyz with application/pdf, closed by --xyz--. Base64 inflates data by exactly 4/3 (3 bytes -> 4 chars) - quote that number; it is why 10 MB of attachments becomes 13.3 MB on the wire.",
              "POP3 vs IMAP is the recurring comparison: POP3 is download-and-(usually)-delete, single-device, offline-first; IMAP is server-side folders, flags, partial fetch (headers first, bodies on demand), multi-device synchronisation - the reason switching phones does not lose mail. Limitations of the whole system: SMTP was built on trust (open relays became spam cannons - hence authentication SPF/DKIM/DMARC), no delivery acknowledgement beyond MTA retries (bounce messages), and attachment size limits set per-server. The exam structure: draw the UA - SMTP - MTA - MDA - POP3/IMAP pipeline with ports, then the MIME multipart sketch, then the POP3/IMAP contrast.",
            ],
            keyTerms: [
              { term: "SMTP", definition: "Push protocol (TCP 25/587) relaying mail between UA and MTAs; commands MAIL FROM, RCPT TO, DATA." },
              { term: "POP3 (110)", definition: "Download-and-delete retrieval; single-device, offline model." },
              { term: "IMAP (143)", definition: "Server-side mailboxes with folders and flags; multi-device synchronisation." },
              { term: "MIME", definition: "Headers (Content-Type, boundary) + encodings (base64, 4/3 inflation) that carry multimedia inside ASCII SMTP." },
            ],
            table: {
              caption: "Email protocols and ports.",
              headers: ["Protocol", "Port", "Direction", "Role"],
              rows: [
                ["SMTP", "25 (server-to-server), 587 (submission)", "Push", "Send and relay messages"],
                ["POP3", "110", "Pull", "Download to one device, usually delete"],
                ["IMAP", "143 (993 with TLS)", "Pull", "Server-side folders, multi-device sync"],
                ["DNS MX", "53", "Lookup", "Find the destination domain's mail server"],
              ],
            },
            callout: {
              type: "exam",
              title: "SMTP pushes, POP3/IMAP pull",
              body: "The single most-scored sentence of email questions: SMTP can only PUSH mail serverward; a separate retrieval protocol is needed for the user to PULL it. Then place ports: 25 relay, 587 submission, 110 POP3, 143 IMAP - and explain why IMAP won: multi-device synchronisation.",
            },
            diagram: {
              kind: "pipeline",
              title: "One email's complete journey",
              caption:
                "Push stages speak SMTP; the final pull is POP3 or IMAP; DNS MX steers the relay.",
              stages: [
                { label: "UA composes", note: "alice's mail client" },
                { label: "SMTP submission", note: "UA -> outgoing MTA, port 587" },
                { label: "SMTP relay", note: "MTA -> corp.com per MX record, port 25" },
                { label: "Mailbox delivery", note: "recipient MDA stores the message" },
                { label: "POP3 / IMAP pull", note: "bob's client fetches: 110 or 143" },
              ],
            },
            bullets: [
              "Email is relayed: UA -> SMTP -> MTA(s) -> MDA -> POP3/IMAP -> recipient UA.",
              "SMTP commands: EHLO, MAIL FROM, RCPT TO, DATA, QUIT - plain text on TCP 25/587.",
              "MX records (DNS) route relays to the right domain's mail server.",
              "POP3: download + delete, single device; IMAP: server folders, flags, multi-device.",
              "MIME: Content-Type + multipart boundary; base64 encodes binary as ASCII with 4/3 inflation.",
              "Worked multipart: text + image/jpeg + application/pdf separated by --xyz lines.",
              "SMTP's trust model caused spam; SPF/DKIM/DMARC authenticate senders; TLS encrypts legs.",
              "No end-to-end delivery ack - only MTA retries and bounce messages.",
            ],
            examQuestions: [
              {
                q: "Explain email architecture. Trace a message from alice@college.ac.in to bob@corp.com naming every protocol, port and lookup involved, then compare POP3 with IMAP and outline how MIME carries a photo attachment.",
                marks: 7,
                outline: [
                  "Draw the UA - SMTP - MTA - MDA - POP3/IMAP pipeline.",
                  "SMTP submission 587, relay 25; commands MAIL FROM/RCPT TO/DATA.",
                  "DNS MX lookup for corp.com.",
                  "Delivery to MDA mailbox.",
                  "POP3 vs IMAP: delete vs synchronise; single vs multi-device.",
                  "MIME multipart/mixed with boundary; base64 4/3 inflation.",
                  "Security add-ons: TLS, SPF/DKIM/DMARC.",
                ],
              },
              {
                q: "Why does SMTP need to be complemented by POP3 or IMAP at all?",
                marks: 3,
                outline: [
                  "SMTP is push-only toward servers.",
                  "A user's mailbox is passive storage, not an SMTP speaker.",
                  "Retrieval needs a pull protocol - hence POP3/IMAP.",
                ],
              },
              {
                q: "By what factor does base64 encoding inflate data, and why?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Remote login: Telnet and SSH",
            body: [
              "Remote login puts your keystrokes on a distant machine and its screen on yours. Telnet (RFC 854, TCP port 23) is the ancestor: a raw bidirectional byte channel carrying NVT (Network Virtual Terminal) ASCII - the client streams characters, the server streams echo and output. It pioneered the client-server terminal concept and still serves device configuration (legacy routers, embedded boards) precisely because it is so simple. Its fatal flaw: EVERYTHING is plaintext - passwords visible on every wire segment - which made Telnet a security hazard the moment networks stopped being trusted.",
              "SSH (Secure Shell, TCP port 22) replaced it end to end. SSH is a three-part protocol: SSH-TRANS (transport layer: server authentication, encryption, integrity via HMAC, compression - over Diffie-Hellman key exchange), SSH-AUTH (user authentication: password, public key, or host-based), and SSH-CONN (multiplexing many channels over one connection - interactive shell, port forwarding, SFTP). Server host keys verify identity on first contact (the known_hosts trust-on-first-use model); sessions are encrypted with ciphers negotiated per connection. Worked login flow: TCP connect 22 -> banner + algorithm negotiation (KEX, ciphers, MACs) -> DH key exchange -> server host key check -> user auth (public key preferred) -> channel open -> encrypted shell.",
              "Public-key authentication deserves the worked example: the client holds a key pair; the server stores the client's PUBLIC key in authorized_keys. Authentication is a challenge: the server encrypts a random challenge with the client's public key (or signs it), the client proves possession of the private key by decrypting/signing correctly - the private key never crosses the network. Compare to Telnet: the password ITSELF travels in cleartext there, replayable by anyone with a sniffer. SSH also tunnels arbitrary TCP ports (-L local forwarding, -R remote forwarding, -D SOCKS), so a single SSH session can encrypt mail, database and web traffic alongside the terminal - which is why it became the universal administration tool.",
              "Comparison and modern practice: Telnet - port 23, plaintext, minimal, obsolete for real use but alive in labs and debugging (testing plain SMTP/HTTP by hand is genuinely useful); SSH - port 22, encrypted, authenticated, multiplexed, key-managed, the default everywhere. Limitations of SSH: trust-on-first-use can be spoofed on first contact, password auth still allows brute force (key-only mode fixes it), and it adds encryption overhead (negligible on modern CPUs). The exam contrast: three axes - port number, encryption, authentication mechanism - plus one worked example of each protocol's handshake, then the port-forwarding note as the finisher.",
            ],
            keyTerms: [
              { term: "NVT", definition: "Network Virtual Terminal - Telnet's canonical 7-bit ASCII terminal abstraction." },
              { term: "SSH-TRANS / AUTH / CONN", definition: "SSH's three layers: encrypted transport, user authentication, channel multiplexing." },
              { term: "authorized_keys", definition: "Server-side list of client public keys allowed to log in without passwords." },
              { term: "Port forwarding", definition: "SSH tunnels other TCP ports through the encrypted session (-L, -R, -D)." },
            ],
            table: {
              caption: "Telnet vs SSH - the three-axis contrast.",
              headers: ["Axis", "Telnet", "SSH"],
              rows: [
                ["Port", "23", "22"],
                ["Confidentiality", "None - plaintext passwords", "Full encryption, DH key exchange"],
                ["Authentication", "Password only, replayable", "Password or public-key challenge"],
                ["Integrity", "None", "HMAC per packet"],
                ["Extra services", "None", "Channels, SFTP, port forwarding"],
                ["Modern status", "Legacy debugging only", "Universal admin standard"],
              ],
            },
            callout: {
              type: "warning",
              title: "Telnet sends your password to every eavesdropper",
              body: "The exam's decisive line: Telnet transmits credentials and all traffic in cleartext, so anyone on the path reads the password. Never justify Telnet for administration; mention its legitimate remaining use - hand-testing protocols like SMTP and HTTP line by line on port 25/80.",
            },
            diagram: {
              kind: "compare",
              title: "Telnet session versus SSH session",
              caption:
                "Same user experience, radically different machinery underneath: raw NVT bytes versus negotiated encrypted channels.",
              left: {
                heading: "Telnet (port 23)",
                items: [
                  "Raw NVT ASCII byte stream",
                  "No negotiation beyond terminal options",
                  "Password travels in cleartext",
                  "No integrity - content modifiable in transit",
                  "Single terminal channel",
                ],
              },
              right: {
                heading: "SSH (port 22)",
                items: [
                  "Algorithm negotiation then DH key exchange",
                  "Server host key verified (known_hosts)",
                  "Public-key challenge authentication",
                  "HMAC integrity + strong ciphers",
                  "Multiplexed channels, SFTP, port forwarding",
                ],
              },
            },
            bullets: [
              "Telnet: TCP 23, NVT ASCII, everything plaintext - historical ancestor, debugging tool today.",
              "SSH layers: TRANS (encryption/integrity), AUTH (password or public key), CONN (channels).",
              "Public-key login: server challenges; private key never leaves the client.",
              "known_hosts implements trust-on-first-use server verification.",
              "Worked flow: negotiate -> DH exchange -> host key check -> auth -> encrypted channel.",
              "SSH port forwarding tunnels mail/db/web through one encrypted session.",
              "Three-axis comparison: port, encryption, authentication.",
              "Telnet survives only for hand-testing text protocols and legacy devices.",
            ],
            examQuestions: [
              {
                q: "Compare Telnet and SSH on port number, confidentiality, integrity and authentication. Describe SSH's three protocol layers and explain public-key authentication with the challenge mechanism.",
                marks: 7,
                outline: [
                  "Telnet: port 23, NVT plaintext, no integrity.",
                  "SSH: port 22, encrypted and authenticated.",
                  "TRANS: DH key exchange, ciphers, HMAC.",
                  "AUTH: password vs public-key challenge.",
                  "CONN: channel multiplexing, SFTP, forwarding.",
                  "Challenge flow: server verifies key possession without transmitting secrets.",
                  "Conclude: why SSH displaced Telnet for administration.",
                ],
              },
              {
                q: "In SSH public-key login, what exactly does the client prove and how, without revealing the private key?",
                marks: 3,
                outline: [
                  "Server sends a challenge tied to the stored public key.",
                  "Client signs/decrypts it with the private key locally.",
                  "Correct response proves possession; the key itself never travels.",
                ],
              },
              {
                q: "Give the TCP ports of Telnet and SSH.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.6",
            title: "Firewalls and network security goals",
            body: [
              "Network security targets the CIA triad: Confidentiality (only intended parties read the data - encryption), Integrity (data unmodified in transit - hashes/MACs), Availability (service stays up - redundancy, DoS defence). Two more complete lists add Authentication (who sent this) and Non-repudiation (sender cannot later deny it). Every application-layer security mechanism in this unit ultimately buys one or more of these five properties, and exam answers should name which property each tool provides.",
              "A firewall is a device (or software) enforcing an access policy between a trusted inside network and untrusted outside. Types, by layer: packet-filtering firewall (router ACLs on IP/port, stateless - fast, cheap, cannot see connections or payloads); stateful firewall (tracks connection state tables, allows return traffic of established flows - the standard modern perimeter); application gateway / proxy (understands the protocol - an HTTP proxy can block URLs, scan content; an SMTP proxy can reject bad mail commands - deepest inspection, highest cost); next-generation firewalls combine all with deep packet inspection and IDS features. Placement: perimeter firewalls, internal segmentation, DMZ (a demilitarised zone hosting public servers - web/mail - behind an outer filter and in front of an inner one, so a compromised web server cannot reach the internal LAN directly).",
              "Worked rule design: a company policy 'internal users may browse the web; outsiders may reach only our web server; everything else denied'. Packet filter rules, evaluated top-down with default deny: (1) allow TCP from inside to any port 80/443; (2) allow TCP established-state return flows; (3) allow TCP any -> 203.0.113.10 port 80 (public web server in the DMZ); (4) deny all else. Each rule is (direction, source IP/mask, dest IP/mask, protocol, ports, action) - and the ORDER matters: first match wins, so specific permits precede the catch-all deny. This four-rule table is the canonical firewall exam answer.",
              "Limitations are half the marks: firewalls cannot stop traffic they allow - a permitted web server vulnerable to SQL injection is compromised 'through' the firewall; they cannot see inside encrypted TLS without breaking privacy/performance; they do nothing against insider threats already inside the perimeter; and availability attacks (DDoS volumetric floods) overwhelm filters upstream. Hence defence in depth: firewall at perimeter + IDS/IPS watching for signatures + patching + encryption end-to-end + authentication everywhere - each layer covers the others' blind spots. The exam formula: CIA goals, firewall types in layer order, one rule table, DMZ placement diagram, limitations + defence in depth conclusion.",
            ],
            keyTerms: [
              { term: "CIA triad", definition: "Confidentiality, Integrity, Availability - the core security goals (+ authentication, non-repudiation)." },
              { term: "Stateful firewall", definition: "Tracks connection state and permits return traffic of established flows automatically." },
              { term: "DMZ", definition: "Buffer subnet hosting public servers between outer and inner firewalls." },
              { term: "Defence in depth", definition: "Layered controls (firewall + IDS + encryption + auth) so no single failure is fatal." },
            ],
            table: {
              caption: "Firewall types by inspection depth.",
              headers: ["Type", "Sees", "Strength", "Blind spot"],
              rows: [
                ["Packet filter (stateless)", "IP headers, ports", "Fast, cheap", "No connection context; spoofable"],
                ["Stateful filter", "Headers + connection table", "Standard perimeter", "No payload inspection"],
                ["Application proxy", "Protocol content", "Deep policy (URLs, commands)", "Slow; per-protocol work"],
                ["NGFW / IPS", "Everything + signatures", "Blocks exploits inline", "Cost; encrypted traffic needs care"],
              ],
            },
            callout: {
              type: "exam",
              title: "Write rules top-down, end with default deny",
              body: "Firewall rule questions demand ORDER: specific permits first, default deny last, first-match evaluation stated explicitly. A rule table without the 'deny all else' final rule is incomplete - examiners look for it specifically, because real policies are deny-by-default.",
            },
            diagram: {
              kind: "layers",
              title: "Defence in depth at the perimeter",
              caption:
                "Each layer covers the blind spot of the one above it - the firewall is the first, not the only, gate.",
              layers: [
                { label: "Perimeter firewall", note: "stateful rules, DMZ hosting public servers" },
                { label: "IPS / IDS", note: "signature and anomaly detection on allowed traffic" },
                { label: "Application hardening", note: "patching, input validation - inside the allowed ports" },
                { label: "Encryption + authentication", note: "TLS end-to-end, strong identity for users" },
                { label: "Monitoring + response", note: "logs, backups, incident process - availability backstop" },
              ],
            },
            bullets: [
              "Security goals: confidentiality, integrity, availability (+ authentication, non-repudiation).",
              "Packet filter: stateless IP/port rules, fast, context-blind.",
              "Stateful firewall: connection table permits established-flow return traffic.",
              "Application proxy: protocol-aware policy (URL filtering, mail command checks).",
              "DMZ: public servers isolated between outer and inner filters.",
              "Worked rules: allow outbound 80/443, established returns, inbound to DMZ web server, deny all else.",
              "Order matters: first match wins; end with default deny.",
              "Limitations: cannot inspect encrypted payloads, insider threats, DoS floods - hence defence in depth.",
            ],
            examQuestions: [
              {
                q: "State the goals of network security and explain packet-filtering, stateful and application-gateway firewalls. Write a four-rule packet filter implementing 'browse out; web server in the DMZ; deny everything else' and discuss the firewall's limitations.",
                marks: 7,
                outline: [
                  "CIA triad plus authentication and non-repudiation.",
                  "Packet filter: stateless header rules.",
                  "Stateful: connection tracking and return traffic.",
                  "Application proxy: content-level policy.",
                  "Rule table: outbound 80/443, established, inbound DMZ 80, default deny.",
                  "Order/first-match semantics.",
                  "Limitations: encrypted traffic, insiders, DoS; defence in depth.",
                ],
              },
              {
                q: "What is a DMZ and why is the web server placed there instead of on the internal LAN?",
                marks: 3,
                outline: [
                  "Buffer subnet between two filters.",
                  "Compromised public server cannot directly reach the LAN.",
                  "Internal rules restrict DMZ->LAN flows to specific needs.",
                ],
              },
              {
                q: "State the difference between a stateless and a stateful packet filter in one line.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.7",
            title: "Cryptography basics: symmetric, asymmetric and RSA",
            body: [
              "Cryptography converts plaintext into ciphertext so that only key-holders can read it. Symmetric (secret-key) cryptography uses ONE shared key for encryption and decryption - DES (56-bit, broken), 3DES, AES (128/192/256-bit, the modern standard), and stream ciphers like RC4/ChaCha20. Strengths: extremely fast in hardware and software - AES encrypts gigabits per second - so bulk data everywhere is symmetric. Weakness: the KEY DISTRIBUTION problem - n users need n(n-1)/2 pairwise secret keys delivered over secure channels, and nothing in the scheme proves who sent a message (both parties share the same key, so either could have produced it).",
              "Asymmetric (public-key) cryptography solves distribution with a key PAIR: publish the public key, keep the private key secret. Anyone can encrypt TO you with your public key; only your private key decrypts. RSA (Rivest-Shamir-Adleman) is the canonical construction. Worked example: choose primes p = 3, q = 11; n = pq = 33; phi = (p-1)(q-1) = 20; choose e = 3 (coprime to 20); compute d with e x d = 1 mod 20 -> d = 7 (21 = 20 + 1). Public key (33, 3), private key (33, 7). Encrypt message m = 5: c = m^e mod n = 5^3 mod 33 = 125 mod 33 = 26. Decrypt: m = c^d mod n = 26^7 mod 33. Compute stepwise: 26^2 = 676 = 16 (mod 33); 26^4 = 16^2 = 256 = 25 (mod 33); 26^7 = 26^4 x 26^2 x 26 = 25 x 16 x 26 = 400 x 26 = 4 x 26 = 104 = 5 (mod 33). Plaintext recovered - and every intermediate stays under n, which is why exam-sized numbers work.",
              "Real RSA sizes and hybrid use: secure RSA needs 2048+ bit moduli (factoring 1024-bit n is borderline feasible) - the exam-sized p=3, q=11 is pedagogy, not security. Because public-key math is ~1000x slower than AES, real systems are HYBRID: TLS uses RSA/DH once to transport a fresh symmetric session key, then AES encrypts the bulk. Diffie-Hellman key exchange is the alternative key-establishment method: two parties publish g^a and g^b mod p, each computes (g^b)^a = g^(ab) mod p as the shared secret - eavesdroppers see only g^a, g^b and cannot derive g^(ab) without solving discrete log. Elliptic-curve variants (ECDH, ECDSA) achieve the same with far smaller keys.",
              "Summary discipline for exams: name the two families, one cipher each (AES, RSA), the key-distribution contrast (n(n-1)/2 shared keys vs public directory), the speed contrast (AES fast, RSA 1000x slower), the hybrid TLS pattern, and one complete numeric RSA round trip. Limitations to state honestly: symmetric needs a prior secure channel and gives no non-repudiation; asymmetric is slow and (unlike one-time pads in theory) all public-key security rests on unproven hardness assumptions - factoring and discrete log; quantum computers threaten both families (Shor's algorithm), motivating post-quantum ciphers now standardising.",
            ],
            keyTerms: [
              { term: "Symmetric cipher", definition: "One shared secret key for both directions - AES is the standard; fast, but needs key distribution." },
              { term: "Public-key pair", definition: "Public key encrypts/verifies; private key decrypts/signs - solves distribution, slower to compute." },
              { term: "phi(n) = (p-1)(q-1)", definition: "Euler's totient of the RSA modulus; d is the modular inverse of e modulo phi." },
              { term: "Hybrid encryption", definition: "Public key transports a fresh symmetric session key; AES does the bulk - the TLS pattern." },
            ],
            table: {
              caption: "Symmetric vs asymmetric cryptography.",
              headers: ["Property", "Symmetric (AES)", "Asymmetric (RSA/ECC)"],
              rows: [
                ["Keys", "One shared secret", "Public + private pair"],
                ["Keys for n users", "n(n-1)/2 pairwise secrets", "n public keys in a directory"],
                ["Speed", "Very fast (Gbps in hardware)", "~1000x slower"],
                ["Non-repudiation", "No - both hold the same key", "Yes - private key unique to owner"],
                ["Typical role", "Bulk data encryption", "Key exchange, signatures, identity"],
                ["Example", "AES-256", "RSA-2048, Curve25519"],
              ],
            },
            callout: {
              type: "exam",
              title: "The p = 3, q = 11 RSA trace scores the marks",
              body: "Write every step: n = 33, phi = 20, e = 3, d = 7 (since 3 x 7 = 21 = 1 mod 20), encrypt m = 5 -> c = 26, then decrypt via 26^7 = 26^4 x 26^2 x 26 = 25 x 16 x 26 = 5 mod 33. Show the modular squarings - the visible reduction steps are what the examiner marks, exactly like CRC division.",
            },
            diagram: {
              kind: "compare",
              title: "One shared key versus a key pair",
              caption:
                "Symmetric wins on speed, asymmetric wins on distribution and non-repudiation - TLS uses both.",
              left: {
                heading: "Symmetric (AES)",
                items: [
                  "Single secret key both sides",
                  "n(n-1)/2 keys for n users",
                  "Gigabit-per-second throughput",
                  "No non-repudiation - either party could encrypt",
                  "Needs a prior secure channel",
                ],
              },
              right: {
                heading: "Asymmetric (RSA)",
                items: [
                  "Public key published, private key held",
                  "Anyone can encrypt to you",
                  "About 1000x slower than AES",
                  "Enables signatures and non-repudiation",
                  "Security rests on factoring hardness",
                ],
              },
            },
            bullets: [
              "Symmetric: one shared key; AES-256 standard; fast; key distribution is the problem.",
              "Asymmetric: public/private pair; RSA and ECC; solves distribution; slow.",
              "RSA recipe: n = pq, phi = (p-1)(q-1), ed = 1 mod phi, c = m^e mod n, m = c^d mod n.",
              "Worked: p = 3, q = 11, n = 33, phi = 20, e = 3, d = 7; 5 -> 26 -> 5.",
              "Decrypt via modular squaring: 26^2 = 16, 26^4 = 25 (mod 33).",
              "Real RSA uses 2048+ bit moduli; exam numbers are pedagogy only.",
              "Hybrid TLS: RSA/DH delivers a session key, AES encrypts the bulk.",
              "Diffie-Hellman: shared secret g^(ab) mod p from public g^a, g^b; discrete log protects it.",
            ],
            examQuestions: [
              {
                q: "Compare symmetric and asymmetric cryptography, and perform a complete RSA example with p = 3, q = 11: derive n, phi, e, d, encrypt m = 5 and decrypt the ciphertext, showing every modular step.",
                marks: 7,
                outline: [
                  "Two families with one cipher example each.",
                  "Key distribution: n(n-1)/2 vs public directory.",
                  "RSA setup: n = 33, phi = 20, choose e = 3.",
                  "d = 7 because 3 x 7 = 21 = 1 mod 20.",
                  "Encrypt: 5^3 = 125 = 26 mod 33.",
                  "Decrypt: 26^2 = 16, 26^4 = 25, 26^7 = 25 x 16 x 26 = 5 mod 33.",
                  "Speed/hybrid conclusion: TLS uses RSA for keys, AES for data.",
                ],
              },
              {
                q: "Why is hybrid encryption used in TLS instead of pure RSA or pure AES?",
                marks: 3,
                outline: [
                  "Pure RSA: too slow for bulk data.",
                  "Pure AES: no way to distribute the key safely at session start.",
                  "Hybrid: RSA/DH transport a fresh session key; AES encrypts the stream.",
                ],
              },
              {
                q: "State the two mathematical problems whose hardness RSA and Diffie-Hellman respectively rely on.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.8",
            title: "Hashes, digital signatures and certificates",
            body: [
              "A cryptographic hash function compresses any input to a fixed-length digest with three properties: preimage resistance (cannot reverse a digest to the input), second-preimage resistance (cannot find another input with the same digest) and collision resistance (cannot find ANY two inputs with the same digest). Standards: MD5 (128-bit, broken for collisions), SHA-1 (160-bit, deprecated), SHA-2 family (SHA-256/512, current), SHA-3. Hashes are NOT encryption - one-way, no key - and they detect accidental or malicious modification: hash before and after transfer; matching digests certify the bytes are identical. HMAC combines a hash with a secret key to give integrity AND authenticity (an attacker cannot recompute the tag without the key).",
              "A digital signature turns hashes into non-repudiation. Sign: hash the message, encrypt the digest with the signer's PRIVATE key (or ECDSA-sign it); Verify: hash the received message, decrypt the signature with the signer's PUBLIC key, compare. Worked example (simplified RSA signature): private key d = 7, n = 33; message hash h = 4; signature s = h^d mod n = 4^7 mod 33: 4^2 = 16, 4^4 = 256 = 25, 4^7 = 25 x 16 x 4 = 400 x 4 = 4 x 4 = 16 mod 33. Verify with public key e = 3: 16^3 mod 33 = 4096 mod 33 = 4096 - 4092 = 4 = h - valid. Only the holder of d = 7 could produce s, and the binding to the hash covers the whole message: change one bit of the message and h changes, invalidating s.",
              "Certificates close the loop on public keys: anyone can publish a public key, so how do you know the key labelled 'google.com' really belongs to Google? X.509 certificates bind an identity to a public key, signed by a Certificate Authority whose OWN key is signed by a higher CA, up to root CAs pre-installed in browsers/OSes (the trust store). Worked verification of an HTTPS site: server presents cert (domain, public key, validity dates, CA signature); browser checks the domain matches, dates are valid, the signature chain reaches a trusted root, and revocation status is clean - then and only then does it encrypt the session with that key. TLS handshake in one line: certificate exchange + key agreement (DH/RSA) + cipher negotiation, then AES with HMAC on every record.",
              "Tying the unit together: hashes give integrity, HMAC adds keyed authenticity, signatures add non-repudiation, certificates add identity, TLS composes all four - hash-based HMAC for integrity, public-key for key agreement and identity, symmetric AES for bulk confidentiality. Limitations to note: hash collisions break signature schemes (MD5/SHA-1 collisions enabled forged certificates - the 2008 MD5 CA incident), private-key theft voids everything (key revocation is awkward - CRL/OCSP are slow and often ignored), and certificate authorities are a trust bottleneck (CA compromise or mis-issuance; Certificate Transparency logs are the countermeasure). The exam finale: one signing/verifying numeric trace, the X.509 field list, and the TLS composition sentence.",
            ],
            keyTerms: [
              { term: "Collision resistance", definition: "Infeasible to find any two distinct inputs with equal digests - the property MD5 lost." },
              { term: "Digital signature", definition: "Hash of the message encrypted with the signer's private key; verified with the public key." },
              { term: "X.509 certificate", definition: "Identity + public key + validity + CA signature, chain-verifiable to a trusted root." },
              { term: "HMAC", definition: "Keyed hash construction giving integrity and authenticity - used on every TLS record." },
            ],
            table: {
              caption: "Security mechanisms mapped to goals.",
              headers: ["Mechanism", "Provides", "Primitive", "Where seen"],
              rows: [
                ["Hash (SHA-256)", "Integrity", "One-way digest", "File checks, dedup"],
                ["HMAC", "Integrity + authenticity", "Keyed hash", "TLS records, API signing"],
                ["Digital signature", "Non-repudiation + integrity", "Private-key over hash", "Certificates, code signing"],
                ["Certificate", "Identity binding", "CA-signed X.509", "HTTPS, VPN, S/MIME"],
                ["TLS (hybrid)", "Confidentiality + all above", "DH + AES + HMAC", "HTTPS, SMTPS"],
              ],
            },
            callout: {
              type: "exam",
              title: "Sign with the PRIVATE key, verify with the PUBLIC key",
              body: "The one direction confusion loses marks on: encryption = public key encrypts, private key decrypts; signatures = private key signs, public key verifies. State both directions explicitly, then run the small RSA signature trace (h = 4, d = 7, s = 16, verify 16^3 = 4) to lock the concept in numbers.",
            },
            diagram: {
              kind: "cycle",
              title: "Trust cycle: hash, sign, certify, verify",
              caption:
                "Every HTTPS connection walks this loop - from a raw hash to a chain of signatures ending at a pre-installed root.",
              steps: [
                { label: "Hash the message", note: "SHA-256 digest binds the content" },
                { label: "Sign with private key", note: "signature s = h^d mod n" },
                { label: "Bind key to identity", note: "X.509 certificate signed by a CA" },
                { label: "Chain to a trusted root", note: "browser trust store holds root CAs" },
                { label: "Verify and open TLS", note: "check domain, dates, chain, revocation" },
                { label: "Session runs", note: "AES bulk + HMAC per record" },
              ],
            },
            bullets: [
              "Hash properties: preimage, second-preimage and collision resistance; SHA-256 current, MD5/SHA-1 broken.",
              "Hashes are one-way and keyless - not encryption; HMAC adds the key for authenticity.",
              "Signature = private key over the message hash; verification = public key over the received hash.",
              "Worked RSA signature: h = 4, d = 7, n = 33 -> s = 16; verify 16^3 mod 33 = 4.",
              "Certificates bind identity to public key; CA chains terminate in OS/browser trust stores.",
              "TLS handshake: certs + key agreement + cipher negotiation; then AES + HMAC records.",
              "Attacks/limits: MD5 collision forgery (2008 CA incident), key theft, slow revocation (CRL/OCSP).",
              "Goal mapping: hash = integrity, HMAC = authenticity, signature = non-repudiation, cert = identity, TLS = confidentiality.",
            ],
            examQuestions: [
              {
                q: "Explain cryptographic hash functions and digital signatures. Verify the simplified RSA signature with n = 33, public key e = 3, private key d = 7 for message hash h = 4, showing both signing and verification arithmetic, and explain how X.509 certificates establish trust.",
                marks: 7,
                outline: [
                  "Three hash properties with the MD5/SHA-1 cautionary note.",
                  "Signature construction: s = h^d mod n.",
                  "Compute 4^7 mod 33 stepwise: 4^2 = 16, 4^4 = 25, s = 16.",
                  "Verification: 16^3 = 4096 = 4 mod 33 = h - valid.",
                  "Why the private key gives non-repudiation.",
                  "X.509 fields and CA chain to a trusted root.",
                  "TLS composition: HMAC + signatures + AES.",
                ],
              },
              {
                q: "Why must signatures be computed over a HASH of the message rather than the message itself?",
                marks: 3,
                outline: [
                  "Messages are arbitrary-length; signatures are fixed-size operations.",
                  "Hashing binds the signature to the exact content.",
                  "Any change alters the digest and breaks the signature - cheaper than signing megabytes.",
                ],
              },
              {
                q: "Name the property a broken hash function (MD5) destroys and one real-world consequence.",
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
      id: "weightage",
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV CN papers typically draw most marks from Unit II (data link: CRC, sliding window, ALOHA/CSMA), Unit III (network layer: subnetting, IPv4 header, routing algorithms, IPv6) and Unit IV (TCP: handshake, flow and congestion control). Unit I supplies the framework questions (OSI/TCP/IP, media, switching) and Unit V the application + security questions - usually one guaranteed subnetting calculation and one guaranteed congestion-window trace per paper.",
      ],
      weightedTopics: [
        { topic: "Subnetting / CIDR calculations", weight: "7-14 marks", note: "Nearly guaranteed; practise 10+ problems until the AND step is automatic." },
        { topic: "CRC computation", weight: "7 marks", note: "One full division, e.g. 1101011011 with generator 10011 -> remainder 1110." },
        { topic: "Sliding window protocols (GBN/SR window bounds)", weight: "6-8 marks", note: "Know 2^m - 1 and 2^(m-1) with reasons." },
        { topic: "TCP congestion control trace", weight: "7 marks", note: "cwnd 1, 2, 4, 8 then +1 per RTT; both loss types." },
        { topic: "OSI vs TCP/IP models", weight: "5-8 marks", note: "Layer-by-layer mapping; short and long versions both appear." },
        { topic: "Routing algorithms DV vs LSR with Dijkstra trace", weight: "7-10 marks", note: "One worked relaxation table earns the marks." },
        { topic: "IPv4 header + fragmentation arithmetic", weight: "5-7 marks", note: "1480/1480/1020 fragment example with offsets /8." },
        { topic: "Hamming code encode + correct", weight: "6-8 marks", note: "Data 1011 -> 0110011; syndrome 101 = position 5." },
        { topic: "ALOHA throughput + CSMA/CD minimum frame", weight: "5-7 marks", note: "18.4% / 36.8%; 64 bytes from 51.2 microseconds." },
        { topic: "Application protocols (DNS, HTTP, SMTP/IMAP)", weight: "5-8 marks", note: "Ports, message flows, one trace each." },
        { topic: "RSA worked example + security basics", weight: "5-7 marks", note: "p=3, q=11, e=3, d=7, m=5 -> 26 -> 5." },
        { topic: "IPv6 header comparison and abbreviation", weight: "4-6 marks", note: "Two abbreviation rules; fixed 40-byte header." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week at two hours a day, this schedule covers all five units once for understanding and once for revision, and reserves the final week for full papers and calculation drills.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - models, media, switching", tasks: ["OSI 7 layers + TCP/IP mapping (write both stacks from memory)", "Transmission media table with numbers (100 m, 0.2 dB/km, SMF/MMF)", "Nyquist and Shannon worked examples", "Switching: circuit vs message vs packet; datagram vs virtual circuit"] },
        { week: "Week 2", focus: "Unit II - data link layer", tasks: ["Framing: bit stuffing 5 exercises by hand", "Parity, checksum and CRC: full division trace twice", "Hamming encode + syndrome correction (3 problems)", "Stop-and-Wait utilisation and window bounds GBN/SR"] },
        { week: "Week 3", focus: "Unit II MAC + Unit III addressing", tasks: ["ALOHA formulas and 18.4/36.8; CSMA/CD 64-byte derivation", "Ethernet frame format + hex decode practice", "Classful addressing + special addresses", "Subnetting drills: 10 problems including /26 and /27 designs"] },
        { week: "Week 4", focus: "Unit III - IP and routing", tasks: ["IPv4 header fields + fragmentation arithmetic (2 problems)", "ARP/DHCP DORA and ICMP message families", "Distance vector: 3-router trace + count-to-infinity fixes", "Dijkstra trace (5 nodes) + OSPF features; IPv6 abbreviation rules"] },
        { week: "Week 5", focus: "Unit IV - transport", tasks: ["UDP header + pseudo-header checksum", "TCP header + seq/ack numeric trace (ISN 1000/5000)", "3-way handshake, TIME_WAIT, SYN cookies", "Flow control rwnd arithmetic + SWS fixes", "Jacobson RTO trace + congestion window sawtooth"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["DNS resolution trace, HTTP conditional GET, FTP two-connection diagram", "Email pipeline with ports; Telnet vs SSH contrast", "Firewall rule table + CIA goals", "RSA p=3,q=11 full trace + signature verification", "Two full past papers under 3-hour timing"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Start with the guaranteed-calculation questions (subnetting, CRC, congestion window) - they are formulaic and bank marks fast.",
        "In subnetting, always show the binary AND step and subtract 2 for network + broadcast; quote the final range explicitly.",
        "In CRC and RSA, show every division/multiplication line - method marks live in the visible steps, not the final answer.",
        "For model questions, draw the OSI and TCP/IP stacks side by side before writing a word - the diagram anchors the whole answer.",
        "For protocol questions (FTP, email, DNS), draw the two-column message flow with port numbers on the arrows.",
        "For sliding-window and window-bounds questions, state the bound (2^m - 1 or 2^(m-1)) AND the reason - the reason carries the marks.",
        "Separate flow control (protects receiver, rwnd) from congestion control (protects network, cwnd) in the first sentence.",
        "Time-box: 2-mark answers under 4 minutes, 3-mark under 6, 7-mark under 15; leave 10 minutes to recheck calculations.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting to subtract 2 from host counts (network id + broadcast) in subnetting questions.",
        "Routing assigned to the data link layer, or MAC addressing assigned to the network layer - routing and IP are layer 3.",
        "Saying the checksum catches everything - it misses word swaps and compensating changes; CRC is the strong one.",
        "Dropping the stuffed 0 incorrectly: insert AFTER every run of five 1s, and the stuffed 0 itself breaks the run.",
        "Forgetting that SYN and FIN each consume one sequence number - acks are ISN + 1 before any data.",
        "Confusing Go-Back-N (resend from the lost frame onward) with Selective Repeat (resend only the missing frame).",
        "Quoting pure ALOHA's 36.8% - that number belongs to slotted ALOHA; pure peaks at 18.4%.",
        "Claiming the 64-byte Ethernet minimum is arbitrary - it comes from the 51.2 microsecond slot time at 10 Mbps.",
        "Mixing up signature direction: PRIVATE key signs, PUBLIC key verifies; public key encrypts, private key decrypts.",
        "Listing TIME_WAIT duration as zero or 'until the connection closes' - it is 2 x MSL, typically 60-120 seconds.",
      ],
    },
  ],
};
