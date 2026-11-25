/**
 * Academics - RGPV ME 8th-semester subject: ME-803(C) Entrepreneurship and
 * Management Concepts.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections. Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const me803c: AcademicSubject = {
  id: "me-803-c",
  code: "ME-803(C)",
  title: "Entrepreneurship and Management Concepts",
  semester: "VIII Semester",
  program: "RGPV · Mechanical Engineering",
  tagline:
    "The complete visual guide to entrepreneurship and management for RGPV mechanical engineers: founders and ecosystems, opportunity and business plans, funding, legal and IP, core management theory, and the operations, HR, marketing and finance that keep a venture alive.",
  description:
    "Five units walk the full startup journey. Unit I frames the entrepreneur against the manager and maps India's ecosystem and Startup India benefits. Unit II turns ideas into validated opportunities and business plans through design thinking, the Business Model Canvas and lean startup. Unit III covers money and law - bootstrapping to venture capital, valuation and term sheets, legal forms, GST and MSME compliance, patents and trademarks. Unit IV builds the manager's toolkit - POLC, structures, leadership, motivation and teams. Unit V runs the venture - lean operations and quality, startup HR, STP and the marketing mix, digital growth and sales funnels, financial statements and unit economics - closing with Indian unicorn case studies. Every section pairs theory with a redrawable diagram, a table or worked example, and the questions RGPV actually asks.",
  accentColor: "#7c3aed",
  emoji: "EN",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Entrepreneurship Fundamentals",
      summary:
        "Who the entrepreneur is, how the role differs from managing, the types entrepreneurs come in, the ecosystem around them, the stage-gated journey from idea to scale, and the Startup India machinery they can plug into.",
      chapter: {
        number: "01",
        title: "Entrepreneurship Fundamentals",
        intro:
          "Unit I frames the field: who the entrepreneur is and how the role differs from managing, the types entrepreneurs come in, the ecosystem that surrounds them, the stage-gated journey from idea to scale, and the government machinery - Startup India, incubators and accelerators - a founder can plug into from day one.",
        inOneBreath:
          "An entrepreneur bears risk, coordinates resources and innovates - Schumpeter's creative destruction - while a manager administers an established enterprise for a salary and an intrapreneur innovates inside a firm; Danhof classifies entrepreneurs as innovative, imitative, Fabian or drone; ecosystems bundle founders, universities, incubators, angels, VCs and policy; ventures pass stage gates from ideation through validation, MVP, traction and scale; and Startup India plus incubators and accelerators cut the cost and risk of the early stages.",
        sections: [
          {
            number: "1.1",
            title: "The entrepreneur: entrepreneur vs manager vs intrapreneur",
            body: [
              "The word entrepreneur descends from the French entreprendre - to undertake. Richard Cantillon first gave it economic meaning: the entrepreneur is the risk-bearer who buys at certain prices and sells at uncertain ones. Jean-Baptiste Say recast him as the coordinator who shifts economic resources out of areas of lower productivity into areas of higher yield. Joseph Schumpeter went further: the entrepreneur is the innovator whose new products and processes drive creative destruction, continually replacing old industries with new ones. Howard Stevenson's modern working definition - the pursuit of opportunity beyond resources currently controlled - captures the mindset. When a mechanical engineer notices that small workshops cannot afford new CNC machines and organizes capital, suppliers and people to sell affordable retrofit kits, every element of the definition is visible.",
              "The professional manager and the entrepreneur are complements, not rivals. The entrepreneur creates the enterprise: he bears financial risk, holds equity, earns the residual profit or loss, and is rewarded by the value the venture creates. The manager administers an ongoing enterprise: hired for competence, paid a salary regardless of venture outcome, accountable to owners, and motivated by career growth. Risk, reward, ownership and horizon separate the two roles. An intrapreneur is the hybrid: a person who behaves like an entrepreneur - championing a new product, owning a budget, recruiting a team - inside an established firm that carries the risk. Gmail inside Google and the Post-it note inside 3M are classic intrapreneurial outcomes.",
              "Startups need both temperaments in sequence. At inception the founder-entrepreneur searches: problem interviews, prototypes, pivots. Once a repeatable business model is found, the venture must run processes reliably - production schedules, quality systems, budgets - and that is management territory. Many ventures fail at exactly this handoff because the founder cannot switch from searching to executing; many stagnate because managers are hired into roles that still need entrepreneurial search. In the exam, score full marks by giving one authoritative definition, a labelled comparison table, and a named example for each role. Close with Stevenson's definition to show the action-biased core of entrepreneurship.",
            ],
            bullets: [
              "Entrepreneur: the risk-bearing innovator who combines resources to create a new venture for profit.",
              "Cantillon: risk-bearer; Say: resource coordinator; Schumpeter: innovator driving creative destruction.",
              "Stevenson: entrepreneurship is the pursuit of opportunity beyond resources currently controlled.",
              "Manager: salaried professional who administers an existing enterprise; risk is career-level, not capital-level.",
              "Intrapreneur: entrepreneurial champion inside a firm; the company, not the individual, carries the financial risk.",
              "Ventures need entrepreneurial search first and managerial execution later - confusing the two phases kills startups.",
            ],
            table: {
              caption: "Entrepreneur, professional manager and intrapreneur compared across six dimensions.",
              headers: ["Dimension", "Entrepreneur", "Professional manager", "Intrapreneur"],
              rows: [
                ["Primary role", "Creates a new venture", "Administers an existing venture", "Creates a venture inside a firm"],
                ["Risk", "Own capital at stake", "Salaried; career risk only", "The firm carries the risk"],
                ["Reward", "Residual profit and equity value", "Fixed salary, bonus, promotion", "Salary plus bonus and recognition"],
                ["Funding", "Raises it himself", "Operates within budgets", "A corporate budget"],
                ["Accountability", "To self and investors", "To owners and superiors", "To the executive sponsor"],
                ["Typical horizon", "Idea to exit", "Annual plans and targets", "The life of the project"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Entrepreneur versus professional manager",
              caption: "Two roles, two reward systems - a venture needs both at different moments of its life.",
              left: {
                heading: "Entrepreneur",
                items: [
                  "Creates the enterprise; risk is personal capital",
                  "Income is the residual - profit or loss",
                  "Rewarded by the equity value the venture creates",
                  "Searches: opportunity, product, market fit",
                  "Horizon is the venture lifecycle",
                ],
              },
              right: {
                heading: "Professional manager",
                items: [
                  "Administers an existing, going concern",
                  "Income is fixed - salary and bonus",
                  "Rewarded by promotion and reputation",
                  "Executes: plans, processes, budgets",
                  "Horizon is the annual performance cycle",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Answer format that scores",
              body: "For any 'distinguish between' question in this unit, write a one-line definition of each role, then a table with at least five dimensions (role, risk, reward, funding, accountability, horizon), then one named example each. The table carries the method marks; the examples carry the tail marks.",
            },
            keyTerms: [
              { term: "Entrepreneur", definition: "A risk-bearing innovator who combines resources to create a new profit-seeking venture." },
              { term: "Intrapreneur", definition: "A person who applies entrepreneurial behaviour - new products, owned budgets, recruited teams - inside an established firm." },
              { term: "Creative destruction", definition: "Schumpeter's term for the process by which innovation displaces old products, firms and industries with new ones." },
            ],
            examQuestions: [
              {
                q: "Define an entrepreneur. Distinguish clearly between an entrepreneur, a professional manager and an intrapreneur, with one example of each.",
                marks: 7,
                outline: [
                  "Open with the classical definitions: Cantillon's risk-bearer, Say's resource coordinator, Schumpeter's innovator.",
                  "Quote Stevenson: the pursuit of opportunity beyond resources currently controlled.",
                  "Draw the comparison table: primary role, risk, reward, funding, accountability, horizon.",
                  "Contrast the manager: salaried, administers an existing venture, motivated by career growth.",
                  "Define the intrapreneur: entrepreneurial behaviour inside an established firm at the firm's risk.",
                  "Give one example of each: a first-generation founder, a plant manager, Gmail developed inside Google.",
                  "Conclude: startups need entrepreneurial search first, managerial execution later.",
                ],
              },
              {
                q: "What is creative destruction and who proposed the concept?",
                marks: 2,
              },
              {
                q: "List any three characteristics of a successful entrepreneur with one line each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "Types and classification of entrepreneurs",
            body: [
              "The most cited classification belongs to Clarence Danhof, who graded entrepreneurs by their openness to innovation. The innovative entrepreneur is aggressive, research-driven and willing to accept the highest risk: he commercializes inventions, creates new markets and grows fast - the profile of a founder launching a new battery-chemistry venture. The imitative or adoptive entrepreneur copies proven models and adapts them to local conditions - a franchise operator or the person who brings an established service format to a tier-two city. Risk is moderate because the model is already validated elsewhere, but execution skill must still be genuine.",
              "Danhof's remaining two types are cautionary. The Fabian entrepreneur is sceptical and conservative: he imitates only when competitive pressure leaves no choice, which is the common profile of a second-generation family machine shop that modernizes only after losing orders. The drone entrepreneur refuses to change at all - the operation stays small, methods stay inherited, and growth is flat by choice. Other axes refine the picture: small-business and lifestyle ventures versus scalable startups; social entrepreneurs who measure impact alongside profit; serial entrepreneurs who found repeatedly and portfolio entrepreneurs who run several ventures at once; and the distinction between first-generation founders and inheritors.",
              "Classification is not academic decoration. Investors calibrate risk by type - a cheque for an innovative founder prices a different failure rate than one for a franchise operator. Government schemes target types: Mudra serves small-business founders while the Fund of Funds backs innovative ones. Founders self-assess honestly - a mechanical engineer patenting a device is on the innovative end, while one running a steady job-shop is closer to the small-business category. In the exam, name the classifier first, define each type in one line, then give growth potential and one Indian example per type.",
            ],
            bullets: [
              "Danhof's four types: innovative, imitative (adoptive), Fabian and drone - graded by openness to innovation.",
              "Innovative: highest risk, research-driven, creates new products and markets; the Schumpeterian archetype.",
              "Imitative: copies proven models and adapts them locally - moderate risk, steady growth, capital-efficient.",
              "Fabian and drone: change only under pressure or never - survival mode and stagnation respectively.",
              "Other axes: small-business vs scalable startup, social, serial vs portfolio, first-generation vs inheritor.",
              "Why it matters: investors price risk by type and schemes are designed around types.",
            ],
            table: {
              caption: "Danhof's classification with behaviour, risk and growth potential.",
              headers: ["Danhof type", "Behaviour", "Risk appetite", "Growth", "Example"],
              rows: [
                ["Innovative", "Aggressive, research-driven, launches new products", "Highest", "Rapid", "Founder of a new EV battery venture"],
                ["Imitative (adoptive)", "Copies proven models, adapts to local markets", "Moderate", "Steady", "Franchise operator of a proven service brand"],
                ["Fabian", "Cautious; imitates only under competitive pressure", "Low", "Slow", "Second-generation family machine shop"],
                ["Drone", "Resists change; subsistence operation", "Minimal", "Flat", "Owner content with a traditional craft shop"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Danhof's classification at a glance",
              caption: "Openness to innovation and risk appetite place every founder in one of four orientations.",
              start: "Founder orientation",
              branches: [
                { label: "Innovative", outcome: "New products, first mover, rapid growth", good: true },
                { label: "Imitative", outcome: "Proven model adapted locally, steady growth", good: true },
                { label: "Fabian", outcome: "Cautious late adoption, survival mode", good: false },
                { label: "Drone", outcome: "Refuses change, stagnation and decline", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Remember Danhof as I-I-F-D: Innovative, Imitative, Fabian, Drone - the sequence runs from maximum to minimum openness to change. Pair each letter with one Indian example and the seven-mark answer writes itself.",
            },
            keyTerms: [
              { term: "Innovative entrepreneur", definition: "A founder who commercializes a genuinely new product or process, accepting the highest risk for potentially rapid growth." },
              { term: "Imitative entrepreneur", definition: "A founder who adopts an already proven business model and adapts it to a new market or region." },
              { term: "Social entrepreneur", definition: "A founder whose primary objective is measurable social or environmental impact, with profit as a means rather than the end." },
            ],
            examQuestions: [
              {
                q: "Explain Clarence Danhof's classification of entrepreneurs. Give one example and the growth potential of each type.",
                marks: 7,
                outline: [
                  "Attribute the classification to Clarence Danhof, building on Schumpeter's degrees of innovation.",
                  "Innovative entrepreneur: aggressive, research-driven, launches new products - highest risk, rapid growth; example: a new EV battery venture.",
                  "Imitative (adoptive) entrepreneur: copies and localizes proven models - moderate risk, steady growth; example: a franchise operator.",
                  "Fabian entrepreneur: cautious, adopts change only under competitive pressure - example: a second-generation family firm.",
                  "Drone entrepreneur: refuses change, runs a subsistence operation with flat growth.",
                  "Add other axes briefly: small-business vs scalable startup, social, serial vs portfolio.",
                  "Conclude: investors calibrate risk by type and government schemes target specific types.",
                ],
              },
              {
                q: "Who is a social entrepreneur? Give one Indian example.",
                marks: 2,
              },
              {
                q: "Distinguish between a serial entrepreneur and a portfolio entrepreneur.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "The entrepreneurial ecosystem",
            body: [
              "No founder builds alone. An entrepreneurial ecosystem is the interdependent set of actors, institutions and conditions that jointly make venture creation faster and less deadly. Daniel Isenberg's model names six domains: policy (ease of doing business, taxation, insolvency rules), finance (angels, venture capital, banks), culture (tolerance of failure, celebration of success), supports (incubators, accelerators, mentors, professional services), human capital (engineers, experienced operators, serial founders) and markets (early customers, procurement, export access). Weakness in one domain - for example, no early-stage capital - silently weakens all the others.",
              "India's ecosystem has compounded visibly. The country has produced over a hundred unicorns and more than a lakh of DPIIT-recognized startups. Universities supply talent and labs: SINE at IIT Bombay, the CIIE at IIM Ahmedabad and campus e-cells turn students into founders. Incubators and accelerators such as T-Hub in Hyderabad and Maker Village in Kochi - the latter aimed squarely at hardware - cut early costs. Angel networks like the Indian Angel Network write the first serious cheques; venture firms follow with institutional rounds. Government programmes - Startup India, Make in India, the Atal Innovation Mission and SIDBI's Fund of Funds - sit underneath all of it.",
              "For an engineering student the ecosystem is a utility to be mapped before it is needed. The founder's first network is usually the campus e-cell, an alumni mentor and a competition grant; the first hardware prototype often comes from an incubator lab that would cost crores to build privately. The ecosystem's structural weakness is the valley of death - the gap between a validated prototype and the first revenue, where grants have ended and angels have not yet arrived. Ecosystem thinking is examinable: list the six domains, give one Indian example for each, and close with the valley of death as the binding constraint.",
            ],
            bullets: [
              "Ecosystem: interdependent actors and institutions that jointly enable venture creation.",
              "Isenberg's six domains: policy, finance, culture, supports, human capital, markets.",
              "Indian examples: SINE IIT-B, CIIE IIM-A, T-Hub, Maker Village (hardware), Indian Angel Network.",
              "Government layer: Startup India, Make in India, Atal Innovation Mission, SIDBI Fund of Funds.",
              "Valley of death: the gap between grant-funded prototypes and angel-funded traction.",
              "Founders should map their ecosystem early - labs, mentors and grants are cheapest before they are urgently needed.",
            ],
            table: {
              caption: "Ecosystem actors and what each contributes, with Indian examples.",
              headers: ["Actor", "Provides", "Indian example"],
              rows: [
                ["Founders and talent", "Ideas, labour, leadership", "IIT and IIM alumni founders"],
                ["Universities and E-cells", "Research, labs, student teams", "SINE at IIT Bombay, CIIE at IIM-A"],
                ["Incubators and accelerators", "Space, mentoring, networks, seed funds", "T-Hub, Maker Village, 100X.VC"],
                ["Angel investors", "Early cheques and hands-on mentoring", "Indian Angel Network, Lead Angels"],
                ["Venture capital", "Institutional growth capital", "Peak XV, Blume, Accel India"],
                ["Government", "Policy, grants, procurement, tax relief", "Startup India, AIM, SIDBI Fund of Funds"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The entrepreneurial ecosystem stack",
              caption: "Isenberg's domains arranged from founders at the top to culture and markets at the base - each layer supports the one above it.",
              layers: [
                { label: "Founders and startups", note: "the visible core" },
                { label: "Supports: incubators, accelerators, mentors", note: "cheaper, faster experimentation" },
                { label: "Capital: angels, VCs, banks", note: "fuel matched to each stage" },
                { label: "Policy: Startup India, GST, insolvency reform", note: "the rules of the game" },
                { label: "Culture and markets", note: "tolerance of failure, early customers" },
              ],
            },
            callout: {
              type: "exam",
              title: "The scoring pattern",
              body: "Ecosystem questions are marked domain by domain: six domains with one line each, one Indian example per domain, and a closing line on the valley of death. An answer that lists only 'government, banks, startups' without a framework rarely crosses half marks.",
            },
            keyTerms: [
              { term: "Entrepreneurial ecosystem", definition: "The interdependent set of actors, institutions and conditions that together enable new venture creation." },
              { term: "Valley of death", definition: "The early funding gap between a validated prototype and first revenue, after grants end but before angels invest." },
              { term: "E-cell", definition: "A campus entrepreneurship cell that runs competitions, mentoring and pre-incubation for student founders." },
            ],
            examQuestions: [
              {
                q: "What is an entrepreneurial ecosystem? Explain its components with Indian examples.",
                marks: 7,
                outline: [
                  "Define ecosystem: interdependent actors and institutions that jointly enable venture creation.",
                  "Present Isenberg's six domains: policy, finance, culture, supports, human capital, markets.",
                  "Founders and talent as the core; universities supplying research, labs and graduates.",
                  "Supports: incubators, accelerators, E-cells, mentors and professional services.",
                  "Capital: angels, VCs, banks and government schemes such as the Fund of Funds.",
                  "Indian examples: SINE IIT-B, CIIE IIM-A, T-Hub, Maker Village, Indian Angel Network, Startup India.",
                  "Close with the valley of death - the early funding gap that ecosystems exist to bridge.",
                ],
              },
              {
                q: "What is the 'valley of death' in startup funding?",
                marks: 2,
              },
              {
                q: "Name any six actors of an entrepreneurial ecosystem with one line on what each provides.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.4",
            title: "Startup stages: from idea to scale",
            body: [
              "Steve Blank's definition sets the frame: a startup is a temporary organization searching for a repeatable, scalable business model - not a smaller version of a large company. The journey runs through five stage gates. Ideation is problem discovery: dozens of open-ended interviews before any solution is drawn. Validation seeks problem-solution fit: evidence that the target user finds the proposed fix valuable enough to pay for. Build and launch ships the MVP and hunts for product-market fit. Traction builds the repeatable growth engine. Scale adds new markets, management layers and processes; maturity or exit follows. A small business, by contrast, is designed to stay small - a difference examiners love.",
              "Each stage has its own goal, metric and money. Problem-solution fit is measured by interview insight and pre-orders; product-market fit by retention and referral - Sean Ellis's rule of thumb that at least 40 percent of users would be 'very disappointed' without you; traction by CAC, LTV and churn; scale by revenue, margin and organizational health. Funding climbs the ladder in step: founders and friends at ideation, grants and competitions at validation, angels at launch, seed and Series A at traction, growth rounds at scale. Most pivots happen at validation and launch, where learning is cheapest.",
              "The stage-gate discipline is the examinable idea: do not advance until the current gate's metric is met. The two classic failure modes violate exactly that rule. Building before validating produces the solution in search of a problem. Premature scaling - hiring and spending ahead of learning - burns the runway before the engine works; it is the most common cause of seed-stage death. A hardware example makes the ladder concrete: a college-lab prototype, a pilot with five workshops, then a 200-units-per-month assembly line. Each step is earned by the metric of the step before it.",
            ],
            bullets: [
              "Startup (Blank): a temporary organization searching for a repeatable, scalable business model.",
              "Five stage gates: ideation, validation, build and launch, traction, scale.",
              "Problem-solution fit is proven with interviews and pre-orders; product-market fit with retention and referral.",
              "Sean Ellis test: at least 40 percent of users 'very disappointed' without the product signals PMF.",
              "Metrics and funding change per stage: founders and F&F -> grants -> angels -> seed -> growth rounds.",
              "Premature scaling - spending ahead of learning - is the top seed-stage killer; respect the gates.",
            ],
            table: {
              caption: "Stage-gate view of the startup journey: goal, metric, money and dominant risk.",
              headers: ["Stage", "Goal", "Key metric", "Typical funding", "Main risk"],
              rows: [
                ["Ideation", "Find a real problem worth solving", "Depth of problem interviews", "Founders, friends and family", "Building a solution nobody needs"],
                ["Validation", "Confirm problem-solution fit", "Willingness-to-pay signals", "Grants, competitions", "Confirmation bias in interviews"],
                ["Build and launch", "Ship the MVP; find product-market fit", "Retention; 40 percent 'very disappointed'", "Angels, seed funds", "Premature scaling of spend"],
                ["Traction", "Build a repeatable growth engine", "CAC vs LTV, churn", "Seed, Series A", "Growth without unit economics"],
                ["Scale", "New markets, layers, processes", "Revenue, margin, org health", "Series B and beyond", "Culture and quality dilution"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Startup stages as a stage-gate pipeline",
              caption: "Do not advance until the current gate's metric is met - that discipline is what prevents premature scaling.",
              stages: [
                { label: "Ideation", note: "problem discovery" },
                { label: "Validation", note: "problem-solution fit" },
                { label: "Build and launch", note: "MVP, product-market fit" },
                { label: "Traction", note: "repeatable growth engine" },
                { label: "Scale", note: "new markets, new layers" },
              ],
            },
            callout: {
              type: "warning",
              title: "Premature scaling",
              body: "The single most examined failure mode in this unit: hiring sales before product-market fit, buying machines before design freeze, or spending on ads before retention holds. Always name the stage you are in and the metric that unlocks the next one.",
            },
            keyTerms: [
              { term: "Startup", definition: "A temporary organization searching for a repeatable, scalable business model (Steve Blank)." },
              { term: "Product-market fit", definition: "The point where a specific market reliably pulls the product - visible in retention and word of mouth." },
              { term: "Pivot", definition: "A structured course correction of one core business-model hypothesis after validated learning." },
            ],
            examQuestions: [
              {
                q: "Describe the stages of a startup from idea to scale. What is product-market fit and how is it recognized?",
                marks: 7,
                outline: [
                  "Define a startup (Blank): a temporary organization searching for a repeatable, scalable business model.",
                  "Ideation: problem discovery through open-ended customer interviews.",
                  "Validation: problem-solution fit; willingness-to-pay signals and pre-orders.",
                  "Build and launch: ship the MVP and search for product-market fit.",
                  "Define product-market fit: retention, referral and the 40 percent 'very disappointed' test.",
                  "Traction: repeatable growth engine - CAC, LTV and churn become the working metrics.",
                  "Scale: new markets and management layers; warn against premature scaling at every earlier gate.",
                ],
              },
              {
                q: "Differentiate a startup from a small business.",
                marks: 2,
              },
              {
                q: "What is a pivot? Name any three pivot types.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "Startup India, incubators, accelerators and government support",
            body: [
              "Startup India, launched on 16 January 2016, is the flagship support programme. Recognition by DPIIT requires an entity incorporated as a private limited company (including a one-person company), LLP or registered partnership; less than 10 years old; turnover not exceeding Rs 100 crore in any previous year; working on innovation or improvement of products, processes or services, or a scalable model with high employment or wealth-creation potential; and not formed by splitting up an existing business. Recognition is applied for and granted online through the Startup India portal.",
              "The benefit stack is worth memorizing as a list. Income-tax holiday: three consecutive years of exemption out of the first ten under section 80-IAC. Self-certification under six labour and three environmental laws, reducing inspection risk. An 80 percent rebate on patent fees with fast-tracked examination, and 50 percent off trademark fees. Relaxed public procurement - startups can sell on GeM without prior turnover or experience thresholds. A Rs 10,000 crore Fund of Funds managed by SIDBI that invests through SEBI-registered funds rather than directly. Alongside sit Atal Innovation Mission incubators, Mudra loans for small founders and Make in India procurement push.",
              "Private support completes the picture. An incubator - often university or government hosted - provides space, labs, mentoring and networks for 6 to 24 months, usually taking little or no equity; SINE at IIT Bombay and Maker Village in Kochi serve hardware founders well. An accelerator runs a fixed 3-6 month cohort with a seed cheque for 5-10 percent equity, a structured curriculum and a demo day - Y Combinator globally, 100X.VC in India. A venture studio builds companies in-house. Founders should apply with a sharp problem statement and use the prototyping labs to avoid capital expenditure, while reading the equity and reporting obligations carefully.",
            ],
            bullets: [
              "Startup India (2016): DPIIT recognition for innovative entities under 10 years old with turnover under Rs 100 crore.",
              "Benefits: 80-IAC three-year tax holiday, self-certification, 80 percent patent fee rebate, GeM access.",
              "Fund of Funds: Rs 10,000 crore SIDBI corpus investing through SEBI-registered funds.",
              "Incubator: long stay, labs and mentoring, little or no equity; example SINE IIT-B, Maker Village.",
              "Accelerator: fixed 3-6 month cohort, seed cheque for 5-10 percent equity, demo day; example 100X.VC.",
              "Mudra tiers for small founders: Shishu up to Rs 50,000, Kishore up to Rs 5 lakh, Tarun up to Rs 10 lakh.",
            ],
            table: {
              caption: "Incubator, accelerator and venture studio compared.",
              headers: ["Feature", "Incubator", "Accelerator", "Venture studio"],
              rows: [
                ["Stage served", "Idea or prototype", "Early traction", "Pre-idea; built in-house"],
                ["Duration", "6-24 months, flexible", "Fixed 3-6 month cohort", "Continuous"],
                ["Support", "Space, labs, mentoring, network", "Curriculum, mentors, demo day", "Team, IP and capital from day one"],
                ["Equity taken", "None or 1-5 percent", "5-10 percent for the seed cheque", "Large founder-level share"],
                ["Examples", "SINE IIT-B, Maker Village", "Y Combinator, 100X.VC", "Idealab-style builders"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "From incorporation to DPIIT recognition",
              caption: "The Startup India benefit stack unlocks only after this five-step flow is complete.",
              steps: [
                { label: "Incorporate a Pvt Ltd, LLP or partnership", note: "entity under 10 years old" },
                { label: "Create a profile on the Startup India portal", note: "founder details and venture brief" },
                { label: "Apply for DPIIT recognition", note: "innovation write-up" },
                { label: "Upload supporting documents", note: "pitch deck, patent or copyright if any" },
                { label: "Receive certificate and claim benefits", note: "80-IAC, fee rebates, GeM access" },
              ],
            },
            callout: {
              type: "exam",
              title: "List + example format",
              body: "Startup India answers are marked as lists: state the eligibility criteria in full, then any five benefits with one line each (tax holiday, self-certification, patent rebate, GeM procurement, Fund of Funds). Close with one sentence on incubators versus accelerators - a frequent rider question.",
            },
            keyTerms: [
              { term: "DPIIT recognition", definition: "Official Startup India status granted to eligible young, innovative entities, unlocking tax and fee benefits." },
              { term: "Fund of Funds", definition: "A Rs 10,000 crore SIDBI-managed corpus that invests in startups indirectly through SEBI-registered alternative investment funds." },
              { term: "Demo day", definition: "The closing event of an accelerator cohort where startups pitch to a room of investors." },
            ],
            examQuestions: [
              {
                q: "Explain the Startup India initiative: state the eligibility criteria for DPIIT recognition and any five benefits it provides.",
                marks: 7,
                outline: [
                  "Launch: 16 January 2016 as the government's flagship ecosystem programme.",
                  "Criteria: private limited company, LLP or partnership; less than 10 years old.",
                  "Turnover below Rs 100 crore in any previous year; innovative or scalable model.",
                  "Not formed by splitting up or reconstructing an existing business.",
                  "Benefit: three-year income-tax holiday under section 80-IAC.",
                  "Benefit: self-certification under six labour and three environmental laws; 80 percent patent fee rebate and fast-tracking.",
                  "Benefit: relaxed GeM procurement and the Rs 10,000 crore Fund of Funds via SIDBI.",
                ],
              },
              {
                q: "What are the three Mudra loan tiers and their limits?",
                marks: 2,
              },
              {
                q: "Differentiate an incubator from an accelerator on any three counts.",
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
      title: "Opportunity and Business Plan",
      summary:
        "Where opportunities come from and how they are screened, how design thinking and SCAMPER structure ideation, the nine-block Business Model Canvas, lean startup testing with MVPs, and the business plan that packages it all for investors.",
      chapter: {
        number: "02",
        title: "Opportunity and the Business Plan",
        intro:
          "Unit II converts curiosity into a company: where opportunities come from and how they are screened, how design thinking and SCAMPER structure ideation, how the Business Model Canvas captures the whole venture on one page, how lean startup discipline tests that canvas with MVPs, and how all of it is compiled into a business plan investors and banks can read.",
        inOneBreath:
          "An opportunity is a timely, attractive, durable, value-anchored idea; Drucker's seven sources and screening criteria such as TAM-SAM-SOM, timing, margin and founder fit separate the winners; design thinking loops empathize-define-ideate-prototype-test while SCAMPER forces substitution, combination, adaptation, modification, new uses, elimination and reversal on existing products; the Business Model Canvas links nine blocks from customer segments to cost structure; lean startup runs build-measure-learn on MVPs and pivots on validated learning; and the business plan packages the proof into a fundable document.",
        sections: [
          {
            number: "2.1",
            title: "Opportunity identification and evaluation",
            body: [
              "An idea is not yet an opportunity. Jeffry Timmons defines an opportunity as an idea that is timely, attractive, durable and anchored in a product or service that creates or adds value for its buyer. Peter Drucker systematized the sources: the unexpected success or failure, incongruities between what is and what ought to be, process needs, changes in industry or market structure, demographics, changes in perception and mood, and new knowledge - the last having the longest lead time and highest failure rate. For engineers, the richest source is usually the pain observed in one's own industry: maintenance delays, imported spares, quality escapes.",
              "Screening turns a stream of ideas into one commitment. Size the market as TAM, SAM and SOM - total addressable, serviceable and obtainable - and demand a SOM large enough to cross break-even. Check timing: why is now the moment, and is the enabling regulation or technology actually ready? Study competition honestly - finding no competitor usually signals no market, not virgin territory. Test unit margin at a realistic price, regulatory barriers, and founder-market fit: the unfair advantage this team has that others do not. Then validate like Rob Fitzpatrick's Mom Test: ask customers about their lives and past behaviour, not about your idea, because opinions are cheap and compliments are worthless.",
              "A worked mini-case fixes the method. A workshop owner complains of four-hour machine downtime on breakdown; the opportunity is an IoT vibration-monitoring retrofit kit. Screen: roughly 50,000 SME machine shops nationally as TAM, a Rs 15,000 kit price with healthy margin, no dominant incumbent, and a founder who spent years in maintenance engineering - the screen passes. Kill criteria are part of the method, not an admission of defeat: if interviews show admiration but no willingness to pay, park the idea and move to the next. Exam answers score by naming Drucker's sources and then showing the screen applied to one concrete example.",
            ],
            bullets: [
              "Opportunity (Timmons): timely, attractive, durable and anchored in a product that adds value for the buyer.",
              "Drucker's seven sources: unexpected, incongruities, process needs, structure changes, demographics, perception shifts, new knowledge.",
              "Screen with TAM-SAM-SOM: the obtainable slice must clear the break-even volume.",
              "Check timing, honest competition analysis and founder-market fit (the unfair advantage).",
              "Validate with Mom Test interviews: past behaviour and real budgets, not opinions about your idea.",
              "Kill criteria are part of the method - willingness to pay is the gate that matters.",
            ],
            table: {
              caption: "Screening criteria, the question each asks and the danger signal to watch for.",
              headers: ["Criterion", "Screening question", "Danger signal"],
              rows: [
                ["Market size", "Are TAM, SAM and SOM large enough?", "SOM below the break-even volume"],
                ["Timing", "Why is now the right time?", "Enabling regulation or technology still years away"],
                ["Competition", "Who wins today and why?", "No competitor found - usually means no market"],
                ["Economics", "Does price exceed cost with margin?", "Negative unit margin at any realistic price"],
                ["Founder fit", "Why this team for this problem?", "No domain access or unfair advantage"],
                ["Willingness to pay", "Will anyone commit money now?", "Praise and compliments but no pre-orders"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Screening an idea into an opportunity",
              caption: "Diverge first, converge hard, validate with customers, then commit or park - kill criteria included.",
              steps: [
                { label: "Scan sources: pain points, trends, Drucker's seven", note: "diverge" },
                { label: "Generate candidate ideas", note: "quantity before quality" },
                { label: "Screen: market, timing, margin, competition", note: "converge" },
                { label: "Validate in customer interviews", note: "the Mom Test" },
                { label: "Commit or park", note: "kill criteria are part of the method" },
              ],
            },
            callout: {
              type: "tip",
              title: "The Mom Test in one line",
              body: "Ask about the customer's life, budget and past behaviour - never about your idea. 'Would you buy this?' produces polite lies; 'what did you do the last time the machine failed?' produces evidence.",
            },
            keyTerms: [
              { term: "Opportunity", definition: "A timely, attractive, durable idea anchored in a product or service that creates value for a buyer." },
              { term: "TAM, SAM, SOM", definition: "Total addressable, serviceable and obtainable market - the three nested estimates of market size." },
              { term: "Founder-market fit", definition: "The specific unfair advantage - domain knowledge, network, patents - that makes this team the right one for this problem." },
            ],
            examQuestions: [
              {
                q: "What is an entrepreneurial opportunity? Discuss the sources of opportunity and the criteria for evaluating one.",
                marks: 7,
                outline: [
                  "Distinguish an idea from an opportunity: timely, attractive, durable and value-anchored (Timmons).",
                  "Drucker's sources: the unexpected, incongruities and process needs.",
                  "Changes in industry or market structure, demographics, perception shifts and new knowledge.",
                  "Evaluation criteria: TAM-SAM-SOM, timing and honest competition analysis.",
                  "Unit margin at a realistic price; regulatory barriers; founder-market fit.",
                  "Validation: Mom Test interviews focused on past behaviour and budgets; pre-orders as evidence.",
                  "Close with kill criteria: no willingness to pay means park the idea.",
                ],
              },
              {
                q: "Differentiate between an idea and an opportunity.",
                marks: 2,
              },
              {
                q: "Expand TAM, SAM and SOM with a one-line example.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.2",
            title: "Design thinking and SCAMPER",
            body: [
              "Design thinking is the human-centred approach to innovation taught by the Stanford d.school, and it proceeds through five stages. Empathize immerses the team with real users - watching a machine operator work beats reading a survey. Define compresses the observations into a point-of-view problem statement: the specific user, the specific need and the insight behind it. Ideate diverges deliberately - quantity first, judgement suspended - using brainstorms and analogies. Prototype turns the best ideas into cheap artefacts the user can touch: cardboard mock-ups, storyboards, wireframes. Test puts those artefacts in front of users and feeds the learning back. The stages are a loop, not a ladder; test results routinely send the team back to empathize or define.",
              "SCAMPER, developed by Bob Eberle, is a checklist that forces systematic search on an existing product. Substitute asks what component, material or process could be swapped; Combine asks what could be merged into one offering - the phone that absorbed the camera and the music player. Adapt borrows what works elsewhere - assembly-line logic adapted to fast food. Modify asks what to magnify, minify or twist; Put to another use finds new users for existing products, as baking soda found refrigerator deodorizing. Eliminate strips out steps or costs - direct-to-home razors eliminated retail. Reverse or Rearrange inverts the sequence, as the buffet inverted the served table.",
              "The two tools answer different needs, and a good exam answer says so explicitly. Design thinking suits problems where the user's need itself is unclear - the fuzzy front end. SCAMPER suits differentiation of a known product against known competitors - the sharpening middle. Both feed the ideation stage of the startup journey and both are cheap: their raw material is observation and discipline, not capital. In answers, list the five stages in order with one line each, expand all seven SCAMPER letters with a product example, and add the closing contrast - that distinction is typically the seventh mark.",
            ],
            bullets: [
              "Design thinking: human-centred, iterative innovation - five stages that loop, not a linear waterfall.",
              "Empathize, define, ideate, prototype, test - the d.school sequence.",
              "Point-of-view statement: user + need + insight; the define stage's output.",
              "SCAMPER: substitute, combine, adapt, modify, put to another use, eliminate, reverse/rearrange.",
              "Design thinking suits fuzzy problems; SCAMPER suits differentiating a known product.",
              "Both tools are capital-cheap - observation and discipline are the raw material.",
            ],
            table: {
              caption: "SCAMPER expanded: each prompt with a product example.",
              headers: ["Letter", "Prompt", "Product example"],
              rows: [
                ["S - Substitute", "Which component, material or process can be swapped?", "Aluminium substituted for steel in frames"],
                ["C - Combine", "What can be merged into one offering?", "Phone plus camera plus music player"],
                ["A - Adapt", "What works elsewhere that can be adapted?", "Assembly-line logic adapted to fast food"],
                ["M - Modify", "Magnify, minify or twist - what scale change?", "Miniature power tools for households"],
                ["P - Put to another use", "Existing product, new users or uses?", "Baking soda sold as a fridge deodorizer"],
                ["E - Eliminate", "What can be removed or simplified?", "Direct-to-home razors cut the retail chain"],
                ["R - Reverse", "Reverse or rearrange the sequence?", "Buffet service reverses the served table"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Design thinking as a loop, not a ladder",
              caption: "Teams jump back between stages - test results routinely redefine the problem statement.",
              steps: [
                { label: "Empathize", note: "observe real users at work" },
                { label: "Define", note: "frame the point-of-view problem" },
                { label: "Ideate", note: "diverge without judging" },
                { label: "Prototype", note: "cheap, fast artefacts" },
                { label: "Test", note: "learn, then loop back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Two lists, one contrast",
              body: "This section is examined as two lists: the five design thinking stages in order, and all seven SCAMPER letters expanded with one example each. The final mark usually sits on the contrast - use design thinking when the need is fuzzy, SCAMPER when the product is known.",
            },
            keyTerms: [
              { term: "Design thinking", definition: "A human-centred, iterative method of innovation built on empathy, framing, ideation, prototyping and testing." },
              { term: "SCAMPER", definition: "Eberle's ideation checklist - substitute, combine, adapt, modify, put to another use, eliminate, reverse - applied to existing products." },
              { term: "Prototype", definition: "A cheap, quick artefact built to make an idea testable by real users." },
            ],
            examQuestions: [
              {
                q: "Explain design thinking with its five stages. How does it complement techniques such as SCAMPER?",
                marks: 7,
                outline: [
                  "Define design thinking: the human-centred, iterative approach popularized by the Stanford d.school.",
                  "Empathize: immersion and observation of real users in context.",
                  "Define: synthesize findings into a point-of-view problem statement (user, need, insight).",
                  "Ideate: divergent brainstorming - quantity before quality, judgement suspended.",
                  "Prototype and test: cheap artefacts, user feedback, iterate - note the loop back.",
                  "SCAMPER: checklist-driven ideation on existing products - expand all seven letters.",
                  "Conclude: design thinking suits fuzzy problems; SCAMPER suits differentiation of known products.",
                ],
              },
              {
                q: "What is a prototype in design thinking?",
                marks: 2,
              },
              {
                q: "Expand SCAMPER with one product example for any three letters.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.3",
            title: "Business Model Canvas: the nine blocks",
            body: [
              "Alexander Osterwalder and Yves Pigneur gave startups a one-page shared language: the Business Model Canvas. Nine blocks cover any venture. Customer segments names for whom value is created - mass, niche, segmented or multi-sided. Value propositions states why customers choose you: the pains relieved and gains created, at what price point. Channels covers how you reach, sell, deliver and support - awareness through after-sales. Customer relationships spans personal assistance to self-service, communities and co-creation. Revenue streams lists what customers actually pay for: asset sale, subscription, licensing, advertising or usage fees.",
              "The left side is infrastructure. Key resources are the assets the model cannot run without - physical, intellectual, human and financial. Key activities are what the firm must do exceptionally well: production, problem solving or platform operation. Key partnerships names the alliances that make the model light - suppliers, distributors, joint ventures. Cost structure separates cost-driven from value-driven designs and fixed from variable costs. The reading order is right to left: understand the customer, then the offer, then what it takes to deliver it, then whether the money works - desirability, feasibility and viability in one pass.",
              "Apply the canvas to a campus e-rickshaw battery-swap venture and every block sharpens. Segments: daily-charging e-rickshaw drivers and small fleet owners. Value: a 60-second swap instead of an 8-hour charge, converting idle time into earning time. Channels: swap stations at rickshaw stands and a driver app. Revenue: per-swap fees plus monthly subscriptions. Key resources: batteries, stations and software. Activities: station operations and battery logistics. Partnerships: battery OEMs and municipalities. Costs: capex-heavy and cost-driven. The canvas's power is that it exposes the riskiest assumption - here, station utilization - in plain sight.",
            ],
            bullets: [
              "BMC (Osterwalder and Pigneur): nine blocks that describe any venture on a single page.",
              "Right side - customer-facing: segments, channels, relationships, revenue streams.",
              "Centre - the offer: the value proposition; pain relievers and gain creators.",
              "Left side - infrastructure: key resources, key activities, key partnerships.",
              "Bottom - money: revenue streams against the cost structure (fixed vs variable).",
              "Three tests: desirability (customers want it), feasibility (you can build it), viability (it makes money).",
            ],
            table: {
              caption: "The nine blocks with their core question and a battery-swap venture's answer.",
              headers: ["Block", "Core question", "Battery-swap answer"],
              rows: [
                ["Customer segments", "For whom are we creating value?", "Urban e-rickshaw drivers; small fleet owners"],
                ["Value propositions", "Why choose us over alternatives?", "60-second swap versus 8-hour charge"],
                ["Channels", "How do we reach and serve?", "Swap stations at rickshaw stands; driver app"],
                ["Customer relationships", "What relationship does each segment expect?", "Self-service app plus field support"],
                ["Revenue streams", "For what value do customers pay?", "Per-swap fee and monthly subscription"],
                ["Key resources", "Which assets are essential?", "Battery packs, stations, software platform"],
                ["Key activities", "What must we do well?", "Station operations, battery logistics"],
                ["Key partnerships", "Who are our partners and suppliers?", "Battery OEMs, municipalities, stand owners"],
                ["Cost structure", "Where does the money go?", "Capex-heavy: stations, batteries, rent"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "Reading the canvas in four slabs",
              caption: "Work right to left: the customer side, the offer, the infrastructure, then the money.",
              layers: [
                { label: "Customer-facing: segments, channels, relationships", note: "the right-hand side" },
                { label: "The offer: the value proposition", note: "the centre of the canvas" },
                { label: "Infrastructure: resources, activities, partnerships", note: "the left-hand side" },
                { label: "Money: revenue streams and cost structure", note: "the bottom line - literally" },
              ],
            },
            callout: {
              type: "tip",
              title: "Draw it from memory",
              body: "The nine-block question is near-guaranteed in some form. Practise drawing the canvas rectangle and placing all nine blocks correctly from memory, then filling it for one venture in under ten minutes. Placement errors (channels on the left, partners on the right) are the usual mark leaks.",
            },
            keyTerms: [
              { term: "Business model", definition: "The rationale of how an organization creates, delivers and captures value." },
              { term: "Value proposition", definition: "The bundle of products and services that relieves customer pains and creates gains, priced to be chosen over alternatives." },
              { term: "Multi-sided platform", definition: "A model serving two or more interdependent customer segments, e.g. a marketplace serving buyers and sellers." },
            ],
            examQuestions: [
              {
                q: "Explain the nine building blocks of the Business Model Canvas with a suitable example.",
                marks: 7,
                outline: [
                  "Introduce Osterwalder and Pigneur: the canvas as a one-page shared language for business models.",
                  "Customer segments: mass, niche, segmented and multi-sided platform types.",
                  "Value proposition: pain relievers and gain creators - why customers choose you.",
                  "Channels and customer relationships: awareness, evaluation, purchase, delivery, after-sales; personal to automated.",
                  "Revenue streams: asset sale, subscription, licensing, advertising and usage fees.",
                  "Key resources, key activities and key partnerships: the infrastructure side.",
                  "Cost structure; close by filling all nine blocks for one example such as a battery-swap network.",
                ],
              },
              {
                q: "What is a value proposition? Give one example.",
                marks: 2,
              },
              {
                q: "List any three revenue stream types with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Lean startup, MVP and build-measure-learn",
            body: [
              "Eric Ries's lean startup treats a startup as a portfolio of experiments. The unit of progress is not code written or features shipped but validated learning - a hypothesis about the business model confirmed or falsified by real customer behaviour. The engine is the build-measure-learn loop: state the riskiest assumption, build the smallest thing that tests it, measure with honest metrics, learn, and either persevere or pivot. The goal is to minimize the total time through the loop, because runway is measured in iterations, not months. Startup = search; company = execution, and the loop is the search instrument.",
              "The minimum viable product is the smallest version of the product that still delivers core value and generates learning - not a buggy draft. The landing-page MVP describes the offer and measures sign-ups before anything is built. The concierge MVP has humans deliver the service manually while the process is learned. The Wizard-of-Oz MVP looks automated while the team answers by hand. The piecemeal MVP assembles existing tools - forms, spreadsheets, WhatsApp - with zero code. The single-feature MVP ships only the core action. Zappos's founder photographed shoes in local stores and bought pairs only when orders arrived - willingness to pay validated before a rupee of inventory.",
              "After each loop comes the pivot-or-persevere meeting. Pivot types worth naming: zoom-in (one feature becomes the product), customer segment (build for the user who actually pays), platform (application becomes infrastructure), business architecture (B2C to B2B), value capture and engine of growth. Measurement discipline is innovation accounting: define actionable metrics - activation, retention, revenue per cohort - instead of vanity metrics such as page likes, which move while the business dies. For hardware founders, a crowdfunding campaign is a legitimate MVP: it validates price, demand and messaging before tooling is cut.",
            ],
            bullets: [
              "Lean startup (Ries): startups are experiments; the unit of progress is validated learning.",
              "Build-measure-learn loop: minimize total time around the loop - runway is measured in iterations.",
              "MVP: the smallest version that delivers core value and generates learning - not a low-quality draft.",
              "MVP types: landing page, concierge, Wizard of Oz, piecemeal, single feature.",
              "Pivot or persevere after each loop: zoom-in, customer segment, platform, architecture, value capture.",
              "Innovation accounting: actionable cohort metrics beat vanity metrics such as likes and downloads.",
            ],
            table: {
              caption: "MVP types with how each works and a known example.",
              headers: ["MVP type", "How it works", "Example"],
              rows: [
                ["Landing page", "Describe the offer; measure sign-ups with paid traffic", "Pre-launch waitlist page"],
                ["Concierge", "Humans deliver the full service manually", "Founder curates deliveries before any app exists"],
                ["Wizard of Oz", "Front end looks automated; humans run the back end", "Chatbot answered by the founding team"],
                ["Piecemeal", "Assemble existing tools without writing code", "Forms plus spreadsheets plus WhatsApp"],
                ["Single feature", "Ship only the core value action", "Photo upload only, in the first release"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Build-measure-learn: the lean loop",
              caption: "The goal is to minimize total time through the loop, not to build features - the last arrow returns to Build.",
              steps: [
                { label: "Build the smallest MVP", note: "the smallest thing that teaches" },
                { label: "Measure with actionable metrics", note: "cohort activation, retention" },
                { label: "Learn: hypothesis validated or falsified", note: "innovation accounting" },
                { label: "Pivot or persevere", note: "loop back to build" },
              ],
            },
            callout: {
              type: "warning",
              title: "Vanity metrics",
              body: "Downloads, likes and registered users can rise while the business dies - they flatter the founder but predict nothing. Lean startup questions are marked on this distinction: name the actionable metric (activation, retention, revenue per cohort) that would move only if the business were genuinely working.",
            },
            keyTerms: [
              { term: "MVP", definition: "The minimum viable product - the smallest version of a product that delivers core value and generates validated learning." },
              { term: "Validated learning", definition: "Progress measured by hypotheses about the business model confirmed or falsified through real experiments." },
              { term: "Pivot", definition: "A structured change to one core business-model hypothesis while preserving everything else that has been learned." },
            ],
            examQuestions: [
              {
                q: "Explain the lean startup methodology: the build-measure-learn loop, the MVP and pivot decisions.",
                marks: 7,
                outline: [
                  "Eric Ries: a startup is an experiment; the unit of progress is validated learning.",
                  "Build-measure-learn loop: state the riskiest assumption and minimize total time around the loop.",
                  "Define MVP: the smallest version that delivers core value and generates learning.",
                  "MVP types: landing page, concierge, Wizard of Oz, piecemeal, single feature.",
                  "Measure with actionable metrics and cohort analysis, not vanity metrics.",
                  "Pivot or persevere; name pivot types: zoom-in, customer segment, platform, business architecture.",
                  "Close with the Zappos example: willingness to pay validated before any inventory was held.",
                ],
              },
              {
                q: "Define a minimum viable product.",
                marks: 2,
              },
              {
                q: "Differentiate vanity metrics from actionable metrics with one example of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Writing the business plan",
            body: [
              "A business plan is the written document that describes the venture's goals, market, operations and financials, and how the goals will be achieved. It serves four distinct purposes: a roadmap that forces rigorous founder thinking; a communication artefact for investors and lenders; a yardstick against which actual performance is controlled; and a requirement for loans, grants and incubation. For a startup the plan is a living document - a rolling twelve-month operational view in front of three-to-five-year projections - rather than the static five-year forecasts of an established firm.",
              "The standard structure has ten parts. The executive summary - written last, read first - compresses problem, solution, market, traction, team and ask into two pages. The company description states vision, mission, SMART objectives and legal form. Market analysis presents TAM-SAM-SOM, personas, a competition grid and SWOT. Organization and management shows the org chart, founder bios and hiring plan. The product line covers features, development stage, IP status and roadmap. Marketing and sales plan summarizes STP, pricing, channels and the sales process. The operations plan addresses make-or-buy, capacity, suppliers and quality systems. Financial projections follow: P&L, cash flow, balance sheet, break-even and assumptions. The funding request states amount, instrument and use of funds; an appendix carries evidence.",
              "Quality separates funded plans from filed ones. Assumptions must be bottom-up - a plant that counts realistic machine-hours, not a percentage of a billion-rupee market. The pitch deck obeys Guy Kawasaki's 10/20/30 rule: ten slides, twenty minutes, thirty-point font. Rejections cluster around three causes: no clear problem, an unbalanced team, or hockey-stick financials with no engine behind them. Banks additionally want collateral and a repayment story; VCs want scalability and an exit. Write for the reader you actually have, and state risks and mitigations - a plan that admits no risk reads as a plan that has thought of none.",
            ],
            bullets: [
              "Purposes: founder roadmap, investor and lender communication, control yardstick, scheme requirement.",
              "Executive summary: written last, read first - problem, solution, market, traction, team, ask in two pages.",
              "Core chapters: company description, market analysis, organization, product line, marketing, operations.",
              "Financials: P&L, cash flow, balance sheet, break-even - with stated, bottom-up assumptions.",
              "Funding request: amount, instrument, use of funds, milestones the money buys.",
              "Pitch deck discipline: 10/20/30 - ten slides, twenty minutes, thirty-point font.",
            ],
            codeExample: {
              language: "text",
              caption: "Business plan skeleton - the order an RGPV examiner expects.",
              code: `BUSINESS PLAN - CIRCUITSENSE AUTOMATION PVT LTD

1. Executive summary (written last, read first)
   Problem, solution, market, traction, team, ask - two pages maximum.

2. Company description
   Vision, mission, SMART objectives, legal form, location.

3. Market analysis
   TAM / SAM / SOM, customer persona, competition grid, SWOT.

4. Organization and management
   Org chart, founder bios, advisors, hiring plan, ESOP pool.

5. Product and service line
   Features, stage of development, IP status, roadmap.

6. Marketing and sales plan
   STP summary, pricing, channels, promotion mix, sales process.

7. Operations plan
   Make-or-buy, capacity, suppliers, quality system, milestones.

8. Financial projections
   P&L, cash flow, balance sheet, break-even, key assumptions.

9. Funding request
   Amount, instrument, use of funds, milestones the money buys.

Appendix: drawings, patent filings, letters of intent, team resumes.`,
            },
            diagram: {
              kind: "pyramid",
              title: "What a reader of the business plan reads first",
              caption: "Investors start at the top and dig down only when a claim must be verified - so the top tiers must stand alone.",
              tiers: [
                { label: "Executive summary", note: "2 pages - problem, solution, ask" },
                { label: "Market and traction", note: "why now, why you" },
                { label: "Team", note: "who executes" },
                { label: "Operations and financials", note: "how it works, what it earns" },
                { label: "Appendix", note: "patents, letters, data" },
              ],
            },
            callout: {
              type: "tip",
              title: "Write the summary last",
              body: "The executive summary is the only section most readers finish - and it can only be written after every other chapter exists. Draft it last, cut every adjective that is not a number, and make sure the ask is stated on page one.",
            },
            keyTerms: [
              { term: "Business plan", definition: "A written document describing the venture's goals, market, operations and financial projections, and how the goals will be achieved." },
              { term: "Executive summary", definition: "The two-page condensation of the whole plan - problem, solution, market, traction, team and ask - written last but read first." },
              { term: "Pitch deck", definition: "The slide presentation of the business plan, disciplined by the 10/20/30 rule - ten slides, twenty minutes, thirty-point font." },
            ],
            examQuestions: [
              {
                q: "What is a business plan? Describe its structure section by section and state its purposes.",
                marks: 7,
                outline: [
                  "Define the business plan: a written document describing the venture, its market and its financials.",
                  "Purposes: roadmap for founders, communication to investors and banks, control yardstick, scheme requirement.",
                  "Executive summary: problem, solution, market, traction, team and ask - written last.",
                  "Market analysis and organization: TAM/SAM/SOM, competition grid, SWOT, org chart, founder bios.",
                  "Product, marketing and operations chapters: features, IP, STP, capacity, quality system.",
                  "Financial projections: P&L, cash flow, balance sheet, break-even, stated assumptions.",
                  "Funding request and appendix; close with the 10/20/30 pitch-deck discipline.",
                ],
              },
              {
                q: "Why is the executive summary written last but read first?",
                marks: 2,
              },
              {
                q: "State any three purposes of writing a business plan.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Funding, Legal and IP",
      summary:
        "The funding ladder from bootstrapping to IPO, the arithmetic of valuation and the anatomy of term sheets, the choice of legal form, the registration and compliance stack, and the intellectual property that makes a young venture defensible.",
      chapter: {
        number: "03",
        title: "Funding, Legal and IP",
        intro:
          "Unit III is money and law: the funding ladder from bootstrapping to IPO, the arithmetic of valuation and the anatomy of term sheets, the choice of legal form, the registration and compliance stack a founder must clear, and the intellectual property - patents, trademarks, copyright and trade secrets - that makes a young venture defensible.",
        inOneBreath:
          "Funding runs bootstrapping, friends and family, grants, angels, venture capital and IPO, trading dilution for speed; pre-money plus investment equals post-money and the investor stake is investment over post-money; term sheets carry liquidation preferences, anti-dilution, board seats and founder vesting; the legal menu spans proprietorship, partnership, LLP and private limited - only the last takes VC money; SPICe+ incorporation chains into PAN, GST, Udyam and DPIIT recognition; and patents - requiring novelty, inventive step and industrial applicability, running 20 years - protect inventions while trademarks, copyright and trade secrets protect the rest.",
        sections: [
          {
            number: "3.1",
            title: "Sources of funding: bootstrapping to venture capital",
            body: [
              "Money arrives in a ladder, and each rung fits a stage. Bootstrapping funds the venture from founder savings, early revenue and founder credit; it preserves full ownership but caps speed. Friends and family provide small cheques on trust. Grants and competitions - student awards, AIM incubation grants, government schemes - are non-dilutive but small. Angel investors write the first institutional-feeling cheques, typically Rs 25 lakh to Rs 5 crore, often their own money, adding mentoring and networks, usually via SAFE or CCPS instruments. Venture capital manages pooled funds, enters at Series A onwards, takes board seats and 20-25 percent per round.",
              "Two more rungs complete the ladder. Crowdfunding comes in three flavours: reward crowdfunding (pre-selling product on Kickstarter-style platforms), equity crowdfunding and debt or peer-to-peer lending - the latter two regulated tightly in India. Bank debt includes Mudra loans for small founders (Shishu, Kishore, Tarun tiers) and CGTMSE-guaranteed collateral-free credit for MSMEs; working-capital and term loans suit asset-heavy or already-profitable ventures. At the top, late-stage private rounds and eventually an IPO or acquisition provide exit. The equity-versus-debt choice is fundamental: equity dilutes ownership but demands no repayment - right for pre-revenue search; debt keeps ownership but demands collateral and cash flow - right for asset-heavy execution.",
              "Dilution arithmetic makes the ladder concrete. Raise Rs 1 crore at Rs 4 crore pre-money and the investor takes 20 percent; two more similar rounds and founders fall below half. Equity is thus the most expensive capital a company ever sells, and the cheapest test of whether it should be sold is stage: never raise growth money before the growth engine works. Hardware founders should also note venture debt - loans against purchase orders or assets - which funds working capital without the dilution of another equity round. In exams, present the ladder diagram plus a table of source, stage, ticket size and what founders give up.",
            ],
            bullets: [
              "Funding ladder: bootstrapping -> friends and family -> grants -> angels -> VC -> IPO or exit.",
              "Angels: Rs 25 lakh-5 crore of personal money plus mentoring; SAFE or CCPS instruments.",
              "Venture capital: pooled funds, Series A onwards, board seat, 20-25 percent dilution per round.",
              "Crowdfunding: reward (pre-sell product), equity and debt/P2P - each differently regulated.",
              "Bank debt: Mudra tiers and CGTMSE collateral-free guarantees; suits asset-heavy, cash-flow-positive firms.",
              "Equity dilutes but never requires repayment; debt preserves ownership but demands collateral.",
            ],
            table: {
              caption: "Funding sources by stage: ticket size, instrument and what founders give up.",
              headers: ["Source", "Stage", "Typical ticket", "Instrument", "Founders give up"],
              rows: [
                ["Bootstrapping", "Idea to MVP", "Founder savings", "Own money", "Nothing but speed"],
                ["Friends and family", "Idea to validation", "Rs 5-25 lakh", "Loan or SAFE", "Small equity or a debt"],
                ["Grants and competitions", "Validation", "Rs 1-50 lakh", "Non-dilutive", "Nothing; reporting duty"],
                ["Angel investors", "Seed", "Rs 25 lakh-5 crore", "SAFE / CCPS", "10-25 percent equity"],
                ["Venture capital", "Series A onward", "Rs 10-100+ crore", "CCPS, board seat", "20-25 percent per round"],
                ["Crowdfunding", "Product stage", "Project-dependent", "Reward or equity", "Product cost or equity"],
                ["Bank and Mudra loans", "Any stage with cash flow", "Up to Rs 10 lakh (Mudra)", "Debt, CGTMSE-backed", "No equity; repayment duty"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The funding ladder",
              caption: "Each rung matches a stage; climbing too early costs equity that can never be reclaimed cheaply.",
              tiers: [
                { label: "IPO / late-stage rounds", note: "public markets, mezzanine" },
                { label: "Series B+ venture capital", note: "scaling capital" },
                { label: "Series A / seed VC", note: "the repeatable engine" },
                { label: "Angel investors", note: "Rs 25 lakh-5 crore cheques" },
                { label: "Bootstrapping, F&F, grants", note: "idea and validation stage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Ladder + table format",
              body: "Finance-source questions score as a stage-matched ladder: draw the pyramid, then a table of source, stage, ticket size and instrument. The one line examiners look for: equity is right for pre-revenue search, debt is right for asset-heavy execution.",
            },
            keyTerms: [
              { term: "Bootstrapping", definition: "Funding the venture from founder savings, early revenue and founder credit, preserving full ownership." },
              { term: "Angel investor", definition: "A high-net-worth individual investing personal money in an early-stage venture, typically adding mentoring and networks." },
              { term: "Dilution", definition: "The reduction in existing shareholders' ownership percentage caused by issuing new shares to investors." },
            ],
            examQuestions: [
              {
                q: "Discuss the sources of finance available to an Indian startup from inception to scale, with typical ticket sizes.",
                marks: 7,
                outline: [
                  "Frame the answer by stage: the instrument must match the stage and asset type.",
                  "Bootstrapping and friends and family: retain equity, limited runway.",
                  "Grants, competitions and government schemes: non-dilutive but small.",
                  "Angel investors: Rs 25 lakh-5 crore, mentoring, SAFE or CCPS instruments.",
                  "Venture capital: Series A onward, board seats, 20-25 percent dilution per round.",
                  "Crowdfunding (reward, equity, debt) and bank debt: Mudra tiers, CGTMSE collateral-free guarantees.",
                  "Equity vs debt trade-off; IPO or acquisition as the exit end of the ladder.",
                ],
              },
              {
                q: "Name the three types of crowdfunding with one example each.",
                marks: 2,
              },
              {
                q: "Differentiate equity financing from debt financing for a startup.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Valuation and term sheets",
            body: [
              "Valuation is arithmetic before it is negotiation. Post-money valuation equals pre-money valuation plus the investment; the investor's stake equals investment divided by post-money. A venture raising Rs 1 crore at Rs 4 crore pre-money is worth Rs 5 crore after the round, and the new investor holds 20 percent. Early-stage ventures have no cash flows to discount, so methods lean on judgement: the Berkus method assigns capped value to idea, prototype, team, relationships and early sales; the scorecard method compares the deal to average local angel deals; comparables and DCF arrive once financial history exists.",
              "The venture capital method works backward from the exit. Suppose the expected exit is Rs 100 crore in year five, the fund needs a 10x return, and it wants to hold 20 percent at exit. The value of that stake at exit is Rs 20 crore; discounting by the 10x requirement gives a post-money of Rs 100 crore x 20 percent / 10 = Rs 2 crore today. An investor putting in Rs 40 lakh for that 20 percent has priced the deal consistently with the exit story. Founders should run this arithmetic before any meeting: the gap between founder expectation and VC-method value is exactly the negotiation.",
              "The term sheet is a mostly non-binding letter of intent - only exclusivity (the no-shop clause), confidentiality and cost reimbursement bind - but its clauses decide who really controls the company. Valuation and instrument (usually CCPS in India) headline it; the employee stock option pool is typically created before the money arrives, so founders absorb it. Liquidation preference determines who gets paid first on a sale: 1x non-participating returns the investment or the stake, whichever is better; participating preferred takes the money and then shares the remainder. Anti-dilution clauses protect investors in down rounds. Board composition, protective provisions, founder vesting (typically four years with a one-year cliff), and drag-along and tag-along rights complete the set.",
            ],
            bullets: [
              "Post-money = pre-money + investment; investor stake = investment / post-money.",
              "Berkus and scorecard methods price pre-revenue ventures; DCF and comparables arrive later.",
              "VC method: post-money = exit value x final ownership / required return.",
              "Term sheets are mostly non-binding - exclusivity and confidentiality clauses bind.",
              "Watch: liquidation preference, anti-dilution, ESOP pool timing, board seats, founder vesting.",
              "A high valuation with participating preferred can be worse than a fair one with clean terms.",
            ],
            codeExample: {
              language: "python",
              caption: "Pre-money, post-money and the VC method as a small script.",
              code: `def vc_round(pre_money, investment):
    """Return post-money valuation and the investor's stake."""
    post_money = pre_money + investment
    stake = investment / post_money
    return post_money, stake

def vc_method(exit_value, target_return, final_ownership):
    """Work backwards from an expected exit to today's post-money."""
    return (exit_value * final_ownership) / target_return

# Round 1: Rs 4 crore pre-money, Rs 1 crore invested
post, stake = vc_round(pre_money=4e7, investment=1e7)
print("post-money Rs", round(post / 1e7), "cr, stake", round(stake * 100), "%")

# VC method: Rs 100 cr expected exit, 10x required return, 20 pct at exit
today_post = vc_method(exit_value=100e7, target_return=10, final_ownership=0.20)
print("implied post-money today Rs", round(today_post / 1e7), "cr")`,
            },
            diagram: {
              kind: "flow",
              title: "From term sheet to money in the bank",
              caption: "Signing is only the start - diligence and definitive documents stand between handshake and bank credit.",
              steps: [
                { label: "Term sheet signed", note: "mostly non-binding" },
                { label: "Legal and financial due diligence", note: "IP, contracts, accounts" },
                { label: "Definitive agreements: SSA and SHA", note: "now the terms bind" },
                { label: "Board and regulatory approvals", note: "including filings if money is foreign" },
                { label: "Funds transferred, allotment filed", note: "money in the account" },
              ],
            },
            callout: {
              type: "exam",
              title: "The worked numeric",
              body: "Valuation questions are marked on the arithmetic pattern: write post-money = pre-money + investment, stake = investment / post-money, then substitute numbers (Rs 4 crore pre + Rs 1 crore = Rs 5 crore post; 20 percent). Follow with any five term sheet clauses - the numeric and the clauses are marked separately.",
            },
            keyTerms: [
              { term: "Pre-money valuation", definition: "The agreed value of the company immediately before a new investment round is added." },
              { term: "Liquidation preference", definition: "A term sheet clause deciding which investors get paid first, and how much, if the company is sold or liquidated." },
              { term: "Vesting", definition: "The schedule over which founders or employees earn their equity - typically four years with a one-year cliff." },
            ],
            examQuestions: [
              {
                q: "Explain pre-money and post-money valuation with a worked example, and describe any five clauses of a term sheet.",
                marks: 7,
                outline: [
                  "State the identities: post-money = pre-money + investment; stake = investment / post-money.",
                  "Worked example: Rs 4 crore pre-money plus Rs 1 crore gives Rs 5 crore post-money; investor takes 20 percent.",
                  "Early-stage methods: Berkus, scorecard and the VC method working backward from exit.",
                  "Term sheet: mostly non-binding letter of intent; exclusivity and confidentiality bind.",
                  "Valuation and instrument (CCPS); ESOP pool created pre-money dilutes founders.",
                  "Liquidation preference: 1x non-participating versus participating preferred.",
                  "Anti-dilution protection, board composition and founder vesting (4 years, 1-year cliff).",
                ],
              },
              {
                q: "What does a 1x non-participating liquidation preference mean?",
                marks: 2,
              },
              {
                q: "Explain the Berkus method of early-stage valuation.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.3",
            title: "Legal structures: proprietorship, LLP and private limited",
            body: [
              "The menu of legal forms runs from the simplest to the most investor-ready. A sole proprietorship is one owner with unlimited personal liability, no separate legal existence and minimal compliance. A partnership under the Partnership Act 1932 joins two to twenty partners who bear joint and several liability, governed by their partnership deed. A limited liability partnership under the LLP Act 2008 is the hybrid: a separate legal entity whose partners' liability is capped at their contribution, with light compliance - audit is triggered only above Rs 40 lakh turnover or Rs 25 lakh contribution. A private limited company under the Companies Act 2013 offers shares, limited liability and full funding readiness at the price of heavier compliance.",
              "Selection is a five-question test. How much personal liability will the business create? What incorporation and annual compliance cost can it carry - a company needs statutory audit and ROC filings, an LLP often does not? What credibility do customers and banks demand? What are the tax consequences - companies pay flat corporate rates and can claim the startup tax holiday, while proprietorship income is taxed in the founder's slab? And critically, does the roadmap include equity funding? Venture capital and most angel funds can only buy shares in a company; a SAFE converts into shares. VCs therefore require a private limited - the single most examined fact in this section.",
              "Incorporation runs through the MCA's SPICe+ form: name reservation, DIN and DSC for directors, MOA and AOA, with PAN and TAN issued alongside the certificate of incorporation; a current account follows. Founder hygiene matters as much as the form: a founders' agreement covering equity split, vesting, roles and exit; an ESOP pool created early; and IP assignment agreements so that everything employees, freelancers and college labs create belongs to the company - student founders must check their institute's IP policy. Conversion between forms is possible but costly, so pick for the venture you are building, not the venture you have today.",
            ],
            bullets: [
              "Forms: sole proprietorship, partnership (1932 Act), LLP (2008 Act), private limited (2013 Act), one-person company.",
              "Liability: unlimited for proprietorship and partnership; limited for LLP and company.",
              "LLP audit triggers: turnover above Rs 40 lakh or contribution above Rs 25 lakh.",
              "Private limited: minimum two directors and two shareholders, statutory audit, ROC filings.",
              "VCs invest only in private limited companies - CCPS and share allotments require it.",
              "Founders' agreement, ESOP pool and IP assignment are hygiene from day one.",
            ],
            table: {
              caption: "Forms of business organization compared on liability, compliance, funding fit and suitability.",
              headers: ["Form", "Liability", "Compliance load", "Funding fit", "Best for"],
              rows: [
                ["Sole proprietorship", "Unlimited, personal", "Minimal", "No equity possible", "Solo services, low risk"],
                ["Partnership firm", "Joint and unlimited", "Low", "Loans at best", "Trusted small teams"],
                ["LLP", "Limited to contribution", "Low; audit rarely", "Loans, grants", "Professional services firms"],
                ["Private limited", "Limited by shares", "High: audit, ROC filings", "Angel and VC ready", "Product startups"],
                ["One-person company", "Limited by shares", "Medium", "Limited", "Single founder testing an idea"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Choosing the legal form on day one",
              caption: "The choice is a function of founder priorities - and one path is simply an unpriced risk.",
              start: "Founder priorities at day 1",
              branches: [
                { label: "Solo, testing services", outcome: "Proprietorship or OPC - fast and cheap", good: true },
                { label: "Team of partners, services", outcome: "LLP - limited liability, light compliance", good: true },
                { label: "Equity funding planned", outcome: "Private limited - investor ready", good: true },
                { label: "No entity at all", outcome: "Personal liability lands on the founders", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "IP ownership is the silent deal-killer",
              body: "If code, drawings or patents were created by founders as employees, students or freelancers without assignment agreements, the company does not own its own product - and due diligence will find out. Paper the IP to the entity before the first investor meeting.",
            },
            keyTerms: [
              { term: "Limited liability", definition: "The cap on an owner's financial loss at the amount invested or contributed, protecting personal assets." },
              { term: "LLP", definition: "A limited liability partnership - a hybrid entity with a separate legal existence and partner liability capped at contribution." },
              { term: "Founders' agreement", definition: "The contract among founders covering equity split, vesting, roles, decision rights and exit terms." },
            ],
            examQuestions: [
              {
                q: "Compare the forms of business organization available to founders. Which form suits a startup seeking venture capital, and why?",
                marks: 7,
                outline: [
                  "Set out the menu: proprietorship, partnership, LLP, private limited and one-person company.",
                  "Liability: unlimited for proprietorship and partnership; limited for LLP and company.",
                  "Compliance and cost: LLP light, company heavy - statutory audit and ROC filings.",
                  "Continuity and credibility: separate legal entity outlives founders; banks and customers prefer it.",
                  "Funding: only a company can issue shares and CCPS - institutional investors require private limited.",
                  "Tax and scheme considerations: corporate rates and the 80-IAC holiday versus personal slab income.",
                  "Conclude: private limited for equity-funded product startups; LLP for professional services.",
                ],
              },
              {
                q: "What is a one-person company?",
                marks: 2,
              },
              {
                q: "Why do venture capital funds invest only in private limited companies?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Registrations, GST and MSME compliance",
            body: [
              "After incorporation via SPICe+ - which now delivers CIN, PAN and TAN together - a stack of registrations follows. GST registration is mandatory once turnover crosses the thresholds (Rs 40 lakh for goods, Rs 20 lakh for services, lower for special-category states; thresholds are revised periodically by the GST Council), and immediately for inter-state supply and e-commerce sellers. Intra-state sales attract CGST plus SGST, inter-state sales attract IGST, and the input tax credit chain is why B2B customers insist on a registered vendor. Small taxpayers may choose the composition scheme for lighter compliance. Shops and Establishments registration with the state labour department is due with the first employee; sector licences - BIS, FSSAI, IEC for imports - follow the business.",
              "Udyam registration, the MSME ministry's free online identity, is the highest-value twenty minutes a founder can spend. The 2020 classification defines micro, small and medium enterprises by investment and turnover (micro up to Rs 1 crore and Rs 5 crore; small up to Rs 10 crore and Rs 50 crore; medium up to Rs 50 crore and Rs 250 crore - limits since enhanced and periodically revised). Benefits: priority-sector lending, collateral-free credit under CGTMSE, subsidies for technology upgradation, a reserved share in government procurement, and the sharpest tool - delayed-payment protection under the MSMED Act, under which a buyer must settle a registered supplier's invoice within 45 days or pay penal interest.",
              "Udyam is scale-based; DPIIT Startup India recognition is innovation-based - a venture can hold both. The annual compliance calendar for a private limited company then keeps discipline: statutory audit is mandatory; AOC-4 financials within 30 days of the AGM and MGT-7 annual return within 60; DIR-3 KYC for directors; quarterly advance tax and TDS returns; monthly or quarterly GST returns; a minimum of four board meetings. Penalties accrue per day of delay, and dirty compliance is the cheapest reason for an investor to walk away. In exams, present the registration pipeline, the Udyam benefits list, and the one-line contrast with DPIIT recognition.",
            ],
            bullets: [
              "SPICe+ incorporation issues CIN, PAN and TAN together; a current account follows.",
              "GST thresholds: Rs 40 lakh goods, Rs 20 lakh services (special states lower); immediate for inter-state supply.",
              "CGST + SGST intra-state, IGST inter-state; the input tax credit drives B2B registration pressure.",
              "Udyam (MSME): free, online, scale-based; unlocks CGTMSE collateral-free credit and procurement benefits.",
              "MSMED delayed-payment protection: buyers must pay registered suppliers within 45 days or owe penal interest.",
              "Annual stack for a Pvt Ltd: audit, AOC-4, MGT-7, DIR-3 KYC, advance tax, TDS, GST returns, board meetings.",
            ],
            table: {
              caption: "The registration stack: what, who grants it, when it is needed and the key benefit.",
              headers: ["Registration", "Authority", "When needed", "Key benefit"],
              rows: [
                ["Incorporation (SPICe+)", "MCA / Registrar of Companies", "Before any business activity", "Legal existence, limited liability"],
                ["PAN and TAN", "Income-tax department", "With incorporation", "Bank account, tax filings"],
                ["GST registration", "GSTN", "Above thresholds; inter-state supply", "Input tax credit, B2B credibility"],
                ["Udyam (MSME)", "MSME ministry", "Any micro, small or medium enterprise", "45-day payment shield, priority lending"],
                ["DPIIT Startup India", "DPIIT", "Innovative startup under 10 years old", "Tax holiday, patent fee rebate"],
                ["Trademark", "CGPDTM", "At brand launch", "Exclusive nationwide brand right"],
                ["Shops and Establishments", "State labour department", "With the first employee", "Legal employment base"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The registration pipeline for a new private limited startup",
              caption: "Each stage feeds the next; skipping GST or Udyam forfeits benefits worth real money.",
              stages: [
                { label: "Incorporate via SPICe+", note: "CIN, MOA, AOA" },
                { label: "PAN, TAN, bank account", note: "arrive with incorporation" },
                { label: "GST registration", note: "ITC and B2B billing" },
                { label: "Udyam (MSME)", note: "45-day payment shield" },
                { label: "DPIIT recognition", note: "tax holiday, fee rebates" },
                { label: "Sector licences", note: "BIS, FSSAI, IEC as needed" },
              ],
            },
            callout: {
              type: "tip",
              title: "Twenty minutes, real money",
              body: "Udyam registration is free, online and self-declared. The 45-day delayed-payment protection alone justifies it for any supplier to large buyers - a registered micro enterprise can claim penal interest that unregistered vendors cannot.",
            },
            keyTerms: [
              { term: "GST", definition: "The goods and services tax - a unified indirect tax with CGST, SGST and IGST components and a chain of input tax credits." },
              { term: "Udyam registration", definition: "The MSME ministry's free online registration giving micro, small and medium enterprises access to credit and payment protections." },
              { term: "Input tax credit", definition: "The credit a registered business claims for tax already paid on inputs, set off against its own output tax liability." },
            ],
            examQuestions: [
              {
                q: "Explain MSME/Udyam registration: classification, procedure and benefits. How does it differ from DPIIT startup recognition?",
                marks: 7,
                outline: [
                  "Udyam: free online registration under the MSME ministry, self-declared, Aadhaar-linked.",
                  "Classification (2020 basis): micro, small and medium by investment and turnover caps.",
                  "Benefit: priority-sector lending and CGTMSE collateral-free credit.",
                  "Benefit: delayed-payment protection under the MSMED Act - the 45-day rule with penal interest.",
                  "Benefit: subsidies for technology upgradation and reserved share in government procurement.",
                  "DPIIT recognition: separate, innovation-based - tax holiday under 80-IAC, patent fee rebate.",
                  "Contrast: Udyam is scale-based; Startup India is innovation-based; a venture can hold both.",
                ],
              },
              {
                q: "State the GST registration thresholds for goods and services.",
                marks: 2,
              },
              {
                q: "What protection does the MSMED Act give a small supplier against delayed payments?",
                marks: 3,
              },
            ],
          },
          {
            number: "3.5",
            title: "Intellectual property: patents, trademarks, copyright and trade secrets",
            body: [
              "For an early venture, intellectual property is often the only defensible asset. A patent under the Patents Act 1970 (as amended in 2005) protects an invention - a product or process - for 20 years from filing, in exchange for full disclosure. Patentability demands three conditions: novelty, meaning the invention has not been disclosed publicly anywhere before the filing date - India applies absolute novelty; inventive step, meaning it would not be obvious to a person skilled in the art; and industrial applicability. Section 3(k) excludes mathematical methods, business methods and computer programs per se - software patents in India must show a technical effect tied to hardware.",
              "The procedure rewards preparation. A provisional specification can be filed to secure a priority date while development continues; the complete specification must follow within twelve months. The application is published at eighteen months and examined only on request, after which objections must be answered; pre-grant opposition is possible, and renewal fees keep a granted patent alive. Trademarks under the Trade Marks Act 1999 protect brand names, logos and even sounds for ten years, renewable indefinitely; registration under the relevant Nice classes follows examination and a journal opposition period - use TM before registration and R after. Copyright under the Copyright Act 1957 arises automatically in original expression such as code, manuals and videos, and registration is merely strong evidence; protection runs for the author's life plus sixty years. Industrial designs (Designs Act 2000) cover shape and surface appeal for ten plus five years. Trade secrets need no registration at all: NDAs, access control and non-compete covenants protect formulas and processes for as long as they stay secret.",
              "Strategy beats paperwork. File the provisional patent before any pitch, publication or demo video - public disclosure destroys novelty, and the grace period is narrow. Register the trademark early and in the right classes - goods and services classes differ. Use Startup India's IP benefits: an 80 percent fee rebate and fast-tracked examination for recognized startups, with free facilitators available. Run a freedom-to-operate search before committing tooling money, and paper every assignment so employee and freelancer work belongs to the company. Investors run IP due diligence; a startup that owns its defensible assets commands a very different term sheet.",
            ],
            bullets: [
              "Patent: 20 years for products and processes; requires novelty, inventive step, industrial applicability.",
              "Absolute novelty in India - public disclosure before filing (even a demo video) destroys patentability.",
              "Provisional specification secures the priority date; complete specification within 12 months.",
              "Trademark: 10 years, renewable indefinitely; TM before registration, R after.",
              "Copyright: automatic on creation, life plus 60 years; registration is evidence, not a condition.",
              "Trade secrets: protected by NDAs and access control, for as long as they remain secret.",
            ],
            table: {
              caption: "The IP family: what each right protects, its law, term and how it is obtained.",
              headers: ["Right", "Protects", "Governing law", "Term", "How obtained"],
              rows: [
                ["Patent", "Inventions: products and processes", "Patents Act 1970", "20 years", "Filing, examination, grant"],
                ["Trademark", "Brand names, logos, sounds", "Trade Marks Act 1999", "10 years, renewable", "Registration after opposition period"],
                ["Copyright", "Original expression: code, content", "Copyright Act 1957", "Life plus 60 years", "Automatic; registration is evidence"],
                ["Industrial design", "Shape and surface appeal", "Designs Act 2000", "10 plus 5 years", "Registration"],
                ["Trade secret", "Confidential know-how", "Contract law", "While secret", "NDAs and access control"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Which IP right protects your creation?",
              caption: "Match the creation to the right - and remember that disclosure can destroy the strongest one.",
              start: "The team created something valuable",
              branches: [
                { label: "Technical invention", outcome: "File a provisional patent before any disclosure", good: true },
                { label: "Brand name and logo", outcome: "Register the trademark in relevant classes", good: true },
                { label: "Code, content, design", outcome: "Copyright arises automatically - register as evidence", good: true },
                { label: "Pitched or published it first", outcome: "Novelty destroyed - patent refused", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Disclosure destroys novelty",
              body: "The costliest IP mistake in student startups: a demo video, conference paper or detailed pitch deck published before filing. India's novelty standard is absolute - file the provisional specification first, present later. Quote this line in the exam; it is a favourite discriminator.",
            },
            keyTerms: [
              { term: "Patent", definition: "An exclusive right granted for an invention - a product or process - for 20 years, in exchange for public disclosure." },
              { term: "Trademark", definition: "A registrable sign - name, logo, shape or sound - distinguishing one trader's goods from another's, valid ten years and renewable." },
              { term: "Trade secret", definition: "Confidential business or technical information protected, without registration, for as long as secrecy and reasonable safeguards are maintained." },
            ],
            examQuestions: [
              {
                q: "What are the conditions of patentability in India? Outline the procedure for obtaining a patent.",
                marks: 7,
                outline: [
                  "Patents Act 1970 (amended 2005): protects products and processes for 20 years from filing.",
                  "Novelty: not disclosed publicly anywhere before the filing date - absolute standard.",
                  "Inventive step: non-obvious to a person skilled in the art; industrial applicability required.",
                  "Exclusions under section 3(k): mathematical methods, business methods, software per se.",
                  "File a provisional specification to secure the priority date; complete within 12 months.",
                  "Publication at 18 months; examination on request; answer objections; pre-grant opposition possible.",
                  "Grant, renewal fees, and the strategic warning - public disclosure before filing destroys novelty.",
                ],
              },
              {
                q: "How is a trade secret different from a patent?",
                marks: 2,
              },
              {
                q: "Differentiate copyright from trademark with one example each.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Management Concepts",
      summary:
        "The manager's toolkit the venture eventually needs: the planning-organizing-leading-controlling cycle, organizational structures, leadership styles and the managerial grid, motivation from Maslow to Herzberg, and the team and decision models that keep groups effective.",
      chapter: {
        number: "04",
        title: "Management Concepts",
        intro:
          "Unit IV builds the manager's toolkit that Unit I said the venture eventually needs: the planning-organizing-leading-controlling cycle, the structures that organize growing teams, the leadership styles and the managerial grid, the motivation theories that explain behaviour, and the team-development and decision-making models that keep groups effective.",
        inOneBreath:
          "Management plans, organizes, leads and controls in a continuous cycle; structures range from functional and divisional to matrix; leadership runs from autocratic through democratic to laissez-faire, sits on Blake and Mouton's 9x9 grid of concern for production and people, and must match follower readiness; Maslow stacks physiological, safety, belonging, esteem and self-actualization needs while Herzberg splits hygiene factors from motivators; and teams advance through Tuckman's forming, storming, norming, performing and adjourning while managers fight groupthink and satisfice under bounded rationality.",
        sections: [
          {
            number: "4.1",
            title: "Functions of management: planning, organizing, leading, controlling",
            body: [
              "Koontz defined management as the art of getting things done through and with people in formally organized groups; Drucker sharpened the target with efficiency - doing things right - versus effectiveness - doing the right things. The classical framework assigns four functions. Planning decides in advance: vision and mission, SMART objectives, strategies and budgets; plans are strategic, tactical or operational, and standing (policies, procedures) or single-use (programmes, budgets). Organizing builds the structure: departmentalization, allocation of authority and responsibility, delegation and spans of control. Leading (directing) energizes the structure - supervision, motivation, communication and leadership. Controlling closes the loop: set standards, measure performance, compare, act on deviations - feedforward before, concurrent during and feedback after.",
              "The functions sit at three levels with different skill mixes. Top management - the CEO and founders - sets direction and lives on conceptual skill: seeing the whole system and the long horizon. Middle management - plant heads, function heads - translates strategy into programmes and needs the strongest human and technical blend. Supervisory management - shift engineers, team leads - executes daily and leans on technical skill. Robert Katz's three skills (technical, human, conceptual) vary by level, not by worth. Management is both a science - organized knowledge with cause-and-effect relationships - and an art - personal skill refined by practice; a complete answer states and defends both halves.",
              "The four functions form a cycle, and the examinable insight is the feedback arrow: control results feed the next planning round. A 20-person startup runs the same cycle in modern clothes - quarterly OKRs for planning (objectives and measurable key results), squads with single-threaded owners for organizing, daily stand-ups and demo days for leading, and weekly metric dashboards for controlling. Write answers as definition, then one line of features and one example per function, close with the cycle diagram and the levels-and-skills note; that structure reliably converts a half answer into a full one.",
            ],
            bullets: [
              "Management (Koontz): getting things done through and with people; efficiency vs effectiveness.",
              "Planning: deciding in advance - vision, mission, SMART objectives, strategy, budgets.",
              "Organizing: structure, departmentalization, delegation, span of control, authority-responsibility.",
              "Leading (directing): supervision, motivation, communication, leadership style.",
              "Controlling: set standards, measure, compare, correct - feedforward, concurrent, feedback.",
              "Katz's skills - technical, human, conceptual - mix differently at top, middle and supervisory levels.",
            ],
            table: {
              caption: "The four functions with their core question, outputs and a startup translation.",
              headers: ["Function", "Core question", "Key outputs", "Startup example"],
              rows: [
                ["Planning", "What is to be achieved, and how?", "Vision, mission, SMART goals, budgets", "Quarterly OKRs for a 20-person team"],
                ["Organizing", "Who does what, with what authority?", "Org structure, roles, delegation", "Squads with single-threaded owners"],
                ["Leading", "How are people directed and motivated?", "Supervision, motivation, communication", "Daily stand-ups and demo days"],
                ["Controlling", "Did results match the standards?", "Metrics, variance analysis, corrections", "Weekly dashboard review and fixes"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The management cycle",
              caption: "Plan, organize, lead, control - and the control outputs feed the next planning round.",
              steps: [
                { label: "Plan", note: "objectives, strategy, budgets" },
                { label: "Organize", note: "structure, roles, delegation" },
                { label: "Lead", note: "direct, motivate, communicate" },
                { label: "Control", note: "measure, compare, correct" },
              ],
            },
            callout: {
              type: "exam",
              title: "The four-part skeleton",
              body: "For each function write: definition, two features, one example - then draw the cycle and mark the feedback arrow from Control back to Plan. Examiners allocate roughly one and a half marks per function plus the diagram, so never spend a page on planning alone.",
            },
            keyTerms: [
              { term: "Management", definition: "The art of getting things done through and with people in formally organized groups (Koontz)." },
              { term: "Delegation", definition: "Entrusting authority and responsibility for a task to a subordinate while retaining accountability." },
              { term: "Span of control", definition: "The number of subordinates a manager can effectively supervise directly." },
            ],
            examQuestions: [
              {
                q: "Define management and explain its four functions - planning, organizing, leading and controlling - with examples.",
                marks: 7,
                outline: [
                  "Define management (Koontz); contrast efficiency with effectiveness.",
                  "Planning: deciding in advance - vision, mission, SMART objectives, strategy, budgets; strategic/tactical/operational types.",
                  "Organizing: structure, departmentalization, delegation and span of control.",
                  "Leading (directing): supervision, motivation, communication and leadership style.",
                  "Controlling: set standards, measure, compare, correct - feedforward, concurrent, feedback.",
                  "Draw the cycle and mark the feedback from control into the next planning round.",
                  "Startup example: OKRs, squads, stand-ups and dashboards running the same four functions.",
                ],
              },
              {
                q: "Differentiate efficiency from effectiveness.",
                marks: 2,
              },
              {
                q: "Explain Katz's three managerial skills and how their mix varies by level.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.2",
            title: "Organizational structures: functional, divisional, matrix",
            body: [
              "Chandler's dictum - structure follows strategy - opens the topic: the organization chart is an answer to strategy, not decoration. The functional structure groups people by specialization - production, marketing, finance, HR, engineering. Its strengths are depth of expertise, efficient use of specialists and clear career paths; its weaknesses are departmental silos, slow cross-functional response and diffused accountability for the end product. The divisional structure groups by product line, geography or customer, each division carrying its own functions and owning a profit-and-loss statement. Accountability sharpens and market response quickens, but resources duplicate and divisions can compete internally for capital.",
              "The matrix structure overlays a project or product dimension onto the functional one, so an engineer reports to both a functional head and a project manager. It shares scarce experts flexibly across projects - ideal for EPC firms, R&D organizations and consultancies - but it violates unity of command, breeds role stress and slows decisions if authority is not explicitly written down. Around these three sit other forms: the simple, flat structure of an early startup; team-based and network or virtual structures; and the tall-versus-flat distinction governed by span of control - as spans widen, hierarchies flatten and information travels faster.",
              "Structures evolve with scale, and a hardware example makes the evolution concrete. A drone startup begins flat - three founders, everyone ships. At thirty to fifty people it departmentalizes functionally - engineering, go-to-market, operations. When agriculture and defence product lines each need dedicated roadmaps, divisions form with their own P&Ls, and scarce R&D talent is matrixed across both. Each transition trades speed for coordination and must be redone at every growth stage. In the exam, present the three structures in a comparison table - basis, two advantages, two disadvantages, suitability - and close with the evolution example.",
            ],
            bullets: [
              "Structure follows strategy (Chandler): the chart is a consequence of what the firm is trying to do.",
              "Functional: grouped by specialization; deep expertise, but silos and slow cross-function response.",
              "Divisional: grouped by product, geography or customer; profit accountability, but duplicated resources.",
              "Matrix: dual reporting to function and project; flexible experts against two-boss role stress.",
              "Span of control drives tall versus flat hierarchies; wide spans flatten the chart.",
              "Startups evolve: flat -> functional at 30-50 people -> divisional with matrixed R&D as lines multiply.",
            ],
            table: {
              caption: "Functional, divisional and matrix structures compared with suitability.",
              headers: ["Structure", "Basis of grouping", "Strength", "Weakness", "Fits"],
              rows: [
                ["Functional", "Specialization (production, marketing)", "Deep expertise, efficiency", "Silos, weak end-to-end accountability", "Single-product scaling startup"],
                ["Divisional", "Product, geography or customer", "Profit accountability, responsiveness", "Duplicated resources, internal rivalry", "Multi-product companies"],
                ["Matrix", "Function and project together", "Flexible use of scarce experts", "Two bosses, role stress", "EPC, R&D and consultancy firms"],
                ["Flat / simple", "Direct founder contact", "Speed, low overhead", "Founder bottleneck", "Early-stage startups"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Functional versus matrix structure",
              caption: "The functional column gives depth; the matrix column shares experts across projects at the price of two bosses.",
              left: {
                heading: "Functional",
                items: [
                  "Grouped by specialism: production, marketing, finance",
                  "One clear boss - unity of command holds",
                  "Deep specialists, efficient use of skill",
                  "Silos: slow cross-department response",
                  "The default structure of a scaling startup",
                ],
              },
              right: {
                heading: "Matrix",
                items: [
                  "Grouped by function and by project",
                  "Two reporting lines - unity of command broken",
                  "Experts shared flexibly across projects",
                  "Role stress and slower decisions",
                  "Fits EPC, R&D and consultancy work",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Table, then evolution",
              body: "Structure questions are comparison questions: draw the table with basis, advantages, disadvantages and suitability for all three structures, then add one paragraph on how a startup outgrows each form. The evolution paragraph is usually the difference between 5 and 7.",
            },
            keyTerms: [
              { term: "Organizational structure", definition: "The formal arrangement of tasks, reporting relationships and authority within an organization." },
              { term: "Unity of command", definition: "The classical principle that each subordinate should report to exactly one superior." },
              { term: "Span of control", definition: "The number of direct subordinates a manager supervises; it determines tall versus flat hierarchies." },
            ],
            examQuestions: [
              {
                q: "Compare functional, divisional and matrix organizational structures with advantages, disadvantages and suitability.",
                marks: 7,
                outline: [
                  "Open with Chandler: structure follows strategy; define organizing as a management function.",
                  "Functional: grouping by specialization - advantages of expertise and efficiency; disadvantages of silos.",
                  "Divisional: grouping by product, geography or customer - profit accountability versus duplicated resources.",
                  "Matrix: dual authority by function and project - flexible experts against two-boss stress and slower decisions.",
                  "Link span of control to tall versus flat hierarchies.",
                  "Suitability: functional for single-product firms, divisional for multi-product, matrix for EPC and R&D.",
                  "Close with the startup evolution example: flat, then functional, then divisions with matrixed R&D.",
                ],
              },
              {
                q: "What is span of control?",
                marks: 2,
              },
              {
                q: "State any two advantages and one disadvantage of the matrix structure.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.3",
            title: "Leadership styles and the managerial grid",
            body: [
              "Kotter separates the words: management copes with complexity - systems, plans, order - while leadership copes with change - direction, alignment and motivation. The classical styles classify by who decides. The autocratic leader decides alone: fast in crisis and safety-critical work, corrosive to morale over time. The democratic or participative leader consults the team before deciding: high buy-in and better decisions from committed teams, slow in emergencies. The laissez-faire leader sets goals and gets out of the way: ideal for senior experts and creative R&D, drift for anyone else. Transactional leadership trades rewards for performance; transformational leadership lifts followers through vision, inspiration, intellectual stimulation and individualized consideration.",
              "Situational theories hold that no style is universally best. Hersey and Blanchard match style to follower readiness: telling or directing for low competence with high commitment, selling or coaching when competence is growing, participating or supporting when competence is high but confidence wavers, delegating when competence and commitment are both high. Blake and Mouton's managerial grid plots concern for production on the x-axis and concern for people on the y-axis, each scaled 1 to 9. Five positions earn names: 9,9 team management - the ideal of high output through committed people; 1,9 country club - warmth without work; 9,1 authority-obedience - output through control; 1,1 impoverished - minimum effort on both; and 5,5 middle-of-the-road - adequate, uninspiring balance.",
              "For founders the lesson is calibration, not a favourite style. Crisis demands autocratic clarity for a week; a maturing team earns delegation; engineering teams under transformational purpose outperform those under task pressure. Indian entrepreneurial leaders are typically cited for exactly this blend - vision with execution culture. In the exam, the grid must be drawn: axes labelled, both scales shown 1 to 9, all five positions named with coordinates. Marks are explicitly attached to the sketch; a verbal description of the grid earns roughly half.",
            ],
            bullets: [
              "Management copes with complexity; leadership copes with change (Kotter).",
              "Style ladder: autocratic, democratic/participative, laissez-faire - who decides defines the style.",
              "Transactional: rewards for performance. Transformational: vision, inspiration, stimulation, individualized consideration.",
              "Hersey-Blanchard: telling, selling, participating, delegating - matched to follower readiness.",
              "Blake-Mouton grid: concern for production (x) and people (y), each 1 to 9.",
              "Five grid positions: 9,9 team; 1,9 country club; 9,1 authority-obedience; 1,1 impoverished; 5,5 middle-of-the-road.",
            ],
            table: {
              caption: "Leadership styles with who decides, when the style works and its risk.",
              headers: ["Style", "Who decides", "Works when", "Risk"],
              rows: [
                ["Autocratic", "Leader alone", "Crisis, safety-critical tasks", "Low morale, zero buy-in"],
                ["Democratic", "Team consulted", "Complex work, committed teams", "Slow in emergencies"],
                ["Laissez-faire", "Individuals", "Senior experts, creative R&D", "Drift without deadlines"],
                ["Transactional", "Leader via rewards", "Clear targets, sales teams", "No appetite for change"],
                ["Transformational", "Leader sets vision", "Change and growth journeys", "Depends heavily on charisma"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Blake and Mouton's managerial grid",
              caption: "Concern for production on x, concern for people on y - both axes run from 1 (low) to 9 (high).",
              axes: {
                x: "Concern for production (1 low to 9 high)",
                y: "Concern for people (1 low to 9 high)",
              },
              quadrants: [
                { label: "Country club (1,9)", note: "people first, output neglected" },
                { label: "Team management (9,9)", note: "high on both - the goal" },
                { label: "Impoverished (1,1)", note: "minimum effort on both axes" },
                { label: "Authority-obedience (9,1)", note: "output first, people as tools" },
              ],
            },
            callout: {
              type: "exam",
              title: "Draw the grid",
              body: "Grid questions carry marks for the sketch: label both axes, show the 1-9 scales, and plot all five named positions with coordinates. A written description without the figure forfeits those marks; add (5,5) middle-of-the-road - the position most candidates forget.",
            },
            keyTerms: [
              { term: "Leadership", definition: "The ability to influence people toward achieving goals, especially through change (as opposed to managing complexity)." },
              { term: "Transformational leadership", definition: "Leading through vision, inspiration, intellectual stimulation and individualized consideration to raise follower performance." },
              { term: "Managerial grid", definition: "Blake and Mouton's framework plotting concern for production against concern for people, each 1 to 9, yielding five leadership positions." },
            ],
            examQuestions: [
              {
                q: "Explain Blake and Mouton's managerial grid, sketching and naming all the leadership positions on it.",
                marks: 7,
                outline: [
                  "Introduce the grid: concern for production (x-axis) and concern for people (y-axis), each scaled 1 to 9.",
                  "Draw the figure: label axes, show the 1-9 scales on both.",
                  "(9,9) team management - high concern on both; the ideal.",
                  "(1,9) country club - friendly atmosphere, output neglected.",
                  "(9,1) authority-obedience - output first, people as instruments; (1,1) impoverished - minimum effort on both.",
                  "(5,5) middle-of-the-road - adequate balance, uninspiring.",
                  "Apply: founders should migrate toward (9,9) as teams mature; note situational theories agree no single style is always best.",
                ],
              },
              {
                q: "Differentiate leadership from management.",
                marks: 2,
              },
              {
                q: "Name Hersey and Blanchard's four leadership styles with the follower readiness each suits.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Motivation: Maslow, Herzberg and beyond",
            body: [
              "Motivation is the internal process that arouses, directs and sustains behaviour toward a goal: need, drive, goal, satisfaction, new need. Abraham Maslow's 1943 hierarchy stacks five needs - physiological, safety, love and belonging, esteem and self-actualization - under the prepotency principle: a substantially satisfied lower need stops motivating, so the next level up becomes the active driver. Self-actualization is his famous summit: what a person can be, that person must be. Applied to a startup: a market-rate salary and decent workspace settle the base of the pyramid; team rituals build belonging; titles and recognition build esteem; equity, autonomy and hard problems feed self-actualization. The standard criticism - the order is not universal (artists starve for craft) and the levels resist empirical testing - earns marks when stated.",
              "Frederick Herzberg's two-factor theory divides workplace outcomes in two. Hygiene factors - salary, working conditions, company policy, supervision quality, job security, interpersonal relations - operate on the dissatisfaction axis: their absence causes dissatisfaction, but their presence merely produces neutrality, not motivation. Motivators - achievement, recognition, the work itself, responsibility, advancement and growth - operate on the satisfaction axis and genuinely drive performance. The lesson is brutal for lazy employers: you cannot pay your way to engagement; you can only pay your way out of complaint. The mapping to Maslow is examinable - his lower levels approximate hygiene, his higher levels approximate motivators.",
              "The extensions take a line each. McGregor's Theory X assumes people dislike work and need control; Theory Y assumes people seek responsibility and direct themselves - beliefs become self-fulfilling. Vroom's expectancy theory multiplies expectancy, instrumentality and valence: effort, performance and reward must all connect or motivation collapses. McClelland names needs for achievement, affiliation and power; equity theory compares one's input-output ratio with others'. For startups the synthesis is practical: early employees trade salary for equity, growth and meaning - Herzberg's motivators - but the hygiene floor must still be paid on time. Appraisals should recognize achievement and create advancement, not merely adjust pay.",
            ],
            bullets: [
              "Motivation sequence: need -> drive -> goal -> satisfaction -> new need.",
              "Maslow's five levels: physiological, safety, belonging, esteem, self-actualization; prepotency governs order.",
              "Criticism of Maslow: order not universal; levels hard to test empirically.",
              "Herzberg: hygiene factors prevent dissatisfaction; motivators create satisfaction - two different axes.",
              "Mapping: Maslow's lower levels approximate hygiene; higher levels approximate motivators.",
              "Extensions in one line each: Theory X/Y, expectancy (Vroom), needs (McClelland), equity theory.",
            ],
            table: {
              caption: "Maslow's levels mapped to Herzberg and to startup actions.",
              headers: ["Maslow level", "Herzberg mapping", "What a startup can do"],
              rows: [
                ["Physiological", "Hygiene - pay, work conditions", "Market-rate salary, decent workspace"],
                ["Safety", "Hygiene - job security, policy", "Clear roles, salaries paid on time, insurance"],
                ["Love and belonging", "Hygiene - relations at work", "Team rituals, open communication"],
                ["Esteem", "Motivator - recognition", "Titles, awards, visible ownership of wins"],
                ["Self-actualization", "Motivator - growth, the work itself", "ESOPs, stretch problems, autonomy"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "Maslow's hierarchy of needs",
              caption: "Lower needs dominate until substantially satisfied; the startup that pays the base and designs the top wins both retention and effort.",
              tiers: [
                { label: "Self-actualization", note: "growth, mastery, purpose" },
                { label: "Esteem", note: "recognition, status, achievement" },
                { label: "Love and belonging", note: "team, relationships" },
                { label: "Safety", note: "security, stability, health cover" },
                { label: "Physiological", note: "salary that covers the basics" },
              ],
            },
            callout: {
              type: "tip",
              title: "State the criticism",
              body: "Motivation answers that state Maslow's limitations - the order is not universal and the theory resists empirical testing - reliably outscore pure descriptions. One closing sentence of criticism signals understanding rather than memorization; the same applies to Herzberg's interview-based method.",
            },
            keyTerms: [
              { term: "Motivation", definition: "The internal process that arouses, directs and sustains goal-directed behaviour." },
              { term: "Hygiene factor", definition: "A Herzberg factor (salary, policy, conditions) whose absence causes dissatisfaction but whose presence does not motivate." },
              { term: "Self-actualization", definition: "Maslow's highest need - the drive to realize one's full potential." },
            ],
            examQuestions: [
              {
                q: "Explain Maslow's hierarchy of needs and Herzberg's two-factor theory. How do the two compare, and what are their limitations?",
                marks: 7,
                outline: [
                  "Define motivation: the need-drive-goal-satisfaction sequence.",
                  "Maslow's five levels in order with a one-line meaning for each.",
                  "Prepotency principle: a substantially satisfied need stops motivating.",
                  "Herzberg: hygiene factors prevent dissatisfaction; motivators create satisfaction - two axes.",
                  "Mapping: Maslow's lower levels approximate hygiene, higher levels approximate motivators.",
                  "Managerial lesson: pay the hygiene floor, then design motivators - achievement, recognition, growth.",
                  "Limitations: Maslow's order is not universal and resists testing; Herzberg's method is interview-based and bias-prone.",
                ],
              },
              {
                q: "Give one example each of a hygiene factor and a motivator.",
                marks: 2,
              },
              {
                q: "Differentiate Theory X from Theory Y assumptions.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.5",
            title: "Team building and managerial decision making",
            body: [
              "A group is a collection of people with shared identity; a team is a small number of people with complementary skills, committed to common performance goals and mutual accountability. Bruce Tuckman's model traces how groups become teams. Forming: members are polite, roles unclear; the leader directs. Storming: conflict erupts over control and approach - healthy if surfaced, fatal if suppressed. Norming: rules, trust and working habits settle; the leader supports. Performing: energy flows to the task itself; the leader delegates and removes blockers. Adjourning: the task completes and the team dissolves or re-forms. Any change of membership knocks a team back toward storming - a fact startup founders experience with every senior hire.",
              "Belbin's role taxonomy and Google's Project Aristotle both point the same way: high-performing teams are built from complementary roles and psychological safety - the shared belief that the team is safe for interpersonal risk-taking. Task conflict improves decisions; relationship conflict destroys them; the leader's job is keeping the first and resolving the second. Decision making follows a rational sequence: define the problem, gather data, generate alternatives, evaluate against weighted criteria (the decision matrix or Pugh method), choose, implement, and follow up. Herbert Simon's bounded rationality is the realism clause: with limited time and cognition, managers satisfice - accept the first acceptable option - rather than optimize.",
              "Groups bring their own traps. Groupthink, Irving Janis's term, is the pressure to conform that suppresses dissent: symptoms include illusion of invulnerability, self-censorship and mind-guards acting as conformity enforcers. Antidotes are procedural - appoint a devil's advocate, collect anonymous input, and have the leader speak last. Escalation of commitment keeps feeding a failing course; analysis paralysis postpones any. Tools keep decisions honest: SWOT and PESTLE for framing, decision trees for risky choices, Pareto's 80/20 for prioritization, five whys for root cause, de Bono's six thinking hats for perspective switching. Startups add the reversibility test: for two-way-door decisions, decide fast and cheap.",
            ],
            bullets: [
              "Team vs group: complementary skills, common goals, mutual accountability.",
              "Tuckman: forming, storming, norming, performing, adjourning - with the leader's role changing each stage.",
              "Psychological safety (Project Aristotle) is the strongest predictor of team performance.",
              "Rational decision sequence: define, gather, generate, evaluate, choose, implement, review.",
              "Bounded rationality (Simon): managers satisfice - accept the first acceptable option.",
              "Groupthink antidotes: devil's advocate, anonymous input, leader speaks last.",
            ],
            table: {
              caption: "Tuckman's stages with what happens and the leader's job at each.",
              headers: ["Stage", "What happens", "Leader's job"],
              rows: [
                ["Forming", "Polite exploration; roles unclear", "Direct: set purpose and rules"],
                ["Storming", "Open conflict over control and method", "Coach: surface conflict, mediate"],
                ["Norming", "Norms and trust settle", "Support: consolidate agreements"],
                ["Performing", "Energy flows to the task itself", "Delegate and remove blockers"],
                ["Adjourning", "Task completes; team dissolves", "Recognize, capture lessons"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Tuckman's stages of team development",
              caption: "Most teams regress to storming when membership changes - the pipeline restarts, not resumes.",
              stages: [
                { label: "Forming", note: "polite, roles unclear" },
                { label: "Storming", note: "conflict over control" },
                { label: "Norming", note: "rules and trust settle" },
                { label: "Performing", note: "energy on the task" },
                { label: "Adjourning", note: "closure and lessons" },
              ],
            },
            callout: {
              type: "warning",
              title: "Groupthink",
              body: "The most examined decision trap: name Janis, list two symptoms (illusion of invulnerability, self-censorship, mind-guards) and two antidotes (devil's advocate, anonymous input, leader speaks last). Teams that never argue are usually teams that have stopped thinking.",
            },
            keyTerms: [
              { term: "Team", definition: "A small group of people with complementary skills, committed to common goals and mutual accountability." },
              { term: "Groupthink", definition: "Janis's term for the suppression of dissent by conformity pressure, degrading group decisions." },
              { term: "Satisficing", definition: "Simon's term for accepting the first acceptable option under bounded rationality, rather than optimizing." },
            ],
            examQuestions: [
              {
                q: "Explain Tuckman's stages of team development and the leader's role at each stage.",
                marks: 7,
                outline: [
                  "Distinguish group from team: complementary skills, common goals, mutual accountability.",
                  "Forming: politeness and unclear roles; leader directs and sets purpose.",
                  "Storming: conflict over control and approach; leader coaches and mediates.",
                  "Norming: norms and trust settle; leader supports and consolidates.",
                  "Performing: energy on the task; leader delegates and removes blockers.",
                  "Adjourning: closure; leader recognizes contribution and captures lessons.",
                  "Add the regression point: membership changes send teams back to storming; mention psychological safety.",
                ],
              },
              {
                q: "What is groupthink? State any two of its symptoms.",
                marks: 2,
              },
              {
                q: "Differentiate a group from a team.",
                marks: 3,
              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Operations, HR and Marketing",
      summary:
        "Running the venture: process design and quality systems, startup HR from hiring to retention, STP and the marketing mix, digital growth and the sales funnel, the financial statements with burn rate and unit economics, and the Indian unicorn case studies that close the course.",
      chapter: {
        number: "05",
        title: "Operations, HR and Marketing",
        intro:
          "Unit V runs the venture day to day: lean operations and quality systems that make products reliably, HR practices that hire, develop and retain startup teams, marketing from STP to the 4P and 7P mix, digital growth and the sales funnel, and the financial statements, burn rate and unit economics that decide whether any of it survives - closing with the Indian unicorns that prove both the upside and the cautionary tales.",
        inOneBreath:
          "Operations choose job, batch, mass or continuous processes and chase lean's seven wastes out with 5S, kanban and poka-yoke while quality runs PDCA, TQM and Six Sigma; HR cycles attract, hire, onboard, develop, appraise and retain with ESOPs and culture as levers; marketing segments, targets and positions before deploying product, price, place and promotion - plus people, process and physical evidence for services; growth hacking optimizes acquisition, activation, retention, referral and revenue with CAC and LTV discipline; and finance boils down to P&L, balance sheet and cash flow watched through burn rate, runway and LTV:CAC - the numbers that separated Flipkart and Zerodha from Byju's.",
        sections: [
          {
            number: "5.1",
            title: "Operations: process design and quality management",
            body: [
              "Operations management converts inputs into outputs, and process selection is its first decision: job shops for custom, high-variety work like tool rooms; batch production for medium variety and volume like contract manufacturing; mass or assembly-line production for standard products at volume like two-wheelers; and continuous processes for cement or refineries. Layout follows process - process, product, fixed-position or cellular layouts. Lean manufacturing, inherited from Toyota, then attacks the seven wastes: overproduction, waiting, transport, over-processing, inventory, motion and defects. Its toolkit is 5S workplace organization (sort, set in order, shine, standardize, sustain), just-in-time pull replenishment with kanban signals, value-stream mapping, poka-yoke mistake-proofing and SMED fast changeovers.",
              "Quality management is the twin discipline. Total quality management rests on customer focus, total employee involvement, process thinking and continuous improvement; Deming's PDCA cycle - plan, do, check, act - is its operating rhythm, and quality circles and kaizen events institutionalize it. Six Sigma pursues near-perfect processes through DMAIC - define, measure, analyze, improve, control - targeting roughly 3.4 defects per million opportunities. ISO 9001 certifies that a documented quality management system exists. The cost of quality splits into prevention, appraisal, internal failure and external failure, and the 1-10-100 rule states the penalty: a rupee of prevention becomes ten of correction and a hundred of failure in the field.",
              "A hardware startup lives or dies by this discipline. Design for manufacturability and assembly cuts unit cost before the first tool is cut; supplier audits, incoming inspection and first-article inspection catch defects before they compound; statistical process control charts separate common-cause noise from special-cause alarms. Takt time - available production time divided by demand - paces assembly lines, and line balancing spreads work so stations flow evenly. A young venture's operating dashboard tracks yield, scrap percentage and on-time delivery before it tracks anything else, because quality debt, like culture debt, compounds silently.",
            ],
            bullets: [
              "Process selection: job shop, batch, mass/assembly, continuous - matched to variety and volume.",
              "Lean's seven wastes: overproduction, waiting, transport, over-processing, inventory, motion, defects.",
              "Lean tools: 5S, JIT pull with kanban, value-stream mapping, poka-yoke, SMED changeovers.",
              "Quality systems: TQM, Deming's PDCA, quality circles, kaizen, Six Sigma DMAIC, ISO 9001.",
              "Cost of quality: prevention, appraisal, internal failure, external failure - the 1-10-100 rule.",
              "Startup practice: DFM/DFA, supplier audits, first-article inspection, SPC charts, takt-paced lines.",
            ],
            table: {
              caption: "The seven lean wastes with a shop-floor symptom and a countermeasure each.",
              headers: ["Waste (muda)", "Symptom", "Countermeasure"],
              rows: [
                ["Overproduction", "Making more than demand pulls", "Pull systems, takt-based scheduling"],
                ["Waiting", "Operators idle at machines", "Line balancing, SMED changeovers"],
                ["Transport", "Material travelling across the shop", "Cellular layout"],
                ["Over-processing", "Better finish than the customer pays for", "Standard work to specification"],
                ["Inventory", "Stores blocking cash", "Kanban, JIT replenishment"],
                ["Motion", "Walk, search, reach", "5S workplace organization"],
                ["Defects", "Rework and scrap", "Poka-yoke, SPC charts"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "PDCA - the Deming wheel",
              caption: "Each rotation standardizes one improvement; quality compounds rotation by rotation.",
              steps: [
                { label: "Plan", note: "set the quality standard" },
                { label: "Do", note: "implement on a small scale" },
                { label: "Check", note: "measure against the standard" },
                { label: "Act", note: "standardize or adjust" },
              ],
            },
            callout: {
              type: "exam",
              title: "Lists with anchors",
              body: "This section is examined as lists: the seven wastes (mnemonic TIMWOOD), 5S expanded, DMAIC expanded, and the four cost-of-quality categories. Each item needs only one line - breadth beats depth here. The PDCA diagram is worth drawing whenever quality appears in the question.",
            },
            keyTerms: [
              { term: "Takt time", definition: "Available production time divided by customer demand - the rhythm at which a line must produce." },
              { term: "Muda", definition: "The Japanese term for waste - any activity consuming resources without creating value for the customer." },
              { term: "Cost of quality", definition: "The total of prevention, appraisal, internal failure and external failure costs incurred to achieve quality." },
            ],
            examQuestions: [
              {
                q: "Explain lean manufacturing: the seven wastes and any three lean tools, with one example of each.",
                marks: 7,
                outline: [
                  "Define lean: maximizing customer value by eliminating waste (Toyota heritage).",
                  "List the seven wastes: overproduction, waiting, transport, over-processing, inventory, motion, defects.",
                  "5S: sort, set in order, shine, standardize, sustain - workplace organization with one example.",
                  "Kanban and JIT pull: replenish only on demand signals.",
                  "Poka-yoke: mistake-proofing; SMED: single-minute exchange of die for fast changeovers.",
                  "Link to quality: PDCA, TQM and Six Sigma DMAIC as the continuous improvement engine.",
                  "Cost of quality: prevention and appraisal versus internal and external failure; the 1-10-100 rule.",
                ],
              },
              {
                q: "Define takt time.",
                marks: 2,
              },
              {
                q: "Expand DMAIC with one line per phase.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.2",
            title: "HR for startups: hiring, retention, appraisal and culture",
            body: [
              "HR in a young venture is a lifecycle, not a department. Attract: employer brand and referral programs - referrals are the cheapest, best-calibrated source because employees pre-screen for both competence and fit. Hire: structured interviews with scorecards and work samples outpredict unstructured conversations; startups hire for slope - learning velocity - rather than intercept, current skill. Onboard: a written 30-60-90 day plan with a buddy, because most early attrition is really failed onboarding. Develop: stretch projects and mentoring beat catalogues of courses. Appraise and retain: quarterly check-ins rather than annual verdicts. Exit matters too: alumni goodwill is a referral channel and a boomerang-hire pool.",
              "Appraisal methods form a spectrum. Ranking and forced distribution compare people against each other and breed rivalry. Rating scales and behaviourally anchored rating scales (BARS) score defined dimensions with described anchors. The 360-degree feedback method collects structured input from peers, reports and managers, painting a fuller picture at the cost of process weight. Management by objectives - and its startup descendant, OKR-based reviews - appraises against agreed measurable outcomes, which is why fast companies run quarterly cycles with calibration sessions to keep standards fair. Retention then follows Herzberg from Unit IV: pay the hygiene floor, then build motivators - achievement, recognition, growth - and add ESOPs with vesting so staying is the rational financial choice.",
              "Culture is what the founders actually do, codified. Written values (customer obsession, frugality, bias for action), rituals (demo days, all-hands, post-mortems without blame) and artifacts carry it; psychological safety keeps it honest. The failure mode is culture debt - tolerated bad behaviour and unwritten rules that compound like technical debt until the tenth hire inherits them as law. Metrics keep HR honest: regretted attrition, time-to-fill, offer-accept rate and internal promotion rate. In the Indian talent market, where notice periods run long and product companies bid hard, retention is engineered, not hoped for.",
            ],
            bullets: [
              "Employee lifecycle: attract, hire, onboard, develop, appraise, retain, exit.",
              "Referrals are the cheapest quality channel - employees pre-screen for competence and fit.",
              "Hire for slope (learning velocity) over intercept (current skill); generalists early, specialists later.",
              "Onboarding is a written 30-60-90 plan with a buddy - failed onboarding masquerades as early attrition.",
              "Appraisal methods: ranking, rating scales, BARS, 360-degree feedback, MBO/OKR-based reviews.",
              "Culture: written values, rituals, psychological safety - and culture debt compounds if tolerated.",
            ],
            table: {
              caption: "Startup HR practices contrasted with traditional corporate HR.",
              headers: ["Practice", "Startup approach", "Traditional approach"],
              rows: [
                ["Sourcing", "Referrals and employer brand", "Consultants and mass job portals"],
                ["Interviews", "Structured scorecards, work samples", "Unstructured resume conversations"],
                ["Appraisal cycle", "Quarterly OKR check-ins", "Annual rating scale"],
                ["Compensation", "Cash plus ESOPs and growth", "Cash plus grade-linked increments"],
                ["Exit", "Alumni network, goodwill, boomerang hires", "Clearance and closure"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The employee lifecycle",
              caption: "A leak at any stage of the cycle shows up later as regretted attrition - measure the loop, not the stage.",
              steps: [
                { label: "Attract", note: "employer brand, referrals" },
                { label: "Hire", note: "structured interviews, work samples" },
                { label: "Onboard", note: "30-60-90 day plan" },
                { label: "Develop", note: "stretch work, mentoring" },
                { label: "Appraise", note: "quarterly OKR reviews" },
                { label: "Retain", note: "hygiene floor plus motivators" },
              ],
            },
            callout: {
              type: "tip",
              title: "Referrals and slope",
              body: "Two examinable startup-HR ideas: referrals are the cheapest high-quality hiring channel because employees stake reputation on fit, and startups hire for slope - how fast someone learns - rather than intercept - what they already know. Both distinguish startup HR from a corporate HR answer.",
            },
            keyTerms: [
              { term: "Onboarding", definition: "The structured integration of a new hire - roles, tools, relationships - typically scripted as a 30-60-90 day plan." },
              { term: "360-degree feedback", definition: "An appraisal method collecting structured performance input from a circle of peers, subordinates and managers." },
              { term: "Culture debt", definition: "The accumulated cost of tolerated bad behaviour and unwritten norms, compounding with every hire like technical debt." },
            ],
            examQuestions: [
              {
                q: "Explain the employee lifecycle and the methods of performance appraisal used in organizations.",
                marks: 7,
                outline: [
                  "Frame HR as a lifecycle: attract, hire, onboard, develop, appraise, retain, exit.",
                  "Attract: employer brand; referrals as the cheapest, best-calibrated channel.",
                  "Hire: structured interviews and work samples; hire for learning slope.",
                  "Onboard: written 30-60-90 day plan with a buddy.",
                  "Appraisal methods: ranking, rating scales, BARS, 360-degree feedback, MBO/OKR-based reviews.",
                  "Retention: hygiene floor plus motivators; ESOPs with vesting; stay interviews.",
                  "Culture: written values, rituals, psychological safety; warn that culture debt compounds.",
                ],
              },
              {
                q: "What is an ESOP?",
                marks: 2,
              },
              {
                q: "How does MBO differ from a traditional annual appraisal?",
                marks: 3,
              },
            ],
          },
          {
            number: "5.3",
            title: "Marketing: STP and the marketing mix",
            body: [
              "Kotler's definition opens the unit: marketing is meeting human needs profitably. The STP sequence operationalizes it. Segmentation slices the market on demographic, geographic, psychographic and behavioural bases - B2B markets segment instead by industry, company size and usage pattern. Targeting evaluates each segment on size, growth, competition and company fit, then chooses a strategy: undifferentiated (mass), differentiated (several segments, tailored offers), concentrated (one niche) or micro-marketing. Positioning claims the place the product will occupy in the target customer's mind relative to competitors - by attribute, benefit, use occasion, user class or against a named competitor - and is written as a positioning statement.",
              "The marketing mix then executes the positioning. McCarthy's 4Ps are product, price, place and promotion. Pricing methods deserve their own line: cost-plus, competitive, value-based, market-skimming (launch high, harvest early adopters), penetration (launch low, buy share) and freemium. Place spans direct, distributor, retail and marketplace channels. Promotion blends advertising, sales promotion, public relations, personal selling and direct or digital marketing. For services, Booms and Bitner add three Ps - people (who deliver), process (how it is delivered) and physical evidence (what the customer perceives) - a standard exam question in disguise.",
              "Apply the whole chain to the battery-swap venture from Unit II. Segment: urban e-rickshaw drivers who charge daily, and small fleet owners. Target: concentrated on daily-earning drivers first. Position: 60-second swap, 8 extra earning hours. The mix follows: product - standardized swap stations and a driver app; price - per-swap fee with a monthly subscription (penetration-priced against the hidden cost of downtime); place - stations at existing rickshaw stands; promotion - driver community leaders and stand partnerships. The B2B variant for fleets adjusts all four Ps. The examiner's test is the same: STP first, mix second - never a list of Ps floating free of a chosen customer.",
            ],
            bullets: [
              "Marketing (Kotler): meeting human needs profitably - not just selling.",
              "Segmentation bases: demographic, geographic, psychographic, behavioural; B2B by industry and size.",
              "Targeting strategies: undifferentiated, differentiated, concentrated, micro-marketing.",
              "Positioning: the place in the customer's mind, written as a positioning statement.",
              "4Ps: product, price, place, promotion; pricing includes skimming, penetration, freemium.",
              "Services add people, process, physical evidence (Booms and Bitner) to make the 7Ps.",
            ],
            codeExample: {
              language: "text",
              caption: "Positioning statement template - fill it, do not improvise it.",
              code: `POSITIONING STATEMENT TEMPLATE

For <target segment> who <need or pain>,
  <product> is a <category>
  that <key benefit / reason to believe>.
Unlike <main competitor>,
  <product> <primary differentiation>.

FILLED - B2C: urban e-rickshaw drivers
For daily-charging e-rickshaw drivers who lose 8 earning
  hours to a full battery charge, SwapNow is a battery-swap
  network that delivers a fully charged pack in 60 seconds.
Unlike slow home chargers, SwapNow runs on a monthly plan
  with unlimited swaps at stands next to every queue.

FILLED - B2B: small machine shops
For SME machine-shop owners who cannot afford new CNC
  machines, RetrofitWorks is an automation retrofit kit
  that converts a manual lathe into a 2-axis CNC in a day.
Unlike imported machines, RetrofitWorks costs a tenth
  and pays back in 6 months at current job rates.`,
            },
            diagram: {
              kind: "flow",
              title: "STP then mix - the order examiners look for",
              caption: "The mix is derived from the chosen segment and position; listing Ps first is the classic error.",
              steps: [
                { label: "Segment the market", note: "who is out there" },
                { label: "Target the chosen segment", note: "size, growth, fit, competition" },
                { label: "Position with one sharp statement", note: "own a place in the mind" },
                { label: "Deploy the 4P/7P mix", note: "product, price, place, promotion + 3" },
              ],
            },
            callout: {
              type: "exam",
              title: "One product, all the way through",
              body: "STP questions collapse when answered in the abstract. Pick one product - the battery-swap network, a retrofit kit - and run segmentation bases, targeting strategy, a positioning statement and all the Ps through it. The worked example is what converts a list into an answer.",
            },
            keyTerms: [
              { term: "Segmentation", definition: "Dividing a heterogeneous market into internally homogeneous groups on demographic, geographic, psychographic or behavioural bases." },
              { term: "Positioning", definition: "Designing the product's image and place in the target customer's mind relative to competitors." },
              { term: "Marketing mix", definition: "The controllable marketing variables - product, price, place, promotion (plus people, process, physical evidence for services) - deployed to serve a target market." },
            ],
            examQuestions: [
              {
                q: "Explain segmentation, targeting and positioning with examples, and show how the marketing mix follows from STP.",
                marks: 7,
                outline: [
                  "Define marketing (Kotler): identifying and meeting human needs profitably.",
                  "Segmentation bases: demographic, geographic, psychographic, behavioural; B2B by industry and size.",
                  "Targeting: evaluate size, growth, competition, fit; strategies - undifferentiated, differentiated, concentrated, micro.",
                  "Positioning: the place in the customer's mind; write the positioning statement template.",
                  "4Ps: product, price (skimming vs penetration), place, promotion - with one example each.",
                  "7Ps for services: add people, process, physical evidence (Booms and Bitner).",
                  "Run one product through the whole chain - the battery-swap venture works well.",
                ],
              },
              {
                q: "List the four Ps of the marketing mix.",
                marks: 2,
              },
              {
                q: "Differentiate penetration pricing from price skimming.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.4",
            title: "Digital marketing, growth hacking and the sales funnel",
            body: [
              "Digital marketing is a portfolio of measurable channels. Search covers SEO - earning organic ranking through content and technical health - and SEM - paid ads priced per click and ranked by bid times quality score. Social splits organic from paid, and platform fit is strategy: LinkedIn for B2B, Instagram for consumer brands, YouTube for demonstration-heavy products. Content marketing builds top-of-funnel authority with blogs and videos; email remains the highest-ROI channel once permission exists, and lifecycle automation turns it into a retention engine. Influencer and affiliate marketing rent trust; WhatsApp Business has become a genuine Indian commerce channel. The dashboard metrics: impressions, click-through rate, cost per click, conversion rate and customer acquisition cost.",
              "Growth hacking - Sean Ellis's term - is marketing run as an experiment portfolio across the full funnel, measured by the AARRR pirate metrics: acquisition, activation, retention, referral, revenue. Growth hackers run cheap creative tests, A/B versions, and engineer growth loops where each user's output feeds new-user acquisition, instead of one-way funnels that leak. The viral coefficient K equals invitations sent per user times conversion rate; K greater than one means self-sustaining viral growth. Retention is the multiplier: growth on a leaky bucket is expensive theatre, so the North Star metric is usually an engagement or retention number, and the financial guardrails are CAC payback and LTV:CAC.",
              "The sales funnel - awareness, interest, consideration, purchase, advocacy - plays out differently in B2C and B2B. B2C cycles are short and emotional: self-serve trials, one-click checkout, impulse conversion at volume. B2B cycles are long and rational: multiple stakeholders (champion, economic buyer, technical gatekeeper), demos, pilots, RFQs and negotiation; relationship selling and disciplined CRM stage-tracking decide win rates. Both funnels share the arithmetic: revenue = traffic x conversion x order value, and no stage can be fixed without measuring it. Engineer-founders must sell personally until product-market fit - founder-led sales is not a phase to outsource.",
            ],
            bullets: [
              "Channel portfolio: SEO/SEM, social, content, email, influencer, WhatsApp Business, ASO.",
              "Metrics: impressions, CTR, CPC, conversion rate, CAC - every channel is measurable.",
              "Growth hacking (Sean Ellis): experiment portfolio across the full funnel, not just ads.",
              "AARRR pirate metrics: acquisition, activation, retention, referral, revenue.",
              "Viral coefficient K = invitations per user x conversion; K above 1 is self-sustaining growth.",
              "B2C: short, emotional, self-serve at volume. B2B: long, rational, multi-stakeholder with pilots and RFQs.",
            ],
            table: {
              caption: "The funnel stage by stage: B2C play, B2B play and the metric to watch.",
              headers: ["Funnel stage", "B2C play", "B2B play", "Metric"],
              rows: [
                ["Awareness", "Reels, influencers, SEO", "LinkedIn, whitepapers, trade shows", "Impressions, reach"],
                ["Interest", "Landing page, lead magnet", "Webinar, demo request", "CTR, sign-ups"],
                ["Consideration", "Reviews, free trial", "Pilot, ROI case, RFQ response", "Trial or pilot conversion"],
                ["Purchase", "One-click checkout, COD", "Proposal, negotiation, contract", "Conversion rate, cycle time"],
                ["Advocacy", "Referral rewards, UGC", "Case study, reference call", "NPS, referral rate"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The sales funnel as a pipeline",
              caption: "B2C optimizes the narrow neck - checkout; B2B optimizes the long middle - consideration.",
              stages: [
                { label: "Awareness", note: "reach the right audience" },
                { label: "Interest", note: "capture attention as leads" },
                { label: "Consideration", note: "evaluate, trial, pilot" },
                { label: "Purchase", note: "convert and deliver" },
                { label: "Advocacy", note: "refer and review" },
              ],
            },
            callout: {
              type: "warning",
              title: "CAC discipline",
              body: "The fatal growth-hacking error: buying users whose lifetime value never covers their acquisition cost. Whenever you write about growth, attach the guardrail - LTV:CAC of at least 3 and CAC payback inside 12 months - otherwise the funnel is just an expensive way to lose money.",
            },
            keyTerms: [
              { term: "Growth hacking", definition: "Sean Ellis's term for cross-functional, experiment-driven optimization of the entire funnel from acquisition to revenue." },
              { term: "CAC", definition: "Customer acquisition cost - fully loaded sales and marketing spend divided by customers acquired." },
              { term: "Viral coefficient", definition: "K = invitations sent per user x conversion rate; K above 1 means each cohort generates a larger one." },
            ],
            examQuestions: [
              {
                q: "What is growth hacking? Explain the AARRR pirate metrics and how digital channels feed the sales funnel.",
                marks: 7,
                outline: [
                  "Define growth hacking (Sean Ellis): cross-functional, experiment-driven growth across the full funnel.",
                  "AARRR: acquisition, activation, retention, referral, revenue - define each in one line.",
                  "Acquisition channels: SEO and SEM, social, content, email; metrics CTR, CPC, CAC.",
                  "Activation and retention: onboarding and cohort retention - the multiplier that punishes leaky buckets.",
                  "Referral: viral coefficient K = invitations x conversion; K above 1 is self-sustaining growth.",
                  "Revenue guardrails: CAC payback and LTV:CAC of at least 3.",
                  "B2B versus B2C funnels: stakeholders, cycle length, self-serve versus pilots and RFQs.",
                ],
              },
              {
                q: "Define customer acquisition cost (CAC).",
                marks: 2,
              },
              {
                q: "State any three differences between B2B and B2C selling.",
                marks: 3,
              },
            ],
          },
          {
            number: "5.5",
            title: "Startup finance and Indian unicorn case studies",
            body: [
              "Three statements describe the venture. The income statement (P&L) runs over a period: revenue minus cost of goods sold gives gross profit; minus operating expenses, EBITDA; after depreciation, interest and tax, net profit - though for a startup, contribution margin and burn matter more than profit. The balance sheet is a snapshot: assets equal liabilities plus equity, with working capital equal to current assets minus current liabilities. The cash-flow statement splits into operating, investing and financing, and reconciles the profit story with the cash truth - profitable firms die of cash gaps, which is why the maxim says profit is opinion, cash is fact.",
              "Burn rate is the net monthly cash outflow; runway equals cash balance divided by burn - the venture's months of life. Unit economics decide whether growth is worth funding: CAC is the fully loaded sales and marketing cost per customer; LTV is the contribution a customer generates over their lifetime (ARPU times gross margin divided by churn); investors want LTV:CAC of at least three and CAC payback inside twelve months. Break-even in units equals fixed costs divided by contribution per unit. A worked case: a retrofit kit sells at Rs 15,000 with Rs 9,000 contribution; CAC is Rs 6,000; churn is low - LTV comfortably clears three times CAC, and break-even lands at Rs 30 lakh divided by Rs 9,000, roughly 334 kits.",
              "The Indian unicorn roster - ventures valued above $1 billion - supplies the case studies. Flipkart (2007) built e-commerce scale and delivered the country's largest exit when Walmart paid about $16 billion in 2018. Paytm and Zomato took the payments and food-delivery stories to IPO in 2021. Nykaa proved a profitable D2C path; Zerodha and Zoho proved the bootstrapped alternative - no venture money, durable profit. Byju's is the cautionary tale: growth bought above sustainable CAC, governance failures, and a valuation collapse that defined the 2022-23 funding winter. The lesson set: timing and market size matter, unit economics eventually surface, and capital efficiency is a strategy, not a compromise.",
            ],
            bullets: [
              "P&L: revenue - COGS = gross profit; opex, EBITDA, then net profit.",
              "Balance sheet: assets = liabilities + equity; working capital = current assets - current liabilities.",
              "Cash flow: operating, investing, financing - profit is opinion, cash is fact.",
              "Burn rate = monthly net cash outflow; runway = cash balance / burn.",
              "LTV:CAC of at least 3, CAC payback inside 12 months, break-even = fixed costs / contribution per unit.",
              "Unicorns: Flipkart (exit), Nykaa and Zerodha (profitable paths), Byju's (cautionary tale of CAC and governance).",
            ],
            codeExample: {
              language: "python",
              caption: "Burn rate, runway and unit economics - the three numbers a founder must quote.",
              code: `def runway(cash_balance, monthly_burn):
    return cash_balance / monthly_burn

def ltv_cac(arpu, gross_margin, monthly_churn, cac):
    """LTV = ARPU x gross margin / churn; health wants LTV/CAC >= 3."""
    ltv = arpu * gross_margin / monthly_churn
    return ltv, ltv / cac

def break_even_units(fixed_costs, price, variable_cost):
    return fixed_costs / (price - variable_cost)

# A retrofit-kit startup: Rs 42 lakh cash, Rs 7 lakh monthly burn
print("runway =", round(runway(4_200_000, 700_000), 1), "months")

# SaaS arm: Rs 2,000/month, 70% margin, 2% churn, CAC Rs 24,000
ltv, ratio = ltv_cac(2_000, 0.70, 0.02, 24_000)
print("LTV Rs", round(ltv), ", LTV/CAC =", round(ratio, 1))

# Hardware: Rs 30 lakh fixed, kit Rs 15,000, variable Rs 9,000
print("break-even =", round(break_even_units(3_000_000, 15_000, 9_000)), "kits")`,
            },
            diagram: {
              kind: "flow",
              title: "How the three statements and burn connect",
              caption: "Profit flows into the balance sheet as retained earnings; the cash-flow statement exposes what the P&L hides.",
              steps: [
                { label: "P&L: revenue minus costs gives profit", note: "an opinion, over a period" },
                { label: "Profit adds to retained earnings", note: "flows into the balance sheet" },
                { label: "Cash flow reconciles profit with cash", note: "operating, investing, financing" },
                { label: "Burn = monthly net cash outflow", note: "the survival number" },
                { label: "Runway = cash balance / burn", note: "months of life left" },
              ],
            },
            callout: {
              type: "exam",
              title: "Formulas then case studies",
              body: "Finance answers score on the formula block first: burn, runway, LTV, CAC, LTV:CAC, break-even - each stated with its variables and one substituted number. Then one line each on Flipkart, Zerodha and Byju's as the exit, bootstrap and cautionary patterns. Numbers first, stories second.",
            },
            keyTerms: [
              { term: "Burn rate", definition: "The net monthly cash outflow of a venture; with runway, it measures remaining life." },
              { term: "Unit economics", definition: "The per-customer or per-unit economics - CAC, LTV, contribution margin - that decide if growth creates value." },
              { term: "Unicorn", definition: "A privately held startup valued above $1 billion." },
            ],
            examQuestions: [
              {
                q: "Explain the three financial statements and their interconnection. Define burn rate, runway and unit economics (CAC, LTV, LTV:CAC).",
                marks: 7,
                outline: [
                  "P&L: revenue - COGS = gross profit; opex and EBITDA; then net profit.",
                  "Balance sheet: assets = liabilities + equity; define working capital.",
                  "Cash-flow statement: operating, investing, financing sections.",
                  "Interconnection: net profit flows to retained earnings; cash flow reconciles accrual profit with actual cash.",
                  "Burn rate and runway = cash / burn, with a numeric example.",
                  "Unit economics: CAC, LTV = contribution x lifetime; LTV:CAC of at least 3; CAC payback inside 12 months.",
                  "Close with case studies: Flipkart exit, Zerodha bootstrap, Byju's cautionary tale.",
                ],
              },
              {
                q: "Define runway. How is it computed?",
                marks: 2,
              },
              {
                q: "What does an LTV:CAC ratio of 3 indicate, and why do investors look for it?",
                marks: 3,
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
        "RGPV ME-803(C) papers lean on the standard frameworks: the Business Model Canvas, motivation theories and POLC appear almost every session, with funding, legal forms, leadership and the business plan supplying the rest. Definitions carry the short questions; comparison tables and diagrams carry the seven-markers. Allocate revision in roughly this ratio, and keep one worked example per topic regardless of weight.",
      ],
      weightedTopics: [
        { topic: "Business Model Canvas: nine blocks with an applied example", weight: "8-12 marks", note: "Near-guaranteed long question; practise filling all nine blocks for one venture in ten minutes." },
        { topic: "Maslow's hierarchy and Herzberg's two-factor theory (compared)", weight: "8-10 marks", note: "Draw the pyramid, map levels to hygiene/motivators, state the criticisms." },
        { topic: "Functions of management: POLC with diagram", weight: "7-10 marks", note: "One definition, two features and one example per function; close with the cycle." },
        { topic: "Sources of finance and the funding ladder", weight: "7-10 marks", note: "Pyramid diagram plus the source-stage-ticket table; equity vs debt as the rider." },
        { topic: "Leadership styles and Blake-Mouton managerial grid", weight: "7-10 marks", note: "The grid must be drawn with all five positions and coordinates - marks attach to the sketch." },
        { topic: "Forms of business organization: LLP vs Pvt Ltd", weight: "6-8 marks", note: "Comparison table plus the one-liner: VCs invest only in private limited companies." },
        { topic: "Business plan structure and purposes", weight: "6-8 marks", note: "Section-wise contents; executive summary 'written last, read first' is the scoring line." },
        { topic: "Organizational structures: functional, divisional, matrix", weight: "5-8 marks", note: "Table format with advantages, disadvantages, suitability; add the startup evolution story." },
        { topic: "Patents and intellectual property rights", weight: "5-7 marks", note: "Three patentability conditions, the procedure, and 'disclosure destroys novelty'." },
        { topic: "STP, 4P/7P mix, lean startup and MVP", weight: "5-8 marks", note: "One product run through STP into the mix; build-measure-learn with MVP types." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Assuming five days a week with two hours a day, this schedule covers every section twice - once for understanding, once for revision - and reserves the final week for full-length papers under exam timing.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - entrepreneurship fundamentals", tasks: ["Entrepreneur vs manager vs intrapreneur table; Danhof's four types with examples", "Ecosystem actors map (Isenberg's six domains) and the startup stage-gate pipeline", "Startup India criteria and benefits; incubator vs accelerator vs studio table"] },
        { week: "Week 2", focus: "Unit II - opportunity to canvas", tasks: ["Drucker's seven sources of opportunity and the screening criteria (TAM-SAM-SOM)", "Design thinking loop plus the full SCAMPER expansion with product examples", "Draw the Business Model Canvas twice from memory - one B2C, one B2B venture"] },
        { week: "Week 3", focus: "Unit II close and Unit III start", tasks: ["Lean startup: build-measure-learn, five MVP types, pivot examples", "Write a one-page business plan skeleton for a venture idea of your own", "Funding ladder and equity vs debt; work the pre-money/post-money numeric twice"] },
        { week: "Week 4", focus: "Unit III - law and IP", tasks: ["Legal forms comparison table; why VCs require a private limited company", "Registration pipeline: SPICe+, GST thresholds, Udyam benefits, DPIIT recognition", "Patentability conditions and the IP rights table; five term sheet clauses"] },
        { week: "Week 5", focus: "Unit IV - management concepts", tasks: ["POLC cycle with definitions, features and startup examples", "Functional vs divisional vs matrix; sketch the Blake-Mouton grid with all five positions", "Maslow vs Herzberg mapping table; Tuckman stages and groupthink antidotes"] },
        { week: "Week 6", focus: "Unit V + full revision", tasks: ["Seven wastes, 5S, DMAIC; STP and 4P/7P applied to one product", "AARRR metrics, B2B vs B2C funnel, burn/runway/LTV:CAC formulas", "Two full mock papers under exam timing; revise the unicorn case studies"] },
      ],
    },
    {
      id: "last-day",
      heading: "The last 24 hours",
      bullets: [
        "Redraw from memory: the Business Model Canvas nine blocks, Maslow's pyramid, the managerial grid, the funding ladder and the build-measure-learn loop - these five figures cover most seven-markers.",
        "Recite Danhof's four types (innovative, imitative, Fabian, drone) with one example each, and the POLC definitions in one line per function.",
        "Re-work three numerics once: pre-money/post-money (stake = investment / post), burn and runway, break-even = fixed costs / contribution.",
        "Re-read the comparison tables: entrepreneur vs manager, LLP vs Pvt Ltd, incubator vs accelerator, hygiene factors vs motivators.",
        "Skim the case studies - Flipkart (exit), Zerodha (bootstrap), Byju's (cautionary) - one line of lesson each.",
        "Stop by early evening; a rested recall beats one more hour of tired framework-gazing.",
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every long answer follows the same shape: define, list and explain, draw, apply an example, state one limitation - the diagram and the example carry the tail marks.",
        "Comparison questions score as tables: draw the table with four to five dimensions (liability, compliance, funding fit, risk, horizon) even when the question does not ask for one.",
        "For funding and valuation questions, show the arithmetic: post-money = pre-money + investment, stake = investment / post-money; a substituted number earns more than the formula alone.",
        "Quote the classifier or author - Danhof, Timmons, Osterwalder, Ries, Maslow, Herzberg, Blake and Mouton, Tuckman; a named theory beats an anonymous theory every time.",
        "Time-box: 2-3 mark shorts in 4-5 minutes, 7-mark questions in 15, and keep the last 10 minutes to check that every framework drawn has all its blocks and every table has its headers.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Listing the nine canvas blocks as a flat list - group them as customer-facing, offer, infrastructure and finance; missing one block costs a mark.",
        "Calling hygiene factors motivators (or the reverse) - hygiene prevents dissatisfaction, it does not create satisfaction; the two axes are Herzberg's whole point.",
        "Treating the managerial grid as 2x2 - it is 9x9, and (5,5) middle-of-the-road is the position most candidates forget to plot.",
        "Confusing pre-money with post-money - stake = investment / (pre + investment); swapping them flips the answer completely.",
        "Writing that VCs fund proprietorships or partnerships - institutional investors require a private limited company for share allotments; this line is examined directly.",
        "Answering 4Ps when the question says services - the 7Ps need people, process and physical evidence added; check which mix the question asks for.",
      ],
    },
  ],
};
