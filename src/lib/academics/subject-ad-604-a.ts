/**
 * Academics - RGPV AI&DS Semester VI open elective AD-604(A) Internet of Things.
 *
 * Mirrors the structure used by the other subjects: units -> chapters ->
 * numbered sections.  Each section carries body paragraphs, bullets, one
 * diagram, a table or code sample, a callout, key terms and three exam-style
 * questions.  A separate `studyPlan` array drives the "Guide Me" tab.
 *
 * Canonical IoT decomposition:
 *   Unit I   - IoT fundamentals (definition, characteristics, architecture,
 *              physical/logical design, enabling technologies, levels)
 *   Unit II  - Protocols and connectivity (M2M, MQTT, CoAP, Zigbee, BLE,
 *              LoRaWAN, 6LoWPAN, protocol selection)
 *   Unit III - Sensing and hardware (sensors, actuators, Arduino,
 *              Raspberry Pi, communication modules, buses, prototyping)
 *   Unit IV  - Data processing and platforms (cloud, IoT platforms, edge/fog,
 *              stream processing, analytics, WSN, storage and dashboards)
 *   Unit V   - Applications and security (smart home/city/agriculture/health,
 *              industrial IoT, attacks, countermeasures, privacy, case study)
 */

import type { AcademicSubject } from "./types";

export type { DiagramSpec, KeyTerm } from "../types";

import type { DiagramSpec, KeyTerm } from "../types";

