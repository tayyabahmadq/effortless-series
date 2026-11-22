/**
 * Shared data for the Certifications and Jobs & Internships pages.
 *
 * Every entry links to the official provider/recruiter site — cards open
 * the source in a new tab so listings can never go stale.
 */

export interface Certification {
  n: string;
  p: string;
  cat: "code" | "data" | "cloud" | "net" | "biz";
  url: string;
  d: string;
  bg: string;
  fg: string;
  glyph: string;
  fs?: string;
}

export const CERT_CATEGORIES: { k: Certification["cat"] | "all"; label: string }[] = [
  { k: "all", label: "All 16" },
  { k: "code", label: "Coding" },
  { k: "data", label: "AI & Data" },
  { k: "cloud", label: "Cloud & IT" },
  { k: "net", label: "Networks & Security" },
  { k: "biz", label: "Business & Career" },
];

export const CERTIFICATIONS: Certification[] = [
  { n: "CS50x", p: "Harvard University", cat: "code", url: "https://cs50.harvard.edu/x/", d: "Harvard's legendary intro to CS — C, Python, SQL and web. Free CS50 certificate on completion.", bg: "#a51c30", fg: "#ffffff", glyph: "CS50", fs: "9px" },
  { n: "freeCodeCamp", p: "freeCodeCamp.org", cat: "code", url: "https://www.freecodecamp.org/", d: "Project-based certifications in web design, JavaScript, data and ML — completely free, forever.", bg: "#0a0a23", fg: "#ffffff", glyph: "fCC" },
  { n: "Skills for All", p: "Cisco Networking Academy", cat: "net", url: "https://skillsforall.com/", d: "Free networking, Python and cybersecurity courses with completion badges from Cisco.", bg: "#049fd9", fg: "#ffffff", glyph: "cisco" },
  { n: "IBM SkillsBuild", p: "IBM", cat: "data", url: "https://skillsbuild.org/", d: "Free AI, cloud and cyber coursework with IBM digital credentials via Credly.", bg: "#0f62fe", fg: "#ffffff", glyph: "IBM" },
  { n: "Microsoft Learn", p: "Microsoft", cat: "cloud", url: "https://learn.microsoft.com/training/", d: "Free Azure, .NET and AI learning paths; Applied Skills assessments at no cost.", bg: "#f3f3f3", fg: "#1a1a1a", glyph: "ms" },
  { n: "AWS Skill Builder", p: "Amazon Web Services", cat: "cloud", url: "https://skillbuilder.aws/", d: "Free cloud fundamentals and architecting courses with digital badges.", bg: "#232f3e", fg: "#ff9900", glyph: "aws" },
  { n: "Google Skillshop", p: "Google", cat: "biz", url: "https://skillshop.withgoogle.com/", d: "Official free Google certifications — Ads, Analytics and AI essentials.", bg: "#4285f4", fg: "#ffffff", glyph: "G" },
  { n: "HackerRank Skills", p: "HackerRank", cat: "code", url: "https://www.hackerrank.com/skills-verification", d: "Free verified skill certificates — Python, SQL, Java, problem solving and more.", bg: "#00ea64", fg: "#0b0b0f", glyph: "H" },
  { n: "Kaggle Learn", p: "Kaggle · Google", cat: "data", url: "https://www.kaggle.com/learn", d: "Hands-on micro-courses: Python, pandas, ML and deep learning — free certificates.", bg: "#20beff", fg: "#ffffff", glyph: "k" },
  { n: "Cognitive Class", p: "IBM Developer", cat: "data", url: "https://cognitiveclass.ai/", d: "Free data science school — Python, SQL and ML courses with badges.", bg: "#052fad", fg: "#ffffff", glyph: "CC" },
  { n: "Infosys Springboard", p: "Infosys", cat: "biz", url: "https://infyspringboard.onwingspan.com/", d: "Free courses and certificates for Indian students — coding to communication skills.", bg: "#007cc3", fg: "#ffffff", glyph: "In" },
  { n: "Great Learning Academy", p: "Great Learning", cat: "biz", url: "https://www.greatlearning.in/academy", d: "Free short courses with certificates across IT, data and management.", bg: "#2f7cf6", fg: "#ffffff", glyph: "GL" },
  { n: "MongoDB University", p: "MongoDB", cat: "data", url: "https://learn.mongodb.com/", d: "Official database courses and completion certificates — free, self-paced.", bg: "#00684a", fg: "#00ed64", glyph: "mongo" },
  { n: "Trailhead", p: "Salesforce", cat: "biz", url: "https://trailhead.salesforce.com/", d: "Gamified CRM, AI and admin trails — free badges and superbadges.", bg: "#00a1e0", fg: "#ffffff", glyph: "T" },
  { n: "Postman Academy", p: "Postman", cat: "code", url: "https://academy.postman.com/", d: "API Fundamentals Student Expert certification — free badge, great for placements.", bg: "#ff6c37", fg: "#ffffff", glyph: "P" },
  { n: "IIRS Outreach", p: "ISRO · Dehradun", cat: "data", url: "https://www.iirs.gov.in/", d: "ISRO's free live courses in remote sensing and GIS with e-certificates.", bg: "#f47216", fg: "#ffffff", glyph: "ISRO", fs: "8px" },
];

