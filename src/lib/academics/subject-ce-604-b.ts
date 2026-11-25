/**
 * Academics - RGPV Civil Engineering 6th-semester subject: CE-604(B)
 * Intellectual Property Rights.
 *
 * Structure mirrors subject-cs-302.ts: units -> one chapter per unit ->
 * numbered sections.  Each section carries body paragraphs, bullets, a
 * diagram, key terms, a callout, a table or code sample, and three
 * exam-style questions (one 7-mark with outline + two shorts).
 */

import type { AcademicSubject } from "./types";

export const ce604b: AcademicSubject = {
  id: "ce-604-b",
  code: "CE-604(B)",
  title: "Intellectual Property Rights",
  semester: "VI Semester",
  program: "RGPV · Civil Engineering",
  tagline:
    "The complete visual guide to CE-604(B): IP concepts and the WIPO-TRIPS framework, patents from criteria to case studies, copyrights, trademarks and geographical indications, designs, secrets and newer rights, and IP management with technology transfer - every syllabus point paired with cases and diagrams you can redraw in the exam hall.",
  description:
    "Five units walk from the idea of intellectual property and its branches through the international order built by WIPO and TRIPS and the Indian statute map, with the Patents Act 1970 as the anchor. Unit II is the heart of the subject: patentability criteria, the filing procedure with its statutory time limits, specification and claim drafting, infringement and remedies, and the Novartis and Natco case studies. Unit III covers copyright - works, rights, term and fair dealing - and trademarks from the distinctiveness ladder through registration, infringement and passing off to geographical indications. Unit IV gathers the specialized rights: industrial designs, trade secrets and NDAs, chip layout-designs and plant variety protection. Unit V turns rights into money: auditing, valuation with a worked relief-from-royalty sketch, licensing from exclusive to compulsory, technology transfer, commercialization, litigation and traditional knowledge. Every section pairs the legal concept with a civil-engineering example, a redrawable diagram and the exam questions RGPV actually asks.",
  accentColor: "#7c3aed",
  emoji: "IPR",
  unitCount: 5,
  totalSections: 25,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to IPR",
      summary:
        "The shared vocabulary of the subject: what intellectual property is and its branches, the WIPO order built on the Paris and Berne Conventions and the PCT, the TRIPS agreement that ties IP to world trade, the Indian statute map with its registries, and the Patents Act 1970 with its Ayyangar philosophy and TRIPS-era amendments.",
      chapter: {
        number: "01",
        title: "Intellectual Property: Concepts and Frameworks",
        intro:
          "Unit I lays the foundation the whole subject stands on. It defines intellectual property and its branches, maps the international order administered by WIPO through the Paris and Berne Conventions and the PCT, dissects the TRIPS agreement that binds IP to world trade, surveys the statutes and registries that make up the Indian IP landscape, and closes with the Patents Act 1970 - its colonial ancestry, its balancing philosophy, and the 1999-2002-2005 amendments that brought it into TRIPS compliance.",
        inOneBreath:
          "Intellectual property is ownable creations of the mind, split into industrial property (patents, trademarks, designs, GI, chip layouts) and copyright (works, software, films, recordings). WIPO, the Geneva UN agency, administers Paris (industrial property: national treatment, 12-month priority) and Berne (automatic copyright) plus the PCT's single international application; India joined the Paris Union and the PCT in 1998 and the Madrid Protocol in 2013. TRIPS, born with the WTO in 1995, sets minimum standards across seven IP areas, enforced through national treatment, MFN, mandatory remedies and WTO dispute settlement, and forced India's patent amendments - mailbox (1999), 20-year term (2002), product patents and Section 3(d) (2005). India's statute map: Copyright 1957, Patents 1970, Trademarks 1999, GI 1999, Designs 2000, Semiconductors 2000, PPV and FR 2001; trade secrets live in contract law. The Patents Act balances incentives against access, excludes what Sections 3 and 4 bar, and runs patents for 20 years from the priority date.",
        sections: [
          {
            number: "1.1",
            title: "Intellectual property and its types",
            body: [
              "Intellectual property is the legal recognition of creations of the mind: inventions, literary and artistic works, symbols, names, designs and commercial information used in trade. The law treats these intangibles as property because they can be owned, assigned, licensed and enforced against others exactly like land or machinery, even though you cannot touch them. A patent on a new bridge-bearing device, the copyright in a set of structural drawings and the trademark on a construction brand are all intellectual property. The right is territorial - it exists only where a statute grants it - and it is a negative right: the power to stop others, not a licence for the owner to do anything.",
              "The IP family splits into two branches. Industrial property covers patents for inventions, trademarks for commercial identity, industrial designs for the look of articles, geographical indications for place-linked goods, and layout-designs of integrated circuits. Copyright and neighbouring rights cover literary, dramatic, musical and artistic works, computer programs, cinematograph films and sound recordings. Between the two sit plant variety protection and the contract-based protection of trade secrets. India legislates each right separately: the Patents Act 1970, the Copyright Act 1957, the Trademarks Act 1999, the Designs Act 2000, the Geographical Indications Act 1999, the Semiconductor Act 2000 and the PPV and FR Act 2001.",
              "Society protects these creations as a bargain. The inventor or author gets a limited-time monopoly as an incentive and a reward; the public gets disclosure of the invention and, when the term ends, the work falls into the public domain for anyone to use. A patent lasts twenty years, copyright lasts the author's life plus sixty years, while a trademark can be renewed forever as long as it is used. Examiners expect this balance - incentive plus disclosure plus eventual public access - in any 'why protect intellectual property' answer, ideally with one example drawn from each branch of the family.",
            ],
            bullets: [
              "Intellectual property: creations of the mind that the law lets you own, assign, license and enforce like any other property.",
              "Two branches: industrial property (patents, trademarks, designs, GI, chip layouts) and copyright (literary and artistic works, software, films, recordings).",
              "Territorial and negative: the right exists only where a statute grants it, and it works by stopping others, not by authorizing the owner.",
              "The bargain: a limited monopoly in exchange for disclosure, then public domain - patents 20 years, copyright life plus 60, trademarks renewable indefinitely.",
              "Indian statutes: Patents Act 1970, Copyright Act 1957, Trademarks Act 1999, GI Act 1999, Designs Act 2000, Semiconductor Act 2000, PPV and FR Act 2001.",
            ],
            table: {
              caption: "The Indian IP map at a glance.",
              headers: ["Right", "Protects", "Governing law", "Typical term"],
              rows: [
                ["Patent", "new products and processes", "Patents Act 1970", "20 years from filing"],
                ["Trademark", "brand identity of goods and services", "Trademarks Act 1999", "10 years, renewable"],
                ["Copyright", "original expression in works", "Copyright Act 1957", "life plus 60 years"],
                ["Industrial design", "ornamental look of articles", "Designs Act 2000", "10 plus 5 years"],
                ["Geographical indication", "place-linked product qualities", "GI Act 1999", "10 years, renewable"],
                ["Trade secret", "confidential business information", "contract law (no statute)", "as long as secret"],
              ],
            },
            diagram: {
              kind: "pyramid",
              title: "The intellectual property family",
              caption:
                "From the strongest, shortest exclusion at the apex to indefinite, self-help secrecy at the base.",
              tiers: [
                { label: "Patents", note: "technical inventions - the apex right" },
                { label: "Industrial designs", note: "appearance judged by the eye" },
                { label: "Trademarks and GI", note: "identity and origin of goods" },
                { label: "Copyright", note: "expression in works of authorship" },
                { label: "Trade secrets", note: "undisclosed commercial know-how" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "A 7-mark 'types of IP' answer must name each right, its statute and its term in a table, then close with the incentive-disclosure bargain. Examiners dock marks for treating a trademark as 'the company's copyright' - keep the two branches separate.",
            },
            keyTerms: [
              { term: "Intellectual property", definition: "Legal rights over creations of the mind - inventions, works, marks, designs and trade information - treated as ownable property." },
              { term: "Industrial property", definition: "The branch of IP covering patents, trademarks, industrial designs, geographical indications and chip layout-designs." },
              { term: "Negative right", definition: "An IP right operates by excluding others from using the creation; it does not itself permit the owner to act." },
            ],
            examQuestions: [
              {
                q: "Define intellectual property. Explain its major types with the governing Indian statute and term for each, and distinguish industrial property from copyright.",
                marks: 7,
                outline: [
                  "Define IP as legal rights over creations of the mind that can be owned, assigned and licensed.",
                  "Split the family into industrial property and copyright, naming the members of each branch.",
                  "Give a one-line definition plus statute and term for patents, trademarks, copyright, designs and GI.",
                  "Add trade secrets as contract-protected information with no statutory registration in India.",
                  "Contrast the branches: technical and commercial identity versus expression of authorship.",
                  "Close with the incentive-disclosure bargain: limited monopoly in exchange for disclosure, then public domain.",
                ],
              },
              {
                q: "Why is an intellectual property right called a negative right?",
                marks: 2,
              },
              {
                q: "Name the two branches of intellectual property with two examples of each.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.2",
            title: "WIPO and the international IP framework",
            body: [
              "The World Intellectual Property Organization grew out of the 1967 Stockholm Convention and became a specialized agency of the United Nations in 1974. Headquartered in Geneva, it now serves more than 190 member states, including India. WIPO promotes the protection of IP worldwide, harmonizes national laws through treaties, runs global registration systems, and offers arbitration and mediation for IP disputes. For a student, WIPO is best remembered as the administrator of the classic IP treaties and as the body that turns treaty promises - national treatment, priority rights, automatic copyright - into working international procedures that national offices must respect.",
              "The treaties WIPO administers fall into families. The Paris Convention of 1883 governs industrial property and gives two key guarantees: national treatment, meaning foreigners get the same treatment as locals, and the right of priority, under which a filing in one member state preserves its date for twelve months for patents and six months for designs and trademarks. The Berne Convention of 1886 governs copyright with automatic protection on creation and a minimum term of the author's life plus fifty years. The Patent Cooperation Treaty of 1970 provides a single international application; the Madrid System does the same for trademarks and the Hague System for designs.",
              "India engages with WIPO on all fronts. It joined the Paris Union and the PCT in 1998 and the Madrid Protocol in 2013, so an Indian engineer can now file one international application and seek protection across dozens of countries. The 1996 WIPO Internet treaties (WCT and WPPT) shaped India's 2012 copyright amendments on performers' rights. WIPO's services matter in practice: an international search report under the PCT tells an applicant where an invention is weak before money is spent on national phases, and India works with WIPO on traditional knowledge protection - a theme Unit V returns to.",
            ],
            bullets: [
              "WIPO: born of the 1967 Stockholm Convention, a UN specialized agency since 1974, headquartered in Geneva with more than 190 members.",
              "Mandate: promote IP protection worldwide, harmonize laws, administer registration systems, arbitrate disputes.",
              "Paris 1883 is industrial property: national treatment plus priority of 12 months for patents and 6 for designs and marks.",
              "Berne 1886 is copyright: protection automatic on creation, no formalities, minimum term of life plus 50 years.",
              "PCT 1970: one international application, one search, then national phase - India joined in 1998 and the Madrid Protocol in 2013.",
            ],
            table: {
              caption: "WIPO's classic treaties and what each promises.",
              headers: ["Treaty", "Year", "Covers", "Key principle"],
              rows: [
                ["Paris Convention", "1883", "patents, marks, designs", "national treatment; priority right"],
                ["Berne Convention", "1886", "literary and artistic works", "automatic protection, no formalities"],
                ["Patent Cooperation Treaty", "1970", "patents", "single application, national phase"],
                ["Madrid System", "1891", "trademarks", "international registration of marks"],
                ["WCT and WPPT", "1996", "digital-era copyright", "online rights, anti-circumvention"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The PCT route to foreign patent protection",
              caption:
                "One application through WIPO, then national decisions - the flow an Indian filer follows.",
              steps: [
                { label: "Priority filing in India", note: "establishes the first date" },
                { label: "International application via WIPO", note: "within 12 months" },
                { label: "International search and publication", note: "search report flags prior art" },
                { label: "National phase entry", note: "about 31 months in India and most states" },
                { label: "Grant or refusal", note: "decided under each national law" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Paris is industrial, Berne is artistic - remember 'P before B: machines before books'. Both treaties guarantee national treatment, so write it once and use it twice in any treaty answer.",
            },
            keyTerms: [
              { term: "WIPO", definition: "The World Intellectual Property Organization, the UN agency in Geneva that administers IP treaties and global filing systems." },
              { term: "National treatment", definition: "The treaty promise that a member state treats foreign applicants no worse than its own nationals." },
              { term: "Priority right", definition: "A filing in one member state preserves its date for later filings abroad - 12 months for patents, 6 for marks and designs." },
            ],
            examQuestions: [
              {
                q: "What is WIPO? Explain its objectives and the main treaties it administers, showing how the PCT helps an Indian applicant seek foreign patent protection.",
                marks: 7,
                outline: [
                  "Define WIPO: 1967 Stockholm Convention, UN specialized agency since 1974, Geneva, more than 190 members.",
                  "List objectives: promote protection, harmonize laws, administer treaties, offer dispute resolution services.",
                  "Summarize Paris: industrial property, national treatment, 12-month priority.",
                  "Summarize Berne: copyright, automatic protection, minimum term of life plus 50 years.",
                  "Explain the PCT: single international application, international search and publication, national phase.",
                  "Walk the Indian route: priority filing, 12-month window, national phase entry by about 31 months.",
                  "Conclude with India's membership: Paris and PCT 1998, Madrid Protocol 2013.",
                ],
              },
              {
                q: "State the two key principles the Paris Convention guarantees to foreign applicants.",
                marks: 2,
              },
              {
                q: "What advantage does the PCT offer over filing separately in each country? Give the Indian time limit for national phase entry.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.3",
            title: "The TRIPS Agreement",
            body: [
              "The Agreement on Trade-Related Aspects of Intellectual Property Rights was negotiated in the Uruguay Round and entered force with the World Trade Organization in 1995. TRIPS brings seven areas under one roof: copyright and related rights, trademarks, geographical indications, industrial designs, patents, layout-designs of integrated circuits, and undisclosed information including trade secrets. It does not harmonize laws; it sets minimum standards every WTO member must meet, and it ties IP to trade because a member that fails to protect IP can face dispute settlement and trade retaliation - a far stronger enforcement spine than the classic WIPO treaties carry.",
              "Three ideas carry TRIPS. First, the twin principles of national treatment and most-favoured-nation treatment: any advantage given to the nationals of one member must be extended to all. Second, minimum standards of protection - twenty years for patents, initial trademark registration terms of at least seven years, copyright of at least life plus fifty, and special floors for GIs, designs and secrets. Third, enforcement with teeth: civil and criminal procedures, border measures, and WTO dispute settlement that can end in retaliation. Transition periods gave developing countries breathing space, and the 2001 Doha Declaration on Public Health confirmed that TRIPS should be read to protect health, including through compulsory licensing.",
              "TRIPS rewrote Indian law. The Patents Act had to be amended in 1999, 2002 and 2005: the mailbox for pharmaceutical applications, exclusive marketing rights, product patents in all fields, and Section 3(d) to police evergreening - a clause the Supreme Court later defended in Novartis. New statutes were enacted for trademarks, GI, designs, chip layouts and plant varieties to meet the agreement's standards. The compulsory licensing provisions - Articles 31 and 31bis - are the flexibilities India later used in the Nexavar licence. For exam answers, always pair 'minimum standards' with 'enforcement' and 'dispute settlement': that triad is TRIPS.",
            ],
            bullets: [
              "TRIPS: negotiated in the Uruguay Round, effective 1995 with the WTO; IP tied to trade obligations.",
              "Seven areas: copyright and related rights, trademarks, GI, industrial designs, patents, IC layout-designs, undisclosed information.",
              "Twin principles: national treatment and most-favoured-nation treatment for all WTO members.",
              "Minimum standards, not harmonization: 20-year patents, at least 7-year renewable mark terms, life-plus-50 copyright floors.",
              "Enforcement and dispute settlement: civil, criminal and border measures, WTO panels, retaliation - plus Doha's public health reading.",
            ],
            table: {
              caption: "TRIPS at a glance.",
              headers: ["Feature", "What it means", "Example"],
              rows: [
                ["Minimum standards", "every member must meet floors", "20-year patent term everywhere"],
                ["National treatment", "foreigners treated like nationals", "Indian and US filers equal"],
                ["MFN treatment", "favours to one member extend to all", "a bilateral perk spreads"],
                ["Enforcement", "civil, criminal, border remedies", "customs seizes fake goods"],
                ["Dispute settlement", "WTO panels can authorize retaliation", "cross-retaliation in trade"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The TRIPS architecture, top to bottom",
              caption:
                "Dispute settlement sits on enforcement, enforcement on standards, standards on principles, and all of it on the GATT trade framework.",
              layers: [
                { label: "Dispute settlement", note: "WTO panels, retaliation" },
                { label: "Enforcement obligations", note: "civil, criminal, border measures" },
                { label: "Minimum standards", note: "terms and scope for all seven areas" },
                { label: "Basic principles", note: "national treatment and MFN" },
                { label: "GATT trade framework", note: "IP tied to trade concessions" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'Features of TRIPS' is the most repeated 7-marker of Unit I. Structure it as principles, standards, enforcement, dispute settlement - then one line on how it forced India's 1999-2005 patent amendments.",
            },
            keyTerms: [
              { term: "TRIPS", definition: "The 1995 WTO agreement setting minimum IP standards enforceable through trade dispute settlement." },
              { term: "Most-favoured-nation treatment", definition: "Any IP advantage a member gives to nationals of one country must be given to nationals of all members." },
              { term: "Minimum standards", definition: "TRIPS floors - such as 20-year patents - that every member's law must meet, leaving higher protection optional." },
            ],
            examQuestions: [
              {
                q: "Explain the objectives and features of the TRIPS Agreement, and describe how it changed Indian patent law between 1999 and 2005.",
                marks: 7,
                outline: [
                  "State origin: Uruguay Round, in force 1995 under the WTO; IP linked to trade.",
                  "List the seven areas of IP that TRIPS covers.",
                  "Explain national treatment and MFN as the twin principles.",
                  "Explain minimum standards with concrete terms: 20-year patents, 7-year renewable marks, life-plus-50 copyright.",
                  "Explain enforcement and WTO dispute settlement with the possibility of retaliation.",
                  "Trace India's compliance: mailbox and EMR (1999), 20-year term (2002), product patents and Section 3(d) (2005).",
                  "Close with the 2001 Doha Declaration: TRIPS read to protect public health.",
                ],
              },
              {
                q: "Name the seven categories of intellectual property covered by TRIPS.",
                marks: 3,
              },
              {
                q: "What is the difference between national treatment and most-favoured-nation treatment under TRIPS?",
                marks: 2,
              },
            ],
          },
          {
            number: "1.4",
            title: "IPR in India: the legislative landscape",
            body: [
              "India protects intellectual property through a set of central statutes enacted at different moments of history. The Copyright Act 1957 is the oldest, still governing works, performers and broadcasts after the 2012 amendment. The Patents Act 1970 replaced the colonial Patents and Designs Act 1911. To meet TRIPS, Parliament added the Trademarks Act 1999, the Geographical Indications Act 1999, the Designs Act 2000, the Semiconductor Integrated Circuits Layout-Design Act 2000 and the Protection of Plant Varieties and Farmers' Rights Act 2001. Trade secrets stand apart: India has no registration statute for them, and protection flows from contract law, equity and the law of breach of confidence.",
              "Each right has its registry. Patents and designs sit with the Office of the Controller General of Patents, Designs and Trademarks, with the patent headquarters in Kolkata and branches in Delhi, Mumbai and Chennai. The Trade Marks Registry administers marks; the Copyright Office sits in New Delhi; the GI Registry is in Chennai; and the PPV and FR Authority registers plant varieties. Appeals once went to the Intellectual Property Appellate Board, but it was abolished in 2021 and its work passed to the high courts. The National IPR Policy of 2016 and its CIPAM cell drive awareness, filing and commercialization.",
              "For a civil engineer the landscape matters in three ways. The firm's drawings, tender documents and BIM models are copyright; the logo and brand are trademarks; a new composite or construction method may be patentable; and the tender pricing strategy is a trade secret guarded by NDAs. India's challenges remain pendency at the offices, piracy levels for software and media, and slow court enforcement - which is why policy documents push digitization, e-filing and commercial divisions of the high courts. Any 'IPR in India' answer should end with this honest gap between strong statutes and weak enforcement.",
            ],
            bullets: [
              "The statutes: Copyright 1957, Patents 1970, Trademarks 1999, GI 1999, Designs 2000, Semiconductor layouts 2000, Plant varieties 2001.",
              "Trade secrets: no registration statute in India - protected by contract, equity and breach of confidence.",
              "Registries: Patent Office (Kolkata HQ), Trade Marks Registry, Copyright Office (New Delhi), GI Registry (Chennai), PPV and FR Authority.",
              "Appeals: the IPAB was abolished in 2021; high courts now hear IP appeals and revocations.",
              "Policy: the National IPR Policy 2016 with CIPAM promotes filing, awareness and commercialization.",
            ],
            table: {
              caption: "Who registers what in India.",
              headers: ["Right", "Office", "Location"],
              rows: [
                ["Patents", "Indian Patent Office", "Kolkata HQ; Delhi, Mumbai, Chennai branches"],
                ["Trademarks", "Trade Marks Registry", "under the CGPDTM"],
                ["Copyright", "Copyright Office", "New Delhi"],
                ["Geographical indications", "GI Registry", "Chennai"],
                ["Industrial designs", "Controller of Designs", "Kolkata"],
                ["Plant varieties", "PPV and FR Authority", "New Delhi"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Indian IP law before and after TRIPS",
              caption:
                "The 1999-2005 wave replaced a closed, process-patent regime with a full TRIPS-compliant statute map.",
              left: {
                heading: "Before TRIPS (1970-1994)",
                items: [
                  "Process patents only for food, drugs and chemicals",
                  "No product patents in pharma and agrochemicals",
                  "Marks under the 1958 Trade and Merchandise Marks Act",
                  "No GI statute; designs under the 1911 Act",
                  "Copyright term shorter than today's life plus 60",
                ],
              },
              right: {
                heading: "After TRIPS (1999-2005)",
                items: [
                  "Product patents in all fields of technology",
                  "Mailbox and exclusive marketing rights from 1999",
                  "New Trademarks, GI and Designs Acts, 1999-2000",
                  "Section 3(d) guard against evergreening",
                  "Twenty-year term and modern, digitized registries",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "Year slips cost easy marks",
              body: "Trademarks Act 1999, GI Act 1999, Designs Act 2000, Semiconductor Act 2000, PPV and FR Act 2001. Memorize the five as one string - 99, 99, 00, 00, 01 - and the statute-map question is free marks.",
            },
            keyTerms: [
              { term: "National IPR Policy", definition: "India's 2016 policy creating CIPAM and pushing IP awareness, filing and commercialization." },
              { term: "CIPAM", definition: "Cell for IPR Promotion and Management, the body implementing the National IPR Policy." },
              { term: "IPAB", definition: "The Intellectual Property Appellate Board (2010-2021), whose functions returned to the high courts after abolition." },
            ],
            examQuestions: [
              {
                q: "Describe the legislative framework of intellectual property protection in India, naming each statute, what it protects and the office that administers it.",
                marks: 7,
                outline: [
                  "Open with the two pre-TRIPS pillars: Copyright Act 1957 and Patents Act 1970.",
                  "List the TRIPS-era statutes with years: Trademarks 1999, GI 1999, Designs 2000, Semiconductor 2000, PPV and FR 2001.",
                  "State what each protects, one clause per statute.",
                  "Note trade secrets' special position: contractual protection without a registry.",
                  "Map the administering offices: Patent Office, Trade Marks Registry, Copyright Office, GI Registry, Plant Authority.",
                  "Add the appellate change: IPAB abolished 2021, high courts now hear appeals.",
                  "Conclude with the National IPR Policy 2016 and the enforcement-gap reality.",
                ],
              },
              {
                q: "Which office registers geographical indications in India, and where is it located?",
                marks: 2,
              },
              {
                q: "Name any three statutes India enacted to comply with TRIPS, with their years.",
                marks: 3,
              },
            ],
          },
          {
            number: "1.5",
            title: "The Patents Act 1970: an overview",
            body: [
              "The Patents Act 1970 grew from the Ayyangar Committee's 1959 report, which found the colonial Patents and Designs Act 1911 too generous to foreign patentees. Justice Ayyangar's philosophy was balance: patents should stimulate Indian invention without permitting monopoly over essentials. The 1970 Act therefore granted process - not product - patents for food, drugs and chemicals, kept those terms short, excluded methods of agriculture and horticulture, and armed the Controller with strong powers. That careful balance between incentive and access is the Act's signature, and it survived every later amendment.",
              "Three amendments aligned the Act with TRIPS. The 1999 amendment introduced the mailbox - applications for pharmaceutical and agro-chemical product inventions could be filed pending the change - and exclusive marketing rights. The 2002 amendment extended the term to twenty years and modernized definitions. The 2005 amendment delivered full product patent protection, rewrote Section 3(d) to demand enhanced efficacy for new forms of known substances, and consolidated the opposition system into pre-grant and post-grant tracks. Together they converted a closed, access-first regime into a TRIPS-compliant one that still keeps its safeguards.",
              "The Act's architecture is easy to map. Sections 3 and 4 list what cannot be patented - discoveries, mathematical and business methods, computer programs per se, and under Section 3(d) new forms of known substances without enhanced efficacy. Sections 6 to 75 govern application, publication, examination, opposition and grant; Sections 48 to 62 the patentee's rights and their limits; Sections 84 to 92 compulsory licensing and government use; Section 104 the forum for infringement suits; and Section 146 the annual working statement. A patent runs twenty years from the priority date, is territorial, and follows first-to-file.",
            ],
            bullets: [
              "Origin: the Ayyangar Committee 1959 - the 1970 Act replaced the 1911 Act with a balance philosophy.",
              "1970 stance: process patents only for food, drugs and chemicals, with short terms and a strong Controller.",
              "Amendment trail: 1999 mailbox and EMR; 2002 twenty-year term; 2005 product patents and Section 3(d).",
              "Exclusions: Sections 3 and 4 - discoveries, mathematical and business methods, programs per se, new uses without efficacy.",
              "Term and nature: 20 years from the priority date, territorial, first-to-file, kept alive by renewal fees.",
            ],
            table: {
              caption: "The Patents Act amendment trail.",
              headers: ["Year", "Trigger", "Key changes"],
              rows: [
                ["1970", "Ayyangar report", "new Act; process patents for pharma and food"],
                ["1999", "TRIPS obligations", "mailbox applications; exclusive marketing rights"],
                ["2002", "TRIPS phase two", "20-year term; updated definitions"],
                ["2005", "full TRIPS compliance", "product patents; Section 3(d) efficacy test"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "Life of an Indian patent",
              caption:
                "From drafting to the public domain - the stages every procedure answer walks through.",
              stages: [
                { label: "Draft and file", note: "provisional or complete specification" },
                { label: "Publication", note: "at 18 months, or earlier on request" },
                { label: "Examination on request", note: "within 48 months of priority" },
                { label: "Grant", note: "after objections are answered" },
                { label: "Renewal", note: "annual fees keep it alive" },
                { label: "Public domain", note: "at the end of year 20" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Questions love the 1999-2002-2005 sequence. Anchor each year to one word - mailbox, term, product patents - and remember Section 3(d) rides into the story with 2005.",
            },
            keyTerms: [
              { term: "Ayyangar Committee", definition: "The 1959 expert committee whose balance philosophy shaped the Patents Act 1970." },
              { term: "Mailbox provision", definition: "The 1999 mechanism that received pharmaceutical product applications until product patents arrived in 2005." },
              { term: "Section 3(d)", definition: "The clause refusing patents for new forms of known substances unless they show enhanced efficacy." },
            ],
            examQuestions: [
              {
                q: "Trace the evolution of the Patents Act 1970 through its TRIPS-era amendments, and explain the purpose of Section 3(d).",
                marks: 7,
                outline: [
                  "Recall the colonial 1911 Act and the Ayyangar Committee's 1959 critique.",
                  "State the 1970 Act's philosophy: balance, process patents for food and drugs, short terms.",
                  "Explain the 1999 amendment: mailbox applications and exclusive marketing rights.",
                  "Explain the 2002 amendment: twenty-year term and modern definitions.",
                  "Explain the 2005 amendment: product patents in all fields, unified opposition system.",
                  "Define Section 3(d): new forms of known substances need enhanced efficacy - the evergreening guard.",
                  "Conclude with Novartis 2013 as the Supreme Court's endorsement of Section 3(d).",
                ],
              },
              {
                q: "What was the mailbox provision, and which amendment introduced it?",
                marks: 2,
              },
              {
                q: "List any four categories of inventions excluded under Section 3 of the Patents Act.",
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
      title: "Patents",
      summary:
        "The heart of the subject: the three patentability criteria with their statutory tests, the filing procedure and its statutory time limits, the drafting of the specification and its claims, what counts as infringement with its defences and remedies, and the landmark cases - Bishwanath Prasad, Dimminaco, Novartis and Natco - that give the doctrine its shape.",
      chapter: {
        number: "02",
        title: "Patents: Criteria, Procedure, Drafting and Enforcement",
        intro:
          "Unit II follows a patent from idea to courtroom. It begins with the three criteria every invention must satisfy - novelty, inventive step and industrial application - and the Sections 3 and 4 exclusions that operate beside them. It then traces the filing procedure through publication, examination and opposition with their time limits, teaches the drafting of the complete specification whose claims define the monopoly, explains infringement with its defences and remedies, and closes with the case studies every examiner reaches for.",
        inOneBreath:
          "A patentable invention is new (not anticipated anywhere), inventive (non-obvious technical advance, Section 2(ja)) and industrially applicable (Section 2(ac)) - and not excluded by Sections 3 and 4. Filing runs: search, provisional or complete specification (12 months), publication at 18 months, request for examination within 48 months, First Examination Report answered within 12 months, oppositions under Section 25, then grant, renewal and Form 27 working statements to year 20. Drafting: Section 10 parts from title to abstract; claims (preamble, comprising versus consisting of, independent and dependent) define the monopoly and cannot later add new matter. Infringement: Section 48 rights, claim-reading and equivalents, Section 104A burden shift for process patents, Section 107A Bolar and parallel-import safe harbours; remedies are civil - interim injunction on the triple test, permanent injunction, damages or accounts. Cases: Bishwanath Prasad (1979, obviousness), Dimminaco (2001, living organisms), Novartis (2013, Section 3(d) therapeutic efficacy), Natco v Bayer (2012, Section 84 compulsory licence).",
        sections: [
          {
            number: "2.1",
            title: "Patentability criteria: novelty, inventive step, industrial application",
            body: [
              "Section 2(1)(j) defines an invention as a new product or process involving an inventive step and capable of industrial application. That single sentence hides the three classic criteria. Novelty is judged against prior art - every publication, use or earlier application anywhere in the world before the priority date; a single anticipating disclosure destroys it. Section 2(1)(l) calls an invention new when it has not been anticipated by publication in any locality or by prior use in India. A thesis put online, a conference paper, even the inventor's own marketing leaflet can each kill the claim.",
              "Inventive step, defined in Section 2(ja), is the hard one: the invention must involve a technical advance over existing knowledge, have economic significance, or both, and that advance must not be obvious to a person skilled in the art. The Supreme Court in Bishwanath Prasad Radhey Shyam v Hind Metal Industries (1979) refused a patent where the change was a mere workshop improvement - something any skilled mechanic would try first. Examiners use the problem-solution lens: identify the closest prior art, state the problem it leaves open, and ask whether the claimed solution was obvious to try.",
              "Industrial application, Section 2(ac), demands that the invention can be made or used in any industry, which excludes abstract science and purely mental acts. Test the three criteria on a civil engineering example: a fibre-reinforced precast culvert segment. Novelty fails if a journal paper already disclosed that dosage; inventive step survives only if the dosage was surprisingly effective; industrial application is clear because precast plants can produce the segment at once. Remember the extra gate: Sections 3 and 4 exclusions apply after the criteria - a load-optimizing routine may be new and useful, but Section 3(k) blocks computer programs per se, and Section 4 bars atomic energy inventions.",
            ],
            bullets: [
              "Invention (Section 2(1)(j)): a new product or process with an inventive step and industrial application.",
              "Novelty (Section 2(1)(l)): no prior publication or use anywhere; one anticipating document is fatal.",
              "Inventive step (Section 2(ja)): technical advance or economic significance that is non-obvious to a person skilled in the art.",
              "Industrial application (Section 2(ac)): can be made or used in any industry - abstract ideas fail.",
              "Gate two: Sections 3 and 4 exclusions apply even when all three criteria are met (Bishwanath Prasad 1979 for obviousness).",
            ],
            table: {
              caption: "The three criteria as examiner questions.",
              headers: ["Criterion", "Basis", "Question", "Typical failure"],
              rows: [
                ["Novelty", "Sec 2(1)(l)", "was it disclosed before the priority date?", "thesis published a year earlier"],
                ["Inventive step", "Sec 2(ja)", "was the advance obvious to a skilled person?", "mere workshop modification"],
                ["Industrial application", "Sec 2(ac)", "can any industry make or use it?", "abstract theorem"],
                ["Statutory exclusion", "Secs 3 and 4", "is the subject matter barred?", "computer program per se"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "Patentability check at the office",
              caption:
                "The same three criteria decide every application - where the failure lies only changes the section quoted.",
              start: "A new culvert-segment design reaches the patent office",
              branches: [
                {
                  label: "Novel, inventive, industrially applicable and not excluded",
                  outcome: "Application proceeds to examination and can be granted",
                  good: true,
                },
                {
                  label: "Anticipated by a published paper or prior use",
                  outcome: "Refused for want of novelty under Section 2(1)(l)",
                  good: false,
                },
                {
                  label: "Only a workshop improvement or an excluded category",
                  outcome: "Refused as obvious under 2(ja) or barred by Sections 3 and 4",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote the section numbers - 2(1)(j), 2(1)(l), 2(ja), 2(ac) - and attach Bishwanath Prasad 1979 as the inventive step case. A criteria answer without sections reads like a general essay, not a law answer.",
            },
            keyTerms: [
              { term: "Novelty", definition: "The requirement that the invention was not disclosed by publication or use anywhere before the priority date." },
              { term: "Inventive step", definition: "A technical advance or economic significance not obvious to a person skilled in the art (Section 2(ja))." },
              { term: "Prior art", definition: "The body of earlier publications, uses and applications against which novelty and obviousness are judged." },
            ],
            examQuestions: [
              {
                q: "Explain the three criteria of patentability under the Patents Act 1970 with statutory references, tests and one decided case, applying them to a civil engineering invention.",
                marks: 7,
                outline: [
                  "Define invention under Section 2(1)(j) as the umbrella of the three criteria.",
                  "Explain novelty (Section 2(1)(l)) with the single-anticipation rule and what counts as prior art.",
                  "Explain inventive step (Section 2(ja)) with the person-skilled-in-the-art standard.",
                  "Cite Bishwanath Prasad Radhey Shyam v Hind Metal (1979): a workshop improvement is not invention.",
                  "Explain industrial application (Section 2(ac)) and why abstract science fails.",
                  "Apply all three to a fibre-reinforced precast culvert segment.",
                  "Close with Sections 3 and 4 as the separate exclusion gate.",
                ],
              },
              {
                q: "What is prior art, and how does a single anticipating publication affect a patent application?",
                marks: 3,
              },
              {
                q: "Define industrial applicability under the Patents Act.",
                marks: 2,
              },
            ],
          },
          {
            number: "2.2",
            title: "Patent filing procedure in India",
            body: [
              "Filing begins before the form does. A prior art search and a patentability opinion tell you whether to spend money at all. The applicant then files Form 1 with either a provisional specification - a cheap device that secures a priority date while the invention matures, giving twelve months to file the complete specification - or the complete specification directly. Fees differ for natural persons, startups, small entities and corporates, and e-filing is the norm. Convention applicants from a Paris country have twelve months; PCT applicants enter the national phase by the thirty-first month from priority.",
              "After filing, the application is published at eighteen months unless early publication is requested. Nothing substantive happens until someone files a request for examination within forty-eight months of the priority date. An examiner then studies the file and issues the First Examination Report, raising objections - clarity, inventive step, Section 3 exclusions. The applicant must respond within twelve months, amending claims and arguing patentability. A pre-grant opposition under Section 25(1) lets any person oppose before grant on listed grounds; after grant, an interested person has twelve months to bring a post-grant opposition under Section 25(2).",
              "Once objections are cleared and any opposition fails, the Controller grants and publishes the patent in the journal. The patentee pays renewal fees to keep the patent alive to year twenty, files annual working statements under Section 146 (Form 27), and can record assignments and licences in the register. A worked timeline reads: priority in January 2024, publication July 2025, examination request early 2026, First Examination Report late 2026, response in 2027, grant in 2027, protection to 2044. Draw that line in the exam - the time limits are where the marks hide.",
            ],
            bullets: [
              "Pre-filing: prior art search and patentability opinion before spending on drafting.",
              "Provisional specification secures the date; the complete specification is due within 12 months.",
              "Publication at 18 months; examination only on request within 48 months of priority.",
              "FER answered within 12 months; Section 25(1) pre-grant and 25(2) post-grant oppositions.",
              "Grant, then annual renewals and Form 27 working statements keep rights alive to year 20.",
            ],
            codeExample: {
              language: "text",
              caption: "A typical Indian patent prosecution timeline, from priority to public domain.",
              code: `INDIAN PATENT PROSECUTION - A TYPICAL TIMELINE

2024-01-10  Priority date - complete specification filed
2025-07-10  Publication (18 months from priority)
2026-01-05  Request for examination (within 48 months)
2026-09-20  First Examination Report issued
2027-03-15  Response to FER - claims amended, objections met
2027-05-02  Pre-grant opposition filed and heard
2027-08-02  Patent granted; published in the Journal
2028 onward Annual renewal fees - lapse if unpaid
2044-01-10  Term ends; the invention enters the public domain`,
            },
            diagram: {
              kind: "flow",
              title: "Route from idea to granted patent",
              caption:
                "Every stage carries a statutory clock - quote the months beside each box.",
              steps: [
                { label: "Search and file", note: "provisional buys 12 months" },
                { label: "Publication", note: "18 months from priority" },
                { label: "Request for examination", note: "within 48 months" },
                { label: "FER and response", note: "answer within 12 months" },
                { label: "Opposition window", note: "Section 25(1) before grant" },
                { label: "Grant and renewal", note: "protect to year 20" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Memorize the clock: 12 months to complete the specification, 18 months to publication, 48 months to request examination, 12 months to answer the FER. One timeline diagram earns marks in any procedure question.",
            },
            keyTerms: [
              { term: "Provisional specification", definition: "A preliminary filing that secures the priority date, to be completed within twelve months." },
              { term: "First Examination Report", definition: "The examiner's list of objections that the applicant must answer before grant." },
              { term: "Pre-grant opposition", definition: "Section 25(1) proceedings allowing any person to oppose a patent application before grant." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure for obtaining a patent in India from drafting to grant, with the statutory time limits at each stage.",
                marks: 7,
                outline: [
                  "Begin with the prior art search and the provisional-versus-complete decision (12 months).",
                  "Describe Form 1 filing, the fee categories and e-filing.",
                  "State publication at 18 months with the early-publication option.",
                  "Explain the request for examination within 48 months and the FER cycle.",
                  "Explain the response within 12 months, hearings and amendments.",
                  "Cover Section 25(1) pre-grant and 25(2) post-grant oppositions with the grounds.",
                  "Close with grant, renewal fees, working statements and the 20-year term.",
                ],
              },
              {
                q: "Distinguish a provisional specification from a complete specification.",
                marks: 3,
              },
              {
                q: "Within what period must a request for examination be filed, and what happens if it is not?",
                marks: 2,
              },
            ],
          },
          {
            number: "2.3",
            title: "Drafting the patent specification",
            body: [
              "The complete specification is both a technical document and a legal weapon. Its mandatory parts, set by Section 10, are the title, the field of invention, the background and prior art, the objects, the statement of invention, a summary, a brief description of the drawings, a detailed description, a statement of the best method, the claims and an abstract. The enablement rule is crucial: a person skilled in the art, reading only your document, must be able to carry out the invention. A brilliant idea described vaguely is legally worthless, and the best method known must be disclosed, not hoarded.",
              "Claims define the monopoly - the name of the game is the claim. Each claim has a preamble, a transitional phrase and a body: 'comprising' opens the claim to additional elements while 'consisting of' closes it. Independent claims stand alone; dependent claims add features and provide fallback positions if the broad claim falls. Drafting strategy is breadth management: claim 1 as broad as the prior art allows, dependent claims narrowing toward a safe core, and a method claim beside the product claim. Later amendments cannot add new matter, so what you write at filing is what you will litigate.",
              "Consider a modular precast culvert system. Claim 1 covers the system: tongue-and-groove segments, an elastomeric gasket, and post-tensioning anchors that let crews assemble without in-situ concrete. Claims 2 and 3 add fibre reinforcement and a neoprene gasket profile; claim 4 claims the installation method. Every element of every claim must find support in the description - claims not fairly based on the disclosed matter are objectionable. Engineers drafting for their firm should describe geometry, materials, tolerances and test data: numbers persuade examiners, adjectives do not.",
            ],
            bullets: [
              "Complete specification parts (Section 10): title, field, background, objects, statement of invention, summary, drawings description, detailed description, claims, abstract.",
              "Enablement: a person skilled in the art must be able to work the invention from the text alone; the best method must be disclosed.",
              "Claim anatomy: preamble, transitional phrase and body; 'comprising' is open, 'consisting of' is closed.",
              "Independent claims set the width; dependent claims add features and provide fallback positions.",
              "Amendments cannot add new matter, and claims must be fairly based on the description.",
            ],
            codeExample: {
              language: "text",
              caption: "A four-claim set for a modular precast culvert system - study the preamble-to-body pattern.",
              code: `CLAIMS - MODULAR PRECAST CULVERT SYSTEM

1. A modular precast culvert system comprising:
   a plurality of precast segments, each segment having a
     tongue-and-groove joint along its abutting faces;
   an elastomeric gasket seated in each groove; and
   post-tensioning anchors passing through aligned bores,
   wherein adjacent segments interlock without in-situ concrete.

2. The system of claim 1, wherein each segment is made of
   fibre-reinforced concrete.

3. The system of claim 1, wherein the gasket is a neoprene
   bulb profile.

4. A method of installing the system of claim 1, comprising
   the steps of bedding, placing, gasket-checking and
   post-tensioning the segments in sequence.`,
            },
            diagram: {
              kind: "layers",
              title: "Anatomy of a complete specification",
              caption:
                "Readers start at the claims; drafters must build every layer beneath them.",
              layers: [
                { label: "Claims", note: "the monopoly - read first, fought over most" },
                { label: "Abstract", note: "a short technical snapshot" },
                { label: "Detailed description", note: "enablement and best method" },
                { label: "Brief description of drawings", note: "what each figure shows" },
                { label: "Background and objects", note: "the problem and the goal" },
                { label: "Title and field", note: "the subject area, stated first" },
              ],
            },
            callout: {
              type: "warning",
              title: "Breadth cuts both ways",
              body: "Two classic drafting errors: claiming so broadly that the examiner cites a decade of prior art, and describing so vaguely that the claim is not fairly based on the description. Write a three-width claim set - broad, medium, narrow - and the risk is covered.",
            },
            keyTerms: [
              { term: "Complete specification", definition: "The full technical and legal disclosure ending in claims, filed within twelve months of a provisional." },
              { term: "Claim", definition: "The numbered sentence defining the boundary of the patentee's monopoly - independent or dependent." },
              { term: "Enablement", definition: "The disclosure requirement that the invention can be carried out by a person skilled in the art from the text." },
            ],
            examQuestions: [
              {
                q: "What are the essential parts of a complete patent specification? Explain the role and structure of claims with an example.",
                marks: 7,
                outline: [
                  "List the Section 10 parts in order, from title to abstract.",
                  "Explain the field, background and objects as the problem-setting sections.",
                  "Explain the detailed description with enablement and the best method.",
                  "State that claims define the scope of protection - the name of the game is the claim.",
                  "Explain claim anatomy: preamble, transitional phrase (comprising versus consisting of), body.",
                  "Distinguish independent and dependent claims using the precast culvert example.",
                  "Close with the no-new-matter rule and the fair-basis requirement.",
                ],
              },
              {
                q: "Why are claims called the most important part of a patent?",
                marks: 2,
              },
              {
                q: "Explain the difference between 'comprising' and 'consisting of' in a claim.",
                marks: 3,
              },
            ],
          },
          {
            number: "2.4",
            title: "Patent infringement and remedies",
            body: [
              "Section 48 gives the patentee the exclusive right to make, use, offer for sale, sell or import the patented product, or to use and import the patented process. Anyone who does any of those acts without consent infringes. Infringement is judged by reading the claims onto the defendant's product: literal infringement when every element appears, and infringement under the doctrine of equivalents - the pith-and-marrow approach Indian courts borrow - when the differences are insubstantial. For process patents, Section 104A shifts the burden: once the plaintiff shows an identical product, the defendant must prove an independent process.",
              "Suits lie before the district court, or before the high court where a revocation counterclaim takes the case up (Section 104). Defendants rarely surrender: they deny infringement, raise the Section 107 defences, attack validity by counterclaim, or claim Section 107A's two safe harbours - the Bolar exemption, which allows the patented invention to be used for generating regulatory submission data, and parallel import of patented products put on the market by or with the owner's consent. The experimental-use carve-out protects research on the invention itself, and the Section 107 defences mirror the grounds of revocation.",
              "Remedies are civil only - unlike trademark and copyright, patent infringement carries no criminal prosecution. The patentee seeks an interim injunction under the triple test of prima facie case, balance of convenience and irreparable injury; then, at trial, a permanent injunction plus either damages or an account of profits, with seizure and destruction of infringing stock available. Anton Piller-type search and seizure orders let the plaintiff inspect premises and preserve evidence before it can be destroyed. Because litigation can outlast the patent itself, well-drafted licences and insurance are often the smarter commercial shields.",
            ],
            bullets: [
              "Section 48 rights: making, using, offering, selling, importing the product or process without consent.",
              "Reading claims: literal infringement, or insubstantial differences under the equivalents doctrine.",
              "Section 104A: an identical product from a patented process shifts the burden of proof to the defendant.",
              "Safe harbours: Section 107A Bolar exemption and parallel imports; plus experimental use and Section 107 defences.",
              "Remedies: interim and permanent injunctions, damages or accounts, seizure and destruction - civil only, no criminal route.",
            ],
            table: {
              caption: "What the patentee can ask the court for.",
              headers: ["Relief", "When", "Effect"],
              rows: [
                ["Interim injunction", "at filing of the suit", "freezes the accused acts pending trial"],
                ["Permanent injunction", "final decree", "the acts stop for the remaining term"],
                ["Damages", "final decree", "money for proven loss"],
                ["Account of profits", "final decree", "infringer disgorges gains (elected instead of damages)"],
                ["Anton Piller order", "interim", "inspect and seize evidence before destruction"],
              ],
            },
            diagram: {
              kind: "fork",
              title: "An alleged infringer is sued",
              caption:
                "Patent litigation usually resolves into one of three lanes - all from the patentee's perspective.",
              start: "A patentee sues a rival over an identical culvert joint",
              branches: [
                {
                  label: "Rival's product reads on every claim element",
                  outcome: "Injunction plus damages or an account of profits",
                  good: true,
                },
                {
                  label: "Rival proves a design-around or Bolar-type use",
                  outcome: "Suit dismissed; no infringement made out",
                  good: false,
                },
                {
                  label: "Rival counterclaims the patent is invalid",
                  outcome: "High court hears revocation alongside the suit",
                  good: false,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The interim injunction triple test - prima facie case, balance of convenience, irreparable injury - appears in patent, trademark and copyright answers alike. Learn it once, cite it in all three.",
            },
            keyTerms: [
              { term: "Doctrine of equivalents", definition: "Infringement found where the accused product differs only insubstantially from the claim elements." },
              { term: "Bolar exemption", definition: "Section 107A shield allowing use of a patented invention for regulatory approval submissions." },
              { term: "Account of profits", definition: "A monetary remedy forcing the infringer to hand over gains, elected instead of damages." },
            ],
            examQuestions: [
              {
                q: "What constitutes infringement of a patent under the Patents Act 1970? Explain the defences and the remedies available to the patentee.",
                marks: 7,
                outline: [
                  "Set out the Section 48 exclusive rights - make, use, offer, sell, import.",
                  "Explain claim reading: literal infringement and the equivalents approach.",
                  "Explain Section 104A burden shifting for process patents.",
                  "State the forum rule of Section 104 and the revocation counterclaim.",
                  "List defences: Section 107, Section 107A Bolar and parallel import, experimental use.",
                  "Explain remedies: interim injunction under the triple test, permanent injunction, damages or account, seizure.",
                  "Note that patent infringement is purely civil - contrast with trademark's criminal remedies.",
                ],
              },
              {
                q: "What is the Bolar exemption under Section 107A?",
                marks: 2,
              },
              {
                q: "When does Section 104A shift the burden of proof, and to whom?",
                marks: 3,
              },
            ],
          },
          {
            number: "2.5",
            title: "Patent case studies",
            body: [
              "Novartis AG v Union of India (2013) is the landmark. Novartis sought a patent on the beta-crystalline salt form of imatinib mesylate - the cancer drug Glivec - after earlier claims had been refused and opposed. The Supreme Court held that Section 3(d) demands enhanced therapeutic efficacy for a new form of a known substance, and that physical advantages alone do not count; Novartis had not established the efficacy leap. The application failed, the evergreening strategy of patenting successive refinements was blunted, and generic competition kept the drug affordable. Every element of this unit appears in the case: novelty, inventive step, Section 3(d), and the public health flexibilities TRIPS preserves.",
              "Natco Pharma v Bayer (2012) is the compulsory licensing case. Bayer's patented liver-and-kidney cancer drug Nexavar was priced beyond Indian patients - roughly Rs 2.8 lakh a month. Natco sought a licence under Section 84 three years after grant, offering the drug at about Rs 8,800. The Controller found all three grounds: the reasonable requirements of the public were unmet, the drug was not available at a reasonably affordable price, and the patent was not worked in India. A licence issued with a royalty to Bayer on net sales - about six to seven percent - and the case shows the working statement of Section 146 feeding directly into an access remedy.",
              "Two older cases fix the doctrine. Bishwanath Prasad Radhey Shyam v Hind Metal Industries (1979): an improvement that any skilled person would make is a workshop modification, not an inventive step - the everyday refusal ground. Dimminaco A.G. v Assistant Controller of Patents (Calcutta High Court, 2001): 'invention' is not limited to inanimate things, so a process using living organisms in vaccine manufacture is patentable subject matter. Read case studies as five-point notes - parties, year, provision, holding, lesson. Examiners reward the holding tied to a section number far more than a narrative of the litigation.",
            ],
            bullets: [
              "Novartis 2013: Section 3(d) requires enhanced therapeutic efficacy; evergreening refused; generics preserved.",
              "Natco v Bayer 2012: the first Indian compulsory licence - all three Section 84 grounds found; Nexavar priced at a fraction.",
              "Bishwanath Prasad 1979: a workshop improvement is not an inventive step (obviousness refusal).",
              "Dimminaco 2001: processes involving living organisms are patentable 'inventions'.",
              "Case-answer formula: parties, year, facts, provision, holding, one-line lesson.",
            ],
            table: {
              caption: "Five patent cases in one line each.",
              headers: ["Case", "Year", "Provision", "Point"],
              rows: [
                ["Novartis v Union of India", "2013", "Sec 3(d)", "efficacy means therapeutic efficacy"],
                ["Natco v Bayer", "2012", "Sec 84", "first compulsory licence, three grounds"],
                ["Bishwanath Prasad v Hind Metal", "1979", "Sec 2(ja)", "workshop improvement is obvious"],
                ["Dimminaco v Controller", "2001", "Sec 2(1)(j)", "living organisms patentable"],
                ["Monsanto v Nuziveedu", "2019", "Sec 3(j)", "transgenic trait patentability restored for trial"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Two landmark cases, two flexibilities",
              caption:
                "Section 3(d) polies the grant; Section 84 polices the granted patent - together they are India's TRIPS safety valves.",
              left: {
                heading: "Novartis 2013 - Section 3(d)",
                items: [
                  "Beta-crystalline Glivec application refused",
                  "Efficacy read as therapeutic efficacy",
                  "Evergreening strategy rejected",
                  "Outcome: affordable generics preserved",
                ],
              },
              right: {
                heading: "Natco v Bayer 2012 - Section 84",
                items: [
                  "Nexavar priced beyond patients",
                  "All three compulsory-licence grounds found",
                  "Licence with royalty about 6-7 percent",
                  "Outcome: access at a fraction of the price",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Write case studies in the five-point pattern - parties, year, facts, provision, holding, lesson - and keep each to five lines. Two well-told cases beat five vague names in every RGPV answer.",
            },
            keyTerms: [
              { term: "Evergreening", definition: "Patenting successive minor modifications to extend monopoly beyond the original term." },
              { term: "Compulsory licence", definition: "A government-granted licence letting a third party work a patent without the owner's consent (Section 84)." },
              { term: "Enhanced efficacy", definition: "Section 3(d)'s requirement that a new form of a known substance show better therapeutic effect." },
            ],
            examQuestions: [
              {
                q: "Discuss Novartis AG v Union of India (2013), explaining Section 3(d), the court's reasoning on efficacy, and the significance of the decision for Indian patent law.",
                marks: 7,
                outline: [
                  "Set the facts: the beta-crystalline form of imatinib mesylate (Glivec) after earlier refusals.",
                  "State the provision: Section 3(d) bars new forms of known substances without enhanced efficacy.",
                  "Explain the Court's reading: efficacy means therapeutic efficacy, not physical advantage.",
                  "Note that Novartis failed to prove enhanced therapeutic efficacy.",
                  "Hold: the application was refused and evergreening blocked.",
                  "Significance: public health flexibilities preserved; the generic industry protected.",
                  "One-line lesson: TRIPS allows such safeguards and India uses them.",
                ],
              },
              {
                q: "State the three grounds on which the Controller granted Natco a compulsory licence for Nexavar.",
                marks: 3,
              },
              {
                q: "What is 'evergreening' of patents?",
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
      title: "Copyrights and Trademarks",
      summary:
        "The two rights everyone meets as a consumer: copyright from its Section 13 categories through the bundle of economic and moral rights, terms and fair dealing; trademarks from the distinctiveness ladder through registration, statutory infringement and the passing-off tort; and geographical indications, the community right that ties quality to place.",
      chapter: {
        number: "03",
        title: "Copyright and Trademark Law",
        intro:
          "Unit III covers the two largest IP families by number of right-holders. Copyright protects expression - literary, dramatic, musical and artistic works, films and recordings - automatically, for the author's life plus sixty years, with moral rights beside the economic bundle and a closed fair-dealing list as the boundary. Trademarks protect commercial identity: the distinctiveness ladder from generic to fanciful, registration through the Trade Marks Journal with its opposition window, statutory infringement beside the common law tort of passing off, and - for goods whose quality belongs to a place - geographical indications.",
        inOneBreath:
          "Copyright (Act 1957) protects original expression - literary, dramatic, musical, artistic works, films, recordings - automatically on creation; Section 14 gives economic rights, Section 57 gives moral rights (paternity, integrity) that survive assignment, and Section 52 lists fair dealing (research, criticism, review, instruction). Terms: life plus 60 for authored works; 60 years from publication for films and recordings; performers 50, broadcasts 25. Trademarks (Act 1999, Section 2(zb)) distinguish goods and services; the ladder runs generic (never registrable), descriptive (secondary meaning), suggestive, arbitrary, fanciful (strongest); registration in 45 Nice classes, journal publication, four-month opposition, ten-year renewable term; Section 29 infringement versus passing off (goodwill, misrepresentation, damage - Durga Dutt 1965; Yahoo v Akash Arora 1999 for domain names); criminal remedies exist for marks. GIs (Act 1999) protect place-linked qualities, are community-owned and non-assignable, registered at Chennai for ten-year renewable terms - Darjeeling tea was first.",
        sections: [
          {
            number: "3.1",
            title: "Copyright: subject matter and scope",
            body: [
              "The Copyright Act 1957 protects, under Section 13, two families of works: original literary, dramatic, musical and artistic works; and cinematograph films and sound recordings, often called neighbouring rights because they protect those who communicate works rather than create them. Originality does not mean novelty - it means the work originates from the author and shows a minimal spark of creativity. Copyright protects expression, never ideas: the concept of a cantilever bridge is free for all, but a particular drawing, calculation report or animation of it belongs to its author until the term expires.",
              "No formalities stand between creation and protection: copyright exists the moment an original work is fixed, though registration under Sections 44 and 45 gives useful evidence in court. The definitions are generous to engineers. Literary works under Section 2(o) include computer programs, tables and compilations; artistic works under Section 2(c) include drawings, maps, charts, plans and works of architecture. So tender documents, structural drawings, BIM models, site photographs and software are all copyright works. R.G. Anand v Delux Films (1978) is the classic idea-expression case: the Supreme Court held that ideas, themes and plots are common property; only their concrete expression is protected.",
              "The boundaries matter as much as the core. Facts and news as such are not protected - the expression of them is. Titles, names and slogans sit outside copyright, though trademark law may pick them up. Works whose term has expired are in the public domain: anyone may reproduce Shakespeare or a century-old bridge drawing. Independent creation is a complete defence - two engineers who separately draft identical drawings infringe nobody - but access plus substantial similarity raises an inference of copying, which is exactly why disciplined firms archive drafts, versions and dates.",
            ],
            bullets: [
              "Section 13 families: original literary, dramatic, musical and artistic works; plus films and sound recordings (neighbouring rights).",
              "Originality: the work originates with the author and shows a minimal spark of creativity - novelty is not required.",
              "Idea-expression dichotomy: ideas are free, expression is owned (R.G. Anand v Delux Films, 1978).",
              "No formalities: copyright arises on creation; registration (Sections 44-45) is optional evidence.",
              "Engineer's works: drawings, maps, BIM models, software (literary works under Section 2(o)), works of architecture (Section 2(c)).",
            ],
            table: {
              caption: "What Section 13 protects.",
              headers: ["Category", "Examples", "Protection basis"],
              rows: [
                ["Literary work", "books, software, compilations, calculation reports", "original expression"],
                ["Dramatic work", "scripts, screenplays", "original expression"],
                ["Musical work", "compositions and notation", "original expression"],
                ["Artistic work", "drawings, maps, sculpture, architecture", "original expression"],
                ["Cinematograph film", "movies, video records", "neighbouring right"],
                ["Sound recording", "audio tracks", "neighbouring right"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The bundle of exclusive rights under Section 14",
              caption:
                "Copyright is a bundle - each layer can be licensed or assigned separately.",
              layers: [
                { label: "Reproduction right", note: "copying in any material form" },
                { label: "Communication to the public", note: "broadcast and online making available" },
                { label: "Translation and adaptation", note: "derivative versions" },
                { label: "Issue of copies", note: "first sale to the public" },
                { label: "Public performance", note: "dramatic and musical works live" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Quote R.G. Anand v Delux Films for the idea-expression rule, then show the engineer's stake: the concept is free, the drawing is owned. That one contrast carries the whole answer.",
            },
            keyTerms: [
              { term: "Originality", definition: "The requirement that a work originates from its author with a minimal degree of creativity - not novelty." },
              { term: "Idea-expression dichotomy", definition: "Copyright protects the expression of ideas, never the ideas, themes or methods themselves." },
              { term: "Neighbouring rights", definition: "Rights of performers, broadcasters and producers of films and sound recordings adjacent to authors' rights." },
            ],
            examQuestions: [
              {
                q: "What works are protected under the Copyright Act 1957? Explain originality and the idea-expression dichotomy with the leading case.",
                marks: 7,
                outline: [
                  "Set out the Section 13 families: literary, dramatic, musical, artistic; films and sound recordings.",
                  "Give engineering examples for each: drawings, reports, software, site films.",
                  "Define originality as origination plus a minimal spark of creativity.",
                  "State that no registration is needed; registration is only evidence (Sections 44-45).",
                  "Explain the idea-expression dichotomy with R.G. Anand v Delux Films (1978).",
                  "Apply it: the cantilever concept is free; the drawing and model are owned.",
                  "Close with boundaries: facts, titles and public-domain works are unprotected.",
                ],
              },
              {
                q: "How are computer programs treated under the Copyright Act 1957?",
                marks: 2,
              },
              {
                q: "Distinguish an idea from its expression with one civil engineering example.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.2",
            title: "Rights, term and fair dealing",
            body: [
              "Section 14 gives the owner a bundle of economic rights that vary with the class of work: to reproduce, to issue copies, to perform or communicate to the public, and to translate and adapt. Alongside sit moral rights under Section 57 - the right to claim authorship and the right to integrity, meaning the work may not be distorted or mutilated in ways that harm the author's reputation. Moral rights are independent of economic rights and survive assignment: even after selling the drawing set, the architect can object to a distorted reuse. Performers and broadcasters carry their own neighbouring rights on top.",
              "Ownership starts with the author under Section 17, with carve-outs: works made in the course of employment generally belong to the employer, and commissioned photographs and films follow their own rules. The term for literary, dramatic, musical and artistic works is the author's life plus sixty years, counted from the beginning of the calendar year after death; films, sound recordings, anonymous works, posthumous works and governmental works get sixty years from first publication. Joint authorship multiplies nothing - co-authors share a single term measured by the life of the last survivor.",
              "Copyright is not absolute; Section 52 lists the permitted acts - the Indian fair dealing defence. Research and private study, criticism and review, and reporting current events are fair, as are reproduction by teachers and pupils in the course of instruction, library copies and, after the 2012 amendment, transient or incidental copies made by technical processes. The list is closed - India does not follow the open-ended American fair use doctrine. Quoting a paragraph from a soil report in a critical review is fair dealing; photocopying the whole report for a commercial training course is not.",
            ],
            bullets: [
              "Section 14 economic rights: reproduce, issue copies, perform and communicate to the public, translate, adapt.",
              "Section 57 moral rights: paternity (claim authorship) and integrity (no distortion) - they survive assignment.",
              "First owner is the author (Section 17), subject to employment and commission carve-outs.",
              "Term: life plus 60 years for authored works; 60 years from publication for films, recordings and anonymous works.",
              "Section 52 fair dealing: a closed list - research, criticism, review, news reporting, instruction, libraries, transient copies.",
            ],
            table: {
              caption: "How long copyright lasts.",
              headers: ["Work", "Term", "Counted from"],
              rows: [
                ["Literary, dramatic, musical, artistic", "life plus 60 years", "year after the author's death"],
                ["Cinematograph film", "60 years", "first publication"],
                ["Sound recording", "60 years", "first publication"],
                ["Anonymous or pseudonymous", "60 years", "first publication"],
                ["Performers' rights", "50 years", "the performance (post-2012)"],
                ["Broadcast reproduction", "25 years", "first broadcast"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "The copyright lifecycle",
              caption:
                "Protection is only one stop on a loop that ends in the public domain and starts creation again.",
              steps: [
                { label: "Create and fix the work", note: "protection is automatic" },
                { label: "Exploit", note: "assign or license the rights" },
                { label: "Enforce", note: "act against copying" },
                { label: "Respect limits", note: "Section 52 fair dealing" },
                { label: "Term expires", note: "public domain arrives" },
                { label: "Feed new creation", note: "the cycle restarts" },
              ],
            },
            callout: {
              type: "warning",
              title: "Say fair dealing, not fair use",
              body: "The Indian defence is the closed statutory list of Section 52, unlike the open four-factor American fair use doctrine. Examiners notice the slip and dock the definition mark.",
            },
            keyTerms: [
              { term: "Moral rights", definition: "Section 57 rights of paternity and integrity that persist even after economic rights are assigned." },
              { term: "Fair dealing", definition: "The Section 52 defences - a closed list of permitted acts such as research, criticism and instruction." },
              { term: "Joint authorship", definition: "A work produced by the collaboration of two or more authors whose contributions merge into one work." },
            ],
            examQuestions: [
              {
                q: "Explain the rights conferred by copyright, distinguishing economic from moral rights, and state the term of copyright for different classes of works.",
                marks: 7,
                outline: [
                  "Set out the Section 14 economic rights by category of work.",
                  "Explain Section 57 moral rights: paternity and integrity, with the distorted-reuse example.",
                  "Stress that moral rights survive assignment of the economic rights.",
                  "State the ownership rule of Section 17 with the employment carve-out.",
                  "Give the terms: life plus 60 for authored works; 60 from publication for films and recordings.",
                  "Add performers at 50 years and broadcasts at 25.",
                  "Conclude with Section 52 as the boundary of the monopoly.",
                ],
              },
              {
                q: "Do moral rights survive assignment of copyright? Explain with the architect example.",
                marks: 3,
              },
              {
                q: "What is the term of copyright in a sound recording?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.3",
            title: "Trademarks: functions and types",
            body: [
              "Section 2(zb) of the Trademarks Act 1999 defines a trademark as a mark capable of graphical representation which distinguishes the goods or services of one person from those of another. The definition is functional: a mark identifies source, guarantees consistent quality, carries advertising power and embodies goodwill - often a company's most valuable asset. Marks may be words, devices and logos, labels, numerals, the shape of goods, or sound jingles, and some systems even accept smells. Service marks distinguish services; India registers them in classes 35 to 45 of the Nice schedule.",
              "Registrability runs on the ladder of distinctiveness. Generic terms - the common name of the product, like 'brick' for bricks - can never be registered, because competitors need the word to describe their goods. Descriptive terms merely state qualities, and register only after acquiring secondary meaning through long use. Suggestive marks hint without describing, like Jaguar for cars. Arbitrary marks are common words in unrelated fields - Apple for computers. Fanciful or coined terms - Xerox, Kodak - are invented for the job and strongest of all. Well-known marks enjoy protection across classes under Section 11 even where unregistered.",
              "Special categories round out the map. Certification marks attest that goods meet a defined standard, like the Woolmark; collective marks signal membership of an association; and trade dress - the overall look and packaging of a product - can be protected where it distinguishes. For engineering firms, brand architecture matters: a house mark, product-line marks and certification logos together build the brand's legal perimeter. Choosing a mark is legal due diligence as much as marketing: search the register first, then coin toward the fanciful end of the ladder where protection is broadest.",
            ],
            bullets: [
              "Definition (Section 2(zb)): a graphically representable mark distinguishing one person's goods or services from another's.",
              "Functions: identifies source, guarantees quality, advertises, and stores goodwill.",
              "Forms: words, logos, labels, numerals, 3D shapes, sounds; service marks in classes 35-45.",
              "Distinctiveness ladder: generic (never) - descriptive (secondary meaning) - suggestive - arbitrary - fanciful (strongest).",
              "Special marks: certification (Woolmark), collective, trade dress, and well-known marks protected across classes (Section 11).",
            ],
            table: {
              caption: "The distinctiveness ladder.",
              headers: ["Type", "Meaning", "Example", "Registrability"],
              rows: [
                ["Generic", "common product name", "brick for bricks", "never registrable"],
                ["Descriptive", "names a quality", "Quick-Dry Cement", "only with secondary meaning"],
                ["Suggestive", "hints at the quality", "Jaguar for cars", "registrable"],
                ["Arbitrary", "common word, unrelated use", "Apple for computers", "registrable, strong"],
                ["Fanciful", "coined word", "Xerox, Kodak", "strongest protection"],
              ],
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a mark: strength versus registrability",
              caption:
                "The ideal mark sits top-right - instantly registrable and broad in scope.",
              axes: { x: "Distinctiveness: weak to strong", y: "Legal protection: weak to strong" },
              quadrants: [
                { label: "Descriptive with secondary meaning", note: "protectable only after proof of acquired distinctiveness" },
                { label: "Arbitrary and fanciful", note: "instant protection, broad scope - the ideal" },
                { label: "Generic names", note: "free for all competitors - never protectable" },
                { label: "Suggestive marks", note: "registrable, moderate scope from day one" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The five-rung ladder - generic, descriptive, suggestive, arbitrary, fanciful - with one example each is a guaranteed short question or half of a 7-marker. Draw it as stairs on the answer sheet.",
            },
            keyTerms: [
              { term: "Trademark", definition: "A mark capable of graphical representation distinguishing the goods or services of one undertaking from others (Section 2(zb))." },
              { term: "Secondary meaning", definition: "Acquired distinctiveness through use that lets a descriptive term function as a mark." },
              { term: "Well-known trademark", definition: "A mark with reputation beyond its own goods, protected across classes under Section 11." },
            ],
            examQuestions: [
              {
                q: "Define a trademark and explain its functions. Discuss the types of marks with the distinctiveness ladder and examples, including certification and collective marks.",
                marks: 7,
                outline: [
                  "Define trademark under Section 2(zb).",
                  "List the functions: source identification, quality guarantee, advertising, goodwill.",
                  "Note the forms: word, logo, shape, sound, and service marks.",
                  "Explain the ladder: generic, descriptive (secondary meaning), suggestive, arbitrary, fanciful.",
                  "Give one example per rung.",
                  "Explain certification and collective marks with examples.",
                  "Close with well-known marks' cross-class protection under Section 11.",
                ],
              },
              {
                q: "What is a certification mark? Give an example.",
                marks: 2,
              },
              {
                q: "Distinguish an arbitrary mark from a fanciful mark with one example each.",
                marks: 3,
              },
            ],
          },
          {
            number: "3.4",
            title: "Trademark registration, infringement and passing off",
            body: [
              "Registration follows a fixed path. After a clearance search, the applicant files in the correct class of the 45-class Nice schedule - 34 classes of goods and 11 of services. The registry examines on absolute and relative grounds, issues an examination report and hears objections; the mark is then advertised in the Trade Marks Journal, and any person may oppose within four months. Once registered, the mark is valid ten years and renewable indefinitely; a registered mark left unused for five years is vulnerable to removal. The R symbol announces registration while TM marks a pending or unregistered claim. Registration confers the statutory right to sue for infringement across India.",
              "Infringement (Section 29) is a statutory cause of action for registered marks: using an identical or similar mark on identical or similar goods with a likelihood of confusion, or diluting a well-known mark even without confusion. Honest use of one's own name and descriptive use are Section 30 defences. Remedies are the widest in IP: civil injunctions, damages or accounts, delivery up of infringing stock, and criminal prosecution - counterfeiting can mean imprisonment of six months to three years with fines. Recorded registrations also let customs interdict counterfeit consignments at the border.",
              "Passing off protects unregistered marks through the common law tort. Its classical ingredients are three: goodwill in the mark, a misrepresentation likely to deceive, and resulting damage. Durga Dutt Sharma v Navaratna Pharmaceutical Laboratories (1965) drew the line: infringement is a statutory remedy protecting the registered mark itself; passing off is a broader action protecting business goodwill, in which registration is irrelevant and confusion must be proved. Yahoo! Inc v Akash Arora (Delhi High Court, 1999) applied passing off to domain names. Strong answers present the infringement-versus-passing-off comparison as a two-column table.",
            ],
            bullets: [
              "Registration path: search, class filing (Nice 45 classes), examination, journal advertisement, four-month opposition, ten-year renewable registration.",
              "Non-use: a registered mark unused for five years can be removed from the register.",
              "Infringement (Section 29): identical or similar marks on similar goods with likely confusion; dilution for well-known marks.",
              "Remedies: civil injunction and damages, plus criminal prosecution with six months to three years' imprisonment for counterfeits.",
              "Passing off: goodwill, misrepresentation, damage - the common law shield for unregistered marks (Durga Dutt 1965; Yahoo v Akash Arora 1999).",
            ],
            table: {
              caption: "Infringement versus passing off.",
              headers: ["Aspect", "Infringement", "Passing off"],
              rows: [
                ["Basis", "statutory - Section 29", "common law tort"],
                ["Registration", "required", "not required"],
                ["Confusion", "presumed for identical marks and goods", "must be proved"],
                ["Protects", "the registered mark itself", "business goodwill"],
                ["Defences", "Section 30 honest and descriptive use", "honest use, no deception"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The registration route for a trademark",
              caption:
                "Search, class, examination, journal, opposition, registration - in that order, every time.",
              steps: [
                { label: "Clearance search", note: "avoid conflicts and Section 11 bars" },
                { label: "File in the right class", note: "Nice classes 1-34 goods, 35-45 services" },
                { label: "Examination and reply", note: "objections, hearing if needed" },
                { label: "Journal advertisement", note: "open to opposition" },
                { label: "Opposition window", note: "four months from advertisement" },
                { label: "Registration and renewal", note: "10 years, renewable indefinitely" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Draw the two-column infringement-versus-passing-off table and head it with Durga Dutt Sharma 1965. That structure is the expected shape of the 7-marker on this topic.",
            },
            keyTerms: [
              { term: "Passing off", definition: "The common law action against misrepresenting one's goods as another's - goodwill, misrepresentation, damage." },
              { term: "Trade Marks Journal", definition: "The official journal in which accepted applications are advertised for opposition." },
              { term: "Nice classification", definition: "The 45-class international schedule dividing goods (1-34) and services (35-45) for registration." },
            ],
            examQuestions: [
              {
                q: "Describe the procedure for registration of a trademark in India, the rights it confers, and how infringement differs from passing off.",
                marks: 7,
                outline: [
                  "Outline the path: search, filing in a Nice class, examination, journal advertisement, opposition.",
                  "State the four-month opposition window and the ten-year renewable registration.",
                  "Explain the statutory rights of registration - exclusive use and infringement actions.",
                  "Define infringement under Section 29 with the confusion standard and well-known mark dilution.",
                  "Note Section 30 defences and the five-year non-use vulnerability.",
                  "Define passing off with its three ingredients and Durga Dutt Sharma (1965).",
                  "Close with Yahoo v Akash Arora (1999) extending passing off to domain names.",
                ],
              },
              {
                q: "State the three ingredients of the tort of passing off.",
                marks: 3,
              },
              {
                q: "What do the TM and R symbols indicate on a brand?",
                marks: 2,
              },
            ],
          },
          {
            number: "3.5",
            title: "Geographical indications",
            body: [
              "A geographical indication identifies goods as originating in a territory where a given quality, reputation or other characteristic is essentially attributable to that place. The link to geography is the essence: Darjeeling tea's muscatel flavour, Kolhapuri chappals' craft tradition, Chanderi fabric's weave - the place is part of the product. TRIPS Articles 22 to 24 protect GIs, and India enacted the Geographical Indications of Goods (Registration and Protection) Act 1999, in force from 2003. A GI belongs to no individual: it is a community right held for all producers of the region, and it cannot be assigned or transferred away from the place.",
              "Registration lies with the GI Registry in Chennai. An association of persons, producers or an organization established by law applies; the application is examined, advertised and open to opposition before registration. The registration is valid ten years and renewable indefinitely, and individual producers register as authorized users. Infringement under Section 22 - using a false GI on goods, or selling goods bearing a false indication - attracts civil remedies and criminal penalties including imprisonment from six months to three years. India's registrations began with Darjeeling tea in 2004-05 and now run into hundreds covering crafts, weaves and foods.",
              "GIs matter economically and strategically. They convert regional reputation into collective marketing power, letting artisans and farmers capture premium prices; they block misleading foreign uses; and they mesh with rural development programmes. Enforcement is the hard part: India fought to stop foreign registrations and copycat uses of Basmati, winning the abandonment of RiceTec's basmati claims after the 2000-2002 challenge. Compare a GI with a trademark in one line: a trademark identifies one trader's goods, a GI certifies a region's produce; trademarks are owned individually, GIs collectively and non-assignably.",
            ],
            bullets: [
              "Definition: a GI identifies goods whose quality, reputation or characteristic is essentially attributable to their place of origin.",
              "Legal base: TRIPS Articles 22-24; India's GI Act 1999, in force 2003, registry at Chennai.",
              "Community right: no individual owner, non-assignable, held for the producers of the region.",
              "Procedure: an association applies, examination and advertisement follow, then a ten-year renewable registration with authorized users.",
              "Enforcement: Section 22 infringement with civil and criminal remedies; Basmati claims abandoned after India's 2000-2002 challenge.",
            ],
            table: {
              caption: "Some celebrated Indian GIs.",
              headers: ["GI", "Region", "Known for"],
              rows: [
                ["Darjeeling tea", "West Bengal", "muscatel flavour - the first Indian GI"],
                ["Basmati rice", "Punjab and the Indo-Gangetic plains", "aromatic long grain"],
                ["Kolhapuri chappal", "Kolhapur, Maharashtra", "hand-crafted leather"],
                ["Chanderi fabric", "Madhya Pradesh", "traditional silk-cotton weave"],
                ["Mysore silk", "Karnataka", "pure silk with gold zari"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "From region to registered GI",
              caption:
                "Producers organize, the registry examines, and the community renews its collective asset.",
              stages: [
                { label: "Producers organize", note: "association of persons or producers" },
                { label: "Application to GI Registry", note: "Chennai, with proof of the place link" },
                { label: "Examination and advertisement", note: "opposition window follows" },
                { label: "Registration", note: "10 years, renewable" },
                { label: "Authorized users market", note: "the GI logo certifies origin" },
                { label: "Renewal and enforcement", note: "act against false uses" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "'GI versus trademark' is the classic variant question: individual versus community, one business versus one region, assignable versus non-assignable. Four contrasts, four marks.",
            },
            keyTerms: [
              { term: "Geographical indication", definition: "A sign identifying goods whose qualities or reputation are essentially attributable to their place of origin." },
              { term: "Authorized user", definition: "A producer of the region registered to use a GI for the covered goods." },
              { term: "Registered proprietor", definition: "The association of persons or producers in whose name a GI stands registered." },
            ],
            examQuestions: [
              {
                q: "Define a geographical indication and explain the registration procedure, rights and remedies under the GI Act 1999, with Indian examples. How does a GI differ from a trademark?",
                marks: 7,
                outline: [
                  "Define GI and stress the essential place link.",
                  "State the legal base: TRIPS Articles 22-24 and the GI Act 1999 (in force 2003).",
                  "Describe registration: application by an association, examination, opposition, ten-year renewable term.",
                  "Explain authorized users and the community character of the right.",
                  "State Section 22 infringement with civil and criminal remedies.",
                  "Give examples: Darjeeling tea (the first), Basmati, Kolhapuri chappal.",
                  "Contrast with trademarks: community versus individual, non-assignable, region versus business.",
                ],
              },
              {
                q: "Name any three registered Indian GIs and their regions.",
                marks: 3,
              },
              {
                q: "Can a geographical indication be assigned or transferred? Why?",
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
      title: "Industrial Designs and Trade Secrets",
      summary:
        "The specialized rights: industrial designs protecting appearance judged solely by the eye, trade secrets and their confidentiality agreements as the unregistered alternative, the sui generis protection of chip layout-designs, and plant variety protection with India's distinctive farmers' rights regime under the PPV and FR Act 2001.",
      chapter: {
        number: "04",
        title: "Designs, Secrets and Newer Rights",
        intro:
          "Unit IV gathers the specialized statutes that exams mine for crisp definitions, terms and limitations. Industrial designs protect the look of articles under the Designs Act 2000, judged solely by the eye, for ten years plus five. Trade secrets - India's unregistered right - survive on NDAs, access control and the courts of equity. The Semiconductor Act 2000 protects chip layout-designs where copyright and patent law both fail, and the PPV and FR Act 2001 gives India one of the world's strongest farmers' rights regimes alongside breeders' rights.",
        inOneBreath:
          "Designs (Act 2000, Section 2(d)) protect shape, pattern and ornament judged solely by the eye - never function - if new, unpublished and industrially applicable; the Controller registers for 10 plus 5 years, Section 22 punishes piracy, and Section 15 of the Copyright Act caps artistic copyright at 50 industrial reproductions. Trade secrets meet TRIPS Article 39's three tests (not generally known, commercially valuable from secrecy, reasonable efforts); India protects them by contract and breach of confidence - no registry - against breach but not against reverse engineering or independent invention; NDAs carry six clauses (definition, obligations, exclusions, term, return, remedies) enforced as negative covenants under Section 27 of the Contract Act. Chip layouts (Washington Treaty 1989, TRIPS Articles 35-38, SICLD Act 2000) get 10 years from filing or first exploitation, with reverse engineering lawful and innocent infringers shielded until notice. Plant varieties (PPV and FR Act 2001) need the DUS test - distinct, uniform, stable; breeders get exclusivity for up to 18 years for trees and vines and about 15 for other crops; Section 39 gives farmers the right to save, exchange and sell seed; benefit sharing and the Gene Fund reward conservers.",
        sections: [
          {
            number: "4.1",
            title: "Industrial designs: registrability and procedure",
            body: [
              "Section 2(d) of the Designs Act 2000 defines design as the features of shape, configuration, pattern, ornament or composition of lines and colours applied to an article - two or three dimensional - which appeal to and are judged solely by the eye. Protection is for appearance, not function: a paving block's interlocking geometry belongs to patent law, while its decorative relief pattern can be a registered design. The design must be new or original, not previously published anywhere in India, not a mere mechanical device or functional necessity, not scandalous, and it must be applied to an article by an industrial process.",
              "Applications go to the Controller of Designs at the Kolkata patent office, classified under the Locarno scheme. Examination tests novelty and eye-appeal; objections and amendments follow, then registration. The term is ten years from registration, extendable by five - fifteen years in all. Priority under the Paris Convention runs six months, so foreign filers keep their home date. The decisive trap is self-destruction of novelty: publishing the design in a catalogue or displaying it at an exhibition before filing wipes out the 'new' requirement, because your own disclosure counts as prior art against you.",
              "Registration gives the proprietor the exclusive right to apply the design to articles in the class registered, and Section 22 makes piracy of the design actionable with injunctions, damages and accounts. The borders with other rights matter. An artistic work reproduced industrially more than fifty times loses ordinary copyright by Section 15 of the Copyright Act and must travel under design law instead. A shape that identifies a brand might instead be registrable as a three-dimensional trademark. For civil engineers, registrable designs include paving patterns, facade panels, street furniture, sanitary ware and the working faces of modular formwork.",
            ],
            bullets: [
              "Design (Section 2(d)): shape, configuration, pattern or ornament applied to an article, judged solely by the eye.",
              "Not functional: engineering effects go to patent law; design protects appearance only.",
              "Conditions: new or original, unpublished in India, not a mere mechanical device, industrially applicable.",
              "Term: 10 years from registration plus a 5-year extension; Locarno classification; Paris priority of 6 months.",
              "Piracy (Section 22): injunctions, damages, accounts - and Section 15 of the Copyright Act caps artistic copyright at 50 industrial reproductions.",
            ],
            table: {
              caption: "Design registration versus patent.",
              headers: ["Aspect", "Design", "Patent"],
              rows: [
                ["Protects", "appearance judged by the eye", "function and technical effect"],
                ["Statute", "Designs Act 2000", "Patents Act 1970"],
                ["Term", "10 plus 5 years", "20 years"],
                ["Examination depth", "novelty and eye-appeal", "full prior art search"],
                ["Typical subject", "paving pattern, facade panel", "interlocking mechanism"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "The design registration path",
              caption:
                "Confidentiality first, enforcement last - the order is the whole lesson.",
              steps: [
                { label: "Keep it confidential", note: "prior publication destroys novelty" },
                { label: "Search and classify", note: "Locarno class for the article" },
                { label: "Apply to the Controller", note: "Kolkata patent office" },
                { label: "Examination", note: "novelty and eye-appeal checks" },
                { label: "Registration", note: "10 years plus 5 extension" },
                { label: "Enforce against piracy", note: "Section 22 reliefs" },
              ],
            },
            callout: {
              type: "warning",
              title: "The exhibit-before-filing trap",
              body: "The single most-tested design trap: exhibit or advertise first, file later - and novelty is gone. File before the trade fair, always. The second trap: expecting copyright to cover mass-produced artistic work beyond fifty reproductions; Section 15 sends it to design law.",
            },
            keyTerms: [
              { term: "Industrial design", definition: "Features of shape, pattern or ornament applied to an article and judged solely by the eye (Section 2(d))." },
              { term: "Piracy of design", definition: "Section 22's term for applying a registered design to articles for sale without the proprietor's consent." },
              { term: "Locarno classification", definition: "The international class schedule for design registrations by article type." },
            ],
            examQuestions: [
              {
                q: "What is an industrial design under the Designs Act 2000? Explain the conditions for registration, the procedure, the term, and the remedies for piracy of a design.",
                marks: 7,
                outline: [
                  "Define design under Section 2(d): shape, configuration, pattern, ornament judged by the eye.",
                  "Stress that function is excluded - that is patent territory.",
                  "List the conditions: new or original, unpublished, not a mere mechanical device, not scandalous.",
                  "Describe the procedure: Controller of Designs, Locarno class, examination, registration.",
                  "State the term: 10 years plus a 5-year extension; Paris priority of 6 months.",
                  "Explain Section 22 piracy remedies: injunction, damages, account.",
                  "Note the Section 15 Copyright Act boundary at 50 industrial reproductions.",
                ],
              },
              {
                q: "Why must a design appeal to the eye, and what happens to purely functional features?",
                marks: 3,
              },
              {
                q: "What is the term of a registered design in India?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.2",
            title: "Trade secrets: nature and protection",
            body: [
              "A trade secret is information that is not generally known, derives commercial value from not being known, and is subject to reasonable efforts to keep it secret - the three-part test of TRIPS Article 39. The subject matter can be technical (a concrete admixture, a soil-stabilization process), commercial (client lists, bid pricing models) or a hybrid (source code, survey data). The Coca-Cola recipe and the Google ranking algorithm are the stock examples. India has no trade secret statute: protection flows from contracts, equity and the common law action for breach of confidence.",
              "Secrecy is the strategic alternative to patenting. A secret needs no application, no fee, no disclosure and never expires - while it stays secret. But it guards only against breach: it stops nobody who lawfully reverse engineers a product or who invents the same thing independently, and once leaked it is gone forever. Patents invert the trade: twenty years of strong exclusion bought with full public disclosure. The choice is a business decision - short-lived technology is patented fast; long-lived recipes and methods stay secret, protected by layered NDAs and access control.",
              "Enforcement in India runs through the courts on contract and confidence. Employers obtain injunctions against departing employees who take confidential data, damages for misuse, and springboard relief that freezes the head start a wrongdoer gained from the secret - the Delhi High Court did exactly that in American Express Bank v Priya Puri, restraining misuse of an employer's confidential information. Reverse engineering remains lawful, so the practical defence is layered: NDAs, compartmented access, marked documents, disclosure logs and exit interviews. Reasonable measures are not just hygiene; they are the third element of the legal test itself.",
            ],
            bullets: [
              "Three-part test (TRIPS Article 39): not generally known, commercially valuable from secrecy, reasonable efforts to protect.",
              "India: no registration statute - contract law, equity and breach of confidence do the work.",
              "Advantages: immediate, cheap, indefinite while secret; disadvantages: no shield against reverse engineering or independent invention.",
              "Patent versus secret: disclose for 20 years of exclusion, or keep quiet and carry the leak risk.",
              "Remedies: injunctions, damages and springboard relief against the advantage gained from misuse.",
            ],
            table: {
              caption: "Reasonable secrecy measures that courts respect.",
              headers: ["Measure", "Example", "Purpose"],
              rows: [
                ["NDAs", "staff, vendors, joint-venture talks", "contractual hook for injunctions"],
                ["Access control", "need-to-know folders, IT permissions", "limits exposure"],
                ["Marking", "confidential legends on drawings", "proves secrecy intent"],
                ["Logs", "disclosure registers", "tracks who saw what and when"],
                ["Exit process", "interviews, device returns, reminders", "closes the leak on departure"],
              ],
            },
            diagram: {
              kind: "compare",
              title: "Patent route versus secret route",
              caption:
                "Same invention, two legal strategies - the choice is disclosure for strength versus secrecy for duration.",
              left: {
                heading: "Patent route",
                items: [
                  "Full public disclosure in the specification",
                  "20-year exclusive right, even against independents",
                  "High cost: drafting, filing, prosecution",
                  "Best for technology rivals will copy anyway",
                ],
              },
              right: {
                heading: "Secret route",
                items: [
                  "Zero disclosure - nothing is published",
                  "Indefinite - but lost the moment it leaks",
                  "Low cost: NDAs and access control",
                  "Best for methods hard to reverse engineer",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Quote TRIPS Article 39's three-part test as the definition - it converts a vague answer into a precise one. Then give the Coca-Cola versus patent contrast in two lines.",
            },
            keyTerms: [
              { term: "Trade secret", definition: "Valuable information kept out of general knowledge under reasonable secrecy measures (TRIPS Article 39)." },
              { term: "Misappropriation", definition: "Acquisition, use or disclosure of a secret by improper means or in breach of confidence." },
              { term: "Springboard relief", definition: "An injunction that freezes the unfair head start gained from misused confidential information." },
            ],
            examQuestions: [
              {
                q: "Define a trade secret and explain how trade secrets are protected in India. How does trade secret protection compare with patent protection, and what remedies are available?",
                marks: 7,
                outline: [
                  "Give the TRIPS Article 39 three-part definition.",
                  "State India's position: no statute; contract, equity and breach of confidence.",
                  "List typical subject matter: formulas, processes, client lists, source code.",
                  "Compare with patents: disclosure versus secrecy, term, cost, reverse-engineering risk.",
                  "Explain the business choice with Coca-Cola versus a patentable mechanism.",
                  "Detail remedies: injunction, damages, springboard relief (American Express Bank v Priya Puri).",
                  "Close with the reasonable secrecy measures courts expect.",
                ],
              },
              {
                q: "Is reverse engineering a lawful way to defeat a trade secret? Explain.",
                marks: 3,
              },
              {
                q: "State the three elements of the TRIPS Article 39 test.",
                marks: 2,
              },
            ],
          },
          {
            number: "4.3",
            title: "Confidentiality agreements",
            body: [
              "The non-disclosure agreement is the workhorse of trade secret law. It is a contract in which the receiving party promises to hold specified information in confidence and to use it only for a stated purpose. NDAs come in two shapes: unilateral, with one discloser and one receiver, and mutual, where both sides disclose - the normal form for joint-venture and technology negotiations. They attach to employment, consultancy, vendor discussions, licensing talks and merger due diligence. Without an NDA the discloser's main route is the equitable action for breach of confidence, which is harder to prove; the contract makes duties explicit and remedies fast.",
              "A well-drafted NDA has six moving parts. It defines confidential information - best done by category and marking rather than vague phrases. It states obligations: use only for the purpose, protect with reasonable care, restrict access to advisers who are themselves bound. It carves out exclusions: information already public, already known, later independently developed, or compelled by law or a court. It sets a term - commonly two to five years, with trade secrets protected for as long as they remain secret. It covers return or destruction of materials, and it pre-agrees remedies: injunction plus damages, because money alone cannot undo a leak.",
              "Indian law enforces NDAs as contracts subject to Section 27 of the Indian Contract Act: courts will not enforce a penalty, but they will restrain breach of a negative covenant by injunction. Enforcement problems are practical - prove what was disclosed (logs help), prove breach, and trace the leak. Employees may always carry away their general skill and knowledge; that line is drawn in every case. A consultancy sharing tender pricing under NDA gets an injunction if the bidder shops it to rivals, but the same consultancy cannot stop a rival who independently estimates the same rates.",
            ],
            bullets: [
              "Two shapes: unilateral NDA (one-way disclosure) and mutual NDA (both sides disclose).",
              "Six clauses: definition, obligations, exclusions, term, return of materials, remedies.",
              "Exclusions matter most: public domain, prior knowledge, independent development, legally compelled disclosure.",
              "Enforcement: Section 27 of the Contract Act bars penalties, but courts enforce negative covenants by injunction.",
              "Limits: NDAs do not stop general skill, memory or independent development by others.",
            ],
            codeExample: {
              language: "text",
              caption: "A five-clause core of a confidentiality agreement, in drafting order.",
              code: `CORE CLAUSES OF A CONFIDENTIALITY AGREEMENT

1. DEFINITION. "Confidential Information" means all technical,
   commercial and financial information disclosed by the
   Disclosing Party, including drawings, rates and bid data,
   that a reasonable person would treat as confidential.

2. OBLIGATIONS. The Receiving Party shall (a) use the
   Information solely to evaluate the proposed joint venture;
   (b) protect it with at least the same care as its own
   confidential information; (c) not disclose it to any third
   party without prior written consent.

3. EXCLUSIONS. Obligations do not apply to information that
   is public, already known, independently developed, or
   required to be disclosed by law or a court order.

4. TERM. Three years from disclosure; trade secrets remain
   protected for as long as they remain secret.

5. REMEDIES. Breach entitles the Disclosing Party to seek an
   injunction in addition to damages.`,
            },
            diagram: {
              kind: "fork",
              title: "Tender data leaves the consultancy",
              caption:
                "The lawfulness of what happens next decides whether the NDA bites.",
              start: "An engineer holding confidential tender pricing is approached by a rival bidder",
              branches: [
                {
                  label: "Keeps confidence under the NDA",
                  outcome: "No breach - the covenant holds and trust is preserved",
                  good: true,
                },
                {
                  label: "Leaks the marked documents",
                  outcome: "Injunction, damages and career consequences for breach",
                  good: false,
                },
                {
                  label: "Rival develops the same rates independently",
                  outcome: "Lawful - skill, memory and independent work are free",
                  good: true,
                },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Answer 'essentials of an NDA' as the six-clause list and attach the Section 27 point on penalties versus injunctions. A two-line specimen clause sketch impresses examiners.",
            },
            keyTerms: [
              { term: "Non-disclosure agreement", definition: "A contract binding the receiver of information to hold it in confidence and use it only for a defined purpose." },
              { term: "Negative covenant", definition: "A promise not to do something - the mechanism courts enforce by injunction in NDA disputes." },
              { term: "Mutual NDA", definition: "A confidentiality agreement where both parties disclose and both accept obligations." },
            ],
            examQuestions: [
              {
                q: "What is a confidentiality (non-disclosure) agreement? Explain its essential clauses and the remedies available on breach under Indian law.",
                marks: 7,
                outline: [
                  "Define the NDA and its purpose in protecting trade secrets.",
                  "Distinguish unilateral and mutual NDAs.",
                  "List the six essential clauses with one line each.",
                  "Explain the exclusions - public domain, prior knowledge, independent development, compulsion of law.",
                  "Discuss the term: fixed years, trade secrets for as long as secret.",
                  "Explain enforcement: Section 27 of the Contract Act, negative covenants, injunctions and damages.",
                  "Close with the limits: general skill and independent development remain free.",
                ],
              },
              {
                q: "Distinguish a unilateral NDA from a mutual NDA.",
                marks: 2,
              },
              {
                q: "Why must an NDA list exclusions? Give any three.",
                marks: 3,
              },
            ],
          },
          {
            number: "4.4",
            title: "Layout-designs of integrated circuits",
            body: [
              "A semiconductor integrated circuit is built from a layout-design - the three-dimensional disposition of transistors, interconnections and layers that turns silicon into function. Designing a mask set costs enormous research and engineering; photographing each layer and copying it costs little. Copyright would protect only the drawings, not the functional topology, and patents demand a novelty that incremental mask changes often lack. So the world adopted a special, sui generis right: the 1989 Washington Treaty on Intellectual Property in Respect of Integrated Circuits, pulled into world trade by TRIPS Articles 35 to 38 and enacted in India as the Semiconductor Integrated Circuits Layout-Design Act 2000.",
              "The Indian Act protects original layout-designs - the creator's own intellectual effort, not commonplace - and bars registration where the design has already been commercially exploited for more than two years. Protection is registration-based, and the term runs ten years from the filing date or from first commercial exploitation anywhere, whichever is earlier. The rights cover reproducing the design and importing, selling or distributing articles embodying it. Two limitations balance the monopoly and examiners test them every year: reverse engineering is lawful, and innocent infringers who buy without knowledge are shielded until they receive notice.",
              "Why a sui generis right at all? Copyright protects expression, but a mask copy reproduces function; patent law demands novelty and inventive step that layout changes may not show; and the roughly ten-year term matches chip product cycles better than the twenty-year patent. For engineers, the law matters wherever infrastructure embeds electronics: SCADA systems, sensors and controllers in smart buildings all run on protected chips, and procurement teams now see layout-design indemnities in supply contracts. Draw the treaty-to-statute stack - Washington Treaty, TRIPS, the Indian Act - and the picture fixes itself.",
            ],
            bullets: [
              "Layout-design (topography): the 3D disposition of elements and interconnections in an integrated circuit.",
              "Legal stack: Washington Treaty 1989, TRIPS Articles 35-38, India's SICLD Act 2000.",
              "Conditions: original (the creator's own effort, not commonplace) and not commercially exploited for more than two years.",
              "Term: 10 years from filing or first commercial exploitation, whichever is earlier.",
              "Limits: reverse engineering is lawful; innocent infringers are shielded until notice.",
            ],
            table: {
              caption: "SICLD Act 2000 essentials.",
              headers: ["Feature", "Rule"],
              rows: [
                ["Subject matter", "layout-designs (topographies) of semiconductor ICs"],
                ["Conditions", "original, not commonplace; two-year commercial exploitation cap"],
                ["Registry", "Registrar of Semiconductor IC Layout-Designs"],
                ["Term", "10 years from filing or first exploitation, whichever earlier"],
                ["Rights", "reproduce, import, sell, distribute the design or embodying articles"],
                ["Limitations", "reverse engineering lawful; innocent infringement shielded"],
              ],
            },
            diagram: {
              kind: "layers",
              title: "The legal stack behind chip protection",
              caption:
                "From the world-trade layer down to the courtroom remedies.",
              layers: [
                { label: "TRIPS Articles 35-38", note: "imports the treaty into trade law" },
                { label: "Washington Treaty 1989", note: "the sui generis framework" },
                { label: "SICLD Act 2000", note: "India's registration statute" },
                { label: "Registrar and register", note: "registration-based rights" },
                { label: "Remedies", note: "injunctions and damages for infringement" },
              ],
            },
            callout: {
              type: "tip",
              title: "Memory hook",
              body: "Two limitations, two marks each: reverse engineering is permitted, and innocent infringers are shielded until notice. Add the ten-year term measured from the earlier of filing or first exploitation, and the question is fully answered.",
            },
            keyTerms: [
              { term: "Layout-design", definition: "The three-dimensional disposition of the elements and interconnections of an integrated circuit." },
              { term: "Reverse engineering", definition: "Lawful analysis of a lawfully obtained circuit by photographic reproduction in order to create a new design." },
              { term: "Innocent infringement", definition: "Protection for buyers unaware of protection rights until they receive notice, per TRIPS Article 37." },
            ],
            examQuestions: [
              {
                q: "Why do integrated circuit layout-designs need special (sui generis) protection? Explain the scheme of the Semiconductor Integrated Circuits Layout-Design Act 2000 and its key limitations.",
                marks: 7,
                outline: [
                  "Explain the subject: mask layouts, costly to create, cheap to copy.",
                  "Show why copyright and patent law do not fit: function copying, incremental novelty.",
                  "Trace the stack: Washington Treaty 1989, TRIPS Articles 35-38, SICLD Act 2000.",
                  "State registrability: original, not commonplace, two-year exploitation cap.",
                  "State the term: ten years from filing or first exploitation, whichever is earlier.",
                  "Explain the rights: reproduction, importation, sale of embodying articles.",
                  "Close with the limitations: reverse engineering and innocent infringement.",
                ],
              },
              {
                q: "What is meant by innocent infringement of a layout-design?",
                marks: 3,
              },
              {
                q: "Why is reverse engineering permitted under layout-design law?",
                marks: 2,
              },
            ],
          },
          {
            number: "4.5",
            title: "Protection of plant varieties",
            body: [
              "Plant variety protection answers a TRIPS question: Article 27.3(b) lets members protect plant inventions by patents, by an effective sui generis system, or both. India chose the sui generis path with a distinctive signature - the Protection of Plant Varieties and Farmers' Rights Act 2001, drafted in the shadow of UPOV but deliberately wider. The Act registers new varieties, extant varieties already in circulation, and farmers' varieties. Its double objective is to stimulate plant breeding by granting exclusive rights while recognizing farmers as conservers and innovators in their own right.",
              "Registration demands the DUS test: the variety must be distinct from known varieties, uniform in its essential characteristics across plants, and stable through repeated cycles of propagation. Breeders get exclusive rights to produce, sell, market and license seed of the protected variety, with terms running up to eighteen years for trees and vines and about fifteen years for other crops. Researchers may use protected varieties freely for experimentation and further breeding. The Act also allows a farmer to save, sow, exchange and sell seed from a harvest - the heart of Section 39's farmers' rights.",
              "The farmers' rights chapter is what examiners mean by India's distinctive approach. Section 39 lets farmers use, save, sow, resow, exchange, share or sell farm produce including seed of a protected variety - except branded seed - and protects innocent farmers from infringement claims. Benefit sharing and the National Gene Fund reward communities whose landraces contributed to a commercial variety. The 2019 Gujarat potato episode, where a food major sued farmers over a registered variety and then withdrew under public pressure, illustrates the tension and the Act's policy tilt toward the farmer.",
            ],
            bullets: [
              "TRIPS 27.3(b): the sui generis option - India's answer is the PPV and FR Act 2001.",
              "DUS test: distinct, uniform, stable - the registrability gate for varieties.",
              "Breeders' rights: exclusive production and commercialization of seed, up to 18 years for trees and vines and about 15 for other crops.",
              "Farmers' rights (Section 39): save, sow, exchange and sell farm produce and seed - except branded seed.",
              "Benefit sharing and the National Gene Fund reward contributing farming communities.",
            ],
            table: {
              caption: "Who gets what under the PPV and FR Act.",
              headers: ["Actor", "Right", "Source"],
              rows: [
                ["Breeder", "exclusive commercialization of the variety", "registration"],
                ["Farmer", "save, use, exchange, sell produce and seed", "Section 39"],
                ["Researcher", "free use for experiments and breeding", "research exemption"],
                ["Community", "benefit sharing and the Gene Fund", "contribution claims"],
                ["Innocent farmer", "no infringement liability without notice", "statutory shield"],
              ],
            },
            diagram: {
              kind: "cycle",
              title: "Life of a protected plant variety",
              caption:
                "Breeding, registration, cultivation and conservation feed one another.",
              steps: [
                { label: "Breed a new variety", note: "or document a farmers' variety" },
                { label: "DUS testing", note: "distinct, uniform, stable" },
                { label: "Registration", note: "certificate and exclusive rights" },
                { label: "Commercialization", note: "breeder markets certified seed" },
                { label: "Farmers cultivate", note: "save and exchange under Section 39" },
                { label: "Gene Fund rewards", note: "benefit sharing flows back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "Explain why the 2001 Act is called a farmers' rights law: Section 39's list, benefit sharing, the Gene Fund and the innocent-farmer shield - four points, fully argued, is a complete 7-marker.",
            },
            keyTerms: [
              { term: "DUS testing", definition: "The distinctiveness, uniformity and stability examination a plant variety must pass for registration." },
              { term: "Farmers' rights", definition: "Section 39 rights to save, use, exchange and sell seed of protected varieties, subject to the branded-seed bar." },
              { term: "Extant variety", definition: "A variety already notified or commercially available in India when the Act took effect." },
            ],
            examQuestions: [
              {
                q: "Discuss the objectives and salient features of the Protection of Plant Varieties and Farmers' Rights Act 2001, explaining DUS, breeders' rights and farmers' rights.",
                marks: 7,
                outline: [
                  "Set the context: the TRIPS 27.3(b) sui generis option alongside the UPOV model.",
                  "State the twin objectives: stimulate breeding and recognize farmers as innovators.",
                  "Explain the DUS test for registration.",
                  "Explain breeders' rights with terms (18 years for trees and vines, about 15 for others).",
                  "Explain Section 39 farmers' rights, including the branded-seed exception.",
                  "Add benefit sharing and the National Gene Fund.",
                  "Close with the innocent-farmer shield and the 2019 Gujarat potato episode.",
                ],
              },
              {
                q: "What is the DUS test for plant variety registration?",
                marks: 3,
              },
              {
                q: "What is meant by an extant variety?",
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
      title: "IPR Management and Technology Transfer",
      summary:
        "Turning rights into value: the IP audit that inventories what a firm owns, valuation by cost, market and income approaches, licensing from exclusive grants to Section 84 compulsory licences, technology transfer and commercialization routes, litigation strategy with the injunction triple test, and traditional knowledge protected through documentation and the TKDL.",
      chapter: {
        number: "05",
        title: "Managing and Monetizing IP",
        intro:
          "Unit V turns law into management. It starts with the audit that inventories what a firm actually owns, moves to valuation - cost, market and income approaches with the relief-from-royalty method worked out numerically - then to licensing, from exclusive grants through the exclusivity ladder to compulsory licences under Section 84. Technology transfer carries ideas across organizations and borders through identifiable vehicles and stages, commercialization carries them to market, litigation protects the whole chain, and traditional knowledge closes the subject with the TKDL and the turmeric, neem and basmati victories.",
        inOneBreath:
          "An IP audit inventories and verifies assets through scope, discovery, title verification, gap analysis and an action plan, feeding valuation by cost (replacement cost), market (comparables) or income (relief from royalty, excess earnings; the worked sketch: 5 percent of 4, 6, 8, 8 and 4 crore sales discounted at 12 percent is about Rs 1.07 crore). Licences grant permission - exclusive, sole, non-exclusive - distinguished from assignment; money moves by running royalties, minimum guarantees and milestones; Section 84 compulsory licences come three years after grant on three grounds (public requirements unmet, not reasonably affordable, not worked in India - Natco v Bayer). Technology transfer moves knowledge by licence, franchise, joint venture, turnkey or spin-off through identify-evaluate-value-negotiate-absorb stages; commercialization productizes, licenses, assigns or spins off. Litigation opens with a cease-and-desist letter, then interim injunctions on the triple test, final relief and appeals; criminal remedies exist only for marks and copyright. Traditional knowledge is defended by documentation - the TKDL - and the turmeric (1997), neem (2000) and basmati (2001-02) victories.",
        sections: [
          {
            number: "5.1",
            title: "IP auditing",
            body: [
              "An IP audit is a systematic survey of every intellectual property asset an organization owns, uses or risks: patents, trademarks, copyrights, designs, trade secrets, domain names and licensed-in rights. The objective is a verified picture - what exists, who owns it, whether filings are in order, where rights are unregistered or lapsing, which agreements bind them, and where third parties are infringing or licensed. Audits are triggered by transactions such as a merger, acquisition, joint venture or bank financing, by disputes, by compliance reviews, or simply periodically as good governance.",
              "The method runs in five stages. Define the scope and assemble the team - legal, technical and finance. Discover assets through interviews, file reviews and register searches. Verify the chain of title: assignments recorded, employment and consultancy contracts carrying proper IP clauses, renewals paid, working statements filed. Analyze gaps and risks - unregistered rights, unfiled inventions, infringing imports, and outbound obligations hidden inside inbound licences. Report with an action plan: file, register, abandon, enforce, license or restructure, each with a named owner and a deadline.",
              "For a construction firm the findings write themselves. The brand and logo registered in the wrong classes; hundreds of drawings whose copyright position is uncertain because employment contracts were silent; a proprietary soil-stabilization method kept as a trade secret without a single NDA; domain names owned personally by a former partner; inbound software licences that forbid transferring BIM tools to a joint venture. Each gap is value at risk. After the audit, the asset register becomes a living document that feeds valuation, licensing and the next due diligence exercise.",
            ],
            bullets: [
              "Definition: a systematic inventory and risk assessment of an organization's IP assets, ownership and obligations.",
              "Triggers: M&A, joint ventures, financing, disputes, compliance reviews, periodic governance.",
              "Five stages: scope, discovery, verification of title and filings, gap analysis, action plan.",
              "Chain of title: recorded assignments and employment IP clauses decide who truly owns each asset.",
              "Output: an IP asset register plus a prioritized action list - file, register, enforce, license or abandon.",
            ],
            table: {
              caption: "What an IP audit uncovers.",
              headers: ["Audit step", "Question asked", "Typical finding"],
              rows: [
                ["Discovery", "what IP do we actually hold?", "unregistered marks, unfiled inventions"],
                ["Title verification", "who owns it on record?", "unrecorded assignments, missing clauses"],
                ["Filings review", "are renewals and statements current?", "lapsed renewal, unpaid fees"],
                ["Third-party scan", "who is using our IP?", "infringing imports, expired licences"],
                ["Obligations review", "what do inbound licences forbid?", "no-transfer clauses blocking a JV"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "An IP audit in five stages",
              caption:
                "Each stage feeds the next; the action plan loops back into the register.",
              stages: [
                { label: "Scope the audit", note: "team, business units, timeline" },
                { label: "Discover assets", note: "registers, files, interviews" },
                { label: "Verify title", note: "assignments, contracts, renewals" },
                { label: "Analyze gaps and risks", note: "unregistered, lapsing, infringed" },
                { label: "Report and act", note: "asset register, action plan, owners" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "Distinguish three tools in one line each: a search finds prior art or conflicts; an audit inventories our own IP and risks; a valuation puts a rupee figure on the assets. Short questions mix them up deliberately.",
            },
            keyTerms: [
              { term: "IP audit", definition: "A systematic review of an organization's intellectual property assets, their ownership, protection status and risks." },
              { term: "Chain of title", definition: "The documented sequence of ownership from creation through assignments to the present holder." },
              { term: "Due diligence", definition: "The investigation of a target's assets and liabilities - IP included - before a transaction closes." },
            ],
            examQuestions: [
              {
                q: "What is an intellectual property audit? Explain its objectives, the process in stages, and the typical findings for an engineering firm.",
                marks: 7,
                outline: [
                  "Define the IP audit and list the asset classes covered.",
                  "State the triggers: transactions, disputes, compliance, periodic review.",
                  "Describe stage one: scope and team.",
                  "Describe discovery and verification: registers, contracts, renewals, chain of title.",
                  "Describe gap and risk analysis: unregistered rights, lapses, infringements, licence obligations.",
                  "Give engineering findings: unregistered marks, drawing copyright, unfiled methods, domain names.",
                  "Close with the output: an asset register plus an action plan with owners and deadlines.",
                ],
              },
              {
                q: "What is meant by chain of title, and why must assignments be recorded?",
                marks: 3,
              },
              {
                q: "Name any three events that typically trigger an IP audit.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.2",
            title: "IP valuation",
            body: [
              "Valuation puts a rupee figure on rights that cannot be seen. The triggers are practical: setting a royalty for a licence, pricing an acquisition, financial reporting, tax and transfer pricing, security for bank finance, and measuring damages in litigation. Value is driven by legal strength - validity, scope of claims, remaining term - by market power, and by the ability to exclude competition. The same patent is worth little inside a failed product line and crores inside a growing one, which is why valuation is an exercise in assumptions made explicit.",
              "Three approaches share the field. The cost approach asks what it would cost to recreate or replace the asset - useful for early-stage technology, blind to future earnings. The market approach looks at comparable transactions, the licence and sale prices of similar IP - quick where data exist, scarce where they do not. The income approach discounts the cash flows the IP will generate: the relief-from-royalty method values the royalty an owner avoids paying, while excess-earnings and incremental-income methods isolate the profit attributable to the IP alone. Income methods dominate licensing and litigation work.",
              "A relief-from-royalty sketch fixes the idea. A patent supports sales of Rs 4, 6, 8, 8 and 4 crore over five years; comparable licences run at five percent, so the owner saves royalties of 20, 30, 40, 40 and 20 lakh each year; discounted at twelve percent those savings are worth about Rs 1.07 crore today - that is the patent's value under this method. The weaknesses are honest: the discount-rate choice moves the answer, projections are estimates, and comparables may not exist. Sensitivity tables - the value at ten, twelve and fifteen percent - show the court or the board that the limits are understood.",
            ],
            bullets: [
              "Why value: licence royalty setting, M&A pricing, financial reporting, tax, security, litigation damages.",
              "Value drivers: legal strength and remaining term, market size, the ability to exclude competitors.",
              "Cost approach: reproduction or replacement cost - ignores future earnings; suits early-stage assets.",
              "Market approach: comparable licence and sale prices - data are often unavailable.",
              "Income approach: relief from royalty, excess earnings, incremental cash flows - the licensing standard.",
            ],
            table: {
              caption: "Three valuation approaches at a glance.",
              headers: ["Approach", "Basis", "Best when", "Weakness"],
              rows: [
                ["Cost", "what it cost to create or re-create", "early-stage, no revenues", "ignores earnings"],
                ["Market", "comparable transactions", "active licence markets", "scarce comparables"],
                ["Income - relief from royalty", "royalties you avoid paying", "licensing, litigation", "discount-rate sensitivity"],
                ["Income - excess earnings", "profit above normal returns", "productized IP", "separating IP from other assets"],
              ],
            },
            codeExample: {
              language: "text",
              caption: "Relief-from-royalty valuation worked end to end (figures illustrative).",
              code: `RELIEF-FROM-ROYALTY VALUATION OF A PATENT

Comparable licence rate ................... 5% of net sales
Discount rate ............................ 12% per year

Year   Sales    Royalty   Discount   Present
       (crore)  saved     factor     value
 1      4.0     0.200     0.893      0.179
 2      6.0     0.300     0.797      0.239
 3      8.0     0.400     0.712      0.285
 4      8.0     0.400     0.636      0.254
 5      4.0     0.200     0.567      0.113
                                      ------
Value of the patent today ..... about Rs 1.07 crore`,
            },
            diagram: {
              kind: "matrix",
              title: "Choosing a valuation approach",
              caption:
                "Data availability and asset maturity pick the method for you.",
              axes: { x: "Data available: scarce to rich", y: "Asset maturity: early to revenue-generating" },
              quadrants: [
                { label: "Excess earnings", note: "isolate IP profit when comparables are missing" },
                { label: "Relief from royalty", note: "the licensing and litigation standard" },
                { label: "Cost approach", note: "replacement cost when nothing is earned yet" },
                { label: "Market approach", note: "comparable licence prices from active markets" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The 7-mark valuation question is three approaches plus one worked sketch. Memorize the relief-from-royalty table - rate, sales, discount factors, sum - and reproduce it; it turns a definitions answer into an application answer.",
            },
            keyTerms: [
              { term: "Relief-from-royalty method", definition: "Valuing IP by discounting the royalties the owner would otherwise have paid to license it." },
              { term: "Discounted cash flow", definition: "Bringing future cash flows to present value at a rate reflecting risk and time." },
              { term: "Royalty rate", definition: "The percentage of sales or profit paid for a licence, benchmarked from comparable deals." },
            ],
            examQuestions: [
              {
                q: "Explain the approaches to valuing intellectual property, illustrating the relief-from-royalty method with a numerical sketch.",
                marks: 7,
                outline: [
                  "State why valuation matters: licensing, M&A, reporting, tax, litigation.",
                  "List the value drivers: legal strength, remaining term, market power, exclusivity.",
                  "Explain the cost approach and its blindness to earnings.",
                  "Explain the market approach and the scarcity of comparables.",
                  "Explain the income approach: relief from royalty and excess earnings.",
                  "Work the sketch: 5 percent rate, five years of sales, 12 percent discounting, about Rs 1.07 crore.",
                  "Close with sensitivities: vary the discount rate and show how the answer moves.",
                ],
              },
              {
                q: "Which valuation approach suits an early-stage invention with no revenues? Why?",
                marks: 3,
              },
              {
                q: "What does a discount factor do in an income-method valuation?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.3",
            title: "Licensing: exclusive, non-exclusive and compulsory",
            body: [
              "A licence is permission to use IP without transferring ownership: the owner grants defined rights for consideration. The grant clause is the heart - it fixes what rights (make, use, sell), over what territory, in which field of use, for how long and with what exclusivity. An exclusive licence goes to a single licensee with even the owner standing aside; a sole licence keeps owner and one licensee; a non-exclusive licence lets the owner sign many licensees - the software and standards model. Assignment, by contrast, sells the ownership itself. Every licence must say which it is, because the licensee's powers to sue and to sublicense follow from that one word.",
              "The commercial terms are where value moves. Running royalties - a percentage of net sales - can be combined with fixed fees, milestones and minimum guarantees; quarterly statements and audit rights keep the numbers honest. Cross-licences settle patent thickets by trading portfolios. A franchise is a trademark-plus-know-how licence under quality control. Compulsory licensing is the involuntary end of the spectrum: Section 84 of the Patents Act lets the Controller license a patent, three years after grant, on three grounds - the reasonable requirements of the public not met, the invention not available at a reasonably affordable price, and the patent not worked in India - with Natco v Bayer as the precedent.",
              "Drafting a licence is drafting its limits. Control quality and brand through approval rights; handle improvements by deciding who owns follow-ups; set termination triggers and a post-termination sell-off period; choose governing law and arbitration; and remember registration formalities where the statute demands them. For a civil engineering example: a campus patent on bridge-health monitoring licensed exclusively to an instrumentation firm for India, non-exclusively abroad, with a five percent royalty, a minimum annual guarantee and a field of use limited to bridges - each clause a lever protecting the licensor's remaining rights.",
            ],
            bullets: [
              "Licence versus assignment: permission to use versus transfer of ownership - the first distinction to state.",
              "Exclusivity ladder: exclusive (owner steps aside), sole (owner plus one), non-exclusive (many licensees).",
              "Money terms: running royalty, fixed fee, milestones, minimum guarantee, audit rights.",
              "Compulsory licensing: Section 84 - three grounds, three years after grant, Natco v Bayer the precedent.",
              "Grant clause levers: territory, field of use, term, sublicensing, quality control, improvements.",
            ],
            codeExample: {
              language: "text",
              caption: "The grant and royalty core of an exclusive patent licence.",
              code: `GRANT OF RIGHTS (EXCERPTS FROM A PATENT LICENCE)

1. The Licensor grants to the Licensee an exclusive,
   non-transferable licence under Indian Patent No. 312345
   to make, use and sell bridge-health monitoring systems
   within the Territory of India, for a term of 7 years.

2. The Licensee shall pay a running royalty of 5 percent
   of net sales, subject to a minimum annual guarantee
   of INR 10 lakh, payable quarterly with a statement.

3. Sublicensing requires the Licensor's prior written
   consent; quality control and marking remain with the
   Licensor.

4. The Licensee shall permit the Licensor to audit its
   royalty records once a year on reasonable notice.`,
            },
            diagram: {
              kind: "pyramid",
              title: "The exclusivity ladder",
              caption:
                "From full transfer of ownership at the apex to state-granted licences at the base.",
              tiers: [
                { label: "Assignment", note: "ownership itself passes - most complete" },
                { label: "Exclusive licence", note: "one licensee; owner stands aside" },
                { label: "Sole licence", note: "owner plus one licensee" },
                { label: "Non-exclusive licence", note: "many licensees in parallel" },
                { label: "Compulsory licence", note: "state-granted; royalty-capped" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "The three Section 84 grounds - public requirements unmet, not reasonably affordable, not worked in India - are asked as a short or half a 7-marker every few years. Pair them with Natco v Bayer and the answer is complete.",
            },
            keyTerms: [
              { term: "Exclusive licence", definition: "A licence to a single licensee with the owner also refraining from exercising the licensed rights." },
              { term: "Running royalty", definition: "A licence fee paid as a percentage of the licensee's sales over time." },
              { term: "Compulsory licence", definition: "A Controller-granted licence over a patent on the Section 84 grounds, without the owner's consent." },
            ],
            examQuestions: [
              {
                q: "What is IP licensing? Distinguish exclusive, sole and non-exclusive licences from assignment, explain the main commercial terms, and discuss compulsory licensing under Section 84.",
                marks: 7,
                outline: [
                  "Define licence as permission to use, contrasted with assignment's transfer of ownership.",
                  "Set out the exclusivity ladder: exclusive, sole, non-exclusive.",
                  "Explain the grant clause levers: rights, territory, field of use, term, sublicensing.",
                  "Explain the money terms: royalty, fixed fee, milestones, minimum guarantee, audit.",
                  "Explain Section 84 compulsory licensing: three years after grant, three grounds.",
                  "Attach Natco v Bayer 2012 with the royalty outcome.",
                  "Close with Section 92 emergency licensing and government use as the wider involuntary family.",
                ],
              },
              {
                q: "Distinguish an exclusive licence from a non-exclusive licence.",
                marks: 3,
              },
              {
                q: "What is a running royalty with a minimum guarantee?",
                marks: 2,
              },
            ],
          },
          {
            number: "5.4",
            title: "Technology transfer and commercialization",
            body: [
              "Technology transfer is the movement of technical knowledge, methods and rights from one organization or country to another so that the receiver can use it productively. It travels by many vehicles: licensing in and out, franchising, joint ventures, contract manufacturing, turnkey projects, research collaboration, and technical consultancy. Horizontal transfer moves technology between users at the same stage - firm to firm, country to country; vertical transfer runs from research to application, from laboratory to factory. For a country like India, technology transfer policy touches industrial policy, trade balances and the public research mission.",
              "The transfer process is a cycle of stages: identify the technology and its IP status; evaluate technical fit and market demand; value and price it using the approaches of the previous section; negotiate and sign the agreement - grant, territory, training, improvements, dispute resolution; and then absorb it, adapting the technology, training staff and building the absorptive capacity needed to maintain and improve it. Monitoring, royalty flows and reporting close the loop. Government interfaces shape the whole path: the National IPR Policy 2016, the licensing and incubation programmes of CSIR laboratories and IITs, and Make in India all push laboratory-to-market transfer.",
              "Commercialization is the payoff stage: turning protected IP into revenue. The routes are direct productization by the owner, licensing to an incumbent, outright assignment, or a startup and spin-off that carries the IP into the market; IP can also secure finance as collateral. India's public research system now runs technology transfer offices that patent, value and license research outputs. A campus-patented bridge-health monitoring system licensed to an instrumentation firm, or a new curing compound assigned to a chemicals major, are the everyday shapes. The success factors are boring and decisive: patent quality, market readiness, honest valuation and patient negotiation.",
            ],
            bullets: [
              "Definition: the movement of technology and the rights to use it across organizations or borders.",
              "Horizontal versus vertical: firm-to-firm spread versus the lab-to-application pipeline.",
              "Vehicles: licensing, franchising, joint ventures, contract manufacturing, turnkey projects, collaboration, consultancy.",
              "Process: identify, evaluate, value, negotiate and sign, absorb and improve, monitor.",
              "Commercialization routes: productize, license, assign, spin off - plus IP-backed finance.",
            ],
            table: {
              caption: "Vehicles of technology transfer.",
              headers: ["Mode", "What moves", "Suits"],
              rows: [
                ["Licensing", "rights plus know-how under a licence", "monetize patents without manufacturing"],
                ["Franchising", "brand, know-how, operating system", "consumer service expansion"],
                ["Joint venture", "combined equity and technology", "local market entry"],
                ["Contract manufacturing", "process specifications", "scale without IP transfer"],
                ["Turnkey project", "complete plant plus training", "infrastructure builds"],
                ["Spin-off", "IP into a new company", "university commercialization"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "Technology transfer lifecycle",
              caption:
                "Protect, partner, price, sign, absorb, monitor - in that order, with feedback all the way.",
              steps: [
                { label: "Protect the IP", note: "patents and secrets in order" },
                { label: "Find and vet partners", note: "technical fit and market" },
                { label: "Value and negotiate", note: "royalty or lump sum, terms" },
                { label: "Sign the agreement", note: "grant, training, improvements" },
                { label: "Absorb and adapt", note: "training through to production" },
                { label: "Monitor and share returns", note: "royalties, reports, renewal" },
              ],
            },
            callout: {
              type: "tip",
              title: "Exam tip",
              body: "'Modes of technology transfer' answers score best as a table plus one worked example - name a mode, what moves, when it suits. Add the horizontal-versus-vertical line for the extra mark.",
            },
            keyTerms: [
              { term: "Technology transfer", definition: "The movement of technical knowledge and rights from one organization or country to another for productive use." },
              { term: "Franchising", definition: "A licence bundle of trademark, know-how and operating methods under quality control." },
              { term: "Absorptive capacity", definition: "The receiver's ability to absorb, apply and further develop transferred technology." },
            ],
            examQuestions: [
              {
                q: "What is technology transfer? Explain its modes and the stages of the transfer process, with an example of commercializing research IP.",
                marks: 7,
                outline: [
                  "Define technology transfer and its horizontal and vertical forms.",
                  "List the vehicles: licensing, franchising, joint venture, contract manufacturing, turnkey, collaboration.",
                  "Explain the stages: identify, evaluate, value, negotiate, absorb, monitor.",
                  "Emphasize absorptive capacity - training and adaptation, not just signing.",
                  "Describe the commercialization routes: productize, license, assign, spin off.",
                  "Give the example: a campus bridge-monitoring patent licensed with field-of-use limits.",
                  "Close with India's ecosystem: the National IPR Policy, CSIR and IIT transfer offices.",
                ],
              },
              {
                q: "Distinguish horizontal from vertical technology transfer.",
                marks: 3,
              },
              {
                q: "State one advantage licensing has over a joint venture for a small IP owner.",
                marks: 2,
              },
            ],
          },
          {
            number: "5.5",
            title: "Litigation, traditional knowledge and case studies",
            body: [
              "IP litigation in India runs through civil courts and the commercial divisions of the high courts, with customs acting at the border and criminal courts handling trademark and copyright offences. The workhorse is the interim injunction, granted on the triple test: a prima facie case, balance of convenience, and irreparable injury. Final relief adds permanent injunctions with damages or accounts; trademark and copyright infringement also carry criminal penalties with imprisonment and fines, and enforcement extends to seizure of counterfeits. Because IP trials crawl, alternative dispute resolution has grown - arbitration, mediation, and WIPO's procedures for domain-name disputes.",
              "Traditional knowledge is India's signature issue: vast, oral and undocumented knowledge systems are easy prey for patents abroad, because examiners cannot find them as prior art. The answer was documentation - the Traditional Knowledge Digital Library, built by CSIR with the AYUSH ministry from about 2001, encoding Ayurveda, Unani, Siddha and Yoga in searchable form in several languages. It works: foreign patent offices consult the TKDL before granting, and the battles proved the point. The United States turmeric wound-healing patent was revoked in 1997 after CSIR's challenge; the European Patent Office's neem fungicide patent fell in 2000; and RiceTec's basmati claims were abandoned after India's 2000-2002 opposition.",
              "Assemble the case kit across the units: Novartis (Section 3(d), 2013) for patents and public health; Natco v Bayer (Section 84, 2012) for compulsory licensing; R.G. Anand (1978) for the idea-expression line; Durga Dutt Sharma (1965) for passing off; Yahoo v Akash Arora (1999) for domain names; turmeric and neem for traditional knowledge. The method for every case is the same five points: parties, year, facts, provision, holding, lesson - five lines, no storytelling. Close the subject with the engineer's habits: dated lab notebooks, file before publishing, document sources, and treat IP as an asset with a register, an audit and a plan.",
            ],
            bullets: [
              "Litigation basics: the interim injunction on the triple test; final relief of injunction plus damages or accounts.",
              "Criminal remedies exist for trademark and copyright infringement - not for patents.",
              "ADR: arbitration, mediation and WIPO domain-name procedures speed resolution.",
              "TKDL: the CSIR-AYUSH digital library of Ayurveda, Unani, Siddha and Yoga as searchable prior art.",
              "TK wins: turmeric patent revoked 1997; neem patent revoked by the EPO in 2000; RiceTec basmati claims abandoned.",
            ],
            table: {
              caption: "A case kit for the exam.",
              headers: ["Case", "Year", "Point of law"],
              rows: [
                ["R.G. Anand v Delux Films", "1978", "ideas are free; expression is protected"],
                ["Durga Dutt Sharma v Navaratna", "1965", "infringement versus passing off distinguished"],
                ["Yahoo v Akash Arora", "1999", "passing off reaches domain names"],
                ["Novartis v Union of India", "2013", "Section 3(d) therapeutic efficacy"],
                ["Natco v Bayer", "2012", "Section 84 compulsory licence"],
                ["Turmeric patent revocation", "1997", "traditional knowledge as prior art"],
              ],
            },
            diagram: {
              kind: "flow",
              title: "An IP dispute from notice to relief",
              caption:
                "Most disputes settle on the first two steps; the rest is for the stubborn ones.",
              steps: [
                { label: "Cease-and-desist notice", note: "assert rights, demand a stop" },
                { label: "Settlement or ADR", note: "licence or coexistence deal" },
                { label: "Suit and interim injunction", note: "the triple test applied" },
                { label: "Pleadings and evidence", note: "records, experts, surveys" },
                { label: "Trial and final relief", note: "permanent injunction, damages" },
                { label: "Appeal and enforcement", note: "rights made real" },
              ],
            },
            callout: {
              type: "exam",
              title: "Exam tip",
              body: "For traditional knowledge, answer in three moves: the problem (undocumented prior art), the fix (the TKDL), the victories (turmeric, neem, basmati). That structure covers the 7-marker completely.",
            },
            keyTerms: [
              { term: "TKDL", definition: "The Traditional Knowledge Digital Library - India's searchable prior-art record of its medical systems." },
              { term: "Interim injunction", definition: "A temporary court order freezing accused acts, granted on prima facie case, balance of convenience and irreparable injury." },
              { term: "Cease-and-desist notice", definition: "The formal warning letter that opens most IP disputes." },
            ],
            examQuestions: [
              {
                q: "How is traditional knowledge protected in India? Explain the TKDL and the turmeric and neem patent episodes, and suggest further safeguards.",
                marks: 7,
                outline: [
                  "Define traditional knowledge and its oral, undocumented character.",
                  "State the problem: foreign patents granted on knowledge examiners cannot find.",
                  "Explain documentation as the answer, with the TKDL's structure and languages.",
                  "Recount turmeric: the US patent granted, challenged by CSIR, revoked in 1997.",
                  "Recount neem: the EPO patent revoked in 2000 after challenge.",
                  "Add broader safeguards: disclosure of origin, sui generis laws, benefit sharing on the Nagoya model.",
                  "Conclude with the practitioner's habit: document sources and cite prior art.",
                ],
              },
              {
                q: "What is the TKDL and who maintains it?",
                marks: 2,
              },
              {
                q: "State the interim injunction triple test.",
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
      id: "weights",
      heading: "Exam weight map",
      body: [
        "RGPV CE-604(B) papers spread marks fairly evenly across the five units, with patents and the trademark-copyright block carrying the heaviest long questions because they support both definitions and procedure. The Unit IV cluster - designs, secrets, chip layouts, plant varieties - is where short questions concentrate: the four statutes with their terms are quick, guaranteed marks. Prepare one worked sketch (relief-from-royalty), one timeline (patent prosecution) and one table (infringement versus passing off) - between them they answer half the paper.",
      ],
      weightedTopics: [
        { topic: "Concept and types of IP; industrial property vs copyright", weight: "6-8 marks", note: "Every paper opens here - answer with the statute-and-term table plus the incentive-disclosure bargain." },
        { topic: "WIPO, Paris-Berne principles and the PCT route", weight: "4-6 marks", note: "National treatment, the 12- and 6-month priority periods, and the PCT flow diagram." },
        { topic: "TRIPS features and India's patent amendments", weight: "7-9 marks", note: "Principles, minimum standards, enforcement, dispute settlement; the 1999-2002-2005 trail." },
        { topic: "Patentability criteria and Sections 3-4 exclusions", weight: "7-9 marks", note: "Sections 2(1)(j), 2(1)(l), 2(ja), 2(ac) with Bishwanath Prasad 1979." },
        { topic: "Patent filing procedure with time limits", weight: "8-10 marks", note: "The 12-18-48-12 timeline plus the Section 25 oppositions - draw the line with dates." },
        { topic: "Specification drafting and claims", weight: "5-7 marks", note: "Section 10 parts, claim anatomy, comprising versus consisting of." },
        { topic: "Infringement, defences and remedies; Novartis and Natco", weight: "7-9 marks", note: "The Sections 48-104A-107A chain plus the two case studies." },
        { topic: "Copyright: works, rights, term, fair dealing", weight: "7-9 marks", note: "The Sections 13-14-57-52 chain with R.G. Anand 1978." },
        { topic: "Trademarks: ladder, registration, passing off; GI", weight: "8-10 marks", note: "The distinctiveness ladder, Section 29, Durga Dutt 1965, GI versus trademark." },
        { topic: "Designs, secrets, NDAs, chips, plants; audit, valuation, licensing, TT, TK", weight: "8-12 marks", note: "The Units IV-V cluster: terms and definitions plus one worked valuation sketch." },
      ],
    },
    {
      id: "six-weeks",
      heading: "Six-week study plan",
      body: [
        "Assuming five days a week at one to two hours, this schedule covers each unit once for understanding and once for revision, ending with timed papers. Maintain a single running sheet of tables, timelines and case one-liners - it becomes your last-day revision file.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - IP concepts and frameworks", tasks: ["Types of IP with the statute-and-term table; the incentive-disclosure bargain", "WIPO, Paris and Berne, the PCT route diagram; TRIPS features and its layers", "The Indian IP statute map; the Patents Act 1970 evolution and Section 3(d)"] },
        { week: "Week 2", focus: "Unit II - patents (first half)", tasks: ["Patentability criteria with sections and Bishwanath Prasad 1979", "Filing procedure: trace the 12-18-48-12 timeline on paper", "Pre- and post-grant opposition grounds; renewals and working statements"] },
        { week: "Week 3", focus: "Unit II - patents (second half)", tasks: ["Specification anatomy; draft the culvert claim set once by hand", "Infringement, defences and remedies; the injunction triple test", "Novartis and Natco case notes in the five-point pattern"] },
        { week: "Week 4", focus: "Unit III - copyright and trademarks", tasks: ["Section 13 categories; R.G. Anand; the Section 14 rights bundle and Section 52", "The term table: life plus 60, 60 from publication, performers 50, broadcasts 25", "The trademark ladder and matrix; the registration route; infringement vs passing off; GI essentials"] },
        { week: "Week 5", focus: "Unit IV - designs, secrets and newer rights", tasks: ["Designs Act 2000: conditions, term, Section 22 piracy; design vs patent table", "Trade secrets: the TRIPS 39 test; patent-vs-secret compare; the six NDA clauses", "The chip-layout stack and its two limitations; PPV and FR: DUS and Section 39 farmers' rights"] },
        { week: "Week 6", focus: "Unit V - management, transfer and revision", tasks: ["Audit stages; valuation approaches with the relief-from-royalty sketch", "The licensing ladder and Section 84 grounds; technology transfer modes and stages", "The litigation flow; TKDL and the traditional-knowledge cases; two full papers under time"] },
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy",
      bullets: [
        "Redraw from memory: the PCT route, the TRIPS layers, the patent timeline, the spec layers, the exclusivity pyramid and the technology transfer lifecycle.",
        "Recite the numbers: 12 / 18 / 48 / 12 months in patent prosecution; patent 20 years; design 10 plus 5; trademark 10 renewable; copyright life plus 60; GI 10 renewable.",
        "Re-derive the relief-from-royalty sketch once - 5 percent, 12 percent, about Rs 1.07 crore.",
        "Rehearse the case one-liners: Novartis 2013 (Section 3(d)), Natco 2012 (Section 84), R.G. Anand 1978, Durga Dutt 1965, Yahoo 1999, turmeric 1997.",
        "Write the six NDA clauses and the three passing-off ingredients from memory.",
        "Skim every exam-tip callout in this guide, then sleep on time - recall, not cramming, carries this paper.",
      ],
    },
    {
      id: "exam-hall",
      heading: "Exam-hall playbook",
      bullets: [
        "Plan each 7-marker as a skeleton for 30 seconds: definition, section, diagram, case or example, conclusion.",
        "Cite section numbers everywhere - 3(d), 25(1), 84, 104A, 107A, 52, 57, 29 - examiners scan for them.",
        "Draw the diagram first and label it - timeline, layers, pyramid, matrix or fork - then write prose around it.",
        "For case questions use the five-point pattern: parties, year, facts, provision, holding, lesson.",
        "Time-box: 2-3 mark shorts in 4-6 minutes, 7-markers in 14-18 minutes, and keep 10 minutes to check labels and section numbers.",
      ],
    },
    {
      id: "slips",
      heading: "Common mistakes",
      bullets: [
        "Writing 'fair use' for India - the Indian defence is fair dealing, a closed list under Section 52.",
        "Confusing assignment with licence - assignment transfers ownership; a licence only grants permission.",
        "Claiming trade secrets are registered in India - there is no registry; protection is contractual.",
        "Mixing the terms: design 10 plus 5, patent 20, trademark 10 renewable, copyright life plus 60.",
        "Forgetting that infringement needs registration but passing off does not - the Durga Dutt line.",
        "Treating a GI as someone's personal property - it is collective, place-bound and non-assignable.",
      ],
    },
  ],
};
