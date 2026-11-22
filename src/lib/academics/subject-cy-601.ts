import type { AcademicSubject } from "./types";

export const cy601: AcademicSubject = {
  id: "cy-601",
  code: "CY-601",
  title: "Cyber Crime Investigation",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: what makes a crime cyber, the catalogue of forms and frauds it takes, the psychology and impact behind it, the modus-operandi and intrusion-analysis craft, and the forensic turn that turns artefacts into admissible evidence and testimony.",
  description:
    "Five units walk from the definition, classification, extent and legal framing of cyber crime in India and abroad, through the full catalogue of forms - hacking, DoS, malware, diddling, salami attacks, phishing, stalking, financial and telecom frauds, steganography - into criminal psychology, profiling and economic-psychological-sociological impact, then modus operandi, the fraud triangle, fraud detection and the intrusion kill chain, ending with digital forensics: evidence and admissibility, acquisition and hash verification, toolkits, disk-network-mobile recovery, and the report that survives cross-examination.",
  accentColor: "#ef4444",
  emoji: "CI",
  unitCount: 5,
  totalSections: 40,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Cyber Crime - Definition, Nature and Extent",
      summary:
        "Unit I lays the subject's foundation: what cyber crime is and the two roles a computer plays in it, the four-way classification, the nature and extent of the problem in India and other countries, the structural differences from conventional crime, the trends sweeping the world, the Indian legal frame of the IT Act 2000, and the dark figure that keeps every statistic an underestimate.",
      chapter: {
        number: "01",
        title: "The Anatomy of Cyber Crime",
        intro:
          "Unit I covers the definition of cyber crime, the computer-as-target versus computer-as-tool split, the classification of cyber crimes, the nature and extent of the problem in India and other countries, the differences between conventional and cyber crimes, trends across the world, the IT Act 2000's scheme of offences, and the dark figure of unreported crime.",
        inOneBreath:
          "A cyber crime is conventional crime committed with or against a computer, so the first analytic split is computer as target versus computer as tool. Classification runs along four objects - person, property, government and society - and the IT Act 2000 names the Indian offences. Cyber crime differs from conventional crime in reach, anonymity, evidence and jurisdiction, and the dark figure means official numbers always understate the true extent.",
        sections: [
          {
            number: "1.1",
            title: "Defining cyber crime - the two roles of a computer",
            body: [
              "A cyber crime is any unlawful act where a computer or network is either the instrument of the crime, the target of the crime, or both. The definition matters because it forces a second question: which role does the computer play? When the machine is the target, the attacker attacks the system itself - hacking a server, infecting a network, crashing a database. When the machine is the tool, the attacker uses it as a weapon against a person or institution - stealing a credit card through a phishing site, defaming a rival on a forum, running an online scam. Most real cases mix the two: the intruder first attacks a system (target) and then uses it to reach victims (tool).",
              "A worked chain shows the mix. A phishing email (tool: the computer lures the clerk) harvests a bank clerk's credentials; the attacker logs into the core banking system (target: the system is broken into); then issues transfers to mule accounts (tool: the system moves the money). Three roles in one incident, and each step leaves a different artefact - a mail header, an authentication log, a transaction record. Investigation is the discipline of reading those artefacts backwards to reconstruct the chain.",
              "India's statutory anchor is the Information Technology Act, 2000, amended in 2008, which criminalizes unauthorized access and damage to computer systems (sections 43, 65, 66), identity theft and cheating by personation (66C, 66D), privacy violations (66E), cyber terrorism (66F) and obscene content (67). The Act's existence establishes the point examiners want: cyber crime is not a metaphor - it is a scheduled body of offences with penalties, procedure and adjudication. The global analogue is the Budapest Convention (2001), the first international treaty on cyber crime.",
              "Exam framing: expect 'define cyber crime' and 'computer as target vs tool'. Give the three-part definition, run one hybrid attack chain that exercises both roles, and close with the statutory anchors - the IT Act 2000 in India and the Budapest Convention internationally. The hybrid-chain example is what separates a definition answer from an understanding answer. A marks-splitting habit helps: two for the definition pair, four for the worked chain, and the rest for the statutory anchors.",
            ],
            keyTerms: [
              { term: "Cyber crime", definition: "Any unlawful act where a computer or network is the instrument, the target, or both." },
              { term: "Computer as target", definition: "The system itself is attacked - hacking, malware, denial of service, data theft." },
              { term: "Computer as tool", definition: "The system is used to commit an offence against a person or institution - phishing, fraud, stalking." },
              { term: "IT Act 2000", definition: "India's statute for electronic offences - sections 43, 65, 66, 66C, 66D, 66E, 66F and 67, amended 2008." },
              { term: "Budapest Convention", definition: "The Council of Europe's 2001 treaty harmonizing cyber crime laws across borders." },
            ],
            table: {
              caption: "The two roles a computer plays in crime.",
              headers: ["Role", "Computer's position", "Examples", "Primary evidence left"],
              rows: [
                ["Computer as target", "Victim of the attack", "Hacking, viruses, DoS, vandalism of websites", "System logs, packet captures, memory dumps"],
                ["Computer as tool", "Weapon against a human target", "Phishing, credit card fraud, stalking, defamation", "Mail headers, web server logs, transaction trails"],
                ["Hybrid (most cases)", "Both, in sequence", "Intrude into a bank, then move stolen funds", "Both sets - the chain links them"],
              ],
            },
            bullets: [
              "Cyber crime = unlawful act where a computer or network is instrument, target, or both.",
              "Target role: the system is the victim - hacking, malware, DoS, data destruction.",
              "Tool role: the system serves the attacker's crime against people - phishing, fraud, harassment.",
              "Real incidents are hybrids: attack the system first, then use it against the victim.",
              "Statutory anchors: IT Act 2000 (India, amended 2008) and the Budapest Convention (2001).",
              "Each role leaves different evidence, so the role split drives the investigation plan.",
            ],
            diagram: {
              kind: "compare",
              title: "Computer as target vs computer as tool",
              caption: "The first analytic split in every cyber crime case - who or what is the victim.",
              left: {
                heading: "Computer as target",
                items: [
                  "The system itself is the victim",
                  "Examples: hacking, viruses, DoS, web defacement",
                  "Offender motive: access, damage, disruption",
                  "Evidence: host and network logs on the victim side",
                ],
              },
              right: {
                heading: "Computer as tool",
                items: [
                  "A person or institution is the victim",
                  "Examples: phishing, fraud, stalking, defamation",
                  "Offender motive: money, revenge, notoriety",
                  "Evidence: mail, web and transaction trails on the victim side",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The dual-role trap",
              body: "Ransomware is the classic exam case: the encrypting of servers is a computer-as-target offence, while the extortion email is a computer-as-tool offence. Answering 'which one is it?' with 'both - here is the chain' is exactly the structure the examiner rewards.",
            },
            examQuestions: [
              {
                q: "Define cyber crime and explain the computer-as-target versus computer-as-tool classification. Illustrate with one attack chain in which the computer plays both roles, and name the Indian statute that criminalizes such acts.",
                marks: 14,
                outline: [
                  "Definition: unlawful act where a computer/network is instrument, target, or both",
                  "Target role: hacking, malware, DoS - the system is the victim",
                  "Tool role: phishing, fraud, stalking - the system attacks a person",
                  "Hybrid chain: phishing mail -> stolen credentials -> intrusion -> fraudulent transfers",
                  "Each step leaves a distinct artefact (mail header, auth log, transaction record)",
                  "IT Act 2000 sections 43, 65, 66, 66C, 66D, 66F - amended 2008",
                  "Budapest Convention as the international analogue",
                ],
              },
              {
                q: "What features of cyber crime make it different in character from conventional crime? List and explain at least five.",
                marks: 7,
                outline: [
                  "Borderless reach - the victim and offender may sit in different countries",
                  "Anonymity - networks, proxies and botnets mask the offender",
                  "Speed and scale - one script hits thousands of victims in seconds",
                  "Evidence is digital and volatile - logs rotate, memory evaporates",
                  "Jurisdiction is contested - which country's law applies is itself a question",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Classification of cyber crimes",
            body: [
              "Classification is the examiner's favourite frame because it organizes an unmanageable catalogue into four legal objects. Crimes against persons: cyberstalking, cyberbullying, identity theft, harassment and defamation - the victim is a human being and the harm is psychological, reputational or financial. Crimes against property: hacking, viruses and worms, denial of service, data diddling, salami attacks and software piracy - the victim is an asset and the harm is loss of money, data or availability. Crimes against government: hacking state websites, defacing e-governance portals, cyber terrorism and espionage against critical infrastructure. Crimes against society: cyber pornography, trafficking, online gambling and hate content - the victim is the public order itself.",
              "A worked classification exercise shows how one incident decomposes. A gang runs a fake KYC website, harvests Aadhaar and PAN data, empties mobile wallets, and posts victims' documents on a public channel to intimidate them. That single campaign is simultaneously a crime against property (wallet theft, 66C identity theft), against persons (harassment, 66E privacy violation), and against society (distribution of personal data at scale). Investigators classify per victim and per act - one case number, many classifications - because each class maps to different sections, different proof requirements and different agencies.",
              "The classification also drives the investigative posture. Person-targeted crimes demand victim interviews and content preservation (chat logs, profiles, screenshots) before the platform deletes them. Property-targeted crimes demand system forensics - disk images, log analysis, malware samples. Government-targeted crimes escalate to national agencies, and society-targeted crimes require takedown coordination with platforms and regulators. Classification is not paperwork; it is the routing table of the investigation.",
              "Exam framing: expect 'classify cyber crimes with examples'. Draw the four-branch classification, give at least two named examples per branch, and attach the relevant IT Act sections where they exist (66C identity theft, 66D cheating by personation, 66F cyber terrorism, 67 obscenity). Finish with the one-campaign-many-classes observation - it demonstrates that the classification is analytic, not clerical. The campaign decomposition doubles as the worked example - one fake-KYC case classified three ways demonstrates the whole scheme.",
            ],
            keyTerms: [
              { term: "Crime against person", definition: "Cyberstalking, bullying, identity theft, defamation - the human is the object." },
              { term: "Crime against property", definition: "Hacking, malware, DoS, diddling, salami attacks - the asset is the object." },
              { term: "Crime against government", definition: "Attacks on state systems, e-governance portals and critical infrastructure." },
              { term: "Crime against society", definition: "Pornography, trafficking, gambling and hate content - public order is the object." },
              { term: "Victimology", definition: "The study of who the victim is and why they were chosen - it shapes classification and profiling." },
            ],
            table: {
              caption: "The four-way classification with statutory hooks.",
              headers: ["Class", "Object harmed", "Named examples", "IT Act hooks"],
              rows: [
                ["Against persons", "An individual's dignity, money, safety", "Cyberstalking, bullying, identity theft, defamation", "66C, 66D, 66E, 67"],
                ["Against property", "Money, data, availability", "Hacking, viruses, DoS, data diddling, salami attacks", "43, 65, 66"],
                ["Against government", "State systems and authority", "Website defacement, cyber terrorism, espionage", "66F, 70"],
                ["Against society", "Public order and morals", "Pornography, trafficking, gambling, hate content", "67, 67A, 67B"],
              ],
            },
            bullets: [
              "Four objects of harm organize the catalogue: person, property, government, society.",
              "Person crimes: stalking, bullying, identity theft, defamation - dignity and money.",
              "Property crimes: hacking, malware, DoS, diddling, salami - assets and availability.",
              "Government crimes: defacement of state sites, cyber terrorism, espionage.",
              "Society crimes: pornography, trafficking, gambling - public order at scale.",
              "One campaign can fall in several classes at once - classify per act and per victim.",
            ],
            diagram: {
              kind: "fork",
              title: "The four objects of cyber crime",
              caption: "Every named offence in this subject hangs from one of these four branches.",
              start: "Cyber crime",
              branches: [
                { label: "Against persons", outcome: "stalking, bullying, identity theft, defamation - dignity and finances", good: false },
                { label: "Against property", outcome: "hacking, malware, DoS, diddling, salami - money and availability", good: false },
                { label: "Against government", outcome: "defacement, cyber terrorism, espionage against state systems", good: false },
                { label: "Against society", outcome: "pornography, trafficking, gambling - public order and morals", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "Classify first, then attach sections",
              body: "The full-credit pattern: state the four classes, name two offences per class, then attach IT Act sections where they exist. An answer that lists crimes without classification, or classes without offences, loses the structuring marks either way.",
            },
            examQuestions: [
              {
                q: "Classify cyber crimes into their four principal categories. Give two named examples in each category with the corresponding IT Act section, and show how a single campaign can fall into more than one category.",
                marks: 14,
                outline: [
                  "Against persons: cyberstalking, identity theft - sections 66C, 66D, 66E",
                  "Against property: hacking, viruses, DoS, diddling - sections 43, 65, 66",
                  "Against government: defacement, cyber terrorism - section 66F, section 70",
                  "Against society: pornography, gambling - sections 67, 67A, 67B",
                  "Worked campaign: fake KYC site -> data theft -> wallet drain -> intimidation posting",
                  "The campaign spans person, property and society classes simultaneously",
                  "Classification routes the case to different sections, proof and agencies",
                ],
              },
              {
                q: "Distinguish a crime against the government from a crime against society, with two examples of each.",
                marks: 7,
                outline: [

                  "Government: the state and its systems are the object - defacement of portals, 66F terrorism",

                  "Society: public order is the object - trafficking networks, obscene distribution, 67",

                  "Investigation differs: national agencies and takedowns vs platform and regulator coordination",

                  "Government crimes route to national agencies and sections 66F/70 duties",

                  "Society crimes answer through platform takedowns and regulator coordination",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Nature and extent of cyber crimes in India",
            body: [
              "India's cyber crime landscape is shaped by three forces: a population that digitized faster than it was trained to defend itself, an economy that moved money onto rails (UPI, mobile wallets, card networks) where fraud is instant and reversible for neither side, and a reporting system that catches only a fraction of what happens. The nature of what dominates the dockets reflects those forces: online financial fraud, UPI payment frauds, job and lottery scams, sextortion, identity theft and social-media harassment lead in volume; cyber terrorism and critical-infrastructure attacks are rare but carry the heaviest penalties.",
              "The extent is measured through a ladder of institutions, and each rung loses cases. NCRB's Crime in India series reports cases registered under the IT Act and IPC cyber sections; the National Cyber Crime Reporting Portal (cybercrime.gov.in) and the 1930 helpline accept complaints directly; the Indian Cyber Crime Coordination Centre (I4C) coordinates across states; state cyber cells and local police register FIRs and investigate; the IT Act's Adjudicating Officers and the courts adjudicate. Attrition happens at every step - incidents never detected, victims who never complain, complaints that never become FIRs, FIRs that never reach chargesheet, chargesheets that fail for want of electronic evidence handled correctly.",
              "A worked read of the ladder makes the extent honest: because complaints rose sharply in the portal era, NCRB counts rose too - much of the rise is better reporting of a far larger base. The extent of the problem is therefore best stated as a trend and a structure, not a single number: financial fraud dominates the mix, urban states register the most cases, and conviction rates depend heavily on whether electronic evidence was preserved with the section 65B certificate. An answer that quotes the ladder instead of memorized totals is both safer and stronger.",
              "Exam framing: expect 'nature and extent of cyber crimes in India'. Name the dominant crime mix (financial fraud first), draw the reporting ladder from incident to conviction, and attribute the statistical rise to portal-driven reporting. Avoid invented figures - institutions, structures and trends are what the examiner can verify. A marks-splitting habit helps: two for the dominant crime mix, three for the reporting ladder, and the rest for the attrition analysis.",
            ],
            keyTerms: [
              { term: "NCRB", definition: "National Crime Records Bureau - publishes the annual Crime in India statistics including IT Act cases." },
              { term: "National Cyber Crime Reporting Portal", definition: "cybercrime.gov.in - the central complaint portal, paired with the 1930 financial-fraud helpline." },
              { term: "I4C", definition: "Indian Cyber Crime Coordination Centre - MHA body coordinating states, platforms and banks." },
              { term: "Adjudicating Officer", definition: "The IT Act officer who hears penalty cases up to a statutory limit." },
              { term: "Section 65B certificate", definition: "The Indian Evidence Act certificate without which electronic records are generally inadmissible." },
            ],
            table: {
              caption: "The Indian reporting ladder and where cases leak away.",
              headers: ["Rung", "Institution / instrument", "What happens there", "Typical loss"],
              rows: [
                ["Incident", "Victim's system, bank, platform", "Crime occurs; detection may never happen", "Most loss - many incidents go unnoticed"],
                ["Complaint", "cybercrime.gov.in portal, 1930 helpline", "Victim or bank files a complaint", "Shame, small losses, doubt suppress reporting"],
                ["FIR", "State cyber cell or police station", "Cognizable offence registered", "Jurisdiction confusion, jurisdictional ping-pong"],
                ["Investigation", "Cyber forensics labs, platforms, banks", "Evidence seizure and 65B certification", "Logs rotated, devices handled wrongly"],
                ["Trial", "Courts, Adjudicating Officers", "Prosecution and adjudication", "Evidence rejected without certificate"],
              ],
            },
            bullets: [
              "Three forces shape India's mix: rapid digitization, instant payment rails, a leaky reporting ladder.",
              "Volume leaders: online financial fraud, UPI scams, job/lottery frauds, sextortion, identity theft.",
              "NCRB Crime in India counts IT Act and IPC cyber cases; the rise tracks portal-driven reporting.",
              "cybercrime.gov.in and the 1930 helpline are the two frontline reporting channels.",
              "I4C coordinates states, banks and platforms; state cyber cells register and investigate FIRs.",
              "Convictions hinge on electronic evidence handled with the section 65B certificate.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From incident to conviction - the attrition ladder",
              caption: "Each stage filters cases; the extent of cyber crime is the base of this funnel, not its top.",
              stages: [
                { label: "Incident", note: "crime occurs - detection not guaranteed" },
                { label: "Complaint", note: "portal or 1930 helpline" },
                { label: "FIR", note: "cyber cell registers the case" },
                { label: "Investigation", note: "seizure, forensics, 65B certificates" },
                { label: "Trial", note: "adjudication and prosecution" },
                { label: "Conviction", note: "the narrow tip of the funnel" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never quote invented statistics",
              body: "Examiners can verify institutions and trends, not the numbers students remember. Describe the reporting ladder and the dominant crime mix instead of quoting case counts - a wrong figure costs credibility and marks; the ladder earns both.",
            },
            examQuestions: [
              {
                q: "Discuss the nature and extent of cyber crimes in India: the dominant crime mix, the forces driving it, the institutions that measure and coordinate the response, and where cases leak away between incident and conviction.",
                marks: 14,
                outline: [
                  "Nature: financial fraud dominates - UPI, wallets, job and lottery scams, sextortion",
                  "Forces: fast digitization, instant payment rails, uneven digital literacy",
                  "Measurement: NCRB Crime in India statistics on IT Act and IPC cyber cases",
                  "Reporting: cybercrime.gov.in portal and 1930 helpline as frontline channels",
                  "Coordination: I4C links states, banks and platforms",
                  "Adjudication: state cyber cells investigate; IT Act Adjudicating Officers and courts decide",
                  "Attrition at every rung - detection, complaint, FIR, evidence handling, section 65B",
                ],
              },
              {
                q: "Why have official cyber crime statistics in India risen sharply even though measurement is imperfect?",
                marks: 7,
                outline: [

                  "The reporting portal lowered the cost of complaining - much of the rise is better reporting",

                  "Genuine growth also runs on payment rails and smartphone penetration",

                  "State-level differences reflect awareness and cyber cell capacity",

                  "Urban states register most cases - capacity and awareness drive counts",

                  "Payment penetration expands the exposed population",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "Nature and extent in other countries",
            body: [
              "Every jurisdiction measures cyber crime with its own instruments, and comparing them teaches the same lesson as the Indian ladder: the numbers differ because the collection differs, more than because the crime differs. The United States runs the FBI's Internet Crime Complaint Center (IC3), which aggregates public complaints into an annual report dominated by phishing, BEC and investment fraud. The United Kingdom routes fraud to Action Fraud and publishes Crime Survey estimates that deliberately include unreported victimization. Europol's annual Internet Organised Crime Threat Assessment (IOCTA) maps the European threat picture, and INTERPOL coordinates cross-border operations where no single nation's statistics can see the whole.",
              "The instruments also differ in legal structure. Common-law countries lean on fraud and computer-misuse statutes (the US Computer Fraud and Abuse Act, the UK Computer Misuse Act 1990), while continental Europe harmonizes through the Budapest Convention (2001) and EU directives on data protection and attacks against information systems. China, Russia and much of Asia run their own regimes with different reporting cultures, so a 'global extent' figure cannot exist - only a comparison of trends. The trends, though, converge: fraud and extortion dominate everywhere, ransomware hit hospitals and municipalities across continents, and reporting volumes rose wherever portals made complaining cheap.",
              "A worked comparison shows the analytic use. BEC is the top-loss crime in IC3's US data and a top concern in Europol's assessments, yet in India's dockets the same crime appears smaller because it is reported under cheating provisions (IPC 420, now 66D) rather than as a named category. The crime is global; the label is local. Investigators therefore compare modus operandi across jurisdictions, not statistics - the same gang's playbook shows up in three countries' caseloads under three names.",
              "Exam framing: expect 'nature and extent of cyber crimes in other countries'. Name one institution and one instrument per region (IC3, Action Fraud, IOCTA, Budapest Convention), state the convergence of trends (fraud, extortion, ransomware), and close with the label-versus-crime point - statistics diverge by collection method, not by criminal imagination. Close with the convergence point - fraud and extortion lead every region's list even where the statutory labels differ.",
            ],
            keyTerms: [
              { term: "IC3", definition: "The FBI's Internet Crime Complaint Center - the US complaint aggregator and annual report." },
              { term: "Action Fraud", definition: "The UK's national fraud and cyber crime reporting centre." },
              { term: "IOCTA", definition: "Europol's Internet Organised Crime Threat Assessment - the EU's annual threat picture." },
              { term: "Budapest Convention", definition: "The 2001 treaty harmonizing cyber crime offences and cross-border cooperation procedures." },
              { term: "MLAT", definition: "Mutual Legal Assistance Treaty - the formal channel for cross-border evidence requests." },
            ],
            table: {
              caption: "Who measures what, where.",
              headers: ["Jurisdiction / body", "Instrument", "What it measures", "Signature finding"],
              rows: [
                ["United States", "IC3 annual report", "Public complaints by type and loss", "BEC and investment fraud top the losses"],
                ["United Kingdom", "Action Fraud + Crime Survey", "Reported fraud and survey-based victimization", "Survey shows unreported victimization at scale"],
                ["European Union", "Europol IOCTA", "Organized crime threat picture", "Ransomware as the dominant business model"],
                ["Cross-border", "Budapest Convention, INTERPOL", "Harmonized offences, joint operations", "Cooperation channels exist but are slow"],
              ],
            },
            bullets: [
              "US: FBI's IC3 aggregates complaints; phishing, BEC and investment fraud lead the losses.",
              "UK: Action Fraud reports plus Crime Survey estimates that include unreported crime.",
              "EU: Europol's IOCTA tracks ransomware, fraud and child sexual abuse material trends.",
              "Budapest Convention (2001) harmonizes offences and 24/7 contact points across parties.",
              "Statistics diverge by collection method - surveys see what portals cannot.",
              "The crime is global, the label is local: the same playbook appears under different statute names.",
            ],
            diagram: {
              kind: "compare",
              title: "Measuring the same crimes, two ways",
              caption: "Portals count complaints; surveys and threat assessments estimate the base they miss.",
              left: {
                heading: "Complaint-based (IC3, Action Fraud, NCRB)",
                items: [
                  "Counts what victims actually report",
                  "Sensitive to reporting cost and awareness",
                  "Good for loss figures and trend direction",
                  "Blind to the dark figure",
                ],
              },
              right: {
                heading: "Assessment-based (IOCTA, Crime Survey)",
                items: [
                  "Estimates the threat and unreported base",
                  "Built from cases, surveys and expert panels",
                  "Good for the picture behind the numbers",
                  "Not a legal count - no case-level detail",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The label-versus-crime sentence",
              body: "A business email compromise is 'BEC' in an American report and 'cheating by personation' in an Indian FIR. Writing that sentence in the exam shows you understand why international statistics never agree - collection instruments, not crime, drive the differences.",
            },
            examQuestions: [
              {
                q: "Compare the nature and extent of cyber crime in India with that in other countries, naming the measurement institutions and explaining why international statistics diverge even when the underlying crimes converge.",
                marks: 14,
                outline: [
                  "India: NCRB statistics, cybercrime.gov.in portal, 1930 helpline, I4C coordination",
                  "US: FBI's IC3 complaint aggregation - phishing, BEC, investment fraud lead losses",
                  "UK: Action Fraud plus Crime Survey estimates including unreported victimization",
                  "EU: Europol IOCTA threat assessment - ransomware as the dominant model",
                  "Budapest Convention (2001) harmonizes offences and cross-border cooperation",
                  "Same crime, different labels: BEC in the US vs 66D cheating in an Indian FIR",
                  "Statistics diverge by collection method; the modus operandi converges worldwide",
                ],
              },
              {
                q: "What is the Budapest Convention and why does cross-border prosecution still remain difficult?",
                marks: 7,
                outline: [

                  "Council of Europe treaty (2001): harmonized offences, procedures, 24/7 networks",

                  "Evidence sits in another country; MLAT requests take months",

                  "Data localization, differing definitions and non-party states complicate requests",

                  "Investigative powers differ - lawful seizure at home may be unlawful abroad",

                  "Cloud storage splits one crime's evidence across several jurisdictions",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Conventional crimes vs cybercrimes",
            body: [
              "The syllabus asks for the differences, and the differences are structural - six dimensions where cyber crime behaves differently from a street crime. Scene: a mugging has one place and one time; a phishing campaign has thousands of victims in a hundred cities simultaneously. Anonymity: the street offender is seen; the cyber offender works through layers of proxies, VPNs, compromised machines and crypto rails. Evidence: a street crime leaves physical traces that decay slowly; a cyber crime leaves digital traces that rotate on schedule - logs overwrite, memory dies on reboot, platforms purge messages on policy timers.",
              "Jurisdiction and attribution follow. A theft crosses one police boundary at most; a cyber theft crosses national borders in milliseconds, and which court hears the case is itself contested - the victim's country, the server's country, the offender's country all have claims. Attribution inverts the usual economics too: identifying a street offender is the hard part and the arrest is quick; in cyber crime the identification may take months of log correlation and international requests, and even a successful trace can end at a proxy or a rented identity. Speed and scale invert the protective economics as well - traditional crime is capped by physical effort, while one working script scales to unlimited victims at zero marginal cost.",
              "A worked contrast makes the table concrete. A pickpocket and a card skimmer both steal a wallet's money: the pickpocket needs proximity, leaves fingerprints, and the case stays in one police district; the skimmer plants a device that copies hundreds of cards across weeks, then cashes out through ATMs and mules in several countries - the 'one crime' is really hundreds, spread over jurisdictions that must coordinate through MLATs. Same intent, different physics, and the physics dictate the investigation.",
              "Exam framing: the six-dimension table is the answer skeleton - scene, anonymity, evidence, jurisdiction, speed and scale, victim-offender relationship. Give the pickpocket-versus-skimmer worked contrast, then land the pivot: because the physics differ, the investigation differs - digital preservation, log timelines and international cooperation replace canvassing and fingerprints. The pickpocket-versus-skimmer trace is the worked heart of the answer; spend a full paragraph on it.",
            ],
            keyTerms: [
              { term: "Jurisdiction", definition: "Which state's courts and laws govern the offence - contested when borders are crossed in milliseconds." },
              { term: "Digital evidence", definition: "Logs, images and records whose volatility and admissibility rules shape cyber investigations." },
              { term: "Attribution", definition: "Tracing an offence to a real person through layers of technical and legal indirection." },
              { term: "MLAT", definition: "Mutual Legal Assistance Treaty - the slow-but-formal route for cross-border evidence." },
            ],
            table: {
              caption: "Six structural differences that reshape the investigation.",
              headers: ["Dimension", "Conventional crime", "Cyber crime"],
              rows: [
                ["Scene", "One place, one time", "Thousands of victims, many countries, one script"],
                ["Anonymity", "Offender often seen or known", "Proxies, VPNs, botnets, stolen identities"],
                ["Evidence", "Physical traces, decay slowly", "Digital traces, rotate and vanish on schedule"],
                ["Jurisdiction", "Local police boundaries", "Multiple national claims; MLAT coordination"],
                ["Speed and scale", "Capped by physical effort", "Zero marginal cost - unlimited victims"],
                ["Victim-offender", "Often proximate, sometimes known", "Almost always strangers, continents apart"],
              ],
            },
            bullets: [
              "Scene: one street corner vs thousands of victims hit simultaneously by one script.",
              "Anonymity: face-to-face recognition vs layered proxies and rented infrastructure.",
              "Evidence: fingerprints and witnesses vs volatile logs needing urgent preservation.",
              "Jurisdiction: single district vs contested multi-country claims handled through MLATs.",
              "Scale: physical effort caps traditional crime; scripts scale at zero marginal cost.",
              "Consequence: canvassing and fingerprints are replaced by preservation, timelines and cooperation.",
            ],
            diagram: {
              kind: "matrix",
              title: "Where an offence sits",
              caption: "Plot any offence by reach and evidence type; the upper-right quadrant changes everything about the investigation.",
              axes: { x: "Reach (local -> global)", y: "Evidence (physical -> digital)" },
              quadrants: [
                { label: "Local street crime", note: "one district, fingerprints and witnesses" },
                { label: "Global cyber crime", note: "multi-country, log timelines and MLATs" },
                { label: "Local fraud with papers", note: "documents and CCTV inside one jurisdiction" },
                { label: "Globalized conventional fraud", note: "physical network spread across borders" },
              ],
            },
            callout: {
              type: "exam",
              title: "Six dimensions, one worked contrast",
              body: "Write the six-row table, then spend a paragraph on the pickpocket-versus-card-skimmer contrast. The table earns the structure marks; the worked contrast earns the understanding marks - together they fill a full 14-mark answer.",
            },
            examQuestions: [
              {
                q: "Differentiate between conventional crimes and cybercrimes on at least six dimensions, and illustrate with a worked contrast of a pickpocket and a card skimmer stealing the same wallet's money.",
                marks: 14,
                outline: [
                  "Scene: one place and time vs thousands of simultaneous victims",
                  "Anonymity: recognition vs proxies, botnets and stolen identities",
                  "Evidence: durable physical traces vs rotating digital traces",
                  "Jurisdiction: local boundaries vs contested multi-country claims",
                  "Speed and scale: physical cap vs zero-marginal-cost scripts",
                  "Victim-offender relationship: proximate vs distant strangers",
                  "Worked contrast: pickpocket's fingerprints vs skimmer's weeks-long, multi-country cash-out",
                ],
              },
              {
                q: "Why does jurisdiction become the central legal problem in cyber crime?",
                marks: 7,
                outline: [

                  "Victim, server and offender often sit in three different countries",

                  "Each country's law claims the case; definitions of the offence differ",

                  "Evidence must be requested via MLAT - slow, formal and uncertain",

                  "Online content rules conflict - lawful publication in one state is criminal in another",

                  "Enforcement ends where cooperation ends - no global police force exists",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Trends in cyber crimes across the world",
            body: [
              "The global trend list is short enough to memorize and rich enough to explain. Ransomware industrialized: ransomware-as-a-service (RaaS) split the work between developers who sell kits on affiliate portals and affiliates who deploy them, turning ransomware from a hacker's stunt into a franchise business with support desks. Double extortion became the default: encrypt for leverage, exfiltrate for leverage, and punish non-payers by publishing the stolen data. Business email compromise (BEC) became the top-loss fraud: a spoofed or compromised executive mailbox redirects a payment - no malware, no noise, just a convincing thread and a changed bank account.",
              "A worked trend chain shows why these families grow together. A single phishing kit harvests credentials; those credentials feed BEC one day and serve as a ransomware foothold the next; the ransomware crew exfiltrates data and auctions it when the victim balks; the auction feeds the next gang's BEC list. Crime families are supply chains - one gang's byproduct is another's raw material, which is why takedowns of one brand rarely dent the overall numbers. Newer rails compound the trend: cryptocurrency made extortion payments safe from clawback, mobile and UPI rails moved fraud to the individual, and generative AI now drafts flawless lures and deepfake voice calls that defeat 'verify by phone' advice.",
              "The defensive reading of the trend list matters for this subject: the crimes that grew fastest are those with the weakest technical signature. BEC leaves no malware for an antivirus to catch - it is a human fraud on a human channel. RaaS affiliates pick targets by scanning for unpatched VPNs and RDP, so exposure management matters more than any single tool. And the AI-enabled shift pushes defence back to process: callbacks on verified numbers, dual approval for payments, and treating urgency in any channel as a signal to slow down.",
              "Exam framing: expect 'discuss trends in cyber crimes across the world'. Name RaaS with double extortion, BEC as the top-loss fraud, crypto rails, mobile/UPI fraud and AI-enabled scams; then run the supply-chain observation - one gang's exfiltrated data becomes another gang's BEC list - and close with the process defences the trends imply. Add the economics - RaaS portals, affiliate splits and support desks make ransomware a franchise business, not a skill.",
            ],
            keyTerms: [
              { term: "Ransomware-as-a-service", definition: "Developers lease ransomware kits to affiliates through portals and split the ransom." },
              { term: "Double extortion", definition: "Encrypt the network and exfiltrate the data, then charge for decryption and suppression." },
              { term: "Business email compromise", definition: "Spoofed or hijacked executive mailboxes redirect payments - no malware required." },
              { term: "Deepfake", definition: "AI-generated audio or video used to impersonate trusted voices in fraud and disinformation." },
              { term: "Phishing kit", definition: "Packaged phishing infrastructure that clones sites and harvests credentials at scale." },
            ],
            table: {
              caption: "The global trend cards.",
              headers: ["Trend", "What changed", "Primary victims"],
              rows: [
                ["RaaS + double extortion", "Franchise model; publish-or-pay leverage", "Hospitals, municipalities, manufacturers"],
                ["BEC", "No-malware payment fraud over mail", "Companies with wire-approval gaps"],
                ["Crypto rails", "Unclawbackable extortion and scam payments", "Any victim asked to pay in crypto"],
                ["Mobile / UPI fraud", "Fraud moved to individuals' phones", "Retail banking and wallet users"],
                ["AI-enabled scams", "Perfect lures, cloned voices, synthetic ID", "Everyone - the lure quality ceiling lifted"],
              ],
            },
            bullets: [
              "Ransomware industrialized: developer-owns-kit, affiliate-deploys, support desk included.",
              "Double extortion: encrypt for leverage, exfiltrate for leverage, publish to punish.",
              "BEC is the top-loss fraud - a human fraud on a human channel, no technical signature.",
              "Crypto rails made extortion payments irreversible and quiet.",
              "Mobile and UPI rails moved fraud to individuals at scale.",
              "Generative AI lifted lure quality - process controls (callbacks, dual approval) matter more.",
            ],
            diagram: {
              kind: "flow",
              title: "The ransomware-and-fraud supply chain",
              caption: "Crime families are supply chains - one gang's byproduct is the next gang's raw material.",
              steps: [
                { label: "Phishing kit", note: "harvest credentials at scale" },
                { label: "Foothold", note: "credentials open VPN/RDP doors" },
                { label: "RaaS deploy", note: "encrypt + exfiltrate" },
                { label: "Extort", note: "double leverage; crypto payment" },
                { label: "Data auction", note: "breached data feeds the next gang's BEC list" },
              ],
            },
            callout: {
              type: "tip",
              title: "Why takedowns do not dent the numbers",
              body: "Because the ecosystem is a supply chain: arresting one affiliate or sinking one C2 leaves the kits, the lists and the launderers in place. The structural defences are process ones - payment callbacks, dual approval and patch discipline - which is the sentence examiners reward.",
            },
            examQuestions: [
              {
                q: "Discuss the major trends in cyber crimes across the world - ransomware-as-a-service and double extortion, business email compromise, cryptocurrency rails, mobile and UPI frauds, AI-enabled scams - and explain how these families feed one another.",
                marks: 14,
                outline: [
                  "RaaS: franchise split between developers and affiliates, with support desks",
                  "Double extortion: encrypt plus exfiltrate; publish to punish non-payers",
                  "BEC: spoofed executive mailboxes redirect payments - no malware signature",
                  "Crypto rails: irreversible, quiet extortion and scam payments",
                  "Mobile/UPI: retail fraud at individual scale",
                  "AI-enabled: flawless lures and deepfake voices defeat phone verification",
                  "Supply chain: breached data from one gang feeds the next gang's target lists",
                ],
              },
              {
                q: "Why is business email compromise the hardest of the global trends to stop with technology alone?",
                marks: 7,
                outline: [

                  "No malware, no exploit - the attack rides ordinary email and human trust",

                  "Domain spoofing and lookalikes defeat naive filtering",

                  "Defence is process: callback verification, dual approval, payment-freeze drills",

                  "The attack rides legitimate infrastructure - nothing to patch or block",

                  "Urgency and authority exploit human reflexes that filters cannot see",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "The Indian legal frame - the IT Act 2000",
            body: [
              "The Information Technology Act, 2000 - amended by the IT Amendment Act, 2008 - is the statute that makes cyber crime a scheduled offence in India, and its scheme has three layers. The substantive layer defines offences and penalties: section 43 (unauthorized access and damage, with compensation), section 65 (tampering with source code), section 66 (computer-related offences - dishonestly or fraudulently doing any act referred to in 43), sections 66C and 66D (identity theft; cheating by personation using a computer resource), section 66E (violation of privacy), section 66F (cyber terrorism, punishable up to life) and section 67 with 67A and 67B (obscene, sexually explicit and child sexual abuse material).",
              "The procedural layer makes the offences investigable and the evidence admissible. It designates computer resources as searchable and seizable, empowers notified officers, and - critically for prosecutions - pairs with section 65B of the Indian Evidence Act, under which electronic records (logs, images, chats, call detail records) are admissible only when accompanied by a certificate describing the device and process that produced them. The Supreme Court's Arjun Panditrao Khotkar judgment (2020) settled that the 65B certificate is a mandatory condition, which is why evidence handling is a legal act, not just a technical one.",
              "A worked mapping shows the Act in action. A fake-KYC gang that steals identities and drains wallets is charged under 66C (identity theft) and 66D (cheating by personation); the intrusion into the payment platform adds section 66; the leaked documents add 66E; if the gang threatened a bank with disruption, 66F cyber terrorism enters. The adjudication layer then splits by magnitude: penalty cases go to Adjudicating Officers, larger offences proceed as criminal prosecutions, and appeals historically ran through the Cyber Appellate Tribunal. One campaign, one statute, multiple sections - the examiner's mapping exercise in miniature.",
              "Exam framing: expect 'describe the IT Act 2000 and its major sections'. Write the three-layer scheme (substantive offences, procedural machinery, adjudication), produce the section table with one-line offences, and attach the 65B certificate point with the Arjun Panditrao citation - the legal-technical bridge is the mark-earning insight. Anchor the answer with the section table - one line per section, one essence per line - before any narrative begins.",
            ],
            keyTerms: [
              { term: "Section 43", definition: "Unauthorized access and damage to computer resources - civil penalty and compensation." },
              { term: "Section 66", definition: "Dishonest or fraudulent computer-related offences - the criminal twin of section 43." },
              { term: "Section 66C / 66D", definition: "Identity theft; cheating by personation using a computer resource." },
              { term: "Section 66F", definition: "Cyber terrorism - threatening India's sovereignty, integrity or security; up to life imprisonment." },
              { term: "Section 65B certificate", definition: "The Evidence Act certificate that makes electronic records admissible in court." },
            ],
            table: {
              caption: "The IT Act's offence map.",
              headers: ["Section", "Offence", "One-line essence"],
              rows: [
                ["43", "Unauthorized access and damage", "Penalty and compensation for touching or harming systems"],
                ["65", "Tampering with source code", "Destroying or altering code required to be maintained"],
                ["66", "Computer-related offences", "Dishonest or fraudulent acts under section 43's scope"],
                ["66C / 66D", "Identity theft; personation", "Misusing credentials; impersonating for gain"],
                ["66E / 66F", "Privacy; cyber terrorism", "Capturing private images; threatening national security"],
                ["67 / 67A / 67B", "Obscene and explicit material", "Publishing obscene, explicit or child abuse content"],
              ],
            },
            bullets: [
              "Three layers: substantive offences, procedural machinery, adjudication and appeal.",
              "43 and 66 are the access pair - civil penalty and criminal offence for the same act.",
              "66C and 66D are the fraud pair - identity theft and cheating by personation.",
              "66F cyber terrorism carries imprisonment up to life for threats to national security.",
              "65/67 protect code and content - source tampering and obscene publication.",
              "Section 65B of the Evidence Act gates admissibility - no certificate, no case.",
            ],
            diagram: {
              kind: "layers",
              title: "The IT Act 2000 scheme",
              caption: "Offences at the base, procedure in the middle, adjudication at the top - evidence flows upward through 65B.",
              layers: [
                { label: "Adjudication and appeal", note: "Adjudicating Officers; criminal trials; appellate forum" },
                { label: "Procedural machinery", note: "search and seizure powers; 65B evidence certificates" },
                { label: "Substantive offences", note: "43, 65, 66, 66C-66F, 67 series" },
                { label: "Statutory foundation", note: "IT Act 2000, amended by ITAA 2008" },
              ],
            },
            callout: {
              type: "warning",
              title: "No certificate, no case",
              body: "Courts have acquitted or discarded cases on missing section 65B certificates. The exam point and the practice point are the same: seizing the hard disk is only half the act - producing the certificate describing the device and process is what makes the evidence evidence.",
            },
            examQuestions: [
              {
                q: "Describe the scheme of the IT Act 2000: the major offence sections, the procedural machinery for investigation and evidence, and the adjudication structure. Map the sections for a fake-KYC identity-theft and wallet-drain campaign.",
                marks: 14,
                outline: [
                  "Substantive layer: 43 access penalty, 65 source code, 66 computer offences",
                  "Fraud pair: 66C identity theft, 66D cheating by personation",
                  "Privacy and terror: 66E privacy violation, 66F cyber terrorism (life imprisonment)",
                  "Content: 67 and 67A/67B obscene, explicit and child material",
                  "Procedural layer: search and seizure powers; 65B Evidence Act certificates",
                  "Adjudication: Adjudicating Officers for penalties; trials and appeals above",
                  "Mapping: fake KYC -> 66C + 66D; platform intrusion -> 66; document leak -> 66E",
                ],
              },
              {
                q: "Why is the section 65B certificate a make-or-break requirement in Indian cyber prosecutions?",
                marks: 7,
                outline: [

                  "Electronic records are admissible only with the 65B certificate",

                  "The certificate describes the device and process that produced the record",

                  "Arjun Panditrao (2020) made it mandatory - missing certificate defeats the case",

                  "Production requires the person who handled the device - availability becomes a trial issue",

                  "Late-produced certificates invite challenges that weaken strong cases",

                ],              },
            ],
          },
          {
            number: "1.8",
            title: "The dark figure - why every number undercounts",
            body: [
              "The dark figure (dark number) of crime is the gap between crimes committed and crimes recorded - and in cyber crime the gap is widest of all. Three structural reasons: victims stay silent (embarrassment, especially in sextortion and romance fraud; fear of being blamed; small amounts that seem not worth the effort); victims do not know where to report (jurisdiction confusion, faith that nothing will happen); and institutions absorb cases silently (banks refund and move on, platforms suspend accounts without FIRs, companies swallow breaches to protect share price). Each silent case is a crime that never enters any statistic - so every extent figure in this unit is a floor, not a ceiling.",
              "A worked read of the dark figure connects it to the ladder of section 1.3. The ladder showed attrition after reporting; the dark figure is the attrition before it. The two compose: suppose a fraud pattern touches 100,000 victims, 20,000 complain, 8,000 become FIRs, 2,000 reach chargesheet, and 400 end in conviction - official statistics describe the 8,000, while the pattern's true size is the 100,000. Intelligence-led policing therefore counts differently: banks' fraud-desk data, platform abuse reports and CERT advisories estimate the pattern even where FIRs are few, which is why coordination bodies like I4C exist.",
              "The consequences of the dark figure reach policy. Under-counted crime means under-prioritized resources - cyber cells stay understaffed because official numbers look small. Victim silence protects offenders: a scam that runs unreported continues until it meets its first complainant. And measurement drives prevention: where surveys (not FIRs) measure victimization, they consistently find multiples of the reported rate, justifying the reporting portals and helplines whose job is to shrink the dark figure itself.",
              "Exam framing: expect 'what is the dark figure of cyber crime and why does it exist'. Define it, give the three structural reasons with the sextortion-embarrassment example, run the 100,000-to-400 attrition arithmetic, and close with the policy consequences - resources, offender impunity and why portals exist to shrink the gap. The attrition arithmetic is the answer's spine - walk 100,000 down to 400 and let the funnel make the argument.",
            ],
            keyTerms: [
              { term: "Dark figure", definition: "The gap between crimes committed and crimes recorded - widest in cyber crime." },
              { term: "Under-reporting", definition: "Victim-side silence driven by shame, doubt and effort costs." },
              { term: "Institutional absorption", definition: "Banks, platforms and companies resolving incidents without police reports." },
              { term: "Intelligence-led policing", definition: "Using bank, platform and CERT data to size threats that FIRs undercount." },
            ],
            table: {
              caption: "Where the dark figure comes from and what answers it.",
              headers: ["Cause of silence", "Effect on measurement", "Policy answer"],
              rows: [
                ["Embarrassment (sextortion, romance fraud)", "Victim-class crimes vanish from statistics", "Anonymous portal complaints; awareness drives"],
                ["Small-loss fatigue", "Retail fraud under-counted", "1930 helpline for fast financial freeze"],
                ["Jurisdiction confusion", "Cross-border crimes disappear entirely", "Single portal routing to the right cyber cell"],
                ["Institutional absorption", "Banks/platforms resolve without FIRs", "Mandatory fraud reporting and I4C coordination"],
              ],
            },
            bullets: [
              "Dark figure = crimes committed minus crimes recorded; a floor, never a ceiling.",
              "Victim-side silence: embarrassment, blame-fear, small amounts, 'nothing will happen'.",
              "Institution-side silence: refunds, suspensions and swallowed breaches never reach FIRs.",
              "Worked arithmetic: 100,000 hit -> 20,000 complain -> 8,000 FIR -> 400 conviction.",
              "Under-counting starves cyber cells of resources and shelters repeat offenders.",
              "Portals and helplines exist precisely to shrink the dark figure - their rise is their success.",
            ],
            diagram: {
              kind: "fork",
              title: "Why victims stay silent",
              caption: "Three silences compose the dark figure - and each has a designed answer.",
              start: "The unreported crime",
              branches: [
                { label: "Embarrassment and blame-fear", outcome: "sextortion and romance fraud victims stay silent - answered by anonymous portals", good: false },
                { label: "Doubt that anything will happen", outcome: "low conviction visibility suppresses FIRs - answered by faster freeze-and-recover flows", good: false },
                { label: "Effort and jurisdiction confusion", outcome: "cross-border reporting looks impossible - answered by single national portals", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The floor-not-ceiling sentence",
              body: "End the answer with: 'every extent figure is a floor, not a ceiling'. It converts the definition, the three reasons and the arithmetic into one evaluative claim - the kind of closing sentence that moves a 7-mark answer toward the top band.",
            },
            examQuestions: [
              {
                q: "What is the dark figure of cyber crime? Explain its three structural causes with examples, run the attrition arithmetic that connects reported FIRs to true victimization, and state the policy consequences.",
                marks: 14,
                outline: [
                  "Definition: gap between crimes committed and crimes recorded",
                  "Victim silence: embarrassment (sextortion), blame-fear, small-loss fatigue",
                  "Reporting confusion: jurisdiction and effort costs push victims away",
                  "Institutional absorption: bank refunds and platform suspensions bypass FIRs",
                  "Arithmetic: 100,000 affected -> 20,000 complaints -> 8,000 FIRs -> 400 convictions",
                  "Consequences: under-resourced cyber cells; offender impunity; distorted prevention",
                  "Portals and 1930 helpline exist to shrink the dark figure itself",
                ],
              },
              {
                q: "How does the dark figure distort comparisons between countries' cyber crime statistics?",
                marks: 7,
                outline: [

                  "Reporting cost differs by country - so recorded rates differ for the same reality",

                  "Surveys and threat assessments partially correct for it (UK Crime Survey, IOCTA)",

                  "Comparisons must read instruments first, numbers second",

                  "Victim classes with high shame (sextortion) vanish where reporting is uncomfortable",

                  "Cross-country gaps measure reporting infrastructure as much as crime",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "Forms of Cyber Crimes and Frauds",
      summary:
        "Unit II walks the catalogue itself: hacking and cracking, denial of service, the malware family from viruses and worms to logic bombs and email bombing, data diddling and salami attacks, phishing and social engineering, the harassment cluster of bullying, stalking and defamation, the money crimes - credit card, telecom, e-commerce and cloud frauds - and steganography, the science of hiding that serves all of them.",
      chapter: {
        number: "02",
        title: "The Catalogue of Crimes and Frauds",
        intro:
          "Unit II covers hacking and cracking, DoS attacks, viruses, worms, trojans, logic bombs, time bombs and email bombing, data diddling and salami attacks, phishing, spoofing and social engineering, cyberbullying, cyberstalking, defamation, pornography and vandalism, crimes through social networking sites, credit card and financial frauds, telecom frauds, cloud-based and e-commerce frauds, and steganography.",
        inOneBreath:
          "Every form in this unit is a chain: an access method, an action on the victim, a cash-out or cover step. Hacking breaks in, DoS breaks availability, malware families differ by how they travel, diddling and salami shave value from data, phishing and social engineering attack the human, harassment attacks dignity, financial frauds monetize identity, and steganography hides the traces that would expose the rest.",
        sections: [
          {
            number: "2.1",
            title: "Hacking and cracking",
            body: [
              "Hacking is unauthorized access to a computer system - technically, exercising control over a resource without permission. The word itself is neutral in origin (a hacker was originally a skilled explorer of systems), but the law and this subject use it for unauthorized intrusion, which the IT Act penalizes under sections 43 and 66. Cracking is the malicious subset: breaking security with intent to steal, destroy or defame. The ethical-hacking third is authorized testing under contract - same techniques, signed permission, report instead of damage. The trio differs on exactly one axis: authorization, which converts the identical act between crime, contract and craft.",
              "A worked chain shows the anatomy every hack shares. Reconnaissance: the attacker scans the target's IP range and finds an exposed VPN portal. Gaining access: a credential-stuffing attempt with passwords leaked from an unrelated breach succeeds, because the clerk reused a password. Maintaining access: a small persistence script is planted so re-entry survives a password reset. Covering tracks: authentication logs are edited to hide the logins. Every named hacking offence in the news decomposes into these four phases, and each phase leaves a distinct artefact - scan noise, an anomalous login, a new scheduled task, a truncated log. Investigators read the phases backwards.",
              "The classification of hackers gives the section its taxonomy: white-hat (authorized defenders and testers), black-hat (criminals), grey-hat (unauthorized but often public-interest actors whose disclosure still breaks the law), script kiddies (low-skill users of packaged tools), hacktivists (ideologically motivated), and state-sponsored actors (resourced, patient, espionage-driven). The classification matters legally - grey-hat and script-kiddie acts are still offences - and tactically, because the profile predicts the target and the noise level: a state actor is quiet, a hacktivist is loud.",
              "Exam framing: expect 'define hacking and distinguish it from cracking'. Give the definition pair, the four-phase anatomy with the artefact each phase leaves, the six-way classification, and the authorization sentence - the same keystroke is a crime without permission and a profession with it. The artefact-per-phase table doubles as the investigation plan - one artefact per phase, one tool per artefact.",
            ],
            keyTerms: [
              { term: "Hacking", definition: "Unauthorized access to and control of a computer system - sections 43 and 66 of the IT Act." },
              { term: "Cracking", definition: "Malicious breaking of security with intent to steal, destroy or defame." },
              { term: "Credential stuffing", definition: "Replaying breached username-password pairs against other sites - the reuse attack." },
              { term: "Script kiddie", definition: "A low-skill attacker operating packaged tools without understanding them." },
              { term: "Hacktivist", definition: "An ideologically motivated intruder - loud, defacement-driven, symbolically targeted." },
            ],
            table: {
              caption: "The hacker spectrum - one technique axis, one legality axis.",
              headers: ["Type", "Skill and motive", "Authorization", "Typical signature"],
              rows: [
                ["White-hat", "High skill, defensive motive", "Contracted and scoped", "Findings in a report, not in the wild"],
                ["Black-hat (cracker)", "Variable, profit or malice", "None - criminal", "Theft, ransom, defacement"],
                ["Grey-hat", "High skill, mixed motive", "None, though disclosure may be public-interest", "Public vulnerability reveals"],
                ["Script kiddie", "Low skill, curiosity or bragging", "None", "Loud scans, default payloads, easy traces"],
                ["State-sponsored", "Very high, espionage or sabotage", "State-sanctioned", "Quiet, patient, custom tooling"],
              ],
            },
            bullets: [
              "Hacking = unauthorized access; cracking = hacking with malicious intent; ethical hacking = the same with written authorization.",
              "Four-phase anatomy: reconnaissance, gaining access, maintaining access, covering tracks.",
              "Each phase leaves a distinct artefact - scans, anomalous logins, persistence tasks, edited logs.",
              "Credential stuffing works because users reuse passwords across services.",
              "Classifications differ legally (all unauthorized access is an offence) and tactically (profile predicts noise).",
              "State actors are quiet and patient; hacktivists and kiddies are loud and traceable.",
            ],
            diagram: {
              kind: "compare",
              title: "Hacking, cracking, ethical hacking",
              caption: "Identical techniques - authorization is the only line between crime, contract and craft.",
              left: {
                heading: "Cracking (criminal)",
                items: [
                  "Unauthorized access with malicious intent",
                  "Motive: money, revenge, notoriety, espionage",
                  "Covers tracks: edits logs, plants persistence",
                  "IT Act sections 43 and 66 apply",
                ],
              },
              right: {
                heading: "Ethical hacking (authorized)",
                items: [
                  "Same access, under signed scope and rules of engagement",
                  "Motive: find and fix before criminals do",
                  "Documents everything, reports findings",
                  "Deliverable: findings and fixes, not damage",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Read the phases backwards",
              body: "Investigations reconstruct the four phases in reverse: edited logs betray the cover-up, the persistence script reveals the access method, and the anomalous login points to the stolen credential. Answering 'how would you investigate?' with phase-by-phase artefacts beats any generic forensic list.",
            },
            examQuestions: [
              {
                q: "Define hacking and cracking, distinguish ethical hacking from both, explain the four-phase anatomy of a hack with the artefacts each phase leaves, and classify hackers into at least five types.",
                marks: 14,
                outline: [
                  "Hacking: unauthorized access - sections 43/66; cracking: malicious subset",
                  "Ethical hacking: identical techniques under signed authorization",
                  "Reconnaissance leaves scan noise against exposed services",
                  "Gaining access: credential stuffing on a reused password succeeds",
                  "Maintaining access: persistence script survives password resets",
                  "Covering tracks: edited authentication logs betray the intrusion",
                  "Types: white-hat, black-hat, grey-hat, script kiddie, hacktivist, state-sponsored",
                ],
              },
              {
                q: "Why is a grey-hat hacker still an offender even when the disclosure helps the public?",
                marks: 7,
                outline: [

                  "Access was unauthorized - the offence is complete regardless of motive",

                  "Sections 43/66 penalize the act, not the intent alone",

                  "Responsible disclosure programmes exist precisely to make the same act legal",

                  "Scanning and probing alone complete the access element of the offence",

                  "Public-interest motive informs sentencing, not guilt",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Denial of service (DoS) and distributed DoS",
            body: [
              "A denial-of-service attack is a crime against availability: the attacker floods a service with more work than it can process, so legitimate users are denied. The distributed version (DDoS) sources the flood from a botnet - thousands of compromised machines commanded simultaneously - so the traffic cannot be blocked by dropping one source. DoS is the purest computer-as-target offence: no data is stolen, nothing is altered, and the harm is downtime, which for an exchange, an airline or a hospital portal converts directly into money and safety.",
              "A worked anatomy shows the mechanics. The attacker first builds the weapon: scanning for vulnerable devices, infecting them with bot malware, and herding them into a command-and-control channel (once IRC, now P2P or HTTPS). At strike time the C2 issues the command; the bots flood the target on a chosen vector - ICMP floods, SYN floods, HTTP request floods, amplification attacks that turn small queries into huge responses (DNS and NTP amplification being the classics). The victim's pipe or CPU saturates; legitimate traffic is dropped not by the attacker but by exhaustion. Mitigation works the same ladder in reverse: rate-limit, filter known-bad signatures, then anycast and scrubbing centres that absorb the flood upstream before it reaches the origin.",
              "The classification of DoS by target layer is the exam's favourite table: volumetric attacks saturate bandwidth (ICMP, UDP floods, amplification), protocol attacks exhaust connection state (SYN floods, Smurf), and application-layer attacks exhaust CPU with valid requests (HTTP floods, Slowloris - few bytes, maximum damage). Each class has a different mitigation, which is why the class must be named before any defence makes sense. The 2016 Mirai botnet - assembled largely from cameras and routers with default passwords - remains the canonical case: cheap devices, default credentials, record-scale traffic.",
              "Exam framing: expect 'what is DoS/DDoS and how is it mitigated'. Define the availability crime, run the botnet-build-to-flood chain, produce the three-class table with one mitigation per class, and close with Mirai as the named case - default passwords turned consumer devices into a weapon. Name the class before naming the defence - the marker's hidden first mark lives in that classification.",
            ],
            keyTerms: [
              { term: "DoS attack", definition: "Flooding a service beyond capacity so legitimate users are denied - a crime against availability." },
              { term: "Botnet", definition: "Thousands of compromised machines under one command-and-control channel." },
              { term: "SYN flood", definition: "Protocol attack that exhausts connection state with half-open handshakes." },
              { term: "Amplification attack", definition: "Small queries (DNS/NTP) eliciting huge responses aimed at the victim - bandwidth multiplied." },
              { term: "Scrubbing centre", definition: "Upstream service that absorbs and filters flood traffic before it reaches the origin." },
            ],
            table: {
              caption: "The three DoS classes and their counter-moves.",
              headers: ["Class", "What it exhausts", "Named attacks", "Primary mitigation"],
              rows: [
                ["Volumetric", "Bandwidth", "ICMP/UDP floods, DNS and NTP amplification", "Anycast, scrubbing centres, upstream filtering"],
                ["Protocol", "Connection state tables", "SYN flood, Smurf, fragmented packets", "SYN cookies, state tables, rate limits"],
                ["Application", "CPU and worker threads", "HTTP floods, Slowloris", "Bot filtering, request validation, WAF rules"],
              ],
            },
            bullets: [
              "DoS is the purest computer-as-target offence: the harm is availability itself.",
              "DDoS sources the flood from a botnet so no single block helps.",
              "Weapon build: scan, infect, herd into C2; strike: flood on a chosen vector.",
              "Three classes - volumetric, protocol, application - each with its own mitigation ladder.",
              "Amplification turns small queries into huge replies; the multiplier is the attack.",
              "Mirai (2016): default-password cameras and routers at record scale - hygiene is defence.",
            ],
            diagram: {
              kind: "flow",
              title: "The DDoS chain",
              caption: "From vulnerable devices to exhausted pipes - each step is a different intervention point.",
              steps: [
                { label: "Scan", note: "find weak devices and services" },
                { label: "Infect", note: "plant bot malware" },
                { label: "Herd", note: "C2 channel commands the swarm" },
                { label: "Flood", note: "chosen vector saturates the target" },
                { label: "Exhaust", note: "legitimate users are denied" },
              ],
            },
            callout: {
              type: "warning",
              title: "Classify before mitigating",
              body: "Rate-limiting saves an application-layer flood but not a volumetric one; scrubbing absorbs volume but misses Slowloris. The exam trap is answering 'how would you defend?' without naming the class - the class is the question's hidden first mark.",
            },
            examQuestions: [
              {
                q: "Explain DoS and DDoS attacks: the botnet build-up, the flooding vectors, the three classes of attack with one mitigation for each, and the lessons of the Mirai case.",
                marks: 14,
                outline: [
                  "Definition: crime against availability - deny legitimate users by exhaustion",
                  "Bot build: scan, infect, herd into C2 channels",
                  "Volumetric: floods and amplification; mitigation via scrubbing and anycast",
                  "Protocol: SYN flood exhausts state; SYN cookies counter it",
                  "Application: HTTP floods and Slowloris; WAF and bot filtering counter them",
                  "DDoS defeats source-blocking because thousands of sources flood together",
                  "Mirai: default-password IoT at record scale - device hygiene as defence",
                ],
              },
              {
                q: "Why does an amplification attack multiply an attacker's bandwidth many-fold?",
                marks: 7,
                outline: [

                  "Small forged queries elicit responses many times larger",

                  "The reply is aimed at the spoofed victim address",

                  "DNS and NTP are the classic multipliers; open resolvers enable the abuse",

                  "Source addresses are forged - replies cannot be refused at the source",

                  "Open resolvers convert the whole internet into an amplifier",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "The malware family - viruses, worms, trojans and company",
            body: [
              "Malware is the umbrella term for hostile software, and the family splits by how it travels and what it hides as. A virus attaches to a host file and executes when the host runs - it needs the user's action to spread. A worm propagates itself across networks without any host or user action - self-contained, self-replicating, the fastest family. A trojan masquerades as legitimate software (the horse in the gift) to trick installation - its payload can be a backdoor, a banker, a ransom dropper. The three families answer different exam verbs: virus = attach and await, worm = propagate alone, trojan = deceive to install.",
              "The named sub-species complete the syllabus list. Logic bombs: dormant code that detonates on a trigger condition - an employee's name removed from payroll, a specific date - the insider-threat classic. Time bombs: the same idea with the calendar as the trigger. Email bombing: flooding a mailbox with thousands of messages until it is unusable - a DoS against one person's inbox. Ransomware: encrypt the files, sell the key (Unit I's trend section covered its business model). Spyware and keyloggers: harvest keystrokes, credentials and screens. Each has a signature artefact: a bomb has a trigger clause in code review, a keylogger has a keystroke buffer, a banker has injection hooks into the browser.",
              "A worked chain shows the families cooperating. A trojanized installer ('free PDF tool') drops a downloader; the downloader fetches an infostealer that harvests browser passwords; among them is a VPN credential, and a week later a worm-like lateral movement spreads the attacker's tools across the office network; the finale is ransomware. One incident, four families, each traceable to a different artefact - installer hash, download beacon, password dump, encryption routine. Malware analysis is the discipline of walking that chain from sample to attribution.",
              "Exam framing: expect 'differentiate virus, worm and trojan' and 'write notes on logic bombs and email bombing'. Give the travel-based trio table, cover the named sub-species with their trigger and artefact, and run the cooperative chain - the answer that shows families working together reads as understanding, not memory. The cooperative chain is the illustration examiners remember - four families, one incident, four distinct artefacts.",
            ],
            keyTerms: [
              { term: "Virus", definition: "Malware that attaches to a host file and spreads on user action." },
              { term: "Worm", definition: "Self-propagating network malware needing no host or user action." },
              { term: "Trojan", definition: "Malware disguised as legitimate software to trick installation." },
              { term: "Logic bomb", definition: "Dormant code that detonates on a trigger condition - the insider-threat classic." },
              { term: "Ransomware", definition: "Encrypts data and sells the key; modern strains also exfiltrate for double leverage." },
            ],
            table: {
              caption: "The family card table.",
              headers: ["Family", "How it travels", "User action needed", "Signature artefact"],
              rows: [
                ["Virus", "Attaches to host files", "Yes - run the host", "Infected file with altered entry point"],
                ["Worm", "Self-propagates over network", "No", "Scan and exploit noise between machines"],
                ["Trojan", "Masquerades as legitimate software", "Yes - install it", "Installer hash; unexpected outbound beacon"],
                ["Logic bomb", "Already inside legitimate code", "No - waits", "Trigger clause tied to date or event"],
                ["Ransomware", "Delivered by trojan, worm or exploit", "Sometimes (macro enable)", "Encrypted files + ransom note + payment address"],
              ],
            },
            bullets: [
              "Travel defines the family: virus attaches, worm propagates alone, trojan deceives.",
              "Logic bomb detonates on a condition (payroll removal, date); time bomb is calendar-triggered.",
              "Email bombing is a one-person DoS - mailbox flooded to unusability.",
              "Spyware and keyloggers harvest credentials; bankers hook the browser session.",
              "Families cooperate: trojan drops downloader, downloader fetches infostealer, finale is ransomware.",
              "Malware analysis walks sample -> hash -> beacon -> attribution; each family leaves its own artefact.",
            ],
            diagram: {
              kind: "fork",
              title: "How malware travels",
              caption: "The propagation axis splits the family - and predicts where each one leaves its trace.",
              start: "Malware",
              branches: [
                { label: "Attaches to a host", outcome: "virus - spreads when the host file runs; artefact: infected file", good: false },
                { label: "Propagates by itself", outcome: "worm - scans and exploits the network; artefact: inter-machine noise", good: false },
                { label: "Masquerades as legitimate", outcome: "trojan - user installs it; artefact: installer hash and beacon", good: false },
                { label: "Hides inside real code", outcome: "logic bomb - detonates on trigger; artefact: trigger clause", good: false },
              ],
            },
            callout: {
              type: "exam",
              title: "The trigger clause is the bomb's fingerprint",
              body: "Logic bombs are proven by the trigger: an 'if employee name not in payroll, wipe database' clause is intent in code. In insider cases, showing the clause plus the offender's write access is the whole prosecution - name the clause pattern explicitly in bomb answers.",
            },
            examQuestions: [
              {
                q: "Differentiate viruses, worms and trojans, and write notes on logic bombs, time bombs, email bombing and ransomware. Illustrate with a chain in which the families cooperate in one incident.",
                marks: 14,
                outline: [
                  "Virus: host-attached, spreads on user action; artefact: infected file",
                  "Worm: self-propagating across networks; artefact: scan/exploit noise",
                  "Trojan: masquerade to install; artefact: installer hash + beacon",
                  "Logic bomb: trigger-condition payload - insider classic (payroll clause)",
                  "Time bomb: calendar trigger; email bombing: one-person inbox DoS",
                  "Ransomware: encrypt-and-extort, modern double extortion",
                  "Cooperative chain: trojan installer -> downloader -> infostealer -> lateral worm -> ransomware",
                ],
              },
              {
                q: "How does a logic bomb differ from a time bomb, and why are logic bombs a signature insider threat?",
                marks: 7,
                outline: [

                  "Bomb: condition-based trigger; time bomb: date-based trigger",

                  "Author is usually an insider with legitimate code access",

                  "Detection: code review for trigger clauses + access logs at write time",

                  "The bomb waits inside trusted code - perimeter tools never see it",

                  "Trigger clauses encode intent - the prosecution's core evidence",

                ],              },
            ],
          },
          {
            number: "2.4",
            title: "Data diddling and salami attacks",
            body: [
              "Data diddling is the altering of data before or during its entry into a computer system - the crime lives in the input, and the system faithfully processes the lie. The syllabus's named examples: changing grades before they are recorded, altering bills before they are printed, falsifying inventory counts, or editing a paycheck's amount on the way into payroll. Diddling is the most common form of computer fraud because it needs no breach - only a trusted hand at the right input point, which is why it is usually an insider crime.",
              "A salami attack is diddling's shaving cousin: steal many tiny slices that individually pass unnoticed beneath audit thresholds. The canonical pattern: round every transaction down and route the fraction-of-a-paise difference to an account the attacker controls, or debit interest calculations to keep the crumbs. Each slice is invisible; the aggregate over millions of transactions is a fortune. The 1993 case at a US bank - where a contractor diverted cents from thousands of accounts - and Indian textbook examples of electricity-bill shaving are the standard illustrations.",
              "A worked code trace fixes both patterns. The diddle: an operator edits the quantity field from 100 to 90 before entry; the system computes, stores and bills faithfully - the fraud is upstream of every control. The salami: a rounding routine adds the truncated remainder (paise from interest calculations) to a controlled account; each ledger entry balances perfectly, so double-entry checks pass. Detection therefore targets the pattern, not the balance: variance analysis across transactions (too many small adjustments), reconciliation of expected vs actual aggregates, and the classic tell - accounts belonging to employees growing in improbably smooth increments.",
              "Exam framing: expect 'explain data diddling and salami attacks with examples'. Define both, run the two worked traces (input-edit and rounding-routine), attach the detection logic (variance, reconciliation, smooth-growth accounts), and close with the insider point - both crimes live at trusted input points, which is why controls must watch people, not just packets. Pair the shave with its tell - the SQL trace and the variance query are one exhibit in two halves.",
            ],
            keyTerms: [
              { term: "Data diddling", definition: "Altering data before or during entry into a system so the system processes false input." },
              { term: "Salami attack", definition: "Stealing many tiny slices (rounding remainders) that individually evade audit thresholds." },
              { term: "Variance analysis", definition: "Flagging too many small adjustments - the statistical signature of shaving." },
              { term: "Reconciliation control", definition: "Comparing expected aggregates with actuals to catch balanced-but-stolen ledgers." },
            ],
            bullets: [
              "Data diddling corrupts the input; the system then faithfully processes the lie.",
              "Named examples: grade changes, bill alterations, inventory and payroll edits.",
              "Salami shaving takes fractions - rounding remainders - too small for audit thresholds.",
              "Per-entry checks pass; only aggregate patterns (variance, smooth growth) reveal the theft.",
              "Both are insider-weighted: they need trusted hands at input or in code.",
              "Controls: source verification, expected-vs-actual reconciliation, alerts on many small adjustments.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The salami pipeline",
              caption: "Shave, accumulate, convert - three steps that balance every ledger while bleeding it dry.",
              stages: [
                { label: "Shave", note: "rounding logic keeps the fraction of every transaction" },
                { label: "Accumulate", note: "slices route to a controlled account" },
                { label: "Balance", note: "every ledger entry still reconciles perfectly" },
                { label: "Convert", note: "withdraw gradually; avoid smooth-growth flags" },
                { label: "Unseen", note: "aggregate theft under individual audit radar" },
              ],
            },
            callout: {
              type: "warning",
              title: "Balanced books do not mean honest books",
              body: "The salami attack passes double-entry because the theft is engineered to balance. The audit lesson: reconciliation against an independent expected total (not internal consistency) is the only control that catches engineered balance.",
            },
            examQuestions: [
              {
                q: "Explain data diddling and salami attacks with worked examples. How does each evade ordinary controls, and what detection techniques expose them?",
                marks: 14,
                outline: [
                  "Didling: alter data at entry - grades, bills, inventory, payroll examples",
                  "System faithfully processes false input; fraud lives upstream of controls",
                  "Salami: shave rounding remainders into a controlled account",
                  "Each slice below audit threshold; aggregate over millions is a fortune",
                  "Double-entry passes because the theft is engineered to balance",
                  "Detection: variance analysis, expected-vs-actual reconciliation, smooth-growth alerts",
                  "Both are insider-weighted - controls must watch trusted input points",
                ],
              },
              {
                q: "Why is a salami attack harder to detect than ordinary embezzlement?",
                marks: 7,
                outline: [

                  "Per-entry amounts are invisible; no single transaction looks wrong",

                  "Internal consistency (balance) is preserved by design",

                  "Only statistical patterns across many transactions reveal the theft",

                  "Audit thresholds sit above the slice size - by the attacker's design",

                  "No single complainant exists - victims never notice the crumbs",

                ],              },
            ],
            codeExample: {
              language: "sql",
              caption: "The shave and the tell - a rounding routine, and the query that catches it",
              code: `-- the salami shave: divert rounding remainders to a controlled account
UPDATE interest_accrual
SET credited = TRUNCATE(earned, 2),
    diverted = earned - TRUNCATE(earned, 2)
WHERE account_id <> :attacker_account;   -- every other account loses its crumbs

-- the tell: variance analysis - count small adjustments per operator
SELECT operator_id, COUNT(*) AS tiny_adjustments,
       SUM(amount) AS total_diverted
FROM adjustments
WHERE ABS(amount) BETWEEN 0.01 AND 1.00
GROUP BY operator_id
ORDER BY tiny_adjustments DESC;          -- an outlier operator is the suspect`,
            },
          },
          {
            number: "2.5",
            title: "Phishing, spoofing and social engineering",
            body: [
              "Phishing is fraud by impersonated trust: a fake message, site or call harvests credentials, card data or payments from the victim. Its variants name the delivery channel - spear phishing (targeted), smishing (SMS), vishing (voice), angler phishing (hijacked support threads) - and its industrial form is the phishing kit: cloned pages, bulletproof hosting and rotating domains sold as a service. Spoofing is the enabling technology: forging the sender (email headers, caller ID, URLs) so the forgery looks native. The pair is the human-side of every attack chain in this subject.",
              "Social engineering is the science behind the bait: manipulating decision reflexes rather than machines. The named levers are authority (the 'CEO' orders an urgent wire), urgency and scarcity (the account closes in 30 minutes), social proof (everyone has clicked already), liking and familiarity (the caller knows your colleagues' names), and reciprocity or fear (small favour owed, or a threat to escalate). A worked BEC chain assembles them: attacker reads a compromised mailbox long enough to learn tone and timing, then sends an invoice redirect from the real thread on a Friday afternoon - authority, familiarity, urgency, all native-looking because the thread is real. No malware exists to detect; the control is process (callback verification on a known number, dual approval for payments).",
              "The defensive doctrine maps levers to controls: email authentication (SPF, DKIM, DMARC) kills naive sender spoofing; FIDO2 or app-based approvals kill credential harvesting; but the human channel always survives somewhere, so reporting culture (one-click report, no-blame drills) is the durable control. Detection at the mail gateway looks for lookalike domains, first-contact senders and payment-change language; at the individual, the training rule is reflexive - urgency is the attacker's clock, so verify on a channel you choose.",
              "Exam framing: expect 'explain phishing and its variants' or 'write on social engineering'. Define phishing, name the channel variants and kit economics, list the psychological levers with the BEC chain as the worked example, and close with the two-layer defence - technical authentication plus the human callback discipline. Quote the levers with their controls - authority to callback, urgency to slowdown - to show both halves of the subject.",
            ],
            keyTerms: [
              { term: "Phishing", definition: "Fake messages/sites harvesting credentials or payments - fraud by impersonated trust." },
              { term: "Spear phishing", definition: "Targeted phishing built from researched details about the specific victim." },
              { term: "Vishing / smishing", definition: "Phishing over voice calls and SMS respectively." },
              { term: "Spoofing", definition: "Forging sender identity - email headers, caller ID, URLs - to look native." },
              { term: "BEC", definition: "Business email compromise - payment fraud from inside a real, compromised thread." },
            ],
            table: {
              caption: "Social engineering levers and their controls.",
              headers: ["Lever", "How it sounds", "Counter-control"],
              rows: [
                ["Authority", "'The CFO needs this wire now'", "Callback to a verified number; dual approval"],
                ["Urgency / scarcity", "'Account closes in 30 minutes'", "Treat urgency as a signal to slow down"],
                ["Familiarity", "Names of real colleagues, real threads", "Verify out-of-band, even for known voices"],
                ["Social proof", "'Everyone has already approved'", "Independent approval chain, not herd sign-off"],
                ["Fear / reciprocity", "'Or we escalate to legal'", "Report-first culture; no solo decisions"],
              ],
            },
            bullets: [
              "Phishing = impersonated trust; spoofing = forged sender identity enabling it.",
              "Channel variants: spear (targeted), smishing (SMS), vishing (voice), angler (support threads).",
              "Phishing kits industrialize: cloned pages, bulletproof hosting, rotating domains.",
              "Levers: authority, urgency, familiarity, social proof, fear - manipulate reflexes, not machines.",
              "BEC works because the thread is real - authority and familiarity come native.",
              "Defence: SPF/DKIM/DMARC + FIDO2, then the human rule - verify on a channel you choose.",
            ],
            diagram: {
              kind: "cycle",
              title: "The phishing life cycle",
              caption: "The loop repeats with fresh domains and victims - breaking any edge starves the next turn.",
              steps: [
                { label: "Bait", note: "spoofed mail, SMS or cloned site" },
                { label: "Hook", note: "victim clicks and submits credentials" },
                { label: "Harvest", note: "kit collects logins, cards, OTPs" },
                { label: "Cash out", note: "transfer funds or sell the data" },
                { label: "Rotate", note: "new domain, new lure; loop restarts" },
              ],
            },
            callout: {
              type: "exam",
              title: "Name the levers, not just the scam",
              body: "Examiners reward the psychology: writing 'it exploits authority and urgency' converts a description into an analysis. Pair every lever with its control - authority to callback, urgency to slowdown - and the answer demonstrates both halves of the subject: crime and countermeasure.",
            },
            examQuestions: [
              {
                q: "Explain phishing and its variants (spear, smishing, vishing, angler), the role of spoofing, the psychological levers of social engineering, and a worked BEC chain - closing with the technical and human defences.",
                marks: 14,
                outline: [
                  "Phishing: impersonated trust harvesting credentials and payments",
                  "Variants by channel: spear, smishing, vishing, angler phishing",
                  "Spoofing: forged headers, caller ID and URLs make lures look native",
                  "Levers: authority, urgency, familiarity, social proof, fear",
                  "BEC chain: read mailbox -> learn tone -> invoice redirect on Friday - no malware",
                  "Technical defence: SPF/DKIM/DMARC, FIDO2 approvals",
                  "Human defence: callback on verified numbers, dual approval, one-click reporting",
                ],
              },
              {
                q: "Why does DMARC stop naive phishing but not a spear phishing reply inside a real thread?",
                marks: 7,
                outline: [

                  "DMARC authenticates the sending domain - kills lookalike spoofs",

                  "Inside a compromised mailbox the mail is genuinely from the right domain",

                  "Only process controls (out-of-band verification) can catch that case",

                  "The attacker replies inside the real thread - headers and history are authentic",

                  "Only process breaks (callbacks, dual approval) catch content-level fraud",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Cyberbullying, cyberstalking, defamation and the content crimes",
            body: [
              "This cluster attacks dignity and safety rather than systems. Cyberbullying: repeated harassment through digital channels - taunts, exclusion, image-based abuse - with the distinctive features of permanence (posts persist and travel), disinhibition (anonymity emboldens) and reach (one screen shot reaches a school in minutes). Cyberstalking: persistent surveillance and unwanted contact that a reasonable person would fear - location tagging, fake accounts, repeated messages across platforms; it is bullying escalated into fear. Defamation: publishing false statements harming reputation, now trivially scalable through posts and forwards.",
              "The named content offences complete the list: cyberpornography and its legal edges - obscenity (section 67), sexually explicit material (67A) and child sexual abuse material (67B, the most serious) - plus computer vandalism (destroying or damaging data and systems, section 66's damage limb) and the social-networking-site crimes that blend all of them: fake profiles for impersonation (66C/66D), doxxing, morphed images, blackmail and fraud run through SNS trust. A worked escalation ladder organizes the cluster: a school grudge starts as taunts (bullying), moves to a fake profile (impersonation), then morphed images (67/67A territory), then messages demanding money (extortion) - each rung adds a section, and each rung's evidence (screenshots, timestamps, account metadata) must be preserved before platforms purge it.",
              "The investigative specifics differ from system crimes: the victim is the primary evidence source, so preservation guidance (do not delete, do not confront, screenshot with metadata, report in-app and to the cyber cell) is part of the response; platforms' legal cells respond to law-enforcement requests; and sections 66E (privacy - images captured without consent) and 67B (CSAM, mandatory reporting climate) carry the heaviest weights. Prevention runs through digital citizenship education, platform reporting tools, and the recognition that anonymity reduces but never eliminates traceability - platforms log, and courts can compel.",
              "Exam framing: expect 'write notes on cyberbullying and cyberstalking' or 'explain the SNS crimes'. Define each offence with its legal hook, run the escalation ladder as the worked example, and close with the evidence-preservation instruction set - the victim-side specifics are what make this cluster's answers stand out. The escalation ladder is the worked example; each rung adds a section and an evidence duty.",
            ],
            keyTerms: [
              { term: "Cyberbullying", definition: "Repeated digital harassment - taunts, exclusion, image abuse - marked by permanence and reach." },
              { term: "Cyberstalking", definition: "Persistent surveillance and unwanted contact that instils fear - bullying escalated." },
              { term: "Cyber defamation", definition: "Publishing false reputation-harming statements online." },
              { term: "Section 67B", definition: "The IT Act provision against child sexual abuse material - the cluster's most serious offence." },
              { term: "Doxxing", definition: "Publishing a person's private details to enable harassment." },
            ],
            table: {
              caption: "The dignity cluster and its statutory hooks.",
              headers: ["Offence", "Essence", "Legal hook", "Key evidence"],
              rows: [
                ["Cyberbullying", "Repeated harassment and image abuse", "67A/67; IPC provisions on intimidation", "Screenshots with metadata, chat exports"],
                ["Cyberstalking", "Fear-inducing persistent contact", "66E; IPC 354D stalking", "Message timelines, account logs"],
                ["Defamation", "False reputation harm", "IPC 499/500; 66C impersonation", "Posts, forwards, URL archives"],
                ["CSAM", "Child sexual abuse material", "67B - most serious", "Hashes, upload trails, platform reports"],
                ["Vandalism", "Data/system destruction", "66 (damage limb), 65", "System logs, deleted-file recovery"],
              ],
            },
            bullets: [
              "Bullying's three features: permanence, disinhibition and reach - posts persist and travel.",
              "Stalking is fear-based: surveillance, fake accounts, contact across platforms (IPC 354D).",
              "Defamation scales online; impersonation via fake profiles adds 66C/66D.",
              "Content law grades by harm: 67 obscenity, 67A explicit, 67B CSAM - heaviest and mandatory-report climate.",
              "SNS crimes blend the cluster: doxxing, morphed images, blackmail, fraud through social trust.",
              "Victim-side preservation matters most: do not delete, screenshot with metadata, report in-app and to police.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The escalation ladder of harassment",
              caption: "Rungs add offences and evidence obligations - and each rung is easier to prove than the excuse that follows it.",
              tiers: [
                { label: "Extortion and blackmail", note: "money demanded - criminal threat, top severity" },
                { label: "Morphed / intimate images", note: "67/67A territory - content offences" },
                { label: "Fake profiles and impersonation", note: "66C/66D - identity offences" },
                { label: "Taunts and exclusion", note: "bullying - harassment in law, harm in fact" },
              ],
            },
            callout: {
              type: "warning",
              title: "Preserve before you purge",
              body: "Platforms purge reported content and accounts get deleted; the first investigator instruction to victims is do not delete anything - screenshot with visible timestamps and metadata, export chats, and report in-app so the platform's own logs corroborate. Deleted evidence is a lost case.",
            },
            examQuestions: [
              {
                q: "Write notes on cyberbullying, cyberstalking, cyber defamation and computer vandalism, with the IT Act and IPC hooks, and explain the escalation ladder using a school-grudge example.",
                marks: 14,
                outline: [
                  "Bullying: repeated harassment; permanence, disinhibition, reach as its features",
                  "Stalking: fear-inducing surveillance - IPC 354D, IT Act 66E",
                  "Defamation: false statements at scale - IPC 499/500",
                  "Vandalism: destroying data/systems - section 66 damage limb, 65",
                  "Escalation: taunts -> fake profile -> morphed images -> extortion demands",
                  "Each rung adds sections (67/67A content, 66C/66D identity) and evidence duties",
                  "Victim-side preservation: screenshots with metadata, chat exports, in-app reports",
                ],
              },
              {
                q: "Why do section 67B cases carry the heaviest obligations of this cluster?",
                marks: 7,
                outline: [

                  "CSAM harms children - statutory weight and sentencing are the highest",

                  "Possession and viewing are offences, not just distribution",

                  "Platforms and ISPs face reporting duties; hashes block re-upload",

                  "Production, distribution and storage each carry separate liability",

                  "International conventions push harmonized heavy penalties",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "Credit card, telecom, e-commerce and cloud frauds",
            body: [
              "Financial fraud is cyber crime's revenue line, and it divides by the rail it rides. Credit card fraud: skimming (cloned cards from compromised terminals), card-not-present fraud (stolen details used online), and the countermeasures baked into the rails - EMV chips that cloned cards cannot replay, CVV, OTP and 3D-Secure for online payments, and tokenization that replaces the PAN with a device-specific token. Telecom fraud: SIM swap (social-engineer the operator into porting the number, then intercept OTPs and reset banking), premium-rate fraud, CLI spoofing, and tower/CLI-based scams that lend calls false authority.",
              "E-commerce and cloud frauds complete the rail map. E-commerce: fake storefronts and cloned sites that collect payment without delivery, refund and chargeback abuse, card testing on low-value carts, and courier/reshipping mule networks that cash out goods. Cloud-based fraud exploits the trust and scale of shared services: tenant account takeover through stolen credentials, resource abuse (renting hijacked cloud accounts for mining or DDoS), and phishing hosted on legitimate cloud platforms - the lure lives on a domain the victim's browser already trusts, defeating naive reputation filtering. A worked chain ties the rails together: phishing kit harvests a wallet login, SIM swap intercepts the OTP, the attacker resets credentials and drains the wallet, then routes funds through mule accounts - three rails, one victim, one evening.",
              "Detection across the rails is a pattern-recognition problem: velocity rules (too many transactions too fast), device fingerprinting (new device + high-value action), behavioural analytics (typing rhythm, session habits), and graph checks on the beneficiary side (mule account clusters). The 1930 helpline and bank freeze mechanisms are the fast path - minutes matter, because stolen funds hop accounts within an hour. Prevention is layered: EMV and tokenization at the card, OTP plus device-binding at the payment app, and the standing advice that no legitimate institution asks for OTPs, PINs or remote-access installs.",
              "Exam framing: expect 'explain credit card frauds' or 'write notes on telecom and e-commerce frauds'. Define each rail's fraud with its countermeasure, run the phishing-to-SIM-swap-to-drain chain as the worked example, and close with the velocity/device/graph detection trio and the 1930 fast path. The three-rail evening chain shows the rails cooperating - close with velocity, device and graph detection. The escalation ladder doubles as the evidence checklist - every rung names what to preserve before the platform purges it.",
            ],
            keyTerms: [
              { term: "Skimming", definition: "Cloning card data from compromised terminals or ATMs." },
              { term: "SIM swap fraud", definition: "Porting the victim's number to the attacker to intercept OTPs and reset banking." },
              { term: "Tokenization", definition: "Replacing the card PAN with a device-specific token so stolen numbers are useless." },
              { term: "Card testing", definition: "Small transactions that verify stolen card data before big cash-out." },
              { term: "Mule account", definition: "A beneficiary account (often rented) that receives and layers stolen funds." },
            ],
            table: {
              caption: "Frauds by rail, with their built-in counters.",
              headers: ["Rail", "Signature fraud", "How it works", "Countermeasure"],
              rows: [
                ["Card", "Skimming, card-not-present", "Clone at terminal; misuse details online", "EMV chip, CVV, 3D-Secure, tokenization"],
                ["Telecom", "SIM swap, premium-rate", "Port the number; intercept OTPs", "Port-freeze periods, app-based OTP, warnings"],
                ["E-commerce", "Fake stores, refund abuse", "Collect payment, never deliver", "Escrow, chargeback rules, buyer vetting"],
                ["Cloud", "Account takeover, resource abuse", "Stolen tenant credentials; hijacked compute", "MFA, anomaly alerts, tenant monitoring"],
              ],
            },
            bullets: [
              "Card fraud: skimming clones physical cards; CNP misuses stolen details online.",
              "EMV, tokenization and 3D-Secure are the rail's structural answers to cloning.",
              "SIM swap converts a phone number into a master key - OTP interception and resets follow.",
              "E-commerce fraud: fake storefronts, card testing, refund abuse, reshipping mules.",
              "Cloud fraud rides trusted domains - phishing hosted on legitimate platforms defeats reputation filters.",
              "Detection trio: velocity rules, device fingerprinting, beneficiary-graph mule checks; freeze via 1930 fast.",
            ],
            diagram: {
              kind: "flow",
              title: "One evening, three rails",
              caption: "The modern drain chain - each rail supplies what the next needs.",
              steps: [
                { label: "Phish", note: "kit harvests wallet login" },
                { label: "SIM swap", note: "number ported; OTPs intercepted" },
                { label: "Reset", note: "credentials and device binding changed" },
                { label: "Drain", note: "wallet emptied within minutes" },
                { label: "Layer", note: "mule accounts scatter the funds" },
              ],
            },
            callout: {
              type: "exam",
              title: "Why SIM swap beats OTP defences",
              body: "OTP assumes the phone is the person. SIM swap attacks the assumption, not the code: the number itself is stolen at the operator. The exam point - move high-value approvals to app-based, device-bound verification - shows you understand where the rail's weak link actually is.",
            },
            examQuestions: [
              {
                q: "Explain credit card fraud (skimming, card-not-present), telecom fraud (SIM swap, premium-rate), and e-commerce fraud, with the countermeasures built into each rail and a worked chain that combines them.",
                marks: 14,
                outline: [
                  "Skimming: cloned cards at compromised terminals; EMV chips defeat replay",
                  "CNP fraud: stolen details online; CVV, OTP and 3D-Secure counter it",
                  "Tokenization replaces the PAN with a device token",
                  "SIM swap: port the number, intercept OTPs, reset and drain",
                  "E-commerce: fake stores, card testing, refund abuse, reshipping mules",
                  "Cloud fraud: takeover and phishing hosted on trusted platforms",
                  "Detection: velocity, device fingerprint, mule-graph; 1930 freeze in minutes",
                ],
              },
              {
                q: "What makes cloud-based fraud different from ordinary e-commerce fraud?",
                marks: 7,
                outline: [

                  "The lure lives on a trusted provider domain - reputation filters pass it",

                  "Tenant accounts are the target - one takeover can pivot to data at scale",

                  "Hijacked compute gets rented out (mining, DDoS) - the account becomes infrastructure",

                  "Multi-tenancy means one compromised key touches many victims",

                  "Attackers inherit the provider's elasticity - abuse scales automatically",

                ],              },
            ],
          },
          {
            number: "2.8",
            title: "Steganography - hiding data and hiding crimes",
            body: [
              "Steganography is concealed communication: embedding a secret message inside a harmless-looking carrier so that the existence of the message itself is hidden - cryptography protects content, steganography protects existence. The classic digital technique is LSB substitution: an image's least-significant bits carry the payload, imperceptible to the eye, invisible to casual inspection. Other carriers: audio (echo hiding, phase encoding), video frames, document formatting, and network protocols themselves (data in unused header fields, timing patterns). Steganalysis is the counter-discipline - statistical detection of carriers whose noise profile is too clean or too rich.",
              "The criminal uses make it a syllabus topic: exfiltration (data smuggled out inside images posted to social media or photo-sharing sites - traffic to trusted domains, no file transfer to flag), command-and-control for malware (instructions embedded in images fetched by compromised hosts), watermark circumvention, and CSAM distribution concealed in innocuous galleries. A worked exfiltration chain: an insider encodes the stolen database dump into vacation photos at 1 KB per image, uploads them to a public album - the DLP system sees only image uploads to a trusted site; the receiver downloads and extracts. Detection must therefore target the artefact, not the traffic: LSB anomalies, entropy spikes, improbable album volumes, and file-format inconsistencies.",
              "The technical edge and the legal frame close the section: modern steganalysis uses statistical tests (chi-square against LSB pairs, sample-pair analysis) and machine-learning classifiers trained on cover-vs-stego image sets; capacity limits mean real exfiltration is slow, which is why volume-behaviour analytics (gigabytes disguised as photos) is a practical tell. Legally, steganography is not an offence by itself - it is an enabler, charged through the substantive crime it serves (data theft, obscenity, CSAM), with forensic proof requiring the extraction of the payload and the demonstration of the channel.",
              "Exam framing: expect 'explain steganography with examples of its criminal use'. Define it against cryptography (existence vs content), run the LSB mechanism and the insider exfiltration chain, name the carriers, and close with steganalysis methods and the charging logic - enabling technique, substantive offence. Capacity is the tell - kilobytes per image mean volume analytics catch what byte-level inspection cannot.",
            ],
            keyTerms: [
              { term: "Steganography", definition: "Hiding a message inside a carrier so its existence is concealed." },
              { term: "LSB substitution", definition: "Embedding payload in least-significant bits of image samples - imperceptible alteration." },
              { term: "Steganalysis", definition: "Statistical and ML detection of carriers with anomalous noise profiles." },
              { term: "Cover text / cover image", definition: "The innocuous carrier that hosts the hidden payload." },
            ],
            table: {
              caption: "Carriers, techniques and their tells.",
              headers: ["Carrier", "Technique", "Capacity", "Detection tell"],
              rows: [
                ["Image", "LSB substitution, DCT coefficient tuning", "Medium", "LSB pair statistics, entropy anomalies"],
                ["Audio", "Echo hiding, phase encoding", "Low", "Spectral irregularities"],
                ["Video", "Frame-level LSB, motion masking", "High", "Frame consistency checks"],
                ["Documents", "Whitespace, formatting choices", "Very low", "Formatting fingerprints"],
                ["Network", "Header fields, timing channels", "Low", "Protocol-behaviour baselining"],
              ],
            },
            bullets: [
              "Steganography hides existence; cryptography hides content - the exam's one-line contrast.",
              "LSB substitution: payload rides the least-significant bits of image samples.",
              "Carriers: images, audio, video, documents and network protocols (headers, timing).",
              "Criminal use: exfiltration inside trusted-domain uploads, stego C2, concealed CSAM.",
              "Steganalysis: chi-square LSB tests, sample-pair analysis, ML cover-vs-stego classifiers.",
              "Not an offence alone - charged through the crime it serves, proven by payload extraction.",
            ],
            diagram: {
              kind: "layers",
              title: "The stego stack",
              caption: "Four layers from payload to perception - detection attacks the bottom two.",
              layers: [
                { label: "Perception", note: "victim sees an ordinary vacation photo" },
                { label: "Cover", note: "the carrier image, statistically ordinary" },
                { label: "Embedding", note: "LSB or DCT payload insertion, optional key" },
                { label: "Payload", note: "the stolen data or C2 instructions" },
              ],
            },
            callout: {
              type: "tip",
              title: "Capacity is the tell",
              body: "Hiding data is slow: one image carries kilobytes, so exfiltrating megabytes needs hundreds of uploads. Volume-behaviour analytics - 'this user posted 4 GB of photos this month' - catches stego where byte-level inspection cannot. Capacity limits are a detection asset.",
            },
            examQuestions: [
              {
                q: "Explain steganography and how it differs from cryptography, describe LSB embedding with a worked criminal exfiltration chain, and discuss the carriers, the steganalysis methods and the legal treatment of stego-enabled crimes.",
                marks: 14,
                outline: [
                  "Definition: conceal the existence of the message, not just its content",
                  "Contrast: cryptography protects content, steganography protects existence",
                  "LSB: payload in least-significant bits - imperceptible to eye and casual tools",
                  "Exfiltration chain: dump encoded into photos -> trusted-domain upload -> extract",
                  "Carriers: images, audio, video, documents, network headers/timing",
                  "Steganalysis: chi-square and sample-pair statistics, ML classifiers, volume analytics",
                  "Legal: enabler, not offence - charged via the substantive crime; payload extraction proves it",
                ],
              },
              {
                q: "Why does hosting stego exfiltration on a trusted cloud domain defeat naive DLP?",
                marks: 7,
                outline: [

                  "Traffic goes to an allow-listed domain - no file-transfer alert",

                  "DLP inspects named transfers, not image pixel noise",

                  "Answer: carrier-level and volume analytics, not channel blocking",

                  "Encryption and stego combine - the channel looks doubly innocent",

                  "Policy answers behaviour (volume, cadence), not content",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Profile of Cyber Criminals and Impact of Cyber Crimes",
      summary:
        "Unit III moves from acts to minds and consequences: who the offenders are, the psychological theories that explain them - learning, motivation, personality and intelligence - the craft of criminal profiling, and the impact of cyber crime measured on individuals and companies economically and psychologically, and on government and the nation sociologically.",
      chapter: {
        number: "03",
        title: "Criminal Minds and Collateral Damage",
        intro:
          "Unit III covers the profile categories of cyber criminals, cyber crime psychology through learning, motivation, personality and intelligence theories, criminal profiling techniques, and the economic, psychological and sociological impact of cyber crime on individuals, corporates, companies, government and the nation.",
        inOneBreath:
          "Offenders divide by skill, motive and authorization - insider to state actor - and criminology explains them through learning (crime is learned), motivation (needs and choices), personality (trait clusters) and control (weak self-control plus opportunity). Profiling turns crime-scene indicators into a prioritized suspect description. Impact compounds outward: a person's loss becomes a company's downtime, becomes a sector's confidence shock, becomes a nation's strategic problem.",
        sections: [
          {
            number: "3.1",
            title: "Who commits cyber crime - the offender map",
            body: [
              "The offender map sorts by three axes: skill, motive and authorization. Insiders are employees or contractors misusing legitimate access - the highest-frequency and highest-damage category, because they already sit inside the perimeter. Career cyber criminals work for profit - fraud shops, ransomware affiliates, mule-network operators. Script kiddies bring curiosity and packaged tools. Hacktivists bring ideology and audiences. State-sponsored actors bring budgets, patience and espionage objectives. Each category predicts its own target choice: insiders hit payroll and grudges, professionals hit wallets, hacktivists hit symbols, states hit infrastructure.",
              "A worked application shows the map earning its keep. Two intrusions, identical technique (credential theft into a mail tenant): in case A the mailbox belongs to a government research institute and the attacker lingered for months, exfiltrating documents quietly; in case B the mailbox belongs to a trading firm and a payment redirect followed within days. Technique says nothing; the offender profile says everything - case A fits espionage (state-linked, patient, quiet), case B fits profit-motivated fraud (fast monetization, mule trail). Profile guides who investigates, how, and with what urgency.",
              "The demographics research adds texture: most convicted hackers studied are young and male, technically self-taught, with early online identities built on competence; but the important correction is the insider correction - the average fraudster is a long-tenured employee under financial pressure, not a hoodie in a basement. Age and gender patterns describe the visible (caught, prosecuted) tail; the quiet professionals and state actors deliberately stand outside the visible population. Profiling therefore treats demographics as weak evidence and behavioural evidence as strong.",
              "Exam framing: expect 'discuss the profile of cyber criminals'. Give the six-category map (insider, career, kiddie, hacktivist, state, ideologically mixed grey zones), work the two-case contrast, and close with the demographics caveat - visible patterns describe the caught tail, not the whole population. The tempo read settles the classification - days to cash is fraud, months of quiet is espionage.",
            ],
            keyTerms: [
              { term: "Insider threat", definition: "An authorized user misusing legitimate access - highest-damage offender class." },
              { term: "Career criminal", definition: "Profit-driven professional - fraud shops, ransomware affiliates, mule operators." },
              { term: "State-sponsored actor", definition: "Government-resourced espionage or sabotage operator - quiet and patient." },
              { term: "Script kiddie", definition: "Low-skill offender running packaged tools for thrill or bragging." },
            ],
            table: {
              caption: "The offender map.",
              headers: ["Category", "Skill", "Motive", "Signature target and tempo"],
              rows: [
                ["Insider", "Varies", "Grudge, debt, temptation", "Payroll, databases; slow, trusted"],
                ["Career criminal", "High", "Money", "Wallets, payment rails; fast cash-out"],
                ["Script kiddie", "Low", "Thrill, status", "Exposed services; loud and traceable"],
                ["Hacktivist", "Medium", "Ideology", "Symbols and websites; loud by design"],
                ["State-sponsored", "Very high", "Espionage, sabotage", "Infrastructure and IP; quiet, patient"],
              ],
            },
            bullets: [
              "Three axes sort offenders: skill, motive, authorization.",
              "Insiders misuse legitimate access - highest frequency and damage.",
              "Career criminals monetize fast; states linger silently for months.",
              "Script kiddies are loud; hacktivists are loud on purpose.",
              "Profile predicts target: grudges to payroll, ideology to symbols, espionage to infrastructure.",
              "Demographics describe the caught tail; behavioural evidence is the strong signal.",
            ],
            diagram: {
              kind: "fork",
              title: "The offender map",
              caption: "Six categories, three axes - each branch predicts its own target and tempo.",
              start: "Cyber criminal",
              branches: [
                { label: "Insider", outcome: "trusted access misused - payroll, databases, slow-burn damage", good: false },
                { label: "Career criminal", outcome: "profit motive - wallets and payment rails, fast monetization", good: false },
                { label: "Hacktivist / kiddie", outcome: "ideology or thrill - loud, symbolic, easily traced", good: false },
                { label: "State-sponsored", outcome: "espionage and sabotage - quiet, patient, custom tooling", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Tempo betrays the category",
              body: "When the technique is identical, the tempo discriminates: monetization within days suggests career fraud; months of quiet exfiltration suggests espionage. Ask 'how long did they stay and what did they touch?' - the answer usually names the offender class before any attribution tooling does.",
            },
            examQuestions: [
              {
                q: "Discuss the profile categories of cyber criminals along skill, motive and authorization axes, and use a two-case contrast (fast payment fraud vs months-long quiet exfiltration) to show how profiling guides investigation.",
                marks: 14,
                outline: [
                  "Axes: skill, motive, authorization - the sorting dimensions",
                  "Insider: legitimate access, grudges and debt - highest damage class",
                  "Career criminal: profit - fraud shops, ransomware affiliates, mules",
                  "Hacktivist and script kiddie: ideology or thrill - loud and traceable",
                  "State-sponsored: quiet, patient, espionage objectives",
                  "Case contrast: same technique, different tempo - days to cash vs months of quiet",
                  "Demographics caveat: visible patterns describe the caught tail only",
                ],
              },
              {
                q: "Why does the insider category produce the highest-damage incidents despite lower technical skill?",
                marks: 7,
                outline: [

                  "Already inside: no perimeter to breach, trusted credentials in hand",

                  "Knowledge of where value and controls live",

                  "Crimes ride legitimate channels - least suspicious traffic in the estate",

                  "Trust grants access no external attacker could buy",

                  "Detection is hardest against the least suspicious traffic",

                ],              },
            ],
          },
          {
            number: "3.2",
            title: "Learning theories - crime is learned",
            body: [
              "Learning theories hold that criminal behaviour is acquired like any other behaviour - through conditioning and social transmission. Classical conditioning (Pavlov) pairs neutral cues with outcomes: for the online fraudster, the notification chime becomes the cue that triggers the action-reward loop. Operant conditioning (Skinner) supplies the reinforcement engine: every successful scam pays out a variable-ratio reward - unpredictable, intermittent, the schedule that produces the most persistent behaviour in psychology - so the offender keeps pulling the lever long after payoffs thin out.",
              "Social learning theory (Bandura) completes the mechanism: behaviour is learned by observing models, and the internet is the richest modelling environment ever built. Forums, leaked source code, tutorial videos and bragging posts show the aspiring offender exactly how - techniques are copied before they are understood, and the audience provides the reinforcement: reputation points, respect threads, mirrors of defacements. A worked trace: a teenager posts a question on a forum; senior members answer with tools and encouragement; his first successful scan earns public praise; within months the reinforcement loop (peer approval plus occasional money) has institutionalized the behaviour. The curriculum of crime is now self-service.",
              "The theory's practical yield for this subject is prevention and profiling. Prevention: interrupt the reinforcement early - meaningful consequences for first offences, and modelling alternatives (bug-bounty paths convert the same curiosity into lawful reward). Profiling: offenders embedded in specific scene cultures (forums, markets) can be identified by linguistic style, forum handles and technical fingerprints they learned from their community - the community that taught them also marks them.",
              "Exam framing: expect 'explain learning theories of cyber criminals'. Give the conditioning pair (classical cues, operant variable-ratio reinforcement), develop Bandura's observational learning with the forum trace, and close with the two yields - early-interruption prevention and community-marked profiling. The variable-ratio schedule is the sentence to write - intermittent payouts produce the most persistent offending known. The forum trace is the worked example - question, tools, first success, praise, repetition, in five steps.",
            ],
            keyTerms: [
              { term: "Classical conditioning", definition: "Neutral cues become triggers by repeated pairing - the notification chime effect." },
              { term: "Operant conditioning", definition: "Behaviour shaped by consequences; variable-ratio reward produces maximum persistence." },
              { term: "Social learning (Bandura)", definition: "Behaviour learned by observing models - forums and tutorials as the criminal curriculum." },
              { term: "Differential association", definition: "Sutherland's claim: criminal behaviour is learned in intimate groups, including online ones." },
            ],
            table: {
              caption: "The learning-theory kit.",
              headers: ["Theory", "Mechanism", "Cyber crime application", "Practical yield"],
              rows: [
                ["Classical conditioning", "Cue pairing", "Notification chime as action trigger", "Cue-awareness in treatment"],
                ["Operant conditioning", "Consequence shaping", "Intermittent scam payouts sustain behaviour", "Consequences early, not after escalation"],
                ["Social learning", "Observation of models", "Forums teach technique and supply audience", "Community fingerprints aid profiling"],
                ["Differential association", "Intimate-group transmission", "Scene cultures define methods and norms", "Target the culture, not just the coder"],
              ],
            },
            bullets: [
              "Crime is learned - like any behaviour, through cues, consequences and models.",
              "Classical: cues (chimes, alerts) become triggers for the action-reward loop.",
              "Operant: variable-ratio payouts are the most persistence-producing schedule known.",
              "Bandura: observation plus reinforcement - the forum is the classroom and the audience.",
              "Differential association: techniques and norms transmit in intimate (online) groups.",
              "Yields: interrupt reinforcement early; read community fingerprints for profiling.",
            ],
            diagram: {
              kind: "cycle",
              title: "The reinforcement loop",
              caption: "Learning theories describe the loop that institutionalizes offending - each turn strengthens it.",
              steps: [
                { label: "Observe", note: "forums and tutorials model the technique" },
                { label: "Imitate", note: "first attempts with packaged tools" },
                { label: "Reward", note: "money or peer approval arrives" },
                { label: "Repeat", note: "behaviour strengthens and normalizes" },
                { label: "Model", note: "the offender becomes someone else's example" },
              ],
            },
            callout: {
              type: "exam",
              title: "Variable-ratio is the phrase to write",
              body: "Scam payouts are intermittent and unpredictable - exactly the variable-ratio schedule that produces the most persistent behaviour in operant psychology. Naming that schedule is the sentence that turns a description of addiction-like offending into a theory-grounded answer.",
            },
            examQuestions: [
              {
                q: "Explain how learning theories - classical and operant conditioning, social learning and differential association - explain cyber criminal behaviour, with a worked trace of a novice's path through a forum community to institutionalized offending.",
                marks: 14,
                outline: [
                  "Crime is learned: cues, consequences and models, not innate evil",
                  "Classical conditioning: cues become triggers for the action loop",
                  "Operant: intermittent payouts = variable-ratio schedule - maximum persistence",
                  "Social learning: forums teach technique and supply reinforcing audiences",
                  "Differential association: scene cultures transmit methods and norms",
                  "Trace: question -> tools and encouragement -> first success -> praise -> repetition",
                  "Yields: early consequence and modelling of lawful paths; community fingerprints for profiling",
                ],
              },
              {
                q: "How do learning theories suggest prevention should be timed?",
                marks: 7,
                outline: [

                  "Interrupt the reinforcement loop at first offence - meaningful consequences early",

                  "Replace the modelling environment: bug bounties and CTFs as lawful reward paths",

                  "Target scene cultures and audiences, not only individual offenders",

                  "Reward lawful curiosity before the criminal path pays first",

                  "Peer audiences reinforce behaviour - so redirect the audience too",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Motivation theories - needs, choices and opportunity",
            body: [
              "Motivation theories ask why offenders offend, and the syllabus's trio answers at three levels. Maslow's hierarchy places cyber crime against human needs: financial frauds serve physiological and safety needs (debt, survival); status crimes serve esteem needs (respect in a scene, followers); hacktivism and state work serve belonging and self-actualization (cause, mastery). Rational choice theory (Clarke, Cornish) answers at the decision level: offenders weigh expected gain against perceived risk, effort and punishment - cyber crime's low perceived risk and low effort, high gain profile explains its pull, and deterrence works exactly by shifting those weights (fast freezing, visible arrests, expensive traces).",
              "Routine activity theory (Cohen and Felson) answers at the opportunity level: crime requires a motivated offender, a suitable target and the absence of a capable guardian, converging in time and space - and cyberspace has made the convergence constant. Every unpatched server is a suitable target; every user without MFA is an absent guardian; motivated offenders need no travel. A worked read of a UPI fraud wave through the trio: motivated offenders (a fraud shop), suitable targets (millions of new payment users), absent guardians (banks' slow anomaly rules) - the wave is the theory, and each theory implies its own intervention: address the need (awareness and livelihood), shift the choice (fast freezes raise effort and risk), add the guardian (device binding, velocity rules).",
              "The strain variant completes the frame: blocked legitimate paths (unemployment, exclusion) create pressure toward illegitimate ones, and cyber crime's low entry cost makes it the cheapest available strain outlet - which is why job-scam ecosystems both exploit and recruit from strain populations. The exam reads these theories not as rivals but as a stack: needs set the pressure, choice picks the method, opportunity sets the timing.",
              "Exam framing: expect 'explain motivation theories of cyber crime'. Run Maslow (needs), rational choice (decision weights), routine activity (offender-target-guardian convergence) and strain (blocked paths); work the UPI fraud wave through all four; and close with the stack sentence - pressure, choice, timing. Offender, target, guardian is the quotable triple - apply it once to the UPI wave and the theory reads as analysis.",
            ],
            keyTerms: [
              { term: "Maslow's hierarchy", definition: "Needs from physiological to self-actualization - each tier maps to classes of cyber crime." },
              { term: "Rational choice theory", definition: "Offenders weigh gain against risk, effort and punishment - deterrence shifts the weights." },
              { term: "Routine activity theory", definition: "Crime needs motivated offender + suitable target + absent capable guardian, converged." },
              { term: "Strain theory", definition: "Blocked legitimate paths create pressure toward illegitimate outlets." },
            ],
            table: {
              caption: "Four motivation theories and their interventions.",
              headers: ["Theory", "Level of answer", "Cyber crime reading", "Intervention it implies"],
              rows: [
                ["Maslow", "Needs", "Fraud for survival, status crime for esteem", "Awareness, livelihood, scene alternatives"],
                ["Rational choice", "Decision", "Low risk/effort, high gain", "Fast freezes, visible arrests, costly traces"],
                ["Routine activity", "Opportunity", "Constant offender-target-guardian convergence", "MFA, device binding, velocity rules"],
                ["Strain", "Pressure", "Cheapest outlet for blocked paths", "Skills-to-jobs pipelines, inclusion"],
              ],
            },
            bullets: [
              "Maslow: physiological and safety needs drive financial fraud; esteem drives status crime.",
              "Rational choice: offenders weigh gain vs risk, effort, punishment - deterrence shifts weights.",
              "Routine activity: motivated offender + suitable target + absent guardian - cyberspace converges all three.",
              "Strain: blocked legitimate paths push toward the cheapest outlet - cyber crime's entry cost is low.",
              "Worked wave: fraud shop + millions of new payment users + slow bank rules = UPI fraud wave.",
              "The theories stack: needs set pressure, choice picks method, opportunity sets timing.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Needs on the hierarchy - crimes on the map",
              caption: "Each Maslow tier predicts the crime class that serves it.",
              tiers: [
                { label: "Self-actualization and cause", note: "hacktivism, state work, 'research' framing" },
                { label: "Esteem and status", note: "defacement glory, scene reputation, followers" },
                { label: "Belonging", note: "gang membership, community identity" },
                { label: "Safety", note: "debt relief, security of livelihood" },
                { label: "Physiological", note: "survival money - retail and UPI fraud" },
              ],
            },
            callout: {
              type: "exam",
              title: "Offender, target, guardian - the triple to write",
              body: "Routine activity theory's three elements are the most quotable lines in the unit: crime occurs where a motivated offender meets a suitable target with no capable guardian. Then apply it once - 'every unpatched server is a suitable target' - and the theory reads as analysis, not recitation.",
            },
            examQuestions: [
              {
                q: "Explain Maslow's hierarchy, rational choice theory, routine activity theory and strain theory as accounts of cyber criminal motivation, and apply all four to a wave of UPI payment frauds.",
                marks: 14,
                outline: [
                  "Maslow: needs tiers map to fraud classes - survival money to cause-driven crime",
                  "Rational choice: low perceived risk and effort, high gain - deterrence shifts weights",
                  "Routine activity: motivated offender + suitable target + absent capable guardian",
                  "Strain: blocked legitimate paths; low entry cost makes cyber crime the cheapest outlet",
                  "Application: fraud shop (motivated offender) + new payment users (targets)",
                  "Slow anomaly rules = absent guardians - the wave is the theory enacted",
                  "Interventions: livelihood and awareness; fast freezes; device binding and velocity rules",
                ],
              },
              {
                q: "How does rational choice theory justify fast transaction freezing as a fraud control?",
                marks: 7,
                outline: [

                  "Freezing raises perceived risk and cuts expected gain within minutes",

                  "Offenders re-weigh: slower cash-out means higher capture probability",

                  "The theory predicts deterrence follows cost shifts, not moral appeals",

                  "Speed matters - the offender's plan runs on a cash-out clock",

                  "Visible freezes raise perceived risk for the whole fraud shop",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "Personality theories - the Dark Triad and control",
            body: [
              "Personality theories locate crime in stable trait clusters. The Dark Triad - narcissism (entitlement, need for admiration), Machiavellianism (manipulation, cold strategic empathy) and psychopathy (impulsivity, shallow affect) - maps cleanly onto the two offender economies of cyber crime: narcissistic traits suit defacement and notoriety-seeking (the crime is a stage), Machiavellian traits suit social engineering and BEC (the crime is a manipulation), and psychopathic traits suit the callous economies (fraud against the vulnerable, CSAM). Eysenck's classic framing adds the temperament base: high extraversion-low arousal seeks stimulation, high neuroticism reacts to stress - explaining both thrill-seeking intrusion and reactive harassment.",
              "The control complement - Gottfredson and Hirschi's low self-control theory - supplies the situational mechanism: offenders with weak self-control are impulsive, risk-seeking, short-horizon and insensitive to victims, and they offend when opportunity appears; no planning required. Self-control explains the tempo signatures from Unit III's map - the kiddie's loud, immediate scan (impulse meets tool) versus the state actor's months-long patience (high control). It also explains the insider's slow-burn fraud: embezzlement grows as rationalized small amounts until habit and need lock in.",
              "A worked quadrant organizes the traits against the offender map. Axes: self-control (low to high) and technical skill (low to high). Low-control, low-skill is the kiddie - impulse plus tool, loud and quickly caught. Low-control, high-skill is the career criminal's impulsive wing - carding, opportunistic hacking. High-control, low-skill is the manipulator - social engineers and BEC operators whose control is interpersonal, not technical. High-control, high-skill is the professional wing: insiders running patient fraud, state actors - and each quadrant carries its own investigation implication: impulse cases leave noise; control cases leave only patterns.",
              "Exam framing: expect 'personality theories of cyber criminals'. Define the Dark Triad with the crime-class mapping, add Eysenck's temperament base and low self-control's situational mechanism, and work the two-axis quadrant - closing with the tempo point: impulse is loud, control is quiet. The quadrant's axes earn the structure marks; the tempo rule earns the understanding marks. The quadrant's investigation note closes the loop - impulse leaves noise, control leaves patterns, and each trail names its owner.",
            ],
            keyTerms: [
              { term: "Dark Triad", definition: "Narcissism, Machiavellianism, psychopathy - the trait cluster of manipulative offending." },
              { term: "Low self-control theory", definition: "Gottfredson-Hirschi: impulsive, risk-seeking offenders offend wherever opportunity appears." },
              { term: "Eysenck's dimensions", definition: "Extraversion and neuroticism as temperament bases for stimulation-seeking and reactivity." },
              { term: "Impulsivity", definition: "The trait engine of loud, opportunistic offending - noise as evidence." },
            ],
            table: {
              caption: "Dark Triad traits and their crime-class fits.",
              headers: ["Trait", "Core feature", "Crime-class fit", "Investigation note"],
              rows: [
                ["Narcissism", "Entitlement, admiration-seeking", "Defacement, notoriety hacking", "Offender often publicizes the act"],
                ["Machiavellianism", "Cold strategic manipulation", "Social engineering, BEC", "Victim-centred evidence, thread analysis"],
                ["Psychopathy", "Impulsivity, shallow affect", "Fraud on the vulnerable, CSAM", "No victim-offender empathy assumptions"],
                ["Low self-control", "Impulse + opportunity", "Kiddie scans, opportunistic intrusion", "Loud signatures, short trails"],
              ],
            },
            bullets: [
              "Dark Triad: narcissism stages the crime, Machiavellianism engineers it, psychopathy callouses it.",
              "Narcissistic offenders publicize - defacements, bragging, handles.",
              "Machiavellian offenders manipulate - social engineering and BEC are their economy.",
              "Low self-control supplies the situational trigger: opportunity plus impulse, no plan.",
              "Control explains tempo: kiddies are loud and immediate; state actors are quiet and patient.",
              "Insider slow-burn fraud: rationalized small amounts grow into locked-in habit.",
            ],
            diagram: {
              kind: "matrix",
              title: "Self-control x skill - the offender quadrants",
              caption: "Plot any offender by control and skill; the quadrant predicts both behaviour and trail quality.",
              axes: { x: "Technical skill (low -> high)", y: "Self-control (low -> high)" },
              quadrants: [
                { label: "Patient professionals", note: "insider fraud, state actors - quiet, patterned trails" },
                { label: "Impulsive experts", note: "carding, opportunistic hacking - skilled but noisy" },
                { label: "The manipulator", note: "social engineers, BEC - interpersonal control, low tech" },
                { label: "The kiddie", note: "impulse plus packaged tools - loud, quickly caught" },
              ],
            },
            callout: {
              type: "tip",
              title: "Impulse is loud, control is quiet",
              body: "Trait theory's operational payoff is a tempo read: loud, immediate, bragging behaviour indicates low self-control (and a short trail); silent, months-long patience indicates high control (and a pattern-only trail). Write that sentence with the quadrant and the answer becomes a profiling instrument.",
            },
            examQuestions: [
              {
                q: "Explain the Dark Triad and low self-control theory as personality accounts of cyber crime, map each trait to its crime class, and construct the self-control x skill quadrant with its four offender types and investigation implications.",
                marks: 14,
                outline: [
                  "Dark Triad: narcissism, Machiavellianism, psychopathy - trait clusters",
                  "Narcissism -> notoriety crime (defacement); offenders publicize",
                  "Machiavellianism -> manipulation crime (social engineering, BEC)",
                  "Psychopathy -> callous economies (fraud on vulnerable, CSAM)",
                  "Low self-control: opportunity plus impulse, no planning required",
                  "Quadrant: kiddie, impulsive expert, manipulator, patient professional",
                  "Tempo rule: impulse is loud and traceable; control is quiet and patterned",
                ],
              },
              {
                q: "How does low self-control theory explain the difference between a script kiddie and a state-sponsored actor?",
                marks: 7,
                outline: [

                  "Same opportunity environment, different control and discipline",

                  "Kiddie: immediate gratification - loud scans, default tools",

                  "State actor: long horizon, patient tradecraft - noise suppressed by control",

                  "Low control seeks instant proof - noise is the byproduct",

                  "High control suppresses noise - only patterns remain to detect",

                ],              },
            ],
          },
          {
            number: "3.5",
            title: "Intelligence theories - capability, self-control and the white-collar puzzle",
            body: [
              "Intelligence theories ask how cognitive capability shapes offending, and cyber crime sharpens the classic puzzle. The traditional criminological finding links lower measured intelligence with street crime, but cyber crime - and white-collar crime generally - shows the opposite tail: technical competence is a prerequisite for the sophisticated offences (malware development, fraud scheme design), so above-average intelligence concentrates in the professional categories. The synthesis is capability-gated opportunity: intelligence raises the ceiling of available offences, while self-control and motivation decide which floor is actually visited.",
              "The syllabus's intelligence-theory pairing works through three propositions. First, differential capability: a script kiddie and a malware author may share motives, but only one can write the implant - capability sorts who can commit which class of crime. Second, cognitive style: high-verbosity planning offenders (schemers - the BEC operator who rehearses the thread) differ from low-verbosity impulsive offenders (scanners), and their crime scenes differ accordingly - premeditation leaves infrastructure (registered domains, rented servers) while impulse leaves noise. Third, the neutralization vocabulary: intelligent offenders maintain sophisticated justifications ('security research', 'victimless borrowing'), which profiling reads as cognitive dissonance management rather than sincerity.",
              "A worked contrast fixes the frame. ABE: two offenders both want money. The low-capability path is phishing at scale with a kit - the crime scene is rented, disposable, loud. The high-capability path is an insider building a rounding-routine salami - the scene is inside legitimate code, patient, balanced books. Both are intelligence-consistent choices, but capability chose the method, and the method chose the evidence profile. The exam's synthesis: intelligence determines what is possible; personality and control determine what is probable; opportunity determines when.",
              "Exam framing: expect 'intelligence theories of cyber criminals'. Present the white-collar reversal of the IQ-crime correlation, the three propositions (capability gating, cognitive styles, neutralization), and the two-path worked contrast - closing with the synthesis sentence about possible, probable, and when. The two-path contrast shows capability choosing the method and the method choosing the evidence profile. Kit phishing versus insider salami is the contrast to write - rented noise against balanced books.",
            ],
            keyTerms: [
              { term: "Capability gating", definition: "Intelligence sets the ceiling of offences technically available to an offender." },
              { term: "White-collar reversal", definition: "Cyber and white-collar crime show above-average intelligence in professional categories." },
              { term: "Neutralization", definition: "Justification vocabulary ('security research') that manages cognitive dissonance." },
              { term: "Cognitive style", definition: "Planning-oriented vs impulsive offenders leave different crime scenes." },
            ],
            table: {
              caption: "Capability, style and scene.",
              headers: ["Offender profile", "Capability use", "Typical method", "Evidence profile"],
              rows: [
                ["Low capability, high motive", "Packaged tools only", "Kit phishing, loud scans", "Rented, disposable, noisy"],
                ["High capability, impulsive", "Skill without patience", "Opportunistic intrusion, carding", "Skilled but noisy - mistakes under pressure"],
                ["High capability, high control", "Engineered schemes", "Salami routines, custom malware", "Inside legitimate systems, balanced books"],
                ["Any, with neutralization", "Justification vocabulary", "'Research', 'borrowing' framings", "Read as dissonance management"],
              ],
            },
            bullets: [
              "Street-crime IQ findings reverse in cyber crime - capability gates the professional offences.",
              "Differential capability: shared motives, different reachable crime classes.",
              "Planning offenders premeditate - infrastructure (domains, servers) precedes the act.",
              "Impulsive offenders improvise - noise and mistakes under pressure.",
              "Neutralization vocabulary ('security research') signals dissonance management in profiling.",
              "Synthesis: intelligence decides what is possible, personality what is probable, opportunity when.",
            ],
            diagram: {
              kind: "compare",
              title: "Two offenders, one motive, two scenes",
              caption: "Capability chose the method; the method chose the evidence.",
              left: {
                heading: "Low-capability path",
                items: [
                  "Kit phishing at scale",
                  "Rented, disposable infrastructure",
                  "Loud - volume attracts detection",
                  "Scene: outside the victim's systems",
                ],
              },
              right: {
                heading: "High-capability path",
                items: [
                  "Insider salami routine in code",
                  "Lives inside legitimate systems",
                  "Quiet - balanced books, no alerts",
                  "Scene: trusted code and credentials",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Possible, probable, when",
              body: "The one-sentence synthesis covers the whole unit's theories: intelligence determines what an offender can do, personality and self-control determine what they will do, and opportunity (routine activity) determines when it happens. Writing that sentence ties sections 3.1 through 3.5 into one framework examiners remember.",
            },
            examQuestions: [
              {
                q: "Explain intelligence theories of cyber criminal behaviour: the white-collar reversal of the IQ-crime correlation, capability gating, cognitive styles of planning vs impulsive offenders, and neutralization techniques - with the two-path worked contrast.",
                marks: 14,
                outline: [
                  "Street-crime correlation reverses in cyber/white-collar categories",
                  "Capability gating: intelligence sets the ceiling of reachable offences",
                  "Planning offenders premeditate - infrastructure precedes the act",
                  "Impulsive offenders improvise - noise under pressure",
                  "Neutralization: 'security research' vocabulary as dissonance management",
                  "Contrast: kit phishing scene vs insider salami scene",
                  "Synthesis: possible (intelligence), probable (personality), when (opportunity)",
                ],
              },
              {
                q: "Why can profiling read 'I was doing security research' as evidence rather than as sincerity?",
                marks: 7,
                outline: [

                  "Neutralization theory: offenders build justifications to manage dissonance",

                  "The vocabulary persists across offenders - it is a scene norm, not a personal belief",

                  "Context (unauthorized access, data taken) contradicts the stated motive",

                  "The same phrase recurs across offenders - rehearsed, not felt",

                  "Actions (data copied, access kept) contradict the claimed motive",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "Criminal profiling - from indicators to suspect",
            body: [
              "Criminal profiling is the inference of offender characteristics from crime-scene evidence, and cyber profiling runs on digital indicators. The method families: deductive profiling builds from case-specific evidence (what this incident's artefacts prove about this offender); inductive profiling builds from statistical bases (what offenders of this class typically do); and geographic profiling (Rossmo) maps offence locations - in cyber crime, the geography is infrastructure: hosting choices, language settings, time-zone-consistent activity patterns, payment paths. The FBI's organized-disorganized distinction translates directly: organized offenders show planning (registered domains, staged infrastructure), disorganized show improvisation (default payloads, leftover artefacts).",
              "A worked profile trace shows the pipeline. Evidence: intrusion began during a UTC+5:30 working-hours pattern; credentials were phished with a lure referencing an internal project name; exfiltration used a residential proxy network; a test login preceded every significant action. Inferences: internal knowledge or insider assistance (project name); likely local time-zone anchoring (working-hours activity); moderate sophistication with operational caution (residential proxies, test logins). The suspect description: someone with recent insider or contractor access, disciplined but not state-grade, motivated by money more than ideology - and each inference names the evidence that would confirm or eliminate it. Profiling is falsifiable when done this way; it is storytelling when it is not.",
              "The modus-operandi distinction (deepened in Unit IV) is the profiler's sharpest tool: MO is what the offender does to succeed (tools, access methods, cover) and evolves with learning; signature is what the offender does to satisfy something personal (a taunt, a defacement theme, a calling card) and persists. Investigators prioritize signature over MO for linking cases, because MO changes as the offender learns while signature is stable. Cyber profiling also borrows from forensic linguistics - stylometry on forum posts and commit messages has identified pseudonymous offenders - and from behavioural analytics on infrastructure registration patterns.",
              "Exam framing: expect 'explain criminal profiling of cyber criminals'. Give the method families (deductive, inductive, geographic-on-infrastructure), run the evidence-to-inference pipeline with falsifiability, and land the MO-versus-signature distinction with the case-linking rule: MO evolves, signature persists. Falsifiability is the test - name the evidence that would confirm or eliminate every inference you draw. The profile trace's inferences each carry a confirmation test - insider access, local anchoring, moderate control, money motive.",
            ],
            keyTerms: [
              { term: "Deductive profiling", definition: "Inference strictly from case-specific evidence - what this scene proves." },
              { term: "Inductive profiling", definition: "Inference from statistical patterns of the offender class." },
              { term: "Geographic profiling", definition: "Rossmo's location analysis - in cyber terms, infrastructure and time-zone geography." },
              { term: "Signature", definition: "The offender's personal, persistent behavioural mark - stable across cases." },
              { term: "Stylometry", definition: "Linguistic fingerprinting of writing style - used on posts and commit messages." },
            ],
            table: {
              caption: "Profiling families and their cyber translations.",
              headers: ["Family", "Basis", "Cyber translation", "Watch-out"],
              rows: [
                ["Deductive", "This case's evidence", "Artefact-to-inference chains", "Only as strong as the evidence"],
                ["Inductive", "Class statistics", "Category behaviour bases (insider, kiddie...)", "Stereotyping risk"],
                ["Geographic", "Offence locations", "Hosting, language, time zones, payment paths", "VPN/proxy distortions"],
                ["Organized/disorganized", "Planning vs improvisation", "Staged infrastructure vs leftover noise", "Mixed scenes are common"],
              ],
            },
            bullets: [
              "Deductive: infer only what this scene's artefacts support; inductive: borrow class statistics.",
              "Geographic profiling becomes infrastructure geography - hosting, time zones, payment paths.",
              "Organized vs disorganized: staged domains and proxies vs default payloads and leftovers.",
              "The pipeline: indicators -> inferences -> suspect description -> confirm/eliminate evidence.",
              "MO is functional and evolves; signature is personal and persists - link cases on signature.",
              "Stylometry and registration analytics add linguistic and infrastructure fingerprints.",
            ],
            diagram: {
              kind: "flow",
              title: "The profiling pipeline",
              caption: "From artefacts to a falsifiable suspect description - each arrow names what would confirm or eliminate.",
              steps: [
                { label: "Collect indicators", note: "logs, infrastructure, language, timing" },
                { label: "Classify", note: "deductive vs inductive reading" },
                { label: "Infer", note: "knowledge, control, motive" },
                { label: "Describe", note: "falsifiable suspect profile" },
                { label: "Test", note: "confirm or eliminate against new evidence" },
              ],
            },
            callout: {
              type: "exam",
              title: "MO evolves, signature persists",
              body: "The single most quoted profiling distinction: modus operandi is functional and changes as the offender learns; signature is personal and stable. Use MO to understand the incident, signature to link incidents - and say which one you are using, because conflating them is the classic profiling error.",
            },
            examQuestions: [
              {
                q: "Explain criminal profiling for cyber crime: the deductive, inductive and geographic method families, the evidence-to-inference pipeline with a worked trace, and the MO-versus-signature distinction with its case-linking rule.",
                marks: 14,
                outline: [
                  "Deductive: inference from this case's artefacts only",
                  "Inductive: class-based statistics - insider, kiddie, professional behaviour bases",
                  "Geographic on infrastructure: hosting, language, time zones, payment paths",
                  "Organized vs disorganized: staged infrastructure vs leftover noise",
                  "Worked trace: working-hours pattern + internal lure + residential proxies + test logins",
                  "Inferences: insider access, local anchoring, moderate control, money motive",
                  "MO evolves with learning; signature persists - link cases on signature",
                ],
              },
              {
                q: "What makes a criminal profile falsifiable rather than storytelling?",
                marks: 7,
                outline: [

                  "Every inference names the evidence that would confirm or eliminate it",

                  "The profile updates or dies with new evidence",

                  "Method family is stated (deductive vs inductive) - claims are scoped",

                  "Competing hypotheses are maintained and eliminated explicitly",

                  "Predictions are testable against new incidents in the series",

                ],              },
            ],
          },
          {
            number: "3.7",
            title: "Impact on individuals and corporates",
            body: [
              "Impact measures what the crime costs, and on individuals the stack has four layers. Direct financial loss: emptied accounts, fraudulent loans, card misuse - the visible layer. Psychological harm: the victimology of violation - anxiety, shame, hypervigilance; sextortion and romance-fraud victims show trauma-pattern stress, and adolescent bullying victims show depression and school-avoidance effects. Reputational and identity harm: leaked documents and impersonation follow victims for years - credit histories and public search results do not forget. Opportunity cost and time: recovery consumes months - statements, disputes, re-issuing documents, reporting to every relevant platform.",
              "On corporates the layers scale. Direct loss: stolen funds, ransom payments, fraud write-offs. Operational loss: downtime converts to revenue loss per hour - the exchange, hospital or plant numbers that ransomware made quotable. Remediation and hardening: forensics, rebuilds, audits, security staff - the post-incident budget that dwarfs pre-incident prevention. Regulatory and legal exposure: data-protection penalties, contractual breach liabilities, class litigation. Strategic loss: the two that outlast the incident - customer trust (churn follows breaches for years) and share price (breach disclosures produce measurable drops). The psychological layer exists for companies too: incident fatigue in response teams, and leadership paralysis in decision windows (pay or not pay is a five-day decision with permanent consequences).",
              "A worked impact trace fixes both stacks on one incident. A mid-size firm suffers ransomware with data theft: direct - 200 lakh ransom considered, 40 lakh paid in downtime; operational - 11 days offline, order pipeline stalled; remediation - rebuilds and audits at 90 lakh; regulatory - breach notification and penalties; strategic - two marquee clients do not renew; human - the response lead's burnout and the staff's anxiety. The exam's reading: the visible number (the ransom) is the smallest layer of the stack - impacts compound outward and downward.",
              "Exam framing: expect 'discuss the economic and psychological impact of cyber crime on individuals and organizations'. Give the four-layer individual stack and the six-layer corporate stack, run the ransomware impact trace, and close with the compounding sentence - the ransom is the smallest number in the incident. Rank the layers before totalling - the ransom is the smallest number in any incident's ledger.",
            ],
            keyTerms: [
              { term: "Direct loss", definition: "The money and assets taken - the visible first layer of impact." },
              { term: "Remediation cost", definition: "Forensics, rebuilds and hardening - the budget after the incident." },
              { term: "Breach churn", definition: "Customer loss that follows disclosures for years - trust damage made measurable." },
              { term: "Incident fatigue", definition: "Burnout and decision paralysis in response teams under prolonged pressure." },
            ],
            table: {
              caption: "The impact stacks.",
              headers: ["Layer", "Individual victim", "Corporate victim"],
              rows: [
                ["Direct", "Emptied accounts, card misuse", "Stolen funds, ransom, fraud write-offs"],
                ["Operational", "Time lost to recovery", "Downtime revenue loss, stalled pipelines"],
                ["Psychological", "Anxiety, shame, hypervigilance", "Team fatigue, leadership decision paralysis"],
                ["Reputational / legal", "Identity leakage, impersonation", "Penalties, litigation, churn, share price"],
              ],
            },
            bullets: [
              "Individual stack: direct loss, psychological harm, identity/reputational harm, recovery time.",
              "Sextortion and romance fraud produce trauma-pattern stress; bullying shows adolescent effects.",
              "Corporate stack adds regulatory exposure and the two strategic losses: trust and share price.",
              "Remediation budgets (forensics, rebuilds, audits) dwarf prevention spending.",
              "Decision paralysis (pay or not pay) is itself an organizational cost.",
              "Ransomware trace: ransom is the smallest layer - downtime, remediation, churn compound outward.",
            ],
            diagram: {
              kind: "layers",
              title: "The corporate impact stack",
              caption: "Four layers, deepest losses last - the ransom sits at the top, the smallest of the four.",
              layers: [
                { label: "Direct loss", note: "ransom, stolen funds - the visible number" },
                { label: "Operational loss", note: "downtime revenue, stalled delivery" },
                { label: "Remediation and legal", note: "forensics, rebuilds, penalties, litigation" },
                { label: "Strategic and human", note: "churn, share price, team burnout" },
              ],
            },
            callout: {
              type: "exam",
              title: "The ransom is the smallest number",
              body: "In any impact answer, rank the losses before totalling them: direct money is layer one; downtime, remediation, penalties, churn and human costs stack above it. The sentence 'the visible loss is the smallest layer' is the evaluative claim examiners look for in impact questions.",
            },
            examQuestions: [
              {
                q: "Discuss the economic and psychological impact of cyber crime on individuals and on corporates, using the layered impact stacks and a worked ransomware impact trace for a mid-size firm.",
                marks: 14,
                outline: [
                  "Individual: direct loss, psychological harm, identity leakage, recovery time",
                  "Sextortion/romance fraud: trauma-pattern stress; bullying: adolescent effects",
                  "Corporate: stolen funds, ransom, fraud write-offs",
                  "Operational: downtime revenue loss; remediation: forensics, rebuilds, audits",
                  "Regulatory: penalties, litigation; strategic: churn and share price",
                  "Human layer: incident fatigue, leadership paralysis on pay decisions",
                  "Trace: 40 lakh downtime, 90 lakh remediation, non-renewals - ransom smallest layer",
                ],
              },
              {
                q: "Why do breach disclosures affect share price more than the direct loss amount would suggest?",
                marks: 7,
                outline: [

                  "Markets price future costs: churn, penalties, litigation, hardening",

                  "Disclosure signals control weakness - governance risk premium",

                  "Trust is slow to rebuild; churn compounds the initial signal",

                  "Litigation and regulatory tails extend for years after disclosure",

                  "Breach history raises the firm's security and capital costs",

                ],              },
            ],
          },
          {
            number: "3.8",
            title: "Impact on government and the nation",
            body: [
              "At the national scale the impact becomes sociological and strategic. Economic impact: the digital economy's rails - payments, tax systems, registries - are attack surfaces; fraud losses at scale tax GDP, and breaches of government registries erode the data trust that digitization programs require. Governance impact: e-governance portals defaced or disabled erode administrative credibility; election-period interference and disinformation attack decision-making itself. Sovereignty and security impact: attacks on critical infrastructure - power grids, banking switches, defence suppliers - cross from crime into national security, which is why section 66F (cyber terrorism) exists and why CERT-level coordination sits with national agencies.",
              "The sociological channel works through trust. A worked ripple trace: a breach at a national payment switch is small in rupees but large in behaviour - users delay adopting the next digital service, merchants add friction, the government's cashless policy loses momentum; meanwhile every copied KYC document from the breach feeds identity-fraud ecosystems for years. The macro numbers (fraud losses, response budgets) understate the macro effect: a single high-visibility incident can shift adoption curves for a policy programme. This is the nation-level reading of the corporate churn effect from 3.7, generalized.",
              "The national response architecture mirrors the impact: CERT-In for incident coordination, I4C for crime coordination, sectoral regulators (banking, telecom) for their rails, and international cooperation channels (Budapest Convention processes, MLATs) for the cross-border reality. The strategic doctrine follows: critical infrastructure is designated and protected (IT Act section 70), incident reporting is mandated, and drills treat cyber incidents as disaster scenarios - because at national scale, availability is sovereignty.",
              "Exam framing: expect 'impact of cyber crime on government and nation'. Give the three impact channels (economic, governance, sovereignty-security), run the payment-switch ripple trace, and close with the response architecture and the doctrine sentence - at national scale, availability is sovereignty. End in doctrine, not statistics - availability is sovereignty when the rails themselves are the state. The sextortion example anchors the shame branch - the strongest silence, and the one portals exist to break.",
            ],
            keyTerms: [
              { term: "Critical information infrastructure", definition: "Designated systems (power, banking, telecom) whose protection is a national duty - IT Act section 70." },
              { term: "CERT-In", definition: "India's incident-response and coordination authority for cyber incidents." },
              { term: "Trust ripple", definition: "One high-visibility breach shifting adoption behaviour economy-wide." },
              { term: "Disinformation", definition: "Deliberate false content targeting decision-making - the governance-level attack." },
            ],
            table: {
              caption: "National impact channels and their responders.",
              headers: ["Channel", "What is hit", "Example", "National responder"],
              rows: [
                ["Economic", "Payment rails, registries, tax systems", "Fraud losses taxing GDP; registry breaches", "Banking/telecom regulators, I4C"],
                ["Governance", "E-governance credibility, elections", "Portal defacement, disinformation", "CERT-In, ECI, platform coordination"],
                ["Security", "Critical infrastructure", "Grid, banking switch, defence supplier attacks", "NTIUs, CERT-In, national security bodies"],
                ["International", "Cross-border evidence and takedowns", "MLATs, Budapest processes", "MHA, MEA, INTERPOL channels"],
              ],
            },
            bullets: [
              "Economic channel: fraud taxes GDP; registry breaches erode data trust in digitization.",
              "Governance channel: defaced portals and disinformation attack administrative credibility.",
              "Security channel: critical-infrastructure attacks cross from crime into national security (66F, s.70).",
              "Trust ripple: one payment-switch breach shifts national adoption behaviour for years.",
              "Stolen KYC documents from one breach feed identity-fraud ecosystems for a decade.",
              "Response architecture: CERT-In, I4C, sectoral regulators, MLAT/Budapest international channels.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The national ripple",
              caption: "One incident, four stages outward - the macro effect outruns the macro loss.",
              stages: [
                { label: "Incident", note: "breach at a national payment switch" },
                { label: "Sector shock", note: "banks and merchants add friction" },
                { label: "Behaviour shift", note: "users delay adopting digital services" },
                { label: "Policy drag", note: "cashless momentum loses support" },
                { label: "Long tail", note: "stolen KYC feeds fraud ecosystems for years" },
              ],
            },
            callout: {
              type: "warning",
              title: "Availability is sovereignty at scale",
              body: "The doctrine sentence to write: when a nation's payments, registries and grids live on networks, denying those networks is denying the state's functions - which is why cyber terrorism (66F) and critical-infrastructure designation (section 70) exist. National-scale answers must end in doctrine, not in statistics.",
            },
            examQuestions: [
              {
                q: "Discuss the impact of cyber crime on government and the nation through the economic, governance and sovereignty-security channels, with the payment-switch ripple trace and the national response architecture.",
                marks: 14,
                outline: [
                  "Economic: fraud losses tax GDP; registry breaches erode digitization trust",
                  "Governance: portal defacement and disinformation attack credibility",
                  "Security: critical infrastructure attacks - 66F cyber terrorism, section 70 designation",
                  "Ripple trace: switch breach -> sector friction -> user behaviour shift -> policy drag",
                  "Stolen KYC documents feed identity fraud for years - the long tail",
                  "Responders: CERT-In, I4C, sectoral regulators, MLAT/Budapest channels",
                  "Doctrine: at national scale, availability is sovereignty",
                ],
              },
              {
                q: "Why is a small-value breach at a national payment switch a larger national problem than its rupee loss suggests?",
                marks: 7,
                outline: [

                  "Trust effects: adoption behaviour shifts economy-wide",

                  "Long tail: copied identity documents feed fraud ecosystems for years",

                  "Policy programmes lose momentum - the macro effect outruns the loss",

                  "National rails make one incident everyone's incident",

                  "Cross-border contagion spreads through shared vendors and flows",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "Modus Operandi of Cyber Crimes and Intrusion Analysis",
      summary:
        "Unit IV is the craft unit: modus operandi as an analytic structure, the fraud triangle and its detection techniques with countermeasures, intrusion analysis as the investigator's core skill, the methods that perform it, the intrusion kill chain as a defensive framework, passive discovery in historical data and logs, the detection of future threat actions, the deny-delay-degrade playbook, and the identification of intrusion patterns and key indicators.",
      chapter: {
        number: "04",
        title: "Modus Operandi and the Intrusion Kill Chain",
        intro:
          "Unit IV covers modus operandi and its structure, the fraud triangle (pressure, opportunity, rationalization) and fraud detection techniques with countermeasures, intrusion analysis as a core skill set, methods to perform intrusion analysis, the intrusion kill chain, passively discovering activity in historical data and logs, detecting future threat actions and capabilities, denying access, delaying and degrading adversary tactics and malware, and identifying intrusion patterns and key indicators.",
        inOneBreath:
          "Modus operandi is the offender's functional recipe - target, access, action, cover - while signature is the personal mark that persists. The fraud triangle names the three preconditions of fraud (pressure, opportunity, rationalization) and detection attacks the second. Intrusion analysis reconstructs attacker behaviour from artefacts; the kill chain turns that reconstruction into courses of action - detect, deny, disrupt, degrade, deceive - and indicators become the pivot points that link events into campaigns.",
        sections: [
          {
            number: "4.1",
            title: "Modus operandi - the anatomy of how they did it",
            body: [
              "Modus operandi (MO) is the offender's working method: the repeatable pattern of choices that got the crime done - target selection, access method, the action itself, the cash-out or cover step. In fraud investigations MO is a four-part record: who was targeted and why them, how access was obtained, what was done, and how the offender covered or monetized. The record exists because offenders are creatures of habit: skills are expensive to build, so they reuse them; infrastructure is costly to acquire, so they re-rent it; tactics that worked are re-run with small variations.",
              "A worked MO read makes the structure earn its place. Three fraud cases land on a desk: a fake-KYC wallet drain, a customer-care number scam, a spoofed-executive BEC. The MO records differ on every part: target (individual users vs call-centre customers vs finance staff), access (phishing page vs spoofed phone number vs compromised mailbox), action (credential theft vs social manipulation vs payment redirect), cover (mule accounts vs plausible scripts vs forged invoices). Nothing links them - until the fourth case arrives with the same phishing-page fingerprint as case one, and the fingerprint (identical template hash, same hosting provider, same registration pattern) is MO evidence that turns three files into one investigation.",
              "The MO-versus-signature distinction is the section's conceptual core and was introduced in profiling (3.6): MO is functional - what was needed to succeed - and it evolves as offenders learn and tools improve; signature is expressive - the personal mark (a taunting phrase, a thematic defacement, a distinctive code idiom) - and it persists. Investigations link cases on signature and understand incidents on MO. The practical corollary for defence teams: track adversary MO across your incidents to anticipate their next move (they re-run what worked), and share signature indicators with peers to import their detection.",
              "Exam framing: expect 'what is modus operandi and how is it used in cyber crime investigation'. Define MO with the four-part record, run the three-case-to-one-case read, and land the MO/signature distinction with the linking rule - MO evolves, signature persists, cases link on signature. The linking rule is one sentence - MO evolves, signature persists, cases link on signature and corroborate on MO.",
            ],
            keyTerms: [
              { term: "Modus operandi", definition: "The offender's functional working method - target, access, action, cover." },
              { term: "Signature", definition: "The offender's personal, persistent behavioural mark - stable across incidents." },
              { term: "Case linking", definition: "Connecting incidents by shared indicators - signature-led, MO-corroborated." },
              { term: "Fingerprint", definition: "A stable technical artefact - template hash, hosting pattern, code idiom." },
            ],
            table: {
              caption: "The four-part MO record.",
              headers: ["Part", "Question it answers", "Example (fake-KYC case)", "Evidence source"],
              rows: [
                ["Target selection", "Who and why them?", "New wallet users, KYC anxiety", "Victim interviews, lure analytics"],
                ["Access method", "How did they get in?", "Phishing page harvesting documents", "Mail headers, page template"],
                ["Action", "What was done?", "Credential reset and wallet drain", "Auth and transaction logs"],
                ["Cover / cash-out", "How did they escape or profit?", "Mule accounts, small amounts", "Beneficiary graph, withdrawal pattern"],
              ],
            },
            bullets: [
              "MO = the repeatable recipe: target, access, action, cover/cash-out.",
              "Offenders reuse because skills and infrastructure are expensive - habits leave patterns.",
              "Four-part MO record turns scattered complaints into a comparable dataset.",
              "Technical fingerprints (template hashes, hosting patterns) are MO evidence that links cases.",
              "MO is functional and evolves; signature is expressive and persists.",
              "Link cases on signature, understand incidents on MO - never conflate the two.",
            ],
            diagram: {
              kind: "compare",
              title: "MO vs signature",
              caption: "The investigation's two lenses - one explains the incident, the other links the series.",
              left: {
                heading: "Modus operandi (functional)",
                items: [
                  "What was needed to succeed",
                  "Evolves as offenders learn and tools change",
                  "Parts: target, access, action, cover",
                  "Used to understand and anticipate",
                ],
              },
              right: {
                heading: "Signature (expressive)",
                items: [
                  "The offender's personal mark",
                  "Persists across incidents and years",
                  "Examples: taunt phrases, themes, code idioms",
                  "Used to link cases into one series",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The linking rule",
              body: "Write the rule as a sentence: 'MO evolves with learning; signature persists; investigations link cases on signature and corroborate on MO.' Then demonstrate it - the identical phishing-template fingerprint across cases is signature evidence; the shared cash-out pattern is MO corroboration.",
            },
            examQuestions: [
              {
                q: "Explain modus operandi as used in cyber crime investigation: the four-part record, how offenders' habits create linkable patterns, and the MO-versus-signature distinction with the case-linking rule - illustrated by a three-case-to-one investigation read.",
                marks: 14,
                outline: [
                  "MO definition: the functional method - target, access, action, cover",
                  "Habits create patterns: skills and infrastructure are reused",
                  "Four-part record turns complaints into comparable data",
                  "Three cases read side by side: different on every part - unlinked",
                  "Fourth case matches template hash and hosting - MO/signature evidence links them",
                  "MO evolves with learning; signature persists across incidents",
                  "Rule: link on signature, corroborate on MO, understand on MO",
                ],
              },
              {
                q: "Why does a defacement theme qualify as signature while a change in exploitation technique does not?",
                marks: 7,
                outline: [

                  "Theme is expressive - satisfies something personal, no functional need",

                  "Exploit choice is functional - changes as better tools appear",

                  "Persistence distinguishes the two across time and targets",

                  "Themes carry the offender's identity across unrelated targets",

                  "Functional choices track tools; expressive choices track psychology",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "The fraud triangle - pressure, opportunity, rationalization",
            body: [
              "The fraud triangle (Cressey) is the field's causal model of fraud: three conditions must coincide for fraud to occur - pressure (a non-shareable financial or emotional need: debt, addiction, status, a sick parent), opportunity (access plus weak controls: the ability to act and a believable chance of not being caught), and rationalization (a justification that preserves the offender's self-image: 'I am only borrowing', 'the company underpays me', 'everyone rounds here'). Remove any one leg and the fraud does not happen - which is why the triangle is a control-design tool, not just an explanation.",
              "A worked application shows the diagnostic power. An accounts executive embezzles over three years: pressure - a gambling debt (non-shareable, escalating); opportunity - she both creates vendor records and approves payments (no segregation of duties); rationalization - 'I am borrowing against my bonus'. The triangle names all three legs and therefore names all three countermeasures: reduce pressure where legitimate (salary advances, assistance programmes), remove opportunity structurally (segregate duties, dual approval, rotation), and attack rationalization culturally (messages that borrowing is theft, prosecution precedents, tone at the top). The later fraud diamond (Wolfe and Hermanson) adds capability - the skills and position to execute - explaining why two people in the same pressure sit differently: only one can actually do it.",
              "The triangle's second use is forensic: after a fraud, reconstructing the three legs explains why controls failed and where the next one will strike. The opportunity leg is always the design lesson - every embezzlement post-mortem finds the same small set: one person holding two incompatible duties, approvals that never bounce, and monitoring that trusts tenure. The exam's reading: the triangle converts a moral story ('bad person') into an engineering story (pressure to relieve, opportunity to remove, rationalization to prevent).",
              "Exam framing: expect 'explain the fraud triangle with examples'. Define the three legs with Cressey's framing, work the accounts-executive case leg by leg, derive the countermeasures per leg, and close with the fraud diamond's capability addition - pressure, opportunity, rationalization, plus someone able to act. Spend most of the countermeasure answer on opportunity - pressure and rationalization get awareness, opportunity gets architecture.",
            ],
            keyTerms: [
              { term: "Fraud triangle", definition: "Cressey's model: pressure + opportunity + rationalization must coincide for fraud." },
              { term: "Non-shareable pressure", definition: "A need the offender cannot disclose - debt, addiction, status - the classic trigger." },
              { term: "Segregation of duties", definition: "No single person both creates and approves - the structural answer to opportunity." },
              { term: "Fraud diamond", definition: "Wolfe-Hermanson's addition: capability - the skill and position to execute." },
            ],
            table: {
              caption: "Three legs, three countermeasures.",
              headers: ["Leg", "What it sounds like", "Example", "Countermeasure"],
              rows: [
                ["Pressure", "A non-shareable need", "Gambling debt, medical bills, status strain", "Assistance programmes, salary advances"],
                ["Opportunity", "Access plus weak controls", "Creates and approves vendors; no second eye", "Segregation of duties, dual approval, rotation"],
                ["Rationalization", "A self-preserving excuse", "'Only borrowing'; 'they underpay me'", "Tone at the top, prosecution precedents"],
                ["Capability (diamond)", "The means to execute", "Knows the systems, holds the rights", "Access reviews tied to role, not tenure"],
              ],
            },
            bullets: [
              "Pressure: a non-shareable need starts it - debt, addiction, status.",
              "Opportunity: access plus weak controls makes it possible - the designable leg.",
              "Rationalization: 'borrowing, not stealing' preserves the offender's self-image.",
              "Remove any one leg and the fraud fails - the triangle is a control-design tool.",
              "Worked case: gambling debt + create-and-approve rights + 'borrowing' story.",
              "Fraud diamond adds capability - why two pressured employees differ in outcome.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The fraud triangle",
              caption: "Three legs must hold together - topple any one and the fraud never stands.",
              tiers: [
                { label: "Opportunity", note: "access + weak controls - the leg controls can remove" },
                { label: "Rationalization", note: "the story that keeps self-image intact" },
                { label: "Pressure", note: "the non-shareable need that starts it" },
              ],
            },
            callout: {
              type: "tip",
              title: "Opportunity is the leg you can engineer",
              body: "You cannot audit someone's debts or thoughts, but you can design away opportunity: segregation of duties, dual approval, mandatory leave, rotation. When asked for countermeasures, spend most of the answer on the opportunity leg - pressure and rationalization get awareness, opportunity gets architecture.",
            },
            examQuestions: [
              {
                q: "Explain the fraud triangle with a worked case, derive the countermeasures for each leg, and add the fraud diamond's capability dimension.",
                marks: 14,
                outline: [
                  "Cressey's model: pressure + opportunity + rationalization must coincide",
                  "Pressure: non-shareable need - gambling debt example",
                  "Opportunity: creates vendor records and approves payments - no segregation",
                  "Rationalization: 'borrowing against my bonus' preserves self-image",
                  "Countermeasures: assistance programmes; segregation, dual approval, rotation; tone at top",
                  "Post-mortem use: the triangle explains which control failed",
                  "Fraud diamond adds capability - skills and position to execute",
                ],
              },
              {
                q: "Why is opportunity the only leg of the triangle an organization can remove directly?",
                marks: 7,
                outline: [

                  "Pressure and rationalization are internal states - only influenced, not removed",

                  "Opportunity is structural: duties, approvals, monitoring - designable",

                  "Hence control design concentrates on duties segregation and review",

                  "Controls cannot audit motives but can audit access",

                  "Every embezzlement post-mortem lands on a duty-separation gap",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "Fraud detection techniques and countermeasures",
            body: [
              "Fraud detection is pattern-hunting against a baseline, and the techniques divide by the signal they watch. Rule-based detection: threshold and velocity rules - too many transactions per hour, amounts just under approval limits (structuring), payments to new beneficiaries at odd hours. Statistical and analytic detection: variance analysis over operators and accounts, Benford's-law checks on ledger first digits (fabricated numbers distribute unnaturally), duplicate-invoice matching. Behavioural detection: device fingerprints, session behaviour, typing rhythm - the account is behaving unlike its owner. Network detection: the beneficiary graph - mule clusters, circular flows, sudden fan-out from one account.",
              "A worked screen shows the stack firing in order. A card programme watches a merchant: velocity rule flags a spike in sub-100-rupee authorizations (card testing); analytics confirm first-digit distribution has drifted (fabricated refunds); device data shows new fingerprints at old accounts; the beneficiary graph shows the refunds converging on one account. Each layer corroborates the next - rules give speed, analytics give confidence, behaviour and graph give attribution. The countermeasure half then acts on the triangle: freeze and reverse (kills opportunity), review access (segregation), message the prosecution precedent (rationalization), and assist the strained insider (pressure).",
              "The standing countermeasure catalogue pairs with the triangle and the lifecycle: preventive controls (segregation of duties, dual approval, least privilege, vendor vetting), detective controls (the four-signal stack above, mandatory leave with duty rotation so long-cons run out of runway), and corrective controls (freeze-and-reverse drills, incident response, recovery litigation). The exam's structure sentence: prevention removes opportunity, detection buys time, correction buys money back - and the fastest single control in financial fraud remains the minutes-scale freeze.",
              "Exam framing: expect 'explain fraud detection techniques'. Give the four signal families with named techniques (velocity, Benford, device behaviour, beneficiary graphs), run the merchant screen as the worked example, and close with the three-tier countermeasure catalogue tied to the fraud triangle - prevention removes opportunity, detection buys time, correction buys money back. Corroboration is the pattern - four weak signals agreeing beat one strong signal alone.",
            ],
            keyTerms: [
              { term: "Velocity rule", definition: "Threshold on transaction frequency or amount - the fastest fraud signal." },
              { term: "Benford's law", definition: "Naturally occurring ledgers follow a first-digit distribution; fabrications drift from it." },
              { term: "Structuring", definition: "Splitting amounts to stay under approval or reporting thresholds - itself a red flag." },
              { term: "Beneficiary graph", definition: "Network view of who pays whom - mule clusters and circular flows visible." },
            ],
            table: {
              caption: "The four-signal detection stack.",
              headers: ["Signal family", "Named techniques", "What it catches", "Weakness"],
              rows: [
                ["Rules / velocity", "Thresholds, structuring alerts", "Card testing, limit-dodging", "Tuned thresholds miss novel patterns"],
                ["Statistical", "Benford, variance analysis", "Fabricated entries, operator outliers", "Needs volume to be meaningful"],
                ["Behavioural", "Device fingerprints, session habits", "Account takeover", "Travelling users raise false positives"],
                ["Network / graph", "Beneficiary clusters, circular flows", "Mule networks, layering", "Requires cross-institution data"],
              ],
            },
            bullets: [
              "Rules give speed: velocity thresholds and structuring alerts fire in seconds.",
              "Statistics give confidence: Benford drift and operator variance expose fabrication.",
              "Behaviour gives identity: device and session fingerprints separate owner from impostor.",
              "Graphs give attribution: mule clusters and circular flows name the cash-out network.",
              "Countermeasures: preventive (segregation, least privilege), detective (the stack), corrective (freeze-and-reverse).",
              "Mandatory leave and rotation end long-cons - runway is the fraudster's resource.",
            ],
            diagram: {
              kind: "cycle",
              title: "The fraud management life cycle",
              caption: "Each turn hardens the next - detection feeds prevention, correction feeds deterrence.",
              steps: [
                { label: "Screen", note: "rules and analytics watch every transaction" },
                { label: "Flag", note: "case opened on corroborated signals" },
                { label: "Investigate", note: "behaviour + graph attribution" },
                { label: "Act", note: "freeze, reverse, revoke, report" },
                { label: "Harden", note: "lessons return as new rules and controls" },
              ],
            },
            callout: {
              type: "exam",
              title: "Corroborate before you act",
              body: "The examiner's trap is single-signal certainty: velocity rules alone produce false positives at scale. The answer pattern is corroboration - rule flags, statistics confirm, behaviour attributes, graph names the network. Four weak signals agreeing beat one strong signal alone; say so explicitly.",
            },
            examQuestions: [
              {
                q: "Explain fraud detection techniques across rule-based, statistical, behavioural and network signals, run a worked merchant screen through all four, and pair the detections with preventive, detective and corrective countermeasures.",
                marks: 14,
                outline: [
                  "Rules/velocity: thresholds and structuring alerts - fast but false-positive prone",
                  "Statistical: Benford drift and operator variance expose fabricated entries",
                  "Behavioural: device fingerprints and session habits separate owner from impostor",
                  "Network: beneficiary graphs reveal mule clusters and circular flows",
                  "Worked screen: card-testing spike -> Benford drift -> new fingerprints -> one account",
                  "Countermeasures: segregation and least privilege; the stack; freeze-and-reverse drills",
                  "Mandatory leave and rotation end long-cons; minutes-scale freeze is the fastest control",
                ],
              },
              {
                q: "How does Benford's law detect fabricated ledger entries?",
                marks: 7,
                outline: [

                  "Natural ledgers follow a log-like first-digit distribution (1 most common)",

                  "Human-fabricated numbers distribute more uniformly",

                  "Drift from the expected distribution flags regions to audit",

                  "The test needs volume - single entries never betray themselves",

                  "Fabricators mimic digits, not distributions - the aggregate betrays",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "Intrusion analysis as a core skill set",
            body: [
              "Intrusion analysis is the discipline of reconstructing attacker behaviour from system artefacts - reading logs, packets, files and memory backwards into a narrative of who did what, when, how, and with what intent. It is called a core skill set because every other security function consumes its output: incident response acts on its timeline, threat intelligence pivots on its indicators, forensics preserves its evidence chain, and management decisions (contain, negotiate, disclose) depend on its scope assessment. The analyst's product is a defensible story: what happened, in order, with evidence for each claim and confidence labels on each inference.",
              "The skill stack has four layers. Data literacy: knowing which sources carry which truth - authentication logs (who), process and command histories (what), network flows (where), file systems and memory (what changed), application logs (intent). Analytical method: timeline construction, anomaly identification, indicator pivoting (one hash or IP across sources), and hypothesis discipline - every narrative claim is either evidenced or labelled as inference. Tool fluency: log parsers, SIEM queries, packet analysis, forensic suites - tools change, the questions do not. Communication: the written report that survives legal scrutiny - timestamps in UTC, evidence references, clear separation of fact and inference, section 65B awareness in the Indian context.",
              "A worked scope assessment shows the discipline's value in the decision moment. Ransomware is detected at 02:00; the analyst's first hour produces: initial access via VPN credential at T-9 days (authentication log), lateral movement over SMB (flows), data staging into an archive (file system), exfiltration spike to a known-actor host (netflow), encryption event (EDR). The board's question - 'is data out?' - is answered with evidence, not guesswork, and the negotiation and disclosure decisions inherit a defensible basis. That moment is why the skill is core: scope errors in hour one become legal and financial errors in week three.",
              "Exam framing: expect 'why is intrusion analysis a core skill set'. Define it, give the four-layer skill stack, and run the ransomware scope-assessment trace - closing with the product sentence: the deliverable is a defensible story with evidence per claim and confidence per inference. Fact and inference stay visually separated in the report - the discipline courts and examiners both reward.",
            ],
            keyTerms: [
              { term: "Intrusion analysis", definition: "Reconstructing attacker behaviour from logs, packets, files and memory into a defensible narrative." },
              { term: "Indicator pivoting", definition: "Chasing one artefact (hash, IP, domain) across data sources to expand the timeline." },
              { term: "Scope assessment", definition: "Determining what was touched, when, and whether data left - the hour-one question." },
              { term: "Defensible narrative", definition: "A timeline with evidence per claim, inference labelled, timestamps normalized." },
            ],
            table: {
              caption: "The four-layer skill stack.",
              headers: ["Layer", "Contents", "Why it matters"],
              rows: [
                ["Data literacy", "Auth logs, process history, flows, file systems, memory", "Each source answers a different question"],
                ["Analytical method", "Timelines, pivoting, anomaly flags, hypothesis discipline", "Turns data into a defensible narrative"],
                ["Tool fluency", "SIEM queries, packet analysis, forensic suites", "Tools change; the questions persist"],
                ["Communication", "Reports, UTC discipline, fact-vs-inference, 65B awareness", "Output must survive legal scrutiny"],
              ],
            },
            bullets: [
              "Intrusion analysis reads artefacts backwards into who/what/when/how/intent.",
              "Every function consumes it: response acts, intelligence pivots, forensics preserves, leadership decides.",
              "Data literacy: know which source answers which question before opening any tool.",
              "Hypothesis discipline: evidence-backed claims or labelled inference - never blended.",
              "The hour-one deliverable is scope: touched what, data out or not.",
              "In the Indian context the report anticipates section 65B certification needs.",
            ],
            diagram: {
              kind: "layers",
              title: "The intrusion-analysis skill stack",
              caption: "Four layers from data to delivery - the product is a defensible narrative.",
              layers: [
                { label: "Communication", note: "report that survives legal scrutiny" },
                { label: "Tool fluency", note: "SIEM, packet, forensic suites" },
                { label: "Analytical method", note: "timelines, pivots, hypotheses" },
                { label: "Data literacy", note: "knowing which source answers which question" },
              ],
            },
            callout: {
              type: "exam",
              title: "Fact vs inference - the credibility line",
              body: "The sentence that separates analyst reports from guesses: 'the VPN login at 22:41 is evidenced; the off-hours login pattern is inference of credential theft.' Keep fact and inference visually separated in answers - examiners and courts both reward the discipline.",
            },
            examQuestions: [
              {
                q: "Explain intrusion analysis as a core skill set: its definition and consumers, the four-layer skill stack, and a worked hour-one scope assessment for a ransomware incident.",
                marks: 14,
                outline: [
                  "Definition: reconstruct attacker behaviour from artefacts into a defensible narrative",
                  "Consumers: response acts, intelligence pivots, forensics preserves, leaders decide",
                  "Data literacy: auth logs answer who, flows answer where, memory answers what changed",
                  "Method: timelines, indicator pivots, hypothesis discipline",
                  "Tools change, questions persist; communication must survive legal scrutiny",
                  "Worked trace: VPN access T-9d -> lateral SMB -> staging -> exfil spike -> encryption",
                  "Hour-one product: scope - what was touched, did data leave",
                ],
              },
              {
                q: "Why does the analyst normalize all timestamps to UTC?",
                marks: 7,
                outline: [

                  "Devices log in local time and timezones shift across regions",

                  "A single timeline requires one reference frame",

                  "Courts and cross-border cooperation depend on unambiguous ordering",

                  "Daylight shifts and travel silently skew local timestamps",

                  "Cross-border cases live or die on comparable clocks",

                ],              },
            ],
          },
          {
            number: "4.5",
            title: "Methods to perform intrusion analysis",
            body: [
              "The method is a pipeline, and its stages are examinable one by one. Collection: gather everything volatile first - memory capture, live process and network state - then rotating logs, then disk. Normalization: convert heterogeneous logs to one timezone and one schema so correlation becomes possible. Initial triage: sort events by anomaly and priority - new services, impossible-travel logins, unusual processes. Hypothesis formation: from the loudest anomaly, propose an attack hypothesis ('credential theft via phishing -> VPN access'). Testing: pivot on the hypothesis's predictions - if VPN was used, the auth log must show the session; if data was staged, the file system must show the archive.",
              "Pivoting is the method's engine: one artefact expands into a context. A worked pivot chain: an EDR alert names a suspicious powershell invocation -> the process tree shows it spawned from an Office document (phishing delivery) -> the document's hash appears in the mail gateway log (recipient identified) -> the recipient's subsequent VPN login appears in the auth log (access confirmed) -> the session's destination IPs appear in netflow (actions mapped). Five sources, one narrative, zero speculation - each arrow is an evidenced step, and the chain's shape (delivery -> access -> action) is the kill chain being reconstructed inductively.",
              "The method's discipline points: preserve as you go (hashes, images, chain of custody - analysis destroys evidence if unpreserved); label confidence per step (confirmed, probable, possible); and write the timeline continuously rather than at the end - the timeline is the analysis. Two failure patterns repeat in practice: tool-first analysis (running scanners before questions exist produces noise, not narrative) and confirmation bias (chasing the first hypothesis instead of generating alternatives - the disciplined analyst maintains two live hypotheses until evidence eliminates one).",
              "Exam framing: expect 'describe the methods of performing intrusion analysis'. Give the pipeline (collect, normalize, triage, hypothesize, test), demonstrate the pivot chain across five sources, and close with the discipline points - preserve as you go, label confidence, timeline-first, two hypotheses live. Volatile-first is the pipeline's first rule - a reboot destroys the first exhibit before analysis begins. Two live hypotheses is the discipline - evidence eliminates one, and the timeline records which.",
            ],
            keyTerms: [
              { term: "Normalization", definition: "One timezone, one schema - the precondition for cross-source correlation." },
              { term: "Pivot", definition: "Expanding one artefact into context across sources - the analysis engine." },
              { term: "Process tree", definition: "Parent-child execution lineage - shows how a payload was launched." },
              { term: "Chain of custody", definition: "The documented handling trail that keeps evidence admissible." },
            ],
            bullets: [
              "Collect volatile-first: memory and live state die on reboot.",
              "Normalize before correlating - one timezone, one schema.",
              "Triage by anomaly and priority; hypothesis grows from the loudest signal.",
              "Pivot: EDR alert -> process tree -> mail gateway -> auth log -> netflow.",
              "Preserve as you go - hash, image, log custody before deep analysis.",
              "Keep two hypotheses live until evidence eliminates one; write the timeline continuously.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The intrusion-analysis pipeline",
              caption: "Five stages from volatile data to defensible narrative.",
              stages: [
                { label: "Collect", note: "memory first, then logs, then disk" },
                { label: "Normalize", note: "one timezone, one schema" },
                { label: "Triage", note: "sort by anomaly and priority" },
                { label: "Hypothesize", note: "attack story from the loudest signal" },
                { label: "Test", note: "pivot on predictions; keep two hypotheses" },
              ],
            },
            callout: {
              type: "warning",
              title: "Reboot destroys the first exhibit",
              body: "The classic beginner error: rebooting to 'fix' the machine before capturing memory and live state. Volatile artefacts (process lists, network connections, encryption keys in RAM) vanish on restart - collect volatile-first is the pipeline's first rule and the exam's favourite warning.",
            },
            examQuestions: [
              {
                q: "Describe the methods of performing intrusion analysis: the collection-to-testing pipeline, a five-source pivot chain from EDR alert to mapped actions, and the discipline points (volatile-first, confidence labels, two live hypotheses).",
                marks: 14,
                outline: [
                  "Collect volatile-first: memory and live state before disk",
                  "Normalize: one timezone, one schema for correlation",
                  "Triage by anomaly; hypothesize from the loudest signal",
                  "Test by pivoting on predictions across sources",
                  "Chain: EDR powershell -> Office parent -> mail gateway hash -> VPN login -> netflow destinations",
                  "Preserve as you go: hashes, images, chain of custody",
                  "Confidence labels per step; two hypotheses live; timeline written continuously",
                ],
              },
              {
                q: "What is confirmation bias in intrusion analysis and how is it managed?",
                marks: 7,
                outline: [

                  "Chasing the first hypothesis instead of generating alternatives",

                  "Managed by maintaining two live hypotheses until evidence eliminates one",

                  "Pivot on predictions, not preferences - evidence chooses",

                  "Alternative hypotheses force disconfirming evidence to be sought",

                  "Peer review of timelines catches the single-story trap",

                ],              },
            ],
            codeExample: {
              language: "bash",
              caption: "Hour-one triage on a Linux host - volatile artefacts, in collection order",
              code: `# 1. capture volatile state BEFORE anything else
ps auxef > volatile/processes.txt
ss -tunap  > volatile/connections.txt
last -F    > volatile/logins.txt

# 2. pivot on the loudest anomaly: an out-of-hours SSH login
grep "sshd" /var/log/auth.log | grep -v "127.0.0.1" \\
  | awk '$1" "$2 >= peak_hours' > pivot/ssh_sessions.txt

# 3. follow the session: which commands ran under it?
grep "$SESSION_USER" /var/log/auth.log | grep "session opened"

# 4. hash everything you touch - chain of custody starts here
sha256sum volatile/*.txt > custody.sha256`,
            },
          },
          {
            number: "4.6",
            title: "The intrusion kill chain",
            body: [
              "The intrusion kill chain (Hutchins, Cloppert, Amin - Lockheed Martin) models an intrusion as seven sequential stages: reconnaissance (studying the target), weaponization (coupling an exploit with a payload into a deliverable), delivery (transmitting it - mail, web, USB), exploitation (triggering inside the target), installation (establishing persistence), command and control (the attacker's channel opens), and actions on objectives (the mission - exfiltration, ransom, sabotage). Its defensive insight is structural: defenders need not win at the breach; interrupting any single stage defeats the intrusion, and early-stage interruption is cheapest.",
              "The framework's operational product is the courses-of-action matrix: for each stage, the defender lists actions in the detect/deny/disrupt/degrade/deceive/destroy taxonomy. A worked row-pair shows the method. Delivery: detect - mail gateway flags weaponized attachments; deny - block the sender infrastructure; disrupt - sinkhole the staging domain; deceive - serve the attachment into a sandbox and let the actor believe delivery succeeded. Installation: detect - EDR flags persistence registry writes; deny - application control blocks the binary; degrade - force the actor to rebuild tooling repeatedly; deceive - taint the implant's reports so the actor's picture of the network is false. Two rows, eight actions - the matrix turns doctrine into a checklist.",
              "The kill chain's limits complete a mature answer: it assumes a linear intrusion with a begin-stage, so it under-models insider actions and living-off-the-land attacks that start mid-chain; it is actor-centric (built forAPT campaigns) rather than technique-centric, which is why MITRE ATT&CK - a matrix of techniques across the lifecycle - became its operational complement; and its stages blur in fast automated attacks. The exam framing pairs them: the kill chain gives the phases and the courses-of-action discipline; ATT&CK gives the technique vocabulary inside each phase.",
              "Exam framing: expect 'explain the intrusion kill chain'. Draw the seven stages, present the courses-of-action matrix with the detect/deny/disrupt/degrade/deceive/destroy verbs, work the delivery and installation rows, and close with the limits-and-ATT&CK paragraph - the mature answer names where the model stops. Write two courses-of-action rows from memory - delivery and installation - and the matrix is demonstrated. The six verbs are the framework's product - stages without courses of action earn half the marks.",
            ],
            keyTerms: [
              { term: "Kill chain", definition: "Seven-stage intrusion model - recon, weaponize, deliver, exploit, install, C2, act." },
              { term: "Courses of action", definition: "Per-stage defensive actions across detect/deny/disrupt/degrade/deceive/destroy." },
              { term: "Stage interruption", definition: "Defeating the intrusion by breaking any single stage - defence need not win at breach." },
              { term: "MITRE ATT&CK", definition: "Technique matrix across the attack lifecycle - the kill chain's operational complement." },
            ],
            table: {
              caption: "Courses of action on two stages.",
              headers: ["Stage", "Detect", "Deny / Disrupt", "Degrade / Deceive"],
              rows: [
                ["Delivery", "Gateway flags weaponized attachments", "Block sender infrastructure; sinkhole staging domains", "Sandbox the lure; let the actor believe it landed"],
                ["Installation", "EDR flags persistence writes", "Application control blocks the binary", "Force tool rebuilds; taint implant reports"],
              ],
            },
            bullets: [
              "Seven stages: reconnaissance, weaponization, delivery, exploitation, installation, C2, actions.",
              "Defensive insight: break any one stage and the intrusion fails - early is cheapest.",
              "Courses-of-action matrix: six verbs per stage turns doctrine into a checklist.",
              "Delivery row: gateway detection, infrastructure blocking, sandbox deception.",
              "Installation row: EDR detection, application-control denial, report tainting.",
              "Limits: linear assumption, actor-centricity; MITRE ATT&CK adds technique coverage.",
            ],
            diagram: {
              kind: "flow",
              title: "The intrusion kill chain",
              caption: "Seven stages from study to mission - the defender may break the chain anywhere.",
              steps: [
                { label: "Recon & weaponize", note: "study target; couple exploit + payload" },
                { label: "Deliver", note: "mail, web, USB" },
                { label: "Exploit", note: "trigger inside the target" },
                { label: "Install", note: "persistence established" },
                { label: "Command & control", note: "the channel opens" },
                { label: "Act on objectives", note: "exfiltrate, ransom, sabotage" },
              ],
            },
            callout: {
              type: "exam",
              title: "Six verbs, one matrix",
              body: "Memorize the courses-of-action taxonomy as six verbs - detect, deny, disrupt, degrade, deceive, destroy - and be able to write two rows (delivery and installation) without notes. The matrix is the framework's product; stages without actions earn half the marks.",
            },
            examQuestions: [
              {
                q: "Explain the intrusion kill chain: the seven stages with one example each, the courses-of-action matrix with worked delivery and installation rows, and the framework's limits including the role of MITRE ATT&CK.",
                marks: 14,
                outline: [
                  "Recon and weaponization: study the target; couple exploit with payload",
                  "Delivery and exploitation: transmit and trigger - mail gateway and sandbox actions here",
                  "Installation: persistence - EDR detection, application-control denial",
                  "C2 and actions on objectives: channel opens; exfiltrate or ransom",
                  "Courses of action: detect/deny/disrupt/degrade/deceive/destroy per stage",
                  "Worked rows: block sender infra + sinkhole; block binary + taint reports",
                  "Limits: linear and actor-centric; ATT&CK supplies technique coverage",
                ],
              },
              {
                q: "Why is interrupting the kill chain at delivery cheaper than at actions on objectives?",
                marks: 7,
                outline: [

                  "Early stages touch perimeter systems you already control",

                  "Later stages mean the adversary operates inside - cost rises per stage",

                  "One blocked mail defeats the whole chain for every recipient",

                  "Per-recipient defence multiplies - one signature stops millions",

                  "Later-stage cleanup costs incident response, forensics and rebuilds",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "Passive discovery in historical data and detecting future threats",
            body: [
              "Intrusions are usually discovered late; passive discovery is the discipline of finding yesterday's attacker in the data you already hold - without touching the environment in ways that alert him. The method: mine historical logs and archives for the low-and-slow patterns that real-time rules missed. The richest sources: authentication logs (dormant accounts that woke, impossible travel, off-hours patterns), DNS logs (the longest-retained record - beacon domains, newly registered domains, DGA-looking strings), netflow (beacon intervals, data volume to unexpected destinations), proxy logs (rare user-agent strings, uncategorized destinations), and endpoint telemetry retained in the SIEM.",
              "A worked hunt shows the mechanics. The hypothesis: 'if an actor is present, he beacons'. The hunt: extract all external destinations per host, compute inter-connection intervals, and flag hosts whose intervals are machine-regular (jittered around a fixed period); one server beacons every 300 seconds +/- 5% to a domain registered eleven days before first contact. Cross-check: the domain sits on a hosting provider used by two other incidents in the shared intelligence feed; the account that logged into that server last month maps to a dormant contractor credential. Two pivots, one probable intrusion - found entirely in retained data, with no packets touched.",
              "The forward half of the syllabus clause - detecting future threat actions and capabilities - is prediction from the same evidence: the actor's toolset (which exploit classes he carries), his tempo (how fast he moves after access), and his objectives (what he staged) predict his next actions, so defenders pre-position: patch the exploit class he uses, monitor the paths he moves along, and alert on the actions his objective requires. The doctrine sentence: the hunt's output is both a current incident (if found) and a threat model of the adversary who was not found - capability, tempo, intent.",
              "Exam framing: expect 'how is activity passively discovered in historical data' or 'how are future threat actions detected'. Give the source table (auth, DNS, netflow, proxy, endpoint), run the beacon-hunt trace, and land the doctrine sentence - the hunt yields both an incident and an adversary threat model. DNS remembers longest - when retention is short, hunt where retention is long.",
            ],
            keyTerms: [
              { term: "Threat hunting", definition: "Hypothesis-driven search for undetected adversaries in retained data." },
              { term: "Beaconing", definition: "Machine-regular outbound connections to an actor-controlled host." },
              { term: "Passive discovery", definition: "Finding intrusions in historical logs without alerting the adversary." },
              { term: "Threat model", definition: "The adversary's capability, tempo and intent - the hunt's forward output." },
            ],
            table: {
              caption: "The historical sources and their signature questions.",
              headers: ["Source", "Retention advantage", "What it reveals", "Signature hunt"],
              rows: [
                ["Authentication logs", "Long retention, structured", "Dormant accounts, off-hours, travel", "Accounts that woke after months"],
                ["DNS logs", "Longest retention of all", "Beacon domains, DGAs, new registrations", "Registration-age vs first-contact"],
                ["Netflow", "Compact, complete", "Beacon intervals, volume spikes", "Machine-regular intervals"],
                ["Proxy logs", "URL and UA detail", "Rare user agents, uncategorized sites", "One-off user agents on repeat"],
                ["Endpoint telemetry", "Process and file truth", "Persistence, staging, tooling", "Signed-binary abuse patterns"],
              ],
            },
            bullets: [
              "Passive discovery: hunt yesterday's attacker in data already held - no alerting touches.",
              "Auth logs: dormant accounts that woke, impossible travel, off-hours clusters.",
              "DNS is the longest-retained record - beacon domains and registration-age checks live here.",
              "Netflow exposes machine-regular intervals: jittered beacons around a fixed period.",
              "Worked hunt: 300-second beacon -> 11-day-old domain -> dormant contractor credential.",
              "Forward output: capability (tools), tempo (speed), intent (objectives) - pre-position defences.",
            ],
            diagram: {
              kind: "fork",
              title: "The hunt's two outputs",
              caption: "Every hunt ends in one of two ways - and both produce defensive value.",
              start: "Historical data hunt",
              branches: [
                { label: "Intrusion found", outcome: "respond: scope, contain, evict - the timeline is already built", good: false },
                { label: "No intrusion found", outcome: "model the adversary anyway: capability, tempo, intent - pre-position defences", good: true },
              ],
            },
            callout: {
              type: "tip",
              title: "DNS remembers longest",
              body: "Log rotation destroys most evidence in weeks, but DNS records are compact and retained longest - which makes registration-age checks ('how old was the domain at first contact?') the highest-yield hunt in the repertoire. Say it in the exam: when retention is short, hunt where retention is long.",
            },
            examQuestions: [
              {
                q: "Explain passively discovering adversary activity in historical data and logs: the major sources with their signature hunts, a worked beacon-hunting trace, and how the same evidence predicts future threat actions and capabilities.",
                marks: 14,
                outline: [
                  "Passive discovery: hunt retained data without alerting the adversary",
                  "Auth logs: dormant accounts waking, impossible travel, off-hours",
                  "DNS: longest retention - beacon domains, registration-age checks",
                  "Netflow: machine-regular intervals - jittered beacons around a fixed period",
                  "Proxy: rare user agents on uncategorized destinations",
                  "Worked hunt: 300s beacon -> 11-day-old domain -> dormant contractor credential",
                  "Forward output: capability, tempo, intent - patch the class, watch the paths, alert the objective",
                ],
              },
              {
                q: "How does a completed hunt with no findings still improve security?",
                marks: 7,
                outline: [

                  "The hypothesis test hardens detection rules anyway",

                  "Adversary threat model built: capability, tempo, intent",

                  "Defences pre-position for the actions the model predicts",

                  "The hunt validates retention and telemetry coverage gaps",

                  "Documented absence is evidence for future scope decisions",

                ],              },
            ],
          },
          {
            number: "4.8",
            title: "Denying, delaying and degrading - and the indicator discipline",
            body: [
              "The syllabus's final cluster is the active-defence playbook. Denying access to threats: removing the adversary's entry options - patching the exploit classes he uses, disabling unused services, MFA on remote access, geo/ASN blocks on his infrastructure. Delaying and degrading adversary tactics and malware: making each step expensive - layered authentication that forces re-phishing, application allow-lists that force tool rebuilds, network segmentation that turns one foothold into many breaches, tainting and deception (honeytokens, fake shares) that poison his intelligence. The design sentence: the goal is not a perfectly hardened network but an uneconomical one - the actor's cost per metre exceeds his expected gain.",
              "A worked defence trace shows deny and degrade cooperating. An actor's pattern from the hunt: phishes VPN credentials, moves laterally over SMB, stages into a file share. Deny: MFA on VPN kills the phished-credential path; SMB signing and segmentation raise lateral cost. Degrade: canary files in the share alert on touch before exfiltration completes; decoy credentials in memory (honeytokens) betray any reuse. The actor now must re-tool at every step - and re-tooling is where defenders detect: forced improvisation leaves fresh artefacts. Degradation is not delay for its own sake; it is detection generation.",
              "The identifying-intrusion-patterns-and-key-indicators half is the analytic bookkeeping that makes the playbook durable. Patterns: repeated stage sequences across incidents (phish -> VPN -> SMB -> share) become standing detections. Indicators: atomic (IP, domain, hash), computed (regex, JA3 hashes) and behavioural (beacon period, staging-then-exfil volume shape) - each with a lifespan and an owner, written into detection and shared outward. The discipline sentence: indicators decay; patterns and behaviours persist - build detections on behaviour first, indicators second.",
              "Exam framing: expect 'how are threats denied, delayed and degraded' or 'what are intrusion indicators'. Give the deny catalogue and the degrade toolkit, run the phish-to-share defence trace, and close with the indicator taxonomy (atomic, computed, behavioural) and the decay sentence - behaviour persists, indicators decay. Degradation manufactures detections - forced re-tooling leaves fresh artefacts at every blocked step. Behavioural indicators outlive atomic ones - beacons and staging shapes survive infrastructure rotation.",
            ],
            keyTerms: [
              { term: "Deny", definition: "Removing entry options: patches, MFA, service disabling, infrastructure blocks." },
              { term: "Degrade", definition: "Raising attacker cost per step: segmentation, allow-lists, forced re-tooling." },
              { term: "Honeytoken", definition: "Decoy data (credentials, files) whose use is itself the alert." },
              { term: "Atomic indicator", definition: "A simple artefact - IP, domain, hash - with a short lifespan." },
              { term: "Behavioural indicator", definition: "A pattern (beacon period, staging shape) that survives indicator churn." },
            ],
            table: {
              caption: "The indicator taxonomy.",
              headers: ["Type", "Examples", "Lifespan", "Best use"],
              rows: [
                ["Atomic", "IPs, domains, file hashes", "Short - infrastructure rotates", "Blocking and immediate alerting"],
                ["Computed", "Regexes, JA3 TLS fingerprints, YARA rules", "Medium", "Detection content at scale"],
                ["Behavioural", "Beacon periods, staging-then-exfil shapes", "Long", "Hunt hypotheses and analytics"],
              ],
            },
            bullets: [
              "Deny: patch the used classes, disable unused services, MFA remote access, block actor ASN.",
              "Degrade: segmentation, allow-lists, layered auth - make each metre expensive.",
              "Deceive: canaries and honeytokens turn adversary touch into instant alert.",
              "Forced re-tooling is detection generation - degradation manufactures fresh artefacts.",
              "Patterns: repeated stage sequences (phish -> VPN -> SMB -> share) become standing detections.",
              "Indicators: atomic, computed, behavioural - build on behaviour first, indicators decay.",
            ],
            diagram: {
              kind: "compare",
              title: "Deny vs degrade",
              caption: "Two doctrines, one goal - an uneconomical target.",
              left: {
                heading: "Deny (remove options)",
                items: [
                  "Patch exploit classes the actor carries",
                  "MFA on every remote path",
                  "Disable unused services and ports",
                  "Block known actor infrastructure",
                ],
              },
              right: {
                heading: "Degrade (raise cost per metre)",
                items: [
                  "Segmentation - one foothold becomes many breaches",
                  "Application allow-lists force tool rebuilds",
                  "Layered auth forces re-phishing",
                  "Canaries and honeytokens generate detection",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "Uneconomical, not impenetrable",
              body: "The mature sentence: 'the goal is not an impenetrable network but an uneconomical one - attacker cost per metre exceeds expected gain.' Then connect degrade to detect: forced re-tooling leaves fresh artefacts, so degradation is detection generation. That pairing is the section's highest-value insight.",
            },
            examQuestions: [
              {
                q: "Explain denying access to threats and delaying/degrading adversary tactics and malware, with a worked defence trace against a phish-to-share intrusion pattern, and describe the intrusion indicator taxonomy with the decay rule.",
                marks: 14,
                outline: [
                  "Deny: patch used classes, MFA, disable services, block actor infrastructure",
                  "Degrade: segmentation, allow-lists, layered authentication",
                  "Deceive: canary files alert on touch; honeytokens betray reuse",
                  "Worked trace: MFA kills phished VPN path; SMB segmentation raises lateral cost",
                  "Canaries in the share alert before exfiltration completes",
                  "Patterns: repeated stage sequences become standing detections",
                  "Indicators: atomic (short), computed (medium), behavioural (long) - behaviour persists",
                ],
              },
              {
                q: "Why is 'degradation' described as detection generation rather than mere delay?",
                marks: 7,
                outline: [

                  "Blocked or costly steps force the actor to improvise",

                  "Improvised tooling and behaviour leave fresh, unpractised artefacts",

                  "Each forced change is a new detection opportunity",

                  "Practised tradecraft is quiet; forced tradecraft is noisy",

                  "Canaries convert the adversary's every step into an alert",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "Digital Forensic Investigation - Evidence, Tools and Procedure",
      summary:
        "Unit V is the forensic turn promised by the subject's title: what digital forensics is and the mindset that separates proving from stopping, the nature of digital evidence and the law that admits it - volatility, admissibility tests and the electronic-records certificate - the acquisition pipeline with write blockers, imaging formats and hash verification, the toolkits from EnCase and FTK to Autopsy, Volatility and Wireshark, disk and file-system recovery from $MFT records through slack space and carving, network forensics across packets, flows and correlated logs, mobile extraction levels and cloud legal process, and the forensic report as it faces cross-examination.",
      chapter: {
        number: "05",
        title: "Digital Forensics - From Evidence to Expert Witness",
        intro:
          "Unit V covers the definition and scope of digital forensics and the forensic mindset, the properties of digital evidence and its admissibility with the chain of custody and the electronic-records certificate, the forensic process - order of volatility, write blockers, imaging formats, hash verification - the major toolkits and the branches they serve, disk and file-system forensics with deleted-file recovery, slack space, Windows artefacts and carving, network forensics with full packet capture, flows and log correlation, mobile extraction levels and the challenges of cloud forensics, and the structure of the forensic report with expert testimony and reproducibility.",
        inOneBreath:
          "Every contact leaves a byte-trace; forensics preserves it provably. Evidence is engineered into admissibility - volatility order, write blockers, hashes at every transfer, the custody log, the certificate. Image once, hash always, analyse only verified copies. Tools name the artefact; the analyst makes the finding. Deletion clears pointers, not clusters - slack and unallocated space are the recovery ground. The report separates fact from interpretation; testimony defends competence, method and chain; each cross-examination challenge feeds back into the next case's checklist.",
        sections: [
          {
            number: "5.1",
            title: "Digital forensics - definition, scope and the forensic mindset",
            body: [
              "Digital forensics is the application of forensic science to digital artefacts: the identification, preservation, examination, analysis and presentation of electronically stored information so that a court - or an incident reviewer - can reconstruct what happened, when, how and often who. The discipline rests on one transfer from physical crime scenes: Locard's exchange principle - every contact leaves a trace - translated byte-for-byte. A phishing mail leaves header traces on servers, a URL trace in proxy logs, a process trace in memory and a file trace on disk. The investigator's job is to recognise those traces, preserve them provably unaltered, and interpret them into a defensible narrative.",
              "A concrete case shows the scale. A company reports a fraud of Rs 18 lakh executed through a compromised mail account. The investigation gathers a 512 GB laptop disk imaged to one master copy and one working copy, 2.1 GB of RAM captured live, 47 GB of mail-server logs for the 30-day window, and a 3.4 GB packet capture from the perimeter. Hashing each artefact with SHA-256 at acquisition gives every item a tamper-evident identity - the 512 GB image hashes in roughly 11 minutes at 780 MB/s - and the four sources later corroborate one timeline: phish clicked 10:42, mailbox rules created 10:47, payment approval 11:15.",
              "The scope spans five branches the exam likes named. Disk and file-system forensics recovers files, timestamps and deleted data from storage media. Network forensics reconstructs sessions from packets, flows and logs. Memory forensics reads volatile RAM for running processes, injected code and keys. Mobile forensics extracts app data, messages and location from phones. Cloud forensics works through provider APIs, snapshots and legal process. All five share one method - preserve first, analyse second, document always - and differ in the artefacts and tools each handles (5.4 surveys the toolkits, 5.5-5.7 the branches in depth).",
              "Exam framing: expect 'define digital forensics and discuss its scope and objectives' or 'how does digital forensics differ from ordinary incident handling'. Answer with the definition, Locard's principle in its digital form, the five branches with one native artefact each, and the three qualities that make findings usable: forensically sound (the original unaltered), reproducible (a second analyst reaches the same result) and admissible (collected under the rules of evidence, 5.2). Close with the mindset line - the responder stops what is happening; the investigator proves what happened.",
            ],
            keyTerms: [
              { term: "Digital forensics", definition: "Identification, preservation, examination, analysis and presentation of digital evidence to evidentiary standards." },
              { term: "Locard's exchange principle", definition: "Every contact leaves a trace - digitally, every interaction leaves artefacts on servers, logs, memory and disk." },
              { term: "Forensic soundness", definition: "The property that collection and analysis altered the evidence as little as possible and can prove it." },
              { term: "Artefact", definition: "A system- or user-generated record of activity - a registry key, a log row, a file timestamp." },
              { term: "Reconstruction", definition: "The final narrative built from corroborated artefacts across sources." },
            ],
            table: {
              caption: "The five branches and their native artefacts.",
              headers: ["Branch", "Question it answers", "Native artefacts", "Typical tool family"],
              rows: [
                ["Disk / file-system", "What was stored, created, deleted?", "Files, $MFT, registry, timestamps", "EnCase, FTK, Autopsy"],
                ["Network", "What crossed the wire?", "PCAP, NetFlow, firewall/proxy logs", "Wireshark, Zeek"],
                ["Memory", "What was running, injected, keyed?", "Process lists, sockets, injected code", "Volatility"],
                ["Mobile", "What did the phone do?", "App data, SMS, call logs, location", "Cellebrite, Oxygen"],
                ["Cloud", "What happened off-premises?", "API logs, snapshots, tenant audit trails", "Provider consoles + legal process"],
              ],
            },
            bullets: [
              "Digital forensics = forensic science applied to digital artefacts; Locard's exchange principle holds byte-for-byte.",
              "Every contact leaves a trace: headers, logs, processes, files - the evidence already exists at the scene.",
              "Five branches: disk, network, memory, mobile, cloud - one method, different artefacts and tools.",
              "Findings must be forensically sound, reproducible and admissible - the three usability qualities.",
              "The forensic mindset proves what happened; the incident-response mindset stops it.",
            ],
            diagram: {
              kind: "compare",
              title: "Response mindset vs forensic mindset",
              caption: "Same machine, two jobs - and the moments each one is allowed to touch it.",
              left: {
                heading: "Incident response",
                items: [
                  "Goal: stop the damage and restore service",
                  "Live triage, quick tool runs, minimal notes",
                  "Systems may be rebooted and artefacts altered",
                  "Output: a fix and a root-cause note",
                ],
              },
              right: {
                heading: "Forensic investigation",
                items: [
                  "Goal: prove what happened, to evidentiary standards",
                  "Order of volatility, hash on acquisition, custody log",
                  "Originals sealed; analysis on verified copies only",
                  "Output: a report that survives cross-examination",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The trace already exists",
              body: "Students write 'evidence was gathered'; examiners want 'every contact leaves a trace' up front. The phish, the mailbox rule and the approval click all left artefacts before the investigator arrived - preservation, not discovery, is the first technical act. Say which artefact each action left, and the answer reads like an investigator, not a bystander.",
            },
            examQuestions: [
              {
                q: "Define digital forensics. State Locard's exchange principle in its digital form, name the five branches of the discipline with one native artefact each, and explain the three qualities that make a forensic finding usable.",
                marks: 14,
                outline: [
                  "Definition: identification, preservation, examination, analysis, presentation of digital evidence",
                  "Locard byte-for-byte: every interaction leaves artefacts on servers, logs, memory and disk",
                  "Disk branch: files, $MFT, registry, timestamps",
                  "Network branch: PCAP, NetFlow, firewall and proxy logs",
                  "Memory, mobile and cloud branches with their artefacts",
                  "Usable findings: forensically sound, reproducible, admissible",
                  "Forensic mindset vs response mindset: prove versus stop",
                ],
              },
              {
                q: "A fraud of Rs 18 lakh was executed through a compromised mailbox. List the artefact sources you would acquire and state what each contributes to the timeline.",
                marks: 7,
                outline: [
                  "Laptop disk image: mailbox rules, documents, browser history",
                  "Live RAM capture: running malware, injected processes, keys",
                  "Mail-server logs: access IPs, rule creation, forwarding",
                  "Proxy/firewall logs: the phish click and any callback traffic",
                  "Hash every artefact at acquisition for tamper evidence",
                  "Correlate the timestamps across sources into one timeline",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Digital evidence - nature, admissibility and the chain of custody",
            body: [
              "Digital evidence is information of probative value stored or transmitted in binary form, and it has properties physical evidence lacks: it is volatile (RAM dies in seconds without power), easily altered (one copy command rewrites metadata), invisible (nothing to photograph at the scene) and voluminous (one laptop outruns a truck of paper). The law answers those weaknesses with admissibility tests. Evidence is admitted when it is authentic (provenance provable), reliable (the process that produced it is sound), complete (not cherry-picked - exculpatory artefacts included) and lawful (collected by an authorised process). In India the operating requirement is the electronic-records certificate: section 65B of the Indian Evidence Act - now section 63 of the Bharatiya Sakshya Adhiniyam, 2023 - demands a certificate identifying the record and describing the device and process that produced it; without it, electronic records have historically been excluded.",
              "The chain of custody is the answer to 'how do we know this file is the file?'. A custody log is a table kept from seizure to courtroom: a phone seized at 09:14 on 12 March (device identifiers recorded, SHA-256 of the logical backup computed as a3f1...c9), transported in a sealed bag by constable 2107, received by the lab at 11:03 (hash re-verified, match), imaged at 13:20, working copy issued to the examiner (hash re-verified, match), returned to the sealed evidence locker at 17:45. Every transfer - person, place, purpose, hash check - is one row. In the worked case twelve rows cover five days and two re-verifications; one missing row (an unlogged overnight transport) was enough for the defence to challenge the entire exhibit.",
              "Admissibility is engineered, not argued. The practical engineering: acquire with write blockers, hash at acquisition and at every transfer, keep originals sealed with evidence tape in tamper-evident bags, log every access, photograph the scene before touching hardware, and analyse only verified copies. Courts also test the examiner - qualifications, standard practice, method reproducibility - so the chain has two halves: the documentary chain (the custody log and certificate) and the technical chain (hashes, write blockers, sealed storage). A strong answer names both halves and notes that a hash proves the bits while the log proves the hands.",
              "Exam framing: expect 'what is digital evidence and how is it admitted in court' or 'explain chain of custody with an example'. Write the four properties, the four admissibility tests, the 65B/BSA-63 certificate sentence, and the custody log with its columns. The marks sit in the log - examiners look for person, place, time, purpose and hash-check columns; a worked table earns the application mark that a definition alone never does.",
            ],
            keyTerms: [
              { term: "Digital evidence", definition: "Information of probative value stored or transmitted in binary form." },
              { term: "Admissibility", definition: "The legal tests evidence must pass: authentic, reliable, complete and lawfully collected." },
              { term: "Chain of custody", definition: "The documented, hash-checked record of every person and place that held the evidence." },
              { term: "Electronic-records certificate", definition: "The statutory certificate (65B IEA / section 63 BSA 2023) accompanying electronic records for admission." },
              { term: "Order of volatility", definition: "Collecting what dies first - RAM before disk, disk before backups." },
            ],
            table: {
              caption: "Order of volatility - collect what dies first.",
              headers: ["Rank", "Source", "Lifetime without power / use", "Collection method"],
              rows: [
                ["1", "CPU registers, cache", "nanoseconds", "specialised live tools (rarely used)"],
                ["2", "RAM", "seconds after power loss", "live memory capture (winpmem, dd)"],
                ["3", "Network state, connections", "until the session ends", "PCAP, netstat/arp snapshots"],
                ["4", "Running processes, temp files", "until reboot or deletion", "logged live-response scripts"],
                ["5", "Disk, SSD", "years - but overwritten by use", "write-blocked imaging"],
                ["6", "Backups, archives, cloud copies", "years", "legal process, provider APIs"],
              ],
            },
            bullets: [
              "Digital evidence is volatile, easily altered, invisible and voluminous - hence special legal treatment.",
              "Admissibility tests: authentic, reliable, complete, lawfully collected.",
              "The electronic-records certificate (65B IEA / 63 BSA 2023) anchors admission in India.",
              "Chain of custody = documentary chain (log, certificate) + technical chain (hashes, write blockers, seals).",
              "A hash proves the bits; the custody log proves the hands - both are needed.",
              "Order of volatility: RAM and live state first, disk second, backups last.",
            ],
            diagram: {
              kind: "flow",
              title: "The custody chain, seizure to exhibit",
              caption: "Every hop adds a custody row and a hash check - the chain is only as strong as its weakest row.",
              steps: [
                { label: "Seize", note: "photograph scene, record identifiers" },
                { label: "Transport", note: "sealed bags, custody row per hop" },
                { label: "Acquire", note: "write blocker, image, hash" },
                { label: "Store", note: "evidence locker, tamper-evident seals" },
                { label: "Analyse", note: "verified working copy only" },
                { label: "Present", note: "exhibit + certificate + testimony" },
              ],
            },
            callout: {
              type: "exam",
              title: "The certificate sentence",
              body: "Electronic-evidence answers live or die on the certificate: name the record, the device, the process and the person who produced the output, and state that the computer was operating properly. Write 'section 65B IEA / section 63 BSA 2023' - the examiner wants the statutory anchor, not just the word certificate.",
            },
            examQuestions: [
              {
                q: "What is digital evidence? Explain its special properties, the four admissibility tests, the statutory certificate requirement in India, and demonstrate a chain-of-custody log with a worked seizure-to-courtroom example.",
                marks: 14,
                outline: [
                  "Definition + four properties: volatile, easily altered, invisible, voluminous",
                  "Admissibility tests: authentic, reliable, complete, lawful",
                  "Certificate: 65B IEA / 63 BSA 2023 - record, device, process, operator, proper operation",
                  "Custody log columns: date-time, person, place, purpose, hash check",
                  "Worked rows: seizure 09:14, transport, lab intake 11:03 with hash match, imaging 13:20",
                  "Technical chain: write blockers, sealed storage, verified working copies",
                  "One unlogged transfer is enough for the defence to challenge the exhibit",
                ],
              },
              {
                q: "Construct a chain-of-custody log for a mobile phone seized in a stalking case. Give the columns, five entries and the technical controls that back them.",
                marks: 7,
                outline: [
                  "Columns: date-time, item, action, person, place, purpose, hash check",
                  "Entry 1: seizure with Faraday isolation and device identifiers recorded",
                  "Entry 2: transport in a sealed, numbered evidence bag",
                  "Entry 3: lab intake - seal intact, hash of logical backup re-verified",
                  "Entry 4: extraction performed on the working copy, hash logged",
                  "Entry 5: return to locker; seal renewed and signed",
                ],
              },
              {
                q: "Why does the order of volatility govern evidence collection? Rank four sources from most to least volatile.",
                marks: 7,
                outline: [
                  "What dies first must be collected first or it is lost forever",
                  "RAM: seconds after power loss - live capture first",
                  "Network state: until the session ends - snapshot and capture",
                  "Disk: years, but every use overwrites - image after volatile work",
                  "Backups/cloud copies: years - collected through legal process last",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "The forensic process - acquisition, imaging and hash verification",
            body: [
              "The forensic process is a fixed pipeline - identify, preserve, acquire, analyse, report - and acquisition is its technical heart. Preservation starts with the order of volatility (5.2): live memory and network state first, then powered-down disk imaging through a write blocker - a hardware device that passes reads and refuses writes, guaranteeing the original cannot change during imaging. Acquisition produces an image, a bit-for-bit copy of every sector including deleted and slack regions, in raw formats (.dd/.img) or forensic containers (EnCase E01, AFF4) that embed case metadata and integrity digests. Logical copies - files and folders only - are a fallback when physical imaging is impossible (encrypted phones, live servers) and are labelled as such because they miss unallocated space.",
              "The arithmetic of imaging is a favourite short question. A 1 TB SATA disk at 150 MB/s through a write blocker images in roughly 1.9 hours; modern NVMe-backed hardware at 400 MB/s finishes in about 45 minutes. A raw image of 1 TB consumes 1 TB of storage; E01 compresses sectors and embeds metadata, typically 60-70 percent of source size. Verification: SHA-256 of source and image is computed at acquisition - 1 TB hashes in about 45 minutes at 400 MB/s - and the two digests must match exactly; a one-bit difference fails verification and the image is re-acquired. Every later working copy is re-hashed to prove it is still the image it claims to be.",
              "Hashing is the integrity backbone: MD5 survives in legacy tooling but SHA-256 is the default since MD5's known collisions destroyed its evidentiary weight. The discipline that follows: image once, verify, seal the original, and analyse only on verified copies - ideally on verified clones, so even the working image stays sealed. Dual-control acquisition (two officers present, both signing the log) and continuous audit trails close the human gaps that hashes cannot see - a hash proves the bits; the custody log proves the hands.",
              "Exam framing: expect 'explain the forensic acquisition process with formats and verification' or 'what is a write blocker and why is it essential'. Define imaging, contrast raw and E01, state the verification arithmetic with one worked number, and draw the pipeline. Close with the one-line rule examiners reward: image once, hash always, analyse only copies.",
            ],
            keyTerms: [
              { term: "Write blocker", definition: "Hardware between source and workstation that permits reads and blocks all writes to the original." },
              { term: "Forensic image", definition: "A bit-for-bit copy of every sector, including deleted and slack regions." },
              { term: "Raw vs E01", definition: "Raw (.dd) stores plain sectors; E01/AFF4 containers embed metadata and integrity digests." },
              { term: "Verification hash", definition: "SHA-256 computed on source and image; an exact match proves the copy is complete and unaltered." },
              { term: "Logical acquisition", definition: "File-and-folder-level copy that misses unallocated space - used when physical imaging is impossible." },
            ],
            codeExample: {
              language: "python",
              caption: "hash_verify.py - compute and compare the digests that prove an image",
              code: `import hashlib

def sha256_of(path, chunk=1 << 20):
    h = hashlib.sha256()
    with open(path, "rb") as f:
        while True:
            block = f.read(chunk)
            if not block:
                break
            h.update(block)
    return h.hexdigest()

original = sha256_of("evidence_00.dd")
working = sha256_of("working_copy.dd")
print("original :", original)
print("working  :", working)
print("VERIFIED" if original == working else "FAIL - re-acquire")`,
            },
            bullets: [
              "Pipeline: identify -> preserve -> acquire -> analyse -> report; acquisition is the technical heart.",
              "Write blocker: reads pass, writes are refused - the original is physically unalterable.",
              "Raw images store plain sectors; E01/AFF4 embed metadata and digests and compress 30-40 percent.",
              "Verification: SHA-256 of source and image must match exactly; one bit off means re-acquire.",
              "MD5 is legacy - its collisions cost it evidentiary weight; SHA-256 is the default.",
              "Image once, hash always, analyse only verified copies - the rule that closes every answer.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The acquisition pipeline",
              caption: "From powered-down source to sealed original and verified working copy.",
              stages: [
                { label: "Decide", note: "live-capture RAM first, then power down" },
                { label: "Write-block", note: "attach hardware blocker" },
                { label: "Image", note: "raw .dd or E01 container" },
                { label: "Hash", note: "SHA-256 source and image" },
                { label: "Verify", note: "digests must match exactly" },
                { label: "Seal & issue", note: "original sealed; working copy logged" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never analyse the original",
              body: "Every boot of an original disk alters it - NTFS updates access times, Windows rewrites registry hives. One unguarded boot can destroy the timeline the whole case depends on. Write blocker for imaging, sealed storage after, verified copies for analysis - no exceptions, and say so in the report.",
            },
            examQuestions: [
              {
                q: "Explain the forensic acquisition process end to end: the pipeline stages, write blockers, raw versus E01 formats, and hash verification with the arithmetic for a 1 TB source.",
                marks: 14,
                outline: [
                  "Pipeline: identify -> preserve -> acquire -> analyse -> report",
                  "Order of volatility inside preservation: RAM before disk",
                  "Write blocker: passes reads, refuses writes - original unalterable",
                  "Raw image: plain sectors, size equal to source; E01: metadata + digests, 60-70 percent",
                  "1 TB at 400 MB/s images in about 45 minutes; hashing takes a similar order",
                  "Verification: SHA-256 source vs image, exact match or re-acquire",
                  "Close: image once, hash always, analyse only copies",
                ],
              },
              {
                q: "What is a write blocker, what guarantees does it give, and why is a software-only approach weaker?",
                marks: 7,
                outline: [
                  "Hardware device between source and workstation; reads pass, writes blocked",
                  "Guarantee: the original cannot change during imaging, even on tool error",
                  "Software blockers depend on the host OS behaving - drivers and automount can write",
                  "Courts prefer hardware blockers as standard practice",
                  "Pair with hash verification and the custody log for full integrity",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Forensic toolkits - what each tool is for",
            body: [
              "Tool fluency is examinable: the examiner names a scenario and wants the right toolkit. EnCase (OpenText) and FTK (Exterro) are commercial end-to-end suites - imaging, processing, timeline analysis, bookmarking and courtroom report generation; FTK is known for indexing and deduplication speed, EnCase for enScript automation and its long courtroom record. Autopsy with The Sleuth Kit is the open-source workhorse: TSK supplies the file-system layer (NTFS, ext4 parsers, deleted-file recovery), Autopsy the GUI, keyword search and timeline views. Volatility is the memory-forensics standard - process lists, sockets, injected code and credential carving from a RAM image.",
              "The specialist bench completes the shelf. Wireshark and Zeek dissect PCAPs and generate flow logs (network branch). Cellebrite UFED and Oxygen Forensic lead mobile extraction and app-data parsing. ExifTool reads metadata embedded in images and documents. Hashcat performs password recovery for protected artefacts, and plaso/log2timeline builds super-timelines that merge disk, registry, log and memory artefacts into one chronological table. In a worked memory case: Volatility's pslist shows 143 processes, psxview reveals 4 hidden ones, malfind flags injected code in process 2812, and the sockets plugin ties that process to the 02:14 connection to the C2 IP already seen in the perimeter PCAP - four plugins, one attribution.",
              "Tools prove integrity and method, not truth. The examiner-facing framing states the tool, the version, the command or wizard step and the artefact it produced - 'Volatility 2.6, malfind plugin, on image with hash 4e2b...' - because reproducibility is expressed through versions and hashes. Tool output also needs interpretation: malfind flags suspicious memory pages, not guilt; a flagged page becomes a finding only after network or disk artefacts corroborate it. The report discipline of 5.8 exists so that every tool statement can be re-run by a second analyst.",
              "Exam framing: expect 'list and explain digital forensic tools' or a scenario match - 'given X, which tool and why'. Answer with the two commercial suites, the open-source pair, the specialists by branch, and one worked chain showing two tools corroborating the same actor. Name tool, version and artefact each time.",
            ],
            keyTerms: [
              { term: "EnCase / FTK", definition: "Commercial end-to-end suites: imaging, processing, timelines, bookmarks, courtroom reports." },
              { term: "Autopsy / The Sleuth Kit", definition: "The open-source pair: TSK parses file systems; Autopsy adds GUI, search and timelines." },
              { term: "Volatility", definition: "Memory-forensics framework: processes, sockets, injections, credentials from RAM images." },
              { term: "Super-timeline", definition: "plaso/log2timeline output merging artefacts from many sources into one chronology." },
              { term: "Reproducibility", definition: "Stating tool, version and artefact so a second analyst can re-run the analysis." },
            ],
            table: {
              caption: "The forensic shelf - tool by branch and strength.",
              headers: ["Tool", "Branch", "License", "Signature strength"],
              rows: [
                ["EnCase (OpenText)", "disk / all", "commercial", "end-to-end processing plus courtroom reporting"],
                ["FTK (Exterro)", "disk", "commercial", "indexing, deduplication, e-mail carving"],
                ["Autopsy + TSK", "disk", "open source", "file-system parsing, deleted-file recovery, keyword search"],
                ["Volatility", "memory", "open source", "process, socket and injection analysis of RAM images"],
                ["Wireshark / Zeek", "network", "open source", "PCAP dissection and flow generation"],
                ["Cellebrite UFED", "mobile", "commercial", "logical/physical extraction and app-data parsing"],
                ["plaso / log2timeline", "all", "open source", "super-timelines across artefact sources"],
              ],
            },
            bullets: [
              "End-to-end suites: EnCase and FTK - imaging to courtroom report in one product.",
              "Open-source pair: TSK for file systems, Autopsy for GUI, search and timelines.",
              "Volatility owns memory: pslist, psxview, malfind, sockets - one RAM image, many plugins.",
              "Specialists: Wireshark/Zeek (network), Cellebrite (mobile), ExifTool (metadata), Hashcat (passwords).",
              "plaso builds super-timelines that merge disk, registry, logs and memory into one chronology.",
              "Every tool statement in a report carries tool, version and artefact - reproducibility by construction.",
            ],
            diagram: {
              kind: "fork",
              title: "Which tool when - the artefact decides",
              caption: "Name the artefact in hand first; the tool family follows from it.",
              start: "Artefact in hand?",
              branches: [
                { label: "RAM image", outcome: "Volatility - processes, sockets, injected code, keys", good: true },
                { label: "Disk / SSD", outcome: "EnCase, FTK or Autopsy - file systems, deleted data, timelines", good: true },
                { label: "Network capture", outcome: "Wireshark / Zeek - sessions, hosts, payloads", good: true },
                { label: "Locked phone", outcome: "Cellebrite extraction levels, then app parsing", good: true },
                { label: "Unlogged, unhashed copy", outcome: "no tool can restore integrity - re-acquire properly", good: false },
              ],
            },
            callout: {
              type: "tip",
              title: "Name tool, version, artefact",
              body: "In answers and reports alike, 'malfind found injected code' is weak; 'Volatility 2.6 malfind on image SHA-256 4e2b..., process 2812, 4096 suspicious pages' is strong. The second form is reproducible and admissible - the first is a rumour about a program.",
            },
            examQuestions: [
              {
                q: "Name the major digital forensic toolkits, classify them by evidence branch, give each one's signature strength, and match four investigation scenarios to the right tools.",
                marks: 14,
                outline: [
                  "EnCase and FTK: commercial end-to-end suites - imaging to courtroom report",
                  "FTK strength: indexing and deduplication; EnCase strength: enScript automation",
                  "Autopsy + TSK: open-source file-system layer plus GUI, search, timelines",
                  "Volatility: memory branch - pslist, psxview, malfind, sockets",
                  "Wireshark/Zeek for network, Cellebrite for mobile, ExifTool for metadata",
                  "plaso super-timelines merge artefact sources chronologically",
                  "Scenarios: RAM image -> Volatility; deleted file -> Autopsy; C2 hunt -> Wireshark; phone -> Cellebrite",
                ],
              },
              {
                q: "A RAM capture and a perimeter PCAP both exist for a suspected breach. Show how Volatility and Wireshark corroborate each other to attribute a C2 channel.",
                marks: 7,
                outline: [
                  "Volatility pslist/psxview: process inventory and hidden processes",
                  "malfind: injected code in a suspicious process",
                  "sockets plugin: outbound connection at 02:14 to the C2 IP",
                  "Wireshark: filter the C2 IP, extract the session and payload objects",
                  "Hash the exported objects; match timestamps across both artefacts",
                  "Attribution stated as artefact-backed finding with tool, version and hash",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Disk and file-system forensics - deleted data, slack and artefacts",
            body: [
              "File systems keep data and metadata apart, and deletion attacks only metadata. In NTFS, deleting a file marks its $MFT record as unused - the index entry - while the data clusters remain untouched until overwritten; in the ext family, the inode is released and the block bitmap freed, again leaving content in place. Recovery is therefore pointer surgery: find the orphaned metadata, re-read the clusters, rebuild the file. Autopsy and The Sleuth Kit expose the layers explicitly - file-name, metadata, content - so the examiner can walk deleted, unallocated and slack regions deliberately instead of hoping a 'recover files' button finds the one that matters.",
              "Slack arithmetic is a classic numerical. NTFS with 4 KB clusters: a 1,204-byte file occupies one cluster (4,096 bytes), leaving 2,892 bytes of slack that can hold fragments of an older, longer file that previously used that cluster. A deleted 1.2 MB document spread over 300 clusters leaves its content recoverable until those clusters are reused. Timeline artefacts anchor behaviour: $MFT records carry created, modified, accessed and entry-modified times ($STANDARD_INFORMATION and $FILE_NAME attributes), the USN journal logs change events, and registry keys such as UserAssist and ShellBags record program runs and folder traversals. In the worked case, the recovered document's created time read 03:47 local - 40 minutes after the employee's badge-out - which placed the copy after hours.",
              "Beyond files, the artefact layer is where intent shows: browser history and cache, USBSTOR registry keys with device serials, Windows prefetch entries for executed programs, event logs, and the traces left by wiping tools themselves. Carving recovers files from unallocated space without any metadata by scanning for signatures - JPEG begins FF D8 FF and ends FF D9, PDF begins %PDF, ZIP begins PK - which is how fragmented or metadata-stripped files come back. Carved evidence is reported with its carve point and completeness, because fragmentation can produce partial objects.",
              "Exam framing: expect 'how is a deleted file recovered', 'explain slack space with an example', or 'list the Windows artefacts an examiner collects'. Give the metadata-versus-data mechanism, the cluster arithmetic with one number, two artefact families with what they prove, and the carving idea with the JPEG signatures. Close on the rule: deletion clears pointers, not bytes.",
            ],
            keyTerms: [
              { term: "$MFT", definition: "NTFS metadata database - one record per file with timestamps and cluster lists; deletion marks it unused." },
              { term: "Slack space", definition: "The gap between a file's end and its last cluster's end - often holds fragments of older files." },
              { term: "Unallocated space", definition: "Clusters not currently assigned to any file - the carving ground." },
              { term: "Carving", definition: "Signature-based recovery of files from raw space without metadata (JPEG FF D8 FF ... FF D9)." },
              { term: "USN journal", definition: "NTFS change journal logging file create, modify, rename and delete events." },
            ],
            codeExample: {
              language: "python",
              caption: "carve_jpeg.py - signature carving from unallocated space",
              code: `import sys

data = open("unallocated.bin", "rb").read()
START, END = b"\xff\xd8\xff", b"\xff\xd9"
count, pos = 0, 0

while True:
    s = data.find(START, pos)
    if s < 0:
        break
    e = data.find(END, s)
    if e < 0:
        break
    count += 1
    out = "carved_" + format(count, "03d") + ".jpg"
    open(out, "wb").write(data[s:e + 2])
    print(out, e + 2 - s, "bytes")
    pos = e + 2

print("carved", count, "jpeg objects")`,
            },
            bullets: [
              "Deletion clears metadata, not data: $MFT marked unused, clusters untouched until reuse.",
              "Recovery = re-link orphaned metadata to clusters before overwriting destroys them.",
              "Slack arithmetic: 1,204-byte file in a 4 KB cluster leaves 2,892 bytes of slack.",
              "Timeline artefacts: $MFT timestamps, USN journal, UserAssist, ShellBags, prefetch, USBSTOR.",
              "Carving scans unallocated space for signatures - JPEG, PDF, ZIP - with no metadata needed.",
              "Report carved objects with carve point and completeness - fragmentation yields partials.",
            ],
            diagram: {
              kind: "layers",
              title: "The NTFS artefact stack, top to bottom",
              caption: "Deletion hits the metadata layer first; the content and slack layers below survive it.",
              layers: [
                { label: "File-name layer", note: "directory index entries - what users see" },
                { label: "Metadata layer ($MFT)", note: "records, timestamps, cluster lists - deletion marks records unused" },
                { label: "Content layer", note: "clusters holding file bytes - untouched by deletion" },
                { label: "Slack + unallocated", note: "old fragments and orphaned clusters - the carving ground" },
              ],
            },
            callout: {
              type: "exam",
              title: "Deletion clears pointers, not bytes",
              body: "The one-liner examiners want: deletion removes the index entry, not the data; recovery re-links orphaned metadata to clusters before overwriting. Then show the 4 KB / 2,892-byte slack number - the arithmetic proves you can compute, not just narrate.",
            },
            examQuestions: [
              {
                q: "Explain how a deleted file is recovered from an NTFS volume. Include the metadata-vs-data mechanism, slack-space arithmetic with a worked number, and the Windows artefacts that reconstruct user activity.",
                marks: 14,
                outline: [
                  "NTFS deletion: $MFT record marked unused; data clusters untouched until reuse",
                  "Recovery: locate orphaned record, re-read clusters, rebuild the file",
                  "Slack: 1,204-byte file in a 4 KB cluster leaves 2,892 bytes - fragments of older files",
                  "1.2 MB deleted document = 300 clusters recoverable until reused",
                  "Timestamps: $STANDARD_INFORMATION and $FILE_NAME; USN journal for change events",
                  "Artefacts: UserAssist, ShellBags, prefetch, USBSTOR, browser history",
                  "Carving: signature scan of unallocated space (JPEG FF D8 FF ... FF D9)",
                ],
              },
              {
                q: "Explain slack space and file carving with one numerical example of each.",
                marks: 7,
                outline: [
                  "Slack: cluster allocated but file shorter - 4,096 - 1,204 = 2,892 bytes held",
                  "Slack can contain fragments of an older, longer file from the same cluster",
                  "Carving: recover files from unallocated space by signature scan, no metadata",
                  "JPEG start FF D8 FF, end FF D9; scan, extract, report carve point",
                  "Fragmentation may yield partial carved objects - state completeness",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Network forensics - packets, flows and log correlation",
            body: [
              "Network forensics reconstructs what crossed the wire after the fact, from three evidence classes. Full packet capture (PCAP) records every byte but is expensive - a 1 Gbps line running at 800 Mbps sustained produces about 8.6 TB per day, so capture is targeted at perimeters and hot segments. Flow records (NetFlow/IPFIX) summarise sessions - source, destination, ports, bytes, timestamps - at roughly 0.01 percent of capture volume, ideal for retrospective hunting across weeks. Device and application logs (firewall, proxy, DNS, DHCP, VPN, mail gateway) carry the human-scale events with identity attached. The analyst's craft is moving between the three: flows to find the session, PCAP for the payload, logs for the identity.",
              "Correlation is the examinable skill. A worked trace: finance reports fraud at 09:20; the mail gateway shows the phish delivered at 10:42 the prior day to user r.mehta; the proxy shows the link clicked at 10:44 from internal host 10.4.7.21; DHCP ties 10.4.7.21 to r.mehta's laptop at 10:39; the VPN log shows a second session at 02:14 from IP 203.0.113.87 authenticated as r.mehta; the firewall shows that session reaching the payment gateway. Five sources, one sentence: credentials phished at 10:44 were replayed at 02:14 from a different network. NTP time sync across devices is the silent prerequisite - a 90-second skew between mail and firewall logs can reorder the whole story, so the analyst records each source's clock offset before narrating.",
              "Method and law frame the work. Method: normalise logs to one clock (UTC), index them, then pivot on five standard pivots - IP address, user account, host name, file hash, domain. Privacy and scope: workplace monitoring is lawful with authorisation and the IT Act's framework governs interception by service providers, but the investigation still applies necessity and proportionality - collect what the case needs, disclose only to authorised persons. Retention policy completes the design: captures compressed and rotated, flows kept for months, logs per the compliance schedule, because an investigation that starts late inherits whatever retention allowed to survive.",
              "Exam framing: expect 'explain network forensics and its evidence sources' or a correlation scenario with four log extracts. Give the three evidence classes with the volume numbers, the worked correlation chain, the NTP caveat, and the pivot list. The correlation chain - phish, click, DHCP, VPN, payment - is the diagram of this answer.",
            ],
            keyTerms: [
              { term: "Full packet capture", definition: "Every byte on the wire - complete but voluminous (about 8.6 TB/day at 800 Mbps)." },
              { term: "NetFlow / IPFIX", definition: "Session-level summaries - tiny compared to capture, ideal for retrospective hunting." },
              { term: "Log correlation", definition: "Joining device and application logs into one timeline that attributes events." },
              { term: "Clock skew", definition: "Divergent device clocks; NTP sync and recorded offsets keep the timeline honest." },
              { term: "Pivot", definition: "A searchable identifier - IP, user, host, hash, domain - that links artefacts across sources." },
            ],
            codeExample: {
              language: "bash",
              caption: "tshark_min.sh - targeted extraction from a PCAP",
              code: `# who talked to the suspect during the window?
tshark -r perimeter.pcap -Y "ip.addr == 203.0.113.87" \
  -T fields -e frame.time -e ip.src -e ip.dst \
  -e tcp.dstport -e tcp.len | head -20

# what did the infected host fetch?
tshark -r perimeter.pcap -Y "ip.src == 10.4.7.21 && http.request" \
  -T fields -e frame.time -e http.host -e http.request.uri

# export payload objects for hashing
tshark -r perimeter.pcap -Y "ip.src == 10.4.7.21 && http" \
  --export-objects http,exported/`,
            },
            bullets: [
              "Three evidence classes: PCAP (every byte), flows (session summaries), device logs (identity events).",
              "Volume check: 800 Mbps sustained is about 8.6 TB of capture per day - capture is targeted, flows are kept.",
              "Correlation chain: phish mail -> click -> DHCP identity -> VPN replay -> payment gateway.",
              "NTP synchronisation first - a 90-second skew can reorder the narrative.",
              "Five pivots: IP, user, host, hash, domain - most investigations repeat three of them.",
              "Retention policy decides what exists when the investigation finally starts.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Log-to-attribution pipeline",
              caption: "Collect wide, normalise to one clock, correlate on pivots, attribute with artefacts.",
              stages: [
                { label: "Collect", note: "PCAP, flows, firewall/proxy/DHCP/VPN logs" },
                { label: "Normalise", note: "UTC, field mapping, offset check" },
                { label: "Correlate", note: "pivot on IP / user / host / hash / domain" },
                { label: "Attribute", note: "account + device + network location" },
                { label: "Report", note: "timeline + exhibits with hashes" },
              ],
            },
            callout: {
              type: "warning",
              title: "Clock skew reorders truth",
              body: "Check NTP offsets before correlating: a 90-second skew between the mail gateway and the firewall can place the click after the payment. Record each source's offset in the working notes and adjust all timestamps to one clock before narrating the story.",
            },
            examQuestions: [
              {
                q: "Explain network forensics and its three evidence classes with volume numbers, and demonstrate a full correlation chain that attributes a compromised account to a phish and a replay session.",
                marks: 14,
                outline: [
                  "PCAP: every byte, about 8.6 TB/day at 800 Mbps - targeted at perimeters",
                  "Flows (NetFlow/IPFIX): session summaries, about 0.01 percent of capture volume",
                  "Device/application logs: firewall, proxy, DNS, DHCP, VPN, mail - identity attached",
                  "Correlation: phish 10:42 -> click 10:44 from 10.4.7.21 -> DHCP binds host to r.mehta",
                  "VPN replay 02:14 from 203.0.113.87 -> firewall shows payment gateway reach",
                  "NTP sync and offsets recorded before narration - skew caveat",
                  "Method: normalise, index, pivot on IP/user/host/hash/domain",
                ],
              },
              {
                q: "You are given four log extracts (mail gateway, proxy, DHCP, VPN) and asked who clicked the phish and what happened next. Describe your correlation method and the output.",
                marks: 7,
                outline: [
                  "Normalise all four extracts to UTC and check clock offsets",
                  "Find the phish mail time and recipient in the mail log",
                  "Proxy: locate the click from an internal IP just after delivery",
                  "DHCP: bind that internal IP to a named host/user at that time",
                  "VPN: look for later sessions under the same account from new IPs",
                  "Output: one timestamped chain with source log per row",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Mobile and cloud forensics - extraction levels and legal process",
            body: [
              "Mobile forensics is layered by how much of the device the examiner can reach. Manual extraction photographs screens - lowest effort, lowest completeness. Logical extraction uses the device's own backup APIs to hand over files and databases - contacts, SMS, call logs, app containers - and deleted rows often survive inside SQLite write-ahead logs. File-system extraction uses privileged access (agent apps or exploits) to read the entire user partition. Physical extraction images flash memory raw through boot-mode exploits - the deepest level, and on modern phones largely defeated by file-based encryption, which leaves physical images unparseable without the device keys.",
              "A worked extraction: a phone arrives in after-first-unlock (AFU) state, iOS 16, passcode known to the owner. The logical backup returns 18,204 artefacts; the SMS database chat.db plus its -wal companion file recovers 47 deleted messages; the location cache covers nine days; the app containers hold the stalking app's chat cache and a contact named with a coded alias. Before-first-unlock (BFU) versus AFU matters because BFU exposes only encrypted stubs - so examiners manage state and isolation deliberately: Faraday bags, airplane mode, charging management, and the lawful decision whether to keep the device unlocked. The extraction level chosen is stated in the report with its completeness limits.",
              "Cloud forensics moves the crime scene to a provider. Evidence lives in tenant audit logs, mailbox and drive activity, API traces, provider-side snapshots and backups; access runs through legal process - preservation letters first (to stop deletion), then production warrants, and mutual legal assistance for cross-border providers - because the provider, not the investigator, controls the data. The shared-responsibility framing: the tenant can produce its own admin and audit logs immediately; the provider produces infrastructure logs on request. The named challenges: multi-tenancy (whose bytes are whose), provider-side volatility, jurisdiction conflicts, and ephemeral messaging as anti-forensics.",
              "Exam framing: expect 'explain the four levels of mobile extraction', 'challenges of cloud forensics', or an app-fraud scenario. Give the four levels in order with completeness, the BFU/AFU nuance, the SQLite-WAL recovery detail, and the cloud legal-process chain from preservation letter to production. Numbers earn marks: 18,204 artefacts, 47 recovered messages.",
            ],
            keyTerms: [
              { term: "Logical extraction", definition: "Device APIs hand over files and databases - the everyday workhorse level." },
              { term: "Physical extraction", definition: "Raw flash image via boot-mode exploits - deepest, often defeated by file-based encryption." },
              { term: "BFU / AFU", definition: "Before/after first unlock - the state decides what is decryptable on the device." },
              { term: "SQLite WAL recovery", definition: "Deleted rows often survive in write-ahead log files beside the app database." },
              { term: "Preservation letter", definition: "A legal demand that a provider retain data pending further process." },
            ],
            table: {
              caption: "Mobile extraction levels - depth against reach.",
              headers: ["Level", "Access route", "What you get", "Limit / risk"],
              rows: [
                ["Manual", "screen observation", "visible screens only", "misses deleted data; slow"],
                ["Logical", "device backup APIs", "files, databases, app containers", "no unallocated space"],
                ["File-system", "privileged agent or exploit", "entire user partition", "device-specific; may trip flags"],
                ["Physical", "boot-mode flash image", "raw flash incl. deleted regions", "FBE encryption often blocks parsing"],
              ],
            },
            bullets: [
              "Four levels in order: manual, logical, file-system, physical - completeness rises with depth.",
              "AFU vs BFU: the unlock state decides what the device itself can decrypt.",
              "Deleted SMS often recover from chat.db plus its -wal write-ahead file.",
              "State management is evidence work: Faraday bags, airplane mode, charging control.",
              "Cloud evidence: tenant audit logs, API traces, snapshots - reached by legal process, not tools.",
              "Chain: preservation letter -> production warrant -> MLAT for cross-border providers.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Extraction depth pyramid",
              caption: "Depth rises towards the apex; breadth and everyday use live at the base.",
              tiers: [
                { label: "Physical", note: "raw flash - deepest, narrowest applicability" },
                { label: "File-system", note: "full user partition via privileged access" },
                { label: "Logical", note: "backup APIs - the everyday workhorse" },
                { label: "Manual", note: "screen capture - broadest but shallowest" },
              ],
            },
            callout: {
              type: "tip",
              title: "State, then extract",
              body: "Determine BFU/AFU and isolation before choosing a technique: the extraction you can run is decided by the state the phone arrives in. Power and isolation management are evidence-preserving acts - write them into the custody log like any other step.",
            },
            examQuestions: [
              {
                q: "Explain the four levels of mobile extraction with what each yields, and discuss BFU/AFU states, SQLite WAL recovery and the challenges of cloud forensics.",
                marks: 14,
                outline: [
                  "Manual: photographs of screens - lowest completeness",
                  "Logical: backup APIs return files and databases; workhorse level",
                  "File-system: privileged access reads the whole user partition",
                  "Physical: boot-mode flash image - often blocked by file-based encryption",
                  "BFU vs AFU: unlock state decides decryptable content; manage power and isolation",
                  "SQLite WAL: deleted messages survive in -wal files (worked numbers)",
                  "Cloud: legal process chain - preservation letter, warrant, MLAT; multi-tenancy, jurisdiction, ephemeral apps",
                ],
              },
              {
                q: "List the challenges of cloud forensics and describe the legal process for obtaining provider-side evidence.",
                marks: 7,
                outline: [
                  "Multi-tenancy: separating one tenant's bytes and logs",
                  "Provider-side volatility: logs rotate and data can be deleted",
                  "Jurisdiction: provider may be abroad - mutual legal assistance",
                  "Preservation letter first, production warrant next",
                  "Shared responsibility: tenant produces admin logs, provider infrastructure logs",
                  "Ephemeral messaging and anti-forensics reduce recoverable evidence",
                ],
              },
            ],
          },
          {
            number: "5.8",
            title: "From analysis to expert witness - the forensic report and testimony",
            body: [
              "The report is the deliverable that survives in court, and its structure is standard: an identification block (case, exhibit, examiner, hash references), scope and limitations (what was asked, what was excluded), methodology (tools with versions, acquisition and verification steps), findings (each stated and tied to artefacts and exhibits), artefact tables and the timeline, and appendices holding hashes, tool outputs and the custody log. The writing discipline: separate fact from interpretation, qualify uncertainty with 'consistent with' and 'indicative of', and never conclude intent - 'the file was copied at 03:47' is evidence; 'the employee stole it' is the court's job.",
              "A worked structure: a 23-finding case collapses to six exhibits - the phish-mail exhibit (headers plus receipt logs), the credential artefact exhibit, the payment-approval exhibit, the device-timeline exhibit, the network-session exhibit and the custody-chain exhibit. The executive summary runs about 180 words: who was affected, what happened in four sentences, what the evidence shows, and what it does not. Cross-examination attacks three seams: examiner competence (qualifications, training records), method reliability (published process, tool validation - NIST CFTT listings help) and chain integrity (every transfer row, every hash check). The examiner answers as an expert witness - opinion within their expertise - while documents speak as fact.",
              "Reproducibility closes the loop: another examiner given the sealed image, the tool versions and the method notes must reach the same artefacts - which is why the report records versions and hashes at every step. Testimony practice is rehearsed: answer the question asked, correct misstatements immediately, concede unknowns plainly, and keep interpretation inside the evidence. The cycle completes when verdicts and defence challenges feed back into method - each challenge becomes a checklist line for the next acquisition, and the same artefact that won one case teaches the next.",
              "Exam framing: expect 'structure of a forensic report', 'qualities of a good report', or 'role of the expert witness'. Give the report sections in order, the fact-versus-interpretation rule with one example pair, the three cross-examination seams, and the reproducibility loop. The exhibit-collapsing trick - 23 findings to 6 exhibits - is the worked number that makes the answer concrete.",
            ],
            keyTerms: [
              { term: "Forensic report", definition: "The structured deliverable: identification, scope, methodology, findings, timeline, appendices." },
              { term: "Expert witness", definition: "A witness permitted to give opinion evidence within their expertise; documents speak as fact." },
              { term: "Fact vs interpretation", definition: "Bytes and timestamps are fact; 'consistent with' language carries interpretation without overreach." },
              { term: "Exhibit", definition: "A formally presented artefact bundle - mail, artefact table, custody chain - referenced by the report." },
              { term: "Reproducibility", definition: "A second examiner with the image, versions and notes must reach the same artefacts." },
            ],
            table: {
              caption: "Report sections and the questions they must survive.",
              headers: ["Report section", "Purpose", "The question it survives"],
              rows: [
                ["Identification block", "case, exhibit, examiner, hash references", "which bytes are we talking about?"],
                ["Scope and limitations", "what was asked and what was excluded", "why is X not covered?"],
                ["Methodology", "tools, versions, acquisition, verification", "can this be repeated?"],
                ["Findings", "artefact-backed statements", "what does the evidence show?"],
                ["Timeline and artefact tables", "chronology with sources", "when, and in what order?"],
                ["Appendices", "hashes, tool output, custody log", "where is the raw support?"],
              ],
            },
            bullets: [
              "Report order: identification, scope, methodology, findings, timeline, appendices - fixed and examinable.",
              "Fact vs interpretation: 'copied at 03:47' is evidence; 'stole it' is intent and belongs to the court.",
              "Qualify with 'consistent with' / 'indicative of' - precision in language is marks.",
              "Cross-examination seams: competence, method reliability, chain integrity - prepare all three.",
              "Reproducibility: versions and hashes at every step let a second examiner re-run the work.",
              "Verdicts and challenges feed back into method - the courtroom teaches the lab.",
            ],
            diagram: {
              kind: "cycle",
              title: "Evidence to courtroom and back",
              caption: "Each pass through the loop hardens the method - challenges become checklist lines.",
              steps: [
                { label: "Acquire & analyse", note: "hash-verified copies, tool versions logged" },
                { label: "Draft report", note: "findings tied to artefacts and exhibits" },
                { label: "Sworn testimony", note: "expert opinion within expertise" },
                { label: "Cross-examination", note: "competence, method, chain attacked" },
                { label: "Verdict & feedback", note: "challenges become the next checklist" },
              ],
            },
            callout: {
              type: "exam",
              title: "Fact is bytes, intent is the court's",
              body: "The sentence examiners scan for: the report states what the artefacts show and never what the accused intended. Write one fact pair - 'the file was copied at 03:47 (evidence)' versus 'the employee stole it (intent, not ours)' - and the examiner knows you understand the boundary between witness and judge.",
            },
            examQuestions: [
              {
                q: "Describe the structure of a digital forensic report section by section, the fact-versus-interpretation discipline, and the three seams cross-examination attacks.",
                marks: 14,
                outline: [
                  "Identification block: case, exhibit, examiner, hash references",
                  "Scope and limitations: what was asked, what was excluded",
                  "Methodology: tools with versions, acquisition and verification steps",
                  "Findings tied to artefacts; timeline and artefact tables; appendices with hashes and custody log",
                  "Fact vs interpretation: 'copied at 03:47' evidence; intent conclusions excluded",
                  "Three seams: examiner competence, method reliability, chain integrity",
                  "Reproducibility loop: challenges feed back into the next case's checklist",
                ],
              },
              {
                q: "What distinguishes an expert witness from a fact witness, and how should an examiner handle cross-examination on method reliability?",
                marks: 7,
                outline: [
                  "Fact witness reports observations; expert witness may give opinion within expertise",
                  "Method defence: published process, tool validation (NIST CFTT), version records",
                  "Answer the question asked; correct misstatements immediately",
                  "Concede unknowns plainly - credibility outrages defeat exhibits",
                  "Keep every opinion tied to a specific artefact and exhibit",
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
      weightedTopics: [
        { topic: "Forms of cyber crimes and frauds (Unit II catalogue)", weight: "about 14-16 marks", note: "The biggest unit - phishing, malware taxonomy, salami/diddling, financial frauds all recur." },
        { topic: "Classification, definition, target-vs-tool", weight: "about 10-12 marks", note: "Opens most papers - the four-way classification plus IT Act sections." },
        { topic: "Conventional vs cyber crimes + trends", weight: "about 8-10 marks", note: "Six-dimension table and the RaaS/BEC trend cards." },
        { topic: "Digital forensics: evidence, acquisition, tools (Unit V)", weight: "about 10-12 marks", note: "Custody log + certificate, write-blocked imaging arithmetic, tool-branch matching." },
        { topic: "Psychological theories + profiling", weight: "about 8-10 marks", note: "Learning/motivation/personality/intelligence trio and MO-vs-signature." },
        { topic: "Fraud triangle and detection techniques", weight: "about 8-10 marks", note: "Three legs with countermeasures; the four-signal detection stack." },
        { topic: "Impact analysis (individual, corporate, nation)", weight: "about 6-8 marks", note: "Layered impact stacks and the ripple trace." },
        { topic: "IT Act sections + dark figure", weight: "about 6-8 marks", note: "Section table and the floor-not-ceiling argument." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; weekends for attack-chain writing. This subject is chain-examined: practise writing one complete chain (phish to cash-out, kill chain, fraud triangle) per topic rather than re-reading definitions.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - definition and extent", tasks: ["Definition + target-vs-tool table", "Four-way classification with IT Act sections", "India's reporting ladder and institutions", "Conventional-vs-cyber six dimensions", "Trend cards; IT Act section table", "Dark figure arithmetic"] },
        { week: "Week 2", focus: "Unit II - the catalogue (part 1)", tasks: ["Hacking anatomy + hacker types", "DoS classes + mitigation ladder", "Malware family table + cooperative chain", "Salami/diddling SQL trace"] },
        { week: "Week 3", focus: "Unit II - the catalogue (part 2)", tasks: ["Phishing variants + social engineering levers", "Bullying/stalking/defamation cluster + escalation ladder", "Financial frauds by rail + SIM-swap chain", "Steganography layers + steganalysis tells"] },
        { week: "Week 4", focus: "Unit III - minds and impact", tasks: ["Offender map + two-case tempo contrast", "Learning, motivation, personality, intelligence theories", "Profiling pipeline + MO vs signature", "Impact stacks + national ripple"] },
        { week: "Week 5", focus: "Unit IV - modus operandi and intrusion analysis", tasks: ["Four-part MO record + linking rule", "Fraud triangle legs and countermeasures", "Four-signal detection stack", "Intrusion analysis skill stack + pipeline", "Kill chain + courses-of-action rows", "Historical hunting + deny/degrade playbook"] },
        { week: "Week 6", focus: "Unit V forensics + revision", tasks: ["Evidence properties + admissibility + certificate sentence", "Custody log columns + acquisition pipeline with hashes", "Tool-branch table + Volatility/Wireshark worked pair", "Slack arithmetic + carving signatures + artefact list", "Two full past papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is chain-examined: every big answer is a chain (attack steps, fraud legs, kill-chain stages) - draw it first, then narrate it.",
        "Open Unit I answers with the dual-role split (target vs tool) and close them with the dark-figure sentence.",
        "For classification questions, attach IT Act sections to every named offence - 43/65/66 access, 66C/66D fraud, 66E privacy, 66F terrorism, 67 content.",
        "Never quote invented statistics; name institutions (NCRB, IC3, IOCTA, I4C) and describe trends instead.",
        "For theory questions, write the theorist's name (Cressey, Maslow, Bandura, Gottfredson-Hirschi) - attribution earns the definition mark.",
        "Intrusion-analysis answers keep fact and inference visually separated, with confidence labels per step.",
        "The kill-chain answer draws seven stages and then writes the courses-of-action verbs - stages without actions earn half.",
        "Forensic answers open with 'every contact leaves a trace', then show the custody log or the hash-verification arithmetic - definitions alone earn half.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to re-check tables.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rewrite the seven anchor tables (target-vs-tool, classification with sections, DoS classes, malware family, impact stacks, kill-chain courses of action, custody-log columns), re-run the salami SQL, the fraud-triangle legs and the 4 KB slack number once, and write one complete attack chain plus one acquisition pipeline from memory. No new material tonight.",
      ],
      bullets: [
        "Saying hacking is always criminal - unauthorized access is the offence; authorization is the line.",
        "Confusing DoS classes - volumetric vs protocol vs application need different mitigations.",
        "Calling a worm a virus - worms self-propagate without a host or user action.",
        "Mixing up diddling and salami - diddling corrupts input; salami shaves output fractions.",
        "Quoting DMARC as a complete phishing defence - it cannot see inside a real compromised thread.",
        "Saying OTP protects against SIM swap - the number itself is stolen; move to app-based binding.",
        "Conflating MO with signature - MO evolves, signature persists; cases link on signature.",
        "Treating the fraud triangle as psychology only - opportunity is the engineering leg.",
        "Forgetting section 65B certificates in evidence answers - no certificate, no case.",
        "Saying deletion removes the data - it clears the metadata; clusters survive until overwritten.",
        "Analysing the original disk in a procedure answer - write blocker, seal, verified copies only.",
        "Skipping the hash check rows in a custody log - the log proves hands, the hash proves bits.",
        "Describing the kill chain without courses of action - the six verbs are the framework's product.",
        "Writing impact answers that stop at the ransom - the visible loss is the smallest layer.",
        "Claiming steganography is itself an offence - it is charged through the crime it serves.",
      ],
    },
  ],
};