export const ad604a: AcademicSubject = {
  id: "ad-604-a",
  code: "AD-604(A)",
  title: "Internet of Things",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "The complete visual guide to the Internet of Things: architecture layers, physical and logical design, M2M and IoT protocols, sensing hardware, cloud platforms, real deployments and the security that keeps them safe.",
  description:
    "Five units walk from what an IoT system actually is - things, protocols and architecture layers - through the protocol zoo (MQTT, CoAP, Zigbee, BLE, LoRaWAN, 6LoWPAN), onto sensors, Arduino and Raspberry Pi hardware, then cloud and edge platforms that turn raw telemetry into decisions, and finally the application domains and the attacks, countermeasures and privacy questions every deployment must answer. Every section pairs a definition with a worked, numbers-first deployment example and a diagram you can redraw in the exam hall.",
  accentColor: "#4ade80",
  emoji: "IoT",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "IoT Fundamentals",
      summary:
        "What the Internet of Things is, the characteristics that separate it from ordinary embedded systems, the physical and logical design of an IoT system, reference architectures, the enabling technologies underneath it, the standard IoT levels, and the scope, challenges and design methodology behind a real deployment.",
      chapter: {
        number: "01",
        title: "Definition, Design and Architecture of IoT",
        intro:
          "Unit I builds the vocabulary for the whole elective: the formal definition of IoT and its evolution, the six characteristics examiners expect, the physical design (things plus the protocol stack) and logical design (functional blocks, communication models and APIs), the layered reference architecture, the enabling technologies, IoT levels 1-6 with deployment templates, and the scope and challenges that frame every application.",
        inOneBreath:
          "IoT = uniquely addressable things that sense, connect and exchange data without human help; six characteristics (intelligence, connectivity, dynamic nature, sensing, heterogeneity, scale); physical design = devices + a 5-layer protocol stack; logical design = 7 functional blocks, 4 communication models and 2 API styles; architecture = perception, network, processing, application layers; enabling technologies combine embedded, sensing, cloud, big data and networking; IoT levels 1-6 scale from one node doing local analytics to multi-node cloud-heavy templates.",
        sections: [
          {
            number: "1.1",
            title: "What is the Internet of Things? Definition and evolution",
            body: [
              "The Internet of Things (IoT) is a network of physical objects - 'things' - that are embedded with sensors, actuators, processors and communication hardware, are uniquely addressable, and can collect and exchange data with other devices and systems over the internet with little or no human intervention. The ITU definition is worth quoting in the exam: IoT is 'a global infrastructure for the information society, enabling advanced services by interconnecting (physical and virtual) things based on existing and evolving interoperable ICT'. Two phrases carry the marks: uniquely addressable (each thing has an identity, ideally an IPv6 address) and interconnecting things (the value comes from data flowing between devices, not inside one device).",
              "The mechanism of every IoT system follows the same loop. A device senses a physical quantity (temperature, motion, location, voltage), converts it to digital data, sends it over a network to a processing element, and the result either drives an actuator or is presented to a human. The term itself was coined by Kevin Ashton in 1999 while describing RFID-based supply-chain tracking - 'things' first became addressable with barcodes and RFID tags in the 1990s, sensor networks matured in the 2000s, and the arrival of cheap 32-bit microcontrollers with built-in Wi-Fi (the ESP8266, 2014) plus IPv6 addressing capacity made connecting billions of devices economically feasible in the 2010s.",
              "A worked example shows why the definition matters. Consider a smart electricity meter deployment: 10,000 meters, each reporting energy usage every 15 minutes as a compact JSON/CBOR record of about 60 bytes. Each meter produces 96 readings per day, roughly 5.6 KB per meter per day, so the whole fleet generates about 48 MB of telemetry daily - small, but 10,000 connections opening and closing simultaneously is exactly the workload conventional HTTP servers struggle with and why purpose-built IoT protocols exist. The latency budget is minutes, not milliseconds, which lets the designer pick a low-power protocol like MQTT over a narrowband link instead of a high-rate one.",
              "The strengths of IoT are automation (routine monitoring without human presence), efficiency (energy, water and fuel savings from closed-loop control), and insight (data collected at scale reveals patterns invisible to sampled audits). The limitations are equally examinable: heavy dependence on network availability (a dead link means a blind system), a very large attack surface (millions of weakly secured devices), power constraints on battery-operated nodes, and interoperability problems when vendors use incompatible protocols. State both sides - applications alone earn only part of the marks.",
            ],
            keyTerms: [
              { term: "IoT", definition: "A network of uniquely addressable physical objects with embedded sensing, processing and connectivity that exchange data with minimal human intervention." },
              { term: "Thing", definition: "Any physical or virtual entity that can be identified and connected - a sensor node, an appliance, a vehicle, even a shipment of goods." },
              { term: "RFID", definition: "Radio Frequency Identification - passive tags energised by a reader's field; the historical starting point of IoT supply-chain tracking." },
              { term: "Telemetry", definition: "Periodic machine-generated measurements transmitted from a device to a backend for storage and analysis." },
              { term: "Kevin Ashton", definition: "Coined the term 'Internet of Things' in 1999 in the context of RFID supply chains at Procter & Gamble." },
            ],
            callout: {
              type: "tip",
              title: "Anchor every definition",
              body: "Examiners reward the ITU phrasing plus the two key phrases - 'uniquely addressable' and 'interconnecting things'. Then give one concrete system with numbers (devices, payload, interval). A definition plus a worked example reliably covers all 7 marks.",
            },
            diagram: {
              kind: "flow",
              title: "Evolution from tagged objects to the Web of Things",
              caption:
                "Four capability steps - each added addressing, sensing or intelligence on top of the previous one.",
              steps: [
                { label: "Tagged objects (1990s)", note: "barcodes and RFID identify items in supply chains" },
                { label: "Wireless sensor networks", note: "distributed sensing with low-power radios" },
                { label: "Internet of Things", note: "uniquely addressable devices, IPv6 scale, cheap SoCs" },
                { label: "Semantic interoperability", note: "common data models and ontologies" },
                { label: "Web of Things", note: "things as RESTful web resources consumed by apps" },
              ],
            },
            bullets: [
              "IoT is a network of uniquely addressable things that sense, process and exchange data with minimal human intervention.",
              "The ITU calls it a global infrastructure interconnecting physical and virtual things over interoperable ICT.",
              "Every IoT system loops: sense -> digitise -> transmit -> process -> actuate or present.",
              "The term was coined by Kevin Ashton in 1999 around RFID supply-chain tracking.",
              "Enablers of modern IoT: cheap 32-bit SoCs with radios (ESP8266/ESP32), IPv6 addressing, cloud storage and mobile apps.",
              "Worked scale example: 10,000 smart meters at 15-minute intervals, 60-byte payloads = about 48 MB of telemetry per day.",
              "Strengths: automation, closed-loop efficiency, fleet-scale insight.",
              "Limitations: network dependence, huge attack surface, battery constraints, protocol fragmentation.",
            ],
            table: {
              caption: "Three eras of IoT evolution.",
              headers: ["Era", "Technology", "What became possible"],
              rows: [
                ["1990s", "Barcodes, RFID tags and readers", "Automatic identification of objects in logistics"],
                ["2000s", "Wireless sensor networks, Zigbee-era radios", "Distributed environmental monitoring without cables"],
                ["2010s+", "Wi-Fi/BLE SoCs, IPv6, cloud platforms", "Billions of addressable devices with apps and analytics"],
              ],
            },
            examQuestions: [
              {
                q: "Define the Internet of Things. Trace its evolution from RFID-based object tracking to the modern IoT and explain, with a numerical example, how a typical IoT system operates.",
                marks: 7,
                outline: [
                  "Give the ITU definition and highlight 'uniquely addressable' and 'interconnecting things'.",
                  "List the four evolution stages: tagged objects, WSNs, IoT, Web of Things.",
                  "Describe the sense -> transmit -> process -> actuate loop of a generic system.",
                  "Give a numbers-first example: 10,000 smart meters, 15-minute interval, 60-byte payload, ~48 MB/day.",
                  "Explain why the workload motivates purpose-built IoT protocols.",
                  "Close with two strengths and two limitations of IoT.",
                ],
              },
              {
                q: "Name any four application domains of IoT.",
                marks: 2,
              },
              {
                q: "Who coined the term 'Internet of Things' and in what context?",
                marks: 2,
                outline: [
                  "Kevin Ashton, 1999.",
                  "Context: RFID-based supply-chain tracking at Procter & Gamble.",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Characteristics of IoT",
            body: [
              "Six characteristics distinguish a true IoT system from a plain embedded system, and RGPV papers repeatedly ask to 'explain the characteristics of IoT'. Intelligence is the capacity to derive decisions from data - a thermostat that learns occupancy patterns, not one that just switches at a fixed set-point. Connectivity is the enabling backbone: every device must attach to some network (Wi-Fi, Zigbee, BLE, cellular) and, ultimately, to the internet where protocols and platforms can reach it. Dynamic nature means devices change state constantly - connected or sleeping, sensing or idle, moving or stationary - and the system must handle churn gracefully.",
              "Sensing is the system's only contact with physical reality: sensors measure temperature, humidity, motion, light, proximity, sound and hundreds of other quantities, and their accuracy limits the intelligence of everything downstream. Heterogeneity is unavoidable - devices from different vendors, on different protocols and hardware platforms, must still interoperate; this is why the standard protocol stack and common data formats matter. Scale describes the sheer number of devices: IoT deployments routinely reach thousands to millions of nodes, so address space (IPv6 gives 2^128 addresses), naming, and device management at fleet scale become first-class design problems rather than afterthoughts.",
              "The mechanism by which these characteristics combine is best seen in a worked example: a smart parking system across a 500-space city lot. Each bay holds a magnetometer node (sensing) reporting occupancy every 30 seconds, 40 bytes per message, over a LoRaWAN link (connectivity) drawing about 10 microamps on average so the 2400 mAh battery lasts years (a scale-driven power decision). Parking apps and dashboards from different vendors consume the same normalized data (heterogeneity), the map updates continuously as cars arrive and leave (dynamic nature), and a demand-based pricing algorithm adjusts rates by zone occupancy (intelligence). Removing any one characteristic degrades the system to a 'connected gadget'.",
              "In answers, present the characteristics as a stack: sensing and connectivity at the base because nothing works without them, dynamic nature and heterogeneity as the engineering realities in the middle, and intelligence plus scale as the differentiators at the top that justify IoT over plain automation. Advantages of this framing: it maps directly onto the architecture layers of section 1.5, so the examiner sees coherence. Limitation to acknowledge: real deployments trade characteristics against each other - maximum scale usually forces lower data rates and less intelligence at the node, which is precisely the trade-off LPWAN protocols (Unit II) formalise.",
            ],
            keyTerms: [
              { term: "Intelligence", definition: "Ability of the system to derive decisions and predictions from sensed data, e.g. ML-based occupancy prediction." },
              { term: "Dynamic nature", definition: "Devices continuously change state - connected, sleeping, moving, reconfigured - and the system must tolerate churn." },
              { term: "Heterogeneity", definition: "Coexistence of devices differing in hardware, OS, protocol and vendor that must still interoperate." },
              { term: "Scale", definition: "Deployment size from hundreds to millions of nodes, making addressing and fleet management central design concerns." },
            ],
            callout: {
              type: "exam",
              title: "Exam pattern for characteristics",
              body: "Write all six - Intelligence, Connectivity, Dynamic nature, Sensing, Heterogeneity, Scale - one line of explanation each, then one sentence tying them to a concrete deployment (parking, agriculture or smart meter). Six bare names without explanations earn only half the marks.",
            },
            diagram: {
              kind: "pyramid",
              title: "The six characteristics as a capability stack",
              caption:
                "Base layers enable the system; top layers differentiate IoT from plain automation.",
              tiers: [
                { label: "Intelligence", note: "analytics and decisions from data" },
                { label: "Scale", note: "thousands to millions of addressable nodes" },
                { label: "Heterogeneity", note: "cross-vendor, cross-protocol interoperability" },
                { label: "Dynamic nature", note: "constant state changes and churn" },
                { label: "Connectivity + Sensing", note: "network attachment and physical measurement" },
              ],
            },
            bullets: [
              "Intelligence: decisions derived from data, e.g. demand-based parking pricing.",
              "Connectivity: every device attaches to some network and ultimately the internet.",
              "Dynamic nature: devices are sleeping/waking, moving, joining and leaving continuously.",
              "Sensing: the only contact with physical reality - accuracy limits downstream intelligence.",
              "Heterogeneity: different vendors, protocols and hardware must interoperate.",
              "Scale: IPv6 offers 2^128 addresses; management must be automated at fleet size.",
              "Worked example: 500-bay smart parking - magnetometer nodes, LoRaWAN at 10 uA average, 40-byte messages every 30 s.",
              "Characteristics trade off: more scale usually means lower per-node data rate and intelligence.",
            ],
            table: {
              caption: "Characteristic -> design consequence.",
              headers: ["Characteristic", "Design consequence in practice"],
              rows: [
                ["Sensing", "Choose sensor accuracy and calibration schedule first"],
                ["Connectivity", "Pick protocol by range, rate, power budget"],
                ["Dynamic nature", "Need reconnection, caching and OTA update support"],
                ["Heterogeneity", "Standard protocols and common payload formats"],
                ["Scale", "IPv6 addressing, automated provisioning, fleet dashboards"],
                ["Intelligence", "Cloud analytics or edge inference placed deliberately"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the six characteristics of the Internet of Things with one example of each.",
                marks: 7,
                outline: [
                  "Define IoT in one line to anchor the answer.",
                  "Intelligence: data-driven decisions (occupancy-based pricing).",
                  "Connectivity: network attachment (Wi-Fi, Zigbee, LoRaWAN).",
                  "Dynamic nature: continuous state changes and reconnection.",
                  "Sensing: measurement of physical quantities with stated accuracy.",
                  "Heterogeneity: cross-vendor interoperability via standard protocols.",
                  "Scale: IPv6 addressing and fleet management; tie all six to one deployment.",
                ],
              },
              {
                q: "Which characteristic forces the use of IPv6 in large IoT deployments?",
                marks: 2,
                outline: ["Scale - billions of devices need globally unique addresses."],
              },
              {
                q: "Differentiate between an embedded system and an IoT system using any two characteristics.",
                marks: 3,
                outline: [
                  "Connectivity: IoT devices attach to networks and exchange data externally; embedded systems may be standalone.",
                  "Intelligence/scale: IoT aggregates fleet data for analytics; a lone embedded device acts locally.",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Physical design of IoT: things and protocols",
            body: [
              "The physical design of an IoT system answers 'what is actually built?' It has two halves. The first is the 'things': devices with a unique identity, embedded sensors and/or actuators, a processing unit (8-bit to 32-bit microcontroller or a Linux single-board computer), memory, radio hardware, and a power source (mains, battery, or energy harvesting). A 'thing' must be able to collect status data (temperature reported as 27.4 C), respond to commands ('switch the relay on'), and identify itself on the network (a MAC address, an IPv6 address or a platform-issued device ID).",
              "The second half is the protocol stack that moves the data, conventionally drawn in five layers from bottom to top. The link layer carries frames over the local media: IEEE 802.3 Ethernet, IEEE 802.11 Wi-Fi, 802.15.4 (used by Zigbee and 6LoWPAN), 2G/3G/LTE/NB-IoT cellular, LoRaWAN and NFC. The network layer routes packets end to end: IPv4 and IPv6, with 6LoWPAN adapting IPv6 to tiny radios. The transport layer provides end-to-end delivery: TCP (reliable, ordered) and UDP (lightweight, fast). The application layer defines the message semantics: HTTP for request-response web access, CoAP for constrained REST, MQTT and WebSocket for publish-subscribe and streaming, XMPP for instant-message-style exchange.",
              "A worked example ties the layers to a real deployment: a home air-quality monitor (PM2.5, CO2, temperature) built on an ESP32. It publishes a 90-byte JSON payload every 60 seconds over Wi-Fi (link layer 802.11, network layer IPv4 via the home router, transport layer TCP, application layer MQTT on port 1883). The designer chose TCP+MQTT because occasional packet loss is tolerable but a lost subscription would silently stop data; if the same monitor were battery-powered in a field, the stack would shift to 802.15.4/6LoWPAN with UDP+CoAP to cut overhead - the layer structure stays identical, only the implementations change.",
              "The advantage of the layered physical design is modularity: any layer can be swapped without rewriting the layers above, which is why the same MQTT application code can run over Wi-Fi today and NB-IoT tomorrow. The limitation is overhead: a full TCP/IP stack plus JSON is thousands of bytes of code and header cost that a constrained 8-bit node with 2 KB of RAM cannot afford - hence the specialised protocol variants studied in Unit II. In the exam, always draw the stack bottom-up and name at least two protocols per layer; naming only 'the internet layer' scores poorly.",
            ],
            keyTerms: [
              { term: "Thing", definition: "A device with unique identity that can sense/actuate, process, and communicate status and commands." },
              { term: "IEEE 802.15.4", definition: "Low-rate wireless PAN standard at 2.4 GHz used as the link layer by Zigbee and 6LoWPAN." },
              { term: "6LoWPAN", definition: "Adaptation layer that compresses and fragments IPv6 packets for tiny 802.15.4 frames." },
              { term: "MQTT", definition: "Lightweight publish-subscribe application protocol over TCP, default port 1883." },
              { term: "CoAP", definition: "Constrained Application Protocol - REST semantics over UDP for low-power devices, port 5683." },
            ],
            callout: {
              type: "warning",
              title: "Layers have protocol pairs, not single names",
              body: "The most common slip in physical-design answers is naming one protocol per layer. The examiner expects two or more per layer (e.g. link: 802.11 AND 802.15.4 AND LTE; application: MQTT AND CoAP AND HTTP). One name per layer suggests memorising, not understanding.",
            },
            diagram: {
              kind: "pipeline",
              title: "The five-layer IoT protocol stack",
              caption:
                "Read bottom-up: each layer serves the one above it, and any layer can be swapped independently.",
              stages: [
                { label: "Application layer", note: "MQTT, CoAP, HTTP, WebSocket, XMPP" },
                { label: "Transport layer", note: "TCP (reliable) or UDP (lightweight)" },
                { label: "Network layer", note: "IPv4, IPv6, 6LoWPAN adaptation" },
                { label: "Link layer", note: "802.11 Wi-Fi, 802.15.4, Ethernet, LTE, LoRaWAN, NFC" },
                { label: "Physical media", note: "2.4 GHz radio, wires, cellular bands" },
              ],
            },
            bullets: [
              "Physical design = the devices (things) + the protocol stack that connects them.",
              "A thing must: collect data, respond to commands, and carry a unique identity.",
              "Link layer: 802.3 Ethernet, 802.11 Wi-Fi, 802.15.4, 2G/3G/LTE/NB-IoT, LoRaWAN, NFC.",
              "Network layer: IPv4, IPv6, 6LoWPAN for constrained radios.",
              "Transport layer: TCP for reliability, UDP for low overhead.",
              "Application layer: HTTP, CoAP, MQTT, WebSocket, XMPP.",
              "Worked example: ESP32 air monitor, 90-byte JSON every 60 s over Wi-Fi + TCP + MQTT/1883.",
              "Layering trades modularity for overhead - constrained nodes use trimmed stacks instead.",
            ],
            table: {
              caption: "Protocol stack with at least two options per layer.",
              headers: ["Layer", "Protocols", "Typical role"],
              rows: [
                ["Application", "MQTT, CoAP, HTTP, WebSocket, XMPP", "Message semantics, REST or pub-sub"],
                ["Transport", "TCP, UDP", "End-to-end delivery, ordered or fast"],
                ["Network", "IPv4, IPv6, 6LoWPAN", "Global addressing and routing"],
                ["Link", "802.11, 802.15.4, Ethernet, LTE, LoRaWAN, NFC", "Local media access"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the physical design of IoT. Describe the protocol stack used in IoT systems, naming at least two protocols at each layer.",
                marks: 7,
                outline: [
                  "Define physical design: things + protocol stack.",
                  "Describe a thing: identity, sensors/actuators, processing, radio, power.",
                  "Draw the five-layer stack bottom-up.",
                  "Link layer: 802.11, 802.15.4, Ethernet, LTE, LoRaWAN, NFC.",
                  "Network layer: IPv4, IPv6, 6LoWPAN; transport: TCP vs UDP trade-off.",
                  "Application layer: MQTT, CoAP, HTTP, WebSocket, XMPP.",
                  "Worked example: ESP32 monitor - 90 bytes per minute over Wi-Fi/TCP/MQTT; note the constrained-node alternative.",
                ],
              },
              {
                q: "List the layers of the IoT protocol stack in order, bottom to top.",
                marks: 2,
                outline: ["Link, Network, Transport, Application (plus the physical media below)."],
              },
              {
                q: "Why does a battery-powered field node prefer UDP + CoAP over TCP + MQTT?",
                marks: 3,
                outline: [
                  "TCP handshakes and headers cost energy and delay sleep cycles.",
                  "CoAP over UDP uses 4-byte header and REST verbs with minimal overhead.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Logical design: functional blocks, communication models and APIs",
            body: [
              "The logical design abstracts away hardware and describes what the system must do. It is specified through three vocabulary sets. First, the IoT functional blocks: Device (sensing, actuating, monitoring, control), Communication (the messaging fabric), Services (device monitoring, device control, data publishing, device discovery), Management (provisioning, firmware updates, security administration), Security (authentication, authorisation, message and content integrity), Application (the user-facing layer) and Management bridging all of them. A complete system touches every block; exams often ask you to label them on a block diagram.",
              "Second, the communication models - four of them. In the request-response model a client asks, a server answers (HTTP GET/POST - the classic REST web interaction). In the publish-subscribe model publishers send messages to a broker on topics; subscribers receive only the topics they subscribed to, so sender and receiver never meet directly (MQTT is the canonical example). In the push-pull model producers push messages onto a queue and consumers pull when ready, decoupling rates and tolerating bursts (message queues in analytics pipelines). In the exclusive pair model two endpoints hold a persistent, stateful full-duplex connection (a WebSocket session streaming sensor values to a dashboard).",
              "Third, the communication APIs realise the models: REST-based APIs expose each device as a web resource addressed by URIs (GET /sensors/1/temperature returns a state; the device is stateless between requests), while WebSocket-based APIs keep one TCP connection open with a handshake upgrade, after which both sides push JSON frames at will - ideal for low-latency, continuous streams. The choice is a real engineering decision: REST suits periodic readings and dashboards (one request per reading, cacheable), WebSocket suits live telemetry at sub-second rates where per-request headers would waste bandwidth.",
              "A worked example makes the models concrete: a fleet of 200 vibration sensors on factory motors. Each sensor publishes to the topic plant/line3/motor17/vibration at 1 Hz with a 30-byte payload (publish-subscribe via MQTT); the analytics service subscribes with a wildcard plant/line3/+/vibration and maintains a rolling 10-minute RMS average; the technician's dashboard opens one WebSocket to the backend and receives every threshold breach within 200 ms (exclusive pair); a maintenance portal queries yesterday's summary with plain REST GETs (request-response). Advantages of this logical separation: components evolve independently and protocols can change without touching models. Limitation: indirect coupling via topics/queues makes tracing a message's full path harder during debugging - a cost examiners like you to mention.",
            ],
            keyTerms: [
              { term: "Functional blocks", definition: "Device, Communication, Services, Management, Security and Application blocks composing an IoT system logically." },
              { term: "Publish-subscribe", definition: "Model where publishers send to topics via a broker and subscribers receive subscribed topics without direct contact." },
              { term: "Push-pull", definition: "Producers push onto queues, consumers pull at their own rate - decouples production and consumption speeds." },
              { term: "Exclusive pair", definition: "Persistent stateful full-duplex connection between two endpoints, e.g. a WebSocket session." },
              { term: "REST", definition: "Resource-oriented API style: devices as URIs, stateless request-response via GET/POST/PUT/DELETE." },
            ],
            callout: {
              type: "tip",
              title: "Four models, two APIs - one sentence each",
              body: "Memorise the four models (request-response, publish-subscribe, push-pull, exclusive pair) each with its canonical technology (HTTP, MQTT, queues, WebSocket), then the two APIs (REST vs WebSocket) with their trade-off (stateless per-request vs persistent full-duplex). That sentence skeleton alone earns the definition marks.",
            },
            diagram: {
              kind: "fork",
              title: "Choosing a communication model",
              caption:
                "Start from the data flow you need; all four branches are valid answers to 'how do endpoints talk?'.",
              start: "How should two IoT endpoints exchange data?",
              branches: [
                { label: "Client asks, server answers", outcome: "Request-response model - HTTP/REST, cacheable, stateless", good: true },
                { label: "Many-to-many via topics", outcome: "Publish-subscribe model - MQTT broker decouples publishers and subscribers", good: true },
                { label: "Producer bursts, consumer drains", outcome: "Push-pull model - queues absorb rate mismatches", good: true },
                { label: "Continuous two-way stream", outcome: "Exclusive pair model - persistent WebSocket full-duplex session", good: true },
              ],
            },
            bullets: [
              "Six functional blocks: Device, Communication, Services, Management, Security, Application.",
              "Services include device monitoring, device control, data publishing and device discovery.",
              "Request-response: client asks, server answers; HTTP is canonical; stateless.",
              "Publish-subscribe: broker-mediated topics; MQTT is canonical; sender and receiver decoupled.",
              "Push-pull: queue between producer and consumer absorbs bursty rates.",
              "Exclusive pair: persistent full-duplex stateful connection; WebSocket is canonical.",
              "REST API = devices as URI resources; WebSocket API = one upgraded TCP connection, JSON frames both ways.",
              "Worked example: 200 vibration sensors at 1 Hz, 30-byte payloads; MQTT wildcard plant/line3/+/vibration; dashboard latency ~200 ms.",
            ],
            table: {
              caption: "Communication models at a glance.",
              headers: ["Model", "Coupling", "Canonical tech", "Best for"],
              rows: [
                ["Request-response", "Tight, synchronous", "HTTP/REST", "Periodic readings, dashboards"],
                ["Publish-subscribe", "Loose via broker", "MQTT", "One-to-many telemetry distribution"],
                ["Push-pull", "Loose via queue", "Message queues", "Rate-mismatched analytics pipelines"],
                ["Exclusive pair", "Direct, persistent", "WebSocket", "Live sub-second streams, control"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the logical design of IoT. Describe all four IoT communication models with a suitable example of each, and distinguish REST-based from WebSocket-based APIs.",
                marks: 7,
                outline: [
                  "Define logical design as the functional view abstracted from hardware.",
                  "List the six functional blocks.",
                  "Request-response: HTTP, stateless, cacheable.",
                  "Publish-subscribe: broker topics, MQTT example.",
                  "Push-pull: queues decouple producer/consumer rates.",
                  "Exclusive pair: persistent WebSocket full-duplex session.",
                  "REST (URI resources, per-request) vs WebSocket (persistent, low latency) with a numbers example.",
                ],
              },
              {
                q: "Which communication model does MQTT implement?",
                marks: 2,
                outline: ["Publish-subscribe - publishers and subscribers meet only at the broker."],
              },
              {
                q: "What is an exclusive pair model? Give one example technology.",
                marks: 3,
                outline: [
                  "Persistent, stateful, full-duplex connection between exactly two endpoints.",
                  "Example: WebSocket streaming session between dashboard and backend.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "IoT reference architecture and layers",
            body: [
              "A reference architecture is the shared blueprint every concrete IoT system is projected onto, and the standard presentation is layered. The perception layer (also called the device or sensing layer) is the physical boundary: sensors, actuators, RFID readers and microcontrollers that touch the real world. The network layer transports their data: Wi-Fi, Zigbee, LoRaWAN, cellular and the IP fabric above them, including gateways that translate between heterogeneous links. The processing/middleware layer stores, filters and analyses the stream - databases, stream engines and analytics services. The application layer is what users see: dashboards, mobile apps and domain services. Some references split this further into a business layer (business models, workflows) above the application layer, or separate a service-management layer that handles device provisioning and orchestration.",
              "The mechanism that makes layering valuable is contract-based decomposition: each layer exposes a stable interface upward (e.g. the network layer offers 'send bytes reliably to an address') so a layer can evolve - swapping Zigbee for LoRaWAN, or a rules engine for a stream processor - without rippling changes upward. Data climbs the stack with each layer adding value: raw bits become frames, frames become measurements, measurements become events, events become decisions. Commands descend the same stack in reverse. This mirrors the OSI instinct, but IoT layers are functional rather than strict protocol layers - examiners expect the four/five-layer functional view, not OSI memorisation.",
              "A worked example maps a real system onto the layers: the smart agriculture design of 5.3. Perception: 40 capacitive soil probes and 2 weather stations (ESP32-class nodes, the Unit III hardware). Network: LoRaWAN links at 868 MHz carrying 12-byte frames to 4 gateways, then MQTT over the farm's broadband. Processing: a time-series store with a 15-minute downsampling policy plus the irrigation threshold/ET logic (Unit IV patterns). Application: the farmer's dashboard showing zone moisture and irrigation volumes, and the actuation commands that flow back down to the 12 V latching valves. Every exam answer that says 'draw the IoT architecture for X' is scored against exactly this mapping.",
              "The advantage of the layered reference model is a shared vocabulary: vendors, integrators and examiners all know which box a component belongs to, and security responsibilities can be assigned per layer (device hardening at perception, TLS at network, access control at application). The limitation is that real systems leak across layers: edge nodes increasingly run processing that 'belongs' to the middleware layer (the edge/fog discussion of 4.4), and gateways straddle the network and processing layers simultaneously. The right exam posture is to draw the clean layered picture, then add one sentence acknowledging the edge/fog overlap.",
            ],
            keyTerms: [
              { term: "Perception layer", definition: "The device layer - sensors, actuators and microcontrollers that interact with the physical world." },
              { term: "Network layer", definition: "Transport fabric - wireless links, gateways and IP routing that moves data between devices and platforms." },
              { term: "Processing/middleware layer", definition: "Storage, filtering and analytics services that turn telemetry into information." },
              { term: "Application layer", definition: "User-facing dashboards, apps and domain services built on processed data." },
              { term: "Business layer", definition: "Above the application layer - business models, workflows and monetisation that consume IoT insight." },
            ],
            callout: {
              type: "exam",
              title: "Map, then annotate",
              body: "Architecture questions are scored on the mapping: draw the four/five layers, place named components of a concrete system in each (probes, LoRaWAN, MQTT, time-series DB, dashboard), and add one arrow for descending commands. A generic unlabeled stack diagram earns almost nothing.",
            },
            diagram: {
              kind: "layers",
              title: "The layered IoT reference architecture",
              caption:
                "Data climbs the stack gaining meaning; commands descend it gaining physical effect.",
              layers: [
                { label: "Application / business layer", note: "dashboards, apps, workflows, business models" },
                { label: "Processing / middleware layer", note: "storage, stream processing, analytics, device management" },
                { label: "Network layer", note: "Wi-Fi, Zigbee, LoRaWAN, cellular, gateways, IP" },
                { label: "Perception layer", note: "sensors, actuators, RFID, microcontrollers" },
              ],
            },
            bullets: [
              "Reference architecture = shared blueprint with functional layers, not a strict protocol stack.",
              "Perception layer: sensors, actuators, RFID, MCUs - the physical boundary.",
              "Network layer: heterogeneous links plus gateways and IP transport.",
              "Processing/middleware layer: storage, filtering, stream processing, analytics.",
              "Application layer: dashboards and domain services; some models add a business layer above.",
              "Each layer adds meaning upward: bits -> frames -> measurements -> events -> decisions.",
              "Worked mapping: farm example - probes, LoRaWAN, MQTT, time-series + threshold logic, farmer dashboard, valve commands.",
              "Stable inter-layer contracts allow swapping any layer without redesign; edge/fog overlap is the honest caveat.",
            ],
            table: {
              caption: "Layers with responsibilities and example technologies.",
              headers: ["Layer", "Responsibility", "Examples"],
              rows: [
                ["Application", "User value and domain logic", "Dashboards, mobile apps, alerting"],
                ["Processing", "Store, filter, analyse", "InfluxDB, Flink, rules engines"],
                ["Network", "Transport and interconnection", "LoRaWAN, Zigbee, Wi-Fi, MQTT, IP"],
                ["Perception", "Sense and actuate", "Soil probes, cameras, valves, MCUs"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the layered IoT reference architecture. Describe each layer's responsibilities with example technologies, and map a concrete system (e.g. precision agriculture) onto the layers including the downward command path.",
                marks: 7,
                outline: [
                  "Purpose of a reference architecture vs a protocol stack.",
                  "Perception layer: sensors/actuators/MCUs with examples.",
                  "Network layer: heterogeneous links, gateways, IP.",
                  "Processing/middleware: storage, streaming, analytics, device management.",
                  "Application (and optional business) layer with user-facing examples.",
                  "Map the farm system: probes -> LoRaWAN/MQTT -> time-series + rules -> dashboard -> valve commands.",
                  "Note the edge/fog overlap as the real-world caveat.",
                ],
              },
              {
                q: "Name the four layers of the IoT reference architecture in order from physical world upward.",
                marks: 2,
                outline: ["Perception, Network, Processing/middleware, Application."],
              },
              {
                q: "Why can layers be swapped independently in this architecture?",
                marks: 3,
                outline: [
                  "Each layer exposes a stable contract upward.",
                  "Concrete example: replace Zigbee with LoRaWAN below an unchanged MQTT/application layer.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "IoT enabling technologies",
            body: [
              "IoT is not one technology but a convergence of six enabling technologies, each matured independently and combined by IoT. Embedded systems supply the computational core: low-cost microcontrollers and system-on-chips with integrated radios. Wireless sensor networks supply the distributed sensing pattern: many small nodes cooperating to a sink (Unit 4.7). Cloud computing supplies elastic storage and compute (4.2). Big data analytics supplies the methods to extract value from high-volume telemetry (4.1, 4.6). Networking protocols supply interoperability - the IP family and IoT application protocols of Unit II. And control systems/automation supply the actuation discipline: feedback loops, PLCs and SCADA concepts that IoT inherits from industry (5.5).",
              "The mechanism of convergence is division of labour along the data path. Embedded devices generate data cheaply and at the physical edge; WSN and networking patterns move it; cloud platforms store and process it at fleet scale; analytics converts stored data into models and decisions; control systems execute those decisions back on the physical world. No single technology could do all five jobs: an embedded MCU cannot host fleet analytics, and a cloud data centre cannot sense soil moisture. The modern refinement is that some processing migrates down the path - edge and fog computing (4.4) - but the six-way convergence framing remains the standard exam answer.",
              "A worked example shows all six in one deployment: the smart parking city of 5.2. Embedded systems: ESP32-based magnetometer nodes costing under 10 dollars. WSN: nodes form LPWAN clusters reporting to gateways. Networking: LoRaWAN at 868 MHz for km-range 40-byte frames, MQTT over IP as the backbone. Cloud computing: platform ingestion of about 5.7M messages/day with elastic scaling. Big data analytics: occupancy prediction models trained on months of zone data, feeding demand pricing. Control systems: the pricing policy acts on signage and the lighting domain's adaptive dimming loops. Remove any one technology and the system either cannot sense, cannot communicate, cannot scale, or cannot decide.",
              "The advantage of naming the convergence explicitly is diagnostic: when a deployment fails, the failure usually localises to one enabling technology (a sensing problem, a connectivity problem, an analytics problem). The limitation of the framing is that boundaries blur - a modern ESP32 with TinyML is simultaneously embedded system, network node and analytics engine, which is why exam answers should name all six technologies with one concrete role each rather than treating them as isolated chapters of history.",
            ],
            keyTerms: [
              { term: "Embedded system", definition: "Purpose-built computing hardware/software combination - the microcontroller core of every IoT node." },
              { term: "Enabling technology", definition: "One of the independent fields (embedded, WSN, cloud, analytics, networking, control) whose convergence produces IoT." },
              { term: "Convergence", definition: "The combination of independent technologies along the data path, each owning one job." },
              { term: "Control system", definition: "Feedback-loop discipline (PLCs, SCADA, PID) that IoT inherits for actuation and closed-loop control." },
            ],
            callout: {
              type: "tip",
              title: "Six technologies, six roles, one system",
              body: "List all six enabling technologies and give each one concrete role in a single deployment example. 'Embedded = the ESP32 nodes; WSN = their clustering; networking = LoRaWAN/MQTT; cloud = ingestion at 5.7M msgs/day; analytics = occupancy prediction; control = pricing and dimming loops.' One sentence per technology is the full pattern.",
            },
            diagram: {
              kind: "compare",
              title: "Enabling technologies: data producers versus data consumers",
              caption:
                "The left column creates and moves data at the edge; the right column stores, analyses and acts on it.",
              left: {
                heading: "At the edge (produce and move)",
                items: [
                  "Embedded systems - MCUs and SoCs as the node core",
                  "Sensors and actuators - the physical interface",
                  "Wireless sensor networks - cooperative multi-node sensing",
                  "Networking protocols - IP, 6LoWPAN, MQTT/CoAP transport",
                ],
              },
              right: {
                heading: "In the backend (store, analyse, act)",
                items: [
                  "Cloud computing - elastic storage and compute",
                  "Big data analytics - 5V-scale model building",
                  "Machine learning - prediction from telemetry",
                  "Control systems - executing decisions on the physical world",
                ],
              },
            },
            bullets: [
              "IoT = convergence of embedded systems, WSNs, networking, cloud, big data analytics and control systems.",
              "Each technology owns one job along the data path: sense, move, store, analyse, decide, act.",
              "Embedded systems: cheap MCUs/SoCs with integrated radios (ESP32 under 10 dollars).",
              "WSN: cooperative clustered sensing patterns inherited by modern LPWAN deployments.",
              "Cloud: elastic ingestion (5.7M parking messages/day) and fleet-scale storage.",
              "Analytics/ML: occupancy prediction and predictive maintenance models (4.6).",
              "Control systems: feedback loops and SCADA discipline executing decisions (5.5).",
              "Modern refinement: edge/fog computing migrates backend jobs down toward the devices.",
            ],
            table: {
              caption: "Enabling technologies and their contribution.",
              headers: ["Technology", "Contribution", "Where seen in this file"],
              rows: [
                ["Embedded systems", "Node computation", "Unit III boards and MCUs"],
                ["Sensors/actuators", "Physical interface", "3.1, 3.2"],
                ["WSN", "Cooperative sensing", "4.7"],
                ["Networking", "Interoperable transport", "Unit II protocols"],
                ["Cloud computing", "Elastic backend", "4.2, 4.3"],
                ["Big data / ML", "Value extraction", "4.1, 4.5, 4.6"],
                ["Control systems", "Closed-loop actuation", "5.5, 3.2"],
              ],
            },
            examQuestions: [
              {
                q: "List and explain the enabling technologies of IoT. Show how all of them contribute roles in one concrete deployment, and explain why no single technology suffices alone.",
                marks: 7,
                outline: [
                  "Name the six enabling technologies.",
                  "Embedded systems as node core (ESP32 example).",
                  "WSN cooperative sensing pattern.",
                  "Networking: IP family plus IoT protocols for interoperability.",
                  "Cloud computing: elastic ingestion and storage with numbers.",
                  "Big data analytics/ML: prediction and value extraction.",
                  "Control systems: actuation loops; conclude with the division-of-labour argument.",
                ],
              },
              {
                q: "Which enabling technology supplies IoT's elastic storage and compute?",
                marks: 2,
                outline: ["Cloud computing."],
              },
              {
                q: "What does IoT inherit from classical control systems?",
                marks: 3,
                outline: [
                  "Feedback-loop discipline for actuation.",
                  "Industrial concepts: PLCs, SCADA, deterministic control layers (5.5).",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "IoT levels and deployment templates",
            body: [
              "IoT systems are classified into six levels by two axes: the number of device types/nodes and where data analysis happens (locally on the device, partially in the cloud, or entirely in the cloud). The classification, popularised in IoT textbooks (Bahga and Madisetti), gives each level a deployment template - a reusable skeleton of hardware and software choices - so a designer can match a project to a level and inherit proven architecture decisions. Level 1: a single node doing sensing and local analysis (one smart AC, one temperature logger). Level 2: a single node, analysis in the cloud (a node that senses locally but its data is analysed by a cloud application). Level 3: multiple nodes of the same type, cloud analysis. Level 4: multiple nodes plus observers/specialised nodes performing local preliminary analysis, with cloud backup. Level 5: multiple end nodes plus one coordinator node, cloud analysis. Level 6: many nodes of many types, distributed across locations, with full cloud analysis.",
              "The mechanism of using the levels is requirement triage: count your node types, decide where analysis must happen (latency, connectivity, cost), and read off the template. The template then dictates components: a Level 1 template needs no cloud subscription and no gateway; a Level 6 template implies multi-protocol gateways, a device-management platform and cloud analytics - and therefore the security stack of 5.7 as a mandatory part, not an afterthought. The level also predicts data volume: levels 1-2 produce kilobytes per day; level 6 fleets produce gigabytes, which drives the storage designs of 4.8.",
              "A worked classification with numbers: the elective's own running examples. The plant-watering alert node of 3.3 (one Uno, threshold logic on device, no cloud) is Level 1 - analysis local, single node. The soil-alert ESP32 that publishes to ThingSpeak and gets alerts back is Level 2 - single node, cloud analysis. The 40-probe irrigation farm is Level 5 - many end nodes, gateways/coordinators aggregating, cloud analytics. The 200-bay parking city (thousands of nodes across zones, cloud-heavy) is Level 6. Getting the level right is not academic: the farm at Level 5 needs LoRaWAN gateways and staged OTA; the Level 1 node needs none of that, and over-architecting it would double its cost.",
              "The advantage of the level taxonomy is communication efficiency: saying 'this is a Level 4 deployment' transfers a whole architecture sketch in two words. The limitation is that levels describe structure, not quality: a Level 1 system can still be insecure, and a Level 6 system can be poorly designed. Exams usually ask you to (a) define the levels, (b) classify a given scenario with justification, or (c) match a level to components - practise all three forms, and always justify the classification with the two axes (node count/types, analysis location), never by intuition alone.",
            ],
            keyTerms: [
              { term: "IoT level", definition: "Classification (1-6) of an IoT system by number of node types and where data analysis occurs." },
              { term: "Deployment template", definition: "Reusable hardware/software skeleton associated with each level, inherited when a project matches it." },
              { term: "Observer node", definition: "Level 4-5 role: a node that aggregates or pre-processes others' data locally before cloud hand-off." },
              { term: "Analysis location", definition: "The axis deciding level: local on device, partially cloud, or entirely cloud." },
            ],
            callout: {
              type: "exam",
              title: "Justify the level with the two axes",
              body: "Whenever you classify a scenario as Level N, state both axes explicitly: how many node types it has, and where analysis happens (local/partially-cloud/full-cloud). 'It is Level 5 because it has many end nodes plus coordinators with cloud analysis' is a full-credit sentence; bare level names are not.",
            },
            diagram: {
              kind: "matrix",
              title: "The six IoT levels on two axes",
              caption:
                "Node count and analysis location together determine the level - read the quadrants as a decision grid.",
              axes: { x: "Analysis location (local -> cloud)", y: "Node count/complexity (low -> high)" },
              quadrants: [
                { label: "TL: Level 4", note: "multiple nodes + observers, local pre-analysis with cloud support" },
                { label: "TR: Level 6", note: "many node types across locations, full cloud analysis" },
                { label: "BL: Level 1-2", note: "single node; analysis local (1) or in cloud (2)" },
                { label: "BR: Level 3-5", note: "multiple nodes (3), cloud analysis (3), coordinator added (5)" },
              ],
            },
            bullets: [
              "Six levels classified by node count/types and analysis location.",
              "Level 1: single node, local analysis (smart thermostat).",
              "Level 2: single node, cloud analysis (sensor publishing to a cloud app).",
              "Level 3: multiple nodes of one type, cloud analysis.",
              "Level 4: multiple nodes plus observers doing local pre-analysis.",
              "Level 5: many end nodes plus a coordinator, cloud analysis (the irrigation farm).",
              "Level 6: many node types across locations, full cloud analysis (the parking city).",
              "Each level carries a deployment template dictating gateways, platforms and security needs.",
            ],
            table: {
              caption: "The six levels with running examples from this file.",
              headers: ["Level", "Nodes", "Analysis", "Example from this file"],
              rows: [
                ["1", "Single", "Local", "Plant-watering alert node (3.3)"],
                ["2", "Single", "Cloud", "ESP32 posting to ThingSpeak"],
                ["3", "Multiple, same type", "Cloud", "Row of identical probes"],
                ["4", "Multiple + observers", "Local + cloud", "Line gateway pre-processing (4.4)"],
                ["5", "Many + coordinator", "Cloud", "40-probe irrigation farm (5.3)"],
                ["6", "Many types, many locations", "Cloud", "200-bay parking city (5.2)"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the six IoT levels and deployment templates. Classify the systems below (single local node; farm with 40 probes and gateways; multi-domain city platform) with justification on both axes.",
                marks: 7,
                outline: [
                  "State the two classification axes.",
                  "Levels 1-2: single node, local vs cloud analysis.",
                  "Levels 3-5: multiple nodes, observers/coordinator roles.",
                  "Level 6: many node types across locations, cloud analysis.",
                  "Explain what a deployment template dictates (gateways, platform, security).",
                  "Classify the three scenarios with axis justification.",
                  "Note the cost consequence of choosing the right level.",
                ],
              },
              {
                q: "Which IoT level is a single node whose data is analysed entirely in the cloud?",
                marks: 2,
                outline: ["Level 2."],
              },
              {
                q: "What extra component distinguishes Level 5 from Level 3?",
                marks: 3,
                outline: [
                  "A coordinator node aggregating many end nodes.",
                  "Level 3 has multiple similar nodes but no coordinating/aggregating node.",
                ],
              },
            ],
          },
          {
            number: "1.8",
            title: "Scope, challenges and the design methodology",
            body: [
              "The scope of IoT spans consumer (homes, wearables), commercial (retail, logistics, buildings), industrial (manufacturing, energy, agriculture) and infrastructure (cities, utilities, transport) domains - and within each, the same small set of recurring jobs: monitor, control, optimise and predict. The challenges recur just as consistently: power (battery nodes must live years), connectivity (coverage, bandwidth and cost in the field), security and privacy (Unit V's whole subject), interoperability (vendor protocol fragmentation), scalability (fleet management of thousands of devices), and data management (volume, quality and retention - Unit IV). A good exam answer pairs each challenge with the mitigation pattern this file has already introduced: power -> LPWAN/duty cycling, connectivity -> protocol selection (2.8), interoperability -> standard stacks (6LoWPAN/MQTT), scale -> platforms and OTA (4.3).",
              "The mechanism of turning scope into a shipped system is a design methodology with steps: (1) purpose and requirements - what does the system monitor or control, expressed as numbers; (2) process specification - what state changes matter and when; (3) domain model - the entities and their relationships (sensors, actuators, services, users); (4) information model - how the data is structured (virtual entities, attributes, units); (5) service specification - the endpoints and operations each component exposes; (6) IoT level specification - classification by the 1.7 axes; (7) functional view - mapping functional blocks onto the layers; (8) operational view - deployment, provisioning and update workflows; then device and component integration and finally application development. The order matters: requirements before models before views, so that hardware choices are consequences of requirements, not habits.",
              "A worked application of the methodology with numbers: a cold-chain shipment tracker. Purpose: keep vaccine shipments within 2-8 C and prove it. Requirements as numbers: sample temperature every 5 minutes at plus/minus 0.3 C accuracy, 30-day battery, work without fixed network (moving truck), evidence grade data retention. The methodology cascades: level = 2 (single node, cloud analysis); information model = temperature + location + shipment ID; service = MQTT publish of 20-byte records; functional view = perception (SHT31-class sensor, the 3.1 accuracy argument), network (NB-IoT, since the truck crosses coverage zones), processing (cloud store with the 4.8 downsampling policy), application (auditor dashboard). The result: about 8,640 records per shipment trip, under 200 KB of data, cost under 10 dollars per disposable tag - every downstream choice traces to a numbered requirement.",
              "The advantage of a documented methodology is traceability: when a stakeholder asks 'why NB-IoT?', the answer points to a requirement, not a preference - and when requirements change (say the accuracy spec tightens to plus/minus 0.1 C), the cascade shows exactly which choices must be revisited (the sensor, not the radio). The limitation is overhead: for tiny Level 1 projects the full ceremony outweighs its value, and practitioners compress the steps - the professional skill is knowing which steps are load-bearing (requirements, level, functional view) and which can be informal for a given scale.",
            ],
            keyTerms: [
              { term: "Design methodology", definition: "Ordered steps from purpose and requirements through models, views and specifications to implementation." },
              { term: "Domain model", definition: "Description of the entities in the system (sensors, actuators, services, users) and their relationships." },
              { term: "Information model", definition: "Structure of the data: virtual entities, attributes, units and relationships." },
              { term: "Operational view", definition: "The deployment-side picture: provisioning, update workflows and day-2 operations." },
              { term: "Traceability", definition: "Every design choice traceable to a numbered requirement - the payoff of the methodology." },
            ],
            callout: {
              type: "warning",
              title: "Requirements are numbers, not adjectives",
              body: "'Monitor the shipment well' is not a requirement. 'Sample every 5 minutes at plus/minus 0.3 C, 30-day battery, 20-byte records' is. In design questions, convert every adjective into a number before proposing architecture - examiners award the traceability chain, not the vocabulary.",
            },
            diagram: {
              kind: "cycle",
              title: "The IoT design methodology as an iteration",
              caption:
                "Requirements flow down into models and views; field feedback loops back into the next revision.",
              steps: [
                { label: "Purpose and requirements", note: "numbers: interval, accuracy, battery, range" },
                { label: "Process + domain model", note: "state changes, entities and relationships" },
                { label: "Information + service spec", note: "data structures, endpoints, operations" },
                { label: "IoT level + functional view", note: "classify (1.7), map blocks to layers (1.5)" },
                { label: "Operational view + integration", note: "provisioning, OTA, workflows" },
                { label: "Deploy and learn", note: "field feedback re-enters requirements" },
              ],
            },
            bullets: [
              "Scope domains: consumer, commercial, industrial, infrastructure - jobs: monitor, control, optimise, predict.",
              "Standing challenges: power, connectivity, security/privacy, interoperability, scalability, data management.",
              "Each challenge has a mitigation pattern already covered: LPWAN/duty cycling, 2.8 selection, standard stacks, platforms/OTA.",
              "Methodology steps: purpose/requirements -> process/domain model -> information/service spec -> level/functional view -> operational view -> integration.",
              "Order matters: requirements before models before hardware choices.",
              "Worked tracker: 5-min sampling, plus/minus 0.3 C, 30-day battery -> Level 2, NB-IoT, SHT31-class, ~8,640 records, under 10 dollars per tag.",
              "Traceability: requirement changes cascade to exactly the affected choices.",
              "Limitation: full ceremony suits larger projects; compress steps for Level 1 builds.",
            ],
            table: {
              caption: "Challenges paired with mitigation patterns from this file.",
              headers: ["Challenge", "Mitigation pattern", "Section"],
              rows: [
                ["Power", "LPWAN, duty cycling, deep sleep", "2.6, 4.7, 3.3"],
                ["Connectivity", "Four-axis protocol selection", "2.8"],
                ["Interoperability", "Standard stacks (IP, MQTT, 6LoWPAN)", "2.7, 2.8"],
                ["Scalability", "Platforms, OTA, shadows", "4.3"],
                ["Data management", "Edge reduction, downsampling", "4.1, 4.8"],
                ["Security/privacy", "Defence stack, minimisation", "5.6-5.8"],
              ],
            },
            examQuestions: [
              {
                q: "Discuss the scope and major challenges of IoT, matching each challenge to a mitigation. Explain the IoT design methodology steps and apply them to a cold-chain shipment tracker with numerical requirements.",
                marks: 7,
                outline: [
                  "Scope domains and the four recurring jobs.",
                  "Challenges: power, connectivity, security, interoperability, scale, data.",
                  "Pair each challenge with its mitigation pattern and section reference.",
                  "Methodology steps in order and why the order matters.",
                  "Tracker requirements as numbers: 5-min, plus/minus 0.3 C, 30-day battery.",
                  "Cascade: Level 2 classification, NB-IoT choice, sensor accuracy choice.",
                  "Data maths: ~8,640 records per trip, under 200 KB.",
                ],
              },
              {
                q: "List any four challenges of IoT deployment.",
                marks: 2,
                outline: ["Power, connectivity, security/privacy, interoperability, scalability, data management (any four)."],
              },
              {
                q: "Why should requirements be written before the domain model in the design methodology?",
                marks: 3,
                outline: [
                  "Models and hardware choices are consequences of requirements.",
                  "Writing requirements first gives traceability and prevents habit-driven design.",
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
      title: "IoT Protocols and Connectivity",
      summary:
        "How data actually moves: M2M architecture versus IoT, the publish-subscribe workhorse MQTT, the constrained REST protocol CoAP, Zigbee mesh networking, Bluetooth Low Energy connection lifecycle, LoRaWAN and the LPWAN family, 6LoWPAN adaptation of IPv6, and how to select the right protocol from the whole zoo.",
      chapter: {
        number: "02",
        title: "M2M, IoT Protocols and Wireless Connectivity",
        intro:
          "Unit II is the protocol unit. It contrasts M2M with IoT, then walks the application protocols (MQTT, CoAP) and the wireless link technologies (Zigbee, Bluetooth/BLE, LoRaWAN, 6LoWPAN) with ranges, data rates, payload sizes and latencies you can quote, closing with a comparison table and selection strategy.",
        inOneBreath:
          "M2M = point-to-point device-to-device with proprietary gateways, IoT = IP-based many-to-many via platforms; MQTT = TCP, 1883, 2-byte minimum header, 3 QoS levels, last-will; CoAP = UDP 5683, 4-byte header, REST verbs, observe; Zigbee = 802.15.4 mesh, coordinator/router/end-device, ~10-100 m hops, 250 kbps; BLE = advertising + connection phases, ~10-100 m, ~1 Mbps, uA-class sleep; LoRaWAN = chirp spread spectrum, km-scale, kbps-class, classes A/B/C; 6LoWPAN = IPv6 over 802.15.4 by compression and fragmentation; selection = range x rate x power x payload matrix.",
        sections: [
          {
            number: "2.1",
            title: "M2M communication and architecture",
            body: [
              "Machine-to-Machine (M2M) communication is direct data exchange between devices - machines talking to machines - over wired or wireless networks, typically to monitor and control equipment without human involvement. An M2M system has four components: the field devices (sensors and actuators, often embedded controllers), the M2M area network connecting them locally (wired fieldbus, Zigbee, Wi-Fi, cellular), the M2M gateway that bridges the area network to external networks and performs protocol translation, and the back-end application servers that store data and issue commands. Classic examples: a vending machine reporting stock levels over GPRS, or fleet vehicles streaming GPS positions to a logistics server.",
              "The mechanism differs from IoT in architecture philosophy. M2M is usually point-to-point or device-to-application: devices speak a (often proprietary or industry-specific) protocol through a gateway to one specific backend, and the intelligence sits in that backend. IoT, by contrast, is built on IP end-to-end: every thing can, in principle, be addressed globally, data flows many-to-many through platforms, and open protocols (MQTT, CoAP, HTTP) plus web APIs make the data consumable by any authorised application. M2M predates IoT and remains dominant in industrial SCADA and telemetry; IoT is the internet-era generalisation that connects heterogeneous devices with open standards.",
              "A worked deployment shows the contrast with numbers. A pipeline monitoring system uses 500 pressure sensors along a 50 km route. In an M2M design, groups of 10 sensors connect over RS-485 fieldbus to a gateway every 5 km; the gateway polls each sensor every 10 seconds (a 20-byte register read, so 2 KB per poll group per cycle) and forwards a Modbus-over-UDP summary to a central SCADA server. An IoT redesign attaches a 6LoWPAN radio to each sensor, gives each an IPv6 address, and lets the platform subscribe to plant/section7/pressure for any authorised analytics app at the same 10-second interval - no proprietary gateway semantics, and new applications subscribe without touching the field devices.",
              "Advantages of M2M: mature, deterministic, certified for industry (Modbus, OPC-UA ecosystems), works without internet dependence. Limitations: vendor lock-in, hard cross-vendor integration, and poor support for massive scale because gateways and protocols were designed for hundreds, not millions, of endpoints. Modern 'Industrial IoT' converges the two: M2M-grade reliability delivered over IP protocols - which is why exams ask you to compare rather than choose.",
            ],
            keyTerms: [
              { term: "M2M", definition: "Machine-to-Machine - direct device-to-device or device-to-server communication without human intervention." },
              { term: "M2M area network", definition: "The local network linking field devices, e.g. fieldbus, Zigbee, Wi-Fi or cellular." },
              { term: "M2M gateway", definition: "Bridge device translating the area-network protocol to external networks and hosting local control logic." },
              { term: "SCADA", definition: "Supervisory Control And Data Acquisition - the industrial monitoring architecture M2M historically serves." },
            ],
            callout: {
              type: "exam",
              title: "The three-line comparison that scores",
              body: "M2M vs IoT in three crisp contrasts: (1) point-to-point/proprietary vs many-to-many/IP-based; (2) gateway protocol translation vs end-to-end open protocols; (3) hundreds of endpoints vs millions with global addressing. Draw the two architectures side by side and all comparison marks are yours.",
            },
            diagram: {
              kind: "layers",
              title: "M2M system architecture",
              caption:
                "Data climbs from field devices through the area network and gateway to application servers; commands flow down.",
              layers: [
                { label: "Application layer", note: "backend servers, dashboards, business logic" },
                { label: "Service capability layer", note: "device management, data storage, connectivity services" },
                { label: "M2M core network", note: "internet or cellular transport to the gateway" },
                { label: "M2M gateway", note: "protocol translation, local buffering and control" },
                { label: "M2M area network + devices", note: "sensors/actuators on fieldbus, Zigbee or Wi-Fi" },
              ],
            },
            bullets: [
              "M2M = machines exchanging data directly, without human involvement.",
              "Four components: field devices, area network, gateway, back-end application servers.",
              "Gateway performs protocol translation (e.g. Modbus/RS-485 to IP) and local buffering.",
              "M2M is point-to-point with often proprietary semantics; IoT is IP-based and many-to-many.",
              "IoT devices are globally addressable; M2M endpoints usually are not.",
              "Worked example: 500 pressure sensors over 50 km - 10-sensor poll groups, 20-byte reads every 10 s = 2 KB per group per cycle.",
              "M2M advantages: determinism, industry certification, no internet dependence.",
              "M2M limitations: vendor lock-in, weak cross-vendor integration, scale ceiling.",
            ],
            table: {
              caption: "M2M versus IoT - the exam comparison.",
              headers: ["Aspect", "M2M", "IoT"],
              rows: [
                ["Communication", "Point-to-point, device-to-server", "Many-to-many via platforms"],
                ["Protocols", "Often proprietary (Modbus, fieldbus)", "Open IP stack (MQTT, CoAP, HTTP)"],
                ["Addressing", "Local identifiers via gateway", "Global unique identity (IPv6/IDs)"],
                ["Scale", "Hundreds to thousands", "Thousands to millions"],
                ["Integration", "Vendor-specific backends", "Any authorised app via web APIs"],
              ],
            },
            examQuestions: [
              {
                q: "Explain M2M communication architecture with a neat diagram. Differentiate M2M and IoT with at least four points.",
                marks: 7,
                outline: [
                  "Define M2M and its purpose (no human in the loop).",
                  "Draw the layered architecture: devices, area network, gateway, core network, service layer, application.",
                  "Explain the gateway's protocol-translation and buffering roles.",
                  "Contrast: point-to-point vs many-to-many.",
                  "Contrast: proprietary vs open IP protocols.",
                  "Contrast: local vs global addressing; scale ceiling vs millions.",
                  "Support with a numbers example (poll groups, payload, interval).",
                ],
              },
              {
                q: "What is an M2M gateway and name two of its functions?",
                marks: 2,
                outline: ["Protocol translation between area network and external network; local buffering/control."],
              },
              {
                q: "Give two advantages of M2M over naive IoT designs in industrial settings.",
                marks: 3,
                outline: [
                  "Deterministic, certified fieldbus ecosystems (Modbus/OPC-UA).",
                  "Operates without internet dependence; mature tooling and maintenance practices.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "MQTT: the publish-subscribe workhorse",
            body: [
              "MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe messaging protocol that runs over TCP, designed for constrained devices and low-bandwidth, unreliable links. Its architecture has three roles: publishers emit messages to topics without knowing who will read them, subscribers register interest in topics with a broker, and the broker (e.g. Mosquitto, EMQX, AWS IoT Core) performs topic matching and delivery. Topics are slash-separated hierarchies - home/livingroom/temperature - and wildcards exist for subscription: + matches one level (home/+/temperature), # matches many levels (home/#).",
              "The protocol is small by design: the fixed header starts at just 2 bytes, messages are binary with an optional UTF-8 payload, and there are exactly eleven control packet types (CONNECT, CONNACK, PUBLISH, PUBACK, SUBSCRIBE, SUBACK, PINGREQ and friends). Delivery reliability is chosen per message via three Quality of Service levels: QoS 0 sends once with no acknowledgement (at most once - can lose messages), QoS 1 uses a PUBACK handshake (at least once - duplicates possible), and QoS 2 uses a four-way handshake (exactly once - highest overhead). Two reliability features matter in practice: the Last Will message the broker publishes on behalf of a client that disconnects ungracefully (instant failure detection), and retained messages so a new subscriber immediately receives the latest value.",
              "A worked deployment shows the numbers: a smart home with 30 sensor nodes publishes to a Mosquitto broker on port 1883. Each temperature node sends a 3-byte topic + 8-byte payload PUBLISH every 30 seconds - roughly 40-60 bytes on the wire including headers - so a node at QoS 1 consumes well under 10 KB per hour, leaving battery-powered nodes viable. A motion event that must not be lost is published at QoS 2 (four-way handshake, a few extra packets and ~50-100 ms extra latency on a home LAN), while the same node's Last Will is set to home/status so the app shows 'sensor offline' within the 60-second keep-alive window the instant Wi-Fi drops.",
              "Advantages: tiny footprint (runs on an 8-bit MCU), one-to-many fan-out for free, QoS choice per message, session state and wills for robustness. Limitations: broker is a single point of failure unless clustered, no built-in resource discovery (you must know topic names), and the plain broker does not encrypt - production adds TLS on port 8883 at the cost of heavier handshakes. Exams reward stating QoS 0/1/2 semantics precisely: 'at most once', 'at least once', 'exactly once' are the phrases that earn the marks.",
            ],
            keyTerms: [
              { term: "Broker", definition: "Central MQTT server (Mosquitto, EMQX) that matches topics between publishers and subscribers." },
              { term: "Topic", definition: "Slash-separated hierarchical name of a message stream; wildcards + (one level) and # (many levels) are for subscribers." },
              { term: "QoS 0/1/2", definition: "Delivery guarantees: at most once (fire and forget), at least once (PUBACK, duplicates possible), exactly once (four-way handshake)." },
              { term: "Last Will", definition: "Message the broker publishes automatically when a client disconnects ungracefully." },
              { term: "Retained message", definition: "Message the broker stores per topic and delivers immediately to every new subscriber." },
            ],
            callout: {
              type: "warning",
              title: "QoS is per-message, not per-client",
              body: "A client may publish a routine temperature reading at QoS 0 and a door-open alarm at QoS 2 on the same connection. Saying 'the device uses QoS 1' loses precision - always say which message class carries which QoS and why.",
            },
            diagram: {
              kind: "flow",
              title: "One MQTT message from publisher to subscriber",
              caption:
                "The broker is the only meeting point; publishers and subscribers never address each other directly.",
              steps: [
                { label: "Publisher connects to broker", note: "TCP port 1883 (8883 with TLS), optional credentials" },
                { label: "PUBLISH topic + payload", note: "e.g. home/livingroom/temperature = 22.5, QoS chosen" },
                { label: "Broker matches subscriptions", note: "wildcards + and # resolved per subscriber" },
                { label: "QoS acknowledgement", note: "PUBACK (QoS 1) or four-way (QoS 2) as chosen" },
                { label: "Subscriber receives", note: "payload delivered on every matching subscription" },
              ],
            },
            bullets: [
              "MQTT = lightweight publish-subscribe over TCP; broker on port 1883 (TLS on 8883).",
              "Three roles: publisher, broker, subscriber; topics home/livingroom/temperature.",
              "Wildcards: + matches exactly one level, # matches any number of trailing levels.",
              "Fixed header starts at 2 bytes; eleven control packet types total.",
              "QoS 0 at most once, QoS 1 at least once (PUBACK), QoS 2 exactly once (four-way).",
              "Last Will detects dead clients; retained messages give instant latest-value reads.",
              "Worked example: 30 nodes, ~50-byte publishes every 30 s - under 10 KB/hour per node.",
              "Limits: broker SPOF, no discovery, plaintext without TLS.",
            ],
            codeExample: {
              language: "python",
              caption: "Publishing a sensor reading with paho-mqtt at QoS 1, with a Last Will.",
              code: `import paho.mqtt.client as mqtt
import json, time

c = mqtt.Client(client_id="node-17")
c.will_set("home/status", "node-17 offline", qos=1, retain=True)
c.connect("192.168.1.10", port=1883, keepalive=60)

while True:
    reading = {"t": 22.5, "hum": 41.0}
    c.publish("home/livingroom/temperature",
              json.dumps(reading), qos=1)
    time.sleep(30)`,
            },
            examQuestions: [
              {
                q: "Explain the MQTT architecture and its Quality of Service levels. Illustrate with a publish-subscribe example how a smart home node communicates with a broker.",
                marks: 7,
                outline: [
                  "Define MQTT: lightweight pub-sub over TCP, port 1883.",
                  "Three roles: publisher, broker, subscriber; topic hierarchy and wildcards + and #.",
                  "QoS 0: at most once, no ack.",
                  "QoS 1: at least once via PUBACK, duplicates possible.",
                  "QoS 2: exactly once via four-way handshake.",
                  "Last Will and retained messages for robustness.",
                  "Numbers example: 30 nodes, 50-byte publishes every 30 s; alarm at QoS 2 vs routine at QoS 0.",
                ],
              },
              {
                q: "Write the topic wildcards in MQTT and explain the difference between them.",
                marks: 2,
                outline: ["+ matches exactly one topic level; # matches any number of trailing levels."],
              },
              {
                q: "Which MQTT QoS level guarantees exactly-once delivery, and what is its cost?",
                marks: 3,
                outline: [
                  "QoS 2 - four-way handshake between sender and receiver.",
                  "Cost: extra packets and latency versus QoS 0/1.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "CoAP: REST for constrained devices",
            body: [
              "The Constrained Application Protocol (CoAP) is a specialised web transfer protocol for constrained nodes and networks, defined in RFC 7252. It gives low-power devices REST semantics - the same GET, POST, PUT, DELETE verbs as HTTP - but over UDP instead of TCP, with a fixed 4-byte binary header where HTTP needs hundreds of bytes of text. Resources are addressed by URIs (coap://host/sensors/temp) and a CoAP server hosts resources; a client requests them. This makes CoAP the natural counterpart of MQTT: request-response instead of publish-subscribe, UDP instead of TCP.",
              "The mechanism has three layers of cleverness. Reliability is optional but built-in: each confirmable (CON) message is retransmitted with exponential backoff until an ACK arrives, while non-confirmable (NON) messages are fire-and-forget for data that tolerates loss. The Observe option (RFC 7641) lets a client subscribe to a resource so the server pushes notifications on every state change - effectively adding publish-subscribe on top of REST. Finally, UDP means no connection state on the server, so one low-power node can serve thousands of sleepy clients with a tiny RAM footprint, and a CoAP proxy or cross-protocol gateway maps CoAP resources to HTTP for web browsers.",
              "A worked deployment with numbers: a soil-moisture mesh of 100 nodes on 802.15.4 radios at 250 kbps. Each node exposes coap://node42/sensors/moisture and is polled every 5 minutes; a CoAP GET with confirmable semantics costs about 20 bytes of request and 30 bytes of response on the wire - versus roughly 400+ bytes for the equivalent HTTP/TCP exchange with headers and handshake - a 90% overhead saving that directly extends battery life. When moisture crosses a threshold the node's Observe subscription pushes a notification within a second, without any polling at all.",
              "Advantages: minimal overhead (4-byte header, UDP statelessness), REST compatibility via gateways, built-in resource discovery (/well-known/core returns the resource list), and asynchronous Observe notifications. Limitations: UDP brings no congestion control (reliance on backoff), message size is capped by the datagram unless block-wise transfer is used for larger payloads, and NAT traversal for UDP is trickier than TCP. In the exam, the killer contrast is quantitative: 4-byte header vs HTTP's text headers, and 20+30 bytes per reading vs 400+ - quote both.",
            ],
            keyTerms: [
              { term: "CoAP", definition: "Constrained Application Protocol - REST verbs over UDP with a 4-byte header, defined in RFC 7252, port 5683." },
              { term: "CON / NON", definition: "Confirmable (ACK + retransmit with backoff) vs non-confirmable (fire-and-forget) CoAP message classes." },
              { term: "Observe (RFC 7641)", definition: "Subscription option letting a CoAP server push notifications on resource state changes." },
              { term: "/well-known/core", definition: "CoAP discovery resource listing every resource the server exposes." },
              { term: "Block-wise transfer", definition: "CoAP mechanism to move payloads larger than one UDP datagram in numbered blocks." },
            ],
            callout: {
              type: "tip",
              title: "Lead with the numbers",
              body: "The single most quotable CoAP fact is its 4-byte fixed header versus HTTP's hundreds of bytes of text, and 20-50 bytes on the wire per reading versus 400+ for HTTP/TCP. State it early and the rest of the 7-mark answer is supporting detail.",
            },
            diagram: {
              kind: "compare",
              title: "CoAP versus HTTP for constrained nodes",
              caption:
                "Same REST verbs, radically different cost on a constrained link.",
              left: {
                heading: "CoAP (UDP, RFC 7252)",
                items: [
                  "Fixed 4-byte binary header",
                  "No connection state - UDP datagrams",
                  "20-50 bytes on the wire per reading",
                  "Observe option gives server push",
                  "Discovery via /well-known/core",
                ],
              },
              right: {
                heading: "HTTP (TCP)",
                items: [
                  "Text headers, hundreds of bytes minimum",
                  "TCP handshake, connection state per client",
                  "400+ bytes per request with headers",
                  "Polling unless websockets are added",
                  "No built-in resource discovery",
                ],
              },
            },
            bullets: [
              "CoAP = REST (GET/POST/PUT/DELETE) over UDP, port 5683, RFC 7252.",
              "Fixed 4-byte header; URIs like coap://node42/sensors/moisture.",
              "CON messages retransmit with exponential backoff until ACK; NON is fire-and-forget.",
              "Observe option turns polling into server push notifications.",
              "/well-known/core advertises the server's resources - built-in discovery.",
              "Block-wise transfer handles payloads larger than one datagram.",
              "Worked example: 100-node soil mesh, GET every 5 min = ~50 bytes vs 400+ for HTTP - about 90% overhead saved.",
              "Limits: no congestion control on UDP, NAT traversal and large-payload handling need care.",
            ],
            table: {
              caption: "CoAP message types and their use.",
              headers: ["Type", "Behaviour", "Typical use"],
              rows: [
                ["CON", "Retransmit with backoff until ACK", "Commands that must arrive"],
                ["NON", "Send once, no ACK", "Periodic loss-tolerant readings"],
                ["ACK", "Acknowledges a CON message", "Reliability handshake"],
                ["RST", "Reset - receiver cannot process", "Error signalling"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the CoAP protocol: its architecture, message model (CON/NON), Observe mechanism and discovery. Why is CoAP preferred over HTTP for constrained devices?",
                marks: 7,
                outline: [
                  "Define CoAP: REST over UDP, 4-byte header, RFC 7252, port 5683.",
                  "Client-server model with resources at coap:// URIs.",
                  "CON with retransmission/backoff vs NON fire-and-forget.",
                  "Observe (RFC 7641) for server-side push.",
                  "Discovery via /well-known/core; block-wise transfer for big payloads.",
                  "Quantitative comparison: 20-50 bytes vs 400+ for HTTP/TCP.",
                  "State limitations: no congestion control, NAT traversal.",
                ],
              },
              {
                q: "On which transport and port does CoAP operate?",
                marks: 2,
                outline: ["UDP, default port 5683 (5684 with DTLS)."],
              },
              {
                q: "What is the Observe option in CoAP?",
                marks: 3,
                outline: [
                  "RFC 7641 subscription: client registers interest in a resource.",
                  "Server pushes a notification on every state change instead of client polling.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "Zigbee: mesh networking on IEEE 802.15.4",
            body: [
              "Zigbee is a low-power, low-data-rate wireless mesh standard built on the IEEE 802.15.4 physical and MAC layers, managed by the Zigbee Alliance application profiles. It operates mainly in the 2.4 GHz band (also 868/915 MHz) with a raw rate of 250 kbps and a hop range of roughly 10-100 m indoors, but a mesh of routers extends coverage far beyond one hop. Zigbee targets automation and monitoring: smart lighting, building sensors, metering - applications that send small packets occasionally and must run for years on coin cells.",
              "The mechanism rests on three device types. The coordinator (exactly one per network) forms the network, stores security keys and the address table. Routers extend the mesh by relaying packets and can host applications. End devices sleep most of the time, talk only to their parent (coordinator or router), and cannot relay - they are the battery-operated leaf nodes. Routing is mesh-based: packets hop router-to-router along paths the network layer maintains, so if one router dies the mesh re-routes around it - self-healing is the headline property. Security is built-in with AES-128 link and network keys, and joining is controlled by a trust centre.",
              "A worked deployment with numbers: a 4-storey office building automates 200 devices - 2 coordinators' worth of lighting zones, 40 routers (smart plugs and powered sensors) and 158 battery end devices (door/window, temperature, occupancy). Each end device sleeps at about 1 uA, wakes to report a 30-byte frame every 2 minutes; the mesh covers all four storeys with router spacing under 25 m, so any end device reaches the coordinator within 2-3 hops. Average mesh latency for a lighting command is 20-100 ms across hops - imperceptible to a human - while the battery end devices achieve 2-4 years of life on one CR2450 cell because they never route for others.",
              "Advantages: self-healing mesh extends range cheaply, very low sleep current, AES-128 security, interoperable profiles (e.g. Zigbee Home Automation, Zigbee Light Link) mean mixed-vendor devices join one network. Limitations: 250 kbps is far too slow for audio/video or bulk data, 2.4 GHz shares the band with Wi-Fi (coexistence interference), and mesh routing adds latency and configuration complexity compared to star networks. When a paper asks 'compare Zigbee and Bluetooth', the mesh-versus-piconet difference and the device roles are the marks.",
            ],
            keyTerms: [
              { term: "IEEE 802.15.4", definition: "The PHY/MAC standard (250 kbps, 2.4 GHz) on which Zigbee builds its network and application layers." },
              { term: "Coordinator", definition: "The single Zigbee device that forms the network, holds keys and manages addressing." },
              { term: "Router", definition: "A mains-powered Zigbee device that relays packets, extending and healing the mesh." },
              { term: "End device", definition: "A sleeping battery node that talks only to its parent and never routes traffic." },
              { term: "Self-healing", definition: "Mesh re-routing around failed or newly added routers without operator intervention." },
            ],
            callout: {
              type: "exam",
              title: "Draw the three roles",
              body: "Almost every Zigbee question rewards a network sketch: one coordinator at the centre, routers forming the mesh spine, end devices hanging off parents. Label the roles, note that end devices sleep, and annotate 250 kbps / 10-100 m per hop. The diagram usually carries 2-3 of the 7 marks.",
            },
            diagram: {
              kind: "fork",
              title: "What role does a Zigbee device take?",
              caption:
                "Three device types with fixed duties - every node in a Zigbee network is exactly one of these.",
              start: "A device joins a Zigbee network - which role does it play?",
              branches: [
                { label: "Forms and administers the network", outcome: "Coordinator - one per network, holds keys, maps addresses", good: true },
                { label: "Relays packets and extends range", outcome: "Router - mains-powered mesh node, self-healing backbone", good: true },
                { label: "Sleeps and reports occasionally", outcome: "End device - battery leaf node, years of life at ~1 uA sleep", good: true },
              ],
            },
            bullets: [
              "Zigbee = IEEE 802.15.4 PHY/MAC + Zigbee Alliance network/application layers.",
              "250 kbps raw rate, 2.4 GHz (also 868/915 MHz), 10-100 m per hop.",
              "Three roles: coordinator (forms network), router (relays), end device (sleeps).",
              "Mesh routing is self-healing - failed routers are bypassed automatically.",
              "AES-128 security with a trust centre controlling joining.",
              "Worked example: 200 devices in a 4-storey office - 40 routers at <25 m spacing, 2-3 hops max, 2-4 year battery life on leaf nodes.",
              "Command latency 20-100 ms across hops; fine for lighting, not for streaming.",
              "Limits: low throughput, 2.4 GHz coexistence with Wi-Fi, mesh configuration complexity.",
            ],
            table: {
              caption: "Zigbee device roles.",
              headers: ["Role", "Power", "Duties", "Can relay?"],
              rows: [
                ["Coordinator", "Mains", "Forms network, keys, addressing", "Yes"],
                ["Router", "Mains", "Relay packets, host apps, extend mesh", "Yes"],
                ["End device", "Battery", "Sleep, sense, talk to parent only", "No"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Zigbee architecture and its device types. Design a mesh for a 4-storey building with 200 devices and justify router placement, range and battery life with numbers.",
                marks: 7,
                outline: [
                  "Zigbee = 802.15.4 PHY/MAC + Zigbee network/app layers; 250 kbps, 2.4 GHz.",
                  "Coordinator: forms network, keys, address table.",
                  "Router: relays, extends and heals the mesh; must be mains-powered.",
                  "End device: sleeps, parent-only, never relays.",
                  "Design: 40 routers, <25 m spacing, 2-3 hops, 158 sleeping end devices.",
                  "Numbers: 30-byte frames every 2 min, ~1 uA sleep, 2-4 years on one cell.",
                  "State limitations: throughput, Wi-Fi coexistence, mesh complexity.",
                ],
              },
              {
                q: "State the raw data rate and typical range per hop of Zigbee.",
                marks: 2,
                outline: ["250 kbps at 2.4 GHz; 10-100 m per hop indoors."],
              },
              {
                q: "Why must Zigbee routers be mains-powered?",
                marks: 3,
                outline: [
                  "Routers must listen continuously to relay for others.",
                  "Always-on receive mode would drain a battery in weeks.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Bluetooth and Bluetooth Low Energy (BLE)",
            body: [
              "Bluetooth is a short-range wireless technology operating in the 2.4 GHz ISM band, using a star/piconet topology where one master controls up to 7 active slaves. Classic Bluetooth (BR/EDR) targets continuous audio and cable replacement at up to about 2-3 Mbps; Bluetooth Low Energy (BLE, from version 4.0 onward) targets battery-powered sensing: ~1 Mbps PHY rate, 10-100 m range, and sleep currents of the order of 1 uA, which makes multi-year coin-cell operation routine. BLE is the link layer behind fitness trackers, beacons, smart tags and most phone-connected sensors.",
              "BLE's mechanism is a disciplined lifecycle. In advertising, a peripheral broadcasts small packets (up to 31 bytes of payload per advertising channel) on three advertising channels at a configurable interval (20 ms to 10 s). A central device scanning hears the advertisement and issues a connection request; the devices then synchronise and hop across the 37 data channels together. Once connected, communication flows through the GATT profile: the server exposes a hierarchy of services containing characteristics (typed values readable, writable or notifiable); a client reads a temperature characteristic, or subscribes to notifications and receives ~20-500 byte updates each time the value changes. Battery life comes from duty cycling - the radio is on for a few milliseconds per connection interval (7.5 ms to 4 s, negotiated).",
              "A worked deployment with numbers: a heart-rate chest strap advertises its service UUID for 2 seconds after the strap-on detection, then a phone connects with a 1-second connection interval. Each heart-rate notification is about 8-10 bytes in a 30-byte BLE packet with 4-byte access address and 2-byte CRC - total airtime under 200 microseconds per event, and the CR2032 cell (about 220 mAh) lasts roughly 12 months at that duty cycle. Range inside a gym is 10-15 m through two walls; latency from measurement to phone display is one connection interval, so about 1 second.",
              "Advantages: ubiquitous phone support (no gateway needed), very low sleep and connect currents, GATT gives a standard structured data model, and 2.4 GHz DSSS/frequency-hopping resists interference reasonably well. Limitations: short range (10-100 m, attenuated heavily by walls), mesh networking only via the separate BLE Mesh profile, limited throughput (a practical notification rate of a few tens of kbps), and connection setup plus pairing complexity that trips up firmware developers. Exams frequently ask BLE versus Zigbee: BLE is star (or BLE Mesh optional) and phone-native; Zigbee is native mesh but needs a bridge to reach phones.",
            ],
            keyTerms: [
              { term: "Piconet", definition: "Classic Bluetooth star network - one master, up to 7 active slaves." },
              { term: "Advertising", definition: "BLE peripheral broadcasting up to 31-byte payloads on 3 channels so centrals can discover it." },
              { term: "GATT", definition: "Generic Attribute Profile - BLE's service/characteristic data model used for all connected data exchange." },
              { term: "Connection interval", definition: "Negotiated period (7.5 ms - 4 s) at which a BLE connection exchanges packets; the key to battery life." },
              { term: "Central / Peripheral", definition: "BLE roles: the central scans and connects; the peripheral advertises and serves GATT data." },
            ],
            callout: {
              type: "tip",
              title: "Battery life is the punchline",
              body: "Wherever BLE appears, quote the duty-cycle arithmetic: radio on a few milliseconds per connection interval plus ~1 uA sleep means a 220 mAh CR2032 lasts about a year for a heart-rate strap at 1 Hz. One numerical example converts a generic BLE paragraph into a full-marks answer.",
            },
            diagram: {
              kind: "cycle",
              title: "The BLE connection lifecycle",
              caption:
                "From invisible to streaming data and back - the loop a peripheral repeats all day.",
              steps: [
                { label: "Advertise", note: "31-byte payload on 3 channels, 20 ms - 10 s interval" },
                { label: "Scan and connect", note: "central requests connection; roles locked" },
                { label: "Discover services", note: "GATT hierarchy walked, characteristics found" },
                { label: "Exchange data", note: "reads/writes and notifications per connection interval" },
                { label: "Disconnect and sleep", note: "radio off, ~1 uA until next advertising cycle" },
              ],
            },
            bullets: [
              "Bluetooth 2.4 GHz ISM; classic BR/EDR for audio at 2-3 Mbps, BLE for sensing at ~1 Mbps.",
              "Classic = piconet (1 master, 7 slaves); BLE = central-peripheral roles.",
              "BLE advertising: 31-byte payloads on 3 advertising channels.",
              "Connection interval from 7.5 ms to 4 s sets latency and battery drain together.",
              "GATT: services -> characteristics -> read/write/notify operations.",
              "Sleep current ~1 uA; 220 mAh CR2032 lasts about a year at 1 Hz reporting.",
              "Worked example: heart-rate strap, 8-10 byte notifications, under 200 us airtime each, 12-month battery.",
              "Limits: 10-100 m range, no native mesh (BLE Mesh is a separate profile), tens of kbps practical throughput.",
            ],
            table: {
              caption: "Classic Bluetooth versus BLE.",
              headers: ["Aspect", "Classic Bluetooth", "Bluetooth Low Energy"],
              rows: [
                ["Purpose", "Audio, cable replacement", "Battery-powered sensing"],
                ["Topology", "Piconet, 7 slaves", "Central-peripheral (+ BLE Mesh)"],
                ["Data rate", "Up to 2-3 Mbps", "~1 Mbps PHY, kbps-class app"],
                ["Battery life", "Hours to days", "Months to years"],
                ["Discovery", "Inquiry/paging", "Advertising + GATT"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the Bluetooth Low Energy connection lifecycle from advertising to data exchange. Contrast BLE with classic Bluetooth and justify BLE's battery life with a numerical example.",
                marks: 7,
                outline: [
                  "Classic vs BLE purposes: audio/cable replacement vs sensing.",
                  "Advertising: 31-byte payloads, 3 channels, interval 20 ms - 10 s.",
                  "Connection: central requests, channels synchronised.",
                  "GATT: services, characteristics, read/write/notify.",
                  "Connection interval 7.5 ms - 4 s sets latency vs battery trade.",
                  "Numbers: heart-rate strap, 8-10 byte notifications, <200 us airtime, 12 months on 220 mAh.",
                  "Limitations: range, no native mesh, throughput ceiling.",
                ],
              },
              {
                q: "How many advertising channels does BLE use and why only three?",
                marks: 2,
                outline: ["Three, chosen to avoid the Wi-Fi-heavy parts of the 2.4 GHz band."],
              },
              {
                q: "What is GATT in BLE?",
                marks: 3,
                outline: [
                  "Generic Attribute Profile - the data model.",
                  "Services contain characteristics; characteristics support read, write, notify/indicate.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "LoRaWAN and the LPWAN family",
            body: [
              "Low-Power Wide-Area Networks (LPWAN) trade data rate for kilometres of range and years of battery life - the missing middle between short-range technologies (Zigbee, BLE, Wi-Fi) and cellular. LoRaWAN is the dominant open LPWAN: LoRa is the physical-layer modulation (chirp spread spectrum) delivering roughly 0.3-50 kbps depending on spreading factor over 2-15 km in open terrain, and LoRaWAN is the MAC/network layer defining how devices join a network and exchange messages with gateways. NB-IoT and LTE-M are the licensed-spectrum alternatives running over cellular infrastructure.",
              "The mechanism is a star-of-stars: end devices transmit LoRa-modulated packets to one or more gateways (base stations) within range; every gateway that hears a packet forwards it to a central network server, which deduplicates, performs downlink scheduling and forwards payloads to application servers over IP. Because devices transmit asynchronously on any available channel (pure ALOHA access), duty-cycle regulations (typically 1% in the EU 868 MHz band) and fair-use policies cap how often a node may transmit. Three device classes control downlink reachability: Class A (downlink only right after an uplink - lowest power, default), Class B (scheduled receive windows via beacon synchronisation) and Class C (continuous receive - lowest latency, highest power).",
              "A worked deployment with numbers: an agricultural network of 300 soil probes across a 40 km^2 farm. Each probe sends a 12-byte encrypted payload every 15 minutes (96 messages/day, about 1.2 KB/day). With a spreading factor SF9 the link budget of about 150 dB reaches gateways 8-11 km away, so four gateways cover the whole farm; at SF12 the same link would extend past 15 km but airtime per message grows roughly 32x, so the designer balances rate against range. Battery arithmetic: a 2400 mAh cell at about 30 mWh of transmit energy per day supports 10+ years of Class A operation. End-to-end latency for a downlink command under Class A is 'next uplink' - minutes - which is fine for irrigation valves but useless for actuators needing instant response.",
              "Advantages: kilometres of range with sub-10 uA sleep, deep building penetration, no per-device SIM or subscription (private deployments possible), strong AES-128 end-to-end security. Limitations: very low throughput (kbps), payload caps (about 51-242 bytes per frame depending on data rate and region), high latency and no per-node QoS because uplinks use ALOHA - so LPWAN suits telemetry, not control loops. The exam contrast to remember: LoRaWAN's star-of-stars with km range vs Zigbee's mesh with 100 m hops; both on low power, solving different geometries.",
            ],
            keyTerms: [
              { term: "LPWAN", definition: "Low-Power Wide-Area Network family - long range (km), low rate (kbps), multi-year battery: LoRaWAN, NB-IoT, LTE-M, Sigfox." },
              { term: "LoRa (CSS)", definition: "Chirp spread spectrum PHY modulation; spreading factors trade data rate for range." },
              { term: "Gateway", definition: "LoRaWAN base station forwarding all heard uplinks to the central network server over IP." },
              { term: "Class A / B / C", definition: "Device classes controlling downlink reachability: after-uplink only, scheduled beacons, or always-on receive." },
              { term: "Spreading factor (SF)", definition: "LoRa parameter SF7-SF12; higher SF = slower, longer range, more airtime." },
            ],
            callout: {
              type: "warning",
              title: "Class A downlinks are not real-time",
              body: "A common exam slip is promising instant downlink control with LoRaWAN Class A. Downlinks arrive only within two short windows after an uplink, so latency is 'until the next uplink' - minutes. If the question involves real-time actuation, say Class C (or a different radio) and justify it.",
            },
            diagram: {
              kind: "pipeline",
              title: "A LoRaWAN uplink end to end",
              caption:
                "One transmission may reach several gateways; the network server deduplicates and routes to applications.",
              stages: [
                { label: "Sensor node", note: "12-byte payload, AES-128, Class A, any channel (ALOHA)" },
                { label: "LoRa PHY uplink", note: "chirp spread spectrum, SF7-SF12, km-scale, 0.3-50 kbps" },
                { label: "Gateway(s)", note: " hears packet, adds metadata, forwards over IP" },
                { label: "Network server", note: "deduplicates, MAC layer, downlink scheduling" },
                { label: "Application server", note: "decrypts payload, feeds dashboards and analytics" },
              ],
            },
            bullets: [
              "LPWAN = the km-range, kbps-rate, year-scale-battery middle layer of IoT connectivity.",
              "LoRa PHY: chirp spread spectrum, 0.3-50 kbps by spreading factor; range 2-15 km.",
              "LoRaWAN MAC: star-of-stars - nodes to all gateways, network server deduplicates.",
              "Classes: A (downlink after uplink), B (beacon-scheduled windows), C (always receive).",
              "ALOHA uplink access plus 1% duty-cycle rules cap per-node throughput.",
              "Worked example: 300 farm probes, 12-byte payload every 15 min, SF9 gives 8-11 km, 4 gateways cover 40 km^2, 10+ years on 2400 mAh.",
              "Payload caps about 51-242 bytes; no QoS; telemetry yes, real-time control no.",
              "Alternatives: NB-IoT/LTE-M use licensed cellular spectrum with SIM-based management.",
            ],
            table: {
              caption: "The LPWAN family compared.",
              headers: ["Technology", "Spectrum", "Range", "Rate", "Typical use"],
              rows: [
                ["LoRaWAN", "Unlicensed ISM (868/915 MHz)", "2-15 km", "0.3-50 kbps", "Private telemetry networks"],
                ["NB-IoT", "Licensed cellular", "1-10 km + deep indoor", "~25-60 kbps", "Smart meters on carrier networks"],
                ["LTE-M", "Licensed cellular", "1-10 km", "~350 kbps", "Mobile assets, voice-capable"],
                ["Sigfox", "Unlicensed", "10-40 km", "100 bps, 12-byte payloads", "Ultra-simple alarms and tracking"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the LoRaWAN architecture (star-of-stars), its device classes and the role of spreading factors. Design a 300-node agricultural deployment with range, payload and battery calculations.",
                marks: 7,
                outline: [
                  "Define LPWAN and LoRaWAN's position (km range, kbps rate, year battery).",
                  "LoRa PHY: chirp spread spectrum, SF7-SF12 trade rate for range.",
                  "Architecture: nodes -> gateways -> network server -> application server.",
                  "Classes A/B/C with power and latency consequences.",
                  "ALOHA access, duty-cycle regulation, payload caps.",
                  "Design numbers: 12 bytes every 15 min, SF9 = 8-11 km, 4 gateways, 10+ year battery.",
                  "State limits: no QoS, latency for Class A downlinks.",
                ],
              },
              {
                q: "Name the three LoRaWAN device classes and their downlink behaviour.",
                marks: 2,
                outline: ["A: after uplink only; B: beacon-scheduled windows; C: always-on receive."],
              },
              {
                q: "Why is LoRaWAN unsuitable for a real-time actuator control loop?",
                marks: 3,
                outline: [
                  "Class A downlink waits for the next uplink (minutes).",
                  "ALOHA uplinks give no guaranteed channel or latency; payload caps limit command bandwidth.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "6LoWPAN: IPv6 over tiny radios",
            body: [
              "6LoWPAN (IPv6 over Low-power Wireless Personal Area Networks, RFC 4944/6282) is an adaptation layer that lets full IPv6 packets travel across IEEE 802.15.4 radios whose frames are only 127 bytes and whose nodes may have under 10 KB of RAM. Without it, IPv6's minimum 40-byte header plus optional extensions could not fit usefully in a 802.15.4 frame after MAC headers consume about 21 bytes and leave barely 80 bytes of payload. 6LoWPAN makes constrained devices first-class internet citizens: each node gets a global IPv6 address and is reachable end-to-end from anywhere.",
              "The mechanism performs three jobs. Header compression squeezes the 40-byte IPv6 header down to as little as 2-4 bytes by eliding fields derivable from the link layer (for example, the IPv6 address can be derived from the 64-bit 802.15.4 MAC address). Fragmentation and reassembly split larger IPv6 datagrams across several 802.15.4 frames and rebuild them at the destination. Mesh addressing lets link-layer forwarding carry packets multi-hop beneath IP. On top of the adaptation layer sit UDP (with similar compression) and typically CoAP at the application layer; a border router bridges the 6LoWPAN mesh to the conventional internet and often handles security and NAT.",
              "A worked deployment with numbers: a building controller with 50 wireless sensors on 802.15.4 at 250 kbps. An uncompressed temperature reading as full IPv6/UDP/CoAP would need 40 (IPv6) + 8 (UDP) + headers - about 60+ bytes of protocol overhead per 5-byte reading; with 6LoWPAN compression the same packet fits in about 10-12 bytes of headers, leaving most of the 80-byte frame budget for payload and security. A 300-byte configuration download fragments into 4 frames (about 80 bytes each), transmitted back-to-back in under 13 ms at 250 kbps. The border router assigns a /64 prefix so all 50 nodes hold routable global addresses with no NAT.",
              "Advantages: end-to-end IP reachability without application-layer gateways, standard routing via RPL (the IPv6 routing protocol for low-power lossy networks), reuse of the mature IP security and management ecosystem, and CoAP-on-top gives REST semantics for free. Limitations: adaptation costs CPU cycles and RAM on tiny nodes, mesh-under forwarding is more complex than star networks, and 127-byte frames limit per-hop throughput. The exam summary line: 6LoWPAN is not a new network - it is the compression/fragmentation shim that fits IPv6 into IEEE 802.15.4.",
            ],
            keyTerms: [
              { term: "6LoWPAN", definition: "Adaptation layer (RFC 4944/6282) carrying compressed IPv6 over IEEE 802.15.4 frames." },
              { term: "Header compression", definition: "Shrinks the 40-byte IPv6 header to 2-4 bytes by deriving fields from the link layer." },
              { term: "Fragmentation", definition: "Splits datagrams larger than one 802.15.4 frame into numbered fragments for reassembly." },
              { term: "Border router", definition: "Bridge joining the 6LoWPAN mesh to the wider internet, assigning the /64 prefix." },
              { term: "RPL", definition: "IPv6 Routing Protocol for Low-power Lossy Networks - builds the mesh routing topology." },
            ],
            callout: {
              type: "exam",
              title: "The three jobs of 6LoWPAN",
              body: "If asked 'how does IPv6 fit into 127-byte frames?', answer in exactly three parts: header compression (40 -> 2-4 bytes), fragmentation and reassembly for oversized datagrams, and mesh addressing for link-layer multi-hop. Then name the stack: 6LoWPAN + UDP + CoAP with a border router.",
            },
            diagram: {
              kind: "layers",
              title: "The 6LoWPAN protocol stack",
              caption:
                "The adaptation layer is the shim that makes IPv6 viable on 127-byte radio frames.",
              layers: [
                { label: "Application (CoAP, HTTP via proxy)", note: "REST verbs, Observe push" },
                { label: "UDP (compressed)", note: "8-byte header compressed to ~4 bytes" },
                { label: "IPv6", note: "global addressing, 40-byte header before compression" },
                { label: "6LoWPAN adaptation", note: "compression, fragmentation, mesh addressing" },
                { label: "IEEE 802.15.4 MAC/PHY", note: "127-byte frames, 250 kbps, 2.4 GHz" },
              ],
            },
            bullets: [
              "6LoWPAN = IPv6 adaptation over IEEE 802.15.4 (RFC 4944, header compression RFC 6282).",
              "Motivation: 127-byte frames cannot carry uncompressed IPv6 headers usefully.",
              "Compression: IPv6 header 40 -> 2-4 bytes using link-layer derivations.",
              "Fragmentation/reassembly carries datagrams across multiple frames.",
              "Mesh addressing + RPL provide multi-hop routing beneath IP.",
              "Border router assigns a /64 prefix - every node gets a global address, no NAT.",
              "Worked example: 50-node building mesh; ~10-12 bytes headers vs 60+ uncompressed; 300-byte download = 4 fragments in ~13 ms.",
              "Typical stack: 6LoWPAN + UDP + CoAP; limitation is adaptation cost on tiny nodes.",
            ],
            table: {
              caption: "IPv6 with and without 6LoWPAN on 802.15.4.",
              headers: ["Item", "Plain IPv6", "With 6LoWPAN"],
              rows: [
                ["IPv6 header on air", "40 bytes", "2-4 bytes"],
                ["UDP header", "8 bytes", "~4 bytes"],
                ["Datagram > frame size", "Not supported", "Fragmented and reassembled"],
                ["Global addressing", "Impractical", "/64 prefix via border router"],
              ],
            },
            examQuestions: [
              {
                q: "What is 6LoWPAN? Explain header compression, fragmentation and mesh addressing, and draw the 6LoWPAN protocol stack with an example of byte savings.",
                marks: 7,
                outline: [
                  "Define 6LoWPAN as the IPv6-over-802.15.4 adaptation layer (RFCs 4944/6282).",
                  "Why needed: 127-byte frames vs 40-byte IPv6 header.",
                  "Header compression: 40 -> 2-4 bytes via link-layer derivations.",
                  "Fragmentation and reassembly for larger datagrams (300 bytes -> 4 frames).",
                  "Mesh addressing and RPL routing; border router and /64 prefix.",
                  "Stack diagram: CoAP / UDP / IPv6 / adaptation / 802.15.4.",
                  "Numbers example: 50-node mesh, ~10-12 bytes headers, 13 ms for a fragmented download.",
                ],
              },
              {
                q: "How large is an IEEE 802.15.4 frame and what does that imply for IPv6?",
                marks: 2,
                outline: ["127 bytes; too small for an uncompressed IPv6 header plus payload, hence 6LoWPAN."],
              },
              {
                q: "What is the role of the border router in a 6LoWPAN network?",
                marks: 3,
                outline: [
                  "Bridges the mesh to the internet.",
                  "Assigns the /64 prefix; often terminates security and NAT/translation.",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Choosing a protocol: the full comparison",
            body: [
              "Real deployments mix several protocols, so the exam-grade skill is selection, not just recitation. Four axes decide the choice. Range: BLE and Zigbee cover a room or building (10-100 m per hop), Wi-Fi covers a home, LoRaWAN and NB-IoT cover kilometres. Data rate: Wi-Fi offers hundreds of Mbps, Zigbee 250 kbps, LoRaWAN as little as 0.3-50 kbps. Power: battery-life classes run from weeks (Wi-Fi) to years (BLE, Zigbee end devices, LoRaWAN Class A). Payload and latency: MQTT over TCP gives near-instant brokered delivery with flexible payloads; LoRaWAN caps frames at tens of bytes with minutes of downlink latency. No technology wins all four axes - engineering is the trade-off.",
              "The mechanism of a sensible selection starts from the requirements table: write down sensing interval, payload size, latency budget, power source and range, then eliminate protocols that fail any hard constraint. Example reasoning: a battery-powered door sensor (payload 10 bytes, one event per hour, must survive 5 years, range 30 m) eliminates Wi-Fi (power) and LoRaWAN (no need for km range; gateway cost for one building is overkill) and lands on Zigbee or BLE - the tiebreaker is whether a phone must connect directly (BLE) or a mesh with powered routers already exists (Zigbee).",
              "A worked cross-domain example shows the mix: a smart city deployment uses four protocols simultaneously. Smart parking sensors (500 nodes, 40 bytes every 30 s, km-scale) use LoRaWAN at SF9; streetlight controllers (mains-powered, 100-byte commands, <200 ms latency) use Zigbee mesh; a mobile app reads bus arrival boards over BLE advertisements; the central platform ingests everything via MQTT into the cloud. Each axis requirement pointed to exactly one winner - and no single protocol could serve all four.",
              "Advantages of mastering the comparison: it converts Unit II from memorisation to a decision procedure, which is how papers frame 'design a network for scenario X' questions. Limitations to acknowledge honestly: real projects add cost, certification (FCC/CE band rules), vendor ecosystems and security requirements that can override the pure technical winner - always end a selection answer by naming one non-technical constraint you would verify.",
            ],
            keyTerms: [
              { term: "Protocol selection axes", definition: "Range, data rate, power budget and payload/latency - the four constraints that eliminate candidates." },
              { term: "Hard constraint", definition: "A requirement (e.g. 5-year battery) that disqualifies a protocol outright, no trade-off allowed." },
              { term: "Gateway cost", definition: "Non-radio economics: extra boxes, backhaul and maintenance a protocol choice implies." },
            ],
            callout: {
              type: "exam",
              title: "Answer design questions in elimination order",
              body: "For any 'choose the right protocol' scenario: (1) tabulate range, rate, payload, latency, power needs; (2) strike out every protocol failing a hard constraint; (3) pick between survivors with a soft tiebreaker (phone connectivity, existing mesh); (4) name the full protocol stack (PHY to application) you would deploy. Four steps = full marks.",
            },
            diagram: {
              kind: "matrix",
              title: "The connectivity landscape by range and rate",
              caption:
                "Each protocol owns a quadrant; a deployment usually spans several.",
              axes: { x: "Data rate (low -> high)", y: "Range (short -> long)" },
              quadrants: [
                { label: "TL: NB-IoT, LTE-M", note: "km range over carrier networks, modest rates" },
                { label: "TR: 5G / LTE", note: "long range with high rate, highest power" },
                { label: "BL: LoRaWAN, Sigfox", note: "km range at bps-kbps, years of battery" },
                { label: "BR: Wi-Fi, Zigbee, BLE", note: "building-scale range, higher rates" },
              ],
            },
            bullets: [
              "Four selection axes: range, data rate, power, payload/latency.",
              "Zigbee/BLE: 10-100 m, kbps-class, years of battery - building sensing.",
              "Wi-Fi: building range, 100 Mbps-class, mains preferred - cameras and hubs.",
              "LoRaWAN/NB-IoT: km range, bps-kbps, years of battery - city-scale telemetry.",
              "MQTT/CoAP sit on top: choice by model (pub-sub vs REST) and payload budget.",
              "Worked city mix: LoRaWAN parking (SF9, 40 B/30 s), Zigbee streetlights, BLE bus boards, MQTT ingestion.",
              "Tiebreakers: phone connectivity favours BLE; existing powered mesh favours Zigbee.",
              "Non-technical overrides: cost, band certification, vendor ecosystem, security compliance.",
            ],
            table: {
              caption: "The master protocol comparison.",
              headers: ["Protocol", "Range", "Rate", "Battery class", "Best for"],
              rows: [
                ["BLE", "10-100 m", "~1 Mbps PHY", "Years", "Phone-connected wearables, tags"],
                ["Zigbee", "10-100 m/hop, mesh", "250 kbps", "Years (end devices)", "Building automation meshes"],
                ["Wi-Fi", "30-100 m", "100 Mbps+", "Hours-days", "Cameras, hubs, mains devices"],
                ["LoRaWAN", "2-15 km", "0.3-50 kbps", "Years+", "City/farm telemetry"],
                ["NB-IoT", "1-10 km", "25-60 kbps", "Years", "Carrier-managed meters"],
                ["MQTT (over TCP)", "As per transport", "Link-limited", "n/a (app layer)", "Brokered telemetry and commands"],
                ["CoAP (over UDP)", "As per transport", "Link-limited", "n/a (app layer)", "REST on constrained nodes"],
              ],
            },
            examQuestions: [
              {
                q: "Compare Zigbee, BLE, Wi-Fi, LoRaWAN and NB-IoT on range, data rate, power and typical applications. Recommend a protocol stack for a battery-powered smart parking deployment and justify with numbers.",
                marks: 7,
                outline: [
                  "Comparison table across the five technologies.",
                  "State the four selection axes.",
                  "Parking requirements: 500 nodes, 40 bytes every 30 s, km range, years of battery.",
                  "Eliminate Wi-Fi/Zigbee/BLE on range or gateway economics.",
                  "Choose LoRaWAN SF9: 8-11 km, payload fits, 10+ year battery.",
                  "Application layer MQTT/CoAP bridging at the network server.",
                  "Name one non-technical constraint (cost/certification).",
                ],
              },
              {
                q: "Which two protocols in the comparison use licensed spectrum?",
                marks: 2,
                outline: ["NB-IoT and LTE-M (cellular licensed bands)."],
              },
              {
                q: "Your door sensor must talk directly to a phone. Zigbee or BLE - and why?",
                marks: 3,
                outline: [
                  "BLE - phones ship with BLE radios natively.",
                  "Zigbee would need a bridge/gateway to reach a phone.",
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
      title: "Sensing and Hardware",
      summary:
        "The physical side of IoT: sensor types and performance characteristics, actuators and how they are interfaced, the Arduino ecosystem, the Raspberry Pi, choosing between them, radio and cellular communication modules, the buses (GPIO, ADC, I2C, SPI, UART) that wire everything together, and the prototyping workflow from breadboard to deployment.",
      chapter: {
        number: "03",
        title: "Sensors, Actuators, Boards and Modules",
        intro:
          "Unit III covers everything with a datasheet: sensor characteristics you must be able to define (accuracy, precision, sensitivity, resolution, range), actuator families and their drivers, Arduino and Raspberry Pi architecture with real code, the comparison that decides which board a design needs, communication modules from ESP32 to GSM, and the four buses every interfacing question tests.",
        inOneBreath:
          "Sensors are graded on range, resolution, accuracy, precision, sensitivity, linearity and drift; actuators convert electrical signals to motion/heat/light with electric, pneumatic or hydraulic power; Arduino = ATmega/ESP microcontroller, setup()/loop(), real-time deterministic, no OS; Raspberry Pi = ARM SoC + Linux, GPIO + full OS stack, heavier but general-purpose; pick by real-time needs, power and I/O mix; modules add radios (ESP32, XBee/Zigbee, GSM/GPRS SIM800, LoRa SX1276); buses: analog->ADC, I2C (2 wires, addresses, 100-400 kHz), SPI (4 wires, 10 MHz+, fast), UART (async point-to-point); prototype breadboard -> firmware -> test -> deploy.",
        sections: [
          {
            number: "3.1",
            title: "Sensors: types and performance characteristics",
            body: [
              "A sensor converts a physical quantity (temperature, humidity, pressure, light, motion, proximity, gas concentration) into a signal - usually electrical - that a processor can digitise and interpret. Sensors divide along two axes. Analog sensors output a continuously varying voltage or current proportional to the measured quantity (LM35 temperature: 10 mV per degree C; LDR light sensor: resistance falls as light rises). Digital sensors output discrete values or a bus protocol (DHT22 temperature/humidity on a 1-wire protocol, HC-SR04 ultrasonic distance returning a pulse width, BMP280 pressure over I2C). Active sensors inject energy into the environment (ultrasonic, radar, IR emitter pairs); passive sensors only receive (thermistor, LDR, PIR motion).",
              "Performance is graded by a fixed vocabulary that exams test verbatim. Range is the minimum and maximum measurable input (a DHT22 spans -40 to 80 C). Resolution is the smallest detectable change (DHT22: 0.1 C). Accuracy is closeness to the true value (DHT22: plus/minus 0.5 C), while precision is repeatability of the same reading - a sensor can be precise but wrong. Sensitivity is output change per input change (LM35: 10 mV/C). Linearity measures how straight the output-vs-input curve is; drift is slow change over time; response time is how fast output follows input. Hysteresis means output depends on the direction of approach.",
              "A worked example shows characteristics driving a design: a cold-storage monitor must hold a vaccine refrigerator between 2 and 8 C with plus/minus 0.3 C confidence. A DHT22 (plus/minus 0.5 C, 0.1 C resolution) fails accuracy outright; an SHT31 (plus/minus 0.2 C, 0.01 C resolution over I2C) passes. The ADC question also matters: on a 10-bit Arduino ADC with a 5 V reference, one count is 4.88 mV, so a direct LM35 (10 mV/C) gives roughly 0.49 C per count - barely adequate - whereas the SHT31 delivers the value digitally with no ADC quantisation at all. Response time is relaxed (measurements every 10 s), so a slow sensor is acceptable.",
              "Advantages of analog sensors: cheap, trivially simple, no protocol needed - but they inherit ADC noise and quantisation. Digital sensors cost a little more and need a bus, but deliver calibrated values, better resolution and easy multi-sensor sharing of two wires. The exam answer pairs every sensor with its quantity, output type and one key characteristic number (e.g. LM35 - temperature - analog - 10 mV/C), because listing sensor names without numbers scores half.",
            ],
            keyTerms: [
              { term: "Range", definition: "Minimum to maximum input a sensor can measure, e.g. DHT22 spans -40 to 80 C." },
              { term: "Resolution", definition: "Smallest input change the sensor can detect, e.g. 0.1 C for DHT22, 0.01 C for SHT31." },
              { term: "Accuracy vs precision", definition: "Accuracy = closeness to truth (plus/minus spec); precision = repeatability of identical readings." },
              { term: "Sensitivity", definition: "Change in output per unit change in input, e.g. LM35 gives 10 mV per degree C." },
              { term: "Hysteresis", definition: "Output depending on whether the input is rising or falling - common in magnetic and mechanical sensors." },
            ],
            callout: {
              type: "warning",
              title: "Accuracy is not precision",
              body: "The classic trap: a sensor that reads 24.6, 24.6, 24.5 C when truth is 22.0 C is precise but inaccurate. Examiners deliberately ask for both terms - define them separately and give the one-line example that separates them.",
            },
            diagram: {
              kind: "compare",
              title: "Analog versus digital sensors",
              caption:
                "Same physics, different electronics - the choice decides your ADC and wiring.",
              left: {
                heading: "Analog sensors (LM35, LDR, thermistor)",
                items: [
                  "Continuous voltage/resistance output",
                  "Needs an ADC channel per sensor",
                  "Cheap and extremely simple",
                  "Susceptible to noise and quantisation",
                  "Calibration done in software",
                ],
              },
              right: {
                heading: "Digital sensors (DHT22, BMP280, SHT31)",
                items: [
                  "Bus protocol output (I2C, 1-wire, pulse)",
                  "Many sensors share two wires (I2C)",
                  "Factory-calibrated values delivered",
                  "Better resolution, no ADC error",
                  "Slightly higher cost and protocol code",
                ],
              },
            },
            bullets: [
              "Sensor = transducer converting a physical quantity into a processable signal.",
              "Analog: LM35 (10 mV/C), thermistor, LDR; digital: DHT22, BMP280, HC-SR04, PIR.",
              "Active sensors inject energy (ultrasonic, IR pair); passive only receive (thermistor, LDR).",
              "Characteristics: range, resolution, accuracy, precision, sensitivity, linearity, drift, response time, hysteresis.",
              "DHT22: -40..80 C, plus/minus 0.5 C, 0.1 C resolution; SHT31: plus/minus 0.2 C, 0.01 C - accuracy decides the cold-storage design.",
              "ADC arithmetic: Arduino 10-bit at 5 V = 4.88 mV/count; LM35 gives ~0.49 C per count.",
              "Worked example: vaccine fridge (2-8 C, plus/minus 0.3 C) needs SHT31 over I2C, measured every 10 s.",
              "Analog wins on cost and simplicity; digital wins on calibration, resolution and wiring.",
            ],
            table: {
              caption: "Common IoT sensors with the numbers exams expect.",
              headers: ["Sensor", "Quantity", "Output", "Key spec"],
              rows: [
                ["LM35", "Temperature", "Analog", "10 mV per degree C"],
                ["DHT22", "Temperature + humidity", "Digital 1-wire", "plus/minus 0.5 C, 0.1 C resolution"],
                ["SHT31", "Temperature + humidity", "Digital I2C", "plus/minus 0.2 C, 0.01 C resolution"],
                ["BMP280", "Pressure", "Digital I2C/SPI", "about 1 hPa resolution"],
                ["HC-SR04", "Distance", "Digital pulse", "2-400 cm, ~3 mm resolution"],
                ["PIR", "Motion", "Digital", "detects IR change, ~7 m cone"],
                ["LDR", "Light", "Analog resistance", "kOhms dark, hundreds of ohms bright"],
                ["MQ-2", "Gas (smoke/LPG)", "Analog", "ppm-scale via heating element"],
              ],
            },
            examQuestions: [
              {
                q: "Define sensor. Explain the characteristics used to grade sensors (range, resolution, accuracy, precision, sensitivity) and select a sensor for a vaccine cold-chain monitor requiring 2-8 C at plus/minus 0.3 C, justifying with numbers.",
                marks: 7,
                outline: [
                  "Definition of sensor and the analog/digital split.",
                  "Range and resolution with examples (DHT22 -40..80 C, 0.1 C).",
                  "Accuracy vs precision with the 24.6 vs 22.0 C example.",
                  "Sensitivity: LM35 10 mV/C; linearity, drift, response time briefly.",
                  "ADC quantisation: 10-bit at 5 V = 4.88 mV/count, ~0.49 C per count on LM35.",
                  "Selection: DHT22 fails accuracy; SHT31 (plus/minus 0.2 C) passes over I2C.",
                  "State measurement interval and output-type rationale.",
                ],
              },
              {
                q: "Differentiate accuracy and precision with one example.",
                marks: 2,
                outline: [
                  "Accuracy: closeness to true value.",
                  "Precision: repeatability; a tightly wrong sensor is precise but inaccurate.",
                ],
              },
              {
                q: "Classify HC-SR04 and a thermistor as active/passive and analog/digital.",
                marks: 3,
                outline: [
                  "HC-SR04: active, digital (pulse-width output).",
                  "Thermistor: passive, analog (resistance change).",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Actuators and their interfacing",
            body: [
              "An actuator converts an electrical control signal into a physical action - motion, heat, light or sound - closing the loop that a sensor opened. Families follow the power source. Electric actuators dominate IoT prototyping: DC motors (continuous rotation, speed via PWM), servo motors (angular position to about 180 degrees, controlled by 50 Hz pulse width 1-2 ms), stepper motors (precise steps, e.g. 1.8 degrees per step), relays (isolated switching of mains loads) and solid-state options (MOSFETs for loads up to tens of amps). Pneumatic actuators use compressed air (fast, strong, needs a compressor); hydraulic ones use fluid pressure (highest force, industrial machinery only).",
              "The mechanism of interfacing is about power and isolation: microcontroller pins supply at most about 20-40 mA at 3.3-5 V, so anything bigger needs a driver. A 12 V 2 A DC motor is driven through an H-bridge (L298N or DRV8833) that switches the higher voltage with logic-level inputs and PWM; a relay coil needs a transistor driver plus a flyback diode to absorb the inductive spike when the coil releases; mains loads are switched by relays with optocoupler isolation so 230 V never touches the logic side. Position feedback closes the loop: a servo has an internal potentiometer, while a DC motor may add an encoder delivering quadrature pulses for speed/position measurement.",
              "A worked example with numbers: a smart irrigation valve uses a 12 V latching solenoid drawing 0.5 A for 100 ms to open. The GPIO pin (3.3 V, 12 mA max) drives a logic-level MOSFET (IRLZ44N, rated 47 A - 90x headroom) whose gate takes a 3.3 V logic high; a flyback diode across the coil absorbs the ~30 V inductive kick at release. Energy per actuation is 12 V x 0.5 A x 0.1 s = 0.6 J, so from a 10,000 J (about 2800 mAh at 3.7 V) battery the valve could actuate over 16,000 times - the actuator, not the radio, dictates the power budget, which is why latching (rather than continuously powered) solenoids are the standard choice.",
              "Advantages of electric actuators: precise control (PWM, encoders), easy interfacing, rich component ecosystem. Limitations: limited force per size versus hydraulics, heat dissipation at high duty cycles, and electromechanical wear (relay contacts, motor brushes). In exam answers, always state the driving rule - 'pins cannot power loads directly; use a driver with isolation and a flyback diode' - plus one numeric example; that combination covers both theory and application marks.",
            ],
            keyTerms: [
              { term: "Actuator", definition: "Device converting an electrical control signal into physical action - motion, heat, light or sound." },
              { term: "PWM", definition: "Pulse-width modulation - varying duty cycle to control average power delivered to motors or LEDs." },
              { term: "H-bridge", definition: "Four-switch driver (L298N, DRV8833) allowing a DC motor to be driven forwards, backwards and braked." },
              { term: "Flyback diode", definition: "Diode across an inductive load that absorbs the voltage spike when current is switched off." },
              { term: "Optocoupler isolation", definition: "Light-based galvanic isolation letting low-voltage logic safely control high-voltage loads." },
            ],
            callout: {
              type: "tip",
              title: "One rule covers most actuator marks",
              body: "GPIO pins supply 20-40 mA max - never drive a motor, relay or solenoid directly. Every actuator answer should include: driver (transistor/H-bridge), flyback diode for inductive loads, isolation for mains, and one energy calculation (V x I x t).",
            },
            diagram: {
              kind: "fork",
              title: "Choosing an actuator family",
              caption:
                "The power source decides the family; IoT prototypes live almost entirely in the first branch.",
              start: "What must the actuator move, and with what power?",
              branches: [
                { label: "Precise motion from electricity", outcome: "DC/servo/stepper motors with PWM and drivers - the IoT default", good: true },
                { label: "Fast, strong, clean actuation", outcome: "Pneumatic cylinders - needs compressor and valve logic", good: false },
                { label: "Maximum force in small space", outcome: "Hydraulic actuators - industrial presses and machinery", good: false },
              ],
            },
            bullets: [
              "Actuator = electrical signal to physical action; completes the sense-decide-act loop.",
              "Electric family: DC motor, servo (50 Hz, 1-2 ms pulse, ~180 degrees), stepper (1.8 degrees/step), relay, MOSFET.",
              "Pneumatic: compressed air, fast and clean; hydraulic: fluid, highest force.",
              "GPIO pins give ~20-40 mA at 3.3-5 V - loads need drivers (transistor, H-bridge, relay).",
              "Flyback diode across coils absorbs inductive kick (~30 V in the valve example).",
              "Optocoupler isolation required whenever mains is switched.",
              "Worked example: 12 V, 0.5 A, 100 ms latching valve = 0.6 J per actuation; 16,000+ acts from one battery.",
              "Trade-offs: electric = precise and convenient but lower force; hydraulic/pneumatic = force but infrastructure.",
            ],
            table: {
              caption: "Actuator families and control methods.",
              headers: ["Actuator", "Power", "Control signal", "Typical IoT use"],
              rows: [
                ["DC motor", "Electric", "PWM via H-bridge", "Fans, pumps, lockers"],
                ["Servo", "Electric", "50 Hz, 1-2 ms pulse", "Valves, dampers, camera mounts"],
                ["Stepper", "Electric", "Step pulses + driver", "Precision dosing, gantries"],
                ["Relay", "Electric (isolated)", "GPIO + transistor", "Mains appliance switching"],
                ["Solenoid valve", "Electric", "GPIO + MOSFET", "Irrigation, water control"],
                ["Pneumatic cylinder", "Compressed air", "Solenoid valve bank", "Sorting, pick-place"],
              ],
            },
            examQuestions: [
              {
                q: "What is an actuator? Explain the electric, pneumatic and hydraulic families with examples, and describe with a circuit how a microcontroller drives a 12 V solenoid valve including the flyback diode and an energy calculation.",
                marks: 7,
                outline: [
                  "Define actuator and its role closing the control loop.",
                  "Electric family: DC/servo/stepper/relay with control signals.",
                  "Pneumatic and hydraulic: power source, force, infrastructure needs.",
                  "GPIO limits: 20-40 mA at 3.3-5 V - driver required.",
                  "MOSFET low-side switch circuit with flyback diode.",
                  "Energy: 12 V x 0.5 A x 0.1 s = 0.6 J; 16,000+ acts from a 10,000 J battery.",
                  "Mention isolation (optocoupler) for mains loads.",
                ],
              },
              {
                q: "Why is a flyback diode needed across a relay coil?",
                marks: 2,
                outline: ["To absorb the inductive voltage spike when the coil current is cut, protecting the driving transistor."],
              },
              {
                q: "How is a servo motor positioned and what pulse corresponds to centre?",
                marks: 3,
                outline: [
                  "Position by pulse width of a 50 Hz signal.",
                  "1 ms = one end, 1.5 ms = centre, 2 ms = other end (approx 180 degree range).",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Arduino: architecture and programming",
            body: [
              "Arduino is an open-source microcontroller platform: a board with an AVR or ESP microcontroller, USB interface, voltage regulation and exposed I/O headers, programmed from the Arduino IDE through a C/C++ dialect with a library ecosystem ('sketches'). The classic Uno runs an ATmega328P at 16 MHz with 32 KB flash, 2 KB SRAM, 14 digital I/O pins (6 PWM) and 6 analog inputs on a 10-bit ADC; the ESP32-based variants add dual-core 240 MHz operation, Wi-Fi and Bluetooth. Its virtue is determinism: code runs bare-metal with no operating system, so timing is predictable at the microsecond level.",
              "The mechanism of every sketch is the same two-function skeleton: setup() runs once after reset to configure pin modes, serial speed and libraries; loop() then runs forever, reading inputs, computing and driving outputs. Interrupt service routines can fire on pin changes or timer overflows and should be short, communicating via volatile shared variables. The boot process is deliberately simple: reset vector -> bootloader -> setup() -> loop(); there is no scheduler, so anything blocking (a delay() call) blocks everything - which is why non-blocking timing via millis() comparisons is the first idiom Arduino programmers learn.",
              "A worked example with numbers: a plant-watering alert node on an Uno. Pin A0 reads a capacitive soil sensor (about 300 dry, 700 wet counts on the 10-bit ADC, so threshold 450); pin 13 blinks an LED pattern when dry. The blink is non-blocking: every 500 ms the code toggles based on millis(), while the sensor is sampled every 10 s - one analogRead takes about 100 microseconds (13 ADC clocks at 104 us per conversion), so the loop spends 99.99% of its time idle. Power: sleep between samples with the MCU in power-down mode at about 0.1 uA plus sensor standby brings the average below 1 mA, letting a 9 V alkaline cell (about 500 mAh at 9 V) last months.",
              "Advantages: near-zero barrier to entry, deterministic timing, massive shield and library ecosystem, low power when slept. Limitations: no OS means no networking stack unless a module or ESP variant supplies one, 2 KB SRAM caps data buffering, and complex applications (databases, TLS, web servers) quickly exceed what bare-metal comfortably hosts - that is the boundary where designs graduate to a Raspberry Pi, the subject of the next section.",
            ],
            keyTerms: [
              { term: "Sketch", definition: "An Arduino program built around setup() (once) and loop() (forever)." },
              { term: "ATmega328P", definition: "The Uno's 16 MHz 8-bit MCU: 32 KB flash, 2 KB SRAM, 14 digital + 6 analog pins." },
              { term: "PWM", definition: "analogWrite()-style duty-cycle output on marked pins, used for dimming and motor speed." },
              { term: "ISR", definition: "Interrupt service routine - short handler fired by pin change or timer, sharing data via volatile variables." },
              { term: "Non-blocking timing", definition: "Scheduling with millis() comparisons instead of delay() so the loop keeps running." },
            ],
            callout: {
              type: "tip",
              title: "Quote the skeleton in code questions",
              body: "Any Arduino question, even conceptual, earns marks by showing setup()/loop() with pin modes and a millis()-based schedule. Avoid delay() in the main loop - examiners read it as a beginner mistake that blocks sensing.",
            },
            diagram: {
              kind: "flow",
              title: "How an Arduino sketch executes",
              caption:
                "Bare-metal determinism: reset, configure once, then loop forever with interrupts available at any time.",
              steps: [
                { label: "Reset / power-on", note: "bootloader hands control to the sketch" },
                { label: "setup() runs once", note: "pinMode, Serial.begin, sensor init" },
                { label: "loop() repeats forever", note: "read inputs, decide, drive outputs" },
                { label: "millis() scheduling", note: "sample every 10 s, blink every 500 ms without blocking" },
                { label: "Interrupts anytime", note: "ISR on pin change or timer, kept short" },
              ],
            },
            bullets: [
              "Arduino = open microcontroller platform + IDE + library ecosystem.",
              "Uno: ATmega328P, 16 MHz, 32 KB flash, 2 KB SRAM, 10-bit ADC (4.88 mV/count at 5 V).",
              "ESP32 variants: dual-core 240 MHz, Wi-Fi + BLE built in.",
              "Every sketch: setup() once, loop() forever; no OS, deterministic timing.",
              "analogRead costs ~100 us (13 ADC clocks); loop is otherwise idle.",
              "Non-blocking idioms: millis() comparisons; delay() blocks everything.",
              "Worked example: soil node, thresholds 300/450/700 counts, sample every 10 s, sleep at ~0.1 uA.",
              "Limits: 2 KB SRAM, no built-in stack on AVR boards - complex apps move to Pi.",
            ],
            codeExample: {
              language: "arduino",
              caption: "Non-blocking soil-alert sketch: blink every 500 ms, sense every 10 s.",
              code: `const int SOIL = A0;   // capacitive sensor
const int LED  = 13;

unsigned long lastBlink = 0, lastSense = 0;
bool ledState = false;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  unsigned long now = millis();
  if (now - lastBlink >= 500) {
    ledState = !ledState;
    digitalWrite(LED, ledState);
    lastBlink = now;
  }
  if (now - lastSense >= 10000) {
    int v = analogRead(SOIL);   // ~100 us
    bool dry = v < 450;         // 300 dry .. 700 wet
    Serial.print("soil="); Serial.println(v);
    lastSense = now;
  }
}`,
            },
            examQuestions: [
              {
                q: "Explain the Arduino hardware architecture and the setup()/loop() execution model. Write or describe a non-blocking sketch that samples a soil sensor every 10 s and blinks an LED every 500 ms, and justify the timing with numbers.",
                marks: 7,
                outline: [
                  "Hardware: ATmega328P, 16 MHz, 32 KB flash, 2 KB SRAM, I/O counts.",
                  "ESP32 variants add Wi-Fi/BLE at 240 MHz.",
                  "Execution model: reset -> setup() once -> loop() forever, no OS.",
                  "Non-blocking timing with millis(); why delay() is harmful.",
                  "ADC maths: 10-bit, 4.88 mV/count; analogRead ~100 us.",
                  "Sketch logic with thresholds 300/450/700 counts.",
                  "Power note: sleep between samples, months on one cell.",
                ],
              },
              {
                q: "How many bytes of SRAM does the Arduino Uno have and what limits does that impose?",
                marks: 2,
                outline: ["2 KB; caps buffering, TLS and large string handling."],
              },
              {
                q: "Why should delay() be avoided in the main loop of a sensing sketch?",
                marks: 3,
                outline: [
                  "No OS: delay() blocks all execution.",
                  "Other tasks (blinking, reacting) are starved; use millis() scheduling.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Raspberry Pi: architecture and programming",
            body: [
              "The Raspberry Pi is a single-board computer: a Broadcom ARM SoC (quad-core Cortex-A72 at 1.5 GHz on the Pi 4) with 1-8 GB RAM, USB ports, HDMI, Ethernet/Wi-Fi, and a 40-pin GPIO header exposing digital I/O plus standard buses (I2C, SPI, UART). Unlike Arduino it runs a full operating system - typically Raspberry Pi OS Linux - so it hosts databases, web servers, MQTT brokers, Python/Node applications, TLS and containers. The Pi is the 'hub' side of an IoT deployment: local gateway, edge analytics node, or dashboard server.",
              "The mechanism spans hardware to userspace. The boot chain loads firmware, then the kernel, then the OS; applications run as normal Linux processes with scheduling, memory management and networking handled by the kernel. GPIO access happens through sysfs or libraries (RPi.GPIO, gpiozero) - python scripts can digitalWrite-style control pins - and hardware buses appear as devices (/dev/i2c-1, /dev/spidev0.0, /dev/ttyAMA0). Because there is an OS, timing is not deterministic: scheduler jitter is milliseconds, not microseconds, so bit-banged precise protocols belong on a microcontroller, while the Pi handles everything above them.",
              "A worked example with numbers: a home energy gateway on a Pi 4. It subscribes as an MQTT broker for 20 house nodes (about 60-byte messages every 30 s = roughly 2.4 KB/min total), stores readings in an SQLite database (about 3 MB/day), computes per-appliance daily consumption with a Python script (quad-core, so the analytics job uses 15% of one core), and serves a local dashboard over HTTP on port 80. It also bridges Zigbee via a USB dongle and relays to the cloud every 5 minutes as a 5 KB batch. Power draw is about 4-6 W from a 5 V/3 A supply - roughly 40 kWh/year, acceptable for a mains-powered gateway but absurd for a battery node.",
              "Advantages: full Linux ecosystem (databases, TLS, containers, video), strong compute for edge analytics, rich connectivity built in, huge community support. Limitations: 4-6 W power draw rules out battery operation, boot time and OS complexity add failure modes (SD card corruption on power cuts is the classic), and GPIO timing is non-deterministic. The exam contrast: Arduino for real-time sensing at microamp sleep, Pi for gateway intelligence at watts - most real systems use both.",
            ],
            keyTerms: [
              { term: "SoC", definition: "System-on-Chip - the Pi's ARM CPU, GPU and memory controller integrated on one die (e.g. BCM2711)." },
              { term: "GPIO header", definition: "40-pin expansion with digital pins plus I2C, SPI and UART buses." },
              { term: "Headless operation", definition: "Running the Pi with no monitor/keyboard, managed over SSH - the normal IoT mode." },
              { term: "Edge gateway", definition: "A Pi-style node that aggregates, buffers and forwards sensor data between local devices and the cloud." },
              { term: "SD card corruption", definition: "Classic Pi failure: abrupt power loss during writes damages the filesystem; mitigated by read-only roots or UPS." },
            ],
            callout: {
              type: "warning",
              title: "The Pi is not a sensor node",
              body: "Quote 4-6 W and milliseconds of OS jitter when explaining why the Pi is a gateway, not a battery sensor node. A battery answer that puts a Pi in the field without justifying power will lose the marks.",
            },
            diagram: {
              kind: "layers",
              title: "The Raspberry Pi software/hardware stack",
              caption:
                "From ARM silicon to your Python process - the OS adds power and non-determinism together.",
              layers: [
                { label: "Applications", note: "Python/Node apps, MQTT broker, SQLite, dashboards" },
                { label: "OS services", note: "Linux kernel, scheduler, networking, SSH" },
                { label: "Device access", note: "sysfs/RPi.GPIO, /dev/i2c-1, /dev/spidev, /dev/ttyAMA0" },
                { label: "Firmware / boot", note: "GPU boot ROM loads kernel from SD card" },
                { label: "Hardware", note: "BCM2711 quad-core A72, 1-8 GB RAM, 40-pin GPIO" },
              ],
            },
            bullets: [
              "Pi = ARM SoC single-board computer running Linux, with 40-pin GPIO + I2C/SPI/UART.",
              "Pi 4: quad-core Cortex-A72 at 1.5 GHz, 1-8 GB RAM, Ethernet/Wi-Fi, USB, HDMI.",
              "Full OS: scheduling, networking, TLS, databases, containers - everything an MCU lacks.",
              "GPIO via RPi.GPIO/gpiozero; buses via /dev devices.",
              "Timing: millisecond OS jitter - non-deterministic; microsecond work belongs on MCUs.",
              "Worked example: home energy gateway - 20 nodes, ~2.4 KB/min MQTT, 3 MB/day SQLite, 4-6 W.",
              "Boot chain: firmware -> kernel -> OS -> user processes.",
              "Limits: power draw, SD corruption risk, boot time - gateway role, not field sensing.",
            ],
            codeExample: {
              language: "python",
              caption: "Reading a button on GPIO 17 with RPi.GPIO and acting on it.",
              code: `import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.IN, pull_up_down=GPIO.PUD_UP)

try:
    while True:
        pressed = GPIO.input(17) == GPIO.LOW
        if pressed:
            print("door open at", time.strftime("%H:%M:%S"))
        time.sleep(0.2)   # 5 Hz poll - OS jitter is fine here
finally:
    GPIO.cleanup()`,
            },
            examQuestions: [
              {
                q: "Explain the Raspberry Pi architecture and how it differs from a microcontroller platform. Describe its use as an IoT edge gateway with a numerical example of throughput, storage and power.",
                marks: 7,
                outline: [
                  "Hardware: BCM SoC, quad-core A72 1.5 GHz, 1-8 GB RAM, 40-pin GPIO.",
                  "Runs Linux: scheduler, networking, TLS, databases.",
                  "GPIO and bus access: RPi.GPIO, /dev/i2c, /dev/spidev.",
                  "Contrast with MCU: deterministic microseconds vs OS jitter (ms).",
                  "Gateway example: 20 MQTT nodes, 60 B every 30 s, 3 MB/day SQLite, 5 KB cloud batch per 5 min.",
                  "Power: 4-6 W - mains only, not battery.",
                  "State failure modes: SD corruption, boot time.",
                ],
              },
              {
                q: "Why is a Raspberry Pi unsuitable for a battery-powered field sensor?",
                marks: 2,
                outline: ["4-6 W continuous draw exhausts any practical battery; MCUs sleep at microamps."],
              },
              {
                q: "Name the buses available on the Pi's 40-pin header.",
                marks: 3,
                outline: ["I2C, SPI, UART, plus plain GPIO digital pins."],
              },
            ],
          },
          {
            number: "3.5",
            title: "Arduino vs Raspberry Pi: choosing the right board",
            body: [
              "The two platforms solve different halves of the IoT problem, and papers love the comparison. Arduino is a microcontroller: 8-bit (or ESP 32-bit) bare-metal execution, kilobytes of RAM, deterministic microsecond timing, microamp sleep currents, and analog inputs on board. Raspberry Pi is a computer: gigahertz quad-core Linux, gigabytes of RAM, full network stack, databases and video, at watts of power and millisecond timing jitter. Neither replaces the other - a real deployment typically pairs them: MCUs sense and act in real time; a Pi aggregates, analyses and serves.",
              "The mechanism of the decision is a checklist. Real-time and power first: if the node sleeps for years on batteries or must respond within microseconds, it is an Arduino-class MCU. Data processing and connectivity next: if the node must run a broker, database, TLS termination, camera vision or machine learning, it is a Pi-class SBC. I/O mix decides the boundary: analog sensors push work toward the Arduino (the Pi has no ADC), while USB cameras, HDMI displays or heavy libraries push toward the Pi. Cost, size and reliability come last - an MCU board costs about 5-10 dollars and boots in milliseconds; a Pi costs 35-80 dollars and takes 30-60 seconds to boot.",
              "A worked example: a smart greenhouse has 12 battery-powered sensor nodes (temperature, humidity, soil) sampling every 10 minutes - Arduino-class ESP32 nodes sleeping at 10 uA, lasting 8 months on 2000 mAh. A single Pi 4 at the greenhouse head gathers their MQTT messages (12 nodes x 25 bytes per 10 min = 30 bytes/min - trivial), runs the irrigation decision model in Python, logs to SQLite (about 0.5 MB/day) and pushes alerts. Power for the Pi is mains at 5 W. Attempting the reverse - one Pi doing the sensing - fails on power (12 batteries cannot feed 12 Pis) and on analog inputs; attempting 12 Arduinos doing analytics fails on SRAM and Linux absence.",
              "Advantages of the hybrid architecture: each platform operates where it is strong, failures are contained (a crashed Pi does not stop the sensor network - nodes buffer and retry), and total cost stays low. Limitations: two codebases and toolchains to maintain, and the MCU-Pi link itself is a design point (serial, I2C or network) that can fail - a good answer names the link protocol and what happens when it is down (local buffering with a retry).",
            ],
            keyTerms: [
              { term: "Microcontroller (MCU)", definition: "Single-chip computer with flash/SRAM and peripherals, bare-metal deterministic execution - Arduino class." },
              { term: "Single-board computer (SBC)", definition: "Complete Linux computer on one board with gigahertz CPUs and GB of RAM - Raspberry Pi class." },
              { term: "Deterministic timing", definition: "Execution time predictable to microseconds - an MCU property the OS-driven Pi lacks." },
              { term: "Hybrid architecture", definition: "Deployment pattern pairing MCU sensor nodes with an SBC gateway/analytics hub." },
            ],
            callout: {
              type: "exam",
              title: "Comparison answers need the table and the scenario",
              body: "For any Arduino-vs-Pi question, draw the specs table (clock, RAM, OS, power, ADC, boot) AND apply it to a scenario with numbers (12 nodes, 8-month battery, 30 bytes/min). Table alone = definition marks; scenario alone = application marks; together = all 7.",
            },
            diagram: {
              kind: "compare",
              title: "Arduino versus Raspberry Pi",
              caption:
                "Microcontroller versus computer - different halves of the same deployment.",
              left: {
                heading: "Arduino (MCU)",
                items: [
                  "16 MHz-240 MHz, no OS, bare metal",
                  "2 KB-520 KB RAM",
                  "Microsecond deterministic timing",
                  "Microamp sleep, battery-native",
                  "Built-in ADC on most boards",
                ],
              },
              right: {
                heading: "Raspberry Pi (SBC)",
                items: [
                  "Quad-core 1.5 GHz under Linux",
                  "1-8 GB RAM",
                  "Millisecond OS jitter",
                  "4-6 W continuous, mains only",
                  "No ADC - cameras, USB, databases instead",
                ],
              },
            },
            bullets: [
              "MCU = bare-metal, deterministic, uA sleep, KB RAM; SBC = Linux, GHz, GB RAM, watts.",
              "Uno: 16 MHz, 2 KB SRAM, 10-bit ADC; Pi 4: 4x1.5 GHz, up to 8 GB, no ADC.",
              "Decision checklist: real-time? power? processing? I/O mix? cost?",
              "Analog sensors push toward Arduino; cameras/TLS/databases push toward Pi.",
              "Worked greenhouse: 12 ESP32 nodes (10 uA sleep, 8 months) + one Pi gateway (5 W, 30 bytes/min, 0.5 MB/day).",
              "Cost and boot: MCU 5-10 dollars and instant; Pi 35-80 dollars and 30-60 s boot.",
              "Hybrid benefit: Pi crash does not stop sensing - nodes buffer and retry.",
              "Design the MCU-Pi link explicitly: serial/I2C/network with local buffering on failure.",
            ],
            table: {
              caption: "Board comparison with the numbers.",
              headers: ["Aspect", "Arduino Uno / ESP32", "Raspberry Pi 4"],
              rows: [
                ["CPU", "8-bit 16 MHz / 2x240 MHz", "4x Cortex-A72 1.5 GHz"],
                ["RAM", "2 KB / 520 KB", "1-8 GB"],
                ["OS", "None (bare metal)", "Linux (Raspberry Pi OS)"],
                ["Timing", "Microsecond deterministic", "Millisecond jitter"],
                ["Power", "mA active, uA sleep", "4-6 W continuous"],
                ["ADC", "Yes (10/12-bit)", "No (USB or external ADC)"],
                ["Typical cost", "5-10 USD", "35-80 USD"],
                ["Boot", "Instant", "30-60 s"],
              ],
            },
            examQuestions: [
              {
                q: "Compare Arduino and Raspberry Pi on architecture, timing, power, I/O and cost. For a smart greenhouse with 12 battery nodes and one head unit, justify a hybrid design with numbers.",
                marks: 7,
                outline: [
                  "MCU vs SBC definitions.",
                  "Table: clock, RAM, OS, timing, power, ADC, cost, boot.",
                  "Battery and real-time requirements force MCUs for field nodes.",
                  "Broker/database/analytics force a Pi at the head.",
                  "Numbers: 12 nodes x 25 B per 10 min; ESP32 10 uA sleep, 8-month battery; Pi 5 W.",
                  "Explain why neither platform alone works (power, SRAM, ADC).",
                  "Failure containment: nodes buffer when the Pi is down.",
                ],
              },
              {
                q: "Which of the two boards includes an on-board ADC, and which needs an external one?",
                marks: 2,
                outline: ["Arduino has a 10/12-bit ADC; the Pi has none (use USB/external ADC)."],
              },
              {
                q: "State two reasons a Pi-based sensor node cannot run 8 months on batteries.",
                marks: 3,
                outline: [
                  "4-6 W continuous draw.",
                  "No deep-sleep OS state; boot cycle itself costs far more than a battery budget allows.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Communication modules: ESP32, XBee, GSM and LoRa",
            body: [
              "Communication modules add radios to nodes that lack them, or give a board a different connectivity class. The ESP32 is a 32-bit dual-core 240 MHz SoC with integrated Wi-Fi 802.11n and Bluetooth 4.2/BLE - a complete IoT node for about 5 dollars, replacing the Arduino-plus-shield combination. XBee modules are 802.15.4/Zigbee radios on a pin-compatible footprint that drop onto any UART, letting a non-networked MCU join a mesh with AT commands or transparent serial streaming. GSM/GPRS modules (SIM800L, SIM7600 for 4G) connect nodes to the cellular network with a SIM card - anywhere with coverage. LoRa modules (SX1276/SX1278) give km-range LPWAN links at 433/868/915 MHz.",
              "The mechanism is always the same shape: the host MCU talks to the module over UART (or SPI), sending either AT commands ('AT+CSQ' returns signal strength on a SIM800) or protocol frames, and the module handles modulation, packetisation and network protocols. Power classes differ sharply: ESP32 Wi-Fi TX peaks around 200-300 mA with a deep-sleep floor of 10 uA; SIM800L peaks near 2 A during GSM transmit bursts (it needs its own supply and capacitors); SX1276 transmits at 20-120 mA depending on power setting and sleeps at 0.2 uA. Antenna design and certification (FCC/CE) come with each module family.",
              "A worked example with numbers: a remote tank-level node 4 km from the nearest building has no Wi-Fi. Options priced out: GSM/GPRS (SIM800L) needs a SIM (about 2 dollars/month) and peaks at 2 A - feasible only with solar; LoRa SX1278 at 14 dBm reaches 4 km at SF10 with a 12-byte payload every 30 min - average current about 0.5 mA, so a 2400 mAh cell lasts about 7 months; ESP32 is free of subscription but Wi-Fi dies at 50 m. The chosen design: ESP32 MCU + SX1278 LoRa module, payload 12 bytes, SF10, duty-cycled to 1%, costing about 8 dollars in modules with zero recurring fees.",
              "Advantages of module-based design: certified radios drop in without RF engineering, families are pin-compatible (swap an XBee Zigbee for an XBee 900 MHz without redesign), and the host code stays the same AT/UART interface. Limitations: modules add cost and connectors, AT-command error handling is easy to get wrong, and cellular power bursts (2 A) stress small power supplies. Exams ask 'which module for scenario X' - answer with the elimination logic of 2.8 plus the peak-current numbers above.",
            ],
            keyTerms: [
              { term: "ESP32", definition: "Dual-core 240 MHz SoC with Wi-Fi and BLE integrated; complete IoT node at ~5 USD." },
              { term: "XBee", definition: "Pin-compatible 802.15.4/Zigbee radio modules driven by AT commands or transparent UART." },
              { term: "SIM800L", definition: "GSM/GPRS cellular module, ~2 A TX peaks, needs SIM card and stable supply." },
              { term: "SX1276/78", definition: "Semtech LoRa transceivers used in most DIY LoRaWAN nodes; 0.2 uA sleep." },
              { term: "AT commands", definition: "Text command protocol ('AT+...') used to control modems over UART." },
            ],
            callout: {
              type: "tip",
              title: "Peak current decides the power supply",
              body: "Quote the TX peaks: ESP32 Wi-Fi 200-300 mA, SIM800L up to 2 A, SX1276 20-120 mA. A 3.7 V Li-ion cell with a weak regulator browns out on a 2 A GSM burst - mentioning supply decoupling shows real engineering and earns the extra marks.",
            },
            diagram: {
              kind: "matrix",
              title: "Modules positioned by range and data rate",
              caption:
                "Peak TX current (bracketed) often decides between close candidates, not range or rate.",
              axes: { x: "Data rate (low -> high)", y: "Range (short -> long)" },
              quadrants: [
                { label: "TL: GSM/4G SIM7600 (2 A)", note: "km range, Mbps-class, subscription" },
                { label: "TR: Wi-Fi via ESP32 (300 mA)", note: "building range, high rate, no fees" },
                { label: "BL: SX1276 LoRa (120 mA)", note: "km range, kbps-class, years of battery" },
                { label: "BR: XBee Zigbee (40 mA)", note: "building range, mesh, low power" },
              ],
            },
            bullets: [
              "Modules add connectivity classes: Wi-Fi/BLE (ESP32), mesh (XBee), cellular (SIM800L/7600), LPWAN (SX1276/78).",
              "Standard interface: UART + AT commands or protocol frames; module handles RF.",
              "ESP32: dual-core 240 MHz, Wi-Fi 802.11n + BLE, ~5 USD, deep sleep 10 uA.",
              "XBee: pin-compatible swap between frequency variants; transparent serial or API frames.",
              "SIM800L: GPRS data + SMS, TX bursts to 2 A, needs SIM and dedicated supply.",
              "Worked example: 4 km tank node - LoRa SF10 12-byte payload every 30 min, ~0.5 mA average, ~7 months on 2400 mAh.",
              "Cost logic: LoRa ~8 USD one-off vs GSM ~2 USD/month recurring.",
              "Limits: certification, antenna design, AT error handling, supply stress from TX bursts.",
            ],
            table: {
              caption: "Module quick-reference.",
              headers: ["Module", "Technology", "Peak TX current", "Typical use"],
              rows: [
                ["ESP32", "Wi-Fi 802.11n + BLE", "200-300 mA", "Complete Wi-Fi node, gateway"],
                ["XBee S2C", "Zigbee / 802.15.4", "~40 mA", "Drop-in mesh for any MCU"],
                ["SIM800L", "GSM/GPRS 2G", "up to 2 A", "Remote nodes with SIM, SMS alerts"],
                ["SIM7600", "4G LTE", "~500 mA", "High-rate cellular backhaul"],
                ["SX1276/78", "LoRa CSS", "20-120 mA", "LPWAN nodes and gateways"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the ESP32, XBee, GSM and LoRa module families and their interfaces to a host MCU. Select modules for a 4 km battery-powered tank-level sensor and justify with range, payload, current and cost numbers.",
                marks: 7,
                outline: [
                  "Family overview: ESP32, XBee, SIM800L/7600, SX1276/78.",
                  "Common interface: UART + AT commands; module owns RF.",
                  "Power numbers: 300 mA Wi-Fi, 2 A GSM burst, 120 mA LoRa TX, uA sleeps.",
                  "Scenario constraints: no Wi-Fi at 4 km, battery-only, 12-byte payload.",
                  "Eliminate ESP32 (range) and argue GSM cost/power vs LoRa.",
                  "Design: ESP32 + SX1278, SF10, 12 B every 30 min, ~0.5 mA avg, 7 months.",
                  "Cost: ~8 USD one-off vs 2 USD/month recurring.",
                ],
              },
              {
                q: "Why does a SIM800L module need its own power supply and capacitors?",
                marks: 2,
                outline: ["GSM transmit bursts draw up to 2 A; a shared weak regulator browns out the MCU."],
              },
              {
                q: "What is the XBee module's main practical advantage?",
                marks: 3,
                outline: [
                  "Pin-compatible footprint across radio variants.",
                  "Transparent UART operation - swap technology without board redesign.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Interfacing buses: GPIO, ADC, I2C, SPI and UART",
            body: [
              "Interfacing is the discipline of connecting sensors and actuators to processors, and the exam tests five interfaces. GPIO (general-purpose input/output) are digital pins read or written bit-wise - buttons, LEDs, relay triggers, one-wire-style bit-banged protocols - with modes input/output/pull-up/pull-down and interrupts on edge. The ADC (analog-to-digital converter) digitises analog sensors: resolution in bits (10-bit = 1024 counts), reference voltage (5 V on Uno, so 4.88 mV per count), sample rate, and concepts like quantisation error and oversampling to gain effective bits.",
              "The three serial buses each occupy a niche. I2C uses two wires (SDA data, SCL clock) with 7-bit addressing, supporting many slaves on one bus at 100 kbps (standard) or 400 kbps (fast) - ideal for multiple slow sensors; it needs pull-up resistors (typically 4.7 kohm) and arbitration is handled by the protocol. SPI uses four wires (MOSI, MISO, SCLK, and one chip-select CS per slave) at 10 MHz and beyond - full duplex and fast, the choice for SD cards, displays and high-rate ADCs, at the cost of a CS line per device. UART is asynchronous point-to-point (TX, RX, agreed baud rate like 9600 or 115200, framed by start/stop bits) - the language of GPS modules, GSM modems and debug consoles; it is not a bus because there is no addressing.",
              "A worked example wires a real node: a weather monitor on an Arduino connects a BMP280 pressure sensor and an SHT31 humidity sensor to the same two-wire I2C bus (addresses 0x76 and 0x44 - no conflict), an SD card on the SPI bus at 10 MHz because logging needs throughput, and a SIM800L modem on a hardware UART at 9600 baud. The analog LDR takes pin A0 on the 10-bit ADC (4.88 mV/count). Timing check: reading both I2C sensors at 400 kbps costs under 2 ms total, the SPI sector write about 1 ms, so a 1 s sampling loop uses well under 1% CPU - the numbers prove the bus choices fit.",
              "Advantages per bus: I2C minimises wires and scales by address; SPI maximises speed and simplicity of state machine; UART maximises reach (works over long cables with level shifting) and universality. Limitations: I2C is slow and address collisions are possible; SPI consumes a pin per device; UART has no native multi-device support and baud mismatches corrupt data silently. A strong answer names speed, wires and addressing for each bus, then shows one wiring diagram with real addresses and baud rates.",
            ],
            keyTerms: [
              { term: "GPIO", definition: "Digital input/output pins with pull-up/pull-down modes and edge interrupts." },
              { term: "ADC", definition: "Analog-to-digital converter; resolution in bits times reference voltage gives mV per count." },
              { term: "I2C", definition: "Two-wire addressed bus (SDA/SCL), 100-400 kbps, 7-bit addresses, needs pull-ups." },
              { term: "SPI", definition: "Four-wire full-duplex bus (MOSI/MISO/SCLK/CS) at 10 MHz+, one CS line per slave." },
              { term: "UART", definition: "Asynchronous point-to-point serial link with start/stop bits at an agreed baud rate." },
            ],
            callout: {
              type: "exam",
              title: "Speed, wires, addressing - the trio per bus",
              body: "For every bus question give the trio: I2C = 2 wires, 100-400 kbps, addressed; SPI = 4 wires (CS per device), 10 MHz+, not addressed; UART = 2 wires, baud-agreed, point-to-point. Then one wiring example with addresses (0x76, 0x44) and a baud rate (9600) converts theory into applied marks.",
            },
            diagram: {
              kind: "fork",
              title: "Picking the right bus for a device",
              caption:
                "Three buses plus GPIO cover almost every peripheral an IoT node meets.",
              start: "A new sensor or module must be wired - which interface?",
              branches: [
                { label: "Several slow digital sensors", outcome: "I2C - two wires, addresses 0x44/0x76..., 100-400 kbps", good: true },
                { label: "Fast bulk data (SD, display)", outcome: "SPI - 10 MHz+, one CS per device, full duplex", good: true },
                { label: "Modem or GPS at distance", outcome: "UART - 9600-115200 baud, start/stop framing, point-to-point", good: true },
              ],
            },
            bullets: [
              "GPIO: digital in/out, pull-ups, interrupts - buttons, LEDs, relays.",
              "ADC: 10-bit Uno = 1024 counts at 5 V = 4.88 mV/count; quantisation and oversampling.",
              "I2C: SDA+SCL, 7-bit addresses, 100/400 kbps, 4.7 kohm pull-ups, many devices two wires.",
              "SPI: MOSI/MISO/SCLK/CS, 10 MHz+, full duplex, one CS per slave.",
              "UART: TX/RX at agreed baud (9600/115200), start/stop bits, no addressing - modems and GPS.",
              "Worked node: BMP280 (0x76) + SHT31 (0x44) on I2C, SD card on SPI at 10 MHz, SIM800 at 9600 baud, LDR on A0.",
              "Timing proof: I2C reads < 2 ms, SPI write ~1 ms - 1 s loop under 1% busy.",
              "Limits: I2C speed/address clashes; SPI pin cost; UART baud fragility.",
            ],
            codeExample: {
              language: "arduino",
              caption: "Reading two I2C sensors (BMP280 at 0x76, SHT31 at 0x44) on one bus.",
              code: `#include <Wire.h>

void setup() {
  Wire.begin();               // SDA=A4, SCL=A5 on Uno
  Serial.begin(9600);
}

void loop() {
  Wire.beginTransmission(0x76);   // BMP280
  Wire.write(0xF7);               // data register
  Wire.endTransmission(false);
  Wire.requestFrom(0x76, 6);      // read 6 bytes
  while (Wire.available() < 6) { }
  // ... unpack pressure bytes ...

  Wire.beginTransmission(0x44);   // SHT31
  Wire.write(0x2C); Wire.write(0x06);  // measure cmd
  Wire.endTransmission();
  delay(15);
  Serial.println("sensors read");
  delay(1000);
}`,
            },
            examQuestions: [
              {
                q: "Explain I2C, SPI and UART with speed, wiring and addressing differences. Wire a weather node using two I2C sensors, an SPI SD card and a UART modem, and prove the bus load fits a 1 s sampling loop.",
                marks: 7,
                outline: [
                  "I2C: 2 wires, 7-bit addressing, 100-400 kbps, pull-ups.",
                  "SPI: 4 wires + CS per slave, 10 MHz+, full duplex.",
                  "UART: point-to-point, baud framing, no addressing.",
                  "Assign devices: BMP280 0x76 + SHT31 0x44 on I2C; SD on SPI; SIM800 at 9600 baud.",
                  "LDR on 10-bit ADC, 4.88 mV/count.",
                  "Timing: I2C < 2 ms, SPI ~1 ms -> under 1% of the 1 s loop.",
                  "State each bus's main limitation.",
                ],
              },
              {
                q: "How many devices can share one I2C bus and how are they told apart?",
                marks: 2,
                outline: ["Many (up to 112 at 7-bit addressing); distinguished by unique 7-bit addresses."],
              },
              {
                q: "Why does SPI need a chip-select line per device while I2C does not?",
                marks: 3,
                outline: [
                  "SPI has no in-band addressing - the active CS line selects the device.",
                  "I2C addresses slaves inside the protocol, so one shared pair suffices.",
                ],
              },
            ],
          },
          {
            number: "3.8",
            title: "Prototyping workflow and development tools",
            body: [
              "A working IoT node goes through a repeatable pipeline: requirements -> schematic -> breadboard prototype -> firmware -> test -> enclosure -> deployment. Requirements are written as numbers (sample every 10 s, 60-byte payload, 6-month battery, 30 m range) because vague requirements produce vague designs. Schematics are drawn in tools like Fritzing (beginner-friendly breadboard views) or KiCad (production schematics); the breadboard prototype then validates wiring without soldering, using jumper wires and breakout boards.",
              "The mechanism of firmware development follows the toolchain: write in the Arduino IDE, PlatformIO or MicroPython/Thonny (for the Pi/ESP32 in Python), compile to a binary, flash over USB (or OTA - over the air - once deployed), and debug over the serial console with print statements or a logic analyser for bus timing. Simulators extend the workflow when hardware is scarce: Wokwi and Tinkercad Circuits emulate Arduino/ESP32 boards with virtual sensors, letting students validate logic before touching real parts; the Pi can be developed entirely on a desktop with GPIO mocked by libraries.",
              "A worked example walks one iteration with numbers: a classroom air-quality node. Requirements: sample CO2 (MH-Z19, UART 9600 baud, 9-byte frames) and PM2.5 (PMS5003, UART) every 60 s, publish a 90-byte MQTT message over Wi-Fi, run 2 weeks on a 10,000 mAh power bank. Breadboard build takes an afternoon: ESP32 on the rail, both sensors on a second hardware UART via a multiplexer or using SoftwareSerial at 9600. Firmware iterates three times over two days: v1 reads sensors but blocks (fix with millis() scheduling); v2 drops Wi-Fi under load (fix: reconnect logic with exponential backoff); v3 measures real draw - 45 mA active, sleeping to 12 mA average - which halved the 2-week target to about 10 days, forcing a deeper-sleep revision before enclosure.",
              "Advantages of a disciplined workflow: every hardware bug is caught at the cheapest stage (breadboard before soldering, simulation before parts arrive), power problems surface in v3 measurements rather than in the field, and OTA update support means later fixes do not require physical access. Limitations: breadboards are unreliable above a few MHz or high currents (use soldered perfboard for 2 A-class loads), simulation never reproduces real RF or power behaviour, and skipping the measured-power step is the most common reason prototypes die early in the field.",
            ],
            keyTerms: [
              { term: "Breadboard", definition: "Solderless prototyping board with connected rail strips for quick circuit iteration." },
              { term: "Fritzing / KiCad", definition: "Schematic and PCB design tools - Fritzing for beginner breadboard views, KiCad for production." },
              { term: "OTA update", definition: "Over-the-air firmware update delivered over the network after deployment." },
              { term: "Wokwi / Tinkercad", definition: "Browser simulators emulating Arduino/ESP32 circuits with virtual sensors." },
              { term: "Serial console", definition: "UART debug channel used to observe firmware behaviour during development." },
            ],
            callout: {
              type: "warning",
              title: "Measure power, or the field will measure it for you",
              body: "The air-quality node targeted 2 weeks but measured 12 mA average - about 10 days. Power estimates on datasheets assume best-case sleeps. Always add a measured-current step (USB meter or multimeter) before enclosure, and quote your measured numbers in viva answers.",
            },
            diagram: {
              kind: "pipeline",
              title: "From idea to deployed node",
              caption:
                "Each stage catches a class of bug at its cheapest point - never skip the measurement step.",
              stages: [
                { label: "Requirements", note: "numbers: interval, payload, battery, range" },
                { label: "Schematic", note: "Fritzing/KiCad; buses and pins assigned" },
                { label: "Breadboard prototype", note: "validate wiring without soldering" },
                { label: "Firmware iterations", note: "flash, serial debug, fix blocking and reconnect logic" },
                { label: "Test and measure", note: "current draw, RF range, edge cases" },
                { label: "Enclose and deploy", note: "OTA updates planned, monitoring on" },
              ],
            },
            bullets: [
              "Pipeline: requirements -> schematic -> breadboard -> firmware -> test -> enclosure -> deployment.",
              "Write requirements as numbers: 60 s interval, 90-byte payload, 2-week battery.",
              "Tools: Arduino IDE, PlatformIO, MicroPython; Fritzing/KiCad for design.",
              "Simulators (Wokwi, Tinkercad) validate logic before parts arrive.",
              "Debug with serial prints; logic analyser for bus timing; USB meter for current.",
              "Worked iteration: MH-Z19 + PMS5003 on UART 9600, 90-byte MQTT every 60 s; measured 12 mA avg vs 45 mA active.",
              "Fixes found in the loop: non-blocking scheduling, reconnect with backoff, deeper sleep.",
              "OTA update support removes physical access after deployment.",
            ],
            table: {
              caption: "Development tools by stage.",
              headers: ["Stage", "Tool", "Purpose"],
              rows: [
                ["Schematic", "Fritzing, KiCad", "Circuit design and breadboard views"],
                ["Firmware", "Arduino IDE, PlatformIO, MicroPython", "Write, compile, flash"],
                ["Simulation", "Wokwi, Tinkercad Circuits", "Virtual hardware validation"],
                ["Debug", "Serial console, logic analyser", "Runtime and bus inspection"],
                ["Measurement", "USB power meter, multimeter", "Real current draw verification"],
              ],
            },
            examQuestions: [
              {
                q: "Describe the IoT prototyping workflow from requirements to deployment, naming tools at each stage. Illustrate with an air-quality node example including measured power numbers and the bugs found in each firmware iteration.",
                marks: 7,
                outline: [
                  "Pipeline stages in order with purpose of each.",
                  "Requirements as numbers (interval, payload, battery).",
                  "Tools: Fritzing/KiCad, Arduino IDE/PlatformIO, Wokwi simulation.",
                  "Build example: ESP32 + MH-Z19 + PMS5003 on UART 9600.",
                  "Iteration bugs: blocking code, Wi-Fi reconnect, power overshoot.",
                  "Measured numbers: 45 mA active, 12 mA average, 10 days vs 2-week target.",
                  "OTA updates and monitoring before enclosure.",
                ],
              },
              {
                q: "Name two simulators used to prototype IoT circuits without hardware.",
                marks: 2,
                outline: ["Wokwi and Tinkercad Circuits (either acceptable)."],
              },
              {
                q: "Why can a breadboard prototype fail in the field even when it works on the bench?",
                marks: 3,
                outline: [
                  "Contact resistance and noise at high frequencies/currents.",
                  "No enclosure: RF, temperature and vibration effects untested.",
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
      title: "Data Processing and Platforms",
      summary:
        "What happens to the data: the IoT data lifecycle, cloud computing and its service models, the platform landscape from AWS IoT Core to ThingSpeak, the edge-fog-cloud hierarchy, stream processing with windowing, machine learning on IoT data, wireless sensor networks, and storage and visualisation patterns.",
      chapter: {
        number: "04",
        title: "From Raw Telemetry to Decisions",
        intro:
          "Unit IV follows the data. It defines IoT data and its lifecycle, positions cloud computing and the major IoT platforms, draws the edge-fog-cloud hierarchy with latency numbers, explains stream processing and windowing, places machine learning between cloud training and edge inference, characterises wireless sensor networks, and closes with storage and visualisation.",
        inOneBreath:
          "IoT data = high volume, velocity, variety, veracity, value; lifecycle = generate -> collect -> store -> process -> visualise -> act; cloud = IaaS/PaaS/SaaS on demand; platforms = device management + ingestion + analytics (AWS IoT Core, Azure IoT Hub, ThingSpeak); edge = ms latency at the device, fog = gateway aggregation, cloud = fleet-scale analytics; streams use windows (tumbling/sliding) to convert infinite data to finite aggregates; ML trains in the cloud, infers at the edge or on-device (TinyML); WSN = clustered nodes routing to a sink with energy-aware protocols; storage = time-series databases, visualisation = dashboards.",
        sections: [
          {
            number: "4.1",
            title: "IoT data: characteristics and lifecycle",
            body: [
              "IoT data is machine-generated telemetry, and it differs from transactional (business database) data in every dimension of the big-data 5V model. Volume: fleets generate continuous streams (10,000 meters x 96 readings/day = nearly a million records/day). Velocity: data arrives continuously, often within seconds of the event. Variety: readings, device states, alarms, GPS traces, images - structured JSON beside unstructured video. Veracity: sensor noise, dropouts and drift mean data quality is uncertain and must be validated. Value: most readings are routine; the value concentrates in aggregates, anomalies and trends - which is why processing strategy matters more than storage size.",
              "The lifecycle mechanism runs through six stages. Devices generate data at a sensing interval; a gateway or protocol (MQTT, CoAP, HTTP) collects and forwards it; a store holds it (raw for audit, aggregates for analytics); processing cleans, validates, aggregates and detects; visualisation presents dashboards and reports; and action closes the loop - an alert, an actuator command or an automated decision. Design decisions attach to every stage: sampling rate (Nyquist - sample at twice the highest frequency of interest), payload format (JSON for readability, CBOR/binary for size), retention (raw 7 days, aggregates forever) and where each stage runs (device, gateway, cloud).",
              "A worked example with numbers: a smart factory line with 50 vibration sensors at 1 kHz sampling, 2-byte samples. Raw rate per sensor: 16 kbps - about 2 MB/min each, 100 MB/min for the line. No platform wants 144 GB/day of raw vibration, so the design compresses at the edge: compute RMS and peak-to-peak in 1-second windows (2 values per second per sensor instead of 1000), cutting data 500x to about 0.3 MB/min total, while full-resolution buffers are retained locally only when an anomaly exceeds a threshold - sending the 60-second raw window (120 KB) for expert analysis. This is the standard 'data reduction at the edge' pattern.",
              "Advantages of treating the lifecycle explicitly: each stage can be scaled and replaced independently, and costs stay proportional to insight rather than to raw bytes. Limitations: every transformation loses information (the RMS aggregation cannot recover the waveform it discarded), so retention policy is a one-way design decision; and lifecycle stages add latency - a dashboard fed by cloud aggregation trails real-time by minutes, which is why the next sections place processing at edge, fog or cloud deliberately.",
            ],
            keyTerms: [
              { term: "5V model", definition: "Volume, Velocity, Variety, Veracity, Value - the characteristics distinguishing IoT/big data from transactional data." },
              { term: "Sampling rate", definition: "Frequency of measurement; must exceed twice the highest signal frequency of interest (Nyquist)." },
              { term: "Data reduction", definition: "Aggregating or filtering at the edge so only informative data travels to the cloud." },
              { term: "Retention policy", definition: "How long raw vs aggregated data is kept - irreversible once defined." },
            ],
            callout: {
              type: "tip",
              title: "Quantify the reduction",
              body: "Any lifecycle answer improves dramatically with one reduction calculation: 50 sensors x 1 kHz x 2 bytes = 100 MB/min raw -> 500x smaller with 1-second RMS windows. Numbers turn a descriptive answer into an engineering one.",
            },
            diagram: {
              kind: "cycle",
              title: "The six-stage IoT data lifecycle",
              caption:
                "The loop closes when a decision changes the physical world that the sensors are watching.",
              steps: [
                { label: "Generate", note: "sensors sample at a fixed interval (1 kHz vibration)" },
                { label: "Collect", note: "MQTT/CoAP/HTTP into gateways and platforms" },
                { label: "Store", note: "raw for audit, aggregates for analytics" },
                { label: "Process", note: "validate, aggregate, detect anomalies" },
                { label: "Visualise", note: "dashboards, reports, alerts" },
                { label: "Act", note: "commands, actuation, closed-loop decisions" },
              ],
            },
            bullets: [
              "IoT data is machine-generated, continuous, and heterogeneous - not transactional.",
              "5Vs: Volume, Velocity, Variety, Veracity, Value.",
              "Lifecycle: generate -> collect -> store -> process -> visualise -> act.",
              "Sampling must respect Nyquist: twice the highest frequency of interest.",
              "Payload formats: JSON readable, CBOR/binary compact.",
              "Worked factory example: 50 sensors x 1 kHz x 2 B = 100 MB/min raw -> 500x cut via 1-s RMS/peak windows; 60-s raw windows sent on anomaly only.",
              "Retention is one-way: aggregated data cannot be un-aggregated.",
              "Stage placement (edge/fog/cloud) sets the latency profile.",
            ],
            table: {
              caption: "Lifecycle stages and their design decisions.",
              headers: ["Stage", "Key decision", "Example"],
              rows: [
                ["Generate", "Sampling rate, sensor accuracy", "1 kHz vibration, 10 s temperature"],
                ["Collect", "Protocol, payload format", "MQTT + CBOR 12-byte frames"],
                ["Store", "Raw retention vs aggregates", "raw 7 days, aggregates forever"],
                ["Process", "Where and what to compute", "edge RMS, cloud anomaly detection"],
                ["Visualise", "Refresh rate, audience", "operator dashboard 1 Hz"],
                ["Act", "Manual alert vs automated loop", "auto-stop on threshold breach"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the characteristics of IoT data using the 5V model and describe the six-stage IoT data lifecycle. Show with numbers how edge aggregation reduces a 50-sensor vibration stream.",
                marks: 7,
                outline: [
                  "Define IoT data; contrast with transactional data.",
                  "5Vs each with an IoT example.",
                  "Draw/describe the lifecycle loop and where each stage runs.",
                  "Nyquist and payload format choices.",
                  "Reduction maths: 50 x 1 kHz x 2 B = 100 MB/min -> RMS windows, 500x.",
                  "Anomaly-triggered raw retention (60-s window, 120 KB).",
                  "Note irreversibility of aggregation and latency implications.",
                ],
              },
              {
                q: "State the 5Vs of big data.",
                marks: 2,
                outline: ["Volume, Velocity, Variety, Veracity, Value."],
              },
              {
                q: "Why is retention policy called an irreversible decision?",
                marks: 3,
                outline: [
                  "Aggregated/summarised data discards raw samples.",
                  "Discarded information cannot be reconstructed later.",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "Cloud computing for IoT",
            body: [
              "Cloud computing delivers on-demand computing resources - servers, storage, databases, analytics - over the internet with pay-as-you-go pricing and elastic scaling. Its defining properties are on-demand self-service, broad network access, resource pooling across tenants, rapid elasticity and measured service. For IoT the cloud supplies what devices cannot have locally: effectively infinite storage for telemetry history, burst compute for analytics across entire fleets, global reachability so any user can reach any device, and managed services (device registries, certificate authorities, rule engines) that would take months to build.",
              "The mechanism is organised as three service models. IaaS (Infrastructure as a Service) rents raw virtual machines and block storage - you install everything (e.g. a VM running Mosquitto). PaaS (Platform as a Service) provides managed runtimes and services - you deploy code while scaling, patching and monitoring are handled (e.g. a managed MQTT broker with auto-scaling). SaaS (Software as a Service) delivers finished applications - the dashboard you simply log into. Deployment models matter too: public cloud (shared provider infrastructure), private cloud (dedicated to one organisation - common where data sovereignty applies), hybrid (public burst capacity plus private control) and community cloud.",
              "A worked example with numbers: a smart-meter company with 100,000 meters. On-premise option: 20 servers at 800 dollars each plus a data-centre room, sized for the 25th-of-the-month billing peak and idle the rest of the month. Cloud option: telemetry ingestion costs roughly 0.02 dollar per 100,000 messages (100,000 meters x 96 readings/day = 9.6M messages/day, about 2 dollars/day), storage for 5-minute aggregates about 50 GB/year, and analysis jobs spin up 200 cores for one hour on billing day (about 40 dollars) then vanish. The pay-per-use bill tracks fleet growth automatically - elasticity replaces capacity planning, and the saved capital expenditure is redirected to firmware development.",
              "Advantages: elasticity (scale with fleet growth without hardware purchases), managed reliability (multi-zone redundancy far beyond what a single team maintains), global access, and a rich managed-service catalogue. Limitations: recurring cost grows with data volume (bill discipline becomes an engineering task), network dependency - a cloud outage or lost link blinds the system unless edge logic covers it (see 4.4), data-privacy constraints on where data may reside, and vendor lock-in from proprietary service APIs. The exam phrase: 'the cloud is where IoT analytics lives, but not where IoT latency lives'.",
            ],
            keyTerms: [
              { term: "IaaS / PaaS / SaaS", definition: "Cloud service models: rented infrastructure, managed platform, finished application." },
              { term: "Elasticity", definition: "Resources scale up and down automatically with demand - the property that replaces capacity planning." },
              { term: "Pay-as-you-go", definition: "Pricing model charging per unit of consumed compute/storage/time." },
              { term: "Hybrid cloud", definition: "Combination of private (control-sensitive) and public (burst capacity) cloud deployments." },
            ],
            callout: {
              type: "exam",
              title: "Service models need IoT examples",
              body: "For IaaS/PaaS/SaaS do not give generic definitions alone - attach IoT examples: IaaS = a VM running your Mosquitto broker; PaaS = managed AWS IoT Core / Azure IoT Hub; SaaS = a ready device-management dashboard. Example-anchored definitions score full marks.",
            },
            diagram: {
              kind: "pyramid",
              title: "Cloud service models for IoT",
              caption:
                "As you climb the pyramid, the provider manages more and you write less.",
              tiers: [
                { label: "SaaS", note: "finished dashboards and fleet apps - just log in" },
                { label: "PaaS", note: "managed brokers, registries, rule engines - deploy your code" },
                { label: "IaaS", note: "VMs and storage - you install and operate everything" },
                { label: "Physical infrastructure", note: "provider data centres, multi-zone redundancy" },
              ],
            },
            bullets: [
              "Cloud = on-demand, elastic, pay-as-you-go computing over the internet.",
              "Properties: self-service, network access, pooling, elasticity, measured service.",
              "IaaS: raw VMs (run your own broker); PaaS: managed services (AWS IoT Core, Azure IoT Hub); SaaS: finished apps.",
              "Deployment models: public, private, hybrid, community.",
              "IoT roles: telemetry storage, fleet-scale analytics, global device reachability, managed registries.",
              "Worked example: 100,000 meters -> 9.6M messages/day (~2 USD/day), 50 GB/year aggregates, 200 burst cores on billing day.",
              "Elasticity replaces capacity planning (20 idle servers vs burst compute).",
              "Limits: recurring cost, network dependency, data residency, vendor lock-in.",
            ],
            table: {
              caption: "Service models applied to IoT.",
              headers: ["Model", "You manage", "Provider manages", "IoT example"],
              rows: [
                ["IaaS", "OS, services, scaling", "Hardware, virtualisation", "VM hosting Mosquitto"],
                ["PaaS", "Application code", "Runtime, scaling, patching", "AWS IoT Core, Azure IoT Hub"],
                ["SaaS", "Nothing (configuration only)", "Everything", "Fleet dashboard, billing app"],
              ],
            },
            examQuestions: [
              {
                q: "Define cloud computing and its essential characteristics. Explain IaaS, PaaS and SaaS with IoT examples, and evaluate cloud adoption for a 100,000-meter smart meter fleet with cost numbers.",
                marks: 7,
                outline: [
                  "Definition and five essential characteristics.",
                  "IaaS/PaaS/SaaS ladder with IoT examples.",
                  "Deployment models: public/private/hybrid.",
                  "Workload maths: 9.6M messages/day, aggregates 50 GB/year.",
                  "On-premise vs cloud cost contrast (idle servers vs burst cores).",
                  "Elasticity argument on billing-day spikes.",
                  "State limitations: cost growth, network dependency, lock-in.",
                ],
              },
              {
                q: "Which cloud service model requires the customer to manage the operating system?",
                marks: 2,
                outline: ["IaaS - provider manages only hardware and virtualisation."],
              },
              {
                q: "Give two reasons an IoT deployment still needs edge processing despite cloud availability.",
                marks: 3,
                outline: [
                  "Network outage must not blind local control.",
                  "Latency-sensitive loops cannot tolerate cloud round-trips.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "IoT platforms: AWS IoT, Azure IoT and rapid-prototyping tools",
            body: [
              "An IoT platform is the managed middle layer between devices and applications: it ingests telemetry, manages device identity and firmware, applies rules, stores time series and exposes APIs and dashboards. Core capabilities every platform offers: device registry and provisioning (secure per-device identities, usually X.509 certificates), secure bidirectional messaging (MQTT/HTTP endpoints), a rules engine routing messages to storage or analytics, digital twins/shadows (a cloud copy of each device's latest state), and OTA firmware update management.",
              "The mechanism differs by platform tier. Cloud-scale platforms - AWS IoT Core, Azure IoT Hub, Google Cloud IoT-style stacks - are built for millions of devices: devices connect to a regional endpoint over MQTT/TLS with per-device certificates, messages hit a rules engine that fans out to databases, streams and ML pipelines, and device shadows serve apps without waking the physical device. Rapid-prototyping platforms - ThingSpeak, Blynk, Arduino Cloud - target students and small deployments: an ESP32 posts readings with a simple API key, channels auto-plot, and simple analytics (MATLAB in ThingSpeak) run on schedule. The trade-off is capability versus setup cost.",
              "A worked example with numbers: the same 200-node parking project on both tiers. On ThingSpeak: each node HTTP-POSTs a 60-byte JSON reading every minute to a channel (200 x 1440 = 288,000 points/day, within the free-tier cap of about 8,200 messages/day only if throttled to about 5 nodes - so the real design would use a paid tier or fewer nodes); charts come free. On AWS IoT Core: nodes connect via MQTT/TLS with X.509 identities, publish to topics parking/zone3/bay42; a rule routes readings into a time-series store (about 3.4 GB/month) while a second rule triggers Lambda on occupancy anomalies; cost scales with usage (roughly 1 dollar per million MQTT messages, so about 10-15 dollars/month) plus dashboards you build yourself.",
              "Advantages of platforms: security, scaling and plumbing are solved problems - months of engineering for registry, TLS, OTA and rules arrive on day one. Limitations: recurring per-message costs grow with fleet size, proprietary APIs create lock-in (an AWS shadow is not portable), free/student tiers impose message caps that break at real scale, and debugging opaque managed services is harder than debugging your own Mosquitto container. A strong exam answer names at least three core capabilities and prices one concrete deployment.",
            ],
            keyTerms: [
              { term: "Device registry", definition: "Platform service holding every device's identity, certificates and metadata." },
              { term: "Rules engine", definition: "Configurable router that sends incoming telemetry to storage, analytics or actions." },
              { term: "Device shadow / twin", definition: "Cloud-maintained copy of a device's latest state, readable and updatable even while the device sleeps." },
              { term: "OTA update", definition: "Platform-managed over-the-air firmware rollout with staged deployment and rollback." },
              { term: "ThingSpeak channel", definition: "ThingSpeak's per-device data stream with automatic charting and MATLAB analytics." },
            ],
            callout: {
              type: "tip",
              title: "Name capabilities, then price it",
              body: "Platform questions follow a pattern: define the platform, list 4-5 core capabilities (registry, secure messaging, rules engine, shadows, OTA), then work one deployment on two tiers with message counts and costs. The pricing calculation is what separates full marks from a list.",
            },
            diagram: {
              kind: "compare",
              title: "Cloud-scale platforms versus rapid-prototyping platforms",
              caption:
                "Same core idea, radically different scale, security and setup cost.",
              left: {
                heading: "Cloud-scale (AWS IoT Core, Azure IoT Hub)",
                items: [
                  "Millions of devices, X.509 per-device identity",
                  "MQTT/TLS regional endpoints",
                  "Rules engines, shadows/twins, OTA at scale",
                  "Usage-priced (~1 USD per million messages)",
                  "Steeper setup, vendor lock-in",
                ],
              },
              right: {
                heading: "Rapid prototyping (ThingSpeak, Blynk, Arduino Cloud)",
                items: [
                  "Minutes to first chart via API key",
                  "Simple HTTP/MQTT ingestion",
                  "Free/student tiers with message caps (~8,200/day ThingSpeak)",
                  "Auto-charting, MATLAB analytics",
                  "Weak security model, limited scale",
                ],
              },
            },
            bullets: [
              "Platform = managed layer for ingestion, identity, rules, storage and dashboards.",
              "Core capabilities: registry/provisioning, secure MQTT messaging, rules engine, device shadows, OTA.",
              "AWS IoT Core: MQTT/TLS endpoints, X.509 identities, Lambda-triggering rules.",
              "Azure IoT Hub: device twins, direct methods, per-device keys.",
              "ThingSpeak/Blynk/Arduino Cloud: API-key simplicity, auto charts, message caps.",
              "Worked pricing: 200 parking nodes -> 288,000 readings/day; ThingSpeak free tier caps at ~8,200/day; AWS ~10-15 USD/month.",
              "Storage estimate: ~3.4 GB/month of readings on the cloud tier.",
              "Trade-off: capability and security vs setup cost and per-message fees.",
            ],
            table: {
              caption: "Platform capabilities compared.",
              headers: ["Capability", "AWS IoT Core", "Azure IoT Hub", "ThingSpeak"],
              rows: [
                ["Identity", "X.509 certificates", "X.509 / symmetric keys", "API key (weak)"],
                ["Messaging", "MQTT/HTTP, rules engine", "MQTT/AMQP, routes", "HTTP REST channel"],
                ["State", "Device shadows", "Device twins", "Last channel entry"],
                ["OTA", "Jobs with staged rollout", "Device Update service", "Not supported"],
                ["Scale class", "Millions of devices", "Millions", "Hundreds (paid tier)"],
              ],
            },
            examQuestions: [
              {
                q: "What is an IoT platform? Explain its core capabilities and compare AWS IoT Core / Azure IoT Hub with rapid-prototyping platforms like ThingSpeak, pricing a 200-node deployment on both tiers.",
                marks: 7,
                outline: [
                  "Define platform as the managed device-to-app middle layer.",
                  "Capabilities: registry, secure messaging, rules engine, shadows, OTA.",
                  "Cloud-scale tier: X.509 MQTT/TLS, rules to storage and Lambda.",
                  "Prototyping tier: API keys, auto charts, message caps.",
                  "Numbers: 288,000 readings/day; ThingSpeak cap ~8,200/day; AWS ~10-15 USD/month; 3.4 GB/month storage.",
                  "Trade-off summary: capability/security vs setup and fees.",
                  "Mention lock-in and debugging difficulty.",
                ],
              },
              {
                q: "What is a device shadow (digital twin)?",
                marks: 2,
                outline: ["Cloud copy of a device's latest state, queryable/updatable even when the device is offline."],
              },
              {
                q: "Which platform capability automates firmware rollouts?",
                marks: 3,
                outline: [
                  "OTA update management (AWS IoT Jobs / Azure Device Update).",
                  "Includes staged rollout and rollback for failed updates.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Edge, fog and cloud computing",
            body: [
              "Edge computing executes processing on or next to the device itself - a microcontroller thresholding a vibration signal, a smart camera running object detection on its own SoC. Fog computing (Cisco's term) is the layer between edge devices and the cloud: gateways and local servers that aggregate, filter and decide for a site or building. Cloud computing remains the fleet-scale brain: cross-site analytics, long-term storage, model training. The three form a hierarchy by distance from the data source, with latency, compute power and data volume scaling as you climb.",
              "The mechanism is task placement: every processing task is assigned to the highest layer that satisfies its latency and bandwidth needs. Latency-critical loops (motor shutdown in 10 ms) run at the edge; site-level aggregation and local storage (a building's HVAC logic) run in fog; fleet analytics, model training and billing run in cloud. Bandwidth flows down the same way: only aggregates and anomalies travel upward (the data-reduction pattern of 4.1), while commands flow down. Failover is part of the design: if the cloud link dies, fog logic keeps the site safe with cached models and rules.",
              "A worked example with numbers: a smart factory motor-monitoring chain. Edge: each motor node computes FFT + RMS in 1-second windows locally, reacting to vibration thresholds in under 20 ms - impossible via cloud (round-trip latency 80-200 ms plus jitter). Fog: the site gateway (a Pi-class or industrial PC) aggregates 50 nodes' 2-byte-per-second summaries into alarms, holding 7 days of aggregates locally (about 12 MB) and pushing 1-minute summaries to the cloud (about 100 KB/min for the site). Cloud: trains the anomaly-detection model nightly on 30 days of data from 40 factories (about 35 GB), then pushes the updated model (4 MB) down to every gateway. Each layer does what its latency and capacity permit.",
              "Advantages of the hierarchy: latency where it matters, bandwidth costs cut 100-1000x by upward filtering, resilience when links fail, and privacy (raw sensitive data can stay on site). Limitations: edge devices are resource-constrained (models must be compressed - quantised TinyML), fog hardware adds capital cost and a new management surface, and distributing logic across three layers complicates debugging and version control. Exams reward drawing the three layers with concrete task assignments and latencies on each arrow.",
            ],
            keyTerms: [
              { term: "Edge computing", definition: "Processing on or next to the device itself - millisecond latency, minimal compute." },
              { term: "Fog computing", definition: "Gateway/local-server layer between edge devices and the cloud doing site-level aggregation and control." },
              { term: "Task placement", definition: "Assigning each processing task to the lowest layer meeting its latency/bandwidth requirements." },
              { term: "Model push-down", definition: "Training models in the cloud and deploying compressed versions to edge/fog for inference." },
            ],
            callout: {
              type: "warning",
              title: "Fog is not just 'smaller cloud'",
              body: "The common slip is treating fog as cloud-lite. Fog's distinguishing duties are site-level aggregation, local autonomy during cloud outages, and downward command distribution. If your fog description does not include failover autonomy, you have described a relay, not fog.",
            },
            diagram: {
              kind: "layers",
              title: "The edge-fog-cloud hierarchy",
              caption:
                "Latency grows and compute scales as you climb; data is filtered on the way up, models come back down.",
              layers: [
                { label: "Cloud", note: "fleet analytics, model training, storage - seconds to minutes" },
                { label: "Fog (site gateways)", note: "aggregation, alarms, local autonomy - 10-100 ms" },
                { label: "Edge (device/SoC)", note: "thresholds, FFT, TinyML inference - under 20 ms" },
                { label: "Sensors/actuators", note: "the physical boundary where data is born" },
              ],
            },
            bullets: [
              "Edge = on-device processing (ms latency, tiny compute); fog = site gateways; cloud = fleet brain.",
              "Placement rule: lowest layer whose latency and capacity satisfy the task.",
              "Latency ladder: edge < 20 ms, fog 10-100 ms, cloud 80-200 ms round trip.",
              "Bandwidth: only aggregates/anomalies travel up; commands and models travel down.",
              "Worked factory: edge FFT/RMS under 20 ms; fog holds 7-day aggregates (~12 MB) and pushes 100 KB/min; cloud trains nightly on 35 GB across 40 factories.",
              "Failover: fog keeps the site safe when the cloud link dies.",
              "Privacy: raw sensitive data can remain on site.",
              "Limits: constrained edge models (quantised TinyML), fog capex, three-layer debugging complexity.",
            ],
            table: {
              caption: "Edge vs fog vs cloud at a glance.",
              headers: ["Property", "Edge", "Fog", "Cloud"],
              rows: [
                ["Distance from device", "On/next to device", "Site gateway", "Regional data centre"],
                ["Latency", "< 20 ms", "10-100 ms", "80-200 ms +"],
                ["Compute", "KB-MB memory", "GB-class gateway", "Effectively unlimited"],
                ["Typical tasks", "Thresholds, FFT, inference", "Aggregation, alarms, autonomy", "Training, billing, fleet analytics"],
                ["Failure posture", "Keeps sensing", "Keeps site safe offline", "Absent during outage"],
              ],
            },
            examQuestions: [
              {
                q: "Explain edge, fog and cloud computing in IoT. Propose a task-placement strategy for a motor-monitoring factory with latency, bandwidth and failover numbers at each layer.",
                marks: 7,
                outline: [
                  "Define the three layers and their distance/latency trade.",
                  "Placement rule: lowest layer meeting latency and capacity.",
                  "Edge: FFT/RMS under 20 ms, threshold reaction.",
                  "Fog: 50-node aggregation, 7-day local store (12 MB), offline autonomy.",
                  "Cloud: nightly training on 35 GB from 40 factories; model push (4 MB).",
                  "Bandwidth: 100 KB/min upward summaries; filtered on ascent.",
                  "State limitations of each layer.",
                ],
              },
              {
                q: "Which layer guarantees sub-20 ms reaction to a vibration threshold?",
                marks: 2,
                outline: ["Edge - processing on/next to the device; cloud round trips cost 80-200 ms."],
              },
              {
                q: "Define fog computing and name two of its distinguishing duties.",
                marks: 3,
                outline: [
                  "Gateway layer between edge devices and cloud.",
                  "Site aggregation and local autonomy during cloud outages.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Stream processing and windowing",
            body: [
              "Stream processing analyses data while it is in motion - computing on each arriving event rather than storing first and querying later. It exists because IoT data is unbounded: a 1,000-sensor fleet never stops producing, so 'load the table and query' is impossible. A stream pipeline has stages: ingestion (a broker or log such as Kafka/Mosquitto absorbing bursts), parsing and validation, stateful computation (aggregations, joins with device metadata, pattern detection), and sinks (databases, dashboards, alerts). Frameworks: Apache Kafka for transport, Apache Spark Structured Streaming and Flink for computation, or platform-native rules engines for lighter needs.",
              "The core mechanism is windowing: since streams are infinite, computations run over finite windows. Tumbling windows divide time into fixed non-overlapping chunks (every 1 minute, a fresh average). Sliding windows move continuously with a stride (a 10-minute window recomputed every 1 minute - overlapping). Session windows group events separated by inactivity gaps (a machine's operating burst). Watermarks bound how late out-of-order events may arrive before a window closes. State is the other key concept: the engine remembers partial aggregates per device, and must checkpoint that state to survive failures.",
              "A worked example with numbers: the parking deployment's occupancy stream. Kafka receives 200 nodes x 1 message/30 s = about 7 events/s (a trickle, by design); a Flink job computes a tumbling 1-minute window per zone producing average occupancy (24 outputs/hour per zone), and a sliding 30-minute window with 5-minute stride feeds the demand-pricing model (12 outputs/hour, each covering 180 events). A stall-detection pattern watches per-bay sessions: no state change for 6 hours flags a stuck car. End-to-end latency from sensor to dashboard: about 2-4 seconds - far below batch processing, which would compute only when a scheduled job runs.",
              "Advantages: sub-second to seconds of insight latency, natural handling of out-of-order data via watermarks, continuous output instead of periodic batch jobs, and fault tolerance through checkpointed state. Limitations: stateful engines are operationally heavy (Kafka + Flink clusters need real administration), exactly-once semantics costs throughput, window and watermark misconfiguration silently drops or duplicates events, and for small fleets (a few events per second) a simple rules engine or even a database trigger is cheaper - stream frameworks earn their complexity only above roughly tens of events per second.",
            ],
            keyTerms: [
              { term: "Stream processing", definition: "Computing on events as they arrive, without storing first - required for unbounded IoT data." },
              { term: "Tumbling window", definition: "Fixed, non-overlapping time chunks; each event belongs to exactly one window." },
              { term: "Sliding window", definition: "Window that advances by a stride shorter than its length, so windows overlap." },
              { term: "Watermark", definition: "Bound on how late an event may arrive and still be counted in its window." },
              { term: "Checkpointed state", definition: "Periodically saved per-device aggregates allowing recovery without losing computations." },
            ],
            callout: {
              type: "exam",
              title: "Window types are the definition marks",
              body: "Any stream-processing question: define streaming vs batch, then name tumbling, sliding and session windows with a one-line example each, and mention watermarks for late data. The three window names with examples are worth 3-4 of the 7 marks on their own.",
            },
            diagram: {
              kind: "pipeline",
              title: "A stream-processing pipeline",
              caption:
                "Events flow through without pause; windowing converts the infinite stream into finite aggregates.",
              stages: [
                { label: "Ingestion", note: "Kafka/Mosquitto absorbs bursts (~7 events/s)" },
                { label: "Parse and validate", note: "schema check, unit normalisation" },
                { label: "Windowed computation", note: "tumbling 1-min averages; sliding 30-min/5-min stride" },
                { label: "Pattern detection", note: "session gap of 6 h flags a stuck bay" },
                { label: "Sinks", note: "dashboard (2-4 s latency), alerts, time-series store" },
              ],
            },
            bullets: [
              "Streaming = compute on events in motion; batch = store-then-query; IoT streams are unbounded.",
              "Pipeline: ingestion -> parse -> stateful windowed compute -> sinks.",
              "Tumbling window: fixed non-overlapping chunks (1-minute zone averages).",
              "Sliding window: overlapping with stride (30-minute window, 5-minute stride).",
              "Session window: groups events by activity, split on inactivity gaps.",
              "Watermarks bound late events; state checkpoints give fault tolerance.",
              "Worked example: 200 nodes -> ~7 events/s; 1-min tumbling per zone; 30-min sliding for pricing; dashboard latency 2-4 s.",
              "Cost warning: frameworks pay off above ~tens of events/s; below that, rules engines suffice.",
            ],
            table: {
              caption: "Window types.",
              headers: ["Window", "Definition", "Example"],
              rows: [
                ["Tumbling", "Fixed non-overlapping chunks", "Average per 1-minute block"],
                ["Sliding", "Overlapping, advanced by stride", "30-minute view every 5 minutes"],
                ["Session", "Grouped by activity gaps", "Machine-on burst, 6-hour timeout"],
                ["Global", "All events since start (rare)", "Lifetime counters"],
              ],
            },
            examQuestions: [
              {
                q: "What is stream processing and why does IoT need it? Explain tumbling, sliding and session windows plus watermarks, and design the processing for a 200-node occupancy stream with rates and latencies.",
                marks: 7,
                outline: [
                  "Streaming vs batch; unbounded data argument.",
                  "Pipeline stages: ingest, parse, windowed compute, sink.",
                  "Tumbling: non-overlapping 1-minute zone averages.",
                  "Sliding: 30-minute window with 5-minute stride for pricing.",
                  "Session: inactivity-gap stall detection (6 h).",
                  "Watermarks for out-of-order events; checkpointed state.",
                  "Numbers: ~7 events/s; dashboard latency 2-4 s.",
                ],
              },
              {
                q: "Differentiate tumbling and sliding windows.",
                marks: 2,
                outline: ["Tumbling: fixed non-overlapping chunks; sliding: overlapping windows advanced by a stride."],
              },
              {
                q: "What problem does a watermark solve?",
                marks: 3,
                outline: [
                  "Out-of-order/late arrivals in event-time processing.",
                  "Bounds how long a window waits before closing; late events beyond it are dropped.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Machine learning on IoT data: cloud training to edge inference",
            body: [
              "Machine learning converts IoT telemetry into predictions: predicting failure before it happens (predictive maintenance), classifying events (which machine is abnormal), and forecasting demand (energy, occupancy). The pipeline is standard: sensed data is labelled and curated, a model is trained offline on historical data, validated on held-out data, then deployed for inference on live streams - and the only genuinely IoT-specific question is where inference runs, because that decision fixes latency, bandwidth and power.",
              "The mechanism splits into three placement patterns. Cloud inference: raw or lightly reduced data travels up, a central server scores it - simplest to operate, but every prediction pays network latency and bandwidth. Edge inference (fog): the cloud trains the model, then pushes it down to gateways that score locally - latency drops to tens of milliseconds and raw data stays on site. On-device (TinyML): compressed models (quantised from 32-bit floats to 8-bit integers, cutting model size and compute roughly 4x) run directly on microcontrollers via TensorFlow Lite Micro - a keyword-spotting or anomaly-detection model of 20-100 KB executes in under 100 ms on a Cortex-M4, enabling inference where no connectivity exists.",
              "A worked example with numbers: bearing-failure prediction for 40 factory motors. Training data: 30 days x 40 motors x 1-second RMS/peak features (about 100 MB, trivial to store) plus labelled failure records from maintenance logs. Model: gradient-boosted trees scoring 30 features, trained nightly in the cloud in 4 minutes on 8 cores - 96% precision, 91% recall on the validation month. Deployment: the 40 KB model is pushed to each site gateway (fog pattern), scoring each motor every 10 seconds with under 5 ms inference; only alarms and daily feature summaries (about 200 KB/site/day) reach the cloud. A TinyML variant quantised to int8 (about 10 KB) runs directly on the sensor nodes for offline plants.",
              "Advantages: predictive maintenance converts unplanned downtime (hours, expensive) into scheduled maintenance; edge inference keeps latency and privacy bounded; TinyML opens battery-powered offline inference. Limitations: labelled failure data is scarce and expensive (most models train on far fewer failure examples than engineers wish), sensor drift degrades models silently (monitor for it), model updates need the OTA infrastructure of 4.3, and tiny models accept only narrow tasks - an MCU will never host the fleet-scale forecaster. The exam line to remember: train in the cloud, infer at the edge or on the device, and push updates back down.",
            ],
            keyTerms: [
              { term: "Predictive maintenance", definition: "Predicting equipment failure from telemetry so maintenance is scheduled before breakdown." },
              { term: "Inference placement", definition: "Choice of where a trained model scores live data: cloud, edge gateway, or on the device." },
              { term: "TinyML", definition: "Quantised, KB-scale ML models running on microcontrollers (TensorFlow Lite Micro)." },
              { term: "Quantisation", definition: "Compressing model weights from float32 to int8 - roughly 4x smaller and faster with minor accuracy loss." },
              { term: "Model drift", definition: "Silent degradation of accuracy as sensors age or conditions change; needs monitoring and retraining." },
            ],
            callout: {
              type: "tip",
              title: "The one-line placement answer",
              body: "Memorise the sentence: 'Train in the cloud, infer at the edge or on-device, push the model down, feed labels back up.' Then support it with the numbers - 4 MB model, under 5 ms inference, 200 KB/day upward - and you have the skeleton of any ML-in-IoT answer.",
            },
            diagram: {
              kind: "fork",
              title: "Where should the model run?",
              caption:
                "The placement decision fixes latency, bandwidth and power for the whole lifecycle.",
              start: "A trained model must score live telemetry - where does inference run?",
              branches: [
                { label: "Score in the cloud", outcome: "simplest ops, but network latency and bandwidth per prediction", good: true },
                { label: "Score at the gateway", outcome: "cloud-trained model pushed down; <5 ms inference, raw data stays local", good: true },
                { label: "Score on the MCU (TinyML)", outcome: "10 KB int8 model on Cortex-M4; works offline, narrow tasks only", good: true },
              ],
            },
            bullets: [
              "ML roles in IoT: predictive maintenance, event classification, demand forecasting.",
              "Pipeline: curate/label -> train offline -> validate -> deploy for inference -> monitor drift.",
              "Placement options: cloud (simplest), edge gateway (< 5 ms, privacy), on-device TinyML (offline).",
              "Quantisation: float32 -> int8 gives ~4x size/speed gain for microcontrollers.",
              "Worked example: 40 motors, 30 features, nightly training in 4 min, 96% precision / 91% recall.",
              "Bandwidth: only alarms + 200 KB/day summaries go up; 40 KB model pushed down.",
              "TinyML example: 10 KB int8 model on sensor nodes for offline plants.",
              "Limits: scarce labelled failures, silent drift, OTA dependency, narrow on-device tasks.",
            ],
            table: {
              caption: "Inference placement trade-offs.",
              headers: ["Placement", "Latency", "Bandwidth", "Model size", "Best for"],
              rows: [
                ["Cloud", "100-300 ms", "High (data up)", "Unlimited", "Fleet analytics, slow decisions"],
                ["Edge gateway", "< 5-50 ms", "Low (features up)", "MB-class", "Site-level prediction, privacy"],
                ["On-device (TinyML)", "< 100 ms", "None", "10-100 KB", "Offline, battery nodes, instant triggers"],
              ],
            },
            examQuestions: [
              {
                q: "Explain how machine learning is applied in IoT. Compare cloud, edge and on-device (TinyML) inference placement, and design a predictive-maintenance solution for 40 motors with model size, accuracy and bandwidth numbers.",
                marks: 7,
                outline: [
                  "ML use cases and the train-validate-deploy pipeline.",
                  "Cloud inference: simple ops, latency/bandwidth costs.",
                  "Edge inference: model push-down, <5 ms, data stays local.",
                  "TinyML: int8 quantisation, 10-100 KB models on Cortex-M4.",
                  "Design: 30 features, 30-day training set (~100 MB), 4-minute nightly training.",
                  "Accuracy: 96% precision, 91% recall; 200 KB/day upward traffic.",
                  "Limits: labelled-data scarcity, drift monitoring, OTA updates.",
                ],
              },
              {
                q: "What is quantisation in TinyML and what does it save?",
                marks: 2,
                outline: ["Weights float32 -> int8; ~4x smaller models and faster inference with minor accuracy loss."],
              },
              {
                q: "Why is sensor drift a maintenance issue for ML models?",
                marks: 3,
                outline: [
                  "Ageing sensors shift input distributions.",
                  "Accuracy degrades silently; requires monitoring and scheduled retraining.",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Wireless sensor networks (WSN)",
            body: [
              "A wireless sensor network is a deployment of many small, battery-powered nodes - each combining sensors, a low-power radio and a microcontroller - that cooperate to monitor a field and route measurements to one or more sinks (base stations). Distinguishing properties: nodes are energy-constrained (their lifetime IS the design target), the network is self-organising (nodes discover neighbours and routes without an administrator), density is high (tens to thousands of nodes), and topology changes as nodes die or move. WSNs are the historical ancestor of IoT and remain the pattern for environmental, agricultural and military monitoring.",
              "The mechanism centres on energy-aware networking. Clustering organises nodes into groups, each electing a cluster head (CH) that aggregates members' readings and forwards the summary - members transmit short hops (cheap), the CH handles the long haul. LEACH (Low-Energy Adaptive Clustering Hierarchy) rotates the CH role randomly per round so the energy drain is shared; PEGASIS chains nodes so each talks only to its neighbour. Routing to the sink may be multihop via neighbours (geographic or gradient-based), and duty cycling (radio asleep almost always) contributes the largest energy saving - often 10-100x versus always-on listening.",
              "A worked example with numbers: a 1 km x 1 km precision-agriculture field with 100 soil-moisture nodes reporting every 10 minutes. Clustering: 10 clusters of 10; each member sends 20 bytes to its CH (10-30 m hop, about 2 mJ per transmission); the CH aggregates into one 100-byte summary and relays it 5 hops to the sink (about 30 mJ per hop). Per round the network spends roughly 100 x 2 + 10 x (5 x 30) = 1,700 mJ; with 2 AA batteries (about 10,000 J usable) and 144 rounds/day, radio energy is about 245 J/day - but the real drain is idle listening, so duty-cycled radios (on 1% of the time) bring the total near 400 J/day, giving roughly 25-30 days per charge - or years with solar trimming.",
              "Advantages: coverage of wide, cable-free areas, graceful degradation (node deaths shrink coverage gradually rather than killing the system), and very low per-node cost. Limitations: energy remains the binding constraint (routing protocol choice changes lifetime by 2-5x), bandwidth and per-hop reliability are modest, security is hard (physical capture of exposed nodes exposes keys), and data from hundreds of nodes needs aggregation or the sink is overwhelmed. In exams, the WSN answer pattern is: define, draw clustered topology, name LEACH, and do one energy-per-round calculation.",
            ],
            keyTerms: [
              { term: "Sink / base station", definition: "The collection point that receives aggregated WSN data and connects it to the wider network." },
              { term: "Cluster head (CH)", definition: "Rotating node role that aggregates cluster members' data and forwards it toward the sink." },
              { term: "LEACH", definition: "Low-Energy Adaptive Clustering Hierarchy - rotates cluster-head duty per round to equalise energy drain." },
              { term: "Duty cycling", definition: "Keeping radios asleep except for brief scheduled active periods - the dominant energy saving." },
              { term: "Self-organising", definition: "Nodes discover neighbours and form routes autonomously, tolerating node death and mobility." },
            ],
            callout: {
              type: "exam",
              title: "LEACH in one breath",
              body: "If LEACH appears: 'cluster heads are elected randomly each round, members transmit short hops to the CH, the CH aggregates and relays to the sink, and rotating the role spreads the energy burden so no node dies first.' Add the energy-per-round calculation and that question is closed.",
            },
            diagram: {
              kind: "cycle",
              title: "One LEACH round",
              caption:
                "Each round re-elects heads, gathers, aggregates and relays - spreading energy drain across all nodes.",
              steps: [
                { label: "Elect cluster heads", note: "random rotation per round (LEACH)" },
                { label: "Members join nearest CH", note: "short 10-30 m hops, ~2 mJ each" },
                { label: "Sense and transmit", note: "20-byte readings every 10 min" },
                { label: "CH aggregates", note: "compress 10 readings into one 100-byte summary" },
                { label: "Relay to sink", note: "multihop, ~30 mJ per hop" },
                { label: "Duty-cycle and sleep", note: "radio on ~1% of the time between rounds" },
              ],
            },
            bullets: [
              "WSN = many energy-constrained sensing nodes cooperating to a sink.",
              "Properties: self-organising, dense, dynamic topology, lifetime-driven design.",
              "Clustering: members send short hops; cluster heads aggregate and relay.",
              "LEACH rotates CH duty per round; PEGASIS chains neighbours instead.",
              "Duty cycling gives 10-100x energy savings over always-on radios.",
              "Worked field: 100 nodes, 10 clusters, 1,700 mJ radio energy per round, ~400 J/day with duty cycling, 25-30 days per charge.",
              "Graceful degradation: coverage shrinks as nodes die instead of failing hard.",
              "Limits: energy bounds lifetime 2-5x by protocol choice; exposed nodes risk capture; aggregation is mandatory at scale.",
            ],
            table: {
              caption: "WSN energy-saving techniques.",
              headers: ["Technique", "Mechanism", "Typical saving"],
              rows: [
                ["Clustering (LEACH)", "Short member hops, CH relays", "2-4x radio energy"],
                ["Duty cycling", "Sleep 99% of the time", "10-100x idle drain"],
                ["Data aggregation", "Compress many readings to one summary", "Proportional to cluster size"],
                ["Adaptive sampling", "Sense less when nothing changes", "Up to 10x on stable fields"],
              ],
            },
            examQuestions: [
              {
                q: "Define WSN and its characteristics. Explain clustered routing and LEACH, and compute the energy per round for a 100-node agricultural field with the numbers given in your answer.",
                marks: 7,
                outline: [
                  "Definition and properties: self-organising, dense, energy-driven.",
                  "Draw clustered topology: members, CHs, sink.",
                  "LEACH mechanics: random CH rotation per round.",
                  "Member hops ~2 mJ; CH multihop ~30 mJ/hop.",
                  "Per-round energy: 100 x 2 + 10 x 150 = 1,700 mJ.",
                  "Duty cycling: ~400 J/day, 25-30 days per charge.",
                  "State limitations: capture risk, aggregation necessity.",
                ],
              },
              {
                q: "What is the role of the cluster head in a WSN?",
                marks: 2,
                outline: ["Aggregates members' readings and relays summaries toward the sink."],
              },
              {
                q: "Why does duty cycling save more energy than optimising routes?",
                marks: 3,
                outline: [
                  "Idle listening dominates node energy budgets.",
                  "Sleeping the radio 99% of the time cuts drain 10-100x, beyond what routing alone achieves.",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Storage and visualisation: time-series data and dashboards",
            body: [
              "IoT storage has a dominant pattern: time-series data - each record is a timestamp, a device ID, a metric and a value - appended forever and queried by time ranges. Purpose-built time-series databases (InfluxDB, TimescaleDB, Prometheus, cloud offerings like Timestream) exploit this shape: they compress repeated timestamps and tags aggressively (typical 10-20x compression), answer 'last value of sensor X' instantly via caching, and apply retention/downsampling policies automatically (raw data kept 7 days, 1-minute aggregates 1 year, 1-hour aggregates forever). Relational databases handle the metadata (device inventory, users) alongside.",
              "The mechanism of visualisation turns stored series into decisions. Dashboards (Grafana over InfluxDB, ThingSpeak charts, Kibana) render live and historical series with shared time axes, threshold colouring and alert rules; alerting engines evaluate conditions continuously (occupancy > 90% for 10 minutes triggers an email/webhook); reports aggregate for periodic review. Good dashboard design mirrors the user's question - an operator wants current state and alarms, an analyst wants trends and comparisons - so the same data feeds two dashboard views.",
              "A worked example with numbers: the 200-node parking project stores occupancy as one record per bay per minute: 200 x 1,440 = 288,000 records/day, about 15 MB/day raw. With tag-based compression (about 15x) that is 1 MB/day on disk; downsampling to 5-minute averages after 7 days cuts history to about 60,000 records/day, and yearly 1-hour aggregates fit in about 40 MB. Grafana queries 'zone occupancy last 24 h' in about 80 ms from the cache; the alert rule 'any zone above 95% for 10 min' fires a webhook that the pricing service consumes. Total storage cost: under 1 GB/year - visualisation and storage sizing are solved by choosing the right database shape, not by buying capacity.",
              "Advantages of the time-series approach: compression and retention are automatic, queries by time window are the fast path, and downsampling preserves trends forever at trivial cost. Limitations: ad-hoc relational queries across devices and metrics are awkward, high-cardinality tagging (millions of unique tag sets) degrades some engines, and a dashboard is only as trustworthy as the data validation stage - garbage plotted beautifully is still garbage. Exam answers should include the record-rate arithmetic and one downsampling policy; that demonstrates design, not just naming tools.",
            ],
            keyTerms: [
              { term: "Time-series database", definition: "Store optimised for timestamped records: InfluxDB, TimescaleDB, Timestream - compression and time-range queries are the fast path." },
              { term: "Downsampling", definition: "Automatically converting raw data to coarser aggregates after an age threshold, preserving trends at tiny cost." },
              { term: "Cardinality", definition: "Number of unique tag combinations; high cardinality strains time-series engines." },
              { term: "Dashboard (Grafana)", definition: "Visual panel system over time-series stores with thresholds, alerts and shared time axes." },
              { term: "Alert rule", definition: "Continuous condition evaluation (e.g. zone above 95% for 10 min) triggering webhooks or notifications." },
            ],
            callout: {
              type: "exam",
              title: "Do the record-rate arithmetic",
              body: "Storage questions are won by one calculation: devices x records/day x bytes = daily volume, then compression and downsampling factors. For 200 nodes at 1/min: 288,000 records/day, 15 MB raw, 1 MB compressed, under 1 GB/year with downsampling - quote the chain.",
            },
            diagram: {
              kind: "flow",
              title: "From MQTT message to dashboard pixel",
              caption:
                "Each arrow adds value and reduces volume - by the last stage, 288,000 daily records are four charts.",
              steps: [
                { label: "MQTT ingestion", note: "288,000 records/day from 200 bays" },
                { label: "Validation", note: "range checks, gap detection, unit normalisation" },
                { label: "Time-series store", note: "tag compression ~15x, raw kept 7 days" },
                { label: "Downsampling", note: "5-min aggregates after 7 days; 1-h forever (~40 MB/yr)" },
                { label: "Dashboard and alerts", note: "Grafana, 80 ms queries, zone>95% webhook" },
              ],
            },
            bullets: [
              "IoT storage pattern: timestamp + device + metric + value, appended forever.",
              "Time-series engines: InfluxDB, TimescaleDB, Timestream, Prometheus.",
              "10-20x compression via repeated timestamps/tags; 'last value' served from cache.",
              "Retention tiers: raw 7 days, 1-min aggregates 1 year, 1-hour forever.",
              "Worked maths: 200 bays x 1,440 = 288,000 records/day, 15 MB/day raw, 1 MB compressed, < 1 GB/year.",
              "Visualisation: Grafana/ThingSpeak/Kibana; operator view (state+alarms) vs analyst view (trends).",
              "Alert rules evaluate continuously (zone > 95% for 10 min -> webhook).",
              "Limits: awkward ad-hoc queries, high-cardinality strain, dashboards inherit data-quality problems.",
            ],
            table: {
              caption: "Retention and downsampling policy for the parking example.",
              headers: ["Tier", "Resolution", "Retention", "Size"],
              rows: [
                ["Raw", "1 per minute per bay", "7 days", "~7 MB compressed"],
                ["Medium", "5-minute averages", "1 year", "~60 MB"],
                ["Coarse", "1-hour aggregates", "Forever", "~40 MB/year"],
                ["Total", "-", "-", "under 1 GB/year"],
              ],
            },
            examQuestions: [
              {
                q: "Explain why IoT telemetry favours time-series databases. Describe compression, retention and downsampling, and size the storage for a 200-node parking system storing one reading per bay per minute, including dashboard and alert design.",
                marks: 7,
                outline: [
                  "Time-series record shape and why relational fits poorly.",
                  "Engine examples: InfluxDB, TimescaleDB, Timestream.",
                  "Compression 10-20x; last-value caching.",
                  "Downsampling tiers: raw 7 days, 5-min 1 year, 1-h forever.",
                  "Arithmetic: 288,000 records/day, 15 MB/day raw, under 1 GB/year.",
                  "Dashboards: operator vs analyst views; 80 ms query example.",
                  "Alert rule example and data-validation caveat.",
                ],
              },
              {
                q: "Name two time-series databases.",
                marks: 2,
                outline: ["InfluxDB, TimescaleDB (Timestream, Prometheus also acceptable)."],
              },
              {
                q: "What is downsampling and why is it safe for trends?",
                marks: 3,
                outline: [
                  "Replacing aged raw data with coarser aggregates.",
                  "Averages preserve trend shape; only sub-window noise is lost.",
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
      title: "Applications and Security",
      summary:
        "Where IoT meets the world: smart homes, smart cities, precision agriculture and connected healthcare; industrial IoT and Industry 4.0 automation pyramids; the attack surface and how systems are compromised; the countermeasure toolkit from lightweight cryptography to firmware updates; privacy engineering; and a closing case study that ties every unit together.",
      chapter: {
        number: "05",
        title: "Application Domains, Attacks and Defences",
        intro:
          "Unit V applies everything before it. Four application domains with real deployments and numbers, the industrial IoT automation pyramid, a structured attack taxonomy, the defence stack (encryption, authentication, updates, network segmentation), privacy by design, and one end-to-end case study showing how the units compose in a real smart-city deployment.",
        inOneBreath:
          "Smart home = hub-mediated Zigbee/BLE devices behind one controller; smart city = multi-domain sensing (parking, lighting, waste, traffic) on LPWAN/MQTT backbones; smart agriculture = sensor-driven irrigation loops saving 30-50% water; healthcare = wearables to clinician dashboards with strict latency and privacy duties; IIoT stacks field devices -> control -> SCADA -> MES -> ERP; attacks span device, network, application and physical surfaces (Mirai exploited default credentials on 600,000 devices); defences = unique credentials, TLS/DTLS, AES-128, signed OTA updates, network segmentation; privacy = data minimisation, consent, anonymisation; case study composes all units end to end.",
        sections: [
          {
            number: "5.1",
            title: "Smart home",
            body: [
              "A smart home connects appliances, sensors and entertainment systems into one controllable environment, centrally managed and often remotely accessible. Typical subsystems: lighting and climate (thermostats, smart bulbs), security (door/window sensors, cameras, smart locks), energy monitoring (smart plugs, whole-home meters) and voice/app control. The defining architecture element is the home hub or gateway: most home devices speak Zigbee or BLE for battery reasons, while the internet-facing side speaks Wi-Fi and MQTT/HTTP - the hub translates, applies local automation rules and buffers during outages.",
              "The mechanism is event-and-rule driven: sensors publish state changes (motion detected at 22:41, door opened, temperature 31 C), the hub evaluates automation rules locally ('if motion and after sunset then lights on; if temperature above 28 then AC on'), and only summaries go to the cloud for remote access and analytics. Local-first control matters: lights must still respond when the internet dies, which is why mature designs keep the rule engine in the hub, using the cloud only for remote access, firmware updates and history. Protocols: Zigbee meshes for mains devices, BLE for phone-adjacent gadgets, Wi-Fi for cameras and hubs, MQTT as the in-home message bus.",
              "A worked deployment with numbers: a 3-bedroom house with 45 devices - 18 Zigbee battery sensors (door/window, motion, temperature), 12 smart plugs, 4 cameras (Wi-Fi, 2 Mbps each), 10 bulbs, one hub. Battery sensors publish 20-byte frames every 5 minutes plus event-driven changes (about 300 messages/day each); the hub brokers all traffic via MQTT (about 5,500 messages/day, under 1 MB) and stores 90 days of history locally in SQLite (about 25 MB). Camera traffic dominates bandwidth: 4 cameras x 2 Mbps = 8 Mbps continuous, about 86 GB/day if recorded - so designs record only motion clips (about 2 GB/day). Response latency from sensor event to bulb change through the local hub: 50-200 ms, versus 500 ms-2 s if routed via cloud.",
              "Advantages: convenience and energy savings (occupancy-based climate control cuts heating/cooling energy by roughly 10-15%), security monitoring, and accessibility for elderly care. Limitations: privacy exposure (cameras and microphones in intimate spaces), vendor fragmentation (devices that refuse to interoperate), dependence on the hub as a single point of failure, and the well-documented security problem of consumer devices shipping with weak defaults - the attack section (5.6) quantifies what that costs.",
            ],
            keyTerms: [
              { term: "Home hub / gateway", definition: "Local controller bridging Zigbee/BLE devices to Wi-Fi/cloud, hosting automation rules and buffering offline." },
              { term: "Local-first automation", definition: "Rules evaluated in the hub so the home keeps working during internet outages." },
              { term: "Smart plug", definition: "Mains socket with metering and relay control - the workhorse of home energy monitoring." },
              { term: "Voice assistant integration", definition: "Cloud speech service exposing home devices to spoken commands." },
            ],
            callout: {
              type: "exam",
              title: "Hub architecture is the scoring diagram",
              body: "Draw the three-tier home: battery sensors (Zigbee/BLE) -> hub (rules, MQTT, SQLite) -> cloud (remote access, OTA). Annotate latencies (50-200 ms local vs 500 ms-2 s cloud). The diagram plus the outage rationale answers almost every smart-home question.",
            },
            diagram: {
              kind: "pipeline",
              title: "Smart-home data and control path",
              caption:
                "Control stays local for speed and outage resilience; the cloud serves access, history and updates.",
              stages: [
                { label: "Sensors and devices", note: "18 Zigbee sensors, 20-byte frames every 5 min + events" },
                { label: "Home hub", note: "MQTT broker, local rule engine, 50-200 ms reactions" },
                { label: "Local storage", note: "SQLite 90-day history, ~25 MB" },
                { label: "Cloud services", note: "remote access, OTA, analytics - 500 ms-2 s when involved" },
                { label: "User interfaces", note: "app and voice assistant commands" },
              ],
            },
            bullets: [
              "Smart home = centrally controlled lighting, climate, security and energy subsystems.",
              "Hub translates Zigbee/BLE device protocols to Wi-Fi/cloud and hosts local rules.",
              "Local-first rule evaluation keeps the house working during internet outages.",
              "Worked numbers: 45 devices, ~5,500 MQTT messages/day, 90-day SQLite history (25 MB), cameras 8 Mbps continuous.",
              "Camera storage dominates: record motion clips (2 GB/day) not continuous video (86 GB/day).",
              "Latency: local sensor-to-bulb 50-200 ms; cloud round trip 500 ms-2 s.",
              "Energy benefit: occupancy-based control trims heating/cooling by 10-15%.",
              "Limits: privacy exposure, vendor fragmentation, hub SPOF, weak consumer defaults.",
            ],
            table: {
              caption: "Smart-home subsystems and their technologies.",
              headers: ["Subsystem", "Devices", "Protocol", "Notes"],
              rows: [
                ["Climate", "Thermostat, sensors", "Zigbee/Wi-Fi", "10-15% energy saving"],
                ["Lighting", "Bulbs, dimmers", "Zigbee", "50-200 ms local response"],
                ["Security", "Door/window, motion, camera", "Zigbee + Wi-Fi", "Motion-clip recording"],
                ["Energy", "Smart plugs, meter", "Zigbee/Wi-Fi", "Per-appliance consumption"],
                ["Control", "Hub, app, voice", "Wi-Fi/MQTT", "Local rules, cloud remote access"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the architecture of a smart home with the role of the hub. Design a 45-device deployment with message volumes, storage, camera bandwidth and local-versus-cloud latency numbers, and justify local-first automation.",
                marks: 7,
                outline: [
                  "Architecture diagram: sensors -> hub -> cloud.",
                  "Hub duties: protocol translation, MQTT broker, rule engine, buffering.",
                  "Device mix: 18 Zigbee sensors, 12 plugs, 4 cameras, 10 bulbs.",
                  "Traffic: ~5,500 messages/day, under 1 MB; cameras 8 Mbps.",
                  "Storage strategy: 90-day SQLite (25 MB); motion-clip video (2 GB/day).",
                  "Latency contrast: 50-200 ms local vs 500 ms-2 s cloud.",
                  "Outage argument for local-first rules; note privacy and SPOF limits.",
                ],
              },
              {
                q: "Why do battery home sensors prefer Zigbee over Wi-Fi?",
                marks: 2,
                outline: ["Zigbee end devices sleep at ~1 uA and mesh-relay; Wi-Fi radios are too power-hungry for coin cells."],
              },
              {
                q: "What breaks when the internet connection fails in a cloud-only smart home?",
                marks: 3,
                outline: [
                  "Automation rules evaluated in the cloud stop running.",
                  "Local control latency degrades or dies; hub-local designs keep working.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Smart city",
            body: [
              "A smart city instruments public infrastructure - parking, street lighting, waste collection, traffic, air quality, water - and uses the aggregated data to improve services and reduce cost. Unlike a smart home, a smart city is a federation of systems: dozens of departments, thousands of dispersed devices on public assets, and multi-tenant platforms. The connectivity choice differs accordingly: kilometre-scale LPWAN links (LoRaWAN, NB-IoT) for dispersed battery sensors, mesh or cellular for dense assets, and an MQTT/IP backbone converging everything to city platforms.",
              "The mechanism is domain-specific sensing feeding shared platforms. Parking sensors detect vehicle presence and feed apps and pricing; adaptive street lighting dims to 30% when the road is empty and restores on detection, cutting energy 40-60%; waste bins report fill levels so trucks only visit bins above 70% full, cutting collection route length 20-30%; air-quality nodes build street-level pollution maps; traffic systems fuse cameras and induction loops for adaptive signal timing. The platform layer correlating across domains is where 'smart' emerges - e.g. traffic, air quality and event calendars together drive congestion pricing.",
              "A worked deployment with numbers: a mid-size city of 500,000 inhabitants deploys 2,000 parking sensors (LoRaWAN, 40-byte frames every 30 s = about 5.7M messages/day), 10,000 smart streetlights (Zigbee mesh to 200 lighting controllers, MQTT upstream), 1,500 waste bins (NB-IoT, fill level every 2 h) and 50 air-quality stations (Wi-Fi backhaul, 5-minute aggregates). Platform ingestion peaks near 70 messages/s - modest, but the data volume is about 4 GB/day and the dashboard must join across all four domains. Measured outcomes from comparable deployments: parking search time down about 30%, lighting energy down about 45%, waste fleet kilometres down about 25%.",
              "Advantages: operational savings in energy and fleet logistics, better citizen services (real-time parking and transit information), and environmental gains (measurable emission reductions). Limitations: high capital cost spread across departments, long procurement cycles, privacy tensions from pervasive public sensing (licence-plate and face data), interoperability across vendor systems, and the operational burden of maintaining tens of thousands of outdoor devices (weather, vandalism, battery replacement crews). Answer frameworks: name at least four domains, give per-domain technology and one number each, then a platform-level insight.",
            ],
            keyTerms: [
              { term: "Smart parking", definition: "Bay-level occupancy detection feeding apps, guidance and demand-based pricing." },
              { term: "Adaptive lighting", definition: "Streetlights dimming by presence/traffic, typically saving 40-60% energy." },
              { term: "Fill-level sensing", definition: "Waste bins reporting fullness so collection routes serve only bins above a threshold." },
              { term: "City platform", definition: "Multi-domain ingestion and correlation layer joining parking, lighting, waste, traffic and environmental data." },
            ],
            callout: {
              type: "tip",
              title: "One number per domain",
              body: "Smart-city answers score by breadth plus evidence: four domains, each with its protocol and one measured outcome (lighting -45% energy, waste -25% route km, parking search -30%). Lists without numbers read as marketing; numbers read as engineering.",
            },
            diagram: {
              kind: "pyramid",
              title: "The smart-city capability stack",
              caption:
                "Value emerges at the top only when the sensing base and platform middle are in place.",
              tiers: [
                { label: "Citizen services", note: "parking apps, transit info, safety alerts" },
                { label: "Cross-domain intelligence", note: "correlating traffic, air quality, events for policy" },
                { label: "City platform", note: "MQTT/IP backbone, multi-domain ingestion, dashboards" },
                { label: "Domain systems", note: "parking, lighting, waste, air quality, traffic" },
                { label: "Sensing and connectivity", note: "LoRaWAN/NB-IoT/Zigbee nodes on public assets" },
              ],
            },
            bullets: [
              "Smart city = instrumented public infrastructure across multiple departments.",
              "Parking: bay sensors on LoRaWAN, 40 B every 30 s; search time down ~30%.",
              "Lighting: presence-adaptive dimming to 30%; energy down 40-60%.",
              "Waste: fill-level reporting; trucks serve bins above 70%; route km down ~25%.",
              "Air quality: street-level pollution maps from 5-minute aggregates.",
              "Worked scale: 2,000 parking + 10,000 lights + 1,500 bins + 50 AQ stations; ~70 msg/s peak, ~4 GB/day.",
              "Platform correlation across domains is where city-level decisions emerge.",
              "Limits: capital cost, procurement cycles, public-sensing privacy, outdoor maintenance burden.",
            ],
            table: {
              caption: "City domains with technology and outcomes.",
              headers: ["Domain", "Technology", "Measured outcome"],
              rows: [
                ["Parking", "LoRaWAN magnetometers", "Search time -30%"],
                ["Street lighting", "Zigbee mesh + adaptive dimming", "Energy -45%"],
                ["Waste collection", "NB-IoT fill sensors", "Route km -25%"],
                ["Air quality", "Wi-Fi backhaul stations", "Street-level PM/NO2 maps"],
                ["Traffic", "Cameras + loops, adaptive signals", "Congestion pricing inputs"],
              ],
            },
            examQuestions: [
              {
                q: "What is a smart city? Describe four application domains with their sensing technology and quantified outcomes, and explain the platform layer that integrates them. Size the deployment for a 500,000-inhabitant city.",
                marks: 7,
                outline: [
                  "Definition as a federation of instrumented domains.",
                  "Parking: LoRaWAN magnetometers, -30% search time.",
                  "Lighting: adaptive dimming, -45% energy.",
                  "Waste: fill-level NB-IoT, -25% route km.",
                  "Air quality: street-level mapping.",
                  "Platform: MQTT/IP backbone, cross-domain correlation.",
                  "Sizing: ~70 msg/s peak, ~4 GB/day across four domains.",
                ],
              },
              {
                q: "Why do dispersed city sensors favour LPWAN over cellular?",
                marks: 2,
                outline: ["Km range and years of battery for tiny payloads; cellular cost and power are unjustified for 40-byte telemetry."],
              },
              {
                q: "Name two privacy concerns specific to smart-city sensing.",
                marks: 3,
                outline: [
                  "Licence-plate recognition enabling vehicle tracking.",
                  "Camera/face data in public spaces; aggregation enables movement profiles.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Smart agriculture",
            body: [
              "Smart agriculture (precision agriculture) applies sensing and control to farming decisions: irrigation, fertilisation, climate in greenhouses, and livestock monitoring. Instead of watering a whole field on a schedule, the system measures soil moisture at root depth, weather forecasts and crop stage, and irrigates only where and when needed. Core components: field sensor nodes (soil moisture, temperature, humidity, EC/pH), weather stations, gateway and LPWAN connectivity, a decision layer (rules or models), and actuators (valves, pumps, fans, dosing systems).",
              "The mechanism is a closed control loop per zone: sensors sample at intervals matched to soil dynamics (moisture changes on the scale of hours, so 15-minute sampling suffices); the decision layer compares readings to crop-specific thresholds or an evapotranspiration model; commands actuate solenoid valves per zone; and the loop verifies by watching moisture respond after irrigation. Greenhouses add tighter loops - temperature, humidity and CO2 with fans, vents and foggers reacting in minutes. Livestock monitoring attaches accelerometers or rumen boluses detecting health anomalies days before visual symptoms.",
              "A worked deployment with numbers: a 10-hectare vegetable farm divided into 20 irrigation zones, each with two soil-moisture probes (capacitive, every 15 minutes, 12-byte LoRaWAN frames) - 40 nodes plus 2 weather stations reporting over 4 gateways (the 2.6 design). Irrigation rule: irrigate zone when moisture at 20 cm depth falls below field capacity minus 15%, dosing to refill to field capacity; with drip lines and this policy, measured water use fell from about 5,500 m3/ha/year (schedule-based) to about 3,300 m3/ha/year - a 40% saving - while yield rose 8% from avoiding both drought stress and waterlogging. Energy: valve actuation costs 0.6 J per event (the 3.2 calculation), so solar-powered valve controllers run indefinitely.",
              "Advantages: major water savings (30-50% typical), input savings on fertiliser through variable-rate dosing, earlier disease/pest detection, and yield improvement from stable root-zone conditions. Limitations: sensor calibration and placement matter enormously (one probe per zone can misrepresent a whole zone), connectivity in remote fields pushes design toward LPWAN with its latency limits, hardware must survive weather and dust (IP65+ enclosures), and smallholder economics remain hard - the payback period depends on water cost and crop value. The exam pattern: definition, loop diagram, one water calculation, limitations.",
            ],
            keyTerms: [
              { term: "Precision agriculture", definition: "Sensor-driven, zone-level management of irrigation, fertilisation and crop conditions." },
              { term: "Field capacity", definition: "Soil moisture content after excess water drains - the reference point for irrigation thresholds." },
              { term: "Evapotranspiration (ET)", definition: "Water lost to evaporation and plant transpiration; ET models drive irrigation scheduling." },
              { term: "Variable-rate dosing", definition: "Applying fertiliser/water at different rates per zone based on measured need." },
              { term: "Rumen bolus", definition: "Swallowed livestock sensor reporting internal temperature and activity for health monitoring." },
            ],
            callout: {
              type: "tip",
              title: "Irrigation is a control loop - say so",
              body: "Weak answers list sensors. Strong answers draw the loop: measure moisture -> compare to threshold/ET model -> actuate zone valve -> verify moisture response -> repeat. Then the 40% water saving and 0.6 J valve energy make it quantitative.",
            },
            diagram: {
              kind: "cycle",
              title: "The precision-irrigation control loop",
              caption:
                "One loop per irrigation zone, repeating on soil-moisture timescales (hours).",
              steps: [
                { label: "Sense", note: "two probes per zone, every 15 min, 12-byte LoRa frames" },
                { label: "Decide", note: "below field capacity -15%? consult ET forecast" },
                { label: "Actuate", note: "12 V latching valve, 0.6 J per opening" },
                { label: "Verify", note: "watch moisture rise at 20 cm depth" },
                { label: "Record and adapt", note: "log volumes per zone; recalibrate thresholds by crop stage" },
              ],
            },
            bullets: [
              "Precision agriculture = zone-level, sensor-driven decisions instead of uniform schedules.",
              "Sensing: soil moisture, temperature/humidity, EC/pH, weather stations; livestock boluses.",
              "Timescales: moisture changes in hours -> 15-minute sampling is sufficient.",
              "Connectivity: LPWAN (LoRaWAN) for km-scale fields with battery nodes.",
              "Worked farm: 10 ha, 20 zones, 40 probes + 2 stations over 4 gateways.",
              "Result: 5,500 -> 3,300 m3/ha/year = 40% water saving with 8% yield gain.",
              "Valve actuation 0.6 J/event - solar-powered controllers are self-sufficient.",
              "Limits: probe placement/calibration, weatherproofing (IP65+), smallholder economics.",
            ],
            table: {
              caption: "Agricultural sensing and its decisions.",
              headers: ["Measurement", "Sensor", "Decision it drives"],
              rows: [
                ["Soil moisture (20 cm)", "Capacitive probe", "Irrigate zone / valve timing"],
                ["Air temperature + humidity", "SHT31-class", "Vent/fan/fog control, disease risk"],
                ["EC / pH", "Soil or water probe", "Fertiliser dosing rate"],
                ["Weather (rain, wind, ET)", "Station", "Skip irrigation after rain; spray windows"],
                ["Livestock activity", "Accelerometer bolus", "Health alerts days before symptoms"],
              ],
            },
            examQuestions: [
              {
                q: "Explain precision agriculture and its closed-loop irrigation mechanism. Design a 10-hectare, 20-zone deployment with node counts, sampling rates and connectivity, and quantify the water saving versus schedule-based irrigation.",
                marks: 7,
                outline: [
                  "Definition and motivation of precision agriculture.",
                  "Draw the sense -> decide -> actuate -> verify loop.",
                  "Sensing set with sampling intervals matched to soil timescales.",
                  "Deployment: 40 probes + 2 stations, LoRaWAN over 4 gateways.",
                  "Threshold logic: field capacity minus 15%, refill to capacity.",
                  "Numbers: 5,500 -> 3,300 m3/ha/year (40% saving), yield +8%.",
                  "Limits: calibration, weatherproofing, economics.",
                ],
              },
              {
                q: "Why is 15-minute sampling adequate for soil moisture but not for greenhouse temperature control?",
                marks: 2,
                outline: ["Moisture changes over hours; greenhouse air temperature changes in minutes and drives actuator loops."],
              },
              {
                q: "What is evapotranspiration and how is it used?",
                marks: 3,
                outline: [
                  "Combined evaporation + plant transpiration water loss.",
                  "ET models estimate crop water demand to schedule irrigation between measurements.",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Smart healthcare",
            body: [
              "Smart healthcare (IoMT - the Internet of Medical Things) connects wearables, implantables and clinical devices to care workflows: continuous vital-sign monitoring, remote patient management, medication adherence, and hospital asset tracking. Typical devices: ECG and heart-rate patches, pulse oximeters (SpO2), glucose continuous monitors (CGM), blood-pressure cuffs, infusion pumps, and hospital tags for equipment and patients. The stakes differ from other domains: data is health-critical, latency can be clinical (arrhythmia alerts), and regulation (medical device standards, patient consent) shapes every design decision.",
              "The mechanism chains wearable to clinician. A wearable samples continuously (ECG at 250-500 Hz), classifies locally or on the phone, and streams to a backend where dashboards alert clinicians; thresholds trigger graded responses (app notification -> caregiver call -> emergency dispatch). Implantables such as pacemakers communicate over short-range telemetry to bedside programmers. Hospital IoT extends to asset tracking (BLE tags on infusion pumps so staff find equipment in seconds) and environmental monitoring (vaccine fridge temperature, the 3.1 example, with alerting on breach).",
              "A worked deployment with numbers: a cardiology ward's remote-monitoring service for 200 discharged patients. Each patient wears an ECG patch sampling at 250 Hz (about 500 bytes/s raw, compressed and event-filtered on the patch to about 2 KB/min transmitted over BLE to the phone, then MQTT to the backend). The rule engine watches per-patient streams: sustained heart rate above 130, or an ectopic-beat density exceeding 10%, escalates to the on-call nurse within 15 seconds end-to-end (patch 2 s + phone 2 s + backend classification 5 s + paging 6 s). Storage: 200 patients x about 3 MB/day of processed ECG = 600 MB/day, with full-resolution episodes retained for 7 years per regulation and summaries forever. Measured outcome in comparable programmes: 30-day readmissions reduced by 20-40%.",
              "Advantages: continuous data replaces episodic clinic snapshots (arrhythmias are caught when they happen), earlier interventions, fewer readmissions, and hospital logistics gains from asset tracking. Limitations: stringent privacy obligations (consent, encryption, access control - link to 5.8), battery and wearability constraints on devices, false-alarm fatigue from over-sensitive thresholds (the classic reason clinicians disable alerts), regulatory certification cycles that slow iteration, and unequal access when designs assume smartphones and connectivity. Security matters doubly: an attacked medical device is not just a data breach but a safety event.",
            ],
            keyTerms: [
              { term: "IoMT", definition: "Internet of Medical Things - connected wearables, implantables and clinical devices feeding care workflows." },
              { term: "CGM", definition: "Continuous glucose monitor - wearable measuring interstitial glucose every few minutes." },
              { term: "SpO2", definition: "Blood oxygen saturation measured by pulse oximetry, a standard wearable vital sign." },
              { term: "Escalation ladder", definition: "Graded alerting: app notification -> caregiver -> emergency response, with per-step latency budgets." },
              { term: "False-alarm fatigue", definition: "Alert desensitisation caused by over-sensitive thresholds - a clinical safety issue in monitoring design." },
            ],
            callout: {
              type: "warning",
              title: "Latency and alarm fatigue are the two design killers",
              body: "Healthcare answers must state a latency budget (15 s escalation in the example) AND address false alarms (threshold tuning, hysteresis). A design that alerts on every artefact gets disabled by nurses - mentioning this shows clinical awareness examiners reward.",
            },
            diagram: {
              kind: "flow",
              title: "From ECG patch to nurse call, with the latency budget",
              caption:
                "Fifteen seconds end to end - each stage's contribution is explicit and testable.",
              steps: [
                { label: "ECG patch samples", note: "250 Hz, event filtering on-device (2 s)" },
                { label: "Phone relays", note: "BLE -> MQTT, ~2 KB/min per patient (2 s)" },
                { label: "Backend classifies", note: "rule engine + model, ectopic density > 10% (5 s)" },
                { label: "Escalate", note: "nurse paging and acknowledgment (6 s)" },
                { label: "Clinical response", note: "intervention; episode stored 7 years" },
              ],
            },
            bullets: [
              "IoMT spans wearables, implantables, clinical devices and hospital logistics tags.",
              "Typical vitals: ECG 250-500 Hz, SpO2, CGM glucose every few minutes, BP.",
              "Chain: wearable -> phone (BLE) -> MQTT backend -> dashboard -> escalation ladder.",
              "Worked service: 200 patients, ~2 KB/min filtered ECG, 15 s escalation budget.",
              "Storage: 600 MB/day processed episodes; 7-year retention per regulation.",
              "Outcome benchmark: 30-day readmissions down 20-40% in comparable programmes.",
              "Alarm-fatigue management: thresholds with hysteresis, severity tiers.",
              "Limits: privacy duties, battery/wearability, regulation cycles, access inequality.",
            ],
            table: {
              caption: "Healthcare IoT device classes.",
              headers: ["Device", "Measurement", "Rate", "Criticality"],
              rows: [
                ["ECG patch", "Cardiac rhythm", "250-500 Hz", "Arrhythmia alerts, seconds"],
                ["Pulse oximeter", "SpO2, pulse", "per second", "Hypoxia alarms"],
                ["CGM", "Interstitial glucose", "every 1-5 min", "Trend alerts"],
                ["Infusion pump", "Delivery state", "event-driven", "Safety interlocks"],
                ["Asset tag", "Location", "per minute", "Logistics only"],
              ],
            },
            examQuestions: [
              {
                q: "Explain smart healthcare / IoMT. Describe the remote cardiology monitoring chain from ECG patch to clinician with per-stage latency budgets and storage volumes, and discuss alarm fatigue and privacy as design constraints.",
                marks: 7,
                outline: [
                  "Define IoMT and device classes.",
                  "Chain: patch (250 Hz) -> phone BLE -> MQTT backend -> dashboard.",
                  "Latency budget: 2+2+5+6 = 15 s escalation.",
                  "Trigger rules: HR > 130 sustained; ectopic density > 10%.",
                  "Storage: 600 MB/day, 7-year episode retention.",
                  "Alarm fatigue: hysteresis and severity tiers.",
                  "Privacy and safety: encryption, consent, device security as clinical duty.",
                ],
              },
              {
                q: "What is CGM in healthcare IoT?",
                marks: 2,
                outline: ["Continuous glucose monitor measuring interstitial glucose every 1-5 minutes from a wearable."],
              },
              {
                q: "Why is an attacked medical device worse than an attacked light bulb?",
                marks: 3,
                outline: [
                  "Medical devices are safety-critical: altered therapy harms patients directly.",
                  "Data breaches additionally expose health records with strict regulatory consequences.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Industrial IoT and Industry 4.0",
            body: [
              "Industrial IoT (IIoT) applies IoT to manufacturing, energy and logistics: machines, lines and plants become data sources feeding predictive maintenance, quality analytics, energy optimisation and remote operations. Industry 4.0 names the broader programme: cyber-physical systems, digital twins of physical assets, interoperable machines and decentralised decisions - with IIoT as its connective tissue. The organising model is the automation pyramid: field devices (sensors, actuators) -> control (PLCs, DCS) -> supervisory (SCADA/HMI) -> manufacturing operations (MES) -> enterprise (ERP).",
              "The mechanism historically ran each layer on separate, vendor-locked networks (fieldbuses below, proprietary SCADA above); IIoT's contribution is IP convergence - OPC UA and MQTT bring publish-subscribe data models up the stack so analytics platforms subscribe to machine data directly, and edge gateways translate legacy Modbus/Profibus into those models without touching the PLCs. Digital twins mirror each machine's state in software, enabling simulation and what-if analysis; condition monitoring replaces fixed maintenance intervals with predictive scheduling.",
              "A worked deployment with numbers: a bottling plant with 120 machines (fillers, cappers, conveyors) retrofitted for IIoT. Each machine gains a vibration sensor (1 kHz) and a power meter (1 sample/s); an edge gateway per line (4 lines) computes RMS/FFT features (the 4.4 pattern) and publishes OPC UA/MQTT at 1 message/s per machine - about 120 msg/s plant-wide, roughly 10 GB/day of features. The predictive model (the 4.6 design) flags bearing wear a median 11 days before failure; scheduled interventions replace emergency stops, cutting unplanned downtime about 35% and maintenance parts cost about 20%. Legacy integration: 40 older machines speak Modbus RTU over RS-485 - the gateway polls them every 1 s and re-publishes as MQTT, so analytics never knows the difference.",
              "Advantages: downtime converted to scheduled maintenance, quality traced to machine parameters, energy optimisation per machine, and fleet-wide benchmarking across plants. Limitations: brownfield reality (decades-old protocols and machines), OT/IT cultural and security separation (plant networks were air-gapped by design - convergence widens the attack surface, linking to 5.6), real-time control must stay below IP analytics (the pyramid's lower layers remain deterministic), and retrofit cost per machine (sensors plus gateway plus integration) that must be justified by downtime savings. A strong answer names the five pyramid levels and one convergence protocol (OPC UA or MQTT).",
            ],
            keyTerms: [
              { term: "IIoT", definition: "Industrial IoT - networked sensing and analytics applied to machines, lines and plants." },
              { term: "Industry 4.0", definition: "The fourth industrial revolution programme: cyber-physical systems, digital twins, interoperable smart factories." },
              { term: "Automation pyramid", definition: "Field devices -> control -> SCADA/HMI -> MES -> ERP - the layered model of factory systems." },
              { term: "OPC UA", definition: "Open platform communications unified architecture - the vendor-neutral industrial data model/protocol of IIoT." },
              { term: "Digital twin", definition: "Software mirror of a physical machine's state and behaviour used for monitoring and simulation." },
              { term: "Brownfield", definition: "Retrofitting existing (often decades-old) plants rather than building greenfield." },
            ],
            callout: {
              type: "exam",
              title: "The pyramid plus one convergence protocol",
              body: "Any IIoT/Industry 4.0 question: draw the five-level automation pyramid, then show MQTT/OPC UA running vertically through it as the convergence layer, then one retrofit number (120 machines, 10 GB/day, downtime -35%). That combination covers definition, architecture and application marks.",
            },
            diagram: {
              kind: "layers",
              title: "The IIoT automation pyramid with IP convergence",
              caption:
                "Data climbs the classical layers; OPC UA/MQTT now carries it, letting analytics subscribe directly.",
              layers: [
                { label: "Enterprise (ERP)", note: "orders, inventory, planning" },
                { label: "Manufacturing operations (MES)", note: "production scheduling, quality, traceability" },
                { label: "Supervisory (SCADA/HMI)", note: "plant visualisation, alarms" },
                { label: "Control (PLC/DCS)", note: "deterministic real-time loops" },
                { label: "Field devices", note: "vibration sensors, power meters, valves - IIoT's data source" },
              ],
            },
            bullets: [
              "IIoT = IoT applied to industry; Industry 4.0 = cyber-physical systems + digital twins + interoperability.",
              "Automation pyramid: field -> control -> SCADA -> MES -> ERP.",
              "Convergence: OPC UA/MQTT carry machine data vertically; legacy Modbus translated at edge gateways.",
              "Condition monitoring: 1 kHz vibration + 1 Hz power per machine.",
              "Worked plant: 120 machines, ~120 msg/s, ~10 GB/day features, failure predicted 11 days ahead.",
              "Results: unplanned downtime -35%, parts cost -20%.",
              "Determinism preserved: control loops stay below the analytics layer.",
              "Limits: brownfield protocols, OT/IT security separation, retrofit cost justification.",
            ],
            table: {
              caption: "Pyramid levels and their IIoT data roles.",
              headers: ["Level", "Classical role", "IIoT addition"],
              rows: [
                ["Field", "Sensors, actuators", "Vibration/power telemetry sources"],
                ["Control", "PLC real-time loops", "Edge feature extraction"],
                ["SCADA", "Supervision, alarms", "MQTT/OPC UA publishing"],
                ["MES", "Production management", "Quality analytics per batch"],
                ["ERP", "Enterprise planning", "Cross-plant benchmarking"],
              ],
            },
            examQuestions: [
              {
                q: "Explain Industrial IoT and Industry 4.0. Draw the automation pyramid, describe IP convergence via OPC UA/MQTT, and present a bottling-plant retrofit with message rates, data volume and downtime results.",
                marks: 7,
                outline: [
                  "Definitions: IIoT and the Industry 4.0 programme.",
                  "Five pyramid levels with roles.",
                  "Convergence: OPC UA/MQTT vertically; Modbus translation at gateways.",
                  "Sensing: 1 kHz vibration + 1 Hz power per machine.",
                  "Scale: 120 machines, 120 msg/s, 10 GB/day features.",
                  "Predictive outcome: 11 days' warning, downtime -35%.",
                  "Brownfield and OT/IT security limitations.",
                ],
              },
              {
                q: "What is a digital twin?",
                marks: 2,
                outline: ["A software mirror of a physical asset's state/behaviour used for monitoring, simulation and prediction."],
              },
              {
                q: "Why must deterministic control remain below the analytics layer?",
                marks: 3,
                outline: [
                  "PLC loops need microsecond-millisecond guarantees.",
                  "IP-based analytics adds jitter and cannot guarantee them; separation preserves safety.",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "IoT security: attacks and vulnerabilities",
            body: [
              "IoT security protects the confidentiality, integrity and availability (CIA triad) of devices, networks, data and services. The attack surface is broader than classical IT because devices are physically exposed, numerous, rarely patched and often built by vendors without security budgets. Recurring root causes: default or hard-coded credentials, unencrypted communications, missing firmware-update mechanisms, insecure web/cloud APIs, and physical access (an attacker holding the device can extract keys or flash malicious firmware).",
              "The attack taxonomy runs by layer. Physical attacks: tampering, side-channel analysis, key extraction from flash. Network attacks: eavesdropping on plaintext links, man-in-the-middle on unauthenticated channels, denial-of-service through radio jamming or connection flooding. Device/software attacks: malware compromise of weakly protected devices, buffer overflows in firmware parsers, command injection through unvalidated APIs. Application/cloud attacks: credential stuffing against weak dashboards, API abuse, and database breaches. The canonical case is Mirai (2016): malware scanned the internet for devices with default credentials, infected roughly 600,000 cameras and routers, and weaponised them into a botnet whose DDoS attacks (peaking around 1 Tbps) took major services offline - proof that IoT-scale insecurity has internet-scale consequences.",
              "A worked attack analysis with numbers: a home camera fleet of 50,000 devices, each with admin/admin defaults and an unauthenticated firmware check URL. Exploit chain: an attacker scans address space on port 23/80 (about 4 billion IPv4 addresses, a scan of 65,000 addresses/second completes in hours with rented infrastructure), logs in with defaults on about 40% of exposed devices (20,000 bots), and each bot floods 2 Mbps of junk traffic - a combined 40 Gbps DDoS from one product line. Counterfactual: unique per-device credentials and a signed, authenticated update path would have blocked the login step outright; rate-limited management interfaces would blunt the scan. The point for the exam: vulnerabilities compound - each missing control multiplies the others' impact.",
              "Advantages of studying attacks systematically: defences can be prioritised by cost-per-risk-reduced (unique credentials are nearly free; hardware roots of trust are expensive but definitive). Limitations of the current ecosystem: long device lifetimes (a camera sold today serves 5-10 years against threat models that evolve monthly), constrained devices limiting heavyweight cryptography, and economics where security has no visible feature the customer pays for. The exam expects: CIA triad definition, layered attack taxonomy, one named case (Mirai) with numbers, and the vulnerability chain logic.",
            ],
            keyTerms: [
              { term: "CIA triad", definition: "Confidentiality, Integrity, Availability - the three properties security protects." },
              { term: "Attack surface", definition: "All points where an attacker can interact with the system: physical ports, radios, APIs, firmware, cloud." },
              { term: "Mirai botnet", definition: "2016 malware infecting ~600,000 default-credential devices into a ~1 Tbps DDoS weapon." },
              { term: "Man-in-the-middle", definition: "Attacker silently relaying/altering traffic between device and server when authentication is absent." },
              { term: "Side-channel attack", definition: "Extracting secrets from physical emissions (power, timing) rather than breaking the algorithm." },
            ],
            callout: {
              type: "warning",
              title: "Vulnerabilities compound",
              body: "The exam's analytical point: default credentials + no encryption + no update path are not three separate problems - each multiplies the others. In your answer, present one exploit chain (scan -> default login -> botnet) rather than an unconnected list, and the marks follow.",
            },
            diagram: {
              kind: "matrix",
              title: "The IoT attack matrix",
              caption:
                "Layer of attack against impact - most notorious incidents sit in the high-impact device row.",
              axes: { x: "Attack surface (device -> cloud)", y: "Impact (low -> critical)" },
              quadrants: [
                { label: "TL: cloud/API breaches", note: "database theft, credential stuffing - mass data exposure" },
                { label: "TR: firmware backdoors", note: "persistent device compromise, botnets (Mirai)" },
                { label: "BL: jamming/eavesdropping", note: "local availability and privacy loss" },
                { label: "BR: physical tampering", note: "key extraction, malicious re-flashing of exposed nodes" },
              ],
            },
            bullets: [
              "CIA triad: confidentiality, integrity, availability - state it first.",
              "Root causes: default credentials, plaintext links, missing OTA updates, weak APIs, physical exposure.",
              "Attack layers: physical, network (jamming, MITM, DoS), device software, cloud/application.",
              "Mirai (2016): ~600,000 infected devices, ~1 Tbps DDoS peak, all via default credentials.",
              "Worked chain: scan -> 40% default-login rate -> 20,000 bots x 2 Mbps = 40 Gbps from one product line.",
              "Prioritisation: unique credentials nearly free and decisive; hardware roots of trust expensive but definitive.",
              "Device lifetimes of 5-10 years outpace threat evolution - updateability is a security control.",
              "Constrained nodes limit heavyweight crypto - hence lightweight ciphers in 5.7.",
            ],
            table: {
              caption: "Attack taxonomy with defences preview.",
              headers: ["Layer", "Example attack", "Primary defence"],
              rows: [
                ["Physical", "Key extraction, re-flashing", "Secure element, tamper detection"],
                ["Network", "Jamming, MITM, flooding", "TLS/DTLS, authenticated channels"],
                ["Device software", "Malware, parser overflows", "Signed OTA updates, minimal services"],
                ["Application/cloud", "Credential stuffing, API abuse", "Unique credentials, rate limiting, MFA"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the IoT security landscape using the CIA triad. Classify attacks by layer with examples, analyse the Mirai botnet case with numbers, and show how the vulnerabilities compounded into a 40 Gbps-scale threat in the camera-fleet example.",
                marks: 7,
                outline: [
                  "CIA triad definition applied to devices/networks/data.",
                  "Layered taxonomy: physical, network, software, cloud.",
                  "Root causes: defaults, plaintext, no updates, weak APIs.",
                  "Mirai: 600,000 devices, 1 Tbps peak, default credentials.",
                  "Worked chain: scan -> 40% compromise -> 20,000 bots x 2 Mbps = 40 Gbps.",
                  "Compounding argument: controls multiply, not add.",
                  "Prioritise defences by cost-per-risk.",
                ],
              },
              {
                q: "Expand the CIA triad in security terms.",
                marks: 2,
                outline: ["Confidentiality, Integrity, Availability."],
              },
              {
                q: "How did Mirai compromise hundreds of thousands of devices?",
                marks: 3,
                outline: [
                  "Internet-wide scan for Telnet/admin services.",
                  "Login with factory-default credential lists.",
                  "Infected devices recruited into a DDoS botnet.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Security countermeasures: encryption, authentication and updates",
            body: [
              "Countermeasures map one-to-one onto the attack taxonomy. Confidentiality: encrypt links (TLS for TCP-based protocols, DTLS for CoAP/UDP) and payloads (AES-128 is the IoT workhorse; asymmetric crypto like ECC appears in handshakes because it solves key distribution). Integrity and authenticity: message authentication codes (HMAC) on every message, X.509 per-device certificates for identity, and signed firmware images so only vendor-approved code boots. Availability: rate limiting, connection caps and anomaly detection against flooding; jamming resistance via frequency hopping (BLE's 37 data channels, LoRa's spreading gains).",
              "The mechanism of a secure device lifecycle runs start to finish. Manufacturing installs a unique per-device key or certificate (never a shared secret). Provisioning registers the device against the platform with mutual authentication (device verifies server, server verifies device - preventing both MITM and rogue servers). Runtime messages are encrypted and MACed; session keys rotate periodically. Updates arrive as signed images verified by the bootloader before flashing - a failed or unsigned image is rejected, with a rollback slot if the new one misbehaves. Network architecture adds segmentation: IoT devices live on a VLAN separate from personal computers, so a compromised camera cannot reach your laptop.",
              "A worked defence stack with numbers: the 200-node parking deployment. Identity: each node holds a unique X.509 key installed at manufacture; platform enrollment cost about 0.05 dollar per device of engineering effort amortised. Transport: TLS 1.3 to the MQTT broker (or DTLS 1.2 for the CoAP variant) - handshake adds about 5-10 KB of traffic once per session, negligible at 1 message/30 s. Payload: AES-128-CCM (authenticated encryption) on each 12-byte reading costs about 40 microseconds on a Cortex-M4 - invisible at the sampling rate. Updates: signed OTA images (ECDSA P-256 signature verification, about 100 ms on the MCU) delivered via staged rollout of 20 devices first; network: devices on an isolated VLAN with only broker egress allowed. Total added cost: under 1 dollar per device and a few milliseconds of latency - security is cheap when designed in.",
              "Advantages of defence-in-depth: any single control can fail without exposing the system (an expired certificate is caught by signature checks; a leaked key is contained by rotation). Limitations: constrained devices cannot afford RSA-2048 handshakes (hence ECC and lightweight ciphers like AES-128-CCM or ChaCha20), key management at fleet scale is an operational discipline (revocation lists, rotation schedules), physical attacks on captured devices remain hard to fully prevent, and retrofitting security into deployed fleets is far more expensive than designing it in. Exam answers should pair each countermeasure with the attack it defeats and one cost/latency number.",
            ],
            keyTerms: [
              { term: "TLS / DTLS", definition: "Transport and datagram security layers protecting TCP- and UDP-based IoT protocols respectively." },
              { term: "AES-128-CCM", definition: "Authenticated encryption combining encryption and integrity in one pass - standard on constrained MCUs." },
              { term: "X.509 certificate", definition: "Per-device identity credential enabling mutual authentication with the platform." },
              { term: "Signed OTA update", definition: "Firmware image with a verifiable signature (e.g. ECDSA P-256) checked by the bootloader before flashing." },
              { term: "Network segmentation", definition: "Isolating IoT devices on their own VLAN so a compromise cannot reach other systems." },
            ],
            callout: {
              type: "tip",
              title: "Pair every defence with its attack and a number",
              body: "The scoring pattern for countermeasure questions: TLS/DTLS defeats eavesdropping and MITM; X.509 defeats impersonation; signed OTA defeats persistent malware; segmentation contains a breach. Then quantify: AES-128-CCM ~40 us on Cortex-M4, TLS handshake 5-10 KB once per session - security designed in costs under a dollar per device.",
            },
            diagram: {
              kind: "fork",
              title: "Which countermeasure for which goal?",
              caption:
                "Map the CIA goal to the mechanism - then justify with cost and latency numbers.",
              start: "A security requirement must be met - which control?",
              branches: [
                { label: "Keep data secret", outcome: "TLS/DTLS + AES-128-CCM; ~40 us per message on Cortex-M4", good: true },
                { label: "Prove who is talking", outcome: "Per-device X.509 mutual authentication; defeats MITM and rogue servers", good: true },
                { label: "Keep code trustworthy", outcome: "Signed OTA (ECDSA P-256, ~100 ms verify) with rollback slots", good: true },
                { label: "Survive a breach", outcome: "VLAN segmentation, key rotation, staged rollout of updates", good: true },
              ],
            },
            bullets: [
              "Confidentiality: TLS (TCP) / DTLS (UDP) transport security; AES-128 payload encryption.",
              "Integrity/authenticity: HMAC on messages, X.509 per-device certificates, signed firmware.",
              "Availability: rate limiting, connection caps, frequency hopping against jamming.",
              "Lifecycle: unique key at manufacture -> mutual-auth provisioning -> rotating session keys.",
              "Updates: bootloader verifies ECDSA signature (~100 ms) before flashing; rollback slot for failures.",
              "Worked stack: X.509 fleet enrollment ~0.05 USD/device; TLS handshake 5-10 KB once; AES-CCM 40 us/message.",
              "Segmentation: isolated IoT VLAN with broker-only egress contains any breach.",
              "Limits: constrained devices need ECC/lightweight ciphers; key management is operational work; physical capture stays hard to prevent.",
            ],
            table: {
              caption: "Attack-to-defence mapping.",
              headers: ["Attack", "Defeats", "Countermeasure", "Cost"],
              rows: [
                ["Eavesdropping", "Confidentiality", "TLS/DTLS + AES-128", "5-10 KB per session"],
                ["MITM / impersonation", "Authenticity", "X.509 mutual authentication", "Cert management"],
                ["Persistent malware", "Integrity of code", "Signed OTA + secure boot", "~100 ms verify"],
                ["DoS flooding", "Availability", "Rate limiting, anomaly detection", "Platform-side"],
                ["LAN propagation", "Containment", "VLAN segmentation", "Network config"],
              ],
            },
            examQuestions: [
              {
                q: "Explain the IoT countermeasure stack for confidentiality, integrity and availability. Describe the secure device lifecycle from manufacture to signed OTA updates, and quantify the cost/latency overhead for a 200-node deployment.",
                marks: 7,
                outline: [
                  "Map CIA goals to mechanisms.",
                  "Transport: TLS vs DTLS choice by protocol.",
                  "Crypto numbers: AES-128-CCM 40 us/message on Cortex-M4.",
                  "Identity: unique X.509 at manufacture, mutual authentication.",
                  "Updates: ECDSA P-256 signed images, bootloader verification, rollback.",
                  "Deployment numbers: 0.05 USD/device enrollment, 5-10 KB handshake, staged rollout.",
                  "Architecture: VLAN segmentation and key rotation; state residual limitations.",
                ],
              },
              {
                q: "Why is DTLS used with CoAP instead of TLS?",
                marks: 2,
                outline: ["CoAP runs over UDP; DTLS is TLS adapted to datagram transport."],
              },
              {
                q: "What does a signed OTA update guarantee and how is it verified?",
                marks: 3,
                outline: [
                  "Guarantees firmware authenticity and integrity (vendor-signed, unmodified).",
                  "Bootloader verifies the ECDSA signature before flashing; unsigned images rejected.",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "Privacy engineering and the closing case study",
            body: [
              "Privacy protects the people behind the data, and IoT makes it hard because sensing is continuous, often unnoticed, and rich in inference (a motion sensor reveals presence; a smart meter reveals appliance usage; location traces reveal routines). Core principles: data minimisation (collect only what the purpose needs), purpose limitation and consent (users know what is collected and why), anonymisation or pseudonymisation wherever possible, transparency and access (users can see and delete their data), and security as a privacy precondition (encrypted storage and transport, access control). Regulations (GDPR-style regimes) make several of these legal obligations, not courtesies.",
              "The mechanism of privacy engineering applies at every lifecycle stage. At collection: sample at the coarsest rate that serves the purpose (occupancy as a boolean, not a camera feed, where possible). In transit and at rest: encryption plus pseudonymous device IDs instead of personal names. In processing: aggregate and downgrade - a city needs zone-level occupancy, not per-person traces; k-anonymity groups records so no individual stands alone. At retention: automatic expiry. In sharing: data-use agreements and on-device inference (4.6) that sends decisions, not raw data, upward.",
              "A worked privacy design with numbers: the 200-node parking city revisited. Raw sensing: magnetometer presence booleans (1 byte) - no vehicle identity is captured at all, so licence-plate privacy never arises. Analytics needs zone-level occupancy: aggregate 50 bays into one zone count published every minute - the platform stores zone aggregates (200 -> 4 zone streams, a 50x reduction in identifiability) and deletes bay-level raw after 7 days. Access control: three roles - operators see zone dashboards, analysts see 24-hour-old aggregates only, no role sees bay-level history beyond retention. The smart-meter literature quantifies the stakes: 15-minute consumption traces allow appliance-level inference (non-intrusive load monitoring can identify a dryer cycle with high confidence), which is why the meter design of 1.1 chose 15-minute aggregation rather than 1-second sampling - a privacy decision disguised as a bandwidth decision.",
              "The closing case study composes the elective: the smart city of 5.2 is built from Unit I architecture (perception nodes, network, platform, application), Unit II connectivity (LoRaWAN parking, Zigbee lighting, MQTT backbone), Unit III hardware (battery sensor nodes on ESP32-class radios), Unit IV platforms and processing (edge aggregation, time-series storage, dashboards), and Unit V discipline (X.509 identity, signed OTA, VLANs, minimised data). Advantages of seeing it whole: every design decision traces to a syllabus concept, which is exactly how 7-mark synthesis questions are scored. Limitations to acknowledge honestly: privacy versus utility is a genuine trade-off (finer data enables better service but erodes anonymity), and every added control costs latency, power or money - the engineer's job is making those trade-offs explicit rather than pretending they are free.",
            ],
            keyTerms: [
              { term: "Data minimisation", definition: "Collecting only the data the stated purpose requires - the first and cheapest privacy control." },
              { term: "Pseudonymisation", definition: "Replacing identities with tokens so data cannot be linked to a person without extra keys." },
              { term: "K-anonymity", definition: "Aggregating so each published record is indistinguishable from at least k-1 others." },
              { term: "Non-intrusive load monitoring", definition: "Inferring appliance usage from smart-meter power traces - the canonical IoT privacy risk example." },
              { term: "Purpose limitation", definition: "Data collected for one stated purpose may not be reused for others without new consent." },
            ],
            callout: {
              type: "exam",
              title: "Privacy answers need the trade-off sentence",
              body: "End every privacy answer with the explicit trade-off: finer data = better service but weaker anonymity; every control costs latency, power or money. Then show one mechanism (zone aggregation 200 -> 4 streams, 50x less identifiable, raw deleted after 7 days). Trade-off + mechanism = full marks.",
            },
            diagram: {
              kind: "cycle",
              title: "Privacy engineering across the data lifecycle",
              caption:
                "Five controls, one per lifecycle stage - the same loop drawn in 4.1 with privacy duties attached.",
              steps: [
                { label: "Collect minimally", note: "presence booleans, 15-minute meter aggregates" },
                { label: "Protect in transit", note: "TLS/DTLS, pseudonymous device IDs" },
                { label: "Process aggregated", note: "zone-level counts; k-anonymity on published data" },
                { label: "Retain briefly", note: "bay-level raw deleted after 7 days" },
                { label: "Control access", note: "role-based views; operators vs analysts" },
                { label: "Audit and review", note: "verify purposes, honour deletion rights" },
              ],
            },
            bullets: [
              "Privacy principles: minimisation, purpose limitation, consent, anonymisation, transparency, security precondition.",
              "Smart meters prove the risk: 15-minute traces enable appliance-level inference (NILM).",
              "Collection controls: coarsest sampling that serves the purpose (presence boolean, not camera).",
              "Processing controls: zone aggregation 200 -> 4 streams (50x less identifiable); k-anonymity.",
              "Retention: raw deleted after 7 days; role-based access separates operators from analysts.",
              "On-device inference sends decisions, not raw data, upward (links to 4.6).",
              "Case study: the 5.2 city composed of concepts from all five units.",
              "Honest limits: privacy vs utility trade-off; controls cost latency, power and money.",
            ],
            table: {
              caption: "Privacy controls by lifecycle stage.",
              headers: ["Stage", "Control", "Example"],
              rows: [
                ["Collection", "Minimisation", "1-byte presence, no plate capture"],
                ["Transport", "Encryption + pseudonyms", "DTLS, device tokens"],
                ["Processing", "Aggregation", "Zone-level occupancy counts"],
                ["Retention", "Expiry", "Raw deleted after 7 days"],
                ["Access", "Role separation", "Analysts see 24-h-old aggregates only"],
              ],
            },
            examQuestions: [
              {
                q: "Explain privacy engineering principles for IoT and apply them across the data lifecycle. Using the smart-meter and parking examples, show how aggregation and retention policy reduce identifiability, and discuss the privacy-versus-utility trade-off.",
                marks: 7,
                outline: [
                  "Principles: minimisation, purpose limitation, anonymisation, transparency.",
                  "NILM example: 15-minute meter traces reveal appliance usage.",
                  "Collection: presence booleans instead of identity-bearing sensors.",
                  "Processing: 200 bays -> 4 zone streams, 50x reduction.",
                  "Retention: raw deleted after 7 days; role-based access.",
                  "On-device inference sends decisions not raw data.",
                  "Explicit trade-off: finer data vs anonymity and its costs.",
                ],
              },
              {
                q: "What is non-intrusive load monitoring?",
                marks: 2,
                outline: ["Inferring which appliances are running from smart-meter power consumption traces."],
              },
              {
                q: "Name two privacy principles and one mechanism for each.",
                marks: 3,
                outline: [
                  "Minimisation - coarse sampling (1-byte presence).",
                  "Anonymisation - k-anonymous zone aggregation or pseudonymous IDs.",
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
      heading: "Exam weightage - where to spend the hours",
      body: [
        "RGPV papers for this elective typically weight the protocol and architecture material most heavily: expect one full 7-marker from Unit I (definition/architecture/levels), two from Unit II (MQTT/CoAP or a protocol comparison), one to two from Units III-IV (boards, buses, edge-fog-cloud or platforms), and one from Unit V (applications or security). Treat protocols and architecture as the core; applications and security reward breadth with numbers.",
      ],
      weightedTopics: [
        { topic: "IoT architecture, physical and logical design", weight: "~10-14 marks", note: "Definition + 5-layer stack + 4 communication models; almost guaranteed." },
        { topic: "MQTT vs CoAP with QoS details", weight: "~8-12 marks", note: "Quote ports (1883/5683), headers (2 B / 4 B), QoS 0/1/2, CON/NON." },
        { topic: "Wireless protocol comparison (Zigbee, BLE, LoRaWAN, 6LoWPAN)", weight: "~8-10 marks", note: "Range/rate/power table memorised by heart; one design question." },
        { topic: "Arduino and Raspberry Pi with buses (I2C/SPI/UART)", weight: "~8-10 marks", note: "Spec table + one code sketch + bus trio (wires, speed, addressing)." },
        { topic: "Edge, fog, cloud and platforms", weight: "~6-10 marks", note: "Latency ladder and one task-placement example with numbers." },
        { topic: "Applications (home, city, agriculture, health, IIoT)", weight: "~6-8 marks", note: "Four domains each with one measured outcome number." },
        { topic: "Security: attacks, countermeasures, privacy", weight: "~6-8 marks", note: "CIA triad, Mirai with numbers, defence-to-attack mapping." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming a five-day week with two hours a day, this schedule covers all 40 sections twice - once for understanding, once for revision - and leaves the last week for full papers and diagram practice.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I fundamentals", tasks: ["Definition, characteristics, evolution (1.1-1.2)", "Physical/logical design, stack and models (1.3-1.4)", "Architecture, enabling tech, levels (1.5-1.8)"] },
        { week: "Week 2", focus: "Unit II - application protocols", tasks: ["M2M vs IoT (2.1)", "MQTT: topics, QoS, last will (2.2)", "CoAP: CON/NON, Observe, discovery (2.3)"] },
        { week: "Week 3", focus: "Unit II - wireless technologies", tasks: ["Zigbee roles and mesh (2.4)", "BLE lifecycle and GATT (2.5)", "LoRaWAN classes and 6LoWPAN (2.6-2.7)", "Master comparison table (2.8)"] },
        { week: "Week 4", focus: "Unit III hardware", tasks: ["Sensor characteristics + actuators (3.1-3.2)", "Arduino and Pi with one sketch each (3.3-3.5)", "Modules and buses (3.6-3.7)", "Prototyping workflow (3.8)"] },
        { week: "Week 5", focus: "Unit IV + Unit V applications", tasks: ["Data lifecycle, cloud, platforms (4.1-4.3)", "Edge/fog/cloud, streaming, WSN (4.4-4.7)", "Smart home, city, agriculture, health (5.1-5.4)"] },
        { week: "Week 6", focus: "Unit V security + revision", tasks: ["IIoT pyramid, attacks, defences (5.5-5.7)", "Privacy and case study (5.8)", "Two full papers under time; redraw 10 diagrams from memory"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Start every definition with the formal sentence, then immediately attach one worked example with numbers (devices, payload, interval).",
        "Draw the 5-layer protocol stack bottom-up and name at least two protocols per layer - one-per-layer answers lose marks.",
        "For protocol questions, quote the numbers: MQTT 2-byte header and QoS 0/1/2; CoAP 4-byte header on UDP 5683; Zigbee 250 kbps; LoRaWAN 0.3-50 kbps over 2-15 km.",
        "For 'design a system' questions, use the elimination procedure: tabulate range/rate/payload/latency/power, strike out failures, pick the survivor, justify with arithmetic.",
        "Board comparisons need both the specs table and a scenario application - neither alone earns all marks.",
        "Security answers follow CIA triad -> layered attack taxonomy -> named case (Mirai, 600k devices, 1 Tbps) -> defence mapping.",
        "Time-box: 2-3 mark questions in 4-6 minutes, 7-mark questions in 12-14 minutes; diagrams first, prose second.",
        "Never invent RGPV year citations - answer questions on their merits rather than guessing which paper they came from.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Saying MQTT guarantees delivery - only QoS 1/2 do; QoS 0 is fire-and-forget.",
        "Confusing LoRa (the PHY modulation) with LoRaWAN (the MAC/network layer).",
        "Promising instant downlink control on LoRaWAN Class A - downlinks wait for the next uplink.",
        "Calling Zigbee routers battery-powered - they must be mains-powered to relay continuously.",
        "Using accuracy and precision interchangeably - they are defined separately and asked separately.",
        "Forgetting the flyback diode and the 'GPIO cannot drive loads directly' rule in actuator answers.",
        "Placing a Raspberry Pi in a battery-powered field node - 4-6 W kills the design; it is a gateway.",
        "Mixing up 6LoWPAN (adaptation layer) with Zigbee (network/application layers) - both ride 802.15.4.",
        "Describing fog as 'small cloud' - its distinctive duties are site aggregation and offline autonomy.",
        "Claiming security is free or impossible - the correct answer is the cost number (e.g. AES-CCM at 40 us per message).",
      ],
    },
  ],
};