export type JobSector = "multi" | "it" | "core" | "govt" | "research";
export type JobType = "intern" | "job";

export const SECTORS: Record<JobSector, { label: string; c: string }> = {
  multi: { label: "Multi-sector", c: "#34d399" },
  it: { label: "IT & Software", c: "#60a5fa" },
  core: { label: "Core & PSU", c: "#fbbf24" },
  govt: { label: "Govt & Defence", c: "#f87171" },
  research: { label: "Research & Space", c: "#a78bfa" },
};

export interface JobPortal {
  n: string;
  o: string;
  s: JobSector;
  t: JobType[];
  url: string;
  d: string;
  i: string;
}

export const JOB_PORTALS: JobPortal[] = [
  { n: "PM Internship Scheme", o: "Govt of India · MCA", s: "multi", t: ["intern"], url: "https://pminternship.mca.gov.in/", d: "12-month internships across top-500 companies with monthly assistance — check live rounds.", i: "PM" },
  { n: "AICTE Internship Portal", o: "AICTE", s: "multi", t: ["intern"], url: "https://internship.aicte-india.org/", d: "National portal — internships with companies, PSUs and government bodies.", i: "AI" },
  { n: "Internshala", o: "Internshala", s: "multi", t: ["intern", "job"], url: "https://internshala.com/", d: "Internships and fresher jobs across every sector, remote included.", i: "Is" },
  { n: "Unstop", o: "Unstop", s: "multi", t: ["intern", "job"], url: "https://unstop.com/", d: "Competitions, hackathons, internships and hiring challenges.", i: "Un" },
  { n: "LinkedIn Jobs", o: "LinkedIn", s: "multi", t: ["intern", "job"], url: "https://www.linkedin.com/jobs/", d: "The widest live job and internship feed — set alerts for your branch.", i: "in" },
  { n: "Naukri", o: "Info Edge", s: "multi", t: ["intern", "job"], url: "https://www.naukri.com/", d: "India's largest job board — fresher filters for every discipline.", i: "Nk" },
  { n: "Google Summer of Code", o: "Google Open Source", s: "it", t: ["intern"], url: "https://summerofcode.withgoogle.com/", d: "Paid open-source mentorship — contribute to real projects worldwide.", i: "GS" },
  { n: "TCS Careers", o: "Tata Consultancy Services", s: "it", t: ["job"], url: "https://www.tcs.com/careers", d: "Fresher hiring (NQT) for engineering graduates across India.", i: "TC" },
  { n: "Amazon Jobs", o: "Amazon", s: "it", t: ["intern", "job"], url: "https://www.amazon.jobs/", d: "SDE, cloud and operations roles — internships and full-time.", i: "Az" },
  { n: "Wellfound", o: "Wellfound (AngelList)", s: "it", t: ["intern", "job"], url: "https://wellfound.com/", d: "Startup jobs and internships — salary upfront, direct founder access.", i: "Wf" },
  { n: "BHEL", o: "BHEL · HQ Bhopal", s: "core", t: ["intern", "job"], url: "https://www.bhel.com/", d: "PSU engineer posts and project internships — headquartered in Bhopal.", i: "BH" },
  { n: "L&T Careers", o: "Larsen & Toubro", s: "core", t: ["job"], url: "https://www.larsentoubro.com/careers/", d: "Construction, heavy engineering and infrastructure roles.", i: "LT" },
  { n: "MPESB (Vyapam)", o: "Govt of Madhya Pradesh", s: "govt", t: ["job"], url: "https://esb.mp.gov.in/", d: "MP state engineer, JE and AE recruitment — Group-2 and Group-3 posts.", i: "MP" },
  { n: "SSC JE", o: "Staff Selection Commission", s: "govt", t: ["job"], url: "https://ssc.gov.in/", d: "Central government Junior Engineer posts — civil, electrical, mechanical.", i: "SS" },
  { n: "UPSC ESE", o: "Union Public Service Commission", s: "govt", t: ["job"], url: "https://www.upsc.gov.in/", d: "Engineering Services Examination — Class-I officer posts across departments.", i: "UP" },
  { n: "RRB JE", o: "Railway Recruitment Boards", s: "govt", t: ["job"], url: "https://www.rrbapply.gov.in/", d: "Railway Junior Engineer and technical recruitment via RRB boards.", i: "RR" },
  { n: "Indian Army · TGC", o: "Join Indian Army", s: "govt", t: ["job"], url: "https://joinindianarmy.nic.in/", d: "Technical Graduate Commission — engineer officer entries.", i: "IA" },
  { n: "DRDO RAC", o: "Recruitment & Assessment Centre", s: "govt", t: ["job"], url: "https://www.rac.gov.in/", d: "Scientist B recruitment for defence R&D laboratories.", i: "DR" },
  { n: "ISRO Careers", o: "Indian Space Research Organisation", s: "research", t: ["intern", "job"], url: "https://www.isro.gov.in/Careers.html", d: "Scientist/Engineer posts and student project internships at ISRO centres.", i: "IS" },
  { n: "BARC OCES", o: "Bhabha Atomic Research Centre", s: "research", t: ["job"], url: "https://www.barc.gov.in/careers/", d: "Training-school route to Scientific Officer posts — stipend during training.", i: "BA" },
];

