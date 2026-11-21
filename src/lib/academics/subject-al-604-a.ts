/**
 * Academics - RGPV AI&ML 6th-semester subject: AL-604(A) Cloud Computing.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const al604a: AcademicSubject = {
  id: "al-604-a",
  code: "AL-604(A)",
  title: "Cloud Computing",
  semester: "VI Semester",
  program: "RGPV · Artificial Intelligence & Machine Learning",
  tagline:
    "The complete visual guide to AL-604(A): the cloud introduction, service models, virtualization and architecture, storage and programming, and security with emerging trends - every syllabus point paired with a worked example you can redraw in the exam hall.",
  description:
    "Unit I defines the cloud through the five NIST characteristics and the economics that made it inevitable. Unit II dissects IaaS, PaaS and SaaS along with the shared responsibility matrix and the specialized models built on them. Unit III goes inside the hypervisor - full and para-virtualization, containers, Kubernetes, and the data-centre machinery of load balancing and SLAs. Unit IV covers object, block and file storage, cloud databases, Hadoop and Spark, and a full MapReduce worked example. Unit V closes with security threats and IAM, elasticity patterns, fog and edge computing, and the case studies examiners love to quote.",
  accentColor: "#38bdf8",
  emoji: "CC",
  unitCount: 5,
  totalSections: 30,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to Cloud Computing",
      summary:
        "The lay of the land: the NIST definition and its five essential characteristics, the historical line from grid and utility computing to cloud, the four deployment models with their trade-offs, the drivers and risks of adoption, and the CapEx-to-OpEx economics illustrated with a real cost calculation.",
      chapter: {
        number: "01",
        title: "Cloud Fundamentals and Economics",
        intro:
          "Unit I answers the question every examiner opens with: what exactly is cloud computing and why did it win? You will learn the NIST SP 800-145 definition and its five essential characteristics, trace the evolution from mainframe time-sharing through grid and utility computing, compare public, private, hybrid and community deployment models, weigh benefits against risks, and work through a CapEx versus OpEx cost example you can reproduce with a calculator in the exam.",
        inOneBreath:
          "The NIST definition says cloud computing is a model for ubiquitous, convenient, on-demand network access to a shared pool of configurable resources that can be provisioned and released with minimal management effort; its five essential characteristics are on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service. Grid computing aggregated geographically spread machines for one job, utility computing priced compute like electricity per unit consumed, and cloud commercialised both ideas on virtualized data centres. Deployment models differ by tenant population: public for everyone, private for one organisation, hybrid joining the two, community for a group with shared concerns. Adoption is driven by cost conversion from capital to operations, speed of provisioning and global reach, but introduces risks of vendor lock-in, data privacy and network dependence. A worked example shows 100 virtual machines cost roughly 7,000 dollars per month on cloud versus a 300,000 dollar upfront server purchase on-premise.",
        sections: [
          {
            number: "1.1",
            title: "What is cloud computing: the NIST definition and five characteristics",
            body: [
              "The NIST Special Publication 800-145 definition, quoted verbatim in almost every RGPV paper, states: cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (networks, servers, storage, applications and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction. Every phrase carries marks. 'On-demand network access' means the consumer orders resources through a portal or API without a purchase order; 'shared pool' means the same physical servers host many tenants; 'minimal management effort' means the provider, not the consumer, patches and powers the infrastructure.",
              "The definition continues with five essential characteristics, and RGPV asks you to list and explain each. On-demand self-service: a consumer logs in and provisions a server in about 60 seconds, unilaterally, with no human sales conversation. Broad network access: capabilities are available over the network through standard mechanisms (HTTPS, REST APIs) and accessible from thin clients, phones and laptops alike. Resource pooling: the provider's resources are pooled to serve multiple consumers using multi-tenancy, with physical and virtual resources dynamically assigned per demand; the consumer generally cannot know the exact physical location of their data, only the region such as 'ap-south-1' (Mumbai).",
              "Rapid elasticity is the characteristic that separates cloud from classic hosting. Capacity can be elastically provisioned and released, often automatically, to match demand, and to the consumer the pool appears unlimited and can be appropriated in any quantity at any time. Concretely: an exam-results website running 4 virtual machines normally can scale to 200 machines within 3 to 5 minutes when results are published, then shrink back the same evening - owning that hardware for one evening a year would be absurd. Measured service: resource usage is monitored, controlled and reported, providing transparency for both provider and consumer; you pay for what you used, metered per hour, per GB-month, or per request.",
              "A concrete pricing number grounds measured service. Amazon S3 standard storage charges about 0.023 US dollars per GB per month, so storing 1,000 GB costs roughly 23 dollars a month with no minimum commitment; EC2 compute is metered per second with a 60-second minimum. Contrast a purchased server: you pay once whether you use it 24 hours a day or 4 hours a month. The five characteristics together explain the business model - self-service lowers the provider's sales cost, pooling raises hardware utilisation from the typical 10-20 percent of enterprise data centres toward 50-80 percent, and metering turns computing into a utility bill.",
            ],
            bullets: [
              "NIST SP 800-145 defines cloud as on-demand network access to a shared pool of configurable resources, rapidly provisioned with minimal management effort.",
              "On-demand self-service: provision a virtual machine in under a minute through a console or API, no human provider interaction.",
              "Broad network access: standard HTTP/REST mechanisms reachable from phones, laptops and thin clients.",
              "Resource pooling: multi-tenancy on shared hardware; the consumer knows the region (e.g. ap-south-1) but not the exact rack.",
              "Rapid elasticity: 4 servers scale to 200 in minutes and appear unlimited to the consumer.",
              "Measured service: pay-per-use metering - S3 at about 0.023 dollars per GB-month, EC2 billed per second.",
              "Pooling raises utilisation: enterprise data centres often idle at 10-20 percent, cloud providers target 50-80 percent.",
            ],
            table: {
              caption: "The five NIST essential characteristics mapped to everyday cloud behaviour.",
              headers: ["Characteristic", "Plain meaning", "Concrete example"],
              rows: [
                ["On-demand self-service", "Self-service portal, no sales call", "Launch an EC2 instance from the console in 60 seconds"],
                ["Broad network access", "Reachable over standard internet protocols", "REST API over HTTPS works from a phone browser"],
                ["Resource pooling", "Many tenants share one physical fleet", "Your VM and 40 others run on one 128-core host"],
                ["Rapid elasticity", "Scale out and in automatically", "4 to 200 servers during result-day traffic spike"],
                ["Measured service", "Usage is metered and billed per unit", "0.023 dollars per GB-month of S3 standard storage"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From owned servers to metered service",
              caption:
                "Each step removes a human or capital bottleneck - the five characteristics in action.",
              steps: [
                { label: "Consumer opens web console", note: "self-service, no ticket" },
                { label: "Requests 8 virtual machines", note: "on-demand, any quantity" },
                { label: "Provider carves them from the pooled fleet", note: "resource pooling" },
                { label: "Machines live in any rack of the region", note: "location transparency" },
                { label: "Usage metered per second and billed", note: "measured service" },
                { label: "Load drops, machines auto-released", note: "rapid elasticity" },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote NIST, then explain phrase by phrase",
              body: "The 7-mark version of this question is 'Define cloud computing and explain its five essential characteristics.' Full marks come from quoting the NIST definition once, then giving one sentence and one concrete example per characteristic. An answer that only lists the five names typically earns 2 of 7 marks.",
            },
            keyTerms: [
              { term: "NIST SP 800-145", definition: "The US National Institute of Standards and Technology publication containing the standard definition of cloud computing." },
              { term: "Multi-tenancy", definition: "Multiple consumers (tenants) sharing the same physical hardware while remaining logically isolated from each other." },
              { term: "Rapid elasticity", definition: "Ability to scale resources out and in automatically and quickly, appearing unlimited to the consumer." },
              { term: "Measured service", definition: "Pay-per-use metering and reporting of resource consumption such as per-second compute or per-GB storage." },
              { term: "Region", definition: "A provider's geographic cluster of data centres, e.g. ap-south-1 in Mumbai, named because consumers cannot choose the exact building." },
            ],
            examQuestions: [
              {
                q: "Define cloud computing according to NIST and explain its five essential characteristics with one example each.",
                marks: 7,
                outline: [
                  "Quote the NIST SP 800-145 definition verbatim: on-demand network access to a shared pool of configurable resources, rapidly provisioned with minimal management effort.",
                  "On-demand self-service: consumer provisions unilaterally via console/API; example - launch a server in 60 seconds.",
                  "Broad network access: standard mechanisms (HTTPS, REST) from heterogeneous clients.",
                  "Resource pooling: multi-tenant fleet, provider serves many consumers from shared hardware with location transparency.",
                  "Rapid elasticity: capacity scales out and in automatically; example - 4 servers to 200 on result day.",
                  "Measured service: usage monitored and billed per unit; example - 0.023 dollars per GB-month on S3.",
                  "Close by noting the characteristics enable the utility-like business model and higher utilisation than enterprise data centres.",
                ],
              },
              {
                q: "Which NIST characteristic distinguishes cloud computing from traditional web hosting, and why?",
                marks: 3,
              },
              {
                q: "List the five essential characteristics of cloud computing and name the NIST publication that defines them.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.2",
            title: "Evolution: from mainframes through grid and utility computing to cloud",
            body: [
              "Cloud computing did not appear from nowhere; it is the fourth stage of a cycle the industry has traced before. In the 1960s mainframes served many users through time-sharing: expensive machines were shared because no one could afford a private one, and terminals accessed them over serial lines. When cheap personal computers arrived in the 1980s computing decentralised; then client-server architectures of the 1990s re-centralised data on Unix and Windows servers. Each swing between centralised and decentralised computing sharpened the technology the next stage needed - time-sharing begat multi-tenancy, client-server begat network protocols, and both made the cloud's centralised-shared model natural.",
              "Grid computing, popular in the late 1990s and 2000s, federated geographically dispersed machines from different organisations into one virtual supercomputer for a single computational goal - the SETI@home project harnessed millions of volunteer PCs, and academic grids built on the Globus Toolkit submitted jobs across universities. Grid solved parallelism but not commerce: resources were donated, heterogeneous, and scheduled in batches of hours, not provisioned in seconds. Utility computing applied the electricity-business metaphor: IBM's 2002 'on-demand' initiative and Sun's pay-per-use grid priced compute by the unit consumed, the conceptual ancestor of today's per-second EC2 billing.",
              "The commercial cloud arrived in 2006 when Amazon launched EC2 (Elastic Compute Cloud) and S3 (Simple Storage Service), combining three ingredients the earlier stages lacked: virtualization (one physical server safely hosts many tenants), self-service web APIs (no human approval in the loop), and pay-per-use metering. Google App Engine followed in 2008, Microsoft Azure in 2010. The name 'cloud' itself came from network engineers' habit of drawing the internet as a cloud in diagrams - a boundary behind which the consumer need not see detail.",
              "For the exam, remember the sequence and the one-line contribution of each era. Mainframe time-sharing contributed the idea of shared expensive hardware; cluster computing contributed commodity nodes connected by a fast LAN; grid contributed federation of heterogeneous sites and batch job scheduling; utility computing contributed the per-use pricing model; and cloud combined virtualization, self-service and metering into a mass-market platform. A common exam variant asks you to differentiate grid computing from cloud computing in a table - the expected contrast covers ownership (federated vs single provider), provisioning speed (hours vs seconds), payment (donated/grant vs metered), and resource type (heterogeneous donated machines vs uniform virtualized fleet).",
            ],
            bullets: [
              "1960s mainframe time-sharing: many users share one expensive machine - the ancestor of multi-tenancy.",
              "Grid computing: federates geographically dispersed, heterogeneous machines for one goal (SETI@home, Globus Toolkit).",
              "Utility computing: pay-per-use pricing modelled on electricity bills (IBM on-demand, Sun grid).",
              "Cloud's 2006 inflection: Amazon EC2 and S3 combined virtualization + self-service APIs + metering.",
              "Timeline: App Engine 2008, OpenStack 2010, Azure generally available 2010.",
              "Grid vs cloud: batch scheduling of donated heterogeneous nodes vs on-demand metered virtualized fleet.",
              "The word 'cloud' comes from the diagramming convention of drawing the network as a cloud.",
            ],
            table: {
              caption: "Grid computing versus cloud computing - the standard comparison table.",
              headers: ["Aspect", "Grid computing", "Cloud computing"],
              rows: [
                ["Resource ownership", "Federated across organisations", "Owned by one provider"],
                ["Provisioning time", "Hours; batch queues", "Seconds to minutes; self-service"],
                ["Billing", "Usually free or grant-funded", "Metered pay-per-use"],
                ["Resource type", "Heterogeneous donated machines", "Uniform virtualized instances"],
                ["Typical workload", "Large scientific batch jobs", "Web apps, storage, analytics, anything"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Five eras that produced the cloud",
              caption:
                "Each stage contributes one capability the next one monetises - a reliable 7-mark skeleton.",
              stages: [
                { label: "Mainframe time-sharing (1960s)", note: "shared hardware, terminals" },
                { label: "Cluster computing (1980s-90s)", note: "commodity nodes, fast LAN" },
                { label: "Grid computing (late 1990s)", note: "federation + batch scheduling" },
                { label: "Utility computing (2000s)", note: "pay-per-use pricing idea" },
                { label: "Cloud (2006 onwards)", note: "virtualization + self-service + metering" },
              ],
            },
            callout: {
              type: "tip",
              title: "Anchor the timeline to 2006",
              body: "Every date question resolves from one anchor: EC2 and S3 launched in 2006. Work backwards for grid/utility and forwards for App Engine (2008) and Azure (2010). Writing one wrong-but-plausible date like 'EC2 in 1998' signals rote learning to the examiner.",
            },
            keyTerms: [
              { term: "Time-sharing", definition: "1960s technique letting many users share one mainframe by interleaving execution slices." },
              { term: "Grid computing", definition: "Federation of dispersed, heterogeneous machines from multiple organisations used collectively for large jobs." },
              { term: "Utility computing", definition: "Pricing model in which compute is sold in metered units like electricity." },
              { term: "Globus Toolkit", definition: "Middleware that let academic grids schedule jobs and move data across sites." },
              { term: "EC2 / S3 (2006)", definition: "Amazon's Elastic Compute Cloud and Simple Storage Service, the launch services of commercial cloud computing." },
            ],
            examQuestions: [
              {
                q: "Trace the evolution of cloud computing from mainframe time-sharing through grid and utility computing to the modern cloud, and differentiate grid computing from cloud computing.",
                marks: 7,
                outline: [
                  "Start with 1960s mainframe time-sharing: shared expensive hardware, ancestor of multi-tenancy.",
                  "Cluster computing: commodity nodes on a fast LAN acting as one machine.",
                  "Grid computing: federation of heterogeneous sites (SETI@home, Globus) with batch scheduling.",
                  "Utility computing: per-use pricing modelled on electricity (IBM on-demand, Sun grid).",
                  "Cloud 2006: EC2 and S3 combine virtualization, self-service APIs and metering; App Engine 2008, Azure 2010.",
                  "Give the grid-vs-cloud comparison: ownership, provisioning time, billing, resource uniformity.",
                  "Conclude that cloud commercialised the shared-resource ideas the earlier eras proved technically.",
                ],
              },
              {
                q: "Why did grid computing fail to become a mass-market service even though it shared resources like the cloud does?",
                marks: 3,
              },
              {
                q: "In which year were Amazon EC2 and S3 launched, and why is that year significant?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.3",
            title: "Deployment models: public, private, hybrid and community clouds",
            body: [
              "The NIST definition names four deployment models, classified by who owns the infrastructure and who may use it. A public cloud sells capacity to the general public over the internet: Amazon Web Services, Microsoft Azure and Google Cloud Platform own the hardware, operate it at massive scale, and bill each tenant metered. Resources are virtualized and isolated but physically shared - your database and a stranger's blog may live on the same host. Public cloud excels at elasticity and zero upfront investment; its weaknesses are less control over security posture, data location, and the network dependency that every access imposes.",
              "A private cloud serves exactly one organisation. The hardware may sit in the organisation's own data centre or be hosted for it, but the cloud platform - self-service portal, virtualization, metering - is built with technologies like OpenStack, VMware vSphere or Azure Stack. Private cloud gives maximum control, satisfies data-sovereignty rules (for example defence or health records that may not leave the country), and can be tuned for predictable workloads; the costs are capital expenditure, an operations team, and capacity that must be sized for peak even if average use is low. A common exam statement: 'private cloud has all five NIST characteristics - what differs is the tenant population, not the technology.'",
              "A hybrid cloud binds a private and a public cloud with standard technology that allows data and applications to move between them - AWS Outposts and Azure Arc extend provider APIs into on-premise racks, and a VPN or dedicated line joins the two estates. The classic pattern keeps sensitive data and steady baseline workloads private, and bursts the variable or seasonal load to public cloud, a technique called cloud bursting. A community cloud is shared by several organisations with common concerns - mission, security requirements, policy or compliance - such as government departments sharing a state cloud, or banks building a joint financial-services cloud; cost is split among the members and policies reflect the shared community requirement.",
              "Choosing between them is a standard exam scenario, so rehearse the decision logic. A startup with no data centre and spiky traffic: public, because zero CapEx and elasticity matter most. A defence department whose records may never leave national soil: private, for sovereignty and control. A university with an existing data centre, steady daytime load, and an annual admission-results spike: hybrid with cloud bursting onto public capacity. Several hospitals governed by one health-data policy: community. Expect to draw the comparison table and justify one choice in a sentence per criterion - control, cost model, scalability and compliance.",
            ],
            bullets: [
              "Public cloud: infrastructure owned by a provider, sold to the general public, fully shared hardware (AWS, Azure, GCP).",
              "Private cloud: one organisation's dedicated platform - OpenStack, vSphere or Azure Stack - maximum control, highest CapEx.",
              "Hybrid cloud: private and public bound by standard technology (Outposts, Arc, VPN) enabling cloud bursting.",
              "Community cloud: shared by organisations with common mission or compliance needs (government, banking consortia).",
              "Decision driver: sensitivity of data and predictability of load decide between public elasticity and private control.",
              "All four models can satisfy the five NIST characteristics; the tenant population is the differentiator.",
              "Cloud bursting: keep baseline on private infrastructure and overflow the spike onto public capacity.",
            ],
            table: {
              caption: "The four deployment models compared on the criteria RGPV asks for.",
              headers: ["Model", "Who uses it", "Cost model", "Example"],
              rows: [
                ["Public", "General public, any tenant", "OpEx, pay-per-use", "AWS, Azure, GCP"],
                ["Private", "One organisation", "CapEx + operations", "OpenStack, VMware vSphere"],
                ["Hybrid", "One organisation, two estates", "CapEx + burst OpEx", "AWS Outposts + on-premise"],
                ["Community", "Group with shared concerns", "Cost split among members", "State government cloud"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a deployment model",
              caption:
                "Match the tenant profile to the model - the exact reasoning an exam scenario wants.",
              start: "Who will run workloads here?",
              branches: [
                { label: "Anyone, spiky demand", outcome: "Public cloud - zero CapEx, instant elasticity", good: true },
                { label: "One organisation, sensitive data", outcome: "Private cloud - full control, sovereignty", good: true },
                { label: "Steady private load plus spikes", outcome: "Hybrid - baseline private, burst public", good: true },
                { label: "Several organisations, one policy", outcome: "Community cloud - shared cost, shared rules", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not equate private cloud with 'just my servers'",
              body: "A rack of servers you log into one at a time is not a private cloud - the NIST characteristics (self-service, pooling, elasticity, metering) must still hold. In an exam answer, state that private cloud adds an orchestration layer such as OpenStack on top of the organisation's hardware.",
            },
            keyTerms: [
              { term: "Public cloud", definition: "Provider-owned infrastructure offered to the general public on a pay-per-use basis over the internet." },
              { term: "Private cloud", definition: "Cloud infrastructure operated exclusively for a single organisation, on-premise or hosted." },
              { term: "Hybrid cloud", definition: "Private and public clouds bound together so data and workloads can move between them." },
              { term: "Community cloud", definition: "Infrastructure shared by several organisations with common security, policy or mission requirements." },
              { term: "Cloud bursting", definition: "Hybrid pattern where a spike overflows from private infrastructure onto public cloud capacity." },
            ],
            examQuestions: [
              {
                q: "Explain the four cloud deployment models with examples, and recommend a model for (i) a defence organisation with strict data-sovereignty rules and (ii) a startup with spiky traffic and no data centre.",
                marks: 7,
                outline: [
                  "Define deployment model as a classification by owner and tenant population.",
                  "Public: provider-owned, general public, pay-per-use; example AWS/Azure/GCP.",
                  "Private: dedicated to one organisation via OpenStack/vSphere; control and sovereignty, high CapEx.",
                  "Hybrid: private + public joined by standard technology; cloud bursting pattern.",
                  "Community: shared by organisations with common concerns; example government cloud.",
                  "Recommendation (i): private, because records cannot leave national soil and control is maximal.",
                  "Recommendation (ii): public, because zero upfront cost and elasticity fit spiky startup demand.",
                ],
              },
              {
                q: "What is cloud bursting and which deployment model makes it possible?",
                marks: 2,
              },
              {
                q: "Several hospitals must follow one common health-data policy. Which deployment model fits, and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Drivers, benefits and risks of cloud adoption",
            body: [
              "Organisations migrate for a short list of recurring reasons, and examiners reward answers that name reasons with magnitudes. Cost: converting capital expenditure (racks, cooling, licences) into operating expenditure removes the 3-to-5-year depreciation cycle of owned servers. Speed: a new virtual machine exists in minutes while a purchased one takes weeks of procurement, so time-to-market for a new service drops from months to days. Scale and global reach: a provider's fleet spans dozens of regions, so serving users in Europe and Asia means adding a region, not building a data centre. Reliability: providers publish SLAs of 99.95 percent or better for compute and 'eleven nines' (99.999999999 percent) durability for replicated object storage - numbers a single-site company cannot match cheaply.",
              "The benefit list mirrors the drivers, but a strong answer separates them: drivers are the motivations, benefits are what the adopter measurably gains. Benefits worth listing: no idle hardware (elasticity matches capacity to demand), automatic updates and patching done by the provider, built-in redundancy across availability zones, access to enterprise-grade services (managed databases, machine-learning platforms) that would need specialists to run in-house, and workforce mobility since applications are reachable from anywhere. For an AI/ML programme, note the compute angle: training a model on a rented cluster of 8 GPUs for one week costs a fraction of owning the GPUs for a year.",
              "Risks are the other half of the question and often carry the marks. Vendor lock-in: applications written against provider-specific APIs (Lambda, DynamoDB) are expensive to move, and egress traffic fees make data itself sticky. Data security and privacy: data leaves the organisation's perimeter and shares hardware with unknown co-tenants; multi-tenancy introduces the 'noisy neighbour' problem where one tenant's load degrades another's performance. Network dependency: if the link is down, the entire business pauses - there is no offline mode for a fully cloud-hosted ERP. Compliance: some jurisdictions require data to remain in-country, complicating provider choice. Downtime: even a 99.95 percent SLA permits about 21.6 minutes of unavailability per 30-day month, and famous provider outages have lasted hours.",
              "A balanced exam answer closes with the mitigation column. Lock-in is reduced by open standards (containers, Kubernetes, Terraform) and multi-cloud design; privacy risks by encryption of data at rest and in transit plus strong IAM; network dependency by hybrid design that keeps critical functions on-premise; compliance by choosing providers with in-country regions and certifications such as ISO 27001. Presenting risks alongside concrete mitigations, rather than a bare list, is what distinguishes a 7-mark answer from a 4-mark one.",
            ],
            bullets: [
              "Cost driver: CapEx (racks, cooling, licences) converts to OpEx; no 3-5 year depreciation cycle.",
              "Speed driver: minutes to provision vs weeks of procurement; time-to-market shrinks from months to days.",
              "Scale driver: dozens of global regions; new market = new region, not a new building.",
              "Benefits: no idle hardware, provider-managed patching, cross-zone redundancy, enterprise-grade managed services.",
              "Risk - vendor lock-in: proprietary APIs plus data-egress fees make migration expensive.",
              "Risk - multi-tenancy: noisy neighbour performance interference and shared-hardware privacy concerns.",
              "Risk - network dependency and downtime: a 99.95 percent SLA still allows about 21.6 minutes down per month.",
              "Mitigations: containers/Kubernetes for portability, encryption + IAM for privacy, hybrid design for criticality.",
            ],
            table: {
              caption: "Risk register for cloud adoption with the standard mitigations.",
              headers: ["Risk", "What can go wrong", "Mitigation"],
              rows: [
                ["Vendor lock-in", "Proprietary APIs and egress fees trap the workload", "Containers, Kubernetes, Terraform, open standards"],
                ["Data privacy", "Data shares hardware with unknown tenants", "Encryption at rest/in transit, strong IAM"],
                ["Network dependency", "Link outage stops the whole business", "Hybrid design, offline-capable critical paths"],
                ["Compliance", "Data residency law violated by region choice", "In-country regions, ISO 27001 / HIPAA certified providers"],
                ["Downtime", "Provider outage beyond SLA credits", "Multi-AZ and multi-region architectures"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Why organisations move to the cloud - and what worries them",
              caption:
                "A 7-mark answer gives both panels plus a mitigation sentence for each risk.",
              left: {
                heading: "Drivers and benefits",
                items: [
                  "CapEx becomes OpEx; no depreciation cycle",
                  "Minutes to provision vs weeks to procure",
                  "Global regions give instant reach",
                  "Provider-managed patching and redundancy",
                  "Rent 8 GPUs for a week instead of owning them",
                ],
              },
              right: {
                heading: "Risks",
                items: [
                  "Vendor lock-in via proprietary APIs and egress fees",
                  "Data privacy on shared, multi-tenant hardware",
                  "Noisy neighbour performance interference",
                  "Total dependence on network availability",
                  "Even 99.95 percent SLA allows about 21 minutes down per month",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Always pair a risk with a mitigation",
              body: "When a question says 'discuss the challenges of cloud computing', a bare list earns about half marks. Write each risk, its business consequence, and one named mitigation - three columns, one table. The mitigation column is where examiners look to award the last marks.",
            },
            keyTerms: [
              { term: "Vendor lock-in", definition: "Dependence on provider-specific APIs or pricing that makes migration to another provider costly." },
              { term: "Noisy neighbour", definition: "A co-tenant whose heavy load degrades your performance on shared hardware." },
              { term: "Egress fee", definition: "Charge for data leaving a provider's network, which makes stored data expensive to move out." },
              { term: "Data residency", definition: "Legal requirement that certain data remain stored within a country's borders." },
              { term: "Eleven nines", definition: "99.999999999 percent object durability advertised for replicated cloud storage such as S3." },
            ],
            examQuestions: [
              {
                q: "Discuss the major drivers, benefits and risks of cloud adoption, and suggest one mitigation for each risk you list.",
                marks: 7,
                outline: [
                  "Drivers: cost (CapEx to OpEx), speed (minutes vs weeks of procurement), scale (global regions), reliability (provider SLAs).",
                  "Benefits: no idle hardware via elasticity, provider-managed patching, cross-AZ redundancy, managed enterprise services.",
                  "Risk 1 - vendor lock-in: proprietary APIs plus egress fees; mitigation - containers/Kubernetes and open tooling.",
                  "Risk 2 - data privacy on shared hardware; mitigation - encryption at rest and in transit plus IAM.",
                  "Risk 3 - network dependency; mitigation - hybrid design keeping critical services local.",
                  "Risk 4 - compliance/residency; mitigation - providers with in-country regions and ISO 27001/HIPAA certifications.",
                  "Close by noting 99.95 percent availability still implies about 21.6 minutes of downtime per 30-day month.",
                ],
              },
              {
                q: "What is the noisy-neighbour problem and on which shared characteristic of cloud computing does it depend?",
                marks: 3,
              },
              {
                q: "Name two reasons why cloud adoption converts capital expenditure into operational expenditure.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.5",
            title: "Cloud economics: CapEx versus OpEx with a worked cost example",
            body: [
              "Capital expenditure (CapEx) is money spent once on assets you own - servers, networking gear, UPS systems, the room and its cooling - and the asset depreciates over 3 to 5 years whether used or idle. Operational expenditure (OpEx) is the recurring cost of using a service, billed per unit consumed. Cloud computing's central economic promise is this conversion: instead of a 300,000 dollar server purchase that sits 60 percent idle, you rent exactly the capacity each month needs and treat the invoice as a cost of goods sold. Accountants like it because OpEx scales with revenue; engineers like it because unused capacity is a cancelled command rather than a sunk asset.",
              "Work the standard example slowly, because the numbers themselves are examinable. On-premise option: 100 application servers at 3,000 dollars each costs 300,000 dollars upfront, plus roughly 15 percent per year for power, cooling and administration (about 45,000 dollars a year), and you own capacity for peak even though average utilisation may be 30 percent. Cloud option: the equivalent machine class on AWS is an m5.large at roughly 0.096 dollars per hour; 100 machines for a full month is 100 x 0.096 x 730 = 7,008 dollars per month, or about 84,096 dollars per year - but only while they run. If the workload needs the machines only 12 hours a day, the bill halves to about 3,504 dollars per month.",
              "The crossover logic matters more than either number. If the workload runs flat-out 24x7 for three years, the cloud total (about 252,000 dollars over 36 months) approaches the on-premise hardware cost, which is why steady, predictable, massive workloads are the ones providers themselves run on owned infrastructure. If demand is variable - 12 hours a day, or 10x spikes one week per quarter - elasticity makes cloud dramatically cheaper because you pay 3,504 dollars in the quiet month and 70,000 dollars in the spike month instead of owning peak hardware forever. State this conditionality explicitly: 'cloud wins when demand is variable or unpredictable; ownership can win when demand is huge and constant.'",
              "Two extra economics terms polish the answer. Elasticity cost model: with auto-scaling, cost becomes proportional to load, so gross margin on a cloud-hosted product is stable instead of being eroded by idle servers. Hidden costs to acknowledge for honesty marks: data egress fees (transfer out of the provider is charged, often around 0.09 dollars per GB), storage growth, and the engineering cost of learning the platform. A worked answer that computes both sides, states the crossover condition, and names egress as the hidden cost covers every marking point in one page.",
            ],
            bullets: [
              "CapEx: one-time asset spend (100 servers x 3,000 dollars = 300,000 dollars) that depreciates over 3-5 years.",
              "OpEx: recurring per-use billing; cloud invoices scale with actual consumption.",
              "Worked cloud cost: 100 x m5.large x 0.096 dollars/hour x 730 hours = 7,008 dollars/month, full-time.",
              "12-hours-a-day usage halves the bill to about 3,504 dollars/month - elasticity is the saving.",
              "Crossover condition: 24x7 flat workloads approach on-premise cost; variable demand makes cloud cheaper.",
              "Hidden costs: egress around 0.09 dollars per GB out, storage growth, platform learning curve.",
              "On-premise extra: about 15 percent of hardware cost per year for power, cooling and administration.",
            ],
            table: {
              caption: "Worked comparison: 100 servers, one year, demand 12 hours/day.",
              headers: ["Cost item", "On-premise", "Cloud (12h/day)"],
              rows: [
                ["Hardware / instances", "300,000 dollars upfront", "0 upfront; 3,504 dollars/month rent"],
                ["Power, cooling, admin", "about 45,000 dollars/year", "included in hourly price"],
                ["Idle-peak capacity", "sized for peak, idle at 30 percent", "released when load drops"],
                ["One-year total", "345,000 dollars", "about 42,048 dollars"],
                ["Three-year total", "about 435,000 dollars", "about 126,144 dollars"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Buy or rent? The economics decision",
              caption:
                "Demand shape, not fashion, decides the cheaper option - state the condition in the exam.",
              start: "What does the demand curve look like?",
              branches: [
                { label: "Spiky or growing, hard to predict", outcome: "Rent (cloud): pay per used hour, no peak hardware", good: true },
                { label: "Massive, flat, 24x7 for years", outcome: "Ownership can win: 3-year cloud total approaches hardware cost", good: true },
                { label: "Sensitive data with steady load", outcome: "Private cloud or hybrid: control plus burst economics", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "Show the formula, not just the answer",
              body: "Write the arithmetic line: 100 x 0.096 x 730 = 7,008. Examiners award method marks for the formula and the 730-hours-per-month constant even if a digit slips. Then halve it for the 12-hour case - the second number is where the elasticity argument lives.",
            },
            keyTerms: [
              { term: "CapEx", definition: "Capital expenditure - one-time spend on owned assets such as servers, depreciated over years." },
              { term: "OpEx", definition: "Operational expenditure - recurring, usage-based spend such as a monthly cloud invoice." },
              { term: "Utilisation", definition: "Fraction of purchased capacity actually doing useful work; idle enterprise data centres often run 10-30 percent." },
              { term: "Egress cost", definition: "Charge applied to data transferred out of a cloud provider, a common hidden cost of migration." },
              { term: "Cost crossover", definition: "The demand level and duration at which renting becomes more expensive than owning." },
            ],
            examQuestions: [
              {
                q: "Differentiate CapEx and OpEx. A company needs 100 servers: compute the monthly cost of running them on a cloud charging 0.096 dollars per instance-hour, compare with a 300,000 dollar on-premise purchase, and state when each option wins.",
                marks: 7,
                outline: [
                  "Define CapEx (asset purchase, depreciated) and OpEx (recurring usage billing).",
                  "Cloud formula: 100 instances x 0.096 dollars/hour x 730 hours = 7,008 dollars/month at 24x7.",
                  "Halve for 12-hours-a-day demand: about 3,504 dollars/month = 42,048 dollars/year.",
                  "On-premise: 300,000 dollars upfront plus about 45,000 dollars/year power-cooling-admin = 345,000 dollars in year one.",
                  "Note idle capacity: on-premise is sized for peak while average utilisation may be 30 percent.",
                  "State the crossover: flat 24x7 multi-year demand favours ownership; variable or growing demand favours cloud.",
                  "Mention hidden cloud costs: egress fees, storage growth, platform learning.",
                ],
              },
              {
                q: "A workload runs 100 instances only during a 6-hour nightly window. Estimate its monthly cloud bill at 0.096 dollars per hour.",
                marks: 3,
              },
              {
                q: "Give two hidden costs of cloud adoption besides the compute bill.",
                marks: 2,
              },
            ],
          },
          {
            number: "1.6",
            title: "The provider landscape and motivations for migration",
            body: [
              "Three providers dominate the exam's examples. Amazon Web Services, launched 2006, offers more than 200 services across 30-plus regions and still holds roughly a third of the market; its names to know are EC2 (virtual machines), S3 (object storage), RDS (managed SQL), Lambda (functions) and VPC (virtual networking). Microsoft Azure, generally available from 2010, competes hardest where enterprises already run Windows Server, Active Directory and Office - its strengths are hybrid tooling (Azure Arc, Azure Stack) and enterprise agreements; core services are Virtual Machines, Blob Storage, Azure SQL and Functions. Google Cloud Platform, strongest in data and machine learning, contributes BigQuery (petabyte SQL analytics), TensorFlow's home turf, and Kubernetes (which Google originated); core services are Compute Engine, Cloud Storage and GKE.",
              "Beyond the big three, know the categories. Alibaba Cloud leads in China and Asia-Pacific growth markets; IBM Cloud and Oracle Cloud target enterprises with legacy mainframe and database estates; DigitalOcean serves developers with simple VM pricing; and platform options like Heroku or Vercel abstract servers away entirely. OpenStack matters as the open-source toolkit for building private clouds. In an exam answer, one sentence per provider - market position, flagship service, distinguishing strength - is the expected depth; a full service catalogue earns no extra marks.",
              "Migration motivations extend the drivers of section 1.4 into specific organisational situations. End-of-life hardware: a 5-year-old cluster is due for replacement, and re-hosting on cloud avoids the purchase. Application modernisation: moving a legacy monolith to containers replatforms it onto managed services. Data-centre lease expiry or a merger: the consolidation deadline forces a platform decision. Bursting and new capabilities: the organisation wants managed AI services, global CDN delivery or serverless functions it cannot build in-house. Cost avoidance: replacing a planned 200,000 dollar data-centre expansion with a pay-per-use bill. Each motivation pairs with one of the 'Six R' migration strategies: rehost (lift and shift), replatform (minor changes, e.g. swap self-managed MySQL for managed RDS), repurchase (move to SaaS), refactor (re-architect for cloud-native services), retire (decommission), retain (leave on-premise for now).",
              "Migration itself is a pipeline examiners ask you to draw: assess the portfolio and tag each application with its R; choose the landing zone (accounts, VPC design, IAM baseline); move data first (database replication and bulk object transfer, since data moves slower than code); migrate applications in waves, starting with low-risk internal tools; validate with cutover tests and rollback plans; then optimise (rightsizing instances, reserved-capacity pricing, managed-service substitution). Mentioning that data migration - not compute - is usually the long pole, because terabytes move at the speed of the pipe or of physical appliance shipment (AWS Snowball moves up to 80 TB per device), shows the practical judgement that separates top answers.",
            ],
            bullets: [
              "AWS: 200+ services, 30+ regions, roughly one-third market share; flagships EC2, S3, RDS, Lambda, VPC.",
              "Azure: enterprise hybrid strength (Arc, Stack), integrates with Windows/AD estates; flagships VMs, Blob, SQL, Functions.",
              "GCP: data and ML strength, originated Kubernetes; flagships BigQuery, Compute Engine, GKE.",
              "Others: Alibaba (Asia-Pacific), Oracle/IBM (legacy estates), DigitalOcean (developers), OpenStack (private-cloud toolkit).",
              "Six R strategies: rehost, replatform, repurchase, refactor, retire, retain.",
              "Migration pipeline: assess and tag R, landing zone, move data first, migrate in waves, validate cutover, optimise.",
              "Data is the long pole: terabytes move slowly, so bulk transfer may use physical appliances such as 80 TB Snowball.",
            ],
            table: {
              caption: "The big three providers at exam depth.",
              headers: ["Provider", "Launched", "Flagship services", "Distinguishing strength"],
              rows: [
                ["AWS", "2006", "EC2, S3, RDS, Lambda", "Breadth: 200+ services, 30+ regions"],
                ["Azure", "2010", "VMs, Blob Storage, Azure SQL, Functions", "Enterprise hybrid and Windows/AD integration"],
                ["GCP", "2008 (App Engine), 2011 (Compute Engine)", "BigQuery, Compute Engine, GKE", "Data analytics and machine learning; originated Kubernetes"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "A six-stage migration pipeline",
              caption:
                "Assessment before movement, data before code - the order is worth marks.",
              stages: [
                { label: "Assess portfolio", note: "tag each app with one of the Six R" },
                { label: "Build landing zone", note: "accounts, VPC, IAM baseline" },
                { label: "Move data", note: "replication or bulk transfer - the slow pole" },
                { label: "Migrate apps in waves", note: "low-risk internal tools first" },
                { label: "Validate cutover", note: "tests plus rollback plan" },
                { label: "Optimise", note: "rightsize, reserved pricing, managed services" },
              ],
            },
            callout: {
              type: "tip",
              title: "Learn three names per provider",
              body: "For each of AWS, Azure and GCP, memorise the compute, storage and database flagship (EC2/S3/RDS, VM/Blob/Azure SQL, Compute Engine/Cloud Storage/BigQuery). Questions rarely go deeper, and naming one flagship per layer per provider signals genuine familiarity.",
            },
            keyTerms: [
              { term: "Rehost (lift and shift)", definition: "Migration strategy that moves an application to cloud VMs with minimal changes." },
              { term: "Replatform", definition: "Migration with small substitutions, e.g. replacing self-managed MySQL with managed RDS." },
              { term: "Refactor", definition: "Re-architecting an application to use cloud-native services such as serverless and managed queues." },
              { term: "Landing zone", definition: "The pre-built cloud foundation of accounts, networking and IAM into which migrated workloads land." },
              { term: "Snowball", definition: "A physical AWS appliance (up to 80 TB) shipped to move bulk data faster than the network allows." },
            ],
            examQuestions: [
              {
                q: "Compare AWS, Azure and GCP on origin, flagship services and strengths. Explain the Six R migration strategies and draw the migration pipeline.",
                marks: 7,
                outline: [
                  "AWS: 2006, 200+ services across 30+ regions, about one-third share; EC2, S3, RDS, Lambda.",
                  "Azure: 2010, enterprise hybrid (Arc, Stack), Windows/AD integration; VMs, Blob, Azure SQL, Functions.",
                  "GCP: data/ML strength, originated Kubernetes; BigQuery, Compute Engine, GKE.",
                  "List the Six R: rehost, replatform, repurchase, refactor, retire, retain - one line each.",
                  "Pipeline: assess and tag R, build landing zone, move data first, migrate apps in waves, validate cutover, optimise.",
                  "Justify the order: data moves slower than code, so replication starts early.",
                  "Mention bulk transfer appliances (Snowball, up to 80 TB) for terabyte-scale data.",
                ],
              },
              {
                q: "A legacy monolith is moved to cloud VMs with only an OS upgrade, and its self-managed database is replaced by managed RDS. Name both strategies used.",
                marks: 2,
              },
              {
                q: "Which provider originated Kubernetes, and what is its flagship analytics service?",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Cloud Service Models",
      summary:
        "The stack of service models: IaaS where the consumer manages the OS, PaaS where only code remains, and SaaS where even the application is rented; the shared responsibility matrix that divides security duties; and the specialised models - DBaaS, FaaS and containers as a service - plus SaaS maturity levels and selection criteria.",
      chapter: {
        number: "02",
        title: "IaaS, PaaS, SaaS and Beyond",
        intro:
          "Unit II is the most examined unit of the paper. It walks up the service stack - infrastructure, platform, software - showing exactly which layer the provider manages and which the consumer still owns, formalises the division in the shared responsibility model, then covers the specialised models (DBaaS, FaaS/serverless, CaaS) and the Chong-Carraro SaaS maturity levels. Every section ends with a comparison table or CLI snippet you can reproduce.",
        inOneBreath:
          "IaaS rents raw virtual machines, storage and networks - EC2 with an AMI, EBS volumes and a VPC - leaving the consumer to patch the OS upward. PaaS hides servers entirely: push code or a Procfile and App Engine, Heroku or Elastic Beanstalk build and run it, trading convenience for runtime restrictions. SaaS delivers finished software (Google Workspace, Salesforce, Microsoft 365) on subscriptions with configuration instead of code. The shared responsibility model says the provider secures the cloud (physical hosts, hypervisor, managed-service internals) and the customer secures in the cloud (data, IAM, guest OS on IaaS, application code on PaaS); responsibility shifts left toward the provider as you climb IaaS-PaaS-SaaS. Specialised models rent one ingredient: DBaaS (RDS, DynamoDB), FaaS (Lambda, billed per invocation, 15-minute cap), CaaS (EKS, ECS). SaaS maturity has four levels - ad-hoc, configurable, multi-tenant configurable, and scalable multi-tenant - and model selection weighs control, effort, elasticity and cost.",
        sections: [
          {
            number: "2.1",
            title: "IaaS in depth: virtual machines as a service",
            body: [
              "Infrastructure as a Service rents the raw ingredients of a data centre - compute, storage, networking - as on-demand virtual resources, leaving everything from the operating system upward under the consumer's control. The provider manages physical hosts, the hypervisor and the network fabric; the consumer chooses the machine image, installs runtimes, patches the kernel and configures firewalls. The classic example is Amazon EC2: you select an AMI (Amazon Machine Image, the OS disk template), an instance type, and a VPC (Virtual Private Cloud) subnet, and a VM boots in under a minute billed per second.",
              "Instance types encode the hardware contract, and reading one is an exam skill. The name m5.large decodes as: family 'm' (general purpose, balanced CPU-to-memory), generation 5, size large - which delivers 2 vCPUs and 8 GB of RAM. Other families specialise: c5 for compute-heavy (2 vCPUs, 4 GB), r5 for memory-heavy (2 vCPUs, 16 GB), and p3/g5 GPU instances for machine-learning training. Storage arrives as EBS (Elastic Block Store) volumes - persistent virtual disks of type gp3 (general SSD, about 0.08 dollars per GB-month) or st1 (throughput HDD) that attach to instances and survive their stop/start cycle. Networking is defined by security groups (stateful instance-level firewalls) inside the VPC.",
              "Pricing models matter as much as capability. On-demand is the pay-per-second default with no commitment; reserved instances or savings plans commit to 1 or 3 years for discounts up to about 72 percent; spot instances sell idle capacity at up to 90 percent off but can be reclaimed by the provider with 2 minutes of notice - ideal for fault-tolerant batch jobs, unsuitable for a primary database. A worked monthly estimate: one m5.large on-demand at 0.096 dollars/hour for 730 hours costs about 70 dollars; the same capacity as a 1-year reserved instance drops to roughly 43 dollars. State these categories - they appear as short questions almost every year.",
              "The exam contrast for IaaS is control versus burden. Because the consumer owns the OS, IaaS suits legacy applications that need specific kernels, lift-and-shift migrations, and custom software stacks; the burden is patching, hardening and capacity engineering that PaaS would have absorbed. The traditional analogy: IaaS is renting a plot of land with utilities connected - you build and maintain the house - while PaaS is renting a furnished flat and SaaS is a hotel. Draw the responsibility ladder when asked to 'explain IaaS with an example': physical -> virtualization (provider), OS -> middleware -> data -> application (consumer).",
            ],
            bullets: [
              "IaaS rents compute, storage and network as virtual resources; consumer manages OS and everything above.",
              "EC2 workflow: pick AMI (OS template) + instance type + VPC subnet; boot in under a minute, billed per second.",
              "Instance naming: m5.large = general-purpose family m, generation 5, size large; 2 vCPUs, 8 GB RAM.",
              "Storage: EBS volumes (gp3 SSD about 0.08 dollars/GB-month) persist independently of instance stop/start.",
              "Pricing: on-demand default, reserved/savings plans up to about 72 percent off, spot up to 90 percent off with 2-minute reclaim notice.",
              "Worked estimate: m5.large 24x7 on-demand costs about 70 dollars/month; 1-year reserved about 43 dollars/month.",
              "Analogy: IaaS = rented plot with utilities; PaaS = furnished flat; SaaS = hotel.",
            ],
            codeExample: {
              language: "bash",
              caption: "Launching and inspecting an EC2 instance with the AWS CLI.",
              code: `# Configure credentials once (stored in ~/.aws/credentials)
aws configure

# Launch one m5.large Ubuntu instance in Mumbai
aws ec2 run-instances \\
  --image-id ami-0abc123456789 \\
  --instance-type m5.large \\
  --count 1 \\
  --security-group-ids sg-0123abcd \\
  --subnet-id subnet-0123abcd \\
  --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=web01}]'

# List running instances with public IPs
aws ec2 describe-instances \\
  --filters Name=instance-state-name,Values=running \\
  --query 'Reservations[].Instances[].PublicIpAddress'

# Stop it - billing pauses for compute
aws ec2 stop-instances --instance-ids i-0123456789abcdef`,
            },
            diagram: {
              kind: "layers",
              title: "Who manages what under IaaS",
              caption:
                "Everything below the OS line is the provider's; everything above is yours to patch and harden.",
              layers: [
                { label: "Your application + data", note: "consumer" },
                { label: "Middleware and runtimes", note: "consumer" },
                { label: "Guest operating system", note: "consumer patches it" },
                { label: "Virtualization (hypervisor)", note: "provider" },
                { label: "Physical servers, network, data centre", note: "provider" },
              ],
            },
            callout: {
              type: "exam",
              title: "Decode the instance type before describing it",
              body: "When asked to 'explain EC2 instance types', decode a concrete name (m5.large = family-generation-size, 2 vCPU, 8 GB) and tabulate one member from each family class: general (m), compute (c), memory (r), accelerated (GPU). Naming numbers beats adjectives - 'memory-optimised' alone is worth 1 mark, 'r5: 2 vCPU and 16 GB RAM' is worth 2.",
            },
            keyTerms: [
              { term: "AMI", definition: "Amazon Machine Image - the saved OS-plus-software template from which EC2 instances boot." },
              { term: "Instance type", definition: "The hardware contract of an EC2 instance (family, generation, size), e.g. m5.large with 2 vCPU and 8 GB." },
              { term: "EBS", definition: "Elastic Block Store - persistent virtual disk volumes attached to EC2 instances, billed per GB-month." },
              { term: "VPC", definition: "Virtual Private Cloud - an isolated virtual network with subnets, route tables and firewalls in the cloud." },
              { term: "Spot instance", definition: "Idle EC2 capacity sold at deep discount that the provider can reclaim with 2 minutes of notice." },
            ],
            examQuestions: [
              {
                q: "Explain IaaS with the EC2 example: describe AMIs, instance types, EBS storage and pricing models, and draw the responsibility ladder showing which layers the provider manages.",
                marks: 7,
                outline: [
                  "Define IaaS: provider rents virtual compute/storage/network; consumer manages OS upward.",
                  "AMI: the OS disk template an instance boots from; custom images allow pre-installed stacks.",
                  "Instance types: decode m5.large (family m general purpose, generation 5, size large, 2 vCPU, 8 GB); mention c/r/GPU families.",
                  "EBS volumes: persistent block disks (gp3 SSD) surviving stop/start; billed per GB-month.",
                  "Pricing: on-demand per second, reserved/savings up to about 72 percent discount, spot up to 90 percent with 2-minute reclaim.",
                  "Worked number: m5.large 24x7 on-demand is about 70 dollars/month.",
                  "Draw the responsibility ladder: physical + hypervisor = provider; OS, middleware, application, data = consumer.",
                ],
              },
              {
                q: "Distinguish on-demand, reserved and spot instance pricing with one suitable workload for each.",
                marks: 3,
              },
              {
                q: "What is an AMI and how is it different from an EBS volume?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "PaaS: deploying code without managing servers",
            body: [
              "Platform as a Service removes the operating system, runtime and scaling machinery from the consumer's job: you supply code (and sometimes a configuration file), the platform builds it, runs it, patches it and scales it. Google App Engine is the canonical example - you upload an application written for a supported runtime (Python, Java, Go, Node.js), App Engine compiles it, assigns it a URL, and automatically adds instances when traffic rises, scaling back to zero when it falls. The consumer never sees a host, never applies a security patch, and cannot (without special effort) choose the kernel version - that is exactly the trade PaaS makes.",
              "Heroku illustrates the model in its purest form. An application declares its runtime in a buildpack and its entry point in a Procfile - one line such as 'web: gunicorn app:app' - and 'git push heroku main' builds a slug and starts dynos (lightweight containers). Scaling is a single command: 'heroku ps:scale web=3' runs three web dynos at about 0.06 dollars per dyno-hour in the standard tier. AWS Elastic Beanstalk and Azure App Service offer the same contract with deeper AWS/Azure integration: you upload a ZIP or connect a repository, and the service provisions load balancer, auto-scaling group and monitoring around your code.",
              "The benefits and restrictions are two sides of one design choice. Benefits: developer productivity (deploy in minutes, no patching), built-in autoscaling and health checks, integrated services (managed databases, queues, logging) one flag away, and pay-for-use pricing that can fall to zero when idle (App Engine standard scales to 0 instances). Restrictions: runtime and language versions are dictated by the platform; you cannot install arbitrary system packages or tune the kernel; debugging is indirect because you see logs, not a shell; and portability suffers - App Engine's APIs for datastore and queues bind code to Google unless you stick to open standards. Vendor lock-in is therefore the standard criticism of PaaS, mitigated by container-based PaaS such as Azure App Service for Containers or Cloud Run.",
              "For the exam, position PaaS between IaaS and SaaS with a concrete division of labour: in PaaS the provider manages the OS, runtime and scaling, while the consumer manages the application and its data. Give the developer workflow as a four-step flow - write code, push to the platform, platform builds and deploys, platform autoscales - and close with one restriction per layer you lose (no kernel choice, no OS patching control, no direct process access). An answer that names App Engine, Heroku and Beanstalk, gives one concrete command or config line for at least one, and states the trade-off explicitly, reliably reaches 7 marks.",
            ],
            bullets: [
              "PaaS contract: consumer supplies code and data; provider builds, runs, patches and scales everything below the application.",
              "App Engine: upload code for a supported runtime; instances autoscale to zero when idle and back up under load.",
              "Heroku: Procfile declares the entry point ('web: gunicorn app:app'); 'git push heroku main' deploys.",
              "Scaling is declarative: 'heroku ps:scale web=3' - three dynos at about 0.06 dollars per dyno-hour.",
              "Also know: AWS Elastic Beanstalk and Azure App Service provide the same model with provider-specific integration.",
              "Benefits: minutes-to-deploy, no patching, built-in autoscaling, near-zero idle cost.",
              "Restrictions: platform-chosen runtimes, no kernel or system-package control, indirect debugging, API-driven lock-in.",
            ],
            codeExample: {
              language: "bash",
              caption: "Deploying a Python app to App Engine and Heroku.",
              code: `# --- Google App Engine ---
# app.yaml declares the runtime
#   runtime: python312
#   automatic_scaling:
#     min_instances: 0
#     max_instances: 10
gcloud app deploy app.yaml          # build + deploy + give a URL
gcloud app browse                   # open https://PROJECT.appspot.com

# --- Heroku ---
# Procfile contains: web: gunicorn app:app
git push heroku main                # buildpack builds a slug
heroku ps:scale web=3               # run 3 dynos
heroku logs --tail                  # stream runtime logs`,
            },
            diagram: {
              kind: "flow",
              title: "The PaaS developer workflow",
              caption:
                "Four steps from source code to autoscaled service - no server touched by hand.",
              steps: [
                { label: "Write code + config", note: "app.yaml or Procfile" },
                { label: "Push to platform", note: "gcloud app deploy / git push" },
                { label: "Platform builds and runs it", note: "buildpacks, no shell access" },
                { label: "Platform autoscales", note: "instances added and removed by load" },
              ],
            },
            callout: {
              type: "exam",
              title: "State the trade, not just the definition",
              body: "PaaS questions are marked on the trade-off: 'convenience for control'. After defining PaaS, write one sentence on what the consumer gains (no OS/runtime management, autoscaling) and one on what is surrendered (runtime choice, kernel tuning, direct debugging). Answers that only celebrate benefits lose the critique mark.",
            },
            keyTerms: [
              { term: "PaaS", definition: "Platform as a Service - the provider manages OS, runtime and scaling; the consumer supplies application code and data." },
              { term: "Buildpack", definition: "The PaaS recipe that detects a language, fetches dependencies and builds a runnable artifact from source." },
              { term: "Procfile", definition: "A one-line-per-process declaration of how to start a Heroku application, e.g. web: gunicorn app:app." },
              { term: "Dynos", definition: "Heroku's lightweight container units; scaling means running more of them." },
              { term: "Scale to zero", definition: "The PaaS ability to run zero instances when idle, so idle cost is nil (App Engine standard)." },
            ],
            examQuestions: [
              {
                q: "Explain PaaS using Google App Engine or Heroku as an example: describe the deployment workflow, autoscaling, benefits and restrictions compared with IaaS.",
                marks: 7,
                outline: [
                  "Define PaaS: provider manages OS/runtime/scaling; consumer manages code and data.",
                  "Deployment workflow: write code plus a declaration file (app.yaml or Procfile), push, platform builds.",
                  "Concrete command: 'gcloud app deploy app.yaml' or 'git push heroku main'.",
                  "Autoscaling: instances added under load, scaled to zero when idle; Heroku example 'ps:scale web=3'.",
                  "Benefits: minutes to deploy, no patching, integrated managed services, near-zero idle cost.",
                  "Restrictions: platform-chosen runtimes, no kernel/system-package control, indirect debugging, API lock-in.",
                  "Contrast with IaaS in one sentence: IaaS keeps the OS with the consumer; PaaS takes it away.",
                ],
              },
              {
                q: "Why is vendor lock-in considered a bigger concern for PaaS than for IaaS?",
                marks: 3,
              },
              {
                q: "What is a Procfile and what does 'heroku ps:scale web=3' do?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "SaaS: software as a subscription",
            body: [
              "Software as a Service delivers a complete, working application over the internet on a subscription or free-with-limits basis; the consumer configures it and uses it, and never installs, patches or hosts anything. Google Workspace (Gmail, Docs, Drive) serves billions of users from Google's infrastructure; Salesforce defined the category for CRM; Microsoft 365, Zoom, Slack and Dropbox fill everyday niches. Access is a browser or mobile app plus an account - the entire 'installation' of a CRM is typing a URL. Updates happen continuously and invisibly for all tenants at once, which is why SaaS users are always on the latest version without a migration project.",
              "The economic and architectural features follow from multi-tenancy: one application instance and one database serve many customer organisations, with logical isolation between tenants' data. This lets providers amortise hardware and engineering across huge tenant counts, so per-seat prices are low - Workspace Business Standard costs roughly 12-14 US dollars per user per month, Salesforce editions run from about 25 to 300 dollars per user per month, and Microsoft 365 Business Premium about 22 dollars. Licensing is per user per month rather than perpetual, converting software purchases into OpEx; usage grows and shrinks with headcount because licences are added and removed monthly.",
              "Customisation in SaaS is configuration, not code. Salesforce is the exam favourite: administrators define custom objects and fields, page layouts, validation rules and automation flows inside the tenant - no deployment pipeline, no downtime. Integration happens through published REST APIs, webhooks and pre-built connectors (a Google Form triggering a webhook into a CRM, single sign-on via SAML or OAuth). Because the data lives in the provider's cloud, questions of export formats, API rate limits and exit strategy become real: a serious answer mentions that lock-in risk is highest here because the application logic itself is not yours.",
              "The exam contrast set: SaaS vs on-premise software. On-premise: perpetual licence, own servers, own upgrades, version skew across departments, IT staff per product. SaaS: subscription, provider's servers, continuous upgrades, one version for everyone, zero per-product IT staff, but network-dependent and priced per user forever. Also be ready for the classic question 'list four SaaS applications and their function' - Gmail/email, Salesforce/CRM, Zoom/video conferencing, Dropbox/file storage - and the follow-up 'why is Gmail SaaS but Gmail's storage backed by the provider's IaaS?' because it separates the consumer's view (application) from the provider's stack (infrastructure).",
            ],
            bullets: [
              "SaaS delivers a finished application over the internet; consumer configures, provider hosts, patches and upgrades.",
              "Multi-tenancy: one application and database serve many organisations with logical isolation.",
              "Pricing is per-user-per-month OpEx: Workspace about 12-14 dollars, Salesforce about 25-300 dollars, M365 about 22 dollars.",
              "Customisation by configuration: Salesforce custom objects, fields, layouts and flows - no code deployment.",
              "Integration via REST APIs, webhooks and SSO (SAML/OAuth).",
              "Always one current version for all tenants - upgrades are invisible and universal.",
              "Trade-off: zero administration but the highest lock-in, since application logic and data live with the provider.",
            ],
            table: {
              caption: "Everyday SaaS examples at exam depth.",
              headers: ["Application", "Category", "Provider", "Typical pricing model"],
              rows: [
                ["Google Workspace", "Email, docs, drive", "Google", "about 12-14 dollars per user/month"],
                ["Salesforce", "CRM", "Salesforce", "about 25-300 dollars per user/month by edition"],
                ["Microsoft 365", "Office suite + email", "Microsoft", "about 22 dollars per user/month (Business Premium)"],
                ["Zoom", "Video conferencing", "Zoom", "Free tier + paid tiers per host/month"],
                ["Dropbox", "File storage and sync", "Dropbox", "Per-user subscription with storage quota"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "SaaS versus traditional on-premise software",
              caption:
                "Same software job, opposite ownership and upgrade stories.",
              left: {
                heading: "SaaS",
                items: [
                  "Subscription per user per month (OpEx)",
                  "Runs on the provider's cloud",
                  "Continuous, invisible upgrades - one version for all",
                  "Zero per-product IT administration",
                  "Configuration-based customisation",
                ],
              },
              right: {
                heading: "On-premise software",
                items: [
                  "Perpetual licence plus support contract (CapEx)",
                  "Runs on your own servers",
                  "Manual upgrades; version skew across teams",
                  "Dedicated IT staff per product",
                  "Customisation by code and integrations you own",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "SaaS means you never own the stack",
              body: "The most common wrong answer treats SaaS as 'software you downloaded from the cloud'. Emphasise: nothing is installed on the consumer's machines beyond a browser; even backups, high availability and security patching are the provider's job. The consumer's only levers are configuration, users and data export.",
            },
            keyTerms: [
              { term: "SaaS", definition: "Software as a Service - a complete application delivered over the internet on subscription, hosted entirely by the provider." },
              { term: "Multi-tenant application", definition: "One application instance serving many customer organisations with logically isolated data." },
              { term: "Per-seat licensing", definition: "SaaS pricing charged per active user per month, scaling with headcount." },
              { term: "Single sign-on (SSO)", definition: "Authentication method (SAML, OAuth) letting users access multiple SaaS apps with one corporate identity." },
              { term: "Webhook", definition: "A provider-initiated HTTP callback that pushes events from a SaaS application to an integrating system." },
            ],
            examQuestions: [
              {
                q: "Define SaaS and explain its multi-tenant architecture, pricing model and customisation approach using Salesforce or Google Workspace as an example. Contrast SaaS with on-premise software.",
                marks: 7,
                outline: [
                  "Define SaaS: complete application delivered over the internet on subscription; nothing installed by the consumer.",
                  "Multi-tenancy: one app instance and database serve many organisations, logically isolated.",
                  "Pricing: per-user-per-month OpEx; give one real figure (Workspace about 12-14 dollars, Salesforce 25-300 dollars).",
                  "Customisation by configuration: Salesforce custom objects, fields, layouts, flows - no deployment.",
                  "Integration: REST APIs, webhooks, SSO via SAML/OAuth.",
                  "Contrast: perpetual licence + own servers + manual upgrades vs subscription + provider hosting + continuous upgrades.",
                  "Close with the trade-off: zero administration but highest vendor lock-in and network dependency.",
                ],
              },
              {
                q: "List four SaaS applications with their category, and state one reason SaaS upgrades are cheaper than on-premise upgrades.",
                marks: 3,
              },
              {
                q: "Why is Gmail classified as SaaS rather than PaaS or IaaS?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.4",
            title: "The shared responsibility model",
            body: [
              "Security in the cloud is a contract split along one line: the provider is responsible for security OF the cloud - the facilities, hardware, hypervisor and the internals of managed services - while the customer is responsible for security IN the cloud - their data, identities, and whatever software layers they choose to own. AWS formalised this as the Shared Responsibility Model; Azure and GCP publish equivalents. The split is not cosmetic: when a breach happens, liability follows the line, and compliance audits check each side separately.",
              "The line moves with the service model, and that movement is the standard exam table. Under IaaS the provider covers physical security, host hardware, hypervisor and network fabric; the customer covers the guest OS (patching!), applications, IAM configuration and data. Under PaaS the provider additionally owns the OS and runtime, so patch duty shifts left; the customer keeps application code, dependencies, IAM and data. Under SaaS the provider owns everything except the customer's data, user identities and access decisions. A memorable one-liner for answers: 'as you climb IaaS -> PaaS -> SaaS, the provider's share grows and the customer's shrinks, but data and identity responsibilities never transfer.'",
              "Concrete incidents make the model vivid - and examiners like one. Misconfigured S3 buckets that leaked data publicly were customer failures (the bucket ACL is 'in the cloud'), not provider failures; conversely, a hypervisor escape would be a provider failure ('of the cloud'). The practical customer checklist under any model: classify and encrypt data, configure IAM least-privilege, patch guest OS on IaaS, secure application code and dependencies, and enable audit logging. The practical provider checklist: physical access control, host patching, hypervisor isolation, managed-service availability and their internal encryption defaults.",
              "Draw the model as a stacked diagram when the question says 'explain with a diagram': a two-column or layered figure with provider duties on one side (facilities, hardware, virtualization, managed service internals) and customer duties on the other (data classification, IAM, guest OS per model, application per model). Then one sentence of consequence: 'the cloud does not remove security work; it relocates it to the layers you still own.' That sentence converts a descriptive answer into an analytical one and typically secures the final mark.",
            ],
            bullets: [
              "Provider: security OF the cloud - facilities, hardware, hypervisor, managed-service internals.",
              "Customer: security IN the cloud - data, identities, guest OS (IaaS), application code (IaaS/PaaS).",
              "The line shifts left with the model: IaaS leaves OS with customer, PaaS takes it, SaaS takes the app too.",
              "Data classification and IAM never transfer to the provider under any model.",
              "Misconfigured public S3 buckets = customer-side failure; hypervisor escape = provider-side failure.",
              "Customer checklist: encrypt data, least-privilege IAM, patch guest OS, secure code, enable audit logs.",
              "One-liner: the cloud relocates security work to the layers you still own - it does not delete it.",
            ],
            table: {
              caption: "Shared responsibility by service model - the table to reproduce in the exam.",
              headers: ["Layer", "IaaS", "PaaS", "SaaS"],
              rows: [
                ["Physical facilities and hosts", "Provider", "Provider", "Provider"],
                ["Hypervisor / runtime isolation", "Provider", "Provider", "Provider"],
                ["Guest operating system", "Customer", "Provider", "Provider"],
                ["Application code and dependencies", "Customer", "Customer", "Provider"],
                ["Data, identity and access management", "Customer", "Customer", "Customer"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Security duties climb toward the provider",
              caption:
                "Index 0 (top) is the customer side; as the model rises from IaaS to SaaS, layers migrate down to the provider.",
              layers: [
                { label: "Data + IAM - customer at every level", note: "never transfers" },
                { label: "Application code - customer on IaaS/PaaS", note: "provider on SaaS" },
                { label: "Guest OS - customer on IaaS only", note: "provider from PaaS up" },
                { label: "Hypervisor and hosts", note: "provider always" },
                { label: "Physical facilities and network", note: "provider always" },
              ],
            },
            callout: {
              type: "exam",
              title: "Anchor the answer with one incident per side",
              body: "Cite the leaked-S3-bucket class of incidents as customer-side and a hypervisor vulnerability as provider-side. One example each proves you understand the model directionally, not just as a memorised table - and the sentence 'the ACL is in the cloud, the hypervisor is of the cloud' is the kind of line examiners quote back.",
            },
            keyTerms: [
              { term: "Shared responsibility model", definition: "The division of security duties: provider secures 'of the cloud', customer secures 'in the cloud'." },
              { term: "Security of the cloud", definition: "Provider duties - physical plants, hardware, hypervisor, managed-service internals." },
              { term: "Security in the cloud", definition: "Customer duties - data, IAM, guest OS patches, application code, configuration." },
              { term: "Least privilege", definition: "IAM principle granting each identity only the permissions its role requires." },
              { term: "Misconfiguration", definition: "A customer-side error such as a public bucket ACL or an open security-group port - the leading cause of cloud data leaks." },
            ],
            examQuestions: [
              {
                q: "Explain the shared responsibility model and tabulate provider vs customer duties for IaaS, PaaS and SaaS. Give one real-world failure example for each side.",
                marks: 7,
                outline: [
                  "State the split: provider = security OF the cloud; customer = security IN the cloud.",
                  "Provider side: facilities, hosts, hypervisor, managed-service internals - constant across models.",
                  "IaaS column: customer owns guest OS, application, data and IAM.",
                  "PaaS column: provider takes OS and runtime; customer keeps code, data and IAM.",
                  "SaaS column: provider owns everything except data, identities and access decisions.",
                  "Customer-side example: publicly misconfigured S3 bucket ACL leaking data.",
                  "Provider-side example: hypervisor escape vulnerability; close with 'data and IAM never transfer'.",
                ],
              },
              {
                q: "Under which service model does the responsibility for patching the guest OS shift from customer to provider?",
                marks: 2,
              },
              {
                q: "A customer stores unencrypted data and an attacker reads it. Which side of the shared responsibility model failed?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Specialised models: DBaaS, FaaS and containers as a service",
            body: [
              "Between the classic three models, providers rent individual ingredients as managed services, and the exam increasingly asks for them by name. Database as a Service (DBaaS) removes database administration: AWS RDS provisions a managed MySQL, PostgreSQL or SQL Server instance with automated backups, patching, multi-AZ failover and read replicas from one API call; DynamoDB goes further as serverless NoSQL with single-digit-millisecond reads at any scale. The consumer sets schema and connection strings; provisioning, replication and version upgrades are the provider's job. The trade is the usual one - less tuning control (no superuser on RDS) for dramatically less operations work.",
              "Function as a Service (FaaS) is the purest pay-per-use compute: upload a function, the platform runs it on demand, charges per invocation and per execution time, and scales to zero between events. AWS Lambda bills about 0.20 dollars per million requests plus GB-seconds of execution, cold-starts a container in roughly 100-1000 ms, and caps a single invocation at 15 minutes of runtime - a limit that shapes what FaaS suits (event handlers, APIs, glue code) and what it does not (long batch jobs, stateful services). Azure Functions and Google Cloud Functions mirror the model. Serverless is the umbrella term: FaaS plus managed storage/queues where infrastructure management and idle cost both reach zero.",
              "Containers as a Service (CaaS) rents managed orchestration rather than raw VMs or abstract functions. Amazon ECS runs Docker containers on managed clusters; Amazon EKS, Azure AKS and Google GKE run Kubernetes, where the consumer declares desired state ('3 replicas of this image') in YAML and the control plane schedules pods across nodes, restarts failed ones and scales on metrics. CaaS sits between IaaS and PaaS: the consumer still chooses images and resource limits (more control than PaaS), but abandons cluster plumbing (less burden than IaaS). A quick positioning sentence scores well: 'DBaaS manages a component, FaaS manages an event, CaaS manages a fleet of containers.'",
              "Choosing among them is a routine exam scenario. A steady, stateful application with custom system dependencies: IaaS or CaaS, because you control the environment. A CRUD API with variable traffic and no long-running state: FaaS, because idle cost is zero and scaling is automatic. A relational database without a DBA on staff: DBaaS, because backup and failover come configured. A strict-compliance environment needing kernel-level control: IaaS, because managed services restrict low-level access. Present each choice as one sentence of requirement mapped to one sentence of model property - that mapping is the marking scheme.",
            ],
            bullets: [
              "DBaaS: managed database engine - RDS (MySQL/PostgreSQL/SQL Server) with automated backup, patching, multi-AZ failover, read replicas.",
              "DynamoDB: serverless NoSQL DBaaS with single-digit-millisecond latency at any scale.",
              "FaaS: run functions per event; Lambda bills about 0.20 dollars per million requests plus GB-seconds, 15-minute cap.",
              "Cold start: first invocation of a FaaS function pays roughly 100-1000 ms initialisation latency.",
              "CaaS: managed container orchestration - ECS, EKS, AKS, GKE; declare replicas in YAML, control plane schedules pods.",
              "Positioning: DBaaS manages a component, FaaS manages an event, CaaS manages a container fleet.",
              "Selection rule: stateful/custom stack -> IaaS or CaaS; event-driven spiky API -> FaaS; no-DBA database -> DBaaS.",
            ],
            codeExample: {
              language: "bash",
              caption: "One command each: managed database, serverless function, managed Kubernetes.",
              code: `# DBaaS: create a managed PostgreSQL instance (RDS)
aws rds create-db-instance \\
  --db-instance-identifier appdb \\
  --engine postgres \\
  --db-instance-class db.t3.medium \\
  --allocated-storage 20 \\
  --master-username admin \\
  --master-user-password 'S3curePassw0rd' \\
  --multi-az

# FaaS: create a Lambda function from a ZIP
aws lambda create-function \\
  --function-name resize-image \\
  --runtime python3.12 \\
  --handler handler.main \\
  --zip-file fileb://function.zip \\
  --role arn:aws:iam::123456789012:role/lambda-role

# CaaS: create a managed Kubernetes control plane (EKS)
aws eks create-cluster --name prod --role-arn arn:aws:iam::123456789012:role/eks-role`,
            },
            diagram: {
              kind: "pipeline",
              title: "An event flowing through a serverless chain",
              caption:
                "Each stage is a managed service - no server is ever provisioned by hand.",
              stages: [
                { label: "Event source", note: "image uploaded to S3 bucket" },
                { label: "FaaS trigger", note: "Lambda invoked with event JSON" },
                { label: "Function executes", note: "billed per GB-second" },
                { label: "Managed service writes result", note: "DynamoDB record / SQS message" },
                { label: "Scales back to zero", note: "no idle cost" },
              ],
            },
            callout: {
              type: "warning",
              title: "FaaS has hard limits - quote them",
              body: "Answers that call serverless 'infinite compute' lose marks. State the concrete constraints: AWS Lambda caps one invocation at 15 minutes, memory at 10 GB, and charges for execution time - so long batch jobs and stateful services belong on containers or VMs, not functions.",
            },
            keyTerms: [
              { term: "DBaaS", definition: "Database as a Service - provider-managed database engine with automated backups, patching and failover (RDS, DynamoDB)." },
              { term: "FaaS", definition: "Function as a Service - per-invocation execution of uploaded functions with automatic scaling to zero (Lambda, Azure Functions)." },
              { term: "CaaS", definition: "Containers as a Service - managed container orchestration such as EKS, AKS and GKE." },
              { term: "Cold start", definition: "The initialisation latency (about 100-1000 ms) paid on the first invocation of an idle serverless function." },
              { term: "Serverless", definition: "The umbrella pattern of FaaS plus managed backends where infrastructure management and idle billing both vanish." },
            ],
            examQuestions: [
              {
                q: "Explain DBaaS, FaaS and containers as a service with named examples. For each, state what the provider manages, what the consumer still owns, and one workload it fits best.",
                marks: 7,
                outline: [
                  "DBaaS: RDS/DynamoDB; provider handles provisioning, backup, patching, multi-AZ failover; consumer owns schema and access.",
                  "DBaaS fits: teams without DBAs needing relational or key-value storage.",
                  "FaaS: Lambda/Azure Functions; provider runs per event, bills per invocation and GB-seconds; consumer owns function code.",
                  "Constraints: 15-minute invocation cap, cold starts of 100-1000 ms; fits event-driven spiky workloads.",
                  "CaaS: ECS/EKS/AKS/GKE; provider manages control plane; consumer declares replicas and owns images.",
                  "Positioning sentence: DBaaS manages a component, FaaS an event, CaaS a fleet of containers.",
                  "Close with the selection mapping: stateful custom stack -> IaaS/CaaS; spiky API -> FaaS; no-DBA DB -> DBaaS.",
                ],
              },
              {
                q: "Why is a 3-hour video-transcoding batch job a poor fit for AWS Lambda?",
                marks: 3,
              },
              {
                q: "Name one DBaaS service each for relational and NoSQL workloads.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.6",
            title: "SaaS maturity levels and choosing a service model",
            body: [
              "Not every hosted application is equally 'cloudy'. The Chong-Carraro SaaS maturity model grades a multi-user application on two axes - configurability and multi-tenancy - across four levels, and it is a reliable exam question. Level 1, ad-hoc/custom: each customer gets a separate application instance on a separate database, customised per client like classic ASP hosting; simple to reach, but every change means many codebases. Level 2, configurable: all customers share one codebase, and customisation happens through configuration metadata - same application, different settings per tenant.",
              "Level 3, configurable plus multi-tenant-efficient: all tenants share one application and one database, with logical data separation and per-tenant configurability - this is where economies of scale genuinely begin, because hardware and maintenance are amortised across everyone. Level 4, scalable configurable multi-tenant: Level 3 plus horizontal scalability - load balancing, stateless tiers, and data sharding so tenant count grows by adding commodity servers rather than rewriting the application. Salesforce and Google are Level 4 poster children; a legacy ASP product is Level 1. A crisp exam line: 'maturity rises as separate instances become shared instances and shared instances become elastically scaled shared instances.'",
              "The maturity model doubles as a migration roadmap: an ISV moves Level 1 -> 2 by extracting configuration into metadata, 2 -> 3 by sharing the database with tenant IDs and row-level isolation, 3 -> 4 by making the tier stateless and sharding data. Each step trades engineering effort for per-tenant cost reduction, which is why providers push maturity upward.",
              "Choosing an overall service model is the section's second exam staple. Criteria to weigh: control (need to choose the kernel? IaaS), development speed (push code and go? PaaS), administration appetite (nobody to patch anything? SaaS), elasticity needs (spiky? PaaS/FaaS over IaaS), compliance (data location and audit demands may force private or specific regions), and cost profile (per-hour, per-build or per-seat economics). A disciplined answer scores each criterion per model in a table and closes with a recommendation sentence tied to the scenario, for example: 'a two-person startup building a CRUD API with unpredictable traffic should choose PaaS/FaaS; a bank running a licensed core-banking product with regulatory audits should choose IaaS in a compliant region.'",
            ],
            bullets: [
              "Level 1 - ad-hoc/custom: separate instance and database per customer; many codebases to maintain.",
              "Level 2 - configurable: one codebase, per-tenant settings held as configuration metadata.",
              "Level 3 - multi-tenant efficient: one app + one shared database, logically separated tenants; real economies of scale begin.",
              "Level 4 - scalable: Level 3 plus stateless tiers, load balancing and sharding; tenants added by adding servers.",
              "Maturity migration: extract config (1->2), share the DB with tenant IDs (2->3), go stateless and shard (3->4).",
              "Selection criteria: control, dev speed, admin appetite, elasticity, compliance, cost profile.",
              "Scenario rule: spiky startup API -> PaaS/FaaS; regulated licensed product -> IaaS in a compliant region.",
            ],
            table: {
              caption: "Chong-Carraro SaaS maturity levels.",
              headers: ["Level", "Application instances", "Database", "Configurability"],
              rows: [
                ["1 - Ad-hoc/custom", "one per customer", "one per customer", "custom code per tenant"],
                ["2 - Configurable", "one codebase", "per-tenant or shared", "metadata-driven settings"],
                ["3 - Multi-tenant efficient", "one shared app", "one shared DB, logical isolation", "metadata-driven settings"],
                ["4 - Scalable", "stateless, load-balanced", "sharded and replicated", "metadata-driven settings"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "SaaS maturity climbs a pyramid",
              caption:
                "Index 0 is the top tier: fewer providers operate Level 4, but those that do amortise costs best.",
              tiers: [
                { label: "Level 4 - scalable multi-tenant", note: "sharding, stateless tiers, elastic growth" },
                { label: "Level 3 - multi-tenant efficient", note: "one app, one DB, logical isolation" },
                { label: "Level 2 - configurable", note: "one codebase, per-tenant metadata" },
                { label: "Level 1 - ad-hoc/custom", note: "separate instance and DB per customer" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the model when you use it",
              body: "Examiners award precision points for 'Chong-Carraro SaaS maturity model' over a bare list of levels. Quote both axes - configurability and multi-tenancy - before walking Level 1 to 4, and attach one real product per end (Salesforce at Level 4, classic ASP hosting at Level 1).",
            },
            keyTerms: [
              { term: "SaaS maturity model", definition: "Chong-Carraro four-level grading (ad-hoc, configurable, multi-tenant efficient, scalable) of hosted applications." },
              { term: "Configurable multi-tenancy", definition: "Per-tenant customisation stored as metadata rather than separate code or instances." },
              { term: "Data sharding", definition: "Horizontally partitioning a shared database across servers so tenant count can grow without redesign." },
              { term: "Stateless tier", definition: "An application layer holding no per-request state, allowing any replica to serve any request - the enabler of horizontal scaling." },
              { term: "Service-model selection", definition: "Choosing IaaS/PaaS/SaaS by scoring control, speed, administration, elasticity, compliance and cost." },
            ],
            examQuestions: [
              {
                q: "Describe the four levels of the SaaS maturity model, state the two axes it grades, and explain how an ISV migrates from Level 1 to Level 4.",
                marks: 7,
                outline: [
                  "Name the model: Chong-Carraro; axes are configurability and multi-tenancy.",
                  "Level 1 ad-hoc/custom: separate instance + DB per customer; custom code; costly maintenance.",
                  "Level 2 configurable: single codebase, per-tenant metadata settings.",
                  "Level 3 multi-tenant efficient: one app + one shared database with logical isolation.",
                  "Level 4 scalable: stateless tiers, load balancing, sharding - tenants added by adding servers.",
                  "Migration path: extract configuration (1->2), share DB with tenant IDs (2->3), go stateless and shard (3->4).",
                  "Note the motivation: each step lowers per-tenant cost; cite Salesforce as Level 4.",
                ],
              },
              {
                q: "Which maturity level first delivers genuine economies of scale, and why?",
                marks: 3,
              },
              {
                q: "State two selection criteria that favour choosing PaaS over IaaS.",
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
      title: "Virtualization and Cloud Architecture",
      summary:
        "The machinery under the cloud: hypervisors of type 1 and type 2, full versus para-virtualization, the shift from virtual machines to containers and Kubernetes, CPU/memory/storage/network virtualization techniques, multi-tenancy with its isolation challenges, and the data-centre design triad of load balancing, fault tolerance and QoS with SLAs.",
      chapter: {
        number: "03",
        title: "Inside the Hypervisor and the Data Centre",
        intro:
          "Unit III explains what makes cloud computing technically possible. A hypervisor carves one physical server into many isolated virtual machines; the choice of Type 1 versus Type 2, and of full versus para-virtualization, determines performance. Containers swap the hypervisor for shared-kernel namespaces and start in milliseconds, and Kubernetes orchestrates them at fleet scale. The unit closes with the data-centre techniques examiners ask about by name: load balancing algorithms, fault tolerance via availability zones, and the arithmetic of SLA percentages.",
        inOneBreath:
          "A hypervisor is software that multiplexes physical hardware into isolated VMs, each with its own guest OS. Type 1 hypervisors (Xen, ESXi, Hyper-V, KVM) run bare-metal for production performance; Type 2 hypervisors (VirtualBox, VMware Workstation) run on a host OS for convenience. Full virtualization traps and translates privileged instructions so unmodified OSes run (fast today thanks to Intel VT-x hardware assists); para-virtualization modifies the guest OS to call hypercalls directly (Xen's original approach). Containers virtualize at the OS level - Docker images share the host kernel, use namespaces and cgroups for isolation, start in under a second, and occupy MBs versus VMs' GBs; Kubernetes schedules pods, replicates them, and heals failures. Resource-level techniques include vCPU time-slicing, memory ballooning and overcommit, thin provisioning, virtual switches and SR-IOV. Multi-tenancy requires quotas and isolation against noisy neighbours, and data-centre design adds load balancers (round robin, least connections, L4/L7), fault tolerance across availability zones, and SLA arithmetic - 99.95 percent permits about 21.6 minutes of downtime per 30-day month.",
        sections: [
          {
            number: "3.1",
            title: "Hypervisors: Type 1 versus Type 2",
            body: [
              "A hypervisor (virtual machine monitor, VMM) is the software layer that splits one physical machine into multiple isolated virtual machines, each believing it owns real CPU, memory, disk and network. Its three classic duties are: provide an environment equivalent to a real machine, control resource sharing fairly, and deliver performance close to native. Isolation is the property cloud depends on - a crash or compromise in one VM must not leak into its neighbours on the same host, because dozens of paying tenants share that host.",
              "Type 1 hypervisors run directly on bare metal, with no host operating system beneath them; examples are Xen, VMware ESXi, Microsoft Hyper-V and KVM (the Linux kernel acting as hypervisor). Because there is no general-purpose OS in the path, Type 1 offers better performance, smaller attack surface and the reliability production clouds need - every AWS EC2 host runs a Type 1 hypervisor. Type 2 hypervisors run as an application on top of a host OS (Windows or macOS): VMware Workstation, Oracle VirtualBox, Parallels. The host OS owns the hardware and the hypervisor is just another process, which costs performance but makes installation trivial - the standard choice for a student laptop building exam lab VMs.",
              "The exam table writes itself. Location: Type 1 on bare metal, Type 2 on a host OS. Performance: Type 1 near-native, Type 2 taxed by the host OS. Overhead and attack surface: smaller for Type 1. Use case: Type 1 for data centres and cloud providers, Type 2 for desktops, learning and testing. Examples: pair Xen/ESXi/Hyper-V/KVM against VirtualBox/Workstation/Parallels. A frequent 2-mark question is 'why do cloud providers use Type 1?' and the full answer cites three of those rows - performance at scale, isolation strength, and the inability to tolerate a host OS crash in the serving path.",
              "KVM deserves one extra sentence because it appears in Indian syllabi and interviews. KVM (Kernel-based Virtual Machine) turns the Linux kernel itself into a Type 1 hypervisor: each VM becomes a regular Linux process scheduled by the kernel, hardware-assisted by Intel VT-x or AMD-V, and managed with tools like virsh or libvirt. It shows that the Type 1 boundary is about who owns the hardware, not about running inside a kernel - Linux owns the hardware, so KVM is bare-metal even though it lives in kernel space. Mentioning KVM, Open vSwitch and libvirt demonstrates awareness that open-source stacks (as used by many Indian providers and private clouds) follow the same architecture.",
            ],
            bullets: [
              "Hypervisor (VMM): splits one physical host into isolated VMs; must provide fidelity, fair sharing and near-native performance.",
              "Type 1 runs bare-metal: Xen, VMware ESXi, Hyper-V, KVM - production clouds use these.",
              "Type 2 runs on a host OS: VirtualBox, VMware Workstation, Parallels - desktop use, easier install, slower.",
              "Type 1 advantages: near-native speed, smaller attack surface, no host OS crash in the serving path.",
              "Type 2 advantages: zero special hardware setup, snapshots for learning labs, coexists with daily-use OS.",
              "KVM makes the Linux kernel itself a Type 1 hypervisor; VMs are ordinary kernel-managed processes.",
              "Hardware support: Intel VT-x / AMD-V CPU extensions let hypervisors run guests with minimal trapping.",
            ],
            table: {
              caption: "Type 1 vs Type 2 hypervisors - the standard comparison table.",
              headers: ["Aspect", "Type 1 (bare metal)", "Type 2 (hosted)"],
              rows: [
                ["Runs on", "Physical hardware directly", "A host operating system"],
                ["Examples", "Xen, ESXi, Hyper-V, KVM", "VirtualBox, VMware Workstation"],
                ["Performance", "Near-native", "Taxed by the host OS"],
                ["Attack surface", "Small (no general OS beneath)", "Larger (host OS exposed)"],
                ["Typical use", "Data centres, cloud providers", "Desktops, labs, testing"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Where each hypervisor type sits in the stack",
              caption:
                "Count the layers between the VM and the metal - fewer layers, faster VM.",
              layers: [
                { label: "Virtual machines (guest OSes)", note: "both types" },
                { label: "Type 2: hypervisor app (VirtualBox)", note: "runs as a process" },
                { label: "Host OS (Windows/macOS/Linux)", note: "Type 2 only" },
                { label: "Type 1: hypervisor (Xen / ESXi / KVM)", note: "replaces the host OS" },
                { label: "Physical CPU, memory, disk, NIC", note: "bare metal" },
              ],
            },
            callout: {
              type: "exam",
              title: "Classify KVM correctly or lose the mark",
              body: "Students often call KVM a Type 2 hypervisor because it lives 'inside' Linux. Correct answer: KVM is Type 1 because the Linux kernel owns the hardware directly and each VM is scheduled like a process - there is no host OS below it. One sentence on VT-x hardware assistance completes the answer.",
            },
            keyTerms: [
              { term: "Hypervisor / VMM", definition: "Software that divides one physical machine into multiple isolated virtual machines with near-native performance." },
              { term: "Type 1 hypervisor", definition: "A bare-metal hypervisor running directly on hardware - Xen, ESXi, Hyper-V, KVM." },
              { term: "Type 2 hypervisor", definition: "A hosted hypervisor running as an application on a regular OS - VirtualBox, VMware Workstation." },
              { term: "KVM", definition: "Kernel-based Virtual Machine - the Linux kernel acting as a Type 1 hypervisor, managed via libvirt/virsh." },
              { term: "Intel VT-x", definition: "CPU virtualization extensions that let sensitive guest instructions be handled without slow binary translation." },
            ],
            examQuestions: [
              {
                q: "Define a hypervisor and differentiate Type 1 and Type 2 hypervisors with examples, advantages and use cases. Why do public cloud providers use Type 1 hypervisors exclusively?",
                marks: 7,
                outline: [
                  "Define hypervisor/VMM and its three duties: fidelity, resource sharing, near-native performance.",
                  "Type 1: bare-metal (Xen, ESXi, Hyper-V, KVM); no host OS beneath.",
                  "Type 2: hosted on a general OS (VirtualBox, Workstation); hypervisor is an application.",
                  "Compare: performance, overhead, attack surface, installation ease.",
                  "Use cases: Type 1 for cloud data centres, Type 2 for desktops and labs.",
                  "Provider justification: near-native performance at fleet scale, stronger isolation, no host-OS crash in the serving path.",
                  "Add KVM nuance: Linux kernel as Type 1 hypervisor with VT-x hardware assistance.",
                ],
              },
              {
                q: "Classify KVM as Type 1 or Type 2 and justify your answer in two sentences.",
                marks: 3,
              },
              {
                q: "Name two Type 2 hypervisors and state one reason they are unsuitable for production cloud hosts.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.2",
            title: "Full virtualization versus para-virtualization",
            body: [
              "The hypervisor's hardest job is handling privileged instructions: guest operating systems execute kernel-mode instructions (page-table manipulation, I/O port access, interrupts) that, on a shared machine, must not touch real hardware. CPU architectures before hardware assists left four rings of protection, and the guest OS had to live in ring 1 while the hypervisor kept ring 0 - leaving many sensitive instructions that behaved differently when run unprivileged. Two strategies emerged: trap-and-emulate the instructions (full virtualization) or rewrite the guest to avoid them (para-virtualization).",
              "Full virtualization runs the guest OS completely unmodified. The hypervisor detects sensitive instructions via binary translation - scanning guest code and replacing privileged sequences with safe traps into the hypervisor - so any OS (Windows, old Linux, Solaris) runs unchanged, which is full virtualization's great advantage: compatibility. The cost was speed: VMware's 32-bit binary translation cost roughly 10-30 percent overhead on privileged-heavy workloads. Hardware virtualization extensions changed the economics: with Intel VT-x / AMD-V the CPU itself traps sensitive instructions into a new guest mode, cutting overhead to low single digits, so today 'full virtualization' practically means 'hardware-assisted full virtualization' - the mode every public cloud uses for unmodified guests.",
              "Para-virtualization modifies the guest OS source so it never issues sensitive instructions; instead it calls the hypervisor directly through hypercalls - explicit function calls, like a syscall into the VMM. Xen's original paravirt mode ran modified Linux guests this way, achieving near-native I/O performance because the guest knew it was virtualized and cooperated: its drivers talked to a shared-memory ring rather than emulated hardware. The trade is the mirror image of full virtualization: excellent performance, but the guest must be modified - which is trivial for open-source Linux (the paravirt_ops patches) and impossible for closed-source Windows (until Xen offered hardware-assisted modes for it).",
              "The exam answer is a two-column contrast plus one modern note. Full: unmodified guest, any OS, binary translation or VT-x traps, moderate overhead, strongest compatibility (VMware's flagship mode). Para: modified guest, Linux-family only originally, hypercalls and cooperative drivers, near-native I/O, needs source access (Xen paravirt). Modern note: hardware assists (VT-x, EPT/NPT for memory, SR-IOV for I/O) have narrowed the gap so far that clouds default to hardware-assisted full virtualization and use para-virtualized drivers (virtio) only where they still win - virtio-net and virtio-blk deliver high I/O throughput by replacing emulated NICs and disks with efficient shared-memory queues. Naming virtio shows you know para-virtualization did not die; it moved into the drivers.",
            ],
            bullets: [
              "Core problem: guest OSes issue privileged instructions that must be trapped and redirected on shared hardware.",
              "Full virtualization: unmodified guest; hypervisor uses binary translation (or VT-x traps) to emulate privileged behaviour.",
              "Para-virtualization: guest OS modified to issue hypercalls instead of sensitive instructions (Xen paravirt).",
              "Full = maximum compatibility (any OS); para = maximum I/O performance but needs guest source access.",
              "Hardware assists: Intel VT-x/AMD-V for CPU, EPT/NPT for memory, cut full-virtualization overhead to low single digits.",
              "virtio drivers are para-virtualization's modern form: efficient shared-memory queues for net/block I/O.",
              "Public clouds default to hardware-assisted full virtualization plus virtio drivers for I/O.",
            ],
            table: {
              caption: "Full vs para-virtualization - contrast every row in the exam.",
              headers: ["Aspect", "Full virtualization", "Para-virtualization"],
              rows: [
                ["Guest OS", "Unmodified (Windows, any Linux)", "Modified kernel (Xen Linux)"],
                ["Mechanism", "Binary translation / VT-x traps", "Hypercalls from the guest"],
                ["I/O path", "Emulated hardware", "Cooperative ring buffers (virtio)"],
                ["Performance", "Good with VT-x; slow without", "Near-native I/O"],
                ["Requirement", "None beyond VT-x", "Guest OS source access"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two ways to handle a privileged instruction",
              caption:
                "Trap-and-emulate versus cooperative hypercalls - the heart of the 7-mark answer.",
              left: {
                heading: "Full virtualization",
                items: [
                  "Guest issues a privileged instruction normally",
                  "CPU/hypervisor traps it (VT-x or binary translation)",
                  "Hypervisor emulates the hardware effect",
                  "Any unmodified OS runs",
                  "Cost: trap overhead per privileged event",
                ],
              },
              right: {
                heading: "Para-virtualization",
                items: [
                  "Guest kernel is modified in advance",
                  "It calls a hypercall instead of the instruction",
                  "Hypervisor executes the effect directly",
                  "Needs guest source (Linux paravirt_ops)",
                  "Benefit: near-native I/O via virtio rings",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "End every virtualization answer with hardware assists",
              body: "The distinction predates Intel VT-x (2005), and answers that stop at 'binary translation vs hypercalls' sound dated. One closing sentence - 'modern CPUs trap sensitive instructions in silicon via VT-x/EPT, so full virtualization is now the default and para-virtualization survives as virtio drivers' - signals a current understanding worth the extra mark.",
            },
            keyTerms: [
              { term: "Full virtualization", definition: "Running an unmodified guest OS by trapping and emulating its privileged instructions (hardware-assisted today)." },
              { term: "Para-virtualization", definition: "Modifying the guest kernel to call hypervisor hypercalls directly instead of issuing sensitive instructions." },
              { term: "Hypercall", definition: "An explicit call from a para-virtualized guest into the hypervisor, analogous to a syscall." },
              { term: "Binary translation", definition: "VMware's pre-VT-x technique of rewriting guest code on the fly so privileged sequences trap safely." },
              { term: "virtio", definition: "Standard para-virtualized device drivers (network, block) using efficient shared-memory queues with the hypervisor." },
            ],
            examQuestions: [
              {
                q: "Differentiate full virtualization and para-virtualization with mechanisms, examples and performance trade-offs. Explain how hardware-assisted virtualization changed the balance between them.",
                marks: 7,
                outline: [
                  "State the underlying problem: privileged guest instructions on shared hardware.",
                  "Full virtualization: unmodified guest; binary translation pre-VT-x, VT-x/EPT traps today; any OS runs.",
                  "Para-virtualization: modified guest issues hypercalls; Xen paravirt Linux; needs source access.",
                  "Performance contrast: para near-native I/O via ring buffers; full slow pre-VT-x (10-30 percent), low single digits with VT-x.",
                  "Mention virtio as modern para-virtualized drivers for net/block I/O.",
                  "Hardware assists: VT-x/AMD-V CPU modes, EPT/NPT memory, SR-IOV I/O.",
                  "Conclude: clouds default to hardware-assisted full virtualization with virtio drivers for I/O.",
                ],
              },
              {
                q: "Why could Xen's original para-virtual mode not run unmodified Windows guests?",
                marks: 3,
              },
              {
                q: "What is a hypercall and which OS-level mechanism is it analogous to?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Virtual machines versus containers: Docker and Kubernetes",
            body: [
              "Virtualization has two rival points of leverage on the stack. A virtual machine virtualizes hardware: each VM boots its own guest OS on a hypervisor-provided virtual machine, so VMs are heavy (GBs of image, tens of seconds to boot) but perfectly isolated with their own kernels. A container virtualizes the operating system: Docker packages an application with its user-space libraries into an image, and the container runtime runs it as an isolated process group on the host's shared kernel using namespaces (isolation of PID, network, mount, user views) and cgroups (limits on CPU, memory, I/O per container). Nothing like a guest OS exists - that is why a container starts in under a second and an image is tens of MB.",
              "The comparison table is a guaranteed exam item. Boot time: VM tens of seconds, container under a second. Image size: VM GBs (whole OS), container MBs (app + libs). Isolation: VM strong (hardware-level, separate kernel), container process-level (shared kernel; a kernel vulnerability is shared). Portability: VM image tied to hypervisor format, container image runs anywhere Docker/OCI runs. Density: a host runs dozens of VMs or hundreds of containers. Overhead: each VM pays for a whole OS's RAM and CPU; a container pays only for the app. Practical rule: multi-tenant cloud providers who sell isolated machines use VMs; teams shipping microservices use containers, often with a VM per node for the outer isolation ring.",
              "Docker made containers mainstream with a three-command workflow: 'docker build -t myapp:v1 .' builds an image from a Dockerfile (each instruction such as FROM python:3.12-slim, COPY, RUN pip install, CMD layers the filesystem); 'docker run -p 8000:8000 myapp:v1' starts it with a port mapping; 'docker push' publishes it to a registry (Docker Hub or a private one) so any host can pull and run the identical image - the property that ended the 'works on my machine' era. Images are layered and content-addressed, so a base layer (the 45 MB python:3.12-slim) is shared by every app built on it, keeping disk use tiny across hundreds of containers.",
              "Containers per host are easy; thousands across a data centre need an orchestrator, and Kubernetes is the exam's named one. The consumer declares desired state in YAML - a Deployment saying '3 replicas of image myapp:v1, each wanting 0.5 CPU and 512 MB' - and the Kubernetes control plane continuously reconciles reality to the declaration: it schedules pods (the smallest unit, one or more containers sharing network and storage) onto worker nodes, restarts crashed containers via liveness probes, scales replica counts on CPU or custom metrics, and rolls out updates gradually (rolling deployment) with instant rollback. Services give the shifting pods a stable virtual IP and DNS name with built-in load balancing. Managed Kubernetes is offered as CaaS by all three major providers (EKS, AKS, GKE), which is the connective tissue to section 2.5.",
            ],
            bullets: [
              "VM virtualizes hardware: own guest OS per VM, GBs of image, tens of seconds to boot, hardware-level isolation.",
              "Container virtualizes the OS: shared host kernel, namespaces for isolation, cgroups for resource limits.",
              "Container boot is under a second and images are tens of MB because no guest OS is packaged.",
              "Isolation trade: VMs are stronger (separate kernel); a container shares kernel vulnerabilities with its host.",
              "Docker workflow: build from Dockerfile layers, run with port mapping, push to a registry for identical redeployment.",
              "Kubernetes: declare desired state in YAML; control plane schedules pods, heals failures, scales and rolls out updates.",
              "Pod = smallest Kubernetes unit (one or more containers sharing network/storage); Services give stable DNS + virtual IP.",
            ],
            codeExample: {
              language: "bash",
              caption: "Containerising a Python app and running it on Kubernetes.",
              code: `# Dockerfile
# FROM python:3.12-slim
# COPY app.py requirements.txt ./
# RUN pip install -r requirements.txt
# CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]

docker build -t myapp:v1 .            # layer-by-layer image build
docker run -d -p 8000:8000 myapp:v1   # start container, map port
docker push registry.example.com/myapp:v1

# Kubernetes: declare 3 replicas, 0.5 CPU each
kubectl apply -f deployment.yaml      # Deployment: replicas: 3
kubectl get pods -o wide              # watch pods schedule across nodes
kubectl scale deployment myapp --replicas=6
kubectl rollout status deployment myapp`,
            },
            diagram: {
              kind: "compare",
              title: "Virtual machine versus container",
              caption:
                "Two isolation points on the stack: below the OS (VM) or beside the app (container).",
              left: {
                heading: "Virtual machine",
                items: [
                  "Own guest OS per VM",
                  "Image size in GBs",
                  "Boots in tens of seconds",
                  "Hardware-level isolation - strongest",
                  "Dozens per host at most",
                ],
              },
              right: {
                heading: "Container (Docker)",
                items: [
                  "Shared host kernel, no guest OS",
                  "Image size in tens of MB",
                  "Starts in under a second",
                  "Process-level isolation (namespaces, cgroups)",
                  "Hundreds per host",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Say 'namespaces and cgroups' - not just 'lightweight'",
              body: "'Containers are lightweight VMs' is worth one mark at most. The technical answer names the two kernel mechanisms: namespaces give each container private PID, network and mount views; cgroups cap its CPU, memory and I/O. Write both words with one line of explanation and the isolation half of the question is fully earned.",
            },
            keyTerms: [
              { term: "Container image", definition: "A layered, immutable filesystem package holding an application and its libraries, run identically anywhere an OCI runtime exists." },
              { term: "Namespace", definition: "Linux kernel feature giving a process group private views of PIDs, network stacks, mounts and users." },
              { term: "cgroups", definition: "Linux kernel feature limiting the CPU, memory and I/O a container may consume." },
              { term: "Pod", definition: "Kubernetes' smallest schedulable unit - one or more containers sharing network and storage." },
              { term: "Orchestrator", definition: "A system (Kubernetes) that schedules containers across hosts, replicates them, heals failures and scales on metrics." },
            ],
            examQuestions: [
              {
                q: "Differentiate virtual machines and containers on architecture, isolation, boot time, image size and density. Explain Docker's build-run-push workflow and how Kubernetes orchestrates containers at scale.",
                marks: 7,
                outline: [
                  "VM virtualizes hardware with a per-VM guest OS; container virtualizes the OS on a shared kernel.",
                  "Isolation: VM stronger (separate kernel) vs container process-level via namespaces and cgroups.",
                  "Numbers: VM image GBs and boots in tens of seconds; container image tens of MB and starts in under a second.",
                  "Density: dozens of VMs vs hundreds of containers per host.",
                  "Docker: Dockerfile layers -> 'docker build -t myapp:v1' -> 'docker run -p 8000:8000' -> 'docker push' to registry.",
                  "Kubernetes: YAML declares replicas and resource limits; control plane schedules pods, restarts failed ones, scales on metrics.",
                  "Pods are the schedulable unit; Services give stable DNS/virtual IP; managed offerings are EKS/AKS/GKE.",
                ],
              },
              {
                q: "Which two Linux kernel mechanisms provide container isolation and resource limiting?",
                marks: 2,
              },
              {
                q: "A SaaS provider hosting unrelated customer companies: VMs or containers for tenant isolation, and why?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "CPU, memory, storage and network virtualization",
            body: [
              "Virtualizing compute means virtualizing the CPU first. The hypervisor time-slices physical cores across vCPUs: each guest vCPU is a schedulable entity, and the hypervisor scheduler dispatches vCPUs onto cores much as an OS dispatches threads, preserving the illusion that each VM owns its processors. Hardware assists made this cheap: Intel VT-x and AMD-V give the CPU a guest execution mode, so most instructions run at native speed and only sensitive ones trap. Overcommit is the cloud's economic trick - a 64-core host can host VMs summing to 200 vCPUs, because tenants rarely peak simultaneously - but oversubscription is bounded by the noisy-neighbour effect, which is why providers sell CPU-credits on burstable types like t3 rather than unbounded overcommit.",
              "Memory virtualization adds a second layer of address translation. Guest virtual addresses map to guest physical addresses via the guest page tables, and guest physical addresses map to machine addresses via hypervisor tables; without help every guest memory access would cost two or three walks. Intel EPT (Extended Page Tables, called NPT by AMD) lets the hardware walk both mappings in one pass, removing most of the cost. On top of this sit management techniques: memory ballooning asks a guest driver to 'inflate' and release unused pages back to the host so other VMs can use them; page sharing deduplicates identical pages across VMs (thousands of Windows guests share one copy of each zero page); and thin provisioning allocates guest disk lazily, so a 100 GB virtual disk consumes only the blocks actually written.",
              "Storage virtualization turns physical disks into virtual volumes. On the host, local disks and network storage (iSCSI SAN, NFS) are pooled by a storage layer - LVM or a distributed system like Ceph - and carved into virtual disks that attach to VMs as if they were local: EBS in AWS is exactly this, a network-attached virtual block device replicated across a data-centre rack so a host failure does not lose the volume. Snapshots become cheap copy-on-write operations - a snapshot freezes the block map in microseconds and new writes go to fresh blocks - which is why exam answers mention CoW when asked 'how do cloud snapshots work'. Thin provisioning plus snapshots is how a consumer can 'own' 10 TB of volumes on 2 TB of physical storage.",
              "Network virtualization is the final pillar and the one VPC questions probe. The hypervisor contains a virtual switch (Open vSwitch, or AWS's Nitro-offloaded networking) that switches packets between VMs on the same host and forwards to the physical NIC; VLANs or overlay tunnels (VXLAN, Geneve) tag each tenant's traffic so ten tenants' flat networks never collide on one physical LAN. Software-defined networking extends this: the VPC's subnets, route tables and security groups are programmatic rules applied to virtual switches, so 'create an isolated subnet' is an API call, not a cable change. For maximum performance, SR-IOV lets a NIC present multiple virtual functions, one mapped directly into a VM so packets bypass the hypervisor switch entirely - the technique behind EC2's highest network-performance instances.",
            ],
            bullets: [
              "CPU: hypervisor time-slices cores across vCPUs; VT-x/AMD-V provide a guest mode so most code runs natively.",
              "Overcommit: 64 physical cores can host 200 vCPUs; burstable t3 types meter this with CPU credits.",
              "Memory: guest-virtual -> guest-physical -> machine translation; EPT/NPT collapses it to one hardware walk.",
              "Ballooning returns unused guest pages to the host; page sharing deduplicates identical pages across VMs.",
              "Thin provisioning: a 100 GB virtual disk consumes only blocks actually written.",
              "Storage: pooled network storage carved into virtual volumes (EBS), replicated per rack; snapshots are cheap copy-on-write.",
              "Network: virtual switches + VLAN/VXLAN overlays isolate tenants; VPC = SDN rules; SR-IOV bypasses the switch for speed.",
            ],
            table: {
              caption: "One technique per virtualized resource - the four-row summary examiners expect.",
              headers: ["Resource", "Key technique", "Cloud example"],
              rows: [
                ["CPU", "Time-sliced vCPUs + VT-x guest mode", "64-core host, 200 vCPUs sold; t3 CPU credits"],
                ["Memory", "EPT/NPT two-level paging + ballooning", "Ballooning returns idle pages; KSM page sharing"],
                ["Storage", "Pooled volumes, thin provisioning, CoW snapshots", "EBS gp3 volumes, instant snapshots"],
                ["Network", "Virtual switch + VXLAN overlay, SR-IOV bypass", "VPC subnets/security groups; Nitro networking"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The virtualized resource stack on one host",
              caption:
                "Each physical resource is multiplexed by a hypervisor component before any VM sees it.",
              layers: [
                { label: "VMs: guest OSes see private vCPU, RAM, disk, NIC", note: "the illusion" },
                { label: "Hypervisor scheduler + memory manager", note: "time-slicing, EPT, ballooning" },
                { label: "Virtual switch + volume layer", note: "OVS forwarding, pooled blocks" },
                { label: "Physical cores, DRAM, disks, NIC", note: "real hardware" },
              ],
            },
            callout: {
              type: "warning",
              title: "Do not confuse thin provisioning with overcommit of CPU",
              body: "Both are 'sell more than you own', but they differ: thin provisioning commits disk blocks lazily as they are written (safe, since unused blocks exist), while CPU overcommit assumes simultaneous peaks will not collide (bounded, since they can collide). Answers that use the two interchangeably lose the precision mark - name the resource each technique manages.",
            },
            keyTerms: [
              { term: "vCPU", definition: "A virtual CPU the hypervisor schedules onto physical cores; guests see it as a dedicated processor." },
              { term: "EPT / NPT", definition: "Extended/Nested Page Tables - hardware that walks guest-to-machine memory mappings in one pass." },
              { term: "Memory ballooning", definition: "A guest driver releases claimed-but-unused pages back to the host so other VMs can consume them." },
              { term: "Thin provisioning", definition: "Allocating storage lazily so a virtual volume consumes only the blocks actually written." },
              { term: "SR-IOV", definition: "NIC feature exposing multiple virtual functions so a VM's packets bypass the hypervisor switch." },
            ],
            examQuestions: [
              {
                q: "Explain how CPU, memory, storage and network are virtualized in a cloud data centre, naming one concrete technique and one real service example for each.",
                marks: 7,
                outline: [
                  "CPU: vCPU time-slicing by the hypervisor scheduler; VT-x guest mode; example - t3 burstable credits, 200 vCPUs on 64 cores.",
                  "Memory: two-level translation collapsed by EPT/NPT; ballooning returns idle pages; page sharing deduplicates.",
                  "Storage: pooled network storage carved into virtual volumes; thin provisioning; EBS as replicated block device.",
                  "Snapshots as copy-on-write: map frozen instantly, new writes to fresh blocks.",
                  "Network: virtual switch in the hypervisor; VXLAN/VLAN tenant tagging; VPC subnets and security groups as SDN rules.",
                  "SR-IOV: virtual NIC functions bypass the switch for near-native throughput.",
                  "Conclude: each resource pairs a multiplexing mechanism with an isolation guarantee.",
                ],
              },
              {
                q: "How does memory ballooning help a host running more VMs than its RAM would normally allow?",
                marks: 3,
              },
              {
                q: "Why is a cloud storage snapshot 'cheap'? Name the technique.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Multi-tenancy and resource isolation",
            body: [
              "Multi-tenancy is the deliberate sharing of one physical or software infrastructure by multiple tenants (customers or applications) with logical separation, and it is the property that makes cloud economics work: a 128-core host serving 40 tenants at 70 percent utilisation beats 40 hosts at 15 percent. The exam answer must pair the benefit with its price. Sharing multiplies utilisation and cuts per-tenant cost; but every shared layer - CPU cache, memory bandwidth, network fabric, database tables - is a channel through which one tenant's behaviour can degrade or attack another's. The classic manifestation is the noisy neighbour: one tenant's runaway batch job consumes shared CPU, disk IOPS or bandwidth and every co-tenant's latency rises.",
              "Isolation is engineered layer by layer. Hardware: the hypervisor partitions vCPUs and memory, and hardware assists (EPT, IOMMU) stop guests addressing each other's devices; cache-side channels remain a research topic, which is why strict tenants buy dedicated hosts. Operating system level: namespaces and cgroups isolate containers; quotas (per-tenant CPU shares, IOPS caps, memory limits) turn a noisy neighbour into a throttled one. Application level: in shared databases every row carries a tenant ID and every query is filtered by it (row-level security in PostgreSQL, partition keys in DynamoDB), so logical separation substitutes for physical separation - the Level 3 SaaS pattern from section 2.6. Network level: VLANs/VXLAN overlays and security groups mean tenants' packets never meet.",
              "Fairness mechanisms complete the picture. Resource quotas and reservations are set per tenant (a cgroup cap of 2 vCPU and 4 GB, an IOPS limit of 3000, an API rate of 100 requests/second); schedulers enforce weighted sharing rather than first-come-first-served; and monitoring per tenant feeds both billing (measured service) and abuse detection. The provider's dilemma is worth one exam sentence: aggressive overcommit maximises revenue but risks SLA violations when tenants do collide, so providers overcommit best-effort tiers (t3, spot) while dedicated/reserved tiers pin capacity. Mentioning that isolation strength is a purchasable dial - shared instance, dedicated instance, dedicated host - shows how the abstract idea is priced.",
              "A worked micro-example makes quotas concrete. Without cgroups, one container running 'while true: hash passwords' takes every core and its neighbours starve. With cgroups capping it at 0.5 CPU and 512 MB, the runaway is throttled to half a core, the host's other 30 containers keep their latencies, and the orchestrator can additionally evict or restart it. The same shape repeats at every layer: an IOPS quota on a volume, a rate limiter on an API key, a query cost guard on a shared database. Write that example in the exam - a two-line scenario plus the cap - because it proves you understand isolation as enforcement, not as a slogan.",
            ],
            bullets: [
              "Multi-tenancy: many tenants share one infrastructure with logical separation - the source of cloud's utilisation advantage.",
              "Noisy neighbour: one tenant's load on shared CPU/IOPS/bandwidth degrades everyone else's latency.",
              "Hardware isolation: hypervisor partitioning plus EPT/IOMMU; strictest tenants buy dedicated hosts.",
              "OS isolation: namespaces + cgroups; quotas (2 vCPU, 512 MB, 3000 IOPS) convert noisy neighbours into throttled jobs.",
              "Application isolation: tenant ID on every row, row-level security, partition keys (Level 3 SaaS pattern).",
              "Network isolation: VXLAN overlays and security groups keep tenant packets separate.",
              "Isolation is purchasable: shared instance -> dedicated instance -> dedicated host, rising cost for rising control.",
            ],
            codeExample: {
              language: "json",
              caption: "A Kubernetes deployment declaring per-container resource quotas.",
              code: `{
  "apiVersion": "apps/v1",
  "kind": "Deployment",
  "metadata": { "name": "worker", "labels": { "tenant": "acme" } },
  "spec": {
    "replicas": 3,
    "template": {
      "spec": {
        "containers": [{
          "name": "worker",
          "image": "registry.example.com/worker:v2",
          "resources": {
            "requests": { "cpu": "0.5", "memory": "512Mi" },
            "limits":   { "cpu": "1",   "memory": "1Gi" }
          }
        }]
      }
    }
  }
}`,
            },
            diagram: {
              kind: "cycle",
              title: "The multi-tenancy management loop",
              caption:
                "Provisioning without metering and rebalancing is how noisy neighbours are born.",
              steps: [
                { label: "Provision tenant", note: "VM/container/DB with quotas set" },
                { label: "Isolate", note: "namespaces, tenant IDs, VXLAN" },
                { label: "Meter usage", note: "per-tenant CPU, IOPS, API calls" },
                { label: "Detect contention", note: "latency SLO per tenant" },
                { label: "Rebalance or throttle", note: "cgroup cap, move tenant, evict" },
                { label: "Bill and audit", note: "measured service closes the loop" },
              ],
            },
            callout: {
              type: "exam",
              title: "Define multi-tenancy with both halves",
              body: "Half-marks live in the definition: multi-tenancy is shared infrastructure AND logical separation - either half alone is wrong (dedicated hardware is not multi-tenant; unseparated sharing is not tenancy). Then give the noisy-neighbour example with a cgroup cap; concrete enforcement is what examiners reward over adjectives like 'secure' and 'efficient'.",
            },
            keyTerms: [
              { term: "Multi-tenancy", definition: "Multiple customers sharing one infrastructure while remaining logically separated from each other." },
              { term: "Noisy neighbour", definition: "A tenant whose shared-resource consumption degrades co-tenants' performance." },
              { term: "Resource quota", definition: "A per-tenant cap (CPU, memory, IOPS, API rate) enforced by the scheduler or kernel." },
              { term: "Row-level security", definition: "Database feature filtering every query by tenant ID so tenants share tables but see only their rows." },
              { term: "Dedicated host", definition: "A physical server pinned to a single customer for maximum isolation, bought at a premium." },
            ],
            examQuestions: [
              {
                q: "What is multi-tenancy and why is it central to cloud economics? Explain the noisy-neighbour problem and describe isolation mechanisms at hardware, OS, application and network levels.",
                marks: 7,
                outline: [
                  "Define multi-tenancy: shared infrastructure + logical separation; utilisation 15 -> 70 percent example.",
                  "Economic benefit: 40 tenants on one 128-core host vs 40 idle hosts; per-tenant cost drops.",
                  "Noisy neighbour: one tenant's batch job on shared CPU/IOPS raises co-tenant latency.",
                  "Hardware: hypervisor partitioning, EPT/IOMMU; dedicated hosts for strict tenants.",
                  "OS: namespaces + cgroups; quota example - cap a runaway at 0.5 CPU and 512 MB.",
                  "Application: tenant ID per row, row-level security, DynamoDB partition keys.",
                  "Network: VXLAN overlays and security groups; close with 'isolation strength is purchasable'.",
                ],
              },
              {
                q: "Explain how a cgroup CPU limit turns a noisy neighbour into a throttled job.",
                marks: 3,
              },
              {
                q: "State two isolation mechanisms used in a shared multi-tenant database.",
                marks: 2,
              },
            ],
          },
          {
            number: "3.6",
            title: "Data-centre design: load balancing, fault tolerance, QoS and SLAs",
            body: [
              "A cloud data centre is engineered around one fact: components fail weekly at fleet scale, so no single machine, rack or even building may be a point of failure. The design pattern is redundancy in tiers - redundant power (UPS plus diesel generators), redundant cooling (N+1 units), redundant network paths (dual switches and uplinks), and, above the building, multiple availability zones: physically separate data-centre clusters with independent power and networking, connected by low-latency links. Deploying across two or three AZs means a building-level event takes down one zone while the service keeps answering - the standard answer to 'how do cloud providers achieve 99.95 percent availability'.",
              "Load balancing spreads incoming requests across the redundant pool, and the exam wants both the algorithms and the layers. Algorithms: round robin cycles through servers in order; weighted round robin sends more traffic to bigger machines; least connections routes each request to the server with the fewest active sessions; IP hash pins a client to one server for session affinity; and health-check-aware balancing removes any server failing its probe automatically. Layers: an L4 (transport) balancer forwards TCP connections without reading them, cheapest and fastest; an L7 (application) balancer reads HTTP, so it can route by URL path, add or terminate TLS, and stick sessions with cookies - the Elastic Load Balancer family and NGINX/HAProxy are the named examples.",
              "Fault tolerance is the discipline of surviving failures without human intervention. Mechanisms in the exam's vocabulary: replication of data (three copies or erasure coding across racks so one rack loss loses nothing), health checks and automatic failover (a load balancer drains a dead instance; a multi-AZ RDS standby is promoted in about a minute), stateless service design so any replica can serve any request, and graceful degradation (serve cached data rather than erroring when the database is slow). The design arithmetic: stateless app tier + replicated data tier + health-checked balancer converts component failure from an outage into a background event.",
              "QoS and SLAs formalise the promise. Quality of Service mechanisms inside the infrastructure guarantee latency or bandwidth classes (traffic shaping, priority queues) so a tenant's premium traffic is not starved by bulk traffic. The Service Level Agreement is the contractual surface: it names availability targets (99.9, 99.95, 99.99 percent), performance bounds (latency, throughput), and compensation (service credits) when targets are missed. The arithmetic is a reliable exam item: 99.9 percent of a 30-day month allows about 43.2 minutes of downtime; 99.95 percent allows about 21.6 minutes; 99.99 percent allows about 4.3 minutes. Also quote the SLA's exclusions - scheduled maintenance windows and customer-caused misconfiguration do not count - and the customer duty to architect for the SLA: buying 99.99 percent infrastructure and deploying into one zone still yields single-zone availability.",
            ],
            bullets: [
              "Redundancy in tiers: dual power (UPS + generators), N+1 cooling, dual network paths per rack.",
              "Availability zones: physically separate clusters with independent power/network; multi-AZ deployment survives building loss.",
              "Load-balancer algorithms: round robin, weighted round robin, least connections, IP hash, health-check removal.",
              "L4 forwards TCP fast and cheap; L7 reads HTTP for path routing, TLS termination and cookie-based session stickiness.",
              "Fault tolerance: data replication (3 copies / erasure coding), automatic failover (multi-AZ RDS promote in about 1 minute), stateless tiers.",
              "SLA arithmetic: 99.9 percent = about 43.2 min/month down; 99.95 = 21.6 min; 99.99 = 4.3 min.",
              "SLA fine print: maintenance windows and customer misconfiguration are excluded; credits, not refunds, are the remedy.",
            ],
            table: {
              caption: "Availability targets translated into monthly downtime (30-day month = 43,200 minutes).",
              headers: ["Availability", "Downtime per month", "Downtime per year", "Typical tier"],
              rows: [
                ["99.0 percent", "432 minutes (7.2 hours)", "about 3.7 days", "internal tools"],
                ["99.9 percent", "43.2 minutes", "about 8.8 hours", "standard web apps"],
                ["99.95 percent", "21.6 minutes", "about 4.4 hours", "multi-AZ production"],
                ["99.99 percent", "4.3 minutes", "about 53 minutes", "multi-region critical"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "One request through a fault-tolerant design",
              caption:
                "Redundancy at every hop - no component's failure can end the request.",
              steps: [
                { label: "DNS + global health check", note: "route to the healthy region" },
                { label: "L7 load balancer", note: "TLS termination, path routing, sticky sessions" },
                { label: "Stateless app pool, 3 AZs", note: "any replica serves any request" },
                { label: "Replicated database", note: "primary + standby, auto-failover" },
                { label: "Failed component auto-replaced", note: "health probe triggers replacement" },
              ],
            },
            callout: {
              type: "exam",
              title: "Memorise three SLA-to-downtime conversions",
              body: "99.9 = 43.2 minutes, 99.95 = 21.6 minutes, 99.99 = 4.3 minutes per 30-day month. Compute them live if you forget: (1 - availability) x 43,200 minutes. This single line of arithmetic appears in SLA questions nearly every year and doubles as evidence you understand what 'four nines' actually costs.",
            },
            keyTerms: [
              { term: "Availability zone (AZ)", definition: "A physically separate cluster of data centres with independent power and networking inside one region." },
              { term: "Load balancer", definition: "A component distributing requests across a server pool using algorithms such as round robin or least connections." },
              { term: "L7 load balancing", definition: "Application-layer balancing that reads HTTP, enabling path routing, TLS termination and cookie stickiness." },
              { term: "Failover", definition: "Automatic promotion of a standby component when the primary fails its health checks." },
              { term: "SLA", definition: "Service Level Agreement - the contractual availability/performance targets and the credits owed when they are missed." },
            ],
            examQuestions: [
              {
                q: "Explain load balancing algorithms and the difference between L4 and L7 balancing. Describe how availability zones and replication deliver fault tolerance, and compute the monthly downtime allowed by a 99.95 percent SLA.",
                marks: 7,
                outline: [
                  "Algorithms: round robin, weighted round robin, least connections, IP hash, health-check removal.",
                  "L4: forwards TCP by connection, fast and cheap; L7: reads HTTP for path routing, TLS termination, sticky sessions.",
                  "AZ design: separate buildings with independent power/network; multi-AZ deployment survives zone loss.",
                  "Fault tolerance: data replication (3 copies/erasure coding), automatic failover (multi-AZ RDS about 1 minute).",
                  "Stateless tiers allow any replica to serve any request; health probes auto-replace failures.",
                  "SLA arithmetic: 0.0005 x 43,200 = 21.6 minutes per 30-day month at 99.95 percent.",
                  "Note exclusions: maintenance and customer misconfiguration do not count; remedy is service credits.",
                ],
              },
              {
                q: "A service must not exceed 4.3 minutes of downtime per month. What availability percentage does that correspond to, and what architecture tier does it imply?",
                marks: 3,
              },
              {
                q: "State one advantage of least-connections over round-robin load balancing.",
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
      title: "Cloud Storage, Databases and Programming",
      summary:
        "Where cloud applications keep and crunch their data: object versus block versus file storage, SQL versus NoSQL database services, big-data platforms on the cloud (Hadoop and Spark), a complete MapReduce word-count worked example, cloud programming models with SDKs, and auto-scaling patterns with App Engine and Azure case studies.",
      chapter: {
        number: "04",
        title: "Storage Services, Big Data and Cloud Code",
        intro:
          "Unit IV is the most technical unit for AI/ML students, because it is where the data lives. It contrasts the three storage shapes - object buckets, block volumes, networked file systems - and the SQL/NoSQL database divide, then moves to big data: HDFS and YARN, Spark's in-memory model, and a full MapReduce word count traced through map, shuffle and reduce phases. It ends with the SDK patterns (boto3, REST, queues) and the auto-scaling configurations that keep cloud applications both fast and cheap.",
        inOneBreath:
          "Object storage (S3) keeps immutable files as objects in flat buckets with metadata and eleven-nines durability at about 0.023 dollars per GB-month; block storage (EBS) gives mounted virtual disks; file storage (EFS) gives shared NFS mounts. SQL databases (RDS, Aurora) keep ACID transactions and schemas; NoSQL (DynamoDB key-value, MongoDB document, Cassandra wide-column) trades joins for horizontal scale and the CAP theorem's consistency-availability choice. Big data on cloud: Hadoop pairs HDFS storage with YARN-managed MapReduce batch jobs; Spark keeps working sets in memory and runs iterative jobs many times faster than disk-bound MapReduce. The MapReduce word count maps each line to (word, 1) pairs, shuffles and sorts by key, and reduces by summing - a combiner halves the shuffle. Programming uses SDKs (boto3), REST APIs and queues (SQS) to compose services; auto-scaling policies (target tracking, step, scheduled, predictive) adjust instance counts to load, the App Engine pattern being scale-to-zero with request-based scaling.",
        sections: [
          {
            number: "4.1",
            title: "Object, block and file storage: choosing the right shape",
            body: [
              "Cloud storage comes in three shapes, and exam questions are usually a scenario asking which fits. Object storage stores data as discrete objects - a file plus its metadata plus a globally unique key - inside flat containers called buckets; there is no directory hierarchy, no partial update of an object, and no mounting. Amazon S3 is the reference: durability of 99.999999999 percent (eleven nines) because every object is replicated across multiple facilities, availability of 99.99 percent, standard pricing about 0.023 dollars per GB-month, and access strictly through HTTP APIs. Objects suit backups, media files, data-lake raw data, and static website hosting; they do not suit databases, which need to modify blocks in place.",
              "Block storage presents a raw virtual disk that the consumer formats and mounts like a local drive: EBS volumes attach to EC2 instances, run file systems (ext4, NTFS) on top, and support random reads and writes at block granularity - exactly what a database or OS boot volume requires. Types at exam depth: gp3 general-purpose SSD (baseline 3,000 IOPS, about 0.08 dollars per GB-month), io1/io2 provisioned-IOPS SSD for databases needing tens of thousands of IOPS, and st1 throughput-optimised HDD for sequential log data. Volumes are persistent and replicated within their availability zone, and copy-on-write snapshots feed backups and new volume creation.",
              "File storage fills the middle: a shared, hierarchical file system accessible over the network by many machines simultaneously - Amazon EFS for Linux (NFS protocol) and Azure Files for SMB. Use cases are the classic ones: shared code repositories, home directories, and containers pods mounting the same volume; the trade is higher latency than block storage and higher price than object storage, in exchange for POSIX semantics and concurrent access. The three-way comparison table is the expected exam artifact: interface (API vs mounted disk vs NFS mount), mutability (immutable objects vs random block writes vs full POSIX), access pattern (whole object vs block vs file), typical latency, price per GB, and one example workload for each.",
              "A worked scenario pins the choices. A video site stores uploaded footage and thumbnails: object storage (S3, cheap at scale, served directly over HTTPS). Its PostgreSQL database: block storage (io1 with 10,000 provisioned IOPS attached to the DB instance). A machine-learning team of 20 sharing training datasets and notebooks: file storage (EFS mount visible to every notebook pod). Its nightly analytics dump: object storage again, then a data lake. Being able to justify each pick in one sentence - access pattern decides shape, then price and consistency decide the tier - is precisely the 7-mark skill this section trains.",
            ],
            bullets: [
              "Object storage: flat buckets of immutable objects with keys and metadata; accessed via HTTP API (S3).",
              "S3 numbers: 99.999999999 percent durability, 99.99 percent availability, about 0.023 dollars per GB-month standard.",
              "Block storage: mounted virtual disks with random block I/O - EBS gp3 (3,000 IOPS baseline) or io1 provisioned IOPS.",
              "File storage: shared NFS/SMB file systems - EFS for Linux pods and home directories.",
              "Decision rule: databases -> block; backups, media, data lakes -> object; concurrent POSIX sharing -> file.",
              "Objects cannot be partially updated - whole-object replacement only - which disqualifies them for DB files.",
              "Snapshots: copy-on-write block snapshots for backup and cloning; lifecycle rules tier objects to cheaper classes.",
            ],
            table: {
              caption: "The three storage shapes compared on the criteria examiners expect.",
              headers: ["Aspect", "Object (S3)", "Block (EBS)", "File (EFS)"],
              rows: [
                ["Interface", "HTTP API, keys in buckets", "Mounted virtual disk", "NFS/SMB mount"],
                ["Mutability", "Whole-object replace only", "Random block read/write", "Full POSIX file semantics"],
                ["Durability", "Eleven nines, multi-facility", "Replicated in one AZ", "Replicated across AZs"],
                ["Typical latency", "Tens of ms per request", "Sub-ms", "Low ms"],
                ["Price per GB-month", "about 0.023 dollars", "about 0.08-0.10 dollars", "about 0.30 dollars"],
                ["Fits", "Backups, media, data lake", "Databases, boot volumes", "Shared dirs, ML notebooks"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which storage shape does the workload need?",
              caption:
                "Ask what the application does to the data - the access pattern picks the shape.",
              start: "How does the app read and write the data?",
              branches: [
                { label: "Write once, read whole files many times", outcome: "Object storage (S3) - cheapest at scale, HTTP-served", good: true },
                { label: "Random in-place block updates (database)", outcome: "Block storage (EBS) - mounted disk, provisioned IOPS", good: true },
                { label: "Many machines share one file tree", outcome: "File storage (EFS) - NFS mount, POSIX semantics", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the numbers, not the adjectives",
              body: "'Object storage is cheap and durable' scores half marks; 'S3: eleven-nines durability, about 0.023 dollars per GB-month, whole-object access only' scores full. The immutability point is the differentiator - mention that objects cannot be updated in place and therefore cannot back a live database.",
            },
            keyTerms: [
              { term: "Bucket", definition: "The flat top-level container of object storage; every object lives in exactly one bucket with a unique key." },
              { term: "Object immutability", definition: "Objects are replaced whole, never partially updated - the property that excludes object storage for live databases." },
              { term: "Provisioned IOPS", definition: "Block storage tier (io1/io2) where the consumer pays for a guaranteed number of I/O operations per second." },
              { term: "EFS", definition: "Elastic File System - AWS's shared NFS file system mountable by many instances and containers at once." },
              { term: "Lifecycle rule", definition: "Policy that automatically moves objects to cheaper storage classes (e.g. infrequent access, glacier) as they age." },
            ],
            examQuestions: [
              {
                q: "Compare object, block and file storage on interface, mutability, durability and price, with one named cloud service and one suitable workload for each. Recommend a storage shape for (i) a PostgreSQL database and (ii) a backup archive.",
                marks: 7,
                outline: [
                  "Object: flat buckets, HTTP API, immutable whole objects; S3, eleven nines, about 0.023 dollars/GB-month.",
                  "Block: mounted virtual disk, random block I/O; EBS gp3/io1 with provisioned IOPS.",
                  "File: shared NFS/SMB mount with POSIX semantics; EFS, priced highest per GB.",
                  "Mutability contrast: objects replaced whole; blocks updated in place; files fully POSIX.",
                  "Recommendation (i): block storage - a database needs random in-place writes and IOPS guarantees.",
                  "Recommendation (ii): object storage - write-once archive matches immutability and the lowest price.",
                  "Add lifecycle tiering as the archive cost optimiser.",
                ],
              },
              {
                q: "Why can an S3 bucket not back a live database's data files?",
                marks: 3,
              },
              {
                q: "Name the storage service you would mount simultaneously on 20 notebook containers and the protocol it speaks.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "SQL versus NoSQL databases on the cloud",
            body: [
              "Cloud databases split along the classic divide. SQL services keep the relational model: fixed schema, ACID transactions, joins, and mature tooling. AWS RDS offers managed MySQL, PostgreSQL and SQL Server with automated backup and multi-AZ failover; Amazon Aurora is MySQL/PostgreSQL-compatible but stores data on a quorum-replicated cluster volume, advertising up to 5x MySQL throughput and failover in under a minute; Azure SQL Database and GCP Cloud SQL fill the same niche. Choose them for financial records, inventory, anything where a partial transaction is a bug.",
              "NoSQL trades the relational contract for scale and flexibility, in four families the exam names. Key-value stores (DynamoDB, Redis): a partition-key lookup at single-digit-millisecond latency, schema-less items, horizontal scaling by adding partitions - perfect for shopping carts, sessions and leaderboards. Document stores (MongoDB Atlas, Firestore): JSON-like documents with flexible fields per record - content management and user profiles. Wide-column stores (Cassandra, Bigtable): huge write throughput across many nodes - time-series and IoT telemetry. Graph stores (Neo4j): relationship traversal - recommendations and fraud rings. The general trade: no multi-row ACID joins, but linear horizontal scaling and no schema-migration downtime.",
              "The CAP theorem is the theoretical anchor examiners expect. In a distributed store with a network partition (P), you can keep consistency (C) - every read sees the latest write, at the price of refusing some requests - or availability (A) - every request gets an answer, possibly stale - but not both simultaneously. DynamoDB makes it concrete: a strongly consistent read costs one extra read-unit and hits the leader; an eventually consistent read (the default) may briefly return older data but doubles throughput. Cassandra writes to any replica and converges eventually. Being able to say 'eventual consistency means a read after write may return the old value for a short window' in one sentence earns the theory mark.",
              "The selection scenario closes the section. A banking ledger: SQL (RDS/Aurora), because ACID is non-negotiable. A session store at 100,000 reads/second: DynamoDB or Redis, because key lookups scale horizontally without joins. A product catalogue with varying attributes per product: MongoDB, because documents absorb schema variance. IoT sensor streams at millions of writes per hour: Cassandra or Bigtable, because write throughput dominates. For each, justify in one line: the workload's dominant operation (transactions vs lookups vs flexible writes) maps directly to the family. That mapping - not memorising feature lists - is what the marking scheme rewards.",
            ],
            bullets: [
              "SQL on cloud: RDS (MySQL/PostgreSQL), Aurora with quorum-replicated cluster storage (up to 5x MySQL throughput), Azure SQL, Cloud SQL.",
              "ACID, joins and fixed schema are the SQL strengths; the cost is vertical scaling limits.",
              "NoSQL families: key-value (DynamoDB, Redis), document (MongoDB), wide-column (Cassandra, Bigtable), graph (Neo4j).",
              "DynamoDB: partition-key lookups at single-digit-ms latency; scales by adding partitions, no joins.",
              "CAP theorem: under a network partition choose consistency (reject some requests) or availability (serve possibly stale data).",
              "DynamoDB consistency dial: strongly consistent reads cost extra capacity; default reads are eventually consistent.",
              "Selection: ledger -> SQL ACID; sessions -> key-value; varied-schema catalogue -> document; IoT writes -> wide-column.",
            ],
            table: {
              caption: "SQL vs NoSQL cloud databases - the two-column contrast plus families.",
              headers: ["Aspect", "SQL (RDS, Aurora)", "NoSQL (DynamoDB, Cassandra, MongoDB)"],
              rows: [
                ["Schema", "Fixed, migration required", "Flexible or schema-less"],
                ["Transactions", "ACID across rows", "Single-item atomic; eventual across items"],
                ["Scaling", "Vertical; read replicas", "Horizontal by partitions/nodes"],
                ["Query power", "Joins, aggregations", "Key lookups, scans; no joins"],
                ["Latency profile", "ms, depends on query", "Single-digit ms on key access"],
                ["Fits", "Ledgers, inventory, reporting", "Sessions, catalogues, telemetry"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "CAP theorem placement of common stores",
              caption:
                "Under a partition every store picks a side - no system occupies the top-right corner.",
              axes: { x: "Availability under partition ->", y: "Consistency ->" },
              quadrants: [
                { label: "RDBMS (single node)", note: "consistent, single point of availability" },
                { label: "NewSQL / Aurora writer", note: "consistency with quorum availability" },
                { label: "Cassandra, Bigtable", note: "AP-leaning wide-column stores" },
                { label: "DynamoDB (eventual mode)", note: "available by default, consistent read option" },
              ],
            },
            callout: {
              type: "exam",
              title: "CAP in one precise sentence",
              body: "The usual wrong answer is 'CAP means pick two of three.' Precise version: when a network partition occurs, a distributed store must sacrifice either consistency (refuse reads that may be stale-unsafe) or availability (answer from possibly stale replicas); in calm times both hold. Write that sentence and apply it to one DynamoDB read mode - the theory mark and the applied mark both follow.",
            },
            keyTerms: [
              { term: "ACID", definition: "Atomicity, Consistency, Isolation, Durability - the transaction guarantees relational databases provide." },
              { term: "Partition key", definition: "The DynamoDB attribute whose hash distributes items across storage partitions; the basis of key lookups." },
              { term: "CAP theorem", definition: "During a network partition a distributed store cannot guarantee both consistency and availability." },
              { term: "Eventual consistency", definition: "Replicas converge over time; a read immediately after a write may return the previous value." },
              { term: "Wide-column store", definition: "NoSQL family (Cassandra, Bigtable) optimised for massive write throughput across many nodes." },
            ],
            examQuestions: [
              {
                q: "Compare SQL and NoSQL cloud databases on schema, transactions, scaling and query power. State the CAP theorem precisely and name one NoSQL family with a suitable workload for each of key-value, document and wide-column stores.",
                marks: 7,
                outline: [
                  "SQL: fixed schema, ACID, joins; RDS/Aurora with quorum cluster storage and sub-minute failover.",
                  "NoSQL: flexible schema, single-item atomicity, horizontal scaling by partitions/nodes.",
                  "Query contrast: joins and aggregations vs key lookups and scans.",
                  "CAP precise: under partition, choose consistency or availability; both hold when calm.",
                  "Key-value: DynamoDB/Redis - sessions and carts at single-digit-ms key reads.",
                  "Document: MongoDB/Firestore - catalogues and profiles with varying fields.",
                  "Wide-column: Cassandra/Bigtable - IoT and time-series write throughput.",
                ],
              },
              {
                q: "A ledger application and a session store both live on the cloud. Which database family serves each, and why?",
                marks: 3,
              },
              {
                q: "What does an 'eventually consistent read' in DynamoDB risk, and what does it save?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Big data on the cloud: Hadoop and Spark",
            body: [
              "When data exceeds one machine, the cloud offers two routes: rent a managed big-data cluster, or use serverless analytics services. The canonical platform is Apache Hadoop: it pairs a distributed file system with a batch computation framework. HDFS splits files into blocks (128 MB by default), replicates each block three times across different machines for durability, and keeps compute near data - jobs are sent to where blocks live rather than moving terabytes across the network. YARN is Hadoop's resource manager: it allocates cluster memory and CPU to submitted jobs the way an OS schedules processes, letting multiple frameworks share one cluster.",
              "Apache Spark modernised the computation layer. Its core abstraction is the RDD (Resilient Distributed Dataset), an immutable partitioned collection whose lineage lets Spark rebuild lost partitions after a failure. Spark's defining advantage is in-memory execution: a working set loaded into executor RAM is reused across transformations, so iterative algorithms (machine-learning gradient descent, graph algorithms) avoid re-reading from disk every stage. Published comparisons put Spark up to 100 times faster than disk-bound MapReduce for iterative workloads, and Spark now ships libraries that cover the pipeline: Spark SQL, MLlib (machine learning), Spark Streaming / Structured Streaming, GraphX.",
              "On the cloud, you rent this machinery instead of owning it. Amazon EMR provisions a Hadoop/Spark cluster from an API call - specify instance types and counts, and it configures HDFS, YARN and Spark; autoscaling adds task nodes for the shuffle-heavy phases; spot instances cut the cost of fault-tolerant batch work substantially. GCP Dataproc and Azure HDInsight are the equivalents, and the serverless extreme is AWS Glue (managed Spark jobs with no cluster at all) or BigQuery (load data, write SQL, Google scales the engine invisibly). A practical sentence worth marks: because clusters are rented per hour, the cloud economics favour running a 40-node cluster for 2 hours over owning 4 nodes for a month - elasticity applies to analytics too.",
              "The exam answer structure: define big data by its V's (volume, velocity, variety) with one number each (terabytes of logs, millions of events per second, mixed text/JSON/binary), then name the cloud platform stack - HDFS storage, YARN scheduling, MapReduce or Spark computation, EMR/Dataproc as the managed rental - and finish with the Spark-vs-MapReduce contrast: MapReduce writes intermediate results to HDFS between stages while Spark keeps them in executor memory, which is why iterative ML favours Spark. One worked figure: a 10 TB dataset on 20 nodes of 2 TB each is stored as roughly 78,000 blocks of 128 MB with three-way replication - about 234,000 block replicas across the cluster.",
            ],
            bullets: [
              "HDFS: files split into 128 MB blocks, each replicated 3x across machines; compute moves to data, not data to compute.",
              "YARN: the cluster resource manager allocating CPU/memory to jobs, letting frameworks share one cluster.",
              "Spark: RDDs with lineage-based recovery; in-memory reuse makes iterative jobs up to 100x faster than MapReduce.",
              "Spark libraries: Spark SQL, MLlib, Structured Streaming, GraphX - one engine for the analytics pipeline.",
              "EMR/Dataproc/HDInsight: managed Hadoop-Spark clusters rented per hour; spot instances cheapen batch phases.",
              "Serverless extreme: AWS Glue (managed Spark) and BigQuery (SQL engine, no cluster visible).",
              "Worked storage figure: 10 TB at 128 MB blocks = about 78,000 blocks, 234,000 replicas with 3x replication.",
            ],
            codeExample: {
              language: "bash",
              caption: "Renting a Spark cluster and submitting a job on EMR.",
              code: `# Create a 1-master + 2-core + spot-task EMR cluster
aws emr create-cluster \\
  --name "ml-etl" \\
  --release-label emr-7.0.0 \\
  --applications Name=Hadoop Name=Spark \\
  --instance-groups \\
    InstanceGroupType=MASTER,InstanceCount=1,InstanceType=m5.xlarge \\
    InstanceGroupType=CORE,InstanceCount=2,InstanceType=m5.2xlarge \\
  --ec2-attributes KeyName=mykey \\
  --use-default-roles

# Submit a PySpark job to the running cluster
aws emr add-steps --cluster-id j-2AXXXXXXGAPLF \\
  --steps Type=Spark,Name="train-job", \\
  ActionOnFailure=CONTINUE, \\
  Args=[spark-submit,--deploy-mode,cluster,s3://my-bucket/jobs/train.py]`,
            },
            diagram: {
              kind: "pipeline",
              title: "A cloud big-data pipeline",
              caption:
                "Ingest to insight in five managed stages - every stage is a rented service.",
              stages: [
                { label: "Ingest", note: "Kafka / Kinesis streams, batch uploads to S3" },
                { label: "Store raw", note: "data lake in object storage, 128 MB HDFS blocks" },
                { label: "Process", note: "Spark on EMR: transformations in memory" },
                { label: "Serve", note: "results to a warehouse or DynamoDB" },
                { label: "Query", note: "BigQuery / Athena SQL over the outputs" },
              ],
            },
            callout: {
              type: "tip",
              title: "The one-line Spark vs MapReduce answer",
              body: "When asked why Spark is faster, write exactly: 'MapReduce materialises intermediate results to HDFS between every stage; Spark keeps them partitioned in executor memory, so iterative stages pay no disk round-trip.' Add the lineage sentence for fault tolerance and the answer is complete at full marks.",
            },
            keyTerms: [
              { term: "HDFS", definition: "Hadoop Distributed File System - 128 MB blocks replicated three times across cluster machines." },
              { term: "YARN", definition: "Hadoop's resource manager that allocates cluster CPU and memory to submitted applications." },
              { term: "RDD", definition: "Resilient Distributed Dataset - Spark's immutable partitioned collection, recoverable via lineage." },
              { term: "Data locality", definition: "Scheduling computation on the node holding the data block, avoiding network transfer of bulk data." },
              { term: "EMR", definition: "Amazon Elastic MapReduce - managed Hadoop/Spark clusters rented by the hour with autoscaling and spot support." },
            ],
            examQuestions: [
              {
                q: "Explain the Hadoop architecture (HDFS and YARN) and describe Spark's RDD model. Why is Spark faster than MapReduce for iterative machine-learning jobs?",
                marks: 7,
                outline: [
                  "HDFS: 128 MB blocks, 3x replication, data locality - compute scheduled where blocks live.",
                  "YARN: cluster resource manager allocating CPU/memory to jobs; multiple frameworks share the cluster.",
                  "MapReduce: batch model writing intermediates to HDFS between stages.",
                  "Spark RDDs: immutable partitioned collections with lineage for failure recovery.",
                  "In-memory execution: working sets held in executor RAM across transformations.",
                  "Iterative ML: gradient descent and graph algorithms reuse data every iteration - no disk round-trip, up to 100x faster.",
                  "Cloud delivery: EMR/Dataproc/HDInsight rented per hour; Glue/BigQuery as serverless extremes.",
                ],
              },
              {
                q: "A 10 TB dataset is stored on HDFS with 128 MB blocks and 3x replication. How many block replicas exist?",
                marks: 3,
              },
              {
                q: "Name the YARN equivalent task and state what it schedules.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.4",
            title: "MapReduce: a complete worked example",
            body: [
              "MapReduce is Google's 2004 programming model for distributed batch processing, and it remains the exam's favourite algorithm question because it forces you to think in two phases. The programmer supplies two functions: map, which takes one input record and emits zero or more key-value pairs, and reduce, which takes one key plus all values emitted for that key and produces the output. The framework does everything else - splitting input, scheduling map tasks on nodes holding the data (data locality), shuffling intermediate pairs by key across the network, sorting them, running reducers, and retrying failed tasks. The programmer never writes distributed-systems code.",
              "The canonical worked example is word count, and you should be able to trace it on concrete data. Input: two lines - 'cloud is elastic' and 'cloud is cheap'. Map phase (4 tasks, one per line here): line 1 emits (cloud,1), (is,1), (elastic,1); line 2 emits (cloud,1), (is,1), (cheap,1). Shuffle and sort phase: the framework groups by key, sending all pairs with the same key to one reducer - key 'cloud' arrives as [1,1], key 'is' as [1,1], 'elastic' as [1], 'cheap' as [1]. Reduce phase: sum each list - (cloud,2), (is,2), (elastic,1), (cheap,1). Draw this as three columns on paper and the 7 marks are essentially secured.",
              "Two refinements show depth. The combiner is a mini-reducer run on the map node before the shuffle: it would emit (cloud,2) instead of two (cloud,1) pairs, halving shuffle bytes for skewed keys - always state that a combiner must be associative and commutative (sum is, median is not). The partitioner decides which reducer receives each key, defaulting to hash(key) mod R; choosing a better partitioner fixes data skew, the situation where one hot key (say the word 'the') turns one reducer into the bottleneck while others idle. Skew handling is the difference between a textbook answer and a practitioner's answer.",
              "On the cloud, the same job is one EMR step: a PySpark job or an Hadoop Streaming command whose mapper and reducer are ordinary scripts. The exam-expected Python skeleton is worth memorising - a mapper reading stdin line by line and printing 'word\\t1', and a reducer holding the current key and summing counts as the sorted stream flows past. Beyond word count, be ready to adapt the pattern: inverted index (map emits (word, docID), reduce appends), matrix multiplication (map emits ((i,k),(j,value)), reduce sums products), and joins (map tags records with their source, reduce pairs them). The outline points in the 7-mark question below show the generic adaptation method: identify the key that groups related records, emit it from map, aggregate in reduce.",
            ],
            bullets: [
              "Programming model: user writes map (record -> key-value pairs) and reduce (key + values -> output); framework does the rest.",
              "Framework duties: input splitting, data-local scheduling, shuffle/sort by key, task retry, output commit.",
              "Word count trace: 'cloud is elastic' + 'cloud is cheap' -> map emits (word,1) -> shuffle groups -> reduce sums (cloud,2).",
              "Combiner: local mini-reducer on the map node; must be associative and commutative; halves shuffle traffic.",
              "Partitioner: hash(key) mod R assigns keys to reducers; hot keys cause skew, fixed by custom partitioners or salting.",
              "Cloud form: one EMR step running PySpark or Hadoop Streaming with script mapper/reducer.",
              "Adaptations: inverted index, distributed matrix multiplication, reduce-side joins - all key-identification exercises.",
            ],
            codeExample: {
              language: "python",
              caption: "Word count as Hadoop Streaming mapper and reducer scripts.",
              code: `# mapper.py - read lines, emit (word, 1)
import sys
for line in sys.stdin:
    for word in line.strip().split():
        print(word.lower() + "\\t1")

# reducer.py - sum counts for each key (input is sorted by key)
import sys
current, total = None, 0
for line in sys.stdin:
    word, count = line.rstrip("\\n").split("\\t")
    count = int(count)
    if word == current:
        total += count
    else:
        if current is not None:
            print(current + "\\t" + str(total))
        current, total = word, count
if current is not None:
    print(current + "\\t" + str(total))`,
            },
            diagram: {
              kind: "pipeline",
              title: "Word count through the MapReduce phases",
              caption:
                "Redraw this five-stage trace on any input - it is the question's core marks.",
              stages: [
                { label: "Input split", note: "'cloud is elastic' | 'cloud is cheap'" },
                { label: "Map", note: "each word -> (word, 1)" },
                { label: "Shuffle + sort", note: "group by key; cloud -> [1,1]" },
                { label: "Reduce", note: "sum values per key" },
                { label: "Output", note: "cloud 2, is 2, elastic 1, cheap 1" },
              ],
            },
            callout: {
              type: "exam",
              title: "Always show the intermediate pairs",
              body: "The most common lost mark in MapReduce answers is skipping the shuffle step. Even for a one-line input, write the exact (key, value) pairs map emits and exactly what each reducer receives - '(cloud,1),(cloud,1) -> key cloud: [1,1]'. The shuffle is where distributed understanding is tested; omitting it reads as a dictionary program, not MapReduce.",
            },
            keyTerms: [
              { term: "Map function", definition: "User function emitting key-value pairs from each input record, run in parallel across splits." },
              { term: "Reduce function", definition: "User function aggregating all values of one key into the final output." },
              { term: "Shuffle and sort", definition: "Framework phase that transfers and groups intermediate pairs by key, feeding each reducer a sorted value list." },
              { term: "Combiner", definition: "An optional local aggregation on the map node that must be associative and commutative; reduces shuffle volume." },
              { term: "Data skew", definition: "Uneven key distribution leaving one reducer as the bottleneck; mitigated by custom partitioners or key salting." },
            ],
            examQuestions: [
              {
                q: "Explain the MapReduce programming model and trace the word-count example on the input 'cloud is elastic, cloud is cheap', showing map output, shuffle grouping and reduce output. Explain the roles of the combiner and the partitioner.",
                marks: 7,
                outline: [
                  "Define the model: map emits key-value pairs per record; reduce aggregates per key; framework handles distribution.",
                  "Map output: (cloud,1),(is,1),(elastic,1) and (cloud,1),(is,1),(cheap,1).",
                  "Shuffle and sort: key cloud -> [1,1], is -> [1,1], elastic -> [1], cheap -> [1].",
                  "Reduce output: (cloud,2),(is,2),(elastic,1),(cheap,1).",
                  "Combiner: local sum on map node emitting (cloud,2), halving shuffle; valid because sum is associative/commutative.",
                  "Partitioner: hash(key) mod R chooses the reducer; hot keys cause skew.",
                  "State framework extras: input splits, data-local scheduling, task retry.",
                ],
              },
              {
                q: "Why must a combiner be associative and commutative? Give one operation that cannot be a combiner.",
                marks: 3,
              },
              {
                q: "Write the map output pairs for the input line 'the cloud the'.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Cloud programming models and SDKs",
            body: [
              "Programming the cloud means composing managed services over their APIs, and three interaction styles cover the syllabus. SDKs embed the APIs in your language: boto3 for AWS, the Azure SDK for Python, google-cloud libraries for GCP - each exposes the same REST endpoints behind typed client objects, handles request signing and retries, and returns parsed responses. The standard boto3 pattern is one-liner service clients ('s3 = boto3.client(\"s3\")') followed by operations ('s3.upload_file(\"data.csv\", \"my-bucket\", \"raw/data.csv\")'). REST APIs are the same surface for any language or shell: 'curl -X POST' with a signed request reaches everything the SDK reaches. CLIs (aws, gcloud, az) wrap the APIs for scripts and one-off operations - the layer used in every code sample of this subject.",
              "The architectural model behind the code is asynchronous service composition: instead of one process doing everything, a cloud application chains managed components - a request lands on a load balancer, triggers a function, which writes to a queue (SQS), which wakes a worker, which updates a database and publishes an event. Queues are the glue that examiners probe: they decouple producers from consumers, buffer spikes (a 10,000-message burst is absorbed while workers drain at their own pace), and provide at-least-once delivery, which forces consumers to be idempotent. Naming SQS/SNS (queue and pub-sub) and stating 'consumers must tolerate duplicate delivery' covers the theory half of most programming-model questions.",
              "Identity is part of the programming model, not an afterthought: code never embeds long-lived credentials. On AWS, a Lambda function or EC2 instance carries an IAM role, and the SDK obtains short-lived credentials from it automatically - the developer configures only region and role policy. The exam-sized security rule: 'grant the role s3:GetObject on one bucket, not s3:* on everything' - least privilege at the API level. Combined with the shared responsibility model of section 2.4, this is where cloud programming differs from classical programming: the permissions your code holds are configured as policy documents, not compiled in.",
              "The case-study platforms round out the unit. Google App Engine (section 2.2) represents request-driven platform programming: handlers respond to HTTP, task queues handle background work, and scaling is automatic. Azure Functions and AWS Lambda represent event-driven function programming: the unit of deployment is one function bound to triggers (HTTP, timer, queue, storage event). Kubernetes represents declarative programming: you write desired state (YAML) and controllers reconcile reality toward it - a genuinely different model where 'deploy' means 'apply a document'. An exam answer that lists all three with one sentence on what the developer writes (handlers, functions, declarations) and what the platform owns demonstrates the full breadth examiners look for.",
            ],
            bullets: [
              "Three interaction styles: SDKs (boto3, Azure SDK), raw REST APIs, and provider CLIs (aws, gcloud, az).",
              "boto3 pattern: create a service client, call operations, handle responses; signing and retries are handled for you.",
              "Composition model: load balancer -> function -> queue (SQS) -> worker -> database; components communicate asynchronously.",
              "Queues decouple producers and consumers, buffer spikes, and deliver at-least-once - consumers must be idempotent.",
              "Credentials: no embedded keys; code assumes an IAM role with short-lived tokens and least-privilege policy.",
              "Three programming models: request-driven (App Engine handlers), event-driven functions (Lambda/Azure Functions), declarative (Kubernetes YAML).",
              "One rule to quote: grant 's3:GetObject on one bucket', never 's3:* on all resources'.",
            ],
            codeExample: {
              language: "python",
              caption: "boto3: upload a file, publish a queue message, read with least privilege.",
              code: `import boto3

s3 = boto3.client("s3")          # credentials come from the IAM role
sqs = boto3.client("sqs")

# 1. Upload a dataset to the raw zone of our bucket
s3.upload_file("data.csv", "acme-data-lake", "raw/2025/data.csv")

# 2. Notify downstream workers through a queue (decoupling)
sqs.send_message(
    QueueUrl="https://sqs.ap-south-1.amazonaws.com/123456789012/etl-jobs",
    MessageBody="process raw/2025/data.csv",
)

# 3. Read the object back (only if the role allows GetObject)
obj = s3.get_object(Bucket="acme-data-lake", Key="raw/2025/data.csv")
print(obj["Body"].read(64))       # first 64 bytes as a smoke test`,
            },
            diagram: {
              kind: "flow",
              title: "From your code to the service and back",
              caption:
                "The SDK wraps signing, retries and parsing - you write only intent.",
              steps: [
                { label: "Python calls boto3 method", note: "s3.upload_file(...)" },
                { label: "SDK signs request with role credentials", note: "SigV4, short-lived tokens" },
                { label: "HTTPS REST call to the service endpoint", note: "region-specific URL" },
                { label: "Service authorises via IAM policy", note: "allow if the policy permits" },
                { label: "JSON response parsed by SDK", note: "retries handled on 5xx" },
              ],
            },
            callout: {
              type: "exam",
              title: "Idempotency is the queue question",
              body: "Whenever an answer mentions SQS or any message queue, add the sentence 'delivery is at-least-once, so consumers must be idempotent - a duplicate message must not double-charge or double-insert.' This one line converts a list-style answer into a systems answer and is precisely what the marking scheme for 'cloud programming models' rewards.",
            },
            keyTerms: [
              { term: "boto3", definition: "The AWS SDK for Python, exposing every service as a client object over signed REST calls." },
              { term: "IAM role", definition: "An attachable identity with a permission policy; code assumes it and receives short-lived credentials." },
              { term: "Message queue (SQS)", definition: "Managed buffer between producers and consumers providing decoupling and at-least-once delivery." },
              { term: "Idempotent consumer", definition: "A consumer that produces the same effect whether a message arrives once or twice - required by at-least-once delivery." },
              { term: "Declarative deployment", definition: "The Kubernetes model: write desired state in YAML; controllers reconcile actual state toward it." },
            ],
            examQuestions: [
              {
                q: "Describe the cloud programming model using SDKs, REST APIs and queues. Write the boto3 pattern for uploading an object and sending a queue message, and explain why queue consumers must be idempotent.",
                marks: 7,
                outline: [
                  "Three styles: SDK (boto3), REST over HTTPS, CLI wrappers - same signed API surface.",
                  "boto3 pattern: service client then operations; SDK handles signing and retries.",
                  "Code sketch: boto3.client('s3').upload_file(...) and sqs.send_message(...).",
                  "Credentials: IAM role with short-lived tokens; least-privilege policy, never embedded keys.",
                  "Composition: balancer -> function -> SQS -> worker -> DB, asynchronous chaining.",
                  "Queue properties: decoupling, spike buffering, at-least-once delivery.",
                  "Idempotency: duplicate messages must not double-apply effects; consumers deduplicate or use idempotent writes.",
                ],
              },
              {
                q: "Why should application code never contain long-lived cloud credentials, and what replaces them?",
                marks: 3,
              },
              {
                q: "Name the AWS SDK for Python and the queue service it would call for decoupled processing.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.6",
            title: "Auto-scaling patterns and platform case studies",
            body: [
              "Auto-scaling is the elasticity characteristic made concrete: the platform watches a metric and adjusts capacity so performance holds while cost follows load. The exam distinguishes four policy types. Target tracking keeps a metric pinned to a value - 'average CPU at 60 percent' - and the controller adds or removes instances continuously (the simplest and default choice). Step scaling acts in tiers when an alarm breaches thresholds - 'add 2 instances if CPU exceeds 80 percent for 5 minutes' - giving coarse but predictable control. Scheduled scaling pre-provisions for known patterns - a report that runs every Monday 9 am. Predictive scaling learns the daily traffic curve and launches capacity ahead of the peak, eliminating the warm-up lag that reactive policies pay.",
              "The mechanics worth quoting: a launch template defines what to start (AMI, instance type, user-data bootstrap script); an auto-scaling group defines how many (min 2, desired 2, max 10) and where (subnets across two AZs, because scaling into a dead zone is pointless); health checks replace unhealthy instances automatically; and a cooldown period (for example 300 seconds) prevents thrashing - launching, measuring, launching again before the first batch even joined the pool. Scale-out should be fast (user-facing pain) and scale-in conservative (money, but risk of removing a busy node), which is why providers let you set separate scale-out and scale-in policies.",
              "The platform case studies show the same idea at different abstraction levels. App Engine (section 2.2) scales by requests: you set min/max instances and the platform adds them when pending-request latency crosses a target, scaling to zero overnight - the developer writes no scaling code at all. Azure VM Scale Sets expose identical knobs (instance count, autoscale rules on CPU or custom metrics) in the Azure portal and CLI. Kubernetes Horizontal Pod Autoscaler scales pod replicas on CPU or custom metrics, while the Cluster Autoscaler adds worker nodes when pods cannot schedule - a two-level scaling story that exam answers should name explicitly. A worked number: a site needing 0.2 vCPU per 100 requests/second at 60 percent target CPU, peaking at 50,000 requests/second, needs 50,000/100 x 0.2 = 100 vCPUs, so a fleet of 25 four-vCPU instances at peak - the arithmetic shows how capacity planning precedes any policy.",
              "The closing analysis is the cost-performance balance. Reactive scaling always trails the load by the instance boot time (about 1-3 minutes for EC2, seconds for containers), so bursts cause brief queueing; predictive and scheduled policies hide that lag for predictable patterns. Combine patterns in production: scheduled floor for the daily baseline, target tracking for the noise, and a hard max for cost control. State the failure modes too - a metric that only measures per-instance CPU hides saturation from queueing, so pick the metric that reflects user-visible latency; and always attach an alarm on hitting max capacity, because 'silently capped at max' is a classic outage.",
            ],
            bullets: [
              "Target tracking: hold a metric (CPU 60 percent, request count per instance) - default policy, self-tuning.",
              "Step scaling: alarm tiers, e.g. add 2 instances when CPU > 80 percent for 5 minutes.",
              "Scheduled scaling: pre-provision known patterns (Monday 9 am report); predictive scaling learns the curve.",
              "Mechanics: launch template (what), ASG min/desired/max across 2 AZs (how many/where), cooldown 300 s against thrashing.",
              "Kubernetes two-level scaling: Horizontal Pod Autoscaler for replicas, Cluster Autoscaler for worker nodes.",
              "App Engine case: scales on pending-request latency to a target, down to zero instances - no scaling code.",
              "Worked sizing: 50,000 req/s at 0.2 vCPU per 100 req/s = 100 vCPUs = 25 four-vCPU instances.",
            ],
            codeExample: {
              language: "json",
              caption: "A target-tracking auto-scaling policy for an ASG.",
              code: `{
  "AutoScalingGroupName": "web-asg",
  "MinSize": 2,
  "MaxSize": 10,
  "DesiredCapacity": 2,
  "HealthCheckType": "ELB",
  "TargetTrackingConfiguration": {
    "PredefinedMetricSpecification": {
      "PredefinedMetricType": "ASGAverageCPUUtilization"
    },
    "TargetValue": 60.0
  },
  "InstanceWarmup": 120
}`,
            },
            diagram: {
              kind: "cycle",
              title: "The auto-scaling control loop",
              caption:
                "Measure, decide, act, verify - the same loop at VM, pod and platform level.",
              steps: [
                { label: "Measure metrics", note: "CPU, request latency, queue depth" },
                { label: "Compare against target", note: "60 percent CPU / latency goal" },
                { label: "Decide delta", note: "respect min/max and cooldown" },
                { label: "Launch or terminate", note: "from launch template, across AZs" },
                { label: "Wait for warmup", note: "120 s before counting new capacity" },
                { label: "Verify load redistributed", note: "loop continues" },
              ],
            },
            callout: {
              type: "warning",
              title: "Set the max, and alarm on it",
              body: "Auto-scaling without a maximum is an unbounded bill; auto-scaling with a maximum and no alarm is a silent outage. In any answer describing scaling, state both: MaxSize for cost control, and a CloudWatch alarm on 'group at max capacity' because the most dangerous scaling failure is the one that quietly stops scaling.",
            },
            keyTerms: [
              { term: "Auto-scaling group", definition: "A managed fleet with min/desired/max size and health-based replacement, spanning multiple AZs." },
              { term: "Target tracking policy", definition: "Scaling policy that adds/removes capacity to hold a metric at a chosen value." },
              { term: "Cooldown", definition: "A waiting period after a scaling action preventing overlapping adjustments before metrics stabilise." },
              { term: "Horizontal Pod Autoscaler", definition: "Kubernetes controller scaling replica counts on CPU or custom metrics." },
              { term: "Predictive scaling", definition: "ML-based policy that provisions capacity ahead of forecast traffic peaks." },
            ],
            examQuestions: [
              {
                q: "Explain target tracking, step, scheduled and predictive auto-scaling policies. Describe ASG mechanics (launch template, min/desired/max, health checks, cooldown) and compute the instance count for 50,000 req/s at 0.2 vCPU per 100 req/s on four-vCPU instances.",
                marks: 7,
                outline: [
                  "Target tracking: metric pinned (CPU 60 percent); default, self-tuning.",
                  "Step scaling: threshold tiers on alarms, e.g. +2 instances above 80 percent for 5 minutes.",
                  "Scheduled: pre-provision known peaks; predictive: ML forecasts and pre-launches.",
                  "Mechanics: launch template defines the instance; ASG min 2 / desired 2 / max 10 across 2 AZs.",
                  "Health checks replace unhealthy nodes; cooldown (300 s) prevents thrashing; warmup 120 s.",
                  "Arithmetic: 50,000/100 x 0.2 = 100 vCPUs; 100/4 = 25 instances at peak.",
                  "Close: combine policies (scheduled floor + target tracking) and alarm on max capacity.",
                ],
              },
              {
                q: "Why is scale-out made fast but scale-in made slow in production auto-scaling?",
                marks: 3,
              },
              {
                q: "Name the two levels at which Kubernetes scales and the controllers responsible.",
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
      title: "Security, Scalability and Emerging Trends",
      summary:
        "Defending and extending the cloud: the top threats (data breach, account hijacking, insider), identity and access management with least privilege, encryption at rest and in transit with key management, compliance frameworks and audit trails, elasticity patterns revisited, serverless, edge and fog computing, and the case studies examiners quote - Netflix on AWS, government clouds and disaster recovery tiers.",
      chapter: {
        number: "05",
        title: "Securing the Stack and Looking Forward",
        intro:
          "Unit V opens with the threat model - what attackers actually do to cloud systems and which controls stop them - then builds the defence in layers: IAM policies, encryption with managed keys, and compliance/audit frameworks. The second half turns forward-looking: auto-scaling patterns as an elasticity strategy, serverless and edge computing, fog architecture, the economics revisit, and three case studies - the Netflix migration, government clouds, and disaster-recovery strategy tiers with RTO/RPO arithmetic.",
        inOneBreath:
          "The dominant cloud threats are data breach (misconfigured buckets, exposed keys), account hijacking (stolen credentials, no MFA), insider threats (over-privileged employees), insecure APIs and DDoS. The defence starts with IAM: identities (users, groups, roles) carry JSON policy documents granting actions on resources; least privilege plus MFA on root and admin accounts is the exam's standing rule. Encryption: TLS 1.2/1.3 protects data in transit; AES-256 with KMS-managed keys protects data at rest, with envelope encryption keeping per-object data keys wrapped by a master key, and key rotation limiting exposure. Compliance maps controls to regulations - PCI DSS for card data, HIPAA for health, GDPR for personal data of EU residents (with 72-hour breach notification), ISO 27001 and SOC 2 as provider attestations - and CloudTrail-style audit logs record every API call. Elasticity patterns: target tracking, step, scheduled, predictive. Emerging trends: serverless removes idle cost; edge computing (CDN, Lambda@Edge) pushes computation near users for latency; fog computing inserts an intermediate layer between edge devices and cloud, processing locally for sub-20 ms loops. Case studies: Netflix replatformed to cloud-native AWS services after its 2008 database corruption; government clouds (AWS GovCloud, Azure Government) isolate regulated workloads; disaster recovery tiers run from backups (days of RTO) through pilot light and warm standby to multi-site active-active (minutes), with RTO/RPO defining how much downtime and data loss a business can absorb.",
        sections: [
          {
            number: "5.1",
            title: "Cloud threats: data breach, account hijacking and insiders",
            body: [
              "Cloud security starts by naming how systems actually fall, and the Cloud Security Alliance's 'Top Threats' list is the exam's frame. Data breach is the headline: the dominant cloud breach pattern is not exotic hacking but misconfiguration - a storage bucket left publicly readable, a database with no network restriction, an access key committed to a public repository. The 2019 Capital One incident is the standard citation: a misconfigured web application firewall allowed server-side request forgery to read IAM role credentials, which then read 106 million customer records from an S3 bucket. The lesson examiners want: the provider's infrastructure held; the customer's configuration failed.",
              "Account hijacking is the second pillar: an attacker who obtains credentials - by phishing, credential stuffing of reused passwords, or a leaked access key - inherits every permission that identity holds, from anywhere in the world, without any alert if monitoring is absent. Cloud makes this worse than on-premise because the API is the interface: one valid key can launch thousands of instances of cryptocurrency mining within hours, a pattern so common it has a name, cryptojacking. Defences are specific: multi-factor authentication on all human accounts, short-lived credentials via roles instead of long-lived keys, anomaly detection on unusual API patterns (new region, unusual hour, mass deletion), and immediate revocation procedures.",
              "Insider threats complete the classic trio: an employee or contractor with legitimate access misuses it - copying a customer database before resigning, or an over-privileged service account that a developer 'just for testing' grants administrative rights. The cloud-specific twist is scale: one insider with broad IAM permissions can exfiltrate data that would have needed a truck to steal on-premise. Controls are procedural as much as technical: least privilege (grant what the job needs, nothing more), separation of duties (the person who writes access policy is not the person who approves it), activity logging reviewed by a second party, and de-provisioning on role change. Insecure APIs and DDoS round out the list - the former by authenticated, rate-limited, input-validated endpoints; the latter by provider-scale absorption (AWS Shield) plus CDN fronting.",
              "The exam answer closes with the mapping that earns full marks: every threat paired with its primary control. Misconfiguration -> automated posture scanning and least-privilege defaults; hijacking -> MFA + roles + anomaly alerts; insiders -> least privilege + separation of duties + log review; insecure APIs -> authentication, rate limiting, validation; DDoS -> CDN fronting and provider-scale scrubbing. Presenting threats as a table with a control column converts a scary list into a managed risk register - which is exactly the analytical shape the 7-mark question rewards.",
            ],
            bullets: [
              "Data breach: usually customer misconfiguration - public buckets, open databases, leaked access keys.",
              "Capital One 2019: SSRF obtained role credentials, then read 106 million records from S3 - infrastructure held, configuration failed.",
              "Account hijacking: phishing/credential-stuffing/leaked keys inherit all permissions; cryptojacking via stolen keys is the common abuse.",
              "Hijacking defences: MFA everywhere, roles over long-lived keys, anomaly alerts on new region/hour/mass-deletion patterns.",
              "Insider threat: legitimate access misused; cloud scale means one broad IAM policy can exfiltrate everything.",
              "Insider defences: least privilege, separation of duties, reviewed activity logs, de-provisioning on role change.",
              "Insecure APIs and DDoS: authentication + rate limiting + validation; CDN fronting + provider-scale scrubbing (Shield).",
            ],
            table: {
              caption: "Threat register: each cloud threat with a concrete example and its primary control.",
              headers: ["Threat", "Typical incident", "Primary control"],
              rows: [
                ["Data breach", "Public S3 bucket; Capital One 2019 (106M records)", "Posture scanning, least-privilege defaults, encryption"],
                ["Account hijacking", "Leaked key used for cryptojacking", "MFA, roles, short-lived credentials, anomaly alerts"],
                ["Insider threat", "Employee copies customer DB before resigning", "Least privilege, separation of duties, log review"],
                ["Insecure API", "Unauthenticated endpoint exposes records", "AuthN/AuthZ, rate limiting, input validation"],
                ["DDoS", "Traffic flood exhausts the origin", "CDN fronting, AWS Shield / Azure DDoS protection"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "How cloud systems actually fall versus how they are defended",
              caption:
                "Pair every failure mode with its control - the shape of a full-mark answer.",
              left: {
                heading: "Failure modes",
                items: [
                  "Bucket left publicly readable",
                  "Long-lived key committed to a repository",
                  "Broad admin policy granted 'for testing'",
                  "Unauthenticated internal API exposed",
                  "Origin server flooded by traffic",
                ],
              },
              right: {
                heading: "Standing controls",
                items: [
                  "Automated misconfiguration scanning",
                  "Roles with short-lived credentials + MFA",
                  "Least privilege and separation of duties",
                  "Authenticated, rate-limited, validated endpoints",
                  "CDN fronting with provider-scale scrubbing",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "One incident per threat earns the depth mark",
              body: "Memorise one concrete incident - Capital One 2019, 106 million records, misconfigured WAF and role credentials - and attach it to the data-breach point. Examiners reward specific, verifiable incidents far above generic phrases like 'many breaches have occurred'. Keep the other threats paired with their control instead of more incidents.",
            },
            keyTerms: [
              { term: "Data breach", definition: "Unauthorised access to stored data, in cloud usually caused by customer misconfiguration rather than provider failure." },
              { term: "Account hijacking", definition: "Attacker control of valid credentials, inheriting every permission the identity holds." },
              { term: "Cryptojacking", definition: "Abusing stolen cloud credentials to mine cryptocurrency on rented instances." },
              { term: "Insider threat", definition: "Misuse of legitimate access by an employee or contractor, countered by least privilege and log review." },
              { term: "SSRF", definition: "Server-side request forgery - tricking a server into fetching attacker-chosen URLs, used in the Capital One breach to steal role credentials." },
            ],
            examQuestions: [
              {
                q: "Explain the top cloud security threats - data breach, account hijacking, insider threats, insecure APIs and DDoS - with one real example and one control for each.",
                marks: 7,
                outline: [
                  "Data breach: dominant cause is misconfiguration (public bucket, open database); Capital One 2019, 106M records via SSRF to role credentials.",
                  "Control: automated posture scanning plus encryption and least-privilege defaults.",
                  "Account hijacking: phishing/leaked keys inherit permissions; cryptojacking is the common abuse.",
                  "Controls: MFA, roles with short-lived credentials, anomaly alerts, fast revocation.",
                  "Insider threat: legitimate access misused at cloud scale; controls are least privilege, separation of duties, log review.",
                  "Insecure APIs: authenticate, authorise, rate-limit, validate input.",
                  "DDoS: CDN fronting plus provider-scale absorption (AWS Shield); close with 'provider held, configuration failed'.",
                ],
              },
              {
                q: "Why does cloud scale make insider threats potentially more damaging than on-premise?",
                marks: 3,
              },
              {
                q: "What is cryptojacking and which credential practice enables it?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "Identity and access management: least privilege in practice",
            body: [
              "Identity and Access Management (IAM) is the control plane that answers two questions for every request: who are you (authentication) and may you do this (authorisation). Cloud IAM models identity as four object types: users (human or machine identities with permanent credentials), groups (collections of users receiving shared permissions), roles (assumable identities with no fixed password - assumed by users, services or federated logins, and issuing short-lived credentials), and policies (JSON documents stating which actions on which resources are allowed or denied). The policy document is the atom of the model, and being able to read and write a small one is an exam skill.",
              "A policy grants verbs on nouns: an action such as 's3:GetObject', a resource ARN such as 'arn:aws:s3:::acme-data-lake/*', and an optional Effect of Allow or Deny. Evaluation order matters and is examinable: an explicit Deny always wins; otherwise an Allow in any attached policy grants access; otherwise the default is deny. The design discipline built on this is least privilege - start from nothing and grant the minimum verbs on the narrowest resources, e.g. a build server needs 's3:PutObject' on one deploy bucket, not 's3:*' on all buckets. Write the tiny example policy in the exam: it demonstrates the JSON shape, the ARN scoping and the least-privilege instinct in about eight lines.",
              "Roles are the cloud's credential-hygiene invention, and section 4.5 already used them; here formalise why. Long-lived access keys leak (commits, screenshots, log files); a role issues temporary credentials that expire in minutes to hours, are automatically rotated, and are obtained by services without any secret in code - an EC2 instance or Lambda function simply 'has' its role. Federated identity extends the same idea to humans: employees sign in with corporate credentials through SAML or OIDC (single sign-on), and the identity provider's assertion maps to a cloud role - so there is no separate cloud password to steal, and access ends when employment does.",
              "The operational checklist is the last half-mark: MFA enforced on the root account (which is used rarely or never) and on all administrator users; permission boundaries preventing one admin from escalating another; access reviews - dump who can do what quarterly and prune; and audit trails (CloudTrail) recording every authentication and authorisation decision, so 'who deleted the bucket' has an answer. A single sentence summarises the section for the exam's final mark: 'in the cloud, security posture is the set of policies attached to identities - attack the policies, not the perimeter.'",
            ],
            bullets: [
              "IAM answers authentication (who) then authorisation (may this identity act).",
              "Identity objects: users, groups, roles (assumable, short-lived credentials), policies (JSON allow/deny documents).",
              "Policy anatomy: Effect + Action (s3:GetObject) + Resource (arn:aws:s3:::bucket/*); explicit Deny beats Allow; default deny.",
              "Least privilege: grant minimum verbs on narrowest resources - PutObject on one deploy bucket, never s3:* everywhere.",
              "Roles replace long-lived keys: temporary, auto-rotated credentials attached to EC2/Lambda without secrets in code.",
              "Federation: SAML/OIDC single sign-on maps corporate identity to cloud roles; no separate cloud password.",
              "Operations: MFA on root and admins, permission boundaries, quarterly access reviews, CloudTrail audit of every call.",
            ],
            codeExample: {
              language: "json",
              caption: "A least-privilege IAM policy: read one bucket, nothing else.",
              code: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": "arn:aws:s3:::acme-data-lake/*"
    },
    {
      "Effect": "Deny",
      "Action": ["s3:DeleteObject"],
      "Resource": "arn:aws:s3:::acme-data-lake/*"
    }
  ]
}`,
            },
            diagram: {
              kind: "flow",
              title: "How a cloud API request is authorised",
              caption:
                "Four gates before any action executes - quote the order in the exam.",
              steps: [
                { label: "Authenticate identity", note: "password + MFA / role token / SAML assertion" },
                { label: "Load attached policies", note: "identity + resource + boundary policies" },
                { label: "Evaluate: explicit Deny wins", note: "then any Allow; else default deny" },
                { label: "Execute action", note: "call recorded in the audit trail" },
              ],
            },
            callout: {
              type: "exam",
              title: "Evaluation order is the trick question",
              body: "The IAM mark most students drop is evaluation order: explicit Deny overrides every Allow, and silence denies. When asked 'can this role delete the bucket if one policy allows it and another denies it?', the answer is no - write the three-step order (deny, allow, default deny) explicitly to collect the full mark.",
            },
            keyTerms: [
              { term: "IAM role", definition: "An assumable identity issuing short-lived credentials to users, services or federated logins - no stored password." },
              { term: "Policy document", definition: "JSON stating Effect, Action and Resource; the atomic unit of cloud authorisation." },
              { term: "ARN", definition: "Amazon Resource Name - the globally unique path identifying the resource a policy acts on." },
              { term: "Least privilege", definition: "Granting only the actions an identity needs on only the resources it touches." },
              { term: "Federation (SAML/OIDC)", definition: "Using an external identity provider's sign-on to issue cloud roles, enabling single sign-on." },
            ],
            examQuestions: [
              {
                q: "Explain cloud IAM: identity types, policy document structure, evaluation order, and the role of least privilege. Write or read a small policy and justify why roles are safer than long-lived access keys.",
                marks: 7,
                outline: [
                  "Identity types: users, groups, roles, policies - one line each.",
                  "Policy anatomy: Effect/Action/Resource with an ARN example (s3:GetObject on one bucket).",
                  "Evaluation order: explicit Deny wins, then any Allow, otherwise default deny.",
                  "Least privilege: build server example - PutObject on one deploy bucket, not s3:* on all.",
                  "Roles vs keys: temporary auto-rotated credentials, no secrets in code or repos.",
                  "Federation: SAML/OIDC SSO maps corporate login to cloud roles.",
                  "Operations: MFA on root/admins, permission boundaries, quarterly reviews, CloudTrail audit.",
                ],
              },
              {
                q: "Policy A allows s3:DeleteObject on a bucket; policy B explicitly denies it. Can the identity delete, and why?",
                marks: 2,
              },
              {
                q: "Why does federation eliminate the 'separate cloud password' problem?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Encryption at rest and in transit; key management",
            body: [
              "Encryption defends data against everyone the IAM layer cannot see - a stolen disk, a snapshot leaked to another account, a tapped network link. Two domains matter. Data in transit is protected by TLS (versions 1.2 and 1.3 are the acceptable ones; TLS 1.0/1.1 and SSL are deprecated): every API call, every HTTPS website session, and every database connection over untrusted networks must be encrypted and the server authenticated by certificates. Data at rest is protected by block ciphers, AES-256 in practice: storage services encrypt objects, volumes and backups before writing them to disk, transparently to the application.",
              "Key management is the real design work, and managed key services (AWS KMS, Azure Key Vault, GCP Cloud KMS) are the exam's named tools. The default 'SSE-S3' style is provider-managed: the provider holds the key, encryption is automatic, and the consumer does nothing - easy, but the provider can technically decrypt. 'SSE-KMS' style uses a customer-managed key: the consumer creates a key in KMS, policies on that key decide who may use it, every use is logged, and deleting the key (with a waiting window) makes the data permanently unreadable - cryptographic deletion. Client-side encryption goes one step further: the consumer encrypts before data ever reaches the provider, who holds ciphertext only.",
              "Envelope encryption is the mechanism to describe, because it reconciles performance with control. Data is encrypted with a per-object data key (fast symmetric AES); the data key itself is encrypted ('wrapped') with a master key held in KMS and stored alongside the ciphertext. To read, the service asks KMS to decrypt the data key - an operation KMS logs and authorises - then decrypts locally. Benefits worth listing: millions of objects each get unique keys while the master key never leaves the KMS hardware-backed service; re-keying means re-wrapping data keys, not re-encrypting petabytes; and every decryption is auditable. Key rotation completes the story: rotate master keys periodically (annual is common) and old ciphertext remains readable through the key's version history.",
              "The exam wrap-up pairs each scenario with its configuration. Public website: TLS 1.2+ with the provider's certificate manager (ACME-issued, auto-renewed). Database volume: KMS-managed AES-256 at rest, with connections forced to TLS. Compliance-sensitive archive: customer-managed KMS key with rotation, usage logging, and cryptographic-deletion capability. Regulated data where even the provider must not read: client-side encryption, keys held outside the cloud. One closing sentence earns the final mark: 'encryption shifts trust from infrastructure to keys - whoever controls the key controls the data, so key policy is data policy.'",
            ],
            bullets: [
              "In transit: TLS 1.2/1.3 on every API, web and DB connection; TLS 1.0/1.1 and SSL deprecated.",
              "At rest: AES-256 applied transparently by storage services to objects, volumes and backups.",
              "KMS/Key Vault: managed key service with policies, usage logging, hardware-backed key storage.",
              "SSE-S3 vs SSE-KMS: provider-managed key (easy) vs customer-managed key (policy control, auditable use, cryptographic deletion).",
              "Envelope encryption: per-object AES data key wrapped by a KMS master key; master never leaves KMS.",
              "Rotation: master keys rotated on schedule; version history keeps old ciphertext readable.",
              "Client-side encryption: encrypt before upload when even the provider must be unable to read.",
            ],
            codeExample: {
              language: "bash",
              caption: "KMS in practice: create a key, encrypt, upload with encryption enforced.",
              code: `# Create a customer-managed key with rotation
aws kms create-key --description "acme-data-key"
aws kms enable-key-rotation --key-id abcdef01-2345-6789-abcd

# Encrypt a small secret (KMS does the work, logs the use)
aws kms encrypt \\
  --key-id abcdef01-2345-6789-abcd \\
  --plaintext fileb://secret.txt \\
  --output text --query CiphertextBlob > secret.enc

# Upload an object requiring this key (SSE-KMS)
aws s3 cp data.csv s3://acme-data-lake/raw/data.csv \\
  --sse aws:kms \\
  --sse-kms-key-id abcdef01-2345-6789-abcd

# Try to read without kms:Decrypt -> AccessDenied`,
            },
            diagram: {
              kind: "pipeline",
              title: "Envelope encryption: reading one object",
              caption:
                "The master key never leaves KMS - only wrapped data keys travel.",
              stages: [
                { label: "Fetch object", note: "ciphertext + wrapped data key" },
                { label: "Ask KMS to unwrap", note: "policy checked, use logged" },
                { label: "Receive data key in memory", note: "short-lived, never persisted" },
                { label: "Decrypt object locally", note: "AES-256 per-object key" },
                { label: "Serve plaintext to authorised caller", note: "master key never exposed" },
              ],
            },
            callout: {
              type: "warning",
              title: "Encryption does not fix public buckets",
              body: "A frequent exam trap: 'the bucket was encrypted, so the leak was impossible.' Encryption protects against reading the underlying disk or tapping the wire; anyone the IAM policy lets call GetObject receives the decrypted object. State that IAM and encryption are complementary layers, not substitutes.",
            },
            keyTerms: [
              { term: "TLS 1.2/1.3", definition: "Current transport-encryption protocols protecting all data in transit; older versions are deprecated." },
              { term: "AES-256", definition: "The symmetric block cipher used for data at rest across cloud storage services." },
              { term: "KMS", definition: "Key Management Service - the managed, policy-controlled, audited home for encryption keys (AWS KMS, Azure Key Vault)." },
              { term: "Envelope encryption", definition: "Encrypting data with per-object data keys that are themselves wrapped by a KMS master key." },
              { term: "Cryptographic deletion", definition: "Destroying the key so encrypted data becomes permanently unreadable even though ciphertext remains." },
            ],
            examQuestions: [
              {
                q: "Explain encryption of data at rest and in transit in the cloud. Describe envelope encryption step by step, differentiate provider-managed and customer-managed keys, and state why key rotation matters.",
                marks: 7,
                outline: [
                  "In transit: TLS 1.2/1.3 on API, web and DB connections with certificate authentication.",
                  "At rest: AES-256 applied transparently by S3/EBS/database services.",
                  "Key services: KMS/Key Vault with policies, logging, hardware-backed storage.",
                  "Provider-managed (SSE-S3): automatic, easy, provider technically can decrypt.",
                  "Customer-managed (SSE-KMS): consumer policy, per-use audit, cryptographic deletion option.",
                  "Envelope encryption: per-object AES data key wrapped by master key; unwrap via KMS (logged); master never leaves KMS.",
                  "Rotation: scheduled master-key rotation with version history; old ciphertext stays readable; re-key = re-wrap, not re-encrypt.",
                ],
              },
              {
                q: "Why is deleting a KMS key equivalent to destroying all data encrypted under it?",
                marks: 3,
              },
              {
                q: "Which protocol versions must be used for data in transit, and which cipher family for data at rest?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Compliance, audit and governance",
            body: [
              "Compliance is the set of rules a cloud workload must provably follow, and the exam names four frameworks with their domains. PCI DSS governs card-payment data: cardholder data must be encrypted, networks segmented, and access logged - a payment app on the cloud inherits provider attestations but owes its own controls for everything it touches. HIPAA governs health information (PHI) in the US: business associate agreements with the provider, encryption of PHI, and strict access control. GDPR governs personal data of EU residents regardless of where processing happens: lawful basis, data minimisation, right to erasure, data residency via region choice, and breach notification within 72 hours. ISO 27001 and SOC 2 are attestations - certifications and audit reports about an organisation's control environment, the documents you request from a provider before trusting it with regulated data.",
              "The division of labour follows the shared responsibility model of section 2.4: the provider certifies its infrastructure (data centres, physical security, hypervisor) through programs like ISO 27001, SOC 2 Type II and PCI DSS Level 1, publishing reports customers can audit; the customer certifies its own usage - the way it configures services, handles data and restricts access. Exam phrasing: 'the provider is compliant; the customer's deployment must be compliant.' A payment app cannot point at AWS's PCI certificate; it must scope its own cardholder-data environment, encrypt, segment and audit it.",
              "Audit is how compliance becomes evidence. Cloud audit trails record every API call: who, what, when, from where (AWS CloudTrail being the named example, with Azure Activity Log and GCP Cloud Audit Logging as equivalents). Configuration posture is scanned continuously by tools (AWS Config, Security Hub) that flag drift such as a bucket turned public or a security group opened to the internet. Log retention matters: compliance regimes specify minimum retention (often one year hot, seven years archived), and logs themselves need integrity protection - tamper-evident storage. The governance loop: define controls, monitor continuously, remediate findings, and re-attest periodically; a cycle diagram of exactly that loop is the expected figure.",
              "Data residency and sovereignty deserve their own paragraph because they appear in Indian exam papers: some data categories may not leave national jurisdiction, so the provider's region choice becomes a compliance decision - deploy in ap-south-1 (Mumbai), not ap-northeast-1 (Tokyo), if the law says the data stays in India. Government clouds (previewed here, expanded in section 5.6) go further, isolating entire platforms for regulated workloads. The closing exam sentence: 'compliance in the cloud is contractual plus architectural - you inherit the provider's attestations and build your own controls on top; you cannot outsource accountability.'",
            ],
            bullets: [
              "PCI DSS: cardholder data encrypted, networks segmented, access logged - payment workloads owe their own scoping.",
              "HIPAA: PHI protected via business associate agreements, encryption, strict access control.",
              "GDPR: lawful basis, minimisation, right to erasure, residency via region choice, 72-hour breach notification.",
              "ISO 27001 / SOC 2: provider attestations about control environment; request the reports before onboarding.",
              "Responsibility split: provider compliant for infrastructure; customer's deployment must itself be compliant.",
              "Audit trail: every API call logged (CloudTrail); posture tools (AWS Config) flag drift like public buckets.",
              "Residency: region choice is a legal decision (Mumbai ap-south-1 for Indian data-residency rules).",
            ],
            table: {
              caption: "Compliance frameworks at exam depth.",
              headers: ["Framework", "Domain", "Signature requirements"],
              rows: [
                ["PCI DSS", "Card payments", "Encrypt card data, segment network, log access"],
                ["HIPAA", "US health data (PHI)", "BAA with provider, encrypt PHI, access control"],
                ["GDPR", "EU personal data", "Minimisation, erasure right, 72-hour breach notice"],
                ["ISO 27001", "Information security management", "Certified ISMS; provider attestation"],
                ["SOC 2", "Service organisation controls", "Independent audit report of controls"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The continuous compliance loop",
              caption:
                "Compliance is a cycle, not a certificate on the wall.",
              steps: [
                { label: "Define controls", note: "map framework requirements to cloud configs" },
                { label: "Deploy guardrails", note: "IAM baseline, encryption defaults, region pinning" },
                { label: "Monitor continuously", note: "CloudTrail logs, Config posture scans" },
                { label: "Detect drift", note: "public bucket, disabled TLS flag raised" },
                { label: "Remediate + record", note: "fix, document, feed back into controls" },
                { label: "Re-attest", note: "periodic audit / report refresh" },
              ],
            },
            callout: {
              type: "exam",
              title: "You cannot outsource accountability",
              body: "The sentence examiners hunt for: 'the provider's certifications cover its infrastructure; the customer remains accountable for its own configuration and data handling.' Attach the S3-bucket example - AWS was PCI Level 1 certified while customer buckets still leaked - and the compliance half of the question is fully argued.",
            },
            keyTerms: [
              { term: "PCI DSS", definition: "Payment Card Industry Data Security Standard - controls for storing and processing cardholder data." },
              { term: "PHI / HIPAA", definition: "Protected Health Information under the US Health Insurance Portability and Accountability Act." },
              { term: "GDPR", definition: "EU General Data Protection Regulation - rights over personal data with 72-hour breach notification." },
              { term: "Audit trail", definition: "Immutable record of every API call (who, what, when, whence) - CloudTrail is the named AWS example." },
              { term: "Data residency", definition: "The requirement that data physically remain within a jurisdiction, satisfied by region selection." },
            ],
            examQuestions: [
              {
                q: "Explain PCI DSS, HIPAA, GDPR and ISO 27001 in the cloud context. How do provider attestations and customer controls divide under the shared responsibility model, and what role do audit trails play?",
                marks: 7,
                outline: [
                  "PCI DSS: cardholder data - encrypt, segment, log; customer must scope its own cardholder environment.",
                  "HIPAA: PHI - business associate agreement, encryption, access control.",
                  "GDPR: EU personal data - minimisation, erasure, residency via region, 72-hour breach notice.",
                  "ISO 27001 / SOC 2: attestations about control environment; request provider reports.",
                  "Division of labour: provider compliant for infrastructure; customer's deployment must itself comply.",
                  "Audit: CloudTrail logs every call; AWS Config flags drift (public bucket, disabled TLS).",
                  "Residency: region choice is a legal decision; close with 'accountability cannot be outsourced'.",
                ],
              },
              {
                q: "A developer turns a bucket public for a demo and forgets. Which compliance-loop stage should have caught it, and with what tool class?",
                marks: 3,
              },
              {
                q: "Which regulation imposes a 72-hour breach-notification deadline?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Elasticity patterns revisited: serverless, edge and fog computing",
            body: [
              "Unit III built the auto-scaling loop; Unit V asks what happens when elasticity is pushed to its extremes. Serverless (section 2.5's FaaS plus managed backends) is the extreme of scale-to-zero: no idle servers, billing per invocation and per 100 ms of execution, scaling from zero to thousands of concurrent functions in seconds. The economics flip: instead of paying for capacity that might be used, you pay only for use - a hobby API that serves 10,000 requests a month costs fractions of a rupee, while the same traffic on a reserved VM would bill for 730 hours regardless. The constraints remain the 15-minute execution cap, cold starts of 100-1000 ms, and statelessness requirements.",
              "Edge computing moves computation to the network's edge - physically near users. The mechanism is the CDN extended into a compute platform: CloudFront or Cloudflare nodes cache content in hundreds of cities, and functions run at those nodes (Lambda@Edge, Cloudflare Workers) to rewrite requests, authenticate at the edge, or personalise responses. The win is latency: a user in Indore fetching from a Mumbai region sees about 20-40 ms round trip from a nearby edge node versus 60-120 ms to the region core, and dynamic work at the edge (token validation) keeps that latency even for computed responses. Edge suits latency-critical, cache-adjacent, lightweight computation; heavy stateful processing still belongs in the regional core.",
              "Fog computing formalises the layer between edge and cloud. Coined by Cisco for IoT, the fog tier places compute on gateways, routers and local micro-data-centres - devices that sit among the sensors - processing streams locally and forwarding only aggregates to the cloud. The canonical example is autonomous traffic: a vehicle-to-infrastructure loop needs sub-20 ms decisions, impossible on a 100+ ms round trip to a regional data centre, so intersection gateways (fog nodes) decide braking locally while the cloud trains models on the accumulated fleet data. Fog differs from edge in scope: edge usually means provider-operated nodes in CDNs; fog means customer/operator-operated compute between devices and cloud, typically processing IoT telemetry.",
              "The exam synthesis is a three-tier latency/capability comparison, best delivered as a table: device/edge (milliseconds, tiny compute, sensors and phones), fog (tens of ms, gateway-scale compute, IoT aggregation and local decisions), cloud (100+ ms, unlimited compute, training, analytics, storage of record). State the rule of thumb: latency-sensitive and bandwidth-heavy decisions move down the stack; capacity-hungry and long-horizon computation moves up. Then one sentence connecting to elasticity: serverless is elasticity inside the data centre, edge and fog are elasticity distributed across geography - the same measure-decide-act loop, run at three distances from the user.",
            ],
            bullets: [
              "Serverless: scale-to-zero FaaS + managed backends; pay per invocation and per 100 ms; no idle bill.",
              "Serverless constraints: 15-minute execution cap, 100-1000 ms cold starts, statelessness required.",
              "Edge computing: CDN nodes extended with compute (Lambda@Edge, Cloudflare Workers) in hundreds of cities.",
              "Latency numbers: edge about 20-40 ms to nearby users vs 60-120 ms to the regional core.",
              "Fog computing: operator-run gateways and micro-data-centres between IoT devices and cloud (Cisco-originated term).",
              "Fog example: intersection gateway decides braking in under 20 ms; cloud trains models on fleet aggregates.",
              "Rule of thumb: latency-sensitive decisions move down; capacity-hungry computation moves up.",
            ],
            table: {
              caption: "Cloud, fog and edge compared - the three-tier synthesis examiners expect.",
              headers: ["Tier", "Distance from user", "Latency", "Typical compute", "Fits"],
              rows: [
                ["Edge (CDN + functions)", "City-level nodes", "20-40 ms", "Lightweight request logic", "Caching, auth, personalisation"],
                ["Fog (gateways)", "Campus / intersection", "under 20 ms", "IoT aggregation, local decisions", "Autonomous control, telemetry filtering"],
                ["Cloud (region)", "Regional data centre", "60-120 ms", "Unlimited, elastic", "Training, analytics, storage of record"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The compute-continuum stack",
              caption:
                "Index 0 is nearest the user; latency falls as you descend, capacity rises as you ascend.",
              layers: [
                { label: "Devices and edge nodes", note: "ms latency, tiny compute" },
                { label: "Fog gateways", note: "sub-20 ms loops, IoT aggregation" },
                { label: "Cloud region", note: "100+ ms, elastic capacity, training" },
                { label: "Control flows downward, data aggregates upward", note: "the operating principle" },
              ],
            },
            callout: {
              type: "exam",
              title: "Distinguish edge from fog in one sentence",
              body: "The distinction students blur: edge computing is provider-operated compute at CDN nodes near users; fog computing is operator-owned compute on gateways between IoT devices and the cloud. Fog emphasises the IoT context and local autonomy (braking in under 20 ms), while edge emphasises web latency. Name both examples and the distinction writes itself.",
            },
            keyTerms: [
              { term: "Serverless", definition: "Execution model with no provisioned servers: per-invocation billing, scale-to-zero, FaaS plus managed backends." },
              { term: "Edge computing", definition: "Running computation at CDN nodes near users (Lambda@Edge, Cloudflare Workers) for lower latency." },
              { term: "Fog computing", definition: "An intermediate compute tier on gateways/micro-data-centres between IoT devices and the cloud, coined by Cisco." },
              { term: "Cold start", definition: "The initialisation delay when a serverless function runs after being idle." },
              { term: "Latency budget", definition: "The maximum round-trip time a control loop tolerates - the quantity that decides cloud vs fog vs edge." },
            ],
            examQuestions: [
              {
                q: "Compare serverless, edge and fog computing with definitions, examples and latency numbers. State the rule of thumb for placing computation among the three tiers.",
                marks: 7,
                outline: [
                  "Serverless: FaaS scale-to-zero, per-invocation billing; Lambda 15-minute cap, cold starts 100-1000 ms.",
                  "Economics: pay per use, no idle bill; suits spiky APIs and glue code.",
                  "Edge: CDN-plus-compute (Lambda@Edge, Workers); 20-40 ms near users; caching, auth, personalisation.",
                  "Fog: operator gateways between IoT devices and cloud; sub-20 ms control loops; Cisco-originated term.",
                  "Worked example: intersection gateway brakes locally; cloud trains models on aggregates.",
                  "Comparison table: latency (ms to 100+ ms), compute scale, typical workload per tier.",
                  "Rule of thumb: latency-sensitive decisions down the stack; capacity-hungry computation up.",
                ],
              },
              {
                q: "Why can an autonomous-vehicle control loop not run in a regional cloud data centre?",
                marks: 3,
              },
              {
                q: "Name two constraints of serverless compute.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.6",
            title: "Case studies: Netflix, government clouds and disaster recovery",
            body: [
              "The Netflix migration is the exam's signature case study, and its timeline is the answer skeleton. In April 2008 a database corruption halted DVD shipping for three days - a single-PostgreSQL failure that convinced Netflix to abandon its data centre. From 2008 to 2016 Netflix moved everything to AWS in stages: first rehosting (lift and shift of the monolith), then a full replatform into cloud-native services - microservices on EC2, storage on S3, streaming via CloudFront CDN, queues via SQS/SNS, chaos engineering via the Simian Army (Chaos Monkey randomly kills production instances to prove resilience). By January 2016 Netflix had closed its last data centre, serving about 100 million members across 190 countries. The three lessons examiners expect: migrations are staged, not single events; the motivation was reliability and scale, not just cost; and resilience was engineered deliberately (chaos testing, multi-AZ, stateless microservices).",
              "Government clouds address the compliance extreme. AWS GovCloud (US) and Azure Government are physically isolated regions operated by screened personnel under US government-specific compliance regimes (FedRAMP, ITAR), reachable only by vetted customers; India's MeghRaj (GI Cloud) policy similarly defines empanelled providers and a national cloud for government workloads. The design pattern they embody: for regulated workloads, the answer is not 'more security features' but architectural isolation - dedicated infrastructure, stricter personnel controls, and compliance boundary at the platform level. The exam question usually asks 'why does the government need a separate cloud?', and the answer names sovereignty, personnel screening, and compliance certification rather than technology.",
              "Disaster recovery (DR) is planned resilience for site-level failure, quantified by two numbers every answer must define. RTO (Recovery Time Objective): how long until the service is usable again. RPO (Recovery Point Objective): how much data loss is tolerable, measured backwards from failure. The four strategy tiers trade cost against those numbers. Backups only: restore from S3/archive; RTO hours-to-days, RPO up to 24 hours, cheapest. Pilot light: core data replicated continuously (multi-AZ RDS), minimal services kept warm; RTO tens of minutes, RPO minutes. Warm standby: a scaled-down full copy running in a second region, scaled up on disaster; RTO minutes, RPO near zero. Multi-site active-active: both regions serve traffic simultaneously; RTO near zero, RPO zero, most expensive.",
              "A worked DR calculation completes the 7-mark answer. A business requiring RPO of 5 minutes and RTO of 30 minutes: backups-only fails both (RPO 24 hours, RTO days); pilot light can meet RPO 5 minutes (continuous replication) but RTO depends on provisioning - borderline; warm standby meets both comfortably (scaled-up standby serving in minutes); active-active exceeds the requirement at double the infrastructure cost. The decision is therefore a business optimisation: pay for the cheapest tier that meets the stated RTO/RPO. One closing sentence ties the unit together: 'security controls defend the everyday; disaster recovery defends the catastrophic - and both are architecture decisions made before the incident, not after.'",
            ],
            bullets: [
              "Netflix timeline: 2008 database corruption (3-day DVD outage) -> staged AWS migration 2008-2016 -> last data centre closed January 2016.",
              "Netflix lessons: staged migration, cloud-native replatform (microservices, S3, CloudFront, SQS), chaos engineering via Chaos Monkey.",
              "Government clouds: AWS GovCloud / Azure Government - isolated regions, screened personnel, FedRAMP compliance; India's MeghRaj (GI Cloud).",
              "The regulated-workload pattern: architectural isolation (dedicated infrastructure, personnel screening), not extra features.",
              "DR metrics: RTO = time until service restored; RPO = tolerable data loss window.",
              "Four DR tiers: backups only (RPO 24 h, RTO days), pilot light (RPO minutes, RTO tens of minutes), warm standby (RTO minutes), active-active (near zero both).",
              "Decision rule: buy the cheapest tier that meets the required RTO/RPO; worked case - RPO 5 min + RTO 30 min needs at least warm standby.",
            ],
            table: {
              caption: "Disaster-recovery strategy tiers with their RTO/RPO and cost profile.",
              headers: ["Strategy", "What runs in DR region", "Typical RTO", "Typical RPO", "Cost"],
              rows: [
                ["Backups only", "Nothing; restore from copies", "Hours to days", "up to 24 hours", "Lowest"],
                ["Pilot light", "Replicated data; minimal core services", "Tens of minutes", "Minutes", "Low"],
                ["Warm standby", "Scaled-down full copy, scaled up on event", "Minutes", "Near zero", "Medium"],
                ["Active-active", "Both regions serve traffic always", "Near zero", "Zero", "Highest"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing a disaster-recovery tier",
              caption:
                "Match the business's RTO/RPO to the cheapest tier that satisfies it.",
              start: "What RTO and RPO does the business require?",
              branches: [
                { label: "Can lose a day, wait days", outcome: "Backups only - cheapest, slow restore", good: true },
                { label: "Lose minutes, restore in under an hour", outcome: "Pilot light - replicated data, minimal running core", good: true },
                { label: "Restore in minutes, near-zero loss", outcome: "Warm standby - scaled-up copy on demand", good: true },
                { label: "No downtime, no loss tolerated", outcome: "Active-active - both regions live, highest cost", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "Define RTO and RPO before using them",
              body: "DR answers fail when students use RTO and RPO interchangeably. Write the definitions first: RTO counts minutes of downtime until service returns; RPO counts minutes of data loss going backwards from failure. Then pick a tier by the stated numbers - the tier selection itself is only two marks; the definitions and the justification carry the rest.",
            },
            keyTerms: [
              { term: "RTO", definition: "Recovery Time Objective - the maximum tolerable time from failure until the service is usable again." },
              { term: "RPO", definition: "Recovery Point Objective - the maximum tolerable amount of data loss, measured as time before the failure." },
              { term: "Pilot light", definition: "DR pattern keeping replicated data and a minimal core running, with the full stack provisioned on demand." },
              { term: "Warm standby", definition: "DR pattern running a scaled-down complete copy in a second region, scaled up during disaster." },
              { term: "Chaos Monkey", definition: "Netflix's tool that randomly terminates production instances to continuously prove fault tolerance." },
            ],
            examQuestions: [
              {
                q: "Describe the Netflix migration to AWS: its trigger, staging, cloud-native redesign and lessons. Define RTO and RPO and compare the four disaster-recovery strategy tiers, recommending one for RPO 5 minutes and RTO 30 minutes.",
                marks: 7,
                outline: [
                  "Trigger: April 2008 database corruption, three-day DVD shipping halt.",
                  "Staging: 2008-2016 rehost then replatform; last data centre closed January 2016 at about 100 million members.",
                  "Cloud-native redesign: microservices on EC2, S3 storage, CloudFront delivery, SQS/SNS queues.",
                  "Resilience engineering: multi-AZ, stateless services, Chaos Monkey chaos testing.",
                  "Define RTO (time to restore service) and RPO (tolerable data loss window).",
                  "Four tiers with RTO/RPO: backups, pilot light, warm standby, active-active.",
                  "Recommendation: warm standby - meets RPO 5 min and RTO 30 min at lower cost than active-active.",
                ],
              },
              {
                q: "Why do governments operate separate cloud regions rather than buying more security features from the public cloud?",
                marks: 3,
              },
              {
                q: "Which DR tier has near-zero RTO and RPO, and what does it cost in exchange?",
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
      weightedTopics: [
        { topic: "Service models: IaaS vs PaaS vs SaaS with shared responsibility matrix", weight: "10-14 marks", note: "Nearly every paper; draw the responsibility table and one named example per model." },
        { topic: "Virtualization: hypervisor types, full vs para-virtualization, VM vs containers", weight: "8-12 marks", note: "Type 1/Type 2 table plus Docker/Kubernetes is the standard 7-mark pairing." },
        { topic: "NIST definition, five characteristics and deployment models", weight: "6-10 marks", note: "Opens most papers as definition + explain; quote SP 800-145 and give one example per point." },
        { topic: "Cloud security: threats, IAM, encryption, compliance", weight: "8-10 marks", note: "Unit V has become heavier in recent papers; pair every threat with its control." },
        { topic: "Storage and databases: object/block/file, SQL vs NoSQL, CAP", weight: "6-8 marks", note: "One comparison table question plus one scenario pick; quote S3 pricing and durability." },
        { topic: "Auto-scaling, load balancing and SLA arithmetic", weight: "4-8 marks", note: "Compute 99.95 percent downtime live; name target tracking and least-connections." },
        { topic: "Cloud economics: CapEx vs OpEx with worked cost example", weight: "4-6 marks", note: "The 100 x 0.096 x 730 calculation appears as both short and long questions." },
        { topic: "MapReduce / Hadoop / Spark", weight: "4-6 marks", note: "Word-count trace with shuffle shown; one Spark-vs-MapReduce sentence memorised." },
        { topic: "Emerging trends: serverless, edge, fog computing", weight: "4-6 marks", note: "Short questions; know the edge-vs-fog distinction and one latency figure." },
        { topic: "Case studies: Netflix, government clouds, disaster recovery tiers", weight: "3-5 marks", note: "RTO/RPO definitions plus the four-tier table; Netflix timeline in one paragraph." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      weeks: [
        { week: "Week 1", focus: "Unit I - fundamentals and economics", tasks: ["Write the NIST definition and five characteristics from memory, one example each", "Grid vs cloud table; four deployment models with a scenario pick", "Work the 100-server CapEx/OpEx calculation twice with different hours"] },
        { week: "Week 2", focus: "Unit II - service models", tasks: ["IaaS/PaaS/SaaS definitions with the responsibility matrix table", "Decode three instance types; on-demand vs reserved vs spot", "Chong-Carraro maturity levels and one selection scenario answered in full"] },
        { week: "Week 3", focus: "Unit III - virtualization and architecture", tasks: ["Type 1 vs Type 2 and full vs para tables from memory", "VM vs container contrast with namespaces/cgroups explained", "SLA arithmetic: 99.9 / 99.95 / 99.99 downtime; load-balancer algorithms"] },
        { week: "Week 4", focus: "Unit IV - storage, data, programming", tasks: ["Object/block/file table plus a database-vs-archive scenario", "SQL vs NoSQL families with CAP stated precisely", "Trace the MapReduce word count on fresh input; combiner and partitioner roles"] },
        { week: "Week 5", focus: "Unit V - security and trends", tasks: ["Threat table with one incident (Capital One) and controls", "Write the least-privilege IAM policy and describe envelope encryption", "Edge vs fog vs cloud table; RTO/RPO and the four DR tiers"] },
        { week: "Week 6", focus: "Integration and papers", tasks: ["Two full mock papers under 3-hour timing", "Redraw every diagram once: responsibility matrix, container stack, word count, DR fork", "Re-derive all numbers: costs, SLA minutes, 10 TB HDFS blocks, 50k req/s sizing"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Recite the NIST definition and five characteristics once, verbatim - it opens most papers and anchors every definition question.",
        "Redraw the four core tables from memory: service-model responsibility matrix, Type 1 vs Type 2, VM vs container, SQL vs NoSQL.",
        "Re-derive the three number families: cloud cost (100 x 0.096 x 730), SLA downtime (99.95 -> 21.6 minutes), HDFS blocks (10 TB -> 78,000 blocks, 234,000 replicas).",
        "Trace the MapReduce word count on one new sentence including the shuffle - the most common long-question trap is skipping it.",
        "Write the least-privilege IAM policy JSON once and say the evaluation order out loud: explicit deny, then allow, then default deny.",
        "Skim the case studies: Netflix 2008-2016 timeline, Capital One 2019 with 106 million records, the four DR tiers with RTO/RPO.",
        "Read every callout in this file once - they are the half-mark traps past papers repeat (KVM is Type 1, encryption does not fix public buckets, CAP wording).",
        "Stop revising new material by evening; one early night beats three extra skimmed units - recall beats exposure on exam day.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "First 5 minutes: read the whole paper, mark the questions you can answer cold, and start with the definition question - it warms up recall for the hard ones.",
        "Every 7-mark answer follows the same skeleton: definition -> diagram/table -> example with numbers -> one limitation or trade-off sentence.",
        "Draw before you describe: the responsibility matrix, container stack and word-count pipeline earn marks faster than paragraphs.",
        "Quote numbers wherever they exist - prices (0.023 dollars/GB-month), discounts (spot up to 90 percent), SLA minutes, Lambda limits (15 minutes).",
        "For any comparison question, draw the table even if the question does not ask for one; rows and columns structure your marks.",
        "Never leave a trade-off unstated: PaaS = convenience for control, serverless = no idle cost but hard limits, multi-tenancy = cheaper but noisy neighbours.",
        "Time-box: 2-3 mark questions in 5 minutes, 7-mark questions in 15, keeping the final 10 minutes to fill any outline points you skipped.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Calling KVM a Type 2 hypervisor because it lives inside Linux - the kernel owns the hardware, so KVM is Type 1.",
        "Saying CAP means 'pick two of three' in all cases - the sacrifice applies only during a network partition.",
        "Skipping the shuffle step in MapReduce answers - without intermediate (key, value) pairs it is not MapReduce.",
        "Claiming encryption prevents bucket leaks - encryption protects disks and wires; IAM policy still decides who gets decrypted objects.",
        "Listing threats without controls (or controls without threats) - the pairing is the marking scheme.",
        "Using RTO and RPO interchangeably - RTO is time-to-restore, RPO is tolerable data loss measured backwards.",
        "Writing 'containers are lightweight VMs' without naming namespaces and cgroups - the mechanisms carry the marks.",
        "Confusing thin provisioning (lazy disk blocks) with CPU overcommit (shared peak assumption) - name the resource each manages.",
        "Quoting invented past-paper years - describe patterns and topics instead; fabricated citations cost credibility marks.",
        "Forgetting the max-size alarm in auto-scaling answers - 'silently capped at max' is the classic production outage the examiner wants you to mention.",
      ],
    },
  ],
};
