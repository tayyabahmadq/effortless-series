import type { AcademicSubject } from "./types";

export const it604c: AcademicSubject = {
  id: "it-604-c",
  code: "IT-604(C)",
  title: "Wireless Sensor Networks",
  semester: "VI Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: how battery-powered motes sense and self-organize, how duty-cycled MACs and energy-aware routes stretch a 26 kJ battery across years, how queries and localization turn packets into answers with coordinates, and how security survives on 4 KB of RAM.",
  description:
    "The journey runs from hardware to hedge. Unit I builds the network's anatomy — characteristics, applications, design objectives and challenges, the MEMS and wireless technology underneath, mote platforms and software stacks, the standards ecosystem, and the architectures, classifications and protocol stack. Unit II works the protocols: the four MAC energy sins and their duty-cycled repairs from S-MAC and T-MAC through B-MAC, TRAMA and Z-MAC to the 802.15.4 superframe, then the seven-family routing taxonomy with LEACH, PEGASIS, TEEN, GEAR, GAF, Directed Diffusion, SPEED and their cousins. Unit III turns packets into answers: TinyDB and TAG query processing, the energy arithmetic of data aggregation, and the localization pipeline from ToA/TDoA/RSSI/AoA ranging through trilateration, DV-hop and APIT to deployed systems. Unit IV is the power-control story, passive and active, layer by layer — modulation and voltage scaling, duty cycling, topology control, power-aware routing metrics and the transport protocols PSFQ, RMST, ESRT and CODA. Unit V closes with security: the fundamentals, why 4 KB of RAM changes every assumption, the attack catalogue by layer, SPINS with SNEP and μTESLA, key management from pre-distribution to LEAP, and the IEEE 802.15.4 / ZigBee security machinery. Every section pairs a definition with worked numbers, one diagram, a table or code sample, key terms, a callout and examiner-style questions.",
  accentColor: "#22c55e",
  emoji: "WS",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Overview of Wireless Sensor Networks",
      summary:
        "Unit I frames the subject: the characteristic list that separates sensor networks from every other network class, the application domains that dictate design, the objectives and challenges every protocol must argue against, the MEMS and wireless communication technology underneath, the mote platforms and software stacks, the standards from IEEE 802.15.4 to ZigBee and 6LoWPAN, and the architectures, classifications and five-layer protocol stack that organize the rest of the course.",
      chapter: {
        number: "01",
        title: "The Anatomy of a Sensor Network",
        intro:
          "Chapter 1 covers the network characteristics and applications, the design objectives and challenges, the technological background in MEMS and wireless communication, the hardware and software platforms, the standards ecosystem, and the network architectures, classifications and protocol stack.",
        inOneBreath:
          "A wireless sensor network is hundreds of battery-powered motes sensing, processing and forwarding convergecast traffic to a sink, and energy — not bandwidth — is the binding constraint. Two AA cells hold about 26 kJ while the radio burns 56 mW just receiving, so lifetime is decided by duty cycling rather than by cleverness anywhere else. MEMS technology shrank sensors onto silicon, IEEE 802.15.4 and ZigBee standardized the radio and the mesh, and TinyOS and Contiki fit software into 4-10 KB of RAM. Flat, hierarchical and location-based architectures all ride on a five-layer protocol stack managed by cross-cutting power, mobility and task planes.",
        sections: [
          {
            number: "1.1",
            title: "Network characteristics — what makes a WSN different",
            body: [
              "A wireless sensor network is a deployment of hundreds to thousands of small, inexpensive, battery-powered nodes — motes — that sense a physical phenomenon, process the readings locally and forward them wirelessly over short hops toward one or more sinks. The sink collects the data, connects the network to its users and typically carries the heavier radio and energy budget. Each node is multifunctional: sensing, processing and communication are integrated on a few square centimetres of circuit board. The defining bargain of the field is trading per-node capability for mass deployment — a single mote is nearly useless, but a dense ensemble delivers coverage, redundancy and spatial resolution that no individual device could.",
              "The field's standard characteristic list separates WSNs from every other network class. Dense deployment places tens to hundreds of nodes per region of interest, so failures are statistical events, not catastrophes. Self-organization is mandatory: nodes discover neighbours, build routes and recover from failure without a human in the loop. Energy is the scarcest resource — nodes run on batteries that must outlast the deployment, often years. Design is application-specific: protocols are tuned to one sensing task rather than being general-purpose. And traffic is data-centric and many-to-one: readings flow toward the sink in a convergecast pattern, queried by attributes such as 'temperature above 40 °C' rather than by node addresses.",
              "The constraints are arithmetic, not hand-waving. A TelosB-class mote draws 18.8 mA on receive and 17.4 mA on transmit at 0 dBm — roughly 56 mW and 52 mW on a 3 V supply — against a two-AA alkaline pack holding about 26 kJ. Receiving continuously, the mote dies in about five days: 26,000 J divided by 0.056 W is roughly 4.6 × 10⁵ seconds. The same hardware with a 1% radio duty cycle stretches past a year, because sleep current falls to single-digit microamps. Every WSN protocol decision in this course — MAC, routing, aggregation, power control — is ultimately an argument about how many microseconds per second the radio spends awake.",
              "The exam contrast is with mobile ad hoc networks, and it pays to memorize it as a list. A WSN has far more nodes (hundreds to thousands versus tens), denser deployment, higher node failure rates, much tighter energy budgets, cheaper and more fragile hardware, and short broadcast links instead of long point-to-point hops. Above all it is data-centric: a MANET routes between named devices, while a WSN is asked 'what is the temperature in the north field?' and the answer must be assembled from whichever nodes happen to be there. Every protocol family of Unit II inherits this difference.",
            ],
            keyTerms: [
              { term: "Mote", definition: "A battery-powered node integrating sensing, processing and radio on one board — Mica2, MicaZ and TelosB are the classics." },
              { term: "Sink", definition: "The node that collects convergecast traffic and links the WSN to users or back-end networks." },
              { term: "Data-centric", definition: "Naming and querying by data attributes rather than by node addresses." },
              { term: "Duty cycle", definition: "The fraction of time a node's radio is awake; the master variable of WSN lifetime." },
              { term: "Convergecast", definition: "Many-to-one traffic pattern in which all readings flow inward to the sink." },
            ],
            table: {
              caption: "The characteristic list, translated into engineering consequences.",
              headers: ["Characteristic", "What it means in practice"],
              rows: [
                ["Dense deployment", "tens to hundreds of nodes per area; failures are statistical, not fatal"],
                ["Energy constraint", "battery must outlast the mission; duty cycling is mandatory, not optional"],
                ["Self-organization", "neighbour discovery, routing and failure recovery with no operators on site"],
                ["Application-specific design", "protocols tuned per sensing task; no universal network stack wins"],
                ["Data-centric traffic", "attribute queries and many-to-one convergecast toward the sink"],
                ["Unattended operation", "years of service with no maintenance window; faults tolerated by design"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Wireless sensor network vs mobile ad hoc network",
              caption: "Same wireless medium, opposite design pressures — the contrast the examiner starts from.",
              left: {
                heading: "Wireless sensor network",
                items: [
                  "hundreds to thousands of cheap motes",
                  "static, densely deployed, unattended",
                  "battery for years, never recharged",
                  "data-centric: query the phenomenon",
                  "failures expected and tolerated",
                ],
              },
              right: {
                heading: "Mobile ad hoc network (MANET)",
                items: [
                  "tens of powerful, human-carried devices",
                  "mobile, sparse, infrastructure-assisted",
                  "rechargeable devices, humans nearby",
                  "node-centric: route between addresses",
                  "long point-to-point links, mobility-driven changes",
                ],
              },
            },
            bullets: [
              "Motes integrate sensing, processing and radio on one battery-powered board; sinks collect and forward.",
              "Characteristics: dense deployment, self-organization, severe energy limits, application-specific design, unattended operation.",
              "TelosB radio: 18.8 mA RX, 17.4 mA TX at 0 dBm — about 56 mW and 52 mW at 3 V.",
              "Two AA cells hold about 26 kJ; continuous receiving empties them in roughly five days.",
              "A 1% duty cycle extends the same pack past a year — the whole subject lives on that ratio.",
              "Versus MANET: more nodes, higher density and failure rate, tighter energy, data-centric many-to-one traffic.",
            ],
            callout: {
              type: "tip",
              title: "The five-day number",
              body: "Memorize the arithmetic: 56 mW of continuous receive against a 26 kJ battery is about five days of life. Any protocol claiming year-long lifetime must therefore show a duty cycle near 1% or better — use the arithmetic to audit every energy claim you meet, in the exam and in practice.",
            },
            examQuestions: [
              {
                q: "Define a wireless sensor network and explain its distinguishing characteristics. Contrast a WSN with a mobile ad hoc network (MANET) with respect to scale, deployment density, energy budget and the nature of its traffic.",
                marks: 14,
                outline: [
                  "Definition: motes sense, process and forward convergecast traffic to a sink",
                  "Characteristics: dense deployment, self-organization, unattended operation",
                  "Energy constraint: 56 mW receive against a 26 kJ pack — five days at full duty",
                  "Application-specific design; data-centric attribute queries",
                  "Scale: hundreds to thousands of nodes versus tens in a MANET",
                  "Deployment: static and dense versus mobile and sparse",
                  "Traffic: many-to-one convergecast versus any-to-any named routing",
                ],
              },
              {
                q: "Why is a wireless sensor network called data-centric? Explain with an example how data-centric operation differs from node-centric ad hoc routing.",
                marks: 7,
                outline: [
                  "Queries name attributes ('temperature above 40 °C'), not node addresses",
                  "The answer is assembled from whichever nodes sense the phenomenon",
                  "Ad hoc routing forwards between named devices end to end",
                  "In-network processing becomes possible once data, not location, is addressed",
                  "Convergecast toward the sink replaces any-to-any paths",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Network applications",
            body: [
              "Applications are not illustrations in this subject — they are the design inputs, because WSN protocols are application-specific by definition. Military applications launched the field: battlefield surveillance, target tracking and nuclear, biological and chemical detection, where covert, self-organizing networks replace fixed infrastructure. Environmental monitoring followed: habitat studies, forest-fire detection, flood warning and precision agriculture, where nodes sample temperature, humidity, light and vibration for months or years. The canonical early deployments set the pattern — the Great Duck Island petrel-habitat study kept roughly a hundred motes reporting temperature, humidity and barometric pressure for months, and structural-health trials such as the Golden Gate Bridge monitoring experiment ran 64 nodes sampling acceleration.",
              "Health and industrial applications drive a different set of requirements. Patient and elder monitoring attaches body-worn motes that stream ECG, pulse and motion to a gateway, so tiny size, low RF exposure and privacy dominate. Industrial plants instrument rotating machinery and pipelines for vibration-based predictive maintenance, favouring deterministic latency and gateway-backed architectures. Smart buildings instrument occupancy, temperature and light for HVAC control; transportation and underground mining instrument vehicles and tunnels for safety. In every case the application decides the duty cycle, the latency tolerance and the failure model before any protocol is chosen.",
              "The worked example that earns marks is the requirements translation. A habitat monitor wants a ten-year lifetime, tolerates minutes of latency, and reports a few samples per hour — so the design sleeps 99.9% of the time and uses range-free, low-rate protocols. A target-tracking application wants sub-second detection and hand-off, so it keeps a spatial wake-up region active around the target and spends energy where the event is. A structural monitor wants synchronized, high-rate burst sampling of acceleration — so clock synchronization and TDMA-style schedules dominate. Same hardware, opposite protocol stacks: the application chooses.",
              "The exam question is usually 'list and explain applications of WSNs with their requirements', so structure the answer by domain, deployment shape and requirement. Military: covert, mobile-sink, secure. Environmental: long-lived, sparse reporting. Health: tiny, body-worn, private. Industrial and structural: dense, deterministic, gateway-backed. Home and building: cheap, plug-and-play. Close with the observation that every protocol in Units II through IV can be traced to one of these requirement profiles — that sentence converts a list into an argument.",
            ],
            keyTerms: [
              { term: "Habitat monitoring", definition: "Long-duration, low-rate environmental sensing — the classic long-lifetime deployment profile." },
              { term: "Target tracking", definition: "Event-driven sensing with sub-second latency requirements around moving objects." },
              { term: "Structural health monitoring", definition: "Synchronized high-rate vibration sampling of bridges and buildings for damage detection." },
              { term: "Telemedicine / body sensor network", definition: "Body-worn motes streaming physiological signals to a gateway under privacy constraints." },
              { term: "Precision agriculture", definition: "Field-deployed motes measuring soil and climate to steer irrigation and treatment." },
            ],
            table: {
              caption: "Application domain -> deployment shape -> the requirement it forces.",
              headers: ["Domain", "Example deployment", "Dominant requirement"],
              rows: [
                ["Military", "battlefield surveillance, target tracking", "covert operation, mobility support, security"],
                ["Environmental", "habitat, forest fire, flood monitoring", "decade-scale lifetime, sparse low-rate reporting"],
                ["Health", "patient and elder monitoring", "tiny nodes, privacy, prompt event alerts"],
                ["Industrial / structural", "machine diagnostics, bridge monitoring", "synchronized high-rate sampling, deterministic latency"],
                ["Home / building", "smart HVAC, occupancy sensing", "low cost, plug-and-play self-configuration"],
                ["Agriculture / transport", "soil and climate fields, vehicle fleets", "coverage over wide areas, robust links"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Applications decide the protocol stack",
              caption: "One hardware platform serves all four domains; the requirement profile chooses the protocols.",
              start: "What is being monitored?",
              branches: [
                { label: "Environment: habitat, fire, flood", outcome: "sleep 99%+ of the time; long lifetime over latency", good: true },
                { label: "Machines and structures", outcome: "synchronized, TDMA-style burst sampling at gateways", good: true },
                { label: "The human body", outcome: "tiny, low-power, privacy-conscious body motes", good: true },
                { label: "Battlefield targets", outcome: "covert wake-up regions; secure, mobile-sink designs", good: true },
              ],
            },
            bullets: [
              "Military: battlefield surveillance, target tracking, NBC detection — covert and secure.",
              "Environmental: habitat, fire, flood, precision agriculture — long lifetime, sparse reporting.",
              "Health: patient monitoring and telemedicine — tiny, body-worn, privacy-sensitive.",
              "Industrial and structural: machine and bridge monitoring — synchronized, deterministic, gateway-backed.",
              "Great Duck Island (~100 motes) and the Golden Gate Bridge trial (64 nodes) are the canonical examples.",
              "Each domain maps to a requirement profile: duty cycle, latency tolerance, failure model — the profile picks the protocols.",
            ],
            callout: {
              type: "exam",
              title: "Applications dictate design",
              body: "The line 'applications dictate design' is worth real marks. Habitat monitoring wants decade-long lifetime at minutes of latency; target tracking wants seconds of latency and spends energy where the event is. Saying which protocol family serves which profile is what separates a list from a full-mark answer.",
            },
            examQuestions: [
              {
                q: "Describe the major application areas of wireless sensor networks — military, environmental, health, industrial and structural — and for each state the deployment shape and the requirement it forces on the protocol design.",
                marks: 14,
                outline: [
                  "Military: surveillance and tracking; covert, secure, mobile-sink designs",
                  "Environmental: habitat/fire/flood; decade-scale lifetime, sparse low-rate reporting",
                  "Health: body-worn motes; tiny size, privacy, prompt alerts",
                  "Industrial and structural: synchronized high-rate sampling; deterministic latency",
                  "Canonical deployments: Great Duck Island habitat, Golden Gate Bridge structural trial",
                  "Requirement profile -> protocol: sleep-heavy for monitoring, active regions for tracking",
                  "Closing principle: applications dictate design across Units II-IV",
                ],
              },
              {
                q: "Contrast the requirements of a forest-fire monitoring WSN with a bridge structural-health monitoring WSN, and explain how the choice of MAC and synchronization mechanisms follows from each.",
                marks: 7,
                outline: [
                  "Fire monitoring: sparse reporting, minutes of latency, decade lifetime, sleep 99%+",
                  "Bridge monitoring: synchronized burst sampling, strict sample alignment",
                  "Sleep-heavy MAC (preamble sampling / long duty cycles) suits the fire network",
                  "TDMA-style schedules plus clock synchronization suit the bridge network",
                  "Failure models differ: statistical node loss versus calibration-critical data quality",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Network design objectives",
            body: [
              "Design objectives are the criteria against which every protocol of this course is judged, and they are not equal. Network lifetime sits at the top: the deployment must run unattended for its mission — commonly five to ten years — and lifetime is what every energy mechanism ultimately buys. Under it sits energy efficiency at every layer: the MAC must sleep the radio, the network layer must aggregate and route around weak nodes, the physical layer must transmit at the minimum sufficient power. Then scalability — protocols must work at hundreds to thousands of nodes without O(n²) coordination — and fault tolerance, the ability to lose nodes and still deliver data, which is why self-organization is a requirement.",
              "Below the survival objectives sit the quality objectives. Latency matters differently by application: event-driven networks need sub-second detection while monitoring networks can wait minutes, so the design targets differ by orders of magnitude. Coverage and connectivity require that every point of interest is sensed by at least k nodes and that the communication graph stays connected — density and redundancy are bought for exactly this. Application awareness means the protocol stack is tuned per task rather than general-purpose. And security, the subject of Unit V, is a design objective in its own right once node capture and broadcast eavesdropping become realistic adversary models.",
              "The objectives conflict, and the conflict is the real content of the topic. Duty cycling saves energy but adds sleep-latency at every hop — a 10% duty-cycle MAC can multiply end-to-end delay by roughly the inverse of the duty cycle under light load. Topology control sleeps redundant nodes to stretch lifetime but thins the routing mesh. Aggregation saves transmissions but costs accuracy and time on the path. Aggressive power control cuts interference and energy but can partition the graph. A full-mark answer names the tradeoff explicitly — 'this buys lifetime at the price of latency' — rather than listing objectives as if they were independent.",
              "Make the objectives measurable, because the examiner rewards targets over adjectives. Lifetime: years of unattended service from a 26 kJ battery, which arithmetic converts into a required duty cycle. Scalability: hundreds to thousands of nodes with per-node state that does not grow with network size. Fault tolerance: percentage of node loss the network absorbs while maintaining, say, 90% packet delivery. Latency: sub-second for event classes, minutes for monitoring classes. Writing each objective with its metric and its typical target is the difference between reciting the list and demonstrating the design discipline the unit exists to teach.",
            ],
            keyTerms: [
              { term: "Network lifetime", definition: "How long the deployment delivers useful data — the top-level objective every mechanism serves." },
              { term: "Scalability", definition: "Graceful operation from hundreds to thousands of nodes without per-node state explosion." },
              { term: "Fault tolerance", definition: "The ability to absorb node failures and still meet delivery targets, via redundancy and self-organization." },
              { term: "Coverage", definition: "Every point of interest sensed by at least k nodes; connectivity keeps the sensing graph reportable." },
              { term: "Sleep latency", definition: "The queueing delay introduced when a next-hop receiver is duty-cycled asleep." },
            ],
            table: {
              caption: "Objectives with their metrics — targets, not adjectives.",
              headers: ["Objective", "Metric", "Typical target"],
              rows: [
                ["Network lifetime", "years of useful delivery", "5-10 years unattended from a ~26 kJ battery"],
                ["Energy efficiency", "energy per delivered bit", "duty cycles near 1% for monitoring traffic"],
                ["Scalability", "per-node state vs network size", "1000+ nodes with neighbour-scale state"],
                ["Fault tolerance", "delivery under node loss", "90%+ packets with 10-20% nodes dead"],
                ["Latency", "event detection to sink arrival", "sub-second for events; minutes acceptable for monitoring"],
                ["Coverage / connectivity", "k-coverage; graph connectivity", "k >= 1 sensing, connected communication graph"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The objective pyramid",
              caption: "Objectives stack: lifetime rules, energy serves it, and the rest is bought with tradeoffs.",
              tiers: [
                { label: "Network lifetime", note: "the binding objective — years, unattended" },
                { label: "Energy efficiency at every layer", note: "duty cycling, aggregation, power control" },
                { label: "Scalability, fault tolerance, self-organization", note: "hundreds of nodes, no operators" },
                { label: "QoS: latency and fidelity", note: "event-driven seconds vs monitoring minutes" },
                { label: "Cost and deployment practicality", note: "dollars per node, installation effort" },
              ],
            },
            bullets: [
              "Lifetime tops the pyramid: 5-10 unattended years is the canonical target.",
              "Energy efficiency is pursued at every layer — MAC sleep, routing around weak nodes, minimal TX power.",
              "Scalability and fault tolerance demand neighbour-scale state and self-organization.",
              "Latency targets differ by application: sub-second for events, minutes for monitoring.",
              "Coverage and connectivity are bought with node density and redundancy.",
              "The objectives conflict: duty cycling trades latency, topology control trades mesh density, aggregation trades accuracy.",
            ],
            callout: {
              type: "exam",
              title: "Name the tradeoff, not just the objective",
              body: "Every objectives question is secretly a tradeoff question. For each objective you list, attach the objective it costs: duty cycling costs sleep latency, topology control costs mesh density, aggregation costs accuracy and delay. The explicit tradeoff sentence is what earns the final marks.",
            },
            examQuestions: [
              {
                q: "Explain the major design objectives of wireless sensor networks — lifetime, energy efficiency, scalability, fault tolerance, latency, coverage — and discuss how they conflict with one another.",
                marks: 14,
                outline: [
                  "Lifetime: 5-10 unattended years from a ~26 kJ battery — the binding objective",
                  "Energy efficiency per layer: MAC sleep, aggregation, minimal TX power",
                  "Scalability: neighbour-scale state, no O(n^2) coordination at 1000+ nodes",
                  "Fault tolerance: 90% delivery with 10-20% node loss via redundancy",
                  "Latency: sub-second events versus minutes for monitoring",
                  "Coverage and connectivity: k-sensing plus a connected graph",
                  "Conflicts: duty cycle vs sleep latency; topology control vs mesh density; aggregation vs accuracy",
                ],
              },
              {
                q: "Explain why scalability and fault tolerance force WSN routing protocols to keep only neighbour-scale state.",
                marks: 7,
                outline: [
                  "O(n) or O(n^2) per-node state breaks at hundreds of nodes (memory is 4-10 KB)",
                  "Routes must be built from local neighbour discovery, not global knowledge",
                  "Failures are frequent: state that references dead nodes must expire locally",
                  "Self-organization rebuilds paths from neighbour tables only",
                  "Consequence: protocols like LEACH, GAF and Directed Diffusion carry cluster- or hop-local state",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Network design challenges",
            body: [
              "The challenges are the objectives' bill, and the canonical list starts with energy: nodes run on finite batteries, harvesting is unreliable outdoors, and every protocol decision spends or saves charge. Scalability follows — coordination schemes that work at 20 nodes collapse at 2000 because per-node state and message complexity grow with network size. Node failure is a normal operating condition, not an exception: hardware dies, batteries deplete and RF conditions shift, so protocols must treat a 10% dead population as a design assumption. Dynamic environments add mobility of sinks or nodes and a wireless channel that fades, interferes and exhibits asymmetric links.",
              "Then come the constraints that make this course distinct from a generic networking course. Nodes are resource-starved: 4-10 KB of RAM, kilobyte-scale program storage margins and megahertz CPUs — enough to run a compact protocol, not enough for heavyweight stacks. Clock synchronization is a standing problem because crystal oscillators drift tens of parts per million, which is one to three seconds a day, while TDMA schedules and TDoA ranging both need microsecond-scale agreement. Localization dependency means most routing and tracking services assume nodes know where they are, yet GPS is too expensive and power-hungry to give every mote. And the deployment is data-centric: the network is expected to answer queries, not just move packets.",
              "Worked example — the drift chain: a mote's crystal at 30 ppm drifts about 2.6 seconds per day, so two unsynchronized neighbours diverge by roughly 5 seconds in a day; a TDMA slot of 10 ms would misfire catastrophically. Flooding Time Sync Protocol style exchanges with mac-layer timestamping pull that to tens of microseconds at modest message cost — the reason every schedule-based MAC of Unit II pairs itself with a synchronization service. This is the pattern for every challenge: state the constraint in numbers, show the failure it causes, name the mechanism that manages it.",
              "Organize the challenges on two axes: where the constraint lives (node-level versus network-level) and whether a proven protocol answer exists. Node-level with proven answers: duty cycling, voltage scaling, power modes. Network-level with proven answers: clustering, schedule-based MAC, in-network aggregation. Node-level still open: harvesting-aware scheduling, battery non-idealities. Network-level still open: energy holes under mobility and heterogeneity. Presenting the list this way in the exam shows why the syllabus is structured as it is — the mature answers became Units II and IV, and the open problems are the research agenda.",
            ],
            keyTerms: [
              { term: "Energy hole", definition: "The ring of nodes near the sink that relays all convergecast traffic and dies first." },
              { term: "Clock drift", definition: "Oscillator error in parts per million; 30 ppm is roughly 2.6 seconds per day." },
              { term: "Link asymmetry", definition: "A can hear B while B cannot reliably hear A — breaks handshakes and routing assumptions." },
              { term: "In-network processing", definition: "Computing partial answers inside the network instead of shipping raw data to the sink." },
              { term: "Resource starvation", definition: "4-10 KB of RAM and megahertz CPUs bound protocol complexity and crypto choices." },
            ],
            table: {
              caption: "Challenge -> failure it causes -> the mechanism that manages it.",
              headers: ["Challenge", "Failure if ignored", "Managing mechanism"],
              rows: [
                ["Finite battery", "network dies mid-mission", "duty cycling, aggregation, power control (Unit IV)"],
                ["Scalability", "state and message explosion at 1000+ nodes", "clustering, neighbour-scale state, attribute routing"],
                ["Node failure", "routes through dead nodes; coverage gaps", "self-organization, multipath, topology control"],
                ["Clock drift (30 ppm)", "TDMA slots misfire; TDoA ranging corrupt", "FTSP-style timestamped synchronization"],
                ["No GPS per node", "routing and tracking lose coordinates", "anchor-based localization (Unit III)"],
                ["Data-centric queries", "raw flooding wastes the battery", "query processing and aggregation (Unit III)"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The challenge map",
              caption: "Constraints sorted by origin and maturity — the mature answers became Units II and IV.",
              axes: { x: "node-level constraint -> network-level constraint", y: "proven protocol answers -> open research problems" },
              quadrants: [
                { label: "Harvesting and battery-wear management", note: "node-level, still open" },
                { label: "Energy holes under mobility and heterogeneity", note: "network-level, still open" },
                { label: "Duty cycling, voltage scaling, sleep modes", note: "node-level, proven" },
                { label: "Clustering, schedule-based MAC, aggregation", note: "network-level, proven" },
              ],
            },
            bullets: [
              "Energy, scalability, node failure and dynamic environments are the four standing challenges.",
              "Resource starvation: 4-10 KB RAM and MHz CPUs bound protocol and crypto choices.",
              "Crystal drift at 30 ppm is ~2.6 s/day — schedule-based MACs need FTSP-class synchronization.",
              "Localization dependency: routing and tracking assume coordinates that GPS-per-node cannot afford.",
              "Data-centric operation demands query processing, not just packet forwarding.",
              "Sort the list by origin and maturity — it explains why the syllabus is ordered the way it is.",
            ],
            callout: {
              type: "warning",
              title: "Drift is a protocol problem, not a hardware flaw",
              body: "Every oscillator drifts — 30 ppm is normal silicon, not a defect. The failure only appears when a protocol assumes time agreement it never purchased. Any answer proposing TDMA, TDoA ranging or μTESLA must name its synchronization service, or the design is incomplete.",
            },
            examQuestions: [
              {
                q: "Discuss the major design challenges of wireless sensor networks — energy constraints, scalability, node failure, resource starvation, clock synchronization and localization dependency — giving for each the failure it causes and the mechanism that manages it.",
                marks: 14,
                outline: [
                  "Energy: finite battery; failure = mid-mission death; fix = duty cycling and aggregation",
                  "Scalability: state explosion at 1000+ nodes; fix = clustering, neighbour-scale state",
                  "Node failure: routes through dead nodes; fix = self-organization and multipath",
                  "Resource starvation: 4-10 KB RAM bounds protocol and crypto complexity",
                  "Clock drift: 30 ppm = ~2.6 s/day; TDMA/TDoA need FTSP-class sync to microseconds",
                  "Localization dependency: GPS per node too costly; fix = anchor-based localization",
                  "Close with the maturity map: proven answers became Units II-IV",
                ],
              },
              {
                q: "A TDMA-based MAC assigns 10 ms slots without any synchronization service. Explain quantitatively why this fails within a day.",
                marks: 7,
                outline: [
                  "Typical crystal drift: 20-50 ppm between two independent oscillators",
                  "30 ppm diverges about 2.6 seconds per day between two nodes",
                  "A 10 ms slot is misaligned by seconds — transmissions land in neighbours' slots",
                  "Result: collisions and deafness long before the first day ends",
                  "Remedy: periodic timestamped synchronization (FTSP-class) holding error to tens of microseconds",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Technological background: MEMS and wireless communication",
            body: [
              "MEMS — micro-electro-mechanical systems — is the technology that made the mote possible. Micromachining carves accelerometers, gyroscopes, pressure and humidity cells, microphones and flow sensors directly into silicon alongside the conditioning electronics, shrinking transducers from benchtop instruments to chip-scale packages. Batch fabrication drives per-sensor cost from tens of dollars down to single digits, and power from watts to milliwatts. The 'smart dust' research vision — motes a few millimetres on a side — rests on exactly this integration. Without MEMS, the density and cost assumptions of Unit I's characteristic list would be arithmetic fiction; with it, sensing becomes a component like the MCU or radio.",
              "The wireless half of the background is radio engineering under rationing. Motes live in the licence-free ISM bands — 433, 868 and 915 MHz, and above all 2.4 GHz — trading interference for freedom from licensing. IEEE 802.15.4 at 2.4 GHz uses DSSS with O-QPSK modulation to reach 250 kbps across sixteen 5 MHz-spaced channels; lower bands offer 20-40 kbps with better propagation. Spread spectrum spreads each symbol over a chipping sequence, buying interference robustness that narrowband modulation cannot. Antennas shrink with the board, so budgets are short: a 0 dBm transmitter against a -95 dBm receiver sensitivity leaves about 95 dB of path budget, supporting 50-100 m line-of-sight at 2.4 GHz and far less indoors.",
              "The link-budget arithmetic is worth doing once, in the exam and in life. Free-space path loss at 2.4 GHz over 50 m is roughly 74 dB; add shadowing and body absorption indoors and 10-20 dB more is realistic. Against a 95 dB budget, the margin is thin, which is why multi-hop networking is the default architecture rather than a performance choice: five 10 m hops cost far less energy than one 50 m hop whenever path loss grows super-linearly with distance — the fact Unit IV's crossover-distance calculation makes exact. Understanding the physical layer's numbers explains half the protocol decisions above it.",
              "For the exam, present the two backgrounds as one story: MEMS put a laboratory on a chip, wireless communication gave the chips a shared voice, and together they define the mote — a milliwatt sensor, a megahertz processor and a 250 kbps radio on one battery. The table of bands and rates, the path-loss arithmetic and the smart-dust vision sentence are the three quotable assets. Then connect forward: these numbers are the input constants for every MAC duty cycle, every transmission-power decision and every link-quality estimate in the rest of the course.",
            ],
            keyTerms: [
              { term: "MEMS", definition: "Micromachined sensors integrated on silicon with electronics — chip-scale, batch-fabricated, milliwatt sensing." },
              { term: "Smart dust", definition: "The research vision of millimetre-scale autonomous sensor motes enabled by MEMS integration." },
              { term: "ISM band", definition: "Licence-free industrial, scientific and medical bands (433/868/915 MHz, 2.4 GHz) that motes share." },
              { term: "DSSS / O-QPSK", definition: "Direct-sequence spread spectrum with offset QPSK — IEEE 802.15.4's 2.4 GHz PHY reaching 250 kbps." },
              { term: "Link budget", definition: "Transmit power minus total path loss against receiver sensitivity; about 95 dB on a mote radio." },
            ],
            table: {
              caption: "The bands a mote can legally use, and what each buys.",
              headers: ["Band", "Channels", "Data rate (802.15.4)", "Character"],
              rows: [
                ["868 MHz (EU)", "1", "20 kbps", "best propagation, narrow spectrum"],
                ["915 MHz (Americas)", "10", "40 kbps", "good range, regional availability"],
                ["2.4 GHz (worldwide)", "16", "250 kbps", "universal, congested with Wi-Fi/BLE"],
                ["Path budget at 2.4 GHz", "0 dBm TX, -95 dBm sensitivity", "~95 dB", "about 50-100 m line-of-sight"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "MEMS sensing vs conventional instrumentation",
              caption: "The size, cost and power gap that turned sensing into a mote component.",
              left: {
                heading: "MEMS on the mote",
                items: [
                  "micromachined on silicon with its electronics",
                  "batch fabrication — single-digit dollars",
                  "milliwatt budgets, chip-scale packages",
                  "accelerometers, gyros, pressure, humidity",
                ],
              },
              right: {
                heading: "Conventional instrumentation",
                items: [
                  "discrete transducers plus wiring",
                  "custom assembly — tens to hundreds of dollars",
                  "watt-scale benchtop instruments",
                  "accurate, but too large and too thirsty for a mote",
                ],
              },
            },
            bullets: [
              "MEMS integrates transducers and electronics on silicon: chip-scale, batch-made, milliwatt sensing.",
              "Smart dust is the vision statement — millimetre motes — and MEMS is its enabling technology.",
              "ISM bands are licence-free: 433/868/915 MHz and 2.4 GHz; interference is the price of freedom.",
              "802.15.4 at 2.4 GHz: DSSS + O-QPSK, 250 kbps, sixteen channels spaced 5 MHz.",
              "Path budget ~95 dB at 0 dBm TX against -95 dBm sensitivity: 50-100 m line-of-sight, less indoors.",
              "Short hops beat long hops when path loss grows super-linearly — the seed of Unit IV's crossover-distance result.",
            ],
            callout: {
              type: "tip",
              title: "Two numbers that explain multi-hop",
              body: "0 dBm transmit and -95 dBm sensitivity give a ~95 dB budget; free-space loss at 2.4 GHz is about 74 dB at 50 m before shadowing. That thin margin is why sensor networks hop in 10-30 m steps — quote the arithmetic when asked why WSNs are multi-hop by default.",
            },
            examQuestions: [
              {
                q: "Explain the role of MEMS technology and wireless communication technology in the development of wireless sensor networks. Include the ISM bands, the 2.4 GHz PHY parameters and the link-budget arithmetic that motivates multi-hop operation.",
                marks: 14,
                outline: [
                  "MEMS: transducers micromachined on silicon with electronics — chip-scale, batch-made",
                  "MEMS effects: single-digit dollar sensors, milliwatt budgets, smart-dust vision",
                  "ISM bands: 433/868/915 MHz and 2.4 GHz — licence-free, interference shared",
                  "2.4 GHz PHY: DSSS with O-QPSK, 250 kbps, sixteen 5 MHz channels",
                  "Link budget: 0 dBm TX, -95 dBm sensitivity, ~95 dB; ~74 dB loss at 50 m",
                  "Thin margin plus shadowing: 50-100 m line-of-sight outdoors, less indoors",
                  "Super-linear path loss with distance makes short multi-hop the energy-efficient default",
                ],
              },
              {
                q: "Why do wireless sensor nodes operate in the ISM bands, and what price does the network pay for licence-free operation?",
                marks: 7,
                outline: [
                  "No licence or spectrum fees — mandatory for thousand-node deployments",
                  "Worldwide availability at 2.4 GHz simplifies hardware",
                  "Price: shared spectrum — Wi-Fi, BLE and microwave interference",
                  "Price: power limits on transmissions and duty-cycle restrictions in some regions",
                  "Mitigation: DSSS spreading, channel blacklisting, frequency agility",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Hardware and software platforms",
            body: [
              "Every mote shares one architecture, and drawing it is the standard diagram question. The sensing subsystem holds transducers with conditioning circuits and an ADC; the processing subsystem is a microcontroller with RAM, flash and usually a low-power sleep ladder; the communication subsystem is a low-power radio over SPI; the power subsystem is cells plus regulation. Two optional blocks complete the picture: a location-finding subsystem (GPS or an antenna array for direction finding) and, rarely, a mobilizer. The architecture is a study in proportionality — the radio draws more than everything else combined while awake, which is why the whole course orbits around keeping it asleep.",
              "The platforms make the numbers concrete. Mica2 paired an Atmega128 (8-bit, 8 MHz, 4 KB RAM, 128 KB flash) with the CC1000 radio at 433/915 MHz and 38.4 kbps. MicaZ kept the same MCU but moved to the CC2420, an IEEE 802.15.4 radio at 250 kbps. TelosB switched to the MSP430 — a 16-bit MCU engineered for sleep, about 1.8 mA active and single-digit microamps in LPM — with 10 KB RAM, 48 KB flash and the same CC2420 radio. Imote2 scaled up to a 416 MHz XScale with 32 MB of memory for signal-processing-heavy applications. The progression is the field's history in four boards: same architecture, evolving proportions.",
              "Software platforms are operating systems for a different physics. TinyOS, written in nesC, is event-driven and component-based: the stack is wired from components, execution never blocks, and the whole OS footprint is kilobytes — its binary fits beside the application in 128 KB flash. Contiki brings protothreads and full IP connectivity (6LoWPAN), trading a little memory for standards compliance. MantisOS and LiteOS round out the family. The design constraint is RAM: with 4-10 KB total, a memory-hungry TCP stack or a malloc-happy application simply does not fit, so event-driven, statically allocated code is not a stylistic preference but a survival requirement.",
              "The exam likes three things from this section: the node block diagram with all six blocks, the platform comparison with MCU/RAM/radio columns, and the TinyOS-Contiki contrast with the RAM arithmetic that justifies event-driven design. The worked number to carry is the ratio: a TelosB has 10 KB of RAM, of which the TinyOS core and drivers consume several kilobytes — leaving the application a few kilobytes to hold routing tables, crypto state and buffers. That single ratio explains buffer sizing, table limits and why per-node state must stay neighbour-scale, exactly as Unit I's scalability challenge demanded.",
            ],
            keyTerms: [
              { term: "TinyOS", definition: "Event-driven, component-based nesC operating system with a kilobyte-scale footprint — the classic mote OS." },
              { term: "Contiki", definition: "Protothread-based OS with 6LoWPAN/IP support; trades memory for standards compliance." },
              { term: "nesC", definition: "The C dialect of TinyOS: components, interfaces and wiring instead of threads and blocking calls." },
              { term: "LPM (low-power mode)", definition: "MCU sleep states; MSP430's LPM3 draws single-digit microamps while keeping RAM." },
              { term: "Location-finding subsystem", definition: "Optional GPS or antenna-array block that gives a node coordinates or bearing." },
            ],
            table: {
              caption: "The classic platform progression.",
              headers: ["Platform", "MCU", "RAM / flash", "Radio", "Character"],
              rows: [
                ["Mica2", "Atmega128L, 8-bit, 8 MHz", "4 KB / 128 KB", "CC1000, 433/915 MHz, 38.4 kbps", "the original research workhorse"],
                ["MicaZ", "Atmega128L, 8-bit, 8 MHz", "4 KB / 128 KB", "CC2420, 802.15.4, 250 kbps", "standardized radio, same tight RAM"],
                ["TelosB", "MSP430F1611, 16-bit, 8 MHz", "10 KB / 48 KB (+1 MB)", "CC2420, 250 kbps", "sleep-optimised MCU, ~5 µA sleep"],
                ["Imote2", "PXA271 XScale, 416 MHz", "32 MB / 32 MB", "802.15.4", "signal-processing-heavy applications"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Sensor node hardware and software stack",
              caption: "Six blocks per node — and the radio at the bottom dominates every energy conversation above it.",
              layers: [
                { label: "Application + sensing services", note: "queries, task and data management" },
                { label: "OS runtime (TinyOS / Contiki)", note: "event-driven components or protothreads" },
                { label: "MCU + device drivers", note: "SPI to radio, ADC to sensors" },
                { label: "Radio, sensors, power subsystems", note: "CC2420, transducers + ADC, cells and regulation" },
                { label: "Optional: location finding, mobilizer", note: "GPS/antenna arrays; mobility is rare" },
              ],
            },
            bullets: [
              "Node blocks: sensing + ADC, processing (MCU/RAM/flash), radio, power, optional location finding and mobilizer.",
              "Mica2: Atmega128, 4 KB RAM, CC1000 at 38.4 kbps; MicaZ: same MCU plus CC2420 at 250 kbps.",
              "TelosB: MSP430, 10 KB RAM, ~5 µA sleep — the sleep-optimised reference design.",
              "Imote2: 416 MHz XScale and 32 MB memory for DSP-heavy sensing.",
              "TinyOS/nesC: event-driven components, kilobyte OS footprint, no blocking — RAM arithmetic forces static design.",
              "Contiki: protothreads and 6LoWPAN; the standards-compliant alternative when IP matters.",
            ],
            callout: {
              type: "warning",
              title: "RAM is the scarce resource, not flash",
              body: "Flash holds code cheaply; RAM holds runtime state and cannot grow. On a 4-10 KB mote, the OS and drivers already consume kilobytes, so routing tables, crypto state and buffers share what remains. Every per-node-state decision in Units II-V is bounded by this number — say 'neighbour-scale state only' and you have justified half the design space.",
            },
            examQuestions: [
              {
                q: "Draw and explain the architecture of a wireless sensor node, and compare the Mica2, MicaZ, TelosB and Imote2 platforms with respect to MCU, memory and radio.",
                marks: 14,
                outline: [
                  "Blocks: sensing transducers + ADC; MCU with RAM/flash; radio; power; optional location finding and mobilizer",
                  "Sensing subsystem: conditioning + ADC, on-demand sampling",
                  "Processing: 8-16 bit MCUs, 4-10 KB RAM, sleep ladders",
                  "Communication: CC1000 (38.4 kbps) to CC2420 (802.15.4, 250 kbps)",
                  "Platform table: Mica2/MicaZ (Atmega128, 4 KB), TelosB (MSP430, 10 KB, ~5 µA sleep), Imote2 (XScale 416 MHz, 32 MB)",
                  "Radio dominates awake energy — the reason duty cycling rules the design",
                  "RAM is the binding constraint: neighbour-scale state only",
                ],
              },
              {
                q: "Explain why operating systems for sensor motes are event-driven rather than thread-based, using the RAM and energy numbers of a platform such as TelosB.",
                marks: 7,
                outline: [
                  "10 KB RAM: thread stacks and heaps do not fit beside application state",
                  "Event-driven components run to completion; no stacks parked per thread",
                  "Static allocation makes worst-case memory predictable",
                  "Energy: threads block on events, keeping MCU awake; events let the MCU enter LPM",
                  "TinyOS/nesC footprint is kilobytes; Contiki protothreads give C-like flow at the same cost",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Wireless sensor network standards",
            body: [
              "IEEE 802.15.4 is the substrate: it defines only the physical and MAC layers. The PHY at 2.4 GHz delivers 250 kbps over sixteen DSSS channels with O-QPSK; at 868/915 MHz it delivers 20/40 kbps over fewer channels. The MAC offers slotted and unslotted CSMA/CA, optional superframes with a contention-access period and up to seven guaranteed time slots, and a device model of full-function devices (FFDs) that can coordinate and route and reduced-function devices (RFDs) that only talk to a coordinator. The standard deliberately stops there — no routing, no application model — leaving upper layers to whoever builds on top.",
              "ZigBee is the first builder: it adds the network layer (mesh and tree routing with an AODV-flavoured algorithm and distributed address assignment) and an application layer (profiles, endpoints, clusters, the ZigBee Device Object) plus the security architecture of Unit V with its trust center. 6LoWPAN, from the IETF, takes the other road: it presses compressed IPv6 headers into 802.15.4 frames with fragmentation and adapted neighbour discovery, making sensor nodes first-class internet citizens — the foundation Thread and modern IoT stacks build on. WirelessHART and ISA100.11a industrialize the same radio with TDMA/TSCH scheduling for deterministic plant networks, while Bluetooth Low Energy offers a connection-oriented, star-oriented alternative.",
              "The standard-vs-ecosystem distinction is the exam's favourite trap, so state it crisply: IEEE 802.15.4 is not ZigBee. 802.15.4 is two layers — PHY and MAC; ZigBee is a stack built on top of them — network, application, security. Saying 'ZigBee channels' or '802.15.4 mesh routing' inverts the relationship and loses the marks. The same discipline applies to 6LoWPAN: it is an adaptation layer over 802.15.4, not a radio of its own. Draw the stack — PHY, MAC from the IEEE; NWK, APS, profiles from ZigBee; or the 6LoWPAN adaptation inserted between MAC and IP — and the relationships become impossible to confuse.",
              "The worked element of this section is the superframe arithmetic. A superframe's duration is 960 microseconds times 2 to the superframe order (0-14), so at SO = 3 the active period is 960 µs × 8 ≈ 7.68 ms; the beacon interval at beacon order BO = 4 is 960 µs × 16 ≈ 15.36 ms, giving a duty cycle of 50%. coordinators divide the active period into sixteen slots, lend up to seven as GTSs to low-latency devices, and let the rest run slotted CSMA/CA. Those few numbers — 16 slots, 7 GTSs, the 2^SO scaling — are the entire quantitative content of the standard, and they make Unit II's hybrid-MAC discussion concrete.",
            ],
            keyTerms: [
              { term: "IEEE 802.15.4", definition: "The PHY + MAC standard: 250 kbps at 2.4 GHz, CSMA/CA, superframes with GTSs, FFD/RFD device model." },
              { term: "FFD / RFD", definition: "Full-function devices coordinate and route; reduced-function devices only talk to a coordinator." },
              { term: "ZigBee", definition: "Network + application + security stack over 802.15.4: mesh/tree routing, profiles, trust center." },
              { term: "6LoWPAN", definition: "IETF adaptation layer carrying compressed IPv6 over 802.15.4 frames; the base of Thread-class stacks." },
              { term: "GTS (guaranteed time slot)", definition: "A reserved superframe slot for low-latency, contention-free transmission — up to seven per superframe." },
            ],
            table: {
              caption: "The standards map — who defines what.",
              headers: ["Standard", "Layers defined", "Topology", "Target"],
              rows: [
                ["IEEE 802.15.4", "PHY + MAC", "star / peer-to-peer", "low-rate WPAN substrate"],
                ["ZigBee", "NWK + APS + security over 802.15.4", "mesh / tree / star", "home, building, smart energy"],
                ["6LoWPAN (IETF)", "IPv6 adaptation over 802.15.4", "mesh", "IP-native IoT, Thread lineage"],
                ["WirelessHART / ISA100.11a", "industrial stack on 802.15.4 PHY", "TDMA/TSCH mesh", "deterministic process automation"],
                ["Bluetooth Low Energy", "own PHY/MAC + GATT", "star connections", "personal area, phone-adjacent"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The standards stack, bottom to top",
              caption: "The IEEE defines the bottom two layers; the ecosystems compete for the top two.",
              stages: [
                { label: "802.15.4 PHY", note: "2.4 GHz O-QPSK DSSS, 250 kbps" },
                { label: "802.15.4 MAC", note: "CSMA/CA, superframes, GTSs" },
                { label: "ZigBee NWK or 6LoWPAN", note: "mesh routing / compressed IPv6" },
                { label: "Application layer", note: "ZigBee profiles, or CoAP over IP" },
              ],
            },
            bullets: [
              "IEEE 802.15.4 = PHY + MAC only: 250 kbps, 16 channels, CSMA/CA, FFD/RFD model.",
              "ZigBee adds NWK (mesh/tree routing), APS, profiles and the trust-center security of Unit V.",
              "6LoWPAN compresses IPv6 into 802.15.4 frames — the IP path into sensor networking.",
              "WirelessHART/ISA100.11a add TDMA/TSCH determinism for industrial plants.",
              "Superframe arithmetic: duration = 960 µs × 2^SO; 16 slots; up to 7 GTSs; BO sets the beacon interval.",
              "Never say 'ZigBee channels' or '802.15.4 mesh routing' — the layer ownership is the exam trap.",
            ],
            callout: {
              type: "exam",
              title: "802.15.4 is not ZigBee",
              body: "The one-line answer that earns the definition mark: IEEE 802.15.4 defines the physical and MAC layers; ZigBee defines the network, application and security layers built above them. Draw the four-layer stack, label who owns what, and the whole standards question collapses into one correct picture.",
            },
            examQuestions: [
              {
                q: "Explain the IEEE 802.15.4 standard — PHY parameters, MAC features, superframe structure and device types — and distinguish it from ZigBee and 6LoWPAN, stating which layers each defines.",
                marks: 14,
                outline: [
                  "PHY: 2.4 GHz DSSS/O-QPSK 250 kbps, 16 channels; 868/915 MHz at 20/40 kbps",
                  "MAC: slotted/unslotted CSMA/CA; superframe with CAP + up to 7 GTSs",
                  "Superframe arithmetic: 960 µs × 2^SO; BO sets beacon interval",
                  "Devices: FFD coordinates/routes; RFD talks only to a coordinator",
                  "ZigBee: NWK + APS + security over 802.15.4 — mesh/tree routing, trust center",
                  "6LoWPAN: IPv6 adaptation over the same MAC — header compression, fragmentation",
                  "The trap: 802.15.4 owns two layers; ZigBee and 6LoWPAN own the upper stack",
                ],
              },
              {
                q: "Explain the 802.15.4 superframe structure with its guaranteed time slots, and compute the duty cycle for a beacon order of 4 with superframe order 2.",
                marks: 7,
                outline: [
                  "Superframe = active period + optional inactive period, delimited by beacons",
                  "Active period = 960 µs × 2^SO; SO = 2 gives 3.84 ms in 16 slots",
                  "Beacon interval = 960 µs × 2^BO; BO = 4 gives 15.36 ms",
                  "Duty cycle = 3.84/15.36 = 25%; remaining time the radio may sleep",
                  "GTSs: up to 7 of the 16 slots reserved for low-latency traffic; CAP runs slotted CSMA/CA",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Network architectures, classifications and the protocol stack",
            body: [
              "Architectures describe how nodes organize once deployed. The flat architecture treats all nodes as peers: every mote senses and routes, and data travels multi-hop toward the sink — simple, uniform, but every node pays the routing tax. The hierarchical (clustered) architecture elects cluster heads that gather, fuse and forward their members' data, containing the routing burden to a small rotating elite — LEACH is the archetype and Unit II's centrepiece. The location-based architecture uses coordinates to route and query geographically. Tiered heterogeneous architectures mix weak motes with strong gateway nodes that carry storage and long-range backhaul. The sink may itself be mobile, sweeping the field to balance the energy-hole problem of Unit IV.",
              "Classifications slice the same networks along several axes, and the syllabus expects the full set. Homogeneous versus heterogeneous: identical motes or a mix of capabilities. Static versus mobile: fixed nodes, moving nodes, moving sinks, or all three. Single-hop versus multi-hop: every node in sink range, or paths of relays. Deterministic versus random deployment: engineered placement or dropped from an aircraft. Proactive versus reactive: continuous monitoring versus event-triggered reporting. Cooperative versus non-cooperative: whether nodes collaborate on in-network processing. QoS-aware versus best-effort closes the list. Each axis is one exam line; together they are the vocabulary every later unit uses without re-explaining.",
              "The protocol stack is the classic full-mark question, and the canonical version has five layers plus three management planes. The physical layer chooses frequency, modulation and transmit power. The data link layer frames, MACs the medium and applies error control (FEC and ARQ). The network layer routes energy-aware paths and hosts in-network aggregation. The transport layer provides reliability and flow control, rethought because end-to-end TCP does not fit lossy multi-hop radio paths. The application layer exposes queries, sensor management and time/location services. Cutting across all five run the power management plane (sleep schedules and power modes), the mobility management plane (detecting and adapting to moved nodes and sinks) and the task management plane (balancing sensing tasks across the field).",
              "The connection to make in the answer is that the stack is not the internet's stack. Every layer is redefined by energy: the MAC duty-cycles, the routing metric is residual energy rather than hop count, the transport is per-hop rather than end-to-end, and the application is a query interpreter over the physical world. The three management planes have no internet counterpart at all — they exist because the nodes themselves are the resources being managed. Draw the five layers, annotate each with its WSN-specific duty, add the three cross-cutting planes, and the question is answered at full depth.",
            ],
            keyTerms: [
              { term: "Flat architecture", definition: "All nodes are peers and route multi-hop toward the sink; uniform burden, simple design." },
              { term: "Hierarchical (clustered) architecture", definition: "Rotating cluster heads gather and fuse member data before forwarding — LEACH's model." },
              { term: "Tiered heterogeneous architecture", definition: "Weak motes plus powerful gateway nodes carrying storage and backhaul." },
              { term: "Power management plane", definition: "Cross-layer function managing sleep schedules and power modes of every node." },
              { term: "Task management plane", definition: "Cross-layer function scheduling sensing tasks across the field for coverage and balance." },
            ],
            table: {
              caption: "Architecture -> structure -> where you meet it later.",
              headers: ["Architecture", "Structure", "Exam connection"],
              rows: [
                ["Flat", "all nodes route as peers toward the sink", "Directed Diffusion, SPEED (Unit II)"],
                ["Hierarchical / clustered", "rotating cluster heads fuse member data", "LEACH, PEGASIS, TEEN (Unit II)"],
                ["Location-based", "coordinates drive routing and queries", "GEAR, GAF, Unit III localization"],
                ["Tiered heterogeneous", "motes + gateways with backhaul", "heterogeneity-based routing (Unit II)"],
                ["Mobile sink", "sink sweeps to balance depletion", "energy-hole relief (Unit IV)"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The WSN protocol stack with its management planes",
              caption: "Five layers, every one redefined by energy, plus three planes the internet never needed.",
              layers: [
                { label: "Application layer", note: "query interfaces, sensor management, time + location services" },
                { label: "Transport layer", note: "reliability and flow — per-hop, not end-to-end TCP" },
                { label: "Network layer", note: "energy-aware routing, in-network aggregation" },
                { label: "Data link layer", note: "framing, duty-cycled MAC, FEC/ARQ error control" },
                { label: "Physical layer", note: "frequency, modulation, transmit power" },
              ],
            },
            bullets: [
              "Architectures: flat (peer routing), hierarchical (cluster heads fuse), location-based, tiered heterogeneous, mobile-sink.",
              "Classifications: homogeneous/heterogeneous, static/mobile, single/multi-hop, deterministic/random, proactive/reactive, cooperative, QoS-aware.",
              "Stack layers: physical (power + modulation), data link (framing + duty-cycled MAC + error control), network (energy-aware routing + aggregation), transport (per-hop reliability), application (queries).",
              "Three management planes cut across all layers: power, mobility and task management.",
              "The stack differs from the internet's: routing metrics are energy, transport is per-hop, the application queries the physical world.",
              "The layered diagram with plane annotations is the guaranteed full-mark artefact of Unit I.",
            ],
            callout: {
              type: "exam",
              title: "The three planes are the marks",
              body: "Most candidates draw five layers and stop. The distinguishing content is the three cross-cutting management planes — power, mobility, task — and the annotation of what each layer does differently from the internet stack. Draw five layers, add three planes, annotate both: that is the full 14-mark skeleton.",
            },
            examQuestions: [
              {
                q: "Draw and explain the protocol stack for wireless sensor networks, including the physical, data link, network, transport and application layers, and describe the three cross-cutting management planes.",
                marks: 14,
                outline: [
                  "Physical: frequency selection, modulation, transmit power",
                  "Data link: framing, duty-cycled MAC, FEC/ARQ error control",
                  "Network: energy-aware routing metrics, in-network data aggregation",
                  "Transport: reliability/flow rethought for lossy multi-hop paths",
                  "Application: query interfaces, sensor management, time/location services",
                  "Power management plane: sleep schedules and power modes across all layers",
                  "Mobility + task management planes: moved nodes/sinks; balanced sensing tasks",
                ],
              },
              {
                q: "Differentiate flat, hierarchical and location-based WSN architectures, giving one protocol and one limitation for each.",
                marks: 7,
                outline: [
                  "Flat: all peers route multi-hop; Directed Diffusion; every node pays the routing tax",
                  "Hierarchical: cluster heads fuse and forward; LEACH; head rotation and cluster maintenance overhead",
                  "Location-based: coordinates drive forwarding; GEAR; depends on localization accuracy",
                  "Energy consequences differ: flat drains relays, hierarchical balances, location-based shortens paths",
                  "Choice follows application coverage and mobility requirements",
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
      title: "MAC and Routing Protocols",
      summary:
        "Unit II is the protocol heart: why classical MAC wastes battery and how contention-based, contention-free and hybrid designs repair it — S-MAC, T-MAC, B-MAC, TRAMA, Z-MAC and the 802.15.4 superframe — then the routing-and-dissemination taxonomy with its seven families, from LEACH's clusters and GEAR's geography to Directed Diffusion's gradients, SPEED's deadlines and heterogeneous tiering.",
      chapter: {
        number: "02",
        title: "Sharing the Air, Finding the Path",
        intro:
          "Chapter 2 covers fundamental MAC protocols and MAC design for WSNs, the contention-based family (S-MAC, T-MAC, B-MAC), the contention-free family (TDMA, TRAMA), the hybrid family (Z-MAC, IEEE 802.15.4), and the routing-and-dissemination fundamentals, challenges, taxonomy and seven protocol families.",
        inOneBreath:
          "Idle listening, collisions, overhearing and control overhead are the four MAC energy sins, and duty cycling attacks all four. S-MAC sleeps on a fixed 10% schedule, T-MAC times out early under light load, B-MAC samples the channel and pays in preamble, TRAMA schedules by two-hop traffic knowledge, and Z-MAC runs CSMA when quiet and TDMA when busy. Routing splits into seven families — location-aided, layered and in-network, data-centric, multipath, mobility, QoS and heterogeneity — each answering 'what should a path optimize?'. LEACH rotates a 5% cluster-head elite by threshold formula, Directed Diffusion reinforces the best gradient, and SPEED converts a deadline into a required delivery velocity.",
        sections: [
          {
            number: "2.1",
            title: "Fundamental MAC protocols and the WSN design problem",
            body: [
              "The medium access control layer decides who transmits when on a shared channel, and the classical answers define the vocabulary. ALOHA transmits on arrival (slotted ALOHA aligns transmissions to slots, roughly doubling throughput); CSMA senses before transmitting and defers to a busy channel; CSMA/CA adds random backoff and, optionally, RTS/CTS handshakes to dodge hidden terminals; TDMA divides time into slots; FDMA and CDMA divide frequency and code space. All of them assume the radio may stay on continuously — which is precisely the assumption a battery-powered mote cannot afford, so this section is the setup for everything that follows.",
              "The WSN design problem begins with four named energy wastes. Idle listening is the worst: a receiver awake with no traffic burns the full receive power — about 56 mW on a CC2420 — for nothing, and in sparse-traffic monitoring it dominates the energy budget. Collisions force retransmissions of frames that both sides already spent energy on. Overhearing means receiving packets addressed to other nodes and discarding them. Control overhead spends airtime and energy on headers, handshakes and synchronization that carry no data. Any WSN MAC is judged by which of the four it attacks and at what cost in latency, throughput and complexity.",
              "The worked arithmetic makes the stakes explicit. A mote listening continuously spends 56 mW receiving plus milliwatts of MCU, so a 26 kJ battery survives about five days — regardless of whether a single packet flows. Duty-cycling the radio to 1% replaces that with roughly 0.6 mW of awake-time cost plus microamp sleep current, stretching the same battery past a year. That factor of roughly 100 is the entire reason this unit exists: the MAC, not the application, decides whether a deployment lives weeks or years, and every protocol that follows is a different answer to 'when may the radio sleep?'",
              "Frame the exam answer around the loop the MAC runs forever: listen or carrier-sense, transmit, receive the acknowledgement, back off on collision, sleep. Classical MACs optimize this loop for throughput and latency; WSN MACs optimize it for energy per delivered bit and network lifetime, accepting sleep-induced latency. The table of the four wastes and their attacking mechanisms is the deliverable — and the explicit claim that idle listening, not transmission, is the dominant waste is the point most answers get wrong.",
            ],
            keyTerms: [
              { term: "MAC (medium access control)", definition: "The layer deciding when nodes transmit on a shared wireless channel." },
              { term: "Idle listening", definition: "Receiving with no traffic — the dominant energy waste in sparse WSN traffic." },
              { term: "Overhearing", definition: "Receiving frames addressed to other nodes and discarding them." },
              { term: "Control overhead", definition: "Energy and airtime spent on headers, handshakes and synchronization rather than data." },
              { term: "CSMA/CA", definition: "Carrier sense with collision avoidance by random backoff and optional RTS/CTS." },
            ],
            table: {
              caption: "The four energy wastes and the mechanisms that attack them.",
              headers: ["Waste", "Cause", "Attacking mechanism"],
              rows: [
                ["Idle listening", "radio awake with no traffic (56 mW)", "duty cycling: scheduled sleep, preamble sampling"],
                ["Collisions", "overlapping transmissions -> retransmission", "CSMA/CA backoff, TDMA slots, RTS/CTS"],
                ["Overhearing", "receiving others' frames", "sleep during RTS/CTS duration (S-MAC)"],
                ["Control overhead", "SYNC/RTS/CTS/ACK airtime", "message passing (burst frames), adaptive timeouts"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The MAC loop on a battery",
              caption: "Most states are expensive; sleep is the only cheap one — the loop's job is to maximize it.",
              steps: [
                { label: "Listen / idle", note: "RX burns ~56 mW even silent" },
                { label: "Carrier sense", note: "CCA before transmit" },
                { label: "Transmit", note: "data or ACK" },
                { label: "Collision -> backoff", note: "retransmit at random delay" },
                { label: "Sleep", note: "µA-scale — the only free state" },
              ],
            },
            bullets: [
              "Classical MACs: ALOHA, CSMA, CSMA/CA, TDMA, FDMA, CDMA — all assume an always-on radio.",
              "Four energy wastes: idle listening, collisions, overhearing, control overhead.",
              "Idle listening dominates in sparse traffic — receiving costs ~56 mW whether or not data arrives.",
              "Continuous receive on a 26 kJ battery is about five days of life; 1% duty cycle stretches past a year.",
              "WSN MAC metric: energy per delivered bit and lifetime, not throughput first.",
              "Judging a WSN MAC = naming which of the four wastes it attacks and the latency it pays.",
            ],
            callout: {
              type: "exam",
              title: "It is idle listening, not transmission",
              body: "The counterintuitive, mark-bearing claim: in monitoring-style WSN traffic, idle listening dominates the energy budget — the radio pays full receive power for silence. Answers that open with 'transmission costs the most energy' miss the premise of S-MAC, T-MAC and B-MAC alike.",
            },
            examQuestions: [
              {
                q: "Explain why classical MAC protocols are unsuitable for wireless sensor networks, describing the four sources of energy waste and the arithmetic that makes idle listening dominant.",
                marks: 14,
                outline: [
                  "Classical MACs (ALOHA, CSMA/CA, TDMA) assume an always-on radio",
                  "Waste 1: idle listening — 56 mW RX with no traffic; dominates sparse monitoring loads",
                  "Waste 2: collisions — retransmissions double-spend energy",
                  "Waste 3: overhearing — receiving frames meant for other nodes",
                  "Waste 4: control overhead — SYNC/RTS/CTS/ACK airtime",
                  "Arithmetic: 26 kJ at 56 mW ≈ 5 days of continuous receive; 1% duty cycle passes a year",
                  "Consequence: WSN MACs optimize energy per delivered bit, accepting sleep latency",
                ],
              },
              {
                q: "Compare slotted ALOHA, CSMA and TDMA as fundamental MAC approaches, and state which energy waste each leaves unaddressed in a sensor network.",
                marks: 7,
                outline: [
                  "Slotted ALOHA: transmit in slots, no sensing; collisions waste energy",
                  "CSMA: sense-then-send; still keeps RX on — idle listening unaddressed",
                  "CSMA/CA: backoff plus RTS/CTS; control overhead grows",
                  "TDMA: collision-free slots but requires sync and wastes idle slots",
                  "None attacks idle listening — that is the WSN-specific gap",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "MAC design for wireless sensor networks",
            body: [
              "Designing a MAC for motes means accepting a different objective hierarchy: energy first, then scalability, adaptability and application-specific behaviour, with throughput, latency and fairness demoted to secondary roles. The primary lever is the duty cycle — the fraction of time the radio is awake. Everything else follows from the decision of how nodes agree on when to sleep: scheduled schemes exchange explicit sleep schedules and share a common cycle; on-demand schemes let receivers sample the channel periodically while senders hold it with preambles; rendezvous schemes fix wake-up instants a priori as TDMA does.",
              "Each design choice has a measurable price. Scheduled sleeping adds sleep latency: a packet arriving while the receiver sleeps waits for the next listen window, and the delay accumulates hop by hop — a 10% duty-cycle MAC can multiply multi-hop latency by roughly the inverse of the duty cycle under light load. Preamble sampling costs sender-side energy: a preamble as long as the receiver's check interval is transmitted for every packet, so sparse, tiny packets pay a heavy per-byte tax. Schedule-based schemes need clock synchronization (Unit I's drift arithmetic: 30 ppm is seconds per day) and slot allocation that must scale. Collision avoidance itself costs: RTS/CTS adds control overhead that only pays for long frames under contention.",
              "The evaluation metrics deserve explicit listing because exam questions ask for them: energy per delivered bit, network lifetime, latency distribution, throughput, fairness, and adaptability to changing traffic and topology. Two derived metrics capture the tradeoff discipline: the energy-delay product, which prices every latency reduction in joules, and the duty-cycle-versus-traffic curve, which shows a good MAC sleeping deeper as traffic thins. A design that holds a fixed duty cycle regardless of load is leaving both energy and latency on the table — which is exactly the gap T-MAC and the adaptive schemes attack.",
              "The design flow to present: choose the sleep-agreement scheme (scheduled, on-demand, rendezvous); set the cycle length and listen ratio from the application's latency tolerance; add collision avoidance proportionate to expected contention; add overhearing avoidance and message bundling to shave the remaining wastes; finally, decide adaptivity — whether the cycle shortens or lengthens with observed traffic. Every named protocol of the next three sections is a point in this design space, and locating each protocol by its choices is the comparative understanding the examiner rewards.",
            ],
            keyTerms: [
              { term: "Duty cycle", definition: "Fraction of time the radio is awake; the master energy lever of MAC design." },
              { term: "Scheduled sleeping", definition: "Neighbours exchange and share explicit sleep schedules (S-MAC style)." },
              { term: "Preamble sampling", definition: "Receivers sample the channel periodically; senders hold it with a long preamble (B-MAC style)." },
              { term: "Energy-delay product", definition: "Metric pricing every latency gain in energy; captures the MAC's core tradeoff." },
              { term: "Adaptivity", definition: "Adjusting the duty cycle to observed traffic instead of fixing it." },
            ],
            table: {
              caption: "Design decision -> mechanism -> the price it pays.",
              headers: ["Goal", "Mechanism", "Cost"],
              rows: [
                ["Cut idle listening", "scheduled sleep / channel sampling", "sleep latency; sync or preamble energy"],
                ["Cut collisions", "CSMA backoff, RTS/CTS, TDMA slots", "control overhead; slot allocation; sync"],
                ["Cut overhearing", "sleep during others' RTS/CTS; scheduled sleep", "needs schedule exchange"],
                ["Cut control overhead", "message passing, adaptive timeouts", "burst error windows; complexity"],
                ["Follow the traffic", "adaptive duty cycle (T-MAC)", "early-sleep races; tuning parameters"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Designing a duty-cycled MAC",
              caption: "Five decisions in order — every named protocol is one point in this space.",
              steps: [
                { label: "Choose sleep agreement", note: "scheduled / on-demand / rendezvous" },
                { label: "Set cycle and listen ratio", note: "from application latency tolerance" },
                { label: "Add collision avoidance", note: "proportionate to contention" },
                { label: "Shave overhearing + overhead", note: "duration sleep, message passing" },
                { label: "Add adaptivity", note: "duty cycle follows traffic" },
              ],
            },
            bullets: [
              "Objective hierarchy: energy first; throughput, latency and fairness demoted.",
              "Three sleep-agreement families: scheduled, on-demand (preamble sampling), rendezvous (TDMA).",
              "Sleep latency: a packet can wait one full cycle per hop — roughly 1/duty-cycle multiplier under light load.",
              "Preamble sampling taxes the sender; schedules tax synchronization and slot allocation.",
              "Metrics: energy per bit, lifetime, latency, throughput, fairness, adaptability; energy-delay product ties the first two.",
              "A fixed duty cycle under varying load wastes energy or latency — adaptivity is the improvement T-MAC sells.",
            ],
            callout: {
              type: "tip",
              title: "Locate every protocol in the design space",
              body: "When asked to compare MACs, first state where each sits: S-MAC = scheduled, fixed duty; T-MAC = scheduled, adaptive timeout; B-MAC = on-demand preamble sampling; TRAMA = rendezvous by two-hop schedules; Z-MAC = schedule plus contention fallback. The comparison then writes itself from the design axes, not from memory.",
            },
            examQuestions: [
              {
                q: "Discuss the design considerations for MAC protocols in wireless sensor networks — the objective hierarchy, the duty-cycle decision, the sleep-agreement schemes and the evaluation metrics — and explain the energy-latency tradeoff quantitatively.",
                marks: 14,
                outline: [
                  "Objective hierarchy: energy first; latency/throughput secondary",
                  "Duty cycle is the master lever; the sleep-agreement choice follows",
                  "Scheduled schemes: shared cycles, sleep latency ~ 1/duty per hop",
                  "On-demand schemes: preamble sampling taxes the sender",
                  "Rendezvous schemes: TDMA needs sync (30 ppm drift arithmetic)",
                  "Metrics: energy per bit, lifetime, latency, fairness, adaptability; energy-delay product",
                  "Adaptivity: fixed cycles waste under varying load — T-MAC's motivation",
                ],
              },
              {
                q: "Why does RTS/CTS help in some sensor MAC designs and hurt in others?",
                marks: 7,
                outline: [
                  "Helps: prevents hidden-terminal collisions; duration field lets others sleep (overhearing avoidance)",
                  "Pays for itself on long frames under contention",
                  "Hurts: control overhead dominates for short, infrequent monitoring packets",
                  "At low traffic the handshake energy exceeds the collision energy it prevents",
                  "Hence S-MAC keeps RTS/CTS for unicast while B-MAC omits it",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "Contention-based protocols: S-MAC",
            body: [
              "S-MAC (Sensor-MAC, from Ye, Heinzelman and Estrin) is the founding contention-based WSN MAC, and its idea is periodic listen-and-sleep: the whole neighbourhood shares a sleep schedule, staying awake a fixed listen period of each cycle and sleeping the rest. The default frame gives roughly a 10% duty cycle — about 115 ms of listening per 1.15 s frame. Neighbours exchange schedules with small SYNC packets, and border nodes that hear two schedules keep both, forming virtual clusters of synchronized nodes. The schedule needs no global coordination: clusters emerge wherever nodes happen to share.",
              "S-MAC attacks all four wastes with named mechanisms. Idle listening falls by the duty-cycle factor — roughly tenfold at the default setting. Overhearing avoidance puts neighbours to sleep for the duration announced in RTS/CTS exchanges, so only the intended receiver stays awake through a data frame. Message passing lets a sender win the medium once and burst a multi-frame message with a single handshake, cutting per-packet control overhead. Collisions are handled by CSMA with RTS/CTS for unicast frames. The original evaluation reported roughly two-to-five-fold energy reductions against IEEE 802.11 under sensor traffic, at the price of the sleep latency the duty cycle implies.",
              "The worked arithmetic is the section's asset. At a 10% duty cycle, a 56 mW receiver averages 5.6 mW plus microamp-scale sleep draw; a 26 kJ battery then lasts on the order of 50 days instead of 5. Push the same design to 1% and the average falls below a milliwatt, crossing the one-year line. The latency bill is symmetrical: a packet arriving just after a listen window misses it, waits ~1 s for the next one, and pays that again at every hop — which is why S-MAC suits periodic monitoring far better than event-driven alarm traffic.",
              "For the exam, present S-MAC as three mechanisms plus two costs: schedule exchange and virtual clusters, overhearing avoidance via RTS/CTS duration, message passing for bursts; costs are fixed duty cycles that waste sleep under light load (the gap T-MAC fills) and per-hop sleep latency. The numbers to quote: ~10% duty cycle, two-to-five-fold savings versus 802.11, five-days-to-fifty-days battery arithmetic. If the question says 'explain S-MAC with its advantages and disadvantages', this is the complete skeleton.",
            ],
            keyTerms: [
              { term: "S-MAC", definition: "Contention-based WSN MAC: shared listen/sleep schedules, overhearing avoidance, message passing." },
              { term: "Virtual cluster", definition: "A group of nodes sharing one sleep schedule, formed by SYNC exchange without global coordination." },
              { term: "SYNC packet", definition: "The small frame that broadcasts a node's schedule so neighbours can synchronize." },
              { term: "Overhearing avoidance", definition: "Non-participating neighbours sleep for the duration field announced in RTS/CTS." },
              { term: "Message passing", definition: "Bursting a multi-frame message under one RTS/CTS handshake to amortize control overhead." },
            ],
            diagram: {
              kind: "compare",
              title: "Always-on CSMA vs S-MAC's scheduled sleeping",
              caption: "Same channel, same traffic — the schedule is the only difference, and it is a factor of ten.",
              left: {
                heading: "Always-on CSMA (802.11-style)",
                items: [
                  "radio awake 100% of the time",
                  "instant readiness, ~56 mW idle burn",
                  "latency-optimal, energy-terrible",
                  "a 26 kJ battery lasts about five days",
                ],
              },
              right: {
                heading: "S-MAC scheduled sleeping",
                items: [
                  "~10% duty cycle: 115 ms listen per ~1.15 s frame",
                  "virtual clusters formed from SYNC schedules",
                  "RTS/CTS duration puts overhearers to sleep",
                  "battery life near 50 days at the same traffic",
                ],
              },
            },
            bullets: [
              "Periodic listen/sleep with shared schedules; default ~10% duty cycle (115 ms per ~1.15 s).",
              "SYNC packets form virtual clusters; border nodes keep two schedules.",
              "Overhearing avoidance: neighbours sleep for the RTS/CTS-announced duration.",
              "Message passing: one handshake, multi-frame burst — control overhead amortized.",
              "Reported two-to-five-fold energy savings versus IEEE 802.11 on sensor traffic.",
              "Costs: fixed duty cycle wastes sleep under light load; per-hop sleep latency (~1 s per missed window).",
            ],
            callout: {
              type: "exam",
              title: "The three mechanisms and two costs",
              body: "Structure any S-MAC answer as three mechanisms (schedule exchange with virtual clusters, overhearing avoidance, message passing) and two costs (fixed duty cycle under light load, per-hop sleep latency). Then attach the numbers: ~10% duty cycle, five-days-to-fifty-days battery arithmetic. That structure is the full 7-mark skeleton.",
            },
            codeExample: {
              language: "python",
              caption: "smac_budget.py — the duty-cycle arithmetic behind S-MAC",
              code: `P_rx, P_tx, P_sleep = 0.056, 0.052, 0.00001   # watts
battery = 26000                                # joules: two AA cells

def life(duty, tx_share=0.2):
    awake = P_rx * (1 - tx_share) + P_tx * tx_share
    avg = awake * duty + P_sleep * (1 - duty)
    return battery / avg / 86400               # days

for duty in [1.0, 0.1, 0.01]:
    print(f"duty {duty:4.0%} -> {life(duty):6.1f} days")
# 100% -> ~5 days, 10% (S-MAC) -> ~48 days, 1% -> over a year`,
            },
            examQuestions: [
              {
                q: "Explain the S-MAC protocol: schedule exchange and virtual clusters, overhearing avoidance, and message passing. State its energy savings, its latency cost, and the duty-cycle arithmetic that produces both.",
                marks: 14,
                outline: [
                  "Periodic listen/sleep with shared schedules; ~10% duty cycle (115 ms / 1.15 s)",
                  "SYNC packets form virtual clusters; border nodes hold two schedules",
                  "Overhearing avoidance: sleep for the RTS/CTS-announced duration",
                  "Message passing: single handshake bursts a multi-frame message",
                  "Two-to-five-fold savings versus IEEE 802.11 on sensor traffic",
                  "Latency: ~1 s wait per missed listen window, per hop",
                  "Arithmetic: 26 kJ battery — five days at full receive, ~50 days at 10% duty",
                ],
              },
              {
                q: "Why does S-MAC form virtual clusters rather than a single network-wide schedule, and what problem arises at cluster borders?",
                marks: 7,
                outline: [
                  "Global synchronization would need network-wide coordination — costly at scale",
                  "Local SYNC exchange lets schedules emerge where nodes meet",
                  "Border nodes hearing two schedules adopt both, bridging the clusters",
                  "Cost: border nodes follow more schedules — less sleep, more energy",
                  "Traffic crossing clusters still flows; the bridge keeps the graph connected",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Contention-based protocols: T-MAC, B-MAC and adaptive duty cycling",
            body: [
              "T-MAC (Timeout-MAC) keeps S-MAC's shared schedules but makes every listen window end early: a node that hears nothing for a timeout TA returns to sleep. TA must exceed the contention window plus radio turnaround so active exchanges are not cut short — about 15 ms in the original evaluation. Under bursty traffic the savings are large: nodes idle in a mostly-empty listen window leave almost immediately, and the protocol reported up to fivefold energy savings over S-MAC on variable loads. The known defect is the early-sleep problem — a node falls asleep just as a neighbour was about to address it — patched by the future-RTS trick: a short FRTS from an overhearing node keeps its next hop awake.",
              "B-MAC takes the opposite design path: no schedules at all. Its Low-Power Listening (LPL) has each receiver wake briefly and sample the channel (a clear-channel assessment) every check interval; a sender that wants to be heard transmits a preamble at least as long as that interval, so whichever instant the receiver samples, it detects carrier and stays awake for the data. Duty cycle is set purely by the check interval — a 100 ms check interval yields about a 1% duty cycle and demands ~100 ms preambles. B-MAC keeps a plain CSMA core, no SYNC traffic, no cluster maintenance; the price is sender-side preamble energy, which taxes small packets heavily and adds sender-side latency.",
              "WiseMAC refines LPL by learning: after each exchange, neighbours record each other's sampling instants and clock offsets, so future preambles need only cover the offset error, not the whole interval — preambles shrink as the schedule converges, cutting the sender tax that raw LPL pays. The adaptive-duty-cycle lesson generalizes: a fixed cycle is optimal for exactly one traffic level, so protocols either end windows early (T-MAC), shrink preambles by learning (WiseMAC), or adjust check intervals with load. The comparison table below is the exam's comparative skeleton — know which scheme pays in sender energy, receiver energy, synchronization or latency.",
              "Frame the answer as one sentence per protocol plus the shared lesson. T-MAC: scheduled sleeping with adaptive early timeout — attacks the light-load waste S-MAC leaves; carries the early-sleep race, patched by FRTS. B-MAC: preamble sampling without schedules — simplest deployment, sender-side tax; check interval sets the duty cycle directly. WiseMAC: LPL plus learned offsets — preambles shrink to the offset error. The mark-bearing insight: every scheme is a different allocation of the same energy between sender preamble, receiver sampling and schedule maintenance, and the traffic pattern decides which allocation wins.",
            ],
            keyTerms: [
              { term: "T-MAC", definition: "Scheduled sleeping with an adaptive timeout TA that ends listen windows early under light load." },
              { term: "TA (timeout)", definition: "T-MAC's inactivity threshold; must exceed contention window plus radio turnaround." },
              { term: "FRTS (future-RTS)", definition: "Short control frame that keeps a next-hop receiver awake, patching T-MAC's early-sleep race." },
              { term: "LPL (low-power listening)", definition: "B-MAC's scheme: receivers sample the channel periodically; senders preamble for the full check interval." },
              { term: "WiseMAC", definition: "LPL refined by learned neighbour sampling offsets, shrinking preambles to the offset error." },
            ],
            table: {
              caption: "The adaptive contention family at a glance.",
              headers: ["Protocol", "Duty-cycle mechanism", "Sync needed?", "Pays in"],
              rows: [
                ["S-MAC", "fixed shared schedule (~10%)", "yes — SYNC packets", "light-load waste; sleep latency"],
                ["T-MAC", "shared schedule + early timeout TA", "yes — SYNC packets", "early-sleep races (FRTS fix)"],
                ["B-MAC", "receiver channel sampling (LPL)", "no", "sender preamble energy"],
                ["WiseMAC", "LPL + learned sampling offsets", "implicit via learning", "offset drift; calibration traffic"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "B-MAC low-power listening, receiver's view",
              caption: "The receiver sleeps almost always; the preamble is the sender buying a guaranteed rendezvous.",
              stages: [
                { label: "Sleep with periodic checks", note: "CCA sample every T_check" },
                { label: "Preamble arrives", note: "sender transmits >= T_check of carrier" },
                { label: "CCA detects carrier", note: "receiver stays awake" },
                { label: "Data exchange", note: "CSMA data + ACK" },
                { label: "Sleep until next check", note: "duty cycle = check time / T_check" },
              ],
            },
            bullets: [
              "T-MAC: S-MAC's schedules plus an early timeout TA (~15 ms) — up to 5× savings on variable loads vs S-MAC.",
              "TA must exceed contention window + turnaround, or active exchanges get cut off.",
              "Early-sleep problem: a sleeping node misses a neighbour's imminent send — patched by FRTS.",
              "B-MAC: no schedules; receiver samples CCA every check interval; preamble >= interval buys the rendezvous.",
              "Check interval sets duty cycle directly: 100 ms checks ≈ 1% duty and ~100 ms preambles.",
              "WiseMAC learns neighbour offsets so preambles shrink to the offset error — the sender tax mostly vanishes.",
            ],
            callout: {
              type: "warning",
              title: "Preamble energy taxes small packets",
              body: "LPL's cost lands on the sender: a 20-byte sensing report pays a 100 ms preamble at B-MAC's 1% setting, so energy per byte explodes for tiny, frequent packets. LPL favours larger, rarer frames — or WiseMAC's learned offsets. State the traffic pattern before recommending the protocol.",
            },
            examQuestions: [
              {
                q: "Explain T-MAC and B-MAC as improvements over S-MAC, describing the timeout mechanism, the early-sleep problem and its fix, and the low-power listening scheme with its preamble tradeoff.",
                marks: 14,
                outline: [
                  "S-MAC leaves light-load waste: full listen windows mostly idle",
                  "T-MAC: early timeout TA (TA > contention window + turnaround, ~15 ms) ends windows early",
                  "Early-sleep problem: neighbour misses an imminent send; patched by FRTS",
                  "Up to 5× energy savings over S-MAC on variable loads",
                  "B-MAC: no schedules; receivers sample CCA every T_check",
                  "Sender preambles >= T_check guarantee detection; duty cycle = sampling fraction",
                  "Tradeoff: sender-side preamble energy vs zero synchronization — WiseMAC shrinks it via learned offsets",
                ],
              },
              {
                q: "A monitoring network reports one 20-byte packet per node every five minutes. Compare the energy profiles of S-MAC at 10% duty and B-MAC with 100 ms check intervals, and recommend one with justification.",
                marks: 7,
                outline: [
                  "S-MAC: each packet waits ~1 s per hop for the next listen window — latency dominated",
                  "S-MAC energy: 10% duty cycle wastes most listen windows empty",
                  "B-MAC: each send carries ~100 ms preamble — per-packet sender tax",
                  "Sparse tiny traffic: B-MAC's sender tax is affordable and its 1% duty beats 10% idle listening",
                  "Recommend B-MAC (or WiseMAC); S-MAC's fixed windows suit busier, latency-tolerant traffic",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Contention-free protocols: TDMA and TRAMA",
            body: [
              "Contention-free MACs replace 'sense and hope' with explicit scheduling: each node transmits in slots nobody else uses, so collisions vanish by construction and every node not holding a slot sleeps. Plain TDMA divides the frame into slots assigned to nodes — collision-free and latency-predictable, with energy saved by sleeping outside one's slot. Its costs are structural: slot allocation must scale with node count, idle slots waste frame time under bursty traffic, and every node needs clock synchronization tight enough that slots do not smear — Unit I's drift arithmetic (30 ppm ≈ 2.6 s/day) makes a synchronization service mandatory, not optional.",
              "TRAMA (Traffic-Adaptive Medium Access) is the syllabus's scheduled MAC with traffic awareness. It runs three components: a neighbour protocol discovering one- and two-hop neighbours, a schedule exchange protocol where each node announces which of its slots are used and which can be reused, and an adaptive election algorithm that, per slot, deterministically picks the winner among two-hop neighbours by hashing node identities with a random priority for that slot. Nodes with no traffic yield their slots, neighbours reuse them, and everyone not elected or receiving sleeps. The result: collision-free delivery with far less idle-slot waste than fixed TDMA, at the cost of 2-hop state and schedule exchange traffic.",
              "The worked numbers frame the choice. A 100-node TDMA ring with 10 ms slots has a 1 s frame: a node's worst-case access latency is the full frame, and 30 ppm clock drift over that frame is 30 microseconds — survivable inside a 100 µs guard band, but only with periodic resynchronization. Under light load, most of those 100 slots are wasted silence; TRAMA's schedule exchange lets neighbours reclaim them, while a contention MAC would simply sleep through. Under heavy, predictable load (periodic convergecast), the scheduled approach wins outright: zero collisions, zero backoff energy, deterministic per-hop delay.",
              "Bluetooth belongs in the same answer as the syllabus's scheduling example: a piconet of up to seven active slaves polled by the master in TDMA fashion, with frequency-hopping across the 2.4 GHz band — schedule-based medium access with a master-chosen slot plan. The exam contrast to close with: contention schemes adapt cheaply and fail under sustained load; scheduled schemes deliver determinism and sleep-time but pay in synchronization, slot state and bursty-load waste; TRAMA exists precisely to shrink that last gap by making schedules traffic-adaptive.",
            ],
            keyTerms: [
              { term: "TDMA", definition: "Time-division multiple access: exclusive slots per node — collision-free but sync- and allocation-bound." },
              { term: "TRAMA", definition: "Traffic-adaptive scheduled MAC: neighbour protocol, schedule exchange, adaptive two-hop election." },
              { term: "Schedule exchange protocol", definition: "TRAMA's mechanism announcing used and reusable slots to two-hop neighbours." },
              { term: "Adaptive election", definition: "Deterministic per-slot winner selection among two-hop neighbours by hashed random priority." },
              { term: "Piconet", definition: "Bluetooth's TDMA cell: one master polling up to seven active slaves over frequency-hopping." },
            ],
            table: {
              caption: "Scheduled versus contention — where each wins.",
              headers: ["Property", "TDMA / TRAMA", "Contention (S-MAC family)"],
              rows: [
                ["Collisions", "none by construction", "backoff-managed, nonzero"],
                ["Idle-slot waste", "TDMA wastes them; TRAMA reuses", "sleeps through, no waste"],
                ["Synchronization", "mandatory, µs-scale guard bands", "loose ms-scale schedule sync"],
                ["Per-hop latency", "deterministic (up to one frame)", "variable; sleep windows add delay"],
                ["State per node", "two-hop tables + schedules", "one-hop schedule only"],
                ["Best traffic", "steady, predictable convergecast", "bursty, low-rate monitoring"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the MAC by traffic and scale",
              caption: "Four quadrants, four designs — the scheduled and contention families meet in the middle.",
              axes: { x: "traffic: bursty -> steady", y: "scale: small -> large" },
              quadrants: [
                { label: "Hybrid MAC (Z-MAC, 802.15.4 GTS)", note: "large + bursty: schedule with CSMA fallback" },
                { label: "Clustered TDMA (LEACH-style slots)", note: "large + steady: cluster-scoped schedules" },
                { label: "Duty-cycled contention (S-MAC, T-MAC)", note: "small + bursty: simple, adaptive" },
                { label: "Plain TDMA round-robin", note: "small + steady: deterministic slots" },
              ],
            },
            bullets: [
              "TDMA: exclusive slots — collision-free, latency-deterministic; needs sync and slot allocation.",
              "Drift arithmetic: 30 ppm over a 1 s frame is 30 µs — needs periodic resync inside ~100 µs guard bands.",
              "TRAMA = neighbour protocol + schedule exchange + adaptive two-hop election; idle slots get reused.",
              "Nodes sleep unless elected, receiving or scheduled — energy tracks actual traffic.",
              "Bluetooth's piconet is the classic master-polling TDMA example with frequency hopping.",
              "Scheduled wins steady heavy load; contention wins bursty light load; TRAMA narrows the middle.",
            ],
            callout: {
              type: "exam",
              title: "TRAMA's three components are the question",
              body: "When TRAMA appears, name its three protocols — neighbour protocol (NP), schedule exchange protocol (SEP), adaptive election algorithm (AEP) — and the one-line benefit: two-hop knowledge lets idle slots be reused, cutting TDMA's bursty-load waste. Listing the acronyms with one line each is the full answer skeleton.",
            },
            examQuestions: [
              {
                q: "Explain TRAMA's operation — neighbour protocol, schedule exchange and adaptive election — and compare scheduled MACs with contention-based MACs in energy, latency and scalability.",
                marks: 14,
                outline: [
                  "NP: discover one- and two-hop neighbours",
                  "SEP: nodes announce used vs reusable slots to two-hop neighbourhood",
                  "AEP: per-slot deterministic winner by hashed random priority among two-hop contenders",
                  "Non-participants sleep; idle slots reused — TDMA's bursty waste reduced",
                  "Scheduled: collision-free, deterministic latency; pays in sync, slot state",
                  "Contention: simple, adaptive; pays in collisions, overhearing, idle listening",
                  "Traffic decides: steady convergecast -> scheduled; bursty monitoring -> contention",
                ],
              },
              {
                q: "Why does TDMA require clock synchronization in a WSN, and quantitatively, how much drift must a guard band absorb?",
                marks: 7,
                outline: [
                  "Slots are time positions; unsynchronized nodes transmit into neighbours' slots",
                  "Crystal drift 20-50 ppm; 30 ppm diverges ~2.6 s per day",
                  "Over a 1 s TDMA frame, relative drift is ~30 µs",
                  "Guard bands of ~100 µs plus periodic FTSP-class resynchronization absorb it",
                  "Without sync, collisions and deafness appear within a day (Unit I's drift chain)",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Hybrid protocols: Z-MAC and IEEE 802.15.4's MAC",
            body: [
              "Z-MAC (Zebra-MAC) earns its name by mixing: like a zebra it is striped between contention and schedule. At deployment, a distributed schedule-assignment algorithm (DRAND) gives each node one transmission slot per frame within its two-hop neighbourhood; frames have as many slots as the local node count. Outside its own slot, a node may still contend — with an important asymmetry: the slot's owner draws its backoff from a window several times smaller than contending nodes' windows, so the owner wins under load while others still get through when it is silent. Under light traffic Z-MAC behaves like pure CSMA; under heavy traffic it hardens into TDMA. The schedule also tolerates clock error: contention fills the gaps a drifting owner leaves.",
              "The two operating knobs make the hybrid explicit. TT (transmit time) determines how long before its slot an owner may start contending; TE (early transmission window) extends a slot for a frame-time fraction so an owner that missed its instant can still use the contention path. Broadcasts run a separate all-contend mode with pre-transmission notification. The costs are setup and state: DRAND's schedule computation is the deployment's heavy step, and two-hop schedule tables occupy mote RAM. The benefit is the load-following behaviour neither family offers alone — CSMA's low-latency agility with TDMA's collision ceiling exactly when contention would otherwise explode.",
              "IEEE 802.15.4's beacon-enabled mode is the standards-blessed hybrid. A coordinator opens each superframe with a beacon, then offers a contention access period running slotted CSMA/CA, and may lend up to seven of the sixteen slots as guaranteed time slots — reserved, collision-free, for devices with latency or bandwidth needs. Superframe order and beacon order set the active period and the repetition interval independently, so a network can be awake 3.84 ms of every 15.36 ms (a 25% duty cycle at SO = 2, BO = 4) while GTS devices get deterministic service inside the active period. Contention when possible, reservation when necessary — the hybrid idea, standardized.",
              "For the exam, structure the answer as the three hybrids with their signature mechanisms: Z-MAC — DRAND slots, owner-priority backoff (TT/TE), contention fallback; 802.15.4 — beacon, CAP with slotted CSMA/CA, up to seven GTSs, the 2^SO/2^BO duty arithmetic; and one line on why hybrids exist — neither pure family handles both light bursty and heavy steady traffic. The common slip is describing Z-MAC as TDMA with CSMA fallback only; the owner-priority backoff inside contended slots is the actual invention.",
            ],
            keyTerms: [
              { term: "Z-MAC", definition: "Hybrid MAC: DRAND-assigned slots with owner-priority backoff; CSMA when quiet, TDMA when loaded." },
              { term: "DRAND", definition: "Distributed slot-assignment algorithm giving each node a collision-free slot in its two-hop neighbourhood." },
              { term: "TT / TE", definition: "Z-MAC's owner-transmission window and early-transmission extension controlling hybrid behaviour." },
              { term: "CAP", definition: "Contention access period: the slotted-CSMA/CA portion of an 802.15.4 superframe." },
              { term: "Owner-priority backoff", definition: "The slot's owner draws backoff from a much smaller window than contending nodes — the hybrid's core trick." },
            ],
            table: {
              caption: "Two hybrids, mechanism by mechanism.",
              headers: ["Aspect", "Z-MAC", "IEEE 802.15.4 (beacon-enabled)"],
              rows: [
                ["Schedule source", "DRAND slots per two-hop neighbourhood", "coordinator's superframe + GTSs"],
                ["Contention path", "CSMA with owner-priority backoff (TT/TE)", "CAP with slotted CSMA/CA"],
                ["Reservation path", "owner's slot, extended by TE", "up to 7 guaranteed time slots"],
                ["Sync tolerance", "contention fills drift gaps", "beacon-anchored timing"],
                ["Duty arithmetic", "frame = local node count of slots", "960 µs × 2^SO active in 960 µs × 2^BO"],
                ["Setup cost", "DRAND run + two-hop tables", "coordinator beacon management"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Z-MAC's transmission decision",
              caption: "One schedule, two behaviours — the traffic decides which face the network shows.",
              start: "A node wants to transmit",
              branches: [
                { label: "Its own slot, owner awake", outcome: "tiny owner backoff — wins like TDMA", good: true },
                { label: "Owner silent, others contending", outcome: "larger backoff windows — CSMA fairness rules", good: true },
                { label: "Network lightly loaded", outcome: "behaves as pure CSMA; schedule cost amortized", good: true },
                { label: "Network heavily loaded", outcome: "owner priority caps collisions like TDMA", good: true },
              ],
            },
            bullets: [
              "Z-MAC: DRAND assigns one slot per node per frame within the two-hop neighbourhood.",
              "Owner-priority backoff: the owner's contention window is several times smaller — it wins under load.",
              "TT/TE knobs: owner may transmit early and extend the slot; broadcasts use an all-contend mode.",
              "Z-MAC degrades gracefully: sync errors and dead nodes are papered over by the contention path.",
              "802.15.4 beacon mode: beacon + CAP (slotted CSMA/CA) + up to 7 GTSs — the standardized hybrid.",
              "Duty arithmetic: SO = 2 active 3.84 ms in BO = 4's 15.36 ms interval — a 25% duty cycle.",
            ],
            callout: {
              type: "tip",
              title: "The invention is the backoff, not the schedule",
              body: "The common slip is calling Z-MAC 'TDMA with CSMA fallback'. The actual novelty is owner-priority backoff inside contended slots: same medium, same slots, but the owner's smaller window decides who yields. Say that sentence and the Z-MAC question is yours.",
            },
            examQuestions: [
              {
                q: "Explain the Z-MAC protocol: DRAND slot assignment, owner-priority backoff with TT and TE, broadcast handling, and how its behaviour changes between low and high contention.",
                marks: 14,
                outline: [
                  "DRAND: distributed slot assignment, one slot per node in the two-hop neighbourhood",
                  "Frames carry local node count of slots; owners and contenders coexist",
                  "Owner backoff window much smaller than contenders' — TDMA-like priority",
                  "TT/TE: early owner transmission and slot extension; contention fills sync gaps",
                  "Broadcasts: all-contend mode with pre-transmission notification",
                  "Light load: behaves as CSMA — low latency, schedule cost amortized",
                  "Heavy load: owner priority caps collisions — TDMA-like determinism",
                ],
              },
              {
                q: "Show that IEEE 802.15.4's beacon-enabled mode is a hybrid MAC, computing its duty cycle for superframe order 2 and beacon order 4.",
                marks: 7,
                outline: [
                  "Superframe: beacon + CAP (slotted CSMA/CA) + optional GTSs — contention and reservation coexist",
                  "Active period = 960 µs × 2^SO = 3.84 ms at SO = 2, in 16 slots",
                  "Beacon interval = 960 µs × 2^BO = 15.36 ms at BO = 4",
                  "Duty cycle = 3.84/15.36 = 25%",
                  "Up to 7 GTSs give latency-sensitive devices collision-free service inside the active window",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Routing: fundamentals, challenges and the taxonomy",
            body: [
              "Routing in a sensor network is not ad hoc routing with smaller packets — the objectives change underneath. The metric is energy per delivered bit and network lifetime, not hop count or delay. Addressing is data-centric: routes are built for attributes ('temperature above 40 °C') rather than for node IDs. Traffic is a convergecast funnel: many sources, one sink, so the relay burden concentrates near the sink. And the topology changes for reasons ad hoc routing never met — sleep cycles rotate neighbours in and out, and battery death is a scheduled event, not an accident. In-network aggregation along the path is expected, not exceptional.",
              "The challenges follow directly. The energy hole: in convergecast, nodes r hops from the sink carry roughly r times the traffic, so the innermost ring dies first and partitions the network while 90% of nodes are still alive — the failure most routing papers open with. Scalability: per-node state must stay neighbour-scale at a thousand nodes. Link reality: wireless links are asymmetric, lossy and time-varying, so routes must survive variance, not just failover. Localization dependency: geographic routing presumes coordinates that most motes do not natively have. And sleep-driven churn: a duty-cycled neighbour table changes every cycle, so route maintenance runs against a deliberately oscillating graph.",
              "The taxonomy is the syllabus's organizing gift — seven families, each optimizing a different thing. Location-aided protocols use coordinates to constrain forwarding (GEAR, GAF). Layered and in-network-processing protocols fuse data inside clusters before it travels (LEACH, PEGASIS, TEEN). Data-centric protocols route by attribute (SPIN, Directed Diffusion, rumor routing). Multipath protocols maintain redundant routes for resilience. Mobility-based protocols serve moving sources or sinks. QoS-based protocols promise delay or reliability (SPEED, MMSPEED, SAR). Heterogeneity-based protocols exploit a few powerful nodes. The exam's full-mark move: name all seven, attach one protocol each, then deep-dive two.",
              "The comparative table is the deliverable of this section, and the fork diagram is its picture. When the question says 'explain the taxonomy of routing and data dissemination protocols', the answer is the fork: what does the protocol optimize — geography, local fusion, attributes, resilience, deadlines, mobility or unequal hardware? Each branch is a family, each family a two-protocol contrast, and each contrast a paragraph of mechanism. That structure converts a syllabus bullet list into an organized essay without inventing anything.",
            ],
            keyTerms: [
              { term: "Energy hole", definition: "The sink-adjacent ring that relays all convergecast traffic and dies first, partitioning the network." },
              { term: "Data-centric routing", definition: "Routing by data attributes and names rather than node addresses." },
              { term: "Convergecast", definition: "Many-to-one traffic pattern from all sources toward the sink." },
              { term: "In-network aggregation", definition: "Fusing partial results along the route instead of shipping raw readings." },
              { term: "Taxonomy", definition: "The seven-family organization: location-aided, layered, data-centric, multipath, mobility, QoS, heterogeneity." },
            ],
            table: {
              caption: "Ad hoc routing vs sensor-network routing — why the families exist.",
              headers: ["Aspect", "Ad hoc routing", "WSN routing"],
              rows: [
                ["Metric", "hop count, delay, throughput", "energy per delivered bit; lifetime"],
                ["Addressing", "node identities", "attributes and data names"],
                ["Traffic", "any-to-any flows", "many-to-one convergecast"],
                ["Processing", "end-to-end, packets forwarded intact", "in-network aggregation expected"],
                ["Topology change", "driven by mobility", "driven by sleep cycles and battery death"],
                ["Scale", "tens of nodes", "hundreds to thousands"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "The routing taxonomy",
              caption: "Seven families answer one question: what should a route optimize?",
              start: "What does the protocol optimize?",
              branches: [
                { label: "Where, not who", outcome: "location-aided: GEAR, GAF — geography + energy", good: true },
                { label: "Fuse before forwarding", outcome: "layered / in-network: LEACH, PEGASIS, TEEN", good: true },
                { label: "Ask by attribute", outcome: "data-centric: SPIN, Directed Diffusion, rumor routing", good: true },
                { label: "Guarantees and survival", outcome: "multipath, QoS (SPEED, MMSPEED), mobility, heterogeneity", good: true },
              ],
            },
            bullets: [
              "WSN routing differs from ad hoc: energy metric, attribute addressing, convergecast, in-network processing, sleep-driven churn.",
              "The energy hole: relay load grows with hop distance to the sink; the inner ring dies first.",
              "Family 1 location-aided: GEAR, GAF — geography constrains forwarding.",
              "Family 2 layered/in-network: LEACH, PEGASIS, TEEN — fuse inside clusters.",
              "Family 3 data-centric: SPIN, Directed Diffusion, rumor routing — routes follow attributes.",
              "Families 4-7: multipath (resilience), mobility (moving sinks/sources), QoS (SPEED, MMSPEED), heterogeneity (powerful tier).",
            ],
            callout: {
              type: "exam",
              title: "Seven families, one protocol each",
              body: "The full-mark skeleton for any taxonomy question: name all seven families and attach one protocol to each — GEAR, LEACH, SPIN, braided multipath, TTDD, SPEED, tiered heterogeneity — then deep-dive two with mechanisms. The breadth-first list followed by depth is exactly how the examiner's rubric is organized.",
            },
            examQuestions: [
              {
                q: "Explain how routing in wireless sensor networks differs from routing in mobile ad hoc networks, and present the taxonomy of routing and data dissemination protocols with one representative protocol per family.",
                marks: 14,
                outline: [
                  "Differences: energy metric; attribute addressing; convergecast funnel",
                  "In-network aggregation expected; sleep-driven topology churn",
                  "Energy hole: relay load rises with distance to sink; inner ring dies first",
                  "Location-aided: GEAR/GAF — geography + energy-aware forwarding",
                  "Layered/in-network: LEACH/PEGASIS/TEEN — cluster fusion",
                  "Data-centric: SPIN/Directed Diffusion — attribute-based delivery",
                  "Multipath, mobility (TTDD), QoS (SPEED/MMSPEED), heterogeneity-based designs",
                ],
              },
              {
                q: "Explain the energy-hole problem quantitatively and state two routing-side remedies.",
                marks: 7,
                outline: [
                  "Convergecast: nodes r hops out relay roughly r× the traffic",
                  "The ring adjacent to the sink depletes first and partitions the network",
                  "Network can be 90% alive and still disconnected — lifetime is min-max, not average",
                  "Remedy 1: non-uniform deployment or mobile sinks near the hotspot",
                  "Remedy 2: power-aware routing metrics that spread load (min-max battery)",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "The routing families in depth: LEACH to SPEED",
            body: [
              "The layered family is the exam's favourite; carry its numbers. LEACH forms clusters whose heads rotate: each round a node becomes head with threshold T(n) = p/(1 − p·(r mod (1/p))) — p = 5% head fraction, r the round count, zero probability for recent heads. Heads fuse member data (~5 nJ/bit) and long-hop to the sink; the radio model uses E_elec = 50 nJ/bit, free-space amplification 10 pJ/bit/m² and a crossover distance of 87 m beyond which multipath amplification takes over — the original evaluation reported roughly an eightfold energy reduction against direct transmission. PEGASIS replaces clusters with a nearest-neighbour chain passing a token, one leader fusing per round; TEEN and APTEEN add reactivity with hard and soft thresholds.",
              "The location-aided family spends geography to save energy. GEAR routes toward a region by minimizing a learned cost blending hop distance with residual energy, then floods only inside the target region. GAF turns geography into sleep: the field is a virtual grid whose cells stay connected across neighbours, each cell keeps one node active in a leader rotation, and duplicates sleep with the graph remaining equivalent. The data-centric family routes by attribute: SPIN negotiates with metadata so nodes never send data nobody wants; Directed Diffusion floods an interest, sets gradients, and reinforces the best path while negatively reinforcing the rest; rumor routing sends agents so queries meet data trails without flooding.",
              "The remaining families optimize guarantees. Multipath: disjoint or braided backup paths keep delivery alive through individual failures — braided paths trade a little energy for graceful degradation instead of total loss when the primary dies. Mobility-based: TTDD builds a grid of dissemination points so a moving sink queries the nearest agent rather than re-flooding the field. QoS-based: SPEED converts a deadline into a required velocity and forwards only to neighbours that can sustain it, with feedback loops to shed load; MMSPEED offers several velocity classes on the same neighbourhood. Heterogeneity-based designs hand routing, fusion and backhaul to a powerful gateway tier, letting motes stay cheap. The table below is the one-glance version of all seven.",
              "Directed Diffusion deserves the diagram because its three-phase loop — interest, gradient, reinforcement — is the data-centric idea in miniature, and it recurs in exam questions about both routing and query processing (Unit III pushes queries down the same gradients). When asked to compare families, contrast on the axis each family was built for: GEAR vs LEACH on who carries the fusion cost, SPIN vs flooding on negotiation overhead, SPEED vs shortest-path on deadlines, disjoint vs braided on resilience-per-joule. The families are not rivals so much as answers to different questions — saying so is the closing sentence that reads like understanding.",
            ],
            keyTerms: [
              { term: "LEACH", definition: "Rotating cluster heads chosen by threshold T(n) = p/(1 − p·(r mod (1/p))); heads fuse and long-hop to the sink." },
              { term: "PEGASIS", definition: "Chain-based successor to LEACH: nearest-neighbour chain, token passing, one fusing leader per round." },
              { term: "TEEN / APTEEN", definition: "Reactive hierarchical protocols reporting on hard/soft threshold crossings (APTEEN adds periodicity)." },
              { term: "GEAR", definition: "Geographic + energy-aware routing: learned cost blends distance and residual energy; floods only in-region." },
              { term: "SPEED", definition: "QoS routing converting deadlines into required velocity; forwards only where the velocity is sustainable." },
            ],
            table: {
              caption: "The seven-family map — the exam's comparative backbone.",
              headers: ["Family", "Representative protocols", "What it optimizes"],
              rows: [
                ["Location-aided", "GEAR, GAF", "geography + residual energy; sleep via grid equivalence"],
                ["Layered / in-network", "LEACH, PEGASIS, TEEN, APTEEN", "fusion cost inside clusters; reactive thresholds"],
                ["Data-centric", "SPIN, Directed Diffusion, rumor routing", "attribute-based delivery; negotiation, gradients, agents"],
                ["Multipath", "disjoint paths, braided paths", "resilience per joule under failures"],
                ["Mobility-based", "TTDD, mobile-sink schemes", "serving moving sinks/sources without re-flooding"],
                ["QoS-based", "SPEED, MMSPEED, SAR", "deadline and reliability guarantees"],
                ["Heterogeneity-based", "tiered gateway designs", "exploiting powerful nodes for fusion/backhaul"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Directed Diffusion: interest, gradient, reinforcement",
              caption: "The data-centric loop in five steps — the same machinery Unit III's queries ride on.",
              steps: [
                { label: "Sink floods interest", note: "type, interval, duration, region" },
                { label: "Gradients set", note: "every hop records direction + rate" },
                { label: "Matching data flows", note: "sources send along gradients" },
                { label: "Sink reinforces best path", note: "higher-rate interest on the best gradient" },
                { label: "Negative reinforcement", note: "prune the rest; paths repair locally" },
              ],
            },
            bullets: [
              "LEACH threshold: T(n) = p/(1 − p·(r mod (1/p))), p = 5%; heads fuse (~5 nJ/bit) and long-hop to the sink.",
              "Radio model: E_elec = 50 nJ/bit, free-space 10 pJ/bit/m², crossover 87 m; LEACH ≈ 8× vs direct transmission.",
              "PEGASIS: nearest-neighbour chain + token; TEEN/APTEEN add hard/soft thresholds Ht/St.",
              "GEAR: learned cost = distance + energy, in-region flooding only; GAF: grid leader rotation, duplicates sleep.",
              "SPIN negotiates metadata (ADV/DATA); Directed Diffusion = interest -> gradients -> reinforcement; rumor routing uses agents.",
              "SPEED turns deadlines into required velocity; MMSPEED multiplies classes; TTDD serves mobile sinks; braided multipath buys graceful degradation.",
            ],
            callout: {
              type: "exam",
              title: "LEACH's threshold formula is the marks",
              body: "Write T(n) = p/(1 − p·(r mod (1/p))) exactly, define p (desired head fraction, typically 0.05) and r (round number), and note the zero-probability rule for past heads. Then the 87 m crossover and 5 nJ/bit aggregation complete the quantitative LEACH answer — the formula alone is usually worth several marks.",
            },
            examQuestions: [
              {
                q: "Explain LEACH, PEGASIS and TEEN as hierarchical routing protocols: cluster-head selection with the threshold formula, the chain-based alternative, and reactive thresholds. Include the radio-energy model numbers.",
                marks: 14,
                outline: [
                  "LEACH: rotating heads by T(n) = p/(1 − p·(r mod (1/p))), p = 5%",
                  "Head duties: gather, fuse (~5 nJ/bit), single long-hop to the sink",
                  "Radio model: E_elec = 50 nJ/bit; free-space 10 pJ/bit/m²; crossover d0 = 87 m",
                  "LEACH's ~8× energy reduction vs direct transmission in evaluation",
                  "PEGASIS: greedy nearest-neighbour chain, token passing, one leader fuses per round",
                  "TEEN: reactive — report only above hard threshold Ht and change above soft St",
                  "APTEEN: adds periodic reporting + TDMA schedule to TEEN's reactivity",
                ],
              },
              {
                q: "Compare GEAR, SPIN and SPEED: what does each optimize, what mechanism implements it, and in which application is each the right choice?",
                marks: 7,
                outline: [
                  "GEAR: optimizes region-targeted delivery; learned distance+energy cost; geographic + in-region flooding",
                  "SPIN: optimizes dissemination without implosion; ADV/DATA metadata negotiation",
                  "SPEED: optimizes deadline satisfaction; required-velocity forwarding with load feedback",
                  "Applications: GEAR for geographic queries, SPIN for replicate-heavy dissemination, SPEED for real-time events",
                  "Common thread: each replaces shortest-path with a domain metric",
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
      title: "Query Processing, Aggregation and Localization",
      summary:
        "Unit III treats the network as a database: declarative query processing with TinyDB, Cougar and TAG; the energy arithmetic of data aggregation; then node localization — concepts and challenges, the ranging techniques of ToA, TDoA, RSSI and AoA, the algorithms from trilateration and least squares to DV-hop and APIT, and the systems that put coordinates on motes.",
      chapter: {
        number: "03",
        title: "From Queries to Coordinates",
        intro:
          "Chapter 3 covers the network-as-database view, query processing in wireless sensor networks, data aggregation, and node localization: concepts and challenges, ranging techniques, wireless localization algorithms, and node localization systems in practice.",
        inOneBreath:
          "A declarative query like 'SELECT avg(temp) ... SAMPLE INTERVAL 10s' is compiled into a routing tree that merges partial aggregates at every hop, collapsing a thousand raw samples per epoch into one packet at the sink. Aggregation trades exactness for energy: MIN and MAX are free, MEDIAN is not. Ranging sets the accuracy ceiling — sound yields 34 cm per millisecond of delay, radio RSSI yields metres, and 6 dB of noise becomes about 58% distance error. Trilateration solves overlapping circles, DV-hop multiplies hop counts by a calibrated size, APIT votes over anchor triangles, and every final position is a least-squares compromise among noisy measurements.",
        sections: [
          {
            number: "3.1",
            title: "The network as a distributed database",
            body: [
              "The introduction to this unit is a change of viewpoint: users do not want packets, they want answers, so the sensor network is best modelled as a distributed database whose tables happen to be the physical world. A query names data ('average temperature in the north field'), the network decides which nodes answer, and the system's job is to deliver the answer with minimum energy. This data-centric stance completes Unit I's characteristic list and explains why Unit II's routing families exist: gradient-based, cluster-based and attribute-based routing are all query-delivery machinery wearing different shapes.",
              "The contrast that organizes everything is centralized versus in-network processing. The centralized model ships every raw sample to the sink: with 1000 nodes sampling at 1 Hz, that is 1000 packets per second traversing the funnel toward the sink, and energy that scales with nodes times rate times distance. The in-network model pushes the query outward and lets partial results merge on the way back: the same network returns one packet per epoch carrying the aggregate. The energy ratio is roughly the number of contributing nodes — three orders of magnitude — which is why every component of this unit (query processing, aggregation) is an energy technology disguised as a database technology.",
              "The mapping between database concepts and network mechanisms is worth memorizing as a table, because exam questions ask for it directly. A query maps to an interest disseminated into the field (Directed Diffusion's gradients are the index). A catalog entry maps to node metadata — what each mote can sense and where it sits. A view maps to an in-network aggregate maintained at intermediate hops. A transaction's atomicity maps to the reliability discipline of Unit IV's transport protocols. Once the mapping is in place, the rest of the unit reads as standard query processing with radio arithmetic substituted for I/O arithmetic.",
              "The exam framing: any 'introduction to query processing' question wants the viewpoint change plus the energy argument plus one concrete chain — a declarative query is optimized, disseminated into the network, answered by local sampling and partial aggregation, and returned as a stream of aggregates. State the 1000-to-1 reduction explicitly, name TAG/TinyDB/Cougar as the systems that implemented it, and the introduction is complete before the next section dives into mechanisms.",
            ],
            keyTerms: [
              { term: "Data-centric computing", definition: "Naming, querying and processing data by attributes; the network is the database." },
              { term: "In-network processing", definition: "Computing partial answers inside the network rather than shipping raw data outward." },
              { term: "Query dissemination", definition: "Pushing a declarative query into the field so the right nodes answer it." },
              { term: "TAG", definition: "Tiny AGgregation service: an aggregation tree over which partial results merge toward the sink." },
              { term: "Aggregate reduction ratio", definition: "Contributing nodes divided by delivered packets — the energy argument for in-network processing." },
            ],
            table: {
              caption: "Database concept -> sensor-network mechanism.",
              headers: ["Database concept", "WSN analogue"],
              rows: [
                ["Query", "interest disseminated into the field"],
                ["Catalog / schema", "node metadata: what it senses, where it is"],
                ["Index", "gradients / routing tree set up for the query"],
                ["View", "in-network aggregate maintained at hops"],
                ["Join across sources", "fusion of readings from multiple motes en route"],
                ["Transaction guarantees", "per-hop reliability (Unit IV transport)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Centralized collection vs in-network querying",
              caption: "The same epoch of 1000 samples: 1000 packets flowing in, or 1 aggregate arriving.",
              left: {
                heading: "Ship everything to the sink",
                items: [
                  "every raw sample transmitted",
                  "energy ∝ nodes × rate × distance",
                  "sink is the bottleneck and single failure point",
                  "answers only after full collection",
                ],
              },
              right: {
                heading: "Query in-network",
                items: [
                  "query pushed out, partial aggregates merge inward",
                  "1000 raw samples -> 1 packet per epoch",
                  "intermediate hops do the work",
                  "answers available continuously, fresh",
                ],
              },
            },
            bullets: [
              "Users want answers: model the network as a distributed database over the physical world.",
              "Centralized: 1000 nodes × 1 Hz = 1000 packets/s through the funnel toward the sink.",
              "In-network: partial aggregates merge per hop — roughly a 1000-to-1 reduction per epoch.",
              "Query -> interest; catalog -> metadata; index -> gradient; view -> in-network aggregate.",
              "TAG, TinyDB and Cougar are the systems that implemented the viewpoint.",
              "Energy argument first, database vocabulary second — that order is what the examiner wants to see.",
            ],
            callout: {
              type: "tip",
              title: "Say the reduction ratio",
              body: "The single most quotable number of this unit: in-network aggregation turns roughly n raw packets per epoch into 1 delivered aggregate — a 1000-to-1 reduction on a thousand-node field. Every query-processing and aggregation answer should carry it, because it converts a design idea into an energy argument.",
            },
            examQuestions: [
              {
                q: "Explain the distributed-database view of wireless sensor networks. Map database concepts to WSN mechanisms and justify in-network processing with the energy arithmetic of a 1000-node, 1 Hz field.",
                marks: 14,
                outline: [
                  "Viewpoint: users query phenomena, not nodes — the network is the database",
                  "Query -> interest; catalog -> metadata; index -> gradient; view -> aggregate",
                  "Centralized model: 1000 packets/s converge toward the sink; energy ∝ n × rate × distance",
                  "In-network model: partial aggregates merge per hop; ~1000-to-1 per epoch",
                  "TAG/TinyDB/Cougar implement declarative queries over the tree",
                  "Unit II's routing families are the delivery machinery for this model",
                  "Reliability guarantees become Unit IV's transport problem",
                ],
              },
              {
                q: "Why is in-network processing described as an energy technology rather than a database convenience?",
                marks: 7,
                outline: [
                  "Transmission dominates node energy budgets (Pottie-Kaiser arithmetic)",
                  "Merging two packets at a hop costs microjoules; transmitting them costs tens of microjoules",
                  "Aggregation shrinks traffic multiplicatively along the funnel",
                  "The 1000-to-1 reduction multiplies directly into lifetime",
                  "Hence every query-language feature (sampling, filters) is an energy lever",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Query processing in wireless sensor networks: TinyDB, Cougar and TAG",
            body: [
              "TinyDB (from the Berkeley TinyDB project) is the declarative query system for motes: SQL-like syntax over a virtual 'sensors' table whose columns are the physical quantities — temperature, light, voltage, position. A query such as 'SELECT nodeid, avg(temp) FROM sensors WHERE light > 400 SAMPLE INTERVAL 10s' specifies what, from where, filtered how, and at what epoch length. Clauses unique to sensor networks carry the energy policy: SAMPLE INTERVAL (or EPOCH DURATION) sets the sampling cadence, LIFETIME bounds the query's total energy spend, and TTL expires old results. Virtual columns like position make the network itself queryable.",
              "Cougar, the other canonical system, treats queries as distributed plans: the declarative query is compiled into an execution plan whose operators are placed on nodes, with in-network aggregation operators running where the data flows. Fjords, the architecture underneath, schedules multiple concurrent queries over shared sensor streams so their sample intervals merge — two queries at 10 s and 30 s epochs share the 10 s samples rather than double-sampling. TAG (Tiny AGgregation) supplies the aggregation tree: the sink builds a spanning tree, children merge their partial aggregates before forwarding, and the result climbs level by level — a thousand samples become one packet through log-depth merging.",
              "The optimization moves are the mark-bearing content. Selection push-down: filters (WHERE light > 400) execute at the nodes that hold the data, so unqualified samples never transmit. Epoch sharing: concurrent queries align their sample intervals to one acquisition schedule. Topology-aware placement: aggregation operators sit at high-fanout points of the tree where merging pays most. And metadata routing: the query planner knows node capabilities and locations from catalog data, so 'WHERE location IN region' routes only into the region — the same idea as GEAR's regional flooding, now expressed declaratively.",
              "The worked chain to quote: a 1000-node field answers 'avg temperature' every 10 s. Each node samples once per epoch; along a depth-5 tree, partial aggregates merge pairwise at each level, so the sink receives O(1) packets per epoch instead of O(n) — a hundredfold-plus traffic cut, sustained every epoch. The code sample below is the actual query syntax examiners recognize; writing it from memory converts 'I know about TinyDB' into 'I can use TinyDB', which is the difference between the 5 and the 7.",
            ],
            keyTerms: [
              { term: "TinyDB", definition: "Declarative SQL-like query system over a virtual sensors table, with SAMPLE INTERVAL and LIFETIME clauses." },
              { term: "Cougar", definition: "Query system compiling declarative requests into distributed execution plans with in-network operators." },
              { term: "Fjords", definition: "Cross-layer architecture scheduling multiple queries over shared sensor streams with merged epochs." },
              { term: "EPOCH DURATION", definition: "The sampling cadence clause; concurrent queries share epochs to avoid double-sampling." },
              { term: "Selection push-down", definition: "Executing filters at the data-owning nodes so unqualified samples never transmit." },
            ],
            diagram: {
              kind: "pipeline",
              title: "A query's journey through the network",
              caption: "From declarative text to a stream of aggregates — five stages, each an energy decision.",
              stages: [
                { label: "Declarative query", note: "SELECT ... SAMPLE INTERVAL 10s" },
                { label: "Optimize", note: "push selection, share epochs, place operators" },
                { label: "Disseminate", note: "query + routing tree built into the field" },
                { label: "Execute in-network", note: "sample, filter, merge partial aggregates" },
                { label: "Result stream", note: "O(1) aggregates per epoch at the sink" },
              ],
            },
            bullets: [
              "TinyDB: SQL-like queries over the virtual 'sensors' table; position and voltage are queryable columns.",
              "Energy clauses: SAMPLE INTERVAL / EPOCH DURATION set cadence; LIFETIME bounds total spend; TTL expires results.",
              "Cougar compiles queries into distributed plans; Fjords merges concurrent queries' epochs.",
              "TAG: aggregation tree — partials merge pairwise, sink gets O(1) packets per epoch instead of O(n).",
              "Optimizations: selection push-down, epoch sharing, topology-aware operator placement, metadata routing.",
              "Worked chain: 1000 nodes, depth-5 tree -> one aggregate packet per 10 s epoch at the sink.",
            ],
            callout: {
              type: "exam",
              title: "Write the query, not the essay",
              body: "For any TinyDB question, write an actual query with the sensor-specific clauses: SELECT nodeid, avg(temp) FROM sensors WHERE light > 400 SAMPLE INTERVAL 10s LIFETIME 30 days. The syntax proves you know the interface; the LIFETIME clause proves you know the energy model. Both in one line is a cheap, decisive mark.",
            },
            codeExample: {
              language: "sql",
              caption: "tinydb.tinydb — the canonical query forms",
              code: `-- average temperature every 10 s, only where it is bright
SELECT nodeid, avg(temp)
FROM sensors
WHERE light > 400
SAMPLE INTERVAL 10s;

-- bounded-energy query: stops when its budget is spent
SELECT avg(light) FROM sensors
SAMPLE INTERVAL 30s
LIFETIME 7 days;

-- a query over the network itself
SELECT pos, voltage FROM sensors
SAMPLE INTERVAL 60s;`,
            },
            examQuestions: [
              {
                q: "Explain query processing in wireless sensor networks using TinyDB and Cougar: the declarative interface, sensor-specific clauses, in-network execution via TAG, and the optimization strategies including selection push-down and epoch sharing.",
                marks: 14,
                outline: [
                  "TinyDB: SQL-like interface over the virtual sensors table",
                  "Sensor clauses: SAMPLE INTERVAL / EPOCH DURATION, LIFETIME, TTL, virtual columns",
                  "Cougar: queries compiled into distributed plans with in-network operators",
                  "Fjords: concurrent queries share merged sample epochs",
                  "TAG: spanning tree; partial aggregates merge pairwise toward the sink",
                  "Optimizations: push selection down, share epochs, place operators at fanout points",
                  "Worked chain: 1000 nodes, depth-5 tree -> O(1) packets per epoch",
                ],
              },
              {
                q: "Write a TinyDB query that reports the average temperature of nodes brighter than 400 lux every 10 seconds with a 30-day energy budget, and explain what each clause does to the network's execution.",
                marks: 7,
                outline: [
                  "SELECT nodeid, avg(temp) FROM sensors WHERE light > 400 SAMPLE INTERVAL 10s LIFETIME 30 days",
                  "WHERE executes at the motes — unqualified nodes sample nothing they cannot pass",
                  "SAMPLE INTERVAL 10s sets the epoch and merges with other queries' cadences",
                  "avg() merges as partial aggregates along the TAG tree",
                  "LIFETIME 30 days forces the planner to pace sampling within the energy budget",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Data aggregation in wireless sensor networks",
            body: [
              "Data aggregation is the systematic combining of multiple packets en route so the network transmits answers instead of samples. The mechanism is an aggregation structure — usually a tree or DAG rooted at the sink — over which partial aggregates merge at every hop: each node combines its own reading with everything received from below, emits one packet, and the field's traffic collapses geometrically. LEACH's cluster heads and PEGASIS's chain leader are aggregation structures with rotation policies; TAG's tree is the query-driven version. Aggregation functions define what may merge: MIN, MAX, COUNT and SUM are perfectly composable; AVG composes as (SUM, COUNT) pairs; MEDIAN and quantiles need all samples and are the expensive end.",
              "The energy arithmetic is the section's proof. Using the LEACH radio model, one 400-bit packet over 10 m costs E_elec × 400 + ε_fs × 400 × d² = 20 µJ + 0.4 µJ ≈ 20.4 µJ. Fusing the same payload at a hop costs about 5 nJ/bit × 400 = 2 µJ — an order of magnitude cheaper than a single transmission, and it eliminates the two transmissions it replaces. Multiply by the funnel: at each of the tree's levels, half the transmissions vanish, so a depth-5 tree cuts total transmissions by roughly 95%. Communication dominates, so aggregation is not an optimization — it is the difference between a network that finishes its mission and one that does not.",
              "The costs are accuracy and latency, and the exam wants them named. Exact aggregation of distributive functions is lossless, but anything else — MEDIAN, histograms, TOP-K — requires either shipping all samples or accepting approximation: approximate aggregates with bounded error are the standard compromise. Latency: merging forces synchronization points, so the deepest leaf waits for its whole subtree; loss compounds it, because one lost partial invalidates its branch's contribution unless the structure is redundancy-tolerant. Duplicate suppression (two nodes sensing the same event emit one report) is the cheapest aggregation of all and needs no structure — just event-level deduplication at the first common hop.",
              "Structure the exam answer as: definition, structure (tree/DAG), function classes with compressibility, the energy arithmetic, then the accuracy-latency-reliability costs with the approximation compromise. The table of function classes is the skeleton; the pyramid diagram of the funnel is the picture; the sentence 'aggregation trades exactness for energy, and the trade is almost always worth it' is the conclusion the examiner is waiting to read.",
            ],
            keyTerms: [
              { term: "Aggregation tree / DAG", definition: "The routing structure over which partial aggregates merge toward the sink." },
              { term: "Distributive function", definition: "A function computable from partials alone (MIN, MAX, SUM, COUNT) — lossless and cheap." },
              { term: "Algebraic function", definition: "Composable with fixed-size state, e.g. AVG as (SUM, COUNT) pairs." },
              { term: "Holistic function", definition: "Needs all samples (MEDIAN, quantiles) — approximation is the energy-feasible answer." },
              { term: "Duplicate suppression", definition: "Collapsing multiple reports of the same event into one — structure-free aggregation." },
            ],
            table: {
              caption: "Aggregation functions by class and cost.",
              headers: ["Function", "Class", "Composability", "Cost note"],
              rows: [
                ["MIN / MAX", "distributive", "perfect from partials", "free — merge and forward"],
                ["COUNT / SUM", "distributive", "perfect from partials", "free"],
                ["AVG", "algebraic", "(SUM, COUNT) pairs", "fixed-size state"],
                ["MEDIAN / quantiles", "holistic", "needs all samples", "approximate with bounded error"],
                ["TOP-K / histogram", "holistic", "prunable summaries", "sketches; error bounded by design"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The aggregation funnel",
              caption: "Raw samples enter at the base; one answer exits at the apex — every tier is a hop saving transmissions.",
              tiers: [
                { label: "Answer at the sink — 1 packet", note: "the delivered aggregate" },
                { label: "Branch aggregates — tens", note: "merged partials at high-fanout nodes" },
                { label: "Hop partials — hundreds", note: "each merge halves the transmissions" },
                { label: "Raw samples — one per node", note: "1000 samples enter per epoch" },
              ],
            },
            bullets: [
              "Aggregation = merging packets en route over a tree/DAG so answers, not samples, travel.",
              "Energy: fusing 400 bits ≈ 2 µJ vs transmitting ≈ 20.4 µJ — an order of magnitude cheaper.",
              "A depth-5 tree cuts transmissions roughly 95% — aggregation is a lifetime technology.",
              "Function classes: distributive (MIN/MAX/SUM/COUNT), algebraic (AVG via SUM+COUNT), holistic (MEDIAN needs all).",
              "Costs: accuracy for holistic functions, latency at merge points, branch fragility on loss.",
              "Duplicate suppression is the cheapest aggregation — event dedup at the first common hop.",
            ],
            callout: {
              type: "warning",
              title: "Exact MEDIAN is an energy trap",
              body: "MEDIAN and TOP-K are holistic: computing them exactly means shipping every sample, which defeats the funnel. The full-mark move is to say 'approximate aggregate with bounded error' and name sketches or sampling as the mechanism — exactness is the wrong requirement in a battery-powered network.",
            },
            examQuestions: [
              {
                q: "Explain data aggregation in wireless sensor networks: aggregation structures, the classes of aggregation functions with examples, the energy arithmetic versus plain transmission, and the accuracy-latency tradeoffs.",
                marks: 14,
                outline: [
                  "Definition: merge packets en route over a tree/DAG rooted at the sink",
                  "Distributive functions (MIN/MAX/SUM/COUNT) compose losslessly",
                  "Algebraic (AVG = SUM+COUNT) with fixed state; holistic (MEDIAN) needs all samples",
                  "Arithmetic: fuse 400 bits ≈ 2 µJ vs transmit ≈ 20.4 µJ (E_elec 50 nJ/bit, ε_fs 10 pJ/bit/m²)",
                  "Funnel effect: depth-5 tree cuts transmissions ~95%",
                  "Costs: accuracy for holistic functions; latency at merge points; loss fragility",
                  "Compromise: bounded-error approximate aggregates; duplicate suppression as the free case",
                ],
              },
              {
                q: "Compute the energy of transmitting a 400-bit packet over 10 m using the LEACH model (E_elec = 50 nJ/bit, ε_fs = 10 pJ/bit/m²), and compare it with the ~5 nJ/bit cost of aggregating the same payload at a hop.",
                marks: 7,
                outline: [
                  "E_tx = E_elec × k + ε_fs × k × d²",
                  "= 50 nJ × 400 + 10 pJ × 400 × 100",
                  "= 20 µJ + 0.4 µJ ≈ 20.4 µJ per transmission",
                  "Aggregation ≈ 5 nJ/bit × 400 = 2 µJ — roughly 10× cheaper",
                  "And it replaces two transmissions — hence the funnel's multiplicative savings",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Node localization: concepts and challenges",
            body: [
              "Localization assigns coordinates to nodes, and without it most of the network's intelligence is unusable: a temperature reading without a position cannot map a heat plume, geographic routing (GEAR, GAF) cannot constrain forwarding, coverage cannot be verified and tracked targets cannot be reported. The concepts to organize first: absolute versus relative coordinates (metres tied to a global frame, versus arbitrary local frames); anchor-based versus anchor-free (some nodes know their position — surveyed or GPS-equipped — versus all nodes unknown); range-based versus range-free (measured distances or angles versus connectivity-only inference); and single-hop versus multihop (ranging directly to anchors, versus chains of cooperation).",
              "The challenges are measurement, energy and geometry. Measurement noise dominates: RSSI fluctuates 5-8 dB in indoor multipath, and with a path-loss exponent n = 3 a 6 dB error converts to roughly ±58% distance error — the reason cheap radios make poor surveying instruments. Time-of-flight techniques need nanosecond-scale clock agreement on RF (1 µs of error is 300 m of distance), which is why practical systems use ultrasound or UWB hardware. Energy: ranging hardware (ultrasound transducers, UWB front ends) costs dollars, milliamps and board area that motes do not have. Geometry: anchors must surround the field — anchors bunched at one corner leave the opposite region with weak, elongated error ellipses — and error compounds through multihop chains.",
              "The GPS answer deserves its own paragraph because it is the classic wrong answer. A GPS receiver per mote adds cost (tens of dollars at the time of the classic platforms), drains power at levels comparable to the entire radio budget during acquisition, and simply fails indoors, underwater and under dense canopy — precisely where sensor networks deploy. The architectural consequence: a few anchors carry GPS or surveyed coordinates, and everything else localizes relative to them. That division of labour is what anchor-based means, and it is the reason Unit III's algorithms all assume a small known set plus a large unknown set.",
              "The exam framing: define localization, list the classification axes with one example system per class, state the challenges with numbers (6 dB -> 58% for RSSI; 1 µs -> 300 m for RF ToA), and close with why GPS-per-node fails. The decision fork — anchors available? ranging hardware affordable? multihop needed? — is the diagram; walking an examiner through it shows the concepts are a design tool, not vocabulary.",
            ],
            keyTerms: [
              { term: "Anchor (beacon)", definition: "A node with known coordinates — surveyed or GPS-equipped — that others localize against." },
              { term: "Range-based localization", definition: "Uses measured distances or angles (ToA/TDoA/RSSI/AoA) between nodes." },
              { term: "Range-free localization", definition: "Uses connectivity and hop counts only — centroid, DV-hop, APIT." },
              { term: "Anchor-free localization", definition: "Builds a relative coordinate map with no globally known positions." },
              { term: "NLOS / multipath error", definition: "Non-line-of-sight and reflections that bias range measurements, worst indoors." },
            ],
            table: {
              caption: "The classification axes with example systems.",
              headers: ["Axis", "Options", "Example systems"],
              rows: [
                ["Coordinates", "absolute vs relative", "GPS-anchored vs MDS-MAP maps"],
                ["Known positions", "anchor-based vs anchor-free", "Cricket vs anchor-free AHLos variants"],
                ["Measurements", "range-based vs range-free", "TDoA trilateration vs DV-hop"],
                ["Cooperation", "single-hop vs multihop", "direct trilateration vs iterative AHLos"],
                ["Granularity", "fine vs coarse", "cm-scale ultrasound vs room-level centroid"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a localization approach",
              caption: "Three questions decide the family — walk the examiner down the fork.",
              start: "Designing a localization system",
              branches: [
                { label: "GPS on every node?", outcome: "rejected: cost, power, and it fails indoors", good: false },
                { label: "Ranging hardware affordable?", outcome: "range-based: TDoA/UWB trilateration, cm-scale accuracy", good: true },
                { label: "No extra hardware?", outcome: "range-free: centroid, DV-hop, APIT from connectivity", good: true },
                { label: "No anchors at all?", outcome: "anchor-free relative maps (MDS-style), then register to anchors later", good: true },
              ],
            },
            bullets: [
              "Localization enables mapping, geographic routing, coverage verification and tracking — 'where' is half of every reading.",
              "Axes: absolute/relative, anchor-based/anchor-free, range-based/range-free, single-hop/multihop, fine/coarse.",
              "RSSI noise: 5-8 dB indoors; at n = 3, a 6 dB error is ~58% distance error.",
              "RF ToA needs ns-scale clocks — 1 µs of error is 300 m; practical systems use ultrasound or UWB.",
              "Ranging hardware costs dollars and milliamps motes cannot spare — hence range-free families exist.",
              "Anchors must surround the field; clustered anchors leave weak error ellipses opposite them.",
            ],
            callout: {
              type: "exam",
              title: "GPS-per-node is the wrong answer",
              body: "The localization question usually hides a trap: 'why not just use GPS?' Answer with the three failures — cost per node, acquisition power comparable to the radio budget, and no fix indoors or under canopy — then give the architectural answer: a few anchors know where they are; the rest localize relative to them.",
            },
            examQuestions: [
              {
                q: "Explain the concepts and challenges of node localization in wireless sensor networks: the classification axes, the measurement-noise arithmetic, the energy cost of ranging hardware, and why GPS on every node is not the answer.",
                marks: 14,
                outline: [
                  "Concepts: absolute/relative, anchor-based/anchor-free, range-based/range-free, single/multihop",
                  "Why localization: mapping, GEAR/GAF routing, coverage, tracking all need coordinates",
                  "RSSI noise: 5-8 dB; at n = 3, 6 dB ≈ 58% distance error",
                  "RF ToA: 1 µs of clock error = 300 m — needs ns-scale sync or ultrasound/UWB",
                  "Ranging hardware costs dollars, mA and board area",
                  "Geometry: anchors must surround the field or error ellipses elongate",
                  "GPS-per-node: cost + acquisition power + no indoor fix — anchors instead",
                ],
              },
              {
                q: "Distinguish range-based from range-free localization, giving two algorithms for each and the accuracy each class can plausibly reach.",
                marks: 7,
                outline: [
                  "Range-based: measures distance/angle — TDoA trilateration, RSSI multilateration",
                  "Plausible accuracy: cm-to-dm with ultrasound/UWB; 2-3 m with RSSI",
                  "Range-free: connectivity only — DV-hop, APIT, centroid",
                  "Plausible accuracy: fractions of radio range (DV-hop ~20-30% of range in isotropic fields)",
                  "Choice follows available hardware and required granularity",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Ranging techniques: ToA, TDoA, RSSI and AoA",
            body: [
              "ToA (time of arrival) measures propagation time and multiplies by speed: distance = velocity × time. The physics is unforgiving about velocity: RF moves at 3 × 10⁸ m/s, so 1 ns of clock error is 30 cm and 1 µs is 300 m — RF ToA demands nanosecond-scale synchronization that cheap motes cannot deliver, and belongs to UWB systems. Ultrasound moves at ~340 m/s, so 1 ms of error is 34 cm — coarse clocks suffice and acoustic ranging becomes practical. TDoA (time difference of arrival) removes the hardest requirement altogether: transmit radio and ultrasound simultaneously; the receiver measures the arrival gap, and the transmitter's clock never needs to agree with the receiver's, only the receiver's own two timestamps.",
              "The worked TDoA number is the section's core asset and should be quoted exactly. Two nodes 10 m apart: the RF burst arrives in 33 ns — effectively instantly — and the ultrasound chirp arrives in 10/340 ≈ 29.4 ms. The receiver's measured gap is therefore 29.4 ms, and distance = gap × 340 m/s = 10 m. Every centimetre of timing resolution is 0.34 mm of distance; every millisecond of sloppiness is 34 cm. Cricket, the canonical system, reaches centimetre-to-decimetre accuracy in room-scale deployments by exactly this arithmetic, which is why the syllabus pairs 'ranging techniques' with 'wireless localization algorithms' — ranging quality bounds everything downstream.",
              "RSSI (received signal strength) is the free option: every radio already measures it. The log-distance path-loss model maps strength to distance: PL(d) = PL(d₀) + 10·n·log₁₀(d/d₀), so d = d₀ × 10^((RSSI₀ − RSSI)/(10·n)), with n = 2 in free space and 3-4 indoors. The noise is the catch: 5-8 dB of fading translates, at n = 3, to tens of percent of distance error — metres, not centimetres. AoA (angle of arrival) measures bearing instead of distance, using antenna arrays to resolve direction to a few degrees; positions follow by triangulation, but hardware cost has kept AoA rare on motes. The comparison discipline: accuracy scales inversely with cheapness — ultrasound buys centimetres, RSSI buys metres for free.",
              "For the exam, present the four techniques in a table with physical basis, hardware requirement, accuracy and failure mode, then work one number — the 29.4 ms gap — end to end. The closing sentence should bind this section to the next: ranging produces noisy distances; algorithms (trilateration, multilateration, least squares) are how a network turns three or more noisy circles into one honest position, and their error math inherits the ranging noise directly.",
            ],
            keyTerms: [
              { term: "ToA", definition: "Distance = velocity × time of flight; RF needs ns clocks (1 µs = 300 m), ultrasound 1 ms = 34 cm." },
              { term: "TDoA", definition: "Simultaneous RF + ultrasound transmission; receiver measures the arrival gap — no transmitter-receiver clock sync." },
              { term: "RSSI", definition: "Received signal strength mapped to distance via the log-distance model; free but noisy (±tens of percent)." },
              { term: "Log-distance path loss", definition: "PL(d) = PL(d0) + 10·n·log10(d/d0); n = 2 free space, 3-4 indoors." },
              { term: "AoA", definition: "Angle of arrival via antenna arrays; enables triangulation, costly on motes." },
            ],
            diagram: {
              kind: "flow",
              title: "One TDoA range measurement",
              caption: "Two media, one gap — the transmitter's clock never needs to agree with the receiver's.",
              steps: [
                { label: "Transmit RF + chirp together", note: "same instant, same node" },
                { label: "RF arrives ~instantly", note: "33 ns for 10 m — timestamp t1" },
                { label: "Ultrasound arrives", note: "29.4 ms later — timestamp t2" },
                { label: "Gap × 340 m/s", note: "d = 29.4 ms × 340 = 10 m" },
                { label: "Repeat to 3+ anchors", note: "feed the multilateration" },
              ],
            },
            bullets: [
              "ToA: d = v × t; RF at 3 × 10⁸ m/s makes 1 µs = 300 m — nanosecond clocks required (UWB territory).",
              "Ultrasound at ~340 m/s: 1 ms = 34 cm — coarse clocks suffice for acoustic ranging.",
              "TDoA: RF + ultrasound sent together; the arrival gap removes transmitter-receiver clock sync entirely.",
              "Worked number: 10 m apart -> RF in 33 ns, sound in 29.4 ms; gap × 340 = 10 m.",
              "RSSI: d = d0 × 10^((RSSI0 − RSSI)/(10 n)); n = 2 free space, 3-4 indoors; 6 dB ≈ 58% error at n = 3.",
              "AoA: bearings from antenna arrays enable triangulation; hardware cost keeps it rare on motes.",
            ],
            callout: {
              type: "exam",
              title: "The conversion pair to memorize",
              body: "Sound: 34 cm per millisecond. Radio: 300 m per microsecond. Every ranging numerical in the exam is one of these two conversions plus arithmetic, and the factor-of-a-thousand between them is exactly why practical motes measure time in milliseconds of sound, not microseconds of radio.",
            },
            codeExample: {
              language: "python",
              caption: "ranging.py — TDoA and RSSI distance, computed",
              code: `V_SOUND = 340.0          # m/s
C_LIGHT = 3e8            # m/s

# TDoA: RF + ultrasound sent together, 10 m apart
gap_s = 10 / V_SOUND              # 29.4 ms
print(gap_s * V_SOUND)            # -> 10.0 m

# timing error -> distance error (sound vs radio)
print(0.001 * V_SOUND)            # 1 ms   -> 0.34 m
print(1e-6 * C_LIGHT)             # 1 us   -> 300 m

# RSSI -> distance (log-distance model)
d0, n = 1.0, 3.0                  # office path-loss exponent
rssi0, rssi = -45.0, -61.0        # dBm at d0 vs measured
d = d0 * 10 ** ((rssi0 - rssi) / (10 * n))
print(round(d, 2))                # -> 3.4 m for a 16 dB gap`,
            },
            examQuestions: [
              {
                q: "Explain the four ranging techniques for wireless sensor networks — ToA, TDoA, RSSI and AoA — with their physical basis, hardware requirements, accuracy and failure modes, and work the TDoA example for two nodes 10 m apart.",
                marks: 14,
                outline: [
                  "ToA: d = v × t; RF 1 µs = 300 m demands ns clocks; ultrasound 1 ms = 34 cm",
                  "TDoA: simultaneous RF + ultrasound; receiver measures the gap — no cross-node sync",
                  "Worked: 10 m -> RF in 33 ns, sound in 29.4 ms; gap × 340 m/s = 10 m",
                  "RSSI: log-distance model d = d0 × 10^((RSSI0 − RSSI)/(10 n)); free but 5-8 dB noise",
                  "At n = 3, a 6 dB error is ~58% distance error — metres, not centimetres",
                  "AoA: bearing measurement via antenna arrays; enables triangulation but costly",
                  "Discipline: accuracy scales inversely with cheapness; ranging bounds the algorithms",
                ],
              },
              {
                q: "Derive the RSSI-to-distance inversion from the log-distance path-loss model and compute the distance for RSSI0 = -45 dBm, RSSI = -61 dBm, n = 3, d0 = 1 m.",
                marks: 7,
                outline: [
                  "PL(d) = PL(d0) + 10 n log10(d/d0)",
                  "Invert: d = d0 × 10^((RSSI0 − RSSI)/(10 n))",
                  "Gap = 16 dB; 16/30 = 0.533",
                  "d = 10^0.533 ≈ 3.4 m",
                  "Sensitivity: with n = 2 the same gap gives ~6.3 m — the exponent dominates the answer",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Wireless localization algorithms",
            body: [
              "Ranging produces noisy distances; algorithms turn them into positions. Trilateration is the base case: three circles centred on known anchors with measured radii intersect at the unknown node's position — in the noise-free case, exactly. With more measurements than unknowns the system is overdetermined and noisy, so multilateration solves it as least squares: minimize Σ(dᵢ − ‖p − aᵢ‖)² over the unknown position p. Because the squared-distance system is nonlinear in p, the standard trick linearizes it (subtract one anchor's equations from the rest) into A·x = b, then solves by the normal equations — the code sample below executes exactly this on four anchors. Triangulation is the angle-based sibling: two AoA bearings intersect at a point.",
              "The range-free family replaces measured distances with connectivity inferences. Centroid localization: a node averages the coordinates of every anchor it hears — one line of code, room-level accuracy, needs dense anchors. DV-hop: nodes count hops to anchors, anchors calibrate an average hop size (their known mutual distance divided by their hop separation), and unknowns multiply hop count by calibrated size — accuracy around 20-30% of radio range in isotropic fields, degrading in anisotropic ones (a hole in the field inflates hop counts unevenly). APIT: each node tests which anchor triangles contain it (approximating the point-in-triangle test with neighbour signal-strength comparisons) and takes the intersection's centre of mass — more robust than centroid, still hardware-free.",
              "Multihop localization extends the single-hop algorithms across the field when anchors are out of radio range. Iterative multilateration (AHLos-style): nodes that have localized themselves with enough confidence promote themselves to anchors and help their neighbours, rippling coordinates outward from the true anchors; the known cost is error propagation — each promotion adds the promoter's error to all downstream estimates, so confidence thresholds and refinement passes (re-running the least squares with updated ranges) are the standard defences. MDS-MAP takes the global route: build the connectivity graph, apply multidimensional scaling to get a relative map, then register it to anchors with a rigid transform — one centralized computation, anchor-free up to the final registration.",
              "The exam skeleton: define trilateration and write the least-squares objective; contrast range-free algorithms (centroid, DV-hop, APIT) with their accuracy classes; explain multihop promotion and error propagation; and close with the matrix — ranging hardware versus hop distance — as the map of all four quadrants. Quote one number per family: centimetres for TDoA least squares indoors, metres for RSSI, 20-30% of range for DV-hop, and 'error grows with promotion depth' for multihop chains.",
            ],
            keyTerms: [
              { term: "Trilateration", definition: "Position from intersection of distance circles to 3+ anchors." },
              { term: "Multilateration (least squares)", definition: "Minimizing Σ(dᵢ − ‖p − aᵢ‖)² over noisy ranges; solved by linearization to A·x = b." },
              { term: "DV-hop", definition: "Hop counts to anchors × calibrated average hop size; 20-30% of range accuracy, anisotropy-sensitive." },
              { term: "APIT", definition: "Approximate point-in-triangle test over anchor triangles; intersection region's centre of mass." },
              { term: "Iterative multihop promotion", definition: "Confident localized nodes become anchors for their neighbours; error compounds with depth." },
            ],
            diagram: {
              kind: "matrix",
              title: "The algorithm map",
              caption: "Two axes organize every algorithm: ranging hardware and hop distance from the anchors.",
              axes: { x: "no ranging hardware -> ranging hardware", y: "single-hop -> multihop" },
              quadrants: [
                { label: "Iterative multihop (AHLos), MDS-MAP", note: "multihop + hardware: promotion with error control" },
                { label: "Trilateration / least squares", note: "single-hop + hardware: the accurate core" },
                { label: "DV-hop, Amorphous", note: "multihop, connectivity-only: calibrated hop sizes" },
                { label: "Centroid, APIT", note: "single-hop, connectivity-only: dense anchors required" },
              ],
            },
            bullets: [
              "Trilateration: 3 circles -> one point; overdetermined cases solve as least squares over (dᵢ − ‖p − aᵢ‖)².",
              "Linearization: subtract one anchor's equations to get A·x = b; solve via normal equations.",
              "Centroid: average heard-anchor coordinates — one line of code, room-level accuracy.",
              "DV-hop: hop count × calibrated average hop size; 20-30% of range in isotropic fields, worse with holes.",
              "APIT: point-in-triangle tests over anchor triangles, intersection centre of mass — hardware-free refinement.",
              "Multihop promotion ripples coordinates outward; each promotion compounds error — thresholds + refinement defend.",
            ],
            callout: {
              type: "exam",
              title: "Write the objective, then linearize",
              body: "The derivation marks live in two lines: the objective min Σ (dᵢ − ‖p − aᵢ‖)² and the linearization step (squaring and subtracting one anchor's equation) that turns it into A·x = b. Candidates who only name 'trilateration' get the definition mark; candidates who write the system get the method mark.",
            },
            codeExample: {
              language: "python",
              caption: "trilaterate.py — least-squares multilateration on four anchors",
              code: `import numpy as np

# anchors (x, y) and noisy measured ranges
A_pos = np.array([[0, 0], [10, 0], [0, 10], [10, 10]])
d     = np.array([7.1, 7.2, 7.0, 3.5])   # true position ~ (5, 5)

# linearize: subtract anchor 0's equation from the rest
x0, y0 = A_pos[0]
rows, rhs = [], []
for (xi, yi), di in zip(A_pos[1:], d[1:]):
    rows.append([2*(xi - x0), 2*(yi - y0)])
    rhs.append(di**2 - d[0]**2 - xi**2 + x0**2 - yi**2 + y0**2)

A_, b_ = np.array(rows), np.array(rhs)
p = np.linalg.solve(A_.T @ A_, A_.T @ b_)   # normal equations
print(np.round(p, 2))                        # -> ~ [4.87 4.93]`,
            },
            examQuestions: [
              {
                q: "Explain wireless localization algorithms: trilateration and the least-squares formulation with linearization, the range-free family (centroid, DV-hop, APIT) with their accuracy classes, and iterative multihop localization with its error-propagation problem.",
                marks: 14,
                outline: [
                  "Trilateration: 3 circles intersect; noise -> least squares min Σ(dᵢ − ‖p − aᵢ‖)²",
                  "Linearization by subtracting one anchor's equation: solve A·x = b",
                  "Centroid: average heard anchors; room-level; needs dense anchor placement",
                  "DV-hop: hop count × calibrated average hop size; 20-30% of range; anisotropy hurts",
                  "APIT: anchor-triangle containment via neighbour RSS tests; intersection centre",
                  "Multihop: confident nodes promote to anchors; error compounds with promotion depth",
                  "Defences: confidence thresholds, refinement passes, or centralized MDS-MAP",
                ],
              },
              {
                q: "Explain how DV-hop calibrates its average hop size and why field anisotropy degrades its accuracy.",
                marks: 7,
                outline: [
                  "Anchors know mutual Euclidean distances and hop counts between themselves",
                  "Average hop size = Σ(anchor distances) / Σ(anchor hop counts)",
                  "Unknowns multiply their hop count by the calibrated size",
                  "Anisotropy: obstacles or holes inflate hop counts non-uniformly",
                  "Calibrated size then overestimates distances in the detoured regions",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Wireless sensor node localization systems and practice",
            body: [
              "The algorithms become real in named systems, and the syllabus's phrase 'wireless sensor node localization' expects the system-level view. GPS is the outdoor reference: satellite ToA fixes coordinates to 5-30 m anywhere with sky view, at power and cost levels that restrict it to anchors and mobile gateways. Cricket is the indoor reference: RF-plus-ultrasound TDoA beacons mounted on ceilings let listeners compute room-level positions with centimetre-to-decimetre accuracy, requiring only receiver-side timing — the 29.4 ms arithmetic of section 3.5 deployed as infrastructure. AHLos extends Cricket's ranging across hops with iterative multilateration; SpotON demonstrates RSSI-based tags; MDS-MAP shows the connectivity-only, centralized option.",
              "Practice is a deployment pipeline, and drawing it is the exam's picture question. Survey or GPS-place the anchors first, spacing them around the field's perimeter and interior so error ellipses stay round. Anchors beacon position and time; unknown nodes range to every anchor they hear. Multilateration computes initial positions; refinement passes re-solve with the improved estimates, and multihop promotion extends coverage to nodes beyond anchor range. Finally the coordinates are published to the consumers — routing tables, tracking filters, coverage maps — and kept fresh as anchors are added or moved. Every step has a failure mode the pipeline must absorb: anchor survey errors, ranging outliers, promotion error chains.",
              "The quantitative framing to carry: accuracy targets choose the hardware tier. Ten-centimetre precision demands ultrasound or UWB ranging with least-squares multilateration; metre-level tolerance accepts RSSI multilateration; fraction-of-range tolerance is satisfied by DV-hop or APIT with zero extra hardware. Mean localization error, reported as (1/n) Σ‖p̂ − p‖ or as a percentage of radio range, is the metric every evaluation uses — and the honest evaluations report it against anchor density, because the same algorithm improves from metres to decimetres as anchors tighten around the field.",
              "For the exam: name the systems with one-line characterizations (GPS outdoor anchor-tier, Cricket indoor TDoA infrastructure, AHLos multihop, SpotON RSSI, MDS-MAP connectivity-only), draw the deployment pipeline, and close with the accuracy-hardware-target mapping. That structure answers 'wireless sensor node localization' as a systems question rather than an algorithm recitation — which is exactly the distinction the syllabus draws between this section and the previous one.",
            ],
            keyTerms: [
              { term: "Cricket", definition: "Ceiling beacons with RF + ultrasound TDoA; receiver-side timing gives room-level, cm-scale accuracy." },
              { term: "AHLos", definition: "Multihop TDoA localization with iterative multilateration and confidence-based promotion." },
              { term: "SpotON", definition: "RSSI-based tag localization demonstrating signal-strength positioning." },
              { term: "MDS-MAP", definition: "Centralized multidimensional scaling over the connectivity graph, registered to anchors." },
              { term: "Mean localization error", definition: "(1/n) Σ‖p̂ − p‖, reported in metres or as a fraction of radio range." },
            ],
            table: {
              caption: "The systems, at a glance.",
              headers: ["System", "Technique", "Accuracy", "Deployment note"],
              rows: [
                ["GPS", "satellite ToA", "5-30 m outdoor", "anchors and gateways only — power, cost, no indoors"],
                ["Cricket", "RF + ultrasound TDoA beacons", "cm-dm, room-level", "infrastructure-mounted; receiver-side timing"],
                ["AHLos", "multihop TDoA + iterative multilateration", "sub-metre in dense fields", "error grows with promotion depth"],
                ["SpotON", "RSSI signal-strength tags", "1-2 m", "calibration-heavy"],
                ["MDS-MAP", "connectivity-only MDS, centralized", "coarse", "anchor-free option; register at the end"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A localization deployment pipeline",
              caption: "From surveyed anchors to published coordinates — every stage has a failure mode to absorb.",
              stages: [
                { label: "Survey / GPS the anchors", note: "perimeter + interior spacing" },
                { label: "Anchors beacon", note: "position + time reference" },
                { label: "Nodes range", note: "to every anchor in earshot" },
                { label: "Multilaterate + refine", note: "least squares; promotion extends range" },
                { label: "Publish coordinates", note: "routing, tracking, coverage consumers" },
              ],
            },
            bullets: [
              "GPS: 5-30 m outdoor, anchor-tier only — cost, acquisition power and no indoor fix.",
              "Cricket: RF + ultrasound TDoA from ceiling beacons; cm-dm room-level accuracy, receiver-side timing.",
              "AHLos: multihop TDoA with confidence-based promotion; sub-metre in dense deployments.",
              "SpotON: RSSI tags at 1-2 m; MDS-MAP: centralized, connectivity-only, anchor registration at the end.",
              "Pipeline: survey anchors -> beacon -> range -> multilaterate + refine -> publish coordinates.",
              "Accuracy tier follows the target: 10 cm needs ultrasound/UWB; metres accept RSSI; fractions of range suit DV-hop.",
            ],
            callout: {
              type: "tip",
              title: "Anchor density is the free accuracy lever",
              body: "The same algorithm swings from metres to decimetres as anchor density rises and anchors surround the field. Before recommending fancier ranging hardware, the deployment answer is: add anchors around the perimeter — geometry is cheaper than hardware.",
            },
            examQuestions: [
              {
                q: "Describe wireless sensor node localization systems — GPS, Cricket, AHLos, SpotON and MDS-MAP — with technique, accuracy and deployment role, and draw the pipeline by which a field is localized in practice.",
                marks: 14,
                outline: [
                  "GPS: satellite ToA, 5-30 m, anchors/gateways only (power, cost, no indoors)",
                  "Cricket: RF + ultrasound TDoA ceiling beacons; cm-dm room-level, receiver-side timing",
                  "AHLos: multihop TDoA, iterative multilateration, confidence-based promotion",
                  "SpotON: RSSI tags, 1-2 m, calibration-heavy",
                  "MDS-MAP: centralized MDS over connectivity, registered to anchors",
                  "Pipeline: survey anchors -> beacon -> range -> multilaterate + refine -> publish",
                  "Anchor density and placement are the cheapest accuracy levers",
                ],
              },
              {
                q: "A tracking application needs 50 cm accuracy in an indoor deployment with no GPS. Recommend a localization architecture and justify each choice.",
                marks: 7,
                outline: [
                  "GPS rejected: indoors fails; anchor-tier only",
                  "Choose TDoA ranging (ultrasound beacons, Cricket-style) — cm-dm potential",
                  "Least-squares multilateration over 4+ anchors; refinement passes to suppress outliers",
                  "Perimeter + interior anchor placement keeps error ellipses round",
                  "Metric: mean error (1/n) Σ‖p̂ − p‖ validated against anchor density",
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
      title: "Energy Efficiency and Power Control",
      summary:
        "Unit IV is the power-control unit: the node's energy profile and the energy-hole problem, then passive power conservation — physical-layer modulation and voltage scaling, MAC-layer duty cycling, higher-layer topology control and aggregation — followed by active conservation — traffic-adaptive MAC mechanisms, power-aware routing metrics, and the transport protocols PSFQ, RMST, ESRT and CODA.",
      chapter: {
        number: "04",
        title: "Living on a Battery",
        intro:
          "Chapter 4 covers the need for energy efficiency and power control in wireless sensor networks, passive power conservation mechanisms at the physical, MAC and higher layers, and active power conservation mechanisms at the MAC, network and transport layers.",
        inOneBreath:
          "The radio dominates the energy profile — 56 mW receiving against a 26 kJ battery — so passive conservation makes hardware spend less per packet while active conservation changes behaviour with traffic and topology state. Dynamic voltage scaling buys power proportional to V²f, duty cycling turns five days of battery life into more than a year, and GAF sleeps redundant nodes while the connectivity graph stays equivalent. Power-aware routing chooses between min-cost paths that drain a corridor and min-max battery safety that spreads depletion; transport replaces TCP with hop-by-hop reliability (RMST), paced downstream distribution (PSFQ) and sink-regulated event reliability (ESRT) backed by CODA's congestion control.",
        sections: [
          {
            number: "4.1",
            title: "The need for energy efficiency and power control",
            body: [
              "The need begins with the energy profile, and the profile is lopsided: the radio draws tens of milliwatts while everything else draws milliwatts or less. On a TelosB-class node, receiving costs about 56 mW and transmitting at 0 dBm about 52 mW, the MCU in active mode roughly 5 mW, sensors micro-to-milli-watts, and sleep single-digit microamps. Against a two-AA pack of roughly 26 kJ, continuous reception is five days of life. The classic Pottie-Kaiser comparison prices the imbalance differently: transmitting one kilobit over 100 m costs energy comparable to executing a few million instructions on a 100 MIPS/W processor — communication is three orders of magnitude more expensive than computation, the reason Unit III's in-network processing is an energy technology.",
              "Two structural problems make efficiency a protocol requirement rather than a hardware spec. First, the funnel: in convergecast, nodes near the sink relay everyone else's traffic, so the innermost ring depletes first and the network partitions while most nodes still hold charge — the energy hole, which uniform deployment and uniform power settings guarantee. Second, the idle problem: monitoring traffic is sparse, so a radio that stays on for the rare packet spends almost all its energy on silence — idle listening again, now as the power-control motivation. Both problems are system-level: no per-component tuning fixes a topology that routes every bit through the same ten nodes.",
              "Power control is the complementary discipline: adjusting transmit power per packet to the minimum sufficient for the link. The CC2420 offers eight output levels from -25 to 0 dBm; dropping from 0 to -10 dBm cuts transmit current by roughly a third while shrinking range — and range shrinks mean more hops, more relays, more end-to-end energy. The optimum is therefore not maximum power or minimum power but the setting that minimizes system energy per delivered bit, which couples transmit power to routing density and makes power control a cross-layer decision: the physical layer's dial, the network layer's topology.",
              "The exam framing: open with the profile numbers (56/52 mW radio, 5 mW MCU, µA sleep), state the two structural problems (energy hole, idle listening), quote Pottie-Kaiser for communication-versus-computation, and define power control as the per-packet minimum-sufficient-power discipline with its hop-count coupling. That four-part answer converts 'we should save energy' into the quantitative motivation the syllabus's first bullet asks for.",
            ],
            keyTerms: [
              { term: "Energy hole", definition: "Sink-adjacent ring that relays all convergecast traffic and depletes first, partitioning the network." },
              { term: "Pottie-Kaiser comparison", definition: "Transmitting 1 Kb over 100 m ≈ energy of executing millions of instructions — communication ≫ computation." },
              { term: "Power control", definition: "Per-packet adjustment of transmit power to the minimum sufficient for the link." },
              { term: "TX power levels", definition: "CC2420's eight output settings from -25 to 0 dBm; the physical dial of power control." },
              { term: "System energy per delivered bit", definition: "The objective power control optimizes, coupling TX power to hop count and topology." },
            ],
            table: {
              caption: "The energy profile of a TelosB-class node at 3 V.",
              headers: ["Component", "Current", "Power", "Conservation lever"],
              rows: [
                ["CC2420 receive", "18.8 mA", "56.4 mW", "duty cycling; sleep between checks"],
                ["CC2420 transmit (0 dBm)", "17.4 mA", "52.2 mW", "power control; shorter hops"],
                ["MSP430 active", "1.8 mA", "5.4 mW", "DVFS; sleep ladders (LPM3)"],
                ["MSP430 LPM3", "~1-2 µA", "µW-scale", "the sleep floor — choose low-leakage silicon"],
                ["Sensors + ADC", "0.1-1 mA", "0.3-3 mW", "sample on demand only"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Where the battery actually goes",
              caption: "The pyramid of consumers — the radio dwarfs everything, so every mechanism targets it first.",
              tiers: [
                { label: "Radio: RX 56 mW, TX 52 mW", note: "the dominant consumer by an order of magnitude" },
                { label: "MCU active: ~5 mW", note: "second; shrink with DVFS and sleep ladders" },
                { label: "Sensors + ADC: µW-mW", note: "modest; sample on demand" },
                { label: "Sleep leakage: µA-scale", note: "the floor that ends deep duty cycling's gains" },
              ],
            },
            bullets: [
              "Profile: RX 56 mW, TX 52 mW, MCU ~5 mW active, sensors µW-mW, sleep µA-scale.",
              "26 kJ battery: continuous receive ≈ five days; the radio is the design target.",
              "Pottie-Kaiser: 1 Kb over 100 m ≈ millions of instructions — communication ≫ computation.",
              "Energy hole: convergecast funnels traffic onto the sink-adjacent ring; it dies first.",
              "Idle listening: sparse traffic makes silence the main energy cost.",
              "Power control: minimum sufficient TX power per packet — CC2420's eight levels, coupled to hop count.",
            ],
            callout: {
              type: "exam",
              title: "Quote the profile, not the platitude",
              body: "Answers that say 'energy is important in WSNs' earn nothing. The numbers are the answer: 56 mW receive, 26 kJ pack, five days of continuous listening, Pottie-Kaiser's communication-vs-computation gap. Every energy question of this unit is graded against arithmetic like this.",
            },
            examQuestions: [
              {
                q: "Explain the need for energy efficiency and power control in wireless sensor networks, using the node's energy profile, the Pottie-Kaiser communication-versus-computation comparison, and the energy-hole problem.",
                marks: 14,
                outline: [
                  "Profile: RX 56 mW, TX 52 mW, MCU ~5 mW, sleep µA-scale",
                  "26 kJ battery: ~5 days of continuous receive — the radio dominates",
                  "Pottie-Kaiser: 1 Kb over 100 m ≈ millions of instructions on a 100 MIPS/W processor",
                  "Energy hole: inner convergecast ring relays all traffic and dies first",
                  "Idle listening: sparse traffic spends energy on silence",
                  "Power control: per-packet minimum sufficient TX power (CC2420's eight levels)",
                  "Coupling: lower TX power shrinks range, adds hops — optimize system energy per delivered bit",
                ],
              },
              {
                q: "Why does lowering transmit power not automatically reduce total network energy?",
                marks: 7,
                outline: [
                  "Lower TX power shrinks link range",
                  "Shrunken range adds hops to reach the sink",
                  "Each hop costs receive energy at the relay (56 mW) plus queueing",
                  "Total energy per delivered bit can rise despite cheaper transmissions",
                  "Optimum: the TX setting minimizing system energy — a cross-layer decision",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Passive power conservation: physical-layer mechanisms",
            body: [
              "Passive conservation reduces energy without changing the network's operational behaviour — no new routes, no schedule renegotiation; the hardware simply spends less on the packet it was going to spend it on. The physical layer contributes three families. Modulation scaling: higher-order constellations (M-ary) pack more bits per symbol, so a packet occupies the channel for less time — but each symbol needs more transmit power and more robust coding. The energy-optimal constellation balances shorter on-time against higher power, and the practical form is rate scaling: when buffers are deep, raise the rate to drain them quickly and sleep longer; when shallow, drop the rate and the power.",
              "Dynamic voltage and frequency scaling (DVFS) attacks the MCU with the quadratic law: dynamic power P ∝ C·V²·f. Halving the clock from 8 MHz to 1 MHz and the supply from 3.0 V to 1.8 V scales dynamic energy per cycle by (1.8/3.0)² × (1/8) ≈ 0.045 — about a twentyfold cut per operation, paid for in stretched execution time. For a node that is asleep more than it computes, the exchange is almost always profitable. The third family is the sleep ladder itself: MCU sleep states (MSP430's LPM3 at 1-2 µA), radio power-down modes, and per-component gating that turns off the ADC and sensor conditioning when no sample is due.",
              "Transmit-power control completes the physical-layer set — the per-packet minimum-sufficient-power discipline from section 4.1, now as a passive mechanism: choose the level, transmit, return to idle. The worked arithmetic to carry: a packet that would take 4 ms at 250 kbps and 17.4 mA takes 2 ms at a doubled rate (or a higher constellation), halving radio-on time; at 52 mW that is 104 µJ instead of 208 µJ per frame — before counting the extra sleep the shorter transmission buys. Passive mechanisms are arithmetic: shave milliseconds of awake time per packet and the battery year appears.",
              "The exam framing: define passive conservation in one line (less energy per unchanged behaviour), present modulation scaling, DVFS and the sleep ladder with their formulas and one number each (the V² law, the twentyfold DVFS example, the 1-2 µA floor), and close with the boundary: passive mechanisms cannot fix idle listening or the energy hole, because those are behaviour and topology problems — the next sections' territory. That closing sentence is what distinguishes 'passive' from 'active' in the examiner's rubric.",
            ],
            keyTerms: [
              { term: "Passive conservation", definition: "Reducing energy spent per packet without changing network behaviour or topology." },
              { term: "Modulation scaling", definition: "Raising the constellation or rate to shorten channel occupancy; balanced against symbol power." },
              { term: "DVFS", definition: "Dynamic voltage and frequency scaling; dynamic power P ∝ C·V²·f — quadratic in V." },
              { term: "Sleep ladder", definition: "Graduated MCU/radio sleep states down to µA floors (MSP430 LPM3 at 1-2 µA)." },
              { term: "Rate scaling", definition: "Adjusting data rate to buffer occupancy — drain deep queues fast, sleep longer." },
            ],
            diagram: {
              kind: "flow",
              title: "Per-packet passive decisions",
              caption: "Each packet walks the ladder down to the cheapest hardware state that still delivers it.",
              steps: [
                { label: "Packet queued; check buffer", note: "occupancy drives the rate choice" },
                { label: "Deep buffer? raise rate/constellation", note: "drain fast, sleep sooner" },
                { label: "Quiet? scale V and f down", note: "P ∝ CV²f — quadratic savings" },
                { label: "Transmit at minimum sufficient power", note: "CC2420 level chosen per link" },
                { label: "Return MCU/radio to sleep states", note: "µA floor until next event" },
              ],
            },
            bullets: [
              "Passive = less energy per packet, unchanged behaviour — hardware-level thrift.",
              "Modulation scaling: higher M-ary or rate shortens on-time; balance against symbol power and coding.",
              "DVFS: P ∝ C·V²·f; 3.0 V/8 MHz -> 1.8 V/1 MHz is ~22× less dynamic energy per cycle.",
              "Sleep ladder: MSP430 LPM3 at 1-2 µA is the floor; wake-up latency is the price.",
              "Per-packet power control: eight CC2420 levels; -10 dBm vs 0 dBm is roughly a third of TX current.",
              "Boundary: passive mechanisms cannot fix idle listening or the energy hole — those need active ones.",
            ],
            callout: {
              type: "exam",
              title: "The V² is the formula to remember",
              body: "Write P ∝ C·V²·f and work the example: (1.8/3.0)² × (1/8) ≈ 0.045 — a twentyfold-per-operation dynamic-energy cut. Quadratic dependence on voltage is why DVFS beats clock scaling alone, and it is the one physical-layer formula that appears in nearly every power-conservation answer.",
            },
            codeExample: {
              language: "python",
              caption: "dvfs.py — the quadratic scaling, computed",
              code: `# dynamic energy per cycle ~ C * V^2 * f (per second at frequency f)
C = 1e-9        # farads, illustrative
configs = [
    ("full",   3.0, 8e6),
    ("scaled", 1.8, 1e6),
]

for name, v, f in configs:
    p_dyn = C * v * v * f           # watts (dynamic)
    print(f"{name}: {v:.1f} V, {f/1e6:.0f} MHz -> {p_dyn * 1e6:.2f} uW")

# ratio: (1.8/3.0)^2 * (1/8) ~ 0.045  -> ~22x less dynamic energy per cycle
# price: the same computation stretches ~8x in wall-clock time`,
            },
            examQuestions: [
              {
                q: "Explain passive power conservation at the physical layer: modulation scaling, dynamic voltage and frequency scaling, sleep ladders and per-packet power control, with the governing formulas and one worked number each.",
                marks: 14,
                outline: [
                  "Passive definition: less energy per packet, unchanged behaviour",
                  "Modulation/rate scaling: shorter channel occupancy vs symbol power",
                  "DVFS: P ∝ C·V²·f; 3.0 V/8 MHz -> 1.8 V/1 MHz ≈ 22× less dynamic energy",
                  "Sleep ladder: LPM3 at 1-2 µA; wake-up latency is the price",
                  "Power control: eight CC2420 levels; -10 dBm ≈ ⅓ of TX current",
                  "Worked radio arithmetic: halving on-time halves 52 mW × t per frame",
                  "Boundary: passive cannot fix idle listening or energy holes — active mechanisms follow",
                ],
              },
              {
                q: "Compute the dynamic-power ratio when a mote drops from 3.0 V at 8 MHz to 1.8 V at 1 MHz, and state the cost of the saving.",
                marks: 7,
                outline: [
                  "P ∝ C·V²·f",
                  "Ratio = (1.8/3.0)² × (1/8) = 0.36 × 0.125 = 0.045",
                  "≈ 22× less dynamic energy per operation",
                  "Cost: the same computation takes ~8× longer in wall-clock time",
                  "Profitable when the node sleeps far more than it computes",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Passive power conservation: MAC-layer mechanisms",
            body: [
              "The MAC layer owns the biggest passive lever: keeping the radio off. Duty cycling — sleeping on a schedule between channel checks or listen windows — is the mechanism Unit II's contention family implements, and its arithmetic is this section's spine. A TelosB receiving continuously burns 56 mW against a 26 kJ pack: five days. At a 10% duty cycle the average radio cost falls to ~6 mW and the pack lasts near 50 days. At 1%, the average falls below a milliwatt and the same pack crosses a year — and at that depth sleep leakage (µA-scale) matters more than awake time, so low-leakage silicon belongs in the same conversation.",
              "The three duty-cycle architectures were Unit II's material; here they are re-read as power-conservation mechanisms. Scheduled rendezvous (S-MAC, T-MAC): neighbours share sleep schedules; energy cost is the listen fraction, and adaptivity (T-MAC's early timeout) makes the fraction follow the traffic. On-demand sampling (B-MAC, WiseMAC): receivers wake for microsecond-scale channel checks and senders buy the rendezvous with preambles; the duty cycle is set by the check interval, and preamble energy is the price. Scheduled rendezvous with reservation (TDMA, 802.15.4 superframes with inactive periods): nodes sleep outside their slots, deterministically. All three convert the same equation — energy per second ≈ duty × awake-power + (1 − duty) × sleep-power — into protocols.",
              "Overhearing avoidance and control-overhead trimming are the MAC's secondary passive contributions. Neighbours that sleep for the duration announced in an RTS/CTS exchange (S-MAC) skip frames they would otherwise receive and discard; message passing amortizes handshake energy across burst frames; adaptive error control — switching between ARQ and FEC as channel quality shifts — stops retransmission storms from burning the duty-cycle savings. None of these changes routing or scheduling behaviour; they shave the per-packet energy budget, which is exactly what passive means at the MAC layer.",
              "The exam framing: open with the duty-cycle arithmetic (five days -> ~50 days -> past a year), classify the three architectures with one protocol each, list overhearing avoidance and message passing as the secondary mechanisms, and close with the leakage observation — below roughly 0.5% duty the sleep floor dominates, so deeper duty cycling needs better silicon, not just better schedules. The code sample below runs the arithmetic; carrying its output line for 1% is the cheapest strong sentence in the answer.",
            ],
            keyTerms: [
              { term: "Duty cycling", definition: "Sleeping the radio between checks/windows; energy ≈ duty × awake-power + (1 − duty) × sleep-power." },
              { term: "Scheduled rendezvous", definition: "Shared sleep schedules (S-MAC/T-MAC) or reserved slots (TDMA, 802.15.4)." },
              { term: "On-demand sampling", definition: "Periodic microsecond channel checks with sender preambles (B-MAC/WiseMAC)." },
              { term: "Overhearing avoidance", definition: "Neighbours sleep for RTS/CTS-announced durations, skipping frames not addressed to them." },
              { term: "Sleep leakage floor", definition: "The µA-scale draw below which deeper duty cycling stops paying." },
            ],
            diagram: {
              kind: "cycle",
              title: "The duty cycle as a power mechanism",
              caption: "One loop, one equation — the fraction of the cycle spent awake is the battery's destiny.",
              steps: [
                { label: "Wake at scheduled instant", note: "timer or external event" },
                { label: "CCA / listen window", note: "check for traffic" },
                { label: "Exchange data", note: "RTS/CTS/DATA/ACK as needed" },
                { label: "Nothing heard? early sleep", note: "T-MAC's adaptive exit" },
                { label: "Sleep until next cycle", note: "µA leakage; the cheap 99%" },
              ],
            },
            bullets: [
              "Duty-cycle arithmetic: 100% = 5 days; 10% ≈ 50 days; 1% > 1 year on a 26 kJ pack.",
              "Three architectures: scheduled rendezvous (S-MAC/T-MAC), on-demand sampling (B-MAC/WiseMAC), reservation (TDMA/802.15.4).",
              "One equation: energy/s ≈ duty × awake-power + (1 − duty) × sleep-power.",
              "Adaptivity makes the duty follow traffic — T-MAC's early timeout is the canonical example.",
              "Secondary mechanisms: overhearing avoidance via duration fields; message passing; adaptive ARQ/FEC.",
              "Below ~0.5% duty the sleep floor dominates — deeper savings need low-leakage silicon.",
            ],
            callout: {
              type: "warning",
              title: "The floor that ends the free lunch",
              body: "Duty-cycle gains are not infinite: at 1-2 µA of sleep leakage, a 0.1% duty cycle still burns the sleep floor around the clock. When the arithmetic shows the floor dominating, the honest answer is better silicon or energy harvesting — not another protocol layer. Saying this explicitly is the mark of a complete answer.",
            },
            codeExample: {
              language: "python",
              caption: "dutycycle.py — five days to a year, computed",
              code: `battery = 26000.0        # joules (two AA cells)
P_awake = 0.061          # W: RX 56 mW + MCU 5.4 mW
P_sleep = 15e-6          # W: ~5 uA at 3 V

def life_days(duty):
    avg = P_awake * duty + P_sleep * (1 - duty)
    return battery / avg / 86400

for d in [1.0, 0.1, 0.01, 0.001]:
    print(f"duty {d:7.3%} -> {life_days(d):8.1f} days")
# 100% -> 4.9 days | 10% -> 48.6 | 1% -> 462 | 0.1% -> 940 (floor-dominated)`,
            },
            examQuestions: [
              {
                q: "Explain MAC-layer passive power conservation: the duty-cycle equation, the three duty-cycle architectures with one protocol each, and the secondary mechanisms (overhearing avoidance, message passing, adaptive error control). Include the battery-life arithmetic.",
                marks: 14,
                outline: [
                  "Equation: energy/s ≈ duty × awake-power + (1 − duty) × sleep-power",
                  "Arithmetic: 26 kJ, 61 mW awake -> 5 days; 10% -> ~50 days; 1% > 1 year",
                  "Scheduled rendezvous: S-MAC/T-MAC shared schedules; T-MAC adapts the window",
                  "On-demand sampling: B-MAC/WiseMAC channel checks + preambles",
                  "Reservation: TDMA slots and 802.15.4 inactive periods — deterministic sleep",
                  "Secondary: duration-field overhearing avoidance; message passing; ARQ/FEC switching",
                  "Sleep floor: below ~0.5% duty, µA leakage dominates — silicon becomes the lever",
                ],
              },
              {
                q: "Compute the battery life of a node drawing 61 mW awake and 15 µW asleep on a 26 kJ pack at duty cycles of 10% and 1%.",
                marks: 7,
                outline: [
                  "avg(10%) = 6.1 mW + 13.5 µW ≈ 6.11 mW",
                  "life = 26,000 J / 0.00611 W ≈ 4.25 × 10⁶ s ≈ 49 days",
                  "avg(1%) = 0.61 mW + 14.85 µW ≈ 0.625 mW",
                  "life = 26,000 / 0.000625 ≈ 4.16 × 10⁷ s ≈ 481 days",
                  "Conclusion: the duty cycle, not the battery size, sets the deployment length",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Passive power conservation: higher-layer mechanisms",
            body: [
              "Above the MAC, passive conservation means keeping the network's shape cheap to operate: fewer awake nodes, fewer transmissions, less state — while the network still behaves as users expect. Topology control is the flagship: GAF (Geographic Adaptive Fidelity) divides the field into a virtual grid whose cells are small enough that any node in a cell can reach any node in an adjacent cell (cell side ≈ R/√5, on the order of half the radio range), elects one representative per cell to stay awake and route, and lets duplicates sleep through discovery/active/sleeping states. The connectivity graph is preserved by equivalence: a sleeping node's duties are covered by its cell's representative, and lifetime stretches roughly by the sleep fraction.",
              "SPAN attacks the same problem without geography: nodes elect coordinators using a local rule — a node becomes a coordinator if it connects two components that would otherwise be disconnected — and coordinators rotate with randomized backoffs so the burden spreads. Clustering schemes (LEACH's rotating heads) double as topology control: the routing tax is paid by a small rotating elite instead of everyone. The unifying principle across GAF, SPAN and LEACH is redundancy harvesting — a dense deployment contains more connectivity than it needs, and the surplus is converted directly into sleep time. The worked number: a grid that can keep 1 node in k awake delivers roughly a k-fold reduction in radio-on time while coverage and connectivity hold.",
              "In-network processing and data aggregation (Unit III's machinery) are higher-layer passive conservation by another route: fewer transmissions per delivered answer. Sink mobility belongs here too — a mobile sink sweeping the field prevents any ring from becoming the permanent hotspot, spreading the funnel's depletion; data MULEs (mobile collectors that ferry data physically) go further, letting source nodes transmit short-range only. None of these change how a single packet is transmitted — they change how many packets exist and where they must travel, which is the higher layer's share of passive conservation.",
              "The exam framing: define higher-layer passive conservation, present GAF with its grid equivalence argument (cell side ≈ R/√5, discovery/active/sleeping states), SPAN's coordinator election rule, and clustering-as-topology-control; then aggregation and sink mobility as the traffic-side versions. Close with the equivalence sentence: the network must behave the same to its users — the art is making 'the same' cost a fraction of the energy. That sentence is the distinction between topology control and mere sleeping.",
            ],
            keyTerms: [
              { term: "GAF", definition: "Geographic Adaptive Fidelity: virtual grid, one active representative per cell, duplicates sleep." },
              { term: "Grid equivalence", definition: "Cell side ≤ R/√5 keeps adjacent-cell connectivity while only one node per cell is awake." },
              { term: "SPAN", definition: "Coordinator election by connectivity rule with randomized rotation; coordinators keep the graph connected." },
              { term: "Redundancy harvesting", definition: "Converting deployment surplus (extra nodes/links) into sleep time." },
              { term: "Data MULE", definition: "Mobile collector that ferries data physically, letting nodes transmit short-range only." },
            ],
            table: {
              caption: "Higher-layer passive mechanisms.",
              headers: ["Mechanism", "Layer", "Conserves by", "Overhead"],
              rows: [
                ["GAF grid + rotation", "network/topology", "one active node per cell", "state transitions; location need"],
                ["SPAN coordinators", "network/topology", "minimal connected backbone", "election traffic; rotation"],
                ["LEACH clustering", "network", "rotating fusion elite", "cluster formation per round"],
                ["Aggregation (TAG tree)", "network/application", "fewer transmissions per answer", "merge latency; structure upkeep"],
                ["Sink mobility / MULEs", "architecture", "short-range transmissions; even depletion", "mobility infrastructure"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Flat always-on mesh vs topology-controlled",
              caption: "Same coverage, same connectivity — different numbers of radios that must be awake.",
              left: {
                heading: "Flat, always-on mesh",
                items: [
                  "every node routes all the time",
                  "uniform drain; hotspot ring dies first",
                  "simplest routing, shortest lifetime",
                  "redundancy wasted as simultaneous radio-on time",
                ],
              },
              right: {
                heading: "Topology-controlled (GAF/SPAN)",
                items: [
                  "one representative per cell/region awake",
                  "duplicates sleep; graph stays equivalent",
                  "lifetime stretches roughly by the sleep fraction",
                  "costs: election traffic, state transitions",
                ],
              },
            },
            bullets: [
              "GAF: virtual grid, cell side ≤ R/√5 keeps adjacent cells connected; one active per cell; duplicates sleep.",
              "GAF states: discovery, active, sleeping — with randomized rotation of the representative role.",
              "SPAN: a node coordinates when it would otherwise connect two components; randomized backoff spreads the burden.",
              "Clustering (LEACH) is topology control with a fusion duty added.",
              "Aggregation and sink mobility conserve on the traffic side: fewer packets, moving funnel.",
              "Unifying principle: harvest redundancy — surplus connectivity becomes sleep time at equivalent behaviour.",
            ],
            callout: {
              type: "exam",
              title: "Equivalence is the definition",
              body: "The one-line definition that earns the marks: topology control keeps the network behaviour-equivalent — connected, covering, answering — while a fraction of nodes sleep. GAF's grid equivalence (side ≤ R/√5) is the concrete version; state it and the mechanism follows logically.",
            },
            examQuestions: [
              {
                q: "Explain higher-layer passive power conservation: GAF's virtual grid and states, SPAN's coordinator election, clustering as topology control, and the traffic-side mechanisms of aggregation and sink mobility.",
                marks: 14,
                outline: [
                  "Definition: behaviour-equivalent network with fewer awake nodes and transmissions",
                  "GAF: grid cells with side ≤ R/√5; discovery/active/sleeping; one representative per cell",
                  "Equivalent connectivity while duplicates sleep — lifetime up by the sleep fraction",
                  "SPAN: coordinator when locally connecting two components; randomized rotation",
                  "LEACH clustering: rotating elite pays the routing and fusion tax",
                  "Aggregation: fewer transmissions per answer (Unit III's funnel)",
                  "Sink mobility / data MULEs: even depletion; short-range transmissions",
                ],
              },
              {
                q: "Justify GAF's cell-side bound of R/√5 and explain how the network remains connected while most nodes sleep.",
                marks: 7,
                outline: [
                  "Any node in a cell must reach any node in an adjacent cell",
                  "Worst-case intra-cell separation plus inter-cell gap is bounded by the geometry",
                  "Side ≤ R/√5 guarantees that bound stays within radio range R",
                  "Each cell keeps one active representative; adjacent cells' representatives link the graph",
                  "Sleeping nodes are equivalent duplicates — connectivity and coverage persist",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Active power conservation: MAC-layer mechanisms",
            body: [
              "Active conservation changes behaviour in response to observed state — traffic levels, channel quality, contention — rather than spending a fixed budget per packet. At the MAC layer the canonical knobs are four. Adaptive duty cycling: the listen window or check interval lengthens or shortens with observed load (T-MAC's early timeout is the reactive form; LPL check-interval switching the proactive one). Packet-size tuning: every frame carries fixed overhead — preamble, headers, ACK — so energy per useful byte falls as payloads grow; but longer frames suffer higher error probability, e^(−BER·L) style, and retransmissions invert the saving. The optimum frame length sits where the overhead amortization meets the error curve, and it moves with the channel.",
              "Adaptive error control is the third knob and the most instructive. ARQ spends energy on retransmissions when the channel is lossy; FEC spends energy on redundant bits always. At low bit-error rates ARQ wins (few retransmissions, no coding overhead); past a BER threshold the retransmission probability explodes and FEC — or hybrid ARQ with FEC beneath — wins. A MAC that measures the channel and switches schemes is doing active conservation: the same packet travels by the cheaper mechanism as conditions change. The fourth knob is RTS/CTS toggling: handshakes pay for themselves only above a contention-and-packet-length threshold, so sensing contention and disabling the handshake for small frames under quiet conditions is a direct energy save.",
              "The worked frame-size arithmetic to quote: with ~40 µJ of fixed per-frame cost and 2 µJ per byte of payload cost, a 20-byte frame spends 80 µJ total (4 µJ/byte) while a 60-byte frame spends 160 µJ (2.7 µJ/byte) — amortization argues for bundling. But at a frame-error probability that grows with length, the expected cost multiplies by 1/(1 − p_frame); if the 60-byte frame doubles the error probability from 2% to 8%, its expected cost rises to ~174 µJ per delivered frame against the small frame's ~82 µJ — the optimum sits in between and moves with the channel. Active conservation is this calculation, executed continuously.",
              "The exam framing: define active conservation (behaviour adapts to state), present the four MAC knobs — adaptive duty cycle, packet-size tuning, ARQ/FEC switching, RTS/CTS toggling — with the condition that triggers each, and work the frame-size example with the error multiplier. Close with the boundary: MAC-layer actives still cannot reshape the topology; that is the network layer's active share, next section.",
            ],
            keyTerms: [
              { term: "Active conservation", definition: "Mechanisms that change behaviour with observed traffic, channel or contention state." },
              { term: "Packet-size tuning", definition: "Balancing fixed per-frame overhead amortization against length-dependent error probability." },
              { term: "ARQ vs FEC switching", definition: "Retransmission-based recovery at low BER; coding-based recovery past the BER threshold." },
              { term: "RTS/CTS toggling", definition: "Disabling handshakes for small frames under low contention; enabling them past the threshold." },
              { term: "Expected-cost multiplier", definition: "1/(1 − p_frame): the retransmission inflation that moves the optimal frame length." },
            ],
            table: {
              caption: "The four MAC-layer active knobs and their triggers.",
              headers: ["Knob", "Adapts to", "Rule of thumb"],
              rows: [
                ["Adaptive duty cycle", "observed traffic load", "shorten windows/empty timeouts when quiet"],
                ["Packet-size tuning", "frame overhead vs BER", "bundle frames until errors multiply the cost"],
                ["ARQ/FEC switching", "channel BER", "ARQ below threshold; FEC/hybrid above"],
                ["RTS/CTS toggling", "contention + frame size", "skip handshakes for small frames when quiet"],
                ["Rate/backoff adaptation", "channel quality", "drop rate and widen backoff as BER rises"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing the frame strategy",
              caption: "Fixed overhead and channel errors pull in opposite directions — the quadrant decides the policy.",
              axes: { x: "packet length: short -> long", y: "channel BER: low -> high" },
              quadrants: [
                { label: "Fragment or FEC", note: "short frames survive; long frames drown in retries" },
                { label: "FEC mandatory", note: "long frames need coding before length helps" },
                { label: "Bundle packets", note: "fixed headers dominate — merge payloads" },
                { label: "Efficiency sweet spot", note: "long frames, low BER, ARQ sufficient" },
              ],
            },
            bullets: [
              "Active = behaviour follows state: traffic, channel quality, contention.",
              "Adaptive duty cycling: empty-timeout (T-MAC) and check-interval switching are the reactive and proactive forms.",
              "Frame arithmetic: 40 µJ fixed + 2 µJ/byte -> 20 B at 4 µJ/B vs 60 B at 2.7 µJ/B; errors multiply by 1/(1 − p).",
              "ARQ wins at low BER; past the threshold, FEC or hybrid ARQ wins — a MAC that switches is conserving actively.",
              "RTS/CTS pays only above a contention-and-length threshold; toggle it by measurement.",
              "Boundary: MAC actives cannot reshape topology — the network layer's turn is next.",
            ],
            callout: {
              type: "tip",
              title: "The threshold is the answer",
              body: "For every MAC active mechanism, the examiner wants the trigger condition, not just the mechanism: BER threshold for ARQ/FEC switching, contention-plus-length threshold for RTS/CTS, load threshold for duty-cycle adaptation. Name the trigger and the number that guards it.",
            },
            examQuestions: [
              {
                q: "Explain active power conservation at the MAC layer: adaptive duty cycling, packet-size tuning with the error multiplier, ARQ/FEC switching, and RTS/CTS toggling — including the trigger condition for each.",
                marks: 14,
                outline: [
                  "Active definition: behaviour adapts to observed state",
                  "Adaptive duty cycle: shorten listen windows/check intervals under light load",
                  "Packet-size tuning: fixed overhead amortizes (40 µJ + 2 µJ/B), but expected cost × 1/(1 − p_frame)",
                  "Worked: 20 B at 4 µJ/B vs 60 B at 2.7 µJ/B before errors; optimum moves with BER",
                  "ARQ below the BER threshold; FEC/hybrid above it — switch by measurement",
                  "RTS/CTS toggling: handshakes pay above contention-and-length thresholds only",
                  "Boundary: MAC actives leave topology untouched — network-layer actives follow",
                ],
              },
              {
                q: "A channel's frame-error probability rises from 2% to 8% when frame length doubles. Show why the longer frame's expected energy advantage can invert.",
                marks: 7,
                outline: [
                  "Expected cost = nominal cost / (1 − p_frame)",
                  "Small frame: ~80 µJ / 0.98 ≈ 82 µJ per delivered frame",
                  "Long frame: ~160 µJ / 0.92 ≈ 174 µJ per delivered frame",
                  "Per-byte the long frame is still cheaper — but retries and latency shift the optimum",
                  "Conclusion: the optimal length is channel-dependent — hence adaptive tuning",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Active power conservation: network-layer mechanisms",
            body: [
              "The network layer's active conservation is power-aware routing: choosing paths by energy state, not just reachability. The metrics split into two philosophies. Min-cost routing minimizes total path energy — transmit plus receive per hop — and finds the cheapest corridor to the sink; its failure is concentration: the same corridor drains repeatedly, and its weakest node dies first, creating the energy hole. Min-max battery routing (MTP/MRPC lineage) instead maximizes the minimum residual power along the path — accepting slightly longer or more expensive routes to protect the weakest node; lifetime is a min-max quantity, so the metric matches the objective. GEAR's learned cost blends both: distance to the target plus residual energy, steering around weak regions while still converging geographically.",
              "The worked contrast is the exam's quantitative core. A min-cost path of 3 hops at 20 µJ per transmission drains ~60 µJ per packet from one corridor; a min-max alternative of 4 hops at 20 µJ spends ~80 µJ — 33% more energy per packet — but distributes the drain across nodes whose batteries differ by 40%. If the corridor's weakest node held 30% charge and the alternative's weakest 70%, the network's first death moves from days away to weeks away for a 33% per-packet premium. That trade — per-packet optimality versus system lifetime — is the entire content of power-aware routing, and every metric in the table is a point on that dial.",
              "Load spreading is the second family: multipath rotation (Unit II's disjoint and braided paths), probabilistic forwarding that shuffles traffic across eligible next hops, and hierarchical rotation (LEACH's head rotation is a network-layer conservation mechanism as much as a routing one). Sink mobility is the third: moving the funnel's apex prevents any ring from holding the hotspot permanently. Each mechanism spends a little optimality — longer paths, extra headers, mobility infrastructure — to buy lifetime, which is the definition of active conservation at this layer: the routing behaviour itself changes with network state.",
              "The exam framing: define network-layer active conservation, present min-cost versus min-max with the 33%-premium worked contrast, list load-spreading mechanisms (multipath rotation, probabilistic forwarding, head rotation), and close with sink mobility as the architectural version. The fork diagram — what does the metric minimize? — organizes the answer, and the sentence 'lifetime is a min-max problem, so min-cost routing optimizes the wrong quantity' is the conclusion examiners look for.",
            ],
            keyTerms: [
              { term: "Min-cost routing", definition: "Minimizes total path energy; optimal per packet, concentrates drain on one corridor." },
              { term: "Min-max battery routing (MTP/MRPC)", definition: "Maximizes the minimum residual power along the path; matches lifetime's min-max nature." },
              { term: "GEAR cost", definition: "Learned cost blending hop distance and residual energy — geographic routing with power awareness." },
              { term: "Load spreading", definition: "Multipath rotation, probabilistic forwarding and head rotation that distribute depletion." },
              { term: "Sink mobility", definition: "Moving the funnel's apex so no ring holds the hotspot permanently." },
            ],
            table: {
              caption: "Power-aware routing metrics and their consequences.",
              headers: ["Metric", "Definition", "Consequence"],
              rows: [
                ["Min-cost", "Σ per-hop TX+RX energy", "cheapest path; corridor depletion, energy hole"],
                ["Min-max battery (MTP/MRPC)", "maximize the path's minimum residual", "longer paths; uniform depletion; longest lifetime"],
                ["Energy × delay", "energy weighted by latency", "balances responsiveness and drain"],
                ["GEAR learned cost", "distance blended with residual energy", "steers around weak regions, still geographic"],
                ["Load spreading", "rotate among multipath candidates", "resilience plus even wear"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "What does the routing metric minimize?",
              caption: "Per-packet optimality and system lifetime are different objectives — the metric picks the winner.",
              start: "Choose the power-aware metric",
              branches: [
                { label: "Minimize path energy (min-cost)", outcome: "cheapest corridor; weakest node dies first — the lifetime trap", good: false },
                { label: "Protect the weakest node (min-max)", outcome: "longer paths, balanced depletion, longest network lifetime", good: true },
                { label: "Guarantee delay first (SPEED-style)", outcome: "velocity-based forwarding; energy is secondary", good: true },
                { label: "Spread the load (multipath/probabilistic)", outcome: "resilience plus even wear across the field", good: true },
              ],
            },
            bullets: [
              "Power-aware routing = paths chosen by energy state, actively re-chosen as state changes.",
              "Min-cost: cheapest corridor, optimal per packet — concentrates drain and creates the energy hole.",
              "Min-max (MTP/MRPC): protect the weakest node; e.g. +33% per-packet energy for a 40% better weakest battery.",
              "GEAR's learned cost blends distance and residual energy — geographic routing with power awareness.",
              "Load spreading: multipath rotation, probabilistic forwarding, LEACH-style head rotation.",
              "Sink mobility moves the funnel's apex — the architectural cure for permanent hotspots.",
            ],
            callout: {
              type: "exam",
              title: "Lifetime is a min-max problem",
              body: "The sentence that organizes the whole section: network lifetime ends when the weakest relay dies, so routing that optimizes average or per-packet energy (min-cost) optimizes the wrong quantity. Min-max battery metrics cost a per-packet premium — quote the 33%-for-40% example — and buy the system extra weeks. That framing is the full-mark conclusion.",
            },
            examQuestions: [
              {
                q: "Explain active power conservation at the network layer: min-cost versus min-max battery routing metrics, GEAR's learned cost, load-spreading mechanisms and sink mobility, with a worked contrast of the per-packet premium versus lifetime gain.",
                marks: 14,
                outline: [
                  "Network-layer active: routing behaviour changes with energy state",
                  "Min-cost: Σ per-hop energy; cheapest corridor; concentrates drain — energy hole",
                  "Min-max battery (MTP/MRPC): maximize the path's minimum residual",
                  "Worked: 3-hop 60 µJ vs 4-hop 80 µJ — 33% premium protects a 40% stronger weakest node",
                  "GEAR: learned cost = distance + residual energy; steers around weak regions",
                  "Load spreading: multipath rotation, probabilistic forwarding, head rotation",
                  "Sink mobility: moving funnel apex prevents permanent hotspots",
                ],
              },
              {
                q: "Why can min-cost routing shorten a network's lifetime even though every packet travels its cheapest path?",
                marks: 7,
                outline: [
                  "Lifetime ends at the first node death — a min-max quantity",
                  "Min-cost repeatedly selects the same corridor",
                  "That corridor's weakest node depletes first and partitions the network",
                  "Most nodes still hold charge; the system fails early anyway",
                  "Remedy: min-max metrics or load spreading that accept per-packet premiums",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Active power conservation: transport-layer mechanisms",
            body: [
              "Transport in a sensor network replaces TCP's end-to-end assumptions with hop-conscious mechanisms, and the syllabus's active mechanisms live here. PSFQ (Pump Slowly, Fetch Quickly) solves the downstream problem — distributing code and bulky data from sink to nodes reliably. It pumps data hop by hop at a deliberately paced rate (T_min/T_max spacing between frames), so caching at every hop is orderly, and any node that detects a gap fetches aggressively with NACKs — fast, local recovery instead of end-to-end retransmission. Proactive fetch requests missing segments ahead of receipt when losses cluster. The pacing is the energy mechanism: slow pumps prevent congestion from ever forming, which is cheaper than recovering from it.",
              "RMST (Reliable Multi-Segment Transport) solves the upstream problem for large, fragmented event data: fragments are cached at every hop, and NACK-based recovery happens between adjacent hops rather than across the whole path — reliability with short retransmission loops and no per-packet end-to-end ACK tax. ESRT (Event-to-Sink Reliable Transport) regulates the upstream event flow from the sink side: the sink measures delivered versus required event reliability and adjusts the sources' reporting rate across five operating regions (insufficient reliability with and without congestion, and sufficient reliability with and without congestion, plus the optimal point) — the only protocol in the family whose controller sits entirely at the sink, which is why it scales.",
              "CODA (Congestion Detection and Avoidance) is the congestion specialist: nodes detect congestion locally (channel sampling plus buffer occupancy), react with open-loop backpressure — a suppression broadcast that mutes upstream sources for a while — and, under persistent congestion, close the loop with the sink ACKing regulated sources. The energy logic is uniform across all four: recover locally, not end to end; regulate at the source, not the wire; prevent congestion rather than survive it. Retransmission energy is the budget these protocols guard — every avoided end-to-end retry is a multi-hop double-spend avoided.",
              "The exam framing: state why TCP fails (per-hop loss on long multi-hop paths makes end-to-end retransmission ruinous), then one paragraph per protocol with its direction (PSFQ downstream, RMST and ESRT and CODA upstream), its mechanism (pacing + NACK; per-hop caching; sink-side rate control; local detection + backpressure + closed loop), and the table as the comparison skeleton. The direction distinction — PSFQ is the downstream protocol, the other three upstream — is the slip the examiner tests.",
            ],
            keyTerms: [
              { term: "PSFQ", definition: "Pump Slowly, Fetch Quickly: paced downstream distribution with NACK-based rapid local recovery." },
              { term: "RMST", definition: "Reliable Multi-Segment Transport: fragmented upstream data cached per hop; NACK recovery between adjacent hops." },
              { term: "ESRT", definition: "Event-to-Sink Reliable Transport: sink measures reliability and adjusts source rates across five operating regions." },
              { term: "CODA", definition: "Congestion Detection and Avoidance: local detection, open-loop backpressure, sink-closed-loop regulation." },
              { term: "Hop-by-hop reliability", definition: "Recovery between adjacent nodes instead of end to end — the energy-preserving transport pattern." },
            ],
            table: {
              caption: "The transport family compared.",
              headers: ["Protocol", "Direction", "Goal", "Mechanism"],
              rows: [
                ["PSFQ", "sink -> nodes", "reliable code/data distribution", "paced pumping (T_min/T_max) + NACK fetch + proactive fetch"],
                ["RMST", "nodes -> sink", "reliable fragmented events", "per-hop fragment caching + NACK between adjacent hops"],
                ["ESRT", "nodes -> sink", "event reliability at minimum energy", "sink measures reliability; adjusts source rate (five regions)"],
                ["CODA", "nodes -> sink", "congestion avoidance", "channel/buffer detection; backpressure; sink closed loop"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "PSFQ's downstream pipeline",
              caption: "Slow pumps and fast repairs — congestion is prevented, not survived.",
              stages: [
                { label: "Sink injects data/code", note: "fragmented for hop-by-hop caching" },
                { label: "Pump: forward at paced rate", note: "T_min/T_max spacing per hop" },
                { label: "Gap detected at a node", note: "missing segment noticed locally" },
                { label: "Fetch quickly: NACK upstream", note: "local recovery, short loop" },
                { label: "Proactive fetch + report", note: "repair ahead of loss; completion reported" },
              ],
            },
            bullets: [
              "TCP fails in WSNs: end-to-end retransmission over long lossy paths multi-spends multi-hop energy.",
              "PSFQ (downstream): pump slowly (T_min/T_max), fetch quickly with NACKs, proactive fetch for clustered loss.",
              "RMST (upstream): fragments cached per hop; NACK recovery only between adjacent hops.",
              "ESRT (upstream): sink-side controller; five operating regions between reliability and congestion.",
              "CODA (upstream): local congestion detection, open-loop backpressure suppression, sink-closed-loop regulation.",
              "Uniform energy logic: recover locally, regulate at the source, prevent congestion rather than survive it.",
            ],
            callout: {
              type: "exam",
              title: "PSFQ goes down, the rest go up",
              body: "The slip the examiner tests: PSFQ is the downstream protocol — code and configuration from sink to nodes. RMST, ESRT and CODA are upstream, from sources to sink. State the direction first in every answer; the mechanisms then fall into place and the comparison table writes itself.",
            },
            examQuestions: [
              {
                q: "Explain PSFQ, RMST, ESRT and CODA as active transport-layer mechanisms: direction, goal, mechanism and the energy logic they share. Contrast them with end-to-end TCP.",
                marks: 14,
                outline: [
                  "TCP fails: end-to-end retransmission over multi-hop lossy paths multi-spends energy",
                  "PSFQ: downstream; pump slowly (T_min/T_max), fetch quickly via NACK, proactive fetch",
                  "RMST: upstream; fragmented data cached per hop; NACK between adjacent hops",
                  "ESRT: upstream; sink measures reliability and adjusts source rates across five regions",
                  "CODA: upstream; local detection (channel + buffer), open-loop backpressure, closed-loop regulation",
                  "Shared logic: local recovery, source-side regulation, congestion prevention",
                  "Every avoided end-to-end retry is a multi-hop double-spend avoided",
                ],
              },
              {
                q: "Explain ESRT's five operating regions and why placing the controller at the sink makes it scalable.",
                marks: 7,
                outline: [
                  "Sink observes delivered vs required event reliability and congestion state",
                  "Regions: low reliability without/with congestion; high reliability without/with congestion; optimal",
                  "Controller action: raise or lower the sources' reporting rate accordingly",
                  "No per-node state at sources — they only obey a rate command",
                  "Sink-side control scales: one controller, n obedient sources",
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
      title: "Security in Wireless Sensor Networks",
      summary:
        "Unit V closes with security: the fundamentals of network security and its primitives, why 4 KB of RAM and an exposed broadcast channel change every assumption, the attack catalogue from jamming and node capture through Sybil, sinkhole, wormhole and hello flood, the SPINS suite with SNEP and μTESLA, key management from pre-distribution to LEAP, and the security machinery of IEEE 802.15.4 and ZigBee.",
      chapter: {
        number: "05",
        title: "Security on a Shoestring",
        intro:
          "Chapter 5 covers the fundamentals of network security, the challenges of security in wireless sensor networks, security attacks in sensor networks, protocols and mechanisms for security, and IEEE 802.15.4 and ZigBee security.",
        inOneBreath:
          "Security on a mote is security under rationing: 4-10 KB of RAM, an 8 MHz CPU and an eavesdroppable broadcast channel, with node capture as a standing possibility. Elliptic-curve cryptography beats RSA roughly thirteenfold on an Atmega128 (0.81 s versus 10.99 s for the private operation), so sensor cryptography is symmetric primitives and hashes, with asymmetric keys only where unavoidable. Attacks arrange by layer — jamming and capture physically, exhaustion on the link, sinkhole, wormhole, Sybil and hello flood in the network, desynchronization in transport. SPINS authenticates broadcasts by disclosing hash-chain keys late; LEAP erases its master key after setup time; and 802.15.4's AES-CCM* plus ZigBee's trust center deliver the standardized machinery.",
        sections: [
          {
            number: "5.1",
            title: "Fundamentals of network security",
            body: [
              "Security fundamentals begin with the service list, and every later section maps onto it. Confidentiality: only intended readers can read data — encryption's job. Integrity: data arrives unmodified — message authentication codes' job. Authentication: the claimed sender is the real sender — MACs and signatures' job. Availability: the network answers when asked — the service jamming and exhaustion attack. Freshness: data is recent, not replayed — counters' and timestamps' job. Non-repudiation rounds out the classical list, though it matters least on motes. Any exam question about 'security requirements' is this list plus one sensor-network twist per item: availability is scarce by design (duty cycling), freshness is implicit in event reporting, and authentication must work under capture.",
              "The primitives under the services are two crypto families and a hash. Symmetric cryptography (AES) encrypts and authenticates with one shared key: fast — hardware AES on the CC2420 processes a 16-byte block in tens of microseconds — but every pair must share a key, making distribution the problem (section 5.5). Asymmetric cryptography (RSA, ECC) needs no shared secret and enables signatures and broadcast authentication, but it is expensive: on the Atmega128 reference platform, RSA-1024's private operation takes about 11 seconds while a 160-bit ECC point multiplication takes about 0.81 seconds — the thirteenfold gap making ECC the only viable asymmetric option on motes. Hash functions compress arbitrary input to fixed digests; chained, they build μTESLA's one-way key chains.",
              "The service-to-mechanism mapping is the worked content: confidentiality = symmetric encryption with per-message counters (semantic security: the same plaintext never encrypts to the same ciphertext twice); integrity + authentication = a MAC over the ciphertext and header; freshness = the counter included in the MAC so replays fail verification; broadcast authentication = μTESLA's delayed key disclosure (section 5.4); key management = the foundation under all of it. On motes the mapping is realized in hardware where possible: the CC2420's AES engine means link encryption costs microseconds, not milliseconds — the difference between security that fits the duty cycle and security that destroys it.",
              "The exam framing: list the services with one-line definitions, present symmetric versus asymmetric with the Atmega128 numbers (0.81 s ECC versus 10.99 s RSA private operation), state the hash-chain construction, and close with the mote-specific constraint — security must cost microseconds because the duty cycle cannot afford milliseconds. That last sentence links this section to every later one and is the distinction the examiner rewards.",
            ],
            keyTerms: [
              { term: "Security services", definition: "Confidentiality, integrity, authentication, availability, freshness, non-repudiation." },
              { term: "Symmetric cryptography", definition: "One shared key for encryption/MAC; fast (AES hardware: tens of µs per block) but needs key distribution." },
              { term: "Asymmetric cryptography", definition: "Keypair-based; enables signatures — on motes only ECC is feasible (0.81 s vs RSA's 10.99 s private op)." },
              { term: "Semantic security", definition: "Encryption with counters/nonces so identical plaintexts produce different ciphertexts." },
              { term: "One-way key chain", definition: "K_i = F(K_{i+1}) with F a hash; keys disclosed in reverse order authenticate broadcasts (μTESLA)." },
            ],
            table: {
              caption: "Symmetric vs asymmetric on a mote — the numbers that decide.",
              headers: ["Property", "Symmetric (AES)", "Asymmetric (ECC / RSA)"],
              rows: [
                ["Keys per pair", "one shared secret", "keypair; no shared secret needed"],
                ["Speed on Atmega128", "hardware: tens of µs per 16-B block", "ECC P-160 ~0.81 s; RSA-1024 private ~10.99 s"],
                ["Memory", "16-byte key + state", "kilobyte-scale tables and code"],
                ["Gives", "confidentiality, integrity, authentication", "signatures, broadcast authentication"],
                ["WSN role", "default for all links", "bootstrap and broadcast auth only"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The security service stack",
              caption: "Services stack on foundations — key management underlies everything above it.",
              layers: [
                { label: "Availability", note: "answers when asked — jamming/exhaustion attack it" },
                { label: "Authentication + integrity", note: "MACs, signatures, μTESLA" },
                { label: "Confidentiality", note: "AES-CCM*, SNEP counter-mode" },
                { label: "Freshness", note: "counters and timestamps in the MAC" },
                { label: "Key management", note: "the foundation: pre-distribution, LEAP, trust centers" },
              ],
            },
            bullets: [
              "Services: confidentiality, integrity, authentication, availability, freshness, non-repudiation.",
              "Symmetric (AES): fast — CC2420 hardware, tens of µs per 16-byte block; the default everywhere.",
              "Asymmetric on motes: ECC P-160 point multiply ~0.81 s vs RSA-1024 private op ~10.99 s — ~13× gap.",
              "Semantic security: counters/nonces so identical plaintexts never repeat ciphertexts.",
              "Hash chains: K_i = F(K_{i+1}); disclosed in reverse, they authenticate broadcasts (μTESLA, section 5.4).",
              "Mote constraint: security must cost microseconds — the duty cycle cannot afford milliseconds.",
            ],
            callout: {
              type: "exam",
              title: "The 0.81 s versus 10.99 s contrast",
              body: "The fastest way to answer 'why not RSA on motes': on the Atmega128 reference platform, a 160-bit ECC point multiplication takes about 0.81 s while RSA-1024's private operation takes about 10.99 s — a thirteenfold gap. Quote it once and every design choice that follows (symmetric-first, ECC only for bootstrap) is justified.",
            },
            examQuestions: [
              {
                q: "Explain the fundamental security services and cryptographic primitives for wireless sensor networks: the service list, symmetric versus asymmetric cryptography with performance numbers on mote-class hardware, and the role of hash chains.",
                marks: 14,
                outline: [
                  "Services: confidentiality, integrity, authentication, availability, freshness, non-repudiation",
                  "Symmetric AES: shared keys; hardware ~tens of µs per 16-byte block (CC2420)",
                  "Asymmetric: RSA-1024 private op ~10.99 s vs ECC P-160 ~0.81 s on Atmega128 — ~13× gap",
                  "Consequence: symmetric-first design; ECC only for bootstrap/signatures",
                  "Hashes: fixed digests; chained as one-way key chains for broadcast auth",
                  "Semantic security: counters so plaintexts never repeat ciphertexts",
                  "Mote constraint: security must fit the duty cycle — microseconds, not milliseconds",
                ],
              },
              {
                q: "Map each security service to the primitive that delivers it in a WSN, and state the sensor-specific twist for two of the services.",
                marks: 7,
                outline: [
                  "Confidentiality -> symmetric encryption with counters (semantic security)",
                  "Integrity + authentication -> MAC over ciphertext and header",
                  "Freshness -> counters/timestamps included in the MAC",
                  "Broadcast authentication -> μTESLA delayed key disclosure",
                  "Availability -> anti-jamming spread spectrum; the twist: duty cycling already limits it",
                  "Authentication's twist: must hold under node capture, not just outsider attack",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Challenges of security in wireless sensor networks",
            body: [
              "Every classical security assumption breaks on a mote, and the challenge list is the systematic account. Resource constraints: 4-10 KB of RAM cannot hold big key tables or crypto code; an 8 MHz CPU runs asymmetric primitives in seconds; and every cryptomicrosecond is billed against the duty cycle. The wireless medium is a broadcast channel: eavesdropping is passive and free, injection is trivial, and there is no per-physical-port identity to authenticate against. Physical exposure: nodes are deployed unattended in the field, so an adversary can capture one, extract its keys and code, and clone it — the threat no laptop-network security model contains.",
              "Infrastructure absence compounds everything: no online trusted third party, no PKI at mote scale, no operators to re-key a field of a thousand nodes. Scale makes manual configuration impossible — key management must be automatic and local. Dynamic topology (sleep cycles, failures, occasional mobility) means neighbour sets churn, so any pairwise trust established today may reference a node that is asleep, dead or replaced tomorrow. And heterogeneity of adversary classes matters for defence design: a mote-class adversary commands captured motes with identical capabilities; a laptop-class adversary brings orders-of-magnitude more power, range and crypto — and the defences differ for each.",
              "The capture problem deserves its own arithmetic because it drives all of Unit V's key management. A node holding a network-wide key betrays the whole field on capture; a node holding pairwise keys betrays only its links; a node holding a random ring of k keys from a pool of P betrays a k/P fraction of possible links — which is exactly why section 5.5's schemes differ. The memory arithmetic sharpens it: 16-byte keys at 200 keys per node is 3.2 KB — most of a Mica2's RAM — so resilience, memory and connectivity form a three-way trade every scheme must price.",
              "The exam framing: present the challenges as constraints with consequences — resources, broadcast medium, physical exposure, no infrastructure, scale, churn, adversary classes — each with its consequence named. The matrix diagram (mote-class versus laptop-class, external versus internal) organizes the adversary half; the table maps constraint to consequence. The closing sentence: sensor-network security is security under capture — every mechanism must assume one of its own nodes is the adversary.",
            ],
            keyTerms: [
              { term: "Node capture", definition: "Physically extracting keys and code from a deployed node — the standing insider threat." },
              { term: "Mote-class adversary", definition: "An attacker with captured motes' capabilities — same hardware, same radios." },
              { term: "Laptop-class adversary", definition: "An attacker with powerful hardware: wide jamming, strong cryptanalysis, long range." },
              { term: "Key ring", definition: "A node's random subset of k keys drawn from a pool of P (Eschenauer-Gligor pre-distribution)." },
              { term: "Capture resilience", definition: "The fraction of the network's security that survives the compromise of one or more nodes." },
            ],
            table: {
              caption: "Constraint -> security consequence.",
              headers: ["Constraint", "Consequence"],
              rows: [
                ["4-10 KB RAM", "no large key tables; compact crypto code only"],
                ["8 MHz CPU", "asymmetric ops in seconds — symmetric-first design"],
                ["Broadcast medium", "eavesdropping and injection are free; no port identity"],
                ["Unattended field", "node capture extracts keys — insider threat assumed"],
                ["No PKI / no operators", "key management must be automatic and local"],
                ["Sleep-cycle churn", "pairwise trust references sleeping or dead neighbours"],
                ["Adversary classes", "mote-class vs laptop-class demand different defences"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "The adversary map",
              caption: "Two axes decide the threat model — and each quadrant demands different defences.",
              axes: { x: "mote-class -> laptop-class", y: "external -> internal" },
              quadrants: [
                { label: "Laptop-class + internal", note: "captured node plus powerful tools — the worst case" },
                { label: "Laptop-class + external", note: "wide-range jamming, traffic analysis, no keys" },
                { label: "Mote-class + external", note: "eavesdropping, replay at node scale" },
                { label: "Mote-class + internal", note: "compromised motes with valid keys — capture resilience is the defence" },
              ],
            },
            bullets: [
              "Resources: 4-10 KB RAM, 8 MHz CPU — compact crypto, symmetric-first, hardware AES where present.",
              "Broadcast medium: passive eavesdropping and trivial injection; no port-level identity.",
              "Physical exposure: node capture extracts keys and code — the insider threat is structural.",
              "No infrastructure: no PKI, no online authority, no re-keying crews — management must be local and automatic.",
              "Churn: sleep cycles and failures rotate neighbour sets; trust must expire and re-establish.",
              "Adversary classes: mote-class vs laptop-class, external vs internal — each quadrant needs its own defences.",
            ],
            callout: {
              type: "warning",
              title: "Design for capture, not just for eavesdropping",
              body: "The failure mode candidates miss: any scheme that only defends the radio channel ignores capture — and capture is the one threat the physical deployment guarantees is possible. Every key-management answer must state what a captured node betrays: everything (network-wide key), its links (pairwise), or a k/P fraction (random ring).",
            },
            examQuestions: [
              {
                q: "Explain the challenges of providing security in wireless sensor networks — resource constraints, the broadcast medium, physical exposure, absent infrastructure, scale, topology churn and adversary classes — with the consequence of each.",
                marks: 14,
                outline: [
                  "Resources: 4-10 KB RAM, 8 MHz CPU — compact symmetric-first crypto",
                  "Broadcast medium: free eavesdropping and injection; no port identity",
                  "Physical exposure: node capture extracts keys — insider threat assumed",
                  "No infrastructure: no PKI or operators; key management local and automatic",
                  "Scale: manual configuration impossible at a thousand nodes",
                  "Churn: sleep cycles rotate neighbours; trust must expire",
                  "Adversary classes: mote-class vs laptop-class, external vs internal quadrants",
                ],
              },
              {
                q: "Why does node capture change the entire key-management design? Illustrate with the memory arithmetic of holding 200 sixteen-byte keys on a Mica2.",
                marks: 7,
                outline: [
                  "Capture turns an outsider threat into an insider with valid keys",
                  "What the captured node betrays depends on the keying scheme",
                  "Network-wide key: whole field compromised; pairwise: its links only",
                  "Random ring of k from pool P: a k/P fraction of links at risk",
                  "Arithmetic: 200 × 16 B = 3.2 KB — most of Mica2's 4 KB RAM; resilience vs memory vs connectivity trade",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Security attacks in sensor networks",
            body: [
              "The attack catalogue organizes by layer, and the exam expects exactly that organization. Physical layer: jamming — constant, deceptive or intermittent transmission that renders the channel unusable; and tampering/node capture — physically extracting keys, code and data. Link layer: collision attacks corrupt frames in transit; exhaustion forces repeated retransmission (for example by perpetually requesting channels or corrupting just enough to trigger ACK-retry loops); unfairness hogs the medium with sparse-but-timed transmissions to starve others. All three exploit the politeness of CSMA politeness rules.",
              "Network layer — the richest catalogue. The Sybil attack: one node claims many identities, defeating multipath diversity, voting and reputation schemes that assume one node, one vote. The sinkhole attack: a node lies about route quality to attract traffic, then drops or tampers with it. The wormhole: two colluding nodes tunnel packets between distant regions, faking adjacency and breaking every locality assumption routing depends on — the sinkhole's best delivery mechanism. The hello flood: a laptop-class adversary broadcasts with enough power that everyone hears it and believes the sender is a one-hop neighbour, then routes through a node that cannot hear back. Selective forwarding drops chosen packets — subtler than total blackholing. Spoofing and replay round out the set.",
              "Transport and application layers close the catalogue. Flooding exhausts scarce connection state or buffers; desynchronization forges sequence numbers or ACKs so two endpoints retransmit forever, burning the duty-cycle budget — an energy attack disguised as a reliability problem. At application level, false data injection and replay of old events exploit the data-centric design: the network's product is answers, so poisoning the inputs poisons everything downstream. Defences exist for each: spread spectrum and duty-cycled silence against jamming; MAC-layer authentication and rate limits against exhaustion; bidirectional-link verification and location-bound keys against hello floods; geographic routing and monitoring against sinkholes; packet leashes (temporal and geographic) against wormholes; identity verification against Sybil; multipath diversity against selective forwarding; authenticated sequence numbers against desynchronization.",
              "The exam framing: organize by layer with the fork diagram, one line of mechanism and one line of defence per attack, and close with the table — the full catalogue on one page. The four definitions to have word-perfect are Sybil (one node, many identities), sinkhole (lies to attract, then drops), wormhole (tunnels to fake adjacency) and hello flood (loud claims of one-hop adjacency). Those four names carry most of the marks ever awarded in this topic.",
            ],
            keyTerms: [
              { term: "Sybil attack", definition: "One node presents multiple identities, defeating voting, multipath and reputation schemes." },
              { term: "Sinkhole", definition: "A node advertises fake route quality to attract traffic, then drops or tampers with it." },
              { term: "Wormhole", definition: "Two colluding nodes tunnel packets between distant regions, faking adjacency." },
              { term: "Hello flood", definition: "High-power 'hello' broadcasts make every node believe a distant attacker is a one-hop neighbour." },
              { term: "Selective forwarding", definition: "Dropping chosen packets while forwarding the rest — stealthy traffic manipulation." },
            ],
            table: {
              caption: "The attack catalogue: layer, effect, defence.",
              headers: ["Attack", "Layer", "Effect", "Defence"],
              rows: [
                ["Jamming", "physical", "channel unusable", "spread spectrum, duty-cycled silence, relocation"],
                ["Tampering / capture", "physical", "keys and code extracted", "tamper-resistant storage, capture-resilient keying"],
                ["Collision / exhaustion", "link", "frames corrupted; retries burn energy", "MAC authentication, rate limiting"],
                ["Unfairness", "link", "medium starved for others", "short frames, randomized scheduling"],
                ["Sybil", "network/MAC", "one node, many identities", "identity verification, location-bound keys"],
                ["Sinkhole", "network", "attracts then drops traffic", "geo-routing, honest-link checks, monitoring"],
                ["Wormhole", "network", "fake adjacency across the field", "packet leashes (time/geo), distance bounding"],
                ["Hello flood", "network", "fake one-hop adjacency to all", "bidirectional-link verification, neighbor keys"],
                ["Selective forwarding", "network", "chosen packets dropped", "multipath diversity, path monitoring"],
                ["Desynchronization", "transport", "endless retransmissions", "authenticated sequence numbers"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Where the adversary strikes",
              caption: "One catalogue, four layers — each branch is a family of attacks with matching defences.",
              start: "Where does the adversary attack?",
              branches: [
                { label: "Physical layer", outcome: "jamming, tampering — spread spectrum, tamper resistance", good: false },
                { label: "Link layer", outcome: "collision, exhaustion, unfairness — MAC auth + rate limits", good: false },
                { label: "Network layer", outcome: "Sybil, sinkhole, wormhole, hello flood, selective forwarding — geo-keys, leashes, multipath", good: false },
                { label: "Transport / application", outcome: "flooding, desynchronization, false data — seq auth, rate limits, provenance", good: false },
              ],
            },
            bullets: [
              "Physical: jamming (constant/deceptive/intermittent) and tampering/capture.",
              "Link: collision, exhaustion (retry-loop baiting), unfairness — all exploit CSMA politeness.",
              "Network: Sybil, sinkhole, wormhole, hello flood, selective forwarding, spoofing/replay.",
              "Transport: flooding of limited state; desynchronization as an energy attack.",
              "Application: false data injection and replay poison the network's product — its answers.",
              "Defences pair one-to-one: leashes vs wormholes, bidirectional verification vs hello floods, multipath vs selective forwarding.",
            ],
            callout: {
              type: "exam",
              title: "Four definitions, word-perfect",
              body: "Sybil: one node claims many identities. Sinkhole: lies about route quality to attract traffic, then drops it. Wormhole: tunnels packets between distant points to fake adjacency. Hello flood: loud broadcasts claiming one-hop adjacency. Write these four crisply and the attack-catalogue question is largely won before the defences are listed.",
            },
            examQuestions: [
              {
                q: "Describe the security attacks in sensor networks organized by layer — physical, link, network and transport — and give the defence for each attack, with precise definitions of Sybil, sinkhole, wormhole and hello flood.",
                marks: 14,
                outline: [
                  "Physical: jamming, tampering/capture — spread spectrum, tamper resistance",
                  "Link: collision, exhaustion, unfairness — MAC authentication, rate limiting",
                  "Sybil: one node, many identities — defeats voting/multipath; verify identities, bind keys to location",
                  "Sinkhole: fake route quality attracts then drops; geo-routing + monitoring",
                  "Wormhole: tunnels fake adjacency; packet leashes (temporal/geographic), distance bounding",
                  "Hello flood: loud one-hop claims; bidirectional-link verification, neighbor keys",
                  "Transport: flooding, desynchronization — rate limits, authenticated sequence numbers",
                ],
              },
              {
                q: "Why does the wormhole attack break routing protocols that assume locality, and how do packet leashes detect it?",
                marks: 7,
                outline: [
                  "Routing assumes two-hop neighbours are physically near",
                  "A wormhole tunnels packets, making distant regions appear adjacent",
                  "Topology graphs and geographic reasoning are corrupted by the fake links",
                  "Temporal leash: tight transmit-to-receive timing bounds distance at light speed",
                  "Geographic leash: nodes attach positions + timestamps; receivers verify plausibility",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Protocols and mechanisms for security: SPINS with SNEP and μTESLA",
            body: [
              "SPINS (from Perrig and colleagues) is the canonical security suite for motes, and it packages two protocols over a shared keying base. SNEP (Secure Network Encryption Protocol) provides the point-to-point services: confidentiality by counter-mode encryption (each message encrypted with its own counter, giving semantic security — identical plaintexts never repeat ciphertexts); integrity and authentication by a MAC over the ciphertext, header and counter; and freshness by the same counter, since a replayed old message fails MAC verification. Its per-packet overhead is compact — an 8-byte-class MAC plus counters — because every byte is radio time on a duty-cycled network.",
              "μTESLA solves the harder half: authenticated broadcast. Asymmetric signatures are unaffordable per-packet, so μTESLA manufactures asymmetry from time and hash chains. The base station builds a one-way key chain K_i = F(K_{i+1}) with F a hash function, and broadcasts each interval's packets MACed with that interval's key — held secret at broadcast time. After a disclosed delay of a few intervals the key is revealed; receivers check F(disclosed key) equals the previously authenticated chain value, then verify every buffered packet. Only the base station can generate future keys (the chain is one-way), so anything MACed with a secret interval key is authentic — broadcast authentication without public-key crypto, at the cost of delayed verification and loose time synchronization.",
              "The worked chain makes the mechanism concrete: with interval length 100 ms and disclosure delay 2 intervals, a packet sent in interval i is verified at i+2 — the receiver buffers 200 ms of unverified broadcasts, then authenticates them in one hash check per packet plus one chain-walk per disclosure. Bootstrap: a receiver is pre-loaded with (or authenticated receives) one chain value K_j plus the schedule (T₀, interval length, delay), after which every disclosure extends its trust forward. The costs to state honestly: buffering memory for the disclosure window, and time-synchronization error that must stay below the interval — Unit I's drift arithmetic again, now a security parameter.",
              "The exam framing: present SPINS as SNEP + μTESLA, SNEP's three services with the counter as the shared mechanism, μTESLA's chain construction and disclosure timeline with the flow diagram, and the two costs (buffering, sync). The code sample — generating and verifying a hash chain — is the executable version of the whole idea, and quoting the 100 ms / 2-interval parameters turns the description into a design.",
            ],
            keyTerms: [
              { term: "SPINS", definition: "The canonical mote security suite: SNEP for point-to-point services, μTESLA for broadcast authentication." },
              { term: "SNEP", definition: "Counter-mode encryption + MAC + counter freshness in one compact per-packet wrapper." },
              { term: "μTESLA", definition: "Broadcast authentication via one-way key chains with delayed key disclosure." },
              { term: "Disclosure delay", definition: "The interval gap between using and revealing a chain key; bounds buffering and sync requirements." },
              { term: "Key chain bootstrap", definition: "Authenticating one chain value + schedule, after which disclosures extend trust forward." },
            ],
            diagram: {
              kind: "flow",
              title: "μTESLA: broadcast authentication by delayed disclosure",
              caption: "The receiver buffers unverified packets for the disclosure delay, then authenticates them in one hash check each.",
              steps: [
                { label: "Base station builds chain", note: "K_i = F(K_{i+1}); future keys unguessable" },
                { label: "Broadcast MACed with K_i", note: "key secret at transmission time" },
                { label: "Receivers buffer packets", note: "cannot verify yet — that is the design" },
                { label: "After d intervals, K_i disclosed", note: "d = 2-3 intervals typically" },
                { label: "Verify F(K_i) = K_{i-d}", note: "chain check, then MAC check per packet" },
              ],
            },
            bullets: [
              "SPINS = SNEP (point-to-point) + μTESLA (broadcast) over a shared keying base.",
              "SNEP: CTR encryption for semantic security; MAC over ciphertext+header+counter; counter freshness.",
              "Per-packet overhead compact: ~8-byte-class MAC plus counters — bytes are radio time.",
              "μTESLA chain: K_i = F(K_{i+1}); only the base station can compute future keys.",
              "Disclosure delay d = 2-3 intervals (e.g. 100 ms intervals -> ~200-300 ms verification lag).",
              "Costs: buffering for the disclosure window; time sync error must stay below the interval length.",
            ],
            callout: {
              type: "exam",
              title: "Delayed disclosure is the trick",
              body: "The one sentence that answers 'how do you authenticate broadcasts without public keys': μTESLA manufactures asymmetry from time — keys are used secretly and revealed later, and the one-way chain proves only the base station could have made them. Add the two costs (buffering, time sync) and the answer is complete.",
            },
            codeExample: {
              language: "python",
              caption: "utesla.py — a one-way key chain, built and verified",
              code: `import hashlib

F = lambda k: hashlib.sha256(k).digest()[:16]   # one-way function

# base station: build the chain BACKWARD from the last key
K_last = b"seed-key-material-16B"
chain = [K_last]
for _ in range(5):
    chain.append(F(chain[-1]))     # chain[i] = F(chain[i+1])
chain.reverse()                    # chain[0] is the "latest", used first

# receiver trusts chain[3]; base station later discloses chain[1]
disclosed = chain[1]
recomputed = disclosed
for _ in range(2):                 # walk forward until the trusted value
    recomputed = F(recomputed)
print(recomputed == chain[3])      # True -> disclosures authenticate
# packets MACed with secret chain[1] are now verifiable by everyone`,
            },
            examQuestions: [
              {
                q: "Explain the SPINS security suite: SNEP's confidentiality, integrity/authentication and freshness mechanisms, and μTESLA's one-way key chain with delayed disclosure. State the costs and the bootstrap procedure.",
                marks: 14,
                outline: [
                  "SPINS = SNEP + μTESLA over a shared keying base",
                  "SNEP confidentiality: CTR mode with per-message counters — semantic security",
                  "SNEP integrity/auth: MAC over ciphertext, header and counter; ~8-byte MACs",
                  "SNEP freshness: monotonic counters — replays fail MAC verification",
                  "μTESLA: K_i = F(K_{i+1}); broadcast MACed with secret interval keys",
                  "Disclosure delay d = 2-3 intervals; receivers buffer, then verify with F(K_i) = K_{i-d}",
                  "Costs: buffering memory; time-sync error below interval length; bootstrap with one trusted chain value",
                ],
              },
              {
                q: "Why does μTESLA avoid per-packet public-key signatures, and what two operational requirements does its design impose?",
                marks: 7,
                outline: [
                  "Public-key ops cost ~seconds per packet on motes — unaffordable at broadcast rates",
                  "μTESLA buys asymmetry from time: future keys are unguessable (one-way chain)",
                  "Requirement 1: loose time synchronization — receivers must agree on interval boundaries",
                  "Requirement 2: buffering — packets wait for key disclosure before verification",
                  "Both are bounded by the interval length and disclosure delay d",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Key management and pre-distribution",
            body: [
              "Key management is the foundation service of section 5.1, and the design space has three corners. The network-wide key: one key everywhere — minimal memory, trivial broadcast, and a single capture betrays the whole field. Full pairwise keys: every link has its own key — perfect capture isolation, but a node with n neighbours stores n keys, and a thousand-node field needs n² set-up — memory and configuration blow up on both ends. The symmetric middle ground is LEAP's four-key architecture: an individual key shared with the controller, pairwise keys per neighbour, a cluster key for one-hop local broadcasts, and a network-wide group key for authenticated global broadcasts (via μTESLA).",
              "Random key pre-distribution (Eschenauer-Gligor) buys capture resilience probabilistically. Before deployment, a pool of P keys exists; each node receives a random ring of k keys. Afterwards, neighbours sharing a ring key connect directly; otherwise they negotiate a fresh pairwise key over a path of nodes that do — path-key establishment. The direct-connection probability is approximately p ≈ 1 − (1 − k/P)². Worked: P = 10,000, k = 200 gives p ≈ 4% per neighbour pair, and with ~40 neighbours the chance of at least one direct secure link is 1 − (1 − 0.04)^40 ≈ 80%. Capturing one node reveals only its k keys — a k/P fraction of links, degrading gracefully instead of catastrophically.",
              "LEAP's capture resistance is the section's cleverest mechanism and worth the full paragraph. At deployment, every node holds a master key derived from its own identity; while setup time T_est elapses, neighbours establish pairwise keys from each other's masters. After T_est, every node erases its master key — so a node captured later reveals only keys established before capture, never the ability to make new ones. New neighbours cannot join through a captured node, and the group key is updated via the pairwise mesh. The scheme prices one assumption: an adversary cannot capture a node within T_est of deployment — a physical, testable claim that converts a cryptographic problem into a window-of-time problem.",
              "The exam framing: present the three corners (network-wide, pairwise, probabilistic) with the worked p ≈ 4% and 80% numbers, LEAP's four key types with the T_est erasure trick, and the memory arithmetic that bounds every choice (200 keys = 3.2 KB of a 4 KB RAM). The compare diagram — deterministic versus probabilistic keying — is the picture; the closing sentence is that key management in WSNs is a capture-resilience versus memory versus connectivity triangle, and every scheme is a point on it.",
            ],
            keyTerms: [
              { term: "Network-wide key", definition: "One key shared by all nodes — cheapest, worst capture behaviour." },
              { term: "Pairwise keys", definition: "Unique key per link — best isolation, memory and setup cost grow with degree and n²." },
              { term: "Random key pre-distribution", definition: "Eschenauer-Gligor: ring of k keys from a pool of P; shared-key neighbours connect, others use path-keys." },
              { term: "LEAP", definition: "Four key types (individual, pairwise, cluster, group) with master keys erased after setup time T_est." },
              { term: "Path-key establishment", definition: "Two nodes without a shared ring key negotiate a fresh key through an intermediating secure path." },
            ],
            table: {
              caption: "LEAP's four key types.",
              headers: ["Key type", "Scope", "Established", "Purpose"],
              rows: [
                ["Individual key", "node <-> controller", "pre-deployment, unique per node", "private reports, control to one node"],
                ["Pairwise key", "node <-> each neighbour", "from master keys during T_est", "secure links; capture limits damage"],
                ["Cluster key", "node <-> its one-hop group", "after pairwise keys exist", "local broadcasts (e.g., beacons)"],
                ["Group key", "whole network", "pre-deployment; rotated via pairwise mesh", "authenticated global broadcast (μTESLA)"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Deterministic vs probabilistic keying",
              caption: "Two ways to survive capture — perfect isolation that needs memory, or graceful degradation that needs probability.",
              left: {
                heading: "Deterministic schemes",
                items: [
                  "network-wide: minimal memory, one capture betrays all",
                  "full pairwise: perfect isolation, n keys per node, n² setup",
                  "LEAP: four key types + master-key erasure at T_est",
                  "behaviour is certain; costs are structural",
                ],
              },
              right: {
                heading: "Probabilistic (Eschenauer-Gligor)",
                items: [
                  "ring of k keys from pool P; p ≈ 1 − (1 − k/P)²",
                  "P = 10,000, k = 200 -> p ≈ 4% per neighbour",
                  "~40 neighbours -> ~80% direct secure connectivity",
                  "capture reveals only a k/P fraction of links — graceful decay",
                ],
              },
            },
            bullets: [
              "Three corners: network-wide key (cheap, fragile), full pairwise (isolated, expensive), probabilistic (tunable).",
              "Eschenauer-Gligor: ring of k from pool P; direct p ≈ 1 − (1 − k/P)².",
              "Worked: P = 10,000, k = 200 -> p ≈ 4%; with 40 neighbours, ~80% of nodes get a direct secure link.",
              "Path-key establishment bridges neighbours with no shared ring key.",
              "LEAP: individual, pairwise, cluster, group keys; master keys erased after T_est — later capture reveals no new-key power.",
              "Memory bounds all choices: 200 × 16 B = 3.2 KB of a 4 KB RAM — the triangle is capture resilience vs memory vs connectivity.",
            ],
            callout: {
              type: "tip",
              title: "The T_est trick converts crypto into time",
              body: "LEAP's master-key erasure is the exam's favourite mechanism: a node captured after setup cannot forge new pairwise keys because the master that made them no longer exists. State the assumption explicitly — no capture within T_est of deployment — and the whole scheme's security reduces to a testable physical claim.",
            },
            examQuestions: [
              {
                q: "Explain random key pre-distribution (Eschenauer-Gligor): the pool and ring model, direct and path-key establishment, and the connectivity probability. Compute p for P = 10,000, k = 200 and the probability of at least one direct secure link with 40 neighbours.",
                marks: 14,
                outline: [
                  "Pre-deployment: pool of P keys; each node draws a random ring of k",
                  "Neighbours discover shared ring keys and connect directly",
                  "No overlap -> path-key establishment through a secure intermediate path",
                  "Direct probability p ≈ 1 − (1 − k/P)²",
                  "P = 10,000, k = 200: p ≈ 1 − 0.98² ≈ 3.96% ≈ 4%",
                  "With 40 neighbours: 1 − (1 − 0.04)^40 ≈ 80% direct secure connectivity",
                  "Capture reveals only the node's k keys — a k/P fraction of links, graceful decay",
                ],
              },
              {
                q: "Describe LEAP's four key types and explain why erasing the master key after T_est provides capture resilience.",
                marks: 7,
                outline: [
                  "Individual key: node-to-controller private channel",
                  "Pairwise keys: per-neighbour links, established from master keys during T_est",
                  "Cluster key: one-hop local broadcast; group key: network-wide authenticated broadcast",
                  "After T_est, masters are erased — a later capture reveals existing keys only",
                  "New links cannot be minted by the adversary; assumption: no capture within T_est",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "IEEE 802.15.4 security",
            body: [
              "IEEE 802.15.4 offers three security modes. Unsecured mode does nothing — appropriate only for closed experimental networks. ACL mode keeps an access-control list of permitted addresses and rejects frames from others — a filter, not cryptography. Secured mode is the real machinery: AES-128 in CCM* mode, which bundles counter-mode encryption with CBC-MAC integrity in one construction, over eight security suites a frame may declare: none, MIC-32/64/128 (integrity only, three tag lengths), ENC (encryption only), and ENC-MIC-32/64/128 (both). The suite choice per frame is declared in an auxiliary security header carried inside the MAC frame.",
              "The secured frame's anatomy is the section's diagram: MAC header, then the auxiliary security header (security-level bits selecting the suite, key-identifier mode, key index, and the 32-bit frame counter), then the encrypted payload, then the MIC. Replay protection is built into the counter: a receiver refuses frames whose counter does not advance past the highest seen for that key — replay defence as a default, not an option. Processing follows a fixed pipeline: parse the auxiliary header, select key and suite, check the counter, verify the MIC, decrypt, deliver. Hardware AES on radios like the CC2420 makes the whole pipeline cost tens of microseconds per 16-byte block — security that fits inside the duty cycle.",
              "The worked frame arithmetic to quote: a maximal MIC (128-bit) costs 16 bytes of airtime per secured frame; at 250 kbps that is about 0.5 ms — against a typical monitoring frame's multi-millisecond budget, a few percent. The suite choice is therefore a bandwidth-versus-paranoia dial: MIC-32 (4 bytes) suits high-rate telemetry where tampering is the main threat; ENC-MIC-128 suits commands and configuration where both secrecy and strong integrity matter. Key-identifier modes let frames name which key protected them — key index or key source plus index — so key rotation (section 5.7's ZigBee machinery) can coexist with old frames in flight.",
              "The exam framing: name the three modes, list the eight suites with what each gives, draw the secured frame with the auxiliary header fields, explain the replay counter, and close with the layer boundary — 802.15.4 secures each link independently; end-to-end guarantees belong to the layers above it (ZigBee's NWK and APS, next section). That boundary sentence is the standard follow-up question's answer.",
            ],
            keyTerms: [
              { term: "CCM*", definition: "AES-based combined mode: CTR encryption + CBC-MAC integrity, parameterized per frame." },
              { term: "Security suites", definition: "Eight declared levels: none, MIC-32/64/128, ENC, ENC-MIC-32/64/128." },
              { term: "AUX security header", definition: "Frame fields declaring suite, key id and the 32-bit frame counter." },
              { term: "Frame counter replay defence", definition: "Receivers refuse frames whose counter does not advance past the highest seen per key." },
              { term: "Link-layer scope", definition: "802.15.4 secures each hop independently; end-to-end security is the upper layers' job." },
            ],
            table: {
              caption: "The eight security suites and when to use each.",
              headers: ["Suite", "Encryption", "MIC", "Typical use"],
              rows: [
                ["None", "no", "none", "closed experimental networks"],
                ["MIC-32", "no", "32-bit", "high-rate telemetry; tamper detection only"],
                ["MIC-64", "no", "64-bit", "telemetry with stronger integrity"],
                ["MIC-128", "no", "128-bit", "integrity-critical public data"],
                ["ENC", "yes", "none", "secrecy where tampering is monitored elsewhere"],
                ["ENC-MIC-32/64/128", "yes", "32/64/128-bit", "commands and config — the default for sensitive frames"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Processing a secured 802.15.4 frame",
              caption: "Five fixed steps — replay defence and integrity come before decryption, always in that order.",
              stages: [
                { label: "Receive secured frame", note: "MAC header + AUX header + payload + MIC" },
                { label: "Parse AUX header", note: "suite bits, key id, 32-bit frame counter" },
                { label: "Replay check", note: "counter must advance past the highest seen" },
                { label: "Verify MIC (CBC-MAC)", note: "integrity before any decryption" },
                { label: "Decrypt (CTR) and deliver", note: "hardware AES: tens of µs per block" },
              ],
            },
            bullets: [
              "Three modes: unsecured, ACL (address filter only), secured (AES-128 CCM*).",
              "Eight suites: none, MIC-32/64/128, ENC, ENC-MIC-32/64/128 — declared per frame.",
              "AUX security header: suite bits, key-identifier mode, key index, 32-bit frame counter.",
              "Replay defence: counters must advance; old frames fail before MIC verification.",
              "Cost arithmetic: MIC-128 = 16 B ≈ 0.5 ms at 250 kbps — a few percent of a monitoring frame.",
              "Layer boundary: link-by-link security only — end-to-end guarantees are ZigBee NWK/APS territory.",
            ],
            callout: {
              type: "warning",
              title: "Replay protection is not optional",
              body: "The frame counter is part of the security suite, not an add-on: a receiver that ignores counters accepts replayed command frames. In any answer about 802.15.4 security, state that the replay check happens before MIC verification — the order is part of the standard's processing model.",
            },
            examQuestions: [
              {
                q: "Explain IEEE 802.15.4 security: the three modes, the eight security suites with CCM*, the auxiliary security header, the replay counter, and the secured-frame processing pipeline with its hardware cost.",
                marks: 14,
                outline: [
                  "Modes: unsecured; ACL (address filter); secured (AES-128 CCM*)",
                  "Suites: none, MIC-32/64/128, ENC, ENC-MIC-32/64/128 — declared per frame",
                  "CCM*: CTR encryption + CBC-MAC integrity in one parameterized construction",
                  "AUX header: suite bits, key-identifier mode, key index, 32-bit frame counter",
                  "Replay: counters must advance per key; checked before MIC verification",
                  "Pipeline: parse AUX -> select key/suite -> replay check -> verify MIC -> decrypt",
                  "Cost: hardware AES, tens of µs per 16-B block; MIC-128 = 16 B ≈ 0.5 ms at 250 kbps",
                ],
              },
              {
                q: "Compare MIC-32 and ENC-MIC-128 as suite choices for (a) high-rate temperature telemetry and (b) firmware configuration commands, with the bandwidth arithmetic.",
                marks: 7,
                outline: [
                  "MIC-32: 4 B tag — cheapest integrity; suits high-rate telemetry where secrecy is public data",
                  "ENC-MIC-128: encryption + 16 B tag — commands need secrecy and strong integrity",
                  "Bandwidth: MIC-128 = 16 B ≈ 0.5 ms per frame at 250 kbps; MIC-32 = 4 B ≈ 0.13 ms",
                  "Replay counter protects both; suites differ only in tag strength and secrecy",
                  "Match the suite to the frame's threat, not to a blanket policy",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "ZigBee security",
            body: [
              "ZigBee builds the key-management layer that 802.15.4 deliberately omits, and its architecture has two anchors. The trust center — typically the coordinator — authenticates every device that joins the network, distributes and updates the network key, and maintains the pairing table of trust relationships. The key hierarchy has four tiers: the master key (pre-installed or transported, used only to bootstrap link keys via the SKKE protocol — symmetric-key key establishment), the link key (pairwise, protecting unicast between two devices), the network key (shared by all devices, protecting broadcast and routing frames), and application keys (group-scoped, for clusters of applications that must share secrets beyond the network).",
              "The joining flow is the worked sequence to know: a device associates with the network; the trust center verifies its identity and either uses a pre-installed master/link key or transports one; the APS layer then delivers the network key encrypted under that link key; and the device begins securing its NWK frames with the network key and its own frame counter. Updates follow the same pattern: the trust center broadcasts a new network key (transport-key command), devices switch at a announced countdown, and old counters reset per key — rotation is a protocol operation, not a manual chore. All layers encrypt with AES-128 CCM*: the NWK layer secures routing frames, the APS layer secures application messages.",
              "The frame-counter arithmetic is the operational subtlety worth quoting: each device maintains a 32-bit counter per key; at 100 frames per second the counter exhausts in about 497 days (2³² ÷ 100 ≈ 4.3 × 10⁷ s), forcing a network-key rotation before exhaustion or frames become unverifiable. The ZigBee PRO revision sharpens the trust model — centralized security with a single trust center as the default, plus mandatory capabilities that earlier versions left optional. For the exam: draw the layer stack with the trust center on top, list the four key tiers with scope and establishment, walk the joining flow in five steps, and quote the counter-exhaustion number as the reason key rotation is scheduled rather than optional.",
            ],
            keyTerms: [
              { term: "Trust center", definition: "ZigBee authority (usually the coordinator): authenticates joiners, distributes and updates keys." },
              { term: "Network key", definition: "Shared by all devices for NWK-layer frames; rotated by trust-center broadcast." },
              { term: "Link key", definition: "Pairwise key protecting unicast between two devices; bootstrapped from the master key." },
              { term: "Master key", definition: "Pre-installed or transported bootstrap key used only in SKKE to derive link keys." },
              { term: "SKKE", definition: "Symmetric-Key Key Establishment: deriving a pairwise link key from a shared master key." },
            ],
            table: {
              caption: "ZigBee's key tiers.",
              headers: ["Key", "Scope", "Establishment", "Update"],
              rows: [
                ["Master key", "pairwise bootstrap", "pre-installed or transported", "consumed once per link-key derivation"],
                ["Link key", "pairwise unicast", "SKKE from master key, or pre-configured", "trust-center managed re-establishment"],
                ["Network key", "all devices (NWK frames)", "transported encrypted under a link key", "trust-center broadcast + switch countdown"],
                ["Application key", "application group", "trust-center transport", "per-group rotation"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The ZigBee security stack",
              caption: "Keys above links: the trust center governs, NWK and APS secure, 802.15.4 carries.",
              layers: [
                { label: "Trust center (at the coordinator)", note: "authenticates joiners; distributes/updates keys" },
                { label: "APS layer security", note: "link keys + application keys on application messages" },
                { label: "NWK layer security", note: "network key on routing frames; per-device counters" },
                { label: "IEEE 802.15.4 link security", note: "AES-CCM* on each hop; AUX header + counters" },
                { label: "PHY", note: "2.4 GHz radio — eavesdroppable by any listener" },
              ],
            },
            bullets: [
              "Trust center: authenticates joiners, distributes/updates the network key, keeps the pairing table.",
              "Four key tiers: master (bootstrap), link (pairwise unicast), network (all-device NWK), application (group).",
              "SKKE derives link keys from master keys — no public-key crypto anywhere in the flow.",
              "Joining flow: associate -> trust-center verification -> link key established -> network key delivered encrypted -> NWK frames secured.",
              "Counter arithmetic: 32-bit counter at 100 fps exhausts in ~497 days — schedule network-key rotation before it.",
              "ZigBee PRO: centralized trust center default; earlier versions left more optional.",
            ],
            callout: {
              type: "exam",
              title: "Two trust-center duties, both required",
              body: "The trust center answer has two halves candidates half-say: authentication of joining devices, and key management — distribution, rotation, the pairing table. Say both, attach the four key tiers, and the ZigBee security question is complete; the joining flow is the diagram that ties them together.",
            },
            examQuestions: [
              {
                q: "Explain ZigBee security: the trust center's duties, the four-tier key hierarchy, the joining and key-update flows, and the frame-counter arithmetic that forces scheduled network-key rotation.",
                marks: 14,
                outline: [
                  "Trust center: authenticates joiners; distributes and updates keys; pairing table",
                  "Keys: master (bootstrap), link (pairwise), network (shared NWK), application (group)",
                  "SKKE derives link keys from master keys — symmetric-only establishment",
                  "Joining: associate -> verify -> link key -> network key delivered encrypted -> secured frames",
                  "Updates: trust center broadcasts new network key with switch countdown",
                  "Counters: 32-bit per device per key; 100 fps -> ~497 days to exhaustion",
                  "Consequence: rotation is scheduled protocol operation; ZigBee PRO centralizes the trust model",
                ],
              },
              {
                q: "Walk through what happens when a new device joins a secured ZigBee network, naming the layer that performs each step.",
                marks: 7,
                outline: [
                  "MAC association with the coordinator (802.15.4)",
                  "Trust center verifies identity; master/link key pre-installed or transported (APS)",
                  "SKKE derives the link key from the master key (APS)",
                  "Network key delivered encrypted under the link key (APS transport-key)",
                  "Device secures NWK frames with the network key and its own counter (NWK)",
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
        { topic: "MAC protocols: the four energy wastes, S-MAC, T-MAC, B-MAC, TDMA/TRAMA, Z-MAC, 802.15.4 superframe", weight: "≈ 12-14 marks", note: "One protocol in depth with its diagram plus the duty-cycle arithmetic (10% = ~50 days, 1% = a year); the idle-listening premise is the graded insight." },
        { topic: "Routing and dissemination families: LEACH, PEGASIS, TEEN, GEAR, GAF, SPIN, Directed Diffusion, SPEED", weight: "≈ 12-14 marks", note: "Taxonomy question (seven families, one protocol each) plus a LEACH numerical (threshold formula, 87 m crossover, 5 nJ/bit fusion)." },
        { topic: "Node localization: ranging techniques and algorithms", weight: "≈ 12-14 marks", note: "Numerical unit: TDoA 34 cm/ms, RSSI inversion d = d0 × 10^((RSSI0 − RSSI)/(10 n)), least-squares trilateration, DV-hop calibration." },
        { topic: "Energy efficiency and power control: passive vs active, layer by layer", weight: "≈ 10-12 marks", note: "The passive/active distinction is the axis; carry P ∝ CV²f, the 5-days-to-a-year chain, GAF's R/√5, and PSFQ/ESRT/CODA directions." },
        { topic: "Unit I overview: characteristics, architectures, protocol stack", weight: "≈ 10-12 marks", note: "The 14-mark stack diagram with three management planes; the WSN-vs-MANET contrast list; the 26 kJ / 56 mW numbers." },
        { topic: "Security: challenges, attacks, SPINS/μTESLA, key management", weight: "≈ 10-12 marks", note: "Layer-wise attack table; μTESLA delayed disclosure; Eschenauer-Gligor p ≈ 4% and LEAP's T_est erasure." },
        { topic: "Query processing and data aggregation (TinyDB, TAG, Cougar)", weight: "≈ 8-10 marks", note: "Write a TinyDB query with LIFETIME; the 2 µJ vs 20.4 µJ fusion arithmetic; distributive vs holistic function classes." },
        { topic: "Standards, platforms and ZigBee security", weight: "≈ 6-8 marks", note: "802.15.4 vs ZigBee layer ownership; eight security suites; trust center's two duties; 0.81 s vs 10.99 s ECC/RSA." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for drawing the diagrams and running the small numeric traces. This subject rewards numbers: a duty-cycle percentage, a 34 cm/ms sound delay, an 87 m crossover distance — each one converts a generic answer into a marked one.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I — the anatomy", tasks: ["Characteristics vs MANET contrast list; the 26 kJ / 56 mW arithmetic", "Applications table with requirement profiles", "Objectives + challenges with the drift chain (30 ppm = 2.6 s/day)", "MEMS + ISM bands + link budget; platform table; protocol stack with three management planes drawn twice"] },
        { week: "Week 2", focus: "Unit II — MAC protocols", tasks: ["Four energy wastes + CSMA loop; the five-days-versus-a-year chain", "S-MAC: three mechanisms, two costs, virtual clusters", "T-MAC early timeout + FRTS; B-MAC LPL preambles; WiseMAC offsets", "TRAMA's three components; Z-MAC owner-priority backoff; 802.15.4 superframe duty arithmetic"] },
        { week: "Week 3", focus: "Unit II — routing families", tasks: ["Routing vs ad hoc table; energy-hole arithmetic", "Seven-family taxonomy with one protocol each", "LEACH threshold formula + radio model numbers; PEGASIS chain; TEEN thresholds", "GEAR cost, GAF grid, SPIN/Directed Diffusion loop, SPEED velocity; draw the interest-gradient-reinforcement flow"] },
        { week: "Week 4", focus: "Unit III — queries, aggregation, localization", tasks: ["Database-viewpoint mapping table; 1000-to-1 reduction", "TinyDB query written from memory with LIFETIME; TAG tree", "Aggregation function classes + 2 µJ vs 20.4 µJ arithmetic", "Ranging conversions (34 cm/ms, 300 m/µs); RSSI inversion; least-squares trace; DV-hop + APIT"] },
        { week: "Week 5", focus: "Unit IV + Unit V (attacks)", tasks: ["Energy profile pyramid + Pottie-Kaiser line", "Passive: DVFS V² example, duty-cycle equation, GAF R/√5, SPAN, aggregation", "Active: MAC knobs with triggers, min-cost vs min-max 33% example, PSFQ/RMST/ESRT/CODA directions", "Unit V challenges + full layer-wise attack table with defences"] },
        { week: "Week 6", focus: "Unit V (security machinery) + revision", tasks: ["SPINS: SNEP services + μTESLA chain with disclosure timeline", "Key management: Eschenauer-Gligor p ≈ 4%, LEAP four keys + T_est", "802.15.4 modes/suites + secured-frame pipeline; ZigBee trust center + key tiers", "Two full mock papers, 7-mark answers in 12 minutes, 14-mark in 25"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Pair every protocol with its diagram: S-MAC's schedule cycle, LEACH's cluster round, Directed Diffusion's interest-gradient-reinforcement, the five-layer stack with three management planes, the μTESLA disclosure timeline. The diagram is half the marks.",
        "Carry one number into every answer: 56 mW RX, 26 kJ pack, five days vs a year, 10% S-MAC duty, 87 m crossover, 34 cm/ms sound, 300 m/µs radio, p = 5% cluster heads, 0.81 s vs 10.99 s (ECC vs RSA), ~497-day ZigBee counter.",
        "Open MAC answers with the four energy wastes (idle listening, collisions, overhearing, control overhead) and say which mechanism attacks which — the premise, not the protocol, is graded first.",
        "For localization numericals write the unit conversion chain before the formula: Δt × 340 m/s, or d = d0 × 10^((RSSI0 − RSSI)/(10 n)) with n stated (2 free space, 3-4 indoors).",
        "State the classification axis before describing anything: anchor-based vs anchor-free, range-based vs range-free, contention vs schedule, passive vs active, downstream vs upstream. Examiners mark the axis.",
        "For the attacks question, organize by layer in a table — attack, layer, effect, defence — instead of prose; write Sybil, sinkhole, wormhole and hello flood definitions word-perfect.",
        "Passive vs active energy conservation: passive = hardware spends less per unchanged behaviour; active = behaviour adapts to traffic/topology state. Say the distinction, then list mechanisms under each.",
        "Time-box: 7-mark answers within 12 minutes, 14-mark within 25; leave the last 10 minutes to attach the numbers and formulas you skipped.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "The morning of the exam, revise only what fits on one page: the energy chain (56 mW receive, 26 kJ pack, five days at full receive, ~50 days at 10%, past a year at 1%), the LEACH set (threshold formula, p = 5%, 87 m crossover, 5 nJ/bit fusion), the ranging pair (34 cm per millisecond of sound, 300 m per microsecond of radio), the DVFS ratio ((1.8/3.0)² × (1/8) ≈ 0.045), the Eschenauer-Gligor pair (p ≈ 4%, ~80% with 40 neighbours), and the four crypto numbers (µs AES blocks, 0.81 s ECC, 10.99 s RSA, ~497-day counter). These are the numbers that turn a 5 into a 7 and a 9 into a 14.",
        "Sweep the short-note list once, writing six-line skeletons: WSN vs MANET, MEMS role, protocol stack with management planes, S-MAC's three mechanisms and two costs, Z-MAC's owner-priority backoff, GAF grid equivalence, TEEN thresholds, ESRT's five regions, CODA's loops, μTESLA delayed disclosure, LEAP's four keys, 802.15.4's eight suites, ZigBee's trust center. Each is a definition + mechanism + one number + one diagram — skeletons, not essays.",
        "The common slips below are the marks most candidates scatter — each one is a distinction the examiner built the question around. Read them immediately before entering the hall; they are the difference between a list and a technically correct list.",
      ],
      bullets: [
        "Calling IEEE 802.15.4 and ZigBee the same standard — 802.15.4 defines PHY and MAC; ZigBee adds the network, application and security layers on top.",
        "Saying transmission dominates node energy — idle listening and receiving do; that is why duty cycling, not power tuning, is the first fix.",
        "Mixing up sinkhole and wormhole — a sinkhole lies about route quality to attract traffic; a wormhole tunnels packets to fake adjacency.",
        "Fixing hello floods by authentication alone — a loud attacker can authenticate; bidirectional-link verification or location-bound keys is the actual defence.",
        "Dropping units in localization arithmetic — 1 ms of sound delay is 34 cm, 1 µs of radio delay is 300 m; the factor of a thousand is the whole question.",
        "Using n = 2 in the RSSI formula indoors — free space is n = 2; offices need 3-4, and the exponent error multiplies the distance error.",
        "Writing the LEACH threshold without the modulo — it is T(n) = p/(1 − p·(r mod (1/p))); the modulo is what rotates the head elite.",
        "Treating ESRT as congestion control — it is event-to-sink reliability regulation; CODA is the congestion half of the transport story.",
        "Calling μTESLA asymmetric cryptography — it is symmetric keys + one-way hash chains + delayed disclosure, which only resembles asymmetry.",
        "Forgetting Z-MAC's owner-priority backoff — calling it 'TDMA with CSMA fallback' misses the actual invention, and saying aggregation is free ignores the accuracy it costs.",
      ],
    },
  ],
};