/** The eight major branches shown on the Study page, in display order. */
export const MAJOR_BRANCHES = [
  { slug: "computer-science-and-engineering", name: "Computer Science & Engineering", code: "CSE", sems: "I–VIII", subjects: 47, desc: "The broadest computing degree — software, systems and theory." },
  { slug: "electronics-and-communication", name: "Electronics & Communication", code: "ECE", sems: "III–VIII", subjects: 44, desc: "Circuits, signals, communication and embedded systems." },
  { slug: "ai-and-machine-learning", name: "AI & Machine Learning", code: "AIML", sems: "I–VIII", subjects: 61, desc: "Intelligent systems, models and learning algorithms." },
  { slug: "ai-and-data-science", name: "AI & Data Science", code: "AIDS", sems: "I–VIII", subjects: 49, desc: "Data engineering, statistics and applied AI." },
  { slug: "mechanical-engineering", name: "Mechanical Engineering", code: "ME", sems: "III–VIII", subjects: 50, desc: "Design, thermal, manufacturing and machines." },
  { slug: "information-technology", name: "Information Technology", code: "IT", sems: "III–VIII", subjects: 66, desc: "Software systems, networks and information services." },
  { slug: "civil-engineering", name: "Civil Engineering", code: "CE", sems: "III–VIII", subjects: 55, desc: "Structures, geotech, transport and construction." },
  { slug: "cyber-security", name: "Cyber Security", code: "CY", sems: "III–VIII", subjects: 51, desc: "Network defence, cryptography and digital forensics." },
];

/** Branches whose named subjects carry full exam-ready content. */
export const FULLY_AUTHORED = new Set([
  "first-year-common",
  "ai-and-data-science",
  "computer-science-and-engineering",
  "ai-and-machine-learning",
  "information-technology",
  "cyber-security",
  "electronics-and-communication",
]);

export const SITE_STATS = {
  branches: 40,
  subjects: 1578,
  certifications: CERTIFICATIONS.length,
  portals: JOB_PORTALS.length,
};
