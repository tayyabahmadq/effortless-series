/**
 * Academics - RGPV Information Technology 7th-semester open elective: IT-703(C) Social Networks.
 *
 * Structure mirrors subject-ad-502.ts: syllabus Unit I..V -> one chapter per
 * unit -> numbered sections.  Each section carries 3-4 body paragraphs, 4-6
 * bullets, one diagram, a table or code sample, a callout, key terms and
 * examiner-style exam questions (7 or 14 marks, outline scaffolding).
 *
 * PYQ note: the local RGPV paper archive contains no Social Networks paper
 * (the archived IT-703 sessions cover variants B and D), so no `appearances`
 * sessions are cited anywhere in this file - every exam question here is
 * examiner-style and provenance-free.
 */

import type { AcademicSubject } from "./types";

export const it703c: AcademicSubject = {
  id: "it-703-c",
  code: "IT-703(C)",
  title: "Social Networks",
  semester: "VII Semester",
  program: "RGPV · Information Technology",
  tagline:
    "Every topic of the syllabus as one connected story: why the document web needs semantics, how ontologies and RDF give social data meaning, how communities are found and evaluated, how behaviour, privacy and trust are modelled, and how centrality, clustering and matrix views make networks visible.",
  description:
    "Five units walk from the syntactic web and the Semantic Web stack to the emergence of the social web; through ontologies, RDF and OWL and the modelling, aggregation and reasoning of social network data; into community definition, detection, evaluation and mining, tools and decentralized networks; on to behaviour prediction, privacy, subjective-logic trust and the attack spectrum; and close with graph-theoretic visualization - centrality, clustering, node-edge and matrix diagrams, hybrids - and applications from cover networks to co-citation analysis.",
  accentColor: "#06b6d4",
  emoji: "SN",
  unitCount: 5,
  totalSections: 37,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction",
      summary:
        "Unit I frames the whole subject: why the current document web cannot carry meaning, how the Semantic Web layer cake answers that, how Web 2.0 turned users and their interactions into a social graph, how social network analysis developed from sociograms to computational SNA, its key concepts and measures, the three electronic sources of network data, and the applications that justify the course.",
      chapter: {
        number: "01",
        title: "From the Document Web to Social Network Analysis",
        intro:
          "Unit I covers the limitations of the current Web, the development of the Semantic Web, the emergence of the Social Web, the development of Social Network Analysis, key concepts and measures in network analysis, electronic sources for network analysis, and applications of Social Network Analysis.",
        inOneBreath:
          "The current Web is a web of documents - machines see markup, not meaning - so keyword search returns syntactic matches and data needs scraping. The Semantic Web layers URIs, RDF, schemas, OWL and rules so software agents can read and reason over shared meaning. Web 2.0 then turned every like, follow and reply into a recorded edge, giving analysis its raw material. Social network analysis studies those edges with graph measures - degree, density, diameter, clustering - extracted from discussion networks, blogs and web communities, to power applications from viral marketing to epidemic control.",
        sections: [
          {
            number: "1.1",
            title: "Limitations of the current Web",
            body: [
              "The current Web is a web of documents: HTML pages written for human eyes, connected by untyped hyperlinks. A browser renders markup beautifully, but a machine reading the same page sees only tags and strings - it has no idea whether 'Apple' means the fruit, the company, or a surname, and no field telling it that a fragment of text is an author, a price, or a date. This is why the present web is called the syntactic web: information is published for display, not for interpretation, and all meaning lives in the human reader's head.",
              "A worked example shows the gap. Ask a search engine for 'papers by Tim Berners-Lee about social networks' and it matches keywords across pages - it cannot reliably join author, affiliation and title, because HTML has no author field to join on. Worse, a page about the Python snake and a page about the Python language look identical to the index: same tokens, no concepts. The only system that correctly filters the results is the human reading each hit, which is exactly the work a semantic web agent is meant to absorb.",
              "The limitation list has four canonical entries. Keyword search matches syntax, so synonyms are missed (car vs automobile) and homonyms flood the results. Data is locked inside pages, so any reuse needs brittle screen scraping. Links are untyped - an anchor says 'go here' but never 'is colleague of' - so relationship information cannot be processed. And nothing supports inference: no machine can derive that two people listed on the same project page are collaborators, because the statement was never explicit.",
              "Examiners ask this as the opening 7-mark question of Unit I: define the syntactic web, list four to six limitations each with a one-line example, and close by naming the Semantic Web mechanism that answers each - RDF for data, typed links for relations, ontologies for meaning, inference for derivation. That closing mapping is what lifts the answer above a memorized list.",
            ],
            bullets: [
              "Syntactic web: HTML pages written for human display; machines see markup and strings, never meaning.",
              "Keyword search matches syntax - synonyms missed (car vs automobile), homonyms flooded (Apple fruit vs company).",
              "Data is locked in pages: reuse requires brittle screen scraping with page-specific parsers.",
              "Hyperlinks are untyped: an anchor never says 'is colleague of', so relationships cannot be processed.",
              "No inference: nothing on a document web lets a machine derive that two project-page names are collaborators.",
              "Each limitation maps to a Semantic Web fix: RDF data, typed links, ontologies, reasoning.",
            ],
            diagram: {
              kind: "flow",
              title: "Why a keyword search disappoints",
              caption: "Every stage is syntactic - meaning enters only at the last, human step.",
              steps: [
                { label: "Query typed", note: "papers by Tim Berners-Lee" },
                { label: "Keyword index", note: "tokens, no concepts" },
                { label: "Syntactic matches", note: "any page with the words" },
                { label: "Noise returned", note: "homonyms, synonyms, ads" },
                { label: "Human filters", note: "meaning applied by the reader" },
              ],
            },
            table: {
              caption: "Limitations of the current Web and their semantic answers.",
              headers: ["Limitation", "What the machine sees", "Consequence", "Semantic Web answer"],
              rows: [
                ["Meaning-free markup", "tags and strings only", "search cannot tell Apple the fruit from Apple Inc.", "ontologies give concepts"],
                ["Data locked in pages", "rendered text", "reuse needs page-specific scrapers", "RDF publishes data directly"],
                ["Untyped links", "a bare anchor", "relationships cannot be processed", "typed properties (foaf:knows)"],
                ["No inference support", "flat text", "machine cannot derive collaborator facts", "OWL axioms and reasoners"],
                ["Keyword retrieval", "token overlap", "synonyms missed, homonyms flooded", "concept-based querying"],
              ],
            },
            callout: {
              type: "exam",
              title: "Pair each limitation with an example",
              body: "The mark scheme wants limitation plus concrete example, not a bare list. Write 'untyped links - an href cannot express colleague-of', not just 'links are untyped'. Then close with the four semantic answers; the mapping line is usually a separate mark.",
            },
            keyTerms: [
              { term: "Syntactic web", definition: "The current document web, where pages carry display markup for humans and no machine-processable meaning." },
              { term: "Keyword search", definition: "Retrieval by token overlap between query and page text, blind to concepts and ambiguity." },
              { term: "Screen scraping", definition: "Extracting data from rendered pages with brittle page-specific parsers, the only reuse path on a document web." },
              { term: "Untyped hyperlink", definition: "A link that asserts only navigation, never the kind of relationship it represents." },
            ],
            examQuestions: [
              {
                q: "Explain the limitations of the current Web and describe how each limitation is addressed by the Semantic Web.",
                marks: 7,
                outline: [
                  "Define the syntactic web: HTML documents for humans, markup without meaning.",
                  "Limitation: keyword search matches syntax - give the Apple/Python ambiguity example.",
                  "Limitation: data locked in pages - screen scraping is brittle.",
                  "Limitation: untyped hyperlinks - no way to express colleague-of or price-of.",
                  "Limitation: no inference - machines cannot derive unstated facts.",
                  "Map each limitation to its fix: ontologies, RDF, typed properties, OWL reasoning.",
                  "Close with one sentence: the semantic web moves meaning from the reader into the data.",
                ],
              },
              {
                q: "Distinguish between the syntactic Web and the Semantic Web with one example of a task each can or cannot do.",
                marks: 7,
                outline: [
                  "Syntactic web: meaning lives with the human reader, machines match tokens.",
                  "Semantic web: data carries explicit, shared meaning machines can reason over.",
                  "Task the syntactic web cannot do: join author-title-affiliation across pages automatically.",
                  "Task the semantic web can do: an agent compares book prices published as RDF and returns the cheapest.",
                  "The difference is data published with defined semantics, not smarter page ranking.",
                ],
              },
            ],
          },
          {
            number: "1.2",
            title: "Development of the Semantic Web",
            body: [
              "The Semantic Web is the W3C programme - articulated by Berners-Lee, Hendler and Lassila in their 2001 Scientific American article - that extends the web so data carries machine-processable meaning. Its development is best memorized as a layer cake: each layer adds one capability on top of the previous one, from raw identifiers at the bottom to trust at the top. The point of the stack is that an agent at any layer can process the layers below it, so the web upgrades incrementally instead of requiring everything to change at once.",
              "Reading the cake from the bottom: URIs and Unicode give every resource a global name; XML provides a syntactic envelope; RDF supplies the data model of subject-predicate-object triples; RDF Schema adds vocabulary - classes, subclasses, domains and ranges; OWL adds full ontology constructs - restrictions, equivalences, transitivity - checkable by reasoners; SPARQL queries the store; and the logic, proof and trust layers handle rules, derivations and the credibility of sources. Development milestones to quote: RDF recommendation 1999-2004, OWL 2004, SPARQL 2008, and the FOAF vocabulary that carries social meaning.",
              "A worked example makes the cake earn its keep. Two shops publish their catalogues as RDF with the same product vocabulary, each item keyed by ISBN URI. A shopping agent queries both stores with SPARQL, joins on the shared ISBN, adds a shipping-cost rule from the logic layer, and returns the cheapest total - no scraping, no bespoke parser, because the data arrived already meaningful. The same task on the syntactic web needs a scraper per shop and breaks whenever a page changes.",
              "Exam framing: 'development of the Semantic Web' wants the timeline (1998-2001 vision papers, 2004 OWL, 2008 SPARQL), the layer cake drawn top-down, and one agent example. Draw the cake with six labelled layers and annotate each layer with one standard - RDF at the data layer, OWL at the ontology layer, SPARQL at the query layer. The annotation habit plus the agent example is what distinguishes a 7-mark answer from a 4-mark one, and quoting the 2001 Scientific American authors by name earns the history mark outright.",
            ],
            bullets: [
              "Semantic Web: W3C programme making web data machine-processable; vision article by Berners-Lee, Hendler and Lassila, 2001.",
              "Layer cake bottom-up: URIs + Unicode -> XML syntax -> RDF data model -> RDF Schema vocabulary -> OWL ontologies -> rules, proof, trust.",
              "SPARQL is the query language of the semantic data layer - SQL's cousin for triple stores.",
              "Milestones: RDF 1999, OWL 2004, SPARQL 2008, FOAF vocabulary for social data.",
              "Agent example: RDF catalogues joined by ISBN via SPARQL return the cheapest price without scraping.",
              "The stack upgrades incrementally - every layer only depends on the layers beneath it.",
            ],
            diagram: {
              kind: "layers",
              title: "The Semantic Web layer cake",
              caption: "Index 0 is the top layer: trust rests on proof, which rests on rules and ontologies, all the way down to identifiers.",
              layers: [
                { label: "Trust and proof", note: "credibility of sources, verified derivations" },
                { label: "Logic and rules", note: "inference beyond OWL, e.g. shipping-cost rules" },
                { label: "OWL ontologies", note: "classes, restrictions, transitivity" },
                { label: "RDF Schema + SPARQL", note: "vocabularies and triple queries" },
                { label: "RDF data model", note: "subject-predicate-object triples" },
                { label: "URIs, Unicode, XML", note: "global identifiers and syntax envelope" },
              ],
            },
            codeExample: {
              language: "turtle",
              caption: "book.ttl - catalogue data an agent can price without scraping",
              code: `@prefix book: <http://example.org/book#> .
@prefix ex:    <http://example.org/terms#> .

book:isbn9780134685991
  a ex:Paperback ;
  ex:title   "The Unix Programming Environment" ;
  ex:author  "Kernighan" ;
  ex:price   "450"^^<http://www.w3.org/2001/XMLSchema#integer> ;
  ex:currency "INR" .

# a second shop publishing the same ISBN URI is joined automatically
# by a SPARQL query - no parser per shop, no scraping`,
            },
            callout: {
              type: "tip",
              title: "Memorize the cake top-down as a dependency chain",
              body: "Trust needs proof, proof needs rules, rules need ontologies, ontologies need vocabularies, vocabularies need a data model, and the data model needs identifiers. Reciting that chain lets you redraw all six layers under exam pressure in under a minute.",
            },
            keyTerms: [
              { term: "Semantic Web", definition: "The W3C extension of the web in which data carries explicit, shared, machine-processable meaning." },
              { term: "Layer cake", definition: "The stack of Semantic Web standards from URIs at the base to trust at the top." },
              { term: "SPARQL", definition: "The W3C query language for RDF triple stores, the analogue of SQL for graphs." },
              { term: "Software agent", definition: "A program that reads semantic data and acts on it autonomously, e.g. a price-comparison agent." },
            ],
            examQuestions: [
              {
                q: "Describe the development of the Semantic Web. Draw its layered architecture and explain the role of each layer with the standard that implements it.",
                marks: 7,
                outline: [
                  "Define the Semantic Web as machine-processable meaning on the web.",
                  "Quote the 2001 Berners-Lee-Hendler-Lassila vision article.",
                  "Draw the layer cake: URIs/Unicode, XML, RDF, RDF Schema, OWL, logic/proof/trust.",
                  "Explain each layer's role in one line with its standard.",
                  "Place SPARQL as the query layer of the RDF data.",
                  "Give the timeline: RDF 1999, OWL 2004, SPARQL 2008.",
                  "Close with the price-agent example showing layers cooperating.",
                ],
              },
              {
                q: "Explain how a software agent can compare prices of a book across two online shops on the Semantic Web. Why does the same task fail on the current Web?",
                marks: 7,
                outline: [
                  "Shops publish catalogues as RDF using a shared product vocabulary.",
                  "Each product is keyed by a common identifier (ISBN URI).",
                  "The agent queries both stores with SPARQL and joins on the identifier.",
                  "A rule adds shipping cost; the cheapest total is computed.",
                  "On the current web the agent must scrape two HTML layouts, which breaks on redesign.",
                  "The semantic difference: data arrives meaningful, so integration is a query, not a parser.",
                ],
              },
            ],
          },
          {
            number: "1.3",
            title: "Emergence of the Social Web",
            body: [
              "The Social Web - Web 2.0 - is the second generation of the web in which users create the content and the platform records the interactions between them. The term was popularized by Tim O'Reilly around 2004, and the shift is behavioural before it is technical: the same HTTP and HTML now carry profiles, friendship links, likes, comments, shares and tags. The decisive novelty is that every interaction is stored as an edge, so the platform accumulates a social graph as a by-product of ordinary use.",
              "The timeline is worth quoting: six-degrees and Friendster 2002-2003, Orkut and MySpace, Facebook 2004, YouTube 2005, Twitter 2006. Each platform adds a link type - friendship is mutual, following is directed, co-editing is event-based - and each generates content the users themselves organize through folksonomies: free-form tags instead of an official taxonomy. Delicious and Flickr demonstrated that thousands of amateur tags produce usable structure, a phenomenon the syllabus calls collaborative tagging.",
              "A worked example shows how one act becomes graph data. A user uploads a photo: the event creates a photo node, an uploaded-by edge, then a tagged-by edge per named friend; 500 followers each generate a share edge, and a cascade graph forms whose shape - how many hops, which branches die - is precisely what SNA measures in Unit V. The photo is content; the 500 share edges are the analytically valuable data.",
              "Exam framing: define Web 2.0 as read-write plus recorded interactions, give the platform timeline (Friendster 2002 through Twitter 2006), contrast folksonomy with taxonomy with the Delicious example, and state the punchline - the social graph is the data asset the whole subject analyzes. A compare-table between Web 1.0 and the Social Web is the standard way to structure the answer, with direction, content source, links and data as the four rows; the table below is exactly that structure, ready to reproduce.",
            ],
            bullets: [
              "Web 2.0: users create content; the platform records every interaction as an edge of a social graph.",
              "Term popularized by Tim O'Reilly (~2004); the shift is read-write rather than read-only.",
              "Platform timeline: Friendster 2002, Orkut/MySpace 2003-04, Facebook 2004, YouTube 2005, Twitter 2006.",
              "Link types differ: friendship symmetric, following directed, co-editing event-based.",
              "Folksonomy: free-form user tags replacing central taxonomies (Delicious, Flickr).",
              "One photo upload generates upload, tag and share edges - a cascade graph ready for SNA.",
            ],
            diagram: {
              kind: "compare",
              title: "Web 1.0 vs the Social Web",
              caption: "The same infrastructure, inverted: readers become authors, and interactions become data.",
              left: {
                heading: "Web 1.0 - document web",
                items: [
                  "Site publishes, user reads",
                  "Content: static pages",
                  "Links connect documents",
                  "Data: page hits only",
                  "Example: a newspaper homepage",
                ],
              },
              right: {
                heading: "Web 2.0 - social web",
                items: [
                  "Users create, comment, share",
                  "Content: profiles, posts, media",
                  "Links connect people to people",
                  "Data: the social graph itself",
                  "Example: a photo's share cascade",
                ],
              },
            },
            table: {
              caption: "Web 1.0 and the Social Web, dimension by dimension.",
              headers: ["Dimension", "Web 1.0", "Social Web (Web 2.0)"],
              rows: [
                ["Direction", "read-only", "read-write"],
                ["Content source", "professional publishers", "user-generated content"],
                ["Primary links", "document to document", "person to person"],
                ["Organization", "editorial taxonomy", "folksonomy (user tags)"],
                ["Recorded data", "page views", "likes, comments, follows, shares"],
                ["Analytic asset", "traffic logs", "the social graph"],
              ],
            },
            callout: {
              type: "tip",
              title: "The edges are the asset",
              body: "Web 2.0 is not a technology upgrade but a behavioural one - the platforms were built on existing web tech. What changed is that ordinary use now emits recorded edges, which is why the social web made large-scale SNA possible for the first time. Say this explicitly; it is the non-obvious line examiners reward.",
            },
            keyTerms: [
              { term: "Web 2.0", definition: "The read-write generation of the web in which user-created content and recorded interactions dominate." },
              { term: "Social graph", definition: "The network of persons as nodes and their recorded interactions as edges, accumulated by social platforms." },
              { term: "Folksonomy", definition: "Collaborative tagging by users, producing emergent organization without an official taxonomy." },
              { term: "User-generated content", definition: "Posts, photos, videos and comments created by users rather than professional publishers." },
            ],
            examQuestions: [
              {
                q: "Explain the emergence of the Social Web. How does it differ from Web 1.0, and why did it make large-scale social network analysis possible?",
                marks: 7,
                outline: [
                  "Define Web 2.0: users create content, platforms record interactions.",
                  "Give the platform timeline 2002-2006 (Friendster, Orkut, Facebook, YouTube, Twitter).",
                  "Contrast with Web 1.0 using a small table: direction, content, links, data.",
                  "Explain folksonomy vs taxonomy with the Delicious/Flickr example.",
                  "Show one upload generating upload/tag/share edges - a cascade graph.",
                  "Conclude: recorded edges made SNA possible at population scale for the first time.",
                ],
              },
              {
                q: "What is a folksonomy? How does collaborative tagging differ from an editorial taxonomy, and when can it fail?",
                marks: 7,
                outline: [
                  "Folksonomy: free-form tags applied by users to shared content.",
                  "No central authority - vocabulary emerges from aggregation.",
                  "Strength: reflects real user vocabulary; scales with participation.",
                  "Failure modes: synonym tags (ny vs nyc), spelling noise, tag gaming/SEO spam.",
                  "Taxonomy is controlled and consistent but slow and top-down.",
                ],
              },
            ],
          },
          {
            number: "1.4",
            title: "Development of Social Network Analysis",
            body: [
              "Social network analysis is the study of social entities and their relationships as networks of nodes and edges, using graph theory and statistics rather than individual attributes alone. Its founding move was methodological: explain social outcomes by position in a structure - who bridges whom, who is isolated - instead of by personal traits. That inversion, from attribute to structure, is the definition examiners want first.",
              "The development line runs through four dated milestones. Jacob Moreno drew the first sociograms in the 1930s, plotting schoolchildren as points and friendships as lines to explain runaways and cliques. The 1950s-60s formalized the field: Barnes coined 'social network', and graph theory entered via Harary and the Michigan triads work. Mark Granovetter's 1973 'The Strength of Weak Ties' showed that acquaintances, not close friends, carry new information. Stanley Milgram's 1967 small-world experiment measured chains of acquaintances between strangers, and the 1990s closed the loop with Watts-Strogatz and Barabasi-Albert network models.",
              "A worked example retraces Milgram's experiment as an information-diffusion process. Roughly 296 starters in Nebraska were each handed a letter addressed to a stockbroker in Boston and instructed to forward it only to a first-name acquaintance likely to be closer. Sixty-four chains completed; the median chain contained about 5.5 intermediates, the origin of 'six degrees of separation'. The steps - target known, neighbour chosen by closeness estimate, letter forwarded, chain logged - are exactly the cascade steps used later to model diffusion in Units III and IV.",
              "Exam framing: quote Moreno, Barnes, Milgram and Granovetter with dates and one contribution each - sociogram, naming the field, the chain experiment, weak ties - then state the modern turn: online platforms replaced questionnaires with complete, measured networks, making SNA computational and web-scale. That last sentence connects the history to the rest of the syllabus, from electronic sources in section 1.6 to centrality in Unit V, and it is precisely the linking mark most answers miss.",
            ],
            bullets: [
              "SNA: explaining social outcomes by structural position rather than individual attributes.",
              "Moreno, 1930s: first sociograms - children as points, friendships as lines.",
              "Barnes, 1954: coined the term 'social network'; graph theory formalized the field.",
              "Milgram, 1967: small-world experiment - median 5.5 intermediates between strangers.",
              "Granovetter, 1973: weak ties carry new information that strong ties cannot.",
              "1990s onward: Watts-Strogatz and Barabasi-Albert models; web-scale computational SNA.",
            ],
            diagram: {
              kind: "flow",
              title: "Four eras of SNA development",
              caption: "From hand-drawn sociograms to platform-scale computational analysis.",
              steps: [
                { label: "1930s sociometry", note: "Moreno's sociograms of schoolchildren" },
                { label: "1950s formalization", note: "Barnes names the field; graph theory enters" },
                { label: "1960s-70s experiments", note: "Milgram chains; Granovetter's weak ties" },
                { label: "1990s network models", note: "Watts-Strogatz small world; Barabasi-Albert hubs" },
                { label: "2000s computational SNA", note: "online platforms give complete measured graphs" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "sna_intro.py - a tiny network and its first structural facts",
              code: `import networkx as nx

G = nx.Graph()
G.add_edges_from([("A", "B"), ("B", "C"), ("C", "D"), ("D", "E")])

print(nx.degree(G, "B"))        # 2 - B has two ties
print(round(nx.density(G), 2))  # 0.4 - 4 of 10 possible edges exist
print(nx.diameter(G))           # 4 - A to E needs 4 hops
print(round(nx.average_clustering(G), 2))  # 0.0 - no triangles yet`,
            },
            callout: {
              type: "exam",
              title: "Four names, four dates, four contributions",
              body: "Moreno (1930s, sociogram), Barnes (1954, named the field), Milgram (1967, small-world chains), Granovetter (1973, weak ties). Exam answers that attach a dated contribution to each name score the full history mark; name-dropping without dates does not.",
            },
            keyTerms: [
              { term: "Sociogram", definition: "Moreno's plot of individuals as points and relationships as lines - the first SNA visualization." },
              { term: "Small-world experiment", definition: "Milgram's 1967 chain-letter study finding about 5.5 intermediates between random strangers." },
              { term: "Weak tie", definition: "An acquaintance-level tie that transmits novel information across group boundaries." },
              { term: "Structural analysis", definition: "Explaining behaviour by network position rather than by personal attributes." },
            ],
            examQuestions: [
              {
                q: "Trace the development of social network analysis from Moreno's sociograms to computational SNA, naming key milestones with dates and contributions.",
                marks: 7,
                outline: [
                  "Define SNA: outcomes explained by structural position, not attributes alone.",
                  "Moreno 1930s: sociograms of school friendships.",
                  "Barnes 1954: the term 'social network'; graph-theoretic formalization.",
                  "Milgram 1967: small-world chains, median 5.5 intermediates.",
                  "Granovetter 1973: weak ties carry novel information.",
                  "Watts-Strogatz 1998 and Barabasi-Albert 1999: generative network models.",
                  "Conclusion: online platforms turned SNA from sampled surveys into complete measured graphs.",
                ],
              },
              {
                q: "Describe Milgram's small-world experiment step by step. What did it measure, and what did 'six degrees of separation' come to mean?",
                marks: 7,
                outline: [
                  "296 starters in Nebraska; target a stockbroker in Boston.",
                  "Rule: forward the letter only to a first-name acquaintance closer to the target.",
                  "Each forward is a diffusion step: choose neighbour, send, log the chain.",
                  "64 chains completed; median about 5.5 intermediates.",
                  "Interpretation: short acquaintance chains connect any two strangers.",
                  "'Six degrees' = the population-scale reachability of short paths, not an exact constant.",
                ],
              },
            ],
          },
          {
            number: "1.5",
            title: "Key concepts and measures in network analysis",
            body: [
              "SNA's vocabulary starts with actors (nodes) and ties (edges). An ego network is the neighbourhood of one actor - the actor plus alters plus the ties among them. The workhorse measures are structural and computable from the edge list alone: degree (how many ties an actor has), density (the fraction of possible ties actually present), diameter (the longest shortest path, a global reach measure), number of components (disconnected pieces), and the clustering coefficient (how tightly a neighbourhood closes into triangles).",
              "Ties themselves have properties. Strength distinguishes strong ties (frequent, emotionally intense - family, close friends) from weak ties (acquaintances), and Granovetter's result ties the weak ones to novel information. Homophily is the tendency to bond with the similar - 'birds of a feather' - which shapes assortative networks. Triadic closure says a friend of my friend tends to become my friend, filling triangles; the opposite force, brokerage, values the actor who spans groups that would otherwise not touch.",
              "A worked example fixes the formulas. Take five actors A-B-C-D-E with the four edges AB, BC, CD, DE. Degrees are 1, 2, 2, 2, 1. Density = 2m / (n(n-1)) = 2(4) / (5 x 4) = 0.4. The diameter is 4, since A reaches E only through four hops. B's clustering coefficient is 0, because B's neighbours A and C share no edge. Every one of those numbers is examinable on a small given graph.",
              "Exam framing: expect 'define and compute' - write each formula before substituting, state the undirected convention (n(n-1)/2 possible edges) explicitly, and finish with one interpretive sentence per number. On the worked graph above, say 'density 0.4 - sparse but connected; diameter 4 - information crosses slowly'. The strong/weak tie and homophily definitions usually ride along as short parts of the same question, so prepare them as two-line answers with Granovetter's name attached.",
            ],
            bullets: [
              "Actor and tie are the atoms; an ego network is one actor plus alters plus their internal ties.",
              "Degree = tie count; density = 2m/(n(n-1)) undirected; diameter = longest shortest path.",
              "Strong ties: frequent, intense, redundant information; weak ties: novel information (Granovetter).",
              "Homophily: similarity breeds ties, producing assortative structure.",
              "Triadic closure: friends of friends become friends - triangles fill in.",
              "Brokerage: value flows to the actor spanning otherwise-disconnected groups.",
            ],
            diagram: {
              kind: "matrix",
              title: "A tie's strength against its reach",
              caption: "Two axes classify every relationship; the weak-global corner is where new information enters.",
              axes: { x: "tie scope (local -> global)", y: "tie strength (weak -> strong)" },
              quadrants: [
                { label: "Close kin and old friends", note: "strong and local - support, but redundant information" },
                { label: "Mentors and sponsors", note: "strong and global - rare, valuable, costly to maintain" },
                { label: "Neighbours and classmates", note: "weak and local - daily contact, little novelty" },
                { label: "Granovetter bridges", note: "weak and global - acquaintances carry the new information" },
              ],
            },
            table: {
              caption: "Core measures, formulas and readings.",
              headers: ["Measure", "Formula", "Reads as"],
              rows: [
                ["Degree", "count of incident edges", "local activity or popularity"],
                ["Density", "2m / (n(n-1)) undirected", "how complete the network is, 0 to 1"],
                ["Diameter", "longest shortest path", "global reach; small = fast diffusion"],
                ["Components", "maximal connected subgraphs", "fragmentation of the network"],
                ["Clustering coefficient", "neighbour edges / C(k,2)", "triangle closure around an ego"],
              ],
            },
            callout: {
              type: "tip",
              title: "State the directedness convention",
              body: "Density's denominator is n(n-1)/2 for undirected graphs but n(n-1) for directed ones. Writing the convention in one line before substituting is the difference between a full mark and a lost one - it is the most common silent slip in this numerical.",
            },
            keyTerms: [
              { term: "Ego network", definition: "One actor plus all alters connected to it plus the ties among those alters." },
              { term: "Density", definition: "Fraction of possible edges present; 2m/(n(n-1)) for undirected graphs." },
              { term: "Homophily", definition: "The tendency of similar actors to form ties, producing assortative networks." },
              { term: "Triadic closure", definition: "The tendency for two actors sharing a neighbour to become directly connected." },
              { term: "Brokerage", definition: "The advantage held by an actor whose ties span otherwise separate groups." },
            ],
            examQuestions: [
              {
                q: "Define degree, density, diameter and clustering coefficient. For a 5-node path graph A-B-C-D-E, compute each measure.",
                marks: 7,
                outline: [
                  "Degree: ties per actor - A:1, B:2, C:2, D:2, E:1.",
                  "Density: 2m/(n(n-1)) = 8/20 = 0.4 (undirected convention stated).",
                  "Diameter: longest shortest path = 4 (A to E).",
                  "Clustering of B: neighbours A and C are not linked, so 0.",
                  "One component, since the path connects all five nodes.",
                  "Interpretation: sparse, low-closure chain - information travels slowly.",
                ],
              },
              {
                q: "Explain the strength of weak ties and homophily. Why do weak ties matter more for finding new information?",
                marks: 7,
                outline: [
                  "Strong ties: frequent, emotionally intense, information-redundant circles.",
                  "Weak ties: acquaintances spanning different social circles.",
                  "Granovetter's job survey: acquaintances delivered novel job leads friends could not.",
                  "Homophily makes strong ties similar, so what they know, you already know.",
                  "Weak ties bridge groups - the bridge is the only channel for new information.",
                  "Design echo: recommender systems exploit weak-tie breadth for discovery.",
                ],
              },
            ],
          },
          {
            number: "1.6",
            title: "Electronic sources for network analysis",
            body: [
              "Electronic sources are digital traces from which networks can be extracted automatically, replacing interviews and questionnaires with complete observed behaviour. The syllabus names three families: electronic discussion networks (email, mailing lists, Usenet, web forums), blogs and online communities, and web-based networks (homepages and hyperlink structures). Each family yields a different edge semantics - reply, endorsement, friendship - and stating the semantics is part of the analysis, not a footnote, because every downstream measure depends on what one edge is taken to mean.",
              "Discussion networks are the cleanest case: a reply in a thread is a directed edge from replier to original poster, so a mailing-list month converts into a directed graph with in-degree meaning 'answered questions' and out-degree meaning 'asked or continued threads'. Blogs contribute blogroll links (explicit endorsements), comment links and trackbacks; studies of the blogosphere found a persistent A-list core commanding most inbound links. Online communities supply friendship edges (Facebook, symmetric), follow edges (Twitter, directed) and co-editing edges (Wikipedia, event-based between editors of the same page).",
              "A worked example: take one mailing-list month, extract the reply-to header of every message, and draw an edge from each reply to the message it answers. A 200-message month over 40 participants becomes a graph whose top in-degree node is the resident expert - typically answering 30 percent of all threads - while two or three isolated askers hang off the rim. That graph is the discussion network, ready for centrality in Unit V.",
              "Exam framing: name the three sources, give one edge-extraction rule per source, and finish with the mailing-list worked example - reply-to headers to edges, in-degree as expertise. Direction of the edges (reply vs friendship vs follow) is the distinguishing detail examiners look for, so write the semantics line first in the answer; a reciprocity observation (follows rarely mutual, friendships almost always) closes it with applied judgement.",
            ],
            bullets: [
              "Electronic discussion networks: email To/Cc fields, mailing lists, Usenet, forums - reply threads give directed edges.",
              "In-degree in a reply network reads as 'answered or cited'; out-degree as 'asked or continued'.",
              "Blogs: blogroll endorsements, comment links, trackbacks; blogosphere studies found an A-list core.",
              "Online communities: symmetric friendship (Facebook), directed follow (Twitter), event-based co-editing (Wikipedia).",
              "Web-based networks: hyperlinks between homepages and web rings as endorsement structure.",
              "Extraction rule first, graph second - declare what one edge means before computing anything.",
            ],
            diagram: {
              kind: "fork",
              title: "Three electronic sources, three edge semantics",
              caption: "Same graph machinery, different meaning of one edge - declare it before you analyze.",
              start: "Electronic traces",
              branches: [
                { label: "Discussion networks", outcome: "reply-to threads -> directed edges; in-degree = answered", good: true },
                { label: "Blogs and online communities", outcome: "blogrolls, comments, follows -> endorsement and subscription edges", good: true },
                { label: "Web-based networks", outcome: "homepage hyperlinks -> endorsement structure between sites", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "replies.py - build a discussion network from thread replies",
              code: `import networkx as nx
from collections import Counter

# (replier, original_poster) pairs extracted from reply-to headers
threads = [("ravi", "meena"), ("ravi", "meena"), ("arun", "ravi"),
           ("meena", "arun"), ("ravi", "arun"), ("arun", "meena")]

D = nx.DiGraph()
D.add_edges_from(threads)

answers = Counter(dict(D.in_degree()))
print(answers.most_common(1))   # resident expert = top in-degree
print(D.out_degree("arun"))     # how often arun asked/continued`,
            },
            callout: {
              type: "tip",
              title: "Direction is the semantics",
              body: "Reply networks are directed (who answered whom), friendship is symmetric, following is directed but non-reciprocal. Analysis choices - in-degree vs degree centrality, reciprocity checks - depend entirely on which of these you have, so write the edge semantics in the first line of the answer.",
            },
            keyTerms: [
              { term: "Discussion network", definition: "A network extracted from threaded conversations, with reply edges between participants." },
              { term: "Blogroll", definition: "A blogger's list of endorsed blogs - an explicit, directed recommendation edge." },
              { term: "Trackback", definition: "An automatic notification that another blog linked to a post, forming cross-blog edges." },
              { term: "Reciprocity", definition: "The fraction of directed edges that are mutual - high in friendship, low in follow networks." },
            ],
            examQuestions: [
              {
                q: "Describe the electronic sources for network analysis - discussion networks, blogs and online communities, web-based networks - giving the edge-extraction rule for each.",
                marks: 7,
                outline: [
                  "Discussion networks: reply-to headers -> directed replier-to-poster edges.",
                  "In-degree = answered/cited; out-degree = asked/continued.",
                  "Blogs: blogroll and trackback edges as endorsements.",
                  "Online communities: symmetric friendship vs directed follow vs event co-editing.",
                  "Web-based networks: homepage hyperlinks as site-level endorsement.",
                  "Worked line: one mailing-list month -> 200 messages -> expert with top in-degree.",
                  "Close: edge semantics (direction, meaning) must be declared before analysis.",
                ],
              },
              {
                q: "How would you construct a network from one month of a mailing list, and what structural fact does the highest in-degree node reveal?",
                marks: 7,
                outline: [
                  "Parse message headers; extract sender and reply-to target.",
                  "Add a directed edge replier -> original poster; aggregate duplicates as weights.",
                  "Clean: drop automated posts, merge aliases of one person.",
                  "In-degree ranks participants by how often they answered others.",
                  "The top in-degree node is the community's expert/answer hub.",
                  "Out-degree flags active askers; zero-degree posters are lurkers.",
                ],
              },
            ],
          },
          {
            number: "1.7",
            title: "Applications of Social Network Analysis",
            body: [
              "SNA earns its place through applications that attribute-based analysis cannot deliver, because each answers a question about structure. The syllabus's application list spans epidemiology (contact networks for disease spread), marketing (viral diffusion and influencer targeting), organizational management (communication audits and expertise location), security and policing (covert network disruption), recommender systems (collaborative structure of taste), and bibliometrics (co-citation and collaboration networks, developed fully in Unit V).",
              "Each application pairs naturally with one measure. Marketing targets high-centrality seeds because early adopters with many ties start the largest cascades. Epidemiology removes bridging actors - vaccinating a bridge cuts contact between groups faster than vaccinating at random. Organizational audits read betweenness to find bottleneck managers through whom all coordination passes. Security analyzes covert networks where hierarchy is hidden: removing the broker matters more than removing a leaf, but edges are uncertain, so capture strategy is an SNA problem.",
              "A worked example of targeted immunization: a contact graph of three classrooms joined only by one canteen worker H. Random vaccination of 20 percent of children leaves H untouched and the epidemic can still cross schools. Vaccinating H instead disconnects the graph into three components, and any outbreak stays trapped in its component. The graph arithmetic - one node's removal, three components - is the entire argument, and it is the worked example to reproduce under exam conditions.",
              "Exam framing: list five applications with mechanism-per-line, then develop one - targeted immunization is the fastest to draw - with a small graph and the structural justification (remove the bridge, the graph fragments). A 14-mark variant asks for SNA, its measures and applications together: define the terms, write three formulas, work one mini-computation, then the application list - the pyramid diagram below organizes that answer by scale and keeps the breadth visible to the examiner.",
            ],
            bullets: [
              "Epidemiology: contact networks predict spread; bridging nodes are the vaccination priority.",
              "Viral marketing: seed high-centrality early adopters to start the largest cascades.",
              "Organizational analysis: betweenness exposes bottleneck managers; expertise location uses in-degree.",
              "Security: covert network disruption - remove brokers, not leaves, under edge uncertainty.",
              "Recommender systems: similarity of neighbourhoods predicts shared taste.",
              "Bibliometrics: co-citation and co-authorship networks map research fields.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Applications by scale",
              caption: "Index 0 is the top tier: each level reuses the same measures at a different scope.",
              tiers: [
                { label: "Society", note: "epidemic control, misinformation, security" },
                { label: "Markets", note: "viral campaigns, churn, recommendation" },
                { label: "Organizations", note: "communication audits, expertise location" },
                { label: "Individuals", note: "advice seeking, influence, friendship" },
              ],
            },
            table: {
              caption: "Application, network used, question answered, action taken.",
              headers: ["Domain", "Network", "Question", "Action"],
              rows: [
                ["Epidemiology", "physical contact graph", "where can the outbreak cross groups?", "vaccinate bridge nodes"],
                ["Marketing", "follow/like graph", "who seeds the biggest cascade?", "target high-centrality users"],
                ["Organizations", "communication graph", "where does coordination bottleneck?", "rebalance around high-betweenness staff"],
                ["Security", "covert interaction graph", "who is the hidden broker?", "disrupt intermediaries first"],
                ["Recommenders", "co-purchase/co-like graph", "who shares this taste?", "recommend neighbours' favourites"],
              ],
            },
            callout: {
              type: "exam",
              title: "Pair every application with its measure",
              body: "Marketing -> centrality seeds; epidemiology -> bridging nodes; organizations -> betweenness bottlenecks; recommenders -> neighbourhood similarity. The pairing, not the list, is the mark scheme - an unpaired application list reads as Wikipedia, not analysis.",
            },
            keyTerms: [
              { term: "Targeted immunization", definition: "Vaccinating structurally important (bridging) nodes so the contact graph fragments and outbreaks stay local." },
              { term: "Viral marketing", definition: "Seeding a few well-connected users to trigger peer-to-peer diffusion of a product." },
              { term: "Communication audit", definition: "Mapping an organization's actual communication graph to find bottlenecks and silos." },
              { term: "Covert network analysis", definition: "SNA on hidden networks (criminal, terrorist) where edges are uncertain and must be inferred." },
            ],
            examQuestions: [
              {
                q: "What is Social Network Analysis? Explain its key concepts, measures and applications with suitable examples.",
                marks: 14,
                outline: [
                  "Define SNA: structure explains outcomes; actors and ties as the atoms.",
                  "Concepts: ego networks, strong vs weak ties, homophily, triadic closure, brokerage.",
                  "Measures: degree, density (2m/(n(n-1))), diameter, clustering coefficient - with formulas.",
                  "Worked mini-example: 5-node path graph, density 0.4, diameter 4.",
                  "Electronic sources: discussion networks, blogs/communities, web-based networks.",
                  "Applications: epidemiology, marketing, organizations, security, recommenders, bibliometrics.",
                  "Develop one application in depth: targeted immunization fragmenting a 3-classroom graph.",
                ],
              },
              {
                q: "Explain targeted immunization on a contact network. Why does vaccinating a bridge outperform random vaccination?",
                marks: 7,
                outline: [
                  "Contact graph: three classrooms joined only by one canteen worker H.",
                  "Random 20 percent vaccination most likely misses H; components stay connected.",
                  "Vaccinating H disconnects the graph into three components.",
                  "Outbreaks then remain trapped within one component.",
                  "Structural reason: H carries all inter-group shortest paths (brokerage).",
                  "Generalize: rank nodes by betweenness and immunize in that order.",
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
      title: "Modelling, Aggregating and Knowledge Representation",
      summary:
        "Unit II is the unit of representation: what ontologies are and the role they play in the Semantic Web, ontology-based knowledge representation with TBox and ABox reasoning, the RDF data model and the OWL ontology language, the state of the art in representing network data, the ontological representation of social individuals (FOAF) and of social relationships, and the aggregation and reasoning that fuse multiple sources into one coherent graph, with advanced representations such as temporal, multilayer and signed networks.",
      chapter: {
        number: "02",
        title: "Ontologies, RDF and OWL for Social Data",
        intro:
          "Unit II covers ontology and their role in the Semantic Web, ontology-based knowledge representation, the RDF and OWL languages, state-of-the-art network data representation, ontological representation of social individuals and of social relationships, and aggregating and reasoning with social network data including advanced representations.",
        inOneBreath:
          "An ontology is an explicit specification of a conceptualization - classes, properties, instances and axioms - giving the Semantic Web its shared vocabulary and its inference power. RDF models facts as subject-predicate-object triples joined by URIs, and OWL adds decidable constructs such as restrictions, symmetry and transitivity that reasoners can exploit. Social individuals are represented with FOAF profiles merged across sites by inverse-functional properties, and social relationships become typed, directed, weighted edges instead of a bare 'knows'. Aggregation aligns identities and schemas from many sources into one graph that reasoners then extend - with temporal, multilayer and signed representations as the advanced frontier.",
        sections: [
          {
            number: "2.1",
            title: "Ontology and their role in the Semantic Web",
            body: [
              "An ontology, in Gruber's standard definition, is an explicit specification of a conceptualization: a formal, shared description of the concepts of a domain, their properties and their relations. Its parts are classes (the kinds of things), properties (relations and attributes), instances (the actual individuals) and axioms (constraints and rules the parts must obey). Ontologies range from lightweight vocabularies - a flat list of terms - to rich formal schemas with hundreds of axioms checkable by machine.",
              "The role in the Semantic Web is fourfold. Shared vocabulary: everyone means the same thing by 'product', so data from different sites can be joined. Interoperability: two sites' words are mapped onto one ontology, so agents integrate without custom glue. Inference: axioms let reasoners derive facts never stated - a Student is a Person, so student data satisfies person queries. Reuse: a published ontology (FOAF for people, Dublin Core for documents) saves every later project from reinventing its terms.",
              "A worked example: two conference sites describe participants - one uses 'speaker', the other 'presenter'. Map both as subclasses of the ontology class Presenter with the property presents-sessions, whose domain is Presenter and range Session; an agent aggregating both schedules now merges them without human mapping, and every presents-sessions fact automatically types its subject as a Presenter. The ontological step was two axioms, and the integration work disappeared - which is exactly the return on investment the role question asks you to demonstrate.",
              "Exam framing: give Gruber's definition verbatim, enumerate the four parts - classes, properties, instances, axioms - and pair each of the four roles with one sentence of mechanism. Then run the two-site example in three steps: name the divergent terms, state the mapping axioms, show the agent merging schedules. The definition-plus-roles structure is the standard Unit II opener, and the example is what earns the application mark; answers that stop at the definition plateau at half marks.",
            ],
            bullets: [
              "Gruber definition: an ontology is an explicit specification of a conceptualization.",
              "Parts: classes, properties, instances, axioms - from lightweight vocabularies to rich formal schemas.",
              "Role 1 - shared vocabulary: 'product' means the same thing at every site using the ontology.",
              "Role 2 - interoperability: site-specific terms are mapped onto one shared schema.",
              "Role 3 - inference: axioms derive unstated facts (Student -> Person).",
              "Role 4 - reuse: FOAF, Dublin Core and similar published vocabularies save rebuilding terms.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The parts of an ontology, widest base last",
              caption: "Index 0 is the top tier: few axioms govern many classes, which govern many instances.",
              tiers: [
                { label: "Axioms and rules", note: "constraints and inference - 'Student is a Person'" },
                { label: "Classes and hierarchies", note: "is-a structure of the domain" },
                { label: "Properties", note: "relations and attributes with domain and range" },
                { label: "Instances", note: "the actual individuals of the domain" },
              ],
            },
            codeExample: {
              language: "turtle",
              caption: "schema.ttl - a minimal ontology skeleton (TBox)",
              code: `@prefix :  <http://example.org/conf#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

:Presenter a owl:Class .
:Speaker   rdfs:subClassOf :Presenter .   # site A's word
:Presenter2 rdfs:subClassOf :Presenter . # site B's 'presenter'

:presentsAt a owl:ObjectProperty ;
  rdfs:domain :Presenter ;
  rdfs:range  :Session .

# one axiom: anything presenting is a Presenter -> agent merges both sites`,
            },
            callout: {
              type: "tip",
              title: "Ontology is schema, not data",
              body: "Keep the two levels distinct in every answer: the ontology (classes, properties, axioms) is the schema, while instance data (John, CS101) populates it. Questions frequently mix both on purpose - answering with the right level is the first sorting mark.",
            },
            keyTerms: [
              { term: "Ontology", definition: "An explicit, formal, shared specification of a domain's concepts, relations and constraints (Gruber)." },
              { term: "Shared vocabulary", definition: "A set of agreed terms with defined meaning, enabling data joins across sites." },
              { term: "Interoperability", definition: "The ability of independently built systems to exchange and jointly process data via a common schema." },
              { term: "Inference", definition: "Deriving facts not stated explicitly, using the ontology's axioms." },
            ],
            examQuestions: [
              {
                q: "Define ontology and explain its role in the Semantic Web with the parts of an ontology and a two-site integration example.",
                marks: 7,
                outline: [
                  "Gruber's definition: explicit specification of a conceptualization.",
                  "Parts: classes, properties, instances, axioms - one line each.",
                  "Role: shared vocabulary across sites.",
                  "Role: interoperability via mapping site terms onto the schema.",
                  "Role: inference from axioms (Student -> Person).",
                  "Role: reuse of published vocabularies like FOAF.",
                  "Worked example: 'speaker' and 'presenter' mapped as subclasses; agent merges schedules.",
                ],
              },
              {
                q: "Why is an ontology more than a controlled vocabulary? Illustrate with one inference an ontology enables that a word list cannot.",
                marks: 7,
                outline: [
                  "A vocabulary fixes terms; an ontology adds structure and axioms.",
                  "Structure: subclasses, domains and ranges, property characteristics.",
                  "Axioms allow a reasoner to derive new, checkable facts.",
                  "Example: 'enrolledIn has domain Student, Student subclass-of Person' - data on john infers john is a Person.",
                  "A word list can name both terms but cannot support that derivation.",
                  "Hence ontology = vocabulary + logic.",
                ],
              },
            ],
          },
          {
            number: "2.2",
            title: "Ontology-based knowledge representation",
            body: [
              "Ontology-based knowledge representation splits into two boxes: the TBox (terminological box) holds the schema - classes, property definitions, axioms - while the ABox (assertion box) holds the instance data - this individual is a Student, this one is enrolled in that Course. The formal basis is description logic, a decidable fragment of first-order logic designed so that reasoning - checking subsumption, instance membership and consistency - terminates. That decidable-by-design choice is what separates ontological KR from general logic programming.",
              "The reasoning tasks to name: subsumption decides whether class A is a subclass of class B (is every Lecturer a Person?); instance checking decides whether individual a belongs to class A (is john a Presenter given his properties?); consistency checking decides whether the ABox contradicts the TBox (john cannot be both in disjoint classes). Inference flows through subclass axioms, domain and range constraints, and property characteristics - each stated axiom produces a family of derivable facts.",
              "A worked example in three lines: TBox says Student is a subclass of Person, and enrolledIn has domain Student and range Course. ABox says john a Student and john enrolledIn CS101. The reasoner derives john a Person (subclass propagation) and CS101 a Course (range constraint) - two facts nobody wrote, both now queryable. Write those two derivations as labelled steps; that is the full worked example the examiner wants.",
              "Exam framing: define TBox/ABox, name the three reasoning tasks with one purpose each, and close with the john example written as axiom -> assertion -> derivation - two derived facts, explicitly labelled as derived. Also state the open-world assumption - missing facts are unknown, not false - because it explains why non-derivation never proves negation, and it is the conceptual line that separates ontological reasoning from database intuition in the examiner's eyes.",
            ],
            bullets: [
              "TBox: the terminology - classes, property definitions, axioms (the schema).",
              "ABox: the assertions - individuals and the facts about them (the data).",
              "Reasoning tasks: subsumption, instance checking, consistency checking.",
              "Description logic: decidable fragment of first-order logic underlying OWL DL.",
              "Inference sources: subclass axioms, domain/range constraints, property characteristics.",
              "Open-world assumption: an unstated fact is unknown, not false - absence proves nothing.",
            ],
            diagram: {
              kind: "flow",
              title: "Building an ontology-based representation",
              caption: "Five steps from domain talk to a reasoner-checkable knowledge base.",
              steps: [
                { label: "Identify concepts", note: "interview the domain, list the nouns" },
                { label: "Define classes", note: "arrange the is-a hierarchy (TBox)" },
                { label: "Define properties", note: "with domain and range" },
                { label: "Add axioms", note: "restrictions, disjointness, cardinality" },
                { label: "Instantiate + reason", note: "ABox individuals; run subsumption and consistency" },
              ],
            },
            table: {
              caption: "Constructs, what they state, and the inference each produces.",
              headers: ["Construct", "What it states", "Inference produced"],
              rows: [
                ["subClassOf", "Student is a Person", "every student instance is a person instance"],
                ["domain", "enrolledIn has domain Student", "john enrolledIn X -> john is a Student"],
                ["range", "enrolledIn has range Course", "john enrolledIn X -> X is a Course"],
                ["disjointWith", "Man and Woman disjoint", "an instance of both is a contradiction"],
                ["cardinality", "a Session has exactly 1 room", "two-room session fails consistency"],
              ],
            },
            callout: {
              type: "warning",
              title: "Open world vs database intuition",
              body: "In ontology reasoning, not finding 'john is a Professor' does not mean john is not one - the fact may simply be absent. Databases close the world (missing = false); ontologies keep it open. Answers that apply database intuition to reasoning questions lose the conceptual mark.",
            },
            keyTerms: [
              { term: "TBox", definition: "The terminological part of a knowledge base - classes, properties and axioms." },
              { term: "ABox", definition: "The assertional part - individuals and the facts asserted about them." },
              { term: "Subsumption", definition: "Deciding whether one class is contained in another - the is-a check." },
              { term: "Description logic", definition: "A decidable logic family underlying OWL, balancing expressiveness with terminating reasoning." },
              { term: "Open-world assumption", definition: "Unstated facts are unknown rather than false - the ontological counterpart of closed-world databases." },
            ],
            examQuestions: [
              {
                q: "Explain ontology-based knowledge representation. Define TBox and ABox, list the reasoning tasks and work through one derivation.",
                marks: 7,
                outline: [
                  "TBox: schema - classes, properties, axioms.",
                  "ABox: data - individuals and asserted facts.",
                  "Reasoning tasks: subsumption, instance checking, consistency.",
                  "Description logic gives decidability - reasoning always terminates.",
                  "Worked example: Student subclass-of Person; enrolledIn domain Student, range Course.",
                  "john a Student, john enrolledIn CS101 -> derive john a Person, CS101 a Course.",
                  "State the open-world assumption and its consequence.",
                ],
              },
              {
                q: "Given 'Lecturer subClassOf Person', 'teaches domain Lecturer', 'teaches range Course', and the facts 'amrita teaches CS301' - derive everything the reasoner will infer.",
                marks: 7,
                outline: [
                  "amrita teaches CS301 (asserted).",
                  "Domain rule: amrita is a Lecturer.",
                  "Subclass rule: amrita is a Person.",
                  "Range rule: CS301 is a Course.",
                  "Nothing further follows - say so, with the open-world caveat.",
                  "Extra credit: if Lecturer and Student were disjoint and amrita a Student, the ABox would be inconsistent.",
                ],
              },
            ],
          },
          {
            number: "2.3",
            title: "RDF - the Resource Description Framework",
            body: [
              "RDF is the W3C's data model for the Semantic Web: every fact is a triple of subject, predicate and object, and every resource is named by a URI so statements from different documents can be joined mechanically. A set of triples is exactly a directed labelled graph - subjects and objects are nodes, predicates are edge labels - which is why RDF is the natural language for social network data: 'Alice knows Bob' is one edge.",
              "Serializations: N-Triples writes one triple per line for machines; Turtle adds prefixes and nesting for humans; RDF/XML embeds triples in XML documents; JSON-LD maps triples onto JSON for web developers. On top of the data model, RDF Schema contributes the vocabulary layer - rdfs:Class, rdfs:subClassOf, rdfs:domain, rdfs:range - enough for lightweight ontologies but not for restrictions; that gap is OWL's job (next section).",
              "A worked example: three triples - alice foaf:knows bob; bob ex:worksAt acme; alice ex:worksAt ibm. Draw them: two person nodes and one company node, two knows-type and works-at edges. Now a fourth document contributes only 'bob foaf:knows carol' - merging is set union on triples, and the graph grows without any schema negotiation, because URIs did the joining. Counting the merged graph: 4 nodes, 4 edges.",
              "Exam framing: define the triple model and the URI-joining power in two sentences, name the four serializations with one line each, convert four given sentences to triples - watch the compound one that needs a reified node - and draw the resulting graph with node and edge counts. Conversion plus drawing is the standard 7-mark structure, and the node count proves the merge-by-URI claim concretely; answers that skip the drawing lose the easiest mark on the paper.",
            ],
            bullets: [
              "Triple: subject, predicate, object - the atomic RDF statement.",
              "URIs name every resource, so independently published triples join mechanically.",
              "A triple set is a directed labelled graph - the natural form of a social network.",
              "Serializations: Turtle (human-friendly), N-Triples (one per line), RDF/XML, JSON-LD.",
              "RDF Schema adds classes, subClassOf, domain and range - the vocabulary layer.",
              "Merging documents = set union of triples; no schema negotiation needed.",
            ],
            diagram: {
              kind: "compare",
              title: "Relational rows vs RDF triples",
              caption: "Same facts, different joining mechanics - and the open world shows up here too.",
              left: {
                heading: "Relational tables",
                items: [
                  "Fixed schema per table",
                  "Rows joined by declared keys",
                  "Closed world: absent row = false",
                  "Integration = ETL and mapping work",
                ],
              },
              right: {
                heading: "RDF triples",
                items: [
                  "Schema-free; triples self-describing",
                  "Joins happen on shared URIs",
                  "Open world: absence = unknown",
                  "Integration = union of triple sets",
                ],
              },
            },
            codeExample: {
              language: "turtle",
              caption: "social.ttl - three people, two relationships, one typed literal",
              code: `@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ex:   <http://example.org/> .

ex:alice foaf:name  "Alice" ;
         foaf:knows ex:bob ;
         ex:worksAt ex:ibm .

ex:bob   foaf:name  "Bob" ;
         foaf:knows ex:carol ;
         ex:worksAt ex:acme .

# merged graph: 4 nodes, 4 edges - set union of triples
# ex:alice --foaf:knows--> ex:bob --foaf:knows--> ex:carol`,
            },
            callout: {
              type: "exam",
              title: "One sentence, one triple - and the exception",
              body: "'Alice works for ACME since 2020' is not one triple - the since needs either a reified statement node carrying the date or a qualifying node (an employment instance with start date). Converting compound sentences correctly is precisely what the RDF numerical tests.",
            },
            keyTerms: [
              { term: "Triple", definition: "The RDF atomic statement: subject, predicate, object." },
              { term: "URI", definition: "Global identifier naming every RDF resource, enabling mechanical joins across documents." },
              { term: "Turtle", definition: "A human-readable RDF serialization using prefixes and semicolon-continued subjects." },
              { term: "Blank node", definition: "A resource without a URI, local to one document - used for anonymous structures." },
              { term: "Reification", definition: "Making a statement itself a resource, so facts can carry dates, sources or confidence." },
            ],
            examQuestions: [
              {
                q: "Explain the RDF data model. Write the triple form of given sentences, name the serializations and draw the resulting graph.",
                marks: 7,
                outline: [
                  "Define triple: subject, predicate, object; URIs name resources.",
                  "Triple sets are directed labelled graphs - the social network connection.",
                  "Convert simple sentences: 'Alice knows Bob' -> alice foaf:knows bob.",
                  "Convert the compound one: 'works at ACME since 2020' needs a reified employment node.",
                  "Serializations: Turtle, N-Triples, RDF/XML, JSON-LD - one line each.",
                  "Draw the merged graph and count nodes and edges.",
                  "State set-union merging via shared URIs.",
                ],
              },
              {
                q: "How does RDF Schema extend RDF, and why is it not enough for full ontologies?",
                marks: 7,
                outline: [
                  "RDFS adds rdfs:Class, subClassOf, subPropertyOf.",
                  "Adds domain and range constraints on properties.",
                  "Supports lightweight inferences: subclass and domain/range propagation.",
                  "Missing: restrictions (someValuesFrom), cardinality, equivalence, disjointness.",
                  "Missing: property transitivity/symmetry declarations.",
                  "Hence OWL - the next layer - for full ontological expressiveness.",
                ],
              },
            ],
          },
          {
            number: "2.4",
            title: "OWL - the Web Ontology Language",
            body: [
              "OWL is the W3C ontology language layered over RDF Schema, adding the constructs that make reasoning genuinely useful: class expressions, restrictions, cardinalities, equivalences and disjointness, plus property characteristics - transitive, symmetric, functional, inverse. Its first version came in three species: OWL Lite (light classification hierarchies), OWL DL (full description-logic expressiveness with decidable reasoning) and OWL Full (maximal expressiveness, undecidable). OWL 2 refines these into profiles - EL for large biomedical ontologies, Q for queries, RL for rule engines.",
              "The constructs to know by name: owl:Class with rdfs:subClassOf; owl:ObjectProperty and owl:DatatypeProperty with domains and ranges; the characteristics owl:TransitiveProperty, owl:SymmetricProperty, owl:FunctionalProperty and owl:inverseOf; the restrictions owl:someValuesFrom (at least one), owl:allValuesFrom (only) and owl:hasValue; plus owl:equivalentClass, owl:disjointWith and cardinality bounds. Reasoners - Pellet, HermiT, FaCT++ - take the TBox plus ABox and check subsumption, instance membership and consistency, returning every derived fact; the constructs are the vocabulary of every OWL question, so this list repays memorization directly.",
              "A worked example: declare ancestorOf as a transitive object property, and assert parentOf(ram, laxman) and parentOf(laxman, lava). The reasoner derives ancestorOf(ram, lava) - a fact nobody wrote - in one propagation step. Now add disjoint classes Man and Woman and assert one individual in both: the reasoner reports inconsistency, catching the data error mechanically. Those two derivations are the standard OWL demonstration.",
              "Exam framing: 'OWL vs RDFS' wants the construct list plus the decidability story - OWL DL trades some expressiveness for guaranteed termination, OWL Full keeps everything and loses the guarantee, RDFS has neither restrictions nor characteristics. Quote the three species (Lite, DL, Full), name one reasoner, and demonstrate one transitive derivation; that combination covers definition, taxonomy and inference in a single answer, which is the shape examiners expect from the Unit II language question.",
            ],
            bullets: [
              "OWL layers over RDFS: restrictions, equivalences, disjointness, cardinalities, property characteristics.",
              "Species: OWL Lite, OWL DL (decidable), OWL Full (undecidable); OWL 2 profiles EL/Q/RL.",
              "Constructs: someValuesFrom, allValuesFrom, hasValue, equivalentClass, disjointWith.",
              "Property characteristics: transitive, symmetric, functional, inverseOf.",
              "Reasoners: Pellet, HermiT, FaCT++ - subsumption, instance checks, consistency.",
              "Transitivity demo: parentOf chains derive ancestorOf without writing it.",
            ],
            diagram: {
              kind: "matrix",
              title: "The OWL species by expressivity and guarantee",
              caption: "Expressivity rises to the right; the reasoning guarantee falls toward OWL Full.",
              axes: { x: "expressivity (low -> high)", y: "reasoning guarantee (basic -> full)" },
              quadrants: [
                { label: "OWL Lite", note: "light hierarchies and cardinality - cheap, decidable" },
                { label: "OWL DL", note: "full description-logic expressiveness, still decidable" },
                { label: "RDF Schema", note: "subsumption only - the baseline" },
                { label: "OWL Full", note: "maximal expressivity, undecidable - no termination guarantee" },
              ],
            },
            table: {
              caption: "OWL constructs with Turtle syntax and meaning.",
              headers: ["Construct", "Turtle syntax", "Meaning"],
              rows: [
                ["Transitive property", "ex:ancestorOf a owl:TransitiveProperty", "a->b, b->c imply a->c"],
                ["Symmetric property", "ex:collaboratesWith a owl:SymmetricProperty", "a->b implies b->a"],
                ["Inverse property", "ex:childOf owl:inverseOf ex:parentOf", "parentOf(x,y) implies childOf(y,x)"],
                ["Existential restriction", "ex:Student rdfs:subClassOf [ owl:someValuesFrom ex:Course ]", "every student studies some course"],
                ["Disjoint classes", "ex:Man owl:disjointWith ex:Woman", "no instance of both - else inconsistent"],
              ],
            },
            callout: {
              type: "warning",
              title: "OWL Full is undecidable",
              body: "In OWL Full a reasoner may run forever on some inputs - that is the price of maximal expressiveness. When a question asks you to justify a language choice, say 'we chose OWL DL because reasoning must terminate on production data'; that one clause is the design-judgment mark.",
            },
            keyTerms: [
              { term: "OWL DL", definition: "The description-logic species of OWL: full expressiveness with decidable, terminating reasoning." },
              { term: "Restriction", definition: "A class condition over property values - someValuesFrom, allValuesFrom, hasValue, cardinality." },
              { term: "Reasoner", definition: "A tool (Pellet, HermiT, FaCT++) computing subsumption, instance membership and consistency." },
              { term: "Decidability", definition: "The guarantee that reasoning always terminates with an answer - the line separating OWL DL from OWL Full." },
            ],
            examQuestions: [
              {
                q: "Explain OWL and its species. How does OWL extend RDF Schema, and what does decidability mean for reasoning?",
                marks: 7,
                outline: [
                  "OWL = ontology language over RDFS with restrictions, equivalence, disjointness, characteristics.",
                  "Species: Lite, DL, Full - expressivity rises, decidability lost in Full.",
                  "OWL 2 profiles: EL (large ontologies), Q (queries), RL (rules).",
                  "Construct list: someValuesFrom, allValuesFrom, cardinality, inverseOf, TransitiveProperty.",
                  "Decidability: reasoning terminates - the DL design contract.",
                  "Reasoners: Pellet, HermiT, FaCT++.",
                  "Contrast with RDFS: subclass and domain/range only.",
                ],
              },
              {
                q: "With ancestorOf declared transitive, and parentOf asserted for (ram, laxman) and (laxman, lava), what does the reasoner derive? Show the steps and state what else is needed for parentOf itself to chain.",
                marks: 7,
                outline: [
                  "parentOf(ram, laxman) and parentOf(laxman, lava) asserted.",
                  "If parentOf were subPropertyOf ancestorOf, both parentOf facts are ancestorOf facts.",
                  "Transitivity derives ancestorOf(ram, lava).",
                  "parentOf itself does not chain unless declared transitive - and biologically it is not.",
                  "With childOf inverseOf parentOf, also derive childOf(laxman, ram) and childOf(lava, laxman).",
                  "Conclusion: characteristics, not instances, carry the logical weight.",
                ],
              },
            ],
          },
          {
            number: "2.5",
            title: "Modelling and aggregating social network data: state-of-the-art representation",
            body: [
              "The state of the art in representing network data is a stack, not a single format: raw trace layers (logs, crawls, API dumps) feed storage layers (relational tables, graph databases, triple stores), which feed model layers (property graphs, multilayer graphs), which feed a semantic layer where ontologies attach meaning to nodes and edges. The syllabus's point is that modern practice combines them - a graph database for queries, an ontology for meaning, a matrix for fast math.",
              "The representation choices have precise tradeoffs. Adjacency matrices make centrality and spectral math fast but cost O(n^2) space - hopeless for a billion-node graph. Edge lists and adjacency lists cost O(n + m) and stream well, but neighbour queries scan. Property-graph databases (Neo4j-style: nodes and typed, attributed edges, indexed) give constant-time neighbourhood lookups and Cypher queries. Triple stores give schema-free merging and SPARQL. Multilayer representations keep several relations - chat, friendship, co-authorship - as parallel edges rather than collapsing them.",
              "A worked example: four students A-D with friendships AB, AC, BD, CD and chat edges AB, AD. As an adjacency matrix it is a 4x4 symmetric 0-1 block with 4 ones. As an edge list it is 4 lines. As a property graph each edge can carry weight and start-date attributes - which the matrix cannot. As triples it is 6 foaf:knows/chat statements a SPARQL query can filter by type. Same data, four costs and four query powers.",
              "Exam framing: name the layers of the stack, compare at least three representations with space complexity and best-serving query type, and finish with the 'same data, four forms' example counting nodes, edges and cells. The comparison table below is the structure to reproduce, and the closing judgement - representation choice follows the query pattern - is the line that converts a list into an analysis, which is where the final mark sits.",
            ],
            bullets: [
              "Stack: raw traces -> storage (relational, graph DB, triple store) -> graph models -> semantic layer.",
              "Adjacency matrix: O(n^2) space, fastest for centrality/spectral math.",
              "Edge/adjacency list: O(n+m) space, streams well, slower neighbour queries.",
              "Property graph DB: typed attributed edges, indexed lookups, Cypher queries.",
              "Triple store: schema-free merging, SPARQL - the semantic end of the stack.",
              "Multilayer graphs keep chat/friendship/co-authorship as parallel relations.",
            ],
            diagram: {
              kind: "layers",
              title: "The representation stack for social data",
              caption: "Index 0 is the top: meaning accumulates as you climb from raw traces to ontology.",
              layers: [
                { label: "Semantic layer", note: "OWL/FOAF ontologies attach meaning" },
                { label: "Model layer", note: "property graphs, multilayer graphs" },
                { label: "Storage layer", note: "graph DBs, triple stores, relational tables" },
                { label: "Raw trace layer", note: "crawls, API dumps, event logs" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "representations.py - one friendship set, four forms",
              code: `import networkx as nx

friends = [("A","B"), ("A","C"), ("B","D"), ("C","D")]
chats   = [("A","B"), ("A","D")]

# 1) adjacency matrix - fast math, O(n^2) space
M = nx.adjacency_matrix(nx.Graph(friends)).todense()

# 2) edge list - compact, streams
print(friends)

# 3) property graph - edges carry attributes
G = nx.Graph()
G.add_edge("A","B", relation="friend", since=2021)

# 4) triples - schema-free merging
triples = [(s, "knows", o) for s, o in friends]`,
            },
            callout: {
              type: "tip",
              title: "Choose by query pattern",
              body: "Centrality and spectral work love matrices; identity merging and schema-free joins love triple stores; local neighbourhood lookups love graph databases. Saying which representation fits which query is the application mark in every 'compare representations' question.",
            },
            keyTerms: [
              { term: "Adjacency list", definition: "Per-node list of neighbours - O(n+m) storage, the default compact form." },
              { term: "Property graph", definition: "Graph model with typed, attributed nodes and edges, as in Neo4j." },
              { term: "Triple store", definition: "A database of RDF triples queryable with SPARQL." },
              { term: "Multilayer network", definition: "Several parallel relations over the same nodes, kept separately rather than collapsed." },
            ],
            examQuestions: [
              {
                q: "Compare adjacency matrices, edge lists, graph databases and triple stores for representing social network data, with space costs and the queries each serves best.",
                marks: 7,
                outline: [
                  "Matrix: O(n^2) space; centrality and spectral math; unusable at web scale.",
                  "Edge/adjacency list: O(n+m); streaming and compact; scans for neighbourhoods.",
                  "Graph DB: typed attributed edges, indexed lookups, Cypher; operational queries.",
                  "Triple store: schema-free union merges, SPARQL; semantic integration.",
                  "Multilayer: keep parallel relations uncollapsed.",
                  "Worked example: 4 students as matrix, list, property graph, triples.",
                  "Conclusion: representation choice follows the query pattern.",
                ],
              },
              {
                q: "Why do web-scale social networks avoid the adjacency matrix? What do they use instead?",
                marks: 7,
                outline: [
                  "Matrix space is O(n^2) - a billion users need 10^18 cells.",
                  "Real graphs are sparse: density like 10^-6 makes most cells zero.",
                  "Adjacency lists/edge lists scale with edges O(n+m).",
                  "Distributed graph systems (Pregel-style) partition edge lists across machines.",
                  "Matrices remain useful on subgraphs for spectral and centrality math.",
                  "Hence: lists in storage, matrices on demand for local math.",
                ],
              },
            ],
          },
          {
            number: "2.6",
            title: "Ontological representation of social individuals (FOAF)",
            body: [
              "Representing a person ontologically means giving them a URI and typing them as an instance of a Person class with declared attributes. The FOAF vocabulary (Friend Of A Friend) is the standard: foaf:Person with foaf:name, foaf:mbox, foaf:mbox_sha1sum, foaf:homepage, foaf:img, foaf:interest and the social edge foaf:knows. FOAF profiles are RDF documents anyone can publish, which makes people first-class web resources rather than rows inside a platform.",
              "The hard problem is identity: the same human appears on many sites as many URIs. FOAF's solution is inverse functional properties - properties whose value uniquely identifies a person. foaf:mbox is inverse functional, so two profiles with the same mailbox are the same person; foaf:mbox_sha1sum gives the same power without publishing the raw email (a privacy decision in itself). The reasoner uses the IFP to infer owl:sameAs and merges the descriptions.",
              "A worked example: a blog profile says ex:p1 foaf:mbox_sha1sum 1a2b3c and a forum profile says ex:p2 foaf:mbox_sha1sum 1a2b3c. The sha1sum is an IFP, so the reasoner derives ex:p1 owl:sameAs ex:p2, and both profiles' properties - name, interests, knows edges - now describe one individual with the union of both descriptions. The merge steps: publish, parse, match IFP values, infer sameAs, union the properties; the merged person's degree is the sum of both profiles' ties, which is the number worth quoting in the answer.",
              "Exam framing: name five FOAF terms with their purpose, define inverse functional property in one sentence, and walk the two-profile merge in labelled steps ending with the union of descriptions. The privacy aside - sha1 exists so raw email need not be published - is the specific point that elevates the answer, because it shows the vocabulary was designed with privacy in mind even though the same mechanism later enables re-identification, the tension section 4.5 revisits.",
            ],
            bullets: [
              "foaf:Person is the class; name, mbox, mbox_sha1sum, homepage, img, interest are the attributes.",
              "foaf:knows is the social edge; profiles are publishable RDF documents.",
              "Identity problem: one human, many URIs across sites.",
              "Inverse functional property: value uniquely identifies the individual (mbox, mbox_sha1sum).",
              "Reasoner infers owl:sameAs from equal IFP values and merges descriptions.",
              "mbox_sha1sum exists precisely to avoid publishing raw email - privacy by design.",
            ],
            diagram: {
              kind: "cycle",
              title: "The FOAF profile lifecycle",
              caption: "Publishing and merging are continuous - the loop reruns as profiles update.",
              steps: [
                { label: "Publish", note: "a site exposes a FOAF profile" },
                { label: "Crawl", note: "aggregator fetches profiles" },
                { label: "Parse", note: "RDF extracted into a triple store" },
                { label: "Match", note: "IFP values (mbox_sha1sum) compared" },
                { label: "Merge", note: "sameAs inferred; descriptions unioned" },
              ],
            },
            table: {
              caption: "Core FOAF terms and their purposes.",
              headers: ["FOAF term", "Type", "Purpose"],
              rows: [
                ["foaf:Person", "class", "types the individual"],
                ["foaf:name", "datatype property", "display name"],
                ["foaf:mbox", "IFP object property", "mailbox - unique identifier (published openly)"],
                ["foaf:mbox_sha1sum", "IFP datatype property", "sha1 of the mailbox - identifier without exposing email"],
                ["foaf:knows", "object property", "social edge to another person"],
                ["foaf:interest", "object property", "topic the person is interested in"],
              ],
            },
            callout: {
              type: "warning",
              title: "An IFP is a re-identification channel",
              body: "The same property that merges profiles also links them to real identities - that is its job. Publishing a mbox_sha1sum lets anyone holding the raw email verify it against a profile. Section 4.5 returns to this: identity convenience and privacy risk are the same mechanism viewed from two sides.",
            },
            keyTerms: [
              { term: "FOAF", definition: "The Friend Of A Friend vocabulary for publishing machine-readable person profiles as RDF." },
              { term: "Inverse functional property", definition: "A property whose value uniquely identifies an individual, letting reasoners merge profiles." },
              { term: "owl:sameAs", definition: "The assertion that two URIs denote the same individual - the merge operator." },
              { term: "mbox_sha1sum", definition: "SHA-1 hash of a mailbox used as an identifier without publishing the email itself." },
            ],
            examQuestions: [
              {
                q: "Explain how FOAF represents social individuals. How does the reasoner merge two profiles of the same person, and what privacy design does mbox_sha1sum reflect?",
                marks: 7,
                outline: [
                  "foaf:Person with name, mbox, homepage, img, interest, knows.",
                  "Profiles are RDF documents with URIs - people as web resources.",
                  "Identity problem: one human, many site URIs.",
                  "IFP: equal mbox or mbox_sha1sum values imply owl:sameAs.",
                  "Merge steps: publish, crawl, parse, match, union properties.",
                  "mbox_sha1sum = hash identifier, avoiding raw-email publication.",
                  "Privacy aside: the same IFP enables re-identification.",
                ],
              },
              {
                q: "Two profiles carry mbox_sha1sum 1a2b3c and 1a2b3c; the first has knows-edges to two people, the second adds one interest. What does the merged individual look like?",
                marks: 7,
                outline: [
                  "IFP fires: profile1 owl:sameAs profile2.",
                  "Union of descriptions: one person with all name/interest/knows properties.",
                  "knows edges from both profiles now attach to the merged node.",
                  "The merged node has the interest the second profile contributed.",
                  "Degree of the merged individual = sum of both profiles' ties.",
                  "Caution: a wrong IFP match merges two different people - verify sources.",
                ],
              },
            ],
          },
          {
            number: "2.7",
            title: "Ontological representation of social relationships",
            body: [
              "A bare foaf:knows edge is coarse: it says a tie exists but not its kind, direction or weight. Ontological representation of relationships gives each tie a type from a relationship vocabulary (the RELATIONSHIP module: collaboratesWith, parentOf, childOf, employerOf, closeFriendOf, knowsOf), declares the property's logical characteristics, and can attach weight and validity intervals as annotations. The characteristics are where the reasoning power lives.",
              "The characteristics to know: symmetric (collaboratesWith - a->b implies b->a), asymmetric (parentOf, employerOf - direction carries meaning), transitive (ancestorOf, partOf - chains imply shortcuts), inverse pairs (parentOf inverseOf childOf), and functional or single-valued cases (hasSpouse under monogamy). Weights model tie strength; validFrom/validTo model temporality - a collaboration that ended is still in the graph but time-bounded, which is why temporal annotations beat deletion.",
              "A worked example: declare parentOf and childOf as inverses, and ancestorOf as transitive with parentOf as its subproperty. Assert parentOf(ram, laxman) and parentOf(laxman, lava). Derivations: childOf(laxman, ram) and childOf(lava, laxman) from the inverse; ancestorOf(laxman, lava) and ancestorOf(ram, lava) from transitivity plus subproperty - four facts from two assertions, none written by hand. Write each derivation beside its justifying characteristic; the justification, not the conclusion, is what the reasoning marks reward.",
              "Exam framing: contrast typed relationships with bare knows in one opening sentence, list the characteristics - symmetric, asymmetric, transitive, inverse - with one example property each, and run the family-tree derivation to its four derived facts. The contrast line - typing the edge changes what an agent can infer - is the conceptual mark, and the warning that knows is symmetric but never transitive closes the answer with the distinction examiners probe.",
            ],
            bullets: [
              "Typed ties: collaboratesWith, parentOf, employerOf, closeFriendOf replace bare knows.",
              "Symmetric: collaboratesWith - the edge reads the same both ways.",
              "Asymmetric: parentOf, employerOf - direction is meaningful.",
              "Transitive: ancestorOf, partOf - chains imply shortcuts.",
              "Inverse pairs: parentOf inverseOf childOf - one assertion, two edges.",
              "Weights and validity intervals model strength and time; temporal annotation beats deletion.",
            ],
            diagram: {
              kind: "fork",
              title: "One knows edge is too coarse - type it",
              caption: "Each branch adds logical power the bare edge cannot provide.",
              start: "A bare foaf:knows edge",
              branches: [
                { label: "Type it", outcome: "collaboratesWith vs parentOf - agents infer role-specific facts", good: true },
                { label: "Declare characteristics", outcome: "symmetric/asymmetric/transitive - reasoner derives the rest", good: true },
                { label: "Add weight and time", outcome: "strength and validity intervals - temporal analysis possible", good: true },
                { label: "Leave it bare", outcome: "knows-only graphs cannot distinguish mentor from kin", good: false },
              ],
            },
            codeExample: {
              language: "turtle",
              caption: "relations.ttl - characteristics doing the reasoning",
              code: `@prefix rel: <http://purl.org/vocab/relationship/> .
@prefix fam: <http://example.org/family#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

fam:childOf owl:inverseOf fam:parentOf .
fam:ancestorOf a owl:TransitiveProperty ;
               owl:propertyChainAxiom ( fam:parentOf fam:parentOf ) .

fam:ram    fam:parentOf fam:laxman .
fam:laxman fam:parentOf fam:lava .

# derived: childOf(laxman, ram), childOf(lava, laxman)
# derived: ancestorOf(ram, lava) via the chain axiom`,
            },
            callout: {
              type: "tip",
              title: "Characteristics, not instances, carry the logic",
              body: "Two assertions plus three declared characteristics yielded four derived facts. In exam derivations, always write the characteristic (inverse, transitive) beside the arrow - examiners mark the justification, not just the conclusion.",
            },
            keyTerms: [
              { term: "RELATIONSHIP vocabulary", definition: "An ontology module of typed social relations - collaboratesWith, parentOf, employerOf and kin." },
              { term: "Symmetric property", definition: "A property where a->b implies b->a, e.g. collaboratesWith." },
              { term: "InverseOf", definition: "Declaration that two properties are converses - parentOf and childOf." },
              { term: "Property chain axiom", definition: "An OWL 2 construct deriving a transitive-like result: parentOf o parentOf -> ancestorOf." },
            ],
            examQuestions: [
              {
                q: "Explain the ontological representation of social relationships. How do property characteristics enable inference, with a family-tree derivation?",
                marks: 7,
                outline: [
                  "Bare knows is coarse; typed relations carry kind, direction, weight, time.",
                  "Characteristics: symmetric, asymmetric, transitive, inverseOf - one example each.",
                  "Declare childOf inverseOf parentOf; ancestorOf transitive.",
                  "Assert parentOf(ram, laxman), parentOf(laxman, lava).",
                  "Derive childOf(laxman, ram), childOf(lava, laxman).",
                  "Derive ancestorOf(ram, lava) via chain or transitivity.",
                  "Close: characteristics turn two assertions into four derivable facts.",
                ],
              },
              {
                q: "Why is foaf:knows not transitive, and what does that imply for reasoning over friendship graphs?",
                marks: 7,
                outline: [
                  "My friend's friend is not automatically my friend - closure fails empirically.",
                  "knows is declared symmetric but not transitive.",
                  "Hence a reasoner will never chain knows edges into derived friendships.",
                  "Analysts who treat knows as transitive invent friendships that do not exist.",
                  "Where chaining is meaningful, declare a separate transitive property (ancestorOf, partOf).",
                  "Design lesson: transitivity is a modelling decision, not a default.",
                ],
              },
            ],
          },
          {
            number: "2.8",
            title: "Aggregating and reasoning with social network data; advanced representations",
            body: [
              "Aggregation merges social data from many heterogeneous sources into one coherent graph, and reasoning then extends it with ontology-derived facts. Four challenges dominate aggregation: identity resolution (the same person under many URIs - solved with IFPs and owl:sameAs), schema heterogeneity (site A says buddyOf, site B says knows - solved with subproperty mapping), provenance (which source to trust when facts conflict), and temporal alignment (facts that were true at different times).",
              "A worked example runs the pipeline: crawl Alice's blog FOAF profile (3 knows edges) and her forum profile (2 buddyOf edges). Normalize by mapping forum:buddyOf as a subproperty of foaf:knows; align identities via a shared mbox_sha1sum; union the triples - now 5 edges over one individual. Reasoning adds a derived collaboratesWith edge where two co-authored documents exist, because collaboratesWith was declared symmetric and the co-authorship evidence matched its domain. Total: 5 asserted edges, 1 derived.",
              "Advanced representations extend the same graph for the cases plain triples cannot hold. Temporal or snapshot graphs keep one graph per time window so change can be measured (Unit III's evolution extraction). Multilayer or multiplex graphs keep chat, friendship and co-authorship as parallel layers over shared nodes. Signed networks carry +1 trust and -1 distrust edges. Provenance-annotated graphs carry the source on every triple, so conflicting facts can be adjudicated rather than silently overwritten.",
              "Exam framing: the answer is the five-stage pipeline (harvest, normalize, align, reason, serve) plus one named challenge per stage with its defence, then two or three advanced representations with the problem each solves - temporal for change, multilayer for parallel relations, signed for trust. The pipeline diagram below is the standard drawing, and the knows-is-not-transitive warning is the closing line that separates careful answers from careless ones.",
            ],
            bullets: [
              "Pipeline: harvest -> normalize (schema mapping) -> align identities (IFPs) -> reason -> serve.",
              "Identity resolution: inverse functional properties + owl:sameAs merge the same human.",
              "Schema heterogeneity: map site vocabularies as subproperties of a shared one.",
              "Provenance: keep the source on each triple to adjudicate conflicts.",
              "Advanced: temporal snapshot graphs, multilayer/multiplex, signed (+/-) networks.",
              "foaf:knows is not transitive - only declared-transitive properties chain in reasoning.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Aggregation and reasoning pipeline",
              caption: "Five stages from many sources to one coherent, reasoned graph.",
              stages: [
                { label: "Harvest", note: "crawls, APIs, FOAF profiles" },
                { label: "Normalize", note: "map vocabularies onto one ontology" },
                { label: "Align", note: "IFP matching -> owl:sameAs" },
                { label: "Reason", note: "subsumption, characteristics, consistency" },
                { label: "Serve", note: "SPARQL endpoint / API over the merged graph" },
              ],
            },
            table: {
              caption: "Aggregation challenges and their defences.",
              headers: ["Challenge", "Cause", "Defence"],
              rows: [
                ["Identity resolution", "one human, many URIs", "inverse functional properties, owl:sameAs"],
                ["Schema heterogeneity", "site-specific vocabularies", "subproperty/eqivalentClass mapping"],
                ["Provenance conflicts", "sources disagree", "keep source per triple; trust-weighted merge"],
                ["Temporal alignment", "facts true at different times", "validity intervals, snapshot graphs"],
                ["Scale", "many sources, many triples", "distributed triple stores, selective crawling"],
              ],
            },
            callout: {
              type: "exam",
              title: "knows is not transitive - say it",
              body: "The classic reasoning slip is chaining knows edges as if friendship were transitive. In any aggregation-and-reasoning answer, state explicitly that only declared-transitive properties (ancestorOf, collaboratesWith in some designs) chain - the declaration is what licenses the inference.",
            },
            keyTerms: [
              { term: "Aggregation", definition: "Merging social data from multiple sources into one coherent graph." },
              { term: "Identity resolution", definition: "Determining which URIs denote the same real person, via IFPs and sameAs." },
              { term: "Multiplex network", definition: "A multilayer graph keeping parallel relations over the same nodes." },
              { term: "Signed network", definition: "A graph whose edges carry positive (trust) or negative (distrust) signs." },
              { term: "Provenance", definition: "The recorded source of each fact, enabling conflict adjudication." },
            ],
            examQuestions: [
              {
                q: "Explain the aggregation of social network data from multiple sources: the pipeline, the challenges and their defences, and one reasoning outcome.",
                marks: 7,
                outline: [
                  "Pipeline: harvest -> normalize -> align identities -> reason -> serve.",
                  "Identity resolution via IFPs and owl:sameAs.",
                  "Schema mapping: buddyOf as subproperty of foaf:knows.",
                  "Provenance kept per triple to adjudicate conflicts.",
                  "Worked numbers: 3 blog edges + 2 forum edges -> 5-edge merged individual.",
                  "Reasoning adds a symmetric collaboratesWith from co-authorship evidence.",
                  "knows is not transitive - no friendship chaining.",
                ],
              },
              {
                q: "Write short notes on advanced representations of social network data: temporal graphs, multilayer networks and signed networks.",
                marks: 7,
                outline: [
                  "Temporal/snapshot graphs: one graph per window; change and evolution measurable.",
                  "Multilayer/multiplex: chat, friendship, co-authorship as parallel layers over shared nodes.",
                  "Signed networks: +1 trust, -1 distrust; enable trust propagation (Unit IV).",
                  "Provenance-annotated triples: source carried on facts.",
                  "Each solves a failure of the plain graph: forgetting time, collapsing relations, losing polarity.",
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
      title: "Extraction and Mining Communities in Web Social Networks",
      summary:
        "Unit III is the unit of structure discovery: extracting the evolution of web communities from series of web archives, what a community is and its types, detecting communities in social networks, evaluating the communities found, the method families for detection and mining, the applications, tools and infrastructures that make mining practical, and decentralized online social networks with multi-relational characterization of dynamic communities.",
      chapter: {
        number: "03",
        title: "Finding and Following Communities",
        intro:
          "Unit III covers extracting web community evolution from web archives, the definition of community, detecting communities, evaluating communities, methods for community detection and mining, applications and tools, and decentralized online social networks with multi-relational dynamic characterization.",
        inOneBreath:
          "A community is a set of nodes more densely connected inside than outside - formally Radicchi's strong community, where each member's internal degree exceeds its external degree. Detection runs a pipeline - clean, build, choose granularity, detect, validate - using method families like Girvan-Newman edge betweenness, Louvain modularity optimization, spectral partitioning and label propagation. Evaluation leans on modularity Q, conductance and external NMI, with Q above 0.3 marking significant structure. Web archives turn snapshot series into community evolution, tools from NetworkX to Gephi make mining practical, and decentralized OSNs plus multilayer, dynamic graphs define the modern frontier.",
        sections: [
          {
            number: "3.1",
            title: "Extracting the evolution of Web communities from a series of Web archives",
            body: [
              "Web archives store periodic crawls of the same web regions - the Internet Archive is the canonical example - and the syllabus's first problem is turning that series into history: how did the communities on those pages form, persist, merge and die? The method is to build one graph per snapshot and compare the series, treating communities as objects that persist through time while their membership churns.",
              "The pipeline: normalize URLs (redirects, www prefixes, trailing slashes) so the same site is always the same node; extract pages and links per snapshot into one graph each; detect communities in each snapshot independently; align communities across snapshots by membership overlap; and characterize the events - birth, growth, shrinkage, merge, split, death. Alignment needs a similarity rule, and the standard one is Jaccard overlap between member sets.",
              "A worked example: three annual snapshots of a hobby-site cluster. Snapshot 1 finds community X of 12 URLs; snapshot 2 shares 9 of them (Jaccard 9/15 = 0.60 with the union) plus 3 new members; snapshot 3 keeps 8 of those 9 (Jaccard 0.73). Conclusion: a stable core of 8-9 persistent sites carries the community while roughly a quarter of the periphery churns each year - the persistence number is the finding.",
              "Exam framing: give the pipeline in five labelled stages, define the alignment similarity (Jaccard, intersection over union), and quote the worked persistence arithmetic - 12 members, 9 kept, 3 new, Jaccard 0.60. The URL-normalization warning - same site must be one node - is the practical mark, because every phantom merge and split in an evolution study traces back to skipping it; say so in one closing line.",
            ],
            bullets: [
              "Web archive: periodic crawls of the same region - snapshots t1..tk.",
              "Pipeline: normalize URLs -> extract links -> graph per snapshot -> detect per snapshot -> align and characterize.",
              "Alignment similarity: Jaccard overlap of community member sets across snapshots.",
              "Events: birth, growth, shrinkage, merge, split, death.",
              "Finding shape: a stable core persists while periphery churns.",
              "URL normalization decides identity - do it before any comparison.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From archive series to evolution report",
              caption: "Five stages; alignment is the step that turns many snapshots into one history.",
              stages: [
                { label: "Snapshot crawls", note: "t1, t2, ..., tk" },
                { label: "Extract links", note: "pages -> nodes, links -> edges" },
                { label: "Graph per snapshot", note: "one graph per time window" },
                { label: "Detect + align", note: "communities matched by Jaccard overlap" },
                { label: "Evolution report", note: "birth, merge, split, death events" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "evolution.py - aligning one community across two snapshots",
              code: `c_2019 = {"a.org", "b.org", "c.org", "d.org", "e.org",
          "f.org", "g.org", "h.org", "i.org", "j.org",
          "k.org", "l.org"}                     # 12 members
c_2020 = {"a.org", "b.org", "c.org", "d.org", "e.org",
          "f.org", "g.org", "h.org", "m.org", "n.org",
          "o.org"}                              # 9 kept + 3 new

inter = c_2019 & c_2020          # 9 persistent members
union = c_2019 | c_2020          # 15 total distinct sites
print(len(inter) / len(union))   # Jaccard 0.60 -> same community persists`,
            },
            callout: {
              type: "tip",
              title: "Normalize before you compare",
              body: "http://site.org, http://www.site.org and http://site.org/ are three crawls of one site. Until redirects, www prefixes and trailing slashes are canonicalized, alignment will report phantom merges and splits - the most common false finding in archive-based evolution studies.",
            },
            keyTerms: [
              { term: "Web archive", definition: "A periodic crawl of web pages preserved over time, giving snapshot series." },
              { term: "Community persistence", definition: "The degree to which the same member set recurs across snapshots." },
              { term: "Jaccard overlap", definition: "|intersection| / |union| - the standard similarity for aligning communities." },
              { term: "Evolution event", definition: "Birth, growth, shrinkage, merge, split or death of a community across snapshots." },
            ],
            examQuestions: [
              {
                q: "Explain how the evolution of web communities can be extracted from a series of web archives. Give the pipeline and the events you would report.",
                marks: 7,
                outline: [
                  "Archive series: one crawl per snapshot t1..tk.",
                  "Normalize URLs so each site is exactly one node.",
                  "Build a graph per snapshot; detect communities per snapshot.",
                  "Align communities across snapshots by Jaccard member overlap.",
                  "Report events: birth, growth, merge, split, death.",
                  "Worked numbers: 12 -> 9 kept + 3 new -> Jaccard 0.60 persistence.",
                  "Conclusion: stable core with churning periphery is the typical finding.",
                ],
              },
              {
                q: "A community has 12 members in snapshot 1 and 11 in snapshot 2, with 9 members common. Compute the overlap and state whether it is the same community.",
                marks: 7,
                outline: [
                  "Intersection = 9; union = 12 + 11 - 9 = 14.",
                  "Jaccard = 9/14 = 0.64.",
                  "Above the usual 0.3-0.5 alignment threshold -> same community persists.",
                  "2 members died, 2 were born - mild churn around a stable core.",
                  "Below threshold would indicate a split or a new community.",
                ],
              },
            ],
          },
          {
            number: "3.2",
            title: "Communities: definitions and types",
            body: [
              "The density definition: a community is a set of nodes whose internal connections are more frequent, heavier or denser than their connections to the rest of the graph. Radicchi's formalizations make it testable per node - in a strong community every member has more neighbours inside than outside; in a weak community the same holds summed over the group, allowing individuals to violate while the whole holds. Both tests are one-line checks on degrees, which is why they appear in exams.",
              "Types matter because structure differs by domain. Social communities are friendship circles - mutually known people. Web communities are sets of pages whose hyperlinks concentrate inside (topic clusters on the early web); the bipartite formulation - users on one side, items or groups on the other - defines communities as co-membership patterns. Affiliation communities (people sharing an employer or class) and interaction communities (people who actually communicate) can disagree sharply, and the disagreement is itself a finding.",
              "A worked example: Zachary's karate club, the 34-node standard dataset. Counting internal versus cross edges, the graph splits into two groups - one clustering around the administrator, one around the instructor - and in each group most members' internal degree exceeds their external degree, satisfying the weak-community test. The real club did split into exactly these two factions, making the dataset the canonical worked example for detection and evaluation.",
              "Exam framing: give the density definition verbatim, state the strong and weak community tests as degree inequalities, and enumerate three types with one structural sentence each - social circles, hyperlink page sets, bipartite co-membership. The karate-club sentence - split predicted before it happened - is the memorable proof that the definition has teeth, and adding the strong-versus-weak distinction (individuals may violate in the weak case) is the precision mark.",
            ],
            bullets: [
              "Density definition: a community is internally dense relative to its external ties.",
              "Strong community (Radicchi): every member's internal degree exceeds its external degree.",
              "Weak community: the sum over members satisfies the same inequality - individuals may violate.",
              "Social communities: friendship circles of mutually known people.",
              "Web communities: page sets with concentrated hyperlinks; bipartite user-item co-membership.",
              "Affiliation vs interaction communities can disagree - and the gap is a finding.",
            ],
            diagram: {
              kind: "matrix",
              title: "Cohesion against separation defines community quality",
              caption: "The true community sits top-right: dense inside, few ties out.",
              axes: { x: "external separation (low -> high)", y: "internal cohesion (low -> high)" },
              quadrants: [
                { label: "Open club", note: "dense inside, many ties out - a hub of a larger network" },
                { label: "True community", note: "dense inside, few ties out - the ideal case" },
                { label: "Random mass", note: "no cohesion, no separation - no structure found" },
                { label: "Loose periphery", note: "few internal ties, weakly attached outliers" },
              ],
            },
            table: {
              caption: "Community types and their structures.",
              headers: ["Type", "Structure", "Example"],
              rows: [
                ["Social", "mutually-known people, dense ties", "a school friend circle"],
                ["Web", "hyperlink-concentrated page set", "a topic cluster of sites"],
                ["Bipartite co-membership", "users x items/groups projected", "Facebook groups"],
                ["Affiliation", "shared employer/class/team", "department staff"],
                ["Interaction", "actual communication edges", "a project chat group"],
              ],
            },
            callout: {
              type: "exam",
              title: "Quote the definition, then the test",
              body: "Write the density definition in one sentence, then Radicchi's strong and weak tests as degree inequalities. The pair - prose definition plus formal test - is exactly what the definition marks award; stopping at 'a group of friends' earns half.",
            },
            keyTerms: [
              { term: "Strong community", definition: "Radicchi's per-node test: each member has more internal than external neighbours." },
              { term: "Weak community", definition: "The group-sum version of the same test - individuals may violate if the total holds." },
              { term: "Bipartite community", definition: "Structure defined on two node types (users, items) and projected onto one." },
              { term: "Karate club network", definition: "Zachary's 34-node dataset whose detected split matched the club's real fission." },
            ],
            examQuestions: [
              {
                q: "Define a community in a social network. Distinguish strong and weak communities and describe three types of communities with examples.",
                marks: 7,
                outline: [
                  "Density definition: internal connectivity exceeds external connectivity.",
                  "Strong community: every member's internal degree > external degree.",
                  "Weak community: the member-sum satisfies the inequality - tolerant of exceptions.",
                  "Type: social communities - friendship circles.",
                  "Type: web communities - hyperlink-concentrated page sets.",
                  "Type: bipartite/affiliation - co-membership of users in groups.",
                  "Karate club as the worked instance: split predicted before it happened.",
                ],
              },
              {
                q: "Can affiliation communities and interaction communities disagree? Give an example and what the disagreement reveals.",
                marks: 7,
                outline: [
                  "Yes - same employer (affiliation) but little communication (interaction).",
                  "Example: two departments in one company; one collaborates daily, the other barely.",
                  "Affiliation graph shows one community; interaction graph shows two.",
                  "The gap exposes organizational silos or wasted co-location.",
                  "Analysis lesson: declare which relation defines 'community' before mining.",
                ],
              },
            ],
          },
          {
            number: "3.3",
            title: "Detecting communities in social networks",
            body: [
              "Community detection is the unsupervised partitioning of a graph so that densely connected groups emerge without labels - there is no training set, only structure. The syllabus separates detection (this section's pipeline) from the method families (section 3.5); what belongs here is the discipline around the algorithm: what graph you build, what granularity you demand, and how you check the result before reporting it. Each of those three decisions can silently change the communities found, which is why the pipeline precedes any algorithm discussion.",
              "The pipeline in five steps: preprocess (deduplicate actors, merge aliases, remove bots), build the graph (weighted or binary, directed or not, one relation or many), choose granularity (how many communities the task needs - a resolution decision), run a detection algorithm, and validate (metrics of 3.4, plus a sanity read of the biggest and smallest communities). Every step is a marked checkpoint because each can silently change the answer.",
              "A worked example on Zachary's karate club (34 nodes, 78 edges): run the Girvan-Newman divisive procedure - compute edge betweenness, remove the highest edge (the administrator-instructor tie, betweenness 48), recompute, remove again - and after the second removal the graph falls into exactly two components of 17 and 17 members matching the real club fission. The steps, not just the outcome, are the exam content.",
              "Exam framing: name the five pipeline stages, then walk one detection on the karate graph with the betweenness numbers - top edge 48, two removals, two 17-member components matching the real split. State whether weights were used: the binary friendship graph and the interaction-weighted graph can detect different communities, and examiners reward whoever notices and declares the choice. Close with the validation step - run modularity before reporting anything.",
            ],
            bullets: [
              "Detection = unsupervised partitioning; no labels, structure emerges from edges alone.",
              "Pipeline: preprocess -> build graph -> choose granularity -> detect -> validate.",
              "Granularity is a resolution decision - how many communities the task needs.",
              "Karate club: remove top-betweenness edge (48), then next - two 17-member factions appear.",
              "Weights matter: interaction-weighted graphs can detect different communities than binary ones.",
              "Validation always follows detection - metrics in 3.4.",
            ],
            diagram: {
              kind: "flow",
              title: "The detection pipeline",
              caption: "Each stage can change the answer - declare your choices.",
              steps: [
                { label: "Preprocess", note: "merge aliases, drop bots" },
                { label: "Build graph", note: "weighted? directed? which relation?" },
                { label: "Choose granularity", note: "resolution: how many groups" },
                { label: "Run detector", note: "GN, Louvain, spectral, LPA" },
                { label: "Validate + refine", note: "modularity, conductance, sanity read" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "detect.py - first split of the karate club by edge betweenness",
              code: `import networkx as nx
from networkx.algorithms.community import girvan_newman

G = nx.karate_club_graph()               # 34 nodes, 78 edges
comp = next(girvan_newman(G))            # first divisive split
sizes = sorted(len(c) for c in comp)
print(sizes)                             # [17, 17] - the real fission

# the removed edge pair carries the two highest betweenness values`,
            },
            callout: {
              type: "tip",
              title: "Declare your graph before your algorithm",
              body: "'Which graph did you detect on?' decides everything: the binary friendship graph and the interaction-weighted graph of the same people can yield different partitions. Answers that state weighted/binary, directed/undirected and single/multi-relational up front read as practitioner work, not recitation.",
            },
            keyTerms: [
              { term: "Community detection", definition: "Unsupervised partitioning of a graph into densely connected groups." },
              { term: "Granularity", definition: "The resolution demanded of a detection - how many communities the task expects." },
              { term: "Edge betweenness", definition: "The fraction of shortest paths crossing an edge - the divisive criterion of Girvan-Newman." },
              { term: "Karate club network", definition: "Zachary's 34-node, 78-edge dataset - the standard worked example." },
            ],
            examQuestions: [
              {
                q: "Describe the pipeline for detecting communities in a social network and demonstrate it on the karate club dataset.",
                marks: 7,
                outline: [
                  "Preprocess: merge aliases, drop automated accounts.",
                  "Build: state weighted/binary, directed/undirected, single/multi-relation.",
                  "Choose granularity: how many communities the task needs.",
                  "Run a detector - Girvan-Newman divisive on the karate graph.",
                  "Highest-betweenness edge is the admin-instructor tie (48).",
                  "After two removals: two 17-member components matching the real split.",
                  "Validate with modularity/conductance before reporting.",
                ],
              },
              {
                q: "Why can two valid detectors produce different communities on the same graph? What should an analyst report?",
                marks: 7,
                outline: [
                  "Different objective functions (betweenness vs modularity) prefer different splits.",
                  "Different granularity settings change the number of communities.",
                  "Weighted vs binary edges change the strength structure.",
                  "Randomized algorithms (LPA) vary across runs.",
                  "Report: graph construction, algorithm, parameters, and evaluation metrics.",
                  "Consensus across methods increases confidence in the found structure.",
                ],
              },
            ],
          },
          {
            number: "3.4",
            title: "Evaluating communities",
            body: [
              "Evaluation asks whether detected structure is real rather than algorithmic artefact. Internal validation uses only the graph: modularity Q compares within-community edge fraction to its random expectation; conductance measures the fraction of a community's edge volume leaving it; internal density and cut ratio round out the family. External validation uses ground truth when it exists - normalized mutual information (NMI) and adjusted Rand index compare a detected partition against known labels.",
              "Modularity deserves the formula. Q = sum over communities of (e_ii - a_i^2), where e_ii is the fraction of edges inside community i and a_i the fraction of edge-ends attached to it. Q = 0 is indistinguishable from random wiring; above roughly 0.3 indicates significant community structure; around 0.5 is excellent; above 0.8 is rare and suspicious. Its known weakness is the resolution limit - communities smaller than a scale set by total edge count can be hidden inside larger ones.",
              "A worked example: eight edges; community A has 4 internal edges and one cut edge, B has 3 internal and the same cut edge. Then e_A = 4/8 = 0.5, e_B = 3/8 = 0.375, and a_A = 9/16, a_B = 7/16 by edge-ends. Q = (0.5 + 0.375) - (0.5625^2 + 0.4375^2) = 0.875 - 0.508 = 0.367 - a meaningful split, though not a spectacular one. Substituting into the written formula is the whole exercise.",
              "Exam framing: write the Q formula, compute one worked instance with every substitution visible, quote the interpretation bands (0 random / 0.3 significant / 0.5 excellent), and name the resolution limit with one sentence on why small communities vanish. If labels exist, add NMI as the external check - internal plus external together is the complete answer, and pairing both is what the 14-mark evaluation variant explicitly rewards.",
            ],
            bullets: [
              "Internal metrics: modularity Q, conductance, cut ratio, internal density.",
              "Modularity: Q = sum (e_ii - a_i^2); random wiring gives Q ~ 0.",
              "Bands: Q > 0.3 significant, ~0.5 excellent, > 0.8 rare.",
              "Resolution limit: modularity misses communities below a scale set by total edge count.",
              "External metrics: NMI and adjusted Rand index against ground truth.",
              "Stability under node/edge perturbation is a third, cheap check.",
            ],
            diagram: {
              kind: "compare",
              title: "Internal vs external evaluation",
              caption: "One needs no labels but can fool itself; the other needs labels and closes the loop.",
              left: {
                heading: "Internal validation",
                items: [
                  "Modularity Q, conductance, density",
                  "No ground truth required",
                  "Risks: resolution limit, degenerate splits",
                  "Cheap - computed from the graph alone",
                ],
              },
              right: {
                heading: "External validation",
                items: [
                  "NMI / adjusted Rand index vs labels",
                  "Needs benchmark or real ground truth",
                  "LFR synthetic graphs supply known communities",
                  "Confirms structure the internal scores missed",
                ],
              },
            },
            table: {
              caption: "Evaluation metrics, formulas and caveats.",
              headers: ["Metric", "Formula / scale", "Good value", "Caveat"],
              rows: [
                ["Modularity Q", "sum (e_ii - a_i^2), [-0.5, 1]", "> 0.3", "resolution limit hides small groups"],
                ["Conductance", "cut volume / total volume", "low", "favours small, tight sets"],
                ["Internal density", "intra edges / possible", "high", "ignores external ties"],
                ["Cut ratio", "crossing edges / |community|", "low", "size-sensitive"],
                ["NMI", "mutual info, normalized [0,1]", "near 1", "needs ground truth"],
              ],
            },
            callout: {
              type: "exam",
              title: "Write Q, substitute, interpret",
              body: "The marks split three ways: the formula, the arithmetic, and the interpretation bands. Most answers lose the third - always end with 'Q = 0.37, above the 0.3 threshold, so the split is significant but not exceptional'.",
            },
            keyTerms: [
              { term: "Modularity (Q)", definition: "Within-community edge fraction minus its random expectation; the standard internal quality score." },
              { term: "Conductance", definition: "Fraction of a community's edge volume crossing its boundary - lower is more separated." },
              { term: "NMI", definition: "Normalized mutual information between detected and ground-truth partitions." },
              { term: "Resolution limit", definition: "Modularity's structural blindness to communities smaller than an edge-count-determined scale." },
            ],
            examQuestions: [
              {
                q: "Define modularity. Compute Q for a split of an 8-edge graph where community A has 4 internal edges and B has 3, with one edge crossing, and interpret the result.",
                marks: 7,
                outline: [
                  "Q = sum over communities of (e_ii - a_i^2).",
                  "e_A = 4/8 = 0.5; e_B = 3/8 = 0.375.",
                  "Edge-ends: a_A = 9/16 = 0.5625; a_B = 7/16 = 0.4375.",
                  "Q = 0.875 - (0.316 + 0.191) = 0.367.",
                  "Interpretation: above 0.3 -> significant structure; below 0.5 -> ordinary.",
                  "Mention the resolution limit as Q's known weakness.",
                ],
              },
              {
                q: "When ground truth is available, how do you evaluate a detected partition? Define NMI and what a low value indicates.",
                marks: 7,
                outline: [
                  "Compare detected partition with known labels.",
                  "NMI: mutual information between partitions, normalized to [0, 1].",
                  "NMI ~ 1: detected structure matches truth; ~ 0: independent.",
                  "Low NMI = detector found different structure - or truth is weak.",
                  "Adjusted Rand index is the chance-corrected alternative.",
                  "Report both internal (Q) and external (NMI) for a complete evaluation.",
                ],
              },
            ],
          },
          {
            number: "3.5",
            title: "Methods for community detection and mining",
            body: [
              "Four method families cover the syllabus. Divisive methods (Girvan-Newman) compute edge betweenness, remove the top edge, and repeat, tracking how components form - accurate but O(m^2 n), unusable at web scale. Modularity optimization (Louvain) moves nodes to neighbour communities while Q improves, then aggregates communities into supernodes and repeats - near-linear per pass and hierarchical, but subject to modularity's resolution limit. Spectral methods partition on the sign of the Laplacian's Fiedler vector - principled for two-way splits, costly for many.",
              "Local methods complete the set: label propagation assigns random labels, then each node adopts the majority label of its neighbours, converging in a few sweeps at O(m) cost - fast but unstable across runs. Clique percolation builds communities from adjacent k-cliques and naturally yields overlapping memberships - the right choice when actors belong to several groups at once (a person in family, office and football communities). Choosing the family is a complexity-versus-overlap-versus-stability decision.",
              "A worked example of the spectral idea: a 6-node graph of two triangles joined by one bridge edge. Its Laplacian's second eigenvector takes one sign on the first triangle's nodes and the opposite sign on the second's. Reading the sign per node - (+,+,+, -,-,-) - assigns the two communities in one eigendecomposition, no iteration. That sign-reading trick is the examinable core of spectral partitioning.",
              "Exam framing: a 14-mark question compares all four families - for each give the criterion, one-line mechanics, complexity and weakness, then close with the selection rule (scale, overlap need, stability). The bullet table plus the fork diagram below is the structure to reproduce, and the karate/GN and triangle/spectral examples are the two worked instances to cite; one worked instance per family, even in outline, is what turns a comparison into an examined answer.",
            ],
            bullets: [
              "Divisive (Girvan-Newman): remove top edge-betweenness repeatedly; accurate, O(m^2 n) - slow.",
              "Modularity (Louvain): greedy node moves + graph aggregation; near-linear, hierarchical, resolution-limited.",
              "Spectral: Fiedler vector signs split the graph; principled two-way, eigendecomposition cost.",
              "Label propagation: majority-neighbour labels until stable; O(m), fast, run-unstable.",
              "Clique percolation: adjacent k-cliques merge; overlapping communities naturally.",
              "Choice = complexity vs overlap vs stability; web scale pushes to Louvain/LPA.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a detection family",
              caption: "Each branch trades cost, overlap capability and stability differently.",
              start: "Detection need",
              branches: [
                { label: "Highest accuracy, small graph", outcome: "Girvan-Newman divisive - O(m^2 n), exact betweenness removal", good: true },
                { label: "Web scale, hierarchical", outcome: "Louvain modularity - near-linear, beware resolution limit", good: true },
                { label: "Two-way global split", outcome: "spectral Fiedler vector - sign reading assigns groups", good: true },
                { label: "Overlapping memberships", outcome: "clique percolation - adjacent k-cliques", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "methods.py - Louvain-style greedy modularity communities",
              code: `import networkx as nx
from networkx.algorithms.community import greedy_modularity_communities

G = nx.karate_club_graph()
comms = greedy_modularity_communities(G)
print(len(comms), [len(c) for c in comms])
# e.g. 3 communities: sizes [17, 11, 6] - hierarchical levels available
# compare with girvan_newman's 2-way split and evaluate with modularity`,
            },
            callout: {
              type: "warning",
              title: "Louvain hides small groups",
              body: "Modularity optimization carries the resolution limit: a 3-node clique inside a big community can stay buried because merging it raises Q. If an exam answer must explain why an algorithm missed an obvious small cluster, 'modularity resolution limit' is the expected phrase.",
            },
            keyTerms: [
              { term: "Girvan-Newman", definition: "Divisive detection by repeated removal of the highest edge-betweenness edge." },
              { term: "Louvain method", definition: "Greedy modularity optimization with graph aggregation - near-linear, hierarchical." },
              { term: "Fiedler vector", definition: "The Laplacian's second eigenvector; its signs give a spectral two-way partition." },
              { term: "Label propagation", definition: "Near-linear detection where nodes adopt the majority label of their neighbours." },
              { term: "Clique percolation", definition: "Communities built from adjacent k-cliques; yields overlapping membership." },
            ],
            examQuestions: [
              {
                q: "Explain the main methods for community detection - divisive, modularity optimization, spectral and label propagation - comparing criteria, complexity and weaknesses.",
                marks: 14,
                outline: [
                  "Girvan-Newman: edge betweenness removal; O(m^2 n); accurate, slow.",
                  "Louvain: greedy Q improvement + aggregation; near-linear; resolution limit.",
                  "Spectral: Laplacian Fiedler vector signs; two-way principled; eigendecomposition cost.",
                  "Label propagation: majority-neighbour updates; O(m); unstable seeds.",
                  "Clique percolation: overlapping communities via adjacent k-cliques.",
                  "Worked instances: karate-club GN split; 6-node spectral sign reading.",
                  "Conclusion: choice by scale, overlap need and stability requirement.",
                ],
              },
              {
                q: "Explain spectral partitioning. How do the signs of the Fiedler vector assign communities in a 6-node graph of two triangles joined by one bridge?",
                marks: 7,
                outline: [
                  "Laplacian L = D - A; its second-smallest eigenvector is the Fiedler vector.",
                  "Signs of the entries encode the two-way split.",
                  "Two-triangle graph: (+,+,+,-,-,-) across the bridge.",
                  "Positive sign -> triangle 1; negative -> triangle 2.",
                  "One eigendecomposition replaces iteration.",
                  "Costs O(n^3) dense / sparse variants; many-way splits need more eigenvectors.",
                ],
              },
            ],
          },
          {
            number: "3.6",
            title: "Applications of community mining, tools and infrastructures",
            body: [
              "Community mining's applications cluster into four groups: recommendation (people who share a community share taste, so group-level signals drive suggestions), marketing (segment audiences by detected community rather than declared demographics, then seed per segment), fraud and security (fraud rings and covert cells appear as communities whose members interact unusually densely), and biology (protein complexes as dense subgraphs of interaction networks). Each is the same detection machinery pointed at a different graph.",
              "The tool landscape divides by mode of work. NetworkX and igraph are programmer libraries - detection algorithms callable from Python/R with full control. Gephi is the interactive workbench - load a graph, run modularity detection with a resolution slider, colour by community, layout and export. SNAP supplies both algorithms and the standard datasets (karate, ego networks, collaboration graphs). Under them, infrastructures scale the computation: distributed graph engines in the Pregel style (GraphX, Giraph) partition edge lists across clusters for billion-edge runs.",
              "A worked example: load a 400-node Facebook ego network into Gephi, run modularity at default resolution - three communities appear, coloured red, green, blue. Hovering node attributes names them: school friends, college friends, work colleagues. The detection did not know the labels; the attributes confirm them - that two-step (detect, then verify against metadata) is the practical method, and the degree of agreement between detected groups and attribute classes is the number that turns the story into an evaluation.",
              "Exam framing: name four applications with one-line mechanisms, then two tools and one infrastructure with their roles - libraries for control, workbenches for exploration, distributed engines for scale. The tool table below is the structure to reproduce, and the Gephi walkthrough is the worked example to narrate; ending with the resolution-slider observation ties the tools section back to the granularity decision of the detection pipeline, which is the connective mark.",
            ],
            bullets: [
              "Recommenders: community co-membership predicts shared taste.",
              "Marketing: segment by detected community; seed campaigns per segment.",
              "Fraud/security: rings and covert cells surface as unusually dense subgraphs.",
              "Biology: protein complexes as dense subgraphs of interaction networks.",
              "Tools: NetworkX/igraph (libraries), Gephi (interactive, resolution slider), SNAP (algorithms + datasets).",
              "Infrastructure: Pregel-style distributed engines (GraphX, Giraph) for billion-edge graphs.",
            ],
            diagram: {
              kind: "layers",
              title: "The community-mining stack",
              caption: "Index 0 is the top: what the user sees; the layers below make it possible.",
              layers: [
                { label: "Visualization and reporting", note: "Gephi workbench, dashboards" },
                { label: "Detection algorithms", note: "Louvain, GN, spectral, LPA" },
                { label: "Graph engines and storage", note: "igraph, graph DBs, Pregel-style clusters" },
                { label: "Collection", note: "crawlers, APIs, standard datasets (SNAP)" },
              ],
            },
            table: {
              caption: "Tool landscape for community mining.",
              headers: ["Tool", "Mode", "Strength", "Typical use"],
              rows: [
                ["NetworkX", "Python library", "algorithms + prototypes", "course work, research scripts"],
                ["igraph", "library (C/R/Python)", "speed on large graphs", "large-scale detection"],
                ["Gephi", "interactive GUI", "layout + modularity slider", "exploration, presentation figures"],
                ["SNAP", "library + datasets", "standard corpora", "benchmarking, teaching"],
                ["GraphX/Giraph", "distributed engine", "billion-edge runs", "production analytics"],
              ],
            },
            callout: {
              type: "tip",
              title: "The resolution slider is a granularity knob",
              body: "Gephi's modularity panel exposes resolution: lower values merge communities, higher values split them. Knowing that the slider implements the granularity decision from the detection pipeline - and saying so - connects the tool section to the theory marks.",
            },
            keyTerms: [
              { term: "Gephi", definition: "Interactive graph workbench with layout, modularity detection and metadata inspection." },
              { term: "SNAP", definition: "Stanford Network Analysis Platform - algorithms plus the standard benchmark datasets." },
              { term: "Pregel model", definition: "Distributed graph computation of think-like-a-vertex message passing, scaling detection to billions of edges." },
              { term: "Fraud ring", definition: "A community of accounts whose dense interaction pattern betrays coordinated fraud." },
            ],
            examQuestions: [
              {
                q: "Discuss applications of community mining algorithms and the tools and infrastructures available for detecting communities.",
                marks: 7,
                outline: [
                  "Applications: recommendation, marketing segmentation, fraud rings, protein complexes.",
                  "One mechanism line per application.",
                  "Libraries: NetworkX, igraph - callable detection.",
                  "Interactive: Gephi - layout plus modularity resolution slider.",
                  "Datasets: SNAP standard corpora for benchmarking.",
                  "Infrastructure: Pregel-style engines for web-scale graphs.",
                  "Worked line: Gephi on a 400-node ego network - three named communities.",
                ],
              },
              {
                q: "How would you verify that communities detected on an ego network are meaningful? Describe the two-step practical method.",
                marks: 7,
                outline: [
                  "Detect without labels (e.g. modularity in Gephi).",
                  "Inspect node attributes per community - school, college, work fields.",
                  "Agreement between detected groups and attributes = verification.",
                  "Quantify: overlap between community and attribute class (purity).",
                  "Also report internal metrics: modularity, conductance.",
                  "Conclude: detection proposes, metadata disposes.",
                ],
              },
            ],
          },
          {
            number: "3.7",
            title: "Decentralized online social networks and multi-relational dynamic communities",
            body: [
              "A decentralized online social network removes the single owning platform: users hold their own data on personal servers or federated pods (Diaspora pods, Mastodon instances), or in peer-to-peer storage with DHT lookup, exchanging signed updates. The motivations are privacy (no central harvesting), censorship resistance (no single kill switch) and resilience (no single point of failure). The costs are equally structural: key management for users, availability when a pod is offline, and - for the analyst - no global view of the graph.",
              "Multi-relational characterization responds to a second modern fact: one node set carries several relations. The same five students have chat edges, co-authorship edges and declared friendship edges; each relation alone yields different communities - friendship shows the hostel group, co-authorship shows the project team, chat shows both plus thelab mates. Combining layers (union with weights, or per-layer detection then alignment) finds the teams that friendship alone hides, and tracking those communities across time windows characterizes their dynamics.",
              "A worked example: layer 1 (friendship) on 5 students detects one 4-node community; layer 2 (co-authorship) detects a different 3-node team; the union layer scores pairs by the count of relations connecting them, and the 3-node project team scores highest - visible in no single layer. The steps: build per-layer graphs, detect per layer, align, then fuse with a relation-count score.",
              "Exam framing: define decentralized OSN with one named example (Diaspora pods or Mastodon instances), list motivations and costs in two balanced columns, then define multi-relational dynamic communities and run the layer-fusion example to its top fused pair. The privacy contrast with centralized platforms links back to Unit IV, and noting that analysis itself must respect per-pod consent is the closing sentence that shows the ethical dimension examiners increasingly expect.",
            ],
            bullets: [
              "Decentralized OSN: pods/P2P storage (Diaspora, Mastodon); no central owner.",
              "Motivations: privacy, censorship resistance, resilience.",
              "Costs: key management, availability, discovery, no global graph view.",
              "Multi-relational: same nodes carry chat, friendship, co-authorship edges.",
              "Each layer detects different communities; fusion finds teams any single layer hides.",
              "Dynamic tracking: per-window detection + alignment = community trajectories.",
            ],
            diagram: {
              kind: "compare",
              title: "Centralized vs decentralized OSN",
              caption: "Ownership moves to the edges - and so do the analysis difficulties.",
              left: {
                heading: "Centralized platform",
                items: [
                  "One provider holds the whole graph",
                  "Global analytics are trivial",
                  "Privacy and ownership concentrated",
                  "Censorship and outage = single point",
                ],
              },
              right: {
                heading: "Decentralized OSN",
                items: [
                  "Users/pods own their data",
                  "Privacy and resilience by design",
                  "Discovery and availability harder",
                  "Analytics need federation or crawls",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "layers.py - fusing multi-relational communities",
              code: `friendship = {("a","b"), ("a","c"), ("b","c"), ("a","d")}
coauthor   = {("b","c"), ("b","e")}
chat       = {("a","b"), ("b","e"), ("c","d")}

pairs = {}
for layer in (friendship, coauthor, chat):
    for u, v in layer:
        pairs[frozenset((u, v))] = pairs.get(frozenset((u, v)), 0) + 1

best = max(pairs.items(), key=lambda kv: kv[1])
print(best)   # ({'b','c'}: 3 relations) - the team no single layer ranks first`,
            },
            callout: {
              type: "warning",
              title: "Federation changes the ethics of crawling",
              body: "There is no global endpoint to crawl in a decentralized OSN - data lives under many owners' consent. Analyses must respect per-pod terms and rate limits; in privacy answers (Unit IV), say that decentralization improves ownership but complicates both analysis and law-enforcement access.",
            },
            keyTerms: [
              { term: "Decentralized OSN", definition: "A social network without a central provider - pods or P2P nodes hold user data." },
              { term: "DHT", definition: "Distributed hash table - the P2P lookup layer that locates user data across nodes." },
              { term: "Multiplex community", definition: "A community evident across several relations rather than one." },
              { term: "Community trajectory", definition: "A community's aligned existence across time windows - its dynamic history." },
            ],
            examQuestions: [
              {
                q: "What is a decentralized online social network? Give its motivations, costs and one named implementation, contrasting with centralized platforms.",
                marks: 7,
                outline: [
                  "Definition: users/pods own data; P2P or federated architecture.",
                  "Named examples: Diaspora pods, Mastodon instances.",
                  "Motivations: privacy, censorship resistance, resilience.",
                  "Costs: key management, availability, discovery, fragmented analytics.",
                  "Centralized contrast: one owner, global analytics, single point of failure.",
                  "Analysis impact: no global crawl; federation and consent matter.",
                ],
              },
              {
                q: "Explain multi-relational characterization of dynamic social network communities with the layer-fusion worked example.",
                marks: 7,
                outline: [
                  "One node set, several relations: friendship, co-authorship, chat.",
                  "Detect per layer - different communities per relation.",
                  "Align layers over shared nodes; score pairs by relation count.",
                  "Worked numbers: {b,c} connected by 3 relations - top fused pair.",
                  "Fusion reveals teams invisible in any single layer.",
                  "Track across time windows for community trajectories.",
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
      title: "Predicting Human Behaviour and Privacy Issues",
      summary:
        "Unit IV turns from structure to people: understanding and predicting human behaviour in social communities, user data management with its inference and distribution problems, the new human experiences social systems enable, reality mining and context-awareness, privacy in online social networks, trust in the online environment with subjective-logic trust models, trust network analysis with transitivity and reputation combination, and the attack spectrum with countermeasures.",
      chapter: {
        number: "04",
        title: "Behaviour, Privacy and Trust",
        intro:
          "Unit IV covers understanding and predicting human behaviour for social communities, user data management, inference and distribution, enabling new human experiences, reality mining, context-awareness, privacy in online social networks, trust in online environments, subjective-logic trust models, trust network analysis, trust transitivity, combining trust and reputation, trust derivation from comparisons, and the attack spectrum with countermeasures.",
        inOneBreath:
          "Behaviour prediction turns traces into forecasts - link creation, churn, adoption - using structural, content and temporal features. Data management adds two dangerous operations: inference (deriving unstated attributes) and distribution (widening data's audience). Reality mining shows how sensor traces classify ties and routines. Privacy threats range from attribute inference to graph de-anonymization, answered by granular settings, k-anonymity and differential privacy. Trust is modelled in subjective logic as opinions (b, d, u) with b + d + u = 1, propagated through networks with discounting and fused with reputation; the attack spectrum - Sybil, whitewashing, on-off, bad-mouthing - has named countermeasures for each.",
        sections: [
          {
            number: "4.1",
            title: "Understanding and predicting human behaviour for social communities",
            body: [
              "Understanding behaviour means explaining why users act - adopt, leave, connect; predicting behaviour means forecasting the next action from traces. The standard prediction tasks are link prediction (which edge appears next), churn (who leaves a platform), adoption and influence (who takes up a product or idea), location prediction, and opinion shift. Each task turns a logged history into labelled examples and a supervised model - or a probabilistic cascade model where labels are scarce.",
              "The feature families are three. Structural features come from the graph: degree, common neighbours, preferential attachment (hubs attract ties). Content features come from text: topics, sentiment, hashtags. Temporal features come from time: recency of contact, periodicity (weekend vs weekday), activity bursts. Models range from logistic regression and trees over the features to probabilistic cascades - independent cascade and linear threshold - that model adoption spreading step by step through the network.",
              "A worked example of link prediction on a 5-node graph: candidate pair (A, E) shares three common neighbours (B, C, D), so the common-neighbour score is 3; the Adamic-Adar score weights each shared neighbour by 1/log(degree), down-weighting hubs, giving 1/log2 + 1/log2 + 1/log3 = 3.63 - the highest score in the graph. Prediction: edge (A, E) forms next. Diffusion framing: in the independent cascade model, each newly activated node gets one chance per neighbour with probability p; the cascade size distribution is the outcome to simulate.",
              "Exam framing: name the tasks, the three feature families with one example each, and run the link-prediction arithmetic to its prediction - edge (A, E) forms next. The cascade models (independent cascade, linear threshold) belong in the same answer as one-line mechanics each, and a closing sentence on evaluation metrics (AUC, precision@k) completes the loop from prediction to validation, which is where the last mark waits.",
            ],
            bullets: [
              "Tasks: link prediction, churn, adoption/influence, location, opinion shift.",
              "Structural features: degree, common neighbours, preferential attachment.",
              "Content features: topics, sentiment, hashtags.",
              "Temporal features: recency, periodicity, bursts.",
              "Independent cascade: each newly active node gets one probability-p shot per neighbour.",
              "Linear threshold: a node activates when weighted active neighbours cross its threshold.",
            ],
            diagram: {
              kind: "flow",
              title: "The behaviour-prediction loop",
              caption: "From logged traces to an intervention, then around again.",
              steps: [
                { label: "Collect traces", note: "posts, ties, check-ins" },
                { label: "Engineer features", note: "structural + content + temporal" },
                { label: "Train model", note: "supervised or cascade" },
                { label: "Predict + validate", note: "AUC / precision@k" },
                { label: "Act", note: "recommend, intervene, retain" },
              ],
            },
            table: {
              caption: "Prediction tasks, features, models and metrics.",
              headers: ["Task", "Key features", "Typical model", "Metric"],
              rows: [
                ["Link prediction", "common neighbours, Adamic-Adar", "logistic reg / ranking", "AUC, precision@k"],
                ["Churn", "activity decline, complaints", "trees / survival models", "F1, lift"],
                ["Adoption", "exposure count, peer adoption", "independent cascade", "cascade size"],
                ["Location", "periodicity, recency", "Markov chains", "accuracy"],
                ["Opinion", "sentiment, influence edges", "linear threshold", "shift magnitude"],
              ],
            },
            callout: {
              type: "exam",
              title: "Name the trio for link prediction",
              body: "Common neighbours, Adamic-Adar and preferential attachment are the expected scoring functions in any link-prediction answer - write all three with formulas, then compute one on the given graph. An answer with only one scorer reads incomplete.",
            },
            keyTerms: [
              { term: "Link prediction", definition: "Scoring candidate pairs by shared structure to forecast the next edge." },
              { term: "Adamic-Adar", definition: "Common-neighbour scoring weighted by 1/log(degree) - rare neighbours count more." },
              { term: "Independent cascade", definition: "Diffusion model where each newly active node takes one probability-p shot per neighbour." },
              { term: "Linear threshold", definition: "Diffusion model where a node activates when weighted active influence crosses its threshold." },
            ],
            examQuestions: [
              {
                q: "Explain the prediction of human behaviour in social communities: the tasks, the feature families and the cascade models, with one worked link-prediction computation.",
                marks: 7,
                outline: [
                  "Tasks: link prediction, churn, adoption, location, opinion.",
                  "Structural features: degree, common neighbours, preferential attachment.",
                  "Content features: topics, sentiment; temporal: recency, periodicity.",
                  "Independent cascade: one probability-p shot per neighbour.",
                  "Linear threshold: activation at weighted-influence threshold.",
                  "Worked: (A,E) share 3 neighbours -> score 3; Adamic-Adar 3.63.",
                  "Conclusion: predict (A,E) forms next.",
                ],
              },
              {
                q: "Distinguish the independent cascade and linear threshold models of influence, and state one setting where each fits.",
                marks: 7,
                outline: [
                  "Independent cascade: each newly active node gets one shot per inactive neighbour, success probability p.",
                  "Randomness lives in transmission attempts.",
                  "Fits: viral marketing where sharing is stochastic.",
                  "Linear threshold: node activates when sum of active neighbours' weights crosses its threshold.",
                  "Deterministic once thresholds are drawn.",
                  "Fits: coordination problems - protest attendance, technology standards.",
                ],
              },
            ],
          },
          {
            number: "4.2",
            title: "User data management: inference and distribution",
            body: [
              "User data management covers how platforms store and serve social data at scale - key-value and column stores for timelines, graph databases for the social graph - plus the two operations that create policy risk. Inference derives attributes users never stated: politics from page likes, age from language style, home and work from check-in clusters. Distribution moves data onward: third-party apps, APIs, data markets and research releases - each hop widens the audience while consent dilutes.",
              "Inference is powerful because behaviour is more honest than profiles. A check-in series clusters into two hotspots - most-frequent night cluster = home, weekday-midday cluster = office - with no location ever declared. The same logic infers relationship status, income proxies and health signals; the platform's incentive to infer (better targeting) collides with the user's expectation that unstated facts stay private. Defensive releases use k-anonymity - every released location-time cell contains at least k users - or differential privacy, adding calibrated noise so single users' presence is deniable.",
              "A worked example: 60 nights of check-ins, clustered by hour and grid cell, give hotspot H1 with 30 night visits and H2 with 22 weekday-lunch visits. Inference: home = H1, workplace = H2. Releasing the raw trace re-identifies anyone whose H1 is unique - so the release applies k-anonymity with k = 5: any cell with fewer than 5 users is suppressed or generalized. The arithmetic is two clusters and a threshold check.",
              "Exam framing: define inference and distribution in one line each, give the check-in worked example with its two clusters and the k-anonymity threshold check, then pair each risk with its defence - k-anonymity for releases, differential privacy for statistics, consent scopes for apps. The line 'inference defeats coarse privacy settings' is the conceptual mark, and repeating it as the closing sentence ties the storage discussion to the privacy threats of section 4.5.",
            ],
            bullets: [
              "Storage at scale: key-value/column stores for timelines, graph DBs for the social graph.",
              "Inference: derive unstated attributes - politics, age, home/work - from behaviour traces.",
              "Check-in clustering: most-frequent night cluster = home; weekday midday = work.",
              "Distribution: apps, APIs, data markets, research releases - consent dilutes per hop.",
              "Defences: k-anonymity (k users per cell), differential privacy (calibrated noise), consent scopes.",
              "Inference defeats coarse settings: hiding the field fails when the value is derivable.",
            ],
            diagram: {
              kind: "layers",
              title: "The user-data stack and its risk points",
              caption: "Index 0 is the top: each hop outward widens the audience and weakens consent.",
              layers: [
                { label: "Distribution", note: "APIs, apps, releases - consent dilutes" },
                { label: "Inference", note: "attributes derived beyond what users stated" },
                { label: "Storage", note: "graph DBs, column stores, warehouses" },
                { label: "Collection", note: "posts, check-ins, logs, sensors" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "inference.py - home and work from check-in clusters",
              code: `from collections import Counter

checkins = [("home_grid", 23)] * 30 + [("home_grid", 0)] * 12 + \\
           [("work_grid", 13)] * 22 + [("mall", 18)] * 6

night = Counter(place for place, hr in checkins if hr < 6)
day   = Counter(place for place, hr in checkins if 9 <= hr <= 17)
print("home:", night.most_common(1))   # home_grid (42 night visits)
print("work:", day.most_common(1))     # work_grid (22 weekday visits)

# release rule: suppress any cell with < k=5 users (k-anonymity)`,
            },
            callout: {
              type: "warning",
              title: "Hiding the field is not hiding the fact",
              body: "Privacy settings hide declared attributes; inference reconstructs them from traces the user did publish. In any privacy answer, pair the visible-field question with the inference question - examiners look for the sentence 'inference defeats coarse privacy settings'.",
            },
            keyTerms: [
              { term: "Inference attack", definition: "Deriving unstated attributes of a user from their observable behaviour or friends." },
              { term: "k-anonymity", definition: "Release guarantee that every quasi-identifier cell contains at least k individuals." },
              { term: "Differential privacy", definition: "Adding calibrated noise so any single individual's presence is statistically deniable." },
              { term: "Data distribution", definition: "The onward movement of user data to apps, APIs and releases, diluting consent." },
            ],
            examQuestions: [
              {
                q: "Explain user data management in social networks, focusing on inference and distribution. What are the risks and the standard defences?",
                marks: 7,
                outline: [
                  "Storage: key-value/column stores for timelines; graph DBs for the social graph.",
                  "Inference: derive unstated attributes from traces - the check-in example.",
                  "Worked numbers: 60 nights -> home cluster (42 visits), work cluster (22).",
                  "Risk: inference defeats coarse privacy settings.",
                  "Distribution: apps/APIs/releases; consent dilutes per hop.",
                  "Defences: k-anonymity, differential privacy, consent scopes.",
                ],
              },
              {
                q: "A released mobility trace has 60 check-ins per user. Explain how k-anonymity with k = 5 protects it, and what still leaks.",
                marks: 7,
                outline: [
                  "Generalize/suppress any location-time cell with fewer than 5 users.",
                  "Any single user's presence in a cell is then non-unique.",
                  "Still leaks: rare routines crossing many cells can be reconstructed by linkage.",
                  "Repeated releases over time erode anonymity (temporal linkage).",
                  "Differential privacy adds noise instead - a stronger, formal guarantee.",
                  "Trade-off: utility falls as k or noise rises.",
                ],
              },
            ],
          },
          {
            number: "4.3",
            title: "Enabling new human experiences",
            body: [
              "Social systems create experiences that databases alone cannot, because they inject the graph into the interaction. The syllabus's catalogue: social search (results ranked by friends' activity), social question-answering (routing questions to likely knowers), people-nearby and matchmaking (meet the stranger your network vouches for), meetup and event coordination, social TV (watching with the network's commentary), and collaborative consumption (trust-mediated sharing of rides, rooms, tools).",
              "The design loop is common to all of them: capture context (who, where, when, what), match against the graph and profiles, personalize the result set, deliver the experience, collect feedback - which retrains the matcher for the next cycle. The loop's dials are accuracy versus serendipity (strict matching repeats what you know; loose matching surfaces strangers) and novelty versus filter bubble (over-personalization walls users into their own taste).",
              "A worked example: a conference app with 200 attendees scores every pair by shared tag interests (overlap of profile tags) plus graph proximity (friend-of-friend bonus of +0.2). Attendee X shares 4 tags with Y and is a friend-of-friend: score = 4 + 0.2 = 4.2 - the top suggestion. After the event, attendees mark which suggested meetings happened; happened-meetings become positive training rows. Five steps, one loop, measurable lift in meetings held.",
              "Exam framing: name four experiences with their input signals in a table-like list, then draw the five-step loop and apply it to the conference case with the 4.2-score arithmetic. End with the filter-bubble caveat and the serendipity dial - the discussion mark - because examiners use that closing to separate candidates who can design an experience from candidates who can only name features of one.",
            ],
            bullets: [
              "Social search: friends' activity re-ranks results.",
              "Social Q&A: route questions to likely knowers via expertise + proximity.",
              "People-nearby / matchmaking: the network vouches for strangers.",
              "Social TV and collaborative consumption: shared context plus trust mediation.",
              "Design loop: capture context -> match -> personalize -> deliver -> collect feedback.",
              "Dial: accuracy vs serendipity; over-personalization builds filter bubbles.",
            ],
            diagram: {
              kind: "cycle",
              title: "The experience design loop",
              caption: "Feedback closes the loop - each pass retrains the matcher.",
              steps: [
                { label: "Capture context", note: "who, where, when, what" },
                { label: "Match", note: "graph + profile similarity" },
                { label: "Personalize", note: "rank for this user" },
                { label: "Deliver", note: "the live experience" },
                { label: "Collect feedback", note: "what happened? retrain" },
              ],
            },
            table: {
              caption: "Experiences, signals and mechanisms.",
              headers: ["Experience", "Input signals", "Mechanism", "Tradeoff"],
              rows: [
                ["Social search", "friends' likes, clicks", "graph re-ranking", "bubble narrowing"],
                ["Social Q&A", "expertise graph, proximity", "question routing", "delay vs quality"],
                ["People-nearby", "location, mutual friends", "proximity + vouching", "privacy exposure"],
                ["Event coordination", "shared groups, availability", "group targeting", "invitation fatigue"],
                ["Collaborative consumption", "trust scores, reviews", "trust-mediated matching", "cold start"],
              ],
            },
            callout: {
              type: "tip",
              title: "Personalization strength is a dial, not a goal",
              body: "Maximum accuracy minimizes surprise and walls the user into their existing taste - the filter bubble. Services deliberately inject serendipity (near-miss matches, diverse suggestions); exam answers that name this tradeoff earn the discussion mark beyond the mechanism.",
            },
            keyTerms: [
              { term: "Social search", definition: "Search re-ranked by the searcher's social graph - friends' activity boosts results." },
              { term: "Question routing", definition: "Directing a question to community members likely to answer, by expertise and proximity." },
              { term: "Filter bubble", definition: "The narrowing of exposure caused by over-personalized feeds." },
              { term: "Collaborative consumption", definition: "Peer-to-peer sharing of goods and services mediated by social trust signals." },
            ],
            examQuestions: [
              {
                q: "Explain how social systems enable new human experiences. Describe the design loop with one worked example and the tradeoffs involved.",
                marks: 7,
                outline: [
                  "Experiences: social search, Q&A routing, people-nearby, social TV, collaborative consumption.",
                  "Loop: capture context -> match -> personalize -> deliver -> feedback.",
                  "Worked: conference app - 4 shared tags + 0.2 friend-of-friend bonus = 4.2 top suggestion.",
                  "Feedback rows retrain the matcher after the event.",
                  "Tradeoff: accuracy vs serendipity.",
                  "Tradeoff: over-personalization creates filter bubbles.",
                ],
              },
              {
                q: "Why can social Q&A outperform a search engine for some questions, and when does it fail?",
                marks: 7,
                outline: [
                  "Some questions need context, opinion or experience - not indexed documents.",
                  "Routing picks likely knowers by expertise graph and proximity.",
                  "Answers carry trust and can be discussed.",
                  "Fails when: no likely knower is online, question is factual/fast, askers are impatient.",
                  "Latency is the structural weakness vs instant search results.",
                ],
              },
            ],
          },
          {
            number: "4.4",
            title: "Reality mining and context-awareness",
            body: [
              "Reality mining - the MIT Media Lab term from Pentland's 2004-05 Nokia study, instrumenting about a hundred subjects' phones - infers real-life behaviour from sensor traces: call and SMS logs, Bluetooth scans of nearby devices, cell-tower and GPS location, accelerometer activity. Its finding was that routine is predictable: most people's daily movement and interaction patterns are stable enough to forecast from a few days of data. Context-awareness is the design discipline built on that fact - services that adapt to who, where, when and what.",
              "The tie-classification logic is the examinable core. Co-location has temporal signatures: colleagues co-occur during weekday working hours and rarely evenings; friends co-occur on weekend evenings; family co-occur at home across both. Two signals sharpen it: Bluetooth proximity gives physical co-presence (stronger than communication), and communication logs give contact frequency. Together they let a phone infer who is a colleague, friend or family member without anyone declaring it.",
              "A worked example: subject P's Bluetooth scans run every five minutes. Device Q co-occurs in 70 percent of weekday 9-5 scans and 5 percent of evening scans -> colleague. Device R co-occurs in 40 percent of weekend-evening scans and 10 percent of work hours -> friend. Device S co-occurs at the home tower across both, 80 percent of evenings -> family. Three feature vectors, three labels - that is the whole inference, and the rule generalizes.",
              "Exam framing: name the reality-mining study (MIT Media Lab, Pentland, Nokia phones, about 100 subjects, 2004-05), list the four sensor sources with the question each answers, and run the colleague/friend/family classification on given co-location fractions, rule per row. Context-awareness closes the section as the application layer, and one sentence on its privacy cost - continuous capture is continuous surveillance - links forward to section 4.5 for the breadth mark.",
            ],
            bullets: [
              "Reality mining: behaviour inferred from phone sensors - MIT Media Lab, Pentland, 2004-05, ~100 Nokia subjects.",
              "Sources: call/SMS logs, Bluetooth proximity, cell/GPS location, accelerometer.",
              "Finding: routines are stable and predictable from few days of traces.",
              "Tie signatures: colleagues = weekday-hours co-location; friends = weekend evenings; family = home across both.",
              "Bluetooth proximity beats communication logs for physical contact inference.",
              "Context-awareness: services adapting to who/where/when/what.",
            ],
            diagram: {
              kind: "fork",
              title: "What each sensor trace answers",
              caption: "Four traces, four questions - reality mining is the fusion.",
              start: "Sensor trace",
              branches: [
                { label: "Bluetooth scans", outcome: "who physically meets whom - proximity graph", good: true },
                { label: "Cell/GPS location", outcome: "where routines run - home, work, commute", good: true },
                { label: "Call/SMS logs", outcome: "who communicates with whom - contact graph", good: true },
                { label: "Accelerometer", outcome: "activity state - still, walking, driving", good: true },
              ],
            },
            codeExample: {
              language: "python",
              caption: "ties.py - classify a tie from co-location signatures",
              code: `def classify(workday, evening, home):
    # fractions of scans co-located, by time window
    if workday > 0.5 and evening < 0.1:
        return "colleague"      # meets at work hours only
    if evening > 0.3 and workday < 0.2:
        return "friend"         # weekend-evening co-presence
    if home > 0.6 and evening > 0.5:
        return "family"         # co-located at home across windows
    return "acquaintance"

print(classify(0.70, 0.05, 0.05))  # colleague
print(classify(0.10, 0.40, 0.20))  # friend
print(classify(0.20, 0.80, 0.85))  # family`,
            },
            callout: {
              type: "exam",
              title: "Quote the study",
              body: "The citation examiners want: MIT Media Lab, Pentland's group, Nokia 6600 phones, about 100 subjects, 2004-05. Reality-mining answers without the study read like fiction; with it, they read like coursework.",
            },
            keyTerms: [
              { term: "Reality mining", definition: "Inferring real-life behaviour and relationships from mobile sensor traces (Pentland, MIT)." },
              { term: "Context-awareness", definition: "Services that sense and adapt to the user's who/where/when/what context." },
              { term: "Proximity sensing", definition: "Bluetooth-style discovery of physically co-present devices." },
              { term: "Temporal signature", definition: "The time-pattern of a tie's co-locations - the feature that classifies its type." },
            ],
            examQuestions: [
              {
                q: "What is reality mining? Describe the data sources of the MIT study and how co-location signatures classify colleague, friend and family ties.",
                marks: 7,
                outline: [
                  "Reality mining: behaviour from phone sensors; MIT Media Lab, Pentland, 2004-05, ~100 subjects.",
                  "Sources: calls/SMS, Bluetooth proximity, cell/GPS, accelerometer.",
                  "Colleague: > 0.5 weekday-hours co-location, near-zero evenings.",
                  "Friend: > 0.3 weekend-evening co-location, little work-time.",
                  "Family: home-tower co-location across evening windows.",
                  "Worked fractions: 0.70/0.05 -> colleague; 0.10/0.40 -> friend.",
                  "Context-awareness as the application layer on these inferences.",
                ],
              },
              {
                q: "How does context-awareness differ from plain personalization? Give one service that needs context, not just profile history.",
                marks: 7,
                outline: [
                  "Personalization uses long-term profile; context uses the current situation.",
                  "Context = who is nearby, where the user is, what time it is, what activity.",
                  "Service: a lunch recommendation that changes with current location and companions.",
                  "History alone cannot answer 'where and with whom now'.",
                  "Reality-mining sensors supply the context signal.",
                  "Privacy cost: context capture is continuous surveillance - link to 4.5.",
                ],
              },
            ],
          },
          {
            number: "4.5",
            title: "Privacy in online social networks",
            body: [
              "Privacy in OSNs is control over what others can learn about a person, and the threat list goes beyond exposed profiles. Attribute inference reconstructs unstated facts from friends and behaviour (section 4.2's mechanism, weaponized). Graph de-anonymization re-identifies individuals inside a 'name-removed' released network using structural signatures. Facial recognition re-attaches names to faces in photos. Social sorting classifies people into sensitive groups - and each threat has a matching defence family.",
              "The defences: granular privacy settings and group-based sharing (audience-scoped posts), release-side anonymization - k-anonymity so every signature is shared by at least k users, and differential privacy so single membership is deniable - plus policy instruments (consent, purpose limitation, GDPR-style rights). The structural insight examiners want: the graph itself is the identifier. Degrees, neighbourhood patterns and embedded positions survive name removal, which is why 'we removed the names' is never a complete answer.",
              "A worked example of de-anonymization: a released graph has names stripped. The attacker knows a victim's distinct degrees to four friends - say (12, 8, 5, 3). Scanning the released graph, exactly one node has neighbours of those four degrees - a structural signature match - so the victim is re-identified; from her, further nodes fall by breadth-first propagation. Four numbers, one match, identity restored: the arithmetic is the whole attack.",
              "Exam framing: threats and defences as a paired table, the de-anonymization worked example with the degree-signature arithmetic - four known degrees, one unique match - and the closing line: structure is the identifier, so anonymization must perturb structure, not just names. Adding one policy instrument (consent, purpose limitation) rounds out the answer beyond pure technique, which is what the 14-mark privacy variant expects.",
            ],
            bullets: [
              "Threats: attribute inference, graph de-anonymization, facial recognition, social sorting.",
              "Defences: granular settings, group-based sharing, k-anonymity, differential privacy, policy rights.",
              "The graph itself is the identifier - degrees and neighbourhoods survive name removal.",
              "Degree-signature attack: known degrees (12, 8, 5, 3) match one node -> victim found.",
              "Propagation: one identified node unrolls neighbours iteratively.",
              "Effective anonymization must perturb structure (edge sparsification, noise), not only labels.",
            ],
            diagram: {
              kind: "matrix",
              title: "The privacy exposure grid",
              caption: "Audience width against data sensitivity; the risk lives top-right.",
              axes: { x: "audience width (narrow -> wide)", y: "data sensitivity (low -> high)" },
              quadrants: [
                { label: "Guarded core", note: "sensitive data kept to trusted circles - the ideal for critical facts" },
                { label: "Oversharing", note: "sensitive data reaching everyone - the risk zone" },
                { label: "Underused value", note: "harmless data kept too narrow - missed social value" },
                { label: "Comfortable public", note: "low-stakes content for everyone - fine as is" },
              ],
            },
            table: {
              caption: "Privacy threats and their defences.",
              headers: ["Threat", "Mechanism", "Defence"],
              rows: [
                ["Attribute inference", "friends/behaviour reveal unstated facts", "limit friend visibility; inference-aware sharing"],
                ["Graph de-anonymization", "structural signatures re-identify nodes", "perturb structure; k-anonymity on graph features"],
                ["Facial recognition", "photos re-attach names to faces", "tag consent, photo visibility scopes"],
                ["Social sorting", "group membership used against users", "purpose limitation, policy rights"],
                ["Third-party leakage", "apps inherit more than needed", "consent scopes, API minimization"],
              ],
            },
            callout: {
              type: "warning",
              title: "Names removed is not anonymous",
              body: "Structure alone re-identifies people - degrees, triangles and neighbourhood patterns persist after label removal. In any privacy answer, reject 'we removed the names' as incomplete and demand structural perturbation or formal guarantees (differential privacy).",
            },
            keyTerms: [
              { term: "De-anonymization", definition: "Re-identifying individuals in an anonymized dataset, typically by structural signatures." },
              { term: "Degree signature", definition: "A victim's known pattern of neighbour degrees used as a matching fingerprint." },
              { term: "k-anonymity", definition: "Every released quasi-identifier combination shared by at least k individuals." },
              { term: "Differential privacy", definition: "A formal guarantee that outputs change little whether or not any one individual is present." },
            ],
            examQuestions: [
              {
                q: "Discuss privacy issues in online social networks: the main threats, the corresponding defences, and one worked de-anonymization example.",
                marks: 7,
                outline: [
                  "Threats: attribute inference, de-anonymization, facial recognition, social sorting.",
                  "Defences: granular settings, k-anonymity, differential privacy, policy rights.",
                  "Key line: the graph itself is the identifier.",
                  "Worked attack: victim's degree signature (12, 8, 5, 3) matches one released node.",
                  "Breadth-first propagation re-identifies neighbours.",
                  "Conclusion: anonymization must perturb structure, not only names.",
                ],
              },
              {
                q: "Explain why releasing an 'anonymized' social graph can still violate privacy, and what a safer release looks like.",
                marks: 14,
                outline: [
                  "Structure persists: degrees, triangles, neighbourhood patterns.",
                  "Degree-signature attack: known degrees match one node; identity restored.",
                  "Propagation unrolls the victim's neighbourhood iteratively.",
                  "Worked example: signature (12, 8, 5, 3) -> unique node match.",
                  "Safer: perturb edges (add/remove), coarsen degrees, k-anonymize features.",
                  "Strongest: differential privacy on released statistics.",
                  "Utility-privacy tradeoff: more protection, less analytical fidelity.",
                ],
              },
            ],
          },
          {
            number: "4.6",
            title: "Trust in the online environment; trust models based on subjective logic",
            body: [
              "Trust is a subjective, directed, contextual belief that an agent will behave as expected - subjective because it belongs to the believer, directed because A trusting B is not B trusting A, contextual because trust in a seller is not trust in a babysitter. Online environments need explicit trust models because interactions happen between strangers at scale: P2P file sharing, marketplaces, collaborative filtering. Reputation is the community-level complement: an aggregated third-party summary of past behaviour, global per target rather than personal per pair.",
              "Subjective logic (Josang) gives trust a calculus. An opinion omega = (b, d, u) holds belief, disbelief and uncertainty with the constraint b + d + u = 1 - the uncertainty slot is what makes it honest about missing evidence. The beta reputation mapping turns feedback counts into opinions: with r positive and s negative reports and a prior weight w, b = r/(r + s + 2w), d = s/(r + s + 2w), u = 2w/(r + s + 2w). Evidence volume moves u toward zero; evidence ratio moves b versus d.",
              "A worked example: a seller holds r = 8, s = 2, w = 1. Then b = 8/12 = 0.67, d = 2/12 = 0.17, u = 2/12 = 0.17 - 'likely trustworthy, but a sixth undecided'. Compare a veteran seller with r = 80, s = 20: same ratio, but u = 4/104 = 0.04 - far more certain. Two decisions differ: the veteran's opinion supports a large transaction; the newcomer's uncertainty argues for escrow. The u-slot drives the policy, which is the non-obvious point.",
              "Exam framing: define trust with its three properties, contrast with reputation in a two-column aside, write the opinion triple and the constraint, and compute one beta-reputation example including the u comparison between newcomer and veteran. The constraint line b + d + u = 1 is a free mark most answers forget, and ending with the policy sentence - uncertainty drives escrow and exposure limits - shows the model earns decisions, not just numbers.",
            ],
            bullets: [
              "Trust: subjective, directed, contextual - a first-hand or propagated belief.",
              "Reputation: aggregated third-party evidence, global per target, slower to change.",
              "Subjective logic opinion: omega = (b, d, u), constraint b + d + u = 1.",
              "Beta reputation: b = r/(r+s+2w), u = 2w/(r+s+2w) with prior weight w.",
              "Evidence volume drives uncertainty u toward 0; ratio drives b vs d.",
              "Policy uses u: high uncertainty -> escrow/limits; low u -> larger exposure.",
            ],
            diagram: {
              kind: "compare",
              title: "Trust vs reputation",
              caption: "One is personal and fast, the other communal and slow - systems fuse both.",
              left: {
                heading: "Trust",
                items: [
                  "First-hand experience or propagated",
                  "Subjective - per believer",
                  "Directed and asymmetric",
                  "Context-bound, decays with time",
                ],
              },
              right: {
                heading: "Reputation",
                items: [
                  "Aggregated community feedback",
                  "Global per target",
                  "Summarizes history",
                  "Slow-moving, manipulable by volume",
                ],
              },
            },
            codeExample: {
              language: "python",
              caption: "opinions.py - beta reputation opinions from feedback counts",
              code: `def opinion(r, s, w=1):
    n = r + s + 2 * w
    return (r / n, s / n, 2 * w / n)   # (b, d, u)

new_seller = opinion(8, 2)
veteran    = opinion(80, 20)
print(new_seller)   # (0.667, 0.167, 0.167) - unsure
print(veteran)      # (0.769, 0.192, 0.038) - same lean, far more certain
# policy: veteran supports a large order; newcomer gets escrow`,
            },
            callout: {
              type: "exam",
              title: "The constraint line is a free mark",
              body: "Write omega = (b, d, u) and immediately the constraint b + d + u = 1. Most answers give the triple and lose the constraint mark; the constraint is also what lets examiners check your arithmetic - keep it visible.",
            },
            keyTerms: [
              { term: "Subjective logic", definition: "Josang's calculus of opinions (belief, disbelief, uncertainty) for trust reasoning." },
              { term: "Beta reputation", definition: "Mapping positive/negative feedback counts to an opinion via the beta distribution with a prior." },
              { term: "Trust vs reputation", definition: "Trust is personal, directed and contextual; reputation is aggregated community evidence." },
              { term: "Uncertainty (u)", definition: "The opinion component representing missing evidence; it drives risk policies." },
            ],
            examQuestions: [
              {
                q: "Define trust and contrast it with reputation. Explain the subjective-logic opinion model and compute the opinion of a seller with 8 positive and 2 negative reports.",
                marks: 7,
                outline: [
                  "Trust: subjective, directed, contextual belief in future behaviour.",
                  "Reputation: aggregated third-party evidence, global per target.",
                  "Opinion omega = (b, d, u) with b + d + u = 1.",
                  "Beta mapping: b = r/(r+s+2w), u = 2w/(r+s+2w).",
                  "Worked: r = 8, s = 2, w = 1 -> b = 0.67, d = 0.17, u = 0.17.",
                  "Compare veteran r = 80: same lean, u = 0.04 - certainty differs.",
                ],
              },
              {
                q: "Why does the uncertainty component matter for trust-based decisions? Give one policy that uses u.",
                marks: 7,
                outline: [
                  "u quantifies missing evidence, not negative evidence.",
                  "Two sellers can share b but differ wildly in u (8/2 vs 80/20).",
                  "High u -> limit exposure: escrow, partial payment, small orders.",
                  "Low u -> full exposure justified by certainty.",
                  "Without u, ratio-only systems over-trust newcomers with lucky early reviews.",
                  "The u-slot is subjective logic's main advantage over plain averages.",
                ],
              },
            ],
          },
          {
            number: "4.7",
            title: "Trust network analysis: transitivity, reputation combination and trust comparisons",
            body: [
              "A trust network is a graph whose edges carry trust values - Advogato and Epinions are the canonical datasets. Analysis propagates trust from a source to strangers it never dealt with. The honest transitivity rule is discounting: t(A->C) = t(A->B) x t(B->C) - my trust in a stranger is my trust in the referrer times the referrer's trust in them. Trust decays along paths, and uncertainty grows; plain transitivity without the product is the classic error.",
              "Aggregation combines paths: weighted average or minimum over the discounted path values, with shorter paths usually weighted higher. Systems then fuse personal trust with reputation - use personal (or propagated) trust where evidence exists, fall back on global reputation where it does not. Trust derivation based on trust comparisons handles ordinal input: statements like 'I trust A more than B' become pairwise-comparison entries, and a derived scale (eigenvalue method, as in AHP) converts orderings into usable numbers.",
              "A worked example: A trusts B at 0.8; B trusts C at 0.5; A trusts D at 0.9; D trusts C at 0.8. Path 1: 0.8 x 0.5 = 0.40. Path 2: 0.9 x 0.8 = 0.72. Aggregate mean = (0.40 + 0.72)/2 = 0.56 - moderate trust in the stranger C, dominated by the stronger path. Note the decay: two-hop values can never exceed the weakest link's product, which is why long chains rarely support big decisions.",
              "Exam framing: define the trust network with one named dataset, write the discounting rule and why plain chaining fails, compute the two-path example to its aggregated 0.56, and state the reputation-fusion and comparison-derivation ideas in one line each. The phrase 'discounted transitivity' is the technical mark, and the car-judge-mechanic intuition is the memorable close that makes the rule impossible to forget - or to misapply.",
            ],
            bullets: [
              "Trust network: edges carry trust values (Advogato, Epinions).",
              "Discounted transitivity: t(A->C) = t(A->B) x t(B->C); trust decays along paths.",
              "Aggregation: weighted average or minimum over discounted paths; shorter paths weigh more.",
              "Fusion: personal/propagated trust first, reputation as the no-evidence fallback.",
              "Trust comparisons: ordinal statements -> pairwise matrix -> derived cardinal scale.",
              "Long chains rarely support big decisions - uncertainty grows per hop.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From direct trust to a decision about a stranger",
              caption: "Each stage narrows uncertainty; fusion with reputation covers the no-path case.",
              stages: [
                { label: "Direct edges", note: "first-hand trust values" },
                { label: "Discounted propagation", note: "product along each path" },
                { label: "Aggregation", note: "weighted mean / min over paths" },
                { label: "Fuse reputation", note: "fallback where no path exists" },
                { label: "Decision", note: "exposure sized by derived value" },
              ],
            },
            table: {
              caption: "Trust operators and their properties.",
              headers: ["Operator", "Formula", "Property"],
              rows: [
                ["Discounting", "t(A->B) x t(B->C)", "trust decays along chains"],
                ["Mean aggregation", "mean of discounted path values", "stronger paths dominate"],
                ["Min aggregation", "min over paths", "conservative - weakest link rules"],
                ["Reputation fusion", "trust if exists, else reputation", "covers the no-evidence case"],
                ["Comparison derivation", "pairwise orders -> eigenvector scale", "ordinal to cardinal"],
              ],
            },
            callout: {
              type: "warning",
              title: "Plain transitivity is wrong",
              body: "Writing t(A->C) = t(B->C), or chaining trust without multiplying, is the classic error. Only the discounted product makes propagation sound: trusting a good judge of cars does not make their mechanic trustworthy - it makes them a better witness about the mechanic. Quote that intuition in the answer.",
            },
            keyTerms: [
              { term: "Trust network", definition: "A graph whose edges carry trust values, as in Advogato or Epinions." },
              { term: "Discounting", definition: "Multiplying trust values along a path so propagated trust decays with distance." },
              { term: "Trust metric", definition: "An algorithm computing source-to-node trust over the network (e.g. Advogato's max-flow style)." },
              { term: "Pairwise comparison", definition: "Ordinal 'A over B' statements organized into a matrix from which cardinal trust is derived." },
            ],
            examQuestions: [
              {
                q: "Explain trust network analysis: the discounted transitivity rule, multi-path aggregation, and fusion of trust with reputation. Work the two-path example.",
                marks: 7,
                outline: [
                  "Trust network: edges carry values (Advogato, Epinions).",
                  "Discounting: t(A->C) = t(A->B) x t(B->C) - why plain chaining fails.",
                  "Path 1: 0.8 x 0.5 = 0.40; path 2: 0.9 x 0.8 = 0.72.",
                  "Aggregate mean = 0.56 for the stranger.",
                  "Fusion: use reputation where no path reaches.",
                  "Comparisons: ordinal 'trust A more than B' -> derived scale.",
                ],
              },
              {
                q: "Why does propagated trust decay along chains, and how should a system choose between mean and min aggregation?",
                marks: 7,
                outline: [
                  "Each hop multiplies by a value below 1 - evidence weakens with distance.",
                  "Uncertainty grows per hop even when values look stable.",
                  "Mean aggregation is optimistic - one strong path helps.",
                  "Min aggregation is conservative - the weakest link caps the result.",
                  "High-stakes decisions prefer min or discounted means with hop penalties.",
                  "Long chains rarely justify large exposure - cap hops in the metric.",
                ],
              },
            ],
          },
          {
            number: "4.8",
            title: "Attack spectrum and countermeasures",
            body: [
              "The attack spectrum is the catalogue of ways trust and reputation systems are gamed. Sybil attacks forge many fake identities and edges between them to amplify one actor's voice. Whitewashing abandons a damaged identity and rejoins fresh, resetting reputation. On-off attacks alternate good and bad behaviour to exploit systems that forget quickly. Bad-mouthing colludes to lower rivals' scores; ballot stuffing inflates accomplices'. Each exploits a specific design choice - open admission, cheap re-entry, fast forgetting, or naive aggregation.",
              "The countermeasures pair one-to-one. Sybil: social-trust admission control - SybilGuard and SybilLimit bound forged edges by the number of genuine cross-cut edges an attacker's real friends provide; challenge-response and entry cost raise forgery prices. Whitewashing: make re-entry costly and link new identities to proven ones. On-off: slow forgetting factors that retain history, so one bad act among many good ones does not wash out. Bad-mouthing and stuffing: discount second-hand evidence and detect collusion by score correlation.",
              "A worked example of on-off versus forgetting: an attacker accumulates r = 10 positive reports, then behaves badly once. With forgetting factor lambda = 0.9 per period, the effective positive count decays slowly - after five periods 10 x 0.9^5 = 5.9 remains, so the single bad report moves b only slightly. With lambda = 0.5, after two periods only 10 x 0.25 = 2.5 remains and the attacker recovers quickly. Slow forgetting is the defence, at the cost of slower recovery for genuinely reformed users.",
              "Exam framing: name the five attacks with one-line mechanics, pair each with its countermeasure, and run the lambda arithmetic for on-off - 10 x 0.9^5 = 5.9 surviving reports versus 10 x 0.25 after two periods at lambda = 0.5. The pairing discipline - attack then defence, never defence alone - is the mark scheme, and the closing trade-off sentence (slow forgetting also delays honest recovery) is the nuance examiners use to separate top answers.",
            ],
            bullets: [
              "Sybil: forge identities/edges to multiply influence - cheap in open systems.",
              "Whitewashing: abandon damaged identity, rejoin fresh.",
              "On-off: alternate good/bad to exploit fast forgetting.",
              "Bad-mouthing / ballot stuffing: push rivals down, accomplices up.",
              "Sybil defence: SybilGuard/SybilLimit bound fakes by genuine cross-cut edges.",
              "On-off defence: slow forgetting factor; whitewashing defence: re-entry cost.",
            ],
            diagram: {
              kind: "fork",
              title: "The attack spectrum and its counters",
              caption: "Every branch is an attack paired with the defence that answers it.",
              start: "Attacker strategy",
              branches: [
                { label: "Sybil identities", outcome: "forge edges - SybilGuard/SybilLimit bound by real friendships", good: false },
                { label: "Whitewashing", outcome: "rejoin fresh - raise re-entry cost, link identities", good: false },
                { label: "On-off oscillation", outcome: "exploit forgetting - slow lambda retains history", good: false },
                { label: "Bad-mouthing / stuffing", outcome: "manipulate others - discount evidence, detect collusion", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "onoff.py - why the forgetting factor decides the game",
              code: `def surviving_evidence(r, lam, periods):
    return r * lam ** periods

for lam in (0.9, 0.5):
    keep = surviving_evidence(10, lam, 5)   # after 5 periods
    print(f"lambda={lam}: {keep:.2f} of 10 positive reports still count")
# lambda=0.9 -> 5.90 (memory retained, one bad act barely dents b)
# lambda=0.5 -> 0.31 (attacker recovers fast - the exploitable design)`,
            },
            callout: {
              type: "exam",
              title: "Never write a defence without its attack",
              body: "The mark scheme pairs them: Sybil -> SybilGuard/SybilLimit, whitewashing -> entry cost, on-off -> slow forgetting, bad-mouthing -> evidence discounting. An answer listing defences without naming the attack they answer loses the structure marks.",
            },
            keyTerms: [
              { term: "Sybil attack", definition: "Forging multiple fake identities and edges to amplify influence in a trust system." },
              { term: "SybilGuard", definition: "A social-trust admission protocol bounding forged identities by genuine cross-cut edges." },
              { term: "Whitewashing", definition: "Discarding a bad reputation by rejoining with a fresh identity." },
              { term: "On-off attack", definition: "Alternating good and bad behaviour to exploit a forgetting reputation system." },
              { term: "Forgetting factor", definition: "The decay (lambda) applied to old evidence - slow decay resists on-off attacks." },
            ],
            examQuestions: [
              {
                q: "Describe the attack spectrum against trust and reputation systems, with one countermeasure for each attack. Include the on-off versus forgetting-factor analysis.",
                marks: 7,
                outline: [
                  "Sybil: forged identities/edges -> SybilGuard/SybilLimit social admission.",
                  "Whitewashing: fresh rejoin -> entry cost, identity linkage.",
                  "On-off: alternate behaviour -> slow forgetting factor.",
                  "Bad-mouthing/stuffing: manipulate others -> discount evidence, collusion detection.",
                  "Worked: lambda = 0.9 keeps 10 x 0.9^5 = 5.9 of 10 reports after 5 periods.",
                  "lambda = 0.5 keeps 0.31 - the exploitable design.",
                ],
              },
              {
                q: "Explain the Sybil attack and why social-network structure provides a defence.",
                marks: 7,
                outline: [
                  "Attacker creates many fake identities with mutual edges - cheap in open systems.",
                  "Goal: amplify votes, inflate reputation, or corrupt trust metrics.",
                  "SybilGuard insight: fake edges are cheap, but cutting into the honest graph needs real friendships.",
                  "Attackers' sybils connect to the honest region through few genuine cross-cut edges.",
                  "Random-walk admission limits sybils to roughly that cut size.",
                  "Cost: honest newcomers are also slowed - the trade-off to mention.",
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
      title: "Visualization and Applications of Social Networks",
      summary:
        "Unit V is the unit of seeing: graph theory and its model families, centrality with its worked small-graph mathematics, clustering from egos to whole networks, node-edge diagrams and their layouts, matrix representation and matrix-based visualization, the matrix-versus-node-link comparison with hybrid representations, and the closing applications - cover networks, community welfare, collaboration networks and co-citation networks.",
      chapter: {
        number: "05",
        title: "Seeing Networks: Centrality, Clustering and Diagrams",
        intro:
          "Unit V covers graph theory, centrality, clustering, node-edge diagrams, matrix representation, visualizing online social networks, matrix-based representations, matrix and node-link diagrams, hybrid representations, and applications including cover networks, community welfare, collaboration networks and co-citation networks.",
        inOneBreath:
          "Graph theory supplies the objects - nodes, edges, paths - and the model families: random, small-world and scale-free. Centrality ranks actors four ways - degree, closeness, betweenness, eigenvector - each computable on a 5-node graph in the exam. Clustering coefficients measure closure from ego to whole network. Visualization splits into node-edge diagrams (intuitive topology, hairball-prone) and matrix views (precise density, block-reading after reordering), with hybrids and linked views resolving the choice by task. The applications close the course: network covers, community welfare, collaboration and co-citation networks.",
        sections: [
          {
            number: "5.1",
            title: "Graph theory for social networks",
            body: [
              "A graph G = (V, E) is the subject's formal object: people as vertices, relationships as edges, optionally directed, weighted or signed. The basic inventory - degree, walks and paths, connectivity and components, bipartite structure - plus the adjacency matrix as the complete record. These are the terms every later section reuses, which is why the syllabus opens visualization with them.",
              "Three model families describe real networks. Erdos-Renyi random graphs wire each pair with probability p, giving Poisson degree distributions - a null model to beat. Watts-Strogatz small-world graphs rewire a ring lattice slightly, keeping high clustering while collapsing path lengths - 'everyone is six hops away'. Barabasi-Albert scale-free graphs grow by preferential attachment - new nodes link to the already-popular - producing a power-law degree distribution with a few dominant hubs.",
              "A worked example contrasts two 4-node graphs. Path graph A-B-C-D: diameter 3, density 4 edges of 6 possible = 2(4)/(4 x 3) = 0.67? No - 4 edges among 4 nodes has C(4,2) = 6 possible edges, so density = 4/6 = 0.67 only if all four edges exist; the path has 3 edges, so density = 3/6 = 0.5, diameter 3, clustering 0. The complete graph K4: density 1, diameter 1, clustering 1. One rewiring step in a WS ring preserves most clustering but creates the shortcut that collapses path length - the small-world trade made concrete.",
              "Exam framing: define the object and its variants in one sentence, then the three families with degree distribution, clustering and path-length behaviours - the table below is the answer structure - and compute density, diameter and clustering on one small 4-node graph with formulas written first. Closing with the one-line mechanism of each family (random wiring, rewiring shortcuts, preferential attachment) completes the answer, because examiners ask why the signature arises, not just what it is.",
            ],
            bullets: [
              "G = (V, E): vertices, edges; directed/weighted/signed variants.",
              "Inventory: degree, paths, connectivity, components, bipartite structure, adjacency matrix.",
              "Erdos-Renyi: random wiring, Poisson degrees - the null model.",
              "Watts-Strogatz: high clustering + short paths = the small world.",
              "Barabasi-Albert: preferential attachment, power-law degrees, hubs.",
              "Worked contrast: path graph density 0.5 / diameter 3 vs K4 density 1 / diameter 1.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From social facts to graph measures",
              caption: "The modelling pipeline every analysis repeats.",
              stages: [
                { label: "Define nodes/edges", note: "who, and what relation counts" },
                { label: "Choose graph class", note: "directed? weighted? signed?" },
                { label: "Compute invariants", note: "density, diameter, clustering" },
                { label: "Interpret structure", note: "random, small-world, scale-free?" },
                { label: "Feed SNA", note: "centrality, communities, visualization" },
              ],
            },
            table: {
              caption: "The three model families compared.",
              headers: ["Model", "Degree distribution", "Clustering", "Path length", "Real-world echo"],
              rows: [
                ["Erdos-Renyi random", "Poisson", "low (≈ p)", "log n", "no structure - a null model"],
                ["Watts-Strogatz small-world", "like lattice", "high", "log n after few rewirings", "friendship circles, short chains"],
                ["Barabasi-Albert scale-free", "power law", "moderate", "very short via hubs", "web, follower networks"],
              ],
            },
            callout: {
              type: "tip",
              title: "Small world and scale-free answer different questions",
              body: "Small-world answers 'why do short paths exist?' - rewiring shortcuts. Scale-free answers 'why do hubs exist?' - preferential attachment. Questions often conflate them; keeping the two mechanisms separate is the conceptual mark.",
            },
            keyTerms: [
              { term: "Adjacency matrix", definition: "The n x n record of edges - the complete representation of a graph." },
              { term: "Small-world network", definition: "High clustering combined with short average path lengths (Watts-Strogatz)." },
              { term: "Scale-free network", definition: "Power-law degree distribution produced by preferential attachment (Barabasi-Albert)." },
              { term: "Preferential attachment", definition: "New nodes link to popular nodes with probability proportional to degree - hubs beget hubs." },
            ],
            examQuestions: [
              {
                q: "Explain the graph-theoretic foundations of social networks: the object, its inventory of measures and the three model families with their signatures.",
                marks: 7,
                outline: [
                  "Define G = (V, E) with directed/weighted/signed variants.",
                  "Inventory: degree, paths, components, bipartite, adjacency matrix.",
                  "Erdos-Renyi: Poisson degrees - the null model.",
                  "Watts-Strogatz: high clustering + log paths - small world.",
                  "Barabasi-Albert: power law + hubs - scale-free.",
                  "Worked: path graph density 0.5, diameter 3; K4 density 1, diameter 1.",
                ],
              },
              {
                q: "Compute density, diameter and clustering for a 4-node path graph and for the complete graph K4, and interpret the contrast.",
                marks: 7,
                outline: [
                  "Path graph: 3 edges, C(4,2) = 6 possible -> density 0.5.",
                  "Diameter 3 (end-to-end); clustering 0 (no triangles).",
                  "K4: 6 edges -> density 1; diameter 1; clustering 1.",
                  "Contrast: sparse chains travel slowly; complete graphs are trivially dense.",
                  "Real networks sit between - clustered locally, short globally (small world).",
                  "State formulas before substituting.",
                ],
              },
            ],
          },
          {
            number: "5.2",
            title: "Centrality measures with worked small-graph mathematics",
            body: [
              "Centrality answers 'who matters?' - and the four measures answer four different questions. Degree centrality counts ties: local activity or popularity. Closeness is the reciprocal of the mean distance to all others: speed of reaching the network. Betweenness counts the fraction of shortest paths that pass through an actor: brokerage and control of flow. Eigenvector centrality (and PageRank) score actors by the importance of their neighbours: influence in the recursive sense - connection to important people counts more than connection to many.",
              "Choosing the measure is part of the analysis, because each answers a different practical question: degree for seeding campaigns (popularity), closeness for information spreading (speed of reach), betweenness for disruption or mediation (brokers and gate-keepers), eigenvector/PageRank for authority ranking (recursive influence). On directed networks use in-degree variants; on weighted networks state whether weights amplify or cap the count; and when two measures disagree about who leads, the disagreement is itself the finding worth reporting.",
              "A worked example on the 5-node star with centre C and four leaves: degree C = 4, leaves = 1. Closeness (reciprocal of mean distance): C = 1/1 = 1.0; a leaf = 1/1.75 = 0.57. Betweenness: every leaf-leaf pair's shortest path passes through C - there are C(4,2) = 6 such pairs - so C scores 6 and every leaf 0. Eigenvector concentrates on C. Four measures, one graph, four numbers each - the standard exam numerical.",
              "Exam framing: write each formula, compute two or more measures on the given small graph, and interpret who leads under each with one sentence per measure. The star-graph closed form - hub betweenness = C(n-1, 2) = 6 for five nodes - doubles as your arithmetic check, and stating the normalization convention (raw vs networkx-normalized) prevents the one dispute that costs marks in this numerical.",
            ],
            bullets: [
              "Degree: tie count - local popularity; in-degree on directed graphs.",
              "Closeness: 1 / mean distance to all - reach speed.",
              "Betweenness: fraction of shortest paths through the actor - brokerage.",
              "Eigenvector/PageRank: importance from important neighbours - recursive influence.",
              "Star graph: hub degree 4, closeness 1.0, betweenness C(4,2) = 6, leaves 0.",
              "Match measure to question: seeding -> degree, spreading -> closeness, disruption -> betweenness.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Four centralities, from local to strategic",
              caption: "Index 0 is the top: the higher tier, the more structural the measure.",
              tiers: [
                { label: "Eigenvector / PageRank", note: "influence from important neighbours" },
                { label: "Betweenness", note: "brokerage - control of shortest paths" },
                { label: "Closeness", note: "speed of reaching everyone" },
                { label: "Degree", note: "raw local popularity" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "centrality.py - the star graph, all four measures",
              code: `import networkx as nx

S = nx.star_graph(4)                 # centre 0, leaves 1-4
print(nx.degree_centrality(S))
# {0: 1.0, leaves: 0.25}
print(nx.closeness_centrality(S))
# {0: 1.0, leaf: 4/(1+2+2+2)/4 -> 0.571}
print(nx.betweenness_centrality(S))
# {0: 1.0 (normalized, = 6 raw), leaves: 0.0}
print(nx.eigenvector_centrality_numpy(S))
# centre dominates - connected to the (only) important nodes`,
            },
            callout: {
              type: "exam",
              title: "The star-graph closed form checks your sum",
              body: "In a star with n nodes, the hub's raw betweenness equals the number of leaf pairs, C(n-1, 2) - for n = 5 that is 6. Compute the sum first, then check against the closed form; normalized networkx output divides by (n-1)(n-2)/2, so quote which convention you used.",
            },
            keyTerms: [
              { term: "Degree centrality", definition: "Normalized tie count - local activity or popularity." },
              { term: "Closeness centrality", definition: "Reciprocal of the mean shortest-path distance to all other actors." },
              { term: "Betweenness centrality", definition: "Fraction of all-pairs shortest paths passing through an actor - brokerage." },
              { term: "PageRank", definition: "Eigenvector-style importance where links from important actors count more." },
            ],
            examQuestions: [
              {
                q: "Define degree, closeness, betweenness and eigenvector centrality. Compute them on a 5-node star graph and interpret who leads under each measure.",
                marks: 7,
                outline: [
                  "Degree: hub 4, leaves 1 - popularity.",
                  "Closeness: hub 1/1 = 1.0; leaf 1/1.75 = 0.57 - reach speed.",
                  "Betweenness: hub = C(4,2) = 6 leaf-pairs; leaves 0 - brokerage.",
                  "Eigenvector: concentrates on the hub - recursive influence.",
                  "Interpretation: the same actor leads all four here; graphs split them.",
                  "State normalization conventions used.",
                ],
              },
              {
                q: "A network has one broker joining two dense groups. Which centrality identifies the broker, and why do degree and closeness fail?",
                marks: 14,
                outline: [
                  "Betweenness finds the broker: shortest paths between groups pass through it.",
                  "Degree fails: the broker may have few ties - quality, not quantity.",
                  "Closeness fails: it measures reach speed, not gate-keeping.",
                  "Eigenvector may even penalize - broker's neighbours span groups, not elites.",
                  "Application: target the broker for information flow or removal.",
                  "Worked intuition: removing the broker disconnects the groups.",
                  "Normalized betweenness = pair-counts through node / all pairs.",
                ],
              },
            ],
          },
          {
            number: "5.3",
            title: "Clustering: from ego networks to whole networks",
            body: [
              "Clustering coefficient measures how tightly a neighbourhood closes into triangles. The ego (local) version: for an actor with k neighbours and e edges among them, C = e / C(k, 2) - the fraction of neighbour pairs that are themselves tied. The global version, transitivity, is 3 x (number of triangles) / (number of connected triples) - the probability that two of an actor's neighbours are themselves connected, averaged over the network.",
              "The empirical signature: real social networks show local clustering from 0.1 to 0.6, while a random graph of the same size shows clustering near p, tiny by comparison - closure is a social fact, not a wiring artefact. The Watts-Strogatz model ties the measures together: rewiring a lattice barely dents local clustering but collapses global path length, producing the small world - high C with low L.",
              "A worked example: an ego with k = 4 neighbours and e = 3 edges among them gives C = 3/6 = 0.5 - three of the six neighbour pairs are tied. For a whole network with 2 triangles and 14 connected triples, transitivity = (3 x 2)/14 = 0.43. Both numbers live in [0, 1], both compute in one line, and both are standard exam numericals where writing the formula first, then substituting, is the difference between full credit and a deduction.",
              "Exam framing: give both formulas, compute one ego and one global value with the substitutions shown, and contrast with the random-graph expectation (clustering near p, near zero) to prove the closure is social, not artefact. The clustering-versus-density contrast - local closure versus global completeness - is the conceptual follow-up examiners add, so prepare the one-sentence version: my friends knowing each other is clustering; how complete the whole graph is, is density.",
            ],
            bullets: [
              "Ego clustering: C = e / C(k, 2) - fraction of neighbour pairs linked.",
              "Global transitivity: 3 x triangles / connected triples.",
              "Real networks: C ~ 0.1-0.6; random graphs of same size ~ p.",
              "Watts-Strogatz: rewiring keeps high C while collapsing L - small world.",
              "Worked: k = 4, e = 3 -> C = 0.5; network with 2 triangles, 14 triples -> 0.43.",
              "Clustering (local closure) vs density (global completeness) - different questions.",
            ],
            diagram: {
              kind: "matrix",
              title: "Clustering against density - four network shapes",
              caption: "The two numbers together classify the network's texture.",
              axes: { x: "global density (sparse -> dense)", y: "local clustering (low -> high)" },
              quadrants: [
                { label: "Core-periphery", note: "clustered core, thin rim - common in organizations" },
                { label: "Community-dense", note: "clustered and dense - overlapping cliques" },
                { label: "Random-like", note: "neither clustered nor dense - Erdos-Renyi" },
                { label: "Flat dense", note: "many edges but no cliques - random with high p" },
              ],
            },
            table: {
              caption: "Clustering quantities, formulas and readings.",
              headers: ["Quantity", "Formula", "Range", "Reads as"],
              rows: [
                ["Ego clustering", "e / C(k,2)", "[0, 1]", "closure around one actor"],
                ["Transitivity", "3T / connected triples", "[0, 1]", "network-wide closure"],
                ["Random expectation", "≈ p (edge probability)", "tiny", "the null to compare against"],
                ["WS rewiring effect", "C stays high, L falls", "-", "the small-world trade"],
              ],
            },
            callout: {
              type: "tip",
              title: "Clustering is local, density is global",
              body: "The classic slip is treating them as synonyms. Clustering asks: are my friends friends with each other? Density asks: how complete is the whole graph? A star has density 1.0 at the hub's ego level but zero clustering; a ring of cliques can cluster highly at low density. Say the difference in one sentence whenever both appear.",
            },
            keyTerms: [
              { term: "Clustering coefficient", definition: "Fraction of an actor's neighbour pairs that are themselves connected." },
              { term: "Transitivity", definition: "Network-wide closure: three times triangles over connected triples." },
              { term: "Core-periphery", definition: "A clustered, dense core with a sparsely attached rim." },
              { term: "Small-world trade", definition: "Few rewirings preserve clustering while collapsing path length." },
            ],
            examQuestions: [
              {
                q: "Define the clustering coefficient and transitivity. Compute both for given values (ego with k = 4, e = 3; network with 2 triangles and 14 connected triples) and contrast with a random graph.",
                marks: 7,
                outline: [
                  "Ego formula: C = e / C(k,2) = 3/6 = 0.5.",
                  "Transitivity: 3T / triples = 6/14 = 0.43.",
                  "Random graph of same size: clustering ≈ p, near zero.",
                  "Interpretation: real closure far above random - a social fact.",
                  "WS model: high C with short L - small world.",
                  "Contrast clustering (local) with density (global).",
                ],
              },
              {
                q: "Why does the Watts-Strogatz model matter for social networks? Describe what one rewiring step does to clustering and path length.",
                marks: 7,
                outline: [
                  "Start from a ring lattice: high clustering, long paths.",
                  "Rewire one edge: a long-range shortcut appears.",
                  "Local clustering barely falls - triangles elsewhere survive.",
                  "Average path length collapses - shortcuts compound across the ring.",
                  "Result: high C + low L - the small world.",
                  "Social echo: mostly local ties plus a few far acquaintances (weak ties).",
                ],
              },
            ],
          },
          {
            number: "5.4",
            title: "Node-edge diagrams and their layouts",
            body: [
              "The node-edge (node-link) diagram is the intuitive picture of a network - dots for actors, lines for ties - and its quality is governed by layout. Layout aesthetics, in the classic list: minimize edge crossings, distribute nodes evenly, keep edge lengths roughly uniform, keep adjacent nodes adjacent, and reflect community structure visually. A drawing that satisfies these lets a reader see degree, bridges and clusters without any computation.",
              "Layout families: force-directed methods (Fruchterman-Reingold and spring embedders) simulate attraction along edges and repulsion between all nodes, settling into a drawing that reveals clusters - the default for exploration. Circular layouts place nodes on a ring - honest for comparisons, blind to clusters. Hierarchical layouts suit trees and DAGs by layering levels. Geographic layouts map onto real coordinates when nodes have locations - contact networks, cities, migrations. Naming the family for the task is the layout decision, and it precedes any aesthetics tuning.",
              "A worked example: the karate club under force-directed layout visibly splits into two lobes matching the real factions - the picture alone performs the detection. Label the hubs only (degree >= 5) and the drawing stays readable at n = 34. The failure mode arrives with density: past a few hundred edges, crossings saturate and the drawing becomes a hairball where no structure is visible - the scalability limit of node-link drawings.",
              "Exam framing: name the aesthetics list, the four layout families with one line each, and the hairball limitation with its fixes - filter edges, bundle them, or switch to the matrix view of section 5.6. The karate-club drawing is the worked example to narrate, and the closing distinction - node-link fails on density, not on size - is the precise sentence that shows you understand when the representation itself is the bottleneck.",
            ],
            bullets: [
              "Aesthetics: few crossings, even spacing, uniform edges, adjacent nodes adjacent, visible clusters.",
              "Force-directed (Fruchterman-Reingold): attraction + repulsion; the default explorer.",
              "Circular: comparability over structure; hierarchical: trees and DAGs; geographic: located nodes.",
              "Karate club force-directed: two lobes matching the real split - the picture detects.",
              "Label hubs only; periphery labels destroy readability.",
              "Hairball limit: dense graphs defeat node-link drawings - filter, bundle, or switch views.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing a node-link layout",
              caption: "The task picks the layout; the hairball is the branch to avoid.",
              start: "Drawing goal",
              branches: [
                { label: "Explore cluster structure", outcome: "force-directed - clusters emerge as clumps", good: true },
                { label: "Compare nodes fairly", outcome: "circular - position is not meaning", good: true },
                { label: "Show hierarchy/flow", outcome: "hierarchical layout - levels visible", good: true },
                { label: "Dense graph, no filtering", outcome: "hairball - crossings saturate, unreadable", good: false },
              ],
            },
            codeExample: {
              language: "python",
              caption: "draw.py - force-directed drawing with hub-sized nodes",
              code: `import networkx as nx
import matplotlib.pyplot as plt

G = nx.karate_club_graph()
pos = nx.spring_layout(G, seed=7)          # force-directed placement
deg = dict(G.degree())
nx.draw(G, pos,
        node_size=[50 * deg[v] for v in G],  # hubs draw larger
        with_labels=False)
plt.show()
# two lobes visible - matching the club's real fission`,
            },
            callout: {
              type: "warning",
              title: "Node-link fails on density, not size",
              body: "Five thousand sparse nodes still draw legibly; three hundred densely interconnected ones do not. The failure variable is edge density, so the fix is structural - filter edges, bundle them, or move to matrix view - not a bigger canvas.",
            },
            keyTerms: [
              { term: "Force-directed layout", definition: "Placement by simulated attraction/repulsion; clusters emerge visually." },
              { term: "Fruchterman-Reingold", definition: "The classic spring-embedder algorithm for node-link drawing." },
              { term: "Hairball", definition: "The unreadable dense node-link drawing where crossings saturate." },
              { term: "Graph aesthetics", definition: "The criteria - crossings, spacing, uniformity - that make a drawing readable." },
            ],
            examQuestions: [
              {
                q: "Explain node-edge diagrams: the aesthetic criteria, the main layout families and the scalability limitation, with the karate-club drawing as example.",
                marks: 7,
                outline: [
                  "Node-edge: dots and lines - the intuitive network picture.",
                  "Aesthetics: minimize crossings, even spacing, uniform edges, visible clusters.",
                  "Force-directed: attraction/repulsion; default for exploration.",
                  "Circular, hierarchical, geographic - one line each.",
                  "Karate club: two force-directed lobes match the real factions.",
                  "Limitation: dense graphs become hairballs - filter, bundle, or use matrices.",
                ],
              },
              {
                q: "When should a network not be drawn as a node-edge diagram, and what should be done instead?",
                marks: 7,
                outline: [
                  "High edge density: crossings saturate beyond a few hundred edges.",
                  "Exact adjacency needed: drawings distort perception of density.",
                  "Comparing many snapshots: drawings differ by layout noise.",
                  "Instead: matrix heatmap, or filtered/segmented node-link views.",
                  "Hybrid linked views combine both (section 5.6).",
                  "Decision rule: task decides the representation.",
                ],
              },
            ],
          },
          {
            number: "5.5",
            title: "Matrix representation and matrix-based visualization",
            body: [
              "The adjacency matrix records every edge: A_ij = 1 (or the weight) if i links to j, symmetric for undirected graphs. Drawn as a grid heatmap - dark cell where an edge exists - it becomes a visualization: the matrix view. Its variables are the row/column ordering and the shading; both are design choices that change what the eye can see.",
              "Reading a matrix view: diagonal blocks (dark squares on the diagonal) are communities - sets of nodes densely tied among themselves; off-diagonal dots are bridges between communities; the ink fraction is the density; symmetry is visible at a glance. Reordering rows and columns - by community, by degree, by a spectral order - is the key operation: the same matrix, reordered, reveals structure the natural order hides. Time comparison aligns orders across snapshots so changes read as moving dots.",
              "A worked example: six nodes forming two triangles joined by one bridge edge. In natural order the matrix looks scattered. Reorder rows to {1,2,3} then {4,5,6}: two dark diagonal blocks appear and exactly one off-diagonal cell - the bridge - remains. Three diagonal cells per block, one off-diagonal dot: the drawing states the community structure in one glance, and the bridge pair identifies the broker candidate without running any detection algorithm at all.",
              "Exam framing: define the matrix view, list what it reveals - blocks, bridges, density, symmetry - and run the reorder example to its two-blocks-and-a-dot conclusion. Its exam question is usually 'advantages over node-edge diagrams', so write the four-item list: density scaling, no crossings, exact adjacency, easy snapshot comparison - then concede the path-tracing weakness for the balance mark, which completes the standard 7-mark structure.",
            ],
            bullets: [
              "A_ij = 1/weight if edge; symmetric for undirected graphs.",
              "Matrix view: grid heatmap, dark cells at edges.",
              "Diagonal blocks = communities; off-diagonal dots = bridges; ink fraction = density.",
              "Reordering (community, degree, spectral) is the visualization's main operation.",
              "Strengths: scales to density, no crossings, exact lookups, snapshot comparison.",
              "Weakness: paths and connectivity are hard to trace in matrices.",
            ],
            diagram: {
              kind: "flow",
              title: "Building a matrix view",
              caption: "Ordering is the step that turns a table of edges into a picture.",
              steps: [
                { label: "Collect edges", note: "the raw tie list" },
                { label: "Build adjacency matrix", note: "A_ij = 1 / weight" },
                { label: "Order rows/columns", note: "by community or spectral order" },
                { label: "Shade cells", note: "dark = edge; tone = weight" },
                { label: "Read pattern", note: "blocks, bridges, density" },
              ],
            },
            table: {
              caption: "Matrix patterns and what they reveal.",
              headers: ["Pattern", "Reveals", "Action"],
              rows: [
                ["Dark diagonal blocks", "communities", "order by detected partition"],
                ["Isolated off-diagonal dot", "bridge between groups", "inspect the broker pair"],
                ["Uniform scattered ink", "no community structure", "compare against random baseline"],
                ["Band structure", "ordered relationship (age, rank)", "sort by the covariate"],
                ["Asymmetric cells", "directed ties", "check reciprocity"],
              ],
            },
            callout: {
              type: "exam",
              title: "The matrix advantages list",
              body: "The standard question is 'advantages of matrix over node-edge diagrams': scales to dense graphs, no crossing clutter, exact adjacency lookup, trivial comparison across snapshots by keeping the same order. Write all four, then concede the weakness - tracing paths is hard - for the balance mark.",
            },
            keyTerms: [
              { term: "Matrix view", definition: "Visualizing a network as a shaded adjacency grid." },
              { term: "Ordering (permutation)", definition: "Row/column arrangement choice that exposes or hides block structure." },
              { term: "Block structure", definition: "Dark diagonal squares marking densely connected communities." },
              { term: "Bridge cell", definition: "An isolated off-diagonal mark joining two blocks." },
            ],
            examQuestions: [
              {
                q: "Explain matrix-based visualization of social networks: the representation, what the patterns reveal, and the advantages over node-edge diagrams.",
                marks: 7,
                outline: [
                  "A_ij = 1/weight; symmetric undirected; drawn as shaded grid.",
                  "Diagonal blocks = communities; off-diagonal dots = bridges.",
                  "Ink fraction = density; symmetry visible at a glance.",
                  "Reordering exposes structure the natural order hides.",
                  "Worked: two triangles + one bridge -> reorder reveals 2 blocks + 1 dot.",
                  "Advantages: density scaling, no crossings, exact adjacency, snapshot comparison.",
                ],
              },
              {
                q: "Six nodes form two triangles joined by one edge. Describe the matrix before and after reordering, and what the single off-diagonal cell means.",
                marks: 7,
                outline: [
                  "Natural order: scattered marks, structure hidden.",
                  "Reorder {1,2,3},{4,5,6}: two dark diagonal blocks appear.",
                  "Exactly one off-diagonal cell remains - the bridge edge.",
                  "The bridge pair is the only cross-group tie - a broker candidate.",
                  "Same matrix, different order - ordering is the visualization.",
                  "Generalize: community-ordered matrices make detection results visible.",
                ],
              },
            ],
          },
          {
            number: "5.6",
            title: "Matrix and node-link diagrams; hybrid representations",
            body: [
              "The two canonical views have opposite strengths. Node-link drawings show topology intuitively - paths, stars, lobes - but degrade with density and distort perception of adjacency. Matrix views show density and adjacency exactly and scale to dense graphs, but make path-tracing laborious and need learned reading. Neither is 'better'; each serves a task class, and the professional answer states the task first.",
              "Hybrid representations resolve the dilemma by combining both. Matrix-overlaid node-link diagrams replace each edge with a miniature adjacency matrix, showing local density at each node. Arc diagrams place nodes on a line and draw edges as arcs - readable when ordered by community. Edge bundling curves similar edges together, decluttering hairballs without deleting edges. Semantic substrates place nodes into attribute-defined panels, and linked views coordinate a matrix and a node-link drawing so selections highlight in both.",
              "A worked example: one 1000-edge network, two views. The node-link drawing is a hairball - no structure visible. The same edges as a community-ordered matrix show three diagonal blocks and sparse off-diagonal dots. The linked-view hybrid lets the analyst brush a block and see exactly those nodes highlight in the drawing - the blocks carry density truth, the drawing carries the narrative. Task assignment: tracing a rumour path -> node-link; comparing community density across years -> matrix.",
              "Exam framing: state the opposition in one line per view, name three hybrids with their mechanism - bundling, arc diagrams, linked views - and end with the task-decides rule applied to one concrete pair of tasks. The cycle diagram below is the honest workflow: render, inspect against the task, refine - because representation choice in practice is iterative, and saying so is the professional mark.",
            ],
            bullets: [
              "Node-link: intuitive topology and paths; hairballs under density.",
              "Matrix: exact adjacency and density; hard path tracing, learned reading.",
              "Hybrids: matrix-overlaid node-link, arc diagrams, edge bundling, semantic substrates.",
              "Linked views: selection in one view highlights in the other.",
              "Task rule: trace paths -> node-link; compare density/structure -> matrix.",
              "Worked: 1000 edges - hairball vs three ordered blocks; linked view unites them.",
            ],
            diagram: {
              kind: "cycle",
              title: "Choosing and refining the representation",
              caption: "Representation choice is iterative - the task judges each render.",
              steps: [
                { label: "State the task", note: "trace paths? compare density?" },
                { label: "Choose representation", note: "node-link, matrix, hybrid" },
                { label: "Render", note: "layout / ordering / shading" },
                { label: "Inspect", note: "does it answer the task?" },
                { label: "Refine", note: "reorder, filter, switch view" },
              ],
            },
            codeExample: {
              language: "python",
              caption: "views.py - the same graph as node-link and matrix",
              code: `import networkx as nx, numpy as np
import matplotlib.pyplot as plt

G = nx.karate_club_graph()
A = nx.adjacency_matrix(G).todense()

fig, ax = plt.subplots(1, 2)
nx.draw(G, nx.spring_layout(G, seed=3), ax=ax[0], node_size=40)
ax[1].imshow(A, cmap="Greys")               # matrix view
plt.show()
# node-link shows lobes; matrix shows block pattern after ordering`,
            },
            callout: {
              type: "tip",
              title: "Say 'the task decides'",
              body: "When asked to compare matrix and node-link diagrams, end with the assignment rule: rumour-path tracing belongs to node-link, density comparison belongs to matrix, and hybrids serve tasks needing both. That closing sentence converts a comparison into an applied answer - and it is a distinct mark.",
            },
            keyTerms: [
              { term: "Hybrid representation", definition: "A visualization combining matrix precision with node-link intuition." },
              { term: "Arc diagram", definition: "Nodes on a line with edges as arcs - readable when ordered well." },
              { term: "Edge bundling", definition: "Curving similar edges together to declutter dense drawings." },
              { term: "Linked views", definition: "Coordinated displays where selections highlight across representations." },
            ],
            examQuestions: [
              {
                q: "Compare matrix and node-link diagrams for visualizing social networks, and explain hybrid representations with examples.",
                marks: 7,
                outline: [
                  "Node-link: intuitive topology/paths; hairballs when dense.",
                  "Matrix: exact adjacency/density; path tracing hard.",
                  "Hybrids: matrix-overlaid node-link; arc diagrams; edge bundling.",
                  "Semantic substrates: attribute panels; linked views: coordinated highlights.",
                  "Worked: 1000-edge network - hairball vs 3 ordered blocks.",
                  "Task rule: paths -> node-link; density -> matrix.",
                ],
              },
              {
                q: "An analyst must compare community density across four yearly snapshots and trace one rumour's path. Which representation for each, and why?",
                marks: 7,
                outline: [
                  "Density comparison across snapshots -> matrix with fixed order.",
                  "Same ordering keeps blocks comparable year to year.",
                  "Ink-fraction per block quantifies density change.",
                  "Rumour tracing -> node-link drawing.",
                  "Paths are visually followable; matrices make hops laborious.",
                  "Conclusion: one task, one view - hybrids if both are needed together.",
                ],
              },
            ],
          },
          {
            number: "5.7",
            title: "Applications: cover networks, community welfare, collaboration and co-citation networks",
            body: [
              "The closing applications assemble the unit's machinery. Cover networks: a network cover is a collection of overlapping communities that together include every node - acknowledging that people belong to several groups at once; covers relax the partition assumption of Unit III. Community welfare asks how a community's benefit or cost distributes among members - game-theoretic allocation where contribution, centrality or marginal value sets shares; it formalizes fairness questions in credit assignment and resource sharing.",
              "Collaboration networks record joint work: co-authorship (papers as events creating edges between authors), boards, film crews. They are the substrate of the Erdos number - an author's collaborative distance from Paul Erdos - and their clustering reveals research groups without any declared affiliation. Co-citation networks connect two papers (or authors) by the number of times they are cited together; the edge weight is a similarity, and clustering the co-citation graph maps a field's intellectual structure - the classic science-mapping application.",
              "A worked example: a 12-faculty department's co-authorship graph clusters into three groups - databases, networks, HCI - matching the actual labs; the one faculty member co-authoring across all three groups has the highest betweenness, the department's connector. On the co-citation side, two papers cited together 15 times carry a strong edge; clustering that weighted graph yields the field's subareas. Both networks are symmetric and weighted - contrast with directed citation networks, where edges run from citing to cited.",
              "Exam framing: define all four applications in one line each, then develop one worked example - the co-authorship clustering is the fastest, with its three lab clusters and the betweenness-ranked connector. The pyramid below organizes the answer by scope, and the table gives the node/edge semantics per network; closing with the symmetric-versus-directed contrast is the semantic mark that this application question quietly tests.",
            ],
            bullets: [
              "Cover network: overlapping communities that jointly include every node.",
              "Community welfare: distributing benefit/cost among members by contribution or marginal value.",
              "Collaboration networks: co-authorship, boards, crews - symmetric, weighted.",
              "Erdos number: collaborative distance to Paul Erdos on the co-authorship graph.",
              "Co-citation network: edge weight = joint citations; a similarity structure for mapping fields.",
              "Contrast: co-citation/collaboration are symmetric; citation networks are directed.",
            ],
            diagram: {
              kind: "pyramid",
              title: "Applications by scope",
              caption: "Index 0 is the top: from field-mapping down to individual collaborative identity.",
              tiers: [
                { label: "Science of science", note: "co-citation clustering maps fields" },
                { label: "Organizations", note: "collaboration audits, team welfare" },
                { label: "Communities", note: "covers - overlapping group membership" },
                { label: "Individuals", note: "Erdos number, co-author links" },
              ],
            },
            table: {
              caption: "Application networks: nodes, edges, insight.",
              headers: ["Network", "Nodes", "Edges", "Insight produced"],
              rows: [
                ["Cover", "actors", "community memberships (overlapping)", "everyone covered by several groups"],
                ["Community welfare", "community members", "contribution ties", "fair allocation of benefit/cost"],
                ["Collaboration", "authors/boards", "joint work (weighted)", "teams, Erdos distance, brokers"],
                ["Co-citation", "papers/authors", "joint citation count", "field structure, subareas"],
              ],
            },
            callout: {
              type: "exam",
              title: "Symmetric versus directed - say it",
              body: "Co-citation and collaboration edges are symmetric (cited together, wrote together), while plain citation edges run from citing to cited and are not. Distinguishing the three is the precise point this question tests; answers that blur them lose the semantics mark.",
            },
            keyTerms: [
              { term: "Network cover", definition: "A set of overlapping communities jointly including every node." },
              { term: "Community welfare", definition: "Game-theoretic allocation of a community's benefit or cost among its members." },
              { term: "Erdos number", definition: "An author's collaborative distance from Paul Erdos in the co-authorship graph." },
              { term: "Co-citation", definition: "Two works cited together; its frequency weights a similarity edge between them." },
            ],
            examQuestions: [
              {
                q: "Explain cover networks, community welfare, collaboration networks and co-citation networks, with one worked example drawn from a departmental co-authorship graph.",
                marks: 7,
                outline: [
                  "Cover: overlapping communities jointly covering all nodes - relaxes partition.",
                  "Welfare: allocation of benefit/cost by contribution or marginal value.",
                  "Collaboration: co-authorship graph; teams and brokers; Erdos number.",
                  "Co-citation: joint-citation weights; clustering maps fields.",
                  "Worked: 12-faculty graph -> 3 lab clusters; cross-group author = top betweenness.",
                  "Semantics: symmetric collaboration/co-citation vs directed citation.",
                ],
              },
              {
                q: "How does clustering a co-citation network map a scientific field? Contrast co-citation edges with direct citation edges.",
                marks: 14,
                outline: [
                  "Co-citation edge weight = times two works are cited together.",
                  "High weight = intellectual proximity - similar topics.",
                  "Cluster the weighted graph -> subareas of the field.",
                  "Named clusters become the field map; bridges show interdisciplinary work.",
                  "Direct citation edges run citing -> cited: directed, asymmetric, cumulative.",
                  "Co-citation is symmetric and similarity-based - different semantics.",
                  "Both need time windows: fields shift, so weights age.",
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
        "The archived IT-703 elective papers (Nov 2023, Dec 2024, Jun 2025 and Dec 2025 sessions - variants B and D) all follow one pattern: 70 marks, 8 questions, attempt any five, each question split into two 7-mark sub-parts. Variant C papers follow the same scheme, so prepare to write twelve to fourteen 7-mark answers with a definition, a mechanism and a worked example each.",
      ],
      weightedTopics: [
        { topic: "Unit II - RDF, OWL, ontologies and aggregation", weight: "≈ 14-16 marks", note: "One language question (triples/constructs) and one modelling/aggregation question are near-certain under the 7+7 sub-part scheme." },
        { topic: "Unit IV - privacy and subjective-logic trust", weight: "≈ 14-16 marks", note: "Threats-and-defences tables plus one opinion computation; the attack spectrum pairs attack with countermeasure." },
        { topic: "Unit V - centrality and clustering numericals", weight: "≈ 10-12 marks", note: "Compute degree/closeness/betweenness on a given small graph; quote formulas before substituting." },
        { topic: "Unit III - community detection and modularity", weight: "≈ 10-12 marks", note: "Pipeline + one method family + one modularity computation with interpretation bands." },
        { topic: "Unit I - semantic vs syntactic web, SNA measures", weight: "≈ 10-12 marks", note: "Limitations list with examples; density/diameter on a 5-node graph." },
        { topic: "Matrix vs node-link visualization", weight: "≈ 7 marks", note: "A guaranteed comparison - task-decides rule with the advantages list." },
        { topic: "Short notes: FOAF, reality mining, decentralized OSNs, co-citation", weight: "≈ 7-14 marks", note: "Quick wins - four definitions with one example each." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week, with weekends for drawing diagrams and writing timed 7-mark answers. Every algorithm and measure in this subject earns marks through a small worked example - practice the arithmetic, not just the prose.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - the web and the analysis", tasks: ["Limitations of the current Web with the mapping to fixes", "Semantic Web layer cake drawn top-down", "Web 1.0 vs Social Web compare table", "SNA history: Moreno, Barnes, Milgram, Granovetter", "Density/diameter/clustering on a 5-node graph"] },
        { week: "Week 2", focus: "Unit II - languages of meaning", tasks: ["TBox/ABox with one worked derivation", "RDF triples: convert five sentences, draw the graph", "OWL constructs table + transitivity demo", "FOAF profile merge via mbox_sha1sum", "Representation stack: matrix, list, graph DB, triple store"] },
        { week: "Week 3", focus: "Unit III - communities", tasks: ["Strong/weak community tests as degree inequalities", "Karate-club Girvan-Newman walkthrough with betweenness numbers", "Modularity Q computed and interpreted (0 / 0.3 / 0.5)", "Four method families compared - criterion, cost, weakness", "Archive evolution: Jaccard alignment worked example"] },
        { week: "Week 4", focus: "Unit IV - behaviour, privacy, trust", tasks: ["Link prediction: common neighbours + Adamic-Adar computed", "Check-in inference + k-anonymity arithmetic", "Degree-signature de-anonymization worked", "Subjective logic: opinion (b, d, u) from r/s counts", "Discounted trust propagation: two-path example", "Attack spectrum paired with countermeasures"] },
        { week: "Week 5", focus: "Unit V - seeing networks", tasks: ["Star-graph centralities: all four measures by hand", "Ego clustering + transitivity computations", "Force-directed layouts and the hairball limit", "Matrix reordering: two triangles + one bridge", "Matrix vs node-link comparison + hybrids"] },
        { week: "Week 6", focus: "Applications + revision", tasks: ["Cover, welfare, collaboration, co-citation - one line each", "Applications table with measure pairings", "Two full timed papers (attempt five of eight)", "Redraw every diagram from memory", "One-page formula sheet: density, Q, opinion, discounting"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "Every 7-mark answer here wants definition -> mechanism -> worked example -> interpretation. The worked example is half the marks - a small graph or arithmetic always beats another paragraph.",
        "Draw the diagram first, then write around it: layer cake, detection pipeline, opinion triple, matrix blocks. Examiners award structure visibly.",
        "Write formulas before substituting: density 2m/(n(n-1)), Q = sum (e_ii - a_i^2), b + d + u = 1, discounting t(A->B) x t(B->C).",
        "State conventions: undirected vs directed for density, normalized vs raw for betweenness, weighted vs binary for detection.",
        "Pair, never list: each limitation with its semantic fix, each threat with its defence, each attack with its countermeasure, each application with its measure.",
        "For trust answers, the uncertainty slot is the point - two sellers with the same ratio differ in u, and u drives the policy.",
        "For community questions, name the dataset you would demonstrate on (karate club, 34 nodes, 78 edges) - it signals practice.",
        "Time-box: 7 marks <= 11 minutes; leave 5 minutes at the end to check that every answer has its worked example.",
      ],
    },
    {
      id: "last-day",
      heading: "Last-day strategy and common slips",
      body: [
        "Do not learn anything new today. Redraw the ten diagrams in order - layer cake, Web 1.0/2.0 compare, SNA timeline, ontology pyramid, RDF graph, OWL species matrix, detection pipeline, trust pipeline, exposure grid, matrix blocks - each in under two minutes from memory.",
        "Rework only the six numericals: density and diameter on a 5-node path, modularity Q on the 8-edge split, Adamic-Adar on a shared-neighbour pair, beta-reputation opinion from r/s counts, discounted two-path trust, star-graph betweenness C(4, 2) = 6.",
        "Then read the key terms lists of all five units once, and sleep - this paper rewards clean structure, not last-minute breadth.",
      ],
      bullets: [
        "Writing density with n(n-1) for an undirected graph - the denominator is n(n-1)/2 unless directed.",
        "Treating foaf:knows as transitive - friendship does not chain; only declared-transitive properties do.",
        "Claiming 'names removed = anonymous' - structure (degrees, neighbourhoods) re-identifies; demand perturbation.",
        "Computing modularity without interpreting it - always end with the 0 / 0.3 / 0.5 bands.",
        "Confusing clustering coefficient (local closure) with density (global completeness).",
        "Propagating trust without discounting - the product t(A->B) x t(B->C) is the rule, not plain chaining.",
        "Listing defences without naming the attack they answer - Sybil -> SybilGuard, on-off -> slow forgetting.",
        "Answering RDF conversion with one triple for a compound sentence - 'works at ACME since 2020' needs a reified or qualifying node.",
        "Skipping the worked example in a 7-mark answer - the single most expensive omission in this subject.",
      ],
    },
  ],
};
