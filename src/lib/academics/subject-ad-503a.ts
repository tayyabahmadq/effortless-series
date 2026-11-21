import type { AcademicSubject } from "./types";

export const ad503a: AcademicSubject = {
  id: "ad-503a",
  code: "AD503(A)",
  title: "Internet & Web Technology",
  semester: "V Semester",
  program: "RGPV · Artificial Intelligence & Data Science",
  tagline:
    "The full stack of the open web in one book: how HTTP moves pages, how HTML builds them, how CSS dresses them and JavaScript animates them, how XML carries data and PHP serves it, and how MySQL remembers it.",
  description:
    "Five units walk from the web's foundations through HTML, CSS+JavaScript+DHTML, XML+PHP, and PHP+MySQL, closing with a complete case study that assembles the whole stack into one working notes application.",
  accentColor: "#06b6d4",
  emoji: "</>",
  unitCount: 5,
  totalSections: 69,
  units: [
    {
      number: 1,
      roman: "I",
      title: "The Web: Concept, Design & Planning",
      summary:
        "Unit I sets the stage: the difference between the internet and the web, the HTTP protocol that carries every page, browsers and servers, the character of Web 2.0, and the craft of designing a site people can actually use.",
      chapter: {
        number: "01",
        title: "How the Web Works",
        intro:
          "Unit I covers internet vs WWW, HTTP, browsers and servers, Web 2.0, effective web design, design issues, look and feel, user-centric design, sitemaps, planning and publishing, and effective navigation.",
        inOneBreath:
          "The internet moves packets; the web moves pages over HTTP; browsers render and servers answer; Web 2.0 made pages into applications; and a site succeeds only when it is planned, designed for users, navigated clearly, and published with domain, host and files aligned.",
        sections: [
          {
            number: "1.1",
            title: "The internet and the World Wide Web",
            body: [
              "The internet is the hardware: a global network of networks — millions of computers, routers, fiber-optic cables and wireless links — that agree on how to move packets between any two machines, using TCP/IP. It has carried email (SMTP), file transfer (FTP), remote login (SSH) and much more since the 1970s. The World Wide Web, invented by Tim Berners-Lee in 1989 at CERN, is a service that runs on the internet: an information space of documents (and now applications) identified by URLs, connected by hyperlinks, and transferred by HTTP. The everyday confusion between the two is worth curing on day one: the internet is the road system; the web is one kind of traffic on it. Every page you have ever visited is a resource addressed by a URL (scheme://host/path, e.g. https://www.scribbly.in/notes/42) — the scheme says which protocol, the host says which server, the path says which resource.",
              "The internet's underlying machinery is packet switching over the TCP/IP protocol suite. TCP breaks your data into numbered packets, IP routes each packet independently across routers and physical links, and TCP reassembles them in order at the destination, re-requesting any lost on the way. The architecture is layered: physical (cables, radios), data-link (Ethernet, Wi-Fi), network (IP), transport (TCP/UDP) and application (HTTP, SMTP, FTP, DNS). Each layer serves the one above and hides the one below, which is why a web page loads identically whether your laptop sits on fibre, Wi-Fi or 4G. The internet is therefore infrastructure, not an application — and many internet applications (email since 1971, FTP since 1971, IRC chat, SSH) predate the web by decades.",
              "The web, by contrast, is one specific application built on top of that infrastructure, defined by three coordinated inventions Berners-Lee proposed in 1989. URLs (Uniform Resource Locators) give every resource a single global address; HTTP (HyperText Transfer Protocol) defines how a client fetches one; and HTML (HyperText Markup Language) describes what the fetched document contains. Hyperlinks tie documents together into a graph the user can navigate by clicking. Read together, those three are what makes the web 'the web': a single information space of linked documents reachable from any browser, on any device, anywhere the internet reaches.",
              "The exam-ready contrast is sharper than students often make it. The internet is hardware + protocol suite + many services; the web is one service running on top of it, with its own URL/HTTP/HTML trio. Saying 'the internet was invented by Tim Berners-Lee' is therefore wrong — he invented the web; the internet descends from ARPANET (1969) and the TCP/IP standard Vint Cerf and Bob Kahn published in 1974. Equally, a WhatsApp message is not 'the web' even though it uses the internet — it speaks its own protocol, not HTTP. Keep this distinction crisp in a 7-mark answer: define both, name the inventor and date of each, list two non-web internet services, and finish with the URL/HTTP/HTML pillar sentence.",
            ],
            diagram: {
              kind: "compare",
              title: "Internet vs WWW",
              caption: "The classic exam distinction: the internet is the road system, the web is one kind of traffic that runs on it.",
              left: {
                heading: "Internet — the network",
                items: ["hardware + TCP/IP since the 1970s", "carries every service", "email · file transfer · chat · web all ride on it"],
              },
              right: {
                heading: "WWW — a service on it",
                items: ["documents + hyperlinks", "1989, Tim Berners-Lee", "transferred by HTTP", "resources identified by URLs, connected by links"],
              },
            },
            keyTerms: [
              { term: "Internet", definition: "Global network of networks using TCP/IP to move packets between any two machines." },
              { term: "WWW", definition: "Tim Berners-Lee's 1989 service on the internet: URL-addressed documents linked by hyperlinks and transferred by HTTP." },
              { term: "TCP/IP", definition: "The protocol suite that breaks data into packets (TCP), routes them (IP), and reassembles them in order." },
              { term: "URL", definition: "Uniform Resource Locator — scheme://host/path address that names a single web resource." },
            ],
            callout: {
              type: "exam",
              title: "7-mark answer scaffold",
              body: "Define internet (hardware + TCP/IP, ARPANET 1969). Define WWW (Berners-Lee 1989, URL/HTTP/HTML trio). Contrast: internet is the road, web is one kind of traffic. Close with two non-web internet services (email/SMTP, FTP) to prove the distinction.",
            },
            bullets: [
              "Internet: global network of networks, packet-switched over TCP/IP since ARPANET (1969).",
              "WWW: Berners-Lee's 1989 information space built on the URL / HTTP / HTML trio.",
              "Internet = hardware + protocol suite; web = one service running on that infrastructure.",
              "TCP breaks data into numbered packets; IP routes them; TCP reassembles in order.",
              "Non-web internet services prove the distinction: email (SMTP), file transfer (FTP), SSH.",
              "A URL reads as scheme://host/path - protocol, server, resource in one address."
            ],
            examQuestions: [
              {
                q: "Define internet and World Wide Web. Explain the difference between the two with suitable examples.",
                marks: 7,
                outline: [
                  "Define internet: network of networks, packet switching, TCP/IP, ARPANET 1969",
                  "Describe the layered TCP/IP stack (physical, data-link, network, transport, application)",
                  "Define WWW: Tim Berners-Lee, CERN, 1989",
                  "Explain the three pillars: URL, HTTP, HTML, joined by hyperlinks",
                  "Contrast: internet is the road system, the web is one kind of traffic",
                  "Give two non-web internet services (SMTP email, FTP) to prove the point",
                  "Work a URL example: scheme://host/path"
                ]
              },
              {
                q: "Who proposed the World Wide Web and in which year? Name its three founding technologies.",
                marks: 2
              },
              {
                q: "List any three internet services other than the web, naming the protocol each uses.",
                marks: 3
              }
            ],
          },
          {
            number: "1.2",
            title: "The HTTP protocol",
            body: [
              "HTTP — HyperText Transfer Protocol — is the conversation every browser and server hold, in plain, readable text. It is a request–response protocol: the client sends an HTTP request, the server returns an HTTP response, and the connection closes (in HTTP/1.0) or persists for reuse (in HTTP/1.1's keep-alive). A request has three parts: the request line (method, URL, version — GET /notes/42 HTTP/1.1), the headers (name: value lines carrying metadata — the host, the accepted content types, cookies, the browser's user-agent), and an optional body (form data, uploaded files). A response mirrors it: a status line (HTTP/1.1 200 OK), headers (content type, length, caching rules, set-cookie), and the body — the HTML itself.",
              "Status codes come in five families grouped by their first digit. 1xx informational (100 Continue) is rarely seen by users; 2xx success — 200 OK, 201 Created, 204 No Content; 3xx redirection — 301 Moved Permanently (bookmarks should update), 302 Found (temporary), 304 Not Modified (use the cached copy); 4xx client errors — 400 Bad Request, 401 Unauthorized (login needed), 403 Forbidden (logged in but not allowed), 404 Not Found (no such URL), 405 Method Not Allowed; 5xx server errors — 500 Internal Server Error (the PHP script crashed), 502 Bad Gateway, 503 Service Unavailable (overloaded). Memorising the families matters more than the exact numbers: the first digit alone tells you whose fault it is.",
              "A worked HTTP/1.1 exchange makes the theory concrete. The browser sends: GET /notes/42 HTTP/1.1 / Host: www.scribbly.in / User-Agent: Mozilla/5.0 / Accept: text/html / Cookie: PHPSESSID=abc123 — five headers around the request line, no body for GET. The server replies: HTTP/1.1 200 OK / Content-Type: text/html; charset=UTF-8 / Content-Length: 2847 / Set-Cookie: visit=42; Path=/ / then a blank line and the 2847 bytes of HTML. Everything above the blank line is metadata; everything below is the body the browser renders. HTTPS is the same protocol carried inside a TLS tunnel, which encrypts the exchange and authenticates the server via its certificate — that is the only meaningful difference for a Unit I answer.",
              "HTTP is deliberately stateless: each request stands alone, and the server forgets you the instant the response is sent. This was a brilliant design choice for a document-fetching protocol (cacheable, scalable, no per-connection memory), but a hopeless one for shopping carts and logins — which is why cookies (Unit II §2.15) and sessions (Unit IV §4.15) had to be layered on top. The protocol's history is short and exam-friendly: HTTP/0.9 (1991, GET only), HTTP/1.0 (1996, headers and methods), HTTP/1.1 (1997, persistent connections, host headers, pipelining), HTTP/2 (2015, multiplexed binary streams over one connection), HTTP/3 (2022, over QUIC/UDP). For a 7-mark answer, name the request–response pattern, the three request parts, the five status-code families with one example each, and the statelessness that forces cookies to exist.",
            ],
            table: {
              caption: "HTTP methods.",
              headers: ["Method", "Meaning", "Has body?", "Safe / idempotent"],
              rows: [
                ["GET", "retrieve the resource", "no", "safe, idempotent"],
                ["POST", "submit data, create something", "yes", "neither"],
                ["PUT", "replace the resource at the URL", "yes", "idempotent"],
                ["DELETE", "remove the resource", "no", "idempotent"],
                ["HEAD", "headers only, no body", "no", "safe, idempotent"],
                ["OPTIONS", "which methods are allowed?", "no", "safe"],
              ],
            },
            diagram: {
              kind: "pipeline",
              title: "The life of an HTTP exchange",
              caption: "Connect, request, respond, render — the loop behind every page load.",
              stages: [
                { label: "URL typed", note: "browser resolves the host" },
                { label: "Connection", note: "TCP (and TLS) opens" },
                { label: "Request", note: "GET /notes/42 + headers" },
                { label: "Processing", note: "server locates the resource" },
                { label: "Response", note: "200 OK + HTML body" },
                { label: "Render", note: "browser paints the page" },
              ],
            },
            bullets: [
              "HTTP is a stateless request-response text protocol between browser and server.",
              "A request: request line (method, URL, version), headers, optional body.",
              "A response: status line, headers, blank line, body.",
              "Status families: 1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error.",
              "GET is safe and idempotent; POST is neither and carries a body.",
              "HTTP/1.1 added keep-alive, Host header and pipelining over HTTP/1.0."
            ],
            codeExample: {
              language: "http",
              caption: "A complete HTTP/1.1 exchange, exactly as it travels",
              code: "GET /notes/42 HTTP/1.1\nHost: www.scribbly.in\nUser-Agent: Mozilla/5.0\nAccept: text/html\nCookie: PHPSESSID=abc123\n\nHTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 2847\nSet-Cookie: visit=42; Path=/\n\n<!DOCTYPE html>\n<html> ... the 2847 bytes of HTML ... </html>"
            },
            keyTerms: [
              {
                term: "HTTP",
                definition: "HyperText Transfer Protocol - the stateless request-response text protocol that carries every web resource."
              },
              {
                term: "Status code",
                definition: "Three-digit response code whose first digit names the family: 1xx info, 2xx success, 3xx redirect, 4xx client error, 5xx server error."
              },
              {
                term: "Persistent connection",
                definition: "HTTP/1.1 keep-alive: one TCP connection carries many request-response exchanges."
              },
              {
                term: "Stateless",
                definition: "Each HTTP request stands alone; the server remembers nothing between requests, forcing cookies and sessions."
              }
            ],
            callout: {
              type: "exam",
              title: "Status-code families earn the marks",
              body: "Name all five families (1xx-5xx) with one example each: 200 OK, 301 Moved Permanently, 404 Not Found, 500 Internal Server Error. The first digit tells you whose fault it is."
            },
            examQuestions: [
              {
                q: "Explain the HTTP protocol with a neat diagram. Differentiate HTTP 1.0 and HTTP 1.1.",
                marks: 7,
                outline: [
                  "Define HTTP as a stateless request-response protocol",
                  "Anatomy of a request: request line, headers, optional body",
                  "Anatomy of a response: status line, headers, body",
                  "Five status-code families with one example each",
                  "HTTP/1.0: one request per connection, no Host header",
                  "HTTP/1.1: persistent connections, Host header, pipelining, chunked transfer",
                  "Statelessness and why cookies are needed"
                ]
              },
              {
                q: "What is the difference between HTTP 1.0 and HTTP 1.1?",
                marks: 2
              },
              {
                q: "Write the request line and two headers of an HTTP GET request for /index.html on example.com.",
                marks: 3
              }
            ],
          },
          {
            number: "1.3",
            title: "Web browsers and web servers",
            body: [
              "A web browser — Chrome, Firefox, Edge, Safari — is the client: it sends requests, receives responses, and renders HTML + CSS + JavaScript into the page you see. Its engine room has two halves: a rendering engine (Blink in Chrome, Gecko in Firefox, WebKit in Safari, EdgeHTML retired in favour of Blink) that parses HTML into the DOM and paints it with CSS, and a JavaScript engine (V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari) that executes scripts on a single-threaded event loop. Browsers also embed a networking stack (fetching over HTTP/TLS), a storage subsystem (cookies, localStorage, IndexedDB, cache), and a UI layer (tabs, address bar, bookmarks). The brand differs; the architecture is remarkably uniform.",
              "A web server — Apache, Nginx, IIS — is the always-on counterpart: it listens on port 80 (HTTP) or 443 (HTTPS), parses each incoming request, maps the URL to a file or a program, and returns a response. Two architectural styles dominate. Apache uses a process-or-thread-per-connection model with a rich module system (.htaccess per-directory config, mod_php embedding the PHP interpreter inside Apache). Nginx uses an event-driven, asynchronous model that handles tens of thousands of concurrent connections per worker — ideal as a reverse proxy in front of Apache or PHP-FPM. Microsoft's IIS serves the Windows/.NET world. Both Apache and Nginx can serve static files directly and delegate dynamic requests to PHP, Node, Python or any backend.",
              "The pair never meet in person: one request, one response, no memory across them. This statelessness is the protocol's defining trait and the reason cookies and sessions exist — the server has no built-in way to recognise that this request and the previous one came from the same user. Apache and Nginx log every exchange (access.log and error.log), which is where every PHP debugging session eventually begins. A typical request lifecycle in the LAMP stack is: browser sends GET /notes.php → Apache receives it → mod_php (or PHP-FPM) executes notes.php → the script queries MySQL → MySQL returns rows → PHP renders HTML → Apache returns 200 OK + body → browser parses and paints the page.",
              "For the exam, the contrast to write down is functional, not just historical. The browser interprets (HTML/CSS/JS) and renders (paints pixels); the server stores (files, programs) and computes (runs PHP, queries MySQL). The browser is on the user's machine under their control; the server is in a data centre under the site owner's control. The browser trusts nothing the server sends (re-validates input); the server trusts nothing the browser sends (re-validates input). That symmetry is the trust boundary every web application lives inside, and Unit V's prepared statements, Unit IV's htmlspecialchars(), and Unit III's server-side re-validation all sit on it.",
            ],
            keyTerms: [
              { term: "Rendering engine", definition: "The browser component (Blink, Gecko, WebKit) that parses HTML/CSS and paints pixels." },
              { term: "JS engine", definition: "The component (V8, SpiderMonkey) that executes JavaScript on a single-threaded event loop." },
              { term: "Apache", definition: "Process/thread-per-connection web server with rich module system (mod_php, .htaccess)." },
              { term: "Nginx", definition: "Event-driven, asynchronous web server and reverse proxy that scales to tens of thousands of concurrent connections." },
              { term: "Statelessness", definition: "HTTP's defining trait — each request stands alone, forcing cookies/sessions to exist for continuity." },
            ],
            callout: {
              type: "exam",
              title: "Server vs browser — the symmetry to write",
              body: "Browser: client-side, interprets HTML/CSS/JS, under user's control. Server: server-side, runs PHP/queries MySQL, under owner's control. Both re-validate everything they receive across the trust boundary.",
            },
            bullets: [
              "Browser = client: interprets HTML/CSS/JS and renders pixels on the user's machine.",
              "Server = host: listens on port 80/443, maps URLs to files or programs, computes responses.",
              "Rendering engines: Blink (Chrome), Gecko (Firefox), WebKit (Safari).",
              "JS engines: V8, SpiderMonkey, JavaScriptCore - all single-threaded event loops.",
              "Apache: process/thread per connection, .htaccess, mod_php; Nginx: event-driven, PHP-FPM, reverse proxy.",
              "Neither side remembers the other between requests - statelessness."
            ],
            diagram: {
              kind: "compare",
              title: "Browser vs server",
              caption: "The two ends of every HTTP exchange: one interprets and renders, the other stores and computes.",
              left: {
                heading: "Web browser - the client",
                items: [
                  "runs on the user's machine",
                  "rendering engine + JS engine",
                  "sends requests, paints responses",
                  "Chrome, Firefox, Safari, Edge"
                ]
              },
              right: {
                heading: "Web server - the host",
                items: [
                  "always-on daemon, ports 80/443",
                  "stores files and programs",
                  "runs PHP, queries MySQL",
                  "Apache, Nginx, IIS"
                ]
              }
            },
            examQuestions: [
              {
                q: "Explain the architecture of a web browser and a web server. Differentiate between the two.",
                marks: 7,
                outline: [
                  "Define browser as the client that interprets and renders",
                  "Browser internals: rendering engine, JS engine, networking, storage, UI",
                  "Define server as the always-on HTTP listener on ports 80/443",
                  "Server internals: request parsing, URL mapping, static vs dynamic handling",
                  "Apache (thread per connection, mod_php) vs Nginx (event-driven, PHP-FPM)",
                  "Statelessness: one request, one response, no memory",
                  "Contrast table: renders vs computes, client machine vs data centre"
                ]
              },
              {
                q: "Name two web browsers and two web servers.",
                marks: 2
              },
              {
                q: "What is the role of the rendering engine and the JavaScript engine inside a browser?",
                marks: 3
              }
            ],
          },
          {
            number: "1.4",
            title: "Features of Web 2.0",
            body: [
              "Web 2.0 is the read-write web: pages became applications, and visitors became participants. Coined by Tim O'Reilly in 2004 to describe the post-dotcom-crash web, it is a pattern rather than a specification — a set of design principles and technologies that turned the brochure-ware Web 1.0 into a participatory platform. Its signature features: user-generated content (blogs, wikis, reviews, uploads), interactivity through AJAX (JavaScript fetching data in the background, no full page reload), tagging and folksonomy instead of fixed categories, social features (profiles, feeds, sharing, likes), mashups and APIs (one site's data on another's map), software as a service (applications living in the browser instead of on the desktop), and collective intelligence (the more people use it, the better it gets).",
              "The architectural shift under Web 2.0 is AJAX — Asynchronous JavaScript And XML — even though JSON has since replaced XML in the payload. Before AJAX, every user action (vote, comment, add to cart) required a full page reload. After AJAX, a JavaScript handler sends a background request, the server returns a small chunk of data, and the DOM is updated in place — the page feels like an application. Gmail (2004), Google Maps (2005) and Flickr demonstrated the pattern; the technique itself rests on the XMLHttpRequest object Microsoft shipped in Internet Explorer 5 in 1999. Today's fetch() API is the same idea in modern clothing.",
              "Web 1.0 vs Web 2.0 makes a clean exam contrast. Web 1.0 (roughly 1991–2003): static HTML pages hand-edited or generated server-side, read-only for visitors, single-author, hyperlink navigation, broadcast model — Britannica Online, personal homepages, brochure sites. Web 2.0 (2004 onward): dynamic, database-driven, read-write, many-author, tag/feed/share navigation, participation model — Wikipedia, Facebook, YouTube, blogs. The technology stack changed (LAMP + AJAX + APIs) but the philosophy changed more: from 'we publish, you read' to 'we host, you contribute'.",
              "Concrete monuments to each feature make the marks easy. User-generated content → Wikipedia, YouTube, Instagram. Folksonomy → Delicious bookmarks, hashtag Twitter. Mashups → Housing Maps (Craigslist on Google Maps). SaaS in the browser → Google Docs, Figma, Notion. Collective intelligence → PageRank (links are votes), Amazon recommendations, Stack Overflow reputation. The course's own case study in Unit V — a notes application — is itself a small Web 2.0 product: users register, log in, create and edit their own notes, share them. State this in a 7-mark answer: define Web 2.0 as the read-write participatory web, list five features with one example each, contrast with Web 1.0, and close with AJAX as the enabling technology.",
            ],
            diagram: {
              kind: "compare",
              title: "Web 1.0 vs Web 2.0",
              caption: "From 'we publish, you read' to 'we host, you contribute' — O'Reilly's 2004 reframing.",
              left: {
                heading: "Web 1.0 — the brochure web",
                items: ["static HTML, read-only", "single author per site", "hyperlink navigation", "Britannica Online, personal homepages"],
              },
              right: {
                heading: "Web 2.0 — the platform web",
                items: ["dynamic + AJAX, read-write", "many authors, user-generated", "tag/feed/share navigation", "Wikipedia, YouTube, Facebook"],
              },
            },
            keyTerms: [
              { term: "Web 2.0", definition: "O'Reilly's 2004 term for the read-write, participatory, AJAX-driven web of platforms and APIs." },
              { term: "AJAX", definition: "Asynchronous JavaScript And XML — background fetch + DOM update, no full page reload." },
              { term: "Folksonomy", definition: "User-generated tagging (e.g. hashtags) instead of a fixed taxonomy of categories." },
              { term: "Mashup", definition: "A site that combines data/APIs from several sources into one interface." },
            ],
            bullets: [
              "Web 2.0 (O'Reilly, 2004): the read-write web where visitors became participants.",
              "Core features: user-generated content, folksonomy (tagging), mashups, SaaS in the browser, rich UX via AJAX.",
              "AJAX: JavaScript fetches data in the background and updates part of the page without a reload.",
              "Web 1.0: static, read-only, single-author, broadcast model (Britannica Online).",
              "Monuments: Wikipedia and YouTube (UGC), Delicious (folksonomy), Housing Maps (mashup), Google Docs (SaaS)."
            ],
            callout: {
              type: "exam",
              title: "AJAX is the architectural answer",
              body: "When asked how Web 2.0 differs technically from Web 1.0, the expected answer is AJAX: asynchronous JavaScript requests updating the DOM without a full page reload."
            },
            examQuestions: [
              {
                q: "What is Web 2.0? Explain its important features with suitable examples.",
                marks: 7,
                outline: [
                  "Define Web 2.0 (O'Reilly 2004) as the read-write, participative web",
                  "User-generated content with examples (Wikipedia, YouTube)",
                  "Folksonomy / tagging (Delicious, hashtags)",
                  "Mashups combining data from several sources (Housing Maps)",
                  "SaaS: applications delivered in the browser (Google Docs)",
                  "AJAX as the enabling technology - partial page updates",
                  "Contrast with Web 1.0's static broadcast model"
                ]
              },
              {
                q: "What is AJAX and why did it matter to Web 2.0?",
                marks: 2
              },
              {
                q: "Differentiate Web 1.0 and Web 2.0 on any three points.",
                marks: 3
              }
            ],
            codeExample: {
              language: "javascript",
              caption: "ajax.js - the partial-update pattern behind Web 2.0",
              code: "// Vote without reloading the page - the Web 2.0 signature move.\ndocument.querySelector('#vote').addEventListener('click', () => {\n  fetch('/api/vote', { method: 'POST' })\n    .then((res) => res.json())\n    .then((data) => {\n      document.querySelector('#count').textContent = data.count;\n    });\n});"
            },
          },
          {
            number: "1.5",
            title: "Concepts of effective web design",
            body: [
              "Effective design is not decoration; it is the discipline of letting visitors achieve their goal. The core concepts: know the audience (a farmers' portal and a gaming site justify different designs), clarity over cleverness (a visitor should answer 'where am I, what can I do here' in seconds), consistency (same header, same fonts, same link colours everywhere), visual hierarchy (size, colour and position signal what matters), accessibility (alt text, readable contrast, keyboard navigation), and speed (a beautiful slow page loses to a plain fast one). Every technical decision in this course — compressed images, cached pages, external stylesheets — serves one of these concepts.",
              "Visual hierarchy is where design earns its keep. The eye scans a page in a fraction of a second before reading a word, ranking elements by size, contrast, whitespace and position. A page with one large headline, a clear sub-headline, a column of body text and a single accent-coloured call-to-action button tells the eye exactly what to read first, second, third. A page with everything bold or every box the same colour tells the eye nothing — the visitor leaves. The practical rule is the 'one big thing per page' principle: each page should have a single primary action (sign up, read this article, add to cart) and the visual hierarchy should make that action the loudest element on the page.",
              "Accessibility is a usability law, not a courtesy, and the WCAG (Web Content Accessibility Guidelines) shape the discipline. The non-negotiables: every image carries an alt attribute describing it for screen readers; colour contrast meets roughly 4.5:1 for body text; forms have visible <label>s paired with their inputs (clicking the label focuses the field); the page is fully operable from the keyboard (tab order matches visual order); and meaning never relies on colour alone (an error state is a red border plus an icon and text, not just red). These rules help screen-reader users, but they also help mobile users, low-vision users, search engines and your own future self debugging the page.",
              "Consistency is the unglamorous half of good design: the same header on every page, the same navigation in the same place, the same button styles, the same link colours, the same typography scale (a defined set of heading sizes, not a different one each page). It is enforced technically by external stylesheets (Unit III) and PHP includes (Unit IV) — one change to styles.css or header.php propagates to every page. The exam contrast worth writing: Web 1.0 design suffered from 'cool but unusable' (splash screens, mystery-meat navigation, frame layouts); Web 2.0 design prizes usability over flash, with Google's homepage (one box, one button, lots of whitespace) as the canonical example. In a 7-mark answer list six principles, give one example each, and close with Google's homepage as proof that effective ≠ ornate.",
            ],
            keyTerms: [
              { term: "Visual hierarchy", definition: "Using size, contrast, whitespace and position to tell the eye what to read first." },
              { term: "Accessibility", definition: "Designing so users with disabilities (screen-reader, keyboard-only, low-vision) can use the site; codified by WCAG." },
              { term: "WCAG", definition: "Web Content Accessibility Guidelines — the international standard for accessible web content." },
              { term: "Consistency", definition: "Same header, navigation, fonts, colours and button styles across every page, enforced by external CSS and PHP includes." },
            ],
            callout: {
              type: "exam",
              title: "6 principles in one line each",
              body: "Know the audience · Clarity over cleverness · Consistency · Visual hierarchy · Accessibility · Speed. Add Google's homepage as proof that effective ≠ ornate.",
            },
            bullets: [
              "Effective design = letting visitors achieve their goal with minimum friction.",
              "Know the audience first; a farmers' portal and a gaming site justify different designs.",
              "Visual hierarchy: size, contrast, whitespace and position rank elements before a word is read.",
              "Clarity over cleverness: the visitor should instantly answer 'where am I, what can I do here'.",
              "Accessibility (WCAG): alt text, 4.5:1 contrast, keyboard navigation, labels on every form field.",
              "Consistency: same header, nav place, button styles and type scale on every page."
            ],
            diagram: {
              kind: "pyramid",
              title: "The design priority pyramid",
              caption: "Each tier only works when the one below it holds: content first, decoration last.",
              tiers: [
                {
                  label: "Content",
                  note: "what the visitor came for"
                },
                {
                  label: "Usability",
                  note: "tasks are easy to complete"
                },
                {
                  label: "Visual design",
                  note: "hierarchy, palette, typography"
                },
                {
                  label: "Technology",
                  note: "HTML/CSS/JS that carries it"
                }
              ]
            },
            examQuestions: [
              {
                q: "Explain the concepts of effective web design.",
                marks: 7,
                outline: [
                  "Define design as goal-completion, not decoration",
                  "Audience analysis",
                  "Visual hierarchy: size, contrast, whitespace, position",
                  "Clarity and the 'where am I' test",
                  "Accessibility: WCAG, alt text, contrast ratio, keyboard access",
                  "Consistency across pages",
                  "Fast loading and the 3-second rule"
                ]
              },
              {
                q: "What is visual hierarchy in web design?",
                marks: 2
              },
              {
                q: "Write short notes on WCAG accessibility guidelines (any four rules).",
                marks: 3
              }
            ],
          },
          {
            number: "1.6",
            title: "Web design issues: browser, bandwidth, cache and display",
            body: [
              "Four environmental realities constrain every design, and ignoring any one of them wrecks a site that looked perfect on the designer's own monitor. The browser issue: engines render differently — a layout perfect in Chrome may break in an older browser, a feature supported in Firefox may be absent in Safari. The professional answers are progressive enhancement (build a working baseline first, then add richness for modern browsers) and graceful degradation (the rich version falls back to something usable on older engines), tested on real browsers, not on assumptions. Stick to standards (W3C HTML/CSS) over vendor prefixes, and use caniuse.com to check a property's support before relying on it.",
              "The bandwidth issue is the most quantifiable: a page is only as fast as the user's connection. On a 2 Mbps mobile link, a 3 MB hero image takes 12 seconds to arrive — long past the 3-second abandonment threshold. The arithmetic of performance: page weight ÷ connection speed = load time. Reduce page weight by compressing images (WebP over JPEG saves 25–35%, SVG for icons), minifying CSS/JS (strip whitespace and comments), and lazy-loading off-screen images with the loading=\"lazy\" attribute. Reduce round-trips by combining files and using HTTP/2 multiplexing. The modern budget is roughly 1.5 MB total and 3 seconds to first paint on a mid-range phone — a hard constraint that shapes every decision above it.",
              "The cache issue cuts both ways. Browsers and proxy servers keep copies of resources to avoid re-downloading — a blessing for returning visitors, a curse when you have just updated styles.css but every browser is still serving yesterday's. Design for caching with three rules: give every static asset a far-future Expires or Cache-Control: max-age=31536000 header; never change a file in place (because returning visitors will see the old version); instead fingerprint updated assets into a new filename (styles.v42.css) so the browser treats them as fresh. The HTML document itself should always be re-validated (Cache-Control: no-cache), so it points to the latest asset versions. A misconfigured cache is a debugging nightmare; a well-configured one is the single fastest performance win available.",
              "The display resolution issue is the most modern: the same page must survive a phone at 360 px, a tablet at 768 px, a laptop at 1366 px and a monitor at 1920 px — and increasingly a 4K monitor at 3840 px. Fixed-pixel layouts break catastrophically; the modern answer is responsive design, built on three CSS3 tools covered in Unit III: media queries (@media (max-width: 600px) { ... }) that switch layout at breakpoints; flexible layouts (percentages, flexbox, grid) instead of fixed pixels; and relative units (rem, em, %, vw, vh) instead of px where scaling matters. The exam-friendly summary: the four issues are browser (test and standardise), bandwidth (compress and lazy-load), cache (version and fingerprint), and display (respond and flex). Name a concrete remedy for each.",
            ],
            keyTerms: [
              { term: "Progressive enhancement", definition: "Build a working baseline for all browsers, then layer richer features for modern engines." },
              { term: "Page weight", definition: "Total bytes of a page (HTML + CSS + JS + images); lower weight = faster load on limited bandwidth." },
              { term: "Cache fingerprinting", definition: "Renaming assets (styles.v42.css) so updated files bypass the browser cache while unchanged ones stay cached." },
              { term: "Responsive design", definition: "A layout that adapts to any viewport via media queries, flexible grids and relative units." },
            ],
            callout: {
              type: "tip",
              title: "Performance arithmetic",
              body: "Load time ≈ page weight ÷ connection speed. A 3 MB page on 2 Mbps mobile = ~12 s. The abandonment cliff is 3 s. So the mobile budget is roughly 750 KB at 2 Mbps.",
            },
            bullets: [
              "Browser issue: engines render differently - test in several browsers, code to standards.",
              "Bandwidth issue: page weight divided by connection speed = load time; keep pages light.",
              "Cache issue: caching speeds up returning visitors but serves stale files after an update.",
              "Display issue: the same page must survive 360px phones to 3840px monitors - responsive design.",
              "Techniques: progressive enhancement, versioned cache fingerprints, fluid grids and media queries."
            ],
            diagram: {
              kind: "matrix",
              title: "Four design issues, mapped",
              caption: "Each constraint differs in how much it hits users and how much control you have over it.",
              axes: {
                x: "Control you have: low to high",
                y: "Impact on the visitor: low to high"
              },
              quadrants: [
                {
                  label: "Bandwidth",
                  note: "huge impact, little control - only page weight answers it"
                },
                {
                  label: "Display sizes",
                  note: "high impact, high control - responsive design fixes it"
                },
                {
                  label: "Browser differences",
                  note: "moderate impact, some control - test and degrade gracefully"
                },
                {
                  label: "Cache staleness",
                  note: "moderate impact, full control - version your file names"
                }
              ]
            },
            examQuestions: [
              {
                q: "Explain the major web design issues related to browser, bandwidth, cache and display.",
                marks: 7,
                outline: [
                  "Browser issue: engine differences, feature support, testing strategy",
                  "Bandwidth issue: load time arithmetic, page weight budget, image optimisation",
                  "Cache issue: benefit for returning visitors, staleness risk, versioned URLs",
                  "Display issue: resolution range 360px-3840px, responsive layouts",
                  "Progressive enhancement as the umbrella strategy",
                  "One mitigation for each issue"
                ]
              },
              {
                q: "What is progressive enhancement?",
                marks: 2
              },
              {
                q: "Why is caching both a blessing and a curse for a web designer?",
                marks: 3
              }
            ],
          },
          {
            number: "1.7",
            title: "Look and feel, page layout and linking",
            body: [
              "Look and feel is the site's personality: the colour palette (usually one primary, one accent, neutrals for the rest), typography (at most two font families; readable line lengths of 50–75 characters), imagery style and the tone of micro-copy — all applied consistently through a stylesheet rather than page by page. A palette built from one primary colour, one accent and a small set of neutrals (white, off-white, grey, near-black) covers 95% of sites; the rule is restraint, not variety. Typography obeys similar restraint: pair a body face (often a serif or humanist sans for legibility) with a display face for headings, set body text at 16–18 px with 1.5–1.7 line-height, and keep measure (line length) at 50–75 characters so the eye does not lose its place on return.",
              "Page layout arranges the real estate, and the classic web grid is decades old because it works: a header (logo, identity, primary navigation), a content column with a sidebar (related links, ads, call-to-action), and a footer (contact, legal, sitemap link, secondary navigation). The header establishes identity and global navigation; the content column carries the page's purpose; the sidebar offers next steps; the footer closes the deal. Implemented today with CSS grid for the macro layout and flexbox for the micro (a row of buttons, a card's contents), this single pattern underlies everything from blogs to e-commerce to news sites. Responsive design collapses the sidebar below the content on mobile rather than hiding it.",
              "Linking is the web's deep structure and the half of design students underuse. Use meaningful link text ('download the report', never 'click here') — screen readers list links out of context, and search engines rank by link words. Link generously inward: deep pages should not be orphans, because an orphaned page is one Google may rank but no visitor can navigate to from inside the site. Link honestly outward: cite sources, credit images, and use rel=\"noopener noreferrer\" on target=\"_blank\" links so external sites cannot reach back into your tab via window.opener. Keep the three-click rule of thumb in mind — any page should be reachable in about three clicks from the home page — and verify it with a sitemap diagram (§1.9) before building.",
              "Two more details examiners reward. First, the visual hierarchy of a page should mirror the document outline: one H1 per page, H2 for major sections, H3 for sub-sections, never skipping levels — this serves SEO and accessibility as well as design. Second, micro-copy (button labels, form hints, error messages, empty-state text) is where personality actually lives: 'Save my note' beats 'Submit', 'We couldn't find any notes — try creating one?' beats 'No results'. For a 7-mark answer, define look and feel (palette + typography + imagery + tone), draw the classic web grid (header/nav/content/sidebar/footer), state the linking rules (meaningful text, generous inward, honest outward, three-click rule), and close with the typographic and micro-copy details.",
            ],
            keyTerms: [
              { term: "Look and feel", definition: "The site's visual personality — palette, typography, imagery style and micro-copy tone." },
              { term: "Measure", definition: "Line length in characters; readable body text keeps 50–75 characters per line." },
              { term: "Three-click rule", definition: "Rule of thumb that any page should be reachable in about three clicks from the home page." },
              { term: "Web grid", definition: "Classic layout: header (logo+nav), content column, sidebar, footer — implemented with CSS grid/flex." },
            ],
            bullets: [
              "Look and feel = palette + typography + imagery + tone of micro-copy, applied consistently.",
              "Classic web grid: header, content column with sidebar, footer.",
              "Typography: at most two font families, measure of 50-75 characters per line.",
              "Document outline: one H1 per page, H2 for sections, never skip levels.",
              "Link text must be meaningful ('download the report', never 'click here').",
              "Link inward generously and fix orphan pages - every page reachable in a click or two."
            ],
            diagram: {
              kind: "compare",
              title: "Good page layout vs poor page layout",
              caption: "The same content, organised by the grid or dumped on the canvas.",
              left: {
                heading: "Good layout",
                items: [
                  "header with identity + global nav",
                  "one clear content column",
                  "sidebar for secondary links",
                  "consistent footer, whitespace used",
                  "one H1, logical heading levels"
                ]
              },
              right: {
                heading: "Poor layout",
                items: [
                  "nav moves between pages",
                  "three competing content columns",
                  "tiny grey text on a busy background",
                  "'click here' links everywhere",
                  "headings skipped (H1 to H4)"
                ]
              }
            },
            callout: {
              type: "tip",
              title: "Measure and the three-click rule",
              body: "Keep line length between 50 and 75 characters (the measure), and let any page be reachable within three clicks from home - relax the rule only for very deep hierarchies where breadcrumbs replace clicks."
            },
            examQuestions: [
              {
                q: "Explain look and feel, page layout and linking with reference to effective web design.",
                marks: 7,
                outline: [
                  "Define look and feel: palette, typography, imagery, tone",
                  "The classic grid: header, content + sidebar, footer",
                  "Typography rules: two families, readable measure",
                  "Document outline and heading discipline",
                  "Linking: meaningful link text, inward links, no orphan pages",
                  "Consistency across all pages",
                  "Micro-copy tone"
                ]
              },
              {
                q: "What is meant by the look and feel of a website?",
                marks: 2
              },
              {
                q: "Why should link text never be 'click here'? Give two reasons.",
                marks: 3
              }
            ],
          },
          {
            number: "1.8",
            title: "User-centric design",
            body: [
              "User-centric design (UCD) flips the perspective: instead of asking 'what can I build?', it asks 'what does the user need to accomplish?' and designs backwards from that answer. The ISO 9241-210 standard defines UCD as an approach where systems are designed around the needs, wants and limitations of end-users rather than the technical convenience of the builder. Its cycle is iterative rather than linear: research the users (interviews, surveys, personas, usage scenarios), specify the tasks they must complete and the success criteria for each, design for those tasks (sketches, wireframes, prototypes), evaluate with real users (usability testing — watch where they hesitate, where they look first, where they click wrong), and iterate back to research. The cycle runs throughout the project, not once at the start.",
              "UCD's laws of thumb come from Jakob Nielsen's heuristics and Steve Krug's 'Don't Make Me Think'. Don't make me think: self-evident buttons and labels, no learning curve for the common case. Respect conventions: the cart icon goes top-right, the logo links home, underlined text is clickable — inventing new conventions costs adoption. Forgive errors: undo where possible, confirm destructive actions, and write clear messages that name the problem and the fix. Don't ask for what you don't need: every extra form field loses users (the form-conversion drop-off per field is roughly 5–10%). Match the system to the real world: use words and concepts the user already knows, not internal jargon. Keep the user in control: visible state, predictable outcomes, easy escape.",
              "Usability testing is the engine of UCD and does not require a lab. The discount method: recruit five users (Nielsen's famous finding — five users catch 85% of usability problems), give them a task ('find the price of the blue shirt in size M'), watch them attempt it without prompting, record where they hesitate or fail, then fix the top problems and retest. The method is fast (a day), cheap (no equipment beyond a screen recorder), and reveals problems no amount of self-review will find. Every hesitation is a design bug wearing a disguise: the label is unclear, the button is in the wrong place, the form rejected input without saying why.",
              "The contrast with the opposite approach makes the principle sharp. System-centric design asks 'what is easiest to build?', produces admin panels that only the developer can use, and treats users as an afterthought. Designer-centric design asks 'what looks impressive in a portfolio?', produces beautiful unusable sites (splash screens, mystery-meat navigation, low-contrast text), and treats users as audience. User-centric design asks 'what does the user need to accomplish?', produces Amazon and Google and Wikipedia, and treats users as the boss. The exam answer for a 7-mark question: define UCD as iterative design around user needs (ISO 9241-210), draw the research→specify→design→evaluate→iterate cycle, list four heuristics with examples, and close with the discount usability test method (5 users, give tasks, watch, fix).",
            ],
            diagram: {
              kind: "cycle",
              title: "The UCD cycle",
              caption: "ISO 9241-210 — research, specify, design, evaluate, iterate. The loop runs throughout the project.",
              steps: [
                { label: "Research", note: "interviews · personas · scenarios" },
                { label: "Specify", note: "tasks · success criteria" },
                { label: "Design", note: "sketches · wireframes · prototypes" },
                { label: "Evaluate", note: "usability test with real users" },
                { label: "Iterate", note: "fix · re-test · loop back" },
              ],
            },
            keyTerms: [
              { term: "UCD", definition: "User-Centric Design — ISO 9241-210 approach where systems are designed around end-user needs, not builder convenience." },
              { term: "Persona", definition: "A fictional user profile representing a target audience segment, used to ground design decisions." },
              { term: "Usability test", definition: "Watching real users attempt tasks; five users catch ~85% of usability problems (Nielsen)." },
              { term: "Heuristics", definition: "Nielsen's usability rules of thumb — e.g. 'don't make me think', 'forgive errors', 'match the real world'." },
            ],
            bullets: [
              "UCD designs backwards from what the user needs to accomplish (ISO 9241-210).",
              "Iterative cycle: research, specify, design, evaluate, iterate - throughout the project.",
              "Don't make me think: self-evident buttons and labels; respect conventions (logo links home).",
              "Personas and scenarios turn research into concrete design targets.",
              "Discount usability testing: five users catch about 85% of usability problems.",
              "System-centric and designer-centric approaches are the contrasts to name in the exam."
            ],
            callout: {
              type: "tip",
              title: "The five-user rule",
              body: "Nielsen's finding: five test users uncover roughly 85% of usability problems. Testing is cheap - a laptop, five strangers and one task each beat any committee's opinion."
            },
            examQuestions: [
              {
                q: "What is user-centric design? Explain its process with a neat diagram.",
                marks: 7,
                outline: [
                  "Define UCD (ISO 9241-210), contrast with system-centric design",
                  "Draw the UCD cycle: research, specify, design, evaluate, iterate",
                  "Research: interviews, personas, scenarios",
                  "Specify: tasks and success criteria",
                  "Design: sketches, wireframes, prototypes",
                  "Evaluate: usability tests with real users, fix and loop",
                  "Nielsen heuristics / 'Don't make me think'"
                ]
              },
              {
                q: "What is a persona in user-centric design?",
                marks: 2
              },
              {
                q: "Explain the discount usability-testing method (users, tasks, observations).",
                marks: 3
              }
            ],
          },
          {
            number: "1.9",
            title: "Sitemaps",
            body: [
              "A sitemap is the plan of the site's structure, drawn before pages exist: a diagram of every page as a box and every navigation path as an arrow, organized in hierarchy levels — home at the top, sections below it, pages below them. It is the architect's blueprint: it forces decisions about what belongs together, how deep the site is, and which pages are reachable from where, before a single line of HTML is written. The output becomes the contract from which navigation menus, wireframes, folder structures and URL paths are all derived — a notes page under the Notes section lives at /notes/42 because the sitemap put Notes at level 1 and a single note at level 2.",
              "Two species matter, and the exam answer should name both. The planning sitemap is the designer's human-readable blueprint — boxes and arrows on paper or in a diagram tool, showing sections, page counts and link structure. It is drawn during Unit I's planning phase (§1.10) and reviewed before any build. The search-engine sitemap is a machine-readable list of URLs submitted to Google (and Bing) via sitemap.xml so crawlers find every page, including ones with no inbound links. A minimal sitemap.xml lists each URL with its last-modified date and change frequency; it lives at the site root (https://scribbly.in/sitemap.xml) and is referenced in robots.txt and registered in Google Search Console.",
              "A worked sitemap.xml fragment makes the theory concrete. <?xml version=\"1.0\" encoding=\"UTF-8\"?> <urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"> <url><loc>https://scribbly.in/</loc><priority>1.0</priority></url> <url><loc>https://scribbly.in/notes</loc><lastmod>2024-09-15</lastmod><priority>0.8</priority></url> <url><loc>https://scribbly.in/notes/42</loc><lastmod>2024-09-15</lastmod><priority>0.6</priority></url> </urlset>. The structure is XML (Unit IV), each <url> is one page, the priority is a hint to the crawler about relative importance (0.0–1.0). This is the link between Unit I's planning sitemap and Unit IV's XML — the same notation serves both.",
              "The planning sitemap and the search-engine sitemap are different artifacts with the same name and should not be confused. The planning sitemap is a visual diagram for humans, drawn before build, used to derive navigation and folder structure. The search-engine sitemap is an XML file for crawlers, generated after build, used to ensure complete indexing. For a 7-mark answer: define a sitemap, distinguish the two species with one example each, sketch a three-level planning sitemap (Home → Notes/Tutorials/About → individual pages), and write one sitemap.xml <url> entry. Close with the role of sitemap.xml in SEO — it accelerates indexing and ensures orphan pages are found.",
            ],
            diagram: {
              kind: "layers",
              title: "A planning sitemap",
              caption: "Boxes are pages, arrows are navigation — the contract every menu and link list is built from.",
              layers: [
                { label: "Home", note: "level 0 — the front door" },
                { label: "Notes · Tutorials · About", note: "level 1 sections" },
                { label: "Create · List · Tag · HTML · CSS · PHP", note: "level 2 pages" },
              ],
            },
            keyTerms: [
              { term: "Planning sitemap", definition: "A visual diagram of pages and navigation paths drawn before build; the designer's blueprint." },
              { term: "sitemap.xml", definition: "A machine-readable XML list of URLs submitted to search engines so crawlers find every page." },
              { term: "robots.txt", definition: "A file at the site root telling crawlers which paths they may or may not index." },
              { term: "Orphan page", definition: "A page with no inbound links from inside the site — reachable only via direct URL or sitemap.xml." },
            ],
            bullets: [
              "A sitemap is the site's structure drawn before pages exist: boxes are pages, arrows are paths.",
              "Planning sitemap: human-readable blueprint used to derive navigation and folder structure.",
              "Search-engine sitemap: sitemap.xml, an XML file listing URLs, priorities and change frequency.",
              "Submitted to Google Search Console so crawlers find every page.",
              "robots.txt complements it: allows or disallows crawler access per path.",
              "Orphan pages (nothing links to them) are the defect a sitemap catches early."
            ],
            codeExample: {
              language: "xml",
              caption: "sitemap.xml - the search-engine sitemap",
              code: "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>\n  <url>\n    <loc>https://scribbly.in/</loc>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://scribbly.in/notes</loc>\n    <priority>0.8</priority>\n  </url>\n</urlset>"
            },
            callout: {
              type: "tip",
              title: "Two sitemaps, one name",
              body: "The planning sitemap is a diagram for humans drawn before the build. The XML sitemap is a machine file for crawlers drawn after it. Confusing the two in the exam costs marks."
            },
            examQuestions: [
              {
                q: "What is a sitemap? Differentiate the planning sitemap and the search-engine sitemap with an example of sitemap.xml.",
                marks: 7,
                outline: [
                  "Define a sitemap as the plan of site structure",
                  "Planning sitemap: boxes and arrows, drawn pre-build",
                  "Uses: derive navigation, folder structure, spot orphan pages",
                  "Search-engine sitemap: sitemap.xml, XML format",
                  "Structure: urlset / url / loc / priority",
                  "Submission via Search Console; robots.txt companion",
                  "Worked fragment of sitemap.xml"
                ]
              },
              {
                q: "What is robots.txt used for?",
                marks: 2
              },
              {
                q: "Write a sitemap.xml fragment listing two pages of a site.",
                marks: 3
              }
            ],
          },
          {
            number: "1.10",
            title: "Planning and publishing a website",
            body: [
              "A website that ships is a website that was planned. The standard SDLC-for-the-web phases: define (purpose, audience, success criteria — measurable, like '7 out of 10 users can create a note in under 30 seconds'), plan (sitemap, content inventory, technology choice — this course's stack: HTML, CSS, JavaScript, PHP, MySQL), design (wireframes first, then the look and feel), build (pages and code, tested in browsers), test (links, forms, speeds, spelling, accessibility), and publish. Skipping any phase to save time pays the cost back twice over — a site built without a sitemap grows into an unnavigable tangle, a site built without wireframes grows into an inconsistent patchwork.",
              "Publishing means renting a domain name (the human address), buying hosting (a server reachable day and night), uploading the files, pointing the domain's DNS at the host, and registering with search engines. The domain name is rented annually from a registrar (GoDaddy, Namecheap, Google Domains); the host comes in four flavours with different cost and capability. Shared hosting (₹100–500/month) puts your site on a machine with hundreds of others — cheap but slow and limited. A VPS (₹500–3000/month) gives you a virtual machine to yourself — full control, more work. Cloud platforms (AWS, GCP, Azure) bill per use and scale infinitely — professional but complex. Managed platforms (Vercel, Netlify, Cloudflare Pages) specialise in static and JAMstack sites — free or near-free for small projects.",
              "The DNS handshake is the step students under-explain. When a visitor types https://scribbly.in into a browser, DNS (the Domain Name System) translates that human hostname into the server's IP address (say 13.232.84.51) by walking a hierarchy of name servers: the root servers (.in), the TLD servers (.in), the authoritative servers for scribbly.in (which return the A record). The browser then opens a TCP connection to that IP on port 443, performs the TLS handshake for HTTPS, and sends the HTTP request. The DNS records most sites need: A (hostname → IPv4), AAAA (→ IPv6), CNAME (alias to another hostname), MX (mail servers), TXT (verification, SPF, DKIM). DNS changes propagate over hours to a day because of caching at every level.",
              "The post-publish steps everyone forgets: register with search engines (submit sitemap.xml in Google Search Console), set up analytics (Google Analytics or a privacy-respecting alternative like Plausible) so you learn what visitors actually do, and start maintenance. A website is not finished, only deployed: security updates (PHP, MySQL, the OS), content updates, backups (the .sql export of the database, the files on the server), monitoring (uptime, error rate), and iterative improvement from the analytics. For the exam, name the six SDLC phases, list the four hosting types with one trait each, sketch the DNS resolution walk (root → TLD → authoritative → A record), and close with the post-publish trinity — submit sitemap, install analytics, start maintenance.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Publishing a website",
              caption: "From define to maintain — the seven phases that ship a site and keep it alive.",
              stages: [
                { label: "Define", note: "purpose · audience · success criteria" },
                { label: "Plan", note: "sitemap · stack choice" },
                { label: "Design", note: "wireframes · look and feel" },
                { label: "Build", note: "HTML · CSS · JS · PHP · MySQL" },
                { label: "Test + Publish", note: "links · forms · then domain · DNS · upload" },
                { label: "Maintain", note: "updates · backups · analytics" },
              ],
            },
            keyTerms: [
              { term: "Domain name", definition: "The human-readable hostname (scribbly.in), rented annually from a registrar." },
              { term: "Hosting", definition: "A server reachable 24/7 — shared, VPS, cloud, or managed platform." },
              { term: "DNS", definition: "Domain Name System — translates hostnames to IP addresses via root → TLD → authoritative servers." },
              { term: "A record", definition: "DNS record mapping a hostname to an IPv4 address." },
              { term: "VPS", definition: "Virtual Private Server — a virtual machine dedicated to one customer, full root control." },
            ],
            bullets: [
              "SDLC for the web: define, plan, design, build, test, publish, maintain.",
              "Define measurable success criteria ('7 of 10 users create a note in 30 seconds').",
              "Publishing = rent a domain from a registrar, buy hosting, upload files, point DNS at the host.",
              "DNS walks the hierarchy: resolver, root/TLD server, authoritative server returns the A record.",
              "Post-publish: submit sitemap.xml, install analytics, back up and update regularly.",
              "The A record is the DNS entry that maps the hostname to the server's IP address."
            ],
            callout: {
              type: "tip",
              title: "Domain first, hosting second",
              body: "Buy the domain before you build - good names disappear - and keep domain, DNS and hosting in accounts you control, not the developer's, so you can move hosts without losing the address."
            },
            examQuestions: [
              {
                q: "Explain the steps involved in planning and publishing a website.",
                marks: 7,
                outline: [
                  "The seven phases: define, plan, design, build, test, publish, maintain",
                  "Define: purpose, audience, measurable success criteria",
                  "Plan: sitemap, content inventory, technology choice",
                  "Test: links, forms, speed, accessibility",
                  "Publish: domain registration, hosting, file upload",
                  "DNS resolution: hostname to IP via the A record",
                  "Post-publish: search submission, analytics, backups"
                ]
              },
              {
                q: "What is a domain name and from where is it obtained?",
                marks: 2
              },
              {
                q: "Explain how DNS resolves a hostname into an IP address.",
                marks: 3
              }
            ],
            codeExample: {
              language: "dns",
              caption: "A DNS zone file fragment - the A record that publishes a site",
              code: "$ORIGIN scribbly.in.\n$TTL 3600\n@       IN  SOA ns1.scribbly.in. admin.scribbly.in. (\n            2024010101 ; serial\n            3600       ; refresh\n        )\n@       IN  NS   ns1.scribbly.in.\n@       IN  A    13.232.84.51     ; the host's IP address\nwww     IN  A    13.232.84.51     ; www maps to the same server\n@       IN  MX   10 mail.scribbly.in.  ; email goes elsewhere"
            },
          },
          {
            number: "1.11",
            title: "Designing effective navigation",
            body: [
              "Navigation is the site's steering wheel — if it confuses, nothing else matters. The rules of effective navigation: be consistent (same place, same look on every page — the global menu should not jump from top to left between pages), be obvious (labels name destinations, not clever puns — 'Notes' beats 'Brain dumps'), show where you are (highlight the current section in the menu, add breadcrumbs like Home › Notes › Exam prep that orient the user and help SEO), show where you can go (menus, related links, next-step prompts), and offer an escape hatch (the logo links home; a search box rescues the lost). A visitor who cannot answer 'where am I, where can I go, how do I get back' in under a second has already started looking for the back button.",
              "Standard navigation patterns solve most sites, and naming them earns marks. The global menu (top horizontal bar) carries the 4–7 primary sections; the sidebar carries secondary navigation within a section; breadcrumbs under the header show the path from home to the current page; the footer carries the full sitemap as a list of links (the 'escape hatch of last resort'); the search box is a navigation shortcut for users who know what they want. A single page may use several of these together: a blog post lives under Home › Blog › 2024 › Post title (breadcrumbs), has a global menu (Home · About · Blog · Contact), a sidebar of recent posts and categories, a footer with the full archive, and a search box top-right. The patterns compose.",
              "Breadcrumbs deserve their own paragraph because they earn three marks in one feature. They orient the user (where am I in the hierarchy), they offer one-click navigation up the tree (Home › Notes › Exam prep — each segment is a link), and they help SEO (search engines use breadcrumb paths to understand site structure and may display them in SERP snippets instead of raw URLs). The markup pattern is HTML5's <nav> with an ordered list, optionally marked up with BreadcrumbList schema.org JSON-LD for richer search results. The visual style is small text, with › or / separators, placed under the header and above the page title.",
              "Test navigation by watching one stranger use the site without help — every hesitation is a design bug wearing a disguise. The discount usability test from §1.8 applies directly: give five users a task ('find the price of the PHP course'), watch them, and fix the top three problems. Common failures: mystery-meat navigation (links whose meaning is unclear until hover), dropdown menus that close too fast to click, search boxes that return zero results for the obvious query, and orphaned landing pages with no link back to the section. For a 7-mark answer: list the five rules (consistent, obvious, show where you are, show where you can go, escape hatch), name four patterns (global menu, sidebar, breadcrumbs, footer sitemap, search), explain breadcrumbs' triple value (orientation, navigation, SEO), and close with the watch-one-stranger test.",
            ],
            keyTerms: [
              { term: "Global menu", definition: "The top horizontal navigation bar carrying the 4–7 primary site sections, consistent on every page." },
              { term: "Breadcrumbs", definition: "A path trail (Home › Section › Page) under the header — orients users, offers up-tree navigation, helps SEO." },
              { term: "Three-click rule", definition: "Rule of thumb — any page should be reachable in about three clicks from the home page." },
              { term: "Orphan page", definition: "A page with no inbound navigation links; reachable only via direct URL or search." },
            ],
            callout: {
              type: "exam",
              title: "Breadcrumbs = 3 marks in one feature",
              body: "State three values: orient the user (where am I), offer up-tree navigation (one-click up), help SEO (search engines read breadcrumb paths). Markup with HTML5 <nav> + ordered list.",
            },
            bullets: [
              "Navigation rules: consistent place and look, obvious labels, visible current location.",
              "Global menu carries the 4-7 primary sections; sidebar carries section-local links.",
              "Breadcrumbs orient the user, offer one-click upward travel, and help SEO.",
              "Three-click rule: any page reachable in three clicks (relax with breadcrumbs on deep sites).",
              "Search box for content-heavy sites; sitemap/footer links as the safety net.",
              "Test by watching one stranger attempt a task without help - every hesitation is a bug."
            ],
            diagram: {
              kind: "flow",
              title: "Designing navigation in five moves",
              caption: "Structure first, labels second, testing always.",
              steps: [
                {
                  label: "Inventory pages",
                  note: "list everything the site contains"
                },
                {
                  label: "Group into sections",
                  note: "4-7 top-level buckets"
                },
                {
                  label: "Choose patterns",
                  note: "global menu, sidebar, breadcrumbs"
                },
                {
                  label: "Write clear labels",
                  note: "destination names, not clever ones"
                },
                {
                  label: "Test with users",
                  note: "five strangers, one task each"
                }
              ]
            },
            examQuestions: [
              {
                q: "Explain the principles of designing effective navigation for a website.",
                marks: 7,
                outline: [
                  "Consistency: same place, same look on every page",
                  "Obvious labels naming destinations",
                  "Global menu, sidebar navigation, breadcrumbs - when each fits",
                  "Breadcrumbs: orientation, upward links, SEO benefit",
                  "Three-click rule and its relaxation",
                  "Search for content-heavy sites; avoid orphan pages",
                  "Usability testing of navigation"
                ]
              },
              {
                q: "What are breadcrumbs in web navigation?",
                marks: 2
              },
              {
                q: "State the three-click rule and mention when it may be relaxed.",
                marks: 3
              }
            ],
            codeExample: {
              language: "html",
              caption: "nav.html - global menu, breadcrumbs and current-location cue",
              code: "<header>\n  <nav aria-label='Global'>\n    <ul class='menu'>\n      <li><a href='/'>Home</a></li>\n      <li><a href='/notes' aria-current='page'>Notes</a></li>\n      <li><a href='/tutorials'>Tutorials</a></li>\n      <li><a href='/about'>About</a></li>\n    </ul>\n  </nav>\n  <nav aria-label='Breadcrumb'>\n    <a href='/'>Home</a> &gt; <a href='/notes'>Notes</a>\n    &gt; Exam prep\n  </nav>\n</header>"
            },
          },
        ],
      },
    },
    {
      number: 2,
      roman: "II",
      title: "HTML, Browsers & Client-Side Scripting",
      summary:
        "Unit II is the language of the page: every core HTML element from fonts to forms, XHTML discipline, meta tags and character entities, frames and framesets, the HTML5 wave and web sockets, MIME types, cookies and session tracking, and a look inside the browser itself.",
      chapter: {
        number: "02",
        title: "HTML & the Client Side",
        intro:
          "Unit II covers HTML basics, formatting, colour, hyperlinks, lists, tables, images, forms, XHTML, meta tags and entities, frames, browser architecture, HTML5 and web sockets, MIME types, sessions and cookies, browser plug-ins and search engines, JavaScript and regex, and web servers.",
        inOneBreath:
          "HTML describes structure with paired tags; formatting, lists, tables, images and forms are the core elements; XHTML is HTML-as-strict-XML; meta tags describe the document; frames are dead but iframes survive; HTML5 added semantics, multimedia and web sockets; MIME labels bytes; cookies identify and sessions remember; JavaScript and regex bring client-side behaviour; Apache and Nginx serve.",
        sections: [
          {
            number: "2.1",
            title: "Basics of HTML",
            body: [
              "HTML — HyperText Markup Language — describes a page's structure, not its looks: a system of tags written in angle brackets that mark what each piece of content is. Tags usually come in pairs — an opening <p> and a closing </p> — wrapping the content they describe; some are void elements with no closing tag (<img>, <br>, <input>) because they carry no inner content. Elements can carry attributes — name=\"value\" pairs inside the opening tag (<a href=\"…\">) — that configure behaviour; the attribute's value is always quoted in HTML5. The document skeleton never changes: a <!DOCTYPE html> declaration telling the browser to use standards mode, one root <html> element containing a <head> (the invisible metadata — title, charset, link to CSS) and a <body> (the visible content the user sees and interacts with).",
              "HTML is a markup language, not a programming language: there are no variables, no loops, no conditionals, no logic. It only labels content — this is a heading, this is a paragraph, this is a link. Any logic in a page comes from JavaScript (Unit III) or PHP (Unit IV); HTML is the static skeleton underneath both. The language has evolved through major versions: HTML 2.0 (1995), HTML 3.2 (1997), HTML 4.01 (1999), the dead-end XHTML (§2.9), and HTML5 (2014, now a living standard maintained by WHATWG). Each version added elements and refined parsing, but the core idea — tags labelling content — has not changed since Tim Berners-Lee's first 1990 proposal.",
              "A subtle but exam-critical rule: HTML ignores extra whitespace and line breaks in source code. Ten spaces between two words collapse to one when rendered; ten blank lines collapse to one paragraph break. Indentation is for the human reading your source, not the browser. Layout — spacing, alignment, columns, position — is the stylesheet's job (Unit III), a separation of concerns that lets one HTML file restyle a thousand pages by swapping CSS. This is why mixing layout into HTML (<font> tags, table-based layouts, the align attribute) is legacy HTML 4 practice, dead in modern code.",
              "The first page you write is the skeleton above, plus a heading and a paragraph. Run it by opening the .html file in a browser (no server needed for static HTML). View the rendered page, then right-click → View Page Source to see the original markup — the browser never modifies the source, only interprets it. For a 7-mark answer on HTML basics: define HTML as a structure-describing markup language (not programming), state the doctype + html + head + body skeleton, explain tags/elements/attributes with one example each, name the void elements, and close with the whitespace-collapse rule and the separation of structure (HTML) from presentation (CSS).",
            ],
            codeExample: {
              language: "html",
              caption: "skeleton.html — the document anatomy",
              code: `<!DOCTYPE html>
<html>
<head>
  <title>Scribbly — first page</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1>My notes</h1>
  <p>Hello, web — my first paragraph.</p>
</body>
</html>`,
            },
            keyTerms: [
              { term: "HTML", definition: "HyperText Markup Language — tags label content's structure, not appearance. Not a programming language." },
              { term: "Element", definition: "A tag pair (opening + closing) plus the content it wraps, e.g. <p>text</p>." },
              { term: "Void element", definition: "An element with no closing tag because it carries no inner content — <img>, <br>, <input>, <hr>." },
              { term: "Attribute", definition: "A name=\"value\" pair inside the opening tag that configures the element, e.g. <a href=\"...\">." },
              { term: "DOCTYPE", definition: "The <!DOCTYPE html> declaration that tells the browser to render in standards mode." },
            ],
            bullets: [
              "HTML describes structure, not looks: tags mark what each piece of content is.",
              "Tags usually pair (<p>...</p>); void elements (<br>, <img>) have no closing tag.",
              "Attributes configure elements: name='value' inside the opening tag.",
              "Markup, not programming: no variables, loops or logic in HTML itself.",
              "HTML collapses extra whitespace - indentation is for humans, not the renderer.",
              "Every document: DOCTYPE, one <html>, a <head> of metadata and a <body> of content."
            ],
            diagram: {
              kind: "layers",
              title: "Anatomy of an HTML document",
              caption: "Each layer nests inside the one above it - exactly how the browser parses the file.",
              layers: [
                {
                  label: "<!DOCTYPE html>",
                  note: "declares the HTML5 dialect"
                },
                {
                  label: "<html>",
                  note: "the single root element"
                },
                {
                  label: "<head>",
                  note: "title, meta, styles - not displayed"
                },
                {
                  label: "<body>",
                  note: "everything the visitor sees"
                }
              ]
            },
            callout: {
              type: "tip",
              title: "View Source is your textbook",
              body: "Open any page, right-click and choose View Page Source: the original markup appears. Comparing source with the rendered page is the fastest way to learn what each tag does."
            },
            examQuestions: [
              {
                q: "What is HTML? Explain the basic structure of an HTML document with an example.",
                marks: 7,
                outline: [
                  "Define HTML as a markup language for structure",
                  "Markup vs programming language",
                  "Parts: DOCTYPE, html root, head metadata, body content",
                  "Paired tags, void elements, attributes",
                  "Whitespace collapse rule",
                  "Complete worked skeleton page",
                  "How to open and view source"
                ]
              },
              {
                q: "What is a void element? Give two examples.",
                marks: 2
              },
              {
                q: "Differentiate the <head> and <body> sections of an HTML page.",
                marks: 3
              }
            ],
          },
          {
            number: "2.2",
            title: "Formatting, fonts and comments",
            body: [
              "Formatting tags shape text into the document outline and inline emphasis. Headings <h1>–<h6> form the outline: one <h1> per page (the page's main topic), <h2> for major sections, <h3> for sub-sections, down to <h6>; never skip levels (no <h1> straight to <h3>), because the outline is what screen readers navigate and search engines index. <p> marks paragraphs of body text, <br> forces a line break inside one, <hr> draws a thematic break between sections. Block-level elements (headings, paragraphs, lists, tables, divs) start on a new line and fill their container's width; inline elements (spans, strong, em, code) flow within a line and take only the width of their content.",
              "Two families style inline text, and the contrast is an exam favourite. Physical (presentational) tags say how text looks: <b> bold, <i> italic, <u> underline, <tt> monospace, <sup>/<sub> for x²-style super- and sub-scripts, <strike> for strikethrough. Logical (semantic) tags say what the text means and let the browser or stylesheet choose the rendering: <strong> (important — usually bold), <em> (emphasized — usually italic), <mark> (highlighted), <code> (source code — monospace), <small> (side comment), <cite> (citation title), <abbr> (abbreviation). Semantic tags are preferred because they preserve meaning for screen readers (a blind user hears emphasis, not just a louder voice) and for search engines parsing content. In HTML5 the presentational tags <b> and <i> were redefined as 'stylistically offset' and 'alternate voice' — preserved for compatibility but with semantic intent.",
              "The font family itself is configured through the legacy <font face=\"…\" size=\"…\" color=\"…\"> tag of HTML 4 — a presentational tag embedded directly in the document. This is exactly the wrong approach modern pages reject: face lives in CSS (font-family), size in CSS (font-size), color in CSS (color), so the HTML stays pure structure and one styles.css can restyle every page. The <font> tag was deprecated in HTML 4.01 and removed from HTML5; using it in an exam answer costs marks for outdated practice. The same fate met <center>, <big>, <basefont>, the bgcolor attribute on <body>, and the align attribute on most elements — all moved to CSS.",
              "Finally, commenting code: a comment — <!-- explanation --> — is invisible in the browser but invaluable to humans reading source, and invaluable to you six months later when you forget why a div was nested. Comments also temporarily disable a block while debugging — wrap the suspect code in <!-- … --> and the browser skips it without deleting it. The professional habit is to comment the why, not the what: 'this layout breaks below 600px — see mobile.css' is useful; '<!-- heading -->' above an <h2>Heading</h2> is noise. For a 7-mark answer: name the heading levels and the outline rule, distinguish physical vs logical tags with one example each and state why logical wins, declare <font> legacy, and close with the comment syntax and its two uses (documentation and debugging).",
            ],
            keyTerms: [
              { term: "Document outline", definition: "The heading hierarchy (h1 → h6) — never skip levels; it's what screen readers and SEO navigate." },
              { term: "Physical tag", definition: "Presentational HTML tag (<b>, <i>, <u>) that says how text looks; legacy in modern code." },
              { term: "Logical tag", definition: "Semantic HTML tag (<strong>, <em>, <code>) that says what text means; preferred for accessibility and SEO." },
              { term: "Block vs inline", definition: "Block elements (p, h1, div) start on a new line and fill width; inline elements (span, strong) flow within a line." },
            ],
            bullets: [
              "Headings h1-h6 form the document outline; one h1 per page, never skip levels.",
              "Physical tags say how text looks: <b>, <i>, <u>, <tt>, <sup>, <sub>, <strike>.",
              "Logical tags say what text means: <strong>, <em>, <cite>, <code>, <kbd>, <var>.",
              "Prefer logical tags - screen readers and search engines read the meaning.",
              "The legacy <font face size color> tag is deprecated; face, size and colour belong in CSS.",
              "Comments <!-- ... --> are invisible in the browser and disable code while debugging."
            ],
            diagram: {
              kind: "compare",
              title: "Physical vs logical formatting tags",
              caption: "Same visible result, different meaning for machines.",
              left: {
                heading: "Physical (presentational)",
                items: [
                  "<b> bold, <i> italic",
                  "<u> underline, <strike> strike",
                  "<sup>/<sub> scripts",
                  "say HOW text looks",
                  "no meaning for assistive tech"
                ]
              },
              right: {
                heading: "Logical (semantic)",
                items: [
                  "<strong> strong importance",
                  "<em> emphasis",
                  "<cite> title, <code> code",
                  "say WHAT text means",
                  "read by screen readers and SEO"
                ]
              }
            },
            codeExample: {
              language: "html",
              caption: "format.html - headings, physical and logical tags, a comment",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Formatting</title></head>\n<body>\n  <!-- the outline: one h1, then h2 -->\n  <h1>HTML Formatting</h1>\n  <h2>Physical tags</h2>\n  <p><b>Bold</b>, <i>italic</i>, <u>underline</u>, H<sub>2</sub>O, x<sup>2</sup>.</p>\n  <h2>Logical tags</h2>\n  <p><strong>Warning</strong> is <em>important</em>; read the <code>README</code>.</p>\n</body>\n</html>"
            },
            callout: {
              type: "exam",
              title: "The b/i vs strong/em contrast",
              body: "Examiners ask it every year: b and i are presentational, strong and em are semantic. Write one sentence on accessibility ('a screen reader stresses strong, ignores b') to collect the mark."
            },
            examQuestions: [
              {
                q: "Explain HTML formatting tags. Differentiate physical and logical tags with examples.",
                marks: 7,
                outline: [
                  "Heading tags h1-h6 and the document outline",
                  "Physical tags: b, i, u, tt, sup, sub, strike",
                  "Logical tags: strong, em, cite, code, kbd, var",
                  "Contrast table: appearance vs meaning",
                  "Why logical tags aid accessibility and SEO",
                  "The deprecated <font> tag and the CSS migration",
                  "Comments and their uses"
                ]
              },
              {
                q: "Which tags render superscript and subscript text?",
                marks: 2
              },
              {
                q: "Write HTML for a paragraph using bold, italic and underline, preceded by a comment.",
                marks: 3
              }
            ],
          },
          {
            number: "2.3",
            title: "Color in HTML",
            body: [
              "HTML colors are specified three ways, all interchangeable. Named colors: 140 reserved words — 'red', 'teal', 'AliceBlue', 'Tomato' — convenient but limited and imprecise. Hexadecimal: #RRGGBB — two hex digits (00–FF) per red, green and blue channel, as in #e8955c; a three-digit shorthand #RGB expands each digit so #f00 equals #ff0000. Functional: rgb(232, 149, 92) with decimal channels 0–255, plus its modern extensions rgba(232, 149, 92, 0.5) for transparency (the fourth value is alpha, 0 fully transparent, 1 fully opaque) and hsl(26, 75%, 62%) for hue-saturation-lightness thinking that designers find more intuitive.",
              "Screen color is additive, the key exam concept. Each pixel emits red, green and blue light; the colour you see is the sum of those three channels. #000000 is all channels off — no light at all — which renders as black. #ffffff is all channels full — maximum light from all three — which renders as white. Equal channels give greys: #888888 is mid-grey, #cccccc is light grey, #333333 is dark grey. A pure red is #ff0000 (red full, green and blue off); a pure green is #00ff00; a pure blue is #0000ff. Secondary colours by addition: red + green = yellow (#ffff00), red + blue = magenta (#ff00ff), green + blue = cyan (#00ffff). This is the opposite of paint, where colours are subtractive and mixing all gives black.",
              "The hex arithmetic is worth a worked example. Each channel is two hex digits, where 00 = 0 and FF = 255 in decimal, so a colour's hex value packs three 0–255 values into six digits. To convert #e8955c to RGB: e8 = 14×16 + 8 = 232 (red), 95 = 9×16 + 5 = 149 (green), 5c = 5×16 + 12 = 92 (blue), giving rgb(232, 149, 92) — a warm orange-brown. The exam favourite: 'why is #00ff00 green?' — because the red and blue channels are 00 (off) and the green channel is ff (full), so only green light is emitted. Equally: '#ffffff is white because all three additive primaries are at maximum.'",
              "Designers live in hex because hex strings copy cleanly between CSS, HTML attributes, image-editing software and design tools; rgb() and hsl() are used when you need to compute colours (a JavaScript function generating a colour palette) or reason about them (hsl's hue is a single knob for cycling a colour wheel). RGBA's alpha enables layering: a 50%-transparent red panel over a photo tints rather than hides the image. For a 7-mark answer: name the three formats (named, hex, functional), explain additive colour with the #000/#fff/greys example, convert one hex to RGB arithmetically, and close with why hex is the designer default and when rgb/hsl/rgba are preferred.",
            ],
            callout: {
              type: "exam",
              title: "The additive-colour question",
              body: "State the rule: screen colour is additive — channels add light, #000 is no light (black), #fff is all light (white), equal channels give greys. Then answer any specific colour: #00ff00 is green because R=00, G=ff, B=00 — only green light emitted.",
            },
            keyTerms: [
              { term: "Hex color", definition: "#RRGGBB — two hex digits (00–FF) per RGB channel; the designer default." },
              { term: "Additive color", definition: "Screen colour model — channels add light; #000000 = black (no light), #ffffff = white (all full)." },
              { term: "RGB", definition: "Red-Green-Blue — the three additive primaries; values 0–255 per channel." },
              { term: "Alpha", definition: "The opacity channel in rgba() — 0 transparent, 1 opaque." },
            ],
            bullets: [
              "Three interchangeable notations: named colors, hex #RRGGBB, and rgb(r,g,b) / rgba().",
              "Each hex pair is one channel from 00 (0) to FF (255).",
              "Screen color is additive: red + green + blue light; #000000 is no light (black), #ffffff is all light (white).",
              "#e8955c decodes to red 232, green 149, blue 92.",
              "hsl(h,s,l) reasons about hue and saturation; rgba adds the alpha channel for transparency.",
              "Designers copy hex strings cleanly between tools; rgb()/hsl() suit computed colours."
            ],
            diagram: {
              kind: "compare",
              title: "Naming a color: names vs hex",
              caption: "Convenient words vs precise arithmetic - both end in the same pixel.",
              left: {
                heading: "Named colors",
                items: [
                  "140 reserved words",
                  "'red', 'teal', 'Tomato'",
                  "easy to remember",
                  "imprecise and limited",
                  "fine for prototypes"
                ]
              },
              right: {
                heading: "Hex / rgb()",
                items: [
                  "16.7 million colours",
                  "#e8955c = rgb(232,149,92)",
                  "copy-paste between tools",
                  "additive channels: R+G+B",
                  "rgba() adds transparency"
                ]
              }
            },
            codeExample: {
              language: "html",
              caption: "color.html - three ways to paint text and background",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Colors</title></head>\n<body bgcolor='#f6f2ec'>\n  <h1><font color='#e8955c'>Warm heading</font></h1>\n  <p style='color: rgb(43,29,18)'>Functional notation paragraph.</p>\n  <p style='color: teal'>A named colour paragraph.</p>\n  <p style='color: rgba(0,0,0,0.6)'>Semi-transparent grey text.</p>\n</body>\n</html>"
            },
            examQuestions: [
              {
                q: "Explain the different ways of specifying colour in HTML. Why is screen colour called additive?",
                marks: 7,
                outline: [
                  "Named colors: 140 words, convenient but limited",
                  "Hex #RRGGBB: two digits per channel, 00-FF",
                  "rgb() and rgba() functional notation",
                  "hsl() for hue-saturation-lightness reasoning",
                  "Additive colour: R+G+B light, #000000 black, #ffffff white",
                  "Worked conversion: #e8955c to rgb(232,149,92)",
                  "When designers prefer each notation"
                ]
              },
              {
                q: "What does #000000 represent on a screen, and why?",
                marks: 2
              },
              {
                q: "Convert the hex colour #FF8000 into its decimal RGB values.",
                marks: 3
              }
            ],
          },
          {
            number: "2.4",
            title: "Hyperlinks",
            body: [
              "The anchor element <a href=\"…\">visible text</a> is the web's defining invention — the H in HTML. Without anchors, every page is an island; with them, every page is a node in a graph the user can navigate by clicking. The href attribute carries the destination URL, and several URL flavours are valid in href, each with a use case. Absolute: https://example.com/page.html — full URL with scheme and host, used for cross-site links. Relative: notes/ch1.html or ../index.html — path relative to the current page's location, used within a site (and surviving a domain change). Fragment: #top, paired with id=\"top\" on some element — jumps within the current page, used for table-of-contents links and skip-to-content accessibility links.",
              "Two specialised schemes extend the anchor beyond web pages. mailto:hello@scribbly.in opens the visitor's email client with a pre-addressed message; you can pre-fill subject and body too (mailto:hello@scribbly.in?subject=Hello&body=Hi). tel:+919876543210 triggers a phone call on mobile devices — used in click-to-call buttons on contact pages. Both work because the browser delegates the URL scheme to the appropriate handler (email client, dialer). The target attribute controls where the destination opens: _self (same tab, the default) or _blank (new tab or window). Pair target=\"_blank\" with rel=\"noopener noreferrer\" for safety: without it, the new tab can access the original tab via window.opener, a vulnerability known as reverse tabnabbing.",
              "Link text quality is an accessibility and SEO law, not a stylistic preference. Screen readers list links out of context — a blind user navigating by shortcut hears a list of link texts and decides which to follow. If every link says 'click here', that list is 'click here · click here · click here'; if each says 'Unit III notes' or 'download the report', the list is meaningful. Search engines rank by link words for the same reason — 'download the PHP syllabus' is more descriptive to Google than 'here'. The professional rule: link text should describe the destination, not the action of clicking; verbs and noun-phrases beat pronouns.",
              "Three anchor states exist and CSS styles each (:link unvisited, :visited visited, :hover mouse over, :active being clicked, :focus keyboard focus). The classic mnemonic for the order is LVHA — link, visited, hover, active — because the cascade needs them in this order to override correctly. For a 7-mark answer on hyperlinks: state that the anchor is the web's defining element, list five href flavours (absolute, relative, fragment, mailto, tel) with one example each, explain target=_self/_blank with the rel=noopener safety note, and close with the link-text-quality rule (describe destination, not action) and the LVHA states.",
            ],
            keyTerms: [
              { term: "Anchor", definition: "The <a href=\"...\"> element — the hyperlink, the H in HTML, the web's defining invention." },
              { term: "Absolute URL", definition: "A full URL with scheme and host (https://example.com/page.html) — used for cross-site links." },
              { term: "Relative URL", definition: "A path relative to the current page (notes/ch1.html) — used within a site, survives domain change." },
              { term: "Fragment", definition: "A #id suffix that jumps within the current page, paired with an element's id attribute." },
              { term: "noopener", definition: "rel=\"noopener\" on target=\"_blank\" links prevents the new tab from reaching back via window.opener." },
            ],
            bullets: [
              "<a href='destination'>text</a> is the anchor - the defining element of the web.",
              "Absolute URLs carry scheme + host; relative URLs resolve against the current page.",
              "Fragment links (#section) jump inside a page; mailto: and tel: trigger mail and dialer apps.",
              "target='_blank' should always travel with rel='noopener' for security.",
              "Link text must describe the destination - screen readers list links out of context.",
              "CSS styles the states :link, :visited, :hover, :active - in LVHA order."
            ],
            diagram: {
              kind: "fork",
              title: "What happens when a link is clicked",
              caption: "The browser inspects the href and takes one of four roads.",
              start: "User clicks an <a href>",
              branches: [
                {
                  label: "Absolute URL (https://...)",
                  outcome: "new HTTP request to the named host",
                  good: true
                },
                {
                  label: "Relative URL (notes/42.html)",
                  outcome: "resolved against the current page's base URL",
                  good: true
                },
                {
                  label: "Fragment (#summary)",
                  outcome: "page scrolls to the element with that id, no request",
                  good: true
                },
                {
                  label: "Broken or mistyped href",
                  outcome: "404 Not Found - every link must be tested",
                  good: false
                }
              ]
            },
            codeExample: {
              language: "html",
              caption: "links.html - the anchor tag in all its moods",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Links</title></head>\n<body>\n  <a href='https://www.rgpv.ac.in'>Absolute link</a><br>\n  <a href='notes/42.html'>Relative link</a><br>\n  <a href='#top'>Jump to the top</a><br>\n  <a href='mailto:hello@scribbly.in?subject=Hi'>Email us</a><br>\n  <a href='tel:+919876543210'>Call us</a><br>\n  <a href='https://other.site' target='_blank' rel='noopener'>Safe new tab</a>\n</body>\n</html>"
            },
            callout: {
              type: "tip",
              title: "LVHA - the cascade order",
              body: "Style link states in the order :link, :visited, :hover, :active. A later rule overrides an earlier one, so :active must come last or hover will never show while clicking."
            },
            examQuestions: [
              {
                q: "Explain the anchor tag and its attributes. Differentiate absolute and relative URLs with examples.",
                marks: 7,
                outline: [
                  "Syntax of <a href> with visible text",
                  "Absolute URL: scheme + host + path",
                  "Relative URL: resolved against the current document",
                  "Fragment links and named anchors",
                  "mailto: and tel: schemes",
                  "target, rel=noopener, download attributes",
                  "Link-text quality for accessibility and SEO"
                ]
              },
              {
                q: "What does target='_blank' do, and which attribute should always accompany it?",
                marks: 2
              },
              {
                q: "Write HTML for a mailto link with a subject and a tel link.",
                marks: 3
              }
            ],
          },
          {
            number: "2.5",
            title: "Lists",
            body: [
              "HTML offers three list types, and using the right one is a small semantic decision that pays off in accessibility and SEO. Unordered — <ul> with <li> children — renders bullets, for items whose order is meaningless (a shopping list, a feature list). Ordered — <ol> with <li> — renders numbers, for sequence (exam steps, a recipe, a ranking); attributes customise it: start=\"5\" begins counting from 5, type=\"A\" uses uppercase letters, type=\"a\" lowercase, type=\"I\" Roman numerals, and reversed counts down. Definition — <dl> alternating <dt> terms with <dd> descriptions — for glossaries, dictionaries, and any term-with-description pair; this is the semantically correct list for a FAQ or a vocabulary list, even though many authors wrongly use a table.",
              "Lists nest: a <ul> placed inside an <li> produces a sub-list — the standard way navigation menus are marked up before CSS turns them into horizontal bars. The markup pattern for a two-level menu is <ul><li>Home</li><li>Notes<ul><li>Create</li><li>List</li></ul></li><li>About</li></ul>; CSS (Unit III §3.5) then strips bullets, sets the outer <li>s to display: inline-block, and styles the inner <ul> as a dropdown. The same nested-list pattern powers breadcrumbs, sidebar category trees, and outline tables of contents — anywhere hierarchy needs markup. Always close your <li> tags and never fake a list with <br> and asterisks: the tag carries the meaning that browsers, screen readers and search engines all rely on.",
              "Styling lists is a Unit III topic, but the HTML attributes that affect list rendering belong here. The <ul> and <ol> elements accept the type attribute (disc, circle, square for <ul>; 1, A, a, I, i for <ol>); the <li> element accepts value to jump the numbering. The CSS list-style property (list-style-type, list-style-image, list-style-position) takes over styling in modern code, so these HTML attributes are legacy — useful to know for the exam, but not for production. The start, type, reversed and value attributes remain valid in HTML5 and are the answer to 'how do I make an ordered list count from 5 in uppercase letters'.",
              "For a 7-mark answer on lists: name the three types (<ul>, <ol>, <dl>) with one use case each, demonstrate nesting with a two-level navigation menu, state the <ol> attributes (start, type, reversed) and the <li> value attribute, and close with the semantic-correctness rule (use the right list type for the content — definition lists for glossaries, never tables) and the 'never fake a list' rule. A code fragment showing <dl><dt>HTML</dt><dd>HyperText Markup Language</dd></dl> proves you know the third list type, which most students skip.",
            ],
            keyTerms: [
              { term: "<ul>", definition: "Unordered list — bullets, for items whose order is meaningless." },
              { term: "<ol>", definition: "Ordered list — numbers, for sequence; attributes start, type, reversed." },
              { term: "<dl>", definition: "Definition list — alternating <dt> terms and <dd> descriptions, for glossaries and FAQs." },
              { term: "Nested list", definition: "A <ul> inside an <li> produces a sub-list — the standard markup for navigation menus." },
            ],
            bullets: [
              "<ul> renders bullets - for items whose order does not matter.",
              "<ol> renders numbers - attributes start, type (1/A/a/I/i) and reversed control numbering.",
              "<dl> holds <dt> terms with <dd> descriptions - glossaries and FAQs.",
              "A <ul> nested inside an <li> makes a sub-list - the classic navigation-menu markup.",
              "<li> accepts value to jump the numbering mid-list.",
              "Semantic choice pays: lists read correctly to screen readers and search engines."
            ],
            diagram: {
              kind: "compare",
              title: "The three list elements",
              caption: "Pick the element by the meaning of the collection, not the look.",
              left: {
                heading: "<ul> and <ol>",
                items: [
                  "<ul>: bullets, order irrelevant",
                  "<ol>: numbers, order meaningful",
                  "attributes: start, type, reversed",
                  "<li value=n> jumps numbering",
                  "shopping list vs recipe steps"
                ]
              },
              right: {
                heading: "<dl> and nesting",
                items: [
                  "<dl>: term-description pairs",
                  "<dt> term, <dd> description",
                  "glossary, FAQ, vocabulary",
                  "nest <ul> inside <li> for sub-lists",
                  "nested lists become nav menus"
                ]
              }
            },
            codeExample: {
              language: "html",
              caption: "lists.html - all three list types plus nesting",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Lists</title></head>\n<body>\n  <ul type='square'>\n    <li>HTML\n      <ul>\n        <li>Lists</li>\n        <li>Tables</li>\n      </ul>\n    </li>\n    <li>CSS</li>\n  </ul>\n  <ol type='A' start='3'>\n    <li>Plan</li>\n    <li>Build</li>\n  </ol>\n  <dl>\n    <dt>HTTP</dt><dd>Transfer protocol of the web</dd>\n  </dl>\n</body>\n</html>"
            },
            callout: {
              type: "exam",
              title: "Choose the semantic list",
              body: "Marks hide in the justification line: a set of steps is <ol>, a bag of features is <ul>, a vocabulary is <dl>. Naming the use case for each type earns the third mark."
            },
            examQuestions: [
              {
                q: "Explain the types of lists in HTML with examples. Write HTML code to create a nested list.",
                marks: 7,
                outline: [
                  "<ul> with one use case",
                  "<ol> with start, type, reversed attributes",
                  "<dl>/<dt>/<dd> with one use case",
                  "Nesting: <ul> inside <li>",
                  "The <li value> attribute",
                  "Complete nested navigation-menu markup",
                  "Why semantic choice matters"
                ]
              },
              {
                q: "Which attributes of <ol> change the numbering of a list?",
                marks: 2
              },
              {
                q: "Write HTML for a two-level navigation menu using nested unordered lists.",
                marks: 3
              }
            ],
          },
          {
            number: "2.6",
            title: "Tables",
            body: [
              "A table is rows of cells, marked up inside-out: <table> wraps table rows <tr>, each holding header cells <th> (bold and centred by default, identifying what the column means) and data cells <td> (the actual values). Structure and readability come from <caption> (the table's title, the first child of <table>), the <thead>/<tbody>/<tfoot> groupings that separate header, body and footer rows semantically, and the colspan and rowspan attributes that merge a cell across multiple columns or rows. The header row belongs in <thead>, the data rows in <tbody>, and any total or summary row in <tfoot> — this grouping lets screen readers announce the table structure and lets CSS style each region differently.",
              "The colspan and rowspan attributes are the table's trickiest feature and a common exam question. colspan=\"2\" makes one cell span two columns — used for a header that groups two sub-columns, or for a 'Total' row that spans all data columns. rowspan=\"3\" makes one cell span three rows — used for a category label that applies to several rows beneath it. The arithmetic rule: the total cells per row, counting each colspan and rowspan, must add up to the same number of columns for every row, or the table renders broken. A debug tip: if your table looks visually wrong, count the cells per row including spans.",
              "Historically tables were (ab)used to lay out entire pages — a sidebar in the left column, content in the right, headers in the top row — because CSS layout was weak before 2010. This practice is dead in modern code: table layouts are inflexible (no responsive behaviour on mobile), inaccessible (screen readers announce them as tables when they are layouts), and hard to maintain. Their legitimate job in modern HTML is genuine tabular data: timetables, comparison charts, result sheets, price lists, mark lists. The rule of thumb: if the content has a header row and a logical grid of values, use a table; if it is a layout problem, use CSS grid or flexbox (Unit III).",
              "The Unit V connection matters: when PHP fetches rows from MySQL and renders them as HTML, the natural output is a table — <table><thead><tr><th>Subject</th><th>Marks</th></tr></thead><tbody><?php foreach ($rows as $r) echo \"<tr><td>\" . htmlspecialchars($r['subject']) . \"</td><td>\" . $r['marks'] . \"</td></tr>\"; ?></tbody></table>. The PHP foreach loop over $rows produces one <tr> per database row. For a 7-mark answer on tables: name the elements (<table>, <tr>, <th>, <td>, <caption>, <thead>, <tbody>, <tfoot>) with one trait each, explain colspan and rowspan with the cell-count rule, state that tables are for data not layout, and close with the PHP-render use case from Unit V.",
            ],
            codeExample: {
              language: "html",
              caption: "table.html — rows, headers, merged cells",
              code: `<table>
  <caption>Semester V results</caption>
  <thead><tr> <th>Subject</th> <th>Marks</th> </tr></thead>
  <tbody>
    <tr> <td>Web Technology</td> <td>92</td> </tr>
    <tr> <td colspan="2">Total: 92 / 100</td> </tr>
  </tbody>
</table>`,
            },
            keyTerms: [
              { term: "<thead>/<tbody>/<tfoot>", definition: "Semantic row groupings — header, body, footer — that structure a table for accessibility and styling." },
              { term: "colspan", definition: "Attribute merging a cell across multiple columns; total cells per row must still add up." },
              { term: "rowspan", definition: "Attribute merging a cell across multiple rows; used for category labels spanning several data rows." },
              { term: "<caption>", definition: "The table's title — the first child of <table>, read by screen readers to announce the table." },
            ],
            bullets: [
              "Mark up inside-out: <table> wraps <tr> rows, rows hold <th> and <td> cells.",
              "<caption> names the table; <thead>/<tbody>/<tfoot> group rows semantically.",
              "colspan makes a cell span columns; rowspan makes it span rows.",
              "<th> is bold and centred by default and labels what the column means.",
              "Tables for tabular data only - page layout with tables is dead (inflexible, heavy, bad for SEO).",
              "Unit V echo: PHP loops over MySQL rows and prints one <tr> per record."
            ],
            diagram: {
              kind: "layers",
              title: "Table markup, outside in",
              caption: "Each layer nests inside the previous one - read it top to bottom as you write it.",
              layers: [
                {
                  label: "<table>",
                  note: "the whole grid"
                },
                {
                  label: "<caption>",
                  note: "the table's name"
                },
                {
                  label: "<thead> with <tr>",
                  note: "the header row"
                },
                {
                  label: "<tbody> with <th>/<td>",
                  note: "header and data cells"
                }
              ]
            },
            callout: {
              type: "warning",
              title: "Never lay out pages with tables",
              body: "Pre-2010 pages used tables as scaffolding for whole layouts. Modern verdict: tables are for tabular data only; CSS flexbox and grid do layout. Saying this sentence in the exam earns the final mark."
            },
            examQuestions: [
              {
                q: "Explain HTML tables with an example using rowspan and colspan.",
                marks: 7,
                outline: [
                  "Structure: table, tr, th, td, caption",
                  "thead/tbody/tfoot grouping",
                  "colspan example: a Total row spanning columns",
                  "rowspan example: a category cell spanning rows",
                  "Full worked table markup",
                  "Why tables must not be used for page layout",
                  "PHP+MySQL table rendering connection"
                ]
              },
              {
                q: "Differentiate <th> and <td>.",
                marks: 2
              },
              {
                q: "Write HTML for a table with a caption, one header row and two data rows.",
                marks: 3
              }
            ],
          },
          {
            number: "2.7",
            title: "Images",
            body: [
              "The <img src=\"…\" alt=\"…\"> element embeds a picture in the page. Two attributes are non-negotiable: src gives the image's URL (absolute, relative, or a data: URI that embeds the image bytes directly in the HTML), and alt is the text a screen reader speaks and the message shown when the image fails to load. Always write alt — it is an accessibility law (a blind user cannot see your image) and a debugging aid (a broken src shows alt text instead of an empty box). Decorative images that convey no information use alt=\"\" (an empty alt) — this tells screen readers to skip them, which is correct for purely decorative images; omitting the attribute entirely is wrong because the screen reader then reads the file name.",
              "Web image formats are chosen by content, and a 7-mark answer should name five with one trait each. JPEG for photographs — millions of colours, lossy compression, smaller files at the cost of generation-loss on each re-save; the right choice for any natural image with gradients and fine detail. PNG for graphics with transparency and sharp edges — logos, icons, screenshots; lossless compression, supports an alpha channel for transparency. GIF for simple animation and limited-colour graphics — 256 colours maximum, largely replaced by PNG for static images and by animated WebP for animation. SVG for resolution-independent vector icons — an XML format that scales without pixelation, ideal for logos and icons at any size. WebP (modern) offering JPEG-quality at 25–35% smaller files, with both lossy and lossless modes and alpha transparency — the future default.",
              "Sizing goes to CSS or the width/height attributes — and modern practice is to set them, because the browser can then reserve the box for the image before it loads, avoiding layout shift (the page jumping as images stream in). The HTML attributes width=\"300\" height=\"200\" are valid in HTML5 for this specific purpose (the image's intrinsic dimensions); CSS width and height override them for display. Loading attributes: loading=\"lazy\" defers off-screen images until the user scrolls near them (Unit I §1.6's bandwidth win), loading=\"eager\" loads immediately (the default, for above-the-fold hero images).",
              "Two relatives matter and earn marks. <figure> + <figcaption> semantically attach a caption to an image (or any illustrated content): <figure><img src=\"chart.png\" alt=\"Marks by subject\"><figcaption>Figure 1: Marks by subject</figcaption></figure> — the caption is bound to the image, not floating separately. <picture> with <source> lets you serve different files to different screens: <picture><source media=\"(max-width: 600px)\" srcset=\"hero-mobile.jpg\"><img src=\"hero.jpg\" alt=\"Hero\"></picture> — the browser picks the right image by media query, a responsive-image technique that complements Unit III's media queries. For a 7-mark answer: state src and alt are required, name five formats with one trait each, explain why width/height prevents layout shift, and close with figure/picture as the two semantic wrappers.",
            ],
            table: {
              caption: "Web image formats — choose by content.",
              headers: ["Format", "Compression", "Transparency", "Best for"],
              rows: [
                ["JPEG", "lossy", "no", "photographs, gradients"],
                ["PNG", "lossless", "yes (alpha)", "logos, icons, screenshots"],
                ["GIF", "lossless", "1-bit", "simple animation (legacy)"],
                ["SVG", "vector (XML)", "yes", "icons, logos at any scale"],
                ["WebP", "lossy/lossless", "yes", "modern replacement for JPEG/PNG"],
              ],
            },
            keyTerms: [
              { term: "alt", definition: "Image alternative text — required; spoken by screen readers, shown on broken src; empty alt skips decorative images." },
              { term: "SVG", definition: "Scalable Vector Graphics — XML vector format that scales without pixelation, ideal for icons." },
              { term: "<figure>", definition: "Semantic wrapper for illustrated content with a bound <figcaption> caption." },
              { term: "<picture>", definition: "Responsive-image element with <source> children letting the browser pick by media query." },
              { term: "Layout shift", definition: "Page jumping as images stream in; prevented by setting width/height attributes." },
            ],
            bullets: [
              "<img src alt> embeds a picture; src is the URL, alt is what screen readers speak.",
              "Set width and height so the browser reserves the box and the page does not jump (layout shift).",
              "JPEG for photographs (millions of colours, lossy); PNG for sharp edges and transparency (lossless).",
              "GIF for tiny animations (256 colours); SVG for logos and icons (vector, infinitely scalable).",
              "<figure> + <figcaption> attach a caption semantically.",
              "<picture> / srcset serve smaller files to small screens."
            ],
            diagram: {
              kind: "flow",
              title: "How an <img> reaches the screen",
              caption: "Five steps between the tag and the pixels.",
              steps: [
                {
                  label: "Parse the tag",
                  note: "src and alt read from HTML"
                },
                {
                  label: "Check the cache",
                  note: "reuse a stored copy if fresh"
                },
                {
                  label: "Fetch the file",
                  note: "HTTP GET to the src URL"
                },
                {
                  label: "Decode",
                  note: "bytes become a bitmap"
                },
                {
                  label: "Paint",
                  note: "into the box width/height reserved"
                }
              ]
            },
            codeExample: {
              language: "html",
              caption: "images.html - img with figure, caption and srcset",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Images</title></head>\n<body>\n  <img src='logo.png' alt='Scribbly logo' width='120' height='40'>\n  <figure>\n    <img src='chart.png' alt='Marks by subject bar chart' width='480' height='300'>\n    <figcaption>Figure 1: Marks by subject</figcaption>\n  </figure>\n  <picture>\n    <source srcset='hero-small.webp' media='(max-width: 600px)'>\n    <img src='hero.webp' alt='Hero banner'>\n  </picture>\n</body>\n</html>"
            },
            callout: {
              type: "tip",
              title: "alt is not optional",
              body: "Every image needs alt text: it is what a screen reader speaks, what shows when the file fails, and an SEO signal. Decorative images take alt=''. Forgetting alt is the most common lost mark in HTML questions."
            },
            examQuestions: [
              {
                q: "Explain the <img> tag and its attributes. Compare JPEG, GIF, PNG and SVG image formats.",
                marks: 7,
                outline: [
                  "img syntax: src, alt, width, height",
                  "alt for accessibility and broken images",
                  "JPEG: photographs, lossy, millions of colours",
                  "GIF: 256 colours, simple animation",
                  "PNG: lossless, transparency",
                  "SVG: vector, scalable, small for icons",
                  "figure/figcaption and srcset/picture"
                ]
              },
              {
                q: "Why is the alt attribute important on every image?",
                marks: 2
              },
              {
                q: "When is SVG preferred over JPEG? Give two reasons.",
                marks: 3
              }
            ],
          },
          {
            number: "2.8",
            title: "Forms",
            body: [
              "The <form> element is how a page talks back: it collects input from the user and submits it to a server URL. Its two vital attributes are action (where the data goes — the PHP script of Unit V) and method (how it travels). method=\"get\" appends data to the URL as name=value pairs separated by & — visible in the address bar, bookmarkable, limited to roughly 2000 characters, and therefore right for searches and filters. method=\"post\" sends data in the HTTP request body — invisible, unlimited in size, right for passwords, long text, file uploads and anything that should not appear in server logs or browser history. The exam rule: GET for retrieval, POST for submission; never use GET for passwords.",
              "Inside the form, controls collect values, and a 7-mark answer should name each. Text inputs: <input type=\"text\"> for single-line text, type=\"email\" with built-in email validation, type=\"password\" that masks characters, type=\"number\", type=\"date\", type=\"tel\", type=\"url\". The <label> element names a control and is paired with it either by wrapping (label > input) or by for=\"id\" matching — clicking the label focuses the field, an accessibility requirement. Radio buttons: <input type=\"radio\" name=\"color\"> grouped by shared name — the user picks exactly one. Checkboxes: <input type=\"checkbox\"> — the user picks any number. <select> dropdowns with <option> children — pick one from a list. <textarea> for multi-line text. <button type=\"submit\"> sends the form.",
              "A worked form with every control type and what arrives at PHP makes the theory concrete. <form action=\"save.php\" method=\"post\"> with fields: <input type=\"text\" name=\"title\" required>, <input type=\"radio\" name=\"color\" value=\"warm\">, <input type=\"checkbox\" name=\"share\">, <select name=\"subject\"><option>Web Tech</option></select>, <textarea name=\"body\"></textarea>, <button type=\"submit\">Save</button></form>. When submitted, PHP receives an associative array: $_POST['title'] = 'typed text', $_POST['color'] = 'warm' (only the selected radio's value), $_POST['share'] = 'on' (only if checked; absent if not), $_POST['subject'] = 'Web Tech', $_POST['body'] = 'multi-line text'. The name attribute is the key; the control's current value is what travels.",
              "Two refinements earn extra marks. Multi-valued controls (a set of checkboxes for tags) use array notation in the name: name=\"tags[]\" on each checkbox — PHP then receives $_POST['tags'] as an array, not a single value. The HTML5 required, pattern, minlength, maxlength attributes give free client-side validation that the browser enforces before submission — but Unit IV §4.13's rule still applies: client-side checks are courtesy, server-side checks are the law, because anyone can bypass HTML validation with curl. For a 7-mark answer: state the action and method attributes with the GET vs POST contrast, list six control types with one example each, trace one form to its $_POST array, and close with the tags[] array trick and the courtesy-vs-law validation rule.",
            ],
            codeExample: {
              language: "html",
              caption: "form.html — controls that talk to PHP",
              code: `<form action="save.php" method="post">
  <!-- every control's name becomes a key in $_POST -->
  <label>Title <input type="text" name="title" required></label>
  <label><input type="radio" name="color" value="warm"> Warm</label>
  <label><input type="checkbox" name="share"> Share publicly</label>
  <select name="subject"> <option>Web Tech</option></select>
  <!-- checkboxes named tags[] would arrive as an array -->
  <button type="submit">Save note</button>
</form>`,
            },
            keyTerms: [
              { term: "action", definition: "Form attribute naming the server URL the data goes to — typically a PHP script." },
              { term: "method", definition: "Form attribute: get (URL pairs, bookmarkable, limited) or post (body, invisible, unlimited)." },
              { term: "<label>", definition: "Element naming a control; paired by wrapping or for=\"id\". Clicking the label focuses the field." },
              { term: "name", definition: "Control attribute that becomes the $_POST key on the server; the control's value travels as that key's value." },
              { term: "tags[]", definition: "Array notation in a name attribute; PHP receives multiple values as an array under that key." },
            ],
            callout: {
              type: "exam",
              title: "GET vs POST — the rule to write",
              body: "GET for retrieval (search, filter, bookmark); data visible in URL, limited size. POST for submission (passwords, uploads, long text); data in body, invisible, unlimited. Never use GET for passwords.",
            },
            bullets: [
              "<form action='save.php' method='post'> - action is where data goes, method is how it travels.",
              "get appends name=value pairs to the URL (visible, bookmarkable, length-limited); post sends them in the body.",
              "Controls: text, password, email, number, date, radio, checkbox, select, textarea, file, hidden.",
              "Every control needs a name - it becomes the key the server reads ($_POST['title']).",
              "<label for='id'> ties text to a control for accessibility and bigger click targets.",
              "Array notation name='tags[]' makes checkboxes arrive as an array in PHP."
            ],
            diagram: {
              kind: "pipeline",
              title: "A form's journey to the server",
              caption: "From the visitor's keyboard to PHP's $_POST array.",
              stages: [
                {
                  label: "User fills controls",
                  note: "each input holds a name and a value"
                },
                {
                  label: "Submit pressed",
                  note: "browser collects name=value pairs"
                },
                {
                  label: "Encoding",
                  note: "query string (GET) or body (POST)"
                },
                {
                  label: "PHP receives",
                  note: "$_GET or $_POST superglobal filled"
                },
                {
                  label: "Script responds",
                  note: "validation, then a new page"
                }
              ]
            },
            examQuestions: [
              {
                q: "Explain HTML forms with input types. What data does the server script receive?",
                marks: 7,
                outline: [
                  "form element: action and method attributes",
                  "GET vs POST division with the password rule",
                  "Input controls: text, password, email, radio, checkbox, select, textarea, file",
                  "name attribute as the server-side key",
                  "label element for accessibility",
                  "tags[] array notation for multi-valued controls",
                  "What arrives in $_GET/$_POST for a worked form"
                ]
              },
              {
                q: "Differentiate method GET and method POST in an HTML form.",
                marks: 2
              },
              {
                q: "Write a form with name, email and submit controls posting to save.php.",
                marks: 3
              }
            ],
          },
          {
            number: "2.9",
            title: "XHTML",
            body: [
              "XHTML reformulated HTML as strict XML (Unit IV's language): same tags, brutal discipline. Where HTML was forgiving — overlapping tags tolerated, unclosed elements guessed-at, case insensitivity accepted — XHTML demanded that a document also be a well-formed XML document. The motivation was engineering rigour: a page that is also a valid XML document can be parsed by any XML tool, generated programmatically, transformed with XSLT (Unit IV §4.5), and validated automatically against a DTD or schema. In the early 2000s the W3C bet that strictness would push the web toward machine-readability; the bet failed because authors would not write strict markup, and HTML5 took a different path.",
              "The XHTML rules are all exam favourites and most are short enough to memorise. Documents must be well-formed: tags properly nested (no <b><i>text</b></i> overlaps), exactly one root element, all attribute values quoted. Every tag must close — including void elements, written <br />, <img src=\"…\" />, <hr />, <input />; the trailing slash is the XML way of saying 'this element has no closing tag'. Tags and attributes are lowercase (<div>, not <DIV>) — XML is case-sensitive. Attribute values are always quoted (width=\"300\") and attributes are never minimized — <input checked=\"checked\" />, not <input checked>. The id attribute replaces name as the unique identifier. The document opens with a strict DOCTYPE and an xmlns declaration: <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" …> <html xmlns=\"http://www.w3.org/1999/xhtml\">.",
              "The contrast with HTML5 is the natural exam question. XHTML demanded strictness and the browser would refuse to render a malformed document (displaying an XML error instead). HTML5 chose forgiving parsing with XML-style self-closing allowed but optional — the browser's HTML parser handles broken markup gracefully, auto-closing tags, inferring structure, and rendering something useful even from malformed input. The reasoning: the web had accumulated billions of malformed pages, and a standard that would break all of them was a standard nobody would adopt. HTML5 won; XHTML 2.0 was abandoned in 2009.",
              "The XHTML 1.0 specification defined three flavours: Strict (no presentational or deprecated elements — no <font>, <center>, <bgcolor>), Transitional (presentational elements allowed, for migrating legacy pages), and Frameset (for documents using <frameset>). All three demanded the well-formedness rules above; they differed only in which elements were permitted. For a 7-mark answer on XHTML: define it as HTML reformulated as strict XML, list the six well-formedness rules (well-formed, all tags closed with self-closing voids, lowercase, quoted attributes, no minimized attributes, id not name), name the three flavours (Strict, Transitional, Frameset), and close with the HTML5 contrast — XHTML demanded strictness and rejected malformed markup; HTML5 chose forgiveness.",
            ],
            keyTerms: [
              { term: "XHTML", definition: "HTML reformulated as strict XML — same tags, well-formedness enforced." },
              { term: "Well-formed", definition: "XML requirement: tags properly nested, one root, all attributes quoted, no overlaps." },
              { term: "Self-closing void", definition: "<br />, <img /> — void elements written with a trailing slash in XHTML." },
              { term: "Strict/Transitional/Frameset", definition: "The three XHTML 1.0 flavours — strict (no presentational), transitional (legacy allowed), frameset." },
            ],
            callout: {
              type: "exam",
              title: "XHTML vs HTML5 — the one-line answer",
              body: "XHTML demanded strictness and rejected malformed markup with an XML error. HTML5 chose forgiving parsing — self-closing tags optional, broken markup rendered anyway. HTML5 won; XHTML 2.0 was abandoned in 2009.",
            },
            bullets: [
              "XHTML = HTML rewritten as strict XML: same tags, brutal discipline.",
              "Rules: well-formed nesting, all tags closed, lowercase names, quoted attributes, one root.",
              "Void elements self-close: <br />, <img ... />.",
              "Three flavours: Strict, Transitional, Frameset.",
              "Malformed XHTML showed an XML error instead of a best-guess render.",
              "HTML5 won by forgiving parsing with XML-style habits kept optional."
            ],
            diagram: {
              kind: "flow",
              title: "Migrating an HTML page to XHTML",
              caption: "Five mechanical edits turn any HTML file into valid XHTML.",
              steps: [
                {
                  label: "Add the XML DOCTYPE",
                  note: "XHTML 1.0 Transitional declaration"
                },
                {
                  label: "Lowercase everything",
                  note: "tags and attribute names"
                },
                {
                  label: "Quote every attribute",
                  note: "width='100', never width=100"
                },
                {
                  label: "Close and self-close tags",
                  note: "<br />, <img ... />"
                },
                {
                  label: "Validate",
                  note: "W3C validator must pass"
                }
              ]
            },
            codeExample: {
              language: "html",
              caption: "page.xhtml - a minimal valid XHTML 1.0 document",
              code: "<?xml version='1.0' encoding='UTF-8'?>\n<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN'\n  'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>\n<html xmlns='http://www.w3.org/1999/xhtml'>\n<head>\n  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />\n  <title>XHTML page</title>\n</head>\n<body>\n  <h1>Strict and well-formed</h1>\n  <p>Every tag closed <br /> and every attribute quoted.</p>\n</body>\n</html>"
            },
            examQuestions: [
              {
                q: "What is XHTML? Explain its rules and compare it with HTML5.",
                marks: 7,
                outline: [
                  "Define XHTML: HTML reformulated as XML",
                  "Well-formedness rules: nesting, closure, lowercase, quoting",
                  "Self-closing void elements",
                  "Strict / Transitional / Frameset flavours",
                  "Strict parsing: malformed page refused",
                  "HTML5 contrast: forgiving parsing, optional XML habits",
                  "Why HTML5 prevailed"
                ]
              },
              {
                q: "Why must void elements be self-closed in XHTML?",
                marks: 2
              },
              {
                q: "Name the three flavours of XHTML 1.0 with one sentence each.",
                marks: 3
              }
            ],
          },
          {
            number: "2.10",
            title: "Meta tags and character entities",
            body: [
              "Meta tags live in <head> and describe the document to browsers and crawlers; they carry no visible content but shape how the page is rendered, indexed and shared. The essential set: <meta charset=\"UTF-8\"> declares the character encoding — omit it and browsers guess, the classic source of mojibake where ₹ renders as â‚¹ or é renders as Ã©. <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> tells mobile browsers not to shrink the page — without it, mobile rendering is broken on phones. <meta name=\"description\" content=\"…\"> is the snippet search engines may display under your title in results — a 150–160 character sales pitch that affects click-through. <meta name=\"keywords\" content=\"…\"> is historic, now ignored by Google because it was abused. <meta name=\"author\"> and <meta name=\"generator\"> carry attribution.",
              "http-equiv meta tags act like HTTP response headers but are written into the document itself — useful when you cannot configure the server. <meta http-equiv=\"refresh\" content=\"5\"> reloads the page every 5 seconds. <meta http-equiv=\"refresh\" content=\"5; url=https://scribbly.in/new\"> redirects after 5 seconds (a poor cousin of a proper 301 redirect). <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"> is the legacy form of charset declaration. <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> forced Internet Explorer to use its newest rendering engine. The Open Graph tags (<meta property=\"og:title\" content=\"…\">, og:image, og:description) drive how links preview on Facebook, WhatsApp and LinkedIn — a modern essential for any shareable page.",
              "Character entities are the HTML way to write characters that would otherwise confuse the parser or be hard to type. The five XML/HTML reserved characters must always be escaped: &lt; for <, &gt; for >, &amp; for & (the ampersand itself — every entity starts with & so an unescaped & is ambiguous), &quot; for \", &apos; for '. Common named entities beyond those: &nbsp; for a non-breaking space (prevents a line break between two words), &copy; for ©, &reg; for ®, &trade; for ™, &mdash; for an em dash —, &hellip; for an ellipsis …. Numeric entities use the character's Unicode code point: &#8377; for ₹, &#169; for ©, &#x20B9; for ₹ in hex. Numeric entities work for any Unicode character even if no named entity exists.",
              "The two practical rules. First, always declare charset=UTF-8 in the first 1024 bytes of the document (the <meta charset> belongs at the top of <head>, before the <title>) — UTF-8 covers every character in every language including ₹ and emoji, and is the only encoding modern HTML should use. Second, escape user-supplied content when echoing it to HTML (Unit IV §4.8): a visitor's <script> tag must be echoed as &lt;script&gt; so the browser renders it as text rather than executing it — this is htmlspecialchars()'s job and the defence against XSS. For a 7-mark answer: name five meta tags (charset, viewport, description, keywords, author) with one purpose each, explain http-equiv and Open Graph, list the five reserved entities plus three named ones, and close with the charset-first rule and the XSS-escape rule.",
            ],
            table: {
              caption: "Essential character entities.",
              headers: ["Entity", "Renders as", "Why"],
              rows: [
                ["&lt;", "<", "Reserved — would open a tag"],
                ["&gt;", ">", "Reserved — would close a tag"],
                ["&amp;", "&", "Reserved — starts every entity"],
                ["&quot;", "\"", "Reserved inside attributes"],
                ["&nbsp;", " ", "Non-breaking space — prevents line break"],
                ["&copy;", "©", "Copyright symbol"],
                ["&#8377;", "₹", "Numeric — Indian rupee"],
              ],
            },
            keyTerms: [
              { term: "<meta>", definition: "Head element carrying document metadata — charset, viewport, description, keywords, author." },
              { term: "Viewport meta", definition: "<meta name=\"viewport\" content=\"width=device-width\"> — makes mobile rendering sane; without it phones shrink the page." },
              { term: "Character entity", definition: "&name; or &#code; — escapes characters that would confuse the parser or are hard to type." },
              { term: "Open Graph", definition: "<meta property=\"og:…\"> tags controlling how links preview on social media." },
              { term: "Charset", definition: "The character encoding declared by <meta charset=\"UTF-8\"> — covers every character including ₹ and emoji." },
            ],
            bullets: [
              "<meta> tags live in <head> and describe the document to browsers and crawlers.",
              "charset='UTF-8' belongs first, before the title, within the first 1024 bytes.",
              "name='viewport' makes mobile browsers lay out at device width instead of 980px.",
              "name='description' and Open Graph tags control search snippets and social shares.",
              "http-equiv tags emulate response headers: refresh with or without redirect, content-type, nosniff.",
              "Entities escape reserved characters: &lt; &gt; &amp; &quot; &copy; &nbsp; &#8377;."
            ],
            diagram: {
              kind: "compare",
              title: "The two jobs of <meta>",
              caption: "Every meta tag is either a page description or a header impersonation.",
              left: {
                heading: "name= - page metadata",
                items: [
                  "description: search snippet",
                  "keywords: mostly ignored now",
                  "viewport: mobile layout",
                  "author, generator",
                  "Open Graph: social share cards"
                ]
              },
              right: {
                heading: "http-equiv= - header stand-in",
                items: [
                  "refresh: reload after N seconds",
                  "refresh + url: timed redirect",
                  "content-type: encoding declaration",
                  "x-ua-compatible: legacy IE mode",
                  "useful when you cannot configure the server"
                ]
              }
            },
            codeExample: {
              language: "html",
              caption: "meta.html - head metadata and character entities",
              code: "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1'>\n  <meta name='description' content='Unit II notes on meta tags'>\n  <meta http-equiv='refresh' content='30'>\n  <title>Meta and entities</title>\n</head>\n<body>\n  <p>Write &lt;div&gt; to show the tag itself: &amp;lt;div&amp;gt;</p>\n  <p>Copyright &copy; 2024 - price &#8377;499 &nbsp;|&nbsp; 5 &plusmn; 1</p>\n</body>\n</html>"
            },
            callout: {
              type: "tip",
              title: "Charset first, always",
              body: "Put <meta charset='UTF-8'> at the very top of <head> - the spec only guarantees detection within the first 1024 bytes. A missing or late charset is the classic cause of broken characters."
            },
            examQuestions: [
              {
                q: "Explain meta tags and character entities in HTML with examples.",
                marks: 7,
                outline: [
                  "Role of <meta> in <head>",
                  "charset declaration and why it comes first",
                  "viewport meta for mobile",
                  "description and Open Graph metadata",
                  "http-equiv: refresh, redirect, nosniff",
                  "Entities for reserved characters: lt, gt, amp, quot",
                  "Numeric entities and nbsp, copy, rupee"
                ]
              },
              {
                q: "What does <meta name='viewport' content='width=device-width'> do?",
                marks: 2
              },
              {
                q: "Write the entities for <, >, &, and the copyright symbol.",
                marks: 3
              }
            ],
          },
          {
            number: "2.11",
            title: "Frames and framesets",
            body: [
              "Classic frames split the browser window into independent panes, each loading its own document. A frameset document (<frameset cols=\"25%,75%\"> or rows=\"100,200\">) replaces the <body> entirely — a frameset page has no body of its own, only a layout of panes. Each pane is a <frame src=\"menu.html\"> pointing to a separate HTML document, and <noframes> carries a fallback for browsers that cannot render frames. The design idea was sound for its era — one static menu pane on the left, one scrolling content pane on the right — and was the standard way to build navigation-heavy sites in the late 1990s before CSS layout was powerful.",
              "The side effects of framesets were fatal and the list is exam-critical. Bookmarking captured only the frameset URL, not the specific page a visitor was reading — returning to a bookmarked deep page was impossible. The browser's back button behaved unpredictably, sometimes stepping through frame history instead of page history. Search engines indexed individual frame documents as orphans — a visitor clicking a search result landed on a content frame with no surrounding navigation menu. Printing broke because each frame was a separate document and printers could not combine them. Accessibility was catastrophically bad — screen readers had no semantic relationship between the panes. Linking to a specific deep page required target=\"content\" attributes that coupled every link to a specific frame name.",
              "The inline <iframe> survives because it solves a different problem: embedding a complete external document inside a page — a YouTube video, a Google Map, an ad, a third-party widget. <iframe src=\"https://youtube.com/embed/abc\" width=\"560\" height=\"315\"> loads that URL into a rectangular inline frame; the parent page and the iframe have separate documents and separate DOMs, communicating only through postMessage() for security. Unlike framesets, an iframe lives inside a normal <body> alongside other content, so bookmarking, back-button, and search indexing of the parent page all work normally. The sandbox attribute (sandbox=\"allow-scripts allow-same-origin\") restricts what the iframe can do — a security essential for embedding untrusted third-party content.",
              "Framesets were removed from HTML5 entirely; the <frame>, <frameset> and <noframes> elements are obsolete and browsers will eventually drop them. The modern replacement is CSS layout for the page structure (a fixed header, a sidebar, a content area — all CSS-positioned, all in one document) combined with server-side includes or PHP templates for the shared parts (header.php, footer.php included by every page). For a 7-mark answer on frames: describe the frameset model (<frameset cols/rows> replacing <body>, <frame src> panes, <noframes> fallback), list five fatal side effects (bookmarking, back button, search indexing, printing, accessibility), distinguish the surviving <iframe> (inline, separate document, for embedding external content) with the sandbox attribute, and close with the modern replacement (CSS layout + PHP includes).",
            ],
            diagram: {
              kind: "compare",
              title: "Framesets vs iframes",
              caption: "Framesets split the window into separate documents (dead); iframes embed external content inline (alive).",
              left: {
                heading: "<frameset> — removed from HTML5",
                items: ["replaces <body> with panes", "bookmark, back button, SEO all break", "separate document per pane", "use CSS layout + PHP includes instead"],
              },
              right: {
                heading: "<iframe> — survives",
                items: ["inline inside <body>", "embeds external content (video, map, ad)", "separate DOM, communicates via postMessage", "sandbox attribute for security"],
              },
            },
            keyTerms: [
              { term: "Frameset", definition: "Removed HTML element (<frameset cols/rows>) that replaced <body> with frame panes — dead in HTML5." },
              { term: "<iframe>", definition: "Inline frame that embeds an external document inside a page; survives in HTML5 for videos, maps, ads." },
              { term: "Orphan frame", definition: "A content frame indexed by search engines without its navigation — reachable but unnavigable." },
              { term: "sandbox", definition: "<iframe> attribute restricting what the embedded content can do — essential for untrusted widgets." },
            ],
            bullets: [
              "<frameset cols/rows> replaced <body> and split the window into independent panes.",
              "Each <frame src> loaded its own document with its own scroll.",
              "Fatal side effects: broken bookmarks, unpredictable back button, broken SEO, accessibility pain.",
              "Framesets were removed in HTML5; <frame>/<frameset>/<noframes> are obsolete.",
              "<iframe> survives: an inline embedded document (video, map, ad widget) inside a normal page.",
              "sandbox attribute restricts what embedded content may do."
            ],
            codeExample: {
              language: "html",
              caption: "embed.html - the surviving iframe pattern",
              code: "<!DOCTYPE html>\n<html>\n<head><title>Embedding</title></head>\n<body>\n  <h1>Embedded content with iframe</h1>\n  <iframe src='https://www.youtube.com/embed/abc123'\n          width='560' height='315' title='Lecture video'>\n  </iframe>\n  <iframe src='map.html' width='400' height='300' sandbox>\n  </iframe>\n  <p>A server can forbid framing itself with X-Frame-Options: DENY.</p>\n</body>\n</html>"
            },
            callout: {
              type: "warning",
              title: "Framesets are dead - say why",
              body: "The exam question is usually 'why were frames deprecated?'. Answer: bookmarking captured only the frameset URL, back-button behaviour broke, and search engines could not rank pane content - then point to CSS layout and iframe as the replacements."
            },
            examQuestions: [
              {
                q: "What are frames in HTML? Why were framesets removed from HTML5 while iframe survived?",
                marks: 7,
                outline: [
                  "frameset/frames model: cols, rows, frame src",
                  "Frameset replaces body entirely",
                  "Side effects: bookmarks, back button, SEO, accessibility",
                  "HTML5 removal of frame/frameset/noframes",
                  "iframe: inline embedded external document",
                  "iframe attributes: width, height, sandbox, title",
                  "Modern replacements: CSS layout + includes"
                ]
              },
              {
                q: "Which attribute of iframe restricts what embedded content can do?",
                marks: 2
              },
              {
                q: "Differentiate frameset and iframe on any three points.",
                marks: 3
              }
            ],
          },
          {
            number: "2.12",
            title: "Browser architecture and web site structure",
            body: [
              "Inside any browser, a pipeline of cooperating subsystems turns a URL into pixels. The networking layer fetches resources over HTTP (and HTTPS via TLS), caching responses where allowed. The HTML parser consumes the byte stream and builds the DOM — the live tree of elements that JavaScript will later reach into. The CSS parser consumes stylesheet bytes and builds the CSSOM — a parallel tree of style rules. The rendering engine (Blink, Gecko, WebKit) combines DOM and CSSOM into a render tree, computes layout (each element's box and position — the layout tree), and paints the result as pixels. The JavaScript engine (V8, SpiderMonkey) executes scripts on its own event loop, mutating the DOM and triggering re-layout when needed. A storage layer manages cookies, cache, IndexedDB and localStorage.",
              "The pipeline is not strictly linear — it interleaves. The HTML parser can begin building the DOM before the entire HTML arrives (incremental parsing); a <script> tag without async/defer blocks parsing until the script loads and executes; CSS parsing blocks rendering (but not parsing) until the stylesheet is ready, because the render tree needs both. The repaint-vs-reflow distinction matters: changing a colour triggers only a repaint (cheap); changing a width triggers reflow (layout recalculation for the element and its descendants, expensive). Performance-conscious JavaScript batches DOM mutations and uses CSS transforms (which the GPU accelerates) instead of position changes.",
              "The single-threaded event loop is JavaScript's defining constraint: only one statement executes at a time, even on a multi-core machine. Long-running JavaScript blocks the UI (the page appears frozen), which is why AJAX callbacks, setTimeout and Promise chains hand control back quickly. The modern web worker API runs CPU-heavy JavaScript on a separate thread, communicating with the main thread via postMessage — the answer to computationally heavy work that would otherwise freeze the page. Service workers run on their own thread and can intercept network requests, enabling offline support and push notifications.",
              "Site structure mirrors the discipline. A clean site keeps assets in folders: index.html at the root, /css for stylesheets, /js for scripts, /images for graphics, pages grouped by section (/notes/, /tutorials/). Relative links between pages survive a domain change; one shared external stylesheet (linked once in <head>) lets the whole look change from a single file. PHP includes (Unit IV) extend this to server-side shared headers and footers. For a 7-mark answer: name the six browser subsystems (networking, HTML parser, CSS parser, render engine, JS engine, storage) with one responsibility each, explain the repaint-vs-reflow distinction, state the single-threaded event loop constraint and the web-worker escape hatch, and close with the clean folder-structure conventions and the one-shared-stylesheet rule.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Browser architecture",
              caption: "A pipeline from network to pixels, with JavaScript able to reach back in and rewrite the tree.",
              stages: [
                { label: "Networking — HTTP", note: "fetches HTML, CSS, JS, images" },
                { label: "HTML parser", note: "builds the DOM tree" },
                { label: "CSS parser", note: "builds the style rules" },
                { label: "Render engine", note: "layout · paint" },
                { label: "JS engine", note: "may mutate DOM → relayout" },
                { label: "Storage", note: "cookies · cache · localStorage" },
              ],
            },
            keyTerms: [
              { term: "DOM", definition: "Document Object Model — the live tree of elements built by the HTML parser; JavaScript's handle on the page." },
              { term: "CSSOM", definition: "CSS Object Model — the parallel tree of style rules built by the CSS parser; combined with DOM into the render tree." },
              { term: "Reflow", definition: "Layout recalculation triggered by a geometry change (width, position); more expensive than repaint." },
              { term: "Event loop", definition: "JavaScript's single-threaded execution model — one statement at a time, even on multi-core machines." },
              { term: "Web worker", definition: "API running JavaScript on a separate thread, communicating via postMessage — escape from the single-thread constraint." },
            ],
            bullets: [
              "Browser pipeline: networking fetches, HTML parser builds the DOM, CSS parser builds the CSSOM.",
              "Render engine computes layout and paints; JS engine executes scripts and may mutate the tree.",
              "Parsing is incremental; a blocking <script> pauses DOM building until it runs.",
              "Single-threaded event loop: one long script freezes the whole UI.",
              "Site structure: index.html at root, /css, /js, /images folders, pages grouped by section.",
              "Relative links between clean folders survive a domain change."
            ],
            callout: {
              type: "tip",
              title: "defer and async",
              body: "A plain <script src> blocks parsing. Add defer to run after the DOM is ready in order, or async to run whenever it arrives - the one-line answer to 'how do scripts speed up page load?'"
            },
            examQuestions: [
              {
                q: "Explain the working of a browser with a neat diagram. How should a website's folder structure be organised?",
                marks: 7,
                outline: [
                  "Draw the pipeline: networking, HTML parser, CSS parser, render engine, JS engine, storage",
                  "DOM and CSSOM construction",
                  "Incremental parsing; blocking scripts; defer/async",
                  "Layout, reflow and paint",
                  "Single-threaded event loop consequence",
                  "Recommended folder structure with index.html at root",
                  "Why clean structure survives domain changes"
                ]
              },
              {
                q: "What is reflow in a browser's rendering pipeline?",
                marks: 2
              },
              {
                q: "Why is JavaScript single-threaded and what is the event loop?",
                marks: 3
              }
            ],
            codeExample: {
              language: "html",
              caption: "loading.html - blocking vs defer vs async scripts",
              code: "<head>\n  <!-- blocks parsing until downloaded and run -->\n  <script src='blocking.js'></script>\n\n  <!-- downloaded in parallel, runs in order after the DOM -->\n  <script src='app.js' defer></script>\n\n  <!-- downloaded in parallel, runs as soon as it arrives -->\n  <script src='analytics.js' async></script>\n</head>"
            },
          },
          {
            number: "2.13",
            title: "HTML5 overview and web sockets",
            body: [
              "HTML5 is the living standard (maintained by WHATWG since 2019, no longer version-numbered) that replaced XHTML's severity with practical power. Semantic structure tags — <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure> — give meaning to layout regions instead of using generic <div>s for everything. This semantic structure helps screen readers navigate (jump to <nav>, jump to <main>), helps search engines understand content roles, and helps maintenance: a page that says <article> tells the next developer 'this is a self-contained piece of content' in a way <div class=\"article\"> does not. Native multimedia (<audio>, <video>) ended the plug-in era: instead of Flash, the browser itself decodes and renders media, with controls, captions and accessibility built in.",
              "Richer forms are HTML5's most-used upgrade. New input types — type=\"email\", type=\"url\", type=\"number\", type=\"date\", type=\"time\", type=\"range\", type=\"color\", type=\"tel\" — give the browser native UI (a date picker, a slider) and native validation (email format, URL format) without JavaScript. Built-in validation attributes — required, pattern=\"[0-9]{10}\", minlength, maxlength, min, max, step — let the browser enforce rules before submission. New structural elements like <datalist> (autocomplete suggestions), <output> (computation result) and <progress>/<meter> (visual progress) round out the form vocabulary. The placeholder attribute hints at expected input; the autofocus attribute focuses a field on load.",
              "Beyond markup, HTML5 added several platform APIs that turned the browser into an application runtime. The canvas API draws 2D graphics pixel-by-pixel with JavaScript — games, charts, image editors. Geolocation asks the user for their location (with permission). Drag and drop is built-in. Web storage — localStorage (persistent) and sessionStorage (per-tab, cleared on close) — replaced cookies for client-only data because cookies travel to the server on every request and are limited to ~4 KB. Offline support via the application cache (deprecated) and service workers lets apps work without a network connection. Web workers run JavaScript on background threads. The history API (pushState) lets single-page apps update the URL without a page reload.",
              "Web sockets deserve their own paragraph because they break HTTP's request–response model. HTTP is one request per response — fine for document fetching, but chat apps, multiplayer games and live dashboards need a full-duplex, persistent channel where the server can push data the instant it changes. The WebSocket API (const ws = new WebSocket(\"wss://echo.scribbly.in\")) upgrades one HTTP connection into a long-lived socket via a handshake: the client requests an upgrade, the server agrees, and afterwards both sides push messages both ways with a few bytes of overhead each — real-time by design instead of polling every few seconds. ws.send(JSON.stringify({msg: 'hi'})) on the client, ws.onmessage = (e) => … for inbound. For a 7-mark answer on HTML5: list semantic tags, native multimedia, richer form types and validation, three platform APIs (canvas, geolocation, web storage), and close with the WebSocket full-duplex upgrade and its real-time use cases.",
            ],
            callout: {
              type: "exam",
              title: "WebSocket vs HTTP — the upgrade",
              body: "HTTP = one request, one response, connection closes. WebSocket = one HTTP upgrade handshake → persistent full-duplex channel. Server pushes data the instant it changes; no polling. Use cases: chat, multiplayer games, live dashboards.",
            },
            keyTerms: [
              { term: "Semantic tags", definition: "<header>, <nav>, <main>, <section>, <article>, <footer> — HTML5 elements that name layout regions for accessibility and SEO." },
              { term: "Web storage", definition: "localStorage (persistent) and sessionStorage (per-tab) — replaced cookies for client-only data." },
              { term: "Canvas API", definition: "JavaScript API for pixel-by-pixel 2D graphics on a <canvas> element — games, charts, image editors." },
              { term: "WebSocket", definition: "Full-duplex persistent channel upgraded from one HTTP connection — real-time data without polling." },
            ],
            bullets: [
              "HTML5 is the living standard (WHATWG, 2019) - semantic tags: header, nav, main, section, article, aside, footer.",
              "Richer forms: email, url, number, date, range, color inputs with native validation.",
              "Media without plug-ins: <audio> and <video>.",
              "Canvas draws 2D graphics; geolocation and drag-drop are platform APIs.",
              "Web storage: localStorage (persistent) and sessionStorage (per tab).",
              "Web sockets open a full-duplex persistent channel after an HTTP Upgrade handshake."
            ],
            diagram: {
              kind: "pipeline",
              title: "The WebSocket handshake",
              caption: "One HTTP request upgrades into a persistent two-way channel.",
              stages: [
                {
                  label: "ws:// request",
                  note: "HTTP GET with Upgrade: websocket"
                },
                {
                  label: "101 Switching Protocols",
                  note: "server agrees to upgrade"
                },
                {
                  label: "Open channel",
                  note: "full-duplex frames, either side may send"
                },
                {
                  label: "Live exchange",
                  note: "chat, game, dashboard updates"
                },
                {
                  label: "Close handshake",
                  note: "either end closes the socket"
                }
              ]
            },
            codeExample: {
              language: "javascript",
              caption: "socket.js - a minimal WebSocket chat client",
              code: "const socket = new WebSocket('ws://localhost:8080');\n\nsocket.onopen = () => {\n  console.log('connected');\n  socket.send('hello server');\n};\n\nsocket.onmessage = (event) => {\n  const list = document.querySelector('#messages');\n  const item = document.createElement('li');\n  item.textContent = event.data;\n  list.appendChild(item);\n};\n\nsocket.onclose = () => console.log('closed');"
            },
            examQuestions: [
              {
                q: "Explain the features of HTML5. What are web sockets and how do they differ from HTTP?",
                marks: 7,
                outline: [
                  "Semantic structure tags with one use each",
                  "New form input types and native validation",
                  "audio/video without plug-ins",
                  "Canvas, geolocation, drag-and-drop APIs",
                  "localStorage vs sessionStorage",
                  "WebSocket definition and the Upgrade handshake",
                  "Full-duplex vs HTTP request-response contrast"
                ]
              },
              {
                q: "Name four HTML5 semantic tags and their purposes.",
                marks: 2
              },
              {
                q: "Differentiate localStorage and sessionStorage.",
                marks: 3
              }
            ],
          },
          {
            number: "2.14",
            title: "MIME types and content encoding",
            body: [
              "A MIME type (Multipurpose Internet Mail Extensions, RFC 2045) is the label that tells every system what a byte-stream actually is. Its format is type/subtype, optionally followed by parameters: text/html; charset=UTF-8. The common families: text/* for human-readable text (text/html, text/css, text/plain, text/csv, text/xml); image/* for images (image/png, image/jpeg, image/gif, image/svg+xml, image/webp); application/* for binary or structured data (application/javascript, application/json, application/pdf, application/xml, application/octet-stream for arbitrary binary); audio/* and video/* for media (audio/mpeg, video/mp4). The server sends the MIME type in the Content-Type response header, and the browser obeys it: render as a page, execute as a script, display as an image, decode as audio.",
              "Wrong MIME types are a security issue, and the browser's strictness about this is called the Same-Origin Policy and Content-Type sniffing controls. If a server labels a JavaScript file as text/plain, browsers historically 'sniffed' the content, recognised it as JavaScript, and executed it — enabling attacks where a file-upload service was tricked into serving malicious scripts as images. The modern defence is X-Content-Type-Options: nosniff, which tells the browser to honour the declared MIME type strictly. Custom or vendor-specific MIME types use the application/x- prefix (application/x-www-form-urlencoded for form data, application/x-pdf historically) or application/vnd- prefix (application/vnd.ms-excel, application/vnd.api+json). Multipart MIME (multipart/form-data) wraps multiple parts in one body — used for file uploads.",
              "Content encoding is the compression layer, separate from MIME. The Content-Encoding response header tells the browser the body was compressed for the trip: gzip (the universal default), deflate, or br (Brotli, modern and ~15–25% smaller than gzip). The browser sends Accept-Encoding: gzip, deflate, br in its request, the server picks one it supports, compresses the body, labels it, and sends. HTML, CSS and JavaScript are text, so they compress 60–80% — one of the cheapest wins against Unit I's bandwidth problem. JPEG, PNG and WebP are already compressed and gain nothing from gzip; the server leaves them alone. The pair works together: MIME says what the bytes are, encoding says how they travelled.",
              "Three more headers round out the picture. Content-Disposition: attachment; filename=\"report.pdf\" forces the browser to download rather than display — the basis of every 'download' button. Content-Length tells the browser the body's byte count so it can show a progress bar. Cache-Control (max-age=31536000, public) and ETag govern caching (Unit I §1.6). For a 7-mark answer on MIME: define the type/subtype format, list eight common types across the text/image/application families, explain why wrong MIME is a security risk and the nosniff defence, contrast Content-Type (what it is) with Content-Encoding (how it travelled) with the 60–80% compression win, and close with Content-Disposition's role in downloads.",
            ],
            table: {
              caption: "Common MIME types by family.",
              headers: ["MIME type", "Family", "Browser action"],
              rows: [
                ["text/html", "text", "render as a page"],
                ["text/css", "text", "apply as stylesheet"],
                ["application/javascript", "application", "execute as script"],
                ["application/json", "application", "parse as JSON data"],
                ["image/png", "image", "display as image"],
                ["application/pdf", "application", "open in PDF viewer"],
                ["multipart/form-data", "multipart", "file upload body"],
                ["application/octet-stream", "application", "download as binary"],
              ],
            },
            keyTerms: [
              { term: "MIME type", definition: "type/subtype label (text/html, image/png) telling every system what a byte-stream is; sent in Content-Type header." },
              { term: "Content-Type", definition: "Response header carrying the MIME type; the browser obeys it for rendering, execution, or display." },
              { term: "Content-Encoding", definition: "Response header naming the compression (gzip, br); text assets shrink 60–80%." },
              { term: "nosniff", definition: "X-Content-Type-Options: nosniff — tells the browser to honour the declared MIME strictly, defeating content-sniffing attacks." },
              { term: "Content-Disposition", definition: "Header (attachment; filename=…) that forces a download instead of in-browser display." },
            ],
            bullets: [
              "A MIME type is type/subtype, optionally with parameters: text/html; charset=UTF-8.",
              "Families: text/*, image/*, audio/*, video/*, application/*, multipart/*.",
              "The server sets Content-Type from the file extension or the program's output.",
              "Wrong MIME types are a security issue; X-Content-Type-Options: nosniff forbids sniffing.",
              "Content-Encoding (gzip, deflate, br) is compression, layered on top of the MIME type.",
              "Content-Disposition: attachment forces a download with a filename."
            ],
            diagram: {
              kind: "fork",
              title: "How a server picks the MIME type",
              caption: "The extension decides the Content-Type header for static files.",
              start: "GET /assets/logo.png",
              branches: [
                {
                  label: "Known extension (.html)",
                  outcome: "text/html - browser renders the page",
                  good: true
                },
                {
                  label: "Known extension (.png, .css)",
                  outcome: "image/png, text/css - rendered or applied",
                  good: true
                },
                {
                  label: "Program (.php)",
                  outcome: "script runs; its output carries text/html",
                  good: true
                },
                {
                  label: "Unknown extension",
                  outcome: "application/octet-stream - browser downloads it instead",
                  good: false
                }
              ]
            },
            codeExample: {
              language: "http",
              caption: "Response headers carrying MIME and encoding",
              code: "HTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Encoding: gzip\nContent-Length: 2847\nCache-Control: max-age=3600\n\n... gzipped HTML body ...\n\nHTTP/1.1 200 OK\nContent-Type: application/pdf\nContent-Disposition: attachment; filename='report.pdf'"
            },
            callout: {
              type: "tip",
              title: "MIME vs encoding - keep them apart",
              body: "Content-Type says WHAT the bytes are; Content-Encoding says HOW they were compressed for the trip. The browser decodes gzip first, then parses according to the MIME type. Mixing the two up is a classic 2-mark slip."
            },
            examQuestions: [
              {
                q: "What is a MIME type? Explain the Content-Type and Content-Encoding headers with examples.",
                marks: 7,
                outline: [
                  "Define MIME: type/subtype label, RFC 2045",
                  "Common families: text, image, audio, video, application, multipart",
                  "How the server assigns Content-Type",
                  "Content-Encoding: gzip, deflate, br",
                  "Security angle: sniffing and nosniff",
                  "Content-Disposition for downloads",
                  "Worked header exchange"
                ]
              },
              {
                q: "What is the MIME type of a .css file? Of a .png file?",
                marks: 2
              },
              {
                q: "What does the header X-Content-Type-Options: nosniff prevent?",
                marks: 3
              }
            ],
          },
          {
            number: "2.15",
            title: "Session tracking and cookies",
            body: [
              "HTTP has no memory — every request arrives a stranger, and the server has no built-in way to recognise that this request and the previous one came from the same user. Since real applications need to remember who is logged in and what is in the cart, session tracking was invented as a layer on top of stateless HTTP. The workhorse is the cookie: the server sends Set-Cookie: userid=42; Path=/; HttpOnly in a response header; the browser stores it and returns Cookie: userid=42 with every later request to that site — an identity badge voluntarily worn. Cookies carry limits (approximately 4 KB each, ~50 per domain, sent with every request) and discipline (set HttpOnly to hide from scripts, Secure to restrict to HTTPS, SameSite to tame cross-site use).",
              "Cookie attributes are exam-critical because each one addresses a real attack. The Domain and Path attributes scope which URLs the cookie is sent to. The Expires/Max-Age attributes control lifetime — session cookies (no Expires) die when the browser closes; persistent cookies survive until their expiry. HttpOnly hides the cookie from JavaScript (document.cookie cannot read it), defeating XSS-based cookie theft. Secure restricts transmission to HTTPS, defeating network sniffing. SameSite (Strict, Lax, None) controls whether the cookie is sent on cross-site requests — Strict never, Lax on top-level navigations, None always (but requires Secure) — the modern defence against CSRF (cross-site request forgery), where a malicious site tricks the user's browser into sending a state-changing request to a site where the user is logged in.",
              "The standard server-side pattern — the one PHP uses in Unit IV §4.15 — splits identity from data. The cookie stores only a session ID (a long random string), while the real data (username, cart, login state) lives on the server in the $_SESSION array keyed by that ID. This split has three wins: the cookie stays tiny (just the ID, not megabytes of cart data); the user cannot tamper with the data (they only hold the ID, not the cart itself); and revocation is server-side (destroying the session file or row invalidates the ID instantly). The cookie carries the key; the session holds the kingdom. Storing sensitive data directly in cookies — even encrypted — is an anti-pattern because cookies travel with every request and are visible to the user.",
              "Three alternatives to cookies are worth naming for a 7-mark answer. URL rewriting appends the session ID to every link (?PHPSESSID=abc123) — works when cookies are disabled but pollutes URLs and leaks session IDs via referrers. Hidden form fields carry data through forms only — limited to form submissions. HTML5 web storage (localStorage, sessionStorage) stores client-side data without sending it to the server — useful for preferences but not for security-sensitive data because JavaScript can read it. The cookie-plus-server-session pattern remains the default because it is the most secure and the most transparent. For the exam: explain HTTP statelessness, describe the Set-Cookie/Cookie exchange, list five cookie attributes with one security role each (Domain, Path, Expires, HttpOnly, Secure, SameSite), state the cookie-carries-key/session-holds-kingdom division of labour, and close with the three alternatives and their trade-offs.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Cookies identify; sessions remember",
              caption: "The two-part answer to HTTP's amnesia.",
              stages: [
                { label: "First visit", note: "server: 'here is badge 42'" },
                { label: "Browser stores cookie", note: "userid=42 · 4 KB max" },
                { label: "Every next request", note: "browser: 'I am 42'" },
                { label: "Session found", note: "server-side data restored" },
              ],
            },
            keyTerms: [
              { term: "Cookie", definition: "Key-value pair set by the server in a Set-Cookie header, stored by the browser, returned with every later request — the identity badge." },
              { term: "HttpOnly", definition: "Cookie attribute hiding the cookie from JavaScript (document.cookie), defeating XSS-based cookie theft." },
              { term: "SameSite", definition: "Cookie attribute (Strict/Lax/None) controlling cross-site sending — the modern CSRF defence." },
              { term: "Session", definition: "Server-side data store keyed by a session ID cookie; the cookie carries the key, the session holds the kingdom." },
              { term: "CSRF", definition: "Cross-Site Request Forgery — a malicious site tricks the user's browser into sending a state-changing request to a site where the user is logged in." },
            ],
            callout: {
              type: "exam",
              title: "The one-line answer",
              body: "State the division of labour verbatim: 'the cookie carries the key; the session holds the kingdom.' Then explain why — cookie stays tiny, user can't tamper, server can revoke instantly.",
            },
            bullets: [
              "HTTP has no memory; session tracking layers identity on top of the stateless protocol.",
              "Four techniques: cookies, URL rewriting, hidden form fields, sessions.",
              "Cookie attributes: Domain/Path scope it, Expires/Max-Age set lifetime, Secure = HTTPS only.",
              "HttpOnly hides the cookie from JavaScript; SameSite=Lax/Strict blunts CSRF.",
              "The standard split: cookie stores only a session ID; data lives server-side keyed by that ID.",
              "PHP implements this as the PHPSESSID cookie plus the $_SESSION array."
            ],
            codeExample: {
              language: "php",
              caption: "cookie.php - setting and reading a cookie",
              code: "<?php\n// must run before ANY output (it writes a header)\nsetcookie('visit', '42', time() + 3600, '/', '', false, true);\n$visits = $_COOKIE['visit'] ?? 'first time';\necho 'Your badge: ' . htmlspecialchars($visits);\n\n// the session counterpart\nsession_start();\n$_SESSION['user_id'] = 42;\necho 'Session id: ' . session_id();\n?>"
            },
            examQuestions: [
              {
                q: "What is session tracking? Explain cookies and their attributes, and how sessions work.",
                marks: 7,
                outline: [
                  "Statelessness problem restated",
                  "Four session-tracking techniques",
                  "Cookie anatomy: name=value, Domain, Path, Expires",
                  "Secure, HttpOnly, SameSite attributes with the attack each stops",
                  "Cookie limits: 4 KB, per-domain count",
                  "Session pattern: ID cookie server-side, data in $_SESSION",
                  "When to prefer each mechanism"
                ]
              },
              {
                q: "Which two cookie attributes defend against XSS and CSRF respectively?",
                marks: 2
              },
              {
                q: "Differentiate a session cookie and a persistent cookie.",
                marks: 3
              }
            ],
          },
          {
            number: "2.16",
            title: "Working of a browser, plug-ins and search engines",
            body: [
              "Pull one tab of a browser apart and this is the machine you find, layer by layer. The UI layer (address bar, tabs, buttons, bookmarks) reacts to the user. The browser engine coordinates between UI and rendering. The rendering engine (Blink, Gecko, WebKit) parses HTML and CSS and paints pixels. The JavaScript engine (V8, SpiderMonkey) executes scripts on its single-threaded event loop. The networking stack speaks HTTP(S) and manages connections, caching and TLS. The storage layer keeps cookies, cache, history, localStorage and IndexedDB. The data layer parses XML/HTML into trees. This is the layered architecture David Hyatt described for Firefox in 2000 and that every modern browser still follows in spirit — the layers are named differently but the responsibilities are unchanged.",
              "Plug-ins were external modules that extended the browser beyond HTML — Macromedia/Adobe Flash for animation and video, Java applets for rich applications, PDF readers, Silverlight. They were powerful in the late 1990s and 2000s because HTML could not do what they did, but they were a security and stability liability: each plug-in was a separate runtime with its own vulnerabilities, its own update cycle, and the ability to execute native code. Modern browsers have removed plug-in support entirely (Chrome ended NPAPI in 2015, Flash was end-of-life in December 2020) in favour of standardised web APIs — canvas for graphics, video and audio for media, WebGL for 3D, WebAssembly for near-native performance. The plug-in era is over; the open web won.",
              "A search engine (Google, Bing, DuckDuckGo) is a separate system from the browser, with three cooperating parts. The crawler (or spider, or robot) is a program that downloads pages by following links, starting from a seed list and discovering new URLs as it goes; it respects robots.txt (which sites can ask not to be crawled) and re-visits pages on a schedule. The indexer parses the downloaded pages and builds a giant inverted index — a data structure mapping each word to the list of pages containing it, with positions and weights — so a query for 'PHP tutorial' can be answered in milliseconds without re-reading the web. The query engine takes a user's search, finds matching pages from the index, ranks them by relevance signals (PageRank's link-based authority, on-page factors, freshness, location, personalisation), and returns the top results.",
              "The craft of appearing high in that ranking — SEO (Search Engine Optimisation) — rewards exactly the semantic, fast, well-linked sites this unit designs. SEO's on-page factors: meaningful <title> and <meta description>, semantic HTML (<h1> for the page topic, <article> for content), descriptive alt text on images, descriptive link text, mobile-friendly responsive layout, fast page load, valid HTML, sitemap.xml submitted to Google Search Console. SEO's off-page factors: inbound links from authoritative sites (the original PageRank signal), social signals, brand mentions. SEO's anti-patterns (keyword stuffing, hidden text, link buying) are penalised by Google's algorithms and can de-rank a site entirely. For a 7-mark answer: name the six browser layers, declare plug-ins dead (Flash EOL 2020) and replaced by standardised APIs, describe the search engine's three parts (crawler, indexer, query engine), and close with five SEO factors this unit's design produces.",
            ],
            diagram: {
              kind: "layers",
              title: "Browser + search engine architecture",
              caption: "Browser layers (top) and the search engine's three-part pipeline (bottom).",
              layers: [
                { label: "UI layer", note: "address bar · tabs · bookmarks" },
                { label: "Browser engine", note: "coordinates UI ↔ rendering" },
                { label: "Rendering engine", note: "parses HTML/CSS · paints" },
                { label: "JS engine", note: "single-threaded event loop" },
                { label: "Networking + storage", note: "HTTP · cookies · cache · localStorage" },
              ],
            },
            keyTerms: [
              { term: "Plug-in", definition: "External browser module (Flash, Java applets) extending HTML — removed from modern browsers for security." },
              { term: "Crawler", definition: "Search engine program that downloads pages by following links, building the index source." },
              { term: "Inverted index", definition: "Data structure mapping each word to the list of pages containing it; lets queries be answered in milliseconds." },
              { term: "PageRank", definition: "Google's link-based authority signal — inbound links from authoritative sites boost a page's rank." },
              { term: "SEO", definition: "Search Engine Optimisation — craft of ranking high; rewards semantic, fast, well-linked sites." },
            ],
            bullets: [
              "Browser layers: UI, browser engine, rendering engine, JS engine, networking and storage.",
              "Plug-ins (Flash, Java applets, Silverlight) extended old browsers but were sandbox-breaking and are gone.",
              "Modern HTML5 APIs replaced plug-ins for video, drawing and storage.",
              "Search engine = crawler + indexer + ranker, three cooperating systems.",
              "Crawler follows links from a seed list; indexer builds an inverted index of words to pages.",
              "SEO rewards semantic HTML, fast pages, meaningful titles and honest links."
            ],
            callout: {
              type: "tip",
              title: "Crawl, index, rank",
              body: "The three-word skeleton of every search-engine answer: the crawler downloads pages, the indexer stores which words appear where (inverted index), and the ranker orders results (PageRank and hundreds of signals)."
            },
            examQuestions: [
              {
                q: "Explain the working of a browser, plug-ins and search engines with diagrams.",
                marks: 7,
                outline: [
                  "Browser layer diagram: UI to storage",
                  "Rendering and JS engine roles",
                  "Plug-ins: what they were, why they died",
                  "HTML5 APIs as the replacement",
                  "Search engine architecture: crawler, indexer, ranker",
                  "Inverted index and PageRank in one line each",
                  "On-page SEO factors"
                ]
              },
              {
                q: "What is an inverted index?",
                marks: 2
              },
              {
                q: "List any three on-page SEO factors.",
                marks: 3
              }
            ],
            codeExample: {
              language: "text",
              caption: "robots.txt - steering the crawler",
              code: "User-agent: *\nDisallow: /admin/\nDisallow: /cart\nDisallow: /tmp/\nAllow: /notes/\nCrawl-delay: 1\n\nSitemap: https://scribbly.in/sitemap.xml"
            },
          },
          {
            number: "2.17",
            title: "Client-side scripting: JavaScript and regular expressions",
            body: [
              "JavaScript is the language of the browser: code delivered inside the page inside <script> tags, then executed on the user's machine by the browser's JS engine (V8, SpiderMonkey, JavaScriptCore). Unlike PHP (Unit IV) which runs on the server, JavaScript runs client-side and so can react instantly to user input without a server round trip — clicking a button, validating a form field, expanding a menu, animating a card, fetching fresh data with AJAX. Its reach is the page itself: through the DOM (Unit III §3.10), scripts read and rewrite every element, attribute and text node. Client-side scripting is what makes Web 2.0 (§1.4) feel like an application instead of a document, and it is the only programming language every modern browser ships natively.",
              "The trust boundary is the discipline every client-side developer must internalise. Anything sent to the browser — JavaScript source, HTML, hidden form fields, cookies visible to document.cookie — can be read, paused and altered by a curious user with the DevTools console. JavaScript validation is therefore courtesy, not security: it improves the user experience by catching typos before submission, but it can be bypassed in a second by a user who turns JS off or crafts a POST with curl. The law lives on the server: PHP must re-validate every field, escape every output, and use prepared statements for every query, regardless of what the JavaScript did. This is the same trust boundary Unit I §1.3 drew between browser and server.",
              "Regular expressions are JavaScript's text-search algebra — the same regex family as AD-501's regular languages, applied to strings. A regex literal is written /pattern/flags — the slashes delimit the pattern, the trailing flags modify it (i for case-insensitive, g for global — all matches, m for multiline). The character classes: \\d matches any digit, \\w a word character (letter, digit, underscore), \\s whitespace, with their uppercase complements \\D, \\W, \\S meaning 'not a digit', 'not a word char', 'not whitespace'. Quantifiers: + one or more, * zero or more, ? optional, {n} exactly n, {2,4} between 2 and 4. Anchors ^ and $ tie the match to the start and end of the string, so ^...$ requires a full match rather than a substring. Ranges like [a-z] and groups with alternation (com|in|org) round out the vocabulary.",
              "Two methods turn a pattern into a result. pattern.test(str) returns a boolean — does the string match? — and is the workhorse of form validation. str.match(pattern) returns the matched substring(s) or null — used to extract a value (the digits out of a PIN, the domain out of a URL). The classic recipe: define a regex anchored at both ends, test the input, branch on the result. /^\\w+@[a-z]+\\.(com|in)$/i tests an email shape: one-or-more word chars, @, letters, dot, com or in, case-insensitive. /^\\d{6}$/ validates a 6-digit PIN. /^\\d{10}$/ a 10-digit phone. Always anchor at both ends — without ^ an attacker's prefix passes, without $ their suffix passes — and always pair the regex test with a clear error message the user can act on.",
              "For a 7-mark answer on client-side scripting: define JavaScript as the browser's native scripting language executed on the user's machine, contrast it with server-side PHP (and state the trust boundary — client code is courtesy, server code is law), describe regex literal syntax (/pattern/flags) with three character classes and three quantifiers, and demonstrate test() and match() on a worked email-or-PIN example. Close with the anchoring rule and the always-validate-on-the-server reminder. The code block below shows the pattern in action.",
            ],
            codeExample: {
              language: "javascript",
              caption: "regex.html — JavaScript regular expressions",
              code: `let email = "amara@scribbly.in";
let pattern = /^[\\w.-]+@[a-z\\d]+\\.[a-z]{2,}$/i;
if (pattern.test(email)) {
  console.log("valid — PIN code:", email.match(/\\d+/));
              }
// test() → true/false · match() → the found substring(s)
// flags: i case-insensitive, g global, m multiline
// \d digit, \w word char, [a-z]{2,} at least two letters`,
            },
            bullets: [
              "JavaScript runs in the browser: source arrives inside <script> and executes on the user's machine.",
              "Client-side code is courtesy; server-side code is law - the trust boundary.",
              "Anything sent to the browser can be read and altered with DevTools; never trust client validation.",
              "Regex literal /pattern/flags; flags i, g, m modify the search.",
              "Classes \\d digit, \\w word character, \\s space; quantifiers * + ? {n,m}.",
              "test(str) returns boolean (validation); str.match(pattern) returns matches or null (extraction)."
            ],
            diagram: {
              kind: "cycle",
              title: "The JavaScript event loop",
              caption: "One thread, forever circling: wait, dispatch, run, repaint.",
              steps: [
                {
                  label: "Wait for events",
                  note: "click, input, timer, network reply"
                },
                {
                  label: "Dispatch handler",
                  note: "the registered listener is queued"
                },
                {
                  label: "Run the handler",
                  note: "one handler at a time, to completion"
                },
                {
                  label: "Update the DOM",
                  note: "changes trigger reflow and repaint"
                },
                {
                  label: "Back to waiting",
                  note: "loop repeats, page stays responsive"
                }
              ]
            },
            callout: {
              type: "warning",
              title: "Never trust the client",
              body: "Client-side regex validation is convenience, not security. A user can disable JavaScript or POST crafted data with curl. The server must re-validate everything - writing this sentence is worth a mark in most scheme answers."
            },
            examQuestions: [
              {
                q: "What is client-side scripting? Explain JavaScript regular expressions with the test() and match() methods.",
                marks: 7,
                outline: [
                  "Define client-side scripting and where it runs",
                  "Contrast with server-side PHP; the trust boundary",
                  "Embedding scripts and the event loop",
                  "Regex literal syntax and flags i, g, m",
                  "Character classes and quantifiers",
                  "test() for validation, match() for extraction",
                  "Worked validation example (email or PIN)"
                ]
              },
              {
                q: "Differentiate client-side and server-side scripting.",
                marks: 2
              },
              {
                q: "Write a regular expression that matches a 10-digit mobile number, and use it with test().",
                marks: 3
              }
            ],
            keyTerms: [
              {
                term: "Client-side scripting",
                definition: "Code delivered inside the page and executed by the browser on the user's machine."
              },
              {
                term: "Trust boundary",
                definition: "Anything that reaches the browser can be read and altered by the user; the server must never trust it."
              },
              {
                term: "Regex literal",
                definition: "A pattern written between slashes with optional flags: /pattern/i - i, g, m."
              },
              {
                term: "test()",
                definition: "RegExp method returning true or false - the workhorse of form validation."
              },
              {
                term: "match()",
                definition: "String method returning the matched substring(s) or null - used to extract values."
              }
            ],
          },
          {
            number: "2.18",
            title: "Web servers",
            body: [
              "A web server is software (and, by metonymy, the machine running it) whose only job is to listen for HTTP requests and answer them with resources. It runs as an always-on daemon bound to port 80 (HTTP) or 443 (HTTPS), accepts each incoming TCP connection, parses the request line and headers, decides what to do, and writes a response back. The decision is one of two flavours: static — the URL maps to a file on disk (index.html, logo.png), the server reads the bytes, attaches the right Content-Type and Content-Length headers, and ships them; or dynamic — the URL maps to a program (a PHP script, a Node handler), the server hands the request to that program, captures the program's output, and ships it back as the response body. Logging (who asked for what, when, what status) closes the cycle and is where every debugging session eventually begins.",
              "The market's elders shape the practice. Apache HTTP Server, since 1995, is modular and configurable per-directory through .htaccess files; its process-or-thread-per-connection architecture is simple to reason about, and its mod_php module embeds the PHP interpreter directly inside Apache — the classic shared-hosting stack. Nginx, since 2002, is event-driven and asynchronous, using a small pool of worker processes each handling thousands of concurrent connections via non-blocking I/O — born as a reverse proxy, now the default for high-traffic sites and the standard front for PHP-FPM. Microsoft IIS serves the Windows/.NET world. Lightweight dev servers (VS Code Live Server, PHP's built-in php -S localhost:8000) exist purely for local testing. Each can serve static files directly and delegate dynamic requests to any backend.",
              "The static-vs-dynamic decision shapes the request lifecycle that this course keeps revisiting. A static request is one read and one write — Apache opens /var/www/html/index.html, sets Content-Type: text/html, sends 200 OK plus the bytes. A dynamic request adds an interpreter in the middle: the browser asks for notes.php, Apache hands it to PHP (via mod_php or PHP-FPM), PHP executes the script, the script queries MySQL, MySQL returns rows, PHP assembles the rows into HTML, PHP returns that HTML to Apache, Apache returns it to the browser. The browser never sees PHP — only the HTML PHP generated — which is why the same URL can greet a logged-in user by name and a stranger with a login form. This is the LAMP loop in full: Linux + Apache + MySQL + PHP.",
              "Practical server concerns worth one paragraph each. Virtual hosting lets one Apache instance serve many domains — name-based virtual hosts route by the Host header to the right DocumentRoot, so one IP can host scribbly.in, tutorial.in and blog.in. The .htaccess file lets a site owner configure Apache per directory without editing the global config — URL rewriting (RewriteEngine), custom error pages (ErrorDocument 404 /404.html), access control (Require all denied), and expires headers all live here. HTTPS is configured by installing a TLS certificate (Let's Encrypt provides free ones via certbot) and enabling the mod_ssl module — the only meaningful change from the protocol's view. Server logs (access.log and error.log) are the audit trail every PHP debugging session eventually consults: a 500 in access.log cross-referenced with a stack trace in error.log is the standard post-mortem.",
              "For a 7-mark answer on web servers: define the server as an always-on HTTP listener bound to ports 80/443 that maps URLs to files (static) or programs (dynamic), name Apache (modular, .htaccess, mod_php) and Nginx (event-driven, PHP-FPM, reverse proxy) with one trait each, trace one dynamic request through the LAMP loop (browser → Apache → PHP → MySQL → back), and close with virtual hosting, .htaccess, HTTPS/TLS, and the access/error log pair. Mention IIS for the Windows world and dev servers for local testing as a one-line aside.",
            ],
            callout: {
              type: "tip",
              title: "Apache vs Nginx — the one-line contrast",
              body: "Apache: process/thread per connection, .htaccess per-directory config, mod_php embeds the interpreter — simple, classic, the shared-hosting default. Nginx: event-driven, asynchronous, scales to tens of thousands of concurrent connections per worker — used as reverse proxy in front of PHP-FPM for high-traffic sites.",
            },
            bullets: [
              "A web server is an always-on daemon listening on ports 80/443, mapping URLs to files or programs.",
              "Apache: modular, per-directory .htaccess, process/thread per connection, mod_php.",
              "Nginx: event-driven, thousands of connections per worker, reverse proxy to PHP-FPM.",
              "Static request: read file, add headers, send. Dynamic request: hand to PHP, wait, send output.",
              "Name-based virtual hosting routes by the Host header to the right DocumentRoot.",
              "Logging (access and error logs) is the server's memory for debugging."
            ],
            diagram: {
              kind: "layers",
              title: "Inside a web-server request",
              caption: "Layers a request passes through in Apache, top to bottom.",
              layers: [
                {
                  label: "Listener",
                  note: "accepts TCP on port 80/443"
                },
                {
                  label: "Virtual-host router",
                  note: "Host header picks the site"
                },
                {
                  label: "Rewrite and auth modules",
                  note: ".htaccess rules, access control"
                },
                {
                  label: "Handler",
                  note: "static file read or PHP interpreter run"
                },
                {
                  label: "Responder + logger",
                  note: "headers, body, access log entry"
                }
              ]
            },
            codeExample: {
              language: "apache",
              caption: "httpd-vhost.conf - name-based virtual hosting",
              code: "<VirtualHost *:80>\n  ServerName scribbly.in\n  ServerAlias www.scribbly.in\n  DocumentRoot '/var/www/scribbly'\n  <Directory /var/www/scribbly>\n    AllowOverride All\n    Require all granted\n  </Directory>\n  ErrorLog logs/scribbly-error.log\n  CustomLog logs/scribbly-access.log combined\n</VirtualHost>"
            },
            examQuestions: [
              {
                q: "What is a web server? Compare Apache and Nginx. Explain static and dynamic request handling.",
                marks: 7,
                outline: [
                  "Define the server as an HTTP listener on 80/443",
                  "URL-to-file (static) and URL-to-program (dynamic) mapping",
                  "Apache: modules, .htaccess, thread per connection, mod_php",
                  "Nginx: event-driven workers, PHP-FPM, reverse proxy",
                  "One-line contrast of the two architectures",
                  "Virtual hosting by Host header",
                  "Access and error logging"
                ]
              },
              {
                q: "Which ports do HTTP and HTTPS use by default?",
                marks: 2
              },
              {
                q: "What is name-based virtual hosting?",
                marks: 3
              }
            ],
            keyTerms: [
              {
                term: "Web server",
                definition: "Always-on software listening on ports 80/443 that maps HTTP requests to files or programs."
              },
              {
                term: "Virtual host",
                definition: "One server instance serving many domains by routing on the Host header."
              },
              {
                term: ".htaccess",
                definition: "Apache's per-directory configuration file for rewrites, auth and caching rules."
              },
              {
                term: "Reverse proxy",
                definition: "Nginx-style front server that forwards dynamic requests to PHP-FPM or another backend."
              },
              {
                term: "DocumentRoot",
                definition: "The filesystem directory a virtual host maps to the site's URL root."
              }
            ],
          },
        ],
      },
    },
    {
      number: 3,
      roman: "III",
      title: "Style Sheets, JavaScript & the DOM",
      summary:
        "Unit III gives pages their style and their behaviour: the complete CSS toolbox from syntax to positioning, CSS2 and CSS3; then JavaScript from variables to objects, the DOM as the browser's live map of the page, forms and validation, and DHTML — the fusion of HTML, CSS and JavaScript through events.",
      chapter: {
        number: "03",
        title: "CSS, JavaScript & DHTML",
        intro:
          "Unit III covers CSS syntax and the cascade, backgrounds and text, the box model, lists, positioning, CSS2/CSS3, JavaScript basics, JS objects, the DOM, DOM manipulation, forms and validation, and DHTML events.",
        inOneBreath:
          "CSS separates style from structure through selectors and the box model; positioning and CSS3's media queries make layouts responsive; JavaScript brings behaviour; the DOM is the live tree both hands edit; validation is client-friendly but server-authoritative; and DHTML is the three layers fused by the event system.",
        sections: [
          {
            number: "3.1",
            title: "The need for CSS, syntax and structure",
            body: [
              "Before CSS, appearance lived inside HTML — <font> tags and table layouts repeated on every page, and one redesign meant editing every file. A site of a thousand pages needed a thousand edits to change the body font. CSS (Cascading Style Sheets) was invented for exactly that pain: it separates presentation from structure — HTML says what a thing is, CSS says how it looks — so one stylesheet restyles a thousand pages, code stays lean, and browsers can cache the styling separately. The benefits compound: bandwidth drops (one cached .css file replaces a thousand per-page <font> tags), accessibility improves (semantic HTML is no longer buried in presentation), and maintenance collapses from 'edit every page' to 'edit one file'.",
              "The language is rules. A CSS rule is a selector naming which elements to style, followed by a declaration block of semicolon-separated property: value pairs — p { color: #2b1d12; line-height: 1.6; } styles every paragraph. Selectors range from simple (tag — p, .class — .note, #id — #title) to combinational (nav a — links inside nav; li > a — direct children) and pseudo-class/element (a:hover, li:first-child, p::before). The declaration block's properties are the nouns of appearance: color, background, font-family, margin, padding, border, position, display — each accepts a constrained set of values defined by the CSS specification. Comments are /* … */ and are ignored by the parser.",
              "The 'cascading' in the name is the conflict resolution mechanism, and it is the single most-misunderstood part of CSS. When several rules target one element, the browser decides the winner by a three-step tiebreak: origin (browser defaults lose to user stylesheets lose to author stylesheets, with !important reversing the order), then specificity (a four-part score: inline beats id beats class beats tag — a selector's score is its count of each, so #main .note p beats .note p), then source order (last declared wins among equal-specificity rules). The classic exam question: 'why does my .note colour not apply?' — answer: an #main .note rule with higher specificity is overriding it. The dev tools' 'Computed' panel shows the winner and every losing rule struck through.",
              "CSS reaches a page three ways, in increasing order of discipline. Inline style — a style attribute on one element (<p style=\"color: red\">), quick but unshareable, never reusable, and forbidden in production. Internal (embedded) — a <style> block in that page's <head>, styling one page only — useful for one-off page-specific overrides. External — a separate styles.css linked once in the head with <link rel=\"stylesheet\" href=\"styles.css\">, cached by the browser and applied site-wide — the professional default, which is why every real project's folder has a /css directory. A media attribute (<link rel=\"stylesheet\" href=\"print.css\" media=\"print\">) restricts a stylesheet to one context.",
              "For a 7-mark answer on CSS basics: state the motivation (separation of presentation from structure, one file restyles many pages), define a rule as selector + declaration block, list four selector types (tag, class, id, pseudo) with one example, write the cascade tiebreak chain (origin → specificity → source order) with the specificity score (inline > id > class > tag), and contrast the three ways CSS reaches a page (inline, internal, external) with the professional default being external. Close with the cache and bandwidth benefit — the same stylesheet is fetched once and reused across a thousand pages.",
            ],
            keyTerms: [
              { term: "Selector", definition: "The part of a CSS rule naming which elements to style — tag, .class, #id, or a combination." },
              { term: "Declaration block", definition: "The { property: value; … } portion of a CSS rule, holding semicolon-separated style declarations." },
              { term: "Specificity", definition: "A four-part score (inline, id, class, tag counts) that decides which rule wins when several target one element." },
              { term: "Cascade", definition: "CSS's conflict resolution — origin, then specificity, then source order, with !important reversing origin." },
              { term: "External stylesheet", definition: "A separate .css file linked from <head>, cached by the browser, applied site-wide — the professional default." },
            ],
            bullets: [
              "CSS separates presentation from structure: one stylesheet restyles a thousand pages.",
              "A rule = selector + declaration block of property: value pairs.",
              "Selector types: tag (p), class (.note), id (#main), pseudo (:hover), descendant and child.",
              "The cascade resolves conflicts: origin, then specificity, then source order.",
              "Specificity order: inline style > id > class/pseudo-class > element.",
              "Attach CSS inline (style attribute), internal (<style> block) or external (<link rel='stylesheet'>)."
            ],
            diagram: {
              kind: "flow",
              title: "How the cascade picks the winner",
              caption: "Four tiebreakers run in order whenever rules compete for one element.",
              steps: [
                {
                  label: "Collect matching rules",
                  note: "every selector that targets the element"
                },
                {
                  label: "Rank by origin",
                  note: "browser defaults < user < author styles"
                },
                {
                  label: "Rank by specificity",
                  note: "id beats class beats element"
                },
                {
                  label: "Break ties by source order",
                  note: "the last rule wins"
                },
                {
                  label: "Apply inheritance",
                  note: "unset properties flow from the parent"
                }
              ]
            },
            codeExample: {
              language: "html",
              caption: "attach.html - the three ways to attach CSS",
              code: "<!DOCTYPE html>\n<html>\n<head>\n  <link rel='stylesheet' href='style.css'>\n  <style>\n    /* internal stylesheet */\n    p { line-height: 1.6; }\n    .note { border-left: 3px solid #e8955c; }\n  </style>\n</head>\n<body>\n  <p class='note'>External + internal rules apply.</p>\n  <p style='color: #e8955c'>Inline style wins the cascade.</p>\n</body>\n</html>"
            },
            callout: {
              type: "tip",
              title: "Specificity in one breath",
              body: "Count selectors: inline style (1000) beats id (100) beats class (10) beats element (1). When scores tie, the later rule wins. That single sentence answers most cascade questions."
            },
            examQuestions: [
              {
                q: "What is CSS? Explain its syntax, selector types and the three ways of attaching CSS to a page.",
                marks: 7,
                outline: [
                  "Motivation: separation of presentation from structure",
                  "Rule syntax: selector + declaration block",
                  "Selector types: tag, class, id, pseudo, descendant with examples",
                  "The cascade: origin, specificity, source order",
                  "Inline vs internal vs external stylesheet",
                  "External <link> as the professional default",
                  "Worked example styling a page"
                ]
              },
              {
                q: "Differentiate inline, internal and external CSS.",
                marks: 2
              },
              {
                q: "Which wins: an id selector or a class selector, and why?",
                marks: 3
              }
            ],
          },
          {
            number: "3.2",
            title: "Backgrounds, colors and properties",
            body: [
              "The background family dresses any box, and the colour properties extend across the whole element. background-color accepts any Unit II colour format — #e8955c (hex), rgb(232,149,92) (functional), hsl(26,75%,62%) (hue-saturation-lightness) or a name. background-image: url(\"hero.jpg\") tiles an image across the box by default; the supporting properties control how — background-repeat (repeat, repeat-x, repeat-y, no-repeat), background-position (center, top right, '50% 20%', or two values), background-attachment (scroll with the page, or fixed to the viewport), and the modern background-size (cover fills the box and crops the overflow, contain fits the whole image inside the box). The shorthand background: #fff url(hero.jpg) no-repeat center/cover packs all of them in one declaration.",
              "Colour properties extend beyond backgrounds. color sets the text colour of an element and is inherited by descendants — set body { color: #2b1d12 } once and every paragraph inherits it unless overridden. border-color paints the border (which needs border-style and border-width to be visible). opacity takes a 0–1 value and affects the entire element including its content and children — different from rgba() which sets the colour's transparency alone and leaves the text fully opaque. The CSS3 colour extensions — rgba(232,149,92,0.5), hsl with alpha hsla(26,75%,62%,0.5), and the modern 8-digit hex #e8955c80 — let one colour carry its own transparency without a separate opacity layer.",
              "A worked example binds the theory together. The hero panel of a notes page: .hero { background: linear-gradient(135deg, #f6d365, #fda085); color: #2b1d12; padding: 4rem 2rem; } — a CSS3 linear-gradient as background, dark warm text on the warm gradient, generous padding for breathing room. A subtle overlay using rgba: .hero::before { content: \"\"; background: rgba(255,255,255,0.15); position: absolute; inset: 0; } tints the gradient lighter. Each property does one job; the combination produces a polished hero without any image file. The 'inset: 0' shorthand (top/right/bottom/left all zero) is a CSS3 trick for full-cover overlays.",
              "Contrast is a usability law, not a taste, and the WCAG ratio is the rule. Body text on its background should reach roughly 4.5:1 contrast ratio for normal text and 3:1 for large text — measured by the relative luminance formula, but the practical shortcut is to test with a contrast checker (WebAIM's online tool). #999 grey on white fails; #666 grey on white passes. This is the line between readable and merely decorative, and it is also a legal accessibility requirement in many jurisdictions. Designers pair colours with this constraint from the start: the palette picker that says 'these two pass at 4.5:1' is doing the WCAG arithmetic up front.",
              "For a 7-mark answer on backgrounds and colours: name the background family (background-color, -image, -repeat, -position, -size) with one trait each, show the shorthand background: declaration, distinguish color (text, inherited) from background-color (box, not inherited) from opacity (whole element) from rgba (one colour's alpha), state the WCAG 4.5:1 contrast rule for body text, and close with a worked hero-panel example showing linear-gradient, rgba overlay and inherited color in combination.",
            ],
            callout: {
              type: "exam",
              title: "Colour formats — the four you should name",
              body: "Hex (#e8955c, with #RRGGBBAA for alpha in CSS3). Functional RGB (rgb(232,149,92), rgba for transparency). HSL/HSLA (hsl(26,75%,62%) — designers prefer for hue-cycling). Named (red, AliceBlue — 140 words, imprecise). State the format, the alpha mechanism, and when each is preferred.",
            },
            bullets: [
              "background-color paints the box behind the content; color paints the text itself.",
              "background-image loads a picture; background-repeat controls tiling; background-position and -size place it.",
              "The shorthand background: color image repeat position / size sets everything in one line.",
              "CSS3 gradients (linear-gradient, radial-gradient) are generated images needing no file.",
              "color is inherited by descendants; background-color is not.",
              "Contrast is a law: body text should reach roughly 4.5:1 against its background (WCAG)."
            ],
            diagram: {
              kind: "compare",
              title: "color vs background-color",
              caption: "Two properties students mix up in every exam.",
              left: {
                heading: "color",
                items: [
                  "paints the text glyphs",
                  "inherited by children",
                  "set on body, carried everywhere",
                  "color: #2b1d12",
                  "contrast matters here"
                ]
              },
              right: {
                heading: "background-color / background-image",
                items: [
                  "paints the box behind content",
                  "not inherited",
                  "padding area included",
                  "background: #f6d365 url(bg.png)",
                  "gradients are backgrounds"
                ]
              }
            },
            codeExample: {
              language: "css",
              caption: "hero.css - the background family in one rule",
              code: ".hero {\n  background-color: #f6d365;                /* fallback */\n  background-image: linear-gradient(135deg, #f6d365, #fda085);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #2b1d12;                           /* text colour */\n  padding: 4rem 2rem;\n}\n\n/* the shorthand equivalent */\n.card { background: #fff url('paper.png') no-repeat center / cover; }"
            },
            keyTerms: [
              {
                term: "background-color",
                definition: "CSS property that paints the area behind an element's content and padding."
              },
              {
                term: "background shorthand",
                definition: "One declaration setting colour, image, repeat, position and size: background: #fff url(x.png) no-repeat center / cover."
              },
              {
                term: "linear-gradient",
                definition: "CSS3 function producing a smooth colour transition used as a generated background image."
              },
              {
                term: "Contrast ratio",
                definition: "WCAG measure of text vs background luminance; about 4.5:1 for body text."
              },
              {
                term: "Inheritance",
                definition: " colour passes to descendants; background properties do not."
              }
            ],
            examQuestions: [
              {
                q: "Explain the CSS background properties and colour formats with examples. Why does contrast matter?",
                marks: 7,
                outline: [
                  "The family: background-color, -image, -repeat, -position, -size",
                  "The background shorthand",
                  "Colour formats: hex, rgb(), rgba(), hsl(), names",
                  "CSS3 gradients as backgrounds",
                  "color vs background-color and inheritance",
                  "WCAG contrast ratio 4.5:1",
                  "Worked .hero rule"
                ]
              },
              {
                q: "Which CSS property sets the colour of text?",
                marks: 2
              },
              {
                q: "Write CSS for a non-repeating background image that covers the whole box, centred.",
                marks: 3
              }
            ],
          },
          {
            number: "3.3",
            title: "Manipulating text and using fonts",
            body: [
              "Typography is the largest surface a stylesheet touches — 90% of a content site's pixels are letters. The font family properties set the face: font-family takes a stack of candidates — font-family: \"Source Serif 4\", Georgia, serif; — the browser uses the first installed one and needs the generic family (serif, sans-serif, monospace, cursive, fantasy) as the final fallback for the case where none of the named faces are present. A safe stack pairs a preferred web font (if loaded) with a system equivalent (Georgia for serif body, system-ui or Arial for sans body) and the generic family. The font-family list is read left to right, so put the most specific name first.",
              "Font sizing and weight follow. font-size accepts absolute units (px, pt — fixed but inflexible) and the scalable units professionals prefer: rem (relative to the root element's font-size, so 1.5rem on a 16px root = 24px), em (relative to the parent's font-size — compounds through nesting), and percentages (relative to the parent). The professional default is body { font-size: 100% } (= 16px in every browser) and headings scaled in rem, so changing the root size rescales the whole page. font-weight runs 100 (thin) through 900 (black) with normal=400 and bold=700; font-style is normal, italic, or oblique; line-height is the vertical spacing — set as a unitless number (1.5 or 1.7) so it scales with the font; letter-spacing and word-spacing fine-tune the rhythm.",
              "Text is then aligned and shaped. text-align (left, right, center, justify — justify spreads words to fill the line, hyphenation recommended for narrow columns); text-decoration (underline, overline, line-through, none — strip the underline from links in nav bars, restore it for in-body links); text-transform (uppercase, lowercase, capitalize); text-indent (first-line indent of a paragraph); text-shadow (a CSS3 shadow for headlines — text-shadow: 2px 2px 4px rgba(0,0,0,0.3)); and white-space (normal wraps, nowrap prevents wrapping, pre preserves whitespace like a <pre> element). vertical-align controls inline elements' vertical position; direction sets RTL or LTR for Arabic or Hebrew.",
              "Web fonts arrive by @font-face or a Google Fonts <link>, letting pages speak beyond the five system fonts every operating system ships. @font-face is the native CSS3 mechanism: @font-face { font-family: 'Source Serif 4'; src: url('source-serif.woff2') format('woff2'); } declares the face, and font-family: 'Source Serif 4' then uses it. The Google Fonts shortcut is one <link> in <head> that fetches the CSS and the font file from Google's CDN. The font-display property (swap, fallback, optional, block) controls what the browser shows while the font loads — swap shows a fallback immediately and swaps when the web font arrives, eliminating the invisible-text flash. Always self-host or use a service that respects font-display, because waiting on fonts to load before showing text costs conversions.",
              "For a 7-mark answer on text and fonts: name the font-family stack with the generic fallback, contrast font-size units (px fixed, rem root-relative, em parent-relative), list five text properties (text-align, -decoration, -transform, -indent, -shadow) with one trait each, explain @font-face and the font-display: swap rule, and close with a worked body-text recipe (16px, 1.6 line-height, system-ui stack with serif fallback) that earns the readability mark.",
            ],
            keyTerms: [
              { term: "Font stack", definition: "A comma-separated list in font-family — the browser uses the first installed face, with the generic family as the final fallback." },
              { term: "rem", definition: "Font-size unit relative to the root element's font-size — scales the whole page when the root changes." },
              { term: "@font-face", definition: "CSS3 rule that declares a custom web font and its source file, letting pages use fonts beyond the OS default set." },
              { term: "line-height", definition: "The vertical spacing between lines of text — set unitless (1.5) so it scales with the font size." },
              { term: "font-display", definition: "Property controlling what shows during web-font loading — swap shows a fallback immediately, then swaps when the font arrives." },
            ],
            bullets: [
              "font-family takes a stack: the browser uses the first installed font, then the generic fallback.",
              "font-size units: px fixed, pt for print, rem root-relative, em parent-relative, % of parent.",
              "font-weight from 100 (thin) to 900 (black); font-style for italic.",
              "Text shaping: text-align, text-decoration, text-transform, text-indent, letter-spacing, line-height.",
              "line-height without a unit multiplies the font size (1.6 is the comfortable default).",
              "Web fonts arrive via @font-face or a Google Fonts <link>; font-display controls the swap."
            ],
            diagram: {
              kind: "compare",
              title: "Sizing text: px vs rem vs em",
              caption: "Three units, three different answers to 'how big?'.",
              left: {
                heading: "px - fixed",
                items: [
                  "absolute screen pixels",
                  "predictable but inflexible",
                  "ignores user font settings",
                  "bad for accessibility",
                  "ok for borders and shadows"
                ]
              },
              right: {
                heading: "rem / em - scalable",
                items: [
                  "rem: relative to root font-size",
                  "1.5rem on a 16px root = 24px",
                  "em: relative to the parent",
                  "respects user preferences",
                  "the professional default"
                ]
              }
            },
            codeExample: {
              language: "css",
              caption: "type.css - typography rules for a notes page",
              code: "@font-face {\n  font-family: 'Source Serif 4';\n  src: url('source-serif.woff2') format('woff2');\n  font-display: swap;\n}\n\nbody {\n  font-family: 'Source Serif 4', Georgia, serif;\n  font-size: 1rem;          /* 16px on the default root */\n  line-height: 1.6;\n  color: #2b1d12;\n}\nh1 { font-size: 2rem; font-weight: 700; }\np.meta { text-transform: uppercase; letter-spacing: 0.08em; }\na { text-decoration: none; }\na:hover { text-decoration: underline; }"
            },
            callout: {
              type: "tip",
              title: "Unitless line-height",
              body: "Write line-height: 1.6, never 1.6rem: a unitless value multiplies each element's own font size, so headings and small text keep proportional spacing automatically."
            },
            examQuestions: [
              {
                q: "Explain the CSS text and font properties with examples. Differentiate px, em and rem units.",
                marks: 7,
                outline: [
                  "font-family stack with generic fallback",
                  "font-size units: px, pt, rem, em, %",
                  "font-weight and font-style",
                  "text-align, text-decoration, text-transform, text-indent",
                  "line-height and why it should be unitless",
                  "@font-face / Google Fonts for web fonts",
                  "font-display and fallback behaviour"
                ]
              },
              {
                q: "What is a font stack? Write one for a serif heading.",
                marks: 2
              },
              {
                q: "Write CSS to load a custom font with @font-face and apply it to body.",
                marks: 3
              }
            ],
          },
          {
            number: "3.4",
            title: "Borders, boxes, margins and padding — the box model",
            body: [
              "Every element in CSS is a rectangular box, and the box model is its anatomy. From the inside out: the content (text or image, sized by width and height), wrapped in padding (transparent space inside the border, inherits the element's background colour), wrapped in the border (a drawn edge with its own width, style and colour, configurable per side), wrapped in the margin (transparent space outside the border pushing neighbour boxes away, never coloured). Each of these can be set per side (margin-top, padding-left, border-bottom) or via shorthand (margin: 10px 20px 30px 40px sets top right bottom left clockwise; margin: 10px 20px sets vertical horizontal). The diagram below shows the four layers as concentric rectangles.",
              "The historic trap of the box model is the arithmetic. By default — with box-sizing: content-box — the width property sets only the content width, so padding and border add to the box's real on-screen size. A box declared width: 300px with padding: 20px and border: 5px occupies 350px of horizontal space (300 content + 20 left padding + 20 right padding + 5 left border + 5 right border = 350). This is the surprise that breaks layouts: two 50%-wide columns each with 1px of padding do not fit on one line, because each is 50% + 2px wide. Modern CSS fixes the arithmetic with box-sizing: border-box, which makes width mean the whole box including padding and border — so 300px is 300px of occupied space, content shrinks to fit. Nearly every professional stylesheet opens with * { box-sizing: border-box; } applied to everything.",
              "A worked example makes the rule concrete. Consider .card { width: 300px; padding: 20px; border: 5px solid #e8955c; box-sizing: border-box; }. With border-box, the card occupies exactly 300px of layout space — the content area is 250px (300 − 20 left padding − 20 right padding − 5 left border − 5 right border = 250). Without border-box (the default content-box), the same declaration produces a 350px card. The lesson: declare box-sizing: border-box globally before any layout, and your arithmetic will match the rendered result. This is the first three lines of every modern stylesheet: *, *::before, *::after { box-sizing: border-box; }.",
              "Vertical margins between stacked boxes collapse — the larger of the two adjacent margins wins, not their sum. Two paragraphs with margin: 20px each have 20px of vertical gap between them, not 40px — the bottom margin of the upper paragraph and the top margin of the lower paragraph merge into one another and the larger value wins. Horizontal margins do not collapse (two side-by-side flex items keep both margins). This is the box model's most famous surprise, and the answer to 'why is the gap between my paragraphs half what I expected?' Padding and borders never collapse; only adjacent vertical margins of block-level siblings (or a parent and its first/last child). Flexbox and grid layouts disable margin collapsing entirely.",
              "For a 7-mark answer on the box model: draw the four concentric layers (content → padding → border → margin), state the default behaviour (width = content only, padding and border add to the box size), show the worked arithmetic (300px + 20px padding × 2 + 5px border × 2 = 350px occupied), explain the box-sizing: border-box fix and the global reset (* { box-sizing: border-box }), and close with the margin-collapse rule (vertical adjacent margins collapse to the larger, horizontal do not). Mention the shorthand order (top right bottom left) as a one-liner.",
            ],
            diagram: {
              kind: "layers",
              title: "The CSS box model",
              caption: "Inside out: content, padding, border, margin — the anatomy every layout is built from.",
              layers: [
                { label: "Margin", note: "transparent space outside (pushes neighbours)" },
                { label: "Border", note: "drawn edge — width · style · color" },
                { label: "Padding", note: "space inside border (inherits background)" },
                { label: "Content", note: "the text or image itself" },
              ],
            },
            callout: {
              type: "exam",
              title: "Box-model arithmetic — the worked example to write",
              body: "A box width: 300px, padding: 20px, border: 5px. With default content-box the box occupies 300 + 20×2 + 5×2 = 350px. With box-sizing: border-box it occupies exactly 300px and the content shrinks to 250px. State both, declare the border-box reset, and earn the marks.",
            },
            keyTerms: [
              { term: "Box model", definition: "CSS's anatomy of every element — content, padding, border and margin as concentric rectangles." },
              { term: "box-sizing: border-box", definition: "Makes width include padding and border, so the declared width is the real on-screen size — the modern default reset." },
              { term: "Margin collapse", definition: "Adjacent vertical margins of block siblings merge into the larger value, not the sum — horizontal margins do not collapse." },
              { term: "Padding", definition: "Transparent space inside the border that inherits the element's background colour." },
            ],
            bullets: [
              "Every element is a box: content, padding, border, margin - from inside out.",
              "Padding is inside the border and inherits the background; margin is transparent space outside.",
              "Default content-box: width sets only the content, so padding and border add to the real size.",
              "box-sizing: border-box makes width include padding and border - the modern default.",
              "Worked sum: 300px content + 20px padding both sides + 5px border both sides = 350px total.",
              "Vertical margins collapse: the larger of two adjacent margins wins, not their sum."
            ],
            codeExample: {
              language: "css",
              caption: "box.css - border-box arithmetic in practice",
              code: "*, *::before, *::after { box-sizing: border-box; }\n\n.card {\n  width: 300px;            /* total width, not just content */\n  padding: 20px;           /* 20px inside the border */\n  border: 5px solid #e8955c;\n  margin: 16px;            /* 16px of space outside */\n  background: #fff8ef;\n}\n/* content area = 300 - 40 - 10 = 250px */"
            },
            examQuestions: [
              {
                q: "Explain the CSS box model with a neat diagram and a worked example of width arithmetic.",
                marks: 7,
                outline: [
                  "Draw the four layers: content, padding, border, margin",
                  "Role of each layer and what inherits the background",
                  "Default content-box behaviour with arithmetic",
                  "box-sizing: border-box and why resets use it",
                  "Worked example: 300 + 40 + 10 = 350px",
                  "Margin collapse between stacked boxes",
                  "Padding vs margin contrast"
                ]
              },
              {
                q: "What does box-sizing: border-box change?",
                marks: 2
              },
              {
                q: "A box has width: 200px, padding: 10px and border: 5px. Compute its rendered width under content-box.",
                marks: 3
              }
            ],
          },
          {
            number: "3.5",
            title: "Styling lists",
            body: [
              "Lists are styled by three properties, all subsumed under the list-style shorthand. list-style-type changes the marker — disc (default for <ul>), circle, square, decimal (default for <ol>), lower-roman, upper-roman, lower-alpha, lower-greek, none (the first step of every navigation bar — without 'none' the menu shows bullets). list-style-image replaces the marker with your own small graphic — url('arrow.png') — useful for branded bullets but rare in modern code where a background-image on the <li> gives more control. list-style-position decides whether the marker sits inside the text block (inside, wrapping under the marker on the second line) or outside it (outside, the default — the marker hangs in the margin and wrapped lines align with the text start).",
              "The classic recipe for a horizontal menu turns a vertical bulleted list into a row of buttons in four lines. ul.nav { list-style: none; margin: 0; padding: 0; } strips the markers and the default indentation. ul.nav li { display: inline-block; } puts the items on one row instead of stacked. ul.nav a { display: block; padding: 0.5rem 1rem; text-decoration: none; } turns each link into a clickable box with breathing room. ul.nav a:hover { background: #e8955c; color: #fff; } adds the hover state — the visual feedback that says 'this is clickable'. The same pattern, with display: flex instead of inline-block, powers modern nav bars; flexbox adds gap and alignment for free.",
              "Vertical navigation menus, breadcrumbs, sidebars, footer link lists and category trees are all the same markup pattern: a <ul> of links, stripped of markers, styled as needed. The dropdown menu adds a nested <ul> inside an <li>: ul.nav li ul { display: none; position: absolute; } hides the submenu, ul.nav li:hover ul { display: block; } reveals it on hover — no JavaScript needed. A category tree nests <ul>s two or three levels deep with margin-left to indent each level. Breadcrumbs are an <ol> styled inline with » separators (li + li::before { content: '» '; }). Each is the same list markup, restyled by CSS.",
              "The definition list <dl> — alternating <dt> terms with <dd> descriptions — is styled like any pair of blocks: dt { font-weight: bold; } dd { margin-left: 2rem; }. It is the semantically correct list for a glossary, FAQ, or vocabulary list, even though many authors wrongly use a table. A note of caution: the list-style-type attribute on the HTML element (e.g. <ul type='square'>) is legacy and removed in HTML5 — the CSS list-style-type property is the modern way. The start and reversed attributes on <ol> remain valid in HTML5, but their visual rendering is also best controlled by CSS counters when the design gets complex.",
              "For a 7-mark answer on styling lists: name the three list-style properties (type, image, position) with one value each, demonstrate the four-line horizontal-menu recipe (strip markers → display: inline-block or flex → style the links → add :hover), show the nested-<ul> dropdown pattern, and close with the definition-list styling (dt bold, dd indented) and the legacy-vs-modern note (HTML type attribute is deprecated; CSS list-style-type is the modern way). The diagram below shows the four-step menu transformation.",
            ],
            diagram: {
              kind: "pipeline",
              title: "Turning a list into a menu",
              caption: "Four CSS rules transform a vertical bulleted list into a horizontal button bar.",
              stages: [
                { label: "Raw <ul>", note: "bulleted, indented, stacked" },
                { label: "list-style: none", note: "strip markers and indent" },
                { label: "display: flex", note: "put <li>s on one row" },
                { label: "style the <a>", note: "padding, no underline, hover colour" },
                { label: "Menu bar", note: "a horizontal clickable nav" },
              ],
            },
            bullets: [
              "list-style-type changes the marker: disc, circle, square, decimal, lower-roman, none.",
              "list-style-image swaps the marker for a picture; list-style-position moves it inside/outside the box.",
              "The list-style shorthand sets all three at once.",
              "Menu recipe: strip markers and padding, display the <li>s inline-block or flex, style the links.",
              "Nested <ul>s become dropdown menus: hidden by default, shown on li:hover.",
              "dl/dt/dd style like ordinary blocks: bold terms, indented descriptions."
            ],
            codeExample: {
              language: "css",
              caption: "menu.css - turning a list into a horizontal menu",
              code: "ul.nav {\n  list-style: none;      /* no bullets */\n  margin: 0;\n  padding: 0;\n  display: flex;         /* items on one row */\n  gap: 0.5rem;\n}\nul.nav a {\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  background: #e8955c; color: #fff;\n}\nul.nav a:hover { background: #2b1d12; }"
            },
            keyTerms: [
              {
                term: "list-style-type",
                definition: "CSS property choosing the marker: disc, circle, square, decimal, lower-roman, none."
              },
              {
                term: "list-style-image",
                definition: "CSS property replacing the marker with an image file."
              },
              {
                term: "list-style-position",
                definition: "CSS property placing the marker inside or outside the content box."
              },
              {
                term: "display: flex",
                definition: "Layout mode used to line list items up horizontally for menus."
              },
              {
                term: ":hover",
                definition: "Pseudo-class applied while the pointer rests on an element; drives menu feedback."
              }
            ],
            callout: {
              type: "tip",
              title: "Strip, flex, style",
              body: "Every list-to-menu answer has the same three-beat rhythm: strip the markers (list-style: none; margin/padding: 0), lay the items out (display: flex or inline-block), then style the links (padding, colour, :hover). Memorise the beats, not the whole sheet."
            },
            examQuestions: [
              {
                q: "Explain the styling of lists in CSS. Write the CSS to convert a <ul> into a horizontal navigation menu.",
                marks: 7,
                outline: [
                  "list-style-type with four values",
                  "list-style-image and list-style-position",
                  "The shorthand list-style",
                  "Four-line menu recipe: strip, flex, style, hover",
                  "Nested-list dropdown pattern",
                  "Styling dl/dt/dd",
                  "Why semantic list markup still matters"
                ]
              },
              {
                q: "Which CSS property removes the bullets from a list?",
                marks: 2
              },
              {
                q: "Write CSS to make list items sit in one row inside a nav bar.",
                marks: 3
              }
            ],
          },
          {
            number: "3.6",
            title: "Positioning using CSS",
            body: [
              "Positioning answers 'where does this box sit?' and builds on four core schemes plus a handful of modifiers. static is the default: normal flow, each block-level element stacking under the previous one in source order, top/right/bottom/left have no effect. relative keeps the element's place in flow (the gap where it would have been stays open) but offsets its painting with top/right/bottom/left — neighbours do not move to fill the shift. absolute yanks the element out of flow entirely (the gap closes) and positions it against its nearest positioned ancestor (any element with position: relative/absolute/fixed/sticky), falling back to the initial containing block (the page) — perfect for badges on cards, tooltips, overlays. fixed pins to the viewport — sticky headers that survive scrolling, chat bubbles that float in the corner. sticky (CSS3) scrolls normally, then sticks at an offset once reached — the table header that freezes while you scroll its rows.",
              "A worked positioning example. A product card with a 'Sale' badge: .card { position: relative; } establishes the card as the positioning context for its children. .badge { position: absolute; top: 8px; right: 8px; background: red; color: white; padding: 4px 8px; } yanks the badge out of flow and pins it to the card's top-right corner — exactly 8px from the top and 8px from the right of the card. Without the .card { position: relative; }, the badge would absolute-position against the page instead, ending up in the top-right corner of the viewport. This is the most common positioning bug: 'my absolute element is in the wrong place' — answer: the nearest positioned ancestor is not the one you think.",
              "On top of the four schemes sit three modifiers. z-index sets the stacking order of positioned elements — a higher z-index paints on top of a lower one — but only works on elements with position other than static. The classic trap: an element with z-index: 9999 but position: static is ignored entirely. float (left, right, none) is the legacy wrap-text-around-image tool — a floated element is taken out of flow and text wraps around it; clearfix (overflow: hidden or the modern display: flow-root on the parent) forces the parent to contain its floated children. display is the master switch — block, inline, inline-block (inline flow but block-level sizing), none (removes from rendering entirely), table/flex/grid are the layout engines.",
              "Flexbox and grid are the modern layout engines and the right answer for most positioning. Flexbox (display: flex on the parent) lays out children in a row or column, with alignment (align-items, justify-content), wrapping (flex-wrap), and per-child sizing (flex: 1 1 0) — the default for nav bars, card rows, button groups. Grid (display: grid) lays out children in a 2D matrix of rows and columns, defined by grid-template-columns: repeat(3, 1fr) — the default for page layouts, dashboards, galleries. The rule of thumb: flexbox for one-axis layouts (a row OR a column), grid for two-axis layouts (rows AND columns). Both replace the float-and-positioning hacks of CSS2.",
              "For a 7-mark answer on positioning: define the four schemes (static, relative, absolute, fixed, sticky) with one trait each and the table below for the contrast, explain z-index (stacking order, only works on positioned elements), float (legacy wrap-text, needs clearfix), and display (block, inline, inline-block, none, flex, grid), and close with the flexbox-vs-grid rule of thumb (flex for one-axis, grid for two-axis). Trace the worked card-with-badge example to demonstrate relative parent + absolute child.",
            ],
            table: {
              caption: "Positioning schemes.",
              headers: ["Scheme", "Left in flow?", "Positioned against", "Classic use"],
              rows: [
                ["static", "—", "normal flow", "default"],
                ["relative", "no", "own normal position", "nudge; anchor for children"],
                ["absolute", "yes", "nearest positioned ancestor", "badges, overlays"],
                ["fixed", "yes", "viewport", "sticky header"],
                ["sticky", "no*", "scroll container", "frozen table heads"],
              ],
            },
            callout: {
              type: "tip",
              title: "The absolute-positioning bug to remember",
              body: "'My absolute element is in the wrong corner.' Cause: the element's nearest positioned ancestor is not the one you think — it's positioning against the page or a distant parent. Fix: add position: relative to the parent you want as the anchor, before adding position: absolute to the child.",
            },
            bullets: [
              "static: the default - normal flow, offsets ignored.",
              "relative: stays in flow; offsets nudge it from its own position and give children a context.",
              "absolute: out of flow, anchored to the nearest positioned ancestor.",
              "fixed: out of flow, anchored to the viewport, ignores scrolling.",
              "sticky: in flow until a scroll threshold, then behaves like fixed.",
              "z-index stacks positioned elements; float is the legacy text-wrap tool; flexbox/grid do most layout today."
            ],
            diagram: {
              kind: "matrix",
              title: "The four position values",
              caption: "Two questions decide the value: is it taken out of flow, and what does it anchor to?",
              axes: {
                x: "Anchor: ancestor/flow to viewport",
                y: "In normal flow to taken out of flow"
              },
              quadrants: [
                {
                  label: "relative",
                  note: "in flow, offset from its own position"
                },
                {
                  label: "fixed",
                  note: "out of flow, pinned to the viewport"
                },
                {
                  label: "absolute",
                  note: "out of flow, nearest positioned ancestor"
                },
                {
                  label: "static",
                  note: "in flow, offsets ignored (default)"
                }
              ]
            },
            codeExample: {
              language: "css",
              caption: "badge.css - relative parent, absolute child",
              code: ".card {\n  position: relative;    /* context for children */\n  width: 300px;\n}\n.badge {\n  position: absolute;    /* anchored to .card */\n  top: 8px;\n  right: 8px;\n  background: #c0392b; color: #fff;\n  padding: 4px 8px;\n  z-index: 2;\n}\n.toolbar { position: sticky; top: 0; }  /* sticks while scrolling */"
            },
            keyTerms: [
              {
                term: "position: static",
                definition: "Default scheme: normal document flow, top/right/bottom/left ignored."
              },
              {
                term: "position: relative",
                definition: "Element stays in flow; offsets shift it from its own spot; acts as the context for absolute children."
              },
              {
                term: "position: absolute",
                definition: "Element leaves the flow and anchors to the nearest positioned ancestor."
              },
              {
                term: "position: fixed",
                definition: "Element anchors to the viewport and stays put while the page scrolls."
              },
              {
                term: "z-index",
                definition: "Stacking order for positioned elements; higher paints on top; ignored on static elements."
              }
            ],
            examQuestions: [
              {
                q: "Explain CSS positioning schemes (static, relative, absolute, fixed, sticky) with examples. What is z-index?",
                marks: 7,
                outline: [
                  "static: default flow, offsets ignored",
                  "relative: offset from own position, context for children",
                  "absolute: out of flow, nearest positioned ancestor",
                  "fixed: viewport-anchored, scroll-proof",
                  "sticky: flow until threshold, then fixed-like",
                  "z-index stacking and its static-element trap",
                  "Worked badge example"
                ]
              },
              {
                q: "Why does z-index have no effect on a static element?",
                marks: 2
              },
              {
                q: "Write CSS to pin a 'Sale' badge at the top-right corner of a card.",
                marks: 3
              }
            ],
          },
          {
            number: "3.7",
            title: "CSS2 and CSS3",
            body: [
              "CSS2 (1998) built the complete foundation and is the baseline every browser has honored for two decades. Its spec defines the box model (margin, padding, border, content), the cascade and inheritance, the selector system (universal *, type, .class, #id, descendant, child >, adjacent sibling +, attribute selectors [type=\"text\"], pseudo-classes :hover :first-child and pseudo-elements :before :after), the positioning schemes of §3.6 (static, relative, absolute, fixed), media types (@media print, @media screen), paged-media rules for printing, and the table layout model. CSS2 is the syllabus of sections 3.1–3.6 — anything you can do with that toolset is CSS2, and every browser on every device supports it.",
              "CSS3 broke the monolithic spec into modules and brought the modern toolbox. The visual effects module gave us rounded corners and shadows (border-radius, box-shadow, text-shadow); the backgrounds and borders module added multiple backgrounds and gradient fills (linear-gradient, radial-gradient); the transitions and animations module gave motion (transition: property duration timing-function; @keyframes for multi-step motion; transform: rotate/scale/skew/translate for GPU-accelerated movement); the web fonts module (@font-face) ended the five-system-font era; the color module added rgba, hsl, opacity and 8-digit hex; the selectors module upgraded :nth-child(), :nth-of-type(), attribute-substring matches [attr^=val], and the ::double-colon pseudo-element syntax.",
              "The two layout modules — flexbox and grid — replaced the float-and-positioning hacks of CSS2. Flexbox (Flexible Box Layout Module) lays out children on one axis (row or column) with alignment, wrapping and flexible sizing — perfect for nav bars, card rows, button groups. Grid (CSS Grid Layout Module) lays out children in a 2D matrix of rows and columns — perfect for page layouts, dashboards, galleries. Both ship in every modern browser and together obsolete the table-based and float-based layouts of the CSS2 era. The display: flex and display: grid declarations unlock them; the property families (justify-content, align-items, gap, flex, grid-template-columns) drive them.",
              "Media queries are CSS3's responsive-design engine and the most exam-critical feature. @media (max-width: 600px) { .nav { flex-direction: column; } } applies the rule only when the viewport is 600px wide or narrower — collapsing a horizontal nav into a vertical one on phones. The media query syntax: @media (condition) { rules } — conditions test width (min-width, max-width), height, orientation (landscape, portrait), aspect-ratio, resolution, and the modern prefers-color-scheme (dark mode) and prefers-reduced-motion. The mobile-first pattern writes base styles for small screens, then progressively adds desktop rules with min-width queries — the professional default.",
              "For a 7-mark answer on CSS2 vs CSS3: state CSS2 (1998) is the foundation (box model, cascade, selectors, positioning, media types), then list CSS3's modular additions in five groups: visual effects (border-radius, box-shadow), gradients and multiple backgrounds, transitions/animations/transforms, web fonts (@font-face), and the layout engines (flexbox, grid). Close with media queries (@media (max-width: 600px) { … }) as the responsive-design engine and one worked example (collapse a horizontal nav to vertical on phones). The exam contrast in one line: CSS2 = structure and positioning; CSS3 = effects, layout engines and responsiveness.",
            ],
            diagram: {
              kind: "compare",
              title: "CSS2 vs CSS3",
              caption: "CSS2 (1998) is the foundation; CSS3 is the modular toolbox on top of it.",
              left: {
                heading: "CSS2 — the foundation (1998)",
                items: ["box model, cascade, inheritance", "selectors: type, .class, #id, descendant, child", "positioning: static, relative, absolute, fixed", "media types (@media print)"],
              },
              right: {
                heading: "CSS3 — the modular toolbox",
                items: ["border-radius, box-shadow, gradients", "transitions, @keyframes, transforms", "@font-face, rgba, hsl, opacity", "flexbox, grid, media queries"],
              },
            },
            bullets: [
              "CSS2 (1998) is the foundation: box model, cascade, inheritance, selectors, positioning, media types.",
              "CSS3 split into modules; browsers implement and ship them independently.",
              "Visual effects: border-radius, box-shadow, text-shadow, opacity, rgba/hsl colour.",
              "Backgrounds: gradients, multiple backgrounds, background-size.",
              "Transforms, transitions and @keyframes animation without JavaScript.",
              "Layout: flexbox (one axis) and grid (two axes); media queries drive responsive design."
            ],
            codeExample: {
              language: "css",
              caption: "modern.css - a CSS3 button with responsive layout",
              code: ".btn {\n  border-radius: 8px;                    /* CSS3 corners */\n  box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n  background: linear-gradient(#fda085, #f6d365);\n  transition: background 0.3s;           /* smooth hover */\n}\n.btn:hover { background: linear-gradient(#f6d365, #fda085); }\n\n.cards { display: flex; flex-wrap: wrap; gap: 1rem; }\n\n@media (max-width: 600px) {\n  .cards { flex-direction: column; }     /* stack on phones */\n}"
            },
            keyTerms: [
              {
                term: "border-radius",
                definition: "CSS3 property rounding a box's corners."
              },
              {
                term: "transition",
                definition: "CSS3 property animating a property change over time (duration, easing)."
              },
              {
                term: "@keyframes",
                definition: "CSS3 at-rule defining animation stages a property passes through."
              },
              {
                term: "Media query",
                definition: "@media condition applying rules only when the viewport matches (width, orientation)."
              },
              {
                term: "Flexbox",
                definition: "CSS3 one-axis layout module with alignment, wrapping and flexible sizing."
              }
            ],
            callout: {
              type: "tip",
              title: "Say 'modules'",
              body: "The one-word CSS3 answer is modular: instead of one spec, CSS3 is a family of modules (colours, backgrounds, transforms, animations, layout, media queries) browsers can adopt one by one. Open your CSS2-vs-CSS3 answer with it."
            },
            examQuestions: [
              {
                q: "Differentiate CSS2 and CSS3 with examples of CSS3 modules.",
                marks: 7,
                outline: [
                  "CSS2 foundation: box model, cascade, selectors, positioning, media types",
                  "CSS3 modular structure explained",
                  "Visual effects: border-radius, box-shadow, gradients",
                  "Transforms, transitions, @keyframes",
                  "Web fonts (@font-face) and rgba/hsl colour",
                  "Flexbox and grid layout",
                  "Media queries for responsiveness with a worked @media rule"
                ]
              },
              {
                q: "What is a media query in CSS3?",
                marks: 2
              },
              {
                q: "Write CSS3 to give a button rounded corners, a shadow and a hover transition.",
                marks: 3
              }
            ],
          },
          {
            number: "3.8",
            title: "JavaScript: variables, functions, control flow and pop-ups",
            body: [
              "JavaScript's core grammar, in exam-ready order, mirrors the C family that every computer-science student has already met. Variables are declared three ways: let (block-scoped, re-assignable — the modern default), const (block-scoped, fixed binding — for values that should not change), or the legacy var (function-scoped, hoisted — avoid in new code). Types are dynamic: a variable holds any value (number, string, boolean, object, array, null, undefined) and changes type on reassignment. Numbers are IEEE-754 doubles (no separate integer type); strings are immutable sequences wrapped in single or double quotes or the template literal backticks (`Hello, ${name}!`) that interpolate expressions.",
              "Operators and conditions are the second tier. Arithmetic (+, -, *, /, %, ** for exponent), assignment (=, +=, -=), comparison (mind == loose equality versus === strict equality — == coerces types so 5 == '5' is true; === does not, so 5 === '5' is false; always use === in modern code), logical (&& and, || or, ! not, plus the ?? nullish coalescing operator that fills in only null/undefined). Branching: if (condition) { … } else if (…) { … } else { … }; the ternary one-liner ok ? 'Saved' : 'Failed'; and switch (role) { case 'admin': … break; default: … } for multi-way branches on one value — forgetting break lets cases spill into each other, the classic switch trap.",
              "Loops repeat work. for (let i = 0; i < 10; i++) is the counted loop of every C-family language. while (condition) { … } tests before each pass; do { … } while (condition) tests after, guaranteeing at least one pass. for…of iterates over the values of an iterable (an array, a string): for (const tag of tags) { … }. for…in iterates over the keys of an object: for (const key in note) { … }. Loop control is break (exit the loop immediately) and continue (skip to the next round). The professional default for arrays is for…of (cleaner than indexed for, safer than for…in which iterates prototype keys too); forEach, map, filter, reduce are the array-method equivalents.",
              "Functions are JavaScript's first-class citizens: they can be assigned to variables, passed as arguments, returned from other functions — the foundation of callbacks and event handlers. A function declaration function greet(name) { return `Hello, ${name}`; } is hoisted (callable before its declaration). A function expression const greet = function(name) { … } is not hoisted. The modern arrow function const greet = (name) => `Hello, ${name}` has lexical this (no rebinding), is shorter, and is the default for callbacks. Parameters can have defaults (function greet(name = 'friend') { … }), and the rest parameter (function max(...nums) { … }) collects any number of arguments into an array. Functions return a value with return; without it, they return undefined.",
              "Pop-up boxes are the three browser dialogs that ship with the window object. alert('Saved!') shows a message and a single OK button — used for notifications, never for confirmations (no Cancel). confirm('Delete this note?') shows a message with OK and Cancel buttons and returns true or false — the workhorse for destructive-action confirmation. prompt('Your name?') shows a message, a text input, and OK/Cancel; returns the typed string or null. All three are modal (block the page until dismissed) and synchronous (freeze the event loop), so they are debugging and learning tools more than production UI — modern apps use custom modal dialogs styled with CSS and animated with JavaScript. For a 7-mark answer: name the three variable declarations (let, const, var) with one trait each, contrast == and ===, list four loop types with one example, show function declaration vs arrow function, and name the three pop-ups with one use each.",
            ],
            keyTerms: [
              { term: "let / const / var", definition: "JavaScript's three variable declarations — let (block, mutable), const (block, fixed), var (function, hoisted, legacy)." },
              { term: "===", definition: "Strict equality — no type coercion; 5 === '5' is false. Always prefer over == (loose equality, coerces types)." },
              { term: "Arrow function", definition: "Modern function expression (x) => x + 1 with lexical this — the default for callbacks and event handlers." },
              { term: "alert / confirm / prompt", definition: "The three browser pop-up dialogs — notification, yes/no, and text input. Modal and synchronous; debugging UI more than production UI." },
            ],
            bullets: [
              "Variables: let (block-scoped, re-assignable), const (fixed binding), var (legacy function-scoped).",
              "Types: number, string, boolean, null, undefined, symbol, bigint - plus objects and arrays.",
              "Always use === : == coerces types (5 == '5' is true, 5 === '5' is false).",
              "Control flow: if/else, switch, for, while, do-while, for...of, for...in.",
              "Functions are first-class: declarations, expressions, arrow functions, callbacks.",
              "Pop-ups: alert (message only), confirm (returns true/false), prompt (returns text or null)."
            ],
            diagram: {
              kind: "flow",
              title: "Anatomy of a function call",
              caption: "Four steps every call passes through, in any language.",
              steps: [
                {
                  label: "Call with arguments",
                  note: "greet('Amara')"
                },
                {
                  label: "Scope created",
                  note: "parameters bound, locals fresh"
                },
                {
                  label: "Body executes",
                  note: "statements run in order"
                },
                {
                  label: "Return",
                  note: "value handed back, scope discarded"
                }
              ]
            },
            codeExample: {
              language: "javascript",
              caption: "basics.js - variables, decisions, loops and pop-ups",
              code: "let notes = ['Unit I', 'Unit II', 'Unit III'];\nconst PASS = 4;\n\nfunction check(count) {\n  if (count >= PASS) {\n    alert('Enough notes: ' + count);\n  } else if (confirm('Add one more note?')) {\n    let title = prompt('Note title:', 'Unit IV');\n    notes.push(title || 'Untitled');\n  }\n  return notes.length;\n}\n\nfor (let i = 0; i < notes.length; i++) {\n  console.log(i + ': ' + notes[i]);\n}\ncheck(notes.length);"
            },
            callout: {
              type: "tip",
              title: "The === rule",
              body: "Write === everywhere. Loose == coerces types and produces famous traps ('' == 0 is true). In exams, quoting one such trap proves you understand why strict equality exists."
            },
            examQuestions: [
              {
                q: "Explain JavaScript variables, data types, control flow and pop-up boxes with examples.",
                marks: 7,
                outline: [
                  "let / const / var scoping",
                  "Primitive data types",
                  "Operators and the == vs === contrast",
                  "if/else and switch",
                  "Loops: for, while, do-while, for...of",
                  "Function declaration and arrow function",
                  "alert, confirm, prompt with their return values"
                ]
              },
              {
                q: "Differentiate == and === in JavaScript.",
                marks: 2
              },
              {
                q: "What do alert(), confirm() and prompt() each return?",
                marks: 3
              }
            ],
          },
          {
            number: "3.9",
            title: "JavaScript objects and building your own",
            body: [
              "JavaScript is object-based: almost everything is an object. Strings carry methods (.toUpperCase(), .slice(), .replace() — 'foo'.toUpperCase() returns 'FOO'). Arrays are objects with a .length property and methods (push, pop, shift, unshift, slice, splice, join, forEach, map, filter, reduce). The browser and the page itself are objects (window, document, navigator). Functions are objects (they have a .name and a .length parameter count and can carry their own properties). The primitive types (number, string, boolean, null, undefined) are not objects, but JavaScript auto-wraps them when you call a method — 'foo'.length works because the string is briefly wrapped in a String object.",
              "A plain object is a bag of properties created literally. let note = { title: 'Unit III', pages: 12, done: false, tags: ['css', 'js'] }; — read with note.title or note['title'], changed by assignment (note.title = 'New title'), extended at will (note.author = 'Amara' adds a new property), and deleted with delete note.author. The for…in loop visits each property name; Object.keys(note), Object.values(note), Object.entries(note) return arrays of names, values, and [name, value] pairs. Methods are properties whose values are functions: let note = { title: 'X', print() { console.log(this.title); } }; — note.print() calls the method, and inside it this refers to the note itself.",
              "Building your own object kinds has three idioms, in historical order. Factory functions return fresh object literals: function makeNote(t) { return { title: t, print() { console.log(this.title); } }; } — simple, no this-binding surprises, but each instance gets its own copy of every method. Constructor functions are called with new: function Note(t) { this.title = t; } Note.prototype.print = function() { console.log(this.title); }; — shared methods live on the prototype, so all instances share one function. new Note('X') creates an empty object, sets its prototype to Note.prototype, calls Note with this bound to the new object, and returns it (or the constructor's explicit return value if it's an object).",
              "The modern class syntax is the same machinery written cleanly: class Note { constructor(t) { this.title = t; } print() { return this.title; } } — declared with class, initialised in the constructor, methods defined inside the body and shared via prototype automatically. Inheritance is class SharedNote extends Note { constructor(t, share) { super(t); this.share = share; } print() { return '[shared] ' + super.print(); } } — extends reuses the parent, super(t) calls the parent's constructor, super.print() calls the parent's method, and overriding a method redefines it. Static members belong to the class itself: static count() returns Note.count() not new Note().count(); getters and setters are get prop() { … } / set prop(v) { … }.",
              "For a 7-mark answer: define JavaScript as object-based (almost everything is an object, primitives are auto-wrapped), demonstrate a plain object literal with read/change/extend/delete, show the three idioms for building object kinds (factory function, constructor + prototype, class syntax), and explain class-based inheritance (extends, super, override). Close with the rule that 'this inside a method refers to the current instance' and that class syntax is the modern default because it produces the same prototype machinery with cleaner syntax. The code example from Unit IV §4.16 shows the same pattern in PHP.",
            ],
            callout: {
              type: "exam",
              title: "Three idioms, one outcome",
              body: "Factory functions, constructor functions with prototype, and class syntax all produce objects with shared methods. Modern code uses class (cleanest syntax); understanding the prototype chain underneath still matters for inheritance questions.",
            },
            bullets: [
              "Almost everything in JavaScript is an object; even primitives auto-wrap to expose methods.",
              "Plain objects are literal bags of properties: created, read, changed, extended, deleted at will.",
              "Factory functions return fresh literals - simple, but each instance duplicates its methods.",
              "Constructor functions invoked with new set properties on this and share methods via prototype.",
              "class syntax is the same machinery written cleanly: constructor, methods, extends.",
              "The arrow operator -> does not exist here; methods are called with dot notation."
            ],
            diagram: {
              kind: "compare",
              title: "One-off object vs a family of objects",
              caption: "Literals model one thing; factories, constructors and classes model many.",
              left: {
                heading: "Object literal (one-off)",
                items: [
                  "{ title: 'Unit III', pages: 12 }",
                  "read: note.title",
                  "extend: note.author = 'Amara'",
                  "delete: delete note.pages",
                  "right for single records"
                ]
              },
              right: {
                heading: "Constructor / class (many)",
                items: [
                  "class Note { constructor(t) {...} }",
                  "new Note('Unit IV') per instance",
                  "methods shared via prototype",
                  "extends for inheritance",
                  "right for repeated shapes"
                ]
              }
            },
            codeExample: {
              language: "javascript",
              caption: "objects.js - literal, factory and class",
              code: "// 1. object literal\nconst note = { title: 'Unit III', pages: 12 };\nnote.author = 'Amara';\n\n// 2. factory function\nfunction makeNote(t) {\n  return { title: t, print() { console.log(this.title); } };\n}\n\n// 3. class (constructor + prototype methods)\nclass Note {\n  constructor(title) { this.title = title; }\n  print() { return this.title; }\n}\nconst n = new Note('Unit IV');\nconsole.log(n.print());"
            },
            keyTerms: [
              {
                term: "Object literal",
                definition: "A one-off object written as { key: value, ... } pairs."
              },
              {
                term: "Constructor function",
                definition: "A function invoked with new that initialises this and shares methods through the prototype."
              },
              {
                term: "class",
                definition: "ES6 syntax wrapping constructor functions: constructor method, shared methods, extends."
              },
              {
                term: "prototype",
                definition: "The object where methods are stored and shared among all instances created by one constructor."
              },
              {
                term: "this",
                definition: "Inside a method, the object the method was called on."
              }
            ],
            examQuestions: [
              {
                q: "Explain JavaScript objects. How can you create your own objects using factory functions, constructors and classes?",
                marks: 7,
                outline: [
                  "Object-based nature of JavaScript",
                  "Plain object literal with read/change/extend/delete",
                  "Factory function returning fresh literals",
                  "Constructor function with new and this",
                  "Prototype method sharing",
                  "class syntax with constructor and methods",
                  "Inheritance with extends"
                ]
              },
              {
                q: "What does the new keyword do in JavaScript?",
                marks: 2
              },
              {
                q: "Write a class Note with a constructor taking a title and one method returning it.",
                marks: 3
              }
            ],
          },
          {
            number: "3.10",
            title: "The DOM and the browser environment",
            body: [
              "When the browser parses HTML, it builds the DOM — the Document Object Model: a live, in-memory tree of every element, with document at the root, attributes as edges, and text as leaf nodes. The browser reads <html><head><title>X</title></head><body><h1>Hello</h1><p>World</p></body></html> and produces document → html → head → title → 'X' (text) and html → body → h1 → 'Hello', body → p → 'World'. The tree is the page: change the tree (add a node, change a text value, set an attribute) and the rendering changes instantly — no reload needed, no round trip to the server. This is what makes JavaScript-driven interactivity possible: the script reaches into the tree, mutates it, and the browser repaints.",
              "Around the DOM, the window object is the browser environment's global scope. window carries document (the DOM root), navigator (the browser identity — navigator.userAgent, navigator.language, navigator.platform), location (the current URL — read location.href, set location.href = '...' to navigate, location.reload() to refresh), history (history.back(), history.pushState() for SPA routing), screen (screen.width, screen.height, the device's display), and the timers setTimeout(fn, ms) and setInterval(fn, ms) for delayed and repeating code. Every variable declared at the top level of a script is a property of window; alert, confirm and prompt are methods on it.",
              "The document exposes the standard entry points for finding elements. getElementById('title') returns the single element with that unique id (fast, the legacy default). querySelector('#main .note p') returns the first element matching any CSS selector — the modern default because it uses the selector engine you already know. querySelectorAll('.note') returns a static NodeList of all matches (iterate with forEach in modern browsers). getElementsByClassName('note') and getElementsByTagName('p') return live HTMLCollections — collections that update automatically as the DOM changes, which is occasionally useful but usually surprising; prefer querySelectorAll for predictability.",
              "A worked traversal shows the tree in action. Starting from a button inside a card: const btn = document.querySelector('.card .save'); → const card = btn.closest('.card'); (closest walks up ancestors until it matches the selector) → const title = card.querySelector('.title').textContent; → const list = card.querySelector('.items'); → list.children (an HTMLCollection of the <li> children) → Array.from(list.children).map(li => li.textContent) (convert to array and map to text). The traversal vocabulary: parentNode (direct parent), children (element children only), childNodes (all nodes including text), nextElementSibling / previousElementSibling (skip text nodes), firstElementChild / lastElementChild.",
              "For a 7-mark answer: define the DOM as the browser's live in-memory tree of every element (with document at the root), state that the tree is the page (change the tree → instant re-render, no reload), list the window object's six children (document, navigator, location, history, screen, timers) with one trait each, and the document's four entry points (getElementById, querySelector, querySelectorAll, getElementsByClassName/TagName). Close with the worked traversal (.closest, .children, .nextElementSibling) and the live-vs-static collection distinction. The diagram below shows the tree shape.",
            ],
            diagram: {
              kind: "layers",
              title: "The DOM tree",
              caption: "The browser's live map of the page — and JavaScript's playground.",
              layers: [
                { label: "document", note: "the root — the page itself" },
                { label: "<html>", note: "root element" },
                { label: "<head> · <body>", note: "title/meta · everything visible" },
                { label: "<h1> · <p> · <ul> → <li>", note: "every element is a node" },
              ],
            },
            keyTerms: [
              { term: "DOM", definition: "Document Object Model — the browser's live in-memory tree of every element, with document at the root." },
              { term: "window", definition: "The browser environment's global object — carries document, navigator, location, history, screen and the timers." },
              { term: "querySelector", definition: "The modern default for finding elements — takes any CSS selector, returns the first match or a NodeList of all matches." },
              { term: "Live HTMLCollection", definition: "A collection returned by getElementsByClassName/TagName that auto-updates as the DOM changes; prefer querySelectorAll for predictability." },
            ],
            bullets: [
              "The DOM is the live tree the browser builds from your HTML; changing the tree changes the page.",
              "document is the root object; elements, attributes and text are all nodes.",
              "window is the global browser object: document, navigator, location, history, screen, localStorage.",
              "Finding elements: getElementById, getElementsByClassName (live), querySelector / querySelectorAll.",
              "Traversal: parentNode, children, firstElementChild, nextElementSibling, closest(selector).",
              "querySelector accepts any CSS selector - the modern default entry point."
            ],
            codeExample: {
              language: "javascript",
              caption: "traverse.js - finding and walking the DOM",
              code: "const title = document.getElementById('title');\nconst card = document.querySelector('.card');      // first match\nconst notes = document.querySelectorAll('li.note'); // all matches\n\nconst card2 = title.closest('.card');   // walk up the tree\nconst first = card2.firstElementChild;  // first child element\nconst next  = first.nextElementSibling; // sibling walk\n\nconsole.log(card.dataset.id);           // read data-id attribute\nconsole.log(notes.length);              // how many matched"
            },
            callout: {
              type: "tip",
              title: "Static vs live collections",
              body: "querySelectorAll returns a static NodeList (a snapshot); getElementsByClassName returns a live HTMLCollection that updates as the DOM changes. Knowing which is which explains mysterious off-by-one bugs."
            },
            examQuestions: [
              {
                q: "What is the DOM? Explain the window object and the standard methods of finding and traversing elements.",
                marks: 7,
                outline: [
                  "Define the DOM as the live element tree rooted at document",
                  "Tree changes re-render instantly, no reload",
                  "window and its children: document, navigator, location, history",
                  "getElementById vs querySelector vs querySelectorAll",
                  "Traversal: parentNode, children, nextElementSibling, closest",
                  "Live vs static collections",
                  "Worked traversal example"
                ]
              },
              {
                q: "Differentiate getElementById and querySelector.",
                marks: 2
              },
              {
                q: "What does closest('.card') return when no ancestor matches?",
                marks: 3
              }
            ],
          },
          {
            number: "3.11",
            title: "Manipulation using the DOM",
            body: [
              "DOM scripting is a four-verb vocabulary: find, read, change, create. Find: document.querySelector('#title') locates an element by any CSS selector — the modern default. Read and change its content: el.textContent = 'New text' sets the safe text (no HTML parsing — what you write is what shows, no XSS risk); el.innerHTML = '<strong>X</strong>' parses the string as HTML (powerful, dangerous with user input — never set innerHTML from a visitor's text without escaping). Read and change attributes: el.getAttribute('href') reads, el.setAttribute('href', '...') writes, el.removeAttribute('href') deletes. Read and change classes: el.classList.add('on'), .remove('on'), .toggle('on') (add if missing, remove if present), .contains('on') (boolean check) — preferred over string-munging className. Read and change inline styles: el.style.color = '#b3541e'; el.style.backgroundColor = '#fff' (note camelCase for hyphenated properties).",
              "Create and insert nodes from scratch. document.createElement('li') creates a new detached <li> element; you fill it (li.textContent = 'New note'), set attributes (li.className = 'note'; li.dataset.id = '42'), and then attach it to the document. parent.appendChild(li) inserts at the end of parent's children; parent.insertBefore(li, referenceNode) inserts before a specific child. Modern additions: parent.append(li) (like appendChild but accepts multiple args and strings); parent.prepend(li) (inserts at the start); li.before(otherLi) and li.after(otherLi) (insert siblings relative to li). Removal: parent.removeChild(li) (legacy) or li.remove() (modern). Replacing: parent.replaceChild(newLi, oldLi).",
              "A worked dynamic-list example is the pattern behind to-do apps, comment feeds, and cart widgets. Read a value from an input: const text = input.value. Build a new element: const li = document.createElement('li'); li.textContent = text; li.className = 'note';. Append it to the list: list.append(li). Clear the input: input.value = ''. The whole sequence is five lines and produces a new visible list item without any page reload. Add an event listener to a delete button inside each li: li.querySelector('.del').addEventListener('click', () => li.remove()); — clicking the delete button removes the li from the DOM, and the browser repaints instantly. This is DHTML in its purest form (§3.13).",
              "Traversal walks the tree from one node to its relatives. parentNode is the direct parent (or null for document). children is the element-only HTMLCollection of child elements; childNodes includes text and comment nodes (rarely what you want). nextElementSibling and previousElementSibling skip text nodes to reach the next/previous element; nextSibling / previousSibling include text nodes (the legacy pair). firstElementChild / lastElementChild reach the first/last element child. The closest(selector) method walks up ancestors until one matches the selector — invaluable for finding a card from a button inside it. The Array.from(nodeList) conversion is the bridge between DOM collections and array methods (map, filter, reduce).",
              "Performance matters because every DOM mutation triggers reflow (layout recalculation) and repaint (pixel redraw). Reflow is expensive when the change affects geometry (width, height, position); repaint is cheaper when only colour changes. The rule: batch your mutations rather than drip-feeding them — build a DocumentFragment, append all your nodes to it, then attach the fragment to the document in one operation. For a 7-mark answer on DOM manipulation: list the four verbs (find, read, change, create) with one method each, contrast textContent (safe) vs innerHTML (powerful but XSS-risky), show the dynamic-list recipe (createElement → textContent → append → addEventListener), and close with the traversal vocabulary (parentNode, children, nextElementSibling, closest) and the batch-mutations performance rule.",
            ],
            callout: {
              type: "warning",
              title: "innerHTML and XSS",
              body: "el.innerHTML = userInput parses the string as HTML — a visitor's <script> tag runs. Always use el.textContent for plain text, or escape with a library like DOMPurify before setting innerHTML. The Unit IV §4.8 server-side htmlspecialchars() is the same rule applied on the server.",
            },
            bullets: [
              "The four verbs of DOM scripting: find, read, change, create (and remove).",
              "textContent is safe text; innerHTML parses HTML and opens the XSS door.",
              "createElement + textContent/classList + appendChild build nodes from scratch.",
              "classList.add/remove/toggle manages classes without touching className strings.",
              "remove() deletes a node; replaceChild and insertBefore position changes.",
              "Every mutation triggers reflow and repaint - batch changes for performance."
            ],
            diagram: {
              kind: "pipeline",
              title: "From mutation to pixels",
              caption: "What the browser does after each line of DOM code.",
              stages: [
                {
                  label: "Select node",
                  note: "querySelector or getElementById"
                },
                {
                  label: "Mutate",
                  note: "textContent, classList, appendChild"
                },
                {
                  label: "Style recalculation",
                  note: "CSSOM reapplied"
                },
                {
                  label: "Reflow",
                  note: "geometry recomputed if size/position changed"
                },
                {
                  label: "Repaint",
                  note: "pixels redrawn on screen"
                }
              ]
            },
            codeExample: {
              language: "javascript",
              caption: "add-note.js - build and insert a list item safely",
              code: "const input = document.querySelector('#note-input');\nconst list  = document.querySelector('#notes');\n\nfunction addNote(text) {\n  const li = document.createElement('li');   // detached node\n  li.textContent = text;                     // safe, no HTML parsing\n  li.className = 'note';\n  li.dataset.id = Date.now();\n  list.appendChild(li);                      // attach at the end\n}\n\naddNote(input.value);\nlist.firstElementChild.remove();             // remove the oldest"
            },
            keyTerms: [
              {
                term: "createElement",
                definition: "Creates a detached element node later attached with appendChild or insertBefore."
              },
              {
                term: "textContent",
                definition: "Sets or returns plain text safely - no HTML parsing, so no XSS."
              },
              {
                term: "innerHTML",
                definition: "Sets content by parsing an HTML string - powerful but dangerous with user input."
              },
              {
                term: "classList",
                definition: "Object with add/remove/toggle/contains methods for managing an element's classes."
              },
              {
                term: "Reflow",
                definition: "Layout recomputation triggered by geometry-changing DOM mutations; expensive, so batch writes."
              }
            ],
            examQuestions: [
              {
                q: "Explain DOM manipulation: finding, reading, changing, creating and removing nodes, with a worked dynamic-list example.",
                marks: 7,
                outline: [
                  "The four-verb vocabulary",
                  "textContent vs innerHTML and the XSS angle",
                  "createElement, setting properties, appendChild",
                  "classList for styling hooks",
                  "remove() and insertBefore",
                  "Traversal helpers used mid-example",
                  "Reflow/repaint cost and batching"
                ]
              },
              {
                q: "Why is textContent safer than innerHTML for user input?",
                marks: 2
              },
              {
                q: "Write JavaScript to append a new <li> with given text to a <ul>.",
                marks: 3
              }
            ],
          },
          {
            number: "3.12",
            title: "Forms and validation",
            body: [
              "Validation has two honest layers and both are non-negotiable. Instant feedback in the browser (JavaScript) catches typos before the user submits — the courtesy layer. Authoritative re-checking on the server (Unit V) prevents malicious or bypassed input from reaching the database — the law. The rule students must internalise: client-side checks are courtesy, server-side checks are the law, because anything client-side can be bypassed with curl or by disabling JavaScript. Every form has both, and they share the same regexes — the JavaScript email check and the PHP email check use the same pattern.",
              "The browser side starts with HTML5's free checks. The required attribute marks a field as mandatory — the browser blocks submission if it is empty. type=\"email\" enforces email format, type=\"url\" enforces URL format, type=\"number\" enforces numeric input. minlength=\"6\" and maxlength=\"10\" bound the length. pattern=\"[0-9]{10}\" applies a regex the browser tests before submission. These are zero-JavaScript validation — the browser enforces them natively, with built-in error messages and a built-in invalid UI. Combined with the CSS :invalid pseudo-class (.note:invalid { border-color: red; }) the form gives instant visual feedback with no JavaScript at all.",
              "JavaScript adds behaviour and custom messages on top of the HTML5 baseline. Intercept the submit event: form.addEventListener('submit', (e) => { … }); inside the handler, run each field's check, and either let it pass or e.preventDefault() and show a message. The workhorse recipe: test each field with the regexes of Unit II (§2.17); mark failures by adding an .error class (CSS paints the red border) and writing a hint into an empty <span> the DOM gave you; clear each error on the field's input event so the user sees the error disappear as they fix it. The code example below shows the pattern for a 6-digit PIN.",
              "Good validation has three traits. Specific: 'PIN must be 6 digits', not 'invalid' — the user needs to know what to fix. Immediate: validate on blur or on input, not only on submit, so the user gets feedback before they have finished the form. Forgiving: preserve everything the user typed when you re-display the form — never punish them with a blank form for a single typo. The anti-pattern to avoid: alert('Form invalid') on submit — vague, late, and destructive of the user's input. The professional pattern: inline messages next to each field, clear as the field is corrected, and the field values echoed back into the form on re-display (this is Unit IV §4.13's PHP pattern too).",
              "For a 7-mark answer on forms and validation: state the two-layer rule (client-side courtesy, server-side law), name five HTML5 validation attributes (required, type=email/url/number, minlength, maxlength, pattern) with one example each, demonstrate the JavaScript recipe (intercept submit, regex test, .error class, hint span, clear on input), and close with the three traits of good validation (specific, immediate, forgiving) and the anti-pattern (alert on submit). The code block below shows the worked PIN-validation pattern.",
            ],
            codeExample: {
              language: "javascript",
              caption: "validate.html — form validation with the DOM",
              code: `const form = document.querySelector("#signup");
form.addEventListener("submit", (e) => {
  let pin = form.pin.value;
  if (!/^\\d{6}$/.test(pin)) {
    e.preventDefault();                       // stop the submission
    form.pin.classList.add("error");          // CSS paints it red
    document.querySelector("#pin-hint")
      .textContent = "PIN must be 6 digits";
  }
});`,
            },
            bullets: [
              "Two layers, both required: instant client-side feedback, authoritative server-side checks.",
              "HTML5 attributes: required, minlength, maxlength, pattern, min/max - free validation, no JS.",
              "Input types email/url/number bring built-in format checks and mobile keyboards.",
              "JavaScript intercepts submit: addEventListener('submit', handler) and e.preventDefault().",
              "Check validity with regex or input.validity; show messages next to the failing field.",
              "Good validation is specific, immediate and forgiving of the user's draft."
            ],
            diagram: {
              kind: "fork",
              title: "Where a submission ends up",
              caption: "Every field either passes all layers or is bounced with a message.",
              start: "User presses Submit",
              branches: [
                {
                  label: "HTML5 checks pass",
                  outcome: "required, type, pattern satisfied",
                  good: true
                },
                {
                  label: "JavaScript handler passes",
                  outcome: "regex checks pass; form allowed to send",
                  good: true
                },
                {
                  label: "Any client check fails",
                  outcome: "preventDefault(); message shown; nothing sent",
                  good: false
                },
                {
                  label: "Server re-validation fails",
                  outcome: "field errors returned even if the client was bypassed",
                  good: false
                }
              ]
            },
            keyTerms: [
              {
                term: "required",
                definition: "HTML5 attribute making a field mandatory; the browser blocks an empty submit."
              },
              {
                term: "pattern",
                definition: "HTML5 attribute holding a regex the field value must match."
              },
              {
                term: "e.preventDefault()",
                definition: "Stops the browser's default submit so the handler can validate first."
              },
              {
                term: "validity",
                definition: "DOM property exposing built-in check results (valueMissing, typeMismatch, patternMismatch)."
              },
              {
                term: "Server-side validation",
                definition: "The authoritative layer that re-checks every field because the client can be bypassed."
              }
            ],
            callout: {
              type: "tip",
              title: "Courtesy vs law",
              body: "The sentence examiners want: client-side validation is a courtesy that catches typos early; server-side validation is the law that stops malicious input. Name both layers and you have the 7-mark answer's spine."
            },
            examQuestions: [
              {
                q: "Explain client-side form validation using HTML5 attributes and JavaScript. Why is server-side validation still necessary?",
                marks: 7,
                outline: [
                  "Two-layer rule: courtesy vs authority",
                  "HTML5 attributes: required, minlength, pattern, min/max",
                  "Input types with built-in checks",
                  "Submit handler with addEventListener and e.preventDefault()",
                  "Regex or validity-based field checks",
                  "Showing specific, immediate messages",
                  "Why the server must re-validate (disabled JS, crafted POSTs)"
                ]
              },
              {
                q: "What does e.preventDefault() do inside a submit handler?",
                marks: 2
              },
              {
                q: "Write the HTML5 attributes that force a mandatory 6-digit PIN field.",
                marks: 3
              }
            ],
          },
          {
            number: "3.13",
            title: "DHTML: events and buttons",
            body: [
              "DHTML — Dynamic HTML — is not a technology but the combination of HTML (structure), CSS (presentation) and JavaScript (behaviour) working on the DOM at the same time. HTML puts a button on the page; CSS styles it (colours, padding, hover state); JavaScript changes the page when the button is clicked — content that moves, appears, hides, animates and reacts without a server round trip. The term was marketing-coined in the late 1990s for the combination of IE4 and Netscape 4's early scripting; today the same combination is just 'modern web development', but the name persists in syllabi. The principle remains: the three layers cooperate, each doing one job.",
              "The glue holding the three layers together is the event system. Events fire constantly in the browser — click (mouse click), input (text typed), change (select changed or input lost focus), submit (form submitted), keydown / keyup (keys pressed), mouseover / mouseout (mouse enters/leaves), load (page finished loading), scroll (page scrolled), focus / blur (field gained/lost focus), DOMContentLoaded (DOM parsed, before images load). Code subscribes with element.addEventListener('click', handler); inside the handler, the event object tells you the target element (e.target), the modifier keys (e.shiftKey, e.ctrlKey, e.metaKey), the mouse coordinates (e.clientX, e.clientY), and provides methods to stop the default action (e.preventDefault() — stops form submission, link navigation) or stop the bubbling (e.stopPropagation()).",
              "Events travel in three phases — capture, target, bubble — and this is the most exam-critical event-system fact. When a click happens on a button inside a div inside body, the event first descends from document through body and div in the capture phase, reaches the button (target phase), then ascends back up through div and body in the bubble phase. Listeners fire in each phase by default (bubble) unless you set the third addEventListener argument to { capture: true }. The bubble phase enables event delegation: instead of attaching a listener to each of 100 list items, you attach one listener to the parent <ul>, and the bubbled event tells you which <li> was clicked via e.target — one listener, 100 items, perfect for dynamically added items.",
              "Buttons are the atom of DHTML and deserve a worked example. The markup: <button class=\"save\">Save note</button>. The CSS: button { padding: 0.5rem 1rem; border: 1px solid #e8955c; background: #fff; } button:hover { background: #e8955c; color: #fff; } button:active { transform: translateY(1px); } — the hover state signals clickability, the active state gives tactile feedback. The JavaScript: const btn = document.querySelector('.save'); btn.addEventListener('click', () => { saveNote(); showSaved(); }); — the click listener runs two functions, one to persist the note (an AJAX call, Unit IV §4.8 territory) and one to show a 'Saved' confirmation. The button is HTML + CSS + JS working in concert; that is DHTML.",
              "For a 7-mark answer on DHTML: define it as the combination of HTML + CSS + JavaScript on the DOM (no server round trip), name six event types (click, input, change, submit, keydown, mouseover) with one trigger each, explain the three-phase travel (capture, target, bubble) and event delegation (one parent listener for many children), and trace the worked button example (HTML markup → CSS :hover/:active states → JS click listener calling two functions). Close with the separation-of-concerns principle: HTML for structure, CSS for presentation, JS for behaviour — never inline onclick=\"\" attributes, always addEventListener.",
            ],
            diagram: {
              kind: "layers",
              title: "DHTML — three layers, one page",
              caption: "HTML provides structure, CSS provides presentation, JavaScript provides behaviour — all working on the same DOM tree.",
              layers: [
                { label: "JavaScript — behaviour", note: "addEventListener · DOM mutation · AJAX" },
                { label: "CSS — presentation", note: ":hover · :active · transitions · display" },
                { label: "HTML — structure", note: "<button> · <form> · <ul> · semantic tags" },
                { label: "DOM — the shared tree", note: "all three layers read and mutate it" },
              ],
            },
            keyTerms: [
              { term: "DHTML", definition: "Dynamic HTML — the combination of HTML + CSS + JavaScript working on the DOM to produce content that moves, appears and reacts without a server round trip." },
              { term: "Event", definition: "A browser-fired signal (click, input, submit, keydown) that JavaScript subscribes to with addEventListener." },
              { term: "Event delegation", definition: "Attaching one listener to a parent (the <ul>) and using e.target to answer for many children — efficient and auto-handles dynamically added items." },
              { term: "Bubbling", definition: "The bubble phase of event travel — events ascend from the target back up through ancestors, enabling delegation." },
            ],
            bullets: [
              "DHTML = HTML structure + CSS presentation + JavaScript behaviour on one DOM, no server round trip.",
              "Events fire constantly: click, input, change, submit, keydown, mouseover, load.",
              "addEventListener(type, handler) attaches behaviour without polluting the markup.",
              "Events travel in three phases: capture (down), target, bubble (up).",
              "stopPropagation() halts the journey; one listener on a parent can delegate for many children.",
              "Buttons: :hover and :active give CSS feedback; JS handlers give real behaviour."
            ],
            codeExample: {
              language: "javascript",
              caption: "dhtml.js - event listeners on buttons",
              code: "const save = document.querySelector('.save');\nconst list = document.querySelector('#notes');\n\nsave.addEventListener('click', function (event) {\n  // bubbles up: this handler, then .card's, then body's\n  const li = document.createElement('li');\n  li.textContent = 'Saved at ' + new Date().toLocaleTimeString();\n  list.appendChild(li);\n  save.classList.add('done');   // CSS reacts via .done\n});\n\nlist.addEventListener('click', function (e) {\n  if (e.target.tagName === 'LI') e.target.remove(); // delegation\n});"
            },
            callout: {
              type: "exam",
              title: "Capture, target, bubble",
              body: "The event question is nearly always the three-phase travel. Draw it: document -> parent -> target (capture), the target's handlers run, then the event bubbles back up. One listener on the parent handling clicks from many children is event delegation - name it for the extra mark."
            },
            examQuestions: [
              {
                q: "What is DHTML? Explain the event model (capture, target, bubble) with a button example.",
                marks: 7,
                outline: [
                  "Define DHTML as HTML + CSS + JS on the DOM",
                  "Name six event types with triggers",
                  "addEventListener syntax and removing listeners",
                  "Three phases: capture, target, bubble",
                  "stopPropagation and preventDefault",
                  "Event delegation on a parent",
                  "Worked button example changing the page"
                ]
              },
              {
                q: "What is event delegation in DHTML?",
                marks: 2
              },
              {
                q: "Name four mouse or keyboard events and when each fires.",
                marks: 3
              }
            ],
          },
        ],
      },
    },
    {
      number: 4,
      roman: "IV",
      title: "XML & PHP",
      summary:
        "Unit IV crosses from the client to the server: XML as the portable data format, its DTD and schema gatekeepers, and XSLT transformation; then PHP from first echo to object-oriented code — decisions, loops, arrays, functions, strings, files, forms, cookies and sessions.",
      chapter: {
        number: "04",
        title: "Data & Server-Side Code",
        intro:
          "Unit IV covers XML and its uses, simple XML, DTD and schema, XML with applications, XSLT, PHP intro and syntax, decisions and looping, PHP+HTML, arrays, functions, browser detection, string handling, form processing, files, cookies and sessions, and object-oriented PHP.",
        inOneBreath:
          "XML is self-describing data with strict rules; DTD/XSD validate its shape; XSLT transforms it; PHP runs server-side between <?php ?> tags interleaved with HTML; control flow is C-shaped; arrays are indexed/associative/multidimensional; functions package logic; strings and forms are the everyday work; files give no-database persistence; cookies identify and sessions remember; OOP PHP packages data and behaviour into classes.",
        sections: [
          {
            number: "4.1",
            title: "Introduction to XML and its uses",
            body: [
              "XML — eXtensible Markup Language — looks like HTML but plays the opposite game. HTML's tags are fixed by the specification and say how to display content (<p> for paragraph, <h1> for heading, <img> for image); XML's tags are invented by you and say what the data means (<price>, <author>, <note>, <created-at>). XML carries no presentation at all — no styling, no layout, no behaviour. It is pure, structured, self-describing data: a tree of named elements with attributes and text content, defined by the W3C in 1998 and descended from SGML (the same parent HTML came from). Where HTML is for humans looking at pages, XML is for programs exchanging data.",
              "The motivation was the Babel problem: systems on incompatible platforms (Windows, Linux, mainframes, mobile) needed to exchange structured data without agreeing on binary formats, byte orders, or proprietary encodings. XML solved this by being plain text (any machine can read it), self-describing (the tags explain the structure to any reader), strictly structured (one root, proper nesting, quoted attributes), and international (UTF-8 supports every character). Two banks, two airlines, two government agencies could exchange invoices, manifests and forms by agreeing only on a vocabulary of tag names — no shared binary format required.",
              "Its uses earned it a decade as the web's lingua franca. Data interchange between incompatible systems: banking transactions, airline bookings, B2B invoices — all wrapped in XML envelopes. Web services: SOAP (Simple Object Access Protocol) APIs speak XML request and response envelopes, with WSDL defining the contract — the enterprise integration standard before REST and JSON took over. Configuration files: every Java project's pom.xml, every Android layout, every Maven, Spring, or .NET app.config. Document formats: Microsoft Office's .docx, .xlsx and .pptx are zipped XML; this book's slides are zipped XML; EPUB ebooks are zipped XML. Feeds: RSS and Atom news feeds are XML; podcast subscriptions still are. Databases of documents: XML-native databases (BaseX, eXist) store and query XML directly.",
              "JSON has since taken the browser-API crown because it is lighter (no closing tags, no quotes on keys) and parses to JavaScript objects natively. But XML remains the back-office standard: enterprise systems, configuration files, document formats, and the SVG images and MathML formulas embedded in modern HTML pages are all XML. The exam contrast to memorise: HTML is fixed-vocabulary display markup for browsers; XML is invented-vocabulary data markup for any program. Both descend from SGML; both use angle-bracket tags; their purpose differs entirely.",
              "For a 7-mark answer: define XML as a self-describing data markup language where you invent the tags (contrasted with HTML's fixed display vocabulary), state the motivation (cross-platform data exchange via plain text), list six uses with one example each (data interchange, SOAP web services, configuration files, document formats like .docx, RSS feeds, SVG/MathML), and close with the JSON contrast (lighter, browser-native; XML remains the back-office and document standard). The diagram below contrasts HTML and XML.",
            ],
            diagram: {
              kind: "compare",
              title: "HTML vs XML",
              caption: "HTML's tags are fixed and say how; XML's tags are invented and say what.",
              left: {
                heading: "HTML — display markup",
                items: ["fixed vocabulary", "says how to show", "forgiving parsing", "browsers are the only audience"],
              },
              right: {
                heading: "XML — data markup",
                items: ["you invent the tags", "says what it means", "strict, validated", "any program can be the audience"],
              },
            },
            keyTerms: [
              { term: "XML", definition: "eXtensible Markup Language — a W3C standard for self-describing data where tag names are invented by the author to describe meaning." },
              { term: "Self-describing", definition: "The document's structure and tag names explain its own meaning to any reader — no external schema required to parse it." },
              { term: "SOAP", definition: "Simple Object Access Protocol — XML-envelope web services standard used for enterprise integration before REST and JSON." },
              { term: "W3C", definition: "World Wide Web Consortium — the standards body that defined XML in 1998, along with HTML, CSS, and many other web specifications." },
            ],
            bullets: [
              "XML is eXtensible Markup Language: you invent the tags; they describe what data means.",
              "HTML says how to display; XML says what the content is - the contrast is the exam's spine.",
              "Motivation: incompatible platforms exchanging structured data as plain text anyone can parse.",
              "Uses: data interchange (banking, B2B invoices), SOAP web services, RSS/Atom feeds, config files, SVG, Office formats.",
              "Rules inherited from the well-formedness discipline: one root, closed tags, quoted attributes, case-sensitive.",
              "JSON replaced XML in browser APIs (lighter, native to JS), but XML remains the back-office standard."
            ],
            codeExample: {
              language: "xml",
              caption: "catalog.xml - invented tags describing data",
              code: "<?xml version='1.0' encoding='UTF-8'?>\n<catalog>\n  <product id='P-101'>\n    <name>Mechanical pencil</name>\n    <price currency='INR'>149</price>\n    <stock>42</stock>\n  </product>\n  <product id='P-102'>\n    <name>Notebook A5</name>\n    <price currency='INR'>99</price>\n    <stock>120</stock>\n  </product>\n</catalog>"
            },
            callout: {
              type: "tip",
              title: "HTML vs XML in one line",
              body: "Write this line first in any XML answer: HTML has fixed tags that say how to display; XML has invented tags that say what the data means. Everything else in the answer hangs off that distinction."
            },
            examQuestions: [
              {
                q: "What is XML? Explain its features and uses. Differentiate HTML and XML.",
                marks: 7,
                outline: [
                  "Define XML: self-describing data markup with invented tags",
                  "HTML vs XML contrast (display vs meaning, fixed vs invented vocabulary)",
                  "Well-formedness requirements",
                  "Plain-text, platform-independent interchange motivation",
                  "Six uses with examples: interchange, SOAP, RSS, config, SVG, documents",
                  "Parsing strictness vs HTML's forgiveness",
                  "JSON's rise and XML's remaining niches"
                ]
              },
              {
                q: "Is XML case-sensitive? What happens if <Note> and </note> are mixed?",
                marks: 2
              },
              {
                q: "List four real-world uses of XML with one example each.",
                marks: 3
              }
            ],
          },
          {
            number: "4.2",
            title: "Simple XML and its key components",
            body: [
              "An XML document is one tree, and its anatomy has six named parts. The prolog is the optional first line declaring version and encoding: <?xml version=\"1.0\" encoding=\"UTF-8\"?>. The root element is exactly one element that wraps everything else — every well-formed XML document has one root, no more, no less. Elements are the named tags that carry the data, opening <note> and closing </note>, possibly empty <note/> (self-closing). Attributes are quoted name=value pairs inside the start tag — <note id=\"42\" subject=\"webtech\"> — each element may carry any number. Text content fills the leaves of the tree — <title>Unit IV</title> holds the string 'Unit IV'. Entities are escape sequences for the five reserved characters: &lt; for <, &gt; for >, &amp; for &, &quot; for \", &apos; for '. Comments are <!-- … --> and are ignored by the parser. CDATA sections <![CDATA[ … ]]> let raw text ride along unparsed — used for embedding HTML or code inside XML.",
              "The four well-formedness rules are non-negotiable and are the most exam-critical XML facts. Rule one: exactly one root element wraps everything — <?xml …?><a><b/></a> is well-formed; <?xml …?><a/><b/> is not (two roots). Rule two: strict nesting — tags must close in the reverse order they opened, so <a><b></b></a> is fine and <a><b></a></b> is not (overlapping tags). Rule three: every tag must close, including void elements — <br/> or <br></br> both work, but <br> alone is HTML, not XML. Rule four: attribute values are always quoted — <note id=\"42\"> is fine, <note id=42> is not (unquoted). Satisfy those four and the document is well-formed — the minimum XML demands before any DTD or schema validation can happen.",
              "The contrast with HTML parsing is the second exam favourite. HTML parsers are forgiving — they auto-close unclosed tags, infer missing structure, accept unquoted attributes, and render something useful from almost any input. XML parsers are strict — a single well-formedness violation (an unclosed tag, an unquoted attribute, an extra root) and the parser refuses to process the document at all, returning a fatal error pointing to the line and column. This is by design: if XML is to be machine-processed reliably, it cannot be ambiguous. The browser's error console shows the difference: a malformed HTML page still renders with quirks; a malformed XML page shows nothing but an error message.",
              "The choice between elements and attributes is a recurring XML design question with no single right answer. Use elements for data that has internal structure or repeats (<note><tag>php</tag><tag>web</tag></note> — multiple tags as child elements). Use attributes for single-valued metadata that modifies the element (<note id=\"42\" subject=\"webtech\"> — id and subject are attributes). The exam rule of thumb: if it can repeat or has children, use an element; if it is single-valued metadata, use an attribute. Both are valid XML; the choice is about clarity, not correctness.",
              "For a 7-mark answer: list the six components (prolog, root, elements, attributes, text, entities, comments, CDATA) with one example each, state the four well-formedness rules (one root, strict nesting, all tags closed, attributes quoted), contrast strict XML parsing with forgiving HTML parsing (XML refuses to render malformed documents), and close with the element-vs-attribute design rule (elements for repeating or structured data, attributes for single-valued metadata). The code example below shows a complete well-formed document.",
            ],
            codeExample: {
              language: "xml",
              caption: "note.xml — one tree, invented tags",
              code: `<?xml version="1.0" encoding="UTF-8"?>
<!-- one root element; tags are invented by the author -->
<notebook owner="amara">
  <note id="42" subject="webtech">
    <title>Unit IV — XML & PHP</title>
    <body>Tags describe meaning, not looks.</body>
  </note>
</notebook>
<!-- remove the closing </body> and the parser refuses the file -->`,
            },
            keyTerms: [
              { term: "Well-formed", definition: "An XML document that satisfies the four rules — one root, strict nesting, all tags closed, attributes quoted. The minimum XML demands." },
              { term: "Root element", definition: "The single element that wraps every other element in an XML document — exactly one, no more, no less." },
              { term: "Entity", definition: "An escape sequence for a reserved character — &lt; for <, &gt; for >, &amp; for &, &quot; for \", &apos; for '." },
              { term: "CDATA", definition: "A <![CDATA[ … ]]> section that lets raw text (HTML, code, special characters) ride along unparsed by the XML processor." },
            ],
            bullets: [
              "Anatomy: prolog (<?xml ...?>), exactly one root element, nested child elements.",
              "Attributes carry metadata on the start tag; text content sits between tags.",
              "Entities (&lt; &amp;), comments (<!-- -->) and CDATA (raw blocks) round out the parts.",
              "Well-formed rules: one root, strict nesting, every tag closed, attributes quoted, case-sensitive names.",
              "XML parsers are strict: one error and the document is refused with a message.",
              "Elements for repeating structured data; attributes for single-value metadata."
            ],
            diagram: {
              kind: "layers",
              title: "Anatomy of an XML document",
              caption: "Layers from the declaration down to leaf data.",
              layers: [
                {
                  label: "Prolog",
                  note: "<?xml version='1.0' encoding='UTF-8'?>"
                },
                {
                  label: "Root element",
                  note: "exactly one, wraps everything"
                },
                {
                  label: "Child elements",
                  note: "nested trees of your invented tags"
                },
                {
                  label: "Attributes, text, CDATA",
                  note: "metadata, data, raw blocks"
                }
              ]
            },
            callout: {
              type: "warning",
              title: "Case sensitivity bites",
              body: "<Note> and <note> are two different elements in XML. A single mismatched case, unclosed tag or unquoted attribute makes the whole document invalid - XML parsers do not guess, they refuse."
            },
            examQuestions: [
              {
                q: "Explain the components of an XML document and the rules for it to be well-formed, with an example.",
                marks: 7,
                outline: [
                  "Prolog with version and encoding",
                  "Exactly one root element",
                  "Elements, attributes, text content",
                  "Entities, comments and CDATA sections",
                  "Four well-formedness rules with one violation each",
                  "Strict XML parsing vs forgiving HTML parsing",
                  "Element-vs-attribute design choice"
                ]
              },
              {
                q: "What is a CDATA section used for in XML?",
                marks: 2
              },
              {
                q: "When should a piece of data be an element instead of an attribute?",
                marks: 3
              }
            ],
          },
          {
            number: "4.3",
            title: "DTD and XML Schemas",
            body: [
              "Well-formed is not enough — 'is it correct?' needs a contract describing which elements, in which order, with which attributes, holding which data types. Two standards do the job and they are a frequent exam contrast. The older DTD (Document Type Definition) writes the grammar in a compact custom syntax that pre-dates XML itself (it came from SGML). The modern XML Schema (XSD) writes the contract in XML itself and is far stricter.",
              "A DTD is a set of declarations, each defining one piece of the document's grammar. <!ELEMENT notebook (note+)> declares that the notebook element holds one or more note children (the + means one-or-more; * means zero-or-more; ? means optional; comma means required order; | means choice). <!ELEMENT note (title, body)> fixes note's children as title followed by body, in that order. <!ELEMENT title (#PCDATA)> says title holds parsed character data (text). <!ATTLIST note id CDATA #REQUIRED subject CDATA #IMPLIED> declares note's attributes: id is required character data, subject is optional (implied). A document whose tree matches the DTD is valid — well-formed plus conforming. The DTD can live inline (<!DOCTYPE notebook [ … ]>) or in an external .dtd file referenced from the DOCTYPE.",
              "A worked DTD makes the syntax concrete. For the note.xml of §4.2: <!DOCTYPE notebook [ <!ELEMENT notebook (note+)> <!ELEMENT note (title, body)> <!ELEMENT title (#PCDATA)> <!ELEMENT body (#PCDATA)> <!ATTLIST note id CDATA #REQUIRED subject CDATA #IMPLIED> <!ATTLIST notebook owner CDATA #REQUIRED> ]>. This DTD says: notebook holds one or more notes; each note has a title then a body, all text; each note has a required id attribute and an optional subject; the notebook has a required owner. A document that matches this DTD is valid; one missing the id attribute is invalid (though still well-formed).",
              "XML Schema (XSD) writes the contract in XML itself and is far more powerful. Where DTD has only one data type (CDATA, unstructured text), XSD has dozens: xs:string, xs:integer, xs:decimal, xs:date, xs:dateTime, xs:boolean, xs:email, xs:anyURI, with facets that constrain them (xs:minLength, xs:maxLength, xs:pattern, xs:enumeration, xs:minInclusive). Where DTD occurrence is + * ?, XSD has precise minOccurs and maxOccurs. Where DTD has no namespaces, XSD is namespace-aware and supports reusable user-defined complex types via xs:complexType. XSD can express 'the price must be a positive decimal with two fractional digits' or 'the email must match the RFC pattern' — DTD can express neither.",
              "For a 7-mark answer on DTD and XSD: state that both define the contract an XML document must follow to be valid (well-formed + conforming), explain DTD's compact custom syntax with one ELEMENT and one ATTLIST example, list DTD's limitations (one data type, no namespaces, limited occurrence control), then introduce XSD as XML-written, typed (xs:string, xs:integer, xs:date), facetted (pattern, minLength, enumeration), namespace-aware, and reusable via complexType. The exam contrast in one line: DTD is light, type-blind and legacy; XSD is verbose, typed and industrial.",
            ],
            diagram: {
              kind: "compare",
              title: "DTD vs XSD",
              caption: "Two standards for XML validation — DTD is light and legacy, XSD is typed and modern.",
              left: {
                heading: "DTD — legacy grammar",
                items: ["compact custom syntax (not XML)", "one data type (CDATA)", "occurrence: + * ? only", "no namespace support"],
              },
              right: {
                heading: "XSD — modern schema",
                items: ["written in XML itself", "dozens of typed types", "minOccurs / maxOccurs precisely", "facets: pattern, length, enum"],
              },
            },
            bullets: [
              "Well-formed is not enough; validity asks 'does the document follow the contract?'",
              "DTD declares the grammar: ELEMENT declarations with occurrence operators + * ?, and ATTLIST for attributes.",
              "DTD syntax is compact but weak: one data type (CDATA), no namespaces, its own non-XML syntax.",
              "XSD (XML Schema) is written in XML itself, with dozens of typed types and facets.",
              "XSD facets constrain values: pattern, length, minInclusive, enumerations.",
              "Both plug into parsers: the processor refuses a document that violates the schema."
            ],
            codeExample: {
              language: "dtd",
              caption: "notebook.dtd - the contract for note documents",
              code: "<!ELEMENT notebook (note+)>\n<!ELEMENT note (title, body)>\n<!ELEMENT title (#PCDATA)>\n<!ELEMENT body (#PCDATA)>\n<!ATTLIST note\n  id      CDATA #REQUIRED\n  subject CDATA #IMPLIED>\n\n<!-- valid document: <notebook>\n     <note id='1' subject='web'><title>HTTP</title>\n     <body>Request-response protocol.</body></note> </notebook> -->"
            },
            keyTerms: [
              {
                term: "DTD",
                definition: "Document Type Definition - the older grammar language declaring allowed elements and attributes."
              },
              {
                term: "#PCDATA",
                definition: "Parsed character data - plain text content in a DTD element declaration."
              },
              {
                term: "Occurrence operators",
                definition: "DTD suffixes: + one or more, * zero or more, ? optional; comma fixes the order."
              },
              {
                term: "XSD",
                definition: "XML Schema Definition - the modern, typed, XML-written contract language."
              },
              {
                term: "Validity",
                definition: "A document conforming to its DTD or XSD, on top of being well-formed."
              }
            ],
            callout: {
              type: "tip",
              title: "DTD's killer limitation",
              body: "When the exam asks 'why XSD won', lead with data types: DTD has exactly one (CDATA - everything is text), XSD has dozens plus facets like pattern and minInclusive. Add namespaces and XSD being itself XML, and the contrast is complete."
            },
            examQuestions: [
              {
                q: "What is a DTD? Write a DTD for a notes document and compare DTD with XML Schema.",
                marks: 7,
                outline: [
                  "Purpose: validity contract beyond well-formedness",
                  "ELEMENT declarations with +, *, ?, comma order",
                  "ATTLIST with #REQUIRED / #IMPLIED",
                  "Worked DTD for notebook/note",
                  "DTD limitations: one data type, no namespaces, non-XML syntax",
                  "XSD: typed types, facets, written in XML",
                  "When each is still used"
                ]
              },
              {
                q: "What does (note+) mean in a DTD element declaration?",
                marks: 2
              },
              {
                q: "Give two advantages of XSD over DTD.",
                marks: 3
              }
            ],
          },
          {
            number: "4.4",
            title: "Using XML with applications",
            body: [
              "Programs chew XML through two standard parsing APIs, each with a different trade-off between memory and access pattern. DOM parsing (Document Object Model) loads the whole tree into memory at once — PHP's DOMDocument class, JavaScript's built-in XML parser, Python's xml.dom — and then lets you walk, edit, and serialize the tree at will. The advantage: random access to any node, modification in place, full XPath queries. The cost: the whole document lives in memory, which is fine for a 100 KB config file but impossible for a 5 GB log. Use DOM for small-to-medium documents and for any application that edits XML.",
              "SAX parsing (Simple API for XML) takes the opposite approach: it streams the file left-to-right and fires callback events as it goes — startElement(name, attrs), characters(text), endElement(name) — without storing anything in memory. The parser keeps only the current position and a small buffer; the application's job is to react to events. The advantage: constant memory regardless of file size (a 5 GB file streams in the same RAM as a 100 KB one). The cost: one pass only, no random access (you cannot rewind to an earlier node), and the application code is event-driven and harder to read. Use SAX for huge files where DOM would exhaust memory.",
              "A worked PHP DOM example shows the API. $doc = new DOMDocument(); $doc->load('notes.xml'); $notes = $doc->getElementsByTagName('note'); foreach ($notes as $n) { $title = $n->getElementsByTagName('title')->item(0)->nodeValue; echo $title; } — load the file, get all <note> elements, loop, and for each one extract its <title>'s text. The equivalent SAX code would set startElement/endElement handlers, maintain a 'current element' variable, and accumulate the title text inside the characters handler — more verbose, but constant memory. PHP also ships SimpleXML ($xml = simplexml_load_file('notes.xml'); foreach ($xml->note as $n) echo $n->title;) which is a friendlier DOM-style API using property syntax.",
              "On top of these parsing APIs, whole application ecosystems consume XML. RSS and Atom feed readers (Google Reader in its day, Feedly now) parse feed XML and render posts. SOAP web service clients wrap method calls in XML envelopes and send them over HTTP, then parse the XML response — PHP's SoapClient class hides the XML. AJAX originally exchanged XML payloads (the X in AJAX) before JSON won for browser-native parsing. Config loaders read XML settings files (PHP's SimpleXML, Java's JAXB, .NET's XmlSerializer). Business pipelines validate XML invoices against XSDs before letting them near a database. XPath query engines address specific nodes — /notebook/note[@id='42']/title fetches one note's title.",
              "For a 7-mark answer on XML applications: name the two parsing APIs (DOM loads the whole tree into memory, random access, good for small/medium; SAX streams events, constant memory, one pass, good for huge files), show a worked PHP DOM example (load → getElementsByTagName → loop → extract), list four applications that consume XML (RSS readers, SOAP clients, config loaders, XPath query engines), and close with the JSON contrast — AJAX and modern APIs prefer JSON for browser-native parsing, but XML remains the back-office standard for documents and SOAP.",
            ],
            diagram: {
              kind: "compare",
              title: "DOM vs SAX parsing",
              caption: "Two parsing strategies with opposite trade-offs between memory and access.",
              left: {
                heading: "DOM — tree in memory",
                items: ["loads the whole document", "random access to any node", "editable in place", "fine for small/medium files"],
              },
              right: {
                heading: "SAX — event stream",
                items: ["streams left-to-right", "constant memory", "one pass, no rewind", "fine for huge files"],
              },
            },
            bullets: [
              "DOM parsing loads the whole tree into memory: random access, editable, fine for small and medium files.",
              "SAX parsing streams left to right, firing events (startElement, characters, endElement) with no storage.",
              "SAX costs constant memory and one pass; DOM costs memory proportional to file size.",
              "PHP's DOMDocument: load(), getElementsByTagName(), item(0)->nodeValue.",
              "SimpleXML is PHP's friendlier middle ground for straightforward documents.",
              "Ecosystems consuming XML: RSS/Atom readers, SOAP clients, config loaders, Office and SVG files."
            ],
            codeExample: {
              language: "php",
              caption: "parse-xml.php - DOM parsing with PHP",
              code: "<?php\n$doc = new DOMDocument();\n$doc->load('catalog.xml');\n\n$products = $doc->getElementsByTagName('product');\nforeach ($products as $p) {\n  $name  = $p->getElementsByTagName('name')->item(0)->nodeValue;\n  $price = $p->getElementsByTagName('price')->item(0)->nodeValue;\n  echo $name . ' - Rs. ' . $price . '<br>';\n}\n?>"
            },
            keyTerms: [
              {
                term: "DOM parser",
                definition: "Loads the entire XML tree into memory for random access and editing."
              },
              {
                term: "SAX parser",
                definition: "Stream parser firing startElement / characters / endElement events without storing the tree."
              },
              {
                term: "DOMDocument",
                definition: "PHP class wrapping the DOM API: load, getElementsByTagName, createElement."
              },
              {
                term: "getElementsByTagName",
                definition: "Returns the elements with a given tag name, traversable with item() or foreach."
              },
              {
                term: "SimpleXML",
                definition: "PHP extension mapping XML to objects for quick, small-document access."
              }
            ],
            callout: {
              type: "tip",
              title: "Choose by file size",
              body: "The decision rule examiners want: small or medium file, need random access or editing - DOM. Huge file (hundreds of MB), sequential scan - SAX. Justify your choice in one line and the marks follow."
            },
            examQuestions: [
              {
                q: "Explain DOM and SAX parsing of XML with a PHP example. When is each preferred?",
                marks: 7,
                outline: [
                  "DOM: whole tree in memory, random access, editable",
                  "SAX: event stream, constant memory, one pass",
                  "Trade-off contrast with file-size guidance",
                  "PHP DOMDocument worked example",
                  "SimpleXML as the quick alternative",
                  "Applications consuming XML: RSS, SOAP, config",
                  "Why huge files must use SAX"
                ]
              },
              {
                q: "Which parser keeps the whole document in memory?",
                marks: 2
              },
              {
                q: "Name the three callback events a SAX parser fires while reading a document.",
                marks: 3
              }
            ],
          },
          {
            number: "4.5",
            title: "Transforming XML: XSL and XSLT",
            body: [
              "Since XML says nothing about looks, something must add the looks when XML data needs to be displayed — that is XSL's job. XSL (eXtensible Stylesheet Language) is a family of three specifications: XSLT (XSL Transformations) for converting XML trees to other forms, XPath for addressing nodes within an XML tree, and XSL-FO (formatting objects) for high-quality print output. The first two are the exam-relevant pair; XSL-FO is rarely used today because CSS-to-PDF tools have taken over print.",
              "XSLT is a declarative language, itself written in XML, that converts one XML tree into another tree (which may be HTML, plain text, or different XML). A stylesheet contains template rules: <xsl:template match=\"note\"> matches every <note> element in the source and emits whatever output the template's body specifies. Inside a template, <xsl:value-of select=\"title\"/> copies the text of the <title> child, <xsl:for-each select=\"note\"> iterates over a set of nodes, <xsl:if test=\"@subject='webtech'\"> conditionally includes content, <xsl:sort select=\"title\"/> orders the iteration, and <xsl:apply-templates/> recursively processes children with their matching templates. The whole stylesheet is itself a well-formed XML document — one XML document transforming another.",
              "A worked XSLT example makes the syntax concrete. To convert notes.xml into an HTML list: <xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"> <xsl:template match=\"/\"> <ul><xsl:apply-templates select=\"notebook/note\"/></ul> </xsl:template> <xsl:template match=\"note\"> <li><xsl:value-of select=\"title\"/> — <xsl:value-of select=\"body\"/></li> </xsl:template> </xsl:stylesheet>. The first template matches the root and emits the <ul> wrapper; the second matches each <note> and emits an <li> with the note's title and body. Apply this stylesheet to notes.xml and you get <ul><li>Unit IV — XML & PHP — Tags describe meaning, not looks.</li></ul> — clean HTML ready for a browser.",
              "The same data can feed many stylesheets, and this is XSLT's superpower. One stylesheet renders notes as an HTML page (with full styling); another makes a plain-text digest for an email newsletter; another re-arranges the tree for a mobile app's simpler layout; another produces an RSS feed; another produces a PDF via XSL-FO. The source XML stays unchanged — only the stylesheet varies — so the same data serves every consumer. This is the same separation of data from presentation that CSS gives HTML, but at the structural level: XSLT can re-arrange, filter, and aggregate the tree, not just style it.",
              "XPath — the addressing language inside every XSLT select — is XSLT's query engine and half its exam questions. Absolute paths start with / (/notebook/note/title — the title of every note). Relative paths omit the leading slash (title — the title child of the current node). Predicates filter in square brackets (/note[@id='42'] — the note with id 42; /note[position()=1] or /note[1] — the first note). Wildcards (* matches any element, @* any attribute). The double-slash // searches at any depth (//title — every title element, wherever it is in the tree). Functions like text(), count(), name(), and contains() round out the query vocabulary.",
              "For a 7-mark answer on XSLT: define XSL as the family (XSLT, XPath, XSL-FO), explain XSLT as a declarative XML-written language that converts one XML tree into another via template rules (xsl:template match, xsl:value-of select, xsl:for-each, xsl:if, xsl:sort), give the worked notes-to-HTML-list example, and close with XPath as the addressing language (/notebook/note/title, //note[@id='42'], predicates in [ ]). State the 'one source, many stylesheets' superpower — the same data feeds HTML, text, RSS, and PDF consumers.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The XSLT pipeline",
              caption: "Data plus rules, processed into whatever shape the destination wants.",
              stages: [
                { label: "note.xml", note: "pure data tree" },
                { label: "style.xsl", note: "template rules (match → emit)" },
                { label: "XSLT processor", note: "applies rules to nodes" },
                { label: "result", note: "HTML · text · new XML" },
              ],
            },
            bullets: [
              "XSL is a family: XSLT transforms trees, XPath addresses nodes, XSL-FO formats print output.",
              "XSLT is declarative and itself written in XML: template rules match source nodes and emit output.",
              "Core instructions: xsl:template match, xsl:value-of select, xsl:for-each, xsl:if, xsl:sort.",
              "The processor walks the source tree and applies the matching rule to each node.",
              "XPath is the query language inside every select: /notebook/note/title, @id, //title, predicates [price<100].",
              "One dataset, many stylesheets: HTML page, plain-text digest, mobile-friendly XML."
            ],
            codeExample: {
              language: "xml",
              caption: "notes.xsl - transforming notes.xml into an HTML list",
              code: "<?xml version='1.0'?>\n<xsl:stylesheet version='1.0'\n  xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>\n  <xsl:template match='/'>\n    <html><body>\n      <h1>Notes</h1>\n      <ul>\n      <xsl:for-each select='notebook/note'>\n        <li><xsl:value-of select='title'/>\n            (<xsl:value-of select='@subject'/>)</li>\n      </xsl:for-each>\n      </ul>\n    </body></html>\n  </xsl:template>\n</xsl:stylesheet>"
            },
            keyTerms: [
              {
                term: "XSLT",
                definition: "Declarative, XML-written language transforming one XML tree into HTML, text or another XML tree."
              },
              {
                term: "XPath",
                definition: "Addressing language used in every XSLT select: paths, attributes (@id), predicates ([...])."
              },
              {
                term: "xsl:template",
                definition: "A rule binding a match pattern to the output it emits."
              },
              {
                term: "xsl:value-of",
                definition: "Instruction emitting the string value of the selected node."
              },
              {
                term: "XSL-FO",
                definition: "The formatting-object branch of XSL for paginated print output."
              }
            ],
            callout: {
              type: "exam",
              title: "XPath earns half the marks",
              body: "XSLT questions hide XPath inside them: absolute paths start with /, relative paths do not, @name addresses attributes, // searches anywhere, and [price<100] filters. Write two XPath examples and the outline is satisfied."
            },
            examQuestions: [
              {
                q: "What is XSLT? Explain template rules and XPath with an example that converts XML into HTML.",
                marks: 7,
                outline: [
                  "XSL family: XSLT, XPath, XSL-FO",
                  "Declarative model: template rules match and emit",
                  "xsl:template, xsl:value-of, xsl:for-each, xsl:if, xsl:sort",
                  "Absolute vs relative XPath, @attributes, predicates",
                  "Worked stylesheet converting notes to an HTML list",
                  "How the processor applies rules",
                  "Many stylesheets from one dataset"
                ]
              },
              {
                q: "What does <xsl:value-of select='title'/> emit?",
                marks: 2
              },
              {
                q: "Write XPath expressions for: the title of every note; the id attribute of the second note.",
                marks: 3
              }
            ],
          },
          {
            number: "4.6",
            title: "PHP: introduction and basic syntax",
            body: [
              "PHP — PHP: Hypertext Preprocessor (a recursive acronym) — is a server-side scripting language built for one purpose: generating web pages dynamically. Created by Rasmus Lerdorf in 1994 and now in version 8.x, PHP runs on the server: the browser requests notes.php, the server's PHP interpreter executes the script, and only the resulting HTML is sent to the browser. The browser never sees PHP source — only its output — which is why the same URL can greet Amara by name (because PHP read her session) and show a stranger a login form (because PHP detected no session). This is the LAMP stack's middle layer: Linux + Apache + MySQL + PHP.",
              "PHP code lives between <?php … ?> tags that can be interleaved freely with HTML. The file can switch between HTML mode (output the text as-is) and PHP mode (execute the code and output its result) any number of times. Every statement ends with a semicolon. Comments are // (single line), # (single line, shell-style, legacy), or /* … */ (multi-line). Variables start with a dollar sign — $title = \"Unit IV\"; — are dynamically typed (the same variable can hold a string now and a number later), and names are case-sensitive ($Title and $title are different) while function names are not (slugify() and SLUGIFY() are the same). Constants are define('MAX_NOTES', 100) or const MAX_NOTES = 100; — no dollar sign, no reassignment.",
              "Output and strings are the everyday work. echo $title; prints a string, number, or HTML; echo \"<h1>\" . $title . \"</h1>\"; concatenates with the dot operator. Double-quoted strings interpolate variables: \"Hello, $name\" becomes 'Hello, Amara' if $name = 'Amara'. Single-quoted strings take everything literally: 'Hello, $name' stays 'Hello, $name'. Heredoc (<<<EOT … EOT;) and nowdoc (<<<'EOT' … EOT;) handle multi-line strings, the former interpolating like double quotes and the latter literal like single quotes. printf and sprintf format like C: sprintf(\"%s has %d notes\", $name, $n) returns 'Amara has 12 notes'.",
              "The variables the web hands you arrive pre-loaded as superglobals — associative arrays visible in any scope without a global declaration. $_GET holds query-string parameters (?id=42 → $_GET['id']). $_POST holds form-submitted data. $_COOKIE holds cookies the browser sent. $_SESSION holds session data (after session_start()). $_SERVER holds request metadata (HTTP_HOST, REQUEST_METHOD, HTTP_USER_AGENT, REMOTE_ADDR). $_FILES holds uploaded file metadata. $_REQUEST merges GET, POST, and COOKIE (rarely used because the merge order is configurable and surprising). These nine superglobals are the bridge between HTTP and PHP, and most application code reads from them constantly.",
              "For a 7-mark answer on PHP intro: define PHP as a server-side scripting language that generates HTML dynamically (browser never sees source), explain the <?php ?> tags interleaved with HTML, name the syntax rules (semicolons, // and /* */ comments, $-prefixed dynamically-typed variables, case-sensitive names), contrast double quotes (interpolate) with single quotes (literal), and list five superglobals ($_GET, $_POST, $_COOKIE, $_SESSION, $_SERVER) with one source each. The code example below shows a complete first page that greets morning or evening based on the server's clock.",
            ],
            codeExample: {
              language: "php",
              caption: "hello.php — first page, PHP inside HTML",
              code: `<!DOCTYPE html>
<html><body>
<h1><?php
  $hour = date("G");           // server's hour, 0–23
  echo ($hour < 12) ? "Good morning" : "Good evening";
?>, Amara!</h1>
<!-- the browser receives only the rendered result, never this source -->
</body></html>`,
            },
            keyTerms: [
              { term: "PHP", definition: "PHP: Hypertext Preprocessor — a recursive acronym; Rasmus Lerdorf's 1994 server-side scripting language for generating web pages dynamically." },
              { term: "Superglobal", definition: "An associative array available in every scope without a global declaration — $_GET, $_POST, $_COOKIE, $_SESSION, $_SERVER, $_FILES." },
              { term: "Dynamic typing", definition: "PHP variables hold any type and can change type on reassignment — $x = 5; $x = 'five'; is legal." },
              { term: "Interpolation", definition: "Double-quoted strings substitute variable values into the text — \"Hello, $name\" — while single-quoted strings take everything literally." },
            ],
            bullets: [
              "PHP (PHP: Hypertext Preprocessor) is a server-side scripting language built for dynamic web pages.",
              "Created by Rasmus Lerdorf in 1994; the browser requests a .php file and receives only the HTML result.",
              "Code lives between <?php ... ?> islands freely interleaved with HTML.",
              "Statements end with ; ; comments are // and /* */; variables start with $ and are dynamically typed.",
              "Double-quoted strings interpolate variables; single quotes do not; echo prints.",
              "Superglobals arrive pre-loaded: $_GET, $_POST, $_COOKIE, $_SESSION, $_SERVER, $_FILES."
            ],
            diagram: {
              kind: "pipeline",
              title: "The life of a PHP page",
              caption: "What happens between the request and the HTML the browser sees.",
              stages: [
                {
                  label: "Request notes.php",
                  note: "browser asks Apache for the page"
                },
                {
                  label: "Interpreter invoked",
                  note: "PHP module or FPM takes over"
                },
                {
                  label: "Script executes",
                  note: "logic, sessions, database queries"
                },
                {
                  label: "Output assembled",
                  note: "echoed HTML replaces the PHP islands"
                },
                {
                  label: "Response sent",
                  note: "browser receives pure HTML, never the source"
                }
              ]
            },
            callout: {
              type: "tip",
              title: "View source proves the model",
              body: "View Page Source on a PHP-driven page shows no PHP at all - only the generated HTML. Use this sentence to prove you understand server-side execution; it is the mark most students miss."
            },
            examQuestions: [
              {
                q: "What is PHP? Explain its basic syntax, embedding in HTML and the superglobal arrays.",
                marks: 7,
                outline: [
                  "Define PHP as server-side scripting for dynamic pages",
                  "Recursive acronym and Lerdorf's 1994 origin",
                  "<?php ?> islands interleaved with HTML",
                  "Syntax: semicolons, comments, $variables, dynamic typing",
                  "echo, string interpolation, concatenation with the dot",
                  "Superglobals: $_GET, $_POST, $_SESSION, $_SERVER, $_FILES",
                  "Browser receives HTML only"
                ]
              },
              {
                q: "What is a superglobal? Name any three.",
                marks: 2
              },
              {
                q: "Write a PHP statement that prints 'Hello, $name' using interpolation and one using concatenation.",
                marks: 3
              }
            ],
          },
          {
            number: "4.7",
            title: "Decisions and looping",
            body: [
              "PHP's control flow is C-shaped and immediate — anyone who has written C, Java, JavaScript, or Python will recognise the structures. Decisions branch on a boolean: if (cond) { … } elseif (cond) { … } else { … }. The ternary one-liner cond ? value_if_true : value_if_false collapses a simple if-else into one expression — $msg = $ok ? 'Saved' : 'Failed'; — and PHP 7 added the null-coalescing operator ?? for default values: $name = $_POST['name'] ?? 'anonymous';. The switch statement branches multi-way on one value: switch ($role) { case 'admin': … break; case 'editor': … break; default: … } — forgetting break lets cases spill into each other, the classic switch trap students lose marks for.",
              "Loops repeat work and PHP has four idioms. The counted for loop: for ($i = 0; $i < 10; $i++) { echo $i; } — initialise, test, increment, body. The while loop tests before each pass: while ($row = $res->fetch_assoc()) { … } — and is the standard MySQL row-fetch loop. The do-while tests after: do { … } while (cond); — guarantees one pass even if the condition is initially false; useful for menus that should run at least once. The foreach loop is PHP's idiomatic array iterator and the one students should reach for by default: foreach ($notes as $note) { … } iterates values, foreach ($notes as $id => $note) { … } iterates keys and values together — the form you will use for every MySQL result set.",
              "Loop control is break and continue, with optional integer argument for nested loops. break exits the loop immediately; break 2 exits two nested loops at once. continue skips to the next round of the loop; continue 2 skips the outer loop's next round. These are useful but rare in well-structured code — most loops that need break can be restructured with a cleaner condition. The alternative syntax for if and foreach using colons instead of braces is handy when interleaving with HTML: <?php if ($logged_in): ?> <p>Welcome</p> <?php else: ?> <form>…</form> <?php endif; ?> — the endif and endforeach close the block, which is cleaner than } when HTML is between the branches.",
              "A worked example shows the page-printing idiom of every PHP lab. Given an array of notes fetched from MySQL: $notes = [['id' => 1, 'title' => 'Unit I'], ['id' => 2, 'title' => 'Unit II']]; the rendering loop is echo '<ul>'; foreach ($notes as $n) { echo '<li><a href=\"note.php?id=' . $n['id'] . '\">' . htmlspecialchars($n['title']) . '</a></li>'; } echo '</ul>'; — opening list, one <li> per note with escaped title, closing list. The htmlspecialchars() is non-negotiable because the title came from a database that may have been populated from user input — the same XSS rule from §4.8 applies.",
              "For a 7-mark answer: name the three decision structures (if/elseif/else, ternary, switch) with the break-and-fall-through trap noted, list the four loop types (for, while, do-while, foreach) with one example each, mention break and continue with their integer-argument form, and close with the page-printing idiom (foreach over $notes → echo one <li> per row with htmlspecialchars). Mention the alternative colon syntax for HTML-interleaved control flow as a one-line aside.",
            ],
            callout: {
              type: "exam",
              title: "The foreach loop — your default",
              body: "foreach ($notes as $note) iterates values; foreach ($notes as $id => $note) iterates keys and values. Reach for foreach before for, while, or do-while — it handles the length, the index, and the iteration in one clean syntax, and it is the canonical MySQL-result renderer.",
            },
            bullets: [
              "Decisions: if / elseif / else, the ternary cond ? a : b, and switch with break per case.",
              "switch forgets to break and falls through - the classic trap to mention.",
              "Four loops: for (counted), while (test first), do-while (test last, runs at least once), foreach.",
              "foreach ($arr as $k => $v) is the PHP idiom for visiting arrays and MySQL rows.",
              "break exits the loop (break 2 exits two levels); continue skips to the next round.",
              "The page-printing pattern: fetch rows into an array, then foreach to echo <li> items."
            ],
            diagram: {
              kind: "cycle",
              title: "How a loop runs",
              caption: "Every loop, whatever its keyword, is this circle.",
              steps: [
                {
                  label: "Test the condition",
                  note: "true? enter or continue"
                },
                {
                  label: "Run the body",
                  note: "the statements inside"
                },
                {
                  label: "Update the counter",
                  note: "or fetch the next row"
                },
                {
                  label: "Back to the test",
                  note: "false? break and carry on"
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "control.php - decisions and all four loops",
              code: "<?php\n$score = 78;\nif ($score >= 75) { echo 'Distinction'; }\nelseif ($score >= 60) { echo 'First class'; }\nelse { echo 'Try again'; }\n\necho ($score >= 40) ? 'Pass' : 'Fail';   // ternary\n\nfor ($i = 1; $i <= 3; $i++) { echo $i . ' '; }\n$n = 3;\nwhile ($n > 0) { echo $n-- . ' '; }\ndo { echo 'once'; } while (false);        // runs at least once\n\n$notes = ['Unit I', 'Unit II'];\nforeach ($notes as $k => $t) { echo ($k + 1) . '. ' . $t . '<br>'; }\n?>"
            },
            keyTerms: [
              {
                term: "elseif",
                definition: "PHP's chained conditional branch (one word, unlike JavaScript's else if)."
              },
              {
                term: "switch",
                definition: "Multi-way branch on one value; each case needs break or it falls through."
              },
              {
                term: "foreach",
                definition: "Loop that visits every array element, optionally with keys: foreach ($a as $k => $v)."
              },
              {
                term: "do-while",
                definition: "Loop whose body runs once before the condition is first tested."
              },
              {
                term: "break / continue",
                definition: "break exits the loop; continue skips to the next round; both take a nesting level (break 2)."
              }
            ],
            examQuestions: [
              {
                q: "Explain decision-making and looping constructs in PHP with examples.",
                marks: 7,
                outline: [
                  "if / elseif / else with an example",
                  "Ternary operator",
                  "switch and the missing-break trap",
                  "for loop anatomy",
                  "while vs do-while contrast",
                  "foreach for arrays and MySQL rows",
                  "break / continue with nesting levels"
                ]
              },
              {
                q: "Differentiate while and do-while loops.",
                marks: 2
              },
              {
                q: "Write a foreach loop that prints an array of note titles as an HTML list.",
                marks: 3
              }
            ],
          },
          {
            number: "4.8",
            title: "PHP and HTML together",
            body: [
              "PHP's superpower is the interleaving of code and markup. HTML is the default output mode of a .php file; <?php ?> islands execute on the server; only their result reaches the browser. So a static template becomes dynamic by swapping the changeable parts — <title><?php echo $title; ?></title> inserts the page title; <h1>Welcome, <?php echo htmlspecialchars($name); ?></h1> inserts the user's name. Whole regions can be built or skipped with control flow: a login form inside <?php if (!isset($_SESSION['user'])): ?> <form>…</form> <?php else: ?> <p>Welcome back</p> <?php endif; ?> — the visitor sees one or the other depending on session state. The browser receives only the chosen fragment, with no PHP visible.",
              "The discipline every student must learn is separating logic from presentation. Compute arrays in PHP first (query the database, build a $notes array, do all conditionals), then let the template do nothing but foreach and echo. The anti-pattern: business logic interleaved with HTML in long if/else branches that mix data access, calculation, and markup — unreadable and unmaintainable. The professional pattern: the top of the file is PHP that prepares data; the bottom is HTML with minimal PHP that only renders it. Modern PHP frameworks (Laravel, Symfony) formalise this with separate controller and view files, but the same discipline applies to a single notes.php.",
              "The second discipline is the trust boundary: anything echoed from user input must be escaped, or a visitor's input becomes JavaScript running on other visitors' browsers — the XSS attack this course's exams love. htmlspecialchars($text) converts <, >, &, \" and ' to their HTML entities (&lt;, &gt;, &amp;, &quot;, &#039;), so a visitor's <script>alert('xss')</script> is echoed as &lt;script&gt;alert('xss')&lt;/script&gt; and rendered as text instead of executing. The rule: every echo of $_GET, $_POST, $_COOKIE, $_SESSION-sourced, or database-sourced text passes through htmlspecialchars first. The exception: text you control (an integer you cast with (int), or a constant string) does not need escaping.",
              "Shared page structure is the third pattern. include 'header.php'; inserts the contents of header.php at that point and executes any PHP inside it; require does the same but kills the page on failure (file not found); include_once and require_once prevent double-inclusion if the same file is pulled in twice. The standard layout: every page starts with <?php require 'config.php'; require 'header.php'; ?> then the page-specific content, then <?php require 'footer.php'; ?>. Header.php opens the <html>, outputs the <head>, opens <body> and the <nav>; footer.php closes </body></html> and outputs the footer links. One change to header.php updates every page's navigation — the same separation that external CSS gives styles.",
              "For a 7-mark answer on PHP+HTML: state the interleaving model (HTML default output, <?php ?> islands execute on server, only result reaches browser), explain the logic-vs-presentation discipline (compute arrays first, render with foreach and echo), state the XSS rule with htmlspecialchars (escape every echo of user or database input, with the < to &lt; conversion), and close with include/require/_once for shared header/footer shells. Mention the alternative colon syntax (if: … endif;) as the cleaner HTML-interleaved form.",
            ],
            callout: {
              type: "warning",
              title: "XSS — the security mark to never lose",
              body: "Every echo of user or database input must pass through htmlspecialchars() — < becomes &lt;, > becomes &gt;, so <script> tags render as text instead of executing. The same rule applies on the client (Unit III §3.11 — textContent not innerHTML). Skipping it is the most common PHP security mistake.",
            },
            bullets: [
              "HTML is the default output mode of a .php file; <?php ?> islands execute on the server.",
              "Swap static values for dynamic ones: <title><?php echo $pageTitle; ?></title>.",
              "Separate logic from presentation: compute arrays first, then render with foreach and echo.",
              "Escape every piece of user input with htmlspecialchars() before echoing - the anti-XSS law.",
              "include inserts and continues on failure; require kills the page; _once variants prevent double includes.",
              "Shared header.php and footer.php give every page the same layout."
            ],
            diagram: {
              kind: "pipeline",
              title: "One .php file, two modes",
              caption: "How a mixed HTML+PHP file is processed top to bottom.",
              stages: [
                {
                  label: "HTML passes through",
                  note: "sent to the browser untouched"
                },
                {
                  label: "<?php island opens",
                  note: "interpreter takes over"
                },
                {
                  label: "Logic runs",
                  note: "queries, conditions, computations"
                },
                {
                  label: "echo injects output",
                  note: "values dropped into the HTML stream"
                },
                {
                  label: "Island closes ?>",
                  note: "back to HTML mode; final page sent"
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "template.php - logic first, presentation after",
              code: "<?php\n// logic section: compute everything first\n$pageTitle = 'My Notes';\n$notes = ['Unit I - Web basics', 'Unit II - HTML'];\ninclude 'header.php';   // shared layout, executed if present\n?>\n<h1><?php echo htmlspecialchars($pageTitle); ?></h1>\n<ul>\n<?php foreach ($notes as $n) { ?>\n  <li><?php echo htmlspecialchars($n); ?></li>\n<?php } ?>\n</ul>\n<?php require 'footer.php'; ?>"
            },
            keyTerms: [
              {
                term: "PHP island",
                definition: "A <?php ... ?> block inside a .php file; everything outside it is output as-is."
              },
              {
                term: "include / require",
                definition: "Insert another file's contents; require terminates the script if the file is missing, include warns."
              },
              {
                term: "require_once",
                definition: "Same as require but skips a second include of the same file."
              },
              {
                term: "htmlspecialchars()",
                definition: "Converts <, >, &, quotes to entities so user input cannot inject HTML or JavaScript."
              },
              {
                term: "XSS",
                definition: "Cross-site scripting: attacker-supplied text executed as script in other visitors' browsers."
              }
            ],
            examQuestions: [
              {
                q: "How is PHP embedded in HTML? Explain include/require and protection against XSS with examples.",
                marks: 7,
                outline: [
                  "The two-mode model: HTML default, <?php ?> islands",
                  "Dynamic title/list example",
                  "Logic-before-presentation discipline",
                  "include vs require vs _once variants",
                  "htmlspecialchars() escaping rule",
                  "XSS attack sketch and why escaping defeats it",
                  "Shared header/footer pattern"
                ]
              },
              {
                q: "Differentiate include and require in PHP.",
                marks: 2
              },
              {
                q: "Why must user input be passed through htmlspecialchars() before echoing?",
                marks: 3
              }
            ],
          },
          {
            number: "4.9",
            title: "Arrays",
            body: [
              "PHP arrays are three structures in one, and this single-tool-fits-all design is one of PHP's signature conveniences. Indexed arrays are positional and zero-based: $tags = ['web', 'php', 'xml']; — read $tags[0] for 'web', grow with $tags[] = 'css' (appends at the next index), count with count($tags). Associative arrays use string keys: $note = ['id' => 42, 'title' => 'Unit IV', 'body' => 'Tags describe meaning']; — read $note['title'] for 'Unit IV'. Multidimensional arrays are arrays of arrays: $notes[0]['title'] — the title of the first note — and this is exactly the shape of every row you will ever fetch from MySQL in Unit V (a list of associative arrays keyed by column name).",
              "A worked array example binds the theory to the Unit V database loop. After fetching notes from MySQL: $notes = [ ['id' => 1, 'title' => 'Unit I', 'tags' => ['web', 'http']], ['id' => 2, 'title' => 'Unit II', 'tags' => ['html', 'forms']] ]; — a multidimensional array (list of rows) where each row is associative (column-name keys) and one column ('tags') is itself an array. To list all titles: foreach ($notes as $n) echo $n['title'];. To list all tags across all notes: foreach ($notes as $n) { foreach ($n['tags'] as $t) echo $t; }. To find the note with id 2: foreach ($notes as $n) { if ($n['id'] === 2) return $n; }. This is the data shape behind every PHP-driven page.",
              "The essential toolkit earns its marks. count($arr) the length. foreach ($arr as $k => $v) to visit everything with keys and values. in_array($needle, $arr) for membership; array_search($needle, $arr) returns the key. array_key_exists($key, $arr) checks a key. sort($arr) reindexes by value (ascending); asort($arr) sorts by value preserving keys; ksort($arr) sorts by key; rsort, arsort, krsort reverse. array_merge($a, $b) concatenates; array_slice($arr, 2, 3) takes a sub-array; array_keys($arr) and array_values($arr) extract just keys or just values. array_map(fn($x) => $x*2, $arr) and array_filter($arr, fn($x) => $x > 0) transform and select.",
              "Two string-array bridges earn one exam line each. implode(',', $arr) joins an array into a comma-separated string — ['a','b','c'] becomes 'a,b,c'. explode(',', $str) splits a string into an array on a delimiter — 'a,b,c' becomes ['a','b','c']. The classic recipe for tag handling: $tags = explode(',', $_POST['tags']); trims each with array_map; then foreach ($tags as $t) insert into the database; on the way out, implode(',', $row['tags']) for display. json_encode($arr) serialises to a JSON string ('[\"a\",\"b\"]' or '{\"id\":42}'); json_decode($str, true) parses back to an array (the true flag returns associative arrays instead of objects). These four functions are the bridge between PHP arrays and the wider web.",
              "For a 7-mark answer: name the three array kinds (indexed, associative, multidimensional) with one example each, show the worked multidimensional notes array (the MySQL row shape), list six essential array functions (count, foreach, in_array, sort/asort/ksort, array_merge, array_keys/values), explain implode/explode as the string-array bridge, and close with json_encode/json_decode for interop with the browser's JSON. The diagram below shows the three array structures side by side.",
            ],
            diagram: {
              kind: "compare",
              title: "Three arrays in one",
              caption: "PHP's array is indexed, associative, and multidimensional — all the same type.",
              left: {
                heading: "Indexed",
                items: ["$a = ['web', 'php', 'xml']", "$a[0] = 'web'", "zero-based, positional", "the basic list shape"],
              },
              right: {
                heading: "Associative / multidim",
                items: ["$n = ['id' => 42, 'title' => 'X']", "$n['title']", "string keys → values", "$notes[0]['title'] — MySQL row shape"],
              },
            },
            keyTerms: [
              { term: "Indexed array", definition: "A PHP array with integer keys 0, 1, 2 … — positional, zero-based, the basic list shape." },
              { term: "Associative array", definition: "A PHP array with string keys mapping to values — the shape of every MySQL row fetched by fetch_assoc()." },
              { term: "Multidimensional array", definition: "An array of arrays — $notes[0]['title'] — the shape of a list of database rows." },
              { term: "Superglobal", definition: "A PHP associative array visible in every scope — $_GET, $_POST, $_SERVER etc. — covered in §4.6." },
            ],
            bullets: [
              "One array type plays three roles: indexed, associative and multidimensional.",
              "Indexed: zero-based positions, $tags[0]; append with $tags[] = 'css'.",
              "Associative: string keys, $n['title'] - the shape of $_POST and MySQL rows.",
              "Multidimensional: arrays of arrays, $notes[0]['title'] - the fetched-rows shape.",
              "Toolkit: count, foreach with keys, in_array, array_search, array_key_exists, sort/asort/ksort.",
              "implode joins an array into a string; explode splits a string into an array."
            ],
            codeExample: {
              language: "php",
              caption: "arrays.php - the three shapes and the toolkit",
              code: "<?php\n$tags = ['web', 'php', 'xml'];        // indexed\n$tags[] = 'css';                      // append\necho $tags[0];                        // web\n\n$note = ['id' => 42, 'title' => 'HTTP notes'];  // associative\necho $note['title'];\n\n$notes = [ [ 'id' => 1, 'title' => 'Unit I' ],    // multidimensional\n           [ 'id' => 2, 'title' => 'Unit II' ] ];\nforeach ($notes as $n) { echo $n['title'] . '<br>'; }\n\necho count($tags);                     // 4\necho in_array('php', $tags) ? 'found' : 'no';\necho implode(',', $tags);              // web,php,xml,css\n$parts = explode('-', 'ad-503a-iwt');  // ['ad','503a','iwt']\n?>"
            },
            callout: {
              type: "tip",
              title: "The MySQL row shape",
              body: "Every MySQL fetch in Unit V returns a multidimensional array of associative rows - memorise $notes[0]['title'] and half the unit's code reads itself."
            },
            examQuestions: [
              {
                q: "Explain arrays in PHP: indexed, associative and multidimensional, with examples and five array functions.",
                marks: 7,
                outline: [
                  "Indexed arrays with append and access",
                  "Associative arrays with string keys",
                  "Multidimensional arrays as the MySQL row shape",
                  "count and foreach with keys",
                  "in_array / array_search / array_key_exists",
                  "sort, asort, ksort in one line each",
                  "implode and explode bridges"
                ]
              },
              {
                q: "How do you read the title of the first row of $notes fetched from MySQL?",
                marks: 2
              },
              {
                q: "What do implode() and explode() return? Write one example of each.",
                marks: 3
              }
            ],
          },
          {
            number: "4.10",
            title: "Functions",
            body: [
              "Functions package logic once and call it forever — the most basic abstraction in any programming language. The syntax: function slugify($s, $sep='-') { … return $out; } — name, parameter list (with optional default values), body, optional return. Default parameters fill in when the caller omits them: slugify('Hello World') uses '-' as separator, slugify('Hello World', '_') uses '_'. Type declarations (PHP 7+) document the contract: function slugify(string $s, string $sep = '-'): string — the function refuses non-string arguments at call time. Arguments pass by value by default (the function gets a copy); reference parameters (&$out) let a function write back into the caller's variable — array_walk($arr, function(&$v) { $v = trim($v); }) trims in place.",
              "Variable scope is the second exam-critical rule. Variables inside a function are local — a clean slate unless you import them explicitly. The global keyword (global $counter;) brings an outer variable in, but is considered poor style because it couples the function to its caller's variables. The clean pattern: pass dependencies in as parameters and return results out. The same rule applies to superglobals — $_GET, $_POST, $_SESSION are accessible inside functions without a global declaration because they are superglobals (a special PHP category), but ordinary variables are not. The static keyword (static $count = 0;) lets a function remember a value across calls — useful for counters, but rare in modern code.",
              "PHP's standard library is a thousand functions deep, and the web-exam subset is small enough to memorise. String functions (covered in §4.12): strlen, strtoupper, substr, str_replace, trim, explode, implode, sprintf, number_format. Array functions: count, in_array, sort, array_merge, array_keys, array_map, array_filter. Date and time: date('Y-m-d H:i:s'), time(), strtotime('+1 day'). File functions (§4.14): file_get_contents, file_put_contents, fopen, fread, fwrite. Math: rand, mt_rand, abs, round, floor, ceil, max, min. Type and state: isset, empty, is_numeric, is_array, is_string, gettype. Regular expressions: preg_match, preg_replace. Reach for these before writing your own — the standard library is older and better tested than anything you write fresh.",
              "Anonymous functions (closures) and arrow functions are modern PHP's first-class citizens. An anonymous function is a function expression stored in a variable: $slugify = function ($s) { return strtolower(str_replace(' ', '-', $s)); }; — callable as $slugify('Hello World'). They are the foundation of array_map, array_filter, array_walk, and usort: usort($notes, function ($a, $b) { return $a['created_at'] <=> $b['created_at']; }) sorts notes by date. The arrow function (PHP 7.4+) is a shorter form for single-expression closures: $double = fn($x) => $x * 2; — and unlike anonymous functions, arrow functions auto-capture outer variables by value, which removes the use() boilerplate.",
              "For a 7-mark answer on functions: state the syntax (function name(params with defaults): returnType { … return … }), explain pass-by-value vs reference parameters (&$out), state the scope rule (locals by default, global imports globals, superglobals are auto-visible), list eight standard-library functions across strings, arrays, dates and files, and close with anonymous and arrow functions as first-class values powering array_map, array_filter and usort. Mention type declarations as the modern contract-documenting feature.",
            ],
            callout: {
              type: "tip",
              title: "Defaults and types — the modern signature",
              body: "function fetch(int $id, bool $cache = true, ?string $filter = null): array { … } — type declarations on every parameter, defaults for optionals, nullable types with ?, return type declared. The signature is the documentation; write it well.",
            },
            bullets: [
              "Syntax: function name($a, $b = 'default') { ... return $out; } - defaults make parameters optional.",
              "Type hints (string $s) and return types (: string) document intent in modern PHP.",
              "Variables inside functions are local; global $x imports an outer variable (poor style).",
              "Parameters are passed by value; &$ref passes by reference so the caller's variable changes.",
              "Anonymous functions (closures) and arrow fns are values you can pass around.",
              "The standard library covers strings, arrays, files, dates - know the exam dozen."
            ],
            diagram: {
              kind: "compare",
              title: "Pass by value vs pass by reference",
              caption: "The ampersand decides who owns the change.",
              left: {
                heading: "By value (default)",
                items: [
                  "function f($n) { $n++; }",
                  "caller's variable untouched",
                  "a copy is made",
                  "safe but costs memory for big data",
                  "the everyday choice"
                ]
              },
              right: {
                heading: "By reference (&)",
                items: [
                  "function f(&$n) { $n++; }",
                  "caller's variable modified",
                  "no copy - one variable, two names",
                  "used for output parameters",
                  "preg_match's matches array"
                ]
              }
            },
            codeExample: {
              language: "php",
              caption: "functions.php - defaults, references and closures",
              code: "<?php\nfunction slugify(string $s, string $sep = '-'): string {\n  return strtolower(str_replace(' ', $sep, trim($s)));\n}\necho slugify('Internet Web Tech');     // internet-web-tech\n\nfunction addTax(float &$total): void { // by reference\n  $total = $total * 1.18;\n}\n$price = 100;\naddTax($price);                        // $price is now 118\n\n$shout = function (string $s): string { return strtoupper($s) . '!'; };\necho $shout('done');                   // DONE!\n?>"
            },
            keyTerms: [
              {
                term: "Default parameter",
                definition: "A parameter with a preset value ($sep = '-') the caller may omit."
              },
              {
                term: "Pass by value",
                definition: "Default PHP behaviour: the function receives a copy of the argument."
              },
              {
                term: "Pass by reference",
                definition: "&$param shares the caller's variable with the function."
              },
              {
                term: "Scope",
                definition: "Function-local variables are invisible outside; global imports an outer variable; superglobals are always visible."
              },
              {
                term: "Closure",
                definition: "An anonymous function stored in a variable and callable like any function."
              }
            ],
            examQuestions: [
              {
                q: "Explain user-defined functions in PHP with parameters, return values and scope rules.",
                marks: 7,
                outline: [
                  "Function syntax with a default parameter",
                  "Type hints and return types",
                  "Pass by value vs &$reference with an example",
                  "Local scope and the global keyword",
                  "Superglobals visible everywhere",
                  "Anonymous functions / closures",
                  "String and array library functions"
                ]
              },
              {
                q: "What does &$param mean in a PHP function signature?",
                marks: 2
              },
              {
                q: "What is a closure in PHP? Write one example.",
                marks: 3
              }
            ],
          },
          {
            number: "4.11",
            title: "Browser control and detection",
            body: [
              "The server can ask 'who is calling?' and steer accordingly. Detection reads request metadata that the browser sends automatically. $_SERVER['HTTP_USER_AGENT'] carries the browser's self-description string ('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36') — parse it with get_browser() or with regexes to learn browser (Chrome, Firefox, Safari), platform (Windows, Mac, Linux, Android, iOS), and robot status (Googlebot, Bingbot). $_SERVER['HTTP_ACCEPT_LANGUAGE'] reveals preferred languages ('en-IN,en;q=0.9,hi;q=0.8') for localisation. $_SERVER['HTTP_REFERER'] names the linking page — useful for analytics and for blocking deep-linking.",
              "Control uses HTTP response headers to redirect, force downloads, or set content type — all server-side steering that must happen before any output. The redirect pattern: header('Location: login.php'); exit; — sends a 302 Found response with the new URL and stops the script. The exit is mandatory because the rest of the script continues to run after header() if you don't stop it, and the redirect should not be followed by output. The famous 'headers already sent' error is this rule biting: if you have already echo'd anything (even a single space before the opening <?php tag), the response headers have been flushed and header() fails. The fix: move all header() calls before any echo, or use output buffering (ob_start()) to delay output.",
              "Force a download with Content-Disposition: header('Content-Type: application/pdf'); header('Content-Disposition: attachment; filename=\"report.pdf\"'); readfile('report.pdf'); — the browser downloads rather than displaying. Serve a different page to mobile clients by detecting the user-agent and redirecting: if (preg_match('/Mobile|Android|iPhone/', $_SERVER['HTTP_USER_AGENT'])) { header('Location: /mobile/'); exit; }. Set a content type for non-HTML output: header('Content-Type: application/json'); echo json_encode($data); for an AJAX response. Set caching rules: header('Cache-Control: no-store'); for sensitive pages.",
              "The modern verdict: detect features, not browsers. User-agent strings lie — browsers spoof each other, the strings are a historical mess, and new browsers arrive with new strings. The professional pattern today is feature detection on the client (CSS @supports and JavaScript's 'X' in window checks) and responsive design with CSS media queries for layout adaptation. Server-side user-agent detection survives only for legacy cases (very old browsers, mobile-vs-desktop routing) and SEO (serving different content to crawlers, which is now penalised as cloaking). For most modern sites, the same HTML reaches every browser; CSS and JavaScript adapt.",
              "For a 7-mark answer on browser detection: name three $_SERVER keys for detection (HTTP_USER_AGENT, HTTP_ACCEPT_LANGUAGE, HTTP_REFERER), explain the header() redirect pattern with the exit and the 'headers already sent' rule (headers must precede all echo; use ob_start() if needed), show the force-download recipe (Content-Type + Content-Disposition + readfile), and close with the modern verdict (feature detection on client + responsive media queries beat server-side user-agent sniffing). The trust-boundary note: never trust the user-agent for security decisions — it is trivially forged.",
            ],
            callout: {
              type: "warning",
              title: "'headers already sent' — the classic PHP error",
              body: "Cause: you echoed something (even a blank line or a UTF-8 BOM) before calling header() or setcookie(). Fix: move all header() and setcookie() calls before any echo, or use ob_start() at the top of the script to buffer output and flush headers first.",
            },
            bullets: [
              "Detection reads request metadata: $_SERVER['HTTP_USER_AGENT'], HTTP_ACCEPT_LANGUAGE, HTTP_REFERER.",
              "User-agent strings are spoofable lies - detect features, not browsers.",
              "Control sends response headers: header('Location: login.php'); exit; redirects the visitor.",
              "Content-Type and Content-Disposition steer rendering vs downloading.",
              "header() must run before ANY output, or PHP throws 'headers already sent'.",
              "ob_start() output buffering can rescue late headers in legacy code."
            ],
            diagram: {
              kind: "fork",
              title: "Steering by detection",
              caption: "Read the request metadata, then pick a response route.",
              start: "Request arrives",
              branches: [
                {
                  label: "Not logged in",
                  outcome: "header('Location: login.php'); exit;",
                  good: true
                },
                {
                  label: "Mobile user agent",
                  outcome: "serve the compact stylesheet or app layout",
                  good: true
                },
                {
                  label: "PDF requested",
                  outcome: "Content-Type + Content-Disposition: attachment",
                  good: true
                },
                {
                  label: "Header sent after echo",
                  outcome: "'headers already sent' error - output started",
                  good: false
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "steer.php - redirect, download and detection",
              code: "<?php\nif (!isset($_SESSION['user_id'])) {\n  header('Location: login.php');   // 302 redirect\n  exit;                            // stop the script\n}\n\n$ua = $_SERVER['HTTP_USER_AGENT'];\nif (strpos($ua, 'Mobile') !== false) { $css = 'mobile.css'; }\n\n// force a download\nheader('Content-Type: application/pdf');\nheader('Content-Disposition: attachment; filename=\"report.pdf\"');\nreadfile('report.pdf');\n?>"
            },
            keyTerms: [
              {
                term: "HTTP_USER_AGENT",
                definition: "$_SERVER key carrying the browser's self-description string."
              },
              {
                term: "header('Location: ...')",
                definition: "Sends a redirect response; must be followed by exit to stop further output."
              },
              {
                term: "Content-Disposition",
                definition: "Response header forcing download (attachment) with a suggested filename."
              },
              {
                term: "headers already sent",
                definition: "PHP fatal warning when header() runs after any body output; fix by moving it earlier or buffering."
              },
              {
                term: "Feature detection",
                definition: "Testing whether a capability exists instead of guessing from the user-agent string."
              }
            ],
            examQuestions: [
              {
                q: "Explain browser detection and browser control in PHP using $_SERVER and header() with examples.",
                marks: 7,
                outline: [
                  "Three $_SERVER keys for detection",
                  "User-agent spoofing and the detect-features verdict",
                  "header('Location') redirect pattern with exit",
                  "Content-Type / Content-Disposition download pattern",
                  "The headers-already-sent rule and ob_start()",
                  "Mobile-steering example",
                  "Client-side feature detection comparison"
                ]
              },
              {
                q: "Why must header() be called before any output in PHP?",
                marks: 2
              },
              {
                q: "Write PHP that redirects a visitor to login.php and stops the script.",
                marks: 3
              }
            ],
          },
          {
            number: "4.12",
            title: "String handling",
            body: [
              "Web work is string work, and PHP's string toolkit is its deepest drawer. Every form field arrives as a string, every database column returns as a string, every URL is parsed as a string, every HTML output is built from strings. The categories of string work: inspecting (length, position, contains), cutting and joining (substrings, splitting, joining), cleaning (trimming whitespace), transforming (case, replace), comparing (equality, ordering), and formatting (printf, number_format). Mastering this toolkit is what makes PHP feel productive for web work — most pages are a sequence of string operations.",
              "Inspecting and finding. strlen($s) returns the byte length (use mb_strlen for multi-byte characters — important for Hindi or emoji text where one character is multiple bytes). strpos($s, 'php') returns the index of the first occurrence, or false if not found — always check with !== false because index 0 is falsy: if (strpos($s, 'php') !== false) { … }. str_contains($s, 'php') (PHP 8) is the modern, clear alternative returning a boolean. str_starts_with($s, 'http') and str_ends_with($s, '.html') are also PHP 8 conveniences. strrpos finds the last occurrence, substr_count counts occurrences.",
              "Cutting and joining. substr($s, 0, 10) takes the first 10 characters; substr($s, -3) takes the last 3; substr($s, 5) takes everything after position 5. explode('/', '/notes/42/tags') splits on '/' into ['' , 'notes', '42', 'tags'] — the URL-parsing workhorse. implode(', ', $parts) joins an array into a comma-separated string. str_split($s, 4) splits into fixed-length chunks. str_pad($s, 10, '0', STR_PAD_LEFT) pads to 10 characters with leading zeros — useful for formatted IDs. wordwrap($s, 75) wraps at 75 characters for email bodies.",
              "Cleaning, transforming, and formatting. trim($s) strips leading and trailing whitespace (the first thing done to every form field); ltrim and rtrim trim one side only; trim($s, '/-') strips specific characters. strtolower and strtoupper change case; ucfirst capitalises the first letter; ucwords capitalises every word; mb_convert_case handles multi-byte text. str_replace('a', 'b', $s) replaces all occurrences; str_ireplace is case-insensitive; strtr($s, ['a' => 'b', 'c' => 'd']) does multiple replacements at once. nl2br($s) converts newlines to <br> tags for displaying multi-line text in HTML. sprintf('%s has %d notes', $name, $n) formats like C; number_format($price, 2, '.', ',') formats 1234.5 as '1,234.50'.",
              "Security's twin pillars live in string functions. htmlspecialchars($text) before echoing to HTML — converts <, >, &, \", ' to entities, defeating XSS. The opposite direction: htmlspecialchars_decode reverses it. For database escaping, the modern answer is prepared statements (Unit V §5.5) which make SQL injection structurally impossible; the legacy addslashes($s) and mysql_real_escape_string($s) are no longer the right answer. For URL parameters: urlencode($s) encodes spaces as %20 and special characters for safe inclusion in a query string; urldecode reverses it. For base64 transport: base64_encode and base64_decode for binary data in text contexts. For a 7-mark answer: list the six categories (inspect, cut/join, clean, transform, compare, format) with one example each, demonstrate strlen/strpos with the !== false rule, show trim/explode/implode/sprintf, and close with the security twin pillars (htmlspecialchars for HTML, prepared statements for SQL).",
            ],
            keyTerms: [
              { term: "htmlspecialchars", definition: "PHP function that converts <, >, &, \", ' to HTML entities — the XSS defence for echoing user input to HTML." },
              { term: "strpos", definition: "PHP function returning the index of a substring's first occurrence, or false if not found — check with !== false because index 0 is falsy." },
              { term: "explode / implode", definition: "PHP's string-array bridges — explode splits a string on a delimiter into an array, implode joins an array into a string." },
              { term: "trim", definition: "PHP function that strips leading and trailing whitespace from a string — the first thing done to every form field." },
            ],
            bullets: [
              "Inspect: strlen / mb_strlen (multi-byte), strpos (first occurrence, false when absent).",
              "Cut and join: substr with negative offsets, explode on a delimiter, implode to re-join.",
              "Clean and transform: trim/ltrim/rtrim, strtolower/strtoupper, ucfirst, str_replace, sprintf, number_format.",
              "strpos returns 0 for a match at the start - compare with === false, never with if (!$pos).",
              "Security pillar one: htmlspecialchars() before echoing anything user-supplied.",
              "Security pillar two: prepared statements for the database (Unit V), not string-built SQL."
            ],
            diagram: {
              kind: "pipeline",
              title: "The life of a form string",
              caption: "Every input passes through this assembly line before it is trusted.",
              stages: [
                {
                  label: "Arrive raw",
                  note: "$_POST['title'], whitespace and all"
                },
                {
                  label: "trim()",
                  note: "strip leading/trailing spaces"
                },
                {
                  label: "Validate",
                  note: "strlen, strpos, regex checks"
                },
                {
                  label: "Transform",
                  note: "strtolower, ucfirst as needed"
                },
                {
                  label: "Escape on output",
                  note: "htmlspecialchars() before echo"
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "strings.php - the exam dozen in action",
              code: "<?php\n$t = '  PHP String Handling  ';\n$t = trim($t);                    // 'PHP String Handling'\necho strlen($t);                  // 19\necho strpos($t, 'String');        // 7\necho substr($t, 0, 3);            // PHP\necho strtolower($t);              // php string handling\necho ucfirst(strtolower($t));     // Php string handling\necho str_replace('Handling', 'Work', $t);\n$words = explode(' ', $t);        // ['PHP','String','Handling']\necho implode('-', $words);        // PHP-String-Handling\necho htmlspecialchars('<b>' . $t . '</b>');  // safe for output\n?>"
            },
            callout: {
              type: "warning",
              title: "strpos's zero trap",
              body: "strpos returns the match position - and 0 is a valid position. if (strpos($s, 'PHP') != false) misses a match at the start. Always write !== false. This one line is a recurring 2-mark question."
            },
            examQuestions: [
              {
                q: "Explain PHP string functions with examples: strlen, strpos, substr, str_replace, explode, implode and trim.",
                marks: 7,
                outline: [
                  "strlen and mb_strlen for multi-byte text",
                  "strpos semantics and the === false rule",
                  "substr with positive, negative and omitted lengths",
                  "explode and implode as the string-array bridge",
                  "trim family and case functions",
                  "str_replace and formatting functions",
                  "htmlspecialchars as the output-escape pillar"
                ]
              },
              {
                q: "Why must strpos() be compared with === false?",
                marks: 2
              },
              {
                q: "Write PHP to convert 'hello web world' into 'hello-web-world'.",
                marks: 3
              }
            ],
          },
          {
            number: "4.13",
            title: "Form processing",
            body: [
              "The form of Unit II §2.8 meets its partner here — the browser submits name=value pairs and PHP parses them into the superglobal chosen by the form's method. $_GET holds data from method=\"get\" forms (data visible in the URL as ?name=value&… — searches, filters, bookmarks, but limited to ~2000 characters and visible in server logs). $_POST holds data from method=\"post\" forms (in the HTTP request body, invisible, unlimited in size, right for passwords, long text, and uploads). $_FILES holds uploaded file metadata (name, type, size, temporary path) — covered in §4.14. The exam rule: GET for retrieval (idempotent, bookmarkable), POST for submission (state-changing, sensitive); never use GET for passwords.",
              "The pattern every lab script follows has four steps. Step one: detect submission — check $_SERVER['REQUEST_METHOD'] === 'POST' (or isset($_POST['submit'])) so the page knows it is receiving rather than merely displaying. Step two: trim and validate each field — $title = trim($_POST['title'] ?? '');, then filter_var($email, FILTER_VALIDATE_EMAIL) for emails, preg_match('/^\\d{6}$/', $pin) for PINs, length checks for short or long fields. Step three: branch — if any check failed, re-display the form with error messages (echoing the old values back into the value= attributes — never punish the user with a blank form for a single typo); if all passed, process and redirect. Step four: redirect after success — header('Location: thanks.php'); exit; — the post-redirect-get pattern that stops the user's refresh button from re-submitting the form.",
              "Multivalued controls arrive as arrays. A set of checkboxes for tags uses name=\"tags[]\" on each checkbox — PHP then receives $_POST['tags'] as an array, not a single value. A select with multiple=\"multiple\" uses name=\"subjects[]\" similarly. The processing loop is then foreach ($_POST['tags'] as $t) { … }. The [] suffix is the cue to PHP that the field may have multiple values; without it, only the last value overwrites earlier ones. This is the bridge between HTML's checkbox/multi-select and PHP's array handling.",
              "Two security rules complete the picture. First: client-side JavaScript checks (Unit III §3.12) are courtesy, server-side PHP checks are the law — anyone can disable JavaScript or craft a POST with curl, so PHP must re-validate every field regardless of what the client did. Second: every value echoed back into the form's value= attribute must pass through htmlspecialchars() — otherwise a visitor's <script> tag in the field becomes executable JavaScript when re-displayed (a self-XSS attack, less common but real). The pattern: <input name=\"title\" value=\"<?php echo htmlspecialchars($title ?? ''); ?>\"> — the null-coalesce handles the first display (no submission yet) and the escape handles every subsequent display.",
              "For a 7-mark answer on form processing: state the $_GET vs $_POST division (GET for retrieval, POST for submission, never GET for passwords), trace the four-step pattern (detect submission → trim and validate → branch on success/failure → redirect after success), explain the tags[] array trick for multivalued controls, and close with the courtesy-vs-law rule (PHP must re-validate everything) and the htmlspecialchars escape rule for re-displayed values. The code block below shows the complete save.php pattern.",
            ],
            codeExample: {
              language: "php",
              caption: "save.php — the form-processing pattern",
              code: `<?php
$errors = [];
if (isset($_POST['submit'])) {
  $title = trim($_POST['title'] ?? '');
  if ($title === '')
    $errors[] = "Title is required";
  if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
    $errors[] = "Email looks wrong";
  if (!$errors) {
    // save to the database (Unit V) then leave
    header("Location: saved.php"); exit;
  }
              }
?>
<form method="post">
  <input name="title" value="<?php echo htmlspecialchars($title ?? ''); ?>">
  <button name="submit">Save</button>
</form>`,
            },
            callout: {
              type: "exam",
              title: "Post-Redirect-Get — the refresh-safe pattern",
              body: "After a successful POST, redirect (header('Location: …'); exit;) to a GET page. The user's refresh button then re-loads the GET page, not the POST — preventing duplicate submissions. The pattern is named PRG and is the standard for every state-changing form.",
            },
            bullets: [
              "$_GET holds method='get' data (URL query strings - searches, filters, pagination).",
              "$_POST holds method='post' data (form bodies - logins, inserts, anything secret or long).",
              "Four-step pattern: detect submission (REQUEST_METHOD), trim and validate, branch, redirect after success.",
              "Post-Redirect-Get prevents duplicate submissions on refresh.",
              "name='tags[]' checkboxes and multi-selects arrive as arrays.",
              "Client checks are courtesy; PHP must re-validate everything - and use prepared statements, never interpolated SQL."
            ],
            diagram: {
              kind: "compare",
              title: "Form method GET vs POST",
              caption: "The same form data, two different envelopes.",
              left: {
                heading: "method='get'",
                items: [
                  "data visible in the URL",
                  "bookmarkable and cacheable",
                  "limited length (~2 KB)",
                  "right for searches and filters",
                  "never for passwords"
                ]
              },
              right: {
                heading: "method='post'",
                items: [
                  "data travels in the request body",
                  "not bookmarked, not cached",
                  "no practical size limit",
                  "right for logins and inserts",
                  "server should redirect after success (PRG)"
                ]
              }
            },
            keyTerms: [
              {
                term: "$_GET",
                definition: "Superglobal holding URL query-string parameters from get forms and links."
              },
              {
                term: "$_POST",
                definition: "Superglobal holding request-body data from post forms."
              },
              {
                term: "REQUEST_METHOD",
                definition: "$_SERVER key ('GET'/'POST') used to detect whether the page is being submitted to."
              },
              {
                term: "PRG pattern",
                definition: "Post-Redirect-Get: after a successful POST, redirect so refresh cannot resubmit."
              },
              {
                term: "tags[]",
                definition: "HTML name suffix that makes PHP receive the control's values as an array."
              }
            ],
            examQuestions: [
              {
                q: "Explain form processing in PHP with $_GET and $_POST. Write the four-step processing pattern with a code example.",
                marks: 7,
                outline: [
                  "$_GET vs $_POST division and the password rule",
                  "Detect submission via REQUEST_METHOD or isset",
                  "Trim and validate each field server-side",
                  "Branch on success/failure with error messages",
                  "Redirect after success (PRG pattern)",
                  "Array-valued controls (tags[]) handling",
                  "Security: escaping output, prepared statements"
                ]
              },
              {
                q: "When must a form use POST rather than GET? Give two situations.",
                marks: 2
              },
              {
                q: "How does PHP receive the values of checkboxes named tags[]?",
                marks: 3
              }
            ],
          },
          {
            number: "4.14",
            title: "Working with files",
            body: [
              "PHP reads and writes the server's filesystem — the no-database persistence of Unit IV. Before MySQL arrives in Unit V, files are the storage layer: notes.txt, log.txt, config.json, count.txt. Even with MySQL available, files remain the right tool for logs, configuration, cached output, and uploaded user files. PHP's file functions are modelled on C's stdio and are simple once you know the mode letters.",
              "Reading comes in three flavours. file_get_contents('notes.txt') slurps a whole file into one string — the simplest API, perfect for small files. file('notes.txt') returns the file as an array of lines (each line one element, newline preserved) — useful for line-by-line processing. The classic trio fopen / fgets / fclose streams large files line by line: $fh = fopen('big.log', 'r'); while ($line = fgets($fh)) { … } fclose($fh); — constant memory regardless of file size, the right choice for multi-gigabyte logs. The fopen mode letters are the whole trick: 'r' read from start, 'w' write (truncate the file to zero first!), 'a' append (write at end, create if missing), 'r+' read and write (no truncate), 'w+' read and write (truncate), 'a+' read and append.",
              "Writing mirrors reading. file_put_contents('log.txt', $line, FILE_APPEND) writes a string in one call — the FILE_APPEND flag adds to the file instead of overwriting; without it the file is truncated first. For control, use the fopen trio: $fh = fopen('log.txt', 'a'); fwrite($fh, $line); fclose($fh); — useful when you are writing many lines and want to keep the handle open. Always check the return value: file_put_contents returns the byte count or false on failure; fwrite returns the byte count or false. The professional habit: if ($result === false) { handle_error(); } — never assume a file write succeeded.",
              "File tests and housekeeping complete the kit. file_exists('notes.txt') returns true if the file exists. is_writable('notes.txt') checks write permission before opening. is_readable checks read permission. filesize('notes.txt') returns the byte size. filemtime returns the modification timestamp (for cache invalidation). unlink('notes.txt') deletes a file. rename('old.txt', 'new.txt') renames or moves it. copy('src.txt', 'dst.txt') copies it. dirname(__FILE__) or __DIR__ gives the current file's directory — useful for building absolute paths from relative ones. The pathinfo($path) function returns an associative array of dirname, basename, extension and filename — the path-decomposition tool.",
              "Uploaded files arrive through the $_FILES superglobal and need special handling. When a form posts <input type=\"file\" name=\"photo\"> with enctype=\"multipart/form-data\", PHP populates $_FILES['photo'] with: 'name' (the user's filename), 'type' (the MIME type the browser claims), 'size' (bytes), 'tmp_name' (the temporary path PHP stored the upload at), 'error' (an error code, 0 = success). The script must call move_uploaded_file($_FILES['photo']['tmp_name'], 'uploads/' . $_FILES['photo']['name']) to carry the file from its temporary home to a permanent location — PHP deletes the temp file at script end otherwise. Two security disciplines: validate the file size and type server-side (never trust 'type' alone — check the extension and the actual content), and never trust the user-supplied filename — generate a safe name (uniqid() . '.jpg') rather than using $_FILES['photo']['name'] directly. For a 7-mark answer: name the three reading flavours (file_get_contents, file, fopen/fgets/fclose) with one trait each, list the mode letters (r, w, a, r+, w+, a+), show the writing pair (file_put_contents with FILE_APPEND, fwrite), and close with the $_FILES upload handling and the two security disciplines.",
            ],
            callout: {
              type: "warning",
              title: "Never trust a user-supplied filename",
              body: "When saving uploads, never use $_FILES['photo']['name'] directly — a visitor can send '../../index.php' as the name and overwrite your script. Generate a safe name with uniqid() or bin2hex(random_bytes(16)) plus a known extension, validate the actual content type, and store outside the web root if possible.",
            },
            bullets: [
              "Files are the no-database persistence layer: logs, config, counters, uploads.",
              "Slurp APIs: file_get_contents (whole file to string), file() (array of lines), readfile (straight to output).",
              "One-call write: file_put_contents($path, $data, FILE_APPEND) - without the flag it overwrites.",
              "Control API: fopen (mode r, w, a, x), fgets / fread / fwrite, feof test, fclose always.",
              "Tests: file_exists, is_readable, is_writable, filesize, filemtime.",
              "Uploads arrive in $_FILES with name, type, size, tmp_name, error - move_uploaded_file to keep them."
            ],
            diagram: {
              kind: "pipeline",
              title: "The fopen-fclose lifecycle",
              caption: "The classic three-step discipline for controlled file access.",
              stages: [
                {
                  label: "fopen",
                  note: "pick the mode: r, w, a"
                },
                {
                  label: "Read or write",
                  note: "fgets / fwrite inside a loop"
                },
                {
                  label: "Check feof",
                  note: "stop at end of file"
                },
                {
                  label: "fclose",
                  note: "release the handle, flush buffers"
                },
                {
                  label: "Verify",
                  note: "file_exists / filesize after writes"
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "counter.php - a file-backed page counter",
              code: "<?php\n$file = 'count.txt';\n$count = file_exists($file) ? (int) file_get_contents($file) : 0;\n$count++;\nfile_put_contents($file, $count);        // overwrite with the new value\n\n// appending a log line instead\nfile_put_contents('log.txt', date('c') . \" visit\\n\", FILE_APPEND);\n\necho 'Visits: ' . $count;\n?>"
            },
            keyTerms: [
              {
                term: "file_get_contents",
                definition: "Reads an entire file into one string in a single call."
              },
              {
                term: "file_put_contents",
                definition: "Writes a string to a file; FILE_APPEND flag adds instead of overwriting."
              },
              {
                term: "fopen modes",
                definition: "r read, w truncate and write, a append, x create-or-fail."
              },
              {
                term: "feof",
                definition: "True when the file pointer reaches the end; guards while-loops over lines."
              },
              {
                term: "$_FILES",
                definition: "Superglobal describing an uploaded file: name, type, size, tmp_name, error."
              }
            ],
            examQuestions: [
              {
                q: "Explain file handling in PHP: reading, writing, appending and file tests with examples.",
                marks: 7,
                outline: [
                  "Why files matter before MySQL",
                  "file_get_contents, file(), readfile",
                  "file_put_contents with and without FILE_APPEND",
                  "fopen / fgets / fwrite / feof / fclose lifecycle",
                  "File tests: file_exists, is_writable, filesize, filemtime",
                  "Uploaded files: the five $_FILES keys",
                  "move_uploaded_file and filename distrust"
                ]
              },
              {
                q: "Which fopen mode opens a file for appending?",
                marks: 2
              },
              {
                q: "Name any four keys of the $_FILES superglobal and what each holds.",
                marks: 3
              }
            ],
          },
          {
            number: "4.15",
            title: "Cookies and sessions in PHP",
            body: [
              "Unit II §2.15's theory becomes two PHP mechanisms, and the contrast is the most exam-critical fact in this section. Cookies are small (≈ 4 KB), live on the client's browser, travel with every request to the site, and are visible to the user (and to JavaScript unless HttpOnly is set). Sessions are unlimited in size, live on the server (in files by default, or in a database), are invisible to the user, and are addressed by a single opaque session-ID cookie the browser carries. The division of labour that earns the exam mark: the cookie carries the key; the session holds the kingdom.",
              "Cookies in PHP use the setcookie() function, which must be called before any output (it writes a Set-Cookie response header, and headers must precede the body — the same rule as header() in §4.11). The signature: setcookie(name, value, expiry, path, domain, secure, httponly); — setcookie('theme', 'dark', time() + 86400, '/'); sets a cookie named 'theme' to 'dark' for one day (86400 seconds) across the whole site. Read cookies back on later requests from the $_COOKIE superglobal: $theme = $_COOKIE['theme'] ?? 'light';. Kill a cookie by re-setting it with an expiry in the past: setcookie('theme', '', time() - 3600, '/'); — the browser deletes it. The modern attributes: set the sixth param true (Secure) to restrict to HTTPS, and the seventh true (HttpOnly) to hide from JavaScript (defeating XSS-based cookie theft).",
              "Sessions in PHP are the workhorse for login state. session_start() (called as the first line of every page, before any output) either creates a new session or resumes an existing one based on the PHPSESSID cookie the browser sends. PHP issues the visitor one opaque ID cookie (PHPSESSID, a long random string) and stores all real data server-side in the $_SESSION superglobal — an associative array that persists across requests. The login pattern: on successful authentication, $_SESSION['user_id'] = $row['id']; $_SESSION['user_name'] = $row['name']; — stores the user's identity in the session. On every protected page: session_start(); if (!isset($_SESSION['user_id'])) { header('Location: login.php'); exit; } — redirects unauthenticated visitors to login. On logout: session_destroy(); (deletes the session data) plus unset($_SESSION); (clears the in-memory array) plus setcookie('PHPSESSID', '', time() - 3600, '/'); (deletes the cookie).",
              "Session hardening has three rules worth one exam line each. Rule one: regenerate the session ID after login — session_regenerate_id(true); — to defeat session fixation (an attacker who tricks the user into using a known session ID loses their foothold the moment the ID changes). Rule two: set the session cookie to HttpOnly and Secure — ini_set('session.cookie_httponly', 1); ini_set('session.cookie_secure', 1); — so the cookie cannot be read by JavaScript or sent over HTTP. Rule three: store sensitive data on the server only, never in the cookie itself — the cookie carries only the opaque ID, not the user's name or role. Anyone who reads the cookie gets only an ID they cannot forge; the real data lives on the server keyed by that ID.",
              "For a 7-mark answer on cookies and sessions: contrast the two (cookies: small, client-side, visible; sessions: unlimited, server-side, opaque-ID cookie), demonstrate setcookie(name, value, expiry, path, secure, httponly) and $_COOKIE, demonstrate session_start() + $_SESSION['user_id'] + session_destroy(), state the division of labour ('the cookie carries the key; the session holds the kingdom'), and close with the three session-hardening rules (regenerate_id after login, HttpOnly+Secure cookie flags, never store sensitive data in the cookie). The diagram below contrasts the cookie and session architectures.",
            ],
            diagram: {
              kind: "compare",
              title: "Cookies vs sessions",
              caption: "Cookies live on the client and carry data; sessions live on the server and carry only an ID cookie.",
              left: {
                heading: "Cookies — client-side",
                items: ["≈ 4 KB each, ~50 per domain", "live on the browser", "travel with every request", "visible to user and JS (unless HttpOnly)", "right for: theme, preferences"],
              },
              right: {
                heading: "Sessions — server-side",
                items: ["unlimited size", "live on the server", "opaque ID cookie (PHPSESSID) carries the key", "invisible to the user", "right for: login state, cart"],
              },
            },
            callout: {
              type: "exam",
              title: "The phrase to write verbatim",
              body: "'The cookie carries the key; the session holds the kingdom.' This one sentence captures the division of labour between the opaque session-ID cookie (sent with every request) and the server-side $_SESSION data (the actual user identity and cart contents).",
            },
            bullets: [
              "Cookies: small (about 4 KB), client-side, visible to user and JS, travel with every request.",
              "setcookie(name, value, expire, path, domain, secure, httponly) must precede any output.",
              "Sessions: server-side, unlimited size, the browser holds only the opaque PHPSESSID cookie.",
              "session_start() as the first line; $_SESSION then persists values across pages.",
              "Hardening: session_regenerate_id(true) after login (fixation), HttpOnly + SameSite cookies (XSS/CSRF).",
              "Destroy cleanly: session_unset() then session_destroy() on logout."
            ],
            codeExample: {
              language: "php",
              caption: "auth.php - a minimal session-guarded page",
              code: "<?php\nsession_start();                    // first line, before output\n\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n  // after verifying the password against the DB:\n  session_regenerate_id(true);      // defeat fixation\n  $_SESSION['user_id'] = 42;\n  header('Location: notes.php');\n  exit;\n}\n\nif (!isset($_SESSION['user_id'])) {\n  echo 'Please log in.';            // or redirect\n  exit;\n}\necho 'Welcome back, user ' . (int) $_SESSION['user_id'];\n?>"
            },
            keyTerms: [
              {
                term: "setcookie()",
                definition: "PHP function sending a Set-Cookie header; must run before any output."
              },
              {
                term: "PHPSESSID",
                definition: "The default name of the session-ID cookie PHP issues."
              },
              {
                term: "session_start()",
                definition: "Creates or resumes the session, filling $_SESSION; first line of every guarded page."
              },
              {
                term: "session_regenerate_id()",
                definition: "Issues a fresh session ID, defeating fixation when called after login."
              },
              {
                term: "session_destroy()",
                definition: "Ends the session server-side; pair with session_unset() on logout."
              }
            ],
            examQuestions: [
              {
                q: "Explain cookies and sessions in PHP with their functions and security hardening rules.",
                marks: 7,
                outline: [
                  "Contrast: client-side cookie vs server-side session",
                  "setcookie signature and the before-output rule",
                  "Reading $_COOKIE with defaults",
                  "session_start, $_SESSION read/write, PHPSESSID",
                  "session_regenerate_id after login (fixation)",
                  "HttpOnly, Secure, SameSite attributes",
                  "Logout: session_unset + session_destroy"
                ]
              },
              {
                q: "Why must session_start() be called before any output?",
                marks: 2
              },
              {
                q: "Why regenerate the session ID immediately after a successful login?",
                marks: 3
              }
            ],
          },
          {
            number: "4.16",
            title: "Object-oriented PHP",
            body: [
              "PHP 5 (2004) brought real object-oriented programming to the language, and PHP 7+ made it fast enough that OOP is now the default style for any serious project. A class bundles data (properties) and behaviour (methods) into one named unit. The syntax: class Note { public function __construct(private string $title) {} public function preview(): string { return substr($this->title, 0, 20); } } — declared with class, initialised in the constructor (the special method called when an object is created), methods defined with visibility keywords. Properties have visibility: private (visible only inside the class), protected (visible inside the class and its subclasses), public (visible everywhere). The constructor in modern PHP uses constructor property promotion (private string $title in the parameter list auto-declares and assigns the property in one line — PHP 8 syntax).",
              "Creating and calling is straightforward. $n = new Note('Unit IV — XML & PHP notes'); creates an instance — the new keyword allocates the object, calls the constructor, and returns the reference. Call methods with the arrow operator: $n->preview() returns 'Unit IV — XML & PHP n…'. Access public properties the same way: $n->title. Inside a method, $this refers to the current instance — $this->title reads the property of the object the method was called on. Static members belong to the class itself, not an instance: static $count = 0; declared inside the class, accessed as Note::$count or self::$count from inside. The double-colon :: is the static-access operator (also called the scope-resolution operator).",
              "Inheritance is the second pillar. class SharedNote extends Note { public function __construct(string $title, private string $share = 'public') { parent::__construct($title); } public function preview(): string { return '[shared] ' . parent::preview(); } } — extends reuses the parent's properties and methods, the child's constructor calls parent::__construct() to do the parent's setup, and overriding preview() redefines it while calling parent::preview() to reuse the parent's logic. The instanceof operator tests inheritance: $n instanceof Note returns true for both Note and SharedNote instances. The final keyword prevents overriding (final public function preview() cannot be redefined in subclasses) or prevents subclassing (final class Note cannot be extended).",
              "Interfaces and abstract classes complete the OOP toolkit. An interface declares a contract without implementation: interface Printable { public function print(): string; } — any class that implements Printable must define the print() method, and the type system treats it as a Printable. An abstract class half-builds a family: abstract class Note { abstract public function preview(): string; public function save() { … } } — subclasses must implement the abstract methods but inherit the concrete ones. Type declarations on parameters and returns (function slugify(string $s): string) let the runtime enforce contracts; union types (string|int|null), nullable types (?string), and mixed are PHP 8 additions. Namespaces (namespace App\\Models;) organise classes into a hierarchy and prevent name collisions in large projects.",
              "Why OOP in a web course? Because Unit V's database layer is exactly this: a Database class whose constructor connects to MySQL, whose methods (query, prepare, fetchAll) wrap the mysqli calls, and whose one instance every page shares. The Note class might hold the row's data and expose methods like preview(), save(), delete(). The User class holds authentication state and methods like login(), logout(), isAuthorisedFor($note). The case study in §5.11 assembles these classes into the notes application. For a 7-mark answer: define a class as data + behaviour with visibility (private/protected/public), demonstrate new + arrow operator + $this, explain inheritance (extends, parent::__construct, override, final), and close with interfaces (contracts), abstract classes (half-built families), type declarations, and namespaces. The code example below shows a Note class with a SharedNote subclass.",
            ],
            codeExample: {
              language: "php",
              caption: "note.php — class, constructor, inheritance",
              code: `class Note {
  public function __construct(private string $title) {}
  public function preview(): string {
    return substr($this->title, 0, 20) . '…';
  }
            }
class SharedNote extends Note {
  public function preview(): string {
    return "[shared] " . parent::preview();   // override + reuse
  }
            }
$n = new SharedNote("Unit IV — XML & PHP notes");
echo $n->preview();   // [shared] Unit IV — XML & PHP n…`,
            },
            keyTerms: [
              { term: "Class", definition: "A PHP unit bundling data (properties) and behaviour (methods) with visibility (private/protected/public)." },
              { term: "Constructor", definition: "The special __construct() method called when an object is created with new — initialises the object's properties." },
              { term: "extends", definition: "PHP keyword for inheritance — class SharedNote extends Note reuses the parent's properties and methods and may specialise them." },
              { term: "Interface", definition: "A contract declaring method signatures without implementation — any class implementing it must define those methods." },
              { term: "$this", definition: "The reference to the current instance inside a method — $this->title reads the property of the object the method was called on." },
            ],
            bullets: [
              "A class bundles properties (data) and methods (behaviour); new creates instances.",
              "The constructor __construct initialises each object; $this refers to the current instance.",
              "Visibility: public (anyone), protected (class family), private (this class only).",
              "extends inherits; parent::__construct() chains constructors; override methods as needed.",
              "Interfaces declare contracts (method names, no bodies); implements forces them.",
              "Web payoff: one Database class wrapping mysqli, shared by every page of the application."
          ],
            diagram: {
              kind: "compare",
              title: "Procedural vs object-oriented PHP",
              caption: "Same work, different organisation.",
              left: {
                heading: "Procedural",
                items: [
                  "functions and variables at file scope",
                  "mysqli_connect(...) calls everywhere",
                  "state passed between functions",
                  "fine for small scripts",
                  "duplicated connection code"
              ]
            },
              right: {
                heading: "Object-oriented",
                items: [
                  "class Database wraps the connection",
                  "one instance shared by all pages",
                  "methods group related behaviour",
                  "extends / interfaces structure growth",
                  "the shape of frameworks"
              ]
            }
          },
            callout: {
              type: "tip",
              title: "OOP pays off in Unit V",
              body: "Justify OOP with the course's own arc: a Database class whose constructor connects once, whose query() and fetchAll() wrap mysqli, and whose single instance every page shares - that is the shape every PHP framework uses."
          },
            examQuestions: [
              {
                q: "Explain object-oriented PHP: classes, constructors, inheritance and interfaces, with an example.",
                marks: 7,
                outline: [
                  "Class = properties + methods; new creates instances",
                  "Constructor __construct and the $this reference",
                  "Visibility: public, protected, private",
                  "extends and parent::__construct chaining",
                  "Method overriding",
                  "Interface declaration and implements",
                  "The Database-class justification for web apps"
              ]
            },
              {
                q: "What does $this refer to inside a PHP class method?",
                marks: 2
            },
              {
                q: "What does implements force a class to do?",
                marks: 3
            }
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
        "Unit V marries PHP to MySQL: connecting, creating and selecting databases and tables, inserting, querying, altering and deleting — with phpMyAdmin and error handling — and closes with a complete case study that assembles the whole book into one working web application.",
      chapter: {
        number: "05",
        title: "Databases Behind the Page",
        intro:
          "Unit V covers PHP meeting MySQL, connecting, creating/selecting databases and tables, inserting, altering, querying, deleting, phpMyAdmin, error handling, and a complete case study: a web-based notes application.",
        inOneBreath:
          "A user in a browser fills a form, PHP validates and persists into MySQL with prepared statements, and every page is the honest answer to one request — three tiers, one loop, the complete anatomy of a web product.",
        sections: [
          {
            number: "5.1",
            title: "PHP meets MySQL",
            body: [
              "MySQL is an open-source relational database management system (RDBMS) — software that stores data in tables (rows of records, columns of typed fields) inside named databases, and speaks SQL (Structured Query Language). The SQL verbs you will use in this unit: CREATE to define tables and databases, INSERT to add rows, SELECT to ask questions, UPDATE to change rows, DELETE to remove rows, plus ALTER for structure changes and DROP for wholesale destruction. MySQL is one of several RDBMS options (PostgreSQL, SQLite, SQL Server, Oracle) but it is the one paired with PHP by two decades of practice — together with Linux, Apache, PHP, and MySQL it forms the LAMP stack that has served the web's applications since the late 1990s. WordPress, Facebook in its early years, Wikipedia — all built on LAMP.",
              "Relational means the data is organised as relations (tables) where each row is one record and each column is one typed field, with relationships between tables expressed via shared key columns. The notes table has columns id (integer primary key), user_id (integer foreign key to users.id), title (varchar), body (text), created_at (datetime). The users table has columns id (integer primary key), email (varchar, unique), password_hash (varchar), name (varchar). A user 'owns' multiple notes because notes.user_id references users.id — the foreign key constraint that makes MySQL enforce the relationship. This is the relational model: data in tables, relationships through keys, queries in SQL.",
              "The division of labour in this unit is the three-tier architecture. The browser asks PHP for a page; PHP builds a SQL query, sends it to MySQL, and owns the session state that says who the user is; MySQL stores the rows, executes the query, and returns matching rows; PHP renders the rows as HTML and ships the page to the browser. This is the round trip the diagram below traces. PHP is the middle tier — it owns application logic, validation, session, and rendering; MySQL is the storage tier — it owns data integrity, queries, and persistence. The browser is the presentation tier — it owns HTML parsing, CSS painting, and JavaScript behaviour.",
              "PHP reaches MySQL through the mysqli extension (MySQL Improved), used in either procedural style (mysqli_query($db, $sql)) or object style ($db->query($sql)). Object style is the modern default — it reads cleanly and chains naturally. The newer PDO (PHP Data Objects) API is the same idea generalised to many databases (MySQL, PostgreSQL, SQLite, SQL Server) behind one interface, so your code can switch databases without rewriting queries — useful for libraries and frameworks, less so for a focused LAMP project. The mysql_* functions of PHP 4 are removed in PHP 7+ — never use them; they lack prepared statements and are the SQL-injection vector of legacy tutorials.",
              "For a 7-mark answer on PHP meets MySQL: define MySQL as an open-source relational database server speaking SQL (CREATE, INSERT, SELECT, UPDATE, DELETE, ALTER, DROP), name the LAMP stack (Linux + Apache + MySQL + PHP), describe the three-tier division of labour (browser → PHP → MySQL → rows back → HTML back), and contrast the mysqli extension (procedural or object style) with PDO (database-agnostic). Close with the legacy warning — mysql_* functions are removed; always use mysqli or PDO with prepared statements.",
            ],
            diagram: {
              kind: "pipeline",
              title: "The three-tier round trip",
              caption: "Browser, PHP, MySQL — the loop every dynamic page in this course runs.",
              stages: [
                { label: "Browser", note: "requests notes.php" },
                { label: "PHP", note: "builds the SQL, owns the session" },
                { label: "MySQL", note: "stores and queries the rows" },
                { label: "Rows back", note: "arrays of results" },
                { label: "HTML back", note: "PHP renders · browser paints" },
              ],
            },
            keyTerms: [
              { term: "MySQL", definition: "An open-source relational database management system speaking SQL, the storage tier of the LAMP stack." },
              { term: "LAMP", definition: "Linux + Apache + MySQL + PHP — the classic open-source web application stack serving the web for two decades." },
              { term: "mysqli", definition: "The MySQL Improved PHP extension — procedural or object style; the modern way to connect PHP to MySQL." },
              { term: "PDO", definition: "PHP Data Objects — a database-agnostic API letting one codebase talk to MySQL, PostgreSQL, SQLite, etc." },
              { term: "Three-tier architecture", definition: "Browser (presentation) → PHP (application) → MySQL (storage) — the round trip every dynamic page runs." },
            ],
            bullets: [
              "MySQL is an open-source RDBMS: named databases hold tables of typed rows, queried in SQL.",
              "The verb set: CREATE, INSERT, SELECT, UPDATE, DELETE, ALTER, DROP.",
              "Relationships are expressed with shared key columns (notes.user_id -> users.id).",
              "Three-tier division: browser renders, PHP computes and owns the session, MySQL stores rows.",
              "mysqli comes in procedural and object styles; object style ($db->query) is the modern default.",
              "PDO adds database independence with named placeholders; mysqli is the course's workhorse."
          ],
            codeExample: {
              language: "php",
              caption: "round-trip.php - one complete browser-to-MySQL loop",
              code: "<?php\nsession_start();\n$db = new mysqli('localhost', 'amara', 'secret', 'scribbly');\nif ($db->connect_errno) die('Connection failed');\n\n$user = (int) ($_SESSION['user_id'] ?? 0);\n$res  = $db->query(\"SELECT title FROM notes WHERE user_id = $user\");\n\necho '<ul>';\nwhile ($row = $res->fetch_assoc()) {\n  echo '<li>' . htmlspecialchars($row['title']) . '</li>';\n}\necho '</ul>';\n$db->close();\n?>"
          },
            callout: {
              type: "tip",
              title: "LAMP in one sentence",
              body: "Linux + Apache + MySQL + PHP is the classic open-source hosting stack, and it is exactly the stack this unit assembles. Name it early in any PHP-MySQL answer - it frames the three tiers."
          },
            examQuestions: [
              {
                q: "Explain PHP-MySQL connectivity and the three-tier architecture with an example.",
                marks: 7,
                outline: [
                  "Define MySQL as an RDBMS speaking SQL",
                  "Tables, rows, typed columns, keys linking tables",
                  "The seven SQL verbs",
                  "Three tiers: browser, PHP, MySQL and who does what",
                  "LAMP stack naming",
                  "mysqli object vs procedural style; PDO mention",
                  "Worked query-and-render round trip"
              ]
            },
              {
                q: "What does the acronym LAMP stand for?",
                marks: 2
            },
              {
                q: "Differentiate mysqli and PDO with two points.",
                marks: 3
            }
          ],
          },
          {
            number: "5.2",
            title: "Connecting to the server",
            body: [
              "Everything begins with a connection, and mysqli offers two ways to open one. In object style: $db = new mysqli('localhost', 'amara', 'secret', 'scribbly'); — host, username, password, and (optionally) the database name in one constructor call. In procedural style: $db = mysqli_connect('localhost', 'amara', 'secret', 'scribbly'); — same four arguments. The host is 'localhost' when PHP and MySQL share the same machine (the common XAMPP/WAMP case), or an IP address or domain name when MySQL is on a separate server. The fourth argument (the database name) is optional — omit it and you call $db->select_db('scribbly') later; include it and every subsequent query targets that database by default.",
              "Always check what came back — a failed connection returns an error, and page one of database discipline is to fail loudly and early. In object style: if ($db->connect_errno) { die('Connection failed: ' . $db->connect_error); } — the connect_errno property is non-zero on failure, connect_error holds the human-readable message. In procedural style: if (!$db) { die(mysqli_connect_error()); }. The die() function prints the message and stops the script — appropriate for a lab exercise; production code logs the error and shows the visitor a friendly page instead. Failing early matters because the rest of the script assumes a working $db and would produce confusing errors if the connection silently failed.",
              "A worked connection script ties the pieces together. The config.php file (kept outside the web root if possible) contains exactly: <?php $db = new mysqli('localhost', 'amara', 'secret', 'scribbly'); if ($db->connect_errno) { die('Connection failed: ' . $db->connect_error); } $db->set_charset('utf8mb4'); ?> — the set_charset call is non-negotiable for modern apps: it tells MySQL that PHP sends and expects UTF-8 (specifically utf8mb4, which supports 4-byte characters like ₹ and emoji). Without it, MySQL may default to latin1 and ₹ renders as ?? in the database. Every page starts with require 'config.php'; — one home for credentials, one connection per request. The credentials never appear in the page scripts, so a backup or source leak of notes.php does not leak the database password.",
              "For exam and lab hygiene, four rules complete the connection discipline. Rule one: keep credentials in one included config.php rather than pasted into every page — single source of truth, easier to change. Rule two: store config.php outside the web root if your hosting allows it (require '../config.php'; from htdocs) — a visitor who guesses the URL cannot download your credentials. Rule three: call $db->set_charset('utf8mb4') right after connecting — correct ₹, é, and emoji storage. Rule four: close with $db->close() when finished — although PHP closes connections automatically at script end, explicit close is good style and frees resources immediately in long-running scripts.",
              "For a 7-mark answer on connecting: state the mysqli constructor (host, user, password, database) in object style and the mysqli_connect() procedural equivalent, demonstrate the connect_errno / connect_error check with die(), show the worked config.php file (one home for credentials, set_charset utf8mb4), and close with the four hygiene rules (config.php outside web root, single source of truth, utf8mb4 charset, $db->close()). The code block below shows the canonical config.php.",
            ],
            codeExample: {
              language: "php",
              caption: "config.php + connect — mysqli, object style",
              code: `<?php // config.php — one home for secrets
// keep this file outside the web root; include it from every page
$db = new mysqli("localhost", "amara", "secret", "scribbly");
if ($db->connect_errno)
  die("Connection failed: " . $db->connect_error);
$db->set_charset("utf8mb4");   // correct ₹, é, emoji storage
// every page includes this file; close with $db->close() when done
// procedural twin: mysqli_connect(host, user, pass, db)`,
            },
            callout: {
              type: "warning",
              title: "utf8mb4 — not utf8",
              body: "MySQL's 'utf8' charset is a legacy 3-byte implementation that cannot store 4-byte characters like ₹ or emoji. Always use 'utf8mb4' (the full 4-byte UTF-8) — set it after connecting with $db->set_charset('utf8mb4') so PHP and MySQL agree.",
            },
            bullets: [
              "Object style: new mysqli('localhost', 'user', 'pass', 'db').",
              "Procedural: mysqli_connect(host, user, pass, db) - same four arguments.",
              "Always check connect_errno immediately and die() loudly on failure.",
              "Keep credentials in one config.php, included by every page.",
              "Store config.php outside the web root, or block direct access to it.",
              "Use utf8mb4 as the connection charset so Hindi text and emoji survive."
          ],
            diagram: {
              kind: "pipeline",
              title: "Opening a MySQL connection",
              caption: "Four steps every page of Unit V begins with.",
              stages: [
                {
                  label: "include config.php",
                  note: "credentials in one place"
              },
                {
                  label: "new mysqli(...)",
                  note: "host, user, password, database"
              },
                {
                  label: "Check connect_errno",
                  note: "die() with connect_error if non-zero"
              },
                {
                  label: "Set charset",
                  note: "$db->set_charset('utf8mb4')"
              },
                {
                  label: "Queries run",
                  note: "the connection stays open for the page"
              }
            ]
          },
            keyTerms: [
              {
                term: "mysqli constructor",
                definition: "new mysqli(host, username, password, database) opens the connection in object style."
            },
              {
                term: "connect_errno",
                definition: "Non-zero error code when the connection failed; zero means success."
            },
              {
                term: "connect_error",
                definition: "The human-readable message accompanying a failed connection."
            },
              {
                term: "die()",
                definition: "Prints a message and terminates the script - the loud-failure idiom."
            },
              {
                term: "utf8mb4",
                definition: "Full 4-byte UTF-8 charset; the one that stores emoji and all Indic scripts."
            }
          ],
            examQuestions: [
              {
                q: "Explain how to connect PHP to MySQL in object and procedural style, with proper error checking.",
                marks: 7,
                outline: [
                  "new mysqli(host, user, pass, db) object style",
                  "mysqli_connect() procedural equivalent",
                  "connect_errno / connect_error check with die()",
                  "Worked config.php included by every page",
                  "Credential hygiene: outside web root, least-privileged user",
                  "set_charset('utf8mb4') and why not utf8",
                  "$db->close() at the end"
              ]
            },
              {
                q: "What does a non-zero $db->connect_errno indicate?",
                marks: 2
            },
              {
                q: "Why should database credentials live in a single config.php outside the web root?",
                marks: 3
            }
          ],
          },
          {
            number: "5.3",
            title: "Creating, selecting and listing databases",
            body: [
              "Create: CREATE DATABASE scribbly; — sent through $db->query('CREATE DATABASE scribbly');. The query returns true on success or false on failure. By default, the statement fails if the database already exists — the friendly variant CREATE DATABASE IF NOT EXISTS scribbly; turns that failure into a no-op, which is what every migration script uses. Character set and collation can be specified: CREATE DATABASE scribbly CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; — the collation decides how strings are compared (case-insensitive for unicode_ci, which is the default for international text).",
              "Select (use): choose the working database with $db->select_db('scribbly') — or pass it as the fourth constructor argument as we did in §5.2. Every subsequent query then targets the selected database. The procedural equivalent is mysqli_select_db($db, 'scribbly'). If you connect without specifying a database and forget to select_db, every query fails with 'No database selected' — a common student error. In practice, passing the database name as the fourth constructor argument is the cleanest pattern: one line, no separate select call.",
              "List: SHOW DATABASES; returns a result set whose rows you loop and print. The PHP loop is $res = $db->query('SHOW DATABASES'); while ($row = $res->fetch_assoc()) { echo $row['Database'] . '<br>'; } — one query call, one result object, one row-iteration loop. The column key in $row is 'Database' (capitalised) because that is how MySQL labels the output. This same fetch loop — query → result → while fetch_assoc → do something with $row — is the shape of every answer MySQL ever gives PHP. SELECT queries, SHOW queries, DESCRIBE queries — they all return a result set you iterate the same way. Master this loop and you have mastered 80% of database PHP.",
              "A worked schema-setup script ties it together. The init.php script (run once when deploying the application) does: $db->query('CREATE DATABASE IF NOT EXISTS scribbly CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci'); $db->select_db('scribbly'); — create the database if missing, then select it for the subsequent CREATE TABLE statements of §5.4. The script is run once by hand (or by phpMyAdmin's import), not on every page request. Once the database and tables exist, the application's regular config.php just connects with the database name as the fourth argument and every query targets it.",
              "For a 7-mark answer: state the three SQL verbs (CREATE DATABASE, the select_db method or constructor arg, SHOW DATABASES), write the worked listing loop ($res = $db->query('SHOW DATABASES'); while ($row = $res->fetch_assoc()) echo $row['Database'];), and emphasise the universal fetch loop pattern (query → result → while fetch_assoc → process $row) that powers every SELECT and SHOW in this unit. Mention the IF NOT EXISTS and CHARACTER SET utf8mb4 polish for the create statement.",
            ],
            callout: {
              type: "exam",
              title: "The universal MySQL-PHP fetch loop",
              body: "$res = $db->query($sql); while ($row = $res->fetch_assoc()) { … } — one query call, one result object, one row-iteration loop. Each $row is an associative array keyed by column name. This pattern answers every SELECT, SHOW and DESCRIBE; master it and you have mastered 80% of database PHP.",
            },
            bullets: [
              "CREATE DATABASE scribbly; fails if it exists - CREATE DATABASE IF NOT EXISTS is the friendly variant.",
              "Add CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci at creation time.",
              "Select with $db->select_db('scribbly') or the fourth constructor argument.",
              "SHOW DATABASES lists every database; loop the result with fetch_assoc().",
              "$db->query() returns true/false for statements, a result object for queries.",
              "An init.php script (create + select + create tables) runs once at deployment."
          ],
            diagram: {
              kind: "flow",
              title: "Database setup in three statements",
              caption: "The init.php sequence, executed once when the app ships.",
              steps: [
                {
                  label: "CREATE DATABASE IF NOT EXISTS",
                  note: "with utf8mb4 charset"
              },
                {
                  label: "select_db",
                  note: "aim every later query at it"
              },
                {
                  label: "SHOW DATABASES",
                  note: "verify it exists"
              },
                {
                  label: "Create tables",
                  note: "the schema statements follow"
              },
                {
                  label: "Run app pages",
                  note: "normal queries against the selected DB"
              }
            ]
          },
            codeExample: {
              language: "php",
              caption: "init.php - create, select and verify",
              code: "<?php\n$db = new mysqli('localhost', 'amara', 'secret');\nif ($db->connect_errno) die('Connection failed');\n\n$db->query('CREATE DATABASE IF NOT EXISTS scribbly\n  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci');\n$db->select_db('scribbly');\n\n$res = $db->query('SHOW DATABASES');\nwhile ($row = $res->fetch_assoc()) {\n  echo $row['Database'] . '<br>';\n}\n?>"
          },
            keyTerms: [
              {
                term: "CREATE DATABASE",
                definition: "SQL statement creating a named database; IF NOT EXISTS makes it idempotent."
            },
              {
                term: "select_db()",
                definition: "Chooses the working database for subsequent queries on the connection."
            },
              {
                term: "SHOW DATABASES",
                definition: "Lists every database the connected user can see."
            },
              {
                term: "fetch_assoc()",
                definition: "Returns the next result row as an associative array, or null at the end."
            },
              {
                term: "utf8mb4_unicode_ci",
                definition: "Case-insensitive collation pairing with the full utf8mb4 charset."
            }
          ],
            examQuestions: [
              {
                q: "Explain creating, selecting and listing databases using PHP and MySQL with examples.",
                marks: 7,
                outline: [
                  "CREATE DATABASE with IF NOT EXISTS",
                  "Charset and collation at creation (utf8mb4)",
                  "select_db() vs the constructor's fourth argument",
                  "SHOW DATABASES with the while/fetch_assoc loop",
                  "query() return values: bool vs result object",
                  "The universal fetch loop pattern",
                  "init.php deployment script"
              ]
            },
              {
                q: "Which statement makes an existing database the target of subsequent queries?",
                marks: 2
            },
              {
                q: "Write the PHP loop that prints the name of every database on the server.",
                marks: 3
            }
          ],
          },
          {
            number: "5.4",
            title: "Creating tables and listing table names",
            body: [
              "Creating a table names the columns, their types, and their rules in one CREATE TABLE statement. The worked notes table: CREATE TABLE notes ( id INT AUTO_INCREMENT PRIMARY KEY, user_id INT NOT NULL, title VARCHAR(120) NOT NULL, body TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY (user_id) REFERENCES users(id) ); — each column declaration is name TYPE [constraints], comma-separated. The commonest types: INT (4-byte integer), BIGINT (8-byte), VARCHAR(n) (bounded text up to n characters), TEXT (long text up to 64 KB), LONGTEXT (up to 4 GB), DATE (YYYY-MM-DD), DATETIME (YYYY-MM-DD HH:MM:SS), TIMESTAMP (auto-updated), DECIMAL(10,2) (fixed-point money), BOOLEAN (alias for TINYINT(1)), ENUM('a','b','c') (one of a fixed set).",
              "Constraints make the database enforce what code might forget. PRIMARY KEY declares the unique row identifier — usually an AUTO_INCREMENT integer. NOT NULL forbids empty values. UNIQUE forbids duplicates across rows (a users.email column is UNIQUE). DEFAULT sets a value when the INSERT omits the column (DEFAULT CURRENT_TIMESTAMP fills created_at automatically). FOREIGN KEY (user_id) REFERENCES users(id) enforces referential integrity — you cannot insert a note whose user_id does not exist in users, and you cannot delete a user who still owns notes (unless you set ON DELETE CASCADE). INDEX creates a lookup index on a column for faster WHERE queries. The constraints live in the database, so every application that touches the table inherits them — the database is the last line of defence.",
              "Listing tables uses SHOW TABLES, fetched with the same while-loop as §5.3. SHOW TABLES; lists every table in the current database; SHOW TABLES FROM scribbly; lists tables in a specific database. The PHP loop: $res = $db->query('SHOW TABLES'); while ($row = $res->fetch_assoc()) { echo $row['Tables_in_scribbly'] . '<br>'; } — the column key is 'Tables_in_<dbname>' (capitalised). The same fetch loop, the same pattern, just a different query — the universal MySQL-PHP loop holds.",
              "Two inspection companions round out the table-management toolkit. DESCRIBE notes; (or its twin SHOW COLUMNS FROM notes) prints a table's column structure — the column names, types, NULL-ability, key, default, and extra. It is the fastest sanity check that a CREATE did what you meant: run it after every CREATE TABLE and compare the output to your intent. The procedural equivalent in PHP is the same query through $db->query() with the result fetched as rows. The SHOW CREATE TABLE notes; statement returns the original CREATE TABLE statement MySQL would use to recreate the table — useful for exporting schemas and for diffing two databases.",
              "For a 7-mark answer on tables: write the CREATE TABLE notes statement with INT AUTO_INCREMENT PRIMARY KEY, VARCHAR NOT NULL, TEXT, DATETIME DEFAULT CURRENT_TIMESTAMP, FOREIGN KEY, name five column types (INT, VARCHAR, TEXT, DATETIME, DECIMAL), list four constraints (PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY) with one role each, and demonstrate SHOW TABLES and DESCRIBE notes for listing and inspecting. Close with the professional habit of scripting schema changes (a numbered migrate_001.sql file per change) so a teammate's database can be rebuilt into the same shape as yours.",
            ],
            codeExample: {
              language: "php",
              caption: "schema.php — create + list + describe",
              code: `<?php
$db->query("CREATE TABLE IF NOT EXISTS notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(120) NOT NULL,
  body TEXT)");
$res = $db->query("SHOW TABLES");
while ($row = $res->fetch_assoc())
  echo $row["Tables_in_scribbly"] . "<br>";   // the listing loop
$db->query("DESCRIBE notes");                // column structure check`,
            },
            keyTerms: [
              { term: "CREATE TABLE", definition: "SQL statement that defines a table's columns, types and constraints in one declaration." },
              { term: "PRIMARY KEY", definition: "A column (or columns) whose value uniquely identifies each row — usually an AUTO_INCREMENT integer." },
              { term: "FOREIGN KEY", definition: "A column referencing another table's primary key, enforcing referential integrity — notes.user_id references users.id." },
              { term: "VARCHAR(n)", definition: "MySQL type for bounded text up to n characters — use for titles, names, emails; pair with NOT NULL or UNIQUE." },
              { term: "DESCRIBE", definition: "SQL statement (or SHOW COLUMNS FROM) that prints a table's column structure — the fastest sanity check after a CREATE." },
            ],
            bullets: [
              "CREATE TABLE names columns, types and rules in one statement.",
              "Types: INT, VARCHAR(n) for bounded strings, TEXT for long text, DATETIME, DECIMAL(8,2).",
              "Constraints: PRIMARY KEY, AUTO_INCREMENT, NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY ... REFERENCES.",
              "created_at DATETIME DEFAULT CURRENT_TIMESTAMP timestamps rows automatically.",
              "SHOW TABLES lists tables; DESCRIBE notes (or SHOW COLUMNS) prints the structure.",
              "A FOREIGN KEY enforces that notes.user_id points at a real users.id."
          ],
            diagram: {
              kind: "flow",
              title: "Anatomy of CREATE TABLE",
              caption: "Read the statement clause by clause.",
              steps: [
                {
                  label: "Name the table",
                  note: "CREATE TABLE notes ("
              },
                {
                  label: "Columns with types",
                  note: "id INT, title VARCHAR(120)..."
              },
                {
                  label: "Constraints per column",
                  note: "NOT NULL, UNIQUE, DEFAULT"
              },
                {
                  label: "Keys",
                  note: "PRIMARY KEY AUTO_INCREMENT; FOREIGN KEY"
              },
                {
                  label: "Verify",
                  note: "SHOW TABLES; DESCRIBE notes;"
              }
            ]
          },
            callout: {
              type: "tip",
              title: "VARCHAR needs its length",
              body: "VARCHAR(120) means 'up to 120 characters' - the length is compulsory and should be the field's real maximum (a title, an email). TEXT, by contrast, takes no length and swallows essays. Mixing these up is a classic 1-mark slip."
          },
            examQuestions: [
              {
                q: "Explain CREATE TABLE with column types and constraints. How do you list and describe tables?",
                marks: 7,
                outline: [
                  "Worked CREATE TABLE notes statement",
                  "Five column types with one use each (INT, VARCHAR, TEXT, DATETIME, DECIMAL)",
                  "PRIMARY KEY with AUTO_INCREMENT",
                  "NOT NULL, UNIQUE, DEFAULT constraints",
                  "FOREIGN KEY ... REFERENCES and referential integrity",
                  "SHOW TABLES and the fetch loop",
                  "DESCRIBE / SHOW COLUMNS for verification"
              ]
            },
              {
                q: "Difference between VARCHAR(120) and TEXT in MySQL.",
                marks: 2
            },
              {
                q: "What does AUTO_INCREMENT do and on which kind of column is it used?",
                marks: 3
            }
          ],
          },
          {
            number: "5.5",
            title: "Inserting data",
            body: [
              "Adding rows is INSERT INTO notes (title, body) VALUES (?, ?) — the question marks are the heart of modern practice: prepared statements. The four-step pattern: prepare the template ($st = $db->prepare('INSERT INTO notes (title, body) VALUES (?, ?)');), bind the values ($st->bind_param('ss', $title, $body);), execute ($st->execute();), and read the new id ($id = $st->insert_id;). The 'ss' type string declares both parameters as strings — i for integers, d for doubles, b for blobs, s for strings; the letters appear in the same order as the question marks and the bound variables. MySQL receives the values as pure data, never as SQL text, which makes SQL injection structurally impossible.",
              "Why this matters: SQL injection is the attack where a visitor's input rewrites your query. The classic example: a form field value of 'Amara\'; DROP TABLE notes; --' inserted into $sql = \"INSERT INTO notes (title) VALUES ('$title')\"; produces INSERT INTO notes (title) VALUES ('Amara'; DROP TABLE notes; --') — MySQL sees two statements, an INSERT and a DROP, and your table vanishes. Prepared statements prevent this entirely because the values are sent separately from the SQL text — MySQL cannot confuse them with SQL syntax. The 'Amara'; DROP TABLE notes; --' value arrives at MySQL as a literal string and is stored as the title, not interpreted as SQL.",
              "The contrast with the old habit is stark and exam-critical. The legacy anti-pattern — interpolating variables straight into the SQL string ($sql = \"INSERT INTO notes (title) VALUES ('$title')\";) — is the vulnerability this course must unteach. Even with addslashes() or mysqli_real_escape_string(), interpolation is fragile (miss a column, miss a charset, miss a context) and is the bug class behind every SQL injection vulnerability ever discovered. Concatenation is a bug class, not a style. The modern and only correct pattern is prepared statements with placeholders and bind_param — every time, no exceptions, even for queries that look safe today.",
              "A worked insert script ties it together. The save-note handler: $st = $db->prepare('INSERT INTO notes (user_id, title, body) VALUES (?, ?, ?)'); $st->bind_param('iss', $_SESSION['user_id'], $_POST['title'], $_POST['body']); $st->execute(); $note_id = $st->insert_id; — three placeholders, three bound variables, type string 'iss' (integer, string, string). After execute, $st->insert_id holds the new row's AUTO_INCREMENT id (the value MySQL assigned to the id column) — useful for redirecting to /notes.php?id=$note_id or for follow-up inserts into a related table (inserting the note's tags into a tags table). The $st->affected_rows property holds the number of rows inserted (1 for a single INSERT, more for multi-row inserts).",
              "For a 7-mark answer on inserting: write the prepared-statement pattern (prepare → bind_param → execute → insert_id), explain why placeholders defeat SQL injection (values sent as data, not SQL text; 'Amara\'; DROP TABLE notes; --' stored as a literal string), contrast with the legacy interpolation pattern (concatenation is a bug class, not a style), state the bind_param type letters (i, d, s, b), and close with the worked insert script and $st->insert_id for the new AUTO_INCREMENT id. Name SQL injection explicitly to earn the security mark.",
            ],
            callout: {
              type: "exam",
              title: "SQL injection — the security mark to earn",
              body: "Always use prepared statements with bind_param. Never interpolate variables into SQL. The attack vector: 'Amara'; DROP TABLE notes; --' in a title field, sent to $sql = \"INSERT … VALUES ('$title')\", drops the table. With placeholders, MySQL receives the value as data, not SQL — the attack is structurally impossible.",
            },
            keyTerms: [
              { term: "Prepared statement", definition: "A SQL template with ? placeholders, prepared once and executed with bound values — the SQL-injection defence every INSERT, UPDATE, DELETE must use." },
              { term: "bind_param", definition: "mysqli method that binds PHP variables to the ? placeholders by type — 'iss' = integer, string, string — sent to MySQL as data, not SQL text." },
              { term: "SQL injection", definition: "The attack where a visitor's input rewrites your SQL — 'Amara\'; DROP TABLE notes; --'. Prepared statements make it structurally impossible." },
              { term: "insert_id", definition: "The $st->insert_id property after an INSERT — holds the new row's AUTO_INCREMENT id, useful for redirects or follow-up inserts." },
            ],
            bullets: [
              "INSERT INTO notes (user_id, title, body) VALUES (?, ?, ?) - placeholders keep data out of the SQL text.",
              "Four steps: prepare the template, bind_param with a type string, execute, read insert_id.",
              "Type string: i integer, d double, s string, b blob - 'iss' binds int, string, string.",
              "SQL injection: interpolated input like 'x'; DROP TABLE notes; -- rewrites the query.",
              "Placeholders defeat injection because values travel as data, never as SQL code.",
              "affected_rows reports how many rows the insert (or update/delete) touched."
          ],
            diagram: {
              kind: "pipeline",
              title: "The prepared-statement insert",
              caption: "Four steps between the form field and a new row.",
              stages: [
                {
                  label: "prepare()",
                  note: "template with ? placeholders sent to MySQL"
              },
                {
                  label: "bind_param('iss', ...)",
                  note: "values attached as typed data"
              },
                {
                  label: "execute()",
                  note: "MySQL combines plan + data safely"
              },
                {
                  label: "insert_id",
                  note: "the new row's AUTO_INCREMENT id"
              },
                {
                  label: "affected_rows",
                  note: "1 row inserted (0 on failure)"
              }
            ]
          },
            codeExample: {
              language: "php",
              caption: "save-note.php - the safe insert pattern",
              code: "<?php\nsession_start();\n$st = $db->prepare(\n  'INSERT INTO notes (user_id, title, body) VALUES (?, ?, ?)');\n$st->bind_param('iss',\n  $_SESSION['user_id'], $_POST['title'], $_POST['body']);\n$st->execute();\n\nif ($db->affected_rows === 1) {\n  $note_id = $st->insert_id;\n  header('Location: note.php?id=' . $note_id);  // PRG\n  exit;\n}\necho 'Save failed: ' . htmlspecialchars($db->error);\n?>"
          },
            examQuestions: [
              {
                q: "Explain inserting data with prepared statements. How do they prevent SQL injection?",
                marks: 7,
                outline: [
                  "INSERT syntax with column list and VALUES",
                  "The ? placeholders and why data must not join the SQL text",
                  "prepare / bind_param / execute / insert_id sequence",
                  "The type string i, d, s, b",
                  "SQL injection attack sketch with a malicious input",
                  "Why placeholders make the payload inert",
                  "affected_rows and redirect-after-success"
              ]
            },
              {
                q: "What does bind_param('iss', $a, $b, $c) tell MySQL about each variable?",
                marks: 2
            },
              {
                q: "Which property returns the AUTO_INCREMENT id of the row just inserted?",
                marks: 3
            }
          ],
          },
          {
            number: "5.6",
            title: "Altering tables",
            body: [
              "Schemas evolve, and ALTER TABLE is the migration verb. Five variants cover every change you will make. Add a column — ALTER TABLE notes ADD COLUMN tags VARCHAR(60) DEFAULT 'none'; inserts a new tags column into every existing row, defaulting each to 'none'. Modify a column — ALTER TABLE notes MODIFY title VARCHAR(200); changes the type or size of an existing column (here widening title from 120 to 200 characters, no data loss). Rename a column — ALTER TABLE notes CHANGE body content TEXT; renames body to content and re-declares its type (the CHANGE form takes old name, new name, definition). Drop a column — ALTER TABLE notes DROP COLUMN tags; removes the column and all its data (irreversible). Rename the table — ALTER TABLE notes RENAME TO jottings; renames the whole table.",
              "Each ALTER statement is a one-line SQL command run through $db->query() — they do not return a result set, just true on success or false on failure. Each takes effect immediately on live data: ADD COLUMN defaults every existing row, MODIFY COLUMN converts or truncates existing values, CHANGE COLUMN renames, DROP COLUMN destroys the data, RENAME TO updates the schema. There is no transactional rollback for DDL (data definition language) in MySQL — once an ALTER has run, the change is permanent. This is why every ALTER is scripted and tested on a backup before being run on production data.",
              "The professional habit built on this verb is database migrations. Each schema change is a numbered SQL file (migrate_001_create_notes.sql, migrate_002_add_tags_column.sql, migrate_003_rename_body_to_content.sql) checked into version control alongside the application code. A teammate setting up the database from scratch runs every migration in order; a production database runs only the new migrations since the last deploy. Laravel's migrations, Django's migrations, Rails' migrations — all formalise this pattern with PHP/Python/Ruby wrappers around ALTER TABLE. The benefit: the schema is reproducible, changes are auditable, and rolling back a deploy means running the down migration (DROP COLUMN tags if the up migration added it).",
              "The contrast with phpMyAdmin is worth noting. phpMyAdmin's table designer generates the exact ALTER statement for whatever change you made with the mouse — and shows it to you in the SQL tab. This is phpMyAdmin as a free SQL tutor: make a change with the form, study the SQL it generated, and learn the ALTER syntax by example. Once you understand the syntax, you write the migrations as SQL files and run them via phpMyAdmin's import or the mysql command line. The mouse-driven designer is fine for exploration; the scripted migration is the production pattern.",
              "For a 7-mark answer on altering tables: name the five ALTER variants (ADD COLUMN, MODIFY, CHANGE, DROP COLUMN, RENAME TO) with one example each, state that each runs through $db->query() and takes effect immediately with no DDL rollback, and close with the migrations pattern (numbered SQL files in version control, run in order, with down migrations for rollback). Mention phpMyAdmin's table designer as a free ALTER-syntax tutor.",
            ],
            callout: {
              type: "tip",
              title: "Always back up before ALTER",
              body: "ALTER TABLE takes effect immediately and there is no DDL rollback in MySQL. Before any destructive ALTER (DROP COLUMN, CHANGE that truncates), export the database with phpMyAdmin's Export or mysqldump. A .sql file is a time machine.",
            },
            bullets: [
              "ADD COLUMN appends a column; existing rows take the DEFAULT value.",
              "MODIFY changes a column's type or options in place.",
              "CHANGE renames and redefines in one statement (CHANGE old new type).",
              "DROP COLUMN removes the column and its data forever.",
              "RENAME TO renames the whole table; nothing else changes.",
              "Migrations turn each ALTER into a numbered SQL file under version control."
          ],
            diagram: {
              kind: "fork",
              title: "Five ALTER TABLE moves",
              caption: "One statement per schema change - and one of them is irreversible.",
              start: "ALTER TABLE notes ...",
              branches: [
                {
                  label: "ADD COLUMN tags VARCHAR(60)",
                  outcome: "new column, existing rows get the default",
                  good: true
              },
                {
                  label: "MODIFY title VARCHAR(200)",
                  outcome: "type/limits changed, data preserved",
                  good: true
              },
                {
                  label: "RENAME TO memos",
                  outcome: "table name changes, structure and data stay",
                  good: true
              },
                {
                  label: "DROP COLUMN tags",
                  outcome: "column and all its data deleted - no undo",
                  good: false
              }
            ]
          },
            codeExample: {
              language: "sql",
              caption: "migrate_002.sql - the ALTER variants in one file",
              code: "-- add a column with a default\nALTER TABLE notes\n  ADD COLUMN tags VARCHAR(60) DEFAULT 'none';\n\n-- widen an existing column\nALTER TABLE notes MODIFY title VARCHAR(200) NOT NULL;\n\n-- rename a column\nALTER TABLE notes CHANGE body content TEXT;\n\n-- rename the table\nALTER TABLE notes RENAME TO memos;"
          },
            keyTerms: [
              {
                term: "ADD COLUMN",
                definition: "ALTER variant appending a new column, filled with its DEFAULT for existing rows."
            },
              {
                term: "MODIFY",
                definition: "ALTER variant changing a column's type or constraints in place."
            },
              {
                term: "CHANGE",
                definition: "ALTER variant that renames a column and redefines it in one statement."
            },
              {
                term: "DROP COLUMN",
                definition: "ALTER variant deleting a column and all its stored data permanently."
            },
              {
                term: "Migration",
                definition: "A numbered SQL file recording one schema change, kept in version control."
            }
          ],
            examQuestions: [
              {
                q: "Explain the ALTER TABLE variants with examples and describe the idea of database migrations.",
                marks: 7,
                outline: [
                  "ADD COLUMN with DEFAULT behaviour",
                  "MODIFY vs CHANGE contrast",
                  "DROP COLUMN and its permanence",
                  "RENAME TO",
                  "ALTER runs through $db->query() and acts immediately",
                  "No DDL rollback - back up first",
                  "Numbered migration files under version control"
              ]
            },
              {
                q: "Difference between MODIFY and CHANGE in ALTER TABLE.",
                marks: 2
            },
              {
                q: "Which ALTER variant destroys data permanently, and what should you do first?",
                marks: 3
            }
          ],
          },
          {
            number: "5.7",
            title: "Querying data",
            body: [
              "SELECT is the workhorse SQL verb and the one you will write most often. The full form: SELECT id, title FROM notes WHERE user_id = ? ORDER BY created_at DESC LIMIT 10; — six clauses in order: columns to return, table to read, WHERE filter, GROUP BY for aggregates, ORDER BY for sorting, LIMIT with OFFSET for paging. The WHERE clause supports comparison (=, <, >, <=, >=, <>), pattern matching (LIKE '%php%' for substring, LIKE 'a%' for prefix), range (BETWEEN x AND y), set membership (IN (1, 2, 3)), NULL tests (IS NULL, IS NOT NULL), and boolean combinations (AND, OR, NOT). The ORDER BY clause takes column names and ASC or DESC; multiple columns sort in order. The LIMIT 10 OFFSET 20 pair paginates — page 3 of 10-per-page is LIMIT 10 OFFSET 20.",
              "With placeholders, SELECT follows the same prepare / bind_param / execute pattern as INSERT, with one extra step: fetching the results. $st = $db->prepare('SELECT id, title FROM notes WHERE user_id = ? ORDER BY created_at DESC LIMIT 10'); $st->bind_param('i', $_SESSION['user_id']); $st->execute(); $res = $st->get_result(); while ($row = $res->fetch_assoc()) { echo '<li>' . htmlspecialchars($row['title']) . '</li>'; } — prepare, bind, execute, get_result, fetch loop. Each $row is an associative array keyed by column name ($row['id'], $row['title']), ready for the echo loop with htmlspecialchars on the way out. The get_result() method is mysqli's way of returning a result set from a prepared statement — it gives you the same fetch_assoc loop as a direct query.",
              "Aggregates answer questions rather than list rows. SELECT COUNT(*) FROM notes; returns the total row count as one number. SELECT user_id, COUNT(*) FROM notes GROUP BY user_id; returns the note count per user. AVG(rating), SUM(amount), MAX(created_at), MIN(created_at) are the other common aggregates, all paired with GROUP BY for per-group answers and HAVING for post-group filtering (HAVING COUNT(*) > 5 — like WHERE but applied after grouping). Aggregates collapse rows; regular SELECT expands them. The exam contrast: WHERE filters rows before grouping; HAVING filters groups after grouping.",
              "JOINs combine rows from two tables along a shared key — the relational operation that gives the model its name. The common INNER JOIN: SELECT notes.id, notes.title, users.name FROM notes INNER JOIN users ON notes.user_id = users.id WHERE notes.title LIKE '%php%'; — each note row is paired with its owner's name via the user_id = users.id match, and only rows that match on both sides appear. LEFT JOIN includes notes with no matching user (NULLs in the user columns); RIGHT JOIN is the reverse. JOINs are how normalized data is reassembled for display — separate users and notes tables joined at query time.",
              "UPDATE follows the same grammar as SELECT but changes rows instead of reading them. UPDATE notes SET title = ?, body = ? WHERE id = ?; — prepared with bind_param('ssi', $title, $body, $id). The WHERE clause is not decoration: an UPDATE without WHERE rewrites every row in the table — a single forgotten WHERE has destroyed more data than every hacker in history. The same applies to DELETE (§5.8). For a 7-mark answer: write the SELECT grammar (columns, table, WHERE, ORDER BY, LIMIT), explain the WHERE operators (=, LIKE, BETWEEN, IN, IS NULL, AND/OR/NOT), show the prepared SELECT with bind_param and get_result loop, name the aggregates (COUNT, AVG, SUM, MAX, MIN) with GROUP BY and HAVING, mention JOINs briefly, and close with the UPDATE pattern and the WHERE-is-not-decoration rule.",
            ],
            codeExample: {
              language: "php",
              caption: "list.php — prepared select + render loop",
              code: `<?php
$st = $db->prepare("SELECT id, title FROM notes
  WHERE user_id = ? ORDER BY created_at DESC LIMIT 10");
$st->bind_param("i", $_SESSION['user_id']);
$st->execute();
$res = $st->get_result();
while ($row = $res->fetch_assoc()) {
  echo "<li>" . htmlspecialchars($row['title']) . "</li>";
}   // data escaped on the way out, too`,
            },
            callout: {
              type: "warning",
              title: "WHERE is not decoration",
              body: "An UPDATE or DELETE without a WHERE clause rewrites or removes every row in the table — a single forgotten WHERE has destroyed more data than every hacker in history. Always write the WHERE first, then the SET; always run a SELECT with the same WHERE before running the UPDATE.",
            },
            bullets: [
              "Full form: SELECT columns FROM table WHERE filter GROUP BY groups HAVING group-filter ORDER BY sort LIMIT n.",
              "WHERE compares (=, <>, LIKE '%php%', IN, BETWEEN, IS NULL) - always present on UPDATE/DELETE too.",
              "Prepared SELECTs follow prepare / bind_param / execute / get_result / fetch_assoc.",
              "Aggregates: COUNT(*), AVG, SUM, MAX, MIN; GROUP BY answers per-group questions.",
              "INNER JOIN combines tables on a shared key: notes INNER JOIN users ON notes.user_id = users.id.",
              "UPDATE sets new values; an UPDATE or DELETE without WHERE rewrites every row - the classic disaster."
            ],
            diagram: {
              kind: "pipeline",
              title: "SELECT clause order",
              caption: "MySQL evaluates the clauses in this fixed order.",
              stages: [
                {
                  label: "FROM",
                  note: "which table(s) - JOIN happens here"
                },
                {
                  label: "WHERE",
                  note: "row-level filter"
                },
                {
                  label: "GROUP BY",
                  note: "fold rows into groups"
                },
                {
                  label: "ORDER BY",
                  note: "sort the surviving rows"
                },
                {
                  label: "LIMIT",
                  note: "cut to the first n"
                }
              ]
            },
            keyTerms: [
              {
                term: "WHERE",
                definition: "Clause filtering rows by a condition; also the safety clause of UPDATE and DELETE."
              },
              {
                term: "LIKE",
                definition: "Pattern match with % wildcards: title LIKE '%php%'."
              },
              {
                term: "GROUP BY",
                definition: "Folds rows sharing a key so aggregates (COUNT, AVG) answer per-group questions."
              },
              {
                term: "INNER JOIN",
                definition: "Combines rows of two tables where the join condition holds on a shared key."
              },
              {
                term: "LIMIT",
                definition: "Caps the number of returned rows - pagination's engine."
              }
            ],
            examQuestions: [
              {
                q: "Explain the SELECT statement with WHERE, ORDER BY, LIMIT, aggregate functions and JOIN, with examples.",
                marks: 7,
                outline: [
                  "Full clause order FROM-WHERE-GROUP BY-ORDER BY-LIMIT",
                  "WHERE operators incl. LIKE, IN, BETWEEN",
                  "Prepared SELECT with bind_param and get_result",
                  "COUNT/AVG/SUM with GROUP BY example",
                  "INNER JOIN on notes.user_id = users.id",
                  "UPDATE grammar and the missing-WHERE disaster",
                  "Worked latest-notes query"
                ]
              },
              {
                q: "What happens if an UPDATE statement has no WHERE clause?",
                marks: 2
              },
              {
                q: "Write a query returning each user's note count, largest first.",
                marks: 3
              }
            ],
          },
          {
            number: "5.8",
            title: "Deleting data, tables and databases",
            body: [
              "Destruction comes in three sizes, each more catastrophic than the last. Rows: DELETE FROM notes WHERE id = ?; — removes one row (or every row matching the WHERE), prepared with bind_param('i', $id), and the table structure survives. Table (structure + all data): DROP TABLE notes; — removes the entire table from the database, structure and every row gone, no WHERE clause possible. Database (everything): DROP DATABASE scribbly; — removes the entire database and every table in it, the most destructive statement in SQL. The ladder is strictly cumulative: a DELETE leaves the table; a DROP TABLE leaves the database; a DROP DATABASE leaves nothing.",
              "There is no undo. MySQL asks for no confirmation — the statement runs the instant $db->query() executes it. The safety net must be yours and it has three layers. Layer one: run destructive statements through prepared queries with ids you validated — if (!ctype_digit($_GET['id'])) exit; rejects any non-numeric id before it reaches SQL. Layer two: confirm in the UI before firing — confirm('Delete this note?') on the client (Unit III §3.13) and a second POST on the server (a hidden _method field or a separate delete.php endpoint). Layer three: keep backups — phpMyAdmin's Export or mysqldump before any risky operation; a .sql file is a time machine. A weekly automated backup script saves every student's semester at least once.",
              "A related verb with a gentler soul: TRUNCATE TABLE notes; — empties every row instantly while the structure survives. Unlike DELETE, TRUNCATE has no WHERE clause (it always empties the whole table), does not count affected rows (no $st->affected_rows after), and resets AUTO_INCREMENT to 1. TRUNCATE is also much faster than DELETE on large tables because it drops and recreates the table internally rather than deleting rows one by one — useful for resetting a test database between runs. The exam contrast to memorise: DELETE chooses rows (with WHERE, counts affected), TRUNCATE empties the whole table (no WHERE, resets AUTO_INCREMENT), DROP removes the table from existence.",
              "The cascade behaviour of foreign keys affects what gets deleted. If notes.user_id has a FOREIGN KEY constraint with ON DELETE CASCADE, deleting a user automatically deletes all their notes. Without the CASCADE clause, MySQL refuses to delete a user who still owns notes (referential integrity protection) — you must delete the notes first or change the constraint. The ON DELETE RESTRICT (default) and ON DELETE SET NULL alternatives are the other options. Knowing your schema's cascade rules prevents surprises where a DELETE mysteriously removes unrelated rows.",
              "For a 7-mark answer: name the three destruction verbs (DELETE FROM with WHERE, DROP TABLE, DROP DATABASE) with one trait each, state that there is no undo and no confirmation (so the safety net is yours: validate ids, confirm in UI, keep backups), and contrast TRUNCATE (empties the table, no WHERE, resets AUTO_INCREMENT, fast) with DELETE (chooses rows, with WHERE, counts affected) and DROP (removes the table from existence). Close with the foreign-key cascade behaviour (ON DELETE CASCADE, RESTRICT, SET NULL).",
            ],
            callout: {
              type: "exam",
              title: "DELETE vs TRUNCATE vs DROP — the one-line contrast",
              body: "DELETE chooses rows (with WHERE, counts affected, keeps structure and AUTO_INCREMENT). TRUNCATE empties the whole table (no WHERE, no count, resets AUTO_INCREMENT, keeps structure). DROP removes the table from existence (no structure, no data, no AUTO_INCREMENT).",
            },
            bullets: [
              "Three destruction sizes: DELETE rows, DROP TABLE, DROP DATABASE.",
              "DELETE FROM notes WHERE id = ? removes matching rows; the table survives.",
              "TRUNCATE TABLE empties every row instantly - no WHERE, no affected-rows count.",
              "DROP TABLE removes structure and data; DROP DATABASE removes the whole schema.",
              "MySQL asks no confirmation and there is no undo - the safety net is yours.",
              "ON DELETE CASCADE makes deleting a user delete their notes; without it MySQL refuses."
            ],
            diagram: {
              kind: "fork",
              title: "Choosing the destruction verb",
              caption: "Pick the smallest hammer that does the job.",
              start: "Need to remove something",
              branches: [
                {
                  label: "DELETE ... WHERE id = ?",
                  outcome: "specific rows gone; table and structure survive",
                  good: true
                },
                {
                  label: "TRUNCATE TABLE",
                  outcome: "all rows gone instantly; structure survives; no WHERE",
                  good: true
                },
                {
                  label: "DROP TABLE",
                  outcome: "structure and data gone together - last resort",
                  good: false
                },
                {
                  label: "DROP DATABASE",
                  outcome: "every table gone - only in disasters",
                  good: false
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "delete-note.php - a guarded, prepared delete",
              code: "<?php\n$id = $_GET['id'] ?? '';\nif (!ctype_digit($id)) {           // validate before destroying\n  die('Invalid note id');\n}\n\n$st = $db->prepare('DELETE FROM notes WHERE id = ? AND user_id = ?');\n$st->bind_param('ii', $id, $_SESSION['user_id']);\n$st->execute();\n\nif ($st->affected_rows === 1) {\n  header('Location: notes.php');   // PRG after success\n  exit;\n}\necho 'Nothing deleted (wrong id or not yours).';\n?>"
            },
            keyTerms: [
              {
                term: "DELETE FROM",
                definition: "Removes rows matching the WHERE clause; the table survives."
              },
              {
                term: "TRUNCATE TABLE",
                definition: "Empties all rows instantly; no WHERE clause and no per-row counting."
              },
              {
                term: "DROP TABLE",
                definition: "Deletes the table together with its structure and data."
              },
              {
                term: "ON DELETE CASCADE",
                definition: "Foreign-key option deleting dependent rows automatically."
              },
              {
                term: "affected_rows",
                definition: "Count of rows the last statement changed - confirms a delete hit something."
              }
            ],
            examQuestions: [
              {
                q: "Explain DELETE, TRUNCATE and DROP with their differences and the safety practices around destructive SQL.",
                marks: 7,
                outline: [
                  "DELETE FROM with WHERE and prepared statements",
                  "TRUNCATE: no WHERE, resets auto-increment, faster",
                  "DROP TABLE / DROP DATABASE scope",
                  "DELETE vs TRUNCATE vs DROP contrast table",
                  "No confirmation, no undo - validation, UI confirm, backups",
                  "ON DELETE CASCADE behaviour",
                  "Foreign-key refusals without CASCADE"
                ]
              },
              {
                q: "Difference between DELETE and TRUNCATE TABLE.",
                marks: 2
              },
              {
                q: "Why should a DELETE always carry a WHERE clause in application code?",
                marks: 3
              }
            ],
          },
          {
            number: "5.9",
            title: "phpMyAdmin",
            body: [
              "phpMyAdmin is MySQL's web control panel — a PHP application that talks to MySQL through the same mysqli calls you now write by hand. It ships with XAMPP, WAMP, MAMP, and most shared-hosting control panels, and it is the database tool most students meet first. The interface is a tree of databases on the left, a list of tables in the selected database, and tabs across the top for Browse, Structure, SQL, Search, Insert, Export, Import, Operations, and Privileges. Every action you take with the mouse generates and shows the equivalent SQL statement — phpMyAdmin is a free SQL tutor that you use while doing real work.",
              "The everyday operations are mouse-driven. Browse a table: click the table name, then Browse — see rows in a spreadsheet-like grid, edit any cell inline, delete a row with the red X, page through with the pagination controls. Structure: see the column definitions, add or drop columns with forms that generate ALTER statements, manage indexes and foreign keys. Insert: open a form to add a row with each column's value. Search: build a WHERE clause with a form (column, operator, value rows) instead of typing SQL. Run any SQL in the SQL tab (with a history of past queries for re-use). Import: load a .sql file to restore or migrate a database. Export: dump the whole database (or selected tables) as a .sql file — backup, migration, or sharing with a teammate.",
              "The two highest-value habits for a student. First: open the SQL tab, click a table, perform an action with the mouse (add a column, insert a row, drop an index), and study the SQL statement phpMyAdmin generated and showed you. This is the fastest way to learn ALTER, INSERT, CREATE INDEX, and every other SQL verb — phpMyAdmin writes correct SQL, you read and remember it. Second: use Export before any risky experiment. Exporting to a .sql file takes seconds and gives you a time machine — if your ALTER TABLE corrupts data or your DELETE removes too many rows, you import the .sql file and the database is restored. Treat every risky operation as preceded by an Export.",
              "Beyond table operations, phpMyAdmin exposes server-level information. The Server status page shows queries per second, connections, uptime, and the slow query log. The Variables page lists every MySQL configuration variable (max_connections, innodb_buffer_pool_size, character_set_server). The Processes page shows currently running queries — useful for spotting a long-running SELECT that is locking a table. The User accounts page manages MySQL users and their privileges (who can connect, from where, with what permissions on which databases). The Designer tab visualises foreign-key relationships between tables as an ER diagram — a free database diagramming tool that helps you understand the schema at a glance.",
              "For a 7-mark answer on phpMyAdmin: define it as a PHP web application that talks to MySQL through mysqli (the same calls you write), list its everyday operations (Browse, Structure, Insert, Search, SQL, Import, Export), state the two highest-value student habits (study the SQL it generates for mouse actions; Export before risky operations), and mention the server-level pages (status, variables, processes, user accounts, designer). Close with the recognition that phpMyAdmin is the most common database tool in shared hosting and the gateway most students use to learn SQL visually.",
            ],
            callout: {
              type: "tip",
              title: "phpMyAdmin as a free SQL tutor",
              body: "Open the SQL tab, click a table, perform an action with the mouse (add a column, insert a row, drop an index), and study the SQL statement phpMyAdmin generated and showed you. This is the fastest way to learn ALTER, INSERT, CREATE INDEX syntax — phpMyAdmin writes correct SQL, you read and remember it.",
            },
            bullets: [
              "phpMyAdmin is a PHP web application that manages MySQL through the same mysqli calls you write.",
              "Ships with XAMPP/WAMP/MAMP and most shared-hosting panels.",
              "Everyday ops: Browse rows, Structure, Insert, Search, SQL, Import, Export.",
              "Export dumps the database as SQL (backups); Import restores or clones it.",
              "Server view: status, variables, process list for diagnosing load.",
              "Best student habit: act with the mouse, then read the SQL it generated in the SQL tab."
            ],
            diagram: {
              kind: "layers",
              title: "phpMyAdmin's main panes",
              caption: "Where each everyday operation lives.",
              layers: [
                {
                  label: "Server / database tree",
                  note: "pick what to work on"
                },
                {
                  label: "Table list",
                  note: "Browse, Structure, Search tabs"
                },
                {
                  label: "SQL tab",
                  note: "free-form queries and generated SQL"
                },
                {
                  label: "Result grid",
                  note: "inline edit, delete, paginate"
                },
                {
                  label: "Import / Export",
                  note: "SQL dumps for backup and restore"
                }
              ]
            },
            codeExample: {
              language: "sql",
              caption: "What phpMyAdmin generates when you insert a row via the form",
              code: "INSERT INTO `notes` (`user_id`, `title`, `body`)\nVALUES (1, 'Exam prep', 'Revise Unit V joins');\n\n-- and when you edit it:\nUPDATE `notes`\nSET `title` = 'Exam prep 2'\nWHERE `id` = 7;\n\n-- export produces CREATE TABLE + INSERT statements\n-- like these, restorable with Import."
            },
            keyTerms: [
              {
                term: "phpMyAdmin",
                definition: "Web-based MySQL administration tool written in PHP, bundled with XAMPP."
              },
              {
                term: "SQL tab",
                definition: "The pane for free-form SQL - and where phpMyAdmin shows the SQL it generated for your mouse actions."
              },
              {
                term: "Export",
                definition: "Dumps a database as SQL text - the standard backup format."
              },
              {
                term: "Import",
                definition: "Executes an SQL dump to restore or clone a database."
              },
              {
                term: "Structure view",
                definition: "Shows column definitions, indexes and generated ALTER statements."
              }
            ],
            examQuestions: [
              {
                q: "What is phpMyAdmin? Explain its main operations and how it helps in learning SQL.",
                marks: 7,
                outline: [
                  "Define it: PHP application managing MySQL via mysqli",
                  "Where it ships (XAMPP, hosting panels)",
                  "Everyday operations: Browse, Structure, Insert, Search, SQL, Import, Export",
                  "Result grid editing and pagination",
                  "Export/Import as backup and restore",
                  "SQL tab as a free tutor: mouse action -> generated SQL",
                  "Server-level status and variables"
                ]
              },
              {
                q: "Which phpMyAdmin tab lets you run free-form SQL queries?",
                marks: 2
              },
              {
                q: "Why export a database before running ALTER statements by hand?",
                marks: 3
              }
            ],
          },
          {
            number: "5.10",
            title: "Database error handling",
            body: [
              "Every database call can fail, and disciplined code expects it. Checks come at three moments in the lifecycle of a query, and each catches a different class of failure. Connect: $db->connect_errno / $db->connect_error catches wrong password, server down, database missing, network unreachable — these failures mean nothing else in the script can run, so die() with a clear message is appropriate. Query: if (!$db->query($sql)) { echo $db->error; } catches syntax errors, unknown columns, duplicate keys on UNIQUE constraints, foreign-key violations — these are recoverable per-statement and the script may continue with the next query. Rows: check fetch_assoc() against null (it returns null when no more rows) and check $res->num_rows before assuming data exists — a login script that skips the num_rows check grants access on an empty result set because the empty $row evaluates as falsy but the if-test logic still proceeds.",
              "The login-script bug deserves its own paragraph because it is the most common database security mistake. The vulnerable pattern: $res = $db->query(\"SELECT * FROM users WHERE email='$email' AND password='$password'\"); if ($row = $res->fetch_assoc()) { login(); } — without checking $res->num_rows first, an empty result set still enters the if-block because fetch_assoc returns false (falsy) but the assignment evaluates to false which is the falsy branch. Worse: with string interpolation, an attacker who enters ' OR '1'='1 as the email bypasses the password check entirely (this is SQL injection again — use prepared statements). The correct pattern: prepare the SELECT, bind the email, execute, get_result, check num_rows === 1, then fetch_assoc, then password_verify($password, $row['password_hash']).",
              "Modern PHP can throw exceptions instead of returning false on database errors, the recommended style for new code. mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); at the top of config.php tells mysqli to throw mysqli_sql_exception on any error — connection, query, prepare, bind, execute. The script wraps database calls in try/catch blocks: try { $st = $db->prepare($sql); $st->bind_param('s', $email); $st->execute(); } catch (mysqli_sql_exception $e) { error_log($e->getMessage()); show_error_page(); } — the catch routes failures into a single handler, no per-call if-checks needed. The exception message includes the SQL state code, the error number, and the human message — far more information than $db->error alone.",
              "Presentation rules separate development from production. During development, print the real error — it names the column you misspelled, the table that does not exist, the constraint that was violated, the line number in your SQL. Examiners want to see this in lab work. In production, never print the real error to the visitor — it leaks schema information (table names, column names) that helps attackers probe for SQL injection. Instead, log the error with error_log($e->getMessage()) to the PHP error log (or a database error table) and show the visitor a plain 'something went wrong, please try again later' page. The pattern: log everything for the developer, show nothing to the attacker.",
              "For a 7-mark answer: name the three check moments (connect with connect_errno, query with if (!query) and $db->error, rows with num_rows and fetch-against-null), explain the login-script num_rows bug with the SQL-injection angle, demonstrate the exception-based style (mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT) and try/catch), and close with the dev-vs-prod presentation rule (print errors in dev, log and show friendly page in prod). The pattern to carry into the case study: validate input, prepare statements, check every result, fail loudly in dev, quietly in prod.",
            ],
            callout: {
              type: "warning",
              title: "The login-script security trap",
              body: "Without checking $res->num_rows === 1 before fetching, an empty result set may still trigger the login branch. And with string interpolation, an attacker enters ' OR '1'='1 as email to bypass the password check. Always: prepared statement + bind_param + num_rows === 1 + password_verify().",
            },
            bullets: [
              "Three check moments: connect (connect_errno), query (false return + $db->error), rows (num_rows, fetch null).",
              "Fail loudly in development: print the real error; fail quietly in production: log it, show a friendly page.",
              "The login-script bug: trusting a fetched row without checking num_rows - and interpolating credentials.",
              "mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT) makes errors throw exceptions.",
              "try / catch (mysqli_sql_exception) wraps risky blocks for clean handling.",
              "Every user input reaches SQL through prepared statements - error handling and injection control are one discipline."
            ],
            diagram: {
              kind: "fork",
              title: "When a query fails, who is to blame?",
              caption: "Classify the failure, then choose the response.",
              start: "$db->query() returns false",
              branches: [
                {
                  label: "Connection dead",
                  outcome: "connect_errno - check credentials/server, retry once",
                  good: false
                },
                {
                  label: "SQL syntax error",
                  outcome: "$db->error names the typo - fix the statement",
                  good: false
                },
                {
                  label: "Duplicate key / constraint",
                  outcome: "expected business error - inform the user politely",
                  good: true
                },
                {
                  label: "Unhandled exception",
                  outcome: "with strict reporting: catch, log, show a safe page",
                  good: true
                }
              ]
            },
            codeExample: {
              language: "php",
              caption: "safe.php - exception-based database error handling",
              code: "<?php\nmysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);\ntry {\n  $db = new mysqli('localhost', 'amara', 'secret', 'scribbly');\n  $st = $db->prepare('SELECT title FROM notes WHERE user_id = ?');\n  $st->bind_param('i', $uid);\n  $st->execute();\n  $res = $st->get_result();\n  while ($row = $res->fetch_assoc()) { echo $row['title']; }\n} catch (mysqli_sql_exception $e) {\n  error_log('DB: ' . $e->getMessage());   // full detail to the log\n  echo 'Something went wrong. Please try later.';  // safe message\n}\n?>"
            },
            keyTerms: [
              {
                term: "connect_errno",
                definition: "Connection-stage error code; the first check in every database script."
              },
              {
                term: "$db->error",
                definition: "The MySQL error message for the last failed query - read it in development."
              },
              {
                term: "num_rows",
                definition: "Row count of a result set; check it before trusting any fetched row."
              },
              {
                term: "mysqli_report",
                definition: "Switches mysqli to throwing exceptions (MYSQLI_REPORT_ERROR | STRICT)."
              },
              {
                term: "mysqli_sql_exception",
                definition: "The exception type to catch around database code under strict reporting."
              }
            ],
            examQuestions: [
              {
                q: "Explain database error handling in PHP at the connect, query and row-fetch stages, with examples.",
                marks: 7,
                outline: [
                  "Connect stage: connect_errno / connect_error with die()",
                  "Query stage: false return and $db->error",
                  "Row stage: num_rows and fetch-against-null",
                  "The login-script bug and its SQL-injection angle",
                  "mysqli_report strict exceptions with try/catch",
                  "Development vs production error presentation",
                  "Prepared statements as part of the discipline"
                ]
              },
              {
                q: "Why must a login script check num_rows before using a fetched row?",
                marks: 2
              },
              {
                q: "What does mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT) change?",
                marks: 3
              }
            ],
          },
          {
            number: "5.11",
            title: "Case study: a web-based notes application",
            body: [
              "Everything in this book now assembles into one product: Scribbly, a web-based notes application. The architecture is the three tiers — browser (HTML + CSS + JavaScript validation), PHP application (sessions, logic, prepared queries), MySQL storage (the notes and users tables) — organized as files: config.php (connection), auth.php (login/register/logout, password hashing with password_hash()), notes.php (list + create), note.php (view, edit, delete one note), and header.php / footer.php included by every page for the shared shell. The browser is the presentation tier (Units I-III); PHP is the application tier (Unit IV); MySQL is the storage tier (this unit). Every page is one honest round-trip of the diagram from §5.1.",
              "The user stories walk the whole syllabus. Register: an HTML form (Unit II) styled by CSS (Unit III) posts to PHP (Unit IV), which validates server-side, hashes the password with password_hash(), and INSERTs via a prepared statement (this unit). Log in: SELECT the hash by email, verify with password_verify(), store the user id in $_SESSION. Read notes: a parameterized SELECT renders rows through the escape-and-echo loop, with LIMIT paging and ORDER BY recency. Write a note: the validated form INSERTs; the list page redirects after success (the post-redirect-get pattern that stops double submits). Edit and delete: links carry the note id, PHP verifies the note belongs to the session's user (authorization — the check everyone forgets), then UPDATE or DELETE by prepared statement. Find: a search box feeds WHERE title LIKE ?. Deploy the folder to Apache's htdocs, create the database in phpMyAdmin, and the application is live.",
              "Security is built into every layer and earns its own paragraph because it is where marks are lost. Passwords are never stored in plain text — password_hash($password, PASSWORD_DEFAULT) produces a bcrypt hash with a random salt, and password_verify($password, $row['password_hash']) checks the password against the hash at login. SQL injection is defeated by prepared statements with bind_param on every query that takes user input (the §5.5 discipline). XSS is defeated by htmlspecialchars() on every echo of user-sourced or database-sourced text (the §4.8 rule). CSRF — cross-site request forgery, where a malicious site tricks the user's browser into POSTing to a logged-in site — is defeated by a per-session token in every form (a hidden input checked against $_SESSION on POST). Session fixation is defeated by session_regenerate_id(true) after login (the §4.15 rule). Authorization — the check everyone forgets — is enforced by including user_id in every UPDATE and DELETE WHERE clause, so even a forged note id cannot edit another user's note.",
              "Deployment is the final exam answer. The Scribbly folder (config.php, auth.php, notes.php, note.php, header.php, footer.php, plus /css and /js) is uploaded to Apache's htdocs directory (via FTP, SSH, or git push). The MySQL database is created in phpMyAdmin by importing the schema.sql file (the CREATE DATABASE and CREATE TABLE statements). A user with privileges on the scribbly database is created and its credentials put in config.php. The .htaccess file (or Apache config) routes /notes/42 to note.php?id=42 with mod_rewrite if clean URLs are wanted. The site is live at https://scribbly.in/. Maintenance starts immediately: security updates to PHP and MySQL, weekly database exports via phpMyAdmin's Export, error monitoring via PHP's error_log into error.log, and iterative improvement from analytics (which pages get traffic, which forms get abandoned).",
              "For a 7-mark answer on the case study: name the five files (config, auth, notes, note, header/footer) and the three tiers (browser/PHP/MySQL), trace the register-and-login flow (form → validate → password_hash → INSERT; then email → SELECT → password_verify → $_SESSION), describe the read-write-edit-delete loop with prepared statements and the post-redirect-get pattern, and close with the four security pillars (password_hash, prepared statements, htmlspecialchars, CSRF tokens) and the authorization rule (user_id in every WHERE clause). The code example below shows the note.php core — the whole course in one file.",
            ],
            diagram: {
              kind: "layers",
              title: "The case study's three tiers",
              caption: "This book, stacked: Units I–III at the top, Unit IV in the middle, this unit at the base.",
              layers: [
                { label: "Presentation — browser", note: "HTML forms · CSS · JS regex validation" },
                { label: "Application — PHP", note: "$_SESSION · validate · prepare · execute · render" },
                { label: "Storage — MySQL", note: "users · notes (id, user_id, title, body, created_at)" },
              ],
            },
            codeExample: {
              language: "php",
              caption: "note.php (core) — the whole course in one file",
              code: `<?php
session_start(); require 'config.php';
if (!isset($_SESSION['user_id'])) { header("Location: login.php"); exit; }
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ctype_digit($_POST['id'] ?? '')) {
  $st = $db->prepare("UPDATE notes SET title=?, body=? WHERE id=? AND user_id=?");
  $st->bind_param("ssii", $_POST['title'], $_POST['body'],
                  $_POST['id'], $_SESSION['user_id']);  // ownership enforced in SQL
  $st->execute();
  header("Location: notes.php"); exit;
              }
// … fetch the note, include header.php, render the form (escaped), include footer.php`,
            },
            bullets: [
              "Scribbly assembles the whole course: browser tier (HTML/CSS/JS), PHP tier, MySQL tier.",
              "Files: config.php (connection), auth.php (register/login), notes.php (list), note.php (one note), header/footer.php.",
              "Register flow: form -> server validation -> password_hash -> prepared INSERT.",
              "Login flow: SELECT by email -> password_verify -> session_regenerate_id -> redirect.",
              "Security stack: htmlspecialchars output escaping, HttpOnly/SameSite cookies, prepared statements everywhere.",
              "Deployment: upload to htdocs, create the DB in phpMyAdmin, run init.php, submit the sitemap."
            ],
            keyTerms: [
              {
                term: "Three-tier architecture",
                definition: "Browser renders, PHP computes, MySQL stores - the case study's whole shape."
              },
              {
                term: "password_hash()",
                definition: "Produces a salted bcrypt hash of a password - plain-text storage is never acceptable."
              },
              {
                term: "password_verify()",
                definition: "Checks a submitted password against a stored hash in constant time."
              },
              {
                term: "Prepared statements",
                definition: "The only acceptable route from user input to SQL in every file of the app."
              },
              {
                term: "Deployment",
                definition: "Upload files, create the database, run init.php, verify DNS and submit the sitemap."
              }
            ],
            callout: {
              type: "exam",
              title: "Trace the register-and-login flow",
              body: "The 7-mark case-study answer is a story: form posts -> PHP validates -> password_hash -> prepared INSERT -> login SELECT -> password_verify -> session + regenerate -> redirect. Draw the arrows and name the unit behind each step."
            },
            examQuestions: [
              {
                q: "Explain the design of a web-based notes application covering all five units: files, tiers, security and deployment.",
                marks: 7,
                outline: [
                  "Name the five files and the job of each",
                  "Three tiers: browser, PHP, MySQL",
                  "Register flow: form, validation, password_hash, prepared INSERT",
                  "Login flow: SELECT, password_verify, session_regenerate_id",
                  "Security stack: escaping, HttpOnly/SameSite, prepared statements, least privilege",
                  "Folder structure and shared header/footer includes",
                  "Deployment steps: htdocs upload, phpMyAdmin DB, init.php, sitemap"
                ]
              },
              {
                q: "Why are passwords hashed rather than encrypted in a web application?",
                marks: 2
              },
              {
                q: "Name the files of the notes case study and state each one's responsibility.",
                marks: 3
              }
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
        { topic: "HTTP, browsers/servers, Web 2.0, web design", weight: "≈ 8–10 marks", note: "Definitions + a diagram of the HTTP exchange." },
        { topic: "HTML elements (forms, tables, lists, images)", weight: "≈ 10–12 marks", note: "Write actual code — examiners look for valid syntax." },
        { topic: "XHTML, meta tags, frames, MIME, cookies/sessions", weight: "≈ 8–10 marks", note: "Short-notes cluster; high marks-per-minute." },
        { topic: "CSS box model, positioning, CSS3", weight: "≈ 10–12 marks", note: "Draw the box; write one media query." },
        { topic: "JavaScript + DOM + DHTML events", weight: "≈ 10–12 marks", note: "One validation snippet with addEventListener." },
        { topic: "XML, DTD, XSLT", weight: "≈ 8–10 marks", note: "Write a small XML + one DTD rule." },
        { topic: "PHP control flow, arrays, forms, sessions, OOP", weight: "≈ 12–15 marks", note: "Code-heavy — practise one form-processing pattern." },
        { topic: "PHP + MySQL (CRUD, prepared statements, case study)", weight: "≈ 12–15 marks", note: "Prepare the case-study architecture diagram cold." },
      ],
    },
    {
      id: "schedule",
      heading: "A six-week study schedule",
      body: [
        "Two hours a day, five days a week. Build Scribbly (the case study) across weeks 4–6 — it ties the whole syllabus together and is the highest-yield single exercise.",
      ],
      weeks: [
        { week: "Week 1", focus: "Unit I + start of Unit II", tasks: ["Internet vs WWW, HTTP request/response", "Browsers, servers, Web 2.0, web design principles", "HTML skeleton, formatting, lists, tables"] },
        { week: "Week 2", focus: "Unit II remainder", tasks: ["Images, forms (all controls)", "XHTML rules, meta tags, entities", "Frames, MIME, cookies/sessions theory", "Browser architecture, HTML5, web sockets, JS regex"] },
        { week: "Week 3", focus: "Unit III — CSS + JS", tasks: ["CSS syntax, cascade, box model (draw it)", "Positioning, CSS2 vs CSS3, media queries", "JavaScript variables/functions/objects", "DOM manipulation + form validation snippet", "DHTML events, event delegation"] },
        { week: "Week 4", focus: "Unit IV — XML + PHP", tasks: ["XML well-formedness, DTD, XSD, XSLT pipeline", "PHP syntax, decisions, loops, PHP+HTML interleaving", "Arrays (3 kinds), functions, string toolkit", "Form processing pattern, file handling", "Cookies vs sessions, OOP PHP"] },
        { week: "Week 5", focus: "Unit V — MySQL", tasks: ["Connect, create DB/tables, list", "Insert with prepared statements", "SELECT with WHERE/ORDER/LIMIT, UPDATE", "DELETE/TRUNCATE/DROP contrast", "phpMyAdmin tour, error handling"] },
        { week: "Week 6", focus: "Case study + revision", tasks: ["Build Scribbly end-to-end (register, login, CRUD)", "Rehearse the three-tier architecture diagram", "Two full past papers under time"] },
      ],
    },
    {
      id: "exam-tips",
      heading: "Exam-hall strategy",
      examTips: [
        "When asked for HTML/CSS/PHP/JS, always write actual runnable code in a code block — examiners reward syntax correctness, not prose.",
        "Draw the HTTP exchange, the box model, the DOM tree, the three-tier architecture — the diagram is half the marks on those questions.",
        "For 'cookies vs sessions', state the division of labour verbatim: 'the cookie carries the key; the session holds the kingdom.'",
        "In every PHP database answer, use prepared statements with bind_param — never interpolate variables into SQL. Naming SQL injection earns the security mark.",
        "For CSS specificity, write the tiebreak chain: inline > id > class > tag, then source order.",
        "For the case study, name all five files (config, auth, notes, note, header/footer) and the post-redirect-get pattern.",
        "For XML, state the four well-formedness rules (one root, strict nesting, everything closed, attributes quoted) before writing any DTD.",
        "Time-box: 1-mark ≤ 3 min, 5-mark ≤ 12 min, 10-mark ≤ 22 min.",
      ],
    },
    {
      id: "slips",
      heading: "Common slips that cost easy marks",
      bullets: [
        "Forgetting the alt attribute on <img> — accessibility mark lost.",
        "Using GET for passwords in a form — must be POST.",
        "Saying frames are part of HTML5 — framesets were removed; only <iframe> survives.",
        "Confusing CSS static with relative positioning — relative keeps the element in flow, absolute takes it out.",
        "Using == instead of === in JavaScript validation — loose equality bites.",
        "Echoing $_POST data without htmlspecialchars() — the XSS hole examiners love to penalize.",
        "Interpolating variables into SQL instead of prepared statements — the SQL injection mark lost.",
        "Forgetting the WHERE clause on UPDATE/DELETE — rewrites every row.",
        "Calling setcookie() after echo — 'headers already sent' error.",
      ],
    },
  ],
};
