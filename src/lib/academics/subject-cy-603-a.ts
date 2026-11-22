import type { AcademicSubject } from "./types";

export const cy603a: AcademicSubject = {
  id: "cy-603-a",
  code: "CY-603(A)",
  title: "Internet & Web Technology",
  semester: "VI Semester",
  program: "RGPV · Cyber Security",
  tagline:
    "Every topic of the syllabus as one connected story: the Internet and HTTP underneath, the design craft on top, HTML and HTML5 for structure, CSS and JavaScript with the DOM for behaviour, XML with XSLT for data exchange, and PHP closing the loop with MySQL on the server.",
  description:
    "Five units walk from the WWW concept, HTTP request-response, browsers, servers and Web 2.0 through web design issues and navigation planning, then HTML and HTML5, style sheets and CSS3, client-side JavaScript with the DOM and DHTML, XML with DTD, schemas and XSLT, PHP scripting from syntax to sessions and OOP, ending with PHP-and-MySQL database work from connection to phpMyAdmin and debugging.",
  accentColor: "#3b82f6",
  emoji: "IW",
  unitCount: 5,
  totalSections: 35,
  units: [
    {
      number: 1,
      roman: "I",
      title: "Introduction to the Web and Web Design",
      summary:
        "Unit I builds the platform the rest of the subject runs on: the Internet versus the WWW, the HTTP request-response protocol, browsers and web servers, the Web 2.0 shift, and the design discipline - effective design concepts, browser, bandwidth, cache and resolution issues, page layout and linking, user-centric design, sitemaps, planning and publishing, and effective navigation.",
      chapter: {
        number: "01",
        title: "The Web Platform",
        intro:
          "Unit I covers the concepts of the Internet and WWW, the HTTP protocol with its requests and responses, web browsers and web servers, features of Web 2.0, concepts of effective web design, design issues including browser, bandwidth and cache, display resolution, look and feel, page layout and linking, user-centric design, sitemaps, planning and publishing a website, and designing effective navigation.",
        inOneBreath:
          "The Internet is the network of networks; the WWW is the hypertext system that rides on it, and HTTP is the stateless request-response language between browser and server. Web 2.0 turned readers into participants. Design decisions - resolution, bandwidth, cache, navigation - are constrained by that platform, and good sites are planned as structures (sitemaps, consistent linking) rather than as pages.",
        sections: [
          {
            number: "1.1",
            title: "The Internet and the WWW",
            body: [
              "The Internet is a global network of networks that exchanges packets under the TCP/IP protocol suite: IP addresses and routes packets between machines, TCP turns them into reliable ordered streams, and application protocols (HTTP, SMTP, FTP) run on top. The World Wide Web is one service on that infrastructure - a system of interlinked hypertext documents accessed via URLs and transferred over HTTP, proposed by Tim Berners-Lee at CERN (1989-91) around three inventions: the URL (addressing), HTTP (transfer) and HTML (representation). The distinction is the exam's first mark: the Internet is the plumbing, the Web is one thing the plumbing carries - email and FTP use the same Internet without the Web.",
              "A worked trace fixes the layering. A user clicks a link to http://www.example.com/index.html: DNS resolves the hostname to an IP address; the browser opens a TCP connection to port 80; an HTTP request travels down the stack (HTTP -> TCP -> IP -> physical networks) and the response climbs back; the browser renders the HTML, and each embedded image or stylesheet triggers further HTTP requests. The trace shows every syllabus term in one motion - DNS, TCP, HTTP, and the browser's role as the client that assembles a page from many resources.",
              "The relationship also explains the vocabulary of the rest of the subject: 'web server' means the machine (hardware) running server software (Apache, Nginx) that listens on ports and answers HTTP; 'website' is a collection of related pages served under one domain; 'web application' is that plus server-side processing. Growth markers worth quoting: from static pages (Web 1.0) to user-participation platforms (Web 2.0), with each stage adding a layer - content, then interaction, then applications living entirely in the browser.",
              "Exam framing: expect 'differentiate Internet and WWW' or 'explain the working of the WWW'. Define both, name the three Web inventions (URL, HTTP, HTML), run the click-to-render trace with the protocol stack, and close with the service sentence - the Web is one of many services on the Internet. The click-to-render trace answers four questions at once - learn it as one narrative and deploy it across the unit.",
            ],
            keyTerms: [
              { term: "Internet", definition: "Global network of networks exchanging packets under TCP/IP." },
              { term: "WWW", definition: "The hypertext information system over the Internet - URLs + HTTP + HTML (Berners-Lee, CERN)." },
              { term: "URL", definition: "Uniform Resource Locator - protocol, host, path; the addressing scheme of the Web." },
              { term: "Hypertext", definition: "Text containing links to other resources - the Web's organizing idea." },
              { term: "DNS", definition: "Domain Name System - resolves hostnames to IP addresses before any request is sent." },
            ],
            table: {
              caption: "Internet vs WWW - the guaranteed contrast.",
              headers: ["Aspect", "Internet", "World Wide Web"],
              rows: [
                ["What it is", "Physical/logical network of networks", "An information service on the Internet"],
                ["Foundation", "TCP/IP protocol suite, routers, links", "URL + HTTP + HTML"],
                ["Scope", "Carries email (SMTP), files (FTP), Web (HTTP)", "Interlinked hypertext pages via browsers"],
                ["Began", "ARPANET origins, 1969", "CERN proposal, 1989-91"],
                ["Access needs", "Any networked application", "A browser"],
              ],
            },
            bullets: [
              "Internet = the network of networks under TCP/IP; WWW = the hypertext service on it.",
              "The Web's three inventions: URL (address), HTTP (transfer), HTML (representation).",
              "A click resolves DNS, opens TCP, sends HTTP, and triggers further requests for each resource.",
              "Web server = hardware + server software (Apache/Nginx) answering HTTP on ports.",
              "Website = related pages under one domain; web application = website + server-side processing.",
              "Evolution: static Web 1.0 pages -> participatory Web 2.0 -> browser-resident applications.",
            ],
            diagram: {
              kind: "compare",
              title: "Internet vs WWW",
              caption: "The plumbing and one service that runs through it.",
              left: {
                heading: "The Internet",
                items: [
                  "Network of networks under TCP/IP",
                  "Routers, links, IP addresses, DNS",
                  "Carries HTTP, SMTP, FTP and more",
                  "Exists without the Web",
                ],
              },
              right: {
                heading: "The World Wide Web",
                items: [
                  "Hypertext system on the Internet",
                  "URL + HTTP + HTML",
                  "Browsed via browsers; pages and links",
                  "One of many Internet services",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "One trace answers four questions",
              body: "The click-to-render trace (DNS -> TCP -> HTTP -> render -> nested requests) silently answers 'what is HTTP', 'what is DNS', 'browser vs server' and 'how the stack layers'. Learn it once as a narrative; deploy it in half the Unit I answers.",
            },
            examQuestions: [
              {
                q: "Differentiate the Internet from the World Wide Web, name the three inventions that created the Web, and trace what happens from a user clicking a link to the page being rendered.",
                marks: 14,
                outline: [
                  "Internet: network of networks under TCP/IP - the infrastructure",
                  "WWW: hypertext service - URLs, HTTP, HTML (Berners-Lee, CERN)",
                  "Internet carries SMTP, FTP as well - the Web is one service among many",
                  "Click: DNS resolves hostname to IP",
                  "TCP connection opens to the server port",
                  "HTTP request sent, response returned, HTML rendered",
                  "Each image/stylesheet triggers further HTTP requests",
                ],
              },
              {
                q: "Define URL and state its components with an example.",
                marks: 7,
                outline: [

                  "Uniform Resource Locator - the Web's addressing scheme",

                  "Protocol (http/https), host (domain), path, optional query",

                  "Example: https://www.example.com/courses/index.html",

                  "Fragments (#section) address in-page anchors",

                  "Non-default ports may follow the host",

                ],              },
            ],
          },
          {
            number: "1.2",
            title: "HTTP protocol - requests and responses",
            body: [
              "HTTP (HyperText Transfer Protocol) is the request-response protocol between client and server: the client sends a request line (method, path, version), headers (Host, User-Agent, Accept, Cookie), optionally a body; the server answers with a status line (version, code, phrase), headers (Content-Type, Content-Length, Cache-Control, Set-Cookie) and usually a body. HTTP is stateless - each request is independent, which is why cookies and sessions exist to carry state across requests. The method names the intent: GET retrieves without side effects (parameters ride the URL), POST submits data in the body (forms, uploads), HEAD asks for headers only, PUT and DELETE express resource semantics in RESTful APIs.",
              "A worked exchange fixes the format. The browser sends: GET /courses/web.html HTTP/1.1 with Host: www.example.com. The server replies: HTTP/1.1 200 OK, Content-Type: text/html, Content-Length: 5320, then the HTML. A second request for a moved page returns 301 Moved Permanently with a Location header; a missing page returns 404 Not Found; a server failure returns 500 Internal Server Error. The status-code families are the exam's table: 1xx informational, 2xx success, 3xx redirection, 4xx client error, 5xx server error.",
              "HTTP/1.1's improvements matter for the design unit: persistent connections (keep-alive) reuse one TCP connection for many resources instead of opening one per object, and chunked transfer lets servers stream content of unknown length. HTTP/2 adds multiplexing (many requests over one connection simultaneously) and header compression. Caching headers (Cache-Control, ETag, Expires) connect directly to Unit I's design issues: a well-cached site sends 304 Not Modified instead of full bodies, halving perceived load times - the protocol answering the bandwidth constraint.",
              "Exam framing: expect 'explain HTTP request and response' or 'write HTTP methods and status codes'. Give the message anatomy on both sides, run the 200/301/404 exchange, produce the status-family table, and close with statelessness and its consequences (cookies, sessions, caching). Statelessness is the hidden mark - cookies and sessions exist precisely because HTTP forgets. The status-family table is the answer's second half - 200, 301, 404 and 500 cover every exchange.",
            ],
            keyTerms: [
              { term: "HTTP", definition: "Stateless request-response protocol between browser (client) and web server." },
              { term: "GET vs POST", definition: "GET retrieves with URL parameters; POST submits data in the body - forms and uploads." },
              { term: "Status code", definition: "Three-digit result: 2xx success, 3xx redirect, 4xx client error, 5xx server error." },
              { term: "Stateless", definition: "No memory between requests - cookies and sessions exist to restore state." },
              { term: "Keep-alive", definition: "HTTP/1.1 persistent connections reusing one TCP connection for many resources." },
            ],
            table: {
              caption: "Status-code families and the codes worth knowing.",
              headers: ["Family", "Meaning", "Named codes"],
              rows: [
                ["1xx", "Informational", "100 Continue"],
                ["2xx", "Success", "200 OK, 204 No Content"],
                ["3xx", "Redirection", "301 Moved Permanently, 302 Found, 304 Not Modified"],
                ["4xx", "Client error", "400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found"],
                ["5xx", "Server error", "500 Internal Server Error, 503 Service Unavailable"],
              ],
            },
            bullets: [
              "Request anatomy: method line, headers, optional body; response: status line, headers, body.",
              "GET carries parameters in the URL; POST carries them in the body - forms use POST.",
              "Stateless protocol: cookies and sessions exist to carry state across requests.",
              "Status families: 2xx success, 3xx redirect, 4xx client fault, 5xx server fault.",
              "HTTP/1.1 added keep-alive and chunked transfer; HTTP/2 adds multiplexing.",
              "Cache-Control and ETag let servers answer 304 Not Modified - the protocol serving bandwidth.",
            ],
            diagram: {
              kind: "flow",
              title: "One HTTP exchange",
              caption: "Request out, response back - and the status code tells the story.",
              steps: [
                { label: "Request", note: "GET /courses/web.html HTTP/1.1 + Host header" },
                { label: "Server lookup", note: "resource found or moved or missing" },
                { label: "Status line", note: "200 OK / 301 / 404 / 500" },
                { label: "Headers", note: "Content-Type, Content-Length, Cache-Control" },
                { label: "Body", note: "the HTML travels back; browser renders" },
              ],
            },
            callout: {
              type: "exam",
              title: "Statelessness is the hidden mark",
              body: "Most students describe the request and stop. The differentiator: HTTP is stateless, so every stateful feature of the web - login sessions, shopping carts - is built on cookies atop HTTP. Adding that sentence connects this section to cookies, sessions and PHP later in the subject.",
            },
            examQuestions: [
              {
                q: "Explain the HTTP protocol: the anatomy of a request and a response, the major methods, the status-code families with named codes, and the consequences of HTTP being stateless.",
                marks: 14,
                outline: [
                  "Request: method line, headers (Host, User-Agent), optional body",
                  "Response: status line, headers (Content-Type, Cache-Control), body",
                  "Methods: GET (retrieve), POST (submit), HEAD (headers only), PUT/DELETE (APIs)",
                  "Status families: 2xx, 3xx, 4xx, 5xx with 200/301/404/500 named",
                  "Worked exchange: GET returns 200 OK + HTML; moved page returns 301 + Location",
                  "Stateless: each request independent; cookies/sessions restore state",
                  "HTTP/1.1 keep-alive; caching headers enable 304 Not Modified",
                ],
              },
              {
                q: "Why do forms use POST rather than GET?",
                marks: 7,
                outline: [

                  "GET parameters appear in the URL - visible, logged, bookmarked",

                  "POST carries data in the body - suits sensitive/large form data",

                  "GET is idempotent retrieval; POST implies a state change",

                  "URL length limits cap GET payloads",

                  "Browser history preserves GET queries - never credentials",

                ],              },
            ],
          },
          {
            number: "1.3",
            title: "Web browsers and web servers",
            body: [
              "A web browser is the user's agent - it resolves URLs, speaks HTTP, renders HTML/CSS into pixels, executes JavaScript, and manages history, bookmarks, cookies and cache. Its architecture is a set of cooperating components: the user interface (address bar, tabs), the browser engine that coordinates, the rendering engine (the layout engine that parses HTML into a DOM tree and CSS into style rules, then paints), the networking component (HTTP over sockets), the JavaScript interpreter, the UI backend for widgets, and the data store (cookies, cache, localStorage). Knowing the layering explains browser behaviour: a page renders progressively because the rendering engine paints while the network component still fetches resources.",
              "The web server is the counterpart: hardware running HTTP server software (Apache, Nginx, IIS) that listens on port 80/443, accepts connections, maps URLs to resources, and returns files or generated content. Static serving returns files as they are; dynamic serving runs server-side programs (PHP scripts in Unit IV-V) and returns their output. Configuration concepts worth naming: document root (where pages live), virtual hosting (many domains on one machine), directory indexing, and MIME types - the server's Content-Type declaration that tells the browser how to render each resource.",
              "A worked round-trip ties both sides together and quietly answers 'what happens when you type a URL'. Browser: DNS lookup, TCP connect, TLS handshake if HTTPS, HTTP GET. Server: accept, map /courses/web.html to document root, read file, send 200 with Content-Type text/html. Browser: parse into DOM, fetch CSS/JS/images (repeating the loop), apply styles, execute scripts, paint. Cache: if the resource is cached and unexpired, the browser skips the network entirely - the browser-side half of the caching story.",
              "Exam framing: expect 'explain the architecture of a web browser' or 'what is a web server'. Draw the browser's component layers, describe the server's listen-map-respond cycle with document root and virtual hosting, and run the typed-URL round trip as the integrated trace. Name the six components, then narrate two cooperating - a list plus a trace beats either alone. HTTPS inserts one step - the TLS handshake before the first HTTP byte travels.",
            ],
            keyTerms: [
              { term: "Rendering engine", definition: "Parses HTML into a DOM tree, applies CSS, and paints the page." },
              { term: "MIME type", definition: "Content-Type declaration (text/html, image/png) telling the browser how to treat a resource." },
              { term: "Document root", definition: "The server directory from which URLs are mapped to files." },
              { term: "Virtual hosting", definition: "Many domains served from one machine by name-based routing." },
            ],
            table: {
              caption: "Browser components and their jobs.",
              headers: ["Component", "Responsibility", "Example behaviour"],
              rows: [
                ["User interface", "Address bar, tabs, buttons", "The chrome around every page"],
                ["Browser engine", "Coordinates UI and rendering", "Tab management"],
                ["Rendering engine", "HTML -> DOM, CSS -> style, paint", "Progressive page display"],
                ["Networking", "HTTP over sockets, TLS", "Fetches each resource"],
                ["JS interpreter", "Executes scripts", "Form validation, interactivity"],
                ["Data store", "Cookies, cache, localStorage", "Offline reuse of cached assets"],
              ],
            },
            bullets: [
              "Browser: UI + engine + rendering + networking + JS interpreter + storage.",
              "Rendering engine builds the DOM, applies CSS and paints progressively.",
              "Server: listens on 80/443, maps URLs to document root, returns files or generated output.",
              "Static serving returns files; dynamic serving runs PHP and returns its output.",
              "Virtual hosting serves many domains from one machine by name.",
              "HTTPS adds a TLS handshake before HTTP; cache hits skip the network entirely.",
            ],
            diagram: {
              kind: "pipeline",
              title: "From typed URL to painted page",
              caption: "Both sides of the wire in one pipeline - browser steps and server steps interleaved.",
              stages: [
                { label: "DNS resolve", note: "hostname -> IP address" },
                { label: "Connect", note: "TCP, then TLS if HTTPS" },
                { label: "Serve", note: "server maps URL in document root; 200 + MIME type" },
                { label: "Parse & fetch", note: "DOM built; CSS/JS/images requested" },
                { label: "Render", note: "styles applied, scripts run, page painted" },
              ],
            },
            callout: {
              type: "tip",
              title: "Name the components, then narrate",
              body: "The architecture question rewards the component list (six items) plus one narrative paragraph showing two components cooperating (networking fetches, rendering paints). A list alone reads as memory; a list plus trace reads as understanding.",
            },
            examQuestions: [
              {
                q: "Explain the architecture of a web browser with its major components, and describe how a web server handles a request - document root, MIME types, static vs dynamic serving.",
                marks: 14,
                outline: [
                  "Browser components: UI, engine, rendering, networking, JS interpreter, data store",
                  "Rendering engine: HTML -> DOM, CSS -> styles, progressive painting",
                  "Networking: HTTP over sockets; TLS handshake for HTTPS",
                  "Server listens on ports 80/443 and accepts connections",
                  "URL mapped to document root; response carries MIME Content-Type",
                  "Static serving returns files; dynamic serving runs PHP and returns output",
                  "Virtual hosting: many domains on one server by name",
                ],
              },
              {
                q: "What happens between typing a URL and seeing the page? List the steps on both browser and server sides.",
                marks: 7,
                outline: [

                  "DNS resolution; TCP connection; TLS if HTTPS",

                  "HTTP GET sent; server maps and returns 200 + Content-Type",

                  "Browser parses DOM, fetches sub-resources, applies CSS, runs JS, paints",

                  "Sub-resources repeat the loop until the page completes",

                  "Cache hits skip the network for unchanged assets",

                ],              },
            ],
          },
          {
            number: "1.4",
            title: "Web 2.0 - the participation shift",
            body: [
              "Web 2.0 names the web's shift from publishing to participation: sites stopped delivering static pages and became platforms whose users create the content. The feature list is the exam's core: user-generated content (posts, videos, reviews), social interaction (profiles, friends, sharing), tagging and folksonomy (bottom-up classification instead of editor-assigned categories), AJAX (pages updating fragments without full reloads), rich user experience (interfaces as responsive as desktop apps), SaaS delivery (software accessed in the browser), collective intelligence (wikis, ratings, recommendations), and the long tail economics of serving niche audiences cheaply.",
              "A worked contrast shows the shift concretely. A 1.0 encyclopedia site publishes articles written by editors, read by visitors, updated on release cycles; a 2.0 wiki publishes articles written and edited by its readers, versioned live, with quality emerging from participation. Technically the difference is visible in the HTTP traffic: the 1.0 site serves whole pages per click; the 2.0 site sends XMLHttpRequest calls that update fragments - the browser talks to APIs, not just to pages. Content, authorship and transport all shift at once.",
              "The implications run through the rest of the subject. Design must serve contribution (simple editors, immediate feedback), so forms and validation (Unit II-III) become primary surfaces. Bandwidth and cache issues change shape - fragments are small, but they are many, so caching strategies move to API responses. And security changes scale: user content means untrusted input everywhere, which is why sanitization (Unit IV) and the injection awareness in Unit V are not optional extras. Web 2.0 is the reason a web-technology syllabus for a cyber security branch spends five units on the machinery of participation.",
              "Exam framing: expect 'what is Web 2.0 and its features'. Define the participation shift, produce the feature list with one example each, run the encyclopedia-vs-wiki contrast with the AJAX traffic difference, and close with the implications - design for contribution, cache for fragments, sanitize for untrusted input. The AJAX traffic test proves the shift - whole-page loads versus fragment updates at the protocol level.",
            ],
            keyTerms: [
              { term: "Web 2.0", definition: "The participatory web - users create content; sites are platforms." },
              { term: "AJAX", definition: "Asynchronous JavaScript and XML - page fragments update without full reloads." },
              { term: "Folksonomy", definition: "Bottom-up tagging classification by users instead of editors." },
              { term: "SaaS", definition: "Software as a Service - applications delivered and used inside the browser." },
            ],
            table: {
              caption: "Web 2.0 features and their signature examples.",
              headers: ["Feature", "Essence", "Signature example"],
              rows: [
                ["User-generated content", "Users author the material", "Wikis, video platforms, reviews"],
                ["Social interaction", "Profiles, networks, sharing", "Social networking sites"],
                ["Tagging / folksonomy", "Bottom-up classification", "Hashtags, bookmark tags"],
                ["AJAX", "Fragment updates, no reloads", "Suggest-as-you-type search"],
                ["Collective intelligence", "Value from aggregation", "Ratings, recommendations"],
                ["SaaS", "Software in the browser", "Editors, spreadsheets, mail"],
              ],
            },
            bullets: [
              "Web 2.0 = read-write web: participation replaces publication.",
              "Features: UGC, social, tagging, AJAX, rich UX, SaaS, collective intelligence.",
              "AJAX changes the traffic shape: XMLHttpRequest fragments instead of whole pages.",
              "Encyclopedia vs wiki: editors-publish vs readers-edit, versioned live.",
              "Design implication: forms and validation become the primary interface.",
              "Security implication: untrusted user input everywhere - sanitization becomes central.",
            ],
            diagram: {
              kind: "compare",
              title: "Web 1.0 vs Web 2.0",
              caption: "Who authors, how pages update, and what the traffic looks like.",
              left: {
                heading: "Web 1.0 - publishing",
                items: [
                  "Editors author; visitors read",
                  "Whole-page loads per click",
                  "Content updated on release cycles",
                  "Static HTML served to all",
                ],
              },
              right: {
                heading: "Web 2.0 - participation",
                items: [
                  "Users author, tag, comment, share",
                  "AJAX updates fragments in place",
                  "Content changes continuously",
                  "APIs and dynamic generation per user",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The AJAX traffic test",
              body: "To prove the 1.0/2.0 difference technically, compare traffic: whole-page HTTP loads versus XMLHttpRequest fragment updates. That one protocol-level observation elevates the answer above a feature list - it shows why the shift needed new technology.",
            },
            examQuestions: [
              {
                q: "Explain Web 2.0 and its features with examples, contrast a Web 1.0 site with a Web 2.0 site at the protocol level, and state the design and security implications of the participation shift.",
                marks: 14,
                outline: [
                  "Definition: read-write web - users create the content",
                  "Features: UGC, social, tagging/folksonomy, AJAX, rich UX, SaaS, collective intelligence",
                  "Encyclopedia vs wiki: editors publish vs readers edit, versioned live",
                  "Protocol contrast: whole-page loads vs XMLHttpRequest fragment updates",
                  "Design implication: forms, validation and immediate feedback become primary",
                  "Cache implication: many small fragments shift caching to API responses",
                  "Security implication: untrusted input everywhere - sanitization and injection awareness",
                ],
              },
              {
                q: "What is AJAX and why did it enable the Web 2.0 experience?",
                marks: 7,
                outline: [

                  "Asynchronous JavaScript + XML: background requests update page fragments",

                  "No full reload - interaction feels like a desktop app",

                  "Browser talks to server APIs, not just pages",

                  "Interaction latency drops to fragment-render time",

                  "State lives client-side between partial updates",

                ],              },
            ],
          },
          {
            number: "1.5",
            title: "Effective web design and its constraints",
            body: [
              "Effective web design is design that serves the user under real constraints - and the syllabus names the constraints. Browser compatibility: engines differ, so markup and CSS must degrade gracefully; test across browsers rather than styling for one. Bandwidth: every byte is a cost, so compress images, minify CSS/JS, and let the protocol cache (1.2's 304 Not Modified) do its work. Cache: browsers cache aggressively when headers allow - design URLs and assets to be cache-friendly. Display resolution: screens range from phones to 4K monitors, so layouts must adapt (responsive design, fluid grids, media queries) rather than assume one window size.",
              "The positive half of the syllabus list - look and feel, page layout, linking - is craft principles. Look and feel: consistent colour scheme, typography and tone across pages build brand recognition and orientation. Page layout: grids and alignment give scanning structure; white space is not emptiness but emphasis; the most-wanted content sits where the eye lands first. Linking: links must be visible, consistent, and honest (the label names the destination); navigation elements repeat in the same position on every page. Each principle exists because users scan rather than read - design is orienteering support.",
              "A worked constraint exercise shows the principles interacting. A course-results page for rural students: bandwidth constraint says no hero images and a small HTML payload; resolution constraint says the marks table must reflow to a phone width; browser constraint says avoid bleeding-edge CSS the college-lab browsers lack; cache constraint says the stylesheet is external so repeat visits skip it. One page, four constraints, four different design decisions - effective design is the art of satisfying all of them simultaneously rather than optimizing one.",
              "Exam framing: expect 'explain the issues in web design'. Treat the four constraints (browser, bandwidth, cache, resolution) as a table with one design response each, add the look-feel/layout/linking craft principles, and close with the constraint-exercise paragraph - design as simultaneous satisfaction, not single-metric optimization. Design for the phone-on-slow-network quadrant - every other user receives a bonus. The constraint exercise is the worked example - one page, four constraints, four different decisions.",
            ],
            keyTerms: [
              { term: "Graceful degradation", definition: "Older or limited browsers get a working, reduced experience rather than breakage." },
              { term: "Responsive design", definition: "Layouts adapt to screen size via fluid grids and media queries." },
              { term: "Minification", definition: "Stripping whitespace and comments from CSS/JS to cut payload bytes." },
              { term: "White space", definition: "Deliberate emptiness that structures scanning and emphasizes content." },
            ],
            table: {
              caption: "The four constraints and their design responses.",
              headers: ["Constraint", "Why it bites", "Design response"],
              rows: [
                ["Browser", "Engines differ in feature support", "Standard markup, graceful degradation, cross-browser tests"],
                ["Bandwidth", "Every byte costs the user time", "Compressed images, minified assets, lean HTML"],
                ["Cache", "Repeat visits can be free", "External stylesheets, cache-friendly URLs, long-lived assets"],
                ["Display resolution", "Phones to 4K monitors", "Fluid grids, media queries, reflowable tables"],
              ],
            },
            bullets: [
              "Browser compatibility: standard-first markup, test across engines, degrade gracefully.",
              "Bandwidth: compress and minify - the cheapest performance win available.",
              "Cache: external CSS/JS and stable asset URLs let repeat visits skip the network.",
              "Resolution: fluid layouts and media queries; assume the phone first.",
              "Craft: consistent look and feel, grid layouts, white space as emphasis.",
              "Linking: visible, consistent, honestly labelled; navigation repeats in the same place.",
            ],
            diagram: {
              kind: "matrix",
              title: "One page, four constraints",
              caption: "Each quadrant forces a different decision on the same page.",
              axes: { x: "User's device (limited -> capable)", y: "User's connection (slow -> fast)" },
              quadrants: [
                { label: "Lean + adaptive", note: "phone on slow network - the design baseline" },
                { label: "Rich + adaptive", note: "fast network, small screen - reflow, not resize" },
                { label: "Lean + full", note: "desktop on slow link - payload discipline" },
                { label: "Rich + full", note: "the comfortable case - do not design for it alone" },
              ],
            },
            callout: {
              type: "exam",
              title: "Design for the worst quadrant",
              body: "The matrix's lesson in one sentence: design for the phone-on-slow-network quadrant and every other user gets a bonus. Examiners reward the constraint-first framing because it shows decisions have reasons - not 'use media queries' but 'because resolution varies'.",
            },
            examQuestions: [
              {
                q: "Explain the major issues in web design - browser compatibility, bandwidth, cache and display resolution - with a concrete design response to each, and add the look-and-feel, layout and linking principles.",
                marks: 14,
                outline: [
                  "Browser: engines differ - standard markup, graceful degradation, cross-testing",
                  "Bandwidth: compress images, minify CSS/JS, lean HTML payloads",
                  "Cache: external stylesheets, stable URLs, long-lived assets for repeat visits",
                  "Resolution: fluid grids and media queries; reflowable tables on phones",
                  "Look and feel: consistent colour, typography and tone build orientation",
                  "Layout: grids, alignment, white space as emphasis; content where the eye lands",
                  "Linking: visible, consistent, honest labels; navigation in one fixed place",
                ],
              },
              {
                q: "Why is an external stylesheet better than inline styles for a multi-page site?",
                marks: 7,
                outline: [

                  "One download cached and reused on every page",

                  "Consistent look and feel from a single source of truth",

                  "Changes deploy once instead of per-page edits",

                  "Browsers cache the file across every page view",

                  "Media variants (print) extend one sheet to outputs",

                ],              },
            ],
          },
          {
            number: "1.6",
            title: "Page layout, user-centric design and the sitemap",
            body: [
              "Page layout is the anatomy of a page, and the shared skeleton is the exam's vocabulary: header (identity and branding), navigation (the persistent menu), main content (the reason the page exists), sidebar or secondary content, and footer (legal, contact, site map links). Layout systems: fixed-width (predictable, resolution-hostile), fluid (percentage widths), and responsive grids (content reflows by breakpoint). User-centric design inverts the process: instead of organizing by the company's org chart, organize by the user's tasks - define personas, list their tasks, and make each task's path no deeper than a few clicks.",
              "A worked layout critique fixes the principles. A college site buries the results link four menus deep inside an 'Academics -> Examinations -> Student corner' path while the homepage leads with a chairman's message. The user-centric read: the dominant task (checking results) needs one click from home; the org-chart read (departments own their pages) produced the burial. The fix is structural, not cosmetic - a sitemap exercise that lists every task and assigns each a location - and it produces the navigation design the next section formalizes.",
              "The sitemap is the design document that precedes pages: a tree of every page organized by user tasks, annotated with entry points (what links here from outside) and depth (clicks from home). Its uses are concrete: it exposes orphan pages nothing links to, exposes over-deep paths, drives the navigation menu's contents, and becomes the acceptance checklist at publishing time. Planning and publishing then follow the sequence the syllabus lists: define purpose and audience, collect content, sketch the sitemap, design templates, build, test (browsers, bandwidth, links), then publish to hosting and submit to search engines.",
              "Exam framing: expect 'explain user-centric design' or 'what is a sitemap'. Give the page anatomy (header, nav, content, sidebar, footer), run the results-link critique as the worked example, define the sitemap with its uses (orphans, depth, menu, checklist), and close with the planning-to-publishing sequence. The top-three-tasks-in-three-clicks test is user-centricity's operational check. The results-link critique is the worked example - a structural fix, not a cosmetic reshuffle.",
            ],
            keyTerms: [
              { term: "Page anatomy", definition: "Header, navigation, main content, sidebar, footer - the shared page skeleton." },
              { term: "Persona", definition: "A concrete model of a user type used to test design decisions." },
              { term: "Sitemap", definition: "The tree of all pages by task - the design document before pages exist." },
              { term: "Orphan page", definition: "A page nothing links to - invisible to navigation and search." },
            ],
            table: {
              caption: "The sitemap's four jobs.",
              headers: ["Use", "What it exposes", "Design action"],
              rows: [
                ["Orphan detection", "Pages nothing links to", "Add entries or delete the page"],
                ["Depth audit", "Tasks buried too deep", "Flatten paths to <= 3 clicks"],
                ["Menu source", "What navigation contains", "Top-level tasks become menus"],
                ["Publishing checklist", "What must exist at launch", "Every node built and tested"],
              ],
            },
            bullets: [
              "Shared anatomy: header, navigation, content, sidebar, footer.",
              "Layout systems: fixed, fluid, responsive grids reflowing at breakpoints.",
              "User-centric: personas and tasks drive structure - not the org chart.",
              "Worked critique: results buried four clicks deep; task-first fix is structural.",
              "Sitemap exposes orphans and depth, sources the menu, doubles as launch checklist.",
              "Sequence: purpose -> audience -> content -> sitemap -> templates -> build -> test -> publish.",
            ],
            diagram: {
              kind: "layers",
              title: "Page anatomy",
              caption: "The five-zone skeleton every consistent site shares.",
              layers: [
                { label: "Header", note: "identity, logo, global search" },
                { label: "Navigation", note: "persistent menu - same place on every page" },
                { label: "Main content", note: "the page's reason for existing" },
                { label: "Sidebar / secondary", note: "related links, context, actions" },
                { label: "Footer", note: "contact, legal, sitemap link" },
              ],
            },
            callout: {
              type: "tip",
              title: "Tasks before org charts",
              body: "The one-line test of user-centricity: can the top three user tasks be done within three clicks of the homepage? If the menu mirrors the institution's departments instead of its users' tasks, the sitemap exercise will find the burial - say that in design answers.",
            },
            examQuestions: [
              {
                q: "Explain page layout and user-centric web design, critique a site that buries its most-used task under departmental menus, and describe the sitemap with its uses in planning and publishing.",
                marks: 14,
                outline: [
                  "Anatomy: header, navigation, content, sidebar, footer",
                  "Layout systems: fixed, fluid, responsive grids",
                  "User-centric: personas and tasks before org-chart structure",
                  "Critique: results link four menus deep; task-first path is one click",
                  "Fix is structural: sitemap exercise reassigns by task",
                  "Sitemap uses: orphans, depth audit, menu source, launch checklist",
                  "Planning sequence: purpose, audience, content, sitemap, build, test, publish",
                ],
              },
              {
                q: "What is an orphan page and why does a sitemap catch it?",
                marks: 7,
                outline: [

                  "A page with no inbound links - invisible to users and crawlers",

                  "The sitemap lists every intended page and its links",

                  "Comparison exposes pages created but never connected",

                  "Crawlers inherit the invisibility - search never indexes it",

                  "Users can only find it by guessing the URL",

                ],              },
            ],
          },
          {
            number: "1.7",
            title: "Designing effective navigation",
            body: [
              "Navigation is the site's signposting, and the syllabus asks for its design principles. Consistency: the menu appears in the same place with the same items on every page - muscle memory is the UX asset. Breadcrumbs: a path line (Home > Courses > Web Tech) shows location in deep structures and doubles as an upward path. Search: for content-heavy sites, search is navigation. Multiple routes: the same destination reachable by menu, breadcrumb, in-content link and sitemap, because users arrive by different mental models. State signalling: the current section is highlighted so users know where they are, not just where they can go.",
              "A worked navigation redesign assembles the principles. A university site's menu lists departments verbatim (twelve items, alphabetized) - users hunting 'fee payment' scan all twelve without success. The redesign by task: top menu holds the five most common tasks (Admissions, Programmes, Results, Fees, Contact), departments collapse into one 'Programmes' page, breadcrumbs appear on all subpages, the footer carries the sitemap, and the current section highlights. The measure of success is the click path: fee payment falls from five uncertain clicks to two confident ones.",
              "The technical side is small but examinable: navigation is built from hyperlinks styled with CSS (nav bars are just lists), and the linking rules from 1.5 apply - relative URLs for internal links keep the site portable, absolute URLs for external ones, and target attributes used sparingly. The design-side rule that ties navigation to the sitemap: the menu mirrors the sitemap's top two levels; anything deeper is breadcrumb and search territory.",
              "Exam framing: expect 'explain the principles of effective navigation'. Give the principle list (consistency, breadcrumbs, search, multiple routes, state signalling), run the departments-to-tasks redesign as the worked example, and close with the technical notes - lists styled as menus, relative links, menu-mirrors-sitemap rule. Measure the redesign in clicks - five uncertain clicks falling to two is the engineering result. The click-path number is the metric - state it and the redesign becomes engineering.",
            ],
            keyTerms: [
              { term: "Breadcrumb", definition: "The Home > Section > Page path line showing location and upward route." },
              { term: "State signalling", definition: "Highlighting the current section so users know where they are." },
              { term: "Relative URL", definition: "Path relative to the current page - keeps internal links portable." },
              { term: "Click path", definition: "The sequence of clicks to complete a task - navigation's success metric." },
            ],
            table: {
              caption: "Navigation principles and their failure signs.",
              headers: ["Principle", "Design rule", "Failure sign"],
              rows: [
                ["Consistency", "Same menu, same place, every page", "Menus that change per section"],
                ["Breadcrumbs", "Path line on all deep pages", "Users lost three levels down"],
                ["Search", "For content-heavy sites", "Scanning long menus for known items"],
                ["Multiple routes", "Menu, breadcrumb, links, sitemap", "Only one way to reach a page"],
                ["State signalling", "Highlight current section", "Users unsure which section they are in"],
              ],
            },
            bullets: [
              "Consistency first: the persistent menu is muscle memory - never move it.",
              "Breadcrumbs show location and provide the upward path in deep structures.",
              "Search is navigation for large sites; menus are navigation for small ones.",
              "Multiple routes: menu, breadcrumb, in-content links and footer sitemap.",
              "Highlight the current section - location matters as much as destinations.",
              "The menu mirrors the sitemap's top two levels; deeper is breadcrumbs and search.",
            ],
            diagram: {
              kind: "flow",
              title: "A click path, before and after",
              caption: "Navigation redesign measured in clicks, not aesthetics.",
              steps: [
                { label: "Task", note: "pay semester fees" },
                { label: "Before", note: "Home > Academics > Departments > Accounts > Fees - five uncertain clicks" },
                { label: "Redesign", note: "task-first menu with Fees as a top item" },
                { label: "After", note: "Home > Fees - two confident clicks" },
              ],
            },
            callout: {
              type: "exam",
              title: "Measure in clicks",
              body: "The strongest navigation answers quantify the fix: 'fee payment fell from five uncertain clicks to two confident ones'. The click path is navigation's metric - using it converts a style opinion into an engineering result.",
            },
            examQuestions: [
              {
                q: "Explain the principles of designing effective navigation - consistency, breadcrumbs, search, multiple routes and state signalling - and redesign a department-listed university menu into a task-first navigation with measured results.",
                marks: 14,
                outline: [
                  "Consistency: persistent menu in the same place on every page",
                  "Breadcrumbs: location line with upward path on deep pages",
                  "Search as navigation for content-heavy sites",
                  "Multiple routes to one destination: menu, breadcrumb, links, sitemap",
                  "State signalling: highlight the current section",
                  "Redesign: five tasks promoted, departments collapsed into Programmes",
                  "Measured: fee payment from five uncertain clicks to two",
                ],
              },
              {
                q: "Why should internal links use relative URLs?",
                marks: 7,
                outline: [

                  "Portability: the site moves domains or folders without link surgery",

                  "Shorter markup; fewer chances of typo in scheme/host",

                  "Absolute URLs reserved for external resources",

                  "Relative paths survive staging-to-production moves",

                  "Absolute internal links break on every rename",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "HTML and HTML5",
      summary:
        "Unit II is the markup unit: the basics of HTML from structure and formatting to colour, hyperlinks, lists, tables, images and forms, the behind-the-scenes machinery of meta tags, character entities and comments, the XHTML discipline, frames, framesets, browser architecture and website structure, ending with the overview and features of HTML5.",
      chapter: {
        number: "02",
        title: "Marking Up: HTML",
        intro:
          "Unit II covers basics of HTML, formatting and fonts, commenting code, colour, hyperlinks, lists, tables, images, forms, XHTML, meta tags, character entities, frames and framesets, browser architecture and website structure, and an overview of the features of HTML5.",
        inOneBreath:
          "HTML is a markup language: tags annotate content, attributes parameterize tags, and the document is a head (machine-facing) plus a body (human-facing). Structure (lists, tables, forms), navigation (hyperlinks), head metadata (meta tags, entities) and the XHTML well-formedness discipline build the static web; HTML5 adds semantic elements, native multimedia and APIs - and retires the frames that site structures once used.",
        sections: [
          {
            number: "2.1",
            title: "HTML basics - structure, formatting, fonts and colour",
            body: [
              "HTML (HyperText Markup Language) describes document structure by wrapping content in tags: an opening tag, optional attributes, content and a closing tag form an element. The document skeleton is fixed - a DOCTYPE declaration, one html root containing head (metadata: title, meta, style, script) and body (visible content). HTML is not a programming language: it declares what content is (a heading, a paragraph, a list), and the browser decides how it renders. The declaration-versus-execution distinction is the section's conceptual mark.",
              "The formatting toolkit covers the syllabus items directly. Formatting tags: headings h1-h6, paragraphs, bold/strong, italic/emphasized, underline, superscript/subscript, and the semantic pair worth preferring - strong (importance) and em (emphasis) over b and i. Fonts and colour: the legacy approach used the font tag and colour attributes; the modern approach (and Unit III's subject) moves both to CSS - HTML declares structure, CSS declares appearance. Comments (<!-- ... -->) annotate code without rendering, and whitespace is collapsed: HTML sees runs of spaces as one, which is why indentation is for authors, not browsers.",
              "A worked snippet fixes the anatomy. <h2 class=\"title\">Results</h2> is an element: the tag pair h2 defines its role, the attribute class=\"title\" parameterizes it for CSS, and 'Results' is the content. Nesting must be proper - a list item containing a link closes the link before the item - and browsers repair broken nesting inconsistently, which is exactly why the XHTML section (2.5) later insists on well-formedness. One line of markup, four concepts: tag, attribute, content, nesting.",
              "Exam framing: expect 'explain the structure of an HTML document' or 'describe formatting tags'. Draw the skeleton (DOCTYPE, html, head, body), run the element-anatomy snippet (tag, attribute, content, nesting), produce the formatting-tag table, and close with the separation sentence - HTML for structure, CSS for appearance. The structure-versus-appearance sentence opens both the HTML and CSS answers - it is the subject's dividing line.",
            ],
            keyTerms: [
              { term: "Element", definition: "Opening tag + attributes + content + closing tag - HTML's unit of structure." },
              { term: "Attribute", definition: "A name-value pair inside the opening tag that parameterizes the element." },
              { term: "Head vs body", definition: "Head carries metadata (title, meta, styles); body carries visible content." },
              { term: "Semantic markup", definition: "Choosing tags for meaning (strong, em) rather than appearance (b, i)." },
            ],
            table: {
              caption: "The formatting toolkit.",
              headers: ["Tag", "Purpose", "Modern note"],
              rows: [
                ["h1 ... h6", "Section headings by importance", "One h1 per page"],
                ["p, br, hr", "Paragraph, line break, rule", "Structure, not spacing hacks"],
                ["strong, em", "Importance, emphasis", "Preferred over b, i"],
                ["b, i, u", "Bold, italic, underline (legacy)", "CSS font-weight/style preferred"],
                ["sup, sub", "Superscript, subscript", "Maths, footnotes, chemistry"],
                ["<!-- -->", "Comment - not rendered", "Annotate structure, not TODOs"],
              ],
            },
            bullets: [
              "Element = opening tag + attributes + content + closing tag; nesting must be proper.",
              "Skeleton: DOCTYPE, html root, head (metadata), body (visible content).",
              "Formatting tags: headings, paragraphs, strong/em, sup/sub, comments.",
              "Fonts and colour belong to CSS; HTML declares structure and meaning.",
              "Whitespace collapses - indentation serves authors, not browsers.",
              "Browsers repair broken nesting inconsistently - write well-formed markup.",
            ],
            diagram: {
              kind: "flow",
              title: "Anatomy of an element",
              caption: "Four parts in sequence - tag, attributes, content, closing tag.",
              steps: [
                { label: "Opening tag", note: "<h2> - declares the role" },
                { label: "Attributes", note: "class=\"title\" - parameterizes it" },
                { label: "Content", note: "Results - what the tag wraps" },
                { label: "Closing tag", note: "</h2> - ends the element" },
              ],
            },
            callout: {
              type: "exam",
              title: "Structure vs appearance",
              body: "The recurring sentence in HTML answers: HTML declares what content is; CSS declares how it looks. Using it converts the font-tag legacy discussion into a design principle - and it is exactly the sentence the CSS unit opens with.",
            },
            examQuestions: [
              {
                q: "Explain the structure of an HTML document and the anatomy of an element, describe the formatting tags including the semantic preference of strong/em over b/i, and state how fonts and colours are handled in modern HTML.",
                marks: 14,
                outline: [
                  "Skeleton: DOCTYPE, html root, head metadata, body content",
                  "Element anatomy: opening tag, attributes, content, closing tag",
                  "Worked snippet: <h2 class=\"title\">Results</h2> - tag, attribute, content, nesting",
                  "Formatting tags: h1-h6, p, br, hr, strong/em, sup/sub",
                  "Semantic preference: strong/em carry meaning, b/i carry appearance",
                  "Comments: <!-- --> annotate without rendering; whitespace collapses",
                  "Fonts and colour move to CSS - HTML structures, CSS styles",
                ],
              },
              {
                q: "Why must HTML nesting be proper, and what happens when it is not?",
                marks: 7,
                outline: [

                  "Proper nesting defines an unambiguous tree for the DOM",

                  "Broken nesting forces browsers to repair - differently per engine",

                  "Result: inconsistent rendering and layout bugs across browsers",

                  "CSS selectors depend on the tree - repaired trees restyle wrongly",

                  "Validation catches nesting before the browser guesses",

                ],              },
            ],
          },
          {
            number: "2.2",
            title: "Hyperlinks, lists, tables and images",
            body: [
              "Hyperlinks are the Web's defining feature: the anchor element <a href=\"...\"> links text or images to any resource. Absolute URLs specify protocol and domain (for external links); relative URLs specify paths from the current page (for internal links, keeping sites portable). Named anchors (#section) jump within pages. The target attribute controls opening context (_blank for new tabs, used sparingly), and the image element <img src alt> embeds pictures - with alt text as the accessibility and fallback requirement, and width/height preventing layout shift.",
              "Lists and tables are the structural workhorses. Ordered lists (ol) number items; unordered lists (ul) bullet them; definition lists (dl/dt/dd) pair terms with descriptions; nested lists build menus and outlines - which is why Unit III styles nav bars as styled lists. Tables assemble data in rows and cells: table > tr > td, with th for headers, the colspan/rowspan attributes for spanning, and the caption element for titles. The design rule from Unit I applies: tables are for tabular data, never for page layout.",
              "A worked fragment combines all four constructs in one realistic block: a results page with an h2 heading, an image of the certificate seal (with alt), an ordered list of instructions, and a table of marks with th headers and a caption. Writing such a fragment in the exam - correct nesting, th for headers, alt on the image, a relative href to the notice page - demonstrates every construct in its correct role, which is precisely what the examiner checks in 'write HTML code for...' questions.",
              "Exam framing: expect 'explain lists and tables with example code' or 'differentiate absolute and relative URLs'. Give the link mechanics (href, target, anchors), the three list types, the table element hierarchy with th/caption, and close with the portability rule - relative URLs inside, absolute outside. Build one fragment with heading, image-with-alt, list, table-with-th and a relative link - correct roles earn the marks.",
            ],
            keyTerms: [
              { term: "Anchor (a)", definition: "The hyperlink element - href points to the destination, text is the clickable label." },
              { term: "Relative URL", definition: "A path from the current page - keeps internal links portable across domains." },
              { term: "th", definition: "Table header cell - semantic and styled differently from data cells." },
              { term: "alt attribute", definition: "The image's text alternative - accessibility, SEO and broken-image fallback." },
            ],
            table: {
              caption: "The four constructs and their elements.",
              headers: ["Construct", "Core elements", "Key attributes", "Common use"],
              rows: [
                ["Hyperlink", "a", "href, target, title, name/id", "Navigation, downloads, mailto"],
                ["Lists", "ul, ol, li, dl, dt, dd", "type, start (legacy)", "Menus, steps, glossaries"],
                ["Tables", "table, tr, th, td, caption", "colspan, rowspan, border", "Tabular data, timetables"],
                ["Image", "img", "src, alt, width, height", "Pictures, logos, diagrams"],
              ],
            },
            bullets: [
              "Links: <a href> with absolute URLs outside the site, relative URLs inside.",
              "target=\"_blank\" opens new tabs - use sparingly, it breaks back-button expectations.",
              "Lists: ol numbers, ul bullets, dl pairs terms with definitions; nesting builds menus.",
              "Tables: table > tr > th/td with caption; colspan/rowspan span cells.",
              "Tables are for tabular data - never for page layout.",
              "Images: src plus mandatory alt for accessibility and fallback.",
            ],
            diagram: {
              kind: "compare",
              title: "Absolute vs relative URLs",
              caption: "Where the link points, and why internal links stay relative.",
              left: {
                heading: "Absolute URL",
                items: [
                  "Full address: protocol + domain + path",
                  "https://exam.rgpv.ac.in/results.pdf",
                  "Works from anywhere - external links",
                  "Breaks if the domain moves",
                ],
              },
              right: {
                heading: "Relative URL",
                items: [
                  "Path from the current page",
                  "notices/sem6.pdf",
                  "Portable - the site folder can move",
                  "The default for internal links",
                ],
              },
            },
            callout: {
              type: "exam",
              title: "The one-fragment answer",
              body: "For any 'write HTML for...' question, build one fragment that uses a heading, an image with alt, a list, a table with th and caption, and one relative link. Correct roles (th for headers, alt present, table for data) earn the marks faster than any amount of extra tags.",
            },
            examQuestions: [
              {
                q: "Explain hyperlinks with absolute and relative URLs, the three types of HTML lists, the table element hierarchy with th, caption, colspan and rowspan, and image embedding with the alt attribute - illustrated with one combined fragment.",
                marks: 14,
                outline: [
                  "Anchor element: href, target, in-page anchors with #",
                  "Absolute URLs for external resources; relative for internal portability",
                  "Lists: ol (ordered), ul (unordered), dl/dt/dd (definitions), nesting for menus",
                  "Tables: table > tr > th/td; caption titles; colspan/rowspan span cells",
                  "Images: <img src alt> - alt for accessibility and fallback",
                  "Combined fragment: heading, image with alt, ordered list, marks table with th",
                  "Design rule: tables for tabular data, not page layout",
                ],
              },
              {
                q: "Why is the alt attribute on images more than good practice?",
                marks: 7,
                outline: [

                  "Accessibility: screen readers speak it - legal and ethical requirement",

                  "Fallback text when the image fails to load",

                  "SEO and standards compliance reward the text alternative",

                  "Accessibility law cites text alternatives directly",

                  "The broken-image state still communicates content",

                ],              },
            ],
          },
          {
            number: "2.3",
            title: "Forms - the input machinery",
            body: [
              "The form element is HTML's input machinery: it wraps controls and declares where their data goes (action URL) and how (method GET or POST). The control set: text inputs and password fields, radio buttons (one of many) and checkboxes (any of many), select dropdowns, textarea for long text, hidden fields for context, and the submit/reset buttons. Each control carries a name - the key under which its value travels to the server - and a label for accessibility. HTML5 later extends the set with email, date, number and search types plus built-in validation attributes.",
              "A worked form fixes the mechanics. A login form: <form action=\"login.php\" method=\"post\"> wraps a text input named user, a password input named pass, and a submit button. On submit, the browser packages user=...&pass=... and sends it: with POST, the data rides the request body (invisible in the URL, no length limits - the correct method for credentials); with GET it rides the query string (bookmarkable but logged and length-limited - correct only for searches). The server-side half of this journey is Unit IV's form-processing section; the client-side half is Unit III's JavaScript validation.",
              "The design and security notes belong here too. Group related controls with fieldset and legend; mark required fields visually and semantically; use labels bound to inputs (for/id) so screen readers speak them. Security-aware defaults: passwords use type=\"password\" (masked), never log passwords in URLs, and remember that client-side validation is UX, not security - the server must re-validate everything, because any user can bypass the form and post data directly.",
              "Exam framing: expect 'explain form elements with an example' or 'GET vs POST for forms'. Give the control table, run the login-form fragment with its POST packaging, produce the GET/POST decision table, and close with the security sentence - client validation is UX, server validation is security. The server re-validates everything - client checks are convenience, never control. The accessibility half earns its own marks - labels, fieldsets and legends are structure, not decoration.",
            ],
            keyTerms: [
              { term: "form", definition: "Wraps controls with action (where data goes) and method (how it travels)." },
              { term: "name attribute", definition: "The key under which a control's value reaches the server." },
              { term: "POST vs GET", definition: "POST sends data in the body (sensitive, large); GET in the URL (bookmarkable)." },
              { term: "fieldset / legend", definition: "Grouping and captioning related controls." },
            ],
            bullets: [
              "form declares action (destination) and method (GET/POST) for its controls.",
              "Every control needs a name - it is the key the server receives the value under.",
              "POST rides the body: sensitive or large data; GET rides the URL: searches only.",
              "Radio shares a name for single choice; checkbox allows independent choices.",
              "Labels bound with for/id make forms accessible; fieldset groups related inputs.",
              "Client-side validation is UX only - the server must re-validate all input.",
            ],
            diagram: {
              kind: "pipeline",
              title: "A form's journey",
              caption: "From input to server-side handling - the client half of the data path.",
              stages: [
                { label: "Input", note: "user fills named controls" },
                { label: "Submit", note: "browser packages name=value pairs" },
                { label: "Transport", note: "POST body (or GET query string)" },
                { label: "Server", note: "PHP reads $_POST and validates" },
                { label: "Response", note: "result page or error re-render" },
              ],
            },
            callout: {
              type: "warning",
              title: "Never trust the client",
              body: "JavaScript validation improves UX but any user can bypass the form and POST raw data. The exam sentence and the security sentence are the same: validate on the server, always - client-side checks are convenience, not control.",
            },
            examQuestions: [
              {
                q: "Explain HTML forms: the form element's action and method, the major controls with an example login form, the GET vs POST decision, and the accessibility and security notes.",
                marks: 14,
                outline: [
                  "form wraps controls; action names the destination, method the transport",
                  "Controls: text, password, radio, checkbox, select, textarea, submit",
                  "Worked login form: action=login.php method=post with named inputs",
                  "POST: body, no length limit, not logged in URLs - credentials",
                  "GET: query string, bookmarkable - searches only",
                  "Accessibility: labels with for/id, fieldset/legend grouping",
                  "Security: client validation is UX; server must re-validate everything",
                ],
              },
              {
                q: "Why should a search form use GET while a password form uses POST?",
                marks: 7,
                outline: [

                  "GET parameters live in the URL - shareable, bookmarkable, but logged",

                  "POST data lives in the body - not recorded in URLs or history",

                  "Search results benefit from bookmarking; credentials must never appear in URLs",

                  "Server logs and proxies capture full GET queries",

                  "POST also permits larger, encoded payloads",

                ],              },
            ],
            codeExample: {
              language: "html",
              caption: "A complete, accessible login form",
              code: `<form action="login.php" method="post">
  <fieldset>
    <legend>User login</legend>
    <label for="user">Username:</label>
    <input type="text" id="user" name="user" required>
    <label for="pass">Password:</label>
    <input type="password" id="pass" name="pass" required>
    <button type="submit">Sign in</button>
  </fieldset>
</form>`,
            },
          },
          {
            number: "2.4",
            title: "Meta tags, character entities and commenting",
            body: [
              "The head is the document's machine-facing half, and meta tags are its instruction set. The essentials: charset declaration (<meta charset=\"utf-8\">) so text encodes correctly; viewport (<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">) making pages responsive on phones; description and keywords for search engines; http-equiv directives (refresh to reload, content-language); and author/generator identifications. Meta tags carry no visible content - they speak to browsers, crawlers and servers, which is why they live in the head beside title, style and script links.",
              "Character entities solve HTML's reserved-character problem: < and & begin tags and entities, so literal occurrences must be escaped as &lt; and &amp;. The named set covers the frequent needs: &lt; &gt; &amp; &quot; &nbsp; (non-breaking space) &copy; &reg; &trade;, plus numeric forms (&#169;) for anything unnamed. Entities also type characters the keyboard lacks - arrows, currency, accented letters - keeping source files ASCII-clean regardless of editor encoding. The discipline: escape every literal < and & in content, or the browser will parse your text as markup.",
              "Commenting completes the housekeeping trio: <!-- comment --> documents structure, marks sections, and can temporarily disable markup during debugging - with the operational cautions that comments ship to the client (never leave credentials or internal notes in them) and that nested comments break parsers. A worked head block assembles all three: charset and viewport metas, a description meta, an external stylesheet link, one script reference, a commented section marker, and body text using &amp; and &nbsp; correctly.",
              "Exam framing: expect 'explain meta tags' or 'why are character entities needed'. Give the meta-tag table (charset, viewport, description, http-equiv), the entity mechanics with the reserved-character rule, and the comment cautions - closing with the head-vs-body sentence: the head speaks to machines, the body to humans. Comments ship to every visitor - view-source makes them public, so no secrets belong in them.",
            ],
            keyTerms: [
              { term: "meta charset", definition: "Declares the text encoding (utf-8) so characters render correctly." },
              { term: "viewport meta", definition: "Declares page width to device width - the enabling tag of responsive design." },
              { term: "Character entity", definition: "Escaped notation (&lt; &amp; &copy;) for reserved and untypeable characters." },
              { term: "http-equiv", definition: "Meta directive that mimics an HTTP header (refresh, content-language)." },
            ],
            table: {
              caption: "Meta tags and entities worth knowing.",
              headers: ["Item", "Written as", "Purpose"],
              rows: [
                ["Encoding", "<meta charset=\"utf-8\">", "Correct text rendering"],
                ["Viewport", "<meta name=\"viewport\" ...>", "Responsive behaviour on phones"],
                ["Description", "<meta name=\"description\" ...>", "Search-result snippet"],
                ["Keywords", "<meta name=\"keywords\" ...>", "Legacy search hint"],
                ["Refresh", "<meta http-equiv=\"refresh\" content=\"5\">", "Auto-reload after seconds"],
                ["Reserved chars", "&lt; &gt; &amp; &quot;", "Literal <, >, &, \" in text"],
                ["Spacing / symbols", "&nbsp; &copy; &reg;", "Non-breaking space, legal marks"],
              ],
            },
            bullets: [
              "The head speaks to machines: charset, viewport, description, http-equiv, links.",
              "charset=utf-8 is the first-line fix for garbled text.",
              "viewport meta is what makes mobile rendering behave.",
              "Entities escape reserved characters: every literal < and & in content needs &lt; and &amp;.",
              "Named entities (&copy; &nbsp;) plus numeric (&#169;) cover untypeable characters.",
              "Comments ship to the client - no secrets in comments; nested comments break parsers.",
            ],
            diagram: {
              kind: "fork",
              title: "What the head tells whom",
              caption: "Four audiences read the head - each branch is a different meta family.",
              start: "The document head",
              branches: [
                { label: "The browser", outcome: "charset, viewport, refresh - how to render and behave", good: true },
                { label: "Search engines", outcome: "description, keywords - how to index and snippet", good: true },
                { label: "The server / protocol", outcome: "http-equiv directives - header-like instructions", good: true },
                { label: "Humans (source readers)", outcome: "comments and organized sections", good: true },
              ],
            },
            callout: {
              type: "warning",
              title: "Comments are public",
              body: "HTML comments are delivered to every visitor - view-source shows them verbatim. Debugging notes, credentials or internal URLs left in comments are an information-disclosure finding. The exam point doubles as a security habit from this cyber security syllabus.",
            },
            examQuestions: [
              {
                q: "Explain meta tags with their purposes (charset, viewport, description, http-equiv), why character entities are necessary with the reserved-character rule, and the cautions on HTML comments.",
                marks: 14,
                outline: [
                  "Meta tags live in the head and address machines, not readers",
                  "charset=utf-8 fixes encoding; viewport enables responsive mobile rendering",
                  "description feeds search snippets; keywords are legacy",
                  "http-equiv mimics HTTP headers (refresh after n seconds)",
                  "Entities: < and & are reserved - written &lt; and &amp; in content",
                  "Named and numeric entities cover symbols and untypeable characters",
                  "Comments ship to the client - no secrets; nesting breaks parsers",
                ],
              },
              {
                q: "What renders if you write 5 < 10 unescaped in HTML text?",
                marks: 7,
                outline: [

                  "The < begins a tag - the browser parses markup instead of text",

                  "Content may vanish or corrupt the page structure",

                  "Fix: escape as 5 &lt; 10",

                  "The rest of the line may be swallowed as an attribute",

                  "Validators flag it; browsers silently mis-render",

                ],              },
            ],
          },
          {
            number: "2.5",
            title: "XHTML - the well-formedness discipline",
            body: [
              "XHTML is HTML rewritten as a well-formed XML application: same vocabulary, stricter grammar. The rules are mechanical and examinable: a mandatory DOCTYPE; all tags lowercase; all elements closed (including empty ones as <br /> and <img ... />); all attributes quoted; attribute minimization banned (checked=\"checked\", not bare checked); the html element carries the XML namespace; documents must nest properly and contain exactly one root. The payoff is predictability: an XHTML document parses unambiguously into a DOM tree, repairs nothing, and can be processed by any XML tool - which mattered when browsers diverged wildly in their error repair.",
              "A worked migration shows the discipline applied. An HTML 4 snippet - <IMG SRC=logo.gif><br><p>Welcome - contains four violations: uppercase tag, unquoted attribute, unclosed br, unclosed p. The XHTML version: <img src=\"logo.gif\" alt=\"Logo\" /><br /><p>Welcome</p> - lowercase, quoted, self-closed, closed, with the alt that the stricter media culture expects. Every rule in the list is visible in the diff, which is why the migration example is the standard exam illustration.",
              "The honest historical framing completes the answer: XHTML 1.0 and 1.1 were transitional disciplines - they taught an ecosystem to write well-formed markup - but HTML5 reversed course, accepting looser syntax while keeping the well-formedness spirit as best practice. The exam-safe position: XHTML's rules remain the quality bar for hand-written markup (lowercase, quoted, closed, alt-ed) even where the DOCTYPE has moved on; HTML5 won the deployment war by being forgiving, XHTML won the culture war by being strict.",
              "Exam framing: expect 'what is XHTML and how does it differ from HTML'. Define it as well-formed XML grammar over HTML vocabulary, produce the rules list, run the four-violation migration snippet, and close with the historical verdict - strict teaching discipline, forgiving successor. The four-violation migration line demonstrates every XHTML rule in one comparison. The verdict sentence ends the answer - XHTML taught the discipline, HTML5 kept the spirit.",
            ],
            keyTerms: [
              { term: "XHTML", definition: "HTML rewritten with XML grammar - well-formed, strictly parsed markup." },
              { term: "Well-formed", definition: "Lowercase, quoted, closed, properly nested, single root - parseable without repair." },
              { term: "Self-closing", definition: "Empty elements written <br /> or <img ... /> - the XHTML signature." },
              { term: "DOCTYPE", definition: "The declaration selecting the document's grammar and rendering mode." },
            ],
            table: {
              caption: "HTML vs XHTML - the rules list.",
              headers: ["Rule", "HTML 4 tolerance", "XHTML requirement"],
              rows: [
                ["Tag case", "Any (<IMG> or <img>)", "Lowercase only"],
                ["Empty elements", "May be unclosed (<br>)", "Self-closed (<br />)"],
                ["Attributes", "May be unquoted (width=5)", "Always quoted (width=\"5\")"],
                ["Minimized attributes", "Bare (checked)", "Explicit (checked=\"checked\")"],
                ["Nesting / root", "Browsers repair errors", "Proper nesting, one root, mandatory"],
                ["Alt on images", "Optional", "Required"],
              ],
            },
            bullets: [
              "XHTML = HTML vocabulary under XML grammar: same tags, strict rules.",
              "Rules: lowercase, quoted attributes, closed elements, explicit minimized attributes.",
              "Empty elements self-close: <br />, <img src=\"...\" alt=\"...\" />.",
              "Documents nest properly with one root and a mandatory DOCTYPE.",
              "Worked migration: uppercase/unquoted/unclosed snippet rewritten clean.",
              "Verdict: XHTML taught the discipline; HTML5 kept the spirit and forgave the syntax.",
            ],
            diagram: {
              kind: "compare",
              title: "HTML 4 vs XHTML",
              caption: "Same vocabulary, different grammar - and one migration line that shows every rule.",
              left: {
                heading: "HTML 4 (tolerant)",
                items: [
                  "Any tag case; browsers repair errors",
                  "Unclosed tags acceptable (<br>)",
                  "Attributes may be bare or unquoted",
                  "Renders regardless of validity",
                ],
              },
              right: {
                heading: "XHTML (strict)",
                items: [
                  "Lowercase, self-closed empty elements",
                  "All attributes quoted, minimized ones explicit",
                  "Proper nesting, single root, DOCTYPE required",
                  "Parses unambiguously - processable by XML tools",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "The four-violation snippet",
              body: "Memorize one bad line and its fixed twin: <IMG SRC=logo.gif><br><p>Welcome versus <img src=\"logo.gif\" alt=\"Logo\" /><br /><p>Welcome</p>. It demonstrates case, quoting, self-closing and closing in a single comparison - the fastest full-credit illustration of the XHTML rules.",
            },
            examQuestions: [
              {
                q: "What is XHTML and how does it differ from HTML? State its rules, demonstrate with a migration of a non-conforming snippet, and assess XHTML's historical role versus HTML5.",
                marks: 14,
                outline: [
                  "Definition: HTML vocabulary under well-formed XML grammar",
                  "Rules: lowercase tags, quoted attributes, closed/self-closed elements",
                  "Explicit minimized attributes: checked=\"checked\"",
                  "Mandatory DOCTYPE, proper nesting, single root, required alt",
                  "Migration: <IMG SRC=logo.gif><br> becomes <img src=\"logo.gif\" alt=\"Logo\" /><br />",
                  "Payoff: unambiguous DOM, no error repair, XML-tool compatibility",
                  "Verdict: XHTML taught discipline; HTML5 kept the spirit and forgave syntax",
                ],
              },
              {
                q: "Why did XHTML fail to displace HTML despite its stricter quality?",
                marks: 7,
                outline: [

                  "Strictness broke legacy pages and forgiving authoring habits",

                  "Tools and authors favoured tolerance over parseability",

                  "HTML5 adopted the good rules as best practice without the hard gate",

                  "Serving XHTML as text/html broke the XML parser promise",

                  "Authors optimized for forgiving rendering",

                ],              },
            ],
          },
          {
            number: "2.6",
            title: "Frames, framesets and website structure",
            body: [
              "Frames split the browser window into independent panes: a frameset document declares rows or columns, and each frame element loads its own URL with its own scrolling and history. The technique solved 1990s problems - keeping a menu visible while content changed - and earned its deprecation honestly: frames break bookmarking (the URL points at the frameset, not the content), confuse printing and accessibility (screen readers face nested documents), and fragment the back button. HTML5 removed framesets entirely; the modern replacements are CSS layouts with fixed navigation and, for embedding foreign content, the iframe - which remains standard.",
              "Website structure is the arrangement behind the pages, and the syllabus's four patterns map to the diagram's quadrants. Hierarchical (tree): the dominant pattern - categories and subcategories, predictable paths, deep content. Linear (sequence): guided flows - wizards, checkouts, tutorials - where order matters. Grid/matrix: dense uniform collections - tables of courses or products - navigable by row and column choice. Web/network: free cross-linking - encyclopedias, wikis - maximum freedom, weak predictability. Real sites blend all four: a hierarchy with linear checkout flows and cross-linked glossary entries.",
              "A worked structure decision shows the analysis. A distance-education site: programme catalogue (hierarchical - browse by school then programme), admission application (linear - steps must be followed), fee tables (grid - compare by row and column), and an FAQ wiki (web - cross-linked questions). Frames are not part of the answer: persistent menus come from CSS and templates, embedding comes from iframe, and every page keeps its own bookmarkable URL - the three frames-era problems solved by structure plus styling instead of window-splitting.",
              "Exam framing: expect 'what are frames and why were they deprecated' or 'explain website structures'. Define frameset mechanics, give the deprecation reasons (bookmarks, accessibility, back button, printing), produce the four-structure quadrant with one use each, and close with the modern replacements - CSS layouts, iframe for embedding, one URL per page. Give the four mechanical deprecation reasons and the named replacements - mechanism plus remedy is the full answer.",
            ],
            keyTerms: [
              { term: "frameset", definition: "The declaring document that splits the window into frames, each loading its own URL." },
              { term: "iframe", definition: "The inline frame - embedding another document inside a page; the surviving standard." },
              { term: "Hierarchical structure", definition: "Tree arrangement by category - the default site pattern." },
              { term: "Linear structure", definition: "Ordered sequence for guided flows - wizards and checkouts." },
            ],
            table: {
              caption: "Website structures and their homes.",
              headers: ["Structure", "Shape", "Strength", "Signature use"],
              rows: [
                ["Hierarchical", "Tree of categories", "Predictable, scalable", "Catalogues, portals"],
                ["Linear", "Fixed sequence", "Order enforced", "Wizards, checkout, tutorials"],
                ["Grid", "Rows x columns", "Comparison by two axes", "Fee tables, product matrices"],
                ["Web / network", "Free cross-links", "Exploration, discovery", "Wikis, encyclopedias"],
              ],
            },
            bullets: [
              "frameset splits the window; each frame loads its own URL with independent history.",
              "Deprecated because URLs point at framesets - bookmarks, printing and accessibility break.",
              "Back-button behaviour confuses: one pane's navigation hijacks the whole window.",
              "Survivors: iframe for embedding foreign content; CSS layouts for persistent menus.",
              "Four structures: hierarchical, linear, grid, web - real sites blend them.",
              "Structure decision: catalogue=tree, application=sequence, fee tables=grid, FAQ=web.",
            ],
            diagram: {
              kind: "matrix",
              title: "The four website structures",
              caption: "Plot any site's sections by freedom and predictability - all four quadrants appear in real sites.",
              axes: { x: "Navigation freedom (low -> high)", y: "Predictability (low -> high)" },
              quadrants: [
                { label: "Grid structure", note: "uniform two-axis collections - fee tables" },
                { label: "Hierarchical structure", note: "predictable trees - catalogues" },
                { label: "Web structure", note: "free cross-links - wikis" },
                { label: "Linear structure", note: "ordered sequences - wizards" },
              ],
            },
            callout: {
              type: "exam",
              title: "Deprecate with reasons, not opinions",
              body: "'Frames are bad' scores nothing; 'frames break bookmarking because the URL names the frameset, not the displayed content' scores. Give the four mechanical reasons (URLs, accessibility, printing, back button) and the named replacement (iframe, CSS layouts) - mechanism plus replacement is the full answer.",
            },
            examQuestions: [
              {
                q: "Explain frames and framesets, why they were deprecated, their surviving replacements, and the four website structures with a structure decision for a distance-education site.",
                marks: 14,
                outline: [
                  "frameset declares rows/columns; frames load independent URLs",
                  "Breaks: bookmarks name the frameset; nested documents hurt accessibility",
                  "Printing and back-button behaviour fragment across panes",
                  "Replacements: CSS persistent menus; iframe for embedding; one URL per page",
                  "Structures: hierarchical (tree), linear (wizards), grid (tables), web (wikis)",
                  "Decision: catalogue=tree, application=linear, fees=grid, FAQ=web",
                  "Real sites blend structures by section task",
                ],
              },
              {
                q: "Why does the iframe survive while framesets do not?",
                marks: 7,
                outline: [

                  "iframe embeds content inside a normal page - the outer URL stays canonical",

                  "Framesets replaced the page itself, breaking addressing",

                  "Embedding maps, videos and widgets remains a real need",

                  "The outer URL stays canonical and bookmarkable",

                  "Sandboxing attributes make embedded content safer",

                ],              },
            ],
          },
          {
            number: "2.7",
            title: "HTML5 - overview and features",
            body: [
              "HTML5 is the current standard: a forgiving syntax (loose markup, optional quotes), a slimmed DOCTYPE (<!DOCTYPE html>), and a feature set built around what the 2000s web had bolted on with plugins. The semantic element set gives structure meaning: header, nav, main, section, article, aside, footer - screen readers and search engines parse roles instead of guessing from div soup. Native multimedia replaces plugins: audio and video elements with their own controls, and the canvas element for script-drawn graphics - the basis of browser games and charting.",
              "The API family is the second half of the feature story: form enhancements (email, date, number, range input types; required, pattern, placeholder attributes - native validation), offline and storage (localStorage and sessionStorage replacing cookie abuse; application caching for offline apps), geolocation, drag-and-drop, and web workers for background threads. A worked fragment assembles the showcase: a semantic page skeleton (header/nav/article/footer), a video element with controls and fallback text, a form using type=\"email\" with required, and a two-line localStorage save-and-read. Four features, ten lines - the standard exam illustration.",
              "The migration reading closes the unit: HTML5 keeps the XHTML-era best practices (lowercase, quoted, closed, alt) as recommendations while forgiving lapses; it kills framesets and font tags; and its form types shift first-line validation from JavaScript to the browser while Unit III's scripts remain for custom rules. The security-aware note: richer clients mean larger attack surfaces - canvas fingerprinting, localStorage theft via XSS - which is why this syllabus pairs HTML5 with a security branch's attention to input handling.",
              "Exam framing: expect 'explain the features of HTML5'. Give the syntax changes (slim DOCTYPE, forgiving parsing), the semantic element set, native multimedia (audio/video/canvas), the API list (forms, storage, geolocation, workers), run the showcase fragment, and close with the migration-and-security reading. One ten-line fragment proves four feature families - semantics, media, forms and storage in a single listing. The migration reading closes the unit - best practices kept as advice, plugins retired.",
            ],
            keyTerms: [
              { term: "Semantic elements", definition: "header, nav, article, section, aside, footer - roles machines can parse." },
              { term: "canvas", definition: "A script-drawn bitmap surface - charts, games, image processing without plugins." },
              { term: "localStorage", definition: "Persistent key-value storage per origin - larger and simpler than cookies." },
              { term: "Input validation attributes", definition: "required, pattern, type=email/date/number - native browser-side validation." },
            ],
            bullets: [
              "HTML5: slim DOCTYPE, forgiving syntax, semantic element set.",
              "header/nav/article/section/aside/footer give machines parseable structure.",
              "audio/video replace plugin players; canvas enables script-drawn graphics.",
              "Form types and attributes shift first-line validation into the browser.",
              "localStorage/sessionStorage replace cookie abuse for client-side data.",
              "Security note: richer clients enlarge attack surface - input handling matters more.",
            ],
            diagram: {
              kind: "layers",
              title: "The HTML5 feature stack",
              caption: "From markup meaning to platform capability - each layer retired a plugin or a hack.",
              layers: [
                { label: "Platform APIs", note: "geolocation, workers, drag-drop, offline" },
                { label: "Client storage", note: "localStorage, sessionStorage, IndexedDB" },
                { label: "Multimedia", note: "audio, video, canvas - plugins retired" },
                { label: "Semantics", note: "header, nav, article, footer - structure with meaning" },
              ],
            },
            callout: {
              type: "tip",
              title: "The ten-line showcase",
              body: "One fragment covers the exam: semantic skeleton + video with controls + type=\"email\" required input + a localStorage set/get. Four feature families in ten lines beats five paragraphs of feature listing - examiners want code that proves the features.",
            },
            examQuestions: [
              {
                q: "Explain the overview and features of HTML5: syntax changes, semantic elements, native multimedia, form enhancements, client storage and APIs - with a short showcase fragment and the migration reading.",
                marks: 14,
                outline: [
                  "Slim DOCTYPE <!DOCTYPE html>; forgiving parsing replaces strictness gates",
                  "Semantic set: header, nav, article, section, aside, footer",
                  "audio/video elements with controls replace plugins; canvas for graphics",
                  "Form types (email, date, number) and attributes (required, pattern)",
                  "localStorage/sessionStorage replace cookie abuse; IndexedDB for data",
                  "Showcase fragment: semantic skeleton + video + email input + localStorage",
                  "Migration: best practices kept as advice; framesets and font tags removed",
                ],
              },
              {
                q: "How do HTML5 form types change the validation story?",
                marks: 7,
                outline: [

                  "type=email/number and required/pattern validate natively before submit",

                  "First-line checks move from JavaScript to the browser",

                  "Server-side validation remains mandatory - browsers can be bypassed",

                  "Mobile keyboards adapt to the declared input type",

                  "Pattern attributes carry regex constraints declaratively",

                ],              },
            ],
            codeExample: {
              language: "html",
              caption: "An HTML5 showcase - semantics, media, forms and storage in one page",
              code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Seminar registration</title>
</head>
<body>
  <header><h1>Web Tech Seminar</h1></header>
  <nav><a href="#talks">Talks</a> | <a href="#venue">Venue</a></nav>
  <article>
    <video src="intro.mp4" controls width="320"></video>
    <form action="register.php" method="post">
      <input type="email" name="mail" placeholder="you@college.edu" required>
      <button type="submit">Register</button>
    </form>
  </article>
  <footer><small>&copy; 2025 CS Dept</small></footer>
  <script>
    localStorage.setItem("lastVisit", new Date().toISOString());
    console.log("Welcome back:", localStorage.getItem("lastVisit"));
  </script>
</body>
</html>`,
            },
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Style Sheets, JavaScript and DHTML",
      summary:
        "Unit III gives the pages their appearance and behaviour: the need for CSS and its syntax, colors, backgrounds, text and fonts, boxes and positioning through CSS2 and CSS3; client-side JavaScript from variables and functions to pop-up boxes; JavaScript objects and the DOM in its browser environment; DOM manipulation, forms and validation; and DHTML - HTML, CSS and JavaScript working together through events and buttons.",
      chapter: {
        number: "03",
        title: "Styling and Scripting",
        intro:
          "Unit III covers the need for CSS, its basic syntax and structure, using CSS, background images, colors and properties, manipulating text, using fonts, borders and boxes, margins, padding, lists, positioning using CSS, CSS2 and CSS3 features; client-side scripting with JavaScript - variables, functions, conditions, loops and pop-up boxes; advanced JavaScript with objects, the DOM and the browser environment, DOM manipulation, forms and validations; and DHTML combining HTML, CSS and JavaScript with events and buttons.",
        inOneBreath:
          "CSS separates appearance from structure: selectors target elements, the cascade resolves conflicts by origin and specificity, and the box model (content, padding, border, margin) plus positioning place everything. JavaScript supplies behaviour: variables, functions, control flow and pop-ups on top of an object model whose DOM tree lets scripts read and rewrite the live page - and DHTML is that rewrite cycle driven by events.",
        sections: [
          {
            number: "3.1",
            title: "The need for CSS - syntax, structure and application",
            body: [
              "CSS (Cascading Style Sheets) exists to separate appearance from structure: HTML declares what content is, CSS declares how it looks. The need is concrete - without CSS, every paragraph carries its own font tag, restyling a site means editing every page, and appearance and markup tangle into unmaintainable soup. With CSS, one external stylesheet restyles a thousand pages; the separation is why Unit I's cache and consistency arguments work.",
              "The syntax is selector-plus-declarations: h1 { color: navy; font-size: 2em; } targets all h1 elements with two declarations (property: value pairs in braces). Selectors range from simple (element, .class, #id), through combinators (descendant 'div p', child 'div > p', grouping 'h1, h2'), to attribute and pseudo-classes (a:hover, li:first-child). CSS applies in three ways - inline (style attribute, strongest, no reuse), internal (style element in the head, page-scoped) and external (linked .css file, site-wide, cacheable) - and the cascade resolves conflicts by origin and specificity: author styles beat browser defaults, id beats class beats element, and inline beats everything except !important.",
              "A worked cascade trace shows the resolution in action. A p element faces: browser default (margin), an external rule p { color: gray; }, a class rule .note { color: red; }, and an id rule #legal { color: green; }. The element matches all three author rules; specificity decides - id wins, so the paragraph renders green. Remove the id and the class wins; remove both and the element rule applies. Three rungs, one winner - the cascade is a tournament, and knowing the bracket is what makes debugging 'why is this style not applying?' mechanical.",
              "Exam framing: expect 'explain CSS syntax and ways of applying CSS' or 'what is the cascade'. Give the selector grammar with examples, the three application methods with trade-offs, and run the specificity trace - closing with the separation sentence: structure in HTML, appearance in CSS. Debug the cascade as a tournament - check the bracket before blaming the property. The three-method table is the trade-off answer - strength, scope and reuse on three rows.",
            ],
            keyTerms: [
              { term: "Selector", definition: "The pattern (element, .class, #id, pseudo-class) choosing which elements receive declarations." },
              { term: "Declaration", definition: "A property: value pair inside braces - the instruction applied to matched elements." },
              { term: "Specificity", definition: "The cascade's tie-breaker: inline > id > class > element." },
              { term: "External stylesheet", definition: "A linked .css file - site-wide styling, cached by browsers." },
            ],
            bullets: [
              "CSS separates appearance from structure - one stylesheet restyles a whole site.",
              "Syntax: selector { property: value; ... } - selectors target, declarations style.",
              "Selectors: element, .class, #id, combinators (descendant, child), pseudo-classes (:hover).",
              "Application: inline (strong, no reuse), internal (page), external (site, cached).",
              "Cascade resolves conflicts: origin first, then specificity inline > id > class > element.",
              "Inheritance passes typography down the tree; layout properties do not inherit.",
            ],
            diagram: {
              kind: "pipeline",
              title: "How the cascade resolves a conflict",
              caption: "Origin first, then specificity - one winner takes the property.",
              stages: [
                { label: "Browser defaults", note: "baseline styles for every element" },
                { label: "Author styles", note: "external, internal, inline sheets" },
                { label: "Specificity", note: "inline > #id > .class > element" },
                { label: "Winner applies", note: "the strongest matching declaration renders" },
              ],
            },
            callout: {
              type: "exam",
              title: "Debug as a tournament",
              body: "'Why isn't my style applying?' is a specificity question: check the bracket - is a stronger selector matching the same element? Writing the id > class > element bracket and one worked trace is the difference between naming the cascade and understanding it.",
            },
            examQuestions: [
              {
                q: "Explain the need for CSS, its syntax and selector types, the three ways of applying CSS with their trade-offs, and the cascade's conflict resolution with a worked specificity trace.",
                marks: 14,
                outline: [
                  "Need: separate appearance from structure - one sheet restyles a site",
                  "Syntax: selector { property: value; } with element, .class, #id selectors",
                  "Combinators and pseudo-classes: div p, div > p, a:hover, li:first-child",
                  "Inline: strongest, no reuse; internal: page-scoped; external: site-wide, cached",
                  "Cascade: origin (author over browser), then specificity",
                  "Specificity bracket: inline > id > class > element",
                  "Trace: id rule wins over class over element for the same paragraph",
                ],
              },
              {
                q: "Why does an id selector beat a class selector of equal origin?",
                marks: 7,
                outline: [

                  "Specificity counts: id is rarer and more precise than class",

                  "The cascade resolves equal-origin conflicts by specificity order",

                  "id > class > element is the designed tie-breaker",

                  "Inline styles outrank even ids unless !important intervenes",

                  "Origin (author over browser) is decided before specificity",

                ],              },
            ],
            codeExample: {
              language: "css",
              caption: "Selectors and the cascade in one sheet",
              code: `/* element selector - all paragraphs */
p { color: gray; line-height: 1.5; }

/* class selector - any .note element */
.note { color: red; border-left: 3px solid red; padding-left: 8px; }

/* id selector - one element, highest author specificity */
#legal { color: green; font-size: 0.85em; }

/* pseudo-class - links darken on hover */
a:hover { color: navy; }`,
            },
          },
          {
            number: "3.2",
            title: "Colours, backgrounds, text and fonts",
            body: [
              "The visual properties divide into four families. Colour: the color property takes named values, hex (#1a73e8), rgb()/rgba() and hsl(); backgrounds extend the idea to surfaces - background-color, background-image with url(), background-repeat (repeat/no-repeat/repeat-x), background-position and the shorthand that sets them all at once. Text manipulation: text-align (left/center/justify), text-decoration (underline, line-through, none), text-transform (uppercase, capitalize), letter-spacing, line-height, text-indent, and text-shadow from CSS3.",
              "Fonts complete the families: font-family with fallback stacks ('Segoe UI', Arial, sans-serif - the generic family last, because availability differs per machine), font-size in px, em or rem, font-weight (normal/bold/100-900), font-style (italic), and CSS3's @font-face which loads a web font file so the design no longer depends on installed fonts. The em unit ties the family to the cascade: font sizes in em scale relative to the parent, making pages zoom-coherent - the exam-worthy reason to prefer em over px for body text.",
              "A worked snippet assembles the families on one element set: a body rule with background colour and image, a header with white text on a gradient background (CSS3 linear-gradient), a .notice class with small-caps letter-spaced red text, and a paragraph stack with em-based sizing and a web font. Reading the snippet aloud is the exam answer: each line names a family (surface, colour, text, font) and a property inside it - the properties table is the snippet's table of contents.",
              "Exam framing: expect 'explain CSS properties for text and fonts' or 'background properties with example'. Produce the four-family table with named properties, run the snippet, and close with the two-unit notes - hex/rgb/hsl for colours, em/rem for sizes, and @font-face for font independence. The sizing maths lives at the border - state which box-sizing model you assume before computing widths.",
            ],
            keyTerms: [
              { term: "Fallback stack", definition: "font-family lists fonts in preference order ending with a generic (serif/sans-serif)." },
              { term: "em / rem", definition: "Relative font sizes - em scales with the parent, rem with the root." },
              { term: "@font-face", definition: "Loads a font file so the design needs no locally installed font." },
              { term: "background shorthand", definition: "One declaration setting colour, image, repeat and position together." },
            ],
            table: {
              caption: "The visual property families.",
              headers: ["Family", "Properties", "Example values"],
              rows: [
                ["Colour", "color", "#1a73e8, rgba(0,0,0,.6), hsl(210,80%,50%)"],
                ["Background", "background-color, -image, -repeat, -position", "url(bg.png) no-repeat center"],
                ["Text", "text-align, -decoration, -transform, letter-spacing, line-height", "justify / uppercase / 1.6"],
                ["Font", "font-family, -size, -weight, -style", "'Segoe UI', Arial, sans-serif / 1em / 600"],
              ],
            },
            bullets: [
              "Colours: named, hex, rgb()/rgba() (alpha), hsl() - pick one convention per project.",
              "Backgrounds: colour, image, repeat, position - the shorthand sets all four.",
              "Text: align, decorate, transform, spacing, line-height - scanning structure, not just looks.",
              "Fonts: family stacks with generic last; size in em for zoom coherence.",
              "@font-face frees the design from installed fonts - web fonts travel with the site.",
              "CSS3 additions: text-shadow, gradients, rounded corners - decoration without images.",
            ],
            diagram: {
              kind: "layers",
              title: "The box model",
              caption: "Every element is four nested layers - sizing maths lives at the border.",
              layers: [
                { label: "Margin", note: "transparent space outside - separates elements" },
                { label: "Border", note: "the drawn edge: width, style, colour" },
                { label: "Padding", note: "space inside the edge - background shows here" },
                { label: "Content", note: "the text or box itself - width/height apply" },
              ],
            },
            callout: {
              type: "tip",
              title: "Sizing maths is at the border",
              body: "The classic exam trap: a box declared width: 100px with 10px padding and 2px border actually occupies 124px unless box-sizing: border-box is set - then padding and border sit inside the declared width. Say which model you assume; layout questions turn on exactly this.",
            },
            examQuestions: [
              {
                q: "Explain CSS colour, background, text and font property families with example values, and describe the box model with the sizing consequences of padding and border.",
                marks: 14,
                outline: [
                  "Colour: named, hex #1a73e8, rgb()/rgba() with alpha, hsl()",
                  "Background: colour, image with url(), repeat, position, shorthand",
                  "Text: align, decoration, transform, letter-spacing, line-height",
                  "Fonts: family stacks with generic last, sizes in em/rem, weight and style",
                  "@font-face loads web fonts - no dependence on installed fonts",
                  "Box model: content, padding, border, margin as nested layers",
                  "Sizing: width + padding + border stack unless box-sizing: border-box",
                ],
              },
              {
                q: "Why do font stacks end with a generic family like sans-serif?",
                marks: 7,
                outline: [

                  "Named fonts vary by machine and OS",

                  "The generic family always exists, guaranteeing a sane fallback",

                  "Stack order = preference order, generic last as guaranteed floor",

                  "Font metrics differ per design - fallbacks keep layouts sane",

                  "Generic families carry the rendering contract",

                ],              },
            ],
          },
          {
            number: "3.3",
            title: "Boxes, borders, margins, padding, lists and positioning",
            body: [
              "The box properties give every element a drawn edge and breathing room: border (width, style - solid/dashed/dotted, colour), border-radius from CSS3 for rounded corners; padding (inside the border, background shows through) and margin (outside, transparent) each accept one to four values applying clockwise (top, right, bottom, left); and margin collapsing makes adjacent vertical margins merge rather than add. Lists get their own properties: list-style-type (disc, decimal, none), list-style-image, and position markers - nav menus are lists with list-style: none and styled links.",
              "Positioning is the layout control set, and the schemes are the exam's quadrant table. Static: normal flow, the default. Relative: offset from its normal position (top/left shift it visually; neighbours keep its original slot). Absolute: positioned relative to the nearest positioned ancestor, removed from flow - overlays and badges. Fixed: positioned relative to the viewport, unmoved by scrolling - sticky headers and footers. CSS2 also contributed media types and matured positioning; CSS3 added transitions, transforms, gradients, shadows, border-radius, and media queries (the enabler of responsive design) plus flexbox for one-dimensional layout.",
              "A worked overlay shows the schemes cooperating: a card container gets position: relative (it becomes the anchor); its 'New!' badge gets position: absolute; top/right offsets place it at the card's corner; a nav bar uses position: fixed to stay visible; and a media query below 600px switches the two-column layout to one column. Four schemes and one CSS3 query in four lines - the miniature that proves the whole section.",
              "Exam framing: expect 'explain CSS positioning' or 'write notes on margins and padding'. Give the box properties with the clockwise rule and collapsing note, the list properties, the four positioning schemes with one use each, and the CSS2-vs-CSS3 additions - closing with the overlay-and-media-query mini-scenario. Absolute positioning needs an anchor - the escaped badge is the classic bug and position relative is its fix.",
            ],
            keyTerms: [
              { term: "Margin collapsing", definition: "Adjacent vertical margins merge to the larger, not sum." },
              { term: "Relative vs absolute", definition: "Relative offsets from normal flow; absolute removes from flow against a positioned ancestor." },
              { term: "Fixed positioning", definition: "Anchored to the viewport - unmoved by scrolling (sticky bars)." },
              { term: "Media query", definition: "CSS3 conditional styling by device characteristics - responsive design's enabler." },
            ],
            table: {
              caption: "The four positioning schemes.",
              headers: ["Scheme", "Positioned against", "In normal flow?", "Signature use"],
              rows: [
                ["static", "Nothing - default", "Yes", "Ordinary documents"],
                ["relative", "Its own normal position", "Yes (slot kept)", "Small visual nudges"],
                ["absolute", "Nearest positioned ancestor", "No", "Badges, overlays"],
                ["fixed", "The viewport", "No", "Sticky navbars, floating buttons"],
              ],
            },
            bullets: [
              "Box set: border (width/style/colour, radius), padding inside, margin outside.",
              "Margin/padding accept 1-4 values clockwise: top, right, bottom, left.",
              "Adjacent vertical margins collapse - merge to the larger, never sum.",
              "Lists: list-style-type/image/position - menus are lists with markers removed.",
              "Positioning: static default, relative nudges, absolute overlays, fixed viewport anchors.",
              "CSS3: transitions, transforms, gradients, shadows, media queries, flexbox.",
            ],
            diagram: {
              kind: "matrix",
              title: "The positioning quadrants",
              caption: "Two questions decide the scheme: does it stay in flow, and positioned against what?",
              axes: { x: "Anchor (normal position -> ancestor/viewport)", y: "In normal flow (yes -> no)" },
              quadrants: [
                { label: "fixed", note: "out of flow, viewport-anchored - sticky bars" },
                { label: "absolute", note: "out of flow, ancestor-anchored - overlays" },
                { label: "static", note: "in flow, default - documents" },
                { label: "relative", note: "in flow (slot kept), self-anchored nudges" },
              ],
            },
            callout: {
              type: "warning",
              title: "Absolute needs an anchor",
              body: "An absolutely positioned element looks for the nearest positioned ancestor - if none exists, it anchors to the page and 'escapes' its parent. The classic bug: the badge that lands at the browser corner. Fix: position: relative on the intended parent. Explain both the bug and the fix in positioning answers.",
            },
            examQuestions: [
              {
                q: "Explain the CSS box properties (border, padding, margin with the clockwise rule and collapsing), list styling, the four positioning schemes with uses, and the CSS2 vs CSS3 feature additions.",
                marks: 14,
                outline: [
                  "Border: width, style (solid/dashed/dotted), colour; CSS3 border-radius",
                  "Padding inside (background shows), margin outside (transparent)",
                  "1-4 values clockwise: top, right, bottom, left",
                  "Vertical margin collapsing merges adjacent margins",
                  "Lists: list-style-type/image - menus are stripped, styled lists",
                  "Positioning: static, relative (slot kept), absolute (ancestor), fixed (viewport)",
                  "CSS2 matured positioning and media types; CSS3 adds transitions, gradients, media queries, flexbox",
                ],
              },
              {
                q: "Why does an absolutely positioned badge escape its card without position: relative on the card?",
                marks: 7,
                outline: [

                  "Absolute anchors to the nearest positioned ancestor",

                  "No positioned ancestor means it anchors to the page",

                  "Setting position: relative on the card creates the intended anchor",

                  "The nearest positioned ancestor becomes the containing block",

                  "z-index stacking then resolves within that ancestor",

                ],              },
            ],
          },
          {
            number: "3.4",
            title: "JavaScript basics - variables, functions, conditions, loops, pop-ups",
            body: [
              "JavaScript is the browser's programming language: embedded in HTML (inline, or in script elements, or external .js files), it runs after the page loads and reacts to events. Variables: var (function-scoped, legacy), let and const (block-scoped, modern); types are dynamic - number, string, boolean, object, undefined - and conversion between them is implicit (the '5' + 3 quirk produces '53', a favourite viva question). Operators and control flow read like C: if/else, switch, for, while, do-while, with C-style syntax and semicolons.",
              "Functions are first-class: declared (function add(a,b){...}), expressed as values (const f = function(...)), or arrowed in modern code; parameters pass by value for primitives and by reference for objects; return values optional. A worked validation snippet fixes the basics in one place: a function isAdult(age) with an if returning a boolean, a for loop summing marks from an array, and document.write or DOM calls printing results - conditions, loops, functions and arrays in six lines, which is the standard exam illustration.",
              "Pop-up boxes are the built-in dialogues: alert(message) for information (OK only), confirm(message) for decisions (returns true/false), prompt(message, default) for input (returns the string or null). They block the page while open - which is exactly why modern UIs replace them with styled dialogs, but they remain the syllabus's named trio and the fastest demo of interactivity: one line each, no markup required.",
              "Exam framing: expect 'explain JavaScript basics' or 'describe pop-up boxes'. Give the variable and type story (let/const, dynamic typing, the '5'+3 quirk), the function forms, the control structures, and the alert/confirm/prompt trio with return values - closing with the embedding note: inline, internal script tags, external files. The '5' + 3 quirk demonstrates dynamic typing in one line - quote both directions.",
            ],
            keyTerms: [
              { term: "Dynamic typing", definition: "Variables hold any type; conversions happen implicitly ('5' + 3 = '53')." },
              { term: "let / const", definition: "Block-scoped declarations; const adds no-reassignment - modern preference over var." },
              { term: "confirm()", definition: "Pop-up returning true/false - the decision box." },
              { term: "prompt()", definition: "Pop-up returning entered text (or null) - the input box." },
            ],
            bullets: [
              "JavaScript runs in the browser: inline, in script tags, or external .js files.",
              "Variables: let/const block-scoped (modern), var function-scoped (legacy).",
              "Dynamic typing with implicit conversion - '5' + 3 is '53', 5 + '3' is '53'.",
              "Functions: declared, expressed, arrowed; objects pass by reference.",
              "Control flow: if/else, switch, for, while, do-while - C-family syntax.",
              "Pop-ups: alert informs, confirm returns boolean, prompt returns text or null.",
            ],
            diagram: {
              kind: "flow",
              title: "How a script runs",
              caption: "From parse to event-driven life - the script outlives its first execution.",
              steps: [
                { label: "Parse", note: "browser loads and parses the script" },
                { label: "Execute top-level", note: "declarations and initial code run" },
                { label: "Register handlers", note: "functions wait on events" },
                { label: "React", note: "events fire handlers as the user interacts" },
              ],
            },
            callout: {
              type: "exam",
              title: "The '5' + 3 quirk earns marks",
              body: "Dynamic typing's favourite demonstration: '5' + 3 yields '53' (string concatenation wins) while '5' - 3 yields 2 (subtraction forces numeric conversion). One line showing both directions proves you understand implicit conversion, not just its name.",
            },
            examQuestions: [
              {
                q: "Explain JavaScript basics: variable declarations and dynamic typing (with the '5'+3 example), function forms, control structures, and the three pop-up boxes with their return values.",
                marks: 14,
                outline: [
                  "Embedding: inline, script elements, external .js files",
                  "Variables: let/const block-scoped; var legacy function-scoped",
                  "Dynamic typing: implicit conversion - '5' + 3 = '53', '5' - 3 = 2",
                  "Functions: declarations, expressions, arrows; objects by reference",
                  "Control: if/else, switch, for, while, do-while",
                  "Pop-ups: alert (info), confirm (boolean), prompt (string or null)",
                  "Scripts register handlers and live on through events",
                ],
              },
              {
                q: "Why do modern interfaces avoid alert() and confirm() despite their simplicity?",
                marks: 7,
                outline: [

                  "They block the page's whole thread while open",

                  "Unstyleable native chrome clashes with the design",

                  "Custom dialogs match branding and do not freeze interaction",

                  "Accessibility and internationalization suffer in native boxes",

                  "Custom dialogs integrate validation and styling",

                ],              },
            ],
            codeExample: {
              language: "javascript",
              caption: "Basics in one script - types, control, functions, pop-ups",
              code: `const marks = [78, 65, 91];
let total = 0;
for (let i = 0; i < marks.length; i++) total += marks[i];

function isAdult(age) {
  if (age >= 18) return true;
  return false;
}

alert("Total marks: " + total);                 // information
if (confirm("Show result?")) {                  // decision
  var name = prompt("Your name:", "Student");   // input
  console.log(name, "adult:", isAdult(19));
}`,
            },
          },
          {
            number: "3.5",
            title: "JavaScript objects and the DOM in its browser environment",
            body: [
              "JavaScript is object-based, and the objects come in three layers. Built-in objects: String, Array, Math, Date, Number - String gives length and methods (toUpperCase, indexOf, slice, split), Array gives push/pop and iteration, Math gives floor/round/random, Date gives now and formatting. Host objects: the browser environment - window (the global object with alert, setTimeout, open), navigator (browser identity), location (the URL), history (back/forward), screen and document. User-defined objects: object literals ({name: 'Riya', marks: 91}), constructor functions, and modern class syntax - with properties accessed by dot or bracket notation.",
              "The DOM (Document Object Model) is the crown of the host objects: the browser parses HTML into a tree of node objects - document at the root, elements, their attributes and text as descendants - and JavaScript reads and writes that tree live. The navigation API: document.getElementById('x'), getElementsByClassName, querySelector('.note'), plus tree walking via parentNode, childNodes, firstChild. Each element node exposes properties (innerHTML, textContent, style, className, src, value) that are both readable and settable - which is the entire trick behind every interactive page.",
              "A worked object exercise shows both layers. A constructor function Student(name, marks) creates objects; an array of them is summed with a loop; the topper's name is written into the page with document.getElementById('topper').textContent. Built-in objects did the string and array work, host objects did the page work, user-defined objects modelled the domain - three layers in one six-line script. The exam's framing sentence: the DOM is the API between script and page; everything visual JavaScript does, it does by mutating DOM nodes.",
              "Exam framing: expect 'explain JavaScript objects' or 'what is the DOM'. Give the three object layers with named members, the DOM tree concept with navigation methods, run the Student-object-to-page trace, and close with the API sentence - DOM mutation is how scripts change pages. The DOM is the API - scripts change the page only by mutating its nodes. The Inspector proves the point - view-source shows the file, the DOM panel shows the mutated tree.",
            ],
            keyTerms: [
              { term: "Host objects", definition: "The browser-supplied environment: window, document, navigator, location, history." },
              { term: "DOM", definition: "The Document Object Model - the live node tree parsed from HTML that scripts read and rewrite." },
              { term: "getElementById / querySelector", definition: "The DOM's element-finding methods by id or CSS selector." },
              { term: "Object literal", definition: "{ key: value, ... } - the quickest user-defined object form." },
            ],
            table: {
              caption: "The three object layers.",
              headers: ["Layer", "Members", "Example use"],
              rows: [
                ["Built-in", "String, Array, Math, Date, Number", "Parsing, sums, dates"],
                ["Host (browser)", "window, document, navigator, location, history", "Dialogs, navigation, page access"],
                ["User-defined", "Literals, constructors, classes", "Domain models: Student, Order"],
              ],
            },
            bullets: [
              "Built-ins: String/Array/Math/Date with their everyday methods.",
              "Host objects: window (global), navigator, location, history, document.",
              "User-defined: literals, constructor functions, class syntax.",
              "The DOM is the parsed HTML tree - document at root, elements and text as nodes.",
              "Finding nodes: getElementById, getElementsByClassName, querySelector.",
              "Node properties (innerHTML, style, value) are read-write - mutation is the trick.",
            ],
            diagram: {
              kind: "layers",
              title: "The browser object environment",
              caption: "From the global window down to the text nodes scripts mutate.",
              layers: [
                { label: "window", note: "the global object: alert, setTimeout, open" },
                { label: "document", note: "the DOM root - the page as a tree" },
                { label: "Element nodes", note: "html, head, body, div, p ... each an object" },
                { label: "Attribute & text nodes", note: "the leaves scripts read and rewrite" },
              ],
            },
            callout: {
              type: "tip",
              title: "The DOM is the API",
              body: "One sentence to write in every DOM answer: 'JavaScript changes what the user sees only by mutating DOM nodes - there is no other channel.' It connects this section to the next (manipulation and validation) and shows the tree is not a diagram but the live interface.",
            },
            examQuestions: [
              {
                q: "Explain JavaScript's object layers - built-in, host (browser environment) and user-defined - with the DOM tree concept, node-finding methods, and a worked script that models objects and writes results into the page.",
                marks: 14,
                outline: [
                  "Built-ins: String, Array, Math, Date with core methods",
                  "Host: window (global), navigator, location, history, screen",
                  "User-defined: object literals, constructor functions, class syntax",
                  "DOM: HTML parsed into a node tree rooted at document",
                  "Finding nodes: getElementById, getElementsByClassName, querySelector",
                  "Readable-writable properties: innerHTML, textContent, style, value",
                  "Worked trace: Student objects -> array sum -> topper written via textContent",
                ],
              },
              {
                q: "What is the relationship between the HTML file and the DOM?",
                marks: 7,
                outline: [

                  "HTML is the source text; the DOM is the browser's parsed, live tree",

                  "Scripts mutate the DOM, not the file",

                  "Rendering follows the DOM - so changes appear without reloading",

                  "View-source shows the file; the inspector shows the mutated DOM",

                  "Reload rebuilds the tree from the unchanged file",

                ],              },
            ],
          },
          {
            number: "3.6",
            title: "DOM manipulation, forms and validation",
            body: [
              "DOM manipulation is the write-side of the DOM API. Creating and inserting: document.createElement('li'), setting properties, then appendChild or insertBefore; changing: node.innerHTML swaps HTML content, textContent swaps text safely, style properties restyle, className re-tags, setAttribute changes any attribute; deleting: removeChild (and modern remove()). The classic worked demo: adding an item to a list - createElement, textContent, appendChild - three calls, and the list visibly grows. Reading is symmetric: value for inputs, textContent for text, getAttribute for anything.",
              "Form handling is manipulation's most common application, and validation its most examinable one. Access: document.forms[0] or getElementById on inputs; the event: onsubmit fires before transmission, and returning false cancels the submit - the classic gate. Validation patterns: empty checks, length checks, pattern checks via regex (email as /^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i), and cross-field checks (password === confirm). A worked snippet assembles the gate: validate() reads fields, checks empties and the email pattern, alerts on failure, and returns false to stop the form; onsubmit=\"return validate()\" wires it.",
              "The honesty paragraph is the security-grade point: client-side validation is user experience, not security - it can be bypassed by disabling JavaScript or posting directly, so the server (Unit IV) must re-validate every field. The division of labour: the browser validates for convenience and immediate feedback; the server validates for correctness and safety. Both halves matter; neither substitutes for the other - and saying exactly that is the difference between a form answer and a web-security answer.",
              "Exam framing: expect 'explain DOM manipulation' or 'write JavaScript form validation'. Give the create/change/delete API with the list-item demo, the onsubmit gate mechanics, the regex email check as the worked example, and close with the two-validation doctrine - client for UX, server for security. innerHTML with user input is the local XSS door - textContent is the safe call. The regex is quotable - local at domain dot tld in one line earns the pattern mark.",
            ],
            keyTerms: [
              { term: "createElement / appendChild", definition: "The create-and-insert pair that grows the live DOM." },
              { term: "innerHTML vs textContent", definition: "innerHTML parses HTML (powerful, injection-prone); textContent sets plain text safely." },
              { term: "onsubmit gate", definition: "Returning false from the submit handler cancels form transmission." },
              { term: "Regex validation", definition: "Pattern checks (email, phone) via regular expressions before sending." },
            ],
            bullets: [
              "Create: createElement -> set properties -> appendChild into position.",
              "innerHTML swaps markup; textContent swaps text - choose per trust level.",
              "The onsubmit gate: validate() returns false to cancel a bad submission.",
              "Checks: empty, length, regex pattern, cross-field equality.",
              "Email regex: local@domain.tld in one line - quote it in validation answers.",
              "Doctrine: client validation is UX, server validation is security - both mandatory.",
            ],
            diagram: {
              kind: "flow",
              title: "The validation gate",
              caption: "Every field passes four checks before the form is allowed to travel.",
              steps: [
                { label: "Read fields", note: "value of each input by id" },
                { label: "Empty check", note: "nothing blank, lengths respected" },
                { label: "Pattern check", note: "email/phone regexes match" },
                { label: "Cross-field", note: "password equals confirm" },
                { label: "Verdict", note: "true submits; false stops the form" },
              ],
            },
            callout: {
              type: "warning",
              title: "innerHTML is an injection door",
              body: "Setting innerHTML with user-supplied strings executes markup - the local XSS classic. For untrusted data use textContent, which inserts text only. In this cyber security syllabus, that sentence is worth writing in any DOM-manipulation answer.",
            },
            examQuestions: [
              {
                q: "Explain DOM manipulation - create, change and delete operations with a worked list demo - and write a JavaScript form-validation gate with empty, length, regex and cross-field checks, closing with the client-vs-server validation doctrine.",
                marks: 14,
                outline: [
                  "Create: createElement, set textContent, appendChild - the growing list demo",
                  "Change: innerHTML (markup) vs textContent (safe text), style, className",
                  "Attributes: setAttribute/getAttribute for src, href, disabled",
                  "Delete: removeChild / remove()",
                  "Gate: onsubmit=\"return validate()\" - false cancels transmission",
                  "Checks: empty, length, /^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i email, password equality",
                  "Doctrine: client = UX, server = security; both mandatory",
                ],
              },
              {
                q: "Why is textContent preferred over innerHTML for user-supplied strings?",
                marks: 7,
                outline: [

                  "innerHTML parses its argument as HTML - tags execute",

                  "Attacker markup becomes script (stored XSS)",

                  "textContent inserts literal text only - no parsing",

                  "Trusted template strings are the only innerHTML candidates",

                  "Sanitizers exist but textContent needs none",

                ],              },
            ],
            codeExample: {
              language: "javascript",
              caption: "A form-validation gate with regex and cross-field checks",
              code: `function validate() {
  var mail = document.getElementById("mail").value.trim();
  var p1 = document.getElementById("pass").value;
  var p2 = document.getElementById("pass2").value;
  var ok = true;

  if (mail.length === 0) { alert("Email required"); ok = false; }
  else if (!/^[^@\\s]+@[^@\\s]+\\.[a-z]{2,}$/i.test(mail)) {
    alert("Email format invalid"); ok = false;
  }
  if (p1.length < 8) { alert("Password too short"); ok = false; }
  if (p1 !== p2) { alert("Passwords do not match"); ok = false; }

  return ok;   // false cancels the submit
}`,
            },
          },
          {
            number: "3.7",
            title: "DHTML - combining HTML, CSS and JavaScript through events",
            body: [
              "DHTML (Dynamic HTML) is not a technology but a recipe: HTML provides structure, CSS provides presentation, JavaScript provides behaviour, and the DOM is the meeting point where events drive style and content changes without page reloads. The event model is the engine: events fire (click, mouseover, mouseout, change, keyup, submit, load), and handler functions registered on elements (element.onclick = fn, or addEventListener) respond. Within a handler, this names the element that received the event, and the DOM manipulation API from 3.6 does the visible work.",
              "A worked pair of classics shows the cycle. Rollover buttons: an image swaps on mouseover - this.src = 'hover.png' - and reverts on mouseout; modern styling does it purely in CSS (:hover), but the JS version demonstrates the event-property mechanism. Show/hide panels: a click toggles a section's visibility - panel.style.display = (panel.style.display === 'none' ? 'block' : 'none') - one line that powers accordions, menus and FAQ pages. Both run the same loop: event fires, handler reads or mutates DOM/CSS state, the renderer repaints - no network involved.",
              "The design-and-security notes finish the section: event-driven UI should stay keyboard-accessible (not only onclick but onkeypress/Enter handling, focusable elements) and should not rely on colour alone; and handlers that read user input must treat it as untrusted - event-driven DOM writes are where XSS lives (3.6's textContent rule applies here too). The exam's synthesis sentence: DHTML is the event -> handler -> DOM mutation -> repaint cycle, repeated as long as the page lives.",
              "Exam framing: expect 'what is DHTML' or 'explain events in DHTML'. Define the three-ingredient recipe with the DOM as meeting point, name the event set and registration forms, run the rollover and show/hide demos, and close with the accessibility-and-XSS notes plus the cycle sentence. DHTML is a cycle, not a product - event, handler, mutation, repaint, repeated for the page's life.",
            ],
            keyTerms: [
              { term: "DHTML", definition: "HTML + CSS + JavaScript + DOM - dynamic pages driven by events without reloads." },
              { term: "Event handler", definition: "A function registered to run when an event fires (onclick, addEventListener)." },
              { term: "this", definition: "Inside a handler, the element that received the event." },
              { term: "display toggle", definition: "style.display none/block switching - the one-line accordion engine." },
            ],
            table: {
              caption: "The event set worth knowing.",
              headers: ["Event", "Fires when", "Typical handler use"],
              rows: [
                ["click", "Element activated", "Buttons, toggles, menus"],
                ["mouseover / mouseout", "Pointer enters / leaves", "Rollovers, tooltips"],
                ["change", "Input value committed", "Dropdown-driven updates"],
                ["keyup", "Key released in a field", "Live validation, search-as-you-type"],
                ["submit", "Form submitted", "Validation gate"],
                ["load", "Page finished loading", "Initial state setup"],
              ],
            },
            bullets: [
              "DHTML recipe: HTML structure + CSS presentation + JS behaviour via the DOM.",
              "Events: click, mouseover/out, change, keyup, submit, load - handlers respond.",
              "Registration: element.onclick = fn or addEventListener('click', fn).",
              "Inside a handler, this is the receiving element - swap its src, style, content.",
              "Rollover demo: this.src swap on mouseover/mouseout.",
              "Show/hide demo: display none/block toggle powers accordions and menus.",
            ],
            diagram: {
              kind: "cycle",
              title: "The DHTML cycle",
              caption: "One loop, no reloads - the page stays live from load to close.",
              steps: [
                { label: "Event fires", note: "click, keyup, mouseover ..." },
                { label: "Handler runs", note: "this = the receiving element" },
                { label: "DOM/CSS mutate", note: "content, style, visibility change" },
                { label: "Repaint", note: "renderer shows the new state" },
                { label: "Wait", note: "page waits for the next event" },
              ],
            },
            callout: {
              type: "exam",
              title: "DHTML is a cycle, not a product",
              body: "The definitional sentence that examiners want: 'DHTML is not a separate technology - it is the event -> handler -> DOM mutation -> repaint cycle using HTML, CSS and JavaScript together.' Then prove it with the one-line display toggle, which is the smallest complete demonstration of the cycle.",
            },
            examQuestions: [
              {
                q: "What is DHTML? Explain how HTML, CSS and JavaScript combine through the event model, demonstrate with a rollover and a show/hide panel, and add the accessibility and XSS cautions.",
                marks: 14,
                outline: [
                  "DHTML: the event-driven cycle over HTML + CSS + JS via the DOM",
                  "Events: click, mouseover/out, change, keyup, submit, load",
                  "Registration: onclick assignment or addEventListener; this = target element",
                  "Rollover: this.src swaps image on mouseover, reverts on mouseout",
                  "Show/hide: style.display none/block toggle - accordions and menus",
                  "No reloads: the renderer repaints mutated DOM state",
                  "Cautions: keyboard accessibility; untrusted input into DOM writes = XSS",
                ],
              },
              {
                q: "How does a CSS :hover rule replace a JavaScript rollover?",
                marks: 7,
                outline: [

                  "The pseudo-class restyles on pointer-over without any script",

                  "Pure presentation - no handler, no event registration",

                  "JavaScript remains for stateful changes CSS cannot express",

                  "Pure CSS survives with JavaScript disabled",

                  "Transitions add animation declaratively",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "XML and PHP",
      summary:
        "Unit IV pairs the data format with the server language: XML's uses, components, DTDs and schemas with XSL/XSLT transformation; and PHP from basic syntax, decisions and loops, arrays, functions, strings and browser detection, through form processing and files, to cookies, sessions and object-oriented programming.",
      chapter: {
        number: "04",
        title: "Data Exchange and Server Scripting",
        intro:
          "Unit IV covers introduction to XML, its uses, simple XML, key components, DTD and schemas, using XML with applications, transforming XML using XSL and XSLT; introduction and basic syntax of PHP, decision and looping with examples, PHP and HTML, arrays, functions, browser control and detection, strings, form processing, files, and the advanced features of cookies, sessions and object-oriented programming with PHP.",
        inOneBreath:
          "XML is a self-describing data format - well-formed by grammar, valid when it matches its DTD or schema, transformable into any output via XSLT. PHP is the server language that receives form data, makes decisions, loops over arrays, manipulates strings, handles file uploads, and remembers users across requests with cookies and sessions - with classes and objects cleaning up anything large.",
        sections: [
          {
            number: "4.1",
            title: "XML - introduction, uses and key components",
            body: [
              "XML (eXtensible Markup Language) is a markup language for describing data: unlike HTML, whose tags are fixed and describe appearance, XML lets authors invent tags that describe meaning (<student><name>Riya</name></student>), and it carries no presentation at all. The rules make it machine-checkable: a document begins with an optional declaration <?xml version=\"1.0\"?>, contains exactly one root element, and every element must be properly nested and closed; tag names are case-sensitive; attributes must be quoted; empty elements self-close (<br />). A document meeting these rules is well-formed - the XML baseline.",
              "The key components give it vocabulary: elements (the nodes of the data), attributes (name-value pairs inside the start tag, for metadata rather than data), text content, entities (the HTML escape set plus custom-defined ones), comments, and CDATA sections (<![CDATA[ ... ]]>) holding literal text the parser must not interpret. Namespaces qualify tags to avoid collisions (xmlns:xsl=\"...\") - essential once documents mix vocabularies, as XSLT stylesheets themselves do.",
              "A worked data model fixes the concepts. An exam-results exchange between a college and a university: <results><student roll=\"21CS001\"><name>Riya</name><marks subject=\"Web Tech\">85</marks></student></results> - elements carry data (name, marks), attributes carry metadata (roll, subject), one root (results), proper nesting throughout. Any consumer - another college, a mobile app, a report generator - can parse the same file without agreement beyond the vocabulary, which is the entire point: XML is the platform-neutral data contract.",
              "Exam framing: expect 'what is XML and how does it differ from HTML' or 'explain XML components'. Define it as a data-describing markup, produce the well-formedness rules, run the results-exchange example labelling elements vs attributes, and list the uses - configuration files, data interchange (SOAP, RSS), document formats (Office), web services. Well-formedness is the grammar check; validity adds the vocabulary - keep the two gates distinct.",
            ],
            keyTerms: [
              { term: "XML", definition: "eXtensible Markup Language - self-describing, machine-checkable data markup." },
              { term: "Well-formed", definition: "One root, proper nesting, closed elements, quoted attributes - the parseability baseline." },
              { term: "Element vs attribute", definition: "Elements carry data; attributes carry metadata about the data." },
              { term: "CDATA", definition: "A section the parser treats as literal text, not markup." },
            ],
            table: {
              caption: "XML's signature uses.",
              headers: ["Use", "Example", "Why XML fits"],
              rows: [
                ["Data interchange", "SOAP web services, RSS feeds", "Platform-neutral contract"],
                ["Configuration", "Java web.xml, .NET configs", "Human-readable, tool-parseable"],
                ["Document formats", "Office (OOXML), SVG", "Structured content + metadata"],
                ["Data persistence", "Export/import between systems", "Self-describing, schema-checkable"],
              ],
            },
            bullets: [
              "XML describes data with author-invented tags; HTML describes appearance with fixed tags.",
              "Well-formed rules: declaration, one root, proper nesting, closed elements, quoted attributes.",
              "Components: elements, attributes, text, entities, comments, CDATA, namespaces.",
              "Elements carry data; attributes carry metadata (roll, subject in the results example).",
              "CDATA hides literal text from the parser; namespaces prevent tag collisions.",
              "Uses: interchange (SOAP/RSS), configuration (web.xml), document formats (OOXML, SVG).",
            ],
            diagram: {
              kind: "compare",
              title: "XML vs HTML",
              caption: "Same syntax family, opposite jobs.",
              left: {
                heading: "HTML",
                items: [
                  "Fixed, predefined tags (p, table, div)",
                  "Describes presentation and structure",
                  "Browsers forgive minor errors",
                  "Purpose: what the user sees",
                ],
              },
              right: {
                heading: "XML",
                items: [
                  "Author-invented, meaning-carrying tags",
                  "Describes data, no presentation",
                  "Parsers reject anything not well-formed",
                  "Purpose: what machines exchange",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Data in elements, metadata in attributes",
              body: "The design rule examiners probe: put the thing itself (marks value) in element content and the facts about it (roll number, subject) in attributes. Justifying the split in the results example shows modelling judgement, not just syntax recall.",
            },
            examQuestions: [
              {
                q: "Explain XML - its purpose, well-formedness rules, key components and uses - and contrast it with HTML using a worked exam-results data model that separates elements from attributes.",
                marks: 14,
                outline: [
                  "XML: self-describing data markup; presentation-free",
                  "Well-formed: one root, proper nesting, closed elements, quoted attributes",
                  "Components: elements, attributes, text, entities, CDATA, namespaces",
                  "Results model: <student roll=\"21CS001\"> - attribute = metadata, content = data",
                  "Contrast: fixed HTML tags vs invented XML tags; forgiving vs strict parsing",
                  "Uses: SOAP/RSS interchange, configuration files, OOXML/SVG formats",
                  "Value: platform-neutral contract any consumer can parse",
                ],
              },
              {
                q: "Why must every XML document have exactly one root element?",
                marks: 7,
                outline: [

                  "The root makes the document a single parseable tree",

                  "Multiple roots would force consumers to choose arbitrary interpretations",

                  "One root = one unambiguous data model",

                  "Parsers reject multi-root documents outright",

                  "Consumers agree on one entry point for navigation",

                ],              },
            ],
          },
          {
            number: "4.2",
            title: "DTD and schemas - making XML valid",
            body: [
              "Well-formed is the grammar check; valid is the vocabulary check, and two technologies supply it. The DTD (Document Type Definition) is the older, compact form: <!ELEMENT results (student+)>, <!ELEMENT student (name, marks+)>, <!ATTLIST student roll CDATA #REQUIRED> - declaring which elements may appear, in what order and multiplicity, and which attributes are required or fixed. A document is valid when it matches its DTD, referenced internally (inline in the DOCTYPE) or externally (a .dtd file shared by all trading partners).",
              "XML Schema (XSD) is the modern replacement, and the syllabus's comparison point: schemas are themselves XML, support rich data types (string, integer, date, custom patterns), handle namespaces natively, and express min/max occurs and element inheritance. A worked pair shows the difference: a DTD can say 'marks contains text'; a schema can say 'marks contains an integer between 0 and 100' - validity becomes semantic, not just structural. The trade-offs: DTDs are compact and legacy-universal; schemas are typed, namespace-aware and tool-supported.",
              "Using XML with applications is the payoff: an application defines or imports the schema, parses the incoming document against it (a validating parser rejects bad data before it reaches business logic), then navigates the tree (DOM - memory-heavy, random access) or streams it (SAX - event-driven, memory-light). A worked validation flow: the university receives results.xml, validates against results.xsd (rejecting a marks value of 'abc' that a DTD would have accepted as text), then loads it into the marks database. Validation-first is the design lesson - the schema is the contract the parser enforces at the door.",
              "Exam framing: expect 'explain DTD and XML Schema' or 'well-formed vs valid'. Define both checks, write a small DTD and its schema counterpart for the results model, produce the DTD-vs-XSD table, and close with the application pattern - define schema, validate at parse, then navigate (DOM) or stream (SAX). The 'abc marks' example settles DTD versus schema - structure accepts it, the integer type rejects it.",
            ],
            keyTerms: [
              { term: "Valid", definition: "Well-formed AND matching its DTD or schema - the vocabulary check." },
              { term: "DTD", definition: "Document Type Definition - compact element/attribute grammar for XML validity." },
              { term: "XSD", definition: "XML Schema - typed, namespace-aware validity expressed in XML itself." },
              { term: "SAX vs DOM", definition: "Streaming event parsing vs in-memory tree parsing." },
            ],
            table: {
              caption: "DTD vs XML Schema.",
              headers: ["Feature", "DTD", "XML Schema (XSD)"],
              rows: [
                ["Syntax", "Its own compact grammar", "XML itself"],
                ["Data types", "Essentially none (CDATA, PCDATA)", "Rich: integer, date, patterns, ranges"],
                ["Namespaces", "Not supported", "First-class support"],
                ["Constraints", "Structure and order only", "Occurrence ranges, value ranges, keys"],
                ["Legacy", "Universal in old systems", "The modern standard"],
              ],
            },
            bullets: [
              "Well-formed = grammar (parseable); valid = grammar + vocabulary (matches DTD/schema).",
              "DTD: <!ELEMENT> declares content models, <!ATTLIST> declares attributes.",
              "DTD references live in the DOCTYPE - internal or external .dtd files.",
              "XSD is XML, adds data types, ranges and namespaces - 'integer 0-100' beats 'text'.",
              "Applications: validate at the door, then DOM (random access) or SAX (streaming).",
              "Validation-first: a schema rejects bad data before business logic sees it.",
            ],
            diagram: {
              kind: "fork",
              title: "Parsing outcomes",
              caption: "Two gates stand between an XML file and application logic.",
              start: "Incoming XML document",
              branches: [
                { label: "Not well-formed", outcome: "parser rejects outright - broken tags, no root, bad nesting", good: false },
                { label: "Well-formed, invalid", outcome: "grammar passes but vocabulary fails - unknown elements, wrong types", good: false },
                { label: "Well-formed and valid", outcome: "both gates pass - the application may process the data", good: true },
              ],
            },
            callout: {
              type: "exam",
              title: "The 'abc marks' example",
              body: "The sharpest DTD-vs-schema line: a DTD accepts <marks>abc</marks> because it only checks structure; a schema with type xsd:integer rejects it. Quote that one comparison - it proves you understand validity as semantics, which is the section's whole point.",
            },
            examQuestions: [
              {
                q: "Explain DTD and XML Schema: their syntax with a worked results-model example, the DTD vs XSD comparison, and how applications use XML - validation at parse time with DOM and SAX access.",
                marks: 14,
                outline: [
                  "Well-formed vs valid: grammar vs grammar-plus-vocabulary",
                  "DTD: <!ELEMENT results (student+)>, <!ATTLIST student roll CDATA #REQUIRED>",
                  "External vs internal DTD references in the DOCTYPE",
                  "XSD: typed - xsd:integer rejects <marks>abc</marks> a DTD accepts",
                  "Comparison: syntax, types, namespaces, occurrence constraints, legacy",
                  "Application pattern: schema contract -> validating parser -> DOM or SAX",
                  "Validation-first: bad data rejected before business logic",
                ],
              },
              {
                q: "When would a system still choose DTD over XML Schema?",
                marks: 7,
                outline: [

                  "Legacy integrations already speak DTD",

                  "Tiny footprint where typed validation is unnecessary",

                  "Universal tool support in older ecosystems",

                  "Internal-subset DTDs ship with legacy documents",

                  "Structure-only checks need no typed validation",

                ],              },
            ],
          },
          {
            number: "4.3",
            title: "Transforming XML - XSL and XSLT",
            body: [
              "XSL (eXtensible Stylesheet Language) is the styling family for XML, and XSLT is its transformation core: a stylesheet written in XML matches nodes in the source document (via XPath expressions) and emits output - HTML, text or another XML shape. The mechanism is declarative: templates (<xsl:template match=\"...\">) fire when the processor reaches matching nodes, <xsl:value-of select=\"...\"> extracts values, <xsl:for-each> and <xsl:apply-templates> drive iteration, and <xsl:if>/<xsl:choose> branch. The result tree, not the source, is what the consumer receives.",
              "A worked transformation fixes the mechanics. Source: the results XML from 4.1 (students with names and marks). Stylesheet: a template matching '/results' emits an HTML table skeleton, a for-each over student emits rows with value-of on name and marks, and an if (marks > 80) adds a 'Distinction' cell. Output: an HTML page any browser renders. The pipeline reads: XML data -> XSLT processor applies stylesheet -> result tree (HTML) -> browser displays - one dataset, many renderings (an HTML page for humans, a CSV for spreadsheets, a filtered XML for partners) by swapping stylesheets.",
              "The design notes complete the section: XPath is the addressing language inside XSLT (student/marks[@subject='Web Tech'] selects exactly one cell), and the separation it buys is the same separation CSS bought HTML - data lives independently of presentation, so format changes never touch the data layer. The security-aware note for this syllabus: transformations can also sanitize (emit textContent-style output rather than raw markup into HTML), and processing untrusted stylesheets or documents is itself an attack surface.",
              "Exam framing: expect 'explain XSLT with example'. Give the mechanism (templates, value-of, for-each, if), run the results-to-HTML transformation pipeline, note XPath's role, and close with the separation sentence - one dataset, many outputs by swapping stylesheets. Swap the stylesheet, not the data - one results file renders as page, CSV or partner feed. The one-source-many-outputs sentence is the close - swap stylesheets, never the data.",
            ],
            keyTerms: [
              { term: "XSLT", definition: "The transformation language: templates match source nodes and emit a result tree." },
              { term: "XPath", definition: "The addressing language selecting nodes inside XSLT expressions." },
              { term: "Template", definition: "<xsl:template match=\"...\"> - the rule applied when matching nodes are reached." },
              { term: "Result tree", definition: "The output document XSLT builds - HTML, text or reshaped XML." },
            ],
            table: {
              caption: "The XSLT element set worth knowing.",
              headers: ["Element", "Role", "Example"],
              rows: [
                ["xsl:template", "Rule for matching nodes", "match=\"/results\""],
                ["xsl:value-of", "Extract a node's value", "select=\"name\""],
                ["xsl:for-each", "Iterate over a node set", "select=\"student\""],
                ["xsl:if / xsl:choose", "Conditional output", "test=\"marks > 80\""],
                ["xsl:apply-templates", "Delegate to matching templates", "Recursive processing"],
              ],
            },
            bullets: [
              "XSLT transforms XML into HTML, text or reshaped XML - declarative templates, not code.",
              "Templates match nodes; value-of extracts; for-each iterates; if/choose branch.",
              "XPath addresses nodes: student/marks[@subject='Web Tech'].",
              "Pipeline: XML -> processor + stylesheet -> result tree -> consumer.",
              "One dataset, many outputs: swap stylesheets for page, CSV or partner feed.",
              "Separation parallel: XSLT is to XML what CSS is to HTML.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The XSLT pipeline",
              caption: "Data in, presentation out - the stylesheet is the only thing that changes.",
              stages: [
                { label: "Source XML", note: "results data, structure only" },
                { label: "Stylesheet", note: "templates + XPath addressing" },
                { label: "Processor", note: "matches templates, builds result tree" },
                { label: "Output", note: "HTML page, CSV, or reshaped XML" },
              ],
            },
            callout: {
              type: "tip",
              title: "Swap the stylesheet, not the data",
              body: "The sentence that ties XSLT to the course's separation theme: 'the same results.xml renders as a web page for students, a CSV for the office and a filtered feed for partners - by swapping stylesheets only.' One source, many views is XSLT's reason to exist.",
            },
            examQuestions: [
              {
                q: "Explain XSL and XSLT: the template mechanism with value-of, for-each and conditionals, a worked transformation of the results XML into an HTML table, XPath's role, and the one-source-many-outputs design point.",
                marks: 14,
                outline: [
                  "XSL family; XSLT as the transformation core",
                  "Templates match source nodes via XPath expressions",
                  "value-of extracts; for-each iterates students; if adds Distinction cells",
                  "Worked pipeline: results.xml + stylesheet -> HTML table for browsers",
                  "XPath addressing: student/marks[@subject='Web Tech']",
                  "Result tree is what consumers receive - source untouched",
                  "Swap stylesheets for HTML, CSV or filtered XML - data presentation separation",
                ],
              },
              {
                q: "Why is XSLT called declarative rather than procedural?",
                marks: 7,
                outline: [

                  "You declare rules (templates) for node shapes, not execution order",

                  "The processor decides traversal and fires matching templates",

                  "Control flow emerges from the document, not from written loops",

                  "No explicit loops or state - templates fire on matches",

                  "The same stylesheet recomputes for any conforming input",

                ],              },
            ],
          },
          {
            number: "4.4",
            title: "PHP basics - syntax, decisions, loops and PHP with HTML",
            body: [
              "PHP is a server-side scripting language: the server executes the script and sends only its output (usually HTML) to the browser - the client never sees PHP source. Scripts live between <?php ... ?> tags and can be embedded inside HTML: static parts pass through unchanged, PHP parts execute and print (echo/print) into the stream. Variables begin with $ ($name), need no type declaration, and are dynamically typed; statements end with semicolons; comments use //, # and /* */.",
              "Control flow reads like C with a foreach twist. Decisions: if/elseif/else, switch, and the ternary; comparison operators include the identity pair (=== checks value and type - the exam favourite against '5' == 5 being true). Loops: for, while, do-while, and foreach - over arrays by value or by key (foreach ($rows as $k => $v)). A worked fragment assembles the basics: an HTML page whose table rows are generated by a PHP foreach over an array of students, with an if inside marking distinctions - one file, static skeleton plus dynamic rows, which is exactly the PHP-and-HTML pattern the syllabus names.",
              "The request model explains where PHP sits: the browser requests page.php; the server runs the interpreter; the script reads request data ($_GET, $_POST - previewed here, deepened in 4.6), talks to databases (Unit V), and echoes HTML. Output discipline matters from day one: escape anything dynamic (htmlspecialchars) and validate anything received, because PHP's willingness to interpolate anything into strings is precisely the injection door the security syllabus warns about.",
              "Exam framing: expect 'explain PHP syntax with example' or 'how PHP works with HTML'. Give the embedding model and request flow, the variable and operator notes (=== identity), the control structures with the dynamic-table fragment, and close with the output-escaping discipline. View-source never shows PHP - and everything the script reads arrived from the client unvalidated. The request-flow picture is the answer's spine - request, interpreter, echo, response in four arrows.",
            ],
            keyTerms: [
              { term: "Server-side", definition: "PHP executes on the server; the client receives only the generated output." },
              { term: "=== identity", definition: "Equality of value AND type - PHP's guard against '5' == 5 surprises." },
              { term: "echo", definition: "PHP's output statement - injects text into the response stream." },
              { term: "Interpolation", definition: "\"... $var ...\" embeds variable values inside double-quoted strings." },
            ],
            bullets: [
              "PHP runs on the server; the browser receives only echoed output.",
              "<?php ... ?> embeds logic inside HTML; static parts pass through.",
              "Variables: $name, dynamically typed; strings interpolate in double quotes.",
              "Identity operator === compares value and type - the == trap.",
              "Loops: for, while, do-while, and foreach over arrays by key and value.",
              "Escape dynamic output (htmlspecialchars) and validate input from day one.",
            ],
            diagram: {
              kind: "flow",
              title: "A PHP request, end to end",
              caption: "The server executes; the browser only ever sees HTML.",
              steps: [
                { label: "Request", note: "browser asks for page.php" },
                { label: "Interpreter", note: "server runs the script; client sees no source" },
                { label: "Data access", note: "reads $_GET/$_POST, queries MySQL" },
                { label: "Echo HTML", note: "static skeleton + generated rows" },
                { label: "Response", note: "pure HTML travels back and renders" },
              ],
            },
            callout: {
              type: "warning",
              title: "View-source never shows PHP",
              body: "A favourite exam probe: 'what does the client see if it views source on a PHP page?' Answer: only the generated HTML - PHP source never leaves the server. The flip side is the security one: all input the script reads arrived from the client and must be validated.",
            },
            examQuestions: [
              {
                q: "Explain PHP's basic syntax and how it works with HTML: embedding, variables and dynamic typing, the === identity operator, decisions and loops with a worked dynamic-table fragment.",
                marks: 14,
                outline: [
                  "Server-side model: interpreter executes, client receives only HTML",
                  "Embedding: <?php ... ?> inside static markup",
                  "Variables: $name, no type declarations, double-quote interpolation",
                  "Identity === vs equality == - '5' == 5 true, '5' === 5 false",
                  "Decisions: if/elseif/else, switch, ternary",
                  "Loops: for, while, do-while, foreach with key => value",
                  "Fragment: foreach builds table rows; if marks distinction cells",
                ],
              },
              {
                q: "Why must PHP output be escaped even though the client never sees PHP source?",
                marks: 7,
                outline: [

                  "Output lands inside HTML - unescaped data becomes markup",

                  "User-supplied strings can carry scripts (XSS)",

                  "htmlspecialchars neutralizes markup before echoing",

                  "Context matters - attribute, JS and URL contexts need their own escapes",

                  "Escaping at output centralizes the defence",

                ],              },
            ],
            codeExample: {
              language: "php",
              caption: "PHP inside HTML - a dynamic results table",
              code: `<?php $students = [
  ["name" => "Riya", "marks" => 85],
  ["name" => "Arjun", "marks" => 62],
]; ?>
<table border="1">
  <tr><th>Name</th><th>Marks</th><th>Result</th></tr>
  <?php foreach ($students as $s): ?>
  <tr>
    <td><?= htmlspecialchars($s["name"]) ?></td>
    <td><?= $s["marks"] ?></td>
    <td><?= $s["marks"] > 80 ? "Distinction" : "Pass" ?></td>
  </tr>
  <?php endforeach; ?>
</table>`,
            },
          },
          {
            number: "4.5",
            title: "Arrays, functions, strings and browser detection",
            body: [
              "PHP's arrays are one construct with two faces: indexed arrays ($marks = [85, 62, 91]) accessed by position, and associative arrays ($student = ['name' => 'Riya', 'marks' => 85]) accessed by key - the workhorse data structure, because form data and database rows arrive as associative arrays ($_POST['user'], $row['name']). Multidimensional arrays nest either kind. Iteration is foreach; the function library does the rest: count, sort, in_array, array_keys, implode/explode (join/split strings on delimiters).",
              "Functions declare as function name($a, $b = default) { ... return ...; } - default parameters, variable scope (function-local unless global), and returns optional. Strings carry their own library: strlen, strtoupper, substr, strpos (substring search), str_replace, trim, and the formatting pair sprintf/number_format; concatenation is the dot operator - the exam's fastest identification test ('.' joins strings in PHP, '+' would attempt arithmetic). Browser control and detection reads the request environment: $_SERVER['HTTP_USER_AGENT'] names the browser, $_SERVER['REMOTE_ADDR'] the client IP, get-browser-style parsing then branches content or layout accordingly - the syllabus's named application of $_SERVER.",
              "A worked fragment ties the four topics: an array of student associative rows; a function average($rows) that loops with foreach, sums a key, and returns round($sum/count($rows),1); a string built with dot concatenation and number_format; and a browser branch on $_SERVER['HTTP_USER_AGENT'] that trims the page for mobile agents. Four syllabus items in one script - the standard exam illustration. The same array shape reads forms, sessions and rows - one structure, four syllabus items.",
              "Exam framing: expect 'explain arrays in PHP' or 'write a user-defined function'. Give the two array faces with foreach, the function declaration with defaults, the string library with the dot operator, and the $_SERVER detection pair - closing with the note that $_POST/$_GET and DB rows are themselves associative arrays, which is why the structure matters. Associative arrays are the shape of $_POST and every database row - master one structure, read four syllabus items.",
            ],
            keyTerms: [
              { term: "Associative array", definition: "Key => value pairs - the shape of $_POST, $_GET and database rows." },
              { term: "explode / implode", definition: "Split a string into an array, and join an array into a string, on a delimiter." },
              { term: "Dot operator", definition: "PHP's string concatenation: 'a' . 'b' - not '+', which arithmetic-converts." },
              { term: "$_SERVER", definition: "Request environment: HTTP_USER_AGENT (browser), REMOTE_ADDR (IP), REQUEST_METHOD." },
            ],
            table: {
              caption: "The everyday array and string functions.",
              headers: ["Task", "Array functions", "String functions"],
              rows: [
                ["Size / length", "count($arr)", "strlen($s)"],
                ["Search", "in_array, array_search", "strpos (position or false)"],
                ["Reorder / parts", "sort, array_keys, array_values", "substr, trim"],
                ["Join / split", "implode / explode", "str_replace, sprintf"],
              ],
            },
            bullets: [
              "Indexed arrays use positions; associative arrays use keys - one construct, two faces.",
              "foreach ($arr as $k => $v) iterates either face; count/sort/in_array do the rest.",
              "explode/implode convert between strings and arrays on a delimiter.",
              "Functions: name, parameters with defaults, local scope, optional return.",
              "Strings concatenate with '.'; '+' attempts arithmetic - the identification trap.",
              "Browser detection: $_SERVER['HTTP_USER_AGENT'] and REMOTE_ADDR branch content per client.",
            ],
            diagram: {
              kind: "compare",
              title: "Indexed vs associative arrays",
              caption: "One construct, two indexing philosophies - and the second one is everywhere in PHP.",
              left: {
                heading: "Indexed array",
                items: [
                  "Position keys: 0, 1, 2 ...",
                  "$marks = [85, 62, 91]",
                  "foreach by value; loops by index",
                  "Use: ordered lists of similar items",
                ],
              },
              right: {
                heading: "Associative array",
                items: [
                  "Named keys: name, marks",
                  "$student = ['name' => 'Riya']",
                  "foreach by key => value",
                  "Use: records - $_POST, DB rows",
                ],
              },
            },
            callout: {
              type: "tip",
              title: "Rows arrive as associative arrays",
              body: "The reason associative arrays dominate PHP answers: form data ($_POST['user']) and every database row ($row['name']) arrive in exactly this shape. Master one structure and four syllabus items - forms, sessions, databases, files - all read the same way.",
            },
            examQuestions: [
              {
                q: "Explain PHP arrays (indexed, associative, multidimensional) with foreach, user-defined functions with default parameters, the string library with the dot operator, and browser detection via $_SERVER - with one worked fragment.",
                marks: 14,
                outline: [
                  "Indexed by position; associative by key; both nest multidimensionally",
                  "foreach ($rows as $k => $v) iterates both faces",
                  "Library: count, sort, in_array, explode/implode",
                  "function average($rows) { foreach, sum, return round(...); }",
                  "Strings: strlen, substr, strpos, str_replace; '.' concatenates",
                  "Detection: $_SERVER['HTTP_USER_AGENT'], $_SERVER['REMOTE_ADDR']",
                  "Worked fragment: rows -> average() -> formatted string -> mobile branch",
                ],
              },
              {
                q: "What does 'a' + 'b' do in PHP and why is it wrong for concatenation?",
                marks: 7,
                outline: [

                  "PHP attempts numeric conversion - both become 0, result 0",

                  "Concatenation uses the dot operator: 'a' . 'b'",

                  "The + trap is the classic PHP identification question",

                  "PHP attempts arithmetic, yielding 0 with a notice",

                  "Use the dot - or implode for lists",

                ],              },
            ],
          },
          {
            number: "4.6",
            title: "Form processing and files in PHP",
            body: [
              "Form processing is PHP's front door. Data arrives in superglobal arrays keyed by control name: $_GET for query-string data (searches, bookmarks), $_POST for body data (credentials, uploads' metadata) - read as $_POST['user'] with isset($_POST['user']) guarding optional fields, and $_REQUEST as the mixed convenience (better avoided: it blurs method semantics). The processing pattern: read -> validate (empty, length, pattern, type) -> sanitize (trim, strip_tags, htmlspecialchars on output) -> act (store, mail, respond) -> respond (result page or re-render with errors).",
              "Files ride the same machinery with one multipart twist. The form declares enctype=\"multipart/form-data\"; PHP receives the upload in $_FILES['photo'] with five keys: name (client-side name), type (client-claimed MIME), size, tmp_name (server-side temporary path), error (upload code). A worked upload script: check error === UPLOAD_ERR_OK, check size against a limit, check the real type (extension is client-supplied and untrustworthy - verify with finfo or an allow-list), then move_uploaded_file($tmp, 'uploads/'.safe_name). Every step in that list exists because each skipped one is a known vulnerability: oversized uploads, disguised executables, path traversal in names.",
              "A worked registration script assembles both: isset checks on user/mail, validation of the email format, a file field for the photo handled by the upload recipe above, htmlspecialchars on every echo back. The exam-grade security notes: never trust the client filename or MIME claim; whitelist rather than blacklist extensions; store uploads outside the web root where possible; and re-validate server-side everything the client validated in Unit III - the two-validation doctrine from the DOM section, now on the server side of the wire.",
              "Exam framing: expect 'explain form handling in PHP' or 'describe file uploads'. Give the $_GET/$_POST split with isset, the five-key $_FILES structure, run the upload recipe with its trust notes, and close with the processing pattern and the never-trust-the-client list. Recite the five upload gates in order - error, size, real type, safe name, move_uploaded_file. The disguised-executable upload is the vulnerability to name - verification plus storage location closes it.",
            ],
            keyTerms: [
              { term: "$_GET / $_POST", definition: "Superglobal arrays of query-string and body data, keyed by control name." },
              { term: "$_FILES", definition: "Upload metadata: name, type, size, tmp_name, error." },
              { term: "move_uploaded_file", definition: "The only sanctioned way to relocate an uploaded file - validates it came from an upload." },
              { term: "multipart/form-data", definition: "The form encoding required for file uploads." },
            ],
            table: {
              caption: "The $_FILES keys and their trust levels.",
              headers: ["Key", "Meaning", "Trust it?"],
              rows: [
                ["name", "Client-side original filename", "No - sanitize/replace"],
                ["type", "Client-claimed MIME type", "No - verify server-side (finfo)"],
                ["size", "Uploaded byte count", "Verify against a limit"],
                ["tmp_name", "Server temporary path", "Yes - PHP-managed"],
                ["error", "Upload error code", "Check UPLOAD_ERR_OK first"],
              ],
            },
            bullets: [
              "$_GET reads query strings (searches); $_POST reads bodies (credentials, uploads).",
              "isset() guards optional fields; processing pattern: read -> validate -> sanitize -> act -> respond.",
              "Upload forms need enctype=\"multipart/form-data\" or files never arrive.",
              "$_FILES gives name, type, size, tmp_name, error - only tmp_name and error are server-truth.",
              "Recipe: check error, limit size, verify real type, move with move_uploaded_file.",
              "Never trust client filename or MIME claim; whitelist extensions; store outside web root.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The upload pipeline",
              caption: "Five gates between the user's file and your disk - skip one and a classic vulnerability opens.",
              stages: [
                { label: "Arrive", note: "multipart POST lands in $_FILES" },
                { label: "Error gate", note: "UPLOAD_ERR_OK only" },
                { label: "Size gate", note: "reject over-limit uploads" },
                { label: "Type gate", note: "verify real type, not client claim" },
                { label: "Move", note: "move_uploaded_file to a safe name" },
              ],
            },
            callout: {
              type: "warning",
              title: "The disguised-executable upload",
              body: "shell.php renamed to photo.jpg bypasses a naive extension check only if the server executes by extension - but a PHP-enabled directory serving uploads executes it anyway. The defence pair: verify real content type, and store uploads outside executable paths. This is the syllabus's clearest web-security moment; name it explicitly.",
            },
            examQuestions: [
              {
                q: "Explain form processing in PHP - $_GET vs $_POST with isset, the processing pattern - and file uploads: the $_FILES structure, the five-gate upload recipe, and the trust notes on client-supplied data.",
                marks: 14,
                outline: [
                  "$_GET: query strings, bookmarkable; $_POST: body data, credentials",
                  "isset() guards optional fields; $_REQUEST blurs methods - avoid",
                  "Pattern: read -> validate -> sanitize -> act -> respond",
                  "Uploads need enctype=\"multipart/form-data\"",
                  "$_FILES: name, type, size, tmp_name, error - server truth is tmp_name/error",
                  "Recipe: error gate, size limit, real-type verification, move_uploaded_file",
                  "Trust notes: client filename/MIME unverified; whitelist; store outside web root",
                ],
              },
              {
                q: "Why is checking $_FILES['f']['type'] alone insufficient for upload security?",
                marks: 7,
                outline: [

                  "The MIME claim is client-supplied and trivially forged",

                  "Verify server-side with finfo or an allow-list",

                  "Pair with storage outside executable paths",

                  "Extensions and MIME claims are equally client-controlled",

                  "Content inspection is the only server-side truth",

                ],              },
            ],
          },
          {
            number: "4.7",
            title: "Cookies, sessions and object-oriented PHP",
            body: [
              "HTTP is stateless, and PHP restores state two ways. Cookies live on the client: setcookie('user', 'riya', time()+3600) sends a Set-Cookie header; the browser returns it on every later request in $_COOKIE. Cookies are visible to the user, editable, and size-limited - suitable for preferences and identifiers, never for secrets or prices (a client-side price cookie is a discount button). Sessions live on the server: session_start() begins or resumes a session, issues a session-id cookie, and $_SESSION['user'] stores whatever the server needs; the client holds only the opaque id.",
              "A worked login flow shows both cooperating: the login script validates credentials, then session_start() and $_SESSION['user'] = $row['name']; every protected page begins with session_start() and an isset($_SESSION['user']) guard redirecting strangers to the login page; logout runs session_unset() and session_destroy(). The session life cycle is the diagram: start -> populate -> guard each request -> destroy - and the security notes ride along: regenerate the id after login (session fixation), set httponly flags, and never store passwords in session data.",
              "Object-oriented PHP cleans up anything larger than a script: class Student { public $name; public function greet() { return $this->name; } } with objects created by new, members accessed by ->, visibility keywords (public/protected/private), inheritance via extends, and constructors via __construct. A worked snippet: a Student class with a constructor and an average() method, instantiated for two rows - the same domain model Unit III wrote in JavaScript constructors, now server-side with real access control. The exam's pairing: procedural PHP for scripts, OOP for anything with a second developer or a second week.",
              "Exam framing: expect 'differentiate cookies and sessions' or 'explain OOP in PHP'. Give the storage-location contrast with the security consequences, run the login-session flow with guards, produce the session life cycle, and close with the class syntax and visibility model. Never trust a client-side price - cookies carry identifiers; sessions carry state. The login-guard flow is the worked cycle - validate, start, populate, guard, destroy.",
            ],
            keyTerms: [
              { term: "setcookie", definition: "Sends a Set-Cookie header - client-side state, visible and editable by the user." },
              { term: "session_start", definition: "Begins/resumes a session; issues the session-id cookie; opens $_SESSION." },
              { term: "Session fixation", definition: "An attacker-imposed session id - countered by regenerating the id at login." },
              { term: "$this", definition: "Inside a class method, the current object instance." },
            ],
            table: {
              caption: "Cookie vs session - the guaranteed table.",
              headers: ["Feature", "Cookie", "Session"],
              rows: [
                ["Storage location", "Client browser", "Server (client holds only the id)"],
                ["Visibility", "Readable and editable by user", "Opaque id only"],
                ["Size", "About 4 KB per cookie", "Server memory/disk limits"],
                ["Lifetime", "Expiry set at creation (or browser close)", "Until destroy or timeout"],
                ["Suitable for", "Preferences, tracking ids", "Login state, carts, secrets"],
              ],
            },
            bullets: [
              "Cookies: setcookie + $_COOKIE - client-side, visible, never for secrets or prices.",
              "Sessions: session_start + $_SESSION - server-side state behind an opaque id.",
              "Login flow: validate -> session_start -> $_SESSION['user'] -> guard each page.",
              "Logout: session_unset() + session_destroy(); regenerate id after login (fixation).",
              "OOP: class, new, ->, visibility public/protected/private, extends, __construct.",
              "Rule of thumb: procedural for scripts; classes once state and behaviour cluster.",
            ],
            diagram: {
              kind: "cycle",
              title: "The session life cycle",
              caption: "Start, populate, guard, destroy - the loop that keeps stateless HTTP logged in.",
              steps: [
                { label: "Start", note: "session_start(); id cookie issued" },
                { label: "Populate", note: "$_SESSION['user'] set after login" },
                { label: "Guard", note: "every page checks isset($_SESSION['user'])" },
                { label: "Use", note: "state available across requests" },
                { label: "Destroy", note: "logout: unset + destroy + id cleared" },
              ],
            },
            callout: {
              type: "exam",
              title: "Never trust a client-side price",
              body: "The classic cookie-security line: any value stored in a cookie - cart total, discount, role - can be edited by the user before the next request. Server-side session data is the trust boundary; cookies carry identifiers and preferences, and the exam answer names both sides.",
            },
            examQuestions: [
              {
                q: "Differentiate cookies and sessions, explain the PHP session life cycle with a worked login-guard-logout flow, and describe object-oriented PHP with a class example showing visibility and inheritance.",
                marks: 14,
                outline: [
                  "Cookies: client-stored, visible/editable, size-limited - preferences only",
                  "Sessions: server-stored behind an opaque id; secrets and login state",
                  "session_start issues the id and opens $_SESSION",
                  "Login flow: validate -> populate $_SESSION -> guard pages with isset",
                  "Logout: session_unset + session_destroy; regenerate id at login (fixation)",
                  "Class syntax: properties, $this, methods, public/protected/private, extends",
                  "Worked Student class: constructor + average() method, two instances",
                ],
              },
              {
                q: "Why is session fixation countered by regenerating the session id after login?",
                marks: 7,
                outline: [

                  "Fixation: attacker plants a known id before the victim logs in",

                  "Regeneration invalidates the planted id at the moment privilege begins",

                  "session_regenerate_id(true) issues a fresh id server-side",

                  "Regeneration also rotates after privilege changes",

                  "Old-id invalidation closes the replay window",

                ],              },
            ],
          },
        ],
      },
    },
    {
      number: 5,
      roman: "V",
      title: "PHP and MySQL",
      summary:
        "Unit V closes the loop with the database: MySQL's command set, connecting PHP to the server and creating and selecting databases, creating tables and inserting data, altering tables and running queries, deleting data, tables and databases, phpMyAdmin as the administrative workbench, and the database bugs every beginner meets - with their fixes.",
      chapter: {
        number: "05",
        title: "PHP with MySQL",
        intro:
          "Unit V covers basic MySQL commands with PHP examples, connection to the server, creating a database, selecting a database, listing databases, listing table names, creating a table, inserting data, altering tables, queries, deleting a database, deleting data and tables, and phpMyAdmin with database bugs.",
        inOneBreath:
          "The command set splits into DDL (CREATE, ALTER, DROP - structure), DML (INSERT, UPDATE, DELETE - data) and DQL (SELECT - retrieval). PHP connects with mysqli, picks a database, sends queries and fetches rows; phpMyAdmin does the same work through a web UI; and the classic bugs - connection failures, quoting errors, wrong database, undefined indexes - each have a named fix.",
        sections: [
          {
            number: "5.1",
            title: "MySQL basics - the command set",
            body: [
              "MySQL is the relational database PHP most commonly serves: data lives in tables of rows and columns, each column has a type (INT, VARCHAR(n), DATE, TEXT, DECIMAL), one server hosts many databases, and each database hosts many tables. The command set divides by what it touches: DDL (Data Definition Language) shapes structure - CREATE DATABASE/TABLE, ALTER, DROP; DML (Data Manipulation Language) changes data - INSERT, UPDATE, DELETE; DQL (Data Query Language) retrieves - SELECT with WHERE, ORDER BY, LIMIT; and the administrative pair (SHOW DATABASES, SHOW TABLES, USE) navigates the server.",
              "A worked session walks the syllabus's own list in one motion: SHOW DATABASES (list what exists), CREATE DATABASE college (create), USE college (select), CREATE TABLE students (roll INT PRIMARY KEY, name VARCHAR(50), marks INT), INSERT INTO students VALUES (1, 'Riya', 85) (insert), SELECT name, marks FROM students WHERE marks > 80 ORDER BY marks DESC (query), ALTER TABLE students ADD email VARCHAR(100) (alter), DELETE FROM students WHERE roll = 1 (delete), DROP DATABASE college (delete everything). Eight commands, the entire command card - memorize this sequence and 'basic commands with PHP examples' is already half-answered.",
              "The typing notes matter for the exam's table-creation questions: choose types deliberately - INT for ids and marks, VARCHAR(n) for bounded names, DATE for dates, DECIMAL(10,2) for money (never FLOAT - rounding), PRIMARY KEY for identity, AUTO_INCREMENT for surrogate ids. And the security note belongs here at the top: strings must be quoted and escaped (or better, queries parameterized - Unit 5.4's prepared statements) because interpolated SQL is the injection door this syllabus keeps flagging.",
              "Exam framing: expect 'explain MySQL commands' or 'write SQL to create a database and table'. Give the DDL/DML/DQL division, run the eight-command session, produce the type-choice table, and close with the quoting/parameterization security note. The eight-command session is the syllabus's own list in execution order - narrate it once. The type-choice table is the design half - INT, VARCHAR, DECIMAL, DATE with one reason each.",
            ],
            keyTerms: [
              { term: "DDL", definition: "Data Definition Language - CREATE, ALTER, DROP: shapes structure." },
              { term: "DML", definition: "Data Manipulation Language - INSERT, UPDATE, DELETE: changes rows." },
              { term: "DQL", definition: "SELECT with WHERE/ORDER BY/LIMIT - the retrieval language." },
              { term: "PRIMARY KEY", definition: "The column that uniquely identifies each row." },
            ],
            table: {
              caption: "Choosing column types.",
              headers: ["Data", "Type", "Why"],
              rows: [
                ["Ids, counts, marks", "INT", "Whole numbers, fast compares"],
                ["Names, titles", "VARCHAR(n)", "Bounded, no padding waste"],
                ["Money", "DECIMAL(10,2)", "Exact decimals - FLOAT rounds"],
                ["Dates", "DATE / DATETIME", "Range queries and formats built in"],
                ["Long text", "TEXT", "Beyond VARCHAR limits"],
              ],
            },
            bullets: [
              "Server -> databases -> tables -> rows/columns: the MySQL hierarchy.",
              "DDL shapes structure: CREATE, ALTER, DROP (database and table).",
              "DML changes data: INSERT, UPDATE, DELETE.",
              "DQL retrieves: SELECT ... WHERE ... ORDER BY ... LIMIT.",
              "SHOW DATABASES / SHOW TABLES / USE navigate the server.",
              "Type deliberately: INT, VARCHAR, DECIMAL for money, DATE, PRIMARY KEY.",
            ],
            diagram: {
              kind: "pyramid",
              title: "The SQL command hierarchy",
              caption: "From structure at the base to retrieval at the top - four families, one language.",
              tiers: [
                { label: "DQL - SELECT", note: "retrieve and filter rows" },
                { label: "DML - INSERT/UPDATE/DELETE", note: "change row data" },
                { label: "DDL - CREATE/ALTER/DROP", note: "shape databases and tables" },
                { label: "Admin - SHOW/USE", note: "navigate the server" },
              ],
            },
            callout: {
              type: "exam",
              title: "The eight-command session",
              body: "SHOW -> CREATE -> USE -> CREATE TABLE -> INSERT -> SELECT -> ALTER -> DELETE/DROP is the syllabus's own list in execution order. Writing it as one narrated session answers 'basic commands with PHP examples' faster than any definition-first essay - and every later section of this unit is one of its steps.",
            },
            examQuestions: [
              {
                q: "Explain MySQL's command families (DDL, DML, DQL, administrative) with a worked session that lists databases, creates one, creates a table, inserts, queries, alters and deletes - and state the type-choice rules for a marks table.",
                marks: 14,
                outline: [
                  "Hierarchy: server -> databases -> tables -> rows",
                  "DDL: CREATE DATABASE/TABLE, ALTER, DROP",
                  "DML: INSERT, UPDATE, DELETE",
                  "DQL: SELECT with WHERE, ORDER BY, LIMIT",
                  "Admin: SHOW DATABASES, SHOW TABLES, USE",
                  "Worked session: college database, students table, marks query, email column added",
                  "Types: INT ids, VARCHAR names, DECIMAL money, DATE, PRIMARY KEY identity",
                ],
              },
              {
                q: "Why use DECIMAL rather than FLOAT for money columns?",
                marks: 7,
                outline: [

                  "FLOAT is binary approximate - cents drift on arithmetic",

                  "DECIMAL stores exact decimals at fixed precision",

                  "Accounting totals must reconcile exactly",

                  "Rounding errors accumulate across millions of rows",

                  "DECIMAL(10,2) fixes scale at declaration",

                ],              },
            ],
          },
          {
            number: "5.2",
            title: "Connecting PHP to MySQL",
            body: [
              "The connection is the session's first command card, and mysqli is the syllabus's extension: $conn = mysqli_connect('localhost', 'root', 'password') opens the server connection; mysqli_connect_error() reports failures; mysqli_select_db($conn, 'college') (or mysqli_connect's fourth argument) selects the database; CREATE DATABASE college runs as $conn->query('CREATE DATABASE college') when it does not yet exist; and SHOW DATABASES via query-plus-fetch lists what exists. The PHP example block the syllabus names is exactly this sequence: connect, create, select, list.",
              "A worked connection script fixes the pattern and its error handling: connect with the four arguments, die() with mysqli_connect_error() on failure ('Access denied' means credentials, 'Unknown database' means selection, 'Connection refused' means server down - three distinct diagnoses a student must be able to name), then run SHOW DATABASES and fetch rows with mysqli_fetch_assoc in a while loop, echoing each database name. The same fetch loop returns in every later section - learn it once and queries, listings and joins all read identically.",
              "The architecture notes complete the picture: PHP talks to MySQL over a socket/TCP connection using the MySQL protocol; credentials belong in a configuration file outside the web root; connections should close (mysqli_close) when a script finishes; and the modern layer choice is PDO or mysqli with prepared statements - the syllabus's mysqli being the teaching vehicle, prepared statements being the practice. The security sentence carries forward: the connection's credentials are themselves secrets that must not sit in view-source-reachable files.",
              "Exam framing: expect 'write PHP code to connect to MySQL and create/select a database'. Produce the four-argument connect, the error diagnoses, the create-and-select sequence with SHOW DATABASES listing, and close with the config-and-close notes. Read the error like a doctor - Access denied, Unknown database and Connection refused name three different layers. The connection sequence is the code answer - connect, check, create, select, list, close.",
            ],
            keyTerms: [
              { term: "mysqli_connect", definition: "Opens the server connection: host, user, password, database." },
              { term: "mysqli_select_db", definition: "Chooses the working database for subsequent queries." },
              { term: "mysqli_fetch_assoc", definition: "Fetches one result row as an associative array - the standard read loop." },
              { term: "Access denied vs Unknown database", definition: "The two classic connection failures - credentials vs selection." },
            ],
            bullets: [
              "mysqli_connect(host, user, password, database) opens and selects in one call.",
              "Check mysqli_connect_error() immediately - die() with the message in dev.",
              "Three diagnoses: Access denied (credentials), Unknown database (selection), Connection refused (server).",
              "CREATE DATABASE and SHOW DATABASES run as queries; fetch listings with mysqli_fetch_assoc.",
              "Credentials live in a config file outside the web root; close with mysqli_close().",
              "Practice layer: prepared statements (or PDO) over interpolated queries.",
            ],
            diagram: {
              kind: "flow",
              title: "The connection sequence",
              caption: "Five steps from script to usable database handle.",
              steps: [
                { label: "Connect", note: "mysqli_connect with host/user/password" },
                { label: "Check", note: "mysqli_connect_error or proceed" },
                { label: "Create if needed", note: "CREATE DATABASE via query()" },
                { label: "Select", note: "mysqli_select_db / fourth argument" },
                { label: "List", note: "SHOW DATABASES fetched row by row" },
              ],
            },
            callout: {
              type: "tip",
              title: "Read the error message like a doctor",
              body: "Each connection failure names its layer: Access denied is authentication, Unknown database is selection, Connection refused is reachability. Answering 'my PHP page is blank' with that three-way differential is the diagnostic habit examiners reward.",
            },
            examQuestions: [
              {
                q: "Write PHP code to connect to a MySQL server, create a database if absent, select it and list available databases - with error handling and the diagnosis of the three classic connection failures.",
                marks: 14,
                outline: [
                  "mysqli_connect('localhost','user','pass') with mysqli_connect_error check",
                  "CREATE DATABASE college via $conn->query()",
                  "mysqli_select_db($conn, 'college') or the fourth connect argument",
                  "SHOW DATABASES queried and fetched with mysqli_fetch_assoc loop",
                  "Access denied -> credentials/grants; Unknown database -> selection",
                  "Connection refused -> server down or wrong host/port",
                  "Config file outside web root; mysqli_close at the end",
                ],
              },
              {
                q: "Why should database credentials not sit in a file inside the web root?",
                marks: 7,
                outline: [

                  "Misconfiguration can serve the file as plain text",

                  "Source-control leaks and backup copies spread it further",

                  "Credentials belong outside the servable tree, included by the script",

                  "Web-server overrides rarely protect single files reliably",

                  "Environment stores centralize secret handling",

                ],              },
            ],
            codeExample: {
              language: "php",
              caption: "Connect, create, select, list - the syllabus's own sequence",
              code: `<?php
$conn = mysqli_connect("localhost", "root", "secret");
if (!$conn) die("Connect failed: " . mysqli_connect_error());

$conn->query("CREATE DATABASE IF NOT EXISTS college");
mysqli_select_db($conn, "college");

$res = $conn->query("SHOW DATABASES");
while ($row = mysqli_fetch_assoc($res)) {
  echo htmlspecialchars($row["Database"]) . "<br>";
}
mysqli_close($conn);
?>`,
            },
          },
          {
            number: "5.3",
            title: "Creating tables and inserting data",
            body: [
              "Creating a table is a DDL statement with a column contract: CREATE TABLE students (roll INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE, marks INT DEFAULT 0, joined DATE) - each column carrying type, constraints (NOT NULL, UNIQUE, DEFAULT), and the table carrying its key. The listing pair precedes and follows it: SHOW TABLES lists the database's tables, and DESCRIBE students (or SHOW COLUMNS) prints the contract back - the two commands that turn 'what does this table look like?' into a one-line answer.",
              "Inserting data is DML with two forms: the column-named form INSERT INTO students (name, email, marks) VALUES ('Riya', 'riya@x.in', 85) - the preferred form, robust to column reordering - and the terse all-columns form VALUES (...) which breaks silently when the schema grows. Multiple rows insert in one statement (comma-separated value tuples); auto-increment keys are omitted and assigned; and mysqli_affected_rows($conn) reports how many rows the last statement actually changed - the verification half of the syllabus's 'inserting data with PHP examples'.",
              "A worked PHP block assembles the pattern: create the table with the constraint set, insert two rows with column-named form, echo mysqli_affected_rows, then SELECT * and fetch with mysqli_fetch_assoc printing name and marks. One block demonstrates create, insert, verify and read - and its SQL strings are hard-coded only for teaching; anything arriving from the user must travel as a prepared statement's parameter, not as interpolated text (the injection rule one last time).",
              "Exam framing: expect 'write SQL/PHP to create a table and insert rows'. Produce the CREATE TABLE with constraints, both INSERT forms with the preference note, SHOW TABLES/DESCRIBE for listing, the affected-rows verification, and close with the parameterization note for user-supplied values. Constraints are the marks - PRIMARY KEY, NOT NULL, UNIQUE and DEFAULT show design intent. The two-form comparison is the preference argument - column-named inserts survive schema growth.",
            ],
            keyTerms: [
              { term: "NOT NULL / UNIQUE / DEFAULT", definition: "Column constraints enforcing presence, uniqueness and fallback values." },
              { term: "AUTO_INCREMENT", definition: "Server-assigned surrogate key - omitted from INSERT statements." },
              { term: "DESCRIBE", definition: "Prints a table's columns and types back - the schema mirror." },
              { term: "mysqli_affected_rows", definition: "Rows changed by the last INSERT/UPDATE/DELETE - the write verification." },
            ],
            table: {
              caption: "The two INSERT forms.",
              headers: ["Form", "Example", "Verdict"],
              rows: [
                ["Column-named", "INSERT INTO students (name, marks) VALUES ('Riya', 85)", "Preferred - survives schema changes"],
                ["All-columns", "INSERT INTO students VALUES ('Riya', 85)", "Breaks when columns change - avoid"],
                ["Multi-row", "INSERT INTO t (a, b) VALUES (1,2), (3,4)", "One round trip, many rows"],
              ],
            },
            bullets: [
              "CREATE TABLE declares columns with types and constraints: NOT NULL, UNIQUE, DEFAULT.",
              "PRIMARY KEY + AUTO_INCREMENT gives each row a server-assigned identity.",
              "SHOW TABLES and DESCRIBE list tables and mirror the contract back.",
              "Column-named INSERT is the robust form; all-columns form breaks on schema growth.",
              "Multi-row inserts batch tuples in one statement.",
              "Verify writes with mysqli_affected_rows; user-supplied values travel as parameters.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Schema to verified rows",
              caption: "Four stages from contract to confirmed data.",
              stages: [
                { label: "Design", note: "columns, types, constraints, key" },
                { label: "CREATE TABLE", note: "contract declared; DESCRIBE mirrors it" },
                { label: "INSERT", note: "column-named values, auto keys assigned" },
                { label: "Verify", note: "affected_rows + SELECT fetch-back" },
              ],
            },
            callout: {
              type: "exam",
              title: "Constraints are the marks",
              body: "Table-creation questions grade the constraint list: a bare CREATE TABLE with typed columns earns half marks; adding PRIMARY KEY, NOT NULL, UNIQUE and DEFAULT earns the rest. Constraints are where 'create a table' answers show design intent.",
            },
            examQuestions: [
              {
                q: "Write the SQL and PHP to create a students table with constraints, insert rows in both forms, list tables, and verify the insert - explaining why the column-named INSERT form is preferred.",
                marks: 14,
                outline: [
                  "CREATE TABLE students (roll INT AUTO_INCREMENT PRIMARY KEY, ...)",
                  "Constraints: NOT NULL, UNIQUE on email, DEFAULT on marks",
                  "SHOW TABLES and DESCRIBE students mirror the schema",
                  "Column-named INSERT INTO students (name, email, marks) VALUES (...)",
                  "All-columns form breaks on schema growth - avoid",
                  "Multi-row inserts batch tuples in one statement",
                  "mysqli_affected_rows verifies; fetch_assoc reads back",
                ],
              },
              {
                q: "What does AUTO_INCREMENT change about an INSERT statement?",
                marks: 7,
                outline: [

                  "The keyed column is omitted - the server assigns it",

                  "mysqli_insert_id returns the value just assigned",

                  "Useful for linking child rows in the same flow",

                  "Concurrent inserts still receive unique values",

                  "Rollback gaps appear - harmless for identity",

                ],              },
            ],
          },
          {
            number: "5.4",
            title: "Altering tables and running queries",
            body: [
              "ALTER changes a table's contract after data exists: ADD COLUMN email VARCHAR(100), DROP COLUMN fax, MODIFY COLUMN name VARCHAR(100) (resize), RENAME TO, ADD INDEX - each clause reshaping structure while preserving rows. ALTER is the DML-era maintenance tool: schemas evolve after launch, and the exam's favourite question is knowing that MODIFY retypes (with conversion risks) while ADD extends and DROP destroys a column and its data irrecoverably.",
              "Queries are SELECT's grammar, and the syllabus's list maps to clauses: SELECT columns FROM table WHERE condition (row filter - =, <>, IN, BETWEEN, LIKE with % wildcards), ORDER BY col DESC (sort), LIMIT n (paging), and the aggregate pair COUNT/SUM/AVG with GROUP BY for summaries. A worked query set on the students table: SELECT name, marks FROM students WHERE marks BETWEEN 60 AND 90 ORDER BY marks DESC LIMIT 5; SELECT AVG(marks) FROM students WHERE joined > '2025-01-01'; SELECT name FROM students WHERE name LIKE 'R%'. Three queries, six clauses - the clause set is the answer.",
              "The PHP half is the fetch loop met in 5.2 plus one upgrade: user-supplied filter values (a marks threshold from $_GET) must not be interpolated into the SQL string. The prepared-statement pattern: $stmt = $conn->prepare('SELECT name FROM students WHERE marks > ?'); $stmt->bind_param('i', $threshold); $stmt->execute(); - the value travels as data, never as code, and SQL injection dies at this pattern. Interpolated queries remain the syllabus's teaching example; parameterized queries are the practice.",
              "Exam framing: expect 'explain ALTER with example' or 'write SELECT queries'. Give the ALTER clause set with the MODIFY-vs-DROP risk note, the SELECT clause set with the three worked queries, and the prepared-statement pattern for user input - closing with the data-vs-code sentence. Always carry a WHERE on UPDATE and DELETE - the mass-destruction bug every examiner quotes. The prepared-statement pattern is the security close - prepare, bind, execute, in that order.",
            ],
            keyTerms: [
              { term: "ALTER TABLE", definition: "Reshapes structure after creation: ADD, DROP, MODIFY, RENAME clauses." },
              { term: "WHERE / LIKE", definition: "Row filtering - operators, IN, BETWEEN, and % wildcards for pattern match." },
              { term: "GROUP BY + aggregates", definition: "COUNT/SUM/AVG summaries per group." },
              { term: "Prepared statement", definition: "Query with ? placeholders; values bound as data - the injection kill pattern." },
            ],
            table: {
              caption: "ALTER clauses and their risks.",
              headers: ["Clause", "Effect", "Risk note"],
              rows: [
                ["ADD COLUMN", "Extends the schema", "Safe; NULL/DEFAULT fills old rows"],
                ["DROP COLUMN", "Removes column and its data", "Irrecoverable - back up first"],
                ["MODIFY COLUMN", "Retypes/resizes", "Conversion may truncate or fail"],
                ["RENAME", "Renames table or column", "Update all referencing queries"],
              ],
            },
            bullets: [
              "ALTER: ADD extends, DROP destroys (irrecoverable), MODIFY retypes (conversion risk).",
              "SELECT grammar: columns FROM table WHERE filter ORDER BY sort LIMIT page.",
              "Filters: =, <>, IN (list), BETWEEN (range), LIKE 'R%' (pattern).",
              "Aggregates: COUNT, SUM, AVG with GROUP BY for summaries.",
              "User-supplied filter values bind as parameters: prepare -> bind_param -> execute.",
              "Rule: data travels as data, never as code - interpolation is the injection door.",
            ],
            diagram: {
              kind: "compare",
              title: "ALTER vs UPDATE",
              caption: "Structure or data - the two verbs that reshape the other half.",
              left: {
                heading: "ALTER TABLE (DDL)",
                items: [
                  "Changes the contract: columns, types, keys",
                  "ADD / DROP / MODIFY / RENAME",
                  "Affects every row's shape",
                  "DROP is irrecoverable",
                ],
              },
              right: {
                heading: "UPDATE (DML)",
                items: [
                  "Changes row data: SET col = value WHERE ...",
                  "Rows keep their shape",
                  "Always carry a WHERE - or every row changes",
                  "Verify with affected_rows",
                ],
              },
            },
            callout: {
              type: "warning",
              title: "UPDATE without WHERE",
              body: "The syllabus's most practical bug: UPDATE students SET marks = 0 without a WHERE rewrites every row. In the exam and in the lab, the sentence 'always carry a WHERE on UPDATE and DELETE' is worth marks twice - once for correctness, once for the horror story that proves you understand scope.",
            },
            examQuestions: [
              {
                q: "Explain ALTER TABLE clauses with their risks, and write SELECT queries demonstrating WHERE operators, LIKE patterns, ORDER BY with LIMIT and aggregates with GROUP BY - plus the prepared-statement pattern for user-supplied filters.",
                marks: 14,
                outline: [
                  "ALTER ADD extends; DROP destroys irrecoverably; MODIFY retypes with risk",
                  "SELECT grammar: WHERE =, <>, IN, BETWEEN, LIKE '%'; ORDER BY DESC; LIMIT",
                  "Worked: marks BETWEEN 60 AND 90 ORDER BY DESC LIMIT 5",
                  "Aggregates: AVG(marks) with WHERE; COUNT with GROUP BY",
                  "LIKE 'R%' pattern match on names",
                  "Prepared: prepare('... marks > ?') -> bind_param('i', $t) -> execute()",
                  "Data-as-data rule kills SQL injection at the pattern",
                ],
              },
              {
                q: "Why does binding a parameter prevent SQL injection where string interpolation does not?",
                marks: 7,
                outline: [

                  "Interpolation merges user text into SQL source - quotes and keywords become code",

                  "Bound parameters travel separately as data; structure is fixed before values",

                  "The parser never reinterprets bound content",

                  "Type hints in bind_param add a second check",

                  "Prepared plans cache for repeated execution",

                ],              },
            ],
          },
          {
            number: "5.5",
            title: "Deleting data, tables and databases",
            body: [
              "Deletion comes in three powers, and confusing them is the classic exam bug. DELETE FROM students WHERE roll = 1 removes matching rows but keeps the table (DML, logged, reversible within a transaction, fires triggers). TRUNCATE TABLE students empties the table entirely - fast, resets AUTO_INCREMENT, cannot carry a WHERE (DDL-flavoured, minimal logging). DROP TABLE students removes the table and its definition; DROP DATABASE college removes every table in one stroke - both irreversible without backups. The syllabus's 'deleting database, deleting data and tables' is exactly this ladder: rows, table contents, table itself, database itself.",
              "A worked decision trace fixes the ladder. Clearing one student's record: DELETE with WHERE (targeted, logged). Clearing test data before a demo: TRUNCATE (fast, resets ids). Removing an obsolete table: DROP TABLE after a backup (or RENAME as a soft delete). Retiring an entire database: DROP DATABASE after export. Each step up the ladder discards more recoverability - which is why every ladder answer carries the backup sentence: DROP without an export is a resignation letter.",
              "The PHP and safety half: the same connection sends all three (query('DELETE FROM students WHERE roll = ?') with bound id), and the production guardrails are worth naming - run destructive statements inside transactions where possible, restrict the database user's privileges (an app account rarely needs DROP), and treat any DELETE/UPDATE missing a WHERE as a fire alarm. mysqli_affected_rows verifies each write; SHOW TABLES confirms what remains.",
              "Exam framing: expect 'differentiate DELETE, TRUNCATE and DROP'. Produce the three-way table (scope, WHERE support, logging, AUTO_INCREMENT, reversibility), run the decision trace, and close with the guardrails - transactions, least privilege, the no-WHERE alarm. Export before DROP - a deletion without a backup story is an incomplete answer. The deletion ladder is the decision trace - rows, contents, table, database, each less recoverable.",
            ],
            keyTerms: [
              { term: "DELETE ... WHERE", definition: "Row-wise, logged, trigger-firing deletion - the targeted form." },
              { term: "TRUNCATE", definition: "Empties the whole table fast; no WHERE; resets AUTO_INCREMENT." },
              { term: "DROP TABLE / DATABASE", definition: "Removes structure and data together - irreversible without backup." },
              { term: "Least privilege", definition: "App accounts get DML, not DDL - destructive power stays with admins." },
            ],
            table: {
              caption: "The deletion ladder.",
              headers: ["Command", "Scope", "WHERE?", "Recoverable?"],
              rows: [
                ["DELETE FROM ... WHERE", "Matching rows", "Yes - required in practice", "Yes, within transactions/backups"],
                ["TRUNCATE TABLE", "All rows, table remains", "No", "Rarely - minimal logging"],
                ["DROP TABLE", "Table and definition", "N/A", "Only from backup"],
                ["DROP DATABASE", "Every table at once", "N/A", "Only from export"],
              ],
            },
            bullets: [
              "DELETE: targeted rows with WHERE; logged, transactional, trigger-aware.",
              "TRUNCATE: fast empty-and-reset; no WHERE, minimal logging.",
              "DROP TABLE/DATABASE: structure and data gone - backups or nothing.",
              "Ladder of recoverability: rows -> contents -> table -> database.",
              "Guardrails: transactions, least-privilege accounts, the no-WHERE fire alarm.",
              "Verify with mysqli_affected_rows; confirm with SHOW TABLES.",
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the deletion",
              caption: "Ask two questions - how much, and is it coming back?",
              start: "Something must be deleted",
              branches: [
                { label: "Some rows, selective", outcome: "DELETE with WHERE - targeted, logged, safe to audit", good: true },
                { label: "All rows, keep structure", outcome: "TRUNCATE - fast reset, ids restart", good: false },
                { label: "Structure itself is obsolete", outcome: "DROP TABLE/DATABASE - export a backup first", good: false },
              ],
            },
            callout: {
              type: "warning",
              title: "Export before DROP",
              body: "DROP is the only command in this unit whose typo destroys a semester's work. The professional habit and the exam sentence: any DROP TABLE/DATABASE answer must carry 'after export/backup' - a deletion without a backup story is an incomplete answer.",
            },
            examQuestions: [
              {
                q: "Differentiate DELETE, TRUNCATE and DROP with a decision trace, state the recoverability ladder, and give the production guardrails for destructive statements.",
                marks: 14,
                outline: [
                  "DELETE ... WHERE: rows, logged, transactional, triggers fire",
                  "TRUNCATE: all rows, fast, no WHERE, AUTO_INCREMENT resets",
                  "DROP TABLE/DATABASE: structure + data, irreversible without backup",
                  "Trace: one student = DELETE; demo reset = TRUNCATE; obsolete table = DROP after export",
                  "Ladder: rows -> contents -> table -> database - recoverability shrinks upward",
                  "Guardrails: transactions, least privilege for app accounts",
                  "Alarm rule: DELETE/UPDATE without WHERE is always a bug",
                ],
              },
              {
                q: "Why should application database accounts lack DROP privileges?",
                marks: 7,
                outline: [

                  "Apps only need DML/DQL in normal operation",

                  "Injected or buggy code with DROP becomes catastrophic",

                  "Least privilege contains the blast radius",

                  "Schema changes belong to migration tooling, not the app",

                  "Audit trails separate app actions from admin actions",

                ],              },
            ],
          },
          {
            number: "5.6",
            title: "phpMyAdmin - the workbench",
            body: [
              "phpMyAdmin is the web-based administration UI for MySQL, written in PHP: it renders every database operation the unit has taught as a clickable interface - browsing tables, editing rows, running SQL, importing and exporting dumps, managing users and privileges. Its value is operational: the same CREATE/ALTER/INSERT/SELECT commands appear as forms, and the 'SQL' tab runs raw queries with results as grids - making it the fastest way to verify what a PHP script actually did to the data.",
              "The workbench maps onto the unit's command card one-to-one: the database list (left panel) is SHOW DATABASES; the structure tab is DESCRIBE plus ALTER forms; the insert tab is a column-named INSERT form; the SQL tab is the query window; the export tab writes full dumps (SQL, CSV) that double as the backup story from 5.5; and the privileges tab manages users - the least-privilege guardrail made clickable. A worked inspection: a script 'failed silently', so phpMyAdmin opens the table, runs the exact SELECT the script ran, and shows the column is NULL where the script expected a value - the bug was the data, not the query.",
              "The cautionary half belongs in this syllabus: phpMyAdmin is a high-value target because it is admin UI on the open web. The hygiene list: keep it updated, do not expose it publicly (bind to localhost or an internal network, or protect with an additional authentication layer), never run it as the MySQL root user day-to-day, and remove it after use on small deployments. The exam pairing: phpMyAdmin is both the debugging workbench and, deployed carelessly, the attack surface.",
              "Exam framing: expect 'what is phpMyAdmin and its uses'. Define it, map its tabs onto the command card (browse, structure, insert, SQL, export, privileges), run the silent-failure inspection as the worked example, and close with the security hygiene list. Run the script's exact query in the SQL tab - the workbench's real role is independent verification. The silent-failure inspection is the worked example - the bug was the data, not the query.",
            ],
            keyTerms: [
              { term: "phpMyAdmin", definition: "PHP web UI for MySQL administration - databases, tables, rows, SQL, users." },
              { term: "Export / dump", definition: "A full SQL script of schema and data - the backup artefact." },
              { term: "Privileges tab", definition: "User and grant management - least privilege made clickable." },
              { term: "Localhost binding", definition: "Restricting phpMyAdmin to internal access - the exposure guard." },
            ],
            table: {
              caption: "phpMyAdmin tabs mapped to the command card.",
              headers: ["Tab / panel", "Command it mirrors", "Use"],
              rows: [
                ["Database tree", "SHOW DATABASES / SHOW TABLES", "Navigate"],
                ["Structure", "DESCRIBE + ALTER forms", "Inspect and reshape"],
                ["Insert", "Column-named INSERT form", "Add rows"],
                ["SQL", "Any SELECT/DDL/DML", "Run raw queries"],
                ["Export", "mysqldump-style dump", "Backups and migrations"],
                ["Privileges", "GRANT / REVOKE", "Least-privilege users"],
              ],
            },
            bullets: [
              "phpMyAdmin: the whole unit's commands as clickable forms plus a raw SQL tab.",
              "Left tree = SHOW DATABASES; structure = DESCRIBE/ALTER; insert = INSERT form.",
              "Export writes dumps - the backup artefact 5.5 demanded.",
              "Debugging pattern: run the script's exact query in the SQL tab and compare results.",
              "Hygiene: update, bind to localhost, extra authentication, non-root daily user.",
              "Dual identity: the debugging workbench and, exposed carelessly, the attack surface.",
            ],
            diagram: {
              kind: "layers",
              title: "The phpMyAdmin stack",
              caption: "Browser to storage - the same layers the unit's scripts use, with a UI on top.",
              layers: [
                { label: "Browser UI", note: "grids, forms, SQL console" },
                { label: "phpMyAdmin (PHP)", note: "translates clicks into SQL" },
                { label: "MySQL server", note: "executes queries, enforces grants" },
                { label: "Storage", note: "databases, tables, rows on disk" },
              ],
            },
            callout: {
              type: "exam",
              title: "The silent-failure inspection",
              body: "The debugging story worth memorizing: a script 'failed silently'; phpMyAdmin ran the identical SELECT and showed NULL where the code expected a value - bug in the data, not the query. It demonstrates the workbench's real role: independent verification of what the script actually did.",
            },
            examQuestions: [
              {
                q: "Explain phpMyAdmin and map its interface onto MySQL's command card, illustrate a debugging inspection, and state the security hygiene for deploying it.",
                marks: 14,
                outline: [
                  "Definition: PHP web UI for MySQL administration",
                  "Tree = SHOW DATABASES; structure = DESCRIBE/ALTER; insert tab = INSERT",
                  "SQL tab runs raw queries with grid results",
                  "Export writes dumps; privileges tab manages GRANT/REVOKE",
                  "Inspection: run the script's exact SELECT - find the NULL the code missed",
                  "Hygiene: update, localhost binding, extra auth, non-root daily user",
                  "Dual role: workbench and, if exposed, attack surface",
                ],
              },
              {
                q: "Why is an internet-exposed phpMyAdmin a high-value target?",
                marks: 7,
                outline: [

                  "Admin UI plus database credentials on the public web",

                  "Brute-force and known-CVE pressure concentrate on it",

                  "Defence: internal binding, additional auth, updates",

                  "Known CVEs are scanned for automatically by attackers",

                  "Version banners advertise exploitable instances",

                ],              },
            ],
          },
          {
            number: "5.7",
            title: "Database bugs and debugging",
            body: [
              "The beginner's bug list is short, recurring and diagnosable. Connection bugs: Access denied (credentials), Unknown database (selection), call to undefined function mysqli_connect (extension off). SQL syntax bugs: unterminated quotes, missing commas, wrong keyword order - mysqli_error($conn) prints the exact message and is the first tool, not the last resort. Logic bugs: UPDATE/DELETE without WHERE (mass destruction), comparing with = NULL instead of IS NULL, wrong fetch loop (mysqli_fetch_assoc returns false at the end - the while pattern handles it, an if does not).",
              "Data-layer bugs complete the set: 'Undefined index' from reading $_POST keys that were not submitted (form control names mismatched or method wrong - GET data is not in $_POST), quoting bugs where user text breaks out of SQL strings (the injection door - bind parameters), and charset mismatches showing garbage (set utf-8 in the connection: mysqli_set_charset). A worked debugging trace runs the method: read mysqli_errno/error, isolate by echoing the exact SQL, run it in phpMyAdmin, fix, re-run, and verify with affected_rows - five steps that turn 'blank page' into a located defect.",
              "The discipline notes close the unit: develop with error reporting on (mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT)), never display raw errors in production (they leak schema and credentials hints), log instead; and validate inputs before they reach SQL at all - the debugging stack works best on bugs that never shipped. The exam's synthesis: every bug class here has a named tool (error message, echo, phpMyAdmin, affected_rows) - debugging is a method, not a mood.",
              "Exam framing: expect 'explain common database bugs in PHP' or 'how do you debug a failing query'. Give the three bug families with named examples, run the five-step debugging trace, produce the bug-to-fix table, and close with the discipline notes - report in dev, log in prod, validate at the door. Echo the SQL you actually send - half the bugs are visible before the database is consulted.",
            ],
            keyTerms: [
              { term: "mysqli_error", definition: "The last error message - the first debugging tool, not the last resort." },
              { term: "Undefined index", definition: "Reading an array key that was never submitted - form/method mismatch." },
              { term: "IS NULL", definition: "The only correct NULL test - = NULL never matches." },
              { term: "mysqli_report", definition: "Development-mode error reporting - failures throw instead of failing silently." },
            ],
            table: {
              caption: "Bug to fix - the diagnostic table.",
              headers: ["Symptom", "Cause", "Fix"],
              rows: [
                ["Blank page after connect", "Connection died silently", "Check mysqli_connect_error; report errors in dev"],
                ["You have an error in your SQL syntax", "Quotes, commas, keyword order", "Read mysqli_error; echo the SQL"],
                ["Undefined index: user", "Wrong method or control name", "Match form method to $_GET/$_POST; check names"],
                ["Every row changed", "UPDATE/DELETE missing WHERE", "Add the WHERE; restore from backup"],
                ["Garbage characters", "Charset mismatch", "mysqli_set_charset($conn, 'utf8')"],
                ["Query matched nothing", "= NULL used", "Test with IS NULL"],
              ],
            },
            bullets: [
              "Connection family: credentials, selection, extension - each has a named message.",
              "Syntax family: mysqli_error prints the message; echo the SQL to see it plainly.",
              "Logic family: missing WHERE, = NULL, broken fetch loops.",
              "Data family: undefined indexes, quoting/injection, charset garbage.",
              "Trace: errno/error -> echo SQL -> phpMyAdmin run -> fix -> affected_rows verify.",
              "Discipline: mysqli_report in dev, log-not-display in prod, validate before SQL.",
            ],
            diagram: {
              kind: "matrix",
              title: "The bug map",
              caption: "Two questions locate any database bug: what layer, and does it fail loudly or silently?",
              axes: { x: "Layer (connection/SQL <-> data/logic)", y: "Failure style (loud <-> silent)" },
              quadrants: [
                { label: "Silent data bugs", note: "missing WHERE, = NULL - most dangerous" },
                { label: "Loud SQL errors", note: "syntax - mysqli_error names them" },
                { label: "Silent connection config", note: "wrong database selected" },
                { label: "Loud connection failures", note: "Access denied - the easy kind" },
              ],
            },
            callout: {
              type: "tip",
              title: "Echo the SQL you actually send",
              body: "The one debugging habit that fixes most student bugs: print the exact query string before running it. Half the time the bug is visible in the echoed text - a missing quote, an empty variable - before any database is consulted. Cheap, fast, and the exam's favourite first step.",
            },
            examQuestions: [
              {
                q: "Explain the common PHP-MySQL bug families - connection, SQL syntax, logic and data-layer - with named examples and fixes, and describe the five-step debugging trace.",
                marks: 14,
                outline: [
                  "Connection: Access denied, Unknown database, undefined mysqli_*",
                  "Syntax: unterminated quotes and commas - read mysqli_error, echo the SQL",
                  "Logic: UPDATE without WHERE; = NULL vs IS NULL; fetch loop semantics",
                  "Data: Undefined index (method/name mismatch), quoting/injection, charset",
                  "Trace: errno/error -> echo SQL -> phpMyAdmin -> fix -> affected_rows",
                  "Charset fix: mysqli_set_charset($conn, 'utf8')",
                  "Discipline: mysqli_report in dev; log, never display, in production",
                ],
              },
              {
                q: "Why does mysqli_fetch_assoc belong in a while loop rather than an if?",
                marks: 7,
                outline: [

                  "Each call returns one row; false signals the end",

                  "while consumes every row and stops cleanly on false",

                  "if reads one row at most and never detects exhaustion properly",

                  "if reads one row and misses the rest silently",

                  "the while false-test is the natural loop terminator",

                ],              },
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
        { topic: "HTML: forms, tables, lists, links", weight: "about 12-14 marks", note: "One 'write HTML code' question is near-certain - practise the one-fragment answer." },
        { topic: "CSS: cascade, box model, positioning", weight: "about 10-12 marks", note: "Specificity bracket + positioning quadrants - two tables that answer most CSS questions." },
        { topic: "JavaScript: DOM and validation", weight: "about 10-12 marks", note: "getElementById/createElement and the onsubmit gate with regex - code earns the marks." },
        { topic: "PHP: arrays, functions, form handling", weight: "about 10-12 marks", note: "Associative arrays + $_POST + the upload recipe - the security notes differentiate." },
        { topic: "HTTP and web architecture", weight: "about 8-10 marks", note: "Request/response anatomy, status families, browser components - Unit I's spine." },
        { topic: "XML, DTD/XSD and XSLT", weight: "about 8-10 marks", note: "Well-formed vs valid fork + the 'abc marks' example + one transform pipeline." },
        { topic: "PHP-MySQL: connect, CRUD, bugs", weight: "about 10-12 marks", note: "The eight-command session, prepared statements, the bug-to-fix table." },
        { topic: "Web design and navigation", weight: "about 6-8 marks", note: "Constraint table + sitemap uses + click-path measurement - short notes territory." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week; every weekend, write code by hand. This subject is code-examined: practise writing HTML, CSS, JavaScript and PHP fragments from memory - the muscle of writing syntax without an editor is the whole exam skill.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I - platform and design", tasks: ["Internet vs WWW + click-to-render trace", "HTTP request/response + status families", "Browser components + server roles", "Web 2.0 features and AJAX contrast", "Design constraint table", "Sitemap uses + navigation click-path"] },
        { week: "Week 2", focus: "Unit II - HTML", tasks: ["Document skeleton + element anatomy", "Links, lists, tables, images fragment", "Form controls + GET/POST decision", "Meta tags + entities", "XHTML rules + migration snippet", "Frames deprecation + site structures", "HTML5 feature stack + showcase fragment"] },
        { week: "Week 3", focus: "Unit III - CSS and JavaScript", tasks: ["Selector grammar + cascade trace", "Box model + sizing maths", "Positioning quadrants + CSS3 list", "JS basics + pop-up trio", "Object layers + DOM tree", "Validation gate code", "DHTML cycle + rollover/show-hide"] },
        { week: "Week 4", focus: "Unit IV - XML and PHP", tasks: ["XML rules + components + results model", "DTD vs XSD + 'abc marks'", "XSLT pipeline + element table", "PHP embedding + control structures", "Arrays/functions/strings/$_SERVER", "Form processing + upload gates", "Cookie/session table + login flow + OOP"] },
        { week: "Week 5", focus: "Unit V - PHP and MySQL", tasks: ["Command families + eight-command session", "Connect code + failure diagnoses", "CREATE TABLE + INSERT forms", "ALTER clauses + SELECT grammar", "DELETE/TRUNCATE/DROP ladder", "phpMyAdmin mapping", "Bug-to-fix table + debugging trace"] },
        { week: "Week 6", focus: "Revision and papers", tasks: ["Rewrite the six anchor tables from memory", "Hand-write one code fragment per technology", "Two full past papers under time", "Error log rewritten three times"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "This subject is code-examined: answer 'explain X' questions with a named snippet plus two sentences of explanation - ten lines of correct code beat two pages of prose.",
        "For HTML questions, build one fragment using every asked construct in its correct role: th for headers, alt on images, labels on inputs, table for data.",
        "For CSS, write the specificity bracket (inline > id > class > element) and the box-model sizing maths before any styling discussion.",
        "For JavaScript validation, the onsubmit gate returning false is the mechanism - show it, then the regex.",
        "For PHP form questions, name the superglobal ($_GET vs $_POST), then isset, then validate, then escape output with htmlspecialchars.",
        "For uploads, recite the five gates: error, size, real type, safe name, move_uploaded_file.",
        "For MySQL questions, use the eight-command session as the skeleton and attach prepared statements wherever user input appears.",
        "Security notes are free marks in this branch: parameterized queries, server-side re-validation, never trust client data - one sentence each, every time.",
        "Time-box: 7-mark about 12 minutes, 14-mark about 22 minutes; leave 10 minutes to check code fragments for syntax slips.",
      ],
    },
    {
      id: "slips",
      heading: "Last-day strategy and common slips",
      body: [
        "Last day: rewrite the six anchor tables (status families, form controls, positioning quadrants, pop-up trio, cookie-vs-session, bug-to-fix), hand-write the four code fragments (HTML fragment, validation gate, upload recipe, mysqli connect) once from memory, and re-run the cascade trace. No new material tonight.",
      ],
      bullets: [
        "Saying the Internet and WWW are the same - the Web is one service on the Internet.",
        "Writing GET for a login form - credentials ride POST bodies, never query strings.",
        "Forgetting alt on images and th on tables - the two accessibility marks examiners always check.",
        "Calling XHTML a different language - same tags, stricter grammar.",
        "Confusing relative and absolute positioning - relative keeps its flow slot, absolute leaves it.",
        "Writing '5' + 3 = 8 - dynamic typing makes it '53'.",
        "Setting innerHTML with user input - textContent is the safe call.",
        "Storing prices or roles in cookies - the client edits them freely.",
        "Reading GET data from $_POST - match the method to the superglobal.",
        "Trusting $_FILES type or name - verify server-side, whitelist extensions.",
        "Interpolating user input into SQL - bind parameters; data is not code.",
        "Running UPDATE without WHERE - the mass-destruction bug every examiner quotes.",
      ],
    },
  ],
};
